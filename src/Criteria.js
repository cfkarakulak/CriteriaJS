/*
           _ _            _
          (_) |          (_)
  ___ _ __ _| |_ ___ _ __ _  __ _
 / __| '__| | __/ _ \ '__| |/ _` |
| (__| |  | | ||  __/ |  | | (_| |
 \___|_|  |_|\__\___|_|  |_|\__,_|

  Description: Initiates this worthless plugin.
  Version: 1.0.0
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/CriteriaJS
*/

/* eslint-disable no-unused-vars */
/* eslint no-param-reassign: "error" */
/* eslint func-names: ["error", "never"] */

import Authority from './Authority/Authority';
import Defaults from './Authority/Defaults';
import Helpers from './Helpers/Helpers';

window.jQuery = $;

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(window.jQuery);
  }
}(($) => {
  $.fn.Criteria = function (args) {
    if (args instanceof Object === false) {
      return $.error('parameter needs to be some kinda obJ or sth bruv.');
    }

    if (Helpers.has(args, 'rules') === true) {
      return this.each((i, el) => {
        if (!$.data(el, 'Criteria')) {
          $.data(el, 'Criteria', new Authority(el, args));
        }
      });
    }

    if (Helpers.has(args, 'rules') === false) {
      return this.each((i, el) => {
        const $self = $(el);
        const holder = {};

        Object.keys(Defaults.rules).forEach((p) => {
          holder[p] = {};
        });

        if (!$self.data('criteria')) {
          return $.error('missing parameters or sth ma nigga.');
        }

        $self.data('criteria').split('|').forEach((ruleset) => {
          const rule = ruleset.split(':');
          let data;

          if (rule[1].includes('-')) {
            const range = rule[1].split('-');

            data = [
              Number(range[0]),
              Number(range[1]),
            ];
          } else {
            data = Number(rule[1]);
          }

          if (Helpers.has(holder, rule[0]) === true) {
            holder[rule[0]] = data;
          }

          if (Helpers.has(holder, rule[0]) === false) {
            Object.entries(Defaults.rules).forEach((p, k) => {
              if (rule[0] in p[1]) {
                holder[(p[0])][rule[0]] = data;
              }
            });
          }
        });

        args.rules = holder;

        if (!$.data(el, 'Criteria')) {
          $.data(el, 'Criteria', new Authority(el, args));
        }

        return el;
      });
    }

    return this;
  };
}));
