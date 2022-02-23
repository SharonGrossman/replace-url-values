import {masks} from './masks';
import {URL} from 'url';

export const replaceUrlValues = (url: string, replacement = '#val', fallback = 'unknown') => {
    try {
    const parseResult = parsePath(url);

    return `/${getChunks(parseResult)
        .map((chunk) => (isUrlValue(chunk) ? replacement : chunk))
        .join('/')}`;
    } catch(error) {
        return fallback;
    }
};

const parsePath = (url: string) => {
    if (!isSubUrl(url)) {
        return new URL(url).pathname;
    }

    const valuesIndex = url.indexOf('/');

    return url.substring(valuesIndex).split('&')[0];
};

const isSubUrl = (url: string) => url.startsWith('/');

const getChunks = (path: string) => path.split('/').filter((chunk) => chunk !== '');

const isUrlValue = (value: string): boolean => masks.some((mask) => value.match(mask));
