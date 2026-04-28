"use client";
import { useState, FormEvent, ChangeEvent } from "react";

// ✅ Client components can only read env vars prefixed with NEXT_PUBLIC_
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";
const FORM_SECRET = process.env.NEXT_PUBLIC_FORM_SECRET || "";

type FormRole = "mentee" | "mentor";
type FormField = "media" | "tech" | "both" | "consultancy";

interface FormData {
  name: string;
  email: string;
  role: FormRole;
  field: FormField;
  experience: string;
  message: string;
  consultancyBrief: string;
}

const Mentorship: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    role: "mentee",
    field: "media",
    experience: "",
    message: "",
    consultancyBrief: ""
  });

  const [status, setStatus] = useState<{ type: "success" | "error" | ""; message: string }>({
    type: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
        body: JSON.stringify({ ...formData, form_type: "mentorship" }) // 🔑 Include form_type to route correctly in Google Sheets
      });

      setStatus({
        type: "success",
        message: "Thank you! We have received your details and will be in touch within 3-5 business days."
      });
      
      // Reset form
      setFormData({
        name: "", email: "", role: "mentee", field: "media",
        experience: "", message: "", consultancyBrief: ""
      });
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again or email us directly at info@kikeafrica.org"
      });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    }
  };

  return (
    <section id="mentorship" className="py-16 bg-white dark:bg-gray-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl">
              Join Our Mentorship Network
            </h2>
            <p className="mt-4 text-body-color dark:text-body-color-dark">
              Whether you're starting your career or ready to give back, connect with our community.
            </p>
          </div>

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

          <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name & Email */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="you@example.com"
                />
              </div>

              {/* Role & Field */}
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-black dark:text-white mb-2">I want to... *</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                >
                  <option value="mentee">Be Mentored</option>
                  <option value="mentor">Become a Mentor</option>
                </select>
              </div>
              <div>
                <label htmlFor="field" className="block text-sm font-medium text-black dark:text-white mb-2">Area of Interest *</label>
                <select
                  id="field"
                  name="field"
                  value={formData.field}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                >
                  <option value="media">Media & Content Creation</option>
                  <option value="tech">Technology & Data</option>
                  <option value="both">Both Media & Tech</option>
                  <option value="consultancy">I need tech consultancy for my organization</option>
                </select>
              </div>
            </div>

            {/* Conditional Consultancy Field */}
            {formData.field === "consultancy" && (
              <div className="mb-6">
                <label htmlFor="consultancyBrief" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Organization & Brief Description of Need *
                </label>
                <textarea
                  id="consultancyBrief"
                  name="consultancyBrief"
                  value={formData.consultancyBrief}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="e.g., 'We're a community radio station looking to automate show scheduling...'"
                />
              </div>
            )}

            {/* Experience */}
            <div className="mb-6">
              <label htmlFor="experience" className="block text-sm font-medium text-black dark:text-white mb-2">
                {formData.role === "mentor" ? "Your Professional Background" : "Your Current Experience Level"}
              </label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder={formData.role === "mentor" 
                  ? "Tell us about your expertise, industry, and what you can offer..." 
                  : "What are you hoping to learn? What's your current skill level?..."
                }
              />
            </div>

            {/* Message */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-black dark:text-white mb-2">Additional Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="Anything else you'd like us to know?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-sm hover:bg-primary/80 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Interest →"}
            </button>
            
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              By submitting, you agree to be contacted by Kike Africa. We respect your privacy and never share your data.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;