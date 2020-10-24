import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('GameSavingLoader methods', () => {
  test('GameSavingLoader load reject', async () => {
    const error = new Error('Async error');
    read.mockRejectedValue(error);
    const data = await GameSavingLoader.load();
    expect(data).toBe(error);
  });
});
