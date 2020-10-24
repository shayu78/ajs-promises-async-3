/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(`saving as string = ${JSON.stringify(saving)}`);
  } catch (error) {
    console.error(`rejected load: ${error}`);
  }
})();
