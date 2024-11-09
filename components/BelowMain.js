"use client";

import Image from "next/image";
import React, { useState } from "react";

const BelowMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [setTitle, setSetTitle] = useState("Class VI");

  const toggleDropdown = () => {
    setSetTitle("Class VI");
    setIsOpen(!isOpen);
  };

  const options = [
    "Class VI",
    "Class VII",
    "Class VIII",
    "Class IX",
    "Class X",
    "Class XI",
    "Class XII",
    "Class XII Pass",
  ];

  return (
    <>
      {/* First Section */}
      <section className="my-20">
        <article>
          <div className="bg-gray-100 p-8 rounded-tl-3xl rounded-br-3xl shadow-md">
            <div className="text-container">
              <h6 className="text-xl mb-4">Duration</h6>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                296 classroom contact hours with a total input of 340 hours,
                including doubt-clearing classes, RIP, tests, phase tests,
                all-India test series, test analysis sessions, and more. Classes
                are held 4-5 days a week for 4-6 hours. We offer morning and
                evening classes.
              </p>
              <p className="text-gray-600 text-lg italic">
                <strong>Note:</strong> The schedule of classes may vary from one
                study centre to another. Kindly contact the nearest FIITJEE
                centre for more details.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* Second Section */}
      <section className="mt-16">
        <article>
          <div>
            <div className="bg-red-700 px-10 text-center py-24 rounded-tl-3xl rounded-br-3xl">
              <h2 className="text-white text-4xl">
                Opt For A FIITJEE Program That Elevates Students&apos; Academic
                Calibre For JEE Main And JEE Advanced 2024.
              </h2>
            </div>
          </div>
        </article>
      </section>

      {/* Third Section */}
      <section className="my-40">
        <article className="flex justify-between max-w-6xl mx-auto">
          <div className="flex">
            <div className="max-w-[20rem]">
              <div className="mb-8">
                <h2 className="text-xl font-extralight mb-8">
                  For Students from Class VI to Class XII Pass
                </h2>
                <h2 className="text-5xl font-bold">PROGRAMS FOR EVERY STAGE</h2>
              </div>
              <div>
                <label className="block mb-4 text-lg font-medium">
                  Select Class
                </label>
                {/* Dropdown Component */}
                <div className="relative inline-block w-64">
                  <div
                    className="dropdown-header border border-gray-600 text-gray-800 p-5 rounded-full flex items-center justify-between cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <span>{setTitle}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      className={`arrow ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M6.00156 9.57015C6.00363 9.42451 6.06251 9.28487 6.16665 9.17865C6.27553 9.07546 6.42256 9.01758 6.57579 9.01758C6.72903 9.01758 6.87606 9.07546 6.98493 9.17865L12.3181 14.2889L17.6513 9.17865C17.7629 9.09102 17.9045 9.04625 18.0487 9.05302C18.1928 9.0598 18.3292 9.11764 18.4313 9.2153C18.5333 9.31297 18.5938 9.44346 18.6009 9.58141C18.6079 9.71936 18.5611 9.8549 18.4696 9.96166L12.7273 15.4565C12.6184 15.5597 12.4713 15.6176 12.3181 15.6176C12.1649 15.6176 12.0178 15.5597 11.909 15.4565L6.16665 9.96166C6.06251 9.85543 6.00363 9.71579 6.00156 9.57015Z"
                        fill="#1f2937"
                      />
                    </svg>
                  </div>
                  {isOpen && (
                    <div className="dropdown-menu absolute bg-white shadow-lg rounded-lg mt-2 w-full">
                      {options.map((option, index) => (
                        <div
                          key={index}
                          className="p-3 hover:bg-gray-200 cursor-pointer"
                          onClick={() => toggleDropdown()}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Program Details Slider */}
            <div className="ml-32 mt-8">
              <div className="space-x-8">
                <div className="p-6">
                  <div className="mb-4">
                    <Image
                      src="/girl-holding-notebook_0.jpg.webp"
                      alt="Program Illustration"
                      className="rounded-tl-3xl rounded-br-3xl"
                      width={500}
                      height={200}
                    />
                  </div>
                  <div className="">
                    <span className="text-lg font-bold mr-2 text-red-700">
                      Classroom Program -
                    </span>
                    <span className="text-gray-600">
                      LITTLE GENIE One Year Foundation Program
                    </span>
                    <br />

                    <a
                      className="mt-4 inline-flex items-center px-[30px] py-[15px] bg-red-700 text-white rounded-3xl"
                      href="/programs/classroom/little-genie-foundation-program/class-6"
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
                          id="Icon"
                          d="M9 5.01758L0.75 9.78072L0.75 0.254438L9 5.01758Z"
                          fill="#ffffff"
                        />
                      </svg>
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default BelowMain;
