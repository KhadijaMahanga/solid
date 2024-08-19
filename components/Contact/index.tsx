import SectionTitle from "@/components/SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
      <SectionTitle
          title="Get in Touch"
          paragraph="Are you seeking technological solutions, or are you passionate about women in coding, media and digital literacy, we invite you to join us on this exciting journey."
         center
        />
        <div className="-mx-4 flex flex-col lg:flex-row">
          <div className="w-full flex-1 px-4 lg:w-7/12 xl:w-8/12">
            <div className="rounded-sm bg-white px-6 py-4 shadow-three sm:p-[55px] lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contact Us
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
              Our team will get back to you ASAP via email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full flex-1 px-4 lg:w-5/12 xl:w-4/12">
            <div
                className="rounded-sm h-full bg-white px-6 py-4 shadow-three sm:p-[55px] lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s
                "
              >
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.824352054827!2d39.27573517563499!3d-6.791216266418931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4c7fcf9a5843%3A0x61cda3b057276e66!2s84%20Kinondoni%20Rd%2C%20Dar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1701061810824!5m2!1sen!2stz" width="100%" height="100%" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;