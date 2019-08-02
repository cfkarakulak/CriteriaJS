/*
           _ _            _
          (_) |          (_)
  ___ _ __ _| |_ ___ _ __ _  __ _
 / __| '__| | __/ _ \ '__| |/ _` |
| (__| |  | | ||  __/ |  | | (_| |
 \___|_|  |_|\__\___|_|  |_|\__,_|

  Description: Bootstrap for event listeners and what not.
  Version: 1.0.0
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/CriteriaJS
*/

import Defaults from './Defaults';
import Helpers from '../Helpers/Helpers';
import Rules from '../Validation/Rules';

export default class Authority {
  constructor(element, options) {
    this.element = $(element);
    this.settings = $.extend({}, Defaults, options);

    this.attributes = {
      value: false,
      length: 0,
      rules: {},
    };

    return this.listen();
  }

  listen() {
    this.settings.initialize.call(this.element, this.element);

    this.element.on('input', () => {
      this.work().settings.change.call(
        this.element,
        this.element,
        this.attributes,
      );
    });

    if (typeof this.settings.focus === 'function') {
      this.element.on('focus', () => {
        this.work().settings.focus.call(
          this.element,
          this.element,
          this.attributes,
        );
      });
    }

    if (typeof this.settings.blur === 'function') {
      this.element.on('blur', () => {
        this.work().settings.blur.call(
          this.element,
          this.element,
        );
      });
    }

    return this;
  }

  work() {
    this.attributes.value = $.trim(this.element.val());
    this.attributes.length = Number(this.attributes.value.length);
    this.attributes.rules = Helpers.extract(this.settings.rules);

    /*-----------------------------------------------------------------------------------*/
    /* #01 Attribute Check > Length [min:required, max:optional]
    /*-----------------------------------------------------------------------------------*/

    if (Helpers.has(this.attributes.rules, 'length')) {
      if (
        !this.settings.rules.length[1]
        && Rules.isAtLeastAs(this.attributes.length, this.settings.rules.length[0])
      ) {
        this.attributes.rules.length = true;
      }

      if (
        this.settings.rules.length[1]
            && Rules.isAtLeastAs(this.attributes.length, this.settings.rules.length[0])
            && Rules.isAtMostAs(this.attributes.length, this.settings.rules.length[1])
      ) {
        this.attributes.rules.length = true;
      }
    }

    /*-----------------------------------------------------------------------------------*/
    /* #02.1 Content Check > Alphanumerical [value]
    /*-----------------------------------------------------------------------------------*/

    if (Helpers.has(this.attributes.rules, 'alphanumerical')) {
      this.attributes.rules.alphanumerical = Rules.isAlphanumerical(
        this.attributes.value,
        this.settings.rules.contains.alphanumerical,
      );
    }

    /*-----------------------------------------------------------------------------------*/
    /* #02.2 Content Check > Numerical [value]
    /*-----------------------------------------------------------------------------------*/

    if (Helpers.has(this.attributes.rules, 'numerical')) {
      this.attributes.rules.numerical = Rules.isNumerical(
        this.attributes.value,
        this.settings.rules.contains.numerical,
      );
    }

    /*-----------------------------------------------------------------------------------*/
    /* #02.3 Content Check > Lowercase [value]
    /*-----------------------------------------------------------------------------------*/

    if (Helpers.has(this.attributes.rules, 'lowercase')) {
      this.attributes.rules.lowercase = Rules.isLowerCase(
        this.attributes.value,
        this.settings.rules.contains.lowercase,
      );
    }

    /*-----------------------------------------------------------------------------------*/
    /* #02.4 Content Check > Uppercase [value]
    /*-----------------------------------------------------------------------------------*/

    if (Helpers.has(this.attributes.rules, 'uppercase')) {
      this.attributes.rules.uppercase = Rules.isUpperCase(
        this.attributes.value,
        this.settings.rules.contains.uppercase,
      );
    }

    /*-----------------------------------------------------------------------------------*/
    /* #02.5 Content Check > Special Characters [value]
    /*-----------------------------------------------------------------------------------*/

    if (Helpers.has(this.attributes.rules, 'special')) {
      this.attributes.rules.special = Rules.isSpecial(
        this.attributes.value,
        this.settings.rules.contains.special,
      );
    }

    return this;
  }
}
