import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const { isSubmitting, submitForm } = useContactForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await submitForm(formData);
    if (success) {
      // Reset form on successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Balaji Design Studio - Get Your Free Consultation</title>
        <meta name="description" content="Contact Balaji Design Studio for expert interior design services. Call +91 97620 00000. Free consultation available for all projects." />
        <meta name="keywords" content="contact interior designer, Mumbai interior design, free design consultation, interior design quote, Balaji Design Studio contact" />
      </Helmet>
      
      <article className="min-h-screen pt-20 bg-gradient-to-b from-warmWhite to-lightGray/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
          <header className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-darkGray mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-darkGray/70 max-w-3xl mx-auto leading-relaxed">
              Ready to start your design journey? Get in touch with our expert team.
            </p>
            <div className="w-24 h-1 bg-roseGold mx-auto mt-6"></div>
          </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-playfair text-darkGray mb-10">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-roseGold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-roseGold" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-darkGray mb-2">Phone</h3>
                  <p className="text-darkGray/70 hover:text-roseGold transition-colors">
                    <a href="tel:+919762000000">+91 97620 00000</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-roseGold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-roseGold" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-darkGray mb-2">Email</h3>
                  <p className="text-darkGray/70 hover:text-roseGold transition-colors">
                    <a href="mailto:balajidesignstudio@hotmail.com">balajidesignstudio@hotmail.com</a>
                  </p>
                </div>
              </div>


              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-roseGold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-roseGold" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-darkGray mb-2">Business Hours</h3>
                  <p className="text-darkGray/70">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-darkGray/70">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-darkGray/70">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 animate-slide-in-right border border-lightGray/20">
            <h2 className="text-3xl md:text-4xl font-playfair text-darkGray mb-8">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-darkGray mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-lightGray rounded-lg focus:ring-2 focus:ring-roseGold focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-darkGray mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-lightGray rounded-lg focus:ring-2 focus:ring-roseGold focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-darkGray mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-lightGray rounded-lg focus:ring-2 focus:ring-roseGold focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-darkGray mb-2">
                  Project Type
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-lightGray rounded-lg focus:ring-2 focus:ring-roseGold focus:border-transparent"
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential Design</option>
                  <option value="commercial">Commercial Space</option>
                  <option value="hospitality">Hospitality Design</option>
                  <option value="consultation">Design Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-darkGray mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-lightGray rounded-lg focus:ring-2 focus:ring-roseGold focus:border-transparent"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-roseGold text-white py-3 px-6 rounded-lg hover:bg-roseGold/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
        </div>
      </article>
    </>
  );
};

export default ContactPage;