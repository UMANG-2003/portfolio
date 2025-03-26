
import Link from "next/link";
import React from "react";

function Navbar({navRef}) {

  const menu = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "SERVICES", link: "/services" },
    { name: "CONTACT", link: "/contact" },
  ];
  return (
    <div
      ref={navRef}
      className="nav bg-black text-white p-4 flex justify-between items-center fixed top-0 w-full z-50"
    >
      <div className="logo flex items-center gap-2">
        <img src="/logo.png" className="w-10" alt="" />
        <p className=" text-lg boldonse-regular">UMANG</p>
      </div>

      <div className="menu max-md:hidden">
        {menu.map((item, index) => (
          <Link key={index} href={item.link}>
            <span className="mx-5 font-bold rowdies-bold text-sm relative group">
              {item.name}
              <span className="absolute left-1/2 top-5 w-0 h-[4px] bg-white transition-all duration-500 group-hover:w-full group-hover:-translate-x-1/2 group-hover:bg-purple-800"></span>
            </span>
          </Link>
        ))}
      </div>
      <a href="https://github.com/UMANG-2003" className="max-md:hidden">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <img src="/github.png" className="w-7" alt="" />
            <p>GitHub</p>
          </span>
        </button>
      </a>
    </div>
  );
}

export default Navbar;
