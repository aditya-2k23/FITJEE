import Link from "next/link";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full mb-40">
        <div className="text-center md:text-left mb-6 md:mb-0 max-w-xl mr-20">
          <h4 className="text-3xl font-Avenir font-semibold mb-4">
            Class XII Pass
          </h4>
          <h1 className="text-6xl font-Avenir font-bold mb-4 leading-[4.7rem]">
            One Year Classroom Program
          </h1>
          <p className="text-gray-700 text-lg">
            An Academic Opportunity to Conquer Your JEE Dream within the Right
            Time-frame.
          </p>
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <Link
              href="/fiitjee-admission-test-details"
              className="px-6 py-4 bg-red-600 font-Open_sans text-white/90 rounded-full hover:bg-red-700 transition duration-300 font-semibold flex items-center"
            >
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  id="Icon"
                  d="M9 5.01758L0.75 9.78072L0.75 0.254438L9 5.01758Z"
                  fill="#fff"
                ></path>
              </svg>
              Register for Admission Test
            </Link>
            <Link
              className="px-6 py-4 border font-Open_sans border-red-600 text-red-600 rounded-full hover:bg-red-100 transition duration-300 flex items-center font-semibold"
              href="/fiitjee-resources-download"
            >
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  id="Icon"
                  d="M9 5.01758L0.75 9.78072L0.75 0.254438L9 5.01758Z"
                  fill="#DC2626"
                ></path>
              </svg>
              Get Sample Paper
            </Link>
          </div>
        </div>
        <div className="relative p-10">
          <Image
            src="/advance-one-year-class-12th_1.png.webp"
            alt="advance-one-year-class-12th"
            width={600}
            height={600}
          />
          <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="60" height="60" rx="30" fill="white"></rect>
              <path
                d="M39 30L25.5 38.2272L25.5 21.7728L39 30Z"
                fill="#C4171B"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 bg-black p-16 rounded-tl-none rounded-tr-[5rem] rounded-bl-none max-w-6xl mb-28 mt-5 w-full">
        <p className="text-xl leading-relaxed text-white">
          An Advanced One Year Program for JEE Main & JEE Advanced focuses on
          delivering the essential impetus for Students to achieve a Top Rank.
          With FIITJEE&apos;s One Year Program for JEE Advanced, Students can
          develop a sound examination temperament and secure a high score in all
          the competitive entrance exams. FIITJEE Programs have supported
          thousands of Students in their quest to study at the IITs. Empowered
          by our value-based education system, our team nurtures young minds to
          inculcate the habit of winning.
          <br />
          <br />
          For Students aspiring to appear in JEE Main and JEE Advanced 2024,
          this is the last chance to prepare well and choose the right path
          after Class XII. Our highly ethical, transparent, and sincere
          institute encourages Students to spend more time in self-study and
          gain maximum results from the course by attending every class.
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-60 mb-40 p-8 gap-24">
        <div className="flex-shrink-0 p-6 relative top-12 left-32 z-10">
          <Image
            src="/A-red-check-mark.png.webp"
            alt="A-red-check-mark"
            width={490}
            height={600}
            className="object-cover rounded-bl-[2rem]"
          />
        </div>
        <div className="mt-6 md:mt-0 rounded-lg shadow-lg py-10 px-10 w-full relative bottom-40 right-5">
          <p className="text-4xl">
            Grab the last chance to secure a top rank in JEE.
            <br />
            <br />
            Experience the difference with FIITJEE.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
