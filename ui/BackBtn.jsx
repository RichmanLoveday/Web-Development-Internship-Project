import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
function BackBtn({ hidden }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`px-5 ${hidden} py-4 rounded-md bg-gray-100 focus:outline-0 focus:ring focus:ring-slate-200 transition-all ease-in-out inline-block`}
    >
      <i className="fa-solid fa-angle-left"></i>
    </button>
  );
}
export default BackBtn;

BackBtn.propTypes = {
  hidden: PropTypes.string.isRequired,
};
