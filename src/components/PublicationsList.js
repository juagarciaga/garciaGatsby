import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const ListPublications = () => {
  const publicationsListMarkdown = useStaticQuery(graphql`
    query GetPublicationsMD {
      markdownRemark(frontmatter: { title: { eq: "PublicationsList" } }) {
        html
      }
    }
  `)

  return (
    <div className="text-left mt-4">
      <div
        dangerouslySetInnerHTML={{
          __html: publicationsListMarkdown?.markdownRemark?.html,
        }}
      />
    </div>
  )
}
