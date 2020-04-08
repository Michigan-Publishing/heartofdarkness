import React, { Component } from "react"
import { useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Navigation from "../components/Navigation"
import Markdown from "../components/markdown"
import imageSrc from "./quadrant_map.png"
import { escapeWithRegexp } from "../utils/escape"
import styled from "styled-components"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import { withMDXScope } from "gatsby-mdx/context"
import welles from "./welles.jpg"
import Heading from "../components/Heading"

function hasContent(data) {
  return data.words || getBodyContent(data) != ""
}

function getBodyContent(data) {
  const items = data.rawBody.split("---")

  return items.length > 0 ? items[items.length - 1] : ""
}

function isIE11() {
  try {
    return !!window.MSInputMethodContext && !!document.documentMode
  } catch (ex) {
    return false
  }
}

export class Main extends Component {
  render() {
    const links = this.props.links.map(link => ({
      href: link.slug,
      name: link.title,
      alt: link.title,
    }))

    var navigation = {
      name: "Main Navigation",
      links,
    }
    const useMarkdownInsteadOfMDX = isIE11() || true

    return (
      <Layout>
        <Layout.Content my={24} p={20}>
          <Heading>{this.props.title}</Heading>
          <img
            src={welles}
            width={613}
            height="auto"
            style={{ marginBottom: 20 }}
          />
          {hasContent(this.props) &&
            (useMarkdownInsteadOfMDX ? (
              <Markdown>{getBodyContent(this.props)}</Markdown>
            ) : (
              <MDXRenderer {...this.props}>{this.props.body}</MDXRenderer>
            ))}
          <Navigation
            ml="auto"
            mr="auto"
            imageSrc={imageSrc}
            navigation={navigation}
          />
        </Layout.Content>
      </Layout>
    )
  }
}
const ScopedMain = withMDXScope(Main)

function getNodeTree(nodes, key = null, level = 0) {
  const newNodes = nodes.filter(item => item.node.frontmatter.parentKey === key)
  const output = newNodes.map(({ node }) => ({
    title: node.frontmatter.title,
    slug: node.fields.slug,
    level: level,
    children: getNodeTree(nodes, node.frontmatter.key, level + 1),
    sortOrder: node.frontmatter.sortOrder,
    rawBody: node.rawBody,
    body: node.code.body,
    words: node.wordCount.words,
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

  return output
}

function DataWrapper(props) {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      allMdx {
        edges {
          node {
            id
            rawBody
            code {
              body
            }
            wordCount {
              words
            }
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
  const { children, body, title } = nodes[0]

  return <ScopedMain {...props} {...nodes[0]} links={children} />
}

DataWrapper.frontmatter = {
  title: "Explore Gabii",
  written: "2019-04-01",
  layoutType: "post",
  key: "explore-gabii",
  parentKey: undefined,
  sortOrder: 1,
}

export default DataWrapper
