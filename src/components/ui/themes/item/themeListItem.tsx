'use client';

import NoDataPage from '@/components/atoms/nodata';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import { ThemeItem } from '.';

const itemsPerPage = 20;

const ThemeListItems = ({ themes }: any) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [filteredThemes, setFilteredThemes] = useState(themes);

  // Calculate the index range for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the themes array to display the items for the current page

  const handleChange = ({ event, value }: any) => {
    setPage(value);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // or 'smooth' for smooth scrolling
    });
  };

  // Filter themes based on search input
  const handleSearch = () => {
    if (!search) {
      setFilteredThemes(themes);
      setPage(1);

      return;
    }

    const filtered = themes
      .map((theme: any) => {
        // Split the search input into individual words
        const searchWords = search.toLowerCase().split(' ').filter(Boolean);

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="flex justify-center"
      >
        <div className="relative mb-6 w-[90%]">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            id="default-search"
            className=" no-underline	 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-2 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tìm kiếm mẫu thiết kế"
            required
          />
          <button
            onClick={handleSearch}
            type="submit"
            className="bg-accent  hocus:shadow text-white absolute end-2.5 bottom-2.5 bg-blue hover:bg-accent cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2 text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

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
      <Pagination
        count={Math.ceil(filteredThemes.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        className="w-full flex justify-center my-10"
      />
    </div>
  );
};

export default ThemeListItems;
