import About from "@/components/About";
import BelowMain from "@/components/BelowMain";
import BreadCrumbs from "@/components/BreadCrumbs";
import Hero from "@/components/Hero";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="container h-screen px-36 py-16 bg-[rgb(239,242,245)]">
      <BreadCrumbs />
      <Hero />
      <About />
      <Main />
      <BelowMain />
    </div>
  );
}
