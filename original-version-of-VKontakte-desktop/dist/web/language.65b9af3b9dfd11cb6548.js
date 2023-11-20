// language.65b9af3b9dfd11cb6548.js?6112f41586a694e64d583df294dadaac
(()=>{
    "use strict";
    var e, t, a, n = {
        131741: (e,t,a)=>{
            var n, o, r, l = a(365903);
            (null == (o = window.vk) || null == (n = o.pe) ? void 0 : n.static_manager_dynamic_imports) && (null == (r = window.vk) ? void 0 : r.stDomain) && (a.p = window.vk.stDomain + "/dist/"),
            window.Language = new l.default;
            try {
                window.stManager.done(window.jsc("web/language.js"))
            } catch (e) {}
        }
        ,
        365903: (e,t,a)=>{
            a.d(t, {
                default: ()=>g
            });
            var n = a(29271)
              , o = a(514986)
              , r = a(584356)
              , l = a(795558)
              , s = a(82161)
              , i = a(953908)
              , c = a(221780)
              , u = a(320422);
            class g {
                init() {
                    cur.languagesListSearch = new window.vkIndexer(cur.languagesList,(e=>(0,
                    s.replaceEntities)(e.name) + " " + e.name_rus + " " + e.name_eng)),
                    cur.destroy.push((()=>{
                        delete cur.languagesListSearch
                    }
                    )),
                    (0,
                    l.elfocus)("language_search_form")
                }
                search(e) {
                    const t = (0,
                    l.ge)("all_languages_list");
                    let a = [];
                    a = (e = (0,
                    s.trim)(e)).length > 0 ? cur.languagesListSearch.search(e) : cur.languagesList,
                    window.tooltips && tooltips.destroyAll();
                    const n = ((e,t)=>{
                        if (e.length) {
                            const a = {};
                            let n = 0
                              , o = !1;
                            const r = Math.ceil(e.length / cur.columnsNum);
                            if (t) {
                                t += " " + ((0,
                                c.parseLatin)(t) || "");
                                const e = (t = (0,
                                s.trim)((0,
                                s.escapeRE)(t.replace(/[,]/g, "")))).replace(cur.languagesListSearch.delimiter, "|").replace(/(^\||\|$|\?)/g, "");
                                o = new RegExp("(" + e + ")","gi")
                            }
                            (0,
                            s.each)(e, ((e,l)=>{
                                const i = Math.floor(n / r);
                                a["column_" + i] || (a["column_" + i] = "");
                                const c = (0,
                                s.clone)(l);
                                t && o && (c.name = (0,
                                s.replaceEntities)(c.name),
                                c.name = c.name.replace(o, '<span class="language_name_hl">$1</span>')),
                                a["column_" + i] += (0,
                                s.getTemplate)("langRow", c),
                                n++
                            }
                            ));
                            let l = "";
                            return (0,
                            s.each)(a, ((e,t)=>{
                                l += (0,
                                s.getTemplate)("langColumn", {
                                    column: t
                                })
                            }
                            )),
                            l
                        }
                        return ""
                    }
                    )(a, e);
                    (0,
                    l.toggle)("languages_not_found", !n),
                    (0,
                    l.toggle)(t, n),
                    (0,
                    l.val)(t, n)
                }
                showEngName(e) {
                    (0,
                    u.showTooltip)(e, {
                        text: (0,
                        l.attr)(e, "data-eng-name"),
                        black: 1,
                        shift: [0, 0, -30]
                    })
                }
                changeLang(e, t, a) {
                    if ((0,
                    l.hasClass)(e, "language_selected"))
                        return !1;
                    ajax.post("al_index.php", {
                        act: "change_lang",
                        lang_id: t,
                        module: cur.module,
                        hash: a
                    }, {
                        onDone: function() {
                            nav.objLoc.lang ? (delete nav.objLoc.lang,
                            nav.setLoc(nav.objLoc),
                            nav.reload({
                                force: !0
                            })) : nav.reload({
                                force: !0
                            })
                        }
                    })
                }
                showBetaTooltip(e, t) {
                    (0,
                    i.cancelEvent)(t),
                    (0,
                    u.showTooltip)(e, {
                        text: n.getLang("global_language_beta_version"),
                        black: 1,
                        shift: [16, 4, 0]
                    })
                }
                showOtherLanguages() {
                    (0,
                    r.curBox)().hide(),
                    (0,
                    o.showBox)("lang.php?act=lang_dialog", {
                        all: 1
                    }, {
                        params: {
                            bodyStyle: "padding: 0px"
                        },
                        noreload: !0
                    })
                }
            }
        }
    }, o = {};
    function r(e) {
        var t = o[e];
        if (void 0 !== t)
            return t.exports;
        var a = o[e] = {
            exports: {}
        };
        return n[e].call(a.exports, a, a.exports, r),
        a.exports
    }
    r.m = n,
    e = [],
    r.O = (t,a,n,o)=>{
        if (!a) {
            var l = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [a,n,o] = e[u], s = !0, i = 0; i < a.length; i++)
                    (!1 & o || l >= o) && Object.keys(r.O).every((e=>r.O[e](a[i]))) ? a.splice(i--, 1) : (s = !1,
                    o < l && (l = o));
                if (s) {
                    e.splice(u--, 1);
                    var c = n();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        o = o || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > o; u--)
            e[u] = e[u - 1];
        e[u] = [a, n, o]
    }
    ,
    r.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return r.d(t, {
            a: t
        }),
        t
    }
    ,
    a = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__,
    r.t = function(e, n) {
        if (1 & n && (e = this(e)),
        8 & n)
            return e;
        if ("object" == typeof e && e) {
            if (4 & n && e.__esModule)
                return e;
            if (16 & n && "function" == typeof e.then)
                return e
        }
        var o = Object.create(null);
        r.r(o);
        var l = {};
        t = t || [null, a({}), a([]), a(a)];
        for (var s = 2 & n && e; "object" == typeof s && !~t.indexOf(s); s = a(s))
            Object.getOwnPropertyNames(s).forEach((t=>l[t] = ()=>e[t]));
        return l.default = ()=>e,
        r.d(o, l),
        o
    }
    ,
    r.d = (e,t)=>{
        for (var a in t)
            r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
    }
    ,
    r.e = ()=>Promise.resolve(),
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    r.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    r.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.p = "/dist/",
    (()=>{
        var e = {
            80908: 0
        };
        r.O.j = t=>0 === e[t];
        var t = (t,a)=>{
            var n, o, [l,s,i] = a, c = 0;
            if (l.some((t=>0 !== e[t]))) {
                for (n in s)
                    r.o(s, n) && (r.m[n] = s[n]);
                if (i)
                    var u = i(r)
            }
            for (t && t(a); c < l.length; c++)
                o = l[c],
                r.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return r.O(u)
        }
          , a = self.webpackChunkvk = self.webpackChunkvk || [];
        a.forEach(t.bind(null, 0)),
        a.push = t.bind(null, a.push.bind(a))
    }
    )();
    var l = r.O(void 0, [75514, 68592], (()=>r(131741)));
    l = r.O(l)
}
)();
