import PropTypes from "prop-types";

export function PageTitle({ headingText, subText, className }) {
  return (
    <div className={`${className} space-y-5`}>
      <h1 className="text-5xl font-bold font-sans text-black">{headingText}</h1>
      <p className=" text-gray-500 font-sans">{subText}</p>
    </div>
  );
}

PageTitle.propTypes = {
  headingText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
