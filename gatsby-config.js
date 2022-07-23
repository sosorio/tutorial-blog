module.exports = {
  siteMetadata: {
    siteUrl: `https://www.floreshoy.com`,
    title:"Flores a Domicilio",
    description: 'Flores a domicilio en varios paises'},
    
  plugins: [
    `gatsby-plugin-image`,
     `gatsby-plugin-sharp`,
  {
    resolve:`gatsby-source-filesystem`,
    options: {
      name: "blog", path:`${__dirname}/blog`,
    }
  },
`gatsby-plugin-mdx`,
`gatsby-transformer-sharp`,
`gatsby-plugin-postcss`,

  ]
}
