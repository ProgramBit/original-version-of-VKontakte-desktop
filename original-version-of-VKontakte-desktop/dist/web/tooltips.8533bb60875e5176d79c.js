// tooltips.8533bb60875e5176d79c.js?faeb3a356818628e3530bf19352a3370
(()=>{
    "use strict";
    var __webpack_modules__ = {
        157475: (_,t,e)=>{
            var o, i, l, n = e(824478);
            (null == (i = window.vk) || null == (o = i.pe) ? void 0 : o.static_manager_dynamic_imports) && (null == (l = window.vk) ? void 0 : l.stDomain) && (e.p = window.vk.stDomain + "/dist/"),
            window.tooltips = n.tooltips;
            try {
                window.stManager.done(window.jsc("web/tooltips.js"))
            } catch (_) {}
        }
        ,
        824478: (__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{
            __webpack_require__.d(__webpack_exports__, {
                tooltips: ()=>tooltips
            });
            var _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(664988)
              , _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(953908)
              , _web_lib_fx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(893106)
              , _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82161)
              , _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(795558)
              , _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(643897);
            const tooltips = {
                show: function(el, options) {
                    if (window.AudioPage && window.AudioPage.forceFix && window.AudioPage.forceFix(),
                    el.hidetimer)
                        return el.hidetimer && clearTimeout(el.hidetimer),
                        void (el.hidetimer = 0);
                    if (!el.tt)
                        return;
                    if ("object" == typeof el.tt && (el.tt.shown = !1),
                    el.ttimer && clearTimeout(el.ttimer),
                    (0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options.text)) {
                        const _ = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domByClass)(el.tt.container, "tt_text");
                        if (_) {
                            const t = options.text();
                            if (!t)
                                return;
                            _.innerHTML = t
                        }
                    }
                    const opts = (0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.extend)(el.tt.opts ? (0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.clone)(el.tt.opts) : {}, options || {})
                      , isNewTT = void 0 !== opts.dir;
                    if (!el.tt.el)
                        return el.tt = "show",
                        void (el.ttimer = setTimeout((function() {
                            if (el.tt.el)
                                return opts.showdt = 0,
                                void tooltips.show(el, opts);
                            el.tt = "shownow"
                        }
                        ), opts.showdt || 0));
                    let canshow;
                    if (opts.js) {
                        const evalString = "(function(){return function(){var tip=this;" + opts.js + "};})()";
                        try {
                            const evalResult = eval(evalString)
                              , evalApply = evalResult.apply(el.tt);
                            canshow = !1 !== evalApply
                        } catch (_) {
                            (0,
                            _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_5__.logEvalError)(_, evalString)
                        }
                    } else
                        canshow = !0;
                    canshow && ((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.isVisible)(el.tt.container) ? el.tt.showing || (0,
                    _web_lib_fx__WEBPACK_IMPORTED_MODULE_2__.animate)(el.tt.container, {
                        opacity: 1
                    }, void 0 !== opts.showsp ? opts.showsp : 200) : el.ttimer = setTimeout((function() {
                        const _ = el.tt.container;
                        if ((0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.isVisible)(_))
                            return;
                        const t = opts.forcexy ? opts.forcexy : (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getXY)(el)
                          , e = opts.forcesize ? opts.forcesize : (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getSize)(el, !1, !0);
                        let o = opts.toup;
                        const i = vk.rtl && !opts.asrtl || opts.asrtl && !vk.rtl
                          , l = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.ge)("page_header_wrap") && (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.isAncestor)(el, "page_layout") ? (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getSize)("page_header_wrap") : (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.ge)("ads-app-header") ? (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getSize)("ads-app-header") : [0, 0];
                        if (!e[0] && !e[1])
                            return void (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hide)(el.tt.container);
                        _.style.opacity = 0,
                        opts.width && (_.style.width = opts.width + "px"),
                        opts.maxWidth && (_.style["max-width"] = opts.maxWidth + "px"),
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.show)(_),
                        isNewTT || (_.firstChild.className = "toup" + (opts.toup ? 1 : ""));
                        let n = opts.shift;
                        (0,
                        _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isFunction)(n) && (n = n()),
                        void 0 !== n && 2 == n.length && n.push(n[1]);
                        let s = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domPN)(_);
                        const r = document.body.scrollTop || htmlNode.scrollTop || 0;
                        let d = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getSize)(_);
                        const E = t[1] - d[1] - n[1] - l[1] - r
                          , a = lastWindowHeight - (t[1] + e[1] + d[1] + n[2]) + r
                          , c = E < 0
                          , b = a < 0;
                        let p = E < 0;
                        c && b ? (E > a && E + r > 0 && (o = !0,
                        p = !1),
                        o && p ? o = !1 : o || !b || p || (o = !0)) : o && c ? o = !1 : o || !b || c || (o = !0);
                        let w = opts.needLeft || (opts.black || opts.checkLeft) && window.lastWindowWidth && lastWindowWidth - (t[0] + (i ? e[0] + n[0] : d[0] - n[0])) < 1
                          , P = "";
                        opts.forceright && (w = 0),
                        opts.forcetodown && (o = !1),
                        opts.forcetoup && (o = !0),
                        isNewTT ? ((0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.removeClass)(_, "tt_up"),
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.removeClass)(_, "tt_down"),
                        P = opts.dir && (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.inArray)(opts.dir, ["up", "down", "left", "right"]) ? "tt_" + opts.dir : "tt_" + (o ? "down" : "up"),
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.addClass)(_, P),
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.toggleClass)(_, "toleft", !!w),
                        d = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getSize)(_)) : (P = "toup" + (o ? 1 : ""),
                        (o != opts.toup || w) && (P += w ? " toleft" : "",
                        d = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getSize)(_)),
                        _.firstChild.className = P,
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.addClass)(_, o ? "tt_toup" : ""));
                        const O = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getXY)(s);
                        if (t[0] -= O[0],
                        t[1] -= O[1],
                        el.tt.zIndexEls = [],
                        !opts.noZIndex)
                            for (; s && s != document.body && !(0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hasClass)(s, "scroll_fix"); ) {
                                const _ = (0,
                                _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.intval)((0,
                                _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getStyle)(s, "zIndex"))
                                  , t = (0,
                                _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.intval)(s.ttCount);
                                if (_ && !t)
                                    break;
                                (0,
                                _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.setStyle)(s, "zIndex", opts.zIndex || 100),
                                el.tt.zIndexEls.push(s),
                                s.ttCount = t + 1,
                                s = (0,
                                _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domPN)(s)
                            }
                        let u;
                        u = isNewTT ? !(0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.inArray)(opts.dir, ["left", "right"]) || opts.forcetoup || opts.forcetodown ? o ? t[1] - (d[1] + n[1]) : t[1] + e[1] + n[2] : t[1] - Math.floor(d[1] / 2) - n[1] : t[1] + (o ? -(d[1] + n[1]) : e[1] + n[2]);
                        const m = u + (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.intval)(opts.slide) * (o ? -1 : 1);
                        let M = t[0] + (i ? n[0] + e[0] - d[0] : o ? -n[0] : -(n[3] || n[0]));
                        w && (M -= (d[0] - (opts.reverseOffset || 39)) * (i ? -1 : 1)),
                        opts.center && ((0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.addClass)(_, "tocenter"),
                        d[0] != e[0] && (M -= i ? 0 : (d[0] - e[0]) / 2));
                        const D = M + (i ? -1 : 1) * (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.intval)(opts.slideX);
                        if (opts.showIfFit && (M + O[0] < 0 || M + O[0] + d[0] > lastWindowWidth || u + O[1] < 0 || u + O[1] + d[1] > lastWindowHeight))
                            return (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hide)(el.tt.container);
                        el.tt.showing = !0,
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.setStyle)(_, {
                            top: m,
                            left: D
                        });
                        const h = {
                            opacity: 1
                        };
                        D != M && (h.left = M),
                        m != u && (h.top = u),
                        (0,
                        _web_lib_fx__WEBPACK_IMPORTED_MODULE_2__.animate)(_, h, void 0 !== opts.showsp ? opts.showsp : 200, (function() {
                            el.tt && el.tt.showing && (el.tt.showing = !1),
                            opts.onShowEnd && opts.onShowEnd(),
                            "object" == typeof el.tt && el.tt && (el.tt.shown = !0)
                        }
                        )),
                        opts.onShowStart && opts.onShowStart(el.tt)
                    }
                    ), opts.showdt || 0))
                },
                clearZindex: function(_) {
                    _.tt && _.tt.opts && _.tt.zIndexEls && (0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.each)(_.tt.zIndexEls, (function() {
                        const _ = (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.intval)(this.ttCount);
                        _ <= 1 ? ((0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.setStyle)(this, "zIndex", ""),
                        this.ttCount = 0) : this.ttCount = _ - 1
                    }
                    ))
                },
                hide: function(_, t) {
                    if ("shownow" !== _.tt) {
                        if (_.tt && "object" == typeof _.tt && (_.tt.shown = !1),
                        (t || {}).fasthide)
                            return clearTimeout(_.hidetimer),
                            clearTimeout(_.ttimer),
                            _.hidetimer = 0,
                            _.tt && _.tt.el && (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hide)(_.tt.container),
                            void tooltips.clearZindex(_);
                        _.hidetimer || (_.hidetimer = setTimeout((function() {
                            if (_.hidetimer = 0,
                            clearTimeout(_.ttimer),
                            !_.tt || "hide" == _.tt || _.tt.el && !(0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.isVisible)(_.tt.container))
                                return _.tt && _.tt.el && (0,
                                _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hide)(_.tt.container),
                                void tooltips.clearZindex(_);
                            const e = (0,
                            _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.extend)(_.tt.opts ? (0,
                            _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.clone)(_.tt.opts) : {}, t || {});
                            _.tt.el ? _.ttimer = setTimeout((function() {
                                e.hasover || (0,
                                _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.setStyle)(_.tt.container, {
                                    pointerEvents: "none"
                                }),
                                (0,
                                _web_lib_fx__WEBPACK_IMPORTED_MODULE_2__.fadeOut)(_.tt.container, void 0 !== e.showsp ? e.showsp : 200, (function() {
                                    _.tt && _.tt.container && (0,
                                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.setStyle)(_.tt.container, {
                                        pointerEvents: "auto"
                                    }),
                                    tooltips.clearZindex(_)
                                }
                                )),
                                e.onHide && e.onHide()
                            }
                            ), e.hidedt || 0) : _.tt = "hide"
                        }
                        ), 1))
                    }
                },
                hideAll: function(_) {
                    if (cur.tooltips)
                        for (let t = 0; t < cur.tooltips.length; ++t) {
                            const e = cur.tooltips[t];
                            _ && !(0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.isAncestor)(e.el, _) || (e.opts.forceNoHide || (e.el && e.el.ttimer && clearTimeout(e.el.ttimer),
                            e.hide({
                                fasthide: !0
                            })))
                        }
                },
                rePositionTT: function(_) {
                    if (!_)
                        return;
                    const t = _.opts
                      , e = _.el
                      , o = _.container
                      , i = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getXY)(e)
                      , l = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getSize)(e, !1, !0);
                    if (!l[0] && !l[1])
                        return;
                    const n = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getSize)(o)
                      , s = t.needLeft || t.black && lastWindowWidth && lastWindowWidth - (i[0] + n[0]) < 1
                      , r = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hasClass)(o.firstChild, "toup1") || t.toup || (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hasClass)(o, "tt_down");
                    let d = t.shift;
                    const E = vk.rtl && !t.asrtl || t.asrtl && !vk.rtl;
                    (0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isFunction)(d) && (d = d());
                    const a = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getXY)((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domPN)(o));
                    i[0] -= a[0],
                    i[1] -= a[1];
                    let c = i[0] + (E ? d[0] + l[0] - n[0] : r ? -d[0] : -(d[3] || d[0]));
                    s && (c -= n[0] - 39),
                    t.center && n[0] != l[0] && (c -= (n[0] - l[0]) / 2);
                    const b = i[1] + (r ? -(n[1] + d[1]) : l[1] + d[2]);
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.setStyle)(o, {
                        left: c,
                        top: b
                    })
                },
                rePositionAll: function() {
                    if (cur.tooltips)
                        for (let _ = 0; _ < cur.tooltips.length; ++_) {
                            const t = cur.tooltips[_].opts;
                            t && (t.nohideover || t.nohide) && tooltips.rePositionTT(cur.tooltips[_])
                        }
                },
                destroy: function(_) {
                    if (_) {
                        if (clearTimeout(_.ttimer),
                        clearTimeout(_.hidetimer),
                        _.tt && _.tt.el) {
                            if (_.tt.onClean && _.tt.onClean(),
                            (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.cleanElems)(_.tt.container),
                            (0,
                            _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.removeEvent)(_, "mouseout", _.tthide),
                            (0,
                            _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.removeEvent)(_, "click", _.tthide),
                            (0,
                            _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.removeEvent)(window, "scroll", _.tthide),
                            (0,
                            _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.removeEvent)(document, "click", _.tthide),
                            _.tt.container) {
                                const t = (0,
                                _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domPN)(_.tt.container);
                                t && t.removeChild(_.tt.container)
                            }
                            tooltips.clearZindex(_),
                            _.tt.el = !1
                        }
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.removeAttr)(_, "tt", "tthide", "ttimer", "hidetimer")
                    }
                },
                destroyAll: function(_) {
                    if (cur.tooltips) {
                        for (let t = 0; t < cur.tooltips.length; ++t)
                            _ && !(0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.isAncestor)(cur.tooltips[t].el, _) || cur.tooltips[t].destroy();
                        _ || delete cur.tooltips
                    }
                },
                create: function(_, t) {
                    let e;
                    void 0 !== t.shift && 2 == t.shift.length && t.shift.push(t.shift[1]);
                    const o = (0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.extend)({
                        shift: t.black ? [11, 8, 8] : void 0 !== t.dir ? [2, 8, 8] : [2, 3, 3],
                        toup: !0
                    }, t);
                    t.black && !o.dir && (o.dir = "auto",
                    o.typeClass = "tt_black"),
                    _.tthide || (_.tthide = tooltips.hide.pbind(_),
                    t.nohide || ((0,
                    _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.addEvent)(_, "mouseout", _.tthide),
                    (0,
                    _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.addEvent)(window, "scroll", _.tthide),
                    t.hideOnTooltipContainerClick || (0,
                    _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.addEvent)(_, "click", _.tthide),
                    t.hasover || (0,
                    _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.addEvent)(document, "click", _.tthide)));
                    const i = o.no_shadow ? " tt_no_shadow" : "";
                    if (!o.content) {
                        if (_.tt && !o.force)
                            return _.hidetimer ? (clearTimeout(_.hidetimer),
                            void (_.hidetimer = 0)) : void 0;
                        if (!o.text) {
                            if (!o.url)
                                return;
                            return clearTimeout(_.ttimer),
                            void (_.ttimer = setTimeout((function() {
                                _.tt = "show",
                                ajax.post(o.url, o.params || {}, {
                                    onDone: function(t, e) {
                                        const i = _.tt
                                          , l = (0,
                                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.clone)(o);
                                        (0,
                                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.extend)(l, {
                                            content: t || "",
                                            js: e
                                        }),
                                        tooltips.create(_, l),
                                        "shownow" == i && tooltips.show(_, (0,
                                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.extend)(l, {
                                            showdt: 0
                                        }))
                                    },
                                    onFail: function() {
                                        return !0
                                    },
                                    cache: o.cache || 0
                                }),
                                tooltips.show(_, o)
                            }
                            ), o.ajaxdt || 0))
                        }
                        o.content = '<div class="tt_text">' + ((0,
                        _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isFunction)(o.text) ? o.text() : o.text),
                        o.link && (o.content += '<br /><a style="display: flex; margin-top: 8px" target="_blank" href="' + o.link.link + '">' + o.link.text + "</a>"),
                        o.content += "</div>"
                    }
                    let l;
                    l = void 0 !== o.dir ? "tt_w" : "tt";
                    const n = l + " " + (void 0 !== o.dir ? o.typeClass || "tt_default" : "") + " " + (o.className || "");
                    if (_.tt && _.tt.el) {
                        const e = _.tt.container;
                        _.tt.onClean && _.tt.onClean(),
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.geByClass1)("wrapped", e).innerHTML = o.content,
                        (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.extend)(_.tt, {
                            opts: o,
                            show: tooltips.show.pbind(_, t)
                        }),
                        e.className = n,
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hide)(e)
                    } else {
                        let l;
                        l = o.black ? (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.ce)("div", {
                            innerHTML: o.content,
                            className: n
                        }, {
                            display: "none"
                        }) : void 0 !== o.dir ? (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.ce)("div", {
                            innerHTML: '<div class="wrapped">' + o.content + "</div>",
                            className: n + i
                        }, {
                            display: "none"
                        }) : (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.ce)("div", {
                            innerHTML: `<table cellspacing="0" cellpadding="0">\n    <tr><td colspan="3" class="tt_top"><div class="top_pointer"></div></td></tr>\n    <tr>\n      <td class="side_sh"></td>\n      <td class="outer"><table cellspacing="0" cellpadding="0">\n        <tr><td class="side_sh"></td>\n          <td class="wrapped">${o.content}</td>\n        <td class="side_sh"></td></tr>\n        <tr><td colspan="3"><div class="bottom_sh"></div></td></tr>\n      </table></td>\n      <td class="side_sh"></td>\n    </tr>\n    <tr><td colspan="3" class="tt_bottom"><div class="bottom_sh"></div><div class="bottom_pointer ${i}"></div></td></tr>\n  </table>`,
                            className: n
                        }, {
                            display: "none"
                        });
                        let s = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domPN)(_);
                        if (t.appendEl)
                            s = t.appendEl;
                        else if (t.appendParentCls)
                            s = (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domClosest)(t.appendParentCls, s);
                        else if (s = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domClosest)("tt_w", s) || (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domClosest)("tt_default", s),
                        !s)
                            do {
                                s = (0,
                                _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domClosestPositioned)(s || _, {
                                    noOverflow: !0
                                })
                            } while ((0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hasClass)(s, "tt_noappend"));
                        s || (s = document.body),
                        s.appendChild(l),
                        e = (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.extend)({
                            el: _,
                            opts: o,
                            show: tooltips.show.pbind(_, t),
                            hide: _.tthide,
                            destroy: tooltips.destroy.pbind(_),
                            container: l
                        }, o.tip || {}),
                        o.nohideover || o.text && !o.hasover || ((0,
                        _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.addEvent)(l, "mouseover", e.show),
                        (0,
                        _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.addEvent)(l, "mouseout", e.hide)),
                        o.hideOnTooltipContainerClick && (0,
                        _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.addEvent)(l, "click", e.hide),
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.removeClass)(e.container, "fixed"),
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.setStyle)(e.container, {
                            position: "absolute"
                        }),
                        _.tt = e,
                        cur.tooltips || (cur.tooltips = []),
                        cur.tooltips.push(e)
                    }
                    o.init && o.init(e)
                },
                addAudio: function(_, t, e, o) {
                    ajax.post("audio.php", {
                        act: "a_add",
                        oid: t,
                        aid: e,
                        hash: o
                    }, {
                        onDone: function() {
                            _.parentNode.replaceChild((0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.ce)("div", {
                                className: "fl_r add_audio_plus done"
                            }), _)
                        },
                        onFail: function() {
                            return !0
                        },
                        showProgress: function() {
                            (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hide)(_.nextSibling),
                            (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.show)(_.previousSibling)
                        },
                        hideProgress: function() {
                            (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hide)(_.previousSibling),
                            (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.show)(_.nextSibling)
                        }
                    })
                }
            }
        }
    }, __webpack_module_cache__ = {}, deferred, leafPrototypes, getProto;
    function __webpack_require__(_) {
        var t = __webpack_module_cache__[_];
        if (void 0 !== t)
            return t.exports;
        var e = __webpack_module_cache__[_] = {
            exports: {}
        };
        return __webpack_modules__[_].call(e.exports, e, e.exports, __webpack_require__),
        e.exports
    }
    __webpack_require__.m = __webpack_modules__,
    deferred = [],
    __webpack_require__.O = (_,t,e,o)=>{
        if (!t) {
            var i = 1 / 0;
            for (r = 0; r < deferred.length; r++) {
                for (var [t,e,o] = deferred[r], l = !0, n = 0; n < t.length; n++)
                    (!1 & o || i >= o) && Object.keys(__webpack_require__.O).every((_=>__webpack_require__.O[_](t[n]))) ? t.splice(n--, 1) : (l = !1,
                    o < i && (i = o));
                if (l) {
                    deferred.splice(r--, 1);
                    var s = e();
                    void 0 !== s && (_ = s)
                }
            }
            return _
        }
        o = o || 0;
        for (var r = deferred.length; r > 0 && deferred[r - 1][2] > o; r--)
            deferred[r] = deferred[r - 1];
        deferred[r] = [t, e, o]
    }
    ,
    __webpack_require__.n = _=>{
        var t = _ && _.__esModule ? ()=>_.default : ()=>_;
        return __webpack_require__.d(t, {
            a: t
        }),
        t
    }
    ,
    getProto = Object.getPrototypeOf ? _=>Object.getPrototypeOf(_) : _=>_.__proto__,
    __webpack_require__.t = function(_, t) {
        if (1 & t && (_ = this(_)),
        8 & t)
            return _;
        if ("object" == typeof _ && _) {
            if (4 & t && _.__esModule)
                return _;
            if (16 & t && "function" == typeof _.then)
                return _
        }
        var e = Object.create(null);
        __webpack_require__.r(e);
        var o = {};
        leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
        for (var i = 2 & t && _; "object" == typeof i && !~leafPrototypes.indexOf(i); i = getProto(i))
            Object.getOwnPropertyNames(i).forEach((t=>o[t] = ()=>_[t]));
        return o.default = ()=>_,
        __webpack_require__.d(e, o),
        e
    }
    ,
    __webpack_require__.d = (_,t)=>{
        for (var e in t)
            __webpack_require__.o(t, e) && !__webpack_require__.o(_, e) && Object.defineProperty(_, e, {
                enumerable: !0,
                get: t[e]
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
    __webpack_require__.o = (_,t)=>Object.prototype.hasOwnProperty.call(_, t),
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
            55954: 0
        };
        __webpack_require__.O.j = t=>0 === _[t];
        var t = (t,e)=>{
            var o, i, [l,n,s] = e, r = 0;
            if (l.some((t=>0 !== _[t]))) {
                for (o in n)
                    __webpack_require__.o(n, o) && (__webpack_require__.m[o] = n[o]);
                if (s)
                    var d = s(__webpack_require__)
            }
            for (t && t(e); r < l.length; r++)
                i = l[r],
                __webpack_require__.o(_, i) && _[i] && _[i][0](),
                _[i] = 0;
            return __webpack_require__.O(d)
        }
          , e = self.webpackChunkvk = self.webpackChunkvk || [];
        e.forEach(t.bind(null, 0)),
        e.push = t.bind(null, e.push.bind(e))
    }
    )();
    var __webpack_exports__ = __webpack_require__.O(void 0, [75514, 68592], (()=>__webpack_require__(157475)));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__)
}
)();
