import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | Kike Africa",
};

export default function Page() {
  return (
    <>
      <Header />
      <Breadcrumb
        pageName=""
        description=""
        crumbs={[
          { 
            "name": "Contact Us",
        },

      ]} />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  )
}
