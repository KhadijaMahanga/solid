"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import SectionTitle from "@/components/SectionTitle";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";
const FORM_SECRET = process.env.NEXT_PUBLIC_FORM_SECRET || "";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<{ type: "success" | "error" | ""; message: string }>({
    type: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!GOOGLE_SCRIPT_URL) {
      setStatus({ type: "error", message: "Configuration error. Please contact support." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json", "x-form-secret": FORM_SECRET },
        body: JSON.stringify({
          ...formData,
          form_type: "contact"
        })
      });

      // With no-cors, we assume success if no network error occurred
      setStatus({
        type: "success",
        message: "Thank you! Your message has been received. We'll reply within 1-2 business days."
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again or email us directly at hello@kikeafrica.org"
      });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus({ type: "", message: "" }), 6000);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Get in Touch"
          paragraph="Are you seeking technological solutions, or are you passionate about women in coding, media and digital literacy? We invite you to join us on this exciting journey."
          center
        />
        
        <div className="-mx-4 flex flex-col lg:flex-row">
          {/* Form Column */}
          <div className="w-full flex-1 px-4 lg:w-7/12 xl:w-8/12">
            <div className="rounded-sm bg-white px-6 py-4 shadow-three sm:p-[55px] lg:px-8 xl:p-[55px]">
              <p className="mb-12 text-base font-medium text-body-color">
                Our team will get back to you ASAP via email.
              </p>

              {/* Status Message */}
              {status.message && (
                <div className={`mb-6 p-4 rounded-lg text-center transition-opacity ${
                  status.type === "success" 
                    ? "bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-200" 
                    : "bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-200"
                }`}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="-mx-4 flex flex-wrap">
                  {/* Name */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Enter your message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed dark:shadow-submit-dark"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Map Column */}
          <div className="w-full flex-1 px-4 lg:w-5/12 xl:w-4/12">
            <div className="rounded-sm h-full bg-white px-6 py-4 shadow-three sm:p-[55px] lg:px-8 xl:p-[55px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.824352054827!2d39.27573517563499!3d-6.791216266418931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4c7fcf9a5843%3A0x61cda3b057276e66!2s84%20Kinondoni%20Rd%2C%20Dar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1701061810824!5m2!1sen!2stz"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kike Africa Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;