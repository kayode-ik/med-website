import { Link } from "react-router-dom";
// import footerLogo from "../assets/logoFooter.svg";
import dda from "../assets/ddaLogo2.svg";
import "../styles/footerStyles.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerWrapper ml-10 mr-10 ">
        <div className="footerContent  flex gap-8 pt-20 pb-10 justify-around">
          {/* logo */}
          <div className="footerLogo">
            {/* <div className="footerLogoImg">

            </div> */}
            <img src={dda} alt="" />
            <p
              className=" uppercase tracking-wide font-extrabold text-xs"
              style={{ color: "#fff" }}
            >
              Alternative DDA
            </p>
            <p
              className=" uppercase tracking-wide font-extrabold text-xs"
              style={{ color: "#fff" }}
            >
              Home Care
            </p>
          </div>
          {/* links */}
          <div className="footerLinks">
            <h2
              className=" uppercase pb-8 text-001878 font-Gilroy-Medium text-3xl font-normal leading-6 tracking-wider"
              style={{ color: "#fff" }}
            >
              Links
            </h2>
            <div
              className="links list-none uppercase leading-10 font-semibold"
              style={{ color: "#fff" }}
            >
               <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              {/* <Link to="/amenities">Amenities</Link>  */}
              <Link to="/contact">Contact</Link>
            </div>

            <div
              className="footerLine mobileLine"
              style={{
                border: "1px solid #fff",
                width: "100%",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            ></div>
          </div>

          <div className="footerLinksweb">
            <h2
              className=" uppercase pb-8 text-001878 font-Gilroy-Medium text-3xl font-normal leading-6 tracking-wider"
              style={{ color: "#fff" }}
            >
              Links
            </h2>
            <div
              className="links list-none uppercase leading-10 font-semibold"
              style={{ color: "#fff" }}
            >
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              {/* <Link to="/amenities">Amenities</Link> */}
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Tablet / Web flex section */}
          {/* Address */}
          <div className="tabWebFlex">
            <div className="footerAddressTab">
              <h2
                className=" uppercase pb-8 text-001878 font-Gilroy-Medium text-3xl font-normal leading-6 tracking-wider"
                style={{ color: "#fff" }}
              >
                Address
              </h2>

              <div className="address">
                <div className="address1 tracking-wide">
                  <span className="font-semibold text-sm">Head Office: </span>{" "}
                  <br />
                  <span className="text-sm webCont">
                    100 Owings ct suite 11
                    <br />
                    Reistertown  MD 21136
                  </span>
                  <span className="text-sm mobileCont">
                    100 Owings ct suite 11
                    <br />
                    Reistertown  MD 21136
                  </span>
                </div>
              </div>
            </div>

            {/* contact */}
            {/* Tablet / Web flex section */}
            <div className="footerContactTab">
              <h2
                className=" uppercase pb-8 font-Gilroy-Medium text-3xl font-normal leading-6 tracking-wider"
                style={{ color: "#fff" }}
              >
                CONTACT
              </h2>

              <div className="contact">
                <div className="contact1">
                  <span className="text-sm font-semibold ">Phone: </span> <br />
                  <div className="numbersFooter">
                    <span className="text-sm">+1 443-545-1660</span>
                    <br />
                    <span className="text-sm">+1 443-545-1650</span>
                    <br />
                    <span className="text-sm">+1 443-220-9506</span>
                    <br />
                    <span className="text-sm">+1 443-220-3040</span>
                    <br />
                  </div>
                  <span className="text-sm font-semibold ">Fax: </span> <br />
                  <div className="numbersFooter">
                    <span className="text-sm">+1 443-545-7323</span>
                    <br />
                  </div>
                </div>
                <div className="contact2 pt-5 tracking-wide">
                  <span className="text-sm font-semibold ">Email:</span> <br />
                  <span
                    className="webMail text-sm font-semibold  "
                    style={{ color: "#fff" }}
                  >
                    altsupport1@gmail.com
                    <br />
                  </span>
                  {/* Mobile footer mail */}
                  <span
                    className="mobileMail text-sm font-semibold  "
                    style={{ color: "#fff" }}
                  >
                    altsupport1
                    <br /> @gmail.com
                    <br />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* mobile flex section */}
          <div className="mobileFlex">
            {/* Address */}
            <div className="footerAddress">
              <h2
                className=" uppercase pb-8 text-001878 font-Gilroy-Medium text-3xl font-normal leading-6 tracking-wider"
                style={{ color: "#fff" }}
              >
                Address
              </h2>

              <div className="address">
                <div className="address1 tracking-wide">
                  <span className="font-semibold text-sm">Head Office: </span>{" "}
                  <br />
                  <span className="text-sm mobileCont">
                    100 Owings ct suite 11
                    <br />
                    Reistertown  MD 21136
                  </span>
                </div>
              </div>
            </div>

            {/* contact */}
            <div className="footerContact">
              <h2
                className=" uppercase pb-8 font-Gilroy-Medium text-3xl font-normal leading-6 tracking-wider"
                style={{ color: "#fff" }}
              >
                CONTACT
              </h2>

              <div className="contact">
                <div className="contact1">
                  <span className="text-sm font-semibold ">Phone: </span> <br />
                  <div className="numbersFooter">
                    <span className="text-sm">+1 443-545-1660</span>
                    <span className="text-sm">+1 443-545-1650</span>
                    <span className="text-sm">+1 443-220-9506</span>
                    <span className="text-sm">+1 443-220-3040</span>
                  </div>
                </div>
                <div className="contact2 pt-5 tracking-wide">
                  <span className="text-sm font-semibold ">Email:</span> <br />
                  <span
                    className="webMail text-sm font-semibold  "
                    style={{ color: "#fff" }}
                  >
                    altsupport1@gmail.com
                  </span>
                  {/* Mobile footer mail */}
                  <p
                    className="mobileMail textM1 text-sm font-semibold  "
                    style={{ color: "#fff" }}
                  >
                    altsupport1 <br /> @gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="footerLine"
          style={{ border: "1px solid #D33333" }}
        ></div>
        <span className="mobileFoot flex items-center pb-6 justify-center mt-4 tracking-wider uppercase">
          Alternative dda home care 2025. All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
