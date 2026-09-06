export type Language = 'ar' | 'en';
export type Theme = 'light' | 'dark';

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
}

export interface FeaturedRecipe {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  prepTime: string;
  cookTime: string;
  cookTimeEn: string;
  servings: string;
  servingsEn: string;
  story: string;
  storyEn: string;
  tip: string;
  tipEn: string;
  image: string;
}
