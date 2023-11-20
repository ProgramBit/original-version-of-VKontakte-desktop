(()=>{
    "use strict";
    var e, r, t, o = {
        633211: (e,r,t)=>{
            var o, n, i, l = t(459474);
            (null == (n = window.vk) || null == (o = n.pe) ? void 0 : o.static_manager_dynamic_imports) && (null == (i = window.vk) ? void 0 : i.stDomain) && (t.p = window.vk.stDomain + "/dist/"),
            window.UIGallery = l.UIGallery,
            window.uiGetGallery = l.uiGetGallery,
            window.stManager.done(window.jsc("web/ui_components.js"))
        }
    }, n = {};
    function i(e) {
        var r = n[e];
        if (void 0 !== r)
            return r.exports;
        var t = n[e] = {
            exports: {}
        };
        return o[e].call(t.exports, t, t.exports, i),
        t.exports
    }
    i.m = o,
    e = [],
    i.O = (r,t,o,n)=>{
        if (!t) {
            var l = 1 / 0;
            for (s = 0; s < e.length; s++) {
                for (var [t,o,n] = e[s], a = !0, u = 0; u < t.length; u++)
                    (!1 & n || l >= n) && Object.keys(i.O).every((e=>i.O[e](t[u]))) ? t.splice(u--, 1) : (a = !1,
                    n < l && (l = n));
                if (a) {
                    e.splice(s--, 1);
                    var f = o();
                    void 0 !== f && (r = f)
                }
            }
            return r
        }
        n = n || 0;
        for (var s = e.length; s > 0 && e[s - 1][2] > n; s--)
            e[s] = e[s - 1];
        e[s] = [t, o, n]
    }
    ,
    i.n = e=>{
        var r = e && e.__esModule ? ()=>e.default : ()=>e;
        return i.d(r, {
            a: r
        }),
        r
    }
    ,
    t = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__,
    i.t = function(e, o) {
        if (1 & o && (e = this(e)),
        8 & o)
            return e;
        if ("object" == typeof e && e) {
            if (4 & o && e.__esModule)
                return e;
            if (16 & o && "function" == typeof e.then)
                return e
        }
        var n = Object.create(null);
        i.r(n);
        var l = {};
        r = r || [null, t({}), t([]), t(t)];
        for (var a = 2 & o && e; "object" == typeof a && !~r.indexOf(a); a = t(a))
            Object.getOwnPropertyNames(a).forEach((r=>l[r] = ()=>e[r]));
        return l.default = ()=>e,
        i.d(n, l),
        n
    }
    ,
    i.d = (e,r)=>{
        for (var t in r)
            i.o(r, t) && !i.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: r[t]
            })
    }
    ,
    i.e = ()=>Promise.resolve(),
    i.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    i.o = (e,r)=>Object.prototype.hasOwnProperty.call(e, r),
    i.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.p = "/dist/",
    (()=>{
        var e = {
            40445: 0
        };
        i.O.j = r=>0 === e[r];
        var r = (r,t)=>{
            var o, n, [l,a,u] = t, f = 0;
            if (l.some((r=>0 !== e[r]))) {
                for (o in a)
                    i.o(a, o) && (i.m[o] = a[o]);
                if (u)
                    var s = u(i)
            }
            for (r && r(t); f < l.length; f++)
                n = l[f],
                i.o(e, n) && e[n] && e[n][0](),
                e[n] = 0;
            return i.O(s)
        }
          , t = self.webpackChunkvk = self.webpackChunkvk || [];
        t.forEach(r.bind(null, 0)),
        t.push = r.bind(null, t.push.bind(t))
    }
    )();
    var l = i.O(void 0, [75514, 68592], (()=>i(633211)));
    l = i.O(l)
}
)();
