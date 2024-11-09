"use client";

import React, { useState } from "react";
import Image from "next/image";

const InfoCard = ({ title, children }) => (
  <div className="pt-6 px-16 rounded-lg">
    <h4 className="text-xl font-semibold text-gray-800 mb-4">{title}</h4>
    <div className="w-[1050px] relative right-4 mb-4 border border-gray-700/70" />
    <p className="text-gray-600 text-xl">{children}</p>
    <div className="w-[1050px] relative right-4 mt-4 border border-gray-700/70" />
  </div>
);

const About = () => {
  const [activeTab, setActiveTab] = useState("Training");
  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <section>
      <div className="pt-8 pb-28 bg-[#ffcc01]">
        <h2 className="text-4xl font-semibold px-12 py-8 text-gray-900">
          Our Complete Program Structure Gives Class XII Pass Students The
          Confidence To Aspire And Ace Engineering Entrance And Other
          Competitive And Scholastic Exams.
        </h2>
      </div>

      <div className="relative flex flex-col max-w-[1150px] bottom-24 left-10 rounded-tl-3xl rounded-br-3xl max-h-[500px] shadow-lg bg-white">
        {/* Tabs Navigation */}
        <div className="mt-8 px-12 pt-5">
          <ul className="flex space-x-8 pb-4">
            {["Training", "Tests", "Analysis"].map((tab) => (
              <li
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`cursor-pointer text-xl font-semibold py-4 px-6 rounded-xl bg-neutral-200 ${
                  activeTab === tab ? "text-gray-800" : "text-gray-600"
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
            <InfoCard title="Excellent Classroom Teaching + Personalized Attention + Pattern-Proof Study Material">
              For JEE Advanced and all other programs, we ensure small batch
              sizes for more teacher-Student interactions and better learning.
              Our students consistently excel in exams, making us truly proud of
              all the FIITJEE results, year after year. In our training, we also
              include a crash revision program of 30 to 48 hours.
            </InfoCard>
          )}

          {/* Tests Tab */}
          {activeTab === "Tests" && (
            <div className="pt-6 px-16 bg-white rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Chapter Practice Problems (CPP) + Classroom Learning Improvement
                Program (CLIP) + myPAT Online Test Series (Accessible 24/7) +
                Grand Masters Package (GMP)
              </h4>
              <p className="text-gray-600">
                Tests are essential in Students’ JEE preparation after Class
                XII. It helps our faculty members gauge Students’ level of
                understanding about the topics and concepts and promotes
                confidence and better examination temperament.
              </p>
              {/* Table */}
              <div className="overflow-x-auto mt-6">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-4 py-2">
                        Chapter Practice Problems (CPP)
                      </th>
                      <th className="px-4 py-2">
                        Class Learning Improvement Program (CLIP)
                      </th>
                      <th className="px-4 py-2">Common Phase Tests</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">
                        Students are given chapter-wise and concept-wise
                        practice problems, to submit before the beginning of the
                        next chapter. These are checked by faculty members and
                        returned to the Students with remarks to help them gain
                        a strong command over conceptual knowledge.
                      </td>
                      <td className="border px-4 py-2">
                        For those who complete all the assignments, the Class
                        Learning Improvement Program helps them get a higher
                        rank and better score in JEE or any other engineering
                        entrance exam. 
                      </td>
                      <td className="border px-4 py-2">
                        It has exhaustive quizzes in every phase. Test analysis
                        sessions after the phase tests, help gauge performance.
                        We also conduct periodic tests on the latest JEE pattern
                        to acclimatise Students before the final exam.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Analysis Tab */}
          {activeTab === "Analysis" && (
            <div className="pt-6 px-16 rounded-lg bg-white">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Success Potential Index (SPI) + Rank Improvement Program (RIP) +
                Feedback Sessions
              </h4>
              <p className="text-gray-600 mb-6">
                When Students enrol for JEE Programs after Class XII, time is of
                the essence. At FIITJEE, we offer concrete feedback and analysis
                sessions for parents and Students at every stage. All our
                teachers regularly analyse Students’ skills, concept
                understanding and rank determination to support them in their
                journey to improve scores.
              </p>
              {/* List of Benefits */}
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2">Success Potential Index (SPI)</th>
                    <th className="px-4 py-2">
                      Rank Improvement Program (RIP)
                    </th>
                    <th className="px-4 py-2">Regular feedback</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">
                      We are the only institute in India capable of predicting a
                      Student’s SPI and constantly encouraging them to emulate
                      it.
                    </td>
                    <td className="border px-4 py-2">
                      This program is followed by special classes to help
                      Students improve their rank in JEE Main and JEE Advanced.
                    </td>
                    <td className="border px-4 py-2">
                      Our faculty members and academic operations team provide
                      timely constructive feedback apart from the scheduled
                      parent-teacher meetings.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
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
