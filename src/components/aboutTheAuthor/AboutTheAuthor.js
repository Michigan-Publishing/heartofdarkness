import React, { Component } from 'react';
import Markdown from '../markdown';
import { unescapeWithRegexp } from '../../utils/escape';

export default class AboutTheAuthor extends Component {
  render() {
    const { headshot, name, bio, chapterDescription, interviewDescription } = this.props;
    return (
      <div style={{ paddingBottom: 30 }}>
        <img style={{ float: "left", paddingRight: 10, width: 200 }} src={unescapeWithRegexp(headshot)} alt={unescapeWithRegexp(name)} />
        <Markdown>{unescapeWithRegexp(bio)}</Markdown>
        <Markdown>{unescapeWithRegexp(chapterDescription)}</Markdown>
        <Markdown>{unescapeWithRegexp(interviewDescription)}</Markdown>
      </div>
    );
  }
}