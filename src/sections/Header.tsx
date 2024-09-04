"use client";
import { twMerge } from "tailwind-merge";

export const Header = () => {
  // const handleScroll = (id: string) => {
  //   document.getElementById(id)?.scrollIntoView({
  //     behavior: "smooth"
  //   });
  // };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {/* <button onClick={() => handleScroll("home")} className="nav-item">
          Home
        </button>
        <button onClick={() => handleScroll("projects")} className="nav-item">
          Projects
        </button>
        <button
          onClick={() => handleScroll("testimonials")}
          className="nav-item hidden md:block"
        >
          Testimonials
        </button>
        <button onClick={() => handleScroll("about")} className="nav-item">
          About
        </button>
        <button
          onClick={() => handleScroll("contact")}
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </button> */}
        {/* Smooth Scroll coming from layout.tsx with className="scroll-smooth" on html tag */}
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#testimonials" className="nav-item hidden md:block">
          Testimonials
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a
          href="#contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
