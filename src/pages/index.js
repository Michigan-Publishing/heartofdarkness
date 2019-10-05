import React from "react"
import { useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Navigation from "../components/Navigation"
import imageSrc from "./quadrant_map.png"
import { escapeWithRegexp } from "../utils/escape"
import styled from "styled-components"
import welles from "./welles.jpg"
import Heading from "../components/Heading"

export const Main = props => {
  const links = props.links.map(link => ({
    href: link.slug,
    name: link.title,
    alt: link.title,
  }))

  var navigation = {
    name: "Main Navigation",
    links,
  }

  return (
    <Layout>
      <Layout.Content my={24} p={20}>
        <Heading>Heart of Darkness</Heading>
        <p>
          Commodo labore aliquip occaecat ipsum ex et ea non commodo laboris
          laboris laborum deserunt non. Commodo voluptate nulla nulla cillum
          quis consectetur consectetur magna do aute tempor dolore nulla.
          Deserunt occaecat fugiat fugiat et labore laboris sint est.
        </p>
        <img
          src={welles}
          width={613}
          height="auto"
          style={{ marginBottom: 20 }}
        />
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

  return output
}

function DataWrapper(props) {
  const data = useStaticQuery(graphql`
    query IndexQuery {
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

  return <Main {...props} links={nodes[0].children} />
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
