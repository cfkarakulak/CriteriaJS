/*
           _ _            _
          (_) |          (_)
  ___ _ __ _| |_ ___ _ __ _  __ _
 / __| '__| | __/ _ \ '__| |/ _` |
| (__| |  | | ||  __/ |  | | (_| |
 \___|_|  |_|\__\___|_|  |_|\__,_|

  Description: Checks whether the value has number of special occurence.
  Version: 1.0.4
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/CriteriaJS
*/

export default function isSpecial(value, occurence) {
  return RegExp(`(\\D*(!|@|#|%|$|%)){${occurence},}`, 'gi').test(value);
}
