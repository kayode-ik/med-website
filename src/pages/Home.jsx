import { useNavigate } from "react-router-dom";
import hero1 from "../assets/med-bg02.jpg";
import hero2 from "../assets/hero2Med.jpg";

import Button from "../component/Button";
import "../styles/homeStyles.css";
import aboutdda from "../assets/images_stock/istock000.jpg";

import servImg1 from "../assets/services/serve1.svg";
import servImg2 from "../assets/services/serve2.svg";
import servImg3 from "../assets/services/serve3.svg";
import servImg4 from "../assets/services/serve4.svg";
import servImg5 from "../assets/services/serve5.svg";
import servImg6 from "../assets/services/serve6.svg";
import servImg7 from "../assets/services/livingWeb.png";
import servImg8 from "../assets/services/livingAssist.png";

import openQ from "../assets/OpenQ000.svg";
import closeQ from "../assets/CloseQ000.svg";
import review from "../assets/review.svg";
import nurse_care from "../assets/images_stock/hero2-med.jpg";
import BtnComp from "../component/BtnComp";
import Footer from "../component/Footer";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import { useEffect } from "react";
import ServicesCmp from "../component/Services";
import ReviewsCmp from "../component/Reviews";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

// import gsap from 'gsap';

const HomePage = () => {
  const navigate = useNavigate();
  const controls = useAnimation();

  useEffect(() => {
    // Initialize the Swiper instance when the component mounts
    const swiper = new SwiperCore(".swiper-container", {
      // loop: true,
      autoplay: {
        delay: 30000, // Autoplay delay in milliseconds
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true, // Allow clicking on pagination bullets
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // Destroy the Swiper instance when the component unmounts
    return () => {
      swiper.destroy();
    };
  }, []);

  // Slide-up animation variants
  const slideUpVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  // Slide-in animation for hero section
  const slideInVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  // Fade-in effect for services
  // const fadeInVariant = {
  //   hidden: { opacity: 0 },
  //   visible: (i) => ({
  //     opacity: 1,
  //     transition: { duration: 1, delay: i * 0.3 },
  //   }),
  // };

  // Scale-up effect for client reviews
  const scaleUpVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  // Trigger animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector(".ddaAboutWrapper");
      const aboutPosition = aboutSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (aboutPosition < screenPosition) {
        controls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  // Example data for reviews and services
  const reviews = [
    {
      openQuoteImage: openQ,
      closeQuoteImage: closeQ,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      clientImage: review,
      clientName: "John Doe",
    },
    // Add more reviews here
  ];

  const services = [
    {
      icon: servImg2,
      iconClass: "serv1",
      title: "Respite Services",
      description:
        " Daily or 15 min Our Respite Services offer short-term, high-quality care-available daily or in 15-minute increments-to give family caregivers time to rest and recharge. Care is flexible and can be scheduled as needed, during emergencies, or at set times. Beyond basic support, the program provides enriching experiences that promote personal growth for participants while enhancing overall well-being for both them and their caregivers.",
    },
    {
      icon: servImg1,
      iconClass: "serv2",
      title: "Shared Living",
      description:
        " Shared Living focuses on the long-term relationships that develop from cohabiting, creating nurturing households, and fostering close personal connections between a participant and he host family. In Shared Living, a family o ndividual offers their stable and loving home environment to a person with a disability, providing necessary care while receiving compensation for their efforts. Typical providers include single parents, retirees, and widows or widowers essentially anyone who has the capacity in their heart and home to share the variety of experiences that life presents.",
    },
    {
      icon: servImg5,
      iconClass: "serv3",
      title: "Nursing Services",
      description:
        " Alternative DDA Care offers personalized Nursing Support Services provided by licensed registered nurses in Maryland. Services include nursing consultation, health case manage-ment, and delegation, all based on individual evaluations. Preauthorization from the Developmental Disabilities Administration is required and documented in the participant’s Person-Centered Plan. In addition to direct care, the program includesstaff oversight, training, and education to ensure comprehensive, high-quality support that promotes each participant’s health and well-being.",
    },
    {
      icon: servImg4,
      iconClass: "serv4",
      title: "Employment Services",
      description:
        "Our Employment Services empower individuals to pursue meaningful careers by providing personalized, time-limited support focused on employment planning. Through a discovery process that includes home visits, job trials, and employer evaluations, we help participants identify their strengths and interests to create a Discovery Profile and visual resume. Services include Discovery, Job Development, Ongoing Job Support, Follow-Along Support, Self-Employment, and Co-Worker Employment Support.",
    },
    {
      icon: servImg6,
      iconClass: "serv5",
      title: "Transportation Services",
      description:
        "Alternative DDA Care offer non-medical support, educa-tion, and transport for the participant and their family caregiver, enabling the participant to engage in community activities as outlined in their personalized care plan.",
    },
    {
      icon: servImg3,
      iconClass: "serv6",
      title: "Community Development Services",
      description:
        " Alternative DDA care provides the service in a variety of community contexts and activities, giving participants the chance to improve their social integration and independence. Every participant’s preference, objectives, and distinct goals are carefully taken into account under the guidance of a person-centered planning approach, guaranteeing that every opportunity fits with their vision for a happy and inclusive life.",
    },
    {
      icon: servImg7,
      iconClass: "serv7",
      title: "Personal Support",
      description:
        "A special one-on-one program called Personal Supports gives our participant the chance to become more independent and engage with their community. In order to better fulfill our collaborative mission of ensuring that participants are completely assimilated and included in their neighborhoods, places of employment, and places of worship, we offer a comprehensive range of community-based su-pport, including improved development of the participant’s natural support system.",
    },
    {
      icon: servImg8,
      iconClass: "serv6",
      title: "Support Living",
      description:
        " The Supported Living program enables participants to navigate both the triumphs and setbacks of living independently while offering support and helping them make informed choices in all areas of their lives. This program upholds the belief that every participant has the right to steer their own future and experience the full range of successes and challenges that come with pursuing true independence. We commit our time and, importantly, our expertise to finding knowledgeable men and women who can deliver the highest quality of support to our participants.",
    },
    // Add more services here
  ];

  return (
    <>
      {/*  Start Homepage Wrapper */}
      <div className="homepageContainer">
        {/*  Hero Section */}
        <motion.div
          className="heroSection"
          initial="hidden"
          animate="visible"
          variants={slideInVariant}
        >
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {/* slide 1 */}
              <div className="swiper-slide relative">
                <div
                  className=" heroFlex bg-cover bg-center h-screen flex items-center justify-between"
                  style={{ backgroundImage: `url(${hero1})` }}
                >
                  {/* // Blur Background  */}
                  <div className="absolute inset-0 bg-black opacity-50  z-0"></div>

                  {/* // Left Box  */}
                  <div className="HeroLeftBox text-white ml-40 uppercase z-10">
                    <div className="topHero">
                      <p
                        className="font-bold text-5xl tracking-wider  m-0"
                        style={{ lineHeight: "3.5rem" }}
                      >
                        Empowering Independence
                      </p>
                      <p
                        className=" heroTextP font-bold text-5xl "
                        style={{ lineHeight: "3.5rem" }}
                      >
                        For All Abilities
                      </p>
                    </div>
                    <div className="bottomHero">
                      <h1
                        className="text-base mb-8 mt-4 font-medium tracking-wider"
                        style={{ color: "#F6F6F6" }}
                      >
                        We provide comprehensive support and care for people
                        with disabilities,
                        <br />
                        promoting a life of dignity and independence.
                      </h1>
                      {/* //{" "} */}
                      <Button
                        text="Who we are"
                        color="white"
                        bgColor="#4b2e1e"
                        iconRight={ArrowForwardIcon}
                        width="175px"
                        height="55px"
                        // to="/about"
                        onClick={() => {
                          navigate("/about");
                          window.scrollTo(0, 0);
                        }}
                      />
                    </div>
                  </div>

                  {/*  // Right Box */}
                  {/* <div className=" HeroRightBox mr-40 z-10">
              <h1
                className="text-base mb-8 font-normal tracking-wider"
                style={{ color: "#F6F6F6" }}
              >
                We provide comprehensive support and care for people with
                disabilities,
                <br />
                promoting a life of dignity and independence.
              </h1>
              <Button
                text="Who we are"
                // color="white"
                // bgColor="linear-gradient(to right, #028A0F, #90D296)"
                // iconRight={arrowFor}
                width="175px"
                height="55px"
                to="/about"
              />
            </div> */}
                </div>
              </div>
              {/* slide 2 */}
              <div className="swiper-slide relative">
                <div
                  className=" heroFlex bg-cover bg-center h-screen flex items-center justify-between"
                  style={{ backgroundImage: `url(${hero2})` }}
                >
                  {/* // Blur Background  */}
                  <div className="absolute inset-0 bg-black opacity-50  z-0"></div>

                  {/* // Left Box  */}
                  <div className="HeroLeftBox text-white ml-40 uppercase z-10">
                    <div className="topHero">
                      <p
                        className="font-bold text-5xl tracking-wider  m-0"
                        style={{ lineHeight: "3.5rem" }}
                      >
                        Your Journey, Our Mission
                      </p>
                      <p
                        className=" heroTextP font-bold text-5xl "
                        style={{ lineHeight: "3.5rem" }}
                      >
                        Compassionate Care
                      </p>
                    </div>
                    <div className="bottomHero">
                      <h1
                        className="text-base mb-8 mt-4 font-medium tracking-wider"
                        style={{ color: "#F6F6F6" }}
                      >
                        We stand by your side, providing personalized care and
                        support
                        <br />
                        to help you live life to the fullest, every step of the
                        way.
                      </h1>
                      {/* //{" "} */}
                      <Button
                        text="Our Services"
                        color="white"
                        bgColor="#4b2e1e"
                        iconRight={ArrowForwardIcon}
                        width="175px"
                        height="55px"
                        // to="/about"
                        onClick={() => {
                          navigate("/services");
                          window.scrollTo(0, 0);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-prev">
              <div className="arrow"></div>
            </div>
            <div className="swiper-button-next">
              <div className="arrow"></div>
            </div>
          </div>
        </motion.div>
        {/* End  Hero Section */}

        {/* About Us Section */}
        <motion.div
          className="ddaAboutWrapper"
          initial="hidden"
          animate={controls}
          variants={slideUpVariant}
        >
          <div className="ddaaAboutContainer ml-[5%] mr-[5%] pt-6 pb-6 text-black">
            <h2 className=" text-center text-2xl p-2 font-medium mobileAbout">
              About Us
            </h2>
            <div className="ddaAboutLeft">
              {/* <div className="imgBorder"> */}
              <img src={aboutdda} alt="" />
              {/* </div> */}
            </div>
            <div className="ddaAboutRight webAboutUs">
              <h2 className=" text-center text-2xl p-2 font-medium webAboutView">
                About Us
              </h2>

              <div className="ddaAboutSummary font-light py-1 text-base">
                Our agency provides a wide range of services tailored to meet
                the unique needs of each individual we serve. Whether you need
                assistance with daily living skills, job training and
                employment, or social and recreational activities, we are here
                to help.
              </div>
              <div className="ddaAboutSummary font-light py-1 mb-6 text-base">
               
              </div>
              {/* <div className="ddaAboutContent">

              </div> */}
              <Button
                text="Read More"
                color="white"
                bgColor="#4b2e1e"
                width="130px"
                height="45px"
                // to="/about"
                onClick={() => {
                  navigate("/about");
                  window.scrollTo(0, 0);
                }}
              />
            </div>
          </div>
        </motion.div>
        {/* End About Us Section  */}

        {/* Our Services Section */}
        <motion.div
          className="ourServicesWrapper"
          initial="hidden"
          animate={controls}
          variants={slideUpVariant}
        >
          <h2 className=" text-center text-2xl p-2 font-medium">
            Our Services
          </h2>
          <ServicesCmp services={services} />
        </motion.div>

        {/* End Our Services Section */}

        {/* clients Review Section */}
        {/* <motion.div
          className="clientsReviewWrapper pb-20"
          initial="hidden"
          animate={controls}
          variants={scaleUpVariant}
        >
          <h2 className=" text-center text-2xl p-2 font-medium mt-12 mb-8">
            Client Reviews
          </h2>
          <div className="clientsReviewContainer ml-[5%] mr-[5%]"> */}
            {/* // Review 1 */}
            {/* <ReviewsCmp reviews={reviews} />
          </div>
        </motion.div> */}

        {/* End clients Review Section */}

        {/* The best elderly care Section */}
        <motion.div
          className="bestElderlyCareWrapper text-black pb-16"
          initial="hidden"
          animate={controls}
          variants={slideUpVariant}
        >
          <div className="bestElderlyCareContainer ml-[5%] mr-[5%]">
            <div className="ederlyCareLeft">
              <h2 className=" text-center text-2xl  font-medium pb-8">
                The Best Alternative Care Center For You
              </h2>
              <div className="ederlyCareRight">
                <div className="bestElderlyCareImageMobile">
                  <img src={nurse_care} alt="elderlyCare1" />
                </div>
              </div>
              <div className="bestElderlyCareItem ">
                <div className="bestElderlyCareContent">
                  {/* <p className="bestElderlyCareDesc text-sm pb-8">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p> */}
                  <Button
                    text="Learn More"
                    color="white"
                    bgColor="#4b2e1e"
                    width="130px"
                    height="45px"
                    // to="#"
                    onClick={() => {
                      navigate("/services");
                      window.scrollTo(0, 0);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="ederlyCareRight">
              <div className="bestElderlyCareImageWeb">
                <img src={nurse_care} alt="elderlyCare1" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* End The best elderly care Section */}

        {/* Newsletter / contact Us Section */}
        {/* <div className="newsletterContactWrapper text-black mt-12 mb-12" style={{ backgroundImage: `url(${hero1})` }}> */}
        <motion.div
          className="newsletterContactWrapper mt-12 mb-12"
          initial="hidden"
          animate={controls}
          variants={slideUpVariant}
        >
          <div className="newsletterContactContainer ml-[5%] mr-[5%] p-4  text-black">
            <h2 className=" text-2xl font-bold pb-4 pt-4 text-black">
              Looking for a Better Care?
            </h2>
            {/* // Newsletter */}
            <div className="newsletterItem ">
              {/* <p className="newsletterDesc text-sm pb-5 text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                veritatis culpa tempora veniam accusamus officia vitae ducimus
                libero, recusandae porro nesciunt nulla iste quis maxime in
                provident, quia doloremque rerum?
              </p> */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <BtnComp
                  text="Contact Us"
                  color="black"
                  width="130px"
                  height="45px"
                  onClick={() => {
                    navigate("/contact");
                    window.scrollTo(0, 0);
                  }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
        {/* End Newsletter / contact Us Section */}

        {/* // Footer Section */}
        <Footer />
      </div>
      {/* End Homepage  */}
    </>
  );
};

export default HomePage;
