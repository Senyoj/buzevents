import { useState } from "react";
import { Button } from "antd";
import { FaBars, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleEvents = () => setIsEventsOpen(!isEventsOpen);

  const navLinks = [
    { href: "/about-us", label: "About Us" },
    { href: "/find-my-tickets", label: "Find My Tickets" },
    { href: "/help-center", label: "Help Center" },
  ];

  const eventLinks = [
    { href: "/find-events", label: "Find Events" },
    { href: "/create-events", label: "Create Events" },
  ];

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b w-full flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6  z-50 absolute top-0 w-full bg-primary border-b">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/BuzEvents.svg"
                alt="BuzEvents"
                className="h-5 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className=" transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}

              {/* Events Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleEvents}
                  className="flex items-center space-x-1  transition-colors duration-200"
                >
                  <span>Events</span>
                  <FaChevronDown className="h-4 w-4" />
                </button>

                {isEventsOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-primary rounded-md shadow-lg py-1">
                    {eventLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-md"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4 top-0">
              <Button variant="solid">
                <a href="/login" className="text-lg font-s">
                  Login
                </a>
              </Button>
              <Button variant="solid">
                <a href="/sign-up" className="text-lg font-s">
                  Sign Up
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md  hover:bg-gray-100"
            >
              {isOpen ? (
                <FaX className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden min-h-screen z-50 bg-textColor text-primary absolute top-16 w-full">
            <div className="px-4 pt-2 pb-3 space-y-5 bg-white ">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-md"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Events Accordion */}
              <div className="">
                <button
                  onClick={toggleEvents}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <p>Events</p>
                  <FaChevronRight
                    className={`h-4 w-4 transform transition-transform duration-200 ${
                      isEventsOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {isEventsOpen && (
                  <div className="ml-4 space-y-1">
                    {eventLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Auth Buttons */}
              <div className="space-y-5 mt-20">
                <Button variant="solid" className="w-full py-5 ">
                  <a href="/login" className="text-lg font-semibold">
                    Login
                  </a>
                </Button>
                <Button variant="solid" className="w-full py-5 ">
                  <a href="/sign-up" className="text-lg font-semibold">
                    Sign Up
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="h-16" />
    </div>
  );
};

export default Navbar;
