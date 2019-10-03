import { Link } from "gatsby"
import React, { Fragment } from "react"
import styled, { css } from "styled-components"

import { TABLET_LANDSCAPE_WIDTH } from "../../constants"
import Heading from "../Heading"

import { LayoutWrapper } from "../LayoutWrapper"

const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  padding: 24px;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.4rem;
  font-weight: normal;
  font-size: 1.3rem;

  & a {
    color: ${({ theme }) => theme.colors.brandColor};
    text-decoration-style: dotted;
  }

  & a:hover {
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.light};
  }

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    flex-direction: column;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  margin-bottom: 1rem;

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    min-width: unset;
    font-size: 1rem;
    width: 100%;
    margin-bottom: 1rem;
  }
`

const ChildLink = styled(Link)`
  margin-left: 0.4rem;
  line-height: 1.6rem;
`

function getLinkColumn(link) {
  return (
    <Fragment>
      <Link to={link.slug}>
        <strong>{link.title}</strong>
      </Link>
    </Fragment>
  )
}

function Footer({ links }) {
  if (!links) {
    return null
  }

  return (
    <FooterWrapper>
      <LayoutWrapper>
        <Column style={{ width: "50%" }}>
          <Heading level="2" mb="1rem" color="brandColor">
            <a href="/">Heart of Darkness</a>
          </Heading>
          <LinkContainer>
            {links.map(link => (
              <Column key={link.slug}>{getLinkColumn(link, Link)}</Column>
            ))}
          </LinkContainer>
        </Column>
        <Column />
      </LayoutWrapper>
    </FooterWrapper>
  )
}

export default Footer
