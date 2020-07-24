import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from 'gatsby'

const CV = () => {
    const data = useStaticQuery(graphql`
    {
        allFile(filter: {extension: {eq: "pdf"}}) {
            edges {
              node {
                id,
                publicURL
              }
            }
          }
    }
  `)

  const cvPdfUrl = data.allFile.edges[0].node.publicURL
      
  return (
      <Layout>
      <SEO title="CV" />
      <div className="sqs-block-content mt-4">
          <p >A short recent résumé can be found
              <a 
              href={cvPdfUrl} 
              rel="noreferrer"
              target='_blank'
              > here</a>.</p>
          <p >Please email me for a full up to date CV.</p>
      </div>
      </Layout>
  )
}

export default CV
