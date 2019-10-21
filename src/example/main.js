import '../scripts/Criteria';

/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const criteria = $('input[data-criteria]').criteria({
  initialize: ($element) => {},
  change: ($element, attributes) => {
    console.log(attributes);
    Object.values(attributes.rules).every(rule => rule === true);
  },
  focus: ($element, attributes) => {},
  blur: ($element) => {},
});
