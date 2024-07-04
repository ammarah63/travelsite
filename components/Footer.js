import Image from "next/image";
import Jadoo from "../public/assets/Jadoo.svg";
import Google from "../public/assets/googleplay.svg";
import Apple from "../public/assets/apple.svg";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 px-28 gap-4 py-12 3xl:py-24 pt-16 3xl:pt-32">
        <div>
          <p className="lg:text-[3.1rem] text-3xl md:text-6xl text-center lg:text-left font-[500] 3xl:text-7xl 4xl:text-8xl -mt-4 3xl:mt-0">
            Jadoo.
          </p>
          <p className="text-xs md:text-lg lg:text-xs text-center lg:text-left 3xl:text-lg 4xl:text-xl my-3 md:my-5 3xl:my-6">
            Book your trip in minute, get full
            <br className="hidden lg:block" /> control for much longer.
          </p>
        </div>
        <div className="text-base text-center lg:text-left 3xl:text-xl 4xl:text-2xl space-y-3 ml-auto mr-auto">
          <p className="font-black text-lg 3xl:text-2xl 4xl:text-3xl mb-8">
            Company
          </p>
          <p>About</p>
          <p>Careers</p>
          <p>Mobile</p>
        </div>
        <div className="text-base text-center lg:text-left 3xl:text-xl 4xl:text-2xl space-y-3 ml-auto mr-auto">
          <p className="font-black text-lg 3xl:text-2xl 4xl:text-3xl mb-8">
            Contact
          </p>
          <p>Help / FAQ</p>
          <p>Press</p>
          <p>Affiliates</p>
        </div>
        <div className="text-base text-center lg:text-left 3xl:text-xl 4xl:text-2xl space-y-3 ml-auto mr-auto">
          <p className="font-black text-lg 3xl:text-2xl 4xl:text-3xl mb-8">
            More
          </p>
          <p>Airline fees</p>
          <p>Airline</p>
          <p>Low fair tips</p>
        </div>
        <div className="flex-col justify-center text-center space-y-5">
          <div className="flex space-x-10 justify-center my-3">
            <button className="btn shadow-customTestimonial rounded-full p-3">
              <svg
                fill="#000000"
                width="20px"
                height="20px"
                className="3xl:w-10 3xl:h-10"
                viewBox="-7 -2 24 24"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin"
                // class="jam jam-facebook "
              >
                <path d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z" />
              </svg>
            </button>
            <button className="btn shadow-customTestimonial  rounded-full p-3">
              <svg
                fill="#000000"
                width="20px"
                height="20px"
                className="3xl:w-10 3xl:h-10"
                viewBox="-2 -2 24 24"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin"
                class="jam jam-instagram"
              >
                <path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z" />
                <path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z" />
                <circle cx="15.156" cy="4.858" r="1.237" />
              </svg>
            </button>
            <button className="btn shadow-customTestimonial rounded-full p-3">
              <svg
                fill="#000000"
                width="20px"
                height="20px"
                className="3xl:w-10 3xl:h-10"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 3.784a5.63 5.63 0 0 1-.65.803 6.058 6.058 0 0 1-.786.68 5.442 5.442 0 0 1 .014.377c0 .574-.061 1.141-.184 1.702a8.467 8.467 0 0 1-.534 1.627 8.444 8.444 0 0 1-1.264 2.04 7.768 7.768 0 0 1-1.72 1.521 7.835 7.835 0 0 1-2.095.95 8.524 8.524 0 0 1-2.379.329 8.178 8.178 0 0 1-2.293-.325A7.921 7.921 0 0 1 1 12.52a5.762 5.762 0 0 0 4.252-1.19 2.842 2.842 0 0 1-2.273-1.19 2.878 2.878 0 0 1-.407-.8c.091.014.181.026.27.035a2.797 2.797 0 0 0 1.022-.089 2.808 2.808 0 0 1-.926-.362 2.942 2.942 0 0 1-.728-.633 2.839 2.839 0 0 1-.65-1.822v-.033c.402.227.837.348 1.306.362a2.943 2.943 0 0 1-.936-1.04 2.955 2.955 0 0 1-.253-.649 2.945 2.945 0 0 1 .007-1.453c.063-.243.161-.474.294-.693.364.451.77.856 1.216 1.213a8.215 8.215 0 0 0 3.008 1.525 7.965 7.965 0 0 0 1.695.263 2.15 2.15 0 0 1-.058-.325 3.265 3.265 0 0 1-.017-.331c0-.397.075-.77.226-1.118a2.892 2.892 0 0 1 1.528-1.528 2.79 2.79 0 0 1 1.117-.225 2.846 2.846 0 0 1 2.099.909 5.7 5.7 0 0 0 1.818-.698 2.815 2.815 0 0 1-1.258 1.586A5.704 5.704 0 0 0 15 3.785z" />
              </svg>
            </button>
          </div>
          <p className=" md:text-lg 3xl:text-lg 4xl:text-xl">
            Discover our app
          </p>
          <div className="flex py-4 space-x-2 justify-center items-center">
            <button className="btn justify-center lg:w-7/12 xl:w-8/12  p-3 h-10 bg-black text-[0.6rem] items-center flex text-white rounded-3xl ">
              <Image src={Google} className="mx-1 2xl:mx-2" />{" "}
              <p>
                <span className="font-bold text-left">GET IT ON</span>
                <br />
                <span className="font-thin text-left whitespace-nowrap">
                  {" "}
                  GOOGLE PLAY
                </span>
              </p>
            </button>
            <button className="btn justify-center lg:w-7/12 xl:w-8/12 p-3 h-10 flex bg-black text-[0.6rem] items-center text-white rounded-3xl ">
              <Image src={Apple} className="mx-1 2xl:mx-2" />
              <p>
                <span className="text-[0.4rem] text-left">
                  {" "}
                  Available on the
                </span>{" "}
                <br />
                <span className="font-bold text-left whitespace-nowrap">
                  Apple Store
                </span>
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="text-center md:text-lg  3xl:text-lg 4xl:text-xl text-base p-8 pb-20">
        <p>All rights reserved@jadoo.co</p>
      </div>
    </>
  );
};

export default Footer;
