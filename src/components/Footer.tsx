"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/content";
import { useTheme } from "next-themes";

// Фиксированные позиции частиц
const PARTICLE_POSITIONS = [
  { left: 3, top: 8 }, { left: 12, top: 22 }, { left: 25, top: 15 }, { left: 38, top: 35 },
  { left: 48, top: 18 }, { left: 62, top: 42 }, { left: 75, top: 28 }, { left: 88, top: 38 },
  { left: 95, top: 55 }, { left: 8, top: 62 }, { left: 22, top: 75 }, { left: 35, top: 85 },
  { left: 52, top: 68 }, { left: 68, top: 78 }, { left: 82, top: 88 }, { left: 92, top: 72 },
  { left: 15, top: 48 }, { left: 45, top: 58 }, { left: 72, top: 52 }, { left: 5, top: 92 },
];

export function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-t from-black via-gray-950 to-black'
        : 'bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900'
    }`}>
      {/* Фоновый градиент с эффектом волны */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.15),transparent_50%)]'
            : 'bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.25),transparent_50%)]'
        }`} />
        
        {/* Анимированные волны */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path 
              d="M0,80 C150,120 350,40 500,80 L500,00 L0,0 Z" 
              fill={isDark ? "#3B82F6" : "#60A5FA"}
            />
          </svg>
        </div>

        {/* Плавающие частицы */}
        {PARTICLE_POSITIONS.map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute h-[1px] w-[1px] rounded-full ${
              isDark ? 'bg-blue-400/30' : 'bg-white/30'
            }`}
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Основной контент */}
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            {/* Левая часть - контакты */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-center md:text-left"
            >
              {/* Логотип/Название */}
              <div className="mb-2">
                <h3 className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-white'
                }`}>
                  {SITE_CONFIG.siteName}
                </h3>
                <div className={`h-1 w-16 mt-2 rounded-full ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-400' 
                    : 'bg-gradient-to-r from-blue-400 to-blue-300'
                }`} />
              </div>

              {/* Контактные данные */}
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <MapPin className={`h-5 w-5 ${
                    isDark ? 'text-blue-400' : 'text-blue-300'
                  }`} />
                  <span className="text-sm text-white/80">
                    {SITE_CONFIG.legalAddress}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <Mail className={`h-5 w-5 ${
                    isDark ? 'text-blue-400' : 'text-blue-300'
                  }`} />
                  <span className="text-sm text-white/80">
                    {SITE_CONFIG.email}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <Globe className={`h-5 w-5 ${
                    isDark ? 'text-blue-400' : 'text-blue-300'
                  }`} />
                  <span className="text-sm text-white/80">
                    Казахстан • Астана • Алматы
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Правая часть - CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-right"
            >
              <h4 className={`mb-4 text-lg font-bold ${
                isDark ? 'text-white' : 'text-white'
              }`}>
                Готовы увеличить продажи?
              </h4>
              
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="group relative h-14 overflow-hidden rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 font-semibold hover:from-green-600 hover:to-green-700"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" fill="white" strokeWidth={0} />
                    Начать в WhatsApp
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </a>

              <p className={`mt-4 text-xs ${
                isDark ? 'text-white/60' : 'text-white/70'
              }`}>
                Ответ в течение 15 минут
              </p>
            </motion.div>
          </div>

          {/* Разделитель */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`my-8 h-px ${
              isDark 
                ? 'bg-gradient-to-r from-transparent via-blue-500/30 to-transparent' 
                : 'bg-gradient-to-r from-transparent via-blue-400/30 to-transparent'
            }`}
          />

          {/* Нижняя часть */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col items-center justify-between gap-4 md:flex-row"
          >
            <div className={`text-sm ${
              isDark ? 'text-white/60' : 'text-white/70'
            }`}>
              © {currentYear} {SITE_CONFIG.siteName}. Все права защищены
            </div>

            <div className={`flex items-center gap-6 text-sm ${
              isDark ? 'text-white/60' : 'text-white/70'
            }`}>
              <button className="hover:text-white transition-colors">
                Политика конфиденциальности
              </button>
              <button className="hover:text-white transition-colors">
                Договор оферты
              </button>
            </div>
          </motion.div>
        </div>

        {/* Декоративный элемент в углу */}
        <div className={`absolute right-0 bottom-0 h-32 w-32 ${
          isDark
            ? 'bg-gradient-to-tl from-blue-500/10 to-transparent'
            : 'bg-gradient-to-tl from-blue-400/20 to-transparent'
        }`} />
      </div>
    </footer>
  );
}