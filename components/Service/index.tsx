// components/Services.jsx
const Services = () => {
  const services = [
    {
      title: "Career Skills Training",
      description: "Hands-on workshops in digital storytelling, data journalism, content strategy, and media production for aspiring media professionals.",
      icon: "🎓",
      category: "Media",
      bullets: ["Video & audio production", "Social media strategy", "Data-driven storytelling", "Portfolio building"]
    },
    {
      title: "Tech Capacity Building",
      description: "Practical, project-based training in programming, data literacy, and digital tools—designed for beginners and career-switchers.",
      icon: "💻",
      category: "Technology",
      bullets: ["Python & JavaScript fundamentals", "Data analysis with Pandas/SQL", "Web development bootcamps", "Git & collaborative workflows"]
    },
    {
      title: "Tech Consultancy & Solutions",
      description: "End-to-end technical support for media houses, NGOs, and SMEs—from strategy to deployment.",
      icon: "⚙️",
      category: "Consultancy",
      bullets: [
        "🤖 AI & workflow automation",
        "📊 Data pipelines, dashboards & analytics",
        "🌐 Custom web apps & APIs",
        "🔍 Technical audits & digital strategy"
      ]
    },
    {
      title: "Mentorship Network",
      description: "1:1 guidance from industry professionals to help you navigate career paths, build confidence, and unlock opportunities.",
      icon: "🤝",
      category: "Community",
      bullets: ["Career pathway planning", "Portfolio & CV reviews", "Interview prep", "Industry networking"]
    }
  ];

  return (
    <section id="services" className="bg-gray-50 py-16 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl">
            What We Offer
          </h2>
          <p className="mt-4 text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
            Blending media expertise with technical excellence to create pathways for the next generation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="rounded-sm bg-white p-6 shadow-lg dark:bg-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                {/* <span className="text-3xl">{service.icon}</span> */}
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark mb-4">
                    {service.description}
                  </p>
                  {service.bullets && (
                    <ul className="space-y-1">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
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
      </div>
    </section>
  );
};

export default Services;