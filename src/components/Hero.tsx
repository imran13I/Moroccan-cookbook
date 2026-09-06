import { useApp } from '@/context/AppContext';
import { tr } from '@/i18n';
import { BUY_URL } from '@/constants';
import { ShoppingBag, BookOpen, Star } from 'lucide-react';

export default function Hero() {
  const { language } = useApp();

  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-tagine-50/50 to-white dark:from-zellige-950 dark:to-zellige-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-right rtl:lg:text-right ltr:lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-100 dark:bg-saffron-950/50 border border-saffron-200 dark:border-saffron-800 text-saffron-800 dark:text-saffron-300 text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-saffron-500 text-saffron-500" />
              <span>{tr('heroBadge', language)}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zellige-900 dark:text-white leading-[1.15]">
              {tr('heroTitle', language)}
            </h1>

            <p className="text-lg text-tagine-700 dark:text-tagine-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {tr('heroSubtitle', language)}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-saffron-500 to-terracotta-600 text-white font-bold text-base shadow-xl shadow-saffron-500/25 hover:scale-105 transition-transform"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>{tr('heroCta', language)}</span>
              </a>

              <a
                href="#featured"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border-2 border-tagine-200 dark:border-tagine-800 text-zellige-900 dark:text-saffron-50 font-semibold text-base hover:bg-tagine-100/50 dark:hover:bg-tagine-900/50 transition-colors"
              >
                <BookOpen className="w-5 h-5 text-saffron-500" />
                <span>{tr('heroCtaSecondary', language)}</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-tagine-200 dark:border-tagine-800 max-w-lg mx-auto lg:mx-0">
              <div>
                <span className="block text-2xl font-black text-saffron-600 dark:text-saffron-400">٥٠</span>
                <span className="text-xs text-tagine-600 dark:text-tagine-400 font-medium">{tr('heroStat1', language)}</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-terracotta-600 dark:text-terracotta-400">١٢+</span>
                <span className="text-xs text-tagine-600 dark:text-tagine-400 font-medium">{tr('heroStat2', language)}</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-zellige-700 dark:text-zellige-400">٧</span>
                <span className="text-xs text-tagine-600 dark:text-tagine-400 font-medium">{tr('heroStat3', language)}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-saffron-500 to-terracotta-600 opacity-30 blur-xl animate-pulse"></div>
              <div className="relative rounded-3xl overflow-hidden border-2 border-tagine-200 dark:border-tagine-800 shadow-2xl bg-white dark:bg-zellige-900">
                <img
                  src="https://images.pexels.com/photos/998244/pexels-photo-998244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Moroccan Tagine"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
