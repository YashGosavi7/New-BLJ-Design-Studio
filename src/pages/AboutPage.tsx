import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const stats = [
    { label: "Executed", value: "600+", sub: "Projects Across India" },
    { label: "Practicing Over", value: "10", sub: "Years of Experience" },
    { label: "Established", value: "2014", sub: "Pune, India" }
  ];

  const values = [
    {
      heading: "Timely Handovers",
      text: "We follow a disciplined timeline so your space is delivered exactly as planned — no delays, no uncertainty."
    },
    {
      heading: "Honesty & Transparency",
      text: "From budgeting to materials, we maintain full clarity. You always know what's being used and why."
    },
    {
      heading: "Quality That Lasts",
      text: "We design for longevity, using premium materials and meticulous craftsmanship."
    },
    {
      heading: "Open Communication",
      text: "We stay connected through calls, site visits, and detailed email updates."
    },
    {
      heading: "Original Designs",
      text: "Every project begins from scratch — tailored to your lifestyle, personality, and space."
    },
    {
      heading: "Relationships Built on Trust",
      text: "Our practice is referral-driven, built on honesty, clarity, and long-term client trust."
    },
    {
      heading: "1-Year Free Service",
      text: "We provide one year of free after-care service to ensure complete comfort after moving in."
    },
    {
      heading: "Dedicated Team",
      text: "Our designers and project managers work seamlessly to bring your vision into reality."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Balaji Design Studio</title>
        <meta name="description" content="Learn about NBalaji Design Studio, founded by Mr. Dalpat Suthar in 2014. Over 600+ projects completed across India with 10+ years of experience." />
      </Helmet>

      <article className="min-h-screen pt-24 md:pt-28 bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-foreground mb-4">
              About Us
            </h1>
            <p className="text-xl md:text-2xl font-playfair text-muted-foreground mb-8">
              NBalaji Design Studio
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Founded by Mr. Dalpat Suthar, NBalaji Design Studio is built on the belief that great design goes beyond beauty — it transforms the way you live, work, and feel every day.
            </p>
          </div>
        </section>

        {/* Founder Bio Section */}
        <section className="py-16 md:py-20 bg-background border-t border-border">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 animate-fade-in">
                <h2 className="text-2xl md:text-3xl font-playfair text-foreground mb-2">
                  Mr. Dalpat Suthar
                </h2>
                <p className="text-sm tracking-widest uppercase text-muted-foreground font-inter mb-6">
                  Principal Designer & Founder
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mr. Dalpat Suthar established NBalaji Design Studio in 2014 with a vision to create spaces that are original, functional, and deeply personal. Over the years, the studio has grown into a trusted practice for Interior, Architectural, and Landscape Design across India.
                </p>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="w-64 h-80 bg-muted rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-inter text-sm">Founder Portrait</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <p className="text-sm tracking-widest uppercase text-muted-foreground font-inter mb-2">
                    {stat.label}
                  </p>
                  <p className="text-4xl md:text-5xl font-playfair text-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground font-inter">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Intro Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-3xl mx-auto px-6 text-center animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-playfair text-foreground mb-6">
              Design That Works Beautifully
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              At NBalaji Design Studio, we bring together aesthetics, functionality, and purpose. Our multidisciplinary practice spans Interior Design, Architecture, and Landscaping for Residential and Commercial projects. Every project begins with a blank canvas — ensuring originality, clarity, and thoughtful detailing.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 md:py-20" style={{ backgroundColor: '#f3e6d2' }}>
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-playfair text-foreground mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-background/80 p-6 rounded-lg animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <h3 className="text-lg font-playfair text-foreground mb-3">
                    {value.heading}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-inter">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-foreground">
          <div className="max-w-3xl mx-auto px-6 text-center animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-playfair text-background mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-background/70 mb-10 font-inter">
              Let's discuss your vision and create something beautiful together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-background text-foreground px-10 py-4 font-inter font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:bg-transparent hover:text-background border border-background"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </article>
    </>
  );
};

export default AboutPage;
