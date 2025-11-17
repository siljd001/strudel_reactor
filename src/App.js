import { useEffect, useState } from "react";

import { stranger_tune } from "./tunes";

// Components
import { ProcAndPlay, Proc, getGlobalEditor } from "./Processors";
import Header from "./components/header/Header";
import MusicInput from "./components/preprocess/MusicInput";
import MusicProcessor from "./components/preprocess/MusicProcessor";
import MusicPlayer from "./components/preprocess/MusicPlayer";
import DJLivePlayer from "./components/strudel_control/DJLivePlayer";
import DJHushers from "./components/strudel_control/DJHushers";
import Graph from "./components/graph/Graph";

export default function StrudelDemo() {
  const [musicInput, setMusicInput] = useState(stranger_tune);
  const [theme, setTheme] = useState("Light");

  useEffect(() => {
    Proc(musicInput);
  }, [musicInput]);

  // Light/Dark Theme Effect
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme.toLowerCase());
  }, [theme]);

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <MusicInput
                musicInput={musicInput}
                setMusicInput={setMusicInput}
              />
            </div>
            <div className="col-md-4">
              <nav>
                <MusicProcessor
                  setMusicInput={setMusicInput}
                  musicInput={musicInput}
                  Proc={Proc}
                  ProcAndPlay={ProcAndPlay}
                />
                <MusicPlayer getGlobalEditor={getGlobalEditor} />
              </nav>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-8"
              style={{ maxHeight: "50vh", overflowY: "auto" }}
            >
              <DJLivePlayer />
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-between">
              <DJHushers
                ProcAndPlay={ProcAndPlay}
                musicInput={musicInput}
                setMusicInput={setMusicInput}
              />
              <Graph musicInput={musicInput} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
