import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { select } from "@storybook/addon-knobs"

import Header from "./Header"

storiesOf("Header", module).add("default", () => {
  return (
    <Header>
      <a>one</a>
      <a>two</a>
      <a>three</a>
    </Header>
  )
})
