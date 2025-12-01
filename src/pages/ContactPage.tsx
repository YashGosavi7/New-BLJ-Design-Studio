import { Mail, Phone, Clock, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  const phoneNumber = "919762000000";
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in your interior design services. I'd like to discuss my project.");

  return (
    <>
      <Helmet>
        <title>Contact | Balaji Design Studio</title>
        <meta name="description" content="Get in touch with Balaji Design Studio. Let's build something beautiful together." />
      </Helmet>
      
      <article className="min-h-screen pt-24 md:pt-28 bg-background">
        {/* Hero Section */}
        <section className="py-8 md:py-12 border-b border-border">
          <div className="container-editorial">
            <div className="max-w-3xl animate-fade-in">
              <div className="separator-thick mb-6" />
              <h1 className="text-foreground mb-4 text-3xl md:text-4xl">
                Let's Build Something Beautiful.
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-xl">
                Ready to transform your space? We'd love to hear about your project.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-10 md:py-16">
          <div className="container-editorial">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Column - CTA */}
              <div className="space-y-12 animate-fade-in">
                <div>
                  <h2 className="text-2xl md:text-3xl font-playfair text-foreground mb-6">
                    Start a Conversation
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Connect with us directly on WhatsApp for quick responses and personalized consultation.
                  </p>
                  
                  <a
                    href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-inter font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:bg-muted-foreground"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Contact Details */}
                <div className="space-y-8 pt-8 border-t border-border">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 flex items-center justify-center border border-border">
                      <Phone className="text-foreground" size={20} />
                    </div>
                    <div>
                      <h3 className="font-inter text-sm tracking-widest uppercase text-muted-foreground mb-2">
                        Phone
                      </h3>
                      <a
                        href="tel:+919762000000"
                        className="text-foreground hover:opacity-70 transition-opacity text-lg"
                      >
                        +91 97620 00000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 flex items-center justify-center border border-border">
                      <Mail className="text-foreground" size={20} />
                    </div>
                    <div>
                      <h3 className="font-inter text-sm tracking-widest uppercase text-muted-foreground mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:balajidesignstudio@hotmail.com"
                        className="text-foreground hover:opacity-70 transition-opacity"
                      >
                        balajidesignstudio@hotmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 flex items-center justify-center border border-border">
                      <Clock className="text-foreground" size={20} />
                    </div>
                    <div>
                      <h3 className="font-inter text-sm tracking-widest uppercase text-muted-foreground mb-2">
                        Business Hours
                      </h3>
                      <div className="text-foreground space-y-1">
                        <p>Mon – Fri: 9AM – 6PM</p>
                        <p>Saturday: 10AM – 4PM</p>
                        <p className="text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats */}
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="bg-muted p-10 md:p-16 h-full flex flex-col justify-center">
                  <h3 className="text-xl font-playfair text-foreground mb-12">
                    Why Work With Us
                  </h3>
                  
                  <div className="space-y-10">
                    <div className="border-b border-border pb-10">
                      <p className="text-5xl md:text-6xl font-playfair text-foreground mb-2">
                        600+
                      </p>
                      <p className="text-sm tracking-widest uppercase text-muted-foreground font-inter">
                        Projects Completed
                      </p>
                    </div>

                    <div className="border-b border-border pb-10">
                      <p className="text-5xl md:text-6xl font-playfair text-foreground mb-2">
                        15+
                      </p>
                      <p className="text-sm tracking-widest uppercase text-muted-foreground font-inter">
                        Years of Experience
                      </p>
                    </div>

                    <div>
                      <p className="text-5xl md:text-6xl font-playfair text-foreground mb-2">
                        100%
                      </p>
                      <p className="text-sm tracking-widest uppercase text-muted-foreground font-inter">
                        Client Satisfaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default ContactPage;