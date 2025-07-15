import './App.css';
import CaseStudy from './caseStudy/case_study';
import Cta from './cta/cta';
import Navbar from './navbar/Navbar';
import HeroSection from './heroSection/HeroSection';
import LogoSection from './logoSection/LogoSection'; 
import Services from './services/Services';
import WorkingProcess from './workingProcess/WorkingProcess';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoSection />
      <Services />
      <Cta />
      <CaseStudy />
      <WorkingProcess />
    </>
  );
}

export default App;
