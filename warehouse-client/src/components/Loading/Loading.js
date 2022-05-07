import React from "react";
import { Spinner } from "react-bootstrap";
const Loading = () => {
  return (
    <div className="container mx-auto w-50">
      <div
        className="spinner-border"
        style={{ width: " 3rem", height: "3rem" }}
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow"
        style={{ width: " 3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
