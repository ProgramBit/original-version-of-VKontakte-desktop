(()=>{
    "use strict";
    var e, t, n, r = {
        312746: (e,t,n)=>{
            var r;
            n.d(t, {
                ResourceMetricAvailableTypes: ()=>i
            }),
            function(e) {
                e.LINK = "link",
                e.CSS = "css",
                e.SCRIPT = "script",
                e.EARLY_HINTS = "early-hints",
                e.AUDIO = "audio",
                e.IMG = "img",
                e.FETCH = "fetch",
                e.IFRAME = "iframe",
                e.XMLHTTPREQUEST = "xmlhttprequest",
                e.NAVIGATION = "navigation"
            }(r || (r = {}));
            const i = Object.values(r)
        }
        ,
        813471: (e,t,n)=>{
            n.d(t, {
                collectResourceMetrics: ()=>c
            });
            var r = n(519378)
              , i = n(385376)
              , a = n(839470);
            const o = (0,
            n(404145).isMvk)() ? "mvk" : "web";
            function u(e, t) {
                e.forEach((({deltas: e, domain: n, type: r})=>{
                    Object.entries(e).forEach((([e,a])=>{
                        (0,
                        i.saveStatlogEvents)({
                            name: "web_perf_resource_timing",
                            value: Math.floor(a),
                            keys: [o, n, e, r, t ? "lookup" : "not_lookup"]
                        })
                    }
                    ))
                }
                ))
            }
            function c() {
                (0,
                a.partConfigEnabled)("resource_timing_stats") && window.addEventListener("load", (()=>{
                    const e = (0,
                    r.getResourceTimingData)();
                    u(e.all, !1),
                    u(e.domainLookup, !0)
                }
                ))
            }
        }
        ,
        519378: (e,t,n)=>{
            n.d(t, {
                getResourceTimingData: ()=>u
            });
            n(434788);
            var r = n(312746);
            function i(e) {
                const {fetchStart: t, redirectEnd: n, redirectStart: r, domainLookupStart: i, domainLookupEnd: a, connectStart: o, secureConnectionStart: u, connectEnd: c, requestStart: s, responseStart: l, initiatorType: d, transferSize: f, name: m} = e;
                if (!(0 !== s && 0 !== l && 0 !== f))
                    return null;
                return {
                    name: m,
                    initiatorType: d,
                    deltas: {
                        cache: i - t,
                        dns: a - i,
                        tcp: c - o,
                        tls: s - u,
                        request: l - s,
                        redirect: n - r,
                        ttfb: l - t
                    },
                    isDomainLookup: i !== a
                }
            }
            function a(e) {
                return e.reduce(((e,t)=>{
                    const {name: n, initiatorType: r, deltas: i} = t
                      , [a] = n.replace(/https?:\/\//, "").split("/")
                      , o = a.match(/[^.]*?\.[^.]*?$/g);
                    if (o) {
                        const [t] = o;
                        e[t] || (e[t] = {}),
                        e[t][r] || (e[t][r] = []),
                        e[t][r] && e[t][r].push(i)
                    }
                    return e
                }
                ), {})
            }
            function o(e) {
                return Object.entries(e).reduce(((e,[t,n])=>Object.entries(n).reduce(((e,[n,i])=>{
                    if (r.ResourceMetricAvailableTypes.includes(n)) {
                        const r = {
                            deltas: (a = i,
                            Object.fromEntries(Object.entries(a.reduce(((e,t)=>(Object.entries(t).forEach((([t,n])=>e[t].push(n))),
                            e)), {
                                cache: [],
                                dns: [],
                                tcp: [],
                                tls: [],
                                request: [],
                                redirect: [],
                                ttfb: []
                            })).map((([e,t])=>[e, t.length ? t.reduce(((e,t)=>e + t)) / t.length : 0])))),
                            type: n,
                            domain: t
                        };
                        e.push(r)
                    }
                    var a;
                    return e
                }
                ), e)), [])
            }
            function u() {
                return function(e) {
                    const t = e.map(i).filter(Boolean)
                      , n = t.filter((({isDomainLookup: e})=>e))
                      , r = a(t)
                      , u = a(n);
                    return {
                        all: o(r),
                        domainLookup: o(u)
                    }
                }([...performance.getEntriesByType("navigation"), ...performance.getEntriesByType("resource")])
            }
        }
        ,
        543727: (e,t,n)=>{
            var r;
            n.d(t, {
                CustomMetricName: ()=>r
            }),
            function(e) {
                e.FCP_WITHOUT_TTFB = "FCP_WITHOUT_TTFB",
                e.LCP_WITHOUT_TTFB = "LCP_WITHOUT_TTFB",
                e.LCP_RESOURCE_LOAD_TIME = "LCP_RESOURCE_LOAD_TIME",
                e.LCP_RESOURCE_LOAD_DELAY = "LCP_RESOURCE_LOAD_DELAY",
                e.LCP_ELEMENT_RENDER_DELAY = "LCP_ELEMENT_RENDER_DELAY",
                e.TTFB_WAITING_TIME = "TTFB_WAITING_TIME",
                e.TTFB_DNS_TIME = "TTFB_DNS_TIME",
                e.TTFB_CONNECTION_TIME = "TTFB_CONNECTION_TIME",
                e.TTFB_REQUEST_TIME = "TTFB_REQUEST_TIME",
                e.TBT = "TBT"
            }(r || (r = {}))
        }
        ,
        799252: (e,t,n)=>{
            n.d(t, {
                CustomMetricName: ()=>r.CustomMetricName
            });
            var r = n(543727)
        }
        ,
        904775: (e,t,n)=>{
            n.d(t, {
                reportWebVitals: ()=>C
            });
            var r = n(434788)
              , i = n(404145)
              , a = n(858980)
              , o = n(839470)
              , u = n(796943)
              , c = n(121677)
              , s = n(28131)
              , l = n(745163)
              , d = n(45528)
              , f = n(799252)
              , m = n(72252);
            let v = !1;
            const T = (0,
            i.getGlobalObject)()
              , p = (e,t,n)=>{
                if ((0,
                m.isValidMetricValue)(n))
                    return (0,
                    m.updateMetricTimestamp)(n.name),
                    (0,
                    s.saveWebPerfStats)([n.name, Math.round(n.value), (0,
                    m.getMeasuredModule)(e), t, c.default.getConnectionEffectiveType()])
            }
              , g = e=>e !== l.navigationStat.getModule()
              , E = e=>e !== l.navigationStat.getScreen()
              , h = (e,t,n)=>{
                if (!g(e) && !E(t) && (0,
                m.isValidWebVitalsMetric)(n) && !(0,
                m.metricOnCoolDown)(m.METRICS_COLLECTING_TIMEOUT, n.name))
                    switch (v || (v = !0,
                    (0,
                    d.onTTFB)((n=>h(e, t, n)))),
                    n.name) {
                    case "FCP":
                        p(e, t, n),
                        p(e, t, {
                            name: f.CustomMetricName.FCP_WITHOUT_TTFB,
                            value: n.attribution.firstByteToFCP
                        });
                        break;
                    case "LCP":
                        p(e, t, n),
                        p(e, t, {
                            name: f.CustomMetricName.LCP_WITHOUT_TTFB,
                            value: n.value - n.attribution.timeToFirstByte
                        }),
                        p(e, t, {
                            name: f.CustomMetricName.LCP_RESOURCE_LOAD_DELAY,
                            value: n.attribution.resourceLoadDelay
                        }),
                        p(e, t, {
                            name: f.CustomMetricName.LCP_RESOURCE_LOAD_TIME,
                            value: n.attribution.resourceLoadTime
                        }),
                        p(e, t, {
                            name: f.CustomMetricName.LCP_ELEMENT_RENDER_DELAY,
                            value: n.attribution.elementRenderDelay
                        });
                        break;
                    case "TTFB":
                        p(e, t, n),
                        p(e, t, {
                            name: f.CustomMetricName.TTFB_WAITING_TIME,
                            value: n.attribution.waitingTime
                        }),
                        p(e, t, {
                            name: f.CustomMetricName.TTFB_DNS_TIME,
                            value: n.attribution.dnsTime
                        }),
                        p(e, t, {
                            name: f.CustomMetricName.TTFB_CONNECTION_TIME,
                            value: n.attribution.connectionTime
                        }),
                        p(e, t, {
                            name: f.CustomMetricName.TTFB_REQUEST_TIME,
                            value: n.attribution.requestTime
                        });
                        break;
                    case "FID":
                    case "INP":
                        p(e, t, n);
                        break;
                    case "CLS":
                        p(e, t, (0,
                        r._)({}, n, {
                            value: 1e3 * n.value
                        }))
                    }
            }
              , y = ()=>{
                var e;
                const t = l.navigationStat.getModule()
                  , n = l.navigationStat.getScreen();
                (0,
                a.shouldBeMeasured)() && ((0,
                m.pruneMetricTimestamps)(),
                (0,
                d.onFID)((e=>h(t, n, e))),
                (null == (e = T.browser) ? void 0 : e.chrome) && ((0,
                d.onFCP)((e=>{
                    const {value: r} = e;
                    (0,
                    m.initTotalBlockingTime)(r, (e=>((e,t,n)=>{
                        g(e) || E(t) || (0,
                        m.metricOnCoolDown)(m.METRICS_COLLECTING_TIMEOUT, n.name) || p(e, t, n)
                    }
                    )(t, n, e))),
                    h(t, n, e)
                }
                )),
                (0,
                d.onLCP)((e=>h(t, n, e))),
                (0,
                d.onCLS)((e=>h(t, n, e))),
                (0,
                o.partConfigEnabled)("web_vitals_inp") && (0,
                d.onINP)((e=>h(t, n, e)))))
            }
              , C = ()=>{
                if (T.performance && T.document)
                    return (0,
                    u.onDomReady)(y)
            }
        }
        ,
        72252: (e,t,n)=>{
            n.d(t, {
                METRICS_COLLECTING_TIMEOUT: ()=>c,
                getMeasuredModule: ()=>E,
                initTotalBlockingTime: ()=>g,
                isValidMetricValue: ()=>T,
                isValidWebVitalsMetric: ()=>p,
                metricOnCoolDown: ()=>f,
                pruneMetricTimestamps: ()=>v,
                updateMetricTimestamp: ()=>m
            });
            var r = n(404145)
              , i = n(307411)
              , a = n(799252)
              , o = n(858980)
              , u = n(745163);
            const c = 288e5
              , s = `PERF_METRICS_TIMESTAMPS_ ${(0,
            r.isMvk)() ? "MVK" : "WEB"}`
              , {getModule: l} = u.navigationStat
              , d = ()=>{
                let e = {};
                try {
                    e = JSON.parse(i.vkLocalStorage.getItem(s) || "{}")
                } catch (e) {}
                return e
            }
              , f = (e,t)=>{
                var n;
                const r = l();
                return ((null == (n = d()[r]) ? void 0 : n[t]) || 0) + e >= Date.now()
            }
              , m = e=>{
                const t = l()
                  , n = Date.now()
                  , r = d();
                r[t] || (r[t] = {}),
                r[t][e] = n,
                r.updatedAt = n,
                i.vkLocalStorage.setItem(s, JSON.stringify(r))
            }
              , v = ()=>(0,
            o.pruneOutdatedTimestamps)(s, c)
              , T = ({name: e, value: t})=>{
                var n;
                return t > (null != (n = {
                    CLS: -1 / 0,
                    INP: -1 / 0
                }[e]) ? n : 16)
            }
              , p = ({delta: e, value: t, entries: n})=>{
                var r;
                return t === e && (null == (r = n) ? void 0 : r.length)
            }
              , g = (e,t)=>{
                let n = {
                    value: 0,
                    name: a.CustomMetricName.TBT
                };
                new PerformanceObserver((t=>{
                    t.getEntries().forEach((t=>{
                        if (t.startTime < e)
                            return;
                        const r = t.duration - 50;
                        r > 0 && (n.value += r)
                    }
                    ))
                }
                )).observe({
                    type: "longtask",
                    buffered: !0
                }),
                window.addEventListener("load", (()=>{
                    t(n)
                }
                ))
            }
              , E = e=>"/market" === window.location.pathname ? "market_catalog" : e
        }
        ,
        588774: (e,t,n)=>{
            var r, i, a, o = n(904775), u = n(839470), c = n(641447), s = n(813471);
            (null == (i = window.vk) || null == (r = i.pe) ? void 0 : r.static_manager_dynamic_imports) && (null == (a = window.vk) ? void 0 : a.stDomain) && (n.p = window.vk.stDomain + "/dist/"),
            (0,
            o.reportWebVitals)(),
            (0,
            s.collectResourceMetrics)(),
            window && window.performance && window.performance.memory && (0,
            u.randEnabled)(.05) && (0,
            c.collectMemoryStats)();
            try {
                window.stManager.done(window.jsc("web/performance_observers.js"))
            } catch (e) {}
        }
        ,
        45528: (e,t,n)=>{
            n.d(t, {
                onCLS: ()=>F,
                onFCP: ()=>D,
                onFID: ()=>H,
                onINP: ()=>te,
                onLCP: ()=>ie,
                onTTFB: ()=>ce
            });
            var r, i, a, o, u, c = function() {
                return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
            }, s = function(e) {
                if ("loading" === document.readyState)
                    return "loading";
                var t = c();
                if (t) {
                    if (e < t.domInteractive)
                        return "loading";
                    if (0 === t.domContentLoadedEventStart || e < t.domContentLoadedEventStart)
                        return "dom-interactive";
                    if (0 === t.domComplete || e < t.domComplete)
                        return "dom-content-loaded"
                }
                return "complete"
            }, l = function(e) {
                var t = e.nodeName;
                return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, "")
            }, d = function(e, t) {
                var n = "";
                try {
                    for (; e && 9 !== e.nodeType; ) {
                        var r = e
                          , i = r.id ? "#" + r.id : l(r) + (r.className && r.className.trim().length ? "." + r.className.trim().replace(/\s+/g, ".") : "");
                        if (n.length + i.length > (t || 100) - 1)
                            return n || i;
                        if (n = n ? i + ">" + n : i,
                        r.id)
                            break;
                        e = r.parentNode
                    }
                } catch (e) {}
                return n
            }, f = -1, m = function() {
                return f
            }, v = function(e) {
                addEventListener("pageshow", (function(t) {
                    t.persisted && (f = t.timeStamp,
                    e(t))
                }
                ), !0)
            }, T = function() {
                var e = c();
                return e && e.activationStart || 0
            }, p = function(e, t) {
                var n = c()
                  , r = "navigate";
                return m() >= 0 ? r = "back-forward-cache" : n && (r = document.prerendering || T() > 0 ? "prerender" : document.wasDiscarded ? "restore" : n.type.replace(/_/g, "-")),
                {
                    name: e,
                    value: void 0 === t ? -1 : t,
                    rating: "good",
                    delta: 0,
                    entries: [],
                    id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                    navigationType: r
                }
            }, g = function(e, t, n) {
                try {
                    if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                        var r = new PerformanceObserver((function(e) {
                            Promise.resolve().then((function() {
                                t(e.getEntries())
                            }
                            ))
                        }
                        ));
                        return r.observe(Object.assign({
                            type: e,
                            buffered: !0
                        }, n || {})),
                        r
                    }
                } catch (e) {}
            }, E = function(e, t, n, r) {
                var i, a;
                return function(o) {
                    t.value >= 0 && (o || r) && ((a = t.value - (i || 0)) || void 0 === i) && (i = t.value,
                    t.delta = a,
                    t.rating = function(e, t) {
                        return e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"
                    }(t.value, n),
                    e(t))
                }
            }, h = function(e) {
                requestAnimationFrame((function() {
                    return requestAnimationFrame((function() {
                        return e()
                    }
                    ))
                }
                ))
            }, y = function(e) {
                var t = function(t) {
                    "pagehide" !== t.type && "hidden" !== document.visibilityState || e(t)
                };
                addEventListener("visibilitychange", t, !0),
                addEventListener("pagehide", t, !0)
            }, C = function(e) {
                var t = !1;
                return function(n) {
                    t || (e(n),
                    t = !0)
                }
            }, b = -1, _ = function() {
                return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
            }, S = function(e) {
                "hidden" === document.visibilityState && b > -1 && (b = "visibilitychange" === e.type ? e.timeStamp : 0,
                L())
            }, M = function() {
                addEventListener("visibilitychange", S, !0),
                addEventListener("prerenderingchange", S, !0)
            }, L = function() {
                removeEventListener("visibilitychange", S, !0),
                removeEventListener("prerenderingchange", S, !0)
            }, O = function() {
                return b < 0 && (b = _(),
                M(),
                v((function() {
                    setTimeout((function() {
                        b = _(),
                        M()
                    }
                    ), 0)
                }
                ))),
                {
                    get firstHiddenTime() {
                        return b
                    }
                }
            }, I = function(e) {
                document.prerendering ? addEventListener("prerenderingchange", (function() {
                    return e()
                }
                ), !0) : e()
            }, w = [1800, 3e3], N = function(e, t) {
                t = t || {},
                I((function() {
                    var n, r = O(), i = p("FCP"), a = g("paint", (function(e) {
                        e.forEach((function(e) {
                            "first-contentful-paint" === e.name && (a.disconnect(),
                            e.startTime < r.firstHiddenTime && (i.value = Math.max(e.startTime - T(), 0),
                            i.entries.push(e),
                            n(!0)))
                        }
                        ))
                    }
                    ));
                    a && (n = E(e, i, w, t.reportAllChanges),
                    v((function(r) {
                        i = p("FCP"),
                        n = E(e, i, w, t.reportAllChanges),
                        h((function() {
                            i.value = performance.now() - r.timeStamp,
                            n(!0)
                        }
                        ))
                    }
                    )))
                }
                ))
            }, P = [.1, .25], F = function(e, t) {
                !function(e, t) {
                    t = t || {},
                    N(C((function() {
                        var n, r = p("CLS", 0), i = 0, a = [], o = function(e) {
                            e.forEach((function(e) {
                                if (!e.hadRecentInput) {
                                    var t = a[0]
                                      , n = a[a.length - 1];
                                    i && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (i += e.value,
                                    a.push(e)) : (i = e.value,
                                    a = [e])
                                }
                            }
                            )),
                            i > r.value && (r.value = i,
                            r.entries = a,
                            n())
                        }, u = g("layout-shift", o);
                        u && (n = E(e, r, P, t.reportAllChanges),
                        y((function() {
                            o(u.takeRecords()),
                            n(!0)
                        }
                        )),
                        v((function() {
                            i = 0,
                            r = p("CLS", 0),
                            n = E(e, r, P, t.reportAllChanges),
                            h((function() {
                                return n()
                            }
                            ))
                        }
                        )),
                        setTimeout(n, 0))
                    }
                    )))
                }((function(t) {
                    !function(e) {
                        if (e.entries.length) {
                            var t = e.entries.reduce((function(e, t) {
                                return e && e.value > t.value ? e : t
                            }
                            ));
                            if (t && t.sources && t.sources.length) {
                                var n = (r = t.sources).find((function(e) {
                                    return e.node && 1 === e.node.nodeType
                                }
                                )) || r[0];
                                if (n)
                                    return void (e.attribution = {
                                        largestShiftTarget: d(n.node),
                                        largestShiftTime: t.startTime,
                                        largestShiftValue: t.value,
                                        largestShiftSource: n,
                                        largestShiftEntry: t,
                                        loadState: s(t.startTime)
                                    })
                            }
                        }
                        var r;
                        e.attribution = {}
                    }(t),
                    e(t)
                }
                ), t)
            }, D = function(e, t) {
                N((function(t) {
                    !function(e) {
                        if (e.entries.length) {
                            var t = c()
                              , n = e.entries[e.entries.length - 1];
                            if (t) {
                                var r = t.activationStart || 0
                                  , i = Math.max(0, t.responseStart - r);
                                return void (e.attribution = {
                                    timeToFirstByte: i,
                                    firstByteToFCP: e.value - i,
                                    loadState: s(e.entries[0].startTime),
                                    navigationEntry: t,
                                    fcpEntry: n
                                })
                            }
                        }
                        e.attribution = {
                            timeToFirstByte: 0,
                            firstByteToFCP: e.value,
                            loadState: s(m())
                        }
                    }(t),
                    e(t)
                }
                ), t)
            }, R = {
                passive: !0,
                capture: !0
            }, k = new Date, B = function(e, t) {
                r || (r = t,
                i = e,
                a = new Date,
                U(removeEventListener),
                A())
            }, A = function() {
                if (i >= 0 && i < a - k) {
                    var e = {
                        entryType: "first-input",
                        name: r.type,
                        target: r.target,
                        cancelable: r.cancelable,
                        startTime: r.timeStamp,
                        processingStart: r.timeStamp + i
                    };
                    o.forEach((function(t) {
                        t(e)
                    }
                    )),
                    o = []
                }
            }, j = function(e) {
                if (e.cancelable) {
                    var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                    "pointerdown" == e.type ? function(e, t) {
                        var n = function() {
                            B(e, t),
                            i()
                        }
                          , r = function() {
                            i()
                        }
                          , i = function() {
                            removeEventListener("pointerup", n, R),
                            removeEventListener("pointercancel", r, R)
                        };
                        addEventListener("pointerup", n, R),
                        addEventListener("pointercancel", r, R)
                    }(t, e) : B(t, e)
                }
            }, U = function(e) {
                ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
                    return e(t, j, R)
                }
                ))
            }, x = [100, 300], W = function(e, t) {
                t = t || {},
                I((function() {
                    var n, a = O(), u = p("FID"), c = function(e) {
                        e.startTime < a.firstHiddenTime && (u.value = e.processingStart - e.startTime,
                        u.entries.push(e),
                        n(!0))
                    }, s = function(e) {
                        e.forEach(c)
                    }, l = g("first-input", s);
                    n = E(e, u, x, t.reportAllChanges),
                    l && y(C((function() {
                        s(l.takeRecords()),
                        l.disconnect()
                    }
                    ))),
                    l && v((function() {
                        var a;
                        u = p("FID"),
                        n = E(e, u, x, t.reportAllChanges),
                        o = [],
                        i = -1,
                        r = null,
                        U(addEventListener),
                        a = c,
                        o.push(a),
                        A()
                    }
                    ))
                }
                ))
            }, H = function(e, t) {
                W((function(t) {
                    !function(e) {
                        var t = e.entries[0];
                        e.attribution = {
                            eventTarget: d(t.target),
                            eventType: t.name,
                            eventTime: t.startTime,
                            eventEntry: t,
                            loadState: s(t.startTime)
                        }
                    }(t),
                    e(t)
                }
                ), t)
            }, V = 0, q = 1 / 0, G = 0, Y = function(e) {
                e.forEach((function(e) {
                    e.interactionId && (q = Math.min(q, e.interactionId),
                    G = Math.max(G, e.interactionId),
                    V = G ? (G - q) / 7 + 1 : 0)
                }
                ))
            }, Q = function() {
                return u ? V : performance.interactionCount || 0
            }, J = function() {
                "interactionCount"in performance || u || (u = g("event", Y, {
                    type: "event",
                    buffered: !0,
                    durationThreshold: 0
                }))
            }, K = [200, 500], $ = 0, z = function() {
                return Q() - $
            }, X = [], Z = {}, ee = function(e) {
                var t = X[X.length - 1]
                  , n = Z[e.interactionId];
                if (n || X.length < 10 || e.duration > t.latency) {
                    if (n)
                        n.entries.push(e),
                        n.latency = Math.max(n.latency, e.duration);
                    else {
                        var r = {
                            id: e.interactionId,
                            latency: e.duration,
                            entries: [e]
                        };
                        Z[r.id] = r,
                        X.push(r)
                    }
                    X.sort((function(e, t) {
                        return t.latency - e.latency
                    }
                    )),
                    X.splice(10).forEach((function(e) {
                        delete Z[e.id]
                    }
                    ))
                }
            }, te = function(e, t) {
                !function(e, t) {
                    t = t || {},
                    I((function() {
                        J();
                        var n, r = p("INP"), i = function(e) {
                            e.forEach((function(e) {
                                e.interactionId && ee(e),
                                "first-input" === e.entryType && !X.some((function(t) {
                                    return t.entries.some((function(t) {
                                        return e.duration === t.duration && e.startTime === t.startTime
                                    }
                                    ))
                                }
                                )) && ee(e)
                            }
                            ));
                            var t, i = (t = Math.min(X.length - 1, Math.floor(z() / 50)),
                            X[t]);
                            i && i.latency !== r.value && (r.value = i.latency,
                            r.entries = i.entries,
                            n())
                        }, a = g("event", i, {
                            durationThreshold: t.durationThreshold || 40
                        });
                        n = E(e, r, K, t.reportAllChanges),
                        a && (a.observe({
                            type: "first-input",
                            buffered: !0
                        }),
                        y((function() {
                            i(a.takeRecords()),
                            r.value < 0 && z() > 0 && (r.value = 0,
                            r.entries = []),
                            n(!0)
                        }
                        )),
                        v((function() {
                            X = [],
                            $ = Q(),
                            r = p("INP"),
                            n = E(e, r, K, t.reportAllChanges)
                        }
                        )))
                    }
                    ))
                }((function(t) {
                    !function(e) {
                        if (e.entries.length) {
                            var t = e.entries.sort((function(e, t) {
                                return t.duration - e.duration || t.processingEnd - t.processingStart - (e.processingEnd - e.processingStart)
                            }
                            ))[0];
                            e.attribution = {
                                eventTarget: d(t.target),
                                eventType: t.name,
                                eventTime: t.startTime,
                                eventEntry: t,
                                loadState: s(t.startTime)
                            }
                        } else
                            e.attribution = {}
                    }(t),
                    e(t)
                }
                ), t)
            }, ne = [2500, 4e3], re = {}, ie = function(e, t) {
                !function(e, t) {
                    t = t || {},
                    I((function() {
                        var n, r = O(), i = p("LCP"), a = function(e) {
                            var t = e[e.length - 1];
                            t && t.startTime < r.firstHiddenTime && (i.value = Math.max(t.startTime - T(), 0),
                            i.entries = [t],
                            n())
                        }, o = g("largest-contentful-paint", a);
                        if (o) {
                            n = E(e, i, ne, t.reportAllChanges);
                            var u = C((function() {
                                re[i.id] || (a(o.takeRecords()),
                                o.disconnect(),
                                re[i.id] = !0,
                                n(!0))
                            }
                            ));
                            ["keydown", "click"].forEach((function(e) {
                                addEventListener(e, u, !0)
                            }
                            )),
                            y(u),
                            v((function(r) {
                                i = p("LCP"),
                                n = E(e, i, ne, t.reportAllChanges),
                                h((function() {
                                    i.value = performance.now() - r.timeStamp,
                                    re[i.id] = !0,
                                    n(!0)
                                }
                                ))
                            }
                            ))
                        }
                    }
                    ))
                }((function(t) {
                    !function(e) {
                        if (e.entries.length) {
                            var t = c();
                            if (t) {
                                var n = t.activationStart || 0
                                  , r = e.entries[e.entries.length - 1]
                                  , i = r.url && performance.getEntriesByType("resource").filter((function(e) {
                                    return e.name === r.url
                                }
                                ))[0]
                                  , a = Math.max(0, t.responseStart - n)
                                  , o = Math.max(a, i ? (i.requestStart || i.startTime) - n : 0)
                                  , u = Math.max(o, i ? i.responseEnd - n : 0)
                                  , s = Math.max(u, r ? r.startTime - n : 0)
                                  , l = {
                                    element: d(r.element),
                                    timeToFirstByte: a,
                                    resourceLoadDelay: o - a,
                                    resourceLoadTime: u - o,
                                    elementRenderDelay: s - u,
                                    navigationEntry: t,
                                    lcpEntry: r
                                };
                                return r.url && (l.url = r.url),
                                i && (l.lcpResourceEntry = i),
                                void (e.attribution = l)
                            }
                        }
                        e.attribution = {
                            timeToFirstByte: 0,
                            resourceLoadDelay: 0,
                            resourceLoadTime: 0,
                            elementRenderDelay: e.value
                        }
                    }(t),
                    e(t)
                }
                ), t)
            }, ae = [800, 1800], oe = function e(t) {
                document.prerendering ? I((function() {
                    return e(t)
                }
                )) : "complete" !== document.readyState ? addEventListener("load", (function() {
                    return e(t)
                }
                ), !0) : setTimeout(t, 0)
            }, ue = function(e, t) {
                t = t || {};
                var n = p("TTFB")
                  , r = E(e, n, ae, t.reportAllChanges);
                oe((function() {
                    var i = c();
                    if (i) {
                        var a = i.responseStart;
                        if (a <= 0 || a > performance.now())
                            return;
                        n.value = Math.max(a - T(), 0),
                        n.entries = [i],
                        r(!0),
                        v((function() {
                            n = p("TTFB", 0),
                            (r = E(e, n, ae, t.reportAllChanges))(!0)
                        }
                        ))
                    }
                }
                ))
            }, ce = function(e, t) {
                ue((function(t) {
                    !function(e) {
                        if (e.entries.length) {
                            var t = e.entries[0]
                              , n = t.activationStart || 0
                              , r = Math.max(t.domainLookupStart - n, 0)
                              , i = Math.max(t.connectStart - n, 0)
                              , a = Math.max(t.requestStart - n, 0);
                            e.attribution = {
                                waitingTime: r,
                                dnsTime: i - r,
                                connectionTime: a - i,
                                requestTime: e.value - a,
                                navigationEntry: t
                            }
                        } else
                            e.attribution = {
                                waitingTime: 0,
                                dnsTime: 0,
                                connectionTime: 0,
                                requestTime: 0
                            }
                    }(t),
                    e(t)
                }
                ), t)
            }
        }
    }, i = {};
    function a(e) {
        var t = i[e];
        if (void 0 !== t)
            return t.exports;
        var n = i[e] = {
            exports: {}
        };
        return r[e].call(n.exports, n, n.exports, a),
        n.exports
    }
    a.m = r,
    e = [],
    a.O = (t,n,r,i)=>{
        if (!n) {
            var o = 1 / 0;
            for (l = 0; l < e.length; l++) {
                for (var [n,r,i] = e[l], u = !0, c = 0; c < n.length; c++)
                    (!1 & i || o >= i) && Object.keys(a.O).every((e=>a.O[e](n[c]))) ? n.splice(c--, 1) : (u = !1,
                    i < o && (o = i));
                if (u) {
                    e.splice(l--, 1);
                    var s = r();
                    void 0 !== s && (t = s)
                }
            }
            return t
        }
        i = i || 0;
        for (var l = e.length; l > 0 && e[l - 1][2] > i; l--)
            e[l] = e[l - 1];
        e[l] = [n, r, i]
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
    n = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__,
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
        var i = Object.create(null);
        a.r(i);
        var o = {};
        t = t || [null, n({}), n([]), n(n)];
        for (var u = 2 & r && e; "object" == typeof u && !~t.indexOf(u); u = n(u))
            Object.getOwnPropertyNames(u).forEach((t=>o[t] = ()=>e[t]));
        return o.default = ()=>e,
        a.d(i, o),
        i
    }
    ,
    a.d = (e,t)=>{
        for (var n in t)
            a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
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
            6222: 0
        };
        a.O.j = t=>0 === e[t];
        var t = (t,n)=>{
            var r, i, [o,u,c] = n, s = 0;
            if (o.some((t=>0 !== e[t]))) {
                for (r in u)
                    a.o(u, r) && (a.m[r] = u[r]);
                if (c)
                    var l = c(a)
            }
            for (t && t(n); s < o.length; s++)
                i = o[s],
                a.o(e, i) && e[i] && e[i][0](),
                e[i] = 0;
            return a.O(l)
        }
          , n = self.webpackChunkvk = self.webpackChunkvk || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }
    )();
    var o = a.O(void 0, [75514, 68592], (()=>a(588774)));
    o = a.O(o)
}
)();
