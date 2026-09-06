import { useApp } from '@/context/AppContext';
import { tr } from '@/i18n';


export default function Footer() {
  const { language } = useApp();

  return (
    <footer className="bg-zellige-950 text-zellige-300 py-12 border-t border-tagine-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-bold text-white text-lg block mb-1">
            {tr('brand', language)}
          </span>
          <p className="text-xs text-tagine-400">
            {tr('footerMade', language)}
          </p>
        </div>
        <div className="text-xs text-tagine-400">
          © {new Date().getFullYear()} — {tr('footerRights', language)}
        </div>
      </div>
    </footer>
  );
}
