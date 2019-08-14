import React from "react"
import styled from "styled-components"

import image from "./map.png"

const MapWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
    width: auto;
    border-left: 2px solid #896344;
    border-bottom: 2px solid #896344;
  }
`
export default function() {
  return (
    <MapWrapper>
      <img src={image} />
    </MapWrapper>
  )
}
