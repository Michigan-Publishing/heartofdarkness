import React from "react"
import styled from "styled-components"
import palette from "../../utils/palette"
import { TABLET_LANDSCAPE_WIDTH } from "../../constants"

const ContentWrapper = styled.div`
  background-color: rgba(${palette.rgbRelatedBackground}, 0.9);
  box-shadow: 0 0 6.5rem rgba(${palette.rgbRelatedBackground}, 100);
  color: ${palette.white};
  padding: 1.5rem;
  max-height: 80vh;
  width: 50vw;
  margin: 6rem 0;
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
  color: ${palette.white};
`

const Heading = styled.h3`
  color: ${palette.white};
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
