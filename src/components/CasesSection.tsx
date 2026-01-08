"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TrendingUp, Users, ShoppingBag, ImageIcon } from "lucide-react";

const cases = [
  {
    icon: ShoppingBag,
    niche: "Интернет-магазин одежды",
    result: "ROAS 4.2",
    description: "С 0 до 2.5 млн ₸ выручки за 2 месяца. Средний чек вырос на 40%",
  },
  {
    icon: Users,
    niche: "Онлайн-школа английского",
    result: "CPL снижен в 3 раза",
    description: "Стоимость заявки с 3500 ₸ до 1100 ₸. Конверсия в оплату +25%",
  },
  {
    icon: TrendingUp,
    niche: "Стоматология, Астана",
    result: "47 записей за месяц",
    description: "Локальный бизнес. Средняя стоимость записи 2800 ₸",
  },
];

export function CasesSection() {
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
      className="bg-black px-4 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Реальные <span className="text-amber-500">кейсы</span>
        </h2>
        <p className="mb-12 text-center text-neutral-400">
          Результаты, которые говорят сами за себя
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon;
            return (
              <Card
                key={index}
                className={`border-neutral-800 bg-neutral-900/30 transition-all duration-500 hover:border-amber-500/50 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                      <Icon className="h-5 w-5 text-amber-500" />
                    </div>
                    <span className="text-sm font-medium text-neutral-400">
                      {caseItem.niche}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg bg-gradient-to-r from-amber-500/10 to-amber-600/5 p-4">
                    <p className="text-2xl font-bold text-amber-500">
                      {caseItem.result}
                    </p>
                  </div>
                  <p className="text-sm text-neutral-300">
                    {caseItem.description}
                  </p>
                  
                  {/* Screenshot placeholder */}
                  <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-neutral-700 bg-neutral-900/50">
                    <div className="flex flex-col items-center text-neutral-500">
                      <ImageIcon className="mb-2 h-8 w-8" />
                      <span className="text-xs">Скриншот кабинета</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
