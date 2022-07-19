import * as React from "react"
import Layout from "../../components/layout"
import {graphql, Link} from 'gatsby'


const Blog = ({data}) => {
    //console.log(data);
    return (
            <Layout  pageTitle='Pagina Blog' pageHeading='Titulo de la pagina blog'>
            {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <Link to={node.slug}><h2>{node.frontmatter.title}</h2></Link>
            
            <p>Posted: {node.frontmatter.date}</p>

          </article>
        ))
      }
        </Layout>
        )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
        }
        id
        slug
              }
    }
  }
`

export default Blog;
  