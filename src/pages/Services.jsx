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

const services = [
  {
    iconClass: "serv1",
    title: "Respite Services",
    description:
      " Daily or 15 min Our Respite Services offer short-term, high-quality care-available daily or in 15-minute increments-to give family caregivers time to rest and recharge. Care is flexible and can be scheduled as needed, during emergencies, or at set times. Beyond basic support, the program provides enriching experiences that promote personal growth for participants while enhancing overall well-being for both them and their caregivers.",
  },
  {
    iconClass: "serv2",
    title: "Shared Living",
    description:
      " Shared Living focuses on the long-term relationships that develop from cohabiting, creating nurturing households, and fostering close personal connections between a participant and he host family. In Shared Living, a family o ndividual offers their stable and loving home environment to a person with a disability, providing necessary care while receiving compensation for their efforts. Typical providers include single parents, retirees, and widows or widowers essentially anyone who has the capacity in their heart and home to share the variety of experiences that life presents.",
  },
  {
    iconClass: "serv3",
    title: "Nursing Services",
    description:
      " Alternative DDA Care offers personalized Nursing Support Services provided by licensed registered nurses in Maryland. Services include nursing consultation, health case manage-ment, and delegation, all based on individual evaluations. Preauthorization from the Developmental Disabilities Administration is required and documented in the participant’s Person-Centered Plan. In addition to direct care, the program includesstaff oversight, training, and education to ensure comprehensive, high-quality support that promotes each participant’s health and well-being.",
  },
  {
    iconClass: "serv4",
    title: "Employment Services",
    description:
      "Our Employment Services empower individuals to pursue meaningful careers by providing personalized, time-limited support focused on employment planning. Through a discovery process that includes home visits, job trials, and employer evaluations, we help participants identify their strengths and interests to create a Discovery Profile and visual resume. Services include Discovery, Job Development, Ongoing Job Support, Follow-Along Support, Self-Employment, and Co-Worker Employment Support.",
  },
  {
    iconClass: "serv5",
    title: "Transportation Services",
    description:
      "Alternative DDA Care offer non-medical support, educa-tion, and transport for the participant and their family caregiver, enabling the participant to engage in community activities as outlined in their personalized care plan.",
  },
  {
    iconClass: "serv6",
    title: "Community Development Services",
    description:
      " Alternative DDA care provides the service in a variety of community contexts and activities, giving participants the chance to improve their social integration and independence. Every participant’s preference, objectives, and distinct goals are carefully taken into account under the guidance of a person-centered planning approach, guaranteeing that every opportunity fits with their vision for a happy and inclusive life.",
  },
  {
    iconClass: "serv7",
    title: "Personal Support",
    description:
      "A special one-on-one program called Personal Supports gives our participant the chance to become more independent and engage with their community. In order to better fulfill our collaborative mission of ensuring that participants are completely assimilated and included in their neighborhoods, places of employment, and places of worship, we offer a comprehensive range of community-based su-pport, including improved development of the participant’s natural support system.",
  },
  {
    iconClass: "serv6",
    title: "Support Living",
    description:
      " The Supported Living program enables participants to navigate both the triumphs and setbacks of living independently while offering support and helping them make informed choices in all areas of their lives. This program upholds the belief that every participant has the right to steer their own future and experience the full range of successes and challenges that come with pursuing true independence. We commit our time and, importantly, our expertise to finding knowledgeable men and women who can deliver the highest quality of support to our participants.",
  },
  // Add more services here
];


return (
  <div style={{ minHeight: '100vh', paddingTop: '70px' }}>
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
    {/* Temp Services */}
    <div className="serviceListContainer">
      <div className="serviceListWrapper">
        <div className="serviceList flex-item grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`serviceItem ${service.iconClass} p-4 bg-white rounded-lg shadow`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              {service.icon && (
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-12 h-12 mb-3"
                />
              )}
              <h3 className="capitalize text-lg font-semibold tracking-wide mb-2">
                {service.title}
              </h3>
              <p className="text-sm font-light text-gray-700">
                {service.description}
              </p>
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
                        {/* <p className="text-xs font-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                          vel tincidunt nisi.
                        </p> */}
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
  </div>
);
};

export default ServicesPage;
