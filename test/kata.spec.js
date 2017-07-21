const formatString = require('../src/kata');

test("don't wrap the empty string", () => {
  const string = '';
  expect(formatString(10, string)).toEqual(['']);
});

test('Wrap two words with simple length', () => {
  const string = 'a bee';
  expect(formatString(3, string)).toEqual(['a', 'bee']);
});

test('Wrap three words', () => {
  const string = 'a bee cee de';
  expect(formatString(6, string)).toEqual(['a bee', 'cee de']);
});

test('Wrap three words again', () => {
  const string = 'abeece e de e';
  expect(formatString(6, string)).toEqual(['abeece', 'e de e']);
});

test('Do not break on multiple spaces', () => {
  const string = 'a    bee';
  expect(formatString(3, string)).toEqual(['a', 'bee']);
});

test('Break a really long word', () => {
  const string = 'asdf';
  expect(formatString(2, string)).toEqual(['as', 'df']);
});

test('Break a really long word not on first position', () => {
  const string = 'ab asdf';
  expect(formatString(2, string)).toEqual(['ab', 'as', 'df']);
});
