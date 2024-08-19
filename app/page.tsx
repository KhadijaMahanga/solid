import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <>
      <Hero />
      <Header />
      <Contact />
      <Services />
      <Newsletter />
    </>
  )
}
