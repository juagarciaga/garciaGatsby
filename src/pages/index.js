import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const homeMardown = useStaticQuery(graphql`
    query GetHomeMD {
      markdownRemark(frontmatter: { title: { eq: "Home" } }) {
        html
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="text-left mt-4">
        <div
          dangerouslySetInnerHTML={{
            __html: homeMardown?.markdownRemark?.html,
          }}
        />
      </div>
    </Layout>
  )
}

export default IndexPage
