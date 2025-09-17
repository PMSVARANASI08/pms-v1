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

//write a function that trims the initial " and final " from a string if they exist
export function trimQuotes(str) {
  if (str.startsWith('"') && str.endsWith('"')) {
    return str.slice(1, -1);
  }
  return str;
}

// write a function that converts a date string to a more readable format
// input format: YYYY-MM-DD
// output format: DD MMM YYYY (e.g., 2023-08-15 -> 15 Aug 2023)
export function formatDateToReadable(dateStr) {
  if (!dateStr) return '';
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr; // return as is if format is unexpected
  const year = parts[0];
  const month = months[parseInt(parts[1], 10) - 1];
  const day = parts[2];
  return `${day} ${month} ${year}`;
} 