import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Research = () => {
    return (
        <Layout>
        <SEO title="Research" />
    <div className="sqs-block-content mt-3">
      <strong>Research Themes</strong>
        <p>
          My research revolves around the question of how groups of agents can learn
            to coordinate individual decisions to achieve collective goals. Most of my
            research focuses on social dilemmas, i.e., situations where poor group outcomes
            arise from optimal individual choices.
            
                We use this framework to study: Multi-agent Systems and AI, Social Systems,
                    and Models in Biology and Evolution.
                    <Link to='/Publications'> Please check my publications for more details.</Link>
        </p>
                <p >
                    <strong>Current Grants</strong>
                </p>
                <ul data-rte-list="default">
                    <li>
                        <p >
                            Australian Research Council –
                            <a
                                rel="noreferrer" target='_blank' href="https://researchdata.ands.org.au/discovery-projects-grant-id-dp190100041/1378164"> DP190100041</a>. Governing the knowledge commons. 2019–2022.</p>
                    </li>
                    <li>
                        <p >Australian Research Council –
                            <a
                                rel="noreferrer" target='_blank' href="https://researchdata.ands.org.au/discovery-projects-grant-id-dp180100154/1315579"> DP180100154</a>.
                            Modelling collective behaviour to protect social insect ecosystem services.
                            2018–2021.</p>
                    </li>
                </ul>
                <p >
                    <strong>PhD opportunities</strong>
                </p>
                <p >I am always interested in hearing from potential PhD students. Should you be
                    interested in doing a PhD with me, please read one of my papers and briefly tell
                    me how it relates to your own research interests —<em>
                        I may not be able to reply to your introduction email if you fail to do this.
                    </em>
                </p>
                <p >
                    <a
                        rel="noreferrer" target='_blank' href="http://www.infotech.monash.edu.au/research/degrees/prospective-students/how-to-apply.html">Here’s how you can apply to do a PhD with me at Monash.
                    </a> We have a competitive scholarship scheme that can pay for living expenses
                    and fees.
                </p>
            
            </div>
           </Layout>
            )
}

export default Research