import React from "react"
import src from "./Logo.png"

export const variants = {
  primary: "primary",
  dark: "dark",
  alternate: "alternate",
}

function Logo({ variant = variants.primary, ...props }) {
  return <img src={src} alt="Heart of Darkness" {...props} />
}

export default Logo
