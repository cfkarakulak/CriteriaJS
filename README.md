### CriteriaJS
Just some shit that only +200IQ can understand.

#### Package Managers

```sh
# Bower
bower install --save criteriajs

# NPM
npm install criteriajs
```

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

#### Using Data Attribute

If you wish to register criteria per element instead of globally, just omit the rules object and add data-criteria attribute and seperate each rule with pipe (|).

Example:

```html
<input type="password" data-criteria="length:6-15|alphanumerical:1|mumerical:1|uppercase:2|lowercase:3"
```