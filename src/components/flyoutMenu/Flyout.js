import React, { Component, Fragment } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Link, useStaticQuery } from "gatsby"
import palette from "../../utils/palette"
import { Backdrop, Menu, MenuConsumer } from "react-flyout-menu"

const GlobalStyle = createGlobalStyle`
  #main-menu {
    background-color: ${props => props.theme.colors.dark};
    z-index: 1001;

    & a {
      color: ${({ theme }) => theme.colors.white} !important;
    }
    & a.menu-close {
      background-color: ${props => props.theme.colors.brandColor};
    }
  }

`

const Heading = styled.h2`
  display: flex;
  width: 100%;
  text-align: center;
  color: ${palette.white};
  justify-content: center;
`

const LinkContainer = styled.div`
  font-size: 2rem;
  opacity: ${props => props.opacity};
  margin: 1rem 0;
`

const StyledLink = styled(Link)`
  margin-bottom: ${props => (props.depth === 0 ? 0.5 : 0)}rem;
  display: inline-block;
`

const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: ${props => 1.4 - 0.1 * props.depth}rem;
  flex-direction: ${props => (props.depth >= 1 ? "row" : "column")};
  font-weight: ${props => (props.depth >= 1 ? "normal" : "bold")};
  opacity: 1;
  color: #fff;
  padding-left: ${props => (props.depth >= 1 ? 1 : 0)}rem;
  padding-top: ${props => (props.depth < 1 ? 0.5 : 0)}rem;
  & > div {
    margin-bottom: ${props => (props.depth >= 1 ? "auto" : "1rem")};
  }

  a {
    display: inline-block;
    margin: 0.5rem 1rem;
  }
`

const LinkBlockWrapper = styled.div`
  margin-bottom: 1rem;
`

function buildLinks(items, depth = 0) {
  if (!items) {
    return null
  }

  return items.map(item => (
    <LinkBlockWrapper key={item.slug}>
      <StyledLink to={item.slug} depth={depth}>
        {item.title}
      </StyledLink>

      <LinkWrapper depth={depth} data-depth={depth}>
        {buildLinks(item.children, depth + 1)}
      </LinkWrapper>
    </LinkBlockWrapper>
  ))
}

export default class extends Component {
  render() {
    const { items } = this.props

    const links = buildLinks(items)
    return (
      <MenuConsumer>
        {({ toggleElement, setCloseElement }) => {
          return (
            <Fragment>
              <GlobalStyle />
              <Menu
                setCloseElement={setCloseElement}
                toggleElement={toggleElement}
                Heading={() => <Heading>NAVIGATION</Heading>}
              >
                <LinkContainer opacity={this.props.opacity}>
                  {links}
                </LinkContainer>
              </Menu>
              <Backdrop />
            </Fragment>
          )
        }}
      </MenuConsumer>
    )
  }
}
