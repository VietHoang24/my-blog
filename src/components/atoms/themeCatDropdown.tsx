import { useState } from 'react';

const ThemeCatDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: 'Dashboard', href: '#' },
    { label: 'Settings', href: '#' },
    { label: 'Earnings', href: '#' },
    { label: 'Sign out', href: '#' },
  ];
  const handleClickCategoryItem = (value) => {
    console.log('value', value);
  };
  return (
    <div className=" w-[200px] relative inline-block text-left">
      {/* ThemesDropdown button */}
      <button
        id="dropdownDefaultButton"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white cursor-pointer bg-accent h-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2 text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
          id="dropdown"
          className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {options.map((option, index) => (
              <li onClick={()=>handleClickCategoryItem(option)} key={index}>
                <a
                  href={option.href}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {option.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeCatDropdown;
