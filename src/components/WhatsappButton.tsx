import React from "react";
import { BsWhatsapp } from "react-icons/bs";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Hello",
  className = "",
}) => {
  const whatsappUrl = `https://wa.me/+234${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} w-fit fixed bottom-6 right-6 flex items-center justify-center p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors`}
    >
      <BsWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
