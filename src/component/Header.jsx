import { Link, useLocation, useNavigate } from "react-router-dom";
import dda from "../assets/ddaLogo2.svg";
import grSmLogo from "../assets/menuMed.svg";
import cancelMenu from "../assets/cancelMenu.svg";
import { useState } from "react";

// import "../styles/headerStyles.css";
import "../styles/headerStyles.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the slide-in menu and navigate to another page
  const handleLinkClick = (path) => {
    setMenuOpen(false); // Close the slide-in menu
    navigate(path); // Navigate to the specified path
  };

  return (
    <div
      className={`headerContainer flex items-center justify-between bg-white p-3  ${
        menuOpen ? "menuOpen" : ""
      }`}
    >
      {/* <div className="headerLeft "> */}
      <div className="headerLeft ml-16 flexHeaderLeft">
        <div className="logo">
          <Link to="/">
            <img src={dda} alt="Logo" className="logo w-10 lg:w-16 xl:w-16" />
          </Link>
        </div>
        <div className="headerLogoText flex flex-col mobileHeaderText">
          <p
            className=" uppercase tracking-wide font-extrabold text-base"
          >
            Alternative DDA
          </p>
          <p
            className=" uppercase tracking-wide font-extrabold text-base"
          >
            Home Care
          </p>
        </div>
        <div className="headerLogoText flex flex-col webHeaderText ">
          <p
            className=" uppercase tracking-wide font-extrabold text-base"
            style={{ color: "#765D35" }}
          >
            Alternative DDA
          </p>
          <p
            className=" uppercase tracking-wide font-extrabold text-base"
            style={{ color: "#765D35" }}
          >
            Home Care
          </p>
        </div>
      </div>

      <div className="headerRight mr-24">
        {/* <div className="headerRight"> */}
        {/* Hamburger menu on the right (hidden by default on screens above 768px) */}
        <div className="headerRight flex items-center lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-rgb(0, 5, 27) focus:outline-none"
          >
            {menuOpen ? (
              <img src={cancelMenu} alt="cancel" className="w-3.5" />
            ) : (
              <img src={grSmLogo} alt="hamburger" className=""  style={{width: "1.55rem"}}/>
            )}
          </button>
        </div>

        {/* Navigation links for larger screens (hidden on screens below 768px) */}
        <nav className="hidden lg:flex flex-row">
          <ul className="flex gap-8 headerTextLi">
            <li
              className={`mr-5 lg:text-base font-semibold ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link to="/" className="uppercase">
                Home
              </Link>
            </li>
            <li
              className={`mr-5 lg:text-base uppercase font-semibold ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link to="/about" className="uppercase">
                About
              </Link>
            </li>
            <li
              className={`mr-5 lg:text-base uppercase font-semibold  ${
                location.pathname === "/services" ? "active" : ""
              }`}
            >
              <Link to="/services" className="uppercase">
                Services
              </Link>
            </li>
            {/* Comment out for now */}
            {/* <li
              className={`mr-5 lg:text-base uppercase font-semibold ${
                location.pathname === "/amenities" ? "active" : ""
              }`}
            >
              <Link to="/amenities" className="uppercase">
                Amenities
              </Link>
            </li> */}
            <li
              className={`mr-5 lg:text-base uppercase font-semibold ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <Link to="/contact" className="uppercase">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Slide-in menu for smaller screens (visible on screens below 768px) */}
      <nav
        className={` mobileIndex lg:hidden fixed h-full bg-white flex-col gap-4 p-8 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col gap-6 mt-12">
          <li className="mr-5 lg:text-lg text-rgb(0, 5, 27) pb-4">
            <button onClick={() => handleLinkClick("/")} className="uppercase">
              {/* <Link to="/" > */}
              Home
              {/* </Link> */}
            </button>
            {menuOpen && (
              <div className="borderMobile absolute left-0  border-b-2 border-rgb(0, 5, 27)"></div>
            )}
          </li>
          <li className="mr-5 lg:text-lg  uppercase pb-4 ">
            <button
              onClick={() => handleLinkClick("/about")}
              className="uppercase"
            >
              {/* <Link to="/about" > */}
              About Us
              {/* </Link> */}
            </button>
            {menuOpen && (
              <div className=" borderMobile absolute left-0  border-b-2 border-rgb(0, 5, 27)"></div>
            )}
          </li>
          <li className="mr-5 lg:text-lg text-rgb(0, 5, 27) uppercase pb-4">
            <button
              onClick={() => handleLinkClick("/services")}
              className="uppercase"
            >
              Services
            </button>
            {menuOpen && (
              <div className=" borderMobile absolute left-0  border-b-2 border-rgb(0, 5, 27)"></div>
            )}
          </li>
          {/* Comment out for now */}
          {/* <li className="mr-5 lg:text-lg text-rgb(0, 5, 27) uppercase pb-4">
            <button
              onClick={() => handleLinkClick("/amenities")}
              className="uppercase"
            >
              Amenities
            </button>
            {menuOpen && (
              <div className=" borderMobile absolute left-0  border-b-2 border-rgb(0, 5, 27)"></div>
            )}
          </li> */}
          <li className="mr-5 lg:text-lg text-rgb(0, 5, 27) uppercase pb-4">
            <button
              onClick={() => handleLinkClick("/contact")}
              className="uppercase"
            >
              Contact
            </button>
            {menuOpen && (
              <div className=" borderMobile absolute left-0  border-b-2 border-rgb(0, 5, 27)"></div>
            )}
          </li>
        </ul>

        <div className="footerContTab">
          <h2>Contact</h2>

          <div className="contactListFlex">
            <div className="contactLeft">
              <h3>Phone: </h3>
              <p>+1 443-545-1660</p>
              <p>+1 443-545-1650</p>
            </div>
            <div className="contactRight">
              <h3>Email: </h3>
              <p>
                Altsupport1 <br /> @yahoo.com
              </p>
            </div>
          </div>

          <div className="contactListFlexTab">
            <div className="contactLeftTab">
              <h3>Phone: </h3>
              <p>+1 443-545-1660</p>
              <p>+1 443-545-1650</p>
            </div>
            <div className="contactRightTab">
              <h3>Email: </h3>
              <p> Altsupport1@yahoo.com</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
