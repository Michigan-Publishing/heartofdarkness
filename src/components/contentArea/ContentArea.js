import React from "react"
import styled from "styled-components"
import palette from "../../utils/palette"
import { TABLET_LANDSCAPE_WIDTH } from "../../constants"

const ContentWrapper = styled.main`
  background-color: rgba(${palette.rgbContentBackground}, 0.9);
  box-shadow: 0 0 6.25rem rgba(${palette.rgbContentBackground}, 100);
  color: ${palette.white};
  padding: 0 2rem;
  max-width: 50vw;
  position: relative;
  top: 2.5vh;

  align-self: center;
  & h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 0.75rem;
  }

  & p,
  li {
    margin: 1.5rem 0.75rem;
  }

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    max-width: 95vw;
    width: 95vw;
    padding: 0 0.5rem;
    margin: 0 0.5rem 0 0.5rem;
  }
`

export default class extends React.Component {
  render() {
    const { children, style } = this.props
    return <ContentWrapper style={style}>{children}</ContentWrapper>
  }
}
