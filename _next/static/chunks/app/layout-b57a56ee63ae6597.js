(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    8642: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 3547)),
        Promise.resolve().then(r.bind(r, 3221)),
        Promise.resolve().then(r.t.bind(r, 2118, 23)),
        Promise.resolve().then(r.t.bind(r, 2445, 23)),
        Promise.resolve().then(r.bind(r, 6288));
    },
    3547: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return y;
          },
        });
      var n = r(7437),
        a = r(1657),
        c = r(843);
      /**
       * @license lucide-react v0.363.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let o = (0, c.Z)("Home", [
          [
            "path",
            {
              d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
              key: "y5dka4",
            },
          ],
          ["polyline", { points: "9 22 9 12 15 12 15 22", key: "e2us08" }],
        ]),
        l = (0, c.Z)("MessageSquare", [
          [
            "path",
            {
              d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
              key: "1lielz",
            },
          ],
        ]);
      var i = r(8670),
        s = r(9295),
        d = r(8792),
        u = r(7907);
      r(2265);
      var m = (e) => {
          let { children: t } = e;
          return (0, n.jsx)("main", {
            className:
              "lg:pl-20 bg-light-primary dark:bg-dark-primary min-h-screen",
            children: (0, n.jsx)("div", {
              className: "max-w-screen-lg lg:mx-auto mx-4",
              children: t,
            }),
          });
        },
        h = r(703),
        f = r(1399),
        b = r(2362);
      let v = (e) => {
        let { children: t } = e;
        return (0, n.jsx)("div", {
          className: "flex flex-col items-center gap-y-3 w-full",
          children: t,
        });
      };
      var y = (e) => {
        let { children: t } = e,
          r = (0, u.useSelectedLayoutSegments)(),
          c = [
            {
              icon: o,
              href: "/",
              active: 0 === r.length || r.includes("c"),
              label: "Home",
            },
            {
              icon: l,
              href: "/chat",
              active: r.includes("chat"),
              label: "Chat",
            },
            {
              icon: i.Z,
              href: "/discover",
              active: r.includes("discover"),
              label: "Discover",
            },
          ],
          y = [
            { label: "\uD835\uDD4F", icon: b.LCd, href: "https://x.com/LND_Network" },
            { label: "Telegram", icon: f.AGi, href: "https://t.me/LND_Network" },
          ];
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)("div", {
              className:
                "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-20 lg:flex-col",
              children: (0, n.jsxs)("div", {
                className:
                  "flex grow flex-col items-center gap-y-5 overflow-y-auto bg-light-secondary dark:bg-dark-secondary px-2 py-8",
                children: [
                  (0, n.jsx)(d.default, {
                    href: "https://www.lendernetwork.cc",
                    children: (0, n.jsx)(h.default, {
                      src: "/logo.png",
                      alt: "logo",
                      width: 32,
                      height: 32,
                    }),
                  }),
                  (0, n.jsx)("a", {
                    href: "/",
                    children: (0, n.jsx)(s.Z, { className: "cursor-pointer" }),
                  }),
                  (0, n.jsx)(v, {
                    children: c.map((e, t) =>
                      (0, n.jsxs)(
                        d.default,
                        {
                          href: e.href,
                          className: (0, a.cn)(
                            "relative flex flex-row items-center justify-center cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 duration-150 transition w-full py-2 rounded-lg",
                            e.active
                              ? "text-black dark:text-white"
                              : "text-black/70 dark:text-white/70"
                          ),
                          children: [
                            (0, n.jsx)(e.icon, {}),
                            e.active &&
                              (0, n.jsx)("div", {
                                className:
                                  "absolute right-0 -mr-2 h-full w-1 rounded-l-lg bg-black dark:bg-white",
                              }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                  (0, n.jsx)("div", {
                    className: "mt-auto",
                    children: y.map((e, t) =>
                      (0, n.jsx)(
                        "a",
                        {
                          href: e.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "block text-center py-2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white",
                          children: (0, n.jsx)(e.icon, { size: 20 }),
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            }),
            (0, n.jsx)("div", {
              className:
                "fixed bottom-0 w-full z-50 flex flex-row items-center gap-x-6 bg-light-primary dark:bg-dark-primary px-4 py-4 shadow-sm lg:hidden",
              children: c.map((e, t) =>
                (0, n.jsxs)(
                  d.default,
                  {
                    href: e.href,
                    className: (0, a.cn)(
                      "relative flex flex-col items-center space-y-1 text-center w-full",
                      e.active
                        ? "text-black dark:text-white"
                        : "text-black dark:text-white/70"
                    ),
                    children: [
                      e.active &&
                        (0, n.jsx)("div", {
                          className:
                            "absolute top-0 -mt-4 h-1 w-full rounded-b-lg bg-black dark:bg-white",
                        }),
                      (0, n.jsx)(e.icon, {}),
                      (0, n.jsx)("p", {
                        className: "text-xs",
                        children: e.label,
                      }),
                    ],
                  },
                  t
                )
              ),
            }),
            (0, n.jsx)(m, { children: t }),
          ],
        });
      };
    },
    3221: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return v;
          },
        });
      var n = r(7437),
        a = r(2265),
        c = ["light", "dark"],
        o = "(prefers-color-scheme: dark)",
        l = "undefined" == typeof window,
        i = a.createContext(void 0),
        s = (e) =>
          a.useContext(i) ? e.children : a.createElement(u, { ...e }),
        d = ["light", "dark"],
        u = (e) => {
          let {
              forcedTheme: t,
              disableTransitionOnChange: r = !1,
              enableSystem: n = !0,
              enableColorScheme: l = !0,
              storageKey: s = "theme",
              themes: u = d,
              defaultTheme: v = n ? "system" : "light",
              attribute: y = "data-theme",
              value: g,
              children: p,
              nonce: x,
            } = e,
            [w, k] = a.useState(() => h(s, v)),
            [j, O] = a.useState(() => h(s)),
            S = g ? Object.values(g) : u,
            N = a.useCallback((e) => {
              let t = e;
              if (!t) return;
              "system" === e && n && (t = b());
              let a = g ? g[t] : t,
                o = r ? f() : null,
                i = document.documentElement;
              if (
                ("class" === y
                  ? (i.classList.remove(...S), a && i.classList.add(a))
                  : a
                  ? i.setAttribute(y, a)
                  : i.removeAttribute(y),
                l)
              ) {
                let e = c.includes(v) ? v : null,
                  r = c.includes(t) ? t : e;
                i.style.colorScheme = r;
              }
              null == o || o();
            }, []),
            E = a.useCallback(
              (e) => {
                let t = "function" == typeof e ? e(e) : e;
                k(t);
                try {
                  localStorage.setItem(s, t);
                } catch (e) {}
              },
              [t]
            ),
            C = a.useCallback(
              (e) => {
                O(b(e)), "system" === w && n && !t && N("system");
              },
              [w, t]
            );
          a.useEffect(() => {
            let e = window.matchMedia(o);
            return e.addListener(C), C(e), () => e.removeListener(C);
          }, [C]),
            a.useEffect(() => {
              let e = (e) => {
                e.key === s && E(e.newValue || v);
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [E]),
            a.useEffect(() => {
              N(null != t ? t : w);
            }, [t, w]);
          let P = a.useMemo(
            () => ({
              theme: w,
              setTheme: E,
              forcedTheme: t,
              resolvedTheme: "system" === w ? j : w,
              themes: n ? [...u, "system"] : u,
              systemTheme: n ? j : void 0,
            }),
            [w, E, t, j, n, u]
          );
          return a.createElement(
            i.Provider,
            { value: P },
            a.createElement(m, {
              forcedTheme: t,
              disableTransitionOnChange: r,
              enableSystem: n,
              enableColorScheme: l,
              storageKey: s,
              themes: u,
              defaultTheme: v,
              attribute: y,
              value: g,
              children: p,
              attrs: S,
              nonce: x,
            }),
            p
          );
        },
        m = a.memo((e) => {
          let {
              forcedTheme: t,
              storageKey: r,
              attribute: n,
              enableSystem: l,
              enableColorScheme: i,
              defaultTheme: s,
              value: d,
              attrs: u,
              nonce: m,
            } = e,
            h = "system" === s,
            f =
              "class" === n
                ? "var d=document.documentElement,c=d.classList;".concat(
                    "c.remove(".concat(
                      u.map((e) => "'".concat(e, "'")).join(","),
                      ")"
                    ),
                    ";"
                  )
                : "var d=document.documentElement,n='".concat(
                    n,
                    "',s='setAttribute';"
                  ),
            b = i
              ? (c.includes(s) ? s : null)
                ? "if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(
                    s,
                    "'"
                  )
                : "if(e==='light'||e==='dark')d.style.colorScheme=e"
              : "",
            v = function (e) {
              let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r =
                  !(arguments.length > 2) ||
                  void 0 === arguments[2] ||
                  arguments[2],
                a = d ? d[e] : e,
                o = t ? e + "|| ''" : "'".concat(a, "'"),
                l = "";
              return (
                i &&
                  r &&
                  !t &&
                  c.includes(e) &&
                  (l += "d.style.colorScheme = '".concat(e, "';")),
                "class" === n
                  ? t || a
                    ? (l += "c.add(".concat(o, ")"))
                    : (l += "null")
                  : a && (l += "d[s](n,".concat(o, ")")),
                l
              );
            },
            y = t
              ? "!function(){".concat(f).concat(v(t), "}()")
              : l
              ? "!function(){try{"
                  .concat(f, "var e=localStorage.getItem('")
                  .concat(r, "');if('system'===e||(!e&&")
                  .concat(h, ")){var t='")
                  .concat(
                    o,
                    "',m=window.matchMedia(t);if(m.media!==t||m.matches){"
                  )
                  .concat(v("dark"), "}else{")
                  .concat(v("light"), "}}else if(e){")
                  .concat(d ? "var x=".concat(JSON.stringify(d), ";") : "")
                  .concat(v(d ? "x[e]" : "e", !0), "}")
                  .concat(h ? "" : "else{" + v(s, !1, !1) + "}")
                  .concat(b, "}catch(e){}}()")
              : "!function(){try{"
                  .concat(f, "var e=localStorage.getItem('")
                  .concat(r, "');if(e){")
                  .concat(d ? "var x=".concat(JSON.stringify(d), ";") : "")
                  .concat(v(d ? "x[e]" : "e", !0), "}else{")
                  .concat(v(s, !1, !1), ";}")
                  .concat(b, "}catch(t){}}();");
          return a.createElement("script", {
            nonce: m,
            dangerouslySetInnerHTML: { __html: y },
          });
        }),
        h = (e, t) => {
          let r;
          if (!l) {
            try {
              r = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return r || t;
          }
        },
        f = () => {
          let e = document.createElement("style");
          return (
            e.appendChild(
              document.createTextNode(
                "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(e),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e);
                }, 1);
            }
          );
        },
        b = (e) => (
          e || (e = window.matchMedia(o)), e.matches ? "dark" : "light"
        ),
        v = (e) => {
          let { children: t } = e;
          return (0, n.jsx)(s, {
            attribute: "class",
            enableSystem: !1,
            defaultTheme: "dark",
            children: t,
          });
        };
    },
    1657: function (e, t, r) {
      "use strict";
      r.d(t, {
        cn: function () {
          return c;
        },
        t: function () {
          return o;
        },
      });
      var n = r(3167),
        a = r(1367);
      let c = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return (0, a.m6)((0, n.Z)(...t));
        },
        o = (e, t) => {
          e = new Date(e);
          let r = Math.floor(
            Math.abs((t = new Date(t)).getTime() - e.getTime()) / 1e3
          );
          return r < 60
            ? "".concat(r, " second").concat(1 !== r ? "s" : "")
            : r < 3600
            ? ""
                .concat(Math.floor(r / 60), " minute")
                .concat(1 !== Math.floor(r / 60) ? "s" : "")
            : r < 86400
            ? ""
                .concat(Math.floor(r / 3600), " hour")
                .concat(1 !== Math.floor(r / 3600) ? "s" : "")
            : r < 31536e3
            ? ""
                .concat(Math.floor(r / 86400), " day")
                .concat(1 !== Math.floor(r / 86400) ? "s" : "")
            : ""
                .concat(Math.floor(r / 31536e3), " year")
                .concat(1 !== Math.floor(r / 31536e3) ? "s" : "");
        };
    },
    8670: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      /**
       * @license lucide-react v0.363.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(843).Z)("Search", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
      ]);
    },
    2445: function () {},
    2118: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__Montserrat_4f4c7b', '__Montserrat_Fallback_4f4c7b', Arial, sans-serif",
          fontStyle: "normal",
        },
        className: "__className_4f4c7b",
      };
    },
    158: function (e, t, r) {
      "use strict";
      r.d(t, {
        w_: function () {
          return d;
        },
      });
      var n = r(2265),
        a = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        c = n.createContext && n.createContext(a),
        o = ["attr", "size", "title"];
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = t),
                  (a = r[t]),
                  (n = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(n)) in e
                    ? Object.defineProperty(e, n, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[n] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function d(e) {
        return (t) =>
          n.createElement(
            u,
            l({ attr: s({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, r) =>
                  n.createElement(t.tag, s({ key: r }, t.attr), e(t.child))
                )
              );
            })(e.child)
          );
      }
      function u(e) {
        var t = (t) => {
          var r,
            { attr: a, size: c, title: i } = e,
            d = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                a = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                      if (t.indexOf(n) >= 0) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (n = 0; n < c.length; n++)
                  (r = c[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (a[r] = e[r]);
              }
              return a;
            })(e, o),
            u = c || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.createElement(
              "svg",
              l(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                a,
                d,
                {
                  className: r,
                  style: s(s({ color: e.color || t.color }, t.style), e.style),
                  height: u,
                  width: u,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              i && n.createElement("title", null, i),
              e.children
            )
          );
        };
        return void 0 !== c
          ? n.createElement(c.Consumer, null, (e) => t(e))
          : t(a);
      }
    },
  },
  function (e) {
    e.O(0, [240, 699, 228, 150, 792, 497, 971, 69, 744], function () {
      return e((e.s = 8642));
    }),
      (_N_E = e.O());
  },
]);
