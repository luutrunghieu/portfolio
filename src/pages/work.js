import React, { useEffect } from "react"
import { Row, Col } from "antd"
import Layout from "../components/layout"
import SEO from "../components/seo"
import anime from "animejs"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const WorkPage = props => {
  const logoImage = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => {
    anime.timeline({ loop: false }).add({
      targets: ".letter",
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i,
    })

    const slides = document.getElementsByClassName("slides")[0]
    const slideArr = document.getElementsByClassName("slide")
    const slidesLength = slideArr.length
    const firstSlide = slideArr[0]
    const secondSlide = slideArr[1]
    const lastSlide = slideArr[slidesLength - 1]
    const cloneFirst = firstSlide.cloneNode(true)
    const cloneSecond = secondSlide.cloneNode(true);
    const cloneLast = lastSlide.cloneNode(true)
    let current = 0
    slides.appendChild(cloneFirst)
    slides.appendChild(cloneSecond)
    slides.insertBefore(cloneLast, firstSlide)
    setInterval(() => {
      current++
      let translatePos = -300 - 500 * current
      if (current === slidesLength) {
        translatePos = -300
        current = 0
      }
      slides.style.transform = `translateX(${translatePos}px)`
    }, 1000)
  }, [])
  return (
    <Layout {...props}>
      <SEO title="Work" />
      <div className="work-page">
        <Row>
          <Col>
            <p className="title">
              {"Works".split("").map((v, index) => (
                <span className={"letter"} key={index}>
                  {v}
                </span>
              ))}
            </p>
          </Col>
        </Row>
        <div className="slides">
          <div className="slide">
            <h1>1</h1>
          </div>
          <div className="slide">
            <h1>2</h1>
          </div>
          <div className="slide">
            <h1>3</h1>
          </div>
          <div className="slide">
            <h1>4</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WorkPage
