(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [160],
  {
    5160: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 1267));
    },
    1267: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return ep;
          },
        });
      var a = s(7437),
        l = s(2265),
        r = s(9295),
        i = s(6490),
        n = s(1657),
        d = (e) => {
          let { messages: t } = e,
            [s, d] = (0, l.useState)(""),
            [o, c] = (0, l.useState)("");
          return (
            (0, l.useEffect)(() => {
              t.length > 0 &&
                (d(
                  t[0].content.length > 20
                    ? "".concat(t[0].content.substring(0, 20).trim(), "...")
                    : t[0].content
                ),
                c((0, n.t)(new Date(), t[0].createdAt)));
            }, [t]),
            (0, l.useEffect)(() => {
              let e = setInterval(() => {
                t.length > 0 && c((0, n.t)(new Date(), t[0].createdAt));
              }, 1e3);
              return () => clearInterval(e);
            }, []),
            (0, a.jsxs)("div", {
              className:
                "fixed z-40 top-0 left-0 right-0 px-4 lg:pl-[104px] lg:pr-6 lg:px-8 flex flex-row items-center justify-between w-full py-4 text-sm text-black dark:text-white/70 border-b bg-light-primary dark:bg-dark-primary border-light-100 dark:border-dark-200",
              children: [
                (0, a.jsx)(r.Z, {
                  size: 17,
                  className:
                    "active:scale-95 transition duration-100 cursor-pointer lg:hidden",
                }),
                (0, a.jsxs)("div", {
                  className:
                    "hidden lg:flex flex-row items-center justify-center space-x-2",
                  children: [
                    (0, a.jsx)(i.Z, { size: 17 }),
                    (0, a.jsxs)("p", {
                      className: "text-xs",
                      children: [o, " ago"],
                    }),
                  ],
                }),
                (0, a.jsx)("p", { className: "hidden lg:flex", children: s }),
              ],
            })
          );
        },
        o = s(8904),
        c = s(9934),
        x = s(7358),
        h = () =>
          (0, a.jsx)("button", {
            type: "button",
            className:
              "p-2 text-black/50 dark:text-white/50 rounded-xl hover:bg-light-secondary dark:hover:bg-dark-secondary transition duration-200 hover:text-black dark:hover:text-white",
            children: (0, a.jsx)(x.Z, {}),
          }),
        m = (e) => {
          let { sendMessage: t, loading: s } = e,
            [r, i] = (0, l.useState)(!1),
            [d, x] = (0, l.useState)(""),
            [m, u] = (0, l.useState)(1),
            [g, p] = (0, l.useState)("single");
          (0, l.useEffect)(() => {
            m >= 2 && d && "single" === g
              ? p("multi")
              : d || "multi" !== g || p("single");
          }, [m, g, d]);
          let f = (0, l.useRef)(null);
          return (
            (0, l.useEffect)(() => {
              let e = (e) => {
                let t = document.activeElement,
                  s =
                    (null == t ? void 0 : t.tagName) === "INPUT" ||
                    (null == t ? void 0 : t.tagName) === "TEXTAREA" ||
                    (null == t ? void 0 : t.hasAttribute("contenteditable"));
                if ("/" === e.key && !s) {
                  var a;
                  e.preventDefault(),
                    null === (a = f.current) || void 0 === a || a.focus();
                }
              };
              return (
                document.addEventListener("keydown", e),
                () => {
                  document.removeEventListener("keydown", e);
                }
              );
            }, []),
            (0, a.jsxs)("form", {
              onSubmit: (e) => {
                s || (e.preventDefault(), t(d), x(""));
              },
              onKeyDown: (e) => {
                "Enter" !== e.key ||
                  e.shiftKey ||
                  s ||
                  (e.preventDefault(), t(d), x(""));
              },
              className: (0, n.cn)(
                "bg-light-secondary dark:bg-dark-secondary p-4 flex items-center overflow-hidden border border-light-200 dark:border-dark-200",
                "multi" === g ? "flex-col rounded-lg" : "flex-row rounded-full"
              ),
              children: [
                "single" === g && (0, a.jsx)(h, {}),
                (0, a.jsx)(c.Z, {
                  ref: f,
                  value: d,
                  onChange: (e) => x(e.target.value),
                  onHeightChange: (e, t) => {
                    u(Math.ceil(e / t.rowHeight));
                  },
                  className:
                    "transition bg-transparent dark:placeholder:text-white/50 placeholder:text-sm text-sm dark:text-white resize-none focus:outline-none w-full px-2 max-h-24 lg:max-h-36 xl:max-h-48 flex-grow flex-shrink",
                  placeholder: "Ask a follow-up",
                }),
                "single" === g &&
                  (0, a.jsx)("div", {
                    className: "flex flex-row items-center space-x-4",
                    children: (0, a.jsx)("button", {
                      disabled: 0 === d.trim().length || s,
                      className:
                        "bg-[#24A0ED] text-white disabled:text-black/50 dark:disabled:text-white/50 hover:bg-opacity-85 transition duration-100 disabled:bg-[#e0e0dc79] dark:disabled:bg-[#ececec21] rounded-full p-2",
                      children: (0, a.jsx)(o.Z, {
                        className: "bg-background",
                        size: 17,
                      }),
                    }),
                  }),
                "multi" === g &&
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-row items-center justify-between w-full pt-2",
                    children: [
                      (0, a.jsx)(h, {}),
                      (0, a.jsx)("div", {
                        className: "flex flex-row items-center space-x-4",
                        children: (0, a.jsx)("button", {
                          disabled: 0 === d.trim().length || s,
                          className:
                            "bg-[#24A0ED] text-white text-black/50 dark:disabled:text-white/50 hover:bg-opacity-85 transition duration-100 disabled:bg-[#e0e0dc79] dark:disabled:bg-[#ececec21] rounded-full p-2",
                          children: (0, a.jsx)(o.Z, {
                            className: "bg-background",
                            size: 17,
                          }),
                        }),
                      }),
                    ],
                  }),
              ],
            })
          );
        },
        u = s(9849),
        g = s(9171),
        p = s(1950),
        f = s(9251),
        b = s(2414),
        v = s(94),
        k = s(8297),
        w = s(9259),
        j = s(4178),
        y = (e) => {
          let { message: t, initialMessage: s } = e,
            [r, i] = (0, l.useState)(!1);
          return (0, a.jsx)("button", {
            onClick: () => {
              var e;
              let a = ""
                .concat(s)
                .concat(
                  t.sources &&
                    t.sources.length > 0 &&
                    "\n\nCitations:\n".concat(
                      null === (e = t.sources) || void 0 === e
                        ? void 0
                        : e
                            .map((e, t) =>
                              "[".concat(t + 1, "] ").concat(e.metadata.url)
                            )
                            .join("\n")
                    )
                );
              navigator.clipboard.writeText(a),
                i(!0),
                setTimeout(() => i(!1), 1e3);
            },
            className:
              "p-2 text-black/70 dark:text-white/70 rounded-xl hover:bg-light-secondary dark:hover:bg-dark-secondary transition duration-200 hover:text-black dark:hover:text-white",
            children: r
              ? (0, a.jsx)(w.Z, { size: 18 })
              : (0, a.jsx)(j.Z, { size: 18 }),
          });
        },
        N = s(3522),
        S = (e) => {
          let { rewrite: t, messageId: s } = e;
          return (0, a.jsxs)("button", {
            onClick: () => t(s),
            className:
              "py-2 px-3 text-black/70 dark:text-white/70 rounded-xl hover:bg-light-secondary dark:hover:bg-dark-secondary transition duration-200 hover:text-black dark:hover:text-white flex flex-row items-center space-x-1",
            children: [
              (0, a.jsx)(N.Z, { size: 18 }),
              (0, a.jsx)("p", {
                className: "text-xs font-medium",
                children: "Rewrite",
              }),
            ],
          });
        },
        M = s(4341),
        C = s(2013),
        I = (e) => {
          let { sources: t } = e,
            [s, r] = (0, l.useState)(!1);
          return (0, a.jsxs)("div", {
            className: "grid grid-cols-2 lg:grid-cols-4 gap-2",
            children: [
              t
                .slice(0, 3)
                .map((e, t) =>
                  (0, a.jsxs)(
                    "a",
                    {
                      className:
                        "bg-light-100 hover:bg-light-200 dark:bg-dark-100 dark:hover:bg-dark-200 transition duration-200 rounded-lg p-3 flex flex-col space-y-2 font-medium",
                      href: e.metadata.url,
                      target: "_blank",
                      children: [
                        (0, a.jsx)("p", {
                          className:
                            "dark:text-white text-xs overflow-hidden whitespace-nowrap text-ellipsis",
                          children: e.metadata.title,
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex flex-row items-center justify-between",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex flex-row items-center space-x-1",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://s2.googleusercontent.com/s2/favicons?domain_url=".concat(
                                    e.metadata.url
                                  ),
                                  width: 16,
                                  height: 16,
                                  alt: "favicon",
                                  className: "rounded-lg h-4 w-4",
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-xs text-black/50 dark:text-white/50 overflow-hidden whitespace-nowrap text-ellipsis",
                                  children: e.metadata.url.replace(
                                    /.+\/\/|www.|\..+/g,
                                    ""
                                  ),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex flex-row items-center space-x-1 text-black/50 dark:text-white/50 text-xs",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "bg-black/50 dark:bg-white/50 h-[4px] w-[4px] rounded-full",
                                }),
                                (0, a.jsx)("span", { children: t + 1 }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    t
                  )
                ),
              t.length > 3 &&
                (0, a.jsxs)("button", {
                  onClick: () => {
                    r(!0),
                      document.body.classList.add("overflow-hidden-scrollable");
                  },
                  className:
                    "bg-light-100 hover:bg-light-200 dark:bg-dark-100 dark:hover:bg-dark-200 transition duration-200 rounded-lg p-3 flex flex-col space-y-2 font-medium",
                  children: [
                    (0, a.jsx)("div", {
                      className: "flex flex-row items-center space-x-1",
                      children: t
                        .slice(3, 6)
                        .map((e, t) =>
                          (0, a.jsx)(
                            "img",
                            {
                              src: "https://s2.googleusercontent.com/s2/favicons?domain_url=".concat(
                                e.metadata.url
                              ),
                              width: 16,
                              height: 16,
                              alt: "favicon",
                              className: "rounded-lg h-4 w-4",
                            },
                            t
                          )
                        ),
                    }),
                    (0, a.jsxs)("p", {
                      className: "text-xs text-black/50 dark:text-white/50",
                      children: ["View ", t.length - 3, " more"],
                    }),
                  ],
                }),
              (0, a.jsx)(M.u, {
                appear: !0,
                show: s,
                as: l.Fragment,
                children: (0, a.jsx)(C.Vq, {
                  as: "div",
                  className: "relative z-50",
                  onClose: () => {
                    r(!1),
                      document.body.classList.remove(
                        "overflow-hidden-scrollable"
                      );
                  },
                  children: (0, a.jsx)("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: (0, a.jsx)("div", {
                      className:
                        "flex min-h-full items-center justify-center p-4 text-center",
                      children: (0, a.jsx)(M.x, {
                        as: l.Fragment,
                        enter: "ease-out duration-200",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "ease-in duration-100",
                        leaveFrom: "opacity-100 scale-200",
                        leaveTo: "opacity-0 scale-95",
                        children: (0, a.jsxs)(C.EM, {
                          className:
                            "w-full max-w-md transform rounded-2xl bg-light-secondary dark:bg-dark-secondary border border-light-200 dark:border-dark-200 p-6 text-left align-middle shadow-xl transition-all",
                          children: [
                            (0, a.jsx)(C.$N, {
                              className:
                                "text-lg font-medium leading-6 dark:text-white",
                              children: "Sources",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "grid grid-cols-2 gap-2 overflow-auto max-h-[300px] mt-2 pr-2",
                              children: t.map((e, t) =>
                                (0, a.jsxs)(
                                  "a",
                                  {
                                    className:
                                      "bg-light-secondary hover:bg-light-200 dark:bg-dark-secondary dark:hover:bg-dark-200 border border-light-200 dark:border-dark-200 transition duration-200 rounded-lg p-3 flex flex-col space-y-2 font-medium",
                                    href: e.metadata.url,
                                    target: "_blank",
                                    children: [
                                      (0, a.jsx)("p", {
                                        className:
                                          "dark:text-white text-xs overflow-hidden whitespace-nowrap text-ellipsis",
                                        children: e.metadata.title,
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex flex-row items-center justify-between",
                                        children: [
                                          (0, a.jsxs)("div", {
                                            className:
                                              "flex flex-row items-center space-x-1",
                                            children: [
                                              (0, a.jsx)("img", {
                                                src: "https://s2.googleusercontent.com/s2/favicons?domain_url=".concat(
                                                  e.metadata.url
                                                ),
                                                width: 16,
                                                height: 16,
                                                alt: "favicon",
                                                className: "rounded-lg h-4 w-4",
                                              }),
                                              (0, a.jsx)("p", {
                                                className:
                                                  "text-xs text-black/50 dark:text-white/50 overflow-hidden whitespace-nowrap text-ellipsis",
                                                children:
                                                  e.metadata.url.replace(
                                                    /.+\/\/|www.|\..+/g,
                                                    ""
                                                  ),
                                              }),
                                            ],
                                          }),
                                          (0, a.jsxs)("div", {
                                            className:
                                              "flex flex-row items-center space-x-1 text-black/50 dark:text-white/50 text-xs",
                                            children: [
                                              (0, a.jsx)("div", {
                                                className:
                                                  "bg-black/50 dark:bg-white/50 h-[4px] w-[4px] rounded-full",
                                              }),
                                              (0, a.jsx)("span", {
                                                children: t + 1,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  t
                                )
                              ),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        E = s(7424),
        z = s(8975);
      s(8032);
      var A = (e) => {
          let { query: t, chat_history: s } = e,
            [r, i] = (0, l.useState)(null),
            [n, d] = (0, l.useState)(!1),
            [o, c] = (0, l.useState)(!1),
            [x, h] = (0, l.useState)([]);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              !n &&
                null === r &&
                (0, a.jsxs)("button", {
                  onClick: async () => {
                    var e;
                    d(!0);
                    let a = localStorage.getItem("chatModelProvider"),
                      l = localStorage.getItem("chatModel"),
                      r = await fetch(
                        "".concat(
                          "https://chat.lendernetwork.io/api",
                          "/images"
                        ),
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            query: t,
                            chat_history: s,
                            chat_model_provider: a,
                            chat_model: l,
                          }),
                        }
                      ),
                      n =
                        null !== (e = (await r.json()).images) && void 0 !== e
                          ? e
                          : [];
                    i(n), h(n.map((e) => ({ src: e.img_src }))), d(!1);
                  },
                  className:
                    "border border-dashed border-light-200 dark:border-dark-200 hover:bg-light-200 dark:hover:bg-dark-200 active:scale-95 duration-200 transition px-4 py-2 flex flex-row items-center justify-between rounded-lg dark:text-white text-sm w-full",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex flex-row items-center space-x-2",
                      children: [
                        (0, a.jsx)(E.Z, { size: 17 }),
                        (0, a.jsx)("p", { children: "Search images" }),
                      ],
                    }),
                    (0, a.jsx)(v.Z, { className: "text-[#24A0ED]", size: 17 }),
                  ],
                }),
              n &&
                (0, a.jsx)("div", {
                  className: "grid grid-cols-2 gap-2",
                  children: [void 0, void 0, void 0, void 0].map((e, t) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className:
                          "bg-light-secondary dark:bg-dark-secondary h-32 w-full rounded-lg animate-pulse aspect-video object-cover",
                      },
                      t
                    )
                  ),
                }),
              null !== r &&
                r.length > 0 &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)("div", {
                      className: "grid grid-cols-2 gap-2",
                      children: [
                        r.length > 4
                          ? r.slice(0, 3).map((e, t) =>
                              (0, a.jsx)(
                                "img",
                                {
                                  onClick: () => {
                                    c(!0),
                                      h([
                                        x[t],
                                        ...x.slice(0, t),
                                        ...x.slice(t + 1),
                                      ]);
                                  },
                                  src: e.img_src,
                                  alt: e.title,
                                  className:
                                    "h-full w-full aspect-video object-cover rounded-lg transition duration-200 active:scale-95 hover:scale-[1.02] cursor-zoom-in",
                                },
                                t
                              )
                            )
                          : r.map((e, t) =>
                              (0, a.jsx)(
                                "img",
                                {
                                  onClick: () => {
                                    c(!0),
                                      h([
                                        x[t],
                                        ...x.slice(0, t),
                                        ...x.slice(t + 1),
                                      ]);
                                  },
                                  src: e.img_src,
                                  alt: e.title,
                                  className:
                                    "h-full w-full aspect-video object-cover rounded-lg transition duration-200 active:scale-95 hover:scale-[1.02] cursor-zoom-in",
                                },
                                t
                              )
                            ),
                        r.length > 4 &&
                          (0, a.jsxs)("button", {
                            onClick: () => c(!0),
                            className:
                              "bg-light-100 hover:bg-light-200 dark:bg-dark-100 dark:hover:bg-dark-200 transition duration-200 active:scale-95 hover:scale-[1.02] h-auto w-full rounded-lg flex flex-col justify-between text-white p-2",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "flex flex-row items-center space-x-1",
                                children: r
                                  .slice(3, 6)
                                  .map((e, t) =>
                                    (0, a.jsx)(
                                      "img",
                                      {
                                        src: e.img_src,
                                        alt: e.title,
                                        className:
                                          "h-6 w-12 rounded-md lg:h-3 lg:w-6 lg:rounded-sm aspect-video object-cover",
                                      },
                                      t
                                    )
                                  ),
                              }),
                              (0, a.jsxs)("p", {
                                className:
                                  "text-black/70 dark:text-white/70 text-xs",
                                children: ["View ", r.length - 3, " more"],
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, a.jsx)(z.ZP, {
                      open: o,
                      close: () => c(!1),
                      slides: x,
                    }),
                  ],
                }),
            ],
          });
        },
        P = s(9369),
        Z = s(6437),
        _ = (e) => {
          let { query: t, chat_history: s } = e,
            [r, i] = (0, l.useState)(null),
            [n, d] = (0, l.useState)(!1),
            [o, c] = (0, l.useState)(!1),
            [x, h] = (0, l.useState)([]);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              !n &&
                null === r &&
                (0, a.jsxs)("button", {
                  onClick: async () => {
                    var e;
                    d(!0);
                    let a = localStorage.getItem("chatModelProvider"),
                      l = localStorage.getItem("chatModel"),
                      r = await fetch(
                        "".concat(
                          "https://chat.lendernetwork.io/api",
                          "/videos"
                        ),
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            query: t,
                            chat_history: s,
                            chat_model_provider: a,
                            chat_model: l,
                          }),
                        }
                      ),
                      n =
                        null !== (e = (await r.json()).videos) && void 0 !== e
                          ? e
                          : [];
                    i(n),
                      h(
                        n.map((e) => ({
                          type: "video-slide",
                          iframe_src: e.iframe_src,
                          src: e.img_src,
                        }))
                      ),
                      d(!1);
                  },
                  className:
                    "border border-dashed border-light-200 dark:border-dark-200 hover:bg-light-200 dark:hover:bg-dark-200 active:scale-95 duration-200 transition px-4 py-2 flex flex-row items-center justify-between rounded-lg dark:text-white text-sm w-full",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex flex-row items-center space-x-2",
                      children: [
                        (0, a.jsx)(P.Z, { size: 17 }),
                        (0, a.jsx)("p", { children: "Search videos" }),
                      ],
                    }),
                    (0, a.jsx)(v.Z, { className: "text-[#24A0ED]", size: 17 }),
                  ],
                }),
              n &&
                (0, a.jsx)("div", {
                  className: "grid grid-cols-2 gap-2",
                  children: [void 0, void 0, void 0, void 0].map((e, t) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className:
                          "bg-light-secondary dark:bg-dark-secondary h-32 w-full rounded-lg animate-pulse aspect-video object-cover",
                      },
                      t
                    )
                  ),
                }),
              null !== r &&
                r.length > 0 &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)("div", {
                      className: "grid grid-cols-2 gap-2",
                      children: [
                        r.length > 4
                          ? r.slice(0, 3).map((e, t) =>
                              (0, a.jsxs)(
                                "div",
                                {
                                  onClick: () => {
                                    c(!0),
                                      h([
                                        x[t],
                                        ...x.slice(0, t),
                                        ...x.slice(t + 1),
                                      ]);
                                  },
                                  className:
                                    "relative transition duration-200 active:scale-95 hover:scale-[1.02] cursor-pointer",
                                  children: [
                                    (0, a.jsx)("img", {
                                      src: e.img_src,
                                      alt: e.title,
                                      className:
                                        "relative h-full w-full aspect-video object-cover rounded-lg",
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "absolute bg-white/70 dark:bg-black/70 text-black/70 dark:text-white/70 px-2 py-1 flex flex-row items-center space-x-1 bottom-1 right-1 rounded-md",
                                      children: [
                                        (0, a.jsx)(Z.Z, { size: 15 }),
                                        (0, a.jsx)("p", {
                                          className: "text-xs",
                                          children: "Video",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t
                              )
                            )
                          : r.map((e, t) =>
                              (0, a.jsxs)(
                                "div",
                                {
                                  onClick: () => {
                                    c(!0),
                                      h([
                                        x[t],
                                        ...x.slice(0, t),
                                        ...x.slice(t + 1),
                                      ]);
                                  },
                                  className:
                                    "relative transition duration-200 active:scale-95 hover:scale-[1.02] cursor-pointer",
                                  children: [
                                    (0, a.jsx)("img", {
                                      src: e.img_src,
                                      alt: e.title,
                                      className:
                                        "relative h-full w-full aspect-video object-cover rounded-lg",
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "absolute bg-white/70 dark:bg-black/70 text-black/70 dark:text-white/70 px-2 py-1 flex flex-row items-center space-x-1 bottom-1 right-1 rounded-md",
                                      children: [
                                        (0, a.jsx)(Z.Z, { size: 15 }),
                                        (0, a.jsx)("p", {
                                          className: "text-xs",
                                          children: "Video",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t
                              )
                            ),
                        r.length > 4 &&
                          (0, a.jsxs)("button", {
                            onClick: () => c(!0),
                            className:
                              "bg-light-100 hover:bg-light-200 dark:bg-dark-100 dark:hover:bg-dark-200 transition duration-200 active:scale-95 hover:scale-[1.02] h-auto w-full rounded-lg flex flex-col justify-between text-white p-2",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "flex flex-row items-center space-x-1",
                                children: r
                                  .slice(3, 6)
                                  .map((e, t) =>
                                    (0, a.jsx)(
                                      "img",
                                      {
                                        src: e.img_src,
                                        alt: e.title,
                                        className:
                                          "h-6 w-12 rounded-md lg:h-3 lg:w-6 lg:rounded-sm aspect-video object-cover",
                                      },
                                      t
                                    )
                                  ),
                              }),
                              (0, a.jsxs)("p", {
                                className:
                                  "text-black/70 dark:text-white/70 text-xs",
                                children: ["View ", r.length - 3, " more"],
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, a.jsx)(z.ZP, {
                      open: o,
                      close: () => c(!1),
                      slides: x,
                      render: {
                        slide: (e) => {
                          let { slide: t } = e;
                          return "video-slide" === t.type
                            ? (0, a.jsx)("div", {
                                className:
                                  "h-full w-full flex flex-row items-center justify-center",
                                children: (0, a.jsx)("iframe", {
                                  src: t.iframe_src,
                                  className:
                                    "aspect-video max-h-[95vh] w-[95vw] rounded-2xl md:w-[80vw]",
                                  allowFullScreen: !0,
                                  allow:
                                    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                                }),
                              })
                            : null;
                        },
                      },
                    }),
                  ],
                }),
            ],
          });
        },
        F = s(6636),
        D = (e) => {
          let {
              message: t,
              messageIndex: s,
              history: r,
              loading: i,
              dividerRef: d,
              isLast: o,
              rewrite: c,
              sendMessage: x,
            } = e,
            [h, m] = (0, l.useState)(t.content),
            [w, j] = (0, l.useState)(t.content);
          (0, l.useEffect)(() => {
            let e = /\[(\d+)\]/g;
            if (
              "assistant" === t.role &&
              (null == t ? void 0 : t.sources) &&
              t.sources.length > 0
            )
              return m(
                t.content.replace(e, (e, s) => {
                  var a, l, r;
                  return '<a href="'
                    .concat(
                      null === (r = t.sources) || void 0 === r
                        ? void 0
                        : null === (l = r[s - 1]) || void 0 === l
                        ? void 0
                        : null === (a = l.metadata) || void 0 === a
                        ? void 0
                        : a.url,
                      '" target="_blank" className="bg-light-secondary dark:bg-dark-secondary px-1 rounded ml-1 no-underline text-xs text-black/70 dark:text-white/70 relative">'
                    )
                    .concat(s, "</a>");
                })
              );
            j(t.content.replace(e, "")), m(t.content);
          }, [t.content, t.sources, t.role]);
          let { speechStatus: N, start: M, stop: C } = (0, F.lq)({ text: w });
          return (0, a.jsxs)("div", {
            children: [
              "user" === t.role &&
                (0, a.jsx)("div", {
                  className: (0, n.cn)("w-full", 0 === s ? "pt-16" : "pt-8"),
                  children: (0, a.jsx)("h2", {
                    className:
                      "text-black dark:text-white font-medium text-3xl lg:w-9/12",
                    children: t.content,
                  }),
                }),
              "assistant" === t.role &&
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col space-y-9 lg:space-y-0 lg:flex-row lg:justify-between lg:space-x-9",
                  children: [
                    (0, a.jsxs)("div", {
                      ref: d,
                      className: "flex flex-col space-y-6 w-full lg:w-9/12",
                      children: [
                        t.sources &&
                          t.sources.length > 0 &&
                          (0, a.jsxs)("div", {
                            className: "flex flex-col space-y-2",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex flex-row items-center space-x-2",
                                children: [
                                  (0, a.jsx)(u.Z, {
                                    className: "text-black dark:text-white",
                                    size: 20,
                                  }),
                                  (0, a.jsx)("h3", {
                                    className:
                                      "text-black dark:text-white font-medium text-xl",
                                    children: "Sources",
                                  }),
                                ],
                              }),
                              (0, a.jsx)(I, { sources: t.sources }),
                            ],
                          }),
                        (0, a.jsxs)("div", {
                          className: "flex flex-col space-y-2",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex flex-row items-center space-x-2",
                              children: [
                                (0, a.jsx)(g.Z, {
                                  className: (0, n.cn)(
                                    "text-black dark:text-white",
                                    o && i ? "animate-spin" : "animate-none"
                                  ),
                                  size: 20,
                                }),
                                (0, a.jsx)("h3", {
                                  className:
                                    "text-black dark:text-white font-medium text-xl",
                                  children: "Answer",
                                }),
                              ],
                            }),
                            (0, a.jsx)(k.ZP, {
                              className: (0, n.cn)(
                                "prose dark:prose-invert prose-p:leading-relaxed prose-pre:p-0",
                                "max-w-none break-words text-black dark:text-white text-sm md:text-base font-medium"
                              ),
                              children: h,
                            }),
                            i && o
                              ? null
                              : (0, a.jsxs)("div", {
                                  className:
                                    "flex flex-row items-center justify-between w-full text-black dark:text-white py-4 -mx-2",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "flex flex-row items-center space-x-1",
                                      children: (0, a.jsx)(S, {
                                        rewrite: c,
                                        messageId: t.messageId,
                                      }),
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex flex-row items-center space-x-1",
                                      children: [
                                        (0, a.jsx)(y, {
                                          initialMessage: t.content,
                                          message: t,
                                        }),
                                        (0, a.jsx)("button", {
                                          onClick: () => {
                                            "started" === N ? C() : M();
                                          },
                                          className:
                                            "p-2 text-black/70 dark:text-white/70 rounded-xl hover:bg-light-secondary dark:hover:bg-dark-secondary transition duration-200 hover:text-black dark:hover:text-white",
                                          children:
                                            "started" === N
                                              ? (0, a.jsx)(p.Z, { size: 18 })
                                              : (0, a.jsx)(f.Z, { size: 18 }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                            o &&
                              t.suggestions &&
                              t.suggestions.length > 0 &&
                              "assistant" === t.role &&
                              !i &&
                              (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "h-px w-full bg-light-secondary dark:bg-dark-secondary",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "flex flex-col space-y-3 text-black dark:text-white",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex flex-row items-center space-x-2 mt-4",
                                        children: [
                                          (0, a.jsx)(b.Z, {}),
                                          (0, a.jsx)("h3", {
                                            className: "text-xl font-medium",
                                            children: "Related",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "flex flex-col space-y-3",
                                        children: t.suggestions.map((e, t) =>
                                          (0, a.jsxs)(
                                            "div",
                                            {
                                              className:
                                                "flex flex-col space-y-3 text-sm",
                                              children: [
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "h-px w-full bg-light-secondary dark:bg-dark-secondary",
                                                }),
                                                (0, a.jsxs)("div", {
                                                  onClick: () => {
                                                    x(e);
                                                  },
                                                  className:
                                                    "cursor-pointer flex flex-row justify-between font-medium space-x-2 items-center",
                                                  children: [
                                                    (0, a.jsx)("p", {
                                                      className:
                                                        "transition duration-200 hover:text-[#24A0ED]",
                                                      children: e,
                                                    }),
                                                    (0, a.jsx)(v.Z, {
                                                      size: 20,
                                                      className:
                                                        "text-[#24A0ED] flex-shrink-0",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            t
                                          )
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "lg:sticky lg:top-20 flex flex-col items-center space-y-3 w-full lg:w-3/12 z-30 h-full pb-4",
                      children: [
                        (0, a.jsx)(A, {
                          query: r[s - 1].content,
                          chat_history: r.slice(0, s - 1),
                        }),
                        (0, a.jsx)(_, {
                          chat_history: r.slice(0, s - 1),
                          query: r[s - 1].content,
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        },
        O = () =>
          (0, a.jsxs)("div", {
            className:
              "flex flex-col space-y-2 w-full lg:w-9/12 bg-light-primary dark:bg-dark-primary animate-pulse rounded-lg py-3",
            children: [
              (0, a.jsx)("div", {
                className:
                  "h-2 rounded-full w-full bg-light-secondary dark:bg-dark-secondary",
              }),
              (0, a.jsx)("div", {
                className:
                  "h-2 rounded-full w-9/12 bg-light-secondary dark:bg-dark-secondary",
              }),
              (0, a.jsx)("div", {
                className:
                  "h-2 rounded-full w-10/12 bg-light-secondary dark:bg-dark-secondary",
              }),
            ],
          }),
        T = (e) => {
          let {
              loading: t,
              messages: s,
              sendMessage: r,
              messageAppeared: i,
              rewrite: n,
            } = e,
            [d, o] = (0, l.useState)(0),
            c = (0, l.useRef)(null),
            x = (0, l.useRef)(null);
          return (
            (0, l.useEffect)(() => {
              let e = () => {
                c.current && o(c.current.scrollWidth);
              };
              return (
                e(),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("resize", e);
                }
              );
            }),
            (0, l.useEffect)(() => {
              var e;
              null === (e = x.current) ||
                void 0 === e ||
                e.scrollIntoView({ behavior: "smooth" }),
                1 === s.length &&
                  (document.title = "".concat(
                    s[0].content.substring(0, 30),
                    " - Lender Network"
                  ));
            }, [s]),
            (0, a.jsxs)("div", {
              className:
                "flex flex-col space-y-6 pt-8 pb-44 lg:pb-32 sm:mx-4 md:mx-8",
              children: [
                s.map((e, i) => {
                  let d = i === s.length - 1;
                  return (0, a.jsxs)(
                    l.Fragment,
                    {
                      children: [
                        (0, a.jsx)(
                          D,
                          {
                            message: e,
                            messageIndex: i,
                            history: s,
                            loading: t,
                            dividerRef: d ? c : void 0,
                            isLast: d,
                            rewrite: n,
                            sendMessage: r,
                          },
                          i
                        ),
                        !d &&
                          "assistant" === e.role &&
                          (0, a.jsx)("div", {
                            className:
                              "h-px w-full bg-light-secondary dark:bg-dark-secondary",
                          }),
                      ],
                    },
                    e.messageId
                  );
                }),
                t && !i && (0, a.jsx)(O, {}),
                (0, a.jsx)("div", { ref: x, className: "h-0" }),
                d > 0 &&
                  (0, a.jsx)("div", {
                    className: "bottom-24 lg:bottom-10 fixed z-40",
                    style: { width: d },
                    children: (0, a.jsx)(m, { loading: t, sendMessage: r }),
                  }),
              ],
            })
          );
        },
        L = s(8025),
        B = s(7451),
        R = s(6827),
        U = s(7731),
        q = s(2853),
        J = s(3441),
        G = s(3113),
        V = s(923),
        H = s(3298),
        K = s(1109);
      let W = [
        {
          key: "webSearch",
          title: "All",
          description: "Searches across all of the internet",
          icon: (0, a.jsx)(B.Z, { size: 20 }),
        },
        {
          key: "academicSearch",
          title: "Academic",
          description: "Search in published academic papers",
          icon: (0, a.jsx)(R.Z, { size: 20 }),
        },
        {
          key: "writingAssistant",
          title: "Writing",
          description: "Chat without searching the web",
          icon: (0, a.jsx)(U.Z, { size: 16 }),
        },
        {
          key: "wolframAlphaSearch",
          title: "Wolfram Alpha",
          description: "Computational knowledge engine",
          icon: (0, a.jsx)(q.Z, { size: 20 }),
        },
        {
          key: "youtubeSearch",
          title: "Youtube",
          description: "Search and watch videos",
          icon: (0, a.jsx)(H.Z, {
            className: "h-5 w-auto mr-0.5",
            onPointerEnterCapture: void 0,
            onPointerLeaveCapture: void 0,
          }),
        },
        {
          key: "redditSearch",
          title: "Reddit",
          description: "Search for discussions and opinions",
          icon: (0, a.jsx)(K.Z, {
            className: "h-5 w-auto mr-0.5",
            onPointerEnterCapture: void 0,
            onPointerLeaveCapture: void 0,
          }),
        },
      ];
      var X = (e) => {
          var t, s;
          let { focusMode: r, setFocusMode: i } = e;
          return (0, a.jsxs)(V.J2, {
            className: "relative w-full max-w-[15rem] md:max-w-md lg:max-w-lg",
            children: [
              (0, a.jsx)(V.O7, {
                type: "button",
                className:
                  " text-black/50 dark:text-white/50 rounded-xl hover:bg-light-secondary dark:hover:bg-dark-secondary active:scale-95 transition duration-200 hover:text-black dark:hover:text-white",
                children:
                  "webSearch" !== r
                    ? (0, a.jsxs)("div", {
                        className: "flex flex-row items-center space-x-1",
                        children: [
                          null === (t = W.find((e) => e.key === r)) ||
                          void 0 === t
                            ? void 0
                            : t.icon,
                          (0, a.jsx)("p", {
                            className: "text-xs font-medium",
                            children:
                              null === (s = W.find((e) => e.key === r)) ||
                              void 0 === s
                                ? void 0
                                : s.title,
                          }),
                          (0, a.jsx)(J.Z, { size: 20 }),
                        ],
                      })
                    : (0, a.jsx)(G.Z, {}),
              }),
              (0, a.jsx)(M.u, {
                as: l.Fragment,
                enter: "transition ease-out duration-150",
                enterFrom: "opacity-0 translate-y-1",
                enterTo: "opacity-100 translate-y-0",
                leave: "transition ease-in duration-150",
                leaveFrom: "opacity-100 translate-y-0",
                leaveTo: "opacity-0 translate-y-1",
                children: (0, a.jsx)(V.Hi, {
                  className: "absolute z-10 w-64 md:w-[500px] left-0",
                  children: (0, a.jsx)("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-light-primary dark:bg-dark-primary border rounded-lg border-light-200 dark:border-dark-200 w-full p-4 max-h-[200px] md:max-h-none overflow-y-auto",
                    children: W.map((e, t) =>
                      (0, a.jsxs)(
                        V.O7,
                        {
                          onClick: () => i(e.key),
                          className: (0, n.cn)(
                            "p-2 rounded-lg flex flex-col items-start justify-start text-start space-y-2 duration-200 cursor-pointer transition",
                            r === e.key
                              ? "bg-light-secondary dark:bg-dark-secondary"
                              : "hover:bg-light-secondary dark:hover:bg-dark-secondary"
                          ),
                          children: [
                            (0, a.jsxs)("div", {
                              className: (0, n.cn)(
                                "flex flex-row items-center space-x-1",
                                r === e.key
                                  ? "text-[#24A0ED]"
                                  : "text-black dark:text-white"
                              ),
                              children: [
                                e.icon,
                                (0, a.jsx)("p", {
                                  className: "text-sm font-medium",
                                  children: e.title,
                                }),
                              ],
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-black/70 dark:text-white/70 text-xs",
                              children: e.description,
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                }),
              }),
            ],
          });
        },
        $ = s(7404),
        Q = s(5829),
        Y = s(5879);
      let ee = [
        {
          key: "speed",
          title: "Speed",
          description: "Prioritize speed and get the quickest possible answer.",
          icon: (0, a.jsx)($.Z, { size: 20, className: "text-[#FF9800]" }),
        },
        {
          key: "balanced",
          title: "Balanced",
          description: "Find the right balance between speed and accuracy",
          icon: (0, a.jsx)(Q.Z, { size: 20, className: "text-[#4CAF50]" }),
        },
        {
          key: "quality",
          title: "Quality (Soon)",
          description: "Get the most thorough and accurate answer",
          icon: (0, a.jsx)(Y.Z, {
            size: 16,
            className:
              "text-[#2196F3] dark:text-[#BBDEFB] fill-[#BBDEFB] dark:fill-[#2196F3]",
          }),
        },
      ];
      var et = (e) => {
          var t, s;
          let { optimizationMode: r, setOptimizationMode: i } = e;
          return (0, a.jsxs)(V.J2, {
            className: "relative w-full max-w-[15rem] md:max-w-md lg:max-w-lg",
            children: [
              (0, a.jsx)(V.O7, {
                type: "button",
                className:
                  "p-2 text-black/50 dark:text-white/50 rounded-xl hover:bg-light-secondary dark:hover:bg-dark-secondary active:scale-95 transition duration-200 hover:text-black dark:hover:text-white",
                children: (0, a.jsxs)("div", {
                  className: "flex flex-row items-center space-x-1",
                  children: [
                    null === (t = ee.find((e) => e.key === r)) || void 0 === t
                      ? void 0
                      : t.icon,
                    (0, a.jsx)("p", {
                      className: "text-xs font-medium",
                      children:
                        null === (s = ee.find((e) => e.key === r)) ||
                        void 0 === s
                          ? void 0
                          : s.title,
                    }),
                    (0, a.jsx)(J.Z, { size: 20 }),
                  ],
                }),
              }),
              (0, a.jsx)(M.u, {
                as: l.Fragment,
                enter: "transition ease-out duration-150",
                enterFrom: "opacity-0 translate-y-1",
                enterTo: "opacity-100 translate-y-0",
                leave: "transition ease-in duration-150",
                leaveFrom: "opacity-100 translate-y-0",
                leaveTo: "opacity-0 translate-y-1",
                children: (0, a.jsx)(V.Hi, {
                  className: "absolute z-10 w-64 md:w-[250px] right-0",
                  children: (0, a.jsx)("div", {
                    className:
                      "flex flex-col gap-2 bg-light-primary dark:bg-dark-primary border rounded-lg border-light-200 dark:border-dark-200 w-full p-4 max-h-[200px] md:max-h-none overflow-y-auto",
                    children: ee.map((e, t) =>
                      (0, a.jsxs)(
                        V.O7,
                        {
                          onClick: () => i(e.key),
                          disabled: "quality" === e.key,
                          className: (0, n.cn)(
                            "p-2 rounded-lg flex flex-col items-start justify-start text-start space-y-1 duration-200 cursor-pointer transition",
                            r === e.key
                              ? "bg-light-secondary dark:bg-dark-secondary"
                              : "hover:bg-light-secondary dark:hover:bg-dark-secondary",
                            "quality" === e.key &&
                              "opacity-50 cursor-not-allowed"
                          ),
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "flex flex-row items-center space-x-1 text-black dark:text-white",
                              children: [
                                e.icon,
                                (0, a.jsx)("p", {
                                  className: "text-sm font-medium",
                                  children: e.title,
                                }),
                              ],
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-black/70 dark:text-white/70 text-xs",
                              children: e.description,
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                }),
              }),
            ],
          });
        },
        es = (e) => {
          let {
              sendMessage: t,
              focusMode: s,
              setFocusMode: r,
              optimizationMode: i,
              setOptimizationMode: n,
            } = e,
            [d, o] = (0, l.useState)(!1),
            [x, h] = (0, l.useState)(""),
            m = (0, l.useRef)(null);
          return (
            (0, l.useEffect)(() => {
              let e = (e) => {
                let t = document.activeElement,
                  s =
                    (null == t ? void 0 : t.tagName) === "INPUT" ||
                    (null == t ? void 0 : t.tagName) === "TEXTAREA" ||
                    (null == t ? void 0 : t.hasAttribute("contenteditable"));
                if ("/" === e.key && !s) {
                  var a;
                  e.preventDefault(),
                    null === (a = m.current) || void 0 === a || a.focus();
                }
              };
              return (
                document.addEventListener("keydown", e),
                () => {
                  document.removeEventListener("keydown", e);
                }
              );
            }, []),
            (0, a.jsx)("form", {
              onSubmit: (e) => {
                e.preventDefault(), t(x), h("");
              },
              onKeyDown: (e) => {
                "Enter" !== e.key ||
                  e.shiftKey ||
                  (e.preventDefault(), t(x), h(""));
              },
              className: "w-full",
              children: (0, a.jsxs)("div", {
                className:
                  "flex flex-col bg-light-secondary dark:bg-dark-secondary px-5 pt-5 pb-2 rounded-lg w-full border border-light-200 dark:border-dark-200",
                children: [
                  (0, a.jsx)(c.Z, {
                    ref: m,
                    value: x,
                    onChange: (e) => h(e.target.value),
                    minRows: 2,
                    className:
                      "bg-transparent placeholder:text-black/50 dark:placeholder:text-white/50 text-sm text-black dark:text-white resize-none focus:outline-none w-full max-h-24 lg:max-h-36 xl:max-h-48",
                    placeholder: "Ask anything...",
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-row items-center justify-between mt-4",
                    children: [
                      (0, a.jsx)("div", {
                        className: "flex flex-row items-center space-x-4",
                        children: (0, a.jsx)(X, {
                          focusMode: s,
                          setFocusMode: r,
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex flex-row items-center space-x-1 sm:space-x-4",
                        children: [
                          (0, a.jsx)(et, {
                            optimizationMode: i,
                            setOptimizationMode: n,
                          }),
                          (0, a.jsx)("button", {
                            disabled: 0 === x.trim().length,
                            className:
                              "bg-[#24A0ED] text-white disabled:text-black/50 dark:disabled:text-white/50 disabled:bg-[#e0e0dc] dark:disabled:bg-[#ececec21] hover:bg-opacity-85 transition duration-100 rounded-full p-2",
                            children: (0, a.jsx)(L.Z, {
                              className: "bg-background",
                              size: 17,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        ea = s(1196);
      s(197);
      var el = () =>
          (0, a.jsxs)("div", {
            className:
              "flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "p-2 bg-light-secondary dark:bg-dark-secondary rounded-md shadow-md w-60 text-black dark:text-white border border-light-200 dark:border-dark-200",
                children: [
                  (0, a.jsx)("h2", {
                    className: "text-sm font-semibold mb-1",
                    children: "Fear & Greed Index",
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, a.jsx)("span", {
                        className: "text-xl font-bold text-green-400",
                        children: "79",
                      }),
                      (0, a.jsx)("span", {
                        className: "text-xs text-gray-500",
                        children: "/100",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "relative mt-1 h-2 w-full bg-gray-200 rounded-full",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "absolute h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full",
                        style: { width: "100%" },
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "w-3 h-3 bg-black dark:bg-white rounded-full absolute transform -translate-x-1/2 -top-1",
                        style: { left: "79%" },
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "mt-1 grid grid-cols-4 text-xs text-gray-500",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "text-center",
                        children: [
                          (0, a.jsx)("span", {
                            className:
                              "block font-bold text-black dark:text-white",
                            children: "74",
                          }),
                          (0, a.jsx)("span", { children: "24h" }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "text-center",
                        children: [
                          (0, a.jsx)("span", {
                            className:
                              "block font-bold text-black dark:text-white",
                            children: "53",
                          }),
                          (0, a.jsx)("span", { children: "7d" }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "text-center",
                        children: [
                          (0, a.jsx)("span", {
                            className:
                              "block font-bold text-black dark:text-white",
                            children: "37",
                          }),
                          (0, a.jsx)("span", { children: "1m" }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "text-center",
                        children: [
                          (0, a.jsx)("span", {
                            className:
                              "block font-bold text-black dark:text-white",
                            children: "36",
                          }),
                          (0, a.jsx)("span", { children: "3m" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(
                (e) => {
                  let { price: t, dominance: s, chartData: l } = e;
                  return (0, a.jsxs)("div", {
                    className:
                      "p-2 bg-light-secondary dark:bg-dark-secondary rounded-md shadow-md w-60 text-black dark:text-white border border-light-200 dark:border-dark-200",
                    children: [
                      (0, a.jsxs)("h2", {
                        className: "text-sm font-semibold mb-1",
                        children: ["BTC Price $", t],
                      }),
                      (0, a.jsx)("div", {
                        className: "relative flex",
                        style: { maxHeight: "90px" },
                        children: (0, a.jsx)(ea.x1, {
                          data: l,
                          options: {
                            responsive: !0,
                            maintainAspectRatio: !1,
                            plugins: {
                              legend: { display: !1 },
                              tooltip: { enabled: !0 },
                            },
                            scales: {
                              x: { display: !0, title: { display: !1 } },
                              y: {
                                display: !0,
                                position: "right",
                                title: { display: !1 },
                              },
                            },
                            elements: {
                              line: { tension: 0.3 },
                              point: { radius: 2 },
                            },
                          },
                        }),
                      }),
                    ],
                  });
                },
                {
                  price: "88,658",
                  dominance: "55.35",
                  chartData: {
                    labels: ["20:02", "02:05", "07:11", "11:51", "16:45"],
                    datasets: [
                      {
                        data: [76e3, 77e3, 78e3, 8e4, 82e3],
                        borderColor: "#a855f7",
                        backgroundColor: "rgba(168, 85, 247, 0.2)",
                        fill: !0,
                      },
                    ],
                  },
                }
              ),
              (0, a.jsx)(
                (e) => {
                  let { indexScore: t } = e;
                  return (0, a.jsxs)("div", {
                    className:
                      "p-3 bg-light-secondary dark:bg-dark-secondary rounded-md shadow-md w-60 text-black dark:text-white border border-light-200 dark:border-dark-200",
                    children: [
                      (0, a.jsx)("h2", {
                        className: "text-sm font-semibold mb-1",
                        children: "Altcoin Season Index",
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-baseline",
                        children: [
                          (0, a.jsx)("span", {
                            className: "text-2xl font-bold",
                            children: t,
                          }),
                          (0, a.jsx)("span", {
                            className: "text-xs text-gray-500 ml-1",
                            children: "/100",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "mt-2 flex justify-between text-xs text-gray-500",
                        children: [
                          (0, a.jsx)("span", { children: "Bitcoin Season" }),
                          (0, a.jsx)("span", { children: "Altcoin Season" }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "relative mt-1 h-2 bg-gray-200 rounded-full",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "absolute h-2 rounded-full bg-gradient-to-r from-orange-500 via-indigo-200 to-blue-500 w-full",
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "w-4 h-4 bg-black dark:bg-white rounded-full absolute transform -translate-x-1/2 -top-1",
                            style: { left: "".concat(t, "%") },
                          }),
                        ],
                      }),
                    ],
                  });
                },
                { indexScore: 38 }
              ),
            ],
          }),
        er = (e) => {
          let {
            sendMessage: t,
            focusMode: s,
            setFocusMode: l,
            optimizationMode: r,
            setOptimizationMode: i,
          } = e;
          return (0, a.jsx)("div", {
            className: "relative",
            children: (0, a.jsxs)("div", {
              className:
                "flex flex-col items-center justify-center min-h-screen max-w-screen-sm mx-auto p-2 space-y-8",
              children: [
                (0, a.jsx)("h2", {
                  className:
                    "text-black/70 dark:text-white/70 text-3xl font-medium -mt-8",
                  children: "Experience the speed of Lender AI",
                }),
                (0, a.jsx)(es, {
                  sendMessage: t,
                  focusMode: s,
                  setFocusMode: l,
                  optimizationMode: r,
                  setOptimizationMode: i,
                }),
                (0, a.jsx)(el, {}),
              ],
            }),
          });
        },
        ei = s(7815),
        en = s.n(ei),
        ed = s(6288),
        eo = s(7907);
      let ec = async (e) => {
        let t = localStorage.getItem("chatModel"),
          s = localStorage.getItem("chatModelProvider"),
          a = await fetch(
            "".concat("https://chat.lendernetwork.io/api", "/suggestions"),
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                chat_history: e,
                chat_model: t,
                chat_model_provider: s,
              }),
            }
          );
        return (await a.json()).suggestions;
      };
      var ex = s(2283),
        eh = s.n(ex),
        em = s(703);
      let eu = (e, t, s) => {
          let [a, r] = (0, l.useState)(null);
          return (
            (0, l.useEffect)(() => {
              a ||
                (async () => {
                  let a = localStorage.getItem("chatModel"),
                    l = localStorage.getItem("chatModelProvider"),
                    i = localStorage.getItem("embeddingModel"),
                    n = localStorage.getItem("embeddingModelProvider"),
                    d = await fetch(
                      "".concat("https://chat.lendernetwork.io/api", "/models"),
                      { headers: { "Content-Type": "application/json" } }
                    ).then(async (e) => await e.json());
                  if (a && l && i && n) {
                    let e = d.chatModelProviders,
                      t = d.embeddingModelProviders;
                    Object.keys(e).length > 0 &&
                      !e[l] &&
                      ((l = Object.keys(e)[0]),
                      localStorage.setItem("chatModelProvider", l)),
                      l &&
                        "custom_openai" != l &&
                        !e[l][a] &&
                        ((a = Object.keys(e[l])[0]),
                        localStorage.setItem("chatModel", a)),
                      Object.keys(t).length > 0 &&
                        !t[n] &&
                        ((n = Object.keys(t)[0]),
                        localStorage.setItem("embeddingModelProvider", n)),
                      n &&
                        !t[n][i] &&
                        ((i = Object.keys(t[n])[0]),
                        localStorage.setItem("embeddingModel", i));
                  } else {
                    if (!a || !l) {
                      let e = d.chatModelProviders;
                      if ("custom_openai" === (l = Object.keys(e)[0])) {
                        ed.toast.error(
                          "Seems like you are using the custom OpenAI provider, please open the settings and configure the API key and base URL"
                        ),
                          s(!0);
                        return;
                      }
                      if (
                        ((a = Object.keys(e[l])[0]),
                        !e || 0 === Object.keys(e).length)
                      )
                        return ed.toast.error("No chat models available");
                    }
                    if (!i || !n) {
                      let e = d.embeddingModelProviders;
                      if (!e || 0 === Object.keys(e).length)
                        return ed.toast.error("No embedding models available");
                      (n = Object.keys(e)[0]), (i = Object.keys(e[n])[0]);
                    }
                    localStorage.setItem("chatModel", a),
                      localStorage.setItem("chatModelProvider", l),
                      localStorage.setItem("embeddingModel", i),
                      localStorage.setItem("embeddingModelProvider", n);
                  }
                  let o = new URL(e),
                    c = new URLSearchParams({});
                  c.append("chatModel", a),
                    c.append("chatModelProvider", l),
                    "custom_openai" === l &&
                      (c.append(
                        "openAIApiKey",
                        localStorage.getItem("openAIApiKey")
                      ),
                      c.append(
                        "openAIBaseURL",
                        localStorage.getItem("openAIBaseURL")
                      )),
                    c.append("embeddingModel", i),
                    c.append("embeddingModelProvider", n),
                    (o.search = c.toString());
                  let x = new WebSocket(o.toString()),
                    h = setTimeout(() => {
                      1 !== x.readyState &&
                        ed.toast.error(
                          "Failed to connect to the server. Please try again later."
                        );
                    }, 1e4);
                  x.addEventListener("message", (e) => {
                    let s = JSON.parse(e.data);
                    if ("signal" === s.type && "open" === s.data) {
                      let e = setInterval(() => {
                        1 === x.readyState && (t(!0), clearInterval(e));
                      }, 5);
                      clearTimeout(h), console.log("[DEBUG] opened");
                    }
                    "error" === s.type && ed.toast.error(s.data);
                  }),
                    (x.onerror = () => {
                      clearTimeout(h),
                        s(!0),
                        ed.toast.error("WebSocket connection error.");
                    }),
                    (x.onclose = () => {
                      clearTimeout(h), s(!0), console.log("[DEBUG] closed");
                    }),
                    r(x);
                })();
            }, [a, e, t, s]),
            a
          );
        },
        eg = async (e, t, s, a, l, r) => {
          let i = await fetch(
            "".concat("https://chat.lendernetwork.io/api", "/chats/").concat(e),
            { method: "GET", headers: { "Content-Type": "application/json" } }
          );
          if (404 === i.status) {
            r(!0), s(!0);
            return;
          }
          let n = await i.json(),
            d = n.messages.map((e) => ({ ...e, ...JSON.parse(e.metadata) }));
          t(d);
          let o = d.map((e) => [e.role, e.content]);
          console.log("[DEBUG] messages loaded"),
            (document.title = d[0].content),
            a(o),
            l(n.chat.focusMode),
            s(!0);
        };
      var ep = (e) => {
        let { id: t } = e,
          s = (0, eo.useSearchParams)().get("q"),
          [r, i] = (0, l.useState)(t),
          [n, o] = (0, l.useState)(!1),
          [c, x] = (0, l.useState)(!1),
          [h, m] = (0, l.useState)(!1),
          [u, g] = (0, l.useState)(!1),
          p = eu("wss://chat.lendernetwork.io/ws", g, x),
          [f, b] = (0, l.useState)(!1),
          [v, k] = (0, l.useState)(!1),
          [w, j] = (0, l.useState)([]),
          [y, N] = (0, l.useState)([]),
          [S, M] = (0, l.useState)("webSearch"),
          [C, I] = (0, l.useState)("speed"),
          [E, z] = (0, l.useState)(!1),
          [A, P] = (0, l.useState)(!1);
        (0, l.useEffect)(() => {
          !r || n || E || 0 !== y.length
            ? r || (o(!0), z(!0), i(en().randomBytes(20).toString("hex")))
            : eg(r, N, z, j, M, P);
        }, []),
          (0, l.useEffect)(
            () => () => {
              (null == p ? void 0 : p.readyState) === 1 &&
                (p.close(), console.log("[DEBUG] closed"));
            },
            []
          );
        let Z = (0, l.useRef)([]);
        (0, l.useEffect)(() => {
          Z.current = y;
        }, [y]),
          (0, l.useEffect)(() => {
            E && u && (m(!0), console.log("[DEBUG] ready"));
          }, [E, u]);
        let _ = async (e, t) => {
          let s;
          if (f) return;
          b(!0), k(!1);
          let a = "",
            l = !1;
          (t = null != t ? t : en().randomBytes(7).toString("hex")),
            null == p ||
              p.send(
                JSON.stringify({
                  type: "message",
                  message: { messageId: t, chatId: r, content: e },
                  focusMode: S,
                  optimizationMode: C,
                  history: [...w, ["human", e]],
                })
              ),
            N((s) => [
              ...s,
              {
                content: e,
                messageId: t,
                chatId: r,
                role: "user",
                createdAt: new Date(),
              },
            ]);
          let i = async (t) => {
            let n = JSON.parse(t.data);
            if ("error" === n.type) {
              ed.toast.error(n.data), b(!1);
              return;
            }
            if (
              ("sources" === n.type &&
                ((s = n.data),
                l ||
                  (N((e) => [
                    ...e,
                    {
                      content: "",
                      messageId: n.messageId,
                      chatId: r,
                      role: "assistant",
                      sources: s,
                      createdAt: new Date(),
                    },
                  ]),
                  (l = !0)),
                k(!0)),
              "message" === n.type &&
                (l ||
                  (N((e) => [
                    ...e,
                    {
                      content: n.data,
                      messageId: n.messageId,
                      chatId: r,
                      role: "assistant",
                      sources: s,
                      createdAt: new Date(),
                    },
                  ]),
                  (l = !0)),
                N((e) =>
                  e.map((e) =>
                    e.messageId === n.messageId
                      ? { ...e, content: e.content + n.data }
                      : e
                  )
                ),
                (a += n.data),
                k(!0)),
              "messageEnd" === n.type)
            ) {
              j((t) => [...t, ["human", e], ["assistant", a]]),
                null == p || p.removeEventListener("message", i),
                b(!1);
              let t = Z.current[Z.current.length - 1];
              if (
                "assistant" === t.role &&
                t.sources &&
                t.sources.length > 0 &&
                !t.suggestions
              ) {
                let e = await ec(Z.current);
                N((s) =>
                  s.map((s) =>
                    s.messageId === t.messageId ? { ...s, suggestions: e } : s
                  )
                );
              }
            }
          };
          null == p || p.addEventListener("message", i);
        };
        return ((0, l.useEffect)(() => {
          h && s && (null == p ? void 0 : p.readyState) === 1 && _(s);
        }, [null == p ? void 0 : p.readyState, h, s, u]),
        c)
          ? (0, a.jsx)("div", {
              className:
                "flex flex-col items-center justify-center min-h-screen",
              children: (0, a.jsx)("p", {
                className: "dark:text-white/70 text-black/70 text-sm",
                children:
                  "Failed to connect to the server. Please try again later.",
              }),
            })
          : h
          ? A
            ? (0, a.jsx)(eh(), { statusCode: 404 })
            : (0, a.jsxs)("div", {
                className: "flex flex-col h-screen",
                children: [
                  y.length > 0
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(d, { messages: y }),
                          (0, a.jsx)("div", {
                            className: "flex-1 overflow-auto",
                            children: (0, a.jsx)(T, {
                              loading: f,
                              messages: y,
                              sendMessage: _,
                              messageAppeared: v,
                              rewrite: (e) => {
                                let t = y.findIndex((t) => t.messageId === e);
                                if (-1 === t) return;
                                let s = y[t - 1];
                                N((e) => [
                                  ...e.slice(0, y.length > 2 ? t - 1 : 0),
                                ]),
                                  j((e) => [
                                    ...e.slice(0, y.length > 2 ? t - 1 : 0),
                                  ]),
                                  _(s.content, s.messageId);
                              },
                            }),
                          }),
                        ],
                      })
                    : (0, a.jsxs)("div", {
                        className: "flex-1 overflow-auto",
                        children: [
                          (0, a.jsx)(er, {
                            sendMessage: _,
                            focusMode: S,
                            setFocusMode: M,
                            optimizationMode: C,
                            setOptimizationMode: I,
                          }),
                        ],
                      }),
                  (0, a.jsxs)("footer", {
                    className:
                      "py-4 text-center text-sm text-gray-500 dark:text-gray-400",
                    children: [
                      (0, a.jsx)("div", {
                        className: "flex flex-col items-center gap-3 mb-4",
                        children: (0, a.jsxs)("div", {
                          className:
                            "flex flex-col sm:flex-row items-center gap-2",
                          children: [
                            (0, a.jsxs)("span", {
                              className: "flex items-center gap-1.5",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "w-2 h-2 rounded-full bg-green-500",
                                }),
                                "LPU Power: Enabled",
                              ],
                            }),
                            (0, a.jsxs)("span", {
                              className: "flex items-center gap-1.5",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "w-2 h-2 rounded-full bg-blue-500",
                                }),
                                "LPU Speed: High",
                              ],
                            }),
                            (0, a.jsxs)("span", {
                              className: "flex items-center gap-1.5",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "w-2 h-2 rounded-full bg-purple-500",
                                }),
                                "Performance: Optimal",
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        children: "Powered by Lender Network",
                      }),
                    ],
                  }),
                ],
              })
          : (0, a.jsx)("div", {
              className:
                "flex flex-row items-center justify-center min-h-screen",
              children: (0, a.jsxs)("svg", {
                "aria-hidden": "true",
                className:
                  "w-8 h-8 text-light-200 fill-light-secondary dark:text-[#202020] animate-spin dark:fill-[#ffffff3b]",
                viewBox: "0 0 100 101",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, a.jsx)("path", {
                    d: "M100 50.5908C100.003 78.2051 78.1951 100.003 50.5908 100C22.9765 99.9972 0.997224 78.018 1 50.4037C1.00281 22.7993 22.8108 0.997224 50.4251 1C78.0395 1.00281 100.018 22.8108 100 50.4251ZM9.08164 50.594C9.06312 73.3997 27.7909 92.1272 50.5966 92.1457C73.4023 92.1642 92.1298 73.4365 92.1483 50.6308C92.1669 27.8251 73.4392 9.0973 50.6335 9.07878C27.8278 9.06026 9.10003 27.787 9.08164 50.594Z",
                    fill: "currentColor",
                  }),
                  (0, a.jsx)("path", {
                    d: "M93.9676 39.0409C96.393 38.4037 97.8624 35.9116 96.9801 33.5533C95.1945 28.8227 92.871 24.3692 90.0681 20.348C85.6237 14.1775 79.4473 9.36872 72.0454 6.45794C64.6435 3.54717 56.3134 2.65431 48.3133 3.89319C45.869 4.27179 44.3768 6.77534 45.014 9.20079C45.6512 11.6262 48.1343 13.0956 50.5786 12.717C56.5073 11.8281 62.5542 12.5399 68.0406 14.7911C73.527 17.0422 78.2187 20.7487 81.5841 25.4923C83.7976 28.5886 85.4467 32.059 86.4416 35.7474C87.1273 38.1189 89.5423 39.6781 91.9676 39.0409Z",
                    fill: "currentFill",
                  }),
                ],
              }),
            });
      };
    },
    1657: function (e, t, s) {
      "use strict";
      s.d(t, {
        cn: function () {
          return r;
        },
        t: function () {
          return i;
        },
      });
      var a = s(3167),
        l = s(1367);
      let r = function () {
          for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
            t[s] = arguments[s];
          return (0, l.m6)((0, a.Z)(...t));
        },
        i = (e, t) => {
          e = new Date(e);
          let s = Math.floor(
            Math.abs((t = new Date(t)).getTime() - e.getTime()) / 1e3
          );
          return s < 60
            ? "".concat(s, " second").concat(1 !== s ? "s" : "")
            : s < 3600
            ? ""
                .concat(Math.floor(s / 60), " minute")
                .concat(1 !== Math.floor(s / 60) ? "s" : "")
            : s < 86400
            ? ""
                .concat(Math.floor(s / 3600), " hour")
                .concat(1 !== Math.floor(s / 3600) ? "s" : "")
            : s < 31536e3
            ? ""
                .concat(Math.floor(s / 86400), " day")
                .concat(1 !== Math.floor(s / 86400) ? "s" : "")
            : ""
                .concat(Math.floor(s / 31536e3), " year")
                .concat(1 !== Math.floor(s / 31536e3) ? "s" : "");
        };
    },
  },
]);
