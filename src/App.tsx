import { AppProvider } from '@/context/AppContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedRecipes from '@/components/FeaturedRecipes';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white dark:bg-zellige-950 text-zellige-900 dark:text-saffron-50 font-sans antialiased transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <FeaturedRecipes />
          <CTA />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
