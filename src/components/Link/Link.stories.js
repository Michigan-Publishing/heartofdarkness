import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { select } from "@storybook/addon-knobs"

import Link, { variants } from "./Link"

storiesOf("Link", module).add("default", () => {
  const variant = select("Variant", Object.keys(variants), variants.default)

  return <Link variant={variant}>This is a test link</Link>
})
