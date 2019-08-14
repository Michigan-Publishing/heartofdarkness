import React from "react"
import { useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Navigation from "../components/Navigation"
import imageSrc from "./quadrant_map.png"
import { escapeWithRegexp } from "../utils/escape"
import styled from "styled-components"
import welles from "./welles.jpg"
import Heading from "../components/Heading"

const links = [
  {
    href: "/pages/explore-gabii/previous-explorations/",
    name: "Previous Explorations",
    alt: "Visit previous explorations",
  },
  {
    href: "/pages/explore-gabii/current-excavations/",
    name: "Current Excavations",
    alt: "Visit current excavations",
  },
  {
    href: "/pages/explore-gabii/the-gabii-project/",
    name: "Introduction to the Gabii Project",
    alt: "Visit an introduction to the Gabii project",
  },
  {
    href: "/pages/explore-gabii/the-environmant-of-gabii/",
    name: "The Environment of Gabii",
    alt: "Visit the environment of Gabii",
  },
]

var navigation = {
  name: "Main Navigation",
  links,
}

export default props => {
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

export const frontmatter = {
  title: "Explore Gabii",
  written: "2019-04-01",
  layoutType: "post",
  key: "explore-gabii",
  parentKey: undefined,
}

export const query = `

`
