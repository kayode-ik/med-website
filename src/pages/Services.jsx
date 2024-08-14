import "../styles/servicesStyles.css";
import ddaServiceHero from "../assets/ddaService.svg";

import activity1 from "../assets/images_stock/yogaAct2.jpg";
import activity2 from "../assets/images_stock/musicAct4.jpg";
import activity3 from "../assets/images_stock/gardenAct1.jpg";
import activity4 from "../assets/images_stock/outdoorAct3.jpg";

// import activity1 from "../assets/activity1.svg";
// import activity2 from "../assets/activity2.svg";
// import activity3 from "../assets/activity3.svg";
// import activity4 from "../assets/activity4.svg";

import Footer from "../component/Footer";
import FaqComp from "../component/FaqComp";
import SpecialPrograms from "../component/SpecialProgram";
// import FaqComp from "../component/FAQ";
import { motion } from "framer-motion";

const ServicesPage = () => {

  // Animation Variants
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const scaleUpVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};


return (
  <>
    {/* Hero Section */}
    <motion.div
      className="serviceSection bg-cover bg-center"
      style={{ backgroundImage: `url(${ddaServiceHero})`, height: "30vh" }}
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
    >
      <div className="serviceText">
        <h2 className="text-center pt-28 text-white font-Bold uppercase text-4xl tracking-wide">
          Services
        </h2>
      </div>
    </motion.div>

    {/* List Services Section */}
    <div className="serviceListContainer">
      <div className="serviceListWrapper">
        <div className="serviceList flex-item">
          {[
            "Residential Services (CLGH)",
            "Residential Care (Day and Hourly)",
            "Community Development",
            "Personal Support",
            "Nurse Services",
            "Transportation Services",
          ].map((service, index) => (
            <motion.div
              key={index}
              className="serviceItem"
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
            >
              <h3 className="capitalize text-lg font-semibold tracking-wide">
                {service}
              </h3>
              <p className="text-xs font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                tincidunt nisi. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed vel tincidunt nisi.
              </p>
              <div className="serviceDetails">
                <h3 className="capitalize text-sm font-medium tracking-wide">
                  Service Details
                </h3>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  reiciendis eveniet animi consequuntur.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* Recreational and Social Activities */}
    <motion.div
      className="recreationalSocialContainer"
      initial="hidden"
      animate="visible"
      variants={slideUpVariant}
    >
      <div className="recreationalSocialWrapper">
        <div className="recreationalSocial flex-item">
          <div className="recreationalSocialItem">
            <h3 className="capitalize text-lg font-semibold tracking-wide text-center">
              Recreational Activities & Social Activities
            </h3>
            <div className="recreationalSocialDetails">
              <div className="activity-FlexItem">
                {[activity1, activity2, activity3, activity4].map(
                  (activity, index) => (
                    <motion.div
                      key={index}
                      className="activity-item"
                      initial="hidden"
                      animate="visible"
                      variants={scaleUpVariant}
                    >
                      <img src={activity} alt="" />
                      <div className="activity-content">
                        <h4 className="text-sm font-medium tracking-wide">
                          {["Yoga", "Music Therapy", "Gardening", "Outdoor Games"][
                            index
                          ]}
                        </h4>
                        <p className="text-xs font-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                          vel tincidunt nisi.
                        </p>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Special Program */}
    <SpecialPrograms />

    {/* Frequently Asked Questions */}
    <FaqComp />

    {/* Footer */}
    <Footer />
  </>
);
};

export default ServicesPage;
