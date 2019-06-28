import { videoFields, imageVideoBlock, imageVideoPattern, imageVideoPreview } from './functions';

const fulcrumType = 'video';
export default {
  id: "fulcrumVideo",
  label: "Fulcrum Video Asset",
  fields: videoFields,
  pattern: imageVideoPattern(fulcrumType),
  fromBlock: function(match) {
    return {
      handle: match[1],
      title: unescape(match[2]),
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