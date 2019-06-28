import React, { Component } from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import palette from "../../utils/palette";

import businessImage from "./business.png";
import academicImage from "./academic.png";
import personalImage from "./personal.png";
import scientificImage from "./scientific.png";
import storyImage from "./story.png";

const VerticalTabs = styled(Tabs)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  background-color: ${palette.gameBackground};
  flex-shrink: 1;
  flex-grow: 0;
  padding: 2rem;
`;

const VerticalTabList = styled(TabList)`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  padding-left: 0;

  & > li {
    border-radius: 0;
    color: ${palette.white};
    background-color: ${palette.relatedBackground};
    margin-bottom: 1rem;
    margin-top: 0;
  }

  & > li[aria-selected="true"] {
    background-color: ${palette.contentBackground};
  }
`;

const Image = styled.img`
  max-width: 100%;
  background-color: ${palette.white};
  padding: 1rem;
`;

export default class extends Component {
  render() {
    return (
      <VerticalTabs>
        <VerticalTabList>
          <Tab>Business Email</Tab>
          <Tab>Personal Email</Tab>
          <Tab>Scientific Article</Tab>
          <Tab>Short Story</Tab>
          <Tab>Academic Essay</Tab>
        </VerticalTabList>
        <TabPanel style={{ width: "calc(600 + 2rem)" }}>
          <Image
            src={businessImage}
            alt="For business email, the writer could be an office worker, the subject could be communicating a new office policy and the audience could be fellow office workers."
          />
        </TabPanel>
        <TabPanel style={{ width: "calc(600 + 2rem)" }}>
          <Image
            src={personalImage}
            alt="For personal email, the writer could be anyone, the subject could be sharing a funny Internet meme, and the audience could be friends and family."
          />
        </TabPanel>
        <TabPanel style={{ width: "calc(600 + 2rem)" }}>
          <Image
            src={scientificImage}
            alt="For scientific article, the writer could be a scientist or a researcher, the subject could be the effects of sunlight on a chemical, and the audience could be fellow scientists or manufacturers of said chemical."
          />
        </TabPanel>
        <TabPanel style={{ width: "calc(600 + 2rem)" }}>
          <Image
            src={storyImage}
            alt="For short story, the writer could be anyone, the subject could be a short story about a moment in the writer’s life, and the audience could be general or specific readers who share the author’s experience."
          />
        </TabPanel>
        <TabPanel style={{ width: "calc(600 + 2rem)" }}>
          <Image
            src={academicImage}
            alt="For academic essay, the writer could be a student, the subject could be an argument against fracking, and the audience could be fellow students or oil companies that engage in fracking."
          />
        </TabPanel>
      </VerticalTabs>
    );
  }
}
