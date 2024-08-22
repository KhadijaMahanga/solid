import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";
import TalksObjective from "@/components/TalksObjective";
import TalksEpisodes from "@/components/TalksEpisodes";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KikeTech Talks | Our Initatives | Kike Africa",
  description: "This is About Page for Startup Nextjs Template",
};

const KikeMediaFestival = () => {
  return (
    <>
     <Header />
      <Breadcrumb
        pageName="KikeTech Talks"
        description="This an online series talks that aim to prepare young women to be confident, well-rounded technologists and leaders. It is designed to share experiences amongst each other and from tech pioneers with tertiary students, so as to inspire women to take on technology careers and to stimulate technology entrepreneurship.
"
        crumbs={[
          { 
              "name": "Our Initiatives",
              "url": "/our-initiatives"
          },
          { 
            "name": "KikeTech Talks",
        },

      ]}
      />
      <TalksObjective />
      <TalksEpisodes />
    </>
  );
};

export default KikeMediaFestival;