import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import { ContentPage } from "./ContentPage"

storiesOf("ContentPage", module).add("default", () => (
  <ContentPage imageSrc="https://www.fillmurray.com/1024/768">
    <>
      <h2>This is a heading</h2>
      <p>
        Reprehenderit laborum dolore aliqua laboris. Dolor sit sit occaecat sunt
        elit labore ipsum veniam eiusmod anim eu officia occaecat. Elit labore
        proident adipisicing cillum quis deserunt eu in consectetur minim fugiat
        do.
      </p>
      <h3>This is another heading</h3>
      <p>
        Anim deserunt deserunt laboris esse dolor dolor in aute officia id ut.
        Eiusmod in cillum anim dolore Lorem aliquip officia pariatur. Mollit
        laborum commodo Lorem dolor voluptate excepteur qui officia laborum
        nulla duis. Tempor cupidatat et dolore in. Et incididunt duis
        reprehenderit do dolore et dolore eiusmod fugiat fugiat consequat
        laboris. Anim tempor et ad labore id fugiat excepteur pariatur in id
        commodo.
      </p>
    </>
  </ContentPage>
))
