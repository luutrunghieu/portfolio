import React from "react"
import { Layout, Menu, Icon } from "antd"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const { Sider } = Layout

const NavBar = props => {
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

  const { location } = props

  return (
    <Sider defaultCollapsed={true} className="side-bar">
      <div className="logo">
        <Image fluid={logoImage.placeholderImage.childImageSharp.fluid} />
      </div>
      <Menu className="navigation" theme="dark" mode="inline" selectedKeys={[location.pathname]}>
        <Menu.Item key="/">
          <Link to="/">
            <Icon type="home" />
            <span>Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">
            <Icon type="user" />
            <span>About</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/skills">
          <Link to="/skills">
            <Icon type="setting" />
            <span>Skills</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/work">
          <Link to="/work">
            <Icon type="project" />
            <span>Works</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/contact">
          <Link to="/contact">
            <Icon type="mail" />
            <span>Contact</span>
          </Link>
        </Menu.Item>
      </Menu>
      <Menu className="social-navigation" theme="dark" mode="inline">
        <Menu.Item key="1">
          <a
            href="https://twitter.com/Trung_Hieu_Luu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="twitter" />
            <span>Twitter</span>
          </a>
        </Menu.Item>
        <Menu.Item key="2">
          <a
            href="https://www.facebook.com/trunghieu.luu.9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="facebook" />
            <span>Facebook</span>
          </a>
        </Menu.Item>
        <Menu.Item key="3">
          <a
            href="https://www.linkedin.com/in/hieu-luu-418844118/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="linkedin" />
            <span>LinkedIn</span>
          </a>
        </Menu.Item>
        <Menu.Item key="4">
          <a
            href="https://github.com/luutrunghieu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="github" />
            <span>Github</span>
          </a>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default NavBar
