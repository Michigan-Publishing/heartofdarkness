import React from "react"

import { storiesOf } from "@storybook/react"
import IllustratedMap from "./IllustratedMap"

storiesOf("Map", module).add("default", () => {
  return <IllustratedMap />
})
