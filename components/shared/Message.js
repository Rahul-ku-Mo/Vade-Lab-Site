const Message = ({ value }) => {
  return (
    <>
      <div
        className={`px-7 py-4 bg-blue-600 text-white rounded-lg text-xl text-center transition-all hover:bg-blue-800 `}
      >
        {value}
      </div>
    </>
  );
};

export default Message;
