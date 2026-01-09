"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, ArrowRight, Shield, Clock, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { FINAL_CTA_CONTENT, SITE_CONFIG, getWhatsAppUrl } from "@/lib/content";
import { useTheme } from "next-themes";

// Фиксированные позиции частиц
const PARTICLE_POSITIONS = [
  { left: 5, top: 10 },
  { left: 18, top: 25 },
  { left: 32, top: 15 },
  { left: 45, top: 40 },
  { left: 58, top: 20 },
  { left: 72, top: 50 },
  { left: 85, top: 30 },
  { left: 95, top: 45 },
  { left: 10, top: 60 },
  { left: 28, top: 75 },
  { left: 42, top: 85 },
  { left: 60, top: 70 },
  { left: 78, top: 88 },
  { left: 88, top: 65 },
  { left: 3, top: 92 },
];

export function FinalCTASection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Здравствуйте! Меня зовут ${name}. Мой номер: ${phone}. Хочу обсудить настройку рекламы.`;
    window.open(
      `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative overflow-hidden px-4 py-24 md:py-32 ${
        isDark 
          ? 'bg-gradient-to-b from-black via-gray-950 to-black'
          : 'bg-gradient-to-b from-white via-blue-50/10 to-white'
      }`}
    >
      {/* Фоновые элементы */}
      <div className={`absolute inset-0 ${
        isDark
          ? 'bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.1),transparent_70%)]'
          : 'bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.05),transparent_70%)]'
      }`} />

      {/* Плавающие частицы */}
      <div className="absolute inset-0">
        {PARTICLE_POSITIONS.map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute h-[2px] w-[2px] rounded-full ${
              isDark ? 'bg-blue-500/20' : 'bg-blue-400/20'
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

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Заголовок */}
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
                <MessageCircle className={`h-5 w-5 ${
                  isDark ? 'text-blue-400' : 'text-blue-500'
                }`} />
              </motion.div>
              <span className={`text-sm font-semibold tracking-wider ${
                isDark ? 'text-blue-300' : 'text-blue-600'
              }`}>
                НАЧАТЬ РАБОТУ
              </span>
            </div>
          </div>

          <h2 className={`mb-4 text-4xl font-bold md:text-5xl lg:text-6xl ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {FINAL_CTA_CONTENT.title}
            <br />
            <span className={`bg-gradient-to-r ${
              isDark
                ? 'from-blue-400 via-blue-500 to-blue-600'
                : 'from-blue-600 via-blue-700 to-blue-800'
            } bg-clip-text text-transparent`}>
              {FINAL_CTA_CONTENT.titleAccent}
            </span>
          </h2>
          
          <motion.span
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className={`block h-1 w-32 mx-auto mt-6 rounded-full ${
              isDark 
                ? 'bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500' 
                : 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400'
            }`}
          />

          <p className={`mt-8 text-lg max-w-xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {FINAL_CTA_CONTENT.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Левый блок - преимущества */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              {
                icon: Shield,
                title: "Работа по договору",
                description: "Гарантия результатов и защита интересов"
              },
              {
                icon: Clock,
                title: "Первая встреча через 24 часа",
                description: "Быстрый старт без долгого ожидания"
              },
              {
                icon: Users,
                title: "Персональный менеджер",
                description: "Ваш специалист на связи 24/7"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`flex items-start gap-4 rounded-xl p-4 ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800'
                    : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-gray-200'
                }`}
              >
                <div className={`rounded-lg p-2 ${
                  isDark
                    ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/10'
                    : 'bg-gradient-to-br from-blue-100 to-blue-50'
                }`}>
                  <item.icon className={`h-5 w-5 ${
                    isDark ? 'text-blue-400' : 'text-blue-500'
                  }`} />
                </div>
                <div>
                  <h3 className={`font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm mt-1 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Центральный блок - форма */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className={`relative overflow-hidden rounded-3xl border backdrop-blur-xl ${
              isDark
                ? 'bg-gradient-to-b from-gray-900/80 to-gray-900/60 border-blue-800/30'
                : 'bg-gradient-to-b from-white/90 to-gray-50/90 border-blue-200/50'
            }`}>
              {/* Фон формы с градиентом */}
              <div className={`absolute inset-0 ${
                isDark
                  ? 'bg-gradient-to-br from-blue-900/10 via-transparent to-blue-800/5'
                  : 'bg-gradient-to-br from-blue-50/30 via-transparent to-blue-100/20'
              }`} />

              <div className="relative z-10 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className={`mb-2 block text-sm font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {FINAL_CTA_CONTENT.formFields.name}
                      </label>
                      <Input
                        type="text"
                        placeholder="Ваше имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className={`h-12 border ${
                          isDark
                            ? 'border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:border-blue-500'
                            : 'border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:border-blue-500'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`mb-2 block text-sm font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {FINAL_CTA_CONTENT.formFields.phone}
                      </label>
                      <Input
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className={`h-12 border ${
                          isDark
                            ? 'border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:border-blue-500'
                            : 'border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:border-blue-500'
                        }`}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className={`group relative h-14 w-full overflow-hidden rounded-full text-base font-bold ${
                      isDark
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Send className="h-5 w-5" />
                      {FINAL_CTA_CONTENT.formButton}
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>

                  {/* WhatsApp кнопка */}
                  <div className="mt-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div className={`h-px flex-1 ${
                        isDark ? 'bg-gray-700' : 'bg-gray-300'
                      }`} />
                      <span className={`text-sm font-medium ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {FINAL_CTA_CONTENT.alternativeText}
                      </span>
                      <div className={`h-px flex-1 ${
                        isDark ? 'bg-gray-700' : 'bg-gray-300'
                      }`} />
                    </div>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        type="button"
                        size="lg"
                        className="group relative h-14 w-full overflow-hidden rounded-full bg-gradient-to-r from-green-500 to-green-600 text-base font-bold hover:from-green-600 hover:to-green-700"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <MessageCircle className="h-6 w-6" fill="white" strokeWidth={0} />
                          Написать в WhatsApp
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                      </Button>
                    </a>
                  </div>
                </form>

                {/* Конфиденциальность */}
                <div className={`mt-6 text-center text-xs ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className={`absolute left-1/4 bottom-10 h-64 w-64 rounded-full blur-3xl ${
        isDark ? 'bg-blue-900/10' : 'bg-blue-200/20'
      }`} />
      <div className={`absolute right-1/4 top-10 h-64 w-64 rounded-full blur-3xl ${
        isDark ? 'bg-blue-800/10' : 'bg-blue-300/20'
      }`} />
    </section>
  );
}