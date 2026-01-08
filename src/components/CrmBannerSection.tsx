"use client";

import { useEffect, useRef, useState } from "react";
import { Gift, CheckCircle } from "lucide-react";

export function CrmBannerSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-neutral-950 px-4 py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <div
          className={`relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-neutral-900 to-neutral-900 p-8 md:p-12 transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Background decoration */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-amber-500/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-amber-500/5 blur-3xl" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/20">
              <Gift className="h-8 w-8 text-amber-500" />
            </div>
            
            <span className="mb-2 inline-block rounded-full bg-amber-500/10 px-4 py-1 text-sm font-medium text-amber-500">
              Бонус для новых клиентов
            </span>
            
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              CRM от Raycon —{" "}
              <span className="text-amber-500">в подарок на 14 дней</span>
            </h2>
            
            <p className="mb-8 max-w-2xl text-neutral-400">
              Учёт заявок и контроль рекламы в одной системе. 
              Видите, откуда пришёл каждый клиент и сколько денег принёс
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-500" />
                <span>Без ограничений</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-500" />
                <span>Полный функционал</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-500" />
                <span>Помощь в настройке</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
