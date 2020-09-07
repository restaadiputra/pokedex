import { capitalizeEachWord, capitalizeFirstLetter } from '../formatter';

describe('capitalizeEachWord function', () => {
  test('should capitalize the first letter in each word', () => {
    const testWord1 = 'testing';
    const testWord2 = 'testing word';
    const testWord3 = 'testing word';
    const testWord4 = 'tESTING wOrd';
    const testWord5 = '';

    expect(capitalizeEachWord(testWord1)).toBe('Testing');
    expect(capitalizeEachWord(testWord2)).toBe('Testing Word');
    expect(capitalizeEachWord(testWord3)).toBe('Testing Word');
    expect(capitalizeEachWord(testWord4)).toBe('TESTING WOrd');
    expect(capitalizeEachWord(testWord5)).toBe('');
  });
});
