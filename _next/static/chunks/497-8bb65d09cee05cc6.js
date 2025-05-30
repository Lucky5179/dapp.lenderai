"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [497],
  {
    9295: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.363.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(843).Z)("SquarePen", [
        [
          "path",
          {
            d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
            key: "1m0v6g",
          },
        ],
        [
          "path",
          {
            d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",
            key: "1lpok0",
          },
        ],
      ]);
    },
    703: function (e, t, n) {
      n.d(t, {
        default: function () {
          return i.a;
        },
      });
      var r = n(7447),
        i = n.n(r);
    },
    7907: function (e, t, n) {
      var r = n(5313);
      n.o(r, "useSearchParams") &&
        n.d(t, {
          useSearchParams: function () {
            return r.useSearchParams;
          },
        }),
        n.o(r, "useSelectedLayoutSegments") &&
          n.d(t, {
            useSelectedLayoutSegments: function () {
              return r.useSelectedLayoutSegments;
            },
          });
    },
    1749: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let r = n(4096),
        i = n(3667),
        o = n(7437),
        a = i._(n(2265)),
        l = r._(n(4887)),
        u = r._(n(2251)),
        s = n(8630),
        d = n(6906),
        f = n(337);
      n(6184);
      let c = n(6993),
        p = r._(n(536)),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function g(e, t, n, r, i, o) {
        let a = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== a &&
          ((e["data-loaded-src"] = a),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && i(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    i = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function h(e) {
        let [t, n] = a.version.split(".", 2),
          r = parseInt(t, 10),
          i = parseInt(n, 10);
        return r > 18 || (18 === r && i >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let y = (0, a.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: r,
          sizes: i,
          height: l,
          width: u,
          decoding: s,
          className: d,
          style: f,
          fetchPriority: c,
          placeholder: p,
          loading: m,
          unoptimized: y,
          fill: v,
          onLoadRef: b,
          onLoadingCompleteRef: _,
          setBlurComplete: w,
          setShowAltText: S,
          onLoad: j,
          onError: P,
          ...x
        } = e;
        return (0, o.jsx)("img", {
          ...x,
          ...h(c),
          loading: m,
          width: u,
          height: l,
          decoding: s,
          "data-nimg": v ? "fill" : "1",
          className: d,
          style: f,
          sizes: i,
          srcSet: r,
          src: n,
          ref: (0, a.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e && (P && (e.src = e.src), e.complete && g(e, p, b, _, w, y));
            },
            [n, p, b, _, w, P, y, t]
          ),
          onLoad: (e) => {
            g(e.currentTarget, p, b, _, w, y);
          },
          onError: (e) => {
            S(!0), "empty" !== p && w(!0), P && P(e);
          },
        });
      });
      function v(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...h(n.fetchPriority),
          };
        return t && l.default.preload
          ? (l.default.preload(n.src, r), null)
          : (0, o.jsx)(u.default, {
              children: (0, o.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...r },
                "__nimg-" + n.src + n.srcSet + n.sizes
              ),
            });
      }
      let b = (0, a.forwardRef)((e, t) => {
        let n = (0, a.useContext)(c.RouterContext),
          r = (0, a.useContext)(f.ImageConfigContext),
          i = (0, a.useMemo)(() => {
            let e = m || r || d.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: n };
          }, [r]),
          { onLoad: l, onLoadingComplete: u } = e,
          g = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
          g.current = l;
        }, [l]);
        let h = (0, a.useRef)(u);
        (0, a.useEffect)(() => {
          h.current = u;
        }, [u]);
        let [b, _] = (0, a.useState)(!1),
          [w, S] = (0, a.useState)(!1),
          { props: j, meta: P } = (0, s.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: i,
            blurComplete: b,
            showAltText: w,
          });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(y, {
              ...j,
              unoptimized: P.unoptimized,
              placeholder: P.placeholder,
              fill: P.fill,
              onLoadRef: g,
              onLoadingCompleteRef: h,
              setBlurComplete: _,
              setShowAltText: S,
              ref: t,
            }),
            P.priority
              ? (0, o.jsx)(v, { isAppRouter: !n, imgAttributes: j })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5827: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(4096)._(n(2265)).default.createContext({});
    },
    3044: function (e, t) {
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    8630: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        n(6184);
      let r = n(7160),
        i = n(6906);
      function o(e) {
        return void 0 !== e.default;
      }
      function a(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function l(e, t) {
        var n;
        let l,
          u,
          s,
          {
            src: d,
            sizes: f,
            unoptimized: c = !1,
            priority: p = !1,
            loading: m,
            className: g,
            quality: h,
            width: y,
            height: v,
            fill: b = !1,
            style: _,
            onLoad: w,
            onLoadingComplete: S,
            placeholder: j = "empty",
            blurDataURL: P,
            fetchPriority: x,
            layout: C,
            objectFit: O,
            objectPosition: M,
            lazyBoundary: z,
            lazyRoot: E,
            ...I
          } = e,
          { imgConf: k, showAltText: A, blurComplete: R, defaultLoader: D } = t,
          L = k || i.imageConfigDefault;
        if ("allSizes" in L) l = L;
        else {
          let e = [...L.deviceSizes, ...L.imageSizes].sort((e, t) => e - t),
            t = L.deviceSizes.sort((e, t) => e - t);
          l = { ...L, allSizes: e, deviceSizes: t };
        }
        let N = I.loader || D;
        delete I.loader, delete I.srcSet;
        let U = "__next_img_default" in N;
        if (U) {
          if ("custom" === l.loader)
            throw Error(
              'Image with src "' +
                d +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = N;
          N = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (C) {
          "fill" === C && (b = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[C];
          e && (_ = { ..._, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[C];
          t && !f && (f = t);
        }
        let T = "",
          G = a(y),
          B = a(v);
        if ("object" == typeof (n = d) && (o(n) || void 0 !== n.src)) {
          let e = o(d) ? d.default : d;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((u = e.blurWidth),
            (s = e.blurHeight),
            (P = P || e.blurDataURL),
            (T = e.src),
            !b)
          ) {
            if (G || B) {
              if (G && !B) {
                let t = G / e.width;
                B = Math.round(e.height * t);
              } else if (!G && B) {
                let t = B / e.height;
                G = Math.round(e.width * t);
              }
            } else (G = e.width), (B = e.height);
          }
        }
        let F = !p && ("lazy" === m || void 0 === m);
        (!(d = "string" == typeof d ? d : T) ||
          d.startsWith("data:") ||
          d.startsWith("blob:")) &&
          ((c = !0), (F = !1)),
          l.unoptimized && (c = !0),
          U && d.endsWith(".svg") && !l.dangerouslyAllowSVG && (c = !0),
          p && (x = "high");
        let W = a(h),
          H = Object.assign(
            b
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: O,
                  objectPosition: M,
                }
              : {},
            A ? {} : { color: "transparent" },
            _
          ),
          V =
            R || "empty" === j
              ? null
              : "blur" === j
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: G,
                  heightInt: B,
                  blurWidth: u,
                  blurHeight: s,
                  blurDataURL: P || "",
                  objectFit: H.objectFit,
                }) +
                '")'
              : 'url("' + j + '")',
          q = V
            ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: V,
              }
            : {},
          Z = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: i,
              quality: o,
              sizes: a,
              loader: l,
            } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: u, kind: s } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: i } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: i.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => i.find((t) => t >= e) || i[i.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, i, a),
              d = u.length - 1;
            return {
              sizes: a || "w" !== s ? a : "100vw",
              srcSet: u
                .map(
                  (e, r) =>
                    l({ config: t, src: n, quality: o, width: e }) +
                    " " +
                    ("w" === s ? e : r + 1) +
                    s
                )
                .join(", "),
              src: l({ config: t, src: n, quality: o, width: u[d] }),
            };
          })({
            config: l,
            src: d,
            unoptimized: c,
            width: G,
            quality: W,
            sizes: f,
            loader: N,
          });
        return {
          props: {
            ...I,
            loading: F ? "lazy" : m,
            fetchPriority: x,
            width: G,
            height: B,
            decoding: "async",
            className: g,
            style: { ...H, ...q },
            sizes: Z.sizes,
            srcSet: Z.srcSet,
            src: Z.src,
          },
          meta: { unoptimized: c, priority: p, placeholder: j, fill: b },
        };
      }
    },
    2251: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          defaultHead: function () {
            return f;
          },
          default: function () {
            return g;
          },
        });
      let r = n(4096),
        i = n(3667),
        o = n(7437),
        a = i._(n(2265)),
        l = r._(n(7392)),
        u = n(5827),
        s = n(7484),
        d = n(3044);
      function f(e) {
        void 0 === e && (e = !1);
        let t = [(0, o.jsx)("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              (0, o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function c(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      n(6184);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(c, [])
          .reverse()
          .concat(f(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (i) => {
                let o = !0,
                  a = !1;
                if (
                  i.key &&
                  "number" != typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let t = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(t) ? (o = !1) : e.add(t);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (o = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (i.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (o = !1) : n.add(t);
                        else {
                          let e = i.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !a) && n.has(e)
                            ? (o = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                a.default.cloneElement(e, t)
              );
            }
            return a.default.cloneElement(e, { key: r });
          });
      }
      let g = function (e) {
        let { children: t } = e,
          n = (0, a.useContext)(u.AmpStateContext),
          r = (0, a.useContext)(s.HeadManagerContext);
        return (0, o.jsx)(l.default, {
          reduceComponentsToState: m,
          headManager: r,
          inAmpMode: (0, d.isInAmpMode)(n),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7160: function (e, t) {
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: i,
            blurDataURL: o,
            objectFit: a,
          } = e,
          l = r ? 40 * r : t,
          u = i ? 40 * i : n,
          s = l && u ? "viewBox='0 0 " + l + " " + u + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          s +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (s
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    337: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(4096)._(n(2265)),
        i = n(6906),
        o = r.default.createContext(i.imageConfigDefault);
    },
    6906: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    7447: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getImageProps: function () {
            return l;
          },
          default: function () {
            return u;
          },
        });
      let r = n(4096),
        i = n(8630),
        o = n(1749),
        a = r._(n(536)),
        l = (e) => {
          let { props: t } = (0, i.getImgProps)(e, {
            defaultLoader: a.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
          return { props: t };
        },
        u = o.Image;
    },
    536: function (e, t) {
      function n(e) {
        let { config: t, src: n, width: r, quality: i } = e;
        return n
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    7392: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(2265),
        i = "undefined" == typeof window,
        o = i ? () => {} : r.useLayoutEffect,
        a = i ? () => {} : r.useEffect;
      function l(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function l() {
          if (t && t.mountedInstances) {
            let i = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(i, e));
          }
        }
        if (i) {
          var u;
          null == t || null == (u = t.mountedInstances) || u.add(e.children),
            l();
        }
        return (
          o(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          o(
            () => (
              t && (t._pendingUpdate = l),
              () => {
                t && (t._pendingUpdate = l);
              }
            )
          ),
          a(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
  },
]);
