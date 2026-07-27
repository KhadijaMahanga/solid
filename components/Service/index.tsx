import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

const services = [
  {
    title: "Career Skills Training",
    description:
      "Hands-on workshops in digital storytelling, data journalism, content strategy, and media production for aspiring media professionals.",
    icon: "🎓",
    category: "Media",
    bullets: ["Video & audio production", "Social media strategy", "Data-driven storytelling", "Portfolio building"],
  },
  {
    title: "Tech Capacity Building",
    description:
      "Practical, project-based training in programming, data literacy, and digital tools, designed for beginners and career-switchers.",
    icon: "💻",
    category: "Technology",
    bullets: ["Python & JavaScript fundamentals", "Data analysis with Pandas/SQL", "Web development bootcamps", "Git & collaborative workflows"],
  },
  {
    title: "Media Content & Storytelling",
    description:
      "Content production delivered through our network of writers and journalists, covering data-driven features and in-depth reporting on the issues that matter most.",
    icon: "📰",
    category: "Media Services",
    bullets: ["Data storytelling & visual reporting", "Story writing & long-form content", "Women & gender issues reporting", "Climate & environmental reporting"],
  },
  {
    title: "Tech Consultancy & Solutions",
    description:
      "End-to-end technical support for media houses, NGOs, and SMEs, from strategy to deployment.",
    icon: "⚙️",
    category: "Consultancy",
    bullets: ["AI & workflow automation", "Data pipelines, dashboards & analytics", "Custom web apps & APIs", "Technical audits & digital strategy"],
  },
  {
    title: "Mentorship Network",
    description:
      "1:1 guidance from industry professionals to help you navigate career paths, build confidence, and unlock opportunities.",
    icon: "🤝",
    category: "Community",
    bullets: ["Career pathway planning", "Portfolio & CV reviews", "Interview prep", "Industry networking"],
  },
];

const Service = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 dark:bg-gray-900 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What We Offer"
          paragraph="Blending media expertise with technical excellence to create pathways for the next generation."
          center
        />

        <div className="flex flex-wrap justify-center gap-8 mt-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group w-full rounded-lg bg-white p-6 shadow transition hover:shadow-lg dark:bg-gray-800 md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-2xl">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-2">
                    {service.category}
                  </span>
                  <h3 className="mb-2 text-xl font-semibold text-black transition group-hover:text-primary dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-body-color dark:text-body-color-dark">
                    {service.description}
                  </p>
                  {service.bullets && (
                    <ul className="space-y-1">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <span className="mt-1 text-primary">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-block rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90"
          >
            See All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Service;
