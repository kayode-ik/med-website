import { useState } from "react";
import "../styles/faqStyles.css"; // Import the CSS file

// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const FaqComp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services including personal care assistance, job training, independent living programs, medical support, and more.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy! Simply contact us through our website or call us directly to schedule an initial consultation.",
    },
    {
      question: "Are your services covered by insurance?",
      answer:
        "Many of our services are covered by insurance. We also offer flexible payment plans for services that are not covered.",
    },
    {
      question: "What are your operating hours?",
      answer:
        "Our facilities are open Monday through Friday, from 8:00 AM to 6:00 PM. We also offer emergency services 24/7.",
    },
  ];

  return (
    <div className="faqContainer">
      <div className="faq-section">
        <h2 className=" capitalize">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? (
                  <RemoveCircleOutlineIcon />
                ) : (
                  <AddCircleOutlineIcon />
                )}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComp;
