import React, { Component } from "react";
import styled from "styled-components";

import WordCloud from "react-d3-cloud";
import palette from "../../utils/palette";

import VisuallyHidden from "../visuallyHidden";

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 45;

const Wrapper = styled.div`
  background-color: ${palette.white};
`;

export default class extends Component {
  mounted = false;

  componentDidMount() {
    this.mounted = true;
  }

  render() {
    if (!this.mounted) {
      return null;
    }

    const { data } = this.props;

    return (
      <Wrapper>
        <span aria-hidden="true">
          <WordCloud
            data={data}
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
            width={600}
            height={500}
          />
        </span>
        <VisuallyHidden>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Occurances</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.value}>
                  <td>{item.text}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </VisuallyHidden>
      </Wrapper>
    );
  }
}
