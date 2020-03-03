import React from "react"
import { Progress } from "antd"
import CountTo from "react-count-to"

const CustomProgressCircle = ({ label, percent, ...rest }) => {
  return (
    <div className="custom-progress-circle">
      <CountTo to={percent} speed={400} delay ={20}>
        {value => (
          <>
            <Progress
              percent={value}
              {...rest}
              strokeColor={{
                "0%": "#a8c0ff",
                "100%": "#BB86FC",
              }}
              type="circle"
            />
            <span className="progress-label">{label}</span>
          </>
        )}
      </CountTo>
    </div>
  )
}

export default CustomProgressCircle
