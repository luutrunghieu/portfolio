import React from "react"
import { Row, Col } from "antd"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimtedText from "../components/animted-text"
import AvatarBackground from "../components/avatar-background"

const AboutPage = props => {
  return (
    <Layout {...props}>
      <SEO title="About" />
      <div className="about-page">
        <Row>
          <Col span={11} offset={1}>
            <p className="title">
              <AnimtedText text="About me" />
            </p>
            <p className="content">
              Software Engineer, Front End Developer based in Hanoi, Vietnam.{" "}
              <br />
              <br />
              Well-organised person, problem solver, independent employee with
              high attention to detail. Fan of outdoor activities, photography,
              TV series and a pet lover.
              <br />
              <br /> Interested in the entire frontend spectrum and working on
              ambitious projects with positive and active people.
            </p>
          </Col>
          <Col span={12}>
            <AvatarBackground />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default AboutPage
