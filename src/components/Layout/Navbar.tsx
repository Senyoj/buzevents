import { useState } from "react";
import { Button, Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import { FaBars, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

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

  // Dropdown menu items configuration
  const items: MenuProps["items"] = eventLinks.map((link, index) => ({
    key: index.toString(),
    label: (
      <a
        href={link.href}
        className="text-base px-4 py-2 block hover:bg-gray-50"
      >
        {link.label}
      </a>
    ),
  }));

  const dropdownMenu = {
    items,
    className: "w-48",
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 z-50 absolute top-0 w-full bg-primary border-b lg:border-none">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="/BuzEvents.svg"
                  alt="BuzEvents"
                  className="h-5 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="transition-all duration-300 transform hover:scale-105"
                >
                  {link.label}
                </Link>
              ))}

              {/* Events Dropdown */}
              <Dropdown
                menu={dropdownMenu}
                placement="bottomLeft"
                trigger={["hover"]}
                className="hover:text-gray-600"
              >
                <a
                  onClick={(e) => e.preventDefault()}
                  className="cursor-pointer"
                >
                  <Space>
                    Events
                    <FaChevronDown
                      size={10}
                      className="transition-transform duration-200"
                    />
                  </Space>
                </a>
              </Dropdown>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button className="px-5 py-5">
                <Link to="/login" className="text-lg font-semibold">
                  Login
                </Link>
              </Button>
              <Button color="default" variant="solid" className="px-5 py-5">
                <a href="/register" className="text-lg font-semibold">
                  Sign Up
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
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
            <div className="px-4 pt-2 pb-3 space-y-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-md"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Events Accordion */}
              <div>
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
                  <div className="ml-4 mt-2 space-y-1">
                    {eventLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Auth Buttons */}
              <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 space-y-3">
                <Button block className="h-12">
                  <Link to="/login" className="text-lg font-semibold">
                    Login
                  </Link>
                </Button>
                <Button block className="h-12">
                  <Link to="/register" className="text-lg font-semibold">
                    Sign Up
                  </Link>
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
