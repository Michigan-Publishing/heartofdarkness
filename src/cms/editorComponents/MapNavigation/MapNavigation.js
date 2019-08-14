import Immutable from 'immutable';
import React from 'react';
import { escapeWithRegexp, unescapeWithRegexp } from '../../../utils/escape';
import MapNavigation from '../../../components/MapNavigation';

export default {
  id: "mapNavigation",
  label: "Map Navigation",
  fields: [
    { name: "name", label: "Name", widget: "string" },
    { name: "imageSrc", label: "Background Image", widget: "image" },
    { 
      name: "map",
      label: "Mappings",
      widget: "object",
      fields: [
        { name: "name", label: "Name", widget: "string" },
        {
          name: "areas", 
          label: "Areas", 
          widget: "list", 
          fields: [
            { 
              name: "shape", 
              label: "Shape", 
              widget: "select",
              options: [ 
                { label: "Rectangle", value: "rect" },
                { label: "Circle", value: "circle" },
                { label: "Polygohn", value: "poly" },
                { label: "Default", value: "default" }
              ]
            },
            { name: "name", label: "Name", widget: "string" },
            { name: "coords", label: "Coordinates", widget: "string" },
            { name: "href", label: "Link To URL", widget: "string" },
            { name: "alt", label: "Alternate Text", widget: "string" },
          ]
        }
      ]
    }
  ],
  pattern: new RegExp(`:::md-component MapNavigation name="(.*?)" imageSrc="(.*?)" map="(.*)"`),
  fromBlock: function(match) {
    const mapVal = match[3];
    const map = JSON.parse(unescapeWithRegexp((mapVal || '') == '' ? '{}' : mapVal));
    return {
      name: unescapeWithRegexp(match[1]),
      imageSrc: unescapeWithRegexp(match[2]),
      map: Immutable.fromJS(map),
    };
  },
  toBlock: function(obj) {
    return `:::md-component MapNavigation name="${escape(obj.name)}" imageSrc="${escapeWithRegexp(obj.imageSrc)}"` + 
      ` map="${escapeWithRegexp(JSON.stringify(obj.map))}"`;
  },
  toPreview: function(obj) {
    return <MapNavigation name={obj.name} imageSrc={obj.imageSrc} 
      map={escapeWithRegexp(JSON.stringify(obj.map.toJS()))} />
  }
};