import { Cake, CakeSlice, Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

const Navbar = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const currentIndex = navItems.findIndex(
      (item) =>
        item.path === location.pathname ||
        (item.path === "/" && location.pathname === "/"),
    );
    setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
  }, [location.pathname]);

  const getSliderStyle = () => {
    const index = hoverIndex !== null ? hoverIndex : activeIndex;
    return {
      transform: `translateX(${index * 100}%)`,
      transition: "transform 0.3s ease-in-out",
    };
  };

  return (
    <div className="fixed z-50 border select-none border-zinc-600 w-full md:max-w-[40rem] left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 md:top-4 bg-white shadow-md">
      <div className="flex bg-white text-base sm:text-lg cursor-pointer px-3 sm:px-4 py-2 sm:py-3 justify-between items-center mx-auto min-h-[52px] sm:min-h-[60px]">
        <Link to="/">
          <div className="text-sm sm:text-base md:text-lg gap-1.5 sm:gap-2 items-center flex justify-center font-bold text-violet-900 px-1.5 sm:px-2">
            <Cake className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
            <span className="whitespace-nowrap leading-none">
              The Sweet Space
            </span>
          </div>
        </Link>

        <div className="hidden md:flex font-medium relative">
          <div
            className="absolute top-0 left-0 h-full bg-pink-300 rounded transition-transform duration-300 ease-in-out z-0"
            style={{
              ...getSliderStyle(),
              width: `${100 / navItems.length}%`,
            }}
          />

          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative z-10"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="text-violet-900 px-6 py-2 transition-colors duration-200">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-violet-900 z-20 p-1.5 sm:p-2"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.div>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden z-50 bg-white fixed inset-0 flex items-center justify-center w-full h-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="text-black z-50 absolute top-4 left-4 p-2"
                onClick={toggleMenu}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <X size={24} />
                </motion.div>
              </button>

              <div className="flex flex-col items-center justify-center h-full w-full">
                <motion.div
                  className="space-y-10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <Link
                        to={item.path}
                        className="text-black font-bold text-4xl sm:text-5xl font-sans hover:text-gray-600 inline-block"
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
