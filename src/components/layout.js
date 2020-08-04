import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Menu } from "./Menu/Menu"
import { ProfileSideBar } from "./ProfileSideBar/index"
import { Container, Row, Col } from "react-bootstrap"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Footer } from "./Footer"
import styled from "styled-components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Menu siteTitle={data.site.siteMetadata.title} />
      <Container>
        <Row>
          <Col xs="12" sm="4">
            <ProfileSideBar siteTitle={data.site.siteMetadata.title} />
          </Col>
          <Col xs="12" sm="8">
            <Main>{children}</Main>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Main = styled.main`
  @media (min-width: 426px) {
    min-height: calc(100vh - 63px);
  }

  min-height: calc(100vh - 400px);

  a {
    color: #0066cc;
    padding-bottom: 1px;
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    &:hover {
      font-weight: bold;
    }
  }
`

export default Layout
