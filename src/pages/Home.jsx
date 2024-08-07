import hero1 from "../assets/med-bg02.jpg";

import Button from "../component/Button";
import "../styles/homeStyles.css";
import aboutdda from "../assets/aboutdda.svg";
import servImg1 from "../assets/services/serve1.svg";
import servImg2 from "../assets/services/serve2.svg";
import servImg3 from "../assets/services/serve3.svg";
import servImg4 from "../assets/services/serve4.svg";
import servImg5 from "../assets/services/serve5.svg";
import servImg6 from "../assets/services/serve6.svg";

import openQ from "../assets/openQ.svg";
import closeQ from "../assets/closeQ.svg";
import review from "../assets/review.svg";
import nurse_care from "../assets/carehomeNurse.jpg";
import BtnComp from "../component/BtnComp";
import Footer from "../component/Footer";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper";
// import "swiper/swiper-bundle.min.css";
import { useEffect } from "react";

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

// import { useEffect } from "react";
// import work_us from "../assets/newsContactBg.svg.jpg";
// import gsap from 'gsap';

const HomePage = () => {
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

  // useEffect(() => {

  //   console.log("Starting GSAP animations");

  //   gsap.from(".HeroLeftBox", {
  //     duration: 1,
  //     opacity: 0,
  //     x: -100,
  //     ease: "power2.inOut",
  //     onComplete: () => console.log("HeroLeftBox animation complete")
  //   });

  //   gsap.from(".HeroRightBox", {
  //     duration: 1,
  //     opacity: 0,
  //     x: 100,
  //     ease: "power2.inOut",
  //     delay: 0.5,
  //     onComplete: () => console.log("HeroLeftBox animation complete")
  //   });
  // }, []);

  return (
    <>
      {/*  Start Homepage Wrapper */}
      <div className="homepageContainer">
        {/*  Hero Section */}
        <div className="heroSection">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {/* slide 1 */}
              <div className="swiper-slide relative">
                <div
                  className=" heroFlex bg-cover bg-center h-screen flex items-center justify-between"
                  style={{ backgroundImage: `url(${hero1})` }}
                >
                  {/* // Blur Background  */}
                  {/* <div className="absolute inset-0 bg-black opacity-50  z-0"></div> */}

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
                        to="/about"
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
                  style={{ backgroundImage: `url(${hero1})` }}
                >
                  {/* // Blur Background  */}
                  {/* <div className="absolute inset-0 bg-black opacity-50  z-0"></div> */}

                  {/* // Left Box  */}
                  <div className="HeroLeftBox text-white ml-40 uppercase z-10">
                    <div className="topHero">
                      <p
                        className="font-bold text-5xl tracking-wider  m-0"
                        style={{ lineHeight: "3.5rem" }}
                      >
                        Slider 2
                      </p>
                      <p
                        className=" heroTextP font-bold text-5xl "
                        style={{ lineHeight: "3.5rem" }}
                      >
                        Slider 2
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
                        to="/about"
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
              <div className="swiper-button-prev">
                <div className="arrow"></div>
              </div>
              <div className="swiper-button-next">
                <div className="arrow"></div>
              </div>
            </div>
          </div>
        </div>
        {/* End  Hero Section */}

        {/* About Us Section */}
        <div className="ddaAboutWrapper">
          <div className="ddaaAboutContainer ml-[5%] mr-[5%] pt-6 pb-6 text-black">
            <h2 className=" text-center text-2xl p-2 font-medium">About Us</h2>
            <div className="ddaAboutLeft">
              {/* <div className="imgBorder"> */}
              <img src={aboutdda} alt="" />
              {/* </div> */}
            </div>
            <div className="ddaAboutRight">
              <div className="ddaAboutSummary font-light py-1 text-sm">
                Our agency provides a wide range of services tailored to meet
                the unique needs of each individual we serve. Whether you need
                assistance with daily living skills, job training and
                employment, or social and recreational activities, we are here
                to help.
              </div>
              <div className="ddaAboutSummary font-light py-1 mb-6 text-sm">
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
                // bgColor="linear-gradient(to right, #028A0F, #90D296)"
                width="130px"
                height="45px"
                to="/about"
              />
            </div>
          </div>
        </div>
        {/* End About Us Section  */}

        {/* Our Services Section */}
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
        {/* End Our Services Section */}

        {/* clients Review Section */}
        <div className="clientsReviewWrapper pb-20">
          <h2 className=" text-center text-2xl p-2 font-medium mt-12 mb-8">
            Client Reviews
          </h2>
          <div className="clientsReviewContainer ml-[5%] mr-[5%]">
            {/* // Review 1 */}
            <div className="clientsReviewItem ">
              <div className="slider-container">
                <div className="quote-image-top">
                  <img src={openQ} alt="" />
                </div>
                <div className="quote-text">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  enim quae voluptatibus tenetur illum distinctio, rem dolore
                  esse animi natus beatae, consectetur sunt eos repellat odio
                  error deleniti recusandae sint.
                </div>
                <div className="client-info">
                  <div className="client-image">
                    <img src={review} alt="" />
                  </div>
                  <div className="client-name">John Doe</div>
                </div>
                <div className="quote-image-btm">
                  <img src={closeQ} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End clients Review Section */}

        {/* The best elderly care Section */}
        <div className="bestElderlyCareWrapper text-black pb-16">
          <div className="bestElderlyCareContainer ml-[5%] mr-[5%]">
            <div className="ederlyCareLeft">
              <h2 className=" text-center text-2xl  font-medium pb-8">
                The Best Elderly Care Center For You
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
                    width="130px"
                    height="45px"
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
        </div>
        {/* End The best elderly care Section */}

        {/* Newsletter / contact Us Section */}
        <div className="newsletterContactWrapper text-black mt-12 mb-12">
          <div className="newsletterContactContainer ml-[5%] mr-[5%] p-4">
            <h2 className=" text-2xl font-bold pb-4 pt-4 text-white">
              Looking for a Better Care?
            </h2>
            {/* // Newsletter */}
            <div className="newsletterItem ">
              <p className="newsletterDesc text-sm pb-5 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                veritatis culpa tempora veniam accusamus officia vitae ducimus
                libero, recusandae porro nesciunt nulla iste quis maxime in
                provident, quia doloremque rerum?
              </p>
              <BtnComp
                text="Call Today"
                color="black"
                width="130px"
                height="45px"
              />
            </div>
          </div>
        </div>

        {/* End Newsletter / contact Us Section */}

        {/* // Footer Section */}
        <Footer />
      </div>
      {/* End Homepage  */}
    </>
  );
};

export default HomePage;
