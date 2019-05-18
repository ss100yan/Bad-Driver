import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 20, clear: "both", paddingTop: 30, textAlign: "center",
       background: "none" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
