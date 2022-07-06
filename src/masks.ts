/* eslint-disable unicorn/no-unsafe-regex */
/* eslint-disable no-useless-escape */
const minHexLength = 7;
const minBase64Length = 66;
const base64Quartets = minBase64Length / 4;

export const masks = [
  /^\d+$/,
  /^(\d{2}|\d{4})-\d\d-\d\d$/,
  /^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/,
  /^[\dA-F]{8}(?:-[\dA-F]{4}){3}-[\dA-F]{12}$/,
  new RegExp(`^[\\da-f]{${minHexLength},}$`),
  new RegExp(`^[\\dA-F]{${minHexLength},}$`),
  /^[\w\-]{18,}?\.[\w\-]{3,}?\.[\w\-]{39,}?$/,
  new RegExp(`^[a-zA-Z0-9\-_]{${minBase64Length},}$`),
  new RegExp(`^(?:[A-Za-z0-9+/]{4}){${base64Quartets},}(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?`),
];
