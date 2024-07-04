import Image from "next/image";
import pic1 from "../public/assets/partner1.png";
import pic2 from "../public/assets/partner2.png";
import pic3 from "../public/assets/partner3.png";
import pic4 from "../public/assets/partner4.png";
import pic5 from "../public/assets/partner5.png";
import Testimonialslider from "./Testimonialslider";

const Testimonials = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row space-y-16 px-2 md:px-10 h-full 2xl:px-28 mt-52 3xl:mt-72">
        <div
          data-aos="fade-left"
          data-aos-once="true"
          className="w-full text-center lg:text-left  lg:w-6/12"
        >
          <p className="text-base lg:text-xl 3xl:text-3xl 4xl:text-4xl text-[#5e6282] font-bold">
            Testimonials
          </p>
          <p className="font-bold text-3xl lg:text-5xl 3xl:text-7xl 4xl:text-8xl my-3 heading">
            What People Say
            <br /> About Us
          </p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="w-full lg:w-8/12 lg:px-5"
        >
          <Testimonialslider />
        </div>
      </div>
      <div data-aos="fade-up" data-aos-once="true">
        <div className="grid grid-cols-1 lg:grid-cols-5 px-10 py-16 gap-14">
          <div className="flex justify-center filter grayscale hover:filter-none hover:shadow-custom hover:bg-white rounded-3xl py-5 mx-6">
            <Image
              src={pic5}
              width={100}
              height={100}
              className="4xl:w-40 4xl:h-20"
            />
          </div>
          <div className="flex justify-center filter grayscale hover:filter-none hover:shadow-custom hover:bg-white rounded-3xl py-5 mx-6">
            <Image
              src={pic4}
              width={100}
              height={100}
              className=" 4xl:w-40 4xl:h-20"
            />
          </div>
          <div className="flex justify-center filter grayscale hover:filter-none hover:shadow-custom hover:bg-white rounded-3xl py-5 mx-6">
            <Image
              src={pic1}
              width={100}
              height={100}
              className=" 4xl:w-40 4xl:h-20"
            />
          </div>
          <div className="flex justify-center filter grayscale hover:filter-none hover:shadow-custom hover:bg-white rounded-3xl py-5 mx-6">
            <Image
              src={pic2}
              width={100}
              height={100}
              className="4xl:w-40 4xl:h-20 "
            />
          </div>
          <div className="flex justify-center filter grayscale hover:filter-none hover:shadow-custom hover:bg-white rounded-3xl py-5 mx-6">
            <Image
              src={pic3}
              width={100}
              height={100}
              className=" 4xl:w-40 4xl:h-20"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
