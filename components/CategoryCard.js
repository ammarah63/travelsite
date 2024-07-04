import Image from "next/image";
import { useState } from "react";
const CategoryCard = ({ image, heading, caption }) => {
     const [hovered, setHovered] = useState(false);
  return (
    <div className="relative">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="bg-white rounded-3xl w-64 3xl:w-80 4xl:w-96 flex-col justify-center text-center hover:shadow-2xl pb-5 px-5 relative z-10"
      >
        <div className="flex justify-center">
          <Image src={image} width={100} height={100} className="my-5 h-32 3xl:h-60 4xl:h-72" />
        </div>
        <div className="text-center flex-col justify-center">
          <p className="my-3 text-lg 3xl:text-2xl 4xl:text-3xl font-semibold">{heading}</p>
          <p className="my-3 text-base 3xl:text-xl 4xl:text-2xl text-center px-7">{caption}</p>
        </div>
      </div>
      {hovered && (
        <div className="absolute bottom-0 left-0 bg-[#DF6951] h-28 w-28 rounded-ss-3xl rounded-ee-3xl transform translate-x-[-30%] translate-y-[10%] "></div>
      )}
    </div>
  );
};

export default CategoryCard;
