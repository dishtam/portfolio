import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-white rounded-lg shadow  m-1">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src="/bg1.png" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Rohit Roy
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6 uppercase">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline me-4 md:me-6 uppercase"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/dishtam/portfolio"
                className="hover:underline me-4 md:me-6 uppercase"
                target="_blank"
              >
                Source Code
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {currentYear}{" "}
          <a
            href="#"
            className="hover:underline font-semibold text-gray-700 dark:text-gray-200"
          >
            Rohit
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
