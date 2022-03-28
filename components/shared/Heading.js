const Heading = ({ num,value , value2 }) => {
  return (
    <div>
      <div className="font-semibold text-[144px] leading-[84px] flex relative z-[-1] text-zinc-200 top-8 right-10">
        {num}
      </div>
      <div className="font-medium text-[34px] leading-[44px]">{value}<br/>{value2}</div>
    </div>
  );
};

export default Heading;
