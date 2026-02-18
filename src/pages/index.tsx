import Header from '../components/header';
import Hero from '../components/hero';
import MySkills from '../components/mySkills';
import MyProjectHighlights from '../components/myProjectHighlights';
import Contact from '../components/contact';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MySkills />
      <MyProjectHighlights />
      <Contact />
      <Footer />
    </>
  );
}
