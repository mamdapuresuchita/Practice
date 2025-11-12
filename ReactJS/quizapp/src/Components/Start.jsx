import React from "react";

const Start = ({ onStart }) => {
  return (
    <div className="d-flex flex-column  align-items-center m-4">
      <h1 className="text-center m-4">Ready for a Quiz?</h1>
      <button
        className="btn btn-success m-4 p-3"
        style={{ width: "200px" }}
        onClick={onStart}
      >
        Start
      </button>
    </div>
  );
};

export default Start;
