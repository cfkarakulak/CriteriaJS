/*
           _ _            _
          (_) |          (_)
  ___ _ __ _| |_ ___ _ __ _  __ _
 / __| '__| | __/ _ \ '__| |/ _` |
| (__| |  | | ||  __/ |  | | (_| |
 \___|_|  |_|\__\___|_|  |_|\__,_|

  Description: Checks whether the value has number of alphanumerical occurence.
  Version: 1.0.0
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/CriteriaJS
*/

export default function isAlphanumerical(value, occurence) {
  return RegExp(`(\\D*\\w){${occurence},}\\D*`, 'gi').test(value);
}
