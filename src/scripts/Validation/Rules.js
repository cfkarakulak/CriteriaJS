/*
           _ _            _
          (_) |          (_)
  ___ _ __ _| |_ ___ _ __ _  __ _
 / __| '__| | __/ _ \ '__| |/ _` |
| (__| |  | | ||  __/ |  | | (_| |
 \___|_|  |_|\__\___|_|  |_|\__,_|

  Description: Kinda behaves like an interface or doesn't who givsafuq.
  Version: 1.0.4
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/CriteriaJS
*/

import isAtMostAs from './Rules/isAtMostAs';
import isAtLeastAs from './Rules/isAtLeastAs';
import isAlphanumerical from './Rules/isAlphanumerical';
import isNumerical from './Rules/isNumerical';
import isLowerCase from './Rules/isLowerCase';
import isUpperCase from './Rules/isUpperCase';
import isSpecial from './Rules/isSpecial';

export default class Rules {
  static isAtMostAs(length, max) {
    return isAtMostAs(length, max);
  }

  static isAtLeastAs(length, min) {
    return isAtLeastAs(length, min);
  }

  static isAlphanumerical(value, occurrence) {
    return isAlphanumerical(value, occurrence);
  }

  static isNumerical(value, occurrence) {
    return isNumerical(value, occurrence);
  }

  static isLowerCase(value, occurrence) {
    return isLowerCase(value, occurrence);
  }

  static isUpperCase(value, occurrence) {
    return isUpperCase(value, occurrence);
  }

  static isSpecial(value, occurrence) {
    return isSpecial(value, occurrence);
  }
}
