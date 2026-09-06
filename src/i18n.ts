import type { Language } from './types';

interface Dict {
  [key: string]: { ar: string; en: string };
}

const t: Dict = {
  brand: { ar: 'كتاب الطبخ المغربي الأصيل', en: 'Authentic Moroccan Cookbook' },
  brandTag: { ar: '٥٠ وصفة حقيقية من المطبخ المغربي', en: '50 Real Recipes from Moroccan Cuisine' },
  navAbout: { ar: 'عن الكتاب', en: 'About the Book' },
  navCategories: { ar: 'التصنيفات', en: 'Categories' },
  navFeatured: { ar: 'وصفات مميزة', en: 'Featured Recipes' },
  navBuy: { ar: 'اشترِ الآن', en: 'Buy Now' },
  langToggle: { ar: 'EN', en: 'ع' },
  themeLight: { ar: 'الوضع الفاتح', en: 'Light Mode' },
  themeDark: { ar: 'الوضع الداكن', en: 'Dark Mode' },
  heroBadge: { ar: 'إصدار جديد ٢٠٢٦', en: 'New Edition 2026' },
  heroTitle: { ar: 'كتاب الطبخ المغربي الأصيل', en: 'Authentic Moroccan Cookbook' },
  heroSubtitle: {
    ar: '٥٠ وصفة حقيقية من المطبخ المغربي، من تاريخ عريق يمتد لأكثر من ١٢ قرناً، تجمع بين بهارات رأس الحانوت والأواني الفخارية التقليدية',
    en: '50 authentic, tested recipes from Moroccan cuisine, rooted in over 12 centuries of culinary history, featuring Ras el Hanout spices and traditional clay tagines',
  },
  heroCta: { ar: 'اشترِ الكتاب الآن', en: 'Get the Book Now' },
  heroCtaSecondary: { ar: 'تصفّح الوصفات', en: 'Browse Recipes' },
  heroStat1: { ar: 'وصفة أصيلة', en: 'Authentic Recipes' },
  heroStat2: { ar: 'قرناً من التاريخ', en: 'Centuries of History' },
  heroStat3: { ar: 'تصنيف غذائي', en: 'Food Categories' },
  aboutEyebrow: { ar: 'عن المنتج', en: 'About the Product' },
  aboutTitle: { ar: 'كتاب يحفظ تراث المطبخ المغربي', en: 'A Book That Preserves Moroccan Culinary Heritage' },
  aboutOverview: { ar: 'نظرة عامة', en: 'Book Overview' },
  aboutOverviewText: {
    ar: 'يحتوي الكتاب على ٥٠ وصفة أصيلة ومجرّبة من جميع مناطق المغرب، متجذرة في تاريخ طهي غني يمتد لأكثر من ١٢ قرناً. يسلّط الضوء على البهارات الفريدة مثل رأس الحانوت، والأواني الفخارية التقليدية (الطواجين)، و«الدغميرة»، والكسكس الخفيف، و«الشرمولة».',
    en: 'The book contains 50 authentic, tested recipes from all regions of Morocco, rooted in a rich culinary history spanning over 12 centuries. It highlights unique spices like Ras el Hanout, traditional clay tagines, "Daghmira," light couscous, and "Charmoula."',
  },
  aboutStructure: { ar: 'البنية والتصنيفات', en: 'Structure & Categories' },
  aboutStructureText: {
    ar: 'مجمّعة بعناية في تصنيفات واضحة لتسهيل الوصول: الطواجن، الكسكس، الشوربات، السلطات، المخبوزات، السمك، والحلويات.',
    en: 'Neatly grouped into clear categories for easy access: Tagines, Couscous, Soups, Salads, Baked Goods, Fish, and Desserts.',
  },
  aboutDetails: { ar: 'تفاصيل الوصفة', en: 'Recipe Details' },
  aboutDetailsText: {
    ar: 'كل وصفة تتضمن: أوقات التحضير والطهي، عدد الحصص، قصة فريدة للطبق، ونصائح من طهاة محترفين مثل استخدام المنتجات الطازجة وزيت الزيتون البكر والسمن beldi.',
    en: 'Each recipe includes: preparation and cooking times, serving sizes, a unique dish story, and professional chef tips — such as using fresh produce, virgin olive oil, and beldi ghee.',
  },
  featuredEyebrow: { ar: 'وصفات مختارة', en: 'Featured Recipes' },
  featuredTitle: { ar: 'أشهر وصفات الكتاب', en: 'Iconic Recipes from the Book' },
  featuredSubtitle: {
    ar: 'تعرّف على نماذج من الوصفات التي يقدّمها الكتاب، من طواجن فاس إلى حلويات رمضان',
    en: 'Discover sample recipes from the book, from Fez tagines to Ramadan sweets',
  },
  prepTime: { ar: 'وقت التحضير', en: 'Prep Time' },
  cookTime: { ar: 'وقت الطهي', en: 'Cook Time' },
  servings: { ar: 'الحصص', en: 'Servings' },
  story: { ar: 'قصة الطبق', en: 'Dish Story' },
  chefTip: { ar: 'نصيحة الشيف', en: "Chef's Tip" },
  ctaTitle: { ar: 'ابدأ رحلتك في المطبخ المغربي', en: 'Begin Your Moroccan Culinary Journey' },
  ctaSubtitle: {
    ar: 'احصل على نسختك من كتاب الطبخ المغربي الأصيل واستمتع بـ ٥٠ وصفة حقيقية',
    en: 'Get your copy of the Authentic Moroccan Cookbook and enjoy 50 real recipes',
  },
  ctaButton: { ar: 'اشترِ الكتاب الآن', en: 'Buy the Book Now' },
  footerRights: { ar: 'جميع الحقوق محفوظة', en: 'All rights reserved' },
  footerMade: { ar: 'صُنع بشغف للمطبخ المغربي', en: 'Crafted with passion for Moroccan cuisine' },
};

export function tr(key: string, lang: Language): string {
  const entry = t[key];
  if (!entry) return key;
  return entry[lang];
}
