import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"

import Helmet from "react-helmet"

import Gallery from "../components/Gallery"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Lindseys Portfolio" />
      <Header></Header>
      <section id="two">
        <h2>Recent Work</h2>

        <Gallery />

        <ul className="actions">
          <li>
            <a href="#" className="button">
              Full Portfolio
            </a>
          </li>
        </ul>
      </section>
      <About></About>
      <Skills></Skills>
      <Promotion></Promotion>
      <Footer></Footer>
    </Layout>
  )
}

export default IndexPage
