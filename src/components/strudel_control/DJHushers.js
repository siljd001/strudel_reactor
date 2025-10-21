import { FindBeats } from "../helper/FindBeats";

export default function DJHushers({ ProcAndPlay, stranger_tune }) {
  const beats = FindBeats(stranger_tune);
  const beatsPlaying = beats.map((beat) => true);
  console.log(beats);
  return (
    <>
      <h5 className="fw-bold text-secondary">Music Hushers</h5>
      {Object.entries(beats).map(([index, beat]) => (
        <div key={index}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-volume2-icon lucide-volume-2"
            >
              <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
              <path d="M16 9a5 5 0 0 1 0 6" />
              <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
            </svg>
          </button>
          <span>{beat.name}</span>
        </div>
      ))}
      {/* <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          onChange={ProcAndPlay}
          defaultChecked
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          p1: ON
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          onChange={ProcAndPlay}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          p1: HUSH
        </label>
      </div> */}
    </>
  );
}
