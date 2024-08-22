import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Home | Kike Africa",
  description: "A media and technology company dealing with consultancy, capacity building, skills development, and sharing women stories across Tanzania."
};

export default function Page() {
  return (
    <>
      <Hero />
      <Header />
      <Contact />
      <Services />
      <Newsletter />
      <Footer />
    </>
  )
}
