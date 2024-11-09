"use client";

import React, { useState } from "react";
import Image from "next/image";

const About = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("Training");

  // Function to handle tab change
  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <section className="">
      <div className="py-10 bg-[#ffcc01]">
        <h2 className="text-5xl px-10 text-gray-900">
          Our Complete Program Structure Gives Class XII Pass Students The
          Confidence To Ace Engineering Entrance Exams.
        </h2>
      </div>

      {/* Tabs Navigation */}
      <div className="tabs mt-8">
        <ul className="flex justify-center space-x-8 border-b border-gray-200 pb-4">
          {["Training", "Tests", "Analysis"].map((tab) => (
            <li
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`cursor-pointer ${
                activeTab === tab
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-gray-700"
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      {/* Tabs Content */}
      <div className="tab-content mt-8 mb-32">
        {/* Training Tab */}
        {activeTab === "Training" && (
          <div className="bg-gray-100 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Excellent Classroom Teaching + Personalized Attention +
              Pattern-Proof Study Material
            </h4>
            <p className="text-gray-600">
              For JEE Advanced and other programs, we ensure small batch sizes
              for better teacher-student interactions. A crash revision program
              of 30 to 48 hours is also included.
            </p>
          </div>
        )}

        {/* Tests Tab */}
        {activeTab === "Tests" && (
          <div className="bg-gray-100 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Chapter Practice Problems + CLIP + myPAT Online Test Series
            </h4>
            <p className="text-gray-600">
              Tests help gauge students&apos; understanding and improve
              confidence for the JEE Main & Advanced exams.
            </p>
            {/* Table */}
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2">Practice Problems</th>
                    <th className="px-4 py-2">CLIP</th>
                    <th className="px-4 py-2">Phase Tests</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">
                      Chapter-wise assignments checked by faculty.
                    </td>
                    <td className="border px-4 py-2">
                      Improves rank and score in JEE.
                    </td>
                    <td className="border px-4 py-2">
                      Periodic tests on the latest JEE pattern.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Analysis Tab */}
        {activeTab === "Analysis" && (
          <div className="bg-gray-100 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Success Potential Index + Rank Improvement Program
            </h4>
            <p className="text-gray-600">
              Timely feedback and analysis sessions are held to enhance
              students&apos; performance and readiness for the final exams.
            </p>
            {/* List of Benefits */}
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Concept tests, full and part tests.</li>
              <li>SWOT analysis for identifying strengths & weaknesses.</li>
              <li>Custom tests with detailed analytics.</li>
              <li>Experience real-life test environments.</li>
              <li>Smart revision plans for better preparation.</li>
            </ul>
          </div>
        )}
      </div>

      <section className="bg-[#c4171b] text-white px-16 mt-10 flex flex-col lg:flex-row items-center justify-around">
        {/* Image */}
        <div className="">
          <Image
            src="/Study Illustration.png.webp"
            alt="Study Illustration"
            width={300}
            height={300}
            className=""
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h2 className="text-3xl font-bold leading-tight mb-4">
            Redefine The Success Mantra For JEE Main And JEE Advanced
          </h2>
          <h3 className="text-3xl font-bold leading-tight">
            Enrol at a pioneering institute for assured success in record time.
          </h3>
        </div>
      </section>
    </section>
  );
};

export default About;
