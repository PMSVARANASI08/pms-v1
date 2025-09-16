import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PrincipalMessage from './components/PrincipalMessage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PastEvents from './components/PastEvents';

function App(){
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <PrincipalMessage />
        <PastEvents />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
