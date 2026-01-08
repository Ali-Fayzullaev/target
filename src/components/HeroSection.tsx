"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "77771234567";
const WHATSAPP_MESSAGE = "Здравствуйте! Заинтересовался услугами";

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
      
      <div className="animate-fade-in relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
          Таргет, который{" "}
          <span className="text-amber-500">окупается</span>.
          <br />
          Или деньги назад
        </h1>
        
        <h2 className="mb-10 text-lg text-neutral-300 md:text-xl lg:text-2xl">
          Настройка рекламы в Instagram и Facebook с гарантией результата.
          <br className="hidden md:block" />
          Работаю с бизнесом в Казахстане
        </h2>
        
        <div className="flex flex-col items-center gap-4">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="group h-14 cursor-pointer bg-amber-500 px-8 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-400"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Написать в WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          
          <p className="max-w-md text-sm text-neutral-400">
            Без освоения бюджета. Только то, что приносит продажи
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-5 rounded-full border-2 border-neutral-600">
          <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-neutral-600" />
        </div>
      </div>
    </section>
  );
}
