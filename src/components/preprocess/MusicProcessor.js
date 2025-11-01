export default function MusicProcessor({
  Proc,
  ProcAndPlay,
  musicInput,
  setMusicInput,
}) {
  return (
    <div className="music-processor">
      <h5 className="fw-bold text-secondary">Music Processor</h5>
      <div className="d-flex w-100 gap-2">
        <button
          id="process"
          onClick={() => Proc(musicInput)}
          className="btn btn-outline-secondary d-flex w-100 flex-column align-items-start p-3 text-start"
        >
          <div className="d-flex gap-2 w-100 justify-content-between align-items-start mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-settings-icon lucide-settings"
            >
              <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
              <circle cx="12" cy="12" r="3" />
            </svg>
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
              className="lucide lucide-circle-play-icon lucide-circle-play"
            >
              <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <span className="fw-bold">Preprocess</span>
          <p style={{ fontSize: "12px" }} className="m-0">
            Preprocess your music code
          </p>
        </button>
        <button
          id="process_play"
          onClick={() => ProcAndPlay(musicInput)}
          className="btn btn-outline-secondary d-flex w-100 flex-column align-items-start p-3 text-start"
        >
          <div className="d-flex gap-2 w-100 justify-content-between align-items-start mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-square-play-icon lucide-square-play"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
            </svg>
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
              className="lucide lucide-circle-play-icon lucide-circle-play"
            >
              <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <span className="fw-bold">Proc & Play</span>
          <p style={{ fontSize: "12px" }} className="m-0">
            Process and play your music code
          </p>
        </button>
      </div>
      <div className="mt-3">
        <button
          className="btn btn-outline-success d-flex w-100 justify-content-center align-items-center gap-2 p-2"
          onClick={() => {
            const fileInput = document.createElement("input");
            fileInput.type = "file";
            fileInput.accept = ".strudel,.txt,audio/*";
            fileInput.onchange = (e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onload = (event) => {
                const fileContent = event.target.result;
                console.log("Loaded file content:", fileContent);
                setMusicInput(fileContent);
              };
              reader.readAsText(file);
            };
            fileInput.click();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-file-input-icon lucide-file-input"
          >
            <path d="M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1" />
            <path d="M14 2v5a1 1 0 0 0 1 1h5" />
            <path d="M2 15h10" />
            <path d="m9 18 3-3-3-3" />
          </svg>
          <span>Load Text File</span>
        </button>
      </div>
    </div>
  );
}
