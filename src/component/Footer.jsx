import { Link } from "react-router-dom";
import footerLogo from "../assets/logoFooter.svg";
import "../styles/footerStyles.css";

const Footer = () => {
  return (
    <div className="footerContainer" style={{ background: " #F3F3F3" }}>
      <div className="footerWrapper ml-10 mr-10 ">
        <div className="footerContent  flex gap-8 pt-20 pb-10 justify-around">
          {/* logo */}
          <div className="footerLogo">
            <img src={footerLogo} alt="" />
          </div>
          {/* links */}
          <div className="footerLinks">
            <h2
              className=" uppercase pb-8 text-001878 font-Gilroy-Medium text-3xl font-normal leading-6 tracking-wider"
              style={{ color: "#001878" }}
            >
              Links
            </h2>
            <div
              className="links list-none uppercase leading-10 font-semibold"
              style={{ color: "#D33333" }}
            >
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/services">Services</Link>
            </div>

            <div
              className="footerLine mobileLine"
              style={{
                border: "1px solid #D33333",
                width: "100%",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            ></div>
          </div>

          <div className="footerLinksweb">
            <h2
              className=" uppercase pb-8 text-001878 font-Gilroy-Medium text-3xl font-normal leading-6 tracking-wider"
              style={{ color: "#001878" }}
            >
              Links
            </h2>
            <div
              className="links list-none uppercase leading-10 font-semibold"
              style={{ color: "#D33333" }}
            >
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/services">Services</Link>
            </div>
          </div>

          {/* Tablet / Web flex section */}
          {/* Address */}
          <div className="tabWebFlex">
            <div className="footerAddressTab">
              <h2
                className=" uppercase pb-8 text-001878 font-Gilroy-Medium text-3xl font-normal leading-6 tracking-wider"
                style={{ color: "#001878" }}
              >
                Address
              </h2>

              <div className="address">
                <div className="address1 tracking-wide">
                  <span className="font-semibold text-sm">Head Office: </span>{" "}
                  <br />
                  <span className="text-sm webCont">
                    Gramen Jetty, Chevron Clinic Road, Off NPA <br />
                    Expressway, Edjeba Warri, Delta State, Nigeria.
                  </span>
                  <span className="text-sm mobileCont">
                    Gramen Jetty, Chevron Clinic Road, Off NPA <br />
                    Expressway, Edjeba Warri, Delta State, Nigeria.
                  </span>
                </div>
                <div className="address2 pt-5 tracking-wide">
                  <span className="font-semibold text-sm">
                    Port Harcourt Office:
                  </span>{" "}
                  <br />
                  <span className="text-sm webCont">
                    6, Mabisel Hotel Avenue, Off Peter Odili <br />
                    Road, <br /> Trans Amadi Industrial Layout, P. O. Box <br />
                    14709. Port Harcourt, Rivers State, Nigeria.
                  </span>
                  <span className="text-sm mobileCont">
                    6, Mabisel Hotel Avenue, Off Peter Odili Road, <br /> Trans
                    Amadi Industrial Layout,
                    <br /> P. O. Box 14709. Port Harcourt,
                    <br /> Rivers State, Nigeria.
                  </span>
                </div>
              </div>
            </div>

            {/* contact */}
            {/* Tablet / Web flex section */}
            <div className="footerContactTab">
              <h2
                className=" uppercase pb-8 font-Gilroy-Medium text-3xl font-normal leading-6 tracking-wider"
                style={{ color: "#001878" }}
              >
                CONTACT
              </h2>

              <div className="contact">
                <div className="contact1">
                  <span className="text-sm font-semibold ">Phone: </span> <br />
                  <div className="numbersFooter">
                    <span className="text-sm">08037380078</span> <br />
                    <span className="text-sm">09038551651</span> <br />
                    <span className="text-sm">08054050808</span> <br />
                    <span className="text-sm">08165558820</span>
                  </div>
                </div>
                <div className="contact2 pt-5 tracking-wide">
                  <span className="text-sm font-semibold ">Email:</span> <br />
                  <span
                    className="webMail text-sm font-semibold  "
                    style={{ color: "#D33333" }}
                  >
                    info@gramenpetroserve.com <br />
                    gramenpetroserve@yahoo.com
                  </span>
                  {/* Mobile footer mail */}
                  <span
                    className="mobileMail text-sm font-semibold  "
                    style={{ color: "#D33333" }}
                  >
                    info@gramen <br /> petroserve.com <br />
                    gramenpetro <br /> serve@yahoo.com
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
                style={{ color: "#001878" }}
              >
                Address
              </h2>

              <div className="address">
                <div className="address1 tracking-wide">
                  <span className="font-semibold text-sm">Head Office: </span>{" "}
                  <br />
                  <span className="text-sm mobileCont">
                    Gramen Jetty, Chevron Clinic Road, Off NPA <br />
                    Expressway, Edjeba Warri, Delta State, Nigeria.
                  </span>
                </div>
                <div className="address2 pt-5 tracking-wide">
                  <span className="font-semibold text-sm">
                    Port Harcourt Office:
                  </span>{" "}
                  <br />
                  <span className="text-sm webCont">
                    6, Mabisel Hotel Avenue, Off Peter Odili <br />
                    Road, <br /> Trans Amadi Industrial Layout, P. O. Box <br />
                    14709. Port Harcourt, Rivers State, Nigeria.
                  </span>
                  <span className="text-sm mobileCont">
                    6, Mabisel Hotel Avenue, Off Peter Odili Road, <br /> Trans
                    Amadi Industrial Layout,
                    <br /> P. O. Box 14709. Port Harcourt,
                    <br /> Rivers State, Nigeria.
                  </span>
                </div>
              </div>
            </div>

            {/* contact */}
            <div className="footerContact">
              <h2
                className=" uppercase pb-8 font-Gilroy-Medium text-3xl font-normal leading-6 tracking-wider"
                style={{ color: "#001878" }}
              >
                CONTACT
              </h2>

              <div className="contact">
                <div className="contact1">
                  <span className="text-sm font-semibold ">Phone: </span> <br />
                  <div className="numbersFooter">
                    <span className="text-sm">08037380078</span>
                    <span className="text-sm">09038551651</span>
                    <span className="text-sm">08054050808</span>
                    <span className="text-sm">08165558820</span>
                  </div>
                </div>
                <div className="contact2 pt-5 tracking-wide">
                  <span className="text-sm font-semibold ">Email:</span> <br />
                  <span
                    className="webMail text-sm font-semibold  "
                    style={{ color: "#D33333" }}
                  >
                    info@gramenpetroserve.com <br />
                    gramenpetroserve@yahoo.com
                  </span>
                  {/* Mobile footer mail */}
                  <p
                    className="mobileMail textM1 text-sm font-semibold  "
                    style={{ color: "#D33333" }}
                  >
                    info@gramen <br /> petroserve.com
                  </p>
                  <p
                    className="mobileMail text-sm font-semibold  "
                    style={{ color: "#D33333" }}
                  >
                    gramenpetro <br /> serve@yahoo.com
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
        <span className="mobileFoot flex items-center pb-6 justify-center mt-4 tracking-wider">
          Gramen Petroserve 2023. All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
