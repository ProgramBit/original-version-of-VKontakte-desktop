(()=>{
    var t = {
        543020: (t,e,n)=>{
            "use strict";
            n.d(e, {
                debugBufferLog: ()=>c,
                logError: ()=>i,
                logUnknownError: ()=>a
            });
            var r = n(404145)
              , s = n(74991)
              , o = n(229546);
            function i(t, e={}) {
                var n, i;
                if (null == (n = window) ? void 0 : n.Raven) {
                    const {breadcrumb: n, environment: r} = e;
                    n && window.Raven.captureBreadcrumb({
                        message: n.message,
                        category: o.customBreadcrumbCategory,
                        data: n.data
                    }),
                    r ? window.Raven.captureException(t, {
                        environment: r
                    }) : window.Raven.captureException(t)
                }
                (null == (i = (0,
                r.getGlobalObject)()) ? void 0 : i.__SENTRY__) && (0,
                s.logError)(t, e)
            }
            function a(t) {
                if (t instanceof Error)
                    return void i(t);
                let e = "unknown error";
                if ("string" == typeof t && (e = t),
                "object" == typeof t && null !== t && "message"in t) {
                    const {message: n} = t;
                    "string" == typeof n && (e = n)
                }
                i(new Error(e))
            }
            function c(t) {
                return i(t, {
                    environment: "debugLog"
                })
            }
        }
        ,
        70117: (t,e,n)=>{
            "use strict";
            n.d(e, {
                isStuckError: ()=>g,
                pruneRequestFromStuckErrors: ()=>m
            });
            var r, s, o = n(434788), i = n(839470), a = n(931781), c = n(710484);
            const u = "mvk" === (null == (s = window.vk) || null == (r = s.statsMeta) ? void 0 : r.platform) && (0,
            i.partConfigEnabled)("mute_mvk_err_peaks")
              , l = n(111317)
              , d = 10
              , p = u && l(d)
              , h = u && l(d, 5e3)
              , f = ({value: t, stacktrace: e, file: n, page: r})=>[t, e.join(""), n, r].join("_")
              , g = t=>{
                if (!u || !h || !p)
                    return !1;
                const e = f(t);
                let[n,r] = [p.get(e) || 0, h.get(e) || 0];
                return p.set(e, ++n),
                h.set(e, ++r),
                r >= d || n >= 50
            }
              , m = u ? t=>{
                var e;
                const n = Date.now()
                  , r = "jsErrorLogs"
                  , s = (0,
                a.getWebStatsStringValue)(r, t);
                let i;
                if (((null == (e = s.match(new RegExp("},{","g"))) ? void 0 : e.length) || 0) < d)
                    return t;
                try {
                    i = JSON.parse(s)
                } catch (t) {
                    (0,
                    c.logProcessingTime)(1, "dedupe-fail")
                }
                if (!i)
                    return t;
                const u = Object.values(i.reduce(((t,e)=>{
                    const n = f(e)
                      , r = t[n] || [];
                    return (0,
                    o._)({}, t, {
                        [n]: r.length < d ? r.concat(e) : r
                    })
                }
                ), {}))
                  , l = t.replace(`"${r}":${s}`, `"${r}":${JSON.stringify([].concat.apply([], u))}`)
                  , p = Date.now() - n;
                return p > 16 && (0,
                c.logProcessingTime)(p, "dedupe"),
                l
            }
            : t=>t
        }
        ,
        970978: (t,e,n)=>{
            "use strict";
            n.d(e, {
                debugBufferLog: ()=>o.debugBufferLog,
                getRavenXhrTransport: ()=>s.getRavenXhrTransport,
                logError: ()=>o.logError,
                prepareError: ()=>r.prepareError
            });
            var r = n(930625)
              , s = n(506177)
              , o = n(543020)
        }
        ,
        930625: (t,e,n)=>{
            "use strict";
            function r(t, e) {
                const n = t.exception && t.exception.values[0] || {
                    type: "Message",
                    value: t.message + s(t),
                    stacktrace: t.stacktrace || {
                        frames: []
                    }
                };
                "Error" === n.type && n.value.startsWith("Non-Error exception captured with keys:") && (n.value += s(t)),
                !n.value && t.message && (n.value = t.message);
                const {type: r, value: a, stacktrace: c} = n;
                let {origin: u, protocol: l, hostname: d, port: p, href: h} = window.location;
                p = p ? `:${p}` : "",
                u = u || `${l}//${d}${p}`;
                const {environment: f, transaction: g, breadcrumbs: m, event_id: _} = t;
                let v;
                v = f || e(g, c, a);
                return {
                    id: _,
                    module: v,
                    type: r,
                    value: a,
                    file: g,
                    breadcrumbs: o(m),
                    stacktrace: i(c, u),
                    page: h,
                    release: window.vk.rv,
                    time: window.vk.ts + Math.floor(((new Date).getTime() - window.vk.started) / 1e3)
                }
            }
            function s(t) {
                return t.extra && t.extra.__serialized__ ? "\n" + JSON.stringify(t.extra.__serialized__).slice(0, 500) : ""
            }
            function o(t) {
                if (!t || !t.values || 0 === t.values.length)
                    return "";
                const {data: e, category: n, message: r} = t.values[0];
                if ("xhr" === n) {
                    const {method: t, status_code: n, url: r} = e;
                    return `${t}:${n}:${r}`
                }
                return "custom" === n ? `${r}:${JSON.stringify(e)}` : ""
            }
            function i(t, e) {
                const n = [];
                return t.frames.forEach((function(t, r) {
                    0 === r && (t.filename.includes("raven_logger.js") || t.filename.includes("raven.js")) || n.push(`${t.filename.replace(e, "")}:${t.lineno}:${t.colno}:${t.function}`)
                }
                )),
                n
            }
            n.d(e, {
                prepareError: ()=>r
            })
        }
        ,
        506177: (t,e,n)=>{
            "use strict";
            n.d(e, {
                getRavenXhrTransport: ()=>o
            });
            var r = n(385376)
              , s = n(70117);
            const o = t=>e=>{
                const {data: n, onSuccess: o} = e
                  , i = t(n);
                !(0,
                s.isStuckError)(i) && (0,
                r.saveJsErrorLogs)(i),
                o()
            }
        }
        ,
        531730: (t,e,n)=>{
            "use strict";
            n.d(e, {
                ls: ()=>c,
                multiAccountLs: ()=>d
            });
            var r = n(307411);
            function s() {
                try {
                    return void 0 !== window.localStorage && null !== window.localStorage && void 0 !== window.JSON
                } catch (t) {
                    return !1
                }
            }
            function o(t, e) {
                if (void 0 === t)
                    return !1;
                a(t);
                try {
                    return r.vkLocalStorage.setItem(t, JSON.stringify(e))
                } catch (t) {
                    return !1
                }
            }
            function i(t) {
                if (void 0 === t)
                    return !1;
                try {
                    return JSON.parse(r.vkLocalStorage.getItem(t))
                } catch (t) {
                    return !1
                }
            }
            function a(t) {
                try {
                    r.vkLocalStorage.removeItem(t)
                } catch (t) {}
            }
            const c = {
                checkVersion: s,
                remove: a,
                get: i,
                set: o
            }
              , u = t=>void 0 !== t ? `${t}_@id:${window.vk.id}` : void 0
              , l = t=>(...e)=>{
                const [n,...r] = e
                  , s = [u(n), ...r];
                return t(...s)
            }
              , d = {
                checkVersion: s,
                remove: l(a),
                get: t=>{
                    const e = l(i)(t);
                    if (null === e) {
                        const e = i(t);
                        if (null !== e)
                            return d.set(t, e),
                            a(t),
                            e
                    }
                    return e
                }
                ,
                set: l(o)
            }
        }
        ,
        179475: (t,e,n)=>{
            "use strict";
            n.d(e, {
                CSS_LOAD_ERROR_TEXT: ()=>o,
                JS_LOAD_ERROR_TEXT: ()=>a,
                loadScript: ()=>c,
                loadStyle: ()=>i
            });
            var r = n(970978)
              , s = n(839470);
            const o = "Stylesheet load error for";
            function i(t, {preload: e, target: n=document.head}={}) {
                if ((0,
                s.partConfigEnabled)("log_static_duplicates_errors") && n instanceof HTMLElement) {
                    Array.from(n.getElementsByTagName("link")).filter((t=>"text/css" === t.type)).filter((e=>{
                        var n;
                        return null == (n = e.href) ? void 0 : n.endsWith(t)
                    }
                    )).length > 0 && (0,
                    r.logError)(new Error("Loading duplicate style with src " + t))
                }
                return new Promise(((r,s)=>{
                    const i = document.createElement("link");
                    e ? (i.rel = "preload",
                    i.as = "style") : i.rel = "stylesheet",
                    i.type = "text/css",
                    i.href = t,
                    i.onload = ()=>{
                        r([t, i])
                    }
                    ,
                    i.onerror = ()=>{
                        i.remove(),
                        s(new Error(`${o} ${t}`))
                    }
                    ,
                    n.appendChild(i)
                }
                ))
            }
            const a = "Script load error for";
            function c(t, e=document.head, n) {
                if ((0,
                s.partConfigEnabled)("log_static_duplicates_errors")) {
                    const n = e instanceof Element ? e : document.head;
                    Array.from(n.getElementsByTagName("script")).filter((e=>{
                        var n;
                        return null == (n = e.src) ? void 0 : n.endsWith(t)
                    }
                    )).length > 0 && (0,
                    r.logError)(new Error("Loading duplicate script with src " + t))
                }
                return new Promise(((r,s)=>{
                    let o = document.createElement("script");
                    if (o.src = t,
                    o.onload = ()=>r([t, o]),
                    o.onerror = ()=>{
                        o.remove(),
                        s(new Error(`${a} ${t}`))
                    }
                    ,
                    n)
                        for (const [t,e] of Object.entries(n))
                            null == e || ("boolean" == typeof e ? o.toggleAttribute(t, e) : o.setAttribute(t, e));
                    e.appendChild(o)
                }
                ))
            }
        }
        ,
        229546: (t,e,n)=>{
            "use strict";
            var r, s;
            n.d(e, {
                AbortError: ()=>_,
                CustomSentryErrorTypes: ()=>s,
                Error: ()=>f,
                PROTECTED_MODULE_NAME_TAG: ()=>c,
                ReferenceError: ()=>m,
                SentryExplicitModule: ()=>r,
                TypeError: ()=>g,
                anonymousName: ()=>d,
                commonIgnoreErrors: ()=>a,
                customBreadcrumbCategory: ()=>l,
                errorEventNames: ()=>o,
                extensionPrefixes: ()=>h,
                moduleDetectionConfig: ()=>i,
                nativeCode: ()=>p,
                topErrorModuleName: ()=>u
            }),
            function(t) {
                t.SERVICE_WORKER = "service_worker",
                t.EXTERNAL = "external",
                t.UNKNOWN = "unknown"
            }(r || (r = {})),
            function(t) {
                t.ERROR_OF_EXTENSION = "ErrorOfExtension",
                t.KNOWN_ISSUE = "KnownIssue"
            }(s || (s = {}));
            const o = {
                0: "common_type_error",
                1: "static_load_error",
                3: "ajax_bad_response",
                4: "ajax_error_code",
                5: "ajax_parse_error",
                6: "nav_go_script_error",
                7: "eval_box_script_error",
                8: "eval_frame_script_error",
                100: "root_al_server_error",
                101: "html_audio_load_error",
                102: "photo_upload_error",
                103: "show_box_script_error"
            }
              , i = {
                some: {
                    videoplayer: t=>{
                        var e;
                        return null == (e = t) ? void 0 : e.some((t=>"dist/videoplayer_v2" === t.module))
                    }
                },
                includes: {
                    im: "web/imn",
                    messenger: "bundles/fastchat_reforged",
                    audioplayer: "bundles/audioplayer",
                    videoplayer: "dist/videoplayer",
                    stories: "web/stories",
                    notifier: "web/notifier",
                    articles: "web/article",
                    market: "web/market",
                    calls: "web/calls"
                }
            }
              , a = [/^AbortError:/]
              , c = "__protectedModuleName"
              , u = "genericVkError"
              , l = "custom"
              , d = "<anonymous>"
              , p = "[native code]"
              , h = ["chrome", "moz", "safari", "safari-web"].map((t=>`${t}-extension://`))
              , f = "Error"
              , g = "TypeError"
              , m = "ReferenceError"
              , _ = "AbortError"
        }
        ,
        74991: (t,e,n)=>{
            "use strict";
            n.d(e, {
                logError: ()=>o
            });
            var r = n(404145)
              , s = n(229546);
            function o(t, {breadcrumb: e, environment: n, hasDummyStacktrace: o}={}) {
                var i, a, c, u;
                const l = (0,
                r.getGlobalObject)()
                  , d = null == (a = l) || null == (i = a.__SENTRY__) ? void 0 : i.hub;
                if ("function" == typeof (null == (c = d) ? void 0 : c.captureException))
                    return o && "object" == typeof t && (null == (u = t) ? void 0 : u.stack) && delete t.stack,
                    d.captureException(t, {
                        captureContext: t=>{
                            var r;
                            const o = n || (null == (r = l.cur) ? void 0 : r.module);
                            return o && t.setTags({
                                module: o,
                                [s.PROTECTED_MODULE_NAME_TAG]: !0
                            }),
                            e && t.addBreadcrumb({
                                message: e.message,
                                category: s.customBreadcrumbCategory,
                                data: e.data
                            }),
                            t
                        }
                    })
            }
        }
        ,
        470994: (t,e,n)=>{
            "use strict";
            n.d(e, {
                getModule: ()=>h,
                initSentry: ()=>m,
                isSentryStaging: ()=>f
            });
            var r, s = n(434788), o = n(820224), i = n(672098), a = n(375722), c = n(839470), u = n(404145), l = n(574570), d = n(229546), p = n(250523);
            const h = ()=>{
                var t;
                return null != (r = null == (t = window.cur) ? void 0 : t.module) ? r : "unknown"
            }
            ;
            function f() {
                var t;
                const {statsMeta: e} = (0,
                u.getGlobalObject)().vk || {};
                return (null == (t = e) ? void 0 : t.st) || !1
            }
            let g = !1;
            window.addEventListener("beforeunload", (()=>{
                g = !0,
                setTimeout((()=>{
                    g = !1
                }
                ), 1e3)
            }
            ));
            const m = t=>{
                var e, {dsn: n, moduleChangeListener: r, ignoreErrors: f, initialScope: m, integrations: _, beforeSend: v} = t, y = (0,
                o._)(t, ["dsn", "moduleChangeListener", "ignoreErrors", "initialScope", "integrations", "beforeSend"]);
                const {id: S} = (0,
                u.getGlobalObject)().vk || {}
                  , E = (0,
                l.getEnvironment)()
                  , b = (0,
                l.getRelease)(E);
                (0,
                i.init)((0,
                s._)({
                    environment: E,
                    release: b,
                    dsn: `https://${n[0]}@stacks.vk-portal.net/${n[1]}`,
                    ignoreErrors: d.commonIgnoreErrors.concat(f || []),
                    sampleRate: 1,
                    maxBreadcrumbs: 1,
                    autoSessionTracking: !b || !r,
                    integrations: [new p.FramesSanitizer, new p.BadScripts, new p.ModuleDetect(h), new p.InlineScripts, new p.ReferenceErrors, ...(0,
                    c.partConfigEnabled)("sentry_js_lost_user_info_stats") ? [new p.LostUserInfoStats] : [], ..._ || []],
                    initialScope: (0,
                    s._)({
                        tags: (0,
                        s._)({}, (null == (e = m) ? void 0 : e.tags) || {}, {}, {
                            is_logged_in: Boolean(S),
                            module: h()
                        })
                    }, S ? {
                        user: {
                            id: String(S)
                        }
                    } : {}),
                    beforeSend: (...t)=>g ? null : v ? v(...t) : t[0]
                }, y)),
                (0,
                i.onLoad)((()=>{
                    const t = ()=>(0,
                    a.setTag)("module", h());
                    r instanceof Promise ? r.then((e=>e(t))) : r && r(t)
                }
                ))
            }
        }
        ,
        862933: (t,e,n)=>{
            "use strict";
            n.d(e, {
                BadScripts: ()=>o
            });
            var r = n(574570)
              , s = n(229546);
            class o {
                static getFrames(t) {
                    var e;
                    return null == (e = (0,
                    r.getStacktrace)(t)) ? void 0 : e.frames
                }
                static getLastFrame(t) {
                    var e;
                    return null == (e = o.getFrames(t)) ? void 0 : e.slice(-1).pop()
                }
                static onLocalWindows(t) {
                    var e, n;
                    return /^file:\/\/\/[A-Z]:(\\|\/)/.test((null == (n = t) || null == (e = n.request) ? void 0 : e.url) || "")
                }
                static inAnonymousFilename(t) {
                    return t === s.anonymousName
                }
                static inNativeCode(t) {
                    return t === s.nativeCode
                }
                inExtension(t) {
                    var e;
                    return null == (e = o.getFrames(t)) ? void 0 : e.some((t=>s.extensionPrefixes.some((e=>{
                        var n;
                        return null == (n = t.filename) ? void 0 : n.startsWith(e)
                    }
                    ))))
                }
                alreadySent(t, e) {
                    const n = [(0,
                    r.getTitleFromEventOrHint)(t, e), (0,
                    r.getStackStringFromEventOrHint)(t, e)].join("_");
                    return this.lastSentErrors.size > this.maxLastSentErrors && this.lastSentErrors.clear(),
                    !!this.lastSentErrors.has(n) || (this.lastSentErrors.add(n),
                    !1)
                }
                findAllPredicates(t, e) {
                    const n = o.getLastFrame(t);
                    let s = {
                        inExtension: this.inExtension(t),
                        isServiceWorker: (0,
                        r.isServiceWorker)(e),
                        inAnonymousFilename: !1,
                        inNativeCode: !1,
                        onLocalWindows: o.onLocalWindows(t),
                        withoutFrames: !o.getFrames(t)
                    };
                    var i, a;
                    n && (s.inAnonymousFilename = o.inAnonymousFilename(null == (i = n) ? void 0 : i.filename),
                    s.inNativeCode = o.inNativeCode(null == (a = n) ? void 0 : a.filename));
                    return s
                }
                setupOnce(t, e) {
                    t(((t,n)=>{
                        if (e().getIntegration(o)) {
                            const e = this.findAllPredicates(t, n)
                              , o = [e.inExtension, e.isServiceWorker, e.inAnonymousFilename, e.inNativeCode, e.withoutFrames].some(Boolean)
                              , i = [o].some(Boolean);
                            return [e.onLocalWindows].some(Boolean) ? null : (e.inExtension && (0,
                            r.setException)(t, {
                                type: s.CustomSentryErrorTypes.ERROR_OF_EXTENSION
                            }),
                            i && (t.level = "warning"),
                            o && this.alreadySent(t, n) ? null : t)
                        }
                        return t
                    }
                    ))
                }
                constructor() {
                    this.name = o.id,
                    this.lastSentErrors = new Set,
                    this.maxLastSentErrors = 10
                }
            }
            o.id = "BadScripts"
        }
        ,
        5729: (t,e,n)=>{
            "use strict";
            n.d(e, {
                FramesSanitizer: ()=>o
            });
            var r = n(434788)
              , s = n(5537);
            class o {
                setupOnce(t, e) {
                    t((t=>{
                        const n = e().getIntegration(o);
                        return n ? n.process(t) : t
                    }
                    ))
                }
                process(t) {
                    var e, n, r;
                    let o = t;
                    return Array.isArray(null == (n = t) || null == (e = n.exception) ? void 0 : e.values) && (o = this._processExceptionsEvent(o)),
                    s.SDK_VERSION.startsWith("6") && (null == (r = t) ? void 0 : r.stacktrace) && (o = this._processStacktraceEvent(o)),
                    o
                }
                static isSentryFrame({filename: t}) {
                    return ["web/sentry", "mobile/vendors~sentry", "mobile/sentry", "mobile/vendors~sentry_fallback", "mobile/sentry_fallback"].some((e=>{
                        var n;
                        return null == (n = t) ? void 0 : n.includes(`/dist/${e}.`)
                    }
                    ))
                }
                static isRavenFrame({filename: t}) {
                    return ["web/raven_logger", "mobile/vendors~raven", "mobile/vendors~raven_fallback"].some((e=>{
                        var n;
                        return null == (n = t) ? void 0 : n.includes(`/dist/${e}.`)
                    }
                    ))
                }
                static iteratee(t) {
                    return [o.isSentryFrame, o.isRavenFrame].some((e=>e(t))) ? void 0 : t
                }
                _processExceptionsEvent(t) {
                    try {
                        return (0,
                        r._)({}, t, {
                            exception: (0,
                            r._)({}, t.exception, {
                                values: t.exception.values.map((t=>(0,
                                r._)({}, t, t.stacktrace && {
                                    stacktrace: this._processStacktrace(t.stacktrace)
                                })))
                            })
                        })
                    } catch (e) {
                        return t
                    }
                }
                _processStacktraceEvent(t) {
                    try {
                        return (0,
                        r._)({}, t, {
                            stacktrace: this._processStacktrace(t.stacktrace)
                        })
                    } catch (e) {
                        return t
                    }
                }
                _processStacktrace(t) {
                    var e, n;
                    return (0,
                    r._)({}, t, {
                        frames: null == (n = t) || null == (e = n.frames) ? void 0 : e.reduce(((t,e)=>{
                            const n = o.iteratee(e);
                            return n ? [...t || [], n] : t
                        }
                        ), void 0)
                    })
                }
                constructor() {
                    this.name = o.id
                }
            }
            o.id = "FramesSanitizer"
        }
        ,
        250523: (t,e,n)=>{
            "use strict";
            n.d(e, {
                BadScripts: ()=>r.BadScripts,
                FramesSanitizer: ()=>o.FramesSanitizer,
                InlineScripts: ()=>a.InlineScripts,
                KnownIssues: ()=>i.KnownIssues,
                LostUserInfoStats: ()=>u.LostUserInfoStats,
                ModuleDetect: ()=>s.ModuleDetect,
                ReferenceErrors: ()=>c.ReferenceErrors
            });
            var r = n(862933)
              , s = n(454697)
              , o = n(5729)
              , i = n(396100)
              , a = n(270586)
              , c = n(20841)
              , u = n(459084)
        }
        ,
        270586: (t,e,n)=>{
            "use strict";
            n.d(e, {
                InlineScripts: ()=>o
            });
            var r = n(574570)
              , s = n(229546);
            class o {
                setupOnce(t, e) {
                    t((t=>{
                        if (e().getIntegration(o)) {
                            var n, i;
                            const {url: e} = null != (i = t.request) ? i : {};
                            var a;
                            const {type: o, value: d} = null != (a = (0,
                            r.getException)(t)) ? a : {};
                            var c;
                            const {frames: p} = null != (c = (0,
                            r.getStacktrace)(t)) ? c : {};
                            if (!o || !d || !e)
                                return t;
                            const h = ({in_app: t, abs_path: n, filename: r})=>!!t && e !== (n || r);
                            if (!(null == (n = p) ? void 0 : n.some(h))) {
                                var u, l;
                                const e = String(null != (l = null == (u = t.tags) ? void 0 : u.module) ? l : s.SentryExplicitModule.UNKNOWN);
                                t.fingerprint = [o, e, d]
                            }
                        }
                        return t
                    }
                    ))
                }
                constructor() {
                    this.name = o.id
                }
            }
            o.id = "InlineScripts"
        }
        ,
        396100: (t,e,n)=>{
            "use strict";
            n.d(e, {
                KnownIssues: ()=>i
            });
            var r = n(839470)
              , s = n(229546)
              , o = n(574570);
            class i {
                isWellKnown(t, e) {
                    const n = Object.entries(this.getKnownIssues(t, e) || {});
                    return !!n.length && n.reduce(((t,[e,n])=>{
                        var r;
                        return (null == (r = n) ? void 0 : r.every(Boolean)) ? parseFloat(e) : t
                    }
                    ), !1)
                }
                setupOnce(t, e) {
                    t(((t,n)=>{
                        if (e().getIntegration(i)) {
                            const e = this.isWellKnown(t, n);
                            if ("number" == typeof e) {
                                if (!(0,
                                r.randEnabled)(e))
                                    return null;
                                const {type: n, value: i} = (0,
                                o.getException)(t) || {};
                                n && i && (t.level = "warning",
                                t.fingerprint = ["{{ default }}", "{{ type }}"],
                                (0,
                                o.setException)(t, {
                                    type: s.CustomSentryErrorTypes.KNOWN_ISSUE,
                                    value: `${n}: ${i}`
                                }))
                            }
                        }
                        return t
                    }
                    ))
                }
                constructor(t) {
                    this.getKnownIssues = t,
                    this.name = i.id
                }
            }
            i.id = "KnownIssues"
        }
        ,
        459084: (t,e,n)=>{
            "use strict";
            n.d(e, {
                LostUserInfoStats: ()=>i
            });
            var r = n(495081)
              , s = n(622310)
              , o = n(182157);
            class i {
                setupOnce(t, e) {
                    t((t=>{
                        var n;
                        if (this.createdBy + 3e5 > Date.now() && (e().getIntegration(i) && (null == (n = t) ? void 0 : n.tags))) {
                            var a;
                            new r.CooldownManager(null == (a = window.vk) ? void 0 : a.id,s.METRICS_SCOPE.USER_INFO_STATS,o.COOLDOWN,{
                                invalidationReasons: {
                                    dateChange: !0
                                }
                            }).isMetricOnCoolDown() || (t.tags.lost_user_info_stats = !0)
                        }
                        return t
                    }
                    ))
                }
                constructor() {
                    this.name = i.id,
                    this.createdBy = Date.now()
                }
            }
            i.id = "LostUserInfoStats"
        }
        ,
        454697: (t,e,n)=>{
            "use strict";
            n.d(e, {
                ModuleDetect: ()=>i
            });
            var r = n(404145)
              , s = n(574570)
              , o = n(229546);
            class i {
                static isExternalService(t) {
                    var e;
                    return (null == (e = t) ? void 0 : e.startsWith("http")) && !r.VK_URL_REGEX_STRICT.test(t)
                }
                static detectModuleInSentryEvent(t, e) {
                    const n = (0,
                    s.getStackStringFromEventOrHint)(t, e);
                    return (0,
                    s.isServiceWorker)(e) ? o.SentryExplicitModule.SERVICE_WORKER : i.isExternalService(n) ? o.SentryExplicitModule.EXTERNAL : (0,
                    s.findModuleByStacktrace)((0,
                    s.getStacktrace)(t)) || (0,
                    s.findModuleByStackString)(n)
                }
                setupOnce(t, e) {
                    t(((t,n)=>{
                        if (e().getIntegration(i)) {
                            var r;
                            if (null == (r = t) ? void 0 : r.tags) {
                                const e = o.PROTECTED_MODULE_NAME_TAG;
                                t.tags[e] || (t.tags.module = i.detectModuleInSentryEvent(t, n) || this.getModuleFallback()),
                                t.tags.hasOwnProperty(e) && delete t.tags[e]
                            }
                            return t
                        }
                        return t
                    }
                    ))
                }
                constructor(t) {
                    this.getModuleFallback = t,
                    this.name = i.id
                }
            }
            i.id = "ModuleDetect"
        }
        ,
        20841: (t,e,n)=>{
            "use strict";
            n.d(e, {
                ReferenceErrors: ()=>a
            });
            var r = n(229546)
              , s = n(574570);
            const o = [" is not defined", "Can't find variable: "]
              , i = /No value for lang key "([a-zA-Z0-9_]+)" is specified/;
            class a {
                setupOnce(t, e) {
                    t((t=>{
                        if (e().getIntegration(a)) {
                            var n, c;
                            const {type: e, value: a} = null != (c = (0,
                            s.getException)(t)) ? c : {};
                            if (e !== r.ReferenceError || !a)
                                return t;
                            var u;
                            const l = String(null != (u = null == (n = t.tags) ? void 0 : n.module) ? u : r.SentryExplicitModule.UNKNOWN);
                            if (o.some((t=>a.includes(t)))) {
                                const n = o.reduce(((t,e)=>t.replace(e, "")), a).replace(/['"]/g, "");
                                t.fingerprint = [e, l, n]
                            } else {
                                const n = a.match(i);
                                n && n[1] && (t.fingerprint = [e, l, n[1]])
                            }
                        }
                        return t
                    }
                    ))
                }
                constructor() {
                    this.name = a.id
                }
            }
            a.id = "ReferenceErrors"
        }
        ,
        574570: (t,e,n)=>{
            "use strict";
            n.d(e, {
                findModuleByStackString: ()=>v,
                findModuleByStacktrace: ()=>y,
                getEnvironment: ()=>g,
                getException: ()=>l,
                getRelease: ()=>m,
                getStackStringFromEventOrHint: ()=>h,
                getStacktrace: ()=>f,
                getTitleFromEventOrHint: ()=>p,
                isServiceWorker: ()=>_,
                setException: ()=>d
            });
            var r = n(5537)
              , s = n(229546)
              , o = n(404145);
            const {location: i, vk: a} = (0,
            o.getGlobalObject)();
            function c(t) {
                return "string" == typeof t || t instanceof Error || t && t.name && t.message
            }
            "function" != typeof Object.entries && (Object.entries = function(t) {
                const e = [];
                for (const n in t)
                    t.hasOwnProperty(n) && e.push([n, t[n]]);
                return e
            }
            );
            const u = (t,e)=>{
                const {originalException: n} = t || {};
                if (c(n))
                    return "string" == typeof n ? n : n[e]
            }
              , l = t=>{
                var e, n, r;
                return null == (r = t) || null == (n = r.exception) || null == (e = n.values) ? void 0 : e[0]
            }
              , d = (t,e)=>{
                const n = l(t);
                if (s = n,
                "[object Object]" === Object.prototype.toString.call(s))
                    for (const [t,s] of Object.entries(e)) {
                        var r;
                        (null == (r = n) ? void 0 : r.hasOwnProperty(t)) && (n[t] = s)
                    }
                var s;
                return t
            }
              , p = (t,e)=>{
                const {type: n, value: r} = l(t) || {};
                return u(e, "message") || [n, r].join(" ")
            }
              , h = (t,e)=>u(e, "stack") || (t=>{
                var e, n;
                return null == (n = t.exception) || null == (e = n.values) ? void 0 : e.map((({stacktrace: t})=>{
                    var e, n;
                    return null == (n = t) || null == (e = n.frames) ? void 0 : e.map((({filename: t})=>t))
                }
                )).join()
            }
            )(t)
              , f = t=>{
                var e, n;
                const s = null == (e = l(t)) ? void 0 : e.stacktrace;
                return r.SDK_VERSION.startsWith("6") ? s || (null == (n = t) ? void 0 : n.stacktrace) : s
            }
              , g = ()=>{
                var t, e;
                return (null == (e = a) || null == (t = e.statsMeta) ? void 0 : t.st) ? "staging" : "production"
            }
              , m = t=>{
                var e;
                return null == (e = a) ? void 0 : e.rv
            }
              , _ = t=>{
                var e, n, r, s;
                const o = null == (e = t) ? void 0 : e.originalException;
                return !(!o || "mvk" !== (null == (r = a) || null == (n = r.statsMeta) ? void 0 : n.platform) || !c(o)) && ("string" == typeof o ? o : String(null == (s = o) ? void 0 : s.message)).toLowerCase().includes("serviceworker")
            }
              , v = t=>{
                let e;
                if (t)
                    for (const [n,r] of Object.entries(s.moduleDetectionConfig.includes))
                        if (t.includes(r)) {
                            e = n;
                            break
                        }
                return e
            }
              , y = t=>{
                let e;
                if (t && Array.isArray(t.frames)) {
                    const n = t.frames.reverse();
                    for (const [t,r] of Object.entries(s.moduleDetectionConfig.some))
                        if (r(n)) {
                            e = t;
                            break
                        }
                    if (!e)
                        for (const t of n) {
                            const n = v(t.filename);
                            if (n) {
                                e = n;
                                break
                            }
                        }
                }
                return e
            }
        }
        ,
        404145: (t,e,n)=>{
            "use strict";
            n.d(e, {
                VK_DOMAIN_REGEX: ()=>p,
                VK_HOST_REGEX_GROUP_UNSAFE: ()=>l,
                VK_HOST_REGEX_UNSAFE: ()=>u,
                VK_ORIGIN_PREFIX_REGEX: ()=>f,
                VK_ORIGIN_REGEX_STRICT: ()=>h,
                VK_POSSIBLE_SITE_HOSTS: ()=>o,
                VK_SITES_REGEX_SOURCE_UNSAFE: ()=>c,
                VK_SITE_REGEX_SOURCE_UNSAFE: ()=>a,
                VK_URL_REGEX: ()=>g,
                VK_URL_REGEX_STRICT: ()=>m,
                getAverageRGB: ()=>w,
                getGlobalObject: ()=>S,
                getHostName: ()=>y,
                getVideoDuration: ()=>E,
                isMvk: ()=>_,
                isPWA: ()=>v,
                loadFontFace: ()=>x,
                loadFontFacePromise: ()=>T,
                loadImage: ()=>k,
                loadImages: ()=>O,
                noop: ()=>b
            });
            var r = n(434788);
            const s = t=>t.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
              , o = ["vk.com", "vk.ru", y()].filter(((t,e,n)=>n.indexOf(t) === e))
              , i = o.concat(["vkontakte.ru", "vk.me", "userapi.com"])
              , a = s(y())
              , c = o.map(s).join("|")
              , u = new RegExp("(" + i.map(s).join("|") + ")")
              , l = new RegExp(i.map(s).join("|"))
              , d = (new RegExp("^" + u.source + "$"),
            new RegExp(`([a-zA-Z0-9\\.\\_\\-]+\\.)?${u.source}`))
              , p = new RegExp("^" + d.source + "$")
              , h = (new RegExp(`^(https?:\\/\\/)?${d.source}$`),
            new RegExp(`^(https?:\\/\\/)${d.source}$`))
              , f = new RegExp(`^(https?:\\/\\/)${d.source}`)
              , g = new RegExp(`^(https?:\\/\\/)?${d.source}($|\\/(.*))`)
              , m = new RegExp(`^(https?:\\/\\/)${d.source}($|\\/(.*))`);
            function _() {
                return !!window.isMVK
            }
            function v() {
                var t, e, n;
                return null == (n = window.vk) || null == (e = n.platform) || null == (t = e.startsWith) ? void 0 : t.call(e, "pwa")
            }
            function y() {
                var t;
                return (null == (t = S().vk) ? void 0 : t.__domain) || "vk.com"
            }
            function S() {
                return "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}
            }
            function E(t="") {
                return new Promise(((e,n)=>{
                    const r = document.createElement("video");
                    r.addEventListener("loadedmetadata", (()=>e(r.duration)), {
                        once: !0
                    }),
                    r.addEventListener("error", n, {
                        once: !0
                    }),
                    r.crossOrigin = "anonymous",
                    r.preload = "metadata",
                    r.src = t
                }
                ))
            }
            const b = ()=>{}
            ;
            function w(t, e=0, n=0, r, s) {
                const o = {
                    r: 0,
                    g: 0,
                    b: 0
                };
                let i;
                r = r || t.canvas.width,
                s = s || t.canvas.height;
                try {
                    i = t.getImageData(e, n, r, s)
                } catch (t) {
                    return o
                }
                let a = -4
                  , c = 0;
                for (; (a += 20) < i.data.length; )
                    ++c,
                    o.r += i.data[a],
                    o.g += i.data[a + 1],
                    o.b += i.data[a + 2];
                return o.r = ~~(o.r / c),
                o.g = ~~(o.g / c),
                o.b = ~~(o.b / c),
                o
            }
            function k(t) {
                return new Promise(((e,n)=>{
                    const r = new Image;
                    r.crossOrigin = t.startsWith("data:") ? null : "Anonymous",
                    r.onerror = ()=>n(new Error(`Failed to load image's URL: ${t}`)),
                    r.onload = ()=>e(r),
                    r.src = t
                }
                ))
            }
            const O = t=>new Promise((e=>{
                const n = t.map((t=>k(t)));
                Promise.all(n).then((t=>e(t))).catch((()=>{}
                ))
            }
            ));
            function x(t, e) {
                const n = {
                    normal: "400",
                    500: "500",
                    600: "600",
                    bold: "700"
                }
                  , r = {
                    tolerance: 2,
                    delay: 100,
                    glyphs: "",
                    success: function() {},
                    error: function() {},
                    timeout: 5e3,
                    weight: "400",
                    style: "normal"
                }
                  , s = {
                    display: "block",
                    "font-size": "48px",
                    "line-height": "normal",
                    "font-variant": "normal",
                    "white-space": "nowrap",
                    position: "absolute",
                    visibility: "hidden",
                    top: "-9999px",
                    left: "-9999px",
                    width: "auto",
                    height: "auto",
                    margin: "0",
                    padding: "0"
                };
                let o, i, a, c, u, l, d;
                function p(t) {
                    let e = [];
                    return each(t, (function(t, n) {
                        e.push(t + ":" + n)
                    }
                    )),
                    e.join(";")
                }
                function h(t, e, n) {
                    return Math.abs(t.width - e.offsetWidth) > n || Math.abs(t.height - e.offsetHeight) > n
                }
                function f() {
                    c || (utilsNode.appendChild(u),
                    c = !0,
                    a = {
                        sansSerif: {
                            width: d.offsetWidth,
                            height: d.offsetHeight
                        },
                        serif: {
                            width: l.offsetWidth,
                            height: l.offsetHeight
                        }
                    },
                    browser.opera && !browser.chrome ? (d.style.fontFamily = '"' + t + '", sans-serif',
                    l.style.fontFamily = '"' + t + '", serif') : (setStyle(d, "font-family", '"' + t + '", sans-serif'),
                    setStyle(l, "font-family", '"' + t + '", serif'))),
                    c && a && (h(a.sansSerif, d, e.tolerance) || h(a.serif, l, e.tolerance)) ? (re(u),
                    e.success()) : (new Date).getTime() - i.getTime() > e.timeout ? (re(u),
                    e.error()) : !c && "requestAnimationFrame"in window ? window.requestAnimationFrame(f) : window.setTimeout(f, e.delay)
                }
                for (let t in r)
                    e.hasOwnProperty(t) || (e[t] = r[t]);
                s["font-weight"] = e.weight,
                s["font-style"] = e.style,
                !e.glyphs && "fonts"in document ? (e.timeout && (o = setTimeout((function() {
                    e.error()
                }
                ), e.timeout)),
                function(r) {
                    var s;
                    each(null == (s = document) ? void 0 : s.fonts, (function(s) {
                        s.family.toLowerCase() === t.toLowerCase() && (n[s.weight] || s.weight) === "" + e.weight && s.style === e.style && s.load().then((function() {
                            e.success(),
                            clearTimeout(r)
                        }
                        ))
                    }
                    ))
                }(o)) : function() {
                    const t = "AxmTYklsjo190QW" + e.glyphs;
                    i = new Date,
                    u = ce("div"),
                    d = ce("div", {
                        innerHTML: t
                    }),
                    l = ce("div", {
                        innerHTML: t
                    }),
                    d.setAttribute("style", p(extend({
                        "font-family": "sans-serif"
                    }, s))),
                    l.setAttribute("style", p(extend({
                        "font-family": "serif"
                    }, s))),
                    u.appendChild(d),
                    u.appendChild(l),
                    f()
                }()
            }
            function T(t, e) {
                return new Promise(((n,s)=>{
                    x(t, (0,
                    r._)({}, e, {
                        glyphs: "",
                        success() {
                            const t = ()=>{
                                var t;
                                n(),
                                (null == (t = e) ? void 0 : t.success) && e.success()
                            }
                            ;
                            browser.safari ? setTimeout(t, 150) : t()
                        },
                        error() {
                            var t;
                            s(),
                            (null == (t = e) ? void 0 : t.error) && e.error()
                        }
                    }))
                }
                ))
            }
        }
        ,
        307411: (t,e,n)=>{
            "use strict";
            n.d(e, {
                bestAvailableStorage: ()=>m,
                isStorageAvailable: ()=>a,
                vkLocalStorage: ()=>l,
                vkSessionStorage: ()=>h
            });
            class r {
                setItem(t, e) {
                    this.data[t] = String(e)
                }
                removeItem(t) {
                    delete this.data[t]
                }
                clear() {
                    this.data = {}
                }
                get length() {
                    return Object.keys(this.data).length
                }
                key(t) {
                    return Object.keys(this.data)[t]
                }
                constructor() {
                    this.data = {},
                    this.getItem = t=>this.data.hasOwnProperty(t) ? this.data[t] : null,
                    this.keys = ()=>Object.keys(this.data)
                }
            }
            const s = "vk-ls-dummy"
              , o = Math.random().toString()
              , i = {
                localStorage: null,
                sessionStorage: null
            };
            function a(t) {
                if (null === i[t])
                    try {
                        const e = window[t];
                        e.setItem(s, o),
                        i[t] = o === e.getItem(s),
                        e.removeItem(s)
                    } catch (e) {
                        i[t] = !1
                    }
                return i[t]
            }
            let c;
            function u() {
                return c || (c = a("localStorage") ? window.localStorage : new r,
                c)
            }
            const l = {
                setItem: (t,e)=>u().setItem(t, e),
                getItem: t=>u().getItem(t),
                removeItem: t=>u().removeItem(t),
                clear: ()=>u().clear(),
                length: ()=>u().length,
                key: t=>u().key(t),
                keys() {
                    const t = u();
                    return t instanceof r ? t.keys() : Object.keys(t)
                },
                getPrefixedKeys: t=>l.keys().filter((e=>e.startsWith(t)))
            };
            let d;
            function p() {
                return d || (d = a("sessionStorage") ? window.sessionStorage : new r,
                d)
            }
            const h = {
                setItem: (t,e)=>p().setItem(t, e),
                getItem: t=>p().getItem(t),
                removeItem: t=>p().removeItem(t),
                clear: ()=>p().clear(),
                length: ()=>p().length,
                key: t=>p().key(t),
                keys() {
                    const t = p();
                    return t instanceof r ? t.keys() : Object.keys(t)
                },
                getPrefixedKeys: t=>h.keys().filter((e=>e.startsWith(t)))
            };
            let f;
            function g() {
                return f || (f = a("localStorage") ? window.localStorage : a("sessionStorage") ? window.sessionStorage : new r,
                f)
            }
            const m = {
                setItem: (t,e)=>g().setItem(t, e),
                getItem: t=>g().getItem(t),
                removeItem: t=>g().removeItem(t),
                clear: ()=>g().clear(),
                length: ()=>g().length,
                key: t=>g().key(t),
                keys() {
                    const t = g();
                    return t instanceof r ? t.keys() : Object.keys(t)
                },
                getPrefixedKeys: t=>m.keys().filter((e=>e.startsWith(t)))
            }
        }
        ,
        433121: (t,e,n)=>{
            "use strict";
            n.d(e, {
                saveStats: ()=>w
            });
            var r = n(434788)
              , s = n(931781)
              , o = n(145e3)
              , i = n(710484)
              , a = n(404145)
              , c = n(28131)
              , u = n(70117)
              , l = n(839470)
              , d = n(210949);
            function p() {
                var t;
                if (!(0,
                l.partConfigEnabled)("web_stats_reduce_debounce"))
                    return !1;
                const e = (null == (t = window.vk) ? void 0 : t.started) || Date.now();
                return Date.now() - e <= 3e4
            }
            const h = ()=>p() ? 1e3 : 1e4
              , f = ()=>p() ? 5e3 : 2e4;
            let g, m = 0;
            const _ = ()=>h() * Math.pow(m, .5)
              , v = ()=>!(Date.now() - (0,
            s.getLastSendTime)() > f() + _())
              , y = ()=>Math.max(0, (0,
            s.getLastSendTime)() + (p() ? 2e3 : 2e4) - Date.now())
              , S = ()=>{
                window.__isSendingWebStats || g || (g = window.setTimeout((()=>{
                    const t = (0,
                    s.getWebStatDataLs)();
                    g = void 0,
                    t.length > s.emptyStatsDataLs.length && w(t)
                }
                ), Math.max(Math.min(y(), h()), Math.max(0, (0,
                s.getLastSendTime)() + f() - Date.now() + _()))))
            }
              , E = t=>{
                const e = `${window.vk.wsTransport}/web-stats/${window.vk.statsMeta.st ? "s" : "p"}`
                  , n = t.length > i.MAX_BODY_SIZE;
                let r = n ? (0,
                d.getMaximumWebStats)(t) : t
                  , o = !1;
                if (!r)
                    return window.__isSendingWebStats = !1,
                    (0,
                    s.clearLsData)();
                function l(e) {
                    const a = Date.now();
                    window.__isSendingWebStats = !1,
                    e < 500 && (n && 200 === e ? Object.keys((0,
                    s.getEmptyStatsData)()).forEach((t=>(0,
                    c.pullFromWebStats)(t, r))) : (0,
                    s.clearLsData)(),
                    m = 0,
                    o = !0),
                    (n || 400 === e) && (0,
                    i.logProcessingTime)(Date.now() - a, `${n ? "prune" : "clean"}${400 === e ? "-fail" : ""}`, `${t.length >>> 20}M ${r.length >>> 20}M`),
                    S()
                }
                function p() {
                    const t = new XMLHttpRequest;
                    t.withCredentials = e.includes(`tau.${(0,
                    a.getHostName)()}`),
                    t.onreadystatechange = ()=>{
                        t.readyState === XMLHttpRequest.DONE && l(t.status)
                    }
                    ,
                    t.onerror = ()=>{
                        window.__isSendingWebStats = !1,
                        !o && (0,
                        s.clearLsData)()
                    }
                    ,
                    t.open("POST", e, !0),
                    t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
                    t.send(r)
                }
                r = (0,
                u.pruneRequestFromStuckErrors)((0,
                i.appendStatsMeta)(++m, r)),
                (0,
                i.canSendBeacon)() ? (0,
                i.sendBeacon)(e, r).then((()=>l(200))).catch((()=>p())) : p()
            }
              , b = (t,e)=>{
                var n;
                const r = e=>setTimeout((()=>t()), e);
                return (null == (n = e) ? void 0 : n.force) ? r(0) : window.requestIdleCallback ? window.requestIdleCallback((()=>r(h())), {
                    timeout: h() / 2
                }) : r(h())
            }
            ;
            function w(t, e) {
                var n;
                const a = t.length >= i.MAX_BODY_SIZE
                  , c = (null == (n = e) ? void 0 : n.force) || a;
                if (t.length <= s.emptyStatsDataLs.length)
                    (0,
                    o.logWebStatsEvent)("WebStats empty data.", "");
                else {
                    if (!window.__isSendingWebStats)
                        return c || g || !v() ? (window.__isSendingWebStats = !0,
                        b((()=>{
                            const t = (0,
                            s.getWebStatDataLs)();
                            if (t.length > s.emptyStatsDataLs.length && (c || !v()))
                                return (0,
                                s.setLastSendTime)(),
                                E(t);
                            clearTimeout(g),
                            window.__isSendingWebStats = !1,
                            g = void 0
                        }
                        ), (0,
                        r._)({}, e, {
                            force: c
                        }))) : ((0,
                        o.logWebStatsEvent)("WebStats delayed.", g),
                        S());
                    (0,
                    o.logWebStatsEvent)("WebStats sending.", window.__isSendingWebStats)
                }
            }
        }
        ,
        210949: (t,e,n)=>{
            "use strict";
            n.d(e, {
                getMaximumWebStats: ()=>o
            });
            var r = n(931781)
              , s = n(710484);
            const o = t=>{
                const e = Date.now()
                  , n = t=>{
                    var e;
                    return `{${null == (e = t) ? void 0 : e.map((([t,e])=>`"${t}":${e}`)).join(",")}}`
                }
                  , [o,i] = Object.keys((0,
                r.getEmptyStatsData)()).reduce(((e,n)=>{
                    const s = (0,
                    r.getWebStatsStringValue)(n, t);
                    return "[]" === s ? e : [...e, [n, s]]
                }
                ), []).sort((([,t],[,e])=>e.length - t.length)).reduce((([t,e],[r,o])=>{
                    const i = [[r, o]];
                    return o.length + n(t).length < s.MAX_BODY_SIZE ? [t.concat(i), e] : [t, e.concat(i)]
                }
                ), [[], []])
                  , a = n(o);
                if ((0,
                s.logProcessingTime)(Date.now() - e, "chunk"),
                Date.now() - e < 500 && i[0] && a.length < .1 * s.MAX_BODY_SIZE) {
                    const t = Date.now();
                    try {
                        const e = ((t,e)=>{
                            const [n,r] = e
                              , o = `{"${n}":[${JSON.parse(r).reduce(((e,n,r)=>e.length < s.MAX_BODY_SIZE - t.length ? `${e}${0 === r ? "" : ","}${JSON.stringify(n)}` : e), "")}]}`;
                            return "{}" === t ? o : (0,
                            s.concatJSONS)(t, o) || t
                        }
                        )(a, i.reverse()[0]);
                        return (0,
                        s.logProcessingTime)(Date.now() - t, "batch"),
                        e
                    } catch (e) {
                        return (0,
                        s.logProcessingTime)(Date.now() - t, "batch-fail"),
                        ""
                    }
                }
                return a
            }
        }
        ,
        385376: (t,e,n)=>{
            "use strict";
            n.d(e, {
                saveCustomStats: ()=>r.saveCustomStats,
                saveJsErrorLogs: ()=>r.saveJsErrorLogs,
                saveNetworkStats: ()=>r.saveNetworkStats,
                saveProductionStats: ()=>r.saveProductionStats,
                saveStatlogEvents: ()=>r.saveStatlogEvents
            });
            var r = n(28131)
        }
        ,
        710484: (t,e,n)=>{
            "use strict";
            n.d(e, {
                MAX_BODY_SIZE: ()=>u,
                appendStatsMeta: ()=>p,
                canSendBeacon: ()=>g,
                concatJSONS: ()=>d,
                logProcessingTime: ()=>_,
                makeWebStatsRequest: ()=>m,
                sendBeacon: ()=>f
            });
            var r = n(434788)
              , s = n(820224)
              , o = n(504867)
              , i = n(70117)
              , a = n(404145)
              , c = n(839470);
            const u = 1.8 * Math.pow(10, 6)
              , l = t=>t.startsWith("{") && t.endsWith("}")
              , d = (t,e)=>[t, e].every(l) ? `${t.slice(0, -1)},${e.substring(1)}` : "{}"
              , p = (t,e)=>{
                const n = window.vk
                  , {id: o, statsMeta: {st: i, platform: a}} = n
                  , c = (0,
                s._)(n.statsMeta, ["st", "platform"])
                  , {item_id: u, item_owner_id: p, item_type: h} = window.cur;
                return d(JSON.stringify((0,
                r._)({
                    id: o,
                    st: i,
                    platform: a,
                    attempt: t,
                    signTime: c.time,
                    sign: c.hash
                }, u && {
                    item_id: u
                }, h && {
                    item_type: h
                }, p && {
                    item_owner_id: p
                })), l(e) ? e : "{}")
            }
            ;
            function h(t, e) {
                return new Promise(((n,r)=>{
                    const s = new XMLHttpRequest;
                    s.open("POST", t),
                    t.includes(`tau.${(0,
                    a.getHostName)()}`) && (s.withCredentials = !0),
                    s.onload = function() {
                        return this.status >= 200 && this.status < 300 ? n(s.response) : r({
                            status: this.status,
                            statusText: s.statusText
                        })
                    }
                    ,
                    s.onerror = function() {
                        return r({
                            status: this.status,
                            statusText: s.statusText
                        })
                    }
                    ,
                    s.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
                    s.send(e)
                }
                ))
            }
            function f(t, e) {
                try {
                    if (!navigator.sendBeacon(t, e))
                        return Promise.reject(new Error("Beacon not sent"))
                } catch (t) {
                    return Promise.reject(new Error("Beacon fail"))
                }
                return Promise.resolve()
            }
            function g() {
                return "sendBeacon"in navigator && !window.vk.wsTransport.includes(`tau.${(0,
                a.getHostName)()}`)
            }
            const m = (t,e)=>(t = t || `${window.vk.wsTransport}/web-stats/${window.vk.statsMeta.st ? "s" : "p"}`,
            e = (0,
            i.pruneRequestFromStuckErrors)("string" == typeof e ? e : JSON.stringify(e)),
            (0,
            c.partConfigEnabled)("web_stats_send_beacon") && g() && "sendBeacon"in navigator ? f(t, e).catch((()=>h(t, e))) : h(t, e));
            function _(t, e, n) {
                (0,
                o.statlogsValueEvent)("web_stats_batching_time", t, window.vk.statsMeta.platform, e, n)
            }
        }
        ,
        28131: (t,e,n)=>{
            "use strict";
            n.d(e, {
                pullFromWebStats: ()=>c,
                saveBenchmarkMainStats: ()=>v,
                saveCustomStats: ()=>f,
                saveJsErrorLogs: ()=>l,
                saveNetworkStats: ()=>h,
                saveProductionStats: ()=>p,
                saveStatlogEvents: ()=>d,
                saveStoryViewBaseStats: ()=>g,
                saveStoryViewStats: ()=>m,
                saveWebPerfStats: ()=>_
            });
            var r = n(931781)
              , s = n(145e3)
              , o = n(839470)
              , i = n(433121)
              , a = n(307411);
            const c = (t,e)=>{
                const n = (0,
                r.getWebStatsStringValue)(t, e);
                if ("[]" !== n) {
                    const t = (0,
                    r.getWebStatDataLs)().replace(n.slice(1, -1), "").replace(/\[\,/, "[");
                    (0,
                    r.writeLocked)((()=>a.vkLocalStorage.setItem(r.lsDataKey, t)))
                }
            }
              , u = (t,e,n,o)=>{
                const c = ((t,e)=>{
                    const n = (0,
                    r.getWebStatsStringValue)(t);
                    return (0,
                    r.getWebStatDataLs)().replace(`"${t}":${n}`, `"${t}":${n.replace(/]$/, `${"[]" === n ? "" : ","}${JSON.stringify(e)}]`)}`)
                }
                )(e, n);
                (0,
                r.writeLocked)((()=>{
                    a.vkLocalStorage.setItem(r.lsDataKey, c),
                    (0,
                    i.saveStats)(c, o)
                }
                )),
                (0,
                s.logWebStatsEvent)(t, n)
            }
              , l = t=>u("saveJsErrorLogs", "jsErrorLogs", t)
              , d = ({name: t, value: e, keys: n=[]})=>{
                const r = [Math.round(Number(Date.now()) / 1e3), t, e, ...n];
                return (0,
                o.partConfigEnabled)("web_stats_transport_debugger") && console.log("Data was transformed!"),
                u("saveStatlogEvents", "statlogEvents", r)
            }
              , p = (t,e)=>u("saveProductionStats", "productionStats", t, e)
              , h = t=>u("saveNetworkStats", "networkStats", t)
              , f = t=>u("saveCustomStats", "customStats", t)
              , g = t=>u("saveStoryViewStats", "storyViewStats", t)
              , m = t=>g(t)
              , _ = t=>u("saveWebPerfStats", "webPerfStats", t)
              , v = t=>u("saveBenchmarkMainStats", "benchmarkMainStats", t)
        }
        ,
        145e3: (t,e,n)=>{
            "use strict";
            n.d(e, {
                logWebStatsEvent: ()=>s
            });
            var r = n(839470);
            function s(t, e) {
                (0,
                r.partConfigEnabled)("web_stats_transport_debugger") && console.log(`[new transport debug] ${t}`, e)
            }
        }
        ,
        931781: (t,e,n)=>{
            "use strict";
            n.d(e, {
                clearLsData: ()=>f,
                emptyStatsDataLs: ()=>l,
                getEmptyStatsData: ()=>u,
                getLastSendTime: ()=>m,
                getWebStatDataLs: ()=>p,
                getWebStatsStringValue: ()=>h,
                lsDataKey: ()=>i,
                setLastSendTime: ()=>g,
                writeLocked: ()=>d
            });
            var r = n(307411)
              , s = n(145e3);
            const o = (0,
            n(404145).isMvk)() ? "mvk" : "web"
              , i = `XHR_STATS_TRANSPORT_DATA_ ${o}`
              , a = `XHR_STATS_TRANSPORT_META_ ${o}`
              , c = `XHR_STATS_TRANSPORT_DATA_LOCK_ ${o}`
              , u = ()=>({
                jsErrorLogs: [],
                statlogEvents: [],
                productionStats: [],
                storyViewStats: [],
                networkStats: [],
                customStats: [],
                webPerfStats: [],
                benchmarkMainStats: []
            })
              , l = JSON.stringify(u());
            function d(t) {
                if ("locked" !== r.vkSessionStorage.getItem(c)) {
                    (0,
                    s.logWebStatsEvent)("writeLocked", "lock"),
                    r.vkSessionStorage.setItem(c, "locked");
                    try {
                        t()
                    } catch (t) {}
                    return (0,
                    s.logWebStatsEvent)("writeLocked", "free"),
                    void r.vkSessionStorage.setItem(c, "free")
                }
                setTimeout((()=>d(t)), 100)
            }
            const p = ()=>r.vkLocalStorage.getItem(i) || l
              , h = (t,e=p())=>{
                var n, r;
                const s = Object.keys(u()).filter((e=>e !== t)).join("|")
                  , o = (null == (r = e) || null == (n = r.match(new RegExp(`"${t}":(\\[.*?\\])(?:,"(${s})":\\[|}$)`))) ? void 0 : n[1]) || "";
                return (i = o).startsWith("[") && i.endsWith("]") ? o : "[]";
                var i
            }
            ;
            function f(t) {
                t && (0,
                s.logWebStatsEvent)("WebStats cleared. " + (t ? "Reason: LS is broken." : ""), t),
                d((()=>r.vkLocalStorage.setItem(i, "")))
            }
            function g(t=Number(new Date)) {
                r.vkSessionStorage.setItem(a, t.toString())
            }
            function m() {
                return parseInt(`${r.vkSessionStorage.getItem(a) || 0}`)
            }
        }
        ,
        592373: (t,e,n)=>{
            "use strict";
            n.d(e, {
                ADBLOCK_CONFIG_KEY: ()=>s,
                DEFAULT_ADBLOCK_STATS_COOLDOWN_MS: ()=>r,
                URLS: ()=>o
            });
            const r = 864e5
              , s = "unique_adblock_users"
              , o = ["https://tns-counter.ru", "https://top-fwz1.mail.ru"]
        }
        ,
        622310: (t,e,n)=>{
            "use strict";
            var r;
            n.d(e, {
                METRICS_SCOPE: ()=>r
            }),
            function(t) {
                t.USER_INFO_STATS = "USER_INFO_STATS",
                t.PERFORMANCE_STATS = "PERFORMANCE_STATS",
                t.ADBLOCK_STATS = "ADBLOCK_STATS",
                t.MODULE_NAVIGATION_STATS = "MODULE_NAVIGATION_STATS",
                t.BROWSER_CERTIFICATE_SUPPORT = "CERT_STATS",
                t.WASM_SUPPORT = "WASM_STATS"
            }(r || (r = {}))
        }
        ,
        495081: (t,e,n)=>{
            "use strict";
            n.d(e, {
                CooldownManager: ()=>o
            });
            var r = n(434788)
              , s = n(307411);
            class o {
                getMetricsState() {
                    const t = s.vkLocalStorage.getItem(this.storageName);
                    return t ? JSON.parse(t) : {
                        timestamps: {}
                    }
                }
                getMetricName(t) {
                    if ("number" == typeof this.cooldown)
                        return null != t ? t : "default";
                    if (!t)
                        throw new Error("The metric name is required for a complex cooldown configuration.");
                    return t
                }
                getMetricTTL(t) {
                    return "number" == typeof this.cooldown ? this.cooldown : this.cooldown[t]
                }
                checkMetricCooldown(t, e) {
                    var n;
                    return (!(null == (n = this.options.invalidationReasons) ? void 0 : n.dateChange) || new Date(e).toDateString() === (new Date).toDateString()) && e + this.getMetricTTL(t) > Date.now()
                }
                isMetricOnCoolDown(t) {
                    const e = this.getMetricName(t);
                    var n;
                    const r = null != (n = this.getMetricsState().timestamps[e]) ? n : 0;
                    return this.scheduleCleanOutdatedMetrics(),
                    this.checkMetricCooldown(e, r)
                }
                updateMetricTimestamp(t) {
                    const e = this.getMetricName(t)
                      , n = this.getMetricsState();
                    n.timestamps[e] = Date.now(),
                    s.vkLocalStorage.setItem(this.storageName, JSON.stringify(n)),
                    this.scheduleCleanOutdatedMetrics()
                }
                cleanOutdatedMetrics() {
                    const t = this.getMetricsState()
                      , e = (0,
                    r._)({}, t);
                    Object.entries(t.timestamps).forEach((([t,n])=>{
                        this.checkMetricCooldown(t, n) || delete e.timestamps[t]
                    }
                    )),
                    s.vkLocalStorage.setItem(this.storageName, JSON.stringify(e))
                }
                scheduleCleanOutdatedMetrics() {
                    this.options.cleanOutdatedMetrics && !this.isOutdatedMetricsCleanScheduled && (this.isOutdatedMetricsCleanScheduled = !0,
                    requestIdleCallback((()=>{
                        this.isOutdatedMetricsCleanScheduled = !1,
                        this.cleanOutdatedMetrics()
                    }
                    ), {
                        timeout: 5e3
                    }))
                }
                constructor(t, e, n, r={}) {
                    this.id = t,
                    this.scope = e,
                    this.cooldown = n,
                    this.options = r,
                    this.isOutdatedMetricsCleanScheduled = !1,
                    this.storageName = `@METRICS_ ${t || "GUEST"}_ ${e}`
                }
            }
        }
        ,
        182157: (t,e,n)=>{
            "use strict";
            n.d(e, {
                COOLDOWN: ()=>r
            });
            const r = 288e5
        }
        ,
        169185: (t,e,n)=>{
            "use strict";
            n.d(e, {
                DEFAULT_WASM_SUPPORT_COOLDOWN_MS: ()=>r,
                WASM_SUPPORT_CONFIG_KEY: ()=>s
            });
            const r = 864e5
              , s = "users_wasm_support"
        }
        ,
        379450: (t,e,n)=>{
            "use strict";
            n.d(e, {
                staticManagerModuleName: ()=>r
            });
            const r = "static_manager"
        }
        ,
        297699: (t,e,n)=>{
            "use strict";
            n.d(e, {
                WebCustomSentryErrorTypes: ()=>r,
                getKnownIssuesOfWeb: ()=>c
            });
            var r, s = n(229546), o = n(574570), i = n(212147), a = n(301230);
            !function(t) {
                t.TIMEOUT = "Timeout",
                t.TOP_ERROR = "TopError"
            }(r || (r = {}));
            const c = (t,e)=>{
                var n, r, c, u, l, d, p;
                const h = e.originalException
                  , {type: f, value: g, stacktrace: m} = (0,
                o.getException)(t) || {}
                  , {frames: _} = m || {}
                  , v = String(null == (n = t.tags) ? void 0 : n.module);
                return {
                    0: [(0,
                    i.isNetworkError)(h) && h.error.name === s.AbortError],
                    .001: [f === s.TypeError, null == (r = g) ? void 0 : r.includes("Cannot read properties of undefined (reading 'firefoxSample')")],
                    .005: [null == (c = g) ? void 0 : c.includes("ResizeObserver loop")],
                    .05: [f === s.TypeError, "Cannot redefine property: getChannelData" === g, !(null == (u = t.tags) ? void 0 : u.is_logged_in), !!_ && _.every((t=>"<anonymous>" === t.filename)), ["video", s.SentryExplicitModule.UNKNOWN].includes(v)],
                    .075: [f === s.TypeError, null == (l = g) ? void 0 : l.includes(".finally is not a function"), ["videoplayer", "notifier"].includes(v)],
                    .1: [f === s.CustomSentryErrorTypes.ERROR_OF_EXTENSION, !!_ && _.some((t=>{
                        var e;
                        return null == (e = t.filename) ? void 0 : e.includes("/vkopt.js")
                    }
                    )), "profile" === v],
                    .15: [f === s.Error, null == (d = g) ? void 0 : d.includes("Empty response. Method: auth.anonymLogin"), "videoplayer" === v],
                    .0231: [null == (p = g) ? void 0 : p.includes("'Uncaught NetworkError: Failed to execute 'importScripts' on 'WorkerGlobalScope'")],
                    .0101: [f === s.TypeError, "Load failed" === g, a.browser.safari]
                }
            }
        }
        ,
        512098: (t,e,n)=>{
            "use strict";
            n.d(e, {
                HandledErrors: ()=>c
            });
            var r = n(229546)
              , s = n(791176)
              , o = n(297699)
              , i = n(250523)
              , a = n(574570);
            class c {
                static breadcrumbWithCustomCategory({breadcrumbs: t}) {
                    var e;
                    return null == (e = t) ? void 0 : e.find((t=>t.category === r.customBreadcrumbCategory))
                }
                static shortenMessage(t) {
                    var e, n;
                    const r = t.split("#")[0].trim();
                    return r.startsWith(null == (n = window) || null == (e = n.lang) ? void 0 : e.global_unknown_error) ? "unknown_error" : r
                }
                static getModuleFromCustomBreadcrumb(t) {
                    var e, n;
                    const r = null == (n = t) || null == (e = n.data) ? void 0 : e.module;
                    return "string" == typeof r && "[undefined]" !== r ? r : void 0
                }
                setupOnce(t, e) {
                    t(((t,n)=>{
                        var u;
                        if (e().getIntegration(c) && (0,
                        a.getException)(t) && (null == (u = t.tags) ? void 0 : u.module) === r.topErrorModuleName) {
                            var l;
                            const e = null == (l = t.extra) ? void 0 : l.__serialized__
                              , {url: u, type: d} = "string" == typeof e ? {} : e || {}
                              , p = c.breadcrumbWithCustomCategory(t)
                              , h = u && (0,
                            s.stripUrlQueryAndFragment)(u)
                              , f = d && r.errorEventNames[d];
                            (0,
                            a.setException)(t, {
                                type: o.WebCustomSentryErrorTypes.TOP_ERROR
                            }),
                            p && h && f && (t.tags.module = c.getModuleFromCustomBreadcrumb(p) || i.ModuleDetect.detectModuleInSentryEvent(t, n) || r.topErrorModuleName,
                            (0,
                            a.setException)(t, {
                                value: [h, `[${f}]`, `"${c.shortenMessage(p.message || "")}"`].join(" ")
                            }),
                            t.fingerprint = [h, f])
                        }
                        return t
                    }
                    ))
                }
                constructor() {
                    this.name = c.id
                }
            }
            c.id = "HandledErrors"
        }
        ,
        846599: (t,e,n)=>{
            "use strict";
            n.d(e, {
                HandledErrors: ()=>s.HandledErrors,
                ServerErrors: ()=>r.ServerErrors
            });
            var r = n(546843)
              , s = n(512098)
        }
        ,
        546843: (t,e,n)=>{
            "use strict";
            n.d(e, {
                ServerErrors: ()=>l
            });
            var r = n(574570)
              , s = n(179475)
              , o = n(379450)
              , i = n(297699)
              , a = n(385376)
              , c = n(839470)
              , u = n(470994);
            class l {
                static typeOfStaticTimedOut(t) {
                    var e, n, s;
                    return (null == (e = t.tags) ? void 0 : e.module) === o.staticManagerModuleName && (null == (s = Object.entries(this.timedOutMessagesOf).filter((([,e])=>{
                        var n, s;
                        return null == (s = (0,
                        r.getException)(t)) || null == (n = s.value) ? void 0 : n.includes(e)
                    }
                    ))) || null == (n = s.pop()) ? void 0 : n[0])
                }
                static hasBadStatusCode(t) {
                    var e, n;
                    return null == (n = t) || null == (e = n.breadcrumbs) ? void 0 : e.some((t=>{
                        var e, n;
                        return [502, 503, 504].includes(null == (n = t) || null == (e = n.data) ? void 0 : e.status_code)
                    }
                    ))
                }
                static modifyEventOfTimeout(t) {
                    var e;
                    (t.level = "warning",
                    (0,
                    r.setException)(t, {
                        type: i.WebCustomSentryErrorTypes.TIMEOUT
                    }),
                    t.tags) && (t.tags.module = (0,
                    r.findModuleByStackString)(null == (e = (0,
                    r.getException)(t)) ? void 0 : e.value) || (0,
                    u.getModule)())
                }
                static sendStatLog(t) {
                    (0,
                    a.saveStatlogEvents)({
                        name: "sentry_web_issues",
                        value: 1,
                        keys: [t.module, "warning", `${i.WebCustomSentryErrorTypes.TIMEOUT}Of ${t.eventName}`]
                    })
                }
                setupOnce(t, e) {
                    t(((t,n)=>{
                        if (e().getIntegration(l)) {
                            var r, s;
                            const e = n.originalException
                              , i = l.typeOfStaticTimedOut(t)
                              , a = String(null == (s = t) || null == (r = s.tags) ? void 0 : r.module);
                            if (l.hasBadStatusCode(t) && (t.level = "fatal"),
                            i)
                                return l.modifyEventOfTimeout(t),
                                t.fingerprint = [`${o.staticManagerModuleName}_ ${i}`],
                                (0,
                                c.partConfigEnabled)("sentry_js_web_timeouts_forwarding") && l.sendStatLog({
                                    module: a,
                                    eventName: i.toUpperCase()
                                }),
                                (0,
                                c.partConfigEnabled)("sentry_js_web_timeouts") ? t : null;
                            if ((0,
                            c.partConfigEnabled)("sentry_js_web_request_timeouts_feature") && e && "Loading timeout" === e.reason)
                                return l.modifyEventOfTimeout(t),
                                (0,
                                c.partConfigEnabled)("sentry_js_web_request_timeouts_forwarding") && l.sendStatLog({
                                    module: a,
                                    eventName: "Request"
                                }),
                                (0,
                                c.partConfigEnabled)("sentry_js_web_request_timeouts") ? t : null
                        }
                        return t
                    }
                    ))
                }
                constructor() {
                    this.name = l.id
                }
            }
            l.id = "ServerErrors",
            l.timedOutMessagesOf = {
                js: s.JS_LOAD_ERROR_TEXT,
                css: s.CSS_LOAD_ERROR_TEXT
            }
        }
        ,
        498751: (t,e,n)=>{
            "use strict";
            n.d(e, {
                BrowserClient: ()=>p
            });
            var r = n(507431)
              , s = n(5537)
              , o = n(678352)
              , i = n(282689)
              , a = n(925984)
              , c = n(547327)
              , u = n(627546)
              , l = n(695188)
              , d = n(504707);
            class p extends r.BaseClient {
                eventFromException(t, e) {
                    return (0,
                    u.eventFromException)(this._options.stackParser, t, e, this._options.attachStacktrace)
                }
                eventFromMessage(t, e="info", n) {
                    return (0,
                    u.eventFromMessage)(this._options.stackParser, t, e, n, this._options.attachStacktrace)
                }
                captureUserFeedback(t) {
                    if (!this._isEnabled())
                        return void o.logger.warn("SDK not enabled, will not capture user feedback.");
                    const e = (0,
                    d.createUserFeedbackEnvelope)(t, {
                        metadata: this.getSdkMetadata(),
                        dsn: this.getDsn(),
                        tunnel: this.getOptions().tunnel
                    });
                    this._sendEnvelope(e)
                }
                _prepareEvent(t, e, n) {
                    return t.platform = t.platform || "javascript",
                    super._prepareEvent(t, e, n)
                }
                _flushOutcomes() {
                    const t = this._clearOutcomes();
                    if (0 === t.length)
                        return void o.logger.log("No outcomes to send");
                    if (!this._dsn)
                        return void o.logger.log("No dsn provided, will not send outcomes");
                    o.logger.log("Sending outcomes:", t);
                    const e = (0,
                    i.createClientReportEnvelope)(t, this._options.tunnel && (0,
                    a.dsnToString)(this._dsn));
                    this._sendEnvelope(e)
                }
                constructor(t) {
                    const e = l.WINDOW.SENTRY_SDK_SOURCE || (0,
                    c.getSDKSource)();
                    t._metadata = t._metadata || {},
                    t._metadata.sdk = t._metadata.sdk || {
                        name: "sentry.javascript.browser",
                        packages: [{
                            name: `${e}:@sentry/browser`,
                            version: s.SDK_VERSION
                        }],
                        version: s.SDK_VERSION
                    },
                    super(t),
                    t.sendClientReports && l.WINDOW.document && l.WINDOW.document.addEventListener("visibilitychange", (()=>{
                        "hidden" === l.WINDOW.document.visibilityState && this._flushOutcomes()
                    }
                    ))
                }
            }
        }
        ,
        627546: (t,e,n)=>{
            "use strict";
            n.d(e, {
                eventFromException: ()=>g,
                eventFromMessage: ()=>m,
                eventFromUnknownInput: ()=>_,
                exceptionFromError: ()=>l
            });
            var r = n(434788)
              , s = n(593439)
              , o = n(173755)
              , i = n(70869)
              , a = n(458921)
              , c = n(779674)
              , u = n(486246);
            function l(t, e) {
                const n = p(t, e)
                  , r = {
                    type: e && e.name,
                    value: f(e)
                };
                return n.length && (r.stacktrace = {
                    frames: n
                }),
                void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"),
                r
            }
            function d(t, e) {
                return {
                    exception: {
                        values: [l(t, e)]
                    }
                }
            }
            function p(t, e) {
                const n = e.stacktrace || e.stack || ""
                  , r = function(t) {
                    if (t) {
                        if ("number" == typeof t.framesToPop)
                            return t.framesToPop;
                        if (h.test(t.message))
                            return 1
                    }
                    return 0
                }(e);
                try {
                    return t(n, r)
                } catch (t) {}
                return []
            }
            const h = /Minified React error #\d+;/i;
            function f(t) {
                const e = t && t.message;
                return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
            }
            function g(t, e, n, r) {
                const s = _(t, e, n && n.syntheticException || void 0, r);
                return (0,
                a.addExceptionMechanism)(s),
                s.level = "error",
                n && n.event_id && (s.event_id = n.event_id),
                (0,
                c.resolvedSyncPromise)(s)
            }
            function m(t, e, n="info", r, s) {
                const o = v(t, e, r && r.syntheticException || void 0, s);
                return o.level = n,
                r && r.event_id && (o.event_id = r.event_id),
                (0,
                c.resolvedSyncPromise)(o)
            }
            function _(t, e, n, c, u) {
                let l;
                if ((0,
                o.isErrorEvent)(e) && e.error) {
                    return d(t, e.error)
                }
                if ((0,
                o.isDOMError)(e) || (0,
                o.isDOMException)(e)) {
                    const s = e;
                    if ("stack"in e)
                        l = d(t, e);
                    else {
                        const e = s.name || ((0,
                        o.isDOMError)(s) ? "DOMError" : "DOMException")
                          , r = s.message ? `${e}: ${s.message}` : e;
                        l = v(t, r, n, c),
                        (0,
                        a.addExceptionTypeValue)(l, r)
                    }
                    return "code"in s && (l.tags = (0,
                    r._)({}, l.tags, {
                        "DOMException.code": `${s.code}`
                    })),
                    l
                }
                if ((0,
                o.isError)(e))
                    return d(t, e);
                if ((0,
                o.isPlainObject)(e) || (0,
                o.isEvent)(e)) {
                    return l = function(t, e, n, r) {
                        const a = (0,
                        s.getCurrentHub)().getClient()
                          , c = a && a.getOptions().normalizeDepth
                          , u = {
                            exception: {
                                values: [{
                                    type: (0,
                                    o.isEvent)(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
                                    value: y(e, {
                                        isUnhandledRejection: r
                                    })
                                }]
                            },
                            extra: {
                                __serialized__: (0,
                                i.normalizeToSize)(e, c)
                            }
                        };
                        if (n) {
                            const e = p(t, n);
                            e.length && (u.exception.values[0].stacktrace = {
                                frames: e
                            })
                        }
                        return u
                    }(t, e, n, u),
                    (0,
                    a.addExceptionMechanism)(l, {
                        synthetic: !0
                    }),
                    l
                }
                return l = v(t, e, n, c),
                (0,
                a.addExceptionTypeValue)(l, `${e}`, void 0),
                (0,
                a.addExceptionMechanism)(l, {
                    synthetic: !0
                }),
                l
            }
            function v(t, e, n, r) {
                const s = {
                    message: e
                };
                if (r && n) {
                    const r = p(t, n);
                    r.length && (s.exception = {
                        values: [{
                            value: e,
                            stacktrace: {
                                frames: r
                            }
                        }]
                    })
                }
                return s
            }
            function y(t, {isUnhandledRejection: e}) {
                const n = (0,
                u.extractExceptionKeysForMessage)(t)
                  , r = e ? "promise rejection" : "exception";
                if ((0,
                o.isErrorEvent)(t))
                    return `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``;
                if ((0,
                o.isEvent)(t)) {
                    return `Event \`${function(t) {
                        try {
                            const e = Object.getPrototypeOf(t);
                            return e ? e.constructor.name : void 0
                        } catch (t) {}
                    }(t)}\` (type=${t.type}) captured as ${r}`
                }
                return `Object captured as ${r} with keys: ${n}`
            }
        }
        ,
        695188: (t,e,n)=>{
            "use strict";
            n.d(e, {
                WINDOW: ()=>c,
                shouldIgnoreOnError: ()=>l,
                wrap: ()=>d
            });
            var r = n(434788)
              , s = n(375722)
              , o = n(606258)
              , i = n(486246)
              , a = n(458921);
            const c = o.GLOBAL_OBJ;
            let u = 0;
            function l() {
                return u > 0
            }
            function d(t, e={}, n) {
                if ("function" != typeof t)
                    return t;
                try {
                    const e = t.__sentry_wrapped__;
                    if (e)
                        return e;
                    if ((0,
                    i.getOriginalFunction)(t))
                        return t
                } catch (e) {
                    return t
                }
                const o = function() {
                    const o = Array.prototype.slice.call(arguments);
                    try {
                        n && "function" == typeof n && n.apply(this, arguments);
                        const r = o.map((t=>d(t, e)));
                        return t.apply(this, r)
                    } catch (t) {
                        throw u++,
                        setTimeout((()=>{
                            u--
                        }
                        )),
                        (0,
                        s.withScope)((n=>{
                            n.addEventProcessor((t=>(e.mechanism && ((0,
                            a.addExceptionTypeValue)(t, void 0, void 0),
                            (0,
                            a.addExceptionMechanism)(t, e.mechanism)),
                            t.extra = (0,
                            r._)({}, t.extra, {
                                arguments: o
                            }),
                            t))),
                            (0,
                            s.captureException)(t)
                        }
                        )),
                        t
                    }
                };
                try {
                    for (const e in t)
                        Object.prototype.hasOwnProperty.call(t, e) && (o[e] = t[e])
                } catch (t) {}
                (0,
                i.markFunctionWrapped)(o, t),
                (0,
                i.addNonEnumerableProperty)(t, "__sentry_wrapped__", o);
                try {
                    Object.getOwnPropertyDescriptor(o, "name").configurable && Object.defineProperty(o, "name", {
                        get: ()=>t.name
                    })
                } catch (t) {}
                return o
            }
        }
        ,
        424839: (t,e,n)=>{
            "use strict";
            n.d(e, {
                Breadcrumbs: ()=>f
            });
            var r = n(434788)
              , s = n(593439)
              , o = n(427933)
              , i = n(458921)
              , a = n(678352)
              , c = n(505002)
              , u = n(198260)
              , l = n(188032)
              , d = n(791176)
              , p = n(695188);
            const h = 1024;
            class f {
                static __initStatic() {
                    this.id = "Breadcrumbs"
                }
                setupOnce() {
                    if (this.options.console && (0,
                    o.addInstrumentationHandler)("console", m),
                    this.options.dom && (0,
                    o.addInstrumentationHandler)("dom", function(t) {
                        function e(e) {
                            let n, r = "object" == typeof t ? t.serializeAttribute : void 0, o = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                            o && o > h && (a.logger.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${o} was configured. Sentry will use 1024 instead.`),
                            o = h),
                            "string" == typeof r && (r = [r]);
                            try {
                                const t = e.event;
                                n = function(t) {
                                    return !!t && !!t.target
                                }(t) ? (0,
                                c.htmlTreeAsString)(t.target, {
                                    keyAttrs: r,
                                    maxStringLength: o
                                }) : (0,
                                c.htmlTreeAsString)(t, {
                                    keyAttrs: r,
                                    maxStringLength: o
                                })
                            } catch (t) {
                                n = "<unknown>"
                            }
                            0 !== n.length && (0,
                            s.getCurrentHub)().addBreadcrumb({
                                category: `ui.${e.name}`,
                                message: n
                            }, {
                                event: e.event,
                                name: e.name,
                                global: e.global
                            })
                        }
                        return e
                    }(this.options.dom)),
                    this.options.xhr && (0,
                    o.addInstrumentationHandler)("xhr", _),
                    this.options.fetch && (0,
                    o.addInstrumentationHandler)("fetch", v),
                    this.options.history && (0,
                    o.addInstrumentationHandler)("history", y),
                    this.options.sentry) {
                        const t = (0,
                        s.getCurrentHub)().getClient();
                        t && t.on && t.on("beforeSendEvent", g)
                    }
                }
                constructor(t) {
                    this.name = f.id,
                    this.options = (0,
                    r._)({
                        console: !0,
                        dom: !0,
                        fetch: !0,
                        history: !0,
                        sentry: !0,
                        xhr: !0
                    }, t)
                }
            }
            function g(t) {
                (0,
                s.getCurrentHub)().addBreadcrumb({
                    category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                    event_id: t.event_id,
                    level: t.level,
                    message: (0,
                    i.getEventDescription)(t)
                }, {
                    event: t
                })
            }
            function m(t) {
                const e = {
                    category: "console",
                    data: {
                        arguments: t.args,
                        logger: "console"
                    },
                    level: (0,
                    u.severityLevelFromString)(t.level),
                    message: (0,
                    l.safeJoin)(t.args, " ")
                };
                if ("assert" === t.level) {
                    if (!1 !== t.args[0])
                        return;
                    e.message = `Assertion failed: ${(0,
                    l.safeJoin)(t.args.slice(1), " ") || "console.assert"}`,
                    e.data.arguments = t.args.slice(1)
                }
                (0,
                s.getCurrentHub)().addBreadcrumb(e, {
                    input: t.args,
                    level: t.level
                })
            }
            function _(t) {
                const {startTimestamp: e, endTimestamp: n} = t
                  , r = t.xhr[o.SENTRY_XHR_DATA_KEY];
                if (!e || !n || !r)
                    return;
                const {method: i, url: a, status_code: c, body: u} = r
                  , l = {
                    method: i,
                    url: a,
                    status_code: c
                }
                  , d = {
                    xhr: t.xhr,
                    input: u,
                    startTimestamp: e,
                    endTimestamp: n
                };
                (0,
                s.getCurrentHub)().addBreadcrumb({
                    category: "xhr",
                    data: l,
                    type: "http"
                }, d)
            }
            function v(t) {
                const {startTimestamp: e, endTimestamp: n} = t;
                if (n && (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method))
                    if (t.error) {
                        const r = t.fetchData
                          , o = {
                            data: t.error,
                            input: t.args,
                            startTimestamp: e,
                            endTimestamp: n
                        };
                        (0,
                        s.getCurrentHub)().addBreadcrumb({
                            category: "fetch",
                            data: r,
                            level: "error",
                            type: "http"
                        }, o)
                    } else {
                        const o = (0,
                        r._)({}, t.fetchData, {
                            status_code: t.response && t.response.status
                        })
                          , i = {
                            input: t.args,
                            response: t.response,
                            startTimestamp: e,
                            endTimestamp: n
                        };
                        (0,
                        s.getCurrentHub)().addBreadcrumb({
                            category: "fetch",
                            data: o,
                            type: "http"
                        }, i)
                    }
            }
            function y(t) {
                let e = t.from
                  , n = t.to;
                const r = (0,
                d.parseUrl)(p.WINDOW.location.href);
                let o = (0,
                d.parseUrl)(e);
                const i = (0,
                d.parseUrl)(n);
                o.path || (o = r),
                r.protocol === i.protocol && r.host === i.host && (n = i.relative),
                r.protocol === o.protocol && r.host === o.host && (e = o.relative),
                (0,
                s.getCurrentHub)().addBreadcrumb({
                    category: "navigation",
                    data: {
                        from: e,
                        to: n
                    }
                })
            }
            f.__initStatic()
        }
        ,
        22956: (t,e,n)=>{
            "use strict";
            n.d(e, {
                Dedupe: ()=>s
            });
            var r = n(678352);
            class s {
                static __initStatic() {
                    this.id = "Dedupe"
                }
                setupOnce(t, e) {}
                processEvent(t) {
                    if (t.type)
                        return t;
                    try {
                        if (function(t, e) {
                            if (!e)
                                return !1;
                            if (function(t, e) {
                                const n = t.message
                                  , r = e.message;
                                if (!n && !r)
                                    return !1;
                                if (n && !r || !n && r)
                                    return !1;
                                if (n !== r)
                                    return !1;
                                if (!i(t, e))
                                    return !1;
                                if (!o(t, e))
                                    return !1;
                                return !0
                            }(t, e))
                                return !0;
                            if (function(t, e) {
                                const n = a(e)
                                  , r = a(t);
                                if (!n || !r)
                                    return !1;
                                if (n.type !== r.type || n.value !== r.value)
                                    return !1;
                                if (!i(t, e))
                                    return !1;
                                if (!o(t, e))
                                    return !1;
                                return !0
                            }(t, e))
                                return !0;
                            return !1
                        }(t, this._previousEvent))
                            return r.logger.warn("Event dropped due to being a duplicate of previously captured event."),
                            null
                    } catch (t) {}
                    return this._previousEvent = t
                }
                constructor() {
                    this.name = s.id
                }
            }
            function o(t, e) {
                let n = c(t)
                  , r = c(e);
                if (!n && !r)
                    return !0;
                if (n && !r || !n && r)
                    return !1;
                if (r.length !== n.length)
                    return !1;
                for (let t = 0; t < r.length; t++) {
                    const e = r[t]
                      , s = n[t];
                    if (e.filename !== s.filename || e.lineno !== s.lineno || e.colno !== s.colno || e.function !== s.function)
                        return !1
                }
                return !0
            }
            function i(t, e) {
                let n = t.fingerprint
                  , r = e.fingerprint;
                if (!n && !r)
                    return !0;
                if (n && !r || !n && r)
                    return !1;
                try {
                    return !(n.join("") !== r.join(""))
                } catch (t) {
                    return !1
                }
            }
            function a(t) {
                return t.exception && t.exception.values && t.exception.values[0]
            }
            function c(t) {
                const e = t.exception;
                if (e)
                    try {
                        return e.values[0].stacktrace.frames
                    } catch (t) {
                        return
                    }
            }
            s.__initStatic()
        }
        ,
        62602: (t,e,n)=>{
            "use strict";
            n.d(e, {
                GlobalHandlers: ()=>p
            });
            var r = n(434788)
              , s = n(593439)
              , o = n(427933)
              , i = n(173755)
              , a = n(505002)
              , c = n(678352)
              , u = n(458921)
              , l = n(627546)
              , d = n(695188);
            class p {
                static __initStatic() {
                    this.id = "GlobalHandlers"
                }
                setupOnce() {
                    Error.stackTraceLimit = 50;
                    const t = this._options;
                    for (const n in t) {
                        const r = this._installFunc[n];
                        r && t[n] && (e = n,
                        c.logger.log(`Global Handler attached: ${e}`),
                        r(),
                        this._installFunc[n] = void 0)
                    }
                    var e
                }
                constructor(t) {
                    this.name = p.id,
                    this._options = (0,
                    r._)({
                        onerror: !0,
                        onunhandledrejection: !0
                    }, t),
                    this._installFunc = {
                        onerror: h,
                        onunhandledrejection: f
                    }
                }
            }
            function h() {
                (0,
                o.addInstrumentationHandler)("error", (t=>{
                    const [e,n,r] = _();
                    if (!e.getIntegration(p))
                        return;
                    const {msg: s, url: o, line: a, column: c, error: u} = t;
                    if ((0,
                    d.shouldIgnoreOnError)() || u && u.__sentry_own_request__)
                        return;
                    const h = void 0 === u && (0,
                    i.isString)(s) ? function(t, e, n, r) {
                        const s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
                        let o = (0,
                        i.isErrorEvent)(t) ? t.message : t
                          , a = "Error";
                        const c = o.match(s);
                        c && (a = c[1],
                        o = c[2]);
                        const u = {
                            exception: {
                                values: [{
                                    type: a,
                                    value: o
                                }]
                            }
                        };
                        return g(u, e, n, r)
                    }(s, o, a, c) : g((0,
                    l.eventFromUnknownInput)(n, u || s, void 0, r, !1), o, a, c);
                    h.level = "error",
                    m(e, u, h, "onerror")
                }
                ))
            }
            function f() {
                (0,
                o.addInstrumentationHandler)("unhandledrejection", (t=>{
                    const [e,n,r] = _();
                    if (!e.getIntegration(p))
                        return;
                    let s = t;
                    try {
                        "reason"in t ? s = t.reason : "detail"in t && "reason"in t.detail && (s = t.detail.reason)
                    } catch (t) {}
                    if ((0,
                    d.shouldIgnoreOnError)() || s && s.__sentry_own_request__)
                        return !0;
                    const o = (0,
                    i.isPrimitive)(s) ? {
                        exception: {
                            values: [{
                                type: "UnhandledRejection",
                                value: `Non-Error promise rejection captured with value: ${String(s)}`
                            }]
                        }
                    } : (0,
                    l.eventFromUnknownInput)(n, s, void 0, r, !0);
                    o.level = "error",
                    m(e, s, o, "onunhandledrejection")
                }
                ))
            }
            function g(t, e, n, r) {
                const s = t.exception = t.exception || {}
                  , o = s.values = s.values || []
                  , c = o[0] = o[0] || {}
                  , u = c.stacktrace = c.stacktrace || {}
                  , l = u.frames = u.frames || []
                  , d = isNaN(parseInt(r, 10)) ? void 0 : r
                  , p = isNaN(parseInt(n, 10)) ? void 0 : n
                  , h = (0,
                i.isString)(e) && e.length > 0 ? e : (0,
                a.getLocationHref)();
                return 0 === l.length && l.push({
                    colno: d,
                    filename: h,
                    function: "?",
                    in_app: !0,
                    lineno: p
                }),
                t
            }
            function m(t, e, n, r) {
                (0,
                u.addExceptionMechanism)(n, {
                    handled: !1,
                    type: r
                }),
                t.captureEvent(n, {
                    originalException: e
                })
            }
            function _() {
                const t = (0,
                s.getCurrentHub)()
                  , e = t.getClient()
                  , n = e && e.getOptions() || {
                    stackParser: ()=>[],
                    attachStacktrace: !1
                };
                return [t, n.stackParser, n.attachStacktrace]
            }
            p.__initStatic()
        }
        ,
        742002: (t,e,n)=>{
            "use strict";
            n.d(e, {
                HttpContext: ()=>o
            });
            var r = n(434788)
              , s = n(695188);
            class o {
                static __initStatic() {
                    this.id = "HttpContext"
                }
                setupOnce() {}
                preprocessEvent(t) {
                    if (!s.WINDOW.navigator && !s.WINDOW.location && !s.WINDOW.document)
                        return;
                    const e = t.request && t.request.url || s.WINDOW.location && s.WINDOW.location.href
                      , {referrer: n} = s.WINDOW.document || {}
                      , {userAgent: o} = s.WINDOW.navigator || {}
                      , i = (0,
                    r._)({}, t.request && t.request.headers, n && {
                        Referer: n
                    }, o && {
                        "User-Agent": o
                    })
                      , a = (0,
                    r._)({}, t.request, e && {
                        url: e
                    }, {
                        headers: i
                    });
                    t.request = a
                }
                constructor() {
                    this.name = o.id
                }
            }
            o.__initStatic()
        }
        ,
        624199: (t,e,n)=>{
            "use strict";
            n.d(e, {
                LinkedErrors: ()=>o
            });
            var r = n(60288)
              , s = n(627546);
            class o {
                static __initStatic() {
                    this.id = "LinkedErrors"
                }
                setupOnce() {}
                preprocessEvent(t, e, n) {
                    const o = n.getOptions();
                    (0,
                    r.applyAggregateErrorsToEvent)(s.exceptionFromError, o.stackParser, o.maxValueLength, this._key, this._limit, t, e)
                }
                constructor(t={}) {
                    this.name = o.id,
                    this._key = t.key || "cause",
                    this._limit = t.limit || 5
                }
            }
            o.__initStatic()
        }
        ,
        528913: (t,e,n)=>{
            "use strict";
            n.d(e, {
                TryCatch: ()=>c
            });
            var r = n(434788)
              , s = n(486246)
              , o = n(663406)
              , i = n(695188);
            const a = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
            class c {
                static __initStatic() {
                    this.id = "TryCatch"
                }
                setupOnce() {
                    this._options.setTimeout && (0,
                    s.fill)(i.WINDOW, "setTimeout", u),
                    this._options.setInterval && (0,
                    s.fill)(i.WINDOW, "setInterval", u),
                    this._options.requestAnimationFrame && (0,
                    s.fill)(i.WINDOW, "requestAnimationFrame", l),
                    this._options.XMLHttpRequest && "XMLHttpRequest"in i.WINDOW && (0,
                    s.fill)(XMLHttpRequest.prototype, "send", d);
                    const t = this._options.eventTarget;
                    if (t) {
                        (Array.isArray(t) ? t : a).forEach(p)
                    }
                }
                constructor(t) {
                    this.name = c.id,
                    this._options = (0,
                    r._)({
                        XMLHttpRequest: !0,
                        eventTarget: !0,
                        requestAnimationFrame: !0,
                        setInterval: !0,
                        setTimeout: !0
                    }, t)
                }
            }
            function u(t) {
                return function(...e) {
                    const n = e[0];
                    return e[0] = (0,
                    i.wrap)(n, {
                        mechanism: {
                            data: {
                                function: (0,
                                o.getFunctionName)(t)
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    }),
                    t.apply(this, e)
                }
            }
            function l(t) {
                return function(e) {
                    return t.apply(this, [(0,
                    i.wrap)(e, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: (0,
                                o.getFunctionName)(t)
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    })])
                }
            }
            function d(t) {
                return function(...e) {
                    const n = this;
                    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((t=>{
                        t in n && "function" == typeof n[t] && (0,
                        s.fill)(n, t, (function(e) {
                            const n = {
                                mechanism: {
                                    data: {
                                        function: t,
                                        handler: (0,
                                        o.getFunctionName)(e)
                                    },
                                    handled: !1,
                                    type: "instrument"
                                }
                            }
                              , r = (0,
                            s.getOriginalFunction)(e);
                            return r && (n.mechanism.data.handler = (0,
                            o.getFunctionName)(r)),
                            (0,
                            i.wrap)(e, n)
                        }
                        ))
                    }
                    )),
                    t.apply(this, e)
                }
            }
            function p(t) {
                const e = i.WINDOW
                  , n = e[t] && e[t].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0,
                s.fill)(n, "addEventListener", (function(e) {
                    return function(n, r, s) {
                        try {
                            "function" == typeof r.handleEvent && (r.handleEvent = (0,
                            i.wrap)(r.handleEvent, {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: (0,
                                        o.getFunctionName)(r),
                                        target: t
                                    },
                                    handled: !1,
                                    type: "instrument"
                                }
                            }))
                        } catch (t) {}
                        return e.apply(this, [n, (0,
                        i.wrap)(r, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: (0,
                                    o.getFunctionName)(r),
                                    target: t
                                },
                                handled: !1,
                                type: "instrument"
                            }
                        }), s])
                    }
                }
                )),
                (0,
                s.fill)(n, "removeEventListener", (function(t) {
                    return function(e, n, r) {
                        const s = n;
                        try {
                            const n = s && s.__sentry_wrapped__;
                            n && t.call(this, e, n, r)
                        } catch (t) {}
                        return t.call(this, e, s, r)
                    }
                }
                )))
            }
            c.__initStatic()
        }
        ,
        672098: (t,e,n)=>{
            "use strict";
            n.d(e, {
                init: ()=>O,
                onLoad: ()=>x
            });
            var r = n(434788)
              , s = n(972705)
              , o = n(293808)
              , i = n(294282)
              , a = n(952973)
              , c = n(593439)
              , u = (n(380673),
            n(663406))
              , l = n(316041)
              , d = n(678352)
              , p = n(427933)
              , h = n(498751)
              , f = n(695188)
              , g = n(62602)
              , m = n(528913)
              , _ = n(424839)
              , v = n(624199)
              , y = n(742002)
              , S = n(22956)
              , E = n(648350)
              , b = n(499863)
              , w = n(991302);
            const k = [new s.InboundFilters, new o.FunctionToString, new m.TryCatch, new _.Breadcrumbs, new g.GlobalHandlers, new v.LinkedErrors, new S.Dedupe, new y.HttpContext];
            function O(t={}) {
                void 0 === t.defaultIntegrations && (t.defaultIntegrations = k),
                void 0 === t.release && ("string" == typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__),
                f.WINDOW.SENTRY_RELEASE && f.WINDOW.SENTRY_RELEASE.id && (t.release = f.WINDOW.SENTRY_RELEASE.id)),
                void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
                void 0 === t.sendClientReports && (t.sendClientReports = !0);
                const e = (0,
                r._)({}, t, {
                    stackParser: (0,
                    u.stackParserFromStackParserOptions)(t.stackParser || E.defaultStackParser),
                    integrations: (0,
                    i.getIntegrationsToSetup)(t),
                    transport: t.transport || ((0,
                    l.supportsFetch)() ? b.makeFetchTransport : w.makeXHRTransport)
                });
                (0,
                a.initAndBind)(h.BrowserClient, e),
                t.autoSessionTracking && function() {
                    if (void 0 === f.WINDOW.document)
                        return void d.logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                    const t = (0,
                    c.getCurrentHub)();
                    if (!t.captureSession)
                        return;
                    T(t),
                    (0,
                    p.addInstrumentationHandler)("history", (({from: t, to: e})=>{
                        void 0 !== t && t !== e && T((0,
                        c.getCurrentHub)())
                    }
                    ))
                }()
            }
            function x(t) {
                t()
            }
            function T(t) {
                t.startSession({
                    ignoreDuration: !0
                }),
                t.captureSession()
            }
        }
        ,
        648350: (t,e,n)=>{
            "use strict";
            n.d(e, {
                defaultStackParser: ()=>p
            });
            var r = n(663406);
            const s = "?";
            function o(t, e, n, r) {
                const s = {
                    filename: t,
                    function: e,
                    in_app: !0
                };
                return void 0 !== n && (s.lineno = n),
                void 0 !== r && (s.colno = r),
                s
            }
            const i = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
              , a = /\((\S*)(?::(\d+))(?::(\d+))\)/
              , c = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
              , u = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
              , l = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i
              , d = [[30, t=>{
                const e = i.exec(t);
                if (e) {
                    if (e[2] && 0 === e[2].indexOf("eval")) {
                        const t = a.exec(e[2]);
                        t && (e[2] = t[1],
                        e[3] = t[2],
                        e[4] = t[3])
                    }
                    const [t,n] = h(e[1] || s, e[2]);
                    return o(n, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
                }
            }
            ], [50, t=>{
                const e = c.exec(t);
                if (e) {
                    if (e[3] && e[3].indexOf(" > eval") > -1) {
                        const t = u.exec(e[3]);
                        t && (e[1] = e[1] || "eval",
                        e[3] = t[1],
                        e[4] = t[2],
                        e[5] = "")
                    }
                    let t = e[3]
                      , n = e[1] || s;
                    return [n,t] = h(n, t),
                    o(t, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
                }
            }
            ], [40, t=>{
                const e = l.exec(t);
                return e ? o(e[2], e[1] || s, +e[3], e[4] ? +e[4] : void 0) : void 0
            }
            ]]
              , p = (0,
            r.createStackParser)(...d)
              , h = (t,e)=>{
                const n = -1 !== t.indexOf("safari-extension")
                  , r = -1 !== t.indexOf("safari-web-extension");
                return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : s, n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
            }
        }
        ,
        499863: (t,e,n)=>{
            "use strict";
            n.d(e, {
                makeFetchTransport: ()=>a
            });
            var r = n(434788)
              , s = n(723798)
              , o = n(779674)
              , i = n(637938);
            function a(t, e=(0,
            i.getNativeFetchImplementation)()) {
                let n = 0
                  , a = 0;
                return (0,
                s.createTransport)(t, (function(s) {
                    const c = s.body.length;
                    n += c,
                    a++;
                    const u = (0,
                    r._)({
                        body: s.body,
                        method: "POST",
                        referrerPolicy: "origin",
                        headers: t.headers,
                        keepalive: n <= 6e4 && a < 15
                    }, t.fetchOptions);
                    try {
                        return e(t.url, u).then((t=>(n -= c,
                        a--,
                        {
                            statusCode: t.status,
                            headers: {
                                "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                                "retry-after": t.headers.get("Retry-After")
                            }
                        })))
                    } catch (t) {
                        return (0,
                        i.clearCachedFetchImplementation)(),
                        n -= c,
                        a--,
                        (0,
                        o.rejectedSyncPromise)(t)
                    }
                }
                ))
            }
        }
        ,
        637938: (t,e,n)=>{
            "use strict";
            n.d(e, {
                clearCachedFetchImplementation: ()=>c,
                getNativeFetchImplementation: ()=>a
            });
            var r = n(316041)
              , s = n(678352)
              , o = n(695188);
            let i;
            function a() {
                if (i)
                    return i;
                if ((0,
                r.isNativeFetch)(o.WINDOW.fetch))
                    return i = o.WINDOW.fetch.bind(o.WINDOW);
                const t = o.WINDOW.document;
                let e = o.WINDOW.fetch;
                if (t && "function" == typeof t.createElement)
                    try {
                        const n = t.createElement("iframe");
                        n.hidden = !0,
                        t.head.appendChild(n);
                        const r = n.contentWindow;
                        r && r.fetch && (e = r.fetch),
                        t.head.removeChild(n)
                    } catch (t) {
                        s.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                    }
                return i = e.bind(o.WINDOW)
            }
            function c() {
                i = void 0
            }
        }
        ,
        991302: (t,e,n)=>{
            "use strict";
            n.d(e, {
                makeXHRTransport: ()=>i
            });
            var r = n(723798)
              , s = n(779674);
            const o = 4;
            function i(t) {
                return (0,
                r.createTransport)(t, (function(e) {
                    return new s.SyncPromise(((n,r)=>{
                        const s = new XMLHttpRequest;
                        s.onerror = r,
                        s.onreadystatechange = ()=>{
                            s.readyState === o && n({
                                statusCode: s.status,
                                headers: {
                                    "x-sentry-rate-limits": s.getResponseHeader("X-Sentry-Rate-Limits"),
                                    "retry-after": s.getResponseHeader("Retry-After")
                                }
                            })
                        }
                        ,
                        s.open("POST", t.url);
                        for (const e in t.headers)
                            Object.prototype.hasOwnProperty.call(t.headers, e) && s.setRequestHeader(e, t.headers[e]);
                        s.send(e.body)
                    }
                    ))
                }
                ))
            }
        }
        ,
        504707: (t,e,n)=>{
            "use strict";
            n.d(e, {
                createUserFeedbackEnvelope: ()=>i
            });
            var r = n(434788)
              , s = n(925984)
              , o = n(99975);
            function i(t, {metadata: e, tunnel: n, dsn: i}) {
                const a = (0,
                r._)({
                    event_id: t.event_id,
                    sent_at: (new Date).toISOString()
                }, e && e.sdk && {
                    sdk: {
                        name: e.sdk.name,
                        version: e.sdk.version
                    }
                }, !!n && !!i && {
                    dsn: (0,
                    s.dsnToString)(i)
                })
                  , c = function(t) {
                    return [{
                        type: "user_report"
                    }, t]
                }(t);
                return (0,
                o.createEnvelope)(a, [c])
            }
        }
        ,
        380673: (t,e,n)=>{
            "use strict";
            n.d(e, {
                getEnvelopeEndpointWithUrlEncodedAuth: ()=>c,
                getReportDialogEndpoint: ()=>u
            });
            var r = n(434788)
              , s = n(486246)
              , o = n(925984);
            const i = "7";
            function a(t) {
                const e = t.protocol ? `${t.protocol}:` : ""
                  , n = t.port ? `:${t.port}` : "";
                return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`
            }
            function c(t, e={}) {
                const n = "string" == typeof e ? e : e.tunnel
                  , o = "string" != typeof e && e._metadata ? e._metadata.sdk : void 0;
                return n || `${function(t) {
                    return `${a(t)}${t.projectId}/envelope/`
                }(t)}?${function(t, e) {
                    return (0,
                    s.urlEncode)((0,
                    r._)({
                        sentry_key: t.publicKey,
                        sentry_version: i
                    }, e && {
                        sentry_client: `${e.name}/${e.version}`
                    }))
                }(t, o)}`
            }
            function u(t, e) {
                const n = (0,
                o.makeDsn)(t);
                if (!n)
                    return "";
                const r = `${a(n)}embed/error-page/`;
                let s = `dsn=${(0,
                o.dsnToString)(n)}`;
                for (const t in e)
                    if ("dsn" !== t)
                        if ("user" === t) {
                            const t = e.user;
                            if (!t)
                                continue;
                            t.name && (s += `&name=${encodeURIComponent(t.name)}`),
                            t.email && (s += `&email=${encodeURIComponent(t.email)}`)
                        } else
                            s += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`;
                return `${r}?${s}`
            }
        }
        ,
        507431: (t,e,n)=>{
            "use strict";
            n.d(e, {
                BaseClient: ()=>v
            });
            var r = n(434788)
              , s = n(458921)
              , o = n(678352)
              , i = n(173755)
              , a = n(779674)
              , c = n(99975)
              , u = n(151537)
              , l = n(925984)
              , d = n(380673)
              , p = n(456359)
              , h = n(294282)
              , f = n(492414)
              , g = n(129994)
              , m = n(753710);
            const _ = "Not capturing exception because it's already been captured.";
            class v {
                captureException(t, e, n) {
                    if ((0,
                    s.checkOrSetAlreadyCaught)(t))
                        return void o.logger.log(_);
                    let r = e && e.event_id;
                    return this._process(this.eventFromException(t, e).then((t=>this._captureEvent(t, e, n))).then((t=>{
                        r = t
                    }
                    ))),
                    r
                }
                captureMessage(t, e, n, r) {
                    let s = n && n.event_id;
                    const o = (0,
                    i.isPrimitive)(t) ? this.eventFromMessage(String(t), e, n) : this.eventFromException(t, n);
                    return this._process(o.then((t=>this._captureEvent(t, n, r))).then((t=>{
                        s = t
                    }
                    ))),
                    s
                }
                captureEvent(t, e, n) {
                    if (e && e.originalException && (0,
                    s.checkOrSetAlreadyCaught)(e.originalException))
                        return void o.logger.log(_);
                    let r = e && e.event_id;
                    return this._process(this._captureEvent(t, e, n).then((t=>{
                        r = t
                    }
                    ))),
                    r
                }
                captureSession(t) {
                    "string" != typeof t.release ? o.logger.warn("Discarded session because of missing or non-string release") : (this.sendSession(t),
                    (0,
                    f.updateSession)(t, {
                        init: !1
                    }))
                }
                getDsn() {
                    return this._dsn
                }
                getOptions() {
                    return this._options
                }
                getSdkMetadata() {
                    return this._options._metadata
                }
                getTransport() {
                    return this._transport
                }
                flush(t) {
                    const e = this._transport;
                    return e ? this._isClientDoneProcessing(t).then((n=>e.flush(t).then((t=>n && t)))) : (0,
                    a.resolvedSyncPromise)(!0)
                }
                close(t) {
                    return this.flush(t).then((t=>(this.getOptions().enabled = !1,
                    t)))
                }
                getEventProcessors() {
                    return this._eventProcessors
                }
                addEventProcessor(t) {
                    this._eventProcessors.push(t)
                }
                setupIntegrations(t) {
                    (t && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) && (this._integrations = (0,
                    h.setupIntegrations)(this, this._options.integrations),
                    this._integrationsInitialized = !0)
                }
                getIntegrationById(t) {
                    return this._integrations[t]
                }
                getIntegration(t) {
                    try {
                        return this._integrations[t.id] || null
                    } catch (e) {
                        return o.logger.warn(`Cannot retrieve integration ${t.id} from the current Client`),
                        null
                    }
                }
                addIntegration(t) {
                    (0,
                    h.setupIntegration)(this, t, this._integrations)
                }
                sendEvent(t, e={}) {
                    this.emit("beforeSendEvent", t, e);
                    let n = (0,
                    p.createEventEnvelope)(t, this._dsn, this._options._metadata, this._options.tunnel);
                    for (const t of e.attachments || [])
                        n = (0,
                        c.addItemToEnvelope)(n, (0,
                        c.createAttachmentEnvelopeItem)(t, this._options.transportOptions && this._options.transportOptions.textEncoder));
                    const r = this._sendEnvelope(n);
                    r && r.then((e=>this.emit("afterSendEvent", t, e)), null)
                }
                sendSession(t) {
                    const e = (0,
                    p.createSessionEnvelope)(t, this._dsn, this._options._metadata, this._options.tunnel);
                    this._sendEnvelope(e)
                }
                recordDroppedEvent(t, e, n) {
                    if (this._options.sendClientReports) {
                        const n = `${t}:${e}`;
                        o.logger.log(`Adding outcome: "${n}"`),
                        this._outcomes[n] = this._outcomes[n] + 1 || 1
                    }
                }
                on(t, e) {
                    this._hooks[t] || (this._hooks[t] = []),
                    this._hooks[t].push(e)
                }
                emit(t, ...e) {
                    this._hooks[t] && this._hooks[t].forEach((t=>t(...e)))
                }
                _updateSessionFromEvent(t, e) {
                    let n = !1
                      , s = !1;
                    const o = e.exception && e.exception.values;
                    if (o) {
                        s = !0;
                        for (const t of o) {
                            const e = t.mechanism;
                            if (e && !1 === e.handled) {
                                n = !0;
                                break
                            }
                        }
                    }
                    const i = "ok" === t.status;
                    (i && 0 === t.errors || i && n) && ((0,
                    f.updateSession)(t, (0,
                    r._)({}, n && {
                        status: "crashed"
                    }, {
                        errors: t.errors || Number(s || n)
                    })),
                    this.captureSession(t))
                }
                _isClientDoneProcessing(t) {
                    return new a.SyncPromise((e=>{
                        let n = 0;
                        const r = setInterval((()=>{
                            0 == this._numProcessing ? (clearInterval(r),
                            e(!0)) : (n += 1,
                            t && n >= t && (clearInterval(r),
                            e(!1)))
                        }
                        ), 1)
                    }
                    ))
                }
                _isEnabled() {
                    return !1 !== this.getOptions().enabled && void 0 !== this._transport
                }
                _prepareEvent(t, e, n) {
                    const s = this.getOptions()
                      , o = Object.keys(this._integrations);
                    return !e.integrations && o.length > 0 && (e.integrations = o),
                    this.emit("preprocessEvent", t, e),
                    (0,
                    m.prepareEvent)(s, t, e, n, this).then((t=>{
                        if (null === t)
                            return t;
                        const {propagationContext: e} = t.sdkProcessingMetadata || {};
                        if (!(t.contexts && t.contexts.trace) && e) {
                            const {traceId: s, spanId: o, parentSpanId: i, dsc: a} = e;
                            t.contexts = (0,
                            r._)({
                                trace: {
                                    trace_id: s,
                                    span_id: o,
                                    parent_span_id: i
                                }
                            }, t.contexts);
                            const c = a || (0,
                            g.getDynamicSamplingContextFromClient)(s, this, n);
                            t.sdkProcessingMetadata = (0,
                            r._)({
                                dynamicSamplingContext: c
                            }, t.sdkProcessingMetadata)
                        }
                        return t
                    }
                    ))
                }
                _captureEvent(t, e={}, n) {
                    return this._processEvent(t, e, n).then((t=>t.event_id), (t=>{
                        {
                            const e = t;
                            "log" === e.logLevel ? o.logger.log(e.message) : o.logger.warn(e)
                        }
                    }
                    ))
                }
                _processEvent(t, e, n) {
                    const s = this.getOptions()
                      , {sampleRate: o} = s
                      , c = S(t)
                      , l = y(t)
                      , d = t.type || "error"
                      , p = `before send for type \`${d}\``;
                    if (l && "number" == typeof o && Math.random() > o)
                        return this.recordDroppedEvent("sample_rate", "error", t),
                        (0,
                        a.rejectedSyncPromise)(new u.SentryError(`Discarding event because it's not included in the random sample (sampling rate = ${o})`,"log"));
                    const h = "replay_event" === d ? "replay" : d;
                    return this._prepareEvent(t, e, n).then((n=>{
                        if (null === n)
                            throw this.recordDroppedEvent("event_processor", h, t),
                            new u.SentryError("An event processor returned `null`, will not send event.","log");
                        if (e.data && !0 === e.data.__sentry__)
                            return n;
                        const r = function(t, e, n) {
                            const {beforeSend: r, beforeSendTransaction: s} = t;
                            if (y(e) && r)
                                return r(e, n);
                            if (S(e) && s)
                                return s(e, n);
                            return e
                        }(s, n, e);
                        return function(t, e) {
                            const n = `${e} must return \`null\` or a valid event.`;
                            if ((0,
                            i.isThenable)(t))
                                return t.then((t=>{
                                    if (!(0,
                                    i.isPlainObject)(t) && null !== t)
                                        throw new u.SentryError(n);
                                    return t
                                }
                                ), (t=>{
                                    throw new u.SentryError(`${e} rejected with ${t}`)
                                }
                                ));
                            if (!(0,
                            i.isPlainObject)(t) && null !== t)
                                throw new u.SentryError(n);
                            return t
                        }(r, p)
                    }
                    )).then((s=>{
                        if (null === s)
                            throw this.recordDroppedEvent("before_send", h, t),
                            new u.SentryError(`${p} returned \`null\`, will not send event.`,"log");
                        const o = n && n.getSession();
                        !c && o && this._updateSessionFromEvent(o, s);
                        const i = s.transaction_info;
                        if (c && i && s.transaction !== t.transaction) {
                            const t = "custom";
                            s.transaction_info = (0,
                            r._)({}, i, {
                                source: t
                            })
                        }
                        return this.sendEvent(s, e),
                        s
                    }
                    )).then(null, (t=>{
                        if (t instanceof u.SentryError)
                            throw t;
                        throw this.captureException(t, {
                            data: {
                                __sentry__: !0
                            },
                            originalException: t
                        }),
                        new u.SentryError(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${t}`)
                    }
                    ))
                }
                _process(t) {
                    this._numProcessing++,
                    t.then((t=>(this._numProcessing--,
                    t)), (t=>(this._numProcessing--,
                    t)))
                }
                _sendEnvelope(t) {
                    if (this.emit("beforeEnvelope", t),
                    this._isEnabled() && this._transport)
                        return this._transport.send(t).then(null, (t=>{
                            o.logger.error("Error while sending event:", t)
                        }
                        ));
                    o.logger.error("Transport disabled")
                }
                _clearOutcomes() {
                    const t = this._outcomes;
                    return this._outcomes = {},
                    Object.keys(t).map((e=>{
                        const [n,r] = e.split(":");
                        return {
                            reason: n,
                            category: r,
                            quantity: t[e]
                        }
                    }
                    ))
                }
                constructor(t) {
                    if (this._options = t,
                    this._integrations = {},
                    this._integrationsInitialized = !1,
                    this._numProcessing = 0,
                    this._outcomes = {},
                    this._hooks = {},
                    this._eventProcessors = [],
                    t.dsn ? this._dsn = (0,
                    l.makeDsn)(t.dsn) : o.logger.warn("No DSN provided, client will not send events."),
                    this._dsn) {
                        const e = (0,
                        d.getEnvelopeEndpointWithUrlEncodedAuth)(this._dsn, t);
                        this._transport = t.transport((0,
                        r._)({
                            recordDroppedEvent: this.recordDroppedEvent.bind(this)
                        }, t.transportOptions, {
                            url: e
                        }))
                    }
                }
            }
            function y(t) {
                return void 0 === t.type
            }
            function S(t) {
                return "transaction" === t.type
            }
        }
        ,
        863433: (t,e,n)=>{
            "use strict";
            n.d(e, {
                DEFAULT_ENVIRONMENT: ()=>r
            });
            const r = "production"
        }
        ,
        456359: (t,e,n)=>{
            "use strict";
            n.d(e, {
                createEventEnvelope: ()=>a,
                createSessionEnvelope: ()=>i
            });
            var r = n(434788)
              , s = n(99975)
              , o = n(925984);
            function i(t, e, n, i) {
                const a = (0,
                s.getSdkMetadataForEnvelopeHeader)(n)
                  , c = (0,
                r._)({
                    sent_at: (new Date).toISOString()
                }, a && {
                    sdk: a
                }, !!i && e && {
                    dsn: (0,
                    o.dsnToString)(e)
                })
                  , u = "aggregates"in t ? [{
                    type: "sessions"
                }, t] : [{
                    type: "session"
                }, t.toJSON()];
                return (0,
                s.createEnvelope)(c, [u])
            }
            function a(t, e, n, r) {
                const o = (0,
                s.getSdkMetadataForEnvelopeHeader)(n)
                  , i = t.type && "replay_event" !== t.type ? t.type : "event";
                !function(t, e) {
                    e && (t.sdk = t.sdk || {},
                    t.sdk.name = t.sdk.name || e.name,
                    t.sdk.version = t.sdk.version || e.version,
                    t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []],
                    t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []])
                }(t, n && n.sdk);
                const a = (0,
                s.createEventEnvelopeHeaders)(t, o, r, e);
                delete t.sdkProcessingMetadata;
                const c = [{
                    type: i
                }, t];
                return (0,
                s.createEnvelope)(a, [c])
            }
        }
        ,
        426216: (t,e,n)=>{
            "use strict";
            n.d(e, {
                addGlobalEventProcessor: ()=>u,
                getGlobalEventProcessors: ()=>c,
                notifyEventProcessors: ()=>l
            });
            var r = n(434788)
              , s = n(606258)
              , o = n(779674)
              , i = n(678352)
              , a = n(173755);
            function c() {
                return (0,
                s.getGlobalSingleton)("globalEventProcessors", (()=>[]))
            }
            function u(t) {
                c().push(t)
            }
            function l(t, e, n, s=0) {
                return new o.SyncPromise(((o,c)=>{
                    const u = t[s];
                    if (null === e || "function" != typeof u)
                        o(e);
                    else {
                        const d = u((0,
                        r._)({}, e), n);
                        u.id && null === d && i.logger.log(`Event processor "${u.id}" dropped event`),
                        (0,
                        a.isThenable)(d) ? d.then((e=>l(t, e, n, s + 1).then(o))).then(null, c) : l(t, d, n, s + 1).then(o).then(null, c)
                    }
                }
                ))
            }
        }
        ,
        375722: (t,e,n)=>{
            "use strict";
            n.d(e, {
                captureException: ()=>s,
                setTag: ()=>o,
                setUser: ()=>i,
                withScope: ()=>a
            });
            n(11010),
            n(434788),
            n(678352),
            n(458921),
            n(535916),
            n(173755);
            var r = n(593439);
            function s(t, e) {
                return (0,
                r.getCurrentHub)().captureException(t, {
                    captureContext: e
                })
            }
            function o(t, e) {
                (0,
                r.getCurrentHub)().setTag(t, e)
            }
            function i(t) {
                (0,
                r.getCurrentHub)().setUser(t)
            }
            function a(t) {
                (0,
                r.getCurrentHub)().withScope(t)
            }
        }
        ,
        593439: (t,e,n)=>{
            "use strict";
            n.d(e, {
                getCurrentHub: ()=>m
            });
            var r = n(434788)
              , s = n(458921)
              , o = n(535916)
              , i = n(678352)
              , a = n(606258)
              , c = n(863433)
              , u = n(12149)
              , l = n(492414);
            const d = 4
              , p = 100;
            class h {
                isOlderThan(t) {
                    return this._version < t
                }
                bindClient(t) {
                    this.getStackTop().client = t,
                    t && t.setupIntegrations && t.setupIntegrations()
                }
                pushScope() {
                    const t = u.Scope.clone(this.getScope());
                    return this.getStack().push({
                        client: this.getClient(),
                        scope: t
                    }),
                    t
                }
                popScope() {
                    return !(this.getStack().length <= 1) && !!this.getStack().pop()
                }
                withScope(t) {
                    const e = this.pushScope();
                    try {
                        t(e)
                    } finally {
                        this.popScope()
                    }
                }
                getClient() {
                    return this.getStackTop().client
                }
                getScope() {
                    return this.getStackTop().scope
                }
                getStack() {
                    return this._stack
                }
                getStackTop() {
                    return this._stack[this._stack.length - 1]
                }
                captureException(t, e) {
                    const n = this._lastEventId = e && e.event_id ? e.event_id : (0,
                    s.uuid4)()
                      , o = new Error("Sentry syntheticException");
                    return this._withClient(((s,i)=>{
                        s.captureException(t, (0,
                        r._)({
                            originalException: t,
                            syntheticException: o
                        }, e, {
                            event_id: n
                        }), i)
                    }
                    )),
                    n
                }
                captureMessage(t, e, n) {
                    const o = this._lastEventId = n && n.event_id ? n.event_id : (0,
                    s.uuid4)()
                      , i = new Error(t);
                    return this._withClient(((s,a)=>{
                        s.captureMessage(t, e, (0,
                        r._)({
                            originalException: t,
                            syntheticException: i
                        }, n, {
                            event_id: o
                        }), a)
                    }
                    )),
                    o
                }
                captureEvent(t, e) {
                    const n = e && e.event_id ? e.event_id : (0,
                    s.uuid4)();
                    return t.type || (this._lastEventId = n),
                    this._withClient(((s,o)=>{
                        s.captureEvent(t, (0,
                        r._)({}, e, {
                            event_id: n
                        }), o)
                    }
                    )),
                    n
                }
                lastEventId() {
                    return this._lastEventId
                }
                addBreadcrumb(t, e) {
                    const {scope: n, client: s} = this.getStackTop();
                    if (!s)
                        return;
                    const {beforeBreadcrumb: a=null, maxBreadcrumbs: c=p} = s.getOptions && s.getOptions() || {};
                    if (c <= 0)
                        return;
                    const u = (0,
                    o.dateTimestampInSeconds)()
                      , l = (0,
                    r._)({
                        timestamp: u
                    }, t)
                      , d = a ? (0,
                    i.consoleSandbox)((()=>a(l, e))) : l;
                    null !== d && (s.emit && s.emit("beforeAddBreadcrumb", d, e),
                    n.addBreadcrumb(d, c))
                }
                setUser(t) {
                    this.getScope().setUser(t)
                }
                setTags(t) {
                    this.getScope().setTags(t)
                }
                setExtras(t) {
                    this.getScope().setExtras(t)
                }
                setTag(t, e) {
                    this.getScope().setTag(t, e)
                }
                setExtra(t, e) {
                    this.getScope().setExtra(t, e)
                }
                setContext(t, e) {
                    this.getScope().setContext(t, e)
                }
                configureScope(t) {
                    const {scope: e, client: n} = this.getStackTop();
                    n && t(e)
                }
                run(t) {
                    const e = g(this);
                    try {
                        t(this)
                    } finally {
                        g(e)
                    }
                }
                getIntegration(t) {
                    const e = this.getClient();
                    if (!e)
                        return null;
                    try {
                        return e.getIntegration(t)
                    } catch (e) {
                        return i.logger.warn(`Cannot retrieve integration ${t.id} from the current Hub`),
                        null
                    }
                }
                startTransaction(t, e) {
                    const n = this._callExtensionMethod("startTransaction", t, e);
                    if (!n) {
                        this.getClient() ? console.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n") : console.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")
                    }
                    return n
                }
                traceHeaders() {
                    return this._callExtensionMethod("traceHeaders")
                }
                captureSession(t=!1) {
                    if (t)
                        return this.endSession();
                    this._sendSessionUpdate()
                }
                endSession() {
                    const t = this.getStackTop().scope
                      , e = t.getSession();
                    e && (0,
                    l.closeSession)(e),
                    this._sendSessionUpdate(),
                    t.setSession()
                }
                startSession(t) {
                    const {scope: e, client: n} = this.getStackTop()
                      , {release: s, environment: o=c.DEFAULT_ENVIRONMENT} = n && n.getOptions() || {}
                      , {userAgent: i} = a.GLOBAL_OBJ.navigator || {}
                      , u = (0,
                    l.makeSession)((0,
                    r._)({
                        release: s,
                        environment: o,
                        user: e.getUser()
                    }, i && {
                        userAgent: i
                    }, t))
                      , d = e.getSession && e.getSession();
                    return d && "ok" === d.status && (0,
                    l.updateSession)(d, {
                        status: "exited"
                    }),
                    this.endSession(),
                    e.setSession(u),
                    u
                }
                shouldSendDefaultPii() {
                    const t = this.getClient()
                      , e = t && t.getOptions();
                    return Boolean(e && e.sendDefaultPii)
                }
                _sendSessionUpdate() {
                    const {scope: t, client: e} = this.getStackTop()
                      , n = t.getSession();
                    n && e && e.captureSession && e.captureSession(n)
                }
                _withClient(t) {
                    const {scope: e, client: n} = this.getStackTop();
                    n && t(n, e)
                }
                _callExtensionMethod(t, ...e) {
                    const n = f().__SENTRY__;
                    if (n && n.extensions && "function" == typeof n.extensions[t])
                        return n.extensions[t].apply(this, e);
                    i.logger.warn(`Extension method ${t} couldn't be found, doing nothing.`)
                }
                constructor(t, e=new u.Scope, n=d) {
                    this._version = n,
                    this._stack = [{
                        scope: e
                    }],
                    t && this.bindClient(t)
                }
            }
            function f() {
                return a.GLOBAL_OBJ.__SENTRY__ = a.GLOBAL_OBJ.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                },
                a.GLOBAL_OBJ
            }
            function g(t) {
                const e = f()
                  , n = y(e);
                return S(e, t),
                n
            }
            function m() {
                const t = f();
                if (t.__SENTRY__ && t.__SENTRY__.acs) {
                    const e = t.__SENTRY__.acs.getCurrentHub();
                    if (e)
                        return e
                }
                return _(t)
            }
            function _(t=f()) {
                return v(t) && !y(t).isOlderThan(d) || S(t, new h),
                y(t)
            }
            function v(t) {
                return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
            }
            function y(t) {
                return (0,
                a.getGlobalSingleton)("hub", (()=>new h), t)
            }
            function S(t, e) {
                if (!t)
                    return !1;
                return (t.__SENTRY__ = t.__SENTRY__ || {}).hub = e,
                !0
            }
        }
        ,
        294282: (t,e,n)=>{
            "use strict";
            n.d(e, {
                getIntegrationsToSetup: ()=>c,
                setupIntegration: ()=>l,
                setupIntegrations: ()=>u
            });
            var r = n(458921)
              , s = n(678352)
              , o = n(426216)
              , i = n(593439);
            const a = [];
            function c(t) {
                const e = t.defaultIntegrations || []
                  , n = t.integrations;
                let s;
                e.forEach((t=>{
                    t.isDefaultInstance = !0
                }
                )),
                s = Array.isArray(n) ? [...e, ...n] : "function" == typeof n ? (0,
                r.arrayify)(n(e)) : e;
                const o = function(t) {
                    const e = {};
                    return t.forEach((t=>{
                        const {name: n} = t
                          , r = e[n];
                        r && !r.isDefaultInstance && t.isDefaultInstance || (e[n] = t)
                    }
                    )),
                    Object.keys(e).map((t=>e[t]))
                }(s)
                  , i = function(t, e) {
                    for (let n = 0; n < t.length; n++)
                        if (!0 === e(t[n]))
                            return n;
                    return -1
                }(o, (t=>"Debug" === t.name));
                if (-1 !== i) {
                    const [t] = o.splice(i, 1);
                    o.push(t)
                }
                return o
            }
            function u(t, e) {
                const n = {};
                return e.forEach((e=>{
                    e && l(t, e, n)
                }
                )),
                n
            }
            function l(t, e, n) {
                if (n[e.name] = e,
                -1 === a.indexOf(e.name) && (e.setupOnce(o.addGlobalEventProcessor, i.getCurrentHub),
                a.push(e.name)),
                t.on && "function" == typeof e.preprocessEvent) {
                    const n = e.preprocessEvent.bind(e);
                    t.on("preprocessEvent", ((e,r)=>n(e, r, t)))
                }
                if (t.addEventProcessor && "function" == typeof e.processEvent) {
                    const n = e.processEvent.bind(e)
                      , r = Object.assign(((e,r)=>n(e, r, t)), {
                        id: e.name
                    });
                    t.addEventProcessor(r)
                }
                s.logger.log(`Integration installed: ${e.name}`)
            }
        }
        ,
        293808: (t,e,n)=>{
            "use strict";
            n.d(e, {
                FunctionToString: ()=>o
            });
            var r = n(486246);
            let s;
            class o {
                static __initStatic() {
                    this.id = "FunctionToString"
                }
                setupOnce() {
                    s = Function.prototype.toString;
                    try {
                        Function.prototype.toString = function(...t) {
                            const e = (0,
                            r.getOriginalFunction)(this) || this;
                            return s.apply(e, t)
                        }
                    } catch (t) {}
                }
                constructor() {
                    this.name = o.id
                }
            }
            o.__initStatic()
        }
        ,
        972705: (t,e,n)=>{
            "use strict";
            n.d(e, {
                InboundFilters: ()=>c
            });
            var r = n(678352)
              , s = n(458921)
              , o = n(188032);
            const i = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]
              , a = [/^.*\/healthcheck$/, /^.*\/healthy$/, /^.*\/live$/, /^.*\/ready$/, /^.*\/heartbeat$/, /^.*\/health$/, /^.*\/healthz$/];
            class c {
                static __initStatic() {
                    this.id = "InboundFilters"
                }
                setupOnce(t, e) {}
                processEvent(t, e, n) {
                    const c = n.getOptions()
                      , l = function(t={}, e={}) {
                        return {
                            allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
                            denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
                            ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : i],
                            ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || [], ...t.disableTransactionDefaults ? [] : a],
                            ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                        }
                    }(this._options, c);
                    return function(t, e) {
                        if (e.ignoreInternal && function(t) {
                            try {
                                return "SentryError" === t.exception.values[0].type
                            } catch (t) {}
                            return !1
                        }(t))
                            return r.logger.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${(0,
                            s.getEventDescription)(t)}`),
                            !0;
                        if (function(t, e) {
                            if (t.type || !e || !e.length)
                                return !1;
                            return function(t) {
                                const e = [];
                                t.message && e.push(t.message);
                                let n;
                                try {
                                    n = t.exception.values[t.exception.values.length - 1]
                                } catch (t) {}
                                n && n.value && (e.push(n.value),
                                n.type && e.push(`${n.type}: ${n.value}`));
                                0 === e.length && r.logger.error(`Could not extract message for event ${(0,
                                s.getEventDescription)(t)}`);
                                return e
                            }(t).some((t=>(0,
                            o.stringMatchesSomePattern)(t, e)))
                        }(t, e.ignoreErrors))
                            return r.logger.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0,
                            s.getEventDescription)(t)}`),
                            !0;
                        if (function(t, e) {
                            if ("transaction" !== t.type || !e || !e.length)
                                return !1;
                            const n = t.transaction;
                            return !!n && (0,
                            o.stringMatchesSomePattern)(n, e)
                        }(t, e.ignoreTransactions))
                            return r.logger.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${(0,
                            s.getEventDescription)(t)}`),
                            !0;
                        if (function(t, e) {
                            if (!e || !e.length)
                                return !1;
                            const n = u(t);
                            return !!n && (0,
                            o.stringMatchesSomePattern)(n, e)
                        }(t, e.denyUrls))
                            return r.logger.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0,
                            s.getEventDescription)(t)}.\nUrl: ${u(t)}`),
                            !0;
                        if (!function(t, e) {
                            if (!e || !e.length)
                                return !0;
                            const n = u(t);
                            return !n || (0,
                            o.stringMatchesSomePattern)(n, e)
                        }(t, e.allowUrls))
                            return r.logger.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0,
                            s.getEventDescription)(t)}.\nUrl: ${u(t)}`),
                            !0;
                        return !1
                    }(t, l) ? null : t
                }
                constructor(t={}) {
                    this.name = c.id,
                    this._options = t
                }
            }
            function u(t) {
                try {
                    let e;
                    try {
                        e = t.exception.values[0].stacktrace.frames
                    } catch (t) {}
                    return e ? function(t=[]) {
                        for (let e = t.length - 1; e >= 0; e--) {
                            const n = t[e];
                            if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename)
                                return n.filename || null
                        }
                        return null
                    }(e) : null
                } catch (e) {
                    return r.logger.error(`Cannot extract url for event ${(0,
                    s.getEventDescription)(t)}`),
                    null
                }
            }
            c.__initStatic()
        }
        ,
        12149: (t,e,n)=>{
            "use strict";
            n.d(e, {
                Scope: ()=>u
            });
            var r = n(434788)
              , s = n(173755)
              , o = n(535916)
              , i = n(458921)
              , a = n(426216)
              , c = n(492414);
            class u {
                static clone(t) {
                    const e = new u;
                    return t && (e._breadcrumbs = [...t._breadcrumbs],
                    e._tags = (0,
                    r._)({}, t._tags),
                    e._extra = (0,
                    r._)({}, t._extra),
                    e._contexts = (0,
                    r._)({}, t._contexts),
                    e._user = t._user,
                    e._level = t._level,
                    e._span = t._span,
                    e._session = t._session,
                    e._transactionName = t._transactionName,
                    e._fingerprint = t._fingerprint,
                    e._eventProcessors = [...t._eventProcessors],
                    e._requestSession = t._requestSession,
                    e._attachments = [...t._attachments],
                    e._sdkProcessingMetadata = (0,
                    r._)({}, t._sdkProcessingMetadata),
                    e._propagationContext = (0,
                    r._)({}, t._propagationContext)),
                    e
                }
                addScopeListener(t) {
                    this._scopeListeners.push(t)
                }
                addEventProcessor(t) {
                    return this._eventProcessors.push(t),
                    this
                }
                setUser(t) {
                    return this._user = t || {},
                    this._session && (0,
                    c.updateSession)(this._session, {
                        user: t
                    }),
                    this._notifyScopeListeners(),
                    this
                }
                getUser() {
                    return this._user
                }
                getRequestSession() {
                    return this._requestSession
                }
                setRequestSession(t) {
                    return this._requestSession = t,
                    this
                }
                setTags(t) {
                    return this._tags = (0,
                    r._)({}, this._tags, t),
                    this._notifyScopeListeners(),
                    this
                }
                setTag(t, e) {
                    return this._tags = (0,
                    r._)({}, this._tags, {
                        [t]: e
                    }),
                    this._notifyScopeListeners(),
                    this
                }
                setExtras(t) {
                    return this._extra = (0,
                    r._)({}, this._extra, t),
                    this._notifyScopeListeners(),
                    this
                }
                setExtra(t, e) {
                    return this._extra = (0,
                    r._)({}, this._extra, {
                        [t]: e
                    }),
                    this._notifyScopeListeners(),
                    this
                }
                setFingerprint(t) {
                    return this._fingerprint = t,
                    this._notifyScopeListeners(),
                    this
                }
                setLevel(t) {
                    return this._level = t,
                    this._notifyScopeListeners(),
                    this
                }
                setTransactionName(t) {
                    return this._transactionName = t,
                    this._notifyScopeListeners(),
                    this
                }
                setContext(t, e) {
                    return null === e ? delete this._contexts[t] : this._contexts[t] = e,
                    this._notifyScopeListeners(),
                    this
                }
                setSpan(t) {
                    return this._span = t,
                    this._notifyScopeListeners(),
                    this
                }
                getSpan() {
                    return this._span
                }
                getTransaction() {
                    const t = this.getSpan();
                    return t && t.transaction
                }
                setSession(t) {
                    return t ? this._session = t : delete this._session,
                    this._notifyScopeListeners(),
                    this
                }
                getSession() {
                    return this._session
                }
                update(t) {
                    if (!t)
                        return this;
                    if ("function" == typeof t) {
                        const e = t(this);
                        return e instanceof u ? e : this
                    }
                    return t instanceof u ? (this._tags = (0,
                    r._)({}, this._tags, t._tags),
                    this._extra = (0,
                    r._)({}, this._extra, t._extra),
                    this._contexts = (0,
                    r._)({}, this._contexts, t._contexts),
                    t._user && Object.keys(t._user).length && (this._user = t._user),
                    t._level && (this._level = t._level),
                    t._fingerprint && (this._fingerprint = t._fingerprint),
                    t._requestSession && (this._requestSession = t._requestSession),
                    t._propagationContext && (this._propagationContext = t._propagationContext)) : (0,
                    s.isPlainObject)(t) && (this._tags = (0,
                    r._)({}, this._tags, t.tags),
                    this._extra = (0,
                    r._)({}, this._extra, t.extra),
                    this._contexts = (0,
                    r._)({}, this._contexts, t.contexts),
                    t.user && (this._user = t.user),
                    t.level && (this._level = t.level),
                    t.fingerprint && (this._fingerprint = t.fingerprint),
                    t.requestSession && (this._requestSession = t.requestSession),
                    t.propagationContext && (this._propagationContext = t.propagationContext)),
                    this
                }
                clear() {
                    return this._breadcrumbs = [],
                    this._tags = {},
                    this._extra = {},
                    this._user = {},
                    this._contexts = {},
                    this._level = void 0,
                    this._transactionName = void 0,
                    this._fingerprint = void 0,
                    this._requestSession = void 0,
                    this._span = void 0,
                    this._session = void 0,
                    this._notifyScopeListeners(),
                    this._attachments = [],
                    this._propagationContext = l(),
                    this
                }
                addBreadcrumb(t, e) {
                    const n = "number" == typeof e ? e : 100;
                    if (n <= 0)
                        return this;
                    const s = (0,
                    r._)({
                        timestamp: (0,
                        o.dateTimestampInSeconds)()
                    }, t)
                      , i = this._breadcrumbs;
                    return i.push(s),
                    this._breadcrumbs = i.length > n ? i.slice(-n) : i,
                    this._notifyScopeListeners(),
                    this
                }
                getLastBreadcrumb() {
                    return this._breadcrumbs[this._breadcrumbs.length - 1]
                }
                clearBreadcrumbs() {
                    return this._breadcrumbs = [],
                    this._notifyScopeListeners(),
                    this
                }
                addAttachment(t) {
                    return this._attachments.push(t),
                    this
                }
                getAttachments() {
                    return this._attachments
                }
                clearAttachments() {
                    return this._attachments = [],
                    this
                }
                applyToEvent(t, e={}, n) {
                    if (this._extra && Object.keys(this._extra).length && (t.extra = (0,
                    r._)({}, this._extra, t.extra)),
                    this._tags && Object.keys(this._tags).length && (t.tags = (0,
                    r._)({}, this._tags, t.tags)),
                    this._user && Object.keys(this._user).length && (t.user = (0,
                    r._)({}, this._user, t.user)),
                    this._contexts && Object.keys(this._contexts).length && (t.contexts = (0,
                    r._)({}, this._contexts, t.contexts)),
                    this._level && (t.level = this._level),
                    this._transactionName && (t.transaction = this._transactionName),
                    this._span) {
                        t.contexts = (0,
                        r._)({
                            trace: this._span.getTraceContext()
                        }, t.contexts);
                        const e = this._span.transaction;
                        if (e) {
                            t.sdkProcessingMetadata = (0,
                            r._)({
                                dynamicSamplingContext: e.getDynamicSamplingContext()
                            }, t.sdkProcessingMetadata);
                            const n = e.name;
                            n && (t.tags = (0,
                            r._)({
                                transaction: n
                            }, t.tags))
                        }
                    }
                    this._applyFingerprint(t);
                    const s = this._getBreadcrumbs()
                      , o = [...t.breadcrumbs || [], ...s];
                    return t.breadcrumbs = o.length > 0 ? o : void 0,
                    t.sdkProcessingMetadata = (0,
                    r._)({}, t.sdkProcessingMetadata, this._sdkProcessingMetadata, {
                        propagationContext: this._propagationContext
                    }),
                    (0,
                    a.notifyEventProcessors)([...n || [], ...(0,
                    a.getGlobalEventProcessors)(), ...this._eventProcessors], t, e)
                }
                setSDKProcessingMetadata(t) {
                    return this._sdkProcessingMetadata = (0,
                    r._)({}, this._sdkProcessingMetadata, t),
                    this
                }
                setPropagationContext(t) {
                    return this._propagationContext = t,
                    this
                }
                getPropagationContext() {
                    return this._propagationContext
                }
                _getBreadcrumbs() {
                    return this._breadcrumbs
                }
                _notifyScopeListeners() {
                    this._notifyingListeners || (this._notifyingListeners = !0,
                    this._scopeListeners.forEach((t=>{
                        t(this)
                    }
                    )),
                    this._notifyingListeners = !1)
                }
                _applyFingerprint(t) {
                    t.fingerprint = t.fingerprint ? (0,
                    i.arrayify)(t.fingerprint) : [],
                    this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
                    t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                }
                constructor() {
                    this._notifyingListeners = !1,
                    this._scopeListeners = [],
                    this._eventProcessors = [],
                    this._breadcrumbs = [],
                    this._attachments = [],
                    this._user = {},
                    this._tags = {},
                    this._extra = {},
                    this._contexts = {},
                    this._sdkProcessingMetadata = {},
                    this._propagationContext = l()
                }
            }
            function l() {
                return {
                    traceId: (0,
                    i.uuid4)(),
                    spanId: (0,
                    i.uuid4)().substring(16)
                }
            }
        }
        ,
        952973: (t,e,n)=>{
            "use strict";
            n.d(e, {
                initAndBind: ()=>o
            });
            var r = n(678352)
              , s = n(593439);
            function o(t, e) {
                !0 === e.debug && r.logger.enable();
                const n = (0,
                s.getCurrentHub)();
                n.getScope().update(e.initialScope);
                const o = new t(e);
                n.bindClient(o)
            }
        }
        ,
        492414: (t,e,n)=>{
            "use strict";
            n.d(e, {
                closeSession: ()=>c,
                makeSession: ()=>i,
                updateSession: ()=>a
            });
            var r = n(535916)
              , s = n(458921)
              , o = n(486246);
            function i(t) {
                const e = (0,
                r.timestampInSeconds)()
                  , n = {
                    sid: (0,
                    s.uuid4)(),
                    init: !0,
                    timestamp: e,
                    started: e,
                    duration: 0,
                    status: "ok",
                    errors: 0,
                    ignoreDuration: !1,
                    toJSON: ()=>function(t) {
                        return (0,
                        o.dropUndefinedKeys)({
                            sid: `${t.sid}`,
                            init: t.init,
                            started: new Date(1e3 * t.started).toISOString(),
                            timestamp: new Date(1e3 * t.timestamp).toISOString(),
                            status: t.status,
                            errors: t.errors,
                            did: "number" == typeof t.did || "string" == typeof t.did ? `${t.did}` : void 0,
                            duration: t.duration,
                            abnormal_mechanism: t.abnormal_mechanism,
                            attrs: {
                                release: t.release,
                                environment: t.environment,
                                ip_address: t.ipAddress,
                                user_agent: t.userAgent
                            }
                        })
                    }(n)
                };
                return t && a(n, t),
                n
            }
            function a(t, e={}) {
                if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address),
                t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)),
                t.timestamp = e.timestamp || (0,
                r.timestampInSeconds)(),
                e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
                e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
                e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0,
                s.uuid4)()),
                void 0 !== e.init && (t.init = e.init),
                !t.did && e.did && (t.did = `${e.did}`),
                "number" == typeof e.started && (t.started = e.started),
                t.ignoreDuration)
                    t.duration = void 0;
                else if ("number" == typeof e.duration)
                    t.duration = e.duration;
                else {
                    const e = t.timestamp - t.started;
                    t.duration = e >= 0 ? e : 0
                }
                e.release && (t.release = e.release),
                e.environment && (t.environment = e.environment),
                !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
                !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
                "number" == typeof e.errors && (t.errors = e.errors),
                e.status && (t.status = e.status)
            }
            function c(t, e) {
                let n = {};
                e ? n = {
                    status: e
                } : "ok" === t.status && (n = {
                    status: "exited"
                }),
                a(t, n)
            }
        }
        ,
        129994: (t,e,n)=>{
            "use strict";
            n.d(e, {
                getDynamicSamplingContextFromClient: ()=>o
            });
            var r = n(486246)
              , s = n(863433);
            function o(t, e, n) {
                const o = e.getOptions()
                  , {publicKey: i} = e.getDsn() || {}
                  , {segment: a} = n && n.getUser() || {}
                  , c = (0,
                r.dropUndefinedKeys)({
                    environment: o.environment || s.DEFAULT_ENVIRONMENT,
                    release: o.release,
                    user_segment: a,
                    public_key: i,
                    trace_id: t
                });
                return e.emit && e.emit("createDsc", c),
                c
            }
        }
        ,
        723798: (t,e,n)=>{
            "use strict";
            n.d(e, {
                createTransport: ()=>l
            });
            var r = n(768250)
              , s = n(99975)
              , o = n(81429)
              , i = n(779674)
              , a = n(678352)
              , c = n(151537);
            const u = 30;
            function l(t, e, n=(0,
            r.makePromiseBuffer)(t.bufferSize || u)) {
                let l = {};
                function p(r) {
                    const u = [];
                    if ((0,
                    s.forEachEnvelopeItem)(r, ((e,n)=>{
                        const r = (0,
                        s.envelopeItemTypeToDataCategory)(n);
                        if ((0,
                        o.isRateLimited)(l, r)) {
                            const s = d(e, n);
                            t.recordDroppedEvent("ratelimit_backoff", r, s)
                        } else
                            u.push(e)
                    }
                    )),
                    0 === u.length)
                        return (0,
                        i.resolvedSyncPromise)();
                    const p = (0,
                    s.createEnvelope)(r[0], u)
                      , h = e=>{
                        (0,
                        s.forEachEnvelopeItem)(p, ((n,r)=>{
                            const o = d(n, r);
                            t.recordDroppedEvent(e, (0,
                            s.envelopeItemTypeToDataCategory)(r), o)
                        }
                        ))
                    }
                    ;
                    return n.add((()=>e({
                        body: (0,
                        s.serializeEnvelope)(p, t.textEncoder)
                    }).then((t=>(void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && a.logger.warn(`Sentry responded with status code ${t.statusCode} to sent event.`),
                    l = (0,
                    o.updateRateLimits)(l, t),
                    t)), (t=>{
                        throw h("network_error"),
                        t
                    }
                    )))).then((t=>t), (t=>{
                        if (t instanceof c.SentryError)
                            return a.logger.error("Skipped sending event because buffer is full."),
                            h("queue_overflow"),
                            (0,
                            i.resolvedSyncPromise)();
                        throw t
                    }
                    ))
                }
                return p.__sentry__baseTransport__ = !0,
                {
                    send: p,
                    flush: t=>n.drain(t)
                }
            }
            function d(t, e) {
                if ("event" === e || "transaction" === e)
                    return Array.isArray(t) ? t[1] : void 0
            }
        }
        ,
        753710: (t,e,n)=>{
            "use strict";
            n.d(e, {
                prepareEvent: ()=>h
            });
            var r = n(434788)
              , s = n(458921)
              , o = n(535916)
              , i = n(779674)
              , a = n(188032)
              , c = n(606258)
              , u = n(70869)
              , l = n(863433)
              , d = n(426216)
              , p = n(12149);
            function h(t, e, n, h, g) {
                const {normalizeDepth: m=3, normalizeMaxBreadth: _=1e3} = t
                  , v = (0,
                r._)({}, e, {
                    event_id: e.event_id || n.event_id || (0,
                    s.uuid4)(),
                    timestamp: e.timestamp || (0,
                    o.dateTimestampInSeconds)()
                })
                  , y = n.integrations || t.integrations.map((t=>t.name));
                !function(t, e) {
                    const {environment: n, release: r, dist: s, maxValueLength: o=250} = e;
                    "environment"in t || (t.environment = "environment"in e ? n : l.DEFAULT_ENVIRONMENT);
                    void 0 === t.release && void 0 !== r && (t.release = r);
                    void 0 === t.dist && void 0 !== s && (t.dist = s);
                    t.message && (t.message = (0,
                    a.truncate)(t.message, o));
                    const i = t.exception && t.exception.values && t.exception.values[0];
                    i && i.value && (i.value = (0,
                    a.truncate)(i.value, o));
                    const c = t.request;
                    c && c.url && (c.url = (0,
                    a.truncate)(c.url, o))
                }(v, t),
                function(t, e) {
                    e.length > 0 && (t.sdk = t.sdk || {},
                    t.sdk.integrations = [...t.sdk.integrations || [], ...e])
                }(v, y),
                void 0 === e.type && function(t, e) {
                    const n = c.GLOBAL_OBJ._sentryDebugIds;
                    if (!n)
                        return;
                    let r;
                    const s = f.get(e);
                    s ? r = s : (r = new Map,
                    f.set(e, r));
                    const o = Object.keys(n).reduce(((t,s)=>{
                        let o;
                        const i = r.get(s);
                        i ? o = i : (o = e(s),
                        r.set(s, o));
                        for (let e = o.length - 1; e >= 0; e--) {
                            const r = o[e];
                            if (r.filename) {
                                t[r.filename] = n[s];
                                break
                            }
                        }
                        return t
                    }
                    ), {});
                    try {
                        t.exception.values.forEach((t=>{
                            t.stacktrace.frames.forEach((t=>{
                                t.filename && (t.debug_id = o[t.filename])
                            }
                            ))
                        }
                        ))
                    } catch (t) {}
                }(v, t.stackParser);
                let S = h;
                n.captureContext && (S = p.Scope.clone(S).update(n.captureContext));
                let E = (0,
                i.resolvedSyncPromise)(v);
                const b = g && g.getEventProcessors ? g.getEventProcessors() : [];
                if (S) {
                    if (S.getAttachments) {
                        const t = [...n.attachments || [], ...S.getAttachments()];
                        t.length && (n.attachments = t)
                    }
                    E = S.applyToEvent(v, n, b)
                } else
                    E = (0,
                    d.notifyEventProcessors)([...b, ...(0,
                    d.getGlobalEventProcessors)()], v, n);
                return E.then((t=>(t && function(t) {
                    const e = {};
                    try {
                        t.exception.values.forEach((t=>{
                            t.stacktrace.frames.forEach((t=>{
                                t.debug_id && (t.abs_path ? e[t.abs_path] = t.debug_id : t.filename && (e[t.filename] = t.debug_id),
                                delete t.debug_id)
                            }
                            ))
                        }
                        ))
                    } catch (t) {}
                    if (0 === Object.keys(e).length)
                        return;
                    t.debug_meta = t.debug_meta || {},
                    t.debug_meta.images = t.debug_meta.images || [];
                    const n = t.debug_meta.images;
                    Object.keys(e).forEach((t=>{
                        n.push({
                            type: "sourcemap",
                            code_file: t,
                            debug_id: e[t]
                        })
                    }
                    ))
                }(t),
                "number" == typeof m && m > 0 ? function(t, e, n) {
                    if (!t)
                        return null;
                    const s = (0,
                    r._)({}, t, t.breadcrumbs && {
                        breadcrumbs: t.breadcrumbs.map((t=>(0,
                        r._)({}, t, t.data && {
                            data: (0,
                            u.normalize)(t.data, e, n)
                        })))
                    }, t.user && {
                        user: (0,
                        u.normalize)(t.user, e, n)
                    }, t.contexts && {
                        contexts: (0,
                        u.normalize)(t.contexts, e, n)
                    }, t.extra && {
                        extra: (0,
                        u.normalize)(t.extra, e, n)
                    });
                    t.contexts && t.contexts.trace && s.contexts && (s.contexts.trace = t.contexts.trace,
                    t.contexts.trace.data && (s.contexts.trace.data = (0,
                    u.normalize)(t.contexts.trace.data, e, n)));
                    t.spans && (s.spans = t.spans.map((t=>(t.data && (t.data = (0,
                    u.normalize)(t.data, e, n)),
                    t))));
                    return s
                }(t, m, _) : t)))
            }
            const f = new WeakMap
        }
        ,
        5537: (t,e,n)=>{
            "use strict";
            n.d(e, {
                SDK_VERSION: ()=>r
            });
            const r = "7.77.0"
        }
        ,
        60288: (t,e,n)=>{
            "use strict";
            n.d(e, {
                applyAggregateErrorsToEvent: ()=>i
            });
            var r = n(434788)
              , s = n(173755)
              , o = n(188032);
            function i(t, e, n=250, r, i, c, u) {
                if (!(c.exception && c.exception.values && u && (0,
                s.isInstanceOf)(u.originalException, Error)))
                    return;
                const l = c.exception.values.length > 0 ? c.exception.values[c.exception.values.length - 1] : void 0;
                var d, p;
                l && (c.exception.values = (d = a(t, e, i, u.originalException, r, c.exception.values, l, 0),
                p = n,
                d.map((t=>(t.value && (t.value = (0,
                o.truncate)(t.value, p)),
                t)))))
            }
            function a(t, e, n, r, o, i, l, d) {
                if (i.length >= n + 1)
                    return i;
                let p = [...i];
                if ((0,
                s.isInstanceOf)(r[o], Error)) {
                    c(l, d);
                    const s = t(e, r[o])
                      , i = p.length;
                    u(s, o, i, d),
                    p = a(t, e, n, r[o], o, [s, ...p], s, i)
                }
                return Array.isArray(r.errors) && r.errors.forEach(((r,i)=>{
                    if ((0,
                    s.isInstanceOf)(r, Error)) {
                        c(l, d);
                        const s = t(e, r)
                          , h = p.length;
                        u(s, `errors[${i}]`, h, d),
                        p = a(t, e, n, r, o, [s, ...p], s, h)
                    }
                }
                )),
                p
            }
            function c(t, e) {
                t.mechanism = t.mechanism || {
                    type: "generic",
                    handled: !0
                },
                t.mechanism = (0,
                r._)({}, t.mechanism, {
                    is_exception_group: !0,
                    exception_id: e
                })
            }
            function u(t, e, n, s) {
                t.mechanism = t.mechanism || {
                    type: "generic",
                    handled: !0
                },
                t.mechanism = (0,
                r._)({}, t.mechanism, {
                    type: "chained",
                    source: e,
                    exception_id: n,
                    parent_id: s
                })
            }
        }
        ,
        505002: (t,e,n)=>{
            "use strict";
            n.d(e, {
                getLocationHref: ()=>c,
                htmlTreeAsString: ()=>i
            });
            var r = n(173755);
            const s = (0,
            n(606258).getGlobalObject)()
              , o = 80;
            function i(t, e={}) {
                if (!t)
                    return "<unknown>";
                try {
                    let n = t;
                    const r = 5
                      , s = [];
                    let i = 0
                      , c = 0;
                    const u = " > "
                      , l = u.length;
                    let d;
                    const p = Array.isArray(e) ? e : e.keyAttrs
                      , h = !Array.isArray(e) && e.maxStringLength || o;
                    for (; n && i++ < r && (d = a(n, p),
                    !("html" === d || i > 1 && c + s.length * l + d.length >= h)); )
                        s.push(d),
                        c += d.length,
                        n = n.parentNode;
                    return s.reverse().join(u)
                } catch (t) {
                    return "<unknown>"
                }
            }
            function a(t, e) {
                const n = t
                  , s = [];
                let o, i, a, c, u;
                if (!n || !n.tagName)
                    return "";
                s.push(n.tagName.toLowerCase());
                const l = e && e.length ? e.filter((t=>n.getAttribute(t))).map((t=>[t, n.getAttribute(t)])) : null;
                if (l && l.length)
                    l.forEach((t=>{
                        s.push(`[${t[0]}="${t[1]}"]`)
                    }
                    ));
                else if (n.id && s.push(`#${n.id}`),
                o = n.className,
                o && (0,
                r.isString)(o))
                    for (i = o.split(/\s+/),
                    u = 0; u < i.length; u++)
                        s.push(`.${i[u]}`);
                const d = ["aria-label", "type", "name", "title", "alt"];
                for (u = 0; u < d.length; u++)
                    a = d[u],
                    c = n.getAttribute(a),
                    c && s.push(`[${a}="${c}"]`);
                return s.join("")
            }
            function c() {
                try {
                    return s.document.location.href
                } catch (t) {
                    return ""
                }
            }
        }
        ,
        282689: (t,e,n)=>{
            "use strict";
            n.d(e, {
                createClientReportEnvelope: ()=>o
            });
            var r = n(99975)
              , s = n(535916);
            function o(t, e, n) {
                const o = [{
                    type: "client_report"
                }, {
                    timestamp: n || (0,
                    s.dateTimestampInSeconds)(),
                    discarded_events: t
                }];
                return (0,
                r.createEnvelope)(e ? {
                    dsn: e
                } : {}, [o])
            }
        }
        ,
        925984: (t,e,n)=>{
            "use strict";
            n.d(e, {
                dsnToString: ()=>o,
                makeDsn: ()=>a
            });
            var r = n(678352);
            const s = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
            function o(t, e=!1) {
                const {host: n, path: r, pass: s, port: o, projectId: i, protocol: a, publicKey: c} = t;
                return `${a}://${c}${e && s ? `:${s}` : ""}@${n}${o ? `:${o}` : ""}/${r ? `${r}/` : r}${i}`
            }
            function i(t) {
                return {
                    protocol: t.protocol,
                    publicKey: t.publicKey || "",
                    pass: t.pass || "",
                    host: t.host,
                    port: t.port || "",
                    path: t.path || "",
                    projectId: t.projectId
                }
            }
            function a(t) {
                const e = "string" == typeof t ? function(t) {
                    const e = s.exec(t);
                    if (!e)
                        return void console.error(`Invalid Sentry Dsn: ${t}`);
                    const [n,r,o="",a,c="",u] = e.slice(1);
                    let l = ""
                      , d = u;
                    const p = d.split("/");
                    if (p.length > 1 && (l = p.slice(0, -1).join("/"),
                    d = p.pop()),
                    d) {
                        const t = d.match(/^\d+/);
                        t && (d = t[0])
                    }
                    return i({
                        host: a,
                        pass: o,
                        path: l,
                        projectId: d,
                        port: c,
                        protocol: n,
                        publicKey: r
                    })
                }(t) : i(t);
                if (e && function(t) {
                    const {port: e, projectId: n, protocol: s} = t;
                    return !(["protocol", "publicKey", "host", "projectId"].find((e=>!t[e] && (r.logger.error(`Invalid Sentry Dsn: ${e} missing`),
                    !0))) || (n.match(/^\d+$/) ? function(t) {
                        return "http" === t || "https" === t
                    }(s) ? e && isNaN(parseInt(e, 10)) && (r.logger.error(`Invalid Sentry Dsn: Invalid port ${e}`),
                    1) : (r.logger.error(`Invalid Sentry Dsn: Invalid protocol ${s}`),
                    1) : (r.logger.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),
                    1)))
                }(e))
                    return e
            }
        }
        ,
        547327: (t,e,n)=>{
            "use strict";
            function r() {
                return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
            }
            function s() {
                return "npm"
            }
            n.d(e, {
                getSDKSource: ()=>s,
                isBrowserBundle: ()=>r
            })
        }
        ,
        99975: (t,e,n)=>{
            "use strict";
            n.d(e, {
                addItemToEnvelope: ()=>c,
                createAttachmentEnvelopeItem: ()=>p,
                createEnvelope: ()=>a,
                createEventEnvelopeHeaders: ()=>m,
                envelopeItemTypeToDataCategory: ()=>f,
                forEachEnvelopeItem: ()=>u,
                getSdkMetadataForEnvelopeHeader: ()=>g,
                serializeEnvelope: ()=>d
            });
            var r = n(434788)
              , s = n(925984)
              , o = n(70869)
              , i = n(486246);
            function a(t, e=[]) {
                return [t, e]
            }
            function c(t, e) {
                const [n,r] = t;
                return [n, [...r, e]]
            }
            function u(t, e) {
                const n = t[1];
                for (const t of n) {
                    if (e(t, t[0].type))
                        return !0
                }
                return !1
            }
            function l(t, e) {
                return (e || new TextEncoder).encode(t)
            }
            function d(t, e) {
                const [n,r] = t;
                let s = JSON.stringify(n);
                function i(t) {
                    "string" == typeof s ? s = "string" == typeof t ? s + t : [l(s, e), t] : s.push("string" == typeof t ? l(t, e) : t)
                }
                for (const t of r) {
                    const [e,n] = t;
                    if (i(`\n ${JSON.stringify(e)}\n`),
                    "string" == typeof n || n instanceof Uint8Array)
                        i(n);
                    else {
                        let t;
                        try {
                            t = JSON.stringify(n)
                        } catch (e) {
                            t = JSON.stringify((0,
                            o.normalize)(n))
                        }
                        i(t)
                    }
                }
                return "string" == typeof s ? s : function(t) {
                    const e = t.reduce(((t,e)=>t + e.length), 0)
                      , n = new Uint8Array(e);
                    let r = 0;
                    for (const e of t)
                        n.set(e, r),
                        r += e.length;
                    return n
                }(s)
            }
            function p(t, e) {
                const n = "string" == typeof t.data ? l(t.data, e) : t.data;
                return [(0,
                i.dropUndefinedKeys)({
                    type: "attachment",
                    length: n.length,
                    filename: t.filename,
                    content_type: t.contentType,
                    attachment_type: t.attachmentType
                }), n]
            }
            const h = {
                session: "session",
                sessions: "session",
                attachment: "attachment",
                transaction: "transaction",
                event: "error",
                client_report: "internal",
                user_report: "default",
                profile: "profile",
                replay_event: "replay",
                replay_recording: "replay",
                check_in: "monitor",
                statsd: "unknown"
            };
            function f(t) {
                return h[t]
            }
            function g(t) {
                if (!t || !t.sdk)
                    return;
                const {name: e, version: n} = t.sdk;
                return {
                    name: e,
                    version: n
                }
            }
            function m(t, e, n, o) {
                const a = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
                return (0,
                r._)({
                    event_id: t.event_id,
                    sent_at: (new Date).toISOString()
                }, e && {
                    sdk: e
                }, !!n && o && {
                    dsn: (0,
                    s.dsnToString)(o)
                }, a && {
                    trace: (0,
                    i.dropUndefinedKeys)((0,
                    r._)({}, a))
                })
            }
        }
        ,
        151537: (t,e,n)=>{
            "use strict";
            n.d(e, {
                SentryError: ()=>r
            });
            class r extends Error {
                constructor(t, e="warn") {
                    super(t),
                    this.message = t,
                    this.name = new.target.prototype.constructor.name,
                    Object.setPrototypeOf(this, new.target.prototype),
                    this.logLevel = e
                }
            }
        }
        ,
        427933: (t,e,n)=>{
            "use strict";
            n.d(e, {
                SENTRY_XHR_DATA_KEY: ()=>h,
                addInstrumentationHandler: ()=>_
            });
            var r = n(434788)
              , s = n(173755)
              , o = n(678352)
              , i = n(458921)
              , a = n(486246)
              , c = n(663406)
              , u = n(316041)
              , l = n(606258)
              , d = n(575869);
            const p = (0,
            l.getGlobalObject)()
              , h = "__sentry_xhr_v2__"
              , f = {}
              , g = {};
            function m(t) {
                if (!g[t])
                    switch (g[t] = !0,
                    t) {
                    case "console":
                        !function() {
                            if (!("console"in l.GLOBAL_OBJ))
                                return;
                            o.CONSOLE_LEVELS.forEach((function(t) {
                                t in l.GLOBAL_OBJ.console && (0,
                                a.fill)(l.GLOBAL_OBJ.console, t, (function(e) {
                                    return o.originalConsoleMethods[t] = e,
                                    function(...e) {
                                        v("console", {
                                            args: e,
                                            level: t
                                        });
                                        const n = o.originalConsoleMethods[t];
                                        n && n.apply(l.GLOBAL_OBJ.console, e)
                                    }
                                }
                                ))
                            }
                            ))
                        }();
                        break;
                    case "dom":
                        !function() {
                            if (!p.document)
                                return;
                            const t = v.bind(null, "dom")
                              , e = x(t, !0);
                            p.document.addEventListener("click", e, !1),
                            p.document.addEventListener("keypress", e, !1),
                            ["EventTarget", "Node"].forEach((e=>{
                                const n = p[e] && p[e].prototype;
                                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0,
                                a.fill)(n, "addEventListener", (function(e) {
                                    return function(n, r, s) {
                                        if ("click" === n || "keypress" == n)
                                            try {
                                                const r = this
                                                  , o = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {}
                                                  , i = o[n] = o[n] || {
                                                    refCount: 0
                                                };
                                                if (!i.handler) {
                                                    const r = x(t);
                                                    i.handler = r,
                                                    e.call(this, n, r, s)
                                                }
                                                i.refCount++
                                            } catch (t) {}
                                        return e.call(this, n, r, s)
                                    }
                                }
                                )),
                                (0,
                                a.fill)(n, "removeEventListener", (function(t) {
                                    return function(e, n, r) {
                                        if ("click" === e || "keypress" == e)
                                            try {
                                                const n = this
                                                  , s = n.__sentry_instrumentation_handlers__ || {}
                                                  , o = s[e];
                                                o && (o.refCount--,
                                                o.refCount <= 0 && (t.call(this, e, o.handler, r),
                                                o.handler = void 0,
                                                delete s[e]),
                                                0 === Object.keys(s).length && delete n.__sentry_instrumentation_handlers__)
                                            } catch (t) {}
                                        return t.call(this, e, n, r)
                                    }
                                }
                                )))
                            }
                            ))
                        }();
                        break;
                    case "xhr":
                        !function() {
                            if (!p.XMLHttpRequest)
                                return;
                            const t = XMLHttpRequest.prototype;
                            (0,
                            a.fill)(t, "open", (function(t) {
                                return function(...e) {
                                    const n = Date.now()
                                      , r = e[1]
                                      , o = this[h] = {
                                        method: (0,
                                        s.isString)(e[0]) ? e[0].toUpperCase() : e[0],
                                        url: e[1],
                                        request_headers: {}
                                    };
                                    (0,
                                    s.isString)(r) && "POST" === o.method && r.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                                    const i = ()=>{
                                        const t = this[h];
                                        if (t && 4 === this.readyState) {
                                            try {
                                                t.status_code = this.status
                                            } catch (t) {}
                                            v("xhr", {
                                                args: e,
                                                endTimestamp: Date.now(),
                                                startTimestamp: n,
                                                xhr: this
                                            })
                                        }
                                    }
                                    ;
                                    return "onreadystatechange"in this && "function" == typeof this.onreadystatechange ? (0,
                                    a.fill)(this, "onreadystatechange", (function(t) {
                                        return function(...e) {
                                            return i(),
                                            t.apply(this, e)
                                        }
                                    }
                                    )) : this.addEventListener("readystatechange", i),
                                    (0,
                                    a.fill)(this, "setRequestHeader", (function(t) {
                                        return function(...e) {
                                            const [n,r] = e
                                              , s = this[h];
                                            return s && (s.request_headers[n.toLowerCase()] = r),
                                            t.apply(this, e)
                                        }
                                    }
                                    )),
                                    t.apply(this, e)
                                }
                            }
                            )),
                            (0,
                            a.fill)(t, "send", (function(t) {
                                return function(...e) {
                                    const n = this[h];
                                    return n && void 0 !== e[0] && (n.body = e[0]),
                                    v("xhr", {
                                        args: e,
                                        startTimestamp: Date.now(),
                                        xhr: this
                                    }),
                                    t.apply(this, e)
                                }
                            }
                            ))
                        }();
                        break;
                    case "fetch":
                        !function() {
                            if (!(0,
                            u.supportsNativeFetch)())
                                return;
                            (0,
                            a.fill)(l.GLOBAL_OBJ, "fetch", (function(t) {
                                return function(...e) {
                                    const {method: n, url: s} = function(t) {
                                        if (0 === t.length)
                                            return {
                                                method: "GET",
                                                url: ""
                                            };
                                        if (2 === t.length) {
                                            const [e,n] = t;
                                            return {
                                                url: S(e),
                                                method: y(n, "method") ? String(n.method).toUpperCase() : "GET"
                                            }
                                        }
                                        const e = t[0];
                                        return {
                                            url: S(e),
                                            method: y(e, "method") ? String(e.method).toUpperCase() : "GET"
                                        }
                                    }(e)
                                      , o = {
                                        args: e,
                                        fetchData: {
                                            method: n,
                                            url: s
                                        },
                                        startTimestamp: Date.now()
                                    };
                                    return v("fetch", (0,
                                    r._)({}, o)),
                                    t.apply(l.GLOBAL_OBJ, e).then((t=>(v("fetch", (0,
                                    r._)({}, o, {
                                        endTimestamp: Date.now(),
                                        response: t
                                    })),
                                    t)), (t=>{
                                        throw v("fetch", (0,
                                        r._)({}, o, {
                                            endTimestamp: Date.now(),
                                            error: t
                                        })),
                                        t
                                    }
                                    ))
                                }
                            }
                            ))
                        }();
                        break;
                    case "history":
                        !function() {
                            if (!(0,
                            d.supportsHistory)())
                                return;
                            const t = p.onpopstate;
                            function e(t) {
                                return function(...e) {
                                    const n = e.length > 2 ? e[2] : void 0;
                                    if (n) {
                                        const t = E
                                          , e = String(n);
                                        E = e,
                                        v("history", {
                                            from: t,
                                            to: e
                                        })
                                    }
                                    return t.apply(this, e)
                                }
                            }
                            p.onpopstate = function(...e) {
                                const n = p.location.href
                                  , r = E;
                                if (E = n,
                                v("history", {
                                    from: r,
                                    to: n
                                }),
                                t)
                                    try {
                                        return t.apply(this, e)
                                    } catch (t) {}
                            }
                            ,
                            (0,
                            a.fill)(p.history, "pushState", e),
                            (0,
                            a.fill)(p.history, "replaceState", e)
                        }();
                        break;
                    case "error":
                        T = p.onerror,
                        p.onerror = function(t, e, n, r, s) {
                            return v("error", {
                                column: r,
                                error: s,
                                line: n,
                                msg: t,
                                url: e
                            }),
                            !(!T || T.__SENTRY_LOADER__) && T.apply(this, arguments)
                        }
                        ,
                        p.onerror.__SENTRY_INSTRUMENTED__ = !0;
                        break;
                    case "unhandledrejection":
                        I = p.onunhandledrejection,
                        p.onunhandledrejection = function(t) {
                            return v("unhandledrejection", t),
                            !(I && !I.__SENTRY_LOADER__) || I.apply(this, arguments)
                        }
                        ,
                        p.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
                        break;
                    default:
                        return void o.logger.warn("unknown instrumentation type:", t)
                    }
            }
            function _(t, e) {
                f[t] = f[t] || [],
                f[t].push(e),
                m(t)
            }
            function v(t, e) {
                if (t && f[t])
                    for (const n of f[t] || [])
                        try {
                            n(e)
                        } catch (e) {
                            o.logger.error(`Error while triggering instrumentation handler.\nType: ${t}\nName: ${(0,
                            c.getFunctionName)(n)}\nError:`, e)
                        }
            }
            function y(t, e) {
                return !!t && "object" == typeof t && !!t[e]
            }
            function S(t) {
                return "string" == typeof t ? t : t ? y(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
            }
            let E;
            const b = 1e3;
            let w, k, O;
            function x(t, e=!1) {
                return n=>{
                    if (!n || n._sentryCaptured)
                        return;
                    const r = function(t) {
                        try {
                            return t.target
                        } catch (t) {
                            return null
                        }
                    }(n);
                    if (function(t, e) {
                        return "keypress" === t && (!e || !e.tagName || "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName && !e.isContentEditable)
                    }(n.type, r))
                        return;
                    (0,
                    a.addNonEnumerableProperty)(n, "_sentryCaptured", !0),
                    r && !r._sentryId && (0,
                    a.addNonEnumerableProperty)(r, "_sentryId", (0,
                    i.uuid4)());
                    const s = "keypress" === n.type ? "input" : n.type;
                    (function(t) {
                        if (t.type !== k)
                            return !1;
                        try {
                            if (!t.target || t.target._sentryId !== O)
                                return !1
                        } catch (t) {}
                        return !0
                    }
                    )(n) || (t({
                        event: n,
                        name: s,
                        global: e
                    }),
                    k = n.type,
                    O = r ? r._sentryId : void 0),
                    clearTimeout(w),
                    w = p.setTimeout((()=>{
                        O = void 0,
                        k = void 0
                    }
                    ), b)
                }
            }
            let T = null;
            let I = null
        }
        ,
        173755: (t,e,n)=>{
            "use strict";
            n.d(e, {
                isDOMError: ()=>a,
                isDOMException: ()=>c,
                isElement: ()=>h,
                isError: ()=>s,
                isErrorEvent: ()=>i,
                isEvent: ()=>p,
                isInstanceOf: ()=>v,
                isNaN: ()=>_,
                isPlainObject: ()=>d,
                isPrimitive: ()=>l,
                isRegExp: ()=>f,
                isString: ()=>u,
                isSyntheticEvent: ()=>m,
                isThenable: ()=>g,
                isVueViewModel: ()=>y
            });
            const r = Object.prototype.toString;
            function s(t) {
                switch (r.call(t)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                    return !0;
                default:
                    return v(t, Error)
                }
            }
            function o(t, e) {
                return r.call(t) === `[object ${e}]`
            }
            function i(t) {
                return o(t, "ErrorEvent")
            }
            function a(t) {
                return o(t, "DOMError")
            }
            function c(t) {
                return o(t, "DOMException")
            }
            function u(t) {
                return o(t, "String")
            }
            function l(t) {
                return null === t || "object" != typeof t && "function" != typeof t
            }
            function d(t) {
                return o(t, "Object")
            }
            function p(t) {
                return "undefined" != typeof Event && v(t, Event)
            }
            function h(t) {
                return "undefined" != typeof Element && v(t, Element)
            }
            function f(t) {
                return o(t, "RegExp")
            }
            function g(t) {
                return Boolean(t && t.then && "function" == typeof t.then)
            }
            function m(t) {
                return d(t) && "nativeEvent"in t && "preventDefault"in t && "stopPropagation"in t
            }
            function _(t) {
                return "number" == typeof t && t != t
            }
            function v(t, e) {
                try {
                    return t instanceof e
                } catch (t) {
                    return !1
                }
            }
            function y(t) {
                return !("object" != typeof t || null === t || !t.__isVue && !t._isVue)
            }
        }
        ,
        678352: (t,e,n)=>{
            "use strict";
            n.d(e, {
                CONSOLE_LEVELS: ()=>s,
                consoleSandbox: ()=>i,
                logger: ()=>a,
                originalConsoleMethods: ()=>o
            });
            var r = n(606258);
            const s = ["debug", "info", "warn", "error", "log", "assert", "trace"]
              , o = {};
            function i(t) {
                if (!("console"in r.GLOBAL_OBJ))
                    return t();
                const e = r.GLOBAL_OBJ.console
                  , n = {}
                  , s = Object.keys(o);
                s.forEach((t=>{
                    const r = o[t];
                    n[t] = e[t],
                    e[t] = r
                }
                ));
                try {
                    return t()
                } finally {
                    s.forEach((t=>{
                        e[t] = n[t]
                    }
                    ))
                }
            }
            const a = function() {
                let t = !1;
                const e = {
                    enable: ()=>{
                        t = !0
                    }
                    ,
                    disable: ()=>{
                        t = !1
                    }
                    ,
                    isEnabled: ()=>t
                };
                return s.forEach((n=>{
                    e[n] = (...e)=>{
                        t && i((()=>{
                            r.GLOBAL_OBJ.console[n](`Sentry Logger [${n}]:`, ...e)
                        }
                        ))
                    }
                }
                )),
                e
            }()
        }
        ,
        266101: (t,e,n)=>{
            "use strict";
            function r() {
                const t = "function" == typeof WeakSet
                  , e = t ? new WeakSet : [];
                return [function(n) {
                    if (t)
                        return !!e.has(n) || (e.add(n),
                        !1);
                    for (let t = 0; t < e.length; t++) {
                        if (e[t] === n)
                            return !0
                    }
                    return e.push(n),
                    !1
                }
                , function(n) {
                    if (t)
                        e.delete(n);
                    else
                        for (let t = 0; t < e.length; t++)
                            if (e[t] === n) {
                                e.splice(t, 1);
                                break
                            }
                }
                ]
            }
            n.d(e, {
                memoBuilder: ()=>r
            })
        }
        ,
        458921: (t,e,n)=>{
            "use strict";
            n.d(e, {
                addExceptionMechanism: ()=>l,
                addExceptionTypeValue: ()=>u,
                arrayify: ()=>p,
                checkOrSetAlreadyCaught: ()=>d,
                getEventDescription: ()=>c,
                uuid4: ()=>i
            });
            var r = n(434788)
              , s = n(486246)
              , o = (n(188032),
            n(606258));
            function i() {
                const t = o.GLOBAL_OBJ
                  , e = t.crypto || t.msCrypto;
                let n = ()=>16 * Math.random();
                try {
                    if (e && e.randomUUID)
                        return e.randomUUID().replace(/-/g, "");
                    e && e.getRandomValues && (n = ()=>e.getRandomValues(new Uint8Array(1))[0])
                } catch (t) {}
                return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t=>(t ^ (15 & n()) >> t / 4).toString(16)))
            }
            function a(t) {
                return t.exception && t.exception.values ? t.exception.values[0] : void 0
            }
            function c(t) {
                const {message: e, event_id: n} = t;
                if (e)
                    return e;
                const r = a(t);
                return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
            }
            function u(t, e, n) {
                const r = t.exception = t.exception || {}
                  , s = r.values = r.values || []
                  , o = s[0] = s[0] || {};
                o.value || (o.value = e || ""),
                o.type || (o.type = n || "Error")
            }
            function l(t, e) {
                const n = a(t);
                if (!n)
                    return;
                const s = n.mechanism;
                if (n.mechanism = (0,
                r._)({}, {
                    type: "generic",
                    handled: !0
                }, s, e),
                e && "data"in e) {
                    const t = (0,
                    r._)({}, s && s.data, e.data);
                    n.mechanism.data = t
                }
            }
            function d(t) {
                if (t && t.__sentry_captured__)
                    return !0;
                try {
                    (0,
                    s.addNonEnumerableProperty)(t, "__sentry_captured__", !0)
                } catch (t) {}
                return !1
            }
            function p(t) {
                return Array.isArray(t) ? t : [t]
            }
        }
        ,
        40251: (t,e,n)=>{
            "use strict";
            function r(t, e=!1) {
                return !(e || t && !t.startsWith("/") && !t.includes(":\\") && !t.startsWith(".") && !t.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)) && void 0 !== t && !t.includes("node_modules/")
            }
            function s(t) {
                const e = /^\s*[-]{4,}$/
                  , n = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
                return s=>{
                    const o = s.match(n);
                    if (o) {
                        let e, n, s, i, a;
                        if (o[1]) {
                            s = o[1];
                            let t = s.lastIndexOf(".");
                            if ("." === s[t - 1] && t--,
                            t > 0) {
                                e = s.slice(0, t),
                                n = s.slice(t + 1);
                                const r = e.indexOf(".Module");
                                r > 0 && (s = s.slice(r + 1),
                                e = e.slice(0, r))
                            }
                            i = void 0
                        }
                        n && (i = e,
                        a = n),
                        "<anonymous>" === n && (a = void 0,
                        s = void 0),
                        void 0 === s && (a = a || "<anonymous>",
                        s = i ? `${i}.${a}` : a);
                        let c = o[2] && o[2].startsWith("file://") ? o[2].slice(7) : o[2];
                        const u = "native" === o[5];
                        return c || !o[5] || u || (c = o[5]),
                        {
                            filename: c,
                            module: t ? t(c) : void 0,
                            function: s,
                            lineno: parseInt(o[3], 10) || void 0,
                            colno: parseInt(o[4], 10) || void 0,
                            in_app: r(c, u)
                        }
                    }
                    if (s.match(e))
                        return {
                            filename: s
                        }
                }
            }
            n.d(e, {
                node: ()=>s
            })
        }
        ,
        413410: (t,e,n)=>{
            "use strict";
            n.d(e, {
                dynamicRequire: ()=>o,
                isNodeEnv: ()=>s
            });
            var r = n(547327);
            function s() {
                return !(0,
                r.isBrowserBundle)() && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
            }
            function o(t, e) {
                return t.require(e)
            }
            t = n.hmd(t)
        }
        ,
        70869: (t,e,n)=>{
            "use strict";
            n.d(e, {
                normalize: ()=>a,
                normalizeToSize: ()=>c
            });
            var r = n(173755)
              , s = n(266101)
              , o = n(486246)
              , i = n(663406);
            function a(t, e=100, n=1 / 0) {
                try {
                    return u("", t, e, n)
                } catch (t) {
                    return {
                        ERROR: `**non-serializable** (${t})`
                    }
                }
            }
            function c(t, e=3, n=102400) {
                const r = a(t, e);
                return s = r,
                function(t) {
                    return ~-encodeURI(t).split(/%..|./).length
                }(JSON.stringify(s)) > n ? c(t, e - 1, n) : r;
                var s
            }
            function u(t, e, a=1 / 0, c=1 / 0, l=(0,
            s.memoBuilder)()) {
                const [d,p] = l;
                if (null == e || ["number", "boolean", "string"].includes(typeof e) && !(0,
                r.isNaN)(e))
                    return e;
                const h = function(t, e) {
                    try {
                        if ("domain" === t && e && "object" == typeof e && e._events)
                            return "[Domain]";
                        if ("domainEmitter" === t)
                            return "[DomainEmitter]";
                        if (void 0 !== n.g && e === n.g)
                            return "[Global]";
                        if ("undefined" != typeof window && e === window)
                            return "[Window]";
                        if ("undefined" != typeof document && e === document)
                            return "[Document]";
                        if ((0,
                        r.isVueViewModel)(e))
                            return "[VueViewModel]";
                        if ((0,
                        r.isSyntheticEvent)(e))
                            return "[SyntheticEvent]";
                        if ("number" == typeof e && e != e)
                            return "[NaN]";
                        if ("function" == typeof e)
                            return `[Function: ${(0,
                            i.getFunctionName)(e)}]`;
                        if ("symbol" == typeof e)
                            return `[${String(e)}]`;
                        if ("bigint" == typeof e)
                            return `[BigInt: ${String(e)}]`;
                        const s = function(t) {
                            const e = Object.getPrototypeOf(t);
                            return e ? e.constructor.name : "null prototype"
                        }(e);
                        return /^HTML(\w*)Element$/.test(s) ? `[HTMLElement: ${s}]` : `[object ${s}]`
                    } catch (t) {
                        return `**non-serializable** (${t})`
                    }
                }(t, e);
                if (!h.startsWith("[object "))
                    return h;
                if (e.__sentry_skip_normalization__)
                    return e;
                const f = "number" == typeof e.__sentry_override_normalization_depth__ ? e.__sentry_override_normalization_depth__ : a;
                if (0 === f)
                    return h.replace("object ", "");
                if (d(e))
                    return "[Circular ~]";
                const g = e;
                if (g && "function" == typeof g.toJSON)
                    try {
                        return u("", g.toJSON(), f - 1, c, l)
                    } catch (t) {}
                const m = Array.isArray(e) ? [] : {};
                let _ = 0;
                const v = (0,
                o.convertToPlainObject)(e);
                for (const t in v) {
                    if (!Object.prototype.hasOwnProperty.call(v, t))
                        continue;
                    if (_ >= c) {
                        m[t] = "[MaxProperties ~]";
                        break
                    }
                    const e = v[t];
                    m[t] = u(t, e, f - 1, c, l),
                    _++
                }
                return p(e),
                m
            }
        }
        ,
        486246: (t,e,n)=>{
            "use strict";
            n.d(e, {
                addNonEnumerableProperty: ()=>u,
                convertToPlainObject: ()=>h,
                dropUndefinedKeys: ()=>_,
                extractExceptionKeysForMessage: ()=>m,
                fill: ()=>c,
                getOriginalFunction: ()=>d,
                markFunctionWrapped: ()=>l,
                urlEncode: ()=>p
            });
            var r = n(434788)
              , s = n(505002)
              , o = n(173755)
              , i = n(678352)
              , a = n(188032);
            function c(t, e, n) {
                if (!(e in t))
                    return;
                const r = t[e]
                  , s = n(r);
                "function" == typeof s && l(s, r),
                t[e] = s
            }
            function u(t, e, n) {
                try {
                    Object.defineProperty(t, e, {
                        value: n,
                        writable: !0,
                        configurable: !0
                    })
                } catch (n) {
                    i.logger.log(`Failed to add non-enumerable property "${e}" to object`, t)
                }
            }
            function l(t, e) {
                try {
                    const n = e.prototype || {};
                    t.prototype = e.prototype = n,
                    u(t, "__sentry_original__", e)
                } catch (t) {}
            }
            function d(t) {
                return t.__sentry_original__
            }
            function p(t) {
                return Object.keys(t).map((e=>`${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)).join("&")
            }
            function h(t) {
                if ((0,
                o.isError)(t))
                    return (0,
                    r._)({
                        message: t.message,
                        name: t.name,
                        stack: t.stack
                    }, g(t));
                if ((0,
                o.isEvent)(t)) {
                    const e = (0,
                    r._)({
                        type: t.type,
                        target: f(t.target),
                        currentTarget: f(t.currentTarget)
                    }, g(t));
                    return "undefined" != typeof CustomEvent && (0,
                    o.isInstanceOf)(t, CustomEvent) && (e.detail = t.detail),
                    e
                }
                return t
            }
            function f(t) {
                try {
                    return (0,
                    o.isElement)(t) ? (0,
                    s.htmlTreeAsString)(t) : Object.prototype.toString.call(t)
                } catch (t) {
                    return "<unknown>"
                }
            }
            function g(t) {
                if ("object" == typeof t && null !== t) {
                    const e = {};
                    for (const n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }
                return {}
            }
            function m(t, e=40) {
                const n = Object.keys(h(t));
                if (n.sort(),
                !n.length)
                    return "[object has no keys]";
                if (n[0].length >= e)
                    return (0,
                    a.truncate)(n[0], e);
                for (let t = n.length; t > 0; t--) {
                    const r = n.slice(0, t).join(", ");
                    if (!(r.length > e))
                        return t === n.length ? r : (0,
                        a.truncate)(r, e)
                }
                return ""
            }
            function _(t) {
                return v(t, new Map)
            }
            function v(t, e) {
                if ((0,
                o.isPlainObject)(t)) {
                    const n = e.get(t);
                    if (void 0 !== n)
                        return n;
                    const r = {};
                    e.set(t, r);
                    for (const n of Object.keys(t))
                        void 0 !== t[n] && (r[n] = v(t[n], e));
                    return r
                }
                if (Array.isArray(t)) {
                    const n = e.get(t);
                    if (void 0 !== n)
                        return n;
                    const r = [];
                    return e.set(t, r),
                    t.forEach((t=>{
                        r.push(v(t, e))
                    }
                    )),
                    r
                }
                return t
            }
        }
        ,
        768250: (t,e,n)=>{
            "use strict";
            n.d(e, {
                makePromiseBuffer: ()=>o
            });
            var r = n(151537)
              , s = n(779674);
            function o(t) {
                const e = [];
                function n(t) {
                    return e.splice(e.indexOf(t), 1)[0]
                }
                return {
                    $: e,
                    add: function(o) {
                        if (!(void 0 === t || e.length < t))
                            return (0,
                            s.rejectedSyncPromise)(new r.SentryError("Not adding Promise because buffer limit was reached."));
                        const i = o();
                        return -1 === e.indexOf(i) && e.push(i),
                        i.then((()=>n(i))).then(null, (()=>n(i).then(null, (()=>{}
                        )))),
                        i
                    },
                    drain: function(t) {
                        return new s.SyncPromise(((n,r)=>{
                            let o = e.length;
                            if (!o)
                                return n(!0);
                            const i = setTimeout((()=>{
                                t && t > 0 && n(!1)
                            }
                            ), t);
                            e.forEach((t=>{
                                (0,
                                s.resolvedSyncPromise)(t).then((()=>{
                                    --o || (clearTimeout(i),
                                    n(!0))
                                }
                                ), r)
                            }
                            ))
                        }
                        ))
                    }
                }
            }
        }
        ,
        81429: (t,e,n)=>{
            "use strict";
            n.d(e, {
                isRateLimited: ()=>o,
                updateRateLimits: ()=>i
            });
            var r = n(434788);
            const s = 6e4;
            function o(t, e, n=Date.now()) {
                return function(t, e) {
                    return t[e] || t.all || 0
                }(t, e) > n
            }
            function i(t, {statusCode: e, headers: n}, o=Date.now()) {
                const i = (0,
                r._)({}, t)
                  , a = n && n["x-sentry-rate-limits"]
                  , c = n && n["retry-after"];
                if (a)
                    for (const t of a.trim().split(",")) {
                        const [e,n] = t.split(":", 2)
                          , r = parseInt(e, 10)
                          , s = 1e3 * (isNaN(r) ? 60 : r);
                        if (n)
                            for (const t of n.split(";"))
                                i[t] = o + s;
                        else
                            i.all = o + s
                    }
                else
                    c ? i.all = o + function(t, e=Date.now()) {
                        const n = parseInt(`${t}`, 10);
                        if (!isNaN(n))
                            return 1e3 * n;
                        const r = Date.parse(`${t}`);
                        return isNaN(r) ? s : r - e
                    }(c, o) : 429 === e && (i.all = o + 6e4);
                return i
            }
        }
        ,
        198260: (t,e,n)=>{
            "use strict";
            n.d(e, {
                severityLevelFromString: ()=>s
            });
            const r = ["fatal", "error", "warning", "log", "info", "debug"];
            function s(t) {
                return "warn" === t ? "warning" : r.includes(t) ? t : "log"
            }
        }
        ,
        663406: (t,e,n)=>{
            "use strict";
            n.d(e, {
                createStackParser: ()=>a,
                getFunctionName: ()=>l,
                stackParserFromStackParserOptions: ()=>c
            });
            var r = n(434788);
            n(40251);
            const s = 50
              , o = /\(error: (.*)\)/
              , i = /captureMessage|captureException/;
            function a(...t) {
                const e = t.sort(((t,e)=>t[0] - e[0])).map((t=>t[1]));
                return (t,n=0)=>{
                    const a = []
                      , c = t.split("\n");
                    for (let t = n; t < c.length; t++) {
                        const n = c[t];
                        if (n.length > 1024)
                            continue;
                        const r = o.test(n) ? n.replace(o, "$1") : n;
                        if (!r.match(/\S*Error: /)) {
                            for (const t of e) {
                                const e = t(r);
                                if (e) {
                                    a.push(e);
                                    break
                                }
                            }
                            if (a.length >= s)
                                break
                        }
                    }
                    return function(t) {
                        if (!t.length)
                            return [];
                        const e = Array.from(t);
                        /sentryWrapped/.test(e[e.length - 1].function || "") && e.pop();
                        e.reverse(),
                        i.test(e[e.length - 1].function || "") && (e.pop(),
                        i.test(e[e.length - 1].function || "") && e.pop());
                        return e.slice(0, s).map((t=>(0,
                        r._)({}, t, {
                            filename: t.filename || e[e.length - 1].filename,
                            function: t.function || "?"
                        })))
                    }(a)
                }
            }
            function c(t) {
                return Array.isArray(t) ? a(...t) : t
            }
            const u = "<anonymous>";
            function l(t) {
                try {
                    return t && "function" == typeof t && t.name || u
                } catch (t) {
                    return u
                }
            }
        }
        ,
        188032: (t,e,n)=>{
            "use strict";
            n.d(e, {
                safeJoin: ()=>i,
                snipLine: ()=>o,
                stringMatchesSomePattern: ()=>a,
                truncate: ()=>s
            });
            var r = n(173755);
            function s(t, e=0) {
                return "string" != typeof t || 0 === e || t.length <= e ? t : `${t.slice(0, e)}...`
            }
            function o(t, e) {
                let n = t;
                const r = n.length;
                if (r <= 150)
                    return n;
                e > r && (e = r);
                let s = Math.max(e - 60, 0);
                s < 5 && (s = 0);
                let o = Math.min(s + 140, r);
                return o > r - 5 && (o = r),
                o === r && (s = Math.max(o - 140, 0)),
                n = n.slice(s, o),
                s > 0 && (n = `'{snip} ${n}`),
                o < r && (n += " {snip}"),
                n
            }
            function i(t, e) {
                if (!Array.isArray(t))
                    return "";
                const n = [];
                for (let e = 0; e < t.length; e++) {
                    const s = t[e];
                    try {
                        (0,
                        r.isVueViewModel)(s) ? n.push("[VueViewModel]") : n.push(String(s))
                    } catch (t) {
                        n.push("[value cannot be serialized]")
                    }
                }
                return n.join(e)
            }
            function a(t, e=[], n=!1) {
                return e.some((e=>function(t, e, n=!1) {
                    return !!(0,
                    r.isString)(t) && ((0,
                    r.isRegExp)(e) ? e.test(t) : !!(0,
                    r.isString)(e) && (n ? t === e : t.includes(e)))
                }(t, e, n)))
            }
        }
        ,
        316041: (t,e,n)=>{
            "use strict";
            n.d(e, {
                isNativeFetch: ()=>i,
                supportsFetch: ()=>o,
                supportsNativeFetch: ()=>a
            });
            var r = n(678352);
            const s = (0,
            n(606258).getGlobalObject)();
            function o() {
                if (!("fetch"in s))
                    return !1;
                try {
                    return new Headers,
                    new Request("http://www.example.com"),
                    new Response,
                    !0
                } catch (t) {
                    return !1
                }
            }
            function i(t) {
                return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
            }
            function a() {
                if (!o())
                    return !1;
                if (i(s.fetch))
                    return !0;
                let t = !1;
                const e = s.document;
                if (e && "function" == typeof e.createElement)
                    try {
                        const n = e.createElement("iframe");
                        n.hidden = !0,
                        e.head.appendChild(n),
                        n.contentWindow && n.contentWindow.fetch && (t = i(n.contentWindow.fetch)),
                        e.head.removeChild(n)
                    } catch (t) {
                        r.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                    }
                return t
            }
        }
        ,
        779674: (t,e,n)=>{
            "use strict";
            n.d(e, {
                SyncPromise: ()=>a,
                rejectedSyncPromise: ()=>i,
                resolvedSyncPromise: ()=>o
            });
            var r, s = n(173755);
            function o(t) {
                return new a((e=>{
                    e(t)
                }
                ))
            }
            function i(t) {
                return new a(((e,n)=>{
                    n(t)
                }
                ))
            }
            !function(t) {
                t[t.PENDING = 0] = "PENDING";
                t[t.RESOLVED = 1] = "RESOLVED";
                t[t.REJECTED = 2] = "REJECTED"
            }(r || (r = {}));
            class a {
                then(t, e) {
                    return new a(((n,r)=>{
                        this._handlers.push([!1, e=>{
                            if (t)
                                try {
                                    n(t(e))
                                } catch (t) {
                                    r(t)
                                }
                            else
                                n(e)
                        }
                        , t=>{
                            if (e)
                                try {
                                    n(e(t))
                                } catch (t) {
                                    r(t)
                                }
                            else
                                r(t)
                        }
                        ]),
                        this._executeHandlers()
                    }
                    ))
                }
                catch(t) {
                    return this.then((t=>t), t)
                }
                finally(t) {
                    return new a(((e,n)=>{
                        let r, s;
                        return this.then((e=>{
                            s = !1,
                            r = e,
                            t && t()
                        }
                        ), (e=>{
                            s = !0,
                            r = e,
                            t && t()
                        }
                        )).then((()=>{
                            s ? n(r) : e(r)
                        }
                        ))
                    }
                    ))
                }
                __init() {
                    this._resolve = t=>{
                        this._setResult(r.RESOLVED, t)
                    }
                }
                __init2() {
                    this._reject = t=>{
                        this._setResult(r.REJECTED, t)
                    }
                }
                __init3() {
                    this._setResult = (t,e)=>{
                        this._state === r.PENDING && ((0,
                        s.isThenable)(e) ? e.then(this._resolve, this._reject) : (this._state = t,
                        this._value = e,
                        this._executeHandlers()))
                    }
                }
                __init4() {
                    this._executeHandlers = ()=>{
                        if (this._state === r.PENDING)
                            return;
                        const t = this._handlers.slice();
                        this._handlers = [],
                        t.forEach((t=>{
                            t[0] || (this._state === r.RESOLVED && t[1](this._value),
                            this._state === r.REJECTED && t[2](this._value),
                            t[0] = !0)
                        }
                        ))
                    }
                }
                constructor(t) {
                    a.prototype.__init.call(this),
                    a.prototype.__init2.call(this),
                    a.prototype.__init3.call(this),
                    a.prototype.__init4.call(this),
                    this._state = r.PENDING,
                    this._handlers = [];
                    try {
                        t(this._resolve, this._reject)
                    } catch (t) {
                        this._reject(t)
                    }
                }
            }
        }
        ,
        535916: (t,e,n)=>{
            "use strict";
            n.d(e, {
                dateTimestampInSeconds: ()=>u,
                timestampInSeconds: ()=>l
            });
            var r = n(413410)
              , s = n(606258);
            t = n.hmd(t);
            const o = (0,
            s.getGlobalObject)()
              , i = {
                nowSeconds: ()=>Date.now() / 1e3
            };
            const a = (0,
            r.isNodeEnv)() ? function() {
                try {
                    return (0,
                    r.dynamicRequire)(t, "perf_hooks").performance
                } catch (t) {
                    return
                }
            }() : function() {
                const {performance: t} = o;
                if (!t || !t.now)
                    return;
                return {
                    now: ()=>t.now(),
                    timeOrigin: Date.now() - t.now()
                }
            }()
              , c = void 0 === a ? i : {
                nowSeconds: ()=>(a.timeOrigin + a.now()) / 1e3
            }
              , u = i.nowSeconds.bind(i)
              , l = c.nowSeconds.bind(c);
            let d;
            (()=>{
                const {performance: t} = o;
                if (!t || !t.now)
                    return void (d = "none");
                const e = 36e5
                  , n = t.now()
                  , r = Date.now()
                  , s = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e
                  , i = s < e
                  , a = t.timing && t.timing.navigationStart
                  , c = "number" == typeof a ? Math.abs(a + n - r) : e;
                i || c < e ? s <= c ? (d = "timeOrigin",
                t.timeOrigin) : d = "navigationStart" : d = "dateNow"
            }
            )()
        }
        ,
        791176: (t,e,n)=>{
            "use strict";
            function r(t) {
                if (!t)
                    return {};
                const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!e)
                    return {};
                const n = e[6] || ""
                  , r = e[8] || "";
                return {
                    host: e[4],
                    path: e[5],
                    protocol: e[2],
                    search: n,
                    hash: r,
                    relative: e[5] + n + r
                }
            }
            function s(t) {
                return t.split(/[\?#]/, 1)[0]
            }
            n.d(e, {
                parseUrl: ()=>r,
                stripUrlQueryAndFragment: ()=>s
            })
        }
        ,
        575869: (t,e,n)=>{
            "use strict";
            n.d(e, {
                supportsHistory: ()=>s
            });
            const r = (0,
            n(606258).getGlobalObject)();
            function s() {
                const t = r.chrome
                  , e = t && t.app && t.app.runtime
                  , n = "history"in r && !!r.history.pushState && !!r.history.replaceState;
                return !e && n
            }
        }
        ,
        606258: (t,e,n)=>{
            "use strict";
            function r(t) {
                return t && t.Math == Math ? t : void 0
            }
            n.d(e, {
                GLOBAL_OBJ: ()=>s,
                getGlobalObject: ()=>o,
                getGlobalSingleton: ()=>i
            });
            const s = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function() {
                return this
            }() || {};
            function o() {
                return s
            }
            function i(t, e, n) {
                const r = n || s
                  , o = r.__SENTRY__ = r.__SENTRY__ || {};
                return o[t] || (o[t] = e())
            }
        }
        ,
        301230: (t,e,n)=>{
            "use strict";
            n.d(e, {
                browser: ()=>c,
                browserFeatures: ()=>d,
                getBrowserKeyMatch: ()=>u,
                initBrowserUtils: ()=>h,
                mobPlatforms: ()=>l,
                redirectToMVK: ()=>p
            });
            var r = n(613916)
              , s = n(562112)
              , o = n(962983)
              , i = n(404145);
            const a = navigator.userAgent.toLowerCase()
              , c = {
                version: (a.match(/.+(?:me|ox|on|rv|it|era|opr|ie|edge)[\/: ]([\d.]+)/) || [0, "0"])[1],
                opera: /opera/i.test(a) || /opr/i.test(a),
                vivaldi: /vivaldi/i.test(a),
                amigo: /amigo.*mrchrome soc/i.test(a),
                msie: /msie/i.test(a) && !/opera/i.test(a) || /trident\//i.test(a) || /edge/i.test(a),
                msie6: /msie 6/i.test(a) && !/opera/i.test(a),
                msie7: /msie 7/i.test(a) && !/opera/i.test(a),
                msie8: /msie 8/i.test(a) && !/opera/i.test(a),
                msie9: /msie 9/i.test(a) && !/opera/i.test(a),
                msie_edge: /edge/i.test(a) && !/opera/i.test(a),
                mozilla: /firefox/i.test(a),
                yabrowser: /yabrowser/i.test(a),
                whale: /whale/i.test(a),
                chrome: /chrome/i.test(a) && !/edge/i.test(a),
                safari: !/chrome/i.test(a) && /webkit|safari|khtml/i.test(a),
                iphone: /iphone/i.test(a),
                ipod: /ipod/i.test(a),
                iphone4: /iphone.*OS 4/i.test(a),
                ipod4: /ipod.*OS 4/i.test(a),
                ipad: /ipad/i.test(a),
                ios: /.+(ipod|ipad|iphone.*os)/i.test(a),
                android: /android/i.test(a),
                bada: /bada/i.test(a),
                mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile|android/i.test(a),
                msie_mobile: /iemobile/i.test(a),
                safari_mobile: /iphone|ipod|ipad/i.test(a),
                opera_mobile: /opera mini|opera mobi/i.test(a),
                opera_mini: /opera mini/i.test(a),
                mac: /mac/i.test(a),
                windows7: /windows nt 6.1/i.test(a),
                windowsVista: /windows nt 6.0/i.test(a),
                windowsXp: /windows nt (5.2|5.1)/i.test(a),
                search_bot: /(yandex|google|stackrambler|aport|slurp|msnbot|bingbot|twitterbot|ia_archiver|facebookexternalhit)/i.test(a),
                smart_tv: /smart-tv|smarttv/i.test(a)
            };
            function u() {
                return Object.keys(c).find((t=>!0 === c[t])) || null
            }
            const l = {
                1: 1,
                2: 1,
                3: 1,
                4: 1,
                5: 1,
                8: 1
            }
              , d = (window,
            {
                wheelEvent: "onwheel"in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : c.mozilla ? "MozMousePixelScroll" : "DOMMouseScroll",
                hasBoundingClientRect: "getBoundingClientRect"in document.createElement("div"),
                cmaEnabled: navigator.credentials && navigator.credentials.preventSilentAccess && window.vk && vk.cma
            });
            function p() {
                const [t,e] = location.href.split("?")
                  , n = new URLSearchParams(e)
                  , r = {};
                for (let t of n)
                    r[t[0]] = t[1];
                if (r) {
                    if ("1" === r.m)
                        return;
                    if (r.force_redirect_to_mvk) {
                        delete r.force_redirect_to_mvk;
                        const e = (0,
                        o.toQueryString)(r);
                        return void (window.location = t.replace(i.VK_ORIGIN_REGEX_STRICT, "https://m." + (0,
                        i.getHostName)()) + (e ? "?" + e : ""))
                    }
                }
                if (i.VK_URL_REGEX.test(t) && !new RegExp("^" + i.VK_HOST_REGEX_UNSAFE.source + "\\/@").test(t)) {
                    const e = Object.assign(r, {
                        force_redirect_to_mvk: 1
                    })
                      , n = t + "?" + (0,
                    o.toQueryString)(e);
                    window.location = n
                }
            }
            function h() {
                (0,
                r.isIPadOS)(c) && !(0,
                s.getCookie)("remixforce_full") && p(),
                window._ua || (window._ua = navigator.userAgent.toLowerCase()),
                window.locDomain || (window.locDomain = location.host.toString().match(/[a-zA-Z]+\.[a-zA-Z]+\.?$/)[0]),
                window.locHost = location.host,
                window.locProtocol = location.protocol,
                window.locHash = location.hash.replace("#/", "").replace("#!", "")
            }
        }
        ,
        962983: (t,e,n)=>{
            "use strict";
            n.r(e),
            n.d(e, {
                fromQueryString: ()=>u,
                toQueryString: ()=>c
            });
            let r = {};
            const s = t=>"function" == typeof t
              , o = t=>Array.isArray(t)
              , i = function(t) {
                if (r[t])
                    return t;
                try {
                    return encodeURIComponent(t)
                } catch (t) {
                    return ""
                }
            }
              , a = function(t) {
                try {
                    return decodeURIComponent(t)
                } catch (e) {
                    return r[t] = 1,
                    t
                }
            };
            function c(t, e) {
                const n = [];
                for (const e in t)
                    if (t.hasOwnProperty(e) && null != t[e] && !s(t[e]))
                        if (o(t[e]))
                            for (let r = 0, o = 0, a = t[e].length; r < a; ++r)
                                null == t[e][r] || s(t[e][r]) || (n.push(i(e) + "[" + o + "]=" + i(t[e][r])),
                                ++o);
                        else
                            n.push(i(e) + "=" + i(t[e]));
                return e || n.sort(),
                n.join("&")
            }
            function u(t) {
                if (!t)
                    return {};
                const e = {};
                t = t.split("&");
                for (let n = 0; n < t.length; n++) {
                    const r = t[n].split("=");
                    if (r[0]) {
                        const t = a(r[1] + "");
                        if ("[]" === r[0].substr(r.length - 2)) {
                            const n = a(r[0].substr(0, r.length - 2));
                            e[n] || (e[n] = []),
                            e[n].push(t)
                        } else
                            e[a(r[0])] = t
                    }
                }
                return e
            }
        }
        ,
        562112: (t,e,n)=>{
            "use strict";
            n.d(e, {
                getCookie: ()=>a,
                initCookies: ()=>l,
                setCookie: ()=>u
            });
            var r = n(839470)
              , s = n(504867)
              , o = n(970978)
              , i = n(301230);
            function a(t) {
                return function() {
                    window._cookies = {};
                    const t = document.cookie.split(";")
                      , e = /^[\s]*([^\s]+?)$/i;
                    for (let n = 0, r = t.length; n < r; n++) {
                        const r = t[n].split("=");
                        2 === r.length && (_cookies[r[0].match(e)[1]] = unescape(r[1].match(e) ? r[1].match(e)[1] : ""))
                    }
                }(),
                "https:" !== location.protocol && "localhost" !== location.hostname && (0,
                s.statlogsValueEvent)("read_unsecure_cookie", t, location.href),
                _cookies[t]
            }
            function c(t, e) {
                const n = (0,
                r.getCookieGroups)()
                  , s = function() {
                    const t = a("remixcpl");
                    if (!t)
                        return [];
                    const e = t.split(",");
                    return e.forEach(((t,n)=>{
                        e[n] = parseInt(t)
                    }
                    )),
                    e
                }();
                let i = t
                  , c = null;
                if (!(0,
                r.partConfigEnabled)("need_check_allowed_cookie"))
                    return !0;
                if (!isNaN(parseInt(e)) && parseInt(e) < 0)
                    return !0;
                "remix" === i.substr(0, 5) && (i = i.substr(5)),
                n.hasOwnProperty(t) ? c = parseInt(n[t]) : n.hasOwnProperty(i) ? c = parseInt(n[i]) : "q_" === i.substr(0, 2) && n.hasOwnProperty("q_") && (c = parseInt(n.q_)),
                (null === c || isNaN(c)) && (0,
                o.logError)(`Undefined cookie group for cookie ${t} (${i})`);
                return 1 === c || !(isNaN(c) || !s.includes(c))
            }
            function u(t, e, n, s, o="None", a=window.locDomain, u={}) {
                if (!c(t, n))
                    return !1;
                const l = t + "=" + escape(e)
                  , d = u.withoutSubdomains ? "." : ""
                  , p = "; path=/" + (a ? "; domain=" + d + a : "")
                  , h = "https:" === location.protocol;
                let f = !!s;
                (0,
                r.partConfigEnabled)("cookie_secure_default_true") && (f = !1 !== s);
                const g = h && f ? "; secure" : ""
                  , m = f && i.browser.chrome && parseInt(i.browser.version) >= 71 && (0,
                r.partConfigEnabled)("cookie_class_samesite") ? `; SameSite=${o}` : "";
                let _ = "";
                if (n) {
                    const t = new Date;
                    t.setTime(t.getTime() + 24 * n * 60 * 60 * 1e3),
                    _ = "; expires=" + t.toGMTString()
                }
                return document.cookie = l + _ + p + m + g,
                !0
            }
            function l() {
                window._cookies = {}
            }
        }
        ,
        613916: (t,e,n)=>{
            "use strict";
            function r(t=window.browser) {
                return !(!t.mac || t.iphone || t.ipad || t.ipod || !(navigator.maxTouchPoints > 1))
            }
            n.d(e, {
                isAutoSchemesSupported: ()=>a,
                isCSSVariablesSupported: ()=>i,
                isDarkTheme: ()=>s,
                isIPadOS: ()=>r,
                isIntersectionObserverSupported: ()=>u,
                isJsModulesSupported: ()=>d,
                isLightTheme: ()=>o,
                isResizeObserverSupported: ()=>l,
                isWebAssemblySupported: ()=>p,
                isWebpSupported: ()=>c
            });
            const s = ()=>Boolean(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
              , o = ()=>Boolean(window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches)
              , i = ()=>Boolean(window.CSS && CSS.supports && CSS.supports("color", "var(--custom-property)"))
              , a = ()=>Boolean(window.matchMedia && window.matchMedia("(prefers-color-scheme)").matches)
              , c = t=>{
                const e = new Image;
                e.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
                e.onload = ()=>{
                    const n = e.width > 0 && e.height > 0;
                    t(n)
                }
                ,
                e.onerror = ()=>{
                    t(!1)
                }
            }
              , u = ()=>"IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype
              , l = ()=>"ResizeObserver"in window;
            const d = ()=>!window.nomodules;
            const p = ()=>{
                try {
                    if ("object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate) {
                        const t = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                        if (t instanceof WebAssembly.Module)
                            return new WebAssembly.Instance(t)instanceof WebAssembly.Instance
                    }
                } catch (t) {}
                return !1
            }
        }
        ,
        504867: (t,e,n)=>{
            "use strict";
            n.d(e, {
                statlogsValueEvent: ()=>m
            });
            var r = n(562112)
              , s = n(404145)
              , o = n(531730)
              , i = n(385376)
              , a = n(839470)
              , c = n(592373)
              , u = n(169185);
            let l, d, p, h;
            (0,
            s.isMvk)() ? (l = "lock_m_stats_cookie_lock",
            d = "remixmstsl",
            p = "lock_m_stats_cookie_locked_stats",
            h = "remixmsts") : (l = "lockkk_stats_cookie_lock",
            h = "remixsts",
            d = "remixstsl",
            p = "lock_stats_cookie_locked_stats");
            const f = []
              , g = {
                get stats() {
                    return (o.ls.checkVersion() ? JSON.parse(o.ls.get(p)) : this._stats) || []
                },
                push(t) {
                    const e = this.stats;
                    e.push(t),
                    o.ls.checkVersion() ? o.ls.set(p, JSON.stringify(e)) : this._stats = e
                },
                clear() {
                    o.ls.checkVersion() ? o.ls.remove(p) : delete this._stats
                }
            };
            function m(t, e, ...n) {
                if (void 0 === t || void 0 === e)
                    return;
                if (f.forEach((r=>r(t, e, ...n))),
                (0,
                a.partConfigEnabled)("local_storage_statlogs_value_event") && ![c.ADBLOCK_CONFIG_KEY, u.WASM_SUPPORT_CONFIG_KEY].includes(t))
                    return void (0,
                    i.saveStatlogEvents)({
                        name: t,
                        value: e,
                        keys: n
                    });
                const s = [Math.round(Date.now() / 1e3), t, e].concat(n);
                v((()=>{
                    if ((0,
                    a.partConfigEnabled)("mvk_stats_cookie_soft_clean_up")) {
                        if ("1" === (0,
                        r.getCookie)(d))
                            return void g.push(s);
                        (0,
                        r.setCookie)(d, "1")
                    }
                    _(s)
                }
                ))
            }
            function _(t) {
                let e;
                try {
                    e = JSON.parse((0,
                    r.getCookie)(h)),
                    e = e.data
                } catch (t) {
                    e = []
                }
                if (e = [...e, ...g.stats],
                t && e.push(t),
                0 === e.length)
                    return;
                const n = 1000000001 * Math.random();
                (0,
                r.setCookie)(h, JSON.stringify({
                    data: e.slice(-100),
                    uniqueId: n
                }), .01),
                g.clear()
            }
            function v(t, e) {
                if (o.ls.checkVersion()) {
                    if (!0 !== o.ls.get(l)) {
                        o.ls.set(l, !0);
                        try {
                            t()
                        } catch (t) {}
                        return void o.ls.set(l, !1)
                    }
                    e || setTimeout((()=>v(t, !0)), 100)
                } else
                    t()
            }
            (0,
            a.partConfigEnabled)("mvk_stats_cookie_soft_clean_up") && (window.addEventListener("beforeunload", (()=>{
                _(null)
            }
            )),
            window.ajax && window.ajax.onResponse((()=>{
                _(null)
            }
            )))
        }
        ,
        839470: (t,e,n)=>{
            "use strict";
            n.d(e, {
                GROUP_B1: ()=>i,
                GROUP_B2: ()=>a,
                GROUP_C1: ()=>c,
                GROUP_C2: ()=>u,
                calculateTimeOffsets: ()=>h,
                getConfigValue: ()=>d,
                getCookieGroups: ()=>p,
                getTestGroup: ()=>l,
                partConfigEnabled: ()=>o,
                randEnabled: ()=>s
            });
            var r = n(562112);
            function s(t) {
                return Math.random() < t
            }
            function o(t) {
                const {pe: e={}} = window.vk || {};
                return !!e[t]
            }
            const i = 3
              , a = 4
              , c = 5
              , u = 6;
            function l(t) {
                const {ex: e={}} = window.vk || {};
                return e[t] || null
            }
            function d(t) {
                const {cfg: e={}} = window.vk || {};
                return e[t]
            }
            function p() {
                const {acl: t={}} = window.vk || {};
                return t
            }
            function h() {
                const t = window.vk.ts;
                if (t && !window.browser.opera_mobile) {
                    const e = new Date;
                    let n = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds()) / 1e3 - t;
                    n -= 10800,
                    n /= 60,
                    n = n.toFixed(0),
                    n *= 60,
                    n < -55800 ? n += 86400 : n > 37800 && (n -= 86400);
                    let s = 0
                      , o = Math.abs(n);
                    [-12, -11, -10, -9.5, -9, -8, -7, -6, -5, -4.5, -4, -3.5, -3, -2, -1, 0, 1, 2, 3, 3.5, 4, 4.5, 5, 5.5, 5.75, 6, 6.5, 7, 8, 8.75, 9, 9.5, 10, 10.5, 11, 12, 12.75, 13, 14].forEach((t=>{
                        const e = Math.round(3600 * (t - 3))
                          , r = Math.abs(n - e);
                        r < o && (o = r,
                        s = e)
                    }
                    ));
                    const i = (0,
                    r.getCookie)("remixdt");
                    return void 0 !== i && function(t) {
                        if (!0 === t)
                            return 1;
                        return parseInt(t) || 0
                    }(i) === s || (0,
                    r.setCookie)("remixdt", s, 365),
                    s
                }
                return 0
            }
        }
        ,
        212147: (t,e,n)=>{
            "use strict";
            n.d(e, {
                isNetworkError: ()=>r
            });
            const r = t=>{
                var e;
                return "network_error" === (null == (e = t) ? void 0 : e.type)
            }
        }
        ,
        111317: function(t) {
            t.exports = function() {
                "use strict";
                class t {
                    constructor(t=0, e=0) {
                        this.first = null,
                        this.items = Object.create(null),
                        this.last = null,
                        this.max = t,
                        this.size = 0,
                        this.ttl = e
                    }
                    has(t) {
                        return t in this.items
                    }
                    clear() {
                        return this.first = null,
                        this.items = Object.create(null),
                        this.last = null,
                        this.size = 0,
                        this
                    }
                    delete(t) {
                        if (this.has(t)) {
                            const e = this.items[t];
                            delete this.items[t],
                            this.size--,
                            null !== e.prev && (e.prev.next = e.next),
                            null !== e.next && (e.next.prev = e.prev),
                            this.first === e && (this.first = e.next),
                            this.last === e && (this.last = e.prev)
                        }
                        return this
                    }
                    evict() {
                        const t = this.first;
                        return delete this.items[t.key],
                        this.first = t.next,
                        this.first.prev = null,
                        this.size--,
                        this
                    }
                    get(t) {
                        let e;
                        if (this.has(t)) {
                            const n = this.items[t];
                            this.ttl > 0 && n.expiry <= (new Date).getTime() ? this.delete(t) : (e = n.value,
                            this.set(t, e, !0))
                        }
                        return e
                    }
                    keys() {
                        return Object.keys(this.items)
                    }
                    set(t, e, n=!1) {
                        let r;
                        if (n || this.has(t)) {
                            if (r = this.items[t],
                            r.value = e,
                            !1 === n && (r.expiry = this.ttl > 0 ? (new Date).getTime() + this.ttl : this.ttl),
                            this.last !== r) {
                                const t = this.last
                                  , e = r.next
                                  , n = r.prev;
                                this.first === r && (this.first = r.next),
                                r.next = null,
                                r.prev = this.last,
                                t.next = r,
                                null !== n && (n.next = e),
                                null !== e && (e.prev = n)
                            }
                        } else
                            this.max > 0 && this.size === this.max && this.evict(),
                            r = this.items[t] = {
                                expiry: this.ttl > 0 ? (new Date).getTime() + this.ttl : this.ttl,
                                key: t,
                                prev: this.last,
                                next: null,
                                value: e
                            },
                            1 == ++this.size ? this.first = r : this.last.next = r;
                        return this.last = r,
                        this
                    }
                }
                return function(e=1e3, n=0) {
                    if (isNaN(e) || e < 0)
                        throw new TypeError("Invalid max value");
                    if (isNaN(n) || n < 0)
                        throw new TypeError("Invalid ttl value");
                    return new t(e,n)
                }
            }()
        },
        11010: (t,e,n)=>{
            "use strict";
            function r(t, e, n, r, s, o, i) {
                try {
                    var a = t[o](i)
                      , c = a.value
                } catch (t) {
                    return void n(t)
                }
                a.done ? e(c) : Promise.resolve(c).then(r, s)
            }
            function s(t) {
                return function() {
                    var e = this
                      , n = arguments;
                    return new Promise((function(s, o) {
                        var i = t.apply(e, n);
                        function a(t) {
                            r(i, s, o, a, c, "next", t)
                        }
                        function c(t) {
                            r(i, s, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }
                    ))
                }
            }
            n.d(e, {
                _: ()=>s
            })
        }
        ,
        434788: (t,e,n)=>{
            "use strict";
            function r() {
                return r = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }
                ,
                r.apply(this, arguments)
            }
            n.d(e, {
                _: ()=>r
            })
        }
        ,
        820224: (t,e,n)=>{
            "use strict";
            function r(t, e) {
                if (null == t)
                    return {};
                var n, r, s = {}, o = Object.keys(t);
                for (r = 0; r < o.length; r++)
                    n = o[r],
                    e.indexOf(n) >= 0 || (s[n] = t[n]);
                return s
            }
            n.d(e, {
                _: ()=>r,
                _object_without_properties_loose: ()=>r
            })
        }
    }
      , e = {};
    function n(r) {
        var s = e[r];
        if (void 0 !== s)
            return s.exports;
        var o = e[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n),
        o.loaded = !0,
        o.exports
    }
    n.d = (t,e)=>{
        for (var r in e)
            n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: e[r]
            })
    }
    ,
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    n.hmd = t=>((t = Object.create(t)).children || (t.children = []),
    Object.defineProperty(t, "exports", {
        enumerable: !0,
        set: ()=>{
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
        }
    }),
    t),
    n.o = (t,e)=>Object.prototype.hasOwnProperty.call(t, e),
    n.r = t=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.p = "/dist/",
    (()=>{
        "use strict";
        var t, e, r, s, o = n(470994), i = n(839470), a = n(846599), c = n(250523), u = n(297699), l = n(404145);
        (null == (e = window.vk) || null == (t = e.pe) ? void 0 : t.static_manager_dynamic_imports) && (null == (r = window.vk) ? void 0 : r.stDomain) && (n.p = window.vk.stDomain + "/dist/"),
        (0,
        o.initSentry)({
            dsn: ["d98c13466f87431e8460fb4d0f55aa15", 25],
            maxBreadcrumbs: (0,
            o.isSentryStaging)() && (0,
            i.partConfigEnabled)("sentry_js_web_verbose") ? 3 : 1,
            moduleChangeListener: null == (s = (0,
            l.getGlobalObject)().nav) ? void 0 : s.subscribeOnModuleEvaluated,
            integrations: [new a.ServerErrors, new a.HandledErrors, new c.KnownIssues(u.getKnownIssuesOfWeb)]
        });
        try {
            window.stManager.done(window.jsc("web/sentry.isolated.js"))
        } catch (t) {}
    }
    )()
}
)();
