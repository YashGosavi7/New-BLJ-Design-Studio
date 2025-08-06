import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "9762000000";
  const message = "Hi! I'm interested in your interior design services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Connect on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Connect on WhatsApp: {phoneNumber}
      </div>
    </a>
  );
};

export default WhatsAppButton;