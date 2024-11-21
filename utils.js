import {unsafeCSS} from 'lit';

/**
 * 
 * @param {string} value 
 * @returns string
 */
const toKebabCase = (value) => {
  return value.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * 
 * @param {Object.<string, string>} tokens 
 * @returns {CSSResult}
 */
export const generateCssVariablesFromTokens = (tokens) => {
  return unsafeCSS`
    :host {
      ${Object.keys(tokens).map((key) => {
        return `--${toKebabCase(key)}: ${tokens[key]};`;
      })}
    }
  `;
}