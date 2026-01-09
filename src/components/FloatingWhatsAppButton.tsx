"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/content";

export function FloatingWhatsAppButton() {
  const [isPulsing, setIsPulsing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Пульсация каждые 10 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 2000);
    }, 10000);

    // Первая пульсация через 3 секунды
    const initialTimeout = setTimeout(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 2000);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Текст "Написать" */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="hidden md:block rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white shadow-lg"
          >
            Написать
          </motion.span>
        )}
      </AnimatePresence>

      {/* Кнопка */}
      <div className="relative">
        {/* Пульсирующие кольца */}
        {isPulsing && (
          <>
            <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring" />
            <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring [animation-delay:0.5s]" />
          </>
        )}
        
        <motion.div
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg shadow-whatsapp/30 md:h-16 md:w-16"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle 
            className="h-7 w-7 text-white md:h-8 md:w-8" 
            fill="white" 
            strokeWidth={0}
          />
        </motion.div>
      </div>
    </motion.a>
  );
}
