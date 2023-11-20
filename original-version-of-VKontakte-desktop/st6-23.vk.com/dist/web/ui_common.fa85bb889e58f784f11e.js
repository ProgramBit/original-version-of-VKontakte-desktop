(()=>{
    "use strict";
    var __webpack_modules__ = {
        526818: (t,e,i)=>{
            var s, o, n, _ = i(478381), l = i(981582), r = i(258810), a = i(976231), h = i(542588), d = i(258016), c = i(842939), u = i(979978), p = i(300906), b = i(283548), m = i(276125);
            i(35148);
            (null == (o = window.vk) || null == (s = o.pe) ? void 0 : s.static_manager_dynamic_imports) && (null == (n = window.vk) ? void 0 : n.stDomain) && (i.p = window.vk.stDomain + "/dist/"),
            window.uiTabs = _.default,
            window.uiActionsMenu = l.default,
            window.uiRightMenu = a.default,
            window.uiPageBlock = h.default,
            window.uiSearch = d.default,
            window.uiScrollBox = c.default,
            window.uiPhotoZoom = u.default,
            window.Scrollbar = window.Scrollbar || p.default,
            window.OList = b.default,
            window.UiScroll = r.default,
            window.uiScroll = r.default,
            window.Slider = m.default;
            try {
                window.stManager.done(window.jsc("web/ui_common.js"))
            } catch (t) {}
        }
        ,
        957518: (t,e,i)=>{
            i.d(e, {
                isKeyboardActivationEvent: ()=>o
            });
            var s = i(953908);
            const o = t=>!!(window.KeyboardEvent && t instanceof window.KeyboardEvent) && (!(t.ctrlKey || t.altKey || t.metaKey) && !![s.KEY.ENTER, s.KEY.SPACE].includes(t.keyCode))
        }
        ,
        300906: (t,e,i)=>{
            i.d(e, {
                default: ()=>u
            });
            var s = i(82161)
              , o = i(953908)
              , n = i(301230)
              , _ = i(795558)
              , l = i(893106);
            function r(t) {
                if (!this.inited)
                    return !1;
                if (t || (t = window.event),
                this.isHorizontal) {
                    const e = Math.floor((this.contWidth() - this.scrollWidth) * Math.min(1, (t.screenX - this.moveX) / (this.scrollbarSize - this.innerWidth - 6)));
                    (0,
                    s.isFunction)(this.options.onScroll) && this.options.onScroll(this.obj.scrollLeft - e, this),
                    this.obj.scrollLeft = e
                } else {
                    const e = Math.floor((this.contHeight() - this.scrollHeight) * Math.min(1, (t.screenY - this.moveY) / (this.scrollbarSize - this.innerHeight - 6)));
                    (0,
                    s.isFunction)(this.options.onScroll) && this.options.onScroll(this.obj.scrollTop - e, this),
                    this.obj.scrollTop = e
                }
                return this.update(!0),
                !1
            }
            function a() {
                return !!this.inited && (this.moveY = this.moveX = this.isDown = !1,
                this.isOut && this.contOut(),
                (0,
                o.removeEvent)(document, "mousemove", this.mouseMove),
                (0,
                o.removeEvent)(document, "mouseup", this.mouseUp),
                (0,
                _.setStyle)(document.body, "cursor", "default"),
                (0,
                _.setStyle)(this.obj, {
                    pointerEvents: ""
                }),
                (0,
                _.removeClass)(this.inner, "scrollbar_hovered"),
                (0,
                s.isFunction)(this.options.stopDrag) && this.options.stopDrag(),
                (0,
                s.isFunction)(this.options.onHold) && this.options.onHold(!1),
                !1)
            }
            function h(t) {
                return !!this.inited && (this.moveY || (0,
                o.checkEvent)(t) ? void 0 : (t || (t = window.event),
                (0,
                o.addEvent)(document, "mousemove", this.mouseMove),
                (0,
                o.addEvent)(document, "mouseup", this.mouseUp),
                (0,
                _.setStyle)(document.body, "cursor", "pointer"),
                (0,
                _.setStyle)(this.obj, {
                    pointerEvents: "none"
                }),
                this.isHorizontal ? this.moveX = t.screenX - (this.inner.offsetLeft || 0) : this.moveY = t.screenY - (this.inner.offsetTop || 0),
                (0,
                _.addClass)(this.inner, "scrollbar_hovered"),
                (0,
                s.isFunction)(this.options.startDrag) && this.options.startDrag(),
                (0,
                s.isFunction)(this.options.onHold) && this.options.onHold(!0),
                this.isDown = !0,
                (0,
                o.cancelEvent)(t)))
            }
            function d(t) {
                switch (t || (t = window.event),
                t.keyCode) {
                case 40:
                    this.obj[this.scrollProp] += 40;
                    break;
                case 38:
                    this.obj[this.scrollProp] -= 40;
                    break;
                case 34:
                    this.obj[this.scrollProp] += this[this.scrollDimensionProp];
                    break;
                case 33:
                    this.obj[this.scrollProp] -= this[this.scrollDimensionProp];
                    break;
                default:
                    return !0
                }
                return this.update(!0),
                (0,
                o.cancelEvent)(t)
            }
            function c(t, e) {
                const i = this.wheel.bind(this);
                this.obj = t = (0,
                _.ge)(t),
                this.options = (0,
                s.extend)({
                    nomargin: !1,
                    horizontal: !1,
                    top: 0,
                    bottom: 0,
                    padding: 3,
                    prefix: "",
                    hidden: 0
                }, e || {}),
                this.isHorizontal = this.options.horizontal,
                this.scrollProp = this.isHorizontal ? "scrollLeft" : "scrollTop",
                this.scrollDimensionProp = this.isHorizontal ? "scrollWidth" : "scrollHeight",
                this.topShadow = !1,
                this.bottomShadow = !1,
                this[this.scrollProp + "Last"] = this.obj[this.scrollProp],
                this.destroyList = [],
                this.mouseDown = h.bind(this),
                this.mouseMove = r.bind(this),
                this.mouseUp = a.bind(this),
                this.initObjMouseWheel = function() {
                    (0,
                    o.addEvent)(t, n.browserFeatures.wheelEvent, i)
                }
                ,
                this.destroyObjMouseWheel = function() {
                    (0,
                    o.removeEvent)(t, n.browserFeatures.wheelEvent, i)
                }
                ,
                this.initScrollBarMouseWheel = function() {
                    (0,
                    o.addEvent)(this.scrollbar, n.browserFeatures.wheelEvent, i)
                }
                .bind(this),
                this.destroyScrollBarMouseWheel = function() {
                    (0,
                    o.removeEvent)(this.scrollbar, n.browserFeatures.wheelEvent, i)
                }
                .bind(this),
                setTimeout(function() {
                    (0,
                    _.setStyle)(t, {
                        overflow: "hidden"
                    }),
                    this.scrollbar = (0,
                    _.ce)("div", {
                        className: (this.options.prefix ? this.options.prefix + "scrollbar_cont " : "") + "scrollbar_cont" + (this.isHorizontal ? " scrollbar_cont_horiz" : "") + (this.options.hidden ? " scrollbar_hidden" : "")
                    }),
                    this.inner = (0,
                    _.ce)("div", {
                        className: (this.options.prefix ? this.options.prefix + "scrollbar_inner " : "") + "scrollbar_inner"
                    }),
                    this.scrollbar.appendChild(this.inner);
                    const e = this.widthUpdated();
                    this.options.shadows && (t.parentNode.insertBefore(this.topShadowDiv = (0,
                    _.ce)("div", {
                        className: (this.options.prefix ? this.options.prefix + "scrollbar_top " : "") + "scrollbar_top"
                    }, {
                        width: e[0]
                    }), t),
                    t.parentNode.insertBefore(this.bottomShadowDiv = (0,
                    _.ce)("div", {
                        className: (this.options.prefix ? this.options.prefix + "scrollbar_bottom " : "") + "scrollbar_bottom"
                    }, {
                        width: e[0]
                    }), t.nextSibling)),
                    t.parentNode.insertBefore(this.scrollbar, t);
                    const l = d.bind(this)
                      , r = function() {
                        this.initObjMouseWheel(),
                        (0,
                        o.removeEvent)(t, "mousemove", r)
                    }
                    .bind(this);
                    if ((0,
                    o.addEvent)(t, "mouseleave", this.destroyObjMouseWheel),
                    (0,
                    o.addEvent)(t, "mouseenter", this.initObjMouseWheel),
                    (0,
                    o.addEvent)(t, "mousemove", r),
                    (0,
                    o.addEvent)(this.scrollbar, "mouseenter", this.initScrollBarMouseWheel),
                    (0,
                    o.addEvent)(this.scrollbar, "mouseleave", this.destroyScrollBarMouseWheel),
                    this.options.scrollElements && (0,
                    s.each)(this.options.scrollElements, (function(t, e) {
                        (0,
                        o.addEvent)(e, n.browserFeatures.wheelEvent, i)
                    }
                    )),
                    (0,
                    o.addEvent)(this.scrollbar, "mouseover", this.contOver.bind(this)),
                    (0,
                    o.addEvent)(this.scrollbar, "mouseout", this.contOut.bind(this)),
                    (0,
                    o.addEvent)(this.scrollbar, "mousedown", this.contDown.bind(this)),
                    n.browser.safari_mobile) {
                        const e = function(t) {
                            this.isHorizontal ? cur.touchX = t.touches[0].pageX : cur.touchY = t.touches[0].pageY
                        }
                        .bind(this)
                          , i = function(e) {
                            return this.isHorizontal ? (cur.touchDiff = cur.touchX - (cur.touchX = e.touches[0].pageX),
                            t.scrollLeft += cur.touchDiff,
                            t.scrollLeft > 0 && !1 !== this.shown && this.update(!0)) : (cur.touchDiff = cur.touchY - (cur.touchY = e.touches[0].pageY),
                            t.scrollTop += cur.touchDiff,
                            t.scrollTop > 0 && !1 !== this.shown && this.update(!0)),
                            (0,
                            o.cancelEvent)(e)
                        }
                        .bind(this)
                          , s = function() {
                            cur.animateInt = setInterval(function() {
                                cur.touchDiff = .9 * cur.touchDiff,
                                cur.touchDiff < 1 && cur.touchDiff > -1 ? clearInterval(cur.animateInt) : (t[self.scrollProp] += cur.touchDiff,
                                this.update(!0))
                            }
                            .bind(this), 0)
                        }
                        .bind(this);
                        (0,
                        o.addEvent)(t, "touchstart", e),
                        (0,
                        o.addEvent)(t, "touchmove", i),
                        (0,
                        o.addEvent)(t, "touchend", s),
                        this.destroyList.push((function() {
                            (0,
                            o.removeEvent)(t, "touchstart", e),
                            (0,
                            o.removeEvent)(t, "touchmove", i),
                            (0,
                            o.removeEvent)(t, "touchend", s)
                        }
                        ))
                    }
                    (0,
                    o.addEvent)(this.inner, "mousedown", this.mouseDown),
                    this.options.nokeys ? this.onkeydown = l : (0,
                    o.addEvent)(window, "keydown", l),
                    this.destroyList.push(function() {
                        (0,
                        o.removeEvent)(t, n.browserFeatures.wheelEvent, i),
                        this.options.scrollElements && (0,
                        s.each)(this.options.scrollElements, (function(t, e) {
                            (0,
                            o.removeEvent)(e, n.browserFeatures.wheelEvent, i)
                        }
                        )),
                        (0,
                        o.removeEvent)(this.inner, "mousedown", this.mouseDown),
                        (0,
                        o.removeEvent)(window, "keydown", l),
                        (0,
                        o.removeEvent)(t, "mousemove", r),
                        (0,
                        _.re)(this.scrollbar)
                    }
                    .bind(this)),
                    this.isHorizontal || (this.contHeight() <= this.scrollHeight ? (0,
                    _.hide)(this.bottomShadowDiv) : this.bottomShadow = !0),
                    this.options.onInit && this.options.onInit(),
                    this.inited = !0,
                    this.update(!0),
                    this.options.global || cur.destroy.push(this.destroy.bind(this))
                }
                .bind(this), 0)
            }
            c.prototype = {
                wheel: function(t) {
                    if (this.disabled)
                        return;
                    t || (t = window.event);
                    let e = 0;
                    const i = this.obj[this.scrollProp]
                      , o = void 0 !== t.deltaMode ? t.deltaMode : "MozMousePixelScroll" == t.type ? 0 : 1;
                    return "wheel" == t.type ? e = -(this.isHorizontal ? t.deltaX : t.deltaY) : void 0 !== t.wheelDeltaX && void 0 !== t.wheelDeltaY ? (e = 1 / 40 * (this.isHorizontal ? t.wheelDeltaX : t.wheelDeltaY),
                    n.browser.mac && n.browser.opera && (e *= .1)) : void 0 !== t.wheelDelta ? e = 1 / 40 * t.wheelDelta : t.detail && t.axis === (this.isHorizontal ? 1 : 2) && (e = -t.detail),
                    e = 1 * e * (1 == o ? 15 : 2 == o ? 450 : 1),
                    e ? (this.obj[this.scrollProp] -= e,
                    (0,
                    s.isFunction)(this.options.onScroll) && this.options.onScroll(e, this),
                    i != this.obj[this.scrollProp] && !1 !== this.shown && (this.update(!0),
                    (0,
                    _.addClass)(this.inner, "scrollbar_hovered"),
                    clearTimeout(this.moveTimeout),
                    this.moveTimeout = setTimeout(function() {
                        (0,
                        _.removeClass)(this.inner, "scrollbar_hovered")
                    }
                    .bind(this), 300)),
                    !!(!this.shown && !this.options.forceCancelEvent || this.isHorizontal && i == this.obj[this.scrollProp]) && void 0) : void 0
                },
                setOptions: function(t) {
                    (0,
                    s.extend)(this.options, t)
                },
                widthUpdated: function() {
                    const t = (0,
                    _.getSize)(this.obj);
                    let e;
                    return e = this.isHorizontal ? {
                        marginLeft: this.options.top + "px",
                        marginTop: t[1] + 3 + "px",
                        width: t[0] - this.options.top - this.options.bottom + "px"
                    } : {
                        marginTop: this.options.top + "px",
                        marginLeft: this.options.nomargin ? 0 : t[0] - (this.options.mlDiff || 7) + "px",
                        height: t[1] - this.options.top - this.options.bottom + "px"
                    },
                    this.options.nomargin && (void 0 !== this.options.right && "auto" !== this.options.right ? (e.right = this.options.right,
                    e.left = "auto") : void 0 !== this.options.left && (e.right = "auto",
                    e.left = this.options.left)),
                    this.scrollWidth = t[0],
                    this.scrollHeight = t[1],
                    this.scrollbarSize = t[this.isHorizontal ? 0 : 1] - this.options.top - this.options.bottom,
                    (0,
                    _.setStyle)(this.scrollbar, e),
                    setTimeout(function() {
                        (0,
                        _.removeClass)(this.scrollbar, "no_transition")
                    }
                    .bind(this)),
                    t
                },
                contOver: function() {
                    this.isOut = !1,
                    this.shown && (0,
                    _.addClass)(this.scrollbar, "scrollbar_c_overed")
                },
                contOut: function() {
                    this.isOut = !0,
                    this.isDown || (0,
                    _.removeClass)(this.scrollbar, "scrollbar_c_overed")
                },
                contDown: function(t) {
                    if (t || (t = window.event),
                    this.isHorizontal) {
                        const e = t.offsetX - this.innerWidth / 2 + 5
                          , i = this.scrollbarSize - this.innerWidth;
                        this.obj.scrollLeft = Math.floor((this.contWidth() - this.scrollWidth) * Math.min(1, e / i))
                    } else {
                        const e = t.offsetY - this.innerHeight / 2 + 5
                          , i = this.scrollbarSize - this.innerHeight;
                        this.obj.scrollTop = Math.floor((this.contHeight() - this.scrollHeight) * Math.min(1, e / i))
                    }
                    this.update(!0),
                    this.mouseDown(t)
                },
                hide: function() {
                    (0,
                    _.hide)(this.topShadowDiv, this.bottomShadowDiv, this.scrollbar),
                    this.hidden = !0
                },
                show: function() {
                    (0,
                    _.show)(this.topShadowDiv, this.bottomShadowDiv, this.scrollbar),
                    this.hidden = !1
                },
                disable: function() {
                    this.hide(),
                    this[this.scrollProp](0),
                    this.disabled = !0
                },
                enable: function() {
                    this.show(),
                    this.update(),
                    this.disabled = !1
                },
                getScrollHeight: function() {
                    return this.scrollHeight
                },
                scrollTop: function(t) {
                    if (void 0 === t)
                        return this.obj.scrollTop;
                    this.obj.scrollTop = parseInt(t),
                    this.update(!1, !0)
                },
                scrollBottom: function(t) {
                    if (void 0 === t)
                        return this.contHeight() - this.scrollHeight - this.obj.scrollTop;
                    this.obj.scrollTop = this.contHeight(!0) - this.scrollHeight - t,
                    this.update(!0, !0)
                },
                smoothScroll: function(t, e, i) {
                    const s = this.obj.scrollTop + t;
                    void 0 === i && (i = 300);
                    const o = this;
                    new l.Fx.Base({
                        scrollTop: this.obj.scrollTop
                    },{
                        transition: l.Fx.Transitions.easeOutCubic,
                        onStep: function(t) {
                            o.obj.scrollTop = t.scrollTop,
                            o.update(!0)
                        },
                        duration: i,
                        onComplete: function() {
                            e && e(scroll)
                        }
                    }).start({
                        scrollTop: this.obj.scrollTop
                    }, {
                        scrollTop: s
                    })
                },
                scrollLeft: function(t) {
                    this.obj.scrollLeft = parseInt(t),
                    this.update(!1, !0)
                },
                destroy: function() {
                    (0,
                    s.each)(this.destroyList || [], (function(t, e) {
                        e()
                    }
                    ))
                },
                contHeight: function() {
                    return Math.round(this.options.contHeight || this.obj.scrollHeight)
                },
                contWidth: function() {
                    return Math.round(this.options.contWidth || this.obj.scrollWidth)
                },
                val: function(t) {
                    return t && (this.obj[this.scrollProp] = t,
                    this.update(!0, !0)),
                    this.obj[this.scrollProp]
                },
                update: function(t, e) {
                    if (!this.inited || this.hidden)
                        return;
                    if (!t && (this.isHorizontal ? this.moveX : this.moveY))
                        return !0;
                    let i, o;
                    if (e && (i = (0,
                    _.getSize)(this.obj),
                    this.isHorizontal ? (this.scrollWidth = i[0],
                    i = Math.round(this.scrollWidth - this.options.top - this.options.bottom),
                    this.scrollbarSize !== i && (this.scrollbar.style.width = i + "px")) : (this.scrollHeight = i[1],
                    i = Math.round(this.scrollHeight - this.options.top - this.options.bottom),
                    this.scrollbarSize !== i && (this.scrollbar.style.height = i + "px")),
                    this.scrollbarSize = i),
                    this.isHorizontal ? (i = this.contWidth()) <= Math.round(this.scrollWidth) : (i = this.contHeight()) <= Math.round(this.scrollHeight))
                        return (0,
                        _.hide)(this.inner, this.bottomShadowDiv, this.topShadowDiv),
                        this.scrollbar.style.pointerEvents = "none",
                        this.topShadow = this.bottomShadow = this.shown = !1,
                        (0,
                        s.isFunction)(this.options.more) && i - this.obj[this.scrollProp] < 2 * this[this.scrollDimensionProp] && this.options.more(this),
                        void (this[this.scrollProp + "Last"] = this.obj[this.scrollProp]);
                    this.shown || ((0,
                    _.show)(this.inner),
                    this.scrollbar.style.pointerEvents = "",
                    this.shown = !0);
                    const n = this.val();
                    (0,
                    s.isFunction)(this.options.scrollChange) && this.options.scrollChange(n),
                    this.lastProgress = Math.min(1, n / (i - (this.isHorizontal ? this.scrollWidth : this.scrollHeight))),
                    this.lastProgress > 0 != this.topShadow && ((this.topShadow = !this.topShadow) ? _.show : _.hide)(this.topShadowDiv),
                    this.lastProgress < 1 != this.bottomShadow && ((this.bottomShadow = !this.bottomShadow) ? _.show : _.hide)(this.bottomShadowDiv),
                    this.isHorizontal ? (o = Math.max(40, Math.floor(this.scrollbarSize * this.scrollWidth / i)),
                    o !== this.innerWidth && (this.inner.style.width = (this.innerWidth = o) + "px"),
                    this.inner.style.marginLeft = (this.scrollbarSize - o - 2 * this.options.padding) * this.lastProgress + this.options.padding + "px") : (o = Math.max(40, Math.floor(this.scrollbarSize * this.scrollHeight / i)),
                    o !== this.innerHeight && (this.inner.style.height = (this.innerHeight = o) + "px"),
                    this.inner.style.marginTop = (this.scrollbarSize - o - 2 * this.options.padding) * this.lastProgress + this.options.padding + "px"),
                    (0,
                    s.isFunction)(this.options.more) && i - this.obj[this.scrollProp] < 2 * this[this.scrollDimensionProp] && this.options.more(this),
                    this[this.scrollProp + "Last"] = this.obj[this.scrollProp]
                },
                restore: function() {
                    this.obj[this.scrollProp] = this[this.scrollProp + "Last"]
                }
            };
            const u = c
        }
        ,
        276125: (t,e,i)=>{
            i.d(e, {
                default: ()=>a
            });
            var s = i(795558)
              , o = i(29271)
              , n = i(82161)
              , _ = i(953908)
              , l = i(936134);
            function r(t, e) {
                if (this.constructor != r)
                    throw new Error("Slider was called without 'new' operator");
                if (!t)
                    throw new Error("No element was provided for Slider");
                t = (0,
                s.ge)(t),
                this.options = e || {
                    size: 1
                },
                this.options.backValue = this.options.backValue || 0;
                const i = 100 * this.options.backValue
                  , o = `<div class="slider_slide"><div class="slider_loading_bar" style="opacity: 0; display: none;"></div> ${this.options.withBackLine ? '<div class="slider_back" style="width:' + i + '%"></div>' : ""} <div class="slider_amount"></div> <div class="slider_handler"></div> </div>`;
                this._el = (0,
                s.ce)("div", {
                    innerHTML: o,
                    className: "slider",
                    id: t.getAttribute("id") || ""
                });
                const a = t.classList || []
                  , h = this;
                for (let t = 0, e = a.length; t < e; t++)
                    (0,
                    s.addClass)(this._el, a[t]);
                (0,
                n.each)(this._el.attributes, (function(t, e) {
                    "id" == e.name && "class" == e.name || h._el.setAttribute(e.name, e.value)
                }
                )),
                t.parentNode.replaceChild(this._el, t),
                (0,
                s.data)(this._el, "slider", this),
                this._amountEl = (0,
                s.geByClass1)("slider_amount", this._el),
                this._handlerEl = (0,
                s.geByClass1)("slider_handler", this._el),
                this._slideEl = (0,
                s.geByClass1)("slider_slide", this._el),
                this._backEl = (0,
                s.geByClass1)("slider_back", this._el),
                this._progressEl = (0,
                s.geByClass1)("slider_loading_bar", this._el),
                this.options.color && ((0,
                s.setStyle)(this._amountEl, {
                    backgroundColor: this.options.color
                }),
                (0,
                s.setStyle)(this._handlerEl, {
                    backgroundColor: this.options.color
                })),
                this.options.handlerColor && (0,
                s.setStyle)(this._handlerEl, {
                    backgroundColor: this.options.handlerColor
                }),
                this.options.backColor && (0,
                s.setStyle)(this._slideEl, {
                    backgroundColor: this.options.backColor
                }),
                (0,
                s.addClass)(this._el, "slider_size_" + this.options.size),
                this.options.debounce && (this._onValueChangeDebounced = (0,
                l.debounce)(this._onValueChange, this.options.debounce)),
                e.formatHint && ((0,
                _.addEvent)(this._el, "mousemove", this._ev_onMouseOver = this._onMouseOver.bind(this)),
                (0,
                _.addEvent)(this._el, "mouseleave", this._ev_onMouseLeave = this._onMouseLeave.bind(this))),
                (0,
                _.addEvent)(this._el, "mousedown", this._ev_onMouseDown = this._onMouseDown.bind(this)),
                this.setValue(this.options.value || 0, !this.options.fireChangeEventOnInit, !1),
                this.setBackValue(this.options.backValue)
            }
            r.prototype.toggleAdState = function(t) {
                this._adState = !!t,
                (0,
                s.toggleClass)(this._el, "slider_ad_mode", !!t)
            }
            ,
            r.prototype.toggleAdMarker = function(t) {
                t = !!t;
                let e = (0,
                s.geByClass1)("slider_ad_marker", this._el);
                if (t) {
                    if (!e) {
                        const t = "onmouseover=\"showTooltip(this, {text: '" + o.getLang("global_audio_ad") + "', black: 1, shift: [16, 9, 10]})\"";
                        e = (0,
                        s.se)('<div class="slider_ad_marker_wrap" ' + t + '><div class="slider_ad_marker"></div></div>'),
                        (0,
                        s.domPN)(this._slideEl).insertBefore(e, this._slideEl),
                        delete this._width,
                        (0,
                        s.addClass)(this._el, "slider_ad_marker_shown")
                    }
                } else
                    (0,
                    s.re)(e),
                    delete this._width,
                    (0,
                    s.removeClass)(this._el, "slider_ad_marker_shown")
            }
            ,
            r.prototype.showAdMarker = function(t) {
                const e = (0,
                s.se)('<div class="slider_ad_marker"></div>');
                (0,
                s.domPN)(this._slideEl).insertBefore(e, this._slideEl),
                delete this._width,
                (0,
                s.addClass)(this._el, "slider_ad_marker_shown")
            }
            ,
            r.prototype.isAdMode = function() {
                return (0,
                s.hasClass)(this._el, "slider_ad_mode")
            }
            ,
            r.prototype.setBlocked = function(t) {
                this.blocked = t,
                (0,
                s.toggleClass)(this._el, "slider_blocked", t)
            }
            ,
            r.prototype.getBlocked = function() {
                return this.blocked
            }
            ,
            r.prototype.isBlocked = function() {
                return this.isAdMode() || this.getBlocked()
            }
            ,
            r.prototype.toggleLoading = function(t) {
                t = !!t,
                (0,
                s.toggle)(this._progressEl, t),
                (0,
                s.setStyle)(this._progressEl, "opacity", t ? 1 : 0)
            }
            ,
            r.prototype.destroy = function(t) {
                this.options.formatHint && ((0,
                _.removeEvent)(this._el, "mousemove", this._ev_onMouseOver),
                (0,
                _.removeEvent)(this._el, "mouseleave", this._ev_onMouseLeave),
                (0,
                _.removeEvent)(this._el, "mousedown", this._ev_onMouseDown)),
                (0,
                s.re)(this._el),
                (0,
                s.re)(this._currHintEl)
            }
            ,
            r.prototype._updateHint = function(t, e) {
                this._currHintEl || (this._currHintEl = (0,
                s.se)('<div class="slider_hint" id="slider_hint"></div>'),
                this.options.hintClass && (0,
                s.addClass)(this._currHintEl, this.options.hintClass),
                this._el.appendChild(this._currHintEl)),
                this._width = this._width || (0,
                s.getSize)(this._slideEl)[0];
                const i = this._getPos();
                let o = Math.round(t.pageX - i[0]);
                const n = this._width;
                if (o = e ? Math.min(Math.max(0, o), n) : o,
                o >= 0 && o <= n) {
                    const t = o / n;
                    this._currHintEl.innerHTML = this.options.formatHint ? this.options.formatHint.call(this, t) : t;
                    const i = (0,
                    s.getSize)(this._currHintEl);
                    (0,
                    s.setStyle)(this._currHintEl, {
                        left: this._slideEl.offsetLeft + o - i[0] / 2,
                        top: this._slideEl.offsetTop - i[1] - 10
                    }),
                    !e && this._toggleHint(!0)
                } else
                    !e && this._toggleHint(!1);
                this.options.formatHint || this._toggleHint(!1)
            }
            ,
            r.prototype._toggleHint = function(t) {
                this.isAdMode() && (t = !1),
                (0,
                s.toggleClass)(this._currHintEl, "visible", t)
            }
            ,
            r.prototype._onMouseOver = function(t) {
                r._currenSliderDrag || (0,
                s.hasClass)(this._el, "active") || this._updateHint(t)
            }
            ,
            r.prototype._onMouseLeave = function(t) {
                (0,
                s.hasClass)(this._el, "active") || this._toggleHint(!1)
            }
            ,
            r.prototype._onMouseDown = function(t) {
                0 == t.button && (delete cur._sliderMouseUpNowEl,
                this._adState || this.getBlocked() || ((0,
                _.addEvent)(window, "mousemove", this._ev_onMouseMove = this._onMouseMove.bind(this)),
                (0,
                _.addEvent)(window, "mouseup", this._ev_onMouseUp = this._onMouseUp.bind(this)),
                this._width = (0,
                s.getSize)(this._slideEl)[0],
                this._onMouseMove(t),
                r._currenSliderDrag = this,
                (0,
                s.addClass)(this._el, "active"),
                (0,
                _.cancelEvent)(t)))
            }
            ,
            r.prototype._onMouseUp = function(t) {
                cur._sliderMouseUpNowEl = this._el,
                (0,
                _.removeEvent)(window, "mousemove", this._ev_onMouseMove),
                (0,
                _.removeEvent)(window, "mouseup", this._ev_onMouseUp),
                clearTimeout(this._debounceto),
                this._onValueChange(),
                (0,
                s.removeClass)(this._el, "active"),
                r._currenSliderDrag = !1,
                this._toggleHint(!1),
                this.options.onEndDragging && this.options.onEndDragging(this._currValue)
            }
            ,
            r.prototype._onMouseMove = function(t) {
                const e = this._getPos();
                let i = Math.max(t.pageX, e[0]);
                i = Math.min(i, e[0] + this._width),
                i -= e[0],
                this.setValue(i / this._width, !0, !0),
                this._onValueChangeDebounced ? this._onValueChangeDebounced() : this._onValueChange(),
                this._toggleHint(!0),
                this._updateHint(t, !0),
                (0,
                _.cancelEvent)(t)
            }
            ,
            r.prototype._getPos = function() {
                return this._slidePos = (0,
                s.getXY)(this._slideEl)
            }
            ,
            r.LOGFBASE = 35,
            r.prototype._logf = function(t) {
                if (!this.options.log)
                    return t;
                const e = r.LOGFBASE;
                return (Math.pow(e, t) - 1) / (e - 1)
            }
            ,
            r.prototype._unlogf = function(t) {
                if (!this.options.log)
                    return t;
                const e = r.LOGFBASE;
                return i = e,
                s = 1 + t * (e - 1),
                Math.log(s) / Math.log(i);
                var i, s
            }
            ,
            r.prototype.setValue = function(t, e, i) {
                if ((0,
                s.hasClass)(this._el, "active") && !i)
                    return;
                const o = i ? this._logf(t) : t;
                if (this._currValue == o)
                    return;
                this._currValue = o;
                let n = i ? t : this._unlogf(t);
                n = 100 * n + "%",
                (0,
                s.setStyle)(this._amountEl, {
                    width: n
                }),
                (0,
                s.setStyle)(this._handlerEl, {
                    left: n
                }),
                !e && this._onValueChange()
            }
            ,
            r.prototype.setBackValue = function(t) {
                (0,
                s.toggleClass)(this._backEl, "slider_back_transition", t > this._backValue),
                this._backValue = t;
                const e = 100 * t + "%";
                (0,
                s.setStyle)(this._backEl, {
                    width: e
                })
            }
            ,
            r.prototype._onValueChange = function() {
                this._lastValue = this._lastValue || 0,
                this._lastValue != this._currValue && (this._lastValue = this._currValue,
                this.options.onChange && this.options.onChange(this._currValue))
            }
            ;
            const a = r
        }
        ,
        981582: (__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{
            __webpack_require__.d(__webpack_exports__, {
                default: ()=>__WEBPACK_DEFAULT_EXPORT__
            });
            var _web_legacy_ui_ui_actions_menu_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(957518)
              , _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(953908)
              , _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(795558)
              , _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82161)
              , _web_lib_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(438221)
              , _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(643897)
              , _web_legacy_ui_ui_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(258810);
            const uiActionsMenu = {
                keyToggle: function(t, e) {
                    if (!(0,
                    _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.checkKeyboardEvent)(e))
                        return !1;
                    const i = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.domClosest)("_ui_menu_wrap", t);
                    i && uiActionsMenu.toggle(i, !(0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.hasClass)(i, "shown"))
                },
                keyboardToggle: function(t, e, i) {
                    var s;
                    if (!(0,
                    _web_legacy_ui_ui_actions_menu_utils__WEBPACK_IMPORTED_MODULE_0__.isKeyboardActivationEvent)(e))
                        return !1;
                    const o = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.domClosest)("_ui_menu_wrap", t);
                    var n, _;
                    (o && uiActionsMenu.toggle(o, !(0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.hasClass)(o, "shown")),
                    null == (s = i) ? void 0 : s.preventKeyboardClickEvent) && (null == (_ = e) || null == (n = _.preventDefault) || n.call(_))
                },
                toggle: function(el, s, options) {
                    const dummyMenu = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(el, "dummyMenu");
                    dummyMenu && (el = dummyMenu),
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.toggleClass)(el, "shown", s);
                    const onhide = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.attr)(el, "onHide");
                    if (onhide && !(0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.hasClass)(el, "shown"))
                        try {
                            eval(onhide)
                        } catch (t) {
                            (0,
                            _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_5__.logEvalError)(t, onhide)
                        }
                    if (options && options.onToggle) {
                        const script = options.onToggle.replace("{isShow}", "" + s);
                        try {
                            eval(script)
                        } catch (t) {
                            (0,
                            _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_5__.logEvalError)(t, script)
                        }
                    }
                },
                show: function(t, e, i) {
                    let s = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(t, "hidetimer");
                    s && (clearTimeout(s),
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(t, "hidetimer", 0));
                    const o = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(t, "origMenu");
                    if (o && (s = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(o, "hidetimer")) && (clearTimeout(s),
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(t, "hidetimer", 0)),
                    i && i.delay) {
                        cur.uiActionsMenuShowTimeout && clearTimeout(cur.uiActionsMenuShowTimeout);
                        const s = i.delay;
                        return delete i.delay,
                        void (cur.uiActionsMenuShowTimeout = setTimeout(uiActionsMenu.show.pbind(t, e, i), s))
                    }
                    if (cur.uiActionsMenuShowTimeout && (clearTimeout(cur.uiActionsMenuShowTimeout),
                    delete cur.uiActionsMenuShowTimeout),
                    i && i.appendParentCls) {
                        let e, s, o = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.geByClass1)("_ui_menu", t);
                        if (o) {
                            s = (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.domClosest)(i.appendParentCls, o),
                            e = (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.domClosest)("_ui_menu_wrap", t);
                            const n = Object.entries(i.wrapAttrs || {}).reduce(((t,[e,i])=>(t.push(`${e}="${i}"`),
                            t)), []).join(" ")
                              , _ = (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.se)(`<div class="${e.className} ui_actions_menu_dummy_wrap" onmouseover="uiActionsMenu.show(this);" onmouseout="uiActionsMenu.hide(this);" ${n}></div>`);
                            if (_.appendChild(o),
                            s.appendChild(_),
                            (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(t, "dummyMenu", _),
                            (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(_, "origMenu", t),
                            t = _,
                            (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(o, "top", (0,
                            _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.intval)((0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getStyle)(o, "top"))),
                            (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(o, "left", (0,
                            _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.intval)((0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getStyle)(o, "left"))),
                            (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(o, "right", (0,
                            _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.intval)((0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getStyle)(o, "right"))),
                            i.processHoverCls) {
                                const s = (0,
                                _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.domClosest)(i.processHoverCls, e);
                                (0,
                                _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.addEvent)(t, "mouseover", _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.addClass.pbind(s, "hover")),
                                (0,
                                _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.addEvent)(t, "mouseout", _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.removeClass.pbind(s, "hover"))
                            }
                        } else
                            t = (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(t, "dummyMenu");
                        const n = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(t, "origMenu");
                        o = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.geByClass1)("_ui_menu", t),
                        e = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.domClosest)("_ui_menu_wrap", n),
                        s = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.domClosest)(i.appendParentCls, o),
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(o, {
                            display: "block"
                        });
                        const _ = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getXY)(s)
                          , l = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getXY)(e)
                          , r = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(o, "top")
                          , a = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(o, "left")
                          , h = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(o, "right")
                          , d = {
                            top: l[1] - _[1] + r
                        };
                        h ? d.right = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getSize)(s)[0] + _[0] - l[0] - (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getSize)(e)[0] + h : d.left = l[0] - _[0] + a,
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(o, d)
                    }
                    const n = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.geByClass1)("_ui_menu", t);
                    if (i && i.autopos && n && !(0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.hasClass)(t, "shown")) {
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.removeClass)(t, "ui_actions_menu_left");
                        const e = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getXY)(t)[1]
                          , s = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getSize)(t)[1]
                          , o = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getSize)(n)[1]
                          , _ = i.dy || 10
                          , l = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getXY)(n)[0];
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.removeClass)(t, "ui_actions_menu_top"),
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.addClass)(t, "no_transition"),
                        e + s + _ + o > (0,
                        _web_lib_scroll__WEBPACK_IMPORTED_MODULE_4__.scrollGetY)() + (window.lastWindowHeight || 0) && (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.addClass)(t, "ui_actions_menu_top"),
                        e - _ - o < (0,
                        _web_lib_scroll__WEBPACK_IMPORTED_MODULE_4__.scrollGetY)() + (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getSize)("page_header_wrap")[1] && (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.removeClass)(t, "ui_actions_menu_top"),
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.toggleClass)(t, "ui_actions_menu_left", l < 0),
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.removeClass)(t, "no_transition")
                    }
                    i && i.hasOwnProperty("alwaysTop") && n && !(0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.hasClass)(t, "shown") && ((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.removeClass)(t, "ui_actions_menu_top"),
                    i.alwaysTop && (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.addClass)(t, "ui_actions_menu_top")),
                    i && i.scroll && i.maxHeight && (n.style.maxHeight = ((0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.intval)(i.maxHeight) || 200) + "px",
                    n.__uiScroll__ || new _web_legacy_ui_ui_scroll__WEBPACK_IMPORTED_MODULE_6__.default(n)),
                    uiActionsMenu.toggle(t, !0, i)
                },
                hide: function(t, e, i) {
                    cur.uiActionsMenuShowTimeout && (clearTimeout(cur.uiActionsMenuShowTimeout),
                    delete cur.uiActionsMenuShowTimeout);
                    let s = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(t, "hidedelay");
                    s ? (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(t, "hidedelay", !1) : s = 200;
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(t, "hidetimer") || (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(t, "hidetimer", setTimeout((function() {
                        uiActionsMenu.toggle(t, !1, i),
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(t, "hidetimer", 0)
                    }
                    ), s))
                },
                hideDelay: function(t, e) {
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(t, "hidedelay", e)
                }
            }
              , __WEBPACK_DEFAULT_EXPORT__ = uiActionsMenu
        }
        ,
        283548: (t,e,i)=>{
            i.d(e, {
                default: ()=>a
            });
            var s = i(795558)
              , o = i(82161)
              , n = i(953908)
              , _ = i(478381)
              , l = i(981582)
              , r = i(221780);
            const a = class {
                onScroll() {
                    const t = (0,
                    s.domPN)(this.box.bodyNode)
                      , e = this.moreEl
                      , i = this.scrollNode
                      , o = i.scrollHeight
                      , n = i.scrollTop
                      , _ = i.offsetHeight || i.clientHeight;
                    (0,
                    s.toggleClass)(t, "olist_topsh", n > 0),
                    (0,
                    s.toggleClass)(t, "olist_botsh", n + _ < o),
                    e && e.offsetTop && e.onclick && n + _ + 200 >= o && e.onclick()
                }
                onMouseEvent(t) {
                    let e = t.originalTarget || t.target;
                    if ((0,
                    s.hasClass)(e, "olist_item_wrap") || (e = (0,
                    s.gpeByClass)("olist_item_wrap", e)),
                    !e || e === document.body)
                        return;
                    if ((0,
                    s.hasClass)(e, "olist_item_loading"))
                        return (0,
                        n.cancelEvent)(t);
                    if ((0,
                    n.checkEvent)(t))
                        return !0;
                    this.box.changed = !0;
                    const i = e.id.match(/-?\d+/)[0]
                      , o = !this.invertedSelection && this.selected[i] || this.invertedSelection && !this.selected[i];
                    if ((0,
                    s.toggleClass)(e, "olist_item_wrap_on", !o),
                    this.selected[i] = !o || this.invertedSelection,
                    this.selCnt += !o || this.invertedSelection ? 1 : -1,
                    this.selTabUpdate(),
                    this.onListClick && this.onListClick(e, o),
                    this.scrollNode.scrollTop < 50) {
                        const t = this.filter;
                        setTimeout((()=>(0,
                        s.elfocus)(t)), 100)
                    }
                    return (0,
                    n.cancelEvent)(t)
                }
                onOlistSelect(t, e) {
                    l.default.toggle(this.olistFilter, !1);
                    let i = this.selCnt
                      , s = this.selected;
                    switch (e.ctrlKey || e.metaKey || e.shiftKey || (s = {},
                    i = 0),
                    t) {
                    case "all":
                        s = {},
                        i = 0,
                        (0,
                        o.each)(this.owners, (function() {
                            s[this[0]] = 1,
                            i++
                        }
                        ));
                        break;
                    case "none":
                        s = {},
                        i = 0;
                        break;
                    case "people":
                        (0,
                        o.each)(this.owners, (function() {
                            this[0] > 0 && !s[this[0]] && (s[this[0]] = 1,
                            i++)
                        }
                        ));
                        break;
                    case "groups":
                        (0,
                        o.each)(this.owners, (function() {
                            this[0] < 0 && !s[this[0]] && (s[this[0]] = 1,
                            i++)
                        }
                        ));
                        break;
                    default:
                        const e = 1 << (0,
                        o.intval)(t.replace("list", ""));
                        (0,
                        o.each)(this.owners, (function() {
                            this[4] & e && !s[this[0]] && (s[this[0]] = 1,
                            i++)
                        }
                        ))
                    }
                    return this.selCnt = i,
                    this.selected = s,
                    this.selTabUpdate(),
                    this.renderList(),
                    !1
                }
                onOlistFilters(t, e) {
                    l.default.show(t, e);
                    const i = e=>{
                        l.default.toggle(t, !1),
                        (0,
                        n.removeEvent)(document, "mousedown", i)
                    }
                    ;
                    return (0,
                    n.addEvent)(document, "mousedown", i),
                    e && (0,
                    n.cancelEvent)(e)
                }
                selTabUpdate() {
                    if (this.isAlbumEdit)
                        return void (this.onTabUpdate && this.onTabUpdate());
                    if (!this.tabs)
                        return;
                    const t = this.selCnt
                      , e = this.owners.length - t
                      , i = (0,
                    s.geByClass1)("olist_tab_sel", this.tabs)
                      , o = (0,
                    s.geByClass1)("olist_tab_unsel", this.tabs);
                    (0,
                    s.val)((0,
                    s.geByClass1)("ui_tab_count", i), t || ""),
                    (0,
                    s.val)((0,
                    s.geByClass1)("ui_tab_count", o), e || ""),
                    this.onTabUpdate && this.onTabUpdate()
                }
                renderList(t, e, i) {
                    e = e || 0,
                    i = i || this.sel;
                    const _ = e ? 60 : 120
                      , l = this;
                    t && (t = t.replace(/\u2013|\u2014/g, "-"));
                    let a = t ? this.indexer.search(t) : this.owners;
                    l.unsortedIndex == i && l.getUnsorted && (a = l.getUnsorted(a));
                    const h = this.selected
                      , d = l.invertedSelection ? !(this.sel < 0) : this.sel < 0
                      , c = l.tpl;
                    if (i && l.unsortedIndex != i) {
                        const t = [];
                        (0,
                        o.each)(a, (function() {
                            const i = this[l.idIndex];
                            if ((!d && h[i] || d && !h[i]) && (t.push(this),
                            t.length > e + _))
                                return !1
                        }
                        )),
                        a = t
                    }
                    const u = a.length;
                    a = a.slice(e, e + _);
                    let p, b = [];
                    if (t) {
                        t = (0,
                        o.clean)(t);
                        let e = (0,
                        o.escapeRE)(t);
                        const i = (0,
                        r.parseLatin)(t);
                        null != i && (e = e + "|" + (0,
                        o.escapeRE)(i)),
                        p = new RegExp("(?![^&;]+;)(?!<[^<>]*)((\\(*)(" + e + "))(?![^<>]*>)(?![^&;]+;)","gi")
                    }
                    const m = l.rsTpl ? l.rsTpl : function(t, e, i, s, o) {
                        const n = !i && s[t[0]] || i && !s[t[0]];
                        let _ = t[1];
                        if (e) {
                            _ = -1 == e.indexOf(" ") ? _.split(" ") : [_];
                            let t = "";
                            for (const e in _)
                                _.hasOwnProperty(e) && (t += (e > 0 ? " " : "") + _[e].replace(o, "$2<em>$3</em>"));
                            _ = t
                        }
                        return {
                            id: t[0],
                            name: _,
                            photo: t[2],
                            classname: n ? " olist_item_wrap_on" : "",
                            link: t[3] || (t[0] > 0 ? "id" + t[0] : "club" + -t[0])
                        }
                    }
                    ;
                    (0,
                    o.each)(a, (function() {
                        b.push((0,
                        s.rs)(c, m(this, t, l.invertedSelection, h, p)))
                    }
                    )),
                    e || b.length || b.push('<div class="no_rows">' + (t ? r.getLang("global_search_not_found").replace("{search}", t) : l.noSelMsg) + "</div>"),
                    (0,
                    s.re)(this.moreEl),
                    b = b.join(" "),
                    e ? this.olistEl.appendChild((0,
                    s.cf)(b)) : (0,
                    s.val)(this.olistEl, b),
                    u > e + _ && (this.olistEl.appendChild(this.moreEl),
                    this.moreEl.onclick = function(i) {
                        return l.renderList(t, e + _),
                        (0,
                        n.cancelEvent)(i)
                    }
                    ),
                    l.box && l.box.scroll && l.box.scroll.update(!1, !0),
                    l.onScroll()
                }
                constructor(t, e, i, l) {
                    0 === i.length && (i = {}),
                    l = l || {},
                    this.indexer = new vkIndexer(e,l.getName ? l.getName : function(t) {
                        let e = t[1];
                        if (l.nameClass) {
                            const t = (0,
                            s.se)(e);
                            t && (e = (0,
                            s.val)((0,
                            s.geByClass1)(l.nameClass, t)) || e)
                        }
                        return e
                    }
                    ),
                    this.owners = e,
                    this.tpl = l.tpl,
                    this.rsTpl = l.rsTpl,
                    this.idIndex = l.idIndex || 0,
                    this.selected = i,
                    this.getUnsorted = l.getUnsorted,
                    this.unsortedIndex = l.unsortedIndex || 0,
                    this.box = t,
                    this.filter = l.filter,
                    l.onTabUpdate && (this.onTabUpdate = l.onTabUpdate),
                    l.onListClick && (this.onListClick = l.onListClick);
                    const a = this;
                    t.setButtons(r.getLang("global_save"), (function(i) {
                        const s = {}
                          , n = []
                          , _ = [];
                        (0,
                        o.each)(e, (function() {
                            !a.invertedSelection && a.selected[this[a.idIndex]] || a.invertedSelection && !a.selected[this[a.idIndex]] ? (s[this[a.idIndex]] = this,
                            n.push(this[a.idIndex])) : _.push(this[a.idIndex])
                        }
                        )),
                        !1 !== cur.onOListSave(n, _, s, l.ret || {}, i) && t.hide(200)
                    }
                    ), r.getLang("global_cancel")),
                    l.box_options && t.setOptions(l.box_options),
                    this.scrollNode = (0,
                    s.geByClass1)("privacy_olist", t.bodyNode),
                    this.moreEl = (0,
                    s.geByClass1)("olist_more", t.bodyNode, "a"),
                    this.olistEl = (0,
                    s.geByClass1)("olist", t.bodyNode, "div"),
                    this.olistFilter = (0,
                    s.ge)("olist_filter_actions"),
                    this.sel = l.sel || 0,
                    this.tabs = (0,
                    s.geByClass1)("ui_tabs", t.bodyNode),
                    this.noSelMsg = l.noSelMsg || r.getLang("friends_no_user_selected"),
                    this.invertedSelection = !1;
                    const h = (0,
                    s.geByClass1)("olist_tab_sel", this.tabs);
                    this.selCnt = (0,
                    o.intval)((0,
                    s.val)((0,
                    s.geByClass1)("ui_tab_count", h)));
                    const d = this.filter ? this.filter : this.filter = (0,
                    s.ge)("olist_filter");
                    setTimeout((()=>(0,
                    s.elfocus)(d)), 100),
                    this.moreEl && ((0,
                    s.isVisible)(this.moreEl) ? this.moreEl.onclick = function(t) {
                        return a.renderList("", 60),
                        (0,
                        n.cancelEvent)(t)
                    }
                    : ((0,
                    s.re)(this.moreEl),
                    (0,
                    s.show)(this.moreEl))),
                    (0,
                    n.addEvent)(this.olistEl, "click", this.onMouseEvent.bind(this)),
                    (0,
                    n.addEvent)(this.scrollNode, "scroll", this.onScroll.bind(this));
                    const c = a.sel ? a.sel > 0 ? "sel" : "unsel" : "all";
                    let u = (0,
                    s.geByClass1)("olist_tab_" + c, a.tabs);
                    u = u && (0,
                    s.geByClass1)("ui_tab", u),
                    (cur.onOListTabChange = function(t, e) {
                        t && _.default.switchTab(t),
                        void 0 === e && (e = void 0 === a.selPrev ? 0 : a.selPrev),
                        a.selPrev = a.sel,
                        a.sel = e,
                        a.renderList((0,
                        s.val)(d), 0, e),
                        setTimeout((()=>(0,
                        s.elfocus)(d)), 100)
                    }
                    )(u, a.sel),
                    cur.onOlistChange = a.renderList.bind(this),
                    cur.onOlistSelect = a.onOlistSelect.bind(this),
                    cur.onOlistFilters = a.onOlistFilters.bind(this)
                }
            }
        }
        ,
        542588: (t,e,i)=>{
            i.d(e, {
                default: ()=>l
            });
            var s = i(795558)
              , o = i(438221)
              , n = i(893106);
            const _ = {
                showSaved: function(t) {
                    const e = (0,
                    s.ge)(t)
                      , i = e && (0,
                    s.gpeByClass)("page_block", e)
                      , o = i && (0,
                    s.geByClass1)("page_block_saved", i);
                    if (!e || !i || !o)
                        return;
                    const l = n.animate.pbind(o, {
                        opacity: 1
                    }, 200, n.animate.pbind(o, {
                        opacity: 0
                    }, 2e3));
                    _.scrollToStart(i, l)
                },
                scrollToStart: function(t, e) {
                    const i = (0,
                    s.getXY)(t)[1];
                    (0,
                    o.scrollGetY)() > i - 60 ? ((0,
                    o.scrollToY)(i - 60, 200),
                    e && setTimeout(e, 200)) : e && e()
                }
            }
              , l = _
        }
        ,
        979978: (t,e,i)=>{
            i.d(e, {
                default: ()=>h
            });
            var s = i(301230)
              , o = i(29271)
              , n = i(95432)
              , _ = i(795558)
              , l = i(82161)
              , r = i(953908);
            const a = {
                over: function(t, e, i) {
                    if (s.browser.mobile || vk.widget)
                        return;
                    (0,
                    _.hasClass)(t, "ui_zoom_wrap") || (0,
                    _.addClass)(t, "ui_zoom_wrap"),
                    cur.bigphCache = cur.bigphCache || {},
                    i = i || {};
                    let n = (0,
                    _.domFC)(t);
                    const r = cur.bigphCache[e];
                    if ("A" != n.tagName || !(0,
                    _.hasClass)(n, "ui_zoom_outer")) {
                        const i = r && r._id ? "/photo" + r._id + "?all=1" : "/albums" + e;
                        n = t.insertBefore((0,
                        _.se)(`<a class="ui_zoom_outer" href="${i}" aria-label="${(0,
                        l.clean)(o.getLang("global_photo_full_size"))}"><div class="ui_zoom_inner"><div class="ui_zoom"><div class="ui_zoom_icon"></div></div></div></a>`), (0,
                        _.domFC)(t)),
                        n._uid = e,
                        n.offsetHeight,
                        (0,
                        _.addClass)(n, "ui_zoom_added")
                    }
                    n.onclick = a.click.pbind(t, e, i),
                    i.fastLoad && a.load(t, e, i)
                },
                click: function(t, e, i, s) {
                    if (s && !1 !== (0,
                    r.checkEvent)(s))
                        return;
                    i.fastLoad || a.load(t, e, i);
                    const o = cur.bigphCache[e];
                    return o ? "load" == o || "show" == o ? (cur.bigphCache[e] = "show",
                    (0,
                    r.cancelEvent)(s)) : (i.onBeforeShow && i.onBeforeShow(),
                    (0,
                    l.extend)(o, (0,
                    l.extend)({
                        jumpTo: {
                            z: "albums" + e
                        }
                    }, i.showOpts || {})),
                    (0,
                    n.showPhoto)(o._id, "album" + e + "_0/rev", o, s)) : void 0
                },
                load: function(t, e, i) {
                    const s = (0,
                    _.domFC)(t);
                    void 0 === cur.bigphCache[e] && (cur.bigphCache[e] = "load",
                    ajax.post("al_photos.php", {
                        act: "fast_get_photo",
                        oid: e
                    }, {
                        onDone: function(o) {
                            if (!o)
                                return t.onmouseover = function() {}
                                ,
                                void (0,
                                _.re)(s);
                            const n = "show" == cur.bigphCache[e];
                            cur.bigphCache[e] = o,
                            s.href = "/photo" + o._id + "?all=1",
                            n && a.click(t, e, i)
                        },
                        onFail: function() {
                            return t.onmouseover = function() {}
                            ,
                            (0,
                            _.re)((0,
                            _.domFC)(t)),
                            !0
                        }
                    }))
                }
            }
              , h = a
        }
        ,
        976231: (__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{
            __webpack_require__.d(__webpack_exports__, {
                default: ()=>__WEBPACK_DEFAULT_EXPORT__
            });
            var _swc_helpers_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(434788)
              , _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82161)
              , _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(795558)
              , _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(953908)
              , _web_lib_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(725296)
              , _web_lib_fx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(893106)
              , _web_lib_layout_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10645)
              , _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(643897);
            const DATA_ATTR_SUBMENU_NAVIGABLE = "data-uirmenu-submenu-navigable"
              , uiRightMenu = {
                go: function(t, e, i, s={}) {
                    if ((0,
                    _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_2__.checkEvent)(e))
                        return !0;
                    const o = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.gpeByClass)("ui_rmenu", t)
                      , {navOptions: n, ignoreSelected: _=!1, switchMenuOptions: l} = s;
                    if (!_ && (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.geByClass1)("ui_rmenu_item_sel", o) == t)
                        return !1;
                    if (uiRightMenu.switchMenu(t, void 0, l),
                    uiRightMenu.showProgress(t),
                    !1 === i)
                        return !1;
                    const r = {
                        onDone: (...e)=>{
                            var i, s;
                            null == (s = n) || null == (i = s.onDone) || i.call(s, ...e),
                            uiRightMenu.hideProgress(t)
                        }
                    }
                      , a = (0,
                    _swc_helpers_extends__WEBPACK_IMPORTED_MODULE_7__._)({}, n || void 0, r);
                    return nav.go(i || t, e, a)
                },
                switchMenu: function(t, e, i={}) {
                    const s = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.gpeByClass)("ui_rmenu", t)
                      , o = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.geByClass1)("ui_rmenu_item_sel", s)
                      , {preventSubmenuExpand: n=!1} = i;
                    if (t == o && !e)
                        return !1;
                    const _ = []
                      , l = [];
                    if ((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.hasClass)(s, "_ui_rmenu_auto_expand")) {
                        const e = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.geByClass)("_ui_rmenu_sublist", s)
                          , i = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.hasClass)(t, "_ui_rmenu_subitem") ? (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.gpeByClass)("_ui_rmenu_sublist", t) : !!(0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.hasClass)((0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.domNS)(t), "_ui_rmenu_sublist") && (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.domNS)(t);
                        (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_0__.each)(e, (function() {
                            (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.isVisible)(this) && this !== i && (_.push(this),
                            (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.hide)(this))
                        }
                        )),
                        n || !i || (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.isVisible)(i) || (l.push(i),
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.show)(i)),
                        (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_0__.each)(_, (function() {
                            (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.show)(this)
                        }
                        )),
                        (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_0__.each)(l, (function() {
                            (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.hide)(this)
                        }
                        ))
                    }
                    return (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.removeClass)(o, "ui_rmenu_item_sel"),
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.addClass)(t, "ui_rmenu_item_sel"),
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.hasClass)(s, "_ui_rmenu_auto_expand") ? (0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_0__.each)(_.concat(l), (function() {
                        uiRightMenu.toggleSubmenu(this)
                    }
                    )) : (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.hasClass)(t, "_ui_rmenu_subitem") && !(0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.isVisible)((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.domPN)(t)) && uiRightMenu.toggleSubmenu((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.domPN)(t)),
                    !1
                },
                unselectAll: function(t) {
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.removeClass)(t, "ui_rmenu_sliding"),
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.removeClass)((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.geByClass1)("ui_rmenu_item_sel", t), "ui_rmenu_item_sel")
                },
                isSelectedItem: t=>t.classList.contains("ui_rmenu_item_sel"),
                showProgress: function(t) {
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.hasClass)(t, "ui_rmenu") || (t = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.gpeByClass)("ui_rmenu", t));
                    const e = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.geByClass1)("ui_rmenu_loading_item", t);
                    e && (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.removeClass)(e, "ui_rmenu_loading_item");
                    const i = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.geByClass1)("ui_rmenu_item_sel", t);
                    (0,
                    _web_lib_ui__WEBPACK_IMPORTED_MODULE_3__.hideProgress)(t),
                    (0,
                    _web_lib_ui__WEBPACK_IMPORTED_MODULE_3__.showProgress)((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.domFC)(i).parentNode, "", "", !1),
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.addClass)(t, "ui_rmenu_loading"),
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.addClass)(i, "ui_rmenu_loading_item")
                },
                hideProgress: function(t) {
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.hasClass)(t, "ui_rmenu") || (t = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.gpeByClass)("ui_rmenu", t)),
                    (0,
                    _web_lib_ui__WEBPACK_IMPORTED_MODULE_3__.hideProgress)(t);
                    const e = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.gpeByClass)("ui_rmenu", t);
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.removeClass)(t, "ui_rmenu_loading");
                    const i = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.geByClass1)("ui_rmenu_loading_item", e);
                    i && (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.removeClass)(i, "ui_rmenu_loading_item")
                },
                toggleSubmenu: function(name, ref, event) {
                    if (event && (0,
                    _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_2__.checkEvent)(event))
                        return;
                    const isSubmenuNavigatedResult = toggleSubmenuNavigable(ref);
                    if (isSubmenuNavigatedResult.navigated)
                        return isSubmenuNavigatedResult.navGoResult;
                    const menu = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.gpeByClass)("ui_rmenu", ref);
                    let el, submenu;
                    if ("string" == typeof name ? submenu = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.geByClass1)("_ui_rmenu_" + name + "_list", menu) : (submenu = name,
                    name = submenu.getAttribute("data-sublist-id")),
                    el = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.geByClass1)("_ui_rmenu_" + name + "_toggle", menu),
                    !submenu)
                        return !1;
                    el && (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.toggleClass)(el, "ui_rmenu_item_expanded", !(0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.isVisible)(submenu)),
                    (0,
                    _web_lib_fx__WEBPACK_IMPORTED_MODULE_4__.slideToggle)(submenu, submenu && (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.getSize)(submenu)[1] ? 100 : 0),
                    setTimeout(_web_lib_layout_utils__WEBPACK_IMPORTED_MODULE_5__.updateNarrow, 100);
                    const onToggle = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.domData)(el, "on-toggle");
                    return onToggle && setTimeout((function() {
                        try {
                            eval(onToggle)
                        } catch (t) {
                            (0,
                            _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_6__.logEvalError)(t, onToggle)
                        }
                    }
                    ), 150),
                    !1
                },
                selectLabelNode(t) {
                    var e;
                    return null == (e = t) ? void 0 : e.querySelector(".ui_rmenu_label-text")
                }
            };
            function isItemSubmenuNavigable(t) {
                var e, i;
                return null == (i = t) || null == (e = i.hasAttribute) ? void 0 : e.call(i, DATA_ATTR_SUBMENU_NAVIGABLE)
            }
            function toggleSubmenuNavigable(t) {
                if (isItemSubmenuNavigable(t)) {
                    if (!t.classList.contains("ui_rmenu_item_sel")) {
                        return {
                            navigated: !0,
                            navGoResult: uiRightMenu.go(t, void 0, void 0, {
                                switchMenuOptions: {
                                    preventSubmenuExpand: !0
                                }
                            })
                        }
                    }
                }
                return {
                    navigated: !1
                }
            }
            const __WEBPACK_DEFAULT_EXPORT__ = uiRightMenu
        }
        ,
        258810: (t,e,i)=>{
            i.r(e),
            i.d(e, {
                UiScroll: ()=>h,
                default: ()=>d
            });
            var s = i(301230)
              , o = i(664988)
              , n = i(82161)
              , _ = i(795558)
              , l = i(953908)
              , r = i(893106)
              , a = i(332066);
            class h {
                init() {
                    if (this.options.stopScrollPropagation && this.fixBlocker(),
                    !this.inited) {
                        if (!this.el.container.scrollWidth || this.disabled)
                            return;
                        this.fixSize(!0),
                        this.options.autoresize && this.startResizeListening(),
                        this.options.global || cur.destroy.push(this.destroy.bind(this)),
                        this.inited = !0
                    }
                    return this.update(!0),
                    this.api
                }
                addEvent(t, e, i, s) {
                    return this.removeEvents.push([t, e, i]),
                    (0,
                    l.addEvent)(t, e, i, void 0, void 0, s ? {
                        passive: !0
                    } : void 0),
                    i
                }
                destroy() {
                    if (this.disabled = !0,
                    this.fixSize(),
                    this.animation && this.animation.stop(),
                    this.moreTimeout && clearTimeout(this.moreTimeout),
                    this.dragstopHandler && (0,
                    l.removeEvent)(document, "mouseup contextmenu", this.dragstopHandler),
                    this.dragHandler && (0,
                    l.removeEvent)(document, "mousemove", this.dragHandler),
                    (0,
                    n.each)(this.removeEvents, (function(t, e) {
                        l.removeEvent.apply(null, e)
                    }
                    )),
                    this.el.overflow.parentNode == this.el.container) {
                        const t = (0,
                        _.cf)();
                        for (; this.el.content.firstChild; )
                            t.appendChild(this.el.content.firstChild);
                        this.el.container.appendChild(t)
                    }
                    return (0,
                    _.removeData)(this.el.container, "ui-scroll"),
                    this.el.container.className = this.el.container.className.replace(/\bui_scroll_.+?\b/g, " "),
                    (0,
                    n.each)(this.removeElements, (function(t, e) {
                        (0,
                        _.re)(e)
                    }
                    )),
                    this.el.container.scrollTop = this.api.data.scrollTop,
                    delete this.el.container.__uiScroll__,
                    this.api
                }
                updateAbove(t) {
                    if ((0,
                    n.isFunction)(t)) {
                        this.animation && this.animation.stop();
                        const e = this.el.outer.scrollHeight - this.el.outer.scrollTop - this.el.overflow.offsetHeight;
                        t(),
                        this.el.outer.scrollTop = this.el.outer.scrollHeight - this.el.overflow.offsetHeight - e
                    }
                    return this.api
                }
                updateBelow(t) {
                    if ((0,
                    n.isFunction)(t)) {
                        this.animation && this.animation.stop();
                        const e = this.options.preserveEdgeBelow && this.api.data.scrollBottom <= this.options.preserveEdgeBelowThreshold;
                        t(),
                        e && this.scrollBottom(!1)
                    }
                    return this.api
                }
                fixBlocker() {
                    s.browser.chrome && !this.options.noForceReFlow && this.forceReFlow(),
                    this.el.blocker.scrollTop = this.blockerScrollTop
                }
                forceReFlow() {
                    this.el.blocker.style.display = "inline-block",
                    this.el.blocker.offsetHeight,
                    this.el.blocker.style.display = ""
                }
                fixSize(t) {
                    this.options.native || (t && null == this.fixSizeDefault && (this.fixSizeDefault = this.el.container.style.width),
                    (0,
                    _.setStyle)(this.el.container, "width", t ? (0,
                    _.getSize)(this.el.container, !0)[0] || this.fixSizeDefault || "" : this.fixSizeDefault || ""))
                }
                emitEvent(t) {
                    this.disabled || this.inited && this.emitter.emitEvent(t, [this.api])
                }
                static scrollEventDelta(t) {
                    let e = 0;
                    const i = void 0 !== t.deltaMode ? t.deltaMode : "MozMousePixelScroll" == t.type ? 0 : 1;
                    return "wheel" == t.type ? e = t.deltaY : void 0 !== t.wheelDeltaX && void 0 !== t.wheelDeltaY ? (e = 1 / 40 * -t.wheelDeltaY,
                    s.browser.mac && s.browser.opera && (e *= .1)) : void 0 !== t.wheelDelta ? e = 1 / 40 * -t.wheelDelta : t.detail && 2 === t.axis && (e = t.detail),
                    e * (1 == i ? 15 : 2 == i ? 450 : 1)
                }
                isScrollEventUnused(t) {
                    return h.scrollEventDelta(t) > 0 ? !this.api.data.scrollBottom : !this.api.data.scrollTop
                }
                resize(t) {
                    if (!t && this.options.preserveEdgeBelow) {
                        const e = this.options.preserveEdgeBelow && this.api.data.scrollBottom <= this.options.preserveEdgeBelowThreshold;
                        this.update(!0) && (this.emitEvent("resize"),
                        e && this.scrollBottom(),
                        this.options.stopScrollPropagation && !t && this.fixBlocker())
                    } else
                        this.update(!0) && (this.options.stopScrollPropagation && !t && this.fixBlocker(),
                        this.emitEvent("resize"))
                }
                disable(t) {
                    return this.disabled = !!t,
                    t ? (this.animation && this.animation.stop(),
                    this.fixSize()) : (this.fixSize(!0),
                    this.options.stopScrollPropagation && this.fixBlocker(),
                    this.update(!0)),
                    (0,
                    _.toggleClass)(this.el.container, "ui_scroll_disabled", this.disabled),
                    this.api
                }
                dragstart(t) {
                    if (!(this.disabled || this.dragging || this.options.native))
                        return t || (t = window.event),
                        this.dragging = !0,
                        this.animation && this.animation.stop(),
                        this.options.reversed && (this.noMore = !0),
                        (0,
                        l.addEvent)(document, "mouseup contextmenu", this.dragstartHandler = this.dragstop.bind(this)),
                        (0,
                        l.addEvent)(document, "mousemove", this.dragHandler = this.drag.bind(this)),
                        this.dragScroll = this.options.reversed ? this.api.data.scrollBottom : this.api.data.scrollTop,
                        this.dragY = t.screenY,
                        (0,
                        l.cancelEvent)(t),
                        this.emitEvent("dragstart"),
                        this.api
                }
                dragstop(t) {
                    if (!this.disabled && this.dragging && !this.options.native) {
                        if (t || (t = window.event),
                        this.dragging = !1,
                        this.dragstopHandler && (0,
                        l.removeEvent)(document, "mouseup contextmenu", this.dragstopHandler),
                        this.dragHandler && (0,
                        l.removeEvent)(document, "mousemove", this.dragHandler),
                        (0,
                        _.setStyle)(document.body, "cursor", ""),
                        (0,
                        _.removeClass)(this.el.container, "ui_scroll_dragging"),
                        this.dragged)
                            this.noMore && (this.noMore = !1,
                            this.more());
                        else {
                            this.options.reversed && (this.noMore = !0);
                            const e = (t.pageY - (0,
                            _.getXY)(this.el.barOuter)[1] - this.barInnerHeight / 2) * (Math.max(this.options.minContentHeight, this.api.data.scrollHeight) - this.api.data.viewportHeight) / (this.barOuterHeight - this.barInnerHeight);
                            this.scrollTop(!1, e, 0, function() {
                                this.noMore && (this.noMore = !1,
                                this.more())
                            }
                            .bind(this))
                        }
                        return this.dragged = !1,
                        t && "contextmenu" !== t.type && (0,
                        l.cancelEvent)(t),
                        this.emitEvent("dragstop"),
                        this.api
                    }
                }
                drag(t) {
                    if (this.disabled || !this.dragging || this.options.native)
                        return;
                    t || (t = window.event);
                    const e = (t.screenY - this.dragY) * (this.api.data.scrollHeight / this.el.barOuter.scrollHeight);
                    return this.el.outer.scrollTop = this.options.reversed ? this.el.outer.scrollHeight - this.el.overflow.offsetHeight - this.dragScroll + e : this.dragScroll + e,
                    this.dragged || (this.dragged = !0,
                    (0,
                    _.setStyle)(document.body, "cursor", "pointer"),
                    (0,
                    _.addClass)(this.el.container, "ui_scroll_dragging")),
                    (0,
                    l.cancelEvent)(t),
                    this.emitEvent("drag"),
                    this.api
                }
                scroll(t, e, i) {
                    return this.animation && this.animation.stop(),
                    this.el.outer.scrollTop == t && this.update(!0),
                    e ? (e = "number" != typeof e || !isFinite(e) || e % 1 ? 300 : Math.abs(e),
                    this.animation = new r.Fx.Base({
                        scrollTop: this.el.outer.scrollTop
                    },{
                        transition: r.Fx.Transitions.easeOutCubic,
                        onStep: function(t) {
                            this.el.outer.scrollTop = t.scrollTop
                        }
                        .bind(this),
                        duration: e,
                        onComplete: (0,
                        n.isFunction)(i) ? i.pbind(this.api) : void 0
                    }).start({
                        scrollTop: this.el.outer.scrollTop
                    }, {
                        scrollTop: t
                    })) : (this.el.outer.scrollTop = t,
                    (0,
                    n.isFunction)(i) && i(this.api)),
                    this.api
                }
                scrollTop(t, e, i, s) {
                    if (t && this.options.stopScrollPropagation && this.fixBlocker(),
                    !this.disabled && !this.dragging)
                        return this.scroll((0,
                        n.intval)(e), i, s)
                }
                scrollBottom(t, e, i, s) {
                    if (t && this.options.stopScrollPropagation && this.fixBlocker(),
                    !this.disabled && !this.dragging)
                        return this.scroll(this.el.outer.scrollHeight - this.el.overflow.offsetHeight - (0,
                        n.intval)(e), i, s)
                }
                scrollBy(t, e, i) {
                    if (!this.disabled && !this.dragging)
                        return this.scroll(this.el.outer.scrollTop + (0,
                        n.intval)(t), e, i)
                }
                scrollIntoView(t, e, i, s) {
                    if (t && this.options.stopScrollPropagation && this.fixBlocker(),
                    (e = (0,
                    a.getScrollElement)(e)) && e.compareDocumentPosition && e.compareDocumentPosition(this.el.content) & Node.DOCUMENT_POSITION_CONTAINS) {
                        const t = (0,
                        _.getXY)(e)[1]
                          , o = (0,
                        _.getXY)(this.el.overflow)[1]
                          , l = (0,
                        _.getSize)(e)[1];
                        if (t <= o && t + l >= o + this.api.data.viewportHeight || t >= o && t + l <= o + this.api.data.viewportHeight)
                            (0,
                            n.isFunction)(s) && (i ? setTimeout(s.bind(this.api), 0) : s(this.api));
                        else if (l > this.api.data.viewportHeight || t < o)
                            this.scrollTop(!1, t - o + this.api.data.scrollTop - (this.options.shadows ? (0,
                            _.getSize)(this.el.shadowTop)[1] : 0), i, s);
                        else {
                            const e = this.options.shadows ? (0,
                            _.getSize)(this.el.shadowBottom)[1] : 0;
                            this.scrollTop(!1, t - o + this.api.data.scrollTop + l - this.api.data.viewportHeight + e, i, s)
                        }
                    }
                    return this.api
                }
                update(t) {
                    let e, i;
                    this.el.container && !this.el.container.updateScroll && (this.el.container.updateScroll = this.update.bind(this, !1));
                    const s = this.el.outer.scrollTop;
                    if (this.inited && !this.disabled && (t && (e = this.el.inner.offsetHeight,
                    this.api.data.viewportHeight !== (this.api.data.viewportHeight = this.el.overflow.offsetHeight) || this.api.data.scrollHeight !== e) || this.api.data.scrollTop !== s)) {
                        if (t && (this.api.data.scrollHeight = e),
                        this.api.data.scrollTop = Math.max(0, Math.min(this.api.data.scrollHeight - this.api.data.viewportHeight, Math.max(0, s))),
                        this.api.data.scrollBottom = Math.max(0, this.api.data.scrollHeight - this.api.data.scrollTop - this.api.data.viewportHeight),
                        !this.options.native) {
                            if (e = Math.max(this.options.minContentHeight, this.api.data.scrollHeight),
                            i = e <= this.api.data.viewportHeight,
                            !i) {
                                const i = this.el.barOuter.offsetHeight;
                                (t || this.barOuterHeight !== i) && (this.barOuterHeight = i,
                                this.barInnerHeight = Math.max(this.options.barMinHeight, this.barOuterHeight * this.api.data.viewportHeight / e),
                                this.el.barInner.style.height = this.barInnerHeight + "px"),
                                (0,
                                a.nextFrame)((()=>{
                                    const t = (this.barOuterHeight - this.barInnerHeight) * this.api.data.scrollTop / (e - this.api.data.viewportHeight);
                                    this.el.barInner.style.transform = `translateY(${t}px)`
                                }
                                ))
                            }
                            this.options.shadows && (this.shadowTop != (this.api.data.scrollTop && !i) && (0,
                            _.toggleClass)(this.el.container, "ui_scroll_shadow_top_visible", this.shadowTop = this.api.data.scrollTop && !i),
                            this.shadowBottom != (this.api.data.scrollBottom && !i) && (0,
                            _.toggleClass)(this.el.container, "ui_scroll_shadow_bottom_visible", this.shadowBottom = this.api.data.scrollBottom && !i)),
                            this.unnecessary !== i && ((0,
                            _.toggleClass)(this.el.container, "ui_scroll_unnecessary", i),
                            this.unnecessary = i,
                            this.options.stopScrollPropagation && this.fixBlocker(),
                            i && this.barInnerHeight && this.barOuterHeight && (0,
                            a.nextFrame)(function(t) {
                                this.el.barInner.style.height = 100 * this.barInnerHeight / this.barOuterHeight + "%";
                                const i = (this.barOuterHeight - this.barInnerHeight) * this.api.data.scrollTop / (e - this.api.data.viewportHeight) * 100 / this.barInnerHeight;
                                this.el.barInner.style.transform = `translateY(${i}%)`
                            }
                            .bind(this)))
                        }
                        return this.emitEvent("update"),
                        (!this.options.reversed || s >= 0) && this.more(),
                        !0
                    }
                    return !1
                }
                more() {
                    const t = this.options.reversed ? this.api.data.scrollTop : this.api.data.scrollBottom
                      , e = null !== this.options.onmoreThreshold ? this.options.onmoreThreshold : 2 * this.api.data.viewportHeight;
                    !this.noMore && t <= e && this.emitEvent("more")
                }
                constructor(t, e) {
                    if (!(t = (0,
                    a.getScrollElement)(t)))
                        throw new Error("uiScroll container is undefined");
                    t.__uiScroll__ && t.__uiScroll__.destroy(),
                    this.options = (0,
                    n.extend)({
                        global: !1,
                        native: !1,
                        theme: "default",
                        reversed: !1,
                        autoresize: !0,
                        preserveEdgeBelow: !1,
                        barMinHeight: 30,
                        preserveEdgeBelowThreshold: 20,
                        stopScrollPropagation: !0,
                        stopScrollPropagationAlways: !1,
                        minContentHeight: 0,
                        onmoreThreshold: null,
                        hidden: !1,
                        shadows: !1,
                        scrollElements: [],
                        onresize: null,
                        onscroll: null,
                        onscrollstart: null,
                        onscrollstop: null,
                        ondrag: null,
                        ondragstart: null,
                        ondragstop: null,
                        onupdate: null,
                        onmore: null,
                        noForceReFlow: !1
                    }, e),
                    this.options.native && (this.options.shadows = !1),
                    s.browser.mobile && (this.options.stopScrollPropagation = !1),
                    (0,
                    o.isArray)(this.options.scrollElements) || (this.options.scrollElements = []),
                    this.removeEvents = [],
                    this.removeElements = [],
                    this.dragging = !1,
                    this.dragged = !1,
                    this.released = !0,
                    this.noMore = !1,
                    this.dragY = null,
                    this.dragScroll = null,
                    this.shadowTop = !1,
                    this.shadowBottom = !1,
                    this.unnecessary = !1,
                    this.disabled = !1,
                    this.stopped = !0,
                    this.stoppedTimeout = null,
                    this.fixSizeDefault = null,
                    this.animation = null,
                    this.barOuterHeight = null,
                    this.barInnerHeight = null,
                    this.currentFrame = null,
                    this.blockerScrollTop = 500,
                    this.emitter = new EventEmitter,
                    (0,
                    n.isFunction)(this.options.onresize) && this.emitter.addListener("resize", this.options.onresize),
                    (0,
                    n.isFunction)(this.options.onscroll) && this.emitter.addListener("scroll", this.options.onscroll),
                    (0,
                    n.isFunction)(this.options.onscrollstart) && this.emitter.addListener("scrollstart", this.options.onscrollstart),
                    (0,
                    n.isFunction)(this.options.onscrollstop) && this.emitter.addListener("scrollstop", this.options.onscrollstop),
                    (0,
                    n.isFunction)(this.options.ondrag) && this.emitter.addListener("drag", this.options.ondrag),
                    (0,
                    n.isFunction)(this.options.ondragstart) && this.emitter.addListener("dragstart", this.options.ondragstart),
                    (0,
                    n.isFunction)(this.options.ondragstop) && this.emitter.addListener("dragstop", this.options.ondragstop),
                    (0,
                    n.isFunction)(this.options.onupdate) && this.emitter.addListener("update", this.options.onupdate),
                    (0,
                    n.isFunction)(this.options.onmore) && this.emitter.addListener("more", this.options.onmore),
                    this.el = {
                        container: t,
                        overflow: (0,
                        _.ce)("div", {
                            className: "ui_scroll_overflow"
                        }),
                        outer: (0,
                        _.ce)("div", {
                            className: "ui_scroll_outer"
                        }, {
                            margin: this.options.stopScrollPropagation ? this.blockerScrollTop + "px 0" : void 0
                        }),
                        inner: (0,
                        _.ce)("div", {
                            className: "ui_scroll_inner tt_noappend"
                        }),
                        shadowTop: (0,
                        _.ce)("div", {
                            className: "ui_scroll_shadow_top"
                        }),
                        shadowBottom: (0,
                        _.ce)("div", {
                            className: "ui_scroll_shadow_bottom"
                        }),
                        content: (0,
                        _.ce)("div", {
                            className: "ui_scroll_content clear_fix"
                        }),
                        barContainer: (0,
                        _.ce)("div", {
                            className: "ui_scroll_bar_container"
                        }),
                        barOuter: (0,
                        _.ce)("div", {
                            className: "ui_scroll_bar_outer"
                        }),
                        barInner: (0,
                        _.ce)("div", {
                            className: "ui_scroll_bar_inner"
                        })
                    },
                    (0,
                    _.data)(this.el.container, "ui-scroll", this);
                    const i = (0,
                    _.cf)()
                      , r = ["ui_scroll_container"];
                    for ((0,
                    n.each)((0,
                    o.isArray)(this.options.theme) ? this.options.theme : (0,
                    n.trim)(this.options.theme + "").split(/\s+/), (function(t, e) {
                        e && r.push("ui_scroll_" + e + "_theme")
                    }
                    )),
                    (0,
                    _.addClass)(this.el.container, r.join(" ")),
                    this.options.hidden && (0,
                    _.addClass)(this.el.container, "ui_scroll_hidden"); this.el.container.firstChild; )
                        this.el.content.appendChild(this.el.container.firstChild);
                    if (this.el.outer.appendChild(this.el.inner),
                    this.el.inner.appendChild(this.el.content),
                    this.options.stopScrollPropagation ? (this.el.blocker = (0,
                    _.ce)("div", {
                        className: "ui_scroll_blocker"
                    }),
                    this.addEvent(this.el.blocker, "scroll", this.fixBlocker.bind(this), !0),
                    this.el.blocker.appendChild(this.el.outer),
                    this.el.overflow.appendChild(this.el.blocker)) : this.el.overflow.appendChild(this.el.outer),
                    i.appendChild(this.el.overflow),
                    this.options.native ? (0,
                    _.addClass)(this.el.container, "ui_scroll_native") : (this.el.barOuter.appendChild(this.el.barInner),
                    this.el.barContainer.appendChild(this.el.barOuter),
                    i.appendChild(this.el.barContainer),
                    this.options.shadows && (this.el.overflow.appendChild(this.el.shadowTop),
                    this.el.overflow.appendChild(this.el.shadowBottom)),
                    s.browser.mobile || this.options.scrollElements.push(this.el.barContainer)),
                    this.options.autoresize) {
                        const t = (0,
                        a.addResizeSensor)(this.el.inner, this.resize.bind(this, !0))
                          , e = (0,
                        a.addResizeSensor)(this.el.overflow, this.resize.bind(this, !1));
                        this.removeElements.push(t[0]),
                        this.removeElements.push(e[0]),
                        this.startResizeListening = function() {
                            t[1](),
                            e[1]()
                        }
                    }
                    this.removeElements.push(this.el.overflow, this.el.barContainer),
                    this.el.container.appendChild(i),
                    this.options.reversed && (this.el.outer.scrollTop = this.el.outer.scrollHeight),
                    this.el.container.__uiScroll__ = this.api = {
                        container: this.el.container,
                        scroller: this.el.outer,
                        content: this.el.content,
                        emitter: this.emitter,
                        ondragstart: this.dragstart.bind(this),
                        ondragstop: this.dragstop.bind(this),
                        ondrag: this.drag.bind(this),
                        destroy: this.destroy.bind(this),
                        disable: this.disable.bind(this, !0),
                        enable: this.disable.bind(this, !1),
                        scrollTop: this.scrollTop.bind(this, !0),
                        scrollBottom: this.scrollBottom.bind(this, !0),
                        scrollBy: this.scrollBy.bind(this),
                        scrollIntoView: this.scrollIntoView.bind(this, !0),
                        update: this.init.bind(this),
                        updateAbove: this.updateAbove.bind(this),
                        updateBelow: this.updateBelow.bind(this),
                        data: {
                            scrollTop: null,
                            scrollBottom: null,
                            scrollHeight: null,
                            viewportHeight: null
                        }
                    },
                    this.init();
                    const d = "onwheel"in this.el.outer ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : s.browser.mozilla ? "MozMousePixelScroll" : "DOMMouseScroll";
                    return this.addEvent(this.el.container, d, function(t) {
                        this.animation && this.animation.stop(),
                        !this.disabled && this.options.stopScrollPropagation && (this.unnecessary ? this.options.stopScrollPropagationAlways && (0,
                        l.cancelEvent)(t) : this.isScrollEventUnused(t) ? (0,
                        l.cancelEvent)(t) : (0,
                        l.stopEvent)(t))
                    }
                    .bind(this), !this.options.stopScrollPropagation),
                    this.options.native || this.addEvent(this.el.barContainer, "mousedown", this.dragstart.bind(this)),
                    (0,
                    n.each)(this.options.scrollElements, function(t, e) {
                        this.addEvent(e, d, function(t) {
                            this.disabled || this.unnecessary || (this.scrollBy(h.scrollEventDelta(t)),
                            !this.options.stopScrollPropagation && this.isScrollEventUnused(t) || (0,
                            l.cancelEvent)(t))
                        }
                        .bind(this))
                    }
                    .bind(this)),
                    this.options.reversed && this.addEvent(this.el.container, "mousedown touchstart pointerdown", function(t) {
                        this.released = !1,
                        this.noMore = !0;
                        const e = this.addEvent(document, "mouseup contextmenu touchend pointerup", function(t) {
                            (0,
                            l.removeEvent)(document, "mouseup contextmenu touchend pointerup", e),
                            this.released = !0,
                            this.noMore && this.stopped && !this.dragging && (this.noMore = !1,
                            this.more())
                        }
                        .bind(this))
                    }
                    .bind(this)),
                    this.addEvent(this.el.outer, "scroll", function() {
                        this.update() && (this.stopped ? (this.stopped = !1,
                        this.emitEvent("scrollstart")) : this.options.native || !1 !== this.stopped || (this.stopped = 0,
                        (0,
                        _.addClass)(this.el.container, "ui_scroll_scrolled")),
                        this.emitEvent("scroll"),
                        this.stoppedTimeout && clearTimeout(this.stoppedTimeout),
                        this.stoppedTimeout = setTimeout(function() {
                            this.stopped || (this.stopped = !0,
                            this.options.native || (0,
                            _.removeClass)(this.el.container, "ui_scroll_scrolled"),
                            this.emitEvent("scrollstop"),
                            this.noMore && this.released && !this.dragging && (this.noMore = !1,
                            this.more()))
                        }
                        .bind(this), 200))
                    }
                    .bind(this)),
                    this.api
                }
            }
            h.addResizeSensor = a.addResizeSensor;
            const d = h
        }
        ,
        842939: (t,e,i)=>{
            i.d(e, {
                default: ()=>a
            });
            var s = i(795558)
              , o = i(29271)
              , n = i(82161)
              , _ = i(953908)
              , l = i(438221);
            const r = {
                init: function(t, e) {
                    cur.lSTL && (0,
                    s.re)(cur.lSTL);
                    const i = (e = e || {}).parent = e.parent || boxLayerWrap;
                    (0,
                    n.extend)(cur, {
                        lSTLWrap: i,
                        lSTL: i.appendChild((0,
                        s.ce)("div", {
                            id: "layer_stl",
                            innerHTML: `<div id="layer_stl_bg" class="fixed"></div><div id="layer_stl_cl"></div><nobr id="layer_stl_text" class="fixed">${o.getLang("global_to_top")}</nobr>`,
                            el: t.bodyNode,
                            onclick: _.cancelEvent,
                            onmousedown: r.lSTLDown,
                            sc: r.onScroll
                        })),
                        lSTLText: (0,
                        s.ge)("layer_stl_text", i),
                        lSTLShown: 0,
                        lSTLWas: 0,
                        lSTLWasSet: 0,
                        lSTLOpts: e
                    }),
                    t && t.setOptions({
                        onShow: r.show,
                        onHide: r.hide
                    }),
                    t && t.scrollInited || ((0,
                    _.addEvent)(i, "scroll", r.onScroll),
                    t && (t.scrollInited = !0)),
                    onBodyResize(),
                    r.onScroll()
                },
                hide: function() {
                    const t = cur.lSTLOpts;
                    t && t.parent && ((0,
                    _.removeEvent)(t.parent, "scroll", r.onScroll),
                    (0,
                    s.hide)(cur.lSTL),
                    cur.lSTLShown = 0,
                    t.onHide && t.onHide())
                },
                show: function() {
                    const t = cur.lSTLOpts;
                    t && t.parent && ((0,
                    _.addEvent)(t.parent, "scroll", r.onScroll),
                    setTimeout(r.onScroll, 0),
                    t.onShow && t.onShow())
                },
                lSTLDown: function(t) {
                    if (t = t || window.event,
                    (0,
                    _.checkEvent)(t))
                        return;
                    const e = cur.lSTLWrap;
                    if (!__afterFocus) {
                        let t = 0;
                        const i = e.scrollTop;
                        cur.lSTLWasSet && cur.lSTLWas ? (t = cur.lSTLWas,
                        cur.lSTLWas = 0) : cur.lSTLWas = i,
                        e.scrollTop = t
                    }
                    return (0,
                    _.cancelEvent)(t)
                },
                onScroll: function() {
                    if (!cur.lSTL)
                        return;
                    const t = cur.lSTLWrap.scrollTop
                      , e = 200
                      , i = cur.lSTLWas || t > e;
                    let n = 0;
                    if (cur.lSTL.style.marginTop = Math.min(t, boxLayer.scrollHeight - cur.lSTL.scrollHeight - 1) + "px",
                    vk.staticheader) {
                        const t = (0,
                        s.getSize)("page_header_wrap")[1];
                        cur.lSTLText.style.marginTop = Math.max(-Math.min((0,
                        l.scrollGetY)(), document.body.clientHeight - (window.lastWindowHeight || 0)), -t) + "px"
                    }
                    i ? (1 !== cur.lSTLShown && ((0,
                    s.show)(cur.lSTL),
                    cur.lSTLShown = 1),
                    cur.lSTLWas && t > 500 && (cur.lSTLWas = 0),
                    t > e ? (n = (t - e) / e,
                    cur.lSTLWasSet && (cur.lSTLWasSet = 0,
                    (0,
                    s.val)((0,
                    s.domLC)(cur.lSTL), o.getLang("global_to_top")),
                    (0,
                    s.removeClass)((0,
                    s.domLC)(cur.lSTL), "down"))) : (n = (e - t) / e,
                    cur.lSTLWas && (cur.lSTLWasSet || (cur.lSTLWasSet = 1,
                    (0,
                    s.val)((0,
                    s.domLC)(cur.lSTL), ""),
                    (0,
                    s.addClass)((0,
                    s.domLC)(cur.lSTL), "down"))))) : 0 !== cur.lSTLShown && ((0,
                    s.hide)(cur.lSTL),
                    cur.lSTLShown = 0),
                    (0,
                    s.setStyle)(cur.lSTL, {
                        opacity: Math.min(Math.max(n, 0), 1)
                    })
                }
            }
              , a = r
        }
        ,
        332066: (t,e,i)=>{
            i.d(e, {
                addResizeSensor: ()=>d,
                getScrollElement: ()=>h,
                nextFrame: ()=>a
            });
            var s = i(82161)
              , o = i(795558)
              , n = i(301230);
            let _;
            const l = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || (t=>setTimeout(t, 1))
              , r = window.cancelAnimationFrame || window.cancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
            function a(t) {
                _ && r(_),
                _ = l(t)
            }
            function h(t) {
                return (0,
                s.isString)(t) && "_" === t[0] ? (0,
                o.geByClass1)(t) : (0,
                o.ge)(t)
            }
            function d(t, e) {
                if ((t = h(t)) && (0,
                s.isFunction)(e)) {
                    if (n.browser.msie9 || n.browser.opera && n.browser.version < 13) {
                        let i = !1
                          , _ = !1;
                        const l = (0,
                        o.ce)("object", {
                            type: "text/html",
                            className: "ui_scroll_resize_object",
                            data: "about:blank",
                            onload: function() {
                                _ = !0,
                                i && r()
                            }
                        });
                        function r() {
                            if (!l.contentDocument)
                                return setTimeout(r, 100);
                            l.contentDocument.defaultView.removeEventListener("resize", e),
                            l.contentDocument.defaultView.addEventListener("resize", e),
                            e()
                        }
                        return t.appendChild(l),
                        t.__resizeSensor__ = [l, function() {
                            i = !0,
                            _ && r()
                        }
                        ]
                    }
                    {
                        const a = (0,
                        o.ce)("div", {
                            className: "ui_scroll_resize_sensor"
                        })
                          , d = (0,
                        o.ce)("div", {
                            className: "ui_scroll_resize_sensor ui_scroll_resize_expand"
                        })
                          , c = (0,
                        o.ce)("div", {
                            className: "ui_scroll_resize_sensor ui_scroll_resize_shrink"
                        })
                          , u = (0,
                        o.ce)("div")
                          , p = (0,
                        o.ce)("div");
                        let b = null;
                        return d.appendChild(u),
                        c.appendChild(p),
                        a.appendChild(d),
                        a.appendChild(c),
                        t.appendChild(a),
                        t.__resizeSensor__ = [a, d.onscroll = c.onscroll = function() {
                            const i = (t.offsetWidth || 1e4) + 10
                              , s = (t.offsetHeight || 1e4) + 10;
                            u.style.width = i + "px",
                            u.style.height = s + "px",
                            d.scrollLeft = i,
                            d.scrollTop = s,
                            c.scrollLeft = i,
                            c.scrollTop = s,
                            b !== (b = i + " " + s) && e()
                        }
                        ]
                    }
                }
            }
        }
    }, __webpack_module_cache__ = {}, deferred, leafPrototypes, getProto, inProgress, loadStylesheet, installedCssChunks;
    function __webpack_require__(t) {
        var e = __webpack_module_cache__[t];
        if (void 0 !== e)
            return e.exports;
        var i = __webpack_module_cache__[t] = {
            exports: {}
        };
        return __webpack_modules__[t].call(i.exports, i, i.exports, __webpack_require__),
        i.exports
    }
    __webpack_require__.m = __webpack_modules__,
    __webpack_require__.amdO = {},
    deferred = [],
    __webpack_require__.O = (t,e,i,s)=>{
        if (!e) {
            var o = 1 / 0;
            for (r = 0; r < deferred.length; r++) {
                for (var [e,i,s] = deferred[r], n = !0, _ = 0; _ < e.length; _++)
                    (!1 & s || o >= s) && Object.keys(__webpack_require__.O).every((t=>__webpack_require__.O[t](e[_]))) ? e.splice(_--, 1) : (n = !1,
                    s < o && (o = s));
                if (n) {
                    deferred.splice(r--, 1);
                    var l = i();
                    void 0 !== l && (t = l)
                }
            }
            return t
        }
        s = s || 0;
        for (var r = deferred.length; r > 0 && deferred[r - 1][2] > s; r--)
            deferred[r] = deferred[r - 1];
        deferred[r] = [e, i, s]
    }
    ,
    __webpack_require__.n = t=>{
        var e = t && t.__esModule ? ()=>t.default : ()=>t;
        return __webpack_require__.d(e, {
            a: e
        }),
        e
    }
    ,
    getProto = Object.getPrototypeOf ? t=>Object.getPrototypeOf(t) : t=>t.__proto__,
    __webpack_require__.t = function(t, e) {
        if (1 & e && (t = this(t)),
        8 & e)
            return t;
        if ("object" == typeof t && t) {
            if (4 & e && t.__esModule)
                return t;
            if (16 & e && "function" == typeof t.then)
                return t
        }
        var i = Object.create(null);
        __webpack_require__.r(i);
        var s = {};
        leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
        for (var o = 2 & e && t; "object" == typeof o && !~leafPrototypes.indexOf(o); o = getProto(o))
            Object.getOwnPropertyNames(o).forEach((e=>s[e] = ()=>t[e]));
        return s.default = ()=>t,
        __webpack_require__.d(i, s),
        i
    }
    ,
    __webpack_require__.d = (t,e)=>{
        for (var i in e)
            __webpack_require__.o(e, i) && !__webpack_require__.o(t, i) && Object.defineProperty(t, i, {
                enumerable: !0,
                get: e[i]
            })
    }
    ,
    __webpack_require__.f = {},
    __webpack_require__.e = t=>Promise.all(Object.keys(__webpack_require__.f).reduce(((e,i)=>(__webpack_require__.f[i](t, e),
    e)), [])),
    __webpack_require__.u = t=>25394 === t ? "AudioLongtapModal.98b6df61d646414354a3.js" : 24817 === t ? "hls.7bfefe299fa92971b99a.js" : 75980 === t ? "menu_settings.b73d1f0a03f70163e02d.js" : 96816 === t ? "web-audio-lyrics-modal.5b786d2492e85e4a335f.js" : 9375 === t ? "voice_message_player.f0c31b4a3dc08de145c9.js" : 28762 === t ? "speech.be0c329a1eff7c81577d.js" : 57468 === t ? "SilentModeForms.6cf18c53f58f775934b3.js" : 28872 === t ? "feed-client-nav-skeleton.93951c516f1e3f2a55ad.js" : 35953 === t ? "feed-client-nav-async-right-block.98e503ddcd7a638e1b63.js" : 38288 === t ? "lottie.5e4758c39f106eab733a.js" : void 0,
    __webpack_require__.miniCssF = t=>t + "." + {
        25394: "6af57e1b0cf5a74f9a87",
        57468: "35be3dfa1e90e3cdd0a1",
        75980: "5bbee2c9f3e189193a73"
    }[t] + ".css",
    __webpack_require__.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    __webpack_require__.o = (t,e)=>Object.prototype.hasOwnProperty.call(t, e),
    inProgress = {},
    __webpack_require__.l = (t,e,i,s)=>{
        if (inProgress[t])
            inProgress[t].push(e);
        else {
            var o, n;
            if (void 0 !== i)
                for (var _ = document.getElementsByTagName("script"), l = 0; l < _.length; l++) {
                    var r = _[l];
                    if (r.getAttribute("src") == t || r.getAttribute("data-webpack") == "vk:" + i) {
                        o = r;
                        break
                    }
                }
            o || (n = !0,
            (o = document.createElement("script")).charset = "utf-8",
            o.timeout = 120,
            __webpack_require__.nc && o.setAttribute("nonce", __webpack_require__.nc),
            o.setAttribute("data-webpack", "vk:" + i),
            o.src = t),
            inProgress[t] = [e];
            var a = (e,i)=>{
                o.onerror = o.onload = null,
                clearTimeout(h);
                var s = inProgress[t];
                if (delete inProgress[t],
                o.parentNode && o.parentNode.removeChild(o),
                s && s.forEach((t=>t(i))),
                e)
                    return e(i)
            }
              , h = setTimeout(a.bind(null, void 0, {
                type: "timeout",
                target: o
            }), 12e4);
            o.onerror = a.bind(null, o.onerror),
            o.onload = a.bind(null, o.onload),
            n && document.head.appendChild(o)
        }
    }
    ,
    __webpack_require__.r = t=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    __webpack_require__.p = "/dist/",
    loadStylesheet = t=>new Promise(((e,i)=>{
        var s = __webpack_require__.miniCssF(t)
          , o = __webpack_require__.p + s;
        if (((t,e)=>{
            for (var i = document.getElementsByTagName("link"), s = 0; s < i.length; s++) {
                var o = (_ = i[s]).getAttribute("data-href") || _.getAttribute("href");
                if ("stylesheet" === _.rel && (o === t || o === e))
                    return _
            }
            var n = document.getElementsByTagName("style");
            for (s = 0; s < n.length; s++) {
                var _;
                if ((o = (_ = n[s]).getAttribute("data-href")) === t || o === e)
                    return _
            }
        }
        )(s, o))
            return e();
        ((t,e,i,s)=>{
            var o = document.createElement("link");
            o.rel = "stylesheet",
            o.type = "text/css",
            o.onerror = o.onload = n=>{
                if (o.onerror = o.onload = null,
                "load" === n.type)
                    i();
                else {
                    var _ = n && ("load" === n.type ? "missing" : n.type)
                      , l = n && n.target && n.target.href || e
                      , r = new Error("Loading CSS chunk " + t + " failed.\n(" + l + ")");
                    r.code = "CSS_CHUNK_LOAD_FAILED",
                    r.type = _,
                    r.request = l,
                    o.parentNode.removeChild(o),
                    s(r)
                }
            }
            ,
            o.href = e,
            document.head.appendChild(o)
        }
        )(t, o, e, i)
    }
    )),
    installedCssChunks = {
        68435: 0
    },
    __webpack_require__.f.miniCss = (t,e)=>{
        installedCssChunks[t] ? e.push(installedCssChunks[t]) : 0 !== installedCssChunks[t] && {
            25394: 1,
            57468: 1,
            75980: 1
        }[t] && e.push(installedCssChunks[t] = loadStylesheet(t).then((()=>{
            installedCssChunks[t] = 0
        }
        ), (e=>{
            throw delete installedCssChunks[t],
            e
        }
        )))
    }
    ,
    (()=>{
        var t = {
            68435: 0
        };
        __webpack_require__.f.j = (e,i)=>{
            var s = __webpack_require__.o(t, e) ? t[e] : void 0;
            if (0 !== s)
                if (s)
                    i.push(s[2]);
                else {
                    var o = new Promise(((i,o)=>s = t[e] = [i, o]));
                    i.push(s[2] = o);
                    var n = __webpack_require__.p + __webpack_require__.u(e)
                      , _ = new Error;
                    __webpack_require__.l(n, (i=>{
                        if (__webpack_require__.o(t, e) && (0 !== (s = t[e]) && (t[e] = void 0),
                        s)) {
                            var o = i && ("load" === i.type ? "missing" : i.type)
                              , n = i && i.target && i.target.src;
                            _.message = "Loading chunk " + e + " failed.\n(" + o + ": " + n + ")",
                            _.name = "ChunkLoadError",
                            _.type = o,
                            _.request = n,
                            s[1](_)
                        }
                    }
                    ), "chunk-" + e, e)
                }
        }
        ,
        __webpack_require__.O.j = e=>0 === t[e];
        var e = (e,i)=>{
            var s, o, [n,_,l] = i, r = 0;
            if (n.some((e=>0 !== t[e]))) {
                for (s in _)
                    __webpack_require__.o(_, s) && (__webpack_require__.m[s] = _[s]);
                if (l)
                    var a = l(__webpack_require__)
            }
            for (e && e(i); r < n.length; r++)
                o = n[r],
                __webpack_require__.o(t, o) && t[o] && t[o][0](),
                t[o] = 0;
            return __webpack_require__.O(a)
        }
          , i = self.webpackChunkvk = self.webpackChunkvk || [];
        i.forEach(e.bind(null, 0)),
        i.push = e.bind(null, i.push.bind(i))
    }
    )();
    var __webpack_exports__ = __webpack_require__.O(void 0, [75514, 98066, 56990, 24509, 76400, 40885, 68592], (()=>__webpack_require__(526818)));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__)
}
)();
