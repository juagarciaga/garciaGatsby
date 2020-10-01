import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Menu } from "./Menu/Menu"
import { Container, Row, Col } from "react-bootstrap"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Footer } from "./Footer"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

const Layout = ({ children }) => {
  
  const GlobalStyles = createGlobalStyle`
  p, li {
    color: dimgrey;
  }

  h1, h2, h3, h4, h5, h6 {
    color: black;
  }
`

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
      <GlobalStyles />
      <Menu siteTitle={data.site.siteMetadata.title} />
      <MainContainer>
        <Row>
          <Col xs="12" sm="12">
            <Main>{children}</Main>
          </Col>
        </Row>
      </MainContainer>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
const MainContainer = styled(Container)`
  min-height: calc(100vh - 124px);
  margin-top: 56px;
`

const Main = styled.main`
  max-width: 600px;
  margin: 0 auto;

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
