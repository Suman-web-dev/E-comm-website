import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/style.css";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  // Fetch categories from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle subcategory click
  const handleSubcategoryClick = (subcategory) => {
    navigate(`/products?category=${encodeURIComponent(subcategory)}`);
    setActiveMenu(null); // Close the dropdown after navigation
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Main Navbar */}
      <nav className="navbar">
        {/* Logo on the left */}
        <div className="navbar-brand">
          <img src={logo} alt="Logo" />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </div>

        {/* Search bar and submit button on the right */}
        <div className="search-bar">
          <div className="search-icon">
            <FontAwesomeIcon icon={"search"} />
          </div>
          <input type="text" placeholder="" />
          <div className="remove-icon text-black relative right-7">
            <FontAwesomeIcon icon={"remove"} />
          </div>
        </div>

        {/* Navbar Links (Hidden on Mobile by Default) */}
        <ul className={`navbar-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <li className="font-semibold">
            <a href="/pages/LoginSignupPage">
              <FontAwesomeIcon icon={"lock"} /> Login / Signup
            </a>
          </li>
          <li className="text-black font-semibold">
            <a href="/pages/Cart">Cart</a> <FontAwesomeIcon icon={faCartShopping} />
          </li>
          <button className="click-btn w-40 px-4 py-2 shadow-md transition duration-300">
            Know More
          </button>
        </ul>
      </nav>

      {/* Sub Navbar (Hidden on Mobile by Default) */}
      <nav className={`sub-nav relative shadow-md ${isMobileMenuOpen ? "open" : ""}`}>
        {/* Navigation Menu */}
        <ul className="flex justify-center space-x-6 text-gray-800 font-medium">
          {categories.map((category, index) => (
            <li key={index} className="relative">
              {category.title === "Home" ? (
                // Home button for redirection
                <button
                  className="hover:text-blue-500 cursor-pointer"
                  onClick={() => navigate("/")} // Navigate to home page
                >
                  {category.title} &nbsp;
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
              ) : (
                <>
                  <button
                    className="hover:text-blue-500"
                    onClick={() =>
                      setActiveMenu(activeMenu === category.title ? null : category.title)
                    } // Toggle dropdown
                  >
                    {category.title}{" "}
                    <span className="ml-1">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </button>

                  {/* Dropdown Menu */}
                  {activeMenu === category.title && category.subcategories && (
                    <div
                      ref={menuRef}
                      className="absolute left-0 top-full mt-2 w-60 bg-white shadow-lg p-4 border rounded-lg z-50"
                    >
                      <h3 className="font-semibold text-gray-700 mb-2">{category.title}</h3>
                      <ul className="space-y-2 text-gray-600">
                        {category.subcategories.map((sub, i) => (
                          <li
                            key={i}
                            className="hover:text-blue-500 cursor-pointer"
                            onClick={() => handleSubcategoryClick(sub)}
                          >
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;