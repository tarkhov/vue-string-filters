# Vue String Filters

Vue string filters library can change template value dynamically. All languages are supported.

### Contents

1. [Compatibility](#compatibility)
2. [Installation](#installation)
   1. [NPM](#npm)
3. [Usage](#usage)
   1. [Global methods](#global-methods)
   2. [Computed properties](#computed-properties)
4. [Filters](#filters)
   1. [Camel case](#camel-case)
   2. [Capitalize](#capitalize)
   3. [Flat case](#flat-case)
   4. [Kebab case](#kebab-case)
   5. [Lower case](#lower-case)
   6. [Pad](#pad)
   7. [Pascal case](#pascal-case)
   8. [Repeat](#repeat)
   9. [Replace](#replace)
   10. [Snake case](#snake-case)
   11. [Title case](#title-case)
   12. [Train case](#train-case)
   13. [Truncate](#truncate)
   14. [Upper case](#upper-case)
5. [Author](#author)
6. [License](#license)

## Compatibility

Library | Version
------- | -------
Vue | >= 3.5

## Installation

### NPM

```bash
npm install vue-string-filters
```

## Usage

### Global methods

Add the following code to the **main.js** file created with the Vue CLI if you want to use the filter methods globally:

```js
import { createApp } from 'vue'
import { VueStringFilters } from 'vue-string-filters'
import App from './App.vue'

createApp(App).use(VueStringFilters).mount('#app')
```

Examples of usage global property **$filters** methods in your **App.vue**:

```js
import { ref } from 'vue'

const camelRef = ref('camel case')
```

```html
<template>
  <div>Result: {{ $filters.camelCase(camelRef) }}</div>
</template>
```

### Computed properties

**Recommended way.** Using computed properties you don't need to register a **VueStringFilters** plugin in your **main.js**:

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

Use a specific filter to import it into a specific component:

```js
import { computed, ref } from 'vue'
import { camelCase } from 'string-filters'

const camelRef = ref('camel case')
const camelComputed = computed(_ => camelCase(camelRef.value))
```

```html
<template>
  <div>Result: {{ camelComputed }}</div>
</template>
```

## Filters

Complete list of presented filters to use in your app.

### Camel case

Example usage with global **$filters** methods:

```html
<template>
  <!-- Output: camelCase -->
  <div>{{ $filters.camelCase('camel 123 case') }}</div>

  <!-- Output: camel123Case -->
  <div>{{ $filters.camelCase('camel 123 case', { numbers: true }) }}</div>

  <!-- Output: camelCase -->
  <div>{{ $filters.camelCase('cameL 123 casE', { lower: true }) }}</div>

  <!-- Output: camel123Case -->
  <div>{{ $filters.camelCase('cameL 123 casE', { numbers: true, lower: true }) }}</div>
</template>
```

Using computed property:

```js
import { computed, ref } from 'vue'
import { camelCase } from 'string-filters'

const camelRef = ref('camel case')
const camelComputed = computed(_ => camelCase(camelRef.value))
```

```html
<template>
  <!-- Output: camelCase -->
  <div>Result: {{ camelComputed }}</div>
</template>
```

### Capitalize

Example usage with global **$filters** methods:

```html
<template>
  <!-- Output: Capitalize -->
  <div>{{ $filters.capitalize('capitalize') }}</div>

  <!-- Output: Capitalize -->
  <div>{{ $filters.capitalize('cApitalizE', { lower: true }) }}</div>
</template>
```

Using computed property:

```js
import { computed, ref } from 'vue'
import { capitalize } from 'string-filters'

const capitalizeRef = ref('capitalize')
const capitalizeComputed = computed(_ => capitalize(capitalizeRef.value))
```

```html
<template>
  <!-- Output: Capitalize -->
  <div>Result: {{ capitalizeComputed }}</div>
</template>
```

### Flat case

Example usage with global **$filters** methods:

```html
<template>
   <!-- Output: flatcase -->
  <div>{{ $filters.flatCase('Flat 123 Case') }}</div>

  <!-- Output: flat123case -->
  <div>{{ $filters.flatCase('Flat 123 Case', true) }}</div>
</template>
```

Using computed property:

```js
import { computed, ref } from 'vue'
import { flatCase } from 'string-filters'

const flatRef = ref('Flat 123 Case')
const flatComputed = computed(_ => flatCase(flatRef.value))
```

```html
<template>
  <!-- Output: flatcase -->
  <div>Result: {{ flatComputed }}</div>
</template>
```

### Kebab case

Example usage with global **$filters** methods:

```html
<template>
  <!-- Output: kebab-case -->
  <div>{{ $filters.kebabCase('Kebab 123 Case') }}</div>

  <!-- Output: kebab-123-case -->
  <div>{{ $filters.kebabCase('Kebab 123 Case', true) }}</div>
</template>
```

Using computed property:

```js
import { computed, ref } from 'vue'
import { kebabCase } from 'string-filters'

const kebabRef = ref('Kebab 123 Case')
const kebabComputed = computed(_ => kebabCase(kebabRef.value))
```

```html
<template>
  <!-- Output: kebab-case -->
  <div>{{ kebabComputed }}</div>
</template>
```

### Lower case

Example usage with default javascript method:

```html
<template>
  <!-- Output: lowercase -->
  <div>{{ 'LOWERCASE'.toLowerCase() }}</div>
</template>
```

Using computed property:

```js
import { computed, ref } from 'vue'

const lowerRef = ref('LOWERCASE')
const lowerComputed = computed(_ => lowerRef.value.toLowerCase())
```

```html
<template>
  <!-- Output: lowercase -->
  <div>{{ lowerComputed }}</div>
</template>
```

### Pad

Example usage with global **$filters** methods:

```html
<template>
  <!-- Output: ___pad____ -->
  <div>{{ $filters.pad('pad', 10, '_') }}</div>

  <!-- Output: _______pad -->
  <div>{{ 'pad'.padStart(10, '_') }}</div>

  <!-- Output: pad_______ -->
  <div>{{ 'pad'.padStart(10, '_') }}</div>
</template>
```

Using computed property:

```js
import { computed, ref } from 'vue'
import { pad } from 'string-filters'

const padRef = ref('pad')
const padComputed = computed(_ => pad(padRef.value, 10, '_'))
```

```html
<template>
  <!-- Output: ___pad____ -->
  <div>{{ padComputed }}</div>
</template>
```

### Pascal case

Example usage with global **$filters** methods:

```html
<template>
  <!-- Output: PascalCase -->
  <div>{{ $filters.pascalCase('pascal 123 case') }}</div>

  <!-- Output: Pascal123Case -->
  <div>{{ $filters.pascalCase('pascal 123 case', { numbers: true }) }}</div>

  <!-- Output: PascalCase -->
  <div>{{ $filters.pascalCase('pascaL 123 casE', { lower: true }) }}</div>

  <!-- Output: Pascal123Case -->
  <div>{{ $filters.pascalCase('pascaL 123 casE', { numbers: true, lower: true }) }}</div>
</template>
```

Using computed property:

```js
import { computed, ref } from 'vue'
import { pascalCase } from 'string-filters'

const pascalRef = ref('pascal 123 case')
const pascalComputed = computed(_ => pascalCase(pascalRef.value))
```

```html
<template>
  <!-- Output: PascalCase -->
  <div>{{ pascalComputed }}</div>
</template>
```

### Repeat

Example usage with default javascript method:

```html
<template>
  <!-- Output: repeat----- -->
  <div>repeat{{ '-'.repeat(5) }}</div>
</template>
```

Using computed property:

```js
import { computed, ref } from 'vue'

const repeatRef = ref('repeat')
const repeatComputed = computed(_ => repeatRef.value + '-'.repeat(5))
```

```html
<template>
  <!-- Output: repeat----- -->
  <div>{{ repeatComputed }}</div>
</template>
```

### Replace

Example usage with default javascript method:

```html
<template>
  <!-- Output: replace--- -->
  <div>{{ 'replace123'.replace(new RegExp('[0-9]', 'g'), '-') }}</div>
</template>
```

Using computed property:

```js
import { computed, ref } from 'vue'

const replaceRef = ref('replace123')
const replaceComputed = computed(_ => replaceRef.value.replace(new RegExp('[0-9]', 'g'), '-'))
```

```html
<template>
  <!-- Output: replace--- -->
  <div>{{ replaceComputed }}</div>
</template>
```

### Snake case

Example usage with global **$filters** methods:

```html
<template>
  <!-- Output: snake_case -->
  <div>{{ $filters.snakeCase('Snake 123 Case') }}</div>

  <!-- Output: snake_123_case -->
  <div>{{ $filters.snakeCase('Snake 123 Case', true) }}</div>
</template>
```

Using computed property:

```js
import { computed, ref } from 'vue'
import { snakeCase } from 'string-filters'

const snakeRef = ref('Snake 123 Case')
const snakeComputed = computed(_ => snakeCase(snakeRef.value))
```

```html
<template>
  <!-- Output: snake_case -->
  <div>{{ snakeComputed }}</div>
</template>
```

### Title case

Example usage with global **$filters** methods:

```html
<template>
  <!-- Output: Title Case -->
  <div>{{ $filters.titleCase('title 123 case') }}</div>

  <!-- Output: Title 123 Case -->
  <div>{{ $filters.titleCase('title 123 case', { numbers: true }) }}</div>

  <!-- Output: Title Case -->
  <div>{{ $filters.titleCase('titlE 123 casE', { lower: true }) }}</div>

  <!-- Output: Title 123 Case -->
  <div>{{ $filters.titleCase('titlE 123 casE', { numbers: true, lower: true }) }}</div>
</template>
```

Using computed property:

```js
import { computed, ref } from 'vue'
import { titleCase } from 'string-filters'

const titleRef = ref('title 123 case')
const titleComputed = computed(_ => titleCase(titleRef.value))
```

```html
<template>
  <!-- Output: Title Case -->
  <div>{{ titleComputed }}</div>
</template>
```

### Train case

Example usage with global **$filters** methods:

```html
<template>
  <!-- Output: Train-Case -->
  <div>{{ $filters.trainCase('train 123 case') }}</div>

  <!-- Output: Train-123-Case -->
  <div>{{ $filters.trainCase('train 123 case', { numbers: true }) }}</div>

  <!-- Output: Train-Case -->
  <div>{{ $filters.trainCase('traiN 123 casE', { lower: true }) }}</div>

  <!-- Output: Train-123-Case -->
  <div>{{ $filters.trainCase('traiN 123 casE', { numbers: true, lower: true }) }}</div>
</template>
```

Using computed property:

```js
import { computed, ref } from 'vue'
import { trainCase } from 'string-filters'

const trainRef = ref('train 123 case')
const trainComputed = computed(_ => trainCase(trainRef.value))
```

```html
<template>
  <!-- Output: Train-Case -->
  <div>{{ trainComputed }}</div>
</template>
```

### Truncate

Example usage with global **$filters** methods:

```html
<template>
  <!-- Output: etc... -->
  <div>{{ $filters.truncate('etcetera', 3, '...') }}</div>
</template>
```

Using computed property:

```js
import { computed, ref } from 'vue'
import { truncate } from 'string-filters'

const truncateRef = ref('etcetera')
const truncateComputed = computed(_ => truncate(truncateRef.value, 3, '...'))
```

```html
<template>
  <!-- Output: etc... -->
  <div>{{ truncateComputed }}</div>
</template>
```

### Upper case

Example usage with default javascript method:

```html
<template>
  <!-- Output: UPPERCASE -->
  <div>{{ 'uppercase'.toUpperCase() }}</div>
</template>
```

Using computed property:

```js
import { computed, ref } from 'vue'

const upperRef = ref('uppercase')
const upperComputed = computed(_ => upperRef.value.toUpperCase())
```

```html
<template>
  <!-- Output: UPPERCASE -->
  <div>{{ upperComputed }}</div>
</template>
```

## Author

* [Twitter](https://x.com/tarkhovich)
* [Medium](https://medium.com/@tarkhov)

## License

This project is licensed under the **MIT License** - see the `LICENSE` file for details.