import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import ContentArea from "./ContentArea"

storiesOf("ContentArea", module).add("default", () => (
  <ContentArea>
    This is a content area Thisi s more of a content area test
    <p>Yaaaa</p>
  </ContentArea>
))
