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
        custom: `
            <IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{QUERY_STRING} ^page\=$
RewriteRule ^$ /? [R=301,L]
</IfModule>
        `,
      },
    },
    {
      resolve: `gatsby-plugin-htaccess-redirects`,
      options: {
        prefix: '<IfModule mod_rewrite.c>\nRewriteEngine On',
        suffix: '</IfModule>',
        isPermanent: true,
        pattern: 'RewriteRule ^%1/?$ %2 [R=%3,L]'
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
