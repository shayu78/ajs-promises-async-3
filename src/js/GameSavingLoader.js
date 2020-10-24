/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const result = await json(data);
      try {
        return JSON.parse(result);
      } catch (error) {
        return Promise.reject(error);
      }
    } catch (error) {
      return error;
    }
  }
}
