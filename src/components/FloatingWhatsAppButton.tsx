"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "77771234567";
const WHATSAPP_MESSAGE = "Здравствуйте! Заинтересовался услугами";

export function FloatingWhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#128C7E] hover:shadow-xl md:h-16 md:w-16"
      aria-label="Написать в WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white md:h-8 md:w-8" fill="white" />
    </a>
  );
}
