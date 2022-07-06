import { masks } from './masks.js';

const isSubUrl = (url: string) => url.startsWith('/');

const parsePath = (url: string) => {
  if (!isSubUrl(url)) {
    return new URL(url).pathname;
  }

  const valuesIndex = url.indexOf('/');

  return url.slice(Math.max(0, valuesIndex)).split('&')[0];
};

const getChunks = (path: string) => path.split('/').filter((chunk) => chunk !== '');

const isUrlValue = (value: string): boolean => masks.some((mask) => value.match(mask));

export const replaceUrlValues = (url: string, replacement = '#val', fallback = 'unknown') => {
  try {
    const parseResult = parsePath(url);

    if (!parseResult) {
      return fallback;
    }

    return `/${getChunks(parseResult)
      .map((chunk) => (isUrlValue(chunk) ? replacement : chunk))
      .join('/')}`;
  } catch {
    return fallback;
  }
};
