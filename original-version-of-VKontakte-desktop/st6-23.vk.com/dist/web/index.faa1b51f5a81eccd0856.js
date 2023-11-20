// index.faa1b51f5a81eccd0856.js?67ede4505ff9e3b8a6be7f8c60e1bdf3
(()=>{
    "use strict";
    var e, t, r, a, n, o, i = {
        794621: (e,t,r)=>{
            var a, n, o, i = r(490093);
            (null == (n = window.vk) || null == (a = n.pe) ? void 0 : a.static_manager_dynamic_imports) && (null == (o = window.vk) ? void 0 : o.stDomain) && (r.p = window.vk.stDomain + "/dist/"),
            window.Index = i.Index;
            try {
                window.stManager.done(window.jsc("web/index.js"))
            } catch (e) {}
        }
    }, d = {};
    function l(e) {
        var t = d[e];
        if (void 0 !== t)
            return t.exports;
        var r = d[e] = {
            exports: {}
        };
        return i[e].call(r.exports, r, r.exports, l),
        r.exports
    }
    l.m = i,
    l.amdO = {},
    e = [],
    l.O = (t,r,a,n)=>{
        if (!r) {
            var o = 1 / 0;
            for (f = 0; f < e.length; f++) {
                for (var [r,a,n] = e[f], i = !0, d = 0; d < r.length; d++)
                    (!1 & n || o >= n) && Object.keys(l.O).every((e=>l.O[e](r[d]))) ? r.splice(d--, 1) : (i = !1,
                    n < o && (o = n));
                if (i) {
                    e.splice(f--, 1);
                    var s = a();
                    void 0 !== s && (t = s)
                }
            }
            return t
        }
        n = n || 0;
        for (var f = e.length; f > 0 && e[f - 1][2] > n; f--)
            e[f] = e[f - 1];
        e[f] = [r, a, n]
    }
    ,
    l.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return l.d(t, {
            a: t
        }),
        t
    }
    ,
    r = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__,
    l.t = function(e, a) {
        if (1 & a && (e = this(e)),
        8 & a)
            return e;
        if ("object" == typeof e && e) {
            if (4 & a && e.__esModule)
                return e;
            if (16 & a && "function" == typeof e.then)
                return e
        }
        var n = Object.create(null);
        l.r(n);
        var o = {};
        t = t || [null, r({}), r([]), r(r)];
        for (var i = 2 & a && e; "object" == typeof i && !~t.indexOf(i); i = r(i))
            Object.getOwnPropertyNames(i).forEach((t=>o[t] = ()=>e[t]));
        return o.default = ()=>e,
        l.d(n, o),
        n
    }
    ,
    l.d = (e,t)=>{
        for (var r in t)
            l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    l.f = {},
    l.e = e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e, t),
    t)), [])),
    l.u = e=>25394 === e ? "AudioLongtapModal.98b6df61d646414354a3.js" : 24817 === e ? "hls.7bfefe299fa92971b99a.js" : 75980 === e ? "menu_settings.b73d1f0a03f70163e02d.js" : 96816 === e ? "web-audio-lyrics-modal.5b786d2492e85e4a335f.js" : 9375 === e ? "voice_message_player.f0c31b4a3dc08de145c9.js" : 28762 === e ? "speech.be0c329a1eff7c81577d.js" : 57468 === e ? "SilentModeForms.6cf18c53f58f775934b3.js" : 28872 === e ? "feed-client-nav-skeleton.93951c516f1e3f2a55ad.js" : 35953 === e ? "feed-client-nav-async-right-block.98e503ddcd7a638e1b63.js" : 38288 === e ? "lottie.5e4758c39f106eab733a.js" : void 0,
    l.miniCssF = e=>e + "." + {
        25394: "6af57e1b0cf5a74f9a87",
        57468: "35be3dfa1e90e3cdd0a1",
        75980: "5bbee2c9f3e189193a73"
    }[e] + ".css",
    l.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    l.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    a = {},
    l.l = (e,t,r,n)=>{
        if (a[e])
            a[e].push(t);
        else {
            var o, i;
            if (void 0 !== r)
                for (var d = document.getElementsByTagName("script"), s = 0; s < d.length; s++) {
                    var f = d[s];
                    if (f.getAttribute("src") == e || f.getAttribute("data-webpack") == "vk:" + r) {
                        o = f;
                        break
                    }
                }
            o || (i = !0,
            (o = document.createElement("script")).charset = "utf-8",
            o.timeout = 120,
            l.nc && o.setAttribute("nonce", l.nc),
            o.setAttribute("data-webpack", "vk:" + r),
            o.src = e),
            a[e] = [t];
            var c = (t,r)=>{
                o.onerror = o.onload = null,
                clearTimeout(u);
                var n = a[e];
                if (delete a[e],
                o.parentNode && o.parentNode.removeChild(o),
                n && n.forEach((e=>e(r))),
                t)
                    return t(r)
            }
              , u = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: o
            }), 12e4);
            o.onerror = c.bind(null, o.onerror),
            o.onload = c.bind(null, o.onload),
            i && document.head.appendChild(o)
        }
    }
    ,
    l.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    l.p = "/dist/",
    n = e=>new Promise(((t,r)=>{
        var a = l.miniCssF(e)
          , n = l.p + a;
        if (((e,t)=>{
            for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                var n = (i = r[a]).getAttribute("data-href") || i.getAttribute("href");
                if ("stylesheet" === i.rel && (n === e || n === t))
                    return i
            }
            var o = document.getElementsByTagName("style");
            for (a = 0; a < o.length; a++) {
                var i;
                if ((n = (i = o[a]).getAttribute("data-href")) === e || n === t)
                    return i
            }
        }
        )(a, n))
            return t();
        ((e,t,r,a)=>{
            var n = document.createElement("link");
            n.rel = "stylesheet",
            n.type = "text/css",
            n.onerror = n.onload = o=>{
                if (n.onerror = n.onload = null,
                "load" === o.type)
                    r();
                else {
                    var i = o && ("load" === o.type ? "missing" : o.type)
                      , d = o && o.target && o.target.href || t
                      , l = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                    l.code = "CSS_CHUNK_LOAD_FAILED",
                    l.type = i,
                    l.request = d,
                    n.parentNode.removeChild(n),
                    a(l)
                }
            }
            ,
            n.href = t,
            document.head.appendChild(n)
        }
        )(e, n, t, r)
    }
    )),
    o = {
        52596: 0
    },
    l.f.miniCss = (e,t)=>{
        o[e] ? t.push(o[e]) : 0 !== o[e] && {
            25394: 1,
            57468: 1,
            75980: 1
        }[e] && t.push(o[e] = n(e).then((()=>{
            o[e] = 0
        }
        ), (t=>{
            throw delete o[e],
            t
        }
        )))
    }
    ,
    (()=>{
        var e = {
            52596: 0
        };
        l.f.j = (t,r)=>{
            var a = l.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a)
                    r.push(a[2]);
                else {
                    var n = new Promise(((r,n)=>a = e[t] = [r, n]));
                    r.push(a[2] = n);
                    var o = l.p + l.u(t)
                      , i = new Error;
                    l.l(o, (r=>{
                        if (l.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0),
                        a)) {
                            var n = r && ("load" === r.type ? "missing" : r.type)
                              , o = r && r.target && r.target.src;
                            i.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")",
                            i.name = "ChunkLoadError",
                            i.type = n,
                            i.request = o,
                            a[1](i)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ,
        l.O.j = t=>0 === e[t];
        var t = (t,r)=>{
            var a, n, [o,i,d] = r, s = 0;
            if (o.some((t=>0 !== e[t]))) {
                for (a in i)
                    l.o(i, a) && (l.m[a] = i[a]);
                if (d)
                    var f = d(l)
            }
            for (t && t(r); s < o.length; s++)
                n = o[s],
                l.o(e, n) && e[n] && e[n][0](),
                e[n] = 0;
            return l.O(f)
        }
          , r = self.webpackChunkvk = self.webpackChunkvk || [];
        r.forEach(t.bind(null, 0)),
        r.push = t.bind(null, r.push.bind(r))
    }
    )();
    var s = l.O(void 0, [75514, 98066, 56990, 24509, 76400, 40885, 68592], (()=>l(794621)));
    s = l.O(s)
}
)();
