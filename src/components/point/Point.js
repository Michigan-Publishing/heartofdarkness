import React, { Component } from "react";
import styled from "styled-components";
import Markdown from "../markdown";

const Container = styled.div`
  margin: 0.75rem 0;
`;

const ContentSection = styled.div`
  margin: 0.75rem 0;
`;
export default class extends Component {
  render() {
    const { points, headerOffset } = this.props;

    return (
      <Container>
        {points.map((point, index) => {
          const slug = (point.title || '').toLowerCase().replace(/[^a-z\d\s]+$/g,"").replace(/ +/g, "-");
          
          return (
          <ContentSection key={slug}>
            <div 
              id={slug}
              style={{ 
                display: "block",
                position: "relative",
                top: -1 * headerOffset,
                visibility: "hidden",
              }}></div>
            <h2>{point.title}</h2>
            <Markdown>{point.point}</Markdown>
          </ContentSection>
        )
        })}
      </Container>
    );
  }
}
