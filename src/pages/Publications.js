import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ListPublications } from "../components/PublicationsList"

const Publications = () => {
  return (
    <Layout>
      <SEO title="Publications" />
      <div className="mt-3">
        <ListPublications />
      </div>
    </Layout>
  )
}

export default Publications
