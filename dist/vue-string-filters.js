/*! 
 * Vue String Filters v0.1.0
 * Homepage (https://tarkhov.github.io/vue-string-filters/)
 * Copyright 2021-2026 Tarkhov
 * License: MIT
 */
function a(n, t = !1) {
  let l = n.charAt(0).toUpperCase(), e = n.slice(1);
  return t && (e = e.toLowerCase()), `${l}${e}`;
}
function o(n, t = { numbers: !1, lower: !1 }) {
  const l = t?.numbers ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu");
  let e = n.match(l);
  if (e.length <= 1) return null;
  let r = e.shift();
  const u = t?.lower;
  return u && (r = r.toLowerCase()), e = e.map((s) => a(s, u)), e.unshift(r), e.join("");
}
function p(n, t = !1) {
  let l = t ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu"), e = n.match(l);
  return e.length <= 1 ? null : e.map((r) => r.toLowerCase()).join("");
}
function i(n, t = !1) {
  let l = t ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu, e = n.match(l);
  return e.length <= 1 ? null : e.map((r) => r.toLowerCase()).join("-");
}
function c(n, t, l = " ") {
  const e = Math.floor((t - n.length) / 2) + n.length;
  return n.padStart(e, l).padEnd(t, l);
}
function g(n, t = { numbers: !1, lower: !1 }) {
  const l = t?.numbers ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu");
  let e = n.match(l);
  return e.length <= 1 ? null : e.map((r) => a(r, t?.lower)).join("");
}
function f(n, t = !1) {
  let l = t ? /[\p{L}\p{N}_]+/gu : /[\p{L}_]+/gu, e = n.match(l);
  return e.length <= 1 ? null : e.map((r) => r.toLowerCase()).join("_");
}
function m(n, t = !1) {
  return n.replace(new RegExp("\\p{L}+", "gu"), (l) => a(l, t));
}
function L(n, t = { numbers: !1, lower: !1 }) {
  const l = t?.numbers ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu;
  let e = n.match(l);
  return e.length <= 1 ? null : e.map((r) => a(r, t?.lower)).join("-");
}
function h(n, t = 32, l = "...") {
  return n.substring(0, t) + l;
}
const w = {
  install(n) {
    n.config.globalProperties.$filters = {
      camelCase: o,
      capitalize: a,
      flatCase: p,
      kebabCase: i,
      pad: c,
      pascalCase: g,
      snakeCase: f,
      titleCase: m,
      trainCase: L,
      truncate: h
    };
  }
};
export {
  w as VueStringFilters
};
