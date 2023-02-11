import React from 'react';
import { SEO } from '../components/Seo';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Oferta } from '../components/Oferta';

const IndexPage = () => (
  <>
    <section className="">
      <Navbar />
    </section>
    <div>
      <Oferta />
    </div>
    <footer className="">
      <Footer />
    </footer>
  </>
);

export default IndexPage;

export const Head = () => (
  <SEO
    title="Instalacje fotowoltaiczne, czysta energia odnawialna, niezależność energetyczna - Małopolska – GreenTech"
    description="Nasza firma to pierwszy krok do uniezależnienia się od firm energetycznych oraz posiadania własnej ekologicznej energii! Zamów instalację do swojego domu."
  />
);
