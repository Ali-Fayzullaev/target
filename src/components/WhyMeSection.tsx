// src/components/WhyMeSection.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { CheckCircle, User, Award, TrendingUp, Shield, FileText, Target, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { WHY_ME_CONTENT } from "@/lib/content";
import { useTheme } from "next-themes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export function WhyMeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const isDark = mounted ? theme === "dark" : true;

  return (
    <section
      id="about"
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
          ? 'bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]'
          : 'bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]'
      }`} />
      
      {/* Декоративные элементы */}
      <div className={`absolute left-1/4 top-1/3 h-64 w-64 rounded-full blur-3xl ${
        isDark ? 'bg-blue-900/10' : 'bg-blue-200/20'
      }`} />
      <div className={`absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full blur-3xl ${
        isDark ? 'bg-blue-800/10' : 'bg-blue-300/20'
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
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative"
              >
                <Award className={`h-5 w-5 ${
                  isDark ? 'text-blue-400' : 'text-blue-500'
                }`} />
              </motion.div>
              <span className={`text-sm font-semibold tracking-wider ${
                isDark ? 'text-blue-300' : 'text-blue-600'
              }`}>
                ПОЧЕМУ Я
              </span>
            </div>
          </div>

          <h2 className={`mb-4 text-4xl font-bold md:text-5xl lg:text-6xl ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {WHY_ME_CONTENT.title}
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
            Профессиональный подход с гарантированными результатами
          </p>
        </motion.div>

        {/* Десктопная версия */}
        <div className="hidden md:grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Левая колонка - фото и статистика */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative"
          >
            <ProfileCard isDark={isDark} isInView={isInView} />
          </motion.div>

          {/* Правая колонка - преимущества */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <FeaturesList isDark={isDark} isInView={isInView} />
          </motion.div>
        </div>

        {/* Мобильная версия */}
        <div className="md:hidden">
          {/* Профиль на мобильных - всегда первый */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative mb-8"
          >
            <ProfileCard isDark={isDark} isInView={isInView} />
          </motion.div>

          {/* Преимущества в карусели shadcn */}
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2">
                {WHY_ME_CONTENT.features.map((feature, index) => {
                  const icons = [Target, Zap, Shield, CheckCircle];
                  const Icon = icons[index] || CheckCircle;
                  
                  return (
                    <CarouselItem key={index} className="pl-2">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        className="group relative"
                      >
                        <FeatureCard 
                          feature={feature} 
                          index={index} 
                          Icon={Icon}
                          isDark={isDark}
                        />
                      </motion.div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              
              {/* Навигация карусели */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <CarouselPrevious 
                  className={`static translate-y-0 h-10 w-10 rounded-full border ${
                    isDark
                      ? 'border-blue-800/30 bg-gray-800/50 hover:bg-gray-800/70 text-blue-400'
                      : 'border-blue-200 bg-white/80 hover:bg-white text-blue-500'
                  }`}
                />
                
                {/* Индикаторы */}
                <div className="flex gap-2">
                  {Array.from({ length: count }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        current === index
                          ? isDark
                            ? 'w-8 bg-blue-500'
                            : 'w-8 bg-blue-600'
                          : isDark
                            ? 'w-2 bg-gray-700'
                            : 'w-2 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <CarouselNext 
                  className={`static translate-y-0 h-10 w-10 rounded-full border ${
                    isDark
                      ? 'border-blue-800/30 bg-gray-800/50 hover:bg-gray-800/70 text-blue-400'
                      : 'border-blue-200 bg-white/80 hover:bg-white text-blue-500'
                  }`}
                />
              </div>
              
              {/* Подпись под каруселью */}
              <p className={`mt-4 text-center text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {current + 1} из {count}
              </p>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

// Компонент профильной карточки
function ProfileCard({ isDark, isInView }: { isDark: boolean; isInView: boolean }) {
  const icons = [TrendingUp, Target, Shield, FileText];
  
  return (
    <>
      <div className={`absolute -inset-0.5 rounded-3xl blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
        isDark
          ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/10'
          : 'bg-gradient-to-br from-blue-400/20 to-blue-500/10'
      }`} />

      <div className={`relative overflow-hidden rounded-3xl border backdrop-blur-sm transition-all duration-500 group-hover:scale-[1.02] ${
        isDark
          ? 'bg-gradient-to-b from-gray-900/70 to-gray-900/40 border-blue-800/20 group-hover:border-blue-500/40'
          : 'bg-white/90 border-blue-200/50 group-hover:border-blue-300'
      }`}>
        <div className="p-6 md:p-8">
          {/* Фото профиля */}
          <div className="relative mb-8">
            <div className="relative mx-auto h-40 w-40 md:h-48 md:w-48">
              {/* Внешний круг с анимацией */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`absolute inset-0 rounded-full border-2 ${
                  isDark
                    ? 'border-blue-500/30 border-t-blue-400/50'
                    : 'border-blue-400/30 border-t-blue-500/50'
                }`}
              />
              
              {/* Внутренний круг */}
              <div className={`absolute inset-4 rounded-full border ${
                isDark
                  ? 'border-blue-600/20 bg-gradient-to-br from-blue-900/30 to-blue-800/20'
                  : 'border-blue-300/30 bg-gradient-to-br from-blue-100/50 to-blue-50/30'
              }`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`rounded-full p-5 md:p-6 ${
                    isDark
                      ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/10'
                      : 'bg-gradient-to-br from-blue-100 to-blue-50'
                  }`}>
                    <User className={`h-16 w-16 md:h-20 md:w-20 ${
                      isDark ? 'text-blue-400' : 'text-blue-500'
                    }`} />
                  </div>
                </div>
              </div>
            </div>

            {/* Подпись под фото */}
            <div className="mt-6 text-center">
              <h3 className={`text-lg md:text-xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Ваш персональный таргетолог
              </h3>
              <p className={`mt-2 text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Специалист с 7+ годами опыта в performance-маркетинге
              </p>
            </div>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {WHY_ME_CONTENT.stats.map((stat, index) => {
              const Icon = icons[index];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-xl p-3 md:p-4 text-center ${
                    isDark
                      ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-800/20'
                      : 'bg-gradient-to-br from-blue-100/50 to-blue-50/30 border border-blue-200/50'
                  }`}
                >
                  <div className={`mb-2 inline-flex rounded-lg p-1.5 md:p-2 ${
                    isDark
                      ? 'bg-blue-500/20'
                      : 'bg-blue-500/10'
                  }`}>
                    <Icon className={`h-4 w-4 md:h-5 md:w-5 ${
                      isDark ? 'text-blue-400' : 'text-blue-500'
                    }`} />
                  </div>
                  <div className={`text-xl md:text-2xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`mt-1 text-xs font-medium ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Дополнительная информация */}
          <div className={`mt-6 rounded-xl p-4 ${
            isDark
              ? 'bg-gradient-to-r from-blue-900/10 to-blue-800/5 border border-blue-800/20'
              : 'bg-gradient-to-r from-blue-50 to-blue-100/30 border border-blue-200'
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <div className={`text-sm font-semibold ${
                  isDark ? 'text-blue-300' : 'text-blue-600'
                }`}>
                  Гарантия в договоре
                </div>
                <div className={`text-xs ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Фиксированные сроки и результаты
                </div>
              </div>
              <CheckCircle className={`h-5 w-5 ${
                isDark ? 'text-green-400' : 'text-green-500'
              }`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Компонент списка преимуществ (для десктопа)
function FeaturesList({ isDark, isInView }: { isDark: boolean; isInView: boolean }) {
  return (
    <div className="flex h-full flex-col gap-4">
      {WHY_ME_CONTENT.features.map((feature, index) => {
        const icons = [Target, Zap, Shield, CheckCircle];
        const Icon = icons[index] || CheckCircle;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            whileHover={{ 
              x: 5,
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="group relative flex-1"
          >
            <FeatureCard 
              feature={feature} 
              index={index} 
              Icon={Icon}
              isDark={isDark}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

// Компонент карточки преимущества
function FeatureCard({ 
  feature, 
  index, 
  Icon, 
  isDark 
}: { 
  feature: string; 
  index: number; 
  Icon: React.ComponentType<{ className?: string }>;
  isDark: boolean;
}) {
  return (
    <>
      {/* Фон карточки */}
      <div className={`absolute inset-0 rounded-2xl blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
        isDark
          ? 'bg-gradient-to-r from-blue-500/10 to-blue-600/5'
          : 'bg-gradient-to-r from-blue-400/10 to-blue-500/5'
      }`} />

      <div className={`relative flex items-center gap-4 rounded-2xl border p-5 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-500/30 mt-3 mx-auto w-full ${
        isDark
          ? 'bg-gradient-to-br from-gray-900/50 to-gray-900/30 border-blue-800/20'
          : 'bg-white/90 border-blue-200/50'
      }`}>
        {/* Номер */}
        <div className={`absolute -left-2 -top-2 h-7 w-7 md:h-8 md:w-8 rounded-full text-xs md:text-sm font-bold flex items-center justify-center ${
          isDark
            ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
            : 'bg-gradient-to-br from-blue-600 to-blue-700 text-white'
        }`}>
          {index + 1}
        </div>

        {/* Иконка */}
        <div className={`relative z-10 flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl ${
          isDark
            ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/10'
            : 'bg-gradient-to-br from-blue-100 to-blue-50'
        }`}>
          <Icon className={`h-5 w-5 md:h-6 md:w-6 ${
            isDark ? 'text-blue-400' : 'text-blue-500'
          }`} />
        </div>

        {/* Текст */}
        <div className="flex-1">
          <h3 className={`mb-2 text-base md:text-lg font-semibold ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {feature}
          </h3>
          
          {/* Дополнительное описание */}
          <p className={`text-xs md:text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {[
              'Опыт работы с более чем 120 проектами разных масштабов',
              'Фокус исключительно на ROI и прибыли клиента',
              'Юридическая защита и прозрачные условия сотрудничества',
              'Персональный подход и регулярная отчетность'
            ][index]}
          </p>
        </div>

        {/* Стрелка */}
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
          className={`hidden md:block opacity-0 group-hover:opacity-100 transition-opacity ${
            isDark ? 'text-blue-400' : 'text-blue-500'
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </>
  );
}