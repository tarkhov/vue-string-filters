/*! 
 * Vue String Filters v0.1.1
 * Homepage (https://tarkhov.github.io/vue-string-filters/)
 * Copyright 2021-2026 Tarkhov
 * License: MIT
 */
(function(a,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("string-filters")):typeof define=="function"&&define.amd?define(["exports","string-filters"],e):(a=typeof globalThis<"u"?globalThis:a||self,e(a.VueStringFilters={},a.StringFilters))})(this,(function(a,e){"use strict";const t={install(i){i.config.globalProperties.$filters={camelCase:e.camelCase,capitalize:e.capitalize,flatCase:e.flatCase,kebabCase:e.kebabCase,pad:e.pad,pascalCase:e.pascalCase,snakeCase:e.snakeCase,titleCase:e.titleCase,trainCase:e.trainCase,truncate:e.truncate}}};a.VueStringFilters=t,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})}));
