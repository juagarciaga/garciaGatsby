import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { ProfileSideBar } from "../components/ProfileSideBar/index"
import { Row, Col } from "react-bootstrap"

const IndexPage = () => {
  const homeMardown = useStaticQuery(graphql`
    query GetHomeMD {
      markdownRemark(frontmatter: { title: { eq: "Home" } }) {
        html
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Julian Garcia" />
      <Row>
        <Col xs="12" sm="12">
          <ProfileSideBar/>
        </Col>
        <Col xs="12" sm="12">
        <div className="text-left mt-4">
        <div
          dangerouslySetInnerHTML={{
            __html: homeMardown?.markdownRemark?.html,
          }}
        />
      </div>
        </Col>
      </Row>  
      
    </Layout>
  )
}

export default IndexPage
