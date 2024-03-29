import React from "react"

import Layout from "../components/layout"
import seo from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <Layout>
      <seo title="Lindseys Portfolio" />
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Promotion></Promotion>
      <Footer></Footer>
    </Layout>
  )
}

export default IndexPage
