import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/contactValidation";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Client-side rate limiting (1 submission per 30 seconds)
    const now = Date.now();
    if (now - lastSubmissionTime < 30000) {
      toast({
        title: "Please wait",
        description: "You can only submit once every 30 seconds.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data: result, error } = await supabase.functions.invoke('submit-contact', {
        body: data,
      });

      if (error) {
        throw error;
      }

      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: result.message,
          variant: "default",
        });
        reset();
        setLastSubmissionTime(now);
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error: any) {
      console.error('Contact form error:', error);
      
      let errorMessage = "Failed to send message. Please try again.";
      
      if (error.message?.includes('rate limit')) {
        errorMessage = "Too many submissions. Please try again later.";
      } else if (error.message?.includes('validation')) {
        errorMessage = "Please check your input and try again.";
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-darkGray mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-roseGold focus:border-transparent ${
                    errors.name ? 'border-red-500' : 'border-lightGray'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-darkGray mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-roseGold focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-lightGray'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-darkGray mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-roseGold focus:border-transparent ${
                    errors.phone ? 'border-red-500' : 'border-lightGray'
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-darkGray mb-2">
                  Project Type
                </label>
                <select
                  id="subject"
                  {...register("subject")}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-roseGold focus:border-transparent ${
                    errors.subject ? 'border-red-500' : 'border-lightGray'
                  }`}
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential Design</option>
                  <option value="commercial">Commercial Space</option>
                  <option value="hospitality">Hospitality Design</option>
                  <option value="consultation">Design Consultation</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-darkGray mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-roseGold focus:border-transparent ${
                    errors.message ? 'border-red-500' : 'border-lightGray'
                  }`}
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-roseGold text-white py-3 px-6 rounded-lg hover:bg-roseGold/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={16} />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;