import React from "react";

export default function Footer() {
  return (
    <footer className="pb-4 text-gray-800">
      <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/AshmaDev/transaction-app/blob/main/README.md"
                className="text-md text-gray-800 hover:text-pink-700 transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                About
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/AshmaDev/transaction-app"
                className="text-md text-gray-800 hover:text-pink-700 transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Source Code
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            by&nbsp;
            <a
              href="#!"
              className="text-md text-gray-800 hover:text-pink-700 transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              Damian Kowalski
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
