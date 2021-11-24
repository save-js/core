'use strict'
/**
 * @savejs/camel — <https://github.com/save-js/core/packages/camel#readme>
 * -----------------------------------------------------------------------
 *   > Part of the Core Packages from the Save JavaScript Organization
 * -----------------------------------------------------------------------
 * @license {WTFPL} "Do What The Fuck You Want To Public License"
 * @copyright 2021+ the Save JavaScript Organizaiton <https://savejs.com>
 * @author Nicholas Berlette <nick@berlette.com>
 * @link {https://github.com/save-js/core/packages/camel#readme}
 * @file camel.ts
 */

const preserveCamelCase = (str: string) => {
  let isLastCharLower 	  = false
    , isLastCharUpper 	  = false
    , isLastLastCharUpper = false;

  for (let i = 0; i < str.length; i++) {
    const character = str[i]

    if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
      str = str.slice(0, i) + '-' + str.slice(i);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i++;
    } else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
      string = string.slice(0, i - 1) + '-' + str.slice(i - 1)
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = ((character.toLowerCase() === character) && (character.toUpperCase() !== character));
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = ((character.toUpperCase() === character) && (character.toLowerCase() !== character));
    }
  }

  return str;
}


function camelCase (input: string, options?: { pascalCase: boolean }): string {
  if (!(typeof input === 'string' || Array.isArray(input))) {
    throw new TypeError('Expected the input to be `string | string[]`')
  }

  options = Object.assign({
    pascalCase: false
  }, options)

  const postProcess = (x) => 
  	options.pascalCase 
	  ? (x+'').charAt(0).toUpperCase() + (x+'').slice(1) 
	  : x;

  input = [input]
      .flatMap((x) => x.trim())
      .filter(x => x.length)
      .join('-');
 
  if (input.length === 0) 
    return '';

  if (input.length === 1)
    return (input.length === 1) ?  options.pascalCase ? input.toUpperCase() : input.toLowerCase();

  if (~input.match(/[A-Z]+/g)) input = preserveCamelCase(input);

  input = input
    .replace(/^[_.\- ]+/, '')
    .toLowerCase()
    .replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase())
    .replace(/\d+(\w|$)/g, m => m.toUpperCase())

  return postProcess(input)
}

module.exports = camelCase
// TODO: Remove this for the next major release
module.exports.default = camelCase
