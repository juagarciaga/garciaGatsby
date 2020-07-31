

import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

export const ListPublications = () => {

    const otherMarkdown = useStaticQuery(graphql`
    query GetPublicationsMD {
      markdownRemark(frontmatter: 
        {title: {eq: "PublicationsList"}}
      ) {
        html
      }
    }  
  `)

  return (  
    <div className="text-left mt-4">
      <div dangerouslySetInnerHTML={{ __html: otherMarkdown?.markdownRemark?.html}}/>
    </div>
)}
