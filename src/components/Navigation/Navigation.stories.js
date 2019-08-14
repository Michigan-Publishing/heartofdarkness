import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { escapeWithRegexp } from "../../utils/escape"

import imageSrc from "../../pages/quadrant_map.png"

import Navigation from "./Navigation"

const links = [
  {
    href: "/?path=/story/contentpage--default",
    name: "Previous Explorations",
    alt: "Visit previous explorations",
  },
  {
    href: "/?path=/story/contentpage--default",
    name: "Current Excavations",
    alt: "Visit current excavations",
  },
  {
    href: "/?path=/story/contentpage--default",
    name: "Introduction to the Gabii Project",
    alt: "Visit an introduction to the Gabii project",
  },
  {
    href: "/?path=/story/contentpage--default",
    name: "The Environment of Gabii",
    alt: "Visit the environment of Gabii",
  },
]

var navigation = {
  name: "Heart of Darkness Navigation",
  links,
}

storiesOf("Navigation", module).add("default", () => (
  <>
    <Navigation
      imageSrc={imageSrc}
      linkSection={escapeWithRegexp(JSON.stringify(navigation))}
    />
  </>
))
