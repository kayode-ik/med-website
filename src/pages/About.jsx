import heroAbout from "../assets/aboutHero.svg";
import missionImg from "../assets/missiondda.svg";
import team1 from "../assets/team1.svg";
import Footer from "../component/Footer";
// import team2 from "../assets/team2.svg";

import "../styles/aboutStyles.css";

const AboutPage = () => {
  return (
    <>
      <div className="aboutContainer">
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
              {/* mission header */}
              <h2 className="text-center text-base font-bold capitalise">
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
              <p className="text-center font-light text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                placerat turpis, ut dictum velit. Sed sed posuere neque, vel
                consectetur velit. Quisque ultricies, eros eu malesuada semper,
                arcu velit condimentum nisi, vel sagittis orci risus vel felis.
              </p>{" "}
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

        {/* history of the  home */}
        <div className="aboutHistoryContainer">
          <div className="aboutHistoryWrapper">
            <h2 className="text-center text-base font-bold capitalise aboutHistoryText">
              History Of The Home
            </h2>
            <div className="aboutHistoryContentWrapper">
              {/* History 1 */}
              <div className="aboutHistoryContent history1">
                {/* history Name */}
                <h2 className="text-sm font-medium capitalise">
                  New Beginning
                </h2>
                {/* history content */}
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  provident quasi accusantium molestiae qui nam dolor recusandae
                  excepturi.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  provident quasi accusantium molestiae qui nam dolor recusandae
                  excepturi.
                </p>
                {/* history date / year */}
                <div className="text-xs text-end font-bold">
                  <span className="text-gray-400">2000</span>
                </div>
              </div>
              {/* History 2 */}

              <div className="aboutHistoryContent history2">
                {/* history Name */}
                <h2 className="text-sm font-medium capitalise">
                  Residence Expand
                </h2>
                {/* history content */}
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  provident quasi accusantium molestiae qui nam dolor recusandae
                  excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  provident quasi accusantium molestiae qui nam dolor recusandae
                  excepturi.
                </p>
                {/* history date / year */}
                <div className="text-xs text-end font-bold">
                  <span className="text-gray-400">2005</span>
                </div>
              </div>
              {/* History 3 */}
              <div className="aboutHistoryContent history3">
                {/* history Name */}
                <h2 className="text-sm font-medium capitalise">
                  HomeCare Service Started
                </h2>
                {/* history content */}
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  provident quasi accusantium molestiae qui nam dolor recusandae
                  excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  provident quasi accusantium molestiae qui nam dolor recusandae
                  excepturi.
                </p>
                {/* history date / year */}
                <div className="text-xs text-end font-bold">
                  <span className="text-gray-400">2010</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meet our team */}
        <div className="aboutTeamContainer">
          <div className="aboutTeamWrapper">
            <h2 className="text-center text-base font-bold capitalise">
              Meet Our Team
            </h2>
            <div className="aboutTeamFlex">
              {/* Team Member 1 */}
              <div className="aboutTeamMember">
                {/* team member image */}
                <img
                  src={team1}
                  alt="team member"
                  // className="w-24 h-24 object-cover rounded-full"
                />
                {/* team member name */}
                <h3 className="text-base font-semibold text-black-600 tracking-wide">
                  John Doe
                </h3>
                {/* team member title */}
                <p className="text-sm font-normal text-black-500 tracking-wide">
                  Staff designation
                </p>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  fugiat beatae consectetur voluptatum, quaerat quidem eum
                  doloremque a accusamus
                </p>
              </div>
              {/* Team Member 2 */}
              <div className="aboutTeamMember">
                {/* team member image */}
                <img
                  src={team1}
                  alt="team member"
                  // className="w-24 h-24 object-cover rounded-full"
                />
                {/* team member name */}
                <h3 className="text-base font-semibold text-black-600 tracking-wide">
                  John Doe
                </h3>
                {/* team member title */}
                <p className="text-sm font-normal text-black-500 tracking-wide">
                  Staff designation
                </p>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  fugiat beatae consectetur voluptatum, quaerat quidem eum
                  doloremque a accusamus
                </p>
              </div>
              {/* Team Member 3 */}
              <div className="aboutTeamMember">
                {/* team member image */}
                <img
                  src={team1}
                  alt="team member"
                  // className="w-24 h-24 object-cover rounded-full"
                />
                {/* team member name */}
                <h3 className="text-base font-semibold text-black-600 tracking-wide">
                  John Doe
                </h3>
                {/* team member title */}
                <p className="text-sm font-normal text-black-500 tracking-wide">
                  Staff designation
                </p>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  fugiat beatae consectetur voluptatum, quaerat quidem eum
                  doloremque a accusamus
                </p>
              </div>
              {/* Team Member 4 */}
              <div className="aboutTeamMember">
                {/* team member image */}
                <img
                  src={team1}
                  alt="team member"
                  // className="w-24 h-24 object-cover rounded-full"
                />
                {/* team member name */}
                <h3 className="text-base font-semibold text-black-600 tracking-wide">
                  John Doe
                </h3>
                {/* team member title */}
                <p className="text-sm font-normal text-black-500 tracking-wide">
                  Staff designation
                </p>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  fugiat beatae consectetur voluptatum, quaerat quidem eum
                  doloremque a accusamus
                </p>
              </div>
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
