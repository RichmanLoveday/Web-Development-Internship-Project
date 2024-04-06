import BackBtn from "./BackBtn";
import Logo from "./Logo";
import PropTypes from "prop-types";

function MinorHeader({ hidden }) {
  return (
    <header>
      <div className="flex justify-start items-center">
        <div>
          <Logo />
        </div>
        <div>
          <BackBtn hidden={hidden} />
        </div>
      </div>
    </header>
  );
}
export default MinorHeader;

MinorHeader.propTypes = {
  hidden: PropTypes.string.isRequired,
};
