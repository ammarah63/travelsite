import Image from "next/image";
import pic1 from "../public/assets/Decore.svg";
import pic2 from "../public/assets/Image.svg";
import pic3 from "../public/assets/mark.svg";
import pic4 from "../public/assets/Ellipse 8.png";

const HomeSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="px-5 lg:px-10 py-20 3xl:py-36 4xl:py-48 space-y-5 3xl:space-y-10 md:w-[60.5vw] 3xl:w-[45vw]">
          <p className="font-extrabold text-[#DF6951] text-sm lg:text-lg 3xl:text-2xl ">
            BEST DESTINATIONS AROUND THE WORLD
          </p>
          <p className="font-black text-4xl lg:text-7xl 3xl:text-8xl 4xl:text-9xl pe-5 heading">
            Travel,
            <span
              style={{
                backgroundImage: `url(${pic3.src})`,
                backgroundPosition: "50% 84%",
                backgroundSize: "auto",
                backgroundRepeat: "no-repeat",
              }}
            >
              enjoy
            </span>{" "}
            <br />
            and live a new and full life
          </p>
          <p className="text-sm lg:text-base 3xl:text-xl py-4 3xl:py-8">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex">
            <button className="bg-[#f1a501] text-white shadow-2xl px-6 me-10 py-4 rounded-2xl text-sm lg:text-lg 3xl:text-2xl 3xl:py-8 3xl:px-8">
              Find out more
            </button>
            <button className="text-sm lg:text-lg text-[#686d77] 3xl:text-2xl flex items-center">
              <span className="bg-[#DF6951] p-5 3xl:p-7 rounded-full mx-3">
                <svg
                  width="20px"
                  height="20px"
                  className="3xl:w-12 3xl:h-12"
                  viewBox="0 0 15 15"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.79062 2.09314C4.63821 1.98427 4.43774 1.96972 4.27121 2.05542C4.10467 2.14112 4 2.31271 4 2.5V12.5C4 12.6873 4.10467 12.8589 4.27121 12.9446C4.43774 13.0303 4.63821 13.0157 4.79062 12.9069L11.7906 7.90687C11.922 7.81301 12 7.66148 12 7.5C12 7.33853 11.922 7.18699 11.7906 7.09314L4.79062 2.09314Z"
                    fill="#ffffff"
                  />
                </svg>
              </span>
              Play Demo
            </button>
          </div>
        </div>
        <div className="relative flex justify-center md:justify-normal h-[250vh] md:h-[150vh] lg:h-[190vh] md:w-[56.5vw]">
          <div
            className="absolute  overflow-hidden h-full w-full 4xl:w-9/12 p-0 m-0 whitespace-nowrap -top-[50rem] md:-top-[17rem] 4xl:-top-[28rem]"
            style={{
              backgroundImage: `url(${pic1.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
              height: "75%",
              zIndex: -1,
            }}
          >
            <div className="">
              <Image
                src={pic2}
                width={100}
                height={100}
                className="w-10/12 3xl:w-11/12 4xl:w-full mt-[120vh] md:mt-[51vh] 4xl:mt-[43vh] 3xl:mt-[40vh] ms-14"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
