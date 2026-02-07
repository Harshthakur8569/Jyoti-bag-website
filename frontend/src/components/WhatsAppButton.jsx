import React from 'react';
import { contactInfo } from '../data/mockData';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in your bag products. Can you provide more information?"
    );
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(
      /[^0-9]/g,
      ''
    )}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-4 z-50 bg-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="Contact on WhatsApp"
    >
      <img
        src="/images/whatsapp logo.png"
        alt="WhatsApp"
        className="w-8 h-8 object-contain"
      />
    </button>
  );
};

export default WhatsAppButton;