/* eslint-disable react/prop-types */
// Services.js
import "../styles/homeStyles.css";

import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const ServicesCmp = ({ services }) => {
  return (
    <div className="ourServicesContainer ml-[5%] mr-[5%]">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="ourServiceItem"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          <div className={`ourServiceIcon ${service.iconClass}`}>
            <div className="ourServiceIconLabel">
              <img src={service.icon} alt={`Service ${index + 1}`} />
            </div>
          </div>
          <div className="ourServiceContent">
            <h3 className="ourServiceTitle text-xl">{service.title}</h3>
            <p className="ourServiceDesc text-sm">{service.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesCmp;
