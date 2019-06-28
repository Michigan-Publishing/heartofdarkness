import React from "react"
import styled from "styled-components"
import { Text as BassText } from "rebass"

export const variants = {
  default: "default",
  serif: "serif",
}

function isSerif(variant) {
  return variant === variants.serif || variant === variants.smallSerif
}

export function Text({ variant, ...props }) {
  return (
    <BassText
      fontFamily={isSerif(variant) ? "serif" : "sans"}
      {...props}
      as="span"
    />
  )
}
