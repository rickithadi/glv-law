import { siteContent } from './content/siteContent';
import SEOHead from './components/SEOHead';
import Header from './components/Header';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import AboutSection from './components/AboutSection';
import PartnerSection from './components/PartnerSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const { header, hero, practiceAreas, about, partner, experience, contact, footer, seo } = siteContent;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
      />
      <Header {...header} />
      <main>
        <Hero {...hero} />
        <PracticeAreas {...practiceAreas} />
        <AboutSection {...about} />
        <PartnerSection {...partner} />
        <ExperienceSection {...experience} />
        <ContactSection {...contact} />
      </main>
      <Footer {...footer} />
    </div>
  );
}

export default App;
