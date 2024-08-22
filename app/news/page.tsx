import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <>
      <Header />
      <section className="relative z-10 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[530px] text-center">
                <div className="mx-auto text-center mb-20 mt-20">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black  sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    Coming Soon!
                </h1>



                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
