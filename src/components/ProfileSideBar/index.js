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
    <Wrapper className="text-left mt-3 d-flex">
      <div style={{width: '40%'}}>
        {showPictureProfile && (
          <Link to="/">
            <div className="d-block img-thumbnail mr-3">
              <PictureProfile />
            </div>
          </Link>
        )}
      </div>
      <div className="d-none d-sm-block">
        <ContactInfoBlock /> 
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 15px;
  @media (max-width: 426px) {
    border-bottom: 1px solid #ccc;
  }
`
