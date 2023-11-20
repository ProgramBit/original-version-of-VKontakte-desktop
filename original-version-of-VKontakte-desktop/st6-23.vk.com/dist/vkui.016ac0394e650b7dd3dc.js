(self.webpackChunkvk = self.webpackChunkvk || []).push([[56990], {
    439893: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Accordion: ()=>l
        });
        var n = a(772253)
          , r = a(667294)
          , o = a(523323)
          , i = a(348567)
          , l = function(e) {
            return r.createElement(o.RootComponent, (0,
            n._)({
                Component: "details",
                baseClassName: "vkuiAccordion"
            }, e))
        };
        l.Summary = i.AccordionSummary
    }
    ,
    348567: (e,t,a)=>{
        "use strict";
        a.d(t, {
            AccordionSummary: ()=>u
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(7685)
          , l = a(457561)
          , s = a(962557)
          , c = a(426305)
          , u = function(e) {
            var t = e.className
              , a = e.after
              , u = e.before
              , d = e.ExpandIcon
              , v = void 0 === d ? i.Icon24ChevronDown : d
              , m = e.CollapseIcon
              , p = void 0 === m ? l.Icon24ChevronUp : m
              , f = e.iconPosition
              , h = void 0 === f ? "after" : f
              , g = e.children
              , b = (0,
            r._)(e, ["className", "after", "before", "ExpandIcon", "CollapseIcon", "iconPosition", "children"])
              , k = o.createElement("span", {
                className: "vkuiIcon"
            }, o.createElement(v, {
                className: (0,
                s.classNames)("vkuiAccordionSummary__icon", "vkuiAccordionSummary__icon--expand")
            }), o.createElement(p, {
                className: (0,
                s.classNames)("vkuiAccordionSummary__icon", "vkuiAccordionSummary__icon--collapse")
            }));
            return o.createElement(c.SimpleCell, (0,
            n._)({
                className: (0,
                s.classNames)("vkuiAccordionSummary", t),
                Component: "summary",
                before: o.createElement(o.Fragment, null, "before" === h && k, u),
                after: o.createElement(o.Fragment, null, a, "after" === h && k)
            }, b), g)
        }
    }
    ,
    745433: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ActionSheet: ()=>E
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(667294)
          , s = a(962557)
          , c = a(323025)
          , u = a(854193)
          , d = a(119360)
          , v = a(855356)
          , m = a(108681)
          , p = a(644029)
          , f = a(909795)
          , h = a(949444)
          , g = a(894872)
          , b = a(218795)
          , k = a(522983)
          , C = a(231586)
          , _ = a(786543)
          , E = ((0,
        p.warnOnce)("ActionSheet"),
        function(e) {
            var t = e.children
              , a = e.className
              , p = e.header
              , E = e.text
              , y = e.style
              , S = e.iosCloseItem
              , N = e.popupDirection
              , w = e.popupOffsetDistance
              , R = e.placement
              , A = (0,
            o._)(e, ["children", "className", "header", "text", "style", "iosCloseItem", "popupDirection", "popupOffsetDistance", "placement"])
              , M = (0,
            d.usePlatform)()
              , T = (0,
            i._)(l.useState(void 0), 2)
              , P = T[0]
              , I = T[1]
              , D = function() {
                return I("other")
            }
              , L = l.useRef(s.noop)
              , x = (0,
            c.useAdaptivityWithJSMediaQueries)().isDesktop;
            (0,
            f.useScrollLock)(!x);
            var O = M === m.Platform.IOS ? 300 : 200;
            x && (O = 0);
            var B = (0,
            v.useTimeout)((function() {
                A.onClose({
                    closedBy: P || "other"
                }),
                L.current(),
                L.current = s.noop
            }
            ), O);
            l.useEffect((function() {
                P ? B.set() : B.clear()
            }
            ), [P, B]);
            var z = l.useCallback((function(e) {
                var t = e.action
                  , a = e.immediateAction
                  , n = e.autoClose
                  , r = e.isCancelItem;
                return function(e) {
                    e.persist(),
                    a && a(e),
                    n ? (L.current = function() {
                        return t && t(e)
                    }
                    ,
                    I(r ? "cancel-item" : "action-item")) : t && t(e)
                }
            }
            ), [])
              , F = (0,
            u.useObjectMemo)({
                onItemClick: z,
                isDesktop: x
            })
              , H = x ? _.ActionSheetDropdownDesktop : C.ActionSheetDropdown;
            N = void 0 !== N ? N : "bottom";
            var V = x ? Object.assign(A, {
                popupOffsetDistance: w,
                popupDirection: N,
                placement: R
            }) : A
              , Y = l.createElement(b.ActionSheetContext.Provider, {
                value: F
            }, l.createElement(H, (0,
            r._)((0,
            n._)({
                closing: Boolean(P),
                timeout: O
            }, V), {
                onClose: D,
                className: x ? a : void 0,
                style: x ? y : void 0
            }), l.createElement("div", {
                className: "vkuiActionSheet__content-wrapper"
            }, (p || E) && l.createElement("header", {
                className: "vkuiActionSheet__header"
            }, p && l.createElement(g.Footnote, {
                weight: "2",
                className: "vkuiActionSheet__title"
            }, p), E && l.createElement(g.Footnote, {
                className: "vkuiActionSheet__text"
            }, E)), t), M === m.Platform.IOS && !x && l.createElement("div", {
                className: "vkuiActionSheet__close-item-wrapper--ios"
            }, null != S ? S : l.createElement(k.ActionSheetDefaultIosCloseItem, null))));
            return x ? Y : l.createElement(h.PopoutWrapper, {
                closing: Boolean(P),
                alignY: "bottom",
                className: a,
                style: y,
                onClick: D,
                hasMask: !0,
                fixed: !0
            }, Y)
        }
        )
    }
    ,
    218795: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ActionSheetContext: ()=>n
        });
        var n = a(667294).createContext({})
    }
    ,
    522983: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ActionSheetDefaultIosCloseItem: ()=>i
        });
        var n = a(772253)
          , r = a(667294)
          , o = a(942347)
          , i = function(e) {
            return r.createElement(o.ActionSheetItem, (0,
            n._)({
                autoClose: !0,
                mode: "cancel",
                isCancelItem: !0
            }, e), "Отмена")
        }
    }
    ,
    231586: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ActionSheetDropdown: ()=>p
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(323025)
          , c = a(119360)
          , u = a(489026)
          , d = a(108681)
          , v = a(843718)
          , m = function(e) {
            return e.stopPropagation()
        }
          , p = function(e) {
            var t = e.children
              , a = e.closing
              , p = (e.toggleRef,
            e.className)
              , f = (0,
            o._)(e, ["children", "closing", "toggleRef", "className"])
              , h = (0,
            s.useAdaptivityWithJSMediaQueries)().sizeY
              , g = (0,
            c.usePlatform)();
            return i.createElement(v.FocusTrap, (0,
            r._)((0,
            n._)({}, f), {
                onClick: m,
                className: (0,
                l.classNames)("vkuiActionSheet", g === d.Platform.IOS && "vkuiActionSheet--ios", a && "vkuiActionSheet--closing", h === u.SizeType.COMPACT && "vkuiActionSheet--sizeY-compact", p)
            }), t)
        }
    }
    ,
    786543: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ActionSheetDropdownDesktop: ()=>C
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(323025)
          , c = a(81986)
          , u = a(151571)
          , d = a(119360)
          , v = a(489026)
          , m = a(181498)
          , p = a(330434)
          , f = a(108681)
          , h = a(644029)
          , g = a(843718)
          , b = a(59214)
          , k = (0,
        h.warnOnce)("ActionSheet");
        var C = function(e) {
            var t = e.children
              , a = e.toggleRef
              , h = (e.closing,
            e.popupDirection)
              , C = e.onClose
              , _ = e.className
              , E = e.style
              , y = e.popupOffsetDistance
              , S = void 0 === y ? 0 : y
              , N = e.placement
              , w = (0,
            o._)(e, ["children", "toggleRef", "closing", "popupDirection", "onClose", "className", "style", "popupOffsetDistance", "placement"])
              , R = (0,
            m.useDOM)().document
              , A = (0,
            d.usePlatform)()
              , M = (0,
            s.useAdaptivityWithJSMediaQueries)().sizeY
              , T = i.useRef(null);
            (0,
            c.useEffectDev)((function() {
                var e;
                ((e = a) && "current"in e ? e.current : e) || k('Свойство "toggleRef" не передано', "error")
            }
            ), [a]);
            var P = i.useMemo((function() {
                return "top" === h || "function" == typeof h && "top" === h(T)
            }
            ), [h, T])
              , I = null != N ? N : P ? "top-end" : "bottom-end"
              , D = (0,
            u.useEventListener)("click", (function(e) {
                var t, a, n = null === (t = T) || void 0 === t ? void 0 : t.current;
                n && !n.contains(e.target) && (null === (a = C) || void 0 === a || a())
            }
            ));
            i.useEffect((function() {
                setTimeout((function() {
                    D.add(R.body)
                }
                ))
            }
            ), [D, R]);
            var L = i.useCallback((function(e) {
                return e.stopPropagation()
            }
            ), [])
              , x = i.useMemo((function() {
                return (0,
                p.isRefObject)(a) ? a : {
                    current: a
                }
            }
            ), [a]);
            return i.createElement(b.Popper, {
                targetRef: x,
                offsetDistance: S,
                placement: I,
                className: (0,
                l.classNames)("vkuiActionSheet", A === f.Platform.IOS && "vkuiActionSheet--ios", "vkuiActionSheet--desktop", M === v.SizeType.COMPACT && "vkuiActionSheet--sizeY-compact", _),
                style: E,
                getRef: T,
                forcePortal: !1
            }, i.createElement(g.FocusTrap, (0,
            r._)((0,
            n._)({
                onClose: C
            }, w), {
                onClick: L
            }), t))
        }
    }
    ,
    942347: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ActionSheetItem: ()=>k
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(856335)
          , s = a(690839)
          , c = a(962557)
          , u = a(323025)
          , d = a(119360)
          , v = a(489026)
          , m = a(108681)
          , p = a(218795)
          , f = a(795281)
          , h = a(243912)
          , g = a(754259)
          , b = a(931252)
          , k = function(e) {
            var t = e.children
              , a = e.autoClose
              , k = e.mode
              , C = void 0 === k ? "default" : k
              , _ = e.meta
              , E = e.subtitle
              , y = e.before
              , S = e.selectable
              , N = e.value
              , w = e.name
              , R = e.checked
              , A = e.defaultChecked
              , M = e.onChange
              , T = e.onClick
              , P = e.onImmediateClick
              , I = e.multiline
              , D = void 0 !== I && I
              , L = e.iconChecked
              , x = e.className
              , O = e.isCancelItem
              , B = (0,
            o._)(e, ["children", "autoClose", "mode", "meta", "subtitle", "before", "selectable", "value", "name", "checked", "defaultChecked", "onChange", "onClick", "onImmediateClick", "multiline", "iconChecked", "className", "isCancelItem"])
              , z = (0,
            d.usePlatform)()
              , F = i.useContext(p.ActionSheetContext)
              , H = F.onItemClick
              , V = void 0 === H ? function() {
                return c.noop
            }
            : H
              , Y = F.isDesktop
              , W = (0,
            u.useAdaptivityWithJSMediaQueries)().sizeY
              , q = L || (W === v.SizeType.COMPACT ? i.createElement(l.Icon20CheckCircleOn, null) : i.createElement(s.Icon24CheckCircleOn, null))
              , G = B.href ? "a" : "div";
            S && (G = "label");
            var U = E || _ || S
              , X = !U && !y && z === m.Platform.IOS;
            return i.createElement(f.Tappable, (0,
            r._)((0,
            n._)({
                Component: G
            }, B), {
                onClick: S ? T : V({
                    action: T,
                    immediateAction: P,
                    autoClose: Boolean(a),
                    isCancelItem: Boolean(O)
                }),
                activeMode: z === m.Platform.IOS ? "vkuiActionSheetItem--active" : void 0,
                className: (0,
                c.classNames)("vkuiActionSheetItem", z === m.Platform.IOS && "vkuiActionSheetItem--ios", "cancel" === C && "vkuiActionSheetItem--mode-cancel", "destructive" === C && "vkuiActionSheetItem--mode-destructive", W === v.SizeType.COMPACT && "vkuiActionSheetItem--sizeY-compact", U && "vkuiActionSheetItem--rich", Y && "vkuiActionSheetItem--desktop", S && "vkuiActionSheetItem--selectable", x)
            }), y && i.createElement("div", {
                className: "vkuiActionSheetItem__before"
            }, y), i.createElement("div", {
                className: (0,
                c.classNames)("vkuiActionSheetItem__container", !D && "vkuiActionSheetItem--ellipsis")
            }, i.createElement("div", {
                className: (0,
                c.classNames)("vkuiActionSheetItem__content", X && "vkuiActionSheetItem--centered")
            }, z === m.Platform.IOS ? i.createElement(b.Title, {
                className: "vkuiActionSheetItem__children",
                weight: "cancel" === C ? "2" : "3",
                level: X ? "2" : "3"
            }, t) : i.createElement(g.Text, {
                className: "vkuiActionSheetItem__children"
            }, t), _ && i.createElement(g.Text, {
                className: "vkuiActionSheetItem__meta"
            }, _)), E && i.createElement(h.Subhead, {
                className: "vkuiActionSheetItem__subtitle"
            }, E)), S && i.createElement("div", {
                className: "vkuiActionSheetItem__after"
            }, i.createElement("input", {
                type: "radio",
                className: "vkuiActionSheetItem__radio",
                name: w,
                value: N,
                onChange: M,
                onClick: V({
                    action: c.noop,
                    immediateAction: c.noop,
                    autoClose: Boolean(a),
                    isCancelItem: Boolean(O)
                }),
                defaultChecked: A,
                checked: R,
                disabled: B.disabled
            }), i.createElement("div", {
                className: "vkuiActionSheetItem__marker"
            }, q)))
        }
    }
    ,
    883024: (e,t,a)=>{
        "use strict";
        a.d(t, {
            AdaptiveIconRenderer: ()=>o
        });
        var n = a(667294)
          , r = a(934977)
          , o = function(e) {
            var t = e.IconCompact
              , a = e.IconRegular
              , o = (0,
            r.useAdaptivityConditionalRender)().sizeY;
            return n.createElement(n.Fragment, null, o.compact && n.createElement(t, {
                className: o.compact.className
            }), o.regular && n.createElement(a, {
                className: o.regular.className
            }))
        }
    }
    ,
    362276: (e,t,a)=>{
        "use strict";
        a.d(t, {
            AdaptivityContext: ()=>n
        });
        var n = a(667294).createContext({})
    }
    ,
    133893: (e,t,a)=>{
        "use strict";
        a.d(t, {
            AdaptivityProvider: ()=>u
        });
        var n = a(667294)
          , r = a(962557)
          , o = a(735496)
          , i = a(169077)
          , l = a(489026)
          , s = a(644029)
          , c = a(362276)
          , u = ((0,
        s.warnOnce)("AdaptivityProvider"),
        function(e) {
            var t = e.viewWidth
              , a = e.viewHeight
              , s = e.sizeX
              , u = e.sizeY
              , d = e.hasPointer
              , v = e.hasHover
              , m = e.children
              , p = void 0 !== t && void 0 !== a || void 0 !== t && void 0 !== s && void 0 !== u
              , f = (0,
            o.useBridgeAdaptivity)(p);
            var h = n.useMemo((function() {
                return function(e, t) {
                    var a = e.viewWidth
                      , n = e.viewHeight
                      , o = e.sizeX
                      , s = e.sizeY
                      , c = e.hasPointer
                      , u = e.hasHover;
                    if ("adaptive" === t.type) {
                        var d = t.viewportWidth
                          , v = t.viewportHeight;
                        a = d >= i.BREAKPOINTS.DESKTOP ? l.ViewWidth.DESKTOP : d >= i.BREAKPOINTS.TABLET ? l.ViewWidth.TABLET : d >= i.BREAKPOINTS.SMALL_TABLET ? l.ViewWidth.SMALL_TABLET : d >= i.BREAKPOINTS.MOBILE ? l.ViewWidth.MOBILE : l.ViewWidth.SMALL_MOBILE,
                        n = v >= i.BREAKPOINTS.MEDIUM_HEIGHT ? l.ViewHeight.MEDIUM : v >= i.BREAKPOINTS.MOBILE_LANDSCAPE_HEIGHT ? l.ViewHeight.SMALL : l.ViewHeight.EXTRA_SMALL,
                        o = a <= l.ViewWidth.MOBILE ? l.SizeType.COMPACT : l.SizeType.REGULAR,
                        s = a >= l.ViewWidth.SMALL_TABLET && r.hasMouse || n <= l.ViewHeight.EXTRA_SMALL ? l.SizeType.COMPACT : l.SizeType.REGULAR
                    } else
                        "force_mobile" === t.type || "force_mobile_compact" === t.type ? (a = l.ViewWidth.MOBILE,
                        o = l.SizeType.COMPACT,
                        s = "force_mobile_compact" === t.type ? l.SizeType.COMPACT : l.SizeType.REGULAR) : (void 0 === o && void 0 !== a && (o = a <= l.ViewWidth.MOBILE ? l.SizeType.COMPACT : l.SizeType.REGULAR),
                        void 0 === s && void 0 !== a && void 0 !== n && (s = a >= l.ViewWidth.SMALL_TABLET && r.hasMouse || n <= l.ViewHeight.EXTRA_SMALL ? l.SizeType.COMPACT : l.SizeType.REGULAR));
                    return {
                        viewWidth: a,
                        viewHeight: n,
                        sizeX: o,
                        sizeY: s,
                        hasPointer: c,
                        hasHover: u
                    }
                }({
                    viewWidth: t,
                    viewHeight: a,
                    sizeX: s,
                    sizeY: u,
                    hasPointer: d,
                    hasHover: v
                }, f)
            }
            ), [t, a, s, u, d, v, f]);
            return n.createElement(c.AdaptivityContext.Provider, {
                value: h
            }, m)
        }
        )
    }
    ,
    409380: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Alert: ()=>_
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(667294)
          , s = a(962557)
          , c = a(323025)
          , u = a(228248)
          , d = a(119360)
          , v = a(70743)
          , m = a(108681)
          , p = a(256631)
          , f = a(909795)
          , h = a(843718)
          , g = a(443890)
          , b = a(949444)
          , k = a(598929)
          , C = a(950297)
          , _ = function(e) {
            var t = e.actions
              , a = void 0 === t ? [] : t
              , _ = e.actionsLayout
              , E = void 0 === _ ? "horizontal" : _
              , y = e.children
              , S = e.className
              , N = e.style
              , w = e.text
              , R = e.header
              , A = e.onClose
              , M = e.dismissLabel
              , T = void 0 === M ? "Закрыть предупреждение" : M
              , P = e.renderAction
              , I = e.actionsAlign
              , D = (0,
            o._)(e, ["actions", "actionsLayout", "children", "className", "style", "text", "header", "onClose", "dismissLabel", "renderAction", "actionsAlign"])
              , L = (0,
            u.useId)()
              , x = "vkui-alert-".concat(L, "-header")
              , O = "vkui-alert-".concat(L, "-text")
              , B = (0,
            d.usePlatform)()
              , z = (0,
            c.useAdaptivityWithJSMediaQueries)().isDesktop
              , F = (0,
            v.useWaitTransitionFinish)().waitTransitionFinish
              , H = (0,
            i._)(l.useState(!1), 2)
              , V = H[0]
              , Y = H[1]
              , W = l.useRef(null)
              , q = B === m.Platform.IOS ? 300 : 200
              , G = l.useCallback((function() {
                Y(!0),
                F(W.current, (function(e) {
                    e && "opacity" !== e.propertyName || A()
                }
                ), q)
            }
            ), [W, F, A, q])
              , U = l.useCallback((function(e) {
                var t = e.action;
                e.autoClose ? (Y(!0),
                F(W.current, (function(e) {
                    e && "opacity" !== e.propertyName || (A(),
                    t && t())
                }
                ), q)) : t && t()
            }
            ), [W, F, A, q]);
            return (0,
            f.useScrollLock)(),
            l.createElement(b.PopoutWrapper, {
                className: S,
                closing: V,
                style: N,
                onClick: G
            }, l.createElement(h.FocusTrap, (0,
            r._)((0,
            n._)({}, D), {
                getRootRef: W,
                onClick: p.stopPropagation,
                onClose: G,
                timeout: q,
                className: (0,
                s.classNames)("vkuiAlert", B === m.Platform.IOS && "vkuiAlert--ios", B === m.Platform.VKCOM && "vkuiAlert--vkcom", V && "vkuiAlert--closing", z && "vkuiAlert--desktop"),
                role: "alertdialog",
                "aria-modal": !0,
                "aria-labelledby": x,
                "aria-describedby": O
            }), l.createElement("div", {
                className: "vkuiAlert__content"
            }, (0,
            s.hasReactNode)(R) && l.createElement(C.AlertHeader, {
                id: x
            }, R), (0,
            s.hasReactNode)(w) && l.createElement(C.AlertText, {
                id: O
            }, w), y), l.createElement(k.AlertActions, {
                actions: a,
                actionsAlign: I,
                actionsLayout: E,
                renderAction: P,
                onItemClick: U
            }), z && l.createElement(g.ModalDismissButton, {
                onClick: G,
                "aria-label": T
            })))
        }
    }
    ,
    399770: (e,t,a)=>{
        "use strict";
        a.d(t, {
            AlertAction: ()=>m
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(119360)
          , s = a(108681)
          , c = a(658113)
          , u = a(795281)
          , d = function(e) {
            var t = e.mode
              , a = (0,
            r._)(e, ["mode"]);
            return o.createElement(u.Tappable, (0,
            n._)({
                Component: a.href ? "a" : "button",
                className: (0,
                i.classNames)("vkuiAlert__action", "destructive" === t && "vkuiAlert__action--mode-destructive", "cancel" === t && "vkuiAlert__action--mode-cancel")
            }, a))
        }
          , v = function(e) {
            var t = e.mode
              , a = (0,
            r._)(e, ["mode"])
              , u = "tertiary";
            return (0,
            l.usePlatform)() === s.Platform.VKCOM && (u = "cancel" === t ? "secondary" : "primary"),
            o.createElement(c.Button, (0,
            n._)({
                className: (0,
                i.classNames)("vkuiAlert__button", "cancel" === t && "vkuiAlert__button--mode-cancel"),
                mode: u,
                size: "m"
            }, a))
        }
          , m = function(e) {
            return (0,
            l.usePlatform)() === s.Platform.IOS ? o.createElement(d, e) : o.createElement(v, e)
        }
    }
    ,
    598929: (e,t,a)=>{
        "use strict";
        a.d(t, {
            AlertActions: ()=>v
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(119360)
          , s = a(108681)
          , c = a(399770)
          , u = {
            left: "vkuiAlert__actions--align-left",
            center: "vkuiAlert__actions--align-center",
            right: "vkuiAlert__actions--align-right"
        }
          , d = {
            vertical: "vkuiAlert__actions--direction-vertical",
            horizontal: "vkuiAlert__actions--direction-horizontal"
        }
          , v = function(e) {
            var t = e.actions
              , a = void 0 === t ? [] : t
              , v = e.renderAction
              , m = void 0 === v ? function(e) {
                return o.createElement(c.AlertAction, e)
            }
            : v
              , p = e.onItemClick
              , f = e.actionsAlign
              , h = e.actionsLayout
              , g = (0,
            l.usePlatform)() === s.Platform.VKCOM ? "horizontal" : h;
            return o.createElement("div", {
                className: (0,
                i.classNames)("vkuiAlert__actions", f && u[f], g && d[g])
            }, a.map((function(e, t) {
                var a = e.title
                  , i = (e.action,
                e.autoClose,
                (0,
                r._)(e, ["title", "action", "autoClose"]));
                return o.createElement(o.Fragment, {
                    key: t
                }, m((0,
                n._)({
                    children: a,
                    onClick: function() {
                        return p(e)
                    }
                }, i)))
            }
            )))
        }
    }
    ,
    950297: (e,t,a)=>{
        "use strict";
        a.d(t, {
            AlertHeader: ()=>d,
            AlertText: ()=>v
        });
        var n = a(772253)
          , r = a(667294)
          , o = a(119360)
          , i = a(108681)
          , l = a(443910)
          , s = a(894872)
          , c = a(754259)
          , u = a(931252)
          , d = function(e) {
            return (0,
            o.usePlatform)() === i.Platform.IOS ? r.createElement(u.Title, (0,
            n._)({
                className: "vkuiAlert__header",
                weight: "1",
                level: "3"
            }, e)) : r.createElement(u.Title, (0,
            n._)({
                className: "vkuiAlert__header",
                weight: "2",
                level: "2"
            }, e))
        }
          , v = function(e) {
            switch ((0,
            o.usePlatform)()) {
            case i.Platform.VKCOM:
                return r.createElement(s.Footnote, (0,
                n._)({
                    className: "vkuiAlert__text"
                }, e));
            case i.Platform.IOS:
                return r.createElement(l.Caption, (0,
                n._)({
                    className: "vkuiAlert__text"
                }, e));
            default:
                return r.createElement(c.Text, (0,
                n._)({
                    Component: "span",
                    className: "vkuiAlert__text",
                    weight: "3"
                }, e))
            }
        }
    }
    ,
    927101: (e,t,a)=>{
        "use strict";
        a.d(t, {
            AppRoot: ()=>S
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(158339)
          , i = a(191963)
          , l = a(262039)
          , s = a(667294)
          , c = a(962557)
          , u = a(324285)
          , d = a(505901)
          , v = a(720194)
          , m = a(162649)
          , p = a(489026)
          , f = a(181498)
          , h = a(330434)
          , g = a(214542)
          , b = a(644029)
          , k = a(338784)
          , C = a(909795)
          , _ = ((0,
        b.warnOnce)("AppRoot"),
        (0,
        n._)({
            none: "vkui--sizeX-none"
        }, p.SizeType.REGULAR, "vkui--sizeX-regular"))
          , E = {
            card: "vkui--layout-card",
            plain: "vkui--layout-plain"
        };
        var y = "--vkui_internal--safe_area_inset_"
          , S = function(e) {
            var t = e.children
              , a = e.mode
              , n = void 0 === a ? "full" : a
              , b = e.scroll
              , S = void 0 === b ? "global" : b
              , N = e.portalRoot
              , w = void 0 === N ? null : N
              , R = e.disablePortal
              , A = e.disableParentTransformForPositionFixedElements
              , M = e.className
              , T = e.safeAreaInsets
              , P = e.layout
              , I = (0,
            o._)(e, ["children", "mode", "scroll", "portalRoot", "disablePortal", "disableParentTransformForPositionFixedElements", "className", "safeAreaInsets", "layout"])
              , D = (0,
            m.useKeyboardInputTracker)()
              , L = s.useRef(null)
              , x = (0,
            i._)(s.useState(null), 2)
              , O = x[0]
              , B = x[1]
              , z = (0,
            f.useDOM)().document
              , F = (0,
            v.useInsets)(!T)
              , H = T || F
              , V = (0,
            d.useAppearance)()
              , Y = (0,
            u.useAdaptivity)()
              , W = Y.hasPointer
              , q = Y.sizeX
              , G = void 0 === q ? "none" : q;
            (0,
            g.useIsomorphicLayoutEffect)((function() {
                var e = null;
                return w && (e = (0,
                h.isRefObject)(w) ? w.current : w),
                e || (e = z.createElement("div"),
                z.body.appendChild(e)),
                B(e),
                function() {
                    var t, a;
                    w || (null === (a = e) || void 0 === a || null === (t = a.parentElement) || void 0 === t || t.removeChild(e))
                }
            }
            ), [w]),
            (0,
            g.useIsomorphicLayoutEffect)((function() {
                var e;
                if ("partial" === n)
                    return c.noop;
                var t, a = null === (e = L.current) || void 0 === e ? void 0 : e.parentElement, r = ["vkui__root"].concat("embedded" === n ? "vkui__root--embedded" : []);
                a && ("embedded" !== n || A || (a.style.transform = "translate3d(0, 0, 0)"),
                (t = a.classList).add.apply(t, (0,
                l._)(r)));
                return function() {
                    var e;
                    a && ("embedded" !== n || A || (a.style.transform = ""),
                    (e = a.classList).remove.apply(e, (0,
                    l._)(r)))
                }
            }
            ), [A]),
            (0,
            g.useIsomorphicLayoutEffect)((function() {
                if ("full" === n)
                    return z.documentElement.classList.add("vkui"),
                    function() {
                        z.documentElement.classList.remove("vkui")
                    }
            }
            ), [z, n]),
            (0,
            g.useIsomorphicLayoutEffect)((function() {
                var e;
                if ("partial" === n || !(null === (e = L.current) || void 0 === e ? void 0 : e.parentElement))
                    return c.noop;
                var t, a = L.current.parentElement;
                for (t in H)
                    if (H.hasOwnProperty(t) && "number" == typeof H[t]) {
                        var r = H[t];
                        a.style.setProperty(y + t, "".concat(r, "px")),
                        O && O.style.setProperty(y + t, "".concat(r, "px"))
                    }
                return function() {
                    var e;
                    for (e in H)
                        H.hasOwnProperty(e) && (a.style.removeProperty(y + e),
                        O && O.style.removeProperty(y + e))
                }
            }
            ), [H, O]),
            (0,
            g.useIsomorphicLayoutEffect)((function() {
                var e, t;
                if ("partial" === n)
                    return c.noop;
                var a = function(e, t) {
                    var a = [];
                    return e && a.push(E[e]),
                    t !== p.SizeType.COMPACT && a.push(_[t]),
                    a
                }(P, G)
                  , r = "embedded" === n ? null === (t = L.current) || void 0 === t ? void 0 : t.parentElement : z.body;
                return a.length && r ? ((e = r.classList).add.apply(e, (0,
                l._)(a)),
                function() {
                    var e;
                    (e = r.classList).remove.apply(e, (0,
                    l._)(a))
                }
                ) : c.noop
            }
            ), [G, P]),
            (0,
            g.useIsomorphicLayoutEffect)((function() {
                return "full" !== n || void 0 === V ? c.noop : (z.documentElement.style.setProperty("color-scheme", V),
                function() {
                    return z.documentElement.style.removeProperty("color-scheme")
                }
                )
            }
            ), [V]);
            var U = s.useMemo((function() {
                return "contain" === S ? C.ElementScrollController : C.GlobalScrollController
            }
            ), [S])
              , X = s.createElement(k.AppRootContext.Provider, {
                value: {
                    appRoot: L,
                    portalRoot: O,
                    embedded: "embedded" === n,
                    keyboardInput: D,
                    mode: n,
                    disablePortal: R,
                    layout: P
                }
            }, s.createElement(U, {
                elRef: L
            }, t));
            return "partial" === n ? X : s.createElement("div", (0,
            r._)({
                ref: L,
                className: (0,
                c.classNames)("vkuiAppRoot", void 0 === W ? "vkuiAppRoot--pointer-none" : !W && "vkuiAppRoot--pointer-has-not", M)
            }, I), X)
        }
    }
    ,
    338784: (e,t,a)=>{
        "use strict";
        a.d(t, {
            AppRootContext: ()=>n
        });
        var n = a(667294).createContext({
            portalRoot: null
        })
    }
    ,
    645083: (e,t,a)=>{
        "use strict";
        a.d(t, {
            AppRootPortal: ()=>u
        });
        var n = a(667294)
          , r = a(973935)
          , o = a(505901)
          , i = a(722357)
          , l = a(330434)
          , s = a(291057)
          , c = a(338784)
          , u = function(e) {
            var t = e.children
              , a = e.className
              , u = e.forcePortal
              , d = e.portalRoot
              , v = void 0 === d ? null : d
              , m = n.useContext(c.AppRootContext)
              , p = m.portalRoot
              , f = m.mode
              , h = m.disablePortal
              , g = (0,
            o.useAppearance)();
            if (!(0,
            i.useIsClient)())
                return null;
            var b = null != u ? u : "full" !== f
              , k = function(e, t) {
                if (!e)
                    return t;
                return (0,
                l.isRefObject)(e) ? e.current : e
            }(v, p);
            return (!!(v && b) || !h && k && b) && k ? (0,
            r.createPortal)(n.createElement(s.AppearanceProvider, {
                appearance: g
            }, n.createElement("div", {
                className: a
            }, t)), k) : n.createElement(n.Fragment, null, t)
        }
    }
    ,
    909795: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ElementScrollController: ()=>p,
            GlobalScrollController: ()=>m,
            useScroll: ()=>v,
            useScrollLock: ()=>f
        });
        var n = a(191963)
          , r = a(667294)
          , o = a(962557)
          , i = a(633656)
          , l = a(181498)
          , s = a(214542)
          , c = function(e) {
            Object.assign(e.style, {
                position: "",
                top: "",
                left: "",
                right: "",
                overflowY: "",
                overflowX: ""
            })
        }
          , u = function(e) {
            var t = e.document.documentElement.clientHeight - e.innerHeight;
            return e.pageYOffset - t
        }
          , d = r.createContext({
            getScroll: function() {
                return {
                    x: 0,
                    y: 0
                }
            },
            scrollTo: o.noop,
            isScrollLock: !1,
            enableScrollLock: o.noop,
            disableScrollLock: o.noop
        })
          , v = function() {
            return r.useContext(d)
        }
          , m = function(e) {
            var t = e.children
              , a = (0,
            l.useDOM)()
              , o = a.window
              , s = a.document
              , v = (0,
            n._)(r.useState(!1), 2)
              , m = v[0]
              , p = v[1]
              , f = r.useRef(new Set)
              , h = r.useCallback((function() {
                return {
                    x: o.pageXOffset,
                    y: u(o)
                }
            }
            ), [o])
              , g = r.useCallback((function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                o.scrollTo(e ? (0,
                i.clamp)(e, 0, s.body.scrollWidth - o.innerWidth) : 0, t ? (0,
                i.clamp)(t, 0, s.body.scrollHeight - o.innerHeight) : 0)
            }
            ), [s, o])
              , b = r.useCallback((function() {
                f.current.forEach((function(e) {
                    e()
                }
                ));
                var e = o.pageYOffset
                  , t = o.pageXOffset
                  , a = o.innerWidth > s.documentElement.clientWidth ? "scroll" : ""
                  , n = o.innerHeight > s.documentElement.clientHeight ? "scroll" : "";
                Object.assign(s.body.style, {
                    position: "fixed",
                    top: "-".concat(e, "px"),
                    left: "-".concat(t, "px"),
                    right: "0",
                    overflowY: a,
                    overflowX: n
                }),
                p(!0)
            }
            ), [s, o])
              , k = r.useCallback((function() {
                var e = s.body.style.top
                  , t = s.body.style.left;
                c(s.body),
                o.scrollTo(-parseInt(t || "0"), -parseInt(e || "0")),
                p(!1)
            }
            ), [s, o])
              , C = r.useMemo((function() {
                return {
                    getScroll: h,
                    scrollTo: g,
                    isScrollLock: m,
                    disableScrollLock: k,
                    enableScrollLock: b,
                    beforeScrollLockFnSetRef: f
                }
            }
            ), [h, g, m, k, b]);
            return r.createElement(d.Provider, {
                value: C
            }, t)
        }
          , p = function(e) {
            var t, a, o = e.elRef, l = e.children, s = (0,
            n._)(r.useState(!1), 2), u = s[0], v = s[1], m = r.useRef(new Set), p = r.useCallback((function() {
                var e, n;
                return {
                    x: null !== (t = null === (e = o.current) || void 0 === e ? void 0 : e.scrollLeft) && void 0 !== t ? t : 0,
                    y: null !== (a = null === (n = o.current) || void 0 === n ? void 0 : n.scrollTop) && void 0 !== a ? a : 0
                }
            }
            ), [o]), f = r.useCallback((function() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = o.current;
                null === (e = n) || void 0 === e || e.scrollTo(t ? (0,
                i.clamp)(t, 0, n.scrollWidth - n.clientWidth) : 0, a ? (0,
                i.clamp)(a, 0, n.scrollHeight - n.clientHeight) : 0)
            }
            ), [o]), h = r.useCallback((function() {
                var e = o.current;
                if (e) {
                    m.current.forEach((function(e) {
                        e()
                    }
                    ));
                    var t = e.scrollTop
                      , a = e.scrollLeft
                      , n = e.scrollWidth > e.clientWidth ? "scroll" : ""
                      , r = e.scrollHeight > e.clientHeight ? "scroll" : "";
                    Object.assign(e.style, {
                        position: "absolute",
                        top: "-".concat(t, "px"),
                        left: "-".concat(a, "px"),
                        right: "0",
                        overflowY: n,
                        overflowX: r
                    }),
                    v(!0)
                }
            }
            ), [o]), g = r.useCallback((function() {
                var e = o.current;
                if (e) {
                    var t = e.style.top
                      , a = e.style.left;
                    c(e),
                    e.scrollTo(-parseInt(a || "0"), -parseInt(t || "0")),
                    v(!1)
                }
            }
            ), [o]), b = r.useMemo((function() {
                return {
                    getScroll: p,
                    scrollTo: f,
                    isScrollLock: u,
                    disableScrollLock: g,
                    enableScrollLock: h,
                    beforeScrollLockFnSetRef: m
                }
            }
            ), [p, f, u, g, h]);
            return r.createElement(d.Provider, {
                value: b
            }, l)
        }
          , f = function() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
              , t = v()
              , a = t.enableScrollLock
              , n = t.disableScrollLock;
            (0,
            s.useIsomorphicLayoutEffect)((function() {
                return e ? (a(),
                n) : o.noop
            }
            ), [a, n, e])
        }
    }
    ,
    291057: (e,t,a)=>{
        "use strict";
        a.d(t, {
            AppearanceProvider: ()=>l
        });
        var n = a(667294)
          , r = a(119360)
          , o = a(362591)
          , i = a(203642)
          , l = function(e) {
            var t = e.appearance
              , a = e.children
              , l = (0,
            r.usePlatform)();
            return n.createElement(i.ConfigProviderOverride, {
                appearance: t
            }, n.createElement(o.TokensClassProvider, {
                platform: l,
                appearance: t
            }, a))
        }
    }
    ,
    346912: (e,t,a)=>{
        "use strict";
        a.d(t, {
            AspectRatio: ()=>c
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(523323);
        function c(e) {
            var t = e.ratio
              , a = e.mode
              , c = void 0 === a ? "stretch" : a
              , u = e.style
              , d = (0,
            o._)(e, ["ratio", "mode", "style"])
              , v = (0,
            n._)({}, "--vkui_internal--aspect_ratio", String(t));
            return i.createElement(s.RootComponent, (0,
            r._)({
                baseClassName: (0,
                l.classNames)("vkuiAspectRatio", "stretch" === c && "vkuiAspectRatio--mode-stretch"),
                style: (0,
                r._)({}, u, v)
            }, d))
        }
    }
    ,
    900863: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Avatar: ()=>p
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(380702)
          , c = a(749051)
          , u = a(833019)
          , d = a(451709)
          , v = {
            1: "red",
            2: "orange",
            3: "yellow",
            4: "green",
            5: "l-blue",
            6: "violet"
        }
          , m = {
            red: "vkuiAvatar--gradient-red",
            orange: "vkuiAvatar--gradient-orange",
            yellow: "vkuiAvatar--gradient-yellow",
            green: "vkuiAvatar--gradient-green",
            blue: "vkuiAvatar--gradient-blue",
            "l-blue": "vkuiAvatar--gradient-l-blue",
            violet: "vkuiAvatar--gradient-violet"
        }
          , p = function(e) {
            var t = e.size
              , a = void 0 === t ? 48 : t
              , c = e.className
              , u = e.gradientColor
              , p = e.initials
              , f = e.fallbackIcon
              , h = e.children
              , g = (0,
            o._)(e, ["size", "className", "gradientColor", "initials", "fallbackIcon", "children"])
              , b = "number" == typeof u ? v[u] : u
              , k = b && "custom" !== b
              , C = p ? void 0 : f;
            return i.createElement(s.ImageBase, (0,
            r._)((0,
            n._)({}, g), {
                size: a,
                fallbackIcon: C,
                className: (0,
                l.classNames)("vkuiAvatar", b && "vkuiAvatar--has-gradient", k && m[b], c)
            }), p && i.createElement("div", {
                className: "vkuiAvatar__initials",
                style: {
                    fontSize: (0,
                    d.getInitialsFontSize)(a)
                }
            }, p), h)
        };
        p.Badge = c.AvatarBadge,
        p.BadgeWithPreset = u.AvatarBadgeWithPreset,
        p.Overlay = s.ImageBase.Overlay
    }
    ,
    749051: (e,t,a)=>{
        "use strict";
        a.d(t, {
            AvatarBadge: ()=>u
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(2745)
          , c = a(380702)
          , u = function(e) {
            var t = e.className
              , a = (0,
            o._)(e, ["className"])
              , u = i.useContext(s.ImageBaseContext).size;
            return i.createElement(c.ImageBase.Badge, (0,
            r._)((0,
            n._)({}, a), {
                className: (0,
                l.classNames)("vkuiAvatarBadge", u < 96 && "vkuiAvatarBadge--shifted", t)
            }))
        }
    }
    ,
    833019: (e,t,a)=>{
        "use strict";
        a.d(t, {
            AvatarBadgeWithPreset: ()=>d
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(2745)
          , s = a(342627)
          , c = a(380702)
          , u = a(190405)
          , d = function(e) {
            var t = e.preset
              , a = void 0 === t ? "online" : t
              , d = e.className
              , v = (0,
            r._)(e, ["preset", "className"])
              , m = o.useContext(l.ImageBaseContext).size
              , p = (0,
            s.getBadgeIconSizeByImageBaseSize)(m)
              , f = "online" === a
              , h = f ? "vkuiAvatarBadge--preset-online" : "vkuiAvatarBadge--preset-onlineMobile"
              , g = f ? u.Icon12Circle : u.Icon12OnlineMobile;
            return o.createElement(c.ImageBase.Badge, (0,
            n._)({
                background: "stroke",
                className: (0,
                i.classNames)("vkuiAvatarBadge", h, d)
            }, v), o.createElement(g, {
                width: p,
                height: p
            }))
        }
    }
    ,
    190405: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Icon12Circle: ()=>c,
            Icon12OnlineMobile: ()=>u
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(440990)
          , s = a(83298)
          , c = function(e) {
            var t = e.width
              , a = void 0 === t ? 12 : t
              , s = e.height
              , c = void 0 === s ? 12 : s
              , u = (0,
            o._)(e, ["width", "height"]);
            return i.createElement(l.Icon12Circle, (0,
            r._)((0,
            n._)({}, u), {
                width: a >= 24 ? 15 : 12,
                height: c >= 24 ? 15 : 12
            }))
        }
          , u = function(e) {
            var t = e.width
              , a = void 0 === t ? 8 : t
              , l = e.height
              , c = void 0 === l ? 12 : l
              , u = (0,
            o._)(e, ["width", "height"]);
            return i.createElement(s.Icon12OnlineMobile, (0,
            r._)((0,
            n._)({}, u), {
                width: a >= 24 ? 9 : 8,
                height: c >= 24 ? 15 : 12
            }))
        }
    }
    ,
    451709: (e,t,a)=>{
        "use strict";
        a.d(t, {
            getInitialsFontSize: ()=>i
        });
        var n = 30
          , r = 96
          , o = n / r;
        function i(e) {
            if (e <= 16)
                return 5;
            if (e <= 24)
                return 8;
            if (e <= 32)
                return 10;
            if (e <= 36)
                return 13;
            if (e <= 44)
                return 14;
            if (e <= 48)
                return 17;
            if (e < 56)
                return 18;
            if (e <= 64)
                return 21;
            if (e <= 88)
                return 26;
            if (e <= r)
                return n;
            var t = Math.ceil(e * o);
            return t + t % 2
        }
    }
    ,
    278763: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Badge: ()=>c
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(523323)
          , s = {
            new: "vkuiBadge--mode-new",
            prominent: "vkuiBadge--mode-prominent"
        }
          , c = function(e) {
            var t = e.mode
              , a = void 0 === t ? "new" : t
              , c = (0,
            r._)(e, ["mode"]);
            return o.createElement(l.RootComponent, (0,
            n._)({
                Component: "span",
                baseClassName: (0,
                i.classNames)("vkuiBadge", s[a])
            }, c))
        }
    }
    ,
    857991: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Banner: ()=>_
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(754595)
          , s = a(427210)
          , c = a(506281)
          , u = a(315954)
          , d = a(962557)
          , v = a(119360)
          , m = a(108681)
          , p = a(600245)
          , f = a(523323)
          , h = a(795281)
          , g = a(115446)
          , b = a(243912)
          , k = a(754259)
          , C = a(931252)
          , _ = function(e) {
            var t = e.mode
              , a = void 0 === t ? "tint" : t
              , _ = e.imageTheme
              , E = void 0 === _ ? "dark" : _
              , y = e.size
              , S = void 0 === y ? "s" : y
              , N = e.before
              , w = e.asideMode
              , R = e.header
              , A = e.subheader
              , M = e.text
              , T = (e.children,
            e.background)
              , P = e.actions
              , I = e.onDismiss
              , D = e.dismissLabel
              , L = void 0 === D ? "Скрыть" : D
              , x = e.noPadding
              , O = (0,
            o._)(e, ["mode", "imageTheme", "size", "before", "asideMode", "header", "subheader", "text", "children", "background", "actions", "onDismiss", "dismissLabel", "noPadding"])
              , B = (0,
            v.usePlatform)()
              , z = "m" === S ? C.Title : g.Headline
              , F = "m" === S ? k.Text : b.Subhead
              , H = "image" === a ? l.Icon24DismissDark : s.Icon24Dismiss
              , V = i.createElement(i.Fragment, null, "image" === a && T && i.createElement("div", {
                "aria-hidden": !0,
                className: "vkuiBanner__bg"
            }, T), N && i.createElement("div", {
                className: "vkuiBanner__before"
            }, N), i.createElement("div", {
                className: "vkuiBanner__content"
            }, (0,
            d.hasReactNode)(R) && i.createElement(z, {
                Component: "p",
                weight: "2",
                level: "m" === S ? "2" : "1"
            }, R), (0,
            d.hasReactNode)(A) && i.createElement(F, {
                Component: "p",
                className: "vkuiBanner__subheader"
            }, A), (0,
            d.hasReactNode)(M) && i.createElement(k.Text, {
                Component: "p",
                className: "vkuiBanner__text"
            }, M), (0,
            d.hasReactNode)(P) && i.Children.count(P) > 0 && i.createElement("div", {
                className: "vkuiBanner__actions"
            }, P)));
            return i.createElement(f.RootComponent, (0,
            r._)((0,
            n._)({
                Component: "section"
            }, O), {
                baseClassName: (0,
                d.classNames)("vkuiBanner", !x && "vkuiBanner--withPadding", B === m.Platform.IOS && "vkuiBanner--ios", "image" === a && "vkuiBanner--mode-image", "m" === S && "vkuiBanner--size-m", "image" === a && "dark" === E && "vkuiBanner--inverted")
            }), "expand" === w ? i.createElement(h.Tappable, {
                className: "vkuiBanner__in",
                activeMode: B === m.Platform.IOS ? "opacity" : "background",
                role: "button"
            }, V, i.createElement("div", {
                className: "vkuiBanner__aside"
            }, i.createElement(c.Icon24Chevron, {
                className: "vkuiBanner__expand"
            }))) : i.createElement("div", {
                className: "vkuiBanner__in"
            }, V, "dismiss" === w && i.createElement("div", {
                className: "vkuiBanner__aside"
            }, i.createElement(p.IconButton, {
                "aria-label": L,
                className: "vkuiBanner__dismiss",
                onClick: I,
                hoverMode: "opacity",
                hasActive: !1
            }, B === m.Platform.IOS ? i.createElement(H, null) : i.createElement(u.Icon24Cancel, null)))))
        }
    }
    ,
    23112: (e,t,a)=>{
        "use strict";
        a.d(t, {
            BaseGallery: ()=>_
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(667294)
          , s = a(962557)
          , c = a(716331)
          , u = a(428253)
          , d = a(283821)
          , v = a(181498)
          , m = a(214542)
          , p = a(523323)
          , f = a(427730)
          , h = a(763029)
          , g = a(831161)
          , b = {
            containerWidth: 0,
            viewportOffsetWidth: 0,
            layerWidth: 0,
            min: 0,
            max: 0,
            slides: [],
            isFullyVisible: !0
        }
          , k = {
            animation: void 0,
            shiftX: 0,
            dragging: !1,
            deltaX: 0,
            indent: 0
        }
          , C = {
            dark: "vkuiBaseGallery__bullets--dark",
            light: "vkuiBaseGallery__bullets--light"
        }
          , _ = function(e) {
            var t = e.bullets
              , a = void 0 !== t && t
              , _ = e.getRootRef
              , E = e.children
              , y = e.slideWidth
              , S = void 0 === y ? "100%" : y
              , N = e.slideIndex
              , w = void 0 === N ? 0 : N
              , R = e.isDraggable
              , A = void 0 === R || R
              , M = e.onDragStart
              , T = e.onDragEnd
              , P = e.onChange
              , I = e.onPrevClick
              , D = e.onNextClick
              , L = e.align
              , x = void 0 === L ? "left" : L
              , O = e.showArrows
              , B = e.getRef
              , z = e.arrowSize
              , F = void 0 === z ? "l" : z
              , H = (0,
            o._)(e, ["bullets", "getRootRef", "children", "slideWidth", "slideIndex", "isDraggable", "onDragStart", "onDragEnd", "onChange", "onPrevClick", "onNextClick", "align", "showArrows", "getRef", "arrowSize"])
              , V = l.useRef({})
              , Y = l.useRef(b)
              , W = (0,
            i._)(l.useState(k), 2)
              , q = W[0]
              , G = W[1]
              , U = (0,
            u.useExternRef)(_)
              , X = (0,
            u.useExternRef)(B)
              , K = (0,
            v.useDOM)().window
              , j = (0,
            c.useAdaptivityHasPointer)()
              , Q = "custom" === S && "center" === x
              , J = function(e) {
                var t, a, n = null !== (t = Y.current.max) && void 0 !== t ? t : 0, r = null !== (a = Y.current.min) && void 0 !== a ? a : 0;
                return e < r ? r : e > n ? n : e
            }
              , Z = function(e) {
                var t;
                if (Y.current.isFullyVisible)
                    return 0;
                var a = (null === (t = Y.current.slides) || void 0 === t ? void 0 : t.length) ? Y.current.slides[e] : null;
                if (a) {
                    var n, r = a.coordX, o = a.width;
                    return Q ? (null !== (n = Y.current.viewportOffsetWidth) && void 0 !== n ? n : 0) / 2 - r - o / 2 : J(-1 * r)
                }
                return 0
            }
              , $ = function() {
                var e, t, a = null !== (e = Y.current.max) && void 0 !== e ? e : 0, n = null !== (t = Y.current.min) && void 0 !== t ? t : 0, r = q.shiftX + q.deltaX;
                return r > a ? a + Number((r - a) / 3) : r < n ? n + Number((r - n) / 3) : r
            }
              , ee = function() {
                var e, t, a, o, i, s, c, u, d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, v = null !== (i = l.Children.map(E, (function(e, t) {
                    var a, n, r, o, i = V.current["slide-".concat(t)];
                    return {
                        coordX: null !== (r = null === (a = i) || void 0 === a ? void 0 : a.offsetLeft) && void 0 !== r ? r : 0,
                        width: null !== (o = null === (n = i) || void 0 === n ? void 0 : n.offsetWidth) && void 0 !== o ? o : 0
                    }
                }
                ))) && void 0 !== i ? i : [], m = null !== (s = null === (e = U.current) || void 0 === e ? void 0 : e.offsetWidth) && void 0 !== s ? s : 0, p = null !== (c = null === (t = X.current) || void 0 === t ? void 0 : t.offsetWidth) && void 0 !== c ? c : 0, f = v.reduce((function(e, t) {
                    return t.width + e
                }
                ), 0), h = v.length <= Y.current.slides.length || (null === (a = Y.current.slides[w]) || void 0 === a ? void 0 : a.coordX) !== (null === (o = v[w]) || void 0 === o ? void 0 : o.coordX);
                Y.current = {
                    containerWidth: m,
                    viewportOffsetWidth: p,
                    layerWidth: f,
                    max: (0,
                    g.calcMax)({
                        slides: v,
                        viewportOffsetWidth: p,
                        isCenterWithCustomWidth: Q
                    }),
                    min: (0,
                    g.calcMin)({
                        containerWidth: m,
                        layerWidth: f,
                        slides: v,
                        viewportOffsetWidth: p,
                        isCenterWithCustomWidth: Q,
                        align: x
                    }),
                    slides: v,
                    isFullyVisible: f <= m
                },
                G((function(e) {
                    return (0,
                    r._)((0,
                    n._)({}, e), {
                        shiftX: h ? Z(w) : e.shiftX,
                        animation: null !== (u = d.animation) && void 0 !== u ? u : e.shiftX === J(e.shiftX)
                    })
                }
                ))
            };
            (0,
            d.useGlobalEventListener)(K, "resize", (function() {
                void 0 !== q.animation && ee({
                    animation: !1
                })
            }
            )),
            (0,
            m.useIsomorphicLayoutEffect)((function() {
                ee({
                    animation: !1
                })
            }
            ), [E, x, S]),
            (0,
            m.useIsomorphicLayoutEffect)((function() {
                void 0 !== q.animation && G((function(e) {
                    return (0,
                    r._)((0,
                    n._)({}, e), {
                        animation: !0,
                        deltaX: 0,
                        shiftX: Z(null != w ? w : 0)
                    })
                }
                ))
            }
            ), [w]);
            var te, ae = q.dragging ? $() : q.shiftX, ne = {
                WebkitTransform: "translateX(".concat(ae, "px)"),
                transform: "translateX(".concat(ae, "px)"),
                WebkitTransition: q.animation ? "-webkit-transform ".concat(.24, "s cubic-bezier(.1, 0, .25, 1)") : "none",
                transition: q.animation ? "transform ".concat(.24, "s cubic-bezier(.1, 0, .25, 1)") : "none"
            }, re = !Y.current.isFullyVisible && q.shiftX < 0, oe = !Y.current.isFullyVisible && ("left" === x && Y.current.containerWidth - q.shiftX < (null !== (te = Y.current.layerWidth) && void 0 !== te ? te : 0) || "left" !== x && w < Y.current.slides.length - 1), ie = A && !Y.current.isFullyVisible;
            return l.createElement(p.RootComponent, (0,
            r._)((0,
            n._)({}, H), {
                baseClassName: (0,
                s.classNames)("vkuiBaseGallery", "center" === x && "vkuiBaseGallery--align-center", "custom" === S && "vkuiBaseGallery--custom-width", ie && "vkuiBaseGallery--draggable"),
                getRootRef: U
            }), l.createElement(h.Touch, {
                className: "vkuiBaseGallery__viewport",
                onStartX: function(e) {
                    var t;
                    null === (t = M) || void 0 === t || t(e),
                    G((function(e) {
                        return (0,
                        r._)((0,
                        n._)({}, e), {
                            animation: !1
                        })
                    }
                    ))
                },
                onMoveX: function(e) {
                    A && !Y.current.isFullyVisible && (e.originalEvent.preventDefault(),
                    e.isSlideX && q.deltaX !== e.shiftX && G((function(t) {
                        return (0,
                        r._)((0,
                        n._)({}, t), {
                            deltaX: e.shiftX,
                            dragging: e.isSlideX
                        })
                    }
                    )))
                },
                onEnd: function(e) {
                    var t, a = e.isSlide ? function(e) {
                        var t, a = q.deltaX / e.duration * 240 * .6, n = q.shiftX + q.deltaX + a - (null !== (t = Y.current.max) && void 0 !== t ? t : 0), r = q.deltaX < 0 ? 1 : -1, o = Y.current.slides.reduce((function(e, t, a) {
                            return Math.abs(Y.current.slides[e].coordX + n) < Math.abs(t.coordX + n) ? e : a
                        }
                        ), w);
                        if (o === w) {
                            var i = w + r;
                            i >= 0 && i < Y.current.slides.length && Math.abs(q.deltaX) > .05 * Y.current.slides[i].width && (o = i)
                        }
                        return o
                    }(e) : null != w ? w : 0;
                    null === (t = T) || void 0 === t || t(e, a);
                    var r, o = {
                        animation: !0,
                        dragging: !1,
                        deltaX: 0
                    }, i = $();
                    (a !== w && (o.shiftX = i),
                    G((function(e) {
                        return (0,
                        n._)({}, e, o)
                    }
                    )),
                    a !== w) && (null === (r = P) || void 0 === r || r(a))
                },
                style: {
                    width: "custom" === S ? "100%" : S
                },
                getRootRef: X,
                noSlideClick: !0
            }, l.createElement("div", {
                className: "vkuiBaseGallery__layer",
                style: ne
            }, l.Children.map(E, (function(e, t) {
                return l.createElement("div", {
                    className: "vkuiBaseGallery__slide",
                    key: "slide-".concat(t),
                    ref: function(e) {
                        return function(e, t) {
                            V.current["slide-".concat(t)] = e
                        }(e, t)
                    }
                }, e)
            }
            )))), a && l.createElement("div", {
                "aria-hidden": !0,
                className: (0,
                s.classNames)("vkuiBaseGallery__bullets", C[a])
            }, l.Children.map(E, (function(e, t) {
                return l.createElement("div", {
                    className: (0,
                    s.classNames)("vkuiBaseGallery__bullet", t === w && "vkuiBaseGallery__bullet--active"),
                    key: t
                })
            }
            ))), O && j && re && l.createElement(f.ScrollArrow, {
                className: "vkuiBaseGallery__arrow",
                direction: "left",
                onClick: function(e) {
                    var t, a;
                    null === (t = P) || void 0 === t || t(w - 1),
                    null === (a = I) || void 0 === a || a(e)
                },
                size: F
            }), O && j && oe && l.createElement(f.ScrollArrow, {
                className: "vkuiBaseGallery__arrow",
                direction: "right",
                onClick: function(e) {
                    var t, a;
                    null === (t = P) || void 0 === t || t(w + 1),
                    null === (a = D) || void 0 === a || a(e)
                },
                size: F
            }))
        }
    }
    ,
    831161: (e,t,a)=>{
        "use strict";
        a.d(t, {
            calcMax: ()=>r,
            calcMin: ()=>n
        });
        var n = function(e) {
            var t = e.containerWidth
              , a = void 0 === t ? 0 : t
              , n = e.layerWidth
              , r = void 0 === n ? 0 : n
              , o = e.slides
              , i = void 0 === o ? [] : o
              , l = e.viewportOffsetWidth
              , s = void 0 === l ? 0 : l
              , c = e.align
              , u = e.isCenterWithCustomWidth;
            switch (c) {
            case "left":
                return a - r;
            case "right":
                return s - r;
            case "center":
                if (u && i.length) {
                    var d = i[i.length - 1];
                    return s / 2 - d.coordX - d.width / 2
                }
                return s - (a - s) / 2 - r
            }
        }
          , r = function(e) {
            var t = e.slides
              , a = void 0 === t ? [] : t
              , n = e.viewportOffsetWidth
              , r = void 0 === n ? 0 : n;
            if (e.isCenterWithCustomWidth && a.length) {
                var o = a[0]
                  , i = o.width;
                return r / 2 - o.coordX - i / 2
            }
            return 0
        }
    }
    ,
    658113: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Button: ()=>C
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(667294)
          , s = a(962557)
          , c = a(324285)
          , u = a(119360)
          , d = a(489026)
          , v = a(108681)
          , m = a(474353)
          , p = a(795281)
          , f = {
            s: "vkuiButton--size-s",
            m: "vkuiButton--size-m",
            l: "vkuiButton--size-l"
        }
          , h = {
            primary: "vkuiButton--mode-primary",
            secondary: "vkuiButton--mode-secondary",
            tertiary: "vkuiButton--mode-tertiary",
            outline: "vkuiButton--mode-outline",
            link: "vkuiButton--mode-link"
        }
          , g = {
            accent: "vkuiButton--appearance-accent",
            positive: "vkuiButton--appearance-positive",
            negative: "vkuiButton--appearance-negative",
            neutral: "vkuiButton--appearance-neutral",
            overlay: "vkuiButton--appearance-overlay",
            "accent-invariable": "vkuiButton--appearance-accent-invariable"
        }
          , b = {
            left: "vkuiButton--align-left",
            center: "vkuiButton--align-center",
            right: "vkuiButton--align-right"
        }
          , k = (0,
        n._)({
            none: "vkuiButton--sizeY-none"
        }, d.SizeType.REGULAR, "vkuiButton--sizeY-regular")
          , C = function(e) {
            var t = e.size
              , a = void 0 === t ? "s" : t
              , n = e.mode
              , C = void 0 === n ? "primary" : n
              , _ = e.appearance
              , E = void 0 === _ ? "accent" : _
              , y = e.stretched
              , S = void 0 !== y && y
              , N = e.align
              , w = void 0 === N ? "center" : N
              , R = e.children
              , A = e.before
              , M = e.after
              , T = e.getRootRef
              , P = e.loading
              , I = e.onClick
              , D = e.stopPropagation
              , L = void 0 === D || D
              , x = e.className
              , O = e.disableSpinnerAnimation
              , B = (0,
            i._)(e, ["size", "mode", "appearance", "stretched", "align", "children", "before", "after", "getRootRef", "loading", "onClick", "stopPropagation", "className", "disableSpinnerAnimation"])
              , z = Boolean(A || M)
              , F = !R && Boolean(M) !== Boolean(A)
              , H = (0,
            c.useAdaptivity)().sizeY
              , V = void 0 === H ? "none" : H
              , Y = (0,
            u.usePlatform)();
            return l.createElement(p.Tappable, (0,
            o._)((0,
            r._)({
                hoverMode: "vkuiButton--hover",
                activeMode: "vkuiButton--active",
                Component: B.href ? "a" : "button",
                focusVisibleMode: "outside"
            }, B), {
                onClick: P ? void 0 : I,
                stopPropagation: L,
                className: (0,
                s.classNames)(x, "vkuiButton", f[a], h[C], g[E], b[w], V !== d.SizeType.COMPACT && k[V], Y === v.Platform.IOS && "vkuiButton--ios", S && "vkuiButton--stretched", z && "vkuiButton--with-icon", F && !S && "vkuiButton--singleIcon", P && "vkuiButton--loading"),
                getRootRef: T
            }), P && l.createElement(m.Spinner, {
                size: "small",
                className: "vkuiButton__spinner",
                disableAnimation: O
            }), l.createElement("span", {
                className: "vkuiButton__in"
            }, (0,
            s.hasReactNode)(A) && l.createElement("span", {
                className: "vkuiButton__before",
                role: "presentation",
                "data-testid": void 0
            }, A), (0,
            s.hasReactNode)(R) && l.createElement("span", {
                className: "vkuiButton__content",
                "data-testid": void 0
            }, R), (0,
            s.hasReactNode)(M) && l.createElement("span", {
                className: "vkuiButton__after",
                role: "presentation",
                "data-testid": void 0
            }, M)))
        }
    }
    ,
    580758: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ButtonGroup: ()=>d
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(523323)
          , s = {
            vertical: "vkuiButtonGroup--mode-vertical",
            horizontal: "vkuiButtonGroup--mode-horizontal"
        }
          , c = {
            space: "vkuiButtonGroup--gap-space",
            s: "vkuiButtonGroup--gap-s",
            m: "vkuiButtonGroup--gap-m"
        }
          , u = {
            left: "vkuiButtonGroup--align-left",
            center: "vkuiButtonGroup--align-center",
            right: "vkuiButtonGroup--align-right"
        }
          , d = function(e) {
            var t = e.mode
              , a = void 0 === t ? "horizontal" : t
              , d = e.gap
              , v = void 0 === d ? "m" : d
              , m = e.stretched
              , p = void 0 !== m && m
              , f = e.align
              , h = void 0 === f ? "left" : f
              , g = (0,
            r._)(e, ["mode", "gap", "stretched", "align"]);
            return o.createElement(l.RootComponent, (0,
            n._)({
                baseClassName: (0,
                i.classNames)("vkuiButtonGroup", s[a], "none" !== v && c[v], p && "vkuiButtonGroup--stretched", u[h]),
                role: "group"
            }, g))
        }
    }
    ,
    72281: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Calendar: ()=>g
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(454151)
          , c = a(734930)
          , u = a(259007)
          , d = a(214542)
          , v = a(644029)
          , m = a(254437)
          , p = a(162972)
          , f = a(956823)
          , h = a(523323)
          , g = ((0,
        v.warnOnce)("Calendar"),
        function(e) {
            var t = e.value
              , a = e.onChange
              , v = e.disablePast
              , g = e.disableFuture
              , b = e.shouldDisableDate
              , k = e.onClose
              , C = e.enableTime
              , _ = void 0 !== C && C
              , E = e.doneButtonText
              , y = e.weekStartsOn
              , S = void 0 === y ? 1 : y
              , N = e.disablePickers
              , w = e.changeHoursAriaLabel
              , R = e.changeMinutesAriaLabel
              , A = e.prevMonthAriaLabel
              , M = e.nextMonthAriaLabel
              , T = e.changeMonthAriaLabel
              , P = e.changeYearAriaLabel
              , I = e.showNeighboringMonth
              , D = e.changeDayAriaLabel
              , L = void 0 === D ? "Изменить день" : D
              , x = e.size
              , O = void 0 === x ? "m" : x
              , B = e.viewDate
              , z = e.onHeaderChange
              , F = e.onNextMonth
              , H = e.onPrevMonth
              , V = e.prevMonthIcon
              , Y = e.nextMonthIcon
              , W = e.prevMonthProps
              , q = e.nextMonthProps
              , G = e.dayProps
              , U = e.listenDayChangesForUpdate
              , X = (0,
            o._)(e, ["value", "onChange", "disablePast", "disableFuture", "shouldDisableDate", "onClose", "enableTime", "doneButtonText", "weekStartsOn", "disablePickers", "changeHoursAriaLabel", "changeMinutesAriaLabel", "prevMonthAriaLabel", "nextMonthAriaLabel", "changeMonthAriaLabel", "changeYearAriaLabel", "showNeighboringMonth", "changeDayAriaLabel", "size", "viewDate", "onHeaderChange", "onNextMonth", "onPrevMonth", "prevMonthIcon", "nextMonthIcon", "prevMonthProps", "nextMonthProps", "dayProps", "listenDayChangesForUpdate"])
              , K = (0,
            s.useCalendar)({
                value: t,
                disableFuture: g,
                disablePast: v,
                shouldDisableDate: b,
                onHeaderChange: z,
                onNextMonth: F,
                onPrevMonth: H
            })
              , j = K.viewDate
              , Q = K.setViewDate
              , J = K.setPrevMonth
              , Z = K.setNextMonth
              , $ = K.focusedDay
              , ee = K.setFocusedDay
              , te = K.isDayFocused
              , ae = K.isDayDisabled
              , ne = K.resetSelectedDay;
            (0,
            d.useIsomorphicLayoutEffect)((function() {
                t && Q(t)
            }
            ), [t]);
            var re = i.useCallback((function(e) {
                ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key) && e.preventDefault();
                var a = (0,
                c.navigateDate)(null != $ ? $ : t, e.key);
                a && !(0,
                u.isSameMonth)(a, j) && Q(a),
                ee(a)
            }
            ), [$, ee, Q, t, j])
              , oe = i.useCallback((function(e) {
                var n;
                null === (n = a) || void 0 === n || n((0,
                c.setTimeEqual)(e, t))
            }
            ), [t, a])
              , ie = i.useCallback((function(e) {
                return Boolean(t && (0,
                u.isSameDay)(e, t))
            }
            ), [t]);
            return i.createElement(h.RootComponent, (0,
            r._)((0,
            n._)({}, X), {
                baseClassName: (0,
                l.classNames)("vkuiCalendar", "s" === O && "vkuiCalendar--size-s")
            }), i.createElement(p.CalendarHeader, {
                viewDate: B || j,
                onChange: Q,
                onNextMonth: Z,
                onPrevMonth: J,
                disablePickers: N || "s" === O,
                className: "vkuiCalendar__header",
                prevMonthAriaLabel: A,
                nextMonthAriaLabel: M,
                changeMonthAriaLabel: T,
                changeYearAriaLabel: P,
                prevMonthIcon: V,
                nextMonthIcon: Y,
                prevMonthProps: W,
                nextMonthProps: q
            }), i.createElement(m.CalendarDays, {
                viewDate: B || j,
                value: t,
                weekStartsOn: S,
                isDayFocused: te,
                tabIndex: 0,
                "aria-label": L,
                onKeyDown: re,
                onDayChange: oe,
                isDayActive: ie,
                isDaySelectionStart: c.isFirstDay,
                isDaySelectionEnd: c.isLastDay,
                isDayDisabled: ae,
                onBlur: ne,
                showNeighboringMonth: I,
                size: O,
                dayProps: G,
                listenDayChangesForUpdate: U
            }), _ && t && "s" !== O && i.createElement("div", {
                className: "vkuiCalendar__time"
            }, i.createElement(f.CalendarTime, {
                value: t,
                onChange: a,
                onClose: k,
                doneButtonText: E,
                changeHoursAriaLabel: w,
                changeMinutesAriaLabel: R
            })))
        }
        )
    }
    ,
    958647: (e,t,a)=>{
        "use strict";
        a.d(t, {
            CalendarDay: ()=>u
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(162649)
          , s = a(766351)
          , c = a(795281)
          , u = o.memo((function(e) {
            var t = e.day
              , a = e.today
              , u = e.selected
              , d = e.onChange
              , v = e.hidden
              , m = e.disabled
              , p = e.active
              , f = e.selectionStart
              , h = e.selectionEnd
              , g = e.focused
              , b = e.onEnter
              , k = e.onLeave
              , C = e.hinted
              , _ = e.hintedSelectionStart
              , E = e.hintedSelectionEnd
              , y = e.sameMonth
              , S = e.size
              , N = e.className
              , w = (0,
            r._)(e, ["day", "today", "selected", "onChange", "hidden", "disabled", "active", "selectionStart", "selectionEnd", "focused", "onEnter", "onLeave", "hinted", "hintedSelectionStart", "hintedSelectionEnd", "sameMonth", "size", "className"])
              , R = (0,
            s.useConfigProvider)().locale
              , A = o.useRef(null)
              , M = o.useCallback((function() {
                return d(t)
            }
            ), [t, d])
              , T = o.useCallback((function() {
                var e;
                return null === (e = b) || void 0 === e ? void 0 : e(t)
            }
            ), [t, b])
              , P = o.useCallback((function() {
                var e;
                return null === (e = k) || void 0 === e ? void 0 : e(t)
            }
            ), [t, k]);
            return o.useEffect((function() {
                g && A.current && (A.current.dispatchEvent(new Event(l.ENABLE_KEYBOARD_INPUT_EVENT_NAME,{
                    bubbles: !0
                })),
                A.current.focus())
            }
            ), [g]),
            v ? o.createElement("div", {
                className: "vkuiCalendarDay__hidden"
            }) : o.createElement(c.Tappable, (0,
            n._)({
                className: (0,
                i.classNames)("vkuiCalendarDay", "s" === S && "vkuiCalendarDay--size-s", a && "vkuiCalendarDay--today", u && !m && "vkuiCalendarDay--selected", f && "vkuiCalendarDay--selection-start", h && "vkuiCalendarDay--selection-end", m && "vkuiCalendarDay--disabled", !y && "vkuiCalendarDay--not-same-month", N),
                hoverMode: p ? "" : "vkuiCalendarDay--hover",
                hasActive: !1,
                onClick: M,
                disabled: m,
                "aria-label": new Intl.DateTimeFormat(R,{
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }).format(t),
                tabIndex: -1,
                getRootRef: A,
                focusVisibleMode: p ? "outside" : "inside",
                onEnter: T,
                onLeave: P
            }, w), o.createElement("div", {
                className: (0,
                i.classNames)("vkuiCalendarDay__hinted", C && "vkuiCalendarDay__hinted--active", _ && "vkuiCalendarDay__hinted--selection-start", E && "vkuiCalendarDay__hinted--selection-end")
            }, o.createElement("div", {
                className: (0,
                i.classNames)("vkuiCalendarDay__inner", p && !m && "vkuiCalendarDay__inner--active")
            }, o.createElement("div", {
                className: "vkuiCalendarDay__day-number"
            }, t.getDate()))))
        }
        ));
        u.displayName = "CalendarDay"
    }
    ,
    254437: (e,t,a)=>{
        "use strict";
        a.d(t, {
            CalendarDays: ()=>h
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(428253)
          , c = a(326857)
          , u = a(734930)
          , d = a(259007)
          , v = a(958647)
          , m = a(766351)
          , p = a(523323)
          , f = a(894872)
          , h = function(e) {
            var t = e.viewDate
              , a = (e.value,
            e.weekStartsOn)
              , h = e.onDayChange
              , g = e.isDaySelected
              , b = e.isDayActive
              , k = e.isDaySelectionEnd
              , C = e.isDaySelectionStart
              , _ = e.onDayEnter
              , E = e.onDayLeave
              , y = e.isDayHinted
              , S = e.isHintedDaySelectionStart
              , N = e.isHintedDaySelectionEnd
              , w = e.isDayFocused
              , R = e.isDayDisabled
              , A = e.size
              , M = e.showNeighboringMonth
              , T = void 0 !== M && M
              , P = e.dayProps
              , I = e.listenDayChangesForUpdate
              , D = void 0 !== I && I
              , L = e.getRootRef
              , x = (0,
            o._)(e, ["viewDate", "value", "weekStartsOn", "onDayChange", "isDaySelected", "isDayActive", "isDaySelectionEnd", "isDaySelectionStart", "onDayEnter", "onDayLeave", "isDayHinted", "isHintedDaySelectionStart", "isHintedDaySelectionEnd", "isDayFocused", "isDayDisabled", "size", "showNeighboringMonth", "dayProps", "listenDayChangesForUpdate", "getRootRef"])
              , O = (0,
            m.useConfigProvider)().locale
              , B = (0,
            s.useExternRef)(L)
              , z = (0,
            c.useTodayDate)(D)
              , F = i.useMemo((function() {
                return (0,
                u.getWeeks)(t, a)
            }
            ), [a, t])
              , H = i.useMemo((function() {
                return (0,
                u.getDaysNames)(z, a, O)
            }
            ), [O, z, a])
              , V = i.useCallback((function(e) {
                var t;
                h(e),
                null === (t = B.current) || void 0 === t || t.focus()
            }
            ), [h, B]);
            return i.createElement(p.RootComponent, (0,
            r._)((0,
            n._)({}, x), {
                baseClassName: "vkuiCalendarDays",
                getRootRef: B
            }), i.createElement("div", {
                className: (0,
                l.classNames)("vkuiCalendarDays__row", "s" === A && "vkuiCalendarDays__row--size-s")
            }, H.map((function(e) {
                return i.createElement(f.Footnote, {
                    key: e,
                    className: "vkuiCalendarDays__weekday"
                }, e)
            }
            ))), F.map((function(e, a) {
                return i.createElement("div", {
                    className: (0,
                    l.classNames)("vkuiCalendarDays__row", "s" === A && "vkuiCalendarDays__row--size-s"),
                    key: a
                }, e.map((function(e, a) {
                    var r, o, l, s, c = (0,
                    d.isSameMonth)(e, t);
                    return i.createElement(v.CalendarDay, (0,
                    n._)({
                        key: e.toISOString(),
                        day: e,
                        today: (0,
                        d.isSameDay)(e, z),
                        active: b(e),
                        onChange: V,
                        hidden: !T && !c,
                        disabled: R(e),
                        selectionStart: C(e, a),
                        selectionEnd: k(e, a),
                        hintedSelectionStart: null === (r = S) || void 0 === r ? void 0 : r(e, a),
                        hintedSelectionEnd: null === (o = N) || void 0 === o ? void 0 : o(e, a),
                        selected: null === (l = g) || void 0 === l ? void 0 : l(e),
                        focused: w(e),
                        onEnter: _,
                        onLeave: E,
                        hinted: null === (s = y) || void 0 === s ? void 0 : s(e),
                        sameMonth: c,
                        size: A
                    }, P))
                }
                )))
            }
            )))
        }
    }
    ,
    162972: (e,t,a)=>{
        "use strict";
        a.d(t, {
            CalendarHeader: ()=>k
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(169447)
          , l = a(568906)
          , s = a(141343)
          , c = a(962557)
          , u = a(489026)
          , d = a(734930)
          , v = a(259007)
          , m = a(133893)
          , p = a(766351)
          , f = a(836931)
          , h = a(523323)
          , g = a(795281)
          , b = a(390574)
          , k = function(e) {
            var t = e.viewDate
              , a = e.onChange
              , k = e.prevMonth
              , C = void 0 === k || k
              , _ = e.nextMonth
              , E = void 0 === _ || _
              , y = e.disablePickers
              , S = void 0 !== y && y
              , N = e.onNextMonth
              , w = e.onPrevMonth
              , R = e.prevMonthProps
              , A = void 0 === R ? {} : R
              , M = e.nextMonthProps
              , T = void 0 === M ? {} : M
              , P = e.prevMonthAriaLabel
              , I = void 0 === P ? "Предыдущий месяц" : P
              , D = e.nextMonthAriaLabel
              , L = void 0 === D ? "Следующий месяц" : D
              , x = e.changeMonthAriaLabel
              , O = void 0 === x ? "Изменить месяц" : x
              , B = e.changeYearAriaLabel
              , z = void 0 === B ? "Изменить год" : B
              , F = e.prevMonthIcon
              , H = void 0 === F ? o.createElement(i.Icon20ChevronLeftOutline, {
                className: "vkuiCalendarHeader__nav-icon--accent",
                width: 30,
                height: 30
            }) : F
              , V = e.nextMonthIcon
              , Y = void 0 === V ? o.createElement(l.Icon20ChevronRightOutline, {
                className: "vkuiCalendarHeader__nav-icon--accent",
                width: 30,
                height: 30
            }) : V
              , W = (0,
            r._)(e, ["viewDate", "onChange", "prevMonth", "nextMonth", "disablePickers", "onNextMonth", "onPrevMonth", "prevMonthProps", "nextMonthProps", "prevMonthAriaLabel", "nextMonthAriaLabel", "changeMonthAriaLabel", "changeYearAriaLabel", "prevMonthIcon", "nextMonthIcon"])
              , q = (0,
            p.useConfigProvider)().locale
              , G = o.useCallback((function(e) {
                return a((0,
                v.setMonth)(t, Number(e.target.value)))
            }
            ), [a, t])
              , U = o.useCallback((function(e) {
                return a((0,
                v.setYear)(t, Number(e.target.value)))
            }
            ), [a, t])
              , X = o.useMemo((function() {
                return (0,
                d.getMonths)(q).map((function(e) {
                    var t = e.value
                      , a = e.label;
                    return {
                        value: t,
                        label: o.createElement("span", {
                            className: "vkuiCalendarHeader__month"
                        }, a)
                    }
                }
                ))
            }
            ), [q])
              , K = t.getFullYear()
              , j = o.useMemo((function() {
                return (0,
                d.getYears)(K, 100)
            }
            ), [K])
              , Q = new Intl.DateTimeFormat(q,{
                year: "numeric",
                month: "long"
            })
              , J = A.className
              , Z = (0,
            r._)(A, ["className"])
              , $ = T.className
              , ee = (0,
            r._)(T, ["className"]);
            return o.createElement(h.RootComponent, (0,
            n._)({
                baseClassName: "vkuiCalendarHeader"
            }, W), C && o.createElement(m.AdaptivityProvider, {
                sizeX: u.SizeType.REGULAR
            }, o.createElement(g.Tappable, (0,
            n._)({
                className: (0,
                c.classNames)("vkuiCalendarHeader__nav-icon", "vkuiCalendarHeader__nav-icon-prev", J),
                onClick: w,
                "aria-label": "".concat(I, ", ").concat(Q.format((0,
                v.subMonths)(t, 1)))
            }, Z), H)), S ? o.createElement(b.Paragraph, {
                className: (0,
                c.classNames)("vkuiCalendarHeader__pickers", "vkuiInternalCalendarHeader__pickers"),
                weight: "2"
            }, o.createElement("span", {
                className: "vkuiCalendarHeader__month"
            }, new Intl.DateTimeFormat(q,{
                month: "long"
            }).format(t)), " ", new Intl.DateTimeFormat(q,{
                year: "numeric"
            }).format(t)) : o.createElement(m.AdaptivityProvider, {
                sizeY: u.SizeType.COMPACT
            }, o.createElement("div", {
                className: (0,
                c.classNames)("vkuiCalendarHeader__pickers", "vkuiInternalCalendarHeader__pickers")
            }, o.createElement(f.CustomSelect, {
                className: (0,
                c.classNames)("vkuiCalendarHeader__picker", "vkuiInternalCalendarHeader__picker"),
                value: t.getMonth(),
                options: X,
                dropdownOffsetDistance: 4,
                fixDropdownWidth: !1,
                icon: o.createElement(s.Icon12Dropdown, null),
                onChange: G,
                forceDropdownPortal: !1,
                selectType: "accent",
                "aria-label": O
            }), o.createElement(f.CustomSelect, {
                className: (0,
                c.classNames)("vkuiCalendarHeader__picker", "vkuiInternalCalendarHeader__picker"),
                value: t.getFullYear(),
                options: j,
                dropdownOffsetDistance: 4,
                fixDropdownWidth: !1,
                icon: o.createElement(s.Icon12Dropdown, null),
                onChange: U,
                forceDropdownPortal: !1,
                selectType: "accent",
                "aria-label": z
            }))), E && o.createElement(m.AdaptivityProvider, {
                sizeX: u.SizeType.REGULAR
            }, o.createElement(g.Tappable, (0,
            n._)({
                className: (0,
                c.classNames)("vkuiCalendarHeader__nav-icon", "vkuiCalendarHeader__nav-icon-next", $),
                onClick: N,
                "aria-label": "".concat(L, ", ").concat(Q.format((0,
                v.addMonths)(t, 1)))
            }, ee), Y)))
        }
    }
    ,
    815609: (e,t,a)=>{
        "use strict";
        a.d(t, {
            CalendarRange: ()=>f
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(667294)
          , s = a(454151)
          , c = a(734930)
          , u = a(259007)
          , d = a(254437)
          , v = a(162972)
          , m = a(523323)
          , p = function(e, t) {
            var a;
            return !(!(null === (a = t) || void 0 === a ? void 0 : a[0]) || !t[1]) && Boolean((0,
            u.isWithinInterval)(e, (0,
            u.startOfDay)(t[0]), (0,
            u.endOfDay)(t[1])))
        }
          , f = function(e) {
            var t = e.value
              , a = e.onChange
              , f = e.disablePast
              , h = e.disableFuture
              , g = e.shouldDisableDate
              , b = (e.onClose,
            e.weekStartsOn)
              , k = void 0 === b ? 1 : b
              , C = (e.getRootRef,
            e.disablePickers)
              , _ = e.prevMonthAriaLabel
              , E = e.nextMonthAriaLabel
              , y = e.changeMonthAriaLabel
              , S = e.changeYearAriaLabel
              , N = e.changeDayAriaLabel
              , w = void 0 === N ? "Изменить день" : N
              , R = e.prevMonthIcon
              , A = e.nextMonthIcon
              , M = e.listenDayChangesForUpdate
              , T = (0,
            o._)(e, ["value", "onChange", "disablePast", "disableFuture", "shouldDisableDate", "onClose", "weekStartsOn", "getRootRef", "disablePickers", "prevMonthAriaLabel", "nextMonthAriaLabel", "changeMonthAriaLabel", "changeYearAriaLabel", "changeDayAriaLabel", "prevMonthIcon", "nextMonthIcon", "listenDayChangesForUpdate"])
              , P = (0,
            s.useCalendar)({
                value: t,
                disableFuture: h,
                disablePast: f,
                shouldDisableDate: g
            })
              , I = P.viewDate
              , D = P.setViewDate
              , L = P.setPrevMonth
              , x = P.setNextMonth
              , O = P.focusedDay
              , B = P.setFocusedDay
              , z = P.isDayFocused
              , F = P.isDayDisabled
              , H = P.resetSelectedDay
              , V = (0,
            i._)(l.useState(), 2)
              , Y = V[0]
              , W = V[1]
              , q = (0,
            u.addMonths)(I, 1)
              , G = l.useCallback((function(e) {
                var a;
                ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key) && e.preventDefault();
                var n = (0,
                c.navigateDate)(null != O ? O : null === (a = t) || void 0 === a ? void 0 : a[1], e.key);
                !n || (0,
                u.isSameMonth)(n, I) || (0,
                u.isSameMonth)(n, (0,
                u.addMonths)(I, 1)) || D(n),
                B(n)
            }
            ), [O, B, D, t, I])
              , U = l.useCallback((function(e) {
                if (!t)
                    return [e, null];
                var a = t[0]
                  , n = t[1];
                return a && (0,
                u.isSameDay)(e, a) || n && (0,
                u.isSameDay)(e, n) ? [(0,
                c.setTimeEqual)(e, a), (0,
                c.setTimeEqual)(e, n)] : a && (0,
                u.isBefore)(e, a) ? [(0,
                c.setTimeEqual)(e, a), n] : a && (0,
                u.isAfter)(e, a) ? [a, (0,
                c.setTimeEqual)(e, n)] : t
            }
            ), [t])
              , X = l.useCallback((function(e) {
                var t;
                null === (t = a) || void 0 === t || t(U(e)),
                W(void 0)
            }
            ), [a, U])
              , K = l.useCallback((function(e) {
                return p(e, t)
            }
            ), [t])
              , j = l.useCallback((function(e) {
                var a, n;
                return Boolean((null === (a = t) || void 0 === a ? void 0 : a[0]) && (0,
                u.isSameDay)(e, t[0]) || (null === (n = t) || void 0 === n ? void 0 : n[1]) && (0,
                u.isSameDay)(e, t[1]))
            }
            ), [t])
              , Q = l.useCallback((function(e, a) {
                var n;
                return Boolean((0,
                c.isLastDay)(e, a) || (null === (n = t) || void 0 === n ? void 0 : n[1]) && (0,
                u.isSameDay)(e, t[1]))
            }
            ), [t])
              , J = l.useCallback((function(e, t) {
                var a;
                return Boolean((0,
                c.isLastDay)(e, t) || (null === (a = Y) || void 0 === a ? void 0 : a[1]) && (0,
                u.isSameDay)(e, Y[1]))
            }
            ), [Y])
              , Z = l.useCallback((function(e, a) {
                var n;
                return Boolean((0,
                c.isFirstDay)(e, a) || (null === (n = t) || void 0 === n ? void 0 : n[0]) && (0,
                u.isSameDay)(e, t[0]))
            }
            ), [t])
              , $ = l.useCallback((function(e, t) {
                var a;
                return Boolean((0,
                c.isFirstDay)(e, t) || (null === (a = Y) || void 0 === a ? void 0 : a[0]) && (0,
                u.isSameDay)(e, Y[0]))
            }
            ), [Y])
              , ee = l.useCallback((function(e) {
                return W(U(e))
            }
            ), [W, U])
              , te = l.useCallback((function() {
                return W(void 0)
            }
            ), [W])
              , ae = l.useCallback((function(e) {
                return p(e, Y)
            }
            ), [Y]);
            return l.createElement(m.RootComponent, (0,
            r._)((0,
            n._)({}, T), {
                baseClassName: "vkuiCalendarRange"
            }), l.createElement("div", {
                className: "vkuiCalendarRange__inner"
            }, l.createElement(v.CalendarHeader, {
                viewDate: I,
                onChange: D,
                nextMonth: !1,
                onPrevMonth: L,
                disablePickers: C,
                className: "vkuiCalendarRange__header",
                prevMonthAriaLabel: _,
                nextMonthAriaLabel: E,
                changeMonthAriaLabel: y,
                changeYearAriaLabel: S,
                prevMonthIcon: R
            }), l.createElement(d.CalendarDays, {
                viewDate: I,
                value: t,
                weekStartsOn: k,
                onKeyDown: G,
                isDayFocused: z,
                onDayChange: X,
                isDaySelected: K,
                isDayActive: j,
                isDaySelectionEnd: Q,
                isDaySelectionStart: Z,
                isDayHinted: ae,
                onDayEnter: ee,
                onDayLeave: te,
                isHintedDaySelectionEnd: J,
                isHintedDaySelectionStart: $,
                isDayDisabled: F,
                listenDayChangesForUpdate: M,
                "aria-label": w
            })), l.createElement("div", {
                className: "vkuiCalendarRange__inner"
            }, l.createElement(v.CalendarHeader, {
                viewDate: q,
                onChange: D,
                prevMonth: !1,
                onNextMonth: x,
                disablePickers: C,
                className: "vkuiCalendarRange__header",
                prevMonthAriaLabel: _,
                nextMonthAriaLabel: E,
                changeMonthAriaLabel: y,
                changeYearAriaLabel: S,
                nextMonthIcon: A
            }), l.createElement(d.CalendarDays, {
                viewDate: q,
                value: t,
                weekStartsOn: k,
                "aria-label": w,
                onKeyDown: G,
                isDayFocused: z,
                onDayChange: X,
                isDaySelected: K,
                isDayActive: j,
                isDaySelectionEnd: Q,
                isDaySelectionStart: Z,
                isDayHinted: ae,
                onDayEnter: ee,
                onDayLeave: te,
                isHintedDaySelectionEnd: J,
                isHintedDaySelectionStart: $,
                isDayDisabled: F,
                listenDayChangesForUpdate: M,
                tabIndex: 0,
                onBlur: H
            })))
        }
    }
    ,
    956823: (e,t,a)=>{
        "use strict";
        a.d(t, {
            CalendarTime: ()=>m
        });
        for (var n = a(667294), r = a(489026), o = a(259007), i = a(133893), l = a(658113), s = a(836931), c = [], u = 0; u < 24; u += 1)
            c.push({
                value: u,
                label: String(u).padStart(2, "0")
            });
        for (var d = [], v = 0; v < 60; v += 1)
            d.push({
                value: v,
                label: String(v).padStart(2, "0")
            });
        var m = function(e) {
            var t = e.value
              , a = e.doneButtonText
              , u = void 0 === a ? "Готово" : a
              , v = e.onChange
              , m = e.onClose
              , p = e.changeHoursAriaLabel
              , f = void 0 === p ? "Изменить час" : p
              , h = e.changeMinutesAriaLabel
              , g = void 0 === h ? "Изменить минуту" : h
              , b = n.useCallback((function(e) {
                var a;
                return null === (a = v) || void 0 === a ? void 0 : a((0,
                o.setHours)(t, Number(e.target.value)))
            }
            ), [v, t])
              , k = n.useCallback((function(e) {
                var a;
                return null === (a = v) || void 0 === a ? void 0 : a((0,
                o.setMinutes)(t, Number(e.target.value)))
            }
            ), [v, t]);
            return n.createElement("div", {
                className: "vkuiCalendarTime"
            }, n.createElement("div", {
                className: "vkuiCalendarTime__picker"
            }, n.createElement(i.AdaptivityProvider, {
                sizeY: r.SizeType.COMPACT
            }, n.createElement(s.CustomSelect, {
                value: t.getHours(),
                options: c,
                onChange: b,
                forceDropdownPortal: !1,
                "aria-label": f
            }))), n.createElement("div", {
                className: "vkuiCalendarTime__divider"
            }, ":"), n.createElement("div", {
                className: "vkuiCalendarTime__picker"
            }, n.createElement(i.AdaptivityProvider, {
                sizeY: r.SizeType.COMPACT
            }, n.createElement(s.CustomSelect, {
                value: t.getMinutes(),
                options: d,
                onChange: k,
                forceDropdownPortal: !1,
                "aria-label": g
            }))), n.createElement("div", {
                className: "vkuiCalendarTime__button"
            }, n.createElement(i.AdaptivityProvider, {
                sizeY: r.SizeType.COMPACT
            }, n.createElement(l.Button, {
                mode: "secondary",
                onClick: m,
                size: "l",
                "aria-label": u
            }, u))))
        }
    }
    ,
    138590: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Card: ()=>c
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(523323)
          , c = function(e) {
            var t = e.mode
              , a = void 0 === t ? "tint" : t
              , c = (0,
            o._)(e, ["mode"])
              , u = "outline" === a || "outline-tint" === a;
            return i.createElement(s.RootComponent, (0,
            r._)((0,
            n._)({}, c), {
                baseClassName: (0,
                l.classNames)("vkuiCard", "outline" === a && "vkuiCard--mode-outline", "shadow" === a && "vkuiCard--mode-shadow", u && "vkuiCard--withBorder")
            }))
        }
    }
    ,
    828204: (e,t,a)=>{
        "use strict";
        a.d(t, {
            CardGrid: ()=>p
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(667294)
          , s = a(962557)
          , c = a(324285)
          , u = a(489026)
          , d = a(523323)
          , v = (0,
        n._)({
            none: "vkuiCardGrid--sizeX-none"
        }, u.SizeType.COMPACT, "vkuiCardGrid--sizeX-compact")
          , m = {
            s: "vkuiInternalCardGrid--size-s",
            m: "vkuiInternalCardGrid--size-m",
            l: "vkuiInternalCardGrid--size-l"
        }
          , p = function(e) {
            var t = e.size
              , a = void 0 === t ? "s" : t
              , n = e.spaced
              , p = void 0 !== n && n
              , f = (0,
            i._)(e, ["size", "spaced"])
              , h = (0,
            c.useAdaptivity)().sizeX
              , g = void 0 === h ? "none" : h;
            return l.createElement(d.RootComponent, (0,
            o._)((0,
            r._)({}, f), {
                baseClassName: (0,
                s.classNames)("vkuiCardGrid", "vkuiInternalCardGrid", p && "vkuiCardGrid--spaced", m[a], g !== u.SizeType.REGULAR && v[g])
            }))
        }
    }
    ,
    208954: (e,t,a)=>{
        "use strict";
        a.d(t, {
            CardScroll: ()=>m
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(262039)
          , l = a(667294)
          , s = a(962557)
          , c = a(181498)
          , u = a(635717)
          , d = a(523323)
          , v = {
            s: "vkuiInternalCardScroll--size-s",
            m: "vkuiInternalCardScroll--size-m",
            l: "vkuiInternalCardScroll--size-l"
        }
          , m = function(e) {
            var t = e.children
              , a = e.size
              , m = void 0 === a ? "s" : a
              , p = e.showArrows
              , f = void 0 === p || p
              , h = e.withSpaces
              , g = void 0 === h || h
              , b = (0,
            o._)(e, ["children", "size", "showArrows", "withSpaces"])
              , k = l.useRef(null)
              , C = l.useRef(null)
              , _ = (0,
            c.useDOM)().window;
            return l.createElement(d.RootComponent, (0,
            r._)((0,
            n._)({}, b), {
                baseClassName: (0,
                s.classNames)("vkuiCardScroll", "vkuiInternalCardScroll", !1 !== m && v[m], g && "vkuiCardScroll--withSpaces")
            }), l.createElement(u.HorizontalScroll, {
                getScrollToLeft: function(e) {
                    if (!k.current || !C.current)
                        return e;
                    var t = k.current.offsetWidth
                      , a = (0,
                    i._)(k.current.children).findIndex((function(t) {
                        return t.offsetLeft + t.offsetWidth + parseInt(_.getComputedStyle(t).marginRight) - e >= 0
                    }
                    ));
                    if (-1 === a)
                        return e;
                    if (0 === a)
                        return 0;
                    var n = k.current.children[a]
                      , r = n.offsetLeft - (t - n.offsetWidth) + C.current.offsetWidth;
                    return r <= 2 * C.current.offsetWidth ? 0 : r
                },
                getScrollToRight: function(e) {
                    if (!k.current || !C.current)
                        return e;
                    var t = k.current.offsetWidth
                      , a = Array.prototype.find.call(k.current.children, (function(a) {
                        return a.offsetLeft + a.offsetWidth - e > t
                    }
                    ));
                    return a ? a.offsetLeft - C.current.offsetWidth : e
                },
                showArrows: f
            }, l.createElement("div", {
                className: "vkuiCardScroll__in",
                ref: k
            }, l.createElement("span", {
                className: "vkuiCardScroll__gap",
                ref: C
            }), t, l.createElement("span", {
                className: "vkuiCardScroll__gap"
            }))))
        }
    }
    ,
    426162: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Cell: ()=>g
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(428253)
          , c = a(119360)
          , u = a(108681)
          , d = a(554035)
          , v = a(594735)
          , m = a(426305)
          , p = a(190071)
          , f = a(836161)
          , h = a(912518)
          , g = function(e) {
            var t, a, g = e.mode, b = e.onRemove, k = void 0 === b ? l.noop : b, C = e.removePlaceholder, _ = void 0 === C ? "Удалить" : C, E = e.onDragFinish, y = e.before, S = e.after, N = e.disabled, w = e.draggable, R = e.Component, A = e.onChange, M = e.name, T = e.value, P = e.checked, I = e.defaultChecked, D = e.getRootRef, L = e.draggerLabel, x = void 0 === L ? "Перенести ячейку" : L, O = e.className, B = e.style, z = (0,
            o._)(e, ["mode", "onRemove", "removePlaceholder", "onDragFinish", "before", "after", "disabled", "draggable", "Component", "onChange", "name", "value", "checked", "defaultChecked", "getRootRef", "draggerLabel", "className", "style"]), F = "selectable" === g, H = "removable" === g, V = F ? "label" : R, Y = (0,
            c.usePlatform)(), W = (0,
            s.useExternRef)(D), q = (0,
            h.useDraggable)({
                rootElRef: W,
                onDragFinish: E
            }), G = q.dragging, U = (0,
            o._)(q, ["dragging"]), X = i.useContext(d.ListContext).toggleDrag;
            if (i.useEffect((function() {
                if (G)
                    return X(!0),
                    function() {
                        return X(!1)
                    }
            }
            ), [G, X]),
            w && (t = i.createElement(f.CellDragger, (0,
            n._)({
                className: "vkuiCell__dragger",
                "aria-label": x
            }, U))),
            F) {
                var K = {
                    name: M,
                    value: T,
                    onChange: A,
                    defaultChecked: I,
                    checked: P,
                    disabled: N
                };
                a = i.createElement(p.CellCheckbox, (0,
                n._)({
                    className: "vkuiCell__checkbox"
                }, K))
            }
            var j = w && !F || H || N
              , Q = !j && !G
              , J = (0,
            l.classNames)("vkuiCell", Y === u.Platform.IOS && "vkuiCell--ios", G && "vkuiCell--dragging", H && "vkuiCell--removable", "label" === V && "vkuiCell--selectable", N && "vkuiCell--disabled")
              , Z = i.createElement(m.SimpleCell, (0,
            r._)((0,
            n._)({
                hasActive: Q,
                hasHover: Q
            }, z), {
                className: "vkuiCell__content",
                disabled: j,
                Component: V,
                before: i.createElement(i.Fragment, null, w && Y !== u.Platform.IOS && t, F && a, y),
                after: i.createElement(i.Fragment, null, w && Y === u.Platform.IOS && t, S)
            }));
            return H ? i.createElement(v.Removable, {
                className: (0,
                l.classNames)(J, O),
                style: B,
                getRootRef: W,
                removePlaceholder: _,
                onRemove: function(e) {
                    return k(e, W.current)
                }
            }, Z) : i.createElement("div", {
                className: (0,
                l.classNames)(J, O),
                style: B,
                ref: W
            }, Z)
        };
        g.Checkbox = p.CellCheckbox
    }
    ,
    190071: (e,t,a)=>{
        "use strict";
        a.d(t, {
            CellCheckbox: ()=>C
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(413481)
          , s = a(683260)
          , c = a(462061)
          , u = a(950053)
          , d = a(299715)
          , v = a(690839)
          , m = a(962557)
          , p = a(119360)
          , f = a(108681)
          , h = a(883024)
          , g = a(516511)
          , b = function() {
            return i.createElement(h.AdaptiveIconRenderer, {
                IconCompact: l.Icon20CheckBoxOn,
                IconRegular: s.Icon24CheckBoxOn
            })
        }
          , k = function() {
            return i.createElement(h.AdaptiveIconRenderer, {
                IconCompact: c.Icon20CheckBoxOff,
                IconRegular: u.Icon24CheckBoxOff
            })
        };
        var C = function(e) {
            var t = e.getRootRef
              , a = e.getRef
              , l = e.className
              , s = e.style
              , c = e.type
              , u = void 0 === c ? "auto" : c
              , h = (0,
            o._)(e, ["getRootRef", "getRef", "className", "style", "type"])
              , C = function(e) {
                var t = (0,
                p.usePlatform)();
                return "auto" !== e ? e : t === f.Platform.IOS || t === f.Platform.VKCOM ? "circle" : "square"
            }(u)
              , _ = "circle" === C ? d.Icon24CheckCircleOff : k
              , E = "circle" === C ? v.Icon24CheckCircleOn : b;
            return i.createElement("span", {
                className: (0,
                m.classNames)("vkuiCellCheckbox", l),
                style: s,
                ref: t
            }, i.createElement(g.VisuallyHidden, (0,
            r._)((0,
            n._)({}, h), {
                Component: "input",
                type: "checkbox",
                className: "vkuiCellCheckbox__input",
                getRootRef: a
            })), i.createElement("span", {
                className: (0,
                m.classNames)("vkuiCellCheckbox__icon", "vkuiCellCheckbox__icon--off"),
                "aria-hidden": !0
            }, i.createElement(_, null)), i.createElement("span", {
                className: (0,
                m.classNames)("vkuiCellCheckbox__icon", "vkuiCellCheckbox__icon--on"),
                "aria-hidden": !0
            }, i.createElement(E, null)))
        }
    }
    ,
    836161: (e,t,a)=>{
        "use strict";
        a.d(t, {
            CellDragger: ()=>v
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(19229)
          , l = a(209466)
          , s = a(962557)
          , c = a(119360)
          , u = a(108681)
          , d = a(763029)
          , v = function(e) {
            var t = e.onDragStart
              , a = e.onDragMove
              , v = e.onDragEnd
              , m = e.onClick
              , p = e.className
              , f = (0,
            r._)(e, ["onDragStart", "onDragMove", "onDragEnd", "onClick", "className"])
              , h = (0,
            c.usePlatform)();
            return o.createElement(d.Touch, (0,
            n._)({
                className: (0,
                s.classNames)("vkuiCellDragger", p),
                onStart: t,
                onMoveY: a,
                onEnd: v,
                onClick: function(e) {
                    e.preventDefault(),
                    m && m(e)
                }
            }, f), h === u.Platform.IOS ? o.createElement(i.Icon24ReorderIos, null) : o.createElement(l.Icon24Reorder, null))
        }
    }
    ,
    912518: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useDraggable: ()=>o
        });
        var n = a(191963)
          , r = a(667294)
          , o = function(e) {
            var t = e.rootElRef
              , a = e.onDragFinish
              , o = (0,
            n._)(r.useState(!1), 2)
              , i = o[0]
              , l = o[1]
              , s = (0,
            n._)(r.useState([]), 2)
              , c = s[0]
              , u = s[1]
              , d = (0,
            n._)(r.useState(0), 2)
              , v = d[0]
              , m = d[1]
              , p = (0,
            n._)(r.useState(0), 2)
              , f = p[0]
              , h = p[1]
              , g = (0,
            n._)(r.useState(0), 2)
              , b = g[0]
              , k = g[1]
              , C = (0,
            n._)(r.useState(void 0), 2)
              , _ = C[0]
              , E = C[1];
            return {
                onDragStart: function(e) {
                    var a, n = t.current;
                    if (n) {
                        e.originalEvent.stopPropagation(),
                        e.originalEvent.preventDefault(),
                        l(!0);
                        var r = [];
                        (null === (a = n.parentElement) || void 0 === a ? void 0 : a.childNodes) && (r = Array.from(n.parentElement.children));
                        var o = r.indexOf(n);
                        m(o),
                        h(o),
                        u(r),
                        k(0)
                    }
                },
                onDragMove: function(e) {
                    e.originalEvent.stopPropagation(),
                    e.originalEvent.preventDefault();
                    var a = t.current;
                    if (a) {
                        a.style.transform = "translateY(".concat(e.shiftY, "px)");
                        var n = a.getBoundingClientRect();
                        E(b - e.shiftY < 0 ? "down" : "up"),
                        k(e.shiftY),
                        h(v),
                        c.forEach((function(e, t) {
                            var a = e.getBoundingClientRect()
                              , r = a.height / 2
                              , o = n.bottom > a.top + r
                              , i = n.top < a.bottom - r;
                            v < t ? (o && ("down" === _ && (e.style.transform = "translateY(-100%)"),
                            h((function(e) {
                                return e + 1
                            }
                            ))),
                            i && "up" === _ && (e.style.transform = "translateY(0)")) : v > t && (i && ("up" === _ && (e.style.transform = "translateY(100%)"),
                            h((function(e) {
                                return e - 1
                            }
                            ))),
                            o && "down" === _ && (e.style.transform = "translateY(0)"))
                        }
                        ))
                    }
                },
                onDragEnd: function(e) {
                    e.originalEvent.stopPropagation(),
                    e.originalEvent.preventDefault();
                    var t = [v, f]
                      , n = t[0]
                      , r = t[1];
                    c.forEach((function(e) {
                        e.style.transform = ""
                    }
                    )),
                    u([]),
                    h(0),
                    m(0),
                    E(void 0),
                    k(0),
                    l(!1),
                    a && a({
                        from: n,
                        to: r
                    })
                },
                dragging: i
            }
        }
    }
    ,
    935563: (e,t,a)=>{
        "use strict";
        a.d(t, {
            CellButton: ()=>c
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(426305)
          , c = function(e) {
            var t = e.centered
              , a = void 0 !== t && t
              , c = e.mode
              , u = void 0 === c ? "primary" : c
              , d = e.className
              , v = (0,
            o._)(e, ["centered", "mode", "className"]);
            return i.createElement(s.SimpleCell, (0,
            r._)((0,
            n._)({
                stopPropagation: !0
            }, v), {
                className: (0,
                l.classNames)("vkuiCellButton", "vkuiInternalCellButton", "danger" === u && (0,
                l.classNames)("vkuiCellButton--mode-danger", "vkuiInternalCellButton--mode-danger"), a && "vkuiCellButton--centered", d)
            }))
        }
    }
    ,
    387130: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Checkbox: ()=>w
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(667294)
          , s = a(413481)
          , c = a(683260)
          , u = a(462061)
          , d = a(950053)
          , v = a(651815)
          , m = a(962557)
          , p = a(324285)
          , f = a(934977)
          , h = a(428253)
          , g = a(119360)
          , b = a(489026)
          , k = a(108681)
          , C = a(644029)
          , _ = a(795281)
          , E = a(894872)
          , y = a(754259)
          , S = a(516511)
          , N = (0,
        n._)({
            none: "vkuiCheckbox--sizeY-none"
        }, b.SizeType.COMPACT, "vkuiCheckbox--sizeY-compact")
          , w = ((0,
        C.warnOnce)("Checkbox"),
        function(e) {
            var t = e.children
              , a = e.className
              , n = e.style
              , C = e.getRootRef
              , w = e.getRef
              , R = e.description
              , A = e.indeterminate
              , M = e.defaultIndeterminate
              , T = e.hoverMode
              , P = e.activeMode
              , I = e.hasHover
              , D = e.hasActive
              , L = e.focusVisibleMode
              , x = e.onChange
              , O = e.titleAfter
              , B = (0,
            i._)(e, ["children", "className", "style", "getRootRef", "getRef", "description", "indeterminate", "defaultIndeterminate", "hoverMode", "activeMode", "hasHover", "hasActive", "focusVisibleMode", "onChange", "titleAfter"])
              , z = (0,
            h.useExternRef)(w)
              , F = (0,
            g.usePlatform)()
              , H = (0,
            p.useAdaptivity)().sizeY
              , V = void 0 === H ? "none" : H
              , Y = (0,
            f.useAdaptivityConditionalRender)().sizeY;
            l.useEffect((function() {
                var e = void 0 === A ? M : A;
                z.current && (z.current.indeterminate = Boolean(e))
            }
            ), [M, A, z]);
            var W = l.useCallback((function(e) {
                void 0 !== M && void 0 === A && void 0 === B.checked && z.current && (z.current.indeterminate = !1),
                void 0 !== A && z.current && (z.current.indeterminate = A),
                x && x(e)
            }
            ), [M, A, B.checked, x, z]);
            return l.createElement(_.Tappable, {
                Component: "label",
                className: (0,
                m.classNames)("vkuiCheckbox", V !== b.SizeType.REGULAR && N[V], !((0,
                m.hasReactNode)(t) || (0,
                m.hasReactNode)(R)) && "vkuiCheckbox--simple", a),
                style: n,
                disabled: B.disabled,
                activeEffectDelay: F === k.Platform.IOS ? 100 : _.ACTIVE_EFFECT_DELAY,
                getRootRef: C,
                hoverMode: T,
                activeMode: P,
                hasHover: I,
                hasActive: D,
                focusVisibleMode: L
            }, l.createElement(S.VisuallyHidden, (0,
            o._)((0,
            r._)({}, B), {
                Component: "input",
                type: "checkbox",
                onChange: W,
                className: "vkuiCheckbox__input",
                getRootRef: z
            })), l.createElement("div", {
                className: (0,
                m.classNames)("vkuiCheckbox__icon", "vkuiCheckbox__icon--on")
            }, F === k.Platform.VKCOM ? l.createElement(s.Icon20CheckBoxOn, null) : l.createElement(l.Fragment, null, Y.compact && l.createElement(s.Icon20CheckBoxOn, {
                className: Y.compact.className
            }), Y.regular && l.createElement(c.Icon24CheckBoxOn, {
                className: Y.regular.className
            }))), l.createElement("div", {
                className: (0,
                m.classNames)("vkuiCheckbox__icon", "vkuiCheckbox__icon--off")
            }, F === k.Platform.VKCOM ? l.createElement(u.Icon20CheckBoxOff, null) : l.createElement(l.Fragment, null, Y.compact && l.createElement(u.Icon20CheckBoxOff, {
                className: Y.compact.className
            }), Y.regular && l.createElement(d.Icon24CheckBoxOff, {
                className: Y.regular.className
            }))), l.createElement("div", {
                className: (0,
                m.classNames)("vkuiCheckbox__icon", "vkuiCheckbox__icon--indeterminate")
            }, F === k.Platform.VKCOM ? l.createElement(v.Icon20CheckBoxIndetermanate, {
                width: 20,
                height: 20
            }) : l.createElement(l.Fragment, null, Y.compact && l.createElement(v.Icon20CheckBoxIndetermanate, {
                className: Y.compact.className,
                width: 20,
                height: 20
            }), Y.regular && l.createElement(v.Icon20CheckBoxIndetermanate, {
                className: Y.regular.className,
                width: 24,
                height: 24
            }))), l.createElement("div", {
                className: "vkuiCheckbox__content"
            }, l.createElement("div", {
                className: "vkuiCheckbox__title"
            }, l.createElement(y.Text, {
                className: "vkuiCheckbox__titleBefore"
            }, t), l.createElement("div", {
                className: "vkuiCheckbox__titleAfter"
            }, O)), (0,
            m.hasReactNode)(R) && l.createElement(E.Footnote, {
                className: "vkuiCheckbox__description"
            }, R)))
        }
        )
    }
    ,
    973007: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Chip: ()=>f
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(158339)
          , i = a(667294)
          , l = a(790932)
          , s = a(962557)
          , c = a(324285)
          , u = a(489026)
          , d = a(256631)
          , v = a(523323)
          , m = a(795281)
          , p = (0,
        n._)({
            none: "vkuiChip--sizeY-none"
        }, u.SizeType.COMPACT, "vkuiChip--sizeY-compact")
          , f = function(e) {
            var t = e.value
              , a = void 0 === t ? "" : t
              , n = (e.option,
            e.removable)
              , f = void 0 === n || n
              , h = e.onRemove
              , g = void 0 === h ? s.noop : h
              , b = e.removeAriaLabel
              , k = void 0 === b ? "Удалить" : b
              , C = e.before
              , _ = void 0 === C ? null : C
              , E = e.after
              , y = e.children
              , S = (0,
            o._)(e, ["value", "option", "removable", "onRemove", "removeAriaLabel", "before", "after", "children"])
              , N = (0,
            c.useAdaptivity)().sizeY
              , w = void 0 === N ? "none" : N
              , R = i.useCallback((function(e) {
                g(e, a)
            }
            ), [g, a])
              , A = (0,
            d.getTitleFromChildren)(y);
            return i.createElement(v.RootComponent, (0,
            r._)({
                baseClassName: (0,
                s.classNames)("vkuiChip", w !== u.SizeType.REGULAR && p[w], f && "vkuiChip--removable"),
                role: "option",
                "aria-label": A
            }, S), i.createElement("div", {
                className: "vkuiChip__in",
                role: "presentation"
            }, (0,
            s.hasReactNode)(_) && i.createElement("div", {
                className: "vkuiChip__before"
            }, _), i.createElement("span", {
                className: "vkuiChip__content",
                title: A,
                "aria-hidden": !0
            }, y), (0,
            s.hasReactNode)(E) && i.createElement("div", {
                className: "vkuiChip__after"
            }, E), f && i.createElement(m.Tappable, {
                Component: "button",
                className: "vkuiChip__remove",
                onClick: R,
                hasHover: !1,
                hasActive: !1,
                "aria-label": "".concat(k, " ").concat(A)
            }, i.createElement(l.Icon16Cancel, null))))
        }
    }
    ,
    517466: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ChipsInput: ()=>s
        });
        var n = a(158339)
          , r = a(667294)
          , o = a(962557)
          , i = a(928346)
          , l = a(937188)
          , s = function(e) {
            var t = e.style
              , a = e.className
              , s = e.getRootRef
              , c = e.before
              , u = e.after
              , d = e.status
              , v = e.mode
              , m = (0,
            n._)(e, ["style", "className", "getRootRef", "before", "after", "status", "mode"]);
            return r.createElement(l.FormField, {
                getRootRef: s,
                className: (0,
                o.classNames)("vkuiChipsInput", "vkuiInternalChipsInput", a),
                style: t,
                disabled: m.disabled,
                before: c,
                after: u,
                role: "application",
                "aria-disabled": m.disabled,
                "aria-readonly": m.readOnly,
                status: d,
                mode: v
            }, r.createElement(i.ChipsInputBase, m))
        }
    }
    ,
    928346: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ChipsInputBase: ()=>g,
            chipsInputDefaultProps: ()=>h
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(688421)
          , s = a(667294)
          , c = a(962557)
          , u = a(324285)
          , d = a(684702)
          , v = a(428253)
          , m = a(489026)
          , p = a(973007)
          , f = a(754259)
          , h = {
            onChange: c.noop,
            onInputChange: c.noop,
            onKeyDown: c.noop,
            onBlur: c.noop,
            onFocus: c.noop,
            value: [],
            inputValue: "",
            inputAriaLabel: "Введите ваше значение...",
            getOptionValue: function(e) {
                return e.value
            },
            getOptionLabel: function(e) {
                return e.label
            },
            getNewOptionData: function(e, t) {
                return {
                    value: t,
                    label: t
                }
            },
            renderChip: function(e) {
                if (!e)
                    return null;
                var t = e.disabled
                  , a = e.value
                  , r = e.label
                  , i = (0,
                o._)(e, ["disabled", "value", "label"]);
                return s.createElement(p.Chip, (0,
                n._)({
                    value: a,
                    removable: !t
                }, i), r)
            },
            addOnBlur: !1
        }
          , g = function(e) {
            var t = (0,
            n._)({}, h, e)
              , a = t.style
              , p = t.className
              , g = t.getRootRef
              , b = (t.value,
            t.onChange,
            t.onInputChange,
            t.onKeyDown)
              , k = t.onBlur
              , C = t.onFocus
              , _ = (t.children,
            t.inputValue,
            t.getRef)
              , E = t.placeholder
              , y = t.getOptionValue
              , S = t.getOptionLabel
              , N = (t.getNewOptionData,
            t.renderChip)
              , w = t.inputAriaLabel
              , R = t.addOnBlur
              , A = (0,
            o._)(t, ["style", "className", "getRootRef", "value", "onChange", "onInputChange", "onKeyDown", "onBlur", "onFocus", "children", "inputValue", "getRef", "placeholder", "getOptionValue", "getOptionLabel", "getNewOptionData", "renderChip", "inputAriaLabel", "addOnBlur"])
              , M = (0,
            u.useAdaptivity)().sizeY
              , T = (0,
            i._)(s.useState(!1), 2)
              , P = T[0]
              , I = T[1]
              , D = (0,
            d.useChipsInput)(t)
              , L = D.fieldValue
              , x = D.addOptionFromInput
              , O = D.removeOption
              , B = D.selectedOptions
              , z = D.handleInputChange
              , F = (0,
            v.useExternRef)(_)
              , H = A.disabled || A.readOnly
              , V = function(e, t) {
                void 0 !== t && O(t)
            };
            return s.createElement("div", {
                onClick: function(e) {
                    var t;
                    H ? e.preventDefault() : null === (null === (t = F) || void 0 === t ? void 0 : t.current) || P || F.current.focus()
                },
                role: "presentation",
                style: a,
                className: (0,
                c.classNames)("vkuiChipsInputBase", M === m.SizeType.COMPACT && "vkuiChipsInputBase--sizeY-compact", !B.length && "vkuiChipsInputBase--hasPlaceholder", p),
                ref: g
            }, B.map((function(e) {
                var t = y(e)
                  , a = S(e);
                return s.createElement(s.Fragment, {
                    key: "".concat(void 0 === t ? "undefined" : (0,
                    l._)(t), "-").concat(t)
                }, N({
                    option: e,
                    value: t,
                    label: a,
                    onRemove: V,
                    disabled: Boolean(A.disabled),
                    className: "vkuiChipsInputBase__chip"
                }))
            }
            )), s.createElement("label", {
                className: "vkuiChipsInputBase__label",
                "aria-label": w
            }, s.createElement(f.Text, (0,
            r._)((0,
            n._)({
                Component: "input",
                type: "text",
                autoCapitalize: "none",
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: !1,
                "aria-autocomplete": "list",
                className: "vkuiChipsInputBase__el"
            }, A), {
                getRootRef: F,
                value: L,
                onChange: z,
                onKeyDown: function(e) {
                    H ? e.preventDefault() : (b(e),
                    "Backspace" !== e.key || e.defaultPrevented || L || !B.length || (O(y(B[B.length - 1])),
                    e.preventDefault()),
                    "Enter" === e.key && !e.defaultPrevented && L && (x(),
                    e.preventDefault()))
                },
                onFocus: function(e) {
                    P || I(!0),
                    C(e)
                },
                onBlur: function(e) {
                    P && I(!1),
                    k(e),
                    R && !e.defaultPrevented && x()
                },
                placeholder: B.length ? void 0 : E
            }))))
        }
    }
    ,
    721827: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ChipsSelect: ()=>N
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(688421)
          , s = a(667294)
          , c = a(962557)
          , u = a(915474)
          , d = a(428253)
          , v = a(283821)
          , m = a(181498)
          , p = a(221501)
          , f = a(928346)
          , h = a(371103)
          , g = a(596002)
          , b = a(91742)
          , k = a(937188)
          , C = a(600245)
          , _ = a(894872)
          , E = "next"
          , y = "prev"
          , S = (0,
        r._)((0,
        n._)({}, f.chipsInputDefaultProps), {
            emptyText: "Ничего не найдено",
            creatableText: "Создать значение",
            onChangeStart: c.noop,
            creatable: !1,
            fetching: !1,
            showSelected: !0,
            closeAfterSelect: !0,
            options: [],
            filterFn: p.defaultFilterFn,
            renderOption: function(e) {
                return s.createElement(g.CustomSelectOption, e)
            }
        })
          , N = function(e) {
            var t, a, p = (0,
            n._)({}, S, e), N = p.style, w = p.onFocus, R = p.onBlur, A = p.onKeyDown, M = p.className, T = p.fetching, P = p.renderOption, I = p.emptyText, D = p.getRef, L = (p.getRootRef,
            p.disabled), x = p.placeholder, O = p.tabIndex, B = p.getOptionValue, z = p.getOptionLabel, F = (p.showSelected,
            p.getNewOptionData), H = p.renderChip, V = p.popupDirection, Y = p.creatable, W = (p.filterFn,
            p.inputValue,
            p.creatableText), q = p.closeAfterSelect, G = p.onChangeStart, U = p.before, X = p.icon, K = (p.options,
            p.fixDropdownWidth), j = p.forceDropdownPortal, Q = (0,
            o._)(p, ["style", "onFocus", "onBlur", "onKeyDown", "className", "fetching", "renderOption", "emptyText", "getRef", "getRootRef", "disabled", "placeholder", "tabIndex", "getOptionValue", "getOptionLabel", "showSelected", "getNewOptionData", "renderChip", "popupDirection", "creatable", "filterFn", "inputValue", "creatableText", "closeAfterSelect", "onChangeStart", "before", "icon", "options", "fixDropdownWidth", "forceDropdownPortal"]), J = (0,
            m.useDOM)().document, Z = (0,
            i._)(s.useState(void 0), 2), $ = Z[0], ee = Z[1], te = s.useRef(null), ae = (0,
            d.useExternRef)(D), ne = (0,
            u.useChipsSelect)(p), re = ne.fieldValue, oe = ne.selectedOptions, ie = void 0 === oe ? [] : oe, le = ne.opened, se = ne.setOpened, ce = ne.addOptionFromInput, ue = ne.filteredOptions, de = ne.addOption, ve = ne.handleInputChange, me = ne.clearInput, pe = ne.focusedOption, fe = ne.setFocusedOption, he = ne.focusedOptionIndex, ge = ne.setFocusedOptionIndex, be = Boolean(Y && W && !ue.length && re), ke = s.useRef([]).current, Ce = function(e, t) {
                var a = ue.length;
                e < 0 ? e = a - 1 : e >= a && (e = 0),
                e !== t && (!function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , a = te.current
                      , n = ke[e];
                    if (n && a) {
                        var r = a.offsetHeight
                          , o = a.scrollTop
                          , i = n.offsetTop
                          , l = n.offsetHeight;
                        t ? a.scrollTop = i - r / 2 + l / 2 : i + l > r + o ? a.scrollTop = i - r + l : i < o && (a.scrollTop = i)
                    }
                }(e),
                ge(e))
            }, _e = function(e, t) {
                var a = null === e ? -1 : e;
                t === E ? a += 1 : t === y && (a -= 1),
                Ce(a, he)
            };
            s.useEffect((function() {
                null != he && ue[he] ? fe(ue[he]) : null !== he && 0 !== he || fe(null)
            }
            ), [he, ue, fe]),
            (0,
            v.useGlobalEventListener)(J, "click", (function(e) {
                var t, a, n = !(null === (t = ae.current) || void 0 === t ? void 0 : t.contains(e.target)), r = !(null === (a = te.current) || void 0 === a ? void 0 : a.contains(e.target));
                n && r && se(!1)
            }
            ));
            var Ee = null === (t = $) || void 0 === t ? void 0 : t.includes("top")
              , ye = s.useCallback((function(e) {
                ee(e)
            }
            ), [ee])
              , Se = s.useCallback((function() {
                ge(null)
            }
            ), [ge]);
            return s.createElement(s.Fragment, null, s.createElement(k.FormField, {
                getRootRef: ae,
                style: N,
                className: (0,
                c.classNames)("vkuiChipsSelect", le && (Ee ? "vkuiChipsSelect--pop-up" : "vkuiChipsSelect--pop-down"), M),
                disabled: L,
                role: "application",
                "aria-disabled": L,
                "aria-readonly": Q.readOnly,
                after: s.createElement(C.IconButton, {
                    className: "vkuiChipsSelect__dropdown",
                    activeMode: "",
                    hoverMode: "",
                    "aria-label": le ? "Скрыть" : "Развернуть",
                    onClick: function() {
                        se((function(e) {
                            return !e
                        }
                        ))
                    }
                }, null != X ? X : s.createElement(b.DropdownIcon, {
                    className: "vkuiChipsSelect__icon",
                    opened: le
                })),
                before: U
            }, s.createElement(f.ChipsInputBase, (0,
            r._)((0,
            n._)({}, Q), {
                tabIndex: O,
                value: ie,
                inputValue: re,
                getNewOptionData: F,
                getOptionLabel: z,
                getOptionValue: B,
                renderChip: function(e) {
                    if (void 0 === e)
                        return null;
                    return H((0,
                    r._)((0,
                    n._)({}, e), {
                        onRemove: function(t, a) {
                            var n, r, o, i;
                            null === (n = t) || void 0 === n || n.preventDefault(),
                            null === (r = t) || void 0 === r || r.stopPropagation(),
                            null === (o = (i = e).onRemove) || void 0 === o || o.call(i, t, a)
                        }
                    }))
                },
                onFocus: function(e) {
                    se(!0),
                    ge(null),
                    w(e)
                },
                onBlur: function(e) {
                    R(e),
                    e.defaultPrevented || Y || e.preventDefault()
                },
                onKeyDown: function(e) {
                    if (A(e),
                    "ArrowUp" !== e.key || e.defaultPrevented || (e.preventDefault(),
                    le ? _e(he, y) : (se(!0),
                    ge(0))),
                    "ArrowDown" !== e.key || e.defaultPrevented || (e.preventDefault(),
                    le ? _e(he, E) : (se(!0),
                    ge(0))),
                    "Enter" === e.key && !e.defaultPrevented && le)
                        if (null != he) {
                            var t = ue[he];
                            t ? (G(e, t),
                            e.defaultPrevented || (de(t),
                            ge(null),
                            me(),
                            q && se(!1),
                            e.preventDefault())) : Y || e.preventDefault()
                        } else
                            Y || e.preventDefault();
                    ["Escape", "Tab"].includes(e.key) && !e.defaultPrevented && le && se(!1)
                },
                placeholder: x,
                getRef: D,
                disabled: L,
                onInputChange: ve
            }))), le && s.createElement(h.CustomSelectDropdown, {
                targetRef: ae,
                placement: V,
                scrollBoxRef: te,
                onPlacementChange: ye,
                onMouseLeave: Se,
                fetching: T,
                sameWidth: K,
                forcePortal: j
            }, be && s.createElement(g.CustomSelectOption, {
                hovered: 0 === he,
                onMouseDown: ce,
                onMouseEnter: function() {
                    return ge(0)
                }
            }, W), (null === (a = ue) || void 0 === a ? void 0 : a.length) || be || !I ? ue.map((function(e, t) {
                var a = z(e)
                  , n = pe && B(e) === B(pe)
                  , r = ie.find((function(t) {
                    return B(t) === B(e)
                }
                ))
                  , o = B(e);
                return s.createElement(s.Fragment, {
                    key: "".concat(void 0 === o ? "undefined" : (0,
                    l._)(o), "-").concat(o)
                }, P({
                    option: e,
                    hovered: Boolean(n),
                    children: a,
                    selected: !!r,
                    getRootRef: function(e) {
                        if (e)
                            return ke[t] = e
                    },
                    onMouseDown: function(t) {
                        var a;
                        null === (a = G) || void 0 === a || a(t, e),
                        t.defaultPrevented || (q && se(!1),
                        de(e),
                        me())
                    },
                    onMouseEnter: function() {
                        return ge(t)
                    }
                }))
            }
            )) : s.createElement(_.Footnote, {
                className: "vkuiChipsSelect__empty"
            }, I)))
        }
    }
    ,
    601514: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ConfigProvider: ()=>f
        });
        var n = a(772253)
          , r = a(667294)
          , o = a(962557)
          , i = a(343236)
          , l = a(99873)
          , s = a(854193)
          , c = a(181498)
          , u = a(362591)
          , d = a(214542)
          , v = a(256631)
          , m = a(644029)
          , p = a(766351)
          , f = ((0,
        m.warnOnce)("ConfigProvider"),
        function(e) {
            var t = (0,
            p.useConfigProvider)()
              , a = (0,
            n._)({}, t, e)
              , m = a.children
              , f = a.webviewType
              , h = a.hasCustomPanelHeaderAfter
              , g = a.customPanelHeaderAfterMinWidth
              , b = a.isWebView
              , k = a.transitionMotionEnabled
              , C = a.platform
              , _ = a.locale
              , E = a.appearance
              , y = a.onDetectAppearanceByBridge
              , S = void 0 === y ? o.noop : y
              , N = e.webviewType && void 0 === e.hasCustomPanelHeaderAfter ? e.webviewType === p.WebviewType.VKAPPS : h
              , w = (0,
            l.useAutoDetectAppearance)(E, S)
              , R = (0,
            c.useDOM)().document;
            (0,
            d.useIsomorphicLayoutEffect)((function() {
                if (R) {
                    var e = (0,
                    i.generateVKUITokensClassName)(C, w);
                    return (0,
                    v.addClassNameToElement)(R.body, e),
                    function() {
                        (0,
                        v.removeClassNameFromElement)(R.body, e)
                    }
                }
            }
            ), [C, w]);
            var A = (0,
            s.useObjectMemo)({
                webviewType: f,
                hasCustomPanelHeaderAfter: N,
                customPanelHeaderAfterMinWidth: g,
                isWebView: b,
                transitionMotionEnabled: k,
                platform: C,
                locale: _,
                appearance: w
            });
            return r.createElement(p.ConfigProviderContext.Provider, {
                value: A
            }, r.createElement(u.TokensClassProvider, {
                platform: C,
                appearance: w
            }, m))
        }
        )
    }
    ,
    766351: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ConfigProviderContext: ()=>s,
            WebviewType: ()=>n,
            useConfigProvider: ()=>c
        });
        var n, r = a(667294), o = a(363476), i = a.n(o), l = a(108681);
        !function(e) {
            e.VKAPPS = "vkapps",
            e.INTERNAL = "internal"
        }(n || (n = {}));
        var s = r.createContext({
            webviewType: void 0,
            hasCustomPanelHeaderAfter: !0,
            customPanelHeaderAfterMinWidth: 90,
            isWebView: i().isWebView(),
            transitionMotionEnabled: !0,
            platform: (0,
            l.platform)(),
            appearance: void 0,
            locale: "ru"
        })
          , c = function() {
            return r.useContext(s)
        }
    }
    ,
    203642: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ConfigProviderOverride: ()=>s
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(854193)
          , l = a(766351);
        function s(e) {
            var t = e.children
              , a = (0,
            r._)(e, ["children"])
              , s = (0,
            l.useConfigProvider)()
              , c = (0,
            i.useObjectMemo)((0,
            n._)({}, s, a));
            return o.createElement(l.ConfigProviderContext.Provider, {
                value: c
            }, t)
        }
    }
    ,
    582164: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ContentCard: ()=>p
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(138590)
          , c = a(795281)
          , u = a(443910)
          , d = a(894872)
          , v = a(115446)
          , m = a(754259)
          , p = function(e) {
            var t = e.subtitle
              , a = e.header
              , p = e.text
              , f = e.caption
              , h = e.className
              , g = e.mode
              , b = void 0 === g ? "shadow" : g
              , k = e.style
              , C = e.getRootRef
              , _ = e.getRef
              , E = e.maxHeight
              , y = e.src
              , S = e.srcSet
              , N = e.alt
              , w = void 0 === N ? "" : N
              , R = (e.width,
            e.height)
              , A = e.crossOrigin
              , M = e.decoding
              , T = e.loading
              , P = e.referrerPolicy
              , I = e.sizes
              , D = e.useMap
              , L = e.hasHover
              , x = void 0 !== L && L
              , O = e.hasActive
              , B = void 0 !== O && O
              , z = (0,
            o._)(e, ["subtitle", "header", "text", "caption", "className", "mode", "style", "getRootRef", "getRef", "maxHeight", "src", "srcSet", "alt", "width", "height", "crossOrigin", "decoding", "loading", "referrerPolicy", "sizes", "useMap", "hasHover", "hasActive"]);
            return i.createElement(s.Card, {
                mode: b,
                getRootRef: C,
                style: k,
                className: (0,
                l.classNames)(z.disabled && "vkuiContentCard--disabled", h)
            }, i.createElement(c.Tappable, (0,
            r._)((0,
            n._)({}, z), {
                disabled: z.disabled || !z.onClick && !z.href,
                hasHover: x,
                hasActive: B,
                className: "vkuiContentCard__tappable"
            }), (y || S) && i.createElement("img", {
                ref: _,
                className: "vkuiContentCard__img",
                src: y,
                srcSet: S,
                alt: w,
                crossOrigin: A,
                decoding: M,
                loading: T,
                referrerPolicy: P,
                sizes: I,
                useMap: D,
                height: R,
                style: {
                    maxHeight: E
                },
                width: "100%"
            }), i.createElement("div", {
                className: "vkuiContentCard__body"
            }, (0,
            l.hasReactNode)(t) && i.createElement(u.Caption, {
                className: (0,
                l.classNames)("vkuiContentCard__text", "vkuiContentCard__subtitle"),
                weight: "1",
                level: "3",
                caps: !0
            }, t), (0,
            l.hasReactNode)(a) && i.createElement(v.Headline, {
                className: "vkuiContentCard__text",
                weight: "2",
                level: "1"
            }, a), (0,
            l.hasReactNode)(p) && i.createElement(m.Text, {
                className: "vkuiContentCard__text"
            }, p), (0,
            l.hasReactNode)(f) && i.createElement(d.Footnote, {
                className: (0,
                l.classNames)("vkuiContentCard__text", "vkuiContentCard__caption")
            }, f))))
        }
    }
    ,
    643831: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Counter: ()=>v
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(443910)
          , c = a(115446)
          , u = {
            secondary: "vkuiCounter--mode-secondary",
            primary: "vkuiCounter--mode-primary",
            prominent: "vkuiCounter--mode-prominent",
            contrast: "vkuiCounter--mode-contrast",
            inherit: "vkuiCounter--mode-inherit"
        }
          , d = {
            s: "vkuiCounter--size-s",
            m: "vkuiCounter--size-m"
        }
          , v = function(e) {
            var t = e.mode
              , a = void 0 === t ? "inherit" : t
              , v = e.size
              , m = void 0 === v ? "m" : v
              , p = e.children
              , f = e.className
              , h = (0,
            o._)(e, ["mode", "size", "children", "className"]);
            if (0 === i.Children.count(p))
                return null;
            var g = "s" === m ? s.Caption : c.Headline
              , b = "s" === m ? "1" : "2";
            return i.createElement(g, (0,
            r._)((0,
            n._)({}, h), {
                Component: "span",
                className: (0,
                l.classNames)("vkuiInternalCounter", "vkuiCounter", u[a], d[m], f),
                level: b
            }), p)
        }
    }
    ,
    803265: (e,t,a)=>{
        "use strict";
        a.d(t, {
            CustomScrollView: ()=>d
        });
        var n = a(667294)
          , r = a(962557)
          , o = a(151571)
          , i = a(428253)
          , l = a(181498)
          , s = a(214542)
          , c = a(256631)
          , u = a(653762)
          , d = function(e) {
            var t = e.className
              , a = e.children
              , d = e.boxRef
              , v = e.windowResize
              , m = e.autoHideScrollbar
              , p = void 0 !== m && m
              , f = e.autoHideScrollbarDelay
              , h = e.onScroll
              , g = (0,
            l.useDOM)()
              , b = g.document
              , k = g.window
              , C = n.useRef(NaN)
              , _ = n.useRef(0)
              , E = n.useRef(0)
              , y = n.useRef(0)
              , S = n.useRef(0)
              , N = n.useRef("")
              , w = n.useRef(0)
              , R = n.useRef(0)
              , A = (0,
            i.useExternRef)(d)
              , M = n.useRef(null)
              , T = n.useRef(null)
              , P = function(e) {
                var t = e / (S.current - E.current);
                !function(e) {
                    _.current = e,
                    null !== T.current && (T.current.style[N.current] = "translate(0, ".concat(e, "px)"))
                }((E.current - y.current) * t)
            }
              , I = function() {
                if (A.current && M.current && T.current) {
                    var e = A.current.clientHeight
                      , t = A.current.scrollHeight
                      , a = e / t
                      , n = Math.max(e * a, 40);
                    C.current = a,
                    E.current = e,
                    S.current = t,
                    y.current = n,
                    a >= 1 ? M.current.style.display = "none" : (M.current.style.display = "",
                    T.current.style.height = "".concat(n, "px"),
                    P(A.current.scrollTop))
                }
            }
              , D = (0,
            o.useEventListener)("resize", I);
            (0,
            s.useIsomorphicLayoutEffect)((function() {
                v && k && D.add(k)
            }
            ), [v, k]),
            (0,
            s.useIsomorphicLayoutEffect)((function() {
                var e, t = null === (e = T.current) || void 0 === e ? void 0 : e.style, a = "";
                void 0 !== t && ("transform"in t ? a = "transform" : "webkitTransform"in t && (a = "webkitTransform")),
                N.current = a
            }
            ), []),
            (0,
            s.useIsomorphicLayoutEffect)(I);
            var L = (0,
            u.useTrackerVisibility)(p, f)
              , x = L.trackerVisible
              , O = L.onTargetScroll
              , B = L.onTrackerDragStart
              , z = L.onTrackerDragStop
              , F = L.onTrackerMouseEnter
              , H = L.onTrackerMouseLeave
              , V = [(0,
            o.useEventListener)("mousemove", (function(e) {
                e.preventDefault();
                var t = e.clientY - w.current;
                !function(e) {
                    var t = e / (E.current - y.current);
                    null !== A.current && (A.current.scrollTop = (S.current - E.current) * t)
                }(Math.min(Math.max(R.current + t, 0), E.current - y.current))
            }
            )), (0,
            o.useEventListener)("mouseup", (function(e) {
                e.preventDefault(),
                p && z(),
                V.forEach((function(e) {
                    return e.remove()
                }
                ))
            }
            ))];
            return n.createElement("div", {
                className: (0,
                r.classNames)("vkuiCustomScrollView", t)
            }, n.createElement("div", {
                className: "vkuiCustomScrollView__box",
                tabIndex: -1,
                ref: A,
                onScroll: function(e) {
                    var t;
                    C.current >= 1 || !A.current || (p && O(),
                    P(A.current.scrollTop),
                    null === (t = h) || void 0 === t || t(e))
                }
            }, a), n.createElement("div", {
                className: "vkuiCustomScrollView__barY",
                ref: M,
                onClick: c.stopPropagation
            }, n.createElement("div", {
                className: (0,
                r.classNames)("vkuiCustomScrollView__trackerY", !x && "vkuiCustomScrollView__trackerY--hidden"),
                onMouseEnter: p ? F : void 0,
                onMouseLeave: p ? H : void 0,
                ref: T,
                onMouseDown: function(e) {
                    var t;
                    e.preventDefault(),
                    w.current = e.clientY,
                    R.current = _.current,
                    p && B(),
                    (t = b) && V.forEach((function(e) {
                        return e.add(t)
                    }
                    ))
                }
            })))
        }
    }
    ,
    653762: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useTrackerVisibility: ()=>i
        });
        var n = a(191963)
          , r = a(667294)
          , o = a(855356)
          , i = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500
              , a = (0,
            n._)(r.useState(!e), 2)
              , i = a[0]
              , l = a[1]
              , s = r.useRef(!1)
              , c = r.useRef(!1)
              , u = (0,
            o.useTimeout)((function() {
                return l(!1)
            }
            ), t)
              , d = u.set
              , v = u.clear
              , m = r.useCallback((function() {
                v(),
                l(!0),
                c.current = !0
            }
            ), [v])
              , p = r.useCallback((function() {
                c.current = !1,
                s.current || d()
            }
            ), [d, s])
              , f = r.useCallback((function() {
                c.current || (l(!0),
                d())
            }
            ), [d]);
            return {
                trackerVisible: i,
                onTrackerDragStart: m,
                onTrackerDragStop: p,
                onTrackerMouseEnter: r.useCallback((function() {
                    v(),
                    s.current = !0,
                    l(!0)
                }
                ), [v]),
                onTrackerMouseLeave: r.useCallback((function() {
                    f(),
                    s.current = !1
                }
                ), [f]),
                onTargetScroll: r.useCallback((function() {
                    f()
                }
                ), [f])
            }
        }
    }
    ,
    836931: (e,t,a)=>{
        "use strict";
        a.d(t, {
            CustomSelect: ()=>I
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(191963)
          , s = (a(688421),
        a(667294))
          , c = a(962557)
          , u = a(324285)
          , d = a(428253)
          , v = a(489026)
          , m = a(221501)
          , p = a(214542)
          , f = a(256631)
          , h = a(644029)
          , g = a(371103)
          , b = a(596002)
          , k = a(91742)
          , C = a(383567)
          , _ = a(751467)
          , E = a(894872)
          , y = a(867782)
          , S = (0,
        n._)({
            none: "vkuiCustomSelect--sizeY-none"
        }, v.SizeType.COMPACT, "vkuiCustomSelect--sizeY-compact")
          , N = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
            return t >= e.length - 1 ? -1 : e.findIndex((function(e, a) {
                return a > t && !e.disabled
            }
            ))
        }
          , w = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.length
              , a = -1;
            if (t <= 0)
                return a;
            for (var n = t - 1; n >= 0; n--) {
                if (!e[n].disabled) {
                    a = n;
                    break
                }
            }
            return a
        };
        (0,
        h.warnOnce)("CustomSelect");
        function R(e) {
            e.option;
            var t = (0,
            i._)(e, ["option"]);
            return s.createElement(b.CustomSelectOption, t)
        }
        var A = function(e) {
            e.preventDefault()
        };
        function M(e, t, a) {
            return a && "" === t ? -1 : null !== (n = e.findIndex((function(e) {
                return t = "number" == typeof e.value ? Number(t) : t,
                e.value === t
            }
            ))) && void 0 !== n ? n : -1;
            var n
        }
        var T = function(e, t, a) {
            return "function" == typeof a ? e.filter((function(e) {
                return a(t, e)
            }
            )) : e
        }
          , P = [];
        function I(e) {
            var t, a = (0,
            l._)(s.useState(!1), 2), n = a[0], h = a[1], b = e.before, I = e.name, D = e.className, L = e.getRef, x = e.getRootRef, O = e.popupDirection, B = e.style, z = e.onChange, F = (e.children,
            e.onInputChange), H = e.renderDropdown, V = e.onOpen, Y = e.onClose, W = e.fetching, q = e.forceDropdownPortal, G = e.selectType, U = void 0 === G ? "default" : G, X = e.autoHideScrollbar, K = e.autoHideScrollbarDelay, j = e.searchable, Q = void 0 !== j && j, J = e.renderOption, Z = void 0 === J ? R : J, $ = e.options, ee = void 0 === $ ? P : $, te = e.emptyText, ae = void 0 === te ? "Ничего не найдено" : te, ne = e.filterFn, re = void 0 === ne ? m.defaultFilterFn : ne, oe = e.icon, ie = e.ClearButton, le = void 0 === ie ? y.CustomSelectClearButton : ie, se = e.allowClearButton, ce = void 0 !== se && se, ue = e.dropdownOffsetDistance, de = void 0 === ue ? 0 : ue, ve = e.fixDropdownWidth, me = void 0 === ve || ve, pe = (0,
            i._)(e, ["before", "name", "className", "getRef", "getRootRef", "popupDirection", "style", "onChange", "children", "onInputChange", "renderDropdown", "onOpen", "onClose", "fetching", "forceDropdownPortal", "selectType", "autoHideScrollbar", "autoHideScrollbarDelay", "searchable", "renderOption", "options", "emptyText", "filterFn", "icon", "ClearButton", "allowClearButton", "dropdownOffsetDistance", "fixDropdownWidth"]);
            var fe, he, ge, be = (0,
            u.useAdaptivity)().sizeY, ke = void 0 === be ? "none" : be, Ce = s.useRef(null), _e = (0,
            d.useExternRef)(Ce, x), Ee = s.useRef(null), ye = (0,
            d.useExternRef)(L), Se = (0,
            l._)(s.useState(-1), 2), Ne = Se[0], we = Se[1], Re = (0,
            l._)(s.useState(void 0 !== e.value), 2), Ae = Re[0], Me = Re[1], Te = (0,
            l._)(s.useState(""), 2), Pe = Te[0], Ie = Te[1], De = (0,
            l._)(s.useState((function() {
                return null !== (he = null !== (fe = e.value) && void 0 !== fe ? fe : e.defaultValue) && void 0 !== he ? he : ce ? "" : void 0
            }
            )), 2), Le = De[0], xe = De[1], Oe = (0,
            l._)(s.useState(""), 2), Be = Oe[0], ze = Oe[1], Fe = (0,
            l._)(s.useState(void 0), 2), He = Fe[0], Ve = Fe[1], Ye = (0,
            l._)(s.useState(ee), 2), We = Ye[0], qe = Ye[1], Ge = (0,
            l._)(s.useState(M(ee, null !== (ge = e.value) && void 0 !== ge ? ge : e.defaultValue, ce)), 2), Ue = Ge[0], Xe = Ge[1];
            s.useEffect((function() {
                var t;
                Me(void 0 !== e.value),
                xe((function(a) {
                    return null !== (t = e.value) && void 0 !== t ? t : a
                }
                ))
            }
            ), [e.value]),
            (0,
            p.useIsomorphicLayoutEffect)((function() {
                if (We.some((function(e) {
                    var t = e.value;
                    return Le === t
                }
                )) || ce && "" === Le) {
                    var e, t = new Event("change",{
                        bubbles: !0
                    });
                    null === (e = ye.current) || void 0 === e || e.dispatchEvent(t)
                }
            }
            ), [Le]);
            var Ke = s.useMemo((function() {
                return We.length ? void 0 !== Ue ? We[Ue] : void 0 : null
            }
            ), [We, Ue])
              , je = s.useMemo((function() {
                var e;
                return n && 0 === de && ((null === (e = He) || void 0 === e ? void 0 : e.includes("top")) ? "vkuiCustomSelect--pop-up" : "vkuiCustomSelect--pop-down") || void 0
            }
            ), [de, n, He])
              , Qe = s.useCallback((function() {
                ze("")
            }
            ), [])
              , Je = s.useCallback((function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , a = Ee.current
                  , n = a ? a.children[e] : null;
                if (n && a) {
                    var r = a.offsetHeight
                      , o = a.scrollTop
                      , i = n.offsetTop
                      , l = n.offsetHeight;
                    t ? a.scrollTop = i - r / 2 + l / 2 : i + l > r + o ? a.scrollTop = i - r + l : i < o && (a.scrollTop = i)
                }
            }
            ), [])
              , Ze = s.useCallback((function(e) {
                var t;
                return e >= 0 && e < (null !== (t = We.length) && void 0 !== t ? t : 0)
            }
            ), [We.length])
              , $e = s.useCallback((function(e) {
                var t, a, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                void 0 === e || e < 0 || e > (null !== (a = We.length) && void 0 !== a ? a : 0) - 1 || ((null === (t = We[e]) || void 0 === t ? void 0 : t.disabled) || (n && Je(e),
                we((function(t) {
                    return t !== e ? e : t
                }
                ))))
            }
            ), [We, Je])
              , et = s.useCallback((function() {
                return null !== Ee.current
            }
            ), [])
              , tt = s.useCallback((function(e) {
                Ee.current = e,
                e && void 0 !== Ue && Ze(Ue) && Je(Ue, !0)
            }
            ), [Ze, Je, Ue])
              , at = s.useCallback((function(e) {
                var t = Be + e
                  , a = We.findIndex((function(e) {
                    return (0,
                    f.getTitleFromChildren)(e.label).toLowerCase().includes(t)
                }
                ));
                void 0 !== a && a > -1 && $e(a),
                ze(t)
            }
            ), [$e, Be, We])
              , nt = s.useCallback((function() {
                var e;
                Qe(),
                Ie(""),
                h(!1),
                we(-1),
                null === (e = Y) || void 0 === e || e()
            }
            ), [Y, Qe])
              , rt = s.useCallback((function(t) {
                var a, n, r = We[t];
                if (xe(null === (a = r) || void 0 === a ? void 0 : a.value),
                nt(),
                Ae && e.value !== Le && Le === (null === (n = r) || void 0 === n ? void 0 : n.value)) {
                    var o, i = new Event("change",{
                        bubbles: !0
                    });
                    null === (o = ye.current) || void 0 === o || o.dispatchEvent(i)
                }
            }
            ), [nt, We, ye, Ae, e.value, Le])
              , ot = s.useCallback((function() {
                void 0 !== Ne && Ze(Ne) && rt(Ne)
            }
            ), [Ne, Ze, rt])
              , it = s.useCallback((function() {
                h(!0),
                we(Ue),
                "function" == typeof V && V()
            }
            ), [V, Ue])
              , lt = s.useCallback((function() {
                var e;
                nt();
                var t = new Event("blur");
                null === (e = ye.current) || void 0 === e || e.dispatchEvent(t)
            }
            ), [nt, ye])
              , st = s.useCallback((function() {
                we(-1)
            }
            ), [])
              , ct = s.useCallback((function() {
                var e, t = new Event("focus");
                null === (e = ye.current) || void 0 === e || e.dispatchEvent(t)
            }
            ), [ye])
              , ut = s.useCallback((function() {
                n ? nt() : it()
            }
            ), [nt, it, n])
              , dt = s.useMemo((function() {
                return (0,
                f.debounce)(Qe, 1e3)
            }
            ), [Qe])
              , vt = s.useCallback((function(e) {
                var t = Ne;
                if ("next" === e) {
                    var a = N(We, t);
                    t = -1 === a ? N(We) : a
                } else if ("prev" === e) {
                    var n = w(We, t);
                    t = -1 === n ? w(We) : n
                }
                $e(t)
            }
            ), [$e, Ne, We]);
            s.useEffect((function() {
                var t, a, n = null !== (a = null !== (t = e.value) && void 0 !== t ? t : Le) && void 0 !== a ? a : e.defaultValue, r = Q && void 0 !== Pe ? T(ee, Pe, re) : ee;
                qe(r),
                Xe(M(r, n, ce))
            }
            ), [re, Pe, Le, ee, e.defaultValue, e.value, Q, ce]);
            var mt = s.useCallback((function(e) {
                var t;
                (null === (t = Ee.current) || void 0 === t ? void 0 : t.contains(e.target)) && e.preventDefault()
            }
            ), [])
              , pt = s.useCallback((function(e) {
                switch (["ArrowUp", "ArrowDown", "Escape", "Enter"].includes(e.key) && et() && e.preventDefault(),
                e.key) {
                case "ArrowUp":
                    et() && vt("prev");
                    break;
                case "ArrowDown":
                    et() && vt("next");
                    break;
                case "Escape":
                    nt();
                    break;
                case "Enter":
                    et() && ot()
                }
            }
            ), [et, nt, vt, ot])
              , ft = s.useCallback((function(e) {
                if (F) {
                    var t = F(e, ee);
                    t && (qe(t),
                    Xe(M(t, Le, ce)))
                } else {
                    var a = T(ee, e.target.value, re);
                    qe(a),
                    Xe(M(a, Le, ce))
                }
                Ie(e.target.value)
            }
            ), [re, Le, F, ee, ce])
              , ht = s.useCallback((function(e) {
                if (1 !== e.key.length || " " === e.key)
                    switch (["ArrowUp", "ArrowDown", "Escape", "Enter"].includes(e.key) && et() && e.preventDefault(),
                    e.key) {
                    case "ArrowUp":
                        n ? et() && vt("prev") : it();
                        break;
                    case "ArrowDown":
                        n ? et() && vt("next") : it();
                        break;
                    case "Escape":
                        nt();
                        break;
                    case "Enter":
                    case "Spacebar":
                    case " ":
                        n ? et() && ot() : it()
                    }
                else
                    at(e.key)
            }
            ), [et, nt, vt, at, it, n, ot])
              , gt = s.useCallback((function(e) {
                var t, a = Array.prototype.indexOf.call(null === (t = e.currentTarget.parentNode) || void 0 === t ? void 0 : t.children, e.currentTarget), n = We[a];
                n && !n.disabled && rt(a)
            }
            ), [We, rt])
              , bt = s.useCallback((function(e) {
                var t;
                $e(Array.prototype.indexOf.call(null === (t = e.currentTarget.parentNode) || void 0 === t ? void 0 : t.children, e.currentTarget), !1)
            }
            ), [$e])
              , kt = s.useCallback((function(e, t) {
                var a = t === Ne
                  , n = t === Ue;
                return s.createElement(s.Fragment, {
                    key: "".concat(e.value)
                }, Z({
                    option: e,
                    hovered: a,
                    children: e.label,
                    selected: n,
                    disabled: e.disabled,
                    onClick: gt,
                    onMouseDown: A,
                    onMouseOver: bt
                }))
            }
            ), [Ne, gt, bt, Z, Ue])
              , Ct = s.useMemo((function() {
                var e, t = (null === (e = We) || void 0 === e ? void 0 : e.length) > 0 ? We.map(kt) : s.createElement(E.Footnote, {
                    className: "vkuiCustomSelect__empty"
                }, ae);
                return "function" == typeof H ? H({
                    defaultDropdownContent: t
                }) : t
            }
            ), [ae, We, H, kt])
              , _t = Ae && "" !== e.value
              , Et = ce && !n && (_t || !Ae && "" !== Le)
              , yt = s.useMemo((function() {
                return Et ? s.createElement(le, {
                    className: void 0 === oe ? "vkuiCustomSelect--clear-icon" : void 0,
                    onClick: function() {
                        return xe("")
                    }
                }) : null
            }
            ), [Et, le, oe])
              , St = s.useMemo((function() {
                return void 0 !== oe ? oe : s.createElement(k.DropdownIcon, {
                    className: Et ? "vkuiCustomSelect__dropdown-icon" : void 0,
                    opened: n
                })
            }
            ), [Et, oe, n])
              , Nt = (St || Et) && s.createElement(s.Fragment, null, yt, St);
            return s.createElement("label", {
                className: (0,
                c.classNames)("vkuiCustomSelect", ke !== v.SizeType.REGULAR && S[ke], D),
                style: B,
                ref: _e,
                onClick: mt
            }, n && Q ? s.createElement(C.Input, (0,
            o._)((0,
            r._)({}, pe), {
                autoFocus: !0,
                onBlur: lt,
                className: je,
                value: Pe,
                onKeyDown: pt,
                onChange: ft,
                onClick: e.onClick,
                before: b,
                after: Nt,
                mode: (0,
                m.getFormFieldModeFromSelectType)(U)
            })) : s.createElement(_.SelectMimicry, (0,
            o._)((0,
            r._)({}, pe), {
                "aria-hidden": !0,
                onClick: ut,
                onKeyDown: ht,
                onKeyUp: dt,
                onFocus: ct,
                onBlur: lt,
                className: je,
                before: b,
                after: Nt,
                selectType: U
            }), null === (t = Ke) || void 0 === t ? void 0 : t.label), s.createElement("select", {
                ref: ye,
                name: I,
                onChange: function(e) {
                    var t, a = M(We, e.currentTarget.value, ce);
                    Ue !== a && (Ae || Xe(a),
                    null === (t = z) || void 0 === t || t(e))
                },
                onBlur: e.onBlur,
                onFocus: e.onFocus,
                onClick: e.onClick,
                value: Le,
                "aria-hidden": !0,
                className: "vkuiCustomSelect__control"
            }, ce && s.createElement("option", {
                key: "",
                value: ""
            }), ee.map((function(e) {
                return s.createElement("option", {
                    key: "".concat(e.value),
                    value: e.value
                })
            }
            ))), n && s.createElement(g.CustomSelectDropdown, {
                targetRef: Ce,
                placement: O,
                scrollBoxRef: tt,
                onPlacementChange: Ve,
                onMouseLeave: st,
                fetching: W,
                offsetDistance: de,
                sameWidth: me,
                forcePortal: q,
                autoHideScrollbar: X,
                autoHideScrollbarDelay: K
            }, Ct))
        }
    }
    ,
    867782: (e,t,a)=>{
        "use strict";
        a.d(t, {
            CustomSelectClearButton: ()=>l
        });
        var n = a(667294)
          , r = a(790932)
          , o = a(256631)
          , i = a(600245)
          , l = function(e) {
            var t = e.className
              , a = e.onClick;
            return n.createElement(i.IconButton, {
                className: t,
                Component: "div",
                onClick: function(e) {
                    (0,
                    o.stopPropagation)(e),
                    a()
                },
                "aria-label": "Очистить поле",
                onKeyDown: o.stopPropagation,
                role: "button",
                activeMode: "opacity",
                hoverMode: "opacity"
            }, n.createElement(r.Icon16Cancel, null))
        }
    }
    ,
    371103: (e,t,a)=>{
        "use strict";
        a.d(t, {
            CustomSelectDropdown: ()=>v
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(191963)
          , i = a(667294)
          , l = a(962557)
          , s = a(803265)
          , c = a(59214)
          , u = a(474353)
          , d = function(e) {
            var t;
            return null === (t = e) || void 0 === t ? void 0 : t.includes("top")
        }
          , v = function(e) {
            var t = e.children
              , a = e.targetRef
              , v = e.scrollBoxRef
              , m = e.placement
              , p = e.fetching
              , f = e.onPlacementChange
              , h = e.offsetDistance
              , g = void 0 === h ? 0 : h
              , b = e.sameWidth
              , k = void 0 === b || b
              , C = e.forcePortal
              , _ = void 0 === C || C
              , E = e.autoHideScrollbar
              , y = e.autoHideScrollbarDelay
              , S = e.className
              , N = (0,
            r._)(e, ["children", "targetRef", "scrollBoxRef", "placement", "fetching", "onPlacementChange", "offsetDistance", "sameWidth", "forcePortal", "autoHideScrollbar", "autoHideScrollbarDelay", "className"])
              , w = (0,
            o._)(i.useState((function() {
                return d(m)
            }
            )), 2)
              , R = w[0]
              , A = w[1]
              , M = i.useCallback((function(e) {
                var t, a = e.placement;
                A(d(a)),
                null === (t = f) || void 0 === t || t(a)
            }
            ), [f, A]);
            return i.createElement(c.Popper, (0,
            n._)({
                targetRef: a,
                offsetDistance: g,
                sameWidth: k,
                onPlacementChange: M,
                placement: m,
                className: (0,
                l.classNames)("vkuiCustomSelectDropdown", "vkuiInternalCustomSelectDropdown", 0 === g && (R ? "vkuiCustomSelectDropdown--top" : "vkuiCustomSelectDropdown--bottom"), k && (0,
                l.classNames)("vkuiCustomSelectDropdown--wide", "vkuiInternalCustomSelectDropdown--wide"), S),
                forcePortal: _,
                autoUpdateOnTargetResize: !0
            }, N), i.createElement(s.CustomScrollView, {
                boxRef: v,
                className: "vkuiCustomSelectDropdown__in",
                autoHideScrollbar: E,
                autoHideScrollbarDelay: y
            }, p ? i.createElement("div", {
                className: "vkuiCustomSelectDropdown__fetching"
            }, i.createElement(u.Spinner, {
                size: "small"
            })) : t))
        }
    }
    ,
    596002: (e,t,a)=>{
        "use strict";
        a.d(t, {
            CustomSelectOption: ()=>h
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(667294)
          , s = a(519979)
          , c = a(962557)
          , u = a(324285)
          , d = a(489026)
          , v = a(644029)
          , m = a(894872)
          , p = a(390574)
          , f = (0,
        n._)({
            none: "vkuiCustomSelectOption--sizeY-none"
        }, d.SizeType.REGULAR, "vkuiCustomSelectOption--sizeY-regular")
          , h = ((0,
        v.warnOnce)("CustomSelectOption"),
        function(e) {
            var t = e.children
              , a = e.hierarchy
              , n = void 0 === a ? 0 : a
              , v = e.hovered
              , h = e.selected
              , g = e.before
              , b = e.after
              , k = (e.option,
            e.description)
              , C = e.disabled
              , _ = e.style
              , E = e.className
              , y = e.onClick
              , S = (0,
            i._)(e, ["children", "hierarchy", "hovered", "selected", "before", "after", "option", "description", "disabled", "style", "className", "onClick"])
              , N = "string" == typeof t ? t : void 0
              , w = (0,
            u.useAdaptivity)().sizeY
              , R = void 0 === w ? "none" : w
              , A = l.useMemo((function() {
                return n > 0 ? (0,
                r._)({
                    "--vkui_internal--custom_select_option_hierarchy_level": n
                }, _) : _
            }
            ), [n, _]);
            return l.createElement(p.Paragraph, (0,
            o._)((0,
            r._)({}, S), {
                onClick: C ? void 0 : y,
                Component: "div",
                role: "option",
                title: N,
                "aria-disabled": C,
                "aria-selected": h,
                className: (0,
                c.classNames)("vkuiCustomSelectOption", R !== d.SizeType.COMPACT && f[R], v && !C && "vkuiCustomSelectOption--hover", C && "vkuiCustomSelectOption--disabled", n > 0 && "vkuiCustomSelectOption--hierarchy", E),
                style: A
            }), (0,
            c.hasReactNode)(g) && l.createElement("div", {
                className: "vkuiCustomSelectOption__before"
            }, g), l.createElement("div", {
                className: "vkuiCustomSelectOption__main"
            }, l.createElement("div", {
                className: "vkuiCustomSelectOption__children"
            }, t), (0,
            c.hasReactNode)(k) && l.createElement(m.Footnote, {
                className: "vkuiCustomSelectOption__description"
            }, k)), l.createElement("div", {
                className: "vkuiCustomSelectOption__after"
            }, (0,
            c.hasReactNode)(b) && l.createElement("div", null, b), h && l.createElement(s.Icon16Done, {
                className: "vkuiCustomSelectOption__selectedIcon"
            })))
        }
        )
    }
    ,
    419514: (e,t,a)=>{
        "use strict";
        a.d(t, {
            DateInput: ()=>w
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(158339)
          , i = a(667294)
          , l = a(858016)
          , s = a(429190)
          , c = a(962557)
          , u = a(324285)
          , d = a(646258)
          , v = a(428253)
          , m = a(489026)
          , p = a(719007)
          , f = a(259007)
          , h = a(72281)
          , g = a(937188)
          , b = a(600245)
          , k = a(387057)
          , C = a(68089)
          , _ = a(59214)
          , E = a(754259)
          , y = (0,
        n._)({
            none: "vkuiDateInput--sizeY-none"
        }, m.SizeType.COMPACT, "vkuiDateInput--sizeY-compact")
          , S = function(e) {
            var t = 2
              , a = 1
              , n = 0;
            switch (e) {
            case 0:
                n = 31;
                break;
            case 1:
                n = 12;
                break;
            case 2:
                n = 2100,
                a = 1900,
                t = 4;
                break;
            case 3:
                n = 23;
                break;
            case 4:
                n = 59
            }
            return {
                length: t,
                min: a,
                max: n
            }
        }
          , N = function(e) {
            var t = ["", "", "", "", ""];
            return e && (t[0] = String(e.getDate()).padStart(2, "0"),
            t[1] = String(e.getMonth() + 1).padStart(2, "0"),
            t[2] = String(e.getFullYear()).padStart(4, "0"),
            t[3] = String(e.getHours()).padStart(2, "0"),
            t[4] = String(e.getMinutes()).padStart(2, "0")),
            t
        }
          , w = function(e) {
            var t = e.enableTime
              , a = e.shouldDisableDate
              , n = e.disableFuture
              , w = e.disablePast
              , R = e.value
              , A = e.onChange
              , M = e.calendarPlacement
              , T = void 0 === M ? "bottom-start" : M
              , P = e.style
              , I = e.className
              , D = e.doneButtonText
              , L = e.closeOnChange
              , x = void 0 === L || L
              , O = e.disablePickers
              , B = e.getRootRef
              , z = e.name
              , F = e.autoFocus
              , H = e.disabled
              , V = e.onClick
              , Y = e.onFocus
              , W = e.prevMonthAriaLabel
              , q = e.nextMonthAriaLabel
              , G = e.showNeighboringMonth
              , U = e.size
              , X = e.changeMonthAriaLabel
              , K = void 0 === X ? "Изменить месяц" : X
              , j = e.changeYearAriaLabel
              , Q = void 0 === j ? "Изменить год" : j
              , J = e.changeDayAriaLabel
              , Z = void 0 === J ? "Изменить день" : J
              , $ = e.changeHoursAriaLabel
              , ee = void 0 === $ ? "Изменить час" : $
              , te = e.changeMinutesAriaLabel
              , ae = void 0 === te ? "Изменить минуту" : te
              , ne = e.clearFieldAriaLabel
              , re = void 0 === ne ? "Очистить поле" : ne
              , oe = e.showCalendarAriaLabel
              , ie = void 0 === oe ? "Показать календарь" : oe
              , le = e.viewDate
              , se = e.onHeaderChange
              , ce = e.onNextMonth
              , ue = e.onPrevMonth
              , de = e.prevMonthIcon
              , ve = e.nextMonthIcon
              , me = e.disableCalendar
              , pe = void 0 !== me && me
              , fe = (0,
            o._)(e, ["enableTime", "shouldDisableDate", "disableFuture", "disablePast", "value", "onChange", "calendarPlacement", "style", "className", "doneButtonText", "closeOnChange", "disablePickers", "getRootRef", "name", "autoFocus", "disabled", "onClick", "onFocus", "prevMonthAriaLabel", "nextMonthAriaLabel", "showNeighboringMonth", "size", "changeMonthAriaLabel", "changeYearAriaLabel", "changeDayAriaLabel", "changeHoursAriaLabel", "changeMinutesAriaLabel", "clearFieldAriaLabel", "showCalendarAriaLabel", "viewDate", "onHeaderChange", "onNextMonth", "onPrevMonth", "prevMonthIcon", "nextMonthIcon", "disableCalendar"])
              , he = i.useRef(null)
              , ge = i.useRef(null)
              , be = i.useRef(null)
              , ke = i.useRef(null)
              , Ce = i.useRef(null)
              , _e = t ? 4 : 2
              , Ee = i.useCallback((function(e) {
                for (var a = 0; a <= _e; a += 1)
                    if (e[a].length < S(a).length)
                        return;
                var n, r = "".concat(e[0], ".").concat(e[1], ".").concat(e[2]), o = "DD.MM.YYYY";
                (t && (r += " ".concat(e[3], ":").concat(e[4]),
                o += " HH:mm"),
                (0,
                f.isMatch)(r, o)) && (null === (n = A) || void 0 === n || n((0,
                f.parse)(r, o, null != R ? R : new Date)))
            }
            ), [t, _e, A, R])
              , ye = i.useMemo((function() {
                return [he, ge, be, ke, Ce]
            }
            ), [he, ge, be, ke, Ce])
              , Se = (0,
            d.useDateInput)({
                maxElement: _e,
                refs: ye,
                autoFocus: F,
                disabled: H,
                elementsConfig: S,
                onChange: A,
                onInternalValueChange: Ee,
                getInternalValue: N,
                value: R
            })
              , Ne = Se.rootRef
              , we = Se.calendarRef
              , Re = Se.open
              , Ae = Se.openCalendar
              , Me = Se.closeCalendar
              , Te = Se.internalValue
              , Pe = Se.handleKeyDown
              , Ie = Se.setFocusedElement
              , De = Se.handleFieldEnter
              , Le = Se.clear
              , xe = Se.removeFocusFromField
              , Oe = (0,
            u.useAdaptivity)().sizeY
              , Be = void 0 === Oe ? "none" : Oe
              , ze = (0,
            v.useExternRef)(Ne, B)
              , Fe = i.useCallback((function(e) {
                var a;
                null === (a = A) || void 0 === a || a(e),
                x && !t && xe()
            }
            ), [A, xe, x, t]);
            return i.createElement(g.FormField, (0,
            r._)({
                style: P,
                className: (0,
                c.classNames)(Be !== m.SizeType.REGULAR && y[Be], I),
                getRootRef: ze,
                after: R ? i.createElement(b.IconButton, {
                    hoverMode: "opacity",
                    "aria-label": re,
                    onClick: Le
                }, i.createElement(l.Icon16Clear, null)) : i.createElement(b.IconButton, {
                    hoverMode: "opacity",
                    "aria-label": ie,
                    onClick: Ae
                }, i.createElement(s.Icon20CalendarOutline, null)),
                disabled: H,
                onClick: (0,
                p.callMultiple)(De, V),
                onFocus: (0,
                p.callMultiple)(De, Y)
            }, fe), i.createElement("input", {
                type: "hidden",
                name: z,
                value: R ? (0,
                f.format)(R, t ? "DD.MM.YYYYTHH:mm" : "DD.MM.YYYY") : ""
            }), i.createElement(E.Text, {
                className: "vkuiDateInput__input",
                onKeyDown: Pe
            }, i.createElement(k.InputLike, {
                length: 2,
                getRootRef: he,
                index: 0,
                onElementSelect: Ie,
                value: Te[0],
                "aria-label": Z
            }), i.createElement(C.InputLikeDivider, null, "."), i.createElement(k.InputLike, {
                length: 2,
                getRootRef: ge,
                index: 1,
                onElementSelect: Ie,
                value: Te[1],
                "aria-label": K
            }), i.createElement(C.InputLikeDivider, null, "."), i.createElement(k.InputLike, {
                length: 4,
                getRootRef: be,
                index: 2,
                onElementSelect: Ie,
                value: Te[2],
                "aria-label": Q
            }), t && i.createElement(i.Fragment, null, i.createElement(C.InputLikeDivider, {
                className: "vkuiDateInput__input--time-divider"
            }, " "), i.createElement(k.InputLike, {
                length: 2,
                getRootRef: ke,
                index: 3,
                onElementSelect: Ie,
                value: Te[3],
                "aria-label": ee
            }), i.createElement(C.InputLikeDivider, null, ":"), i.createElement(k.InputLike, {
                length: 2,
                getRootRef: Ce,
                index: 4,
                onElementSelect: Ie,
                value: Te[4],
                "aria-label": ae
            }))), Re && !pe && i.createElement(_.Popper, {
                targetRef: Ne,
                offsetDistance: 8,
                placement: T
            }, i.createElement(h.Calendar, {
                value: R,
                onChange: Fe,
                enableTime: t,
                disablePast: w,
                disableFuture: n,
                shouldDisableDate: a,
                onClose: Me,
                getRootRef: we,
                doneButtonText: D,
                disablePickers: O,
                changeHoursAriaLabel: ee,
                changeMinutesAriaLabel: ae,
                prevMonthAriaLabel: W,
                nextMonthAriaLabel: q,
                changeMonthAriaLabel: K,
                changeYearAriaLabel: Q,
                changeDayAriaLabel: Z,
                showNeighboringMonth: G,
                size: U,
                viewDate: le,
                onHeaderChange: se,
                onNextMonth: ce,
                onPrevMonth: ue,
                prevMonthIcon: de,
                nextMonthIcon: ve
            })))
        }
    }
    ,
    14174: (e,t,a)=>{
        "use strict";
        a.d(t, {
            DateRangeInput: ()=>w
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(158339)
          , i = a(667294)
          , l = a(858016)
          , s = a(429190)
          , c = a(962557)
          , u = a(324285)
          , d = a(646258)
          , v = a(428253)
          , m = a(489026)
          , p = a(719007)
          , f = a(259007)
          , h = a(815609)
          , g = a(937188)
          , b = a(600245)
          , k = a(387057)
          , C = a(68089)
          , _ = a(59214)
          , E = a(754259)
          , y = (0,
        n._)({
            none: "vkuiDateRangeInput--sizeY-none"
        }, m.SizeType.COMPACT, "vkuiDateRangeInput--sizeY-compact")
          , S = function(e) {
            var t = 2
              , a = 1
              , n = 0;
            switch (e) {
            case 0:
            case 3:
                n = 31;
                break;
            case 1:
            case 4:
                n = 12;
                break;
            case 2:
            case 5:
                n = 2100,
                a = 1900,
                t = 4
            }
            return {
                length: t,
                min: a,
                max: n
            }
        }
          , N = function(e) {
            var t, a, n = ["", "", "", "", "", ""];
            return (null === (t = e) || void 0 === t ? void 0 : t[0]) && (n[0] = String(e[0].getDate()).padStart(2, "0"),
            n[1] = String(e[0].getMonth() + 1).padStart(2, "0"),
            n[2] = String(e[0].getFullYear()).padStart(4, "0")),
            (null === (a = e) || void 0 === a ? void 0 : a[1]) && (n[3] = String(e[1].getDate()).padStart(2, "0"),
            n[4] = String(e[1].getMonth() + 1).padStart(2, "0"),
            n[5] = String(e[1].getFullYear()).padStart(4, "0")),
            n
        }
          , w = function(e) {
            var t = e.shouldDisableDate
              , a = e.disableFuture
              , n = e.disablePast
              , w = e.value
              , R = e.onChange
              , A = e.calendarPlacement
              , M = void 0 === A ? "bottom-start" : A
              , T = e.style
              , P = e.className
              , I = e.closeOnChange
              , D = void 0 === I || I
              , L = e.disablePickers
              , x = e.getRootRef
              , O = e.name
              , B = e.autoFocus
              , z = e.disabled
              , F = e.onClick
              , H = e.onFocus
              , V = e.prevMonthAriaLabel
              , Y = e.nextMonthAriaLabel
              , W = e.changeDayAriaLabel
              , q = e.changeMonthAriaLabel
              , G = e.changeYearAriaLabel
              , U = e.changeStartDayAriaLabel
              , X = void 0 === U ? "Изменить день начала" : U
              , K = e.changeStartMonthAriaLabel
              , j = void 0 === K ? "Изменить месяц начала" : K
              , Q = e.changeStartYearAriaLabel
              , J = void 0 === Q ? "Изменить год начала" : Q
              , Z = e.changeEndDayAriaLabel
              , $ = void 0 === Z ? "Изменить день окончания" : Z
              , ee = e.changeEndMonthAriaLabel
              , te = void 0 === ee ? "Изменить месяц окончания" : ee
              , ae = e.changeEndYearAriaLabel
              , ne = void 0 === ae ? "Изменить год окончания" : ae
              , re = e.clearFieldAriaLabel
              , oe = void 0 === re ? "Очистить поле" : re
              , ie = e.showCalendarAriaLabel
              , le = void 0 === ie ? "Показать календарь" : ie
              , se = e.prevMonthIcon
              , ce = e.nextMonthIcon
              , ue = e.disableCalendar
              , de = void 0 !== ue && ue
              , ve = (0,
            o._)(e, ["shouldDisableDate", "disableFuture", "disablePast", "value", "onChange", "calendarPlacement", "style", "className", "closeOnChange", "disablePickers", "getRootRef", "name", "autoFocus", "disabled", "onClick", "onFocus", "prevMonthAriaLabel", "nextMonthAriaLabel", "changeDayAriaLabel", "changeMonthAriaLabel", "changeYearAriaLabel", "changeStartDayAriaLabel", "changeStartMonthAriaLabel", "changeStartYearAriaLabel", "changeEndDayAriaLabel", "changeEndMonthAriaLabel", "changeEndYearAriaLabel", "clearFieldAriaLabel", "showCalendarAriaLabel", "prevMonthIcon", "nextMonthIcon", "disableCalendar"])
              , me = i.useRef(null)
              , pe = i.useRef(null)
              , fe = i.useRef(null)
              , he = i.useRef(null)
              , ge = i.useRef(null)
              , be = i.useRef(null)
              , ke = i.useCallback((function(e) {
                for (var t, a, n = !0, r = !0, o = 0; o <= 2; o += 1)
                    e[o].length < S(o).length && (n = !1);
                for (var i = 3; i <= 5; i += 1)
                    e[i].length < S(i).length && (r = !1);
                var l = "".concat(e[0], ".").concat(e[1], ".").concat(e[2])
                  , s = "".concat(e[3], ".").concat(e[4], ".").concat(e[5])
                  , c = "DD.MM.YYYY";
                if ((0,
                f.isMatch)(l, c) || (n = !1),
                (0,
                f.isMatch)(s, c) || (r = !1),
                n || r) {
                    var u, d = Array.isArray(w), v = new Date, m = n ? (0,
                    f.parse)(l, c, d && (null === (t = w) || void 0 === t ? void 0 : t[0]) || v) : null, p = r ? (0,
                    f.parse)(s, c, d && (null === (a = w) || void 0 === a ? void 0 : a[1]) || v) : null;
                    if (m && p && (0,
                    f.isAfter)(p, m))
                        null === (u = R) || void 0 === u || u([m, p])
                }
            }
            ), [R, w])
              , Ce = i.useMemo((function() {
                return [me, pe, fe, he, ge, be]
            }
            ), [me, pe, fe, he, ge, be])
              , _e = (0,
            d.useDateInput)({
                maxElement: 5,
                refs: Ce,
                autoFocus: B,
                disabled: z,
                elementsConfig: S,
                onChange: R,
                onInternalValueChange: ke,
                getInternalValue: N,
                value: w
            })
              , Ee = _e.rootRef
              , ye = _e.calendarRef
              , Se = _e.open
              , Ne = _e.openCalendar
              , we = _e.closeCalendar
              , Re = _e.internalValue
              , Ae = _e.handleKeyDown
              , Me = _e.setFocusedElement
              , Te = _e.handleFieldEnter
              , Pe = _e.clear
              , Ie = _e.removeFocusFromField
              , De = (0,
            u.useAdaptivity)().sizeY
              , Le = void 0 === De ? "none" : De
              , xe = (0,
            v.useExternRef)(Ee, x)
              , Oe = i.useCallback((function(e) {
                var t, a, n;
                null === (t = R) || void 0 === t || t(e),
                D && (null === (a = e) || void 0 === a ? void 0 : a[1]) && e[1] !== (null === (n = w) || void 0 === n ? void 0 : n[1]) && Ie()
            }
            ), [R, D, w, Ie]);
            return i.createElement(g.FormField, (0,
            r._)({
                style: T,
                className: (0,
                c.classNames)(Le !== m.SizeType.REGULAR && y[Le], P),
                getRootRef: xe,
                after: w ? i.createElement(b.IconButton, {
                    hoverMode: "opacity",
                    "aria-label": oe,
                    onClick: Pe
                }, i.createElement(l.Icon16Clear, null)) : i.createElement(b.IconButton, {
                    hoverMode: "opacity",
                    "aria-label": le,
                    onClick: Ne
                }, i.createElement(s.Icon20CalendarOutline, null)),
                disabled: z,
                onClick: (0,
                p.callMultiple)(Te, F),
                onFocus: (0,
                p.callMultiple)(Te, H)
            }, ve), i.createElement("input", {
                type: "hidden",
                name: O,
                value: w ? "".concat(w[0] ? (0,
                f.format)(w[0], "DD.MM.YYYY") : "", " - ").concat(w[1] ? (0,
                f.format)(w[1], "DD.MM.YYYY") : "") : ""
            }), i.createElement(E.Text, {
                className: "vkuiDateInput__input",
                onKeyDown: Ae
            }, i.createElement(k.InputLike, {
                length: 2,
                getRootRef: me,
                index: 0,
                onElementSelect: Me,
                value: Re[0],
                "aria-label": X
            }), i.createElement(C.InputLikeDivider, null, "."), i.createElement(k.InputLike, {
                length: 2,
                getRootRef: pe,
                index: 1,
                onElementSelect: Me,
                value: Re[1],
                "aria-label": j
            }), i.createElement(C.InputLikeDivider, null, "."), i.createElement(k.InputLike, {
                length: 4,
                getRootRef: fe,
                index: 2,
                onElementSelect: Me,
                value: Re[2],
                "aria-label": J
            }), i.createElement(C.InputLikeDivider, null, " — "), i.createElement(k.InputLike, {
                length: 2,
                getRootRef: he,
                index: 3,
                onElementSelect: Me,
                value: Re[3],
                "aria-label": $
            }), i.createElement(C.InputLikeDivider, null, "."), i.createElement(k.InputLike, {
                length: 2,
                getRootRef: ge,
                index: 4,
                onElementSelect: Me,
                value: Re[4],
                "aria-label": te
            }), i.createElement(C.InputLikeDivider, null, "."), i.createElement(k.InputLike, {
                length: 4,
                getRootRef: be,
                index: 5,
                onElementSelect: Me,
                value: Re[5],
                "aria-label": ne
            })), Se && !de && i.createElement(_.Popper, {
                targetRef: Ee,
                offsetDistance: 8,
                placement: M
            }, i.createElement(h.CalendarRange, {
                value: w,
                onChange: Oe,
                disablePast: n,
                disableFuture: a,
                shouldDisableDate: t,
                onClose: we,
                getRootRef: ye,
                disablePickers: L,
                prevMonthAriaLabel: V,
                nextMonthAriaLabel: Y,
                changeMonthAriaLabel: q,
                changeYearAriaLabel: G,
                changeDayAriaLabel: W,
                prevMonthIcon: se,
                nextMonthIcon: ce
            })))
        }
    }
    ,
    457283: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Div: ()=>i
        });
        var n = a(772253)
          , r = a(667294)
          , o = a(523323)
          , i = function(e) {
            return r.createElement(o.RootComponent, (0,
            n._)({
                baseClassName: "vkuiDiv"
            }, e))
        }
    }
    ,
    91742: (e,t,a)=>{
        "use strict";
        a.d(t, {
            DropdownIcon: ()=>v
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(999944)
          , l = a(492496)
          , s = a(457561)
          , c = a(7685)
          , u = a(962557)
          , d = a(934977)
          , v = function(e) {
            var t = e.opened
              , a = void 0 !== t && t
              , v = e.className
              , m = (0,
            r._)(e, ["opened", "className"])
              , p = (0,
            d.useAdaptivityConditionalRender)().sizeY
              , f = a ? i.Icon20ChevronUp : l.Icon20Dropdown
              , h = a ? s.Icon24ChevronUp : c.Icon24ChevronDown;
            return o.createElement(o.Fragment, null, p.compact && o.createElement(f, (0,
            n._)({
                className: (0,
                u.classNames)(p.compact.className, v)
            }, m)), p.regular && o.createElement(h, (0,
            n._)({
                className: (0,
                u.classNames)(p.regular.className, v)
            }, m)))
        }
    }
    ,
    617224: (e,t,a)=>{
        "use strict";
        a.d(t, {
            File: ()=>c
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(658113)
          , s = a(516511)
          , c = function(e) {
            var t = e.children
              , a = void 0 === t ? "Выберите файл" : t
              , c = e.align
              , u = void 0 === c ? "left" : c
              , d = e.size
              , v = e.mode
              , m = e.stretched
              , p = e.before
              , f = e.after
              , h = e.loading
              , g = e.className
              , b = e.style
              , k = e.getRef
              , C = e.getRootRef
              , _ = e.appearance
              , E = (0,
            o._)(e, ["children", "align", "size", "mode", "stretched", "before", "after", "loading", "className", "style", "getRef", "getRootRef", "appearance"]);
            return i.createElement(l.Button, {
                Component: "label",
                align: u,
                className: g,
                stretched: m,
                mode: v,
                appearance: _,
                size: d,
                before: p,
                after: f,
                loading: h,
                style: b,
                getRootRef: C,
                disabled: E.disabled
            }, i.createElement(s.VisuallyHidden, (0,
            r._)((0,
            n._)({}, E), {
                Component: "input",
                type: "file",
                getRootRef: k
            })), a)
        }
    }
    ,
    781959: (e,t,a)=>{
        "use strict";
        a.d(t, {
            FixedLayout: ()=>g
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(667294)
          , s = a(962557)
          , c = a(428253)
          , u = a(283821)
          , d = a(119360)
          , v = a(181498)
          , m = a(108681)
          , p = a(199944)
          , f = a(566506)
          , h = {
            top: "vkuiFixedLayout--vertical-top",
            bottom: (0,
            s.classNames)("vkuiFixedLayout--vertical-bottom", "vkuiInternalFixedLayout--vertical-bottom")
        }
          , g = function(e) {
            var t = e.children
              , a = e.style
              , g = e.vertical
              , b = e.getRootRef
              , k = e.getRef
              , C = e.filled
              , _ = e.className
              , E = e.useParentWidth
              , y = (0,
            o._)(e, ["children", "style", "vertical", "getRootRef", "getRef", "filled", "className", "useParentWidth"])
              , S = (0,
            d.usePlatform)()
              , N = (0,
            c.useExternRef)(b, k)
              , w = (0,
            i._)(l.useState(void 0), 2)
              , R = w[0]
              , A = w[1]
              , M = (0,
            v.useDOM)().window
              , T = l.useContext(p.SplitColContext).colRef
              , P = function() {
                var e;
                if (E && N.current) {
                    var t, a = null === (t = N.current.parentElement) || void 0 === t ? void 0 : t.getBoundingClientRect().width;
                    A(a ? "".concat(a, "px") : void 0)
                } else if (null === (e = T) || void 0 === e ? void 0 : e.current) {
                    var n = getComputedStyle(T.current);
                    A("".concat(T.current.clientWidth - parseFloat(n.paddingLeft) - parseFloat(n.paddingRight), "px"))
                } else
                    A(void 0)
            };
            return l.useEffect(P, [T, S, N, E]),
            (0,
            u.useGlobalEventListener)(M, "resize", P),
            l.createElement(f.TooltipContainer, (0,
            r._)((0,
            n._)({}, y), {
                fixed: !0,
                ref: N,
                className: (0,
                s.classNames)("vkuiFixedLayout", S === m.Platform.IOS && "vkuiInternalFixedLayout--ios", C && "vkuiFixedLayout--filled", g && h[g], _),
                style: (0,
                r._)((0,
                n._)({}, a), {
                    width: R
                })
            }), t)
        }
    }
    ,
    843718: (e,t,a)=>{
        "use strict";
        a.d(t, {
            FocusTrap: ()=>f
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(191963)
          , i = a(667294)
          , l = a(428253)
          , s = a(283821)
          , c = a(855356)
          , u = a(304830)
          , d = a(181498)
          , v = a(214542)
          , m = a(338784)
          , p = u.FOCUSABLE_ELEMENTS_LIST.join()
          , f = function(e) {
            var t = e.Component
              , a = void 0 === t ? "div" : t
              , f = e.onClose
              , h = e.restoreFocus
              , g = void 0 === h || h
              , b = e.timeout
              , k = void 0 === b ? 0 : b
              , C = e.getRootRef
              , _ = e.children
              , E = (0,
            r._)(e, ["Component", "onClose", "restoreFocus", "timeout", "getRootRef", "children"])
              , y = (0,
            l.useExternRef)(C)
              , S = (0,
            d.useDOM)()
              , N = S.document
              , w = S.window
              , R = (0,
            o._)(i.useState(null), 2)
              , A = R[0]
              , M = R[1]
              , T = (0,
            o._)(i.useState(null), 2)
              , P = T[0]
              , I = T[1]
              , D = i.useContext(m.AppRootContext).keyboardInput
              , L = (0,
            c.useTimeout)((function() {
                var e, t;
                D && !(null === (e = y.current) || void 0 === e ? void 0 : e.contains(N.activeElement)) && (null === (t = A) || void 0 === t ? void 0 : t.length) && A[0].focus()
            }
            ), k);
            (0,
            v.useIsomorphicLayoutEffect)((function() {
                L.set()
            }
            ), []),
            (0,
            v.useIsomorphicLayoutEffect)((function() {
                if (y.current) {
                    var e = [];
                    Array.prototype.forEach.call(y.current.querySelectorAll(p), (function(t) {
                        var a = w.getComputedStyle(t)
                          , n = a.display
                          , r = a.visibility;
                        "none" !== n && "hidden" !== r && e.push(t)
                    }
                    )),
                    0 === e.length && e.push(y.current),
                    M(e)
                }
            }
            ), [_]);
            var x = (0,
            c.useTimeout)((function() {
                P && P.focus()
            }
            ), k);
            (0,
            v.useIsomorphicLayoutEffect)((function() {
                if (g && N.activeElement)
                    return I(N.activeElement),
                    function() {
                        x.set()
                    }
            }
            ), [g]);
            return (0,
            s.useGlobalEventListener)(N, "keydown", (function(e) {
                var t;
                if ((0,
                u.pressedKey)(e) === u.Keys.TAB && (null === (t = A) || void 0 === t ? void 0 : t.length)) {
                    var a = A.length - 1
                      , n = A.findIndex((function(t) {
                        return t === e.target
                    }
                    ))
                      , r = -1 === n || n === a && !e.shiftKey;
                    if (r || 0 === n && e.shiftKey) {
                        e.preventDefault();
                        var o = A[r ? 0 : a];
                        return o !== N.activeElement && o.focus(),
                        !1
                    }
                }
                return f && (0,
                u.pressedKey)(e) === u.Keys.ESCAPE && f(),
                !0
            }
            ), {
                capture: !0
            }),
            i.createElement(a, (0,
            n._)({
                tabIndex: -1,
                ref: y
            }, E), _)
        }
    }
    ,
    266917: (e,t,a)=>{
        "use strict";
        a.d(t, {
            FocusVisible: ()=>u
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(523323)
          , c = {
            inside: "vkuiFocusVisible--mode-inside",
            outside: "vkuiFocusVisible--mode-outside",
            outline: "vkuiFocusVisible--mode-outline"
        }
          , u = function(e) {
            var t = e.visible
              , a = e.mode
              , u = e.thin
              , d = (0,
            o._)(e, ["visible", "mode", "thin"]);
            return i.createElement(s.RootComponent, (0,
            r._)((0,
            n._)({}, d), {
                "aria-hidden": !0,
                baseClassName: (0,
                l.classNames)("vkuiFocusVisible", t && "vkuiFocusVisible--visible", u && "vkuiFocusVisible--thin", c[a])
            }))
        }
    }
    ,
    462926: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Footer: ()=>c
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(894872)
          , c = function(e) {
            var t = e.children
              , a = e.className
              , c = (0,
            o._)(e, ["children", "className"]);
            return i.createElement(s.Footnote, (0,
            r._)((0,
            n._)({
                Component: "footer"
            }, c), {
                className: (0,
                l.classNames)("vkuiFooter", a)
            }), t)
        }
    }
    ,
    937188: (e,t,a)=>{
        "use strict";
        a.d(t, {
            FormField: ()=>g
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(191963)
          , s = a(667294)
          , c = a(962557)
          , u = a(324285)
          , d = a(428253)
          , v = a(621232)
          , m = a(489026)
          , p = a(266917)
          , f = (0,
        n._)({
            none: "vkuiFormField--sizeY-none"
        }, m.SizeType.COMPACT, "vkuiFormField--sizeY-compact")
          , h = {
            error: "vkuiFormField--status-error",
            valid: "vkuiFormField--status-valid"
        }
          , g = function(e) {
            var t = e.Component
              , a = void 0 === t ? "span" : t
              , n = e.status
              , g = void 0 === n ? "default" : n
              , b = e.children
              , k = e.getRootRef
              , C = e.before
              , _ = e.after
              , E = e.disabled
              , y = e.mode
              , S = void 0 === y ? "default" : y
              , N = e.className
              , w = (0,
            i._)(e, ["Component", "status", "children", "getRootRef", "before", "after", "disabled", "mode", "className"])
              , R = (0,
            d.useExternRef)(k)
              , A = (0,
            v.useFocusWithin)(R)
              , M = (0,
            u.useAdaptivity)().sizeY
              , T = void 0 === M ? "none" : M
              , P = (0,
            l._)(s.useState(!1), 2)
              , I = P[0]
              , D = P[1];
            return s.createElement(a, (0,
            o._)((0,
            r._)({}, w), {
                ref: R,
                onMouseEnter: function(e) {
                    e.stopPropagation(),
                    D(!0)
                },
                onMouseLeave: function(e) {
                    e.stopPropagation(),
                    D(!1)
                },
                className: (0,
                c.classNames)("vkuiFormField", "default" === S && "vkuiFormField--mode-default", "default" !== g && h[g], T !== m.SizeType.REGULAR && f[T], E && "vkuiFormField--disabled", !E && I && "vkuiFormField--hover", N)
            }), C && s.createElement("span", {
                className: "vkuiFormField__before"
            }, C), b, _ && s.createElement("span", {
                className: (0,
                c.classNames)("vkuiFormField__after", "vkuiInternalFormField__after")
            }, _), s.createElement("span", {
                "aria-hidden": !0,
                className: "vkuiFormField__border"
            }), s.createElement(p.FocusVisible, {
                thin: !0,
                visible: A,
                mode: "outline"
            }))
        }
    }
    ,
    18245: (e,t,a)=>{
        "use strict";
        a.d(t, {
            FormItem: ()=>b
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(667294)
          , s = a(962557)
          , c = a(324285)
          , u = a(428253)
          , d = a(489026)
          , v = a(594735)
          , m = a(523323)
          , p = a(894872)
          , f = a(243912)
          , h = (0,
        n._)({
            none: (0,
            s.classNames)("vkuiFormItem--sizeY-none", "vkuiInternalFormItem--sizeY-none")
        }, d.SizeType.COMPACT, (0,
        s.classNames)("vkuiFormItem--sizeY-compact", "vkuiInternalFormItem--sizeY-compact"))
          , g = {
            error: (0,
            s.classNames)("vkuiFormItem--status-error", "vkuiInternalFormItem--status-error"),
            valid: (0,
            s.classNames)("vkuiFormItem--status-valid", "vkuiInternalFormItem--status-valid")
        }
          , b = function(e) {
            var t = e.children
              , a = e.top
              , n = e.bottom
              , b = e.status
              , k = void 0 === b ? "default" : b
              , C = e.removable
              , _ = e.onRemove
              , E = void 0 === _ ? s.noop : _
              , y = e.removePlaceholder
              , S = void 0 === y ? "Удалить" : y
              , N = e.getRootRef
              , w = e.htmlFor
              , R = e.bottomId
              , A = e.noPadding
              , M = (0,
            i._)(e, ["children", "top", "bottom", "status", "removable", "onRemove", "removePlaceholder", "getRootRef", "htmlFor", "bottomId", "noPadding"])
              , T = (0,
            u.useExternRef)(N)
              , P = (0,
            c.useAdaptivity)().sizeY
              , I = void 0 === P ? "none" : P
              , D = l.createElement(l.Fragment, null, (0,
            s.hasReactNode)(a) && l.createElement(f.Subhead, {
                className: "vkuiFormItem__top",
                Component: w ? "label" : "h5",
                htmlFor: w
            }, a), t, (0,
            s.hasReactNode)(n) && l.createElement(p.Footnote, {
                className: "vkuiFormItem__bottom",
                id: R,
                role: "error" === k ? "alert" : void 0
            }, n));
            return l.createElement(m.RootComponent, (0,
            o._)((0,
            r._)({}, M), {
                getRootRef: T,
                baseClassName: (0,
                s.classNames)("vkuiFormItem", !A && "vkuiFormItem--withPadding", "vkuiInternalFormItem", "default" !== k && g[k], I !== d.SizeType.REGULAR && h[I], (0,
                s.hasReactNode)(a) && (0,
                s.classNames)("vkuiFormItem--withTop", "vkuiInternalFormItem--withTop"), C && (0,
                s.classNames)("vkuiFormItem--removable", "vkuiInternalFormItem--removable"))
            }), C ? l.createElement(v.Removable, {
                align: "start",
                onRemove: function(e) {
                    var t;
                    (null === (t = T) || void 0 === t ? void 0 : t.current) && E(e, T.current)
                },
                removePlaceholder: S,
                indent: "indent" === C
            }, l.createElement("div", {
                className: (0,
                s.classNames)("vkuiFormItem__removable", "vkuiInternalFormItem__removable")
            }, D)) : D)
        }
    }
    ,
    590106: (e,t,a)=>{
        "use strict";
        a.d(t, {
            FormLayout: ()=>c
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = function(e) {
            return e.preventDefault()
        }
          , c = function(e) {
            var t = e.children
              , a = e.Component
              , c = void 0 === a ? "form" : a
              , u = e.getRef
              , d = e.onSubmit
              , v = void 0 === d ? s : d
              , m = e.className
              , p = (0,
            o._)(e, ["children", "Component", "getRef", "onSubmit", "className"]);
            return i.createElement(c, (0,
            r._)((0,
            n._)({}, p), {
                className: (0,
                l.classNames)("vkuiFormLayout", m),
                onSubmit: v,
                ref: u
            }), t, "form" === c && i.createElement("input", {
                type: "submit",
                className: "vkuiFormLayout__submit",
                value: ""
            }))
        }
    }
    ,
    380762: (e,t,a)=>{
        "use strict";
        a.d(t, {
            FormLayoutGroup: ()=>p
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(324285)
          , c = a(428253)
          , u = a(489026)
          , d = a(594735)
          , v = a(523323)
          , m = (0,
        n._)({
            none: (0,
            l.classNames)("vkuiFormLayoutGroup--sizeY-none", "vkuiInternalFormLayoutGroup--sizeY-none")
        }, u.SizeType.COMPACT, (0,
        l.classNames)("vkuiFormLayoutGroup--sizeY-compact", "vkuiInternalFormLayoutGroup--sizeY-compact"))
          , p = function(e) {
            var t = e.children
              , a = e.mode
              , n = void 0 === a ? "vertical" : a
              , p = e.removable
              , f = e.segmented
              , h = e.removePlaceholder
              , g = void 0 === h ? "Удалить" : h
              , b = e.onRemove
              , k = void 0 === b ? l.noop : b
              , C = e.getRootRef
              , _ = (0,
            o._)(e, ["children", "mode", "removable", "segmented", "removePlaceholder", "onRemove", "getRootRef"])
              , E = (0,
            s.useAdaptivity)().sizeY
              , y = void 0 === E ? "none" : E
              , S = p && "horizontal" === n
              , N = f && "horizontal" === n
              , w = (0,
            c.useExternRef)(C);
            return i.createElement(v.RootComponent, (0,
            r._)({
                getRootRef: w,
                baseClassName: (0,
                l.classNames)(y !== u.SizeType.REGULAR && m[y], "horizontal" === n && (0,
                l.classNames)("vkuiFormLayoutGroup--mode-horizontal", "vkuiInternalFormLayoutGroup--mode-horizontal"), S && (0,
                l.classNames)("vkuiFormLayoutGroup--removable", "vkuiInternalFormLayoutGroup--removable"), N && (0,
                l.classNames)("vkuiFormLayoutGroup--segmented", "vkuiInternalFormLayoutGroup--segmented"))
            }, _), S ? i.createElement(d.Removable, {
                className: "vkuiFormLayoutGroup__removable",
                align: "start",
                removePlaceholder: g,
                onRemove: function(e) {
                    var t;
                    (null === (t = w) || void 0 === t ? void 0 : t.current) && k(e, w.current)
                },
                indent: "indent" === p
            }, t) : i.createElement(i.Fragment, null, t, i.createElement("span", {
                className: "vkuiFormLayoutGroup__offset",
                "aria-hidden": !0
            })))
        }
    }
    ,
    53961: (e,t,a)=>{
        "use strict";
        a.d(t, {
            FormStatus: ()=>c
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(857991)
          , c = function(e) {
            var t = e.mode
              , a = e.children
              , c = e.className
              , u = (0,
            o._)(e, ["mode", "children", "className"]);
            return i.createElement(s.Banner, (0,
            r._)((0,
            n._)({}, u), {
                subheader: a,
                className: (0,
                l.classNames)("vkuiInternalFormStatus", "error" === t && (0,
                l.classNames)("vkuiFormStatus--mode-error", "vkuiInternalFormStatus--mode-error"), c)
            }))
        }
    }
    ,
    87223: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Gallery: ()=>d
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(667294)
          , s = a(633656)
          , c = a(855356)
          , u = a(23112)
          , d = function(e) {
            var t, a = e.initialSlideIndex, d = void 0 === a ? 0 : a, v = e.children, m = e.timeout, p = void 0 === m ? 0 : m, f = e.onChange, h = e.bullets, g = (0,
            o._)(e, ["initialSlideIndex", "children", "timeout", "onChange", "bullets"]), b = (0,
            i._)(l.useState(d), 2), k = b[0], C = b[1], _ = "number" == typeof g.slideIndex, E = _ ? null !== (t = g.slideIndex) && void 0 !== t ? t : 0 : k, y = !_ || Boolean(f), S = l.useMemo((function() {
                return l.Children.toArray(v).filter((function(e) {
                    return Boolean(e)
                }
                ))
            }
            ), [v]), N = S.length, w = l.useCallback((function(e) {
                e !== E && (!_ && C(e),
                f && f(e))
            }
            ), [_, f, E]), R = (0,
            c.useTimeout)((function() {
                return w((E + 1) % N)
            }
            ), p);
            l.useEffect((function() {
                return p ? R.set() : R.clear()
            }
            ), [p, E, R]);
            var A = N > 0 ? (0,
            s.clamp)(E, 0, N - 1) : E;
            return l.useEffect((function() {
                f && A !== E && f(A),
                C(A)
            }
            ), [f, A, E]),
            l.createElement(u.BaseGallery, (0,
            r._)((0,
            n._)({
                isDraggable: y
            }, g), {
                bullets: N > 0 && h,
                slideIndex: A,
                onChange: w
            }), S)
        }
    }
    ,
    654202: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Gradient: ()=>d
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(523323)
          , c = {
            tint: "vkuiGradient--mode-tint",
            black: "vkuiGradient--mode-black",
            white: "vkuiGradient--mode-white"
        }
          , u = {
            top: "vkuiGradient--to-top",
            bottom: "vkuiGradient--to-bottom"
        }
          , d = function(e) {
            var t = e.mode
              , a = void 0 === t ? "tint" : t
              , d = e.to
              , v = void 0 === d ? "top" : d
              , m = (0,
            o._)(e, ["mode", "to"]);
            return i.createElement(s.RootComponent, (0,
            r._)((0,
            n._)({
                role: "presentation"
            }, m), {
                baseClassName: (0,
                l.classNames)(c[a], u[v])
            }))
        }
    }
    ,
    11610: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Group: ()=>y
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(667294)
          , s = a(962557)
          , c = a(324285)
          , u = a(119360)
          , d = a(489026)
          , v = a(108681)
          , m = a(644029)
          , p = a(338784)
          , f = a(811113)
          , h = a(523323)
          , g = a(346921)
          , b = a(257451)
          , k = a(894872)
          , C = (0,
        n._)({
            none: (0,
            s.classNames)("vkuiGroup--sizeX-none", "vkuiInternalGroup--sizeX-none")
        }, d.SizeType.COMPACT, "vkuiGroup--sizeX-compact")
          , _ = {
            none: (0,
            s.classNames)("vkuiGroup--mode-none", "vkuiInternalGroup--mode-none"),
            plain: (0,
            s.classNames)("vkuiGroup--mode-plain", "vkuiInternalGroup--mode-plain"),
            card: (0,
            s.classNames)("vkuiGroup--mode-card", "vkuiInternalGroup--mode-card")
        }
          , E = {
            s: "vkuiGroup--padding-s",
            m: "vkuiGroup--padding-m"
        };
        (0,
        m.warnOnce)("Group");
        var y = function(e) {
            var t = e.header
              , a = e.description
              , n = e.children
              , m = e.separator
              , y = void 0 === m ? "auto" : m
              , S = e.mode
              , N = e.padding
              , w = void 0 === N ? "m" : N
              , R = e.tabIndex
              , A = (0,
            i._)(e, ["header", "description", "children", "separator", "mode", "padding", "tabIndex"])
              , M = l.useContext(f.ModalRootContext).isInsideModal
              , T = (0,
            u.usePlatform)()
              , P = (0,
            c.useAdaptivity)().sizeX
              , I = void 0 === P ? "none" : P
              , D = function(e, t, a) {
                var n = l.useContext(p.AppRootContext).layout;
                return e || (a ? "plain" : n || ("none" !== t ? t === d.SizeType.REGULAR ? "card" : "plain" : "none"))
            }(S, I, M);
            var L = "tabpanel" === A.role && void 0 === R ? 0 : R;
            return l.createElement(l.Fragment, null, l.createElement(h.RootComponent, (0,
            o._)((0,
            r._)({
                Component: "section"
            }, A), {
                tabIndex: L,
                baseClassName: (0,
                s.classNames)("vkuiInternalGroup", "vkuiGroup", M && "vkuiGroup--inside-modal", T === v.Platform.IOS && "vkuiGroup--ios", I !== d.SizeType.REGULAR && C[I], D && _[D], E[w])
            }), (0,
            s.hasReactNode)(t) && l.createElement("div", {
                className: "vkuiGroup__header"
            }, t), n, (0,
            s.hasReactNode)(a) && l.createElement(k.Footnote, {
                className: "vkuiGroup__description"
            }, a)), "hide" !== y && l.createElement(l.Fragment, null, l.createElement(b.Spacing, {
                className: (0,
                s.classNames)("vkuiGroup__separator", "vkuiGroup__separator--spacing"),
                size: 16
            }), l.createElement(g.Separator, {
                className: (0,
                s.classNames)("vkuiGroup__separator", "vkuiGroup__separator--separator", "show" === y && "vkuiGroup__separator--force")
            })))
        }
    }
    ,
    341238: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Header: ()=>b
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(119360)
          , c = a(108681)
          , u = a(523323)
          , d = a(894872)
          , v = a(115446)
          , m = a(390574)
          , p = a(243912)
          , f = a(931252)
          , h = function(e) {
            var t = e.mode
              , a = e.size
              , r = (0,
            o._)(e, ["mode", "size"])
              , l = "large" === a;
            if ((0,
            s.usePlatform)() === c.Platform.IOS)
                switch (t) {
                case "primary":
                    return l ? i.createElement(f.Title, (0,
                    n._)({
                        level: "2",
                        weight: "2"
                    }, r)) : i.createElement(f.Title, (0,
                    n._)({
                        weight: "1",
                        level: "3"
                    }, r));
                case "secondary":
                    return i.createElement(d.Footnote, (0,
                    n._)({
                        weight: "1",
                        caps: !0
                    }, r));
                case "tertiary":
                    return i.createElement(f.Title, (0,
                    n._)({
                        weight: "1",
                        level: "3"
                    }, r))
                }
            switch (t) {
            case "primary":
                return l ? i.createElement(f.Title, (0,
                n._)({
                    level: "2",
                    weight: "2"
                }, r)) : i.createElement(v.Headline, (0,
                n._)({
                    weight: "2"
                }, r));
            case "secondary":
                return i.createElement(d.Footnote, (0,
                n._)({
                    weight: "1",
                    caps: !0
                }, r));
            case "tertiary":
                return i.createElement(v.Headline, (0,
                n._)({
                    weight: "2"
                }, r))
            }
            return null
        }
          , g = {
            primary: "vkuiHeader--mode-primary",
            secondary: "vkuiHeader--mode-secondary",
            tertiary: "vkuiHeader--mode-tertiary"
        }
          , b = function(e) {
            var t = e.mode
              , a = void 0 === t ? "primary" : t
              , v = e.size
              , f = void 0 === v ? "regular" : v
              , b = e.children
              , k = e.subtitle
              , C = e.indicator
              , _ = e.aside
              , E = e.multiline
              , y = (0,
            o._)(e, ["mode", "size", "children", "subtitle", "indicator", "aside", "multiline"])
              , S = (0,
            s.usePlatform)();
            return i.createElement(u.RootComponent, (0,
            r._)((0,
            n._)({
                Component: "header"
            }, y), {
                baseClassName: (0,
                l.classNames)("vkuiHeader", S === c.Platform.IOS && "vkuiHeader--ios", g[a], (0,
                l.isPrimitiveReactNode)(C) && "vkuiHeader--pi", (0,
                l.hasReactNode)(k) && "vkuiHeader--with-subtitle")
            }), i.createElement("div", {
                className: "vkuiHeader__main"
            }, i.createElement(h, {
                className: "vkuiHeader__content",
                Component: "span",
                mode: a,
                size: f
            }, i.createElement("span", {
                className: (0,
                l.classNames)("vkuiHeader__content-in", E && "vkuiHeader__content--multiline")
            }, b), (0,
            l.hasReactNode)(C) && i.createElement(d.Footnote, {
                className: "vkuiHeader__indicator",
                weight: "2"
            }, C)), (0,
            l.hasReactNode)(k) && i.createElement(p.Subhead, {
                className: (0,
                l.classNames)("vkuiHeader__subtitle", E && "vkuiHeader__content--multiline"),
                Component: "span"
            }, k)), (0,
            l.hasReactNode)(_) && i.createElement(m.Paragraph, {
                className: "vkuiHeader__aside",
                Component: "span"
            }, _))
        }
    }
    ,
    698091: (e,t,a)=>{
        "use strict";
        a.d(t, {
            HorizontalCell: ()=>p
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(900863)
          , s = a(795281)
          , c = a(443910)
          , u = a(894872)
          , d = a(243912)
          , v = {
            s: "vkuiHorizontalCell--size-s",
            m: "vkuiHorizontalCell--size-m",
            l: "vkuiHorizontalCell--size-l"
        }
          , m = function(e) {
            var t = e.size
              , a = e.children
              , n = (0,
            r._)(e, ["size", "children"]);
            return "s" === t ? o.createElement(c.Caption, n, a) : o.createElement(d.Subhead, n, a)
        }
          , p = function(e) {
            var t = e.className
              , a = e.header
              , c = e.style
              , d = e.subtitle
              , p = e.size
              , f = void 0 === p ? "s" : p
              , h = e.children
              , g = void 0 === h ? o.createElement(l.Avatar, {
                size: 56
            }) : h
              , b = e.getRootRef
              , k = e.getRef
              , C = e.extraSubtitle
              , _ = (0,
            r._)(e, ["className", "header", "style", "subtitle", "size", "children", "getRootRef", "getRef", "extraSubtitle"]);
            return o.createElement("div", {
                ref: b,
                style: c,
                className: (0,
                i.classNames)("vkuiHorizontalCell", v[f], t)
            }, o.createElement(s.Tappable, (0,
            n._)({
                className: "vkuiHorizontalCell__body",
                getRootRef: k
            }, _), (0,
            i.hasReactNode)(g) && o.createElement("div", {
                className: "vkuiHorizontalCell__image"
            }, g), o.createElement("div", {
                className: "vkuiHorizontalCell__content"
            }, (0,
            i.hasReactNode)(a) && o.createElement(m, {
                size: f
            }, a), (0,
            i.hasReactNode)(d) && o.createElement(u.Footnote, {
                className: "vkuiHorizontalCell__subtitle"
            }, d), (0,
            i.hasReactNode)(C) && o.createElement(u.Footnote, {
                className: "vkuiHorizontalCell__subtitle"
            }, C))))
        }
    }
    ,
    635717: (e,t,a)=>{
        "use strict";
        a.d(t, {
            HorizontalScroll: ()=>g
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(667294)
          , s = a(962557)
          , c = a(716331)
          , u = a(151571)
          , d = a(428253)
          , v = a(888420)
          , m = a(523323)
          , p = a(427730);
        function f() {
            return performance && performance.now ? performance.now() : Date.now()
        }
        var h = function(e) {
            return Math.ceil(e.scrollLeft)
        };
        var g = function(e) {
            var t = e.children
              , a = e.getScrollToLeft
              , g = e.getScrollToRight
              , b = e.showArrows
              , k = void 0 === b || b
              , C = e.arrowSize
              , _ = void 0 === C ? "l" : C
              , E = e.arrowOffsetY
              , y = e.scrollAnimationDuration
              , S = void 0 === y ? 250 : y
              , N = e.getRef
              , w = e.scrollOnAnyWheel
              , R = void 0 !== w && w
              , A = (0,
            o._)(e, ["children", "getScrollToLeft", "getScrollToRight", "showArrows", "arrowSize", "arrowOffsetY", "scrollAnimationDuration", "getRef", "scrollOnAnyWheel"])
              , M = (0,
            i._)(l.useState(!1), 2)
              , T = M[0]
              , P = M[1]
              , I = (0,
            i._)(l.useState(!1), 2)
              , D = I[0]
              , L = I[1]
              , x = l.useRef(!1)
              , O = (0,
            d.useExternRef)(N)
              , B = l.useRef([])
              , z = (0,
            c.useAdaptivityHasPointer)()
              , F = l.useCallback((function(e) {
                var t = O.current;
                B.current.push((function() {
                    var a, n;
                    return function(e) {
                        var t = e.scrollElement
                          , a = e.getScrollPosition
                          , n = e.animationQueue
                          , r = e.onScrollToRightBorder
                          , o = e.onScrollEnd
                          , i = e.onScrollStart
                          , l = e.initialScrollWidth
                          , s = e.scrollAnimationDuration
                          , c = void 0 === s ? 250 : s;
                        if (t && a) {
                            var u = l - t.offsetWidth
                              , d = h(t)
                              , m = a(d);
                            i(),
                            m >= u && (r(),
                            m = u);
                            var p = f();
                            !function e() {
                                if (t) {
                                    var a = f()
                                      , r = Math.min((a - p) / c, 1)
                                      , i = (0,
                                    v.easeInOutSine)(r)
                                      , l = d + (m - d) * i;
                                    t.scrollLeft = Math.ceil(l),
                                    h(t) === Math.max(0, m) || 1 === r ? (o(),
                                    n.shift(),
                                    n.length > 0 && n[0]()) : requestAnimationFrame(e)
                                } else
                                    o()
                            }()
                        }
                    }({
                        scrollElement: t,
                        getScrollPosition: e,
                        animationQueue: B.current,
                        onScrollToRightBorder: function() {
                            return L(!1)
                        },
                        onScrollEnd: function() {
                            return x.current = !1
                        },
                        onScrollStart: function() {
                            return x.current = !0
                        },
                        initialScrollWidth: (null === (n = t) || void 0 === n || null === (a = n.firstElementChild) || void 0 === a ? void 0 : a.scrollWidth) || 0,
                        scrollAnimationDuration: S
                    })
                }
                )),
                1 === B.current.length && B.current[0]()
            }
            ), [S, O])
              , H = l.useCallback((function() {
                F(null != a ? a : function(e) {
                    return e - O.current.offsetWidth
                }
                )
            }
            ), [a, F, O])
              , V = l.useCallback((function() {
                F(null != g ? g : function(e) {
                    return e + O.current.offsetWidth
                }
                )
            }
            ), [g, F, O])
              , Y = l.useCallback((function() {
                if (k && z && O.current && !x.current) {
                    var e = O.current;
                    P(e.scrollLeft > 0),
                    L(h(e) + e.offsetWidth < e.scrollWidth)
                }
            }
            ), [z, O, k])
              , W = (0,
            u.useEventListener)("scroll", Y);
            l.useEffect((function() {
                return O.current ? (W.add(O.current),
                W.remove) : s.noop
            }
            ), [W, O]),
            l.useEffect(Y, [Y, t]);
            var q = l.useCallback((function(e) {
                O.current.scrollBy({
                    left: e.deltaX + e.deltaY,
                    behavior: "auto"
                }),
                e.preventDefault()
            }
            ), [O])
              , G = (0,
            u.useEventListener)("wheel", q);
            return l.useEffect((function() {
                return O.current && R ? (G.add(O.current),
                G.remove) : s.noop
            }
            ), [G, O, R]),
            l.createElement(m.RootComponent, (0,
            r._)((0,
            n._)({}, A), {
                baseClassName: (0,
                s.classNames)("vkuiHorizontalScroll", "vkuiInternalHorizontalScroll", "always" === k && "vkuiHorizontalScroll--withConstArrows"),
                onMouseEnter: Y
            }), k && (z || void 0 === z) && T && l.createElement(p.ScrollArrow, {
                size: _,
                offsetY: E,
                direction: "left",
                className: (0,
                s.classNames)("vkuiHorizontalScroll__arrow", "vkuiHorizontalScroll__arrowLeft"),
                onClick: H
            }), k && (z || void 0 === z) && D && l.createElement(p.ScrollArrow, {
                size: _,
                offsetY: E,
                direction: "right",
                className: (0,
                s.classNames)("vkuiHorizontalScroll__arrow", "vkuiHorizontalScroll__arrowRight"),
                onClick: V
            }), l.createElement("div", {
                className: "vkuiHorizontalScroll__in",
                ref: O
            }, l.createElement("div", {
                className: "vkuiHorizontalScroll__in-wrapper"
            }, t)))
        }
    }
    ,
    235030: (e,t,a)=>{
        "use strict";
        a.d(t, {
            HoverPopper: ()=>m
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(667294)
          , s = a(151571)
          , c = a(22539)
          , u = a(855356)
          , d = a(214542)
          , v = a(59214)
          , m = function(e) {
            var t = e.getRef
              , a = e.content
              , m = e.children
              , p = e.onShownChange
              , f = e.shown
              , h = e.showDelay
              , g = void 0 === h ? 150 : h
              , b = e.hideDelay
              , k = void 0 === b ? 150 : b
              , C = (0,
            o._)(e, ["getRef", "content", "children", "onShownChange", "shown", "showDelay", "hideDelay"])
              , _ = (0,
            i._)(l.useState(f || !1), 2)
              , E = _[0]
              , y = _[1]
              , S = "boolean" == typeof f ? f : E
              , N = function(e) {
                "boolean" != typeof f && y(e),
                "function" == typeof p && p(e)
            }
              , w = (0,
            u.useTimeout)((function() {
                N(!0)
            }
            ), g)
              , R = (0,
            u.useTimeout)((function() {
                N(!1)
            }
            ), k)
              , A = (0,
            i._)((0,
            c.usePatchChildrenRef)(m), 2)
              , M = A[0]
              , T = A[1]
              , P = function() {
                w.clear(),
                R.set()
            }
              , I = (0,
            s.useEventListener)("pointerenter", (function() {
                R.clear(),
                w.set()
            }
            ))
              , D = (0,
            s.useEventListener)("pointerleave", P);
            return (0,
            d.useIsomorphicLayoutEffect)((function() {
                M.current && (I.add(M.current),
                D.add(M.current))
            }
            ), []),
            l.createElement(l.Fragment, null, T, S && l.createElement(v.Popper, (0,
            r._)((0,
            n._)({}, C), {
                onMouseOver: R.clear,
                onMouseOut: P,
                getRef: t,
                targetRef: M
            }), a))
        }
    }
    ,
    600245: (e,t,a)=>{
        "use strict";
        a.d(t, {
            IconButton: ()=>h
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(667294)
          , s = a(962557)
          , c = a(324285)
          , u = a(119360)
          , d = a(489026)
          , v = a(108681)
          , m = a(644029)
          , p = a(795281)
          , f = (0,
        n._)({
            none: "vkuiIconButton--sizeY-none"
        }, d.SizeType.COMPACT, "vkuiIconButton--sizeY-compact")
          , h = ((0,
        m.warnOnce)("IconButton"),
        function(e) {
            var t = e.children
              , a = e.className
              , n = (0,
            i._)(e, ["children", "className"])
              , m = (0,
            u.usePlatform)()
              , h = (0,
            c.useAdaptivity)().sizeY
              , g = void 0 === h ? "none" : h;
            return l.createElement(p.Tappable, (0,
            o._)((0,
            r._)({
                activeEffectDelay: 200,
                activeMode: "background",
                Component: n.href ? "a" : "button"
            }, n), {
                className: (0,
                s.classNames)("vkuiIconButton", g !== d.SizeType.REGULAR && f[g], m === v.Platform.IOS && "vkuiIconButton--ios", a)
            }), t)
        }
        )
    }
    ,
    566776: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Image: ()=>c
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(380702)
          , s = a(838922)
          , c = function(e) {
            var t = e.size
              , a = void 0 === t ? 48 : t
              , s = e.borderRadius
              , c = void 0 === s ? "m" : s
              , u = e.style
              , d = e.className
              , v = (0,
            o._)(e, ["size", "borderRadius", "style", "className"])
              , m = i.useMemo((function() {
                return function(e, t) {
                    switch (t) {
                    case "s":
                        return e <= 32 ? 2 : e <= 56 ? 3 : 4;
                    case "m":
                        return e <= 32 ? 3 : e <= 48 ? 4 : e <= 72 ? 6 : e <= 80 ? 8 : 10;
                    case "l":
                        return e <= 16 ? 4 : e <= 20 ? 5 : e <= 32 ? 6 : e <= 40 ? 8 : e <= 48 ? 10 : e <= 56 ? 12 : e <= 64 ? 14 : 16
                    }
                }(a, c)
            }
            ), [a, c]);
            return i.createElement(l.ImageBase, (0,
            r._)((0,
            n._)({}, v), {
                size: a,
                style: (0,
                r._)((0,
                n._)({}, u), {
                    borderRadius: m
                }),
                className: d
            }))
        };
        c.Badge = s.ImageBadge,
        c.Overlay = l.ImageBase.Overlay
    }
    ,
    838922: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ImageBadge: ()=>u
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(2745)
          , c = a(380702)
          , u = function(e) {
            var t = e.className
              , a = (0,
            o._)(e, ["className"])
              , u = i.useContext(s.ImageBaseContext).size;
            return i.createElement(c.ImageBase.Badge, (0,
            r._)((0,
            n._)({}, a), {
                className: (0,
                l.classNames)("vkuiImageBadge", u < 96 && "vkuiImageBadge--shifted", t)
            }))
        }
    }
    ,
    380702: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ImageBase: ()=>p
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(667294)
          , s = a(962557)
          , c = a(428253)
          , u = a(523323)
          , d = a(328442)
          , v = a(289679)
          , m = a(2745)
          , p = function(e) {
            var t = e.alt
              , a = e.crossOrigin
              , d = e.decoding
              , v = e.loading
              , p = e.referrerPolicy
              , f = e.sizes
              , h = e.src
              , g = e.srcSet
              , b = e.useMap
              , k = e.getRef
              , C = e.size
              , _ = void 0 === C ? 24 : C
              , E = e.width
              , y = e.height
              , S = e.style
              , N = e.withBorder
              , w = void 0 === N || N
              , R = e.fallbackIcon
              , A = e.children
              , M = e["aria-label"]
              , T = e.onClick
              , P = e.onLoad
              , I = e.onError
              , D = (0,
            o._)(e, ["alt", "crossOrigin", "decoding", "loading", "referrerPolicy", "sizes", "src", "srcSet", "useMap", "getRef", "size", "width", "height", "style", "withBorder", "fallbackIcon", "children", "aria-label", "onClick", "onLoad", "onError"])
              , L = (0,
            i._)(l.useState(!1), 2)
              , x = L[0]
              , O = L[1]
              , B = (0,
            i._)(l.useState(!1), 2)
              , z = B[0]
              , F = B[1]
              , H = h || g
              , V = (z || !H) && l.isValidElement(R) ? R : null;
            var Y = (0,
            c.useExternRef)(k)
              , W = l.useRef(!1);
            return l.useEffect((function() {
                if (!W.current && (W.current = !0,
                Y.current && Y.current.complete && !x)) {
                    var e = new Event("load");
                    Y.current.dispatchEvent(e)
                }
            }
            ), [Y, x]),
            l.createElement(m.ImageBaseContext.Provider, {
                value: {
                    size: _
                }
            }, l.createElement(u.RootComponent, (0,
            r._)((0,
            n._)({}, D), {
                style: (0,
                r._)((0,
                n._)({}, S), {
                    width: _,
                    height: _
                }),
                baseClassName: (0,
                s.classNames)("vkuiImageBase", x && "vkuiImageBase--loaded"),
                role: H ? "img" : "presentation",
                "aria-label": M,
                onClick: T
            }), H && l.createElement("img", {
                ref: Y,
                alt: t,
                className: "vkuiImageBase__img",
                crossOrigin: a,
                decoding: d,
                loading: v,
                referrerPolicy: p,
                sizes: f,
                src: h,
                srcSet: g,
                useMap: b,
                width: E,
                height: y,
                onLoad: function(e) {
                    var t;
                    x || (O(!0),
                    F(!1),
                    null === (t = P) || void 0 === t || t(e))
                },
                onError: function(e) {
                    var t;
                    O(!1),
                    F(!0),
                    null === (t = I) || void 0 === t || t(e)
                }
            }), V && l.createElement("div", {
                className: "vkuiImageBase__fallback"
            }, V), A, w && l.createElement("div", {
                "aria-hidden": !0,
                className: "vkuiImageBase__border"
            })))
        };
        p.Badge = d.ImageBaseBadge,
        p.Overlay = v.ImageBaseOverlay
    }
    ,
    328442: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ImageBaseBadge: ()=>u
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(523323)
          , c = {
            stroke: "vkuiImageBaseBadge--background-stroke",
            shadow: "vkuiImageBaseBadge--background-shadow"
        }
          , u = function(e) {
            var t = e.background
              , a = void 0 === t ? "shadow" : t
              , u = (0,
            o._)(e, ["background"]);
            return i.createElement(s.RootComponent, (0,
            r._)((0,
            n._)({}, u), {
                baseClassName: (0,
                l.classNames)("vkuiImageBaseBadge", c[a])
            }))
        }
    }
    ,
    289679: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ImageBaseOverlay: ()=>d
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(716331)
          , c = a(505901)
          , u = a(795281)
          , d = function(e) {
            var t = e.className
              , a = e.theme
              , d = e.visibility
              , v = e.children
              , m = e.onClick
              , p = (0,
            o._)(e, ["className", "theme", "visibility", "children", "onClick"])
              , f = (0,
            c.useAppearance)()
              , h = (0,
            s.useAdaptivityHasPointer)()
              , g = null != a ? a : f
              , b = null != d ? d : h ? "on-hover" : "always";
            return i.createElement(u.Tappable, (0,
            r._)((0,
            n._)({}, p), {
                type: "button",
                Component: "button",
                className: (0,
                l.classNames)("vkuiImageBaseOverlay", "always" === b && "vkuiImageBaseOverlay--visible", "light" === g && "vkuiImageBaseOverlay--theme-light", "dark" === g && "vkuiImageBaseOverlay--theme-dark", t),
                hasHover: "on-hover" === b,
                hoverMode: "on-hover" === b ? "vkuiImageBaseOverlay--visible" : void 0,
                focusVisibleMode: "vkuiImageBaseOverlay--focus-visible",
                hasActive: !1,
                onClick: m
            }), v)
        }
    }
    ,
    2745: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ImageBaseContext: ()=>n
        });
        var n = a(667294).createContext({
            size: 0
        })
    }
    ,
    342627: (e,t,a)=>{
        "use strict";
        function n(e) {
            return e <= 20 ? 12 : e > 20 && e <= 28 ? 16 : e > 28 && e <= 32 ? 20 : e > 32 && e <= 44 ? 24 : e > 44 && e <= 64 ? 28 : n.MAX_SIZE
        }
        function r(e) {
            return e <= 36 ? 12 : e > 36 && e <= 48 ? 16 : e > 48 && e <= 64 ? 20 : r.MAX_SIZE
        }
        a.d(t, {
            getBadgeIconSizeByImageBaseSize: ()=>r,
            getFallbackIconSizeByImageBaseSize: ()=>n
        }),
        n.MAX_SIZE = 36,
        r.MAX_SIZE = 24
    }
    ,
    392903: (e,t,a)=>{
        "use strict";
        a.d(t, {
            InfoRow: ()=>d
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(115446)
          , c = a(243912)
          , u = a(516511)
          , d = function(e) {
            var t = e.header
              , a = e.children
              , d = e.className
              , v = (0,
            o._)(e, ["header", "children", "className"]);
            return i.createElement(s.Headline, (0,
            r._)((0,
            n._)({}, v), {
                Component: "span",
                className: (0,
                l.classNames)("vkuiInfoRow", d),
                weight: "3"
            }), (0,
            l.hasReactNode)(t) && i.createElement(c.Subhead, {
                Component: "strong",
                className: "vkuiInfoRow__header"
            }, t, i.createElement(u.VisuallyHidden, null, " ")), a)
        }
    }
    ,
    383567: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Input: ()=>p
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(667294)
          , s = a(962557)
          , c = a(324285)
          , u = a(489026)
          , d = a(937188)
          , v = a(754259)
          , m = (0,
        n._)({
            none: "vkuiInput--sizeY-none"
        }, u.SizeType.COMPACT, "vkuiInput--sizeY-compact")
          , p = function(e) {
            var t = e.type
              , a = void 0 === t ? "text" : t
              , n = e.align
              , p = void 0 === n ? "left" : n
              , f = e.getRef
              , h = e.className
              , g = e.getRootRef
              , b = e.style
              , k = e.before
              , C = e.after
              , _ = e.status
              , E = e.mode
              , y = (0,
            i._)(e, ["type", "align", "getRef", "className", "getRootRef", "style", "before", "after", "status", "mode"])
              , S = (0,
            c.useAdaptivity)().sizeY
              , N = void 0 === S ? "none" : S;
            return l.createElement(d.FormField, {
                style: b,
                className: (0,
                s.classNames)("vkuiInput", "right" === p && "vkuiInput--align-right", "center" === p && "vkuiInput--align-center", N !== u.SizeType.REGULAR && m[N], k && "vkuiInput--hasBefore", C && "vkuiInput--hasAfter", h),
                getRootRef: g,
                before: k,
                after: C,
                disabled: y.disabled,
                mode: E,
                status: _
            }, l.createElement(v.Text, (0,
            o._)((0,
            r._)({}, y), {
                Component: "input",
                normalize: !1,
                type: a,
                className: "vkuiInput__el",
                getRootRef: f
            })))
        }
    }
    ,
    387057: (e,t,a)=>{
        "use strict";
        a.d(t, {
            InputLike: ()=>u
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(719007)
          , l = a(256631)
          , s = a(523323)
          , c = String.fromCharCode(8199);
        var u = function(e) {
            var t, a, u, d, v, m = e.value, p = e.length, f = e.index, h = e.onElementSelect, g = e.onClick, b = e.onFocus, k = (0,
            r._)(e, ["value", "length", "index", "onElementSelect", "onClick", "onFocus"]), C = o.useCallback((function(e) {
                var t;
                (0,
                l.stopPropagation)(e),
                null === (t = h) || void 0 === t || t(f)
            }
            ), [f, h]);
            return o.createElement(s.RootComponent, (0,
            n._)({
                Component: "span",
                baseClassName: (null === (t = m) || void 0 === t ? void 0 : t.length) === p ? "vkuiInputLike--full" : void 0,
                tabIndex: 0,
                onClick: (0,
                i.callMultiple)(g, C),
                onFocus: (0,
                i.callMultiple)(l.stopPropagation, b)
            }, k), null === (a = m) || void 0 === a ? void 0 : a.slice(0, p - 1), (null === (u = m) || void 0 === u ? void 0 : u.slice(p - 1)) && o.createElement("span", {
                key: f,
                className: "vkuiInputLike__last_character"
            }, m.slice(p - 1)), function(e) {
                for (var t = [], a = 0; a < e; a += 1)
                    t.push(o.createElement("span", {
                        key: a,
                        className: "vkuiInputLike__mask"
                    }, c));
                return t
            }(p - (null !== (v = null === (d = m) || void 0 === d ? void 0 : d.length) && void 0 !== v ? v : 0)))
        };
        u.displayName = "InputLike"
    }
    ,
    68089: (e,t,a)=>{
        "use strict";
        a.d(t, {
            InputLikeDivider: ()=>l
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = function(e) {
            var t = e.children
              , a = e.className
              , l = (0,
            r._)(e, ["children", "className"]);
            return o.createElement("span", (0,
            n._)({
                className: (0,
                i.classNames)("vkuiInputLike__divider", a)
            }, l), t)
        }
    }
    ,
    630093: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Link: ()=>c
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(795281)
          , c = function(e) {
            var t = e.hasVisited
              , a = e.children
              , c = e.className
              , u = (0,
            o._)(e, ["hasVisited", "children", "className"]);
            return i.createElement(s.Tappable, (0,
            r._)((0,
            n._)({
                Component: u.href ? "a" : "button"
            }, u), {
                className: (0,
                l.classNames)("vkuiLink", t && "vkuiLink--has-visited", c),
                hasHover: !1,
                activeMode: "opacity",
                focusVisibleMode: "vkuiLink--focus-visible"
            }), a)
        }
    }
    ,
    639731: (e,t,a)=>{
        "use strict";
        a.d(t, {
            List: ()=>d
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(667294)
          , s = a(962557)
          , c = a(523323)
          , u = a(554035)
          , d = function(e) {
            var t = e.children
              , a = (0,
            o._)(e, ["children"])
              , d = (0,
            i._)(l.useState(!1), 2)
              , v = d[0]
              , m = d[1];
            return l.createElement(c.RootComponent, (0,
            r._)((0,
            n._)({
                role: "list"
            }, a), {
                baseClassName: (0,
                s.classNames)("vkuiList", v && "vkuiInternalList--dragging")
            }), l.createElement(u.ListContext.Provider, {
                value: l.useMemo((function() {
                    return {
                        toggleDrag: m
                    }
                }
                ), [])
            }, t))
        }
    }
    ,
    554035: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ListContext: ()=>o
        });
        var n = a(667294)
          , r = a(962557)
          , o = n.createContext({
            toggleDrag: r.noop
        })
    }
    ,
    672774: (e,t,a)=>{
        "use strict";
        a.d(t, {
            MiniInfoCell: ()=>p
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(364548)
          , s = a(962557)
          , c = a(523323)
          , u = a(795281)
          , d = a(390574)
          , v = {
            add: "vkuiMiniInfoCell--mode-add",
            accent: "vkuiMiniInfoCell--mode-accent",
            more: "vkuiMiniInfoCell--mode-more"
        }
          , m = {
            nowrap: "vkuiMiniInfoCell--textWrap-nowrap",
            full: "vkuiMiniInfoCell--textWrap-full",
            short: "vkuiMiniInfoCell--textWrap-short"
        }
          , p = function(e) {
            var t = e.before
              , a = e.after
              , p = e.children
              , f = e.mode
              , h = void 0 === f ? "base" : f
              , g = e.textWrap
              , b = void 0 === g ? "nowrap" : g
              , k = e.expandable
              , C = void 0 !== k && k
              , _ = e.className
              , E = (0,
            o._)(e, ["before", "after", "children", "mode", "textWrap", "expandable", "className"])
              , y = (0,
            s.classNames)("vkuiMiniInfoCell", m[b], "base" !== h && v[h], _)
              , S = i.createElement(i.Fragment, null, (0,
            s.hasReactNode)(t) && i.createElement("span", {
                className: "vkuiMiniInfoCell__before"
            }, t), i.createElement("div", {
                className: "vkuiMiniInfoCell__middle"
            }, i.createElement(d.Paragraph, {
                className: "vkuiMiniInfoCell__content",
                weight: "more" === h ? "2" : void 0
            }, p), C && i.createElement(l.Icon16Chevron, null)), (0,
            s.hasReactNode)(a) && i.createElement("span", {
                className: "vkuiMiniInfoCell__after"
            }, a));
            return E.onClick ? i.createElement(u.Tappable, (0,
            r._)((0,
            n._)({
                Component: "div",
                role: "button"
            }, E), {
                className: y
            }), S) : i.createElement(c.RootComponent, (0,
            r._)((0,
            n._)({}, E), {
                baseClassName: y
            }), S)
        }
    }
    ,
    239259: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ModalCard: ()=>b
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(323025)
          , c = a(119360)
          , u = a(504153)
          , d = a(644029)
          , v = a(48908)
          , m = a(811113)
          , p = a(447737)
          , f = a(523323)
          , h = {
            ios: "vkuiModalCard--ios",
            android: "vkuiModalCard--android",
            vkcom: "vkuiModalCard--vkcom"
        }
          , g = (0,
        d.warnOnce)("ModalCard")
          , b = function(e) {
            var t = e.icon
              , a = e.header
              , d = e.subheader
              , b = e.children
              , k = e.actions
              , C = e.onClose
              , _ = e.nav
              , E = e.id
              , y = e.size
              , S = (0,
            o._)(e, ["icon", "header", "subheader", "children", "actions", "onClose", "nav", "id", "size"])
              , N = (0,
            s.useAdaptivityWithJSMediaQueries)().isDesktop
              , w = (0,
            c.usePlatform)()
              , R = i.useContext(m.ModalRootContext)
              , A = (0,
            m.useModalRegistry)((0,
            u.getNavId)({
                nav: _,
                id: E
            }, g), p.ModalType.CARD).refs;
            return i.createElement(f.RootComponent, (0,
            r._)((0,
            n._)({}, S), {
                id: E,
                baseClassName: (0,
                l.classNames)("vkuiModalCard", h.hasOwnProperty(w) ? h[w] : h.android, N && "vkuiModalCard--desktop")
            }), i.createElement(v.ModalCardBase, {
                className: "vkuiModalCard__in",
                getRootRef: A.innerElement,
                icon: t,
                header: a,
                subheader: d,
                actions: k,
                onClose: C || R.onClose,
                size: y
            }, b))
        }
    }
    ,
    48908: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ModalCardBase: ()=>C
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(427210)
          , s = a(962557)
          , c = a(323025)
          , u = a(597636)
          , d = a(119360)
          , v = a(489026)
          , m = a(108681)
          , p = a(362276)
          , f = a(443890)
          , h = a(241073)
          , g = a(523323)
          , b = a(243912)
          , k = a(931252)
          , C = function(e) {
            var t = e.icon
              , a = e.header
              , C = e.subheader
              , _ = e.children
              , E = e.actions
              , y = e.onClose
              , S = e.dismissLabel
              , N = void 0 === S ? "Скрыть" : S
              , w = e.style
              , R = e.size
              , A = (0,
            o._)(e, ["icon", "header", "subheader", "children", "actions", "onClose", "dismissLabel", "style", "size"])
              , M = (0,
            d.usePlatform)()
              , T = (0,
            c.useAdaptivityWithJSMediaQueries)().isDesktop
              , P = (0,
            u.useKeyboard)().isOpened
              , I = M === m.Platform.IOS && !T
              , D = T ? R : void 0;
            return i.createElement(g.RootComponent, (0,
            r._)((0,
            n._)({}, A), {
                baseClassName: (0,
                s.classNames)("vkuiInternalModalCardBase", M === m.Platform.IOS && "vkuiModalCardBase--ios", T && "vkuiModalCardBase--desktop"),
                style: (0,
                r._)((0,
                n._)({}, w), {
                    maxWidth: D
                })
            }), i.createElement("div", {
                className: (0,
                s.classNames)("vkuiModalCardBase__container", P && "vkuiModalCardBase__container--softwareKeyboardOpened")
            }, (0,
            s.hasReactNode)(t) && i.createElement("div", {
                className: "vkuiModalCardBase__icon"
            }, t), (0,
            s.hasReactNode)(a) && i.createElement(k.Title, {
                level: "2",
                weight: "2",
                className: (0,
                s.classNames)("vkuiModalCardBase__header", "vkuiInternalModalCardBase__header")
            }, a), (0,
            s.hasReactNode)(C) && i.createElement(p.AdaptivityContext.Provider, {
                value: {
                    sizeY: v.SizeType.REGULAR
                }
            }, i.createElement(b.Subhead, {
                className: (0,
                s.classNames)("vkuiModalCardBase__subheader", "vkuiInternalModalCardBase__subheader")
            }, C)), _, (0,
            s.hasReactNode)(E) && i.createElement("div", {
                className: "vkuiModalCardBase__actions"
            }, E), T && i.createElement(f.ModalDismissButton, {
                onClick: y
            }), I && i.createElement(h.PanelHeaderButton, {
                "aria-label": N,
                className: "vkuiModalCardBase__dismiss",
                onClick: y
            }, i.createElement(l.Icon24Dismiss, null))))
        }
    }
    ,
    443890: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ModalDismissButton: ()=>u
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(579431)
          , s = a(962557)
          , c = a(795281)
          , u = function(e) {
            var t = e["aria-label"]
              , a = void 0 === t ? "Закрыть" : t
              , u = e.className
              , d = (0,
            o._)(e, ["aria-label", "className"]);
            return i.createElement(c.Tappable, (0,
            r._)((0,
            n._)({
                className: (0,
                s.classNames)("vkuiModalDismissButton", u)
            }, d), {
                "aria-label": a,
                activeMode: "vkuiModalDismissButton--active",
                hoverMode: "vkuiModalDismissButton--hover"
            }), i.createElement(l.Icon20Cancel, null))
        }
    }
    ,
    489124: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ModalPage: ()=>S
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(323025)
          , c = a(228248)
          , u = a(336476)
          , d = a(119360)
          , v = a(489026)
          , m = a(504153)
          , p = a(108681)
          , f = a(256631)
          , h = a(644029)
          , g = a(443890)
          , b = a(811113)
          , k = a(447737)
          , C = a(523323)
          , _ = a(718164)
          , E = {
            s: "vkuiModalPage--size-s",
            m: "vkuiModalPage--size-m",
            l: "vkuiModalPage--size-l"
        }
          , y = (0,
        h.warnOnce)("ModalPage")
          , S = function(e) {
            var t = e.children
              , a = e.header
              , h = e.size
              , S = void 0 === h ? "s" : h
              , N = (e.onOpen,
            e.onOpened,
            e.onClose)
              , w = (e.onClosed,
            e.settlingHeight,
            e.dynamicContentHeight)
              , R = e.getModalContentRef
              , A = e.nav
              , M = e.id
              , T = e.hideCloseButton
              , P = void 0 !== T && T
              , I = (0,
            o._)(e, ["children", "header", "size", "onOpen", "onOpened", "onClose", "onClosed", "settlingHeight", "dynamicContentHeight", "getModalContentRef", "nav", "id", "hideCloseButton"])
              , D = (0,
            c.useId)()
              , L = M || D
              , x = i.useContext(b.ModalRootContext).updateModalHeight
              , O = (0,
            d.usePlatform)()
              , B = (0,
            u.useOrientationChange)()
              , z = (0,
            s.useAdaptivityWithJSMediaQueries)()
              , F = z.sizeX
              , H = z.isDesktop;
            i.useEffect((function() {
                w && x()
            }
            ), [t, w, B, x]);
            var V = !P && H
              , Y = H ? S : "s"
              , W = i.useContext(b.ModalRootContext)
              , q = (0,
            b.useModalRegistry)((0,
            m.getNavId)({
                nav: A,
                id: L
            }, y), k.ModalType.PAGE).refs
              , G = i.useMemo((function() {
                return {
                    labelId: "".concat(L, "-label")
                }
            }
            ), [L]);
            return i.createElement(_.ModalPageContext.Provider, {
                value: G
            }, i.createElement(C.RootComponent, (0,
            r._)((0,
            n._)({}, I), {
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": G.labelId,
                id: L,
                baseClassName: (0,
                l.classNames)("vkuiModalPage", O === p.Platform.IOS && "vkuiModalPage--ios", H && "vkuiModalPage--desktop", F === v.SizeType.REGULAR && "vkuiInternalModalPage--sizeX-regular", "string" == typeof Y && E[Y])
            }), i.createElement("div", {
                className: "vkuiModalPage__in-wrap",
                style: {
                    maxWidth: "number" == typeof Y ? Y : void 0
                },
                ref: q.innerElement
            }, i.createElement("div", {
                className: "vkuiModalPage__in"
            }, i.createElement("div", {
                className: "vkuiModalPage__header",
                ref: q.headerElement
            }, a), i.createElement("div", {
                className: "vkuiModalPage__content-wrap"
            }, i.createElement("div", {
                className: "vkuiModalPage__content",
                ref: (0,
                f.multiRef)(q.contentElement, R)
            }, i.createElement("div", {
                className: "vkuiModalPage__content-in"
            }, t)), i.createElement("div", {
                ref: q.bottomInset,
                className: "vkuiModalPage__bottom-inset"
            })), V && i.createElement(g.ModalDismissButton, {
                onClick: N || W.onClose
            })))))
        }
    }
    ,
    718164: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ModalPageContext: ()=>n
        });
        var n = a(667294).createContext({})
    }
    ,
    72176: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ModalPageHeader: ()=>p
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(323025)
          , c = a(119360)
          , u = a(108681)
          , d = a(718164)
          , v = a(582405)
          , m = a(346921)
          , p = function(e) {
            var t = e.children
              , a = e.separator
              , p = void 0 === a || a
              , f = e.getRef
              , h = e.className
              , g = (0,
            o._)(e, ["children", "separator", "getRef", "className"])
              , b = (0,
            c.usePlatform)()
              , k = p && b === u.Platform.VKCOM
              , C = (0,
            s.useAdaptivityWithJSMediaQueries)().isDesktop
              , _ = i.useContext(d.ModalPageContext).labelId;
            return i.createElement("div", {
                className: (0,
                l.classNames)("vkuiModalPageHeader", b !== u.Platform.VKCOM && "vkuiModalPageHeader--withGaps", C && "vkuiModalPageHeader--desktop"),
                ref: f
            }, i.createElement(v.PanelHeader, (0,
            r._)((0,
            n._)({
                className: (0,
                l.classNames)("vkuiInternalModalPageHeader__in", h)
            }, g), {
                fixed: !1,
                separator: !1,
                transparent: !0,
                typographyProps: {
                    Component: "h2",
                    id: _
                }
            }), t), k && i.createElement(m.Separator, {
                wide: !0
            }))
        }
    }
    ,
    693962: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ModalRootTouch: ()=>O
        });
        var n = a(422678)
          , r = a(148564)
          , o = a(302267)
          , i = a(975766)
          , l = a(18007)
          , s = a(772253)
          , c = a(158339)
          , u = a(262039)
          , d = a(949633)
          , v = a(667294)
          , m = a(962557)
          , p = a(633656)
          , f = a(18659)
          , h = a(212602)
          , g = a(181498)
          , b = a(504153)
          , k = a(108681)
          , C = a(495358)
          , _ = a(23220)
          , E = a(970414)
          , y = a(644029)
          , S = a(766351)
          , N = a(843718)
          , w = a(763029)
          , R = a(196999)
          , A = a(811113)
          , M = a(901159)
          , T = a(447737)
          , P = a(511571)
          , I = (0,
        y.warnOnce)("ModalRoot");
        function D(e, t) {
            return !!t && (e >= t[0] && e <= t[1])
        }
        function L(e) {
            return (0,
            p.clamp)(e, 0, 98)
        }
        var x = function(e) {
            (0,
            l._)(a, e);
            var t = (0,
            d._)(a);
            function a(e) {
                var o, l;
                return (0,
                r._)(this, a),
                o = t.call(this, e),
                (0,
                i._)((0,
                n._)(o), "documentScrolling", !1),
                (0,
                i._)((0,
                n._)(o), "maskElementRef", void 0),
                (0,
                i._)((0,
                n._)(o), "viewportRef", v.createRef()),
                (0,
                i._)((0,
                n._)(o), "maskAnimationFrame", void 0),
                (0,
                i._)((0,
                n._)(o), "modalRootContext", void 0),
                (0,
                i._)((0,
                n._)(o), "frameIds", void 0),
                (0,
                i._)((0,
                n._)(o), "restoreFocusTo", void 0),
                (0,
                i._)((0,
                n._)(o), "preventTouch", (function(e) {
                    if (!e)
                        return !1;
                    for (; e.originalEvent; )
                        e = e.originalEvent;
                    return e.preventDefault && e.preventDefault(),
                    !1
                }
                )),
                (0,
                i._)((0,
                n._)(o), "updateModalHeight", (function() {
                    var e = o.props.getModalState(o.props.activeModal);
                    e && e.type === T.ModalType.PAGE && (o.props.enteringModal ? o.waitTransitionFinish(e, (function() {
                        requestAnimationFrame((function() {
                            return o.checkPageContentHeight()
                        }
                        ))
                    }
                    )) : requestAnimationFrame((function() {
                        return o.checkPageContentHeight()
                    }
                    )))
                }
                )),
                (0,
                i._)((0,
                n._)(o), "onTouchMove", (function(e) {
                    if (!o.props.exitingModal) {
                        var t = o.props.getModalState(o.props.activeModal);
                        if (t)
                            return t.type === T.ModalType.PAGE ? o.onPageTouchMove(e, t) : t.type === T.ModalType.CARD ? o.onCardTouchMove(e, t) : void 0
                    }
                }
                )),
                (0,
                i._)((0,
                n._)(o), "onTouchEnd", (function(e) {
                    var t, a, n = o.props.getModalState(o.props.activeModal);
                    return (null === (t = n) || void 0 === t ? void 0 : t.type) === T.ModalType.PAGE ? o.onPageTouchEnd(e, n) : (null === (a = n) || void 0 === a ? void 0 : a.type) === T.ModalType.CARD ? o.onCardTouchEnd(e, n) : void 0
                }
                )),
                (0,
                i._)((0,
                n._)(o), "onScroll", (function(e) {
                    var t, a, n, r = o.props.activeModal, i = e.target;
                    if (r) {
                        var l = o.props.getModalState(r);
                        (null === (t = l) || void 0 === t ? void 0 : t.type) === T.ModalType.PAGE && (null === (n = l) || void 0 === n || null === (a = n.contentElement) || void 0 === a ? void 0 : a.contains(i)) && (l.contentScrolled = !0,
                        l.contentScrollStopTimeout && clearTimeout(l.contentScrollStopTimeout),
                        l.contentScrollStopTimeout = setTimeout((function() {
                            l.contentScrolled && (l.contentScrolled = !1)
                        }
                        ), 250))
                    }
                }
                )),
                o.state = {
                    touchDown: !1,
                    dragging: !1,
                    modalOpenedLog: []
                },
                o.maskElementRef = v.createRef(),
                o.modalRootContext = {
                    updateModalHeight: o.updateModalHeight,
                    registerModal: function(e) {
                        var t = e.id
                          , a = (0,
                        c._)(e, ["id"]);
                        return Object.assign(null !== (l = o.props.getModalState(t)) && void 0 !== l ? l : {}, a)
                    },
                    onClose: function() {
                        return o.props.onExit()
                    },
                    isInsideModal: !0
                },
                o.frameIds = {},
                o
            }
            return (0,
            o._)(a, [{
                key: "timeout",
                get: function() {
                    return this.props.platform === k.Platform.IOS ? 400 : 320
                }
            }, {
                key: "document",
                get: function() {
                    return this.props.document
                }
            }, {
                key: "window",
                get: function() {
                    return this.props.window
                }
            }, {
                key: "getModals",
                value: function() {
                    return v.Children.toArray(this.props.children)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e;
                    null === (e = this.window) || void 0 === e || e.addEventListener("resize", this.updateModalHeight, !1)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.toggleDocumentScrolling(!0),
                    this.window.removeEventListener("resize", this.updateModalHeight, !1)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this;
                    if (this.props.exitingModal && this.props.exitingModal !== e.exitingModal && this.closeModal(this.props.exitingModal),
                    this.props.enteringModal && this.props.enteringModal !== e.enteringModal) {
                        var a, n = this.props.enteringModal, r = this.props.getModalState(n);
                        this.props.onEnter(),
                        this.waitTransitionFinish(r, (function() {
                            var e;
                            (null === (e = r) || void 0 === e ? void 0 : e.innerElement) && (r.innerElement.style.transitionDelay = ""),
                            t.props.onEntered(n)
                        }
                        )),
                        (null === (a = r) || void 0 === a ? void 0 : a.innerElement) && (r.innerElement.style.transitionDelay = this.props.delayEnter ? "".concat(this.timeout, "ms") : "",
                        this.animateTranslate(r, r.translateY),
                        this.setMaskOpacity(r, 1))
                    }
                    this.props.activeModal && !e.activeModal && (this.restoreFocusTo = this.document.activeElement),
                    this.props.activeModal || this.props.exitingModal || !this.restoreFocusTo || (this.restoreFocusTo.focus(),
                    this.restoreFocusTo = null),
                    this.toggleDocumentScrolling(!this.props.activeModal && !this.props.exitingModal)
                }
            }, {
                key: "toggleDocumentScrolling",
                value: function(e) {
                    this.documentScrolling !== e && (this.documentScrolling = e,
                    e ? this.window.removeEventListener("touchmove", this.preventTouch, {
                        passive: !1
                    }) : this.window.addEventListener("touchmove", this.preventTouch, {
                        passive: !1
                    }))
                }
            }, {
                key: "checkPageContentHeight",
                value: function() {
                    var e, t, a = this.props.getModalState(this.props.activeModal);
                    if ((null === (e = a) || void 0 === e ? void 0 : e.type) === T.ModalType.PAGE && (null === (t = a) || void 0 === t ? void 0 : t.modalElement)) {
                        var n = (0,
                        s._)({}, a);
                        B(a);
                        var r = (0,
                        s._)({}, a)
                          , o = !1;
                        n.expandable === r.expandable ? n.translateYFrom !== r.translateYFrom && (o = !0) : o = !0,
                        o && this.animateTranslate(a, a.translateY)
                    }
                }
            }, {
                key: "closeModal",
                value: function(e) {
                    var t, a, n = this;
                    this.setState({
                        touchDown: !1
                    });
                    var r = this.props.getModalState(e);
                    if (r) {
                        this.state.modalOpenedLog.length || this.setState((function(t) {
                            return {
                                modalOpenedLog: (0,
                                u._)(t.modalOpenedLog).concat([e])
                            }
                        }
                        ));
                        var o, i, l, s = this.props.getModalState(this.props.activeModal), c = !!s && s.type === T.ModalType.PAGE, d = !!r && r.type === T.ModalType.PAGE;
                        this.waitTransitionFinish(r, (function() {
                            return n.props.onExited(e)
                        }
                        ));
                        var v = d && c && (null !== (o = r.translateY) && void 0 !== o ? o : 0) <= (null !== (i = null === (t = s) || void 0 === t ? void 0 : t.translateYFrom) && void 0 !== i ? i : 0) && !this.props.isBack ? (null !== (l = null === (a = s) || void 0 === a ? void 0 : a.translateYFrom) && void 0 !== l ? l : 0) + 10 : 100;
                        this.animateTranslate(r, v),
                        s ? s.id && !this.state.modalOpenedLog.includes(s.id) && (s.translateY = void 0,
                        this.setState((function(e) {
                            return {
                                modalOpenedLog: (0,
                                u._)(e.modalOpenedLog).concat([s.id])
                            }
                        }
                        ))) : (this.setMaskOpacity(r, 0),
                        this.setState({
                            modalOpenedLog: []
                        }),
                        r.translateY = void 0)
                    } else
                        e && I("closeActiveModal: модальное окно (страница) ".concat(e, " не существует"), "error")
                }
            }, {
                key: "onPageTouchMove",
                value: function(e, t) {
                    var a, n, r = e.shiftY, o = e.originalEvent, i = o.target;
                    if (e.isY) {
                        if (!(null === (a = t.innerElement) || void 0 === a ? void 0 : a.contains(i)))
                            return o.preventDefault();
                        o.stopPropagation();
                        var l, s, c = t.expandable, u = t.contentScrolled, d = t.collapsed, v = t.expanded;
                        if (!this.state.touchDown)
                            t.touchStartContentScrollTop = null !== (s = null === (l = t.contentElement) || void 0 === l ? void 0 : l.scrollTop) && void 0 !== s ? s : 0,
                            this.setState({
                                touchDown: !0
                            });
                        if (!u && (null === t.touchMovePositive && (t.touchMovePositive = r > 0),
                        !t.expandable || d || v && t.touchMovePositive && 0 === t.touchStartContentScrollTop || (null === (n = t.headerElement) || void 0 === n ? void 0 : n.contains(i)))) {
                            if (o.preventDefault(),
                            !c && r < 0 || !this.window)
                                return;
                            !this.state.dragging && this.setState({
                                dragging: !0
                            });
                            var m, p = r / this.window.innerHeight * 100, f = (0,
                            E.rubber)(p, 72, .8, this.props.platform !== k.Platform.IOS);
                            t.touchShiftYPercent = p,
                            t.translateYCurrent = L((null !== (m = t.translateY) && void 0 !== m ? m : 0) + f),
                            this.animateTranslate(t, t.translateYCurrent),
                            this.setMaskOpacity(t)
                        }
                    } else {
                        var h;
                        (null === (h = this.viewportRef.current) || void 0 === h ? void 0 : h.contains(i)) && o.preventDefault()
                    }
                }
            }, {
                key: "onCardTouchMove",
                value: function(e, t) {
                    var a, n = e.originalEvent, r = e.shiftY, o = n.target;
                    if (null === (a = t.innerElement) || void 0 === a ? void 0 : a.contains(o)) {
                        this.state.touchDown || this.setState({
                            touchDown: !0,
                            dragging: !0
                        });
                        var i, l = r / t.innerElement.offsetHeight * 100, s = (0,
                        E.rubber)(l, 72, 1.2, this.props.platform !== k.Platform.IOS);
                        t.touchShiftYPercent = l,
                        t.translateYCurrent = Math.max(0, (null !== (i = t.translateY) && void 0 !== i ? i : 0) + s),
                        this.animateTranslate(t, t.translateYCurrent),
                        this.setMaskOpacity(t)
                    }
                }
            }, {
                key: "onPageTouchEnd",
                value: function(e, t) {
                    var a, n = this, r = e.startY, o = e.shiftY;
                    if (t.contentScrolled = !1,
                    t.touchMovePositive = null,
                    this.state.dragging && this.window) {
                        var i, l, s, c, u = (r + o) / this.window.innerHeight * 100, d = null !== (i = t.translateYCurrent) && void 0 !== i ? i : 0;
                        if (d = L(d + d / e.duration * 240 * .6 * ((null !== (l = t.touchShiftYPercent) && void 0 !== l ? l : 0) < 0 ? -1 : 1)),
                        100 !== t.settlingHeight)
                            if (D(d, t.expandedRange))
                                d = null !== (c = null === (s = t.expandedRange) || void 0 === s ? void 0 : s[0]) && void 0 !== c ? c : 0;
                            else if (D(d, t.collapsedRange)) {
                                var v;
                                d = null !== (v = t.translateYFrom) && void 0 !== v ? v : 0
                            } else if (D(d, t.hiddenRange))
                                d = 100;
                            else {
                                var m;
                                d = null !== (m = t.translateYFrom) && void 0 !== m ? m : 0
                            }
                        else
                            d = D(d, [0, 25]) ? 0 : 100;
                        100 !== d && u >= 75 && (d = 100),
                        t.translateY = d,
                        t.translateYCurrent = d,
                        t.collapsed = d > 0 && d < u,
                        t.expanded = 0 === d,
                        t.hidden = 100 === d,
                        t.hidden && this.props.onExit(),
                        a = function() {
                            t.hidden || n.animateTranslate(t, t.translateY),
                            n.setMaskOpacity(t)
                        }
                    }
                    this.setState({
                        touchDown: !1,
                        dragging: !1
                    }, a)
                }
            }, {
                key: "onCardTouchEnd",
                value: function(e, t) {
                    var a, n = e.duration, r = this;
                    if (this.state.dragging) {
                        var o, i, l = null !== (o = t.translateYCurrent) && void 0 !== o ? o : 0, s = l / n * 240 * .6 * ((null !== (i = t.touchShiftYPercent) && void 0 !== i ? i : 0) < 0 ? -1 : 1);
                        l = (l = Math.max(0, l + s)) >= 30 ? 100 : 0,
                        t.translateY = l,
                        t.hidden = 100 === l,
                        t.hidden && this.props.onExit(),
                        a = function() {
                            t.hidden || r.animateTranslate(t, t.translateY),
                            r.setMaskOpacity(t)
                        }
                    }
                    this.setState({
                        touchDown: !1,
                        dragging: !1
                    }, a)
                }
            }, {
                key: "waitTransitionFinish",
                value: function(e, t) {
                    if (_.transitionEvent.supported) {
                        var a, n, r = function() {
                            var a, n;
                            null === (n = e) || void 0 === n || null === (a = n.innerElement) || void 0 === a || a.removeEventListener(_.transitionEvent.name, r),
                            t()
                        };
                        null === (n = e) || void 0 === n || null === (a = n.innerElement) || void 0 === a || a.addEventListener(_.transitionEvent.name, r)
                    } else
                        setTimeout(t, this.timeout)
                }
            }, {
                key: "animateTranslate",
                value: function(e, t) {
                    var a = "animateTranslateFrame".concat(e.id);
                    cancelAnimationFrame(this.frameIds[a]),
                    this.frameIds[a] = requestAnimationFrame((function() {
                        (0,
                        C.setTransformStyle)(e.innerElement, "translate3d(0, ".concat(t, "%, 0)"))
                    }
                    ))
                }
            }, {
                key: "setMaskOpacity",
                value: function(e) {
                    var t, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = this;
                    null === a && (null === (t = this.props.history) || void 0 === t ? void 0 : t[0]) !== e.id || (this.maskAnimationFrame && cancelAnimationFrame(this.maskAnimationFrame),
                    this.maskAnimationFrame = requestAnimationFrame((function() {
                        if (n.maskElementRef.current) {
                            var t = e.translateY
                              , r = void 0 === t ? 0 : t
                              , o = e.translateYCurrent
                              , i = null === a ? 1 - ((void 0 === o ? 0 : o) - r) / (100 - r) || 0 : a;
                            n.maskElementRef.current.style.opacity = (0,
                            p.clamp)(i, 0, 100).toString(),
                            n.maskElementRef.current.style.transitionDelay = i && n.props.delayEnter ? "".concat(n.timeout, "ms") : ""
                        }
                    }
                    )))
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this, a = this.props, n = a.activeModal, r = a.exitingModal, o = a.enteringModal, i = this.state, l = i.touchDown, c = i.dragging;
                    return n || r ? v.createElement(R.default.Provider, {
                        value: !0
                    }, v.createElement(A.ModalRootContext.Provider, {
                        value: this.modalRootContext
                    }, v.createElement(w.Touch, {
                        className: (0,
                        m.classNames)("vkuiModalRoot", (null === (e = this.props.configProvider) || void 0 === e ? void 0 : e.hasCustomPanelHeaderAfter) && "vkuiModalRoot--hasCustomPanelHeaderAfterSlot", l && (0,
                        m.classNames)("vkuiModalRoot--touched", "vkuiInternalModalRoot--touched"), !(!o && !r) && (0,
                        m.classNames)("vkuiModalRoot--switching", "vkuiInternalModalRoot--switching")),
                        onMove: this.onTouchMove,
                        onEnd: this.onTouchEnd,
                        onScroll: this.onScroll
                    }, v.createElement("div", {
                        className: "vkuiModalRoot__mask",
                        onClick: this.props.onExit,
                        ref: this.maskElementRef
                    }), v.createElement("div", {
                        className: "vkuiModalRoot__viewport",
                        ref: this.viewportRef
                    }, this.getModals().map((function(e) {
                        var a = (0,
                        b.getNavId)(e.props, I)
                          , o = t.props.getModalState(a);
                        if (a !== n && a !== r || !o)
                            return null;
                        var i = (0,
                        s._)({}, o)
                          , l = i.type === T.ModalType.PAGE
                          , u = "modal-".concat(a);
                        return v.createElement(N.FocusTrap, {
                            key: u,
                            getRootRef: function(e) {
                                var n = t.props.getModalState(a);
                                n && (n.modalElement = e)
                            },
                            onClose: t.props.onExit,
                            timeout: t.timeout,
                            className: (0,
                            m.classNames)("vkuiModalRoot__modal", c && "vkuiInternalModalRoot__modal--dragging", l && i.expandable && "vkuiInternalModalRoot__modal--expandable", l && i.collapsed && "vkuiInternalModalRoot__modal--collapsed"),
                            restoreFocus: !1
                        }, e)
                    }
                    )))))) : null
                }
            }]),
            a
        }(v.Component)
          , O = (0,
        f.withContext)((0,
        h.withPlatform)((0,
        g.withDOM)((0,
        P.withModalManager)((function(e) {
            switch (e.type) {
            case T.ModalType.PAGE:
                return e.settlingHeight = e.settlingHeight || M.MODAL_PAGE_DEFAULT_PERCENT_HEIGHT,
                B(e);
            case T.ModalType.CARD:
                return function(e) {
                    e.translateY = 0
                }(e)
            }
        }
        ))(x))), S.ConfigProviderContext, "configProvider");
        function B(e) {
            var t, a, n, r, o = e.contentElement, i = e.bottomInset, l = (null === (t = o) || void 0 === t ? void 0 : t.firstElementChild).offsetHeight + ((null === (a = i) || void 0 === a ? void 0 : a.offsetHeight) || 0), s = e.translateY;
            e.expandable = l > (null !== (r = null === (n = o) || void 0 === n ? void 0 : n.clientHeight) && void 0 !== r ? r : 0) || 100 === e.settlingHeight || e.expanded;
            var c, u, d, v, m, p = !1, f = !1;
            if (e.expandable) {
                var h, g = (c = 100 - (null !== (h = e.settlingHeight) && void 0 !== h ? h : 0)) / 2, b = 100 - c;
                d = [0, g],
                v = [g, c + b / 4],
                m = [c + b / 4, 100],
                p = c > 0,
                f = c <= 0,
                u = c
            } else {
                var k, C, _, E, y;
                d = [u = c = 100 - (l + (null !== (E = null === (k = e.headerElement) || void 0 === k ? void 0 : k.offsetHeight) && void 0 !== E ? E : 0)) / (null !== (y = null === (_ = e.innerElement) || void 0 === _ || null === (C = _.parentElement) || void 0 === C ? void 0 : C.offsetHeight) && void 0 !== y ? y : 0) * 100, u + 25],
                v = [u + 25, u + 25],
                m = [u + 25, u + 100]
            }
            (e.expandable && u > (null != s ? s : 100) || 100 === e.settlingHeight) && (u = 0),
            0 === u && (f = !0,
            p = !1),
            e.expandedRange = d,
            e.collapsedRange = v,
            e.hiddenRange = m,
            e.translateY = u,
            e.translateYFrom = c,
            e.collapsed = p,
            e.expanded = f
        }
    }
    ,
    7075: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ModalRoot: ()=>s
        });
        var n = a(667294)
          , r = a(323025)
          , o = a(909795)
          , i = a(693962)
          , l = a(973516)
          , s = function(e) {
            var t = (0,
            r.useAdaptivityWithJSMediaQueries)().isDesktop;
            (0,
            o.useScrollLock)(!!e.activeModal);
            var a = t ? l.ModalRootDesktop : i.ModalRootTouch;
            return n.createElement(a, e)
        }
    }
    ,
    811113: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ModalRootContext: ()=>s,
            useModalRegistry: ()=>c
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(667294)
          , l = a(214542)
          , s = i.createContext({
            updateModalHeight: function() {},
            registerModal: function() {},
            isInsideModal: !1
        });
        function c(e, t) {
            var a = i.useContext(s)
              , c = i.useRef({}).current;
            return (0,
            l.useIsomorphicLayoutEffect)((function() {
                if (void 0 !== e) {
                    a.registerModal((0,
                    o._)((0,
                    r._)({}, c), {
                        type: t,
                        id: e
                    }));
                    var i = Object.keys(c).reduce((function(e, t) {
                        return (0,
                        o._)((0,
                        r._)({}, e), (0,
                        n._)({}, t, null))
                    }
                    ), {
                        type: t,
                        id: e
                    });
                    return function() {
                        return a.registerModal(i)
                    }
                }
            }
            ), []),
            {
                refs: i.useRef({
                    modalElement: function(e) {
                        return c.modalElement = e
                    },
                    innerElement: function(e) {
                        return c.innerElement = e
                    },
                    headerElement: function(e) {
                        return c.headerElement = e
                    },
                    contentElement: function(e) {
                        return c.contentElement = e
                    },
                    bottomInset: function(e) {
                        return c.bottomInset = e
                    }
                }).current
            }
        }
    }
    ,
    973516: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ModalRootDesktop: ()=>k
        });
        var n = a(158339)
          , r = a(667294)
          , o = a(962557)
          , i = a(633656)
          , l = a(854193)
          , s = a(724298)
          , c = a(70743)
          , u = a(181498)
          , d = a(504153)
          , v = a(108681)
          , m = a(644029)
          , p = a(766351)
          , f = a(843718)
          , h = a(811113)
          , g = a(511571)
          , b = (0,
        m.warnOnce)("ModalRoot")
          , k = function(e) {
            var t, a = e.activeModal, m = e.children, k = e.onOpen, C = e.onOpened, _ = e.onClose, E = e.onClosed, y = r.useRef(null), S = r.useRef(void 0), N = r.useRef(void 0), w = (0,
            u.useDOM)().document, R = (0,
            p.useConfigProvider)(), A = R.hasCustomPanelHeaderAfter, M = R.platform, T = (0,
            g.useModalManager)(a, m, k, C, _, E, o.noop), P = T.activeModal, I = T.exitingModal, D = T.onExit, L = T.getModalState, x = T.enteringModal, O = T.onEnter, B = T.onEntered, z = T.onExited, F = T.history, H = T.delayEnter, V = (0,
            c.useWaitTransitionFinish)().waitTransitionFinish, Y = (0,
            s.usePrevious)({
                exitingModal: I,
                enteringModal: x,
                activeModal: P
            }), W = (0,
            l.useObjectMemo)({
                updateModalHeight: function() {},
                registerModal: function(e) {
                    var a = e.id
                      , r = (0,
                    n._)(e, ["id"]);
                    return Object.assign(null !== (t = L(a)) && void 0 !== t ? t : {}, r)
                },
                onClose: D,
                isInsideModal: !0
            }), q = M === v.Platform.IOS ? 400 : 320, G = r.Children.toArray(m), U = function(e, t) {
                var a;
                (null === (a = e) || void 0 === a ? void 0 : a.innerElement) && (e.innerElement.style.transition = "",
                e.innerElement.style.transitionDelay = t && H ? "".concat(q, "ms") : "",
                e.innerElement.style.opacity = t ? "1" : "0")
            }, X = function(e) {
                var t, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                null === a && (null === (t = F) || void 0 === t ? void 0 : t[0]) !== e.id || (S.current && cancelAnimationFrame(S.current),
                S.current = requestAnimationFrame((function() {
                    if (y.current) {
                        var t = e.translateY
                          , n = void 0 === t ? 0 : t
                          , r = e.translateYCurrent
                          , o = null === a ? 1 - ((void 0 === r ? 0 : r) - n) / (100 - n) || 0 : a;
                        y.current.style.opacity = (0,
                        i.clamp)(o, 0, 100).toString()
                    }
                }
                )))
            };
            return r.useEffect((function() {
                if (Y) {
                    var e, t, a, n;
                    if (I && I !== Y.exitingModal && (t = L(e = I)) && (P ? z(e) : requestAnimationFrame((function() {
                        var a;
                        V(null === (a = t) || void 0 === a ? void 0 : a.innerElement, (function() {
                            return z(e)
                        }
                        ), q),
                        U(t, !1),
                        X(t, 0)
                    }
                    ))),
                    x && x !== Y.enteringModal && function() {
                        if (x && Y) {
                            var e = L(x);
                            O(),
                            Y.exitingModal ? (requestAnimationFrame((function() {
                                var t;
                                (null === (t = e) || void 0 === t ? void 0 : t.innerElement) && (e.innerElement.style.transition = "none",
                                e.innerElement.style.opacity = "1",
                                X(e, 1))
                            }
                            )),
                            B(x)) : requestAnimationFrame((function() {
                                var t;
                                x == x && (V(null === (t = e) || void 0 === t ? void 0 : t.innerElement, (function() {
                                    return B(x)
                                }
                                ), q),
                                U(e, !0),
                                e && X(e, 1))
                            }
                            ))
                        }
                    }(),
                    P && !Y.activeModal)
                        N.current = null !== (n = null === (a = w) || void 0 === a ? void 0 : a.activeElement) && void 0 !== n ? n : void 0;
                    P || I || !N.current || (N.current.focus(),
                    N.current = void 0)
                }
            }
            )),
            P || I ? r.createElement(h.ModalRootContext.Provider, {
                value: W
            }, r.createElement("div", {
                className: (0,
                o.classNames)("vkuiModalRoot", A && "vkuiModalRoot--hasCustomPanelHeaderAfterSlot", "vkuiModalRoot--desktop")
            }, r.createElement("div", {
                className: "vkuiModalRoot__mask",
                ref: y,
                onClick: D
            }), r.createElement("div", {
                className: "vkuiModalRoot__viewport"
            }, G.map((function(e) {
                var t = (0,
                d.getNavId)(e.props, b);
                if (t !== P && t !== I)
                    return null;
                var a = "modal-".concat(t);
                return r.createElement(f.FocusTrap, {
                    restoreFocus: !1,
                    onClose: D,
                    timeout: q,
                    key: a,
                    className: "vkuiModalRoot__modal"
                }, e)
            }
            ))))) : null
        }
    }
    ,
    901159: (e,t,a)=>{
        "use strict";
        a.d(t, {
            MODAL_PAGE_DEFAULT_PERCENT_HEIGHT: ()=>n
        });
        var n = 75
    }
    ,
    447737: (e,t,a)=>{
        "use strict";
        var n;
        a.d(t, {
            ModalType: ()=>n
        }),
        function(e) {
            e.PAGE = "page",
            e.CARD = "card"
        }(n || (n = {}))
    }
    ,
    511571: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useModalManager: ()=>f,
            withModalManager: ()=>h
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(191963)
          , i = a(262039)
          , l = a(667294)
          , s = a(962557)
          , c = a(504153)
          , u = a(214542)
          , d = a(644029)
          , v = a(447737);
        var m = (0,
        d.warnOnce)("ModalRoot");
        function p(e, t) {
            if ("setActive" === t.type && t.id !== e.activeModal) {
                var a = t.id
                  , o = e.exitingModal || e.activeModal
                  , l = e.history ? (0,
                i._)(e.history) : []
                  , s = Boolean(a && l.includes(a));
                return null === a ? l = [] : s ? l = l.splice(0, l.indexOf(a) + 1) : l.push(a),
                {
                    activeModal: a,
                    enteringModal: null,
                    exitingModal: o,
                    history: l,
                    isBack: s
                }
            }
            return "entered" === t.type && t.id === e.enteringModal ? (0,
            r._)((0,
            n._)({}, e), {
                enteringModal: null
            }) : "exited" === t.type && t.id === e.exitingModal ? (0,
            r._)((0,
            n._)({}, e), {
                exitingModal: null
            }) : "inited" === t.type && t.id === e.activeModal ? (0,
            r._)((0,
            n._)({}, e), {
                enteringModal: t.id
            }) : e
        }
        function f(e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.noop
              , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.noop
              , d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : s.noop
              , f = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : s.noop
              , h = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : s.noop
              , g = l.useRef({}).current;
            (function(e) {
                return l.Children.toArray(e)
            }
            )(t).forEach((function(e) {
                var t = e.props
                  , a = (0,
                c.getNavId)(t, m)
                  , n = void 0 !== a && g[a] || {
                    id: null != a ? a : null
                };
                n.onOpen = e.props.onOpen,
                n.onOpened = e.props.onOpened,
                n.onClose = e.props.onClose,
                n.onClosed = e.props.onClosed,
                "number" == typeof t.settlingHeight && (n.settlingHeight = t.settlingHeight),
                null !== n.id && (g[n.id] = n)
            }
            ));
            var b = e && !g[e] ? null : e
              , k = (0,
            o._)(l.useReducer(p, {
                activeModal: b,
                enteringModal: null,
                exitingModal: null,
                history: b ? [b] : [],
                isBack: !1
            }), 2)
              , C = k[0]
              , _ = k[1];
            (0,
            u.useIsomorphicLayoutEffect)((function() {
                _({
                    type: "setActive",
                    id: null != b ? b : null
                })
            }
            ), [e]),
            (0,
            u.useIsomorphicLayoutEffect)((function() {
                C.activeModal && (h(g[C.activeModal]),
                _({
                    type: "inited",
                    id: C.activeModal
                }))
            }
            ), [C.activeModal]);
            var E = function(e) {
                var t;
                return null != e && (null === (t = g[e]) || void 0 === t ? void 0 : t.type) === v.ModalType.CARD
            }
              , y = l.useCallback((function(e) {
                if (e) {
                    var t = g[e];
                    (0,
                    s.isFunction)(t.onOpened) ? t.onOpened() : (0,
                    s.isFunction)(i) && i(e)
                }
                _({
                    type: "entered",
                    id: e
                })
            }
            ), [g, i])
              , S = l.useCallback((function(e) {
                if (e) {
                    var t = g[e];
                    (0,
                    s.isFunction)(t.onClosed) ? t.onClosed() : (0,
                    s.isFunction)(f) && f(e)
                }
                _({
                    type: "exited",
                    id: e
                })
            }
            ), [g, f])
              , N = Boolean(C.exitingModal && (E(e) || E(C.exitingModal)))
              , w = l.useCallback((function(e) {
                return e ? g[e] : void 0
            }
            ), [g]);
            return (0,
            r._)((0,
            n._)({
                onEnter: function() {
                    var e = C.activeModal && g[C.activeModal];
                    e && ((0,
                    s.isFunction)(e.onOpen) ? e.onOpen() : (0,
                    s.isFunction)(a) && e.id && a(e.id))
                },
                onEntered: y,
                onExit: function() {
                    var e = C.activeModal && g[C.activeModal];
                    e && ((0,
                    s.isFunction)(e.onClose) ? e.onClose() : (0,
                    s.isFunction)(d) && e.id && d(e.id))
                },
                onExited: S
            }, C), {
                delayEnter: N,
                getModalState: w
            })
        }
        function h() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.noop;
            return function(t) {
                return function(a) {
                    var r = f(a.activeModal, a.children, a.onOpen, a.onOpened, a.onClose, a.onClosed, e);
                    return l.createElement(t, (0,
                    n._)({}, a, r))
                }
            }
        }
    }
    ,
    456423: (e,t,a)=>{
        "use strict";
        a.d(t, {
            withModalRootContext: ()=>l
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(667294)
          , i = a(811113);
        function l(e) {
            return function(t) {
                var a = o.useContext(i.ModalRootContext).updateModalHeight;
                return o.createElement(e, (0,
                r._)((0,
                n._)({}, t), {
                    updateModalHeight: a
                }))
            }
        }
    }
    ,
    451155: (e,t,a)=>{
        "use strict";
        a.d(t, {
            NativeSelect: ()=>C
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(191963)
          , s = a(667294)
          , c = a(962557)
          , u = a(324285)
          , d = a(678988)
          , v = a(428253)
          , m = a(489026)
          , p = a(221501)
          , f = a(214542)
          , h = a(91742)
          , g = a(937188)
          , b = a(917690)
          , k = (0,
        n._)({
            none: "vkuiSelect--sizeY-none"
        }, m.SizeType.COMPACT, "vkuiSelect--sizeY-compact")
          , C = function(e) {
            var t = e.style
              , a = e.defaultValue
              , n = void 0 === a ? "" : a
              , C = e.align
              , _ = e.placeholder
              , E = e.children
              , y = e.className
              , S = e.getRef
              , N = e.getRootRef
              , w = e.disabled
              , R = e.multiline
              , A = e.selectType
              , M = void 0 === A ? "default" : A
              , T = e.status
              , P = e.icon
              , I = void 0 === P ? s.createElement(h.DropdownIcon, null) : P
              , D = e.before
              , L = e.onChange
              , x = e.value
              , O = (0,
            i._)(e, ["style", "defaultValue", "align", "placeholder", "children", "className", "getRef", "getRootRef", "disabled", "multiline", "selectType", "status", "icon", "before", "onChange", "value"])
              , B = (0,
            l._)(s.useState(""), 2)
              , z = B[0]
              , F = B[1]
              , H = (0,
            l._)(s.useState(!1), 2)
              , V = H[0]
              , Y = H[1]
              , W = (0,
            l._)((0,
            d.useEnsuredControl)({
                defaultValue: n,
                disabled: w,
                onChange: L,
                value: x
            }), 2)
              , q = W[0]
              , G = W[1]
              , U = (0,
            v.useExternRef)(S)
              , X = (0,
            u.useAdaptivity)().sizeY
              , K = void 0 === X ? "none" : X;
            return (0,
            f.useIsomorphicLayoutEffect)((function() {
                var e, t = null === (e = U.current) || void 0 === e ? void 0 : e.options[U.current.selectedIndex];
                t && (F(t.text),
                Y("" === t.value && null != _))
            }
            ), [q, E]),
            s.createElement(g.FormField, {
                Component: "label",
                className: (0,
                c.classNames)("vkuiSelect", "vkuiInternalNativeSelect", D && "vkuiSelect--hasBefore", V && "vkuiSelect--empty", R && "vkuiSelect--multiline", "center" === C && "vkuiSelect--align-center", "right" === C && "vkuiSelect--align-right", K !== m.SizeType.REGULAR && k[K], y),
                style: t,
                getRootRef: N,
                disabled: w,
                before: D,
                after: I,
                status: T,
                mode: (0,
                p.getFormFieldModeFromSelectType)(M)
            }, s.createElement("select", (0,
            o._)((0,
            r._)({}, O), {
                disabled: w,
                className: "vkuiSelect__el",
                onChange: G,
                value: q,
                ref: U
            }), _ && s.createElement("option", {
                value: ""
            }, _), E), s.createElement("div", {
                className: "vkuiSelect__container",
                "aria-hidden": !0
            }, s.createElement(b.SelectTypography, {
                className: "vkuiSelect__title",
                selectType: M
            }, z)))
        }
    }
    ,
    119501: (e,t,a)=>{
        "use strict";
        a.d(t, {
            NavTransitionProvider: ()=>l,
            useNavTransition: ()=>i
        });
        var n = a(667294)
          , r = a(854193)
          , o = n.createContext({
            entering: !1
        })
          , i = function() {
            return n.useContext(o)
        }
          , l = function(e) {
            var t = e.children
              , a = e.entering
              , l = i()
              , s = (0,
            r.useObjectMemo)({
                entering: l.entering || a
            });
            return n.createElement(o.Provider, {
                value: s
            }, t)
        }
    }
    ,
    971562: (e,t,a)=>{
        "use strict";
        a.d(t, {
            NavTransitionDirectionProvider: ()=>i
        });
        var n = a(191963)
          , r = a(667294)
          , o = r.createContext(void 0)
          , i = function(e) {
            var t = e.children
              , a = e.isBack
              , i = r.useContext(o)
              , l = void 0 !== a ? a : i
              , s = (0,
            n._)(r.useState(l), 1)[0];
            return r.createElement(o.Provider, {
                value: s
            }, t)
        }
    }
    ,
    715191: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Pagination: ()=>p
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(624879)
          , l = a(354943)
          , s = a(499758)
          , c = a(658113)
          , u = a(523323)
          , d = a(885579)
          , v = a(64850)
          , m = a(54753)
          , p = function(e) {
            var t = e.currentPage
              , a = void 0 === t ? 1 : t
              , p = e.siblingCount
              , f = void 0 === p ? 1 : p
              , h = e.boundaryCount
              , g = void 0 === h ? 1 : h
              , b = e.totalPages
              , k = void 0 === b ? 1 : b
              , C = e.disabled
              , _ = e.getPageAriaLabel
              , E = void 0 === _ ? m.getPageAriaLabelDefault : _
              , y = e.prevButtonAriaLabel
              , S = void 0 === y ? "Перейти на предыдущую страницу" : y
              , N = e.nextButtonAriaLabel
              , w = void 0 === N ? "Перейти на следующую страницу" : N
              , R = e.onChange
              , A = (0,
            r._)(e, ["currentPage", "siblingCount", "boundaryCount", "totalPages", "disabled", "getPageAriaLabel", "prevButtonAriaLabel", "nextButtonAriaLabel", "onChange"])
              , M = (0,
            s.usePagination)({
                currentPage: a,
                totalPages: k,
                siblingCount: f,
                boundaryCount: g
            })
              , T = 1 === a
              , P = a === k
              , I = o.useCallback((function() {
                R && !T && R(a - 1)
            }
            ), [a, T, R])
              , D = o.useCallback((function(e) {
                var t, a = e.currentTarget.dataset.page || "1";
                null === (t = R) || void 0 === t || t(Number(a))
            }
            ), [R])
              , L = o.useCallback((function() {
                R && !P && R(a + 1)
            }
            ), [a, P, R])
              , x = o.useCallback((function(e) {
                switch (e) {
                case "start-ellipsis":
                case "end-ellipsis":
                    return o.createElement("li", {
                        key: e
                    }, o.createElement(v.PaginationPageEllipsis, {
                        disabled: C
                    }));
                default:
                    var t = e === a;
                    return o.createElement("li", {
                        key: e
                    }, o.createElement(d.PaginationPageButton, {
                        getPageAriaLabel: E,
                        isCurrent: t,
                        onClick: D,
                        disabled: C
                    }, e))
                }
            }
            ), [a, C, E, D]);
            return o.createElement(u.RootComponent, (0,
            n._)({
                Component: "nav",
                role: "navigation",
                "aria-label": "Навигация по страницам"
            }, A), o.createElement("ul", {
                className: "vkuiPagination__list"
            }, o.createElement("li", {
                className: "vkuiPagination__prevButtonContainer"
            }, o.createElement(c.Button, {
                size: "l",
                before: o.createElement(i.Icon24ChevronCompactLeft, {
                    width: 24
                }),
                appearance: "accent",
                mode: "tertiary",
                disabled: T || C,
                "aria-label": S,
                onClick: I
            })), M.map(x), o.createElement("li", {
                className: "vkuiPagination__nextButtonContainer"
            }, o.createElement(c.Button, {
                size: "l",
                after: o.createElement(l.Icon24ChevronCompactRight, {
                    width: 24
                }),
                appearance: "accent",
                mode: "tertiary",
                disabled: P || C,
                "aria-label": w,
                onClick: L
            }))))
        }
    }
    ,
    885579: (e,t,a)=>{
        "use strict";
        a.d(t, {
            PaginationPageButton: ()=>d
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(795281)
          , s = a(754259)
          , c = a(54753)
          , u = a(913462)
          , d = function(e) {
            var t = e.isCurrent
              , a = void 0 !== t && t
              , d = e.getPageAriaLabel
              , v = void 0 === d ? c.getPageAriaLabelDefault : d
              , m = e.children
              , p = e.className
              , f = e.disabled
              , h = (0,
            r._)(e, ["isCurrent", "getPageAriaLabel", "children", "className", "disabled"])
              , g = (0,
            u.usePaginationPageClassNames)({
                isCurrent: a,
                disabled: f
            });
            return o.createElement(l.Tappable, (0,
            n._)({
                className: (0,
                i.classNames)(g, p),
                activeMode: "vkuiPaginationPage--state-active",
                hoverMode: "vkuiPaginationPage--state-hover",
                hasActive: !a,
                hasHover: !a,
                focusVisibleMode: "outside",
                "data-page": m,
                "aria-current": !!a || void 0,
                "aria-label": v(m, a),
                disabled: f
            }, h), o.createElement(s.Text, {
                normalize: !1
            }, m))
        }
    }
    ,
    64850: (e,t,a)=>{
        "use strict";
        a.d(t, {
            PaginationPageEllipsis: ()=>c
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(754259)
          , s = a(913462)
          , c = function(e) {
            var t = e.className
              , a = e.disabled
              , c = (0,
            r._)(e, ["className", "disabled"])
              , u = (0,
            s.usePaginationPageClassNames)({
                isCurrent: !1,
                disabled: a
            });
            return o.createElement(l.Text, (0,
            n._)({
                className: (0,
                i.classNames)(u, "vkuiPaginationPage--type-ellipsis", t)
            }, c), "…")
        }
    }
    ,
    913462: (e,t,a)=>{
        "use strict";
        a.d(t, {
            usePaginationPageClassNames: ()=>i
        });
        var n = a(962557)
          , r = a(324285)
          , o = a(489026);
        function i(e) {
            var t = e.isCurrent
              , a = e.disabled
              , i = (0,
            r.useAdaptivity)().sizeY
              , l = void 0 === i ? "none" : i;
            return (0,
            n.classNames)("vkuiPaginationPage", "none" === l && "vkuiPaginationPage--sizeY-none", l === o.SizeType.COMPACT && "vkuiPaginationPage--sizeY-compact", t && "vkuiPaginationPage--current", a && "vkuiPaginationPage--disabled")
        }
    }
    ,
    54753: (e,t,a)=>{
        "use strict";
        function n(e, t) {
            return t ? "".concat(e, " страница") : "Перейти на ".concat(e, " страницу")
        }
        a.d(t, {
            getPageAriaLabelDefault: ()=>n
        })
    }
    ,
    623796: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Panel: ()=>k
        });
        var n, r = a(975766), o = a(772253), i = a(414932), l = a(158339), s = a(667294), c = a(962557), u = a(324285), d = a(119360), v = a(489026), m = a(108681), p = a(338784), f = a(523323), h = a(566506), g = a(763029), b = (n = {
            none: "vkuiPanel--sizeX-none"
        },
        (0,
        r._)(n, v.SizeType.COMPACT, "vkuiPanel--sizeX-compact"),
        (0,
        r._)(n, v.SizeType.REGULAR, "vkuiPanel--sizeX-regular"),
        n), k = function(e) {
            var t = e.centered
              , a = void 0 !== t && t
              , n = e.children
              , r = (e.nav,
            (0,
            l._)(e, ["centered", "children", "nav"]))
              , v = (0,
            d.usePlatform)()
              , k = (0,
            u.useAdaptivity)().sizeX
              , C = void 0 === k ? "none" : k
              , _ = s.useContext(p.AppRootContext).layout;
            return s.createElement(f.RootComponent, (0,
            i._)((0,
            o._)({}, r), {
                baseClassName: (0,
                c.classNames)("vkuiPanel", b[C], a && "vkuiInternalPanel--centered", _ && "vkuiPanel--layoutSetting")
            }), s.createElement(g.Touch, {
                Component: h.TooltipContainer,
                className: (0,
                c.classNames)("vkuiPanel__in", "vkuiInternalPanel__in")
            }, s.createElement("div", {
                className: "vkuiPanel__in-before"
            }), a ? s.createElement("div", {
                className: "vkuiPanel__centered"
            }, n) : n, v === m.Platform.IOS && s.createElement("div", {
                className: "vkuiInternalPanel__fade"
            }), s.createElement("div", {
                className: "vkuiPanel__in-after"
            })))
        }
    }
    ,
    736956: (e,t,a)=>{
        "use strict";
        a.d(t, {
            LegacyPanelHeaderContent: ()=>s
        });
        var n = a(667294)
          , r = a(119360)
          , o = a(108681)
          , i = a(644029)
          , l = a(754259)
          , s = ((0,
        i.warnOnce)("PanelHeader"),
        function(e) {
            var t = e.children
              , a = e.Component
              , i = void 0 === a ? "span" : a
              , s = e.id;
            return (0,
            r.usePlatform)() === o.Platform.VKCOM ? n.createElement(l.Text, {
                weight: "2",
                Component: i,
                id: s
            }, t) : n.createElement(i, {
                className: "vkuiPanelHeader__content-in",
                id: s
            }, t)
        }
        );
        s.displayName = "LegacyPanelHeaderContent"
    }
    ,
    582405: (e,t,a)=>{
        "use strict";
        a.d(t, {
            PanelHeader: ()=>N
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(324285)
          , c = a(934977)
          , u = a(119360)
          , d = a(489026)
          , v = a(108681)
          , m = a(766351)
          , p = a(781959)
          , f = a(811113)
          , h = a(523323)
          , g = a(346921)
          , b = a(257451)
          , k = a(566506)
          , C = a(754259)
          , _ = a(736956)
          , E = {
            ios: (0,
            l.classNames)("vkuiPanelHeader--ios", "vkuiInternalPanelHeader--ios"),
            android: (0,
            l.classNames)("vkuiPanelHeader--android", "vkuiInternalPanelHeader--android"),
            vkcom: (0,
            l.classNames)("vkuiPanelHeader--vkcom", "vkuiInternalPanelHeader--vkcom")
        }
          , y = {
            none: "vkuiPanelHeader--sizeX-none",
            regular: "vkuiPanelHeader--sizeX-regular"
        }
          , S = function(e) {
            var t, a = e.before, r = e.after, s = e.separator, c = e.children, d = e.typographyProps, p = void 0 === d ? {} : d, h = p.Component, b = void 0 === h ? "span" : h, E = (0,
            o._)(p, ["Component"]), y = (0,
            m.useConfigProvider)(), S = y.hasCustomPanelHeaderAfter, N = y.customPanelHeaderAfterMinWidth, w = i.useContext(f.ModalRootContext).isInsideModal, R = (0,
            u.usePlatform)(), A = !S || w ? {
                children: r
            } : {
                style: {
                    minWidth: N
                }
            };
            return t = i.isValidElement(c) && c.type.displayName === _.LegacyPanelHeaderContent.displayName ? c : R === v.Platform.VKCOM ? i.createElement(C.Text, (0,
            n._)({
                weight: "2",
                Component: b
            }, E), c) : i.createElement(b, (0,
            n._)({
                className: "vkuiPanelHeader__content-in"
            }, E), c),
            i.createElement(i.Fragment, null, i.createElement(k.TooltipContainer, {
                fixed: !0,
                className: "vkuiPanelHeader__in"
            }, i.createElement("div", {
                className: (0,
                l.classNames)("vkuiPanelHeader__before", "vkuiInternalPanelHeader__before")
            }, a), i.createElement("div", {
                className: "vkuiPanelHeader__content"
            }, t), i.createElement("div", (0,
            n._)({
                className: (0,
                l.classNames)("vkuiPanelHeader__after", "vkuiInternalPanelHeader__after")
            }, A))), s && R === v.Platform.VKCOM && i.createElement(g.Separator, {
                className: "vkuiPanelHeader__separator",
                wide: !0
            }))
        }
          , N = function(e) {
            var t = e.before
              , a = e.children
              , m = e.after
              , f = e.separator
              , k = void 0 === f || f
              , C = e.visor
              , _ = void 0 === C || C
              , N = e.transparent
              , w = void 0 !== N && N
              , R = e.shadow
              , A = e.getRef
              , M = e.getRootRef
              , T = e.fixed
              , P = e.typographyProps
              , I = (0,
            o._)(e, ["before", "children", "after", "separator", "visor", "transparent", "shadow", "getRef", "getRootRef", "fixed", "typographyProps"])
              , D = (0,
            u.usePlatform)()
              , L = (0,
            s.useAdaptivity)().sizeX
              , x = void 0 === L ? "none" : L
              , O = (0,
            c.useAdaptivityConditionalRender)().sizeX
              , B = void 0 !== T ? T : D !== v.Platform.VKCOM;
            return i.createElement(h.RootComponent, (0,
            r._)((0,
            n._)({}, I), {
                baseClassName: (0,
                l.classNames)("vkuiPanelHeader", "vkuiInternalPanelHeader", E.hasOwnProperty(D) ? E[D] : E.android, w && "vkuiPanelHeader--trnsp", R && "vkuiPanelHeader--shadow", _ && (0,
                l.classNames)("vkuiPanelHeader--vis", "vkuiInternalPanelHeader--vis"), k && _ && (0,
                l.classNames)("vkuiPanelHeader--sep", "vkuiInternalPanelHeader--sep"), !t && (0,
                l.classNames)("vkuiPanelHeader--no-before", "vkuiInternalPanelHeader--no-before"), !m && "vkuiPanelHeader--no-after", B && "vkuiPanelHeader--fixed", x !== d.SizeType.COMPACT && y[x]),
                getRootRef: B ? M : A
            }), B ? i.createElement(p.FixedLayout, {
                className: (0,
                l.classNames)("vkuiPanelHeader__fixed", "vkuiInternalPanelHeader__fixed"),
                vertical: "top",
                getRootRef: A
            }, i.createElement(S, {
                before: t,
                after: m,
                separator: k,
                typographyProps: P
            }, a)) : i.createElement(S, {
                before: t,
                after: m,
                separator: k,
                typographyProps: P
            }, a), k && _ && D !== v.Platform.VKCOM && i.createElement(i.Fragment, null, O.compact && i.createElement(g.Separator, {
                className: O.compact.className
            }), O.regular && i.createElement(b.Spacing, {
                className: O.regular.className,
                size: 16
            })))
        };
        N.Content = _.LegacyPanelHeaderContent
    }
    ,
    550360: (e,t,a)=>{
        "use strict";
        a.d(t, {
            PanelHeaderBack: ()=>h
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(546129)
          , s = a(65569)
          , c = a(864032)
          , u = a(962557)
          , d = a(324285)
          , v = a(119360)
          , m = a(489026)
          , p = a(108681)
          , f = a(241073)
          , h = function(e) {
            var t = e.label
              , a = e["aria-label"]
              , h = void 0 === a ? "Назад" : a
              , g = e.className
              , b = (0,
            o._)(e, ["label", "aria-label", "className"])
              , k = (0,
            v.usePlatform)()
              , C = (0,
            d.useAdaptivity)().sizeX
              , _ = void 0 === C ? "none" : C
              , E = k === p.Platform.VKCOM || k === p.Platform.IOS
              , y = i.createElement(l.Icon28ArrowLeftOutline, null);
            switch (k) {
            case p.Platform.IOS:
                y = i.createElement(s.Icon28ChevronBack, null);
                break;
            case p.Platform.VKCOM:
                y = i.createElement(c.Icon28ChevronLeftOutline, null)
            }
            return i.createElement(f.PanelHeaderButton, (0,
            r._)((0,
            n._)({}, b), {
                className: (0,
                u.classNames)(_ === m.SizeType.COMPACT && "vkuiPanelHeaderBack--sizeX-compact", k === p.Platform.IOS && "vkuiPanelHeaderBack--ios", k === p.Platform.VKCOM && "vkuiPanelHeaderBack--vkcom", E && !!t && "vkuiPanelHeaderBack--has-label", g),
                label: E && t,
                "aria-label": h
            }), y)
        }
    }
    ,
    241073: (e,t,a)=>{
        "use strict";
        a.d(t, {
            PanelHeaderButton: ()=>h
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(119360)
          , c = a(108681)
          , u = a(644029)
          , d = a(795281)
          , v = a(754259)
          , m = a(931252)
          , p = {
            ios: "vkuiPanelHeaderButton--ios",
            android: "vkuiPanelHeaderButton--android",
            vkcom: "vkuiPanelHeaderButton--vkcom"
        }
          , f = function(e) {
            var t = e.primary
              , a = e.children
              , n = (0,
            s.usePlatform)();
            return n === c.Platform.IOS ? i.createElement(m.Title, {
                Component: "span",
                level: "3",
                weight: t ? "1" : "3"
            }, a) : i.createElement(v.Text, {
                weight: n === c.Platform.VKCOM ? void 0 : "2"
            }, a)
        }
          , h = ((0,
        u.warnOnce)("PanelHeaderButton"),
        function(e) {
            var t, a, u = e.children, v = e.primary, m = void 0 !== v && v, h = e.label, g = e.className, b = (0,
            o._)(e, ["children", "primary", "label", "className"]), k = (0,
            l.isPrimitiveReactNode)(u), C = (0,
            l.isPrimitiveReactNode)(h), _ = (0,
            s.usePlatform)();
            switch (_) {
            case c.Platform.IOS:
                t = "background",
                a = "opacity";
                break;
            case c.Platform.VKCOM:
                t = "vkuiPanelHeaderButton--hover",
                a = "vkuiPanelHeaderButton--active";
                break;
            default:
                t = "background",
                a = "background"
            }
            return i.createElement(d.Tappable, (0,
            r._)((0,
            n._)({
                Component: b.href ? "a" : "button"
            }, b), {
                hoverMode: t,
                activeEffectDelay: 200,
                activeMode: a,
                className: (0,
                l.classNames)("vkuiInternalPanelHeaderButton", "vkuiPanelHeaderButton", p.hasOwnProperty(_) ? p[_] : p.android, k && "vkuiPanelHeaderButton--primitive", !k && !C && "vkuiPanelHeaderButton--notPrimitive", g)
            }), k ? i.createElement(f, {
                primary: m
            }, u) : u, C ? i.createElement(f, {
                primary: m,
                className: "vkuiPanelHeaderButton__label"
            }, h) : h)
        }
        )
    }
    ,
    749967: (e,t,a)=>{
        "use strict";
        a.d(t, {
            PanelSpinner: ()=>s
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(474353)
          , s = i.memo((function(e) {
            var t = e.height
              , a = void 0 === t ? 96 : t
              , s = e.style
              , c = (0,
            o._)(e, ["height", "style"]);
            return i.createElement(l.Spinner, (0,
            r._)((0,
            n._)({
                size: "regular"
            }, c), {
                style: (0,
                n._)({
                    height: a
                }, s)
            }))
        }
        ));
        s.displayName = "PanelSpinner"
    }
    ,
    729814: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Placeholder: ()=>f
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(523323)
          , s = a(115446)
          , c = a(931252)
          , u = function(e) {
            var t = e.stretched
              , a = e.withPadding
              , s = void 0 === a || a
              , c = (0,
            r._)(e, ["stretched", "withPadding"]);
            return o.createElement(l.RootComponent, (0,
            n._)({
                baseClassName: (0,
                i.classNames)("vkuiPlaceholder", t && "vkuiPlaceholder--stretched", s && "vkuiPlaceholder--withPadding")
            }, c))
        }
          , d = function(e) {
            return o.createElement(l.RootComponent, (0,
            n._)({
                baseClassName: "vkuiPlaceholder__icon"
            }, e))
        }
          , v = function(e) {
            var t = e.className
              , a = (0,
            r._)(e, ["className"]);
            return o.createElement(c.Title, (0,
            n._)({
                level: "2",
                weight: "2",
                className: (0,
                i.classNames)(t, "vkuiPlaceholder__header")
            }, a))
        }
          , m = function(e) {
            var t = e.className
              , a = (0,
            r._)(e, ["className"]);
            return o.createElement(s.Headline, (0,
            n._)({
                weight: "3",
                className: (0,
                i.classNames)(t, "vkuiPlaceholder__text")
            }, a))
        }
          , p = function(e) {
            return o.createElement(l.RootComponent, (0,
            n._)({
                baseClassName: "vkuiPlaceholder__action"
            }, e))
        }
          , f = function(e) {
            var t = e.icon
              , a = e.header
              , l = e.children
              , s = e.action
              , c = e.withPadding
              , f = void 0 === c || c
              , h = (0,
            r._)(e, ["icon", "header", "children", "action", "withPadding"]);
            return o.createElement(u, (0,
            n._)({
                withPadding: f
            }, h), (0,
            i.hasReactNode)(t) && o.createElement(d, null, t), (0,
            i.hasReactNode)(a) && o.createElement(v, null, a), (0,
            i.hasReactNode)(l) && o.createElement(m, null, l), (0,
            i.hasReactNode)(s) && o.createElement(p, null, s))
        };
        f.Container = u,
        f.Icon = d,
        f.Header = v,
        f.Text = m,
        f.Actions = p
    }
    ,
    311323: (e,t,a)=>{
        "use strict";
        a.d(t, {
            PopoutRoot: ()=>v
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(181498)
          , s = a(645083)
          , c = a(523323)
          , u = function(e) {
            return i.createElement("div", (0,
            n._)({
                className: "vkuiPopoutRoot__popout"
            }, e))
        }
          , d = function(e) {
            return i.createElement("div", (0,
            n._)({
                className: "vkuiPopoutRoot__modal"
            }, e))
        }
          , v = function(e) {
            var t = e.popout
              , a = e.modal
              , v = e.children
              , m = (0,
            o._)(e, ["popout", "modal", "children"])
              , p = (0,
            l.useDOM)().document;
            return i.useEffect((function() {
                t && (0,
                l.blurActiveElement)(p)
            }
            ), [p, t]),
            i.createElement(c.RootComponent, (0,
            r._)((0,
            n._)({}, m), {
                baseClassName: "vkuiPopoutRoot"
            }), v, i.createElement(s.AppRootPortal, null, !!t && i.createElement(u, null, t), !!a && i.createElement(d, null, a)))
        }
    }
    ,
    949444: (e,t,a)=>{
        "use strict";
        a.d(t, {
            PopoutWrapper: ()=>g
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(667294)
          , s = a(962557)
          , c = a(283821)
          , u = a(119360)
          , d = a(855356)
          , v = a(181498)
          , m = a(108681)
          , p = a(523323)
          , f = {
            center: "vkuiPopoutWrapper--alignX-center",
            left: "vkuiPopoutWrapper--alignX-left",
            right: "vkuiPopoutWrapper--alignX-right"
        }
          , h = {
            center: "vkuiPopoutWrapper--alignY-center",
            top: "vkuiPopoutWrapper--alignY-top",
            bottom: "vkuiPopoutWrapper--alignY-bottom"
        }
          , g = function(e) {
            var t = e.alignY
              , a = void 0 === t ? "center" : t
              , g = e.alignX
              , b = void 0 === g ? "center" : g
              , k = e.closing
              , C = void 0 !== k && k
              , _ = e.hasMask
              , E = void 0 === _ || _
              , y = e.fixed
              , S = void 0 === y || y
              , N = e.children
              , w = e.onClick
              , R = (0,
            o._)(e, ["alignY", "alignX", "closing", "hasMask", "fixed", "children", "onClick"])
              , A = (0,
            u.usePlatform)()
              , M = (0,
            i._)(l.useState(!E), 2)
              , T = M[0]
              , P = M[1]
              , I = function(e) {
                e && "vkuianimation-full-fade-in" !== e.animationName || P(!0)
            }
              , D = (0,
            d.useTimeout)(I, A === m.Platform.IOS ? 300 : 200);
            l.useEffect((function() {
                !T && D.set()
            }
            ), [D, T]);
            var L = (0,
            v.useDOM)().window;
            return (0,
            c.useGlobalEventListener)(L, "touchmove", (function(e) {
                return e.preventDefault()
            }
            ), {
                passive: !1
            }),
            l.createElement(p.RootComponent, (0,
            r._)((0,
            n._)({}, R), {
                baseClassName: (0,
                s.classNames)("vkuiPopoutWrapper", h[a], f[b], C && "vkuiPopoutWrapper--closing", T && "vkuiPopoutWrapper--opened", S && "vkuiPopoutWrapper--fixed", E && "vkuiPopoutWrapper--masked"),
                onAnimationEnd: T ? void 0 : I
            }), l.createElement("div", {
                className: "vkuiPopoutWrapper__container"
            }, l.createElement("div", {
                className: "vkuiPopoutWrapper__overlay",
                onClick: w
            }), l.createElement("div", {
                className: "vkuiPopoutWrapper__content"
            }, N)))
        }
    }
    ,
    531303: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Popover: ()=>g
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(667294)
          , s = a(962557)
          , c = a(151571)
          , u = a(428253)
          , d = a(283821)
          , v = a(22539)
          , m = a(855356)
          , p = a(181498)
          , f = a(843718)
          , h = a(59214)
          , g = function(e) {
            var t = e.action
              , a = void 0 === t ? "click" : t
              , g = e.shown
              , b = e.showDelay
              , k = void 0 === b ? 150 : b
              , C = e.hideDelay
              , _ = void 0 === C ? 150 : C
              , E = e.offsetDistance
              , y = void 0 === E ? 8 : E
              , S = e.content
              , N = e.children
              , w = e.style
              , R = e.className
              , A = e.getRef
              , M = e.onShownChange
              , T = e.restoreFocus
              , P = void 0 === T || T
              , I = (0,
            o._)(e, ["action", "shown", "showDelay", "hideDelay", "offsetDistance", "content", "children", "style", "className", "getRef", "onShownChange", "restoreFocus"])
              , D = (0,
            p.useDOM)().document
              , L = "hover" === a
              , x = l.useRef(!1)
              , O = (0,
            i._)(l.useState(g || !1), 2)
              , B = O[0]
              , z = O[1]
              , F = (0,
            i._)(l.useState(null), 2)
              , H = F[0]
              , V = F[1]
              , Y = "boolean" == typeof g ? g : B
              , W = (0,
            u.useExternRef)(V, A)
              , q = (0,
            i._)((0,
            v.usePatchChildrenRef)(N), 2)
              , G = q[0]
              , U = q[1]
              , X = function(e) {
                "boolean" != typeof g && z(e),
                "function" == typeof M && M(e)
            }
              , K = (0,
            m.useTimeout)((function() {
                return X(!0)
            }
            ), k)
              , j = (0,
            m.useTimeout)((function() {
                return X(!1)
            }
            ), _)
              , Q = function() {
                x.current = !1,
                K.clear(),
                j.set()
            }
              , J = function() {
                X(!1)
            };
            (0,
            d.useGlobalEventListener)(D, "click", (function(e) {
                var t;
                !H || (null === (t = G.current) || void 0 === t ? void 0 : t.contains(e.target)) || H.contains(e.target) || X(!1)
            }
            ), {
                capture: !0,
                passive: !0
            });
            var Z = (0,
            c.useEventListener)("mouseenter", (function() {
                x.current = !0,
                j.clear(),
                K.set()
            }
            ))
              , $ = (0,
            c.useEventListener)("click", (function() {
                x.current && Y || X(!Y)
            }
            ))
              , ee = (0,
            c.useEventListener)("mouseleave", Q);
            return l.useEffect((function() {
                G.current && $.add(G.current)
            }
            ), [G, $]),
            l.useEffect((function() {
                if (G.current)
                    return L && (Z.add(G.current),
                    ee.add(G.current)),
                    function() {
                        Z.remove(),
                        ee.remove()
                    }
            }
            ), [G, L, Z, ee]),
            l.createElement(l.Fragment, null, U, Y && l.createElement(h.Popper, (0,
            r._)((0,
            n._)({}, I), {
                className: (0,
                s.classNames)("vkuiPopover", R),
                targetRef: G,
                getRef: W,
                offsetDistance: y,
                style: (0,
                r._)((0,
                n._)({}, w), {
                    "--vkui_internal--popover_safe_zone_padding": "".concat(y, "px")
                }),
                renderContent: function(e) {
                    var t = e.className;
                    return l.createElement(f.FocusTrap, {
                        className: (0,
                        s.classNames)("vkuiPopover__in", t),
                        onClose: J,
                        restoreFocus: P
                    }, S)
                },
                onMouseOver: L ? j.clear : void 0,
                onMouseOut: L ? Q : void 0
            })))
        }
    }
    ,
    59214: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Popper: ()=>k
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(262039)
          , s = a(667294)
          , c = a(428253)
          , u = a(266479)
          , d = a(185983)
          , v = a(801371)
          , m = a(178624)
          , p = a(214542)
          , f = a(645083)
          , h = a(842760)
          , g = a(136808)
          , b = a(523323)
          , k = function(e) {
            var t, a = e.targetRef, k = e.children, C = e.getRef, _ = e.placement, E = void 0 === _ ? "bottom-start" : _, y = e.onPlacementChange, S = e.arrow, N = e.arrowHeight, w = void 0 === N ? h.DEFAULT_ARROW_HEIGHT : N, R = e.arrowPadding, A = void 0 === R ? h.DEFAULT_ARROW_PADDING : R, M = e.arrowClassName, T = e.ArrowIcon, P = void 0 === T ? h.DefaultIcon : T, I = e.sameWidth, D = e.offsetDistance, L = void 0 === D ? 8 : D, x = e.offsetSkidding, O = void 0 === x ? 0 : x, B = e.forcePortal, z = void 0 === B || B, F = e.portalRoot, H = e.autoUpdateOnTargetResize, V = void 0 !== H && H, Y = e.style, W = e.customMiddlewares, q = e.renderContent, G = e.getRootRef, U = e.hideWhenReferenceHidden, X = (0,
            o._)(e, ["targetRef", "children", "getRef", "placement", "onPlacementChange", "arrow", "arrowHeight", "arrowPadding", "arrowClassName", "ArrowIcon", "sameWidth", "offsetDistance", "offsetSkidding", "forcePortal", "portalRoot", "autoUpdateOnTargetResize", "style", "customMiddlewares", "renderContent", "getRootRef", "hideWhenReferenceHidden"]), K = (0,
            i._)(s.useState(null), 2), j = K[0], Q = K[1], J = (0,
            u.checkIsNotAutoPlacement)(E), Z = s.useMemo((function() {
                var e, t = [(0,
                d.offset)({
                    crossAxis: O,
                    mainAxis: S ? L + w : L
                })];
                (J ? t.push((0,
                d.flip)()) : t.push((0,
                d.autoPlacement)({
                    alignment: (0,
                    u.getAutoPlacementAlign)(E)
                })),
                t.push((0,
                d.shift)()),
                I && t.push((0,
                d.size)({
                    apply: function(e) {
                        var t = e.rects
                          , a = e.elements;
                        Object.assign(a.floating.style, {
                            width: "".concat(t.reference.width, "px")
                        })
                    }
                })),
                W) && (e = t).push.apply(e, (0,
                l._)(W));
                return S && t.push((0,
                v.arrow)({
                    element: j,
                    padding: A
                })),
                U && t.push((0,
                d.hide)()),
                t
            }
            ), [O, j, S, w, A, L, J, I, W, E, U]), $ = (0,
            v.useFloating)({
                placement: J ? E : void 0,
                middleware: Z,
                whileElementsMounted: function() {
                    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                        t[a] = arguments[a];
                    return m.autoUpdateFloatingElement.apply(void 0, (0,
                    l._)(t).concat([{
                        elementResize: V
                    }]))
                }
            }), ee = $.x, te = $.y, ae = $.strategy, ne = $.placement, re = $.refs, oe = $.middlewareData, ie = oe.arrow, le = oe.hide, se = (0,
            c.useExternRef)(re.setFloating, C, G);
            (0,
            p.useIsomorphicLayoutEffect)((function() {
                re.setReference(a.current)
            }
            ), [re, a]),
            (0,
            p.useIsomorphicLayoutEffect)((function() {
                ne && y && y({
                    placement: ne
                })
            }
            ), [y, ne]);
            var ce = s.createElement(b.RootComponent, (0,
            r._)((0,
            n._)({}, X), {
                baseClassName: "vkuiPopper",
                getRootRef: se,
                style: (0,
                n._)({}, Y, (0,
                u.convertFloatingDataToReactCSSProperties)(ae, ee, te, I ? null : void 0), (null === (t = le) || void 0 === t ? void 0 : t.referenceHidden) && {
                    visibility: "hidden"
                })
            }), S && s.createElement(g.PopperArrow, {
                coords: ie,
                placement: ne,
                arrowClassName: M,
                getRootRef: Q,
                Icon: P
            }), q ? q({
                className: ""
            }) : k);
            return s.createElement(f.AppRootPortal, {
                forcePortal: z,
                portalRoot: F
            }, ce)
        }
    }
    ,
    842760: (e,t,a)=>{
        "use strict";
        a.d(t, {
            DEFAULT_ARROW_HEIGHT: ()=>o,
            DEFAULT_ARROW_PADDING: ()=>i,
            DefaultIcon: ()=>s
        });
        var n = a(772253)
          , r = a(667294)
          , o = 8
          , i = 10
          , l = o + 1
          , s = function(e) {
            return r.createElement("svg", (0,
            n._)({
                width: 20,
                height: l,
                viewBox: "0 0 ".concat(20, " ").concat(l),
                xmlns: "http://www.w3.org/2000/svg"
            }, e), r.createElement("path", {
                d: "M10 0c3 0 6 8 10 8v1H0V8c3.975 0 7-8 10-8Z",
                fill: "currentColor"
            }))
        }
    }
    ,
    136808: (e,t,a)=>{
        "use strict";
        a.d(t, {
            PopperArrow: ()=>s
        });
        var n = a(191963)
          , r = a(667294)
          , o = a(962557)
          , i = a(842760)
          , l = {
            right: "vkuiPopperArrow--placement-right",
            bottom: "vkuiPopperArrow--placement-bottom",
            left: "vkuiPopperArrow--placement-left"
        }
          , s = function(e) {
            var t = e.coords
              , a = e.arrowClassName
              , s = e.placement
              , c = e.getRootRef
              , u = e.Icon
              , d = void 0 === u ? i.DefaultIcon : u
              , v = (0,
            n._)(function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    x: 0,
                    y: 0
                };
                return e.startsWith("top") ? ["bottom", {
                    top: "100%",
                    left: t.x
                }] : e.startsWith("right") ? ["left", {
                    top: t.y,
                    left: 0
                }] : e.startsWith("bottom") ? [void 0, {
                    bottom: "100%",
                    left: t.x
                }] : ["right", {
                    top: t.y,
                    right: 0
                }]
            }(s, t), 2)
              , m = v[0]
              , p = v[1];
            return r.createElement("div", {
                ref: c,
                style: p,
                className: (0,
                o.classNames)("vkuiPopperArrow", m && l[m])
            }, r.createElement(d, {
                className: (0,
                o.classNames)("vkuiPopperArrow__in", a)
            }))
        }
    }
    ,
    571042: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Progress: ()=>d
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(633656)
          , c = a(523323)
          , u = {
            accent: "vkuiProgress--appearance-accent",
            positive: "vkuiProgress--appearance-positive",
            negative: "vkuiProgress--appearance-negative"
        };
        var d = function(e) {
            var t = e.value
              , a = void 0 === t ? 0 : t
              , d = e.appearance
              , v = void 0 === d ? "accent" : d
              , m = e.height
              , p = e.style
              , f = (0,
            o._)(e, ["value", "appearance", "height", "style"])
              , h = (0,
            s.clamp)(a, 0, 100)
              , g = "".concat(h, " / ").concat(100)
              , b = function(e, t) {
                var a = function(e) {
                    return e ? {
                        height: e,
                        borderRadius: e / 2
                    } : void 0
                }(e);
                return a ? (0,
                n._)({}, t, a) : t
            }(m, p);
            return i.createElement(c.RootComponent, (0,
            r._)((0,
            n._)({
                "aria-valuenow": a,
                title: g,
                style: b
            }, f), {
                role: "progressbar",
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                baseClassName: (0,
                l.classNames)("vkuiProgress", u[v])
            }), i.createElement("div", {
                className: "vkuiProgress__in",
                style: {
                    width: "".concat(h, "%")
                }
            }))
        }
    }
    ,
    176469: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Radio: ()=>k
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(667294)
          , s = a(962557)
          , c = a(324285)
          , u = a(119360)
          , d = a(489026)
          , v = a(108681)
          , m = a(795281)
          , p = a(894872)
          , f = a(754259)
          , h = a(516511)
          , g = (0,
        n._)({
            none: "vkuiRadio--sizeY-none"
        }, d.SizeType.COMPACT, "vkuiRadio--sizeY-compact")
          , b = function(e) {
            return l.createElement("svg", (0,
            r._)({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                "aria-hidden": !0
            }, e), l.createElement("circle", {
                cx: "12",
                cy: "12",
                r: "11",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "none"
            }), l.createElement("circle", {
                cx: "12",
                cy: "12",
                r: "7.5",
                className: "vkuiRadio__pin",
                fill: "currentColor"
            }))
        }
          , k = function(e) {
            var t = e.children
              , a = e.description
              , n = e.style
              , k = e.className
              , C = e.getRootRef
              , _ = e.titleAfter
              , E = e.getRef
              , y = (0,
            i._)(e, ["children", "description", "style", "className", "getRootRef", "titleAfter", "getRef"])
              , S = (0,
            u.usePlatform)()
              , N = (0,
            c.useAdaptivity)().sizeY
              , w = void 0 === N ? "none" : N;
            return l.createElement(m.Tappable, {
                Component: "label",
                style: n,
                className: (0,
                s.classNames)("vkuiRadio", w !== d.SizeType.REGULAR && g[w], k),
                activeEffectDelay: S === v.Platform.IOS ? 100 : m.ACTIVE_EFFECT_DELAY,
                disabled: y.disabled,
                getRootRef: C
            }, l.createElement(h.VisuallyHidden, (0,
            o._)((0,
            r._)({}, y), {
                Component: "input",
                type: "radio",
                getRootRef: E,
                className: "vkuiRadio__input"
            })), l.createElement("div", {
                className: "vkuiRadio__container"
            }, l.createElement(b, {
                className: "vkuiRadio__icon"
            }), l.createElement("div", {
                className: "vkuiRadio__content"
            }, l.createElement("div", {
                className: "vkuiRadio__title"
            }, l.createElement(f.Text, null, t), l.createElement("div", {
                className: "vkuiRadio__titleAfter"
            }, _)), (0,
            s.hasReactNode)(a) && l.createElement(p.Footnote, {
                className: "vkuiRadio__description"
            }, a))))
        }
    }
    ,
    240762: (e,t,a)=>{
        "use strict";
        a.d(t, {
            RadioGroup: ()=>s
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(523323)
          , s = function(e) {
            var t = e.mode
              , a = void 0 === t ? "vertical" : t
              , s = (0,
            r._)(e, ["mode"]);
            return o.createElement(l.RootComponent, (0,
            n._)({
                baseClassName: (0,
                i.classNames)("vkuiRadioGroup", "vkuiInternalRadioGroup", "horizontal" === a && "vkuiRadioGroup--mode-horizontal")
            }, s))
        }
    }
    ,
    594735: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Removable: ()=>k
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(667294)
          , s = a(315954)
          , c = a(962557)
          , u = a(283821)
          , d = a(119360)
          , v = a(181498)
          , m = a(108681)
          , p = a(256631)
          , f = a(600245)
          , h = a(523323)
          , g = a(795281)
          , b = function(e) {
            var t = e.onRemove
              , a = e.removePlaceholder
              , n = e.removePlaceholderString
              , r = e.children
              , o = (0,
            v.useDOM)().window
              , s = l.useRef(null)
              , d = l.useRef(!0)
              , m = (0,
            i._)(l.useState(0), 2)
              , p = m[0]
              , h = m[1];
            (0,
            u.useGlobalEventListener)(o, "click", (function() {
                p > 0 && h(0)
            }
            ), {
                capture: !0
            });
            return l.createElement("div", {
                className: (0,
                c.classNames)("vkuiRemovable__content", "vkuiInternalRemovable__content"),
                style: {
                    transform: "translateX(-".concat(null != p ? p : 0, "px)")
                },
                onTransitionEnd: function() {
                    var e, t;
                    p > 0 ? null === (t = s) || void 0 === t || null === (e = t.current) || void 0 === e || e.focus() : d.current = !0
                }
            }, l.createElement(f.IconButton, {
                hasActive: !1,
                hasHover: !1,
                "aria-label": n,
                className: (0,
                c.classNames)("vkuiRemovable__action", "vkuiRemovable__toggle"),
                onClick: function(e) {
                    if (e.stopPropagation(),
                    s.current) {
                        var t = s.current.offsetWidth;
                        d.current = !1,
                        h(t)
                    }
                },
                disabled: p > 0
            }, l.createElement("i", {
                className: "vkuiRemovable__toggle-in",
                role: "presentation"
            })), r, l.createElement("span", {
                className: "vkuiRemovable__offset",
                "aria-hidden": !0
            }), l.createElement(g.Tappable, {
                Component: "button",
                hasActive: !1,
                hasHover: !1,
                disabled: d.current,
                getRootRef: s,
                className: "vkuiRemovable__remove",
                onClick: t
            }, l.createElement("span", {
                className: "vkuiRemovable__remove-in"
            }, a)))
        }
          , k = function(e) {
            var t = e.children
              , a = e.onRemove
              , i = void 0 === a ? c.noop : a
              , u = e.removePlaceholder
              , v = void 0 === u ? "Удалить" : u
              , g = e.align
              , k = void 0 === g ? "center" : g
              , C = e.indent
              , _ = void 0 !== C && C
              , E = (0,
            o._)(e, ["children", "onRemove", "removePlaceholder", "align", "indent"])
              , y = (0,
            d.usePlatform)()
              , S = function(e) {
                e.preventDefault(),
                i(e)
            }
              , N = (0,
            p.getTitleFromChildren)(v);
            return l.createElement(h.RootComponent, (0,
            r._)((0,
            n._)({}, E), {
                baseClassName: (0,
                c.classNames)(y === m.Platform.IOS && "vkuiRemovable--ios", "start" === k && "vkuiRemovable--align-start", _ && "vkuiRemovable--indent")
            }), y !== m.Platform.IOS && l.createElement("div", {
                className: (0,
                c.classNames)("vkuiRemovable__content", "vkuiInternalRemovable__content")
            }, t, l.createElement(f.IconButton, {
                activeMode: "opacity",
                hoverMode: "opacity",
                className: "vkuiRemovable__action",
                onClick: S,
                "aria-label": N
            }, l.createElement(s.Icon24Cancel, {
                role: "presentation"
            })), l.createElement("span", {
                className: "vkuiRemovable__offset",
                "aria-hidden": !0
            })), y === m.Platform.IOS && l.createElement(b, {
                onRemove: S,
                removePlaceholder: v,
                removePlaceholderString: N
            }, t))
        }
    }
    ,
    54679: (e,t,a)=>{
        "use strict";
        a.d(t, {
            RichCell: ()=>f
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(667294)
          , s = a(962557)
          , c = a(324285)
          , u = a(489026)
          , d = a(795281)
          , v = a(243912)
          , m = a(236091)
          , p = (0,
        n._)({
            none: "vkuiRichCell--sizeY-none"
        }, u.SizeType.COMPACT, "vkuiRichCell--sizeY-compact")
          , f = function(e) {
            var t = e.subhead
              , a = e.children
              , n = e.text
              , m = e.caption
              , f = e.before
              , h = e.after
              , g = e.afterCaption
              , b = e.bottom
              , k = e.actions
              , C = e.multiline
              , _ = e.className
              , E = (0,
            i._)(e, ["subhead", "children", "text", "caption", "before", "after", "afterCaption", "bottom", "actions", "multiline", "className"])
              , y = (0,
            c.useAdaptivity)().sizeY
              , S = void 0 === y ? "none" : y;
            return l.createElement(d.Tappable, (0,
            o._)((0,
            r._)({}, E), {
                className: (0,
                s.classNames)("vkuiRichCell", !C && "vkuiRichCell--text-ellipsis", S !== u.SizeType.REGULAR && p[S], _)
            }), f && l.createElement("div", {
                className: "vkuiRichCell__before"
            }, f), l.createElement("div", {
                className: "vkuiRichCell__in"
            }, l.createElement("div", {
                className: "vkuiRichCell__content"
            }, l.createElement("div", {
                className: "vkuiRichCell__content-before"
            }, t && l.createElement(v.Subhead, {
                Component: "div",
                className: "vkuiRichCell__subhead"
            }, t), l.createElement("div", {
                className: "vkuiRichCell__children"
            }, a), n && l.createElement("div", {
                className: "vkuiRichCell__text"
            }, n), m && l.createElement(v.Subhead, {
                Component: "div",
                className: "vkuiRichCell__caption"
            }, m)), (h || g) && l.createElement("div", {
                className: "vkuiRichCell__content-after"
            }, h && l.createElement("div", {
                className: "vkuiRichCell__after-children"
            }, h), g && l.createElement("div", {
                className: "vkuiRichCell__after-caption"
            }, g))), b && l.createElement("div", {
                className: "vkuiRichCell__bottom"
            }, b), k && l.createElement("div", {
                className: "vkuiRichCell__actions"
            }, k)))
        };
        f.Icon = m.RichCellIcon
    }
    ,
    236091: (e,t,a)=>{
        "use strict";
        a.d(t, {
            RichCellIcon: ()=>i
        });
        var n = a(772253)
          , r = a(667294)
          , o = a(523323)
          , i = function(e) {
            return r.createElement(o.RootComponent, (0,
            n._)({
                baseClassName: "vkuiRichCellIcon"
            }, e))
        }
    }
    ,
    847829: (e,t,a)=>{
        "use strict";
        a.d(t, {
            RichTooltip: ()=>c
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(235030)
          , s = {
            accent: "vkuiRichTooltip--appearance-accent",
            white: "vkuiRichTooltip--appearance-white",
            black: "vkuiRichTooltip--appearance-black",
            inversion: "vkuiRichTooltip--appearance-inversion"
        }
          , c = function(e) {
            var t = e.children
              , a = e.arrow
              , c = void 0 === a || a
              , u = e.appearance
              , d = void 0 === u ? "neutral" : u
              , v = e.className
              , m = (0,
            r._)(e, ["children", "arrow", "appearance", "className"]);
            return o.createElement(l.HoverPopper, (0,
            n._)({
                className: (0,
                i.classNames)("vkuiRichTooltip", "neutral" !== d && s[d], v),
                arrow: c,
                arrowClassName: "vkuiRichTooltip__arrow"
            }, m), t)
        }
    }
    ,
    523323: (e,t,a)=>{
        "use strict";
        a.d(t, {
            RootComponent: ()=>l
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = function(e) {
            var t = e.Component
              , a = void 0 === t ? "div" : t
              , l = e.baseClassName
              , s = e.className
              , c = e.getRootRef
              , u = (0,
            r._)(e, ["Component", "baseClassName", "className", "getRootRef"]);
            return o.createElement(a, (0,
            n._)({
                ref: c,
                className: (0,
                i.classNames)(l, s)
            }, u))
        }
    }
    ,
    888048: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Icon48CancelCircle: ()=>o
        });
        var n = a(772253)
          , r = a(667294)
          , o = function(e) {
            return r.createElement("svg", (0,
            n._)({
                className: "vkuiIcon",
                width: "48",
                height: "48",
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), r.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Zm-10.08-4.33a1.125 1.125 0 0 0-1.59-1.59L24 22.409l-4.33-4.33a1.125 1.125 0 0 0-1.59 0l-.101.116a1.125 1.125 0 0 0 .1 1.476L22.41 24l-4.33 4.33a1.125 1.125 0 0 0 1.591 1.59L24 25.591l4.33 4.33c.439.439 1.151.439 1.59 0l.101-.116a1.125 1.125 0 0 0-.1-1.476L25.59 24l4.33-4.33Z",
                fill: "currentColor"
            }))
        }
    }
    ,
    817137: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Icon48DoneOutline: ()=>o
        });
        var n = a(772253)
          , r = a(667294)
          , o = function(e) {
            return r.createElement("svg", (0,
            n._)({
                className: "vkuiIcon",
                width: "48",
                height: "48",
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), r.createElement("path", {
                d: "M9 24L19 34L39 14",
                stroke: "currentColor",
                strokeWidth: "3.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }))
        }
    }
    ,
    106139: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ScreenSpinner: ()=>m
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(315954)
          , l = a(962557)
          , s = a(909795)
          , c = a(949444)
          , u = a(474353)
          , d = a(888048)
          , v = a(817137)
          , m = function(e) {
            var t = e.style
              , a = e.className
              , m = e.state
              , p = void 0 === m ? "loading" : m
              , f = e.size
              , h = void 0 === f ? "large" : f
              , g = e["aria-label"]
              , b = void 0 === g ? "Пожалуйста, подождите..." : g
              , k = e.onClick
              , C = (0,
            r._)(e, ["style", "className", "state", "size", "aria-label", "onClick"])
              , _ = "done" === p || "error" === p
              , E = {
                loading: function() {
                    return null
                },
                cancelable: i.Icon24Cancel,
                done: v.Icon48DoneOutline,
                error: d.Icon48CancelCircle
            }[p];
            return (0,
            s.useScrollLock)(),
            o.createElement(c.PopoutWrapper, {
                hasMask: !1,
                className: (0,
                l.classNames)("vkuiScreenSpinner", "cancelable" === p && "vkuiScreenSpinner--clickable", a),
                style: t
            }, o.createElement("div", {
                className: "vkuiScreenSpinner__container",
                onClick: k
            }, o.createElement(u.Spinner, (0,
            n._)({
                className: (0,
                l.classNames)("vkuiScreenSpinner__spinner", _ && "vkuiScreenSpinner__spinner--hidden"),
                size: h,
                "aria-label": b
            }, C)), o.createElement("div", {
                className: (0,
                l.classNames)("vkuiScreenSpinner__icon", "done" === p && "vkuiScreenSpinner__icon--state-done")
            }, o.createElement(E, null))))
        }
    }
    ,
    427730: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ScrollArrow: ()=>f
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(849081)
          , l = a(364548)
          , s = a(624879)
          , c = a(506281)
          , u = a(962557)
          , d = a(523323)
          , v = {
            m: "vkuiScrollArrow--size-m",
            l: "vkuiScrollArrow--size-l"
        }
          , m = {
            left: "vkuiScrollArrow--direction-left",
            right: "vkuiScrollArrow--direction-right"
        }
          , p = function(e) {
            var t = e.size
              , a = e.direction;
            return "m" === t ? "left" === a ? o.createElement(i.Icon16ChevronLeft, null) : o.createElement(l.Icon16Chevron, null) : "left" === a ? o.createElement(s.Icon24ChevronCompactLeft, null) : o.createElement(c.Icon24Chevron, null)
        }
          , f = function(e) {
            var t = e.size
              , a = void 0 === t ? "l" : t
              , i = e.offsetY
              , l = e.direction
              , s = e.children
              , c = void 0 === s ? o.createElement(p, {
                direction: l,
                size: a
            }) : s
              , f = (0,
            r._)(e, ["size", "offsetY", "direction", "children"]);
            return o.createElement(d.RootComponent, (0,
            n._)({
                Component: "button",
                type: "button",
                baseClassName: (0,
                u.classNames)("vkuiScrollArrow", v[a], m[l])
            }, f), o.createElement("span", {
                className: "vkuiScrollArrow__icon",
                style: i ? {
                    top: i
                } : void 0
            }, c))
        }
    }
    ,
    616852: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Search: ()=>y
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(667294)
          , s = a(195192)
          , c = a(858016)
          , u = a(315954)
          , d = a(962557)
          , v = a(324285)
          , m = a(440981)
          , p = a(678988)
          , f = a(428253)
          , h = a(119360)
          , g = a(489026)
          , b = a(108681)
          , k = a(970414)
          , C = a(658113)
          , _ = a(600245)
          , E = a(115446)
          , y = function(e) {
            var t = e.before
              , a = void 0 === t ? l.createElement(s.Icon16SearchOutline, null) : t
              , y = e.className
              , S = e.defaultValue
              , N = void 0 === S ? "" : S
              , w = e.placeholder
              , R = void 0 === w ? "Поиск" : w
              , A = e.after
              , M = void 0 === A ? "Отмена" : A
              , T = e.getRef
              , P = e.icon
              , I = e.onIconClick
              , D = void 0 === I ? d.noop : I
              , L = e.style
              , x = e.autoComplete
              , O = void 0 === x ? "off" : x
              , B = e.onChange
              , z = e.value
              , F = e.iconAriaLabel
              , H = e.clearAriaLabel
              , V = void 0 === H ? "Очистить" : H
              , Y = e.noPadding
              , W = e.getRootRef
              , q = (0,
            o._)(e, ["before", "className", "defaultValue", "placeholder", "after", "getRef", "icon", "onIconClick", "style", "autoComplete", "onChange", "value", "iconAriaLabel", "clearAriaLabel", "noPadding", "getRootRef"])
              , G = (0,
            f.useExternRef)(T)
              , U = (0,
            m.useBooleanState)(!1)
              , X = U.value
              , K = U.setTrue
              , j = U.setFalse
              , Q = (0,
            i._)((0,
            p.useEnsuredControl)({
                defaultValue: N,
                onChange: B,
                value: z
            }), 2)
              , J = Q[0]
              , Z = Q[1]
              , $ = (0,
            v.useAdaptivity)().sizeY
              , ee = void 0 === $ ? "none" : $
              , te = (0,
            h.usePlatform)()
              , ae = l.useCallback((function() {
                var e, t, a;
                null === (t = null === (e = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) || void 0 === e ? void 0 : e.set) || void 0 === t || t.call(G.current, "");
                var n = new Event("input",{
                    bubbles: !0
                });
                null === (a = G.current) || void 0 === a || a.dispatchEvent(n)
            }
            ), [G])
              , ne = l.useCallback((function(e) {
                return D(e.originalEvent)
            }
            ), [D])
              , re = l.useCallback((function(e) {
                var t;
                e.originalEvent.preventDefault(),
                null === (t = G.current) || void 0 === t || t.focus(),
                (0,
                k.touchEnabled)() && ae()
            }
            ), [G, ae]);
            return l.createElement("div", {
                className: (0,
                d.classNames)("vkuiInternalSearch", "vkuiSearch", "none" === ee && "vkuiSearch--sizeY-none", ee === g.SizeType.COMPACT && "vkuiSearch--sizeY-compact", X && "vkuiSearch--focused", J && "vkuiSearch--has-value", M && "vkuiSearch--has-after", P && "vkuiSearch--has-icon", q.disabled && "vkuiSearch--disabled", !Y && "vkuiSearch--withPadding", y),
                ref: W,
                style: L
            }, l.createElement("div", {
                className: "vkuiSearch__field"
            }, l.createElement("label", {
                className: "vkuiSearch__control"
            }, a, l.createElement(E.Headline, (0,
            r._)((0,
            n._)({
                Component: "input",
                type: "search",
                level: "1",
                weight: "3"
            }, q), {
                placeholder: R,
                autoComplete: O,
                getRootRef: G,
                className: "vkuiSearch__input",
                onFocus: function(e) {
                    K(),
                    q.onFocus && q.onFocus(e)
                },
                onBlur: function(e) {
                    j(),
                    q.onBlur && q.onBlur(e)
                },
                onChange: Z,
                value: J
            }))), l.createElement("div", {
                className: "vkuiSearch__icons"
            }, P && l.createElement(_.IconButton, {
                hoverMode: "opacity",
                onStart: ne,
                className: "vkuiSearch__icon",
                onFocus: K,
                onBlur: j,
                "aria-label": F
            }, P), !!J && l.createElement(_.IconButton, {
                hoverMode: "opacity",
                onStart: re,
                onClick: ae,
                className: "vkuiSearch__icon",
                "aria-label": V
            }, te === b.Platform.IOS ? l.createElement(c.Icon16Clear, null) : l.createElement(u.Icon24Cancel, null)))), te === b.Platform.IOS && M && l.createElement(C.Button, {
                mode: "tertiary",
                size: "m",
                className: "vkuiSearch__after",
                focusVisibleMode: "inside",
                onClick: ae,
                onFocus: K,
                onBlur: j
            }, l.createElement("span", {
                className: "vkuiSearch__afterText"
            }, M)))
        }
    }
    ,
    543978: (e,t,a)=>{
        "use strict";
        a.d(t, {
            SegmentedControl: ()=>C
        });
        var n, r = a(975766), o = a(772253), i = a(414932), l = a(158339), s = a(191963), c = a(667294), u = a(962557), d = a(324285), v = a(678988), m = a(228248), p = a(489026), f = a(214542), h = a(644029), g = a(523323), b = a(16903), k = (0,
        r._)({
            none: "vkuiSegmentedControl--sizeY-none"
        }, p.SizeType.REGULAR, "vkuiSegmentedControl--sizeY-regular"), C = ((0,
        h.warnOnce)("SegmentedControl"),
        function(e) {
            var t = e.size
              , a = void 0 === t ? "l" : t
              , r = e.name
              , h = e.options
              , C = e.defaultValue
              , _ = void 0 === C ? null === (n = h[0]) || void 0 === n ? void 0 : n.value : C
              , E = (e.children,
            e.onChange)
              , y = e.value
              , S = (0,
            l._)(e, ["size", "name", "options", "defaultValue", "children", "onChange", "value"])
              , N = (0,
            m.useId)()
              , w = (0,
            s._)((0,
            v.useCustomEnsuredControl)({
                onChange: E,
                value: y,
                defaultValue: _
            }), 2)
              , R = w[0]
              , A = w[1]
              , M = (0,
            d.useAdaptivity)().sizeY
              , T = void 0 === M ? "none" : M
              , P = h.findIndex((function(e) {
                return e.value === R
            }
            ));
            (0,
            f.useIsomorphicLayoutEffect)((function() {
                0
            }
            ), [P]);
            var I = "translateX(".concat(100 * P, "%)");
            return c.createElement(g.RootComponent, (0,
            i._)((0,
            o._)({}, S), {
                baseClassName: (0,
                u.classNames)("vkuiSegmentedControl", T !== p.SizeType.COMPACT && k[T], "l" === a && "vkuiSegmentedControl--size-l")
            }), c.createElement("div", {
                role: "radiogroup",
                className: "vkuiSegmentedControl__in"
            }, P > -1 && c.createElement("div", {
                "aria-hidden": !0,
                className: "vkuiSegmentedControl__slider",
                style: {
                    width: "".concat(100 / h.length, "%"),
                    transform: I,
                    WebkitTransform: I
                }
            }), h.map((function(e) {
                var t = e.label
                  , a = e.className
                  , n = (0,
                l._)(e, ["label", "className"]);
                return c.createElement(b.SegmentedControlOption, (0,
                i._)((0,
                o._)({
                    key: "".concat(n.value)
                }, n), {
                    className: (0,
                    u.classNames)("vkuiSegmentedControl__option", a),
                    name: null != r ? r : N,
                    checked: R === n.value,
                    onChange: function() {
                        return A(n.value)
                    }
                }), t)
            }
            ))))
        }
        )
    }
    ,
    16903: (e,t,a)=>{
        "use strict";
        a.d(t, {
            SegmentedControlOption: ()=>m
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(281196)
          , c = a(719007)
          , u = a(266917)
          , d = a(115446)
          , v = a(516511)
          , m = function(e) {
            var t = e.getRef
              , a = e.className
              , m = e.style
              , p = e.children
              , f = e.getRootRef
              , h = (0,
            o._)(e, ["getRef", "className", "style", "children", "getRootRef"])
              , g = (0,
            s.useFocusVisible)()
              , b = g.focusVisible
              , k = g.onBlur
              , C = g.onFocus;
            return i.createElement("label", {
                className: (0,
                l.classNames)("vkuiSegmentedControlOption", h.checked && "vkuiSegmentedControlOption--checked", a),
                ref: f,
                style: m
            }, i.createElement(v.VisuallyHidden, (0,
            r._)((0,
            n._)({}, h), {
                Component: "input",
                getRootRef: t,
                type: "radio",
                onBlur: (0,
                c.callMultiple)(k, h.onBlur),
                onFocus: (0,
                c.callMultiple)(C, h.onFocus)
            })), i.createElement(d.Headline, {
                className: "vkuiSegmentedControlOption__content",
                level: "2",
                weight: "2"
            }, p), i.createElement(u.FocusVisible, {
                visible: b,
                mode: "inside"
            }))
        }
    }
    ,
    20362: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Select: ()=>s
        });
        var n = a(158339)
          , r = a(667294)
          , o = a(716331)
          , i = a(836931)
          , l = a(451155)
          , s = function(e) {
            e.children;
            var t = (0,
            n._)(e, ["children"])
              , a = t.options
              , s = void 0 === a ? [] : a
              , c = (t.searchable,
            t.emptyText,
            t.onInputChange,
            t.filterFn,
            t.popupDirection,
            t.renderOption,
            t.renderDropdown,
            t.fetching,
            t.onClose,
            t.onOpen,
            t.icon,
            t.ClearButton,
            t.allowClearButton,
            t.dropdownOffsetDistance,
            t.fixDropdownWidth,
            t.forceDropdownPortal,
            t.selectType,
            t.autoHideScrollbar,
            t.autoHideScrollbarDelay,
            (0,
            n._)(t, ["options", "searchable", "emptyText", "onInputChange", "filterFn", "popupDirection", "renderOption", "renderDropdown", "fetching", "onClose", "onOpen", "icon", "ClearButton", "allowClearButton", "dropdownOffsetDistance", "fixDropdownWidth", "forceDropdownPortal", "selectType", "autoHideScrollbar", "autoHideScrollbarDelay"]))
              , u = (0,
            o.useAdaptivityHasPointer)();
            return r.createElement(r.Fragment, null, (void 0 === u || u) && r.createElement(i.CustomSelect, t), (void 0 === u || !u) && r.createElement(l.NativeSelect, c, s.map((function(e) {
                var t = e.label
                  , a = e.value;
                return r.createElement("option", {
                    value: a,
                    key: "".concat(a)
                }, t)
            }
            ))))
        }
    }
    ,
    751467: (e,t,a)=>{
        "use strict";
        a.d(t, {
            SelectMimicry: ()=>b
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(667294)
          , s = a(962557)
          , c = a(324285)
          , u = a(104964)
          , d = a(428253)
          , v = a(489026)
          , m = a(221501)
          , p = a(91742)
          , f = a(937188)
          , h = a(917690)
          , g = (0,
        n._)({
            none: "vkuiSelect--sizeY-none"
        }, v.SizeType.COMPACT, "vkuiSelect--sizeY-compact")
          , b = function(e) {
            var t = e.tabIndex
              , a = void 0 === t ? 0 : t
              , n = e.placeholder
              , b = e.children
              , k = e.align
              , C = e.getRootRef
              , _ = e.multiline
              , E = e.disabled
              , y = e.onClick
              , S = e.before
              , N = e.after
              , w = void 0 === N ? l.createElement(p.DropdownIcon, null) : N
              , R = e.selectType
              , A = void 0 === R ? "default" : R
              , M = e.status
              , T = e.className
              , P = e.autoFocus
              , I = (0,
            i._)(e, ["tabIndex", "placeholder", "children", "align", "getRootRef", "multiline", "disabled", "onClick", "before", "after", "selectType", "status", "className", "autoFocus"])
              , D = (0,
            d.useExternRef)(C)
              , L = (0,
            c.useAdaptivity)().sizeY
              , x = void 0 === L ? "none" : L
              , O = b || n;
            return (0,
            u.useAutoFocus)(D, P),
            l.createElement(f.FormField, (0,
            o._)((0,
            r._)({}, I), {
                tabIndex: E ? void 0 : a,
                className: (0,
                s.classNames)("vkuiSelect", x !== v.SizeType.REGULAR && g[x], !b && "vkuiSelect--empty", _ && "vkuiSelect--multiline", "center" === k && "vkuiSelect--align-center", "right" === k && "vkuiSelect--align-right", S && "vkuiSelect--hasBefore", T),
                getRootRef: D,
                onClick: E ? void 0 : y,
                disabled: E,
                before: S,
                after: w,
                mode: (0,
                m.getFormFieldModeFromSelectType)(A),
                status: M
            }), l.createElement("div", {
                className: "vkuiSelect__container"
            }, l.createElement(h.SelectTypography, {
                selectType: A,
                className: "vkuiSelect__title"
            }, O)))
        }
    }
    ,
    917690: (e,t,a)=>{
        "use strict";
        a.d(t, {
            SelectTypography: ()=>l
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(754259)
          , l = function(e) {
            var t = e.selectType
              , a = void 0 === t ? "default" : t
              , l = e.children
              , s = (0,
            r._)(e, ["selectType", "children"]);
            return o.createElement(i.Text, (0,
            n._)({
                weight: "accent" === a ? "2" : "3"
            }, s), l)
        }
    }
    ,
    346921: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Separator: ()=>c
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(523323)
          , c = function(e) {
            var t = e.wide
              , a = (0,
            o._)(e, ["wide"]);
            return i.createElement(s.RootComponent, (0,
            r._)((0,
            n._)({}, a), {
                baseClassName: (0,
                l.classNames)("vkuiSeparator", !t && "vkuiSeparator--padded")
            }), i.createElement("hr", {
                className: "vkuiSeparator__in"
            }))
        }
    }
    ,
    185600: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Chevron: ()=>s
        });
        var n = a(158339)
          , r = a(667294)
          , o = a(364548)
          , i = a(354943)
          , l = {
            s: o.Icon16Chevron,
            m: i.Icon24ChevronCompactRight
        }
          , s = function(e) {
            var t = e.size
              , a = void 0 === t ? "m" : t
              , o = (0,
            n._)(e, ["size"])
              , i = l[a];
            return r.createElement(i, o)
        }
    }
    ,
    426305: (e,t,a)=>{
        "use strict";
        a.d(t, {
            SimpleCell: ()=>C
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(667294)
          , s = a(962557)
          , c = a(324285)
          , u = a(119360)
          , d = a(489026)
          , v = a(108681)
          , m = a(644029)
          , p = a(795281)
          , f = a(894872)
          , h = a(115446)
          , g = a(243912)
          , b = a(185600)
          , k = ((0,
        m.warnOnce)("SimpleCell"),
        (0,
        n._)({
            none: "vkuiSimpleCell--sizeY-none"
        }, d.SizeType.COMPACT, "vkuiSimpleCell--sizeY-compact"))
          , C = function(e) {
            var t = e.badgeBeforeTitle
              , a = e.badgeAfterTitle
              , n = e.badgeBeforeSubtitle
              , m = e.badgeAfterSubtitle
              , C = e.before
              , _ = e.indicator
              , E = e.children
              , y = e.after
              , S = e.expandable
              , N = e.multiline
              , w = e.subhead
              , R = e.subtitle
              , A = e.extraSubtitle
              , M = e.className
              , T = e.chevronSize
              , P = void 0 === T ? "m" : T
              , I = (0,
            i._)(e, ["badgeBeforeTitle", "badgeAfterTitle", "badgeBeforeSubtitle", "badgeAfterSubtitle", "before", "indicator", "children", "after", "expandable", "multiline", "subhead", "subtitle", "extraSubtitle", "className", "chevronSize"])
              , D = (0,
            u.usePlatform)();
            var L = "always" === S || (!0 === S || "auto" === S) && D === v.Platform.IOS
              , x = (0,
            s.hasReactNode)(y) || L
              , O = (0,
            c.useAdaptivity)().sizeY
              , B = void 0 === O ? "none" : O;
            return l.createElement(p.Tappable, (0,
            o._)((0,
            r._)({}, I), {
                className: (0,
                s.classNames)("vkuiSimpleCell", B !== d.SizeType.REGULAR && k[B], N && "vkuiSimpleCell--mult", M)
            }), l.createElement("div", {
                className: "vkuiSimpleCell__before"
            }, C), l.createElement("div", {
                className: "vkuiSimpleCell__middle"
            }, w && l.createElement(g.Subhead, {
                Component: "span",
                className: (0,
                s.classNames)("vkuiSimpleCell__text", "vkuiSimpleCell__subhead")
            }, w), l.createElement("div", {
                className: "vkuiSimpleCell__content"
            }, t && l.createElement("span", {
                className: "vkuiSimpleCell__badge"
            }, t), l.createElement(h.Headline, {
                Component: "span",
                className: "vkuiSimpleCell__children",
                weight: "3"
            }, E), (0,
            s.hasReactNode)(a) && l.createElement("span", {
                className: "vkuiSimpleCell__badge"
            }, a)), R && l.createElement("div", {
                className: "vkuiSimpleCell__content"
            }, n && l.createElement("span", {
                className: "vkuiSimpleCell__badge"
            }, n), l.createElement(f.Footnote, {
                normalize: !1,
                className: (0,
                s.classNames)("vkuiSimpleCell__text", "vkuiSimpleCell__subtitle")
            }, R), m && l.createElement("span", {
                className: "vkuiSimpleCell__badge"
            }, m)), A && l.createElement(f.Footnote, {
                className: (0,
                s.classNames)("vkuiSimpleCell__text", "vkuiSimpleCell__extraSubtitle")
            }, A)), (0,
            s.hasReactNode)(_) && l.createElement(h.Headline, {
                Component: "span",
                weight: "3",
                className: "vkuiSimpleCell__indicator"
            }, _), x && l.createElement("div", {
                className: (0,
                s.classNames)("vkuiSimpleCell__after", "vkuiInternalSimpleCell__after")
            }, y, L && l.createElement(b.Chevron, {
                size: P,
                className: "vkuiSimpleCell__chevronIcon"
            })))
        }
    }
    ,
    509056: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Slider: ()=>b
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(191963)
          , s = a(667294)
          , c = a(962557)
          , u = a(633656)
          , d = a(324285)
          , v = a(428253)
          , m = a(489026)
          , p = a(763029)
          , f = a(464693)
          , h = a(835901)
          , g = (0,
        n._)({
            none: "vkuiSlider--sizeY-none"
        }, m.SizeType.COMPACT, "vkuiSlider--sizeY-compact")
          , b = function(e) {
            var t = e.step
              , a = e.min
              , n = void 0 === a ? 0 : a
              , b = e.max
              , k = void 0 === b ? 100 : b
              , C = e.value
              , _ = e.multiple
              , E = e.defaultValue
              , y = void 0 === E ? _ ? [n, k] : n : E
              , S = e.disabled
              , N = e.className
              , w = e.getRootRef
              , R = e.getAriaLabel
              , A = e.getAriaValueText
              , M = e.onChange
              , T = e.withTooltip
              , P = (0,
            i._)(e, ["step", "min", "max", "value", "multiple", "defaultValue", "disabled", "className", "getRootRef", "getAriaLabel", "getAriaValueText", "onChange", "withTooltip"])
              , I = (0,
            d.useAdaptivity)().sizeY
              , D = void 0 === I ? "none" : I
              , L = void 0 !== C
              , x = (0,
            l._)(s.useState(y), 2)
              , O = x[0]
              , B = x[1]
              , z = s.useMemo((function() {
                var e = L ? C : O;
                return Array.isArray(e) ? [(0,
                u.clamp)(e[0], n, k), (0,
                u.clamp)(e[1], n, k)] : [(0,
                u.clamp)(e, n, k), null]
            }
            ), [L, C, O, n, k])
              , F = (0,
            l._)(z, 2)
              , H = F[0]
              , V = F[1]
              , Y = _ && null !== V
              , W = (0,
            h.toPercent)(H, n, k)
              , q = Y ? (0,
            h.toPercent)(V, n, k) : 0
              , G = s.useRef({
                dragging: null,
                startX: 0,
                containerWidth: 0
            }).current
              , U = (0,
            v.useExternRef)(w)
              , X = s.useRef(null)
              , K = s.useRef(null)
              , j = (0,
            h.extractSliderAriaAttributesFromRestProps)(P)
              , Q = j.ariaLabel
              , J = j.ariaValueText
              , Z = j.ariaLabelledBy
              , $ = (0,
            i._)(j, ["ariaLabel", "ariaValueText", "ariaLabelledBy"])
              , ee = function(e, t) {
                S || z[0] === e[0] && z[1] === e[1] || (_ ? (0,
                h.isMultipleValues)(e) && (!L && B(e),
                M && M(e, t)) : (!L && B(e[0]),
                M && M(e[0], t)))
            }
              , te = function(e) {
                ee((0,
                h.updateInternalStateValueByNativeChange)(z, Number(e.target.value), (0,
                h.getDraggingTypeByTargetDataset)(e.target)), e)
            };
            return s.createElement(p.Touch, (0,
            o._)((0,
            r._)({
                "data-value": Y ? "".concat(H, ",").concat(V) : H
            }, $), {
                className: (0,
                c.classNames)("vkuiSlider", S && "vkuiSlider--disabled", D !== m.SizeType.REGULAR && g[D], N),
                onStart: S ? void 0 : function(e) {
                    if (U.current) {
                        var a = U.current.getBoundingClientRect()
                          , r = a.left
                          , o = a.width
                          , i = (0,
                        h.getDraggingTypeByTargetDataset)(e.originalEvent.target)
                          , s = e.startX - r
                          , c = (0,
                        h.offsetToValue)(s, o, n, k, t)
                          , u = (0,
                        h.snapDirection)(z, c, i);
                        G.dragging = u,
                        G.containerWidth = o,
                        G.startX = s;
                        var d = (0,
                        h.updateInternalStateValue)(z, c, n, k, u)
                          , v = (0,
                        l._)(d, 2)
                          , m = v[0]
                          , p = v[1];
                        X.current && ("start" === i || m !== H && p === V) ? (X.current.focus(),
                        e.originalEvent.preventDefault()) : K.current && ("end" === i || p !== V && m === H) && (K.current.focus(),
                        e.originalEvent.preventDefault()),
                        ee(d, e),
                        e.originalEvent.stopPropagation()
                    }
                }
                ,
                onMove: S ? void 0 : function(e) {
                    var a = G.startX
                      , r = G.containerWidth
                      , o = G.dragging
                      , i = e.shiftX
                      , l = a + (void 0 === i ? 0 : i)
                      , s = (0,
                    h.offsetToValue)(l, r, n, k, t);
                    ee((0,
                    h.updateInternalStateValue)(z, s, n, k, o), e),
                    e.originalEvent.stopPropagation(),
                    e.originalEvent.preventDefault()
                }
                ,
                onEnd: S ? void 0 : function(e) {
                    G.dragging = null,
                    e.originalEvent.stopPropagation()
                }
            }), s.createElement("div", {
                className: "vkuiSlider__track"
            }), s.createElement("div", {
                className: "vkuiSlider__track-fill",
                style: Y ? {
                    left: "".concat(W, "%"),
                    right: "".concat(100 - q, "%")
                } : {
                    width: "".concat(W, "%")
                }
            }), s.createElement("div", {
                ref: U,
                className: "vkuiSlider__thumbs"
            }, s.createElement(f.SliderThumb, {
                "data-type": "start",
                className: "vkuiSlider__thumb",
                style: {
                    left: "".concat(W, "%"),
                    zIndex: Y && W >= 50 ? 2 : void 0
                },
                withTooltip: T,
                inputProps: {
                    "data-type": "start",
                    ref: X,
                    step: t,
                    min: n,
                    value: H,
                    max: Y ? V : k,
                    disabled: S,
                    "aria-label": R ? R(0) : Q,
                    "aria-valuetext": A ? A(H, 0) : J,
                    "aria-labelledby": Z,
                    onChange: te
                }
            }), Y && s.createElement(f.SliderThumb, {
                "data-type": "end",
                className: "vkuiSlider__thumb",
                style: {
                    left: "".concat(q, "%")
                },
                withTooltip: T,
                inputProps: {
                    "data-type": "end",
                    ref: K,
                    step: t,
                    min: H,
                    value: V,
                    max: k,
                    disabled: S,
                    "aria-label": R ? R(1) : Q,
                    "aria-valuetext": A ? A(V, 1) : J,
                    "aria-labelledby": Z,
                    onChange: te
                }
            })))
        }
    }
    ,
    464693: (e,t,a)=>{
        "use strict";
        a.d(t, {
            SliderThumb: ()=>g
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(667294)
          , s = a(962557)
          , c = a(440981)
          , u = a(428253)
          , d = a(281196)
          , v = a(185983)
          , m = a(801371)
          , p = a(266479)
          , f = a(266917)
          , h = a(162950)
          , g = function(e) {
            var t = e.className
              , a = e.getRootRef
              , g = e.inputProps
              , b = e.withTooltip
              , k = (0,
            o._)(e, ["className", "getRootRef", "inputProps", "withTooltip"])
              , C = (0,
            d.useFocusVisible)(!1)
              , _ = C.focusVisible
              , E = C.onBlur
              , y = C.onFocus
              , S = (0,
            i._)(l.useState(null), 2)
              , N = S[0]
              , w = S[1]
              , R = l.useMemo((function() {
                return [(0,
                v.offset)({
                    crossAxis: 0,
                    mainAxis: 15
                }), (0,
                v.flip)(), (0,
                v.shift)({
                    padding: 8
                }), (0,
                m.arrow)({
                    element: N
                })]
            }
            ), [N])
              , A = (0,
            m.useFloating)({
                placement: "top",
                middleware: R
            })
              , M = A.x
              , T = A.y
              , P = A.placement
              , I = A.refs
              , D = A.strategy
              , L = A.middlewareData.arrow
              , x = A.update
              , O = (0,
            c.useBooleanState)(!1)
              , B = O.value
              , z = O.setTrue
              , F = O.setFalse
              , H = (0,
            u.useExternRef)(a, I.setReference)
              , V = b && (_ || B)
              , Y = g && g.value;
            return l.useEffect((function() {
                V && "undefined" !== Y && x()
            }
            ), [Y, x, V]),
            l.createElement(l.Fragment, null, l.createElement("span", (0,
            r._)((0,
            n._)({}, k), {
                ref: H,
                onMouseEnter: z,
                onMouseLeave: F,
                className: (0,
                s.classNames)("vkuiSliderThumb", _ && "vkuiSliderThumb--focused", t)
            }), l.createElement("input", (0,
            r._)((0,
            n._)({}, g), {
                type: "range",
                className: "vkuiSliderThumb__nativeInput",
                "aria-orientation": "horizontal",
                onBlur: E,
                onFocus: y
            })), l.createElement(f.FocusVisible, {
                visible: _,
                mode: "outside"
            })), V && l.createElement(h.TooltipBase, {
                appearance: "neutral",
                getRootRef: I.setFloating,
                floatingStyle: (0,
                p.convertFloatingDataToReactCSSProperties)(D, M, T),
                arrowCoords: L,
                arrowPlacement: P,
                getArrowRef: w,
                text: Y
            }))
        }
    }
    ,
    835901: (e,t,a)=>{
        "use strict";
        a.d(t, {
            extractSliderAriaAttributesFromRestProps: ()=>h,
            getDraggingTypeByTargetDataset: ()=>p,
            isMultipleValues: ()=>v,
            offsetToValue: ()=>s,
            snapDirection: ()=>m,
            toPercent: ()=>l,
            updateInternalStateValue: ()=>u,
            updateInternalStateValueByNativeChange: ()=>d
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(191963)
          , i = (a(667294),
        a(633656))
          , l = function(e, t, a) {
            return (e - t) / (a - t) * 100
        }
          , s = function(e, t, a, n, r) {
            return (0,
            i.rescale)(e, [0, t], [a, n], {
                step: r
            })
        }
          , c = function(e, t, a) {
            return e < t ? t : e > a ? a : e
        }
          , u = function(e, t, a, n, r) {
            var i = (0,
            o._)(e, 2)
              , l = i[0]
              , s = i[1];
            if (null === s)
                return [c(t, a, n), null];
            switch (r) {
            case "start":
                return t > s ? [s, s] : [c(t, a, n), s];
            case "end":
                return t < l ? [l, l] : [l, c(t, a, n)];
            default:
                return e
            }
        }
          , d = function(e, t, a) {
            var n = (0,
            o._)(e, 2)
              , r = n[0]
              , i = n[1];
            switch (a) {
            case "start":
                return [t, i];
            case "end":
                return [r, t];
            default:
                return e
            }
        };
        function v(e) {
            return null !== e[1]
        }
        var m = function(e, t, a) {
            if ("start" === a)
                return "start";
            if ("end" === a)
                return "end";
            var n = (0,
            o._)(e, 2)
              , r = n[0]
              , i = n[1]
              , l = null !== i ? r - .1 : r
              , s = null !== i ? i + .1 : 0;
            return Math.abs(l - t) <= Math.abs(s - t) ? "start" : "end"
        }
          , p = function(e) {
            if (e) {
                if ("start" === e.dataset.type)
                    return "start";
                if ("end" === e.dataset.type)
                    return "end"
            }
            return null
        }
          , f = {
            "aria-label": void 0,
            "aria-valuetext": void 0,
            "aria-labelledby": void 0
        }
          , h = function(e) {
            var t = e["aria-label"]
              , a = e["aria-valuetext"]
              , o = e["aria-labelledby"];
            return (0,
            r._)((0,
            n._)({}, e, f), {
                ariaLabel: t,
                ariaValueText: a,
                ariaLabelledBy: o
            })
        }
    }
    ,
    836392: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Snackbar: ()=>y
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(667294)
          , s = a(962557)
          , c = a(323025)
          , u = a(119360)
          , d = a(855356)
          , v = a(70743)
          , m = a(489026)
          , p = a(108681)
          , f = a(970414)
          , h = a(645083)
          , g = a(658113)
          , b = a(523323)
          , k = a(763029)
          , C = a(390574)
          , _ = a(243912)
          , E = {
            vertical: "vkuiSnackbar--layout-vertical",
            horizontal: "vkuiSnackbar--layout-horizontal"
        }
          , y = function(e) {
            var t = e.children
              , a = e.layout
              , y = void 0 === a ? "horizontal" : a
              , S = e.action
              , N = e.before
              , w = e.after
              , R = e.duration
              , A = void 0 === R ? 4e3 : R
              , M = e.onActionClick
              , T = e.onClose
              , P = e.mode
              , I = void 0 === P ? "default" : P
              , D = e.subtitle
              , L = e.offsetY
              , x = e.style
              , O = (0,
            o._)(e, ["children", "layout", "action", "before", "after", "duration", "onActionClick", "onClose", "mode", "subtitle", "offsetY", "style"])
              , B = (0,
            u.usePlatform)()
              , z = (0,
            c.useAdaptivityWithJSMediaQueries)().viewWidth >= m.ViewWidth.SMALL_TABLET
              , F = (0,
            v.useWaitTransitionFinish)().waitTransitionFinish
              , H = (0,
            i._)(l.useState(!1), 2)
              , V = H[0]
              , Y = H[1]
              , W = (0,
            i._)(l.useState(!1), 2)
              , q = W[0]
              , G = W[1]
              , U = l.useRef(0)
              , X = l.useRef(0)
              , K = l.useRef(null)
              , j = l.useRef(null)
              , Q = l.useRef(null)
              , J = B === p.Platform.IOS ? 320 : 400
              , Z = function() {
                Y(!0),
                F(j.current, (function() {
                    T()
                }
                ), J)
            }
              , $ = (0,
            d.useTimeout)(Z, A)
              , ee = function(e) {
                null !== Q.current && cancelAnimationFrame(Q.current),
                Q.current = requestAnimationFrame((function() {
                    K.current && (K.current.style.transform = "translate3d(".concat(e, "%, 0, 0)"))
                }
                ))
            }
              , te = $.clear;
            l.useEffect((function() {
                return $.set()
            }
            ), [$]);
            var ae = w || z || D ? "vertical" : y;
            return l.createElement(h.AppRootPortal, null, l.createElement(b.RootComponent, (0,
            r._)((0,
            n._)({}, O), {
                baseClassName: (0,
                s.classNames)("vkuiSnackbar", B === p.Platform.IOS && "vkuiSnackbar--ios", E[ae], "dark" === I && "vkuiSnackbar--mode-dark", V && "vkuiSnackbar--closing", q && "vkuiSnackbar--touched", z && "vkuiSnackbar--desktop"),
                style: L ? (0,
                r._)((0,
                n._)({}, x), {
                    bottom: L
                }) : x
            }), l.createElement(k.Touch, {
                className: "vkuiSnackbar__in",
                getRootRef: j,
                onStart: te,
                onMoveX: function(e) {
                    var t, a, n = e.shiftX;
                    e.originalEvent.preventDefault(),
                    q || G(!0),
                    U.current = n / (null !== (a = null === (t = K.current) || void 0 === t ? void 0 : t.offsetWidth) && void 0 !== a ? a : 0) * 100,
                    X.current = (0,
                    f.rubber)(U.current, 72, 1.2, B !== p.Platform.IOS),
                    ee(X.current)
                },
                onEnd: function(e) {
                    var t;
                    if (q) {
                        var a = X.current;
                        a += a / e.duration * 240 * .6,
                        z && a <= -50 ? ($.clear(),
                        F(K.current, (function() {
                            T()
                        }
                        ), J),
                        ee(-120)) : !z && a >= 50 ? ($.clear(),
                        F(K.current, (function() {
                            T()
                        }
                        ), J),
                        ee(120)) : t = function() {
                            $.set(),
                            ee(0)
                        }
                    } else
                        $.set();
                    G(!1),
                    t && requestAnimationFrame(t)
                }
            }, l.createElement("div", {
                className: "vkuiSnackbar__body",
                ref: K
            }, N && l.createElement("div", {
                className: "vkuiSnackbar__before"
            }, N), l.createElement("div", {
                className: "vkuiSnackbar__content"
            }, l.createElement(C.Paragraph, {
                className: "vkuiSnackbar__content-text"
            }, t), D && !S && l.createElement(_.Subhead, {
                className: "vkuiSnackbar__content-subtitle"
            }, D), S && !D && l.createElement(g.Button, {
                align: "left",
                mode: "link",
                appearance: "dark" === I ? "overlay" : "accent",
                size: "s",
                className: "vkuiSnackbar__action",
                onClick: function(e) {
                    Z(),
                    S && "function" == typeof M && M(e)
                }
            }, S)), w && l.createElement("div", {
                className: "vkuiSnackbar__after"
            }, w)))))
        }
    }
    ,
    257451: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Spacing: ()=>s
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(523323)
          , s = function(e) {
            var t = e.size
              , a = void 0 === t ? 8 : t
              , s = e.style
              , c = (0,
            o._)(e, ["size", "style"])
              , u = (0,
            n._)({
                height: a,
                padding: "".concat(a / 2, "px 0")
            }, s);
            return i.createElement(l.RootComponent, (0,
            r._)((0,
            n._)({}, c), {
                baseClassName: "vkuiSpacing",
                style: u
            }))
        }
    }
    ,
    474353: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Spinner: ()=>p
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(895146)
          , s = a(372848)
          , c = a(694003)
          , u = a(207943)
          , d = a(644029)
          , v = a(523323)
          , m = a(516511)
          , p = ((0,
        d.warnOnce)("Spinner"),
        i.memo((function(e) {
            var t = e.size
              , a = void 0 === t ? "regular" : t
              , d = e.children
              , p = void 0 === d ? "Загружается..." : d
              , f = e["aria-label"]
              , h = void 0 === f ? "Загружается..." : f
              , g = e.disableAnimation
              , b = (0,
            o._)(e, ["size", "children", "aria-label", "disableAnimation"])
              , k = {
                small: l.Icon16Spinner,
                regular: s.Icon24Spinner,
                medium: c.Icon32Spinner,
                large: u.Icon44Spinner
            }[a]
              , C = {
                small: 8,
                regular: 12,
                medium: 16,
                large: 22
            }[a];
            return i.createElement(v.RootComponent, (0,
            r._)((0,
            n._)({
                Component: "span",
                role: "status"
            }, b), {
                baseClassName: "vkuiSpinner"
            }), i.createElement(k, null, !g && i.createElement("animateTransform", {
                attributeName: "transform",
                attributeType: "XML",
                type: "rotate",
                from: "0 ".concat(C, " ").concat(C),
                to: "360 ".concat(C, " ").concat(C),
                dur: "0.7s",
                repeatCount: "indefinite"
            })), i.createElement(m.VisuallyHidden, null, null != p ? p : h))
        }
        )));
        p.displayName = "Spinner"
    }
    ,
    946674: (e,t,a)=>{
        "use strict";
        a.d(t, {
            SplitCol: ()=>C
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(667294)
          , s = a(962557)
          , c = a(324285)
          , u = a(428253)
          , d = a(693158)
          , v = a(854193)
          , m = a(489026)
          , p = a(995089)
          , f = a(876256)
          , h = a(644029)
          , g = a(523323)
          , b = a(199944)
          , k = {
            none: (0,
            s.classNames)("vkuiSplitCol--viewWidth-none", "vkuiInternalSplitCol--viewWidth-none"),
            tabletMinus: "vkuiSplitCol--viewWidth-tabletMinus",
            smallTabletPlus: "vkuiSplitCol--viewWidth-smallTabletPlus",
            tabletPlus: "vkuiInternalSplitCol--viewWidth-tabletPlus"
        };
        (0,
        h.warnOnce)("SplitCol");
        var C = function(e) {
            var t = e.children
              , a = e.width
              , h = e.maxWidth
              , C = e.minWidth
              , _ = e.spaced
              , E = e.animate
              , y = e.fixed
              , S = e.style
              , N = e.autoSpaced
              , w = e.stretchedOnMobile
              , R = e.getRootRef
              , A = (0,
            o._)(e, ["children", "width", "maxWidth", "minWidth", "spaced", "animate", "fixed", "style", "autoSpaced", "stretchedOnMobile", "getRootRef"])
              , M = (0,
            u.useExternRef)(R)
              , T = (0,
            c.useAdaptivity)().viewWidth
              , P = function(e) {
                var t = (0,
                c.useAdaptivity)().viewWidth
                  , a = (0,
                i._)(l.useState(Boolean(e)), 2)
                  , n = a[0]
                  , r = a[1]
                  , o = (0,
                d.useMediaQueries)();
                return l.useEffect((function() {
                    if (void 0 === e) {
                        if (void 0 === t) {
                            var a = function() {
                                return r(!o.smallTabletPlus.matches)
                            };
                            return a(),
                            (0,
                            f.matchMediaListAddListener)(o.smallTabletPlus, a),
                            function() {
                                (0,
                                f.matchMediaListRemoveListener)(o.smallTabletPlus, a)
                            }
                        }
                        r(t < m.ViewWidth.TABLET)
                    } else
                        r(e)
                }
                ), [e, t, o]),
                n
            }(E)
              , I = (0,
            v.useObjectMemo)({
                colRef: M,
                animate: P
            });
            return l.createElement(g.RootComponent, (0,
            r._)((0,
            n._)({}, A), {
                style: (0,
                r._)((0,
                n._)({}, S), {
                    width: a,
                    maxWidth: h,
                    minWidth: C
                }),
                getRootRef: M,
                baseClassName: (0,
                s.classNames)("vkuiSplitCol", (0,
                p.viewWidthToClassName)(k, T), _ && (0,
                s.classNames)("vkuiSplitCol--spaced", "vkuiInternalSplitCol--spaced"), void 0 === _ && (0,
                s.classNames)("vkuiSplitCol--spaced-none", "vkuiInternalSplitCol--spaced-none"), N && (0,
                s.classNames)("vkuiSplitCol--spaced-auto", "vkuiInternalSplitCol--spaced-auto"), y && "vkuiSplitCol--fixed", w && "vkuiSplitCol--stretched-on-mobile")
            }), l.createElement(b.SplitColContext.Provider, {
                value: I
            }, y ? l.createElement("div", {
                className: "vkuiSplitCol__fixedInner"
            }, t) : t))
        }
    }
    ,
    199944: (e,t,a)=>{
        "use strict";
        a.d(t, {
            SplitColContext: ()=>r,
            useSplitCol: ()=>o
        });
        var n = a(667294)
          , r = n.createContext({
            colRef: null,
            animate: !0
        })
          , o = function() {
            return n.useContext(r)
        }
    }
    ,
    243143: (e,t,a)=>{
        "use strict";
        a.d(t, {
            SplitLayout: ()=>d
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(119360)
          , c = a(108681)
          , u = a(311323)
          , d = function(e) {
            var t = e.popout
              , a = e.modal
              , d = e.header
              , v = e.children
              , m = e.getRootRef
              , p = e.getRef
              , f = e.className
              , h = (0,
            o._)(e, ["popout", "modal", "header", "children", "getRootRef", "getRef", "className"])
              , g = (0,
            s.usePlatform)();
            return i.createElement(u.PopoutRoot, {
                className: (0,
                l.classNames)("vkuiSplitLayout", g === c.Platform.IOS && "vkuiSplitLayout--ios"),
                popout: t,
                modal: a,
                getRootRef: m
            }, d, i.createElement("div", (0,
            r._)((0,
            n._)({}, h), {
                ref: p,
                className: (0,
                l.classNames)("vkuiSplitLayout__inner", !!d && "vkuiSplitLayout__inner--header", f)
            }), v))
        }
    }
    ,
    197741: (e,t,a)=>{
        "use strict";
        a.d(t, {
            SubnavigationButton: ()=>C
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(667294)
          , s = a(144757)
          , c = a(962557)
          , u = a(324285)
          , d = a(489026)
          , v = a(795281)
          , m = a(443910)
          , p = a(243912)
          , f = {
            accent: "vkuiSubnavigationButton--appearance-accent",
            neutral: "vkuiSubnavigationButton--appearance-neutral"
        }
          , h = {
            primary: "vkuiSubnavigationButton--mode-primary",
            outline: "vkuiSubnavigationButton--mode-outline",
            tertiary: "vkuiSubnavigationButton--mode-tertiary"
        }
          , g = {
            s: "vkuiSubnavigationButton--size-s",
            m: "vkuiSubnavigationButton--size-m",
            l: "vkuiSubnavigationButton--size-l"
        }
          , b = (0,
        n._)({
            none: "vkuiSubnavigationButton--sizeY-none"
        }, d.SizeType.COMPACT, "vkuiSubnavigationButton--sizeY-compact")
          , k = function(e) {
            var t = e.textLevel
              , a = (0,
            i._)(e, ["textLevel"]);
            return "1" === t ? l.createElement(p.Subhead, a) : l.createElement(m.Caption, (0,
            r._)({
                level: "2" === t ? "1" : "2"
            }, a))
        }
          , C = function(e) {
            var t = e.mode
              , a = void 0 === t ? "primary" : t
              , n = e.appearance
              , m = void 0 === n ? "accent" : n
              , p = e.size
              , C = void 0 === p ? "m" : p
              , _ = e.selected
              , E = e.textLevel
              , y = void 0 === E ? "1" : E
              , S = e.before
              , N = e.after
              , w = e.expandable
              , R = e.children
              , A = e.className
              , M = (0,
            i._)(e, ["mode", "appearance", "size", "selected", "textLevel", "before", "after", "expandable", "children", "className"])
              , T = (0,
            u.useAdaptivity)().sizeY
              , P = void 0 === T ? "none" : T;
            return l.createElement(v.Tappable, (0,
            o._)((0,
            r._)({}, M), {
                hasActive: !1,
                focusVisibleMode: "outside",
                className: (0,
                c.classNames)("vkuiSubnavigationButton", g[C], h[a], f[m], _ && "vkuiSubnavigationButton--selected", P !== d.SizeType.REGULAR && b[P], A)
            }), l.createElement("span", {
                className: "vkuiSubnavigationButton__in"
            }, S && l.createElement("span", {
                className: "vkuiSubnavigationButton__before"
            }, S), l.createElement(k, {
                textLevel: y,
                className: "vkuiSubnavigationButton__label",
                Component: "span"
            }, R), N && l.createElement("span", {
                className: "vkuiSubnavigationButton__after"
            }, N), w && l.createElement(s.Icon16Dropdown, {
                className: "vkuiSubnavigationButton__expandableIcon"
            })))
        }
    }
    ,
    763781: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Switch: ()=>b
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(667294)
          , s = a(962557)
          , c = a(324285)
          , u = a(281196)
          , d = a(119360)
          , v = a(489026)
          , m = a(719007)
          , p = a(108681)
          , f = a(266917)
          , h = a(516511)
          , g = (0,
        n._)({
            none: "vkuiSwitch--sizeY-none"
        }, v.SizeType.COMPACT, "vkuiSwitch--sizeY-compact")
          , b = function(e) {
            var t = e.style
              , a = e.className
              , n = e.getRootRef
              , b = e.getRef
              , k = (0,
            i._)(e, ["style", "className", "getRootRef", "getRef"])
              , C = (0,
            d.usePlatform)()
              , _ = (0,
            c.useAdaptivity)().sizeY
              , E = void 0 === _ ? "none" : _
              , y = (0,
            u.useFocusVisible)()
              , S = y.focusVisible
              , N = y.onBlur
              , w = y.onFocus;
            return l.createElement("label", {
                className: (0,
                s.classNames)("vkuiSwitch", C === p.Platform.IOS && "vkuiSwitch--ios", E !== v.SizeType.REGULAR && g[E], k.disabled && "vkuiSwitch--disabled", a),
                style: t,
                ref: n,
                onBlur: (0,
                m.callMultiple)(N, k.onBlur),
                onFocus: (0,
                m.callMultiple)(w, k.onFocus)
            }, l.createElement(h.VisuallyHidden, (0,
            o._)((0,
            r._)({}, k), {
                Component: "input",
                getRootRef: b,
                type: "checkbox",
                className: "vkuiSwitch__self"
            })), l.createElement("span", {
                "aria-hidden": !0,
                className: "vkuiSwitch__pseudo"
            }), l.createElement(f.FocusVisible, {
                visible: S,
                mode: "outside"
            }))
        }
    }
    ,
    780991: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Tabbar: ()=>d
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(119360)
          , s = a(108681)
          , c = a(523323)
          , u = function(e, t) {
            switch (e) {
            case "horizontal":
                return "vkuiInternalTabbar--layout-horizontal";
            case "vertical":
                return "vkuiInternalTabbar--layout-vertical";
            default:
                return o.Children.count(t) > 2 ? u("vertical", []) : u("horizontal", [])
            }
        }
          , d = function(e) {
            var t = e.shadow
              , a = void 0 === t || t
              , d = e.mode
              , v = (0,
            r._)(e, ["shadow", "mode"])
              , m = (0,
            l.usePlatform)();
            return o.createElement(c.RootComponent, (0,
            n._)({
                baseClassName: (0,
                i.classNames)("vkuiInternalTabbar", "vkuiTabbar", m === s.Platform.IOS && "vkuiTabbar--ios", u(d, v.children), a && "vkuiTabbar--shadow")
            }, v))
        }
    }
    ,
    146881: (e,t,a)=>{
        "use strict";
        a.d(t, {
            TabbarItem: ()=>p
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(119360)
          , c = a(108681)
          , u = a(644029)
          , d = a(523323)
          , v = a(795281)
          , m = a(894872)
          , p = ((0,
        u.warnOnce)("TabbarItem"),
        function(e) {
            var t = e.children
              , a = e.selected
              , u = e.indicator
              , p = e.text
              , f = e.href
              , h = e.Component
              , g = void 0 === h ? f ? "a" : "button" : h
              , b = e.disabled
              , k = (0,
            o._)(e, ["children", "selected", "indicator", "text", "href", "Component", "disabled"])
              , C = (0,
            s.usePlatform)();
            return i.createElement(d.RootComponent, (0,
            r._)((0,
            n._)({
                Component: g
            }, k), {
                disabled: b,
                href: f,
                baseClassName: (0,
                l.classNames)("vkuiTabbarItem", C === c.Platform.IOS && "vkuiTabbarItem--ios", C === c.Platform.ANDROID && "vkuiTabbarItem--android", a && "vkuiTabbarItem--selected")
            }), i.createElement(v.Tappable, {
                role: "presentation",
                Component: "div",
                disabled: b,
                activeMode: C === c.Platform.IOS ? "vkuiTabbarItem__tappable--active" : "background",
                activeEffectDelay: C === c.Platform.IOS ? 0 : 300,
                hasHover: !1,
                className: "vkuiTabbarItem__tappable"
            }), i.createElement("div", {
                className: "vkuiTabbarItem__in"
            }, i.createElement("div", {
                className: "vkuiTabbarItem__icon"
            }, t, i.createElement("div", {
                className: "vkuiInternalTabbarItem__label"
            }, (0,
            l.hasReactNode)(u) && u)), p && i.createElement(m.Footnote, {
                Component: "div",
                className: "vkuiTabbarItem__text",
                weight: "2"
            }, p)))
        }
        )
    }
    ,
    65309: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Tabs: ()=>f,
            TabsModeContext: ()=>p
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(283821)
          , c = a(119360)
          , u = a(304830)
          , d = a(181498)
          , v = a(108681)
          , m = a(523323)
          , p = i.createContext({
            mode: "default",
            withGaps: !1
        })
          , f = function(e) {
            var t = e.children
              , a = e.mode
              , f = void 0 === a ? "default" : a
              , h = e.role
              , g = void 0 === h ? "tablist" : h
              , b = (0,
            o._)(e, ["children", "mode", "role"])
              , k = (0,
            c.usePlatform)()
              , C = (0,
            d.useDOM)().document
              , _ = "tablist" === g
              , E = i.useRef(null)
              , y = "accent" === f || "secondary" === f
              , S = function() {
                return E.current ? Array.from(E.current.querySelectorAll("[role=tab]:not([disabled])")) : []
            };
            return (0,
            s.useGlobalEventListener)(C, "keydown", (function(e) {
                if (C && E.current && _) {
                    var t = (0,
                    u.pressedKey)(e);
                    switch (t) {
                    case "ArrowLeft":
                    case "ArrowRight":
                    case "End":
                    case "Home":
                        var a = S()
                          , n = a.findIndex((function(e) {
                            return C.activeElement === e
                        }
                        ));
                        if (-1 === n)
                            return;
                        var r = 0;
                        if ("Home" === t)
                            r = 0;
                        else if ("End" === t)
                            r = a.length - 1;
                        else {
                            r = n + ("ArrowRight" === t ? 1 : -1)
                        }
                        var o = a[r];
                        o && (e.preventDefault(),
                        o.focus());
                        break;
                    case "ArrowDown":
                        var i = S().find((function(e) {
                            return C.activeElement === e
                        }
                        ));
                        if (!i || "true" !== i.getAttribute("aria-selected"))
                            return;
                        var l = i.getAttribute("aria-controls");
                        if (!l)
                            return;
                        var s = C.getElementById(l);
                        if (!s)
                            return;
                        e.preventDefault(),
                        s.focus();
                        break;
                    case "Space":
                    case "Enter":
                        var c = S().find((function(e) {
                            return C.activeElement === e
                        }
                        ));
                        c && c.click()
                    }
                }
            }
            ), {
                capture: !0
            }),
            i.createElement(m.RootComponent, (0,
            r._)((0,
            n._)({}, b), {
                baseClassName: (0,
                l.classNames)("vkuiTabs", "vkuiInternalTabs", k === v.Platform.VKCOM && "vkuiInternalTabs--vkcom", y && (0,
                l.classNames)("vkuiTabs--withGaps", "vkuiInternalTabs--withGaps"), "default" === f && "vkuiTabs--mode-default"),
                role: g
            }), i.createElement("div", {
                className: "vkuiTabs__in",
                ref: E
            }, i.createElement(p.Provider, {
                value: {
                    mode: f,
                    withGaps: y
                }
            }, t)))
        }
    }
    ,
    461181: (e,t,a)=>{
        "use strict";
        a.d(t, {
            TabsItem: ()=>k
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(667294)
          , s = a(962557)
          , c = a(324285)
          , u = a(489026)
          , d = a(644029)
          , v = a(65309)
          , m = a(795281)
          , p = a(115446)
          , f = a(243912)
          , h = a(516511)
          , g = (0,
        n._)({
            none: "vkuiTabsItem--sizeY-none"
        }, u.SizeType.COMPACT, "vkuiTabsItem--sizeY-compact")
          , b = {
            default: "vkuiTabsItem--mode-default",
            accent: "vkuiTabsItem--mode-accent",
            secondary: "vkuiTabsItem--mode-secondary"
        }
          , k = ((0,
        d.warnOnce)("TabsItem"),
        function(e) {
            var t = e.before
              , a = e.children
              , n = e.status
              , d = e.after
              , k = e.selected
              , C = void 0 !== k && k
              , _ = e.className
              , E = e.role
              , y = void 0 === E ? "tab" : E
              , S = e.tabIndex
              , N = (0,
            i._)(e, ["before", "children", "status", "after", "selected", "className", "role", "tabIndex"])
              , w = (0,
            c.useAdaptivity)().sizeY
              , R = void 0 === w ? "none" : w
              , A = l.useContext(v.TabsModeContext)
              , M = A.mode
              , T = A.withGaps
              , P = null
              , I = "tab" === y;
            n && (P = "number" == typeof n ? l.createElement(f.Subhead, {
                Component: "span",
                className: (0,
                s.classNames)("vkuiTabsItem__status", "vkuiTabsItem__status--count"),
                weight: "2"
            }, l.createElement(h.VisuallyHidden, null, " "), n) : l.createElement("span", {
                className: "vkuiTabsItem__status"
            }, l.createElement(h.VisuallyHidden, null, " "), n));
            var D = S;
            return I && void 0 === D && (D = C ? 0 : -1),
            l.createElement(m.Tappable, (0,
            o._)((0,
            r._)({}, N), {
                className: (0,
                s.classNames)("vkuiTabsItem", M && b[M], C && "vkuiTabsItem--selected", R !== u.SizeType.REGULAR && g[R], T && "vkuiTabsItem--withGaps", _),
                hoverMode: "vkuiTabsItem--hover",
                activeMode: "",
                focusVisibleMode: "inside",
                hasActive: !1,
                role: y,
                "aria-selected": C,
                tabIndex: D
            }), t && l.createElement("div", {
                className: "vkuiTabsItem__before"
            }, t), l.createElement(p.Headline, {
                Component: "span",
                className: "vkuiTabsItem__label",
                level: "default" === M ? "1" : "2",
                weight: "2"
            }, a), P, d && l.createElement("div", {
                className: "vkuiTabsItem__after"
            }, d), "default" === M && l.createElement("div", {
                className: "vkuiTabsItem__underline",
                "aria-hidden": !0,
                "data-selected": C
            }))
        }
        )
    }
    ,
    795281: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ACTIVE_EFFECT_DELAY: ()=>I,
            Tappable: ()=>H
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(262039)
          , s = a(667294)
          , c = a(962557)
          , u = a(59391)
          , d = a(324285)
          , v = a(878760)
          , m = a(716331)
          , p = a(440981)
          , f = a(428253)
          , h = a(281196)
          , g = a(119360)
          , b = a(855356)
          , k = a(304830)
          , C = a(489026)
          , _ = a(719007)
          , E = a(640784)
          , y = a(108681)
          , S = a(970414)
          , N = a(214542)
          , w = a(266917)
          , R = a(763029)
          , A = a(196999)
          , M = {
            none: "vkuiTappable--sizeX-none",
            compact: "vkuiTappable--sizeX-compact"
        }
          , T = {
            background: "vkuiTappable--hover-background",
            opacity: "vkuiTappable--hover-opacity"
        }
          , P = {
            background: "vkuiTappable--active-background",
            opacity: "vkuiTappable--active-opacity"
        }
          , I = 600
          , D = (0,
        u.default)()
          , L = 0
          , x = 1
          , O = 2
          , B = 3
          , z = s.createContext({
            onHoverChange: c.noop
        });
        function F(e) {
            switch (e) {
            case "opacity":
            case "background":
                return !0;
            default:
                return !1
            }
        }
        var H = function(e) {
            var t = e.children
              , a = e.Component
              , u = e.onClick
              , H = e.onKeyDown
              , V = e.activeEffectDelay
              , Y = void 0 === V ? I : V
              , W = e.stopPropagation
              , q = void 0 !== W && W
              , G = e.getRootRef
              , U = e.hasHover
              , X = void 0 === U || U
              , K = e.hoverMode
              , j = void 0 === K ? "background" : K
              , Q = e.hasActive
              , J = void 0 === Q || Q
              , Z = e.activeMode
              , $ = void 0 === Z ? "background" : Z
              , ee = e.focusVisibleMode
              , te = void 0 === ee ? "inside" : ee
              , ae = e.onEnter
              , ne = e.onLeave
              , re = e.className
              , oe = e.hovered
              , ie = e.borderRadiusMode
              , le = void 0 === ie ? "auto" : ie
              , se = (0,
            o._)(e, ["children", "Component", "onClick", "onKeyDown", "activeEffectDelay", "stopPropagation", "getRootRef", "hasHover", "hoverMode", "hasActive", "activeMode", "focusVisibleMode", "onEnter", "onLeave", "className", "hovered", "borderRadiusMode"]);
            a = a || (se.href ? "a" : "div");
            var ce = s.useContext(z).onHoverChange
              , ue = s.useContext(A.default)
              , de = (0,
            g.usePlatform)()
              , ve = (0,
            h.useFocusVisible)()
              , me = ve.focusVisible
              , pe = ve.onBlur
              , fe = ve.onFocus
              , he = (0,
            d.useAdaptivity)().sizeX
              , ge = void 0 === he ? "none" : he
              , be = (0,
            m.useAdaptivityHasPointer)()
              , ke = (0,
            v.useAdaptivityHasHover)()
              , Ce = (0,
            i._)(s.useState([]), 2)
              , _e = Ce[0]
              , Ee = Ce[1]
              , ye = (0,
            i._)(s.useState(!1), 2)
              , Se = ye[0]
              , Ne = ye[1]
              , we = (0,
            p.useBooleanState)(!1)
              , Re = we.value
              , Ae = we.setTrue
              , Me = we.setFalse
              , Te = (Re || oe) && !se.disabled
              , Pe = J && !Se && !se.disabled
              , Ie = ke && X && !Se
              , De = "a" !== a && "button" !== a && "label" !== a && !se.contentEditable
              , Le = F(j)
              , xe = F($)
              , Oe = ["inside", "outside"].includes(te)
              , Be = (0,
            i._)(function(e, t) {
                var a = s.useMemo((function() {
                    return Math.round(1e8 * Math.random()).toString(16)
                }
                ), [])
                  , n = (0,
                i._)(s.useState(L), 2)
                  , r = n[0]
                  , o = n[1]
                  , l = function() {
                    return o(L)
                }
                  , u = function() {
                    return e && o(O)
                }
                  , d = (0,
                b.useTimeout)(u, 70)
                  , v = (0,
                b.useTimeout)(l, t);
                return (0,
                N.useIsomorphicLayoutEffect)((function() {
                    return r === x ? (d.set(),
                    d.clear) : r === B ? v.clear : (r === O && D.emit("active", a),
                    c.noop)
                }
                ), [r]),
                (0,
                N.useIsomorphicLayoutEffect)((function() {
                    if (r === L)
                        return c.noop;
                    var e = function(e) {
                        e !== a && l()
                    };
                    return D.on("active", e),
                    function() {
                        return D.off("active", e)
                    }
                }
                ), [r === L]),
                (0,
                N.useIsomorphicLayoutEffect)((function() {
                    !e && l()
                }
                ), [e]),
                [r, {
                    delayStart: function() {
                        e && o(x)
                    },
                    start: u,
                    stop: function(e) {
                        if (e)
                            return o(B),
                            v.set(e);
                        l()
                    }
                }]
            }(Pe, Y), 2)
              , ze = Be[0]
              , Fe = Be[1]
              , He = Fe.start
              , Ve = Fe.stop
              , Ye = Fe.delayStart
              , We = ze === O || ze === B
              , qe = (0,
            f.useExternRef)(G)
              , Ge = s.useRef({
                onHoverChange: Ne
            }).current;
            (0,
            N.useIsomorphicLayoutEffect)((function() {
                return Te ? (ce(!0),
                function() {
                    return ce(!1)
                }
                ) : c.noop
            }
            ), [Te]);
            var Ue = de === y.Platform.ANDROID && !be && Pe && "background" === $
              , Xe = (0,
            b.useTimeout)((function() {
                return Ee([])
            }
            ), 225)
              , Ke = (0,
            c.classNames)(re, "vkuiTappable", "vkuiInternalTappable", de === y.Platform.IOS && "vkuiTappable--ios", ge !== C.SizeType.REGULAR && M[ge], Ie && "vkuiTappable--hasHover", Pe && "vkuiTappable--hasActive", Ie && Te && !Le && j, Pe && We && !xe && $, me && !Oe && te, Ie && Te && Le && T[j], Pe && We && xe && P[$], me && "vkuiTappable--focus-visible", "inherit" === le && "vkuiTappable--borderRadiusInherit")
              , je = {
                onStart: (0,
                _.callMultiple)((function(e) {
                    var t = e.originalEvent;
                    if (Pe) {
                        if (t.touches && t.touches.length > 1)
                            return Ve();
                        if (Ue) {
                            var a = (0,
                            E.getOffsetRect)(qe.current)
                              , n = a.top
                              , r = a.left;
                            !function(e, t) {
                                var a = Date.now()
                                  , n = _e.filter((function(e) {
                                    return e.id + 225 > a
                                }
                                ));
                                Ee((0,
                                l._)(n).concat([{
                                    x: e,
                                    y: t,
                                    id: a
                                }])),
                                Xe.set()
                            }((0,
                            S.coordX)(t) - (null != r ? r : 0), (0,
                            S.coordY)(t) - (null != n ? n : 0))
                        }
                        Ye()
                    }
                }
                ), se.onStart),
                onMove: (0,
                _.callMultiple)((function(e) {
                    e.isSlide && Ve()
                }
                ), se.onMove),
                onEnd: (0,
                _.callMultiple)((function(e) {
                    var t = e.duration;
                    if (ze !== L) {
                        ze === x && He();
                        var a = t - 70;
                        Ve(a >= 100 ? 0 : Y - a)
                    }
                }
                ), se.onEnd),
                onClick: u,
                onKeyDown: (0,
                _.callMultiple)((function(e) {
                    var t;
                    De && (0,
                    k.shouldTriggerClickOnEnterOrSpace)(e) && (e.preventDefault(),
                    null === (t = qe.current) || void 0 === t || t.click())
                }
                ), H)
            }
              , Qe = se.href ? "link" : "button";
            return s.createElement(R.Touch, (0,
            n._)((0,
            r._)((0,
            n._)({
                onEnter: (0,
                _.callMultiple)(Ae, ae),
                onLeave: (0,
                _.callMultiple)(Me, ne),
                type: "button" === a ? "button" : void 0,
                tabIndex: De && !se.disabled ? 0 : void 0,
                role: De ? Qe : void 0,
                "aria-disabled": De ? se.disabled : void 0,
                stopPropagation: q && !ue && !se.disabled
            }, se), {
                slideThreshold: 20,
                usePointerHover: !0,
                className: Ke,
                Component: a,
                getRootRef: qe,
                onBlur: (0,
                _.callMultiple)(pe, se.onBlur),
                onFocus: (0,
                _.callMultiple)(fe, se.onFocus)
            }), se.disabled ? {} : je), s.createElement(z.Provider, {
                value: Ge
            }, t), Ue && s.createElement("span", {
                "aria-hidden": !0,
                className: "vkuiTappable__waves"
            }, _e.map((function(e) {
                return s.createElement("span", {
                    key: e.id,
                    className: "vkuiTappable__wave",
                    style: {
                        top: e.y,
                        left: e.x
                    }
                })
            }
            ))), (Ie && "background" === j || Pe && "background" === $) && s.createElement("span", {
                "aria-hidden": !0,
                className: "vkuiTappable__stateLayer"
            }), !se.disabled && Oe && s.createElement(w.FocusVisible, {
                visible: me,
                mode: te
            }))
        }
    }
    ,
    619141: (e,t,a)=>{
        "use strict";
        a.d(t, {
            TextTooltip: ()=>u
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(235030)
          , s = a(243912)
          , c = {
            accent: "vkuiTextTooltip--appearance-accent",
            white: "vkuiTextTooltip--appearance-white",
            black: "vkuiTextTooltip--appearance-black",
            inversion: "vkuiTextTooltip--appearance-inversion"
        }
          , u = function(e) {
            var t = e.children
              , a = e.text
              , u = e.header
              , d = e.appearance
              , v = void 0 === d ? "neutral" : d
              , m = e.className
              , p = (0,
            r._)(e, ["children", "text", "header", "appearance", "className"]);
            return o.createElement(l.HoverPopper, (0,
            n._)({
                className: (0,
                i.classNames)("vkuiTextTooltip", "neutral" !== v && c[v], m),
                arrow: !0,
                arrowClassName: "vkuiTextTooltip__arrow",
                content: o.createElement(o.Fragment, null, (0,
                i.hasReactNode)(u) && o.createElement(s.Subhead, {
                    weight: "2"
                }, u), (0,
                i.hasReactNode)(a) && o.createElement(s.Subhead, null, a))
            }, p), t)
        }
    }
    ,
    371411: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Textarea: ()=>g
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(191963)
          , s = a(667294)
          , c = a(962557)
          , u = a(324285)
          , d = a(678988)
          , v = a(428253)
          , m = a(489026)
          , p = a(937188)
          , f = a(754259)
          , h = (0,
        n._)({
            none: "vkuiTextarea--sizeY-none"
        }, m.SizeType.COMPACT, "vkuiTextarea--sizeY-compact")
          , g = function(e) {
            var t = e.defaultValue
              , a = void 0 === t ? "" : t
              , n = e.grow
              , g = void 0 === n || n
              , b = e.style
              , k = e.onResize
              , C = e.className
              , _ = e.getRootRef
              , E = e.getRef
              , y = e.rows
              , S = void 0 === y ? 2 : y
              , N = e.maxHeight
              , w = e.status
              , R = e.onChange
              , A = e.value
              , M = (0,
            i._)(e, ["defaultValue", "grow", "style", "onResize", "className", "getRootRef", "getRef", "rows", "maxHeight", "status", "onChange", "value"])
              , T = (0,
            l._)((0,
            d.useEnsuredControl)({
                defaultValue: a,
                onChange: R,
                value: A
            }), 2)
              , P = T[0]
              , I = T[1]
              , D = s.useRef()
              , L = (0,
            v.useExternRef)(E)
              , x = (0,
            u.useAdaptivity)().sizeY
              , O = void 0 === x ? "none" : x;
            return s.useEffect((function() {
                var e, t = L.current;
                g && (null === (e = t) || void 0 === e ? void 0 : e.offsetParent) && (t.style.height = "",
                t.style.height = "".concat(t.scrollHeight, "px"),
                t.scrollHeight !== D.current && k && (k(t),
                D.current = t.scrollHeight))
            }
            ), [g, P, O, L, k]),
            s.createElement(p.FormField, {
                className: (0,
                c.classNames)("vkuiTextarea", O !== m.SizeType.REGULAR && h[O], C),
                style: b,
                getRootRef: _,
                disabled: M.disabled,
                status: w
            }, s.createElement(f.Text, (0,
            o._)((0,
            r._)({}, M), {
                Component: "textarea",
                normalize: !1,
                style: {
                    maxHeight: N
                },
                rows: S,
                className: "vkuiTextarea__el",
                value: P,
                onChange: I,
                getRootRef: L
            })))
        }
    }
    ,
    67648: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Tooltip: ()=>_
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(191963)
          , s = a(667294)
          , c = a(973935)
          , u = (a(962557),
        a(428253))
          , d = a(266479)
          , v = a(185983)
          , m = a(801371)
          , p = a(178624)
          , f = a(644029)
          , h = a(119501)
          , g = a(162950)
          , b = a(566506)
          , k = function(e) {
            return s.isValidElement(e) && "string" == typeof e.type
        };
        (0,
        f.warnOnce)("Tooltip");
        function C(e) {
            switch (e) {
            case "left":
                return "start";
            case "right":
                return "end";
            default:
                return ""
            }
        }
        var _ = function(e) {
            var t = e.children
              , a = e.isShown
              , f = void 0 === a || a
              , _ = e.offsetX
              , E = void 0 === _ ? 0 : _
              , y = e.offsetY
              , S = void 0 === y ? 15 : y
              , N = e.alignX
              , w = e.alignY
              , R = e.onClose
              , A = e.cornerOffset
              , M = void 0 === A ? 0 : A
              , T = e.cornerAbsoluteOffset
              , P = e.arrow
              , I = void 0 === P || P
              , D = e.arrowPadding
              , L = void 0 === D ? 14 : D
              , x = e.placement
              , O = e.maxWidth
              , B = void 0 === O ? g.TOOLTIP_MAX_WIDTH : O
              , z = (0,
            i._)(e, ["children", "isShown", "offsetX", "offsetY", "alignX", "alignY", "onClose", "cornerOffset", "cornerAbsoluteOffset", "arrow", "arrowPadding", "placement", "maxWidth"])
              , F = (0,
            l._)(s.useState(null), 2)
              , H = F[0]
              , V = F[1]
              , Y = (0,
            l._)(s.useState(null), 2)
              , W = Y[0]
              , q = Y[1]
              , G = s.useMemo((function() {
                var e;
                return null === (e = W) || void 0 === e ? void 0 : e.closest("[".concat(b.tooltipContainerAttr, "]"))
            }
            ), [W])
              , U = (0,
            h.useNavTransition)().entering
              , X = f && G && !U
              , K = x || function(e, t) {
                return [t || "bottom", C(e || "left")].filter((function(e) {
                    return !!e
                }
                )).join("-")
            }(N, w)
              , j = (0,
            d.checkIsNotAutoPlacement)(K)
              , Q = s.useMemo((function() {
                var e;
                return "fixed" === (null === (e = W) || void 0 === e ? void 0 : e.style.position) ? "fixed" : "absolute"
            }
            ), [W]);
            var J = s.useMemo((function() {
                var e = [(0,
                v.offset)({
                    crossAxis: E,
                    mainAxis: S
                })];
                return j ? e.push((0,
                v.flip)()) : e.push((0,
                v.autoPlacement)({
                    alignment: K ? (0,
                    d.getAutoPlacementAlign)(K) : null
                })),
                e.push((0,
                v.shift)()),
                I && (e.push((0,
                m.arrow)({
                    element: H,
                    padding: L
                })),
                e.push({
                    name: "arrowOffset",
                    fn: function(e) {
                        var t = e.placement
                          , a = e.middlewareData;
                        return a.arrow ? (!function(e) {
                            return e.startsWith("top") || e.startsWith("bottom")
                        }(t) ? void 0 !== T ? a.arrow.y = T : void 0 !== a.arrow.y && (a.arrow.y += M) : void 0 !== T ? a.arrow.x = T : void 0 !== a.arrow.x && (a.arrow.x += M),
                        Promise.resolve({})) : Promise.resolve({})
                    }
                })),
                e
            }
            ), [I, H, L, T, M, E, S, K, j])
              , Z = (0,
            m.useFloating)({
                strategy: Q,
                placement: j ? K : void 0,
                middleware: J,
                whileElementsMounted: p.autoUpdateFloatingElement
            })
              , $ = Z.x
              , ee = Z.y
              , te = Z.placement
              , ae = Z.refs
              , ne = Z.middlewareData.arrow
              , re = k(t) ? t.ref : s.isValidElement(t) ? t.props.getRootRef : null
              , oe = (0,
            u.useExternRef)(q, ae.setReference, re)
              , ie = s.isValidElement(t) ? s.cloneElement(t, (0,
            n._)({}, k(t) ? "ref" : "getRootRef", oe)) : t;
            return s.createElement(s.Fragment, null, ie, X && null != W && c.createPortal(s.createElement(s.Fragment, null, s.createElement(g.TooltipBase, (0,
            o._)((0,
            r._)({}, z), {
                getRootRef: ae.setFloating,
                floatingStyle: (0,
                d.convertFloatingDataToReactCSSProperties)(Q, $, ee),
                withArrow: I,
                arrowCoords: ne,
                arrowPlacement: te,
                getArrowRef: V,
                maxWidth: B
            })), s.createElement("div", {
                className: "vkuiTooltip__overlay",
                onClickCapture: R
            })), G))
        }
    }
    ,
    566506: (e,t,a)=>{
        "use strict";
        a.d(t, {
            TooltipContainer: ()=>s,
            tooltipContainerAttr: ()=>l
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = "data-tooltip-container"
          , s = i.forwardRef((function(e, t) {
            var a = e.fixed
              , s = void 0 !== a && a
              , c = (0,
            o._)(e, ["fixed"]);
            return c[l] = s ? "fixed" : "true",
            i.createElement("div", (0,
            r._)((0,
            n._)({}, c), {
                ref: t
            }))
        }
        ))
    }
    ,
    162950: (e,t,a)=>{
        "use strict";
        a.d(t, {
            TOOLTIP_MAX_WIDTH: ()=>v,
            TooltipBase: ()=>p
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(842760)
          , c = a(136808)
          , u = a(523323)
          , d = a(243912)
          , v = 220
          , m = {
            accent: "vkuiTooltipBase--appearance-accent",
            white: "vkuiTooltipBase--appearance-white",
            black: "vkuiTooltipBase--appearance-black",
            inversion: "vkuiTooltipBase--appearance-inversion"
        }
          , p = function(e) {
            var t = e.appearance
              , a = void 0 === t ? "accent" : t
              , p = e.withArrow
              , f = void 0 === p || p
              , h = e.arrowCoords
              , g = e.arrowPlacement
              , b = void 0 === g ? "top" : g
              , k = e.getArrowRef
              , C = e.getRootRef
              , _ = e.floatingStyle
              , E = e.ArrowIcon
              , y = void 0 === E ? s.DefaultIcon : E
              , S = e.text
              , N = e.header
              , w = e.maxWidth
              , R = void 0 === w ? v : w
              , A = (0,
            o._)(e, ["appearance", "withArrow", "arrowCoords", "arrowPlacement", "getArrowRef", "getRootRef", "floatingStyle", "ArrowIcon", "text", "header", "maxWidth"]);
            return i.createElement(u.RootComponent, (0,
            r._)((0,
            n._)({}, A), {
                baseClassName: (0,
                l.classNames)("vkuiTooltipBase", "neutral" !== a && m[a])
            }), i.createElement("div", {
                ref: C,
                style: _
            }, f && i.createElement(c.PopperArrow, {
                coords: h,
                placement: b,
                arrowClassName: "vkuiTooltipBase__arrow",
                getRootRef: k,
                Icon: y
            }), i.createElement("div", {
                className: "vkuiTooltipBase__content",
                style: null !== R ? {
                    maxWidth: R
                } : void 0
            }, N && i.createElement(d.Subhead, {
                weight: "2"
            }, N), S && i.createElement(d.Subhead, null, S))))
        }
    }
    ,
    763029: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Touch: ()=>v
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(151571)
          , s = a(428253)
          , c = a(181498)
          , u = a(970414)
          , d = a(214542)
          , v = function(e) {
            var t = function(e) {
                var t, n = null !== (t = H.current) && void 0 !== t ? t : {}, r = n.isPressed, o = n.isSlide, i = n.isSlideX, l = n.isSlideY;
                r && V(e, [C, l && E, i && _]);
                var s = (0,
                u.touchEnabled)();
                F.current = (!s || !o) && Boolean(o),
                H.current = {},
                s && b && b(e),
                a()
            }
              , a = function() {
                X.forEach((function(e) {
                    return e.remove()
                }
                ))
            }
              , v = e.onStart
              , m = e.onStartX
              , p = e.onStartY
              , f = e.onMove
              , h = e.onMoveX
              , g = e.onMoveY
              , b = e.onLeave
              , k = e.onEnter
              , C = e.onEnd
              , _ = e.onEndX
              , E = e.onEndY
              , y = e.onClickCapture
              , S = e.usePointerHover
              , N = e.slideThreshold
              , w = void 0 === N ? 5 : N
              , R = e.useCapture
              , A = void 0 !== R && R
              , M = e.Component
              , T = void 0 === M ? "div" : M
              , P = e.getRootRef
              , I = e.noSlideClick
              , D = void 0 !== I && I
              , L = e.stopPropagation
              , x = void 0 !== L && L
              , O = (0,
            o._)(e, ["onStart", "onStartX", "onStartY", "onMove", "onMoveX", "onMoveY", "onLeave", "onEnter", "onEnd", "onEndX", "onEndY", "onClickCapture", "usePointerHover", "slideThreshold", "useCapture", "Component", "getRootRef", "noSlideClick", "stopPropagation"])
              , B = (0,
            c.useDOM)().document
              , z = i.useMemo(u.getSupportedEvents, [])
              , F = i.useRef(!1)
              , H = i.useRef(null)
              , V = function(e, t) {
                x && e.stopPropagation(),
                t.forEach((function(t) {
                    var a, o, i, l = Date.now() - (null !== (i = null === (o = H.current) || void 0 === o || null === (a = o.startT) || void 0 === a ? void 0 : a.getTime()) && void 0 !== i ? i : 0);
                    t && t((0,
                    r._)((0,
                    n._)({}, H.current), {
                        duration: l,
                        originalEvent: e
                    }))
                }
                ))
            }
              , Y = (0,
            l.useEventListener)(S ? "pointerenter" : "mouseenter", k)
              , W = (0,
            l.useEventListener)(S ? "pointerleave" : "mouseleave", b)
              , q = (0,
            l.useEventListener)(z[0], (function(e) {
                var t, a, n;
                H.current = (t = (0,
                u.coordX)(e),
                a = (0,
                u.coordY)(e),
                {
                    startX: t,
                    startY: a,
                    startT: new Date,
                    duration: 0,
                    isPressed: !0,
                    isY: !1,
                    isX: !1,
                    isSlideX: !1,
                    isSlideY: !1,
                    isSlide: !1,
                    shiftX: 0,
                    shiftY: 0,
                    shiftXAbs: 0,
                    shiftYAbs: 0
                }),
                V(e, [v, m, p]),
                (n = (0,
                u.touchEnabled)() ? e.target : B) && X.forEach((function(e) {
                    return e.add(n)
                }
                ))
            }
            ), {
                capture: A,
                passive: !1
            })
              , G = (0,
            s.useExternRef)(P);
            (0,
            d.useIsomorphicLayoutEffect)((function() {
                var e = G.current;
                e && (Y.add(e),
                W.add(e),
                q.add(e))
            }
            ), [T]);
            var U = {
                capture: A,
                passive: !1
            }
              , X = [(0,
            l.useEventListener)(z[1], (function(e) {
                var a, n = null !== (a = H.current) && void 0 !== a ? a : {}, r = n.isPressed, o = n.isX, i = n.isY, l = n.startX, s = void 0 === l ? 0 : l, c = n.startY, d = void 0 === c ? 0 : c;
                if (r) {
                    var v, m = (0,
                    u.coordX)(e) - s, p = (0,
                    u.coordY)(e) - d, b = Math.abs(m), k = Math.abs(p);
                    if (e.touches && e.touches.length > 1)
                        return t(e);
                    if (!o && !i) {
                        var C = b >= w && b > k
                          , _ = k >= w && k > b
                          , E = C && (!!h || !!f)
                          , y = _ && (!!g || !!f);
                        H.current && Object.assign(H.current, {
                            isY: _,
                            isX: C,
                            isSlideX: E,
                            isSlideY: y,
                            isSlide: E || y
                        })
                    }
                    (null === (v = H.current) || void 0 === v ? void 0 : v.isSlide) && (Object.assign(H.current, {
                        shiftX: m,
                        shiftY: p,
                        shiftXAbs: b,
                        shiftYAbs: k
                    }),
                    V(e, [f, H.current.isSlideX && h, H.current.isSlideY && g]))
                }
            }
            ), U), (0,
            l.useEventListener)(z[2], t, U), (0,
            l.useEventListener)(z[3], t, U)];
            return i.createElement(T, (0,
            r._)((0,
            n._)({}, O), {
                onDragStart: function(e) {
                    var t = e.target;
                    "A" !== t.tagName && "IMG" !== t.tagName || e.preventDefault()
                },
                onClickCapture: function(e) {
                    if (!F.current)
                        return y && y(e);
                    D ? (e.stopPropagation(),
                    e.preventDefault()) : y && y(e),
                    F.current = !1
                },
                ref: G
            }))
        }
    }
    ,
    196999: (e,t,a)=>{
        "use strict";
        a.d(t, {
            default: ()=>n
        });
        const n = a(667294).createContext(!1)
    }
    ,
    443910: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Caption: ()=>c
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(292092)
          , s = {
            1: "vkuiCaption--level-1",
            2: "vkuiCaption--level-2",
            3: "vkuiCaption--level-3"
        }
          , c = function(e) {
            var t = e.className
              , a = e.level
              , c = void 0 === a ? "1" : a
              , u = e.caps
              , d = e.Component
              , v = void 0 === d ? "span" : d
              , m = e.normalize
              , p = void 0 === m || m
              , f = (0,
            r._)(e, ["className", "level", "caps", "Component", "normalize"]);
            return o.createElement(l.Typography, (0,
            n._)({
                Component: v,
                normalize: p,
                className: (0,
                i.classNames)(t, u && "vkuiCaption--caps", s[c])
            }, f))
        }
    }
    ,
    894872: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Footnote: ()=>s
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(292092)
          , s = function(e) {
            var t = e.className
              , a = e.caps
              , s = e.Component
              , c = void 0 === s ? "span" : s
              , u = e.normalize
              , d = void 0 === u || u
              , v = (0,
            r._)(e, ["className", "caps", "Component", "normalize"]);
            return o.createElement(l.Typography, (0,
            n._)({
                Component: c,
                normalize: d,
                className: (0,
                i.classNames)(t, "vkuiFootnote", a && "vkuiFootnote--caps")
            }, v))
        }
    }
    ,
    115446: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Headline: ()=>m
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(324285)
          , c = a(489026)
          , u = a(292092)
          , d = {
            1: "vkuiHeadline--level-1",
            2: "vkuiHeadline--level-2"
        }
          , v = (0,
        n._)({
            none: "vkuiHeadline--sizeY-none"
        }, c.SizeType.COMPACT, "vkuiHeadline--sizeY-compact")
          , m = function(e) {
            var t = e.className
              , a = e.weight
              , n = void 0 === a ? "3" : a
              , m = e.level
              , p = void 0 === m ? "1" : m
              , f = e.Component
              , h = void 0 === f ? "h4" : f
              , g = e.normalize
              , b = void 0 === g || g
              , k = (0,
            o._)(e, ["className", "weight", "level", "Component", "normalize"])
              , C = (0,
            s.useAdaptivity)().sizeY
              , _ = void 0 === C ? "none" : C;
            return i.createElement(u.Typography, (0,
            r._)({
                Component: h,
                normalize: b,
                weight: n,
                className: (0,
                l.classNames)(t, _ !== c.SizeType.REGULAR && v[_], d[p])
            }, k))
        }
    }
    ,
    390574: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Paragraph: ()=>s
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(292092)
          , s = function(e) {
            var t = e.className
              , a = e.Component
              , s = void 0 === a ? "span" : a
              , c = e.normalize
              , u = void 0 !== c && c
              , d = (0,
            r._)(e, ["className", "Component", "normalize"]);
            return o.createElement(l.Typography, (0,
            n._)({
                Component: s,
                normalize: u,
                className: (0,
                i.classNames)(t, "vkuiParagraph")
            }, d))
        }
    }
    ,
    243912: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Subhead: ()=>v
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(324285)
          , c = a(489026)
          , u = a(292092)
          , d = (0,
        n._)({
            none: "vkuiSubhead--sizeY-none"
        }, c.SizeType.COMPACT, "vkuiSubhead--sizeY-compact")
          , v = function(e) {
            var t = e.className
              , a = e.Component
              , n = void 0 === a ? "h5" : a
              , v = e.normalize
              , m = void 0 === v || v
              , p = (0,
            o._)(e, ["className", "Component", "normalize"])
              , f = (0,
            s.useAdaptivity)().sizeY
              , h = void 0 === f ? "none" : f;
            return i.createElement(u.Typography, (0,
            r._)({
                Component: n,
                normalize: m,
                className: (0,
                l.classNames)(t, "vkuiSubhead", h !== c.SizeType.REGULAR && d[h])
            }, p))
        }
    }
    ,
    754259: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Text: ()=>v
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(324285)
          , c = a(489026)
          , u = a(292092)
          , d = (0,
        n._)({
            none: "vkuiText--sizeY-none"
        }, c.SizeType.COMPACT, "vkuiText--sizeY-compact")
          , v = function(e) {
            var t = e.className
              , a = e.Component
              , n = void 0 === a ? "span" : a
              , v = e.normalize
              , m = void 0 === v || v
              , p = (0,
            o._)(e, ["className", "Component", "normalize"])
              , f = (0,
            s.useAdaptivity)().sizeY
              , h = void 0 === f ? "none" : f;
            return i.createElement(u.Typography, (0,
            r._)({
                Component: n,
                normalize: m,
                className: (0,
                l.classNames)(t, "vkuiText", h !== c.SizeType.REGULAR && d[h])
            }, p))
        }
    }
    ,
    931252: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Title: ()=>c
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(292092)
          , s = {
            1: "vkuiTitle--level-1",
            2: "vkuiTitle--level-2",
            3: "vkuiTitle--level-3"
        }
          , c = function(e) {
            var t = e.className
              , a = e.level
              , c = void 0 === a ? "1" : a
              , u = e.Component
              , d = e.normalize
              , v = void 0 === d || d
              , m = (0,
            r._)(e, ["className", "level", "Component", "normalize"]);
            return u || (u = "h" + c),
            o.createElement(l.Typography, (0,
            n._)({
                Component: u,
                normalize: v,
                className: (0,
                i.classNames)(t, s[c])
            }, m))
        }
    }
    ,
    292092: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Typography: ()=>c
        });
        var n = a(772253)
          , r = a(158339)
          , o = a(667294)
          , i = a(962557)
          , l = a(523323)
          , s = {
            1: "vkuiTypography--weight-1",
            2: "vkuiTypography--weight-2",
            3: "vkuiTypography--weight-3"
        }
          , c = function(e) {
            var t = e.weight
              , a = e.Component
              , c = void 0 === a ? "span" : a
              , u = e.normalize
              , d = (0,
            r._)(e, ["weight", "Component", "normalize"]);
            return o.createElement(l.RootComponent, (0,
            n._)({
                Component: c,
                baseClassName: (0,
                i.classNames)("vkuiTypography", u && "vkuiTypography--normalize", t && s[t])
            }, d))
        }
    }
    ,
    525335: (e,t,a)=>{
        "use strict";
        a.d(t, {
            UsersStack: ()=>g
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(962557)
          , s = a(228248)
          , c = a(644029)
          , u = a(523323)
          , d = a(443910)
          , v = a(894872)
          , m = {
            s: "vkuiUsersStack--size-s",
            m: "vkuiUsersStack--size-m",
            l: "vkuiUsersStack--size-l"
        }
          , p = {
            row: "vkuiUsersStack--direction-row",
            "row-reverse": "vkuiUsersStack--direction-row-reverse",
            column: "vkuiUsersStack--direction-column"
        };
        function f(e) {
            var t = e.photoSize
              , a = e.direction
              , r = (0,
            o._)(e, ["photoSize", "direction"]);
            switch (a) {
            case "circle":
                var l = t / 2;
                return i.createElement("circle", (0,
                n._)({
                    cx: l,
                    cy: l,
                    r: l
                }, r));
            case "right":
                return 24 === t ? i.createElement("path", (0,
                n._)({
                    d: "M22,18.625A12 12 0 0 1 12 24A12 12 0 0 1 12 0A12 12 0 0 1 22 5.375A12 12 0 0 0 22,18.625"
                }, r)) : i.createElement("path", (0,
                n._)({
                    d: "M30,23.75A16 16 0 0 1 16 32A16 16 0 0 1 16 0A16 16 0 0 1 30 8.25A16 16 0 0 0 30,23.75"
                }, r));
            default:
                switch (t) {
                case 16:
                    return i.createElement("path", (0,
                    n._)({
                        d: "M2,13.285A8 8 0 0 0 8 16A8 8 0 0 0 8 0A8 8 0 0 0 2 2.715A8 8 0 0 1 2,13.285"
                    }, r));
                case 24:
                    return i.createElement("path", (0,
                    n._)({
                        d: "M2,18.625A12 12 0 0 0 12 24A12 12 0 0 0 12 0A12 12 0 0 0 2 5.375A12 12 0 0 1 2,18.625"
                    }, r));
                default:
                    return i.createElement("path", (0,
                    n._)({
                        d: "M2,23.75A16 16 0 0 0 16 32A16 16 0 0 0 16 0A16 16 0 0 0 2 8.25A16 16 0 0 1 2,23.75"
                    }, r))
                }
            }
        }
        var h = {
            s: 16,
            m: 24,
            l: 32
        }
          , g = ((0,
        c.warnOnce)("UsersStack"),
        function(e) {
            var t = e.photos
              , a = void 0 === t ? [] : t
              , c = e.visibleCount
              , g = void 0 === c ? 3 : c
              , b = e.count
              , k = void 0 === b ? Math.max(0, a.length - g) : b
              , C = e.size
              , _ = void 0 === C ? "m" : C
              , E = e.layout
              , y = e.children
              , S = e.direction
              , N = void 0 === S ? "row" : S
              , w = (0,
            o._)(e, ["photos", "visibleCount", "count", "size", "layout", "children", "direction"])
              , R = (0,
            s.useId)()
              , A = k > 0 && k < 100 && "s" !== _
              , M = "l" === _ ? v.Footnote : d.Caption
              , T = h[_]
              , P = A ? "right" : "left"
              , I = a.slice(0, g).map((function(e, t) {
                var a = 0 !== t || A ? P : "circle"
                  , n = "UsersStackDefs".concat(R).concat(t)
                  , r = "#".concat(n)
                  , o = "UsersStackMask".concat(R).concat(t);
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "vkuiUsersStack__photo",
                    key: t,
                    "aria-hidden": !0
                }, i.createElement("defs", null, i.createElement(f, {
                    id: n,
                    direction: a,
                    photoSize: T
                })), i.createElement("clipPath", {
                    id: o
                }, i.createElement("use", {
                    href: r
                })), i.createElement("g", {
                    clipPath: "url(#".concat(o, ")")
                }, i.createElement("use", {
                    href: r,
                    className: "vkuiUsersStack__fill"
                }), i.createElement("image", {
                    href: e,
                    width: T,
                    height: T
                }), i.createElement("use", {
                    href: r,
                    fill: "none",
                    stroke: "rgba(0, 0, 0, 0.08)"
                })))
            }
            ))
              , D = A ? i.createElement(M, {
                caps: !0,
                weight: "1",
                className: (0,
                l.classNames)("vkuiUsersStack__photo", "vkuiUsersStack__photo--others")
            }, "+", k) : null;
            var L = E && ("vertical" === E ? "column" : "row") || N;
            return i.createElement(u.RootComponent, (0,
            r._)((0,
            n._)({}, w), {
                baseClassName: (0,
                l.classNames)("vkuiInternalUsersStack", "vkuiUsersStack", m[_], p[L])
            }), (I.length > 0 || D) && i.createElement("div", {
                className: "vkuiUsersStack__photos",
                "aria-hidden": !0
            }, I, D), (0,
            l.hasReactNode)(y) && i.createElement(v.Footnote, {
                className: "vkuiUsersStack__text"
            }, y))
        }
        )
    }
    ,
    969985: (e,t,a)=>{
        "use strict";
        a.d(t, {
            View: ()=>M
        });
        var n, r = a(772253), o = a(414932), i = a(158339), l = a(191963), s = a(667294), c = a(962557), u = a(119360), d = a(724298), v = a(855356), m = a(70743), p = a(181498), f = a(504153), h = a(108681), g = a(23220), b = a(214542), k = a(644029), C = a(909795), _ = a(766351), E = a(119501), y = a(971562), S = a(199944), N = a(763029), w = a(577525);
        !function(e) {
            e[e.fail = 1] = "fail",
            e[e.success = 2] = "success"
        }(n || (n = {}));
        var R = {}
          , A = (0,
        k.warnOnce)("View")
          , M = function(e) {
            var t, a, k = e.activePanel, M = e.history, T = e.nav, P = e.onTransition, I = e.onSwipeBack, D = e.onSwipeBackStart, L = e.onSwipeBackCancel, x = e.children, O = e.className, B = (0,
            i._)(e, ["activePanel", "history", "nav", "onTransition", "onSwipeBack", "onSwipeBackStart", "onSwipeBackCancel", "children", "className"]), z = s.useRef(R[(0,
            f.getNavId)({
                nav: T,
                id: B.id
            })] || {}), F = s.useRef(c.noop);
            s.useEffect((function() {
                return function() {
                    var e = (0,
                    f.getNavId)({
                        nav: T,
                        id: B.id
                    });
                    e && (R[e] = z.current)
                }
            }
            ));
            var H = s.useRef({})
              , V = (0,
            p.useDOM)()
              , Y = V.window
              , W = V.document
              , q = (0,
            C.useScroll)()
              , G = (0,
            _.useConfigProvider)()
              , U = (0,
            S.useSplitCol)()
              , X = (0,
            u.usePlatform)()
              , K = (0,
            l._)(s.useState(!1), 2)
              , j = K[0]
              , Q = K[1]
              , J = (0,
            l._)(s.useState([k]), 2)
              , Z = J[0]
              , $ = J[1]
              , ee = (0,
            l._)(s.useState(k), 2)
              , te = ee[0]
              , ae = ee[1]
              , ne = (0,
            l._)(s.useState(void 0), 2)
              , re = ne[0]
              , oe = ne[1]
              , ie = (0,
            l._)(s.useState(null), 2)
              , le = ie[0]
              , se = ie[1]
              , ce = (0,
            l._)(s.useState(null), 2)
              , ue = ce[0]
              , de = ce[1]
              , ve = (0,
            l._)(s.useState(void 0), 2)
              , me = ve[0]
              , pe = ve[1]
              , fe = (0,
            l._)(s.useState(!1), 2)
              , he = fe[0]
              , ge = fe[1]
              , be = (0,
            l._)(s.useState(0), 2)
              , ke = be[0]
              , Ce = be[1]
              , _e = (0,
            l._)(s.useState(0), 2)
              , Ee = _e[0]
              , ye = _e[1]
              , Se = (0,
            l._)(s.useState(null), 2)
              , Ne = Se[0]
              , we = Se[1]
              , Re = (0,
            l._)(s.useState(null), 2)
              , Ae = Re[0]
              , Me = Re[1]
              , Te = (0,
            l._)(s.useState(null), 2)
              , Pe = Te[0]
              , Ie = Te[1]
              , De = (0,
            l._)(s.useState(!1), 2)
              , Le = De[0]
              , xe = De[1]
              , Oe = (0,
            d.usePrevious)(k)
              , Be = (0,
            d.usePrevious)(me)
              , ze = (0,
            d.usePrevious)(Le)
              , Fe = (0,
            d.usePrevious)(Pe)
              , He = (0,
            d.usePrevious)(Ae)
              , Ve = (0,
            d.usePrevious)(P)
              , Ye = s.Children.toArray(x).filter((function(e) {
                var t = (0,
                f.getNavId)(e.props, A);
                return void 0 !== t && Z.includes(t) || t === Ae || t === Ne
            }
            ))
              , We = !1 === (null === (t = G) || void 0 === t ? void 0 : t.transitionMotionEnabled) || !(null === (a = U) || void 0 === a ? void 0 : a.animate) || X === h.Platform.VKCOM
              , qe = function(e) {
                return null === e ? null : H.current[e]
            }
              , Ge = s.useCallback((function(e, t) {
                t && (z.current[e] = 0),
                se(null),
                de(null),
                $([k]),
                ae(k),
                Q(!1),
                oe(t),
                F.current = function() {
                    var a;
                    null === (a = q) || void 0 === a || a.scrollTo(0, t ? z.current[k] : 0),
                    P && P({
                        isBack: t,
                        from: e,
                        to: k
                    })
                }
            }
            ), [k, P, q]);
            (0,
            b.useIsomorphicLayoutEffect)((function() {
                F.current(),
                F.current = c.noop
            }
            ), [F.current]);
            var Ue = s.useCallback((function(e) {
                e && !["vkuianimation-ios-next-forward", "vkuianimation-ios-prev-back", "vkuianimation-view-next-forward", "vkuianimation-view-prev-back"].includes(e.animationName) || null === le || Ge(le, Boolean(re))
            }
            ), [Ge, re, le])
              , Xe = (0,
            m.useWaitTransitionFinish)().waitTransitionFinish
              , Ke = (0,
            v.useTimeout)(Ue, X === h.Platform.IOS ? 600 : 300)
              , je = s.useCallback((function() {
                I && I()
            }
            ), [I])
              , Qe = s.useCallback((function() {
                L && L(),
                Me(null),
                we(null),
                pe(!1),
                Ie(null),
                Ce(0),
                ye(0)
            }
            ), [L])
              , Je = s.useCallback((function(e) {
                var t, a;
                if (!e || (null === (t = e) || void 0 === t ? void 0 : t.propertyName.includes("transform")) && (null === (a = e) || void 0 === a ? void 0 : a.target) === qe(Ne))
                    switch (Pe) {
                    case n.fail:
                        Qe();
                        break;
                    case n.success:
                        je()
                    }
            }
            ), [Qe, je, Ne, Pe])
              , Ze = s.useCallback((function(e) {
                if (me) {
                    var t, a = Ee / e.duration * 1e3;
                    0 === Ee ? Qe() : Ee >= (null !== (t = Y.innerWidth) && void 0 !== t ? t : 0) ? je() : a > 250 || ke + Ee > Y.innerWidth / 2 ? Ie(n.success) : Ie(n.fail)
                }
                he && ge(!1)
            }
            ), [Qe, je, Ee, ke, me, he, Y])
              , $e = function(e) {
                if (!c.canUseDOM || !Y)
                    return {};
                var t = e === Ae
                  , a = e === Ne;
                if (!t && !a || Pe)
                    return {};
                var n = "".concat(Ee, "px")
                  , r = "".concat(100 * Ee / Y.innerWidth / 2 - 50, "%")
                  , o = .3 * (Y.innerWidth - Ee) / Y.innerWidth;
                return Pe ? t ? {
                    boxShadow: "-2px 0 12px rgba(0, 0, 0, ".concat(o, ")")
                } : {} : a ? {
                    transform: "translate3d(".concat(r, ", 0, 0)"),
                    WebkitTransform: "translate3d(".concat(r, ", 0, 0)")
                } : t ? {
                    transform: "translate3d(".concat(n, ", 0, 0)"),
                    WebkitTransform: "translate3d(".concat(n, ", 0, 0)"),
                    boxShadow: "-2px 0 12px rgba(0, 0, 0, ".concat(o, ")")
                } : {}
            };
            return s.useEffect((function() {
                if (Oe && Oe !== k && !Be && !ze) {
                    var e, t = s.Children.toArray(x).map((function(e) {
                        return (0,
                        f.getNavId)(e.props, A)
                    }
                    )).find((function(e) {
                        return e === Oe || e === k
                    }
                    )) === k;
                    z.current[Oe] = null === (e = q) || void 0 === e ? void 0 : e.getScroll().y,
                    We ? Ge(Oe, t) : ((0,
                    p.blurActiveElement)(W),
                    $([Oe, k]),
                    se(Oe),
                    de(k),
                    ae(null),
                    Q(!0),
                    oe(t),
                    g.animationEvent.supported || Ke.set())
                }
                if (Oe && Oe !== k && Be) {
                    var a = k
                      , r = Oe;
                    He && (z.current[He] = 0),
                    Me(null),
                    we(null),
                    pe(!1),
                    Ie(null),
                    Ce(0),
                    ye(0),
                    ae(a),
                    $([a]),
                    oe(!0),
                    F.current = function() {
                        var e;
                        null !== a && (null === (e = q) || void 0 === e || e.scrollTo(0, z.current[a]));
                        Ve && Ve({
                            isBack: !0,
                            from: r,
                            to: a
                        })
                    }
                }
                var o;
                (!Fe && Pe && Xe(qe(Ne), Je, X === h.Platform.IOS ? 600 : 300),
                Fe !== n.fail || Pe || null === te) || (null === (o = q) || void 0 === o || o.scrollTo(0, z.current[te]));
                Oe !== k && Le && (xe(!1),
                de(null),
                se(null),
                Q(!1),
                $([k]),
                ae(k))
            }
            ), [k, te, Ke, Le, x, We, W, Ge, D, Ye, X, Oe, ze, Ve, He, Fe, Be, q, Ne, Pe, me, Je, Xe]),
            s.createElement(N.Touch, (0,
            o._)((0,
            r._)({
                Component: "section"
            }, B), {
                className: (0,
                c.classNames)("vkuiView", X === h.Platform.IOS && (0,
                c.classNames)("vkuiView--ios", "vkuiInternalView--ios"), !We && j && "vkuiView--animated", !We && me && "vkuiView--swiping-back", We && "vkuiView--no-motion", O),
                onMoveX: function(e) {
                    var t;
                    if (!(X !== h.Platform.IOS || he || (0,
                    w.swipeBackExcluded)(e) || We))
                        if (null === (t = G) || void 0 === t ? void 0 : t.isWebView) {
                            if (I && !(j && e.startX <= 70)) {
                                if (!me && e.startX <= 70 && M && M.length > 1) {
                                    var a;
                                    if (D)
                                        if ("prevent" === D(te))
                                            return void ge(!0);
                                    if (null !== te)
                                        (0,
                                        p.blurActiveElement)(W),
                                        z.current[te] = null === (a = q) || void 0 === a ? void 0 : a.getScroll().y;
                                    pe(!0),
                                    Ce(e.startX),
                                    Me(te),
                                    we(M.slice(-2)[0])
                                }
                                if (me) {
                                    var n = 0;
                                    n = e.shiftX < 0 ? 0 : e.shiftX > Y.innerWidth - ke ? Y.innerWidth : e.shiftX,
                                    ye(n)
                                }
                            }
                        } else
                            (e.startX <= 70 || e.startX >= Y.innerWidth - 70) && !Le && xe(!0)
                },
                onEnd: Ze
            }), s.createElement("div", {
                className: "vkuiView__panels"
            }, Ye.map((function(e) {
                var t, a = (0,
                f.getNavId)(e.props, A), r = j && a === (re ? le : ue), o = a === le || a === Ae || a === Ne || a === ue && re;
                return s.createElement("div", {
                    className: (0,
                    c.classNames)("vkuiView__panel", a === te && "vkuiView__panel--active", a === le && "vkuiView__panel--prev", a === ue && "vkuiView__panel--next", a === Ae && "vkuiView__panel--swipe-back-prev", a === Ne && "vkuiView__panel--swipe-back-next", Pe === n.success && "vkuiView__panel--swipe-back-success", Pe === n.fail && "vkuiView__panel--swipe-back-failed"),
                    onAnimationEnd: r ? Ue : void 0,
                    ref: function(e) {
                        return void 0 !== a && (H.current[a] = e)
                    },
                    style: $e(a),
                    key: a
                }, s.createElement("div", {
                    className: "vkuiView__panel-in",
                    style: {
                        marginTop: o ? -(null !== (t = z.current[a]) && void 0 !== t ? t : 0) : void 0
                    }
                }, s.createElement(y.NavTransitionDirectionProvider, {
                    isBack: me || re
                }, s.createElement(E.NavTransitionProvider, {
                    entering: a === ue || a === Ne
                }, e))))
            }
            ))))
        }
    }
    ,
    577525: (e,t,a)=>{
        "use strict";
        a.d(t, {
            swipeBackExcluded: ()=>r
        });
        var n = "input, textarea, [data-vkui-swipe-back=false]";
        function r(e) {
            var t, a, r = e.originalEvent.target;
            return Boolean(null === (a = r) || void 0 === a || null === (t = a.closest) || void 0 === t ? void 0 : t.call(a, n))
        }
    }
    ,
    516511: (e,t,a)=>{
        "use strict";
        a.d(t, {
            VisuallyHidden: ()=>s
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(667294)
          , l = a(523323)
          , s = function(e) {
            var t = e.Component
              , a = void 0 === t ? "span" : t
              , s = (0,
            o._)(e, ["Component"]);
            return i.createElement(l.RootComponent, (0,
            r._)((0,
            n._)({
                Component: a
            }, s), {
                baseClassName: "vkuiVisuallyHidden"
            }))
        }
    }
    ,
    7082: (e,t,a)=>{
        "use strict";
        var n, r;
        a.d(t, {
            Appearance: ()=>r,
            resolveAppearance: ()=>i
        }),
        function(e) {
            e.BRIGHT_LIGHT = "bright_light",
            e.SPACE_GRAY = "space_gray",
            e.VKCOM_LIGHT = "vkcom_light",
            e.VKCOM_DARK = "vkcom_dark"
        }(n || (n = {})),
        function(e) {
            e.DARK = "dark",
            e.LIGHT = "light"
        }(r || (r = {}));
        var o = function(e) {
            return e === n.SPACE_GRAY || e === n.VKCOM_DARK ? "dark" : "light"
        };
        function i(e) {
            var t = e.scheme
              , a = e.appearance;
            return a || o(t)
        }
    }
    ,
    539669: (e,t,a)=>{
        "use strict";
        function n(e) {
            return e % 6 + 1
        }
        a.d(t, {
            calcInitialsAvatarColor: ()=>n
        })
    }
    ,
    343236: (e,t,a)=>{
        "use strict";
        a.d(t, {
            generateVKUITokensClassName: ()=>r
        });
        var n = a(108681)
          , r = function(e, t) {
            var a;
            switch (e) {
            case n.Platform.ANDROID:
                a = "vkBase";
                break;
            case n.Platform.IOS:
                a = "vkIOS";
                break;
            case n.Platform.VKCOM:
                a = "vkCom";
                break;
            default:
                a = e
            }
            return "vkui--".concat(a, "--").concat(t)
        }
    }
    ,
    200528: (e,t,a)=>{
        "use strict";
        function n(e, t) {
            return null != e ? e : t
        }
        a.d(t, {
            getOrDefault: ()=>n
        })
    }
    ,
    633656: (e,t,a)=>{
        "use strict";
        a.d(t, {
            clamp: ()=>n,
            rescale: ()=>o
        });
        var n = function(e, t, a) {
            return Math.max(t, Math.min(e, a))
        };
        function r(e, t, a) {
            var n = Math.round((e - a) / t) * t + a;
            return Number(n.toFixed(function(e) {
                if (Math.abs(e) < 1) {
                    var t = e.toExponential().split("e-")
                      , a = t[0].split(".")[1];
                    return (a ? a.length : 0) + parseInt(t[1], 10)
                }
                var n = e.toString().split(".")[1];
                return n ? n.length : 0
            }(t)))
        }
        function o(e, t, a) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return function(e, t, a, o) {
                if (null == o || o <= 0)
                    return n(e, t, a);
                var i = r(e, o, t);
                return n(i, t, a)
            }((e - t[0]) / (t[1] - t[0]) * (a[1] - a[0]) + a[0], a[0], a[1], o.step)
        }
    }
    ,
    463908: (e,t,a)=>{
        "use strict";
        function n(e, t) {
            return e > t ? [] : function(e, t) {
                for (var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, n = e < t ? 1 : -1, r = Math.abs(e - t) + 1, o = Math.ceil(r / a), i = Array(o), l = 0; l < i.length; l++)
                    i[l] = e + l * a * n;
                return i
            }(e, t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1)
        }
        a.d(t, {
            rangeIncrement: ()=>n
        })
    }
    ,
    18659: (e,t,a)=>{
        "use strict";
        a.d(t, {
            withContext: ()=>l
        });
        var n = a(975766)
          , r = a(772253)
          , o = a(414932)
          , i = a(667294);
        function l(e, t, a) {
            return function(l) {
                var s = i.useContext(t);
                return i.createElement(e, (0,
                o._)((0,
                r._)({}, l), (0,
                n._)({}, a, s)))
            }
        }
    }
    ,
    212602: (e,t,a)=>{
        "use strict";
        a.d(t, {
            withPlatform: ()=>l
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(667294)
          , i = a(766351);
        function l(e) {
            return function(t) {
                var a = (0,
                i.useConfigProvider)().platform;
                return o.createElement(e, (0,
                r._)((0,
                n._)({}, t), {
                    platform: a
                }))
            }
        }
    }
    ,
    324285: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useAdaptivity: ()=>o
        });
        var n = a(667294)
          , r = a(362276)
          , o = function() {
            return n.useContext(r.AdaptivityContext)
        }
    }
    ,
    383552: (e,t,a)=>{
        "use strict";
        a.d(t, {
            deviceTypeClassNames: ()=>u,
            sizeXCompactClassNames: ()=>o,
            sizeXRegularClassNames: ()=>i,
            sizeYCompactClassNames: ()=>l,
            sizeYRegularClassNames: ()=>s,
            viewWidthClassNames: ()=>c
        });
        var n = a(975766)
          , r = a(489026)
          , o = (0,
        n._)({
            mq: {
                className: "vkui-sizeX--compact-mq"
            }
        }, r.SizeType.COMPACT, {
            className: "vkui-sizeX--compact-forced"
        })
          , i = (0,
        n._)({
            mq: {
                className: "vkui-sizeX--regular-mq"
            }
        }, r.SizeType.REGULAR, {
            className: "vkui-sizeX--regular-forced"
        })
          , l = (0,
        n._)({
            mq: {
                className: "vkui-sizeY--compact-mq"
            }
        }, r.SizeType.COMPACT, {
            className: "vkui-sizeY--compact-forced"
        })
          , s = (0,
        n._)({
            mq: {
                className: "vkui-sizeY--regular-mq"
            }
        }, r.SizeType.REGULAR, {
            className: "vkui-sizeY--regular-forced"
        })
          , c = {
            tabletMinus: {
                mq: {
                    className: "vkui-viewWidth--tabletMinus-mq"
                },
                forced: {
                    className: "vkui-viewWidth--tabletMinus-forced"
                }
            },
            tabletPlus: {
                mq: {
                    className: "vkui-viewWidth--tabletPlus-mq"
                },
                forced: {
                    className: "vkui-viewWidth--tabletPlus-forced"
                }
            }
        }
          , u = {
            mobile: {
                mq: {
                    className: "vkui-deviceType--mobile-mq"
                },
                forced: {
                    className: "vkui-deviceType--mobile-forced"
                }
            },
            desktop: {
                mq: {
                    className: "vkui-deviceType--desktop-mq"
                },
                forced: {
                    className: "vkui-deviceType--desktop-forced"
                }
            }
        }
    }
    ,
    473292: (e,t,a)=>{
        "use strict";
        a.d(t, {
            getAdaptiveDeviceType: ()=>l,
            getAdaptiveSizeType: ()=>o,
            getAdaptiveViewWidth: ()=>i
        });
        var n = a(489026)
          , r = a(995089)
          , o = function(e, t, a) {
            return {
                compact: void 0 === e ? t.mq : e === n.SizeType.COMPACT && t[e],
                regular: void 0 === e ? a.mq : e === n.SizeType.REGULAR && a[e]
            }
        }
          , i = function(e, t) {
            return {
                tabletMinus: void 0 === e ? t.tabletMinus.mq : e < n.ViewWidth.TABLET && t.tabletMinus.forced,
                tabletPlus: void 0 === e ? t.tabletPlus.mq : e >= n.ViewWidth.TABLET && t.tabletPlus.forced
            }
        }
          , l = function(e, t, a, n, o) {
            var i = (0,
            r.tryToCheckIsDesktop)(e, t, a, n);
            return null === i ? {
                mobile: o.mobile.mq,
                desktop: o.desktop.mq
            } : i ? {
                mobile: !1,
                desktop: o.desktop.forced
            } : {
                mobile: o.mobile.forced,
                desktop: !1
            }
        }
    }
    ,
    934977: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useAdaptivityConditionalRender: ()=>s
        });
        var n = a(667294)
          , r = a(362276)
          , o = a(119360)
          , i = a(383552)
          , l = a(473292)
          , s = function() {
            var e = n.useContext(r.AdaptivityContext)
              , t = e.sizeX
              , a = e.sizeY
              , s = e.viewWidth
              , c = e.viewHeight
              , u = e.hasPointer
              , d = (0,
            o.usePlatform)();
            return n.useMemo((function() {
                return {
                    sizeX: (0,
                    l.getAdaptiveSizeType)(t, i.sizeXCompactClassNames, i.sizeXRegularClassNames),
                    sizeY: (0,
                    l.getAdaptiveSizeType)(a, i.sizeYCompactClassNames, i.sizeYRegularClassNames),
                    viewWidth: (0,
                    l.getAdaptiveViewWidth)(s, i.viewWidthClassNames),
                    deviceType: (0,
                    l.getAdaptiveDeviceType)(s, c, u, d, i.deviceTypeClassNames)
                }
            }
            ), [t, a, s, c, u, d])
        }
    }
    ,
    878760: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useAdaptivityHasHover: ()=>l
        });
        var n = a(667294)
          , r = a(962557)
          , o = a(362276)
          , i = a(722357);
        function l() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
              , t = n.useContext(o.AdaptivityContext).hasHover
              , a = void 0 === t ? r.hasHover : t
              , l = e || void 0 === t;
            return (0,
            i.useIsClient)(!l) && void 0 === t ? a : t
        }
    }
    ,
    716331: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useAdaptivityHasPointer: ()=>l
        });
        var n = a(667294)
          , r = a(962557)
          , o = a(362276)
          , i = a(722357);
        function l() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
              , t = n.useContext(o.AdaptivityContext).hasPointer
              , a = e || void 0 === t;
            return (0,
            i.useIsClient)(!a) && void 0 === t ? r.hasMouse : t
        }
    }
    ,
    323025: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useAdaptivityWithJSMediaQueries: ()=>v
        });
        var n = a(191963)
          , r = a(667294)
          , o = a(962557)
          , i = a(362276)
          , l = a(200528)
          , s = a(995089)
          , c = a(876256)
          , u = a(693158)
          , d = a(119360)
          , v = function() {
            o.canUseDOM || console.error("[useAdaptivityWithJSMediaQueries] Похоже, вы пытаетесь использовать хук вне браузера.\n\nПостарайтесь этого избегать, чтобы не было ошибок при гидратации: при SSR нет информации о размерах экрана.\n\nИспользуйте CSS Media Query или библиотеку по типу https://github.com/artsy/fresnel.");
            var e = r.useContext(i.AdaptivityContext)
              , t = e.viewWidth
              , a = e.viewHeight
              , v = e.sizeX
              , m = e.sizeY
              , p = e.hasPointer
              , f = e.hasHover
              , h = (0,
            d.usePlatform)()
              , g = (0,
            u.useMediaQueries)()
              , b = (0,
            n._)(r.useState((function() {
                return [(0,
                l.getOrDefault)(t, (0,
                s.getViewWidthByMediaQueries)(g)), (0,
                l.getOrDefault)(a, (0,
                s.getViewHeightByMediaQueries)(g))]
            }
            )), 2)
              , k = (0,
            n._)(b[0], 2)
              , C = k[0]
              , _ = k[1]
              , E = b[1]
              , y = r.useMemo((function() {
                var e = (0,
                l.getOrDefault)(p, o.hasMouse)
                  , n = (0,
                l.getOrDefault)(f, o.hasHover)
                  , r = (0,
                l.getOrDefault)(t, C)
                  , i = (0,
                l.getOrDefault)(a, _);
                return {
                    viewWidth: r,
                    viewHeight: i,
                    sizeX: (0,
                    l.getOrDefault)(v, (0,
                    s.getSizeX)(r)),
                    sizeY: (0,
                    l.getOrDefault)(m, (0,
                    s.getSizeY)(r, i, e)),
                    hasPointer: e,
                    hasHover: n,
                    isDesktop: (0,
                    s.tryToCheckIsDesktop)(r, i, e, h)
                }
            }
            ), [C, _, t, a, v, m, p, f, h]);
            return r.useEffect((function() {
                var e = function() {
                    E((function(e) {
                        var r = (0,
                        l.getOrDefault)(t, (0,
                        s.getViewWidthByMediaQueries)(g))
                          , o = (0,
                        l.getOrDefault)(a, (0,
                        s.getViewHeightByMediaQueries)(g))
                          , i = (0,
                        n._)(e, 2)
                          , c = i[0]
                          , u = i[1];
                        return c !== r || u !== o ? [r, o] : e
                    }
                    ))
                };
                return t || [g.desktopPlus, g.tablet, g.smallTablet, g.mobile].forEach((function(t) {
                    return (0,
                    c.matchMediaListAddListener)(t, e)
                }
                )),
                a || [g.mediumHeight, g.mobileLandscapeHeight].forEach((function(t) {
                    return (0,
                    c.matchMediaListAddListener)(t, e)
                }
                )),
                function() {
                    [g.desktopPlus, g.tablet, g.smallTablet, g.mobile, g.mediumHeight, g.mobileLandscapeHeight].forEach((function(t) {
                        return (0,
                        c.matchMediaListRemoveListener)(t, e)
                    }
                    ))
                }
            }
            ), [g, t, a]),
            y
        }
    }
    ,
    505901: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useAppearance: ()=>r
        });
        var n = a(766351);
        function r() {
            var e = (0,
            n.useConfigProvider)().appearance;
            return null != e ? e : "light"
        }
    }
    ,
    99873: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useAutoDetectAppearance: ()=>d
        });
        var n = a(191963)
          , r = a(667294)
          , o = a(363476)
          , i = a.n(o)
          , l = a(962557)
          , s = a(7082)
          , c = a(181498)
          , u = a(876256);
        var d = function(e, t) {
            var a = (0,
            c.useDOM)().window
              , o = r.useRef((function() {
                t && t(),
                o.current = l.noop
            }
            ))
              , d = (0,
            n._)(r.useState((function() {
                var t;
                return e || ((null === (t = a && a.matchMedia && a.matchMedia("(prefers-color-scheme: dark)")) || void 0 === t ? void 0 : t.matches) ? "dark" : "light")
            }
            )), 2)
              , v = d[0]
              , m = d[1];
            return r.useEffect((function() {
                return e ? (m(e),
                l.noop) : i().isEmbedded() ? function(e, t) {
                    var a = function(a) {
                        var n = (0,
                        s.resolveAppearance)(a);
                        n && (t(),
                        e(n))
                    }
                      , n = function(e) {
                        var t = e.detail
                          , n = t.type
                          , r = t.data;
                        "VKWebAppUpdateConfig" === n && a(r)
                    };
                    return i().subscribe(n),
                    i().send("VKWebAppGetConfig").then(a).catch(console.error),
                    function() {
                        return i().unsubscribe(n)
                    }
                }(m, o.current) : function(e, t) {
                    var a = e && e.matchMedia && e.matchMedia("(prefers-color-scheme: dark)");
                    if (void 0 === a)
                        return l.noop;
                    var n = function(e) {
                        t(e.matches ? "dark" : "light")
                    };
                    return n(a),
                    (0,
                    u.matchMediaListAddListener)(a, n),
                    function() {
                        return (0,
                        u.matchMediaListRemoveListener)(a, n)
                    }
                }(a, m)
            }
            ), [a, e]),
            v
        }
    }
    ,
    104964: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useAutoFocus: ()=>r
        });
        a(667294);
        var n = a(214542);
        function r(e, t) {
            (0,
            n.useIsomorphicLayoutEffect)((function() {
                t && e.current && e.current.focus()
            }
            ), [])
        }
    }
    ,
    440981: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useBooleanState: ()=>o
        });
        var n = a(191963)
          , r = a(667294)
          , o = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = (0,
            n._)(r.useState(e), 2)
              , a = t[0]
              , o = t[1]
              , i = r.useCallback((function() {
                o(!0)
            }
            ), [])
              , l = r.useCallback((function() {
                o(!1)
            }
            ), [])
              , s = r.useCallback((function() {
                o(!a)
            }
            ), [a]);
            return {
                value: a,
                setTrue: i,
                setFalse: l,
                toggle: s
            }
        }
    }
    ,
    735496: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useBridgeAdaptivity: ()=>c
        });
        var n = a(191963)
          , r = a(667294)
          , o = a(363476)
          , i = a.n(o)
          , l = a(214542)
          , s = {
            type: "",
            viewportWidth: 0,
            viewportHeight: 0
        };
        function c() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = (0,
            n._)(r.useState(s), 2)
              , a = t[0]
              , o = t[1];
            return (0,
            l.useIsomorphicLayoutEffect)((function() {
                if (!e) {
                    var t = function(e) {
                        if ("adaptivity"in e && "viewport_width"in e && "viewport_height"in e) {
                            var t = function(e) {
                                var t = e.adaptivity
                                  , a = e.viewport_width
                                  , n = e.viewport_height
                                  , r = {
                                    type: "",
                                    viewportWidth: isFinite(a) ? Number(a) : 0,
                                    viewportHeight: isFinite(n) ? Number(n) : 0
                                };
                                switch (t) {
                                case "force_mobile":
                                case "force_mobile_compact":
                                case "adaptive":
                                    r.type = t
                                }
                                return r
                            }(e);
                            t && o(t)
                        }
                    }
                      , a = function(e) {
                        var a = e.detail
                          , n = a.type
                          , r = a.data;
                        "VKWebAppUpdateConfig" === n && t(r)
                    };
                    return i().subscribe(a),
                    i().send("VKWebAppGetConfig").then(t).catch(console.error),
                    function() {
                        i().unsubscribe(a)
                    }
                }
            }
            ), []),
            a
        }
    }
    ,
    454151: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useCalendar: ()=>i
        });
        var n = a(191963)
          , r = a(667294)
          , o = a(259007);
        function i(e) {
            var t, a = e.value, i = e.disablePast, l = e.disableFuture, s = e.shouldDisableDate, c = e.onHeaderChange, u = e.onNextMonth, d = e.onPrevMonth, v = (0,
            n._)(r.useState(null !== (t = Array.isArray(a) ? a[0] : a) && void 0 !== t ? t : new Date), 2), m = v[0], p = v[1], f = (0,
            n._)(r.useState(), 2), h = f[0], g = f[1], b = r.useCallback((function() {
                var e;
                null === (e = d) || void 0 === e || e(),
                p((0,
                o.subMonths)(m, 1))
            }
            ), [m, d]), k = r.useCallback((function() {
                var e;
                null === (e = u) || void 0 === e || e(),
                p((0,
                o.addMonths)(m, 1))
            }
            ), [m, u]), C = r.useCallback((function(e) {
                var t;
                null === (t = c) || void 0 === t || t(e),
                p(e)
            }
            ), [c]), _ = r.useCallback((function(e) {
                return Boolean(h && (0,
                o.isSameDay)(e, h))
            }
            ), [h]), E = r.useCallback((function(e) {
                var t = new Date
                  , a = !1;
                return i && (a = (0,
                o.isBefore)((0,
                o.endOfDay)(e), t)),
                l && (a = (0,
                o.isAfter)((0,
                o.startOfDay)(e), t)),
                s && (a = s(e)),
                a
            }
            ), [l, i, s]), y = r.useCallback((function() {
                g(void 0)
            }
            ), [g]);
            return {
                viewDate: m,
                setViewDate: C,
                setPrevMonth: b,
                setNextMonth: k,
                focusedDay: h,
                setFocusedDay: g,
                isDayFocused: _,
                isDayDisabled: E,
                resetSelectedDay: y
            }
        }
    }
    ,
    684702: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useChipsInput: ()=>o
        });
        var n = a(191963)
          , r = a(667294)
          , o = function(e) {
            var t = e.value
              , a = e.getOptionValue
              , o = e.onChange
              , i = e.onInputChange
              , l = e.getNewOptionData
              , s = (0,
            n._)(r.useState(e.inputValue), 2)
              , c = s[0]
              , u = s[1]
              , d = (0,
            n._)(r.useState(null != t ? t : []), 2)
              , v = d[0]
              , m = d[1]
              , p = r.useCallback((function() {
                u(""),
                i({
                    target: {
                        value: ""
                    }
                })
            }
            ), [i])
              , f = r.useCallback((function(e) {
                u(e.target.value),
                i(e)
            }
            ), [i])
              , h = r.useCallback((function(e, t) {
                var n = v.filter((function(t) {
                    return a(e) !== a(t)
                }
                ));
                !0 === t && n.push(e),
                m(n),
                o(n)
            }
            ), [v, a, o])
              , g = r.useCallback((function(e) {
                return h(e, !0)
            }
            ), [h])
              , b = r.useCallback((function() {
                var e, t = null === (e = c) || void 0 === e ? void 0 : e.trim();
                t && (g(l(void 0, t)),
                p())
            }
            ), [g, p, l, c])
              , k = r.useCallback((function(e) {
                h(l(void 0, e), !1)
            }
            ), [h, l]);
            return r.useEffect((function() {
                return m(t),
                function() {
                    return m([])
                }
            }
            ), [e.value, t]),
            r.useEffect((function() {
                return u(e.inputValue),
                function() {
                    return u("")
                }
            }
            ), [e.inputValue]),
            {
                fieldValue: c,
                setFieldValue: u,
                selectedOptions: v,
                setSelectedOptions: m,
                clearInput: p,
                toggleOption: h,
                addOption: g,
                addOptionFromInput: b,
                removeOption: k,
                handleInputChange: f
            }
        }
    }
    ,
    915474: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useChipsSelect: ()=>u
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(158339)
          , i = a(191963)
          , l = a(262039)
          , s = a(667294)
          , c = a(684702)
          , u = function(e) {
            var t = e.options
              , a = e.filterFn
              , u = e.getOptionLabel
              , d = e.getOptionValue
              , v = e.showSelected
              , m = (0,
            i._)(s.useState(!1), 2)
              , p = m[0]
              , f = m[1]
              , h = (0,
            i._)(s.useState(0), 2)
              , g = h[0]
              , b = h[1]
              , k = (0,
            i._)(s.useState(null), 2)
              , C = k[0]
              , _ = k[1]
              , E = (0,
            c.useChipsInput)(e)
              , y = E.fieldValue
              , S = E.selectedOptions
              , N = (0,
            o._)(E, ["fieldValue", "selectedOptions"])
              , w = s.useMemo((function() {
                return a ? t.filter((function(e) {
                    return a(y, e, u)
                }
                )) : t
            }
            ), [t, a, y, u]);
            return w = s.useMemo((function() {
                if (!w.length || v)
                    return w;
                var e = new Set(w)
                  , t = S.map((function(e) {
                    return d(e)
                }
                ))
                  , a = !0
                  , n = !1
                  , r = void 0;
                try {
                    for (var o, i = e[Symbol.iterator](); !(a = (o = i.next()).done); a = !0) {
                        var s = o.value;
                        t.includes(d(s)) && e.delete(s)
                    }
                } catch (e) {
                    n = !0,
                    r = e
                } finally {
                    try {
                        a || null == i.return || i.return()
                    } finally {
                        if (n)
                            throw r
                    }
                }
                return (0,
                l._)(e)
            }
            ), [w, S, d, v]),
            (0,
            r._)((0,
            n._)({}, N), {
                fieldValue: y,
                handleInputChange: function(e) {
                    e && (N.handleInputChange(e),
                    p || (f(!0),
                    b(0)))
                },
                opened: p,
                setOpened: f,
                filteredOptions: w,
                focusedOptionIndex: g,
                setFocusedOptionIndex: b,
                focusedOption: C,
                setFocusedOption: _,
                selectedOptions: S
            })
        }
    }
    ,
    646258: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useDateInput: ()=>c
        });
        var n = a(191963)
          , r = a(262039)
          , o = a(667294)
          , i = a(181498)
          , l = a(440981)
          , s = a(283821);
        function c(e) {
            var t = e.maxElement
              , a = e.refs
              , c = e.autoFocus
              , u = e.disabled
              , d = e.elementsConfig
              , v = e.onChange
              , m = e.onInternalValueChange
              , p = e.getInternalValue
              , f = e.value
              , h = (0,
            i.useDOM)().document
              , g = (0,
            l.useBooleanState)(!1)
              , b = g.value
              , k = g.setTrue
              , C = g.setFalse
              , _ = o.useRef(null)
              , E = o.useRef(null)
              , y = (0,
            n._)(o.useState([]), 2)
              , S = y[0]
              , N = y[1]
              , w = (0,
            n._)(o.useState(null), 2)
              , R = w[0]
              , A = w[1]
              , M = (0,
            i.useDOM)().window
              , T = o.useCallback((function() {
                var e;
                b && (A(null),
                C(),
                null === (e = M.getSelection()) || void 0 === e || e.removeAllRanges(),
                N(p(f)))
            }
            ), [C, p, b, f, M])
              , P = o.useCallback((function(e) {
                var t, a;
                (null === (t = _.current) || void 0 === t ? void 0 : t.contains(e.target)) || (null === (a = E.current) || void 0 === a ? void 0 : a.contains(e.target)) || T()
            }
            ), [T])
              , I = o.useCallback((function() {
                A(0)
            }
            ), []);
            (0,
            s.useGlobalEventListener)(h, "click", P, {
                capture: !0
            }),
            o.useEffect((function() {
                N(p(f))
            }
            ), [p, f]),
            o.useEffect((function() {
                c && I()
            }
            ), [c, I]),
            o.useEffect((function() {
                if (!u && null !== R) {
                    var e = M.document.createRange()
                      , t = a[R].current;
                    if (t) {
                        var n, r;
                        t.focus(),
                        k(),
                        e.selectNodeContents(t);
                        var o = M.getSelection();
                        null === (n = o) || void 0 === n || n.removeAllRanges(),
                        null === (r = o) || void 0 === r || r.addRange(e)
                    }
                }
            }
            ), [u, R, k, a, M]);
            var D = o.useCallback((function() {
                var e;
                null === (e = v) || void 0 === e || e(void 0),
                I()
            }
            ), [v, I])
              , L = o.useCallback((function() {
                b || I()
            }
            ), [b, I])
              , x = o.useCallback((function(e) {
                if (null !== R) {
                    var a = (0,
                    r._)(S)
                      , n = d(R);
                    if (/^\d+$/.test(e.key))
                        a[R].length >= n.length ? a[R] = e.key : (a[R] += e.key,
                        a[R].length >= n.length && R < t && A(R + 1));
                    else if ("Backspace" === e.key)
                        a[R] ? a[R] = a[R].slice(0, -1) : A(R <= 0 ? t : R - 1);
                    else if ("ArrowDown" === e.key || "Down" === e.key) {
                        var o = Number(a[R]);
                        a[R] = String(o <= n.min ? n.max : o - 1).padStart(n.length, "0")
                    } else if ("ArrowUp" === e.key || "Up" === e.key) {
                        var i = Number(a[R]);
                        a[R] = String(i >= n.max ? n.min : i + 1).padStart(n.length, "0")
                    } else {
                        if ("Enter" === e.key || "Tab" === e.key && R === t || "Tab" === e.key && e.shiftKey && 0 === R)
                            return void T();
                        if ("ArrowLeft" === e.key || "Left" === e.key || "Tab" === e.key && e.shiftKey)
                            A(R <= 0 ? t : R - 1);
                        else if ("ArrowRight" === e.key || "Right" === e.key || "Tab" === e.key)
                            A(R >= t ? 0 : R + 1);
                        else {
                            if ("Delete" !== e.key && "Del" !== e.key)
                                return;
                            a[R] = ""
                        }
                    }
                    e.preventDefault(),
                    N(a),
                    m(a)
                }
            }
            ), [d, R, S, t, m, T]);
            return {
                rootRef: _,
                calendarRef: E,
                open: b,
                openCalendar: k,
                closeCalendar: C,
                internalValue: S,
                focusedElement: R,
                setFocusedElement: A,
                handleKeyDown: x,
                clear: D,
                handleFieldEnter: L,
                removeFocusFromField: T
            }
        }
    }
    ,
    81986: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useEffectDev: ()=>n
        });
        a(667294);
        var n = a(962557).noop
    }
    ,
    678988: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useCustomEnsuredControl: ()=>l,
            useEnsuredControl: ()=>i
        });
        var n = a(158339)
          , r = a(191963)
          , o = a(667294);
        function i(e) {
            var t = e.onChange
              , a = e.disabled
              , i = (0,
            n._)(e, ["onChange", "disabled"])
              , s = (0,
            r._)(l(i), 2)
              , c = s[0]
              , u = s[1];
            return [c, o.useCallback((function(e) {
                a || (u(e.target.value),
                t && t(e))
            }
            ), [u, t, a])]
        }
        function l(e) {
            var t = e.disabled
              , a = e.onChange
              , n = e.defaultValue
              , i = e.value
              , l = void 0 !== i
              , s = (0,
            r._)(o.useState(n), 2)
              , c = s[0]
              , u = s[1]
              , d = o.useCallback((function(e) {
                t || (!l && u(e),
                a && a(e))
            }
            ), [t, l, a]);
            return [l ? i : c, d]
        }
    }
    ,
    151571: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useEventListener: ()=>l
        });
        var n = a(772253)
          , r = a(667294)
          , o = a(962557)
          , i = a(214542);
        function l(e, t, a) {
            var l = r.useRef(t);
            (0,
            i.useIsomorphicLayoutEffect)((function() {
                l.current = t
            }
            ), [t]);
            var s = r.useCallback((function(e) {
                return l.current && l.current(e)
            }
            ), [])
              , c = r.useRef(o.noop)
              , u = r.useCallback((function() {
                c.current(),
                c.current = o.noop
            }
            ), [])
              , d = r.useCallback((function(t) {
                if (o.canUseDOM && (u(),
                t)) {
                    var r = (0,
                    n._)({}, a);
                    t.addEventListener(e, s, r),
                    c.current = function() {
                        return t.removeEventListener(e, s, r)
                    }
                }
            }
            ), [a, s, e, u]);
            return r.useEffect((function() {
                return u
            }
            ), [u]),
            r.useMemo((function() {
                return {
                    add: d,
                    remove: u
                }
            }
            ), [d, u])
        }
    }
    ,
    428253: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useExternRef: ()=>o
        });
        var n = a(667294)
          , r = a(256631);
        function o() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
            var o = n.useRef(null);
            return n.useMemo((function() {
                return {
                    get current() {
                        return o.current
                    },
                    set current(e) {
                        o.current = e,
                        t.forEach((function(t) {
                            t && (0,
                            r.setRef)(e, t)
                        }
                        ))
                    }
                }
            }
            ), t)
        }
    }
    ,
    281196: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useFocusVisible: ()=>i
        });
        var n = a(191963)
          , r = a(667294)
          , o = a(338784);
        function i() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
              , t = (0,
            n._)((0,
            r.useState)(!1), 2)
              , a = t[0]
              , i = t[1]
              , l = (0,
            r.useContext)(o.AppRootContext).keyboardInput;
            return {
                focusVisible: e ? l && a : a,
                onFocus: (0,
                r.useCallback)((function(e) {
                    e.stopPropagation(),
                    i(!0)
                }
                ), [i]),
                onBlur: (0,
                r.useCallback)((function(e) {
                    e.stopPropagation(),
                    i(!1)
                }
                ), [i])
            }
        }
    }
    ,
    621232: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useFocusWithin: ()=>s
        });
        var n = a(191963)
          , r = a(667294)
          , o = a(181498)
          , i = a(214542)
          , l = a(283821);
        function s(e) {
            var t = (0,
            o.useDOM)().document
              , a = function() {
                return !(!e.current || !t) && e.current.contains(t.activeElement)
            }
              , s = (0,
            n._)(r.useState(a), 2)
              , c = s[0]
              , u = s[1]
              , d = function() {
                var e = a();
                e !== c && u(e)
            };
            return (0,
            i.useIsomorphicLayoutEffect)(d, []),
            (0,
            l.useGlobalEventListener)(t, "focus", d, {
                capture: !0
            }),
            (0,
            l.useGlobalEventListener)(t, "blur", d, {
                capture: !0
            }),
            c
        }
    }
    ,
    283821: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useGlobalEventListener: ()=>o
        });
        var n = a(214542)
          , r = a(151571);
        function o(e, t, a, o) {
            var i = (0,
            r.useEventListener)(t, a, o);
            (0,
            n.useIsomorphicLayoutEffect)((function() {
                a && e ? i.add(e) : i.remove()
            }
            ), [Boolean(a), Boolean(e)])
        }
    }
    ,
    228248: (e,t,a)=>{
        "use strict";
        var n;
        a.d(t, {
            useId: ()=>s
        });
        var r = a(191963)
          , o = a(667294)
          , i = (n || (n = a.t(o, 2)))["useId".toString()]
          , l = 0;
        var s = null != i ? i : function() {
            var e = (0,
            r._)(o.useState((function() {
                return l++
            }
            )), 1)[0];
            return ":r".concat(e, ":")
        }
    }
    ,
    720194: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useInsets: ()=>d
        });
        var n = a(772253)
          , r = a(414932)
          , o = a(191963)
          , i = a(667294)
          , l = a(363476)
          , s = a.n(l)
          , c = a(214542)
          , u = {
            bottom: null,
            top: null,
            left: null,
            right: null
        };
        function d() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = (0,
            o._)(i.useState(u), 2)
              , a = t[0]
              , l = t[1];
            return (0,
            c.useIsomorphicLayoutEffect)((function() {
                if (!e) {
                    var t = function(e) {
                        var t = function(e) {
                            var t = e.detail
                              , a = t.type
                              , o = t.data;
                            switch (a) {
                            case "VKWebAppUpdateConfig":
                            case "VKWebAppUpdateInsets":
                                var i = o.insets;
                                if (i)
                                    return (0,
                                    r._)((0,
                                    n._)({}, i), {
                                        bottom: i.bottom > 150 ? 0 : i.bottom
                                    })
                            }
                            return null
                        }(e);
                        t && l(t)
                    };
                    return s().subscribe(t),
                    function() {
                        s().unsubscribe(t)
                    }
                }
            }
            ), [e]),
            a
        }
    }
    ,
    722357: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useIsClient: ()=>i
        });
        var n = a(191963)
          , r = a(667294)
          , o = a(214542);
        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = (0,
            n._)(r.useState(e), 2)
              , a = t[0]
              , i = t[1];
            return (0,
            o.useIsomorphicLayoutEffect)((function() {
                i(!0)
            }
            ), []),
            a
        }
    }
    ,
    597636: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useKeyboard: ()=>s
        });
        var n = a(191963)
          , r = a(667294)
          , o = a(181498)
          , i = a(283821);
        var l = {
            passive: !0,
            capture: !1
        };
        function s() {
            var e, t, a = (0,
            o.useDOM)().document, s = (0,
            n._)(r.useState(!1), 2), c = s[0], u = s[1], d = r.useCallback((function(e) {
                var t, n, r, o, i = !(!0 !== e && "focusin" !== e.type || "INPUT" !== (null === (n = a) || void 0 === n || null === (t = n.activeElement) || void 0 === t ? void 0 : t.tagName) && "TEXTAREA" !== (null === (o = a) || void 0 === o || null === (r = o.activeElement) || void 0 === r ? void 0 : r.tagName));
                u(i)
            }
            ), [null === (t = a) || void 0 === t || null === (e = t.activeElement) || void 0 === e ? void 0 : e.tagName]);
            return r.useEffect((function() {
                d(!0)
            }
            ), [d]),
            (0,
            i.useGlobalEventListener)(a, "focusout", d, l),
            (0,
            i.useGlobalEventListener)(a, "focusin", d, l),
            {
                isOpened: c
            }
        }
    }
    ,
    162649: (e,t,a)=>{
        "use strict";
        a.d(t, {
            ENABLE_KEYBOARD_INPUT_EVENT_NAME: ()=>s,
            useKeyboardInputTracker: ()=>u
        });
        var n = a(191963)
          , r = a(667294)
          , o = a(304830)
          , i = a(181498)
          , l = a(283821)
          , s = "enableKeyboardInput"
          , c = "disableKeyboardInput";
        function u() {
            var e = (0,
            i.useDOM)().document
              , t = (0,
            n._)(r.useState(!1), 2)
              , a = t[0]
              , u = t[1]
              , d = r.useCallback((function() {
                u(!0)
            }
            ), [])
              , v = r.useCallback((function(e) {
                (0,
                o.pressedKey)(e) === o.Keys.TAB && d()
            }
            ), [d])
              , m = r.useCallback((function() {
                u(!1)
            }
            ), [])
              , p = {
                passive: !0,
                capture: !0
            };
            return (0,
            l.useGlobalEventListener)(e, "keydown", v, p),
            (0,
            l.useGlobalEventListener)(e, "mousedown", m, p),
            (0,
            l.useGlobalEventListener)(e, "touchstart", m, p),
            (0,
            l.useGlobalEventListener)(e, s, d, p),
            (0,
            l.useGlobalEventListener)(e, c, m, p),
            a
        }
    }
    ,
    693158: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useMediaQueries: ()=>s
        });
        var n = a(667294)
          , r = a(169077)
          , o = a(295094)
          , i = a(181498)
          , l = {
            window: void 0,
            mediaQueries: null
        }
          , s = function() {
            var e = (0,
            i.useDOM)().window;
            return n.useMemo((function() {
                if (l.window === e && null !== l.mediaQueries)
                    return l.mediaQueries;
                var t = e ? e.matchMedia.bind(e) : o.mediaQueryNull;
                return l.window = e,
                l.mediaQueries = {
                    desktopPlus: t(r.MEDIA_QUERIES.DESKTOP_PLUS),
                    smallTabletPlus: t(r.MEDIA_QUERIES.SMALL_TABLET_PLUS),
                    tablet: t(r.MEDIA_QUERIES.TABLET),
                    smallTablet: t(r.MEDIA_QUERIES.SMALL_TABLET),
                    mobile: t(r.MEDIA_QUERIES.MOBILE),
                    mediumHeight: t(r.MEDIA_QUERIES.MEDIUM_HEIGHT),
                    mobileLandscapeHeight: t(r.MEDIA_QUERIES.MOBILE_LANDSCAPE_HEIGHT)
                },
                l.mediaQueries
            }
            ), [e])
        }
    }
    ,
    854193: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useObjectMemo: ()=>r
        });
        var n = a(667294);
        function r(e) {
            var t, a, r = n.useRef(e);
            return t = r.current,
            a = e,
            Object.keys(t).length === Object.keys(a).length && Object.keys(t).every((function(e) {
                return t[e] === a[e]
            }
            )) || (r.current = e),
            r.current
        }
    }
    ,
    336476: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useOrientationChange: ()=>s
        });
        var n = a(191963)
          , r = a(667294)
          , o = a(181498)
          , i = a(283821);
        function l(e) {
            var t, a, n;
            return e && 90 === Math.abs(null !== (n = null === (a = e.screen) || void 0 === a || null === (t = a.orientation) || void 0 === t ? void 0 : t.angle) && void 0 !== n ? n : Number(e.orientation)) ? "landscape" : "portrait"
        }
        function s() {
            var e = (0,
            o.useDOM)().window
              , t = (0,
            n._)(r.useState((function() {
                return l(e)
            }
            )), 2)
              , a = t[0]
              , s = t[1];
            return (0,
            i.useGlobalEventListener)(e, "orientationchange", (function() {
                return s(l(e))
            }
            )),
            a
        }
    }
    ,
    499758: (e,t,a)=>{
        "use strict";
        a.d(t, {
            usePagination: ()=>l
        });
        var n = a(262039)
          , r = a(667294)
          , o = a(633656)
          , i = a(463908)
          , l = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.currentPage
              , a = void 0 === t ? 1 : t
              , l = e.siblingCount
              , s = void 0 === l ? 1 : l
              , c = e.boundaryCount
              , u = void 0 === c ? 1 : c
              , d = e.totalPages
              , v = void 0 === d ? 1 : d;
            return r.useMemo((function() {
                var e, t, r = (0,
                i.rangeIncrement)(1, Math.min(u, v)), l = (0,
                i.rangeIncrement)(Math.max(v - u + 1, u + 1), v), c = v - u - 1 - 2 * s, d = (0,
                o.clamp)(a - s, u + 2, c), m = u + 2 + 2 * s, p = Math.min(Math.max(a + s, m), l.length > 0 ? l[0] - 2 : v - 1), f = r;
                return d > u + 2 ? f.push("start-ellipsis") : u + 1 < v - u && f.push(u + 1),
                (e = f).push.apply(e, (0,
                n._)((0,
                i.rangeIncrement)(d, p))),
                p < v - u - 1 ? f.push("end-ellipsis") : v - u > u && f.push(v - u),
                (t = f).push.apply(t, (0,
                n._)(l)),
                f
            }
            ), [a, v, s, u])
        }
    }
    ,
    22539: (e,t,a)=>{
        "use strict";
        a.d(t, {
            usePatchChildrenRef: ()=>u
        });
        var n = a(975766)
          , r = a(667294)
          , o = a(644029)
          , i = a(81986)
          , l = a(428253)
          , s = function(e) {
            return "string" == typeof e.type
        }
          , c = (0,
        o.warnOnce)("usePatchChildrenRef")
          , u = function(e) {
            var t, a = r.isValidElement(e) && (s(e) ? e.ref : e.props.getRootRef), o = (0,
            l.useExternRef)(a);
            return (0,
            i.useEffectDev)((function() {
                o.current || c("Кажется, в children передан компонент, который не поддерживает свойство getRootRef. Мы не можем получить ссылку на корневой dom-элемент этого компонента", "error")
            }
            ), [null === (t = e) || void 0 === t ? void 0 : t.type, o]),
            [o, r.isValidElement(e) ? r.cloneElement(e, (0,
            n._)({}, s(e) ? "ref" : "getRootRef", o)) : e]
        }
    }
    ,
    119360: (e,t,a)=>{
        "use strict";
        a.d(t, {
            usePlatform: ()=>r
        });
        var n = a(766351);
        function r() {
            return (0,
            n.useConfigProvider)().platform
        }
    }
    ,
    724298: (e,t,a)=>{
        "use strict";
        a.d(t, {
            usePrevious: ()=>r
        });
        var n = a(667294);
        function r(e) {
            var t = n.useRef();
            return n.useEffect((function() {
                t.current = e
            }
            )),
            t.current
        }
    }
    ,
    855356: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useTimeout: ()=>i
        });
        var n = a(667294)
          , r = a(962557)
          , o = a(214542);
        function i(e, t) {
            var a = n.useRef({
                cb: e,
                duration: t
            });
            (0,
            o.useIsomorphicLayoutEffect)((function() {
                a.current.cb = e,
                a.current.duration = t
            }
            ), [e, t]);
            var i = n.useRef()
              , l = n.useCallback((function() {
                var e;
                r.canUseDOM && (null === (e = i) || void 0 === e ? void 0 : e.current) && clearTimeout(i.current)
            }
            ), [])
              , s = n.useCallback((function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.current.duration;
                l(),
                r.canUseDOM && (i.current = setTimeout((function() {
                    var e = a.current.cb;
                    "function" == typeof e && e()
                }
                ), e))
            }
            ), [l]);
            return (0,
            o.useIsomorphicLayoutEffect)((function() {
                return l
            }
            ), []),
            {
                set: s,
                clear: l
            }
        }
    }
    ,
    326857: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useTodayDate: ()=>l
        });
        var n = a(191963)
          , r = a(667294)
          , o = a(259007)
          , i = a(181498);
        function l() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = (0,
            i.useDOM)()
              , a = t.document
              , l = t.window
              , s = (0,
            n._)(r.useState((function() {
                return new Date
            }
            )), 2)
              , c = s[0]
              , u = s[1];
            return r.useEffect((function() {
                if (e && a && l) {
                    var t = void 0
                      , n = function() {
                        if ("visible" === a.visibilityState) {
                            var e = new Date
                              , n = (0,
                            o.getMillisecondsToTomorrow)(e);
                            l.clearTimeout(t),
                            t = l.setTimeout((function() {
                                u(e)
                            }
                            ), n),
                            (0,
                            o.isSameDay)(c, e) || u(e)
                        }
                    };
                    return n(),
                    a.addEventListener("visibilitychange", n),
                    function() {
                        l.clearTimeout(t),
                        a.removeEventListener("visibilitychange", n)
                    }
                }
            }
            ), [a, e, c, l]),
            c
        }
    }
    ,
    70743: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useWaitTransitionFinish: ()=>l
        });
        var n = a(667294)
          , r = a(962557)
          , o = a(181498)
          , i = a(23220)
          , l = function() {
            var e = n.useRef(null)
              , t = (0,
            o.useDOM)().document
              , a = n.useRef(r.noop)
              , l = n.useCallback((function() {
                a.current(),
                a.current = r.noop
            }
            ), []);
            return {
                waitTransitionFinish: n.useCallback((function(n, r, o) {
                    var s, c;
                    n && (!(null === (s = t) || void 0 === s ? void 0 : s.hidden) && i.transitionEvent.supported && i.transitionEvent.name ? (l(),
                    n.addEventListener(i.transitionEvent.name, r),
                    a.current = function() {
                        i.transitionEvent.name && n.removeEventListener(i.transitionEvent.name, r)
                    }
                    ) : ((null === (c = e) || void 0 === c ? void 0 : c.current) && clearTimeout(e.current),
                    e.current = setTimeout(r, o)))
                }
                ), [t, l, e])
            }
        }
    }
    ,
    86894: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Accordion: ()=>Se.Accordion,
            ActionSheet: ()=>A.ActionSheet,
            ActionSheetDefaultIosCloseItem: ()=>T.ActionSheetDefaultIosCloseItem,
            ActionSheetItem: ()=>M.ActionSheetItem,
            AdaptivityProvider: ()=>tt.AdaptivityProvider,
            Alert: ()=>R.Alert,
            AppRoot: ()=>n.AppRoot,
            Appearance: ()=>ot.Appearance,
            AppearanceProvider: ()=>rt.AppearanceProvider,
            AspectRatio: ()=>N.AspectRatio,
            Avatar: ()=>oe.Avatar,
            Badge: ()=>H.Badge,
            Banner: ()=>Ce.Banner,
            Button: ()=>p.Button,
            ButtonGroup: ()=>V.ButtonGroup,
            Calendar: ()=>Ge.Calendar,
            CalendarRange: ()=>Ue.CalendarRange,
            Caption: ()=>u.Caption,
            Card: ()=>W.Card,
            CardGrid: ()=>q.CardGrid,
            CardScroll: ()=>G.CardScroll,
            Cell: ()=>J.Cell,
            CellButton: ()=>ee.CellButton,
            Checkbox: ()=>ze.Checkbox,
            Chip: ()=>Ie.Chip,
            ChipsInput: ()=>De.ChipsInput,
            ConfigProvider: ()=>at.ConfigProvider,
            ContentCard: ()=>U.ContentCard,
            Counter: ()=>fe.Counter,
            CustomScrollView: ()=>ft.CustomScrollView,
            CustomSelect: ()=>Ye.CustomSelect,
            CustomSelectOption: ()=>We.CustomSelectOption,
            DateInput: ()=>Xe.DateInput,
            DateRangeInput: ()=>Ke.DateRangeInput,
            Div: ()=>je.Div,
            File: ()=>Te.File,
            FixedLayout: ()=>v.FixedLayout,
            Footer: ()=>ae.Footer,
            Footnote: ()=>c.Footnote,
            FormItem: ()=>we.FormItem,
            FormLayout: ()=>Ne.FormLayout,
            FormLayoutGroup: ()=>Re.FormLayoutGroup,
            FormStatus: ()=>Ae.FormStatus,
            Gallery: ()=>re.Gallery,
            Gradient: ()=>j.Gradient,
            Group: ()=>K.Group,
            Header: ()=>X.Header,
            Headline: ()=>o.Headline,
            HorizontalCell: ()=>te.HorizontalCell,
            HorizontalScroll: ()=>S.HorizontalScroll,
            IconButton: ()=>Y.IconButton,
            Image: ()=>ie.Image,
            InfoRow: ()=>ne.InfoRow,
            Input: ()=>Pe.Input,
            Link: ()=>ve.Link,
            List: ()=>Q.List,
            MiniInfoCell: ()=>_e.MiniInfoCell,
            ModalCard: ()=>z.ModalCard,
            ModalCardBase: ()=>$e.ModalCardBase,
            ModalDismissButton: ()=>F.ModalDismissButton,
            ModalPage: ()=>O.ModalPage,
            ModalPageHeader: ()=>B.ModalPageHeader,
            ModalRoot: ()=>D.ModalRoot,
            ModalRootContext: ()=>x.ModalRootContext,
            NativeSelect: ()=>Ve.NativeSelect,
            Pagination: ()=>ye.Pagination,
            Panel: ()=>h.Panel,
            PanelHeader: ()=>b.PanelHeader,
            PanelHeaderBack: ()=>Ze.PanelHeaderBack,
            PanelHeaderButton: ()=>g.PanelHeaderButton,
            PanelSpinner: ()=>Je.PanelSpinner,
            Paragraph: ()=>l.Paragraph,
            Placeholder: ()=>ke.Placeholder,
            Platform: ()=>vt.Platform,
            PopoutWrapper: ()=>w.PopoutWrapper,
            Progress: ()=>le.Progress,
            Radio: ()=>Oe.Radio,
            RadioGroup: ()=>Be.RadioGroup,
            RichCell: ()=>Z.RichCell,
            ScreenSpinner: ()=>P.ScreenSpinner,
            ScrollArrow: ()=>y.ScrollArrow,
            Search: ()=>se.Search,
            SegmentedControl: ()=>qe.SegmentedControl,
            Select: ()=>Fe.Select,
            SelectMimicry: ()=>He.SelectMimicry,
            Separator: ()=>ge.Separator,
            SimpleCell: ()=>$.SimpleCell,
            SizeType: ()=>mt.SizeType,
            Slider: ()=>Le.Slider,
            Snackbar: ()=>I.Snackbar,
            Spacing: ()=>be.Spacing,
            Spinner: ()=>de.Spinner,
            SplitCol: ()=>C.SplitCol,
            SplitLayout: ()=>k.SplitLayout,
            Subhead: ()=>s.Subhead,
            SubnavigationButton: ()=>Ee.SubnavigationButton,
            Switch: ()=>Me.Switch,
            Tabbar: ()=>_.Tabbar,
            TabbarItem: ()=>E.TabbarItem,
            Tabs: ()=>ce.Tabs,
            TabsItem: ()=>ue.TabsItem,
            Tappable: ()=>d.Tappable,
            Text: ()=>i.Text,
            Textarea: ()=>xe.Textarea,
            Title: ()=>r.Title,
            Tooltip: ()=>me.Tooltip,
            TooltipContainer: ()=>pe.TooltipContainer,
            Touch: ()=>Qe.Touch,
            UsersStack: ()=>he.UsersStack,
            View: ()=>f.View,
            ViewHeight: ()=>mt.ViewHeight,
            ViewWidth: ()=>mt.ViewWidth,
            VisuallyHidden: ()=>et.VisuallyHidden,
            WebviewType: ()=>nt.WebviewType,
            calcInitialsAvatarColor: ()=>pt.calcInitialsAvatarColor,
            classNames: ()=>dt.classNames,
            getFallbackIconSizeByImageBaseSize: ()=>m.getFallbackIconSizeByImageBaseSize,
            unstable_ChipsSelect: ()=>ht.ChipsSelect,
            unstable_Popover: ()=>gt.Popover,
            unstable_RichTooltip: ()=>kt.RichTooltip,
            unstable_TextTooltip: ()=>bt.TextTooltip,
            useAdaptivity: ()=>lt.useAdaptivity,
            useAdaptivityWithJSMediaQueries: ()=>st.useAdaptivityWithJSMediaQueries,
            useAppearance: ()=>ct.useAppearance,
            usePlatform: ()=>it.usePlatform,
            useScrollLock: ()=>ut.useScrollLock,
            withModalRootContext: ()=>L.withModalRootContext
        });
        a(354368);
        var n = a(927101)
          , r = a(931252)
          , o = a(115446)
          , i = a(754259)
          , l = a(390574)
          , s = a(243912)
          , c = a(894872)
          , u = a(443910)
          , d = a(795281)
          , v = a(781959)
          , m = a(342627)
          , p = a(658113)
          , f = a(969985)
          , h = a(623796)
          , g = a(241073)
          , b = a(582405)
          , k = a(243143)
          , C = a(946674)
          , _ = a(780991)
          , E = a(146881)
          , y = a(427730)
          , S = a(635717)
          , N = a(346912)
          , w = a(949444)
          , R = a(409380)
          , A = a(745433)
          , M = a(942347)
          , T = a(522983)
          , P = a(106139)
          , I = a(836392)
          , D = a(7075)
          , L = a(456423)
          , x = a(811113)
          , O = a(489124)
          , B = a(72176)
          , z = a(239259)
          , F = a(443890)
          , H = a(278763)
          , V = a(580758)
          , Y = a(600245)
          , W = a(138590)
          , q = a(828204)
          , G = a(208954)
          , U = a(582164)
          , X = a(341238)
          , K = a(11610)
          , j = a(654202)
          , Q = a(639731)
          , J = a(426162)
          , Z = a(54679)
          , $ = a(426305)
          , ee = a(935563)
          , te = a(698091)
          , ae = a(462926)
          , ne = a(392903)
          , re = a(87223)
          , oe = a(900863)
          , ie = a(566776)
          , le = a(571042)
          , se = a(616852)
          , ce = a(65309)
          , ue = a(461181)
          , de = a(474353)
          , ve = a(630093)
          , me = a(67648)
          , pe = a(566506)
          , fe = a(643831)
          , he = a(525335)
          , ge = a(346921)
          , be = a(257451)
          , ke = a(729814)
          , Ce = a(857991)
          , _e = a(672774)
          , Ee = a(197741)
          , ye = a(715191)
          , Se = a(439893)
          , Ne = a(590106)
          , we = a(18245)
          , Re = a(380762)
          , Ae = a(53961)
          , Me = a(763781)
          , Te = a(617224)
          , Pe = a(383567)
          , Ie = a(973007)
          , De = a(517466)
          , Le = a(509056)
          , xe = a(371411)
          , Oe = a(176469)
          , Be = a(240762)
          , ze = a(387130)
          , Fe = a(20362)
          , He = a(751467)
          , Ve = a(451155)
          , Ye = a(836931)
          , We = a(596002)
          , qe = a(543978)
          , Ge = a(72281)
          , Ue = a(815609)
          , Xe = a(419514)
          , Ke = a(14174)
          , je = a(457283)
          , Qe = a(763029)
          , Je = a(749967)
          , Ze = a(550360)
          , $e = a(48908)
          , et = a(516511)
          , tt = a(133893)
          , at = a(601514)
          , nt = a(766351)
          , rt = a(291057)
          , ot = a(7082)
          , it = a(119360)
          , lt = a(324285)
          , st = a(323025)
          , ct = a(505901)
          , ut = a(909795)
          , dt = a(962557)
          , vt = a(108681)
          , mt = a(489026)
          , pt = a(539669)
          , ft = a(803265)
          , ht = a(721827)
          , gt = a(531303)
          , bt = a(619141)
          , kt = a(847829)
    }
    ,
    304830: (e,t,a)=>{
        "use strict";
        a.d(t, {
            FOCUSABLE_ELEMENTS_LIST: ()=>r,
            Keys: ()=>n,
            pressedKey: ()=>i,
            shouldTriggerClickOnEnterOrSpace: ()=>l
        });
        a(667294);
        var n, r = ["a[href]", "area[href]", 'input:not([disabled]):not([hidden]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([hidden]):not([aria-hidden])", "textarea:not([disabled])", "button:not([disabled])", "iframe", "audio", "video", "[contenteditable]", '[tabindex]:not([tabindex="-1"])'];
        !function(e) {
            e.ENTER = "Enter",
            e.SPACE = "Space",
            e.TAB = "Tab",
            e.ESCAPE = "Escape",
            e.HOME = "Home",
            e.END = "End",
            e.ARROW_LEFT = "ArrowLeft",
            e.ARROW_RIGHT = "ArrowRight",
            e.ARROW_UP = "ArrowUp",
            e.ARROW_DOWN = "ArrowDown",
            e.PAGE_UP = "PageUp",
            e.PAGE_DOWN = "PageDown"
        }(n || (n = {}));
        var o = [{
            code: n.ENTER,
            key: ["Enter"],
            keyCode: 13
        }, {
            code: n.SPACE,
            key: ["Space", "Spacebar", " "],
            keyCode: 32
        }, {
            code: n.TAB,
            key: ["Tab"],
            keyCode: 9
        }, {
            code: n.ESCAPE,
            key: ["Escape"],
            keyCode: 27
        }, {
            code: n.HOME,
            key: ["Home"],
            keyCode: 36
        }, {
            code: n.END,
            key: ["End"],
            keyCode: 35
        }, {
            code: n.ARROW_LEFT,
            key: ["ArrowLeft"],
            keyCode: 37
        }, {
            code: n.ARROW_RIGHT,
            key: ["ArrowRight"],
            keyCode: 39
        }, {
            code: n.ARROW_UP,
            key: ["ArrowUp"],
            keyCode: 40
        }, {
            code: n.ARROW_DOWN,
            key: ["ArrowDown"],
            keyCode: 40
        }, {
            code: n.PAGE_UP,
            key: ["PageUp"],
            keyCode: 40
        }, {
            code: n.PAGE_DOWN,
            key: ["PageDown"],
            keyCode: 40
        }];
        function i(e) {
            var t;
            return (null === (t = o.find((function(t) {
                var a = t.key
                  , n = t.keyCode;
                return a.includes(e.key) || n === e.keyCode
            }
            ))) || void 0 === t ? void 0 : t.code) || null
        }
        function l(e) {
            var t = e.target
              , a = t.tagName
              , r = t.getAttribute("role")
              , o = !0 !== t.isContentEditable && "INPUT" !== a && "TEXTAREA" !== a && ("button" === r || "link" === r)
              , l = "A" === a && t.hasAttribute("href")
              , s = i(e);
            return o && (s === n.SPACE && "button" === r || s === n.ENTER && !l)
        }
    }
    ,
    489026: (e,t,a)=>{
        "use strict";
        a.d(t, {
            SizeType: ()=>o,
            VIEW_WIDTH_TO_CSS_BREAKPOINT_MAP: ()=>s,
            ViewHeight: ()=>r,
            ViewWidth: ()=>n
        });
        var n, r, o, i, l = a(975766);
        !function(e) {
            e[e.SMALL_MOBILE = 1] = "SMALL_MOBILE",
            e[e.MOBILE = 2] = "MOBILE",
            e[e.SMALL_TABLET = 3] = "SMALL_TABLET",
            e[e.TABLET = 4] = "TABLET",
            e[e.DESKTOP = 5] = "DESKTOP"
        }(n || (n = {})),
        function(e) {
            e[e.EXTRA_SMALL = 1] = "EXTRA_SMALL",
            e[e.SMALL = 2] = "SMALL",
            e[e.MEDIUM = 3] = "MEDIUM"
        }(r || (r = {})),
        function(e) {
            e.COMPACT = "compact",
            e.REGULAR = "regular"
        }(o || (o = {}));
        var s = (i = {},
        (0,
        l._)(i, n.SMALL_MOBILE, "smallMobileMinus"),
        (0,
        l._)(i, n.MOBILE, "mobile"),
        (0,
        l._)(i, n.SMALL_TABLET, "smallTablet"),
        (0,
        l._)(i, n.TABLET, "tablet"),
        (0,
        l._)(i, n.DESKTOP, "desktopPlus"),
        i)
    }
    ,
    995089: (e,t,a)=>{
        "use strict";
        a.d(t, {
            getSizeX: ()=>l,
            getSizeY: ()=>s,
            getViewHeightByMediaQueries: ()=>i,
            getViewWidthByMediaQueries: ()=>o,
            tryToCheckIsDesktop: ()=>c,
            viewWidthToClassName: ()=>u
        });
        var n = a(108681)
          , r = (a(169077),
        a(489026));
        function o(e) {
            return e.desktopPlus.matches ? r.ViewWidth.DESKTOP : e.tablet.matches ? r.ViewWidth.TABLET : e.smallTablet.matches ? r.ViewWidth.SMALL_TABLET : e.mobile.matches ? r.ViewWidth.MOBILE : r.ViewWidth.SMALL_MOBILE
        }
        function i(e) {
            return e.mediumHeight.matches ? r.ViewHeight.MEDIUM : e.mobileLandscapeHeight.matches ? r.ViewHeight.SMALL : r.ViewHeight.EXTRA_SMALL
        }
        function l(e) {
            return e <= r.ViewWidth.MOBILE ? r.SizeType.COMPACT : r.SizeType.REGULAR
        }
        function s(e, t, a) {
            return e >= r.ViewWidth.SMALL_TABLET && a || t <= r.ViewHeight.EXTRA_SMALL ? r.SizeType.COMPACT : r.SizeType.REGULAR
        }
        function c(e, t, a, o) {
            var i = o === n.Platform.VKCOM;
            if ((void 0 === e || void 0 === a) && (void 0 === e || void 0 === t) || void 0 === a && void 0 === t)
                return !!i || null;
            var l = e >= r.ViewWidth.SMALL_TABLET
              , s = a || void 0 !== t && t >= r.ViewHeight.MEDIUM;
            return l && s || i
        }
        function u(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
            if ("none" === t)
                return e.hasOwnProperty("none") ? e.none : null;
            var a = []
              , n = r.VIEW_WIDTH_TO_CSS_BREAKPOINT_MAP[t];
            return e.hasOwnProperty(n) && a.push(e[n]),
            t >= r.ViewWidth.MOBILE && e.hasOwnProperty("mobilePlus") && a.push(e.mobilePlus),
            t >= r.ViewWidth.SMALL_TABLET ? e.hasOwnProperty("smallTabletPlus") && a.push(e.smallTabletPlus) : e.hasOwnProperty("smallTabletMinus") && a.push(e.smallTabletMinus),
            t >= r.ViewWidth.TABLET ? e.hasOwnProperty("tabletPlus") && a.push(e.tabletPlus) : e.hasOwnProperty("tabletMinus") && a.push(e.tabletMinus),
            a.length > 0 ? a.join(" ") : null
        }
    }
    ,
    295094: (e,t,a)=>{
        "use strict";
        a.d(t, {
            computeBrowserInfo: ()=>i,
            mediaQueryNull: ()=>l
        });
        var n, r = a(962557);
        !function(e) {
            e.IOS = "ios",
            e.UNKNOWN = ""
        }(n || (n = {}));
        var o = {};
        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (o[e])
                return o[e];
            var t = null
              , a = n.UNKNOWN
              , i = (0,
            r.detectIOS)(e)
              , l = i.isIOS
              , s = i.iosMajor
              , c = i.iosMinor;
            l && (a = n.IOS,
            t = {
                major: s,
                minor: c
            });
            var u = {
                userAgent: e,
                system: a,
                systemVersion: t
            };
            return o[e] = u,
            u
        }
        function l(e) {
            return {
                matches: !1,
                media: e,
                onchange: r.noop,
                addListener: r.noop,
                removeListener: r.noop,
                addEventListener: r.noop,
                removeEventListener: r.noop,
                dispatchEvent: function() {
                    return !1
                }
            }
        }
    }
    ,
    734930: (e,t,a)=>{
        "use strict";
        a.d(t, {
            getDaysNames: ()=>i,
            getMonths: ()=>o,
            getWeeks: ()=>s,
            getYears: ()=>r,
            isFirstDay: ()=>u,
            isLastDay: ()=>d,
            navigateDate: ()=>l,
            setTimeEqual: ()=>c
        });
        var n = a(259007)
          , r = function(e, t) {
            for (var a = [], n = e - t; n <= e + t; n++)
                a.push({
                    label: String(n).padStart(4, "0"),
                    value: n
                });
            return a
        }
          , o = function(e) {
            for (var t = [], a = new Intl.DateTimeFormat(e,{
                month: "long"
            }), n = 0; n < 12; n++)
                t.push({
                    label: a.format(new Date("1970-01-01").setMonth(n)),
                    value: n
                });
            return t
        }
          , i = function(e, t, a) {
            var r = new Intl.DateTimeFormat(a,{
                weekday: "short"
            });
            return (0,
            n.eachDayOfInterval)((0,
            n.startOfWeek)(e, t), (0,
            n.endOfWeek)(e, t)).map((function(e) {
                return r.format(e)
            }
            ))
        }
          , l = function(e, t) {
            var a = null != e ? e : new Date;
            switch (t) {
            case "ArrowRight":
                a = (0,
                n.addDays)(a, 1);
                break;
            case "ArrowLeft":
                a = (0,
                n.subDays)(a, 1);
                break;
            case "ArrowUp":
                a = (0,
                n.subWeeks)(a, 1);
                break;
            case "ArrowDown":
                a = (0,
                n.addWeeks)(a, 1)
            }
            return a
        }
          , s = function(e, t) {
            for (var a = (0,
            n.startOfWeek)((0,
            n.startOfMonth)(e), t), r = (0,
            n.endOfWeek)((0,
            n.endOfMonth)(e), t), o = 0, i = a, l = [], s = null; (0,
            n.isBefore)(i, r); ) {
                var c = Math.floor(o / 7);
                l[c] = l[c] || [];
                var u = i.getDay();
                s !== u && (s = u,
                l[c].push(i),
                o += 1),
                i = (0,
                n.addDays)(i, 1)
            }
            return l
        }
          , c = function(e, t) {
            return t && (e.setHours(t.getHours()),
            e.setMinutes(t.getMinutes()),
            e.setSeconds(t.getSeconds()),
            e.setMilliseconds(t.getMilliseconds())),
            e
        }
          , u = function(e, t) {
            return 0 === t || (0,
            n.isFirstDayOfMonth)(e)
        }
          , d = function(e, t) {
            return 6 === t || (0,
            n.isLastDayOfMonth)(e)
        }
    }
    ,
    719007: (e,t,a)=>{
        "use strict";
        a.d(t, {
            callMultiple: ()=>r
        });
        var n = a(262039)
          , r = function() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
            return function() {
                for (var e = arguments.length, a = new Array(e), r = 0; r < e; r++)
                    a[r] = arguments[r];
                return t.filter((function(e) {
                    return "function" == typeof e
                }
                )).forEach((function(e) {
                    return e.apply(void 0, (0,
                    n._)(a))
                }
                ))
            }
        }
    }
    ,
    259007: (e,t,a)=>{
        "use strict";
        a.d(t, {
            addDays: ()=>N,
            addMonths: ()=>M,
            addWeeks: ()=>R,
            eachDayOfInterval: ()=>P,
            endOfDay: ()=>s,
            endOfMonth: ()=>v,
            endOfWeek: ()=>u,
            format: ()=>f,
            getMillisecondsToTomorrow: ()=>L,
            isAfter: ()=>g,
            isBefore: ()=>h,
            isFirstDayOfMonth: ()=>m,
            isLastDayOfMonth: ()=>p,
            isMatch: ()=>D,
            isSameDay: ()=>b,
            isSameMonth: ()=>k,
            isWithinInterval: ()=>C,
            parse: ()=>I,
            setHours: ()=>E,
            setMinutes: ()=>_,
            setMonth: ()=>y,
            setYear: ()=>S,
            startOfDay: ()=>l,
            startOfMonth: ()=>d,
            startOfWeek: ()=>c,
            subDays: ()=>w,
            subMonths: ()=>T,
            subWeeks: ()=>A
        });
        var n = a(191963)
          , r = a(688421)
          , o = a(727484)
          , i = a.n(o);
        function l(e) {
            return i()(e).startOf("day").toDate()
        }
        function s(e) {
            return i()(e).endOf("day").toDate()
        }
        function c(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            t %= 7;
            var a = i()(e)
              , n = a.day()
              , r = (n < t ? 7 : 0) + n - t;
            return a.date(a.date() - r).toDate()
        }
        function u(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , a = i()(c(e, t));
            return a.date(a.date() + 6).toDate()
        }
        function d(e) {
            return i()(e).startOf("month").toDate()
        }
        function v(e) {
            return i()(e).endOf("month").toDate()
        }
        function m(e) {
            return 1 === i()(e).date()
        }
        function p(e) {
            return i()(e).endOf("day").isSame(i()(e).endOf("month"))
        }
        function f(e, t) {
            return i()(e).format(t)
        }
        function h(e, t) {
            return i()(e) < i()(t)
        }
        function g(e, t) {
            return i()(e) > i()(t)
        }
        function b(e, t) {
            return i()(e).isSame(t, "day")
        }
        function k(e, t) {
            return i()(e).isSame(t, "month")
        }
        function C(e, t, a) {
            var n = i()(e);
            return n >= i()(t) && n <= i()(a)
        }
        function _(e, t) {
            return i()(e).set("minute", t).toDate()
        }
        function E(e, t) {
            return i()(e).set("hour", t).toDate()
        }
        function y(e, t) {
            return i()(e).set("month", t).toDate()
        }
        function S(e, t) {
            return i()(e).set("year", t).toDate()
        }
        function N(e, t) {
            return i()(e).add(t, "day").toDate()
        }
        function w(e, t) {
            return i()(e).subtract(t, "day").toDate()
        }
        function R(e, t) {
            return i()(e).add(t, "week").toDate()
        }
        function A(e, t) {
            return i()(e).subtract(t, "week").toDate()
        }
        function M(e, t) {
            return i()(e).add(t, "month").toDate()
        }
        function T(e, t) {
            return i()(e).subtract(t, "month").toDate()
        }
        function P(e, t) {
            var a = []
              , n = i()(e).toDate()
              , r = i()(t).toDate().getTime()
              , o = n;
            for (o.setHours(0, 0, 0, 0); o.getTime() <= r; )
                a.push(new Date(o.getTime())),
                o.setDate(o.getDate() + 1),
                o.setHours(0, 0, 0, 0);
            return a
        }
        function I(e, t) {
            for (var a = function() {
                var a = s.exec(t);
                if (!a)
                    return "break";
                var r = a[0].length
                  , o = s.lastIndex - r
                  , i = l.find((function(e) {
                    return e[0] === a[0]
                }
                ));
                if (d = t.slice(v, o),
                v = s.lastIndex,
                e.slice(u, u + d.length) !== d)
                    return {
                        v: new Date("")
                    };
                var p = e.slice(u + d.length).match(i[1]);
                if (!p)
                    return {
                        v: new Date("")
                    };
                u = u + d.length + p[0].length;
                var f = (0,
                n._)(i[2](p[0]), 3)
                  , h = f[0]
                  , g = f[1];
                if (!f[2])
                    return {
                        v: new Date("")
                    };
                c[h] = g,
                m = !0
            }, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Date, i = /^\d\d/, l = [["YYYY", /^\d{4}/, function(e) {
                return ["Y", +e, !0]
            }
            ], ["MM", i, function(e) {
                var t = +e;
                return ["M", t - 1, t > 0 && t <= 12]
            }
            ], ["DD", i, function(e) {
                return ["D", +e, !0]
            }
            ], ["HH", i, function(e) {
                var t = parseInt(e, 10);
                return ["h", t, t >= 0 && t < 24]
            }
            ], ["mm", i, function(e) {
                var t = parseInt(e, 10);
                return ["m", t, t >= 0 && t < 60]
            }
            ]], s = new RegExp(l.map((function(e) {
                return e[0]
            }
            )).join("|"),"g"), c = {
                Y: o.getFullYear(),
                M: o.getMonth(),
                D: o.getDate(),
                h: o.getHours(),
                m: o.getMinutes(),
                s: o.getSeconds(),
                ms: o.getMilliseconds()
            }, u = 0, d = "", v = 0, m = !1; ; ) {
                var p = a();
                if ("object" === (0,
                r._)(p))
                    return p.v;
                if ("break" === p)
                    break
            }
            if (!m)
                return new Date("");
            var f = new Date(c.Y,c.M,c.D,c.h,c.m,c.s,c.ms);
            return f.getMonth() !== c.M || f.getDate() !== c.D ? new Date("") : f
        }
        function D(e, t) {
            return !isNaN(+I(e, t))
        }
        function L(e) {
            return i()(s(e)).diff(i()(e), "ms")
        }
    }
    ,
    181498: (e,t,a)=>{
        "use strict";
        a.d(t, {
            blurActiveElement: ()=>c,
            useDOM: ()=>l,
            withDOM: ()=>s
        });
        var n = a(772253)
          , r = a(667294)
          , o = a(962557)
          , i = r.createContext({
            window: o.canUseDOM ? window : void 0,
            document: o.canUseDOM ? document : void 0
        })
          , l = function() {
            return r.useContext(i)
        };
        function s(e) {
            return function(t) {
                var a = l();
                return r.createElement(e, (0,
                n._)({}, t, a))
            }
        }
        function c(e) {
            e && e.activeElement && e.activeElement.blur()
        }
    }
    ,
    178624: (e,t,a)=>{
        "use strict";
        a.d(t, {
            autoUpdateFloatingElement: ()=>c
        });
        var n = a(926372)
          , r = a(772253)
          , o = a(414932)
          , i = a(158339)
          , l = a(66037)
          , s = {
            ancestorScroll: !0,
            ancestorResize: !0,
            elementResize: !1,
            animationFrame: !1
        };
        function c(e, t, a) {
            var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s
              , u = c.elementResize
              , d = void 0 !== u && u
              , v = (0,
            i._)(c, ["elementResize"])
              , m = (0,
            l.autoUpdate)(e, t, a, (0,
            o._)((0,
            r._)({}, v), {
                elementResize: !1
            }))
              , p = null;
            if (d) {
                var f = !0;
                p = new MutationObserver((function() {
                    f || a(),
                    f = !1
                }
                )),
                (0,
                n._)(e, Element) && p.observe(e, {
                    childList: !0,
                    subtree: !0
                }),
                p.observe(t, {
                    childList: !0,
                    subtree: !0
                })
            }
            return function() {
                null !== p && (p.disconnect(),
                p = null),
                m()
            }
        }
    }
    ,
    266479: (e,t,a)=>{
        "use strict";
        a.d(t, {
            checkIsNotAutoPlacement: ()=>n,
            convertFloatingDataToReactCSSProperties: ()=>o,
            getAutoPlacementAlign: ()=>r
        });
        a(667294);
        function n(e) {
            return !e.startsWith("auto")
        }
        function r(e) {
            var t = e.replace(/auto-|auto/, "");
            return "start" === t || "end" === t ? t : null
        }
        function o(e, t, a) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "max-content"
              , r = {
                position: e,
                top: a,
                right: "auto",
                bottom: "auto",
                left: t
            };
            return null !== n && (r.width = n),
            r
        }
    }
    ,
    888420: (e,t,a)=>{
        "use strict";
        function n(e) {
            return .5 * (1 - Math.cos(Math.PI * e))
        }
        a.d(t, {
            easeInOutSine: ()=>n
        })
    }
    ,
    504153: (e,t,a)=>{
        "use strict";
        function n(e, t) {
            return e.nav || e.id
        }
        a.d(t, {
            getNavId: ()=>n
        })
    }
    ,
    330434: (e,t,a)=>{
        "use strict";
        a.d(t, {
            isRefObject: ()=>n
        });
        a(667294);
        var n = function(e) {
            return "object" == typeof e && null !== e && e.hasOwnProperty("current")
        }
    }
    ,
    876256: (e,t,a)=>{
        "use strict";
        function n(e, t) {
            e.addEventListener ? e.addEventListener("change", t) : e.addListener(t)
        }
        function r(e, t) {
            e.removeEventListener ? e.removeEventListener("change", t) : e.removeListener(t)
        }
        a.d(t, {
            matchMediaListAddListener: ()=>n,
            matchMediaListRemoveListener: ()=>r
        })
    }
    ,
    640784: (e,t,a)=>{
        "use strict";
        function n(e) {
            var t, a, n, r, o, i = null === (t = e) || void 0 === t ? void 0 : t.getBoundingClientRect();
            return {
                top: null === (a = i) || void 0 === a ? void 0 : a.top,
                left: null === (n = i) || void 0 === n ? void 0 : n.left,
                width: null === (r = e) || void 0 === r ? void 0 : r.offsetWidth,
                height: null === (o = e) || void 0 === o ? void 0 : o.offsetHeight
            }
        }
        a.d(t, {
            getOffsetRect: ()=>n
        })
    }
    ,
    108681: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Platform: ()=>n,
            platform: ()=>l
        });
        var n, r = a(962557), o = a(295094);
        !function(e) {
            e.ANDROID = "android",
            e.IOS = "ios",
            e.VKCOM = "vkcom"
        }(n || (n = {}));
        var i = r.canUseDOM ? function(e) {
            var t = {
                desktop_web: n.VKCOM
            };
            try {
                var a = r.querystring.parse(e).vk_platform;
                return "string" == typeof a && a in t ? t[a] : void 0
            } catch (e) {
                return void console.warn(e)
            }
        }(location.search) : void 0;
        function l(e) {
            return i || (e || (e = (0,
            o.computeBrowserInfo)()),
            "ios" === e.system ? n.IOS : n.ANDROID)
        }
    }
    ,
    354368: (e,t,a)=>{
        "use strict";
        if (a(962557).canUseDOM) {
            var n = Element.prototype;
            n.matches || (n.matches = n.matchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector),
            n.closest || (n.closest = function(e) {
                for (var t = this; t; ) {
                    if (t.matches(e))
                        return t;
                    t = t.parentElement
                }
                return null
            }
            )
        }
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(e, t) {
                if (null == this)
                    throw new TypeError('"this" is null or not defined');
                var a = Object(this)
                  , n = a.length >>> 0;
                if (0 === n)
                    return !1;
                for (var r, o, i = 0 | t, l = Math.max(i >= 0 ? i : n - Math.abs(i), 0); l < n; ) {
                    if ((r = a[l]) === (o = e) || "number" == typeof r && "number" == typeof o && isNaN(r) && isNaN(o))
                        return !0;
                    l++
                }
                return !1
            }
        }),
        Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function(e) {
                if (null === this)
                    throw new TypeError("Array.prototype.find called on null or undefined");
                if ("function" != typeof e)
                    throw new TypeError("callback must be a function");
                for (var t = Object(this), a = t.length >>> 0, n = arguments[1], r = 0; r < a; r++) {
                    var o = t[r];
                    if (e.call(n, o, r, t))
                        return o
                }
            }
        }),
        String.prototype.padStart || (String.prototype.padStart = function(e, t) {
            return e >>= 0,
            t = String(t || " "),
            this.length > e ? String(this) : ((e -= this.length) > t.length && (t += t.repeat(e / t.length)),
            t.slice(0, e) + String(this))
        }
        )
    }
    ,
    221501: (e,t,a)=>{
        "use strict";
        a.d(t, {
            defaultFilterFn: ()=>i,
            getFormFieldModeFromSelectType: ()=>l
        });
        a(667294);
        var n, r = a(256631);
        try {
            n = new RegExp("\\p{L}","u")
        } catch (e) {}
        var o = function(e) {
            return (0,
            r.getTitleFromChildren)(e.label)
        }
          , i = function() {
            var e, t, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", r = arguments.length > 1 ? arguments[1] : void 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o;
            a = a.toLocaleLowerCase();
            var l = null === (e = i(r)) || void 0 === e ? void 0 : e.toLocaleLowerCase();
            if (null === (t = l) || void 0 === t ? void 0 : t.startsWith(a))
                return !0;
            var s = function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", a = [], n = e.indexOf(t); -1 !== n; )
                    a.push(n),
                    n = e.indexOf(t, n + 1);
                return a
            }(l, a);
            if (!n || !l)
                return s.length > 0;
            var c = !0
              , u = !1
              , d = void 0;
            try {
                for (var v, m = s[Symbol.iterator](); !(c = (v = m.next()).done); c = !0) {
                    var p = v.value;
                    if (!n.test(l[p - 1]))
                        return !0
                }
            } catch (e) {
                u = !0,
                d = e
            } finally {
                try {
                    c || null == m.return || m.return()
                } finally {
                    if (u)
                        throw d
                }
            }
            return !1
        }
          , l = function() {
            return "default" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default") ? "default" : "plain"
        }
    }
    ,
    495358: (e,t,a)=>{
        "use strict";
        function n(e, t) {
            e && (e.style.transform = t,
            e.style.webkitTransform = t)
        }
        a.d(t, {
            setTransformStyle: ()=>n
        })
    }
    ,
    23220: (e,t,a)=>{
        "use strict";
        a.d(t, {
            animationEvent: ()=>o,
            transitionEvent: ()=>i
        });
        var n = a(962557)
          , r = a(491842)
          , o = {
            supported: !1
        }
          , i = {
            supported: !1,
            name: null
        };
        n.canUseDOM && !r.isTesting && (("undefined" != typeof AnimationEvent || "undefined" != typeof WebKitAnimationEvent) && (o.supported = !0),
        "undefined" != typeof TransitionEvent ? (i.supported = !0,
        i.name = "transitionend") : "undefined" != typeof WebKitTransitionEvent && (i.supported = !0,
        i.name = "webkitTransitionEnd"))
    }
    ,
    491842: (e,t,a)=>{
        "use strict";
        a.d(t, {
            isTesting: ()=>r
        });
        var n = a(962557)
          , r = Boolean(n.canUseDOM && window.__isVkuiTesting)
    }
    ,
    362591: (e,t,a)=>{
        "use strict";
        a.d(t, {
            TokensClassProvider: ()=>i
        });
        var n = a(667294)
          , r = a(962557)
          , o = a(343236)
          , i = function(e) {
            var t = e.children
              , a = e.platform
              , i = e.appearance;
            return n.createElement(n.Fragment, null, n.Children.map(t, (function(e) {
                return n.isValidElement(e) ? n.cloneElement(e, {
                    className: (0,
                    r.classNames)(e.props.className, (0,
                    o.generateVKUITokensClassName)(a, i))
                }) : e
            }
            )))
        }
    }
    ,
    970414: (e,t,a)=>{
        "use strict";
        a.d(t, {
            coordX: ()=>r,
            coordY: ()=>o,
            getSupportedEvents: ()=>l,
            rubber: ()=>s,
            touchEnabled: ()=>i
        });
        var n = a(962557)
          , r = function(e) {
            return null != e.clientX ? e.clientX : e.changedTouches && e.changedTouches[0].clientX
        }
          , o = function(e) {
            return null != e.clientY ? e.clientY : e.changedTouches && e.changedTouches[0].clientY
        }
          , i = function() {
            return n.canUseDOM && "ontouchstart"in window
        };
        function l() {
            return i() ? ["touchstart", "touchmove", "touchend", "touchcancel"] : ["mousedown", "mousemove", "mouseup", "mouseleave"]
        }
        function s(e, t, a, n) {
            if (n || e < 0)
                return e;
            var r = e * a;
            return r * t / (r + t)
        }
    }
    ,
    214542: (e,t,a)=>{
        "use strict";
        a.d(t, {
            useIsomorphicLayoutEffect: ()=>r
        });
        var n = a(667294)
          , r = a(962557).canUseDOM ? n.useLayoutEffect : n.useEffect
    }
    ,
    256631: (e,t,a)=>{
        "use strict";
        a.d(t, {
            addClassNameToElement: ()=>u,
            debounce: ()=>o,
            getTitleFromChildren: ()=>s,
            multiRef: ()=>l,
            removeClassNameFromElement: ()=>d,
            setRef: ()=>i,
            stopPropagation: ()=>c
        });
        var n = a(262039)
          , r = a(667294);
        function o(e, t) {
            var a;
            return function() {
                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                    o[i] = arguments[i];
                clearTimeout(a),
                a = setTimeout((function() {
                    return e.apply(void 0, (0,
                    n._)(o))
                }
                ), t)
            }
        }
        function i(e, t) {
            t && ("function" == typeof t ? t(e) : t.current = e)
        }
        function l() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
            var n = null;
            return {
                get current() {
                    return n
                },
                set current(e) {
                    n = e,
                    t.forEach((function(t) {
                        return t && i(e, t)
                    }
                    ))
                }
            }
        }
        function s(e) {
            var t = "";
            return r.Children.map(e, (function(e) {
                "string" == typeof e && (t += " " + e)
            }
            )),
            t.trim()
        }
        var c = function(e) {
            return e.stopPropagation()
        };
        function u(e, t) {
            var a = e.getAttribute("class") || ""
              , n = "".concat(a).concat(a ? " " : "").concat(t);
            e.setAttribute("class", n)
        }
        function d(e, t) {
            var a = (e.getAttribute("class") || "").split(/\s+/)
              , n = a.findIndex((function(e) {
                return e === t
            }
            ));
            -1 !== n && (a.splice(n, 1),
            e.setAttribute("class", a.join(" ")))
        }
    }
    ,
    644029: (e,t,a)=>{
        "use strict";
        function n(e) {
            var t = new Set;
            return function(a) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "warn";
                if (!t.has(a)) {
                    t.add(a);
                    var r = "%c[VKUI/".concat(e, "] ").concat(a)
                      , o = "log" === n ? "color: steelblue; font-style: italic" : void 0;
                    console[n](r, o)
                }
            }
        }
        function r(e) {
            return "https://dequeuniversity.com/rules/axe/".concat("4.5", "/").concat(e)
        }
        a.d(t, {
            warnOnce: ()=>n
        });
        "a11y: Кнопка должна содержать текст, доступный для скринридеров. Чтобы исправить эту ошибку, передайте компоненту текст или свойство aria-label.\n".concat(r("button-name")),
        "a11y: Ссылка должна содержать текст, доступный для скринридеров. Чтобы исправить эту ошибку, передайте компоненту текст или свойство aria-label.\n".concat(r("link-name")),
        "a11y: Изображение должно содержать альтернативный текст, который его описывает. Чтобы исправить эту ошибку, передайте компоненту свойство alt.\n".concat(r("image-alt"))
    }
    ,
    169077: e=>{
        var t = {
            DESKTOP: 1280,
            TABLET: 1024,
            SMALL_TABLET: 768,
            MOBILE: 320,
            MOBILE_LANDSCAPE_HEIGHT: 415,
            MEDIUM_HEIGHT: 720
        };
        function a(e) {
            return "(min-width: ".concat(e, "px)")
        }
        function n(e) {
            return "(max-width: ".concat(e - .1, "px)")
        }
        function r(e, t) {
            return "".concat(a(e), " and ").concat(n(t))
        }
        function o(e) {
            return "(min-height: ".concat(e, "px)")
        }
        function i(e) {
            return "(max-height: ".concat(e - .1, "px)")
        }
        var l = {
            DESKTOP_PLUS: a(t.DESKTOP),
            TABLET: r(t.TABLET, t.DESKTOP),
            SMALL_TABLET_PLUS: a(t.SMALL_TABLET),
            SMALL_TABLET: r(t.SMALL_TABLET, t.TABLET),
            MOBILE: r(t.MOBILE, t.SMALL_TABLET),
            MEDIUM_HEIGHT: o(t.MEDIUM_HEIGHT),
            MOBILE_LANDSCAPE_HEIGHT: o(t.MOBILE_LANDSCAPE_HEIGHT)
        };
        e.exports = {
            BREAKPOINTS: t,
            MEDIA_QUERIES: l,
            widthHalfInterval: r,
            widthPlus: a,
            widthMinus: n,
            heightHalfInterval: function(e, t) {
                return "".concat(o(e), " and ").concat(i(t))
            },
            heightPlus: o,
            heightMinus: i
        }
    }
    ,
    303741: (e,t,a)=>{
        "use strict";
        a.d(t, {
            detectIOS: ()=>r,
            isIOS: ()=>i,
            isIPadOS: ()=>l
        });
        var n = a(42566);
        function r(e) {
            e || (e = n.canUseDOM ? navigator.userAgent : "");
            var t = function(e) {
                if (!n.canUseDOM)
                    return !1;
                var t = !/ipad|iphone|ipod/.test(e)
                  , a = e.includes("mac os");
                if (a && t && "boolean" == typeof navigator.standalone)
                    return !0;
                return !1
            }(e = e.toLowerCase())
              , a = t || e.includes("ipad")
              , r = !a && -1 !== e.search(/iphone|ipod/)
              , o = r || a
              , i = o && e.match(/os ([\d_]+) like mac os x/i)
              , l = 0
              , s = 0;
            t ? (l = 13,
            s = 0) : i && (l = +(i = i[1].split("_"))[0],
            s = +i[1]),
            i = null;
            var c = l < 13 && !(11 === l && s < 3)
              , u = o && function(e) {
                if (!n.canUseDOM)
                    return !1;
                var t = window.webkit;
                if (t && t.messageHandlers)
                    return !0;
                var a = /constructor/i.test(String(window.HTMLElement))
                  , r = !!window.indexedDB;
                if (e.includes("safari") && e.includes("version") && !navigator.standalone)
                    ;
                else if (!r && a || !window.statusbar || !window.statusbar.visible)
                    ;
                else if (!a || r)
                    return !0;
                return !1
            }(e)
              , d = !1;
            return n.canUseDOM && (d = o && 375 === screen.width && 812 === screen.height && 3 === window.devicePixelRatio),
            {
                isIPad: a,
                isIPhone: r,
                isIOS: o,
                isIPadOS: t,
                iosMajor: l,
                iosMinor: s,
                isWKWebView: u,
                isScrollBasedViewport: c,
                isIPhoneX: d,
                isIOSChrome: -1 !== e.search(/crios/i)
            }
        }
        var o = r()
          , i = function() {
            return o.isIOS
        }()
          , l = function() {
            return o.isIPadOS
        }()
    }
    ,
    186154: (e,t,a)=>{
        "use strict";
        a.d(t, {
            hasHover: ()=>l,
            hasMouse: ()=>i
        });
        var n = a(303741)
          , r = a(42566)
          , o = function() {
            var e = {
                hasMouse: !1,
                hasTouchEvents: !1,
                hasHover: !1,
                hasTouch: !1
            };
            if (!r.canUseDOM)
                return e;
            if (n.isIOS && !n.isIPadOS)
                e.hasMouse = !1,
                e.hasHover = !1,
                e.hasTouchEvents = !0,
                e.hasTouch = !0;
            else if (e.hasTouchEvents = "ontouchstart"in document,
            e.hasTouch = e.hasTouchEvents || "maxTouchPoints"in navigator && navigator.maxTouchPoints > 0,
            e.hasTouch) {
                var t = !/android|mobile|tablet/i.test(navigator.userAgent);
                e.hasMouse = "function" == typeof window.matchMedia && window.matchMedia("(pointer)").matches ? matchMedia("(pointer: fine)").matches : t,
                e.hasHover = e.hasMouse && ("function" == typeof window.matchMedia && window.matchMedia("(hover)").matches ? matchMedia("(hover: hover)").matches : t)
            } else
                e.hasMouse = !0,
                e.hasHover = !0;
            return e
        }()
          , i = function() {
            return o.hasMouse
        }()
          , l = function() {
            return o.hasHover
        }()
    }
    ,
    191173: (e,t,a)=>{
        "use strict";
        a.d(t, {
            classNames: ()=>r
        });
        var n = a(688421);
        function r() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
            var r = [];
            return t.forEach((function(e) {
                if (e)
                    switch (void 0 === e ? "undefined" : (0,
                    n._)(e)) {
                    case "string":
                        r.push(e);
                        break;
                    case "object":
                        Object.keys(e).forEach((function(t) {
                            e[t] && r.push(t)
                        }
                        ));
                        break;
                    default:
                        r.push("".concat(e))
                    }
            }
            )),
            r.join(" ")
        }
    }
    ,
    907387: (e,t,a)=>{
        "use strict";
        a(93813)
    }
    ,
    42566: (e,t,a)=>{
        "use strict";
        a.d(t, {
            canUseDOM: ()=>n
        });
        var n = function() {
            return !("undefined" == typeof window || !window.document || !window.document.createElement)
        }()
    }
    ,
    672124: (e,t,a)=>{
        "use strict";
        a.d(t, {
            noop: ()=>n
        });
        var n = function() {}
    }
    ,
    190877: (e,t,a)=>{
        "use strict";
        a.d(t, {
            buildFullNamedEntities: ()=>l,
            fullNamedEntities: ()=>o
        });
        var n = {
            AElig: "Æ",
            AMP: "&",
            Aacute: "Á",
            Agrave: "À",
            Aring: "Å",
            Acirc: "Â",
            Atilde: "Ã",
            Auml: "Ä",
            COPY: "©",
            Ccedil: "Ç",
            ETH: "Ð",
            Eacute: "É",
            Ecirc: "Ê",
            Egrave: "È",
            Euml: "Ë",
            GT: ">",
            Iacute: "Í",
            Icirc: "Î",
            Igrave: "Ì",
            Iuml: "Ï",
            LT: "<",
            Ntilde: "Ñ",
            Oacute: "Ó",
            Ocirc: "Ô",
            Ograve: "Ò",
            Oslash: "Ø",
            Otilde: "Õ",
            Ouml: "Ö",
            QUOT: '"',
            REG: "®",
            THORN: "Þ",
            Uacute: "Ú",
            Ucirc: "Û",
            Ugrave: "Ù",
            Uuml: "Ü",
            Yacute: "Ý",
            aacute: "á",
            acirc: "â",
            acute: "´",
            aelig: "æ",
            agrave: "à",
            amp: "&",
            aring: "å",
            atilde: "ã",
            auml: "ä",
            brvbar: "¦",
            ccedil: "ç",
            cedil: "¸",
            cent: "¢",
            copy: "©",
            curren: "¤",
            deg: "°",
            divide: "÷",
            eacute: "é",
            ecirc: "ê",
            egrave: "è",
            eth: "ð",
            euml: "ë",
            frac12: "½",
            frac14: "¼",
            frac34: "¾",
            gt: ">",
            iacute: "í",
            icirc: "î",
            iexcl: "¡",
            igrave: "ì",
            iquest: "¿",
            iuml: "ï",
            laquo: "«",
            lt: "<",
            macr: "¯",
            micro: "µ",
            middot: "·",
            nbsp: " ",
            not: "¬",
            ntilde: "ñ",
            oacute: "ó",
            ocirc: "ô",
            ograve: "ò",
            ordf: "ª",
            ordm: "º",
            oslash: "ø",
            otilde: "õ",
            ouml: "ö",
            para: "¶",
            plusmn: "±",
            pound: "£",
            quot: '"',
            raquo: "»",
            reg: "®",
            sect: "§",
            shy: "­",
            sup1: "¹",
            sup2: "²",
            sup3: "³",
            szlig: "ß",
            thorn: "þ",
            times: "×",
            uacute: "ú",
            ucirc: "û",
            ugrave: "ù",
            uml: "¨",
            uuml: "ü",
            yacute: "ý",
            yen: "¥",
            yuml: "ÿ"
        }
          , r = {
            Abreve: "Ă",
            Acy: "А",
            Afr: "𝔄",
            Alpha: "Α",
            Amacr: "Ā",
            And: "⩓",
            Aogon: "Ą",
            Aopf: "𝔸",
            ApplyFunction: "⁡",
            Ascr: "𝒜",
            Assign: "≔",
            Backslash: "∖",
            Barv: "⫧",
            Barwed: "⌆",
            Bcy: "Б",
            Because: "∵",
            Bernoullis: "ℬ",
            Beta: "Β",
            Bfr: "𝔅",
            Bopf: "𝔹",
            Breve: "˘",
            Bscr: "ℬ",
            Bumpeq: "≎",
            CHcy: "Ч",
            Cacute: "Ć",
            Cap: "⋒",
            CapitalDifferentialD: "ⅅ",
            Cayleys: "ℭ",
            Ccaron: "Č",
            Ccirc: "Ĉ",
            Cconint: "∰",
            Cdot: "Ċ",
            Cedilla: "¸",
            CenterDot: "·",
            Cfr: "ℭ",
            Chi: "Χ",
            CircleDot: "⊙",
            CircleMinus: "⊖",
            CirclePlus: "⊕",
            CircleTimes: "⊗",
            ClockwiseContourIntegral: "∲",
            CloseCurlyDoubleQuote: "”",
            CloseCurlyQuote: "’",
            Colon: "∷",
            Colone: "⩴",
            Congruent: "≡",
            Conint: "∯",
            ContourIntegral: "∮",
            Copf: "ℂ",
            Coproduct: "∐",
            CounterClockwiseContourIntegral: "∳",
            Cross: "⨯",
            Cscr: "𝒞",
            Cup: "⋓",
            CupCap: "≍",
            DD: "ⅅ",
            DDotrahd: "⤑",
            DJcy: "Ђ",
            DScy: "Ѕ",
            DZcy: "Џ",
            Dagger: "‡",
            Darr: "↡",
            Dashv: "⫤",
            Dcaron: "Ď",
            Dcy: "Д",
            Del: "∇",
            Delta: "Δ",
            Dfr: "𝔇",
            DiacriticalAcute: "´",
            DiacriticalDot: "˙",
            DiacriticalDoubleAcute: "˝",
            DiacriticalGrave: "`",
            DiacriticalTilde: "˜",
            Diamond: "⋄",
            DifferentialD: "ⅆ",
            Dopf: "𝔻",
            Dot: "¨",
            DotDot: "⃜",
            DotEqual: "≐",
            DoubleContourIntegral: "∯",
            DoubleDot: "¨",
            DoubleDownArrow: "⇓",
            DoubleLeftArrow: "⇐",
            DoubleLeftRightArrow: "⇔",
            DoubleLeftTee: "⫤",
            DoubleLongLeftArrow: "⟸",
            DoubleLongLeftRightArrow: "⟺",
            DoubleLongRightArrow: "⟹",
            DoubleRightArrow: "⇒",
            DoubleRightTee: "⊨",
            DoubleUpArrow: "⇑",
            DoubleUpDownArrow: "⇕",
            DoubleVerticalBar: "∥",
            DownArrow: "↓",
            DownArrowBar: "⤓",
            DownArrowUpArrow: "⇵",
            DownBreve: "̑",
            DownLeftRightVector: "⥐",
            DownLeftTeeVector: "⥞",
            DownLeftVector: "↽",
            DownLeftVectorBar: "⥖",
            DownRightTeeVector: "⥟",
            DownRightVector: "⇁",
            DownRightVectorBar: "⥗",
            DownTee: "⊤",
            DownTeeArrow: "↧",
            Downarrow: "⇓",
            Dscr: "𝒟",
            Dstrok: "Đ",
            ENG: "Ŋ",
            Ecaron: "Ě",
            Ecy: "Э",
            Edot: "Ė",
            Efr: "𝔈",
            Element: "∈",
            Emacr: "Ē",
            EmptySmallSquare: "◻",
            EmptyVerySmallSquare: "▫",
            Eogon: "Ę",
            Eopf: "𝔼",
            Epsilon: "Ε",
            Equal: "⩵",
            EqualTilde: "≂",
            Equilibrium: "⇌",
            Escr: "ℰ",
            Esim: "⩳",
            Eta: "Η",
            Exists: "∃",
            ExponentialE: "ⅇ",
            Fcy: "Ф",
            Ffr: "𝔉",
            FilledSmallSquare: "◼",
            FilledVerySmallSquare: "▪",
            Fopf: "𝔽",
            ForAll: "∀",
            Fouriertrf: "ℱ",
            Fscr: "ℱ",
            GJcy: "Ѓ",
            Gamma: "Γ",
            Gammad: "Ϝ",
            Gbreve: "Ğ",
            Gcedil: "Ģ",
            Gcirc: "Ĝ",
            Gcy: "Г",
            Gdot: "Ġ",
            Gfr: "𝔊",
            Gg: "⋙",
            Gopf: "𝔾",
            GreaterEqual: "≥",
            GreaterEqualLess: "⋛",
            GreaterFullEqual: "≧",
            GreaterGreater: "⪢",
            GreaterLess: "≷",
            GreaterSlantEqual: "⩾",
            GreaterTilde: "≳",
            Gscr: "𝒢",
            Gt: "≫",
            HARDcy: "Ъ",
            Hacek: "ˇ",
            Hat: "^",
            Hcirc: "Ĥ",
            Hfr: "ℌ",
            HilbertSpace: "ℋ",
            Hopf: "ℍ",
            HorizontalLine: "─",
            Hscr: "ℋ",
            Hstrok: "Ħ",
            HumpDownHump: "≎",
            HumpEqual: "≏",
            IEcy: "Е",
            IJlig: "Ĳ",
            IOcy: "Ё",
            Icy: "И",
            Idot: "İ",
            Ifr: "ℑ",
            Im: "ℑ",
            Imacr: "Ī",
            ImaginaryI: "ⅈ",
            Implies: "⇒",
            Int: "∬",
            Integral: "∫",
            Intersection: "⋂",
            InvisibleComma: "⁣",
            InvisibleTimes: "⁢",
            Iogon: "Į",
            Iopf: "𝕀",
            Iota: "Ι",
            Iscr: "ℐ",
            Itilde: "Ĩ",
            Iukcy: "І",
            Jcirc: "Ĵ",
            Jcy: "Й",
            Jfr: "𝔍",
            Jopf: "𝕁",
            Jscr: "𝒥",
            Jsercy: "Ј",
            Jukcy: "Є",
            KHcy: "Х",
            KJcy: "Ќ",
            Kappa: "Κ",
            Kcedil: "Ķ",
            Kcy: "К",
            Kfr: "𝔎",
            Kopf: "𝕂",
            Kscr: "𝒦",
            LJcy: "Љ",
            Lacute: "Ĺ",
            Lambda: "Λ",
            Lang: "⟪",
            Laplacetrf: "ℒ",
            Larr: "↞",
            Lcaron: "Ľ",
            Lcedil: "Ļ",
            Lcy: "Л",
            LeftAngleBracket: "⟨",
            LeftArrow: "←",
            LeftArrowBar: "⇤",
            LeftArrowRightArrow: "⇆",
            LeftCeiling: "⌈",
            LeftDoubleBracket: "⟦",
            LeftDownTeeVector: "⥡",
            LeftDownVector: "⇃",
            LeftDownVectorBar: "⥙",
            LeftFloor: "⌊",
            LeftRightArrow: "↔",
            LeftRightVector: "⥎",
            LeftTee: "⊣",
            LeftTeeArrow: "↤",
            LeftTeeVector: "⥚",
            LeftTriangle: "⊲",
            LeftTriangleBar: "⧏",
            LeftTriangleEqual: "⊴",
            LeftUpDownVector: "⥑",
            LeftUpTeeVector: "⥠",
            LeftUpVector: "↿",
            LeftUpVectorBar: "⥘",
            LeftVector: "↼",
            LeftVectorBar: "⥒",
            Leftarrow: "⇐",
            Leftrightarrow: "⇔",
            LessEqualGreater: "⋚",
            LessFullEqual: "≦",
            LessGreater: "≶",
            LessLess: "⪡",
            LessSlantEqual: "⩽",
            LessTilde: "≲",
            Lfr: "𝔏",
            Ll: "⋘",
            Lleftarrow: "⇚",
            Lmidot: "Ŀ",
            LongLeftArrow: "⟵",
            LongLeftRightArrow: "⟷",
            LongRightArrow: "⟶",
            Longleftarrow: "⟸",
            Longleftrightarrow: "⟺",
            Longrightarrow: "⟹",
            Lopf: "𝕃",
            LowerLeftArrow: "↙",
            LowerRightArrow: "↘",
            Lscr: "ℒ",
            Lsh: "↰",
            Lstrok: "Ł",
            Lt: "≪",
            Map: "⤅",
            Mcy: "М",
            MediumSpace: " ",
            Mellintrf: "ℳ",
            Mfr: "𝔐",
            MinusPlus: "∓",
            Mopf: "𝕄",
            Mscr: "ℳ",
            Mu: "Μ",
            NJcy: "Њ",
            Nacute: "Ń",
            Ncaron: "Ň",
            Ncedil: "Ņ",
            Ncy: "Н",
            NegativeMediumSpace: "​",
            NegativeThickSpace: "​",
            NegativeThinSpace: "​",
            NegativeVeryThinSpace: "​",
            NestedGreaterGreater: "≫",
            NestedLessLess: "≪",
            NewLine: "\n",
            Nfr: "𝔑",
            NoBreak: "⁠",
            NonBreakingSpace: " ",
            Nopf: "ℕ",
            Not: "⫬",
            NotCongruent: "≢",
            NotCupCap: "≭",
            NotDoubleVerticalBar: "∦",
            NotElement: "∉",
            NotEqual: "≠",
            NotEqualTilde: "≂̸",
            NotExists: "∄",
            NotGreater: "≯",
            NotGreaterEqual: "≱",
            NotGreaterFullEqual: "≧̸",
            NotGreaterGreater: "≫̸",
            NotGreaterLess: "≹",
            NotGreaterSlantEqual: "⩾̸",
            NotGreaterTilde: "≵",
            NotHumpDownHump: "≎̸",
            NotHumpEqual: "≏̸",
            NotLeftTriangle: "⋪",
            NotLeftTriangleBar: "⧏̸",
            NotLeftTriangleEqual: "⋬",
            NotLess: "≮",
            NotLessEqual: "≰",
            NotLessGreater: "≸",
            NotLessLess: "≪̸",
            NotLessSlantEqual: "⩽̸",
            NotLessTilde: "≴",
            NotNestedGreaterGreater: "⪢̸",
            NotNestedLessLess: "⪡̸",
            NotPrecedes: "⊀",
            NotPrecedesEqual: "⪯̸",
            NotPrecedesSlantEqual: "⋠",
            NotReverseElement: "∌",
            NotRightTriangle: "⋫",
            NotRightTriangleBar: "⧐̸",
            NotRightTriangleEqual: "⋭",
            NotSquareSubset: "⊏̸",
            NotSquareSubsetEqual: "⋢",
            NotSquareSuperset: "⊐̸",
            NotSquareSupersetEqual: "⋣",
            NotSubset: "⊂⃒",
            NotSubsetEqual: "⊈",
            NotSucceeds: "⊁",
            NotSucceedsEqual: "⪰̸",
            NotSucceedsSlantEqual: "⋡",
            NotSucceedsTilde: "≿̸",
            NotSuperset: "⊃⃒",
            NotSupersetEqual: "⊉",
            NotTilde: "≁",
            NotTildeEqual: "≄",
            NotTildeFullEqual: "≇",
            NotTildeTilde: "≉",
            NotVerticalBar: "∤",
            Nscr: "𝒩",
            Nu: "Ν",
            OElig: "Œ",
            Ocy: "О",
            Odblac: "Ő",
            Ofr: "𝔒",
            Omacr: "Ō",
            Omega: "Ω",
            Omicron: "Ο",
            Oopf: "𝕆",
            OpenCurlyDoubleQuote: "“",
            OpenCurlyQuote: "‘",
            Or: "⩔",
            Oscr: "𝒪",
            Otimes: "⨷",
            OverBar: "‾",
            OverBrace: "⏞",
            OverBracket: "⎴",
            OverParenthesis: "⏜",
            PartialD: "∂",
            Pcy: "П",
            Pfr: "𝔓",
            Phi: "Φ",
            Pi: "Π",
            PlusMinus: "±",
            Poincareplane: "ℌ",
            Popf: "ℙ",
            Pr: "⪻",
            Precedes: "≺",
            PrecedesEqual: "⪯",
            PrecedesSlantEqual: "≼",
            PrecedesTilde: "≾",
            Prime: "″",
            Product: "∏",
            Proportion: "∷",
            Proportional: "∝",
            Pscr: "𝒫",
            Psi: "Ψ",
            Qfr: "𝔔",
            Qopf: "ℚ",
            Qscr: "𝒬",
            RBarr: "⤐",
            Racute: "Ŕ",
            Rang: "⟫",
            Rarr: "↠",
            Rarrtl: "⤖",
            Rcaron: "Ř",
            Rcedil: "Ŗ",
            Rcy: "Р",
            Re: "ℜ",
            ReverseElement: "∋",
            ReverseEquilibrium: "⇋",
            ReverseUpEquilibrium: "⥯",
            Rfr: "ℜ",
            Rho: "Ρ",
            RightAngleBracket: "⟩",
            RightArrow: "→",
            RightArrowBar: "⇥",
            RightArrowLeftArrow: "⇄",
            RightCeiling: "⌉",
            RightDoubleBracket: "⟧",
            RightDownTeeVector: "⥝",
            RightDownVector: "⇂",
            RightDownVectorBar: "⥕",
            RightFloor: "⌋",
            RightTee: "⊢",
            RightTeeArrow: "↦",
            RightTeeVector: "⥛",
            RightTriangle: "⊳",
            RightTriangleBar: "⧐",
            RightTriangleEqual: "⊵",
            RightUpDownVector: "⥏",
            RightUpTeeVector: "⥜",
            RightUpVector: "↾",
            RightUpVectorBar: "⥔",
            RightVector: "⇀",
            RightVectorBar: "⥓",
            Rightarrow: "⇒",
            Ropf: "ℝ",
            RoundImplies: "⥰",
            Rrightarrow: "⇛",
            Rscr: "ℛ",
            Rsh: "↱",
            RuleDelayed: "⧴",
            SHCHcy: "Щ",
            SHcy: "Ш",
            SOFTcy: "Ь",
            Sacute: "Ś",
            Sc: "⪼",
            Scaron: "Š",
            Scedil: "Ş",
            Scirc: "Ŝ",
            Scy: "С",
            Sfr: "𝔖",
            ShortDownArrow: "↓",
            ShortLeftArrow: "←",
            ShortRightArrow: "→",
            ShortUpArrow: "↑",
            Sigma: "Σ",
            SmallCircle: "∘",
            Sopf: "𝕊",
            Sqrt: "√",
            Square: "□",
            SquareIntersection: "⊓",
            SquareSubset: "⊏",
            SquareSubsetEqual: "⊑",
            SquareSuperset: "⊐",
            SquareSupersetEqual: "⊒",
            SquareUnion: "⊔",
            Sscr: "𝒮",
            Star: "⋆",
            Sub: "⋐",
            Subset: "⋐",
            SubsetEqual: "⊆",
            Succeeds: "≻",
            SucceedsEqual: "⪰",
            SucceedsSlantEqual: "≽",
            SucceedsTilde: "≿",
            SuchThat: "∋",
            Sum: "∑",
            Sup: "⋑",
            Superset: "⊃",
            SupersetEqual: "⊇",
            Supset: "⋑",
            TRADE: "™",
            TSHcy: "Ћ",
            TScy: "Ц",
            Tab: "\t",
            Tau: "Τ",
            Tcaron: "Ť",
            Tcedil: "Ţ",
            Tcy: "Т",
            Tfr: "𝔗",
            Therefore: "∴",
            Theta: "Θ",
            ThickSpace: "  ",
            ThinSpace: " ",
            Tilde: "∼",
            TildeEqual: "≃",
            TildeFullEqual: "≅",
            TildeTilde: "≈",
            Topf: "𝕋",
            TripleDot: "⃛",
            Tscr: "𝒯",
            Tstrok: "Ŧ",
            Uarr: "↟",
            Uarrocir: "⥉",
            Ubrcy: "Ў",
            Ubreve: "Ŭ",
            Ucy: "У",
            Udblac: "Ű",
            Ufr: "𝔘",
            Umacr: "Ū",
            UnderBar: "_",
            UnderBrace: "⏟",
            UnderBracket: "⎵",
            UnderParenthesis: "⏝",
            Union: "⋃",
            UnionPlus: "⊎",
            Uogon: "Ų",
            Uopf: "𝕌",
            UpArrow: "↑",
            UpArrowBar: "⤒",
            UpArrowDownArrow: "⇅",
            UpDownArrow: "↕",
            UpEquilibrium: "⥮",
            UpTee: "⊥",
            UpTeeArrow: "↥",
            Uparrow: "⇑",
            Updownarrow: "⇕",
            UpperLeftArrow: "↖",
            UpperRightArrow: "↗",
            Upsi: "ϒ",
            Upsilon: "Υ",
            Uring: "Ů",
            Uscr: "𝒰",
            Utilde: "Ũ",
            VDash: "⊫",
            Vbar: "⫫",
            Vcy: "В",
            Vdash: "⊩",
            Vdashl: "⫦",
            Vee: "⋁",
            Verbar: "‖",
            Vert: "‖",
            VerticalBar: "∣",
            VerticalLine: "|",
            VerticalSeparator: "❘",
            VerticalTilde: "≀",
            VeryThinSpace: " ",
            Vfr: "𝔙",
            Vopf: "𝕍",
            Vscr: "𝒱",
            Vvdash: "⊪",
            Wcirc: "Ŵ",
            Wedge: "⋀",
            Wfr: "𝔚",
            Wopf: "𝕎",
            Wscr: "𝒲",
            Xfr: "𝔛",
            Xi: "Ξ",
            Xopf: "𝕏",
            Xscr: "𝒳",
            YAcy: "Я",
            YIcy: "Ї",
            YUcy: "Ю",
            Ycirc: "Ŷ",
            Ycy: "Ы",
            Yfr: "𝔜",
            Yopf: "𝕐",
            Yscr: "𝒴",
            Yuml: "Ÿ",
            ZHcy: "Ж",
            Zacute: "Ź",
            Zcaron: "Ž",
            Zcy: "З",
            Zdot: "Ż",
            ZeroWidthSpace: "​",
            Zeta: "Ζ",
            Zfr: "ℨ",
            Zopf: "ℤ",
            Zscr: "𝒵",
            abreve: "ă",
            ac: "∾",
            acE: "∾̳",
            acd: "∿",
            acy: "а",
            af: "⁡",
            afr: "𝔞",
            alefsym: "ℵ",
            aleph: "ℵ",
            alpha: "α",
            amacr: "ā",
            amalg: "⨿",
            and: "∧",
            andand: "⩕",
            andd: "⩜",
            andslope: "⩘",
            andv: "⩚",
            ang: "∠",
            ange: "⦤",
            angle: "∠",
            angmsd: "∡",
            angmsdaa: "⦨",
            angmsdab: "⦩",
            angmsdac: "⦪",
            angmsdad: "⦫",
            angmsdae: "⦬",
            angmsdaf: "⦭",
            angmsdag: "⦮",
            angmsdah: "⦯",
            angrt: "∟",
            angrtvb: "⊾",
            angrtvbd: "⦝",
            angsph: "∢",
            angst: "Å",
            angzarr: "⍼",
            aogon: "ą",
            aopf: "𝕒",
            ap: "≈",
            apE: "⩰",
            apacir: "⩯",
            ape: "≊",
            apid: "≋",
            apos: "'",
            approx: "≈",
            approxeq: "≊",
            ascr: "𝒶",
            ast: "*",
            asymp: "≈",
            asympeq: "≍",
            awconint: "∳",
            awint: "⨑",
            bNot: "⫭",
            backcong: "≌",
            backepsilon: "϶",
            backprime: "‵",
            backsim: "∽",
            backsimeq: "⋍",
            barvee: "⊽",
            barwed: "⌅",
            barwedge: "⌅",
            bbrk: "⎵",
            bbrktbrk: "⎶",
            bcong: "≌",
            bcy: "б",
            bdquo: "„",
            becaus: "∵",
            because: "∵",
            bemptyv: "⦰",
            bepsi: "϶",
            bernou: "ℬ",
            beta: "β",
            beth: "ℶ",
            between: "≬",
            bfr: "𝔟",
            bigcap: "⋂",
            bigcirc: "◯",
            bigcup: "⋃",
            bigodot: "⨀",
            bigoplus: "⨁",
            bigotimes: "⨂",
            bigsqcup: "⨆",
            bigstar: "★",
            bigtriangledown: "▽",
            bigtriangleup: "△",
            biguplus: "⨄",
            bigvee: "⋁",
            bigwedge: "⋀",
            bkarow: "⤍",
            blacklozenge: "⧫",
            blacksquare: "▪",
            blacktriangle: "▴",
            blacktriangledown: "▾",
            blacktriangleleft: "◂",
            blacktriangleright: "▸",
            blank: "␣",
            blk12: "▒",
            blk14: "░",
            blk34: "▓",
            block: "█",
            bne: "=⃥",
            bnequiv: "≡⃥",
            bnot: "⌐",
            bopf: "𝕓",
            bot: "⊥",
            bottom: "⊥",
            bowtie: "⋈",
            boxDL: "╗",
            boxDR: "╔",
            boxDl: "╖",
            boxDr: "╓",
            boxH: "═",
            boxHD: "╦",
            boxHU: "╩",
            boxHd: "╤",
            boxHu: "╧",
            boxUL: "╝",
            boxUR: "╚",
            boxUl: "╜",
            boxUr: "╙",
            boxV: "║",
            boxVH: "╬",
            boxVL: "╣",
            boxVR: "╠",
            boxVh: "╫",
            boxVl: "╢",
            boxVr: "╟",
            boxbox: "⧉",
            boxdL: "╕",
            boxdR: "╒",
            boxdl: "┐",
            boxdr: "┌",
            boxh: "─",
            boxhD: "╥",
            boxhU: "╨",
            boxhd: "┬",
            boxhu: "┴",
            boxminus: "⊟",
            boxplus: "⊞",
            boxtimes: "⊠",
            boxuL: "╛",
            boxuR: "╘",
            boxul: "┘",
            boxur: "└",
            boxv: "│",
            boxvH: "╪",
            boxvL: "╡",
            boxvR: "╞",
            boxvh: "┼",
            boxvl: "┤",
            boxvr: "├",
            bprime: "‵",
            breve: "˘",
            bscr: "𝒷",
            bsemi: "⁏",
            bsim: "∽",
            bsime: "⋍",
            bsol: "\\",
            bsolb: "⧅",
            bsolhsub: "⟈",
            bull: "•",
            bullet: "•",
            bump: "≎",
            bumpE: "⪮",
            bumpe: "≏",
            bumpeq: "≏",
            cacute: "ć",
            cap: "∩",
            capand: "⩄",
            capbrcup: "⩉",
            capcap: "⩋",
            capcup: "⩇",
            capdot: "⩀",
            caps: "∩︀",
            caret: "⁁",
            caron: "ˇ",
            ccaps: "⩍",
            ccaron: "č",
            ccirc: "ĉ",
            ccups: "⩌",
            ccupssm: "⩐",
            cdot: "ċ",
            cemptyv: "⦲",
            centerdot: "·",
            cfr: "𝔠",
            chcy: "ч",
            check: "✓",
            checkmark: "✓",
            chi: "χ",
            cir: "○",
            cirE: "⧃",
            circ: "ˆ",
            circeq: "≗",
            circlearrowleft: "↺",
            circlearrowright: "↻",
            circledR: "®",
            circledS: "Ⓢ",
            circledast: "⊛",
            circledcirc: "⊚",
            circleddash: "⊝",
            cire: "≗",
            cirfnint: "⨐",
            cirmid: "⫯",
            cirscir: "⧂",
            clubs: "♣",
            clubsuit: "♣",
            colon: ":",
            colone: "≔",
            coloneq: "≔",
            comma: ",",
            commat: "@",
            comp: "∁",
            compfn: "∘",
            complement: "∁",
            complexes: "ℂ",
            cong: "≅",
            congdot: "⩭",
            conint: "∮",
            copf: "𝕔",
            coprod: "∐",
            copysr: "℗",
            crarr: "↵",
            cross: "✗",
            cscr: "𝒸",
            csub: "⫏",
            csube: "⫑",
            csup: "⫐",
            csupe: "⫒",
            ctdot: "⋯",
            cudarrl: "⤸",
            cudarrr: "⤵",
            cuepr: "⋞",
            cuesc: "⋟",
            cularr: "↶",
            cularrp: "⤽",
            cup: "∪",
            cupbrcap: "⩈",
            cupcap: "⩆",
            cupcup: "⩊",
            cupdot: "⊍",
            cupor: "⩅",
            cups: "∪︀",
            curarr: "↷",
            curarrm: "⤼",
            curlyeqprec: "⋞",
            curlyeqsucc: "⋟",
            curlyvee: "⋎",
            curlywedge: "⋏",
            curvearrowleft: "↶",
            curvearrowright: "↷",
            cuvee: "⋎",
            cuwed: "⋏",
            cwconint: "∲",
            cwint: "∱",
            cylcty: "⌭",
            dArr: "⇓",
            dHar: "⥥",
            dagger: "†",
            daleth: "ℸ",
            darr: "↓",
            dash: "‐",
            dashv: "⊣",
            dbkarow: "⤏",
            dblac: "˝",
            dcaron: "ď",
            dcy: "д",
            dd: "ⅆ",
            ddagger: "‡",
            ddarr: "⇊",
            ddotseq: "⩷",
            delta: "δ",
            demptyv: "⦱",
            dfisht: "⥿",
            dfr: "𝔡",
            dharl: "⇃",
            dharr: "⇂",
            diam: "⋄",
            diamond: "⋄",
            diamondsuit: "♦",
            diams: "♦",
            die: "¨",
            digamma: "ϝ",
            disin: "⋲",
            div: "÷",
            divideontimes: "⋇",
            divonx: "⋇",
            djcy: "ђ",
            dlcorn: "⌞",
            dlcrop: "⌍",
            dollar: "$",
            dopf: "𝕕",
            dot: "˙",
            doteq: "≐",
            doteqdot: "≑",
            dotminus: "∸",
            dotplus: "∔",
            dotsquare: "⊡",
            doublebarwedge: "⌆",
            downarrow: "↓",
            downdownarrows: "⇊",
            downharpoonleft: "⇃",
            downharpoonright: "⇂",
            drbkarow: "⤐",
            drcorn: "⌟",
            drcrop: "⌌",
            dscr: "𝒹",
            dscy: "ѕ",
            dsol: "⧶",
            dstrok: "đ",
            dtdot: "⋱",
            dtri: "▿",
            dtrif: "▾",
            duarr: "⇵",
            duhar: "⥯",
            dwangle: "⦦",
            dzcy: "џ",
            dzigrarr: "⟿",
            eDDot: "⩷",
            eDot: "≑",
            easter: "⩮",
            ecaron: "ě",
            ecir: "≖",
            ecolon: "≕",
            ecy: "э",
            edot: "ė",
            ee: "ⅇ",
            efDot: "≒",
            efr: "𝔢",
            eg: "⪚",
            egs: "⪖",
            egsdot: "⪘",
            el: "⪙",
            elinters: "⏧",
            ell: "ℓ",
            els: "⪕",
            elsdot: "⪗",
            emacr: "ē",
            empty: "∅",
            emptyset: "∅",
            emptyv: "∅",
            emsp13: " ",
            emsp14: " ",
            emsp: " ",
            eng: "ŋ",
            ensp: " ",
            eogon: "ę",
            eopf: "𝕖",
            epar: "⋕",
            eparsl: "⧣",
            eplus: "⩱",
            epsi: "ε",
            epsilon: "ε",
            epsiv: "ϵ",
            eqcirc: "≖",
            eqcolon: "≕",
            eqsim: "≂",
            eqslantgtr: "⪖",
            eqslantless: "⪕",
            equals: "=",
            equest: "≟",
            equiv: "≡",
            equivDD: "⩸",
            eqvparsl: "⧥",
            erDot: "≓",
            erarr: "⥱",
            escr: "ℯ",
            esdot: "≐",
            esim: "≂",
            eta: "η",
            euro: "€",
            excl: "!",
            exist: "∃",
            expectation: "ℰ",
            exponentiale: "ⅇ",
            fallingdotseq: "≒",
            fcy: "ф",
            female: "♀",
            ffilig: "ﬃ",
            fflig: "ﬀ",
            ffllig: "ﬄ",
            ffr: "𝔣",
            filig: "ﬁ",
            fjlig: "fj",
            flat: "♭",
            fllig: "ﬂ",
            fltns: "▱",
            fnof: "ƒ",
            fopf: "𝕗",
            forall: "∀",
            fork: "⋔",
            forkv: "⫙",
            fpartint: "⨍",
            frac13: "⅓",
            frac15: "⅕",
            frac16: "⅙",
            frac18: "⅛",
            frac23: "⅔",
            frac25: "⅖",
            frac35: "⅗",
            frac38: "⅜",
            frac45: "⅘",
            frac56: "⅚",
            frac58: "⅝",
            frac78: "⅞",
            frasl: "⁄",
            frown: "⌢",
            fscr: "𝒻",
            gE: "≧",
            gEl: "⪌",
            gacute: "ǵ",
            gamma: "γ",
            gammad: "ϝ",
            gap: "⪆",
            gbreve: "ğ",
            gcirc: "ĝ",
            gcy: "г",
            gdot: "ġ",
            ge: "≥",
            gel: "⋛",
            geq: "≥",
            geqq: "≧",
            geqslant: "⩾",
            ges: "⩾",
            gescc: "⪩",
            gesdot: "⪀",
            gesdoto: "⪂",
            gesdotol: "⪄",
            gesl: "⋛︀",
            gesles: "⪔",
            gfr: "𝔤",
            gg: "≫",
            ggg: "⋙",
            gimel: "ℷ",
            gjcy: "ѓ",
            gl: "≷",
            glE: "⪒",
            gla: "⪥",
            glj: "⪤",
            gnE: "≩",
            gnap: "⪊",
            gnapprox: "⪊",
            gne: "⪈",
            gneq: "⪈",
            gneqq: "≩",
            gnsim: "⋧",
            gopf: "𝕘",
            grave: "`",
            gscr: "ℊ",
            gsim: "≳",
            gsime: "⪎",
            gsiml: "⪐",
            gtcc: "⪧",
            gtcir: "⩺",
            gtdot: "⋗",
            gtlPar: "⦕",
            gtquest: "⩼",
            gtrapprox: "⪆",
            gtrarr: "⥸",
            gtrdot: "⋗",
            gtreqless: "⋛",
            gtreqqless: "⪌",
            gtrless: "≷",
            gtrsim: "≳",
            gvertneqq: "≩︀",
            gvnE: "≩︀",
            hArr: "⇔",
            hairsp: " ",
            half: "½",
            hamilt: "ℋ",
            hardcy: "ъ",
            harr: "↔",
            harrcir: "⥈",
            harrw: "↭",
            hbar: "ℏ",
            hcirc: "ĥ",
            hearts: "♥",
            heartsuit: "♥",
            hellip: "…",
            hercon: "⊹",
            hfr: "𝔥",
            hksearow: "⤥",
            hkswarow: "⤦",
            hoarr: "⇿",
            homtht: "∻",
            hookleftarrow: "↩",
            hookrightarrow: "↪",
            hopf: "𝕙",
            horbar: "―",
            hscr: "𝒽",
            hslash: "ℏ",
            hstrok: "ħ",
            hybull: "⁃",
            hyphen: "‐",
            ic: "⁣",
            icy: "и",
            iecy: "е",
            iff: "⇔",
            ifr: "𝔦",
            ii: "ⅈ",
            iiiint: "⨌",
            iiint: "∭",
            iinfin: "⧜",
            iiota: "℩",
            ijlig: "ĳ",
            imacr: "ī",
            image: "ℑ",
            imagline: "ℐ",
            imagpart: "ℑ",
            imath: "ı",
            imof: "⊷",
            imped: "Ƶ",
            in: "∈",
            incare: "℅",
            infin: "∞",
            infintie: "⧝",
            inodot: "ı",
            int: "∫",
            intcal: "⊺",
            integers: "ℤ",
            intercal: "⊺",
            intlarhk: "⨗",
            intprod: "⨼",
            iocy: "ё",
            iogon: "į",
            iopf: "𝕚",
            iota: "ι",
            iprod: "⨼",
            iscr: "𝒾",
            isin: "∈",
            isinE: "⋹",
            isindot: "⋵",
            isins: "⋴",
            isinsv: "⋳",
            isinv: "∈",
            it: "⁢",
            itilde: "ĩ",
            iukcy: "і",
            jcirc: "ĵ",
            jcy: "й",
            jfr: "𝔧",
            jmath: "ȷ",
            jopf: "𝕛",
            jscr: "𝒿",
            jsercy: "ј",
            jukcy: "є",
            kappa: "κ",
            kappav: "ϰ",
            kcedil: "ķ",
            kcy: "к",
            kfr: "𝔨",
            kgreen: "ĸ",
            khcy: "х",
            kjcy: "ќ",
            kopf: "𝕜",
            kscr: "𝓀",
            lAarr: "⇚",
            lArr: "⇐",
            lAtail: "⤛",
            lBarr: "⤎",
            lE: "≦",
            lEg: "⪋",
            lHar: "⥢",
            lacute: "ĺ",
            laemptyv: "⦴",
            lagran: "ℒ",
            lambda: "λ",
            lang: "⟨",
            langd: "⦑",
            langle: "⟨",
            lap: "⪅",
            larr: "←",
            larrb: "⇤",
            larrbfs: "⤟",
            larrfs: "⤝",
            larrhk: "↩",
            larrlp: "↫",
            larrpl: "⤹",
            larrsim: "⥳",
            larrtl: "↢",
            lat: "⪫",
            latail: "⤙",
            late: "⪭",
            lates: "⪭︀",
            lbarr: "⤌",
            lbbrk: "❲",
            lbrace: "{",
            lbrack: "[",
            lbrke: "⦋",
            lbrksld: "⦏",
            lbrkslu: "⦍",
            lcaron: "ľ",
            lcedil: "ļ",
            lceil: "⌈",
            lcub: "{",
            lcy: "л",
            ldca: "⤶",
            ldquo: "“",
            ldquor: "„",
            ldrdhar: "⥧",
            ldrushar: "⥋",
            ldsh: "↲",
            le: "≤",
            leftarrow: "←",
            leftarrowtail: "↢",
            leftharpoondown: "↽",
            leftharpoonup: "↼",
            leftleftarrows: "⇇",
            leftrightarrow: "↔",
            leftrightarrows: "⇆",
            leftrightharpoons: "⇋",
            leftrightsquigarrow: "↭",
            leftthreetimes: "⋋",
            leg: "⋚",
            leq: "≤",
            leqq: "≦",
            leqslant: "⩽",
            les: "⩽",
            lescc: "⪨",
            lesdot: "⩿",
            lesdoto: "⪁",
            lesdotor: "⪃",
            lesg: "⋚︀",
            lesges: "⪓",
            lessapprox: "⪅",
            lessdot: "⋖",
            lesseqgtr: "⋚",
            lesseqqgtr: "⪋",
            lessgtr: "≶",
            lesssim: "≲",
            lfisht: "⥼",
            lfloor: "⌊",
            lfr: "𝔩",
            lg: "≶",
            lgE: "⪑",
            lhard: "↽",
            lharu: "↼",
            lharul: "⥪",
            lhblk: "▄",
            ljcy: "љ",
            ll: "≪",
            llarr: "⇇",
            llcorner: "⌞",
            llhard: "⥫",
            lltri: "◺",
            lmidot: "ŀ",
            lmoust: "⎰",
            lmoustache: "⎰",
            lnE: "≨",
            lnap: "⪉",
            lnapprox: "⪉",
            lne: "⪇",
            lneq: "⪇",
            lneqq: "≨",
            lnsim: "⋦",
            loang: "⟬",
            loarr: "⇽",
            lobrk: "⟦",
            longleftarrow: "⟵",
            longleftrightarrow: "⟷",
            longmapsto: "⟼",
            longrightarrow: "⟶",
            looparrowleft: "↫",
            looparrowright: "↬",
            lopar: "⦅",
            lopf: "𝕝",
            loplus: "⨭",
            lotimes: "⨴",
            lowast: "∗",
            lowbar: "_",
            loz: "◊",
            lozenge: "◊",
            lozf: "⧫",
            lpar: "(",
            lparlt: "⦓",
            lrarr: "⇆",
            lrcorner: "⌟",
            lrhar: "⇋",
            lrhard: "⥭",
            lrm: "‎",
            lrtri: "⊿",
            lsaquo: "‹",
            lscr: "𝓁",
            lsh: "↰",
            lsim: "≲",
            lsime: "⪍",
            lsimg: "⪏",
            lsqb: "[",
            lsquo: "‘",
            lsquor: "‚",
            lstrok: "ł",
            ltcc: "⪦",
            ltcir: "⩹",
            ltdot: "⋖",
            lthree: "⋋",
            ltimes: "⋉",
            ltlarr: "⥶",
            ltquest: "⩻",
            ltrPar: "⦖",
            ltri: "◃",
            ltrie: "⊴",
            ltrif: "◂",
            lurdshar: "⥊",
            luruhar: "⥦",
            lvertneqq: "≨︀",
            lvnE: "≨︀",
            mDDot: "∺",
            male: "♂",
            malt: "✠",
            maltese: "✠",
            map: "↦",
            mapsto: "↦",
            mapstodown: "↧",
            mapstoleft: "↤",
            mapstoup: "↥",
            marker: "▮",
            mcomma: "⨩",
            mcy: "м",
            mdash: "—",
            measuredangle: "∡",
            mfr: "𝔪",
            mho: "℧",
            mid: "∣",
            midast: "*",
            midcir: "⫰",
            minus: "−",
            minusb: "⊟",
            minusd: "∸",
            minusdu: "⨪",
            mlcp: "⫛",
            mldr: "…",
            mnplus: "∓",
            models: "⊧",
            mopf: "𝕞",
            mp: "∓",
            mscr: "𝓂",
            mstpos: "∾",
            mu: "μ",
            multimap: "⊸",
            mumap: "⊸",
            nGg: "⋙̸",
            nGt: "≫⃒",
            nGtv: "≫̸",
            nLeftarrow: "⇍",
            nLeftrightarrow: "⇎",
            nLl: "⋘̸",
            nLt: "≪⃒",
            nLtv: "≪̸",
            nRightarrow: "⇏",
            nVDash: "⊯",
            nVdash: "⊮",
            nabla: "∇",
            nacute: "ń",
            nang: "∠⃒",
            nap: "≉",
            napE: "⩰̸",
            napid: "≋̸",
            napos: "ŉ",
            napprox: "≉",
            natur: "♮",
            natural: "♮",
            naturals: "ℕ",
            nbump: "≎̸",
            nbumpe: "≏̸",
            ncap: "⩃",
            ncaron: "ň",
            ncedil: "ņ",
            ncong: "≇",
            ncongdot: "⩭̸",
            ncup: "⩂",
            ncy: "н",
            ndash: "–",
            ne: "≠",
            neArr: "⇗",
            nearhk: "⤤",
            nearr: "↗",
            nearrow: "↗",
            nedot: "≐̸",
            nequiv: "≢",
            nesear: "⤨",
            nesim: "≂̸",
            nexist: "∄",
            nexists: "∄",
            nfr: "𝔫",
            ngE: "≧̸",
            nge: "≱",
            ngeq: "≱",
            ngeqq: "≧̸",
            ngeqslant: "⩾̸",
            nges: "⩾̸",
            ngsim: "≵",
            ngt: "≯",
            ngtr: "≯",
            nhArr: "⇎",
            nharr: "↮",
            nhpar: "⫲",
            ni: "∋",
            nis: "⋼",
            nisd: "⋺",
            niv: "∋",
            njcy: "њ",
            nlArr: "⇍",
            nlE: "≦̸",
            nlarr: "↚",
            nldr: "‥",
            nle: "≰",
            nleftarrow: "↚",
            nleftrightarrow: "↮",
            nleq: "≰",
            nleqq: "≦̸",
            nleqslant: "⩽̸",
            nles: "⩽̸",
            nless: "≮",
            nlsim: "≴",
            nlt: "≮",
            nltri: "⋪",
            nltrie: "⋬",
            nmid: "∤",
            nopf: "𝕟",
            notin: "∉",
            notinE: "⋹̸",
            notindot: "⋵̸",
            notinva: "∉",
            notinvb: "⋷",
            notinvc: "⋶",
            notni: "∌",
            notniva: "∌",
            notnivb: "⋾",
            notnivc: "⋽",
            npar: "∦",
            nparallel: "∦",
            nparsl: "⫽⃥",
            npart: "∂̸",
            npolint: "⨔",
            npr: "⊀",
            nprcue: "⋠",
            npre: "⪯̸",
            nprec: "⊀",
            npreceq: "⪯̸",
            nrArr: "⇏",
            nrarr: "↛",
            nrarrc: "⤳̸",
            nrarrw: "↝̸",
            nrightarrow: "↛",
            nrtri: "⋫",
            nrtrie: "⋭",
            nsc: "⊁",
            nsccue: "⋡",
            nsce: "⪰̸",
            nscr: "𝓃",
            nshortmid: "∤",
            nshortparallel: "∦",
            nsim: "≁",
            nsime: "≄",
            nsimeq: "≄",
            nsmid: "∤",
            nspar: "∦",
            nsqsube: "⋢",
            nsqsupe: "⋣",
            nsub: "⊄",
            nsubE: "⫅̸",
            nsube: "⊈",
            nsubset: "⊂⃒",
            nsubseteq: "⊈",
            nsubseteqq: "⫅̸",
            nsucc: "⊁",
            nsucceq: "⪰̸",
            nsup: "⊅",
            nsupE: "⫆̸",
            nsupe: "⊉",
            nsupset: "⊃⃒",
            nsupseteq: "⊉",
            nsupseteqq: "⫆̸",
            ntgl: "≹",
            ntlg: "≸",
            ntriangleleft: "⋪",
            ntrianglelefteq: "⋬",
            ntriangleright: "⋫",
            ntrianglerighteq: "⋭",
            nu: "ν",
            num: "#",
            numero: "№",
            numsp: " ",
            nvDash: "⊭",
            nvHarr: "⤄",
            nvap: "≍⃒",
            nvdash: "⊬",
            nvge: "≥⃒",
            nvgt: ">⃒",
            nvinfin: "⧞",
            nvlArr: "⤂",
            nvle: "≤⃒",
            nvlt: "<⃒",
            nvltrie: "⊴⃒",
            nvrArr: "⤃",
            nvrtrie: "⊵⃒",
            nvsim: "∼⃒",
            nwArr: "⇖",
            nwarhk: "⤣",
            nwarr: "↖",
            nwarrow: "↖",
            nwnear: "⤧",
            oS: "Ⓢ",
            oast: "⊛",
            ocir: "⊚",
            ocy: "о",
            odash: "⊝",
            odblac: "ő",
            odiv: "⨸",
            odot: "⊙",
            odsold: "⦼",
            oelig: "œ",
            ofcir: "⦿",
            ofr: "𝔬",
            ogon: "˛",
            ogt: "⧁",
            ohbar: "⦵",
            ohm: "Ω",
            oint: "∮",
            olarr: "↺",
            olcir: "⦾",
            olcross: "⦻",
            oline: "‾",
            olt: "⧀",
            omacr: "ō",
            omega: "ω",
            omicron: "ο",
            omid: "⦶",
            ominus: "⊖",
            oopf: "𝕠",
            opar: "⦷",
            operp: "⦹",
            oplus: "⊕",
            or: "∨",
            orarr: "↻",
            ord: "⩝",
            order: "ℴ",
            orderof: "ℴ",
            origof: "⊶",
            oror: "⩖",
            orslope: "⩗",
            orv: "⩛",
            oscr: "ℴ",
            osol: "⊘",
            otimes: "⊗",
            otimesas: "⨶",
            ovbar: "⌽",
            par: "∥",
            parallel: "∥",
            parsim: "⫳",
            parsl: "⫽",
            part: "∂",
            pcy: "п",
            percnt: "%",
            period: ".",
            permil: "‰",
            perp: "⊥",
            pertenk: "‱",
            pfr: "𝔭",
            phi: "φ",
            phiv: "ϕ",
            phmmat: "ℳ",
            phone: "☎",
            pi: "π",
            pitchfork: "⋔",
            piv: "ϖ",
            planck: "ℏ",
            planckh: "ℎ",
            plankv: "ℏ",
            plus: "+",
            plusacir: "⨣",
            plusb: "⊞",
            pluscir: "⨢",
            plusdo: "∔",
            plusdu: "⨥",
            pluse: "⩲",
            plussim: "⨦",
            plustwo: "⨧",
            pm: "±",
            pointint: "⨕",
            popf: "𝕡",
            pr: "≺",
            prE: "⪳",
            prap: "⪷",
            prcue: "≼",
            pre: "⪯",
            prec: "≺",
            precapprox: "⪷",
            preccurlyeq: "≼",
            preceq: "⪯",
            precnapprox: "⪹",
            precneqq: "⪵",
            precnsim: "⋨",
            precsim: "≾",
            prime: "′",
            primes: "ℙ",
            prnE: "⪵",
            prnap: "⪹",
            prnsim: "⋨",
            prod: "∏",
            profalar: "⌮",
            profline: "⌒",
            profsurf: "⌓",
            prop: "∝",
            propto: "∝",
            prsim: "≾",
            prurel: "⊰",
            pscr: "𝓅",
            psi: "ψ",
            puncsp: " ",
            qfr: "𝔮",
            qint: "⨌",
            qopf: "𝕢",
            qprime: "⁗",
            qscr: "𝓆",
            quaternions: "ℍ",
            quatint: "⨖",
            quest: "?",
            questeq: "≟",
            rAarr: "⇛",
            rArr: "⇒",
            rAtail: "⤜",
            rBarr: "⤏",
            rHar: "⥤",
            race: "∽̱",
            racute: "ŕ",
            radic: "√",
            raemptyv: "⦳",
            rang: "⟩",
            rangd: "⦒",
            range: "⦥",
            rangle: "⟩",
            rarr: "→",
            rarrap: "⥵",
            rarrb: "⇥",
            rarrbfs: "⤠",
            rarrc: "⤳",
            rarrfs: "⤞",
            rarrhk: "↪",
            rarrlp: "↬",
            rarrpl: "⥅",
            rarrsim: "⥴",
            rarrtl: "↣",
            rarrw: "↝",
            ratail: "⤚",
            ratio: "∶",
            rationals: "ℚ",
            rbarr: "⤍",
            rbbrk: "❳",
            rbrace: "}",
            rbrack: "]",
            rbrke: "⦌",
            rbrksld: "⦎",
            rbrkslu: "⦐",
            rcaron: "ř",
            rcedil: "ŗ",
            rceil: "⌉",
            rcub: "}",
            rcy: "р",
            rdca: "⤷",
            rdldhar: "⥩",
            rdquo: "”",
            rdquor: "”",
            rdsh: "↳",
            real: "ℜ",
            realine: "ℛ",
            realpart: "ℜ",
            reals: "ℝ",
            rect: "▭",
            rfisht: "⥽",
            rfloor: "⌋",
            rfr: "𝔯",
            rhard: "⇁",
            rharu: "⇀",
            rharul: "⥬",
            rho: "ρ",
            rhov: "ϱ",
            rightarrow: "→",
            rightarrowtail: "↣",
            rightharpoondown: "⇁",
            rightharpoonup: "⇀",
            rightleftarrows: "⇄",
            rightleftharpoons: "⇌",
            rightrightarrows: "⇉",
            rightsquigarrow: "↝",
            rightthreetimes: "⋌",
            ring: "˚",
            risingdotseq: "≓",
            rlarr: "⇄",
            rlhar: "⇌",
            rlm: "‏",
            rmoust: "⎱",
            rmoustache: "⎱",
            rnmid: "⫮",
            roang: "⟭",
            roarr: "⇾",
            robrk: "⟧",
            ropar: "⦆",
            ropf: "𝕣",
            roplus: "⨮",
            rotimes: "⨵",
            rpar: ")",
            rpargt: "⦔",
            rppolint: "⨒",
            rrarr: "⇉",
            rsaquo: "›",
            rscr: "𝓇",
            rsh: "↱",
            rsqb: "]",
            rsquo: "’",
            rsquor: "’",
            rthree: "⋌",
            rtimes: "⋊",
            rtri: "▹",
            rtrie: "⊵",
            rtrif: "▸",
            rtriltri: "⧎",
            ruluhar: "⥨",
            rx: "℞",
            sacute: "ś",
            sbquo: "‚",
            sc: "≻",
            scE: "⪴",
            scap: "⪸",
            scaron: "š",
            sccue: "≽",
            sce: "⪰",
            scedil: "ş",
            scirc: "ŝ",
            scnE: "⪶",
            scnap: "⪺",
            scnsim: "⋩",
            scpolint: "⨓",
            scsim: "≿",
            scy: "с",
            sdot: "⋅",
            sdotb: "⊡",
            sdote: "⩦",
            seArr: "⇘",
            searhk: "⤥",
            searr: "↘",
            searrow: "↘",
            semi: ";",
            seswar: "⤩",
            setminus: "∖",
            setmn: "∖",
            sext: "✶",
            sfr: "𝔰",
            sfrown: "⌢",
            sharp: "♯",
            shchcy: "щ",
            shcy: "ш",
            shortmid: "∣",
            shortparallel: "∥",
            sigma: "σ",
            sigmaf: "ς",
            sigmav: "ς",
            sim: "∼",
            simdot: "⩪",
            sime: "≃",
            simeq: "≃",
            simg: "⪞",
            simgE: "⪠",
            siml: "⪝",
            simlE: "⪟",
            simne: "≆",
            simplus: "⨤",
            simrarr: "⥲",
            slarr: "←",
            smallsetminus: "∖",
            smashp: "⨳",
            smeparsl: "⧤",
            smid: "∣",
            smile: "⌣",
            smt: "⪪",
            smte: "⪬",
            smtes: "⪬︀",
            softcy: "ь",
            sol: "/",
            solb: "⧄",
            solbar: "⌿",
            sopf: "𝕤",
            spades: "♠",
            spadesuit: "♠",
            spar: "∥",
            sqcap: "⊓",
            sqcaps: "⊓︀",
            sqcup: "⊔",
            sqcups: "⊔︀",
            sqsub: "⊏",
            sqsube: "⊑",
            sqsubset: "⊏",
            sqsubseteq: "⊑",
            sqsup: "⊐",
            sqsupe: "⊒",
            sqsupset: "⊐",
            sqsupseteq: "⊒",
            squ: "□",
            square: "□",
            squarf: "▪",
            squf: "▪",
            srarr: "→",
            sscr: "𝓈",
            ssetmn: "∖",
            ssmile: "⌣",
            sstarf: "⋆",
            star: "☆",
            starf: "★",
            straightepsilon: "ϵ",
            straightphi: "ϕ",
            strns: "¯",
            sub: "⊂",
            subE: "⫅",
            subdot: "⪽",
            sube: "⊆",
            subedot: "⫃",
            submult: "⫁",
            subnE: "⫋",
            subne: "⊊",
            subplus: "⪿",
            subrarr: "⥹",
            subset: "⊂",
            subseteq: "⊆",
            subseteqq: "⫅",
            subsetneq: "⊊",
            subsetneqq: "⫋",
            subsim: "⫇",
            subsub: "⫕",
            subsup: "⫓",
            succ: "≻",
            succapprox: "⪸",
            succcurlyeq: "≽",
            succeq: "⪰",
            succnapprox: "⪺",
            succneqq: "⪶",
            succnsim: "⋩",
            succsim: "≿",
            sum: "∑",
            sung: "♪",
            sup: "⊃",
            supE: "⫆",
            supdot: "⪾",
            supdsub: "⫘",
            supe: "⊇",
            supedot: "⫄",
            suphsol: "⟉",
            suphsub: "⫗",
            suplarr: "⥻",
            supmult: "⫂",
            supnE: "⫌",
            supne: "⊋",
            supplus: "⫀",
            supset: "⊃",
            supseteq: "⊇",
            supseteqq: "⫆",
            supsetneq: "⊋",
            supsetneqq: "⫌",
            supsim: "⫈",
            supsub: "⫔",
            supsup: "⫖",
            swArr: "⇙",
            swarhk: "⤦",
            swarr: "↙",
            swarrow: "↙",
            swnwar: "⤪",
            target: "⌖",
            tau: "τ",
            tbrk: "⎴",
            tcaron: "ť",
            tcedil: "ţ",
            tcy: "т",
            tdot: "⃛",
            telrec: "⌕",
            tfr: "𝔱",
            there4: "∴",
            therefore: "∴",
            theta: "θ",
            thetasym: "ϑ",
            thetav: "ϑ",
            thickapprox: "≈",
            thicksim: "∼",
            thinsp: " ",
            thkap: "≈",
            thksim: "∼",
            tilde: "˜",
            timesb: "⊠",
            timesbar: "⨱",
            timesd: "⨰",
            tint: "∭",
            toea: "⤨",
            top: "⊤",
            topbot: "⌶",
            topcir: "⫱",
            topf: "𝕥",
            topfork: "⫚",
            tosa: "⤩",
            tprime: "‴",
            trade: "™",
            triangle: "▵",
            triangledown: "▿",
            triangleleft: "◃",
            trianglelefteq: "⊴",
            triangleq: "≜",
            triangleright: "▹",
            trianglerighteq: "⊵",
            tridot: "◬",
            trie: "≜",
            triminus: "⨺",
            triplus: "⨹",
            trisb: "⧍",
            tritime: "⨻",
            trpezium: "⏢",
            tscr: "𝓉",
            tscy: "ц",
            tshcy: "ћ",
            tstrok: "ŧ",
            twixt: "≬",
            twoheadleftarrow: "↞",
            twoheadrightarrow: "↠",
            uArr: "⇑",
            uHar: "⥣",
            uarr: "↑",
            ubrcy: "ў",
            ubreve: "ŭ",
            ucy: "у",
            udarr: "⇅",
            udblac: "ű",
            udhar: "⥮",
            ufisht: "⥾",
            ufr: "𝔲",
            uharl: "↿",
            uharr: "↾",
            uhblk: "▀",
            ulcorn: "⌜",
            ulcorner: "⌜",
            ulcrop: "⌏",
            ultri: "◸",
            umacr: "ū",
            uogon: "ų",
            uopf: "𝕦",
            uparrow: "↑",
            updownarrow: "↕",
            upharpoonleft: "↿",
            upharpoonright: "↾",
            uplus: "⊎",
            upsi: "υ",
            upsih: "ϒ",
            upsilon: "υ",
            upuparrows: "⇈",
            urcorn: "⌝",
            urcorner: "⌝",
            urcrop: "⌎",
            uring: "ů",
            urtri: "◹",
            uscr: "𝓊",
            utdot: "⋰",
            utilde: "ũ",
            utri: "▵",
            utrif: "▴",
            uuarr: "⇈",
            uwangle: "⦧",
            vArr: "⇕",
            vBar: "⫨",
            vBarv: "⫩",
            vDash: "⊨",
            vangrt: "⦜",
            varepsilon: "ϵ",
            varkappa: "ϰ",
            varnothing: "∅",
            varphi: "ϕ",
            varpi: "ϖ",
            varpropto: "∝",
            varr: "↕",
            varrho: "ϱ",
            varsigma: "ς",
            varsubsetneq: "⊊︀",
            varsubsetneqq: "⫋︀",
            varsupsetneq: "⊋︀",
            varsupsetneqq: "⫌︀",
            vartheta: "ϑ",
            vartriangleleft: "⊲",
            vartriangleright: "⊳",
            vcy: "в",
            vdash: "⊢",
            vee: "∨",
            veebar: "⊻",
            veeeq: "≚",
            vellip: "⋮",
            verbar: "|",
            vert: "|",
            vfr: "𝔳",
            vltri: "⊲",
            vnsub: "⊂⃒",
            vnsup: "⊃⃒",
            vopf: "𝕧",
            vprop: "∝",
            vrtri: "⊳",
            vscr: "𝓋",
            vsubnE: "⫋︀",
            vsubne: "⊊︀",
            vsupnE: "⫌︀",
            vsupne: "⊋︀",
            vzigzag: "⦚",
            wcirc: "ŵ",
            wedbar: "⩟",
            wedge: "∧",
            wedgeq: "≙",
            weierp: "℘",
            wfr: "𝔴",
            wopf: "𝕨",
            wp: "℘",
            wr: "≀",
            wreath: "≀",
            wscr: "𝓌",
            xcap: "⋂",
            xcirc: "◯",
            xcup: "⋃",
            xdtri: "▽",
            xfr: "𝔵",
            xhArr: "⟺",
            xharr: "⟷",
            xi: "ξ",
            xlArr: "⟸",
            xlarr: "⟵",
            xmap: "⟼",
            xnis: "⋻",
            xodot: "⨀",
            xopf: "𝕩",
            xoplus: "⨁",
            xotime: "⨂",
            xrArr: "⟹",
            xrarr: "⟶",
            xscr: "𝓍",
            xsqcup: "⨆",
            xuplus: "⨄",
            xutri: "△",
            xvee: "⋁",
            xwedge: "⋀",
            yacy: "я",
            ycirc: "ŷ",
            ycy: "ы",
            yfr: "𝔶",
            yicy: "ї",
            yopf: "𝕪",
            yscr: "𝓎",
            yucy: "ю",
            zacute: "ź",
            zcaron: "ž",
            zcy: "з",
            zdot: "ż",
            zeetrf: "ℨ",
            zeta: "ζ",
            zfr: "𝔷",
            zhcy: "ж",
            zigrarr: "⇝",
            zopf: "𝕫",
            zscr: "𝓏",
            zwj: "‍",
            zwnj: "‌"
        }
          , o = {}
          , i = !1;
        function l() {
            i || (Object.keys(n).forEach((function(e) {
                o[e + ";"] = n[e],
                o[e] = n[e]
            }
            )),
            Object.keys(r).forEach((function(e) {
                o[e + ";"] = r[e]
            }
            )),
            i = !0)
        }
    }
    ,
    147918: (e,t,a)=>{
        "use strict";
        a(681751),
        a(706738),
        a(190877)
    }
    ,
    962557: (e,t,a)=>{
        "use strict";
        a.d(t, {
            canUseDOM: ()=>c.canUseDOM,
            classNames: ()=>n.classNames,
            detectIOS: ()=>u.detectIOS,
            hasHover: ()=>s.hasHover,
            hasMouse: ()=>s.hasMouse,
            hasReactNode: ()=>i.hasReactNode,
            isFunction: ()=>l.isFunction,
            isPrimitiveReactNode: ()=>i.isPrimitiveReactNode,
            noop: ()=>r.noop,
            querystring: ()=>o.querystring
        });
        var n = a(191173)
          , r = a(672124)
          , o = (a(907387),
        a(147918),
        a(962638))
          , i = a(682099)
          , l = a(886638)
          , s = (a(368408),
        a(186154))
          , c = a(42566)
          , u = a(303741);
        a(804584)
    }
    ,
    706738: (e,t,a)=>{
        "use strict";
        a.d(t, {
            fromCodePoint: ()=>r,
            getCodePointAt: ()=>i,
            numericUnicodeMap: ()=>n
        });
        var n = {
            0: 65533,
            128: 8364,
            130: 8218,
            131: 402,
            132: 8222,
            133: 8230,
            134: 8224,
            135: 8225,
            136: 710,
            137: 8240,
            138: 352,
            139: 8249,
            140: 338,
            142: 381,
            145: 8216,
            146: 8217,
            147: 8220,
            148: 8221,
            149: 8226,
            150: 8211,
            151: 8212,
            152: 732,
            153: 8482,
            154: 353,
            155: 8250,
            156: 339,
            158: 382,
            159: 376
        }
          , r = function() {
            return String.fromCodePoint || function(e) {
                return String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296, (e - 65536) % 1024 + 56320)
            }
        }()
          , o = function() {
            return String.prototype.codePointAt
        }()
          , i = function() {
            return o ? function(e, t) {
                return e.codePointAt(t)
            }
            : function(e, t) {
                return 1024 * (e.charCodeAt(t) - 55296) + e.charCodeAt(t + 1) - 56320 + 65536
            }
        }()
    }
    ,
    681751: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Replacer: ()=>l
        });
        var n = a(148564)
          , r = a(302267)
          , o = a(975766)
          , i = a(288454)
          , l = function() {
            function e(t) {
                (0,
                n._)(this, e),
                (0,
                o._)(this, "regexp", void 0),
                (0,
                o._)(this, "map", void 0),
                this.map = t
            }
            return (0,
            r._)(e, [{
                key: "build",
                value: function() {
                    if (!this.regexp) {
                        var e = Object.keys(this.map).map(i.escapeRegExp).sort((function(e, t) {
                            return t.length - e.length
                        }
                        ))
                          , t = "(?:".concat(e.join("|"), ")");
                        this.regexp = new RegExp(t,"g")
                    }
                }
            }, {
                key: "replace",
                value: function(e) {
                    var t = this;
                    return e ? (this.build(),
                    e.replace(this.regexp, (function(e) {
                        return t.map[e]
                    }
                    ))) : ""
                }
            }]),
            e
        }()
    }
    ,
    93813: (e,t,a)=>{
        "use strict";
        function n(e) {
            return e >= 10 ? String(e) : "0" + String(e)
        }
        a.d(t, {
            leadingZero: ()=>n
        })
    }
    ,
    962638: (e,t,a)=>{
        "use strict";
        a.d(t, {
            querystring: ()=>r
        });
        var n = a(772253);
        var r = {
            parse: function(e) {
                if ("string" != typeof e)
                    return {};
                if (!(e = e.trim().replace(/^[?#&]/, "")))
                    return {};
                var t = /\?(.+)$/gi.exec(e);
                return (t ? t[1] : e).split("&").reduce((function(e, t) {
                    var a = t.split("=");
                    return a[1] && (e[a[0]] = decodeURIComponent(a[1])),
                    e
                }
                ), {})
            },
            stringify: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ("object" != typeof e || null === e)
                    return "";
                t = (0,
                n._)({
                    encode: !0
                }, t);
                var a = function(e) {
                    return t.encode ? encodeURIComponent(e) : String(e)
                };
                return Object.keys(e).reduce((function(n, r) {
                    var o = e[r];
                    return void 0 === o ? n : null === o ? (t.skipNull || n.push([a(r), ""].join("=")),
                    n) : Array.isArray(o) ? (o.map((function(e) {
                        n.push("".concat(a(r), "[]=").concat(a(e)))
                    }
                    )).join(),
                    n) : (n.push([a(r), a(o)].join("=")),
                    n)
                }
                ), []).join("&")
            }
        }
    }
    ,
    682099: (e,t,a)=>{
        "use strict";
        function n(e) {
            return void 0 !== e && !1 !== e && null !== e && "" !== e
        }
        function r(e) {
            return "string" == typeof e || "number" == typeof e
        }
        a.d(t, {
            hasReactNode: ()=>n,
            isPrimitiveReactNode: ()=>r
        })
    }
    ,
    288454: (e,t,a)=>{
        "use strict";
        function n(e) {
            return e ? e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1") : ""
        }
        a.d(t, {
            escapeRegExp: ()=>n
        })
    }
    ,
    368408: (e,t,a)=>{
        "use strict";
        a(148564),
        a(302267),
        a(975766),
        a(926372)
    }
    ,
    804584: (e,t,a)=>{
        "use strict";
        a(332092)
    }
    ,
    332092: (e,t,a)=>{
        "use strict";
        a(148564),
        a(302267),
        a(975766),
        a(681751)
    }
    ,
    886638: (e,t,a)=>{
        "use strict";
        function n(e) {
            return "function" == typeof e
        }
        a.d(t, {
            isFunction: ()=>n
        })
    }
}]);
try {
    stManager.done("dist/vkui.016ac0394e650b7dd3dc.js")
} catch (e) {}
