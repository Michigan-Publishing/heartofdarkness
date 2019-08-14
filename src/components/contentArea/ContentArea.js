import React from "react"
import styled from "styled-components"

import image from "./ContentArea.png"

const ContentWrapper = styled.main`
  padding: 0 2rem;
  align-self: center;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px;
  margin-bottom: 30px;
  padding: 30px;
  min-height: 723px;

  & h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 0.75rem;
  }

  & p,
  li {
    margin: 1.5rem 0.75rem;
  }
`

export default class extends React.Component {
  render() {
    const { children, style } = this.props
    return <ContentWrapper style={style}>{children}</ContentWrapper>
  }
}
