import Image from "next/image";
import React from "react";

const FIITJEEeSchool = () => {
  return (
    <>
      {/* Existing eSchool Section */}
      <section className="bg-[#ffcc01] py-16">
        <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto px-8 gap-8">
          {/* Text Container */}
          <div className="flex-1">
            <h2 className="text-5xl font-extrabold mb-5">FIITJEE eSchool</h2>
            <div className="description mb-6">
              <p className="text-lg leading-7">
                Class XII Advanced One Year Program is also available in Live
                online mode with classes held in 2-way communication.
              </p>
            </div>
            <a
              href="https://fiitjee-eschool.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition duration-300"
            >
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M9 5.01758L0.75 9.78072L0.75 0.254438L9 5.01758Z"
                  fill="#fff"
                />
              </svg>
              FIITJEE eSchool
            </a>
          </div>

          {/* Image Container */}
          <div className="flex-1">
            <Image
              src="/online-learning-using-tablet 1_1.png.webp"
              alt="Online Learning"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* New Section Below the Existing One */}
      <section className="bg-[#ffcc01] py-16 my-40">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center flex-col p-8">
            <h2 className="text-5xl font-bold mb-8">
              Advanced One Year Program
            </h2>
            <div className="description mb-4">
              <p className="text-3xl text-center">
                Get a good head start with the right study materials and tools
                to stay organized, focused, and on track.
              </p>
            </div>
            <a
              href="/fiitjee-admission-test-details"
              className="inline-flex mt-5 items-center px-7 py-5 bg-red-700 text-white font-semibold rounded-full hover:bg-red-800 transition duration-300"
            >
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M9 5.01758L0.75 9.78072L0.75 0.254438L9 5.01758Z"
                  fill="#fff"
                />
              </svg>
              Register for Admission Test
            </a>
          </div>
        </div>
      </section>

      <div className="w-1 h-1"></div>
    </>
  );
};

export default FIITJEEeSchool;
