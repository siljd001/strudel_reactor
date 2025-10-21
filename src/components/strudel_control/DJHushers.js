import { FindBeats } from "../helper/FindBeats";
import { useState } from "react";

export default function DJHushers({ ProcAndPlay, stranger_tune }) {
  const beats = FindBeats(stranger_tune);
  const [beatsPlaying, setBeatsPlaying] = useState(beats.map((_) => true));
  console.log(beatsPlaying);
  return (
    <>
      <h5 className="fw-bold text-secondary">Music Control</h5>
      {beats &&
        Object.entries(beats).map(([index, beat], currentIndex) => (
          <div key={index} className="d-flex align-items-center gap-2 mb-2">
            <button className={`btn btn-outline-${beatsPlaying[currentIndex] ? "primary" : "secondary"} me-2 mb-2 p-2 d-flex gap-2 align-items-center`} onClick={() => {
              let newBeatsPlaying = [...beatsPlaying];
              newBeatsPlaying[currentIndex] = !newBeatsPlaying[currentIndex];
              setBeatsPlaying(newBeatsPlaying);
            }}>
              {beatsPlaying[currentIndex] ? (
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
              ) : (
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
                  className="lucide lucide-volume-x-icon lucide-volume-x"
                >
                  <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                  <line x1="22" x2="16" y1="9" y2="15" />
                  <line x1="16" x2="22" y1="9" y2="15" />
                </svg>
              )}
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
