const expectedSeparator = ['-', '_'];

export const getNaming = (input: string) => {
  const spaceRemovedLetter = String(input).replace(/(\s*)/g, '');
  const firstLetterCapitalized = capitalizeFirstLetter(spaceRemovedLetter);

  if (expectedSeparator.some((separator) => firstLetterCapitalized.includes(separator))) {
    return getCamelledName(firstLetterCapitalized);
  } else {
    return firstLetterCapitalized;
  }
};

/**
 *
 * @helpers
 */
const capitalizeFirstLetter = (letter: string) => letter[0].toUpperCase() + letter.slice(1);

const createSplitingRegExp = (separators: typeof expectedSeparator) => {
  const escapedSeparators = separators.map((separator) => `\\${separator}`).join('|');
  return new RegExp(`[${escapedSeparators}]`);
};

const getCamelledName = (firstLetterCapitalized: string) => {
  const splittedLetters = firstLetterCapitalized.split(createSplitingRegExp(expectedSeparator));
  return splittedLetters.map((letter, idx): string => (idx === 0 ? letter : capitalizeFirstLetter(letter))).join('');
};
