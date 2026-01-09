"use client";

import { useRef, useState, useEffect } from "react";
import { CheckCircle, Target, Zap, TrendingUp, BarChart, Shield, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { SOLUTIONS_CONTENT } from "@/lib/content";
import { useTheme } from "next-themes";

// Фиксированные позиции для плавающих элементов
const FLOATING_ELEMENTS = [
  { width: 80, height: 60, left: 10, top: 15 },
  { width: 120, height: 90, left: 85, top: 25 },
  { width: 70, height: 100, left: 25, top: 60 },
  { width: 100, height: 70, left: 70, top: 75 },
  { width: 90, height: 80, left: 45, top: 10 },
  { width: 60, height: 110, left: 5, top: 80 },
  { width: 110, height: 65, left: 90, top: 55 },
  { width: 75, height: 95, left: 55, top: 90 },
];

export function SolutionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
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
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const icons = [BarChart, Target, Zap, TrendingUp, Shield];

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`relative overflow-hidden px-4 py-24 md:py-32 ${
        isDark 
          ? 'bg-gradient-to-b from-black via-gray-950 to-gray-900'
          : 'bg-gradient-to-b from-white via-blue-50/20 to-gray-50'
      }`}
    >
      {/* Фон с геометрическими паттернами */}
      <div className={`absolute inset-0 ${
        isDark
          ? 'bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.08),transparent_70%)]'
          : 'bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.05),transparent_70%)]'
      }`}>
        {/* Сетка - используем CSS для простоты */}
        <div className={`absolute inset-0 opacity-[0.03] ${
          isDark ? 'bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]' 
          : 'bg-[linear-gradient(to_right,#ccc_1px,transparent_1px),linear-gradient(to_bottom,#ccc_1px,transparent_1px)]'
        }`} 
        style={{
          backgroundSize: '50px 50px'
        }}
        />
      </div>

      {/* Плавающие элементы */}
      <div className="absolute inset-0">
        {FLOATING_ELEMENTS.map((el, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              isDark ? 'bg-blue-500/5' : 'bg-blue-400/10'
            }`}
            style={{
              width: `${el.width}px`,
              height: `${el.height}px`,
              left: `${el.left}%`,
              top: `${el.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

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
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <CheckCircle className={`h-5 w-5 ${
                  isDark ? 'text-blue-400' : 'text-blue-500'
                }`} />
              </motion.div>
              <span className={`text-sm font-semibold tracking-wider ${
                isDark ? 'text-blue-300' : 'text-blue-600'
              }`}>
                РЕШЕНИЯ ПРОБЛЕМ
              </span>
            </div>
          </div>

          <h2 className={`mb-4 text-4xl font-bold md:text-5xl lg:text-6xl ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {SOLUTIONS_CONTENT.title}
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

          <p className={`mt-6 max-w-2xl mx-auto text-lg ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Системный подход к рекламе, который превращает траты в инвестиции
          </p>
        </motion.div>

        {/* Карточки решений */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {SOLUTIONS_CONTENT.items.map((solution, index) => {
            const Icon = icons[index] || CheckCircle;
            
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

                <div className={`relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 group-hover:scale-[1.02] ${
                  isDark
                    ? 'bg-gradient-to-b from-gray-900/70 to-gray-900/40 border-blue-800/20 group-hover:border-blue-500/40'
                    : 'bg-white/90 border-blue-200/50 group-hover:border-blue-300'
                }`}>
                  {/* Номер решения */}
                  <div className={`absolute right-6 top-6 text-5xl font-black leading-none ${
                    isDark ? 'text-blue-900/10' : 'text-blue-50'
                  }`}>
                    0{index + 1}
                  </div>

                  {/* Контент карточки */}
                  <div className="relative z-10 p-6">
                    {/* Иконка с анимацией */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`mb-6 inline-flex rounded-xl p-3 ${
                        isDark
                          ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/10'
                          : 'bg-gradient-to-br from-blue-100 to-blue-50'
                      }`}
                    >
                      <Icon className={`h-8 w-8 ${
                        isDark ? 'text-blue-400' : 'text-blue-500'
                      }`} />
                    </motion.div>

                    {/* Заголовок решения */}
                    <h3 className={`mb-3 text-xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {solution.title}
                    </h3>

                    {/* Описание */}
                    <p className={`mb-4 text-sm leading-relaxed ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {solution.description}
                    </p>

                    {/* Детали */}
                    <div className={`space-y-2 text-sm ${
                      isDark ? 'text-blue-300/70' : 'text-blue-600/70'
                    }`}>
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${
                          isDark ? 'bg-blue-400' : 'bg-blue-500'
                        }`} />
                        <span>Увеличивает конверсию до 3 раз</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${
                          isDark ? 'bg-blue-400' : 'bg-blue-500'
                        }`} />
                        <span>Сокращает стоимость лида на 40%</span>
                      </div>
                    </div>

                    {/* Прогресс бар */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ delay: 0.3 + index * 0.1, duration: 1.5 }}
                      className={`mt-6 h-1.5 rounded-full ${
                        isDark
                          ? 'bg-gradient-to-r from-blue-500/30 via-blue-500 to-blue-500/30'
                          : 'bg-gradient-to-r from-blue-400/30 via-blue-500 to-blue-400/30'
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${70 + index * 5}%` } : {}}
                        transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                        className={`h-full rounded-full ${
                          isDark
                            ? 'bg-gradient-to-r from-blue-400 to-blue-300'
                            : 'bg-gradient-to-r from-blue-500 to-blue-400'
                        }`}
                      />
                    </motion.div>
                  </div>

                  {/* Футер карточки */}
                  <div className={`border-t px-6 py-4 ${
                    isDark ? 'border-blue-900/30' : 'border-blue-100'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold tracking-wider ${
                        isDark ? 'text-blue-300/70' : 'text-blue-600/70'
                      }`}>
                        РЕЗУЛЬТАТ ЧЕРЕЗ 14 ДНЕЙ
                      </span>
                      <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-2 ${
                        isDark ? 'text-blue-400' : 'text-blue-500'
                      }`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Футер секции */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className={`mt-16 rounded-2xl p-8 text-center ${
            isDark
              ? 'bg-gradient-to-r from-blue-900/10 to-blue-800/5 border border-blue-800/20'
              : 'bg-gradient-to-r from-blue-50 to-blue-100/30 border border-blue-200'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <p className={`text-xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Готовы решить ваши проблемы с рекламой?
              </p>
              <p className={`mt-2 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Начнем с бесплатного аудита вашей рекламной кампании
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-8 py-3 font-semibold ${
                isDark
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
              }`}
            >
              Запросить аудит
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Декоративные элементы */}
      <div className={`absolute left-1/3 top-1/4 h-96 w-96 rounded-full blur-3xl ${
        isDark ? 'bg-blue-900/10' : 'bg-blue-200/20'
      }`} />
      <div className={`absolute right-1/3 bottom-1/4 h-96 w-96 rounded-full blur-3xl ${
        isDark ? 'bg-blue-800/10' : 'bg-blue-300/20'
      }`} />
    </section>
  );
}