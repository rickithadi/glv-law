import Hero from './components/Hero';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import { heroProps, headerProps, section1Props, section2Props, section3Props, section4Props, section5Props, footerProps } from './data/props';

function App() {
  return (
    <div className="App">
      <SEOHead />
      <Hero {...heroProps} />
      <Header {...headerProps} />
      <Section1 {...section1Props} />
      <Section2 {...section2Props} />
      <Section3 {...section3Props} />
      <Section4 {...section4Props} />
      <Section5 {...section5Props} />
      <Footer {...footerProps} />
    </div>
  );
}

export default App;
