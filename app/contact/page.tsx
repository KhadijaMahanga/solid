import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Contact Us | Kike Africa",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Get in touch with us"
        crumbs={[
          { 
            "name": "Contact Us",
        },

      ]} />
      <Contact />
    </>
  )
}
