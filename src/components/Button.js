const Button = ({ color, text }) => {
  return (
    <button style={{ backgrounColor: color }} className="btn">
      {text}
    </button>
  );
};

export default Button;
