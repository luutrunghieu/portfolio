import React from "react"
import { Row, Col } from "antd"
import Layout from "../components/layout"
import SEO from "../components/seo"

const WorkPage = props => (
  <Layout {...props}>
    <SEO title="Work" />
    <div className="work-page">
      <Row>
        <Col>
          <p className="title">On processing...</p>
        </Col>
      </Row>
      <Row gutter={80}></Row>
    </div>
  </Layout>
)

export default WorkPage
