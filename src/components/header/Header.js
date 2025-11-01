import IntroModal from "./IntroModal";
export default function Header({ theme, setTheme }) {
  return (
    <>
      <IntroModal />
      <header className="d-flex justify-content-between align-items-center p-3 mb-4 border-bottom">
        <h2>Strudel Demo</h2>
        <ul className="list-unstyled d-flex gap-3 mb-0">
          <li>
            <button
              className="btn btn-outline-secondary d-flex align-items-center gap-2"
              data-bs-toggle="modal"
              data-bs-target="#introModal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-open-text-icon lucide-book-open-text"
              >
                <path d="M12 7v14" />
                <path d="M16 12h2" />
                <path d="M16 8h2" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                <path d="M6 12h2" />
                <path d="M6 8h2" />
              </svg>
              <span>Intro</span>
            </button>
          </li>
          <li>
            <button
              className={`btn btn-outline-${
                theme === "Light" ? "primary" : "secondary"
              } d-flex align-items-center gap-2`}
              onClick={() =>
                setTheme((prev) => (prev === "Light" ? "Dark" : "Light"))
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sun-moon-icon lucide-sun-moon"
              >
                <path d="M12 2v2" />
                <path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715" />
                <path d="M16 12a4 4 0 0 0-4-4" />
                <path d="m19 5-1.256 1.256" />
                <path d="M20 12h2" />
              </svg>
              <span>{theme} Mode</span>
            </button>
          </li>
        </ul>
      </header>
    </>
  );
}
