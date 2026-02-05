# Vue string filters

Vue string filters library can change template value dynamically. All languages are supported.

### Contents

1. [Compatibility](#compatibility)
2. [Installation](#installation)
   1. [NodeJS](#nodejs)
   2. [Manually](#manually)
3. [Usage](#usage)
   1. [CLI](#cli)
   2. [Nuxt](#nuxt)
   3. [Local](#local)
   4. [CDN](#cdn)
4. [Filters](#filters)
5. [Author](#author)
6. [License](#license)

## Compatibility

Library | Version
------- | -------
Vue | >= 3.5

## Installation

### NodeJS

```bash
npm install vue-string-filters
```

### Manually

[Download](https://github.com/tarkhov/vue-string-filters/releases/download/v1.0.0/vue-string-filters.zip) package and unpack it or use following commands:

```bash
wget https://github.com/tarkhov/vue-string-filters/releases/download/v1.0.0/vue-string-filters.zip
unzip vue-string-filters.zip
```

## Usage

### CLI

Add following code to your `main.js` file created by Vue CLI:

```js
import VueStringFilters from 'vue-string-filters'

Vue.use(VueStringFilters)
```

Your `main.js` will look like this:

```js
import Vue from 'vue'
import App from './App.vue'
import VueStringFilters from 'vue-string-filters'

Vue.use(VueStringFilters)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

Alternatively you can use a specific directive to import it into a specific component:

```js
import { upper, lower } from 'vue-string-filters'
export default {
 name: 'MyComponent',
 filters: {
   upper,
   lower
  }
}
```

Also you can import all filters to component:

```js
import { StringFiltersMixin } from 'vue-string-filters'
export default {
 name: 'MyComponent',
 mixins: [StringFiltersMixin]
}
```

### Nuxt

If you are using nuxt, you need to create a file **vue-string-filters.js** in the plugins folder of your nuxt project with the following content:

```js
import Vue from 'vue'
import VueStringFilters from 'vue-string-filters'

Vue.use(VueStringFilters)
```

Then add the following lines to the nuxt.config.js:

```js
plugins: [
 { src: '~plugins/vue-string-filters' }
]
```

### Local

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Vue string filters</title>
  </head>
  <body>
    <div id="app"></div>

    <script src="dist/vue.min.js"></script>
    <script src="vue-string-filters.umd.min.js"></script>
  </body>
</html>
```

### CDN

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Vue string filters</title>
  </head>
  <body>
    <div id="app"></div>

    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="https://cdn.rawgit.com/tarkhov/vue-string-filters/v1.0.0/dist/vue-string-filters.umd.min.js"></script>
  </body>
</html>
```

## Filters

Letter case.

```html
<!-- Uppercase -->
<input type="text" v-model="text" v-upper>
<input type="text" v-model="text" v-upper.first>
<input type="text" v-model="text" v-upper.first.capitalize>
<input type="text" v-model="text" v-upper.first.every>
<input type="text" v-model="text" v-upper.first.capitalize.every>

<!-- Lowercase -->
<input type="text" v-model="text" v-lower>
<input type="text" v-model="text" v-lower.first>

<!-- Capitalize -->
<input type="text" v-model="text" v-capitalize>
```

Word case.

```html
<!-- Camelcase -->
<input type="text" v-model="text" v-camel>
<input type="text" v-model="text" v-camel.first>
<input type="text" v-model="text" v-camel.numbers>
<input type="text" v-model="text" v-camel.first.numbers>

<!-- Kebabcase -->
<input type="text" v-model="text" v-kebab>
<input type="text" v-model="text" v-kebab.numbers>

<!-- Snakecase -->
<input type="text" v-model="text" v-snake>
<input type="text" v-model="text" v-snake.numbers>
```

Raplacing.

```html
<!-- Pad -->
<input type="text" v-model="text" v-pad:10="_">
<input type="text" v-model="text" v-pad:10.start="_">
<input type="text" v-model="text" v-pad:10.end="_">

<!-- Repeat -->
<input type="text" v-model="text" v-repeat:5="-">

<!-- Replace -->
<input type="text" v-model="text" v-replace="{ regexp: '[0-9]', flags: 'g', string: '-' }">

<!-- Truncate -->
<input type="text" v-model="text" v-truncate:5="'...'">
```

## Author

* [Twitter](https://x.com/tarkhovich)
* [Medium](https://medium.com/@tarkhov)

## License

This project is licensed under the **MIT License** - see the `LICENSE` file for details.