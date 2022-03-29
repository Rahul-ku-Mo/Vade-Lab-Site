import { useEffect, useState } from "react";
import { GiOrbDirection } from "react-icons/gi";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  const listenToScroll = () => {
    let heightToHideFrom = 3600;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    console.log(window.scrollY);
    return () => window.removeEventListener("scroll", listenToScroll);
  });
  return (
    <>
      {isVisible && (
        <div className="flex flex-col items-end justify-center fixed right-0 bottom-0 transition-all [visibility:visible] opacity-100">
          <div className="inline-block items-end  mb-[87px] mr-[103px]">
            <div
              className="flex justify-center"
              onClick={() => {
                scrollToTop();
              }}
            >
              <GiOrbDirection className="cursor-pointer" />
            </div>
            <div className="cursor-pointer font-[600]">Back To Top</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollButton;
