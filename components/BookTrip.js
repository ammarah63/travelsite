import Image from "next/image";
import pic1 from "../public/assets/book1.svg";
import pic2 from "../public/assets/book2.svg";
import pic3 from "../public/assets/book3.svg";
import pic4 from "../public/assets/Rectangle 17.svg";
import icon from "../public/assets/icon.svg";
import dp from "../public/assets/Mask Group.svg";

const BookTrip = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-4 px-10 2xl:px-28 mt-52 3xl:mt-32 4xl:mt-32 ">
        <div>
          <p className="text-xl text-[#5e6282] font-bold 3xl:text-3xl 4xl:text-4xl">
            Easy and Fast
          </p>
          <p className="font-bold text-3xl md:text-5xl 3xl:text-7xl 4xl:text-8xl my-3 3xl:my-6 heading">
            Book your Next Trip
            <br className="hidden md:block" /> in 3 Easy steps
          </p>
          <div className="flex items-center md:pe-28 my-5 3xl:my-10">
            <Image
              src={pic3}
              width={60}
              height={60}
              className="me-6 3xl:h-16 3xl:w-16 4xl:w-20 4xl:h-20"
            />
            <p className="text-base mt-4 3xl:mt-8 3xl:text-2xl 4xl:text-3xl">
              <span className="font-bold">Choose Destination</span>
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Urna, tortor tempus.
            </p>
          </div>
          <div className="flex md:pe-40 items-center my-5">
            <Image
              src={pic1}
              width={60}
              height={60}
              className="me-6  3xl:h-16 3xl:w-16 4xl:w-20 4xl:h-20"
            />
            <p className="text-base mt-4 3xl:text-2xl 4xl:text-3xl">
              <span className="font-bold">Make Payment</span>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.
            </p>
          </div>
          <div className="flex md:pe-40 items-center my-5">
            <Image
              src={pic2}
              width={60}
              height={60}
              className="me-6  3xl:h-16 3xl:w-16 4xl:w-20 4xl:h-20"
            />
            <p className="text-base mt-4 3xl:text-2xl 4xl:text-3xl">
              <span className="font-bold">Reach Airpot on Selected Date</span>
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Urna, tortor tempus.
            </p>
          </div>
        </div>
        <div className="md:ml-auto relative md:pe-32 mt-24">
          <div className="bg-white shadow-customBook w-[20rem] md:w-full 3xl:w-[24vw] rounded-3xl h-11/12 p-5">
            <Image src={pic4} className="3xl:w-full" />
            <div className="my-3 space-y-2 mt-5 mx-2">
              <p className="text-black text-lg 3xl:text-2xl 4xl:text-3xl font-semibold">
                Trip to Greece
              </p>
              <p className="text-[#84829A] text-base 3xl:text-xl 4xl:text-2xl">
                14-29 June| by Robbin joseph
              </p>
              <div className="space-x-3 flex py-3">
                <button className="rounded-full bg-[#F5F5F5] p-3 text-[#84829A]">
                  <p className="text-[#84829A]">
                    <svg
                      width="20px"
                      height="20px"
                      className="3xl:w-6 3xl:h-6"
                      fill="#84829A"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="bg-[#84829A]"
                        d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
                      />
                      <rect
                        width="24"
                        height="24"
                        fill="none"
                        className="bg-[#84829A]"
                      />
                    </svg>
                  </p>
                </button>
                <button className="rounded-full bg-[#F5F5F5] p-3">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    className="3xl:w-6 3xl:h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#84829A"
                    stroke="#000000"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="miter"
                  >
                    <polygon points="22 19 16 22 8 19 2 22 2 5 8 2 16 5 22 2 22 19"></polygon>
                    <line
                      x1="8"
                      y1="2"
                      x2="8"
                      y2="19"
                      stroke-linecap="round"
                    ></line>
                    <line
                      x1="16"
                      y1="5"
                      x2="16"
                      y2="22"
                      stroke-linecap="round"
                    ></line>
                  </svg>
                </button>
                <button className="rounded-full bg-[#F5F5F5] p-3">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    className="3xl:w-6 3xl:h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#84829A"
                    stroke="#000000"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="miter"
                    transform="rotate(-45, 0, -5)"
                  >
                    <polygon points="3 3 20 12 3 21 6 12 3 3"></polygon>
                    <line x1="10" y1="12" x2="6" y2="12"></line>
                  </svg>
                </button>
              </div>
              <div className="flex justify-between">
                <p className="text-[#84829A] text-base 3xl:text-xl 4xl:text-2xl flex items-center">
                  <Image src={icon} className="3xl:w-8 3xl:h-8" />
                  24 people going
                </p>
                <button>
                  <svg
                    width="30px"
                    height="30px"
                    className="3xl:w-8 3xl:h-8"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="#000000"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="miter"
                  >
                    <path d="M20.66,12.34,12,21,3.34,12.34a4.59,4.59,0,0,1,0-6.49l.09-.08a4.59,4.59,0,0,1,5.73-.62l3.05,2,2.59-1.8a4.61,4.61,0,0,1,5.86.53h0A4.59,4.59,0,0,1,20.66,12.34Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/3 transform -translate-x-[3rem] md:-translate-x-1/7 translate-y-full md:-translate-y-1/4 3xl:-translate-y-2/4 bg-white grid grid-cols-3 shadow-customBook md:w-2/3 w-11/12 rounded-3xl h-36 3xl:h-52 p-5">
            <div>
              <Image src={dp} className="3xl:w-16 3xl:h-16" />
            </div>
            <div className="col-span-2">
              <p className="text-[#84829A] font-bold mb-1 3xl:text-xl 4xl:text-2xl">
                Ongoing
              </p>
              <p className="text-black font-semibold 3xl:text-xl 4xl:text-2xl">
                Trip to Rome
              </p>
              <p className="text-black font-semibold mt-3 3xl:text-xl 4xl:text-2xl">
                <span className="text-[#8A79DF] ">40%</span> completed
              </p>

              <div class="w-full h-1 3xl:h-2 bg-[#F5F5F5] rounded-md overflow-hidde my-2">
                <div class="h-full bg-[#8A79DF]" style={{ width: "40%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookTrip;
