import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <>
      <Hero />
      <Header />
      <Contact />
    </>
  )
}
