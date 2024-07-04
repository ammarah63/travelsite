const Subscribe = () => {
  return (
    <>
      <div className="relative h-5/6 p-10 px-5 md:px-10 lg:px-28 3xl:mt-20">
        <div
          className="bg-[#f6f3fd] rounded-3xl p-5 md:p-10 relative"
          style={{
            position: "relative",
            borderRadius: "4rem 1.25rem 1.25rem",
            backgroundColor: "#f6f3fd",
            backgroundImage:
              "url(assets/subscribe1.svg), url(assets/subscribe2.svg)",
            backgroundPosition: "111% -83%, 3% -86%",
            backgroundSize: "auto, auto",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
        >
          <p className="text-center text-[#5e6282] text-sm md:text-2xl 3xl:text-4xl 4xl:text-5xl tracking-wider font-[600]">
            Subscribe to get information, <br />
            latest news and other interesting <br />
            offers about Cobham
          </p>
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-center mt-16 mb-8">
            <div className="flex bg-white  rounded-xl w-full md:w-3/6 px-5">
              {" "}
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                className="my-3 h-5 w-5 md:h-7 md:w-7 3xl:w-10 3xl:h-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="style=stroke">
                  <g id="email">
                    <path
                      id="vector (Stroke)"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.88534 5.2371C3.20538 5.86848 2.75 6.89295 2.75 8.5V15.5C2.75 17.107 3.20538 18.1315 3.88534 18.7629C4.57535 19.4036 5.61497 19.75 7 19.75H17C18.385 19.75 19.4246 19.4036 20.1147 18.7629C20.7946 18.1315 21.25 17.107 21.25 15.5V8.5C21.25 6.89295 20.7946 5.86848 20.1147 5.2371C19.4246 4.59637 18.385 4.25 17 4.25H7C5.61497 4.25 4.57535 4.59637 3.88534 5.2371ZM2.86466 4.1379C3.92465 3.15363 5.38503 2.75 7 2.75H17C18.615 2.75 20.0754 3.15363 21.1353 4.1379C22.2054 5.13152 22.75 6.60705 22.75 8.5V15.5C22.75 17.393 22.2054 18.8685 21.1353 19.8621C20.0754 20.8464 18.615 21.25 17 21.25H7C5.38503 21.25 3.92465 20.8464 2.86466 19.8621C1.79462 18.8685 1.25 17.393 1.25 15.5V8.5C1.25 6.60705 1.79462 5.13152 2.86466 4.1379Z"
                      fill="#000000"
                    />
                    <path
                      id="vector (Stroke)_2"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.3633 7.31026C19.6166 7.63802 19.5562 8.10904 19.2285 8.3623L13.6814 12.6486C12.691 13.4138 11.3089 13.4138 10.3185 12.6486L4.77144 8.3623C4.44367 8.10904 4.38328 7.63802 4.63655 7.31026C4.88982 6.98249 5.36083 6.9221 5.6886 7.17537L11.2356 11.4616C11.6858 11.8095 12.3141 11.8095 12.7642 11.4616L18.3113 7.17537C18.6391 6.9221 19.1101 6.98249 19.3633 7.31026Z"
                      fill="#000000"
                    />
                  </g>
                </g>
              </svg>{" "}
              <input className="rounded-xl w-11/12 focus:border-none focus:outline-none px-2" />
            </div>{" "}
            <br />
            <button className="w-full md:w-32 3xl:w-36 p-2 md:p-3 text-sm md:text-lg 3xl:text-2xl rounded-xl md:mx-3 text-white bg-gradient-to-t from-[#ff946d] to-[#ff7d68]">
              Subscribe
            </button>
          </div>
        </div>
        <div className="absolute top-5 right-6 lg:top-5 lg:right-24">
          <button className="bg-gradient-to-br from-[#747DEF] to-[#5E3BE1] rounded-full p-1">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              stroke="#706FEC"
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
      </div>
    </>
  );
};

export default Subscribe;
