"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, TrendingDown, DollarSign, FileX } from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    text: "Есть реклама, но нет продаж",
  },
  {
    icon: TrendingDown,
    text: "Лиды есть, но они не покупают",
  },
  {
    icon: DollarSign,
    text: "Бюджет сливается, результата не видно",
  },
  {
    icon: FileX,
    text: "Таргетолог отчитывается, а прибыли нет",
  },
];

export function PainPointsSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Sequentially show each item
            painPoints.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...new Set([...prev, index])]);
              }, index * 200);
            });
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
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Узнаёте <span className="text-amber-500">себя</span>?
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={index}
                className={`flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all duration-500 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-500/10">
                  <Icon className="h-6 w-6 text-red-500" />
                </div>
                <p className="text-lg font-medium text-neutral-200">
                  {point.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
