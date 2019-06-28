import React from "react"
import styled from "styled-components"
import { color, fontFamily } from "styled-system"
import { Heading as BassHeading } from "rebass"

const Heading = styled(BassHeading)`
  font-family: ${({ theme }) => theme.fonts.heading};
`

function HeadingComponent({ level = 1, ...props }) {
  return <Heading {...props} as={`h${level}`} />
}
export default HeadingComponent
