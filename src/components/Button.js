import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => { // 3 props: color, text, onClick
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "#FFC943",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func, // onClick is a function
};
export default Button;
