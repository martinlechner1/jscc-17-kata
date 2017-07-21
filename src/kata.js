const R = require('ramda');

const formatString = (lineLength, string) => {
  const splitted = string.split(/\s+/);
  return R.reduce(
    (acc, word) => {
      if (acc.length === 0) {
        if (word === '') {
          return [word];
        }
        return R.splitEvery(lineLength, word);
      }
      const last = acc[acc.length - 1];
      if (last.length + word.length < lineLength) {
        acc[acc.length - 1] = last + ' ' + word;
      } else {
        return R.concat(acc, R.splitEvery(lineLength, word));
      }
      return acc;
    },
    [],
    splitted
  );
};

module.exports = formatString;
