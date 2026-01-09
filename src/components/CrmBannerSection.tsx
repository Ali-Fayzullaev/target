"use client";

import { useRef, useState, useEffect } from "react";
import { Gift, CheckCircle, ArrowRight, Zap, TrendingUp, Shield } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CRM_BONUS_CONTENT, getWhatsAppUrl } from "@/lib/content";
import { useTheme } from "next-themes";
import Image from "next/image";

// Фиксированные позиции частиц
const PARTICLE_POSITIONS = [
  { left: 8, top: 12 },
  { left: 25, top: 28 },
  { left: 42, top: 18 },
  { left: 58, top: 35 },
  { left: 75, top: 22 },
  { left: 92, top: 45 },
  { left: 15, top: 55 },
  { left: 35, top: 68 },
  { left: 55, top: 78 },
  { left: 72, top: 62 },
  { left: 88, top: 85 },
  { left: 5, top: 88 },
];

export function CrmBannerSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;

  return (
    <section
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
          ? 'bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)]'
          : 'bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]'
      }`} />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border backdrop-blur-xl"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 58, 138, 0.05) 50%, rgba(59, 130, 246, 0.05) 100%)'
              : 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(239, 246, 255, 0.5) 50%, rgba(59, 130, 246, 0.08) 100%)',
            borderColor: isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.15)',
          }}
        >
          {/* Декоративные элементы */}
          <div className={`absolute -right-32 -top-32 h-96 w-96 rounded-full blur-3xl ${
            isDark ? 'bg-blue-500/10' : 'bg-blue-400/10'
          }`} />
          <div className={`absolute -bottom-32 -left-32 h-96 w-96 rounded-full blur-3xl ${
            isDark ? 'bg-blue-600/10' : 'bg-blue-500/10'
          }`} />

          {/* Плавающие частицы */}
          <div className="absolute inset-0">
            {PARTICLE_POSITIONS.map((pos, i) => (
              <motion.div
                key={i}
                className={`absolute h-[3px] w-[3px] rounded-full ${
                  isDark ? 'bg-blue-400/30' : 'bg-blue-500/30'
                }`}
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Левая колонка - логотип и заголовки */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="lg:w-2/5"
              >
                {/* Логотип CRM */}
                <div className="mb-6 flex items-center justify-center lg:justify-start">
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className={`absolute -inset-4 rounded-full ${
                        isDark ? 'border border-blue-500/20' : 'border border-blue-400/20'
                      }`}
                    />
                    <div className={`relative p-4 rounded-full ${
                      isDark
                        ? 'bg-gradient-to-br from-blue-900/30 to-blue-800/20'
                        : 'bg-gradient-to-br from-blue-100 to-blue-50'
                    }`}>
                      <div className="relative h-24 w-24">
                        <Image
                          src="/logo-raycon.png"
                          alt="Raycon CRM"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Бейдж */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2"
                  style={{
                    background: isDark
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.1))'
                      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.05))',
                    border: `1px solid ${isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}`,
                  }}
                >
                  <Gift className={`h-4 w-4 ${
                    isDark ? 'text-blue-400' : 'text-blue-500'
                  }`} />
                  <span className={`text-sm font-semibold ${
                    isDark ? 'text-blue-300' : 'text-blue-600'
                  }`}>
                    {CRM_BONUS_CONTENT.badge}
                  </span>
                </motion.div>

                {/* Заголовок */}
                <h2 className={`mb-3 text-3xl font-bold md:text-4xl ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {CRM_BONUS_CONTENT.title}
                </h2>

                {/* Подзаголовок */}
                <p className={`text-lg ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {CRM_BONUS_CONTENT.subtitle}
                </p>
              </motion.div>

              {/* Правая колонка - фичи и кнопка */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="lg:w-3/5"
              >
                {/* Фичи */}
                <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {CRM_BONUS_CONTENT.features.map((feature, index) => {
                    const icons = [TrendingUp, Zap, Shield, CheckCircle];
                    const Icon = icons[index] || CheckCircle;
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className={`flex items-center gap-3 rounded-xl p-4 ${
                          isDark
                            ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-800/20'
                            : 'bg-gradient-to-br from-blue-100/50 to-blue-50/30 border border-blue-200/50'
                        }`}
                      >
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                          isDark
                            ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/10'
                            : 'bg-gradient-to-br from-blue-100 to-blue-50'
                        }`}>
                          <Icon className={`h-5 w-5 ${
                            isDark ? 'text-blue-400' : 'text-blue-500'
                          }`} />
                        </div>
                        <span className={`font-medium ${
                          isDark ? 'text-gray-200' : 'text-gray-700'
                        }`}>
                          {feature}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Таймер акции */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.9 }}
                  className={`mb-8 rounded-xl p-4 text-center ${
                    isDark
                      ? 'bg-gradient-to-r from-blue-900/10 to-blue-800/5 border border-blue-800/20'
                      : 'bg-gradient-to-r from-blue-50 to-blue-100/30 border border-blue-200'
                  }`}
                >
                  <p className={`text-sm font-semibold mb-1 ${
                    isDark ? 'text-blue-300' : 'text-blue-600'
                  }`}>
                    🔥 АКЦИЯ ОГРАНИЧЕНА ПО ВРЕМЕНИ
                  </p>
                  <div className="flex justify-center gap-2">
                    {['14', '23', '59'].map((time, index) => (
                      <div key={index} className="text-center">
                        <div className={`text-xl font-bold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {time}
                        </div>
                        <div className={`text-xs ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {['дней', 'часов', 'минут'][index]}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Кнопка */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 }}
                  className="flex flex-col sm:flex-row items-center gap-4"
                >
                  <a 
                    href={getWhatsAppUrl("Хочу получить доступ к CRM бесплатно")} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      className={`group relative h-14 w-full overflow-hidden rounded-full px-8 text-base font-bold sm:w-auto ${
                        isDark
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                          : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                      }`}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {CRM_BONUS_CONTENT.ctaButton}
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </Button>
                  </a>
                  
                  <div className={`text-center text-xs ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Бесплатно на 14 дней • Без привязки карты • Можно отменить в любой момент
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Дополнительный баннер */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className={`mt-8 rounded-2xl p-6 text-center ${
            isDark
              ? 'bg-gradient-to-r from-blue-900/10 to-blue-800/5 border border-blue-800/20'
              : 'bg-gradient-to-r from-blue-50 to-blue-100/30 border border-blue-200'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <p className={`font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                💡 ВАЖНО: CRM работает только в паре с настройкой рекламы
              </p>
              <p className={`text-sm mt-1 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Получите комплексное решение: реклама + автоматизация продаж
              </p>
            </div>
            <div className={`text-sm font-semibold ${
              isDark ? 'text-blue-300' : 'text-blue-600'
            }`}>
              Экономия до 40% времени менеджера
            </div>
          </div>
        </motion.div>
      </div>

      {/* Декоративные элементы */}
      <div className={`absolute left-1/4 top-20 h-64 w-64 rounded-full blur-3xl ${
        isDark ? 'bg-blue-900/10' : 'bg-blue-200/20'
      }`} />
      <div className={`absolute right-1/4 bottom-20 h-64 w-64 rounded-full blur-3xl ${
        isDark ? 'bg-blue-800/10' : 'bg-blue-300/20'
      }`} />
    </section>
  );
}