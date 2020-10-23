/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const data = await read();
          const result = await json(data);
          try {
            resolve(JSON.parse(result));
          } catch (error) {
            // console.error(`Неверный формат JSON. ${error}`);
          }
        } catch (error) {
          // console.error(error);
        }
      })();
    });
  }
}
