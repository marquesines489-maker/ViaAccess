import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Pricing from './components/Pricing';
import AppDetails from './components/AppDetails';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <div className="bgGrid" aria-hidden="true" />
      <div className="bgBlobs" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <Nav />

      <main>
        <Hero />
        <About />
        <Pricing />
        <AppDetails />
        <Showcase />
      </main>

      <Footer />
    </div>
  );
}
