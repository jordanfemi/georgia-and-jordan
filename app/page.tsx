import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import Countdown from '@/components/Countdown';
import Gallery from '@/components/Gallery';
import RSVP from '@/components/RSVP';
import Travel from '@/components/Travel';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <OurStory />
      <Countdown />
      <Gallery />
      <RSVP />
      <Travel />
      <Footer />
    </main>
  );
}
