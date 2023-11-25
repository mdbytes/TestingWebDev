const isPalindrome = require('./IsPalindrome');

test('Tacocat returns true', () => {
  expect(isPalindrome('Tacocat')).toBe(true);
});

test('Dave returns false', () => {
  expect(isPalindrome('Dave')).toBe(false);
});
