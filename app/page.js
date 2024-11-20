import About from "@/components/About";
import BelowMain from "@/components/BelowMain";
import BreadCrumbs from "@/components/BreadCrumbs";
import FIITJEEeSchool from "@/components/FIITJEE";
import Hero from "@/components/Hero";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="container h-screen overflow-x-hidden pl-10 pr-8 md:px-36 md:py-16 bg-[rgb(239,242,245)]">
      <BreadCrumbs />
      <Hero />
      <About />
      <Main />
      <BelowMain />
      <FIITJEEeSchool />
    </div>
  );
}
