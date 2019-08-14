import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Logo from "../logo"
import Button from "../button"

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

  @media (max-width: 768px) {
    position: unset;
    right: unset;
    min-width: unset;
    width: 90%;
  }
`

const TopLeft = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 400px;
  height: 200px;
  z-index: 10;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    position: unset;
    left: unset;
    top: unset;
    min-width: unset;
    width: 90%;
  }
`

const LogoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.colors.darkBlue};
  flex-direction: column;
`

const BackButton = styled(Button)`
  width: 80%;
  margin-top: 20px;
  margin-bottom: 20px;
`

export function ContentPage({ imageSrc, children, logoArea }) {
  return (
    <Container src={imageSrc}>
      <TopLeft>
        <LogoContainer>
          <a href="/">
            <Logo />
          </a>
          <BackButton onClick={() => window.history.back()}>Go back</BackButton>
        </LogoContainer>
      </TopLeft>

      <Content>{children}</Content>
    </Container>
  )
}
