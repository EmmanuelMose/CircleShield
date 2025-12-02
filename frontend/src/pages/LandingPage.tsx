import Hero from '../components/hero/Hero.tsx';
import About from '../components/about/About.tsx';
import CTA from '../components/cta/CTA.tsx';
import Footer from '../components/footer/Footer.tsx';
import Navbar from "../components/navbar/Navbar.tsx"


const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
