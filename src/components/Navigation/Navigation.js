import React, { Component, useState } from "react"
import styled from "styled-components"
import { unescapeWithRegexp } from "../../utils/escape"
import { Box } from "rebass"
import Button from "../button"
import Heading from "../Heading"

export default class MapNavigation extends Component {
  render() {
    const { navigation } = this.props
    return (
      <>
        <Heading mb={24}>{navigation.name}</Heading>
        {navigation.links.map(item => (
          <Button
            as="a"
            href={item.href}
            style={{ color: "#FFF" }}
            width="100%"
            mb="12px"
          >
            {item.name}
          </Button>
        ))}
      </>
    )
  }
}
