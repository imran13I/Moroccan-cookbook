import { useApp } from '@/context/AppContext';
import { tr } from '@/i18n';
import { BUY_URL } from '@/constants';
import { ShoppingBag } from 'lucide-react';

export default function CTA() {
  const { language } = useApp();

    return (
        <section className="py-20 bg-gradient-to-r from-saffron-500 to-terracotta-600 text-white relative overflow-hidden">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
                      <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                                {tr('ctaTitle', language)}
                                        </h2>
                                                <p className="text-lg text-saffron-100 max-w-2xl mx-auto">
                                                          {tr('ctaSubtitle', language)}
                                                                  </p>
                                                                          <div>
                                                                                    <a
                                                                                                href={BUY_URL}
                                                                                                            target="_blank"
                                                                                                                        rel="noopener noreferrer"
                                                                                                                                    className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-zellige-900 font-bold text-lg shadow-2xl hover:bg-tagine-50 transition-all transform hover:scale-105"
                                                                                                                                              >
                                                                                                                                                          <ShoppingBag className="w-5 h-5 text-saffron-600" />
                                                                                                                                                                      <span>{tr('ctaButton', language)}</span>
                                                                                                                                                                                </a>
                                                                                                                                                                                        </div>
                                                                                                                                                                                              </div>
                                                                                                                                                                                                  </section>
                                                                                                                                                                                                    );
                                                                                                                                                                                                    }
                                                                                                                                                                                                    
