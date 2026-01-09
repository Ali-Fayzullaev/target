// src/components/CasesSection.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, ImageIcon, Zap, Target, BarChart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { CASES_CONTENT } from "@/lib/content";
import { useTheme } from "next-themes";

export function CasesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const caseIcons = [Zap, Target, BarChart];

  return (
    <section
      id="cases"
      ref={sectionRef}
      className={`relative overflow-hidden px-4 py-24 md:py-32 ${
        isDark 
          ? 'bg-gradient-to-b from-gray-950 via-black to-gray-950'
          : 'bg-gradient-to-b from-gray-50 via-white to-gray-100'
      }`}
    >
      {/* Фоновые элементы */}
      <div className={`absolute inset-0 ${
        isDark
          ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]'
          : 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]'
      }`} />

      <div className="relative mx-auto max-w-6xl">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-6">
            <div className={`relative inline-flex items-center gap-3 rounded-full px-5 py-2.5 ${
              isDark
                ? 'bg-gradient-to-r from-blue-900/20 to-blue-800/10 border border-blue-800/30'
                : 'bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200'
            }`}>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative"
              >
                <TrendingUp className={`h-5 w-5 ${
                  isDark ? 'text-blue-400' : 'text-blue-500'
                }`} />
              </motion.div>
              <span className={`text-sm font-semibold tracking-wider ${
                isDark ? 'text-blue-300' : 'text-blue-600'
              }`}>
                КЕЙСЫ
              </span>
            </div>
          </div>

          <h2 className={`mb-4 text-4xl font-bold md:text-5xl lg:text-6xl ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {CASES_CONTENT.title}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className={`block h-1 w-32 mx-auto mt-4 rounded-full ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500' 
                  : 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400'
              }`}
            />
          </h2>
        </motion.div>

        {/* Карточки кейсов */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {CASES_CONTENT.cases.map((caseItem, index) => {
            const Icon = caseIcons[index] || TrendingUp;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Фон с свечением */}
                <div className={`absolute -inset-0.5 rounded-2xl blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                  isDark
                    ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/10'
                    : 'bg-gradient-to-br from-blue-400/20 to-blue-500/10'
                }`} />

                <Card className={`relative h-full overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 group-hover:scale-[1.02] ${
                  isDark
                    ? 'bg-gradient-to-b from-gray-900/70 to-gray-900/40 border-blue-800/20 group-hover:border-blue-500/40'
                    : 'bg-white/90 border-blue-200/50 group-hover:border-blue-300'
                }`}>
                  <CardContent className="flex h-full flex-col p-6">
                    {/* Заголовок кейса */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`relative rounded-xl p-2 ${
                            isDark
                              ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/10'
                              : 'bg-gradient-to-br from-blue-100 to-blue-50'
                          }`}>
                            <Icon className={`h-5 w-5 ${
                              isDark ? 'text-blue-400' : 'text-blue-500'
                            }`} />
                          </div>
                          <span className={`text-sm font-semibold ${
                            isDark ? 'text-blue-300' : 'text-blue-600'
                          }`}>
                            {caseItem.niche}
                          </span>
                        </div>
                        <div className={`text-xs font-bold rounded-full px-2 py-1 ${
                          isDark
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-blue-100 text-blue-600'
                        }`}>
                          #{index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Результат */}
                    <div className={`mb-4 rounded-xl p-4 ${
                      isDark
                        ? 'bg-gradient-to-r from-blue-900/20 to-blue-800/10 border border-blue-800/20'
                        : 'bg-gradient-to-r from-blue-100/50 to-blue-50/30 border border-blue-200/50'
                    }`}>
                      <p className={`text-2xl font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {caseItem.result}
                      </p>
                      <p className={`mt-1 text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {caseItem.period}
                      </p>
                    </div>

                    {/* Бюджет */}
                    <div className={`mb-4 rounded-lg border p-3 ${
                      isDark
                        ? 'border-blue-800/20 bg-blue-900/10'
                        : 'border-blue-200 bg-blue-50/50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className={`text-xs font-medium ${
                            isDark ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            Бюджет → Выручка
                          </p>
                          <p className={`mt-1 font-semibold ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                            {caseItem.budget}
                          </p>
                        </div>
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className={`rounded-full p-1 ${
                            isDark
                              ? 'bg-green-500/20'
                              : 'bg-green-100'
                          }`}
                        >
                          <div className={`h-2 w-2 rounded-full ${
                            isDark ? 'bg-green-400' : 'bg-green-500'
                          }`} />
                        </motion.div>
                      </div>
                    </div>

                    {/* Описание */}
                    <div className="mb-6 grow">
                      <p className={`text-sm leading-relaxed ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {caseItem.description}
                      </p>
                    </div>

                    {/* Скриншот */}
                    <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border">
                      <div className={`absolute inset-0 ${
                        isDark
                          ? 'bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent'
                          : 'bg-gradient-to-t from-gray-200/80 via-gray-100/40 to-transparent'
                      }`} />
                      <div className={`relative flex flex-col items-center ${
                        isDark ? 'text-gray-500' : 'text-gray-400'
                      }`}>
                        <ImageIcon className="mb-2 h-8 w-8" />
                        <span className="text-xs">Скрин рекламного кабинета</span>
                      </div>
                    </div>

                    {/* Индикатор эффективности */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Эффективность</span>
                        <span className={`font-bold ${
                          isDark ? 'text-green-400' : 'text-green-500'
                        }`}>
                          {['95%', '92%', '98%'][index]}
                        </span>
                      </div>
                      <div className={`h-1 rounded-full ${
                        isDark ? 'bg-gray-800' : 'bg-gray-200'
                      }`}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: ['95%', '92%', '98%'][index] } : {}}
                          transition={{ delay: 0.3 + index * 0.1, duration: 1 }}
                          className={`h-full rounded-full ${
                            isDark
                              ? 'bg-gradient-to-r from-green-400 to-green-500'
                              : 'bg-gradient-to-r from-green-500 to-green-600'
                          }`}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Футер секции */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className={`mt-16 rounded-2xl p-8 text-center ${
            isDark
              ? 'bg-gradient-to-r from-blue-900/10 to-blue-800/5 border border-blue-800/20'
              : 'bg-gradient-to-r from-blue-50 to-blue-100/30 border border-blue-200'
          }`}
        >
          <p className={`text-xl font-bold ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Хотите такой же результат?
          </p>
          <p className={`mt-2 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Проанализируем ваш текущий бизнес и предложим стратегию роста
          </p>
        </motion.div>
      </div>

      {/* Декоративные элементы */}
      <div className={`absolute left-1/4 top-1/3 h-64 w-64 rounded-full blur-3xl ${
        isDark ? 'bg-blue-900/10' : 'bg-blue-200/20'
      }`} />
      <div className={`absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full blur-3xl ${
        isDark ? 'bg-blue-800/10' : 'bg-blue-300/20'
      }`} />
    </section>
  );
}