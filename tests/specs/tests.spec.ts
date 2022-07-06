import { replaceUrlValues } from '../../src/index.js';

const url = 'https://my-api.mydomain.com/v2/room/59e107ac-f52c-4729-bbce-b666cf7cee2d/messages/59e107ac-f52c-4729-bbce-b666cf7cee2d';
const expectedUrl = '/v2/room/#val/messages/#val';

const emptyValueUrl =
  'https://my-api.mydomain.com/v2/room/59e107ac-f52c-4729-bbce-b666cf7cee2d/messages/59e107ac-f52c-4729-bbce-b666cf7cee2d//';

const subUrl = '/v2/room/59e107ac-f52c-4729-bbce-b666cf7cee2d/messages/59e107ac-f52c-4729-bbce-b666cf7cee2d';

describe('tests', () => {
  describe('replaceUrlValue', () => {
    it('should replace 2 guids in #val', async () => {
      const replaced = replaceUrlValues(url);

      expect(replaced).toBe(expectedUrl);
    });

    it('should replace 2 guids in empty value route #val', async () => {
      const replaced = replaceUrlValues(emptyValueUrl);

      expect(replaced).toBe(expectedUrl);
    });

    it('should replace 2 guids in a sub-url for #val', async () => {
      const replaced = replaceUrlValues(subUrl);

      expect(replaced).toBe(expectedUrl);
    });
  });
});
