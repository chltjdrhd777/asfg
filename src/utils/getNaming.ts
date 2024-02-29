const expectedseparator = ['-', '_'];

const capitalizeFirstLetter = (letter: string) => letter[0].toUpperCase() + letter.slice(1);

const createSplitingRegExp = (separators: typeof expectedseparator) => {
  const escapedSeparators = separators.map((separator) => `\\${separator}`).join('|');
  return new RegExp(`[${escapedSeparators}]`);
};

export const getNaming = (input: string) => {
  const spaceRemovedLetter = String(input).replace(/(\s*)/g, '');
  const firstLetterCapitalized = capitalizeFirstLetter(spaceRemovedLetter);

  if (expectedseparator.some((separator) => firstLetterCapitalized.includes(separator))) {
    const splittedLetters = firstLetterCapitalized.split(createSplitingRegExp(expectedseparator));

    return splittedLetters.map((letter, idx): string => (idx === 0 ? letter : capitalizeFirstLetter(letter))).join('');
  } else {
    return firstLetterCapitalized;
  }
};
