export const COMMA_SEPARATOR_REGEX = /\B(?=(\d{3})+(?!\d))/g;
export const HYPHEN_SEPARATOR_REGEX = /\B(?=(\d{4})+(?!\d))/g;
const REMOVE_TEXT_REGEX = /[^0-9]/g;

export const createPattern = (num, regex, char) =>
  num.toString().replace(regex, char);

export const removeNonNumerals = (num) =>
  num.toString().replace(REMOVE_TEXT_REGEX, "");
