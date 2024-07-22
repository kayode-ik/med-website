import hero1 from "../../assets/herodda.svg";
// import hero2 from "../../assets/hero2.svg";
// import hero3 from "../../assets/hero3.svg";
// import arrowFor from "../../assets/arrowForward.svg";

// import SwiperCore, {
//   Autoplay,
//   Pagination,
//   Navigation,
//   EffectFade,
// } from "swiper";
// import "swiper/swiper-bundle.min.css";
// import Button from "../../components/Button";
// import "../../styles/homeStyles.css";

// import partner1 from "../../assets/partner1.svg";
// import partner2 from "../../assets/partner2.svg";
// import partner3 from "../../assets/partner3.svg";
// import partner4 from "../../assets/partner4.svg";
// import partner5 from "../../assets/partner5.svg";
// import partner6 from "../../assets/partner6.svg";

// import workwithBg from "../../assets/workwithusBg.svg";

// import serv1 from "../../assets/service1.svg";
// import serv2 from "../../assets/service2.svg";
// import serv3 from "../../assets/service3.svg";
// import serv4 from "../../assets/service4.svg";
// import Footer from "../../components/Footer";
// import serveImpr from "../../assets/servImprov2.svg";

// import serviceBg from "../../assets/serviceBg.jpg";
// import portBg from "../../assets/portfolioBg.png";
// import portBg from "../../assets/mileStoneProject.svg";

// SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

const HomePage = () => {
  // useEffect(() => {
  //   // Initialize the Swiper instance when the component mounts
  //   const swiper = new SwiperCore(".swiper-container", {
  //     // loop: true,
  //     autoplay: {
  //       delay: 30000, // Autoplay delay in milliseconds
  //     },
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true, // Allow clicking on pagination bullets
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   });

  //   // Destroy the Swiper instance when the component unmounts
  //   return () => {
  //     swiper.destroy();
  //   };
  // }, []);

  return (
    <>
      {/*  Start Homepage Wrapper */}
      <div className="hompageContainer">
        {/*  Hero Section */}
        <div className="heroSection">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {/* Slide 1 */}
              <div className="swiper-slide relative">
                <div
                  className=" heroFlex bg-cover bg-center h-screen flex items-center justify-between"
                  style={{ backgroundImage: `url(${hero1})` }}
                >
                  {/* Blur Background */}
                  <div className="absolute inset-0 bg-black opacity-50  z-0"></div>

                  {/* Left Box */}
                  <div className="HeroLeftBox text-white ml-40 uppercase z-10">
                    <p
                      className="font-extralight text-5xl tracking-wider  m-0"
                      style={{ lineHeight: "3.5rem" }}
                    >
                      Elevating <br /> Standards
                    </p>
                    <p
                      className=" heroTextP font-bold text-5xl "
                      style={{ lineHeight: "3.5rem" }}
                    >
                      Empowering <br /> Industry
                    </p>
                  </div>

                  {/* Right Box */}
                  <div className=" HeroRightBox mr-40 z-10">
                    <h1
                      className="text-base mb-8 font-normal tracking-wider"
                      style={{ color: "#F6F6F6" }}
                    >
                      Your Premier Partner for <br /> Turnkey Solutions in Oil &
                      Gas <br />
                      Facilities, Construction, and <br /> Consultancy Services
                    </h1>
                    {/* <Button
                      text="Who we are"
                      color="white"
                      bgColor="#D33333"
                      iconRight={arrowFor}
                      width="175px"
                      height="55px"
                      to="/about"
                    /> */}
                    {/* <p className="text-lg font-bold">Right Box Description</p> */}
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
            {/* <div className="swiper-button-prev">
              <FaChevronLeft />
            </div>
            <div className="swiper-button-next">
              <FaChevronRight />
            </div> */}
          </div>
        </div>

        {/* Trusted partner Section */}
        {/* <div className="trustedContainer " style={{ background: "#F0F2F9" }}> */}
        {/* <div className="trustedPartners ml-12 mr-12"> */}
        {/* <div className="trustedContent flex items-center justify-around pt-6 pb-6"> */}
        {/* <div className="trustedContent  pt-6 pb-6">
              <span className=" text-2xl " style={{ color: "#00051B" }}>
                Trusted by
              </span>
              <div className="flexContainerTrus">
                <div className="trustedTop flexTrusted ">
                  <div className="img1 flex-itemImg">
                    <img src={partner1} alt="" style={{ width: "75%" }} />
                  </div>
                  <div className="img2 flex-itemImg">
                    <img src={partner2} alt="" style={{ width: "75%" }} />
                  </div>
                  <div className="img3 flex-itemImg">
                    <img src={partner3} alt="" style={{ width: "75%" }} />
                  </div>
                  <div className="img4 flex-itemImg">
                    <img src={partner4} alt="" style={{ width: "75%" }} />
                  </div>
                  <div className="img5 flex-itemImg">
                    <img src={partner5} alt="" style={{ width: "75%" }} />
                  </div>
                  <div className="img6 flex-itemImg">
                    <img src={partner6} alt="" style={{ width: "75%" }} />
                  </div>
                </div>
              </div>
            </div> */}
        {/* </div> */}
        {/* </div> */}

        {/* Why work with us */}
        {/* <div className="workContainer ml-10 mr-10"> */}
        {/* Web Work Container */}
        <div className="workContainer">
          <div className="workWrapper flex justify-between items-center">
            <div className="workLeft">
              {/* work span */}
              <span
                className="font-semibold text-xl leading-6 tracking-wider uppercase"
                style={{ color: "#D33333" }}
              >
                Elevate Your Energy Ventures with Gramen Petroserve
              </span>
              {/* work title */}
              <h2
                className="font-gilroy font-semibold text-6xl mt-1"
                style={{ color: "#00051B" }}
              >
                WHY WORK WITH US?
              </h2>

              {/* work content */}
              <div className="workContent mt-5">
                <p className="text-gray-700 font-gilroy-medium text-base leading-7 tracking-wider">
                  As the premier contractor for installation, maintenance, and
                  repair projects in Nigeria, we redefine excellence in the oil
                  and gas industry.
                </p>
                <br />
                <p className="text-gray-700 font-gilroy-medium text-base leading-7 tracking-wider">
                  Our dedicated task delivery teams, composed of seasoned
                  Engineers, Surveyors, Welders, and Fitters, guarantee swift
                  and secure project turnarounds.
                </p>
              </div>

              {/* work button */}
              <div className="btnn mt-10">
                {/* <Button
                  text="Learn More"
                  iconRight={arrowFor}
                  width="170px"
                  bgColor="#D33333"
                  height="50px"
                  to="/about"
                /> */}
              </div>
            </div>
            <div className="workRight">
              <div className="imgWrapper">
                {/* <img src={workwithBg} alt="svg" /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tab Container */}
        <div className="workContainerSmall">
          <div className="workWrapperSmall flex justify-between items-center">
            <div className="workLeftSmall">
              {/* work span */}
              <span
                className="font-semibold text-xl leading-6 tracking-wider uppercase"
                style={{ color: "#D33333" }}
              >
                Elevate Your Energy Ventures with Gramen Petroserve
              </span>
              {/* work title */}
              <h2
                className="font-gilroy font-semibold text-6xl mt-1"
                style={{ color: "#00051B" }}
              >
                WHY WORK WITH US?
              </h2>
            </div>
            <div className="workMiddleSmall">
              <div className="imgWrapperSmall">
                {/* <img src={workwithBg} alt="svg" /> */}
              </div>
            </div>
            <div className="workRightSmall">
              {/* work content */}
              <div className="workContentSmall mt-5">
                <p className="text-gray-700 font-gilroy-medium text-base leading-7 tracking-wider">
                  As the premier contractor for installation, maintenance, and
                  repair projects in Nigeria, we redefine excellence in the oil
                  and gas industry.
                </p>
                <br />
                <p className="text-gray-700 font-gilroy-medium text-base leading-7 tracking-wider">
                  Our dedicated task delivery teams, composed of seasoned
                  Engineers, Surveyors, Welders, and Fitters, guarantee swift
                  and secure project turnarounds.
                </p>
              </div>

              {/* work button */}
              <div className="btnnSmall mt-10">
                {/* <Button
                  text="Learn More"
                  iconRight={arrowFor}
                  width="170px"
                  bgColor="#D33333"
                  height="60px"
                  to="/about"
                /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div
          className="servicesContainerH bg-cover bg-no-repeat h-screen"
          // style={{ backgroundImage: `url(${serviceBg})` }}
        >
          <div className="servicesWrapper text-white">
            {/* Service Text */}
            <h2 className="py-32 text-center text-4xl uppercase font-semibold">
              Services
            </h2>

            <div className="serviceContent">
              {/* Service 1 */}
              <div className="mobileserviceContent tabServeContent">
                <div className="serv1 text-center flex-itemServe">
                  {/* image */}
                  {/* <img src={serv1} alt="" className="w-3/5 mx-8" /> */}
                  {/* Title */}
                  <h3 className=" font-extrabold uppercase py-6">
                    Engineering & <br /> Construction
                  </h3>
                  {/* Paragraph */}
                  <p className="font-bold tracking-wider">
                    Oil & Gas Facilities <br /> Construction, Engineering,{" "}
                    <br /> Operation
                  </p>
                </div>
                {/* Service 2 */}
                <div className="serv2 text-center flex-itemServe">
                  {/* image */}
                  {/* <img
                    src={serveImpr}
                    alt=""
                    className=" mx-8"
                    style={{ width: "54%" }}
                  /> */}
                  {/* Title */}
                  <h3 className=" font-extrabold uppercase py-6">
                    Facility <br /> Maintenance
                  </h3>
                  {/* Paragraph */}
                  <p className="font-bold tracking-wider">
                    Comprehensive repair, <br /> maintenance, as well as plant{" "}
                    <br /> upgrades & modifications
                  </p>
                </div>
                {/* Service 3 */}
                <div className="serv3 text-center flex-itemServe">
                  {/* image */}
                  {/* <img src={serv3} alt="" className="w-3/5 mx-8" /> */}
                  {/* Title */}
                  <h3 className=" font-extrabold uppercase py-6">
                    RESOURCE & <br /> PROCUREMENT
                  </h3>
                  {/* Paragraph */}
                  <p className="font-bold tracking-wider">
                    Procurement of tools, <br /> equipment, and materials
                    <br /> for oil and gas projects.
                  </p>
                </div>
                {/* Service 4 */}
                <div className="serv4 text-center flex-itemServe">
                  {/* image */}
                  {/* <img src={serv4} alt="" className="w-3/5 mx-8" /> */}
                  {/* Title */}
                  <h3 className=" font-extrabold uppercase py-6">
                    PROJECT <br /> MANAGEMENT
                  </h3>
                  {/* Paragraph */}
                  <p className="font-bold tracking-wider">
                    Project management <br /> services that span the full <br />{" "}
                    oil and gas value chain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="projectContainer" style={{ background: "#011359" }}>
          <div className="projectWrapper mr-10 ml-10">
            <div className="projectContent flex  text-white">
              <div className="contentLeft flex flex-col justify-center">
                {/* title */}
                <span className=" spanTopSmall uppercase text-5xl font-extralight tracking-wider">
                  Milestone
                </span>
                <span className="spanBottomSmall uppercase font-bold text-5xl tracking-wider ">
                  Projects
                </span>
                {/* text */}
                <div className="projectTextHome py-14">
                  <span className="text-sm webtext-sm">
                    With over three decades of industry presence, <br />
                    Gramen Petroserve has established itself as <br />
                    the preferred contractor for installation, <br />
                    maintenance, and repair projects in Nigeria.
                  </span>
                  <span className="text-sm mobiletext-sm">
                    With over three decades of industry presence, Gramen
                    Petroserve has established itself as the preferred
                    contractor for installation, maintenance, and repair
                    projects in Nigeria.
                  </span>
                </div>
                {/* button */}
                <div className="btnnnn">
                  {/* <Button
                    text="Our Portfolio"
                    iconRight={arrowFor}
                    width="200px"
                    bgColor="#D33333"
                    height="50px"
                    to="/projects"
                  /> */}
                </div>
              </div>
              <div className="contentRight py-16 w-3/5">
                {/* <img src={portBg} alt="" className="w-3/4 ml-20" /> */}
                {/* <img src={portBg} alt="" className="w-3/4 imageStyle" /> */}
                {/* <div
                  className="servicesContainer bg-cover bg-no-repeat h-screen"
                  style={{ backgroundImage: `url(${serviceBg})` }}
                ></div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tab Container */}
        <div
          className="projectContainerSmall"
          style={{ background: "#011359" }}
        >
          <div className="projectWrapperSmall mr-10 ml-10">
            <div className="projectContentSmall flex  text-white">
              <div className="contentLeftSmall flex flex-col justify-center">
                {/* title */}
                <span className=" spanTopSmall uppercase text-5xl font-extralight tracking-wider">
                  Milestone
                </span>
                <span className="spanBottom uppercase font-bold text-5xl tracking-wider ">
                  Projects
                </span>
              </div>
              <div className="contentMiddleSmall  py-16 w-3/5">
                {/* <img src={portBg} alt="" className="w-3/4 imageStyle" /> */}
              </div>
              <div className="">
                {/* text */}
                <div className="projectTextHomeSmall">
                  <span className="text-sm webtext-sm">
                    With over three decades of industry presence, Gramen
                    Petroserve has established itself as the preferred
                    contractor for installation, maintenance, and repair
                    projects in Nigeria.
                  </span>
                  <span className="text-sm mobiletext-sm">
                    With over three decades of industry presence, Gramen
                    Petroserve has established itself as the preferred
                    contractor for installation, maintenance, and repair
                    projects in Nigeria.
                  </span>
                </div>
                {/* button */}
                <div className="btnnnnSmall">
                  {/* <Button
                    text="Our Portfolio"
                    iconRight={arrowFor}
                    width="200px"
                    bgColor="#D33333"
                    height="60px"
                    to="/projects"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* <Footer /> */}
      </div>
      {/* End Homepage  */}
    </>
  );
};

export default HomePage;
