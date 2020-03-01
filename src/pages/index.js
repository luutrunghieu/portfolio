import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Button } from "antd"

const IndexPage = props => (
  <Layout {...props}>
    <SEO title="Home" />
    <div className="home-page">
      <Row>
        <Col offset={1} span={11}>
          <div className="content">
            <p className="title">
              Hi,
              <br />
              I'm <span className="primary">Hieu</span>
              <br />
              Software Engineer.
            </p>
            <p className="sub-title">
              Frontend Developer / Dreamer / Pet Lover
            </p>
            <Button className="cta">Contact Me</Button>
          </div>
        </Col>
      </Row>
    </div>
  </Layout>
)

export default IndexPage
