import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { escapeWithRegexp } from '../../utils/escape';

import MapNavigation from "./MapNavigation"

const areas = [
  { shape: 'rect', href: "/?path=/story/contentpage--default", coords: "[ 0, 0, 410, 154 ]", name: "40w 20h", alt: "This is the alt" },
  { shape: 'rect', href: "/?path=/story/contentpage--default", coords: "[ 411, 0, 1024, 309 ]", name: "60w 40h", alt: "This is the alt" },
  { shape: 'rect', href: "/?path=/story/contentpage--default", coords: "[ 0, 155, 410, 768 ]", name: "40w 80h", alt: "This is the alt" },
  { shape: 'rect', href: "/?path=/story/contentpage--default", coords: "[ 411, 310, 1024, 768 ]", name: "60w 60h", alt: "This is the alt" },
];

var MAP = {
	name: 'my-map',
	areas
};

storiesOf("MapNavigation", module).add("default", () => (
  <MapNavigation imageSrc="https://www.fillmurray.com/1024/768" 
    map={escapeWithRegexp(JSON.stringify(MAP))} />
))
