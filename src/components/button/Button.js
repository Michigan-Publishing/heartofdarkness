import React from "react"
import styled, { css } from "styled-components"
import { Button as BassButton } from "rebass"

export const variants = {
  default: "default",
  alternate: "alternate",
}

const defaultStyle = css`
  background-color: ${({ theme }) => theme.colors.brandColor};
  color: ${({ theme }) => theme.colors.white};
`

const alternateStyle = css`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.brandColor};
  border: 2px solid ${({ theme }) => theme.colors.brandColor};
`

export const Button = styled(BassButton)`
  ${({ variant }) =>
    variant === variants.default ? defaultStyle : alternateStyle}
`

Button.defaultProps = {
  as: "button",
  fontSize: 2,
  py: "1.5rem",
  px: "2rem",
  variant: "default",
}

const LinkWrapper = styled.span`
  display: inline-block;
  margin-top: 1.5rem;
`

export const ButtonLink = props => (
  <LinkWrapper>
    <Button as="a" {...props} />
  </LinkWrapper>
)
