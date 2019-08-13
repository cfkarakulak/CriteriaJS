### criteriaJS
Apply pre-defined rules to your password fields.

#### Install Using Package Managers

```sh
# Bower
bower install --save criteriajs

# NPM
npm install criteriajs
```

#### Import Library

```javascript
import 'criteriajs';
```

#### Register Global Rules

Rules are pretty self-explanatory.
Length rule has a type of range (min-max) while the rest only checks for single value (min)

```javascript
const criteria = $('input[data-criteria]').criteria({
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

#### When to Enable / Disable Form Submit

You have to disable the form from being submitted beforehand

```javascript
  Object.values(attributes.rules).every(rule => rule === true);
```

#### Using Data Attribute

If you wish to register criteria per element instead of globally, just omit the rules object and add data-criteria attribute and seperate each rule with pipe (|).

Example:

```html
<input type="password" data-criteria="length:6-15|alphanumerical:1|mumerical:1|uppercase:2|lowercase:3">
```

### Settings

Rule | Type | Default | Description
------ | ---- | ------- | -----------
length | array | [6, null] | Checks whether the value of the target element has a length between min and max. Use `[6, null]` if you wish to disable maximum check.
alphanumerical | integer | null | Checks whether the value has at least n number of alphanumerical characters. `Latin Alphabet`
numerical | integer | null | Checks whether the value has at least n number of numerical characters. `[0-9]`
lowercase | integer | null | Checks whether the value has at least n number of lowercase characters. `[a-z]`
uppercase | integer | null | Checks whether the value has at least n number of uppercase characters. `[A-Z]`
special | integer | null | Checks whether the value has at least n number of special characters. `[!,@,#,%,$,%]`
