import React from "react"
import styled from "styled-components"

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => (theme.colors || {}).white || "#FFFFFF"};
`

export default Background
