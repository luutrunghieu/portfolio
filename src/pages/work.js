import React, { useEffect } from "react"
import { Row, Col } from "antd"
import Layout from "../components/layout"
import SEO from "../components/seo"
import anime from "animejs"

const WorkPage = props => {
  useEffect(() => {
    anime.timeline({ loop: false }).add({
      targets: ".letter",
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i,
    })

    anime({
      targets: ".ellipsis",
      translateY: -30,
      direction: "alternate",
      easing: "easeInCubic",
      loop: true,
      duration: 300,
      delay: (el, i) => 50 * i,
    })
  }, [])
  return (
    <Layout {...props}>
      <SEO title="Work" />
      <div className="work-page">
        <Row>
          <Col>
            <p className="title">
              {"In progress".split("").map((v, index) => (
                <span className={"letter"} key={index}>
                  {v}
                </span>
              ))}
              {"...".split("").map((v, index) => (
                <span
                  style={{ display: "inline-block" }}
                  className={"ellipsis"}
                  key={index}
                >
                  {v}
                </span>
              ))}
            </p>
          </Col>
        </Row>
        <Row gutter={80}></Row>
      </div>
    </Layout>
  )
}

export default WorkPage
