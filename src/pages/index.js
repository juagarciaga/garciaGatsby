import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="text-left mt-4">
      <p >I am a Senior Lecturer at the
        <a href='http://www.infotech.monash.edu.au/'> Faculty of Information Technology</a>,&nbsp;<a href='http://www.monash.edu.au/'>Monash University</a>.&nbsp;
      </p>
      <p >My research aims to understand how
                self-interested agents (machines, humans and other animals) can learn to
                coordinate their actions without a central planner. I am particularly interested
                in social dilemmas and cooperation.
      </p>
      <p >I teach
        <a
          href='https://www.monash.edu.au/pubs/handbooks/units/FIT1008.html'
          target='_blank'  rel='noopener noreferrer'
        > computer science
        </a>,
        <a
          href='http://www.monash.edu.au/pubs/2015handbooks/units/FIT1029.html'
          target='_blank'  rel='noopener noreferrer'
        > algorithms
        </a>
                and
        <a
          href='https://www.monash.edu.au/pubs/handbooks/units/FIT4012.html'
          target='_blank'  rel='noopener noreferrer'
        > computational modelling and simulation
        </a>.
      </p>
      <p >I am Director of
        <a
          href='https://www.monash.edu/study/courses/find-a-course/2020/computer-science-c2001'
        > BSc Computer Science
        </a>,
        <a
          href='https://www.monash.edu/study/courses/find-a-course/2020/computer-science-advanced-c3001?domestic=true'
        > BSc Computer Science with Honours
        </a>, and
        <a
          href='https://www.monash.edu/study/courses/find-a-course/2020/computer-science-advanced-c3001?domestic=true'
        > BSc Computer Science Advanced
        </a>.
      </p>
    </div>
  </Layout>
)

export default IndexPage
