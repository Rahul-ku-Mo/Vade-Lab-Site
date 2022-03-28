const TextInput = ({ type, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="p-4 border-2 placeholder-slate-400 rounded-l-lg border-blue-600 focus:outline-none "
      />
    </div>
  );
};
export default TextInput;
