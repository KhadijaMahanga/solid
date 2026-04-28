const ConsultancyDetail = () => {
  const offerings = [
    {
      title: "AI & Automation",
      items: [
        "Chatbots for audience engagement & customer support",
        "Content tagging, summarization & transcription pipelines",
        "Automated reporting & data collection workflows",
        "Predictive analytics for content performance"
      ]
    },
    {
      title: "Data Solutions",
      items: [
        "Data strategy & governance frameworks",
        "ETL pipelines & database design (SQL/NoSQL)",
        "Interactive dashboards (Power BI, Metabase, custom)",
        "Survey design, analysis & visualization for research/NGOs"
      ]
    },
    {
      title: "Web & Application Development",
      items: [
        "Responsive websites & CMS integrations (Next.js, WordPress)",
        "API development & third-party integrations",
        "Progressive Web Apps (PWAs) for low-bandwidth contexts",
        "Technical maintenance & scalability audits"
      ]
    },
    {
      title: "Digital Transformation for Media",
      items: [
        "Tech stack assessment for newsrooms & content teams",
        "Workflow optimization with collaborative tools",
        "Training staff on data literacy & no-code automation",
        "Ethical AI & responsible tech adoption guidance"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-dark">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Tech Consultancy: Built for Impact
          </h2>
          <p className="text-body-color dark:text-body-color-dark mb-10 text-lg">
            We partner with media organizations, civic groups, and purpose-driven businesses to implement 
            practical, scalable technology solutions. Our approach blends technical rigor with contextual 
            understanding—because the best tools are those that people actually use.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((category, idx) => (
              <div key={idx} className="border-l-4 border-primary pl-5">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-body-color dark:text-body-color-dark flex gap-2">
                      <span className="text-primary">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-black dark:text-white mb-2">
              Not sure where to start?
            </h4>
            <p className="text-body-color dark:text-body-color-dark mb-4">
              We offer a free 30-minute discovery call to understand your goals and suggest a tailored roadmap.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Book your consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultancyDetail;