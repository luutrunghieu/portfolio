import React, { Component } from "react"
import PropTypes from "prop-types"
import anime from "animejs"

export default class AnimtedText extends Component {
  static propTypes = {
    text: PropTypes.string,
  }

  componentDidMount() {
    anime.timeline({ loop: false }).add({
      targets: ".letter",
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i,
    })
  }

  render() {
    return (
      <>
        {this.props.text.split("").map((v, index) => (
          <span className={"letter"} key={index}>
            {v}
          </span>
        ))}
      </>
    )
  }
}
