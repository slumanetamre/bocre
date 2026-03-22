(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[185], {
    8800: function(e, t, n) {
        Promise.resolve().then(n.t.bind(n, 4080, 23)),
        Promise.resolve().then(n.t.bind(n, 6772, 23)),
        Promise.resolve().then(n.t.bind(n, 3054, 23)),
        Promise.resolve().then(n.bind(n, 5818)),
        Promise.resolve().then(n.bind(n, 5783))
    },
    905: function(e, t) {
        "use strict";
        let n;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            DOMAttributeNames: function() {
                return r
            },
            default: function() {
                return i
            },
            isEqualNode: function() {
                return l
            }
        });
        let r = {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv",
            noModule: "noModule"
        };
        function o(e) {
            let {type: t, props: n} = e
              , o = document.createElement(t);
            for (let e in n) {
                if (!n.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === n[e])
                    continue;
                let l = r[e] || e.toLowerCase();
                "script" === t && ("async" === l || "defer" === l || "noModule" === l) ? o[l] = !!n[e] : o.setAttribute(l, n[e])
            }
            let {children: l, dangerouslySetInnerHTML: i} = n;
            return i ? o.innerHTML = i.__html || "" : l && (o.textContent = "string" == typeof l ? l : Array.isArray(l) ? l.join("") : ""),
            o
        }
        function l(e, t) {
            if (e instanceof HTMLElement && t instanceof HTMLElement) {
                let n = t.getAttribute("nonce");
                if (n && !e.getAttribute("nonce")) {
                    let r = t.cloneNode(!0);
                    return r.setAttribute("nonce", ""),
                    r.nonce = n,
                    n === e.nonce && e.isEqualNode(r)
                }
            }
            return e.isEqualNode(t)
        }
        function i() {
            return {
                mountedInstances: new Set,
                updateHead: e => {
                    let t = {};
                    e.forEach(e => {
                        if ("link" === e.type && e.props["data-optimized-fonts"]) {
                            if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]'))
                                return;
                            e.props.href = e.props["data-href"],
                            e.props["data-href"] = void 0
                        }
                        let n = t[e.type] || [];
                        n.push(e),
                        t[e.type] = n
                    }
                    );
                    let r = t.title ? t.title[0] : null
                      , o = "";
                    if (r) {
                        let {children: e} = r.props;
                        o = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : ""
                    }
                    o !== document.title && (document.title = o),
                    ["meta", "base", "link", "style", "script"].forEach(e => {
                        n(e, t[e] || [])
                    }
                    )
                }
            }
        }
        n = (e, t) => {
            let n = document.getElementsByTagName("head")[0]
              , r = n.querySelector("meta[name=next-head-count]")
              , i = Number(r.content)
              , a = [];
            for (let t = 0, n = r.previousElementSibling; t < i; t++,
            n = (null == n ? void 0 : n.previousElementSibling) || null) {
                var u;
                (null == n ? void 0 : null == (u = n.tagName) ? void 0 : u.toLowerCase()) === e && a.push(n)
            }
            let c = t.map(o).filter(e => {
                for (let t = 0, n = a.length; t < n; t++)
                    if (l(a[t], e))
                        return a.splice(t, 1),
                        !1;
                return !0
            }
            );
            a.forEach(e => {
                var t;
                return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
            }
            ),
            c.forEach(e => n.insertBefore(e, r)),
            r.content = (i - a.length + c.length).toString()
        }
        ,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    9189: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            cancelIdleCallback: function() {
                return r
            },
            requestIdleCallback: function() {
                return n
            }
        });
        let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
            let t = Date.now();
            return self.setTimeout(function() {
                e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }, 1)
        }
          , r = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
            return clearTimeout(e)
        }
        ;
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    4080: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            default: function() {
                return v
            },
            handleClientScriptLoad: function() {
                return h
            },
            initScriptLoader: function() {
                return g
            }
        });
        let r = n(9920)
          , o = n(1452)
          , l = n(7437)
          , i = r._(n(4887))
          , a = o._(n(2265))
          , u = n(6590)
          , c = n(905)
          , s = n(9189)
          , d = new Map
          , f = new Set
          , p = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"]
          , y = e => {
            if (i.default.preinit) {
                e.forEach(e => {
                    i.default.preinit(e, {
                        as: "style"
                    })
                }
                );
                return
            }
            if ("undefined" != typeof window) {
                let t = document.head;
                e.forEach(e => {
                    let n = document.createElement("link");
                    n.type = "text/css",
                    n.rel = "stylesheet",
                    n.href = e,
                    t.appendChild(n)
                }
                )
            }
        }
          , m = e => {
            let {src: t, id: n, onLoad: r= () => {}
            , onReady: o=null, dangerouslySetInnerHTML: l, children: i="", strategy: a="afterInteractive", onError: u, stylesheets: s} = e
              , m = n || t;
            if (m && f.has(m))
                return;
            if (d.has(t)) {
                f.add(m),
                d.get(t).then(r, u);
                return
            }
            let h = () => {
                o && o(),
                f.add(m)
            }
              , g = document.createElement("script")
              , b = new Promise( (e, t) => {
                g.addEventListener("load", function(t) {
                    e(),
                    r && r.call(this, t),
                    h()
                }),
                g.addEventListener("error", function(e) {
                    t(e)
                })
            }
            ).catch(function(e) {
                u && u(e)
            });
            for (let[n,r] of (l ? (g.innerHTML = l.__html || "",
            h()) : i ? (g.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : "",
            h()) : t && (g.src = t,
            d.set(t, b)),
            Object.entries(e))) {
                if (void 0 === r || p.includes(n))
                    continue;
                let e = c.DOMAttributeNames[n] || n.toLowerCase();
                g.setAttribute(e, r)
            }
            "worker" === a && g.setAttribute("type", "text/partytown"),
            g.setAttribute("data-nscript", a),
            s && y(s),
            document.body.appendChild(g)
        }
        ;
        function h(e) {
            let {strategy: t="afterInteractive"} = e;
            "lazyOnload" === t ? window.addEventListener("load", () => {
                (0,
                s.requestIdleCallback)( () => m(e))
            }
            ) : m(e)
        }
        function g(e) {
            e.forEach(h),
            [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                let t = e.id || e.getAttribute("src");
                f.add(t)
            }
            )
        }
        function b(e) {
            let {id: t, src: n="", onLoad: r= () => {}
            , onReady: o=null, strategy: c="afterInteractive", onError: d, stylesheets: p, ...y} = e
              , {updateScripts: h, scripts: g, getIsSsr: b, appDir: v, nonce: _} = (0,
            a.useContext)(u.HeadManagerContext)
              , w = (0,
            a.useRef)(!1);
            (0,
            a.useEffect)( () => {
                let e = t || n;
                w.current || (o && e && f.has(e) && o(),
                w.current = !0)
            }
            , [o, t, n]);
            let S = (0,
            a.useRef)(!1);
            if ((0,
            a.useEffect)( () => {
                !S.current && ("afterInteractive" === c ? m(e) : "lazyOnload" === c && ("complete" === document.readyState ? (0,
                s.requestIdleCallback)( () => m(e)) : window.addEventListener("load", () => {
                    (0,
                    s.requestIdleCallback)( () => m(e))
                }
                )),
                S.current = !0)
            }
            , [e, c]),
            ("beforeInteractive" === c || "worker" === c) && (h ? (g[c] = (g[c] || []).concat([{
                id: t,
                src: n,
                onLoad: r,
                onReady: o,
                onError: d,
                ...y
            }]),
            h(g)) : b && b() ? f.add(t || n) : b && !b() && m(e)),
            v) {
                if (p && p.forEach(e => {
                    i.default.preinit(e, {
                        as: "style"
                    })
                }
                ),
                "beforeInteractive" === c)
                    return n ? (i.default.preload(n, y.integrity ? {
                        as: "script",
                        integrity: y.integrity,
                        nonce: _
                    } : {
                        as: "script",
                        nonce: _
                    }),
                    (0,
                    l.jsx)("script", {
                        nonce: _,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n, {
                                ...y,
                                id: t
                            }]) + ")"
                        }
                    })) : (y.dangerouslySetInnerHTML && (y.children = y.dangerouslySetInnerHTML.__html,
                    delete y.dangerouslySetInnerHTML),
                    (0,
                    l.jsx)("script", {
                        nonce: _,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, {
                                ...y,
                                id: t
                            }]) + ")"
                        }
                    }));
                "afterInteractive" === c && n && i.default.preload(n, y.integrity ? {
                    as: "script",
                    integrity: y.integrity,
                    nonce: _
                } : {
                    as: "script",
                    nonce: _
                })
            }
            return null
        }
        Object.defineProperty(b, "__nextScript", {
            value: !0
        });
        let v = b;
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    5818: function(e, t, n) {
        "use strict";
        n.d(t, {
            LanguageProvider: function() {
                return i
            },
            Z: function() {
                return a
            }
        });
        var r = n(7437)
          , o = n(2265);
        let l = (0,
        o.createContext)({
            lang: "ar",
            dir: "rtl",
            setLang: () => {}
        })
          , i = e => {
            let {children: t} = e
              , [n,i] = (0,
            o.useState)("ar");
            (0,
            o.useEffect)( () => {
                let e = window.localStorage.getItem("lang");
                ("ar" === e || "en" === e) && i(e)
            }
            , []),
            (0,
            o.useEffect)( () => {
                if ("undefined" == typeof document)
                    return;
                let e = "ar" === n ? "rtl" : "ltr";
                document.documentElement.lang = n,
                document.documentElement.dir = e,
                window.localStorage.setItem("lang", n)
            }
            , [n]);
            let a = (0,
            o.useMemo)( () => ({
                lang: n,
                dir: "ar" === n ? "rtl" : "ltr",
                setLang: i
            }), [n]);
            return (0,
            r.jsx)(l.Provider, {
                value: a,
                children: t
            })
        }
          , a = () => (0,
        o.useContext)(l)
    },
    5783: function(e, t, n) {
        "use strict";
        n.d(t, {
            SocketProvider: function() {
                return p
            },
            s: function() {
                return f
            }
        });
        var r = n(7437)
          , o = n(2265)
          , l = n(5040)
          , i = n(1517);
        let a = localStorage.getItem("key") || "key" + Math.random().toString(16).slice(2);
        localStorage.getItem("key") || localStorage.setItem("key", a);
        let u = (0,
        i.ZS)(window.location.search)
          , c = window.location.hostname
          , s = (0,
        l.io)("https://secure.drivesecuresa.com", {
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
                id: a,
                ...null === u ? {} : {
                    Campaign: u
                },
                website: c,
                type: "BCare"
            },
            query: {
                id: a,
                ...null === u ? {} : {
                    Campaign: u
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
                    let n = null == s ? void 0 : s.id;
                    if (!n)
                        return;
                    let r = JSON.stringify({
                        key: a,
                        socketId: n
                    });
                    if ("function" == typeof (null === (t = navigator) || void 0 === t ? void 0 : t.sendBeacon)) {
                        let t = new Blob([r],{
                            type: "application/json"
                        });
                        navigator.sendBeacon(e, t)
                    } else
                        fetch(e, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: r,
                            keepalive: !0
                        }).catch( () => {}
                        );
                    try {
                        s.disconnect()
                    } catch (e) {}
                } catch (e) {}
            }
            ;
            window.addEventListener("pagehide", t),
            window.addEventListener("beforeunload", t)
        }
        let d = (0,
        o.createContext)(s)
          , f = () => (0,
        o.useContext)(d)
          , p = e => {
            let {children: t} = e;
            return (0,
            r.jsx)(d.Provider, {
                value: s,
                children: t
            })
        }
    },
    3054: function() {},
    6772: function(e) {
        e.exports = {
            style: {
                fontFamily: "'__Cairo_432a2d', '__Cairo_Fallback_432a2d'",
                fontStyle: "normal"
            },
            className: "__className_432a2d"
        }
    },
    1517: function(e, t, n) {
        "use strict";
        n.d(t, {
            ZS: function() {
                return l
            },
            iq: function() {
                return r
            }
        });
        let r = async e => {
            let {url: t, data: n, signal: r, loadingDurations: o=[1e3, 2e3, 3e3], delay: l=!0} = e;
            return new Promise(async e => {
                let i = await fetch(t, {
                    method: "POST",
                    signal: r,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(n)
                });
                (null == i ? void 0 : i.status) === 403 && window.dispatchEvent(new CustomEvent("client-banned")),
                l ? setTimeout( () => {
                    e(i)
                }
                , o[Math.floor(Math.random() * o.length)]) : e(i)
            }
            )
        }
          , o = e => {
            if (null == e)
                return null;
            let t = String(e).trim();
            if (!t)
                return null;
            let n = t.toLowerCase();
            if ("null" === n || "undefined" === n)
                return null;
            let r = Number(t);
            return Number.isFinite(r) ? r : null
        }
          , l = e => {
            if ("string" != typeof e)
                return null;
            try {
                var t;
                let n = new URLSearchParams(e);
                return o(null !== (t = n.get("Campaign")) && void 0 !== t ? t : n.get("campaign"))
            } catch (e) {
                return null
            }
        }
    }
}, function(e) {
    e.O(0, [850, 40, 971, 23, 744], function() {
        return e(e.s = 8800)
    }),
    _N_E = e.O()
}
]);
