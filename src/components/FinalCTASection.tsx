"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "77771234567";
const WHATSAPP_MESSAGE = "Здравствуйте! Заинтересовался услугами";

export function FinalCTASection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp with form data
    const message = `Здравствуйте! Меня зовут ${name}. Мой номер: ${phone}. Заинтересовался услугами по таргетированной рекламе.`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-black px-4 py-20 md:py-28"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 via-transparent to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-2xl">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Готовы увеличить{" "}
            <span className="text-amber-500">окупаемость</span> рекламы?
          </h2>
          <p className="mb-10 text-neutral-400">
            Оставьте заявку или напишите напрямую в WhatsApp. 
            Отвечу в течение часа
          </p>
        </div>

        <div
          className={`rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm md:p-8 transition-all duration-700 delay-200 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12 border-neutral-700 bg-neutral-800/50 text-white placeholder:text-neutral-500 focus:border-amber-500"
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Номер телефона"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="h-12 border-neutral-700 bg-neutral-800/50 text-white placeholder:text-neutral-500 focus:border-amber-500"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="group h-12 w-full bg-amber-500 font-semibold text-black transition-all duration-300 hover:bg-amber-400"
            >
              <Send className="mr-2 h-5 w-5" />
              Обсудить проект
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-neutral-800" />
            <span className="text-sm text-neutral-500">или</span>
            <div className="h-px flex-1 bg-neutral-800" />
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button
              type="button"
              size="lg"
              className="group h-12 w-full bg-[#25D366] font-semibold text-white transition-all duration-300 hover:bg-[#128C7E]"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Написать в WhatsApp
            </Button>
          </a>
        </div>

        {/* Footer */}
        <div
          className={`mt-12 text-center text-sm text-neutral-500 transition-all duration-700 delay-300 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p>© 2026 Raycon. Все права защищены</p>
          <p className="mt-1">Астана, Казахстан</p>
        </div>
      </div>
    </section>
  );
}
