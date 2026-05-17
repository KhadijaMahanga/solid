import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Service from "@/components/Service";
import Mentorship from "@/components/Mentorship"

export const metadata = {
  title: "Home | Kike Africa",
  description: "A media and technology company dealing with consultancy, capacity building, skills development, and sharing women stories across Tanzania."
};

export default function Page() {
  return (
    <>
      <Hero />
      <Service />
      <Mentorship />
      <Contact />
    </>
  )
}
