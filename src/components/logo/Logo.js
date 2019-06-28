import React from "react"
import src from "./primary.svg"

export const variants = {
  primary: "primary",
  dark: "dark",
  alternate: "alternate",
}

function Logo({ variant = variants.primary, ...props }) {
  return <img src={require(`./${variant}.svg`)} alt="logo" {...props} />
}

export default Logo
