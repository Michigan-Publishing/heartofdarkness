import React from "react"
import styled from "styled-components"
import palette from "../../utils/palette"
import { TABLET_LANDSCAPE_WIDTH } from "../../constants"

const ContentWrapper = styled.div`
  color: ${({ theme }) => theme.colors.darkBlue};
  padding: 1.5rem;
  max-height: 80vh;
  margin: 1rem 0 6rem 0;
  width: 85%;
  align-self: center;

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    padding: 1rem;
    max-width: 95vw;
    width: 95vw;

    & h3,
    ul {
      padding: 0 1rem;
    }
  }
`

const Link = styled.a`
  color: ${({ theme }) => theme.colors.darkBlue};
`

const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.darkBlue};
  margin: 0;
  font-size: 1.5rem;
  font-weight: 800;
`

const ListContainer = styled.ul`
  padding: 0;
  margin-left: 0.75rem;
  list-style-type: none;
`

const ListItem = styled.li`
  margin: 1.5rem 0;
`

export default class extends React.Component {
  render() {
    const { relatedLinks } = this.props
    return (
      <ContentWrapper>
        <Heading>Related Content</Heading>
        <ListContainer>
          {relatedLinks.map(link => (
            <ListItem key={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </ListItem>
          ))}
        </ListContainer>
      </ContentWrapper>
    )
  }
}
