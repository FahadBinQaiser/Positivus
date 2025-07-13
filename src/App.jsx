import './App.css';
import CaseStudy from './caseStudy/case_study';
import Cta from './cta/cta';
import Navbar from './navbar/Navbar';
import HeroSection from './heroSection/heroSection';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cta />
      <CaseStudy />
    </>
  );
}

export default App;
