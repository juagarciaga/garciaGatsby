import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CV = () => {
    return (
        <Layout>
        <SEO title="CV" />
        <div className="sqs-block-content mt-4">
            <p >A short recent résumé can be found
                <a href="/s/cv_garcia.pdf" rel="noreferrer" target='_blank'> here</a>.</p>
            <p >Please email me for a full up to date CV.</p>
        </div>
        </Layout>
    )
}

export default CV
