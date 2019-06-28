import React, { Component } from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import palette from "../../utils/palette"
import { TABLET_LANDSCAPE_WIDTH } from "../../constants"

export const Link = styled(GatsbyLink)`
  color: ${palette.white};
  font-size: 2rem;
  text-decoration: none;
  position: flex;
`

const ListContainer = styled.ul`
  list-style-type: none;
  min-height: 500px;

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    margin-top: 6rem;
    padding: 0;
  }
`

export const LinkBackground = `
  background-color: rgba(${palette.rgbContentBackground}, 0.8);
  padding: 1.5rem;
  border-radius: 1.5rem;
`

const ListItem = styled.li`
  ${LinkBackground}
  display: block;
  float: left;
  clear: both;
  margin-bottom: 2rem;
  margin-left: ${props => props.left}%;

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export default class extends Component {
  state = { paddingHeight: 90 }
  mounted = false

  componentDidMount() {
    this.getPaddingAmount()
    window.addEventListener("resize", this.getPaddingAmount)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getPaddingAmount)
  }

  getPaddingAmount = () => {
    const { linkProperties } = this.props
    const height = this.container.clientHeight / linkProperties.length
    this.setState({ paddingHeight: height > 90 ? 90 : height })
  }

  render() {
    const { linkProperties } = this.props
    const { paddingHeight } = this.state

    if (!linkProperties) {
      return null
    }
    return (
      <ListContainer ref={node => (this.container = node)}>
        {linkProperties.map((link, index) => (
          <ListItem
            key={link.href}
            left={getRandomInt(35)}
            top={index * paddingHeight}
          >
            <Link to={link.href}>{link.title}</Link>
          </ListItem>
        ))}
      </ListContainer>
    )
  }
}
