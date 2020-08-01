import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const CV = () => {
  const cvMarkdown = useStaticQuery(graphql`
    query GetCVMD {
      markdownRemark(frontmatter: { title: { eq: "CV" } }) {
        html
      }
    }
  `)

  return (
    <Layout>
      <SEO title="CV" />
      <div className="text-left mt-4">
        <div
          dangerouslySetInnerHTML={{ __html: cvMarkdown?.markdownRemark?.html }}
        />
      </div>
    </Layout>
  )
}

export default CV
