import { useApp } from '@/context/AppContext';
import { tr } from '@/i18n';
import { BookOpen, Layers, Sparkles } from 'lucide-react';

export default function About() {
  const { language } = useApp();

  return (
    <section id="about" className="py-20 bg-white dark:bg-zellige-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-saffron-600 dark:text-saffron-400 font-bold text-sm tracking-wider uppercase block mb-3">
            {tr('aboutEyebrow', language)}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zellige-900 dark:text-white">
            {tr('aboutTitle', language)}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-tagine-50/50 dark:bg-zellige-950/50 border border-tagine-100 dark:border-tagine-900/50 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-saffron-500/10 text-saffron-600 flex items-center justify-center font-bold text-xl">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zellige-900 dark:text-saffron-50">
              {tr('aboutOverview', language)}
            </h3>
            <p className="text-tagine-700 dark:text-tagine-300 text-sm leading-relaxed">
              {tr('aboutOverviewText', language)}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-tagine-50/50 dark:bg-zellige-950/50 border border-tagine-100 dark:border-tagine-900/50 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-terracotta-500/10 text-terracotta-600 flex items-center justify-center font-bold text-xl">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zellige-900 dark:text-saffron-50">
              {tr('aboutStructure', language)}
            </h3>
            <p className="text-tagine-700 dark:text-tagine-300 text-sm leading-relaxed">
              {tr('aboutStructureText', language)}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-tagine-50/50 dark:bg-zellige-950/50 border border-tagine-100 dark:border-tagine-900/50 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-zellige-500/10 text-zellige-600 dark:text-zellige-400 flex items-center justify-center font-bold text-xl">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zellige-900 dark:text-saffron-50">
              {tr('aboutDetails', language)}
            </h3>
            <p className="text-tagine-700 dark:text-tagine-300 text-sm leading-relaxed">
              {tr('aboutDetailsText', language)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
