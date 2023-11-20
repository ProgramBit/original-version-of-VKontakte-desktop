(()=>{
    "use strict";
    var e, t, r, a, o, n, i = {
        920414: (e,t,r)=>{
            var a, o, n, i = r(766698);
            (null == (o = window.vk) || null == (a = o.pe) ? void 0 : a.static_manager_dynamic_imports) && (null == (n = window.vk) ? void 0 : n.stDomain) && (r.p = window.vk.stDomain + "/dist/");
            const l = {
                initLeftMenu: i.initLeftMenu
            };
            window.SiteLayout = l;
            try {
                window.stManager.done(window.jsc("web/site_layout.js"))
            } catch (e) {}
        }
    }, l = {};
    function s(e) {
        var t = l[e];
        if (void 0 !== t)
            return t.exports;
        var r = l[e] = {
            exports: {}
        };
        return i[e].call(r.exports, r, r.exports, s),
        r.exports
    }
    s.m = i,
    s.amdO = {},
    e = [],
    s.O = (t,r,a,o)=>{
        if (!r) {
            var n = 1 / 0;
            for (f = 0; f < e.length; f++) {
                for (var [r,a,o] = e[f], i = !0, l = 0; l < r.length; l++)
                    (!1 & o || n >= o) && Object.keys(s.O).every((e=>s.O[e](r[l]))) ? r.splice(l--, 1) : (i = !1,
                    o < n && (n = o));
                if (i) {
                    e.splice(f--, 1);
                    var d = a();
                    void 0 !== d && (t = d)
                }
            }
            return t
        }
        o = o || 0;
        for (var f = e.length; f > 0 && e[f - 1][2] > o; f--)
            e[f] = e[f - 1];
        e[f] = [r, a, o]
    }
    ,
    s.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return s.d(t, {
            a: t
        }),
        t
    }
    ,
    r = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__,
    s.t = function(e, a) {
        if (1 & a && (e = this(e)),
        8 & a)
            return e;
        if ("object" == typeof e && e) {
            if (4 & a && e.__esModule)
                return e;
            if (16 & a && "function" == typeof e.then)
                return e
        }
        var o = Object.create(null);
        s.r(o);
        var n = {};
        t = t || [null, r({}), r([]), r(r)];
        for (var i = 2 & a && e; "object" == typeof i && !~t.indexOf(i); i = r(i))
            Object.getOwnPropertyNames(i).forEach((t=>n[t] = ()=>e[t]));
        return n.default = ()=>e,
        s.d(o, n),
        o
    }
    ,
    s.d = (e,t)=>{
        for (var r in t)
            s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    s.f = {},
    s.e = e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e, t),
    t)), [])),
    s.u = e=>25394 === e ? "AudioLongtapModal.98b6df61d646414354a3.js" : 24817 === e ? "hls.7bfefe299fa92971b99a.js" : 75980 === e ? "menu_settings.b73d1f0a03f70163e02d.js" : 96816 === e ? "web-audio-lyrics-modal.5b786d2492e85e4a335f.js" : 9375 === e ? "voice_message_player.f0c31b4a3dc08de145c9.js" : 28762 === e ? "speech.be0c329a1eff7c81577d.js" : 57468 === e ? "SilentModeForms.6cf18c53f58f775934b3.js" : 28872 === e ? "feed-client-nav-skeleton.93951c516f1e3f2a55ad.js" : 35953 === e ? "feed-client-nav-async-right-block.98e503ddcd7a638e1b63.js" : 38288 === e ? "lottie.5e4758c39f106eab733a.js" : void 0,
    s.miniCssF = e=>e + "." + {
        25394: "6af57e1b0cf5a74f9a87",
        57468: "35be3dfa1e90e3cdd0a1",
        75980: "5bbee2c9f3e189193a73"
    }[e] + ".css",
    s.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    s.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    a = {},
    s.l = (e,t,r,o)=>{
        if (a[e])
            a[e].push(t);
        else {
            var n, i;
            if (void 0 !== r)
                for (var l = document.getElementsByTagName("script"), d = 0; d < l.length; d++) {
                    var f = l[d];
                    if (f.getAttribute("src") == e || f.getAttribute("data-webpack") == "vk:" + r) {
                        n = f;
                        break
                    }
                }
            n || (i = !0,
            (n = document.createElement("script")).charset = "utf-8",
            n.timeout = 120,
            s.nc && n.setAttribute("nonce", s.nc),
            n.setAttribute("data-webpack", "vk:" + r),
            n.src = e),
            a[e] = [t];
            var u = (t,r)=>{
                n.onerror = n.onload = null,
                clearTimeout(c);
                var o = a[e];
                if (delete a[e],
                n.parentNode && n.parentNode.removeChild(n),
                o && o.forEach((e=>e(r))),
                t)
                    return t(r)
            }
              , c = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: n
            }), 12e4);
            n.onerror = u.bind(null, n.onerror),
            n.onload = u.bind(null, n.onload),
            i && document.head.appendChild(n)
        }
    }
    ,
    s.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.p = "/dist/",
    o = e=>new Promise(((t,r)=>{
        var a = s.miniCssF(e)
          , o = s.p + a;
        if (((e,t)=>{
            for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                var o = (i = r[a]).getAttribute("data-href") || i.getAttribute("href");
                if ("stylesheet" === i.rel && (o === e || o === t))
                    return i
            }
            var n = document.getElementsByTagName("style");
            for (a = 0; a < n.length; a++) {
                var i;
                if ((o = (i = n[a]).getAttribute("data-href")) === e || o === t)
                    return i
            }
        }
        )(a, o))
            return t();
        ((e,t,r,a)=>{
            var o = document.createElement("link");
            o.rel = "stylesheet",
            o.type = "text/css",
            o.onerror = o.onload = n=>{
                if (o.onerror = o.onload = null,
                "load" === n.type)
                    r();
                else {
                    var i = n && ("load" === n.type ? "missing" : n.type)
                      , l = n && n.target && n.target.href || t
                      , s = new Error("Loading CSS chunk " + e + " failed.\n(" + l + ")");
                    s.code = "CSS_CHUNK_LOAD_FAILED",
                    s.type = i,
                    s.request = l,
                    o.parentNode.removeChild(o),
                    a(s)
                }
            }
            ,
            o.href = t,
            document.head.appendChild(o)
        }
        )(e, o, t, r)
    }
    )),
    n = {
        12395: 0
    },
    s.f.miniCss = (e,t)=>{
        n[e] ? t.push(n[e]) : 0 !== n[e] && {
            25394: 1,
            57468: 1,
            75980: 1
        }[e] && t.push(n[e] = o(e).then((()=>{
            n[e] = 0
        }
        ), (t=>{
            throw delete n[e],
            t
        }
        )))
    }
    ,
    (()=>{
        var e = {
            12395: 0
        };
        s.f.j = (t,r)=>{
            var a = s.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a)
                    r.push(a[2]);
                else {
                    var o = new Promise(((r,o)=>a = e[t] = [r, o]));
                    r.push(a[2] = o);
                    var n = s.p + s.u(t)
                      , i = new Error;
                    s.l(n, (r=>{
                        if (s.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0),
                        a)) {
                            var o = r && ("load" === r.type ? "missing" : r.type)
                              , n = r && r.target && r.target.src;
                            i.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")",
                            i.name = "ChunkLoadError",
                            i.type = o,
                            i.request = n,
                            a[1](i)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ,
        s.O.j = t=>0 === e[t];
        var t = (t,r)=>{
            var a, o, [n,i,l] = r, d = 0;
            if (n.some((t=>0 !== e[t]))) {
                for (a in i)
                    s.o(i, a) && (s.m[a] = i[a]);
                if (l)
                    var f = l(s)
            }
            for (t && t(r); d < n.length; d++)
                o = n[d],
                s.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return s.O(f)
        }
          , r = self.webpackChunkvk = self.webpackChunkvk || [];
        r.forEach(t.bind(null, 0)),
        r.push = t.bind(null, r.push.bind(r))
    }
    )();
    var d = s.O(void 0, [75514, 98066, 56990, 24509, 76400, 40885, 68592], (()=>s(920414)));
    d = s.O(d)
}
)();
