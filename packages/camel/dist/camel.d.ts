/**
 * 
 * @param input Convert a dash/dot/underscore/space separated string to camelCase or PascalCase: `foo-bar` → `fooBar`.
 * @example ```js
 * const camelCase = require('camelcase')
 * camelCase('foo-bar')
 * camelCase('foo_bar')
 * camelCase(['foo__', '-bar--']);
 * // -> all return 'fooBar'
 * ```
 */
export interface CaseOptions {
  /**
   * Enable for PascalCase, disable for camelCase.
   * @example ```js
   * camelCase('foo-bar') // => 'FooBar'
   * pascalCase('foo-bar') // => 'fooBar'
   * ```
   * @default false
   */
  readonly pascal?: boolean | null | 1 | 0;
}

export type Unformatted<T extends string> =
  | T
  | ReadonlyArray<T>
  | ArrayLike<T>
  | IterableIterator<T>;
export type Formatted<T extends string> =
  | T
  | ReadonlyArray<T>
  | ArrayLike<T>
  | IterableIterator<T>;

/**
 * Convert a string or array of strings to camelCase.
 * @param {Unformatted<string>} input String to be camelized.
 * @param {CaseOptions} options
 * @example ```js
 * import { camelCase } from 'camelcase' // or: import camelCase from 'camelCase'
 * 
 * camelCase('MY--FUNCTION')
 * camelCase(['__my', '_FUNCTION'])
 * // both return 'myFunction'
 * ```
 */
declare function camelize(
  input: Unformatted<string>,
  options?: CaseOptions
): Formatted<string>;

/**
 * Convert a string or array of strings to PascalCase (upper-camelCase).
 * @param {Unformatted<string>} input 
 * @param {CaseOptions} options
 * @example ```js
 * import { pascalCase } from 'camelcase'
 * 
 * pascalCase('--my.function')
 * pascalCase(['__my', '_FUNCTION']) 
 * // both return 'MyFunction' 
 * ```
 */
declare function pascalize(
  input: Unformatted<string>,
  options?: CaseOptions
): Formatted<string>;

export type {
  camelize as default,
  camelize,
  camelize as camel,
  camelize as camelCase,
  pascalize,
  pascalize as Pascal,
  pascalize as PascalCase,
  pascalize as pascalCase,
};
