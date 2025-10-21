import React from "react";

export default function DJHushers({ ProcAndPlay }) {
  return (
    <>
      <div className="form-check">
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
      </div>
    </>
  );
}
