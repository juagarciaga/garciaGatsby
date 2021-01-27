import React from "react"
import styled from "styled-components"
import { Email } from "@styled-icons/material/Email"
import { Github } from "@styled-icons/evaicons-solid/Github"
import { LocationPin } from "@styled-icons/entypo/LocationPin"

export const ContactInfoBlock = () => {
  return (
    <Wrapper>
      <i>
        Department of AI and Data Science
        <br />
        Faculty of Information Technology
        <br />
        Monash University.
      </i>
      <ContactInfoItem>
        <Email className="text-black-50" />
        <span>julian dot garcia at monash dot edu</span>
        <a href="javascript:location='mailto:\u006a\u0075\u006c\u0069\u0061\u006e\u002e\u0067\u0061\u0072\u0063\u0069\u0061\u0040\u006d\u006f\u006e\u0061\u0073\u0068\u002e\u0065\u0064\u0075';void 0">
          <script type="text/javascript">
            document.write('\u006a\u0075\u006c\u0069\u0061\u006e\u002e\u0067\u0061\u0072\u0063\u0069\u0061\u0040\u006d\u006f\u006e\u0061\u0073\u0068\u002e\u0065\u0064\u0075')
          </script>
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
        <LocationPin className="text-danger" />
        29 Ancora Imparo Way, Clayton
        <br />
        VIC 3800, Australia
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
    width: 20px;
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
