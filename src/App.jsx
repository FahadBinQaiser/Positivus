import './App.css';
import CaseStudy from './caseStudy/case_study';
import Cta from './cta/cta';
import Navbar from './navbar/Navbar';
import HeroSection from './heroSection/HeroSection';
import LogoSection from './logoSection/LogoSection'; 

function App() {
  return (
    <>
      <Navbar />
      <LogoSection />
      <HeroSection />
      <Cta />
      <CaseStudy />
    </>
  );
}

export default App;
