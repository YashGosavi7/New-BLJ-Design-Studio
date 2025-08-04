import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair text-darkGray mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-darkGray/70 max-w-2xl mx-auto">
            Ready to start your design journey? Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-playfair text-darkGray mb-8">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="text-roseGold mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-darkGray mb-1">Phone</h3>
                  <p className="text-darkGray/70">+91 98765 43210</p>
                  <p className="text-darkGray/70">+91 87654 32109</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-roseGold mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-darkGray mb-1">Email</h3>
                  <p className="text-darkGray/70">info@balajidesign.com</p>
                  <p className="text-darkGray/70">projects@balajidesign.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-roseGold mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-darkGray mb-1">Address</h3>
                  <p className="text-darkGray/70">
                    123 Design Street,<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-roseGold mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-darkGray mb-1">Business Hours</h3>
                  <p className="text-darkGray/70">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-darkGray/70">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-darkGray/70">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-playfair text-darkGray mb-6">Send us a Message</h2>
            
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
                className="w-full bg-roseGold text-white py-3 px-6 rounded-lg hover:bg-roseGold/90 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;