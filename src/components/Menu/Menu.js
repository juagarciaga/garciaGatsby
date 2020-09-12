import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import styled from "styled-components"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import classNames from "classnames"

export const Menu = ({ siteTitle }) => {
  const location = useLocation()
  const PublicationsActive = location.pathname === "/Publications"
  const TeachingActive = location.pathname === "/Teaching"
  const ResearchActive = location.pathname === "/Research"
  const CVActive = location.pathname === "/CV"
  const OtherActive = location.pathname === "/Other"

  return (
    <Navbar bg="light" expand="lg">
      <Container style={{maxWidth: '600px'}}>
        <Link className="navbar-brand ProfileSideBar font-weight-bold p-0" to="/" >
          {siteTitle}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <CustomLink
              className={classNames(
                { active: PublicationsActive },
                "mx-lg-1 h6 mb-lg-0  font-weight-bold nav-link"
              )}
              to="/Publications"
            >
              Publications
              <BorderHover />
            </CustomLink>
            <CustomLink
              className={classNames(
                { active: TeachingActive },
                "mx-lg-1 h6 mb-lg-0  font-weight-bold nav-link"
              )}
              to="/Teaching"
            >
              Teaching
              <BorderHover />
            </CustomLink>
            <CustomLink
              className={classNames(
                { active: ResearchActive },
                "mx-lg-1 h6 mb-lg-0  font-weight-bold nav-link"
              )}
              to="/Research"
            >
              Research
              <BorderHover />
            </CustomLink>
            <CustomLink
              className={classNames(
                { active: CVActive },
                "mx-lg-1 h6 mb-lg-0  font-weight-bold nav-link"
              )}
              to="/CV"
            >
              CV
              <BorderHover />
            </CustomLink>
            <CustomLink
              className={classNames(
                { active: OtherActive },
                "mx-lg-1 h6 mb-lg-0  font-weight-bold nav-link"
              )}
              to="/Other"
            >
              Other
              <BorderHover />
            </CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

const CustomLink = styled(Link)`
  position: relative;
  text-align: center;
  color: ${props => (props.active ? `red` : `green`)};

  &.active,
  &:hover {
    span {
      opacity: 1;
      transform: scaleX(1);
      transition: all 0.5s ease-in-out;
    }
  }
`

const BorderHover = styled.span`
  width: 100%;
  position: absolute;
  bottom: -8px;
  height: 3px;
  background: rgba(0, 0, 0, 0.7);
  display: block;
  opacity: 0;
  transform: scaleX(0);
  left: 0;
  right: 0;
  margin: 0 auto;
`
