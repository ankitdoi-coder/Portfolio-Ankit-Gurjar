import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickStats from './components/QuickStats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Freelance from './components/Freelance';
import Services from './components/Services';
import Process from './components/Process';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main id="home">
        <Hero />
        <QuickStats />
        <Skills />
        <Projects />
        <Freelance />
        <Services />
        <Process />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}