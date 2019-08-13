/*
           _ _            _
          (_) |          (_)
  ___ _ __ _| |_ ___ _ __ _  __ _
 / __| '__| | __/ _ \ '__| |/ _` |
| (__| |  | | ||  __/ |  | | (_| |
 \___|_|  |_|\__\___|_|  |_|\__,_|

  Description: Helper class for frequently used public methods.
  Version: 1.0.4
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/CriteriaJS
*/

export default class Helpers {
  static extract(data) {
    const map = Object.entries(data).map((v) => {
      if (v[1].constructor === Array) {
        return v[0];
      }

      if (v[1].constructor === Object) {
        return Object.keys(v[1]);
      }

      return false;
    });

    const holder = {};
    [].concat(...map).forEach((i) => {
      holder[i] = false;
    });

    return holder;
  }

  static has(data, key) {
    return Object.prototype.hasOwnProperty.call(data, key);
  }
}
