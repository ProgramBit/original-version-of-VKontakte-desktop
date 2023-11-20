(()=>{
    "use strict";
    var e, t, i, o, n, s, a = {
        132968: (e,t,i)=>{
            var o, n, s, a = i(827652);
            (null == (n = window.vk) || null == (o = n.pe) ? void 0 : o.static_manager_dynamic_imports) && (null == (s = window.vk) ? void 0 : s.stDomain) && (i.p = window.vk.stDomain + "/dist/"),
            window.Likes = a.Likes;
            try {
                window.stManager.done(window.jsc("web/likes.js"))
            } catch (e) {}
        }
        ,
        120744: (e,t,i)=>{
            i.d(t, {
                getAuthorOnboardingTooltipsSharedState: ()=>_,
                renderAuthorUserOnboardingTooltip: ()=>d,
                renderHelpTooltip: ()=>l
            });
            var o = i(367431)
              , n = i(850343)
              , s = i(815671)
              , a = i(104677)
              , r = i(29271);
            const _ = ()=>(0,
            o.makeSharedState)("author-onboarding-tooltips", (()=>({
                isAuthorUserTooltipShown: !1,
                isAuthorGroupTooltipShown: !1
            })), {
                version: 1
            })
              , l = (e,t,i,o)=>{
                const {tooltip: n} = (0,
                a.helpHintTooltip)(e, {
                    content: t,
                    onHideRequestSent: i,
                    isServerSideHideDisabled: !0
                }, {
                    width: o,
                    forceSide: "top",
                    withCloseButton: !1,
                    appendToParent: !0,
                    autoAdjustToViewport: !1,
                    offset: [2, -6],
                    noAutoHideOnWindowClick: !1,
                    cls: "feature_intro_tt feature_intro_blue_tt"
                });
                window.requestAnimationFrame((()=>n.show()))
            }
              , d = e=>{
                const t = _()
                  , i = n.AvailableHelpHints.AUTHOR_LIKE_ONBOARDING_HINT
                  , o = (0,
                s.ensureAccountHelpHintsService)();
                o.canShow(i) && !t().isAuthorUserTooltipShown && (t().isAuthorUserTooltipShown = !0,
                l(e, r.getLang("intro_hint_description_feed_author_like_onboarding"), (()=>o.hideHelpHint(i)), 225))
            }
        }
        ,
        693982: (e,t,i)=>{
            function o(e) {
                const t = e.match(/^([a-z_]+)([0-9\-_]+)$/);
                if (!t)
                    return null;
                const [,i,o] = t;
                return {
                    objectType: i,
                    objectId: o
                }
            }
            i.d(t, {
                getElementLikeButtonCount: ()=>r,
                getElementLikeButtonIcon: ()=>l,
                getElementLikeButtonLabel: ()=>c,
                likePostObjectId: ()=>n,
                likeReplyObjectId: ()=>s,
                parseLikeObjectId: ()=>o
            });
            const n = e=>`wall ${e}`
              , s = e=>`wall_reply ${e}`;
            var a;
            const r = e=>{
                var t;
                return null != (a = null == (t = e) ? void 0 : t.querySelector(".like_button_count, ._like_button_count")) ? a : void 0
            }
            ;
            var _;
            const l = e=>{
                var t;
                return null != (_ = null == (t = e) ? void 0 : t.querySelector(".like_button_icon, ._like_button_icon")) ? _ : void 0
            }
            ;
            var d;
            const c = e=>null != (d = e.querySelector(".like_button_label, ._like_button_label")) ? d : void 0
        }
        ,
        234514: (e,t,i)=>{
            i.d(t, {
                LikeButtonTypes: ()=>o
            });
            const o = {
                like: "like",
                share: "share",
                views: "views",
                comment: "comment"
            }
        }
        ,
        898298: (e,t,i)=>{
            i.d(t, {
                isIntentPreviewHidden: ()=>_,
                isIntentPreviewInActionStatusBar: ()=>r,
                isIntentPreviewUseCurrent: ()=>l,
                isVariantHidden: ()=>s,
                isVariantInActionStatusBar: ()=>n,
                parsePreviewVariant: ()=>c,
                previewVisibilityIntentForVariant: ()=>d,
                previewVisibilityUseCurrent: ()=>a
            });
            var o = i(580151);
            const n = e=>e === o.PreviewVariantActionStatusBar
              , s = e=>e === o.PreviewVariantHidden
              , a = {
                kind: "useCurrent"
            }
              , r = e=>e.kind === o.PreviewVariantActionStatusBar
              , _ = e=>e.kind === o.PreviewVariantHidden
              , l = e=>"useCurrent" === e.kind
              , d = e=>e ? {
                kind: e
            } : a
              , c = e=>o.PreviewVariants.includes(e) ? e : void 0
        }
        ,
        580151: (e,t,i)=>{
            i.d(t, {
                PreviewVariantActionStatusBar: ()=>o,
                PreviewVariantHidden: ()=>n,
                PreviewVariants: ()=>s
            });
            const o = "action_status_bar"
              , n = "hidden"
              , s = [o, n]
        }
        ,
        682951: (e,t,i)=>{
            i.d(t, {
                REACTIONS_COUNTS_RESPONSE_FIELD: ()=>_,
                SIZE_128: ()=>r,
                SIZE_32: ()=>n,
                SIZE_40: ()=>s,
                SIZE_96: ()=>a,
                SUPPORTED_OBJECT_TYPES: ()=>o,
                WK_SECTION_PREFIX_REACTIONS: ()=>l
            });
            const o = {
                wall: "wall",
                wall_reply: "wall_reply"
            }
              , n = {
                width: 32,
                height: 32
            }
              , s = {
                width: 40,
                height: 40
            }
              , a = {
                width: 96,
                height: 96
            }
              , r = {
                width: 128,
                height: 128
            }
              , _ = "reactions_counts"
              , l = "reactions"
        }
        ,
        109454: (e,t,i)=>{
            i.d(t, {
                isReactionsFullUpdatePayload: ()=>a,
                reactionsCountsOnlyUpdatePayload: ()=>r,
                reactionsCountsUpdatePayload: ()=>s
            });
            var o = i(434788)
              , n = i(900641);
            const s = (e,t)=>(0,
            o._)({
                kind: n.PayloadKindFull
            }, e, {
                reactionIdState: {
                    reactionId: t.id
                }
            })
              , a = e=>e.kind === n.PayloadKindFull
              , r = e=>(0,
            o._)({
                kind: n.PayloadKindCountsOnly
            }, e)
        }
        ,
        900641: (e,t,i)=>{
            i.d(t, {
                PayloadKindCountsOnly: ()=>o,
                PayloadKindFull: ()=>n
            });
            const o = "counts_only"
              , n = "counts_with_current_reaction"
        }
        ,
        999237: (e,t,i)=>{
            i.d(t, {
                triggerReactionsUpdate: ()=>r
            });
            var o = i(693982)
              , n = i(682951)
              , s = i(505426)
              , a = i(109454);
            const r = (e,t,i,r)=>{
                const _ = (0,
                o.parseLikeObjectId)(e);
                _ && _.objectType === n.SUPPORTED_OBJECT_TYPES.wall && _.objectId ? (0,
                s.emitEvent)(s.WallDataEvents.post_reactions_counts_update, function(e, t, i, o) {
                    var n, s, r;
                    const _ = {
                        counts: e,
                        isFromWkLayer: null == (n = t) ? void 0 : n.isFromWkLayer,
                        isPrimaryLikeButtonClick: null == (s = t) ? void 0 : s.isPrimaryLikeButtonClick,
                        isQueueUpdate: null == (r = t) ? void 0 : r.isQueueUpdate,
                        isUserAction: t.isUserAction,
                        postFullId: i.objectId,
                        previewVisibility: t.previewVisibility,
                        reactionIdState: o ? {
                            reactionId: o.id
                        } : void 0,
                        suggestSubscribe: t.suggestSubscribe
                    };
                    return o ? (0,
                    a.reactionsCountsUpdatePayload)(_, o) : (0,
                    a.reactionsCountsOnlyUpdatePayload)(_)
                }(t, r, _, i)) : _ && _.objectType === n.SUPPORTED_OBJECT_TYPES.wall_reply && _.objectId ? (0,
                s.emitEvent)(s.WallDataEvents.reply_reactions_counts_update, {
                    counts: t,
                    replyFullId: _.objectId,
                    reactionIdState: i ? {
                        reactionId: i.id
                    } : void 0
                }) : console.warn("Unsupported reactions object update", e)
            }
        }
        ,
        505426: (e,t,i)=>{
            i.d(t, {
                WallDataEvents: ()=>a,
                emitEvent: ()=>c,
                registerNonGlobalNonUniqueListener: ()=>d,
                registerUniqueListener: ()=>l
            });
            var o = i(434788)
              , n = i(980602)
              , s = i(367431);
            const a = {
                post_reactions_counts_update: "wall/post_reactions_counts_update",
                reply_reactions_counts_update: "wall/reply_reactions_counts_update",
                post_subscribe_update: "wall/post_subscribe_update"
            }
              , r = (0,
            s.makeSharedState)("wall-data", (()=>({
                emitter: new n.default,
                keyedListeners: Object.create(null)
            })), {
                version: 0
            })
              , _ = (e,t,i)=>{
                var n, s;
                const a = r()
                  , _ = null == (s = a.keyedListeners) || null == (n = s[e]) ? void 0 : n[t];
                return _ && a.emitter.removeListener(e, _),
                ((e,t,i)=>{
                    const n = r();
                    return n.emitter.addListener(e, i),
                    n.keyedListeners[e] = (0,
                    o._)({}, n.keyedListeners[e], {
                        [t]: i
                    }),
                    ()=>{
                        var o, s;
                        n.emitter.removeListener(e, i),
                        (null == (o = n.keyedListeners[e]) ? void 0 : o[t]) === i && (null == (s = n.keyedListeners[e]) || delete s[t])
                    }
                }
                )(e, t, i)
            }
              , l = (e,t,i)=>_(t, e, i)
              , d = (e,t)=>((e,t)=>{
                const i = r();
                return i.emitter.addListener(e, t),
                ()=>{
                    i.emitter.removeListener(e, t)
                }
            }
            )(e, t)
              , c = (e,t)=>{
                r().emitter.emit(e, t)
            }
        }
        ,
        228411: (e,t,i)=>{
            i.d(t, {
                updateAriaLabelCounter: ()=>s
            });
            var o = i(29271)
              , n = i(234514);
            const s = (e,t,i)=>{
                if (!("number" == typeof t && e instanceof HTMLElement && e.classList.contains("PostBottomAction")))
                    return;
                const s = (e=>{
                    let t;
                    switch (e) {
                    case n.LikeButtonTypes.comment:
                        t = o.getLang("likes_comments_N_aria_short", "raw");
                        break;
                    case n.LikeButtonTypes.like:
                        t = o.getLang("likes_likes_N_aria_short", "raw");
                        break;
                    case n.LikeButtonTypes.share:
                        t = o.getLang("likes_shares_N_aria_short", "raw")
                    }
                    return t
                }
                )(i);
                if (!s)
                    return;
                const a = (0,
                o.langNumeric)(t, s, !1);
                e.setAttribute("aria-label", a)
            }
        }
        ,
        827652: (e,t,i)=>{
            i.d(t, {
                Likes: ()=>f
            });
            var o = i(434788)
              , n = i(795558)
              , s = i(953908)
              , a = i(320422)
              , r = i(82161)
              , _ = i(893106)
              , l = i(95432)
              , d = i(664988)
              , c = i(514986)
              , u = i(931917)
              , p = i(29271)
              , h = i(693982)
              , v = i(234514)
              , m = i(682951)
              , w = i(898298)
              , T = i(999237)
              , k = i(878021)
              , O = i(228411)
              , I = i(362246)
              , N = i(809053)
              , b = i(170864)
              , g = i(120744);
            const f = {
                toggle(e, t, i, o) {
                    if ((0,
                    s.cancelEvent)(t),
                    (0,
                    d.isObject)(window.cur) && (0,
                    d.isFunction)(cur.viewAsBox))
                        return cur.viewAsBox();
                    if (vk.widget && !vk.id)
                        return window.Widgets.oauth();
                    const a = (0,
                    n.hasClass)(e, "active");
                    (0,
                    n.addClass)(e, "animate"),
                    this.clientUpdate(i, v.LikeButtonTypes.like, a ? -1 : 1, !a),
                    this.handleAuthorLikeInReply(i, e, a);
                    const r = i.match(/^(video)(?!(_comment))(.*)/) ? (0,
                    I.getVideoTrackCode)() : void 0
                      , _ = {
                        act: a ? "a_do_unlike" : "a_do_like",
                        object: i,
                        hash: o,
                        list: cur.pvListId,
                        wall: 2,
                        from: this._getReference(i),
                        from_widget: vk.widget ? 1 : 0,
                        track_code: r
                    }
                      , l = ()=>((0,
                    n.toggleClass)(e, "active", a),
                    this.clientUpdate(i, v.LikeButtonTypes.like, a ? 1 : -1, a),
                    this.handleAuthorLikeInReply(i, e, !a),
                    !1);
                    window.ajax.post("like.php", _, {
                        onDone: t=>{
                            if (t.unauth_action_box)
                                return l(),
                                void k.UnauthActionBox.show(t.unauth_action_box);
                            this.update(i, t);
                            const o = i.match(/^(wall|market)(.*)/);
                            o && cur.onLike && cur.onLike(e, o[1], o[2], a),
                            this.handleAuthorLikeInReply(i, e, a, t)
                        }
                        ,
                        onFail: l
                    });
                    (0,
                    d.intval)((0,
                    n.domData)(e, "count")) > 0 ? f.showLikes(e, i, {
                        fast: !0
                    }) : e.tt && e.tt.destroy && e.tt.destroy()
                },
                _getReference: e=>cur.pvShown ? "photo_viewer" : e === cur.wallLayer ? "wkview" : window.mvcur && window.mvcur.mvShown ? "videoview" : cur.wallType ? "feed" === cur.wallType ? "news" === cur.section ? `feed_ ${cur.subsection ? cur.subsection : cur.section}` : "recommended" === cur.section ? "feed_recommended" + ("recent" !== cur.subsection ? "_" + cur.subsection : "") : (0,
                r.inArray)(cur.section, ["friends", "groups", "videos", "photos"]) ? "feed_" + (cur.subsection ? "_" + cur.subsection : "") : `feed_ ${cur.section}` : "top" === cur.wallType ? "wall_top" : "wall_" + (cur.onepost ? "one" : (cur.wallType || "").indexOf("full_") ? "page" : "full") : cur.module,
                share(e, t={}, i=void 0) {
                    if (vk.widget && !vk.id)
                        return window.Widgets.oauth();
                    if ((0,
                    d.isObject)(window.cur) && (0,
                    d.isFunction)(cur.viewAsBox))
                        return cur.viewAsBox();
                    if (window.cur) {
                        const e = (0,
                        N.getTrackCodeFromPost)(i);
                        window.cur.shareButtonTrackCode = e
                    }
                    const {objectType: n, objectId: s} = (0,
                    h.parseLikeObjectId)(e);
                    (vk.widget ? window.showBox : c.showBox)("like.php", (0,
                    o._)({
                        act: "publish_box",
                        object: e,
                        from_widget: vk.widget ? 1 : 0
                    }, t), {
                        onDone: (e,t)=>{
                            t.unauth_action_box && (e.hide(),
                            k.UnauthActionBox.show(t.unauth_action_box))
                        }
                        ,
                        stat: [window.jsc("web/page.js"), "page.css", window.jsc("web/wide_dd.js"), "wide_dd.css", window.jsc("web/sharebox.js")]
                    }),
                    "wall" === n && window.Wall && window.Wall.triggerAdPostStat(s, "share_post"),
                    cur.RpcMethods && (cur.RpcMethods.likeFullUpdate = t=>f.update(e, window.cleanObj(t)))
                },
                clientUpdate(e, t, i, o) {
                    const s = this._getButtonsByType(e, t);
                    if (!s.length)
                        return;
                    const a = (0,
                    d.intval)((0,
                    n.domData)(s[0], "count")) + i;
                    this._updateDom(e, t, a, o),
                    this.updateExternalIndex(e, {
                        type: t,
                        count: a,
                        isActive: o
                    })
                },
                update(e, t) {
                    if (!isNaN(parseInt(t.like_num))) {
                        const i = (0,
                        d.isUndefined)(t.like_my) ? void 0 : !!(0,
                        d.intval)(t.like_my);
                        this._updateDom(e, v.LikeButtonTypes.like, t.like_num, i, t.like_title, t.like_from_group),
                        this.updateExternalIndex(e, {
                            type: v.LikeButtonTypes.like,
                            count: t.like_num,
                            isActive: i
                        })
                    }
                    if (!isNaN(parseInt(t.share_num))) {
                        const i = (0,
                        d.isUndefined)(t.share_my) ? void 0 : !!(0,
                        d.intval)(t.share_my);
                        this._updateDom(e, v.LikeButtonTypes.share, t.share_num, i, t.share_title),
                        this.updateExternalIndex(e, {
                            type: v.LikeButtonTypes.share,
                            count: t.share_num
                        })
                    }
                    if ((0,
                    r.isNumeric)(t.views_num) && this._updateDom(e, v.LikeButtonTypes.views, t.views_num, void 0, t.views_title),
                    (0,
                    r.isNumeric)(t.comment_num) && this._updateDom(e, v.LikeButtonTypes.comment, t.comment_num),
                    t[m.REACTIONS_COUNTS_RESPONSE_FIELD]) {
                        const i = !!t.isQueueUpdate;
                        (0,
                        T.triggerReactionsUpdate)(e, t[m.REACTIONS_COUNTS_RESPONSE_FIELD], void 0, {
                            isQueueUpdate: i,
                            isUserAction: !1,
                            previewVisibility: w.previewVisibilityUseCurrent
                        })
                    }
                },
                updateComments(e, t) {
                    this.update(e, {
                        comment_num: t
                    })
                },
                _updateDom(e, t, i, o, s, a) {
                    var l;
                    const c = this._getButtonsByType(e, t)
                      , u = t === v.LikeButtonTypes.views;
                    if (!(null == (l = c) ? void 0 : l.length))
                        return;
                    let m = "";
                    u ? m = i : i > 0 && (m = vk.widget ? (0,
                    r.formatCount)(i) : (0,
                    p.langNumeric)(i, "%s", !0)),
                    u || (i = (0,
                    d.intval)(i));
                    for (let e = 0; e < c.length; e++) {
                        const r = c[e];
                        if ((0,
                        n.hasClass)(r, "no_counter"))
                            continue;
                        const l = u ? c[e] : (0,
                        h.getElementLikeButtonCount)(c[e]);
                        if ((0,
                        _.animateCount)(l, m, {
                            str: "auto",
                            noWrapWidth: !u,
                            noSpaceIfEmpty: !0
                        }),
                        (0,
                        n.toggleClass)(r, "empty", i <= 0),
                        "boolean" == typeof o && (0,
                        n.toggleClass)(r, "active", o),
                        (0,
                        n.attr)(c[e], "data-count", i),
                        (0,
                        n.attr)(r, "data-combine")) {
                            const e = o ? p.getLang("global_dislike") : `${p.getLang("global_like")}${i ? " " + i : ""}`;
                            (0,
                            n.attr)(r, "title") !== e && (0,
                            n.attr)(r, "title", e)
                        }
                        var w, T, k;
                        if ((0,
                        O.updateAriaLabelCounter)(r, i, t),
                        u)
                            null == (k = r) || null == (T = k.closest) || null == (w = T.call(k, ".like_views")) || w.setAttribute("title", s || "");
                        const I = c[e].tt;
                        if (I) {
                            const e = (0,
                            n.domByClass)(I.container, "_content")
                              , _ = (0,
                            n.domByClass)(I.container, "_value")
                              , l = (0,
                            n.domByClass)(I.container, "_title")
                              , c = (0,
                            n.domByClass)(I.container, "like_tt_group_like")
                              , u = (0,
                            d.intval)((0,
                            n.val)(_));
                            if ((0,
                            n.val)(_, i),
                            s && (0,
                            n.val)(l, s),
                            (0,
                            d.isObject)(I) && (I.likeInvalidated = !0),
                            (u !== i && u < 7 || !1 === s) && (t === v.LikeButtonTypes.like ? r.needReinitLikesTT = !0 : t === v.LikeButtonTypes.share && (r.needReinitShareTT = !0)),
                            t === v.LikeButtonTypes.like && (0,
                            n.toggleClass)(e, "me_hidden", !o),
                            !1 === s && I.destroy && I.destroy(),
                            void 0 !== a && c) {
                                const e = "like_tt_group_like_hidden";
                                a ? c.classList.remove(e) : c.classList.add(e)
                            }
                        }
                    }
                },
                _getButtonsByType: (e,t)=>(0,
                n.domQuery)(`._like_ ${e} ._ ${t}, ._like_ ${e} [data-like-button-type="${t}"]`),
                showLikes(e, t, i={}) {
                    var o;
                    if (!e || !(e instanceof HTMLElement) || e.postDontShowLikes)
                        return;
                    if (vk.widget && vk.show_external_auth_box)
                        return;
                    let s = i.views ? {
                        views: 1
                    } : i.share ? {
                        published: 1
                    } : {};
                    i.listId && (s.list = i.listId),
                    i.like_hash && (s.like_hash = i.like_hash),
                    i.like_stats_params && Object.assign(s, i.like_stats_params);
                    const _ = !!(0,
                    n.geByClass1)("share", (0,
                    n.gpeByClass)("like_wrap", e));
                    let l = document.body
                      , c = !1;
                    const u = getComputedStyle(e)
                      , p = (0,
                    d.intval)(u.getPropertyValue("padding-left").replace("px", ""))
                      , v = (0,
                    d.intval)(u.getPropertyValue("padding-top").replace("px", ""))
                      , m = (0,
                    h.getElementLikeButtonIcon)(e);
                    let w = 40;
                    "wpost" === i.from && (w = 24);
                    const T = [w - (0,
                    n.getSize)(m)[0] / 2 - p, 10 - v];
                    let k = i.cl || "";
                    if (i.share)
                        k += "likes_tt_share";
                    else if (k += "likes_tt_like",
                    "widget_community" === i.from)
                        T[0] = 6;
                    else if ("wcomments" === i.from || "widget_comments" === cur.wallType) {
                        const t = 16
                          , i = 10;
                        T[0] = (0,
                        n.getSize)(e)[0] + t - (0,
                        n.getSize)(m)[0] / 2 - i
                    } else
                        "photo_carousel" === i.from && (T[1] = 10);
                    if (!!(null == (o = i) ? void 0 : o.isFromReactionsPreview)) {
                        const t = e.querySelector("._ReactionsPreview__itemsContainer");
                        if (t) {
                            const e = t.querySelector(".ReactionsPreviewItem")
                              , i = (0,
                            n.getXYRect)(e, !1)
                              , o = (i.width || 0) / 2;
                            let s = o;
                            l = t;
                            i.left + i.width / 2 > window.innerWidth / 2 && (c = !0,
                            s = t.offsetWidth - o),
                            T[0] = -s + w
                        }
                    }
                    let O, I;
                    i.share ? (O = "needReinitLikesTT",
                    I = "resetLikesTTTimer") : (O = "needReinitShareTT",
                    I = "resetShareTTTimer"),
                    clearTimeout(e[I]),
                    (0,
                    a.showTooltip)(e, {
                        url: "/like.php",
                        params: (0,
                        r.extend)({
                            act: "a_get_stats",
                            object: t,
                            has_share: _ ? 1 : ""
                        }, s),
                        appendEl: l,
                        slide: 15,
                        shift: T,
                        ajaxdt: i.fast ? 0 : 100,
                        showdt: i.fast ? 0 : 400,
                        hidedt: 200,
                        dir: "auto",
                        checkLeft: !0,
                        needLeft: c,
                        reverseOffset: 80,
                        noZIndex: !0,
                        hasover: !0,
                        tip: {
                            over: ()=>{
                                f.showLikes(e, t, i)
                            }
                        },
                        typeClass: "like_tt",
                        className: k,
                        onHide: ()=>{
                            clearTimeout(e[I]),
                            e[O] && (e[I] = setTimeout((()=>{
                                delete e[O],
                                e.tt && e.tt.destroy && e.tt.destroy()
                            }
                            ), 200))
                        }
                    })
                },
                showShare: function(e, t, i) {
                    f.showLikes(e, t, (0,
                    r.extend)(i, {
                        share: 1
                    }))
                },
                updateViews: (e,t)=>{
                    vk.widget && vk.show_external_auth_box || window.ajax.post("like.php", {
                        act: "a_get_stats",
                        object: e,
                        views: 1
                    }, {
                        cache: 1,
                        onDone(t, i) {
                            const o = (0,
                            n.ce)("div", {
                                innerHTML: i
                            });
                            f._updateDom(e, v.LikeButtonTypes.views, t, void 0, o.innerText || o.textContent)
                        }
                    })
                }
                ,
                makeTemplate(e, t) {
                    if (!e)
                        return "";
                    (t = (0,
                    r.extend)({
                        buttons_prepend: "",
                        object_raw: "",
                        likes_count: "",
                        liked: !1,
                        share_count: "",
                        shared: "",
                        views_count: "",
                        share_opts: {},
                        like_opts: {},
                        class_name: "",
                        like_cont_class: "",
                        like_class_name: "",
                        [m.REACTIONS_COUNTS_RESPONSE_FIELD]: "",
                        reactions_class_name: ""
                    }, t)).like_active = t.liked ? "active" : "",
                    t.share_active = t.shared ? "active" : "",
                    t.comment_active = "",
                    t.likes_formatted_count = t.likes_count > 0 ? (0,
                    p.langNumeric)(t.likes_count, "%s", !0) : "",
                    t.share_formatted_count = t.share_count > 0 ? (0,
                    p.langNumeric)(t.share_count, "%s", !0) : "",
                    t.share_opts = this._convertOptsToString(t.share_opts),
                    t.like_opts = this._convertOptsToString(t.like_opts),
                    t.like_class_name += t.likes_count > 0 ? "" : " empty",
                    t.share_class_name = t.share_count > 0 ? "" : "empty";
                    const i = t[m.REACTIONS_COUNTS_RESPONSE_FIELD]
                      , o = !!i && Object.values(i).some((e=>!!e));
                    return t.reactions_class_name += o ? "" : " PostBottomAction--empty",
                    (0,
                    n.rs)(e, t)
                },
                _convertOptsToString: e=>JSON.stringify(e).replace(/\"/g, "'"),
                updateExternalIndex(e, t={}) {
                    const {objectType: i, objectId: o} = (0,
                    h.parseLikeObjectId)(e);
                    switch (i) {
                    case "photo":
                        if (!cur.pvShown || !cur.pvCurPhoto || cur.pvCurPhoto.id !== o)
                            return;
                        const e = cur.pvListId
                          , i = cur.pvIndex
                          , n = cur.pvData[e][i];
                        t.type === v.LikeButtonTypes.like ? (n.likes = t.count,
                        n.liked = t.isActive,
                        cur.pvCommsLikes[n.id][1] = t.count) : t.type === v.LikeButtonTypes.share && (n.shares = t.count);
                        break;
                    case "video":
                        if (window.mvcur && window.mvcur.mvShown && window.mvcur.videoRaw === o && t.type === v.LikeButtonTypes.like) {
                            const e = window.Videoview.getMvData();
                            e.likes = t.count,
                            void 0 !== t.isActive && (e.liked = t.isActive,
                            window.Videoview.playerOnLiked(t.isActive),
                            window.Videoview.recache())
                        }
                        break;
                    case "clip":
                        t.type === v.LikeButtonTypes.like && window.Videoview.playerOnLiked(t.isActive)
                    }
                },
                showLikesList(e, t) {
                    cur.viewAsBox || (0,
                    n.hasClass)((0,
                    n.gpeByClass)("like_btn", e), "no_counter") || (0,
                    l.showWiki)({
                        w: "likes/" + (0,
                        r.clean)(t)
                    }, !1, !1, {
                        queue: 1
                    })
                },
                showSharesList(e, t) {
                    cur.viewAsBox || (0,
                    n.hasClass)((0,
                    n.gpeByClass)("like_btn", e), "no_counter") || (0,
                    l.showWiki)({
                        w: "shares/" + (0,
                        r.clean)(t)
                    }, !1, !1, {
                        queue: 1
                    })
                },
                handleAuthorLikeInReply(e, t, i, o) {
                    var n, s, a, r;
                    const {objectId: _} = (0,
                    h.parseLikeObjectId)(e)
                      , l = (0,
                    b.getPostElemByChildEl)(t)
                      , d = Number(null == (s = l) || null == (n = s.dataset) ? void 0 : n.postAuthorId)
                      , c = null == (r = l) || null == (a = r.querySelector(`.reply#post ${_}`)) ? void 0 : a.querySelector(".HighlightingAuthorLike");
                    if (!c || !u.Ranges.isUserId(d) || vk.id !== d)
                        return;
                    const p = "HighlightingAuthorLike--hidden";
                    (o ? o.like_my : !i) ? (c.classList.remove(p),
                    o && (0,
                    g.renderAuthorUserOnboardingTooltip)(c)) : c.classList.add(p)
                }
            }
        }
        ,
        850343: (e,t,i)=>{
            var o;
            i.d(t, {
                AvailableHelpHints: ()=>o
            }),
            function(e) {
                e.ACCOUNT_HINT_NARRATIVES_ADD_TOOLTIP = "narratives:add_tooltip",
                e.ACCOUNT_HINT_MVK_STORIES_ARCHIVE_ACTIONS_HINT = "mvk:stories_archive:actions_hint",
                e.ACCOUNT_HINT_MINI_APPS_BUTTON_MVK_PROFILE = "mini_apps:button_mvk_profile",
                e.ACCOUNT_HINT_MINI_APPS_BUTTON_MVK_APP_MENU = "mini_apps:button_mvk_app_menu",
                e.ACCOUNT_HINT_MINI_APPS_COUNTER_TOGGLE_IN_ACTION_MENU = "mini_apps:counter_toggle_in_action_menu",
                e.ACCOUNT_HINT_MINI_APPS_COUNTER_TOGGLE_IN_ACTION_MENU_INTRO = "mini_apps:counter_toggle_in_action_menu_intro",
                e.ACCOUNT_HINT_MINI_APPS_OPEN_CATALOG_WITH_BADGES = "mini_apps:open_catalog_with_badges",
                e.ACCOUNT_HINT_MINI_APPS_CATALOG_SECTION_WITH_BADGES = "mini_apps:catalog_section_with_badges",
                e.ACCOUNT_HINT_SUPERAPP_RECOMMEND_ACTION_IN_MENU = "superapp:recommend_action_in_menu",
                e.ACCOUNT_HINT_SUPERAPP_SHOW_RECOMMEND_ACTION = "superapp:show_recommend_action",
                e.ACCOUNT_HINT_MINI_APPS_NAV_BUTTONS_THIRD_PARTY_BUTTONS = "mini_apps:nav_buttons_third_party_buttons",
                e.ACCOUNT_HINT_POSTING_EDITOR_ORD_AD = "posting:editor_ord_ad",
                e.ACCOUNT_HINT_PROFILE_REDESIGN_ONBOARDING_BANNER = "profile:redesign_onboarding_banner",
                e.ACCOUNT_HINT_PROFILE_REDESIGN_ONBOARDING_BOTTOMSHEET = "profile:redesign_onboarding_bottomsheet",
                e.ACCOUNT_HINT_PROFILE_SERVICES_MENU_BANNER = "profile:services_menu_banner",
                e.ACCOUNT_HINT_PROFILE_SERVICES_ONBOARDING = "profile:services_onboarding",
                e.ACCOUNT_HINT_MVK_PWA_TABBAR = "mvk:pwa_tabbar",
                e.ACCOUNT_HINT_STORIES_MUSIC_ACTIONS = "stories:music_actions",
                e.ACCOUNT_HINT_STORIES_PLAYLIST_ACTIONS = "stories:playlist_actions",
                e.ACCOUNT_HINT_STORIES_EDITOR_ORD_AD = "stories:editor_ord_ad",
                e.ACCOUNT_HINT_SUPERAPP_MVK_SHOWCASE = "superapp:mvk_showcase",
                e.IM_INTEGRATION_APPS_TOOLTIP_ON_PICKER = "superapp:im_integration_apps_tooltip_on_picker",
                e.ACCOUNT_HINT_IM_INTEGRATION_PICKER_APPS_BANNER = "superapp:im_integration_picker_apps_banner",
                e.ACCOUNT_HINT_IM_INTEGRATION_PICKER_GAMES_BANNER = "superapp:im_integration_picker_games_banner",
                e.ACCOUNT_HINT_FRIENDS_FOLLOWERS_MODE_FORCIBLY_ENABLED_ONBOARDING = "friends:followers_mode_forcibly_enabled_onboarding",
                e.ACCOUNT_HINT_FOLLOWERS_MODE_CAN_BE_ENABLED_ONBOARDING = "friends:followers_mode_can_be_enabled_onboarding",
                e.ACCOUNT_HINT_FRIENDS_FOLLOWERS_MODE_ABOUT_MODAL_IMAGES = "friends:followers_mode_about_modal_images",
                e.ACCOUNT_HINT_IM_INTEGRATION_CATALOG_ONBOARDING = "superapp:im_integration_catalog_onboarding",
                e.ACCOUNT_HINT_ONEPASS_ONBOARDING = "profile:passkey_onboarding_web",
                e.ACCOUNT_HINT_MVK_TABBAR_LIKE_NATIVE_ONBOARDING = "mvk:tabbar_like_native_onboarding",
                e.ACCOUNT_HINT_VIDEO_INTERACTIVE_VIDEO_ONBOARDING = "video:interactive_video_onboarding",
                e.AUTHOR_LIKE_ONBOARDING_HINT = "feed:author_like_onboarding",
                e.GROUP_LIKE_ONBOARDING_HINT = "feed:group_like_onboarding",
                e.ACCOUNT_HINT_COMMUNITY_REVIEW_TOOLTIP_MVK = "community:review:tooltip_mvk"
            }(o || (o = {}))
        }
    }, r = {};
    function _(e) {
        var t = r[e];
        if (void 0 !== t)
            return t.exports;
        var i = r[e] = {
            exports: {}
        };
        return a[e].call(i.exports, i, i.exports, _),
        i.exports
    }
    _.m = a,
    _.amdO = {},
    e = [],
    _.O = (t,i,o,n)=>{
        if (!i) {
            var s = 1 / 0;
            for (d = 0; d < e.length; d++) {
                for (var [i,o,n] = e[d], a = !0, r = 0; r < i.length; r++)
                    (!1 & n || s >= n) && Object.keys(_.O).every((e=>_.O[e](i[r]))) ? i.splice(r--, 1) : (a = !1,
                    n < s && (s = n));
                if (a) {
                    e.splice(d--, 1);
                    var l = o();
                    void 0 !== l && (t = l)
                }
            }
            return t
        }
        n = n || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > n; d--)
            e[d] = e[d - 1];
        e[d] = [i, o, n]
    }
    ,
    _.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return _.d(t, {
            a: t
        }),
        t
    }
    ,
    i = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__,
    _.t = function(e, o) {
        if (1 & o && (e = this(e)),
        8 & o)
            return e;
        if ("object" == typeof e && e) {
            if (4 & o && e.__esModule)
                return e;
            if (16 & o && "function" == typeof e.then)
                return e
        }
        var n = Object.create(null);
        _.r(n);
        var s = {};
        t = t || [null, i({}), i([]), i(i)];
        for (var a = 2 & o && e; "object" == typeof a && !~t.indexOf(a); a = i(a))
            Object.getOwnPropertyNames(a).forEach((t=>s[t] = ()=>e[t]));
        return s.default = ()=>e,
        _.d(n, s),
        n
    }
    ,
    _.d = (e,t)=>{
        for (var i in t)
            _.o(t, i) && !_.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: t[i]
            })
    }
    ,
    _.f = {},
    _.e = e=>Promise.all(Object.keys(_.f).reduce(((t,i)=>(_.f[i](e, t),
    t)), [])),
    _.u = e=>25394 === e ? "AudioLongtapModal.98b6df61d646414354a3.js" : 24817 === e ? "hls.7bfefe299fa92971b99a.js" : 75980 === e ? "menu_settings.b73d1f0a03f70163e02d.js" : 96816 === e ? "web-audio-lyrics-modal.5b786d2492e85e4a335f.js" : 9375 === e ? "voice_message_player.f0c31b4a3dc08de145c9.js" : 28762 === e ? "speech.be0c329a1eff7c81577d.js" : 57468 === e ? "SilentModeForms.6cf18c53f58f775934b3.js" : 28872 === e ? "feed-client-nav-skeleton.93951c516f1e3f2a55ad.js" : 35953 === e ? "feed-client-nav-async-right-block.98e503ddcd7a638e1b63.js" : 38288 === e ? "lottie.5e4758c39f106eab733a.js" : void 0,
    _.miniCssF = e=>e + "." + {
        25394: "6af57e1b0cf5a74f9a87",
        57468: "35be3dfa1e90e3cdd0a1",
        75980: "5bbee2c9f3e189193a73"
    }[e] + ".css",
    _.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    _.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    o = {},
    _.l = (e,t,i,n)=>{
        if (o[e])
            o[e].push(t);
        else {
            var s, a;
            if (void 0 !== i)
                for (var r = document.getElementsByTagName("script"), l = 0; l < r.length; l++) {
                    var d = r[l];
                    if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == "vk:" + i) {
                        s = d;
                        break
                    }
                }
            s || (a = !0,
            (s = document.createElement("script")).charset = "utf-8",
            s.timeout = 120,
            _.nc && s.setAttribute("nonce", _.nc),
            s.setAttribute("data-webpack", "vk:" + i),
            s.src = e),
            o[e] = [t];
            var c = (t,i)=>{
                s.onerror = s.onload = null,
                clearTimeout(u);
                var n = o[e];
                if (delete o[e],
                s.parentNode && s.parentNode.removeChild(s),
                n && n.forEach((e=>e(i))),
                t)
                    return t(i)
            }
              , u = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: s
            }), 12e4);
            s.onerror = c.bind(null, s.onerror),
            s.onload = c.bind(null, s.onload),
            a && document.head.appendChild(s)
        }
    }
    ,
    _.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    _.p = "/dist/",
    n = e=>new Promise(((t,i)=>{
        var o = _.miniCssF(e)
          , n = _.p + o;
        if (((e,t)=>{
            for (var i = document.getElementsByTagName("link"), o = 0; o < i.length; o++) {
                var n = (a = i[o]).getAttribute("data-href") || a.getAttribute("href");
                if ("stylesheet" === a.rel && (n === e || n === t))
                    return a
            }
            var s = document.getElementsByTagName("style");
            for (o = 0; o < s.length; o++) {
                var a;
                if ((n = (a = s[o]).getAttribute("data-href")) === e || n === t)
                    return a
            }
        }
        )(o, n))
            return t();
        ((e,t,i,o)=>{
            var n = document.createElement("link");
            n.rel = "stylesheet",
            n.type = "text/css",
            n.onerror = n.onload = s=>{
                if (n.onerror = n.onload = null,
                "load" === s.type)
                    i();
                else {
                    var a = s && ("load" === s.type ? "missing" : s.type)
                      , r = s && s.target && s.target.href || t
                      , _ = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                    _.code = "CSS_CHUNK_LOAD_FAILED",
                    _.type = a,
                    _.request = r,
                    n.parentNode.removeChild(n),
                    o(_)
                }
            }
            ,
            n.href = t,
            document.head.appendChild(n)
        }
        )(e, n, t, i)
    }
    )),
    s = {
        22568: 0
    },
    _.f.miniCss = (e,t)=>{
        s[e] ? t.push(s[e]) : 0 !== s[e] && {
            25394: 1,
            57468: 1,
            75980: 1
        }[e] && t.push(s[e] = n(e).then((()=>{
            s[e] = 0
        }
        ), (t=>{
            throw delete s[e],
            t
        }
        )))
    }
    ,
    (()=>{
        var e = {
            22568: 0
        };
        _.f.j = (t,i)=>{
            var o = _.o(e, t) ? e[t] : void 0;
            if (0 !== o)
                if (o)
                    i.push(o[2]);
                else {
                    var n = new Promise(((i,n)=>o = e[t] = [i, n]));
                    i.push(o[2] = n);
                    var s = _.p + _.u(t)
                      , a = new Error;
                    _.l(s, (i=>{
                        if (_.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0),
                        o)) {
                            var n = i && ("load" === i.type ? "missing" : i.type)
                              , s = i && i.target && i.target.src;
                            a.message = "Loading chunk " + t + " failed.\n(" + n + ": " + s + ")",
                            a.name = "ChunkLoadError",
                            a.type = n,
                            a.request = s,
                            o[1](a)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ,
        _.O.j = t=>0 === e[t];
        var t = (t,i)=>{
            var o, n, [s,a,r] = i, l = 0;
            if (s.some((t=>0 !== e[t]))) {
                for (o in a)
                    _.o(a, o) && (_.m[o] = a[o]);
                if (r)
                    var d = r(_)
            }
            for (t && t(i); l < s.length; l++)
                n = s[l],
                _.o(e, n) && e[n] && e[n][0](),
                e[n] = 0;
            return _.O(d)
        }
          , i = self.webpackChunkvk = self.webpackChunkvk || [];
        i.forEach(t.bind(null, 0)),
        i.push = t.bind(null, i.push.bind(i))
    }
    )();
    var l = _.O(void 0, [75514, 98066, 56990, 24509, 76400, 40885, 68592], (()=>_(132968)));
    l = _.O(l)
}
)();
