import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import PrincipalMessage from '../components/Home/PrincipalMessage';
import Contact from '../components/Home/Contact';
// import NewsAndNotices from '../components/NewsAndNotices';

function Home() {
  return (<>
      <Hero />
      <About />
      <PrincipalMessage />
      <Contact />
      {/* <NewsAndNotices /> */}
  </>
  );
}

export default Home;
