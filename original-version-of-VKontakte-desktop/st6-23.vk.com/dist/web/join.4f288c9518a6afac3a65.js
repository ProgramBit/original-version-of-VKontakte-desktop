(()=>{
    "use strict";
    var e, t, n, o, i, r, s = {
        73115: (e,t,n)=>{
            var o, i, r, s = n(605619), a = n(542138), c = n(643897);
            (null == (i = window.vk) || null == (o = i.pe) ? void 0 : o.static_manager_dynamic_imports) && (null == (r = window.vk) ? void 0 : r.stDomain) && (n.p = window.vk.stDomain + "/dist/"),
            window.Join = s.join,
            (0,
            a.registerApps)(s.join);
            try {
                window.stManager.done(window.jsc("web/join.js"))
            } catch (e) {
                (0,
                c.debugLog)(e)
            }
        }
        ,
        542138: (e,t,n)=>{
            n.d(t, {
                registerApps: ()=>u
            });
            var o = n(434788)
              , i = n(785893)
              , r = n(293579)
              , s = n(667294)
              , a = n(973935)
              , c = n(321850)
              , l = n(895145);
            const u = e=>{
                const t = "JoinAvatar";
                (0,
                r.registerReactApplication)(t, (u=>{
                    const d = (0,
                    r.getReactRootEl)(t);
                    if (!d)
                        return;
                    const _ = (0,
                    l.asyncComponent)((()=>Promise.all([n.e(98066), n.e(48817)]).then(n.bind(n, 863306))), (({JoinAvatar: e})=>e));
                    a.render((0,
                    i.jsx)(s.Suspense, {
                        fallback: (0,
                        i.jsx)(i.Fragment, {}),
                        children: (0,
                        i.jsx)(_, (0,
                        o._)({}, u, {
                            setFBSign: ()=>e.setFBSign(),
                            onAvatarError: ()=>e.avatarError(),
                            avatarSkip: ()=>e.avatarSkip(),
                            avatarSubmit: ()=>e.avatarSubmit()
                        }))
                    }), d),
                    (0,
                    c.pushNavDestroy)((()=>d && a.unmountComponentAtNode(d)))
                }
                ))
            }
        }
        ,
        862743: (e,t,n)=>{
            n.d(t, {
                JoinProgressLog: ()=>o
            });
            const o = {
                SCREEN_CONTACTS: "contacts",
                SCREEN_FINISH: "finish",
                SCREEN_EDUCATION: "education",
                SCREEN_EMAIL: "email",
                SCREEN_AVATAR: "registration_photo",
                STATUS_ERROR: "error",
                STATUS_SUCCESS: "success",
                STATUS_SKIP: "skip",
                ERROR_PASSWORD: "password error",
                ERROR_EMPTY_CONTACTS: "empty contacts",
                ERROR_EMPTY_SCHOOL: "empty school",
                ERROR_EMPTY_UNIVERSITY: "empty university",
                ERROR_EMPTY_EMAIL: "empty email",
                ERROR_INCORRECT_EMAIL: "incorrect email",
                ERROR_EMAIL_ALREADY_USED: "phone already used",
                ERROR_AVATAR_UPLOAD: "avatar upload error"
            }
        }
        ,
        232260: (e,t,n)=>{
            n.d(t, {
                JoinScreenFlow: ()=>l
            });
            var o, i = n(193452);
            !function(e) {
                e.USUAL_SCREEN_FLOW = "usual",
                e.USUAL_SCREEN_FLOW_WITH_AVATAR = "with_avatar",
                e.EMAIL_FIRST_TEST = "email_test"
            }(o || (o = {}));
            const r = {
                url_to: "/feed"
            }
              , s = {
                [i.EventScreens.REGISTRATION_COUNTRY]: {
                    screen_to: i.EventScreens.REGISTRATION_EDUCATION,
                    url_to: "/join?act=education"
                },
                [i.EventScreens.REGISTRATION_EDUCATION]: {
                    screen_to: i.EventScreens.REGISTRATION_EMAIL,
                    url_to: "/join?act=email"
                },
                [i.EventScreens.REGISTRATION_EMAIL]: {
                    url_to: "/feed"
                }
            }
              , a = {
                [i.EventScreens.REGISTRATION_COUNTRY]: {
                    screen_to: i.EventScreens.REGISTRATION_EDUCATION,
                    url_to: "/join?act=education"
                },
                [i.EventScreens.REGISTRATION_EDUCATION]: {
                    screen_to: i.EventScreens.REGISTRATION_EMAIL,
                    url_to: "/join?act=email"
                },
                [i.EventScreens.REGISTRATION_EMAIL]: {
                    screen_to: i.EventScreens.REGISTRATION_PHOTO,
                    url_to: "/join?act=avatar"
                },
                [i.EventScreens.REGISTRATION_PHOTO]: {
                    url_to: "/feed"
                }
            }
              , c = {
                usual: s,
                email_test: {
                    [i.EventScreens.REGISTRATION_EMAIL]: {
                        screen_to: i.EventScreens.REGISTRATION_COUNTRY,
                        url_to: "/join?act=contacts"
                    },
                    [i.EventScreens.REGISTRATION_COUNTRY]: {
                        screen_to: i.EventScreens.REGISTRATION_EDUCATION,
                        url_to: "/join?act=education"
                    },
                    [i.EventScreens.REGISTRATION_EDUCATION]: {
                        url_to: "/feed"
                    }
                },
                with_avatar: a
            };
            class l {
                nextScreen() {
                    var e;
                    return null != (e = this.screen_flow[this.current_screen]) ? e : r
                }
                constructor(e, t=l.DEFAULT_FLOW) {
                    this.current_screen = e,
                    this.screen_flow_variant = t,
                    this.screen_flow = c[this.screen_flow_variant]
                }
            }
            l.DEFAULT_FLOW = "usual"
        }
        ,
        418395: (e,t,n)=>{
            n.d(t, {
                joinLogProgress: ()=>i
            });
            var o = n(504867);
            function i(e, t, n) {
                (0,
                o.statlogsValueEvent)("join_progress", e, t, n)
            }
        }
        ,
        605619: (e,t,n)=>{
            n.d(t, {
                join: ()=>b
            });
            var o = n(434788)
              , i = n(301230)
              , r = n(643897)
              , s = n(254667)
              , a = n(562112)
              , c = n(893106)
              , l = n(438221)
              , u = n(795558)
              , d = n(725296)
              , _ = n(82161)
              , g = n(953908)
              , h = n(514986)
              , S = n(584356)
              , m = n(29271)
              , E = n(320422)
              , p = n(193452)
              , I = n(66276)
              , v = n(681480)
              , R = n(211273)
              , T = n(862743)
              , y = n(418395)
              , j = n(232260)
              , C = n(659397)
              , f = n(839470)
              , N = n(931917);
            function w(e, t) {
                cur[`${e}IsDirty`] || (cur[`${e}IsDirty`] = !0,
                t())
            }
            function O() {
                var e;
                (null == (e = cur) ? void 0 : e.fbSign) && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.FACEBOOK_REGISTRATION, p.EventFieldValues.REGISTERED_VIA_FB)
            }
            function P() {
                var e;
                const t = (0,
                u.ge)("join_phone");
                t && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.PHONE_NUMBER, t.value, !0),
                (null == (e = cur) ? void 0 : e.uiPhoneCountry) && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.PHONE_COUNTRY, cur.uiPhoneCountry.val(), !0)
            }
            const b = {
                setFBSign() {
                    window.cur.fbSign = !0
                },
                isCountryVisible() {
                    return !this.isCountryHidden()
                },
                isCountryHidden: ()=>(0,
                f.partConfigEnabled)("onboarding_skip_country"),
                show(e) {
                    (0,
                    u.isVisible)(e) || (0,
                    c.slideDown)(e, 150)
                },
                hide(e) {
                    (0,
                    u.isVisible)(e) && (0,
                    c.slideUp)(e, 150)
                },
                scrollnode: ()=>window,
                scrollResize(e, t) {
                    if (i.browser.mobile && !i.browser.safari_mobile)
                        return;
                    const n = (0,
                    l.scrollGetY)();
                    !0 === t && (cur.nextButtonTop = (0,
                    u.getXY)(cur.nextButtonWrap)[1],
                    i.browser.msie6 && (cur.nextButtonTop += n));
                    const o = cur.resultShown && n + lastWindowHeight < cur.nextButtonTop + cur.nextButtonHeight + (0,
                    _.intval)((0,
                    u.getStyle)("content", "marginTop")) + (0,
                    u.ge)("page_header_cont").offsetHeight - 8;
                    o && !cur.docked ? ((0,
                    u.addClass)(cur.nextButton, "fixed"),
                    cur.docked = !0) : !o && cur.docked && ((0,
                    u.removeClass)(cur.nextButton, "fixed"),
                    i.browser.msie6 && cur.nextButtonWrap.appendChild(cur.nextButton),
                    cur.docked = !1),
                    cur.docked && e && "resize" === e.type && (i.browser.msie6 ? cur.nextButton.style.left = (0,
                    u.getXY)((0,
                    u.ge)("content"))[0] + "px" : (cur.nextButton.style.left = (0,
                    u.ge)("page_layout").offsetLeft + (0,
                    u.ge)("content").offsetLeft + "px",
                    setTimeout(b.nextResetStyle, 0)))
                },
                nextResetStyle() {
                    cur.nextButton.style.left = ""
                },
                initScroll() {
                    (0,
                    _.extend)(cur, {
                        nextButton: (0,
                        u.ge)("join_" + cur.section + "_next"),
                        nextButtonWrap: (0,
                        u.ge)("join_" + cur.section + "_next_wrap"),
                        resultEl: (0,
                        u.ge)("join_" + cur.section + "_result")
                    }),
                    cur.nextButtonHeight = (0,
                    u.getSize)(cur.nextButton)[1],
                    cur.nextButtonWrap.style.height = cur.nextButtonHeight + "px",
                    cur.resultShown = (0,
                    u.isVisible)(cur.resultEl),
                    b.scrollResize(!1, !0),
                    (0,
                    g.addEvent)(b.scrollnode(), "scroll", b.scrollResize),
                    (0,
                    g.addEvent)(window, "resize", b.scrollResize),
                    cur.destroy.push((e=>{
                        (0,
                        g.removeEvent)(b.scrollnode(), "scroll", b.scrollResize),
                        (0,
                        g.removeEvent)(window, "resize", b.scrollResize),
                        i.browser.msie6 && e.nextButtonWrap.appendChild(e.nextButton)
                    }
                    ))
                },
                initStatsPhoneVerify() {
                    const e = (0,
                    u.ge)("join_called_phone")
                      , t = (0,
                    u.ge)("join_called_code")
                      , n = (0,
                    u.ge)("join_code")
                      , o = ()=>{
                        cur.isCalledPhoneElDirty || (I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.INPUT_CODE_INTERACTION, cur.eventScreen),
                        cur.isCalledPhoneElDirty = !0)
                    }
                    ;
                    P(),
                    I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.SMS_CODE, n.value, !0),
                    cur.statsPhoneVerifyInited || (e.addEventListener("keyup", (()=>{
                        I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.SMS_CODE, e.value),
                        o()
                    }
                    )),
                    t.addEventListener("keyup", (()=>{
                        I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.SMS_CODE, t.value),
                        o()
                    }
                    )),
                    n.addEventListener("keyup", (()=>{
                        I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.SMS_CODE, n.value),
                        o()
                    }
                    )),
                    cur.statsPhoneVerifyInited = !0)
                },
                initStatsPhone() {
                    const e = (0,
                    u.ge)("join_phone");
                    I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.PHONE_NUMBER, e.value, !0),
                    cur.statsPhoneInited || (e.addEventListener("keyup", (()=>{
                        I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.PHONE_NUMBER, e.value),
                        cur.isPhoneElDirty || (I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.INPUT_NUMBER_INTERACTION, cur.eventScreen),
                        cur.isPhoneElDirty = !0)
                    }
                    )),
                    cur.statsPhoneInited = !0)
                },
                initStatsPassword() {
                    const e = (0,
                    u.ge)("join_pass");
                    I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.PASSWORD, e.value, !0),
                    cur.statsPasswordInited || (e.addEventListener("keyup", (()=>{
                        I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.PASSWORD, e.value)
                    }
                    )),
                    cur.statsPasswordInited = !0)
                },
                initStatsRules() {
                    const e = (0,
                    u.ge)("join_accept_terms_checkbox");
                    I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.RULES_ACCEPT, b.policyChecked() + "", !0),
                    cur.statsRulesInited || (e.addEventListener("click", (()=>{
                        I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.RULES_ACCEPT, b.policyChecked() + "")
                    }
                    )),
                    cur.statsRulesInited = !0)
                },
                initStats() {
                    cur.eventScreen = p.EventScreens.REGISTRATION_PHONE,
                    ((0,
                    u.isVisible)("join_code_row") || (0,
                    u.isVisible)("join_called_phone_row") || (0,
                    u.isVisible)("join_called_code_row")) && (cur.eventScreen = p.EventScreens.REGISTRATION_PHONE_VERIFY),
                    (0,
                    u.isVisible)("join_pass_row") && (cur.eventScreen = p.EventScreens.REGISTRATION_PASSWORD),
                    "done" === nav.objLoc.act && (cur.eventScreen = p.EventScreens.REGISTRATION_COMPLETE),
                    "contacts" === nav.objLoc.act && (cur.eventScreen = p.EventScreens.REGISTRATION_COUNTRY),
                    "education" === nav.objLoc.act && (cur.eventScreen = p.EventScreens.REGISTRATION_EDUCATION),
                    "email" === nav.objLoc.act && (cur.eventScreen = p.EventScreens.REGISTRATION_EMAIL),
                    cur.eventScreen === p.EventScreens.REGISTRATION_PHONE && (b.initStatsPhone(),
                    b.initStatsRules()),
                    cur.eventScreen === p.EventScreens.REGISTRATION_PHONE_VERIFY && (b.initStatsPhoneVerify(),
                    b.initStatsRules()),
                    cur.eventScreen === p.EventScreens.REGISTRATION_PASSWORD && (b.initStatsPassword(),
                    b.initStatsRules()),
                    this.isCountryVisible() && cur.eventScreen === p.EventScreens.REGISTRATION_COUNTRY && (I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.COUNTRY, `${cur.uiCountry.val()}`, !0),
                    I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.CITY, `${cur.uiCity.val()}`, !0)),
                    cur.eventScreen === p.EventScreens.REGISTRATION_EDUCATION && (I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.COUNTRY, `${cur.selData.country_val[0]}`, !0),
                    I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.CITY, `${cur.selData.city_val[0]}`, !0),
                    I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.GRADUATION, "", !0),
                    cur.isSchool ? (I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.SCHOOL, "", !0),
                    I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.YEAR_FROM, "", !0),
                    I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.YEAR_TO, "", !0),
                    I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.CLASS, "", !0),
                    I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.SPECIALIZATION, "", !0)) : (I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.UNIVERSITY, "", !0),
                    I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.FACULTY, "", !0),
                    I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.CHAIR, "", !0),
                    I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.EDU_FORM, "", !0),
                    I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.EDU_STATUS, "", !0))),
                    cur.eventScreen === p.EventScreens.REGISTRATION_EMAIL && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.EMAIL, "", !0)
                },
                showProgress() {
                    if ((0,
                    u.isVisible)(cur.resultEl)) {
                        const e = (0,
                        u.ge)("join_" + cur.section + "_summary");
                        e.lastChild && (0,
                        u.hasClass)(e.lastChild, "progress_inline") || e.appendChild((0,
                        u.ce)("span", {
                            className: "progress_inline join_summary_prg"
                        }))
                    } else
                        (0,
                        u.show)("join_" + cur.section + "_none_prg"),
                        cur.noneEl.style.visibility = "hidden"
                },
                hideProgress() {
                    if ((0,
                    u.isVisible)(cur.resultEl)) {
                        const e = (0,
                        u.ge)("join_" + cur.section + "_summary");
                        e.lastChild && (0,
                        u.hasClass)(e.lastChild, "progress_inline") && (0,
                        u.re)(e.lastChild)
                    } else
                        cur.noneEl.style.visibility = "",
                        (0,
                        u.hide)("join_" + cur.section + "_none_prg")
                },
                addFriendLogged: function(e, t, n) {
                    w(p.RegistrationFieldItemNames.FRIEND_ASK, (function() {
                        I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.FRIEND_ASK, "1"),
                        I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.FIRST_FRIEND_ASK, p.EventScreens.REGISTRATION_LIST_FRIENDS_FACEBOOK, void 0, {
                            force: !0
                        })
                    }
                    )),
                    ajax.post("al_friends.php", {
                        act: "add",
                        mid: t,
                        hash: n,
                        from: "fb_sign"
                    }, {
                        onDone: ()=>{
                            (0,
                            u.hide)("join_add" + t),
                            (0,
                            u.show)("join_request" + t)
                        }
                        ,
                        showProgress: ()=>(0,
                        d.lockButton)(e),
                        hideProgress: ()=>(0,
                        d.unlockButton)(e)
                    })
                },
                removeFriendLogged: function(e, t, n) {
                    ajax.post("al_friends.php", {
                        act: "remove",
                        mid: t,
                        hash: n,
                        from: "fb_sign"
                    }, {
                        onDone: ()=>{
                            (0,
                            u.show)("join_add" + t),
                            (0,
                            u.hide)("join_request" + t)
                        }
                        ,
                        showProgress: ()=>(0,
                        d.lockButton)(e),
                        hideProgress: ()=>(0,
                        d.unlockButton)(e)
                    })
                },
                isPhoneCall() {
                    const e = parseInt(cur.validationType, 10);
                    return 3 === e || 4 === e
                },
                isPhoneCallStrict: ()=>3 === parseInt(cur.validationType, 10),
                phoneDone: function(e, t) {
                    if (e) {
                        const n = (0,
                        u.ge)("join_phone");
                        cur.uiPhoneCountry && cur.uiPhoneCountry.val(t, !0),
                        (0,
                        u.val)(n, e),
                        n.readOnly = !0,
                        cur.uiPhoneCountry && (cur.uiPhoneCountry.disable(!0),
                        (0,
                        u.addClass)("join_phone_prefixed", "join_readonly_wrap")),
                        (0,
                        u.addClass)(n, "join_readonly")
                    }
                    cur.resendInt && clearInterval(cur.resendInt),
                    cur.resendInt = setInterval(b.resendUpdate, 1e3),
                    (0,
                    u.show)("join_code_submit", "join_other_phone", "join_resend"),
                    (0,
                    u.hide)("join_phone_submit"),
                    b.isPhoneCall() ? ((0,
                    u.val)((0,
                    u.ge)("join_called_phone_prefix").firstChild, ""),
                    (0,
                    u.val)("join_called_phone", ""),
                    (0,
                    u.hide)("join_code_row"),
                    (0,
                    u.hide)("join_called_code_row"),
                    (0,
                    c.slideDown)("join_called_phone_row", 150, u.elfocus.pbind("join_called_phone"))) : (0,
                    u.isVisible)("join_called_phone_row") || (0,
                    u.isVisible)("join_called_code_row") ? ((0,
                    u.hide)("join_called_phone_row"),
                    (0,
                    u.show)("join_code_row"),
                    setTimeout(u.elfocus.pbind("join_code"), 100)) : (0,
                    c.slideDown)("join_code_row", 150, u.elfocus.pbind("join_code")),
                    (0,
                    u.val)("join_submit_result", ""),
                    (0,
                    u.val)("join_code", ""),
                    b.initPhoneCode()
                },
                checkStatus: function(e, t) {
                    const n = (0,
                    S.curBox)()
                      , o = n ? n.showProgress : d.lockButton.pbind("join_send_phone")
                      , i = n ? n.hideProgress : d.unlockButton.pbind("join_send_phone");
                    if (cur.checkingStatus) {
                        if (cur.checkingStatus < 0)
                            o(),
                            cur.checkingStatus = 1;
                        else if (++cur.checkingStatus,
                        cur.checkingStatus > 4)
                            return cur.checkingStatus = -1,
                            i(),
                            b.phoneDone(e, t)
                    } else
                        o(),
                        cur.checkingStatus = 1,
                        cur.destroy.push((function() {
                            clearTimeout(cur.checkingTimer),
                            i()
                        }
                        ));
                    cur.checkingTimer = setTimeout(ajax.post("join.php", {
                        act: "phone_check"
                    }, {
                        onDone: n=>{
                            if (n || cur.checkingStatus > 3)
                                return cur.checkingStatus = -1,
                                i(),
                                b.phoneDone(e, t);
                            cur.checkingTimer = setTimeout(b.checkStatus.pbind(e, t), 2e3)
                        }
                        ,
                        onFail: n=>(cur.checkingStatus = -1,
                        i(),
                        n ? (b.showMsg("join_submit_result", n, u.elfocus.pbind("join_phone")),
                        !0) : b.phoneDone(e, t))
                    }), 1e3)
                },
                submitPhone: e=>{
                    if (!e && (0,
                    d.isButtonLocked)("join_send_phone"))
                        return;
                    if (!b.policyChecked())
                        return void (0,
                        d.notaBene)("join_accept_terms_checkbox");
                    const t = (0,
                    u.ge)("join_phone")
                      , n = b.getPhone()
                      , o = (0,
                    u.val)("join_phone")
                      , i = !!cur.uiPhoneCountry && cur.uiPhoneCountry.val_full();
                    if (t.disabled)
                        return (0,
                        u.elfocus)("join_code");
                    ajax.post("join.php", {
                        act: "phone",
                        phone: n,
                        hash: cur.hash
                    }, {
                        showProgress: d.lockButton.pbind("join_send_phone"),
                        hideProgress: d.unlockButton.pbind("join_send_phone"),
                        onDone: (e,t,n,r,s)=>{
                            if (e)
                                return (0,
                                d.lockButton)("join_send_phone"),
                                void setTimeout(b.submitPhone.pbind(!0), 1e3);
                            if (cur.strongCode !== n) {
                                const e = (0,
                                u.ge)("join_code").tt;
                                e && e.destroy(),
                                cur.strongCode = n
                            }
                            cur.validationType = s,
                            cur.resendDelay = r,
                            b.phoneDone(o, i),
                            b.resendUpdate();
                            const a = (0,
                            u.isVisible)("join_code_submit") ? p.EventScreens.REGISTRATION_PHONE : cur.eventScreen;
                            O(),
                            I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SCREEN_PROCEED, null != a ? a : p.EventScreens.REGISTRATION_PHONE, p.EventScreens.REGISTRATION_PHONE_VERIFY);
                            const c = cur.uiPhoneCountry.val();
                            String(cur.defCountry) !== String(c) && (I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.SELECT_COUNTRY_NAME, c),
                            I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.PROCEED_OTHER_COUNTRY_CODE, cur.eventScreen)),
                            b.initStats()
                        }
                        ,
                        onFail: e=>{
                            if (!e)
                                return;
                            const t = (0,
                            u.ge)("join_phone");
                            return t && t.tt && t.tt.hide && t.tt.hide({
                                fasthide: !0
                            }),
                            b.showMsg("join_submit_result", e, u.elfocus.pbind("join_phone")),
                            !0
                        }
                    })
                }
                ,
                getStrength(e) {
                    let t = -1;
                    const n = ["qwerty", "йцукен", "gfhjkm", "пароль", "password", "abc123", "fuckyou", "123abc", "baseball", "football", "soccer", "monkey", "liverpool", "princess", "jordan", "slipknot", "superman", "iloveyou"];
                    if (e !== e.replace(/\s/g, "") && ((0,
                    u.val)("join_pass", e = e.replace(/\s/g, "")),
                    (0,
                    u.elfocus)("join_pass")),
                    e.length < 6)
                        t = 0;
                    else if (e.match(/^\d+$/) || (0,
                    _.indexOf)(n, e) >= 0 || e.substr(-1).match(/\d/) && n.indexOf(e.substr(0, e.length - 1)) >= 0)
                        t = 1;
                    else {
                        const n = [/[^a-z]/g, /[^A-Z]/g, /[^а-яё]/g, new RegExp("[^А-ЯЁ]","g"), /[^0-9]/g, new RegExp("[a-zA-Zа-яА-ЯёЁ0-9]","g")];
                        let o = []
                          , i = 0;
                        for (let t = 0, r = n.length; t < r; ++t) {
                            const r = e.replace(n[t], "").length;
                            r && (r > 1 && ++i,
                            o.push({
                                group: t,
                                cnt: r
                            }))
                        }
                        if (o.length < 3 && parseInt(o[o.length - 1].group, 10) !== n.length - 1 && i < 2 && (t = 2),
                        (i > 2 || o.length > 2 && parseInt(o[o.length - 1].group, 10) === n.length - 1) && (t = 4),
                        t < 0 && i > 1) {
                            const o = e.replace(n[n.length - 1], "");
                            o.length > 1 && o.replace(new RegExp((0,
                            _.escapeRE)(o.charAt(0)),"g"), "").length && (t = 4)
                        }
                        t < 0 && (t = 3),
                        t && t < 3 && e.length > 13 && ++t
                    }
                    return t
                },
                updateStrength() {
                    let e = (0,
                    u.val)("join_pass")
                      , t = b.getStrength(e);
                    (0,
                    u.ge)("join_about_pass").className = "join_pwd_level" + t,
                    (0,
                    u.ge)("join_pass_strength").innerHTML = e ? m.getLang("join_pwd_level" + t) : m.getLang("join_pwd_min_length"),
                    setQuickLoginData(cur.fbSign && cur.fbValid ? cur.fbEmail : b.getPhone(), e, {
                        params: cur.joinParams
                    })
                },
                initPhoneCode() {
                    cur.codeForm || (setQuickLoginData(b.getPhone(), "", {
                        params: cur.joinParams
                    }),
                    utilsNode.appendChild((0,
                    u.ce)("div", {
                        innerHTML: `\n<form method="POST" action="${vk.loginscheme}://${cur.loginHost}/?act=check_code&_origin=${locProtocol}//${locHost}" id="join_code_form" name="join_code_form" target="join_code_frame">\n  <input type="hidden" name="email" id="join_code_phone" />\n  <input type="hidden" name="code" id="join_code_code" />\n  <input type="hidden" name="call" id="join_code_call" />\n  <input type="hidden" name="recaptcha" id="join_code_recaptcha" />\n  <input type="hidden" name="captcha_sid" id="join_code_sid" />\n  <input type="hidden" name="captcha_key" id="join_code_key" />\n</form>\n<iframe id="join_code_frame" name="join_code_frame"></iframe>\n`
                    })),
                    cur.codeForm = (0,
                    u.ge)("join_code_form"),
                    cur.codeFrame = (0,
                    u.ge)("join_code_frame"))
                },
                validatePaste: e=>{
                    let t = (e || window).clipboardData.getData("Text").replace(/[^0-9]/g, "");
                    const n = (0,
                    u.ge)("join_phone")
                      , o = (0,
                    u.ge)("join_phone_prefix").firstChild;
                    if (t.length < 11)
                        return;
                    const i = t.slice(0, 2);
                    89 != i && 87 != i || (t = "7" + t.slice(1));
                    for (let i of cur.countries) {
                        const r = i[3].slice(1)
                          , s = r.length;
                        if (t.slice(0, s) === r)
                            return cur.uiPhoneCountry.val(i[0]),
                            (0,
                            u.val)(o, i[3].toString()),
                            (0,
                            u.val)(n, t.slice(s)),
                            (0,
                            g.cancelEvent)(e)
                    }
                }
                ,
                initPhoneCountry: function(e, t) {
                    cur.countries = e,
                    cur.defCountry = t;
                    const n = (0,
                    u.ge)("join_phone_country")
                      , o = !!+n.dataset.vkConnectIntegration;
                    cur.uiPhoneCountry = new Dropdown(n,cur.countries,{
                        selectedItems: t,
                        big_text: !0,
                        disablePlaceholder: !0,
                        liteEventsBind: !0,
                        autocomplete: !0,
                        multiselect: !1,
                        onShow: function() {
                            I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SELECT_COUNTRY, cur.eventScreen)
                        },
                        onChange: function(e) {
                            const t = (0,
                            u.ge)("join_phone")
                              , n = (0,
                            u.ge)("join_phone_prefix").firstChild
                              , i = cur.uiPhoneCountry.val_full()[3];
                            if (t.readOnly || 0 === e || "0" === e || "" === e || !1 === e || void 0 === e) {
                                const e = (0,
                                u.val)(n);
                                if (i == e)
                                    return;
                                for (let t = 0, n = cur.countries.length; t < n; ++t)
                                    if (cur.countries[t][3] == e)
                                        return cur.uiPhoneCountry.val(cur.countries[t]);
                                return cur.uiPhoneCountry.val(cur.defCountry, !0)
                            }
                            (0,
                            u.val)(n, i),
                            o || b.updatePolicyLink(cur.uiPhoneCountry.val()),
                            I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.SELECT_COUNTRY_NAME, cur.uiPhoneCountry.val()),
                            I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SELECT_COUNTRY_DONE, cur.eventScreen),
                            I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.PHONE_COUNTRY, cur.uiPhoneCountry.val())
                        }
                    }),
                    (0,
                    u.ge)("join_phone").readOnly ? cur.uiPhoneCountry.disable(!0) : I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.PHONE_COUNTRY, cur.uiPhoneCountry.val(), !0),
                    cur.destroy.push(cur.uiPhoneCountry.destroy.bind(cur.uiPhoneCountry))
                },
                getPhone() {
                    const e = (0,
                    _.trim)((0,
                    u.val)("join_phone"));
                    return (0,
                    _.trim)((0,
                    u.val)(((0,
                    u.ge)("join_phone_prefix") || {}).firstChild) || "") + e
                },
                submitPhoneCode() {
                    if (!cur.codeForm || (0,
                    d.isButtonLocked)("join_send_code"))
                        return;
                    if (!b.policyChecked())
                        return void (0,
                        d.notaBene)("join_accept_terms_checkbox");
                    let e, t, n;
                    b.isPhoneCall() ? (e = "join_called_phone",
                    t = "join_called_phone_prefixed",
                    n = cur.calledPhoneLen) : (e = "join_code",
                    t = e,
                    n = 5);
                    const o = (0,
                    _.trim)((0,
                    u.val)(e)).replace(/[^a-z0-9]/g, "");
                    if (o.length < n)
                        return (0,
                        d.notaBene)(t);
                    if ("05937" === o)
                        return b.showMsg("join_submit_result", m.getLang("join_sorry_code"), u.elfocus.pbind("join_code", !1, !1));
                    if ((0,
                    u.val)("join_code_phone", b.getPhone()),
                    (0,
                    u.val)("join_code_code", o),
                    b.isPhoneCall()) {
                        const e = Number(vk.id);
                        (0,
                        u.val)("join_code_call", isNaN(e) || N.Ranges.isZeroOwner(e) ? (0,
                        a.getCookie)("remixnreg_sid") : -vk.id)
                    }
                    (0,
                    d.lockButton)("join_send_code"),
                    cur.codeForm.submit()
                },
                policyChecked() {
                    const e = (0,
                    u.geByClass1)("checkbox", "join_accept_terms_checkbox");
                    return (0,
                    d.isChecked)(e)
                },
                togglePhoneSubmit() {
                    let e = b.policyChecked();
                    (0,
                    d.disableButton)((0,
                    u.ge)("join_send_phone"), !e),
                    (0,
                    d.disableButton)((0,
                    u.ge)("join_send_code"), !e),
                    (0,
                    d.disableButton)((0,
                    u.ge)("join_send_pass"), !e)
                },
                askPassword(e, t) {
                    (0,
                    S.curBox)() && (0,
                    S.curBox)().hide(),
                    cur.sureBoxText = t,
                    (0,
                    d.unlockButton)("join_send_code"),
                    (0,
                    u.val)("join_code", (0,
                    u.val)("join_code_code"));
                    const n = cur.joinParams && cur.joinParams.facebook;
                    cur.joinParams = {
                        join_code: (0,
                        u.val)("join_code"),
                        join_hash: e
                    },
                    n && (cur.joinParams.facebook = 1),
                    b.isPhoneCall() ? ((0,
                    u.ge)("join_called_phone").readOnly = !0,
                    (0,
                    u.addClass)((0,
                    u.ge)("join_called_phone"), "join_readonly"),
                    (0,
                    u.addClass)((0,
                    u.ge)("join_called_phone_prefixed"), "join_readonly_wrap")) : ((0,
                    u.ge)("join_code").readOnly = !0,
                    (0,
                    u.addClass)((0,
                    u.ge)("join_code"), "join_readonly")),
                    (0,
                    u.show)("join_pass_submit"),
                    (0,
                    u.hide)("join_other_phone", "join_code_submit", "join_resend", "join_country_row"),
                    (0,
                    c.slideDown)("join_pass_row", 150, u.elfocus.pbind("join_pass")),
                    (0,
                    u.val)("join_submit_result", ""),
                    O(),
                    P(),
                    I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SCREEN_PROCEED, cur.eventScreen, p.EventScreens.REGISTRATION_PASSWORD),
                    b.initStats()
                },
                askCaptcha(e, t, n) {
                    cur.codeForm && ((0,
                    d.unlockButton)("join_send_code"),
                    2 === parseInt(t, 10) ? window.badCodeBox = (0,
                    h.showReCaptchaBox)(e, n, window.badCodeBox, {
                        onSubmit: (e,t)=>{
                            (0,
                            u.val)("join_code_recaptcha", e),
                            cur.codeForm.submit()
                        }
                        ,
                        onHide: ()=>{
                            window.badCodeBox = !1
                        }
                    }) : window.badCodeBox = (0,
                    h.showCaptchaBox)(e, n, window.badCodeBox, {
                        onSubmit: (e,t)=>{
                            (0,
                            u.val)("join_code_sid", e),
                            (0,
                            u.val)("join_code_key", t),
                            cur.codeForm.submit()
                        }
                        ,
                        onHide: ()=>{
                            window.badCodeBox = !1
                        }
                    }))
                },
                submitPasswordSure() {
                    (0,
                    h.showFastBox)(m.getLang("join_new_page_sure_title"), m.getLang("join_new_page_sure"), m.getLang("join_new_page_sure_submit"), b.submitPassword.pbind(-1), m.getLang("global_cancel"))
                },
                submitPassword(e, t) {
                    if ((0,
                    d.isButtonLocked)("join_send_pass") && !cur.submitOnSign)
                        return;
                    if (!b.policyChecked())
                        return void (0,
                        d.notaBene)("join_accept_terms_checkbox");
                    let n, o;
                    if (!0 === t)
                        n = "000000";
                    else if (n = (0,
                    u.val)("join_pass"),
                    n.length < 6 || b.getStrength(n) < 3)
                        return (0,
                        d.notaBene)("join_pass");
                    if (!cur.sureBoxText || 1 === e || -1 === e)
                        return cur.joinParams.join_to_already = (0,
                        _.intval)(e),
                        cur.fbSign && !cur.fbSigned ? (cur.submitOnSign = 1,
                        (0,
                        d.lockButton)("join_send_pass")) : (window._oldOnLoginFailed || (window._oldOnLoginFailed = window.onLoginFailed,
                        window._oldOnLoginDone = window.onLoginDone,
                        cur.destroy.push((()=>{
                            window.onLoginFailed = window._oldOnLoginFailed,
                            window.onLoginDone = window._oldOnLoginDone,
                            window._oldOnLoginFailed = !1,
                            window._oldOnLoginDone = !1
                        }
                        ))),
                        window.onLoginFailed = (e,t)=>{
                            (0,
                            y.joinLogProgress)(T.JoinProgressLog.SCREEN_FINISH, T.JoinProgressLog.STATUS_ERROR, T.JoinProgressLog.ERROR_PASSWORD),
                            I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.INCORRECT_PASSWORD, cur.eventScreen),
                            -1 === e ? location.href = location.href.replace(/^http:/, "https:") : 4 === e ? location.href = "/login?m=1&email=" + t.email : 7 === e ? location.href = "/join?act=finish&m=1" : 10 === e ? ((0,
                            d.lockButton)("join_send_pass"),
                            setTimeout(submitQuickLoginForm.pbind(o, n, {
                                prg: "join_send_pass",
                                params: cur.joinParams
                            }), 1e3)) : nav.reload()
                        }
                        ,
                        window.onLoginDone = nav.go.pbind("join?act=done"),
                        cur.fbSign && (cur.fbValid || !0 === t) ? (o = cur.fbEmail,
                        cur.joinParams.fb_id = cur.fbId) : (o = b.getPhone(),
                        O(),
                        I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SCREEN_PROCEED, cur.eventScreen, p.EventScreens.REGISTRATION_COMPLETE)),
                        void submitQuickLoginForm(o, n, {
                            prg: "join_send_pass",
                            params: cur.joinParams
                        }));
                    (0,
                    h.showFastBox)({
                        title: m.getLang("join_sure_detach"),
                        hideButtons: !0,
                        width: 560,
                        noCloseButton: !0
                    }, cur.sureBoxText).changed = !0
                },
                showMsg(e, t, n, o) {
                    const i = (0,
                    u.ge)(e);
                    (0,
                    s.showMsg)(i, t, o || "error", !0),
                    (0,
                    _.isFunction)(n) && n()
                },
                codeFailed(e, t) {
                    (0,
                    S.curBox)() && (0,
                    S.curBox)().hide(),
                    (0,
                    d.unlockButton)("join_send_code");
                    let n, o = m.getLang("join_wrong_code");
                    (e = (0,
                    _.intval)(e)) < 0 ? (o = m.getLang("join_code_failed"),
                    b.changePhone()) : e && e < 6 && (o += "<br>" + m.getLang("join_tries_left").replace("{count}", "<b>" + e + "</b>")),
                    b.isPhoneCall() && (0,
                    u.isVisible)("join_called_phone_prefix") ? (n = "join_called_phone",
                    (0,
                    u.val)((0,
                    u.ge)("join_called_phone_prefix").firstChild, t)) : n = "join_code",
                    b.showMsg("join_submit_result", o, u.elfocus.pbind(n)),
                    I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.INCORRECT_SMS_CODE, cur.eventScreen),
                    window._oldOnLoginFailed && (window.onLoginFailed = window._oldOnLoginFailed)
                },
                resendUpdate() {
                    let e, t;
                    b.isPhoneCallStrict() ? (e = m.getLang("join_send_code_sms_time"),
                    t = m.getLang("join_send_code_sms")) : (e = m.getLang("join_resend_sms_time"),
                    t = m.getLang("join_no_sms")),
                    cur.resendDelay > 0 ? ((0,
                    u.val)("join_resend", e.replace("%s", Math.floor(cur.resendDelay / 60) + ":" + (cur.resendDelay % 60 < 10 ? "0" : "") + cur.resendDelay % 60)),
                    cur.resendDelay--) : -1 === parseInt(cur.resendDelay, 10) ? ((0,
                    u.val)("join_resend", ""),
                    clearInterval(cur.resendInt)) : ((0,
                    u.val)("join_resend", '<a id="join_resend_lnk" onclick="return Join.noCode()">' + t + "</a>"),
                    clearInterval(cur.resendInt))
                },
                noCode() {
                    const e = (0,
                    u.ce)("span", {
                        className: "progress_inline"
                    })
                      , t = (0,
                    u.ge)("join_resend_lnk")
                      , n = t.parentNode;
                    return ajax.post("join.php", {
                        act: "resend",
                        hash: cur.hash
                    }, {
                        showProgress: ()=>{
                            t.parentNode === n && n.replaceChild(e, t)
                        }
                        ,
                        hideProgress: ()=>{
                            e.parentNode === n && n.replaceChild(t, e)
                        }
                        ,
                        onDone: function(e, t, n, o) {
                            1 === parseInt(e, 10) ? (cur.validationType = e,
                            cur.resendDelay = t,
                            b.phoneDone(),
                            I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.RESEND_SMS_CODE, cur.eventScreen)) : t && n ? ((0,
                            u.val)("join_submit_result", ""),
                            (0,
                            h.showFastBox)({
                                title: e,
                                width: 450,
                                noCloseButton: !0
                            }, t, n, b.call, o).changed = !0,
                            I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.RESEND_SMS_CODE, cur.eventScreen)) : t ? ((0,
                            u.val)("join_submit_result", ""),
                            (0,
                            h.showFastBox)({
                                title: e,
                                width: 450
                            }, t),
                            I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.RESEND_SMS_CODE, cur.eventScreen)) : (b.showMsg("join_submit_result", e),
                            I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.RESEND_SMS_CODE_FAILED, cur.eventScreen))
                        }
                    }),
                    !1
                },
                changePhone() {
                    const e = (0,
                    u.ge)("join_phone");
                    e.readOnly = !1,
                    (0,
                    u.removeClass)(e, "join_readonly"),
                    cur.uiPhoneCountry && (cur.uiPhoneCountry.disable(!1),
                    cur.uiPhoneCountry.val(cur.uiPhoneCountry.val(), !0),
                    (0,
                    u.removeClass)("join_phone_prefixed", "join_readonly_wrap")),
                    (0,
                    u.show)("join_phone_submit", "join_country_row"),
                    (0,
                    u.hide)("join_code_submit", "join_other_phone", "join_resend"),
                    (0,
                    c.slideUp)(b.isPhoneCall() ? "join_called_phone_row" : "join_code_row", 150),
                    (0,
                    u.val)("join_phone", ""),
                    (0,
                    u.elfocus)("join_phone"),
                    I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SCREEN_RETURN, cur.eventScreen, p.EventScreens.REGISTRATION_PHONE),
                    b.initStats()
                },
                call() {
                    ajax.post("join.php", {
                        act: "call",
                        hash: cur.hash
                    }, {
                        progress: (0,
                        S.curBox)().progress,
                        onDone: (e,t)=>{
                            (0,
                            S.curBox)().hide(),
                            cur.validationType = t,
                            I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.RESEND_SMS_CODE, cur.eventScreen),
                            b.isPhoneCall() ? b.phoneDone() : (0,
                            u.elfocus)("join_code"),
                            b.showMsg("join_submit_result", e)
                        }
                    })
                },
                tipShow(e, t, n, o) {
                    const i = (0,
                    u.ge)(e)
                      , r = ()=>{
                        (0,
                        E.showTooltip)(i, {
                            text: t,
                            dir: "left",
                            slideX: 15,
                            className: "join_finish_tt" + (o ? " " + o : ""),
                            shift: n,
                            onCreate: g.removeEvent.pbind(e, "mouseout")
                        })
                    }
                    ;
                    vk.loaded ? setTimeout(r, 0) : (0,
                    g.addEvent)(window, "load", r)
                },
                tipHide() {
                    const e = ["join_phone", "join_code", "join_pass", "join_called_phone"];
                    e.map((t=>{
                        const n = (0,
                        u.ge)(e[t]);
                        n && n.tt && n.tt.hide && n.tt.hide()
                    }
                    ))
                },
                phoneTip(e) {
                    const t = (0,
                    u.ge)("join_phone")
                      , n = (0,
                    u.getSize)(t);
                    t.readOnly || b.tipShow(t, e, [-(n[0] + 10), -Math.floor(n[1] / 2)], "join_phone_tt")
                },
                passTip() {
                    const e = (0,
                    u.ge)("join_pass")
                      , t = (0,
                    u.getSize)(e);
                    return b.tipShow(e, m.getLang("join_pass_tip"), [-(t[0] + 10), -Math.floor(t[1] / 2)])
                },
                switchToDefSign(e, t) {
                    ajax.post("join.php", {
                        act: "logout",
                        hash: e,
                        noredir: 1
                    }, {
                        onDone: ()=>{
                            (0,
                            h.showBox)("join.php", {
                                act: "box",
                                from: nav.strLoc,
                                nofb: 1
                            })
                        }
                        ,
                        showProgress: d.lockButton.pbind(t),
                        hideProgress: d.unlockButton.pbind(t)
                    })
                },
                initContacts() {
                    let e;
                    selectsData.setCountries(cur.selData.countries),
                    selectsData.setCities(cur.selData.country, cur.selData.cities),
                    cur.selData.city_val = cur.selData.city_val || ["", ""],
                    cur.selData.country_val = cur.selData.country_val || ["", ""];
                    const t = {
                        progressBar: (0,
                        u.ge)("pedit_progress"),
                        city: cur.selData.city_val,
                        country: cur.selData.country,
                        maxItemsShown: e=>e > 6 ? 500 : 350,
                        onChange: t=>{
                            t !== e && (e = t,
                            I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.CITY, `${t}`),
                            b.isCountryHidden() && w(p.RegistrationFieldItemNames.CITY, (function() {
                                I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.FIRST_COUNTRY, cur.eventScreen)
                            }
                            )))
                        }
                        ,
                        dark: 1,
                        width: 280,
                        ignoreCountry: b.isCountryHidden()
                    };
                    b.isCountryHidden() && (t.placeholder = m.getLang("reg_enter_city")),
                    cur.uiCity = new CitySelect((0,
                    u.ge)("pedit_city"),(0,
                    u.ge)("pedit_city_row"),t),
                    e = (0,
                    _.intval)(cur.uiCity.val()),
                    b.isCountryVisible() && (cur.uiCountry = new CountrySelect((0,
                    u.ge)("pedit_country"),(0,
                    u.ge)("pedit_country_row"),{
                        progressBar: (0,
                        u.ge)("pedit_progress"),
                        country: cur.selData.country_val,
                        citySelect: cur.uiCity,
                        onChange: e=>{
                            I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.COUNTRY, `${e}`),
                            w(p.RegistrationFieldItemNames.PHONE_COUNTRY, (function() {
                                I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.FIRST_COUNTRY, cur.eventScreen)
                            }
                            )),
                            b.checkSave(e)
                        }
                        ,
                        dark: 1,
                        width: 280
                    }),
                    b.checkSave((0,
                    u.ge)("pedit_country").value)),
                    b.initStats()
                },
                submitContacts(e=j.JoinScreenFlow.DEFAULT_FLOW) {
                    let t = "0";
                    this.isCountryVisible() && (t = (0,
                    u.ge)("pedit_country").value);
                    const n = {
                        act: "check_contacts",
                        hash: cur.saveHash,
                        country: t,
                        city: (0,
                        u.ge)("pedit_city").value
                    };
                    if (!n.country)
                        return (0,
                        y.joinLogProgress)(T.JoinProgressLog.SCREEN_CONTACTS, T.JoinProgressLog.STATUS_ERROR, T.JoinProgressLog.ERROR_EMPTY_CONTACTS),
                        b.showMsg("join_submit_result", m.getLang("join_need_contacts")),
                        !0;
                    const o = new j.JoinScreenFlow(cur.eventScreen,e).nextScreen()
                      , i = (0,
                    u.ge)("join_save");
                    ajax.post("join.php", n, {
                        onDone: ()=>{
                            O(),
                            I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SCREEN_PROCEED, cur.eventScreen, o.screen_to),
                            nav.go(o.url_to)
                        }
                        ,
                        onFail: e=>(b.showMsg("join_submit_result", e),
                        !0),
                        showProgress: ()=>(0,
                        d.lockButton)(i),
                        hideProgress: ()=>(0,
                        d.unlockButton)(i)
                    })
                },
                initEducation() {
                    selectsData.setCountries(cur.selData.countries),
                    selectsData.setCities(cur.selData.country, cur.selData.cities),
                    cur.selData.city_val = cur.selData.city_val || ["", ""],
                    cur.selData.country_val = cur.selData.country_val || ["", ""];
                    const e = (0,
                    u.ge)("edu")
                      , t = {
                        id: 0,
                        width: 280,
                        city: cur.selData.city,
                        city_val: cur.selData.city_val,
                        country: cur.selData.country,
                        country_val: cur.selData.country_val
                    };
                    if (cur.isSchool) {
                        let n = {
                            school0country: cur.selData.country_val[0],
                            school0city: cur.selData.city_val[0]
                        };
                        e.appendChild(ProfileEditorEdu.genSchoolRow(0)),
                        ProfileEditorEdu.initSchoolRow(t, null, (e=>{
                            w(p.RegistrationFieldItemNames.CLASS, (function() {
                                I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.FIRST_EDUCATION, cur.eventScreen)
                            }
                            )),
                            b.checkSave(e)
                        }
                        ), (()=>{
                            const e = ProfileEditorEdu.addSchoolParams({}, {
                                id: 0
                            }, "school0");
                            n.school0country != e.school0country && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.COUNTRY, `${e.school0country}` || ""),
                            n.school0city != e.school0city && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.CITY, e.school0city || ""),
                            n.school0graduation != e.school0graduation && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.GRADUATION, e.school0graduation || ""),
                            n.school0school != e.school0school && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.SCHOOL, e.school0school || ""),
                            n.school0start != e.school0start && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.YEAR_FROM, e.school0start || ""),
                            n.school0finish != e.school0finish && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.YEAR_TO, e.school0finish || ""),
                            n.school0class != e.school0class && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.CLASS, e.school0class || ""),
                            n.school0custom_spec != e.school0custom_spec && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.SPECIALIZATION, e.school0custom_spec || ""),
                            n = e
                        }
                        )),
                        b.checkSave((0,
                        u.ge)("s_school0").value),
                        (0,
                        g.addEvent)((0,
                        u.ge)("s_spec0_custom"), "keydown", (function(e) {
                            10 != e.keyCode && 13 != e.keyCode || b.submitEducation()
                        }
                        ))
                    } else {
                        let n = {
                            primary_unicountry: cur.selData.country_val[0],
                            primary_unicity: cur.selData.city_val[0]
                        };
                        e.appendChild(ProfileEditorEdu.genUniRow(0));
                        const o = {};
                        b.isCountryHidden() && (o.placeholderForCity = m.getLang("reg_enter_city")),
                        ProfileEditorEdu.initUniRow(t, null, (e=>{
                            w(p.RegistrationFieldItemNames.EDU_FORM, (function() {
                                I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.FIRST_EDUCATION, cur.eventScreen)
                            }
                            )),
                            b.checkSave(e)
                        }
                        ), (()=>{
                            const e = ProfileEditorEdu.addUniParams({}, {
                                id: 0
                            }, "primary_uni");
                            n.primary_unicountry != e.primary_unicountry && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.COUNTRY, e.primary_unicountry || ""),
                            n.primary_unicity != e.primary_unicity && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.CITY, e.primary_unicity || ""),
                            n.primary_unigraduation != e.primary_unigraduation && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.GRADUATION, e.primary_unigraduation || ""),
                            n.primary_uniuniversity != e.primary_uniuniversity && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.UNIVERSITY, e.primary_uniuniversity || ""),
                            n.primary_unifaculty != e.primary_unifaculty && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.FACULTY, e.primary_unifaculty || ""),
                            n.primary_unichair != e.primary_unichair && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.CHAIR, e.primary_unichair || ""),
                            n.primary_uniedu_form != e.primary_uniedu_form && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.EDU_FORM, e.primary_uniedu_form || ""),
                            n.primary_uniedu_status != e.primary_uniedu_status && I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.EDU_STATUS, e.primary_uniedu_status || ""),
                            n = e
                        }
                        ), o),
                        b.checkSave((0,
                        u.ge)("u_university0").value)
                    }
                    b.initStats()
                },
                submitEducation(e=j.JoinScreenFlow.DEFAULT_FLOW) {
                    let t, n;
                    if (cur.isSchool ? (n = {
                        act: "a_save_education_school"
                    },
                    n = ProfileEditorEdu.addSchoolParams(n, {
                        id: 0
                    }, "school0"),
                    n.school0school || (t = m.getLang("join_need_school")),
                    n.school0id = -1) : (n = {
                        act: "a_save_education_uni"
                    },
                    n = ProfileEditorEdu.addUniParams(n, {
                        id: 0
                    }, "primary_uni"),
                    n.primary_uniuniversity || (t = m.getLang("join_need_uni")),
                    n.primary_uniid = cur.uniId || -1),
                    t)
                        return I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.INCORRECT_EDUCATION, cur.eventScreen),
                        (0,
                        y.joinLogProgress)(T.JoinProgressLog.SCREEN_EDUCATION, T.JoinProgressLog.STATUS_ERROR, cur.isSchool ? T.JoinProgressLog.ERROR_EMPTY_SCHOOL : T.JoinProgressLog.ERROR_EMPTY_UNIVERSITY),
                        b.showMsg("join_submit_result", t),
                        !0;
                    const o = (0,
                    u.ge)("join_save");
                    n.hash = cur.saveHash;
                    const i = new j.JoinScreenFlow(cur.eventScreen,e).nextScreen();
                    ajax.post("al_profileEdit.php", n, {
                        onDone: ()=>{
                            O(),
                            I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SCREEN_PROCEED, cur.eventScreen, i.screen_to),
                            (0,
                            y.joinLogProgress)(T.JoinProgressLog.SCREEN_EDUCATION, T.JoinProgressLog.STATUS_SUCCESS),
                            nav.go(i.url_to)
                        }
                        ,
                        showProgress: ()=>(0,
                        d.lockButton)(o),
                        hideProgress: ()=>(0,
                        d.unlockButton)(o)
                    })
                },
                initEmail(e=j.JoinScreenFlow.DEFAULT_FLOW) {
                    const t = (0,
                    u.ge)("pedit_email");
                    (0,
                    g.addEvent)(t, "keydown change", (function(n) {
                        w(p.RegistrationFieldItemNames.EMAIL, (function() {
                            I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.FIRST_EMAIL, cur.eventScreen)
                        }
                        )),
                        10 === n.keyCode || 13 === n.keyCode ? b.submitEmail(e) : b.checkSave(t.value),
                        I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.EMAIL, t.value)
                    }
                    ));
                    const n = document.getElementById("emailExplanationModalTrigger");
                    cur.email_expl_box_html && n && (n.onclick = function() {
                        var e;
                        const t = new h.MessageBox({
                            title: "",
                            width: 450,
                            hideButtons: !0,
                            containerClass: (0,
                            C.classNames)("EmailExplanationBoxContainer"),
                            onHide: ()=>{
                                I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SCREEN_RETURN, p.EventScreens.REGISTRATION_EMAIL_EXPLANATION, p.EventScreens.REGISTRATION_EMAIL)
                            }
                        });
                        t.content(cur.email_expl_box_html);
                        return null == (e = t.bodyNode.querySelector(".EmailExplanationBox__close")) || e.addEventListener("click", (()=>{
                            t.hide()
                        }
                        )),
                        I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SCREEN_PROCEED, p.EventScreens.REGISTRATION_EMAIL, p.EventScreens.REGISTRATION_EMAIL_EXPLANATION),
                        t.show(),
                        !1
                    }
                    ),
                    b.checkSave(),
                    b.initStats()
                },
                submitEmail(e=j.JoinScreenFlow.DEFAULT_FLOW) {
                    let t = {
                        email: document.querySelector("#pedit_email").value.trim(),
                        is_new: 1,
                        hash: cur.saveHash
                    };
                    if (!t.email)
                        return I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.ERROR_EMPTY_EMAIL, cur.eventScreen),
                        (0,
                        y.joinLogProgress)(T.JoinProgressLog.SCREEN_EMAIL, T.JoinProgressLog.STATUS_ERROR, T.JoinProgressLog.ERROR_EMPTY_EMAIL),
                        b.showMsg("join_submit_result", m.getLang("join_need_email")),
                        !0;
                    const n = (0,
                    u.ge)("join_save");
                    t.hash = cur.saveHash;
                    const o = new j.JoinScreenFlow(cur.eventScreen,e).nextScreen();
                    ajax.post("al_settings.php?act=a_bind_mail", t, {
                        onDone: ()=>{
                            O(),
                            I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SCREEN_PROCEED, cur.eventScreen, o.screen_to),
                            (0,
                            y.joinLogProgress)(T.JoinProgressLog.SCREEN_EMAIL, T.JoinProgressLog.STATUS_SUCCESS),
                            location.href = o.url_to
                        }
                        ,
                        onFail: e=>{
                            if (void 0 !== e) {
                                const t = void 0 !== e.message ? e.message : e;
                                b.showMsg("join_submit_result", t),
                                "ALREADY_USED" === e.code ? (0,
                                y.joinLogProgress)(T.JoinProgressLog.SCREEN_EMAIL, T.JoinProgressLog.STATUS_ERROR, T.JoinProgressLog.ERROR_EMAIL_ALREADY_USED) : (0,
                                y.joinLogProgress)(T.JoinProgressLog.SCREEN_EMAIL, T.JoinProgressLog.STATUS_ERROR, T.JoinProgressLog.ERROR_INCORRECT_EMAIL)
                            }
                            return !0
                        }
                        ,
                        showProgress: ()=>(0,
                        d.lockButton)(n),
                        hideProgress: ()=>(0,
                        d.unlockButton)(n)
                    })
                },
                avatarSubmit(e=j.JoinScreenFlow.USUAL_SCREEN_FLOW_WITH_AVATAR) {
                    O();
                    const t = new j.JoinScreenFlow(cur.eventScreen,e).nextScreen();
                    I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SCREEN_PROCEED, cur.eventScreen, t.screen_to),
                    (0,
                    y.joinLogProgress)(T.JoinProgressLog.SCREEN_AVATAR, T.JoinProgressLog.STATUS_SUCCESS)
                },
                avatarSkip(e=j.JoinScreenFlow.USUAL_SCREEN_FLOW_WITH_AVATAR) {
                    O();
                    const t = new j.JoinScreenFlow(cur.eventScreen,e).nextScreen();
                    I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SCREEN_SKIP, cur.eventScreen, t.screen_to),
                    (0,
                    y.joinLogProgress)(T.JoinProgressLog.SCREEN_AVATAR, T.JoinProgressLog.STATUS_SKIP)
                },
                avatarError() {
                    (0,
                    y.joinLogProgress)(T.JoinProgressLog.SCREEN_AVATAR, T.JoinProgressLog.STATUS_ERROR, T.JoinProgressLog.ERROR_AVATAR_UPLOAD)
                },
                checkSave(e) {
                    (0,
                    d.disableButton)((0,
                    u.ge)("join_save"), !e)
                },
                showPolicy(e) {
                    (0,
                    h.showBox)("al_help.php", {
                        act: e,
                        cc_id: cur.uiPhoneCountry.val() || 0,
                        box: 1
                    })
                },
                updatePolicyLink(e) {
                    const t = (0,
                    u.geByClass1)("checkbox", "join_accept_terms_checkbox");
                    (0,
                    d.checkbox)(t, 0);
                    ajax.post("join.php", {
                        act: "update_policy",
                        cc_id: e || 0
                    }, {
                        onDone: e=>{
                            if (e) {
                                const t = (0,
                                u.ge)("join_accept_terms_checkbox");
                                if (t) {
                                    const n = (0,
                                    u.geByClass1)("join_accept_terms_text", t);
                                    n && (n.innerHTML = e)
                                }
                            }
                        }
                    })
                },
                phoneOnKeyUp() {
                    clearTimeout(b.checkPhoneTimeout);
                    const e = b.getPhone();
                    e && e !== b.prevPhone && (e.length > 4 ? b.checkPhoneTimeout = setTimeout((function() {
                        ajax.post("activation.php", {
                            act: "mrg_check_phone",
                            phone: e,
                            rnd: b.phoneMrgInstanceId
                        }, {
                            onDone: t=>{
                                b.prevPhone = e,
                                !t && b.defaultPhoneTip || (b.destroyPhoneTip(),
                                t && ((0,
                                u.ge)("join_phone_prefixed") ? (0,
                                d.notaBene)("join_phone_prefixed") : (0,
                                d.notaBene)("join_phone"),
                                b.defaultPhoneTip = !1))
                            }
                        })
                    }
                    ), 500) : (b.prevPhone = e,
                    b.defaultPhoneTip || b.destroyPhoneTip()))
                },
                destroyPhoneTip() {
                    const e = (0,
                    u.ge)("join_phone");
                    e && e.tt && e.tt.destroy()
                },
                silentAuth() {},
                completeProceed(e=j.JoinScreenFlow.DEFAULT_FLOW) {
                    O();
                    const t = new j.JoinScreenFlow(cur.eventScreen,e).nextScreen();
                    I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SCREEN_PROCEED, cur.eventScreen, t.screen_to)
                },
                completeSkip() {
                    O(),
                    I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SCREEN_SKIP, cur.eventScreen),
                    (0,
                    y.joinLogProgress)(T.JoinProgressLog.SCREEN_DONE, T.JoinProgressLog.STATUS_SKIP)
                },
                educationSkip(e=j.JoinScreenFlow.DEFAULT_FLOW) {
                    O();
                    const t = new j.JoinScreenFlow(cur.eventScreen,e).nextScreen();
                    I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SCREEN_SKIP, cur.eventScreen, t.screen_to),
                    (0,
                    y.joinLogProgress)(T.JoinProgressLog.SCREEN_EDUCATION, T.JoinProgressLog.STATUS_SKIP)
                },
                contactsSkip(e=j.JoinScreenFlow.DEFAULT_FLOW) {
                    O();
                    const t = new j.JoinScreenFlow(cur.eventScreen,e).nextScreen();
                    I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SCREEN_SKIP, cur.eventScreen, t.screen_to),
                    (0,
                    y.joinLogProgress)(T.JoinProgressLog.SCREEN_CONTACTS, T.JoinProgressLog.STATUS_SKIP)
                },
                emailSkip(e=j.JoinScreenFlow.DEFAULT_FLOW) {
                    O();
                    const t = new j.JoinScreenFlow(cur.eventScreen,e).nextScreen();
                    I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SCREEN_SKIP, cur.eventScreen, t.screen_to),
                    (0,
                    y.joinLogProgress)(T.JoinProgressLog.SCREEN_EMAIL, T.JoinProgressLog.STATUS_SKIP)
                },
                initDone() {
                    O(),
                    b.initStats()
                },
                initFbDone() {},
                initFbStats() {
                    cur.eventNextScreen ? cur.eventCurrentScreen = cur.eventNextScreen : cur.eventCurrentScreen = p.EventScreens.OAUTH_FB,
                    cur.eventNextScreen = void 0;
                    const e = (0,
                    u.isVisible)("join_phone_row")
                      , t = (0,
                    u.isVisible)("join_code_row")
                      , n = (0,
                    u.isVisible)("join_pass_row");
                    e && !t && (cur.eventNextScreen = p.EventScreens.REGISTRATION_PHONE),
                    n && (cur.eventNextScreen = p.EventScreens.REGISTRATION_PASSWORD),
                    e || t || n || (cur.eventNextScreen = p.EventScreens.REGISTRATION_COMPLETE),
                    cur.eventNextScreen && cur.eventCurrentScreen !== cur.eventNextScreen && (I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.FACEBOOK_REGISTRATION, p.EventFieldValues.REGISTERED_VIA_FB),
                    I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SCREEN_PROCEED, cur.eventCurrentScreen, cur.eventNextScreen))
                },
                validated(e, t) {
                    cur.fbSigned = !0,
                    cur.fbValid = e,
                    clearInterval(cur.checkInterval),
                    e || (t || ((0,
                    u.show)("join_fb_mobile"),
                    cur.mobileValidated || (0,
                    u.hide)("join_pass_row")),
                    cur.mobileValidated ? (0,
                    u.show)("join_pass_submit") : ((0,
                    u.hide)("join_pass_submit"),
                    cur.mobileSelected || (0,
                    u.show)("join_phone_submit")),
                    (0,
                    u.hide)("join_email_row")),
                    b.initFbStats()
                },
                uploadPhoto(e) {
                    if (!e.pic_url)
                        return !1;
                    utilsNode.appendChild((0,
                    u.ce)("iframe", {
                        src: e.pic_url
                    })),
                    window.onUploadDone = function(e, t, n) {
                        (0,
                        r.debugLog)(arguments)
                    }
                    ,
                    window.onUploadFail = function() {
                        (0,
                        r.debugLog)(arguments)
                    }
                },
                checkUser() {
                    if (cur.requestChecking)
                        return !1;
                    cur.requestChecking = !0,
                    ajax.post("/join", {
                        act: "fb_check",
                        validating: cur.validating ? "1" : ""
                    }, {
                        onDone: function(e, t) {
                            if (cur.requestChecking = !1,
                            (0,
                            r.debugLog)(e, t),
                            e)
                                if (t.failed)
                                    I.registrationItemStat && (I.registrationItemStat.logFieldInteraction(p.RegistrationFieldItemNames.FACEBOOK_REGISTRATION, p.EventFieldValues.REGISTERED_VIA_FB),
                                    I.registrationItemStat.logEvent(p.RegistrationItemEventTypes.SCREEN_PROCEED, p.EventScreens.OAUTH_FB, p.EventScreens.FACEBOOK_REGISTRATION_FAILED, {
                                        force: !0
                                    })),
                                    (0,
                                    u.ge)("join_fb_finish").innerHTML = t.html,
                                    clearInterval(cur.checkInterval);
                                else if (cur.validating)
                                    void 0 !== t.validated && b.validated(t.validated);
                                else {
                                    let e = !1;
                                    (0,
                                    u.val)((0,
                                    u.ge)("quick_email"), t.email),
                                    cur.fbEmail = t.email,
                                    cur.joinParams.join_code = t.join_code,
                                    cur.joinParams.join_hash = t.join_hash,
                                    t.fb_id && (cur.fbId = t.fb_id);
                                    let n = (0,
                                    u.ge)("join_fb_import_info");
                                    if ((0,
                                    u.ge)("join_fb_info").innerHTML = t.html,
                                    void 0 !== t.validated || t.login_to ? b.validated(t.validated, t.login_to) : cur.validating = !0,
                                    t.login_to)
                                        return (0,
                                        u.hide)("join_pass_row"),
                                        b.initFbStats(),
                                        b.submitPassword(!1, !0),
                                        nav.go("/login?email=" + t.email + "&m=5"),
                                        !1;
                                    e ? ((0,
                                    u.show)((0,
                                    u.ge)("join_show_result")),
                                    (0,
                                    u.setStyle)((0,
                                    u.ge)("join_show_result_wrap"), {
                                        opacity: 1
                                    }),
                                    (0,
                                    u.setStyle)(n, {
                                        height: 0,
                                        opacity: 0,
                                        marginTop: -10
                                    })) : ((0,
                                    u.setStyle)(n, {
                                        overflow: "hidden"
                                    }),
                                    (0,
                                    c.animate)(n, {
                                        height: 0,
                                        opacity: 0,
                                        marginTop: -10
                                    }, {
                                        duration: 200
                                    }),
                                    (0,
                                    c.animate)((0,
                                    u.ge)("join_show_result_wrap"), {
                                        opacity: 1
                                    }, {
                                        duration: 200
                                    }),
                                    (0,
                                    c.slideDown)((0,
                                    u.ge)("join_show_result"), 200)),
                                    b.uploadPhoto(t),
                                    b.initFbStats()
                                }
                        }
                    })
                },
                initIndexJoinForm: function(e) {
                    const t = document.querySelector(".JoinForm");
                    (0,
                    v.initJoinForm)(t, (0,
                    o._)({}, e, {
                        ref: "index"
                    }))
                },
                initInviteJoinForm: function(e) {
                    const t = document.querySelector(".JoinForm");
                    (0,
                    v.initJoinForm)(t, (0,
                    o._)({}, e, {
                        ref: "invite"
                    }))
                },
                initJoinBox: function(e) {
                    const t = (0,
                    S.curBox)();
                    t.changed = !0,
                    t.setOptions({
                        width: 560,
                        hideButtons: !0,
                        bodyStyle: "padding: 0"
                    });
                    const n = t.bodyNode.querySelector(".JoinForm");
                    (0,
                    v.initJoinForm)(n, (0,
                    o._)({}, e, {
                        ref: "box"
                    }))
                },
                initIndexJoinVKConnectButton: function(e, t) {
                    const n = document.querySelector(".JoinForm");
                    (0,
                    R.initJoinVKConnectButton)(n, (0,
                    o._)({}, e, {
                        unauthId: t
                    }))
                },
                initIndexJoinVKConnectForm: function(e, t, n, i) {
                    const r = document.querySelector(".JoinForm");
                    (0,
                    R.initJoinVKConnectForm)(r, (0,
                    o._)({}, e, {
                        unauthId: t,
                        phonePrefix: n,
                        hash: i
                    }))
                },
                initCommon: function(e) {
                    const {logoutLabel: t, logoutHash: n} = e
                      , o = document.querySelector("#top_reg_link");
                    o && (clearTimeout(window.__joinTopTO),
                    setTimeout((()=>{
                        o.old = o.innerHTML,
                        o.was = (0,
                        u.isVisible)(o),
                        o.innerHTML = t,
                        o.onclick = e=>{
                            if (cur.checkInterval && clearInterval(cur.checkInterval),
                            !1 === (0,
                            g.checkEvent)(e))
                                return window.ajax.post("join.php", {
                                    act: "logout",
                                    hash: n
                                }),
                                (0,
                                g.cancelEvent)(e)
                        }
                        ,
                        (0,
                        u.show)(o),
                        cur.destroy.push((()=>{
                            window.__joinTopTO = setTimeout((()=>{
                                (0,
                                u.val)(o, o.old),
                                o.onclick = ()=>{}
                                ,
                                o.was || (0,
                                u.hide)(o)
                            }
                            ), 500)
                        }
                        ))
                    }
                    ), 0)),
                    (0,
                    u.hide)("top_switch_lang", "ts_wrap")
                }
            }
        }
    }, a = {};
    function c(e) {
        var t = a[e];
        if (void 0 !== t)
            return t.exports;
        var n = a[e] = {
            exports: {}
        };
        return s[e].call(n.exports, n, n.exports, c),
        n.exports
    }
    c.m = s,
    c.amdO = {},
    e = [],
    c.O = (t,n,o,i)=>{
        if (!n) {
            var r = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [n,o,i] = e[u], s = !0, a = 0; a < n.length; a++)
                    (!1 & i || r >= i) && Object.keys(c.O).every((e=>c.O[e](n[a]))) ? n.splice(a--, 1) : (s = !1,
                    i < r && (r = i));
                if (s) {
                    e.splice(u--, 1);
                    var l = o();
                    void 0 !== l && (t = l)
                }
            }
            return t
        }
        i = i || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > i; u--)
            e[u] = e[u - 1];
        e[u] = [n, o, i]
    }
    ,
    c.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return c.d(t, {
            a: t
        }),
        t
    }
    ,
    n = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__,
    c.t = function(e, o) {
        if (1 & o && (e = this(e)),
        8 & o)
            return e;
        if ("object" == typeof e && e) {
            if (4 & o && e.__esModule)
                return e;
            if (16 & o && "function" == typeof e.then)
                return e
        }
        var i = Object.create(null);
        c.r(i);
        var r = {};
        t = t || [null, n({}), n([]), n(n)];
        for (var s = 2 & o && e; "object" == typeof s && !~t.indexOf(s); s = n(s))
            Object.getOwnPropertyNames(s).forEach((t=>r[t] = ()=>e[t]));
        return r.default = ()=>e,
        c.d(i, r),
        i
    }
    ,
    c.d = (e,t)=>{
        for (var n in t)
            c.o(t, n) && !c.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    c.f = {},
    c.e = e=>Promise.all(Object.keys(c.f).reduce(((t,n)=>(c.f[n](e, t),
    t)), [])),
    c.u = e=>25394 === e ? "AudioLongtapModal.98b6df61d646414354a3.js" : 24817 === e ? "hls.7bfefe299fa92971b99a.js" : 75980 === e ? "menu_settings.b73d1f0a03f70163e02d.js" : 96816 === e ? "web-audio-lyrics-modal.5b786d2492e85e4a335f.js" : 9375 === e ? "voice_message_player.f0c31b4a3dc08de145c9.js" : 28762 === e ? "speech.be0c329a1eff7c81577d.js" : 57468 === e ? "SilentModeForms.6cf18c53f58f775934b3.js" : 28872 === e ? "feed-client-nav-skeleton.93951c516f1e3f2a55ad.js" : 35953 === e ? "feed-client-nav-async-right-block.98e503ddcd7a638e1b63.js" : 48817 === e ? "JoinAvatarScreen.447b3b812b122ce5334c.js" : 38288 === e ? "lottie.5e4758c39f106eab733a.js" : void 0,
    c.miniCssF = e=>e + "." + {
        25394: "6af57e1b0cf5a74f9a87",
        48817: "3d2beb42414ea8e5e734",
        57468: "35be3dfa1e90e3cdd0a1",
        75980: "5bbee2c9f3e189193a73"
    }[e] + ".css",
    c.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    c.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    o = {},
    c.l = (e,t,n,i)=>{
        if (o[e])
            o[e].push(t);
        else {
            var r, s;
            if (void 0 !== n)
                for (var a = document.getElementsByTagName("script"), l = 0; l < a.length; l++) {
                    var u = a[l];
                    if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == "vk:" + n) {
                        r = u;
                        break
                    }
                }
            r || (s = !0,
            (r = document.createElement("script")).charset = "utf-8",
            r.timeout = 120,
            c.nc && r.setAttribute("nonce", c.nc),
            r.setAttribute("data-webpack", "vk:" + n),
            r.src = e),
            o[e] = [t];
            var d = (t,n)=>{
                r.onerror = r.onload = null,
                clearTimeout(_);
                var i = o[e];
                if (delete o[e],
                r.parentNode && r.parentNode.removeChild(r),
                i && i.forEach((e=>e(n))),
                t)
                    return t(n)
            }
              , _ = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: r
            }), 12e4);
            r.onerror = d.bind(null, r.onerror),
            r.onload = d.bind(null, r.onload),
            s && document.head.appendChild(r)
        }
    }
    ,
    c.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    c.p = "/dist/",
    i = e=>new Promise(((t,n)=>{
        var o = c.miniCssF(e)
          , i = c.p + o;
        if (((e,t)=>{
            for (var n = document.getElementsByTagName("link"), o = 0; o < n.length; o++) {
                var i = (s = n[o]).getAttribute("data-href") || s.getAttribute("href");
                if ("stylesheet" === s.rel && (i === e || i === t))
                    return s
            }
            var r = document.getElementsByTagName("style");
            for (o = 0; o < r.length; o++) {
                var s;
                if ((i = (s = r[o]).getAttribute("data-href")) === e || i === t)
                    return s
            }
        }
        )(o, i))
            return t();
        ((e,t,n,o)=>{
            var i = document.createElement("link");
            i.rel = "stylesheet",
            i.type = "text/css",
            i.onerror = i.onload = r=>{
                if (i.onerror = i.onload = null,
                "load" === r.type)
                    n();
                else {
                    var s = r && ("load" === r.type ? "missing" : r.type)
                      , a = r && r.target && r.target.href || t
                      , c = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                    c.code = "CSS_CHUNK_LOAD_FAILED",
                    c.type = s,
                    c.request = a,
                    i.parentNode.removeChild(i),
                    o(c)
                }
            }
            ,
            i.href = t,
            document.head.appendChild(i)
        }
        )(e, i, t, n)
    }
    )),
    r = {
        1092: 0
    },
    c.f.miniCss = (e,t)=>{
        r[e] ? t.push(r[e]) : 0 !== r[e] && {
            25394: 1,
            48817: 1,
            57468: 1,
            75980: 1
        }[e] && t.push(r[e] = i(e).then((()=>{
            r[e] = 0
        }
        ), (t=>{
            throw delete r[e],
            t
        }
        )))
    }
    ,
    (()=>{
        var e = {
            1092: 0
        };
        c.f.j = (t,n)=>{
            var o = c.o(e, t) ? e[t] : void 0;
            if (0 !== o)
                if (o)
                    n.push(o[2]);
                else {
                    var i = new Promise(((n,i)=>o = e[t] = [n, i]));
                    n.push(o[2] = i);
                    var r = c.p + c.u(t)
                      , s = new Error;
                    c.l(r, (n=>{
                        if (c.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0),
                        o)) {
                            var i = n && ("load" === n.type ? "missing" : n.type)
                              , r = n && n.target && n.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + i + ": " + r + ")",
                            s.name = "ChunkLoadError",
                            s.type = i,
                            s.request = r,
                            o[1](s)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ,
        c.O.j = t=>0 === e[t];
        var t = (t,n)=>{
            var o, i, [r,s,a] = n, l = 0;
            if (r.some((t=>0 !== e[t]))) {
                for (o in s)
                    c.o(s, o) && (c.m[o] = s[o]);
                if (a)
                    var u = a(c)
            }
            for (t && t(n); l < r.length; l++)
                i = r[l],
                c.o(e, i) && e[i] && e[i][0](),
                e[i] = 0;
            return c.O(u)
        }
          , n = self.webpackChunkvk = self.webpackChunkvk || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }
    )();
    var l = c.O(void 0, [75514, 98066, 56990, 24509, 76400, 40885, 68592], (()=>c(73115)));
    l = c.O(l)
}
)();
