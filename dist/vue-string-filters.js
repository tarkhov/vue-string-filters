/*! 
 * Vue String Filters v0.1.0
 * Homepage (https://tarkhov.github.io/vue-string-filters/)
 * Copyright 2021-2026 Tarkhov
 * License: MIT
 */
function u(e, l = !1) {
  if (!e) return null;
  let r = e.charAt(0).toUpperCase(), n = e.slice(1);
  return l && (n = n.toLowerCase()), `${r}${n}`;
}
function o(e, l = { numbers: !1, lower: !1 }) {
  if (!e) return null;
  const r = l?.numbers ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu");
  let n = e.match(r);
  if (!n || n.length <= 1) return null;
  let t = n.shift();
  const a = l?.lower;
  return a && (t = t.toLowerCase()), n = n.map((s) => u(s, a)), n.unshift(t), n.join("");
}
function i(e, l = !1) {
  if (!e) return null;
  let r = l ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu"), n = e.match(r);
  return !n || n.length <= 1 ? null : n.map((t) => t.toLowerCase()).join("");
}
function p(e, l = !1) {
  if (!e) return null;
  let r = l ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu, n = e.match(r);
  return !n || n.length <= 1 ? null : n.map((t) => t.toLowerCase()).join("-");
}
function f(e, l, r = " ") {
  if (!e) return null;
  const n = Math.floor((l - e.length) / 2) + e.length;
  return e.padStart(n, r).padEnd(l, r);
}
function c(e, l = { numbers: !1, lower: !1 }) {
  if (!e) return null;
  const r = l?.numbers ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu");
  let n = e.match(r);
  return !n || n.length <= 1 ? null : n.map((t) => u(t, l?.lower)).join("");
}
function g(e, l = !1) {
  if (!e) return null;
  let r = l ? /[\p{L}\p{N}_]+/gu : /[\p{L}_]+/gu, n = e.match(r);
  return !n || n.length <= 1 ? null : n.map((t) => t.toLowerCase()).join("_");
}
function m(e, l = !1) {
  return e ? e.replace(new RegExp("\\p{L}+", "gu"), (r) => u(r, l)) : null;
}
function h(e, l = { numbers: !1, lower: !1 }) {
  if (!e) return null;
  const r = l?.numbers ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu;
  let n = e.match(r);
  return !n || n.length <= 1 ? null : n.map((t) => u(t, l?.lower)).join("-");
}
function L(e, l = 32, r = "...") {
  return e ? e.substring(0, l) + r : null;
}
const w = {
  install(e) {
    e.config.globalProperties.$filters = {
      camelCase: o,
      capitalize: u,
      flatCase: i,
      kebabCase: p,
      pad: f,
      pascalCase: c,
      snakeCase: g,
      titleCase: m,
      trainCase: h,
      truncate: L
    };
  }
};
export {
  w as VueStringFilters
};
