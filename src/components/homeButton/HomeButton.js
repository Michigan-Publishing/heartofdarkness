import React, { Component } from "react";
import styled from "styled-components";
import TouchableOpacity from "../touchableOpacity";
import VisuallyHidden from "../visuallyHidden";
import homeIcon from "./HomeIcon.svg";

export default class extends React.Component {
  render() {
    const { onClick } = this.props;

    return (
      <TouchableOpacity onClick={onClick}>
        <VisuallyHidden>Go Home</VisuallyHidden>
        <img src={homeIcon} style={{ width: 64, height: 64 }} />
      </TouchableOpacity>
    );
  }
}
