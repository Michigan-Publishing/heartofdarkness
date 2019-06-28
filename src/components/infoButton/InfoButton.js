import React, { Component } from "react";
import styled from "styled-components";
import TouchableOpacity from "../touchableOpacity";
import VisuallyHidden from "../visuallyHidden";
import icon from "./InfoIcon.svg";

export default class extends React.Component {
  render() {
    const { onClick } = this.props;

    return (
      <TouchableOpacity onClick={onClick}>
        <VisuallyHidden>View Info</VisuallyHidden>
        <img src={icon} style={{ width: 64, height: 64 }} />
      </TouchableOpacity>
    );
  }
}
