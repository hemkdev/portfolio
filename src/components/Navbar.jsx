import React from "react";

function Navbar({ value, setValue }) {
  return (
    <nav className="flex justify-center p-4">
      <ul className="flex items-center justify-center gap-4">
        <li>
          <button onClick={() => setValue(!value)}>Theme</button>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;