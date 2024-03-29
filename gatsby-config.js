/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
 
  plugins: [ 
    'gatsby-plugin-sass', 
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-source-filesystem', 
      options: {
        name: 'src', 
        path: `${__dirname}/src/`
      }
    }
  
  ]
}
