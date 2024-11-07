import Link from "next/link";
import React from "react";

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-2"
  >
    <g id="next 1">
      <path
        id="Vector"
        d="M11.8575 7.68201L4.92399 1.14901C4.72299 0.960509 4.38599 0.949509 4.16999 1.12451C3.95449 1.30001 3.94199 1.59501 4.14249 1.78401L10.739 8.00001L4.14249 14.216C3.94249 14.405 3.95499 14.7005 4.17049 14.8755C4.27299 14.9585 4.40349 15 4.53299 15C4.67599 15 4.81849 14.95 4.92399 14.851L11.8575 8.31801C12.0475 8.13851 12.0475 7.86151 11.8575 7.68201Z"
        fill="#333333"
      ></path>
    </g>
  </svg>
);

const BreadCrumbs = () => {
  return (
    <div className="container">
      <div className="flex items-center flex-row">
        <Link className="text-base" href="/">
          Home
        </Link>
        <ArrowIcon />
        <Link href="/programs/classroom-programs">Classroom Programs</Link>
        <ArrowIcon />
        <p className="text-primary">
          Class XII Pass - One Year Classroom Program
        </p>
      </div>
    </div>
  );
};

export default BreadCrumbs;
