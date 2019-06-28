import React, { Component, Fragment } from "react"
import styled from "styled-components"
import Background from "../background"
import SiteHeading from "../siteHeading"
import Breadcrumbs from "../breadcrumbs"
import { MenuProvider, MenuConsumer, HamburgerButton } from "react-flyout-menu"
import FlyoutMenu from "../flyoutMenu"
import Footer, { FOOTER_HEIGHT } from "../footer"
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
  margin-top: 8.5rem;
  position: relative;
  z-index: 0;
  padding-bottom: ${FOOTER_HEIGHT}px;

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
    this.setState({
      headingHeight: this.headingWrapper.clientHeight,
    })
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
        const data = lookup[currentKey]
        list.push({
          title: data.title,
          slug: data.slug,
        })
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

    return (
      <Provider theme={theme}>
        <MenuProvider
          onClose={() => {
            this.setState({ showFlyout: false })
            document.body.classList.remove("modalOpen")
          }}
        >
          <Fragment>
            <HeadingWrapper
              ref={headingWrapper => (this.headingWrapper = headingWrapper)}
              id="heading-wrapper"
            >
              <HeadingRow>
                <SiteHeading />
                {
                  <MenuConsumer>
                    {({ closeElement, setToggleElement }) => (
                      <span style={{ fontSize: "1.5rem" }}>
                        <HamburgerButton
                          setToggleElement={setToggleElement}
                          closeElement={closeElement}
                          onClick={() => {
                            document.body.classList.add("modalOpen")
                          }}
                        />
                      </span>
                    )}
                  </MenuConsumer>
                }
              </HeadingRow>
              <HeadingRow>
                <Breadcrumbs items={this.buildBreadcrumbLinks()} />
              </HeadingRow>
            </HeadingWrapper>

            <Background>
              <FlyoutMenu isVisible={this.state.showFlyout} items={linkTree} />
              <ContentArea style={contentStyles} id="content-area-wrapper">
                {this.props.children}
              </ContentArea>
              <Footer links={linkTree} />
            </Background>
          </Fragment>
        </MenuProvider>
      </Provider>
    )
  }
}
