import PropTypes from "prop-types";
import React from "react";

export const UserIcon = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-user ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M8 16C6.34315 16 5 17.3431 5 19V22H3V19C3 16.2386 5.23858 14 8 14H16C18.7614 14 21 16.2386 21 19V22H19V19C19 17.3431 17.6569 16 16 16H8Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

UserIcon.propTypes = {
  color: PropTypes.string,
};
