import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate("/");

  return (
    <div
      className="flex items-center justify-between p-4 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img src="/copycat.jpg" alt="CopyCat Logo" className="sm:w-15 w-10" />
      <button className="px-2 py-1 sm:px-3 sm:py-2 bg-[#ff3366] text-white rounded-md cursor-pointer hover:border-2 hover:border-[#3d5afe]">
        GitHub Repo
      </button>
    </div>
  );
};

export default Header;
