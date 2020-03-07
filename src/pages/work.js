import React from "react"
import { Row, Col } from "antd"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimtedText from "../components/animted-text"

const WorkPage = props => (
  <Layout {...props}>
    <SEO title="Work" />
    <div className="work-page">
      <Row>
        <Col>
          <p className="title">
            <AnimtedText text="In progress..." />
          </p>
        </Col>
      </Row>
      <Row gutter={80}></Row>
    </div>
  </Layout>
)

export default WorkPage
