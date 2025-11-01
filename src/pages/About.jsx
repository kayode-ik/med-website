// import heroAbout from "../assets/aboutHero.svg";
import heroAbout from "../assets/images_stock/istock6.jpg";
// import missionImg from "../assets/missiondda.svg";
import missionImg from "../assets/images_stock/istock060.jpg";
import missionImg3 from "../assets/images_stock/istockphoto-1690935364-612x612.jpg";
import team1 from "../assets/team1.svg";
import Footer from "../component/Footer";
// import team2 from "../assets/team2.svg";

import "../styles/aboutStyles.css";

const AboutPage = () => {
  return (
    <>
      <div className="aboutContainer" style={{ minHeight: '100vh', paddingTop: '70px' }}>
        {/* Hero Section */}
        {/* Hero Section with text */}
        <div
          className="aboutSection bg-cover bg-center "
          style={{ backgroundImage: `url(${heroAbout})`, height: "30vh" }}
        >
          {/* <div className="absolute inset-0 bg-black opacity-50  z-0"></div> */}
          <div className="aboutText">
            <h2 className="text-center pt-28 text-white font-Bold uppercase text-4xl tracking-wide">
              About Us
            </h2>
          </div>
        </div>

        {/* mission statement session */}
        <div className="aboutMissionContainer">
          <div className="aboutMissionWrapper">
            <div className="missionLeft">
              <div className="missionLefttttt">
                {/* mission header */}
                <h2 className="text-center font-bold capitalise text-xs">
                  Our Mission
                </h2>
                <div className="missionLeftMobile">
                  {/* mission image */}
                  <img
                    src={missionImg}
                    alt="mission image"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* mission content */}
                <p className="text-center font-light text-base">
                  We are committed to providing services to individuals who need
                  residential, nursing, and community waivered supports to live
                  their lives independently throughout the communities, with a
                  personal choice in the services that they desire. We pledge to
                  promote dignity, respect, and individual rights as valued
                  members of the community.
                </p>{" "}
              </div>
              <div className="missionLeftttt">
                {/* mission header */}
                <h2 className="text-center text-base font-bold capitalise mt-10">
                  Our Vision
                </h2>
                <div className="missionLeftMobile">
                  {/* mission image */}
                  <img
                    src={missionImg3}
                    alt="mission image"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* mission content */}
                <p className="text-center font-light text-base">
                  To empower every individual we serve to live a fulfilling, 
                  self-directed life within their community—where independence 
                  is nurtured, choices are honored, and inclusion is a way of life. 
                  We envision a future where compassionate care and respect for 
                  individuality create opportunities for growth, connection, and 
                  lifelong well-being.
                </p>{" "}
              </div>
            </div>

            <div className="missionRightWeb">
              {/* mission image */}
              <img
                src={missionImg}
                alt="mission image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>


        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
