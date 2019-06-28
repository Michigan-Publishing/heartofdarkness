import { escapeWithRegexp, unescapeWithRegexp } from '../../../utils/escape';

export default {
  id: "aboutTheAuthor",
  label: "About the Author",
  fields: [
    { name: "headshot", label: "Headshot", widget: "image" },
    { name: "name", label: "Name", widget: "string" },
    { name: "bio", label: "Bio", widget: "markdown" },
    { name: "chapterDescription", label: "Chapter Description", widget: "markdown" },
    { name: "interviewDescription", label: "Interview Description", widget: "markdown" },
  ],
  pattern: new RegExp(`:::md-component AboutTheAuthor headshot="(.*?)" name="(.*)" bio="(.*?)" chapterDescription="(.*?)" interviewDescription="(.*?)"`),
  fromBlock: function(match) {
    return {
      headshot: unescapeWithRegexp(match[1]),
      name: unescapeWithRegexp(match[2]),
      bio: unescapeWithRegexp(match[3]),
      chapterDescription: unescapeWithRegexp(match[4]),
      interviewDescription: unescapeWithRegexp(match[5]),
    };
  },
  toBlock: function(obj) {
    return `:::md-component AboutTheAuthor headshot="${escapeWithRegexp(obj.headshot)}" name="${escapeWithRegexp(obj.name)}" bio="${escapeWithRegexp(obj.bio)}"` + 
      ` chapterDescription="${escapeWithRegexp(obj.chapterDescription)}" interviewDescription="${escapeWithRegexp(obj.interviewDescription)}"`;
  },
  toPreview: function(obj) {
    return `About the Author ${obj.name}`;
  }
};