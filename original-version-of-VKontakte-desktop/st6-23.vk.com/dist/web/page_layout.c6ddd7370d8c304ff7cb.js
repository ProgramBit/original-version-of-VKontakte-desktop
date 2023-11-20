(()=>{
    "use strict";
    var t, e, o, i = {
        601563: (t,e,o)=>{
            function i() {}
            o.d(e, {
                initLeftMenuTasks: ()=>i
            })
        }
        ,
        436426: (t,e,o)=>{
            o.d(e, {
                LeftMenu: ()=>n
            });
            var i, s = o(438221), r = o(601563);
            !function(t) {
                t.STATE_STICKY_TOP = "STATE_STICKY_TOP",
                t.STATE_FLOATING = "STATE_FLOATING"
            }(i || (i = {}));
            class n {
                handleUpdateRequest(t=!1) {
                    this.menuEle && (t ? (this.setPositionTop(0),
                    this.setState("STATE_FLOATING")) : this.handleScroll())
                }
                resetState() {
                    this.firstScrollUp = !1,
                    this.firstScrollDown = !1,
                    this.setPositionTop(0),
                    this.setState((0,
                    s.scrollGetY)() > 10 ? "STATE_STICKY_TOP" : "STATE_FLOATING")
                }
                setState(t) {
                    this.currentState !== t && this.menuEle && (this.currentState = t,
                    "STATE_STICKY_TOP" === t ? this.menuEle.classList.add("sticky_top") : "STATE_FLOATING" === t && this.menuEle.classList.remove("sticky_top"))
                }
                setPositionTop(t) {
                    t >= 0 && this.menuEle && this.menuEle.style.setProperty("top", `${t}px`)
                }
                handleScrollDown(t) {
                    this.menuEle && (this.firstScrollDown || ("STATE_STICKY_TOP" === this.currentState && this.setPositionTop(t),
                    this.setState("STATE_FLOATING")),
                    this.firstScrollDown = !0,
                    this.firstScrollUp = !1)
                }
                handleScrollUp(t) {
                    if (!this.menuEle)
                        return;
                    const e = this.menuEle.getBoundingClientRect();
                    this.firstScrollUp && "STATE_FLOATING" === this.currentState && e.bottom < 0 && this.setPositionTop(t - this.menuEle.clientHeight),
                    "STATE_STICKY_TOP" !== this.currentState && e.top >= 0 && (this.setState("STATE_STICKY_TOP"),
                    this.setPositionTop(0)),
                    this.firstScrollUp = !0,
                    this.firstScrollDown = !1
                }
                handleScroll() {
                    const t = (0,
                    s.scrollGetY)();
                    Boolean(this.lastScrollTop) && (t > this.lastScrollTop ? this.handleScrollDown(t) : this.handleScrollUp(t)),
                    this.lastScrollTop = t
                }
                constructor() {
                    try {
                        (0,
                        r.initLeftMenuTasks)()
                    } catch (t) {}
                    this.handleUpdateRequest = this.handleUpdateRequest.bind(this),
                    this.handleScroll = this.handleScroll.bind(this),
                    this.menuEle = document.querySelector(".side_bar"),
                    this.menuEle && (this.lastScrollTop = (0,
                    s.scrollGetY)(),
                    this.firstScrollUp = !1,
                    this.firstScrollDown = !1,
                    this.resetState())
                }
            }
        }
        ,
        209547: (t,e,o)=>{
            var i, s, r, n = o(436426);
            (null == (s = window.vk) || null == (i = s.pe) ? void 0 : i.static_manager_dynamic_imports) && (null == (r = window.vk) ? void 0 : r.stDomain) && (o.p = window.vk.stDomain + "/dist/"),
            window.initPageLayoutUI = window.initPageLayoutUI || function() {
                window.__leftMenu = new n.LeftMenu
            }
            ;
            try {
                window.stManager.done(window.jsc("web/page_layout.js"))
            } catch (t) {
                console.log(t.message)
            }
        }
    }, s = {};
    function r(t) {
        var e = s[t];
        if (void 0 !== e)
            return e.exports;
        var o = s[t] = {
            exports: {}
        };
        return i[t].call(o.exports, o, o.exports, r),
        o.exports
    }
    r.m = i,
    t = [],
    r.O = (e,o,i,s)=>{
        if (!o) {
            var n = 1 / 0;
            for (h = 0; h < t.length; h++) {
                for (var [o,i,s] = t[h], l = !0, a = 0; a < o.length; a++)
                    (!1 & s || n >= s) && Object.keys(r.O).every((t=>r.O[t](o[a]))) ? o.splice(a--, 1) : (l = !1,
                    s < n && (n = s));
                if (l) {
                    t.splice(h--, 1);
                    var c = i();
                    void 0 !== c && (e = c)
                }
            }
            return e
        }
        s = s || 0;
        for (var h = t.length; h > 0 && t[h - 1][2] > s; h--)
            t[h] = t[h - 1];
        t[h] = [o, i, s]
    }
    ,
    r.n = t=>{
        var e = t && t.__esModule ? ()=>t.default : ()=>t;
        return r.d(e, {
            a: e
        }),
        e
    }
    ,
    o = Object.getPrototypeOf ? t=>Object.getPrototypeOf(t) : t=>t.__proto__,
    r.t = function(t, i) {
        if (1 & i && (t = this(t)),
        8 & i)
            return t;
        if ("object" == typeof t && t) {
            if (4 & i && t.__esModule)
                return t;
            if (16 & i && "function" == typeof t.then)
                return t
        }
        var s = Object.create(null);
        r.r(s);
        var n = {};
        e = e || [null, o({}), o([]), o(o)];
        for (var l = 2 & i && t; "object" == typeof l && !~e.indexOf(l); l = o(l))
            Object.getOwnPropertyNames(l).forEach((e=>n[e] = ()=>t[e]));
        return n.default = ()=>t,
        r.d(s, n),
        s
    }
    ,
    r.d = (t,e)=>{
        for (var o in e)
            r.o(e, o) && !r.o(t, o) && Object.defineProperty(t, o, {
                enumerable: !0,
                get: e[o]
            })
    }
    ,
    r.e = ()=>Promise.resolve(),
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    r.o = (t,e)=>Object.prototype.hasOwnProperty.call(t, e),
    r.r = t=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    r.p = "/dist/",
    (()=>{
        var t = {
            60582: 0
        };
        r.O.j = e=>0 === t[e];
        var e = (e,o)=>{
            var i, s, [n,l,a] = o, c = 0;
            if (n.some((e=>0 !== t[e]))) {
                for (i in l)
                    r.o(l, i) && (r.m[i] = l[i]);
                if (a)
                    var h = a(r)
            }
            for (e && e(o); c < n.length; c++)
                s = n[c],
                r.o(t, s) && t[s] && t[s][0](),
                t[s] = 0;
            return r.O(h)
        }
          , o = self.webpackChunkvk = self.webpackChunkvk || [];
        o.forEach(e.bind(null, 0)),
        o.push = e.bind(null, o.push.bind(o))
    }
    )();
    var n = r.O(void 0, [75514, 68592], (()=>r(209547)));
    n = r.O(n)
}
)();
