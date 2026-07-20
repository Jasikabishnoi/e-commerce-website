import React from 'react'
import hero from '../components/hero';
import LatestCollection from '../components/LatestCollection';
import OurPolicy from '../components/OurPolicy';
import bestseller from '../components/bestseller';
import newsletterbox from '../components/newsletterbox';

const home = () => {
  return (
    <div>
      <hero />
      <LatestCollection/>
      <bestseller/>
      <OurPolicy/>
      <newsletterbox/>
    </div>
  )
}

export default home;
