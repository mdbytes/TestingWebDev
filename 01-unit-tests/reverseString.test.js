const reverseString = require('./reverseString');

test('martin equals nitram', () => {
  expect(reverseString('martin') === 'nitram').toBe(true);
});
