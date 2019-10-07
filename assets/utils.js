/**
 * Determine the language of the browser, or get 'en' by default
 * @returns {string}
 */
export function getNavigatorLanguage() {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0]
  } else {
    return (
      navigator.userLanguage ||
      navigator.language ||
      navigator.browserLanguage ||
      'en'
    )
  }
}

/**
 * Scroll an element to it's top
 * @param {HTMLElement} el
 */
export function scrollToTop(el) {
  el.scrollTop = 0
}

/**
 * Map from the simple language local to the full locale for number formatting
 */
export const numberLocale = {
  en: 'en-ch',
  fr: 'de-ch',
  de: 'de-ch',
}

export const noDecimalFormat = {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
}

export const oneDecimalFormat = {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
}
