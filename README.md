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
Length rule has a type of range (min-max) while the rest
only checks for single value (min)

```javascript
const criteria = $('input[data-criteria]').criteria({
  rules: {
    length: [6, 15],
    contains: {
      alphabetical: 1,
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

If you wish to register criteria per element instead of globally,
just omit the rules object, add data-criteria attribute to your inputs
and seperate each rule with a pipe (|).

Example:

```html
<input type="password" data-criteria="length:6-15|alphabetical:1|numerical:1|uppercase:2|lowercase:3">
<input type="password" data-criteria="length:4-20|numerical:3|uppercase:1|special:3">
```

```javascript
const criteria = $('input[data-criteria]').criteria({
  initialize: ($element) => {},
  change: ($element, attributes) => {
    // console.log($element, attributes);
  },
  focus: ($element, attributes) => {},
  blur: ($element) => {},
});
```

#### When to Enable / Disable Form Submit

You should disable the form from being submitted by adding ```disabled```
attribute to the button beforehand, and remove the attribute when all criteria are matched.
A simple check can be used to determine whether all of the rules you wish to validate are satisfied or not.

```javascript
Object.values(attributes.rules).every(rule => rule === true);
```

#### Setting up development environment

You can go ahead and play around with ```src/example/index.html``` after running the commands below.

```
# 1. fetch project
git clone git@github.com:cfkarakulak/CriteriaJS.git

# 2. change directory to criteriajs and install dependencies
npm install

# 3. compile and listen for changes
npm run watch
```

#### Settings

Rule | Type | Default | Description
------ | ---- | ------- | -----------
length | array | [6, null] | Checks whether the value of the target element has a length between min and max. Use `[6, null]` if you wish to disable maximum check.
alphabetical | integer | null | Checks whether the value has at least n number of alphabetical characters. `Latin Alphabet`
numerical | integer | null | Checks whether the value has at least n number of numerical characters. `[0-9]`
lowercase | integer | null | Checks whether the value has at least n number of lowercase characters. `[a-z]`
uppercase | integer | null | Checks whether the value has at least n number of uppercase characters. `[A-Z]`
special | integer | null | Checks whether the value has at least n number of special characters. `[!,@,#,%,$,%]`
