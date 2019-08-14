import React, { Component, Fragment } from "react"
import styled from "styled-components"
import Background from "../background"
import Breadcrumbs from "../breadcrumbs"
import Layout from "../Layout"
import { MenuProvider, MenuConsumer, HamburgerButton } from "react-flyout-menu"
import Footer, { FOOTER_HEIGHT } from "../Footer"
import { buildFrontmatterLookup } from "../../utils/node"
import palette from "../../utils/palette"
import { TABLET_LANDSCAPE_WIDTH } from "../../constants"
import { theme, Provider } from "../../constants/theme"

const HeadingWrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 1.5) 50%, rgba(0, 0, 0, 0));
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 2rem);
  position: fixed;
  top: 0;
  z-index: 1;
  overflow: hidden;

  a,
  a:visited {
    color: ${palette.white};
  }

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    position: initial;
    background: unset;
    background: ${palette.contentBackground};
    border-bottom: 2px solid ${palette.relatedBackground};
  }
`

const ContentArea = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
  position: relative;
  z-index: 0;
  padding-bottom: ${FOOTER_HEIGHT}px;
  max-width: 95%;

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    margin-top: 0;
  }
`

const HeadingRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
export default class extends Component {
  static defaultProps = {
    showBreadcrumbs: true,
    breadcrumbLinks: [],
  }

  state = { showFlyout: false, headingHeight: 0 }

  shouldShowBreadcrumbs = () => {
    return (
      this.props.showBreadcrumbs &&
      this.props.data &&
      this.props.data.allMdx &&
      this.props.data.allMdx.edges
    )
  }

  componentDidMount() {
    this.buildLinkTree()
  }

  buildLinkTree = () => {
    const {
      data: {
        allMdx: { edges: nodes },
      },
    } = this.props

    const lookup = buildFrontmatterLookup(nodes, true, true)

    return lookup
  }

  buildBreadcrumbLinks = () => {
    if (this.shouldShowBreadcrumbs()) {
      const {
        pageContext: { key },
        data: {
          allMdx: { edges: nodes },
        },
      } = this.props
      const lookup = buildFrontmatterLookup(nodes, true)

      // walk backwards up the lookup starting with this key
      let currentKey = key
      let list = []
      while (currentKey) {
        const data = lookup[currentKey] || {}
        if (data && data.title && data.slug) {
          list.push({
            title: data.title,
            slug: data.slug,
          })
        }
        currentKey = data.parentKey
      }

      list.push({
        title: "home",
        slug: "/",
      })
      const output = list.reverse()
      return output
    }
  }

  render() {
    const { contentStyles } = this.props
    const linkTree = this.buildLinkTree()

    if (this.props.skipLayout) {
      return <Provider theme={theme}>{this.props.children}</Provider>
    }
    return (
      <Provider theme={theme}>
        <MenuProvider
          onClose={() => {
            this.setState({ showFlyout: false })
            document.body.classList.remove("modalOpen")
          }}
        >
          <Layout>
            <Layout.Content my={24}>
              <Breadcrumbs items={this.buildBreadcrumbLinks()} />
              {this.props.children}
            </Layout.Content>
          </Layout>
        </MenuProvider>
      </Provider>
    )
  }
}
