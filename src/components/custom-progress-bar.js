import React from "react"
import { Progress } from "antd"
import CountTo from "react-count-to"

const CustomProgressBar = ({ label, percent, ...rest }) => {
  return (
    <div className="custom-progress-bar">
      <CountTo to={percent} speed={500}>
        {value => (
          <>
            <Progress
              percent={value}
              {...rest}
              strokeColor={{
                "0%": "#c3c1e3",
                "35%": "#08fdd8",
                "100%": "#00feff",
              }}
            />
            <span className="progress-label">{label}</span>
            <span className="progress-percent">{value}%</span>
          </>
        )}
      </CountTo>
    </div>
  )
}

export default CustomProgressBar
