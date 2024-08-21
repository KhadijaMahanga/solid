import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";
import Festival from "@/components/Festival";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kike Media Festival | Initatives | Kike Africa",
  description: "This is About Page for Startup Nextjs Template",
};

const KikeMediaFestival = () => {
  return (
    <>
     <Header />
      <Breadcrumb
        pageName="Kike Media Festival"
        description="A yearly event that aims to connect young media journalist with pioneers in the field"
      />
      <Festival />
    </>
  );
};

export default KikeMediaFestival;