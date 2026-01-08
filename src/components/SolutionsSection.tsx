"use client";

import { useEffect, useRef, useState } from "react";
import { 
  Target, 
  FileEdit, 
  FlaskConical, 
  Rocket, 
  TrendingUp 
} from "lucide-react";

const solutions = [
  {
    icon: Target,
    title: "Работа с воронкой целиком",
    description: "Анализирую весь путь клиента от рекламы до покупки",
  },
  {
    icon: FileEdit,
    title: "Докрутка оффера и посадочной",
    description: "Помогаю сделать предложение, от которого сложно отказаться",
  },
  {
    icon: FlaskConical,
    title: "Тестирование гипотез",
    description: "Нахожу работающие связки через системные тесты",
  },
  {
    icon: Rocket,
    title: "Масштабирование связок",
    description: "Увеличиваю бюджет только на то, что приносит прибыль",
  },
  {
    icon: TrendingUp,
    title: "Фокус на окупаемости",
    description: "Считаю не клики и охваты, а реальные деньги в кассе",
  },
];

export function SolutionsSection() {
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
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Как это <span className="text-amber-500">исправить</span>
        </h2>
        <p className="mb-12 text-center text-neutral-400">
          Системный подход вместо хаотичных действий
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className={`group rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 transition-all duration-500 hover:border-amber-500/50 hover:bg-neutral-900/50 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 transition-colors group-hover:bg-amber-500/20">
                  <Icon className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {solution.title}
                </h3>
                <p className="text-sm text-neutral-400">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
