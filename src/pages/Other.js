import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const Other = () => {
  const otherMarkdown = useStaticQuery(graphql`
    query GetOtherMD {
      markdownRemark(frontmatter: { title: { eq: "Other" } }) {
        html
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Other" />
      <div className="text-left mt-4">
        <div
          dangerouslySetInnerHTML={{
            __html: otherMarkdown?.markdownRemark?.html,
          }}
        />
      </div>
    </Layout>
  )
}

export default Other
