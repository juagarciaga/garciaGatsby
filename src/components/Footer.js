import React from "react"
import styled from "styled-components"
import { ContactInfoBlock } from "./ProfileSideBar/ContactInfoBlock"

export const Footer = () => {
  return (
    <footer>
      <div className="d-block d-sm-none">
        <ContactInfoBlock />
      </div>
      <CopyRightRow>
        <span className="py-3">
          Copyright © {new Date().getFullYear()} - Julián García
        </span>
      </CopyRightRow>
    </footer>
  )
}

const CopyRightRow = styled.div`
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  bottom: 0;
`
