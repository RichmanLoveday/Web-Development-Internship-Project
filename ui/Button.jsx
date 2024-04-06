import PropTypes from "prop-types";

export function ButtonUI({ text, color, disable, className }) {
  return (
    <button
      disabled={disable}
      className={`${color} px-10 py-3 text-white text-center ${
        disable ? "opacity-50" : ""
      } rounded-md  border-none outline-0 focus:outline-0 focus:ring focus:${color} transition-all ease-in-out ${className}`}
    >
      {text}
    </button>
  );
}

ButtonUI.propTypes = {
  disable: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
};
