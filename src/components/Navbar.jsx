import React from "react";

function Navbar({ value, setValue }) {
  const toggleTheme = () => setValue(!value);

  return (
    <nav className="flex justify-center p-4">
      <ul className="flex items-center justify-center gap-4 cursor-pointer hover:gap-6 transition-all duration-300">
        <li>
          <button className="cursor-pointer" onClick={toggleTheme}>
            Theme
          </button>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
