import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"


export const Header = () => {

  const [hidden, setHidden] = useState(true);
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryValue = event.target.search.value;
    event.target.reset();

    return navigate (`/search?q=${queryValue}`);
  }

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

  }, [darkMode])

  const Active = "text-lg block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
  const inActive = "text-lg block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b-2 dark:border-b-1 dark:border-gray-900 sticky top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
              MotorKu
            </span>
          </Link>
          <div id="mobile-nav" className="flex other2:order-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip"
              type="button"
              data-toggle-dark="light"
              className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <svg
                  aria-hidden="true"
                  data-toggle-icon="sun"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  data-toggle-icon="moon"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>

            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
            </div>
            <button
              onClick={() => setHidden(!hidden)}
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg other2:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              hidden ? "hidden" : ""
            } items-center justify-between w-full other2:flex other2:w-auto other2:order-1`}
            id="navbar-search"
          >
            <div className="relative mt-3 other2:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
            <ul className="flex flex-col other2:ml-60 p-8 other2:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 other2:flex-row other2:space-x-10 other2:mt-0 other2:border-0 other2:bg-white dark:bg-gray-800 other2:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? Active : inActive)}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mesin"
                  className={({ isActive }) => (isActive ? Active : inActive)}
                >
                  Mesin
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/roda"
                  className={({ isActive }) => (isActive ? Active : inActive)}
                >
                  Roda
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bohlam"
                  className={({ isActive }) => (isActive ? Active : inActive)}
                >
                  Bohlam
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/baterai_and_sekring"
                  className={({ isActive }) => (isActive ? Active : inActive)}
                >
                  Baterai & sekring
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rantai"
                  className={({ isActive }) => (isActive ? Active : inActive)}
                >
                  Rantai
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/busi_and_oli"
                  className={({ isActive }) => (isActive ? Active : inActive)}
                >
                  Busi & Oli
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
