// QuestionMarkIcon.js
import React, { useState } from "react";
import "../questionMarkIcon/QuestionMarkIcon.css";

const QuestionMarkIcon = ({ text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <span
      className="question-mark"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`tooltiptext ${showTooltip ? "show" : ""}`}>{text}</span>
      &#63; {/* Question mark character */}
    </span>
  );
};

export default QuestionMarkIcon;
