import React from "react"
import marksy from "marksy/jsx"
import { FulcrumImageVideo, FulcrumTextAudio } from "../fulcrum"
import AboutTheAuthor from "../aboutTheAuthor"
import MapNavigation from "../MapNavigation"

const compile = marksy({
  createElement: React.createElement,
  components: {
    FulcrumImageVideo,
    FulcrumTextAudio,
    AboutTheAuthor,
    MapNavigation,
  },
})

const Markdown = ({ children }) => children && compile(children).tree

export default Markdown
