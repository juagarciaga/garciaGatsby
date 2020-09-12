import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div
        className='mt-5'
        dangerouslySetInnerHTML={{
          __html: post.html,
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default BlogPost
