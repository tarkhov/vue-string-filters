function l(e, t = !1) {
  let u = e.charAt(0).toUpperCase(), a = e.slice(1);
  return t && (a = a.toLowerCase()), `${u}${a}`;
}
function L(e, t = !1) {
  return t ? e.match(/[\p{L}\p{N}]+/gu) : e.match(/[\p{L}]+/gu);
}
function f(e, t) {
  if (e?.length) {
    let u = L(e, t?.numbers);
    if (u.length > 1) {
      if (t?.first)
        u = u.map(function(a) {
          return l(a);
        });
      else {
        let a = u.shift();
        u = u.map(function(r) {
          return l(r);
        }), u.unshift(a);
      }
      e = u.join("");
    }
  }
  return e;
}
function o(e) {
  return e?.length && (e = l(e, !0)), e;
}
function d(e, t = !1) {
  return t ? e.match(/[\p{L}\p{N}-]+/gu) : e.match(/[\p{L}-]+/gu);
}
const v = {
  updated: function(e, t) {
    if (e.value.length && (typeof t.value > "u" || t.value)) {
      let u = d(e.value, t.modifiers?.numbers || t.value?.numbers);
      u.length > 1 && (u = u.map(function(a) {
        return a.toLowerCase();
      }), e.value = u.join("-"));
    }
  }
}, s = {
  updated: function(e, t) {
    e.value.length && (typeof t.value > "u" || t.value) && (t.modifiers?.first || t.value?.first ? e.value = e.value.charAt(0).toLowerCase() + e.value.slice(1) : e.value = e.value.toLowerCase());
  }
};
function y(e, t, u = " ") {
  const a = Math.floor((t - e.length) / 2) + e.length;
  return e.padStart(a, u).padEnd(t, u);
}
const c = {
  updated: function(e, t) {
    if (e.value.length) {
      let u = 0, a = " ";
      t.value && (typeof t.value == "object" ? t.value.chars && t.value.count && (u = t.value.count, a = t.value.chars) : (u = t.arg, a = t.value)), t.modifiers?.start || t.value?.start ? e.value = e.value.padStart(u, a) : t.modifiers?.end || t.value?.end ? e.value = e.value.padEnd(u, a) : e.value = y(e.value, u, a);
    }
  }
}, p = {
  updated: function(e, t) {
    e.value.length && t.value && (typeof t.value == "object" ? t.value.string && t.value.count && (e.value = e.value + t.value.string.repeat(t.value.count)) : t.arg && (e.value = e.value + t.value.repeat(t.arg)));
  }
}, i = {
  updated: function(e, t) {
    e.value.length && t.value && t.value.regexp && (e.value = e.value.replace(new RegExp(t.value.regexp, t.value.flags), t.value.string || ""));
  }
};
function w(e, t = !1) {
  return t ? e.match(/[\p{L}\p{N}_]+/gu) : e.match(/[\p{L}_]+/gu);
}
const n = {
  updated: function(e, t) {
    if (e.value.length && (typeof t.value > "u" || t.value)) {
      let u = w(e.value, t.modifiers?.numbers || t.value?.numbers);
      u.length > 1 && (u = u.map(function(a) {
        return a.toLowerCase();
      }), e.value = u.join("_"));
    }
  }
};
function C(e, t = 32, u = "...") {
  return e.substring(0, t) + u;
}
const h = {
  updated: function(e, t) {
    let u = e.value.length;
    if (u) {
      let a = "...", r = t.arg;
      t.value && (typeof t.value == "object" ? t.value.count && t.value.omission && (r = t.value.count, a = t.value.omission) : a = t.value), u > r && (e.value = C(e.value, r, a));
    }
  }
};
function j(e, t = !1) {
  return e.replace(new RegExp("\\p{L}+", "gu"), function(u) {
    return l(u, t);
  });
}
const m = {
  updated: function(e, t) {
    if (e.value.length && (typeof t.value > "u" || t.value))
      if (t.modifiers?.first || t.value?.first) {
        const u = t.modifiers?.capitalize || t.value?.capitalize;
        t.modifiers?.every || t.value?.every ? e.value = j(e.value, u) : e.value = l(e.value, u);
      } else
        e.value = e.value.toUpperCase();
  }
}, k = {
  filters: {
    camel: f,
    capitalize: o,
    kebab: v,
    lower: s,
    pad: c,
    repeat: p,
    replace: i,
    snake: n,
    truncate: h,
    upper: m
  }
}, x = {
  install(e) {
    e.directive("camel", f), e.directive("capitalize", o), e.directive("kebab", v), e.directive("lower", s), e.directive("pad", c), e.directive("repeat", p), e.directive("replace", i), e.directive("snake", n), e.directive("truncate", h), e.directive("upper", m);
  }
};
export {
  k as StringFiltersMixin,
  x as VueStringFilters,
  f as camel,
  o as capitalize,
  v as kebab,
  s as lower,
  c as pad,
  p as repeat,
  i as replace,
  n as snake,
  h as truncate,
  m as upper
};
