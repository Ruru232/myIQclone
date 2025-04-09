import AvailableTest from './components/AvailableTest';
import BoostYourAbilities from './components/BoostYourAbilities';
import Community from './components/Community';
import Explore from './components/Explore';
import FaQ from './components/FaQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import LatestResult from './components/LatestResult';
import NavBar from './components/NavBar';
import TrustedByMillions from './components/TrustedByMillions';
import WhatWillYouGet from './components/WhatWillYouGet';

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <HowItWorks />
      <AvailableTest />
      <BoostYourAbilities />
      <WhatWillYouGet />
      <TrustedByMillions />
      <Community />
      <Explore />
      <FaQ />
      <LatestResult />
      <Footer />
    </>
  );
}
