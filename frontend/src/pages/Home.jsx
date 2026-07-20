import React from 'react'
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import OurPolicy from '../components/OurPolicy';
import Bestseller from '../components/Bestseller';
import NewsletterBox from '../components/NewsletterBox';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <Bestseller />
      <OurPolicy />
      <NewsletterBox />
      <Footer />
    </div>
  )
}

export default Home;
