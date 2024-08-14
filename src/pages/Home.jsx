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
      icon: servImg1,
      iconClass: "serv1",
      title: "Residential Services (CLGH)",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      icon: servImg2,
      iconClass: "serv2",
      title: "Residential care (day and hourly)",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      icon: servImg3,
      iconClass: "serv3",
      title: "Community Development",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      icon: servImg4,
      iconClass: "serv4",
      title: "Personal Support",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      icon: servImg5,
      iconClass: "serv5",
      title: "Nurse Services",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      icon: servImg6,
      iconClass: "serv6",
      title: "Transportation Services",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
                        onClick={() => navigate("/about")}
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
                        onClick={() => navigate("/services")}
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
                labore delectus! Fuga, eius. Perspiciatis iste velit nobis ea
                maxime quam minima, libero et eius aspernatur aut qui, modi
                debitis vel! Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quas, labore delectus! Fuga, eius. Perspiciatis iste velit
                nobis ea maxime quam minima, libero et eius aspernatur aut qui,
                modi debitis vel!
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
                onClick={() => navigate("/about")}
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
        <motion.div
          className="clientsReviewWrapper pb-20"
          initial="hidden"
          animate={controls}
          variants={scaleUpVariant}
        >
          <h2 className=" text-center text-2xl p-2 font-medium mt-12 mb-8">
            Client Reviews
          </h2>
          <div className="clientsReviewContainer ml-[5%] mr-[5%]">
            {/* // Review 1 */}
            <ReviewsCmp reviews={reviews} />
          </div>
        </motion.div>

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
                  <p className="bestElderlyCareDesc text-sm pb-8">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                  <Button
                    text="Learn More"
                    color="white"
                    bgColor="#4b2e1e"
                    width="130px"
                    height="45px"
                    // to="#"
                    onClick={() => navigate("#")}
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
              <p className="newsletterDesc text-sm pb-5 text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                veritatis culpa tempora veniam accusamus officia vitae ducimus
                libero, recusandae porro nesciunt nulla iste quis maxime in
                provident, quia doloremque rerum?
              </p>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <BtnComp
                  text="Contact Us"
                  color="black"
                  width="130px"
                  height="45px"
                  onClick={() => navigate("/contact")}
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
