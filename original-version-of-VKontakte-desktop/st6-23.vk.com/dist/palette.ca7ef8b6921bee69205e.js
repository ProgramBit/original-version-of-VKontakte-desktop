"use strict";
(self.webpackChunkvk = self.webpackChunkvk || []).push([[24509], {
    533262: (e,t,s)=>{
        s.d(t, {
            default: ()=>d
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(45697)
          , r = s.n(a)
          , l = s(659397);
        const c = e=>{
            var {children: t, className: s} = e
              , a = (0,
            o._)(e, ["children", "className"]);
            const r = (0,
            l.classNames)("ActivityIndicator", s);
            return (0,
            n.jsx)("span", (0,
            i._)({}, a, {
                className: r,
                children: t
            }))
        }
        ;
        c.propTypes = {
            className: r().string,
            children: r().node
        };
        const d = c
    }
    ,
    532159: (e,t,s)=>{
        s.d(t, {
            Alert: ()=>c,
            AlertType: ()=>i
        });
        var i, o = s(785893), n = s(659397), a = s(132933), r = s(462704), l = s(427499);
        !function(e) {
            e.Done = "done",
            e.Wrong = "wrong",
            e.Warning = "warning",
            e.Info = "info"
        }(i || (i = {}));
        const c = ({type: e="info", children: t, icon: s=null, className: i})=>{
            if (!s)
                switch (e) {
                case "done":
                    s = (0,
                    o.jsx)(a.Icon28CheckCircleOutline, {
                        className: "Alert__icon"
                    });
                    break;
                case "wrong":
                    s = (0,
                    o.jsx)(r.Icon28ErrorCircleOutline, {
                        className: "Alert__icon"
                    });
                    break;
                case "warning":
                    s = (0,
                    o.jsx)(l.Icon28WarningTriangleOutline, {
                        className: "Alert__icon"
                    })
                }
            let c, d = null;
            switch (e) {
            case "done":
            case "info":
                d = "status",
                c = "polite";
                break;
            case "wrong":
            case "warning":
                d = "alert",
                c = "assertive"
            }
            return (0,
            o.jsxs)("div", {
                className: (0,
                n.classNames)("Alert", `Alert--${e}`, i),
                role: d,
                "aria-live": c,
                children: [s, (0,
                o.jsx)("div", {
                    className: "Alert__content",
                    children: t
                })]
            })
        }
    }
    ,
    277404: (e,t,s)=>{
        s.d(t, {
            default: ()=>l
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(659397)
          , r = s(667294);
        const l = e=>{
            var {photo: t, title: s, isOnline: l, isMobile: c, onlineSize: d="m", element: h, className: u} = e
              , p = (0,
            o._)(e, ["photo", "title", "isOnline", "isMobile", "onlineSize", "element", "className"]);
            const [m,v] = (0,
            r.useState)(!1)
              , f = h || "div"
              , g = `Avatar--badge-${d}`
              , x = (0,
            a.classNames)("Avatar", g, u, {
                "Avatar--online": l,
                "Avatar--mobile": c
            });
            return (0,
            n.jsx)(f, (0,
            i._)({
                className: x
            }, p, {
                children: (0,
                n.jsx)("div", {
                    className: "Avatar__wrapper",
                    children: (0,
                    n.jsx)("img", {
                        onError: ()=>{
                            v(!0)
                        }
                        ,
                        className: "Avatar__img",
                        src: m ? "/images/camera_c.gif" : t,
                        alt: s
                    })
                })
            }))
        }
    }
    ,
    43014: (e,t,s)=>{
        s.d(t, {
            AvatarsStack: ()=>a
        });
        var i = s(785893)
          , o = s(942843)
          , n = s(518219);
        const a = ({items: e})=>(0,
        i.jsxs)("figure", {
            className: "AvatarsStack",
            children: [(0,
            i.jsx)(o.default, {
                children: (0,
                i.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0,
                    i.jsx)("defs", {
                        children: (0,
                        i.jsx)("clipPath", {
                            id: "users-mask",
                            children: (0,
                            i.jsx)("path", {
                                d: "M43.56 8.25a25 25 0 100 33.5A27.88 27.88 0 0138 25c0-6.28 2.07-12.08 5.56-16.75z"
                            })
                        })
                    })
                })
            }), e.map(((e,t)=>"src"in e ? (0,
            i.jsx)("img", {
                src: e.src,
                className: "AvatarsStack__item",
                alt: e.alt
            }, e.key || t) : (0,
            i.jsx)(n.ConversationNoPhoto, {
                text: e.text,
                id: e.id,
                size: "50",
                className: "AvatarsStack__item"
            }, e.key || t)))]
        })
    }
    ,
    952772: (e,t,s)=>{
        s.d(t, {
            AvatarsStackNoSvg: ()=>r,
            AvatarsStackNoSvgSizes: ()=>i
        });
        var i, o = s(785893), n = s(518219), a = s(659397);
        !function(e) {
            e.SIZE_50 = "50",
            e.SIZE_34 = "34",
            e.SIZE_24 = "24"
        }(i || (i = {}));
        const r = ({items: e, size: t="50"})=>(0,
        o.jsx)("div", {
            className: "AvatarsStackNoSvg",
            children: e.map(((e,s)=>{
                const i = (0,
                a.classNames)("AvatarsStackNoSvg__item", `AvatarsStackNoSvg__item--${t}`);
                return "src"in e ? (0,
                o.jsx)("img", {
                    src: e.src,
                    className: i,
                    alt: e.alt
                }, e.key || s) : (0,
                o.jsx)(n.ConversationNoPhoto, {
                    text: e.text,
                    id: e.id,
                    size: t,
                    className: i
                }, e.key || s)
            }
            ))
        })
    }
    ,
    240567: (e,t,s)=>{
        s.d(t, {
            BaseModal: ()=>r
        });
        var i = s(785893)
          , o = s(667294)
          , n = s(973935)
          , a = s(659397);
        class r extends o.Component {
            componentDidMount() {
                const {disableEscapeClose: e, disableBodyScroll: t} = this.props;
                e || document.body.addEventListener("keydown", this.onDocumentKeyDown),
                t && (this._scrollbarMeasureClass = (0,
                i.jsx)("div", {
                    className: "BaseModal__scrollbarMeasure"
                }).props.className,
                this._bodyHiddenOverflowClass = (0,
                i.jsx)("div", {
                    className: "BaseModal__bodyHiddenOverflow"
                }).props.className,
                this.hideScrollBar())
            }
            componentWillUnmount() {
                const {disableEscapeClose: e, disableBodyScroll: t} = this.props;
                e || document.body.removeEventListener("keydown", this.onDocumentKeyDown),
                t && this.showScrollBar()
            }
            renderModal() {
                const {className: e} = this.props
                  , t = (0,
                a.classNames)("BaseModal", e);
                return (0,
                i.jsxs)("div", {
                    className: t,
                    "aria-modal": "true",
                    children: [(0,
                    i.jsx)("div", {
                        className: "BaseModal__backdrop",
                        onClick: this.onBackdropClick
                    }), (0,
                    i.jsx)("div", {
                        className: "BaseModal__content",
                        children: this.props.children
                    })]
                })
            }
            render() {
                return n.createPortal(this.renderModal(), document.body)
            }
            constructor(...e) {
                super(...e),
                this.getScrollbarWidth = ()=>{
                    const e = document.createElement("div");
                    e.classList.add(this._scrollbarMeasureClass),
                    document.body.appendChild(e);
                    const t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e),
                    t
                }
                ,
                this.hideScrollBar = ()=>{
                    const e = document.body.getBoundingClientRect()
                      , t = e.left + e.right < window.innerWidth
                      , s = this.getScrollbarWidth();
                    this.calculatedPadding = window.getComputedStyle(document.body).paddingRight,
                    t && (document.body.style.paddingRight = `${parseFloat(this.calculatedPadding) + s}px`),
                    document.body.classList.add(this._bodyHiddenOverflowClass)
                }
                ,
                this.showScrollBar = ()=>{
                    document.body.style.paddingRight = this.calculatedPadding,
                    document.body.classList.remove(this._bodyHiddenOverflowClass)
                }
                ,
                this.onDocumentKeyDown = e=>{
                    const {onClose: t} = this.props;
                    "Escape" === e.key && t()
                }
                ,
                this.onBackdropClick = ()=>{
                    const {onClose: e, onBackdropClick: t, disableBackdropClick: s} = this.props;
                    s || (t ? t() : e())
                }
            }
        }
        r.defaultProps = {
            className: "",
            children: null,
            disableBackdropClick: !1,
            disableEscapeClose: !1,
            disableBodyScroll: !1
        }
    }
    ,
    237963: (e,t,s)=>{
        s.d(t, {
            default: ()=>c
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(667294)
          , r = s(973935)
          , l = s(659397);
        const c = e=>{
            var {x: t, y: s, text: c, position: d="b", align: h="center", removed: u, maxWidth: p, appearance: m="dark", className: v, tooltipRef: f, tooltipInRef: g, arrow: x} = e
              , N = (0,
            o._)(e, ["x", "y", "text", "position", "align", "removed", "maxWidth", "appearance", "className", "tooltipRef", "tooltipInRef", "arrow"]);
            const w = (0,
            a.useRef)(null);
            N.static || w.current || (w.current = document.createElement("div"),
            document.body.appendChild(w.current));
            const _ = (0,
            l.classNames)("Tooltip", `Tooltip--${d}`, `Tooltip--${m}`, {
                "Tooltip--static": N.static,
                "Tooltip--removed": !!u,
                [`Tooltip--align-${h}`]: "t" === d || "b" === d,
                [`Tooltip--arrow-${x}`]: "r" === d || "l" === d || "hide" === x
            }, v)
              , S = (0,
            n.jsxs)("div", (0,
            i._)({}, N, {
                className: _,
                ref: f,
                style: N.static ? {} : {
                    top: s,
                    left: t
                },
                children: ["string" == typeof c && (0,
                n.jsx)("div", {
                    className: "Tooltip__in",
                    ref: g,
                    style: {
                        maxWidth: p
                    },
                    dangerouslySetInnerHTML: {
                        __html: c
                    }
                }), "string" != typeof c && (0,
                n.jsx)("div", {
                    className: "Tooltip__in",
                    ref: g,
                    style: {
                        maxWidth: p
                    },
                    children: c
                })]
            }));
            return N.static ? S : w.current ? (0,
            r.createPortal)(S, w.current) : S
        }
    }
    ,
    222574: (e,t,s)=>{
        s.d(t, {
            BlockSearchInput: ()=>l
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(659397)
          , r = s(639973);
        const l = e=>{
            var {className: t, getRef: s} = e
              , l = (0,
            o._)(e, ["className", "getRef"]);
            return (0,
            n.jsx)(r.default, (0,
            i._)({}, l, {
                className: (0,
                a.classNames)(t, "BlockSearchInput"),
                getRef: s
            }))
        }
    }
    ,
    589897: (e,t,s)=>{
        s.d(t, {
            default: ()=>h
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(667294)
          , r = s(659397)
          , l = s(159868);
        const c = ["primary", "positive"];
        function d(e) {
            return Array.isArray(e) ? e.map((e=>`Button--${e}`)) : [`Button--${e}`]
        }
        class h extends a.Component {
            render() {
                const e = this.props
                  , {className: t, mode: s, appearance: a, wide: h, stretched: u, overflow: p, size: m, loading: v} = e
                  , f = (0,
                o._)(e, ["className", "mode", "appearance", "wide", "stretched", "overflow", "size", "loading"])
                  , {disabled: g} = e
                  , x = c.includes(a)
                  , N = d(s || a)
                  , w = (0,
                r.classNames)("Button", `Button--size-${m}`, ...N, {
                    "Button--wide": h || u,
                    "Button--overflow": !!p,
                    "Button--disabled": g,
                    "Button--loading": v
                }, t);
                return (0,
                n.jsxs)("button", (0,
                i._)({}, f, {
                    className: w,
                    children: [e.children, v && (0,
                    n.jsx)(l.default, {
                        inverted: x,
                        className: "Button__progress"
                    })]
                }))
            }
        }
        h.defaultProps = {
            appearance: "primary",
            size: "m",
            wide: !1,
            stretched: !1,
            disabled: !1,
            loading: !1
        }
    }
    ,
    866781: (e,t,s)=>{
        s.d(t, {
            default: ()=>r
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(659397);
        const r = e=>{
            var {children: t, checked: s, disabled: r, indeterminate: l, name: c, id: d, onChange: h, onChangeNative: u} = e
              , p = (0,
            o._)(e, ["children", "checked", "disabled", "indeterminate", "name", "id", "onChange", "onChangeNative"]);
            const m = (0,
            a.classNames)("CheckBox", p.className, r && "CheckBox--disabled", l && "CheckBox--indeterminate");
            return (0,
            n.jsxs)("label", {
                className: m,
                children: [(0,
                n.jsx)("input", (0,
                i._)({}, p, {
                    className: "CheckBox__input",
                    id: d,
                    type: "checkbox",
                    checked: s,
                    name: c,
                    disabled: r,
                    onChange: e=>{
                        var t, s;
                        null == (t = h) || t(c, e.target.checked, e),
                        null == (s = u) || s(e)
                    }
                })), (0,
                n.jsx)("span", {
                    className: "CheckBox__indicator",
                    "aria-hidden": !0
                }), t]
            })
        }
    }
    ,
    952058: (e,t,s)=>{
        s.d(t, {
            default: ()=>a
        });
        var i = s(785893)
          , o = s(667294)
          , n = s(659397);
        class a extends o.Component {
            UNSAFE_componentWillReceiveProps(e) {
                this.setState({
                    opened: e.opened
                }, (()=>{
                    this.updateHeight()
                }
                ))
            }
            updateHeight() {
                if (this.state.opened && !this.props.autoHeight && this.childrenRef) {
                    const e = Number((this.childrenRef.children[0].clientHeight + 5).toString());
                    this.state.childrenHeight !== e && this.setState({
                        childrenHeight: e
                    })
                }
            }
            toggle(e) {
                this.setState({
                    opened: e
                }, (()=>{
                    this.props.toggleCallback && this.props.toggleCallback(e),
                    this.updateHeight()
                }
                ))
            }
            render() {
                const {header: e, children: t, autoHeight: s} = this.props
                  , {opened: o, childrenHeight: a} = this.state
                  , r = (0,
                n.classNames)("Collapse", this.props.className, {
                    "Collapse--opened": o
                })
                  , l = (0,
                n.classNames)("Collapse__header", {
                    Collapse__stringHeader: "string" == typeof e
                });
                let c = "0";
                return o && (c = s ? "none" : a + "px"),
                (0,
                i.jsxs)("div", {
                    className: r,
                    children: [e && (0,
                    i.jsx)("div", {
                        onClick: this.headerClick,
                        className: l,
                        children: e
                    }), (0,
                    i.jsx)("div", {
                        ref: this.setChildrenRef,
                        className: "Collapse__content",
                        style: {
                            maxHeight: c
                        },
                        children: (0,
                        i.jsx)("div", {
                            children: t
                        })
                    })]
                })
            }
            constructor(e) {
                super(e),
                this.headerClick = ()=>{
                    this.toggle(!this.state.opened)
                }
                ,
                this.setChildrenRef = e=>{
                    this.childrenRef = e,
                    this.state.opened && this.updateHeight()
                }
                ,
                this.state = {
                    opened: e.opened,
                    childrenHeight: 0
                }
            }
        }
        a.defaultProps = {
            header: "",
            opened: !1
        }
    }
    ,
    19321: (e,t,s)=>{
        s.d(t, {
            WithEmoji: ()=>c,
            default: ()=>d,
            setHTML: ()=>l
        });
        var i = s(785893)
          , o = s(667294)
          , n = s(659397)
          , a = s(427323)
          , r = s(488543);
        function l(e, t) {
            let s = !!window.getSelection && window.getSelection()
              , i = null;
            if (s && s.rangeCount) {
                let e = s.getRangeAt(0);
                i = e.commonAncestorContainer ? e.commonAncestorContainer : e.parentElement ? e.parentElement() : e.item(0)
            }
            let o = i;
            for (; o && o !== e; )
                o = o.parentNode;
            window.Emoji && (o || window.Emoji.editableFocus(e, !1, !0),
            window.Emoji.insertHTML(t))
        }
        const c = (0,
        o.memo)((({title: e, children: t})=>{
            const s = (0,
            o.useRef)(null)
              , r = (0,
            o.useRef)({})
              , l = (0,
            o.useMemo)((()=>{
                const e = o.Children.only(t);
                return (0,
                o.cloneElement)(e, {
                    isMultiLine: e.props.isMultiLine,
                    getRef: t=>{
                        var s;
                        (null == (s = e) ? void 0 : s.ref) && e.getRef(t),
                        r.current = t || {}
                    }
                    ,
                    className: (0,
                    n.classNames)(e.props.className, "WithEmoji__textbox")
                })
            }
            ), [t]);
            return (0,
            o.useEffect)((()=>{
                window.Emoji && r && window.Emoji.init(r.current, {
                    noStickers: !0,
                    onSend: ()=>{}
                    ,
                    ctrlSend: ()=>!0,
                    noLineBreaks: !l.props.isMultiLine
                })
            }
            ), []),
            (0,
            i.jsxs)("div", {
                className: "WithEmoji__field _emoji_field_wrap",
                children: [l, (0,
                i.jsx)("div", {
                    className: "WithEmoji__smile emoji_smile_wrap _emoji_wrap",
                    children: (0,
                    i.jsx)("div", {
                        className: "emoji_smile _emoji_btn",
                        ref: s,
                        title: e,
                        onMouseOver: e=>{
                            e.persist(),
                            window.Emoji && window.Emoji.show(s.current, e)
                        }
                        ,
                        onMouseOut: e=>{
                            e.persist(),
                            window.Emoji && window.Emoji.hide(s.current, e)
                        }
                        ,
                        children: (0,
                        i.jsx)(a.Icon24SmileOutline, {})
                    })
                })]
            })
        }
        ));
        c.displayName = "WithEmoji";
        const d = ({tabIndex: e=0, isMultiLine: t=!1, initialValue: s="", onChange: n, getRef: a})=>{
            const l = (0,
            o.useRef)(null)
              , c = (0,
            o.useRef)(!1)
              , d = (0,
            r.useExternRef)(l, a);
            return (0,
            o.useEffect)((()=>{
                const e = l.current;
                if (!e || c.current)
                    return;
                c.current = !0;
                const t = s;
                return window.Emoji && window.Emoji.val(e, window.Emoji.emojiToHTML(t)),
                ()=>{
                    c.current = !1
                }
            }
            ), []),
            (0,
            i.jsx)("div", {
                role: "textbox",
                ref: d,
                tabIndex: e,
                contentEditable: !0,
                "aria-multiline": t,
                onInput: ()=>{
                    n && window.Emoji && l.current && n(window.Emoji.val(l.current))
                }
            })
        }
    }
    ,
    518219: (e,t,s)=>{
        s.d(t, {
            ConversationNoPhoto: ()=>r
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(659397);
        const r = e=>{
            var {id: t, size: s="m", text: r, specificType: l, className: c} = e
              , d = (0,
            o._)(e, ["id", "size", "text", "specificType", "className"]);
            const h = l || Math.abs(t % 6) + 1
              , u = (0,
            a.classNames)("ConversationNoPhoto", `ConversationNoPhoto--${h}`, `ConversationNoPhoto--${s}`, c);
            return (0,
            n.jsx)("figure", (0,
            i._)({}, d, {
                className: u,
                dangerouslySetInnerHTML: {
                    __html: r
                }
            }))
        }
    }
    ,
    180625: (e,t,s)=>{
        s.d(t, {
            CopyText: ()=>n
        });
        var i = s(785893)
          , o = s(667294);
        const n = ({text: e, onCopyDone: t, children: s})=>{
            const n = (0,
            o.useRef)(null)
              , a = (0,
            o.useCallback)((e=>{
                n.current && (n.current.focus(),
                n.current.select(),
                document.execCommand("copy"),
                e.preventDefault(),
                e.stopPropagation(),
                t && t())
            }
            ), [t]);
            return (0,
            i.jsxs)("div", {
                className: "CopyText",
                onClick: a,
                children: [(0,
                i.jsx)("input", {
                    type: "text",
                    readOnly: !0,
                    value: e || "",
                    ref: n,
                    className: "CopyText__input"
                }), s]
            })
        }
    }
    ,
    251985: (e,t,s)=>{
        s.d(t, {
            DivBlockSkeleton: ()=>a
        });
        var i = s(785893)
          , o = s(667294)
          , n = s(911099);
        const a = ({height: e, classNames: t=""})=>{
            const s = (0,
            o.useMemo)((()=>({
                height: e
            })), [e]);
            return (0,
            i.jsx)("div", {
                className: (0,
                n.classNames)("DivBlockSkeleton", t),
                style: s
            })
        }
    }
    ,
    273192: (e,t,s)=>{
        s.d(t, {
            default: ()=>r
        });
        var i = s(785893)
          , o = s(667294)
          , n = s(973935)
          , a = s(659397);
        class r extends o.Component {
            componentDidMount() {
                this.el = (0,
                n.findDOMNode)(this),
                "click" === this.props.trigger ? (this.el.addEventListener("click", this.onClick),
                document.addEventListener("mousedown", this.onDocumentClick),
                window.addEventListener("resize", this.onResize)) : (this.el.addEventListener("mouseenter", this.onMouseEnter),
                this.el.addEventListener("mouseleave", this.onMouseLeave))
            }
            componentWillUnmount() {
                var e;
                (Object.keys(this.timeouts).forEach((e=>{
                    clearTimeout(this.timeouts[e])
                }
                )),
                "click" === this.props.trigger ? (this.el.removeEventListener("click", this.onClick),
                document.removeEventListener("mousedown", this.onDocumentClick),
                window.removeEventListener("resize", this.onResize)) : (this.el.removeEventListener("mouseenter", this.onMouseEnter),
                this.el.removeEventListener("mouseleave", this.onMouseLeave)),
                this.defaultNode) && (null == (e = this.defaultNode.parentNode) || e.removeChild(this.defaultNode),
                delete this.defaultNode)
            }
            update(e) {
                if (!e)
                    return this.setState({
                        dropdown: Object.assign({}, this.state.dropdown, {
                            removed: !0
                        })
                    });
                const {position: t, align: s, horizontalPosition: i, rect: o, marginTop: n, marginLeft: a} = e;
                let r = o.left
                  , l = o.top;
                switch (t) {
                case "t":
                    "center" === i ? r += .5 * o.width : "right" === i && (r += o.width);
                    break;
                case "r":
                    r += o.width,
                    l += .5 * o.height;
                    break;
                case "b":
                    l += o.height,
                    "center" === i ? r += .5 * o.width : "right" === i && (r += o.width);
                    break;
                case "l":
                    l += .5 * o.height
                }
                r = Math.round(r + (null != a ? a : 0)),
                l = Math.round(l + (null != n ? n : 0)),
                this.setState({
                    dropdown: {
                        position: t,
                        align: s,
                        x: r,
                        y: l
                    }
                })
            }
            renderDropdown() {
                if (!this.state.dropdown)
                    return null;
                const {x: e, y: t, position: s, align: o, removed: n} = this.state.dropdown
                  , r = (0,
                a.classNames)("Dropdown", `Dropdown--${s}`, !!n && "Dropdown--removed", ("t" === s || "b" === s) && `Dropdown--align-${o}`, `Dropdown--${this.props.appearance}`, this.props.className);
                return (0,
                i.jsx)("div", {
                    className: r,
                    style: {
                        top: t,
                        left: e
                    },
                    onTransitionEnd: e=>this.onTransitionEnd(e),
                    onMouseEnter: this.onDropdownMouseEnter,
                    onMouseLeave: this.onDropdownMouseLeave,
                    children: (0,
                    i.jsx)("ul", {
                        className: "Dropdown__in",
                        children: this.props.data.map(((e,t)=>(0,
                        i.jsx)("li", {
                            className: (0,
                            a.classNames)("Dropdown__item", e.separator && "Dropdown__itemSeparator", e.negative && "Dropdown__itemNegative", e.noHover && "Dropdown__itemNoHover"),
                            onClick: t=>this.onItemClick(t, e),
                            "data-testid": e.testId,
                            children: e.text
                        }, void 0 !== e.id ? e.id : t)))
                    })
                })
            }
            render() {
                const e = this.renderDropdown();
                return e ? (this.defaultNode || "undefined" == typeof window || (this.defaultNode = document.createElement("div"),
                document.body.appendChild(this.defaultNode)),
                (0,
                i.jsxs)(i.Fragment, {
                    children: [this.props.children, (0,
                    n.createPortal)(e, this.defaultNode)]
                })) : this.props.children
            }
            constructor(e) {
                super(e),
                this.hovered = !1,
                this.callerHovered = !1,
                this.onClick = ()=>{
                    if (!this.state.dropdown || this.state.dropdown.removed) {
                        const {position: e, align: t, marginTop: s, marginLeft: i, horizontalPosition: o} = this.props
                          , n = (0,
                        a.getOffsetRect)(this.el);
                        this.update({
                            position: e,
                            horizontalPosition: o,
                            align: t,
                            rect: n,
                            marginTop: s,
                            marginLeft: i
                        })
                    } else
                        this.update()
                }
                ,
                this.onMouseEnter = ()=>{
                    this.callerHovered = !0,
                    this.timeouts.appear = window.setTimeout((()=>{
                        if (this.el && this.callerHovered) {
                            const {position: e, align: t, marginTop: s, marginLeft: i, horizontalPosition: o} = this.props
                              , n = (0,
                            a.getOffsetRect)(this.el);
                            this.update({
                                position: e,
                                align: t,
                                horizontalPosition: o,
                                rect: n,
                                marginTop: s,
                                marginLeft: i
                            })
                        }
                    }
                    ), 80)
                }
                ,
                this.onMouseLeave = ()=>{
                    this.callerHovered = !1,
                    this.timeouts.callerDisappear = window.setTimeout((()=>{
                        this.callerHovered || this.hovered || this.update()
                    }
                    ), 250)
                }
                ,
                this.onDropdownMouseEnter = ()=>{
                    "hover" === this.props.trigger && (this.hovered = !0)
                }
                ,
                this.onDropdownMouseLeave = ()=>{
                    "hover" === this.props.trigger && (this.hovered = !1,
                    this.timeouts.disappear = window.setTimeout((()=>{
                        this.callerHovered || this.hovered || this.update()
                    }
                    ), 250))
                }
                ,
                this.onDocumentClick = e=>{
                    !this.state.dropdown || this.state.dropdown.removed || this.el.contains(e.target) || this.update()
                }
                ,
                this.onResize = ()=>{
                    if (this.state.dropdown && !this.state.dropdown.removed) {
                        const {position: e, align: t, marginTop: s, marginLeft: i, horizontalPosition: o} = this.props
                          , n = (0,
                        a.getOffsetRect)(this.el);
                        this.update({
                            position: e,
                            align: t,
                            horizontalPosition: o,
                            rect: n,
                            marginTop: s,
                            marginLeft: i
                        })
                    }
                }
                ,
                this.onTransitionEnd = e=>{
                    "visibility" === e.propertyName && this.state.dropdown && this.state.dropdown.removed && this.setState({
                        dropdown: void 0
                    })
                }
                ,
                this.onItemClick = (e,t)=>{
                    t.separator || (this.update(),
                    t.onClick && t.onClick(e))
                }
                ,
                this.state = {},
                this.timeouts = {}
            }
        }
        r.defaultProps = {
            position: "b",
            horizontalPosition: "center",
            align: "center",
            marginTop: 0,
            marginLeft: 0,
            trigger: "click",
            appearance: "primary"
        }
    }
    ,
    514653: (e,t,s)=>{
        s.d(t, {
            EditableLabel: ()=>l
        });
        var i = s(785893)
          , o = s(667294)
          , n = s(659397)
          , a = s(92116);
        const r = {
            height: "auto"
        };
        class l extends o.Component {
            static getDerivedStateFromProps(e, t) {
                return {
                    value: e.value,
                    changed: e.onChange ? e.changed : e.value === t.value
                }
            }
            componentDidMount() {
                this.elRef.current && this.elRef.current.addEventListener("keydown", this.onKeydown)
            }
            componentWillUnmount() {
                this.elRef.current && this.elRef.current.removeEventListener("keydown", this.onKeydown)
            }
            render() {
                const {className: e, validate: t, placeholder: s} = this.props
                  , {editing: o, changed: l, value: c} = this.state
                  , d = (0,
                n.classNames)("EditableLabel", {
                    "EditableLabel--editing": o,
                    "EditableLabel--changed": l,
                    "EditableLabel--invalid": t && !t(c),
                    "EditableLabel--placeholder": Boolean(!c.trim() && s)
                }, e);
                return (0,
                i.jsx)("div", {
                    className: d,
                    ref: this.elRef,
                    children: o ? (0,
                    i.jsxs)(i.Fragment, {
                        children: [(0,
                        i.jsx)(a.Textarea, {
                            className: "EditableLabel__textarea",
                            onChange: this.onChange,
                            onInput: this.onChange,
                            value: c,
                            onBlur: this.onBlur,
                            style: Object.assign({}, r, this.props.textareaStyles),
                            rows: 1,
                            getRef: this.getRef,
                            placeholder: s
                        }), l && (0,
                        i.jsx)("button", {
                            className: "EditableLabel__save",
                            onClick: this.onSave
                        })]
                    }) : (0,
                    i.jsx)("div", {
                        className: "EditableLabel__text",
                        onClick: this.onClick,
                        children: c.trim() ? c : s
                    })
                })
            }
            constructor(e) {
                super(e),
                this.elRef = (0,
                o.createRef)(),
                this.textarea = null,
                this.onChange = e=>{
                    this.props.onChange ? this.props.onChange(e) : this.setState({
                        value: e.target.value,
                        changed: this.props.value !== this.state.value
                    })
                }
                ,
                this.onClick = ()=>{
                    this.setState({
                        editing: !0
                    }, (()=>{
                        this.textarea && this.textarea.focus && (this.textarea.focus(),
                        this.textarea.select()),
                        this.props.onStartEdit && this.props.onStartEdit()
                    }
                    ))
                }
                ,
                this.onBlur = ()=>{
                    this.state.changed || this.setState({
                        editing: !1
                    })
                }
                ,
                this.onSave = ()=>{
                    this.props.validate && !this.props.validate(this.state.value) || (this.setState({
                        editing: !1,
                        changed: !1
                    }),
                    this.props.onSave && this.props.onSave({
                        value: this.state.value
                    }))
                }
                ,
                this.onKeydown = e=>{
                    this.state.editing && (27 === e.keyCode && (this.props.onCancel && this.props.onCancel(),
                    this.setState({
                        editing: !1,
                        changed: !1,
                        value: this.props.value || ""
                    }),
                    e.preventDefault(),
                    e.stopPropagation()),
                    this.props.useEnter && 13 === e.keyCode && (this.onSave(),
                    e.preventDefault(),
                    e.stopPropagation()))
                }
                ,
                this.getRef = e=>{
                    e && (this.textarea = e)
                }
                ,
                this.state = {
                    value: e.value || "",
                    editing: !1,
                    changed: !!e.onChange && Boolean(e.changed)
                }
            }
        }
        l.defaultProps = {
            value: "",
            changed: !1,
            useEnter: !1,
            textareaStyles: {},
            placeholder: ""
        }
    }
    ,
    205423: (e,t,s)=>{
        s.d(t, {
            default: ()=>l
        });
        var i = s(785893)
          , o = s(659397)
          , n = s(667294)
          , a = s(840842)
          , r = s(720737);
        const l = ({size: e=null, photo: t="", title: s="", description: l="", href: c="", linkClassName: d, target: h, ignoreDecodeHTML: u, onLinkClick: p=o.noop, className: m, style: v, onClick: f})=>{
            const [g,x] = (0,
            n.useState)(!1)
              , N = ()=>{
                x(!0)
            }
              , w = ()=>(0,
            i.jsx)("img", {
                src: g ? "/images/camera_c.gif" : t,
                alt: s,
                onError: N,
                className: "Entity__photo"
            })
              , _ = u ? s : (0,
            r.decodeHTMLEntities)(s);
            return (0,
            i.jsxs)("div", {
                className: (0,
                o.classNames)("Entity", m, Boolean(e) && `Entity--size ${e}`),
                style: v,
                onClick: f,
                children: [(0,
                i.jsx)("div", {
                    className: "Entity__aside",
                    children: "string" == typeof t ? c ? (0,
                    i.jsx)("a", {
                        href: c,
                        target: h,
                        children: w()
                    }) : w() : t
                }), (0,
                i.jsxs)("div", {
                    className: "Entity__main",
                    children: [s && c ? (0,
                    i.jsx)("div", {
                        className: "Entity__title",
                        children: (0,
                        i.jsx)(a.default, {
                            onClick: p,
                            className: d,
                            href: c,
                            target: h,
                            children: _
                        })
                    }) : (0,
                    i.jsx)("div", {
                        className: "Entity__title",
                        children: _
                    }), "string" != typeof l ? (0,
                    i.jsx)("div", {
                        className: "Entity__description",
                        children: l
                    }) : (0,
                    i.jsx)("div", {
                        className: "Entity__description",
                        children: (0,
                        r.decodeHTMLEntities)(l)
                    })]
                })]
            })
        }
    }
    ,
    497098: (e,t,s)=>{
        s.d(t, {
            default: ()=>d
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(667294)
          , r = s(840842)
          , l = s(659397);
        class c extends a.Component {
            render() {
                const e = this.props
                  , {style: t, label: s, children: a, className: c} = e
                  , d = (0,
                o._)(e, ["style", "label", "children", "className"]);
                return (0,
                n.jsxs)("span", {
                    className: (0,
                    l.classNames)("File", c),
                    style: t,
                    children: [(0,
                    n.jsx)("label", {
                        className: "File__in",
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        children: (0,
                        n.jsx)("input", (0,
                        i._)({}, d, {
                            ref: this.inputRef,
                            className: "File__self",
                            type: "file",
                            onChange: this.changeHandler
                        }))
                    }), (0,
                    n.jsx)(r.default, {
                        hovered: this.state.hovered,
                        children: this.props.children
                    })]
                })
            }
            constructor(e) {
                super(e),
                this.changeHandler = e=>{
                    this.setState({
                        value: e.target.value
                    }),
                    this.props.onChange && this.props.onChange(e)
                }
                ,
                this.onMouseEnter = ()=>this.setState({
                    hovered: !0
                }),
                this.onMouseLeave = ()=>this.setState({
                    hovered: !1
                }),
                this.state = {
                    value: null,
                    hovered: !1
                },
                this.inputRef = (0,
                a.createRef)()
            }
        }
        c.defaultProps = {};
        const d = c
    }
    ,
    568217: (e,t,s)=>{
        s.d(t, {
            default: ()=>r
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(659397);
        function r(e) {
            var {text: t, searchText: s, className: r} = e
              , l = (0,
            o._)(e, ["text", "searchText", "className"]);
            const c = (0,
            a.classNames)("HighlightSearchText", r);
            let d = (0,
            n.jsx)("span", (0,
            i._)({
                className: c
            }, l, {
                children: t
            }));
            if (s && t) {
                const e = t.toLowerCase().indexOf(s.toLowerCase());
                if (e < 0)
                    return d;
                const o = t.substring(0, e)
                  , a = t.substring(e, e + s.length)
                  , r = t.substring(e + s.length, t.length);
                d = (0,
                n.jsxs)("span", (0,
                i._)({
                    className: c
                }, l, {
                    children: [o, (0,
                    n.jsx)("span", {
                        className: "HighlightSearchText__highlighted",
                        children: a
                    }), r]
                }))
            }
            return d
        }
    }
    ,
    671459: (e,t,s)=>{
        s.d(t, {
            default: ()=>d
        });
        var i = s(434788)
          , o = s(785893)
          , n = s(667294)
          , a = s(973935)
          , r = s(659397)
          , l = s(237963);
        const c = e=>{
            const {position: t, align: s, text: i, rect: o, marginTop: n, marginLeft: a, maxWidth: r, appearance: l, className: c} = e;
            let d = o.left
              , h = o.top;
            switch (t) {
            case "t":
                d += .5 * o.width;
                break;
            case "r":
                d += o.width,
                h += .5 * o.height;
                break;
            case "b":
                d += .5 * o.width,
                h += o.height;
                break;
            case "l":
                h += .5 * o.height
            }
            return d = Math.round(d + (a || 0)),
            h = Math.round(h + (n || 0)),
            {
                tooltip: {
                    position: t,
                    align: s,
                    text: i,
                    x: d,
                    y: h,
                    maxWidth: r,
                    appearance: l,
                    className: c
                }
            }
        }
        ;
        class d extends n.Component {
            componentDidMount() {
                var e, t;
                const s = a.findDOMNode(this);
                this.setState({
                    el: s
                }),
                null == (e = s) || e.addEventListener("mouseenter", this.onMouseEnter),
                null == (t = s) || t.addEventListener("mouseleave", this.onMouseLeave)
            }
            componentWillUnmount() {
                var e, t;
                null == (e = this.state.el) || e.removeEventListener("mouseenter", this.onMouseEnter),
                null == (t = this.state.el) || t.removeEventListener("mouseleave", this.onMouseLeave)
            }
            static getDerivedStateFromProps(e, t) {
                if (!t.tooltip)
                    return null;
                return e.text !== t.tooltip.text || e.position !== t.tooltip.position || e.align !== t.tooltip.align || e.maxWidth !== t.tooltip.maxWidth || e.appearance !== t.tooltip.appearance ? c((0,
                i._)({}, e, {
                    rect: (0,
                    r.getOffsetRect)(t.el instanceof HTMLElement ? t.el : null)
                })) : null
            }
            update(e) {
                if (!e)
                    return this.setState({
                        tooltip: Object.assign({}, this.state.tooltip, {
                            removed: !0
                        })
                    });
                this.setState(c(e))
            }
            render() {
                const e = this.state.tooltip;
                return e && "undefined" != typeof window ? (0,
                o.jsxs)(n.Fragment, {
                    children: [this.props.children, (0,
                    o.jsx)(l.default, (0,
                    i._)({}, e, {
                        tooltipRef: this.tooltipRef,
                        onMouseEnter: this.onTooltipMouseEnter,
                        onMouseLeave: this.onTooltipMouseLeave,
                        onTransitionEnd: this.onTransitionEnd
                    }))]
                }) : this.props.children
            }
            constructor(e) {
                super(e),
                this.tooltipRef = (0,
                n.createRef)(),
                this.onMouseEnter = ()=>{
                    if (this.state.el) {
                        const {text: e, position: t, align: s, marginTop: i, marginLeft: o, maxWidth: n, appearance: a, className: l} = this.props
                          , c = (0,
                        r.getOffsetRect)(this.state.el instanceof HTMLElement ? this.state.el : null);
                        this.update({
                            text: e,
                            position: t,
                            align: s,
                            rect: c,
                            marginTop: i,
                            marginLeft: o,
                            maxWidth: n,
                            appearance: a,
                            className: l
                        })
                    }
                }
                ,
                this.onMouseLeave = e=>{
                    var t;
                    const {relatedTarget: s} = e
                      , i = this.tooltipRef.current;
                    !(Boolean(s) && Boolean(i) && (i === s || (null == (t = i) ? void 0 : t.contains(s)))) && this.update()
                }
                ,
                this.onTransitionEnd = e=>{
                    "visibility" === e.propertyName && this.state.tooltip && this.setState({
                        tooltip: void 0
                    })
                }
                ,
                this.onTooltipMouseEnter = ()=>this.onMouseEnter(),
                this.onTooltipMouseLeave = ()=>this.update(),
                this.state = {
                    el: null
                }
            }
        }
        d.defaultProps = {
            position: "b",
            align: "center",
            marginTop: 0,
            marginLeft: 0,
            appearance: "dark"
        }
    }
    ,
    758021: (e,t,s)=>{
        s.d(t, {
            default: ()=>c
        });
        var i = s(11010)
          , o = s(434788)
          , n = s(785893)
          , a = s(667294)
          , r = s(562329)
          , l = s(659397);
        class c extends a.Component {
            getScrollData() {
                const e = this.useWindowScroll ? document.documentElement : this.container;
                return [this.getScrollTop(), e ? e.scrollHeight : 0, e ? e.clientHeight : 0]
            }
            getScrollTop() {
                const e = document.documentElement || document.body.parentNode || document.body;
                return this.useWindowScroll ? void 0 !== window.pageYOffset ? window.pageYOffset : e.scrollTop : this.container ? this.container.scrollTop : 0
            }
            attachListeners() {
                const e = this.useWindowScroll ? window : this.container;
                var t, s;
                this.container && (null == (t = e) || t.addEventListener("scroll", this.onScroll, this.props.useCapture),
                null == (s = e) || s.addEventListener("resize", this.onScroll, this.props.useCapture))
            }
            detachListeners() {
                const e = this.useWindowScroll ? window : this.container;
                var t, s;
                this.container && (null == (t = e) || t.removeEventListener("scroll", this.onScroll, this.props.useCapture),
                null == (s = e) || s.removeEventListener("resize", this.onScroll, this.props.useCapture))
            }
            processChildren(e, t) {
                const s = this.state
                  , i = this.getChildrenData(e, null != t ? t : this.getScrollData())
                  , {start: o, end: n, before: a, after: r} = i;
                o === s.start && n === s.end && a === s.before && r === s.after || this.setState(i)
            }
            getScrollContainerHeight(e) {
                return e ? this.useWindowScroll || e instanceof Window ? window.innerHeight : e.offsetHeight : null
            }
            getChildrenData(e, [t,s,i]) {
                const o = this.useWindowScroll ? window : this.container
                  , n = this.getScrollContainerHeight(o)
                  , r = a.Children.count(e);
                if (!o || 0 === s || 0 === i)
                    return {
                        start: 0,
                        end: 0,
                        before: 0,
                        after: r
                    };
                i = Math.max(i, n || 0);
                const l = this.getPropsWithDefault().itemHeight
                  , c = Math.max(Math.floor(t / l) - 1, 0)
                  , d = Math.min(Math.floor((t + 2 * i) / l + 1), r);
                return {
                    start: c,
                    end: d,
                    before: c,
                    after: r - d
                }
            }
            UNSAFE_componentWillReceiveProps(e) {
                this.props.virtualized && this.processChildren(e.children)
            }
            componentDidMount() {
                this.props.useIntersectionObserver || this.attachListeners()
            }
            componentWillUnmount() {
                this.detachListeners()
            }
            render() {
                const {children: e, className: t, hasMore: s, itemHeight: i, loader: o, spinnerColor: a, style: c, virtualized: d} = this.getPropsWithDefault();
                return (0,
                n.jsxs)("div", {
                    className: (0,
                    l.classNames)("InfiniteScroll", t),
                    ref: this.getRef,
                    style: c,
                    children: [d && this.state.before > 0 && (0,
                    n.jsx)("div", {
                        style: {
                            height: this.state.before * i
                        }
                    }, "before"), this.props.virtualized ? [].concat(e).slice(this.state.start, this.state.end) : this.props.children, this.props.virtualized && this.state.after > 0 && (0,
                    n.jsx)("div", {
                        style: {
                            height: this.state.after * i
                        }
                    }, "after"), s && (o || (0,
                    n.jsx)("div", {
                        ref: this.applyObserver,
                        className: "InfiniteScroll__loader",
                        children: (0,
                        n.jsx)(r.default, {
                            color: a
                        })
                    }, "loader"))]
                })
            }
            constructor(e) {
                super(e);
                var t = this;
                this.checkLoad = (0,
                l.throttle)((0,
                i._)((function*(e) {
                    const [s,i,o] = e;
                    if (!t.loading) {
                        if (!t.props.virtualized && !t.props.hasMore) {
                            if (t.props.onScroll)
                                return;
                            return t.detachListeners()
                        }
                        i - s - o <= t.getPropsWithDefault().threshold && (t.loading = !0,
                        yield t.props.loadMore(),
                        t.loading = !1)
                    }
                }
                )), 34),
                this.onScroll = e=>{
                    const t = this.getScrollData();
                    this.props.onScroll && this.props.onScroll(e),
                    this.props.virtualized && this.processChildren(this.props.children, t),
                    this.props.hasMore && this.checkLoad(t)
                }
                ,
                this.applyObserver = e=>{
                    this.props.useIntersectionObserver && (this.intersectionObserver || (this.intersectionObserver = new IntersectionObserver((e=>{
                        var t = this;
                        e.forEach((0,
                        i._)((function*(e) {
                            e.isIntersecting && !t.loading && (t.loading = !0,
                            yield t.props.loadMore(),
                            t.loading = !1)
                        }
                        )))
                    }
                    ))),
                    this.spinnerRef.current && this.intersectionObserver.unobserve(this.spinnerRef.current),
                    this.spinnerRef.current = e,
                    this.spinnerRef.current && this.intersectionObserver.observe(this.spinnerRef.current))
                }
                ,
                this.getRef = e=>{
                    this.container = e,
                    this.props.virtualized && this.setState(this.getChildrenData(this.props.children, this.getScrollData()))
                }
                ,
                this.getPropsWithDefault = ()=>(0,
                o._)({}, c.defaultProps, this.props),
                this.useWindowScroll = e.useWindowScroll,
                e.virtualized && (this.state = {
                    before: 0,
                    after: a.Children.count(e.children),
                    start: 0,
                    end: 0
                }),
                this.spinnerRef = (0,
                a.createRef)()
            }
        }
        c.defaultProps = {
            className: "",
            hasMore: !0,
            itemHeight: 55,
            threshold: 100,
            useCapture: !1,
            useWindowScroll: !1,
            virtualized: !1
        }
    }
    ,
    5163: (e,t,s)=>{
        s.d(t, {
            default: ()=>a
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893);
        const a = e=>{
            var {children: t, element: s="span", className: a} = e
              , r = (0,
            o._)(e, ["children", "element", "className"]);
            const l = t ? String(t) : ""
              , c = s;
            return (0,
            n.jsx)(c, (0,
            i._)({}, r, {
                dangerouslySetInnerHTML: {
                    __html: l
                },
                className: a || ""
            }))
        }
    }
    ,
    639973: (e,t,s)=>{
        s.d(t, {
            default: ()=>l
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(667294)
          , r = s(659397);
        class l extends a.Component {
            render() {
                const e = this.props
                  , {alignment: t, value: s, onChange: a, initialValue: l, className: c, isControlledOutside: d, isError: h, getRef: u} = e
                  , p = (0,
                o._)(e, ["alignment", "value", "onChange", "initialValue", "className", "isControlledOutside", "isError", "getRef"])
                  , m = {
                    "Input--left": "left" === t,
                    "Input--center": "center" === t,
                    "Input--right": "right" === t,
                    "Input--error": !!h
                };
                return (0,
                n.jsx)("input", (0,
                i._)({}, p, {
                    className: (0,
                    r.classNames)("Input", m, c),
                    ref: u ? this.getRef : void 0,
                    value: this.isControlledOutside ? s : this.state.value,
                    onChange: this.onChange,
                    onFocus: this.onFocus
                }))
            }
            constructor(e) {
                super(e),
                this.onChange = e=>{
                    this.isControlledOutside || this.setState({
                        value: e.target.value
                    }),
                    this.props.onChange && this.props.onChange(e)
                }
                ,
                this.getRef = e=>{
                    this.props.getRef && ("function" == typeof this.props.getRef ? this.props.getRef(e) : this.props.getRef.current = e)
                }
                ,
                this.onFocus = e=>{
                    this.props.onFocus && this.props.onFocus(e)
                }
                ,
                void 0 !== e.value || e.isControlledOutside ? this.isControlledOutside = !0 : this.state = {
                    value: void 0 !== e.initialValue ? e.initialValue : ""
                }
            }
        }
        l.defaultProps = {
            type: "text",
            initialValue: "",
            alignment: "left"
        }
    }
    ,
    86424: (e,t,s)=>{
        s.d(t, {
            default: ()=>r
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(659397);
        const r = e=>{
            var {isSingleLine: t, className: s, children: r} = e
              , l = (0,
            o._)(e, ["isSingleLine", "className", "children"]);
            const c = (0,
            a.classNames)("InputStub", s, {
                "InputStub--singleLine": t
            });
            return (0,
            n.jsx)("div", (0,
            i._)({
                className: c
            }, l, {
                children: r
            }))
        }
    }
    ,
    821998: (e,t,s)=>{
        s.d(t, {
            default: ()=>d
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(667294)
          , r = s(639973)
          , l = s(659397);
        const c = r.default;
        const d = function(e) {
            var {onCommit: t=l.noop, value: s, postText: r="", minValue: d=-1 / 0, maxValue: h=1 / 0, allowEmpty: u, pattern: p=null, isControlledOutside: m} = e
              , v = (0,
            o._)(e, ["onCommit", "value", "postText", "minValue", "maxValue", "allowEmpty", "pattern", "isControlledOutside"]);
            const f = (0,
            a.useRef)(null)
              , [g,x] = (0,
            a.useState)(void 0 === s ? "" : s)
              , [N,w] = (0,
            a.useState)(!1);
            return (0,
            a.useEffect)((()=>{
                m && x(s)
            }
            ), [s]),
            (0,
            n.jsx)(c, (0,
            i._)({}, v, {
                ref: f,
                value: N || "" === g ? g : "function" == typeof r ? r(g || "") : g + r,
                isControlledOutside: !0,
                onFocus: ()=>{
                    if (w(!0),
                    !f.current)
                        return;
                    const e = f.current.element;
                    e && (e.value = String(g),
                    e.select())
                }
                ,
                onChange: function(e) {
                    let t = e.target.value;
                    p && !t.match(p) || x(t)
                },
                onBlur: function() {
                    if (w(!1),
                    u && "" === g)
                        return t("");
                    if ((g && g.toString().trim()) !== (s && s.toString().trim())) {
                        const e = Math.min(h, Math.max(d, parseFloat(g) || 0));
                        x(e),
                        t(e)
                    }
                },
                onKeyDown: e=>{
                    var t, s;
                    "Enter" === e.key && (null == (s = f.current) || null == (t = s.element) || t.blur())
                }
            }))
        }
    }
    ,
    824712: (e,t,s)=>{
        s.d(t, {
            default: ()=>c
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(667294)
          , r = s(659397);
        const l = e=>Math.round(100 * e)
          , c = e=>{
            var {color: t="blue", value: s, defaultValue: c=.5, className: d, size: h=1, onChange: u, formatHint: p=l} = e
              , m = (0,
            o._)(e, ["color", "value", "defaultValue", "className", "size", "onChange", "formatHint"]);
            const v = (0,
            a.useRef)()
              , f = (0,
            a.useRef)(null);
            if ((0,
            a.useEffect)((()=>{
                v.current ? v.current.setValue(s, !0) : v.current = new window.Slider(f.current,(0,
                i._)({
                    size: h,
                    value: null != s ? s : c,
                    formatHint: p,
                    onChange: u
                }, m))
            }
            ), [s]),
            c < 0 || c > 1)
                throw new Error("Bad defaultValue specified to Slider");
            return (0,
            n.jsx)("div", {
                className: (0,
                r.classNames)("SliderLegacy", `SliderLegacy--${t}`, d),
                ref: f
            })
        }
    }
    ,
    840842: (e,t,s)=>{
        s.d(t, {
            default: ()=>r
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(659397);
        const r = e=>{
            var {onClick: t, hovered: s, className: r, children: l, href: c} = e
              , d = (0,
            o._)(e, ["onClick", "hovered", "className", "children", "href"]);
            const h = (0,
            a.classNames)("Link", !!s && "Link--hovered", r);
            return c ? (0,
            n.jsx)("a", (0,
            i._)({
                onClick: t,
                href: c
            }, d, {
                className: h,
                children: l
            })) : (0,
            n.jsx)("span", (0,
            i._)({
                onClick: t
            }, d, {
                className: h,
                children: l
            }))
        }
    }
    ,
    907964: (e,t,s)=>{
        s.d(t, {
            default: ()=>r
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(659397);
        const r = e=>{
            var {children: t, className: s} = e
              , r = (0,
            o._)(e, ["children", "className"]);
            const l = (0,
            a.classNames)("LinkButton", s)
              , c = (0,
            i._)({}, r, {
                onMouseDown: e=>{
                    e.preventDefault(),
                    r.onMouseDown && r.onMouseDown(e)
                }
            });
            return (0,
            n.jsx)("button", (0,
            i._)({}, c, {
                className: l,
                children: t
            }))
        }
    }
    ,
    642144: (e,t,s)=>{
        s.d(t, {
            default: ()=>n
        });
        var i = s(785893)
          , o = s(659397);
        const n = ({border: e=!0, className: t, children: s, style: n})=>{
            const a = {
                "List--border": e
            };
            return (0,
            i.jsx)("ul", {
                className: (0,
                o.classNames)("List", a, t),
                style: n,
                children: s
            })
        }
    }
    ,
    901074: (e,t,s)=>{
        s.d(t, {
            ListActionsControl: ()=>r
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(659397);
        const r = e=>{
            var {element: t="span", alt: s, className: r} = e
              , l = (0,
            o._)(e, ["element", "alt", "className"]);
            const c = t
              , d = (0,
            a.classNames)("ListActionsControl", r);
            return (0,
            n.jsx)(c, (0,
            i._)({
                "aria-label": s,
                className: d
            }, l, {
                children: (0,
                n.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "10",
                    height: "5",
                    viewBox: "0 0 10 5",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    children: (0,
                    n.jsx)("path", {
                        d: "M5 4.8c-.2 0-.3 0-.4-.1l-4.3-3.2c-.3-.3-.4-.8-.2-1.1.2-.3.7-.4 1-.2l3.9 2.9 3.8-2.9c.3-.3.8-.2 1 .1.3.3.2.8-.1 1.1l-4.2 3.2c-.2.1-.3.2-.5.2z"
                    })
                })
            }))
        }
    }
    ,
    824375: (e,t,s)=>{
        s.d(t, {
            ListAddControl: ()=>c
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(659397)
          , r = s(36193)
          , l = s(407729);
        const c = e=>{
            var {className: t, children: s, size: c=38} = e
              , d = (0,
            o._)(e, ["className", "children", "size"]);
            const h = (0,
            a.classNames)("ListAddControl", t)
              , u = c <= 34 ? r.Icon20Add : l.Icon24Add;
            return (0,
            n.jsxs)("button", (0,
            i._)({
                className: h
            }, d, {
                children: [(0,
                n.jsx)("span", {
                    className: "ListAddControl__icon",
                    style: {
                        width: c,
                        height: c
                    },
                    children: (0,
                    n.jsx)(u, {})
                }), s]
            }))
        }
    }
    ,
    224050: (e,t,s)=>{
        s.d(t, {
            ListHeader: ()=>n
        });
        var i = s(785893)
          , o = s(659397);
        const n = ({headingElement: e="h3", extra: t, right: s, className: n, children: a})=>{
            const r = e;
            return (0,
            i.jsxs)("header", {
                className: (0,
                o.classNames)("ListHeader", n),
                children: [(0,
                i.jsx)(r, {
                    className: "ListHeader__text",
                    children: a
                }), (0,
                i.jsx)("span", {
                    className: "ListHeader__extra",
                    children: t
                }), s && (0,
                i.jsx)("span", {
                    className: "ListHeader__right",
                    children: s
                })]
            })
        }
    }
    ,
    556294: (e,t,s)=>{
        s.d(t, {
            ListIcon: ()=>a,
            ListIconColors: ()=>i
        });
        var i, o = s(785893), n = s(659397);
        !function(e) {
            e.BLUE = "blue",
            e.GREEN = "green",
            e.GRAY = "gray",
            e.RED = "red"
        }(i || (i = {}));
        const a = ({icon: e, color: t})=>(0,
        o.jsx)("div", {
            className: (0,
            n.classNames)("ListIcon", `ListIcon--${t}`),
            children: e
        })
    }
    ,
    202716: (e,t,s)=>{
        s.d(t, {
            LinkIcon: ()=>a
        });
        var i = s(434788)
          , o = s(512796)
          , n = s(785893);
        const a = e=>{
            var t = (0,
            i._)({}, (0,
            o._)(e));
            return (0,
            n.jsx)("svg", (0,
            i._)({
                width: "14",
                height: "14",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor"
            }, t, {
                "aria-hidden": "true",
                children: (0,
                n.jsx)("path", {
                    d: "M6.022 9.184a.837.837 0 01-1.187-.001 3.861 3.861 0 010-5.419l2.618-2.643a3.772 3.772 0 015.366 0c1.261 1.274 1.557 3.033.67 4.508-.296.49-.947.47-1.325.09-.275-.276-.254-.707-.077-1.019.465-.817.24-1.683-.456-2.379a2.094 2.094 0 00-2.997 0L6.023 4.956a2.143 2.143 0 00-.001 3.025.83.83 0 010 1.202zm1.95-3.166c.833.835.832 2.19-.001 3.025L5.36 11.68a2.094 2.094 0 01-2.998 0c-.695-.696-.91-1.555-.446-2.371.178-.313.199-.744-.076-1.019-.379-.38-1.03-.4-1.325.09-.888 1.474-.602 3.226.659 4.5a3.772 3.772 0 005.367 0l2.617-2.643a3.861 3.861 0 000-5.419.837.837 0 00-1.187 0 .83.83 0 000 1.2z"
                })
            }))
        }
    }
    ,
    304954: (e,t,s)=>{
        s.d(t, {
            PrivacyIcon: ()=>a
        });
        var i = s(434788)
          , o = s(512796)
          , n = s(785893);
        const a = e=>{
            var t = (0,
            i._)({}, (0,
            o._)(e));
            return (0,
            n.jsxs)("svg", (0,
            i._)({
                width: "20",
                height: "20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t, {
                children: [(0,
                n.jsx)("path", {
                    d: "M4 9.6c0-.56 0-.84.109-1.054a1 1 0 01.437-.437C4.76 8 5.04 8 5.6 8h8.8c.56 0 .84 0 1.054.109a1 1 0 01.437.437C16 8.76 16 9.04 16 9.6v4.8c0 .56 0 .84-.109 1.054a1 1 0 01-.437.437C15.24 16 14.96 16 14.4 16H5.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C4 15.24 4 14.96 4 14.4V9.6z",
                    fill: "#fff"
                }), (0,
                n.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.2 6a2.2 2.2 0 00-4.4 0v4a2.2 2.2 0 104.4-.001V6zM10 2a4 4 0 00-4 4v4a4 4 0 108-.001V6A4 4 0 0010 2z",
                    fill: "#fff"
                })]
            }))
        }
    }
    ,
    871414: (e,t,s)=>{
        s.d(t, {
            TimeIcon: ()=>a
        });
        var i = s(434788)
          , o = s(512796)
          , n = s(785893);
        const a = e=>{
            var t = (0,
            i._)({}, (0,
            o._)(e));
            return (0,
            n.jsx)("svg", (0,
            i._)({
                width: "16",
                height: "16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t, {
                children: (0,
                n.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.8 8a6.2 6.2 0 1112.4 0A6.2 6.2 0 011.8 8zM0 8a8 8 0 1116 0A8 8 0 010 8zm8.9-3a.9.9 0 00-1.8 0v4a.9.9 0 00.498.805l2 1a.9.9 0 10.804-1.61L8.9 8.444V5z",
                    fill: "#fff"
                })
            }))
        }
    }
    ,
    512334: (e,t,s)=>{
        s.d(t, {
            default: ()=>l
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(659397)
          , r = s(658508);
        const l = e=>{
            var {icon: t, aside: s, chevron: l=!1, selectable: c=!0, border: d=!0, className: h, children: u, active: p, canBeHovered: m=!0} = e
              , v = (0,
            o._)(e, ["icon", "aside", "chevron", "selectable", "border", "className", "children", "active", "canBeHovered"]);
            const f = {
                "ListItem--chevron": l,
                "ListItem--selectable": c,
                "ListItem--border": d,
                "ListItem--active": p,
                "ListItem--can-be-hovered": m
            };
            return (0,
            n.jsxs)("li", (0,
            i._)({}, v, {
                className: (0,
                a.classNames)("ListItem", f, h),
                children: [t && (0,
                n.jsx)("div", {
                    className: "ListItem__icon",
                    children: t
                }), (0,
                n.jsx)("div", {
                    className: "ListItem__main",
                    children: u
                }), (0,
                n.jsx)("div", {
                    className: "ListItem__aside",
                    children: s
                }), l && (0,
                n.jsx)(r.Icon28ChevronRightOutline, {
                    width: 26,
                    height: 26,
                    style: {
                        color: "var(--vkui--color_icon_tertiary)"
                    }
                })]
            }))
        }
    }
    ,
    883951: (e,t,s)=>{
        s.d(t, {
            ListMore: ()=>r
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(659397);
        const r = e=>{
            var {children: t, className: s} = e
              , r = (0,
            o._)(e, ["children", "className"]);
            return (0,
            n.jsx)("button", (0,
            i._)({
                className: (0,
                a.classNames)("ListMore", s)
            }, r, {
                children: t
            }))
        }
    }
    ,
    375135: (e,t,s)=>{
        s.d(t, {
            ListMultiSelectControl: ()=>r
        });
        var i = s(785893)
          , o = s(659397)
          , n = s(690839)
          , a = s(299715);
        const r = ({isSelected: e})=>{
            const t = (0,
            o.classNames)("ListMultiSelectControl", {
                "ListMultiSelectControl--checked": e
            });
            let s;
            return s = e ? (0,
            i.jsx)(n.Icon24CheckCircleOn, {}) : (0,
            i.jsx)(a.Icon24CheckCircleOff, {}),
            (0,
            i.jsx)("div", {
                role: "switch",
                "aria-checked": e,
                className: t,
                children: s
            })
        }
    }
    ,
    681088: (e,t,s)=>{
        s.d(t, {
            default: ()=>n
        });
        var i = s(785893)
          , o = s(659397);
        const n = ({photos: e})=>(0,
        i.jsx)("div", {
            className: (0,
            o.classNames)("MembersGrid", `MembersGrid--${Math.min(e.length, 4)}`),
            children: e.map(((e,t)=>(0,
            i.jsx)("span", {
                className: "MembersGrid__i",
                style: {
                    backgroundImage: `url(${e})`
                }
            }, t)))
        })
    }
    ,
    442717: (e,t,s)=>{
        s.d(t, {
            Modal: ()=>d
        });
        var i = s(434788)
          , o = s(785893)
          , n = s(659397)
          , a = s(240567)
          , r = s(549309)
          , l = s(253434)
          , c = s(652813);
        const d = e=>{
            const {className: t, appearance: s="white", title: d, actionButtons: h, onClose: u, children: p, footerHint: m, hasScroll: v=!1, backText: f, onBack: g} = e
              , x = (0,
            n.classNames)("Modal", `Modal--${s}`, t);
            return (0,
            o.jsxs)(a.BaseModal, (0,
            i._)({}, e, {
                className: x,
                children: [(0,
                o.jsx)(r.ModalHeader, {
                    title: d,
                    onClose: u,
                    backText: f,
                    onBack: g
                }), Boolean(p) && (0,
                o.jsx)(l.ModalBody, {
                    hasScroll: v,
                    children: p
                }), (0,
                o.jsx)(c.ModalFooter, {
                    actionButtons: h,
                    hint: m
                })]
            }))
        }
        ;
        d.Header = r.ModalHeader,
        d.Body = l.ModalBody,
        d.Footer = c.ModalFooter
    }
    ,
    253434: (e,t,s)=>{
        s.d(t, {
            ModalBody: ()=>a
        });
        var i = s(785893)
          , o = s(364517)
          , n = s(659397);
        const a = ({children: e, hasScroll: t=!0, className: s})=>t ? (0,
        i.jsx)(o.Scroll, {
            className: (0,
            n.classNames)("ModalBody", s),
            children: e
        }) : (0,
        i.jsx)("div", {
            className: (0,
            n.classNames)("ModalBody", s),
            children: e
        })
    }
    ,
    930811: (e,t,s)=>{
        s.d(t, {
            ModalClose: ()=>n
        });
        var i = s(785893)
          , o = s(659397);
        const n = ({className: e, onClose: t})=>{
            const s = (0,
            o.classNames)("ModalClose", e);
            return (0,
            i.jsx)("button", {
                className: s,
                type: "button",
                onClick: t,
                "aria-label": "Закрыть",
                children: (0,
                i.jsx)("div", {
                    className: "ModalClose__wrap",
                    children: (0,
                    i.jsx)("div", {
                        className: "ModalClose__icon"
                    })
                })
            })
        }
    }
    ,
    652813: (e,t,s)=>{
        s.d(t, {
            ModalFooter: ()=>n
        });
        var i = s(785893)
          , o = s(659397);
        const n = ({className: e, actionButtons: t, hint: s, children: n})=>(0,
        i.jsx)("div", {
            className: (0,
            o.classNames)("ModalFooter", e),
            children: (0,
            i.jsxs)("div", {
                className: "ModalFooter__inner",
                children: [s && (0,
                i.jsx)("div", {
                    className: "ModalFooter__hint",
                    role: "presentation",
                    children: s
                }), n && (0,
                i.jsx)("div", {
                    className: "ModalFooter__content",
                    children: n
                }), t]
            })
        })
    }
    ,
    549309: (e,t,s)=>{
        s.d(t, {
            ModalHeader: ()=>a
        });
        var i = s(785893)
          , o = s(659397)
          , n = s(315954);
        const a = ({className: e, title: t, onClose: s, backText: a, onBack: r})=>{
            const l = (0,
            o.classNames)("ModalHeader", e);
            return (0,
            i.jsxs)("div", {
                className: l,
                children: [a && (0,
                i.jsx)("button", {
                    className: "ModalHeader__back",
                    onClick: r,
                    children: a
                }), (0,
                i.jsx)("h1", {
                    className: "ModalHeader__title",
                    children: t
                }), (0,
                i.jsxs)("button", {
                    className: "ModalHeader__cross",
                    type: "button",
                    onClick: s,
                    children: [(0,
                    i.jsx)(n.Icon24Cancel, {
                        width: 22,
                        height: 22
                    }), "Закрыть"]
                })]
            })
        }
    }
    ,
    617502: (e,t,s)=>{
        s.d(t, {
            default: ()=>a
        });
        var i = s(785893)
          , o = s(667294)
          , n = s(659397);
        const a = e=>{
            const {className: t} = e
              , [s,a] = (0,
            o.useState)(!1);
            return (0,
            o.useEffect)((()=>{
                const e = setTimeout((()=>{
                    a(!0)
                }
                ), 140);
                return ()=>clearTimeout(e)
            }
            ), []),
            s ? (0,
            i.jsxs)("div", {
                className: (0,
                n.classNames)("ModalPreloader", t),
                children: [(0,
                i.jsxs)("div", {
                    className: "ModalPreloader__animation",
                    children: [(0,
                    i.jsx)("div", {
                        className: "ModalPreloader__dot"
                    }), (0,
                    i.jsx)("div", {
                        className: "ModalPreloader__dot"
                    }), (0,
                    i.jsx)("div", {
                        className: "ModalPreloader__dot"
                    })]
                }), (0,
                i.jsx)("div", {
                    className: "ModalPreloader__background"
                })]
            }) : (0,
            i.jsx)(i.Fragment, {})
        }
    }
    ,
    197264: (e,t,s)=>{
        s.d(t, {
            default: ()=>l
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(667294)
          , r = s(659397);
        const l = e=>{
            var {className: t="", title: s="", isSaved: l=!1, savedTitle: c="", children: d} = e
              , h = (0,
            o._)(e, ["className", "title", "isSaved", "savedTitle", "children"]);
            const [u,p] = (0,
            a.useState)(!1);
            (0,
            a.useEffect)((()=>{
                c && p(l)
            }
            ), [l]);
            let m = null;
            if (s) {
                let e = null;
                c && (e = (0,
                n.jsx)("div", {
                    className: (0,
                    r.classNames)("PageBlock__savedTitle", {
                        "PageBlock__savedTitle--shown": u
                    }),
                    children: c
                })),
                m = (0,
                n.jsxs)("h2", {
                    className: "PageBlock__header",
                    children: [(0,
                    n.jsx)("div", {
                        className: "PageBlock__headerTitle",
                        children: s
                    }), e]
                })
            }
            return (0,
            n.jsxs)("div", (0,
            i._)({
                className: (0,
                r.classNames)("PageBlock", t)
            }, h, {
                children: [m, d]
            }))
        }
    }
    ,
    169968: (e,t,s)=>{
        s.d(t, {
            PageColumns: ()=>o
        });
        var i = s(785893);
        const o = ({narrow: e, children: t})=>(0,
        i.jsxs)("div", {
            className: "wide_column_left",
            children: [(0,
            i.jsx)("div", {
                className: "narrow_column_wrap",
                children: (0,
                i.jsx)("div", {
                    className: "narrow_column",
                    id: "narrow_column",
                    children: e
                })
            }), (0,
            i.jsx)("div", {
                className: "wide_column_wrap",
                children: (0,
                i.jsx)("div", {
                    className: "wide_column",
                    id: "wide_column",
                    role: "main",
                    children: t
                })
            })]
        })
    }
    ,
    352699: (e,t,s)=>{
        s.d(t, {
            PhotoAreaSelector: ()=>u,
            Targets: ()=>i
        });
        var i, o = s(785893), n = s(667294), a = s(659397), r = s(706987);
        !function(e) {
            e.NONE = "none",
            e.MAIN = "main",
            e.PREVIEW_50 = "50",
            e.PREVIEW_100 = "100",
            e.NW = "nw",
            e.NE = "ne",
            e.N = "n",
            e.SW = "sw",
            e.SE = "se",
            e.S = "s",
            e.W = "w",
            e.E = "e"
        }(i || (i = {}));
        const l = ["nw", "ne", "n", "sw", "se", "s", "w", "e"]
          , c = ["nw", "ne", "sw", "se"]
          , d = ["main", "50", "100"]
          , h = [...l, ...d]
          , u = e=>{
            const {className: t, minWidth: s, minHeight: i, rect: u, rotate: m=0, onCropUpdated: v, onCropResized: f, preview50: g=!1, preview100: x=!1, isSquare: N=!1, customCropArea: w} = e
              , _ = (0,
            n.useRef)(null)
              , S = N ? 1 : e.minAspectRatio || 1
              , b = N ? 1 : e.maxAspectRatio || 1
              , C = N ? c : l
              , y = u || (0,
            r.getInitRect)(e)
              , [j,M,k,E,T,L,R] = (0,
            r.getThumbSize)(e, y);
            function P(e) {
                return e * R
            }
            function O(e) {
                return e / R
            }
            const D = (0,
            r.getInitCrop)(e, y, S, b, O)
              , [H,I] = (0,
            n.useState)("none")
              , [A,W] = (0,
            n.useState)(D)
              , [B,z] = (0,
            n.useState)(D)
              , [$,F] = (0,
            n.useState)({
                x: 0,
                y: 0
            })
              , [V,U] = (0,
            n.useState)({
                x: 0,
                y: 0
            })
              , [K,Z] = (0,
            n.useState)({
                x: 0,
                y: 0
            })
              , [X,Y] = (0,
            n.useState)(!1)
              , [q,G] = (0,
            n.useState)(!1);
            (0,
            n.useEffect)((function() {
                const t = (0,
                r.getInitCrop)(e, y, S, b, O);
                t.left === A.left && t.top === A.top && t.width === A.width && t.height === A.height || (W(t),
                z(t)),
                v({
                    left: Math.floor(t.left),
                    top: Math.floor(t.top),
                    width: Math.floor(t.width),
                    height: Math.floor(t.height)
                })
            }
            ), [m]);
            const J = h.reduce((function(e, t) {
                var s;
                return e[t] = (s = t,
                function(e) {
                    const {pageX: t, pageY: i} = e
                      , o = (0,
                    r.getXY)(_.current);
                    let n = {
                        x: A.left,
                        y: A.top
                    };
                    if (l.includes(s)) {
                        const e = [s.charAt(0), s.length > 1 ? s.charAt(1) : s.charAt(0)];
                        n = {
                            x: n.x + ("w" == e[1] ? 0 : A.width),
                            y: n.y + ("n" == e[0] ? 0 : A.height)
                        }
                    }
                    I(s),
                    F(o),
                    z(A),
                    U({
                        x: t,
                        y: i
                    }),
                    Z(n),
                    Y(!0),
                    e.stopPropagation(),
                    e.preventDefault()
                }
                ),
                e
            }
            ), {})
              , Q = function(e) {
                const {pageX: t, pageY: o} = e
                  , n = {
                    x: t,
                    y: o
                };
                if (d.includes(H))
                    (0,
                    r.move)(y, A, B, V, n, W, O),
                    document.body.style.cursor = "move";
                else if (l.includes(H)) {
                    var a;
                    (0,
                    r.resize)(y, n, K, A, H, $, s, i, S, b, O, Z, I, W),
                    null == (a = f) || a(e),
                    document.body.style.cursor = `${H}-resize`
                }
                e.stopPropagation(),
                e.preventDefault()
            }
              , ee = function(e) {
                I("none"),
                Y(!1),
                v(A),
                document.body.style.cursor = "",
                e.stopPropagation(),
                e.preventDefault()
            };
            (0,
            n.useEffect)((function() {
                return X ? (window.addEventListener("mousemove", Q),
                window.addEventListener("mouseup", ee)) : (window.removeEventListener("mousemove", Q),
                window.removeEventListener("mouseup", ee)),
                function() {
                    window.removeEventListener("mousemove", Q),
                    window.removeEventListener("mouseup", ee)
                }
            }
            ), [X, Q, ee]);
            const te = (0,
            a.classNames)("PhotoAreaSelector", X ? "PhotoAreaSelector--drag-yes" : "PhotoAreaSelector--drag-no", t)
              , [se,ie,oe,ne,ae,re] = (0,
            r.rectToThumbSize)(A, y, P)
              , le = m % 4 * 90;
            let ce = "center";
            return 1 === m ? ce = `${E / 2}px ${E / 2}px` : 3 === m && (ce = `${k / 2}px ${k / 2}px`),
            (0,
            o.jsxs)("div", {
                className: te,
                children: [(0,
                o.jsxs)("div", {
                    className: "PhotoAreaSelector__mainWrapper",
                    style: {
                        width: j,
                        height: M
                    },
                    children: [(0,
                    o.jsx)("div", {
                        className: "PhotoAreaSelector__frameWrapper",
                        style: {
                            width: j,
                            height: M
                        },
                        children: (0,
                        o.jsx)("img", {
                            src: e.imgSrc,
                            style: {
                                transformOrigin: ce,
                                width: k,
                                height: E,
                                willChange: "transform",
                                transform: `translate(${T}px, ${L}px) rotate(${le}deg)`
                            },
                            ref: _
                        })
                    }), (0,
                    o.jsx)("div", {
                        className: "PhotoAreaSelector__faded"
                    }), (0,
                    o.jsx)("div", {
                        className: "PhotoAreaSelector__linza",
                        style: {
                            width: se,
                            height: ie
                        },
                        children: (0,
                        o.jsx)("div", {
                            className: "PhotoAreaSelector__linzaFrame",
                            style: {
                                transform: `translate(${oe}px, ${ne}px)`
                            },
                            onMouseDown: J.main,
                            children: (0,
                            o.jsxs)("div", {
                                className: "PhotoAreaSelector__linzaBorder",
                                children: [w || null, (0,
                                o.jsx)("img", {
                                    className: (0,
                                    a.classNames)("PhotoAreaSelector__linzaImage", {
                                        "PhotoAreaSelector__linzaImage--loaded": q
                                    }),
                                    onLoad: ()=>G(!0),
                                    src: e.imgSrc,
                                    style: {
                                        transformOrigin: ce,
                                        width: k,
                                        height: E,
                                        transform: `translate(${-ae}px, ${-re}px) rotate(${le}deg)`
                                    }
                                })]
                            })
                        })
                    }), (0,
                    o.jsx)(o.Fragment, {
                        children: C.map((function(e) {
                            let t = 0
                              , s = 0;
                            if (1 === e.length)
                                "n" === e || "s" === e ? (t = P(A.left + A.width / 2) - 5,
                                s = P(A.top + ("n" === e ? 0 : A.height)) - 5) : (t = P(A.left + ("w" === e ? 0 : A.width)) - 5,
                                s = P(A.top + A.height / 2) - 5);
                            else {
                                const i = e.charAt(0)
                                  , o = e.charAt(1);
                                t = P(A.left + ("w" === o ? 0 : A.width)) - 5,
                                s = P(A.top + ("n" === i ? 0 : A.height)) - 5
                            }
                            const i = (0,
                            a.classNames)("PhotoAreaSelector__handler", `PhotoAreaSelector__handler--type-${e}`, X ? "PhotoAreaSelector__handler--dragged-yes" : "PhotoAreaSelector__handler--dragged-no");
                            return (0,
                            o.jsx)("div", {
                                className: i,
                                style: {
                                    transform: `translate(${t}px, ${s}px)`
                                },
                                onMouseDown: J[e]
                            }, e)
                        }
                        ))
                    })]
                }), N && (g || x) ? (0,
                o.jsxs)("div", {
                    className: "PhotoAreaSelector__previewsWrapper",
                    children: [x && p(100, A, y, e, J[50]), g && p(50, A, y, e, J[100])]
                }) : null]
            })
        }
        ;
        function p(e, t, s, i, n) {
            const {imgWidth: r, imgHeight: l, rotate: c=0} = i
              , d = (0,
            a.classNames)("PhotoAreaSelector__preview", `PhotoAreaSelector__preview--${e}`)
              , h = (0,
            a.classNames)("PhotoAreaSelector__previewWrapper", `PhotoAreaSelector__previewWrapper--${e}`)
              , u = -Math.floor((s.left + t.left) * e / t.width)
              , p = -Math.floor((s.top + t.top) * e / t.width)
              , m = Math.ceil(r * e / t.width)
              , v = Math.ceil(l * e / t.height)
              , f = c % 4 * 90;
            let g = "center";
            return 1 === c ? g = `${v / 2}px ${v / 2}px` : 3 === c && (g = `${m / 2}px ${m / 2}px`),
            (0,
            o.jsx)("div", {
                className: d,
                children: (0,
                o.jsx)("div", {
                    onMouseDown: n,
                    className: h,
                    children: (0,
                    o.jsx)("img", {
                        src: i.imgSrc,
                        style: {
                            width: m,
                            height: v,
                            transformOrigin: g,
                            willChange: "transform",
                            transform: `translate(${u}px, ${p}px) rotate(${f}deg)`
                        }
                    })
                })
            })
        }
    }
    ,
    706987: (e,t,s)=>{
        s.d(t, {
            getInitCrop: ()=>c,
            getInitRect: ()=>r,
            getThumbSize: ()=>l,
            getXY: ()=>u,
            move: ()=>a,
            rectToThumbSize: ()=>d,
            resize: ()=>n
        });
        var i = s(434788)
          , o = s(352699);
        function n(e, t, s, i, n, a, r, l, c, d, u, m, v, f) {
            const g = function(e, t, s, i) {
                return {
                    x: p(Math.max(0, i(e.x - t.x) - s.left)),
                    y: p(Math.max(0, i(e.y - t.y) - s.top))
                }
            }(t, a, e, u);
            let x = g.x - s.x
              , N = g.y - s.y;
            if (r = u(r),
            l = u(l),
            !x && !N)
                return;
            const {width: w, height: _} = e;
            let {left: S, top: b, width: C, height: y} = i
              , j = 0
              , M = 0;
            2 === n.length ? (j = n.startsWith(o.Targets.N) ? -1 : 1,
            M = n.charAt(1) === o.Targets.W ? -1 : 1) : (j = n === o.Targets.N ? -1 : n === o.Targets.S ? 1 : 0,
            M = n === o.Targets.W ? -1 : n === o.Targets.E ? 1 : 0),
            j && y + h(j) * N < l / 2 && (j = -j,
            N = g.y - (i.top + (j > 0 ? i.height : 0))),
            M && C + h(M) * x < r / 2 && (M = -M,
            x = g.x - (i.left + (M > 0 ? i.width : 0)));
            const k = j ? h(j) : 0
              , E = M ? h(M) : 0;
            c > 0 && C + E * x < (y + k * N) * c && (M ? x = E * Math.ceil((y + k * N) * c - C) : N = k * Math.floor(C / c - y)),
            d > 0 && C + E * x > (y + k * N) * d && (j ? N = k * Math.ceil((C + E * x) / d - y) : x = E * Math.floor(y * d - C)),
            j && (y += h(j) * N,
            y < l ? (b -= j > 0 ? 0 : l - y - N,
            y = l) : b += j > 0 ? 0 : N),
            M && (C += h(M) * x,
            C < r ? (S -= M > 0 ? 0 : r - C - x,
            C = r) : S += M > 0 ? 0 : x);
            let T = 0
              , L = 0
              , R = 0
              , P = 0;
            S < 0 ? (T = S,
            S = 0) : C > w - S && (T = w - S - C),
            T && (C += T,
            c > 0 && C < c * y && (P = Math.floor(C / c) - y,
            y += P,
            b -= j > 0 ? 0 : P)),
            b < 0 ? (L = b,
            b = 0) : y > _ - b && (L = _ - b - y),
            L && (y += L,
            d > 0 && C > d * y && (R = Math.floor(y * d) - C,
            C += R,
            S -= M > 0 ? 0 : R));
            let O = j > 0 ? o.Targets.S : j < 0 ? o.Targets.N : ""
              , D = M > 0 ? o.Targets.E : M < 0 ? o.Targets.W : "";
            const H = {
                left: p(S),
                top: p(b),
                width: p(C),
                height: p(y)
            };
            if (i.top !== H.top || i.left !== H.left || i.width !== H.width || i.height !== H.height) {
                f(H),
                m({
                    x: H.left + (M > 0 ? H.width : 0),
                    y: H.top + (j > 0 ? H.height : 0)
                });
                const e = O + D;
                e !== n && v(e)
            }
        }
        function a(e, t, s, o, n, a, r) {
            const l = Math.round(s.left + r(n.x - o.x))
              , c = Math.round(s.top + r(n.y - o.y))
              , d = p(Math.min(Math.floor(e.width - t.width), Math.max(0, l)))
              , h = p(Math.min(Math.floor(e.height - t.height), Math.max(0, c)));
            t.left === d && t.top === h || a((0,
            i._)({}, t, {
                left: d,
                top: h
            }))
        }
        function r(e) {
            const {rotate: t=0} = e;
            return {
                left: 0,
                top: 0,
                width: t % 2 ? e.imgHeight : e.imgWidth,
                height: t % 2 ? e.imgWidth : e.imgHeight
            }
        }
        function l(e, t) {
            const {previewWidth: s, previewHeight: i, imgWidth: o, imgHeight: n} = e
              , {left: a, top: r, width: l, height: c} = t
              , d = l - a
              , h = c - r;
            if (s) {
                let e = s
                  , t = e / l
                  , u = Math.floor(c * t);
                i && d < h && (u = i,
                t = u / c,
                e = Math.floor(l * t));
                return [e, u, e * (o / l), u * (n / c), -1 * a * t, -1 * r * t, t]
            }
            return [d, h, o, n, -a, -r, 1]
        }
        function c(e, t, s, i, o) {
            if (e.cropRect)
                return e.cropRect;
            const {width: n, height: a} = t;
            let {minWidth: r, minHeight: l} = e;
            r = o(r),
            l = o(l);
            const c = {
                left: Math.floor(.1 * n),
                top: Math.floor(.1 * a),
                width: Math.floor(.8 * n),
                height: Math.floor(.8 * a)
            };
            if (c.width < r) {
                const e = r > n ? n : r;
                c.left = Math.max(0, c.left - Math.floor((e - c.width) / 2)),
                c.width = e
            }
            if (c.height < l) {
                const e = l > a ? a : l;
                c.left = Math.max(0, c.top - Math.floor((e - c.height) / 2)),
                c.height = e
            }
            return c.width < c.height * s && (c.top = Math.max(0, c.top - Math.floor((c.width / s - c.height) / 4)),
            c.height = Math.floor(c.width / s)),
            c.width > c.height * i && (c.left = Math.max(0, c.left - Math.floor((c.height * i - c.width) / 2)),
            c.width = Math.floor(c.height * i)),
            (n < c.left + c.width || a < c.top + c.height) && (n < a ? (c.left = 0,
            c.top = Math.max(0, Math.floor((a - n) / 2)),
            c.width = n,
            c.height = n) : (c.left = Math.max(0, Math.floor((n - a) / 2)),
            c.top = 0,
            c.width = a,
            c.height = a)),
            c
        }
        function d(e, t, s) {
            return [p(s(e.width)), p(s(e.height)), p(s(e.left)), p(s(e.top)), p(s(e.left + t.left)), p(s(e.top + t.top))]
        }
        function h(e) {
            return e < 0 ? -1 : 1
        }
        function u(e) {
            const t = e.ownerDocument
              , s = e.getBoundingClientRect();
            if (!t)
                return {
                    x: 0,
                    y: 0
                };
            const i = t.documentElement;
            return {
                x: s.left + i.scrollLeft - (i.clientLeft || 0),
                y: s.top + i.scrollTop - (i.clientTop || 0)
            }
        }
        function p(e) {
            return Number(e.toFixed(2))
        }
    }
    ,
    515190: (e,t,s)=>{
        s.d(t, {
            Popper: ()=>d
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(667294)
          , r = s(120773)
          , l = s(814833)
          , c = s(659397);
        const d = (0,
        a.forwardRef)((function(e, t) {
            var {open: s=!0, position: d="auto", mode: h="side", align: u="auto", attachTarget: p=document.body, content: m, children: v} = e
              , f = (0,
            o._)(e, ["open", "position", "mode", "align", "attachTarget", "content", "children"]);
            const g = (0,
            a.useRef)(null)
              , x = (0,
            l.useCombinedRefs)(t, g)
              , [N,w] = (0,
            a.useState)(null)
              , [_,S] = (0,
            a.useState)(null)
              , [b,C] = (0,
            a.useState)(null)
              , y = (0,
            i._)({}, v.props, {
                ref: x
            });
            return (0,
            a.useEffect)((()=>{
                if (x && x.current) {
                    const [e,t,i] = function(e, t, s, i, o, n) {
                        if (!n)
                            return [null, null, null];
                        const a = "auto";
                        if (!e)
                            return [{
                                top: 0,
                                left: 0,
                                width: 0,
                                height: 0
                            }, o === a ? "left" : o, i === a ? "b" : i];
                        const r = (0,
                        c.getOffsetRect)(e)
                          , l = (0,
                        c.getOffsetRect)(t)
                          , d = i === a || o === a
                          , h = d ? window.innerWidth : 0
                          , u = d ? window.innerHeight : 0
                          , p = d ? window.pageYOffset || document.documentElement.scrollTop : 0
                          , m = d ? window.pageXOffset || document.documentElement.scrollLeft : 0;
                        if (i === a) {
                            const e = r.top - p;
                            i = p + u - r.top - r.height > e ? "b" : "t"
                        }
                        if (o === a) {
                            const e = r.left + .5 * r.width
                              , t = m + 2 * h / 3;
                            o = e >= m + h / 3 && e <= t ? "center" : e > t ? "right" : "left"
                        }
                        let v = r.left
                          , f = r.top;
                        if ("side" === s)
                            return [{
                                top: ("b" === i ? f + r.height : f) - l.top,
                                left: ("r" === i ? v + r.width : v) - l.left,
                                width: "t" === i || "b" === i ? r.width : 0,
                                height: "l" === i || "r" === i ? r.height : 0
                            }, o, i];
                        switch (i) {
                        case "t":
                            v += .5 * r.width;
                            break;
                        case "r":
                            v += r.width,
                            f += .5 * r.height;
                            break;
                        case "b":
                            v += .5 * r.width,
                            f += r.height;
                            break;
                        case "l":
                            f += .5 * r.height
                        }
                        return [{
                            top: f - l.top,
                            left: v - l.left,
                            width: 0,
                            height: 0
                        }, o, i]
                    }(x.current, p, h, d, u, s);
                    w(e),
                    S(t),
                    C(i)
                }
            }
            ), [h, d, u, x.current, s, p]),
            (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                a.cloneElement)(v, y), s && (0,
                n.jsx)(r.WithPortal, (0,
                i._)({}, f, {
                    className: (0,
                    c.classNames)("Popper", _ && `Popper--${_}`, b && `Popper--${b}`, f.className),
                    "data-align": _,
                    "data-position": b,
                    portalContainerParent: p,
                    style: N || void 0,
                    children: m
                }))]
            })
        }
        ))
    }
    ,
    159868: (e,t,s)=>{
        s.d(t, {
            default: ()=>l
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(659397);
        const r = e=>{
            const {inverted: t, size: s, className: r} = e
              , l = (0,
            o._)(e, ["inverted", "size", "className"])
              , c = (0,
            a.classNames)("Progress", {
                "Progress--inverted": !!t
            }, `Progress--size-${s}`, r);
            return (0,
            n.jsxs)("div", (0,
            i._)({
                className: c
            }, l, {
                children: [(0,
                n.jsx)("div", {
                    className: "Progress__item"
                }), (0,
                n.jsx)("div", {
                    className: "Progress__item"
                }), (0,
                n.jsx)("div", {
                    className: "Progress__item"
                })]
            }))
        }
        ;
        r.defaultProps = {
            inverted: !1,
            size: "s"
        };
        const l = r
    }
    ,
    720258: (e,t,s)=>{
        s.d(t, {
            connect: ()=>c,
            default: ()=>l
        });
        var i = s(434788)
          , o = s(785893)
          , n = s(667294);
        const {Provider: a, Consumer: r} = (0,
        n.createContext)({})
          , l = a;
        function c(e) {
            return class extends n.Component {
                componentDidMount() {
                    this.store.subscribe(this.onUpdate)
                }
                componentWillUnmount() {
                    this.store.unsubscribe(this.onUpdate)
                }
                render() {
                    return (0,
                    o.jsx)(r, {
                        children: t=>(this.store || (this.store = t),
                        (0,
                        o.jsx)(e, (0,
                        i._)({}, this.props, {
                            store: t
                        })))
                    })
                }
                constructor(...e) {
                    super(...e),
                    this.onUpdate = ()=>{
                        this.setState({})
                    }
                }
            }
        }
    }
    ,
    422536: (e,t,s)=>{
        s.d(t, {
            default: ()=>h
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(667294)
          , r = s(659397)
          , l = s(758021)
          , c = s(512334)
          , d = s(85196);
        class h extends a.PureComponent {
            render() {
                const e = this.props
                  , {className: t, tokens: s, onSelect: a, renderToken: h, onRemoveToken: u, removeTokenPlaceholder: p, value: m, placeholder: v, useInfiniteScroll: f, loadMore: g, hasMore: x, virtualized: N, notFoundText: w, children: _, emptyText: S, isSearching: b, renderSuggest: C, useSuggestsWrapper: y, data: j, renderInput: M, opened: k, badge: E, disableEmptyList: T} = e
                  , L = (0,
                o._)(e, ["className", "tokens", "onSelect", "renderToken", "onRemoveToken", "removeTokenPlaceholder", "value", "placeholder", "useInfiniteScroll", "loadMore", "hasMore", "virtualized", "notFoundText", "children", "emptyText", "isSearching", "renderSuggest", "useSuggestsWrapper", "data", "renderInput", "opened", "badge", "disableEmptyList"])
                  , R = f ? l.default : "div"
                  , P = f ? {
                    loadMore: g,
                    hasMore: x,
                    virtualized: N,
                    useCapture: !1
                } : {}
                  , O = _ ? [].concat(_) : []
                  , D = !j && 0 === O.length || !!j && 0 === j.length && (m || S) && !b
                  , H = (0,
                n.jsxs)(n.Fragment, {
                    children: [D && !T && (0,
                    n.jsx)("div", {
                        className: "MultiSelect__empty",
                        children: (0,
                        n.jsx)("div", {
                            className: "MultiSelect__emptyIn",
                            children: m ? w : S
                        })
                    }), (0,
                    n.jsx)(R, (0,
                    i._)({
                        className: "MultiSelect__scroll",
                        ref: this.scrollContainerRef
                    }, P, {
                        children: j ? j.map((e=>C(e, this.onSelect))) : O.map((e=>C ? C(e, this.onSelect) : (0,
                        n.jsx)(c.default, {
                            className: "MultiSelect__suggestsItem",
                            "data-id": e.props["data-id"],
                            onClick: this.onSelect,
                            children: e
                        }, e.key)))
                    }))]
                })
                  , I = M ? M() : (0,
                n.jsx)("div", {
                    className: "MultiSelect__search",
                    ref: this.searchContainerRef,
                    children: (0,
                    n.jsx)(d.default, (0,
                    i._)({
                        id: this.inputId,
                        tokens: s,
                        onRemoveToken: u,
                        removeTokenTooltip: p,
                        removeTokenAriaLabel: p,
                        placeholder: v,
                        onChange: this.onChange,
                        onSubmit: ()=>{}
                        ,
                        renderToken: h,
                        value: m
                    }, L, {
                        className: "MultiSelect__searchInput"
                    }))
                });
                return (0,
                n.jsxs)("div", {
                    className: (0,
                    r.classNames)("MultiSelect", t),
                    children: [I, E, (void 0 === k || !0 === k) && (y ? (0,
                    n.jsx)("div", {
                        className: "MultiSelect__suggestsWrapper",
                        children: H
                    }) : H)]
                })
            }
            constructor(e) {
                super(e),
                this.onRemoveToken = e=>{
                    const t = this.searchContainer && this.searchContainer.offsetHeight;
                    this.props.onRemoveToken(e.target.getAttribute("data-id")).then((()=>{
                        (t || 0 === t) && this.updateScroll(t)
                    }
                    ))
                }
                ,
                this.onChange = e=>{
                    const t = e.target.value;
                    t !== this.value && (this.value = t,
                    this.props.onChange(e),
                    this.scrollContainer.scrollTop = 0)
                }
                ,
                this.onSelect = e=>{
                    const t = this.searchContainer && this.searchContainer.offsetHeight;
                    this.props.onSelect(e.currentTarget.getAttribute("data-id")).then((()=>{
                        (t || 0 === t) && this.updateScroll(t)
                    }
                    ))
                }
                ,
                this.updateScroll = e=>{
                    const t = this.searchContainer.offsetHeight;
                    this.searchContainer.querySelector("#" + this.inputId).focus(),
                    this.searchContainer.scrollTop = this.searchContainer.scrollHeight,
                    e !== t && (this.scrollContainer.scrollTop = this.scrollContainer.scrollTop + t - e)
                }
                ,
                this.searchContainerRef = e=>{
                    this.searchContainer = e
                }
                ,
                this.scrollContainerRef = e=>{
                    let t = e;
                    if (e && e.container)
                        for (t = e; t.container; )
                            t = t.container;
                    this.scrollContainer = t
                }
                ,
                this.value = e.value,
                this.inputId = "token-input-" + Math.floor(1e6 * Math.random()).toString(16)
            }
        }
        h.defaultProps = {
            removeTokenPlaceholder: "",
            placeholder: "",
            value: "",
            useInfiniteScroll: !1,
            notFoundText: "Not found",
            useSuggestsWrapper: !1
        }
    }
    ,
    554267: (e,t,s)=>{
        s.d(t, {
            default: ()=>r
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(659397);
        const r = e=>{
            const {className: t, children: s} = e
              , r = (0,
            o._)(e, ["className", "children"])
              , l = (0,
            a.classNames)("Radio", t, e.disabled && "Radio--disabled");
            return (0,
            n.jsxs)("label", {
                className: l,
                children: [(0,
                n.jsx)("input", (0,
                i._)({
                    className: "Radio__input Radio__visuallyHidden",
                    type: "radio"
                }, r)), (0,
                n.jsx)("span", {
                    className: "Radio__control"
                }), Boolean(s) && (0,
                n.jsx)("span", {
                    className: "Radio__text",
                    children: s
                })]
            })
        }
    }
    ,
    286049: (e,t,s)=>{
        s.d(t, {
            Scroll: ()=>c,
            ScrollContext: ()=>l
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(667294)
          , r = s(659397);
        const l = (0,
        a.createContext)({
            createScroll: ()=>({
                update: ()=>{}
                ,
                destroy: ()=>{}
            })
        });
        class c extends a.Component {
            componentDidMount() {
                const {isNative: e, isShadows: t, neverHide: s, onScroll: i} = this.props;
                this.wrapper && !this.scroller && this.context && this.context.createScroll && (this.scroller = this.context.createScroll(this.wrapper, {
                    shadows: t,
                    nativeScroll: e,
                    hidden: !s,
                    onScroll: i
                }))
            }
            componentDidUpdate() {
                this.scroller && this.scroller.update()
            }
            componentWillUnmount() {
                this.scroller && (this.scroller.destroy(),
                this.scroller = void 0)
            }
            render() {
                const e = this.props
                  , {children: t, isNative: s, isShadows: a, neverHide: l, className: c=""} = e
                  , d = (0,
                o._)(e, ["children", "isNative", "isShadows", "neverHide", "className"]);
                return (0,
                n.jsx)("div", (0,
                i._)({}, d, {
                    className: (0,
                    r.classNames)("Scroll", c),
                    ref: this.getWrapperRef,
                    children: t
                }))
            }
            constructor(...e) {
                super(...e),
                this.getWrapperRef = e=>{
                    this.wrapper = e
                }
            }
        }
        c.contextType = l,
        c.defaultProps = {
            isNative: !1,
            isShadows: !1,
            neverHide: !1
        }
    }
    ,
    627240: (e,t,s)=>{
        s.d(t, {
            default: ()=>c
        });
        var i = s(434788)
          , o = s(785893)
          , n = s(667294)
          , a = s(973935)
          , r = s(659397);
        const l = s(639973).default;
        class c extends n.Component {
            getLabel(e) {
                return this.props.searchable ? this.props.value || "" : e.placeholder || "Select..."
            }
            UNSAFE_componentWillReceiveProps(e) {
                this.setState({
                    filteredOptions: e.options,
                    allOptions: e.options
                }),
                this.props.editable && void 0 !== e.customValue ? this.setState({
                    selected: {
                        label: e.customValue,
                        value: e.customValue
                    }
                }) : void 0 !== e.value && e.value !== this.state.selected ? this.setState({
                    selected: this.getOptionByValue(e.options, e.value)
                }) : void 0 === e.value && this.setState({
                    selected: {
                        label: this.getLabel(e),
                        value: ""
                    }
                })
            }
            componentDidMount() {
                this.el = a.findDOMNode(this),
                document.addEventListener("mousedown", this.handleDocumentClick, !1),
                document.addEventListener("touchend", this.handleDocumentClick, !1)
            }
            componentWillUnmount() {
                this.mounted = !1,
                document.removeEventListener("mousedown", this.handleDocumentClick, !1),
                document.removeEventListener("touchend", this.handleDocumentClick, !1)
            }
            toggle(e) {
                this.setState({
                    opened: e
                }, (()=>{
                    var e, t, s, i;
                    this.state.opened ? null == (e = (t = this.props).onShow) || e.call(t) : null == (s = (i = this.props).onHide) || s.call(i)
                }
                ))
            }
            render() {
                const {className: e, appearance: t, style: s, searchable: i, editable: n, disabled: a, position: l, isFluid: c, alwaysNotEmpty: d} = this.props
                  , {selected: h, opened: u} = this.state
                  , p = !d && h && "object" == typeof h && !h.value || !1;
                let m = i || n ? "secondary" : t
                  , v = (0,
                r.classNames)("Select", `Select--${m}`, `Select--${l}`, {
                    "Select--opened": !!u,
                    "Select--disabled": !!a,
                    "Select--empty": p,
                    "Select--isFluid": c
                }, e);
                const f = this.buildControl(h);
                return (0,
                o.jsxs)("div", {
                    className: v,
                    style: s,
                    children: [f, this.state.opened && this.renderMenu()]
                })
            }
            constructor(e) {
                let t;
                super(e),
                this.handleMouseDown = e=>{
                    this.props.onFocus && "function" == typeof this.props.onFocus && this.props.onFocus(this.state.opened),
                    "mousedown" === e.type && 0 !== e.button || (e.stopPropagation(),
                    e.preventDefault(),
                    this.props.disabled || this.props.alwaysOpened || this.toggle(!this.state.opened))
                }
                ,
                this.getOptionByValue = (e,t)=>{
                    for (let s = 0; s < e.length; s++) {
                        if (!e.hasOwnProperty(s))
                            continue;
                        const i = e[s];
                        if ("object" == typeof i) {
                            if ("group" === i.type && void 0 !== i.items) {
                                const e = this.getOptionByValue(i.items || [], t);
                                if (e)
                                    return e
                            }
                            if (i.value === t)
                                return i
                        } else if (i === t)
                            return i
                    }
                }
                ,
                this.setValue = (e,t,s)=>{
                    s && s.stopPropagation(),
                    "object" == typeof t && this.props.searchable && (t = t.props.title);
                    const i = {
                        value: e,
                        label: "object" == typeof t ? t : t.toString()
                    }
                      , o = {
                        selected: i
                    };
                    this.fireChangeEvent(i),
                    this.setState(o),
                    this.props.alwaysOpened || this.toggle(!1)
                }
                ,
                this.fireChangeEvent = e=>{
                    e !== this.state.selected && this.props.onChange && this.props.onChange({
                        name: this.props.name,
                        selected: e
                    })
                }
                ,
                this.renderOption = e=>{
                    let t = (0,
                    r.classNames)("Select__option", {
                        "Select__option--selected": e === this.state.selected
                    })
                      , s = void 0 !== e.value ? e.value : e.label || e
                      , i = void 0 !== e.label ? e.label : e;
                    return (0,
                    o.jsx)("div", {
                        className: t,
                        onMouseDown: e=>this.setValue(s, i, e),
                        onClick: e=>this.setValue(s, i, e),
                        title: e.title,
                        children: i
                    }, s)
                }
                ,
                this.buildMenu = ()=>{
                    let e = this.state.filteredOptions.map((e=>"string" != typeof e && "group" === e.type ? (0,
                    o.jsxs)("div", {
                        className: "Select__group",
                        children: [e.name && (0,
                        o.jsx)("div", {
                            className: "Select__title",
                            children: e.name
                        }), e.items && e.items.map((e=>this.renderOption(e)))]
                    }, e.name) : this.renderOption(e)));
                    return e.length ? e : (0,
                    o.jsx)("div", {
                        className: "Select__noresults",
                        children: this.props.searchPlaceholder
                    })
                }
                ,
                this.renderMenu = ()=>this.props.customMenu ? this.props.customMenu(this.state.filteredOptions, this.setValue, this.state.selected) : (0,
                o.jsx)("div", {
                    className: "Select__menu",
                    children: this.buildMenu()
                }),
                this.filterOptions = (e,t)=>{
                    let s = e.toLowerCase();
                    return t.filter((e=>"string" == typeof e ? e.toLowerCase().includes(s) : "string" == typeof e.label ? e.label.toLowerCase().includes(s) : "object" == typeof e.label && e.label.props.title.toLowerCase().indexOf(s) >= 0))
                }
                ,
                this.handleSearchType = e=>{
                    const t = this.filterOptions(e.target.value, this.state.allOptions);
                    this.setState({
                        selected: {
                            value: e.target.value,
                            label: e.target.value
                        },
                        filteredOptions: t
                    }),
                    this.toggle(!0),
                    this.props.onType && this.props.onType(e.target.value)
                }
                ,
                this.handleSearchFocus = e=>{
                    this.props.enableSearchSelectOnFocus && e.target.select(),
                    this.props.onInputFocus && this.props.onInputFocus(e)
                }
                ,
                this.handleEditableType = e=>{
                    this.setState({
                        opened: !0
                    }),
                    this.props.onEdit && this.props.onEdit(e.target.value)
                }
                ,
                this.buildControl = e=>{
                    let t, s, n = "";
                    const {searchable: a, editable: c, inputOtherProps: d} = this.props
                      , h = (0,
                    r.classNames)("Select__input", d && d.className);
                    return e && "string" == typeof e && (n = e),
                    e && "object" == typeof e && (e && "string" == typeof e.label && (n = e.label),
                    e && "object" == typeof e.label && a && (n = e.label.props.title || ""),
                    e && "object" == typeof e.label && !a && (s = e.placeholder || e.label)),
                    t = a ? (0,
                    o.jsxs)("div", {
                        className: "Select__control",
                        onClick: this.handleMouseDown,
                        children: [(0,
                        o.jsx)(l, (0,
                        i._)({
                            placeholder: "string" == typeof this.props.placeholder ? this.props.placeholder : void 0,
                            value: n || "",
                            onChange: this.handleSearchType.bind(this),
                            onFocus: this.handleSearchFocus.bind(this),
                            onBlur: e=>{
                                var t, s;
                                return null == (t = (s = this.props).onInputBlur) ? void 0 : t.call(s, e, this.state.filteredOptions)
                            }
                            ,
                            disabled: this.props.disabled,
                            isControlledOutside: !0
                        }, d, {
                            className: h
                        })), (0,
                        o.jsx)("span", {
                            className: "Select__arrow"
                        })]
                    }) : c ? (0,
                    o.jsxs)("div", {
                        className: "Select__control",
                        onClick: this.handleMouseDown,
                        children: [(0,
                        o.jsx)(l, (0,
                        i._)({
                            placeholder: "string" == typeof this.props.placeholder ? this.props.placeholder : void 0,
                            id: this.props.id,
                            value: n || "",
                            onChange: this.handleEditableType,
                            onFocus: this.props.onInputFocus,
                            onBlur: this.props.onInputBlur,
                            disabled: this.props.disabled,
                            isControlledOutside: !0,
                            autoComplete: "off"
                        }, d, {
                            className: h
                        })), (0,
                        o.jsx)("span", {
                            className: "Select__arrow"
                        })]
                    }) : (0,
                    o.jsxs)("div", {
                        className: "Select__control",
                        onClick: this.handleMouseDown,
                        children: [(0,
                        o.jsx)("div", {
                            className: "Select__placeholder",
                            children: n || s
                        }), (0,
                        o.jsx)("span", {
                            className: "Select__arrow"
                        })]
                    }),
                    t
                }
                ,
                this.handleDocumentClick = e=>{
                    this.mounted && this.state.opened && !this.props.alwaysOpened && this.el && !this.el.contains(e.target) && this.toggle(!1)
                }
                ,
                t = void 0 !== e.value ? e.editable && void 0 !== e.customValue ? {
                    label: e.customValue,
                    value: e.customValue
                } : this.getOptionByValue(e.options, e.value) : {
                    label: this.getLabel(e),
                    value: ""
                },
                this.state = {
                    filteredOptions: e.options,
                    allOptions: e.options,
                    selected: t,
                    opened: !!e.alwaysOpened
                },
                this.mounted = !0
            }
        }
        c.defaultProps = {
            appearance: "primary",
            searchPlaceholder: "No options found",
            searchable: !1,
            editable: !1,
            inputOtherProps: {},
            onShow: ()=>{}
            ,
            onHide: ()=>{}
            ,
            position: "b"
        }
    }
    ,
    430684: (e,t,s)=>{
        s.d(t, {
            default: ()=>a
        });
        var i = s(785893)
          , o = s(667294)
          , n = s(659397);
        class a extends o.Component {
            componentDidMount() {
                this.slider.current && this.slider.current.addEventListener("mousedown", this.onMouseDown),
                this.slider.current && this.slider.current.addEventListener("mouseenter", this.onMouseEnter),
                this.slider.current && this.slider.current.addEventListener("mouseleave", this.onMouseLeave)
            }
            componentWillUnmount() {
                this.slider.current && this.slider.current.removeEventListener("mousedown", this.onMouseDown),
                this.slider.current && this.slider.current.removeEventListener("mouseenter", this.onMouseEnter),
                this.slider.current && this.slider.current.removeEventListener("mouseleave", this.onMouseLeave)
            }
            componentDidUpdate(e) {
                const {value: t} = this.props;
                if (this.isControlledOutside && void 0 !== t && t !== e.value) {
                    const {min: e, max: s} = this.props;
                    this.setState({
                        percentValue: a.valueToPercent(t, e, s)
                    })
                }
            }
            static valueToPercent(e, t, s) {
                return e < t && (e = t),
                e > s && (e = s),
                100 * (e - t) / (s - t)
            }
            static percentToValue(e, t, s) {
                return Math.round(100 * (e * (s - t) / 100 + t)) / 100
            }
            static getFillPosition(e, t) {
                let s, i;
                return e < t ? (s = e,
                i = t - e) : (s = t,
                i = e - t),
                {
                    left: s,
                    width: i
                }
            }
            getZeroPosition() {
                const {min: e, max: t} = this.props;
                return a.valueToPercent(0, e, t)
            }
            getOffset(e) {
                const {min: t, max: s, step: i} = this.props
                  , {left: o, width: a} = (0,
                n.getOffsetRect)(this.slider.current);
                let r = e.clientX - o;
                if (i > 0) {
                    const e = a / ((s - t) / i);
                    r = Math.round(r / e) * e
                }
                return {
                    offset: r,
                    left: o,
                    width: a
                }
            }
            render() {
                const {min: e, max: t, isShowZero: s, isShowHandle: o, appearance: r} = this.props
                  , {percentValue: l, hintPosition: c, isActive: d} = this.state
                  , h = this.getZeroPosition()
                  , {left: u, width: p} = a.getFillPosition(l, h)
                  , m = l !== h
                  , v = this.props.formatHint(a.percentToValue(c, e, t))
                  , f = (0,
                n.classNames)("Slider", `Slider--${r}`, {
                    Slider__active: d
                })
                  , g = (0,
                n.classNames)("Slider__handle", {
                    "Slider__handle--active": m,
                    "Slider__handle--show": o
                });
                return (0,
                i.jsxs)("div", {
                    className: f,
                    ref: this.slider,
                    children: [(0,
                    i.jsx)("input", {
                        type: "hidden",
                        name,
                        value: l
                    }), s && m && (0,
                    i.jsx)("div", {
                        className: "Slider__middletick",
                        style: {
                            left: `${h}%`
                        }
                    }), (0,
                    i.jsx)("span", {
                        className: "Slider__hint",
                        style: {
                            left: `${c}%`
                        },
                        children: v
                    }), (0,
                    i.jsx)("div", {
                        className: "Slider__fill",
                        style: {
                            left: `${u}%`,
                            width: `${p}%`
                        }
                    }), (0,
                    i.jsx)("div", {
                        className: g,
                        style: {
                            left: `${l}%`
                        }
                    })]
                })
            }
            constructor(e) {
                let t;
                super(e),
                this.onMouseDown = e=>{
                    0 === e.button && (this.update(e),
                    this.setState({
                        isActive: !0
                    }),
                    window.addEventListener("mouseup", this.onMouseUp),
                    window.addEventListener("mousemove", this.onMouseMove))
                }
                ,
                this.onMouseMove = e=>{
                    requestAnimationFrame((()=>this.update(e)))
                }
                ,
                this.onMouseUp = ()=>{
                    this.setState({
                        isActive: !1
                    }),
                    window.removeEventListener("mousemove", this.onMouseMove),
                    window.removeEventListener("mouseup", this.onMouseUp)
                }
                ,
                this.onMouseEnter = ()=>{
                    window.addEventListener("mousemove", this.updateHint)
                }
                ,
                this.onMouseLeave = ()=>{
                    window.removeEventListener("mousemove", this.updateHint)
                }
                ,
                this.update = e=>{
                    const {min: t, max: s, gravity: i} = this.props
                      , {offset: o, width: n} = this.getOffset(e)
                      , r = this.getZeroPosition();
                    let l = a.valueToPercent(o, 0, n);
                    i && i > 0 && l >= r - i && l <= r + i && (l = r),
                    this.state.percentValue !== l && (this.setState({
                        hintPosition: l
                    }),
                    this.props.onChange(a.percentToValue(l, t, s)),
                    this.isControlledOutside || this.setState({
                        percentValue: l
                    }))
                }
                ,
                this.updateHint = e=>{
                    const {offset: t, width: s} = this.getOffset(e);
                    this.setState({
                        hintPosition: a.valueToPercent(t, 0, s)
                    })
                }
                ,
                t = e.value ? a.valueToPercent(e.value, e.min, e.max) : e.defaultValue ? a.valueToPercent(e.defaultValue, e.min, e.max) : this.getZeroPosition(),
                this.state = {
                    percentValue: t,
                    hintPosition: 0,
                    isActive: !1
                },
                this.isControlledOutside = this.props.hasOwnProperty("value"),
                this.slider = (0,
                o.createRef)()
            }
        }
        a.defaultProps = {
            min: 0,
            max: 100,
            step: 0,
            gravity: 0,
            isShowZero: !1,
            isShowHandle: !1,
            defaultValue: 0,
            appearance: "blue",
            name: "value",
            onChange: ()=>{}
            ,
            formatHint: e=>e
        }
    }
    ,
    562329: (e,t,s)=>{
        s.d(t, {
            default: ()=>a
        });
        var i = s(785893)
          , o = s(667294)
          , n = s(659397);
        class a extends o.Component {
            UNSAFE_componentWillReceiveProps(e) {
                this.setSpinnerParams(e)
            }
            setSpinnerParams(e) {
                this.offset = Math.round(Math.PI * e.size),
                this.c = .5 * e.size,
                this.animation = function(e, t) {
                    if (!e || !t)
                        return "";
                    const s = Object.keys(t).map((e=>e + " {" + Object.keys(t[e]).map((s=>s + ":" + t[e][s])).join(";") + "}")).join("");
                    return `@-webkit-keyframes ${e} {${s}} @keyframes ${e} {${s}}`
                }("dash" + this.id, {
                    "0%": {
                        "stroke-dashoffset": this.offset
                    },
                    "50%": {
                        "stroke-dashoffset": Math.round(.25 * this.offset),
                        transform: "rotate(135deg)"
                    },
                    "100%": {
                        "stroke-dashoffset": this.offset,
                        transform: "rotate(360deg)"
                    }
                })
            }
            render() {
                const {style: e, color: t="var(--vkui--color_icon_secondary)", size: s, duration: o, strokeWidth: a, className: r} = this.props
                  , {id: l, offset: c, animation: d} = this
                  , h = (0,
                n.classNames)("Spinner", r);
                return (0,
                i.jsx)("div", {
                    className: h,
                    style: e,
                    children: (0,
                    i.jsx)("svg", {
                        className: "Spinner__svg",
                        width: s,
                        height: s,
                        viewBox: `0 0 ${s} ${s}`,
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0,
                        i.jsxs)("g", {
                            style: {
                                width: s,
                                height: s,
                                transformOrigin: .5 * s + "px " + .5 * s + "px"
                            },
                            children: [(0,
                            i.jsx)("style", {
                                dangerouslySetInnerHTML: {
                                    __html: d
                                }
                            }), (0,
                            i.jsx)("circle", {
                                className: "Spinner__path",
                                fill: "none",
                                stroke: t,
                                strokeDasharray: c,
                                strokeDashoffset: c,
                                strokeWidth: a,
                                style: {
                                    animationName: "dash" + l,
                                    animationTimingFunction: "ease-in-out",
                                    animationDuration: o + "s",
                                    animationIterationCount: "infinite"
                                },
                                cx: .5 * s,
                                cy: .5 * s,
                                r: .5 * s - .5 * a
                            })]
                        })
                    })
                })
            }
            constructor(e) {
                super(e),
                this.id = Math.round(1e6 * Math.random()).toString(16),
                this.setSpinnerParams(e)
            }
        }
        a.defaultProps = {
            color: "#5181b8",
            size: 19,
            strokeWidth: 2,
            duration: 1.4,
            className: ""
        }
    }
    ,
    661307: (e,t,s)=>{
        s.d(t, {
            default: ()=>r
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(659397);
        const r = e=>{
            const {children: t, className: s} = e
              , r = (0,
            o._)(e, ["children", "className"]);
            return (0,
            n.jsx)("div", (0,
            i._)({}, r, {
                className: (0,
                a.classNames)("Stub", s),
                children: t || "No results."
            }))
        }
    }
    ,
    282133: (e,t,s)=>{
        s.d(t, {
            default: ()=>n
        });
        var i = s(785893)
          , o = s(659397);
        const n = ({children: e, alignment: t="left", className: s, style: n})=>{
            const a = {
                "SubmitArea--left": "left" === t,
                "SubmitArea--center": "center" === t,
                "SubmitArea--right": "right" === t
            };
            return (0,
            i.jsx)("div", {
                className: (0,
                o.classNames)("SubmitArea", a, s),
                style: n,
                children: e
            })
        }
    }
    ,
    774001: (e,t,s)=>{
        s.d(t, {
            default: ()=>r
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(659397);
        const r = e=>{
            var {native: t, children: s, checked: r, disabled: l, name: c, type: d="checkbox", id: h, onChange: u, className: p} = e
              , m = (0,
            o._)(e, ["native", "children", "checked", "disabled", "name", "type", "id", "onChange", "className"]);
            return (0,
            n.jsxs)("label", {
                className: (0,
                a.classNames)("Switch", p, l && "Switch--disabled", !s && "Switch--last"),
                htmlFor: h,
                tabIndex: -1,
                "aria-checked": !!r,
                role: "checkbox",
                children: [(0,
                n.jsx)("input", (0,
                i._)({}, m, {
                    className: "Switch__input",
                    id: h,
                    type: d,
                    checked: r,
                    name: c,
                    disabled: l,
                    onChange: e=>{
                        var s, i;
                        t ? null == (s = u) || s(e) : null == (i = u) || i(c, e.target.checked)
                    }
                })), (0,
                n.jsx)("span", {
                    className: "Switch__indicator",
                    "aria-hidden": !0
                }), s]
            })
        }
    }
    ,
    425308: (e,t,s)=>{
        s.d(t, {
            default: ()=>a
        });
        var i = s(785893)
          , o = s(667294)
          , n = s(659397);
        class a extends o.Component {
            static reactifyTabs(e) {
                return (Array.isArray(e) ? e : Object.values(e)).map((e=>(0,
                i.jsx)("a", {
                    href: e[2],
                    onClick: ()=>{}
                    ,
                    children: e[1] ? e[1] : ""
                }, e[0])))
            }
            componentDidUpdate(e) {
                void 0 !== this.props.active && this.props.active !== e.active && this.setState({
                    active: this.props.active
                })
            }
            getTransform(e) {
                const t = e.offsetWidth;
                return `translateX(${e.offsetLeft - 50 + .5 * t}px) scaleX(${t / 100})`
            }
            componentDidMount() {
                if (!this.state.active)
                    return;
                const e = this.refsStore[this.state.active];
                this.setState({
                    transform: this.getTransform(e)
                })
            }
            render() {
                const e = {
                    "Tabs--animating": this.state.isAnimating
                };
                return (0,
                i.jsxs)("nav", {
                    className: (0,
                    n.classNames)("Tabs", this.props.className, e),
                    style: this.props.style,
                    children: [(0,
                    i.jsx)("ul", {
                        className: "Tabs__list",
                        children: o.Children.map(this.props.children, ((e,t)=>{
                            var s;
                            if (!(0,
                            o.isValidElement)(e))
                                return null;
                            const a = e.key || t;
                            return (0,
                            i.jsx)("li", {
                                className: (0,
                                n.classNames)("Tabs__item", {
                                    "Tabs__item--active": this.state.active === a,
                                    "Tabs__item--disabled": null == (s = this.props.disabledTabMap) ? void 0 : s[a]
                                }),
                                onClick: e=>this.onClick(e, a),
                                ref: e=>this.storeRef(a, e),
                                children: e
                            }, a)
                        }
                        ))
                    }), this.props.aside && (0,
                    i.jsx)("div", {
                        className: "Tabs__aside",
                        children: this.props.aside
                    }), (0,
                    i.jsx)("div", {
                        style: {
                            transform: this.state.transform
                        },
                        className: "Tabs__divider",
                        onTransitionEnd: this.onTransitionEnd
                    })]
                })
            }
            constructor(e) {
                super(e),
                this.getActiveTabKey = ()=>{
                    const {active: e, activeRequired: t} = this.props
                      , s = [];
                    let i = null;
                    return o.Children.forEach(this.props.children, (t=>{
                        (0,
                        o.isValidElement)(t) && (t.key === e ? i = t.key : s.push(t))
                    }
                    )),
                    i || ("number" == typeof e && s.length > e ? s[e].key || e : t && s.length ? s[0].key || 0 : null)
                }
                ,
                this.onClick = (e,t)=>{
                    if (t !== this.state.active) {
                        const s = this.refsStore[t]
                          , i = this.getTransform(s);
                        this.setState({
                            active: t,
                            isAnimating: !0,
                            transform: i
                        }),
                        this.props.onTabClick && this.props.onTabClick(e, t)
                    }
                }
                ,
                this.onTransitionEnd = e=>{
                    "transform" === e.propertyName && this.setState({
                        isAnimating: !1
                    })
                }
                ,
                this.storeRef = (e,t)=>{
                    t && (this.refsStore[e] = t)
                }
                ,
                this.refsStore = {},
                this.state = {
                    isAnimating: !1,
                    active: this.getActiveTabKey()
                }
            }
        }
        a.defaultProps = {
            active: 0,
            activeRequired: !0,
            aside: null,
            style: {},
            className: ""
        }
    }
    ,
    92116: (e,t,s)=>{
        s.d(t, {
            Textarea: ()=>d
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(667294)
          , r = s(659397)
          , l = s(488543)
          , c = s(561800);
        const d = e=>{
            var {value: t, initialValue: s="", grow: d=!0, getRef: h, onResize: u, style: p, onChange: m, className: v} = e
              , f = (0,
            o._)(e, ["value", "initialValue", "grow", "getRef", "onResize", "style", "onChange", "className"]);
            const [g,x] = (0,
            a.useState)(t || s)
              , [N,w] = (0,
            a.useState)(0)
              , _ = (0,
            a.useRef)(null)
              , S = (0,
            l.useExternRef)(_, h)
              , b = (0,
            c.useStableCallback)((()=>{
                const e = _.current;
                if (e) {
                    var t;
                    const {offsetHeight: s, scrollHeight: i} = e;
                    w(i >= s ? i : 0),
                    null == (t = u) || t(e)
                }
            }
            ))
              , C = e=>{
                var t;
                x(e.target.value),
                null == (t = m) || t(e)
            }
            ;
            return (0,
            a.useEffect)((()=>{
                x(null != t ? t : "")
            }
            ), [t]),
            (0,
            a.useLayoutEffect)((()=>{
                d && b()
            }
            ), [g, N]),
            (0,
            n.jsx)("textarea", (0,
            i._)({}, f, {
                value: g,
                onChange: C,
                onInput: C,
                ref: S,
                style: (0,
                i._)({}, p, {
                    height: N || 66
                }),
                className: (0,
                r.classNames)("Textarea", v)
            }))
        }
    }
    ,
    85196: (e,t,s)=>{
        s.d(t, {
            default: ()=>d
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(667294)
          , r = s(659397)
          , l = s(752654)
          , c = s(790932);
        function d(e) {
            var {id: t="token-input", name: s="tokens", tokens: d, onRemoveToken: h, removeTokenTooltip: u="", removeTokenAriaLabel: p="Remove item", renderToken: m, onChange: v, value: f, placeholder: g="", onSubmit: x, className: N=""} = e
              , w = (0,
            o._)(e, ["id", "name", "tokens", "onRemoveToken", "removeTokenTooltip", "removeTokenAriaLabel", "renderToken", "onChange", "value", "placeholder", "onSubmit", "className"]);
            const _ = (0,
            a.useRef)(null)
              , S = (0,
            a.useCallback)((e=>v(e)), [v])
              , b = (0,
            a.useCallback)((e=>{
                "Esc" === e.key && _.current && (_.current.value = "",
                _.current.blur(),
                v(e),
                e.stopPropagation()),
                "Enter" === e.key && x()
            }
            ), [x])
              , C = (0,
            a.useCallback)((e=>{
                var t, s;
                const i = e.target;
                if (!i)
                    return;
                const o = null == (t = (s = i).closest) ? void 0 : t.call(s, "[data-id]");
                if (!o)
                    return;
                const n = o.dataset.id;
                n && (h(n),
                _.current && _.current.focus())
            }
            ), [h]);
            return (0,
            n.jsxs)("div", {
                className: (0,
                r.classNames)("TokenInput", N),
                children: [(0,
                n.jsx)("label", {
                    htmlFor: t,
                    className: "TokenInput__back"
                }), d.map((e=>(0,
                n.jsxs)("span", {
                    className: "TokenInput__token",
                    children: [Boolean(s) && (0,
                    n.jsx)("input", {
                        type: "hidden",
                        name: s + "[]",
                        value: e.value || e.id
                    }), (0,
                    n.jsx)("span", {
                        className: "TokenInput__label",
                        children: m ? m(e) : e.text
                    }), !e.locked && u && (0,
                    n.jsx)(l.default, {
                        text: u,
                        children: (0,
                        n.jsx)("button", {
                            "data-id": e.id,
                            className: "TokenInput__remove",
                            onClick: C,
                            "aria-label": p,
                            children: (0,
                            n.jsx)(c.Icon16Cancel, {})
                        })
                    }), !e.locked && !u && (0,
                    n.jsx)("button", {
                        "data-id": e.id,
                        className: "TokenInput__remove",
                        onClick: C,
                        "aria-label": p,
                        children: (0,
                        n.jsx)(c.Icon16Cancel, {})
                    })]
                }, e.id))), (0,
                n.jsx)("div", {
                    className: "TokenInput__caret",
                    children: (0,
                    n.jsx)("div", {
                        className: "TokenInput__caretIn",
                        children: (0,
                        n.jsx)("input", (0,
                        i._)({}, w, {
                            id: t,
                            type: "text",
                            value: f,
                            onChange: S,
                            onPaste: S,
                            placeholder: 0 === d.length ? g : "",
                            onKeyDown: b,
                            className: "TokenInput__input",
                            ref: _
                        }))
                    })
                })]
            })
        }
    }
    ,
    752654: (e,t,s)=>{
        s.d(t, {
            default: ()=>d
        });
        var i = s(434788)
          , o = s(785893)
          , n = s(667294)
          , a = s(973935)
          , r = s(659397)
          , l = s(237963);
        const c = e=>{
            const {position: t, align: s, text: i, rect: o, marginTop: n, marginLeft: a, maxWidth: r, appearance: l} = e;
            let c = o.left
              , d = o.top;
            switch (t) {
            case "t":
                c += .5 * o.width;
                break;
            case "r":
                c += o.width,
                d += .5 * o.height;
                break;
            case "b":
                c += .5 * o.width,
                d += o.height;
                break;
            case "l":
                d += .5 * o.height
            }
            return c = Math.round(c + (a || 0)),
            d = Math.round(d + (n || 0)),
            {
                tooltip: {
                    position: t,
                    align: s,
                    text: i,
                    x: c,
                    y: d,
                    maxWidth: r,
                    appearance: l
                }
            }
        }
        ;
        class d extends n.Component {
            componentDidMount() {
                var e, t;
                const s = a.findDOMNode(this);
                this.setState({
                    el: s
                }),
                null == (e = s) || e.addEventListener("mouseenter", this.onMouseEnter),
                null == (t = s) || t.addEventListener("mouseleave", this.onMouseLeave),
                this.props.autoOpen && window.setTimeout((()=>{
                    this.drawTooltip()
                }
                ), this.props.autoOpen)
            }
            componentDidUpdate(e, t) {
                var s, i;
                !t.tooltip && this.state.tooltip && this.props.allowMouseOverTooltipContent && (null == (s = this.tooltipRef.current) || s.addEventListener("mouseenter", this.onMouseEnter),
                null == (i = this.tooltipRef.current) || i.addEventListener("mouseleave", this.onMouseLeave))
            }
            componentWillUnmount() {
                var e, t, s, i;
                null == (e = this.state.el) || e.removeEventListener("mouseenter", this.onMouseEnter),
                null == (t = this.state.el) || t.removeEventListener("mouseleave", this.onMouseLeave),
                null == (s = this.tooltipRef.current) || s.removeEventListener("mouseenter", this.onMouseEnter),
                null == (i = this.tooltipRef.current) || i.removeEventListener("mouseleave", this.onMouseLeave),
                clearTimeout(this.closeDelayTimeout),
                clearTimeout(this.openDelayTimeout)
            }
            static getDerivedStateFromProps(e, t) {
                if (!t.tooltip)
                    return null;
                return e.text !== t.tooltip.text || e.position !== t.tooltip.position || e.align !== t.tooltip.align || e.maxWidth !== t.tooltip.maxWidth || e.appearance !== t.tooltip.appearance ? c((0,
                i._)({}, e, {
                    rect: (0,
                    r.getOffsetRect)(t.el instanceof HTMLElement ? t.el : null)
                })) : null
            }
            drawTooltip() {
                if (this.state.el && !this.state.tooltip) {
                    const {text: e, position: t, align: s, marginTop: i, marginLeft: o, maxWidth: n, appearance: a} = this.props
                      , l = (0,
                    r.getOffsetRect)(this.state.el instanceof HTMLElement ? this.state.el : null);
                    this.update({
                        text: e,
                        position: t,
                        align: s,
                        rect: l,
                        marginTop: i,
                        marginLeft: o,
                        maxWidth: n,
                        appearance: a
                    }),
                    this.props.autoClose && window.setTimeout((()=>{
                        this.update()
                    }
                    ), this.props.autoClose)
                }
            }
            update(e) {
                e ? this.setState(c(e)) : this.setState({
                    tooltip: Object.assign({}, this.state.tooltip, {
                        removed: !0
                    })
                })
            }
            render() {
                const e = this.state.tooltip ? (0,
                i._)({}, this.state.tooltip, {
                    className: (0,
                    r.classNames)(this.props.className, {
                        "Tooltip--noPointerEvents": !this.props.allowMouseOverTooltipContent
                    })
                }) : null;
                return e && "undefined" != typeof window ? (0,
                o.jsxs)(n.Fragment, {
                    children: [this.props.children, (0,
                    o.jsx)(l.default, (0,
                    i._)({
                        tooltipInRef: this.tooltipRef
                    }, e, {
                        onTransitionEnd: this.onTransitionEnd
                    }))]
                }) : this.props.children
            }
            constructor(e) {
                super(e),
                this.tooltipRef = (0,
                n.createRef)(),
                this.onMouseEnter = ()=>{
                    this.state.tooltip ? (clearTimeout(this.closeDelayTimeout),
                    this.state.tooltip.removed && this.setState((0,
                    i._)({}, this.state, {
                        tooltip: (0,
                        i._)({}, this.state.tooltip, {
                            removed: !1
                        })
                    }))) : this.props.delay ? this.openDelayTimeout = window.setTimeout((()=>{
                        this.openDelayTimeout = 0,
                        this.drawTooltip()
                    }
                    ), this.props.delay) : this.drawTooltip()
                }
                ,
                this.onMouseLeave = ()=>{
                    if (this.state.tooltip)
                        this.props.delayHide ? this.closeDelayTimeout = window.setTimeout((()=>{
                            this.update()
                        }
                        ), this.props.delayHide) : this.update();
                    else if (this.openDelayTimeout)
                        return clearTimeout(this.openDelayTimeout),
                        void (this.openDelayTimeout = 0)
                }
                ,
                this.onTransitionEnd = e=>{
                    "visibility" === e.propertyName && this.state.tooltip && this.setState({
                        tooltip: void 0
                    })
                }
                ,
                this.state = {
                    el: null
                }
            }
        }
        d.defaultProps = {
            position: "b",
            align: "center",
            marginTop: 0,
            marginLeft: 0,
            appearance: "dark",
            delay: 0,
            delayHide: 0,
            allowMouseOverTooltipContent: !1,
            open: !1
        }
    }
    ,
    937026: (e,t,s)=>{
        s.d(t, {
            TooltipNew: ()=>d
        });
        var i, o = s(434788), n = s(820224), a = s(785893), r = s(667294), l = s(515190), c = s(659397);
        function d(e) {
            var {children: t, content: s, position: i="auto", align: d="auto", appearance: u="dark", open: p=!1, onOpen: m, onClose: v, delay: f=50, tooltipClassName: g, forceClose: x, preferPointerEvents: N} = e
              , w = (0,
            n._)(e, ["children", "content", "position", "align", "appearance", "open", "onOpen", "onClose", "delay", "tooltipClassName", "forceClose", "preferPointerEvents"]);
            const [_,S] = (0,
            r.useState)(p ? "opened" : "closed")
              , b = (0,
            r.useRef)(null);
            (0,
            r.useEffect)((()=>{
                let e = null
                  , t = null;
                const s = ()=>{
                    h(e),
                    e = window.setTimeout((()=>{
                        S("opened"),
                        m && m()
                    }
                    ), f)
                }
                  , i = ()=>{
                    h(e),
                    t = window.setTimeout((()=>{
                        "opened" === _ ? S("isClosing") : (S("closed"),
                        v && v())
                    }
                    ), 0)
                }
                ;
                if (x)
                    return void i();
                const o = function(e) {
                    let t = "mouseenter"
                      , s = "mouseleave";
                    e && function(...e) {
                        const t = document.createElement("div");
                        return e.every((e=>e in t))
                    }("onpointerenter", "onpointerleave") && (t = "pointerenter",
                    s = "pointerleave");
                    return {
                        mouseenter: t,
                        mouseleave: s
                    }
                }(N);
                return b.current && (b.current.addEventListener(o.mouseenter, s),
                b.current.addEventListener(o.mouseleave, i)),
                ()=>{
                    b.current && (b.current.removeEventListener(o.mouseenter, s),
                    b.current.removeEventListener(o.mouseleave, i)),
                    h(e),
                    h(t)
                }
            }
            ), [b, _, x, N]),
            (0,
            r.useEffect)((()=>{
                const e = p ? "opened" : "closed";
                _ !== e && S(e)
            }
            ), [p]);
            const C = (0,
            r.useCallback)((()=>{
                "isClosing" === _ && (S("closed"),
                v && v())
            }
            ), [_])
              , y = (0,
            c.classNames)("TooltipNew", g, {
                "TooltipNew--removed": "isClosing" === _,
                "TooltipNew--dark": "dark" === u,
                "TooltipNew--light": "light" === u
            })
              , j = (0,
            a.jsx)("div", {
                className: y,
                onTransitionEnd: C,
                children: s
            });
            return (0,
            a.jsx)(l.Popper, (0,
            o._)({
                open: "closed" !== _,
                position: i,
                align: d,
                content: j,
                ref: b
            }, w, {
                children: t
            }))
        }
        function h(e) {
            e && clearTimeout(e)
        }
        !function(e) {
            e.OPENED = "opened",
            e.IS_CLOSING = "isClosing",
            e.CLOSED = "closed"
        }(i || (i = {}))
    }
    ,
    366087: (e,t,s)=>{
        s.d(t, {
            default: ()=>r
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(659397);
        const r = e=>{
            var {verifiedText: t, className: s} = e
              , r = (0,
            o._)(e, ["verifiedText", "className"]);
            return (0,
            n.jsx)("div", (0,
            i._)({
                className: (0,
                a.classNames)("VerifiedMarker", s)
            }, r, {
                "aria-label": t,
                children: (0,
                n.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 12 12",
                    className: "VerifiedMarker__icon",
                    "aria-hidden": "true",
                    children: (0,
                    n.jsx)("path", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M2.25 6.75L4.5 9l5.25-5.25"
                    })
                })
            }))
        }
    }
    ,
    942843: (e,t,s)=>{
        s.d(t, {
            default: ()=>o
        });
        var i = s(785893);
        const o = ({children: e})=>(0,
        i.jsx)("div", {
            className: "VisuallyHidden",
            children: e
        })
    }
    ,
    120773: (e,t,s)=>{
        s.d(t, {
            WithPortal: ()=>c
        });
        var i = s(434788)
          , o = s(820224)
          , n = s(785893)
          , a = s(667294)
          , r = s(973935);
        const l = ()=>document.createElement("div")
          , c = (0,
        a.forwardRef)((function(e, t) {
            var {children: s, portalContainerParent: c=document.body, renderNodeFactory: d=l} = e
              , h = (0,
            o._)(e, ["children", "portalContainerParent", "renderNodeFactory"]);
            const u = (0,
            a.useRef)(null);
            return u.current || (u.current = d(),
            c.appendChild(u.current)),
            (0,
            a.useEffect)((()=>()=>{
                u.current && u.current.remove()
            }
            ), []),
            r.createPortal((0,
            n.jsx)("div", (0,
            i._)({}, h, {
                ref: t,
                children: s
            })), u.current)
        }
        ))
    }
    ,
    720737: (e,t,s)=>{
        s.d(t, {
            decodeHTMLEntities: ()=>o
        });
        const i = [["&amp;", "&"], ["&lt;", "<"], ["&gt;", ">"], ["&quot;", '"'], ["&#33;", "!"]];
        function o(e) {
            return i.reduce(((e,[t,s])=>e.replace(new RegExp(t,"ig"), s)), e).replace(/&#(\d+);/g, ((e,t)=>String.fromCodePoint(t)))
        }
    }
    ,
    814833: (e,t,s)=>{
        s.d(t, {
            useCombinedRefs: ()=>o
        });
        var i = s(667294);
        function o(...e) {
            const t = (0,
            i.useRef)(null);
            return (0,
            i.useEffect)((()=>{
                e.forEach((e=>{
                    null !== e && null !== t && (e.current = t.current)
                }
                ))
            }
            ), [e]),
            t
        }
    }
}]);
try {
    stManager.done("dist/palette.ca7ef8b6921bee69205e.js")
} catch (e) {}
