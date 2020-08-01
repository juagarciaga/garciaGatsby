import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import PictureProfile from "../pictureProfile"
import { ContactInfoBlock } from "./ContactInfoBlock"

export const ProfileSideBar = ({ siteTitle }) => {
  const location = useLocation()
  const showPictureProfile = location.pathname === "/"

  return (
    <Wrapper className="text-left mt-3">
      {showPictureProfile && (
        <Link to="/">
          <div className="mx-auto d-block img-thumbnail mb-2">
            <PictureProfile />
          </div>
        </Link>
      )}
      <Link
        className="h2 d-none d-sm-block text-body text-decoration-none"
        to="/"
      >
        {siteTitle}
      </Link>
      <i>
        Senior Lecturer at the Faculty of Information Technology, Monash
        University.
      </i>
      <div className="d-none d-sm-block">
        <ContactInfoBlock />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media (max-width: 426px) {
    border-bottom: 1px solid #ccc;
  }
`
