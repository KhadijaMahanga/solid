import SectionTitle from "@/components/SectionTitle";
import ServiceItem from "./Item";
import servicesData from "./Data";

const Services = () => {
  return (
    <>
      <section id="Services" className="py-10 md:py-16 lg:py-20">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="What we offer"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;