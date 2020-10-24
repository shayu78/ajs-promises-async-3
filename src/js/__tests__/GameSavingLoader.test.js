import GameSavingLoader from '../GameSavingLoader';

test('class GameSavingLoader instanceof', () => {
  expect(new GameSavingLoader()).toBeInstanceOf(GameSavingLoader);
});

describe('GameSavingLoader methods', () => {
  test('GameSavingLoader load resolve', async () => {
    const data = await GameSavingLoader.load();
    const receive = {
      created: 1546300800,
      id: 9,
      userInfo: {
        id: 1,
        level: 10,
        name: 'Hitman',
        points: 2000,
      },
    };
    expect(data).toEqual(receive);
  });
});
