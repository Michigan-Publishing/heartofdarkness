import React from "react"
import styled from "styled-components"
import { Text } from "rebass"

const Blockquote = styled(Text)`
  padding: 10px 20px;
  margin: 0 0 20px;
  border-left: 5px solid #eee;
  line-height: 1.6rem;
  margin-bottom: 0.8em;
`

Blockquote.defaultProps = {
  as: "blockquote",
  fontFamily: "serif",
  fontSize: 2,
}

export default Blockquote
