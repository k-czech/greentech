import React from 'react';
import { Link } from 'gatsby';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Oferta } from '../components/Oferta';


const IndexPage = () => (

  <>
    <section className="">
      <Navbar />
    </section>
    <div><Oferta /></div>
    <footer className="">
      <Footer />
    </footer>
  </>

);

export default IndexPage;
