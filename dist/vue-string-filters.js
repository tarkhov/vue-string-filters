/*! 
 * Vue String Filters v0.1.1
 * Homepage (https://tarkhov.github.io/vue-string-filters/)
 * Copyright 2021-2026 Tarkhov
 * License: MIT
 */
import { truncate as e, trainCase as t, titleCase as s, snakeCase as i, pascalCase as l, pad as r, kebabCase as n, flatCase as o, capitalize as C, camelCase as c } from "string-filters";
const f = {
  install(a) {
    a.config.globalProperties.$filters = {
      camelCase: c,
      capitalize: C,
      flatCase: o,
      kebabCase: n,
      pad: r,
      pascalCase: l,
      snakeCase: i,
      titleCase: s,
      trainCase: t,
      truncate: e
    };
  }
};
export {
  f as VueStringFilters
};
