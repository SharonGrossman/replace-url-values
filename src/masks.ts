const minHexLength = 7;
const minBase64Length = 66;
const base64Quartets = minBase64Length / 4;

export const masks = [
    /^\d+$/,
    /^(\d{2}|\d{4})\-\d\d\-\d\d$/,
    /^[\da-f]{8}\-[\da-f]{4}\-[\da-f]{4}\-[\da-f]{4}\-[\da-f]{12}$/,
    /^[\dA-F]{8}\-[\dA-F]{4}\-[\dA-F]{4}\-[\dA-F]{4}\-[\dA-F]{12}$/,
    RegExp(`^[\\da-f]{${minHexLength},}$`),
    RegExp(`^[\\dA-F]{${minHexLength},}$`),
    /^[a-zA-Z0-9\-_]{18,}?\.[a-zA-Z0-9\-_]{3,}?\.[a-zA-Z0-9\-_]{39,}?$/,
    RegExp(`^[a-zA-Z0-9\-_]{${minBase64Length},}$`),
    RegExp(`^(?:[A-Za-z0-9+/]{4}){${base64Quartets},}(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?`)
];
