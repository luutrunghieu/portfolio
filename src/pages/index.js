import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimtedText from "../components/animted-text"
import { Row, Col, Button } from "antd"
import BackgroundImage from "gatsby-background-image"
import { graphql, StaticQuery } from "gatsby"

const IndexPage = props => {
  return (
    <Layout {...props}>
      <SEO title="Home" />
      <StaticQuery
        query={graphql`
          query {
            desktop: file(relativePath: { eq: "background.jpg" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `}
        render={data => {
          // Set ImageData.
          const imageData = data.desktop.childImageSharp.fluid
          // const imageData = [
          //   data.desktop.childImageSharp.fluid,
          //   `linear-gradient(
          //     0deg,
          //     rgba(0, 0, 0, 0.2)
          //   )`,
          // ].reverse()
          return (
            <BackgroundImage
              Tag="section"
              fluid={imageData}
            >
              <div className="home-page">
                <Row>
                  <Col offset={1} span={11}>
                    <div className="content">
                      <p className="title">
                        <AnimtedText text="Hi," />
                        <br />
                        <AnimtedText text="I'm " />
                        <span className="primary">
                          <AnimtedText text="Hieu" />
                        </span>
                        <br />
                        <AnimtedText text="Software Engineer." />
                      </p>
                      <p className="sub-title">
                        Frontend Developer / Dreamer / Pet Lover
                      </p>
                      <Button className="cta">Contact Me</Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </BackgroundImage>
          )
        }}
      />
    </Layout>
  )
}

export default IndexPage
