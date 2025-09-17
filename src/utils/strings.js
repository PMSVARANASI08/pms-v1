/**
 * Converts a string to title case.
 * Each word's first letter is capitalized and the rest are in lowercase.
 *
 * @param {string} str - The input string to be converted.
 * @returns {string} - The converted title case string.
 */ 
export function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}