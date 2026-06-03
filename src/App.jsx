import { useEffect, useRef } from 'react';
import GalaxyBackground      from './effects/GalaxyBackground';
import FloatingNav           from './components/FloatingNav';
import Hero                  from './components/Hero';
import TechTicker            from './components/TechTicker';
import SystemSpecs           from './components/SystemSpecs';
import TechStack             from './components/TechStack';
import DeployedArchitecture  from './components/DeployedArchitecture';
import SecureTransmission    from './components/SecureTransmission';
import Footer                from './components/Footer';

function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const move = (e) => {
      el.style.setProperty('--cx', `${e.clientX}px`);
      el.style.setProperty('--cy', `${e.clientY}px`);
      el.style.opacity = '1';
    };
    const hide = () => { el.style.opacity = '0'; };
    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseleave', hide);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', hide);
    };
  }, []);
  return <div className="cursor-glow" ref={ref} aria-hidden="true" />;
}

export default function App() {
  return (
    <>
      <CursorGlow />
      <FloatingNav />
      <GalaxyBackground />
      <div className="app">
        <main id="main-content">
          <Hero />
          <TechTicker />
          <SystemSpecs />
          <TechStack />
          <DeployedArchitecture />
          <SecureTransmission />
        </main>
        <Footer />
      </div>
    </>
  );
}
