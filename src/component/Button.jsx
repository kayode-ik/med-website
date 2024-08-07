/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"; // If using React Router
import "../styles/button.css";

const Button = ({
  text,
  // iconLeft,
  // iconRight,
  color,
  bgColor,
  width,
  height,
  className,
  onClick, // Add onClick prop
  to, // Add to prop for React Router
  iconLeft: IconLeft,
  iconRight: IconRight,
}) => {
  const buttonStyle = {
    color: color || "white",
    backgroundColor: bgColor || "brown",
    width: width || "auto",
    height: height || "auto",
  };

  const buttonContent = (
    <>
      {IconLeft && <IconLeft style={{ marginRight: "8px" }} />}
      {text}
      {IconRight && <IconRight style={{ marginLeft: "8px" }} />}
    </>
  );

  if (to) {
    // If 'to' prop is provided, render a Link component
    return (
      <Link
        className={`flex items-center justify-center p-2 rounded-md uppercase font-bold ${className}`}
        style={buttonStyle}
        to={to}
      >
        {buttonContent}
      </Link>
    );
  } else {
    // Otherwise, render a button element with onClick handler
    return (
      <button
        className={`flex items-center justify-center p-2 rounded-md uppercase font-bold  ${className}`}
        style={buttonStyle}
        onClick={onClick}
      >
        {buttonContent}
      </button>
    );
  }
};

export default Button;
