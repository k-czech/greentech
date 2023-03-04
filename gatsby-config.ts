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
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: `FidrQGnmMEexNrU8l7ik2VDMdul-y9irOdHXL7sKWB4`,
        spaceId: `137p9nrd7lwv`,
        enableTags: true,
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 90,
          placeholder: `blurred`,
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
    // {
    //   resolve: 'gatsby-plugin-prettier-eslint',
    //   options: {
    //     prettier: {
    //       patterns: [
    //         // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
    //         '**/*.{css,scss,less}',
    //         '**/*.{json,json5}',
    //         '**/*.{graphql}',
    //         '**/*.{md,mdx}',
    //         '**/*.{html}',
    //         '**/*.{yaml,yml}',
    //       ],
    //     },
    //     eslint: {
    //       patterns: '**/*.{ts,tsx}',
    //       customOptions: {
    //         fix: true,
    //         cache: true,
    //       },
    //     },
    //   },
    // },
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`plus jakarta sans\:300,400,600,700, 800`],
        display: 'swap',
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
    `gatsby-plugin-preload-fonts`,
  ],
}
