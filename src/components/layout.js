/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Layout } from "antd"
import "../styles/index.scss"
import NavBar from "./nav-bar"
import Particles from "react-particles-js"
const { Content } = Layout

const MyLayout = ({ children, ...rest }) => {
  return (
    <Layout>
      <NavBar {...rest} />
      <Layout>
        <Particles
          style={{ position: "absolute" }}
          params={{
            particles: {
              number: {
                value: 70,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
          canvasClassName="particles"
        />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MyLayout
