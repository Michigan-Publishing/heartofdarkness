import React from "react"
import styled from "styled-components"
import { Box } from "rebass"

const PanelContainer = styled(Box)`
  border: 1px solid ${({ theme }) => theme.colors.brandColor};
`

const PanelTitle = styled(Box)`
  background-color: ${({ theme }) => theme.colors.brandColor};
  color: ${({ theme }) => theme.colors.white};
`

PanelTitle.defaultProps = {
  py: 10,
  px: 15,
  fontFamily: "default",
  fontSize: "3",
}

const PanelBody = styled(Box)``

PanelBody.defaultProps = {
  fontFamily: "default",
  p: 15,
}

function Panel({ title, body, props = {}, titleProps = {}, bodyProps = {} }) {
  return (
    <PanelContainer {...props}>
      <PanelTitle>{title}</PanelTitle>
      <PanelBody>{body}</PanelBody>
    </PanelContainer>
  )
}

export default Panel
