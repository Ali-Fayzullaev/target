"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Briefcase, FileCheck, Target } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "5+ лет в таргете",
    description: "Работаю с рекламой с 2019 года. Прошёл путь от новичка до эксперта",
  },
  {
    icon: Briefcase,
    title: "50+ успешных проектов",
    description: "Работал с разными нишами: услуги, товары, онлайн-школы",
  },
  {
    icon: FileCheck,
    title: "Официальный договор",
    description: "Работаю официально. Всё прозрачно и по закону",
  },
  {
    icon: Target,
    title: "Фокус на прибыли",
    description: "Не гонюсь за красивыми цифрами. Считаю только реальный результат",
  },
];

export function WhyMeSection() {
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
      { threshold: 0.1 }
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
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Почему вам стоит{" "}
          <span className="text-amber-500">со мной работать</span>
        </h2>
        <p className="mb-12 text-center text-neutral-400">
          Не просто настраиваю рекламу — помогаю зарабатывать
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Photo placeholder */}
          <div
            className={`relative hidden items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/30 lg:flex transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="flex flex-col items-center justify-center p-12 text-center">
              <div className="mb-4 h-40 w-40 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
              <p className="text-neutral-500 text-sm">
                Здесь будет ваше фото
              </p>
            </div>
          </div>

          {/* Reasons list */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className={`flex gap-4 rounded-xl border border-neutral-800 bg-neutral-900/30 p-5 transition-all duration-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                    <Icon className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-white">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-neutral-400">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
