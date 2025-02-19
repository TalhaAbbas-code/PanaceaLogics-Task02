import { React, useState, useEffect } from "react";
import { navLinks } from "../constants";
import MyButton from "./MyButton";
import { FiMenu, FiX } from "react-icons/fi"; 

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [activeMenu, setActiveMenu] = useState(null); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`lg:px-[20%] py-4 px-4 max-lg:bg-white max-lg:px-[2%] max-lg:py-[2%] h-[10%] w-full ${
        isScrolled ? "fixed bg-white shadow-lg w-full" : "absolute bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center">
        <p className="font-montserrat leading-normal text-2xl text-slate-gray">
          Zendesk
        </p>

        
        <ul className="hidden lg:flex justify-center items-center gap-8">
          {navLinks.map((item, index) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => setHoveredMenu(index)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>

            
              {item.subMenu && hoveredMenu === index && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg transition-opacity duration-300">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:bg-gray-100">
                      <a href={subItem.href} className="block text-gray-700">
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        
       

        
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden">
            <ul className="flex flex-col items-center gap-4 py-4">
              {navLinks.map((item, index) => (
                <li key={item.label} className="w-full text-center">
                  {/* Main Menu Item */}
                  <button
                    className="block py-2 text-lg text-gray-700 w-full text-left px-6"
                    onClick={() =>
                      setActiveMenu(activeMenu === index ? null : index) // Toggle submenu
                    }
                  >
                    {item.label}
                  </button>

                 
                  {item.subMenu && activeMenu === index && (
                    <ul className="bg-gray-100 rounded-md mt-1">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="px-4 py-2 text-gray-700 border-b border-gray-300">
                          <a href={subItem.href} className="block">{subItem.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

       
        <div className="hidden lg:flex gap-2">
          <MyButton bgColor="bg-teal-900" text="Click Meee" onClick={() => alert("Button Clicked!")} />
          <MyButton
            bgColor="bg-transparent"
            text="Click Meee"
            textColor="text-teal-900"
            onClick={() => alert("Button Clicked!")}
          />
        </div>

       
        <div className="lg:hidden max-lg:flex gap-2">
          <MyButton bgColor="bg-teal-900" text="Free Trial" onClick={() => alert("Button Clicked!")} />
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl text-gray-700">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
