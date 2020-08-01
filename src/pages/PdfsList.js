import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

const PdfsList = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ul>
        {data.allFile.edges.map((file, index) => {
          return (
            <li key={`pdf-${index}`}>
              Name: <b>{file.node.name}</b>
              <span className="d-block">
                Public URL:
                <a href={file.node.publicURL} download>
                  {file.node.publicURL}
                </a>
              </span>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default PdfsList
