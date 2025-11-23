import { Mail, Phone, Clock, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  const phoneNumber = "919762000000"; // WhatsApp number without + or spaces
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in your interior design services. I'd like to discuss my project.");

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

          <div className="max-w-5xl mx-auto">
            {/* WhatsApp CTA Section */}
            <div className="mb-16 animate-scale-in">
              <div className="bg-gradient-to-br from-[#25D366]/10 via-white to-roseGold/5 rounded-3xl shadow-2xl p-8 md:p-12 border border-[#25D366]/20">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#25D366] rounded-full shadow-lg animate-pulse">
                    <MessageCircle className="text-white" size={40} />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-playfair text-darkGray">
                    Let's Talk About Your Project
                  </h2>
                  
                  <p className="text-lg md:text-xl text-darkGray/70 max-w-2xl mx-auto leading-relaxed">
                    Connect with us instantly on WhatsApp for quick responses and personalized consultation
                  </p>
                  
                  <a
                    href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-2xl text-lg md:text-xl font-semibold hover:bg-[#20BD5A] hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    <MessageCircle size={28} />
                    Chat on WhatsApp
                  </a>
                  
                  <p className="text-sm text-darkGray/60 italic">
                    Usually responds within minutes during business hours
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-roseGold/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="text-roseGold" size={28} />
                </div>
                <h3 className="font-semibold text-xl text-darkGray mb-3">Phone</h3>
                <p className="text-darkGray/70 hover:text-roseGold transition-colors">
                  <a href="tel:+919762000000" className="text-lg">+91 97620 00000</a>
                </p>
              </div>

              <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-roseGold/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-roseGold" size={28} />
                </div>
                <h3 className="font-semibold text-xl text-darkGray mb-3">Email</h3>
                <p className="text-darkGray/70 hover:text-roseGold transition-colors break-all">
                  <a href="mailto:balajidesignstudio@hotmail.com" className="text-base">
                    balajidesignstudio@hotmail.com
                  </a>
                </p>
              </div>

              <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-16 h-16 bg-roseGold/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="text-roseGold" size={28} />
                </div>
                <h3 className="font-semibold text-xl text-darkGray mb-3">Business Hours</h3>
                <div className="text-darkGray/70 space-y-1">
                  <p>Mon - Fri: 9AM - 6PM</p>
                  <p>Saturday: 10AM - 4PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center bg-white rounded-2xl shadow-lg p-8 md:p-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-playfair text-darkGray mb-4">
                Why Choose Balaji Design Studio?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-roseGold">600+</p>
                  <p className="text-darkGray/70">Projects Completed</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-roseGold">15+</p>
                  <p className="text-darkGray/70">Years Experience</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-roseGold">100%</p>
                  <p className="text-darkGray/70">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ContactPage;
