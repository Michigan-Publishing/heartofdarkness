import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: center / cover no-repeat url("${props => props.src}");
  position: relative;
`

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 60px;
  width: 40%;
  min-width: 400px;
  background-color: ${({ theme }) => theme.colors.blackTranslucent};
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  line-height: 1.25rem;
`

export function ContentPage({ imageSrc, children }) {
  return (
    <Container src={imageSrc}>
      <Content>{children}</Content>
    </Container>
  )
}
