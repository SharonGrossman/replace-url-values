import {URL} from 'url';
import {masks} from './masks';

export const replaceUrlValues = (url: string, replacement = '#val') => {
    const parseResult = parsePath(url);
    return `/${getChunks(parseResult)
        .map((chunk) => (isUrlValue(chunk) ? replacement : chunk))
        .join('/')}`;
};

const parsePath = (url: string) => new URL(url).pathname;

const getChunks = (path: string) => path.split('/').filter((chunk) => chunk !== '');

const isUrlValue = (value: string): boolean => masks.some((mask) => value.match(mask));
