const Title = ({ spanValue, value }) => {
  return (
    <>
      <h2 className="font-semibold text-5xl leading-[56px] -tracking-[1.73958px]">
        <span className="text-blue-700">{spanValue}</span> {value}
      </h2>
    </>
  );
};

export default Title;
