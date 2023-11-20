// ads_light.f7dcfd1012b408ca9c05.jsdd00bd9acce810a88317bb890663fee7
(()=>{
    "use strict";
    var __webpack_modules__ = {
        557228: (_,e,t)=>{
            var i, d, s, o = t(792005), a = t(283452);
            (null == (d = window.vk) || null == (i = d.pe) ? void 0 : i.static_manager_dynamic_imports) && (null == (s = window.vk) ? void 0 : s.stDomain) && (t.p = window.vk.stDomain + "/dist/"),
            (0,
            a.init)(),
            o.AdsLight.init();
            try {
                window.stManager.done(window.jsc("web/ads_light.js")),
                (0,
                a.tq)().setInteractiveHandler("AdsLight/copy_marker_id", (_=>{
                    const {marker_id: e} = _.payload.dataAttrs
                      , t = _.payload.target;
                    return navigator.clipboard.writeText(e).then((()=>{
                        t && t.setAttribute("data-marker_id_copied", "")
                    }
                    ))
                }
                ))
            } catch (_) {
                console.error(_)
            }
        }
        ,
        792005: (__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{
            __webpack_require__.d(__webpack_exports__, {
                AdsLight: ()=>AdsLight
            });
            var _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(643897)
              , _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(664988)
              , _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(953908)
              , _web_lib_fx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(893106)
              , _web_lib_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(438221)
              , _shared_lib_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(562112)
              , _shared_lib_parse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(265865)
              , _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82161)
              , _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(795558)
              , _web_lib_tooltip_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(320422)
              , _shared_lib_site__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(404145)
              , _shared_user_user_env__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(839470)
              , _shared_ranges__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(931917)
              , _shared_lib_js_logger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(970978);
            const AdsLight = {};
            let isVkDomain = document.domain === (0,
            _shared_lib_site__WEBPACK_IMPORTED_MODULE_10__.getHostName)()
              , uaLight = navigator.userAgent.toLowerCase()
              , browserLight = {
                msie6: /msie 6/i.test(uaLight) && !/opera/i.test(uaLight),
                msie7: /msie 7/i.test(uaLight) && !/opera/i.test(uaLight),
                msie8: /msie 8/i.test(uaLight) && !/opera/i.test(uaLight)
            };
            if (AdsLight.init = function() {
                if (window.vk__adsLight)
                    return;
                let _ = {};
                _defineInObj(window, "vk__adsLight", _),
                AdsLight.initUserHandlers(),
                _.widgetsIds = {},
                _.observersInited = !1,
                _.publishTimers = {},
                _.windowId = Math.round(1e9 * Math.random() + 1),
                _.activeTab = 0,
                _.userEventTime = 0,
                _.wrapVisible = !1,
                _.imagesTimer = !1,
                _.reloadTimer = !1,
                _.updateBlockTimer = !1,
                _.adsCanShow = 1,
                _.adsSection = !1,
                _.adsShowed = "",
                _.adsShowedHash = +new Date,
                _.adsParams = !1,
                _.updateProgress = 0,
                _.adsShowedAll = {},
                _.loadComplete = !1,
                _.loaderParams = !1,
                _.adsIdsApplyNeeded = {},
                _.adsIdsApplyProcess = [],
                _.adsIdsApplyTimer = !1,
                _.adsIdsApplyLocked = !1,
                "onfocusin"in window ? window.addEventListener ? (window.addEventListener("focusin", _.userHandlers.onFocusWindow, !1),
                window.addEventListener("focusout", _.userHandlers.onBlurWindow, !1)) : window.attachEvent && (window.attachEvent("onfocusin", _.userHandlers.onFocusWindow),
                window.attachEvent("onfocusout", _.userHandlers.onBlurWindow)) : window.addEventListener && (window.addEventListener("focus", _.userHandlers.onFocusWindow, {
                    capture: !0,
                    passive: !0
                }),
                window.addEventListener("blur", _.userHandlers.onBlurWindow, {
                    capture: !0,
                    passive: !0
                })),
                document.addEventListener ? (window.addEventListener("scroll", _.userHandlers.onScrollWindow, {
                    capture: !0,
                    passive: !0
                }),
                document.addEventListener("mousedown", _.userHandlers.onMouseDownDocument, {
                    capture: !0,
                    passive: !0
                })) : document.attachEvent && (window.attachEvent("onscroll", _.userHandlers.onScrollWindow),
                document.attachEvent("onmousedown", _.userHandlers.onMouseDownDocument)),
                !isVkDomain && window.VK && VK.addCallback && VK.addCallback("adsPublish", AdsLight.handleEvent),
                _.yaDirectLoaded = !1,
                _.yaDirectAdActive = !1,
                _.yaDirectLoadTries = 0,
                _.gadxLoaded = !1,
                _.gadxLoading = !1,
                _.gadxLoadTries = 0,
                _.showWmgAd = !0,
                _.wmgLoading = !1,
                _.wmgLoadTries = 0,
                _.GPTLoading = !1,
                _.GPTLoaded = !1,
                _.GPTLoadTries = 0,
                _.userHandlers.onInit(!0)
            }
            ,
            AdsLight.initUserHandlers = function() {
                vk__adsLight.userHandlers = {
                    onInit: function(_) {
                        AdsLight.initObservers(),
                        _ && AdsLight.handleEvent("ads.onEvent", "onInit", 0);
                        _ || AdsLight.loadAds();
                        document.hasFocus && document.hasFocus() && s(!0)
                    },
                    onHasFocus: s,
                    onFocusWindow: function(e) {
                        e && AdsLight.handleEvent("ads.onEvent", "onFocusWindow", 0);
                        if (_)
                            return;
                        _ = !0,
                        t = window.vkNow && (0,
                        _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)() || 0,
                        vk__adsLight.userEventTime = window.vkNow && (0,
                        _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)() || 0,
                        a()
                    },
                    onBlurWindow: function(e) {
                        if (_ = !1,
                        window.vkNow && (0,
                        _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)() - t < 1e3)
                            return;
                        e && AdsLight.handleEvent("ads.onEvent", "onBlurWindow", 0);
                        vk__adsLight.activeTab = window.vkNow && -(0,
                        _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)() || 0
                    },
                    onScrollWindow: function _(e, t) {
                        if (e && !t)
                            return clearTimeout(d),
                            void (d = setTimeout((function() {
                                _(e, !0)
                            }
                            ), 100));
                        e && AdsLight.handleEvent("ads.onEvent", "onScrollWindow", 0);
                        vk__adsLight.userEventTime = window.vkNow && (0,
                        _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)() || 0,
                        a(),
                        isVkDomain && window.vkNow && window.vk && vk.ads_rotate_interval && s() && (clearTimeout(i),
                        i = setTimeout((function() {
                            s() && (window.__adsLoaded = 0,
                            AdsLight.updateBlock())
                        }
                        ), 10));
                        isVkDomain && AdsLight.applyAds();
                        function s() {
                            return "web" === vk__adsLight.adsSection && (0,
                            _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)() - window.__adsLoaded >= vk.ads_rotate_interval || (0,
                            _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)() - window.__adsLoaded >= 5 * vk.ads_rotate_interval
                        }
                    },
                    onMouseDownDocument: function(_) {
                        _ && AdsLight.handleEvent("ads.onEvent", "onMouseDownDocument", 0);
                        if (vk__adsLight.userEventTime = window.vkNow && (0,
                        _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)() || 0,
                        a(),
                        !_)
                            return;
                        let e = _.target;
                        for (; e && "A" != e.tagName && !e.onclick; )
                            e = e.parentNode;
                        if (!e)
                            return;
                        o(!0)
                    },
                    onMouseDownDocumentAction: o,
                    onActiveTab: a
                };
                let _ = !1
                  , e = !1
                  , t = !1
                  , i = !1
                  , d = !1;
                function s(_) {
                    _ && AdsLight.handleEvent("ads.onEvent", "onHasFocus", 0),
                    a()
                }
                function o(_) {
                    _ && AdsLight.handleEvent("ads.onEvent", "onMouseDownDocumentAction", 0),
                    clearTimeout(i),
                    e = !0,
                    setTimeout((function() {
                        e = !1
                    }
                    ), 10)
                }
                function a(_) {
                    function t() {
                        return (0,
                        _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)() - window.__adsLoaded >= vk.ads_rotate_interval
                    }
                    isVkDomain && window.vkNow && window.vk && vk.ads_rotate_interval && !e && vk__adsLight.activeTab < 0 && (0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)() + vk__adsLight.activeTab >= 15e3 && t() && (clearTimeout(i),
                    i = setTimeout((function() {
                        t() && (window.__adsLoaded = 0,
                        AdsLight.updateBlock())
                    }
                    ), 10)),
                    vk__adsLight.activeTab = 1
                }
            }
            ,
            AdsLight.initWeb = function(_, e, t, i) {
                if (vk__adsLight.adsSection = _,
                top === window)
                    return;
                let d = {
                    adsPublish: function() {
                        AdsLight.handleEvent.apply(AdsLight, arguments)
                    },
                    onAdsAttached: function() {
                        vk__adsLight.rpc.callMethod("publish", "ads.subscribeEvents")
                    },
                    onInit: function() {
                        vk__adsLight.rpc.callMethod("publish", "ads.subscribeEvents")
                    }
                };
                try {
                    vk__adsLight.rpc = new fastXDM.Client(d);
                    const _ = window.stDeps && window.stDeps["/dist/web/ads_light.js"];
                    let t = ["/dist/web/ads_light.js"];
                    _ && (t = _.map((_=>`/${_}`))),
                    vk__adsLight.rpc.callMethod("newAdsOnInitLoader", JSON.stringify(t)),
                    vk__adsLight.loaderParams = e,
                    vk__adsLight.adsParamsExport = i
                } catch (_) {
                    (0,
                    _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_0__.debugLog)(_)
                }
            }
            ,
            AdsLight.initObservers = function() {
                if (window.VK && VK.Observer && VK.Observer.subscribe && !vk__adsLight.observersInited) {
                    vk__adsLight.observersInited = !0,
                    VK.Observer.subscribe("ads.isVisibleBlockWrap", _("ads.isVisibleBlockWrap")),
                    VK.Observer.subscribe("ads.subscribeEvents", _("ads.subscribeEvents")),
                    VK.Observer.subscribe("ads.onEvent", _("ads.onEvent")),
                    VK.Observer.subscribe("ads.onAdsShowed", _("ads.onAdsShowed"));
                    for (let _ in VK.Widgets.RPC)
                        VK.Widgets.RPC[_].methods.adsOnInit && VK.Widgets.RPC[_].callMethod("onAdsAttached")
                }
                function _(_) {
                    return function() {
                        let e = Array.prototype.slice.call(arguments);
                        e.unshift(_),
                        AdsLight.handleEvent.apply(AdsLight, e)
                    }
                }
            }
            ,
            AdsLight.handleEvent = function() {
                let _ = Array.prototype.slice.call(arguments);
                switch (_.shift()) {
                case "ads.isVisibleBlockWrap":
                    AdsLight.isVisibleBlockWrapRpc.apply(AdsLight, _);
                    break;
                case "ads.subscribeEvents":
                    let e = _[0];
                    e && !vk__adsLight.widgetsIds[e] && (vk__adsLight.widgetsIds[e] = !0),
                    vk__adsLight.userHandlers.onInit(!0);
                    break;
                case "ads.onEvent":
                    AdsLight.onEvent.apply(AdsLight, _);
                    break;
                case "ads.onAdsShowed":
                    AdsLight.onAdsShowed.apply(AdsLight, _)
                }
            }
            ,
            AdsLight.onEvent = function(_, e) {
                if (0 === e)
                    e = [];
                else {
                    let t = !1;
                    for (let _ in e)
                        if (e[_] == vk__adsLight.windowId) {
                            t = !0;
                            break
                        }
                    if (t)
                        return;
                    vk__adsLight.userHandlers[_] && vk__adsLight.userHandlers[_](!1)
                }
                e.push(vk__adsLight.windowId),
                AdsLight.publish(!1, "ads.onEvent", _, e)
            }
            ,
            AdsLight.onAdsShowed = function(_) {
                0 === _ && (_ = {});
                let e = [];
                for (let t in _)
                    _.hasOwnProperty(t) && e.push(parseInt(t));
                e.sort();
                let t = [];
                for (let i = 0, d = e.length; i < d; i++) {
                    let d = e[i];
                    t.push(_[d].ads_showed_hash)
                }
                t = t.join("_");
                let i = t && _[vk__adsLight.windowId] && t === _[vk__adsLight.windowId].publish_hash;
                {
                    let i = +new Date;
                    _[vk__adsLight.windowId] || (_[vk__adsLight.windowId] = {},
                    e.push(vk__adsLight.windowId),
                    e.sort());
                    try {
                        _[vk__adsLight.windowId].ads_showed = vk__adsLight.adsShowed
                    } catch (_) {
                        return void ((0,
                        _shared_user_user_env__WEBPACK_IMPORTED_MODULE_11__.randEnabled)(.01) && (0,
                        _shared_lib_js_logger__WEBPACK_IMPORTED_MODULE_13__.logError)(new Error("AdBlock abort-on-property-read vk__adsLight.adsShowed")))
                    }
                    _[vk__adsLight.windowId].ads_showed_hash = vk__adsLight.adsShowedHash,
                    _[vk__adsLight.windowId].update_progress = vk__adsLight.updateProgress;
                    for (let e in vk__adsLight.adsShowedAll)
                        vk__adsLight.adsShowedAll.hasOwnProperty(e) && (!_[e] || vk__adsLight.adsShowedAll[e].publish_time > _[e].publish_time) && i - vk__adsLight.adsShowedAll[e].publish_time < 1e4 && (_[e] = vk__adsLight.adsShowedAll[e]);
                    t = [];
                    for (let i = 0, d = e.length; i < d; i++) {
                        let d = e[i];
                        t.push(_[d].ads_showed_hash)
                    }
                    t = t.join("_"),
                    _[vk__adsLight.windowId].publish_time = i,
                    _[vk__adsLight.windowId].publish_hash = t
                }
                for (let e in _)
                    _.hasOwnProperty(e) && (vk__adsLight.adsShowedAll[e] = _[e]);
                i || AdsLight.publish(!0, "ads.onAdsShowed", _)
            }
            ,
            AdsLight.publish = function(_, e) {
                let t, i = Array.prototype.slice.call(arguments, 1), d = i.slice(), s = i.slice(), o = i.slice(), a = i.slice();
                d.unshift("adsPublish"),
                s.unshift("adsPublish"),
                o.unshift("adsPublish"),
                a.unshift("publish");
                let n = [];
                if (window.VK && VK.Widgets && VK.Widgets.RPC)
                    for (let _ in vk__adsLight.widgetsIds)
                        VK.Widgets.RPC[_] && VK.Widgets.RPC[_].callMethod && (t = function() {
                            let e = _;
                            return function() {
                                VK.Widgets.RPC[e].callMethod.apply(VK.Widgets.RPC[e], d)
                            }
                        }(),
                        n.push(t));
                function r() {
                    for (let _ = 0, e = n.length; _ < e; _++)
                        n[_]()
                }
                !isVkDomain && window.VK && VK.callMethod && (t = function() {
                    VK.callMethod.apply(VK, s)
                }
                ,
                n.push(t)),
                isVkDomain && "web" !== vk__adsLight.adsSection && window.cur && cur.app && cur.app.runCallback && (t = function() {
                    cur.app.runCallback.apply(cur.app, o)
                }
                ,
                n.push(t)),
                isVkDomain && "web" === vk__adsLight.adsSection && vk__adsLight.rpc && vk__adsLight.rpc.callMethod && (t = function() {
                    vk__adsLight.rpc.callMethod.apply(vk__adsLight.rpc, a)
                }
                ,
                n.push(t)),
                clearTimeout(vk__adsLight.publishTimers[e]),
                n.length > 1 && _ ? vk__adsLight.publishTimers[e] = setTimeout(r, 50) : r()
            }
            ,
            AdsLight.canUpdate = function(_) {
                let e = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("ads_left")
                  , t = _ && !1 === window.__adsLoaded
                  , i = !0;
                return i = i && e && (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.isVisible)(e) && (vk__adsLight.activeTab > 0 && AdsLight.isVisibleBlockWrap() || t),
                i = i && vk.id && (vk__adsLight.adsCanShow >= 1 || (0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)() + vk__adsLight.adsCanShow > 36e5),
                "web" === vk__adsLight.adsSection ? i = i && 2 === vk__adsLight.loadComplete : (i = i && (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.isVisible)("side_bar") && !layers.visible && !(0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.isVisible)("left_friends"),
                i = i && !AdsLight.isNoAds() && (vk.loaded || t)),
                i
            }
            ,
            AdsLight.isNoAds = function() {
                return vk.no_ads || AdsLight.isNoAdsForce()
            }
            ,
            AdsLight.isNoAdsForce = function() {
                return window.cur && window.cur.no_left_ads
            }
            ,
            AdsLight.getAjaxParams = function(_, e) {
                let t = {}
                  , i = AdsLight.canUpdate(!0);
                return (0,
                _shared_ranges__WEBPACK_IMPORTED_MODULE_12__.rangesIsGroupIdPositive)(cur.group_id || 0) && (t._ads_group_id = cur.group_id),
                e.noAds || e.cache ? t.al_ad = 0 : i || e.ads ? ((e.ads || window.vkNow && window.vk && vk.ads_rotate_interval && "web" !== vk__adsLight.adsSection && (0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)() - window.__adsLoaded >= vk.ads_rotate_interval) && (window.__adsLoaded = (0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)(),
                t.al_ad = 1),
                (_.al_ad || t.al_ad) && (t.ads_section = vk__adsLight.adsSection,
                t.ads_showed = AdsLight.getAdsShowed())) : t.al_ad = null,
                t
            }
            ,
            AdsLight.doRequest = function(_, e) {
                let t = "web" === vk__adsLight.adsSection && 1 === vk__adsLight.loadComplete;
                if (!e)
                    return vk__adsLight.updateProgress = 1,
                    AdsLight.onAdsShowed(0),
                    void setTimeout(AdsLight.doRequest.pbind(_, !0), 300);
                let i, d, s = 0, o = {};
                !function e(a) {
                    let n = +new Date
                      , r = 0;
                    for (let _ in vk__adsLight.adsShowedAll)
                        if (vk__adsLight.adsShowedAll.hasOwnProperty(_)) {
                            let e = vk__adsLight.adsShowedAll[_];
                            if (n - e.publish_time >= 3e4)
                                delete vk__adsLight.adsShowedAll[_];
                            else if (!t || !o[_]) {
                                if (2 == e.update_progress) {
                                    r = _;
                                    break
                                }
                                1 == e.update_progress && (!r || _ < r) && (r = _)
                            }
                        }
                    a || !r || r == vk__adsLight.windowId ? (clearInterval(i),
                    clearTimeout(d),
                    vk__adsLight.updateProgress = 2,
                    AdsLight.onAdsShowed(0),
                    _()) : r != s && (s = r,
                    clearInterval(i),
                    clearTimeout(d),
                    i = setInterval(e, t ? 100 : 200),
                    d = setTimeout(e.pbind(!0), 5050));
                    o[r] = o[r] ? o[r] + 1 : 1
                }()
            }
            ,
            AdsLight.getAdsShowed = function() {
                let _ = [];
                for (let e in vk__adsLight.adsShowedAll)
                    if (vk__adsLight.adsShowedAll.hasOwnProperty(e)) {
                        let t = vk__adsLight.adsShowedAll[e];
                        t.ads_showed && _.push(t.ads_showed)
                    }
                return _ = _.join(","),
                _
            }
            ,
            AdsLight.updateBlock = function(_, e) {
                if ("very_lazy" === _)
                    return void (window.__adsLoaded = 0);
                if ("lazy" === _) {
                    if (window.__adsLoaded)
                        return void (window.__adsLoaded = 0);
                    window.__adsLoaded = 0
                }
                if ("force" === _ && (window.__adsLoaded = 0),
                "force_hard" === _ && (window.__adsLoaded = 0),
                "already" === _)
                    return void (window.__adsLoaded = (0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)());
                if (window.__adsLoaded || !1 === window.__adsLoaded)
                    return;
                if (!e)
                    return clearTimeout(vk__adsLight.updateBlockTimer),
                    void (vk__adsLight.updateBlockTimer = setTimeout(AdsLight.updateBlock.pbind(!1, 1), 1e3));
                let t = AdsLight.canUpdate();
                if (1 == e)
                    return void setTimeout(AdsLight.updateBlock.pbind(!1, 2), 500);
                if (!t && ("force_hard" != _ || AdsLight.isNoAdsForce()))
                    return;
                window.__adsLoaded = (0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)();
                let i = {};
                for (let _ in vk__adsLight.adsParams)
                    vk__adsLight.adsParams.hasOwnProperty(_) && (i[_] = vk__adsLight.adsParams[_]);
                function d() {
                    return s(),
                    !0
                }
                function s() {
                    vk__adsLight.updateProgress = 3
                }
                AdsLight.doRequest((function() {
                    i.ads_showed = AdsLight.getAdsShowed(),
                    i.ya_ad_active = +vk__adsLight.yaDirectAdActive,
                    ajax.post("/ads_rotate.php?act=al_update_ad", i, {
                        ads: 1,
                        onDone: s,
                        onFail: d
                    })
                }
                ))
            }
            ,
            AdsLight.sendExperimentStat = function(_, e, t) {
                if (window.vk && vk.id) {
                    if (vk.id % 20 != 2)
                        return
                } else if (Math.random() >= .05)
                    return;
                let i;
                switch (e) {
                case "try":
                    i = _ + 1;
                    break;
                case "success":
                    i = _ + 2;
                    break;
                case "fail":
                    i = _ + 3;
                    break;
                case "noresult":
                    i = _ + 7;
                    break;
                case "lineup":
                    i = _ + 8;
                    break;
                case "extra":
                    i = _ + 9;
                    break;
                default:
                    return
                }
                let d = "/wkview.php?act=mlet&mt=" + i;
                t && (d += "&extra=" + encodeURIComponent(t)),
                ajax.post(d, {}, {
                    onFail: function() {
                        return !0
                    }
                })
            }
            ,
            AdsLight.tryExperiment = function(_) {
                for (let e in _)
                    if (_.hasOwnProperty(e)) {
                        e = (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_7__.intval)(e);
                        let t = _[e].split(":")
                          , i = t[0]
                          , d = parseInt(t[1])
                          , s = t.slice(2)
                          , o = s.length ? s[s.length - 1] : ""
                          , a = "label="
                          , n = "";
                        switch (o.substr(0, a.length) === a && (n = o.substr(a.length),
                        s = s.slice(0, -1)),
                        vk__adsLight.yaDirectAdActive = !1,
                        i) {
                        case "ya_direct":
                            return AdsLight.sendExperimentStat(d, "lineup"),
                            vk__adsLight.yaCloseLink = s[0],
                            vk__adsLight.yaDirectLoaded ? (AdsLight.tryRenderYaDirect(s[1], d, n, _.slice(e + 1)),
                            !0) : void (vk__adsLight.yaDirectLoadTries > 3 ? (AdsLight.sendExperimentStat(d, "fail"),
                            AdsLight.tryExperiment(_.slice(e + 1))) : (AdsLight.initYaDirect(s[2]),
                            setTimeout((function() {
                                AdsLight.tryExperiment(_)
                            }
                            ), 300)));
                        case "criteo":
                            return AdsLight.sendExperimentStat(d, "lineup"),
                            AdsLight.tryRenderCriteo(d, _.slice(e + 1)),
                            !0;
                        case "rb":
                            return AdsLight.sendExperimentStat(d, "lineup"),
                            AdsLight.tryRenderTarget(s[0], s[1], d, n, s[2], s[3], s[4], s[6], s[5], _.slice(e + 1), s[7]),
                            !0;
                        case "vk":
                            {
                                AdsLight.sendExperimentStat(d, "lineup"),
                                AdsLight.sendExperimentStat(d, "try");
                                let _ = +new Date
                                  , e = "__vkAdsReq_" + _;
                                window[e] = function(_) {
                                    _.ads_count && AdsLight.sendExperimentStat(d, "success"),
                                    delete window[e]
                                }
                                ,
                                setTimeout((function() {
                                    delete window[e]
                                }
                                ), 6e4);
                                let t = vk__adsLight.adsParams;
                                return vk__adsLight.adsParams = vk__adsLight.adsParams || {},
                                vk__adsLight.adsParams.ads_req_id = _,
                                vk__adsLight.adsParams.ignore_experiments = d,
                                AdsLight.updateBlock("force_hard", 2),
                                vk__adsLight.adsParams = t,
                                !0
                            }
                        case "gadx":
                            {
                                let t;
                                if (AdsLight.sendExperimentStat(d, "lineup"),
                                !vk__adsLight.gadxLoaded)
                                    return void (vk__adsLight.gadxLoadTries > 3 ? (AdsLight.sendExperimentStat(d, "fail"),
                                    AdsLight.tryExperiment(_.slice(e + 1))) : (AdsLight.initGADX(s[0], [s[1], s[2]], d, _.slice(e + 1)),
                                    setTimeout((function() {
                                        AdsLight.tryExperiment(_)
                                    }
                                    ), 300)));
                                let i = AdsLight.getBusyBlockID(vk__adsLight.gadxBlocks)
                                  , o = AdsLight.getFreeBlockID(vk__adsLight.gadxBlocks);
                                if (!o)
                                    return void AdsLight.sendExperimentStat(d, "fail");
                                if (i) {
                                    t = (0,
                                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)(i);
                                    let _ = (0,
                                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("ads_left")
                                      , e = (0,
                                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.getSize)(_)[1];
                                    (0,
                                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.setStyle)(_, {
                                        minHeight: e,
                                        maxHeight: e
                                    }),
                                    (0,
                                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.setStyle)(t, {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%"
                                    }),
                                    t = (0,
                                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ce)("div", {
                                        id: o
                                    }, {
                                        maxHeight: 0,
                                        overflow: "hidden"
                                    }),
                                    _.appendChild(t)
                                } else {
                                    t = (0,
                                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ce)("div", {
                                        id: o
                                    }, {
                                        maxHeight: 0,
                                        overflow: "hidden"
                                    });
                                    let i = (0,
                                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("ads_left");
                                    if (!i)
                                        return AdsLight.sendExperimentStat(d, "fail"),
                                        void AdsLight.tryExperiment(_.slice(e + 1));
                                    if (i.innerHTML)
                                        return AdsLight.showNewBlock(i, "", !0),
                                        void setTimeout((function() {
                                            (0,
                                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("ads_left").innerHTML = "",
                                            AdsLight.tryExperiment(_)
                                        }
                                        ), 1e3);
                                    i.appendChild(t)
                                }
                                return googletag.cmd.push(function(_, e) {
                                    AdsLight.sendExperimentStat(e, "try"),
                                    googletag.pubads().refresh([vk__adsLight.gadxSlots[_]]),
                                    googletag.display(_)
                                }
                                .pbind(o, d)),
                                !0
                            }
                        case "wmg":
                            return AdsLight.sendExperimentStat(d, "lineup"),
                            AdsLight.wmgMessageCallback = function(t) {
                                AdsLight.checkWmgMessage.call(this, t, d, _, e)
                            }
                            ,
                            addEventListener("message", AdsLight.wmgMessageCallback),
                            window.glade ? (vk__adsLight.showWmgAd = !0,
                            AdsLight.tryRenderWmg(d, _.slice(e + 1)),
                            !0) : vk__adsLight.wmgLoadTries > 3 ? (vk__adsLight.showWmgAd = !1,
                            AdsLight.onWmgRenderUnsuccessful(d, _.slice(e + 1)),
                            !0) : (vk__adsLight.showWmgAd = !0,
                            AdsLight.initWmg(),
                            setTimeout((function() {
                                AdsLight.tryExperiment(_)
                            }
                            ), 300),
                            !0);
                        case "gpt":
                            return AdsLight.sendExperimentStat(d, "lineup"),
                            window.googletag && window.googletag.apiReady && vk__adsLight.GPTLoaded ? (AdsLight.tryRenderGPT(d, _, _.slice(e + 1)),
                            !0) : vk__adsLight.GPTLoadTries > 3 ? (AdsLight.onGPTRenderUnsuccessful(d, _.slice(e + 1)),
                            !0) : (AdsLight.initGPT(d, _.slice(e + 1)),
                            setTimeout((function() {
                                AdsLight.tryExperiment(_)
                            }
                            ), 300),
                            !0)
                        }
                    }
                return !1
            }
            ,
            AdsLight.setNewBlock = function(_, e, t, i, d, s) {
                "string" == typeof e && (vk__adsLight.adsSection = e);
                let o = "\x3c!--ads_experiment";
                if (_ && _.slice(0, 18) === o) {
                    let e = _.split(";");
                    return void AdsLight.tryExperiment(e.slice(1, -1))
                }
                let a = "\x3c!--ads_props_data;"
                  , n = _ ? _.indexOf(a) : -1
                  , r = -1 != n ? _.indexOf(";--\x3e", n + 19) : -1;
                if (-1 != r && (s = _.slice(n + 19, r)),
                s && "string" == typeof s)
                    try {
                        s = window.parseJSON ? (0,
                        _shared_lib_parse__WEBPACK_IMPORTED_MODULE_6__.parseJSON)(s) : JSON.parse(s)
                    } catch (_) {}
                if (s && "[object Object]" === Object.prototype.toString.call(s) || (s = {}),
                vk__adsLight.adsCanShow = t || "0" === t ? 1 : -(0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)(),
                vk__adsLight.adsShowed = i,
                vk__adsLight.adsShowedHash = +new Date,
                d && (vk__adsLight.adsParams = d),
                !_)
                    if (AdsLight.isNoAds())
                        _ = "";
                    else {
                        if ("im" !== vk__adsLight.adsSection || 0 != window.__seenAds)
                            return void AdsLight.resizeBlockWrap([0, 0], !1, !1, !0);
                        _ = ""
                    }
                window.__adsLoaded = (0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)();
                let l = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("ads_left")
                  , c = l && (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.isVisible)(l) || vk.ad_preview;
                if (!l) {
                    let _ = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("side_bar");
                    if (!_)
                        return void AdsLight.resizeBlockWrap([0, 0], !1, !1, !0);
                    l = _.appendChild((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ce)("div", {
                        id: "ads_left",
                        className: "ads_left_empty"
                    }, {
                        display: c ? "block" : "none"
                    }))
                }
                if (AdsLight.showNewBlock(l, _, c),
                window.vk && vk.ads_rotate_interval && "web" === vk__adsLight.adsSection && (clearInterval(vk__adsLight.reloadTimer),
                vk__adsLight.reloadTimer = setInterval((function() {
                    (0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)() - window.__adsLoaded >= vk.ads_rotate_interval && (0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)() - vk__adsLight.userEventTime <= 3 * vk.ads_rotate_interval / 4 && (window.__adsLoaded = 0,
                    AdsLight.updateBlock())
                }
                ), vk.ads_rotate_interval)),
                s.ads_req_id)
                    try {
                        let _ = "__vkAdsReq_" + s.ads_req_id;
                        window[_] && window[_](s)
                    } catch (_) {}
                setTimeout((function() {
                    vk__adsLight.updateProgress = 3,
                    AdsLight.onAdsShowed(0)
                }
                ), 100),
                "undefined" != typeof abp && window.abp && (0,
                _shared_lib_cookies__WEBPACK_IMPORTED_MODULE_5__.setCookie)("remixab", 1, 30)
            }
            ,
            AdsLight.replaceScriptsInElement = function(_) {
                Array.from(_.querySelectorAll("script")).forEach((_=>{
                    const e = document.createElement("script");
                    Array.from(_.attributes).forEach((_=>{
                        e.setAttribute(_.name, _.value)
                    }
                    )),
                    e.appendChild(document.createTextNode(_.innerHTML)),
                    _.parentNode.replaceChild(e, _)
                }
                ))
            }
            ,
            AdsLight.mailAdsLeftReady = function() {
                AdsLight.startProcessingImages()
            }
            ,
            AdsLight.showNewBlock = function(_, e, t) {
                if (vk__adsLight.containerElem = _,
                !t || browserLight.msie6 || browserLight.msie7) {
                    t || (0,
                    _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_0__.debugLog)("Ads container is hidden"),
                    _.innerHTML = e,
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.toggleClass)(_, "ads_left_empty", !e);
                    let i = AdsLight.getBlockSize(_);
                    return AdsLight.resizeBlockWrap(i, !1, !1, !0),
                    void AdsLight.updateExternalStats(_)
                }
                vk__adsLight.isNewBlockEmpty = !e;
                let i = e;
                "string" == typeof e && (i = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ce)("div", {
                    innerHTML: e
                }, {
                    display: "none"
                }),
                i.querySelector("#render-type-js") && AdsLight.replaceScriptsInElement(i)),
                i = _.appendChild(i),
                vk__adsLight.newBlockElem = i,
                i.querySelector("#render-type-js") || AdsLight.startProcessingImages()
            }
            ,
            AdsLight.startProcessingImages = function() {
                const {newBlockElem: _, containerElem: e, isNewBlockEmpty: t} = vk__adsLight;
                let i = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.getXY)(e)[1] + 50 > (0,
                _web_lib_scroll__WEBPACK_IMPORTED_MODULE_4__.scrollGetY)() + lastWindowHeight ? 0 : 200
                  , d = AdsLight.getBlockSize(e)
                  , s = [0, 0]
                  , o = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.geByClass1)("ads_ads_box3", _) || _
                  , a = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.geByTag)("img", _)
                  , n = [];
                for (let _ = 0, e = a.length; _ < e; _++) {
                    let e = (0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkImage)();
                    e.onload = r,
                    e.onerror = r,
                    e.src = a[_].src,
                    n.push(e)
                }
                function r() {
                    if ((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.isVisible)(_)) {
                        let _ = AdsLight.getBlockSize(o);
                        AdsLight.resizeBlockWrap(_, d, s)
                    }
                }
                function l() {
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.toggleClass)(e, "ads_left_empty", t),
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.cleanElems)(e);
                    let d = AdsLight.getBlockSize(o);
                    AdsLight.resizeBlockWrap(d, !1, s, !0),
                    t ? c() : (0,
                    _web_lib_fx__WEBPACK_IMPORTED_MODULE_3__.animate)(_, {
                        opacity: 1
                    }, i, c.pbind())
                }
                function c() {
                    if (t)
                        if (_.previousSibling) {
                            let e = _;
                            for (; e = e.previousSibling; )
                                if (e.nodeType === Node.ELEMENT_NODE) {
                                    let _ = e.previousSibling ? null : g.pbind();
                                    (0,
                                    _web_lib_fx__WEBPACK_IMPORTED_MODULE_3__.animate)(e, {
                                        opacity: 0
                                    }, i, _)
                                } else
                                    g()
                        } else
                            g();
                    else
                        g()
                }
                function g() {
                    for ((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.cleanElems)(_); _.previousSibling; )
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.re)(_.previousSibling);
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.setStyle)(_, {
                        position: "static",
                        zIndex: "",
                        width: ""
                    }),
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.setStyle)(e, {
                        width: "",
                        height: "",
                        overflow: "visible"
                    }),
                    window.updSideTopLink && window.updSideTopLink(),
                    AdsLight.updateExternalStats(e),
                    t || AdsLight.scrollToPreview()
                }
                clearInterval(vk__adsLight.imagesTimer),
                vk__adsLight.imagesTimer = setInterval(function(a) {
                    if (--a.count > 0)
                        for (let _ in n)
                            if (!n[_].width || !n[_].height)
                                return;
                    clearInterval(vk__adsLight.imagesTimer),
                    function() {
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.setStyle)(e, {
                            overflow: "hidden"
                        }),
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.setStyle)(_, {
                            display: "block",
                            position: "absolute",
                            left: 0,
                            top: 0,
                            opacity: 0,
                            zIndex: 10,
                            width: "100%"
                        });
                        let a = AdsLight.getBlockSize(o);
                        a = AdsLight.resizeBlockWrap(a, d, s),
                        t ? l() : (0,
                        _web_lib_fx__WEBPACK_IMPORTED_MODULE_3__.animate)(e, {
                            width: a[0],
                            height: a[1]
                        }, i, l.pbind())
                    }()
                }
                .pbind({
                    count: 40
                }), 50)
            }
            ,
            AdsLight.updateExternalStats = function(_) {
                let e;
                e = _ && _.getAttribute("external_stats_src") ? [_] : (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.geByClass)("ads_ad_external_stats", _);
                for (let _, t = 0; _ = e[t]; t++)
                    _.getAttribute("external_stats_complete") || (_.setAttribute("external_stats_complete", 1),
                    (0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkImage)().src = _.getAttribute("external_stats_src"))
            }
            ,
            AdsLight.addAdsToApply = function(_) {
                let e;
                window.cur ? (window.cur.adsIdsApplyNeeded || (window.cur.adsIdsApplyNeeded = {}),
                e = window.cur.adsIdsApplyNeeded) : e = vk__adsLight.adsIdsApplyNeeded;
                for (let t in _)
                    _.hasOwnProperty(t) && (e[t] = _[t]);
                AdsLight.applyAds()
            }
            ,
            AdsLight.applyAds = function(_) {
                let e = window.cur && window.cur.adsIdsApplyNeeded || vk__adsLight.adsIdsApplyNeeded || {};
                if (!(0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(e)) {
                    if (!_)
                        return clearTimeout(vk__adsLight.adsIdsApplyTimer),
                        void (vk__adsLight.adsIdsApplyTimer = setTimeout(AdsLight.applyAds.pbind(!0), 100));
                    !function() {
                        for (let _ in e)
                            if (e.hasOwnProperty(_)) {
                                let t = (0,
                                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)(_);
                                if (!t) {
                                    delete e[_];
                                    continue
                                }
                                let i = t.getBoundingClientRect();
                                if (i.bottom > 0 && i.top < lastWindowHeight) {
                                    let d = document.elementFromPoint(i.left + 1, i.top + 1)
                                      , s = document.elementFromPoint(i.right - 1, i.bottom - 1);
                                    if (d && (d === t || (0,
                                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.isAncestor)(d, t)) || s && (s === t || (0,
                                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.isAncestor)(s, t))) {
                                        vk__adsLight.adsIdsApplyProcess.push(e[_][0]),
                                        delete e[_];
                                        continue
                                    }
                                }
                                e[_][1] && ((0,
                                _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)() - vk.started) / 1e3 > e[_][1] && ((0,
                                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.re)(t),
                                delete e[_])
                            }
                        t()
                    }()
                }
                function t(_) {
                    if (0 == vk__adsLight.adsIdsApplyProcess.length)
                        return;
                    if (vk__adsLight.adsIdsApplyLocked)
                        return;
                    if (!_)
                        return clearTimeout(vk__adsLight.adsIdsApplyTimer),
                        void (vk__adsLight.adsIdsApplyTimer = setTimeout(t.pbind(!0), 100));
                    vk__adsLight.adsIdsApplyLocked = !0;
                    let e = {};
                    e.ads_ids_apply = vk__adsLight.adsIdsApplyProcess.join(";"),
                    cur && cur.adsDelayedViewsSrc && (e.ads_src = cur.adsDelayedViewsSrc),
                    vk__adsLight.adsIdsApplyProcess = [],
                    ajax.post("/ads_light.php?act=apply_views", e, {
                        onDone: i,
                        onFail: i
                    })
                }
                function i(_) {
                    if (vk__adsLight.adsIdsApplyLocked = !1,
                    _ && (0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.isObject)(_)) {
                        for (let e in _)
                            if (_.hasOwnProperty(e)) {
                                let t = (0,
                                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("ads_ad_box2_" + e);
                                if (!t)
                                    continue;
                                for (let i in _[e])
                                    _[e].hasOwnProperty(i) && t.setAttribute(i, _[e][i])
                            }
                        AdsLight.applyAds()
                    }
                }
            }
            ,
            AdsLight.isVisibleBlockWrap = function(_) {
                let e = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("ads_left")
                  , t = e.getBoundingClientRect()
                  , i = [];
                return t.right && t.bottom && (i.push([t.left + 1 * (t.right - t.left) / 5, t.top + 1 * (t.bottom - t.top) / 5]),
                i.push([t.left + 4 * (t.right - t.left) / 5, t.top + 4 * (t.bottom - t.top) / 5])),
                AdsLight.isVisibleBlockWrapCoords(i, e, (function(_) {
                    vk__adsLight.wrapVisible = _
                }
                ), _),
                vk__adsLight.wrapVisible
            }
            ,
            AdsLight.isVisibleBlockWrapCoords = function(_, e, t, i) {
                let d, s = !1, o = [];
                for (let t = 0, i = _.length; t < i; t++) {
                    let i = document.elementFromPoint(_[t][0], _[t][1])
                      , d = i && (i === e || n(i, e));
                    s = s || d,
                    d && o.push(_[t])
                }
                s = !!s;
                let a = function(_) {
                    clearTimeout(d),
                    t(void 0 !== _ ? _ : s)
                };
                function n(_, e) {
                    if (!_ || !e)
                        return !1;
                    for (; _ = _.parentNode; )
                        if (_ === e)
                            return !0;
                    return !1
                }
                !i && o.length && window != parent && isVkDomain && "web" === vk__adsLight.adsSection && vk__adsLight.rpc && vk__adsLight.rpc.callMethod ? (vk__adsLight.rpc.callMethod("publish", "ads.isVisibleBlockWrap", o, a),
                d = setTimeout(a, 300)) : !i && o.length && window != parent && !isVkDomain && window.VK && VK.callMethod ? (VK.callMethod("adsPublish", "ads.isVisibleBlockWrap", o, a),
                d = setTimeout(a, 300)) : a()
            }
            ,
            AdsLight.isVisibleBlockWrapRpc = function(_, e, t) {
                let i;
                i = t ? VK.Widgets.RPC[t].frame : cur.app.frame;
                let d = i.getBoundingClientRect()
                  , s = [];
                for (let e = 0, t = _.length; e < t; e++) {
                    let t = _[e][0] + d.left
                      , i = _[e][1] + d.top;
                    s.push([t, i])
                }
                AdsLight.isVisibleBlockWrapCoords(s, i, e)
            }
            ,
            AdsLight.getBlockSize = function(_) {
                let e = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.geByClass)("ads_ad_box", _)
                  , t = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.geByClass)("ads_ad_box5", _);
                (0,
                _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_7__.each)(t, (function(_, e) {
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.addClass)(e, "max_size")
                }
                )),
                browserLight.msie8 && (0,
                _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_7__.each)(e, (function(_, e) {
                    let t = Math.ceil((0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.floatval)((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.getStyle)(e, "width")))
                      , i = Math.ceil((0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.floatval)((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.getStyle)(e, "max-width")));
                    i && i > 200 && t >= i && (e.style.width = i + "px")
                }
                ));
                let i = [Math.ceil((0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.floatval)((0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.getStyle)(_, "width"))), Math.ceil((0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.floatval)((0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.getStyle)(_, "height")))];
                return (0,
                _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_7__.each)(t, (function(_, e) {
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.removeClass)(e, "max_size")
                }
                )),
                i
            }
            ,
            AdsLight.resizeBlockWrap = function(_, e, t, i) {
                if (!_)
                    return [0, 0];
                let d = _[0]
                  , s = _[1];
                d && vk__adsLight.adsParams && vk__adsLight.adsParams.ads_ad_unit_width_real > d && (d = vk__adsLight.adsParams.ads_ad_unit_width_real),
                s && vk__adsLight.adsParams && vk__adsLight.adsParams.ads_ad_unit_height_real > s && (s = vk__adsLight.adsParams.ads_ad_unit_height_real);
                let o = !!(i || e && d > e[0] || t && t[0] && d > t[0])
                  , a = !!(i || e && s > e[1] || t && t[1] && s > t[1]);
                return o || a ? (t && (o && (t[0] = d),
                a && (t[1] = s)),
                isVkDomain && "web" === vk__adsLight.adsSection && vk__adsLight.rpc && vk__adsLight.rpc.callMethod && vk__adsLight.rpc.callMethod("resizeWidget", o && d, a && s),
                [d, s]) : [d, s]
            }
            ,
            AdsLight.loadAds = function() {
                if (!isVkDomain || !vk__adsLight.loaderParams || vk__adsLight.loadComplete)
                    return;
                vk__adsLight.loadComplete = 1;
                let adsParamsExport = vk__adsLight.adsParamsExport;
                delete vk__adsLight.adsParamsExport;
                let ajaxParams = {};
                for (let _ in vk__adsLight.loaderParams)
                    vk__adsLight.loaderParams.hasOwnProperty(_) && (ajaxParams[_] = vk__adsLight.loaderParams[_]);
                ajaxParams.url = document.referrer;
                try {
                    ajaxParams.url_top = top.location.toString()
                } catch (_) {}
                let isVisibleWeb = AdsLight.isVisibleBlockWrap(!0);
                function onComplete(response, nothing, js) {
                    if (vk__adsLight.updateProgress = 3,
                    response && (0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.isObject)(response) && "ads_html"in response) {
                        let _ = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("ads_style_web_loader")
                          , e = _.sheet ? _.sheet : _.styleSheet
                          , t = e.deleteRule ? "deleteRule" : "removeRule";
                        e[t](0);
                        let i = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ce)("style", {
                            type: "text/css"
                        });
                        i.styleSheet ? i.styleSheet.cssText = response.css : i.appendChild(document.createTextNode(response.css)),
                        headNode.appendChild(i),
                        AdsLight.setNewBlock(response.ads_html, response.ads_section, response.ads_can_show, response.ads_showed, response.ads_params);
                        let d = response.ads_params_export;
                        if (d.ads_params_unclean) {
                            delete d.ads_params_unclean;
                            for (let _ in d)
                                d.hasOwnProperty(_) && (d[_] = (0,
                                _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.unclean)(d[_]))
                        }
                        vk__adsLight.rpc.callMethod("adsOnInit", response.ads_count, d),
                        vk__adsLight.loadComplete = 2
                    } else {
                        if ("string" == typeof js)
                            try {
                                eval(js)
                            } catch (_) {
                                (0,
                                _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_0__.logEvalError)(_, js),
                                (0,
                                _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_0__.debugLog)(_)
                            }
                        AdsLight.loadAdsFailed(-3001, adsParamsExport)
                    }
                }
                isVisibleWeb || (ajaxParams.web_invisible = 1),
                document.documentMode && (ajaxParams.ie_document_mode = document.documentMode),
                AdsLight.doRequest((function() {
                    ajaxParams.ads_showed = AdsLight.getAdsShowed(),
                    ajax.post("/ads_rotate.php?act=ads_web", ajaxParams, {
                        onDone: onComplete,
                        onFail: onComplete
                    })
                }
                ))
            }
            ,
            AdsLight.loadAdsFailed = function(_, e) {
                if (!vk__adsLight.rpc)
                    return !1;
                if (-1 === vk__adsLight.loadComplete)
                    return !0;
                if (vk__adsLight.loadComplete = -1,
                e.ads_params_unclean) {
                    delete e.ads_params_unclean;
                    for (let _ in e)
                        e.hasOwnProperty(_) && (e[_] = (0,
                        _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.unclean)(e[_]))
                }
                return vk__adsLight.rpc.callMethod("resizeWidget", 0, 0),
                vk__adsLight.rpc.callMethod("adsOnInit", _, e),
                !0
            }
            ,
            AdsLight.blockOverOut = function(_, e, t) {
                let i, d = "mouseover" === _.type, s = !1;
                if ((0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.hasClass)(e, t) ? (i = e,
                (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.toggleClass)(i, "over", d),
                s = d ? 1 : .3) : (i = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.geByClass1)(t, i),
                i.over = 1,
                (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.hasClass)(i, "over") || (s = d ? .3 : 0)),
                !1 !== s && (0,
                _web_lib_fx__WEBPACK_IMPORTED_MODULE_3__.animate)(i, {
                    opacity: s
                }, 200),
                d && e == i) {
                    let _ = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.geByClass1)("tooltip_text", i);
                    _ && (0,
                    _web_lib_tooltip_utils__WEBPACK_IMPORTED_MODULE_9__.showTooltip)(i, {
                        text: _.innerHTML,
                        showdt: 0,
                        black: 1,
                        shift: [14, 3, 3]
                    })
                }
            }
            ,
            AdsLight.closeNewsBlock = function(_, e, t) {
                for (; !(0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.hasClass)(_, "feed_row"); )
                    _ = _.parentNode;
                function i() {
                    return !0
                }
                (0,
                _web_lib_fx__WEBPACK_IMPORTED_MODULE_3__.slideUp)(_, 200),
                ajax.post("/ads_light.php?act=close_news", {
                    hash: e,
                    ads_section: t
                }, {
                    onDone: i,
                    onFail: i
                })
            }
            ,
            AdsLight.scrollToPreview = function(_) {
                if (!_)
                    return void setTimeout(AdsLight.scrollToPreview.pbind(!0), 100);
                let e = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.geByClass1)("ads_ads_preview");
                if (!e || (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.hasClass)(e, "ads_ads_preview_viewed"))
                    return;
                (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.addClass)(e, "ads_ads_preview_viewed");
                let t = (0,
                _web_lib_scroll__WEBPACK_IMPORTED_MODULE_4__.scrollGetY)()
                  , i = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.getXY)(e)[1]
                  , d = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.getSize)(e)[1]
                  , s = vk.staticheader ? 0 : (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.getSize)("page_header_cont")[1];
                (i + d > t + lastWindowHeight || i < t + s) && (d >= lastWindowHeight - s ? (0,
                _web_lib_scroll__WEBPACK_IMPORTED_MODULE_4__.scrollToY)(i - 10, 500) : (0,
                _web_lib_scroll__WEBPACK_IMPORTED_MODULE_4__.scrollToY)(i - (lastWindowHeight - d) / 2, 500))
            }
            ,
            AdsLight.overrideClickEvents = function(_, e, t) {
                if (!_)
                    return !1;
                let i = _.getAttribute("onclick_inside")
                  , d = _.getAttribute("onclick_outside");
                if (!d)
                    return !1;
                if (i = new Function("event",i || d),
                d = new Function("event",d),
                !t) {
                    let e = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.geByTag)("a", _);
                    for (let _, t = 0; _ = e[t]; t++)
                        _.setAttribute("_href", _.href),
                        _.removeAttribute("href")
                }
                let s = !1;
                return (0,
                _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_2__.addEvent)(_, "click dblclick mousedown mouseup touchstart touchmove touchend", (function(_) {
                    let e = !1;
                    if (_ = normEvent(_),
                    !s)
                        if ("mouseup" == _.type && (2 == _.which || 1 == _.which && (0,
                        _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_2__.checkEvent)(_))) {
                            if ("A" == _.target.nodeName && _.target.hasAttribute("href") && "#" !== _.target.getAttribute("href"))
                                return !0;
                            s = !0,
                            setTimeout((function() {
                                s = !1
                            }
                            ), 100),
                            d(_)
                        } else
                            "click" == _.type && 1 == _.which && (e = i(_));
                    if (t && !e)
                        return !0;
                    return (0,
                    _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_2__.cancelEvent)(_)
                }
                ), !1, !1, !0),
                e || cur.destroy.push(function(_) {
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.cleanElems)(_)
                }
                .pbind(_)),
                !0
            }
            ,
            AdsLight.initYaDirect = function(_) {
                var e, t, i, d, s;
                (vk__adsLight.yaDirectLoadTries++,
                vk__adsLight.yaDirectLoading) || (vk__adsLight.yaDirectLoading = !0,
                e = window,
                t = window.document,
                e[i = "yandexContextAsyncCallbacks"] = e[i] || [],
                e[i].push((function() {
                    vk__adsLight.yaDirectLoaded = !0,
                    vk__adsLight.yaDirectLoading = !1
                }
                )),
                s = t.getElementsByTagName("script")[0],
                (d = t.createElement("script")).type = "text/javascript",
                d.src = _ || "//an.yandex.ru/system/context.js",
                d.async = !0,
                s.parentNode.insertBefore(d, s))
            }
            ,
            AdsLight.tryRenderYaDirect = function(_, e, t, i) {
                if (!vk__adsLight.yaDirectLoaded)
                    return;
                let d, s = "yandex_ad_" + _;
                if ((0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)(s))
                    (0,
                    _web_lib_fx__WEBPACK_IMPORTED_MODULE_3__.animate)((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)(s), {
                        opacity: 0
                    }, 200, (function() {
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.re)(s),
                        AdsLight.tryRenderYaDirect(_, e, t, i)
                    }
                    ));
                else {
                    {
                        d = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ce)("div", {
                            id: s
                        });
                        let _ = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("ads_left");
                        if (!_)
                            return AdsLight.sendExperimentStat(e, "fail"),
                            void AdsLight.onYaDirectRenderUnsuccessful(i);
                        _.appendChild(d)
                    }
                    d = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)(s),
                    Ya.Context.AdvManager.render({
                        blockId: _,
                        renderTo: s,
                        async: !0,
                        onRender: function() {
                            t && !(0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.geByClass1)("ads_label", d) && d.insertBefore((0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.se)(t), d.firstChild),
                            AdsLight.sendExperimentStat(e, "success"),
                            AdsLight.onYaDirectRenderSuccessful(d)
                        }
                    }, (function() {
                        AdsLight.sendExperimentStat(e, "fail"),
                        AdsLight.onYaDirectRenderUnsuccessful(i)
                    }
                    )),
                    AdsLight.sendExperimentStat(e, "try")
                }
            }
            ,
            AdsLight.onYaDirectRenderSuccessful = function(_) {
                if (vk__adsLight.yaCloseLink) {
                    let e = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.se)(`<div id="ya_direct" style="display:none;" onmouseover="leftBlockOver('ya_direct');" onmouseout="leftBlockOut('ya_direct');"><div id="left_hideya_direct" class="left_hide_button" onmouseover="leftBlockOver(this);" onmouseout="leftBlockOut(this);" onclick="leftAdBlockClose('ya_direct', '${vk__adsLight.yaCloseLink}'); return cancelEvent(event);"></div></div>`);
                    e.appendChild(_),
                    _ = e
                }
                AdsLight.showNewBlock((0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("ads_left"), _, !0),
                vk__adsLight.yaDirectAdActive = !0
            }
            ,
            AdsLight.onYaDirectRenderUnsuccessful = function(_) {
                vk__adsLight.yaDirectAdActive = !1,
                AdsLight.tryExperiment(_)
            }
            ,
            AdsLight.tryRenderCriteo = function(_, e) {
                let t = "criteo-iframe"
                  , i = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)(t);
                i ? (0,
                _web_lib_fx__WEBPACK_IMPORTED_MODULE_3__.animate)(i, {
                    opacity: 0
                }, 200, (function() {
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.re)(i),
                    AdsLight.tryRenderCriteo(e)
                }
                )) : (AdsLight.sendExperimentStat(_, "try"),
                i = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ce)("iframe", {
                    id: t,
                    frameBorder: "0",
                    marginWidth: "0",
                    marginHeight: "0",
                    height: "0",
                    width: "118",
                    scrolling: "no"
                }, {
                    opacity: 0
                }),
                i.onload = function() {
                    i.contentDocument.body.scrollHeight > 400 ? (AdsLight.sendExperimentStat(_, "success"),
                    i.height = 600,
                    (0,
                    _web_lib_fx__WEBPACK_IMPORTED_MODULE_3__.animate)(i, {
                        opacity: 1
                    }, 200)) : (AdsLight.sendExperimentStat(_, "fail"),
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.re)(i),
                    AdsLight.tryExperiment(e))
                }
                ,
                i.src = "/ads_light.php?act=criteo",
                (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("ads_left").appendChild(i))
            }
            ,
            AdsLight.initWmg = function() {
                if (vk__adsLight.wmgLoadTries++,
                vk__adsLight.wmgLoading)
                    return;
                vk__adsLight.wmgLoading = !0;
                let _ = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.geByTag1)("script")
                  , e = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ce)("script", {
                    type: "text/javascript",
                    async: !0,
                    src: "https://securepubads.g.doubleclick.net/static/glade.js"
                });
                _.parentNode.insertBefore(e, _),
                vk__adsLight.wmgLoading = !1
            }
            ,
            AdsLight.tryRenderWmg = function(_, e) {
                if (vk__adsLight.wmgLoading)
                    return;
                if (vk__adsLight.wmgLoading = !0,
                AdsLight.sendExperimentStat(_, "try"),
                !vk__adsLight.showWmgAd || !(window && window.glade && window.glade.run))
                    return void AdsLight.onWmgRenderUnsuccessful(_, e);
                let t = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("ads_left");
                if (!t)
                    return void AdsLight.onWmgRenderUnsuccessful(_, e);
                let i = AdsLight.getWmgDivId(t)
                  , d = AdsLight.addWmgBlock(i);
                t.appendChild(d),
                d.addEventListener("gladeAdFetched", AdsLight.onLoadWmgAd.pbind(_, e)),
                d.addEventListener("gladeAdRendered", AdsLight.onRenderWmgAd.pbind(i, d, t, _, e)),
                window.glade.run()
            }
            ,
            AdsLight.getWmgDivId = function(_) {
                let e = "glade-aslot-1";
                return _.innerHTML ? ((0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("glade-aslot-1") && (e = "glade-aslot-2"),
                e) : e
            }
            ,
            AdsLight.addWmgBlock = function(_) {
                let e = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ce)("div", {
                    id: _
                }, {
                    display: "none",
                    opacity: 0
                });
                return e.setAttribute("data-ad-unit-path", "/205338224/120x600_vk.com"),
                e.setAttribute("data-click-url", (0,
                _shared_lib_site__WEBPACK_IMPORTED_MODULE_10__.getHostName)()),
                e.setAttribute("data-glade", !0),
                e.setAttribute("width", "120"),
                e.setAttribute("height", "600"),
                e
            }
            ,
            AdsLight.onLoadWmgAd = function(_, e, t) {
                vk__adsLight.wmgLoadTries = 0,
                t && t.detail && !t.detail.empty || (vk__adsLight.showWmgAd = !1,
                AdsLight.onWmgRenderUnsuccessful(_, e))
            }
            ,
            AdsLight.onRenderWmgAd = function(_, e, t, i, d) {
                vk__adsLight.showWmgAd && AdsLight.onWmgRenderSuccessful(_, e, t, i, d)
            }
            ,
            AdsLight.onWmgRenderUnsuccessful = function(_, e) {
                vk__adsLight.wmgLoading = !1,
                AdsLight.wmgMessageCallback && removeEventListener("message", AdsLight.wmgMessageCallback),
                AdsLight.sendExperimentStat(_, "fail"),
                AdsLight.tryExperiment(e)
            }
            ,
            AdsLight.onWmgRenderSuccessful = function(_, e, t, i, d) {
                vk__adsLight.wmgLoading = !1,
                AdsLight.sendExperimentStat(i, "success"),
                e.removeEventListener("gladeAdFetched", AdsLight.onLoadWmgAd.pbind(i, d)),
                e.removeEventListener("gladeAdRendered", AdsLight.onRenderWmgAd.pbind(_, e, t, i, d)),
                AdsLight.showWmgAfterFetch(_, e, t)
            }
            ,
            AdsLight.showWmgAfterFetch = function(_, e, t) {
                (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.setStyle)("ads_left", {
                    overflow: "hidden"
                }),
                (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.setStyle)(_, {
                    display: "block",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    opacity: 0,
                    zIndex: 10,
                    width: "100%"
                });
                let i = AdsLight.getBlockSize(t)
                  , d = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.geByClass1)("ads_ads_box3", e) || e
                  , s = AdsLight.getBlockSize(d);
                s = AdsLight.resizeBlockWrap(s, i, [0, 0]),
                (0,
                _web_lib_fx__WEBPACK_IMPORTED_MODULE_3__.animate)("ads_left", {
                    width: s[0],
                    height: s[1]
                }, 200, (function() {
                    AdsLight.cleanAdBlockForWmg(_, e, t)
                }
                ))
            }
            ,
            AdsLight.cleanAdBlockForWmg = function(_, e, t) {
                (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.removeClass)(t, "ads_left_empty"),
                (0,
                _web_lib_fx__WEBPACK_IMPORTED_MODULE_3__.animate)(_, {
                    opacity: 1
                }, 200, (function() {
                    if (t.innerHTML)
                        for (let i = 0, d = t.childNodes.length; i < d; i++) {
                            let d = t.childNodes[i] ? t.childNodes[i].getAttribute("id") : "";
                            if (d && d === _)
                                return;
                            let s = t.childNodes[i];
                            (0,
                            _web_lib_fx__WEBPACK_IMPORTED_MODULE_3__.animate)(s, {
                                opacity: 0
                            }, 200, (function(_) {
                                (0,
                                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.re)(_),
                                AdsLight.showWmgBlock(e, t)
                            }
                            ))
                        }
                }
                ))
            }
            ,
            AdsLight.showWmgBlock = function(_, e) {
                (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.setStyle)(_, {
                    position: "static",
                    zIndex: "",
                    width: ""
                }),
                (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.setStyle)(e, {
                    width: "",
                    height: "",
                    overflow: "visible"
                })
            }
            ,
            AdsLight.getRBAds = function(_, e, t, i) {
                let d, s, o = "__rb" + (new Date).getTime(), a = i.slot_id, n = "https://ad.mail.ru/adq/?callback=" + o + "&q%5B%5D=" + a + "%3Fn%3D" + encodeURIComponent(_), r = {};
                for (s in i && i.test_id && (r.test_id = i.test_id),
                i && i.cpm_floor && "0" != i.cpm_floor && (r.cpm_floor = i.cpm_floor),
                i && i.vk_id && (r.vk_id = i.vk_id),
                i && i.count && (r.count = i.count),
                i && i.sign && (r.sign = i.sign),
                i && i.brandsafety && (r.brandsafety = i.brandsafety),
                r)
                    r.hasOwnProperty(s) && (n += `&${s}=${r[s]}`);
                return function(e, t, s) {
                    clearTimeout(d),
                    d = setTimeout((function() {
                        s({
                            reason: "timeout"
                        })
                    }
                    ), 5e3),
                    window[o] = function(e) {
                        if (clearTimeout(d),
                        e && e[0] && e[0].html) {
                            try {
                                let t = (0,
                                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)(_)
                                  , d = t && (0,
                                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.isVisible)(t) || vk.ad_preview;
                                if (!t) {
                                    let _ = (0,
                                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("side_bar");
                                    if (!_)
                                        return AdsLight.resizeBlockWrap([0, 0], !1, !1, !0),
                                        void s({
                                            reason: "no-side-bar"
                                        });
                                    t = _.appendChild((0,
                                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ce)("div", {
                                        id: "ads_left",
                                        className: "ads_left_empty"
                                    }, {
                                        display: d ? "block" : "none"
                                    }))
                                }
                                AdsLight.showNewBlock(t, (i.label ? i.label : "") + e[0].html, d)
                            } catch (_) {}
                            t(e)
                        } else
                            s({
                                reason: "no-ads"
                            })
                    }
                    ;
                    let a = document.createElement("script");
                    a.src = e,
                    document.getElementsByTagName("head")[0].appendChild(a)
                }(n, e, t),
                o
            }
            ,
            AdsLight.tryRenderTarget = function(_, e, t, i, d, s, o, a, n, r, l) {
                let c = {
                    slot_id: e,
                    label: i,
                    cpm_floor: d,
                    test_id: s,
                    count: o
                };
                l && (c.brandsafety = 1),
                _ && (c.test_id = _),
                window.vk && vk.id && (c.vk_id = vk.id,
                a && (c.sign = a)),
                AdsLight.sendExperimentStat(t, "try");
                let g = !1
                  , h = setTimeout((function() {
                    AdsLight.sendExperimentStat(t, "noresult"),
                    g && window[g] && (window[g] = function() {}
                    ),
                    AdsLight.tryExperiment(r)
                }
                ), 6e3)
                  , L = "ads_left";
                window.stManager.add([window.jsc("web/mrtarg.js")], (function() {
                    g = AdsLight.getRBAds(L, (function(_) {
                        clearTimeout(h),
                        AdsLight.sendExperimentStat(t, "success"),
                        window.RB && window.RB.doCheck && window.RB.doCheck();
                        let e = function(_) {
                            let e = (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)(L);
                            if (!e)
                                return;
                            let t = (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.geByClass1)("trg-b-banner-block", e);
                            return t || (0,
                            _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.isArray)(_) && (0,
                            _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.isObject)(_[0]) && _[0].banner && (t = (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("b" + _[0].banner)),
                            t
                        }(_);
                        if (e) {
                            let _ = ["rbccl", e.getAttribute("c"), e.getAttribute("ac"), n].join(";");
                            AdsLight.sendExperimentStat(t, "extra", _)
                        }
                    }
                    ), (function(_) {
                        clearTimeout(h),
                        AdsLight.sendExperimentStat(t, "fail"),
                        AdsLight.tryExperiment(r)
                    }
                    ), c)
                }
                ))
            }
            ,
            AdsLight.initGADX = function(_, e, t, i) {
                if (vk__adsLight.gadxLoadTries++,
                vk__adsLight.gadxLoading)
                    return;
                if (vk__adsLight.gadxLoaded)
                    return;
                vk__adsLight.gadxLoading = !0,
                vk__adsLight.gadxBlocks = e;
                let d = window.document.getElementsByTagName("script")[0]
                  , s = window.document.createElement("script");
                s.type = "text/javascript",
                s.src = "//www.googletagservices.com/tag/js/gpt.js",
                s.async = !0,
                d.parentNode.insertBefore(s, d),
                window.googletag = window.googletag || {},
                googletag.cmd = googletag.cmd || [],
                vk__adsLight.gadxSlots = {},
                googletag.cmd.push((function() {
                    (0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_7__.each)(e, (function(e, t) {
                        let i = googletag.defineSlot(_, ["fluid"], t);
                        vk__adsLight.gadxSlots[t] = i,
                        i.addService(googletag.pubads())
                    }
                    )),
                    googletag.pubads().enableSingleRequest(),
                    googletag.pubads().addEventListener("slotRenderEnded", (function(_) {
                        AdsLight.initGoogleRenderFinished(_, t, i, vk__adsLight.gadxBlocks)
                    }
                    )),
                    googletag.pubads().disableInitialLoad(),
                    googletag.enableServices(),
                    vk__adsLight.gadxLoaded = !0,
                    vk__adsLight.gadxLoading = !1
                }
                ))
            }
            ,
            AdsLight.initGoogleRenderFinished = function(_, e, t, i) {
                setTimeout((function() {
                    let d = _.slot.getSlotElementId()
                      , s = AdsLight.getBusyBlockID(i, d);
                    _.isEmpty ? (s && ((0,
                    _web_lib_fx__WEBPACK_IMPORTED_MODULE_3__.animate)((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)(s), {
                        maxHeight: 0
                    }, 300, (function() {
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.re)(s)
                    }
                    )),
                    (0,
                    _web_lib_fx__WEBPACK_IMPORTED_MODULE_3__.animate)((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("ads_left"), {
                        minHeight: 0,
                        maxHeight: 400
                    }, 300, (function() {
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.setStyle)((0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("ads_left"), {
                            minHeight: "",
                            maxHeight: ""
                        })
                    }
                    ))),
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.re)(d),
                    AdsLight.sendExperimentStat(e, "fail"),
                    AdsLight.tryExperiment(t)) : (s ? ((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.setStyle)((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)(d), {
                        maxHeight: "",
                        opacity: .01
                    }),
                    (0,
                    _web_lib_fx__WEBPACK_IMPORTED_MODULE_3__.animate)((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)(d), {
                        opacity: 1
                    }, 200),
                    (0,
                    _web_lib_fx__WEBPACK_IMPORTED_MODULE_3__.animate)(s, {
                        opacity: 0
                    }, 200, (function() {
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.re)(s)
                    }
                    )),
                    (0,
                    _web_lib_fx__WEBPACK_IMPORTED_MODULE_3__.animate)((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("ads_left"), {
                        minHeight: 0,
                        maxHeight: 400
                    }, 300, (function() {
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.setStyle)((0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("ads_left"), {
                            minHeight: "",
                            maxHeight: ""
                        })
                    }
                    ))) : (0,
                    _web_lib_fx__WEBPACK_IMPORTED_MODULE_3__.animate)((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)(d), {
                        maxHeight: 400
                    }, 300, (function() {}
                    )),
                    AdsLight.sendExperimentStat(e, "success"))
                }
                ), 500)
            }
            ,
            AdsLight.getFreeBlockID = function(_) {
                let e;
                for (let t in _)
                    if (_.hasOwnProperty(t) && (e = _[t],
                    !(0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)(e)))
                        return e;
                return !1
            }
            ,
            AdsLight.getBusyBlockID = function(_, e) {
                let t;
                for (let i in _)
                    if (_.hasOwnProperty(i)) {
                        if (t = _[i],
                        e && e === t)
                            continue;
                        if ((0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)(t))
                            return t
                    }
                return !1
            }
            ,
            AdsLight.checkWmgMessage = function(_, e, t, i) {
                "ads_wmg_no_ad" === _.data && AdsLight.onWmgRenderUnsuccessful(e, t.slice(i + 1))
            }
            ,
            AdsLight.initGPT = function(_, e) {
                if (vk__adsLight.GPTLoadTries++,
                vk__adsLight.GPTLoading)
                    return;
                if (vk__adsLight.GPTLoaded)
                    return;
                vk__adsLight.GPTLoading = !0,
                vk__adsLight.GPTBlocks = ["ads_tgb_google_0", "ads_tgb_google_1"];
                let t = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.geByTag1)("script")
                  , i = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ce)("script", {
                    type: "text/javascript",
                    async: !0,
                    src: "https://www.googletagservices.com/tag/js/gpt.js"
                });
                t.parentNode.insertBefore(i, t),
                window.googletag = window.googletag || {},
                googletag.cmd = googletag.cmd || [],
                vk__adsLight.GPTAdSlots = {},
                googletag.cmd.push((function() {
                    (0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_7__.each)(vk__adsLight.GPTBlocks, (function(_, e) {
                        let t = googletag.defineSlot("/21802649096/vk_native_left", ["fluid"], e);
                        vk__adsLight.GPTAdSlots[e] = t,
                        t.addService(googletag.pubads())
                    }
                    )),
                    googletag.pubads().enableSingleRequest(),
                    googletag.pubads().addEventListener("slotRenderEnded", (function(t) {
                        AdsLight.initGoogleRenderFinished(t, _, e, vk__adsLight.GPTBlocks)
                    }
                    )),
                    googletag.pubads().disableInitialLoad(),
                    googletag.enableServices(),
                    vk__adsLight.GPTLoading = !1,
                    vk__adsLight.GPTLoaded = !0
                }
                ))
            }
            ,
            AdsLight.onGPTRenderUnsuccessful = function(_, e) {
                vk__adsLight.GPTLoading = !1,
                AdsLight.sendExperimentStat(_, "fail"),
                AdsLight.tryExperiment(e)
            }
            ,
            AdsLight.tryRenderGPT = function(_, e, t) {
                if (vk__adsLight.GPTLoading)
                    return;
                if (vk__adsLight.GPTLoading = !0,
                !(window && window.googletag && window.googletag.apiReady && vk__adsLight.GPTLoaded))
                    return void AdsLight.onGPTRenderUnsuccessful(_, t);
                let i = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("ads_left");
                if (!i)
                    return void AdsLight.onGPTRenderUnsuccessful(_, t);
                let d = AdsLight.getBusyBlockID(vk__adsLight.GPTBlocks)
                  , s = AdsLight.getFreeBlockID(vk__adsLight.GPTBlocks);
                if (s) {
                    if (d) {
                        let _ = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)(d)
                          , e = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.getSize)(i)[1];
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.setStyle)(i, {
                            minHeight: e,
                            maxHeight: e
                        }),
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.setStyle)(_, {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%"
                        }),
                        _ = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ce)("div", {
                            id: s
                        }, {
                            maxHeight: 0,
                            overflow: "hidden"
                        }),
                        i.appendChild(_)
                    } else {
                        let _ = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ce)("div", {
                            id: s
                        }, {
                            maxHeight: 0,
                            overflow: "hidden"
                        });
                        if (i.innerHTML)
                            return AdsLight.showNewBlock(i, "", !0),
                            void setTimeout((function() {
                                (0,
                                _web_lib_dom__WEBPACK_IMPORTED_MODULE_8__.ge)("ads_left").innerHTML = "",
                                AdsLight.tryExperiment(e)
                            }
                            ), 1e3);
                        i.appendChild(_)
                    }
                    googletag.cmd.push(function(_, e) {
                        AdsLight.sendExperimentStat(e, "try"),
                        googletag.pubads().refresh([vk__adsLight.GPTAdSlots[_]]),
                        googletag.display(_)
                    }
                    .pbind(s, _))
                } else
                    AdsLight.onGPTRenderUnsuccessful(_, t)
            }
            ,
            AdsLight.resetCopyMarkerText = function() {
                const _ = document.querySelector("[data-marker_id_copied]");
                _ && setTimeout((()=>{
                    _.removeAttribute("data-marker_id_copied")
                }
                ), 100)
            }
            ,
            Object.defineProperty && (0,
            _shared_user_user_env__WEBPACK_IMPORTED_MODULE_11__.partConfigEnabled)("ads_light_methods_protection"))
                for (let _ in AdsLight)
                    AdsLight.hasOwnProperty(_) && "function" == typeof AdsLight[_] && Object.defineProperty(AdsLight, _, {
                        value: AdsLight[_],
                        writable: !1
                    });
            function _defineInObj(_, e, t) {
                try {
                    Object.defineProperty ? Object.defineProperty(_, e, {
                        value: t,
                        writable: !1
                    }) : _[e] = t
                } catch (_) {}
            }
            isVkDomain && ("__adsLoaded"in window || (window.__adsLoaded = (0,
            _shared_lib_common__WEBPACK_IMPORTED_MODULE_1__.vkNow)()),
            _defineInObj(window, "AdsLight", AdsLight))
        }
    }, __webpack_module_cache__ = {}, deferred, leafPrototypes, getProto;
    function __webpack_require__(_) {
        var e = __webpack_module_cache__[_];
        if (void 0 !== e)
            return e.exports;
        var t = __webpack_module_cache__[_] = {
            exports: {}
        };
        return __webpack_modules__[_].call(t.exports, t, t.exports, __webpack_require__),
        t.exports
    }
    __webpack_require__.m = __webpack_modules__,
    deferred = [],
    __webpack_require__.O = (_,e,t,i)=>{
        if (!e) {
            var d = 1 / 0;
            for (n = 0; n < deferred.length; n++) {
                for (var [e,t,i] = deferred[n], s = !0, o = 0; o < e.length; o++)
                    (!1 & i || d >= i) && Object.keys(__webpack_require__.O).every((_=>__webpack_require__.O[_](e[o]))) ? e.splice(o--, 1) : (s = !1,
                    i < d && (d = i));
                if (s) {
                    deferred.splice(n--, 1);
                    var a = t();
                    void 0 !== a && (_ = a)
                }
            }
            return _
        }
        i = i || 0;
        for (var n = deferred.length; n > 0 && deferred[n - 1][2] > i; n--)
            deferred[n] = deferred[n - 1];
        deferred[n] = [e, t, i]
    }
    ,
    __webpack_require__.n = _=>{
        var e = _ && _.__esModule ? ()=>_.default : ()=>_;
        return __webpack_require__.d(e, {
            a: e
        }),
        e
    }
    ,
    getProto = Object.getPrototypeOf ? _=>Object.getPrototypeOf(_) : _=>_.__proto__,
    __webpack_require__.t = function(_, e) {
        if (1 & e && (_ = this(_)),
        8 & e)
            return _;
        if ("object" == typeof _ && _) {
            if (4 & e && _.__esModule)
                return _;
            if (16 & e && "function" == typeof _.then)
                return _
        }
        var t = Object.create(null);
        __webpack_require__.r(t);
        var i = {};
        leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
        for (var d = 2 & e && _; "object" == typeof d && !~leafPrototypes.indexOf(d); d = getProto(d))
            Object.getOwnPropertyNames(d).forEach((e=>i[e] = ()=>_[e]));
        return i.default = ()=>_,
        __webpack_require__.d(t, i),
        t
    }
    ,
    __webpack_require__.d = (_,e)=>{
        for (var t in e)
            __webpack_require__.o(e, t) && !__webpack_require__.o(_, t) && Object.defineProperty(_, t, {
                enumerable: !0,
                get: e[t]
            })
    }
    ,
    __webpack_require__.e = ()=>Promise.resolve(),
    __webpack_require__.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (_) {
            if ("object" == typeof window)
                return window
        }
    }(),
    __webpack_require__.o = (_,e)=>Object.prototype.hasOwnProperty.call(_, e),
    __webpack_require__.r = _=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(_, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(_, "__esModule", {
            value: !0
        })
    }
    ,
    __webpack_require__.p = "/dist/",
    (()=>{
        var _ = {
            73004: 0
        };
        __webpack_require__.O.j = e=>0 === _[e];
        var e = (e,t)=>{
            var i, d, [s,o,a] = t, n = 0;
            if (s.some((e=>0 !== _[e]))) {
                for (i in o)
                    __webpack_require__.o(o, i) && (__webpack_require__.m[i] = o[i]);
                if (a)
                    var r = a(__webpack_require__)
            }
            for (e && e(t); n < s.length; n++)
                d = s[n],
                __webpack_require__.o(_, d) && _[d] && _[d][0](),
                _[d] = 0;
            return __webpack_require__.O(r)
        }
          , t = self.webpackChunkvk = self.webpackChunkvk || [];
        t.forEach(e.bind(null, 0)),
        t.push = e.bind(null, t.push.bind(t))
    }
    )();
    var __webpack_exports__ = __webpack_require__.O(void 0, [75514, 68592], (()=>__webpack_require__(557228)));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__)
}
)();
