import Header from './pages/Header';
import Hero from './pages/Hero';
import About from './pages/About';
import PrincipalMessage from './pages/PrincipalMessage';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import PastEvents from './pages/PastEvents';
import NewsAndNotices from './pages/NewsAndNotices';

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
        <NewsAndNotices />
      </main>
      <Footer />
    </div>
  );
}

export default App;
