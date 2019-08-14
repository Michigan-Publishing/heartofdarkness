import React, { Component, useState } from "react"
import { unescapeWithRegexp } from "../../utils/escape"
import Button from "../button"

export default class MapNavigation extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    areaCoords: null,
  }

  componentDidMount() {
    if (this.mapper && this.mapper.computeCenter) {
      const areaCoords = (
        JSON.parse(unescapeWithRegexp(this.props.map)).areas || []
      ).reduce((accum, area) => {
        area.coords = JSON.parse(area.coords)
        accum[area.name] = this.mapper.computeCenter(area)
        return accum
      }, {})
      this.setState({ areaCoords })
    }
  }

  render() {
    const { imageSrc, map: mapString, alt } = this.props
    var map = ""
    try {
      map = JSON.parse(unescapeWithRegexp(mapString))
    } catch (ex) {}

    if (map && Array.isArray(map.areas)) {
      map.areas.forEach(area => {
        area.coords = JSON.parse(area.coords)
      })
    } else {
      map.areas = []
    }

    return (
      <>
        {map.areas.map(item => (
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
