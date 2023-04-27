const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules',
)

module.exports = {
  siteMetadata: {
    title: 'Greentech Instalacje fotowoltaiczne',
    siteUrl: 'https://green-tech.com.pl',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        host: 'green-tech.com.pl',
        redirect: [
          'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]',
          {
            from: 'green-tech.com.pl/pionowe-instalacje-pv',
            to: 'green-tech.com.pl/pionowe-instalacje-fotowoltaiczne/',
          },
          {
            from: 'green-tech.com.pl/b/jak-sprawdzic-panel-fotowoltaiczny--usterki-i-uszkodzenia-paneli-fotowoltaicznych',
            to: 'green-tech.com.pl/jak-sprawdzic-panel-fotowoltaiczny-usterki-i-uszkodzenia-paneli/',
          },
          {
            from: 'green-tech.com.pl/o-firmie',
            to: 'green-tech.com.pl/o-nas/',
          },
          {
            from: 'green-tech.com.pl/b/projektowanie-instalacji-fotowoltaicznej--jak-zrobic-to-poprawnie',
            to: 'green-tech.com.pl/projektowanie-instalacji-fotowoltaicznej-jak-zrobic-to-poprawnie/',
          },
          {
            from: 'green-tech.com.pl/o-firmie/ile-trwa-montaz-instalacji-fotowoltaicznej',
            to: 'green-tech.com.pl/o-nas/',
          },
          {
            from: 'green-tech.com.pl/b/optymalizator-mocy-paneli-fotowoltaicznych--czy-warto',
            to: 'green-tech.com.pl/optymalizator-mocy-paneli-fotowoltaicznych-czy-warto/',
          },
          {
            from: 'green-tech.com.pl/fotowoltaika/fotowoltaika-klientow-indywidualnych',
            to: 'green-tech.com.pl/fotowoltaika/',
          },
          {
            from: 'green-tech.com.pl/b/czym-jest-dom-zeroenergetyczny',
            to: 'green-tech.com.pl/czym-jest-dom-zeroenergetyczny/',
          },
          {
            from: 'green-tech.com.pl/b/montaz-paneli-fotowoltaicznych---rozne-konstrukcje-i-rozwiazania',
            to: 'green-tech.com.pl/montaz-paneli-fotowoltaicznych-rozne-konstrukcje-i-rozwiazania/',
          },
          {
            from: 'green-tech.com.pl/rekuperacja',
            to: 'green-tech.com.pl/oferty/',
          },
          {
            from: 'green-tech.com.pl/fotowoltaika/fotowoltaika-dla-rolnictwa',
            to: 'green-tech.com.pl/fotowoltaika/',
          },
          {
            from: 'green-tech.com.pl/realizacje',
            to: 'green-tech.com.pl/nasze-realizacje/',
          },
          {
            from: 'green-tech.com.pl/o-firmie/poznaj-nasze-metody-pracy',
            to: 'green-tech.com.pl/o-nas/',
          },
          {
            from: 'green-tech.com.pl/o-firmie/jak-dzialaja-panele-fotowoltaiczne',
            to: 'green-tech.com.pl/o-nas/',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.ACCESS_TOKEN,
        spaceId: process.env.SPACE_ID,
        enableTags: true,
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 80,
          placeholder: `dominantColor`,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    //'gatsby-plugin-google-gtag',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ['develop'],
        extensions: ['ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        assets: path.join(__dirname, 'src/assets'),
        components: path.join(__dirname, 'src/components'),
        hooks: path.join(__dirname, 'src/hooks'),
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google2: [
            {
              family: `Plus Jakarta Sans`,
              axes: 'wght@400;500;600;700;800',
              subsets: ['latin-ext'],
            },
          ],
        },
        usePreload: true,
        usePreconnect: true,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
  ],
}
