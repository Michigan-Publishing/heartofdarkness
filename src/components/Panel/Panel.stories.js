import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { select } from "@storybook/addon-knobs"

import Panel from "./Panel"

storiesOf("Panel", module).add("default", () => {
  return (
    <Panel
      title="This is the title"
      body="Consequat ea aute ut velit incididunt elit irure ex tempor eiusmod consequat nulla culpa cupidatat. Duis fugiat pariatur occaecat aute ad quis est laboris pariatur enim. Nostrud ullamco ullamco occaecat aliquip est occaecat. Aliquip aute sint cupidatat pariatur. Eu mollit tempor id deserunt. In deserunt ea laboris ad anim officia eiusmod magna non aliquip velit. Cupidatat Lorem commodo mollit in sit non sunt magna laborum."
    />
  )
})
