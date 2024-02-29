"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNaming = void 0;
const expectedseparator = ['-', '_'];
const capitalizeFirstLetter = (letter) => letter[0].toUpperCase() + letter.slice(1);
const createSplitingRegExp = (separators) => {
    const escapedSeparators = separators.map((separator) => `\\${separator}`).join('|');
    return new RegExp(`[${escapedSeparators}]`);
};
const getNaming = (input) => {
    const spaceRemovedLetter = String(input).replace(/(\s*)/g, '');
    const firstLetterCapitalized = capitalizeFirstLetter(spaceRemovedLetter);
    if (expectedseparator.some((separator) => firstLetterCapitalized.includes(separator))) {
        const splittedLetters = firstLetterCapitalized.split(createSplitingRegExp(expectedseparator));
        return splittedLetters.map((letter, idx) => (idx === 0 ? letter : capitalizeFirstLetter(letter))).join('');
    }
    else {
        return firstLetterCapitalized;
    }
};
exports.getNaming = getNaming;
