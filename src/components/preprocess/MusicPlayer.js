export default function MusicPlayer() {
  return (
    <div className="d-flex gap-2 mt-3">
      <button
        id="play"
        className="btn btn-outline-primary w-100 fw-bold d-flex gap-2 justify-content-center align-items-center"
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
          className="lucide lucide-play-icon lucide-play"
        >
          <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
        </svg>
        <span>Play</span>
      </button>
      <button
        id="stop"
        className="btn btn-outline-danger w-100 fw-bold d-flex gap-2 justify-content-center align-items-center"
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
          className="lucide lucide-square-icon lucide-square"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
        </svg>
        <span>Stop</span>
      </button>
    </div>
  );
}
