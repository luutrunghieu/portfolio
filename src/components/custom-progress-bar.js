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
                "0%": "#FAFFD1",
                "100%": "#52FFB8",
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
