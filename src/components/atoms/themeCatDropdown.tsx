import { useRef, useState } from 'react';
import { themes } from '@/content';
import { themeCategories } from '@/constants/theme';
import { useClickOutside } from '@/hooks/useClickOutside';

const ThemeCatDropdown = ({
  handleAddCategory,
  listCategoriesId,
  handleClearFilter,
}: {
  listCategoriesId: number[];
  handleAddCategory: (id: number) => void;
  handleClearFilter: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const options = themeCategories;
  const handleClear = () => {
    setIsOpen(false);
    handleClearFilter();
  };
  return (
    <div className="dropdown-theme w-fit relative inline-block text-left">
      <button
        id="dropdownDefaultButton"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white dark:text-black cursor-pointer bg-accent h-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2 text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      > 
        Chủ đề
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          id="dropdownSearch"
          className=" absolute left-[-130px] w-fit py-2 md:w-[450px] z-10 bg-white rounded-lg shadow dark:bg-brand-800"
        >
          <ul
            className="h-[400px] px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownSearchButton"
          >
            {options.map((option, index) => (
              <li
                onClick={() => handleAddCategory(option.id)}
                key={`${index} - ${option.id} - ${listCategoriesId.includes(option.id)} `}
              >
                <a className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    checked={listCategoriesId.includes(option.id)}
                    id={`checkbox-item-${index}`}
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor={`checkbox-item-${index}`}
                    className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    {option.label}
                  </label>
                </a>
              </li>
            ))}
          </ul>
          <a
            onClick={handleClear}
            className="flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2Z" />
            </svg>
            Bỏ lọc
          </a>
        </div>
      )}
    </div>
  );
};

export default ThemeCatDropdown;
