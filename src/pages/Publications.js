import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { useStaticQuery, graphql } from 'gatsby'
import publicationsData from '../publications.json'
import styled from 'styled-components'

const Publications = () => {
  console.log(publicationsData)
  // const { allMarkdownRemark } = useStaticQuery(graphql`
  //   query Publications {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             fileName
  //             category
  //             description
  //             date
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
    <SEO title="Publications" />
    <div className='mt-3'>
      <p>See also my 
        <a rel="noreferrer" target='_blank' href="http://bit.ly/garcia_scholar_by_date"> Google Scholar profile</a>.
      </p>
      <h3>Journal Articles and Refereed Proceedings</h3>
      <ul>
        {publicationsData.map((i) => (
          <PublicationItem>
            <i>{i.authors} </i>
            <strong>{i.title} </strong>
            <span>({i.year}) </span>
            <span>{i.source} </span>
            <a href={i.pdf} rel="noreferrer"
              target='_blank'>
                [pdf]
            </a>
            <a href={i.ur} rel="noreferrer"
              target='_blank'>
                {i.proceedings ? '[Proceedings]' : '[Journal]'}
            </a>
          </PublicationItem>
        ))}
      </ul>
      
    </div>
  </Layout>
  )
}

export default Publications

const PublicationItem = styled.li`
  a {
    border: none;
    font-weight: bold;
    cursor: pointer;
  }
`
