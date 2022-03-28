const Button = ({ value, onHandleClick, customRounding }) => {
  return (
    <div
      className={`px-7 py-[14px] bg-blue-700 text-white ${customRounding} text-xl cursor-pointer ease-in transition-all`}
      onClick={() => {
        onHandleClick();
      }}
    >
      {value}
    </div>
  );
};

export default Button;