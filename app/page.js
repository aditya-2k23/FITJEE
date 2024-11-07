import About from "@/components/About";
import BreadCrumbs from "@/components/BreadCrumbs";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="container h-screen px-32 py-16 bg-[rgb(239,242,245)]">
      <BreadCrumbs />
      <Hero />
      <About />
    </div>
  );
}
