import React from 'react';
import { SEO } from 'components/seo';

const IndexPage = () => (
  <main>
    <h3>Pierwszy krok do niezależności energetycznej</h3>
  </main>
);

export default IndexPage;

export const Head = () => (
  <SEO
    title="Instalacje fotowoltaiczne, czysta energia odnawialna, niezależność energetyczna - Małopolska – GreenTech"
    description="Nasza firma to pierwszy krok do uniezależnienia się od firm energetycznych oraz posiadania własnej ekologicznej energii! Zamów instalację do swojego domu."
  />
);
