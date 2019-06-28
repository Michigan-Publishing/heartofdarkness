import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { select } from "@storybook/addon-knobs"

import { Button, ButtonLink, variants } from "./Button"

storiesOf("Button", module)
  .add("Button", () => {
    const variant = select("Variant", Object.keys(variants), "default")
    return (
      <Button variant={variant} onClick={action("CLICK")}>
        Button
      </Button>
    )
  })
  .add("ButtonLink", () => <ButtonLink>Link</ButtonLink>)
