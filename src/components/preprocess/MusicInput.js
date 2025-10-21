export default function MusicInput() {
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
        style={{ maxHeight: "50vh", overflowY: "auto" }}
      ></textarea>
    </>
  );
}
