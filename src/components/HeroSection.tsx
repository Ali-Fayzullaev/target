"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Target, TrendingUp, Zap, Shield, FileText, Users } from "lucide-react";
import { motion } from "framer-motion";
import { HERO_CONTENT, getWhatsAppUrl } from "@/lib/content";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <section id="#" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 md:py-32">
      {/* Фон с градиентами */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}>
        {/* Акцентные градиенты */}
        <div className="absolute inset-0 opacity-30">
          <div className={`absolute left-0 top-0 h-1/3 w-1/3 ${
            isDark 
              ? 'bg-gradient-to-br from-blue-500/20 to-transparent blur-3xl'
              : 'bg-gradient-to-br from-blue-300/20 to-transparent blur-3xl'
          }`} />
          <div className={`absolute right-0 bottom-0 h-1/3 w-1/3 ${
            isDark
              ? 'bg-gradient-to-tl from-blue-600/20 to-transparent blur-3xl'
              : 'bg-gradient-to-tl from-blue-400/20 to-transparent blur-3xl'
          }`} />
        </div>

        {/* Геометрический узор */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
                <path d="M40 0 L80 20 L80 60 L40 80 L0 60 L0 20 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" className={isDark ? 'text-gray-800' : 'text-gray-300'} />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Главный заголовок */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          <span className="block">Ваша реклама не окупается?</span>
          <span className={`block ${
            isDark
              ? 'bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'
          }`}>
            Вы не платите
          </span>
        </motion.h1>

        {/* Подзаголовок */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`mb-8 text-xl font-medium ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Таргет, который приносит прибыль, а не отчеты
        </motion.p>

        {/* CTA кнопка */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className={`group relative h-14 overflow-hidden rounded-full px-10 text-base font-bold md:h-16 md:px-12 md:text-lg ${
                isDark
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Написать в WhatsApp
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              />
            </Button>
          </a>

          {/* Подпись под кнопкой */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`mt-4 text-sm font-medium ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            Без освоения бюджета. Только то, что приносит продажи
          </motion.p>
        </motion.div>

        {/* Карточки преимуществ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {[
            { 
              icon: Shield, 
              title: 'Опыт работы', 
              desc: '7+ лет в performance-маркетинге',
              color: 'from-blue-500 to-cyan-500'
            },
            { 
              icon: FileText, 
              title: 'Официальный договор', 
              desc: 'Работа с гарантиями по договору',
              color: 'from-blue-600 to-blue-700'
            },
            { 
              icon: Users, 
              title: 'Фокус на прибыль', 
              desc: 'Считаем ROI, а не просто отчеты',
              color: 'from-blue-700 to-blue-800'
            },
          ].map((feature, idx) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -5 }}
              className={`rounded-xl p-6 backdrop-blur-sm ${
                isDark
                  ? 'bg-gray-900/50 border border-gray-800'
                  : 'bg-white/80 border border-gray-200'
              }`}
            >
              <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${feature.color} p-3`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className={`mb-2 text-lg font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {feature.title}
              </h3>
              <p className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Блок статистики */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className={`mt-12 grid grid-cols-2 gap-6 rounded-xl p-6 md:grid-cols-4 ${
            isDark
              ? 'bg-gray-900/50 border border-gray-800'
              : 'bg-white/80 border border-gray-200'
          }`}
        >
          {[
            { value: '300%+', label: 'Средний ROI', icon: TrendingUp },
            { value: '95%', label: 'Успешных кейсов', icon: Target },
            { value: '14 дней', label: 'До первых результатов', icon: Zap },
            { value: '120+', label: 'Проектов', icon: Users },
          ].map((stat, idx) => (
            <div key={stat.label} className="text-center">
              <div className={`mb-2 flex justify-center ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className={`text-2xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.value}
              </div>
              <div className={`text-xs font-medium ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Декоративные элементы */}
      <div className={`absolute left-5 top-1/4 h-48 w-48 rounded-full blur-2xl ${
        isDark ? 'bg-blue-500/10' : 'bg-blue-300/10'
      }`} />
      <div className={`absolute right-5 bottom-1/4 h-56 w-56 rounded-full blur-2xl ${
        isDark ? 'bg-blue-600/10' : 'bg-blue-400/10'
      }`} />

      {/* Индикатор скролла */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className={`text-xs font-medium ${
            isDark ? 'text-gray-500' : 'text-gray-400'
          }`}>
            Смотреть дальше
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`h-8 w-5 rounded-full border ${
              isDark ? 'border-gray-700' : 'border-gray-300'
            }`}
          >
            <div className={`mx-auto mt-2 h-2 w-1 rounded-full ${
              isDark ? 'bg-gray-600' : 'bg-gray-400'
            }`} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}