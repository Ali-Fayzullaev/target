"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/content";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Главная", href: "#" },
    { label: "Услуги", href: "#services" },
    { label: "Кейсы", href: "#cases" },
    { label: "Обо мне", href: "#about" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? "bg-black/90 backdrop-blur-xl border-b border-gray-800/50"
              : "bg-white/90 backdrop-blur-xl border-b border-gray-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Логотип */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <Image src="/logo.png" alt="TargetLab" className=" rounded-full" width={40} height={40} />
              <span className={`text-xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
                Target<span className="text-blue-500">Lab</span>
              </span>
            </motion.div>

            {/* Навигация для десктопа */}
            <nav className="hidden md:flex items-center gap-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className={`text-sm font-medium transition-colors ${
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* Контакты и кнопка */}
            <div className="hidden md:flex items-center gap-4">
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
                isDark
                  ? "bg-blue-500/10 text-blue-300"
                  : "bg-blue-100 text-blue-600"
              }`}>
                <Phone className="h-3.5 w-3.5" />
                <span>+7 777 123 45 67</span>
              </div>

              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  className={`rounded-full ${
                    isDark
                      ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                      : "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                  }`}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Написать
                </Button>
              </a>
            </div>
            <ThemeToggle/>

            {/* Кнопка меню для мобильных */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                isDark
                  ? "hover:bg-gray-800"
                  : "hover:bg-gray-100"
              }`}
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${isDark ? "text-white" : "text-gray-900"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isDark ? "text-white" : "text-gray-900"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden overflow-hidden ${
                isDark ? "bg-gray-900 border-t border-gray-800" : "bg-white border-t border-gray-200"
              }`}
            >
              <div className="px-4 py-6 space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 text-base font-medium transition-colors ${
                      isDark
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}

                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-4">
                  <div className="flex items-center gap-2">
                    <Phone className={`h-4 w-4 ${isDark ? "text-blue-400" : "text-blue-500"}`} />
                    <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      +7 777 123 45 67
                    </span>
                  </div>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block"
                  >
                    <Button
                      size="sm"
                      className="w-full rounded-full bg-gradient-to-r from-green-500 to-green-600"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Написать в WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Отступ для фиксированного хедера */}
      <div className="h-16" />
    </>
  );
}