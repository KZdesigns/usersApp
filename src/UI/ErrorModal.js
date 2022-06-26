import React from "react";

const ErrorModal = (props) => {
  return (
    <div
      onClick={props.onConfirm}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 10,
        background: "rgba(0, 0, 0, 0.75)",
      }}
    >
      <div className="container-sm">
        <div
          className="card"
          style={{
            zIndex: 100,
            top: "30vh",
            padding: "20px",
          }}
        >
          <header>
            <h2>{props.title}</h2>
          </header>
          <div>
            <p>{props.message}</p>
          </div>
          <footer>
            <button className="btn btn-primary" onClick={props.onConfirm}>
              Okay
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
