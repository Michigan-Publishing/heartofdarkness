import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { MenuProvider, MenuConsumer, HamburgerButton } from "react-flyout-menu"

import { theme, Provider } from "../../constants/theme"
import Header from "../Header"
import Footer from "../Footer"
import Background from "../background"
import FlyoutMenu from "../flyoutMenu"
import ContentArea from "../contentArea"
import { Box } from "rebass"

import { LayoutWrapper as OriginalLayoutWrapper } from "../LayoutWrapper"

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;

  & #main-menu path {
    fill: ${({ theme }) => theme.colors.darkBlue} !important;
  }
`

const Body = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
`

const Content = styled(OriginalLayoutWrapper)`
  width: 100%;
  display: flex;
  flex-direction: column;
`

function getNodeTree(nodes, key = null, level = 0) {
  const newNodes = nodes.filter(item => item.node.frontmatter.parentKey === key)

  const output = newNodes.map(({ node }) => ({
    title: node.frontmatter.title,
    slug: node.fields.slug,
    level: level,
    children: getNodeTree(nodes, node.frontmatter.key, level + 1),
    sortOrder: node.frontmatter.sortOrder,
  }))

  output.sort((a, b) => {
    if (a.sortOrder < b.sortOrder) {
      return -1
    }
    if (a.sortOrder > b.sortOrder) {
      return 1
    }
    return 0
  })

  debugger
  return output
}

export function Layout({ footerLinks, children, ...props }) {
  const [showFlyout, setShowFlyout] = useState(false)

  return (
    <MenuProvider
      onClose={() => {
        setShowFlyout(false)
        document.body.classList.remove("modalOpen")
      }}
    >
      <Provider theme={theme}>
        <Background>
          <LayoutWrapper>
            <Box width={["100%", 1024]} mx="auto">
              <Header>
                <>
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
                </>
              </Header>
              <ContentArea>{children}</ContentArea>
              <Footer links={footerLinks} />
            </Box>
            <FlyoutMenu isVisible={showFlyout} items={footerLinks} />
          </LayoutWrapper>
        </Background>
      </Provider>
    </MenuProvider>
  )
}

Layout.Content = Content

function DataWrapper(props) {
  const data = useStaticQuery(graphql`
    query BasicQuery {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              key
              parentKey
              title
              sortOrder
            }
          }
        }
      }
    }
  `)

  const nodes = getNodeTree(data.allMdx.edges)

  return <Layout {...props} footerLinks={nodes[0].children} />
}

DataWrapper.Content = Content

export default DataWrapper
