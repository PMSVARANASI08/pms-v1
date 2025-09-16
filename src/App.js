import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PrincipalMessage from './components/PrincipalMessage';
import ContactUs from './components/ContactUs';
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
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
