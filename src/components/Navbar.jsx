import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }
  return (
    
    <header className="w-full px-6 lg:px-16 py-6 relative">
<nav className="fixed top-0 left-0 w-full h-16 z-50 
                flex items-center justify-between 
                px-6 bg-black shadow-md">


        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <span className="text-accent text-xl">●</span>
          <h1 className="text-lg font-semibold">designer</h1>
        </div>

         <div className="hidden md:flex gap-8 text-gray-400 text-sm font-bold">
        <button onClick={() => scrollTo("home")} className="hover:text-blue-400">Home</button>
        <button onClick={() => scrollTo("about")} className="hover:text-blue-400">About</button>
        <button onClick={() => scrollTo("skills")} className="hover:text-blue-400">Skills</button>
        <button onClick={() => scrollTo("projects")} className="hover:text-blue-400">Projects</button>
        <button onClick={() => scrollTo("contact")} className="hover:text-blue-400">Contact</button>
      </div>

        {/* Desktop Button */}
        <button onClick={() => scrollTo("contact")} className="hidden md:block bg-gradient-to-r  from-black to-blue-800  px-6 py-2.5 rounded-full text-sm">
          Discuss for Projects
        </button>

        {/* Mobile Hamburger */}
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer z-50"
        >
          <span className={`h-[2px] w-6 bg-white transition ${open && "rotate-45 translate-y-2"}`} />
          <span className={`h-[2px] w-6 bg-white transition ${open && "opacity-0"}`} />
          <span className={`h-[2px] w-6 bg-white transition ${open && "-rotate-45 -translate-y-2"}`} />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
  className={`fixed z-[100] inset-0 bg-gradient-to-b from-black to-blue-800 flex flex-col items-center justify-center gap-8 text-lg transition-transform duration-300
  ${open ? "translate-x-0" : "translate-x-full"}`}
>
  {[
    {name:"Home", id:"home"},
    {name:"Skills", id:"skills"},
    {name:"Projects", id:"projects"},
    {name:"About", id:"about"},
    {name:"Contact", id:"contact"}
  ].map((item) => (
    <a
      key={item.name}
      href={`#${item.id}`}
      onClick={() => setOpen(false)}
      className="hover:text-accent cursor-pointer"
    >
      {item.name}
    </a>
  ))}

  <button onClick={() => scrollTo("contact")} className="bg-gradient-to-r from-pink-500 to-blue-700 px-8 py-3 rounded-full mt-4">
    Discuss for Projects
  </button>
</div>
    </header>
  );
};

export default Navbar;
