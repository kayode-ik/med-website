import hero1 from "../assets/herodda2.jpg";

import Button from "../component/Button";
import "../styles/homeStyles.css";
import aboutdda from "../assets/aboutdda.svg";
import servImg1 from "../assets/services/serve1.svg";
import servImg2 from "../assets/services/serve2.svg";
import servImg3 from "../assets/services/serve3.svg";
import servImg4 from "../assets/services/serve4.svg";
import servImg5 from "../assets/services/serve5.svg";
import servImg6 from "../assets/services/serve6.svg";

const HomePage = () => {
  return (
    <>
      {/*  Start Homepage Wrapper */}
      <div className="hompageContainer">
        {/*  Hero Section */}
        <div className="heroSection">
          {/* Slide 1 */}
          <div
            className=" heroFlex bg-cover bg-center h-screen flex items-center"
            style={{ backgroundImage: `url(${hero1})` }}
          >
            {/* // Blur Background  */}
            <div className="absolute inset-0 bg-black opacity-50  z-0"></div>

            {/* // Left Box  */}
            <div className="HeroLeftBox text-white ml-40 uppercase z-10">
              <p
                className="font-extralight text-5xl tracking-wider  m-0"
                style={{ lineHeight: "3.5rem" }}
              >
                Stay <br /> Comfortably
              </p>
              <p
                className=" heroTextP font-bold text-5xl "
                style={{ lineHeight: "3.5rem" }}
              >
                Like Your Home
              </p>
            </div>

            {/*  // Right Box */}
            <div className=" HeroRightBox mr-40 z-10">
              <h1
                className="text-base mb-8 font-normal tracking-wider"
                style={{ color: "#F6F6F6" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                nostrum dolor unde tenetur, voluptate quae dignissimos!
              </h1>
              {/* //{" "} */}
              <Button
                text="Who we are"
                color="white"
                // bgColor="linear-gradient(to right, #028A0F, #90D296)"
                // iconRight={arrowFor}
                width="175px"
                height="55px"
                to="/about"
              />
              {/* // <p className="text-lg font-bold">Right Box Description</p> */}
            </div>
          </div>
        </div>
        {/* End  Hero Section */}

        {/* About Us  */}
        <div className="ddaAboutWrapper">
          <div className="ddaaAboutContainer ml-[5%] mr-[5%] pt-6 pb-6 text-black">
            <div className="ddaAboutLeft">
              {/* <div className="imgBorder"> */}
              <img src={aboutdda} alt="" />
              {/* </div> */}
            </div>
            <div className="ddaAboutRight">
              <h2 className=" text-center text-2xl p-2 font-medium">
                About Us
              </h2>
              <div className="ddaAboutSummary font-light py-1 mb-6 text-sm">
                Our agency provides a wide range of services tailored to meet
                the unique needs of each individual we serve. Whether you need
                assistance with daily living skills, job training and
                employment, or social and recreational activities, we are here
                to help.
              </div>
              {/* <div className="ddaAboutContent">

              </div> */}
              <Button
                text="Read More"
                color="white"
                // bgColor="linear-gradient(to right, #028A0F, #90D296)"
                width="130px"
                height="45px"
                to="/about"
              />
            </div>
          </div>
        </div>
        {/* End About Us  */}

        {/* Our Services */}
        <div className="ourServicesWrapper text-black">
          <h2 className=" text-center text-2xl p-2 font-medium">
            Our Services
          </h2>
          <div className="ourServicesContainer ml-[5%] mr-[5%]">
            {/* // Service 1 */}
            <div className="ourServiceItem ">
              <div className="ourServiceIcon serv1">
                <div className="ourServiceIconLabel">
                  <img src={servImg1} alt="serve1" />
                </div>
              </div>
              <div className="ourServiceContent">
                <h3 className="ourServiceTitle text-xl">
                  Residential Services (CLGH)
                </h3>
                <p className="ourServiceDesc text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>
            {/* // Service 2 */}
            <div className="ourServiceItem ">
              <div className="ourServiceIcon serv2">
                <div className="ourServiceIconLabel">
                  <img src={servImg2} alt="serve2" />
                </div>
              </div>
              <div className="ourServiceContent">
                <h3 className="ourServiceTitle text-xl">
                  Residential care (day and hourly)
                </h3>
                <p className="ourServiceDesc text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>
            {/* // Service 3 */}
            <div className="ourServiceItem ">
              <div className="ourServiceIcon serv3">
                <div className="ourServiceIconLabel">
                  <img src={servImg3} alt="serve3" />
                </div>
              </div>
              <div className="ourServiceContent">
                <h3 className="ourServiceTitle text-xl">
                  Community Development
                </h3>
                <p className="ourServiceDesc text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>
            {/* // Service 4 */}
            <div className="ourServiceItem ">
              <div className="ourServiceIcon serv4">
                <div className="ourServiceIconLabel">
                  <img src={servImg4} alt="serve4" />
                </div>
              </div>
              <div className="ourServiceContent">
                <h3 className="ourServiceTitle text-xl">Personal Support</h3>
                <p className="ourServiceDesc text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>
            {/* // Service 5 */}
            <div className="ourServiceItem ">
              <div className="ourServiceIcon serv5">
                <div className="ourServiceIconLabel">
                  <img src={servImg5} alt="serve5" />
                </div>
              </div>
              <div className="ourServiceContent">
                <h3 className="ourServiceTitle text-xl">Nurse Services</h3>
                <p className="ourServiceDesc text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>
            {/* // Service 6 */}
            <div className="ourServiceItem ">
              <div className="ourServiceIcon serv6">
                <div className="ourServiceIconLabel">
                  <img src={servImg6} alt="serve6" />
                </div>
              </div>
              <div className="ourServiceContent">
                <h3 className="ourServiceTitle text-xl">
                  Transportation Services
                </h3>
                <p className="ourServiceDesc text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Our Services */}

        {/* // Footer Section */}
        {/* <Footer /> */}
      </div>
      {/* End Homepage  */}
    </>
  );
};

export default HomePage;
