import React from "react"
import styled from "styled-components"
import { Link as BassLink } from "rebass"

export const variants = {
  default: "default",
  unity: "unity",
}

const Link = styled(BassLink)`
  color: ${({ theme }) => theme.colors.brandColor};
  text-decoration: none;
  border-bottom: 3px
    ${({ variant }) => (variant === variants.default ? "solid" : "dashed")}
    ${({ theme }) => theme.colors.brandColor};
  font-family: ${({ theme, variant }) =>
    variant === variants.default ? theme.fonts.sans : theme.fonts.serif};
`

Link.defaultProps = {
  variant: "default",
  as: "a",
}

export default Link
