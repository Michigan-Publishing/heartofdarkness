import React from "react"
import styled from "styled-components"
import { Box } from "rebass"

const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 1;
`

const Content = styled(Box)`
  width: 1024px;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 1;
  height: fit-content;
`

export function LayoutWrapper({
  children,
  className,
  style,
  contentStyle,
  ...props
}) {
  return (
    <Container style={style}>
      <Content className={className} {...props} style={contentStyle}>
        {children}
      </Content>
    </Container>
  )
}
