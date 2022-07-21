import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogPostPage = ({data}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  //console.log(data);
    return (
      <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p><GatsbyImage
      image={image}
      alt={data.mdx.frontmatter.hero_image_alt}
    />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Layout>
    )
  }
  // Step 3: Export your component
  export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
  `;

  export default BlogPostPage;