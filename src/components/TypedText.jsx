import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Md Mamun Mia",
        "MERN Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Pixel UX/UI Designer",
      ],
      typeSpeed: 90,
      backSpeed: 70,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="">
      <span
        ref={el}
        className="font-bold text-3xl lg:text-4xl text-white tage"
      />
    </div>
  );
};

export default TypedText;
