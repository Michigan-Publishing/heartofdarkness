import React from "react"
import styled from "styled-components"
import image from "./background.jpg"

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => (theme.colors || {}).white || "#FFFFFF"};
  background-image: url(${image});
  background-repeat: repeat repeat;
`

export default Background
