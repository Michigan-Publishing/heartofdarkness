import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { select } from "@storybook/addon-knobs"

import Footer from "./Footer"

const links = [
  {
    title: "one",
    slug: "/test1",
    children: [
      { title: "one.first", slug: "/test1.one" },
      { title: "one.second", slug: "/test1.two" },
    ],
  },
  {
    title: "two",
    slug: "/test2",
    children: [
      { title: "two.first", slug: "/test1.one" },
      { title: "two.second", slug: "/test1.two" },
    ],
  },
  {
    title: "three",
    slug: "/test3",
    children: [
      { title: "three.first", slug: "/test3.one" },
      { title: "three.second", slug: "/test3.two" },
    ],
  },
]

storiesOf("Footer", module).add("default", () => {
  return <Footer links={links} />
})
