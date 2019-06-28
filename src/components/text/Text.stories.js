import React from "react"

import { storiesOf } from "@storybook/react"
import { select } from "@storybook/addon-knobs"

import { variants, Text } from "./Text"

storiesOf("Text", module).add("with text", () => {
  const variant = select("Variant", Object.keys(variants), variants.default)
  const size = select("Size", [1, 2, 3, 4, 5, 6, 7, 8], 1)

  return (
    <Text variant={variant} fontSize={size}>
      This is some text
    </Text>
  )
})
