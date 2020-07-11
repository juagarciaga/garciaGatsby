import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PictureProfile = () => {
  const data = useStaticQuery(graphql` 
    query {
      placeholderImage: file(relativePath: { eq: "picture-profile.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default PictureProfile
