import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from 'gatsby'

const Teaching = () => {
  
  const teachingMardown = useStaticQuery(graphql`
    query GetTeachingMD {
      markdownRemark(frontmatter: 
        {title: {eq: "Teaching"}}
      ) {
        html
      }
    }  
  `)

  return (
    <Layout> 
      <SEO title="Teaching" />
      <div className="text-left mt-4">
        <div dangerouslySetInnerHTML={{ __html: teachingMardown?.markdownRemark?.html}}/>
      </div>
    </Layout>
  )
}

export default Teaching
