import React from "react";
import clipboard from "../images/clipboard.png";

export default function GenPass(props) {
  let { pass, handleCopyPass } = props;

  return (
    <div
      style={{
        padding: "18px",
        background: "white",
        width: "350px",
        display: "flex",
        borderRadius: "20px",
        border: "2px solid green",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <p
        style={{
          marginLeft: "5px",
          fontWeight: "600",
          fontSize: "16px",
        }}
      >
        {pass}
      </p>
      <img
        src={clipboard}
        alt="clipboard"
        width={24}
        style={{ cursor: "pointer", marginLeft: "auto" }}
        onClick={handleCopyPass}
      />
    </div>
  );
}
