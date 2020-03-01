import React from "react"
import { Row, Col, Input, Button } from "antd"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = props => (
  <Layout {...props}>
    <SEO title="Contact" />
    <div className="contact-page">
      <Row>
        <Col>
          <p class="title">Contact me</p>
        </Col>
      </Row>
      <Row gutter={80}>
        <Col span={12}>
          <Row gutter={16}>
            <Col span={12}>
              <Input placeholder="Name" size="large" />
            </Col>
            <Col span={12}>
              <Input placeholder="Email" size="large" />
            </Col>
          </Row>
          <Input placeholder="Subject" size="large" />
          <Input.TextArea
            placeholder="Message"
            autoSize={{ minRows: 10, maxRows: 10 }}
          />
          <Button className="send">Send</Button>
        </Col>
        <Col span={12}>
          <div className="right">
            <span className="content">
              "People can't be just tided together. They have to connect.
              Otherwise, they'll find themeselves bound hand and foot"
            </span>
            <div className="author">---Ai Yazawa---</div>
          </div>
        </Col>
      </Row>
    </div>
  </Layout>
)

export default ContactPage
