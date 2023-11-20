// jobs_devtools_notification.ce82d0580635f827abe8.js?20b514f42992f83df346a3880b912d49
/*! For license information please see jobs_devtools_notification.ce82d0580635f827abe8.js.LICENSE.txt */
(()=>{
    "use strict";
    var e, t, o, n = {
        284458: (e,t,o)=>{
            var n, r, i, a = o(794368);
            (null == (r = window.vk) || null == (n = r.pe) ? void 0 : n.static_manager_dynamic_imports) && (null == (i = window.vk) ? void 0 : i.stDomain) && (o.p = window.vk.stDomain + "/dist/"),
            (0,
            a.init)();
            try {
                window.stManager.done(window.jsc("web/jobs_devtools_notification.js"))
            } catch (e) {}
        }
        ,
        794368: (e,t,o)=>{
            o.d(t, {
                init: ()=>i
            });
            var n = o(215239);
            const r = ()=>{
                (0,
                n.fetchVacancies)().then(n.logMessage, (()=>{}
                ))
            }
              , i = ()=>{
                void 0 !== window.Promise && (0,
                n.onDevtoolsOpen)().then(r, (()=>{}
                ))
            }
        }
        ,
        324195: (e,t,o)=>{
            o.d(t, {
                requestJson: ()=>a
            });
            var n = o(434788)
              , r = o(383320)
              , i = o(449893);
            const a = (e,t)=>(0,
            r.request)(e, (0,
            n._)({}, t, {
                al: 1
            }), {}).then((({data: e})=>{
                const t = (e=>{
                    let t;
                    try {
                        t = (new i.AjaxProtoJson).parseResponse(e)
                    } catch (e) {
                        return
                    }
                    return t
                }
                )(e);
                return void 0 !== t ? t : Promise.reject(new Error("Unable to parse response payload"))
            }
            ))
        }
        ,
        215239: (e,t,o)=>{
            o.d(t, {
                fetchVacancies: ()=>a,
                logMessage: ()=>i,
                onDevtoolsOpen: ()=>s
            });
            var n = o(101229)
              , r = o(324195);
            const i = e=>{
                console.log(e)
            }
              , a = ()=>{
                const e = window.location.pathname.replace(/^\//, "");
                return (0,
                r.requestJson)("/al_jobs.php", {
                    act: "get_by_section",
                    section: e
                }).then((({code: e, payload: t})=>{
                    var o;
                    const n = null == (o = t) ? void 0 : o[0];
                    return 0 === e && "string" == typeof n ? n : Promise.reject(new Error("Invalid response"))
                }
                ))
            }
              , s = ()=>{
                const e = (0,
                n.start)().isOpen;
                let t;
                const o = e ? Promise.resolve() : new Promise((e=>{
                    t = e
                }
                ));
                return e || window.addEventListener("devtoolschange", (e=>{
                    var o, n;
                    (null == (n = e) || null == (o = n.detail) ? void 0 : o.isOpen) && t()
                }
                )),
                o
            }
        }
        ,
        101229: (e,t,o)=>{
            function n() {
                const e = {
                    isOpen: !1,
                    orientation: void 0
                }
                  , t = (e,t)=>{
                    window.dispatchEvent(new CustomEvent("devtoolschange",{
                        detail: {
                            isOpen: e,
                            orientation: t
                        }
                    }))
                }
                  , o = setInterval((()=>{
                    try {
                        const o = window.outerWidth - window.innerWidth > 160
                          , n = window.outerHeight - window.innerHeight > 160
                          , r = o ? "vertical" : "horizontal";
                        n && o || !(window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized || o || n) ? (e.isOpen && t(!1, void 0),
                        e.isOpen = !1,
                        e.orientation = void 0) : (e.isOpen && e.orientation === r || t(!0, r),
                        e.isOpen = !0,
                        e.orientation = r)
                    } catch (e) {
                        clearInterval(o)
                    }
                }
                ), 500);
                return e
            }
            o.d(t, {
                start: ()=>n
            })
        }
    }, r = {};
    function i(e) {
        var t = r[e];
        if (void 0 !== t)
            return t.exports;
        var o = r[e] = {
            exports: {}
        };
        return n[e].call(o.exports, o, o.exports, i),
        o.exports
    }
    i.m = n,
    e = [],
    i.O = (t,o,n,r)=>{
        if (!o) {
            var a = 1 / 0;
            for (d = 0; d < e.length; d++) {
                for (var [o,n,r] = e[d], s = !0, l = 0; l < o.length; l++)
                    (!1 & r || a >= r) && Object.keys(i.O).every((e=>i.O[e](o[l]))) ? o.splice(l--, 1) : (s = !1,
                    r < a && (a = r));
                if (s) {
                    e.splice(d--, 1);
                    var c = n();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        r = r || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > r; d--)
            e[d] = e[d - 1];
        e[d] = [o, n, r]
    }
    ,
    i.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return i.d(t, {
            a: t
        }),
        t
    }
    ,
    o = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__,
    i.t = function(e, n) {
        if (1 & n && (e = this(e)),
        8 & n)
            return e;
        if ("object" == typeof e && e) {
            if (4 & n && e.__esModule)
                return e;
            if (16 & n && "function" == typeof e.then)
                return e
        }
        var r = Object.create(null);
        i.r(r);
        var a = {};
        t = t || [null, o({}), o([]), o(o)];
        for (var s = 2 & n && e; "object" == typeof s && !~t.indexOf(s); s = o(s))
            Object.getOwnPropertyNames(s).forEach((t=>a[t] = ()=>e[t]));
        return a.default = ()=>e,
        i.d(r, a),
        r
    }
    ,
    i.d = (e,t)=>{
        for (var o in t)
            i.o(t, o) && !i.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
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
    i.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
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
            72269: 0
        };
        i.O.j = t=>0 === e[t];
        var t = (t,o)=>{
            var n, r, [a,s,l] = o, c = 0;
            if (a.some((t=>0 !== e[t]))) {
                for (n in s)
                    i.o(s, n) && (i.m[n] = s[n]);
                if (l)
                    var d = l(i)
            }
            for (t && t(o); c < a.length; c++)
                r = a[c],
                i.o(e, r) && e[r] && e[r][0](),
                e[r] = 0;
            return i.O(d)
        }
          , o = self.webpackChunkvk = self.webpackChunkvk || [];
        o.forEach(t.bind(null, 0)),
        o.push = t.bind(null, o.push.bind(o))
    }
    )();
    var a = i.O(void 0, [75514, 68592], (()=>i(284458)));
    a = i.O(a)
}
)();
