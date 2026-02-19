<script>
  const DEFAULT_VALUES = {
    camel: 'camel case',
    capitalize: 'capitalize',
    flat: 'Flat Case',
    kebab: 'Kebab Case',
    lower: 'LOWER CASE',
    pad: 'Pad',
    pascal: 'pascal case',
    repeat: 'Repeat',
    replace: 'Replace12345',
    snake: 'Snake Case',
    title:'title case',
    train: 'train case',
    truncate: 'etcetera',
    upper: 'upper case'
  }
</script>

<script setup>
import { computed, reactive, ref } from 'vue'
import {
  camelCase,
  capitalize,
  flatCase,
  kebabCase,
  pad,
  pascalCase,
  snakeCase,
  titleCase,
  trainCase,
  truncate
} from 'string-filters'

const modifiers = reactive({
  camel: {
    numbers: false,
    lower: false
  },
  capitalize: {
    lower: false
  },
  flat: {
    numbers: false
  },
  kebab: {
    numbers: false
  },
  pad: {
    count: 10,
    chars: '_'
  },
  padStart: {
    count: 10,
    chars: '_'
  },
  padEnd: {
    count: 10,
    chars: '_'
  },
  pascal: {
    numbers: false,
    lower: false
  },
  repeat: {
    count: 5,
    string: '-'
  },
  replace: {
    regexp: '[0-9]',
    flags: 'g',
    string: '-'
  },
  snake: {
    numbers: false
  },
  title: {
    lower: false
  },
  train: {
    numbers: false,
    lower: false
  },
  truncate: {
    count: 3,
    omission: '...'
  }
})

const camelModel = defineModel('camel', { default: DEFAULT_VALUES.camel })
const capitalizeModel = defineModel('capitalize', { default: DEFAULT_VALUES.capitalize })
const flatModel = defineModel('flat', { default: DEFAULT_VALUES.flat })
const kebabModel = defineModel('kebab', { default: DEFAULT_VALUES.kebab })
const lowerModel = defineModel('lower', { default: DEFAULT_VALUES.lower })
const padModel = defineModel('pad', { default: DEFAULT_VALUES.pad })
const padStartModel = defineModel('padStart', { default: DEFAULT_VALUES.pad })
const padEndModel = defineModel('padEnd', { default: DEFAULT_VALUES.pad })
const pascalModel = defineModel('pascal', { default: DEFAULT_VALUES.pascal })
const repeatModel = defineModel('repeat', { default: DEFAULT_VALUES.repeat })
const replaceModel = defineModel('replace', { default: DEFAULT_VALUES.replace })
const snakeModel = defineModel('snake', { default: DEFAULT_VALUES.snake })
const titleModel = defineModel('title', { default: DEFAULT_VALUES.title })
const trainModel = defineModel('train', { default: DEFAULT_VALUES.train })
const truncateModel = defineModel('truncate', { default: DEFAULT_VALUES.truncate })
const upperModel = defineModel('upper', { default: DEFAULT_VALUES.upper })

const camelRef = ref(DEFAULT_VALUES.camel)
const camelComputed = computed(_ => camelCase(camelRef.value))
const capitalizeRef = ref(DEFAULT_VALUES.capitalize)
const capitalizeComputed = computed(_ => capitalize(capitalizeRef.value))
const flatRef = ref(DEFAULT_VALUES.flat)
const flatComputed = computed(_ => flatCase(flatRef.value))
const kebabRef = ref(DEFAULT_VALUES.kebab)
const kebabComputed = computed(_ => kebabCase(kebabRef.value))
const lowerRef = ref(DEFAULT_VALUES.lower)
const lowerComputed = computed(_ => lowerRef.value.toLowerCase())
const padRef = ref(DEFAULT_VALUES.pad)
const padComputed = computed(_ => pad(padRef.value, modifiers.pad.count, modifiers.pad.chars))
const padStartRef = ref(DEFAULT_VALUES.pad)
const padStartComputed = computed(_ => padStartRef.value.padStart(modifiers.padStart.count, modifiers.padStart.chars))
const padEndRef = ref(DEFAULT_VALUES.pad)
const padEndComputed = computed(_ => padEndRef.value.padEnd(modifiers.padEnd.count, modifiers.padEnd.chars))
const pascalRef = ref(DEFAULT_VALUES.pascal)
const pascalComputed = computed(_ => pascalCase(pascalRef.value))
const repeatRef = ref(DEFAULT_VALUES.repeat)
const repeatComputed = computed(_ => repeatRef.value + modifiers.repeat.string.repeat(modifiers.repeat.count))
const replaceRef = ref(DEFAULT_VALUES.replace)
const replaceComputed = computed(_ => replaceRef.value.replace(new RegExp(modifiers.replace.regexp, modifiers.replace.flags), modifiers.replace.string))
const snakeRef = ref(DEFAULT_VALUES.snake)
const snakeComputed = computed(_ => snakeCase(snakeRef.value))
const titleRef = ref(DEFAULT_VALUES.title)
const titleComputed = computed(_ => titleCase(titleRef.value))
const trainRef = ref(DEFAULT_VALUES.train)
const trainComputed = computed(_ => trainCase(trainRef.value))
const truncateRef = ref(DEFAULT_VALUES.truncate)
const truncateComputed = computed(_ => truncate(truncateRef.value, modifiers.truncate.count, modifiers.truncate.omission))
const upperRef = ref(DEFAULT_VALUES.upper)
const upperComputed = computed(_ => upperRef.value.toUpperCase())
</script>

<template lang="pug">
  main(role="main")
    article.container-xxl(role="article")
      form.mt-5(@submit.prevent="")
        h2.mb-3 Word case
        .row.mb-3
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Camel case]
              input.form-control(
                type="text"
                v-model="camelModel"
              )
            .mb-3
              .form-check.form-check-inline
                input.form-check-input#camel-numbers(
                  type="checkbox"
                  v-model="modifiers.camel.numbers"
                )
                label.form-check-label(for="camel-numbers") Numbers
              .form-check.form-check-inline
                input.form-check-input#camel-lower(
                  type="checkbox"
                  v-model="modifiers.camel.lower"
                )
                label.form-check-label(for="camel-lower") Lower
            p.alert.alert-success(v-if="camelModel") Result: #[b {{ $filters.camelCase(camelModel, modifiers.camel) }}]
            p.alert.alert-info Computed: #[b {{ camelComputed }}]
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Flat case]
              input.form-control(
                type="text"
                v-model="flatModel"
              )
            .mb-3.form-check.form-check-inline
              input.form-check-input#flat-numbers(
                type="checkbox"
                v-model="modifiers.flat.numbers"
              )
              label.form-check-label(for="flat-numbers") Numbers
            p.alert.alert-success(v-if="flatModel") Result: #[b {{ $filters.flatCase(flatModel, modifiers.flat.numbers) }}]
            p.alert.alert-info Computed: #[b {{ flatComputed }}]
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Kebab case]
              input.form-control(
                type="text"
                v-model="kebabModel"
              )
            .mb-3.form-check.form-check-inline
              input.form-check-input#kebab-numbers(
                type="checkbox"
                v-model="modifiers.kebab.numbers"
              )
              label.form-check-label(for="kebab-numbers") Numbers
            p.alert.alert-success(v-if="kebabModel") Result: #[b {{ $filters.kebabCase(kebabModel, modifiers.kebab.numbers) }}]
            p.alert.alert-info Computed: #[b {{ kebabComputed }}]
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Pascal case]
              input.form-control(
                type="text"
                v-model="pascalModel"
              )
            .mb-3
              .form-check.form-check-inline
                input.form-check-input#pascal-numbers(
                  type="checkbox"
                  v-model="modifiers.pascal.numbers"
                )
                label.form-check-label(for="pascal-numbers") Numbers
              .form-check.form-check-inline
                input.form-check-input#pascal-lower(
                  type="checkbox"
                  v-model="modifiers.pascal.lower"
                )
                label.form-check-label(for="pascal-lower") Lower
            p.alert.alert-success(v-if="pascalModel") Result: #[b {{ $filters.pascalCase(pascalModel, modifiers.pascal) }}]
            p.alert.alert-info Computed: #[b {{ pascalComputed }}]
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Title case]
              input.form-control(
                type="text"
                v-model="titleModel"
              )
            .mb-3.form-check.form-check-inline
              input.form-check-input#title-lower(
                type="checkbox"
                v-model="modifiers.title.lower"
              )
              label.form-check-label(for="title-lower") Lower
            p.alert.alert-success(v-if="titleModel") Result: #[b {{ $filters.titleCase(titleModel, modifiers.title.lower) }}]
            p.alert.alert-info Computed: #[b {{ titleComputed }}]
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Train case]
              input.form-control(
                type="text"
                v-model="trainModel"
              )
            .mb-3
              .form-check.form-check-inline
                input.form-check-input#train-numbers(
                  type="checkbox"
                  v-model="modifiers.train.numbers"
                )
                label.form-check-label(for="train-numbers") Numbers
              .form-check.form-check-inline
                input.form-check-input#train-lower(
                  type="checkbox"
                  v-model="modifiers.train.lower"
                )
                label.form-check-label(for="train-lower") Lower
            p.alert.alert-success(v-if="trainModel") Result: #[b {{ $filters.trainCase(trainModel, modifiers.train) }}]
            p.alert.alert-info Computed: #[b {{ trainComputed }}]
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Snake case]
              input.form-control(
                type="text"
                v-model="snakeModel"
              )
            .mb-3.form-check.form-check-inline
              input.form-check-input#snake-numbers(
                type="checkbox"
                v-model="modifiers.snake.numbers"
              )
              label.form-check-label(for="snake-numbers") Numbers
            p.alert.alert-success(v-if="snakeModel") Result: #[b {{ $filters.snakeCase(snakeModel, modifiers.snake.numbers) }}]
            p.alert.alert-info Computed: #[b {{ snakeComputed }}]
        h2.mb-3 Letter case
        .row.mb-3
          .col-12.col-md-6.col-lg-4
            label.form-label #[b Capitalize]
            .mb-3.input-group
              input.form-control(
                type="text"
                v-model="capitalizeModel"
              )
              .input-group-text
                .form-check.form-check-inline
                  input.form-check-input#capitalize-lower(
                    type="checkbox"
                    v-model="modifiers.capitalize.lower"
                  )
                  label.form-check-label(for="capitalize-lower") Lower
            p.alert.alert-success(v-if="capitalizeModel") Result: #[b {{ $filters.capitalize(capitalizeModel, modifiers.capitalize.lower) }}]
            p.alert.alert-info Computed: #[b {{ capitalizeComputed }}]
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Lower case]
              input.form-control(
                type="text"
                v-model="lowerModel"
              )
            p.alert.alert-success(v-if="lowerModel") Result: #[b {{ lowerModel.toLowerCase() }}]
            p.alert.alert-info Computed: #[b {{ lowerComputed }}]
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Upper case]
              input.form-control(
                type="text"
                v-model="upperModel"
              )
            p.alert.alert-success(v-if="upperModel") Result: #[b {{ upperModel.toUpperCase() }}]
            p.alert.alert-info Computed: #[b {{ upperComputed }}]
        h2.mb-3 Replacing
        .row.mb-3
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Pad]
              .input-group
                input.form-control(
                  type="text"
                  v-model="padModel"
                  placeholder="Text"
                )
                input.form-control(
                  type="text"
                  v-model="modifiers.pad.chars"
                  placeholder="Chars"
                )
                input.form-control(
                  type="number"
                  v-model="modifiers.pad.count"
                  placeholder="Length"
                )
            p.alert.alert-success(v-if="padModel") Result: #[b {{ $filters.pad(padModel, modifiers.pad.count, modifiers.pad.chars) }}]
            p.alert.alert-info Computed: #[b {{ padComputed }}]
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Pad start]
              .input-group
                input.form-control(
                  type="text"
                  v-model="padStartModel"
                  placeholder="Text"
                )
                input.form-control(
                  type="text"
                  v-model="modifiers.padStart.chars"
                  placeholder="Chars"
                )
                input.form-control(
                  type="number"
                  v-model="modifiers.padStart.count"
                  placeholder="Length"
                )
            p.alert.alert-success(v-if="padStartModel") Result: #[b {{ padStartModel.padStart(modifiers.padStart.count, modifiers.padStart.chars) }}]
            p.alert.alert-info Computed: #[b {{ padStartComputed }}]
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Pad end]
              .input-group
                input.form-control(
                  type="text"
                  v-model="padEndModel"
                  placeholder="Text"
                )
                input.form-control(
                  type="text"
                  v-model="modifiers.padEnd.chars"
                  placeholder="Chars"
                )
                input.form-control(
                  type="number"
                  v-model="modifiers.padEnd.count"
                  placeholder="Length"
                )
            p.alert.alert-success(v-if="padEndModel") Result: #[b {{ padEndModel.padEnd(modifiers.padEnd.count, modifiers.padEnd.chars) }}]
            p.alert.alert-info Computed: #[b {{ padEndComputed }}]
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Repeat]
              .input-group
                input.form-control(
                  type="text"
                  v-model="repeatModel"
                  placeholder="Text"
                )
                input.form-control(
                  type="text"
                  v-model="modifiers.repeat.string"
                  placeholder="String"
                )
                input.form-control(
                  type="number"
                  v-model="modifiers.repeat.count"
                  placeholder="Count"
                )
            p.alert.alert-success(v-if="repeatModel") Result: #[b {{ repeatModel }}{{ modifiers.repeat.string.repeat(modifiers.repeat.count) }}]
            p.alert.alert-info Computed: #[b {{ repeatComputed }}]
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Replace]
              .input-group
                input.form-control(
                  type="text"
                  v-model="replaceModel"
                  placeholder="Text"
                )
                input.form-control(
                  type="text"
                  v-model="modifiers.replace.regexp"
                  placeholder="Regexp"
                )
                input.form-control(
                  type="text"
                  v-model="modifiers.replace.flags"
                  placeholder="Flags"
                )
                input.form-control(
                  type="text"
                  v-model="modifiers.replace.string"
                  placeholder="String"
                )
            p.alert.alert-success(v-if="replaceModel") Result: #[b {{ replaceModel.replace(new RegExp(modifiers.replace.regexp, modifiers.replace.flags), modifiers.replace.string) }}]
            p.alert.alert-info Computed: #[b {{ replaceComputed }}]
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Truncate]
              .input-group
                input.form-control(
                  type="text"
                  v-model="truncateModel"
                  placeholder="Text"
                )
                
                input.form-control(
                  type="text"
                  v-model="modifiers.truncate.omission"
                  placeholder="Omission"
                )
                input.form-control(
                  type="number"
                  v-model="modifiers.truncate.count"
                  placeholder="Max"
                )
            p.alert.alert-success(v-if="truncateModel") Result: #[b {{ $filters.truncate(truncateModel, modifiers.truncate.count, modifiers.truncate.omission) }}]
            p.alert.alert-info Computed: #[b {{ truncateComputed }}]
</template>