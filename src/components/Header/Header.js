import React from "react"
import styled from "styled-components"
import { Box, Flex } from "rebass"
import Logo from "../logo"
import { Text } from "../text/Text"
import { LayoutWrapper } from "../LayoutWrapper"

const HeaderContainer = styled(Flex)`
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.brandColor};
  min-height: 120px;

  ${Box}:nth-child(2) {
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  ${Box} img {
    margin: 0 2rem;
  }
`

function Header({ children }) {
  return (
    <HeaderContainer>
      <LayoutWrapper>
        <Box
          width={[1, 1 / 2]}
          style={{ display: "flex", alignItems: "center" }}
        >
          <a href="/">
            <Logo variant="dark" alt="Heart of Darkness Home" />
          </a>
        </Box>
        <Box width={[1, 1 / 2]} alignItems="flex-end">
          {children}
        </Box>
      </LayoutWrapper>
    </HeaderContainer>
  )
}

export default Header
