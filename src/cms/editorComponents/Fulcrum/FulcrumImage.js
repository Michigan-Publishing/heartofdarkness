import { imageFields, imageVideoBlock, imageVideoPattern, imageVideoPreview } from './functions';

const fulcrumType = 'image';
export default {
  id: "fulcrumImage",
  label: "Fulcrum Image Asset",
  fields: imageFields,
  pattern: imageVideoPattern(fulcrumType),
  fromBlock: function(match) {
    return {
      handle: match[1],
      title: match[2],
      width: match[3],
    };
  },
  toBlock: function(obj) {
    return imageVideoBlock(fulcrumType, obj.handle, obj.title, obj.width);
  },
  toPreview: function(obj) {
    return imageVideoPreview(obj.handle, obj.title, obj.width);
  }
};