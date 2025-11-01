export default function IntroModal() {
  return (
    <div>
      <div
        className="modal fade"
        id="introModal"
        tabIndex="-1"
        aria-labelledby="introModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="introModalLabel">
                ✨ Welcome To Strudel Reactor! ✨
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you ready to dive into the world of Strudel Reactor? This is
              your gateway to an immersive audio-visual experience like no
              other. Whether you're a seasoned coder or just starting out,
              Strudel Reactor offers a unique platform to experiment with music
              and sound synthesis using the powerful Strudel language.
              <ul className="mt-3 mb-3">
                <li>Step 1: Create Your Strudel Script</li>
                <li>Step 2: Experiment with Sound Synthesis</li>
                <li>Step 3: Process Your Audio</li>
                <li>Step 4: Play Your Music</li>
              </ul>
              Get ready to unleash your creativity, explore new sonic
              landscapes, and bring your musical ideas to life. Let's embark on
              this exciting journey together!
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
