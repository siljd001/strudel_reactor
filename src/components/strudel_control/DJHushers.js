import { FindBeats, HushBeats } from "../helper/BeatsHelper";
import { getGlobalEditor } from "../../Processors";
import { useEffect, useState } from "react";

export default function DJHushers({ ProcAndPlay, musicInput, setMusicInput }) {
  const [beats, setBeats] = useState(FindBeats(musicInput));
  // Always keep beats updated with musicInput changes
  useEffect(() => setBeats(FindBeats(musicInput)), [musicInput]);
  const [beatsPlaying, setBeatsPlaying] = useState(beats.map((_) => true));
  console.log(beats);
  console.log(beats[0].name.length);
  return (
    <>
      <h5 className="fw-bold text-secondary">Music Control</h5>
      {beats &&
        // Map through each beat and create a button to toggle its playing state
        Object.entries(beats).map(([currentIndex, { name, index }]) => (
          <div key={index} className="d-flex align-items-center gap-2 mb-2">
            <button
              className={`btn btn-outline-${
                beatsPlaying[currentIndex] ? "primary" : "secondary"
              } me-2 mb-2 p-2 d-flex gap-2 align-items-center`}
              onClick={() => {
                // Recompute beats synchronously and use the fresh value locally to avoid relying on stale state
                const newBeats = FindBeats(musicInput);
                setBeats(newBeats);

                let updatedName = newBeats[currentIndex].name;
                let updatedIndex = newBeats[currentIndex].index;

                // Toggle beat playing state using numeric index
                let newBeatsPlaying = [...beatsPlaying];
                newBeatsPlaying[currentIndex] = !newBeatsPlaying[currentIndex];
                setBeatsPlaying(newBeatsPlaying);

                console.log(
                  updatedIndex,
                  musicInput[updatedIndex],
                  updatedName,
                  currentIndex
                );

                let stranger_code_hushed_beat = HushBeats(
                  musicInput,
                  updatedIndex
                );

                setMusicInput(stranger_code_hushed_beat);
                if (
                  getGlobalEditor() != null &&
                  getGlobalEditor().repl.state.started === true
                ) {
                  ProcAndPlay(stranger_code_hushed_beat);
                }
              }}
            >
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
            <span>{name}</span>
          </div>
        ))}
    </>
  );
}
