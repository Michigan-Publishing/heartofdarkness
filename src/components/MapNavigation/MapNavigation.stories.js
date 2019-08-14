import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { escapeWithRegexp } from "../../utils/escape"

import imageSrc from "../../pages/quadrant_map.png"

import MapNavigation from "./MapNavigation"

const areas = [
  {
    shape: "rect",
    href: "/?path=/story/contentpage--default",
    coords: "[ 0, 0, 496, 435 ]",
    name: "Previous Explorations",
    alt: "Visit previous explorations",
  },
  {
    shape: "rect",
    href: "/?path=/story/contentpage--default",
    coords: "[ 502, 0, 907, 390 ]",
    name: "Current Excavations",
    alt: "Visit current excavations",
  },
  {
    shape: "rect",
    href: "/?path=/story/contentpage--default",
    coords: "[ 0, 443, 502, 670 ]",
    name: "Introduction to the Gabii Project",
    alt: "Visit an introduction to the Gabii project",
  },
  {
    shape: "rect",
    href: "/?path=/story/contentpage--default",

    coords: "[ 502, 390, 907, 670 ]",
    name: "The Environment of Gabii",
    alt: "Visit the environment of Gabii",
  },
]

var MAP = {
  name: "Gabii Navigation",
  areas,
}

storiesOf("MapNavigation", module).add("default", () => (
  <>
    <MapNavigation
      imageSrc={imageSrc}
      map={escapeWithRegexp(JSON.stringify(MAP))}
    />
  </>
))
