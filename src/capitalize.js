#!/usr/bin/env node

export const capitalize = (text) => {
  if (text === '') {
    return '';
  }
  const firstSymbol = text[0].toUpperCase();
  const restSubstring = text.slice(1);
  return `${firstSymbol}${restSubstring}`;
};
