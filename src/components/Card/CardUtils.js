export const pluralizer = (number, string) => {
  let newString = string.slice();
  if (number === 0 || number > 1) {
    newString = `${string}s`;
  }
  return newString;
}

export const sum = (array, key) => array.reduce((acc, r) => (acc + r[key]), 0);