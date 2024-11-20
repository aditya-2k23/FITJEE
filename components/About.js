import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ rank, name, program, image }) => {
  return (
    <div
      className="bg-cover bg-center rounded-2xl"
      style={{ backgroundImage: "/BG_2.jpeg.webp" }}
    >
      <div className="text-center relative top-28 py-2 rounded-tl-2xl text-white font-semibold bg-[#c4171b]">
        JEE Advanced 2023
      </div>
      <div className="relative top-28">
        <div className="text-xl z-5 bg-[#ffcc00] md:w-[17.756rem] pl-4 pt-5 mb-3 font-semibold w-full">
          All India Rank
        </div>
        <div className="text-8xl ml-2 z-5 font-bold text-[#c4171b]">{rank}</div>
      </div>
      <div className="flex bg-[#ffcc00] rounded-br-2xl justify-end pt-5 mb-6">
        <Image src={image} alt={name} width={195} height={195} />
      </div>
      <div className="text-xl font-semibold">{name}</div>
      <div className="">{program}</div>
    </div>
  );
};

const GridItem = ({ src, alt, title, children, className }) => (
  <div className={`p-8 rounded-lg shadow-lg bg-slate-100/90 ${className}`}>
    <Image src={src} alt={alt} width={64} height={64} className="mb-4" />
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="leading-2 font-light">{children}</p>
  </div>
);

const About = () => {
  return (
    <div className="about-container grid max-w-[124rem] mx-auto gap-8 pb-10">
      <h1 className="text-5xl font-bold mb-6">About The Program</h1>
      <div className="text-xl leading-loose space-y-4">
        <p>The program is for:</p>
        <ul className="list-disc list-inside">
          <li>
            Students who couldn&apos;t prepare well for JEE Main and JEE
            Advanced as per their potential
          </li>
          <li>
            Students who are competing in JEE as their last chance and are
            willing to put in sincere efforts till their goal is achieved
          </li>
          <li>
            Students ready to do a lot of regular self-study and those who
            won&apos;t miss a single class to adjust to the speed of the program
          </li>
        </ul>
        <p>
          In this program, our faculty members and gurus help Students master
          their concepts of physics, chemistry, and mathematics. We help them to
          sharpen their analytical skills, evolve their thinking process, and
          plug the loopholes to build the right examination temperament. As a
          result, Students can creatively solve complex and tricky problems by
          applying basic concepts for a quantum jump in their JEE Main and JEE
          Advanced rank.
        </p>
        <p>
          Along with learning time management strategies, our Students learn how
          to ensure the optimum output with exemplary efforts. It enables them
          to excel in JEE Main, JEE Advanced, and all other engineering entrance
          exams.
        </p>
        <p>
          FIITJEE ensures significant improvement in just one year of
          preparation by raising IQ, i.e., sharpen analytical skills and mental
          ability and evolve their thinking process, which will help them get
          into an IIT / NIT with the desired Rank. Students may be able to
          improve their JEE Main and JEE Advanced rank from below 5000 to the
          top 100. That&apos;s not all; this rigorous preparation will help them
          excel in XII Boards. Even if they are not eyeing a bachelor&apos;s
          degree in engineering, this program will build sound fundamentals and
          brace them for higher studies.
        </p>
      </div>

      <section className="py-12 mt-20">
        <div className="flex flex-col md:flex-row  md:justify-between">
          <h2 className="text-2xl uppercase block font-semibold mb-4">
            Our Masterminds{" "}
            <span className="mt-4 text-5xl font-extrabold block">
              Beat the Competition
            </span>
          </h2>
          <Link
            href="/fiitjee-results"
            className="inline-flex items-center bg-[#c4171b] text-white px-[2.4rem] py-7 h-10 rounded-[3.2rem] hover:bg-red-800 transition duration-300 font-semibold"
          >
            <svg
              width="9"
              height="10"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M9 5.01758L0.75 9.78072L0.75 0.254438L9 5.01758Z"
                fill="#fff"
              ></path>
            </svg>
            View our results
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <Card
            rank={16}
            name="Harshit Kansal"
            program="Two Year Classroom Program (XI – XII)"
            image="/harshitkansal.png.webp"
          />

          {/* Card 2 */}
          <Card
            rank={62}
            name="Harsh Suthar"
            program="Two Year Classroom Program (XI – XII)"
            image="/Harsh_Suthar_ICP_.png.webp"
          />

          {/* Card 3 */}
          <Card
            rank={77}
            name="Samarth B. Patel"
            program="Two Year Classroom Program (XI – XII)"
            image="/Samarth_Bhagyesh_.png.webp"
          />

          {/* Card 4 */}
          <Card
            rank={94}
            name="Ayush Kumar Singh"
            program="Two Year Classroom Program (XI – XII)"
            image="/AYUSH_KUMAR_.png.webp"
          />
        </div>
      </section>

      <section className="my-40">
        <h2 className="text-5xl font-bold mb-10">Why Choose This Program?</h2>
        <p className="text-2xl">
          This JEE Program after Class XII ensures extensive coverage of
          additional topics for JEE Main across classes. Our Students find a
          powerful system that helps systematically unveil their full potential.
          We train them to be ready to scale JEE successfully, irrespective of
          the exam pattern.
        </p>

        <div className="flex flex-wrap justify-center gap-16">
          <div className="flex flex-col md:flex-row gap-16 md:justify-between">
            <GridItem
              src="/books.svg"
              alt="Ready For All Entrance Exams"
              title="Ready For All Entrance Exams"
              className="flex-1"
            >
              Our gurus and faculty members prepare students to excel in all
              entrance exams, not just engineering, during the program
              curriculum.
            </GridItem>

            <GridItem
              src="/Frame 1171278298.svg"
              alt="Exhaustive Practice"
              title="Exhaustive Practice"
              className="flex-1"
            >
              With lots of quizzes and phase tests on JEE Main and JEE Advanced
              patterns, we prepare our students for excellence.
            </GridItem>

            <GridItem
              src="/feedback.svg"
              alt="Strategic Learning"
              title="Strategic Learning"
              className="flex-1"
            >
              We teach students the value of time management to help them
              maximize learning during this One Year Program.
            </GridItem>
          </div>

          <GridItem
            src="/class 1.svg"
            alt="The Right Mix Of Classes"
            title="The Right Mix Of Classes"
            className="flex-1 w-[23rem]"
          >
            We have curated the perfect mix of classes, doubt-clearing sessions,
            and problem-solving classes to help our students achieve top scores.
          </GridItem>
        </div>
      </section>
    </div>
  );
};

export default About;
