import React from "react"
import styled from "styled-components"
import { Twitter } from "@styled-icons/boxicons-logos/Twitter"
import { Email } from "@styled-icons/material/Email"
import { Github } from "@styled-icons/evaicons-solid/Github"
import { LocationPin } from "@styled-icons/entypo/LocationPin"

export const ContactInfoBlock = () => {
  return (
    <Wrapper>
      <ContactInfoItem>
        <Email className="text-black-50" />
        <span>julian.garcia@monash.edu</span>
        <a href="mailto:julian.garcia@monash.edu">julian.garcia@monash.edu</a>
      </ContactInfoItem>

      <ContactInfoItem>
        <LocationPin className="text-danger" />
        <span>Melbourne, Australia</span>
      </ContactInfoItem>

      <ContactInfoItem>
        <Twitter className="text-info" />
        <span>@garcia_juliang</span>
        <a
          href="https://twitter.com/garcia_juliang"
          rel="noreferrer"
          target="_blank"
          title="Twitter"
        >
          href='https://twitter.com/garcia_juliang'
        </a>
      </ContactInfoItem>

      <ContactInfoItem>
        <Github />
        <span>/juliangarcia</span>
        <a
          href="https://github.com/juliangarcia"
          rel="noreferrer"
          target="_blank"
          title="Github"
        >
          https://github.com/garcia_juliang
        </a>
      </ContactInfoItem>

      <ContactInfoItem>
        Julian García 29 Ancora Imparo Way, Clayton Faculty of Information
        Technology Monash University VIC 3800, Australia
      </ContactInfoItem>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media (max-width: 426px) {
    text-align: center;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 5px 15px;
  }
`

const ContactInfoItem = styled.div`
  padding: 5px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;

  @media (max-width: 426px) {
    justify-content: center;
  }

  svg {
    margin-right: 5px;
    min-width: 30px;
  }

  a {
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 0;
  }
`
