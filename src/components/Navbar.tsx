import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Languages, Sun, Moon, Palette } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useContent, useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
  const { navLinks } = useContent();
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const themes = ["warm", "cream", "dark"] as const;
  const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
  const ThemeIcon = theme === "warm" ? Sun : theme === "cream" ? Palette : Moon;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-colors duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-lg font-bold text-gray-900 tracking-tight"
          >
            Alex Chen
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand-700 bg-brand-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="w-px h-5 bg-gray-200 mx-2" />
            <button
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              aria-label={language === "en" ? "Switch to Chinese" : "切换到英文"}
            >
              {language === "en" ? "中文" : "EN"}
            </button>
            <button
              onClick={() => setTheme(nextTheme)}
              className="px-3 py-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              aria-label={`Switch to ${nextTheme} theme`}
            >
              <ThemeIcon size={16} />
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-brand-700 bg-brand-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="border-t border-gray-100 pt-3 mt-3 space-y-1">
                <button
                  onClick={() => setTheme(nextTheme)}
                  className="flex items-center gap-2 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <ThemeIcon size={16} />
                  {theme === "warm" ? "Warm" : theme === "cream" ? "Cream" : "Dark"}
                </button>
                <button
                  onClick={() => setLanguage(language === "en" ? "zh" : "en")}
                  className="flex items-center gap-2 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <Languages size="16" />
                  {language === "en" ? "中文" : "English"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
