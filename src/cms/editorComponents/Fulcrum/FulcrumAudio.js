import { audioFields, textAudioBlock, textAudioPattern, textAudioPreview } from './functions';

const fulcrumType = 'audio';
export default {
  id: "fulcrumAudio",
  label: "Fulcrum Audio Asset",
  fields: audioFields,
  pattern: textAudioPattern(fulcrumType),
  fromBlock: function(match) {
    return {
      handle: match[1],
      title: match[2],
    };
  },
  toBlock: function(obj) {
    return textAudioBlock(fulcrumType, obj.handle, obj.title);
  },
  toPreview: function(obj) {
    return textAudioPreview(obj.handle, obj.title);
  }
};