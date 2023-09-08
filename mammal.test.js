import jest from 'jest';
import { FrenchBull } from './classes/french.js';

describe('Тесты для класса FrenchBull', () => {
  let ronni;

  beforeEach(() => {
    ronni = new FrenchBull('Ronni', 'Sergei', '11', 'all', 'French bulldog');
  });

  test('Возвращает => Ronni', () => {
    expect(ronni.name).toEqual('Ronni');
  });

  test('Возвращает => 11', () => {
    expect(ronni.age).toBe(11);
  });

  test("Возвращает => Sergei's dog whos name is Ronni eats all", () => {
    expect(ronni.eats()).toEqual("Sergei's dog whos name is Ronni eats all");
  });

  test('Возвращает => French bulldog', () => {
    expect(ronni.voice()).toEqual('Gav-gav');
  });
});
