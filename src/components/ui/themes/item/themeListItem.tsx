'use client';

import NoDataPage from '@/components/atoms/nodata';
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import { ThemeItem } from '.';
import ThemeCatDropdown from '@/components/atoms/themeCatDropdown';
import { themeCategories } from '@/constants/theme';


const ThemeListItems = ({ themes, featuredOnly }: any) => {
  const itemsPerPage = featuredOnly ? 5 : 20;
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [listCategoriesId, setListCategoriesId] = useState<number[]>([]);
  // Calculate the index range for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const categoryValues = themeCategories
    .filter((category) => listCategoriesId.includes(category.id)) // Lọc các themeCategories theo id
    .map((category) => category.value.split(',')); // Tách các giá trị trong `value`

  const allValues: any = [].concat(...(categoryValues as any));
  const themesAfterFilterByCategory =
    allValues.length > 0
      ? themes.filter((theme: any) => allValues.includes(theme.repo))
      : themes; // Trả về tất cả themes nếu allValues rỗng

  const [filteredThemes, setFilteredThemes] = useState(
    themesAfterFilterByCategory,
  );

  const handleChange = (e: any, value: any) => {
    setPage(value);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // or 'smooth' for smooth scrolling
    });
  };
  const handleAddOrRemoveCategory = (id: number) => {
    setListCategoriesId((prev: number[]) => {
      if (!prev.includes(id)) {
        // Nếu chưa có id trong mảng, thêm vào
        return [...prev, id];
      } else {
        // Nếu đã có id trong mảng, xóa nó
        return prev.filter((categoryId) => categoryId !== id);
      }
    });
  };
  useEffect(() => {
    handleSearch();
  }, [listCategoriesId]);

  const handleClearFilter = () => {
    setListCategoriesId([]);
  };
  // Filter themes based on search input
  const handleSearch = () => {
    if (!search) {
      setFilteredThemes(themesAfterFilterByCategory);
      setPage(1);

      return;
    }

    const filtered = themesAfterFilterByCategory
      .map((theme: any) => {
        // Split the search input into individual words
        const searchWords = search.toLowerCase().split(',').filter(Boolean);

        // Calculate the relevance score
        let score = 0;

        searchWords.forEach((word) => {
          if (theme.name.toLowerCase().includes(word)) score += 2; // Higher weight for name matches
          if (theme.description.toLowerCase().includes(word)) score += 1; // Lower weight for description matches
        });

        return { theme, score };
      })
      .filter(({ score }: any) => score > 0) // Only include results with a score greater than 0
      .sort((a: any, b: any) => b.score - a.score) // Sort by relevance score in descending order
      .map(({ theme }: any) => theme); // Extract the original themes after sorting
    setFilteredThemes(filtered);
    setPage(1); // Reset to the first page when the search changes
  };

  const currentItems = filteredThemes.slice(startIndex, endIndex);

  return (
    <div>
      {!featuredOnly && (
        <div className="flex justify-between gap-5 items-center mb-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="flex flex-1 justify-center items-center"
          >
            <div className="relative w-full">
              {/* Search Icon (non-clickable placeholder icon) */}
              <div
                onClick={handleSearch}
                className="absolute cursor-pointer inset-y-0 start-0 flex items-center ps-3 "
              >
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>

              {/* Input Field */}
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                id="default-search"
                className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-2 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tìm kiếm mẫu thiết kế"
                onTouchStart={(e) => e.preventDefault()}
              />
            </div>
          </form>

          <ThemeCatDropdown
            handleClearFilter={handleClearFilter}
            handleAddCategory={handleAddOrRemoveCategory}
            listCategoriesId={listCategoriesId}
          />
        </div>
      )}

      {currentItems.length ? (
        <ul>
          {currentItems.map((project: any, index: any) => (
            <li key={project.name + index}>
              <ThemeItem project={project} />
            </li>
          ))}
        </ul>
      ) : (
        <NoDataPage />
      )}
      {!featuredOnly && (
        <Pagination
          count={Math.ceil(filteredThemes.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          className="w-full flex justify-center my-10"
        />
      )}
    </div>
  );
};

export default ThemeListItems;
