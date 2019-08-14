import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import Background from "./Background"

storiesOf("Background", module).add("default", () => (
  <div style={{ width: 1600, height: 1600 }}>
    <Background>This is some text in the background</Background>
  </div>
))
