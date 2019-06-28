import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { select } from "@storybook/addon-knobs"

import Logo, { variants } from "./Logo"

storiesOf("Logo", module).add("default", () => {
  const variant = select(
    "Variant",
    [variants.primary, variants.alternate, variants.dark],
    variants.primary
  )
  return <Logo variant={variant} />
})
