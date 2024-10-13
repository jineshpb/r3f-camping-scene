import React from "react";

const Header = () => {
  return (
    <div>
      <div>
        <a
          href="https://jineshb.me"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <p className="text-lg text-gray-700 font-bold">Jineshb.me</p>
        </a>
        <a
          href="https://sketchfab.com/3d-models/stylized-forest-scene-may-holiday-c4baeda6e099461ab507b48245609eae"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <p className="text-sm text-gray-500">Model courtesy of @Barsh</p>
        </a>
      </div>
    </div>
  );
};

export default Header;
