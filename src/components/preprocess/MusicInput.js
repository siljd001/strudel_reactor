export default function MusicInput({ musicInput, setMusicInput }) {
  return (
    <>
      <label
        htmlFor="proc"
        className="bg-primary text-white rounded-2 fw-bold px-3 py-1 form-label"
      >
        Text to Preprocess
      </label>
      <textarea
        className="form-control"
        rows="15"
        id="proc"
        value={musicInput}
        onChange={(e) => {
          setMusicInput(e.target.value);
        }}
        style={{ maxHeight: "50vh", overflowY: "auto" }}
      ></textarea>
    </>
  );
}
