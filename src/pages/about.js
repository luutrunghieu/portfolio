import React from "react"
import { Row, Col } from "antd"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = props => {
  return (
    <Layout {...props}>
      <SEO title="About" />
      <div className="about-page">
        <Row>
          <Col span={11} offset={1}>
            <p class="title">About me</p>
            <p class="content">
              Professionally connected with the web development industry and
              information technology for many years. <br />
              <br />
              Well-organised person, problem solver, independent employee with
              high attention to detail. Fan of MMA, outdoor activities, TV
              series and, recently, English literature. A family person, father
              of two fractious boys, therefore remote employment is preferred.
              <br />
              <br /> Interested in the entire frontend spectrum and working on
              ambitious projects with positive people.
            </p>
          </Col>
          <Col span={12}>
            <div className="avatar-wrapper"></div>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default AboutPage
