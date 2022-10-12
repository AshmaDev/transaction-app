import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full clearNav z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <Logo />
        </div>
        <div className="md:flex flex-grow items-center flex">
          <a
            href="https://github.com/AshmaDev/transaction-app"
            className="ml-auto pl-7"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

const Logo = () => (
  <a
    href="/"
    className="flex text-2xl font-bold mb-0"
  >
    Transactions
    <span className="text-pink-700">
      App
    </span>
  </a>
)

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="github-link--logo"
    viewBox="0 0 25 24"
    fill="none"
    height="20"
    width="30"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.3019 0C5.50526 0 0 5.50526 0 12.3019C0 17.7392 3.52669 22.3458 8.4127 23.977C9.0244 24.0902 9.25095 23.7126 9.25095 23.3804C9.25095 23.0858 9.2434 22.3156 9.23585 21.2885C5.81488 22.0286 5.08991 19.6422 5.08991 19.6422C4.53108 18.2225 3.72304 17.8373 3.72304 17.8373C2.60537 17.0746 3.80611 17.0897 3.80611 17.0897C5.03705 17.1803 5.69405 18.3584 5.69405 18.3584C6.78906 20.2388 8.57129 19.6951 9.27361 19.3779C9.38688 18.585 9.70406 18.0412 10.0514 17.7316C7.32524 17.4295 4.45556 16.3723 4.45556 11.66C4.45556 10.3158 4.93132 9.22074 5.72426 8.35984C5.59588 8.04266 5.17298 6.79662 5.83754 5.10501C5.83754 5.10501 6.87213 4.77274 9.22074 6.36616C10.2025 6.0943 11.2522 5.95837 12.3019 5.95082C13.344 5.95837 14.4013 6.0943 15.383 6.36616C17.7316 4.77274 18.7662 5.10501 18.7662 5.10501C19.4383 6.79662 19.0154 8.05021 18.887 8.35984C19.6724 9.22074 20.1482 10.3158 20.1482 11.66C20.1482 16.3874 17.271 17.422 14.5297 17.7316C14.9677 18.1092 15.3679 18.8644 15.3679 20.0123C15.3679 21.6586 15.3528 22.9801 15.3528 23.3879C15.3528 23.7202 15.5718 24.0978 16.1986 23.977C21.0846 22.3458 24.6038 17.7392 24.6038 12.3094C24.6038 5.50526 19.0985 0 12.3019 0Z"
      fill="black"
    />
  </svg>
);
