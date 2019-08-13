/*
           _ _            _
          (_) |          (_)
  ___ _ __ _| |_ ___ _ __ _  __ _
 / __| '__| | __/ _ \ '__| |/ _` |
| (__| |  | | ||  __/ |  | | (_| |
 \___|_|  |_|\__\___|_|  |_|\__,_|

  Description: Contains default values and shit.
  Version: 1.0.4
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/CriteriaJS
*/

/* eslint-disable no-unused-vars */

const boilerplate = {
  rules: {
    length: [6, null],
    contains: {
      alphanumerical: null,
      numerical: null,
      uppercase: null,
      lowercase: null,
      special: null,
    },
  },
  initialize: ($element) => {},
  change: ($element, attributes) => {},
};

export default boilerplate;
