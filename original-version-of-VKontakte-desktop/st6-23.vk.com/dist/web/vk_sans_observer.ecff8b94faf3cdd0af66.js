(()=>{
    "use strict";
    var e, t, o, r = {
        96208: (e,t,o)=>{
            o.d(t, {
                observeVkSans: ()=>a
            });
            var r = o(307411);
            const n = e=>document.documentElement.style.setProperty(e, getComputedStyle(document.documentElement).getPropertyValue(e).replace(/^ *?["']VK Sans Display["'], ?/, ""))
              , a = e=>{
                const t = "vkSansCached";
                if ("fonts"in document && !r.vkSessionStorage.getItem(t)) {
                    const o = "aа"
                      , a = [e, "--vk-sans-display"]
                      , s = ()=>{
                        a.forEach((e=>document.documentElement.style.removeProperty(e))),
                        r.vkSessionStorage.setItem(t, String(!0))
                    }
                    ;
                    a.forEach(n),
                    Promise.all(['700 1em "VK Sans Display"'].map((e=>document.fonts.load(e, o)))).then(s).catch(s)
                }
                document.addEventListener("keydown", (e=>{
                    e.altKey && "KeyK" === e.code && r.vkSessionStorage.removeItem(t)
                }
                ))
            }
        }
        ,
        795337: (e,t,o)=>{
            var r, n, a, s = o(96208);
            (null == (n = window.vk) || null == (r = n.pe) ? void 0 : r.static_manager_dynamic_imports) && (null == (a = window.vk) ? void 0 : a.stDomain) && (o.p = window.vk.stDomain + "/dist/"),
            (0,
            s.observeVkSans)("--palette-vk-font");
            try {
                window.stManager.done(window.jsc("web/vk_sans_observer.js"))
            } catch (e) {}
        }
    }, n = {};
    function a(e) {
        var t = n[e];
        if (void 0 !== t)
            return t.exports;
        var o = n[e] = {
            exports: {}
        };
        return r[e].call(o.exports, o, o.exports, a),
        o.exports
    }
    a.m = r,
    e = [],
    a.O = (t,o,r,n)=>{
        if (!o) {
            var s = 1 / 0;
            for (d = 0; d < e.length; d++) {
                for (var [o,r,n] = e[d], i = !0, l = 0; l < o.length; l++)
                    (!1 & n || s >= n) && Object.keys(a.O).every((e=>a.O[e](o[l]))) ? o.splice(l--, 1) : (i = !1,
                    n < s && (s = n));
                if (i) {
                    e.splice(d--, 1);
                    var c = r();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        n = n || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > n; d--)
            e[d] = e[d - 1];
        e[d] = [o, r, n]
    }
    ,
    a.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return a.d(t, {
            a: t
        }),
        t
    }
    ,
    o = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__,
    a.t = function(e, r) {
        if (1 & r && (e = this(e)),
        8 & r)
            return e;
        if ("object" == typeof e && e) {
            if (4 & r && e.__esModule)
                return e;
            if (16 & r && "function" == typeof e.then)
                return e
        }
        var n = Object.create(null);
        a.r(n);
        var s = {};
        t = t || [null, o({}), o([]), o(o)];
        for (var i = 2 & r && e; "object" == typeof i && !~t.indexOf(i); i = o(i))
            Object.getOwnPropertyNames(i).forEach((t=>s[t] = ()=>e[t]));
        return s.default = ()=>e,
        a.d(n, s),
        n
    }
    ,
    a.d = (e,t)=>{
        for (var o in t)
            a.o(t, o) && !a.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
            })
    }
    ,
    a.e = ()=>Promise.resolve(),
    a.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    a.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    a.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    a.p = "/dist/",
    (()=>{
        var e = {
            83293: 0
        };
        a.O.j = t=>0 === e[t];
        var t = (t,o)=>{
            var r, n, [s,i,l] = o, c = 0;
            if (s.some((t=>0 !== e[t]))) {
                for (r in i)
                    a.o(i, r) && (a.m[r] = i[r]);
                if (l)
                    var d = l(a)
            }
            for (t && t(o); c < s.length; c++)
                n = s[c],
                a.o(e, n) && e[n] && e[n][0](),
                e[n] = 0;
            return a.O(d)
        }
          , o = self.webpackChunkvk = self.webpackChunkvk || [];
        o.forEach(t.bind(null, 0)),
        o.push = t.bind(null, o.push.bind(o))
    }
    )();
    var s = a.O(void 0, [68592], (()=>a(795337)));
    s = a.O(s)
}
)();
