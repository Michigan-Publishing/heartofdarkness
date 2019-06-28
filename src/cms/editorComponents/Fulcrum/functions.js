const fulcrumDefaultFields = [
  { name: "handle", label: "Fulcrum Handle", widget: "string" },
  { name: "title", label: "Title", widget: "string" },
];

const fulcrumImageVideoFields = fulcrumDefaultFields.concat(
  [
    // I don't think this is actually used, but I'm leaving it here for some reason or another.
    // { name: "height", label: "Height", widget: "number" },
    { name: "width", label: "Width", widget: "number" },
  ]);

export const textFields = fulcrumDefaultFields;
export const audioFields = fulcrumDefaultFields;
export const imageFields = fulcrumImageVideoFields;
export const videoFields = fulcrumImageVideoFields;

export const textAudioBlock =  (blockType, handle, title) => `:::md-component FulcrumTextAudio blockType="${blockType}" handle="${encodeURI(handle)}" title="${escape(title)}"`
export const imageVideoBlock = (blockType, handle, title, width) => `:::md-component FulcrumImageVideo blockType="${blockType}" handle="${encodeURI(handle)}" title="${escape(title)}" width="${width}"`;

export const textAudioPattern = (blockType) => new RegExp(`:::md-component FulcrumTextAudio blockType="${blockType}" handle="(.*?)" title="(.*?)"$`);
export const imageVideoPattern = (blockType) => new RegExp(`:::md-component FulcrumImageVideo blockType="${blockType}" handle="(.*?)" title="(.*?)" width="(.*?)"$`);

export const textAudioPreview =  (handle, title) => `<iframe src='https://www.fulcrum.org/embed?hdl=${handle}' title='${escape(title)}' style='display:block; overflow:hidden; border-width:0; width:98%; max-width:98%; max-height:400px; margin:auto'></iframe>`;	
export const imageVideoPreview = (handle, title, width) => `<div style='width:auto; page-break-inside:avoid; -webkit-column-break-inside:avoid; break-inside:avoid; max-width:${width}px; margin:auto'><div style='overflow:hidden; padding-bottom:56.25%; position:relative; height:0;'><iframe src='https://www.fulcrum.org/embed?hdl=${handle}' title='${escape(title)}' style='overflow:hidden; border-width:0; left:0; top:0; width:100%; height:100%; position:absolute;'></iframe></div></div>`;
