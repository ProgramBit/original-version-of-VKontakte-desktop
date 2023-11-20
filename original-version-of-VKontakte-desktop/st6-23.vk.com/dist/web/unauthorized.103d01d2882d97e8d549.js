(()=>{
    "use strict";
    var e, t, r, a, o, n, i = {
        635226: (e,t,r)=>{
            var a, o, n, i = r(694541);
            (null == (o = window.vk) || null == (a = o.pe) ? void 0 : a.static_manager_dynamic_imports) && (null == (n = window.vk) ? void 0 : n.stDomain) && (r.p = window.vk.stDomain + "/dist/"),
            window.Unauthorized2 = i.Unauthorized;
            try {
                window.stManager.done(window.jsc("web/unauthorized.js"))
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
    l.O = (t,r,a,o)=>{
        if (!r) {
            var n = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [r,a,o] = e[u], i = !0, d = 0; d < r.length; d++)
                    (!1 & o || n >= o) && Object.keys(l.O).every((e=>l.O[e](r[d]))) ? r.splice(d--, 1) : (i = !1,
                    o < n && (n = o));
                if (i) {
                    e.splice(u--, 1);
                    var s = a();
                    void 0 !== s && (t = s)
                }
            }
            return t
        }
        o = o || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > o; u--)
            e[u] = e[u - 1];
        e[u] = [r, a, o]
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
        var o = Object.create(null);
        l.r(o);
        var n = {};
        t = t || [null, r({}), r([]), r(r)];
        for (var i = 2 & a && e; "object" == typeof i && !~t.indexOf(i); i = r(i))
            Object.getOwnPropertyNames(i).forEach((t=>n[t] = ()=>e[t]));
        return n.default = ()=>e,
        l.d(o, n),
        o
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
    l.l = (e,t,r,o)=>{
        if (a[e])
            a[e].push(t);
        else {
            var n, i;
            if (void 0 !== r)
                for (var d = document.getElementsByTagName("script"), s = 0; s < d.length; s++) {
                    var u = d[s];
                    if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == "vk:" + r) {
                        n = u;
                        break
                    }
                }
            n || (i = !0,
            (n = document.createElement("script")).charset = "utf-8",
            n.timeout = 120,
            l.nc && n.setAttribute("nonce", l.nc),
            n.setAttribute("data-webpack", "vk:" + r),
            n.src = e),
            a[e] = [t];
            var f = (t,r)=>{
                n.onerror = n.onload = null,
                clearTimeout(c);
                var o = a[e];
                if (delete a[e],
                n.parentNode && n.parentNode.removeChild(n),
                o && o.forEach((e=>e(r))),
                t)
                    return t(r)
            }
              , c = setTimeout(f.bind(null, void 0, {
                type: "timeout",
                target: n
            }), 12e4);
            n.onerror = f.bind(null, n.onerror),
            n.onload = f.bind(null, n.onload),
            i && document.head.appendChild(n)
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
    o = e=>new Promise(((t,r)=>{
        var a = l.miniCssF(e)
          , o = l.p + a;
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
                      , d = n && n.target && n.target.href || t
                      , l = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                    l.code = "CSS_CHUNK_LOAD_FAILED",
                    l.type = i,
                    l.request = d,
                    o.parentNode.removeChild(o),
                    a(l)
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
        57344: 0
    },
    l.f.miniCss = (e,t)=>{
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
            57344: 0
        };
        l.f.j = (t,r)=>{
            var a = l.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a)
                    r.push(a[2]);
                else {
                    var o = new Promise(((r,o)=>a = e[t] = [r, o]));
                    r.push(a[2] = o);
                    var n = l.p + l.u(t)
                      , i = new Error;
                    l.l(n, (r=>{
                        if (l.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0),
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
        l.O.j = t=>0 === e[t];
        var t = (t,r)=>{
            var a, o, [n,i,d] = r, s = 0;
            if (n.some((t=>0 !== e[t]))) {
                for (a in i)
                    l.o(i, a) && (l.m[a] = i[a]);
                if (d)
                    var u = d(l)
            }
            for (t && t(r); s < n.length; s++)
                o = n[s],
                l.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return l.O(u)
        }
          , r = self.webpackChunkvk = self.webpackChunkvk || [];
        r.forEach(t.bind(null, 0)),
        r.push = t.bind(null, r.push.bind(r))
    }
    )();
    var s = l.O(void 0, [75514, 98066, 56990, 24509, 76400, 40885, 68592], (()=>l(635226)));
    s = l.O(s)
}
)();
