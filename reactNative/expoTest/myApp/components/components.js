import * as React from "react"
import Svg, { G, Rect, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const BigSquare = () => (
  <Svg
    width={196}
    height={192}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#a)" shapeRendering="crispEdges">
      <Rect
        x={5}
        y={1}
        width={186}
        height={182}
        rx={10}
        fill="#3EE2C5"
        fillOpacity={0.85}
      />
      <Rect
        x={4.5}
        y={0.5}
        width={187}
        height={183}
        rx={10.5}
        stroke="#ED2A2A"
        strokeOpacity={0.76}
        strokeLinejoin="round"
      />
    </G>
    <Defs></Defs>
  </Svg>
)

export default BigSquare