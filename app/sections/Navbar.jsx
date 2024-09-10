import { navLinks } from "@/constants";
import React from "react";

const NavItems = ({ onClick = () => {} }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);
  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutra;-400 font-bold text-xl hover:text-red-500 transition-colors"
          >
            Lynn
          </a>
          <button
            onClick={handleToggle}
            className="text-neutral-400 hover:text-white
           focus:outline-none flex md:hidden"
            aria-label="toggle menu"
          >
            <img
              src={open ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <div className="hidden md:flex">
            <NavItems />
          </div>
        </div>

        <div
          className={`md:hidden bg-black-200 backdrop-blur-sm transition-all duration-500 ease-in-out z-20 mx-auto ${
            open ? "max-h-[500px]" : "max-h-0"
          } overflow-hidden`}
        >
          <nav className="p-5">
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
