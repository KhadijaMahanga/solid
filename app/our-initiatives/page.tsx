import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Initatives | Kike Africa",
  description: "Research-based initiatives to inspire young aspirants in media and technology sectors",
};

const Initatives = () => {
  return (
    <>
     <Header />
      <Breadcrumb
        pageName="Our Initiatives"
        description="Research-based initiatives to inspire young aspirants in media and technology sectors"
        crumbs={[
            { 
                "name": "Our Initiatives",
            }
        ]}
      />
    </>
  );
};

export default Initatives;