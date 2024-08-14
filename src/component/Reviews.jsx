/* eslint-disable react/prop-types */
// Reviews.js
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

const ReviewsCmp = ({ reviews }) => {
  return (
    <div className="clientsReviewContainer ml-[5%] mr-[5%]">
      {reviews.map((review, index) => (
        <motion.div
          key={index}
          className="clientsReviewItem"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          <div className="slider-container">
            <div className="quote-image-top">
              <img src={review.openQuoteImage} alt="Open quote" />
            </div>
            <div className="quote-text">{review.text}</div>
            <div className="client-info">
              <div className="client-image">
                <img src={review.clientImage} alt="Client" />
              </div>
              <div className="client-name">{review.clientName}</div>
            </div>
            <div className="quote-image-btm">
              <img src={review.closeQuoteImage} alt="Close quote" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ReviewsCmp;
