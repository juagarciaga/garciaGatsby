import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Research = () => {
  const researchMardown = useStaticQuery(graphql`
    query GetResearchMD {
      markdownRemark(frontmatter: { title: { eq: "Research" } }) {
        html
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Research" />
      <div className="text-left mt-4">
        <div
          dangerouslySetInnerHTML={{
            __html: researchMardown?.markdownRemark?.html,
          }}
        />
      </div>
    </Layout>
  )
}

export default Research
