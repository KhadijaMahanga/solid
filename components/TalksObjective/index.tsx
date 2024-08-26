import Image from "next/image";

import { Objective } from "@/types/objective";

const objectives: Objective[] = [
    {
        title: "Knowledge Sharing & Motivation",
        paragraph: "Share insights into various ICT domains, policy, and the latest trends through expert talks and discussions."
    }, 
    {
        title: "Project Showcasing",
        paragraph: "Review and showcase tech projects that have won prizes or received funding, highlighting innovation and best practices to inspire participants."
    }, 
    {
        title: "Motivation",
        paragraph: "Encourage young women to pursue careers in ICT by showcasing success stories and career opportunities."
    }, 
    {
        title: "Capacity Building",
        paragraph: "Highlight online and open source resources and tools that participants can use in their personal and school projects and enhance their skill"
    }, 
]

const TalksObjective = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-start">
          <div className="w-full px-4 lg:w-1/2">
          <h4 className="mb-9 font-bold !leading-tight text-black text-2xl">
            Why Join KikeTech Talks?
          </h4>
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[600px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/tech-girls.jpeg"
                alt="tech talks image"
                width={580}
                height={450}
                className="drop-shadow-three"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
          
            <div className="max-w-[470px]">
            {objectives.map(({ title, paragraph }, index) => 
                      index == objectives.length -1 ?
                  (
                    <div className="mb-1" key={index}>
                        <h3 className="mb-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                        {title}
                        </h3>
                        <p className="text-base font-normal leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        {paragraph}
                        </p>
                  </div>

                  ): (
                    <div className="mb-8" key={index}>
                        <h3 className="mb-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                        {title}
                        </h3>
                        <p className="text-base font-normal leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        {paragraph}
                        </p>
                  </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalksObjective;