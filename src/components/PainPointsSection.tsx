"use client";

import { useRef, useState, useEffect } from "react";
import { AlertCircle, ArrowRight, Target, Zap, TrendingDown, BarChart, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { PAIN_POINTS_CONTENT } from "@/lib/content";
import { useTheme } from "next-themes";

// Фиксированные позиции частиц для избежания hydration mismatch
const PARTICLE_POSITIONS = [
  { left: 12, top: 8 },
  { left: 45, top: 15 },
  { left: 78, top: 22 },
  { left: 23, top: 35 },
  { left: 67, top: 42 },
  { left: 5, top: 55 },
  { left: 89, top: 48 },
  { left: 34, top: 65 },
  { left: 56, top: 72 },
  { left: 91, top: 78 },
  { left: 18, top: 85 },
  { left: 72, top: 88 },
  { left: 40, top: 92 },
  { left: 8, top: 28 },
  { left: 95, top: 12 },
];

export function PainPointsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isDark = mounted ? theme === "dark" : true;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
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

  const icons = [TrendingDown, BarChart, Zap, Target];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % PAIN_POINTS_CONTENT.items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? PAIN_POINTS_CONTENT.items.length - 1 : prev - 1
    );
  };

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden px-4 py-24 md:py-32 transition-colors ${
        isDark 
          ? 'bg-gradient-to-b from-gray-950 via-black to-gray-950'
          : 'bg-gradient-to-b from-gray-50 via-white to-gray-100'
      }`}
    >
      {/* Фоновые эффекты */}
      <div className={`absolute inset-0 ${
        isDark
          ? 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/5 via-transparent to-transparent'
          : 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-50/20 via-transparent to-transparent'
      }`} />
      
      {/* Анимированные частицы */}
      <div className="absolute inset-0">
        {PARTICLE_POSITIONS.map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute h-[2px] w-[2px] rounded-full ${
              isDark ? 'bg-red-500/20' : 'bg-red-400/20'
            }`}
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Заголовок с анимацией */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-6">
            <div className={`relative inline-flex items-center gap-3 rounded-full px-5 py-2.5 ${
              isDark
                ? 'bg-gradient-to-r from-red-900/20 to-red-800/10 border border-red-800/30'
                : 'bg-gradient-to-r from-red-100 to-red-50 border border-red-200'
            }`}>
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`absolute inset-0 rounded-full ${
                    isDark ? 'bg-red-500/40' : 'bg-red-400/40'
                  } blur-sm`}
                />
                <div className={`relative h-3 w-3 rounded-full ${
                  isDark ? 'bg-red-400' : 'bg-red-500'
                }`} />
              </div>
              <span className={`text-sm font-semibold tracking-wider ${
                isDark ? 'text-red-300' : 'text-red-600'
              }`}>
                ПРОБЛЕМЫ БИЗНЕСА
              </span>
            </div>
          </div>
          
          <h2 className={`mb-4 text-4xl font-bold md:text-5xl lg:text-6xl ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {PAIN_POINTS_CONTENT.title}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className={`block h-1 w-24 mx-auto mt-4 rounded-full ${
                isDark 
                  ? 'bg-gradient-to-r from-red-500 to-red-600' 
                  : 'bg-gradient-to-r from-red-400 to-red-500'
              }`}
            />
          </h2>
          
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Самые распространенные сценарии, когда реклама не работает
          </p>
        </motion.div>

        {/* Десктопная версия - сетка */}
        <div className="hidden md:block">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-6 md:grid-cols-2 lg:gap-8"
          >
            {PAIN_POINTS_CONTENT.items.map((point, index) => {
              const Icon = icons[index];
              
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
                  <CardContent 
                    point={point} 
                    index={index} 
                    Icon={Icon}
                    isDark={isDark}
                    isInView={isInView}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Мобильная версия - карусель */}
        <div className="md:hidden relative">
          {/* Контейнер карусели */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
              style={{ width: `${PAIN_POINTS_CONTENT.items.length * 100}%` }}
            >
              {PAIN_POINTS_CONTENT.items.map((point, index) => {
                const Icon = icons[index];
                
                return (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{ scale: 1.02 }}
                      className="group relative"
                    >
                      <CardContent 
                        point={point} 
                        index={index} 
                        Icon={Icon}
                        isDark={isDark}
                        isInView={isInView}
                      />
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Навигация карусели */}
          <div className="mt-8 flex items-center justify-center gap-4">
            {/* Кнопка назад */}
            <button
              onClick={prevSlide}
              className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                isDark
                  ? 'border-red-800/30 bg-gray-800/50 hover:bg-gray-800/70'
                  : 'border-red-200 bg-white/80 hover:bg-white'
              }`}
            >
              <ChevronLeft className={`h-5 w-5 ${
                isDark ? 'text-red-400' : 'text-red-500'
              }`} />
            </button>

            {/* Индикаторы */}
            <div className="flex gap-2">
              {PAIN_POINTS_CONTENT.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? isDark
                        ? 'w-8 bg-red-500'
                        : 'w-8 bg-red-600'
                      : isDark
                        ? 'w-2 bg-gray-700'
                        : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Кнопка вперед */}
            <button
              onClick={nextSlide}
              className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                isDark
                  ? 'border-red-800/30 bg-gray-800/50 hover:bg-gray-800/70'
                  : 'border-red-200 bg-white/80 hover:bg-white'
              }`}
            >
              <ChevronRight className={`h-5 w-5 ${
                isDark ? 'text-red-400' : 'text-red-500'
              }`} />
            </button>
          </div>

          {/* Подпись под каруселью */}
          <p className={`mt-4 text-center text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {currentSlide + 1} из {PAIN_POINTS_CONTENT.items.length}
          </p>
        </div>

        {/* Футер секции */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className={`mt-16 rounded-2xl p-8 text-center ${
            isDark
              ? 'bg-gradient-to-r from-red-900/10 to-red-800/5 border border-red-800/20'
              : 'bg-gradient-to-r from-red-50 to-red-100/30 border border-red-200'
          }`}
        >
          <AlertCircle className={`mx-auto mb-4 h-12 w-12 ${
            isDark ? 'text-red-400' : 'text-red-500'
          }`} />
          <p className={`text-xl font-bold ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Узнали хотя бы одну проблему?
          </p>
          <p className={`mt-2 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Это значит, что <span className={`font-bold ${
              isDark ? 'text-red-400' : 'text-red-500'
            }`}>пора менять подход</span> к рекламе
          </p>
        </motion.div>
      </div>

      {/* Декоративные элементы */}
      <div className={`absolute left-1/4 top-20 h-64 w-64 rounded-full blur-3xl ${
        isDark ? 'bg-red-900/10' : 'bg-red-200/20'
      }`} />
      <div className={`absolute right-1/4 bottom-20 h-64 w-64 rounded-full blur-3xl ${
        isDark ? 'bg-red-800/10' : 'bg-red-300/20'
      }`} />
    </section>
  );
}

// Вынесенный компонент карточки для переиспользования
function CardContent({ 
  point, 
  index, 
  Icon, 
  isDark, 
  isInView 
}: { 
  point: string; 
  index: number; 
  Icon: React.ComponentType<{ className?: string }>;
  isDark: boolean;
  isInView: boolean;
}) {
  return (
    <>
      {/* Фон карточки с градиентом */}
      <div className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl ${
        isDark
          ? 'bg-gradient-to-br from-red-900/10 to-transparent'
          : 'bg-gradient-to-br from-red-100/30 to-transparent'
      }`} />
      
      <div className={`relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 group-hover:scale-[1.02] ${
        isDark
          ? 'bg-gradient-to-br from-gray-900/70 to-gray-900/40 border-red-800/20 group-hover:border-red-500/40'
          : 'bg-white/90 border-red-200/50 group-hover:border-red-300'
      }`}>
        {/* Номер */}
        <div className={`absolute left-6 top-6 text-6xl font-black leading-none ${
          isDark ? 'text-red-900/20' : 'text-red-100'
        }`}>
          0{index + 1}
        </div>
        
        {/* Иконка */}
        <div className="relative z-10 p-6">
          <div className="mb-4 flex items-center gap-4">
            <div className={`relative rounded-xl p-3 ${
              isDark
                ? 'bg-gradient-to-br from-red-500/20 to-red-600/10'
                : 'bg-gradient-to-br from-red-100 to-red-50'
            }`}>
              <div className={`absolute -inset-1 rounded-xl blur-md ${
                isDark ? 'bg-red-500/20' : 'bg-red-400/20'
              }`} />
              <Icon className={`relative h-7 w-7 ${
                isDark ? 'text-red-400' : 'text-red-500'
              }`} />
            </div>
            
            <div className={`h-8 w-px ${
              isDark ? 'bg-red-800/30' : 'bg-red-200'
            }`} />
          </div>
          
          {/* Текст проблемы */}
          <h3 className={`mb-3 text-xl font-bold ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {point}
          </h3>
          
          {/* Детализация */}
          <div className={`space-y-2 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <div className="flex items-center gap-2 text-sm">
              <div className={`h-1.5 w-1.5 rounded-full ${
                isDark ? 'bg-red-500/50' : 'bg-red-400/50'
              }`} />
              <span>Бюджет расходуется неэффективно</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className={`h-1.5 w-1.5 rounded-full ${
                isDark ? 'bg-red-500/50' : 'bg-red-400/50'
              }`} />
              <span>Нет четкой системы аналитики</span>
            </div>
          </div>
          
          {/* Индикатор "решаемо" */}
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
            className={`mt-6 h-1 rounded-full ${
              isDark 
                ? 'bg-gradient-to-r from-red-500/30 via-red-500 to-red-500/30' 
                : 'bg-gradient-to-r from-red-300/30 via-red-400 to-red-300/30'
            }`}
          />
        </div>
        
        {/* Футер карточки */}
        <div className={`border-t px-6 py-4 ${
          isDark ? 'border-red-900/30' : 'border-red-100'
        }`}>
          <div className="flex items-center justify-between">
            <span className={`text-sm font-medium ${
              isDark ? 'text-red-300/70' : 'text-red-500/70'
            }`}>
              Решается в 95% случаев
            </span>
            <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${
              isDark ? 'text-red-400' : 'text-red-500'
            }`} />
          </div>
        </div>
      </div>
    </>
  );
}