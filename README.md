# CriteriaJS
Just some shit that only +200IQ can understand.

```javascript
  const criteria = $('input[data-criteria]').Criteria({
    rules: {
      length: [6, 15],
      contains: {
        alphanumerical: 1,
        numerical: 1,
        lowercase: 1,
        uppercase: 1,
        special: 1,
      },
    },
    initialize: ($element) => {},
    change: ($element, attributes) => {
      Object.values(attributes.rules).every(rule => rule === true);
    },
    focus: ($element, attributes) => {},
    blur: ($element) => {},
  });
```
