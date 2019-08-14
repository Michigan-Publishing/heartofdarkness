import React from "react"
import Layout from "../components/Layout"
import MapNavigation from "../components/MapNavigation"
import imageSrc from "./map.png"
import { escapeWithRegexp } from "../utils/escape"
import styled from "styled-components"

const links = [
  {
    title: "one",
    slug: "/test1",
    children: [
      { title: "one.first", slug: "/test1.one" },
      { title: "one.second", slug: "/test1.two" },
    ],
  },
  {
    title: "two",
    slug: "/test2",
    children: [
      { title: "two.first", slug: "/test1.one" },
      { title: "two.second", slug: "/test1.two" },
    ],
  },
  {
    title: "three",
    slug: "/test3",
    children: [
      { title: "three.first", slug: "/test3.one" },
      { title: "three.second", slug: "/test3.two" },
    ],
  },
]

const areas = [
  {
    shape: "rect",
    href: "/temple-of-juno",
    coords: "[ 365, 356, 183, 218 ]",
    name: "Temple of Juno",
    alt: "Temple of Juno",
  },
  {
    shape: "rect",
    href: "/hamiltons-form",
    coords: "[369,295,505,424]",
    name: "Hamilton's Forum",
    alt: "Hamilton's Forum",
  },
  {
    shape: "rect",
    href: "/area-f",
    coords: "[ 544,273,616,342]",
    name: "Area F",
    alt: "Area F",
  },
  {
    shape: "rect",
    href: "/area-b",
    coords: "[573,176,709,271]",
    name: "Area B",
    alt: "Area B",
  },
  {
    shape: "rect",
    href: "/lago-di-castiglione",
    coords: "[ 5,7,478,206]",
    name: "Lago di Castiglione",
    alt: "Lago di Castiglione",
  },
]

var MAP = {
  name: "Gabii Navigation",
  areas,
}

export default function PreviousExplorations(props) {
  return (
    <Layout footerLinks={links}>
      <Layout.Content
        my={24}
        contentStyle={{
          borderTop: 0,
          borderRight: 0,
          borderColor: "#895E34",
        }}
      >
        <MapNavigation
          ml="auto"
          mr="auto"
          imageSrc={imageSrc}
          map={escapeWithRegexp(JSON.stringify(MAP))}
          hideTag
        />
      </Layout.Content>
    </Layout>
  )
}
