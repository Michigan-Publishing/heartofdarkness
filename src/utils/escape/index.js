// import escapeRegExp from 'lodash.escaperegexp';

export const escapeWithRegexp = (originalString) => escape(originalString || '').replace(/\*/g, '\\\*');

export const unescapeWithRegexp = (originalString) => unescape( (originalString || '') ).replace(/\\\*/g, '*');