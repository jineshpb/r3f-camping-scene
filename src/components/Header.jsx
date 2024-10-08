import React from "react";

const Header = () => {
  return (
    <div>
      <a
        href="https://jineshb.me"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <p
          style={{
            color: "#737373",
            fontSize: "18px",
            fontWeight: "bold",
            margin: "0",
          }}
        >
          Jineshb.me
        </p>
      </a>
      <a
        href="https://sketchfab.com/3d-models/stylized-forest-scene-may-holiday-c4baeda6e099461ab507b48245609eae"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <p style={{ color: "#A3A3A3", fontSize: "14px", margin: "0" }}>
          Model courtesy of @Barsh
        </p>
      </a>
    </div>
  );
};

export default Header;
