import React from "react"
import { Row, Col } from "antd"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CustomProgressBar from "../components/custom-progress-bar"
import CustomProgressCircle from "../components/custom-progress-circle"

const SkillsPage = props => (
  <Layout {...props}>
    <SEO title="Skills" />
    <div className="skill-page">
      <Row>
        <Col>
          <p className="title">Skills</p>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <CustomProgressBar label="HTML" percent={95} />
          <CustomProgressBar label="CSS" percent={82} />
          <CustomProgressBar label="Javascript" percent={70} />
          <CustomProgressBar label="React" percent={90} />
          <CustomProgressBar label="VueJS" percent={85} />
          <CustomProgressBar label="UX/UI Design" percent={80} />
        </Col>
        <Col span={12}>
          <div className="right">
            <Row>
              <Col span={12}>
                <div className="wrapper">
                  <CustomProgressCircle label="LeaderShip" percent={91} />
                </div>
              </Col>
              <Col span={12}>
                <div className="wrapper">
                  <CustomProgressCircle label="Creativity" percent={75} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div className="wrapper">
                  <CustomProgressCircle label="Pragmatic" percent={80} />
                </div>
              </Col>
              <Col span={12}>
                <div className="wrapper">
                  <CustomProgressCircle label="LeaderShip" percent={91} />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  </Layout>
)

export default SkillsPage
