import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { select } from "@storybook/addon-knobs"

import Blockquote from "./Blockquote"

storiesOf("Blockquote", module).add("default", () => {
  return (
    <Blockquote>
      Lorem incididunt incididunt ipsum enim aute ad labore mollit minim laborum
      nisi. Proident sit in sunt eiusmod nulla non sint. Ut ut aute occaecat
      ullamco dolore cupidatat nisi exercitation cupidatat irure aute qui.
      Exercitation magna ullamco dolor sunt fugiat sunt tempor aliquip esse
      mollit exercitation cupidatat magna. Anim quis ullamco aliqua ipsum Lorem
      ullamco eiusmod ex occaecat quis et nisi.
    </Blockquote>
  )
})
