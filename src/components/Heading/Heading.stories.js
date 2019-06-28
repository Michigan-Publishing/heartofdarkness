import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { select } from "@storybook/addon-knobs"
import { theme } from "../../constants/theme"
import Heading from "./Heading"

storiesOf("Heading", module).add("default", () => {
  const level = select("Level", [1, 2, 3, 4, 5, 6], 1)
  const color = select("Color", Object.keys(theme.colors), "brandColor")
  return (
    <Heading level={level} color={color}>
      This is a heading
    </Heading>
  )
})
