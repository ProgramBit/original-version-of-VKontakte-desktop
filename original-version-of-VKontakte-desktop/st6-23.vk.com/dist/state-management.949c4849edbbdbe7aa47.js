(self.webpackChunkvk = self.webpackChunkvk || []).push([[76400], {
    763279: function(e, t, r) {
        ((e,t,r,n,a)=>{
            function o(e) {
                return e && "object" == typeof e && "default"in e ? e : {
                    default: e
                }
            }
            function i(e, t, n, a) {
                let o = [r.step.run({
                    fn: e=>t(e)
                })];
                if (a && o.unshift(a),
                n) {
                    let t = r.createNode({
                        node: o
                    })
                      , a = e.graphite.id
                      , i = n.additionalLinks
                      , s = i[a] || [];
                    return i[a] = s,
                    s.push(t),
                    ()=>{
                        let e = s.indexOf(t);
                        -1 !== e && s.splice(e, 1),
                        r.clearNode(t)
                    }
                }
                {
                    let t = r.createNode({
                        node: o,
                        parent: [e],
                        family: {
                            owners: e
                        }
                    });
                    return ()=>{
                        r.clearNode(t)
                    }
                }
            }
            function s(e, t) {
                return t.displayName = e,
                t
            }
            function u(e, t) {
                r.is.store(e) || v("expect useStore argument to be a store");
                let a = g.default.useCallback((r=>i(e, r, t)), [e, t])
                  , o = g.default.useCallback((()=>S(e, t)), [e, t]);
                return n.useSyncExternalStore(a, o, o)
            }
            function l(e, t) {
                let a = r.is.unit(e)
                  , o = {};
                a ? o = {
                    unit: e
                } : "@@unitShape"in e ? "function" == typeof e["@@unitShape"] ? o = e["@@unitShape"]() : v("expect @@unitShape to be a function") : o = e;
                let s = Array.isArray(o)
                  , u = g.default.useRef({
                    stale: 1,
                    justSubscribed: 0,
                    scope: t
                })
                  , [l,c,f,d,p] = g.default.useMemo((()=>{
                    u.current.stale = 1;
                    let e = Array.isArray(o) ? [] : {}
                      , n = []
                      , a = []
                      , i = []
                      , s = [];
                    for (let u in o) {
                        let l = o[u];
                        r.is.unit(l) || v("expect useUnit argument to be a unit"),
                        r.is.event(l) || r.is.effect(l) ? (e[u] = t ? r.scopeBind(l, {
                            scope: t
                        }) : l,
                        i.push(u),
                        s.push(l)) : (e[u] = null,
                        n.push(u),
                        a.push(l))
                    }
                    return [e, n, a, i, s]
                }
                ), [u, t, ...Object.keys(o), ...Object.values(o)])
                  , m = g.default.useRef({
                    value: l,
                    storeKeys: c,
                    eventKeys: d,
                    eventValues: p
                })
                  , h = g.default.useCallback((e=>{
                    let n = u.current;
                    n.justSubscribed = 1;
                    let a = ()=>{
                        n.stale || (n.stale = 1,
                        e())
                    }
                      , o = r.step.compute({
                        priority: "sampler",
                        batch: 1
                    })
                      , s = f.map((e=>i(e, a, t, o)));
                    return ()=>{
                        s.forEach((e=>e()))
                    }
                }
                ), [f, t, m, u])
                  , y = g.default.useCallback((()=>{
                    let e, r = m.current, n = u.current, o = 0, i = r.value, h = r.storeKeys, y = r.eventKeys, g = r.eventValues, v = t !== n.scope;
                    if (n.stale || n.justSubscribed || v) {
                        o = !n.justSubscribed || v,
                        e = s ? [...l] : {
                            ...l
                        },
                        h.length === c.length && y.length === d.length || (o = 1);
                        for (let r = 0; r < c.length; r++) {
                            let n = S(f[r], t)
                              , a = c[r];
                            o || (o = h.includes(a) ? i[a] !== n : 1),
                            e[a] = n
                        }
                        for (let e = 0; e < d.length; e++) {
                            let t = p[e]
                              , r = d[e];
                            o || (o = y.includes(r) ? g[y.indexOf(r)] !== t : 1)
                        }
                    }
                    return o && (r.value = e),
                    r.storeKeys = c,
                    r.eventKeys = d,
                    r.eventValues = p,
                    n.stale = 0,
                    n.justSubscribed = !o,
                    n.scope = t,
                    a ? r.value.unit : r.value
                }
                ), [h, f, p, t, m, u]);
                return n.useSyncExternalStore(h, y, y)
            }
            function c([e,t], n) {
                let o, s, u, l, c = w;
                t ? (o = t,
                u = e,
                l = []) : ({fn: o, store: u, keys: l, defaultValue: s, updateFilter: c=w} = e),
                r.is.store(u) || v("useStoreMap expects a store"),
                Array.isArray(l) || v("useStoreMap expects an array as keys"),
                "function" != typeof o && v("useStoreMap expects a function");
                let f = g.default.useCallback((e=>i(u, e, n)), [u, n])
                  , d = g.default.useCallback((()=>S(u, n)), [u, n])
                  , p = g.default.useRef()
                  , m = g.default.useRef()
                  , h = g.default.useRef(l);
                return a.useSyncExternalStoreWithSelector(f, d, d, (e=>{
                    if (p.current !== e || !((e,t)=>{
                        if (!e || !t || e.length !== t.length)
                            return 0;
                        let r = 1;
                        for (let n = 0; n < e.length; n++)
                            if (e[n] !== t[n]) {
                                r = 0;
                                break
                            }
                        return r
                    }
                    )(h.current, l)) {
                        let t = o(e, l);
                        void 0 === t && void 0 !== s && (t = s),
                        p.current = e,
                        h.current = l,
                        void 0 !== t && (m.current = t)
                    }
                    return m.current
                }
                ), ((e,t)=>!c(t, e)))
            }
            function f(e, t={}, r) {
                let {open: n, close: a, set: o} = l({
                    open: e.open,
                    close: e.close,
                    set: e.set
                }, r)
                  , i = g.default.useMemo((()=>({
                    open: n,
                    close: a,
                    set: o
                })), [e, n])
                  , s = g.default.useRef({
                    value: null,
                    count: 0
                });
                b((()=>(i.open(s.current.value),
                ()=>i.close(s.current.value))), [i]),
                ((e,t)=>{
                    if (e === t)
                        return 1;
                    if ("object" == typeof e && null !== e && "object" == typeof t && null !== t) {
                        let r = Object.keys(e)
                          , n = Object.keys(t);
                        if (r.length !== n.length)
                            return 0;
                        for (let n = 0; n < r.length; n++) {
                            let a = r[n];
                            if (e[a] !== t[a])
                                return 0
                        }
                        return 1
                    }
                    return 0
                }
                )(s.current.value, t) || (s.current.value = t,
                s.current.count += 1),
                b((()=>{
                    i.set(s.current.value)
                }
                ), [s.current.count])
            }
            function d(e) {
                let t = g.default.useContext(_);
                return e && !t && v("No scope found, consider adding <Provider> to app root"),
                t
            }
            function p(e, t) {
                return u(e, d(null == t ? void 0 : t.forceScope))
            }
            function m(e, t) {
                function n(e) {
                    let r = g.default.useRef(e)
                      , n = p(a);
                    b((()=>(i({
                        props: r.current,
                        state: a.getState()
                    }),
                    ()=>{
                        u({
                            props: r.current,
                            state: a.getState()
                        })
                    }
                    )), []);
                    let o = t(e, n);
                    return r.current = e,
                    o
                }
                let a;
                r.is.store(e) ? a = e : "object" == typeof e && null !== e ? a = r.combine(e) : v("shape should be a store or object with stores");
                let o = "Unknown";
                a && a.shortName && (o = a.shortName);
                let i = r.createEvent()
                  , u = r.createEvent();
                return n.mounted = i,
                n.unmounted = u,
                s(`${o}.View`, n)
            }
            function h(e, t) {
                let r = t ? e : e[0];
                (e=>{
                    (e=>{
                        if (!e)
                            throw Error("expect first argument be an object")
                    }
                    )(M(e) || (e=>"function" == typeof e)(e))
                }
                )(r);
                let n = r.or
                  , a = r.and;
                if (a) {
                    let r = t ? a : a[0];
                    if (M(r) && "and"in r) {
                        let r = h(a, t);
                        e = r[0],
                        n = {
                            ...n,
                            ...r[1]
                        }
                    } else
                        e = a
                }
                return [e, n]
            }
            function y(e, t) {
                let r, n = t && (e=>M(e) && (e.and || e.or))(t[0]) ? t : [{
                    and: t
                }], [[a,o],i] = h(n), s = {}, u = {}, l = i;
                return "string" == typeof a ? (u = {
                    name: a
                },
                (e=>M(e) && "sid"in e)(o) || (s = o || {})) : (e=>M(e) && ("domain"in e || "defaultState"in e || "name"in e))(a) && (u = a,
                s = a.defaultState || {},
                r = a.domain),
                {
                    hook: e,
                    domain: r,
                    defaultState: s,
                    mainConfig: u,
                    maybeConfig: l
                }
            }
            var g = o(t);
            let v = e=>{
                throw Error(e)
            }
              , b = "undefined" != typeof window ? g.default.useLayoutEffect : g.default.useEffect;
            const S = (e,t)=>t ? t.getState(e) : e.getState()
              , w = (e,t)=>e !== t
              , _ = g.default.createContext(null);
            let {Provider: k} = _
              , x = e=>console.error(`${e} is deprecated`)
              , C = e=>t=>{
                let r = e;
                return "function" != typeof e && (r = t,
                t = e),
                s(`Connect(${r.displayName || r.name || "Unknown"})`, (e=>g.default.createElement(r, {
                    ...e,
                    ...p(t)
                })))
            }
              , M = e=>"object" == typeof e && null !== e
              , O = (e,t={})=>(M(e) && (O(e.or, t),
            ((e,t)=>{
                for (let r in e)
                    t(e[r], r)
            }
            )(e, ((e,r)=>{
                (e=>void 0 === e)(e) || "or" === r || "and" === r || (t[r] = e)
            }
            )),
            O(e.and, t)),
            t);
            e.Provider = k,
            e.connect = C,
            e.createComponent = m,
            e.createContextComponent = (e,t,r)=>(x("createContextComponent"),
            s(`${e.shortName || "Unknown"}.ContextComponent`, (n=>{
                let a = g.default.useContext(t)
                  , o = p(e);
                return r(n, o, a)
            }
            ))),
            e.createGate = (...e)=>(({domain: e, defaultState: t, hook: n, mainConfig: a, maybeConfig: o})=>{
                function i(e) {
                    return n(i, e, d()),
                    null
                }
                let u = O({
                    or: o,
                    and: a
                })
                  , l = `${e ? `${e.compositeName.fullName}/` : ""}${u.name || "gate"}`
                  , c = r.createEvent({
                    name: `${l}.set`,
                    sid: u.sid ? `${u.sid}|set` : void 0
                })
                  , f = r.createEvent({
                    name: `${l}.open`,
                    sid: u.sid ? `${u.sid}|open` : void 0
                })
                  , p = r.createEvent({
                    name: `${l}.close`,
                    sid: u.sid ? `${u.sid}|close` : void 0
                })
                  , m = r.createStore(Boolean(0), {
                    name: `${l}.status`,
                    serialize: "ignore"
                }).on(f, (()=>Boolean(1))).on(p, (()=>Boolean(0)))
                  , h = r.createStore(t, {
                    name: `${l}.state`,
                    sid: u.sid
                }).on(c, ((e,t)=>t)).on(f, ((e,t)=>t)).reset(p);
                if (e) {
                    let {hooks: t} = e;
                    r.launch({
                        target: [t.store, t.store, t.event, t.event, t.event],
                        params: [m, h, f, p, c]
                    })
                }
                return i.open = f,
                i.close = p,
                i.status = m,
                i.state = h,
                i.set = c,
                s(`Gate:${l}`, i)
            }
            )(y(f, e)),
            e.createReactState = (e,t)=>(x("createReactState"),
            C(t)(e)),
            e.createStoreConsumer = e=>m(e, (({children: e},t)=>e(t))),
            e.useEvent = (e,t)=>((e,t)=>{
                if (!t)
                    return e;
                let n = r.is.unit(e) || "object" != typeof e ? {
                    event: e
                } : e;
                return g.default.useMemo((()=>{
                    if (r.is.unit(e))
                        return r.scopeBind(e, {
                            scope: t
                        });
                    let n = Array.isArray(e) ? [] : {};
                    for (let a in e)
                        n[a] = r.scopeBind(e[a], {
                            scope: t
                        });
                    return n
                }
                ), [t, ...Object.keys(n), ...Object.values(n)])
            }
            )(e, d(null == t ? void 0 : t.forceScope)),
            e.useGate = (e,t={},r)=>f(e, t, d(null == r ? void 0 : r.forceScope)),
            e.useList = (e,t,n)=>((e,t,n)=>{
                let a, o, i, l = [];
                "object" == typeof t && null !== t ? (t.keys && (l = t.keys),
                ({fn: a, getKey: o, placeholder: i} = t)) : a = t,
                r.is.store(e) || v("expect useList first argument to be a store"),
                "function" != typeof a && v("expect useList's renderItem to be a function"),
                Array.isArray(l) || v("expect useList's keys to be an array");
                let f = g.default.useMemo((()=>{
                    let t = s(`${e.shortName || "Unknown"}.Item`, (t=>{
                        let {index: r, keys: a, keyVal: o, value: i} = t;
                        if (d.current[1])
                            return d.current[0](i, o);
                        let s = c([{
                            store: e,
                            keys: [r, ...a],
                            fn: (e,t)=>e[t[0]]
                        }], n);
                        return d.current[0](s, r)
                    }
                    ));
                    return g.default.memo(t)
                }
                ), [e, n, !!o])
                  , d = g.default.useRef([a, o]);
                d.current = [a, o];
                let p = g.default.useMemo((()=>l), l);
                if (o) {
                    let t = u(e, n);
                    return 0 === t.length && i ? i : t.map((e=>{
                        let t = d.current[1](e);
                        return g.default.createElement(f, {
                            keyVal: t,
                            key: t,
                            keys: p,
                            value: e
                        })
                    }
                    ))
                }
                {
                    let t = c([{
                        store: e,
                        keys: [e],
                        fn: e=>e.length
                    }], n);
                    return 0 === t && i ? i : Array.from({
                        length: t
                    }, ((e,t)=>g.default.createElement(f, {
                        index: t,
                        key: t,
                        keys: p
                    })))
                }
            }
            )(e, t, d(null == n ? void 0 : n.forceScope)),
            e.useStore = p,
            e.useStoreMap = (e,t)=>c([e, t], d(null == e ? void 0 : e.forceScope)),
            e.useUnit = (e,t)=>l(e, d(null == t ? void 0 : t.forceScope)),
            Object.defineProperty(e, "__esModule", {
                value: 1
            })
        }
        )(t, r(667294), r(228033), r(61688), r(552798))
    },
    228033: (e,t)=>{
        function r(e, t) {
            for (let r in e)
                t(e[r], r)
        }
        function n(e, t) {
            e.forEach(t)
        }
        function a(e, t) {
            if (!e)
                throw Error(t)
        }
        function o(e, t) {
            let r = M(e).meta || {};
            te = {
                id: M(e).id,
                parent: te,
                value: e,
                template: r.template || ne(),
                sidRoot: r.sidRoot || te && te.sidRoot,
                meta: r
            };
            try {
                return t()
            } finally {
                re("region"),
                te = R(te)
            }
        }
        function i({node: e=[], from: t, source: r, parent: a=t || r, to: o, target: i, child: s=o || i, scope: u={}, meta: l={}, family: c={
            type: "regular"
        }, regional: f}={}) {
            let d = ie(a)
              , p = ie(c.links)
              , m = ie(c.owners)
              , h = [];
            n(e, (e=>e && G(h, e)));
            let y = {
                id: Z(),
                seq: h,
                next: ie(s),
                meta: l,
                scope: u,
                family: {
                    type: c.type || "crosslink",
                    links: p,
                    owners: m
                }
            };
            return n(p, (e=>G(O(e), y))),
            n(m, (e=>G(P(e), y))),
            n(d, (e=>G(e.next, y))),
            f && te && oe(j(te), [y]),
            y
        }
        function s(e, t, r) {
            let a, o = Ue, i = null, s = qe;
            if (e.target && (t = e.params,
            r = e.defer,
            a = e.meta,
            o = "page"in e ? e.page : o,
            e.stack && (i = e.stack),
            s = A(e) || s,
            e = e.target),
            s && qe && s !== qe && (qe = null),
            Array.isArray(e))
                for (let r = 0; r < e.length; r++)
                    $e("pure", o, M(e[r]), i, t[r], s, a);
            else
                $e("pure", o, M(e), i, t, s, a);
            if (r && !Fe)
                return;
            let u, l, c, f, d, p, m = {
                isRoot: Fe,
                currentPage: Ue,
                scope: qe,
                isWatch: Te,
                isPure: Be
            };
            Fe = 0;
            e: for (; f = Ae(); ) {
                let {idx: e, stack: t, type: r} = f;
                c = t.node,
                Ue = d = t.page,
                qe = A(t),
                d ? p = d.reg : qe && (p = qe.reg);
                let a = !!d
                  , o = !!qe
                  , i = {
                    fail: 0,
                    scope: c.scope
                };
                u = l = 0;
                for (let n = e; n < c.seq.length && !u; n++) {
                    let s = c.seq[n];
                    if (s.order) {
                        let {priority: a, barrierID: o} = s.order
                          , i = o ? d ? `${d.fullID}_ ${o}` : o : 0;
                        if (n !== e || r !== a) {
                            o ? Ie.has(i) || (Ie.add(i),
                            ze(n, t, a, o)) : ze(n, t, a);
                            continue e
                        }
                        o && Ie.delete(i)
                    }
                    switch (s.type) {
                    case "mov":
                        {
                            let e, r = s.data;
                            switch (r.from) {
                            case C:
                                e = j(t);
                                break;
                            case "a":
                            case "b":
                                e = t[r.from];
                                break;
                            case "value":
                                e = r.store;
                                break;
                            case "store":
                                if (p && !p[r.store.id])
                                    if (a) {
                                        let e = We(d, r.store.id);
                                        t.page = d = e,
                                        e ? p = e.reg : o ? (Ye(qe, r.store, 0, 1, r.softRead),
                                        p = qe.reg) : p = void 0
                                    } else
                                        o && Ye(qe, r.store, 0, 1, r.softRead);
                                e = Oe(p && p[r.store.id] || r.store)
                            }
                            switch (r.to) {
                            case C:
                                t.value = e;
                                break;
                            case "a":
                            case "b":
                                t[r.to] = e;
                                break;
                            case "store":
                                Ge(d, qe, c, r.target).current = e
                            }
                            break
                        }
                    case "compute":
                        let e = s.data;
                        if (e.fn) {
                            Te = "watch" === $(c, "op"),
                            Be = e.pure;
                            let r = e.safe ? (0,
                            e.fn)(j(t), i.scope, t) : Je(i, e.fn, t);
                            e.filter ? l = !r : t.value = r,
                            Te = m.isWatch,
                            Be = m.isPure
                        }
                    }
                    u = i.fail || l
                }
                if (Ve && Ve(t, i),
                !u) {
                    let e = j(t)
                      , r = A(t);
                    if (n(c.next, (n=>{
                        $e("child", d, n, t, e, r)
                    }
                    )),
                    r) {
                        $(c, "needFxCounter") && $e("child", d, r.fxCount, t, e, r),
                        $(c, "storeChange") && $e("child", d, r.storeChange, t, e, r),
                        $(c, "warnSerialize") && $e("child", d, r.warnSerializeNode, t, e, r);
                        let a = r.additionalLinks[c.id];
                        a && n(a, (n=>{
                            $e("child", d, n, t, e, r)
                        }
                        ))
                    }
                }
            }
            Fe = m.isRoot,
            Ue = m.currentPage,
            qe = A(m)
        }
        function u(e, t="combine") {
            let n = t + "("
              , a = ""
              , o = 0;
            return r(e, (e=>{
                o < 25 && (null != e && (n += a,
                n += I(e) ? D(e).fullName : e.toString()),
                o += 1,
                a = ", ")
            }
            )),
            n + ")"
        }
        function l(e, t) {
            let r, n, a = e;
            if (t) {
                let a = D(t);
                0 === e.length ? (r = a.path,
                n = a.fullName) : (r = a.path.concat([e]),
                n = 0 === a.fullName.length ? e : a.fullName + "/" + e)
            } else
                r = 0 === e.length ? [] : [e],
                n = e;
            return {
                shortName: a,
                fullName: n,
                path: r
            }
        }
        function c(e, t) {
            let r = t ? e : e[0];
            ce(r);
            let n = r.or
              , a = r.and;
            if (a) {
                let r = t ? a : a[0];
                if (se(r) && "and"in r) {
                    let r = c(a, t);
                    e = r[0],
                    n = {
                        ...n,
                        ...r[1]
                    }
                } else
                    e = a
            }
            return [e, n]
        }
        function f(e, ...t) {
            let r = ne();
            if (r) {
                let n = r.handlers[e];
                if (n)
                    return n(r, ...t)
            }
        }
        function d(e, t) {
            let r = Xe({
                or: t,
                and: "string" == typeof e ? {
                    name: e
                } : e
            })
              , n = (e,...t)=>(H(!$(n, "derived"), "call of derived event", "createEvent"),
            H(!Be, "unit call from pure function", "operators like sample"),
            Ue ? ((e,t,r,n)=>{
                let a = Ue
                  , o = null;
                if (t)
                    for (o = Ue; o && o.template !== t; )
                        o = R(o);
                Ke(o);
                let i = e.create(r, n);
                return Ke(a),
                i
            }
            )(n, a, e, t) : n.create(e, t))
              , a = ne()
              , o = Object.assign(n, {
                graphite: i({
                    meta: it(r.actualOp || "event", n, r),
                    regional: 1
                }),
                create: e=>(s({
                    target: n,
                    params: e,
                    scope: qe
                }),
                e),
                watch: e=>at(n, e),
                map: e=>st(n, x, e, [xe()]),
                filter: e=>st(n, "filter", e.fn ? e : e.fn, [xe(ye, 1)]),
                filterMap: e=>st(n, "filterMap", e, [xe(), _e((e=>!le(e)), 1)]),
                prepend(e) {
                    let t = d("* → " + n.shortName, {
                        parent: R(n)
                    });
                    return f("eventPrepend", M(t)),
                    nt(t, n, [xe()], "prepend", e),
                    ot(n, t),
                    t
                }
            });
            return null != r && r.domain && r.domain.hooks.event(o),
            z(o, "id", o.graphite.id),
            re(o.graphite),
            o
        }
        function p(e, t, r, o) {
            return de(r, t, "first argument"),
            a(ue(o), "second argument should be a function"),
            H(!$(e, "derived"), `${t} in derived store`, `${t} in store created via createStore`),
            n(Array.isArray(r) ? r : [r], (t=>{
                e.off(t),
                N(e).set(t, rt(ut(t, e, "on", he, o)))
            }
            )),
            e
        }
        function m(e, t) {
            let r = Xe(t)
              , o = Me(e)
              , u = d({
                named: "updates",
                derived: 1
            });
            f("storeBase", o);
            let l = o.id
              , c = {
                subscribers: new Map,
                updates: u,
                defaultState: e,
                stateRef: o,
                getState() {
                    let e, t = o;
                    if (Ue) {
                        let t = Ue;
                        for (; t && !t.reg[l]; )
                            t = R(t);
                        t && (e = t)
                    }
                    return !e && qe && (Ye(qe, o, 1),
                    e = qe),
                    e && (t = e.reg[l]),
                    Oe(t)
                },
                setState: e=>s({
                    target: c,
                    params: e,
                    defer: 1,
                    scope: qe
                }),
                reset: (...e)=>(n(e, (e=>p(c, ".reset", e, (()=>c.defaultState)))),
                c),
                on: (e,t)=>p(c, ".on", e, t),
                off(e) {
                    let t = N(c).get(e);
                    return t && (t(),
                    N(c).delete(e)),
                    c
                },
                map(e, t) {
                    let r, n;
                    se(e) && (r = e,
                    e = e.fn),
                    H(le(t), "second argument of store.map", "updateFilter");
                    let a = c.getState();
                    ne() ? n = null : le(a) || (n = e(a, t));
                    let i = m(n, {
                        name: `${c.shortName} → *`,
                        derived: 1,
                        and: r
                    })
                      , s = ut(c, i, x, me, e);
                    return Pe(E(i), {
                        type: x,
                        fn: e,
                        from: o
                    }),
                    E(i).noInit = 1,
                    f("storeMap", o, s),
                    i
                },
                watch(e, t) {
                    if (!t || !I(e)) {
                        let t = at(c, e);
                        return f("storeWatch", o, e) || e(c.getState()),
                        t
                    }
                    return a(ue(t), "second argument should be a function"),
                    e.watch((e=>t(c.getState(), e)))
                }
            }
              , h = it("store", c, r)
              , y = c.defaultConfig.updateFilter;
            c.graphite = i({
                scope: {
                    state: o,
                    fn: y
                },
                node: [_e(((e,t,r)=>(r.scope && !r.scope.reg[o.id] && (r.b = 1),
                e))), ke(o), _e(((e,t,{a: r, b: n})=>!le(e) && (e !== r || n)), 1), y && xe(me, 1), be({
                    from: C,
                    target: o
                })],
                child: u,
                meta: {
                    ...h,
                    defaultState: e
                },
                regional: 1
            }),
            z(c, "id", c.graphite.id),
            z(c, "rootStateRefId", l);
            let g = $(c, "serialize")
              , v = $(c, "derived")
              , b = "ignore" === g
              , S = $(c, "sid");
            return S && (z(c, "storeChange", 1),
            o.sid = S),
            S || b || v || z(c, "warnSerialize", 1),
            a(v || !le(e), "current state can't be undefined, use null instead"),
            oe(c, [u]),
            null != r && r.domain && r.domain.hooks.store(c),
            v || (c.reinit = d({
                named: "reinit"
            }),
            c.reset(c.reinit)),
            o.meta = c.graphite.meta,
            re(c.graphite),
            c
        }
        function h(...e) {
            let t, r, n;
            [e,n] = c(e);
            let o, i, s, u = e[e.length - 1];
            if (ue(u) ? (r = e.slice(0, -1),
            t = u) : r = e,
            1 === r.length) {
                let e = r[0];
                F(e) || (o = e,
                i = 1)
            }
            if (!i && (o = r,
            t)) {
                s = 1;
                let e = t;
                t = t=>e(...t)
            }
            return a(se(o), "shape should be an object"),
            lt(Array.isArray(o), !s, o, n, t)
        }
        function y() {
            let e = {};
            return e.req = new Promise(((t,r)=>{
                e.rs = t,
                e.rj = r
            }
            )),
            e.req.catch((()=>{}
            )),
            e
        }
        function g(e, t={}) {
            let r = Xe(ue(e) ? {
                handler: e
            } : e, t)
              , n = d(ue(e) ? {
                handler: e
            } : e, {
                ...t,
                actualOp: "effect"
            })
              , o = M(n);
            z(o, "op", n.kind = "effect"),
            n.use = e=>(a(ue(e), ".use argument should be a function"),
            h.scope.handler = e,
            n),
            n.use.getCurrent = ()=>h.scope.handler;
            let u = n.finally = d({
                named: "finally",
                derived: 1
            })
              , l = n.done = u.filterMap({
                named: "done",
                fn({status: e, params: t, result: r}) {
                    if ("done" === e)
                        return {
                            params: t,
                            result: r
                        }
                }
            })
              , c = n.fail = u.filterMap({
                named: "fail",
                fn({status: e, params: t, error: r}) {
                    if ("fail" === e)
                        return {
                            params: t,
                            error: r
                        }
                }
            })
              , f = n.doneData = l.map({
                named: "doneData",
                fn: ({result: e})=>e
            })
              , p = n.failData = c.map({
                named: "failData",
                fn: ({error: e})=>e
            })
              , h = i({
                scope: {
                    handler: n.defaultConfig.handler || (()=>a(0, `no handler used in ${n.getType()}`))
                },
                node: [_e(((e,t,r)=>{
                    let a = t.handler
                      , o = A(r);
                    if (o) {
                        let e = o.handlers.unitMap.get(n) || o.handlers.sidMap[n.sid];
                        e && (a = e)
                    }
                    return e.handler = a,
                    e
                }
                ), 0, 1), _e((({params: e, req: t, handler: r, args: n=[e]},a,o)=>{
                    let i = ft(o)
                      , s = dt(e, t, 1, u, o, i)
                      , l = dt(e, t, 0, u, o, i)
                      , [c,f] = ct(r, l, n);
                    c && (se(f) && ue(f.then) ? f.then(s, l) : s(f))
                }
                ), 0, 1)],
                meta: {
                    op: "fx",
                    fx: "runner"
                }
            });
            o.scope.runner = h,
            G(o.seq, _e(((e,{runner: t},r)=>{
                let n = R(r) ? {
                    params: e,
                    req: {
                        rs(e) {},
                        rj(e) {}
                    }
                } : e;
                return r.meta || (r.meta = {
                    fxID: ee()
                }),
                s({
                    target: t,
                    params: n,
                    defer: 1,
                    scope: A(r),
                    meta: r.meta
                }),
                n.params
            }
            ), 0, 1)),
            n.create = e=>{
                let t = y()
                  , r = {
                    params: e,
                    req: t
                };
                if (qe && !Te) {
                    let e = qe;
                    t.req.finally((()=>{
                        Le(e)
                    }
                    )).catch((()=>{}
                    ))
                }
                return s({
                    target: n,
                    params: r,
                    scope: qe
                }),
                t.req
            }
            ;
            let g = n.inFlight = m(0, {
                serialize: "ignore",
                named: ($(n, "name") || n.graphite.id) + ".inFlight"
            }).on(n, (e=>e + 1)).on(u, (e=>e - 1)).map({
                fn: e=>e,
                named: "inFlight"
            });
            z(u, "needFxCounter", "dec"),
            z(n, "needFxCounter", 1);
            let v = n.pending = g.map({
                fn: e=>e > 0,
                named: "pending"
            });
            return oe(n, [u, l, c, f, p, v, g]),
            null != r && r.domain && r.domain.hooks.effect(n),
            n
        }
        function v(e, t) {
            de(e, "merge", "first argument");
            let r = d({
                name: u(e, "merge"),
                derived: 1,
                and: t
            });
            return nt(e, r, [], "merge"),
            r
        }
        function b(e, t) {
            let r = 0;
            return n(mt, (n=>{
                n in e && (a(null != e[n], ht(t, n)),
                r = 1)
            }
            )),
            r
        }
        function S(e, t, r) {
            let a = [];
            !function e(o) {
                W(a, o) || (G(a, o),
                "store" === $(o, "op") && (r || $(o, "sid")) && t(o, $(o, "sid")),
                n(o.next, e),
                n(O(o), e),
                n(P(o), e))
            }(e)
        }
        function w(e, t) {
            let r = Array.isArray(e) ? new Map(e) : e
              , o = new Map
              , i = 0;
            if (r instanceof Map) {
                let e = {};
                return n(r, ((r,n)=>{
                    a(I(n), "Map key should be a unit"),
                    t && t(n, r),
                    n.sid && (n.sid in e && (i = 1),
                    e[n.sid] = r),
                    o.set(n, r)
                }
                )),
                {
                    sidMap: e,
                    unitMap: o,
                    hasSidDoubles: i
                }
            }
            return {
                sidMap: r,
                unitMap: o
            }
        }
        function _(e) {
            let t = ()=>e();
            return t.unsubscribe = ()=>e(),
            t
        }
        Object.defineProperty(t, "__esModule", {
            value: 1
        });
        let k = "undefined" != typeof Symbol && Symbol.observable || "@@observable"
          , x = "map"
          , C = "stack"
          , M = e=>e.graphite || e
          , O = e=>e.family.owners
          , P = e=>e.family.links
          , E = e=>e.stateRef
          , j = e=>e.value
          , N = e=>e.subscribers
          , R = e=>e.parent
          , A = e=>e.scope
          , $ = (e,t)=>M(e).meta[t]
          , z = (e,t,r)=>M(e).meta[t] = r
          , D = e=>e.compositeName
          , I = e=>(ue(e) || se(e)) && "kind"in e;
        const q = e=>t=>I(t) && t.kind === e;
        let F = q("store")
          , T = q("event")
          , B = q("effect")
          , U = q("domain")
          , L = q("scope");
        var K = {
            __proto__: null,
            unit: I,
            store: F,
            event: T,
            effect: B,
            domain: U,
            scope: L,
            attached: e=>B(e) && 1 == $(e, "attached")
        };
        let W = (e,t)=>e.includes(t)
          , V = (e,t)=>{
            let r = e.indexOf(t);
            -1 !== r && e.splice(r, 1)
        }
          , G = (e,t)=>e.push(t)
          , H = (e,t,r)=>!e && console.error(`${t} is deprecated ${r ? `, use ${r} instead` : ""}`);
        const Y = ()=>{
            let e = 0;
            return ()=>"" + ++e
        }
        ;
        let J, X = Y(), Q = Y(), Z = Y(), ee = Y(), te = null, re = e=>{
            J && J(e, te)
        }
        , ne = ()=>te && te.template, ae = e=>(e && te && te.sidRoot && (e = `${te.sidRoot}|${e}`),
        e), oe = (e,t)=>{
            let r = M(e);
            n(t, (e=>{
                let t = M(e);
                "domain" !== r.family.type && (t.family.type = "crosslink"),
                G(O(t), r),
                G(P(r), t)
            }
            ))
        }
        , ie = (e=[])=>(Array.isArray(e) ? e : [e]).flat().map(M), se = e=>"object" == typeof e && null !== e, ue = e=>"function" == typeof e, le = e=>void 0 === e, ce = e=>a(se(e) || ue(e), "expect first argument be an object");
        const fe = (e,t,r,n)=>a(!(!se(e) && !ue(e) || !("family"in e) && !("graphite"in e)), `${t}: expect ${r} to be a unit (store, event or effect)${n}`);
        let de = (e,t,r)=>{
            Array.isArray(e) ? n(e, ((e,n)=>fe(e, t, `${n} item of ${r}`, ""))) : fe(e, t, r, " or array of units")
        }
          , pe = (e,t,r="target")=>n(ie(t), (t=>H(!$(t, "derived"), `${e}: derived unit in "${r}"`, "createEvent/createStore")))
          , me = (e,{fn: t},{a: r})=>t(e, r)
          , he = (e,{fn: t},{a: r})=>t(r, e)
          , ye = (e,{fn: t})=>t(e);
        const ge = (e,t,r,n)=>{
            let a = {
                id: Q(),
                type: e,
                data: t
            };
            return r && (a.order = {
                priority: r
            },
            n && (a.order.barrierID = ++ve)),
            a
        }
        ;
        let ve = 0
          , be = ({from: e="store", store: t, target: r, to: n=(r ? "store" : C), batch: a, priority: o})=>ge("mov", {
            from: e,
            store: t,
            to: n,
            target: r
        }, o, a)
          , Se = ({fn: e, batch: t, priority: r, safe: n=0, filter: a=0, pure: o=0})=>ge("compute", {
            fn: e,
            safe: n,
            filter: a,
            pure: o
        }, r, t)
          , we = ({fn: e})=>Se({
            fn: e,
            priority: "effect"
        })
          , _e = (e,t,r)=>Se({
            fn: e,
            safe: 1,
            filter: t,
            priority: r && "effect"
        })
          , ke = (e,t,r)=>be({
            store: e,
            to: t ? C : "a",
            priority: r && "sampler",
            batch: 1
        })
          , xe = (e=ye,t)=>Se({
            fn: e,
            pure: 1,
            filter: t
        })
          , Ce = {
            mov: be,
            compute: Se,
            filter: ({fn: e, pure: t})=>Se({
                fn: e,
                filter: 1,
                pure: t
            }),
            run: we
        }
          , Me = e=>({
            id: Q(),
            current: e
        })
          , Oe = ({current: e})=>e
          , Pe = (e,t)=>{
            e.before || (e.before = []),
            G(e.before, t)
        }
          , Ee = null;
        const je = (e,t)=>{
            if (!e)
                return t;
            if (!t)
                return e;
            let r;
            return (e.v.type === t.v.type && e.v.id > t.v.id || De(e.v.type) > De(t.v.type)) && (r = e,
            e = t,
            t = r),
            r = je(e.r, t),
            e.r = e.l,
            e.l = r,
            e
        }
          , Ne = [];
        let Re = 0;
        for (; Re < 6; )
            G(Ne, {
                first: null,
                last: null,
                size: 0
            }),
            Re += 1;
        const Ae = ()=>{
            for (let e = 0; e < 6; e++) {
                let t = Ne[e];
                if (t.size > 0) {
                    if (3 === e || 4 === e) {
                        t.size -= 1;
                        let e = Ee.v;
                        return Ee = je(Ee.l, Ee.r),
                        e
                    }
                    1 === t.size && (t.last = null);
                    let r = t.first;
                    return t.first = r.r,
                    t.size -= 1,
                    r.v
                }
            }
        }
          , $e = (e,t,r,n,a,o,i)=>ze(0, {
            a: null,
            b: null,
            node: r,
            parent: n,
            value: a,
            page: t,
            scope: o,
            meta: i
        }, e)
          , ze = (e,t,r,n=0)=>{
            let a = De(r)
              , o = Ne[a]
              , i = {
                v: {
                    idx: e,
                    stack: t,
                    type: r,
                    id: n
                },
                l: null,
                r: null
            };
            3 === a || 4 === a ? Ee = je(Ee, i) : (0 === o.size ? o.first = i : o.last.r = i,
            o.last = i),
            o.size += 1
        }
          , De = e=>{
            switch (e) {
            case "child":
                return 0;
            case "pure":
                return 1;
            case "read":
                return 2;
            case "barrier":
                return 3;
            case "sampler":
                return 4;
            case "effect":
                return 5;
            default:
                return -1
            }
        }
          , Ie = new Set;
        let qe, Fe = 1, Te = 0, Be = 0, Ue = null, Le = e=>{
            qe = e
        }
        , Ke = e=>{
            Ue = e
        }
        ;
        const We = (e,t)=>{
            if (e) {
                for (; e && !e.reg[t]; )
                    e = R(e);
                if (e)
                    return e
            }
            return null
        }
        ;
        let Ve, Ge = (e,t,r,n,a)=>{
            let o = We(e, n.id);
            return o ? o.reg[n.id] : t ? (Ye(t, n, a),
            t.reg[n.id]) : n
        }
        ;
        const He = e=>e;
        let Ye = (e,t,r,a,o)=>{
            var i;
            let s = e.reg
              , u = t.sid
              , l = null == t || null === (i = t.meta) || void 0 === i ? void 0 : i.serialize
              , c = e.fromSerialize && "ignore" !== l && (null == l ? void 0 : l.read) || He;
            if (s[t.id])
                return;
            let f = {
                id: t.id,
                current: t.current,
                meta: t.meta
            };
            if (f.id in e.values.idMap)
                f.current = e.values.idMap[f.id];
            else if (u && u in e.values.sidMap && !(u in e.sidIdMap))
                f.current = c(e.values.sidMap[u]);
            else if (t.before && !o) {
                let o = 0
                  , i = r || !t.noInit || a;
                n(t.before, (t=>{
                    switch (t.type) {
                    case x:
                        {
                            let n = t.from;
                            if (n || t.fn) {
                                n && Ye(e, n, r, a);
                                let o = n && s[n.id].current;
                                i && (f.current = t.fn ? t.fn(o) : o)
                            }
                            break
                        }
                    case "field":
                        o || (o = 1,
                        f.current = Array.isArray(f.current) ? [...f.current] : {
                            ...f.current
                        }),
                        Ye(e, t.from, r, a),
                        i && (f.current[t.field] = s[s[t.from.id].id].current)
                    }
                }
                ))
            }
            u && (e.sidIdMap[u] = t.id),
            s[t.id] = f
        }
        ;
        const Je = (e,t,r)=>{
            try {
                return t(j(r), e.scope, r)
            } catch (t) {
                console.error(t),
                e.fail = 1,
                e.failReason = t
            }
        }
        ;
        let Xe = (e,t={})=>(se(e) && (Xe(e.or, t),
        r(e, ((e,r)=>{
            le(e) || "or" === r || "and" === r || (t[r] = e)
        }
        )),
        Xe(e.and, t)),
        t);
        const Qe = (e,t)=>{
            V(e.next, t),
            V(O(e), t),
            V(P(e), t)
        }
          , Ze = (e,t,r)=>{
            let n;
            e.next.length = 0,
            e.seq.length = 0,
            e.scope = null;
            let a = P(e);
            for (; n = a.pop(); )
                Qe(n, e),
                (t || r && "sample" !== $(e, "op") || "crosslink" === n.family.type) && Ze(n, t, "on" !== $(n, "op") && r);
            for (a = O(e); n = a.pop(); )
                Qe(n, e),
                r && "crosslink" === n.family.type && Ze(n, t, "on" !== $(n, "op") && r)
        }
          , et = e=>e.clear();
        let tt = (e,{deep: t}={})=>{
            let r = 0;
            if (e.ownerSet && e.ownerSet.delete(e),
            F(e))
                et(N(e));
            else if (U(e)) {
                r = 1;
                let t = e.history;
                et(t.events),
                et(t.effects),
                et(t.stores),
                et(t.domains)
            }
            Ze(M(e), !!t, r)
        }
          , rt = e=>{
            let t = ()=>tt(e);
            return t.unsubscribe = t,
            t
        }
          , nt = (e,t,r,n,a)=>i({
            node: r,
            parent: e,
            child: t,
            scope: {
                fn: a
            },
            meta: {
                op: n
            },
            family: {
                owners: [e, t],
                links: t
            },
            regional: 1
        })
          , at = (e,t)=>(a(ue(t), ".watch argument should be a function"),
        rt(i({
            scope: {
                fn: t
            },
            node: [we({
                fn: ye
            })],
            parent: e,
            meta: {
                op: "watch"
            },
            family: {
                owners: e
            },
            regional: 1
        })))
          , ot = (e,t,r="event")=>{
            R(e) && R(e).hooks[r](t)
        }
          , it = (e,t,r)=>{
            let n = Xe(r)
              , a = "domain" === e
              , o = X()
              , {sid: i=null, named: s=null, domain: u=null, parent: c=u} = n
              , f = s || n.name || (a ? "" : o)
              , d = l(f, c)
              , p = {
                op: t.kind = e,
                name: t.shortName = f,
                sid: t.sid = ae(i),
                named: s,
                unitId: t.id = o,
                serialize: n.serialize,
                derived: n.derived,
                config: n
            };
            if (t.parent = c,
            t.compositeName = d,
            t.defaultConfig = n,
            t.thru = e=>(H(0, "thru", "js pipe"),
            e(t)),
            t.getType = ()=>d.fullName,
            !a) {
                t.subscribe = e=>(ce(e),
                t.watch(ue(e) ? e : t=>e.next && e.next(t))),
                t[k] = ()=>t;
                let e = ne();
                e && (p.nativeTemplate = e)
            }
            return p
        }
        ;
        const st = (e,t,r,n)=>{
            let a;
            se(r) && (a = r,
            r = r.fn);
            let o = d({
                name: `${e.shortName} → *`,
                derived: 1,
                and: a
            });
            return nt(e, o, n, t, r),
            o
        }
          , ut = (e,t,r,n,a)=>{
            let o = E(t)
              , i = be({
                store: o,
                to: "a",
                priority: "read"
            });
            r === x && (i.data.softRead = 1);
            let s = [i, xe(n)];
            return f("storeOnMap", o, s, F(e) && E(e)),
            nt(e, t, s, r, a)
        }
          , lt = (e,t,n,o,i)=>{
            let s = e ? e=>[...e] : e=>({
                ...e
            })
              , l = e ? [] : {}
              , c = s(l)
              , d = Me(c)
              , p = Me(1);
            d.type = e ? "list" : "shape",
            d.noInit = 1,
            f("combineBase", d, p);
            let h = m(c, {
                name: u(n),
                derived: 1,
                and: o
            })
              , y = E(h);
            y.noInit = 1,
            z(h, "isCombine", 1);
            let g = ke(d);
            g.order = {
                priority: "barrier"
            };
            let v = [_e(((e,t,r)=>(r.scope && !r.scope.reg[d.id] && (r.c = 1),
            e))), g, be({
                store: p,
                to: "b"
            }), _e(((e,{key: r},n)=>{
                if (n.c || e !== n.a[r])
                    return t && n.b && (n.a = s(n.a)),
                    n.a[r] = e,
                    1
            }
            ), 1), be({
                from: "a",
                target: d
            }), be({
                from: "value",
                store: 0,
                target: p
            }), be({
                from: "value",
                store: 1,
                target: p,
                priority: "barrier",
                batch: 1
            }), ke(d, 1), i && xe()];
            return r(n, ((e,t)=>{
                if (!F(e))
                    return a(!I(e) && !le(e), `combine expects a store in a field ${t}`),
                    void (c[t] = l[t] = e);
                l[t] = e.defaultState,
                c[t] = e.getState();
                let r = nt(e, h, v, "combine", i);
                r.scope.key = t;
                let n = E(e);
                Pe(d, {
                    type: "field",
                    field: t,
                    from: n
                }),
                f("combineField", n, r)
            }
            )),
            h.defaultShape = n,
            Pe(y, {
                type: x,
                from: d,
                fn: i
            }),
            ne() || (h.defaultState = i ? y.current = i(c) : l),
            h
        }
        ;
        let ct = (e,t,r)=>{
            try {
                return [1, e(...r)]
            } catch (e) {
                return t(e),
                [0, null]
            }
        }
          , ft = e=>{
            let t = A(e)
              , r = {
                ref: t
            };
            return t && G(t.activeEffects, r),
            r
        }
          , dt = (e,t,r,n,a,o)=>i=>{
            o.ref && V(o.ref.activeEffects, o),
            s({
                target: [n, pt],
                params: [r ? {
                    status: "done",
                    params: e,
                    result: i
                } : {
                    status: "fail",
                    params: e,
                    error: i
                }, {
                    value: i,
                    fn: r ? t.rs : t.rj
                }],
                defer: 1,
                page: a.page,
                scope: o.ref,
                meta: a.meta
            })
        }
        ;
        const pt = i({
            node: [we({
                fn: ({fn: e, value: t})=>e(t)
            })],
            meta: {
                op: "fx",
                fx: "sidechain"
            }
        })
          , mt = ["source", "clock", "target"]
          , ht = (e,t)=>e + `: ${t} should be defined`;
        let yt = (e,t,r,n,o,i,s,u,l,c,p,y)=>{
            let g = !!o;
            a(!le(r) || !le(t), ht(e, "either source or clock"));
            let b = 0;
            le(r) ? b = 1 : I(r) || (r = h(r)),
            le(t) ? t = r : (de(t, e, "clock"),
            Array.isArray(t) && (t = v(t))),
            b && (r = t),
            u || s || (s = r.shortName);
            let S = "none";
            (p || n) && (I(n) ? S = "unit" : (a(ue(n), "`filter` should be function or unit"),
            S = "fn")),
            o ? (de(o, e, "target"),
            pe(e, o)) : "none" === S && c && F(r) && F(t) ? o = m(i ? i(Oe(E(r)), Oe(E(t))) : Oe(E(r)), {
                name: s,
                sid: y,
                or: u
            }) : (o = d({
                name: s,
                derived: 1,
                or: u
            }),
            f("sampleTarget", M(o)));
            let w = Me()
              , _ = [];
            if ("unit" === S) {
                let[r,a] = vt(n, o, t, w, e);
                _ = [...gt(a), ...gt(r)]
            }
            let[k,x] = vt(r, o, t, w, e)
              , O = nt(t, o, [f("sampleSourceLoader"), be({
                from: C,
                target: w
            }), ...gt(x), ke(k, 1, l), ..._, ke(w), "fn" === S && xe(((e,t,{a: r})=>n(e, r)), 1), i && xe(me), f("sampleSourceUpward", g)], e, i);
            return oe(r, [O]),
            Object.assign(O.meta, u, {
                joint: 1
            }),
            o
        }
        ;
        const gt = e=>[ke(e), _e(((e,t,{a: r})=>r), 1)]
          , vt = (e,t,r,n,a)=>{
            let o = F(e)
              , s = o ? E(e) : Me()
              , u = Me(o);
            return o || i({
                parent: e,
                node: [be({
                    from: C,
                    target: s
                }), be({
                    from: "value",
                    store: 1,
                    target: u
                })],
                family: {
                    owners: [e, t, r],
                    links: t
                },
                meta: {
                    op: a
                },
                regional: 1
            }),
            f("sampleSource", u, s, n),
            [s, u]
        }
          , bt = (e,t,r,n)=>{
            let a = e[t];
            a && s({
                target: a,
                params: Array.isArray(a) ? a.map((()=>r)) : r,
                defer: 1,
                stack: n
            })
        }
          , St = e=>e;
        t.allSettled = (e,{scope: t, params: r}={})=>{
            if (!I(e))
                return Promise.reject(new Error("first argument should be unit"));
            if (!(B(e) || T(e) || F(e) || L(e)))
                return Promise.reject(new Error("first argument accepts only effects, events, stores or scopes"));
            L(e) && (t = e);
            let n = y();
            n.parentFork = qe;
            let {fxCount: a} = t;
            G(a.scope.defers, n);
            let o = []
              , i = [];
            return L(e) || (G(o, e),
            G(i, B(e) ? {
                params: r,
                req: {
                    rs(e) {
                        n.value = {
                            status: "done",
                            value: e
                        }
                    },
                    rj(e) {
                        n.value = {
                            status: "fail",
                            value: e
                        }
                    }
                }
            } : r)),
            G(o, a),
            G(i, null),
            s({
                target: o,
                params: i,
                scope: t
            }),
            n.req
        }
        ,
        t.attach = e=>{
            let t;
            [e,t] = c(e, 1);
            let {source: r, effect: n, mapParams: a} = e
              , o = g(e, t);
            z(o, "attached", 1);
            let i, {runner: u} = M(o).scope, f = _e(((e,t,n)=>{
                let i, {params: u, req: l, handler: c} = e, f = o.finally, d = ft(n), p = dt(u, l, 0, f, n, d), m = n.a, h = B(c), y = 1;
                if (a ? [y,i] = ct(a, p, [u, m]) : i = r && h ? m : u,
                y) {
                    if (!h)
                        return e.args = [m, i],
                        1;
                    s({
                        target: c,
                        params: {
                            params: i,
                            req: {
                                rs: dt(u, l, 1, f, n, d),
                                rj: p
                            }
                        },
                        page: n.page,
                        defer: 1,
                        meta: n.meta
                    })
                }
            }
            ), 1, 1);
            if (r) {
                let e;
                F(r) ? (e = r,
                oe(e, [o])) : (e = h(r),
                oe(o, [e])),
                i = [ke(E(e)), f]
            } else
                i = [f];
            u.seq.splice(1, 0, ...i),
            o.use(n);
            let d = R(n);
            return d && (Object.assign(D(o), l(o.shortName, d)),
            o.defaultConfig.parent = d),
            ot(n, o, "effect"),
            o
        }
        ,
        t.clearNode = tt,
        t.combine = h,
        t.createApi = (...e)=>{
            let[[t,n],a] = c(e)
              , o = {};
            return r(n, ((e,r)=>{
                let n = o[r] = d(r, {
                    parent: R(t),
                    config: a
                });
                t.on(n, e),
                ot(t, n)
            }
            )),
            o
        }
        ,
        t.createDomain = function e(t, a) {
            let o = Xe({
                or: a,
                and: "string" == typeof t ? {
                    name: t
                } : t
            })
              , u = i({
                family: {
                    type: "domain"
                },
                regional: 1,
                parent: (null == o ? void 0 : o.domain) || (null == o ? void 0 : o.parent)
            })
              , l = {
                history: {},
                graphite: u,
                hooks: {}
            };
            u.meta = it("domain", l, {
                parent: (null == o ? void 0 : o.domain) || (null == o ? void 0 : o.parent),
                or: o
            }),
            r({
                Event: d,
                Effect: g,
                Store: m,
                Domain: e
            }, ((e,t)=>{
                let r = t.toLowerCase()
                  , a = d({
                    named: `on ${t}`
                });
                l.hooks[r] = a;
                let o = new Set;
                l.history[`${r}s`] = o,
                a.create = e=>(s(a, e),
                e),
                G(M(a).seq, _e(((e,t,r)=>(r.scope = null,
                e)))),
                a.watch((e=>{
                    oe(l, [e]),
                    o.add(e),
                    e.ownerSet || (e.ownerSet = o),
                    R(e) || (e.parent = l)
                }
                )),
                oe(l, [a]),
                l[`onCreate ${t}`] = e=>(n(o, e),
                a.watch(e)),
                l[`create ${t}`] = l[r] = (t,r)=>{
                    let n = Xe({
                        and: r,
                        or: t
                    });
                    return null != n && n.domain ? e(t, r) : a(e(t, {
                        parent: l,
                        or: n
                    }))
                }
            }
            ));
            let c = R(l);
            return c && r(l.hooks, ((e,t)=>nt(e, c.hooks[t]))),
            null != o && o.domain && o.domain.hooks.domain(l),
            l
        }
        ,
        t.createEffect = g,
        t.createEvent = d,
        t.createNode = i,
        t.createStore = m,
        t.createStoreObject = (...e)=>(H(0, "createStoreObject", "combine"),
        h(...e)),
        t.createWatch = ({unit: e, fn: t, scope: r})=>{
            let n = [Ce.run({
                fn: e=>t(e)
            })];
            if (r) {
                let t = i({
                    node: n
                })
                  , a = e.graphite.id
                  , o = r.additionalLinks
                  , s = o[a] || [];
                return o[a] = s,
                s.push(t),
                _((()=>{
                    let e = s.indexOf(t);
                    -1 !== e && s.splice(e, 1),
                    tt(t)
                }
                ))
            }
            {
                let t = i({
                    node: n,
                    parent: [e],
                    family: {
                        owners: e
                    }
                });
                return _((()=>{
                    tt(t)
                }
                ))
            }
        }
        ,
        t.fork = (e,t)=>{
            let r, o = e;
            U(e) && (r = e,
            o = t);
            let s = (e=>{
                let t = i({
                    scope: {
                        defers: [],
                        inFlight: 0,
                        fxID: 0
                    },
                    node: [_e(((e,t,r)=>{
                        R(r) ? "dec" === $(R(r).node, "needFxCounter") ? t.inFlight -= 1 : (t.inFlight += 1,
                        t.fxID += 1) : t.fxID += 1
                    }
                    )), Se({
                        priority: "sampler",
                        batch: 1
                    }), _e(((e,t)=>{
                        let {defers: r, fxID: a} = t;
                        t.inFlight > 0 || 0 === r.length || Promise.resolve().then((()=>{
                            t.fxID === a && n(r.splice(0, r.length), (e=>{
                                Le(e.parentFork),
                                e.rs(e.value)
                            }
                            ))
                        }
                        ))
                    }
                    ), 0, 1)]
                })
                  , r = i({
                    node: [_e(((e,t,r)=>{
                        let n = R(r);
                        if (n) {
                            let t = n.node;
                            if (!$(t, "isCombine") || R(n) && "combine" !== $(R(n).node, "op")) {
                                let n = A(r)
                                  , a = t.scope.state.id
                                  , o = $(t, "sid");
                                n.sidIdMap[o] = a,
                                n.values.sidMap[o] = e;
                                let i = $(t, "serialize");
                                i && n.sidSerializeSettings.set(o, "ignore" === i ? {
                                    ignore: 1
                                } : {
                                    ignore: 0,
                                    write: i.write
                                })
                            }
                        }
                    }
                    ))]
                })
                  , a = i({
                    node: [_e(((e,t,r)=>{
                        let n = A(r);
                        if (n) {
                            let e = R(r);
                            e && (!$(e.node, "isCombine") || R(e) && "combine" !== $(R(e).node, "op")) && (n.warnSerialize = 1)
                        }
                    }
                    ))]
                })
                  , o = {
                    cloneOf: e,
                    reg: {},
                    values: {
                        sidMap: {},
                        idMap: {}
                    },
                    sidIdMap: {},
                    sidSerializeSettings: new Map,
                    getState(e) {
                        if ("current"in e)
                            return Ge(Ue, o, null, e).current;
                        let t = M(e);
                        return Ge(Ue, o, t, t.scope.state, 1).current
                    },
                    kind: "scope",
                    graphite: i({
                        family: {
                            type: "domain",
                            links: [t, r, a]
                        },
                        meta: {
                            unit: "fork"
                        },
                        scope: {
                            forkInFlightCounter: t
                        }
                    }),
                    additionalLinks: {},
                    handlers: {
                        sidMap: {},
                        unitMap: new Map
                    },
                    fxCount: t,
                    storeChange: r,
                    warnSerializeNode: a,
                    activeEffects: []
                };
                return o
            }
            )(r);
            if (o) {
                let e = o.scope;
                if (e) {
                    let t = e.activeEffects;
                    e.activeEffects = [],
                    s.activeEffects = t,
                    n(t, (e=>e.ref = s))
                }
                if (o.values) {
                    let {sidMap: e, unitMap: t, hasSidDoubles: r} = w(o.values, (e=>a(F(e), "Values map can contain only stores as keys")));
                    Object.assign(s.values.sidMap, e),
                    n(t, ((e,t)=>{
                        s.values.idMap[t.stateRef.id] = e
                    }
                    )),
                    s.fromSerialize = !(Array.isArray(o.values) || o.values instanceof Map),
                    s.hasSidDoubles = r
                }
                o.handlers && (s.handlers = w(o.handlers, (e=>a(B(e), "Handlers map can contain only effects as keys"))))
            }
            return s
        }
        ,
        t.forward = e=>{
            let t = "forward"
              , [{from: r, to: n},a] = c(e, 1);
            return de(r, t, '"from"'),
            de(n, t, '"to"'),
            pe(t, n, "to"),
            rt(i({
                parent: r,
                child: n,
                meta: {
                    op: t,
                    config: a
                },
                family: {},
                regional: 1
            }))
        }
        ,
        t.fromObservable = e=>{
            ce(e);
            let t = k in e ? e[k]() : e;
            a(t.subscribe, "expect observable to have .subscribe");
            let r = d()
              , n = rt(r);
            return t.subscribe({
                next: r,
                error: n,
                complete: n
            }),
            r
        }
        ,
        t.guard = (...e)=>{
            let[[t,r],n] = c(e);
            return r || (r = t,
            t = r.source),
            b(r, "guard"),
            yt("guard", r.clock, t, r.filter, r.target, null, r.name, n, !r.greedy, 0, 1)
        }
        ,
        t.hydrate = (e,{values: t})=>{
            a(se(t), "values property should be an object");
            let {sidMap: r, unitMap: o} = w(t)
              , i = Object.getOwnPropertyNames(r)
              , u = {};
            n(o, ((e,t)=>{
                u[t.stateRef.id] = t
            }
            ));
            let l, c, f, d = [], p = [];
            L(e) ? (l = e,
            f = 1,
            a(l.cloneOf, "scope should be created from domain"),
            c = M(l.cloneOf)) : U(e) ? c = M(e) : a(0, "first argument of hydrate should be domain or scope"),
            S(c, ((e,t)=>{
                if (t && W(i, t)) {
                    G(d, e);
                    let n = $(e, "serialize");
                    n && "ignore" !== n && (r[t] = n.read(r[t])),
                    G(p, r[t])
                } else
                    e.scope.state.id in u && (G(d, e),
                    G(p, o.get(u[e.scope.state.id])))
            }
            ), 1),
            s({
                target: d,
                params: p,
                scope: l
            }),
            f && Object.assign(l.values.sidMap, r)
        }
        ,
        t.is = K,
        t.launch = s,
        t.merge = v,
        t.restore = (e,t,n)=>{
            if (F(e))
                return H(0, "restore($store)"),
                e;
            if (T(e) || B(e)) {
                let r = R(e)
                  , a = m(t, {
                    parent: r,
                    name: e.shortName,
                    and: n
                });
                return nt(B(e) ? e.doneData : e, a),
                r && r.hooks.store(a),
                a
            }
            let a = Array.isArray(e) ? [] : {};
            return r(e, ((e,t)=>a[t] = F(e) ? e : m(e, {
                name: t
            }))),
            a
        }
        ,
        t.sample = (...e)=>{
            let t, r, n, a, [[o,i,s],u] = c(e), l = 1;
            return le(i) && se(o) && b(o, "sample") && (i = o.clock,
            s = o.fn,
            l = !o.greedy,
            a = o.filter,
            t = o.target,
            r = o.name,
            n = o.sid,
            o = o.source),
            yt("sample", i, o, a, t, s, r, u, l, 1, 0, n)
        }
        ,
        t.scopeBind = (e,{scope: t, safe: r}={})=>{
            a(t || qe || r, "scopeBind cannot be called outside of forked .watch");
            let n = t || qe;
            return B(e) ? t=>{
                let r = y();
                return s({
                    target: e,
                    params: {
                        params: t,
                        req: r
                    },
                    scope: n
                }),
                r.req
            }
            : t=>(s({
                target: e,
                params: t,
                scope: n
            }),
            t)
        }
        ,
        t.serialize = (e,t={})=>{
            e.warnSerialize && console.error("There is a store without sid in this scope, its value is omitted"),
            a(!e.hasSidDoubles, "duplicate sid found in this scope");
            let n = t.ignore ? t.ignore.map((({sid: e})=>e)) : []
              , o = {};
            return r(e.values.sidMap, ((t,r)=>{
                var a;
                if (W(n, r))
                    return;
                let i = e.sidIdMap[r]
                  , s = null !== (a = e.sidSerializeSettings.get(r)) && void 0 !== a ? a : {
                    ignore: 0,
                    write: St
                };
                s.ignore || (o[r] = (0,
                s.write)(i && i in e.reg ? e.reg[i].current : t))
            }
            )),
            "onlyChanges"in t && !t.onlyChanges && (a(e.cloneOf, "scope should be created from domain"),
            S(M(e.cloneOf), ((t,r)=>{
                r in o || W(n, r) || $(t, "isCombine") || "ignore" === $(t, "serialize") || (o[r] = e.getState(t))
            }
            ))),
            o
        }
        ,
        t.setGraphInspector = e=>{
            J = e
        }
        ,
        t.setInspector = e=>{
            Ve = e
        }
        ,
        t.setStoreName = (e,t)=>{
            e.shortName = t,
            Object.assign(D(e), l(t, R(e)))
        }
        ,
        t.split = (...e)=>{
            let t, n, o = "split", [[s,u],l] = c(e), p = !u;
            p && (t = s.cases,
            u = s.match,
            n = s.clock,
            s = s.source);
            let m = F(u)
              , h = !I(u) && ue(u)
              , y = !m && !h && se(u);
            a(I(s), "source must be a unit"),
            t || (t = {}),
            p ? r(t, ((e,t)=>pe(o, e, `cases.${t}`))) : (a(y, "match should be an object"),
            r(u, ((e,r)=>t[r] = d({
                derived: 1,
                named: `cases.${r}`,
                and: l
            }))),
            t.__ = d({
                derived: 1,
                named: "cases.__",
                and: l
            }));
            let g, v = new Set([].concat(s, n || [], Object.values(t))), b = Object.keys(m || h ? t : u);
            if (m || h)
                m && v.add(u),
                g = [m && ke(E(u), 0, 1), Se({
                    safe: m,
                    filter: 1,
                    pure: !m,
                    fn(e, t, r) {
                        let n = String(m ? r.a : u(e));
                        bt(t, W(b, n) ? n : "__", e, r)
                    }
                })];
            else if (y) {
                let e = Me({});
                e.type = "shape";
                let t, n = [];
                r(u, ((r,a)=>{
                    if (I(r)) {
                        t = 1,
                        G(n, a),
                        v.add(r);
                        let o = nt(r, [], [ke(e), _e(((e,t,{a: r})=>r[a] = e))]);
                        if (F(r)) {
                            e.current[a] = r.getState();
                            let t = E(r);
                            Pe(e, {
                                from: t,
                                field: a,
                                type: "field"
                            }),
                            f("splitMatchStore", t, o)
                        }
                    }
                }
                )),
                t && f("splitBase", e),
                g = [t && ke(e, 0, 1), xe(((e,t,r)=>{
                    for (let a = 0; a < b.length; a++) {
                        let o = b[a];
                        if (W(n, o) ? r.a[o] : u[o](e))
                            return void bt(t, o, e, r)
                    }
                    bt(t, "__", e, r)
                }
                ), 1)]
            } else
                a(0, "expect match to be unit, function or object");
            let S = i({
                meta: {
                    op: o
                },
                parent: n ? [] : s,
                scope: t,
                node: g,
                family: {
                    owners: Array.from(v)
                },
                regional: 1
            });
            if (n && yt(o, n, s, null, S, null, o, l, 0, 0, 0),
            !p)
                return t
        }
        ,
        t.step = Ce,
        t.version = "22.8.6",
        t.withFactory = ({sid: e, name: t, loc: r, method: n, fn: a})=>o(i({
            meta: {
                sidRoot: ae(e),
                sid: e,
                name: t,
                loc: r,
                method: n,
                type: "factory"
            }
        }), a),
        t.withRegion = o
    }
    ,
    453934: (e,t,r)=>{
        "use strict";
        r.d(t, {
            castDraft: ()=>ne,
            createDraft: ()=>te,
            current: ()=>J,
            enableMapSet: ()=>Q,
            finishDraft: ()=>re,
            isDraft: ()=>m,
            produce: ()=>ee
        });
        var n = Object.defineProperty
          , a = Object.getOwnPropertySymbols
          , o = Object.prototype.hasOwnProperty
          , i = Object.prototype.propertyIsEnumerable
          , s = (e,t,r)=>t in e ? n(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r
          , u = (e,t)=>{
            for (var r in t || (t = {}))
                o.call(t, r) && s(e, r, t[r]);
            if (a)
                for (var r of a(t))
                    i.call(t, r) && s(e, r, t[r]);
            return e
        }
          , l = Symbol.for("immer-nothing")
          , c = Symbol.for("immer-draftable")
          , f = Symbol.for("immer-state");
        function d(e, ...t) {
            throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
        }
        var p = Object.getPrototypeOf;
        function m(e) {
            return !!e && !!e[f]
        }
        function h(e) {
            var t;
            return !!e && (g(e) || Array.isArray(e) || !!e[c] || !!(null == (t = e.constructor) ? void 0 : t[c]) || _(e) || k(e))
        }
        var y = Object.prototype.constructor.toString();
        function g(e) {
            if (!e || "object" != typeof e)
                return !1;
            const t = p(e);
            if (null === t)
                return !0;
            const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return r === Object || "function" == typeof r && Function.toString.call(r) === y
        }
        function v(e, t) {
            0 === b(e) ? Object.entries(e).forEach((([r,n])=>{
                t(r, n, e)
            }
            )) : e.forEach(((r,n)=>t(n, r, e)))
        }
        function b(e) {
            const t = e[f];
            return t ? t.type_ : Array.isArray(e) ? 1 : _(e) ? 2 : k(e) ? 3 : 0
        }
        function S(e, t) {
            return 2 === b(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
        }
        function w(e, t, r) {
            const n = b(e);
            2 === n ? e.set(t, r) : 3 === n ? e.add(r) : e[t] = r
        }
        function _(e) {
            return e instanceof Map
        }
        function k(e) {
            return e instanceof Set
        }
        function x(e) {
            return e.copy_ || e.base_
        }
        function C(e, t) {
            if (_(e))
                return new Map(e);
            if (k(e))
                return new Set(e);
            if (Array.isArray(e))
                return Array.prototype.slice.call(e);
            if (!t && g(e)) {
                if (!p(e)) {
                    const t = Object.create(null);
                    return Object.assign(t, e)
                }
                return u({}, e)
            }
            const r = Object.getOwnPropertyDescriptors(e);
            delete r[f];
            let n = Reflect.ownKeys(r);
            for (let t = 0; t < n.length; t++) {
                const a = n[t]
                  , o = r[a];
                !1 === o.writable && (o.writable = !0,
                o.configurable = !0),
                (o.get || o.set) && (r[a] = {
                    configurable: !0,
                    writable: !0,
                    enumerable: o.enumerable,
                    value: e[a]
                })
            }
            return Object.create(p(e), r)
        }
        function M(e, t=!1) {
            return P(e) || m(e) || !h(e) || (b(e) > 1 && (e.set = e.add = e.clear = e.delete = O),
            Object.freeze(e),
            t && v(e, ((e,t)=>M(t, !0)))),
            e
        }
        function O() {
            d(2)
        }
        function P(e) {
            return Object.isFrozen(e)
        }
        var E, j = {};
        function N(e) {
            const t = j[e];
            return t || d(0),
            t
        }
        function R(e, t) {
            j[e] || (j[e] = t)
        }
        function A() {
            return E
        }
        function $(e, t) {
            t && (N("Patches"),
            e.patches_ = [],
            e.inversePatches_ = [],
            e.patchListener_ = t)
        }
        function z(e) {
            D(e),
            e.drafts_.forEach(q),
            e.drafts_ = null
        }
        function D(e) {
            e === E && (E = e.parent_)
        }
        function I(e) {
            return E = {
                drafts_: [],
                parent_: E,
                immer_: e,
                canAutoFreeze_: !0,
                unfinalizedDrafts_: 0
            }
        }
        function q(e) {
            const t = e[f];
            0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0
        }
        function F(e, t) {
            t.unfinalizedDrafts_ = t.drafts_.length;
            const r = t.drafts_[0];
            return void 0 !== e && e !== r ? (r[f].modified_ && (z(t),
            d(4)),
            h(e) && (e = T(t, e),
            t.parent_ || U(t, e)),
            t.patches_ && N("Patches").generateReplacementPatches_(r[f].base_, e, t.patches_, t.inversePatches_)) : e = T(t, r, []),
            z(t),
            t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
            e !== l ? e : void 0
        }
        function T(e, t, r) {
            if (P(t))
                return t;
            const n = t[f];
            if (!n)
                return v(t, ((a,o)=>B(e, n, t, a, o, r))),
                t;
            if (n.scope_ !== e)
                return t;
            if (!n.modified_)
                return U(e, n.base_, !0),
                n.base_;
            if (!n.finalized_) {
                n.finalized_ = !0,
                n.scope_.unfinalizedDrafts_--;
                const t = n.copy_;
                let a = t
                  , o = !1;
                3 === n.type_ && (a = new Set(t),
                t.clear(),
                o = !0),
                v(a, ((a,i)=>B(e, n, t, a, i, r, o))),
                U(e, t, !1),
                r && e.patches_ && N("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_)
            }
            return n.copy_
        }
        function B(e, t, r, n, a, o, i) {
            if (m(a)) {
                const i = T(e, a, o && t && 3 !== t.type_ && !S(t.assigned_, n) ? o.concat(n) : void 0);
                if (w(r, n, i),
                !m(i))
                    return;
                e.canAutoFreeze_ = !1
            } else
                i && r.add(a);
            if (h(a) && !P(a)) {
                if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
                    return;
                T(e, a),
                t && t.scope_.parent_ || U(e, a)
            }
        }
        function U(e, t, r=!1) {
            !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && M(t, r)
        }
        var L = {
            get(e, t) {
                if (t === f)
                    return e;
                const r = x(e);
                if (!S(r, t))
                    return function(e, t, r) {
                        var n;
                        const a = V(t, r);
                        return a ? "value"in a ? a.value : null == (n = a.get) ? void 0 : n.call(e.draft_) : void 0
                    }(e, r, t);
                const n = r[t];
                return e.finalized_ || !h(n) ? n : n === W(e.base_, t) ? (H(e),
                e.copy_[t] = Y(n, e)) : n
            },
            has: (e,t)=>t in x(e),
            ownKeys: e=>Reflect.ownKeys(x(e)),
            set(e, t, r) {
                const n = V(x(e), t);
                if (null == n ? void 0 : n.set)
                    return n.set.call(e.draft_, r),
                    !0;
                if (!e.modified_) {
                    const n = W(x(e), t)
                      , i = null == n ? void 0 : n[f];
                    if (i && i.base_ === r)
                        return e.copy_[t] = r,
                        e.assigned_[t] = !1,
                        !0;
                    if (((a = r) === (o = n) ? 0 !== a || 1 / a == 1 / o : a != a && o != o) && (void 0 !== r || S(e.base_, t)))
                        return !0;
                    H(e),
                    G(e)
                }
                var a, o;
                return e.copy_[t] === r && (void 0 !== r || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r,
                e.assigned_[t] = !0),
                !0
            },
            deleteProperty: (e,t)=>(void 0 !== W(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1,
            H(e),
            G(e)) : delete e.assigned_[t],
            e.copy_ && delete e.copy_[t],
            !0),
            getOwnPropertyDescriptor(e, t) {
                const r = x(e)
                  , n = Reflect.getOwnPropertyDescriptor(r, t);
                return n ? {
                    writable: !0,
                    configurable: 1 !== e.type_ || "length" !== t,
                    enumerable: n.enumerable,
                    value: r[t]
                } : n
            },
            defineProperty() {
                d(11)
            },
            getPrototypeOf: e=>p(e.base_),
            setPrototypeOf() {
                d(12)
            }
        }
          , K = {};
        function W(e, t) {
            const r = e[f];
            return (r ? x(r) : e)[t]
        }
        function V(e, t) {
            if (!(t in e))
                return;
            let r = p(e);
            for (; r; ) {
                const e = Object.getOwnPropertyDescriptor(r, t);
                if (e)
                    return e;
                r = p(r)
            }
        }
        function G(e) {
            e.modified_ || (e.modified_ = !0,
            e.parent_ && G(e.parent_))
        }
        function H(e) {
            e.copy_ || (e.copy_ = C(e.base_, e.scope_.immer_.useStrictShallowCopy_))
        }
        v(L, ((e,t)=>{
            K[e] = function() {
                return arguments[0] = arguments[0][0],
                t.apply(this, arguments)
            }
        }
        )),
        K.deleteProperty = function(e, t) {
            return K.set.call(this, e, t, void 0)
        }
        ,
        K.set = function(e, t, r) {
            return L.set.call(this, e[0], t, r, e[0])
        }
        ;
        function Y(e, t) {
            const r = _(e) ? N("MapSet").proxyMap_(e, t) : k(e) ? N("MapSet").proxySet_(e, t) : function(e, t) {
                const r = Array.isArray(e)
                  , n = {
                    type_: r ? 1 : 0,
                    scope_: t ? t.scope_ : A(),
                    modified_: !1,
                    finalized_: !1,
                    assigned_: {},
                    parent_: t,
                    base_: e,
                    draft_: null,
                    copy_: null,
                    revoke_: null,
                    isManual_: !1
                };
                let a = n
                  , o = L;
                r && (a = [n],
                o = K);
                const {revoke: i, proxy: s} = Proxy.revocable(a, o);
                return n.draft_ = s,
                n.revoke_ = i,
                s
            }(e, t);
            return (t ? t.scope_ : A()).drafts_.push(r),
            r
        }
        function J(e) {
            return m(e) || d(10),
            X(e)
        }
        function X(e) {
            if (!h(e) || P(e))
                return e;
            const t = e[f];
            let r;
            if (t) {
                if (!t.modified_)
                    return t.base_;
                t.finalized_ = !0,
                r = C(e, t.scope_.immer_.useStrictShallowCopy_)
            } else
                r = C(e, !0);
            return v(r, ((e,t)=>{
                w(r, e, X(t))
            }
            )),
            t && (t.finalized_ = !1),
            r
        }
        function Q() {
            class e extends Map {
                constructor(e, t) {
                    super(),
                    this[f] = {
                        type_: 2,
                        parent_: t,
                        scope_: t ? t.scope_ : A(),
                        modified_: !1,
                        finalized_: !1,
                        copy_: void 0,
                        assigned_: void 0,
                        base_: e,
                        draft_: this,
                        isManual_: !1,
                        revoked_: !1
                    }
                }
                get size() {
                    return x(this[f]).size
                }
                has(e) {
                    return x(this[f]).has(e)
                }
                set(e, r) {
                    const n = this[f];
                    return a(n),
                    x(n).has(e) && x(n).get(e) === r || (t(n),
                    G(n),
                    n.assigned_.set(e, !0),
                    n.copy_.set(e, r),
                    n.assigned_.set(e, !0)),
                    this
                }
                delete(e) {
                    if (!this.has(e))
                        return !1;
                    const r = this[f];
                    return a(r),
                    t(r),
                    G(r),
                    r.base_.has(e) ? r.assigned_.set(e, !1) : r.assigned_.delete(e),
                    r.copy_.delete(e),
                    !0
                }
                clear() {
                    const e = this[f];
                    a(e),
                    x(e).size && (t(e),
                    G(e),
                    e.assigned_ = new Map,
                    v(e.base_, (t=>{
                        e.assigned_.set(t, !1)
                    }
                    )),
                    e.copy_.clear())
                }
                forEach(e, t) {
                    x(this[f]).forEach(((r,n,a)=>{
                        e.call(t, this.get(n), n, this)
                    }
                    ))
                }
                get(e) {
                    const r = this[f];
                    a(r);
                    const n = x(r).get(e);
                    if (r.finalized_ || !h(n))
                        return n;
                    if (n !== r.base_.get(e))
                        return n;
                    const o = Y(n, r);
                    return t(r),
                    r.copy_.set(e, o),
                    o
                }
                keys() {
                    return x(this[f]).keys()
                }
                values() {
                    const e = this.keys();
                    return {
                        [Symbol.iterator]: ()=>this.values(),
                        next: ()=>{
                            const t = e.next();
                            if (t.done)
                                return t;
                            return {
                                done: !1,
                                value: this.get(t.value)
                            }
                        }
                    }
                }
                entries() {
                    const e = this.keys();
                    return {
                        [Symbol.iterator]: ()=>this.entries(),
                        next: ()=>{
                            const t = e.next();
                            if (t.done)
                                return t;
                            const r = this.get(t.value);
                            return {
                                done: !1,
                                value: [t.value, r]
                            }
                        }
                    }
                }
                [Symbol.iterator]() {
                    return this.entries()
                }
            }
            function t(e) {
                e.copy_ || (e.assigned_ = new Map,
                e.copy_ = new Map(e.base_))
            }
            class r extends Set {
                constructor(e, t) {
                    super(),
                    this[f] = {
                        type_: 3,
                        parent_: t,
                        scope_: t ? t.scope_ : A(),
                        modified_: !1,
                        finalized_: !1,
                        copy_: void 0,
                        base_: e,
                        draft_: this,
                        drafts_: new Map,
                        revoked_: !1,
                        isManual_: !1
                    }
                }
                get size() {
                    return x(this[f]).size
                }
                has(e) {
                    const t = this[f];
                    return a(t),
                    t.copy_ ? !!t.copy_.has(e) || !(!t.drafts_.has(e) || !t.copy_.has(t.drafts_.get(e))) : t.base_.has(e)
                }
                add(e) {
                    const t = this[f];
                    return a(t),
                    this.has(e) || (n(t),
                    G(t),
                    t.copy_.add(e)),
                    this
                }
                delete(e) {
                    if (!this.has(e))
                        return !1;
                    const t = this[f];
                    return a(t),
                    n(t),
                    G(t),
                    t.copy_.delete(e) || !!t.drafts_.has(e) && t.copy_.delete(t.drafts_.get(e))
                }
                clear() {
                    const e = this[f];
                    a(e),
                    x(e).size && (n(e),
                    G(e),
                    e.copy_.clear())
                }
                values() {
                    const e = this[f];
                    return a(e),
                    n(e),
                    e.copy_.values()
                }
                entries() {
                    const e = this[f];
                    return a(e),
                    n(e),
                    e.copy_.entries()
                }
                keys() {
                    return this.values()
                }
                [Symbol.iterator]() {
                    return this.values()
                }
                forEach(e, t) {
                    const r = this.values();
                    let n = r.next();
                    for (; !n.done; )
                        e.call(t, n.value, n.value, this),
                        n = r.next()
                }
            }
            function n(e) {
                e.copy_ || (e.copy_ = new Set,
                e.base_.forEach((t=>{
                    if (h(t)) {
                        const r = Y(t, e);
                        e.drafts_.set(t, r),
                        e.copy_.add(r)
                    } else
                        e.copy_.add(t)
                }
                )))
            }
            function a(e) {
                e.revoked_ && d(3, JSON.stringify(x(e)))
            }
            R("MapSet", {
                proxyMap_: function(t, r) {
                    return new e(t,r)
                },
                proxySet_: function(e, t) {
                    return new r(e,t)
                }
            })
        }
        var Z = new class {
            constructor(e) {
                this.autoFreeze_ = !0,
                this.useStrictShallowCopy_ = !1,
                this.produce = (e,t,r)=>{
                    if ("function" == typeof e && "function" != typeof t) {
                        const r = t;
                        t = e;
                        const n = this;
                        return function(e=r, ...a) {
                            return n.produce(e, (e=>t.call(this, e, ...a)))
                        }
                    }
                    let n;
                    if ("function" != typeof t && d(6),
                    void 0 !== r && "function" != typeof r && d(7),
                    h(e)) {
                        const a = I(this)
                          , o = Y(e, void 0);
                        let i = !0;
                        try {
                            n = t(o),
                            i = !1
                        } finally {
                            i ? z(a) : D(a)
                        }
                        return $(a, r),
                        F(n, a)
                    }
                    if (!e || "object" != typeof e) {
                        if (n = t(e),
                        void 0 === n && (n = e),
                        n === l && (n = void 0),
                        this.autoFreeze_ && M(n, !0),
                        r) {
                            const t = []
                              , a = [];
                            N("Patches").generateReplacementPatches_(e, n, t, a),
                            r(t, a)
                        }
                        return n
                    }
                    d(1)
                }
                ,
                this.produceWithPatches = (e,t)=>{
                    if ("function" == typeof e)
                        return (t,...r)=>this.produceWithPatches(t, (t=>e(t, ...r)));
                    let r, n;
                    return [this.produce(e, t, ((e,t)=>{
                        r = e,
                        n = t
                    }
                    )), r, n]
                }
                ,
                "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze),
                "boolean" == typeof (null == e ? void 0 : e.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
            }
            createDraft(e) {
                h(e) || d(8),
                m(e) && (e = J(e));
                const t = I(this)
                  , r = Y(e, void 0);
                return r[f].isManual_ = !0,
                D(t),
                r
            }
            finishDraft(e, t) {
                const r = e && e[f];
                r && r.isManual_ || d(9);
                const {scope_: n} = r;
                return $(n, t),
                F(void 0, n)
            }
            setAutoFreeze(e) {
                this.autoFreeze_ = e
            }
            setUseStrictShallowCopy(e) {
                this.useStrictShallowCopy_ = e
            }
            applyPatches(e, t) {
                let r;
                for (r = t.length - 1; r >= 0; r--) {
                    const n = t[r];
                    if (0 === n.path.length && "replace" === n.op) {
                        e = n.value;
                        break
                    }
                }
                r > -1 && (t = t.slice(r + 1));
                const n = N("Patches").applyPatches_;
                return m(e) ? n(e, t) : this.produce(e, (e=>n(e, t)))
            }
        }
          , ee = Z.produce
          , te = (Z.produceWithPatches.bind(Z),
        Z.setAutoFreeze.bind(Z),
        Z.setUseStrictShallowCopy.bind(Z),
        Z.applyPatches.bind(Z),
        Z.createDraft.bind(Z))
          , re = Z.finishDraft.bind(Z);
        function ne(e) {
            return e
        }
    }
    ,
    306526: (e,t,r)=>{
        "use strict";
        r.d(t, {
            ReactReduxContext: ()=>n
        });
        var n = r(667294).createContext(null)
    }
    ,
    60682: (e,t,r)=>{
        "use strict";
        r.d(t, {
            default: ()=>f
        });
        var n = r(497326)
          , a = r(894578)
          , o = r(667294)
          , i = r(45697)
          , s = r.n(i)
          , u = r(306526)
          , l = r(286496)
          , c = function(e) {
            function t(t) {
                var r;
                r = e.call(this, t) || this;
                var a = t.store;
                r.notifySubscribers = r.notifySubscribers.bind((0,
                n.default)(r));
                var o = new l.default(a);
                return o.onStateChange = r.notifySubscribers,
                r.state = {
                    store: a,
                    subscription: o
                },
                r.previousState = a.getState(),
                r
            }
            (0,
            a.default)(t, e);
            var r = t.prototype;
            return r.componentDidMount = function() {
                this._isMounted = !0,
                this.state.subscription.trySubscribe(),
                this.previousState !== this.props.store.getState() && this.state.subscription.notifyNestedSubs()
            }
            ,
            r.componentWillUnmount = function() {
                this.unsubscribe && this.unsubscribe(),
                this.state.subscription.tryUnsubscribe(),
                this._isMounted = !1
            }
            ,
            r.componentDidUpdate = function(e) {
                if (this.props.store !== e.store) {
                    this.state.subscription.tryUnsubscribe();
                    var t = new l.default(this.props.store);
                    t.onStateChange = this.notifySubscribers,
                    this.setState({
                        store: this.props.store,
                        subscription: t
                    })
                }
            }
            ,
            r.notifySubscribers = function() {
                this.state.subscription.notifyNestedSubs()
            }
            ,
            r.render = function() {
                var e = this.props.context || u.ReactReduxContext;
                return o.createElement(e.Provider, {
                    value: this.state
                }, this.props.children)
            }
            ,
            t
        }(o.Component);
        c.propTypes = {
            store: s().shape({
                subscribe: s().func.isRequired,
                dispatch: s().func.isRequired,
                getState: s().func.isRequired
            }),
            context: s().object,
            children: s().any
        };
        const f = c
    }
    ,
    726685: (e,t,r)=>{
        "use strict";
        r.d(t, {
            default: ()=>v
        });
        var n = r(487462)
          , a = r(263366)
          , o = r(108679)
          , i = r.n(o)
          , s = r(441143)
          , u = r.n(s)
          , l = r(667294)
          , c = r(659864)
          , f = r(286496)
          , d = r(306526)
          , p = []
          , m = [null, null];
        function h(e, t) {
            var r = e[1];
            return [t.payload, r + 1]
        }
        var y = function() {
            return [null, 0]
        }
          , g = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? l.useLayoutEffect : l.useEffect;
        function v(e, t) {
            void 0 === t && (t = {});
            var r = t
              , o = r.getDisplayName
              , s = void 0 === o ? function(e) {
                return "ConnectAdvanced(" + e + ")"
            }
            : o
              , v = r.methodName
              , b = void 0 === v ? "connectAdvanced" : v
              , S = r.renderCountProp
              , w = void 0 === S ? void 0 : S
              , _ = r.shouldHandleStateChanges
              , k = void 0 === _ || _
              , x = r.storeKey
              , C = void 0 === x ? "store" : x
              , M = r.withRef
              , O = void 0 !== M && M
              , P = r.forwardRef
              , E = void 0 !== P && P
              , j = r.context
              , N = void 0 === j ? d.ReactReduxContext : j
              , R = (0,
            a.default)(r, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);
            u()(void 0 === w, "renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"),
            u()(!O, "withRef is removed. To access the wrapped instance, use a ref on the connected component");
            u()("store" === C, "storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");
            var A = N;
            return function(t) {
                var r = t.displayName || t.name || "Component"
                  , o = s(r)
                  , d = (0,
                n.default)({}, R, {
                    getDisplayName: s,
                    methodName: b,
                    renderCountProp: w,
                    shouldHandleStateChanges: k,
                    storeKey: C,
                    displayName: o,
                    wrappedComponentName: r,
                    WrappedComponent: t
                })
                  , v = R.pure;
                var S = v ? l.useMemo : function(e) {
                    return e()
                }
                ;
                function _(r) {
                    var i = (0,
                    l.useMemo)((function() {
                        var e = r.forwardedRef
                          , t = (0,
                        a.default)(r, ["forwardedRef"]);
                        return [r.context, e, t]
                    }
                    ), [r])
                      , s = i[0]
                      , v = i[1]
                      , b = i[2]
                      , w = (0,
                    l.useMemo)((function() {
                        return s && s.Consumer && (0,
                        c.isContextConsumer)(l.createElement(s.Consumer, null)) ? s : A
                    }
                    ), [s, A])
                      , _ = (0,
                    l.useContext)(w)
                      , x = Boolean(r.store)
                      , C = Boolean(_) && Boolean(_.store);
                    u()(x || C, 'Could not find "store" in the context of "' + o + '". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ' + o + " in connect options.");
                    var M = r.store || _.store
                      , O = (0,
                    l.useMemo)((function() {
                        return function(t) {
                            return e(t.dispatch, d)
                        }(M)
                    }
                    ), [M])
                      , P = (0,
                    l.useMemo)((function() {
                        if (!k)
                            return m;
                        var e = new f.default(M,x ? null : _.subscription)
                          , t = e.notifyNestedSubs.bind(e);
                        return [e, t]
                    }
                    ), [M, x, _])
                      , E = P[0]
                      , j = P[1]
                      , N = (0,
                    l.useMemo)((function() {
                        return x ? _ : (0,
                        n.default)({}, _, {
                            subscription: E
                        })
                    }
                    ), [x, _, E])
                      , R = (0,
                    l.useReducer)(h, p, y)
                      , $ = R[0][0]
                      , z = R[1];
                    if ($ && $.error)
                        throw $.error;
                    var D = (0,
                    l.useRef)()
                      , I = (0,
                    l.useRef)(b)
                      , q = (0,
                    l.useRef)()
                      , F = (0,
                    l.useRef)(!1)
                      , T = S((function() {
                        return q.current && b === I.current ? q.current : O(M.getState(), b)
                    }
                    ), [M, $, b]);
                    g((function() {
                        I.current = b,
                        D.current = T,
                        F.current = !1,
                        q.current && (q.current = null,
                        j())
                    }
                    )),
                    g((function() {
                        if (k) {
                            var e = !1
                              , t = null
                              , r = function() {
                                if (!e) {
                                    var r, n, a = M.getState();
                                    try {
                                        r = O(a, I.current)
                                    } catch (e) {
                                        n = e,
                                        t = e
                                    }
                                    n || (t = null),
                                    r === D.current ? F.current || j() : (D.current = r,
                                    q.current = r,
                                    F.current = !0,
                                    z({
                                        type: "STORE_UPDATED",
                                        payload: {
                                            latestStoreState: a,
                                            error: n
                                        }
                                    }))
                                }
                            };
                            E.onStateChange = r,
                            E.trySubscribe(),
                            r();
                            return function() {
                                if (e = !0,
                                E.tryUnsubscribe(),
                                t)
                                    throw t
                            }
                        }
                    }
                    ), [M, E, O]);
                    var B = (0,
                    l.useMemo)((function() {
                        return l.createElement(t, (0,
                        n.default)({}, T, {
                            ref: v
                        }))
                    }
                    ), [v, t, T]);
                    return (0,
                    l.useMemo)((function() {
                        return k ? l.createElement(w.Provider, {
                            value: N
                        }, B) : B
                    }
                    ), [w, B, N])
                }
                var x = v ? l.memo(_) : _;
                if (x.WrappedComponent = t,
                x.displayName = o,
                E) {
                    var M = l.forwardRef((function(e, t) {
                        return l.createElement(x, (0,
                        n.default)({}, e, {
                            forwardedRef: t
                        }))
                    }
                    ));
                    return M.displayName = o,
                    M.WrappedComponent = t,
                    i()(M, t)
                }
                return i()(x, t)
            }
        }
    }
    ,
    757034: (e,t,r)=>{
        "use strict";
        r.d(t, {
            default: ()=>p
        });
        var n = r(487462)
          , a = r(263366)
          , o = r(726685)
          , i = r(235067)
          , s = r(955112)
          , u = r(611743)
          , l = r(105532)
          , c = r(538548);
        function f(e, t, r) {
            for (var n = t.length - 1; n >= 0; n--) {
                var a = t[n](e);
                if (a)
                    return a
            }
            return function(t, n) {
                throw new Error("Invalid value of type " + typeof e + " for " + r + " argument when connecting component " + n.wrappedComponentName + ".")
            }
        }
        function d(e, t) {
            return e === t
        }
        const p = (y = (h = void 0 === m ? {} : m).connectHOC,
        g = void 0 === y ? o.default : y,
        v = h.mapStateToPropsFactories,
        b = void 0 === v ? u.default : v,
        S = h.mapDispatchToPropsFactories,
        w = void 0 === S ? s.default : S,
        _ = h.mergePropsFactories,
        k = void 0 === _ ? l.default : _,
        x = h.selectorFactory,
        C = void 0 === x ? c.default : x,
        function(e, t, r, o) {
            void 0 === o && (o = {});
            var s = o
              , u = s.pure
              , l = void 0 === u || u
              , c = s.areStatesEqual
              , p = void 0 === c ? d : c
              , m = s.areOwnPropsEqual
              , h = void 0 === m ? i.default : m
              , y = s.areStatePropsEqual
              , v = void 0 === y ? i.default : y
              , S = s.areMergedPropsEqual
              , _ = void 0 === S ? i.default : S
              , x = (0,
            a.default)(s, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"])
              , M = f(e, b, "mapStateToProps")
              , O = f(t, w, "mapDispatchToProps")
              , P = f(r, k, "mergeProps");
            return g(C, (0,
            n.default)({
                methodName: "connect",
                getDisplayName: function(e) {
                    return "Connect(" + e + ")"
                },
                shouldHandleStateChanges: Boolean(e),
                initMapStateToProps: M,
                initMapDispatchToProps: O,
                initMergeProps: P,
                pure: l,
                areStatesEqual: p,
                areOwnPropsEqual: h,
                areStatePropsEqual: v,
                areMergedPropsEqual: _
            }, x))
        }
        );
        var m, h, y, g, v, b, S, w, _, k, x, C
    }
    ,
    955112: (e,t,r)=>{
        "use strict";
        r.d(t, {
            default: ()=>o
        });
        var n = r(14890)
          , a = r(326343);
        const o = [function(e) {
            return "function" == typeof e ? (0,
            a.wrapMapToPropsFunc)(e, "mapDispatchToProps") : void 0
        }
        , function(e) {
            return e ? void 0 : (0,
            a.wrapMapToPropsConstant)((function(e) {
                return {
                    dispatch: e
                }
            }
            ))
        }
        , function(e) {
            return e && "object" == typeof e ? (0,
            a.wrapMapToPropsConstant)((function(t) {
                return (0,
                n.bindActionCreators)(e, t)
            }
            )) : void 0
        }
        ]
    }
    ,
    611743: (e,t,r)=>{
        "use strict";
        r.d(t, {
            default: ()=>a
        });
        var n = r(326343);
        const a = [function(e) {
            return "function" == typeof e ? (0,
            n.wrapMapToPropsFunc)(e, "mapStateToProps") : void 0
        }
        , function(e) {
            return e ? void 0 : (0,
            n.wrapMapToPropsConstant)((function() {
                return {}
            }
            ))
        }
        ]
    }
    ,
    105532: (e,t,r)=>{
        "use strict";
        r.d(t, {
            default: ()=>o
        });
        var n = r(487462);
        function a(e, t, r) {
            return (0,
            n.default)({}, r, e, t)
        }
        const o = [function(e) {
            return "function" == typeof e ? function(e) {
                return function(t, r) {
                    r.displayName;
                    var n, a = r.pure, o = r.areMergedPropsEqual, i = !1;
                    return function(t, r, s) {
                        var u = e(t, r, s);
                        return i ? a && o(u, n) || (n = u) : (i = !0,
                        n = u),
                        n
                    }
                }
            }(e) : void 0
        }
        , function(e) {
            return e ? void 0 : function() {
                return a
            }
        }
        ]
    }
    ,
    538548: (e,t,r)=>{
        "use strict";
        r.d(t, {
            default: ()=>i
        });
        var n = r(263366);
        function a(e, t, r, n) {
            return function(a, o) {
                return r(e(a, o), t(n, o), o)
            }
        }
        function o(e, t, r, n, a) {
            var o, i, s, u, l, c = a.areStatesEqual, f = a.areOwnPropsEqual, d = a.areStatePropsEqual, p = !1;
            function m(a, p) {
                var m, h, y = !f(p, i), g = !c(a, o);
                return o = a,
                i = p,
                y && g ? (s = e(o, i),
                t.dependsOnOwnProps && (u = t(n, i)),
                l = r(s, u, i)) : y ? (e.dependsOnOwnProps && (s = e(o, i)),
                t.dependsOnOwnProps && (u = t(n, i)),
                l = r(s, u, i)) : g ? (m = e(o, i),
                h = !d(m, s),
                s = m,
                h && (l = r(s, u, i)),
                l) : l
            }
            return function(a, c) {
                return p ? m(a, c) : (s = e(o = a, i = c),
                u = t(n, i),
                l = r(s, u, i),
                p = !0,
                l)
            }
        }
        function i(e, t) {
            var r = t.initMapStateToProps
              , i = t.initMapDispatchToProps
              , s = t.initMergeProps
              , u = (0,
            n.default)(t, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"])
              , l = r(e, u)
              , c = i(e, u)
              , f = s(e, u);
            return (u.pure ? o : a)(l, c, f, e, u)
        }
    }
    ,
    326343: (e,t,r)=>{
        "use strict";
        function n(e) {
            return function(t, r) {
                var n = e(t, r);
                function a() {
                    return n
                }
                return a.dependsOnOwnProps = !1,
                a
            }
        }
        function a(e) {
            return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length
        }
        function o(e, t) {
            return function(t, r) {
                r.displayName;
                var n = function(e, t) {
                    return n.dependsOnOwnProps ? n.mapToProps(e, t) : n.mapToProps(e)
                };
                return n.dependsOnOwnProps = !0,
                n.mapToProps = function(t, r) {
                    n.mapToProps = e,
                    n.dependsOnOwnProps = a(e);
                    var o = n(t, r);
                    return "function" == typeof o && (n.mapToProps = o,
                    n.dependsOnOwnProps = a(o),
                    o = n(t, r)),
                    o
                }
                ,
                n
            }
        }
        r.d(t, {
            wrapMapToPropsConstant: ()=>n,
            wrapMapToPropsFunc: ()=>o
        })
    }
    ,
    172307: (e,t,r)=>{
        "use strict";
        r.d(t, {
            useDispatch: ()=>a
        });
        var n = r(900420);
        function a() {
            return (0,
            n.useStore)().dispatch
        }
    }
    ,
    202975: (e,t,r)=>{
        "use strict";
        r.d(t, {
            useReduxContext: ()=>s
        });
        var n = r(667294)
          , a = r(441143)
          , o = r.n(a)
          , i = r(306526);
        function s() {
            var e = (0,
            n.useContext)(i.ReactReduxContext);
            return o()(e, "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"),
            e
        }
    }
    ,
    259854: (e,t,r)=>{
        "use strict";
        r.d(t, {
            useSelector: ()=>c
        });
        var n = r(667294)
          , a = r(441143)
          , o = r.n(a)
          , i = r(202975)
          , s = r(286496)
          , u = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect
          , l = function(e, t) {
            return e === t
        };
        function c(e, t) {
            void 0 === t && (t = l),
            o()(e, "You must pass a selector to useSelectors");
            var r, a = (0,
            i.useReduxContext)(), c = a.store, f = a.subscription, d = (0,
            n.useReducer)((function(e) {
                return e + 1
            }
            ), 0)[1], p = (0,
            n.useMemo)((function() {
                return new s.default(c,f)
            }
            ), [c, f]), m = (0,
            n.useRef)(), h = (0,
            n.useRef)(), y = (0,
            n.useRef)();
            try {
                r = e !== h.current || m.current ? e(c.getState()) : y.current
            } catch (e) {
                var g = "An error occured while selecting the store state: " + e.message + ".";
                throw m.current && (g += "\nThe error may be correlated with this previous error:\n" + m.current.stack + "\n\nOriginal stack trace:"),
                new Error(g)
            }
            return u((function() {
                h.current = e,
                y.current = r,
                m.current = void 0
            }
            )),
            u((function() {
                function e() {
                    try {
                        var e = h.current(c.getState());
                        if (t(e, y.current))
                            return;
                        y.current = e
                    } catch (e) {
                        m.current = e
                    }
                    d({})
                }
                return p.onStateChange = e,
                p.trySubscribe(),
                e(),
                function() {
                    return p.tryUnsubscribe()
                }
            }
            ), [c, p]),
            r
        }
    }
    ,
    900420: (e,t,r)=>{
        "use strict";
        r.d(t, {
            useStore: ()=>a
        });
        var n = r(202975);
        function a() {
            return (0,
            n.useReduxContext)().store
        }
    }
    ,
    50533: (e,t,r)=>{
        "use strict";
        r.d(t, {
            Provider: ()=>n.default,
            batch: ()=>l.unstable_batchedUpdates,
            connect: ()=>a.default,
            shallowEqual: ()=>c.default,
            useDispatch: ()=>o.useDispatch,
            useSelector: ()=>i.useSelector,
            useStore: ()=>s.useStore
        });
        var n = r(60682)
          , a = (r(726685),
        r(306526),
        r(757034))
          , o = r(172307)
          , i = r(259854)
          , s = r(900420)
          , u = r(209256)
          , l = r(471679)
          , c = r(235067);
        (0,
        u.setBatch)(l.unstable_batchedUpdates)
    }
    ,
    286496: (e,t,r)=>{
        "use strict";
        r.d(t, {
            default: ()=>i
        });
        var n = r(209256)
          , a = null
          , o = {
            notify: function() {}
        };
        var i = function() {
            function e(e, t) {
                this.store = e,
                this.parentSub = t,
                this.unsubscribe = null,
                this.listeners = o,
                this.handleChangeWrapper = this.handleChangeWrapper.bind(this)
            }
            var t = e.prototype;
            return t.addNestedSub = function(e) {
                return this.trySubscribe(),
                this.listeners.subscribe(e)
            }
            ,
            t.notifyNestedSubs = function() {
                this.listeners.notify()
            }
            ,
            t.handleChangeWrapper = function() {
                this.onStateChange && this.onStateChange()
            }
            ,
            t.isSubscribed = function() {
                return Boolean(this.unsubscribe)
            }
            ,
            t.trySubscribe = function() {
                var e, t, r;
                this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper),
                this.listeners = (e = (0,
                n.getBatch)(),
                t = [],
                r = [],
                {
                    clear: function() {
                        r = a,
                        t = a
                    },
                    notify: function() {
                        var n = t = r;
                        e((function() {
                            for (var e = 0; e < n.length; e++)
                                n[e]()
                        }
                        ))
                    },
                    get: function() {
                        return r
                    },
                    subscribe: function(e) {
                        var n = !0;
                        return r === t && (r = t.slice()),
                        r.push(e),
                        function() {
                            n && t !== a && (n = !1,
                            r === t && (r = t.slice()),
                            r.splice(r.indexOf(e), 1))
                        }
                    }
                }))
            }
            ,
            t.tryUnsubscribe = function() {
                this.unsubscribe && (this.unsubscribe(),
                this.unsubscribe = null,
                this.listeners.clear(),
                this.listeners = o)
            }
            ,
            e
        }()
    }
    ,
    209256: (e,t,r)=>{
        "use strict";
        r.d(t, {
            getBatch: ()=>o,
            setBatch: ()=>a
        });
        var n = function(e) {
            e()
        }
          , a = function(e) {
            return n = e
        }
          , o = function() {
            return n
        }
    }
    ,
    471679: (e,t,r)=>{
        "use strict";
        r.d(t, {
            unstable_batchedUpdates: ()=>n.unstable_batchedUpdates
        });
        var n = r(973935)
    }
    ,
    235067: (e,t,r)=>{
        "use strict";
        r.d(t, {
            default: ()=>o
        });
        var n = Object.prototype.hasOwnProperty;
        function a(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
        }
        function o(e, t) {
            if (a(e, t))
                return !0;
            if ("object" != typeof e || null === e || "object" != typeof t || null === t)
                return !1;
            var r = Object.keys(e)
              , o = Object.keys(t);
            if (r.length !== o.length)
                return !1;
            for (var i = 0; i < r.length; i++)
                if (!n.call(t, r[i]) || !a(e[r[i]], t[r[i]]))
                    return !1;
            return !0
        }
    }
    ,
    753894: (e,t,r)=>{
        "use strict";
        function n(e) {
            return function(t) {
                var r = t.dispatch
                  , n = t.getState;
                return function(t) {
                    return function(a) {
                        return "function" == typeof a ? a(r, n, e) : t(a)
                    }
                }
            }
        }
        r.d(t, {
            default: ()=>o
        });
        var a = n();
        a.withExtraArgument = n;
        const o = a
    }
    ,
    14890: (e,t,r)=>{
        "use strict";
        r.d(t, {
            applyMiddleware: ()=>m,
            bindActionCreators: ()=>f,
            combineReducers: ()=>l,
            compose: ()=>p,
            createStore: ()=>s
        });
        var n = r(427164)
          , a = function() {
            return Math.random().toString(36).substring(7).split("").join(".")
        }
          , o = {
            INIT: "@@redux/INIT" + a(),
            REPLACE: "@@redux/REPLACE" + a(),
            PROBE_UNKNOWN_ACTION: function() {
                return "@@redux/PROBE_UNKNOWN_ACTION" + a()
            }
        };
        function i(e) {
            if ("object" != typeof e || null === e)
                return !1;
            for (var t = e; null !== Object.getPrototypeOf(t); )
                t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t
        }
        function s(e, t, r) {
            var a;
            if ("function" == typeof t && "function" == typeof r || "function" == typeof r && "function" == typeof arguments[3])
                throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");
            if ("function" == typeof t && void 0 === r && (r = t,
            t = void 0),
            void 0 !== r) {
                if ("function" != typeof r)
                    throw new Error("Expected the enhancer to be a function.");
                return r(s)(e, t)
            }
            if ("function" != typeof e)
                throw new Error("Expected the reducer to be a function.");
            var u = e
              , l = t
              , c = []
              , f = c
              , d = !1;
            function p() {
                f === c && (f = c.slice())
            }
            function m() {
                if (d)
                    throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
                return l
            }
            function h(e) {
                if ("function" != typeof e)
                    throw new Error("Expected the listener to be a function.");
                if (d)
                    throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                var t = !0;
                return p(),
                f.push(e),
                function() {
                    if (t) {
                        if (d)
                            throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                        t = !1,
                        p();
                        var r = f.indexOf(e);
                        f.splice(r, 1)
                    }
                }
            }
            function y(e) {
                if (!i(e))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (void 0 === e.type)
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (d)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    d = !0,
                    l = u(l, e)
                } finally {
                    d = !1
                }
                for (var t = c = f, r = 0; r < t.length; r++) {
                    (0,
                    t[r])()
                }
                return e
            }
            return y({
                type: o.INIT
            }),
            (a = {
                dispatch: y,
                subscribe: h,
                getState: m,
                replaceReducer: function(e) {
                    if ("function" != typeof e)
                        throw new Error("Expected the nextReducer to be a function.");
                    u = e,
                    y({
                        type: o.REPLACE
                    })
                }
            })[n.default] = function() {
                var e, t = h;
                return (e = {
                    subscribe: function(e) {
                        if ("object" != typeof e || null === e)
                            throw new TypeError("Expected the observer to be an object.");
                        function r() {
                            e.next && e.next(m())
                        }
                        return r(),
                        {
                            unsubscribe: t(r)
                        }
                    }
                })[n.default] = function() {
                    return this
                }
                ,
                e
            }
            ,
            a
        }
        function u(e, t) {
            var r = t && t.type;
            return "Given " + (r && 'action "' + String(r) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
        }
        function l(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var a = t[n];
                0,
                "function" == typeof e[a] && (r[a] = e[a])
            }
            var i, s = Object.keys(r);
            try {
                !function(e) {
                    Object.keys(e).forEach((function(t) {
                        var r = e[t];
                        if (void 0 === r(void 0, {
                            type: o.INIT
                        }))
                            throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                        if (void 0 === r(void 0, {
                            type: o.PROBE_UNKNOWN_ACTION()
                        }))
                            throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + o.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                    }
                    ))
                }(r)
            } catch (e) {
                i = e
            }
            return function(e, t) {
                if (void 0 === e && (e = {}),
                i)
                    throw i;
                for (var n = !1, a = {}, o = 0; o < s.length; o++) {
                    var l = s[o]
                      , c = r[l]
                      , f = e[l]
                      , d = c(f, t);
                    if (void 0 === d) {
                        var p = u(l, t);
                        throw new Error(p)
                    }
                    a[l] = d,
                    n = n || d !== f
                }
                return n ? a : e
            }
        }
        function c(e, t) {
            return function() {
                return t(e.apply(this, arguments))
            }
        }
        function f(e, t) {
            if ("function" == typeof e)
                return c(e, t);
            if ("object" != typeof e || null === e)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, a = 0; a < r.length; a++) {
                var o = r[a]
                  , i = e[o];
                "function" == typeof i && (n[o] = c(i, t))
            }
            return n
        }
        function d(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function p() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return 0 === t.length ? function(e) {
                return e
            }
            : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                return function() {
                    return e(t.apply(void 0, arguments))
                }
            }
            ))
        }
        function m() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function(e) {
                return function() {
                    var r = e.apply(void 0, arguments)
                      , n = function() {
                        throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                    }
                      , a = {
                        getState: r.getState,
                        dispatch: function() {
                            return n.apply(void 0, arguments)
                        }
                    }
                      , o = t.map((function(e) {
                        return e(a)
                    }
                    ));
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {}
                              , n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }
                            )))),
                            n.forEach((function(t) {
                                d(e, t, r[t])
                            }
                            ))
                        }
                        return e
                    }({}, r, {
                        dispatch: n = p.apply(void 0, o)(r.dispatch)
                    })
                }
            }
        }
    }
    ,
    504190: (e,t,r)=>{
        "use strict";
        r.d(t, {
            createGate: ()=>_,
            useEvent: ()=>m,
            useGate: ()=>b,
            useList: ()=>v,
            useStore: ()=>h,
            useStoreMap: ()=>g,
            useUnit: ()=>y
        });
        var n = r(667294)
          , a = r(798116)
          , o = r(552798)
          , i = r(61688);
        function s(e, t, r, n) {
            let o = [a.step.run({
                fn: e=>t(e)
            })];
            if (n && o.unshift(n),
            r) {
                let t = (0,
                a.createNode)({
                    node: o
                })
                  , n = e.graphite.id
                  , i = r.additionalLinks
                  , s = i[n] || [];
                return i[n] = s,
                s.push(t),
                ()=>{
                    let e = s.indexOf(t);
                    -1 !== e && s.splice(e, 1),
                    (0,
                    a.clearNode)(t)
                }
            }
            {
                let t = (0,
                a.createNode)({
                    node: o,
                    parent: [e],
                    family: {
                        owners: e
                    }
                });
                return ()=>{
                    (0,
                    a.clearNode)(t)
                }
            }
        }
        function u(e, t) {
            return t.displayName = e,
            t
        }
        function l(e, t) {
            a.is.store(e) || k("expect useStore argument to be a store");
            let r = n.useCallback((r=>s(e, r, t)), [e, t])
              , o = n.useCallback((()=>O(e, t)), [e, t]);
            return C(r, o, o)
        }
        function c(e, t) {
            let r = a.is.unit(e)
              , o = {};
            r ? o = {
                unit: e
            } : "@@unitShape"in e ? "function" == typeof e["@@unitShape"] ? o = e["@@unitShape"]() : k("expect @@unitShape to be a function") : o = e;
            let i = Array.isArray(o)
              , u = n.useRef({
                stale: 1,
                justSubscribed: 0,
                scope: t
            })
              , [l,c,f,d,p] = n.useMemo((()=>{
                u.current.stale = 1;
                let e = Array.isArray(o) ? [] : {}
                  , r = []
                  , n = []
                  , i = []
                  , s = [];
                for (let u in o) {
                    let l = o[u];
                    a.is.unit(l) || k("expect useUnit argument to be a unit"),
                    a.is.event(l) || a.is.effect(l) ? (e[u] = t ? (0,
                    a.scopeBind)(l, {
                        scope: t
                    }) : l,
                    i.push(u),
                    s.push(l)) : (e[u] = null,
                    r.push(u),
                    n.push(l))
                }
                return [e, r, n, i, s]
            }
            ), [u, t, ...Object.keys(o), ...Object.values(o)])
              , m = n.useRef({
                value: l,
                storeKeys: c,
                eventKeys: d,
                eventValues: p
            })
              , h = n.useCallback((e=>{
                let r = u.current;
                r.justSubscribed = 1;
                let n = ()=>{
                    r.stale || (r.stale = 1,
                    e())
                }
                  , o = a.step.compute({
                    priority: "sampler",
                    batch: 1
                })
                  , i = f.map((e=>s(e, n, t, o)));
                return ()=>{
                    i.forEach((e=>e()))
                }
            }
            ), [f, t, m, u])
              , y = n.useCallback((()=>{
                let e, n = m.current, a = u.current, o = 0, s = n.value, h = n.storeKeys, y = n.eventKeys, g = n.eventValues, v = t !== a.scope;
                if (a.stale || a.justSubscribed || v) {
                    o = !a.justSubscribed || v,
                    e = i ? [...l] : {
                        ...l
                    },
                    h.length === c.length && y.length === d.length || (o = 1);
                    for (let r = 0; r < c.length; r++) {
                        let n = O(f[r], t)
                          , a = c[r];
                        o || (o = h.includes(a) ? s[a] !== n : 1),
                        e[a] = n
                    }
                    for (let e = 0; e < d.length; e++) {
                        let t = p[e]
                          , r = d[e];
                        o || (o = y.includes(r) ? g[y.indexOf(r)] !== t : 1)
                    }
                }
                return o && (n.value = e),
                n.storeKeys = c,
                n.eventKeys = d,
                n.eventValues = p,
                a.stale = 0,
                a.justSubscribed = !o,
                a.scope = t,
                r ? n.value.unit : n.value
            }
            ), [h, f, p, t, m, u]);
            return C(h, y, y)
        }
        function f([e,t], r) {
            let o, i, u, l, c = P;
            t ? (o = t,
            u = e,
            l = []) : ({fn: o, store: u, keys: l, defaultValue: i, updateFilter: c=P} = e),
            a.is.store(u) || k("useStoreMap expects a store"),
            Array.isArray(l) || k("useStoreMap expects an array as keys"),
            "function" != typeof o && k("useStoreMap expects a function");
            let f = n.useCallback((e=>s(u, e, r)), [u, r])
              , d = n.useCallback((()=>O(u, r)), [u, r])
              , p = n.useRef()
              , m = n.useRef()
              , h = n.useRef(l);
            return M(f, d, d, (e=>{
                if (p.current !== e || !((e,t)=>{
                    if (!e || !t || e.length !== t.length)
                        return 0;
                    let r = 1;
                    for (let n = 0; n < e.length; n++)
                        if (e[n] !== t[n]) {
                            r = 0;
                            break
                        }
                    return r
                }
                )(h.current, l)) {
                    let t = o(e, l);
                    void 0 === t && void 0 !== i && (t = i),
                    p.current = e,
                    h.current = l,
                    void 0 !== t && (m.current = t)
                }
                return m.current
            }
            ), ((e,t)=>!c(t, e)))
        }
        function d(e, t={}, r) {
            let {open: a, close: o, set: i} = c({
                open: e.open,
                close: e.close,
                set: e.set
            }, r)
              , s = n.useMemo((()=>({
                open: a,
                close: o,
                set: i
            })), [e, a])
              , u = n.useRef({
                value: null,
                count: 0
            });
            x((()=>(s.open(u.current.value),
            ()=>s.close(u.current.value))), [s]),
            ((e,t)=>{
                if (e === t)
                    return 1;
                if ("object" == typeof e && null !== e && "object" == typeof t && null !== t) {
                    let r = Object.keys(e)
                      , n = Object.keys(t);
                    if (r.length !== n.length)
                        return 0;
                    for (let n = 0; n < r.length; n++) {
                        let a = r[n];
                        if (e[a] !== t[a])
                            return 0
                    }
                    return 1
                }
                return 0
            }
            )(u.current.value, t) || (u.current.value = t,
            u.current.count += 1),
            x((()=>{
                s.set(u.current.value)
            }
            ), [u.current.count])
        }
        function p(e) {
            let t = n.useContext(E);
            return e && !t && k("No scope found, consider adding <Provider> to app root"),
            t
        }
        function m(e, t) {
            return ((e,t)=>{
                if (!t)
                    return e;
                let r = a.is.unit(e) || "object" != typeof e ? {
                    event: e
                } : e;
                return n.useMemo((()=>{
                    if (a.is.unit(e))
                        return (0,
                        a.scopeBind)(e, {
                            scope: t
                        });
                    let r = Array.isArray(e) ? [] : {};
                    for (let n in e)
                        r[n] = (0,
                        a.scopeBind)(e[n], {
                            scope: t
                        });
                    return r
                }
                ), [t, ...Object.keys(r), ...Object.values(r)])
            }
            )(e, p(null == t ? void 0 : t.forceScope))
        }
        function h(e, t) {
            return l(e, p(null == t ? void 0 : t.forceScope))
        }
        function y(e, t) {
            return c(e, p(null == t ? void 0 : t.forceScope))
        }
        function g(e, t) {
            return f([e, t], p(null == e ? void 0 : e.forceScope))
        }
        function v(e, t, r) {
            return ((e,t,r)=>{
                let o, i, s, c = [];
                "object" == typeof t && null !== t ? (t.keys && (c = t.keys),
                ({fn: o, getKey: i, placeholder: s} = t)) : o = t,
                a.is.store(e) || k("expect useList first argument to be a store"),
                "function" != typeof o && k("expect useList's renderItem to be a function"),
                Array.isArray(c) || k("expect useList's keys to be an array");
                let d = n.useMemo((()=>{
                    let t = u(`${e.shortName || "Unknown"}.Item`, (t=>{
                        let {index: n, keys: a, keyVal: o, value: i} = t;
                        if (p.current[1])
                            return p.current[0](i, o);
                        let s = f([{
                            store: e,
                            keys: [n, ...a],
                            fn: (e,t)=>e[t[0]]
                        }], r);
                        return p.current[0](s, n)
                    }
                    ));
                    return n.memo(t)
                }
                ), [e, r, !!i])
                  , p = n.useRef([o, i]);
                p.current = [o, i];
                let m = n.useMemo((()=>c), c);
                if (i) {
                    let t = l(e, r);
                    return 0 === t.length && s ? s : t.map((e=>{
                        let t = p.current[1](e);
                        return n.createElement(d, {
                            keyVal: t,
                            key: t,
                            keys: m,
                            value: e
                        })
                    }
                    ))
                }
                {
                    let t = f([{
                        store: e,
                        keys: [e],
                        fn: e=>e.length
                    }], r);
                    return 0 === t && s ? s : Array.from({
                        length: t
                    }, ((e,t)=>n.createElement(d, {
                        index: t,
                        key: t,
                        keys: m
                    })))
                }
            }
            )(e, t, p(null == r ? void 0 : r.forceScope))
        }
        function b(e, t={}, r) {
            return d(e, t, p(null == r ? void 0 : r.forceScope))
        }
        function S(e, t) {
            let r = t ? e : e[0];
            var n;
            (e=>{
                if (!e)
                    throw Error("expect first argument be an object")
            }
            )(N(n = r) || (e=>"function" == typeof e)(n));
            let a = r.or
              , o = r.and;
            if (o) {
                let r = t ? o : o[0];
                if (N(r) && "and"in r) {
                    let r = S(o, t);
                    e = r[0],
                    a = {
                        ...a,
                        ...r[1]
                    }
                } else
                    e = o
            }
            return [e, a]
        }
        function w(e, t) {
            let r = t && N(n = t[0]) && (n.and || n.or) ? t : [{
                and: t
            }];
            var n;
            let a, [[o,i],s] = S(r), u = {}, l = {}, c = s;
            var f;
            return "string" == typeof o ? (l = {
                name: o
            },
            N(f = i) && "sid"in f || (u = i || {})) : (e=>N(e) && ("domain"in e || "defaultState"in e || "name"in e))(o) && (l = o,
            u = o.defaultState || {},
            a = o.domain),
            {
                hook: e,
                domain: a,
                defaultState: u,
                mainConfig: l,
                maybeConfig: c
            }
        }
        function _(...e) {
            return (({domain: e, defaultState: t, hook: r, mainConfig: n, maybeConfig: o})=>{
                function i(e) {
                    return r(i, e, p()),
                    null
                }
                let s = R({
                    or: o,
                    and: n
                })
                  , l = `${e ? `${e.compositeName.fullName}/` : ""}${s.name || "gate"}`
                  , c = (0,
                a.createEvent)({
                    name: `${l}.set`,
                    sid: s.sid ? `${s.sid}|set` : void 0
                })
                  , f = (0,
                a.createEvent)({
                    name: `${l}.open`,
                    sid: s.sid ? `${s.sid}|open` : void 0
                })
                  , d = (0,
                a.createEvent)({
                    name: `${l}.close`,
                    sid: s.sid ? `${s.sid}|close` : void 0
                })
                  , m = (0,
                a.createStore)(Boolean(0), {
                    name: `${l}.status`,
                    serialize: "ignore"
                }).on(f, (()=>Boolean(1))).on(d, (()=>Boolean(0)))
                  , h = (0,
                a.createStore)(t, {
                    name: `${l}.state`,
                    sid: s.sid
                }).on(c, ((e,t)=>t)).on(f, ((e,t)=>t)).reset(d);
                if (e) {
                    let {hooks: t} = e;
                    (0,
                    a.launch)({
                        target: [t.store, t.store, t.event, t.event, t.event],
                        params: [m, h, f, d, c]
                    })
                }
                return i.open = f,
                i.close = d,
                i.status = m,
                i.state = h,
                i.set = c,
                u(`Gate:${l}`, i)
            }
            )(w(d, e))
        }
        let k = e=>{
            throw Error(e)
        }
          , x = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect;
        const {useSyncExternalStore: C} = i
          , {useSyncExternalStoreWithSelector: M} = o
          , O = (e,t)=>t ? t.getState(e) : e.getState()
          , P = (e,t)=>e !== t
          , E = n.createContext(null);
        let {Provider: j} = E
          , N = e=>"object" == typeof e && null !== e
          , R = (e,t={})=>(N(e) && (R(e.or, t),
        (e=>{
            for (let a in e)
                n = a,
                (e=>void 0 === e)(r = e[a]) || "or" === n || "and" === n || (t[n] = r);
            var r, n
        }
        )(e),
        R(e.and, t)),
        t)
    }
    ,
    798116: (e,t,r)=>{
        "use strict";
        function n(e, t) {
            for (let r in e)
                t(e[r], r)
        }
        function a(e, t) {
            e.forEach(t)
        }
        function o(e, t) {
            if (!e)
                throw Error(t)
        }
        function i(e, t) {
            let r = z(e).meta || {};
            fe = {
                id: z(e).id,
                parent: fe,
                value: e,
                template: r.template || pe(),
                sidRoot: r.sidRoot || fe && fe.sidRoot,
                meta: r
            };
            try {
                return t()
            } finally {
                de("region"),
                fe = B(fe)
            }
        }
        function s({node: e=[], from: t, source: r, parent: n=t || r, to: o, target: i, child: s=o || i, scope: u={}, meta: l={}, family: c={
            type: "regular"
        }, regional: f}={}) {
            let d = ye(n)
              , p = ye(c.links)
              , m = ye(c.owners)
              , h = [];
            a(e, (e=>e && re(h, e)));
            let y = {
                id: ue(),
                seq: h,
                next: ye(s),
                meta: l,
                scope: u,
                family: {
                    type: c.type || "crosslink",
                    links: p,
                    owners: m
                }
            };
            return a(p, (e=>re(D(e), y))),
            a(m, (e=>re(I(e), y))),
            a(d, (e=>re(e.next, y))),
            f && fe && he(F(fe), [y]),
            y
        }
        function u(e, t, r) {
            let n, o = Qe, i = null, s = He;
            if (e.target && (t = e.params,
            r = e.defer,
            n = e.meta,
            o = "page"in e ? e.page : o,
            e.stack && (i = e.stack),
            s = U(e) || s,
            e = e.target),
            s && He && s !== He && (He = null),
            Array.isArray(e))
                for (let r = 0; r < e.length; r++)
                    Ke("pure", o, z(e[r]), i, t[r], s, n);
            else
                Ke("pure", o, z(e), i, t, s, n);
            if (r && !Ye)
                return;
            let u, l, c, f, d, p, m = {
                isRoot: Ye,
                currentPage: Qe,
                scope: He,
                isWatch: Je,
                isPure: Xe
            };
            Ye = 0;
            e: for (; f = Le(); ) {
                let {idx: e, stack: t, type: r} = f;
                c = t.node,
                Qe = d = t.page,
                He = U(t),
                d ? p = d.reg : He && (p = He.reg);
                let n = !!d
                  , o = !!He
                  , i = {
                    fail: 0,
                    scope: c.scope
                };
                u = l = 0;
                for (let a = e; a < c.seq.length && !u; a++) {
                    let s = c.seq[a];
                    if (s.order) {
                        let {priority: n, barrierID: o} = s.order
                          , i = o ? d ? `${d.fullID}_ ${o}` : o : 0;
                        if (a !== e || r !== n) {
                            o ? Ge.has(i) || (Ge.add(i),
                            We(a, t, n, o)) : We(a, t, n);
                            continue e
                        }
                        o && Ge.delete(i)
                    }
                    switch (s.type) {
                    case "mov":
                        {
                            let e, r = s.data;
                            switch (r.from) {
                            case $:
                                e = F(t);
                                break;
                            case "a":
                            case "b":
                                e = t[r.from];
                                break;
                            case "value":
                                e = r.store;
                                break;
                            case "store":
                                if (p && !p[r.store.id])
                                    if (n) {
                                        let e = tt(d, r.store.id);
                                        t.page = d = e,
                                        e ? p = e.reg : o ? (it(He, r.store, 0, 1, r.softRead),
                                        p = He.reg) : p = void 0
                                    } else
                                        o && it(He, r.store, 0, 1, r.softRead);
                                e = Ie(p && p[r.store.id] || r.store)
                            }
                            switch (r.to) {
                            case $:
                                t.value = e;
                                break;
                            case "a":
                            case "b":
                                t[r.to] = e;
                                break;
                            case "store":
                                nt(d, He, c, r.target).current = e
                            }
                            break
                        }
                    case "compute":
                        let e = s.data;
                        if (e.fn) {
                            Je = "watch" === L(c, "op"),
                            Xe = e.pure;
                            let r = e.safe ? (0,
                            e.fn)(F(t), i.scope, t) : st(i, e.fn, t);
                            e.filter ? l = !r : t.value = r,
                            Je = m.isWatch,
                            Xe = m.isPure
                        }
                    }
                    u = i.fail || l
                }
                if (rt && rt(t, i),
                !u) {
                    let e = F(t)
                      , r = U(t);
                    if (a(c.next, (n=>{
                        Ke("child", d, n, t, e, r)
                    }
                    )),
                    r) {
                        L(c, "needFxCounter") && Ke("child", d, r.fxCount, t, e, r),
                        L(c, "storeChange") && Ke("child", d, r.storeChange, t, e, r),
                        L(c, "warnSerialize") && Ke("child", d, r.warnSerializeNode, t, e, r);
                        let n = r.additionalLinks[c.id];
                        n && a(n, (n=>{
                            Ke("child", d, n, t, e, r)
                        }
                        ))
                    }
                }
            }
            Ye = m.isRoot,
            Qe = m.currentPage,
            He = U(m)
        }
        function l(e, t="combine") {
            let r = t + "("
              , a = ""
              , o = 0;
            return n(e, (e=>{
                o < 25 && (null != e && (r += a,
                r += V(e) ? W(e).fullName : e.toString()),
                o += 1,
                a = ", ")
            }
            )),
            r + ")"
        }
        function c(e, t) {
            let r, n, a = e;
            if (t) {
                let a = W(t);
                0 === e.length ? (r = a.path,
                n = a.fullName) : (r = a.path.concat([e]),
                n = 0 === a.fullName.length ? e : a.fullName + "/" + e)
            } else
                r = 0 === e.length ? [] : [e],
                n = e;
            return {
                shortName: a,
                fullName: n,
                path: r
            }
        }
        function f(e, t) {
            let r = t ? e : e[0];
            Se(r);
            let n = r.or
              , a = r.and;
            if (a) {
                let r = t ? a : a[0];
                if (ge(r) && "and"in r) {
                    let r = f(a, t);
                    e = r[0],
                    n = {
                        ...n,
                        ...r[1]
                    }
                } else
                    e = a
            }
            return [e, n]
        }
        function d(e, ...t) {
            let r = pe();
            if (r) {
                let n = r.handlers[e];
                if (n)
                    return n(r, ...t)
            }
        }
        function p(e, t) {
            let r = ut({
                or: t,
                and: "string" == typeof e ? {
                    name: e
                } : e
            })
              , n = (e,...t)=>(ne(!L(n, "derived"), "call of derived event", "createEvent"),
            ne(!Xe, "unit call from pure function", "operators like sample"),
            Qe ? ((e,t,r,n)=>{
                let a = Qe
                  , o = null;
                if (t)
                    for (o = Qe; o && o.template !== t; )
                        o = B(o);
                et(o);
                let i = e.create(r, n);
                return et(a),
                i
            }
            )(n, a, e, t) : n.create(e, t))
              , a = pe()
              , o = Object.assign(n, {
                graphite: s({
                    meta: vt(r.actualOp || "event", n, r),
                    regional: 1
                }),
                create: e=>(u({
                    target: n,
                    params: e,
                    scope: He
                }),
                e),
                watch: e=>yt(n, e),
                map: e=>bt(n, A, e, [$e()]),
                filter: e=>bt(n, "filter", e.fn ? e : e.fn, [$e(Me, 1)]),
                filterMap: e=>bt(n, "filterMap", e, [$e(), Re((e=>!be(e)), 1)]),
                prepend(e) {
                    let t = p("* → " + n.shortName, {
                        parent: B(n)
                    });
                    return d("eventPrepend", z(t)),
                    mt(t, n, [$e()], "prepend", e),
                    gt(n, t),
                    t
                }
            });
            return null != r && r.domain && r.domain.hooks.event(o),
            K(o, "id", o.graphite.id),
            de(o.graphite),
            o
        }
        function m(e, t, r, n) {
            return _e(r, t, "first argument"),
            o(ve(n), "second argument should be a function"),
            ne(!L(e, "derived"), `${t} in derived store`, `${t} in store created via createStore`),
            a(Array.isArray(r) ? r : [r], (t=>{
                e.off(t),
                T(e).set(t, pt(St(t, e, "on", Ce, n)))
            }
            )),
            e
        }
        function h(e, t) {
            let r = ut(t)
              , n = De(e)
              , i = p({
                named: "updates",
                derived: 1
            });
            d("storeBase", n);
            let l = n.id
              , c = {
                subscribers: new Map,
                updates: i,
                defaultState: e,
                stateRef: n,
                getState() {
                    let e, t = n;
                    if (Qe) {
                        let t = Qe;
                        for (; t && !t.reg[l]; )
                            t = B(t);
                        t && (e = t)
                    }
                    return !e && He && (it(He, n, 1),
                    e = He),
                    e && (t = e.reg[l]),
                    Ie(t)
                },
                setState: e=>u({
                    target: c,
                    params: e,
                    defer: 1,
                    scope: He
                }),
                reset: (...e)=>(a(e, (e=>m(c, ".reset", e, (()=>c.defaultState)))),
                c),
                on: (e,t)=>m(c, ".on", e, t),
                off(e) {
                    let t = T(c).get(e);
                    return t && (t(),
                    T(c).delete(e)),
                    c
                },
                map(e, t) {
                    let r, a;
                    ge(e) && (r = e,
                    e = e.fn),
                    ne(be(t), "second argument of store.map", "updateFilter");
                    let o = c.getState();
                    pe() ? a = null : be(o) || (a = e(o, t));
                    let i = h(a, {
                        name: `${c.shortName} → *`,
                        derived: 1,
                        and: r
                    })
                      , s = St(c, i, A, xe, e);
                    return qe(q(i), {
                        type: A,
                        fn: e,
                        from: n
                    }),
                    q(i).noInit = 1,
                    d("storeMap", n, s),
                    i
                },
                watch(e, t) {
                    if (!t || !V(e)) {
                        let t = yt(c, e);
                        return d("storeWatch", n, e) || e(c.getState()),
                        t
                    }
                    return o(ve(t), "second argument should be a function"),
                    e.watch((e=>t(c.getState(), e)))
                }
            }
              , f = vt("store", c, r)
              , y = c.defaultConfig.updateFilter;
            c.graphite = s({
                scope: {
                    state: n,
                    fn: y
                },
                node: [Re(((e,t,r)=>(r.scope && !r.scope.reg[n.id] && (r.b = 1),
                e))), Ae(n), Re(((e,t,{a: r, b: n})=>!be(e) && (e !== r || n)), 1), y && $e(xe, 1), Ee({
                    from: $,
                    target: n
                })],
                child: i,
                meta: {
                    ...f,
                    defaultState: e
                },
                regional: 1
            }),
            K(c, "id", c.graphite.id),
            K(c, "rootStateRefId", l);
            let g = L(c, "serialize")
              , v = L(c, "derived")
              , b = "ignore" === g
              , S = L(c, "sid");
            return S && (K(c, "storeChange", 1),
            n.sid = S),
            S || b || v || K(c, "warnSerialize", 1),
            o(v || !be(e), "current state can't be undefined, use null instead"),
            he(c, [i]),
            null != r && r.domain && r.domain.hooks.store(c),
            v || (c.reinit = p({
                named: "reinit"
            }),
            c.reset(c.reinit)),
            n.meta = c.graphite.meta,
            de(c.graphite),
            c
        }
        function y(...e) {
            let t, r, n;
            [e,n] = f(e);
            let a, i, s, u = e[e.length - 1];
            if (ve(u) ? (r = e.slice(0, -1),
            t = u) : r = e,
            1 === r.length) {
                let e = r[0];
                H(e) || (a = e,
                i = 1)
            }
            if (!i && (a = r,
            t)) {
                s = 1;
                let e = t;
                t = t=>e(...t)
            }
            return o(ge(a), "shape should be an object"),
            wt(Array.isArray(a), !s, a, n, t)
        }
        function g() {
            let e = {};
            return e.req = new Promise(((t,r)=>{
                e.rs = t,
                e.rj = r
            }
            )),
            e.req.catch((()=>{}
            )),
            e
        }
        function v(e, t={}) {
            let r = ut(ve(e) ? {
                handler: e
            } : e, t)
              , n = p(ve(e) ? {
                handler: e
            } : e, {
                ...t,
                actualOp: "effect"
            })
              , a = z(n);
            K(a, "op", n.kind = "effect"),
            n.use = e=>(o(ve(e), ".use argument should be a function"),
            m.scope.handler = e,
            n),
            n.use.getCurrent = ()=>m.scope.handler;
            let i = n.finally = p({
                named: "finally",
                derived: 1
            })
              , l = n.done = i.filterMap({
                named: "done",
                fn({status: e, params: t, result: r}) {
                    if ("done" === e)
                        return {
                            params: t,
                            result: r
                        }
                }
            })
              , c = n.fail = i.filterMap({
                named: "fail",
                fn({status: e, params: t, error: r}) {
                    if ("fail" === e)
                        return {
                            params: t,
                            error: r
                        }
                }
            })
              , f = n.doneData = l.map({
                named: "doneData",
                fn: ({result: e})=>e
            })
              , d = n.failData = c.map({
                named: "failData",
                fn: ({error: e})=>e
            })
              , m = s({
                scope: {
                    handler: n.defaultConfig.handler || (()=>o(0, `no handler used in ${n.getType()}`))
                },
                node: [Re(((e,t,r)=>{
                    let a = t.handler
                      , o = U(r);
                    if (o) {
                        let e = o.handlers.unitMap.get(n) || o.handlers.sidMap[n.sid];
                        e && (a = e)
                    }
                    return e.handler = a,
                    e
                }
                ), 0, 1), Re((({params: e, req: t, handler: r, args: n=[e]},a,o)=>{
                    let s = kt(o)
                      , u = xt(e, t, 1, i, o, s)
                      , l = xt(e, t, 0, i, o, s)
                      , [c,f] = _t(r, l, n);
                    c && (ge(f) && ve(f.then) ? f.then(u, l) : u(f))
                }
                ), 0, 1)],
                meta: {
                    op: "fx",
                    fx: "runner"
                }
            });
            a.scope.runner = m,
            re(a.seq, Re(((e,{runner: t},r)=>{
                let n = B(r) ? {
                    params: e,
                    req: {
                        rs(e) {},
                        rj(e) {}
                    }
                } : e;
                return r.meta || (r.meta = {
                    fxID: le()
                }),
                u({
                    target: t,
                    params: n,
                    defer: 1,
                    scope: U(r),
                    meta: r.meta
                }),
                n.params
            }
            ), 0, 1)),
            n.create = e=>{
                let t = g()
                  , r = {
                    params: e,
                    req: t
                };
                if (He && !Je) {
                    let e = He;
                    t.req.finally((()=>{
                        Ze(e)
                    }
                    )).catch((()=>{}
                    ))
                }
                return u({
                    target: n,
                    params: r,
                    scope: He
                }),
                t.req
            }
            ;
            let y = n.inFlight = h(0, {
                serialize: "ignore",
                named: (L(n, "name") || n.graphite.id) + ".inFlight"
            }).on(n, (e=>e + 1)).on(i, (e=>e - 1)).map({
                fn: e=>e,
                named: "inFlight"
            });
            K(i, "needFxCounter", "dec"),
            K(n, "needFxCounter", 1);
            let v = n.pending = y.map({
                fn: e=>e > 0,
                named: "pending"
            });
            return he(n, [i, l, c, f, d, v, y]),
            null != r && r.domain && r.domain.hooks.effect(n),
            n
        }
        function b(e) {
            let t;
            [e,t] = f(e, 1);
            let {source: r, effect: n, mapParams: a} = e
              , o = v(e, t);
            K(o, "attached", 1);
            let i, {runner: s} = z(o).scope, l = Re(((e,t,n)=>{
                let i, {params: s, req: l, handler: c} = e, f = o.finally, d = kt(n), p = xt(s, l, 0, f, n, d), m = n.a, h = J(c), y = 1;
                if (a ? [y,i] = _t(a, p, [s, m]) : i = r && h ? m : s,
                y) {
                    if (!h)
                        return e.args = [m, i],
                        1;
                    u({
                        target: c,
                        params: {
                            params: i,
                            req: {
                                rs: xt(s, l, 1, f, n, d),
                                rj: p
                            }
                        },
                        page: n.page,
                        defer: 1,
                        meta: n.meta
                    })
                }
            }
            ), 1, 1);
            if (r) {
                let e;
                H(r) ? (e = r,
                he(e, [o])) : (e = y(r),
                he(o, [e])),
                i = [Ae(q(e)), l]
            } else
                i = [l];
            s.seq.splice(1, 0, ...i),
            o.use(n);
            let d = B(n);
            return d && (Object.assign(W(o), c(o.shortName, d)),
            o.defaultConfig.parent = d),
            gt(n, o, "effect"),
            o
        }
        function S(...e) {
            let[[t,r],a] = f(e)
              , o = {};
            return n(r, ((e,r)=>{
                let n = o[r] = p(r, {
                    parent: B(t),
                    config: a
                });
                t.on(n, e),
                gt(t, n)
            }
            )),
            o
        }
        function w(e, t) {
            let r = ut({
                or: t,
                and: "string" == typeof e ? {
                    name: e
                } : e
            })
              , o = s({
                family: {
                    type: "domain"
                },
                regional: 1,
                parent: (null == r ? void 0 : r.domain) || (null == r ? void 0 : r.parent)
            })
              , i = {
                history: {},
                graphite: o,
                hooks: {}
            };
            o.meta = vt("domain", i, {
                parent: (null == r ? void 0 : r.domain) || (null == r ? void 0 : r.parent),
                or: r
            }),
            n({
                Event: p,
                Effect: v,
                Store: h,
                Domain: w
            }, ((e,t)=>{
                let r = t.toLowerCase()
                  , n = p({
                    named: `on ${t}`
                });
                i.hooks[r] = n;
                let o = new Set;
                i.history[`${r}s`] = o,
                n.create = e=>(u(n, e),
                e),
                re(z(n).seq, Re(((e,t,r)=>(r.scope = null,
                e)))),
                n.watch((e=>{
                    he(i, [e]),
                    o.add(e),
                    e.ownerSet || (e.ownerSet = o),
                    B(e) || (e.parent = i)
                }
                )),
                he(i, [n]),
                i[`onCreate ${t}`] = e=>(a(o, e),
                n.watch(e)),
                i[`create ${t}`] = i[r] = (t,r)=>{
                    let a = ut({
                        and: r,
                        or: t
                    });
                    return null != a && a.domain ? e(t, r) : n(e(t, {
                        parent: i,
                        or: a
                    }))
                }
            }
            ));
            let l = B(i);
            return l && n(i.hooks, ((e,t)=>mt(e, l.hooks[t]))),
            null != r && r.domain && r.domain.hooks.domain(i),
            i
        }
        function _(e, t) {
            _e(e, "merge", "first argument");
            let r = p({
                name: l(e, "merge"),
                derived: 1,
                and: t
            });
            return mt(e, r, [], "merge"),
            r
        }
        function k(e, t) {
            let r = 0;
            return a(Mt, (n=>{
                n in e && (o(null != e[n], Ot(t, n)),
                r = 1)
            }
            )),
            r
        }
        function x(...e) {
            let t, r, n, a, [[o,i,s],u] = f(e), l = 1;
            return be(i) && ge(o) && k(o, "sample") && (i = o.clock,
            s = o.fn,
            l = !o.greedy,
            a = o.filter,
            t = o.target,
            r = o.name,
            n = o.sid,
            o = o.source),
            Pt("sample", i, o, a, t, s, r, u, l, 1, 0, n)
        }
        function C(...e) {
            let[[t,r],n] = f(e);
            return r || (r = t,
            t = r.source),
            k(r, "guard"),
            Pt("guard", r.clock, t, r.filter, r.target, null, r.name, n, !r.greedy, 0, 1)
        }
        function M(e, t, r) {
            if (H(e))
                return ne(0, "restore($store)"),
                e;
            if (Y(e) || J(e)) {
                let n = B(e)
                  , a = h(t, {
                    parent: n,
                    name: e.shortName,
                    and: r
                });
                return mt(J(e) ? e.doneData : e, a),
                n && n.hooks.store(a),
                a
            }
            let a = Array.isArray(e) ? [] : {};
            return n(e, ((e,t)=>a[t] = H(e) ? e : h(e, {
                name: t
            }))),
            a
        }
        function O(...e) {
            let t, r, a = "split", [[i,u],l] = f(e), c = !u;
            c && (t = i.cases,
            u = i.match,
            r = i.clock,
            i = i.source);
            let m = H(u)
              , h = !V(u) && ve(u)
              , y = !m && !h && ge(u);
            o(V(i), "source must be a unit"),
            t || (t = {}),
            c ? n(t, ((e,t)=>ke(a, e, `cases.${t}`))) : (o(y, "match should be an object"),
            n(u, ((e,r)=>t[r] = p({
                derived: 1,
                named: `cases.${r}`,
                and: l
            }))),
            t.__ = p({
                derived: 1,
                named: "cases.__",
                and: l
            }));
            let g, v = new Set([].concat(i, r || [], Object.values(t))), b = Object.keys(m || h ? t : u);
            if (m || h)
                m && v.add(u),
                g = [m && Ae(q(u), 0, 1), je({
                    safe: m,
                    filter: 1,
                    pure: !m,
                    fn(e, t, r) {
                        let n = String(m ? r.a : u(e));
                        Nt(t, ee(b, n) ? n : "__", e, r)
                    }
                })];
            else if (y) {
                let e = De({});
                e.type = "shape";
                let t, r = [];
                n(u, ((n,a)=>{
                    if (V(n)) {
                        t = 1,
                        re(r, a),
                        v.add(n);
                        let o = mt(n, [], [Ae(e), Re(((e,t,{a: r})=>r[a] = e))]);
                        if (H(n)) {
                            e.current[a] = n.getState();
                            let t = q(n);
                            qe(e, {
                                from: t,
                                field: a,
                                type: "field"
                            }),
                            d("splitMatchStore", t, o)
                        }
                    }
                }
                )),
                t && d("splitBase", e),
                g = [t && Ae(e, 0, 1), $e(((e,t,n)=>{
                    for (let a = 0; a < b.length; a++) {
                        let o = b[a];
                        if (ee(r, o) ? n.a[o] : u[o](e))
                            return void Nt(t, o, e, n)
                    }
                    Nt(t, "__", e, n)
                }
                ), 1)]
            } else
                o(0, "expect match to be unit, function or object");
            let S = s({
                meta: {
                    op: a
                },
                parent: r ? [] : i,
                scope: t,
                node: g,
                family: {
                    owners: Array.from(v)
                },
                regional: 1
            });
            if (r && Pt(a, r, i, null, S, null, a, l, 0, 0, 0),
            !c)
                return t
        }
        function P(e, {scope: t, params: r}={}) {
            if (!V(e))
                return Promise.reject(new Error("first argument should be unit"));
            if (!(J(e) || Y(e) || H(e) || Q(e)))
                return Promise.reject(new Error("first argument accepts only effects, events, stores or scopes"));
            Q(e) && (t = e);
            let n = g();
            n.parentFork = He;
            let {fxCount: a} = t;
            re(a.scope.defers, n);
            let o = []
              , i = [];
            return Q(e) || (re(o, e),
            re(i, J(e) ? {
                params: r,
                req: {
                    rs(e) {
                        n.value = {
                            status: "done",
                            value: e
                        }
                    },
                    rj(e) {
                        n.value = {
                            status: "fail",
                            value: e
                        }
                    }
                }
            } : r)),
            re(o, a),
            re(i, null),
            u({
                target: o,
                params: i,
                scope: t
            }),
            n.req
        }
        function E(e, t) {
            let r = Array.isArray(e) ? new Map(e) : e
              , n = new Map
              , i = 0;
            if (r instanceof Map) {
                let e = {};
                return a(r, ((r,a)=>{
                    o(V(a), "Map key should be a unit"),
                    t && t(a, r),
                    a.sid && (a.sid in e && (i = 1),
                    e[a.sid] = r),
                    n.set(a, r)
                }
                )),
                {
                    sidMap: e,
                    unitMap: n,
                    hasSidDoubles: i
                }
            }
            return {
                sidMap: r,
                unitMap: n
            }
        }
        function j(e, t) {
            let r, n = e;
            X(e) && (r = e,
            n = t);
            let i = (e=>{
                let t = s({
                    scope: {
                        defers: [],
                        inFlight: 0,
                        fxID: 0
                    },
                    node: [Re(((e,t,r)=>{
                        B(r) ? "dec" === L(B(r).node, "needFxCounter") ? t.inFlight -= 1 : (t.inFlight += 1,
                        t.fxID += 1) : t.fxID += 1
                    }
                    )), je({
                        priority: "sampler",
                        batch: 1
                    }), Re(((e,t)=>{
                        let {defers: r, fxID: n} = t;
                        t.inFlight > 0 || 0 === r.length || Promise.resolve().then((()=>{
                            t.fxID === n && a(r.splice(0, r.length), (e=>{
                                Ze(e.parentFork),
                                e.rs(e.value)
                            }
                            ))
                        }
                        ))
                    }
                    ), 0, 1)]
                })
                  , r = s({
                    node: [Re(((e,t,r)=>{
                        let n = B(r);
                        if (n) {
                            let t = n.node;
                            if (!L(t, "isCombine") || B(n) && "combine" !== L(B(n).node, "op")) {
                                let n = U(r)
                                  , a = t.scope.state.id
                                  , o = L(t, "sid");
                                n.sidIdMap[o] = a,
                                n.values.sidMap[o] = e;
                                let i = L(t, "serialize");
                                i && n.sidSerializeSettings.set(o, "ignore" === i ? {
                                    ignore: 1
                                } : {
                                    ignore: 0,
                                    write: i.write
                                })
                            }
                        }
                    }
                    ))]
                })
                  , n = s({
                    node: [Re(((e,t,r)=>{
                        let n = U(r);
                        if (n) {
                            let e = B(r);
                            e && (!L(e.node, "isCombine") || B(e) && "combine" !== L(B(e).node, "op")) && (n.warnSerialize = 1)
                        }
                    }
                    ))]
                })
                  , o = {
                    cloneOf: e,
                    reg: {},
                    values: {
                        sidMap: {},
                        idMap: {}
                    },
                    sidIdMap: {},
                    sidSerializeSettings: new Map,
                    getState(e) {
                        if ("current"in e)
                            return nt(Qe, o, null, e).current;
                        let t = z(e);
                        return nt(Qe, o, t, t.scope.state, 1).current
                    },
                    kind: "scope",
                    graphite: s({
                        family: {
                            type: "domain",
                            links: [t, r, n]
                        },
                        meta: {
                            unit: "fork"
                        },
                        scope: {
                            forkInFlightCounter: t
                        }
                    }),
                    additionalLinks: {},
                    handlers: {
                        sidMap: {},
                        unitMap: new Map
                    },
                    fxCount: t,
                    storeChange: r,
                    warnSerializeNode: n,
                    activeEffects: []
                };
                return o
            }
            )(r);
            if (n) {
                let e = n.scope;
                if (e) {
                    let t = e.activeEffects;
                    e.activeEffects = [],
                    i.activeEffects = t,
                    a(t, (e=>e.ref = i))
                }
                if (n.values) {
                    let {sidMap: e, unitMap: t, hasSidDoubles: r} = E(n.values, (e=>o(H(e), "Values map can contain only stores as keys")));
                    Object.assign(i.values.sidMap, e),
                    a(t, ((e,t)=>{
                        i.values.idMap[t.stateRef.id] = e
                    }
                    )),
                    i.fromSerialize = !(Array.isArray(n.values) || n.values instanceof Map),
                    i.hasSidDoubles = r
                }
                n.handlers && (i.handlers = E(n.handlers, (e=>o(J(e), "Handlers map can contain only effects as keys"))))
            }
            return i
        }
        function N(e, {scope: t, safe: r}={}) {
            o(t || He || r, "scopeBind cannot be called outside of forked .watch");
            let n = t || He;
            return J(e) ? t=>{
                let r = g();
                return u({
                    target: e,
                    params: {
                        params: t,
                        req: r
                    },
                    scope: n
                }),
                r.req
            }
            : t=>(u({
                target: e,
                params: t,
                scope: n
            }),
            t)
        }
        r.d(t, {
            allSettled: ()=>P,
            attach: ()=>b,
            clearNode: ()=>dt,
            combine: ()=>y,
            createApi: ()=>S,
            createDomain: ()=>w,
            createEffect: ()=>v,
            createEvent: ()=>p,
            createNode: ()=>s,
            createStore: ()=>h,
            fork: ()=>j,
            forward: ()=>ht,
            guard: ()=>C,
            is: ()=>Z,
            launch: ()=>u,
            merge: ()=>_,
            restore: ()=>M,
            sample: ()=>x,
            scopeBind: ()=>N,
            setGraphInspector: ()=>ce,
            setInspector: ()=>at,
            split: ()=>O,
            step: ()=>ze,
            withRegion: ()=>i
        });
        let R = "undefined" != typeof Symbol && Symbol.observable || "@@observable"
          , A = "map"
          , $ = "stack"
          , z = e=>e.graphite || e
          , D = e=>e.family.owners
          , I = e=>e.family.links
          , q = e=>e.stateRef
          , F = e=>e.value
          , T = e=>e.subscribers
          , B = e=>e.parent
          , U = e=>e.scope
          , L = (e,t)=>z(e).meta[t]
          , K = (e,t,r)=>z(e).meta[t] = r
          , W = e=>e.compositeName
          , V = e=>(ve(e) || ge(e)) && "kind"in e;
        const G = e=>t=>V(t) && t.kind === e;
        let H = G("store")
          , Y = G("event")
          , J = G("effect")
          , X = G("domain")
          , Q = G("scope");
        var Z = {
            __proto__: null,
            unit: V,
            store: H,
            event: Y,
            effect: J,
            domain: X,
            scope: Q,
            attached: e=>J(e) && 1 == L(e, "attached")
        };
        let ee = (e,t)=>e.includes(t)
          , te = (e,t)=>{
            let r = e.indexOf(t);
            -1 !== r && e.splice(r, 1)
        }
          , re = (e,t)=>e.push(t)
          , ne = (e,t,r)=>!e && console.error(`${t} is deprecated ${r ? `, use ${r} instead` : ""}`);
        const ae = ()=>{
            let e = 0;
            return ()=>"" + ++e
        }
        ;
        let oe, ie = ae(), se = ae(), ue = ae(), le = ae(), ce = e=>{
            oe = e
        }
        , fe = null, de = e=>{
            oe && oe(e, fe)
        }
        , pe = ()=>fe && fe.template, me = e=>(e && fe && fe.sidRoot && (e = `${fe.sidRoot}|${e}`),
        e), he = (e,t)=>{
            let r = z(e);
            a(t, (e=>{
                let t = z(e);
                "domain" !== r.family.type && (t.family.type = "crosslink"),
                re(D(t), r),
                re(I(r), t)
            }
            ))
        }
        , ye = (e=[])=>(Array.isArray(e) ? e : [e]).flat().map(z), ge = e=>"object" == typeof e && null !== e, ve = e=>"function" == typeof e, be = e=>void 0 === e, Se = e=>o(ge(e) || ve(e), "expect first argument be an object");
        const we = (e,t,r,n)=>o(!(!ge(e) && !ve(e) || !("family"in e) && !("graphite"in e)), `${t}: expect ${r} to be a unit (store, event or effect)${n}`);
        let _e = (e,t,r)=>{
            Array.isArray(e) ? a(e, ((e,n)=>we(e, t, `${n} item of ${r}`, ""))) : we(e, t, r, " or array of units")
        }
          , ke = (e,t,r="target")=>a(ye(t), (t=>ne(!L(t, "derived"), `${e}: derived unit in "${r}"`, "createEvent/createStore")))
          , xe = (e,{fn: t},{a: r})=>t(e, r)
          , Ce = (e,{fn: t},{a: r})=>t(r, e)
          , Me = (e,{fn: t})=>t(e);
        const Oe = (e,t,r,n)=>{
            let a = {
                id: se(),
                type: e,
                data: t
            };
            return r && (a.order = {
                priority: r
            },
            n && (a.order.barrierID = ++Pe)),
            a
        }
        ;
        let Pe = 0
          , Ee = ({from: e="store", store: t, target: r, to: n=(r ? "store" : $), batch: a, priority: o})=>Oe("mov", {
            from: e,
            store: t,
            to: n,
            target: r
        }, o, a)
          , je = ({fn: e, batch: t, priority: r, safe: n=0, filter: a=0, pure: o=0})=>Oe("compute", {
            fn: e,
            safe: n,
            filter: a,
            pure: o
        }, r, t)
          , Ne = ({fn: e})=>je({
            fn: e,
            priority: "effect"
        })
          , Re = (e,t,r)=>je({
            fn: e,
            safe: 1,
            filter: t,
            priority: r && "effect"
        })
          , Ae = (e,t,r)=>Ee({
            store: e,
            to: t ? $ : "a",
            priority: r && "sampler",
            batch: 1
        })
          , $e = (e=Me,t)=>je({
            fn: e,
            pure: 1,
            filter: t
        })
          , ze = {
            mov: Ee,
            compute: je,
            filter: ({fn: e, pure: t})=>je({
                fn: e,
                filter: 1,
                pure: t
            }),
            run: Ne
        }
          , De = e=>({
            id: se(),
            current: e
        })
          , Ie = ({current: e})=>e
          , qe = (e,t)=>{
            e.before || (e.before = []),
            re(e.before, t)
        }
          , Fe = null;
        const Te = (e,t)=>{
            if (!e)
                return t;
            if (!t)
                return e;
            let r;
            return (e.v.type === t.v.type && e.v.id > t.v.id || Ve(e.v.type) > Ve(t.v.type)) && (r = e,
            e = t,
            t = r),
            r = Te(e.r, t),
            e.r = e.l,
            e.l = r,
            e
        }
          , Be = [];
        let Ue = 0;
        for (; Ue < 6; )
            re(Be, {
                first: null,
                last: null,
                size: 0
            }),
            Ue += 1;
        const Le = ()=>{
            for (let e = 0; e < 6; e++) {
                let t = Be[e];
                if (t.size > 0) {
                    if (3 === e || 4 === e) {
                        t.size -= 1;
                        let e = Fe.v;
                        return Fe = Te(Fe.l, Fe.r),
                        e
                    }
                    1 === t.size && (t.last = null);
                    let r = t.first;
                    return t.first = r.r,
                    t.size -= 1,
                    r.v
                }
            }
        }
          , Ke = (e,t,r,n,a,o,i)=>We(0, {
            a: null,
            b: null,
            node: r,
            parent: n,
            value: a,
            page: t,
            scope: o,
            meta: i
        }, e)
          , We = (e,t,r,n=0)=>{
            let a = Ve(r)
              , o = Be[a]
              , i = {
                v: {
                    idx: e,
                    stack: t,
                    type: r,
                    id: n
                },
                l: null,
                r: null
            };
            3 === a || 4 === a ? Fe = Te(Fe, i) : (0 === o.size ? o.first = i : o.last.r = i,
            o.last = i),
            o.size += 1
        }
          , Ve = e=>{
            switch (e) {
            case "child":
                return 0;
            case "pure":
                return 1;
            case "read":
                return 2;
            case "barrier":
                return 3;
            case "sampler":
                return 4;
            case "effect":
                return 5;
            default:
                return -1
            }
        }
          , Ge = new Set;
        let He, Ye = 1, Je = 0, Xe = 0, Qe = null, Ze = e=>{
            He = e
        }
        , et = e=>{
            Qe = e
        }
        ;
        const tt = (e,t)=>{
            if (e) {
                for (; e && !e.reg[t]; )
                    e = B(e);
                if (e)
                    return e
            }
            return null
        }
        ;
        let rt, nt = (e,t,r,n,a)=>{
            let o = tt(e, n.id);
            return o ? o.reg[n.id] : t ? (it(t, n, a),
            t.reg[n.id]) : n
        }
        , at = e=>{
            rt = e
        }
        ;
        const ot = e=>e;
        let it = (e,t,r,n,o)=>{
            var i;
            let s = e.reg
              , u = t.sid
              , l = null == t || null === (i = t.meta) || void 0 === i ? void 0 : i.serialize
              , c = e.fromSerialize && "ignore" !== l && (null == l ? void 0 : l.read) || ot;
            if (s[t.id])
                return;
            let f = {
                id: t.id,
                current: t.current,
                meta: t.meta
            };
            if (f.id in e.values.idMap)
                f.current = e.values.idMap[f.id];
            else if (u && u in e.values.sidMap && !(u in e.sidIdMap))
                f.current = c(e.values.sidMap[u]);
            else if (t.before && !o) {
                let o = 0
                  , i = r || !t.noInit || n;
                a(t.before, (t=>{
                    switch (t.type) {
                    case A:
                        {
                            let a = t.from;
                            if (a || t.fn) {
                                a && it(e, a, r, n);
                                let o = a && s[a.id].current;
                                i && (f.current = t.fn ? t.fn(o) : o)
                            }
                            break
                        }
                    case "field":
                        o || (o = 1,
                        f.current = Array.isArray(f.current) ? [...f.current] : {
                            ...f.current
                        }),
                        it(e, t.from, r, n),
                        i && (f.current[t.field] = s[s[t.from.id].id].current)
                    }
                }
                ))
            }
            u && (e.sidIdMap[u] = t.id),
            s[t.id] = f
        }
        ;
        const st = (e,t,r)=>{
            try {
                return t(F(r), e.scope, r)
            } catch (t) {
                console.error(t),
                e.fail = 1,
                e.failReason = t
            }
        }
        ;
        let ut = (e,t={})=>(ge(e) && (ut(e.or, t),
        n(e, ((e,r)=>{
            be(e) || "or" === r || "and" === r || (t[r] = e)
        }
        )),
        ut(e.and, t)),
        t);
        const lt = (e,t)=>{
            te(e.next, t),
            te(D(e), t),
            te(I(e), t)
        }
          , ct = (e,t,r)=>{
            let n;
            e.next.length = 0,
            e.seq.length = 0,
            e.scope = null;
            let a = I(e);
            for (; n = a.pop(); )
                lt(n, e),
                (t || r && "sample" !== L(e, "op") || "crosslink" === n.family.type) && ct(n, t, "on" !== L(n, "op") && r);
            for (a = D(e); n = a.pop(); )
                lt(n, e),
                r && "crosslink" === n.family.type && ct(n, t, "on" !== L(n, "op") && r)
        }
          , ft = e=>e.clear();
        let dt = (e,{deep: t}={})=>{
            let r = 0;
            if (e.ownerSet && e.ownerSet.delete(e),
            H(e))
                ft(T(e));
            else if (X(e)) {
                r = 1;
                let t = e.history;
                ft(t.events),
                ft(t.effects),
                ft(t.stores),
                ft(t.domains)
            }
            ct(z(e), !!t, r)
        }
          , pt = e=>{
            let t = ()=>dt(e);
            return t.unsubscribe = t,
            t
        }
          , mt = (e,t,r,n,a)=>s({
            node: r,
            parent: e,
            child: t,
            scope: {
                fn: a
            },
            meta: {
                op: n
            },
            family: {
                owners: [e, t],
                links: t
            },
            regional: 1
        })
          , ht = e=>{
            let t = "forward"
              , [{from: r, to: n},a] = f(e, 1);
            return _e(r, t, '"from"'),
            _e(n, t, '"to"'),
            ke(t, n, "to"),
            pt(s({
                parent: r,
                child: n,
                meta: {
                    op: t,
                    config: a
                },
                family: {},
                regional: 1
            }))
        }
          , yt = (e,t)=>(o(ve(t), ".watch argument should be a function"),
        pt(s({
            scope: {
                fn: t
            },
            node: [Ne({
                fn: Me
            })],
            parent: e,
            meta: {
                op: "watch"
            },
            family: {
                owners: e
            },
            regional: 1
        })))
          , gt = (e,t,r="event")=>{
            B(e) && B(e).hooks[r](t)
        }
          , vt = (e,t,r)=>{
            let n = ut(r)
              , a = "domain" === e
              , o = ie()
              , {sid: i=null, named: s=null, domain: u=null, parent: l=u} = n
              , f = s || n.name || (a ? "" : o)
              , d = c(f, l)
              , p = {
                op: t.kind = e,
                name: t.shortName = f,
                sid: t.sid = me(i),
                named: s,
                unitId: t.id = o,
                serialize: n.serialize,
                derived: n.derived,
                config: n
            };
            if (t.parent = l,
            t.compositeName = d,
            t.defaultConfig = n,
            t.thru = e=>(ne(0, "thru", "js pipe"),
            e(t)),
            t.getType = ()=>d.fullName,
            !a) {
                t.subscribe = e=>(Se(e),
                t.watch(ve(e) ? e : t=>e.next && e.next(t))),
                t[R] = ()=>t;
                let e = pe();
                e && (p.nativeTemplate = e)
            }
            return p
        }
        ;
        const bt = (e,t,r,n)=>{
            let a;
            ge(r) && (a = r,
            r = r.fn);
            let o = p({
                name: `${e.shortName} → *`,
                derived: 1,
                and: a
            });
            return mt(e, o, n, t, r),
            o
        }
          , St = (e,t,r,n,a)=>{
            let o = q(t)
              , i = Ee({
                store: o,
                to: "a",
                priority: "read"
            });
            r === A && (i.data.softRead = 1);
            let s = [i, $e(n)];
            return d("storeOnMap", o, s, H(e) && q(e)),
            mt(e, t, s, r, a)
        }
          , wt = (e,t,r,a,i)=>{
            let s = e ? e=>[...e] : e=>({
                ...e
            })
              , u = e ? [] : {}
              , c = s(u)
              , f = De(c)
              , p = De(1);
            f.type = e ? "list" : "shape",
            f.noInit = 1,
            d("combineBase", f, p);
            let m = h(c, {
                name: l(r),
                derived: 1,
                and: a
            })
              , y = q(m);
            y.noInit = 1,
            K(m, "isCombine", 1);
            let g = Ae(f);
            g.order = {
                priority: "barrier"
            };
            let v = [Re(((e,t,r)=>(r.scope && !r.scope.reg[f.id] && (r.c = 1),
            e))), g, Ee({
                store: p,
                to: "b"
            }), Re(((e,{key: r},n)=>{
                if (n.c || e !== n.a[r])
                    return t && n.b && (n.a = s(n.a)),
                    n.a[r] = e,
                    1
            }
            ), 1), Ee({
                from: "a",
                target: f
            }), Ee({
                from: "value",
                store: 0,
                target: p
            }), Ee({
                from: "value",
                store: 1,
                target: p,
                priority: "barrier",
                batch: 1
            }), Ae(f, 1), i && $e()];
            return n(r, ((e,t)=>{
                if (!H(e))
                    return o(!V(e) && !be(e), `combine expects a store in a field ${t}`),
                    void (c[t] = u[t] = e);
                u[t] = e.defaultState,
                c[t] = e.getState();
                let r = mt(e, m, v, "combine", i);
                r.scope.key = t;
                let n = q(e);
                qe(f, {
                    type: "field",
                    field: t,
                    from: n
                }),
                d("combineField", n, r)
            }
            )),
            m.defaultShape = r,
            qe(y, {
                type: A,
                from: f,
                fn: i
            }),
            pe() || (m.defaultState = i ? y.current = i(c) : u),
            m
        }
        ;
        let _t = (e,t,r)=>{
            try {
                return [1, e(...r)]
            } catch (e) {
                return t(e),
                [0, null]
            }
        }
          , kt = e=>{
            let t = U(e)
              , r = {
                ref: t
            };
            return t && re(t.activeEffects, r),
            r
        }
          , xt = (e,t,r,n,a,o)=>i=>{
            o.ref && te(o.ref.activeEffects, o),
            u({
                target: [n, Ct],
                params: [r ? {
                    status: "done",
                    params: e,
                    result: i
                } : {
                    status: "fail",
                    params: e,
                    error: i
                }, {
                    value: i,
                    fn: r ? t.rs : t.rj
                }],
                defer: 1,
                page: a.page,
                scope: o.ref,
                meta: a.meta
            })
        }
        ;
        const Ct = s({
            node: [Ne({
                fn: ({fn: e, value: t})=>e(t)
            })],
            meta: {
                op: "fx",
                fx: "sidechain"
            }
        })
          , Mt = ["source", "clock", "target"]
          , Ot = (e,t)=>e + `: ${t} should be defined`;
        let Pt = (e,t,r,n,a,i,s,u,l,c,f,m)=>{
            let g = !!a;
            o(!be(r) || !be(t), Ot(e, "either source or clock"));
            let v = 0;
            be(r) ? v = 1 : V(r) || (r = y(r)),
            be(t) ? t = r : (_e(t, e, "clock"),
            Array.isArray(t) && (t = _(t))),
            v && (r = t),
            u || s || (s = r.shortName);
            let b = "none";
            (f || n) && (V(n) ? b = "unit" : (o(ve(n), "`filter` should be function or unit"),
            b = "fn")),
            a ? (_e(a, e, "target"),
            ke(e, a)) : "none" === b && c && H(r) && H(t) ? a = h(i ? i(Ie(q(r)), Ie(q(t))) : Ie(q(r)), {
                name: s,
                sid: m,
                or: u
            }) : (a = p({
                name: s,
                derived: 1,
                or: u
            }),
            d("sampleTarget", z(a)));
            let S = De()
              , w = [];
            if ("unit" === b) {
                let[r,o] = jt(n, a, t, S, e);
                w = [...Et(o), ...Et(r)]
            }
            let[k,x] = jt(r, a, t, S, e)
              , C = mt(t, a, [d("sampleSourceLoader"), Ee({
                from: $,
                target: S
            }), ...Et(x), Ae(k, 1, l), ...w, Ae(S), "fn" === b && $e(((e,t,{a: r})=>n(e, r)), 1), i && $e(xe), d("sampleSourceUpward", g)], e, i);
            return he(r, [C]),
            Object.assign(C.meta, u, {
                joint: 1
            }),
            a
        }
        ;
        const Et = e=>[Ae(e), Re(((e,t,{a: r})=>r), 1)]
          , jt = (e,t,r,n,a)=>{
            let o = H(e)
              , i = o ? q(e) : De()
              , u = De(o);
            return o || s({
                parent: e,
                node: [Ee({
                    from: $,
                    target: i
                }), Ee({
                    from: "value",
                    store: 1,
                    target: u
                })],
                family: {
                    owners: [e, t, r],
                    links: t
                },
                meta: {
                    op: a
                },
                regional: 1
            }),
            d("sampleSource", u, i, n),
            [i, u]
        }
          , Nt = (e,t,r,n)=>{
            let a = e[t];
            a && u({
                target: a,
                params: Array.isArray(a) ? a.map((()=>r)) : r,
                defer: 1,
                stack: n
            })
        }
    }
    ,
    57746: (e,t,r)=>{
        "use strict";
        r.d(t, {
            inspect: ()=>a
        });
        var n = r(798116);
        function a(e) {
            return c.add(e),
            o((()=>{
                c.delete(e)
            }
            ))
        }
        function o(e) {
            let t = ()=>e();
            return t.unsubscribe = t,
            t
        }
        function i(e) {
            let {node: t} = e;
            return s(t)
        }
        function s(e) {
            let {meta: t, id: r} = e
              , n = (e=>e.config ? e.config.loc : e.loc)(t)
              , {sid: a, name: o, op: i} = t;
            return {
                meta: t,
                id: r,
                sid: a,
                name: o,
                kind: i,
                loc: n,
                derived: t.derived
            }
        }
        function u(e) {
            let t = []
              , r = e.parent;
            for (; r; )
                t.push({
                    type: "update",
                    value: r.value,
                    stack: r.meta || {},
                    ...i(r)
                }),
                r = r.parent;
            return t
        }
        function l(e) {
            if (!e)
                return;
            let {parent: t, meta: r, id: n} = e
              , a = l(t) || void 0;
            if ("factory" === r.type) {
                let {sid: e, name: t, loc: o, method: i} = r;
                return {
                    type: "factory",
                    id: n,
                    region: a,
                    meta: r,
                    sid: e,
                    name: t,
                    loc: o,
                    method: i
                }
            }
            return {
                type: "region",
                id: n,
                region: a,
                meta: r
            }
        }
        const c = new Set;
        (0,
        n.setInspector)(((e,t)=>{
            let {scope: r} = e;
            c.forEach((n=>{
                n.scope !== r && (n.scope || r) || n.fn({
                    type: t.fail ? "error" : "update",
                    value: e.value,
                    error: t.fail ? t.failReason : void 0,
                    stack: e.meta || {},
                    trace: n.trace ? u(e) : [],
                    ...i(e)
                })
            }
            ))
        }
        ));
        const f = new Set;
        (0,
        n.setGraphInspector)(((e,t)=>{
            let r;
            r = "region" === e ? l(t) : ((e,t)=>{
                let r = s(e);
                return {
                    type: "unit",
                    region: l(t),
                    ...r
                }
            }
            )(e, t),
            r && f.forEach((e=>{
                e.fn(r)
            }
            ))
        }
        ))
    }
}]);
try {
    stManager.done("dist/state-management.949c4849edbbdbe7aa47.js")
} catch (e) {}
