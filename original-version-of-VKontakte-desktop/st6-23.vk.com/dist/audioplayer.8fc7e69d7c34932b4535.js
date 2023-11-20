"use strict";
(self.webpackChunkvk = self.webpackChunkvk || []).push([[40885], {
    913889: (e,t,i)=>{
        i.d(t, {
            default: ()=>s
        });
        const s = {
            credits: "AudioLyricsCredits-module__credits--S9k5F"
        }
    }
    ,
    219281: (e,t,i)=>{
        i.d(t, {
            default: ()=>s
        });
        const s = {
            content: "AudioLyricsLayout-module__content--qf_Yy",
            scroll: "AudioLyricsLayout-module__scroll--wJDq5"
        }
    }
    ,
    653070: (e,t,i)=>{
        i.d(t, {
            default: ()=>s
        });
        const s = {
            line: "AudioLyricsLine-module__line--s3hes",
            clickable: "AudioLyricsLine-module__clickable--OJBiN",
            inactive: "AudioLyricsLine-module__inactive--MjGoK",
            text: "AudioLyricsLine-module__text--ARcYc",
            interlude: "AudioLyricsLine-module__interlude--eHu4q"
        }
    }
    ,
    359028: (e,t,i)=>{
        i.d(t, {
            default: ()=>s
        });
        const s = {
            countdown: "AudioLyricsLottieCountdown-module__countdown--xnMll",
            animation: "AudioLyricsLottieCountdown-module__animation--Hv4JE"
        }
    }
    ,
    805866: (e,t,i)=>{
        i.d(t, {
            default: ()=>s
        });
        const s = {
            countdown: "KaraokeAudioLyrics-module__countdown--rxPAe",
            hidden: "KaraokeAudioLyrics-module__hidden--Vfva1"
        }
    }
    ,
    951068: (e,t,i)=>{
        i.d(t, {
            default: ()=>s
        });
        const s = {
            layout: "AudioLyricsModal-module__layout--zf3gZ",
            header: "AudioLyricsModal-module__header--t6ZIw",
            player: "AudioLyricsModal-module__player--mvaOq",
            content: "AudioLyricsModal-module__content--QIPUe",
            headerWrapper: "AudioLyricsModal-module__headerWrapper--jzEy1",
            playerWrapper: "AudioLyricsModal-module__playerWrapper--iHo9M"
        }
    }
    ,
    34124: (e,t,i)=>{
        i.d(t, {
            default: ()=>s
        });
        const s = {
            cover: "AudioCover-module__cover--Aj8O5",
            placeholder: "AudioCover-module__placeholder--Sdf3D",
            blur: "AudioCover-module__blur--s1UC5",
            image: "AudioCover-module__image--I14zD"
        }
    }
    ,
    267666: (e,t,i)=>{
        i.d(t, {
            default: ()=>s
        });
        const s = {
            header: "AudioLyricsModalHeader-module__header--qIw0j",
            cover: "AudioLyricsModalHeader-module__cover--sV8Ra",
            info: "AudioLyricsModalHeader-module__info--CuvjM",
            titleContainer: "AudioLyricsModalHeader-module__titleContainer--e87SK",
            title: "AudioLyricsModalHeader-module__title--IWyD_",
            explicit: "AudioLyricsModalHeader-module__explicit--sGAOq",
            performer: "AudioLyricsModalHeader-module__performer--ZSPqT"
        }
    }
    ,
    228592: (e,t,i)=>{
        i.d(t, {
            default: ()=>s
        });
        const s = {
            player: "AudioLyricsPlayer-module__player--AG_Bu",
            progress: "AudioLyricsPlayer-module__progress--r9eYA",
            slider: "AudioLyricsPlayer-module__slider--yAux4",
            time: "AudioLyricsPlayer-module__time--E3uaA",
            controls: "AudioLyricsPlayer-module__controls--lQ6yc"
        }
    }
    ,
    744755: (e,t,i)=>{
        i.d(t, {
            default: ()=>s
        });
        const s = {
            button: "PlayButton-module__button--M8npB"
        }
    }
    ,
    476558: (e,t,i)=>{
        i.d(t, {
            default: ()=>s
        });
        const s = {
            button: "TertiaryIconButton-module__button--QFuju"
        }
    }
    ,
    954657: (e,t,i)=>{
        i.d(t, {
            default: ()=>s
        });
        const s = {
            slider: "AudioSlider-module__slider--WVvAT",
            ads: "AudioSlider-module__ads--AeRSv"
        }
    }
    ,
    811370: (e,t,i)=>{
        i.d(t, {
            default: ()=>s
        });
        const s = {
            view: "CustomScrollView-module__view--lbeDQ",
            box: "CustomScrollView-module__box--YPfVM",
            barY: "CustomScrollView-module__barY--vvyOo",
            trackerY: "CustomScrollView-module__trackerY--u8vOb",
            hidden: "CustomScrollView-module__hidden--pAOOr"
        }
    }
    ,
    715203: (e,t,i)=>{
        i.d(t, {
            MarusiaWebPlayerAdapter: ()=>a
        });
        var s = i(9480)
          , o = i(866310);
        class a {
            play(e, t, i) {
                this.player.play(e, t, i)
            }
            pause() {
                this.player.pause()
            }
            playNext(e) {
                this.player.playNext(e)
            }
            playPrev() {
                this.player.playPrev()
            }
            seekToTime(e) {
                this.player.seekToTime(e)
            }
            toggleRepeatCurrentAudio() {
                this.player.toggleRepeatCurrentAudio()
            }
            toggleRepeatAll() {
                this.player.toggleRepeatAll()
            }
            getVolume() {
                return this.player.getVolume()
            }
            setVolume(e) {
                this.player.setVolume(e)
            }
            getCurrentPlaylist() {
                var e;
                return null == (e = this.player.getCurrentPlaylist()) ? void 0 : e.getSelf()
            }
            deleteCurrentPlaylist() {
                this.player.deleteCurrentPlaylist()
            }
            addPlaylist(e) {
                this.player.addPlaylist(e)
            }
            isPlaying() {
                return this.player.isPlaying()
            }
            getCurrentAudio() {
                return this.player.getCurrentAudio()
            }
            getProgressInSeconds() {
                const e = this.player.getCurrentAudio();
                return e ? Math.round(this.player.getCurrentProgress() * e[s.AudioUtils.AUDIO_ITEM_INDEX_DURATION]) : 0
            }
            getPlayerData() {
                var e, t, i;
                var s;
                return {
                    position: null != (i = null == (e = this.getCurrentPlaylist()) ? void 0 : e.indexOfAudio(this.getCurrentAudio())) ? i : 0,
                    duration: null != (s = null == (t = this.player._impl) ? void 0 : t.getDuration()) ? s : 0,
                    elapsed: this.getProgressInSeconds(),
                    state: this.isPlaying() ? "PLAY" : "PAUSE",
                    volume: Math.round(100 * this.getVolume())
                }
            }
            preparePlay() {
                var e;
                this.touched || (null == (e = this.player._impl) || e.preparePlay())
            }
            constructor(e) {
                this.touched = !1,
                this.player = e,
                this.player.subscribe(o.AudioPlayerEventType.PLAY, (()=>{
                    this.touched = !0
                }
                ))
            }
        }
    }
    ,
    726492: (e,t,i)=>{
        i.d(t, {
            followOwner: ()=>a
        });
        var s = i(866310)
          , o = i(95432);
        function a(e, t) {
            window.ajax.post("/al_audio.php?act=follow_owner", {
                owner_id: e,
                hash: t
            }, {
                onDone: ()=>{
                    (0,
                    o.getAudioPlayer)().notify(s.events.MUSIC_OWNERS_FOLLOW)
                }
            })
        }
    }
    ,
    39340: (e,t,i)=>{
        i.d(t, {
            unfollowOwner: ()=>a
        });
        var s = i(866310)
          , o = i(95432);
        function a(e, t) {
            window.ajax.post("/al_audio.php?act=unfollow_owner", {
                owner_id: e,
                hash: t
            }, {
                onDone: ()=>{
                    (0,
                    o.getAudioPlayer)().notify(s.events.MUSIC_OWNERS_UNFOLLOW)
                }
            })
        }
    }
    ,
    27655: (e,t,i)=>{
        i.d(t, {
            addAudioPlaylistToMyAudioPlaylists: ()=>r
        });
        var s = i(11010)
          , o = i(584356)
          , a = i(29271)
          , l = i(595509);
        function r(e, t, i) {
            return n.apply(this, arguments)
        }
        function n() {
            return (n = (0,
            s._)((function*(e, t, i) {
                const s = t.getTitle()
                  , r = (yield t.getAudiosList()).map((e=>{
                    const t = (0,
                    l.audioTupleToAudioObject)(e);
                    return {
                        id: t.id,
                        ownerId: t.owner_id
                    }
                }
                ))
                  , n = yield i.createFx({
                    blockId: e,
                    audios: r.reverse(),
                    title: s
                });
                return (0,
                o.showDoneBoxFull)("", {}, {
                    title: a.getLang("audio_save_recommendation_audio_block_as_playlist_success_notification_title"),
                    text: a.getLang("audio_save_recommendation_audio_block_as_playlist_success_notification_text")
                }),
                n
            }
            ))).apply(this, arguments)
        }
    }
    ,
    439351: (e,t,i)=>{
        i.d(t, {
            RadiostationEventsHandling: ()=>r
        });
        var s = i(283452)
          , o = i(95432)
          , a = i(347765)
          , l = i(604681);
        class r {
            connectFollowingEvents() {
                this.tq.setInteractiveHandler("Music/follow_radiostation", (({payload: e})=>{
                    e.dataAttrs && e.dataAttrs.stationId && e.dataAttrs.hash && (0,
                    a.followRadiostation)(parseInt(e.dataAttrs.stationId, 10), e.dataAttrs.hash).then((()=>{
                        e.target instanceof HTMLElement && (e.target.dataset.taskClick = "Music/unfollow_radiostation")
                    }
                    ))
                }
                ))
            }
            connectUnFollowingEvents() {
                this.tq.setInteractiveHandler("Music/unfollow_radiostation", (({payload: e})=>{
                    e.dataAttrs && e.dataAttrs.stationId && e.dataAttrs.hash && (0,
                    l.unfollowRadiostation)(parseInt(e.dataAttrs.stationId, 10), e.dataAttrs.hash).then((()=>{
                        e.target instanceof HTMLElement && (e.target.dataset.taskClick = "Music/follow_radiostation")
                    }
                    ))
                }
                ))
            }
            connectPlayToggleEvent() {
                this.tq.setInteractiveHandler("Music/toggle_radio_play", (({payload: e})=>{
                    if (e.dataAttrs) {
                        const {stationId: t, playlistOwnerId: i} = e.dataAttrs;
                        if (!t || !i)
                            return;
                        const s = (0,
                        o.getAudioPlayer)();
                        s && s.toggleRadio(parseInt(t, 10), parseInt(i, 10))
                    }
                }
                ))
            }
            constructor() {
                try {
                    this.tq = (0,
                    s.tq)()
                } catch (e) {
                    return
                }
                this.connectFollowingEvents(),
                this.connectUnFollowingEvents(),
                this.connectPlayToggleEvent()
            }
        }
    }
    ,
    347765: (e,t,i)=>{
        i.d(t, {
            followRadiostation: ()=>n
        });
        var s = i(905507)
          , o = i(95432)
          , a = i(866310)
          , l = i(584356)
          , r = i(29271);
        function n(e, t) {
            return (new s.FetchService).followRadiostation(e, t).then((t=>{
                if (t) {
                    const t = (0,
                    o.getAudioPlayer)();
                    t && t.notify(a.events.RADIOSTATION_FOLLOW, e),
                    (0,
                    l.showDoneBoxFull)("", {}, {
                        title: r.getLang("audio_follow_radiostation_success_notification_title"),
                        text: r.getLang("audio_follow_radiostation_success_notification_text")
                    })
                }
            }
            ))
        }
    }
    ,
    604681: (e,t,i)=>{
        i.d(t, {
            unfollowRadiostation: ()=>l
        });
        var s = i(905507)
          , o = i(95432)
          , a = i(866310);
        function l(e, t) {
            return (new s.FetchService).unfollowRadiostation(e, t).then((t=>{
                if (t) {
                    const t = (0,
                    o.getAudioPlayer)();
                    t && t.notify(a.events.RADIOSTATION_UNFOLLOW, e)
                }
            }
            ))
        }
    }
    ,
    521179: (e,t,i)=>{
        i.d(t, {
            updateFaveStatusAfterFollow: ()=>d
        });
        var s = i(258169)
          , o = i(182525)
          , a = i(145669)
          , l = i(668226)
          , r = i(550536)
          , n = i(95432);
        function d(e, t) {
            const i = (0,
            n.getAudioPlayer)();
            i.getPlaylistsByType(a.AudioPlaylist.TYPE_RADIO).forEach((i=>{
                i.getAudiosList().forEach((i=>{
                    i[o.EAudioTupleIndex.ID] === e && u(i, t)
                }
                ))
            }
            )),
            Array.from(document.querySelectorAll(".audio_player_radio_station._audio_page_player")).forEach((i=>{
                const s = (0,
                l.getAudioFromEl)(i);
                s && s[o.EAudioTupleIndex.ID] === e && (u(s, t),
                i.dataset.audio = JSON.stringify(s))
            }
            ));
            const r = i.getCurrentPlaylist();
            r && r.getType() === a.AudioPlaylist.TYPE_RADIO && i.saveStateCurrentPlaylist();
            const d = i.getCurrentAudio();
            (0,
            s.isRadio)(d) && (u(d, t),
            i._saveStateCurrentAudio())
        }
        function u(e, t) {
            const i = (0,
            r.getAudioExtra)(e);
            i && i.fave !== t && (i.fave = t,
            e[o.EAudioTupleIndex.EXTRA] = i)
        }
    }
    ,
    595175: (e,t,i)=>{
        i.d(t, {
            unLogF: ()=>s
        });
        const s = e=>Math.log(1 + 34 * e) / Math.log(35)
    }
    ,
    482203: (e,t,i)=>{
        i.d(t, {
            AudioSnippetsPlayer: ()=>P
        });
        var s = i(11010)
          , o = i(434788)
          , a = i(191503)
          , l = i(992114)
          , r = i(837259)
          , n = i(733761)
          , d = i(948049)
          , u = i(721366)
          , _ = i(220681)
          , c = i(866310)
          , h = i(165624)
          , p = i(453818)
          , y = i(192333);
        const g = 1.5;
        let A = null;
        class P {
            static ensure() {
                return A || (A = new P),
                A
            }
            getState() {
                return this.state
            }
            setState(e) {
                const t = this.getState()
                  , i = (0,
                o._)({}, this.state, e);
                (0,
                a.shallowEqual)(this.state, i) || (this.state = i,
                (0,
                a.shallowEqual)(i.currentQueueState, t.currentQueueState) || this.currentQueueStateDidChange(),
                this.notify(c.events.SNIPPET_PLAYER_STATE_CHANGED, this.getState()))
            }
            currentQueueStateDidChange() {
                const {pendingImplAudio: e, isPlaying: t} = this
                  , i = this.getState()
                  , {currentQueueState: s, playingQueueState: o} = i
                  , {list: l, audio: r} = s;
                !t || e && e === r || (0,
                a.shallowEqual)(s, o) || r && l && this.play(r, {
                    list: l.audios
                })
            }
            get isPlaying() {
                return this.state.isPlaying || !!this.pendingImplAudio
            }
            reset() {
                this.pausedByVisibility = !1,
                this.stop(),
                this.queue.reset()
            }
            get currentAudio() {
                return this.queue.currentAudio || null
            }
            addToQueue(...e) {
                this.queue.add(...e)
            }
            resume() {
                var e = this;
                return (0,
                s._)((function*() {
                    e.state.isPaused && e.play()
                }
                ))()
            }
            play(e, {list: t, volume: i}={}) {
                var o = this;
                return (0,
                s._)((function*() {
                    const s = e || o.currentAudio;
                    if (!s)
                        throw new Error("[AudioSnippetPlayer]: Audio is not defined");
                    let a = t;
                    a || (a = o.queue.findListByAudio(s),
                    a || (a = [s],
                    o.addToQueue(a))),
                    o.queue.moveTo(a, s),
                    yield o.implPlayAudio(s, i)
                }
                ))()
            }
            subscribe(e, t) {
                this.eventBus.subscribe(e, t)
            }
            unsubscribe(e, t) {
                this.eventBus.unsubscribe(e, t)
            }
            notify(e, ...t) {
                this.eventBus.emit(e, ...t)
            }
            stop() {
                this.setState({
                    isPlaying: !1,
                    playingQueueState: null
                }),
                this.impl.stop(),
                this.implAudio = null,
                this.notify(c.events.STOP_SNIPPET),
                this.switchConnection.emit("stop")
            }
            playNext() {
                var e = this;
                return (0,
                s._)((function*() {
                    const {audio: t, list: i} = e.queue.moveToNext();
                    t && i && (yield e.play(t, {
                        list: i.audios
                    }),
                    e.notify(c.events.SNIPPET_PLAYER_PLAY_NEXT_SNIPPET))
                }
                ))()
            }
            playPrev() {
                var e = this;
                return (0,
                s._)((function*() {
                    const {audio: t, list: i} = e.queue.moveToPrev();
                    t && i && (yield e.play(t, {
                        list: i.audios
                    }),
                    e.notify(c.events.SNIPPET_PLAYER_PLAY_PREV_SNIPPET))
                }
                ))()
            }
            pause() {
                this.taskManager.setVolume(0, !0),
                this.taskManager.pause()
            }
            implPlayAudio(e, t) {
                var i = this;
                return (0,
                s._)((function*() {
                    y.AudioPlayer._sendLCNotification(),
                    e === i.implAudio ? yield i.implPlayUrl() : yield i.implChangeAudio(e, t),
                    i.fadeIn()
                }
                ))()
            }
            implChangeAudio(e, t) {
                var i = this;
                return (0,
                s._)((function*() {
                    i.pendingImplAudio = e,
                    i.setState({
                        isPlaying: !1
                    }),
                    i.volume = t || i.volume,
                    i.taskManager.setVolume(0, !1);
                    const s = e.url;
                    if (!s)
                        return void (i.pendingImplAudio = null);
                    i.seek(0);
                    const o = i.queue.getState();
                    try {
                        yield i.implPlayUrl(s)
                    } catch (e) {
                        if (e instanceof l.DebounceAbortError)
                            return;
                        throw e
                    } finally {
                        i.pendingImplAudio = null
                    }
                    i.implAudio = e,
                    i.setState({
                        isPlaying: !0,
                        playingQueueState: o
                    })
                }
                ))()
            }
            seek(e) {
                this.taskManager.seek(e)
            }
            fadeIn() {
                this.taskManager.setVolume(this.volume, !0, 1500)
            }
            fadeOut() {
                this.taskManager.setVolume(0, !0, 1500)
            }
            constructor() {
                this.visibilityObserver = r.PageVisibilityObserver.ensure(),
                this.eventBus = new u.EventBus,
                this.pendingImplAudio = null,
                this.implAudio = null,
                this.pausedByVisibility = !1,
                this.volume = _.DEFAULT_VOLUME,
                this.fading = !1,
                this.queue = new p.AudioSnippetsPlayerQueue((e=>{
                    this.setState({
                        currentQueueState: e
                    })
                }
                ));
                var e = this;
                this.implPlayUrl = (0,
                l.debounceTask)((0,
                s._)((function*(t) {
                    t && (e.impl.preparePlay(),
                    yield e.taskManager.setUrl(t),
                    e.taskManager.clearAllTasks()),
                    yield e.taskManager.play()
                }
                ))),
                this.handleVisibilityChange = e=>{
                    e ? this.pausedByVisibility && (this.pausedByVisibility = !1,
                    this.isPlaying || this.play()) : this.isPlaying && (this.pausedByVisibility = !0,
                    this.pause(),
                    this.notify(c.events.SNIPPET_PLAYER_PAUSED_BY_VISIBILITY))
                }
                ,
                this.state = {
                    isPlaying: !1,
                    isPaused: !1,
                    currentQueueState: this.queue.getState(),
                    playingQueueState: null
                },
                this.switchConnection = h.AudioPlayersSwitch.ensure().connect({
                    resume: ()=>{
                        this.resume()
                    }
                    ,
                    pause: e=>{
                        var t;
                        this.pause(),
                        this.notify(c.events.SNIPPET_PLAYER_CHANGE_SOURCE),
                        (null == (t = e) ? void 0 : t.initiatedByCalls) && this.notify(c.events.SNIPPET_PLAYER_PAUSED_BY_INCOMING_CALL)
                    }
                    ,
                    stop: ()=>{
                        this.stop()
                    }
                });
                const t = {
                    onPause: ()=>{
                        this.setState({
                            isPlaying: !1,
                            isPaused: !0
                        }),
                        this.fading = !1,
                        this.switchConnection.emit("pause")
                    }
                    ,
                    onPlay: ()=>{
                        this.pendingImplAudio || this.setState({
                            isPlaying: !0,
                            isPaused: !1
                        }),
                        this.fading = !1,
                        this.switchConnection.emit("play")
                    }
                    ,
                    onBufferUpdate: e=>{
                        e && this.notify(c.events.SNIPPET_BUFFERED, this.currentAudio)
                    }
                    ,
                    onEnd: ()=>{
                        this.notify(c.events.SNIPPET_PLAYER_SNIPPET_PLAYING_END),
                        this.playNext()
                    }
                    ,
                    onFail: e=>{
                        this.notify(c.events.SNIPPET_PLAYER_FAIL),
                        this.stop()
                    }
                    ,
                    onCanPlay: ()=>null,
                    onProgressUpdate: (e,t)=>{
                        const i = this.impl.getDuration();
                        i && i - t < g && !this.fading && (this.fading = !0,
                        this.fadeOut()),
                        this.notify(c.events.PROGRESS_SNIPPET, e, t)
                    }
                    ,
                    defaultVolume: 0
                };
                this.visibilityObserver.on("change", this.handleVisibilityChange),
                this.eventBus = new u.EventBus,
                this.impl = new d.AudioPlayerHTML5(t),
                this.taskManager = new n.AudioTaskManager(this.impl),
                this.taskManager.setVolume(0, !0, g)
            }
        }
    }
    ,
    453818: (e,t,i)=>{
        i.d(t, {
            AudioSnippetsPlayerQueue: ()=>l
        });
        var s = i(434788)
          , o = i(191503);
        const a = {
            lists: [],
            listIndex: 0,
            list: null,
            audio: null
        };
        class l {
            add(...e) {
                e.length && this.setState({
                    lists: [...this.state.lists, ...e.map((e=>({
                        audios: e,
                        audioIndex: 0
                    })))]
                })
            }
            reset() {
                this.state = a
            }
            findListByAudio(e) {
                var t;
                return null == (t = this.state.lists.find((t=>{
                    var i;
                    return null == (i = t) ? void 0 : i.audios.includes(e)
                }
                ))) ? void 0 : t.audios
            }
            has(e, t) {
                var i, s;
                const o = null == (i = this.state.lists.find((t=>t.audios === e))) ? void 0 : i.audios;
                return t ? !!(null == (s = o) ? void 0 : s.includes(t)) : !!o
            }
            moveTo(e, t) {
                var i;
                const {current: o} = this;
                if (e === (null == (i = o.list) ? void 0 : i.audios) && t === o.audio)
                    return;
                const {lists: a} = this.state
                  , l = a.findIndex((t=>{
                    var i;
                    return (null == (i = t) ? void 0 : i.audios) === e
                }
                ))
                  , r = a[l];
                if (!r)
                    throw new Error("AudioSnippetsPlayerQueue.moveTo: list not found");
                const n = t ? e.indexOf(t) : r.audioIndex;
                if (n < 0)
                    throw new Error("AudioSnippetsPlayerQueue.moveTo: audio not found");
                const d = [...a];
                return d[l] = (0,
                s._)({}, d[l], {
                    audioIndex: n
                }),
                this.setState({
                    lists: d,
                    listIndex: l
                }),
                this.current
            }
            moveToPrev() {
                const {listIndex: e, lists: t} = this.state
                  , {listIndex: i, audioIndex: o} = this.getPrevIndexes()
                  , a = [...t];
                return a[e] && (a[e] = (0,
                s._)({}, a[e], {
                    audioIndex: 0
                })),
                a[i] && (a[i] = (0,
                s._)({}, a[i], {
                    audioIndex: o
                })),
                this.setState({
                    listIndex: i
                }),
                this.current
            }
            get prevAudio() {
                var e;
                const {listIndex: t, audioIndex: i} = this.getPrevIndexes();
                return null == (e = this.state.lists[t]) ? void 0 : e.audios[i]
            }
            moveToNext() {
                const {listIndex: e, lists: t} = this.state
                  , {listIndex: i, audioIndex: o} = this.getNextIndexes()
                  , a = [...t];
                return a[e] && (a[e] = (0,
                s._)({}, a[e], {
                    audioIndex: 0
                })),
                a[i] && (a[i] = (0,
                s._)({}, a[i], {
                    audioIndex: o
                })),
                this.setState({
                    lists: a,
                    listIndex: i
                }),
                this.current
            }
            get nextAudio() {
                var e;
                const {listIndex: t, audioIndex: i} = this.getNextIndexes();
                return null == (e = this.state.lists[t]) ? void 0 : e.audios[i]
            }
            get currentList() {
                return this.state.list
            }
            get currentAudio() {
                return this.state.audio
            }
            get current() {
                return {
                    list: this.currentList,
                    audio: this.currentAudio
                }
            }
            getState() {
                return (0,
                s._)({}, this.current, {
                    lists: this.state.lists,
                    listIndex: this.state.listIndex
                })
            }
            setState(e) {
                const t = (0,
                s._)({}, this.state, e)
                  , i = t.lists[t.listIndex] || null;
                t.list = i,
                t.audio = i && i.audios[i.audioIndex] || null,
                (0,
                o.shallowEqual)(this.state, t) || (this.state = t,
                this.listener(this.getState()))
            }
            getPrevIndexes() {
                if (!this.currentList)
                    return {
                        listIndex: 0,
                        audioIndex: 0
                    };
                let e = this.currentList.audioIndex - 1
                  , {listIndex: t, lists: i} = this.state;
                var s, o;
                e < 0 && (t--,
                t < 0 && (t = i.length - 1),
                e = Math.max(0, (null != (o = null == (s = i[t]) ? void 0 : s.audios.length) ? o : 0) - 1));
                return {
                    listIndex: t,
                    audioIndex: e
                }
            }
            getNextIndexes() {
                const {currentList: e} = this;
                if (!e)
                    return {
                        listIndex: 0,
                        audioIndex: 0
                    };
                let t = e.audioIndex + 1
                  , {listIndex: i, lists: s} = this.state;
                return t >= e.audios.length && (i++,
                t = 0),
                i >= s.length && (i = 0),
                {
                    listIndex: i,
                    audioIndex: t
                }
            }
            constructor(e) {
                this.state = a,
                this.listener = e
            }
        }
    }
    ,
    82761: (e,t,i)=>{
        i.d(t, {
            AudioSnippetsPlayer: ()=>s.AudioSnippetsPlayer
        });
        var s = i(482203)
    }
    ,
    845596: (e,t,i)=>{
        i.d(t, {
            PreviewAudioPlayer: ()=>f,
            PreviewAudioPlayerNotification: ()=>P
        });
        var s = i(11010)
          , o = i(733761)
          , a = i(948049)
          , l = i(721366)
          , r = i(866310)
          , n = i(507120)
          , d = i(220681)
          , u = i(325200)
          , _ = i(664988)
          , c = i(165624);
        let h;
        const p = 1.5
          , y = {
            from: 0,
            to: 0
        }
          , g = {
            url: "",
            clip: y
        }
          , A = e=>e / 1e3
          , P = {
            start: "audio_preview_start",
            stop: "audio_preview_stop",
            pause: "audio_preview_pause"
        };
        class f {
            getCurrentPreview(e) {
                return n.audioPreviewsService.$audioPreviewEntities.getState()[e] || g
            }
            initEvents() {
                const e = window.Notifier;
                e ? (e.addRecvClbk("audio_start", "preview", (()=>{
                    this.playing && (this.pausedByAudio = Date.now(),
                    this.pause()),
                    this.pausedByAudio = null
                }
                )),
                e.addRecvClbk("video_start", "preview", (()=>{
                    this.playing && (this.pause(),
                    this.pausedByVideo = Date.now())
                }
                )),
                e.addRecvClbk("video_hide", "preview", (()=>{
                    var e;
                    if (!this.playing && (null == (e = this.currentAudio) ? void 0 : e.url) && this.pausedByVideo) {
                        if (Date.now() - this.pausedByVideo < 18e4) {
                            var t;
                            const {url: e} = this.getCurrentPreview((null == (t = this.currentAudio) ? void 0 : t.url) || "");
                            this.play(e, this.volume)
                        }
                        this.pausedByVideo = null
                    }
                }
                )),
                e.addRecvClbk("logged_off", "preview", (()=>{
                    this.stop(),
                    this.taskManager.clearAllTasks()
                }
                )),
                e.addRecvClbk("stories_video_start", "preview", (()=>{
                    this.playing && (this.pause(),
                    this.pausedByStories = (0,
                    _.vkNow)())
                }
                )),
                e.addRecvClbk("stories_video_end", "preview", (()=>{
                    if (!this.playing && this.pausedByStories) {
                        if ((0,
                        _.vkNow)() - this.pausedByStories < 18e4) {
                            var e;
                            const {url: t} = this.getCurrentPreview((null == (e = this.currentAudio) ? void 0 : e.url) || "");
                            this.play(t, this.volume)
                        }
                        this.pausedByStories = null
                    }
                }
                ))) : console.log("[PreviewAudioPlayer]: notifier has not found!")
            }
            sendLCNotification(e) {
                const t = window.Notifier;
                t && t.lcSend(e)
            }
            static ensure() {
                return h || (h = new f),
                h
            }
            resetFailedAudio() {
                this.failedAudio = null
            }
            setCurrentAudio(e) {
                this._currentAudio = e
            }
            implPlay(e) {
                var t = this;
                return (0,
                s._)((function*() {
                    t.impl.preparePlay(),
                    yield t.taskManager.setUrl(e),
                    t.taskManager.clearAllTasks(),
                    yield t.taskManager.play(),
                    t.sendLCNotification(P.start),
                    t._playing = !0
                }
                ))()
            }
            seek(e) {
                this.taskManager.seek(e)
            }
            fallbackPlay(e, t) {
                var i = this;
                return (0,
                s._)((function*() {
                    const [s,o] = e.split("_");
                    let a = t || "";
                    if (!a) {
                        var l;
                        const t = (0,
                        u.ensureAudiosService)();
                        yield t.fetchAudiosFx([{
                            ownerId: +s,
                            id: +o
                        }]);
                        var r;
                        a = null != (r = null == (l = t.$audioEntities.getState()[e]) ? void 0 : l.url) ? r : ""
                    }
                    const n = i.getCurrentPreview(`${s}_ ${o}`).clip.from;
                    yield i.implPlay(a),
                    i.fadeIn(1500),
                    i.seek(n / 1e3)
                }
                ))()
            }
            fadeIn(e=300) {
                this.taskManager.setVolume(this.volume, !0, e)
            }
            fadeOut(e=300) {
                this.taskManager.setVolume(0, !0, e)
            }
            get previewLength() {
                var e;
                const t = null == (e = this.currentAudio) ? void 0 : e.fullId;
                if (t) {
                    const e = this.getCurrentPreview(t);
                    if (!e)
                        return 0;
                    const {clip: i} = e;
                    return A(i.to - i.from)
                }
                return 0
            }
            get playbackDuration() {
                return this._playbackDuration
            }
            get timelinePosition() {
                return this._timelinePosition
            }
            set timelinePosition(e) {
                this._timelinePosition = e
            }
            stop() {
                this._playing = !1,
                this._currentAudio = null,
                this.impl.stop(),
                this.sendLCNotification(P.stop),
                this.switchConnection.emit("stop")
            }
            resume() {
                var e, t;
                if (!this._paused || !(null == (e = this.currentAudio) ? void 0 : e.url))
                    return;
                const {url: i} = this.getCurrentPreview((null == (t = this.currentAudio) ? void 0 : t.url) || "");
                this.play(i, this.volume)
            }
            pause() {
                this.taskManager.setVolume(0, !0),
                this.taskManager.pause(),
                this.sendLCNotification(P.pause)
            }
            play(e, t) {
                var i = this;
                return (0,
                s._)((function*() {
                    var s;
                    i.volume = t || d.DEFAULT_VOLUME,
                    i.taskManager.setVolume(0, !1),
                    i.resetFailedAudio();
                    const {url: o, clip: a} = i.getCurrentPreview(e);
                    var l;
                    i._timelinePosition = null != (l = null == (s = a) ? void 0 : s.from) ? l : 0,
                    o && (i.seek(0),
                    yield i.implPlay(o),
                    i.fadeIn(1500))
                }
                ))()
            }
            subscribe(e, t) {
                this.eventBus.subscribe(e, t)
            }
            unsubscribe(e, t) {
                this.eventBus.unsubscribe(e, t)
            }
            notify(e, ...t) {
                this.eventBus.emit(e, ...t)
            }
            get currentAudio() {
                return this._currentAudio
            }
            get playing() {
                return this._playing
            }
            get paused() {
                return this._paused
            }
            constructor() {
                this._playing = !1,
                this._paused = !1,
                this.failedAudio = null,
                this.fading = !1,
                this._playbackDuration = 0,
                this._timelinePosition = 0,
                this.pausedByAudio = null,
                this.pausedByVideo = null,
                this.pausedByStories = null,
                this.switchConnection = c.AudioPlayersSwitch.ensure().connect({
                    resume: ()=>{
                        this.resume()
                    }
                    ,
                    pause: ()=>{
                        this.pause(),
                        this.notify(r.events.SNIPPET_PLAYER_CHANGE_SOURCE)
                    }
                    ,
                    stop: ()=>{
                        this.stop()
                    }
                });
                const e = {
                    onPause: ()=>{
                        this._playing = !1,
                        this._paused = !0,
                        this.fading = !1,
                        this.failedAudio || (this.notify(r.events.STOP_PREVIEW, this.currentAudio),
                        this._playbackDuration = 0,
                        this._timelinePosition = 0,
                        this.switchConnection.emit("pause"))
                    }
                    ,
                    onPlay: ()=>{
                        this._playing = !0,
                        this._paused = !1,
                        this.fading = !1,
                        this._playbackDuration = 0,
                        this.notify(r.events.PLAY_PREVIEW, this.currentAudio),
                        this.switchConnection.emit("play")
                    }
                    ,
                    onBufferUpdate: e=>{
                        e && this.notify(r.events.PREVIEW_BUFFERED, this.currentAudio)
                    }
                    ,
                    onEnd: ()=>{
                        this.failedAudio || this.notify(r.events.END_PREVIEW, this.currentAudio)
                    }
                    ,
                    onFail: e=>{
                        var t, i, s, o;
                        if (this.failedAudio)
                            return this.resetFailedAudio(),
                            void this.stop();
                        this.failedAudio = this.currentAudio;
                        o = null == (t = this.currentAudio) ? void 0 : t.url;
                        var a;
                        this.stop();
                        let l = null != (a = null == (i = this.failedAudio) ? void 0 : i.fullId) ? a : "";
                        this.fallbackPlay(l, null == (s = this.failedAudio) ? void 0 : s.url)
                    }
                    ,
                    onCanPlay: ()=>null,
                    onProgressUpdate: (e,t)=>{
                        const i = this.impl.getDuration();
                        let s = y;
                        this.currentAudio && (s = this.getCurrentPreview(this.currentAudio.fullId).clip),
                        this.failedAudio && (s = this.getCurrentPreview(this.failedAudio.fullId).clip),
                        i && i - t < p && !this.fading && (this.fading = !0,
                        this.fadeOut(1500));
                        const o = (s.to - s.from) / 1e3
                          , a = (l = e,
                        n = i,
                        Math.round(l * n));
                        var l, n, d, u;
                        if (this._playbackDuration = a,
                        this._timelinePosition = (d = A(s.from),
                        u = this._playbackDuration,
                        d + u),
                        this.currentAudio) {
                            const i = Math.round(A(s.from) + t);
                            return void this.notify(r.events.PROGRESS_PREVIEW, e, i)
                        }
                        if (a && a === this._playbackDuration)
                            return;
                        const _ = a ? a - s.from / 100 : 0
                          , c = _ / o
                          , h = Math.round(t);
                        Math.round(A(s.from) - t);
                        this.notify(r.events.PROGRESS_PREVIEW, c, h);
                        _ > s.to / 1e3 && (this.resetFailedAudio(),
                        this.stop())
                    }
                    ,
                    defaultVolume: 0
                };
                this.eventBus = new l.EventBus,
                this.impl = new a.AudioPlayerHTML5(e),
                this.taskManager = new o.AudioTaskManager(this.impl),
                this.taskManager.setVolume(0, !0, p),
                this.initEvents()
            }
        }
    }
    ,
    155304: (e,t,i)=>{
        i.d(t, {
            WebAudioPlayerAdapter: ()=>r
        });
        var s = i(132247)
          , o = i(145669)
          , a = i(13755)
          , l = i(946742);
        class r {
            playAudio(e, t, i, a) {
                var r;
                const n = new s.WebPlayerAdapter(this.webAudioPlayer).getPlaylistId()
                  , d = a ? this.webAudioPlayer.getPlaylist(a.type, a.ownerId, a.albumId) : n ? this.webAudioPlayer.getCurrentPlaylist() : this.webAudioPlayer.getPlaylist(o.AudioPlaylist.TYPE_TEMP, window.vk.id)
                  , u = (0,
                l.apiAudioToAudioTuple)(e)
                  , _ = null == (r = t) ? void 0 : r.map(l.apiAudioToAudioTuple);
                this.webAudioPlayer.getPlaylistQueue().setSortedQueue(_),
                this.webAudioPlayer.play(u, d, i)
            }
            playPlaylist(e, t) {
                this.webAudioPlayer.playPlaylist(e.owner_id, e.id, e.access_key, t)
            }
            playPreviousAudio() {
                this.webAudioPlayer.playPrev()
            }
            playNextAudio() {
                this.webAudioPlayer.playNext()
            }
            pause() {
                this.webAudioPlayer.pause()
            }
            stop() {
                this.webAudioPlayer.stop()
            }
            setVolume(e) {
                this.webAudioPlayer.setVolume(e)
            }
            setCurrentAudioProgress(e) {
                this.webAudioPlayer.seek(e)
            }
            getCurrentAudio() {
                return (0,
                a.audioTupleToApiAudio)(this.webAudioPlayer.getCurrentAudio())
            }
            getCurrentAudioProgress() {
                return this.webAudioPlayer.getCurrentProgress()
            }
            getCurrentAudioVolume() {
                return this.webAudioPlayer.getVolume()
            }
            getCurrentPlaylist() {
                var e, t;
                const i = this.webAudioPlayer.getCurrentPlaylist();
                if (!i)
                    return null;
                const s = i.getPlaylistId()
                  , o = i.getOwnerId();
                if ("string" == typeof s)
                    return null;
                const a = i.getCoverUrl()
                  , l = a ? {
                    width: 300,
                    height: 300,
                    photo_300: a,
                    sizes: [{
                        width: 300,
                        height: 300,
                        src: a,
                        type: "z"
                    }]
                } : void 0
                  , r = {
                    access_key: i.getAccessHash(),
                    title: i.getTitle(),
                    subtitle: i.getSubtitle(),
                    count: i.getTotalCount(),
                    plays: i.getListens(),
                    update_time: i.getLastUpdated(),
                    is_following: i.isFollowed(),
                    album_type: i.getType(),
                    description: i.getDescription(),
                    photo: l,
                    thumbs: l ? [l] : void 0
                };
                return (null == (t = i) || null == (e = t.isFollowed) ? void 0 : e.call(t)) ? r.original = {
                    owner_id: o,
                    playlist_id: s,
                    access_key: i.getAccessHash()
                } : (r.owner_id = o,
                r.id = s),
                r
            }
            subscribe(e, t, i) {
                return this.webAudioPlayer.on(i, e, t)
            }
            unsubscribe(e, t, i) {
                if (void 0 !== i)
                    return this.webAudioPlayer.off(i)
            }
            isPlaying() {
                return this.webAudioPlayer.isPlaying()
            }
            constructor(e) {
                this.webAudioPlayer = e,
                this.ads = e.ads
            }
        }
    }
    ,
    231909: (e,t,i)=>{
        i.d(t, {
            WebQueueListener: ()=>o
        });
        var s = i(487626);
        class o extends s.QueueListener {
            connect(e) {
                e && this.listenQueueKey !== e.key && (this.connected = !0,
                this.listenQueueKey = e.key,
                window.Notifier.addKey({
                    key: e.key,
                    ts: e.timestamp
                }, ((e,t)=>this.queueHandler(t))))
            }
            constructor(e) {
                super(e)
            }
        }
    }
    ,
    985127: (e,t,i)=>{
        i.d(t, {
            speechLoader: ()=>o,
            voiceMessagePlayerLoader: ()=>s
        });
        const s = ()=>window.AudioMessagePlayer && window.AudioMessagePlayer.loaded ? Promise.resolve(window.AudioMessagePlayer) : Promise.all([i.e(40885), i.e(9375)]).then(i.bind(i, 200445)).then((()=>window.AudioMessagePlayer))
          , o = ()=>Promise.all([i.e(40885), i.e(28762)]).then(i.bind(i, 590605))
    }
    ,
    590605: (e,t,i)=>{
        i.r(t);
        var s = i(314389)
          , o = i(246276);
        const a = {
            isSupport: ()=>!(!window.AudioContext || !(navigator.getUserMedia || navigator.mediaDevices && navigator.mediaDevices.getUserMedia)),
            getAvailableMicrophones: ()=>s.AudioRecorder.isSupport() ? s.AudioRecorder.getAvailableMicrophones() : Promise.resolve([]),
            newRecorder: ()=>(window.Promise || (window.Promise = Promise),
            new s.AudioRecorder),
            resample: (e,t,i)=>(0,
            o.fastResample)(e, t, i),
            createVisualization: i(513457).createVisualization
        };
        window.Speech = a
    }
    ,
    154776: (e,t,i)=>{
        i.d(t, {
            AudioPlayerUI: ()=>o
        });
        var s = i(768706);
        class o {
            constructor({audioPlayer: e}) {
                this.lyrics = new s.AudioPlayerLyricsUI({
                    audioPlayer: e
                })
            }
        }
    }
    ,
    226041: (e,t,i)=>{
        i.d(t, {
            AudioLyricsModalController: ()=>r
        });
        var s = i(434788)
          , o = i(785893)
          , a = i(359639)
          , l = i(895145);
        class r {
            open(e) {
                this.mount(e)
            }
            destroy() {
                this.unmount()
            }
            mount({audio: e, playlist: t, context: i}) {
                if (this.onCloseFn)
                    return;
                const {AudioLyricsModalApplication: l} = this;
                (0,
                a.showMessageBoxModalSuspense)((a=>(this.onCloseFn = a.onClose,
                (0,
                o.jsx)(l, (0,
                s._)({}, a, {
                    audio: e,
                    playlist: t,
                    context: i,
                    audioPlayer: this.audioPlayer
                })))), {
                    width: 490,
                    onDestroy: ()=>{
                        this.onCloseFn = null
                    }
                })
            }
            constructor({audioPlayer: e}) {
                this.onCloseFn = null,
                this.AudioLyricsModalApplication = (0,
                l.asyncComponent)((()=>Promise.all([i.e(98066), i.e(40885), i.e(38288), i.e(96816)]).then(i.bind(i, 510056))), (e=>e.AudioLyricsModalApplication)),
                this.unmount = ()=>{
                    this.onCloseFn && this.onCloseFn(),
                    this.onCloseFn = null
                }
                ,
                this.audioPlayer = e
            }
        }
    }
    ,
    587178: (e,t,i)=>{
        i.d(t, {
            AudioLyricsCredits: ()=>a
        });
        var s = i(785893)
          , o = i(913889);
        function a({children: e}) {
            return (0,
            s.jsx)("div", {
                className: o.default.credits,
                children: e
            })
        }
    }
    ,
    48219: (e,t,i)=>{
        i.d(t, {
            AudioLyricsLayout: ()=>l
        });
        var s = i(785893)
          , o = i(964725)
          , a = i(219281);
        function l({children: e, scrollRef: t, compensationTop: i, height: l, width: r, onWheel: n, onScroll: d, onTouchStart: u, onTouchMove: _, onTouchEnd: c, onTrackerDragStart: h, onTrackerDragStop: p}) {
            return (0,
            s.jsx)("div", {
                style: {
                    height: l,
                    width: r
                },
                children: (0,
                s.jsx)(o.CustomScrollView, {
                    boxRef: t,
                    className: a.default.scroll,
                    onWheel: n,
                    onScroll: d,
                    onTouchStart: u,
                    onTouchMove: _,
                    onTouchEnd: c,
                    onTrackerDragStart: h,
                    onTrackerDragStop: p,
                    children: (0,
                    s.jsx)("div", {
                        className: a.default.content,
                        style: {
                            paddingTop: i || void 0
                        },
                        children: e
                    })
                })
            })
        }
    }
    ,
    19030: (e,t,i)=>{
        i.d(t, {
            AudioLyricsLine: ()=>n
        });
        var s = i(785893)
          , o = i(667294)
          , a = i(659397)
          , l = i(897764)
          , r = i(653070);
        const n = (0,
        o.forwardRef)((function({text: e, interlude: t, active: i, onClick: o}, n) {
            const d = (0,
            a.classNames)(r.default.line, !1 === i && r.default.inactive, o && r.default.clickable)
              , u = ()=>{
                o && o()
            }
            ;
            return e ? (0,
            s.jsx)("div", {
                ref: n,
                className: d,
                onClick: u,
                children: (0,
                s.jsx)("div", {
                    className: r.default.text,
                    children: e
                })
            }) : t ? (0,
            s.jsx)("div", {
                ref: n,
                className: (0,
                a.classNames)(d, r.default.interlude),
                onClick: u,
                children: (0,
                s.jsx)("div", {
                    className: (0,
                    a.classNames)("foo", r.default.text),
                    children: (0,
                    s.jsx)(l.Icon32SongOutline, {})
                })
            }) : null
        }
        ))
    }
    ,
    663933: (e,t,i)=>{
        i.d(t, {
            AudioLyricsLottieCountdown: ()=>u
        });
        var s, o = i(785893), a = i(667294), l = i(682832), r = i(781475), n = i(837971), d = i(359028);
        function u({time: e, playing: t}) {
            const i = (0,
            a.useRef)(null)
              , s = (0,
            a.useRef)(null)
              , u = (0,
            a.useRef)(null)
              , c = (0,
            a.useRef)(null)
              , h = (0,
            a.useRef)(null)
              , p = function(e) {
                if (e <= 0)
                    return 0;
                if (e <= 4330)
                    return 2;
                return 1
            }(e);
            return (0,
            a.useLayoutEffect)((()=>{
                const e = i.current
                  , t = s.current;
                e && t && (u.current = l.lottie.loadAnimation({
                    container: e,
                    loop: !0,
                    autoplay: !1,
                    renderer: "svg",
                    animationData: r
                }),
                u.current.hide(),
                c.current = l.lottie.loadAnimation({
                    container: t,
                    loop: !1,
                    autoplay: !1,
                    renderer: "svg",
                    animationData: n
                }),
                c.current.hide())
            }
            ), []),
            (0,
            a.useLayoutEffect)((()=>{
                const e = e=>{
                    !function(e, t) {
                        if (!e)
                            return;
                        e.show(),
                        t && e.play()
                    }(e, t),
                    h.current = e
                }
                  , i = t=>{
                    const i = h.current;
                    if (!i)
                        return void e(t);
                    if (!i.loop)
                        return _(i),
                        void e(t);
                    const s = ()=>{
                        _(i),
                        e(t),
                        i.removeEventListener("loopComplete", s)
                    }
                    ;
                    return i.addEventListener("loopComplete", s)
                }
                ;
                switch (p) {
                case 0:
                    {
                        const e = setTimeout((()=>{
                            i(null)
                        }
                        ), 1e3);
                        return ()=>{
                            clearTimeout(e)
                        }
                    }
                case 1:
                    return i(u.current);
                case 2:
                    return i(c.current)
                }
            }
            ), [p]),
            (0,
            a.useLayoutEffect)((()=>{
                const e = h.current;
                if (e) {
                    if (!t) {
                        e.loop || e.pause();
                        const t = ()=>{
                            e.pause(),
                            e.removeEventListener("loopComplete", t)
                        }
                        ;
                        return e.addEventListener("loopComplete", t)
                    }
                    e.play()
                }
            }
            ), [t]),
            (0,
            a.useEffect)((()=>()=>{
                var e, t;
                null == (e = u.current) || e.destroy(),
                null == (t = c.current) || t.destroy()
            }
            ), []),
            (0,
            o.jsxs)("div", {
                className: d.default.countdown,
                children: [(0,
                o.jsx)("div", {
                    ref: i,
                    className: d.default.animation
                }), (0,
                o.jsx)("div", {
                    ref: s,
                    className: d.default.animation
                })]
            })
        }
        function _(e) {
            e && (e.hide(),
            e.stop())
        }
        !function(e) {
            e[e.None = 0] = "None",
            e[e.Dots = 1] = "Dots",
            e[e.S3 = 2] = "S3"
        }(s || (s = {}))
    }
    ,
    445503: (e,t,i)=>{
        i.d(t, {
            KaraokeAudioLyrics: ()=>y
        });
        var s = i(785893)
          , o = i(667294)
          , a = i(659397)
          , l = i(527245)
          , r = i(48219)
          , n = i(19030)
          , d = i(587178)
          , u = i(663933)
          , _ = i(869394)
          , c = i(558918)
          , h = i(54152)
          , p = i(805866);
        function y({lines: e, credits: t, timeMs: i, isPlaying: y, compensationTop: g=0, height: A, width: P}) {
            const f = e[0].begin
              , E = f >= 5e3
              , m = i - f > 2e3
              , {isManualScrollMode: w, onManualScroll: v, setScrollModeAuto: I} = (0,
            c.useManualScrollMode)({
                isPlaying: y
            })
              , {currentLineIndex: C} = (0,
            h.useTimingLines)({
                lines: e,
                timeMs: i,
                withCountdown: E
            })
              , T = (0,
            o.useRef)(null)
              , b = (0,
            o.useRef)(null);
            (0,
            o.useLayoutEffect)((()=>{
                if (w)
                    return;
                const e = b.current
                  , t = T.current;
                if (t) {
                    var i;
                    const s = Math.max(0, ((null == (i = e) ? void 0 : i.offsetTop) || 0) - g);
                    t.scrollTo({
                        top: s,
                        behavior: "smooth"
                    })
                }
            }
            ), [C, w, E]);
            const L = (0,
            _.useEventProcess)({
                timeout: 3e3
            })
              , D = (0,
            _.useEventProcess)({
                timeout: 3e3
            })
              , O = (0,
            _.useEventProcess)({
                timeout: 100
            })
              , S = (0,
            o.useMemo)((()=>(0,
            a.throttle)((()=>{
                v()
            }
            ), 50)), [v])
              , k = (0,
            l.useEventCallback)((()=>{
                O.start()
            }
            ))
              , M = (0,
            o.useMemo)((()=>(0,
            a.throttle)((()=>{
                k()
            }
            ), 50)), [k])
              , U = (0,
            l.useEventCallback)((()=>{
                L.ref.current && L.update();
                (L.ref.current || D.ref.current || O.ref.current) && S()
            }
            ))
              , x = (0,
            o.useMemo)((()=>(0,
            a.throttle)((()=>{
                U()
            }
            ), 50)), [U]);
            return (0,
            s.jsxs)(r.AudioLyricsLayout, {
                scrollRef: T,
                onWheel: M,
                onTrackerDragStart: L.start,
                onTrackerDragStop: L.end,
                onTouchStart: D.start,
                onTouchEnd: D.end,
                onTouchMove: D.update,
                onScroll: x,
                compensationTop: g,
                height: A,
                width: P,
                children: [E && (0,
                s.jsx)("div", {
                    className: (0,
                    a.classNames)(p.default.countdown, m && p.default.hidden),
                    children: (0,
                    s.jsx)(u.AudioLyricsLottieCountdown, {
                        time: Math.max(0, f - i),
                        playing: y
                    })
                }), e.map(((e,t)=>{
                    const {changeProgress: i} = e
                      , o = t === C
                      , a = i && (()=>{
                        i(),
                        L.end(),
                        D.end(),
                        O.end(),
                        I()
                    }
                    );
                    return (0,
                    s.jsx)(n.AudioLyricsLine, {
                        ref: o ? b : void 0,
                        text: e.text,
                        interlude: e.interlude,
                        active: o || w,
                        onClick: a
                    }, t)
                }
                )), !!t && (0,
                s.jsx)(d.AudioLyricsCredits, {
                    children: t
                })]
            })
        }
    }
    ,
    869394: (e,t,i)=>{
        i.d(t, {
            useEventProcess: ()=>a
        });
        var s = i(667294)
          , o = i(527245);
        function a({timeout: e, onChange: t}={}) {
            const i = (0,
            s.useRef)(!1)
              , a = (0,
            s.useRef)()
              , l = e=>{
                i.current = e,
                t && t(e)
            }
              , r = ()=>{
                "number" == typeof e && (clearTimeout(a.current),
                a.current = setTimeout((()=>{
                    a.current = void 0,
                    l(!1)
                }
                ), 5e3))
            }
              , n = (0,
            o.useEventCallback)((()=>{
                l(!0),
                r()
            }
            ))
              , d = (0,
            o.useEventCallback)((()=>{
                i.current && null === a.current || r()
            }
            ))
              , u = (0,
            o.useEventCallback)((()=>{
                l(!1)
            }
            ));
            return {
                ref: i,
                start: n,
                update: d,
                end: u
            }
        }
    }
    ,
    558918: (e,t,i)=>{
        i.d(t, {
            useManualScrollMode: ()=>o
        });
        var s = i(667294);
        function o({isPlaying: e}) {
            const [t,i] = function() {
                const e = (0,
                s.useRef)()
                  , [t,i] = (0,
                s.useState)(!1)
                  , o = (0,
                s.useCallback)((t=>{
                    i(t),
                    clearTimeout(e.current),
                    t && (e.current = setTimeout((()=>{
                        i(!1)
                    }
                    ), 5e3))
                }
                ), []);
                return (0,
                s.useEffect)((()=>()=>{
                    clearTimeout(e.current)
                }
                ), []),
                [t, o]
            }()
              , [o,a] = (0,
            s.useState)(t);
            (0,
            s.useEffect)((()=>{
                a(e ? t : e=>e || t)
            }
            ), [e, t]);
            const l = (0,
            s.useCallback)((()=>{
                i(!0)
            }
            ), []);
            return {
                isManualScrollMode: o,
                setScrollModeAuto: (0,
                s.useCallback)((()=>{
                    i(!1)
                }
                ), []),
                onManualScroll: l
            }
        }
    }
    ,
    54152: (e,t,i)=>{
        i.d(t, {
            useTimingLines: ()=>o
        });
        var s = i(667294);
        function o({lines: e, timeMs: t, withCountdown: i}) {
            const o = (0,
            s.useRef)(-1)
              , a = (0,
            s.useRef)(0);
            let l, r;
            const n = ()=>{
                r = e[o.current],
                l = e[a.current]
            }
            ;
            for (n(),
            r && r.begin > t && (o.current = e.findIndex((e=>e.begin >= t)) - Number(i),
            a.current = o.current + 1,
            n()); l && t >= l.begin; )
                o.current = a.current,
                a.current++,
                n();
            return {
                currentLine: r,
                nextLine: l,
                currentLineIndex: o.current,
                nextLineIndex: a.current
            }
        }
    }
    ,
    61193: (e,t,i)=>{
        i.d(t, {
            StaticAudioLyrics: ()=>r
        });
        var s = i(785893)
          , o = i(48219)
          , a = i(19030)
          , l = i(587178);
        function r({lines: e, credits: t, compensationTop: i, height: r, width: n}) {
            return (0,
            s.jsxs)(o.AudioLyricsLayout, {
                height: r,
                width: n,
                compensationTop: i,
                children: [e.map(((e,t)=>(0,
                s.jsx)(a.AudioLyricsLine, {
                    text: e.text,
                    interlude: e.interlude
                }, t))), !!t && (0,
                s.jsx)(l.AudioLyricsCredits, {
                    children: t
                })]
            })
        }
    }
    ,
    880525: (e,t,i)=>{
        i.d(t, {
            KaraokeAudioLyrics: ()=>o.KaraokeAudioLyrics,
            StaticAudioLyrics: ()=>s.StaticAudioLyrics
        });
        var s = i(61193)
          , o = i(445503)
    }
    ,
    244725: (e,t,i)=>{
        i.d(t, {
            AudioLyricsAds: ()=>r
        });
        var s = i(785893)
          , o = i(635928)
          , a = i(365801)
          , l = i(29271);
        function r() {
            return (0,
            s.jsx)(o.Placeholder, {
                icon: (0,
                s.jsx)(a.IconIllustrationAdvertising56h, {}),
                children: l.getLang("audio_lyrics_ads")
            })
        }
    }
    ,
    40431: (e,t,i)=>{
        i.d(t, {
            AudioLyricsError: ()=>n
        });
        var s = i(785893)
          , o = i(635928)
          , a = i(832550)
          , l = i(902757)
          , r = i(29271);
        function n({onRetryClick: e}) {
            return (0,
            s.jsx)(o.Placeholder, {
                action: (0,
                s.jsx)(a.Button, {
                    size: "l",
                    mode: "secondary",
                    before: (0,
                    s.jsx)(l.Icon24RefreshOutline, {}),
                    onClick: ()=>{
                        e()
                    }
                    ,
                    children: r.getLang("audio_lyrics_error_btn_retry")
                }),
                children: r.getLang("audio_lyrics_error")
            })
        }
    }
    ,
    357679: (e,t,i)=>{
        i.d(t, {
            AudioLyricsModal: ()=>r
        });
        var s = i(785893)
          , o = i(816511)
          , a = i(86894)
          , l = i(951068);
        function r({header: e, content: t, player: i, onClose: r}) {
            return (0,
            s.jsxs)(o.ModalBox, {
                children: [(0,
                s.jsx)(a.ModalDismissButton, {
                    onClick: ()=>r()
                }), (0,
                s.jsxs)("div", {
                    className: l.default.layout,
                    children: [(0,
                    s.jsx)("div", {
                        className: l.default.headerWrapper,
                        children: (0,
                        s.jsx)("div", {
                            className: l.default.header,
                            children: e
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: l.default.content,
                        children: t
                    }), (0,
                    s.jsx)("div", {
                        className: l.default.playerWrapper,
                        children: (0,
                        s.jsx)("div", {
                            className: l.default.player,
                            children: i
                        })
                    })]
                })]
            })
        }
    }
    ,
    212422: (e,t,i)=>{
        i.d(t, {
            AudioCover: ()=>d
        });
        var s = i(785893)
          , o = i(667294)
          , a = i(659397)
          , l = i(473216)
          , r = i(301230)
          , n = i(34124);
        function d({url: e}) {
            const [t,i] = (0,
            o.useState)(!1);
            return (0,
            o.useLayoutEffect)((()=>{
                i(!1)
            }
            ), [e]),
            !e || t ? (0,
            s.jsx)("div", {
                className: (0,
                a.classNames)(n.default.cover, n.default.placeholder),
                children: (0,
                s.jsx)(l.Icon28SongOutline, {})
            }) : (0,
            s.jsxs)("div", {
                className: n.default.cover,
                children: [!r.browser.safari && (0,
                s.jsx)("div", {
                    className: n.default.blur,
                    style: {
                        backgroundImage: `url(${e})`
                    }
                }), (0,
                s.jsx)("img", {
                    src: e,
                    className: n.default.image,
                    onError: ()=>{
                        i(!0)
                    }
                })]
            })
        }
    }
    ,
    266213: (e,t,i)=>{
        i.d(t, {
            AudioLyricsModalHeader: ()=>r
        });
        var s = i(785893)
          , o = i(757342)
          , a = i(212422)
          , l = i(267666);
        function r({title: e, explicit: t, performer: i, coverUrl: r}) {
            return (0,
            s.jsxs)("div", {
                className: l.default.header,
                children: [(0,
                s.jsx)("div", {
                    className: l.default.cover,
                    children: (0,
                    s.jsx)(a.AudioCover, {
                        url: r
                    })
                }), (0,
                s.jsxs)("div", {
                    className: l.default.info,
                    children: [(0,
                    s.jsxs)("div", {
                        className: l.default.titleContainer,
                        children: [(0,
                        s.jsx)("span", {
                            className: l.default.title,
                            children: e
                        }), t && (0,
                        s.jsx)("div", {
                            className: l.default.explicit,
                            children: (0,
                            s.jsx)(o.Icon12Explicit, {})
                        })]
                    }), (0,
                    s.jsx)("span", {
                        className: l.default.performer,
                        children: i
                    })]
                })]
            })
        }
    }
    ,
    397985: (e,t,i)=>{
        i.d(t, {
            AudioLyricsNotFound: ()=>r
        });
        var s = i(785893)
          , o = i(635928)
          , a = i(867484)
          , l = i(29271);
        function r() {
            return (0,
            s.jsx)(o.Placeholder, {
                icon: (0,
                s.jsx)(a.IconIllustrationLyrics56h, {}),
                children: l.getLang("audio_track_has_no_lyrics_yet")
            })
        }
    }
    ,
    688944: (e,t,i)=>{
        i.d(t, {
            AudioLyricsPlayer: ()=>u
        });
        var s = i(785893)
          , o = i(617763)
          , a = i(398)
          , l = i(417576)
          , r = i(634027)
          , n = i(405233)
          , d = i(228592);
        function u(e) {
            const {isPlaying: t, isAds: i} = e;
            return (0,
            s.jsxs)("div", {
                className: d.default.player,
                children: [(0,
                s.jsxs)("div", {
                    className: d.default.progress,
                    children: [(0,
                    s.jsx)("div", {
                        className: d.default.slider,
                        children: (0,
                        s.jsx)(l.AudioSlider, {
                            value: e.progress,
                            backValue: e.buffered,
                            onDragEnd: e.onChangeProgress,
                            disabled: e.sliderDisabled,
                            type: i ? "ads" : "audio"
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: d.default.time,
                        children: e.time
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: d.default.controls,
                    children: [(0,
                    s.jsx)(n.TertiaryIconButton, {
                        onClick: e.onPlayPrev,
                        disabled: e.prevDisabled,
                        children: (0,
                        s.jsx)(o.Icon24SkipBack, {})
                    }), (0,
                    s.jsx)(r.PlayButton, {
                        icon: t ? "pause" : "play",
                        onClick: e.onTogglePlaying,
                        disabled: e.playDisabled
                    }), (0,
                    s.jsx)(n.TertiaryIconButton, {
                        onClick: e.onPlayNext,
                        disabled: e.nextDisabled,
                        children: (0,
                        s.jsx)(a.Icon24SkipForward, {})
                    })]
                })]
            })
        }
    }
    ,
    634027: (e,t,i)=>{
        i.d(t, {
            PlayButton: ()=>n
        });
        var s = i(434788)
          , o = i(785893)
          , a = i(300993)
          , l = i(888188)
          , r = i(744755);
        function n(e) {
            return (0,
            o.jsx)("button", (0,
            s._)({
                type: "button"
            }, e, {
                className: r.default.button,
                children: "play" === e.icon ? (0,
                o.jsx)(a.Icon24Play, {}) : (0,
                o.jsx)(l.Icon24Pause, {})
            }))
        }
    }
    ,
    405233: (e,t,i)=>{
        i.d(t, {
            TertiaryIconButton: ()=>l
        });
        var s = i(434788)
          , o = i(785893)
          , a = i(476558);
        function l(e) {
            return (0,
            o.jsx)("button", (0,
            s._)({
                type: "button"
            }, e, {
                className: a.default.button
            }))
        }
    }
    ,
    417576: (e,t,i)=>{
        i.d(t, {
            AudioSlider: ()=>u
        });
        var s = i(785893)
          , o = i(667294)
          , a = i(659397)
          , l = i(527245)
          , r = i(846681)
          , n = i(276125)
          , d = i(954657);
        function u({value: e, backValue: t, disabled: i, onDragEnd: u, type: _}) {
            const c = (0,
            o.useRef)(null)
              , h = (0,
            o.useRef)()
              , p = (0,
            l.useEventCallback)(u);
            return (0,
            o.useEffect)((()=>{
                const s = c.current
                  , o = new n.default(s,{
                    value: e,
                    backValue: t,
                    size: 1,
                    withBackLine: "number" == typeof t,
                    onEndDragging: p
                });
                return h.current = o,
                o.setBlocked(i),
                ()=>{
                    o.destroy()
                }
            }
            ), []),
            (0,
            o.useLayoutEffect)((()=>{
                const e = h.current;
                e && e.toggleAdState("ads" === _)
            }
            ), ["ads" === _]),
            (0,
            r.useUpdateLayoutEffect)((()=>{
                const e = h.current;
                e && e.setBlocked(i)
            }
            ), [i]),
            (0,
            r.useUpdateLayoutEffect)((()=>{
                const t = h.current;
                t && t.setValue(e)
            }
            ), [e]),
            (0,
            r.useUpdateLayoutEffect)((()=>{
                const e = h.current;
                e && e.setBackValue(t)
            }
            ), [t]),
            (0,
            s.jsx)("div", {
                className: (0,
                a.classNames)(d.default.slider, "ads" === _ && d.default.ads),
                children: (0,
                s.jsx)("div", {
                    ref: c
                })
            })
        }
    }
    ,
    964725: (e,t,i)=>{
        i.d(t, {
            CustomScrollView: ()=>c
        });
        var s = i(785893)
          , o = i(667294)
          , a = i(659397)
          , l = i(181498)
          , r = i(214542)
          , n = i(428253)
          , d = i(151571)
          , u = i(605812)
          , _ = i(811370);
        const c = ({className: e, children: t, boxRef: i, windowResize: c, autoHideScrollbar: h=!1, autoHideScrollbarDelay: p, onWheel: y, onScroll: g, onTouchStart: A, onTouchMove: P, onTouchEnd: f, onTrackerDragStart: E, onTrackerDragStop: m})=>{
            const {document: w, window: v} = (0,
            l.useDOM)()
              , I = o.useRef(NaN)
              , C = o.useRef(0)
              , T = o.useRef(0)
              , b = o.useRef(0)
              , L = o.useRef(0)
              , D = o.useRef("")
              , O = o.useRef(0)
              , S = o.useRef(0)
              , k = (0,
            n.useExternRef)(i)
              , M = o.useRef(null)
              , U = o.useRef(null)
              , x = e=>{
                const t = e / (L.current - T.current);
                (e=>{
                    C.current = e,
                    null !== U.current && (U.current.style[D.current] = `translate(0, ${e}px)`)
                }
                )((T.current - b.current) * t)
            }
              , R = ()=>{
                if (!k.current || !M.current || !U.current)
                    return;
                const e = k.current.clientHeight
                  , t = k.current.scrollHeight
                  , i = e / t
                  , s = Math.max(e * i, 40);
                I.current = i,
                T.current = e,
                L.current = t,
                b.current = s,
                i >= 1 ? M.current.style.display = "none" : (M.current.style.display = "",
                U.current.style.height = `${s}px`,
                x(k.current.scrollTop))
            }
              , B = (0,
            d.useEventListener)("resize", R);
            (0,
            r.useIsomorphicLayoutEffect)((()=>{
                c && v && B.add(v)
            }
            ), [c, v]),
            (0,
            r.useIsomorphicLayoutEffect)((()=>{
                var e;
                let t = null == (e = U.current) ? void 0 : e.style
                  , i = "";
                void 0 !== t && ("transform"in t ? i = "transform" : "webkitTransform"in t && (i = "webkitTransform")),
                D.current = i
            }
            ), []),
            (0,
            r.useIsomorphicLayoutEffect)(R);
            const {trackerVisible: N, onTargetScroll: j, onTrackerDragStart: W, onTrackerDragStop: F, onTrackerMouseEnter: K, onTrackerMouseLeave: H} = (0,
            u.useTrackerVisibility)(h, p)
              , Y = [(0,
            d.useEventListener)("mousemove", (e=>{
                e.preventDefault();
                const t = e.clientY - O.current;
                (e=>{
                    const t = e / (T.current - b.current);
                    null !== k.current && (k.current.scrollTop = (L.current - T.current) * t)
                }
                )(Math.min(Math.max(S.current + t, 0), T.current - b.current))
            }
            )), (0,
            d.useEventListener)("mouseup", (e=>{
                e.preventDefault(),
                h && F(),
                m && m(),
                Y.forEach((e=>e.remove()))
            }
            ))];
            return (0,
            s.jsxs)("div", {
                className: (0,
                a.classNames)(_.default.view, e),
                children: [(0,
                s.jsx)("div", {
                    className: (0,
                    a.classNames)(_.default.barY, "lyrics_CustomScrollView__barY"),
                    ref: M,
                    children: (0,
                    s.jsx)("div", {
                        className: (0,
                        a.classNames)(_.default.trackerY, !N && _.default.hidden),
                        onMouseEnter: h ? K : void 0,
                        onMouseLeave: h ? H : void 0,
                        ref: U,
                        onMouseDown: e=>{
                            var t;
                            e.preventDefault(),
                            O.current = e.clientY,
                            S.current = C.current,
                            h && W(),
                            E && E(),
                            (t = w) && Y.forEach((e=>e.add(t)))
                        }
                    })
                }), (0,
                s.jsx)("div", {
                    className: _.default.box,
                    tabIndex: -1,
                    ref: k,
                    onScroll: ()=>{
                        I.current >= 1 || !k.current || (h && j(),
                        x(k.current.scrollTop),
                        g && g())
                    }
                    ,
                    onWheel: y,
                    onTouchStart: A,
                    onTouchMove: P,
                    onTouchEnd: f,
                    children: t
                })]
            })
        }
    }
    ,
    605812: (e,t,i)=>{
        i.d(t, {
            useTrackerVisibility: ()=>a
        });
        var s = i(667294)
          , o = i(855356);
        const a = (e=!1,t=500)=>{
            const [i,a] = s.useState(!e)
              , l = s.useRef(!1)
              , r = s.useRef(!1)
              , {set: n, clear: d} = (0,
            o.useTimeout)((()=>a(!1)), t)
              , u = s.useCallback((()=>{
                d(),
                a(!0),
                r.current = !0
            }
            ), [d])
              , _ = s.useCallback((()=>{
                r.current = !1,
                l.current || n()
            }
            ), [n, l])
              , c = s.useCallback((()=>{
                r.current || (a(!0),
                n())
            }
            ), [n]);
            return {
                trackerVisible: i,
                onTrackerDragStart: u,
                onTrackerDragStop: _,
                onTrackerMouseEnter: s.useCallback((()=>{
                    d(),
                    l.current = !0,
                    a(!0)
                }
                ), [d]),
                onTrackerMouseLeave: s.useCallback((()=>{
                    c(),
                    l.current = !1
                }
                ), [c]),
                onTargetScroll: s.useCallback((()=>{
                    c()
                }
                ), [c])
            }
        }
    }
    ,
    983455: (e,t,i)=>{
        i.d(t, {
            AudioLyricsContainer: ()=>d
        });
        var s = i(434788)
          , o = i(785893)
          , a = i(667294)
          , l = i(797190)
          , r = i(453090)
          , n = i(880525);
        function d({lines: e, credits: t, compensationTop: i, height: d, width: u}) {
            const {audio: _, player: {isPlaying: c, isCurrentAudio: h, progress: {ms: p, duration: y}, actions: {changeProgress: g}}} = (0,
            r.useAudioLyricsModalStore)()
              , A = (0,
            a.useMemo)((()=>{
                var t;
                return null == (t = e.karaoke) ? void 0 : t.map((e=>h ? (0,
                s._)({}, e, {
                    changeProgress: ()=>{
                        const t = e.begin / (1e3 * y);
                        g(t),
                        l.AudioLyricsStatCollector.ensure().changeAudioProgressByLine(_)
                    }
                }) : e))
            }
            ), [e.karaoke, h, _, y]);
            if (A)
                return (0,
                o.jsx)(n.KaraokeAudioLyrics, {
                    lines: A,
                    credits: t,
                    timeMs: p,
                    isPlaying: c,
                    compensationTop: i,
                    height: d,
                    width: u
                });
            const P = e.static || e.ugc;
            return P ? (0,
            o.jsx)(n.StaticAudioLyrics, {
                lines: P,
                credits: t,
                compensationTop: i,
                height: d,
                width: u
            }) : null
        }
    }
    ,
    510056: (e,t,i)=>{
        i.r(t),
        i.d(t, {
            AudioLyricsModalApplication: ()=>l
        });
        var s = i(785893)
          , o = i(447355)
          , a = i(453090);
        function l({audioPlayer: e, audio: t, playlist: i, context: l, onClose: r}) {
            return (0,
            s.jsx)(a.AudioLyricsModalStoreProvider, {
                audio: t,
                playlist: i,
                context: l,
                audioPlayer: e,
                children: (0,
                s.jsx)(o.AudioLyricsModalContainer, {
                    onClose: r
                })
            })
        }
    }
    ,
    447355: (e,t,i)=>{
        i.d(t, {
            AudioLyricsModalContainer: ()=>n
        });
        var s = i(785893)
          , o = i(937993)
          , a = i(930658)
          , l = i(842639)
          , r = i(357679);
        function n(e) {
            return (0,
            s.jsx)(r.AudioLyricsModal, {
                header: (0,
                s.jsx)(o.AudioLyricsModalHeaderContainer, {}),
                content: (0,
                s.jsx)(a.AudioLyricsModalContentContainer, {}),
                player: (0,
                s.jsx)(l.AudioLyricsPlayerContainer, {}),
                onClose: e.onClose
            })
        }
    }
    ,
    930658: (e,t,i)=>{
        i.d(t, {
            AudioLyricsModalContentContainer: ()=>u
        });
        var s = i(785893)
          , o = i(86894)
          , a = i(983455)
          , l = i(453090)
          , r = i(397985)
          , n = i(244725)
          , d = i(40431);
        function u() {
            const {lyrics: {isLoading: e, isError: t, data: i, actions: {fetchCurrent: u}}, player: {isAds: _}} = (0,
            l.useAudioLyricsModalStore)();
            return _ ? (0,
            s.jsx)(n.AudioLyricsAds, {}) : e ? (0,
            s.jsx)(o.Spinner, {
                size: "large"
            }) : t ? (0,
            s.jsx)(d.AudioLyricsError, {
                onRetryClick: u
            }) : i ? (0,
            s.jsx)(a.AudioLyricsContainer, {
                lines: i.lines,
                credits: i.credits,
                compensationTop: 24,
                height: "100%",
                width: "100%"
            }) : (0,
            s.jsx)(r.AudioLyricsNotFound, {})
        }
    }
    ,
    937993: (e,t,i)=>{
        i.d(t, {
            AudioLyricsModalHeaderContainer: ()=>r
        });
        var s = i(785893)
          , o = i(571615)
          , a = i(266213)
          , l = i(453090);
        function r() {
            const {audioObject: e} = (0,
            l.useAudioLyricsModalStore)();
            return (0,
            s.jsx)(a.AudioLyricsModalHeader, {
                title: (0,
                o.decodeHTML)(e.title || ""),
                performer: (0,
                o.decodeHTML)(e.performer || ""),
                explicit: e.isExplicit,
                coverUrl: e.coverUrl_p || void 0
            })
        }
    }
    ,
    742516: (e,t,i)=>{
        i.d(t, {
            AudioLyricsModalStoreProvider: ()=>_
        });
        var s = i(785893)
          , o = i(667294)
          , a = i(595509)
          , l = i(80782)
          , r = i(232774)
          , n = i(341213)
          , d = i(644959)
          , u = i(674450);
        function _({audioPlayer: e, audio: t, playlist: i, context: _, children: c}) {
            const [h,p] = (0,
            o.useState)(t)
              , y = (0,
            o.useMemo)((()=>(0,
            a.audioTupleToAudioObject)(h)), [h])
              , g = (0,
            l.usePlayerStore)({
                audioPlayer: e,
                audio: h,
                playlist: i,
                context: _,
                setAudio: p
            })
              , A = (0,
            r.useLyricsStore)({
                audioPlayer: e,
                audio: h,
                prevAudio: g.prevAudio,
                nextAudio: g.nextAudio
            })
              , P = (0,
            o.useMemo)((()=>({
                player: g,
                lyrics: A,
                audio: h,
                audioObject: y,
                audioPlayer: e
            })), [g, A, h, y, e]);
            return (0,
            n.usePrefetchEffect)(P),
            (0,
            d.useMountEventsEffect)(P),
            (0,
            s.jsx)(u.AudioLyricsModalStoreContext.Provider, {
                value: P,
                children: c
            })
        }
    }
    ,
    674450: (e,t,i)=>{
        i.d(t, {
            AudioLyricsModalStoreContext: ()=>o,
            useAudioLyricsModalStore: ()=>a
        });
        var s = i(8501);
        const {Context: o, useContext: a} = (0,
        s.makeStrictContext)({
            name: "AudioLyricsModalStore"
        })
    }
    ,
    453090: (e,t,i)=>{
        i.d(t, {
            AudioLyricsModalStoreProvider: ()=>o.AudioLyricsModalStoreProvider,
            useAudioLyricsModalStore: ()=>s.useAudioLyricsModalStore
        });
        var s = i(674450)
          , o = i(742516)
    }
    ,
    436743: (e,t,i)=>{
        i.d(t, {
            useLyricsActions: ()=>a
        });
        var s = i(667294)
          , o = i(527245);
        function a({audioPlayer: e, audio: t, prevAudio: i, nextAudio: a}) {
            const l = (0,
            o.useEventCallback)((()=>{
                e.lyrics.fetch(t)
            }
            ))
              , r = (0,
            o.useEventCallback)((()=>{
                i && e.lyrics.fetch(i)
            }
            ))
              , n = (0,
            o.useEventCallback)((()=>{
                a && e.lyrics.fetch(a)
            }
            ));
            return (0,
            s.useMemo)((()=>({
                fetchCurrent: l,
                fetchPrev: r,
                fetchNext: n
            })), [l, r, n])
        }
    }
    ,
    232774: (e,t,i)=>{
        i.d(t, {
            useLyricsStore: ()=>r
        });
        var s = i(667294)
          , o = i(261e3)
          , a = i(288720)
          , l = i(436743);
        function r({audioPlayer: e, audio: t, prevAudio: i, nextAudio: r}) {
            const [n,d] = (0,
            s.useState)((()=>e.lyrics.get((0,
            o.getAudioTupleFullId)(t))));
            (0,
            s.useEffect)((()=>{
                const i = (0,
                o.getAudioTupleFullId)(t);
                e.lyrics.fetch(t),
                d(e.lyrics.get(i));
                const s = e.lyrics.listen(i, d);
                return ()=>{
                    s()
                }
            }
            ), [t]);
            const u = (0,
            l.useLyricsActions)({
                audioPlayer: e,
                audio: t,
                prevAudio: i,
                nextAudio: r
            });
            return (0,
            s.useMemo)((()=>{
                const {status: e, data: t} = n;
                return {
                    isLoading: e === a.EAudioLyricsStatus.Loading || e === a.EAudioLyricsStatus.Pending,
                    isError: e === a.EAudioLyricsStatus.Error,
                    data: t || null,
                    actions: u
                }
            }
            ), [n])
        }
    }
    ,
    174515: (e,t,i)=>{
        i.d(t, {
            useAdjacentAudios: ()=>a
        });
        var s = i(667294)
          , o = i(337225);
        function a({audioPlayer: e, audio: t}) {
            const i = (0,
            o.useMountedStateRef)()
              , a = (0,
            s.useRef)(null)
              , [l,r] = (0,
            s.useState)(null)
              , [n,d] = (0,
            s.useState)(null);
            return (0,
            s.useEffect)((()=>{
                const s = e.getPlaylistQueue()
                  , o = e.isRepeatAll();
                a.current = t,
                Promise.all([s.getPrevAudio(t, {
                    ignoreClaimed: !0,
                    repeat: o
                }).catch((()=>null)), s.getNextAudio(t, {
                    ignoreClaimed: !0,
                    repeat: o
                }).catch((()=>null))]).then((([e,s])=>{
                    i.current && a.current === t && (r(e),
                    d(s))
                }
                ))
            }
            ), [t]),
            [l, n]
        }
    }
    ,
    678901: (e,t,i)=>{
        i.d(t, {
            useAdsState: ()=>a
        });
        var s = i(667294)
          , o = i(866310);
        function a({audioPlayer: e}) {
            const [t,i] = (0,
            s.useState)((()=>{
                var t;
                return !!(null == (t = e.ads) ? void 0 : t.isActive)
            }
            ));
            return (0,
            s.useEffect)((()=>{
                const t = e.on(null, o.AudioPlayerEventType.AD_STARTED, (()=>{
                    i(!0)
                }
                ))
                  , s = e.on(null, o.AudioPlayerEventType.AD_COMPLETED, (()=>{
                    i(!1)
                }
                ));
                return ()=>{
                    t(),
                    s()
                }
            }
            ), []),
            t
        }
    }
    ,
    673721: (e,t,i)=>{
        i.d(t, {
            usePlayerActions: ()=>o
        });
        var s = i(527245);
        function o({audioPlayer: e, audio: t, playlist: i, context: o, isPlaying: a, isCurrentAudio: l}) {
            return {
                togglePlaying: (0,
                s.useEventCallback)((()=>{
                    a ? e.pause() : l ? e.play() : e.play(t, i, o)
                }
                )),
                playPrev: (0,
                s.useEventCallback)((()=>{
                    e.playPrev()
                }
                )),
                playNext: (0,
                s.useEventCallback)((()=>{
                    e.playNext()
                }
                )),
                changeProgress: (0,
                s.useEventCallback)((t=>{
                    var i;
                    l && !(null == (i = e.ads) ? void 0 : i.isActive) && e.seek(t)
                }
                ))
            }
        }
    }
    ,
    622915: (e,t,i)=>{
        i.d(t, {
            usePlayerProgress: ()=>r
        });
        var s = i(667294)
          , o = i(220126)
          , a = i(595509)
          , l = i(866310);
        function r({audioPlayer: e, audio: t, isCurrentAudio: i, isAds: r}) {
            const [n,d] = (0,
            s.useState)((()=>i ? r ? e.ads.getCurrentProgress() : e.getCurrentProgress() : 0))
              , [u,_] = (0,
            s.useState)((()=>!i || r ? 0 : e.getCurrentBuffered()))
              , [c,h] = (0,
            s.useState)((()=>i ? (0,
            a.audioTupleToAudioObject)(t).duration : 0));
            (0,
            s.useLayoutEffect)((()=>{
                h(i ? (0,
                a.audioTupleToAudioObject)(t).duration : 0)
            }
            ), [i, t]),
            (0,
            s.useLayoutEffect)((()=>{
                _(i && !r ? e.getCurrentBuffered() : 0)
            }
            ), [i, r, e]),
            (0,
            s.useEffect)((()=>{
                if (!i)
                    return;
                const t = e.on(null, l.AudioPlayerEventType.PROGRESS, ((e,t,i)=>{
                    d(t),
                    h(i)
                }
                ))
                  , s = e.on(null, l.AudioPlayerEventType.BUFFERED, ((e,t)=>{
                    _(t)
                }
                ));
                return ()=>{
                    t(),
                    s()
                }
            }
            ), [i, t, e]);
            const p = Math.round(n * c * 1e3);
            return {
                time: (0,
                o.formatAudioTime)({
                    progress: n,
                    duration: c
                }),
                progress: n,
                buffered: u,
                duration: c,
                ms: p
            }
        }
    }
    ,
    80782: (e,t,i)=>{
        i.d(t, {
            usePlayerStore: ()=>u
        });
        var s = i(667294)
          , o = i(866310)
          , a = i(595509)
          , l = i(678901)
          , r = i(174515)
          , n = i(622915)
          , d = i(673721);
        function u({audioPlayer: e, audio: t, playlist: i, context: u, setAudio: _}) {
            const c = e
              , [h,p] = (0,
            s.useState)((()=>c.getCurrentAudio()))
              , [y,g] = (0,
            r.useAdjacentAudios)({
                audioPlayer: e,
                audio: t
            })
              , A = (0,
            s.useMemo)((()=>(0,
            a.audioTupleToAudioObject)(t)), [t])
              , P = (0,
            s.useMemo)((()=>{
                if (!h)
                    return !1;
                return (0,
                a.audioTupleToAudioObject)(h).fullId === A.fullId
            }
            ), [A, h])
              , [f,E] = (0,
            s.useState)(P)
              , [m,w] = (0,
            s.useState)((()=>P && c.isPlaying()));
            (0,
            s.useLayoutEffect)((()=>{
                E((e=>e || P))
            }
            ), [P]),
            (0,
            s.useEffect)((()=>c.on(null, o.AudioPlayerEventType.CURRENT_CHANGED, (()=>{
                const e = c.getCurrentAudio();
                p(e),
                f && _(e)
            }
            ))), [f]);
            const v = f && P;
            (0,
            s.useEffect)((()=>{
                if (!v)
                    return void w(!1);
                const e = c.on(null, o.AudioPlayerEventType.PLAY, (()=>{
                    w(!0)
                }
                ))
                  , t = c.on(null, o.AudioPlayerEventType.PAUSE, (()=>{
                    w(!1)
                }
                ))
                  , i = c.on(null, o.AudioPlayerEventType.STOP, (()=>{
                    w(!1)
                }
                ));
                return ()=>{
                    e(),
                    t(),
                    i()
                }
            }
            ), [v]);
            const I = (0,
            l.useAdsState)({
                audioPlayer: e
            })
              , C = (0,
            n.usePlayerProgress)({
                audio: t,
                isCurrentAudio: P,
                isAds: I,
                audioPlayer: e
            })
              , T = (0,
            d.usePlayerActions)({
                audioPlayer: e,
                audio: t,
                playlist: i,
                context: u,
                isCurrentAudio: P,
                isPlaying: m
            });
            return (0,
            s.useMemo)((()=>({
                isPlaying: m,
                isPlayingMode: f,
                isAds: I,
                isCurrentAudio: P,
                prevAudio: y,
                nextAudio: g,
                progress: C,
                actions: T
            })), [C, T, m, f, I, P])
        }
    }
    ,
    644959: (e,t,i)=>{
        i.d(t, {
            useMountEventsEffect: ()=>l
        });
        var s = i(667294)
          , o = i(257221)
          , a = i(797190);
        function l(e) {
            const t = (0,
            o.useValueRef)(e);
            (0,
            s.useEffect)((()=>(a.AudioLyricsStatCollector.ensure().open(e.audio),
            ()=>{
                a.AudioLyricsStatCollector.ensure().close(t.current.audio)
            }
            )), [])
        }
    }
    ,
    341213: (e,t,i)=>{
        i.d(t, {
            usePrefetchEffect: ()=>o
        });
        var s = i(667294);
        function o(e) {
            const {player: t, lyrics: i} = e
              , {progress: o} = t
              , a = o.duration - o.progress * o.duration < 5;
            (0,
            s.useEffect)((()=>{
                a && i.actions.fetchNext()
            }
            ), [a])
        }
    }
    ,
    842639: (e,t,i)=>{
        i.d(t, {
            AudioLyricsPlayerContainer: ()=>l
        });
        var s = i(785893)
          , o = i(688944)
          , a = i(453090);
        function l() {
            const {player: {actions: e, isPlaying: t, isPlayingMode: i, isAds: l, progress: r, nextAudio: n}, lyrics: {actions: d}} = (0,
            a.useAudioLyricsModalStore)();
            return (0,
            s.jsx)(o.AudioLyricsPlayer, {
                time: r.time,
                progress: r.progress,
                buffered: r.buffered,
                isPlaying: t,
                isAds: l,
                sliderDisabled: !i,
                prevDisabled: !i || l,
                nextDisabled: !i || l || !n,
                onPlayPrev: ()=>{
                    d.fetchPrev(),
                    e.playPrev()
                }
                ,
                onPlayNext: ()=>{
                    d.fetchNext(),
                    e.playNext()
                }
                ,
                onTogglePlaying: ()=>{
                    e.togglePlaying()
                }
                ,
                onChangeProgress: e.changeProgress
            })
        }
    }
    ,
    585573: (e,t,i)=>{
        i.d(t, {
            AudioLyricsOnboardingController: ()=>r
        });
        var s = i(283452)
          , o = i(595509)
          , a = i(866310)
          , l = i(104677);
        class r {
            destroy() {
                this.closeTooltip()
            }
            setStartupHandlers() {
                try {
                    (0,
                    s.tq)().setStartupHandler("Audio/Player/LyricsButton/OnboardinHint", (e=>{
                        if (this.registered)
                            return;
                        const {target: t, data: i} = e.payload;
                        if (!t)
                            throw new Error("Target is not defined");
                        const {tooltip: s} = (0,
                        l.helpHintTooltip)(t, {
                            content: i.content,
                            helpHintHash: i.hash,
                            helpHintId: i.id
                        }, {
                            width: "215px",
                            offset: [0, 8],
                            forceSide: "bottom",
                            align: "right",
                            appendToParent: !0,
                            withCloseButton: !0,
                            autoAdjustToViewport: !0,
                            noAutoHideOnWindowClick: !0
                        });
                        this.tooltip = s,
                        this.listenAudio()
                    }
                    ))
                } catch (e) {}
            }
            listenAudio() {
                if (this.unlistenAudio)
                    return;
                const {audioPlayer: e} = this
                  , t = e=>{
                    if (!e)
                        return !1;
                    return !!(0,
                    o.audioTupleToAudioObject)(e).hasLyrics && (this.openTooltip(),
                    this.unlistenAudio && (this.unlistenAudio(),
                    this.unlistenAudio = null),
                    !0)
                }
                ;
                t(e.getCurrentAudio()) || (this.unlistenAudio = e.on(null, a.AudioPlayerEventType.CURRENT_CHANGED, t))
            }
            openTooltip() {
                const {tooltip: e} = this;
                e && e.show()
            }
            closeTooltip() {
                const {tooltip: e} = this;
                e && e.hide()
            }
            constructor({audioPlayer: e}) {
                this.unlistenAudio = null,
                this.registered = !1,
                this.audioPlayer = e,
                this.setStartupHandlers()
            }
        }
    }
    ,
    797190: (e,t,i)=>{
        i.d(t, {
            AudioLyricsStatCollector: ()=>r
        });
        var s = i(193452)
          , o = i(120338)
          , a = i(182525);
        let l = null;
        class r {
            static ensure() {
                return l || (l = new r),
                l
            }
            open(e) {
                this.logEvent(this.createEventItem(o.EAudioLyricsEventType.SHOW, e))
            }
            close(e) {
                this.logEvent(this.createEventItem(o.EAudioLyricsEventType.HIDE, e))
            }
            changeAudioProgressByLine(e) {
                this.logEvent(this.createEventItem(o.EAudioLyricsEventType.GO_TO_TIMECODE, e))
            }
            logEvent(e) {
                this.actionCollector.logEvent({
                    type: o.EVENT_ITEM_TYPE,
                    [o.EVENT_ITEM_TYPE]: e
                })
            }
            createEventItem(e, t) {
                return {
                    event_type: e,
                    item: {
                        id: t[a.EAudioTupleIndex.ID],
                        owner_id: t[a.EAudioTupleIndex.OWNER_ID]
                    }
                }
            }
            constructor() {
                this.productionCollector = new s.ProductionStatCollector,
                this.actionCollector = new s.ActionStatCollector(this.productionCollector)
            }
        }
    }
    ,
    768706: (e,t,i)=>{
        i.d(t, {
            AudioPlayerLyricsUI: ()=>l
        });
        var s = i(839470)
          , o = i(226041)
          , a = i(585573);
        class l {
            open(e) {
                this.enabled && (this.audioPlayer.lyrics.fetch(e.audio),
                this.modal.open(e))
            }
            get enabled() {
                return (0,
                s.partConfigEnabled)("audio_use_web_new_version_lyrics")
            }
            constructor({audioPlayer: e}) {
                this.audioPlayer = e,
                this.modal = new o.AudioLyricsModalController({
                    audioPlayer: e
                }),
                this.onboarding = new a.AudioLyricsOnboardingController({
                    audioPlayer: e
                })
            }
        }
    }
    ,
    200445: (e,t,i)=>{
        i.r(t);
        var s = i(498389)
          , o = i(953908)
          , a = i(795558)
          , l = i(246276)
          , r = i(82161);
        const n = "audio-msg-track--transcriptToggle"
          , d = "audio-msg-track--transcript_on";
        let u = null;
        function _(e) {
            let t = (0,
            a.geByClass)("audio-msg-track--wave-wrapper", e)
              , i = 0;
            for (let e = 0; e < t.length; e++) {
                try {
                    i = parseInt(window.getComputedStyle(t[e], null).getPropertyValue("width"))
                } catch (s) {
                    i = parseInt(t[e].currentStyle.width)
                }
                if (i > 0)
                    break
            }
            return i
        }
        function c(e, t) {
            t = Math.round(t),
            e.length != t && (e = (0,
            l.fastResample)(e, t));
            let i = ""
              , s = 0;
            for (let t = 0; t < e.length; t++)
                s = Math.floor(10 * Number(e[t]) * .95),
                0 == s && (s = .5),
                i += "M" + (3 * t + 1) + "," + (10 - s) + "v" + 2 * s + "Z";
            return `<svg class="audio-msg-track--wave" width="${3 * e.length}px"><path d="${i}"></path></svg>`
        }
        function h() {
            let e = (0,
            a.geByClass)("audio-msg-track");
            for (let t = 0; t < e.length; t++) {
                let i = (0,
                a.attr)(e[t], "data-wave");
                (0,
                a.hasClass)(e[t], "audio-msg-player") && t > 0 && (i = (0,
                a.attr)(e[t - 1], "data-wave"));
                let s = _(e[t]);
                if (i && s) {
                    i = i.split(",");
                    let o = (0,
                    a.geByClass)("audio-msg-track--wave", e[t])
                      , l = c(i, s / 3);
                    for (let e = 0; e < o.length; e++) {
                        let t = (0,
                        a.ce)("div", {
                            innerHTML: l
                        }).firstChild;
                        o[e].parentNode.replaceChild(t, o[e])
                    }
                }
            }
        }
        function p() {
            if (!u) {
                const e = '<div class="audio-msg-player audio-msg-track"><button class="audio-msg-track--btn"></button>' + (0,
                r.getTemplate)("sImAudioMsgPlayerASRToggle") + '<div class="audio-msg-track--duration"></div><div class="audio-msg-track--wave-wrapper"><div class="audio-msg-track--slider"></div></div></div>'
                  , t = "audio-msg-track--with-asr-toggle"
                  , i = "audio-msg-track--shortened";
                u = new s.VoiceMessagePlayer({
                    onListened: e=>{
                        window.AudioMessagePlayer.events.emit("listened", e)
                    }
                    ,
                    voiceMessageHTML: e,
                    onInit: (e,s)=>{
                        var o, a;
                        (e.classList.contains(t) && s.classList.add(t),
                        e.classList.contains(i) && s.classList.add(i),
                        null == (o = e.querySelector(`.${n}`)) ? void 0 : o.classList.contains(d)) && (null == (a = s.querySelector(`.${n}`)) || a.classList.add(d));
                        window.AudioMessagePlayer.events.emit("initialized", e)
                    }
                    ,
                    onPlay: e=>{
                        window.AudioMessagePlayer.events.emit("playing", e)
                    }
                    ,
                    onPause: e=>{
                        window.AudioMessagePlayer.events.emit("paused", e)
                    }
                    ,
                    onEnd: e=>{
                        window.AudioMessagePlayer.events.emit("finished", e)
                    }
                    ,
                    onProgress: (e,t)=>{
                        window.AudioMessagePlayer.events.emit("progress", e, t)
                    }
                    ,
                    fcOnPause: e=>{
                        window.AudioMessagePlayer.events.emit("fc_paused", e)
                    }
                })
            }
            return u
        }
        (0,
        o.addEvent)(window, "orientationchange", (()=>setTimeout(h, 500))),
        window.mail && window.mail.onMessagesRepainted && (window.onDOMReady(h),
        window.mail.onMessagesRepainted(h)),
        window.AudioMessagePlayer = {
            loaded: !0,
            events: new EventEmitter,
            togglePlay: function(e) {
                let t = p()
                  , i = t.attachTo(e);
                !0 === i ? t.play() : i.then((()=>{
                    t.play()
                }
                ))
            },
            toggle: function() {
                p().toggle()
            },
            seek: function(e) {
                p().seek(e)
            },
            detachPlayer: function(e) {
                p().detach(e)
            },
            pauseGlobalMedia: function() {
                s.VoiceMessagePlayer.pauseGlobalMedia()
            },
            resumeGlobalMedia: function() {
                s.VoiceMessagePlayer.resumeGlobalMedia()
            },
            redrawWaves: h,
            getWave: c,
            toggleTranscript: function(e, t) {
                (0,
                o.cancelEvent)(t),
                e.classList.toggle(d),
                this.events.emit("transcription_toggle", e)
            }
        }
    }
    ,
    822120: (e,t,i)=>{
        i.d(t, {
            WebMediaSessionAdapter: ()=>o
        });
        var s = i(11010);
        class o {
            play() {
                return this.player.play()
            }
            pause() {
                return this.player.pause()
            }
            isPlaying() {
                var e;
                const t = this.player.getCurrentPlaylist();
                return !!(null == (e = t) ? void 0 : e.isLive) && t.isLive() || !1
            }
            getPrevAudio() {
                var e = this;
                return (0,
                s._)((function*() {
                    return e.player.getPrevAudio()
                }
                ))()
            }
            getNextAudio() {
                var e = this;
                return (0,
                s._)((function*() {
                    return e.player.getNextAudio()
                }
                ))()
            }
            next() {
                return this.player.playNext()
            }
            prev() {
                return this.player.playPrev()
            }
            seek(e) {
                return this.player.seek(e)
            }
            getCurrentPlaylist() {
                return this.player.getCurrentPlaylist()
            }
            subscribe(e, t) {
                var i;
                return null == (i = this.player.eventBus) ? void 0 : i.subscribe(e, t)
            }
            unsubscribe(e, t) {
                var i;
                return null == (i = this.player.eventBus) ? void 0 : i.unsubscribe(e, t)
            }
            getCurrentAudio() {
                return this.player.getCurrentAudio()
            }
            getCurrentProgress() {
                return this.player.getCurrentProgress()
            }
            constructor(e) {
                this.player = e,
                this.player.eventBus && (this.subscriptions = this.player.eventBus.subscriptions),
                this.ads = this.player.ads
            }
        }
    }
    ,
    478506: (e,t,i)=>{
        i.d(t, {
            drawAlbumPartRow: ()=>o
        });
        var s = i(29271);
        function o(e) {
            return `<div class="audio_album_part_row">${s.getLang("audio_album_part").replace("{part}", e)}</div>`
        }
    }
    ,
    442849: (e,t,i)=>{
        i.d(t, {
            getAlbumParts: ()=>o
        });
        var s = i(182525);
        function o(e) {
            if (e && e.getAudiosCount() && e.isFullyLoadable() && !e.hasMore()) {
                const t = e.getAudiosList()
                  , i = e.getAudiosCount()
                  , o = [];
                let a = 0;
                for (let e = 0; e < i; e++) {
                    const i = t[e][s.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_ALBUM_PART];
                    i > a && (a = i,
                    o.push({
                        number: i,
                        offset: e
                    }))
                }
                if (o.length > 1)
                    return o
            }
            return !1
        }
    }
    ,
    720604: (e,t,i)=>{
        i.d(t, {
            showAudioAlbum: ()=>l
        });
        var s = i(589806)
          , o = i(9480)
          , a = i(984133);
        function l(e, t) {
            return cur.viewAsBox ? cur.viewAsBox() : (t = o.AudioUtils.audioTupleToAudioObject(t),
            layers.fullhide && layers.fullhide(),
            (0,
            a.onAdditionalEvent)(e, t, {
                type: s.TYPE_SHOW_ALBUM
            }),
            o.AudioUtils.showAudioPlaylist(t.album[0], t.album[1], t.album[2]))
        }
    }
    ,
    267065: (e,t,i)=>{
        i.d(t, {
            followArtist: ()=>n
        });
        var s = i(725296)
          , o = i(9480)
          , a = i(29271)
          , l = i(854099)
          , r = i(584356);
        function n(e, t, i, n) {
            (0,
            s.lockButton)(n),
            ajax.post("al_artist.php", {
                act: "follow",
                artist_id: e,
                ref: t,
                hash: i
            }, {
                onFail: ()=>(0,
                s.unlockButton)(n),
                onDone: i=>{
                    (0,
                    s.unlockButton)(n),
                    l.FlatButton.setLabel(n, a.getLang("audio_following_artist_button")),
                    n.classList.add("MusicAuthor__follow_btn__followed"),
                    (0,
                    r.showDoneBoxFull)("", {}, {
                        text: a.getLang("audio_follow_artist_success_notification_text"),
                        title: a.getLang("audio_follow_artist_success_notification_title")
                    }),
                    n.onclick = s=>{
                        s.preventDefault(),
                        o.AudioUtils.unfollowArtist(e, t, i, n)
                    }
                }
            })
        }
    }
    ,
    213994: (e,t,i)=>{
        function s(e, t) {
            ajax.post("al_artist.php", {
                act: "track_to_official",
                hash: e,
                url: t
            }, {
                onFail: ()=>!0
            })
        }
        i.d(t, {
            trackArtistToOfficial: ()=>s
        })
    }
    ,
    827756: (e,t,i)=>{
        i.d(t, {
            unfollowArtist: ()=>n
        });
        var s = i(725296)
          , o = i(9480)
          , a = i(29271)
          , l = i(795558)
          , r = i(854099);
        function n(e, t, i, n) {
            (0,
            s.lockButton)(n),
            ajax.post("al_artist.php", {
                act: "unfollow",
                artist_id: e,
                ref: t,
                hash: i
            }, {
                onFail: ()=>(0,
                s.unlockButton)(n),
                onDone: i=>{
                    if (n) {
                        (0,
                        s.unlockButton)(n);
                        (0,
                        l.hasClass)(n, "MusicAuthor__follow_btn__can_follow") ? (r.FlatButton.setLabel(n, a.getLang("audio_follow_artist_button")),
                        n.classList.remove("MusicAuthor__follow_btn__followed"),
                        n.onclick = s=>{
                            s.preventDefault(),
                            o.AudioUtils.followArtist(e, t, i, n)
                        }
                        ) : (0,
                        l.re)(n)
                    }
                }
            })
        }
    }
    ,
    615822: (e,t,i)=>{
        i.d(t, {
            getRowActionName: ()=>a
        });
        var s = i(29271)
          , o = i(9480);
        function a(e, t, i) {
            let a, l = o.AudioUtils.getAddRestoreInfo();
            switch (e) {
            case "current_delete":
                a = s.getLang("audio_delete_from_current");
                break;
            case "recoms_delete":
                a = s.getLang("audio_dont_show");
                break;
            case "listened_delete":
                a = s.getLang("audio_remove_from_list");
                break;
            case "delete":
                if (o.AudioUtils.isPodcast(t))
                    a = s.getLang("audio_podcast_delete_episode");
                else if (window.AudioPage && window.AudioPage.isInRecentPlayed(i))
                    a = s.getLang("audio_remove_from_list");
                else {
                    let e = l[t.fullId];
                    a = e && e.deleteAll ? e.deleteAll.text : s.getLang("global_delete_audio")
                }
                break;
            case "restore_recoms":
                a = s.getLang("audio_restore_audio");
                break;
            case "more":
                a = s.getLang("global_media_selector_more");
                break;
            case "add":
                let e = l[t.fullId];
                if (e && l[e.addedFullId] && (e = null),
                o.AudioUtils.isPodcast(t))
                    a = s.getLang("audio_podcast_restore_episode");
                else if (e && "deleted" == e.state)
                    a = s.getLang("audio_restore_audio");
                else if (e && "added" == e.state)
                    a = s.getLang("global_delete_audio");
                else {
                    let e = !!window.AudioPage && currentAudioPage(i);
                    a = e && e.getOwnerId() < 0 && e.canAddToGroup() && e.getOwnerId() !== t.ownerId ? s.getLang("audio_add_to_group") : s.getLang("audio_add_to_audio")
                }
                break;
            case "edit":
                a = o.AudioUtils.isPodcast(t) ? s.getLang("audio_podcast_edit_episode") : s.getLang("audio_edit_audio");
                break;
            case "next":
                a = s.getLang("audio_set_next_audio");
                break;
            case "recoms":
                a = s.getLang("audio_show_recommendations");
                break;
            case "fave":
                a = o.AudioUtils.isPodcast(t) ? s.getLang("audio_podcast_listen_later") : "";
                break;
            case "lyrics":
                a = s.getLang("audio_show_lyrics");
                break;
            case "snippet":
                a = s.getLang("audio_longtap_tooltip_text");
                break;
            default:
                a = ""
            }
            return a
        }
    }
    ,
    146049: (e,t,i)=>{
        i.d(t, {
            hasAudioHQBodyClass: ()=>o
        });
        var s = i(182525);
        function o() {
            return document.body.classList.contains(s.AUDIO_PLAYER_ENUMS.AUDIO_HQ_LABEL_CLS)
        }
    }
    ,
    759130: (e,t,i)=>{
        i.d(t, {
            renderAudioDiag: ()=>l
        });
        var s = i(795558)
          , o = i(82161)
          , a = i(182525);
        function l() {
            let e = (0,
            s.ge)("audio_diag_log")
              , t = ls.get(a.AUDIO_PLAYER_ENUMS.LOG_LS_KEY) || [];
            e && (0,
            o.each)(t, (function(t, i) {
                let o = new Date(i.shift()).toUTCString();
                i = i.join(", "),
                e.appendChild((0,
                s.se)('<div class="audio_diag_log_row"><span class="audio_diag_log_time">' + o + "</span>" + i + "</div>"))
            }
            ))
        }
    }
    ,
    327868: (e,t,i)=>{
        i.d(t, {
            toggleAudioHQBodyClass: ()=>o
        });
        var s = i(182525);
        function o() {
            let e = AudioPlayer.showHQLabel();
            document.body.classList.toggle(s.AUDIO_PLAYER_ENUMS.AUDIO_HQ_LABEL_CLS, e)
        }
    }
    ,
    57096: (e,t,i)=>{
        i.d(t, {
            updateQueueReceivedPost: ()=>a
        });
        var s = i(795558)
          , o = i(82161);
        function a(e) {
            e && (0,
            o.each)((0,
            s.geByClass)("_audio_row", e), (function() {
                (0,
                s.domData)(this, "new-post", "groups" == cur.module ? "wall" : "feed")
            }
            ))
        }
    }
    ,
    145669: (__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{
        __webpack_require__.d(__webpack_exports__, {
            AudioPlaylist: ()=>AudioPlaylist
        });
        var _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(664988)
          , _web_lib_box_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(584356)
          , _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82161)
          , _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9480)
          , _playlist_loadAllPlaylistAudios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(970689)
          , _web_indexer_indexer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(672132)
          , _web_audio_FetchService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(905507);
        class AudioPlaylist {
            static splitId(e) {
                let[t,i,...s] = e.split("_");
                return s = s.join("_"),
                [t, i, s]
            }
            static getFullIdFromData(e) {
                const t = e || {}
                  , {ownerId: i, id: s, albumId: o, accessHash: a} = t;
                return `${i || vk.id}_ ${s || o || 0}${a ? "_" + a : ""}`
            }
            updatePlaylist(e) {
                const t = this.getSelf();
                let i = !1;
                return t && e ? (t._title !== e.title && (t._title = e.title,
                i = !0),
                t._titleLang !== e.titleLang && (t._titleLang = e.titleLang,
                i = !0),
                i) : i
            }
            _ensureIndex(e) {
                const t = this.getSelf();
                if (t._index)
                    return void (e && e());
                const i = t.getAudiosList();
                if (!i)
                    return;
                const s = (e,t)=>{
                    const i = (0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.intval)(t);
                    return i >= 33 && i < 48 ? String.fromCharCode(i) : e
                }
                ;
                t._index = new _web_indexer_indexer__WEBPACK_IMPORTED_MODULE_5__.vkIndexer(i,(e=>(e[_utils__WEBPACK_IMPORTED_MODULE_3__.AudioUtils.AUDIO_ITEM_INDEX_PERFORMER] + " " + e[_utils__WEBPACK_IMPORTED_MODULE_3__.AudioUtils.AUDIO_ITEM_INDEX_TITLE]).replace(/\&\#(\d+);?/gi, s)),e)
            }
            cleanIndex() {
                this.getSelf()._index = null
            }
            search(e, t) {
                let i = this.getSelf();
                (0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isObject)(e) || (e = {
                    q: e
                }),
                this._ensureIndex((()=>{
                    let s = i._index ? i._index.search(e.q) : [];
                    return s = s.filter((function(t) {
                        return !e.lyrics || "" !== t[_utils__WEBPACK_IMPORTED_MODULE_3__.AudioUtils.AUDIO_ITEM_INDEX_LYRICS]
                    }
                    )),
                    t(s)
                }
                ))
            }
            setNextOffset(e) {
                this._nextOffset = e
            }
            getNextOffset() {
                let e = this.getSelf();
                return e._forceReload ? 0 : "" === e._nextOffset ? e._nextOffset : e._nextOffset || this.getAudiosCount()
            }
            getIsFakeId() {
                return this.getSelf()._isFakeId
            }
            setIsFakeId(e) {
                this.getSelf()._isFakeId = e
            }
            getId() {
                return this.getType() + "_" + this.getOwnerId() + "_" + this.getAlbumId()
            }
            getFullId() {
                return this.getOwnerId() + "_" + this.getAlbumId() + (this.getAccessHash() ? "_" + this.getAccessHash() : "")
            }
            isReference() {
                return !!this._ref
            }
            getSelf() {
                return this._ref && (0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isObject)(this._ref) ? this._ref : this
            }
            getType() {
                return this.getSelf()._type
            }
            getExpire() {
                return this.getSelf()._expire
            }
            getOwnerId() {
                return +this.getSelf()._ownerId
            }
            getAlbumId() {
                return this.getSelf()._albumId
            }
            getPlaylistId() {
                return this.getSelf()._albumId
            }
            getNoConsecutivePlay() {
                return this.getSelf()._noConsecutivePlay
            }
            getOriginalPlaylistRawId() {
                return this.getSelf()._originalPlaylistRawId
            }
            getFollowHash() {
                return this.getSelf()._followHash
            }
            getContext() {
                return this.getSelf()._context
            }
            setContext(e) {
                this.getSelf()._context = e
            }
            getRef() {
                return this.getSelf()._ref
            }
            getRawId() {
                return this.getSelf()._implPlay_rawId
            }
            getGridCovers() {
                return this.getSelf()._gridCovers || ""
            }
            getTitle() {
                return this.getSelf()._title || ""
            }
            getTitleLang() {
                return null == this.getSelf()._titleLang ? null : this.getSelf()._titleLang
            }
            getSubtitle() {
                return this.getSelf()._subTitle || ""
            }
            getDescription() {
                return this.getSelf()._description || ""
            }
            getRawDescription() {
                return this.getSelf()._rawDescription || ""
            }
            getAccessHash() {
                return this.getSelf()._accessHash || ""
            }
            getFromId() {
                return this.getSelf()._fromId || 0
            }
            setFromId(e) {
                this.getSelf()._fromId = e
            }
            getAuthorLine() {
                return this.getSelf()._authorLine || ""
            }
            getAuthorHref() {
                return this.getSelf()._authorHref || ""
            }
            getAuthorName() {
                return this.getSelf()._authorName || ""
            }
            getInfoLine1() {
                return this.getSelf()._infoLine1 || ""
            }
            getInfoLine2() {
                return this.getSelf()._infoLine2 || ""
            }
            getListens() {
                return this.getSelf()._listens || 0
            }
            getAddClasses() {
                return this.getSelf()._addClasses || ""
            }
            getLastUpdated() {
                return this.getSelf()._lastUpdated || ""
            }
            getEditHash() {
                return this.getSelf()._editHash || ""
            }
            getDeleteHash() {
                return this.getSelf()._deleteHash || ""
            }
            getReplaceHash() {
                return this.getSelf()._replaceHash || ""
            }
            getCoverUrl() {
                return this.getSelf()._coverUrl || ""
            }
            getBlocks() {
                return this.getSelf()._blocks || {}
            }
            getSearchParams() {
                return this.getSelf()._searchParams || null
            }
            getSearchQid() {
                return this.getSelf()._searchQid || null
            }
            getLocalFoundCount() {
                return this.getSelf()._localFoundTotal || 0
            }
            getTotalCount() {
                return this.getSelf()._totalCount
            }
            getTotalCountHash() {
                return this.getSelf()._totalCountHash
            }
            getFriendId() {
                return this.getSelf()._friend
            }
            getNoDiscover() {
                return this.getSelf()._noDiscover
            }
            getAudiosList() {
                return this.getSelf()._list
            }
            getPostId() {
                return this.getSelf()._postId
            }
            getWallQuery() {
                return this.getSelf()._wallQuery
            }
            getWallType() {
                return this.getSelf()._wallType
            }
            getCommunititesBlock() {
                return this.getSelf()._communitiesBlock
            }
            getArtistsBlock() {
                return this.getSelf()._artistsBlock
            }
            getPlaylistsBlock() {
                return this.getSelf()._playlistsBlock
            }
            getLiveInfo() {
                let e = this.getSelf()._live;
                return !!e && (e = e.split(","),
                {
                    hostId: e[0],
                    audioId: e[1],
                    hash: e[2]
                })
            }
            getAudiosCount() {
                let e = this.getSelf();
                return Array.isArray(e._list) ? e._list.length : 0
            }
            getTotalDuration() {
                let e = this.getAudiosList()
                  , t = 0;
                return (0,
                _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.each)(e, (function(e, i) {
                    t += i[_utils__WEBPACK_IMPORTED_MODULE_3__.AudioUtils.AUDIO_ITEM_INDEX_DURATION]
                }
                )),
                t
            }
            getAudio(e) {
                if (!e)
                    return null;
                let t = this.getSelf();
                "string" == typeof e && (e = e.split("_"));
                for (let i = 0, s = t._list.length; i < s; i++)
                    if (e[0] == t._list[i][_utils__WEBPACK_IMPORTED_MODULE_3__.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID] && e[1] == t._list[i][_utils__WEBPACK_IMPORTED_MODULE_3__.AudioUtils.AUDIO_ITEM_INDEX_ID])
                        return t._list[i];
                return null
            }
            getAudioAt(e) {
                let t = this.getSelf();
                return e < t._list.length ? t._list[e] : null
            }
            setLocalFoundCount(e) {
                this.getSelf()._localFoundTotal = e
            }
            setAdsAllowed(e) {
                return this.getSelf()._isAdsAllowed = e
            }
            setFollowed(e) {
                let t = this.getAddClasses() || "";
                return t = t.replace("audio_playlist__followed", ""),
                e && (t += " audio_playlist__followed"),
                this.getSelf()._addClasses = t,
                this.getSelf()._isFollowed = e
            }
            isBlocked() {
                return !!this.getSelf()._isBlocked
            }
            hasMore() {
                return !!this.getSelf()._hasMore
            }
            isOfficial() {
                return !!this.getSelf()._isOfficial
            }
            isFollowed() {
                return this.getSelf()._isFollowed
            }
            isAdsAllowed() {
                return !!this.getSelf()._isAdsAllowed
            }
            getForceReload() {
                return this.getSelf()._forceReload
            }
            isFullyLoadable() {
                return this.getType() === AudioPlaylist.TYPE_PLAYLIST
            }
            isLive() {
                return !!this.getLiveInfo()
            }
            getFeedOffset() {
                return this._feedOffset
            }
            getFeedFrom() {
                return this._feedFrom
            }
            _unref() {
                let e = this._ref;
                if (!(0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isObject)(e))
                    return;
                let t = {};
                for (let i in e)
                    if (e.hasOwnProperty(i) && !(0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isFunction)(e[i]) && 0 === i.indexOf("_")) {
                        let s = e[i];
                        t[i.substr(1)] = (0,
                        _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isObject)(s) ? (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.clone)(s) : s
                    }
                t.hasMore = !1,
                delete this._ref,
                this._type = AudioPlaylist.TYPE_TEMP,
                this._albumId = t.albumId,
                this._list = [],
                this._fetchService = t.fetchService,
                this.mergeWith(t)
            }
            equals(e) {
                return this.getSelf() === e.getSelf()
            }
            serialize() {
                return JSON.stringify(this.asObject())
            }
            indexOfAudio(e) {
                if (!e)
                    return -1;
                let t = [];
                (0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isString)(e) ? t = e.split("_") : (0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isObject)(e) ? t = [e.ownerId, e.id] : (0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isArray)(e) && (t = [e[_utils__WEBPACK_IMPORTED_MODULE_3__.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID], e[_utils__WEBPACK_IMPORTED_MODULE_3__.AudioUtils.AUDIO_ITEM_INDEX_ID]]);
                const i = this.getAudiosList();
                if (!i)
                    return -1;
                for (let e = 0, s = i.length; e < s; e++)
                    if (i[e] && t[0] == i[e][_utils__WEBPACK_IMPORTED_MODULE_3__.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID] && t[1] == i[e][_utils__WEBPACK_IMPORTED_MODULE_3__.AudioUtils.AUDIO_ITEM_INDEX_ID])
                        return e;
                return -1
            }
            asObject() {
                let e = {};
                return e.type = this.getType() || AudioPlaylist.TYPE_TEMP,
                e.ownerId = this.getOwnerId(),
                e.albumId = this.getAlbumId(),
                e.accessHash = this.getAccessHash(),
                e.hasMore = this.hasMore(),
                e.nextOffset = this.getNextOffset(),
                e.title = this.getTitle(),
                e.titleLang = this.getTitleLang(),
                e.context = window.getAudioPlayer()._getPlayingContext(),
                e.originalPlaylistRawId = this.getOriginalPlaylistRawId(),
                e.expire = this.getExpire ? this.getExpire() : null,
                e.blockId = this.getBlockId(),
                this.getType() === AudioPlaylist.TYPE_PLAYLIST && this.getAlbumId() > 0 && (e.originalPlaylistRawId = this.getOwnerId() + "_" + this.getAlbumId() + "_" + this.getAccessHash()),
                this.getType() === AudioPlaylist.TYPE_RADIO && (e.list = this.getAudiosList()),
                e
            }
            asPlaylistData() {
                return {
                    type: this.getType(),
                    ownerId: this.getOwnerId(),
                    id: this.getId(),
                    title: this.getTitle(),
                    hasMore: this.hasMore(),
                    list: this.getAudiosList(),
                    nextOffset: this.getNextOffset(),
                    subtitle: this.getSubtitle(),
                    totalCount: this.getTotalCount(),
                    blockId: this.getBlockId()
                }
            }
            toString() {
                return this.getId()
            }
            clean(e) {
                e || this._unref();
                let t = this.getSelf();
                t._hasMore = !0,
                t._list = [],
                t._feedOffset = t._feedFrom = 0,
                t._nextOffset = 0
            }
            initSortedList(e) {
                return this.getSelf()._list = e || []
            }
            setForceReload(e) {
                let t = this.getSelf();
                return e && (t._hasMore = !0),
                t._forceReload = e
            }
            getBlockId() {
                return this.getSelf()._blockId
            }
            getAudioIds(e) {
                return this.getSelf()._fetchService.getAudioIdsBySource({
                    playlist_id: this.getFullId(),
                    block_id: this.getBlockId(),
                    trackType: e,
                    context: this.getContext()
                })
            }
            loadAll(e, t="") {
                if (!this.isFullyLoadable())
                    return e && e(this);
                this.load(0, e, !0, "default", t)
            }
            loadByBlockId(e, t, i, s="default") {
                const o = (e,t=null)=>{
                    const i = this._onDoneLoading;
                    delete this._onDoneLoading,
                    delete this._loadingAll,
                    (0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.each)(i || [], ((e,i)=>{
                        i && i(this, t)
                    }
                    ))
                }
                  , a = this.getNextOffset();
                return !this.getAudiosCount() || e && e === a ? (this._onDoneLoading = this._onDoneLoading || [],
                this._onDoneLoading.push(t),
                this._loadingAll ? void 0 : i ? (this._loadingAll = !0,
                void (0,
                _playlist_loadAllPlaylistAudios__WEBPACK_IMPORTED_MODULE_4__.loadAllPlaylistAudios)(this, o)) : void ajax.post("al_audio.php?act=load_block_playlist", {
                    block_id: this._blockId,
                    start_from: a
                }, {
                    onDone: e=>{
                        this._blockId = e.blockId;
                        const t = window.getAudioPlayer();
                        t.mergePlaylistData(this, e),
                        o(),
                        t.saveStateCurrentPlaylist(),
                        "" === this.getNextOffset() && (clearTimeout(this._sendSearchStatsTimeout),
                        this._sendSearchStatsTimeout = setTimeout(this.sendSearchStats.bind(this, "search_view"), 3e3),
                        this._searchPlayStatsSent = !1)
                    }
                })) : t && t(this)
            }
            load(offset, onDone, needAll, trackType="default", viewType=null) {
                (0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isFunction)(offset) ? (onDone = offset,
                offset = 0) : offset = (0,
                _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.intval)(offset),
                this.getSelf().isExpired() && (this.getSelf()._hasMore = !0,
                this.getSelf().setForceReload(!0));
                const searchParams = this.getSearchParams();
                let wasPreload = !1, countAvailable = this.getType() === this.getAudiosCount(), isGoingToLoadAll = this.isFullyLoadable() && needAll && this.hasMore(), callOnDones = (e,t,i)=>{
                    let s = this._onDoneLoading;
                    i || (delete this._onDoneLoading,
                    delete this._loadingAll);
                    (!wasPreload || wasPreload && cur.audioChooseBox && (0,
                    _web_lib_box_utils__WEBPACK_IMPORTED_MODULE_1__.curBox)()) && (0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.each)(s || [], ((i,s)=>{
                        s && s(e, t)
                    }
                    )),
                    i && (wasPreload = !0)
                }
                , params;
                if (this.getSelf().getForceReload() && (offset < countAvailable && !isGoingToLoadAll || "" === this.getNextOffset() || !this.hasMore() || searchParams && this.getType() === AudioPlaylist.TYPE_SEARCH && !searchParams.globalQuery))
                    return onDone && onDone(this);
                if (this._onDoneLoading = this._onDoneLoading || [],
                this._onDoneLoading.push(onDone),
                this._loadingAll)
                    return onDone && onDone(this);
                if (needAll)
                    return this._loadingAll = !0,
                    void (0,
                    _playlist_loadAllPlaylistAudios__WEBPACK_IMPORTED_MODULE_4__.loadAllPlaylistAudios)(this, callOnDones, viewType);
                offset = this.getNextOffset(),
                offset === this.getLocalFoundCount() && (offset -= this.getLocalFoundCount()),
                offset || clearTimeout(this._sendSearchStatsTimeout),
                this.getSelf().getForceReload() && this.getSelf().setForceReload(!1);
                let isCatalog = !1;
                if (this._blockId)
                    params = {
                        act: "load_block_playlist",
                        block_id: this._blockId,
                        start_from: this.getNextOffset()
                    },
                    isCatalog = !0;
                else {
                    const e = cur.audioPage && this.getType() === AudioPlaylist.TYPE_SEARCH ? cur.audioPage.getOwnerId() : this.getOwnerId();
                    params = {
                        act: "load_section",
                        type: this.getType(),
                        owner_id: e,
                        playlist_id: this.getPlaylistId(),
                        offset,
                        context: this.getContext(),
                        access_hash: this.getAccessHash(),
                        search_q: searchParams ? searchParams.globalQuery : null,
                        search_performer: searchParams ? searchParams.performer : null,
                        search_lyrics: searchParams ? searchParams.lyrics : null,
                        search_sort: searchParams ? searchParams.sort : null,
                        search_history: searchParams ? (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.intval)(searchParams.fromHistory) : null,
                        search_qid: this.getSearchQid(),
                        feed_from: this.getFeedFrom(),
                        feed_offset: this.getFeedOffset(),
                        post_id: this.getPostId(),
                        wall_query: this.getWallQuery(),
                        wall_type: this.getWallType(),
                        claim: (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.intval)(nav.objLoc.claim),
                        track_type: trackType
                    }
                }
                return ajax.post("al_audio.php", params, {
                    onDone: (loadedPlaylist,tpl,langs,templatesScript,data)=>{
                        if (!loadedPlaylist)
                            return this.getSelf().setNextOffset(""),
                            void (isCatalog ? onDone && onDone(loadedPlaylist) : callOnDones(loadedPlaylist));
                        if (window.addTemplates({
                            audio_playlist_snippet: tpl
                        }),
                        (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.extend)(cur.lang, langs),
                        templatesScript && eval(templatesScript),
                        this._loadingAll && !needAll)
                            return;
                        const audioPlayer = window.getAudioPlayer();
                        audioPlayer.mergePlaylistData(this, loadedPlaylist),
                        isCatalog ? onDone && onDone(loadedPlaylist.list) : callOnDones(loadedPlaylist),
                        audioPlayer.saveStateCurrentPlaylist(),
                        offset && "" !== loadedPlaylist.nextOffset || (clearTimeout(this._sendSearchStatsTimeout),
                        this._sendSearchStatsTimeout = setTimeout(this.sendSearchStats.bind(this, "search_view"), 3e3),
                        this._searchPlayStatsSent = !1)
                    }
                    ,
                    onFail: ()=>!0,
                    cache: this.getType() === AudioPlaylist.TYPE_SEARCH ? 1 : 0
                })
            }
            isExpired() {
                const e = this.getExpire();
                return !!e && new Date(1e3 * e).getTime() < (new Date).getTime()
            }
            mergeInfo(e) {
                this._albumId = e.id || this._albumId;
                (0,
                _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.each)(["accessHash", "addClasses", "artistsBlock", "authorLine", "authorHref", "authorName", "communitiesBlock", "coverUrl", "description", "gridCovers", "editHash", "feedFrom", "feedOffset", "followHash", "hasMore", "infoLine1", "infoLine2", "isAdsAllowed", "isFollowed", "isOfficial", "isBlocked", "lastUpdated", "listens", "live", "nextOffset", "noConsecutivePlay", "originalList", "ownerId", "playlistsBlock", "postId", "rawId", "rawDescription", "searchQid", "searchParams", "subTitle", "title", "titleLang", "noDiscover", "totalCount", "totalCountHash", "type", "wallQuery", "wallType", "expire"], ((t,i)=>{
                    void 0 !== e[i] && (this["_" + i] = e[i])
                }
                ))
            }
            mergeWith(e) {
                let t = e.list;
                this.isExpired() && (this.getSelf()._list = []),
                t && t.length && (this.getType() === AudioPlaylist.TYPE_RADIO ? this.pushAudio(t, 0) : this.pushAudio(t)),
                this.mergeInfo(e)
            }
            pushAudio(e, t) {
                this._unref();
                const i = void 0 === t
                  , s = e=>{
                    const s = this.getAudiosList()
                      , o = [];
                    for (let a = 0; a < e.length; a++) {
                        const l = e[a]
                          , r = this.indexOfAudio(l);
                        r < 0 ? o.push((0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.clone)(l)) : i || (o.push((0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.clone)(l)),
                        s.splice(r, 1),
                        r < t && t--)
                    }
                    for (const e of o)
                        e[_utils__WEBPACK_IMPORTED_MODULE_3__.AudioUtils.AUDIO_ITEM_INDEX_TITLE] = (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.clean)((0,
                        _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.replaceEntities)(e[_utils__WEBPACK_IMPORTED_MODULE_3__.AudioUtils.AUDIO_ITEM_INDEX_TITLE]).replace(/(<em>|<\/em>)/g, "")),
                        e[_utils__WEBPACK_IMPORTED_MODULE_3__.AudioUtils.AUDIO_ITEM_INDEX_PERFORMER] = (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.clean)((0,
                        _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.replaceEntities)(e[_utils__WEBPACK_IMPORTED_MODULE_3__.AudioUtils.AUDIO_ITEM_INDEX_PERFORMER]).replace(/(<em>|<\/em>)/g, ""));
                    i ? s.push(...o) : s.splice(t, 0, ...o),
                    this._index && o.forEach((e=>this._index.add(e)))
                }
                ;
                (0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isArray)(e) && (0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isArray)(e[0]) ? s(e) : e && e.length && s([e])
            }
            moveAudio(e, t) {
                this._unref();
                let i = this._list.splice(e, 1);
                e < t && (t -= 1),
                this._list.splice(t, 0, i[0])
            }
            removeAudio(e) {
                let t = this.indexOfAudio(e);
                if (t >= 0) {
                    var i;
                    this._unref();
                    let e = this._list.splice(t, 1);
                    null == (i = this._index) || i.remove(e[0]);
                    return window.getAudioPlayer().saveStateCurrentPlaylist(),
                    t
                }
                return -1
            }
            sendSearchStats(e) {
                if ("search_play" === e) {
                    if (this._searchPlayStatsSent)
                        return;
                    this._searchPlayStatsSent = !0
                }
                ajax.post("al_audio.php?act=search_stats", {
                    event_type: e,
                    search_type: this.getSearchQid() ? "external" : "internal",
                    search_params: JSON.stringify(this.getSearchParams()),
                    results_count: this.getTotalCount()
                })
            }
            fetchNextLiveAudio(e) {
                let t = this.getLiveInfo();
                ajax.post("al_audio.php", {
                    act: "a_get_audio_status",
                    host_id: t.hostId,
                    hash: t.hash
                }, {
                    onDone: t=>e && e(t),
                    onFail: ()=>!0
                })
            }
            constructor(e, t, i) {
                let s = {};
                if (e && (0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isFunction)(e.getId))
                    return e.isReference() ? (window.getAudioPlayer().addPlaylist(this),
                    e) : (this._ref = e,
                    void window.getAudioPlayer().addPlaylist(this));
                (0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isObject)(e) ? s = e : (s.ownerId = t,
                s.type = e,
                s.albumId = i || ++AudioPlaylist.plIndex),
                this._type = s.type,
                this._ownerId = s.ownerId || vk.id,
                this._albumId = s.albumId || 0,
                this._fromId = s.fromId || 0,
                this._list = [],
                this._context = s.context || "",
                this._blockId = s.blockId,
                this._isFakeId = !1,
                this._expire = s.expire || null,
                this._noDiscover = s.hasOwnProperty("noDiscover") ? s.noDiscover : null,
                this._nextOffset = s.nextOffset,
                this._forceReload = !1,
                this._fetchService = new _web_audio_FetchService__WEBPACK_IMPORTED_MODULE_6__.FetchService,
                this._noConsecutivePlay = !1,
                this.mergeWith(s),
                window.getAudioPlayer().addPlaylist(this)
            }
        }
        AudioPlaylist.plIndex = 0,
        AudioPlaylist.TYPE_CURRENT = "current",
        AudioPlaylist.TYPE_PLAYLIST = "playlist",
        AudioPlaylist.TYPE_MY = "my",
        AudioPlaylist.TYPE_ALBUM = "album",
        AudioPlaylist.TYPE_TEMP = "temp",
        AudioPlaylist.TYPE_RECOM = "recoms",
        AudioPlaylist.TYPE_SEARCH = "search",
        AudioPlaylist.TYPE_LIVE = "live",
        AudioPlaylist.TYPE_WALL = "wall",
        AudioPlaylist.TYPE_RECENT = "recent",
        AudioPlaylist.TYPE_RADIO = "radio",
        AudioPlaylist.TYPE_ARTICLE_TTS = "article_tts",
        AudioPlaylist.DEFAULT_PLAYLIST_ID = -1,
        AudioPlaylist.RADIO_PLAYLIST_ID = -110
    }
    ,
    321178: (e,t,i)=>{
        i.d(t, {
            TopAudioPlayer: ()=>p
        });
        var s = i(9480)
          , o = i(301230)
          , a = i(95432)
          , l = i(29271)
          , r = i(953908)
          , n = i(82161)
          , d = i(795558)
          , u = i(866310)
          , _ = i(792829)
          , c = i(744986);
        const h = "top_audio_player_enabled";
        class p {
            static init() {
                let e = (0,
                d.ge)("top_audio_player")
                  , t = (0,
                d.data)(e, "object");
                t || (t = new p(e),
                (0,
                d.data)(e, "object", t))
            }
            init() {
                let e = this;
                function t(t) {
                    return (0,
                    d.hasClass)(this, "top_audio_player_play") ? (e.ap.podcastSetActionRef(e.ap.getCurrentAudio(), e.ap.isPlaying() ? s.AudioUtils.PodcastsLogs.ACTION_PAUSE : s.AudioUtils.PodcastsLogs.ACTION_PLAY, "top_player"),
                    e.ap.isPlaying() ? e.ap.pause() : e.ap.play(),
                    !1) : (0,
                    d.hasClass)(this, "top_audio_player_prev") ? (e.ap.playPrev(),
                    !1) : (0,
                    d.hasClass)(this, "top_audio_player_next") ? (e.ap.playNext(),
                    !1) : void 0
                }
                this.ap.on(this, u.events.UPDATE, this.onUpdate.bind(this)),
                this.ap.on(this, u.events.PLAY, this.onPlay.bind(this)),
                this.ap.on(this, u.events.PLAY_REQUESTED, this.onPlay.bind(this)),
                this.ap.on(this, [u.events.PAUSE, u.events.STOP], this.onPause.bind(this)),
                this.ap.top = this,
                (0,
                n.each)(["prev", "play", "next"], (function(i, s) {
                    (0,
                    r.addEvent)((0,
                    d.geByClass1)("top_audio_player_" + s, e._el), "click", t)
                }
                )),
                (0,
                r.addEvent)(this._el, "mousedown", (function(t) {
                    if (!(0,
                    d.gpeByClass)("top_audio_player_btn", t.target, e._el))
                        return 1 != t.which || (0,
                        d.hasClass)(t.target, "top_audio_player_btn") || (0,
                        d.hasClass)(t.target, "top_audio_player_act_icon") || s.AudioUtils.getLayer().toggle(),
                        (0,
                        r.cancelEvent)(t)
                }
                )),
                (0,
                r.addEvent)((0,
                d.ge)("top_audio"), "mousedown", (function(e) {
                    return !0 !== (0,
                    r.checkEvent)(e) && (s.AudioUtils.getLayer().toggle(),
                    (0,
                    r.cancelEvent)(e))
                }
                )),
                o.browser.safari || (0,
                r.addEvent)(document, "keydown keyup", (function(e) {
                    (0,
                    d.toggleClass)((0,
                    d.ge)("top_audio_play"), "shuffle", e.shiftKey)
                }
                )),
                this._resetAudio(),
                this._updateTitle(this.ap.getCurrentAudio())
            }
            onPause() {
                this._el && ((0,
                d.removeClass)(this._el, "top_audio_player_playing"),
                this._el.querySelector(".top_audio_player_play svg").outerHTML = (0,
                _.getIcon24Play)().icon);
                const e = (0,
                d.geByClass1)("_top_audio_player_play_blind_label");
                e && (e.innerHTML = l.getLang("global_audio_play"))
            }
            onPlay(e, t, i) {
                this._hideButton(),
                requestAnimationFrame((function() {
                    const e = s.AudioUtils.getLayer();
                    e && e.isShown() && e.updatePosition()
                }
                )),
                (0,
                d.addClass)(this._el, h),
                (0,
                d.toggleClass)(this._el, "top_audio_player_playing", !0),
                this._el.querySelector(".top_audio_player_play svg").outerHTML = (0,
                c.getIcon24Pause)().icon;
                const o = (0,
                d.geByClass1)("_top_audio_player_play_blind_label");
                o && (o.innerHTML = this.ap.isPlaying() ? l.getLang("global_audio_pause") : l.getLang("global_audio_play")),
                this._updateTitle(e, i)
            }
            onUpdate(e) {
                e ? (this._updateTitle(e),
                this._hideButton(),
                (0,
                d.addClass)(this._el, h)) : this._resetAudio()
            }
            _updateTitle(e, t) {
                if (t = (0,
                n.intval)(t),
                e = s.AudioUtils.audioTupleToAudioObject(e),
                (0,
                d.toggleClass)(this._el, "audio_player_podcast", s.AudioUtils.isPodcast(e)),
                (0,
                d.toggleClass)(this._el, "audio_player_article_tts", s.AudioUtils.isArticleTts(e)),
                (0,
                d.toggleClass)(this._el, "audio_player_external_stream_audio", s.AudioUtils.isExternalStream(e)),
                (0,
                d.toggleClass)(this._el, "audio_player_radio_marusia", s.AudioUtils.isRadio(e) && s.AudioUtils.isMarusiaTrack(e)),
                !e)
                    return;
                void 0 !== this._currTitleReTO && clearTimeout(this._currTitleReTO);
                const i = (0,
                d.geByClass1)("top_audio_player_title_out", this._el);
                (0,
                d.re)(i);
                const o = (0,
                d.geByClass1)("top_audio_player_title", this._el);
                if (0 !== t) {
                    let i = t < 0 ? -10 : 10
                      , s = `opacity: 0; top: ${i}px; left: ${o.offsetLeft}px`
                      , a = this.getTitleText(e)
                      , l = (0,
                    d.se)('<div class="top_audio_player_title top_audio_player_title_next" style="' + s + '">' + a + "</div>");
                    l.setAttribute("onmouseover", "setTitle(this)"),
                    t > 0 ? (0,
                    d.domInsertAfter)(l, o) : (0,
                    d.domInsertBefore)(l, o),
                    (0,
                    d.addClass)(o, "top_audio_player_title_out"),
                    (0,
                    d.setStyle)(o, {
                        top: -i,
                        opacity: 0
                    }),
                    setTimeout((function() {
                        (0,
                        d.setStyle)(l, {
                            top: 0,
                            opacity: 1
                        })
                    }
                    ), 10),
                    clearTimeout(this._currTitleReTO),
                    this._currTitleReTO = setTimeout((function() {
                        (0,
                        d.re)(o),
                        (0,
                        d.removeClass)(l, "top_audio_player_title_next")
                    }
                    ), p.TITLE_CHANGE_ANIM_SPEED)
                } else
                    o && (o.innerHTML = this.getTitleText(e),
                    o.titleSet = 0,
                    o.setAttribute("onmouseover", "setTitle(this)"))
            }
            getTitleText(e) {
                return [e.performer, e.title].filter((e=>!!e)).join(" &mdash; ")
            }
            _resetAudio() {
                (0,
                d.removeClass)(this._playIconBtn, h),
                (0,
                d.removeClass)(this._el, h),
                (0,
                d.removeClass)(this._el, "top_audio_player_playing"),
                (0,
                d.removeClass)(this._el, "audio_player_podcast"),
                (0,
                d.removeClass)(this._el, "audio_player_article_tts"),
                (0,
                d.removeClass)(this._el, "audio_player_external_stream_audio"),
                (0,
                d.removeClass)(this._el, "audio_player_radio_marusia"),
                (0,
                d.show)(this._audioBtnGroup);
                let e = s.AudioUtils.getLayer();
                e && e.isShown() && e.updatePosition()
            }
            _hideButton() {
                (0,
                d.hide)(this._audioBtnGroup),
                (0,
                d.hasClass)(this._playIconBtn, h) || (0,
                d.addClass)(this._playIconBtn, h)
            }
            constructor(e) {
                this.ap = (0,
                a.getAudioPlayer)(),
                this._el = e,
                this._playIconBtn = (0,
                d.ge)("top_audio"),
                this._audioBtnGroup = (0,
                d.ge)("top_audio_btn_group"),
                this.init()
            }
        }
        p.TITLE_CHANGE_ANIM_SPEED = 190
    }
    ,
    132247: (e,t,i)=>{
        i.d(t, {
            WebPlayerAdapter: ()=>d
        });
        var s = i(887901)
          , o = i(82161)
          , a = i(9480)
          , l = i(795558)
          , r = i(595509)
          , n = i(595175);
        class d extends s.AudioStatsPlayerAdapter {
            getPausedBy(e) {
                const {pausedByVideo: t, pausedByStories: i, pausedByAudio: s, pausedByQueue: o} = this.player;
                return t && e < t || window.Videoview && Videoview.isLayerShown() ? "video" : i && e < i || window.cur && cur.storyLayer ? "stories" : s && e < s ? "audio" : o && e < o ? "queue" : null
            }
            getState() {
                let e = super.getState();
                const t = this.getAudioId();
                if (t) {
                    const e = (0,
                    l.geByClass)("_audio_row_" + t + " audio_row__current", (0,
                    l.ge)("page_layout"));
                    if (e && e.length)
                        return s.FULL_SCREEN_STATE
                }
                return e
            }
            getAudio() {
                return (0,
                r.audioTupleToAudioObject)(this.player.getCurrentAudio())
            }
            getProgress() {
                return this.player.getCurrentProgress()
            }
            getProgressInSeconds() {
                const e = this.player.getCurrentAudio();
                return e ? Math.round(this.player.getCurrentProgress() * e[a.AudioUtils.AUDIO_ITEM_INDEX_DURATION]) : 0
            }
            getVolume() {
                return Math.round(100 * (0,
                n.unLogF)(this.player.getVolume()))
            }
            getAudioId() {
                const e = this.player.getCurrentAudio();
                if (e)
                    return e[a.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID] + "_" + e[a.AudioUtils.AUDIO_ITEM_INDEX_ID]
            }
            getAudioTrackCode() {
                const e = this.player.getCurrentAudio();
                if (e)
                    return e[a.AudioUtils.AUDIO_ITEM_INDEX_TRACK_CODE]
            }
            getPrevAudioId() {
                const e = this.player._prevAudio;
                if (e)
                    return e[a.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID] + "_" + e[a.AudioUtils.AUDIO_ITEM_INDEX_ID]
            }
            getPrevPlaylistId() {
                const e = this.player._prevPlaylist;
                return e && !e.getIsFakeId() ? e.getFullId() : null
            }
            getPlaylistId() {
                const e = this.player.getCurrentPlaylist();
                return e && !e.getIsFakeId() ? e.getFullId() : null
            }
            getContext() {
                return this.player._getPlayingContext()
            }
            getSequence() {
                return this.player._seq
            }
            getType() {
                if (this.player._impl)
                    return this.player._impl.type
            }
            getSearchParams() {
                const e = this.player.getCurrentPlaylist();
                if (e)
                    return e.getSearchParams()
            }
            isShuffledPlaylist() {
                const e = this.player.getPlaylistQueue();
                if (e)
                    return e.shuffled
            }
            isRealPlaylist() {
                const e = this.player.getCurrentPlaylist();
                return !!e && e.getType() === AudioPlaylist.TYPE_PLAYLIST
            }
            isRealPrevPlaylist() {
                const e = this.player._prevPlaylist;
                return !!e && e.getType() === AudioPlaylist.TYPE_PLAYLIST
            }
            isPodcast() {
                const e = this.player.getCurrentAudio();
                return a.AudioUtils.isPodcast(e)
            }
            isExternalStream() {
                const e = this.player.getCurrentAudio();
                return a.AudioUtils.isExternalStream(e)
            }
            isRadio() {
                const e = this.player.getCurrentAudio();
                return a.AudioUtils.isRadio(e)
            }
            isMarusiaTrack() {
                const e = this.player.getCurrentAudio();
                return a.AudioUtils.isMarusiaTrack(e)
            }
            isLastTrack() {
                const e = this.player.getCurrentAudio()
                  , t = this.player.getCurrentPlaylist();
                if (!e)
                    return !1;
                if (e && !t)
                    return !0;
                return t.indexOfAudio(e) + 1 === t.getAudiosCount()
            }
            getTrackPosition() {
                const e = this.player.getCurrentAudio()
                  , t = this.player.getCurrentPlaylist();
                return e ? e && !t ? 0 : t.indexOfAudio(e) : null
            }
            hasPlaylist() {
                return Boolean(this.player.getCurrentPlaylist())
            }
            hasSearchParams() {
                return this.getContext() === AudioPlaylist.TYPE_SEARCH
            }
            isDebug() {
                return Boolean(ls.get(AudioPlayer.LS_PREFIX + "stats_debug"))
            }
            sendListenedData(e) {
                let t = e && e.hash;
                const i = (0,
                o.extend)({
                    act: "listened_data",
                    impl: this.getType(),
                    hash: t,
                    v: 5,
                    loc: nav.strLoc
                }, e);
                ajax.post("al_audio.php", i, {
                    onDone: e=>{
                        this.player.setAdsConfig && this.player.setAdsConfig(e)
                    }
                    ,
                    onFail: ()=>!0
                })
            }
            getPlaylistQueue() {
                this.player.getPlaylistQueue()
            }
        }
    }
    ,
    174679: (e,t,i)=>{
        i.d(t, {
            followCurator: ()=>d
        });
        var s = i(725296)
          , o = i(9480)
          , a = i(29271)
          , l = i(854099)
          , r = i(95432)
          , n = i(866310);
        function d(e, t, i) {
            (0,
            s.lockButton)(i),
            ajax.post("al_curator.php", {
                act: "follow",
                curator_id: e,
                hash: t
            }, {
                onFail: ()=>(0,
                s.unlockButton)(i),
                onDone: t=>{
                    (0,
                    r.getAudioPlayer)().notify(n.events.CURATOR_FOLLOW),
                    (0,
                    s.unlockButton)(i),
                    l.FlatButton.setLabel(i, a.getLang("audio_following_artist_button")),
                    i.classList.add("MusicAuthor__follow_btn__followed"),
                    i.onclick = s=>{
                        s.preventDefault(),
                        o.AudioUtils.unfollowCurator(e, t, i)
                    }
                }
            })
        }
    }
    ,
    648805: (e,t,i)=>{
        i.d(t, {
            unfollowCurator: ()=>d
        });
        var s = i(725296)
          , o = i(9480)
          , a = i(29271)
          , l = i(854099)
          , r = i(95432)
          , n = i(866310);
        function d(e, t, i) {
            (0,
            s.lockButton)(i),
            ajax.post("al_curator.php", {
                act: "unfollow",
                curator_id: e,
                hash: t
            }, {
                onFail: ()=>(0,
                s.unlockButton)(i),
                onDone: t=>{
                    (0,
                    r.getAudioPlayer)().notify(n.events.CURATOR_UNFOLLOW),
                    (0,
                    s.unlockButton)(i),
                    l.FlatButton.setLabel(i, a.getLang("audio_follow_artist_button")),
                    i.classList.remove("MusicAuthor__follow_btn__followed"),
                    i.onclick = s=>{
                        s.preventDefault(),
                        o.AudioUtils.followCurator(e, t, i)
                    }
                }
            })
        }
    }
    ,
    951127: (e,t,i)=>{
        i.d(t, {
            addToGroupBox: ()=>r
        });
        var s = i(795558)
          , o = i(29271)
          , a = i(514986)
          , l = i(584356);
        function r(e, t, i) {
            const r = e + "_" + t
              , n = (0,
            a.showBox)("al_audio.php", {
                act: "add_to_groups_box",
                playlist_id: r,
                access_hash: i
            }).setButtons(o.getLang("Save"), (()=>{
                let e = [];
                for (let t in cur.wdd.follow_playlist_wwd.selected)
                    e.push(cur.wdd.follow_playlist_wwd.selected[t][0]);
                e.length && ((0,
                s.ge)("add_playlist_to_group_fail").innerHTML = "",
                ajax.post("al_audio.php", {
                    act: "add_to_group",
                    group_ids: e,
                    hash: (0,
                    s.ge)("add_playlist_to_group_hash").value,
                    playlist_id: r
                }, {
                    onDone(e) {
                        n.hide(),
                        (0,
                        l.showDoneBox)(e)
                    },
                    onFail: e=>((0,
                    s.ge)("add_playlist_to_group_fail").innerHTML = e,
                    !0)
                }))
            }
            ))
        }
    }
    ,
    517339: (e,t,i)=>{
        i.d(t, {
            removeFromGroup: ()=>n
        });
        var s = i(795558)
          , o = i(29271)
          , a = i(514986)
          , l = i(584356)
          , r = i(931917);
        function n(e, t, i, n=null) {
            const d = e + "_" + t;
            let u = null;
            const _ = cur.audioPage && cur.audioPage._ownerId;
            if (r.Ranges.isGroupId(_))
                u = -_;
            else {
                const e = cur.group_id;
                r.Ranges.isGroupId(-e) && (u = e)
            }
            if (u) {
                let e = (0,
                a.showBox)("al_audio.php", {
                    act: "delete_from_group_box",
                    playlist_id: d,
                    group_id: u
                }).setButtons(o.getLang("global_yes"), (()=>{
                    ajax.post("al_audio.php", {
                        act: "delete_from_group",
                        group_id: u,
                        hash: i,
                        playlist_id: d
                    }, {
                        onDone(t) {
                            if (e.hide(),
                            (0,
                            l.showDoneBox)(t),
                            n) {
                                const e = (0,
                                s.gpeByClass)("audio_pl_snippet2", n);
                                e && e.classList.remove("audio_pl__can_remove_from_club")
                            }
                        },
                        onFail: t=>(e.hide(),
                        (0,
                        l.showDoneBox)(t),
                        !0)
                    })
                }
                ), o.getLang("global_cancel"), (()=>e.hide())).show()
            }
        }
    }
    ,
    327279: (e,t,i)=>{
        i.d(t, {
            addToPlaylistsBoxInit: ()=>c
        });
        var s = i(795558)
          , o = i(953908)
          , a = i(82161)
          , l = i(584356)
          , r = i(725296)
          , n = i(29271)
          , d = i(936134)
          , u = i(614271)
          , _ = i(329191);
        function c(e, t, i, h, p) {
            if ("undefined" == typeof AutoList)
                return window.stManager.add(window.jsc("web/auto_list.js"), (()=>{
                    c(e, t, i, h, p)
                }
                ));
            let y = (0,
            l.curBox)()
              , g = (0,
            s.geByClass1)("_audio_atp_content", y.bodyNode)
              , A = (0,
            s.geByClass1)("_audio_atp_list", y.bodyNode)
              , P = (0,
            s.ge)("audio_atp_search")
              , f = (0,
            s.geByClass1)("_audio_atp_empty")
              , E = (0,
            s.getSize)(g)[1];
            (0,
            s.setStyle)(A, {
                height: E - (0,
                s.getSize)(P)[1]
            });
            let m, w = "";
            function v() {
                m && m.destroy(),
                A.innerHTML = "";
                let e = [];
                e = w ? h.filter((e=>e[2].toLowerCase().indexOf(w) >= 0)) : h,
                (0,
                s.toggle)(A, 0 != e.length),
                (0,
                s.toggle)(f, 0 == e.length),
                m = new AutoList(A,{
                    onNeedRows: (t,i)=>{
                        let s = []
                          , o = i
                          , a = Math.min(e.length, i + 30);
                        for (let t = o; t < a; t++) {
                            let i = e[t];
                            if (i) {
                                let e = i[4] ? "ape_selected" : "";
                                let t = `<div class="ape_check">\n              <div class="ape_check--unchecked">${(0,
                                u.getIcon24CheckCircleOff)().icon}</div>\n              <div class="ape_check--checked">${(0,
                                _.getIcon24CheckCircleOn)().icon}</div>\n            </div>`
                                  , o = `<div class="ape_pl_item _ape_pl_item ${e}" data-id="${i[1]}">${t}<div class="ape_pl_item_inner"><span class="ape_pl_title">${i[2]}</span> <span class="ape_pl_size">${i[3]}</span></div></div>`;
                                s.push(o)
                            }
                        }
                        t(s)
                    }
                })
            }
            v(),
            cur.addToPlaylistSearch = (0,
            d.debounce)((function(e) {
                w = (0,
                a.trim)(e).toLowerCase(),
                v()
            }
            ), 200);
            let I = {}
              , C = {};
            (0,
            o.addEvent)(A, "click", (e=>{
                let t = (0,
                s.domClosest)("_ape_pl_item", e.target)
                  , i = (0,
                s.domData)(t, "id");
                (0,
                s.toggleClass)(t, "ape_selected") ? (C[i] = !0,
                delete I[i]) : (I[i] = !0,
                delete C[i])
            }
            )),
            y.removeButtons(),
            y.addButton(n.getLang("global_save"), (s=>{
                let o = Object.keys(C)
                  , a = Object.keys(I);
                ajax.post("al_audio.php", {
                    act: "save_audio_in_playlists",
                    add_pl_ids: o.join(","),
                    remove_pl_ids: a.join(","),
                    owner_id: e,
                    audio_owner_id: t,
                    audio_id: i,
                    hash: p
                }, {
                    showProgress: ()=>(0,
                    r.lockButton)(s),
                    hideProgress: ()=>(0,
                    r.unlockButton)(s),
                    onDone: ()=>{
                        y.hide()
                    }
                    ,
                    onFail: ()=>(y.hide(),
                    !0)
                })
            }
            ), "ok", !0),
            y.addButton(n.getLang("global_cancel"), y.hide.bind(this), "no", !0)
        }
    }
    ,
    429023: (e,t,i)=>{
        i.d(t, {
            claimPlaylist: ()=>o
        });
        var s = i(584356);
        function o(e, t, i) {
            const o = nav.objLoc.claim;
            if (!o)
                return;
            const a = {
                act: i ? "a_unclaim_playlist" : "a_claim_playlist",
                claim: o,
                type: "audio",
                owner_id: e,
                playlist_id: t
            };
            ajax.post("al_claims.php", a, {
                onDone: e=>{
                    (0,
                    s.showDoneBox)(e)
                }
            })
        }
    }
    ,
    831717: (e,t,i)=>{
        i.d(t, {
            copyPlaylistLink: ()=>n
        });
        var s = i(892726)
          , o = i(29271)
          , a = i(504867)
          , l = i(584356)
          , r = i(714865);
        function n(e, t, i) {
            (0,
            a.statlogsValueEvent)("audio_copy_link", vk.id),
            (0,
            s.copyToClipboard)((0,
            r.getPlaylistUrl)(e, t, i, !0)),
            (0,
            l.showDoneBox)(o.getLang("audio_playlist_link_copied"))
        }
    }
    ,
    465663: (e,t,i)=>{
        function s(e, t, i, s) {
            window.stManager.add([window.jsc("web/audio.js"), "audio.css", window.jsc("web/auto_list.js")], (function() {
                ajax.post("al_audio.php?act=playlists_edit_data", {
                    owner_id: e,
                    playlist_id: t
                }, {
                    onDone: function(o) {
                        o.audio_playlist_cover_upload_options && (cur.audioCoverUploadOptions = cur.audioCoverUploadOptions || {},
                        cur.audioCoverUploadOptions[e] = o.audio_playlist_cover_upload_options),
                        o.editorial_playlists_params && (cur.editorialPlaylistsParams = o.editorial_playlists_params),
                        AudioPage.editPlaylist(e, t, i, s)
                    },
                    onFail: ()=>!0
                })
            }
            ))
        }
        i.d(t, {
            editPlaylist: ()=>s
        })
    }
    ,
    127023: (e,t,i)=>{
        i.d(t, {
            followPlaylist: ()=>c
        });
        var s = i(795558)
          , o = i(95432)
          , a = i(29271)
          , l = i(664988)
          , r = i(584356)
          , n = i(82161)
          , d = i(514986)
          , u = i(866310);
        let _ = [];
        function c(e, t, i, c, h=!1, p="") {
            if (vk && vk.widget && !vk.id && window.Widgets)
                return Widgets.oauth(),
                !1;
            let y = (0,
            o.getAudioPlayer)().getPlaylist(AudioPlaylist.TYPE_PLAYLIST, t, i);
            function g(o) {
                const a = (0,
                s.domData)(e, "text-followed")
                  , l = (0,
                s.domData)(e, "text-follow")
                  , r = o ? a : l;
                (0,
                s.domData)(e, "tooltip-text", r);
                ((0,
                s.geByClass1)("audio_pl_snippet__action_btn_add_text", e) || e).innerHTML = r,
                y.setFollowed(o);
                let d = y.getAddClasses() || "";
                d = d.replace("audio_pl__followed", ""),
                o && (d += " audio_pl__followed"),
                y.mergeWith({
                    addClasses: d
                }),
                (0,
                n.each)((0,
                s.geByClass)(`_audio_pl_ ${t}_ ${i}`), ((t,i)=>{
                    (0,
                    s.toggleClass)(i, "audio_pl__followed", o);
                    const a = i.querySelectorAll(".audio_pl_snippet__action_btn_add")[0];
                    a && (a.innerHTML = e.innerHTML)
                }
                ))
            }
            function A(e) {
                if (cur.audioPage && cur.audioPage._data.playlists && cur.audioPage.getOwnerId() === vk.id) {
                    if (e) {
                        let e = null;
                        _ = _.filter((s=>{
                            const o = s.playlistId === i && s.playlistOwnerId === t;
                            return o && (e = s.pl),
                            !o
                        }
                        )),
                        e && cur.audioPage._data.playlists.unshift(e)
                    } else
                        cur.audioPage._data.playlists = cur.audioPage._data.playlists.filter((e=>{
                            const s = e.id === i && e.owner_id === t;
                            return s && _.push({
                                playlistId: i,
                                playlistOwnerId: t,
                                pl: e
                            }),
                            !s
                        }
                        ));
                    cur.audioPage.updatePlaylistsCounter(vk.id)
                }
            }
            let P = (0,
            s.gpeByClass)("_audio_pl", e)
              , f = (0,
            s.toggleClass)(P, "audio_pl__followed");
            g(f),
            A(f),
            ajax.post("al_audio.php", {
                act: "follow_playlist",
                playlist_owner_id: t,
                playlist_id: i,
                hash: c,
                showcase: h,
                block_id: p
            }, {
                onDone(e) {
                    (0,
                    l.isObject)(e) && f && (0,
                    o.getAudioPlayer)().notify(u.events.MUSIC_PLAYLISTS_ADD, e)
                },
                onFail: e=>(new d.MessageBox({
                    title: a.getLang("global_error")
                }).content(e).setButtons(a.getLang("audio_ok"), (function() {
                    (0,
                    r.curBox)().hide()
                }
                )).show(),
                g(!1),
                A(!1),
                !0)
            })
        }
    }
    ,
    515896: (e,t,i)=>{
        i.d(t, {
            getContextPlaylist: ()=>r
        });
        var s = i(795558)
          , o = i(9480)
          , a = i(95432)
          , l = i(82161);
        function r(e, t) {
            let i = (0,
            a.getAudioPlayer)()
              , r = o.AudioUtils.getAudioFromEl(e, !0);
            if (!r)
                return {};
            function n(e) {
                return [].slice.call(e)
            }
            let d = null
              , u = []
              , _ = (0,
            s.domData)(e, "new-post")
              , c = !1
              , h = null
              , p = AudioPlaylist.TYPE_TEMP
              , y = vk.id
              , g = null
              , A = {}
              , P = window.AudioPage && currentAudioPage(e);
            if ((0,
            s.traverseParent)(e, (e=>c = (0,
            s.domData)(e, "audio-context"))),
            c = r.context || c,
            c = c || ("audio" == cur.module ? cur.submodule : cur.module),
            t || "autoplay" === c)
                return {
                    context: c
                };
            let[f,E] = o.AudioUtils.contextSplit(c)
              , m = (0,
            s.gpeByClass)("_audio_pl", e)
              , w = !1;
            if (m) {
                const e = (0,
                s.domData)(m, "playlist-id");
                h = i.getPlaylistByBlockId(e),
                h || (h = i.getPlaylist(...AudioPlaylist.splitId(e || "")));
                const t = (0,
                s.domData)(m, "no-consecutive-play");
                t && h.mergeWith({
                    noConsecutivePlay: t
                });
                let o = (0,
                s.domData)(m, "title") || "";
                o && h.mergeWith({
                    title: (0,
                    l.clean)(o)
                });
                let a = (0,
                s.domData)(m, "access-hash") || "";
                a && h.mergeWith({
                    accessHash: a
                })
            } else if (P && P.getPageCurrentPlaylist())
                h = P.getPageCurrentPlaylist();
            else if ("module" == f) {
                let e = E;
                h = i.getPlaylist(AudioPlaylist.TYPE_PLAYLIST, e || cur.oid || vk.id, AudioPlaylist.DEFAULT_PLAYLIST_ID),
                u = [d]
            } else if (0 === r.context.indexOf("admin"))
                h = i.getPlaylist(AudioPlaylist.TYPE_PLAYLIST, r.ownerId, 0, r.accessKey),
                h.getAudiosCount() || h.setForceReload(!0);
            else if (0 === r.context.indexOf("im"))
                d = (0,
                s.gpeByClass)("_im_peer_history", e),
                d = d || (0,
                s.gpeByClass)("_fc_tab_log_msgs", e),
                g = "im" + (cur.peer || "");
            else if (0 === r.context.indexOf("board"))
                w = !0,
                g = r.context,
                u = n((0,
                s.geByClass)("_wall_audio_rows", d));
            else if (0 === r.context.indexOf("widget"))
                w = !0,
                g = r.context;
            else if (0 === r.context.indexOf("wiki"))
                w = !0,
                g = "wiki";
            else if (0 === r.context.indexOf("post")) {
                p = AudioPlaylist.TYPE_WALL,
                g = r.context,
                w = !0;
                let e = r.context.replace("post", "").split("_");
                y = e[0],
                A = {
                    postId: e[1]
                }
            } else if (0 === r.context.indexOf("choose"))
                g = r.context;
            else if ("feed" == _ || 0 === r.context.indexOf("feed") || 0 === r.context.indexOf("feedsearch"))
                g = "feed",
                w = !0,
                u = n((0,
                s.geByClass)("wall_text", d));
            else if ("group_wall" == f || "user_wall" == f || 0 === r.context.indexOf("reply") || "wall" == _) {
                p = AudioPlaylist.TYPE_WALL,
                y = cur.oid;
                let t = (E || "").split("_")[1]
                  , i = cur.wallQuery || ""
                  , o = (0,
                s.ge)("wall_search")
                  , a = (0,
                l.inArray)(cur.wallType, ["own", "full_own"]) ? "own" : "all";
                g = hashCode(a + "_" + i),
                w = !0,
                "wall" == cur.module && (0,
                s.val)(o) && (i = (0,
                s.val)(o)),
                t && (A = {
                    postId: t,
                    wallQuery: i,
                    wallType: a
                }),
                0 === r.context.indexOf("reply") && (u = n([(0,
                s.gpeByClass)("_replies_list", e)]),
                g = "reply" + g,
                w = !0);
                const _ = (0,
                s.gpeByClass)("wide_column", e);
                if (_) {
                    const e = (0,
                    s.geByClass)("wall_text", _);
                    u = Array.isArray(e) && e.length > 0 ? u.concat(e) : u.concat(n([d]))
                } else
                    u = u.concat(n([d]))
            } else
                "article" == f && (h = cur.articlePlaylist);
            return d || (d = (0,
            s.domPN)(e)),
            u = u.filter((function(e) {
                return !!e
            }
            )),
            u && 0 != u.length || (u = [d]),
            h = h || i.getPlaylist(p, y, g),
            "function" == typeof h.setIsFakeId && h.setIsFakeId(w),
            h = h.getAudiosCount() ? h : o.AudioUtils.initDomPlaylist(h, u),
            h.mergeWith(A || {}),
            -1 == h.indexOfAudio(r) && (h = o.AudioUtils.initDomPlaylist(h, [(0,
            s.domPN)(e)])),
            0 === r.context.indexOf("im") && h.setContext(`im:${cur.peer || ""}`),
            {
                playlist: h,
                context: c
            }
        }
    }
    ,
    141556: (e,t,i)=>{
        function s() {
            return window.playlistAddRestoreInfo || (window.playlistAddRestoreInfo = {}),
            window.playlistAddRestoreInfo
        }
        i.d(t, {
            getPlaylistAddRestoreInfo: ()=>s
        })
    }
    ,
    801219: (e,t,i)=>{
        i.d(t, {
            hidePlaylistFromRecoms: ()=>l
        });
        var s = i(381085)
          , o = i(29271)
          , a = i(584356);
        function l(e, t, i) {
            ajax.post("al_audio.php?act=hide_playlist_from_recoms", {
                owner_id: e,
                playlist_id: t,
                access_hash: i
            }, {
                onDone() {
                    (0,
                    a.showDoneBox)(o.getLang("audio_playlist_recoms_was_hidden"));
                    let s = document.getElementsByClassName("ui_actions_menu_item playlist_recoms_hide_or_show")[0];
                    s.innerHTML = o.getLang("audio_playlist_recoms_show"),
                    s.setAttribute("onclick", "AudioUtils.showPlaylistInRecoms(" + e + ", " + t + ", '" + i + "');");
                    for (let e of ["audio_search", "audio_search_layer"]) {
                        let t = document.getElementById(e);
                        if (t) {
                            window.currentAudioPage(t).catalogController.currentSection.reloadBlock("recommended_playlists")
                        }
                    }
                },
                onFail(e) {
                    (0,
                    s.showErrorBox)(e || o.getLang("global_unknown_error"))
                }
            })
        }
    }
    ,
    447835: (e,t,i)=>{
        i.d(t, {
            initDomPlaylist: ()=>a
        });
        var s = i(82161)
          , o = i(668226);
        function a(e, t) {
            let i = [];
            return (0,
            s.each)(t, (function(e, t) {
                t && [...t.querySelectorAll("._audio_row")].forEach((e=>{
                    i.push((0,
                    o.getAudioFromEl)(e))
                }
                ))
            }
            )),
            e.pushAudio(i),
            e
        }
    }
    ,
    567718: (e,t,i)=>{
        i.d(t, {
            initRowPlaylistsChooser: ()=>o
        });
        var s = i(9480);
        function o(e, t, i, o) {
            let a, l = s.AudioUtils.audioTupleToAudioObject(e);
            a = cur.audioPage && cur.audioPage.getOwnerId() < 0 && cur.audioPage.canEditGroup() ? cur.audioPage.getOwnerId() : vk.id,
            s.AudioUtils.playlistsByAudioDataCache = s.AudioUtils.playlistsByAudioDataCache || {};
            let r = s.AudioUtils.playlistsByAudioDataCache
              , n = a + "_" + l.ownerId + "_" + l.id;
            r[n] ? s.AudioUtils._showPlaylistsChooser(i, t, r[n], a, l, e) : ajax.post("al_audio.php", {
                act: "playlists_by_audio",
                owner_id: a,
                audio_owner_id: l.ownerId,
                audio_id: l.id
            }, {
                onDone: (d,u,_)=>{
                    let c = r[n] = {
                        playlists: d,
                        morePlaylists: u,
                        newPlaylistHash: _
                    };
                    s.AudioUtils._showPlaylistsChooser(i, t, c, a, l, e, o)
                }
                ,
                onFail: ()=>!0
            })
        }
    }
    ,
    970689: (__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{
        __webpack_require__.d(__webpack_exports__, {
            loadAllPlaylistAudios: ()=>loadAllPlaylistAudios
        });
        var _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82161)
          , _web_lib_feature_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95432);
        const AUDIO_LOAD_CHUNK_SIZE = 1e3;
        let chunks, isDeleted, isAttach, onDone, playlist, preloadedCount, totalCount;
        function loadAllPlaylistAudios(e, t, i=!1) {
            if (e.getForceReload())
                e.list = [];
            else if (!e.hasMore() || !e.isFullyLoadable())
                return onDone && onDone();
            e.setForceReload(!1),
            chunks = [],
            isAttach = "attach" === i,
            onDone = t,
            playlist = e,
            preloadedCount = 0,
            totalCount = e.getTotalCount(),
            loadChunk(0, (()=>{
                isDeleted ? onAllLoaded() : (isAttach && onAllLoaded(),
                loadAllChunks(onAllLoaded, 1))
            }
            ))
        }
        function onAllLoaded() {
            if (isDeleted)
                return onDone && onDone(null, isDeleted);
            let e = [];
            (0,
            _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_0__.each)(chunks, (function(t, i) {
                i && (e = e.concat(i))
            }
            ));
            if ((0,
            _web_lib_feature_entries__WEBPACK_IMPORTED_MODULE_1__.getAudioPlayer)().getPlaylists().forEach((t=>{
                t.getId() === playlist.getId() && (t._list = e)
            }
            )),
            (0,
            _web_lib_feature_entries__WEBPACK_IMPORTED_MODULE_1__.getAudioPlayer)().mergePlaylistData(playlist, {
                hasMore: !1
            }),
            onDone) {
                onDone(playlist, !1, isAttach && totalCount > preloadedCount)
            }
        }
        function loadAllChunks(e, t) {
            t = t || 0;
            let i = Math.max(0, Math.ceil((totalCount - preloadedCount) / AUDIO_LOAD_CHUNK_SIZE));
            if (isAttach && t && totalCount > preloadedCount && i === t && i++,
            i - t <= 0)
                e();
            else {
                const s = new CallHub(e,i - t);
                for (let e = t; e < i; e++)
                    loadChunk(e, (()=>{
                        s.done()
                    }
                    ))
            }
        }
        function loadChunk(chunkIndex, callback) {
            const isPreload = isAttach && !chunkIndex ? 1 : 0;
            let offset = chunkIndex * AUDIO_LOAD_CHUNK_SIZE;
            preloadedCount && (offset = Math.abs(AUDIO_LOAD_CHUNK_SIZE - preloadedCount - chunkIndex * AUDIO_LOAD_CHUNK_SIZE)),
            ajax.post("al_audio.php?act=load_section", {
                type: playlist.getType(),
                owner_id: playlist.getOwnerId(),
                playlist_id: playlist.getPlaylistId(),
                access_hash: playlist.getAccessHash(),
                from_id: playlist.getFromId(),
                offset,
                is_loading_all: 1,
                is_preload: isPreload,
                context: playlist.getContext(),
                claim: (0,
                _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_0__.intval)(nav.objLoc.claim),
                ref: playlist.getRef()
            }, {
                onDone: function(data, tpl, langs, templatesScript) {
                    if (0 === chunkIndex) {
                        if ((0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_0__.addTemplates)({
                            audio_playlist_snippet: tpl
                        }),
                        (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_0__.extend)(cur.lang, langs),
                        templatesScript && eval(templatesScript),
                        !data)
                            return isDeleted = !0,
                            callback();
                        isDeleted = !1,
                        totalCount = data.totalCount,
                        preloadedCount = data.list.length,
                        (0,
                        _web_lib_feature_entries__WEBPACK_IMPORTED_MODULE_1__.getAudioPlayer)().mergePlaylistData(playlist, data)
                    }
                    chunks[chunkIndex] = data.list,
                    callback()
                },
                onFail: ()=>!0
            })
        }
    }
    ,
    513642: (e,t,i)=>{
        i.d(t, {
            onAudioAddedToPlaylist: ()=>l
        });
        var s = i(795558)
          , o = i(95432)
          , a = i(82161);
        function l(e, t, i, l) {
            (0,
            o.getAudioPlayer)().getPlaylist(AudioPlaylist.TYPE_PLAYLIST, e, t).pushAudio(l, 0),
            (0,
            a.each)((0,
            s.geByClass)(`_audio_pl_ ${e}_ ${t}`), ((e,t)=>{
                (0,
                s.domReplaceEl)(t, (0,
                s.se)(i))
            }
            ))
        }
    }
    ,
    211137: (e,t,i)=>{
        function s(e, t) {
            let i = t.getAccessHash();
            cur.chooseMedia("audio_playlist", t.getOwnerId() + "_" + t.getPlaylistId() + (i ? ":" + i : ""), {
                id: t.getPlaylistId(),
                ownerId: t.getOwnerId(),
                coverUrl: t.getCoverUrl(),
                gridCovers: t.getGridCovers(),
                title: t.getTitle(),
                authorName: t.getAuthorName(),
                authorHref: t.getAuthorHref(),
                accessHash: t.getAccessHash()
            })
        }
        i.d(t, {
            onPlaylistChoose: ()=>s
        })
    }
    ,
    358422: (e,t,i)=>{
        i.d(t, {
            showAudioPlaylist: ()=>g
        });
        var s = i(795558)
          , o = i(9480)
          , a = i(301230)
          , l = i(95432)
          , r = i(29271)
          , n = i(584356)
          , d = i(82161)
          , u = i(953908)
          , _ = i(514986)
          , c = i(134540)
          , h = i(714865)
          , p = i(839470)
          , y = i(399490);
        function g(e, t, i, g, A, P) {
            if (cur.apLayer)
                return (0,
                u.cancelEvent)(A);
            if (vk.widget)
                return !0;
            if (A && (A.metaKey && a.browser.mac || A.ctrlKey))
                return;
            if ((0,
            p.partConfigEnabled)("audio_playlist_redesign_web"))
                return y.AudioPlaylistModalController.ensure().open({
                    id: t,
                    ownerId: e
                }),
                (0,
                u.cancelEvent)(A);
            let f = null;
            return window.Photoview && window.cur && cur.pvShown && (f = (0,
            d.clone)(nav.objLoc),
            Photoview.hide(!0)),
            (0,
            n.boxRefreshCoords)(boxLoader),
            (0,
            s.show)(boxLoader),
            (0,
            s.show)(boxLayerWrap),
            window.stManager.add([window.jsc("web/auto_list.js"), "audio.css"], (function() {
                const a = (0,
                l.getAudioPlayer)().getPlaylist(AudioPlaylist.TYPE_PLAYLIST, e, t, i);
                let p, y;
                function A(e) {
                    boxQueue.hideAll(),
                    cur.apLayerAutoList && (cur.apLayerAutoList.destroy(),
                    cur.apLayerAutoList = null),
                    layers.wraphide(window.audioPlaylistLayerWrap),
                    layers.fullhide = !1,
                    p && (0,
                    u.removeEvent)(window.audioPlaylistLayerWrap, "click", p),
                    y && (0,
                    u.removeEvent)(document.body, "keydown", y),
                    delete cur.apLayer,
                    delete cur.apLayerPlaylistId,
                    (0,
                    s.removeClass)(layerBG, "ap_layer_bg_dark"),
                    f ? nav.change(f) : nav.change({
                        z: !1
                    }),
                    layerQueue.pop()
                }
                a.setContext(g),
                a.setForceReload(!0),
                a.setFromId(cur.oid),
                a.loadAll((function(a, E) {
                    if ((0,
                    s.hide)(boxLoader),
                    (0,
                    s.hide)(boxLayerWrap),
                    E) {
                        let e = r.getLang("audio_error_deleted_playlist_box").split("/");
                        return new _.MessageBox({
                            title: e[0]
                        }).content(e[1]).setButtons(r.getLang("global_close"), (function() {
                            (0,
                            n.curBox)().hide(),
                            f && nav.change(f)
                        }
                        )).show(),
                        void nav.setLoc((0,
                        d.extend)(nav.objLoc, {
                            z: !1
                        }))
                    }
                    let m = (0,
                    d.extend)(nav.objLoc, {
                        z: "audio_playlist" + e + "_" + t + (i ? "/" + i : "")
                    });
                    nav.setLoc(m),
                    window.audioPlaylistLayerWrap || (window.audioPlaylistLayerWrap = (0,
                    s.se)('<div class="ap_layer_wrap"></div>'),
                    document.body.appendChild(window.audioPlaylistLayerWrap));
                    window.audioPlaylistLayerWrap.innerHTML = "";
                    const w = a && a.getAudiosList ? a.getAudiosList().length : 0
                      , v = a.isBlocked && a.isBlocked();
                    let I = (0,
                    h.getPlaylistUrl)(a.getOwnerId(), a.getPlaylistId(), a.getAccessHash())
                      , C = (0,
                    d.getTemplate)("audio_playlist_snippet", {
                        title: a.getTitle(),
                        subTitle: a.getSubtitle(),
                        description: a.getDescription(),
                        coverStyle: a.getCoverUrl() ? "background-image:url('" + a.getCoverUrl() + "'); background-size: cover;" : "",
                        authorLine: a.getAuthorLine(),
                        infoLine1: a.getInfoLine1(),
                        infoLine2: a.getInfoLine2(),
                        id: a.getPlaylistId(),
                        ownerId: a.getOwnerId(),
                        href: I,
                        addCls: a.getAddClasses(),
                        followHash: a.getFollowHash(),
                        accessHash: a.getAccessHash(),
                        editHash: a.getEditHash(),
                        deleteHash: a.getDeleteHash(),
                        replaceHash: a.getReplaceHash(),
                        gridCovers: a.getGridCovers(),
                        type: a.getType(),
                        context: g,
                        followButtonText: a.isFollowed() ? r.getLang("audio_playlist_btn_added") : r.getLang("audio_playlist_btn_add")
                    });
                    if (cur.apLayer = (0,
                    s.se)(`\n        <div class="ap_layer">\n          <div class="ap_layer__content">\n            ${C}\n          </div>\n          <div class="ap_layer__close _ap_layer__close"></div>\n        </div>\n      `),
                    v) {
                        (0,
                        s.geByClass1)("audio_pl_snippet__body", cur.apLayer).innerHTML = (0,
                        d.getTemplate)("playlist_snippet_stub")
                    }
                    window.audioPlaylistLayerWrap.appendChild(cur.apLayer),
                    (0,
                    u.addEvent)(window.audioPlaylistLayerWrap, "click", p = function(e) {
                        e.target != window.audioPlaylistLayerWrap && e.target != (0,
                        s.geByClass1)("_ap_layer__close", cur.apLayer) || layers && layers.fullhide && layers.fullhide()
                    }
                    ),
                    (0,
                    u.addEvent)(document.body, "keydown", y = function(e) {
                        if (27 == e.keyCode)
                            return layers && layers.fullhide && layers.fullhide(),
                            (0,
                            u.cancelEvent)(e)
                    }
                    ),
                    layerQueue.push(),
                    layerQueue.hide(),
                    boxQueue.hideAll(),
                    layers.wrapshow(window.audioPlaylistLayerWrap, .7),
                    (0,
                    s.addClass)(layerBG, "ap_layer_bg_dark");
                    const T = (0,
                    s.geByClass1)("_audio_pl_snippet__list", cur.apLayer)
                      , b = o.AudioUtils.getAlbumParts(a);
                    let L = 0;
                    w && !v && (cur.apLayerAutoList = new c.default(T,{
                        scrollNode: window.audioPlaylistLayerWrap,
                        onNeedRows: function(e, t) {
                            let i = []
                              , s = a.getAudiosList();
                            for (let e = t -= L; e < t + 30; e++) {
                                const t = s[e];
                                if (!t)
                                    break;
                                if (b && b.length && b[0].offset === e) {
                                    const e = b.shift();
                                    L++,
                                    i.push(o.AudioUtils.drawAlbumPartRow(e.number))
                                }
                                i.push(o.AudioUtils.drawAudio(t))
                            }
                            e(i)
                        }
                    }));
                    (0,
                    n.boxRefreshCoords)(cur.apLayer),
                    (0,
                    l.getAudioPlayer)().updateCurrentPlaying(),
                    layers.fullhide = A,
                    cur.apLayerPlaylistId = [e, t],
                    P && P()
                }
                ))
            }
            )),
            !1
        }
    }
    ,
    589377: (e,t,i)=>{
        i.d(t, {
            showPlaylistInRecoms: ()=>l
        });
        var s = i(381085)
          , o = i(29271)
          , a = i(584356);
        function l(e, t, i) {
            ajax.post("al_audio.php?act=show_playlist_in_recoms", {
                owner_id: e,
                playlist_id: t,
                access_hash: i
            }, {
                onDone() {
                    (0,
                    a.showDoneBox)(o.getLang("audio_playlist_recoms_was_showed"));
                    let s = document.getElementsByClassName("ui_actions_menu_item playlist_recoms_hide_or_show")[0];
                    s.innerHTML = o.getLang("audio_playlist_recoms_hide"),
                    s.setAttribute("onclick", "AudioUtils.hidePlaylistFromRecoms(" + e + ", " + t + ", '" + i + "');");
                    for (let e of ["audio_search", "audio_search_layer"]) {
                        let t = document.getElementById(e);
                        if (t) {
                            window.currentAudioPage(t).catalogController.currentSection.reloadBlock("recommended_playlists")
                        }
                    }
                },
                onFail(e) {
                    (0,
                    s.showErrorBox)(e || o.getLang("global_unknown_error"))
                }
            })
        }
    }
    ,
    248074: (e,t,i)=>{
        i.d(t, {
            showPlaylistsChooser: ()=>u
        });
        var s = i(795558)
          , o = i(9480)
          , a = i(29271)
          , l = i(514986)
          , r = i(82161)
          , n = i(589806)
          , d = i(984133);
        function u(e, t, i, u, _, c, h) {
            let p = i.playlists
              , y = i.newPlaylistHash
              , g = i.morePlaylists;
            o.AudioUtils.copiedToPlaylistAudios = o.AudioUtils.copiedToPlaylistAudios || {},
            o.AudioUtils.copiedToPlaylistAudiosHashes = o.AudioUtils.copiedToPlaylistAudiosHashes || {};
            let A = t
              , P = (0,
            s.se)((0,
            s.rs)(o.AudioUtils.AUDIO_ROW_ACTION_ROW_ITEM, ["pl_new", 0, a.getLang("audio_add_to_new_pl"), "audio_row__action_playlist"]));
            if ((0,
            s.domInsertAfter)(P, A),
            A = P,
            P.addEventListener("click", (()=>{
                o.AudioUtils.editPlaylist(u, !1, "edit", {
                    addAudio: c,
                    newPlaylistHash: y
                })
            }
            )),
            (0,
            r.each)(p, ((e,t)=>{
                let i = !0
                  , a = t[0] + "_" + t[1] + "_" + _.fullId
                  , l = o.AudioUtils.copiedToPlaylistAudios[a]
                  , u = "audio_row__action_playlist";
                (t[3] || l) && (i = !1,
                u += " audio_row__more_playlist_added");
                let c = (0,
                s.se)((0,
                s.rs)(o.AudioUtils.AUDIO_ROW_ACTION_ROW_ITEM, ["pl_" + t[0] + "_" + t[1], 0, t[2], u]));
                (0,
                s.domInsertAfter)(c, A),
                A = c;
                let p = !1;
                c.addEventListener("click", (()=>{
                    if (p)
                        return;
                    p = !0;
                    let e = _.ownerId
                      , l = _.id
                      , u = o.AudioUtils.copiedToPlaylistAudios[a];
                    u && (u = u.split("_"),
                    e = u[0],
                    l = u[1]),
                    i && (o.AudioUtils.copiedToPlaylistAudiosHashes[a] = t[4]),
                    ajax.post("al_audio.php", {
                        act: "add_audio_to_playlist",
                        hash: t[4],
                        playlist_id: t[1],
                        playlist_owner_id: t[0],
                        audio_owner_id: e,
                        audio_id: l,
                        do_add: (0,
                        r.intval)(i)
                    }, {
                        onDone: (e,s,l)=>{
                            (0,
                            d.onAdditionalEvent)(h, _, {
                                type: i ? n.TYPE_ADDED : n.TYPE_REMOVED,
                                subtype: n.SUBTYPE_PLAYLIST
                            }),
                            o.AudioUtils.copiedToPlaylistAudios[a] = !!i && l,
                            t[4] = i ? e : o.AudioUtils.copiedToPlaylistAudiosHashes[a],
                            i = !i,
                            p = !1
                        }
                        ,
                        onFail: ()=>!0
                    }),
                    (0,
                    s.toggleClass)(c, "audio_row__more_playlist_added", i)
                }
                ))
            }
            )),
            g) {
                let e = (0,
                s.se)((0,
                s.rs)(o.AudioUtils.AUDIO_ROW_ACTION_ROW_ITEM, ["pl_more", 0, a.getLang("audio_row_show_all_playlists"), "audio_row__action_playlist"]));
                e.addEventListener("click", (()=>{
                    (0,
                    l.showBox)("al_audio.php?act=more_playlists_add", {
                        owner_id: u,
                        audio_owner_id: _.ownerId,
                        audio_id: _.id
                    }, {
                        params: {
                            bodyStyle: "padding: 0px",
                            width: 560
                        }
                    })
                }
                )),
                (0,
                s.domInsertAfter)(e, A),
                A = e
            }
            e.updatePosition()
        }
    }
    ,
    411892: (e,t,i)=>{
        i.d(t, {
            turnPlaylistDiscover: ()=>o
        });
        var s = i(584356);
        function o(e, t) {
            const i = {
                act: "turn_playlist_discover",
                owner_id: e,
                playlist_id: t
            };
            ajax.post("al_audio.php", i, {
                onDone: e=>{
                    (0,
                    s.showDoneBox)(e)
                }
            })
        }
    }
    ,
    941286: (e,t,i)=>{
        i.d(t, {
            deleteEpisode: ()=>o
        });
        var s = i(576566);
        function o(e, t) {
            (0,
            s.isPodcast)(t) && window.stManager.add([window.jsc("web/podcast.js")], (function() {
                Podcast.deleteEpisode(t.fullId, t.deleteHash)
            }
            ))
        }
    }
    ,
    86855: (e,t,i)=>{
        i.d(t, {
            editEpisode: ()=>o
        });
        var s = i(576566);
        function o(e, t) {
            (0,
            s.isPodcast)(t) && (cur.podcastEditData = {
                audioId: t.fullId
            },
            window.stManager.add([window.jsc("web/podcast.js")], (function() {
                Podcast.edit(t.fullId)
            }
            )))
        }
    }
    ,
    851343: (e,t,i)=>{
        i.d(t, {
            faveEpisode: ()=>l
        });
        var s = i(576566)
          , o = i(550536)
          , a = i(95432);
        function l(e, t) {
            if (!e || !(0,
            s.isPodcast)(t))
                return;
            const i = (0,
            o.getAudioExtra)(t).faveHash;
            (0,
            a.bookmarkPodcast)(e.querySelector(".audio_row__action_fave"), t.fullId, i)
        }
    }
    ,
    831386: (e,t,i)=>{
        i.d(t, {
            isPrivatePodcast: ()=>a
        });
        var s = i(576566)
          , o = i(550536);
        function a(e) {
            return !(!(0,
            s.isPodcast)(e) || !(0,
            o.getAudioExtra)(e).private)
        }
    }
    ,
    711766: (e,t,i)=>{
        i.d(t, {
            openEpisode: ()=>l
        });
        var s = i(95432)
          , o = i(595509)
          , a = i(576566);
        function l(e, t) {
            t = (0,
            o.audioTupleToAudioObject)(t),
            (0,
            a.isPodcast)(t) && (0,
            s.showPodcast)(e, t.fullId, null, "audio")
        }
    }
    ,
    782469: (e,t,i)=>{
        i.r(t),
        i.d(t, {
            ACTION_HEARTBEAT: ()=>r,
            ACTION_PAUSE: ()=>a,
            ACTION_PLAY: ()=>o,
            ACTION_SEEK: ()=>l,
            ACTION_TIME_MARKER: ()=>n,
            log: ()=>d
        });
        var s = i(576566);
        const o = "play"
          , a = "pause"
          , l = "seek"
          , r = "heartbeat"
          , n = "time_marker";
        function d(e, t) {
            const i = t.audio;
            (0,
            s.isPodcast)(i) && window.stManager.add([window.jsc("web/podcast.js")], (function() {
                Podcast.log(e, t)
            }
            ))
        }
    }
    ,
    765746: (e,t,i)=>{
        i.d(t, {
            restoreEpisode: ()=>o
        });
        var s = i(576566);
        function o(e, t) {
            (0,
            s.isPodcast)(t) && window.stManager.add([window.jsc("web/podcast.js")], (function() {
                Podcast.restoreEpisode(t.fullId, t.editHash)
            }
            ))
        }
    }
    ,
    184083: (e,t,i)=>{
        function s(e, t) {
            cur.audioPage && cur.audioPage.showRecoms(!1, t.fullId)
        }
        i.d(t, {
            showRecoms: ()=>s
        })
    }
    ,
    215527: (e,t,i)=>{
        i.d(t, {
            audioSearchPerformer: ()=>o
        });
        var s = i(664988);
        function o(e, t, i) {
            let o = !!window.AudioPage && currentAudioPage(e)
              , a = window.AudioPage && currentAudioPage(e) || cur.audioPage;
            layers.fullhide && layers.fullhide(!0),
            setTimeout((function() {
                o && a ? (t = (0,
                s.unclean)(t).replace(/<em>|<\/em>/g, ""),
                nav.change({
                    q: t,
                    performer: 1
                }, i, {
                    searchPerformer: !0,
                    nav: !0,
                    isLayer: o.isLayer()
                })) : nav.go(e, i)
            }
            ), 50)
        }
    }
    ,
    984133: (e,t,i)=>{
        i.d(t, {
            onAdditionalEvent: ()=>u
        });
        var s = i(434788)
          , o = i(589806)
          , a = i(132247)
          , l = i(95432)
          , r = i(488640)
          , n = i(515896)
          , d = i(595509);
        function u(e, t, i={}) {
            const u = new o.AudioStats(new a.WebPlayerAdapter((0,
            l.getAudioPlayer)()))
              , _ = t && t.context || e && (0,
            r.getContext)(e) || ""
              , c = (0,
            l.getAudioPlayer)();
            let h, p = c.getCurrentAudio() ? (0,
            d.audioTupleToAudioObject)(c.getCurrentAudio()) : null;
            h = p && t.fullId === p.fullId ? c.getCurrentPlaylist() : (0,
            n.getContextPlaylist)(e).playlist;
            const y = h ? h.getFullId() : ""
              , g = (0,
            s._)({}, t, {
                context: _,
                playlistId: y
            }, i);
            u.sendCurrentAudioEvent({
                type: g.type,
                subtype: i.subtype || g.subtype || u.getPlaySubtype(),
                ownerId: g.ownerId,
                audioId: g.id,
                trackCode: g.trackCode,
                state: u.playerAdapter.getState(),
                ref: window.cur && vk.widget ? String(cur.widgetReferrer || "").substring(0, 20) : "",
                context: g.context,
                playlistId: g.playlistId
            })
        }
    }
    ,
    442954: (e,t,i)=>{
        i.d(t, {
            addAudio: ()=>v
        });
        var s = i(11010)
          , o = i(599809)
          , a = i(795558)
          , l = i(9480)
          , r = i(95432)
          , n = i(584356)
          , d = i(82161)
          , u = i(866310)
          , _ = i(589806)
          , c = i(984133)
          , h = i(515896)
          , p = i(664988)
          , y = i(84543)
          , g = i(29271)
          , A = i(363444)
          , P = i(953908)
          , f = i(514986)
          , E = i(839470)
          , m = i(945618)
          , w = i(508258);
        function v(e, t, i=(()=>{}
        ), s="") {
            if (cur.viewAsBox)
                return cur.viewAsBox();
            if (vk && vk.widget && !vk.id && window.Widgets)
                return Widgets.oauth(),
                !1;
            function v(t) {
                return (0,
                a.domData)(e, "in-progress", (0,
                d.intval)(t))
            }
            if ((0,
            d.intval)((0,
            a.domData)(e, "in-progress")))
                return;
            if (v(!0),
            !(t = t || l.AudioUtils.getAudioFromEl(e, !0)))
                return;
            const C = window.AudioPage && currentAudioPage(e)
              , T = (0,
            m.ensureMyMusicService)();
            let b = C && C.getOwnerId() < 0 && C.canAddToGroup() && C.getOwnerId() !== t.ownerId ? -C.getOwnerId() : 0
              , L = l.AudioUtils.getAddRestoreInfo()
              , D = L[t.fullId];
            D && L[D.addedFullId] && (D = null);
            let O = (0,
            a.geByClass1)("_audio_row_" + t.fullId);
            O = O != e && O;
            let S = C && C.getPageCurrentPlaylist();
            var k;
            const M = null != (k = (0,
            h.getContextPlaylist)(e)) ? k : {
                context: s
            };
            let U = {
                group_id: b,
                audio_owner_id: t.ownerId,
                audio_id: t.id,
                hash: t.addHash,
                from: M && M.context || "",
                track_code: t.trackCode
            };
            const x = (0,
            E.partConfigEnabled)("audio_longtap_web");
            if (D) {
                if ("recom_hidden" == D.state)
                    C && (C.restoreRecommendation(e),
                    v(!1)),
                    l.AudioUtils.onRowOver(e, !1, !0);
                else if ("deleted" == D.state)
                    A.ajax.post("al_audio.php", {
                        act: "restore_audio",
                        oid: t.ownerId,
                        aid: t.id,
                        hash: t.restoreHash,
                        track_code: t.trackCode
                    }, {
                        onDone: function() {
                            I(M.playlist, t).then((i=>{
                                (0,
                                c.onAdditionalEvent)(e, t, {
                                    type: _.TYPE_ADDED,
                                    trackCode: i
                                })
                            }
                            )),
                            v(!1)
                        },
                        onFail: ()=>(v(!1),
                        !0)
                    }),
                    (0,
                    a.removeClass)(e, "audio_row__deleted"),
                    delete L[t.fullId],
                    l.AudioUtils.onRowOver(e, !1, !0);
                else if ("added" == D.state) {
                    const i = ()=>{
                        I(M.playlist, t).then((i=>{
                            (0,
                            c.onAdditionalEvent)(e, t, {
                                type: _.TYPE_REMOVED,
                                trackCode: i
                            })
                        }
                        ));
                        const i = (0,
                        r.getAudioPlayer)();
                        i && (i.getPlaylist(AudioPlaylist.TYPE_PLAYLIST, b ? -b : vk.id, AudioPlaylist.DEFAULT_PLAYLIST_ID).removeAudio(D.addedFullId),
                        i.notify(u.events.MUSIC_AUDIOS_DELETE, t, {
                            audioElement: e
                        })),
                        v(!1)
                    }
                      , s = ()=>(v(!1),
                    !0);
                    if (x && !D.audio.deleteHash) {
                        const {id: e, ownerId: t} = D.audio
                          , a = (0,
                        w.getAudioFullId)({
                            id: e,
                            ownerId: t
                        })
                          , l = T.$identitiesMap.getState()[a].id
                          , r = window.vk.id;
                        l && r && (0,
                        o.api)("audio.delete", {
                            audio_id: l,
                            owner_id: r
                        }).then(i).catch(s)
                    } else
                        A.ajax.post("al_audio.php", {
                            act: "delete_audio",
                            oid: D.audio.ownerId,
                            aid: D.audio.id,
                            hash: D.audio.deleteHash,
                            track_code: t.trackCode
                        }, {
                            onDone: i,
                            onFail: s
                        });
                    if ((0,
                    a.removeClass)(e, "audio_row__added"),
                    x) {
                        const e = {
                            id: t.id,
                            ownerId: t.ownerId
                        }
                          , i = (0,
                        w.getAudioFullId)(e)
                          , s = T.$identitiesMap.getState()[i];
                        T.removeFromStore({
                            oldIdentity: e,
                            newIdentity: s
                        })
                    }
                    O && (0,
                    a.removeClass)(O, "audio_row__added"),
                    delete L[t.fullId],
                    (0,
                    r.getAudioPlayer)().notify(u.events.REMOVED, t.fullId, D.addedFullId)
                }
            } else
                A.ajax.post("al_audio.php?act=add", U, {
                    onDone: function(s, o) {
                        if (I(M.playlist, t).then((i=>{
                            (0,
                            c.onAdditionalEvent)(e, t, {
                                type: _.TYPE_ADDED,
                                trackCode: i
                            })
                        }
                        )),
                        s) {
                            let n = s[l.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID] + "_" + s[l.AudioUtils.AUDIO_ITEM_INDEX_ID];
                            L[t.fullId] = {
                                state: "added",
                                addedFullId: n,
                                audio: l.AudioUtils.audioTupleToAudioObject(s)
                            },
                            x && T.addToStore({
                                oldIdentity: {
                                    id: t.id,
                                    ownerId: t.ownerId
                                },
                                newIdentity: {
                                    id: s[l.AudioUtils.AUDIO_ITEM_INDEX_ID],
                                    ownerId: s[l.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID]
                                }
                            }),
                            (0,
                            r.getAudioPlayer)().notify(u.events.MUSIC_AUDIOS_ADD, t, {
                                audioElement: e
                            }),
                            (0,
                            p.isFunction)(i) && i(),
                            function(e, t) {
                                var i, s;
                                if (!t || !t.id)
                                    return;
                                const o = null == (s = e) || null == (i = s.parentElement) ? void 0 : i.querySelector(".audio_page_player_share");
                                if (!o)
                                    return;
                                const l = (0,
                                a.se)(`\n    <div class="ta_l">\n      <div>${t.text}</div>\n    </div>\n `)
                                  , r = ()=>{
                                    window.ajax.post("al_index.php", {
                                        act: "help_hints_hide",
                                        hash: t.hash,
                                        hint_id: t.id
                                    })
                                }
                                ;
                                (0,
                                P.addEvent)(l, "click", r);
                                const n = new y.ElementTooltip(o,{
                                    appendToParent: !0,
                                    cls: "feature_intro_tt feature_intro_blue_tt feature_intro_blue_tt--heightSmall",
                                    content: l,
                                    offset: [0, 10],
                                    align: y.ElementTooltip.ALIGN_RIGHT,
                                    onHide: r
                                });
                                n.show(),
                                o.addEventListener("mouseenter", (()=>{
                                    n.hide()
                                }
                                ))
                            }(e, o)
                        }
                        v(!1)
                    },
                    onFail: function(t) {
                        return t && new f.MessageBox({
                            title: g.getLang("global_error")
                        }).content(t).setButtons(g.getLang("global_close"), (()=>(0,
                        n.curBox)().hide())).show(),
                        (0,
                        a.removeClass)(e, "audio_row__added"),
                        v(!1),
                        !0
                    }
                }),
                (0,
                a.addClass)(e, "audio_row__added"),
                O && (0,
                a.addClass)(O, "audio_row__added"),
                (0,
                r.getAudioPlayer)().notify(u.events.ADDED, t.fullId),
                C && S && C.onUserAction(t, S)
        }
        function I(e, t) {
            return C.apply(this, arguments)
        }
        function C() {
            return (C = (0,
            s._)((function*(e, t) {
                var i, s;
                if (!e)
                    return t.trackCode;
                return (null == (s = yield e.getAudioIds()) || null == (i = s.find((e=>{
                    var i;
                    return (null == (i = e) ? void 0 : i.audio_raw_id) === t.fullId
                }
                ))) ? void 0 : i.track_code) || t.trackCode
            }
            ))).apply(this, arguments)
        }
    }
    ,
    979827: (e,t,i)=>{
        i.d(t, {
            addAudioToOwner: ()=>o
        });
        var s = i(953908);
        function o(e, t) {
            return window.onAudioPageLoaded = function() {
                return this.uploadAudio({})
            }
            ,
            nav.go("audios" + e),
            (0,
            s.cancelEvent)(t)
        }
    }
    ,
    631384: (e,t,i)=>{
        i.d(t, {
            cancelReplacement: ()=>o
        });
        var s = i(795558);
        function o(e, t, i) {
            ajax.post("al_audio.php", {
                act: "cancel_replacement",
                hash: t,
                audio_id: e
            }, {
                onFail: ()=>!0
            }),
            (0,
            s.re)(i)
        }
    }
    ,
    725873: (e,t,i)=>{
        i.d(t, {
            chooseAudioBox: ()=>a
        });
        var s = i(795558)
          , o = i(953908);
        function a(e, t, i) {
            if (void 0 !== e.selected)
                cur.lastAddMedia.unchooseMedia(e.selected),
                e.selected = void 0,
                (0,
                s.removeClass)((0,
                s.domPN)(e), "audio_selected"),
                e.innerHTML = t.labels.add;
            else {
                let i = cur.attachCount && cur.attachCount() || 0;
                cur.chooseMedia("audio", t.owner_id + "_" + t.id, t.info),
                (!cur.attachCount || cur.attachCount() > i) && cur.lastAddMedia && (e.selected = cur.lastAddMedia.chosenMedias.length - 1,
                (0,
                s.addClass)((0,
                s.domPN)(e), "audio_selected"),
                e.innerHTML = t.labels.cancel)
            }
            return (0,
            o.cancelEvent)(i)
        }
    }
    ,
    785401: (e,t,i)=>{
        i.d(t, {
            claim: ()=>l
        });
        var s = i(795558)
          , o = i(620288)
          , a = i(595509);
        function l(e, t, i) {
            (0,
            s.addClass)(t, "audio_moder_claimed"),
            (0,
            o.onRowOver)(t, !1, !0),
            e = (0,
            a.audioTupleToAudioObject)(e),
            window.ajax.post("al_claims.php", {
                act: "a_claim",
                claim: i,
                type: "audio",
                id: e.id,
                owner_id: e.ownerId
            })
        }
    }
    ,
    47163: (e,t,i)=>{
        i.d(t, {
            deleteAudio: ()=>p
        });
        var s = i(795558)
          , o = i(95432)
          , a = i(82161)
          , l = i(725296)
          , r = i(514986)
          , n = i(29271)
          , d = i(589806)
          , u = i(984133)
          , _ = i(9480)
          , c = i(515896)
          , h = i(866310);
        function p(e, t, i, p, y) {
            function g(t) {
                return (0,
                s.domData)(e, "in-progress", (0,
                a.intval)(t))
            }
            if (window.tooltips && tooltips.hideAll(),
            (0,
            a.intval)((0,
            s.domData)(e, "in-progress")))
                return;
            g(!0);
            let A = !1;
            t.isClaimed && (A = !0);
            let P = _.AudioUtils.getAddRestoreInfo()
              , f = P[t.fullId];
            if (f && f.deleteAll)
                (0,
                r.showFastBox)({
                    title: n.getLang("audio_delete_all_title"),
                    dark: 1,
                    onHide: ()=>g(!1)
                }, f.deleteConfirmMsg || "", n.getLang("global_delete"), (function(e) {
                    let t = (0,
                    a.extend)({
                        act: "delete_all"
                    }, f.deleteAll);
                    ajax.post("al_audio.php", t, {
                        showProgress: ()=>(0,
                        l.lockButton)(e),
                        onDone: function() {
                            let e = (0,
                            o.getAudioPlayer)().getPlaylist(AudioPlaylist.TYPE_PLAYLIST, f.deleteAll.from_id, AudioPlaylist.DEFAULT_PLAYLIST_ID);
                            (0,
                            o.getAudioPlayer)().deletePlaylist(e),
                            nav.reload()
                        },
                        onFail: ()=>!0
                    })
                }
                ), n.getLang("global_cancel"));
            else {
                if (A ? (0,
                s.re)(e) : (0,
                s.addClass)(e, "audio_row__deleted"),
                y) {
                    ajax.post("al_audio.php", {
                        act: "remove_listened",
                        audio_id: t.id,
                        audio_owner_id: t.ownerId,
                        hash: t.actionHash
                    }, {
                        onFail: ()=>!0
                    }),
                    (0,
                    s.re)(e);
                    let i = (0,
                    o.getAudioPlayer)().getCurrentPlaylist();
                    i && i.getType() == AudioPlaylist.TYPE_RECOM && i.getAlbumId() == _.AudioUtils.AUDIO_RECOMS_TYPE_LISTENED && i.removeAudio(t.fullId)
                } else if (p) {
                    let i = _.AudioUtils.getAudioExtra(t).recom
                      , s = null;
                    const a = (0,
                    c.getContextPlaylist)(e);
                    a && (s = a.playlist && a.playlist.getAlbumId());
                    let l = {
                        act: "hide_recommendation",
                        hash: i.hash,
                        audio_id: t.fullId,
                        playlist_id: s
                    };
                    nav.objLoc.audio_id && (l.recommendation_type = "query"),
                    ajax.post("al_audio.php", l, {
                        onDone: ()=>{
                            (0,
                            u.onAdditionalEvent)(e, t, {
                                type: d.TYPE_RECOMMENDATION_REMOVED
                            }),
                            g(!1)
                        }
                        ,
                        onFail: ()=>(g(!1),
                        !0)
                    }),
                    P[t.fullId] = {
                        state: "recom_hidden"
                    };
                    let r = (0,
                    o.getAudioPlayer)().getCurrentPlaylist();
                    r && r.getType() == AudioPlaylist.TYPE_RECOM && (P[t.fullId].removedCurrentPos = r.removeAudio(t))
                } else
                    ajax.post("al_audio.php", {
                        act: "delete_audio",
                        oid: t.ownerId,
                        aid: t.id,
                        hash: t.deleteHash,
                        restore: 1,
                        track_code: t.trackCode
                    }, {
                        onDone: (i,s)=>{
                            (0,
                            u.onAdditionalEvent)(e, t, {
                                type: d.TYPE_REMOVED
                            }),
                            A || g(!1),
                            P[t.fullId] = {
                                state: "deleted",
                                deleteAll: i,
                                deleteConfirmMsg: s
                            },
                            A && _.AudioUtils.deleteDeletedAudios(),
                            (0,
                            o.getAudioPlayer)().notify(h.events.MUSIC_AUDIOS_DELETE, t),
                            _.AudioUtils.onRowOver(e, !1, !0)
                        }
                        ,
                        onFail: ()=>!0
                    });
                _.AudioUtils.onRowOver(e, !1, !0)
            }
        }
    }
    ,
    328095: (e,t,i)=>{
        i.d(t, {
            deleteCurrentAudio: ()=>a
        });
        var s = i(795558)
          , o = i(95432);
        function a(e, t) {
            window.tooltips && "function" == typeof window.tooltips.hideAll && window.tooltips.hideAll(e);
            const i = (0,
            o.getAudioPlayer)()
              , a = i.getPlaylistQueue();
            a && (a.removeAudio(t.fullId),
            i.saveStateCurrentPlaylist()),
            (0,
            s.re)(e)
        }
    }
    ,
    460992: (e,t,i)=>{
        i.d(t, {
            deleteDeletedAudios: ()=>l
        });
        var s = i(82161)
          , o = i(95432)
          , a = i(146274);
        function l() {
            (0,
            s.each)((0,
            a.getAddRestoreInfo)(), ((e,t)=>{
                "deleted" !== t.state && "recom_hidden" !== t.state || (0,
                o.getAudioPlayer)().deleteAudioFromAllPlaylists(e)
            }
            ))
        }
    }
    ,
    243562: (e,t,i)=>{
        i.d(t, {
            deleteListenedAudio: ()=>o
        });
        var s = i(47163);
        function o(e, t) {
            (0,
            s.deleteAudio)(e, t, !1, !1, !0)
        }
    }
    ,
    237500: (e,t,i)=>{
        i.d(t, {
            deleteRecomsAudio: ()=>o
        });
        var s = i(47163);
        function o(e, t) {
            (0,
            s.deleteAudio)(e, t, !1, !0)
        }
    }
    ,
    735784: (e,t,i)=>{
        i.d(t, {
            drawAudio: ()=>h,
            getDurationMod: ()=>c
        });
        var s = i(595509)
          , o = i(9480)
          , a = i(58166)
          , l = i(82161)
          , r = i(672948)
          , n = i(258169);
        const d = 600
          , u = 3600
          , _ = 36e3;
        function c(e) {
            return e < d ? "s" : e < u ? "m" : e < _ ? "l" : "n"
        }
        function h(e, t) {
            var i;
            let d = JSON.parse((0,
            l.getTemplate)("audio_bits_to_cls"))
              , u = e[o.AudioUtils.AUDIO_ITEM_INDEX_FLAGS]
              , _ = [];
            for (let e = 0; e < 32; e++) {
                let t = 1 << e;
                u & t && _.push(d[t])
            }
            const h = (0,
            s.audioTupleToAudioObject)(e)
              , p = o.AudioUtils.isPodcast(e);
            p && (_.push("audio_podcast"),
            o.AudioUtils.isPrivatePodcast(e) && _.push("audio_podcast_private")),
            t && _.push(t);
            const y = e[o.AudioUtils.AUDIO_ITEM_INDEX_COVER_URL]
              , [g=""] = null == (i = y) ? void 0 : i.split(/(,(?!\d))/g).filter((e=>"," !== e));
            let A, P = o.AudioUtils.getAudioPerformers(e), f = e[o.AudioUtils.AUDIO_ITEM_INDEX_DURATION], E = (0,
            r.formatTime)(f), m = (0,
            l.clean)(JSON.stringify(e));
            try {
                const t = (0,
                l.getTemplate)("podcast_row", e);
                A = p && t ? t : (0,
                l.getTemplate)("audio_row", e)
            } catch (e) {
                return ""
            }
            let w = "";
            return h.hasTrackPage && (_.push("audio_has_track_page"),
            w = `/audio ${h.trackPageId}`),
            (0,
            n.isRadio)(h) && _.push("audio_row--radio"),
            A = A.replace(/%cls%/, (()=>_.join(" "))),
            A = A.replace(/%duration%/, (()=>E)),
            A = A.replace(/%serialized%/, (()=>m)),
            A = A.replace(/%cover_image%/, (()=>function(e, t) {
                let i = "";
                if (e)
                    i = `<img class='audio_row__cover' alt='${t}' src='${e}' loading='lazy' decoding='async' width='40' height='40' />`;
                else {
                    const {icon: e} = (0,
                    a.getIcon24Song)();
                    i = `<div class='audio_row__cover audio_row__without_cover'>${e}</div>`
                }
                return i
            }(g, h.title))),
            A = A.replace(/%performers%/, (()=>P)),
            A = A.replace(/%track_url%/, (()=>w)),
            A = A.replace(/%duration_mod%/, (()=>c(f))),
            A = A.replace(/%chart_info_position%/, (()=>{
                return (t = e[o.AudioUtils.AUDIO_ITEM_CHART_INFO_INDEX] && e[o.AudioUtils.AUDIO_ITEM_CHART_INFO_INDEX].position) ? `<div class="audio_row__position">${t}</div>` : "";
                var t
            }
            )),
            A = A.replace(/%chart_info_state%/, (()=>function(e) {
                let t = "";
                switch (e) {
                case 0:
                    t = "audio_row__state-new_release";
                    break;
                case 1:
                    t = "audio_row__state-no_changes";
                    break;
                case 2:
                    t = "audio_row__state-moved_up";
                    break;
                case 3:
                    t = "audio_row__state-moved_down";
                    break;
                case 4:
                    t = "audio_row__state-crown";
                    break;
                default:
                    t = ""
                }
                return t ? `<div class="audio_row__state ${t}"></div>` : ""
            }(e[o.AudioUtils.AUDIO_ITEM_CHART_INFO_INDEX] && e[o.AudioUtils.AUDIO_ITEM_CHART_INFO_INDEX].state))),
            A
        }
    }
    ,
    937148: (e,t,i)=>{
        i.d(t, {
            editAudio: ()=>o
        });
        var s = i(514986);
        function o(e, t, i) {
            (0,
            s.showBox)("al_audio.php", {
                act: "edit_audio_box",
                aid: t.fullId,
                force_edit_hash: i
            }, {
                params: {
                    width: "456px",
                    bodyStyle: "padding: 20px;",
                    hideButtons: 1
                },
                dark: 1
            })
        }
    }
    ,
    898793: (e,t,i)=>{
        i.d(t, {
            getActionIcon: ()=>g
        });
        var s = i(783905)
          , o = i(98914)
          , a = i(895679)
          , l = i(477929)
          , r = i(505335)
          , n = i(10532)
          , d = i(796645)
          , u = i(995022)
          , _ = i(942511)
          , c = i(323734)
          , h = i(448713)
          , p = i(180190);
        const y = {
            current_delete: (0,
            s.getIcon20Cancel)(),
            recoms_delete: (0,
            s.getIcon20Cancel)(),
            listened_delete: (0,
            s.getIcon20Cancel)(),
            delete: (0,
            s.getIcon20Cancel)(),
            restore_recoms: (0,
            o.getIcon20Add)(),
            more: (0,
            a.getIcon20More)(),
            edit: (0,
            l.getIcon20WriteOutline)(),
            recoms: (0,
            r.getIcon20Stars)(),
            lyrics: (0,
            n.getIcon20TextTtOutline)(),
            snippet: (0,
            d.getIcon20FlashOutline)()
        };
        function g(e) {
            const t = y[e];
            let i = "";
            if (t)
                i = A(t);
            else
                switch (e) {
                case "add":
                    i = A((0,
                    u.getIcon20Check)()) + A((0,
                    o.getIcon20Add)());
                    break;
                case "next":
                    i = `<div class="audio_row__icon--horizontal">${A((0,
                    _.getIcon20ListPlayOutline)()) + A((0,
                    c.getIcon20ListAddOutline)())}</div>`;
                    break;
                case "fave":
                    i = A((0,
                    h.getIcon24FavoriteOutline)()) + A((0,
                    p.getIcon24Favorite)())
                }
            return i
        }
        function A(e) {
            return `<div class="audio_row__icon audio_row__icon_ ${e.name}">${e.icon}</div>`
        }
    }
    ,
    146274: (e,t,i)=>{
        function s() {
            return window.audioAddRestoreInfo || (window.audioAddRestoreInfo = {}),
            window.audioAddRestoreInfo
        }
        i.d(t, {
            getAddRestoreInfo: ()=>s
        })
    }
    ,
    668226: (e,t,i)=>{
        i.d(t, {
            getAudioFromEl: ()=>a
        });
        var s = i(795558)
          , o = i(9480);
        function a(e, t) {
            e = (0,
            s.domClosest)("_audio_row", e);
            let i = (0,
            s.data)(e, "audio") || JSON.parse((0,
            s.domData)(e, "audio"));
            if (!i)
                return null;
            if (t) {
                i = o.AudioUtils.audioTupleToAudioObject(i),
                i.isDeleted = (0,
                s.hasClass)(e, "audio_row__deleted"),
                i.isCurrent = (0,
                s.hasClass)(e, o.AudioUtils.AUDIO_CURRENT_CLS),
                i.isPlaying = (0,
                s.hasClass)(e, o.AudioUtils.AUDIO_PLAYING_CLS),
                i.isFromCurrentPlaylist = !!(0,
                s.gpeByClass)("_audio_section__current", e),
                i.isFromAutoplay = !!(0,
                s.gpeByClass)("Autoplay--container", e),
                i.isNumeric = !!(0,
                s.gpeByClass)("audio_numeric", e),
                i.isWithCovers = !!(0,
                s.gpeByClass)("audio_w_covers", e),
                i.withInlinePlayer = !i.isWithCovers && !(0,
                s.gpeByClass)("audio_no_inline_player", e),
                i.isInSnippet = !!(0,
                s.gpeByClass)("_audio_pl_snippet__list", e),
                i.isInEditBox = !!(0,
                s.gpeByClass)("_audio_pl_edit_box", e),
                i.isInRecomsBlock = !!(0,
                s.gpeByClass)("_audio_recoms_blocks", e),
                i.isInFastChat = !!(0,
                s.gpeByClass)("fc_tab", e),
                i.isInAttach = !!(0,
                s.gpeByClass)("media_preview", e),
                i.isSetClaimed = (0,
                s.hasClass)(e, "audio_moder_claimed"),
                i.isPodcastListSnippet = (0,
                s.hasClass)(e, "podcast_list_snippet");
                const t = (0,
                s.gpeByClass)("_audio_pl", e);
                i.isCurrentAlbumSnippet = !!i.album && !!t && t.dataset.playlistId === `playlist_ ${i.album[0]}_ ${i.album[1]}`
            }
            return i
        }
    }
    ,
    289089: (e,t,i)=>{
        i.d(t, {
            onAudioChoose: ()=>r
        });
        var s = i(82161)
          , o = i(29271)
          , a = i(795558)
          , l = i(953908);
        function r(e, t, i, r) {
            if ((0,
            s.isUndefined)(t.selected)) {
                let e = cur.attachCount && cur.attachCount() || 0;
                const s = i.fullId + (i.accessKey ? "_" + i.accessKey : "");
                if (cur.chooseMedia("audio", s, r),
                (!cur.attachCount || cur.attachCount() > e) && cur.lastAddMedia) {
                    t.selected = cur.lastAddMedia.chosenMedias.length - 1,
                    (0,
                    a.addClass)((0,
                    a.domPN)(t), "audio_selected");
                    let e = (0,
                    a.getSize)(t)[0];
                    (0,
                    a.setStyle)(t, "width", e),
                    t.innerHTML = o.getLang("global_cancel")
                }
            } else
                cur.lastAddMedia.unchooseMedia(t.selected),
                t.selected = void 0,
                (0,
                a.removeClass)((0,
                a.domPN)(t), "audio_selected"),
                t.innerHTML = o.getLang("global_add_media");
            return (0,
            l.cancelEvent)(e)
        }
    }
    ,
    426120: (e,t,i)=>{
        i.d(t, {
            onRowLeave: ()=>o
        });
        var s = i(795558);
        function o(e) {
            (0,
            s.data)(e, "leaved", !0);
            let t = (0,
            s.data)(e, "tt");
            if (t && t.isShown())
                return;
            if (clearTimeout(window.audioRowHoverTO),
            !(0,
            s.data)(e, "actions"))
                return;
            let i = (0,
            s.geByClass1)("_audio_row__actions", e)
              , o = (0,
            s.geByClass1)("_audio_row__duration", e);
            (0,
            s.re)(i),
            (0,
            s.setStyle)(o, "visibility", "visible"),
            (0,
            s.data)(e, "actions", 0)
        }
    }
    ,
    620288: (__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{
        __webpack_require__.d(__webpack_exports__, {
            onRowOver: ()=>onRowOver
        });
        var _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(795558)
          , _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9480)
          , _web_lib_feature_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95432)
          , _shared_lib_langs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29271)
          , _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(953908)
          , _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82161)
          , _web_audio_player_track_getActionIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(898793)
          , _shared_user_user_env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(839470)
          , _web_audio_components_AudioLongtap_showAudioLongtapModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(302164);
        function onRowOver(audioEl, event, forceRedraw) {
            const longTapEnabled = (0,
            _shared_user_user_env__WEBPACK_IMPORTED_MODULE_7__.partConfigEnabled)("audio_longtap_web");
            if ((0,
            _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.hasClass)(audioEl, "podcast_list_snippet") || (0,
            _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.hasClass)(audioEl, "podcast_snippet__controls"))
                return;
            if ((0,
            _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.data)(audioEl, "leaved", !1),
            (0,
            _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.data)(audioEl, "actions") && !forceRedraw)
                return;
            if ((0,
            _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.hasClass)(audioEl, "no_extra"))
                return;
            clearTimeout(window.audioRowHoverTO);
            const ap = (0,
            _web_lib_feature_entries__WEBPACK_IMPORTED_MODULE_2__.getAudioPlayer)();
            window.audioRowHoverTO = setTimeout((()=>{
                window.tooltips && "function" == typeof window.tooltips.hideAll && window.tooltips.hideAll(audioEl);
                let audio = _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.getAudioFromEl(audioEl)
                  , audioObject = _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.getAudioFromEl(audioEl, !0);
                const playerUI = (0,
                _web_lib_feature_entries__WEBPACK_IMPORTED_MODULE_2__.getAudioPlayerUI)();
                let actions = []
                  , moreActions = []
                  , context = _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.getContextPlaylist(audioEl, !0)
                  , [sectionContext,blockContext] = _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.contextSplit(context)
                  , extra = _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.getAudioExtra(audioObject);
                if (context = sectionContext,
                audioObject.isDeleted)
                    if (_web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.isPodcast(audioObject))
                        actions.push(["add", _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.restoreEpisode, "", 'onmouseover="audioShowActionTooltip(this)"']);
                    else if ("recoms_recoms" === context)
                        actions.push(["restore_recoms", _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.addAudio, "", 'onmouseover="audioShowActionTooltip(this)"']);
                    else {
                        let e = _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.getAddRestoreInfo();
                        e[audioObject.fullId] && e[audioObject.fullId].deleteAll && actions.push(["delete", _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.deleteAudio, "", 'onmouseover="audioShowActionTooltip(this)"']),
                        actions.push(["add", _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.addAudio, "", 'onmouseover="audioShowActionTooltip(this)"'])
                    }
                else {
                    let actionsList = [!longTapEnabled && "next", "add", "share", "open_album", "add_to_playlist"];
                    if (extra.claim && nav.objLoc.claim || audioObject.isReplaceable)
                        actionsList = [];
                    else if (_web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.isPodcast(audioObject))
                        actionsList = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.hasClass)(audioEl, "audio_podcast_no_actions") ? [] : ["fave", "edit", "delete", "open_episode", "share"];
                    else if (_web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.isExternalStream(audioObject))
                        actionsList = [];
                    else if (audioObject.isFromCurrentPlaylist)
                        actionsList = ["recoms", "add", !audioObject.isCurrent && "delete", "share", "open_album", "add_to_playlist"];
                    else if (audioObject.isInSnippet)
                        actionsList = [longTapEnabled && "snippet", "recoms", !longTapEnabled && "next", "edit", "add", "share", "open_album", "add_to_playlist"];
                    else if (audioObject.isInEditBox)
                        actionsList = [];
                    else if (audioObject.isInFastChat)
                        actionsList = ["add"];
                    else if (vk.widget)
                        actionsList = ["add"];
                    else if (context)
                        if ("my_audios_block" === blockContext)
                            actionsList = ["recoms", "edit", "next", "add", "delete", "share", "open_album", "add_to_playlist"];
                        else
                            switch (context) {
                            case "search_results":
                                "search_owned_audios" === blockContext && (actionsList = ["recoms", "edit", !longTapEnabled && "next", "add", "delete", "share", "open_album", "add_to_playlist"]),
                                longTapEnabled && actionsList.unshift("snippet");
                                break;
                            case "catalog":
                                actionsList = [longTapEnabled && "snippet", "recoms", "edit", !longTapEnabled && "next", "add", "delete", "share", "open_album", "add_to_playlist"];
                                break;
                            case "album_page":
                                actionsList = [longTapEnabled && "snippet", "recoms", !longTapEnabled && "next", "edit", "add", "share", "open_album", "add_to_playlist"];
                                break;
                            case "my":
                            case "module":
                            case "user_list":
                            case "group_list":
                                actionsList = [longTapEnabled && "snippet", playerUI.lyrics.enabled && "lyrics", "recoms", "edit", !longTapEnabled && "next", "add", "delete", "share", "open_album", "add_to_playlist"].filter(Boolean);
                                break;
                            case "my_audios_short":
                                actionsList = [playerUI.lyrics.enabled && "lyrics", "recoms", "edit", "next", "add", "delete", "share", "open_album", "add_to_playlist"].filter(Boolean);
                                break;
                            case "edit_playlist":
                                actionsList = ["add", !longTapEnabled && "next", "edit"];
                                break;
                            case "attach":
                            case "attach_preview":
                            case "podcast":
                                actionsList = [];
                                break;
                            case "apps_edit":
                                actionsList = ["apps_edit_delete"];
                                break;
                            case "clips":
                            case "clip_effect_list":
                                audioObject.isOriginalSound && (actionsList = []);
                                break;
                            default:
                                audioObject.isCurrent && audioObject.withInlinePlayer && (actionsList = ["recoms", "add", "share", "open_album", "add_to_playlist"]),
                                longTapEnabled && actionsList.unshift("snippet")
                            }
                    ("moderation_video" === context || window.AdminVideoCatalogue) && (actionsList = ["link_to_clip"]),
                    actionsList.push("uma"),
                    audioObject.isReplaceable && actionsList.push("replace"),
                    extra.moder_actions && (0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_5__.each)(extra.moder_actions, ((i,act)=>{
                        moreActions.push(["moder_" + i, (audioEl,audio)=>{
                            eval(act[1])
                        }
                        , act[2]])
                    }
                    )),
                    audioObject.isCurrentAlbumSnippet && (actionsList = actionsList.filter((e=>"open_album" !== e))),
                    vk.id || (actionsList = actionsList.filter((e=>"open_album" === e)));
                    const addDeleteAction = ()=>{
                        audioObject.isFromCurrentPlaylist ? audioObject.isFromAutoplay || audioObject.isCurrent || actions.push(["current_delete", _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.deleteCurrentAudio, "", 'onmouseover="audioShowActionTooltip(this)"']) : audioObject.canDelete && !vk.widget && actions.push(["delete", _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.isPodcast(audioObject) ? _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.deleteEpisode : _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.deleteAudio, "", 'onmouseover="audioShowActionTooltip(this)"'])
                    }
                      , currentAudioPage = window.currentAudioPage && window.currentAudioPage(audioEl)
                      , isInLayer = currentAudioPage && currentAudioPage.isLayer()
                      , shouldShowEdit = !isInLayer && audioObject.canEdit && !vk.widget;
                    actionsList.forEach((e=>{
                        switch (e) {
                        case "next":
                            audioObject.isCurrent || audioObject.isClaimed || _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.isPodcast(audioObject) || actions.push(["next", ap.setNext.bind(ap), "", 'onmouseover="audioShowActionTooltip(this)"']);
                            break;
                        case "restore_recoms":
                            actions.push(["restore_recoms", _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.addAudio, "", 'onmouseover="audioShowActionTooltip(this)"']);
                            break;
                        case "add":
                            let e = vk.id;
                            cur.audioPage && cur.audioPage.canAddToGroup() && cur.audioPage.getOwnerId() !== audioObject.ownerId && (e = cur.audioPage.getOwnerId()),
                            !audioObject.isClaimed && audioObject.canAdd && audioObject.ownerId != e && actions.push(["add", _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.addAudio, "", 'onmouseover="audioShowActionTooltip(this)"']);
                            break;
                        case "recoms":
                            !audioObject.isClaimed && cur.audioPage && actions.push(["recoms", _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.showRecoms, "", 'onmouseover="audioShowActionTooltip(this)"']);
                            break;
                        case "uma":
                            audioObject.isUMA && actions.push(["uma", _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.getUMAInfo, "UMA"]);
                            break;
                        case "replace":
                            audioObject.isReplaceable && actions.push(["replace", ()=>{
                                showAudioClaimWarning(audioObject, extra.claim, _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.replaceWithOriginal.bind(_web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils, audioEl, audioObject))
                            }
                            , _shared_lib_langs__WEBPACK_IMPORTED_MODULE_3__.getLang("global_audio_replace")]);
                            break;
                        case "edit":
                            shouldShowEdit && actions.push(["edit", _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.isPodcast(audioObject) ? _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.editEpisode : _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.editAudio, "", 'onmouseover="audioShowActionTooltip(this)"']);
                            break;
                        case "delete":
                            addDeleteAction();
                            break;
                        case "apps_edit_delete":
                            actions.push(["delete", window.AppsEdit.removeAudio, "", 'onmouseover="AppsEdit.showRemoveAudioTooltip(this)"']);
                            break;
                        case "fave":
                            _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.isPodcast(audioObject) && actions.push(["fave", _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.faveEpisode, "", 'onmouseover="audioShowActionTooltip(this)"', _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.getAudioExtra(audioObject).fave ? " activated" : ""]);
                            break;
                        case "share":
                            audioObject.isClaimed || moreActions.push(["share", _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.shareAudio, _shared_lib_langs__WEBPACK_IMPORTED_MODULE_3__.getLang("audio_share_audio")]);
                            break;
                        case "add_to_playlist":
                            audioObject.isClaimed || cur.viewAsBox || moreActions.push(["add_to_playlist", "", _shared_lib_langs__WEBPACK_IMPORTED_MODULE_3__.getLang("audio_add_to_playlist")]);
                            break;
                        case "open_album":
                            !audioObject.isClaimed && audioObject.album && moreActions.push(["open_album", _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.showAudioAlbum, _shared_lib_langs__WEBPACK_IMPORTED_MODULE_3__.getLang("audio_open_album")]);
                            break;
                        case "open_episode":
                            _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.isPodcast(audioObject) && moreActions.push(["open_episode", _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.openEpisode, _shared_lib_langs__WEBPACK_IMPORTED_MODULE_3__.getLang("audio_podcast_open_episode")]);
                            break;
                        case "lyrics":
                            audioObject.hasLyrics && actions.push(["lyrics", ()=>{
                                playerUI.lyrics.open({
                                    audio,
                                    playlist: context.playlist,
                                    context: audioObject.context || context.context
                                })
                            }
                            , "", 'onmouseover="audioShowActionTooltip(this)"']);
                            break;
                        case "snippet":
                            actions.push(["snippet", ()=>(0,
                            _web_audio_components_AudioLongtap_showAudioLongtapModal__WEBPACK_IMPORTED_MODULE_8__.showAudioLongtapModal)(audioObject, audioEl), "", 'onmouseover="audioShowActionTooltip(this)"']),
                            moreActions.push(["next", ap.setNext.bind(ap), _shared_lib_langs__WEBPACK_IMPORTED_MODULE_3__.getLang("audio_set_next_audio")])
                        }
                    }
                    )),
                    extra.claim && nav.objLoc.claim && (audioObject.isSetClaimed ? actions.push(["claim_btn", _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.unclaim.bind(this, audio, audioEl, extra.claim), "Unclaim"]) : actions.push(["claim_btn", _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.claim.bind(this, audio, audioEl, extra.claim), "Claim"]))
                }
                if (moreActions.length && actions.push(["more"]),
                actions.length) {
                    let e = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.se)('<div class="_audio_row__actions audio_row__actions"></div>');
                    actions.forEach((t=>{
                        let i = _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.getRowActionName(t[0], audioObject, audioEl)
                          , s = (0,
                        _web_audio_player_track_getActionIcon__WEBPACK_IMPORTED_MODULE_6__.getActionIcon)(t[0])
                          , o = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.se)(`<button\naria-label="${i}"\ndata-action="${t[0]}"\nclass="audio_row__action audio_row__action_ ${t[0]} _audio_row__action_ ${t[0]}${t[4] ? " " + t[4] : ""}" ${t[3] || ""}>\n ${t[2] || s}\n</button>`);
                        t[1] && o.addEventListener("click", (e=>(t[1] && t[1].call(window, audioEl, audioObject),
                        (0,
                        _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent)(e)))),
                        e.appendChild(o)
                    }
                    ));
                    const t = _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.getAddRestoreInfo();
                    let i = t[audioObject.fullId];
                    i && t[i.addedFullId] && (i = null),
                    i && "added" === i.state && (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.addClass)(audioEl, "audio_row__added");
                    let s = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.geByClass1)("_audio_row__info", audioEl)
                      , o = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.geByClass1)("_audio_row__duration", audioEl)
                      , a = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.geByClass1)("_audio_row__actions", audioEl);
                    if (!s)
                        return;
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.re)(a),
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.setStyle)(o, "visibility", "hidden"),
                    s.appendChild(e);
                    let l = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.geByClass1)("_audio_row__action_more", e);
                    moreActions.length && l && setMoreAction(audioEl, audio, audioObject, moreActions, l),
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.data)(audioEl, "actions", 1)
                }
                audioObject.showInfo && _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.showAudioInfo(audioEl, audioObject, !1)
            }
            ), forceRedraw ? 0 : 10)
        }
        function setMoreAction(e, t, i, s, o) {
            const a = (0,
            _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.gpeByClass)("im-page_classic", e)
              , l = (0,
            _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.gpeByClass)("_im_peer_history_w", e)
              , r = (0,
            _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.gpeByClass)("_im_peer_history", e)
              , n = (0,
            _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.gpeByClass)("_im_chat_body_abs", e)
              , d = (0,
            _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.se)('<div class="_audio_row__more_actions audio_row__more_actions"></div>')
              , u = (0,
            _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.gpeByClass)("wk_history_audio_content", e)
              , _ = e.closest(".CatalogBlock")
              , c = {};
            r ? (c.getWrapEl = ()=>a ? null : n,
            c.appendTo = r) : u ? c.appendTo = u : _ ? c.appendTo = _ : (0,
            _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.gpeByClass)("post", e) ? c.appendTo = document.body : c.appendToParent = !0;
            const h = new ElementTooltip(o,(0,
            _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_5__.extend)({
                cls: "_audio_row__tt",
                defaultSide: "bottom",
                rightShift: 20,
                content: d,
                bottomGap: a && l ? parseInt((0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.getStyle)(l, "border-bottom-width")) + 30 + 150 : 150,
                preventSideChange: !0,
                autoShow: !0,
                onFirstTimeShow: function(e, t) {
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.domData)(t, "nodrag", 1),
                    setTimeout(function() {
                        this.getOptions().bottomGap = 0
                    }
                    .bind(this))
                },
                onHide: ()=>{
                    (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.data)(e, "leaved") && _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.onRowLeave(e)
                }
            }, c));
            s.forEach((s=>{
                const o = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.se)((0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.rs)(_web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.AUDIO_ROW_ACTION_ROW_ITEM, s));
                if ("add_to_playlist" === s[0]) {
                    let i, s;
                    o.addEventListener("mouseenter", i = ()=>{
                        clearTimeout(s),
                        s = setTimeout((()=>{
                            o.removeEventListener("mouseenter", i),
                            _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.initRowPlaylistsChooser(t, o, h, e)
                        }
                        ), 150)
                    }
                    ),
                    o.addEventListener("click", (()=>{
                        s || _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_1__.AudioUtils.initRowPlaylistsChooser(t, o, h, e)
                    }
                    )),
                    o.addEventListener("mouseleave", (()=>{
                        clearTimeout(s)
                    }
                    ))
                } else
                    o.addEventListener("click", (t=>(s[1].call(window, e, i),
                    (0,
                    _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent)(t))));
                d.appendChild(o)
            }
            )),
            (0,
            _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.addEvent)(o, "click", (e=>{
                h.isShown() || h.show(),
                (0,
                _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent)(e)
            }
            )),
            (0,
            _web_lib_dom__WEBPACK_IMPORTED_MODULE_0__.data)(e, "tt", h)
        }
    }
    ,
    110289: (e,t,i)=>{
        i.d(t, {
            replaceWithOriginal: ()=>n
        });
        var s = i(795558)
          , o = i(95432)
          , a = i(182525)
          , l = i(735784)
          , r = i(595509);
        function n(e, t, i) {
            (t = t || (0,
            o.getAudioPlayer)().getCurrentAudio()) && (t = (0,
            r.audioTupleToAudioObject)(t),
            ajax.post("al_audio.php", {
                act: "replace_with_original",
                hash: t.replaceHash,
                audio_id: t.fullId
            }, {
                onDone: function(o) {
                    let r = JSON.parse(t.extra).claim.original;
                    r[a.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_ID] = o,
                    r[a.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_OWNER_ID] = t.ownerId;
                    let n = (0,
                    s.se)((0,
                    l.drawAudio)(r));
                    e.parentElement.insertBefore(n, e),
                    e.parentElement.removeChild(e),
                    i && i()
                },
                onFail: ()=>(i(),
                !0)
            }))
        }
    }
    ,
    836302: (e,t,i)=>{
        i.d(t, {
            shareAudio: ()=>u
        });
        var s = i(589806)
          , o = i(95432)
          , a = i(514986)
          , l = i(584356)
          , r = i(984133)
          , n = i(576566)
          , d = i(595509);
        function u(e, t) {
            if (cur.viewAsBox)
                return cur.viewAsBox();
            if (!(t = t || (0,
            o.getAudioPlayer)().getCurrentAudio()))
                return;
            t = (0,
            d.audioTupleToAudioObject)(t);
            const i = (0,
            n.isPodcast)(t) ? "podcast" : "audio";
            return (0,
            r.onAdditionalEvent)(e, t, {
                type: s.TYPE_SHARE_AUDIO
            }),
            !(0,
            a.showBox)("like.php", {
                act: "publish_box",
                object: i + t.fullId,
                list: t.actionHash,
                to: "mail"
            }, {
                stat: [window.jsc("web/page.js"), "page.css", window.jsc("web/wide_dd.js"), "wide_dd.css", window.jsc("web/sharebox.js")],
                onFail: function(e) {
                    return (0,
                    l.showDoneBox)(e),
                    !0
                },
                params: {
                    shareButtonElement: e
                }
            })
        }
    }
    ,
    357134: (e,t,i)=>{
        i.d(t, {
            showAudioRestriction: ()=>f
        });
        var s = i(595509)
          , o = i(29271)
          , a = i(584356)
          , l = i(82161)
          , r = i(735784)
          , n = i(182525)
          , d = i(795558)
          , u = i(705758)
          , _ = i(95432)
          , c = i(514986)
          , h = i(215066)
          , p = i(664988)
          , y = i(854099)
          , g = i(676324)
          , A = i(45019);
        function P(e) {
            const t = y.FlatButton.render({
                children: o.getLang("global_close"),
                appearance: y.FlatButtonAppearance.PRIMARY,
                size: y.FlatButtonSize.M,
                restAttrs: {
                    onclick: "curBox().hide()"
                }
            });
            (0,
            c.showFastBox)({
                hideButtons: !0,
                title: !1,
                containerClass: "audio_restriction_box",
                onHide: ()=>{
                    (0,
                    h.statlogsValueEvent)("audio_restriction_popup", "hide", e.restrictionStatus)
                }
            }, `\n    <button class="audio_restriction_box__close" onclick="curBox().hide()" aria-label="${o.getLang("global_close")}">\n      ${(0,
            g.getIcon24Cancel)().icon}\n    </button>\n    <div class="audio_restriction_box__icon">${(0,
            A.getIcon56PensiveFace)().icon}</div>\n    <div class="audio_restriction_box__title">${o.getLang("audio_restriction_title_claim")}</div>\n    <div class="audio_restriction_box__controls">\n      ${t}\n    </div>\n  `)
        }
        function f(e, t={}) {
            if (!e)
                return !1;
            if ((e = (0,
            s.audioTupleToAudioObject)(e)).restrictionStatus) {
                if (e.actionHash) {
                    (0,
                    h.statlogsValueEvent)("audio_restriction_popup", "show", e.restrictionStatus);
                    const i = (0,
                    c.showBox)("al_audio.php", {
                        act: "restriction_box",
                        audio_id: e.id,
                        owner_id: e.owner_id,
                        hash: e.actionHash
                    }, {
                        params: {
                            hideButtons: !0,
                            onShow: function() {
                                let i = (0,
                                a.curBox)();
                                (0,
                                p.isFunction)(t.onShow) && t.onShow(),
                                i && i.once("click:ok", (()=>{
                                    (0,
                                    h.statlogsValueEvent)("audio_restriction_popup", "click", e.restrictionStatus)
                                }
                                ))
                            },
                            onHide: i=>{
                                (0,
                                p.isFunction)(t.onHide) && t.onHide(),
                                i || (0,
                                h.statlogsValueEvent)("audio_restriction_popup", "hide", e.restrictionStatus)
                            }
                        },
                        containerClass: "audio_restriction_box audio_restriction_box_type_" + e.restrictionStatus,
                        onDone: (t,i)=>{
                            if (i && i.play) {
                                t.hide();
                                const o = function(e) {
                                    const t = (0,
                                    d.geByClass)("_audio_row_" + e.fullId);
                                    if (!t || !t.length)
                                        return !1;
                                    const i = (0,
                                    u.parseJSON)((0,
                                    d.domData)(t[0], "audio"));
                                    if (!i)
                                        return !1;
                                    const s = (0,
                                    u.parseJSON)(i[n.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_EXTRA]);
                                    s && delete s.claim,
                                    i[n.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_RESTRICTION] = 0,
                                    i[n.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_FLAGS] &= ~n.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_CLAIMED_BIT,
                                    i[n.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_EXTRA] = JSON.stringify(s);
                                    const o = (0,
                                    _.getAudioPlayer)().getCurrentPlaylist()
                                      , a = (0,
                                    d.se)((0,
                                    r.drawAudio)(i, "no_extra"));
                                    if (o) {
                                        const e = i[n.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_OWNER_ID] + "_" + i[n.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_ID]
                                          , t = o.getAudio(e);
                                        t && (t[n.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_RESTRICTION] = i[n.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_RESTRICTION],
                                        t[n.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_FLAGS] = i[n.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_FLAGS],
                                        t[n.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_EXTRA] = i[n.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_EXTRA])
                                    }
                                    return (0,
                                    l.each)(t, ((e,t)=>{
                                        const s = e > 0 ? (0,
                                        d.se)((0,
                                        r.drawAudio)(i, "no_extra")) : a;
                                        t.parentElement.insertBefore(s, t),
                                        t.parentElement.removeChild(t)
                                    }
                                    )),
                                    a
                                }(i.audio ? (0,
                                s.audioTupleToAudioObject)(i.audio) : e)
                                  , a = (0,
                                _.getAudioPlayer)();
                                o && a.toggleAudio(o, {
                                    target: o
                                })
                            }
                        }
                        ,
                        onFail: ()=>(i && i.hide(),
                        P(e),
                        !0)
                    })
                } else
                    P(e);
                return !0
            }
            return !1
        }
    }
    ,
    305861: (e,t,i)=>{
        i.d(t, {
            toggleAudioLyrics: ()=>a
        });
        var s = i(795558)
          , o = i(9480);
        function a(e, t) {
            let i = (0,
            s.geByClass1)("_audio_row__lyrics", e);
            if (i) {
                if ((0,
                s.toggle)(i)) {
                    let t = (0,
                    s.getSize)(e)[1]
                      , o = (0,
                    s.getSize)(i)[1];
                    (0,
                    s.setStyle)(e, "height", t + o),
                    (0,
                    s.data)(e, "prevHeight", t)
                } else {
                    let t = (0,
                    s.data)(e, "prevHeight");
                    (0,
                    s.setStyle)(e, "height", t)
                }
            } else {
                (0,
                s.addClass)(e, "audio_loading");
                const a = {
                    act: "get_lyrics",
                    aid: t.fullId,
                    lid: t.lyrics
                };
                o.AudioUtils.isPodcast(t) && (a.podcast = !0),
                ajax.post("al_audio.php", a, {
                    onDone: function(a) {
                        (0,
                        s.removeClass)(e, "audio_loading"),
                        i = (0,
                        s.se)(`<div class="_audio_row__lyrics audio_row__lyrics" data-nodrag="1" style="display:none;"><div class="audio_row__lyrics_inner">${a}</div></div>`),
                        (0,
                        s.geByClass1)("_audio_row_content", e).appendChild(i),
                        o.AudioUtils.toggleAudioLyrics(e, t)
                    },
                    onFail: ()=>!0
                })
            }
        }
    }
    ,
    968131: (e,t,i)=>{
        i.d(t, {
            unclaim: ()=>l
        });
        var s = i(795558)
          , o = i(620288)
          , a = i(595509);
        function l(e, t, i) {
            (0,
            s.removeClass)(t, "audio_moder_claimed"),
            (0,
            o.onRowOver)(t, !1, !0),
            e = (0,
            a.audioTupleToAudioObject)(e),
            window.ajax.post("al_claims.php", {
                act: "a_unclaim",
                claim: i,
                type: "audio",
                id: e.id,
                owner_id: e.ownerId,
                hash: e.actionHash
            })
        }
    }
    ,
    6867: (e,t,i)=>{
        i.d(t, {
            initUpload: ()=>p
        });
        var s = i(434788)
          , o = i(795558)
          , a = i(9480)
          , l = i(301230)
          , r = i(849222)
          , n = i(29271)
          , d = i(584356)
          , u = i(82161)
          , _ = i(962983)
          , c = i(839470)
          , h = i(504867);
        function p(e, t, i, p, y, g, A, P, f, E, m, w) {
            cur.loadAudioDone = function(t, i) {
                if (cur.audioPage) {
                    if (cur.boxClose && cur.audioPage.onAudioAllUploaded(),
                    cur.audioPage.onAudioUploaded(t, i),
                    cur.boxClose) {
                        delete cur.boxClose;
                        let t = cur.audiosLoaded > 1 ? n.getLang("audio_success_msg_multiple") : n.getLang("audio_success_msg");
                        e.setOptions({
                            title: n.getLang("audio_uploading_over"),
                            bodyStyle: "padding: 16px 23px;"
                        }),
                        e.content(t),
                        (0,
                        o.hide)(e.progress),
                        setTimeout((function() {
                            e.hide(200)
                        }
                        ), 2e3),
                        delete cur.audiosLoaded,
                        _tbLink && _tbLink.loc && (cur.__phinputs = cur.__phinputs || [],
                        (0,
                        r.globalHistoryDestroy)(_tbLink.loc))
                    }
                } else
                    cur.boxClose && nav.go("/audios" + i[a.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID], !1, {
                        onDone() {
                            cur.__phinputs = cur.__phinputs || [],
                            (0,
                            r.globalHistoryDestroy)(nav.objLoc[0])
                        }
                    })
            }
            ,
            cur.loadAudioFailed = function(i, s) {
                (0,
                o.hide)(e.progress),
                Upload.embed(i);
                let a = (0,
                o.ge)("audio_new_error")
                  , l = a && (0,
                o.domFC)(a)
                  , r = s.split("|");
                if (!l)
                    return;
                s = r[0],
                r = r[1];
                let d = (0,
                u.intval)(s);
                (0,
                c.partConfigEnabled)("audio_show_upload_real_error_code") && (d = s),
                (0,
                h.statlogsValueEvent)("load_audio_failed_code", d),
                l.innerHTML = r || (t[s] || n.getLang("audio_loading_error").replace("{code}", d)),
                (0,
                o.show)(a)
            }
            ,
            Upload.init("audio_add_upload_btn", i, p, {
                file_name: "file",
                file_size_limit: y,
                file_types_description: "Audio files (*.mp3)",
                file_types: "*.mp3;*.MP3",
                accept: "audio/mpeg",
                lang: g,
                onUploadStart: function(t, i) {
                    "form" === Upload.types[t] && (0,
                    o.show)(e.progress),
                    "form" !== Upload.types[t] && "fileApi" !== Upload.types[t] || ((0,
                    o.geByClass1)("file", (0,
                    o.ge)("audio_add_upload_btn")).disabled = !0),
                    (0,
                    d.curBox)().changed = !0
                },
                onUploadProgress: function(e, t, i) {
                    if (!(0,
                    o.ge)("form" + e + "_progress")) {
                        let t = Upload.obj[e]
                          , i = (0,
                        o.getSize)(t)[1] / 2 + 10
                          , s = t.firstChild;
                        for (; s; )
                            1 === s.nodeType && (s.id === "uploader" + e && l.browser.msie ? (0,
                            o.setStyle)(s, {
                                position: "relative",
                                left: "-5000px"
                            }) : (0,
                            o.setStyle)(s, {
                                visibility: "hidden"
                            })),
                            s = s.nextSibling;
                        t.appendChild((0,
                        o.ce)("div", {
                            innerHTML: '<div class="audio_progress_wrap"><div id="form' + e + '_progress" class="audio_progress" style="width: 0%;"></div></div></div>'
                        }, {
                            height: i + "px",
                            marginTop: -i + "px"
                        }))
                    }
                    let s = (0,
                    u.intval)(t / i * 100);
                    (0,
                    o.setStyle)((0,
                    o.ge)("form" + e + "_progress"), {
                        width: s + "%"
                    })
                },
                onUploadComplete: function(e, t) {
                    let i;
                    this.use_go_uploader || (t = t.replace(/\+/g, " "));
                    try {
                        i = JSON.parse(t)
                    } catch (e) {
                        i = (0,
                        _.fromQueryString)(t)
                    }
                    let o = {};
                    this.use_go_uploader ? o = {
                        act: "done_add",
                        upldr: 1,
                        go_uploader_response: t
                    } : (i.title = decodeURIComponent(i.title),
                    i.artist = decodeURIComponent(i.artist),
                    o = (0,
                    s._)({}, i, {
                        act: "done_add",
                        upldr: 1
                    })),
                    i.code ? cur.loadAudioFailed(e, i.code) : ajax.post("al_audio.php", o, {
                        onDone: function(t) {
                            cur.loadAudioDone(e, t)
                        },
                        onFail: function(t) {
                            return cur.loadAudioFailed(e, t),
                            !0
                        }
                    })
                },
                onUploadCompleteAll: function(e, t) {
                    cur.boxClose = !0
                },
                onUploadError: cur.loadAudioFailed,
                clear: 1,
                multiple: 1,
                force_max_files: !0,
                max_files: A,
                max_files_hide_last: 1,
                type: "audio",
                max_attempts: 3,
                reverse_files: 1,
                server: P,
                error: f,
                error_hash: E,
                dropbox: "choose_audio_dropbox",
                use_go_uploader: w
            }),
            e.setControlsText(m)
        }
    }
    ,
    219470: (e,t,i)=>{
        i.d(t, {
            getUMAInfo: ()=>o
        });
        var s = i(514986);
        function o(e, t) {
            t.isInEditBox || (0,
            s.showBox)("al_audio.php", {
                act: "get_uma_restrictions",
                id: t.id,
                owner_id: t.owner_id,
                hash: t.actionHash
            }, {
                params: {
                    width: 1e3
                }
            })
        }
    }
    ,
    33306: (e,t,i)=>{
        i.d(t, {
            getUMAInfoAlbum: ()=>o
        });
        var s = i(514986);
        function o(e, t) {
            t.isInEditBox || (0,
            s.showBox)("al_audio.php", {
                act: "get_uma_restrictions_album",
                playlist_raw_id: e
            }, {
                params: {
                    width: 750
                }
            })
        }
    }
    ,
    9480: (e,t,i)=>{
        i.d(t, {
            AudioUtils: ()=>Ne
        });
        var s = i(434788)
          , o = i(182525)
          , a = i(215527)
          , l = i(305861)
          , r = i(615822)
          , n = i(620288)
          , d = i(426120)
          , u = i(513642)
          , _ = i(248074)
          , c = i(567718)
          , h = i(327279)
          , p = i(184083)
          , y = i(836302)
          , g = i(720604)
          , A = i(711766)
          , P = i(110289)
          , f = i(937148)
          , E = i(86855)
          , m = i(328095)
          , w = i(237500)
          , v = i(243562)
          , I = i(47163)
          , C = i(941286)
          , T = i(765746)
          , b = i(460992)
          , L = i(851343)
          , D = i(225419)
          , O = i(358422)
          , S = i(289089)
          , k = i(211137)
          , M = i(465663)
          , U = i(127023)
          , x = i(523715)
          , R = i(57096)
          , B = i(327868)
          , N = i(146049)
          , j = i(146274)
          , W = i(141556)
          , F = i(442954)
          , K = i(979827)
          , H = i(725873)
          , Y = i(284709)
          , V = i(627901)
          , Q = i(735784)
          , G = i(278525)
          , X = i(668226)
          , q = i(734567)
          , $ = i(595509)
          , z = i(447835)
          , J = i(515896)
          , Z = i(355361)
          , ee = i(759130)
          , te = i(785401)
          , ie = i(968131)
          , se = i(219470)
          , oe = i(33306)
          , ae = i(722918)
          , le = i(631384)
          , re = i(517339)
          , ne = i(951127)
          , de = i(576566)
          , ue = i(437914)
          , _e = i(45471)
          , ce = i(356442)
          , he = i(831386)
          , pe = i(782469)
          , ye = i(831717)
          , ge = i(357134)
          , Ae = i(442849)
          , Pe = i(478506)
          , fe = i(267065)
          , Ee = i(827756)
          , me = i(174679)
          , we = i(648805)
          , ve = i(726492)
          , Ie = i(39340)
          , Ce = i(213994)
          , Te = i(429023)
          , be = i(6867)
          , Le = i(411892)
          , De = i(801219)
          , Oe = i(589377)
          , Se = i(355014)
          , ke = i(781835)
          , Me = i(347765)
          , Ue = i(604681)
          , xe = i(550536)
          , Re = i(258169)
          , Be = i(204627);
        const Ne = (0,
        s._)({}, o.AUDIO_PLAYER_ENUMS, {
            audioSearchPerformer: a.audioSearchPerformer,
            toggleAudioLyrics: l.toggleAudioLyrics,
            getRowActionName: r.getRowActionName,
            initRowPlaylistsChooser: c.initRowPlaylistsChooser,
            addToPlaylistsBoxInit: h.addToPlaylistsBoxInit,
            showRecoms: p.showRecoms,
            shareAudio: y.shareAudio,
            showAudioAlbum: g.showAudioAlbum,
            openEpisode: A.openEpisode,
            replaceWithOriginal: P.replaceWithOriginal,
            editAudio: f.editAudio,
            editEpisode: E.editEpisode,
            deleteCurrentAudio: m.deleteCurrentAudio,
            deleteRecomsAudio: w.deleteRecomsAudio,
            deleteListenedAudio: v.deleteListenedAudio,
            deleteAudio: I.deleteAudio,
            deleteEpisode: C.deleteEpisode,
            restoreEpisode: T.restoreEpisode,
            deleteDeletedAudios: b.deleteDeletedAudios,
            faveEpisode: L.faveEpisode,
            contextSplit: D.contextSplit,
            showAudioPlaylist: O.showAudioPlaylist,
            editPlaylist: M.editPlaylist,
            followPlaylist: U.followPlaylist,
            getLayer: x.getLayer,
            updateQueueReceivedPost: R.updateQueueReceivedPost,
            toggleAudioHQBodyClass: B.toggleAudioHQBodyClass,
            hasAudioHQBodyClass: N.hasAudioHQBodyClass,
            getAddRestoreInfo: j.getAddRestoreInfo,
            getPlaylistAddRestoreInfo: W.getPlaylistAddRestoreInfo,
            addAudio: F.addAudio,
            addAudioToOwner: K.addAudioToOwner,
            chooseAudioBox: H.chooseAudioBox,
            getAudioArtistsString: Y.getAudioArtistsString,
            getAudioPerformers: V.getAudioPerformers,
            drawAudio: Q.drawAudio,
            isClaimedAudio: G.isClaimedAudio,
            getDurationMod: Q.getDurationMod,
            getAudioExtra: xe.getAudioExtra,
            getAudioFromEl: X.getAudioFromEl,
            getAudioFullId: q.getAudioFullId,
            audioTupleToAudioObject: $.audioTupleToAudioObject,
            initDomPlaylist: z.initDomPlaylist,
            getContextPlaylist: J.getContextPlaylist,
            renderAudioDiag: ee.renderAudioDiag,
            claim: te.claim,
            unclaim: ie.unclaim,
            getUMAInfo: se.getUMAInfo,
            getUMAInfoAlbum: oe.getUMAInfoAlbum,
            showAudioInfo: ae.showAudioInfo,
            cancelReplacement: le.cancelReplacement,
            removeFromGroup: re.removeFromGroup,
            addToGroupBox: ne.addToGroupBox,
            showAudioRestriction: ge.showAudioRestriction,
            isPodcast: de.isPodcast,
            isArticleTts: ue.isArticleTts,
            isRadio: Re.isRadio,
            isExternalStream: Be.isExternalStream,
            isMarusiaTrack: _e.isMarusiaTrack,
            isMarusiaTale: ce.isMarusiaTale,
            isPrivatePodcast: he.isPrivatePodcast,
            followArtist: fe.followArtist,
            unfollowArtist: Ee.unfollowArtist,
            followCurator: me.followCurator,
            unfollowCurator: we.unfollowCurator,
            followOwner: ve.followOwner,
            unfollowOwner: Ie.unfollowOwner,
            trackArtistToOfficial: Ce.trackArtistToOfficial,
            PodcastsLogs: pe,
            copyPlaylistLink: ye.copyPlaylistLink,
            getAlbumParts: Ae.getAlbumParts,
            drawAlbumPartRow: Pe.drawAlbumPartRow,
            onRowOver: n.onRowOver,
            onRowLeave: d.onRowLeave,
            onAudioAddedToPlaylist: u.onAudioAddedToPlaylist,
            onAudioChoose: S.onAudioChoose,
            onPlaylistChoose: k.onPlaylistChoose,
            claimPlaylist: Te.claimPlaylist,
            initUpload: be.initUpload,
            turnPlaylistDiscover: Le.turnPlaylistDiscover,
            hidePlaylistFromRecoms: De.hidePlaylistFromRecoms,
            showPlaylistInRecoms: Oe.showPlaylistInRecoms,
            hideCatalogBlock: Se.hideCatalogBlock,
            mergeAudioTupleWithoutContext: ke.mergeAudioTupleWithoutContext,
            followRadiostation: Me.followRadiostation,
            unfollowRadiostation: Ue.unfollowRadiostation,
            _showPlaylistsChooser: _.showPlaylistsChooser,
            debugLog: Z.debugLog
        })
    }
    ,
    41572: (e,t,i)=>{
        i.d(t, {
            connectListenQueue: ()=>g
        });
        var s = i(231909)
          , o = i(9480)
          , a = i(95432)
          , l = i(514986)
          , r = i(170349)
          , n = i(839470);
        const d = 3e4;
        let u = null
          , _ = null
          , c = !1
          , h = 0;
        const p = new s.WebQueueListener((function(e) {
            if (e.failed)
                return void g(!0);
            const t = (0,
            a.getAudioPlayer)()
              , i = t.isPlaying()
              , s = t.getCurrentAudio()
              , r = o.AudioUtils.isPodcast(s);
            for (let s = 0; s < e.events.length; s++) {
                let o = e.events[s].data;
                if ("start" === o.type && AudioPlayer.getDeviceId() !== o.uuid && !_ && !r && i) {
                    t.pausedByQueue = Date.now(),
                    t.pause(),
                    _ = (0,
                    l.showBox)("al_audio.php", {
                        act: "start_playback_box",
                        uuid: o.uuid,
                        device_name: o.device_name
                    }, {
                        params: {
                            hideButtons: !0,
                            onHide: ()=>{
                                _ = !1
                            }
                        },
                        containerClass: "audio_playback_box"
                    });
                    break
                }
            }
        }
        ))
          , y = new s.WebQueueListener((function(e) {
            e.events.length && e.events.forEach((e=>{
                1 === e.data.product_id && (vk.audioAdsConfig.enabled = !e.data.active)
            }
            ))
        }
        ));
        function g(e) {
            if (!window.Notifier || !vk.id)
                return;
            let t = window.ap && (0,
            a.getAudioPlayer)()
              , i = t && t.getCurrentAudio()
              , s = window.Notifier && !vk.widget
              , l = !c && i ? p.listenQueueKey : y.listenQueueKey
              , _ = o.AudioUtils.isPodcast(i);
            (e || s && !_ && !l) && (i || (0,
            n.partConfigEnabled)("audio_subscription_update")) && (i = i ? o.AudioUtils.audioTupleToAudioObject(i) : {},
            function(e={}, t=(()=>{}
            ), i=(()=>!0)) {
                ajax.post("al_audio.php", {
                    act: "queue_params",
                    audio_id: e.id,
                    owner_id: e.owner_id,
                    hash: e.actionHash
                }, {
                    onDone: t,
                    onFail: i
                })
            }(i, (e=>{
                const t = function(e) {
                    const t = (0,
                    r.unpackQueues)(e);
                    t.audio && p.connect(t.audio);
                    t.subscription && y.connect(t.subscription);
                    return t
                }(e);
                c = !i || !t.audio,
                (t.audio || t.subscription) && (u && clearTimeout(u),
                u = window.setTimeout((()=>g(!0)), d))
            }
            ), (()=>(h++,
            h < 3 && g(!0),
            !0))))
        }
    }
    ,
    225419: (e,t,i)=>{
        i.d(t, {
            contextSplit: ()=>o
        });
        var s = i(664988);
        function o(e) {
            return (0,
            s.isObject)(e) && (e = e.context),
            (e || "").split(":")
        }
    }
    ,
    355361: (e,t,i)=>{
        function s() {}
        i.d(t, {
            debugLog: ()=>s
        })
    }
    ,
    488640: (e,t,i)=>{
        i.d(t, {
            getContext: ()=>a
        });
        var s = i(515896)
          , o = i(225419);
        function a(e) {
            const t = window.currentAudioPage && window.currentAudioPage(e)
              , i = t && t.getPageCurrentPlaylist();
            let a, l = (0,
            s.getContextPlaylist)(e, !0);
            return l && (l = (0,
            o.contextSplit)(l),
            Array.isArray(l) && l.length > 0 && (a = l[0])),
            ("search" === a && i && i.getSearchQid() || "search" === window.cur.module && window.cur.qid) && (a = "search:external"),
            a
        }
    }
    ,
    523715: (e,t,i)=>{
        function s() {
            let e = window.audioLayer;
            return e || (window.audioLayer = e = new AudioLayer),
            e
        }
        i.d(t, {
            getLayer: ()=>s
        })
    }
    ,
    714865: (e,t,i)=>{
        i.d(t, {
            getPlaylistUrl: ()=>o
        });
        var s = i(931917);
        function o(e, t, i, o=!1) {
            const a = `/music/${s.Ranges.isOfficialPlaylist(e) ? "album" : "playlist"}/${e}_ ${t}${i ? `_ ${i}` : ""}`;
            return o ? `${location.protocol}//${location.host}${a}` : a
        }
    }
    ,
    722918: (e,t,i)=>{
        i.d(t, {
            showAudioInfo: ()=>a
        });
        var s = i(312263)
          , o = i(584356);
        function a(e, t, i) {
            if (!t.showInfo)
                return;
            if (e.dataset.showedInfo)
                return;
            e.dataset.showedInfo = !0;
            const a = t.performer.split("], ")
              , l = a.length > 1 ? a[1] : a[0]
              , r = encodeURI(l + " - " + t.title)
              , n = `<a href="/search?c[section]=audio&c[q]=${r}" target="_blank">Найти VK</a>`
              , d = `<a href="${t.adminUrl}?act=audio&raw_id=${t.fullId}" target="_blank">Admin</a>`
              , u = `<a href="/away.php?to=${encodeURIComponent(t.umaQueryUrl + "?query=" + r)}" target="_blank">Найти UMA</a>`
              , _ = document.createElement("div");
            _.classList.add("AudioInfo__container"),
            _.innerHTML = " • " + u + " • " + n + " • " + d,
            _.style.fontSize = "x-small",
            i && _.classList.add("AudioInfo__container--secondary");
            const c = document.createElement("span");
            c.innerText = "ID: " + t.fullId,
            c.classList.add("AudioInfo__copyLink"),
            c.onclick = e=>{
                (0,
                s.copyTextToClipboard)(t.fullId).then((()=>{
                    (0,
                    o.showDoneBox)("ID аудиозаписи скопирован в буфер обмена")
                }
                ))
            }
            ,
            e.parentElement.insertBefore(_, e.nextSibling),
            _.prepend(c)
        }
    }
    ,
    480582: (__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{
        __webpack_require__.d(__webpack_exports__, {
            default: ()=>AudioLayer
        });
        var _lib_debug_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(643897)
          , _web_lib_cancel_stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(196026)
          , _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(795558)
          , _shared_audio_stores_autoplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(762490);
        class AudioLayer {
            static prepare(e) {
                window.stManager.add([window.jsc("web/audio.js"), "audio.css", window.jsc("web/suggester.js"), window.jsc("web/auto_list.js"), window.jsc("web/indexer.js")], (()=>{
                    e && e()
                }
                ))
            }
            toggle(e, t) {
                this._initTooltip();
                let i = this._els.tooltip
                  , s = void 0 !== e ? e : !i.isShown();
                s && this.initPage(),
                s ? (i.show(),
                (0,
                _web_lib_cancel_stack__WEBPACK_IMPORTED_MODULE_1__.cancelStackPush)("top_audio", (()=>{
                    this.toggle(!1, !0)
                }
                ), !0)) : (t || (0,
                _web_lib_cancel_stack__WEBPACK_IMPORTED_MODULE_1__.cancelStackPop)(),
                i.hide()),
                (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.toggleClass)(this._els.topNotaBtn, "TopNavBtn--active", s)
            }
            hide() {
                this._els.tooltip.hide()
            }
            isShown() {
                return this._els.tooltip && this._els.tooltip.isShown()
            }
            updatePosition() {
                return this._els.tooltip && this._els.tooltip.updatePosition()
            }
            _layerPosition() {
                let e = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getXY)(this._els.layerPlace)
                  , t = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getXY)("ts_wrap")[0] - e[0] - 1
                  , i = 0;
                if ((0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.isVisible)(this._els.topNotaBtnGroup)) {
                    i = -t + ((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getXY)(this._els.topNotaBtn)[0] - e[0]) + 15
                } else {
                    i = -t + ((0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getXY)(this._els.topPlayBtn)[0] - e[0]) + 3
                }
                return {
                    left: t,
                    top: -1,
                    arrowPosition: i
                }
            }
            getPageInstance() {
                return this._page
            }
            getTemplate() {
                return `\n      <div class="audio_layer_container">\n        <div class="top_audio_loading">\n          ${(0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.rs)(vk.pr_tpl, {
                    id: "",
                    cls: "pr_big"
                })}\n        </div>\n      </div>\n    `
            }
            _initTooltip() {
                this._els.tooltip || (this._els.container = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.se)(this.getTemplate()),
                this._els.tooltip = new ElementTooltip(this._els.layerPlace,{
                    id: "audio_layer_tt",
                    content: this._els.container,
                    width: 660,
                    offset: [22, 5],
                    autoShow: !1,
                    customShow: !0,
                    setPos: this._layerPosition.bind(this),
                    forceSide: "bottom",
                    onHide: ()=>{
                        this._page && this._page.onLayerHide()
                    }
                    ,
                    onShow: ()=>{
                        this._page && this._page.onLayerShow(this._initSection)
                    }
                }))
            }
            initPage() {
                this._page || ((0,
                _shared_audio_stores_autoplay__WEBPACK_IMPORTED_MODULE_3__.ensureAutoplayService)().init(),
                ajax.post("al_audio.php", {
                    act: "layer",
                    is_layer: 1,
                    section: window.ap.getCurrentPlaylist() ? "current" : "all"
                }, {
                    onDone: (html,data,templatesScript)=>{
                        if (this._els.tooltip.isShown()) {
                            try {
                                eval(templatesScript)
                            } catch (e) {
                                (0,
                                _lib_debug_tools__WEBPACK_IMPORTED_MODULE_0__.logEvalError)(e, templatesScript)
                            }
                            this._els.container.innerHTML = html,
                            this._page = new AudioPage((0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.geByClass1)("_audio_page_layout", this._els.container),data),
                            this._initSection = data.initSection || void 0,
                            this._page.onLayerShow(this._initSection)
                        }
                    }
                    ,
                    onFail: ()=>!0
                }))
            }
            constructor() {
                this._els = {
                    layerPlace: (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.ge)("top_audio_layer_place"),
                    topPlayBtn: (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.geByClass1)("_top_audio_player_play"),
                    topNotaBtn: (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.geByClass1)("TopNavBtn__audio"),
                    topNotaBtnGroup: (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.ge)("top_audio_btn_group")
                }
            }
        }
    }
    ,
    192333: (e,t,i)=>{
        i.d(t, {
            AUDIO_PLAYER_INITED_EVENT: ()=>ne,
            AudioPlayer: ()=>de
        });
        var s = i(11010)
          , o = i(434788)
          , a = i(9480)
          , l = i(301230)
          , r = i(241857)
          , n = i(95432)
          , d = i(29271)
          , u = i(643897)
          , _ = i(664988)
          , c = i(514986)
          , h = i(504867)
          , p = i(953908)
          , y = i(722082)
          , g = i(584356)
          , A = i(562112)
          , P = i(82161)
          , f = i(145669)
          , E = i(796943)
          , m = i(795558)
          , w = i(132247)
          , v = i(179850)
          , I = i(589806)
          , C = i(948049)
          , T = i(159224)
          , b = i(255364)
          , L = i(866310)
          , D = i(172045)
          , O = i(220681)
          , S = i(721366)
          , k = i(595509)
          , M = i(307411)
          , U = i(733761)
          , x = i(41572)
          , R = i(731062)
          , B = i(896934)
          , N = i(781835)
          , j = i(734567)
          , W = i(839470)
          , F = i(426130)
          , K = i(694541)
          , H = i(990172)
          , Y = i(822120)
          , V = i(905507)
          , Q = i(182525)
          , G = i(961514)
          , X = i(258169)
          , q = i(850587)
          , $ = i(521179)
          , z = i(439351)
          , J = i(437914)
          , Z = i(542797)
          , ee = i(912387)
          , te = i(410380)
          , ie = i(845596)
          , se = i(561722)
          , oe = i(165624)
          , ae = i(201229);
        let le = {};
        const re = (0,
        R.throttledPromise)((()=>{}
        ), 1500, !0)
          , ne = "audio_player_inited";
        class de {
            static getVersion() {
                return 15
            }
            static _sendLCNotification() {
                const e = window.Notifier;
                e && e.lcSend("audio_start");
                try {
                    window.Videoview && Videoview.togglePlay(!1)
                } catch (e) {}
            }
            static showHQLabel(e) {
                return void 0 === e ? !!de._lsGet(de.LS_SHOW_HQ_LABEL) : (e = !!e,
                de._lsSet(de.LS_SHOW_HQ_LABEL, e),
                a.AudioUtils.toggleAudioHQBodyClass(),
                e)
            }
            static getAudioElementsByAudioId(e, t) {
                return (0,
                m.geByClass)(`_audio_row_ ${e}`, t)
            }
            static getDeviceId() {
                let e = de._lsGet(de.LS_UUID);
                return e || (e = (0,
                D.default)(),
                de._lsSet(de.LS_UUID, e)),
                e
            }
            static showSubscriptionPopup() {
                (0,
                c.showBox)("/al_audio.php", {
                    act: "subscription_box"
                }, {
                    params: {
                        containerClass: "audio_subscription_popup",
                        grey: !0,
                        width: 520
                    }
                })
            }
            static getDurationType() {
                return de._lsGet(de.LS_DURATION_TYPE)
            }
            static _setTabIcon(e) {
                (0,
                r.setFavIcon)(de.tabIcons[e])
            }
            static _getLsFullKey(e) {
                return `${de.LS_PREFIX}${e}_ ${vk.id}`
            }
            static _lsGet(e) {
                return ls.get(de._getLsFullKey(e))
            }
            static _lsSet(e, t) {
                return ls.set(de._getLsFullKey(e), t)
            }
            static _lsRemove(e) {
                return ls.remove(de._getLsFullKey(e))
            }
            static _podcastGetStates() {
                return (de._lsGet(de.LS_PODCASTS) || le).states || {}
            }
            static _podcastSetStates(e) {
                const t = de._lsGet(de.LS_PODCASTS) || le;
                t.states = e,
                de._lsSet(de.LS_PODCASTS, t),
                le = t
            }
            static podcastToggleFave(e, t) {
                if (!t)
                    return;
                t = a.AudioUtils.audioTupleToAudioObject(t);
                const i = a.AudioUtils.getAudioExtra(t).faveHash;
                i && window.bookmarkPodcast(e, t.fullId, i)
            }
            static podcastGetPlaybackRate() {
                return (de._lsGet(de.LS_PODCASTS) || le).rate || 1
            }
            static getLang(e) {
                const t = (0,
                n.getAudioPlayer)();
                return t && t.langs ? t.langs[e] : e
            }
            static clearDeprecatedCacheKeys() {
                de._iterateCacheKeys((e=>e === de.LS_VER))
            }
            static clearOutdatedCacheKeys() {
                (de._lsGet(de.LS_SAVED) || 0) < (0,
                _.vkNow)() - 72e5 && de._iterateCacheKeys(((e,t)=>!(0,
                P.inArray)(t, [de.LS_PL, de.LS_TRACK, de.LS_PROGRESS])))
            }
            getCurrentAudioLs() {
                return ap.getCurrentAudio() || de._lsGet(de.LS_TRACK) || null
            }
            static clearAllCacheKeys() {
                de._iterateCacheKeys((()=>!1)),
                (0,
                A.setCookie)("remixcurr_audio", "", -1)
            }
            static _iterateCacheKeys(e) {
                M.vkLocalStorage.getPrefixedKeys(`${de.LS_KEY_PREFIX}_`).forEach((t=>{
                    const [,i,s] = t.split("_");
                    e(i, s) || M.vkLocalStorage.removeItem(s)
                }
                ))
            }
            _initImpl() {
                this._impl && this._impl.destroy();
                let e = 0
                  , t = !1;
                const i = t=>{
                    if (-1 !== e) {
                        if (t && (e++,
                        this.implTaskManager.delay(200),
                        e > 3)) {
                            e = -1;
                            const t = new window.MessageBox({
                                title: d.getLang("global_error")
                            }).content(d.getLang("audio_error_loading")).setButtons("Ok", (function() {
                                e = 0,
                                (0,
                                g.curBox)().hide()
                            }
                            ));
                            return t.show(),
                            (0,
                            T.setWorkerTimeout)((function() {
                                e = 0,
                                t.hide()
                            }
                            ), 3e3),
                            this.notify(L.events.ENDED),
                            void this.notify(L.events.FAILED)
                        }
                        a.AudioUtils.isPodcast(this.getCurrentAudio()) ? (this.setIsPlaying(!1),
                        this.notify(L.events.PAUSE),
                        this.notify(L.events.ENDED),
                        this.stop()) : this._repeatCurrent ? (this._autoNext = !0,
                        this.notify(L.events.ENDED),
                        this.notify(L.events.PROGRESS, 0),
                        this.implTaskManager.seekImmediate(0),
                        (0,
                        T.setWorkerTimeout)((()=>{
                            this._impl && this._impl.clearAudioNode && (this._impl.stop(),
                            this._implSetUrl(this.getCurrentAudio())),
                            this._implPlay()
                        }
                        ))) : (this.setIsPlaying(!1),
                        this.notify(L.events.ENDED),
                        this.playNext(!0))
                    }
                }
                  , s = {
                    onPause: ()=>{
                        this.setIsPlaying(!1),
                        this.setIsPaused(!0),
                        this.notify(L.events.PAUSE),
                        t = !1,
                        this.switchConnection.emit("pause")
                    }
                    ,
                    onPlay: ()=>{
                        this.setIsPaused(!1),
                        this.setIsPlaying(!0),
                        this.setVolume(this.getVolume()),
                        this.notify(L.events.PLAY),
                        t = !1,
                        this.switchConnection.emit("play")
                    }
                    ,
                    onBufferUpdate: e=>{
                        this.notify(L.events.BUFFERED, e)
                    }
                    ,
                    onEnd: i,
                    onFail: ()=>{
                        this._sendPlayerErrorStats(this._impl),
                        i(!0)
                    }
                    ,
                    onCanPlay: ()=>this.notify(L.events.CAN_PLAY),
                    onProgressUpdate: (e,i)=>{
                        const s = this.getCurrentAudio();
                        if (this._muteProgressEvents || !s)
                            return;
                        const o = this._impl.getDuration() || s[a.AudioUtils.AUDIO_ITEM_INDEX_DURATION];
                        this.notify(L.events.PROGRESS, e, o, i),
                        !vk.id && o - i < de.UNAUTH_FADE_TIME && !t && (t = !0,
                        this.fadeOut(1e3 * de.UNAUTH_FADE_TIME))
                    }
                    ,
                    onFrequency: e=>{
                        this.notify(L.events.FREQ_UPDATE, e)
                    }
                    ,
                    defaultVolume: this._userVolume
                };
                this._impl = new C.AudioPlayerHTML5(s),
                this.implTaskManager = new U.AudioTaskManager(this._impl),
                this.implTaskManager.setVolume(0)
            }
            fadeIn(e=300) {
                this.implTaskManager.setVolume(this.getVolume(), !0, e)
            }
            fadeOut(e=300) {
                this.implTaskManager.setVolume(0, !0, e)
            }
            onMediaKeyPressedEvent(e) {
                if (this.getCurrentAudio())
                    switch (e.keyCode) {
                    case 179:
                        this.isPlaying() ? this.pause() : this.play();
                        break;
                    case 178:
                        this.seek(0),
                        this.pause();
                        break;
                    case 177:
                        this.playPrev();
                        break;
                    case 176:
                        this.playNext()
                    }
            }
            setAdsConfig(e) {
                this.ads && this.ads.setAdsConfig(e)
            }
            deletePlaylist(e) {
                for (let t = 0; t < this._playlists.length; t++)
                    this._playlists[t] === e && this._playlists.splice(t, 1)
            }
            mergePlaylistData(e, t) {
                this._playlists.forEach((i=>{
                    i.getId() === e.getId() && i.getOwnerId() === e.getOwnerId() && (i.hasMore() ? i.mergeWith(t) : i.mergeInfo(t))
                }
                ))
            }
            deleteCurrentPlaylist() {
                this.getPlaylistQueue().removeSortedList(),
                delete this._currentAudio,
                delete this._currentPlaylist,
                this.notify(L.events.UPDATE),
                this.notify(L.events.PLAYLIST_CHANGED),
                this.stop(),
                this.updateCurrentPlaying()
            }
            updateCurrentPlaying(e) {
                e = !!e;
                const t = a.AudioUtils.audioTupleToAudioObject(this.getCurrentAudio());
                let i = [];
                if (t) {
                    const e = (0,
                    m.geByClass)("_audio_row_" + t.fullId);
                    i = i.concat([].slice.call(e))
                }
                const s = document.querySelectorAll(".AudioRadiostationItem")
                  , o = (0,
                X.isRadio)(t) && this.isPlaying();
                Array.from(s).forEach((e=>{
                    e.classList.toggle("AudioRadiostationItem--playing", o && parseInt(e.dataset.id) === t.id)
                }
                ));
                for (let t = 0, s = this._currentPlayingRows.length; t < s; t++) {
                    const s = this._currentPlayingRows[t];
                    s && !(0,
                    P.inArray)(s, i) && this.toggleCurrentAudioRow(s, !1, e)
                }
                if (t)
                    for (let t = 0, s = i.length; t < s; t++) {
                        const s = i[t];
                        if (s) {
                            if ((0,
                            m.gpeByClass)("article_editor_canvas", s))
                                continue;
                            this.toggleCurrentAudioRow(s, !0, e)
                        }
                    }
                this._currentPlayingRows = i,
                (0,
                P.each)((0,
                m.geByClass)("_audio_pl"), ((e,t)=>(0,
                m.removeClass)(t, "audio_pl__playing")));
                const l = this.getCurrentPlaylist();
                if (this.isPlaying() && l) {
                    const e = (0,
                    m.geByClass)(`_audio_pl_ ${l.getOwnerId()}_ ${l.getPlaylistId()}`);
                    e && (0,
                    P.each)(e, ((e,t)=>(0,
                    m.addClass)(t, "audio_pl__playing")))
                }
            }
            scrollToCurrentPlaying(e, t) {
                const i = de.getAudioElementsByAudioId(e);
                window.AudioPage && i.forEach((e=>{
                    const i = window.currentAudioPage(e);
                    if (i && i._scroll) {
                        const e = i.getCurrentSectionEl() || i.getPageContainer();
                        de.getAudioElementsByAudioId(t, e).length || i.drawMore(),
                        i.scrollIntoView(de.getAudioElementsByAudioId(t, e)[0], 150)
                    }
                }
                ))
            }
            toggleCurrentAudioRow(e, t, i) {
                const s = a.AudioUtils.getAudioFromEl(e, !0);
                (0,
                m.addClass)(e, a.AudioUtils.AUDIO_CURRENT_CLS),
                s.withInlinePlayer && (0,
                m.toggleClass)(e, "audio_row__player_transition", i),
                (i = !!s.withInlinePlayer && i) ? setTimeout((()=>this._updateAudioEl(t, e, s, i)), 0) : this._updateAudioEl(t, e, s, i)
            }
            _updateAudioEl(e, t, i, s) {
                const o = (0,
                m.geByClass1)("_audio_row__play_btn", t)
                  , l = (0,
                m.geByClass1)("_audio_row__title", t)
                  , r = (0,
                m.geByClass1)("_audio_row__duration", t);
                let n = a.AudioUtils.getDurationMod(e ? i.duration : i.duration * this.getCurrentProgress());
                e && t && !1 === this.isPlaying() && ((0,
                m.removeClass)(t, "audio_row__playing"),
                o && (0,
                m.attr)(o, "aria-label", d.getLang("global_audio_play")),
                l && (0,
                m.attr)(l, "role", ""));
                let u = (e,t="")=>{
                    if (r) {
                        let i = a.AudioUtils.getDurationMod(e);
                        r.innerHTML = t + (0,
                        y.formatTime)(e),
                        i !== n && ((0,
                        m.replaceClass)(r, a.AudioUtils.AUDIO_DURATION_CLS + "-" + n, a.AudioUtils.AUDIO_DURATION_CLS + "-" + i),
                        n = i)
                    }
                }
                ;
                if (i.withInlinePlayer && (e ? this._addRowPlayer(t) : this._removeRowPlayer(t)),
                e) {
                    this.on(t, [L.events.PLAY, L.events.PLAY_REQUESTED], (e=>{
                        a.AudioUtils.audioTupleToAudioObject(e).fullId === i.fullId && ((0,
                        m.addClass)(t, a.AudioUtils.AUDIO_PLAYING_CLS),
                        o && (0,
                        m.attr)(o, "aria-label", d.getLang("global_audio_pause")),
                        l && (0,
                        m.attr)(l, "role", "heading"))
                    }
                    )),
                    this.on(t, L.events.PROGRESS, ((e,t,s)=>{
                        if (!i.withInlinePlayer && this.ads.isActive)
                            return void u(i.duration);
                        s = parseInt(s);
                        let o = 0
                          , a = "";
                        de.getDurationType() ? (o = Math.round(s - t * s),
                        a = "-") : o = Math.round(t * s),
                        u(o, a)
                    }
                    ));
                    let e = (0,
                    m.data)(t, "bars");
                    if (!e && (i.isWithCovers || i.isNumeric || i.isPodcastListSnippet)) {
                        if (e = (0,
                        m.se)('<canvas class="audio_row__sound_bars"></canvas>'),
                        i.isPodcastListSnippet ? (0,
                        m.geByClass1)("podcast_list_snippet__cover", t).appendChild(e) : t.appendChild(e),
                        e.width = a.AudioUtils.AUDIO_ROW_COVER_SIZE * ((0,
                        _.isRetina)() ? 2 : 1),
                        e.height = a.AudioUtils.AUDIO_ROW_COVER_SIZE * ((0,
                        _.isRetina)() ? 2 : 1),
                        e.style.width = a.AudioUtils.AUDIO_ROW_COVER_SIZE,
                        e.style.height = a.AudioUtils.AUDIO_ROW_COVER_SIZE,
                        (0,
                        _.isRetina)()) {
                            e.getContext("2d").scale(2, 2)
                        }
                        const s = getComputedStyle(e).color;
                        this.on(t, L.events.FREQ_UPDATE, ((t,i)=>ue(e, i, s))),
                        ue(e, [0, 0, 0, 0], s),
                        (0,
                        m.data)(t, "bars", e)
                    }
                    (0,
                    m.toggleClass)(t, a.AudioUtils.AUDIO_PLAYING_CLS, this.isPlaying())
                } else {
                    this.off(t),
                    (0,
                    m.removeClass)(t, a.AudioUtils.AUDIO_PLAYING_CLS),
                    (0,
                    m.removeClass)(t, a.AudioUtils.AUDIO_CURRENT_CLS),
                    u(i.duration),
                    o && (0,
                    m.attr)(o, "aria-label", d.getLang("global_audio_play")),
                    l && (0,
                    m.attr)(l, "role", "");
                    let e = (0,
                    m.data)(t, "bars");
                    e && ((0,
                    m.re)(e),
                    (0,
                    m.data)(t, "bars", null))
                }
                s ? setTimeout((()=>{
                    const e = a.AudioUtils.getAudioFromEl(t, !0);
                    (0,
                    m.toggleClass)(t, a.AudioUtils.AUDIO_CURRENT_CLS, !!e.isCurrent)
                }
                ), 0) : (0,
                m.toggleClass)(t, a.AudioUtils.AUDIO_CURRENT_CLS, e)
            }
            _removeRowPlayer(e) {
                (0,
                m.removeClass)(e, a.AudioUtils.AUDIO_CURRENT_CLS);
                const t = (0,
                m.data)(e, "player_inited");
                if (!t)
                    return;
                setTimeout((()=>(0,
                m.re)((0,
                m.geByClass1)("_audio_inline_player", e))), 200);
                const i = (0,
                m.geByClass1)("_audio_duration", e);
                i && (i.innerHTML = (0,
                y.formatTime)(a.AudioUtils.getAudioFromEl(e, !0).duration)),
                this.off(e),
                (0,
                P.each)(t.sliders, ((e,t)=>t.destroy())),
                (0,
                m.data)(e, "player_inited", !1);
                const s = (0,
                m.geByClass1)("has_audio_player", e);
                s && (0,
                m.removeClass)(s, "has_audio_player")
            }
            _addRowPlayer(e) {
                if ((0,
                m.geByClass1)("_audio_inline_player", e) || (0,
                m.hasClass)(e, "podcast_list_snippet") || (0,
                m.hasClass)(e, "podcast_snippet__controls") || (0,
                m.hasClass)(e, "PodcastWidget__player"))
                    return;
                const t = (0,
                m.se)(vk.audioInlinePlayerTpl || (0,
                P.getTemplate)("audio_inline_player"))
                  , i = (0,
                m.geByClass1)("_audio_player__place", e);
                i.appendChild(t),
                (0,
                m.addClass)(i, "has_audio_player");
                const s = new window.Slider((0,
                m.geByClass1)("audio_inline_player_volume", t),{
                    value: this.getVolume(),
                    backValue: 0,
                    size: 1,
                    hintClass: "audio_player_hint",
                    withBackLine: !0,
                    log: !0,
                    formatHint: e=>Math.round(100 * e) + "%",
                    onChange: e=>this.setVolume(e)
                })
                  , o = new window.Slider((0,
                m.geByClass1)("audio_inline_player_progress", t),{
                    value: 0,
                    backValue: 0,
                    size: 1,
                    hintClass: "audio_player_hint",
                    withBackLine: !0,
                    formatHint: e=>(0,
                    y.formatTime)(Math.round(e * this._impl.getDuration())),
                    onEndDragging: e=>{
                        const i = a.AudioUtils.audioTupleToAudioObject(this.getCurrentAudio());
                        i && a.AudioUtils.isPodcast(i) && this.podcastSetActionRef(i, a.AudioUtils.PodcastsLogs.ACTION_SEEK, "", t),
                        this.seek(e)
                    }
                });
                this.ads.isActive && o.toggleAdState(!0),
                vk.id || o.setBlocked(!0),
                this.on(e, L.events.AD_DEINITED, (()=>{}
                )),
                this.on(e, L.events.AD_READY, (()=>{}
                )),
                this.on(e, L.events.AD_STARTED, (()=>{
                    o.toggleAdState(!0),
                    o.setBackValue(0)
                }
                )),
                this.on(e, L.events.AD_COMPLETED, (()=>o.toggleAdState(!1))),
                this.on(e, L.events.START_LOADING, (()=>o.toggleLoading(!0))),
                this.on(e, L.events.CAN_PLAY, (()=>o.toggleLoading(!1))),
                this.on(e, L.events.BUFFERED, ((e,t)=>o.setBackValue(t))),
                this.on(e, L.events.PROGRESS, ((e,t)=>{
                    o.toggleLoading(!1),
                    o.setValue(t)
                }
                )),
                this.on(e, L.events.VOLUME, ((e,t)=>{
                    s.setValue(t, !0)
                }
                )),
                (0,
                m.data)(e, "player_inited", {
                    sliders: [s, o]
                })
            }
            hasStatusExport() {
                for (let e in this._statusExport)
                    if (this._statusExport.hasOwnProperty(e) && this._statusExport[e])
                        return !0;
                return !1
            }
            getStatusExportInfo() {
                return this._statusExport
            }
            setStatusExportInfo(e, t=!1) {
                this._statusExport = e,
                t && this.setStatusExportInfoStorage(e)
            }
            setStatusExportInfoStorage(e) {
                de._lsSet(de.LS_STATUS_EXPORT, e)
            }
            deleteAudioFromAllPlaylists(e) {
                e = (0,
                _.isObject)(e) || (0,
                _.isArray)(e) ? a.AudioUtils.audioTupleToAudioObject(e).fullId : e,
                (0,
                P.each)(this._playlists, ((t,i)=>i.removeAudio(e))),
                this.getPlaylistQueue().removeAudio(e),
                this.saveStateCurrentPlaylist()
            }
            updateAudio(e, t) {
                let i = "";
                return (0,
                _.isString)(e) ? i = e : (0,
                _.isArray)(e) && (i = a.AudioUtils.audioTupleToAudioObject(e).fullId),
                t || (t = e),
                (0,
                P.each)(this._playlists, ((s,o)=>{
                    const l = o.getAudiosList();
                    for (let s = 0, o = l.length; s < o; s++)
                        a.AudioUtils.getAudioFullId(l[s]) === i && (l[s] = (0,
                        N.mergeAudioTupleWithoutContext)(e, t))
                }
                )),
                this._currentAudio && a.AudioUtils.getAudioFullId(this._currentAudio) === i && (this._currentAudio = (0,
                N.mergeAudioTupleWithoutContext)(e, t),
                this.notify(L.events.CURRENT_CHANGED)),
                this.notify(L.events.UPDATE),
                e
            }
            _triggerTNSPixel() {
                const e = de._lsGet("tns_triggered_time_v3") || 0
                  , t = (0,
                _.vkNow)();
                t - e < 864e5 || (de._lsSet("tns_triggered_time_v3", t),
                (0,
                _.vkImage)().src = `https://www.tns-counter.ru/V13a****mail_ru/ru/CP1251/tmsec=mail_audiostart/${(0,
                _.irand)(1, 1e9)}`)
            }
            _restoreVolumeState() {
                de.clearDeprecatedCacheKeys(),
                de.clearOutdatedCacheKeys();
                const e = de._lsGet(de.LS_VOLUME);
                this._userVolume = null == e || !1 === e ? O.DEFAULT_VOLUME : e
            }
            restoreState() {
                if (vk.widget)
                    return;
                if (de.clearDeprecatedCacheKeys(),
                de.clearOutdatedCacheKeys(),
                window.cur.audioPreventRestoreTrack)
                    return;
                this._currentAudio = de._lsGet(de.LS_TRACK);
                let e = de._lsGet(de.LS_PL);
                if (e) {
                    e = JSON.parse(e);
                    const t = this.hasPlaylist(e.type, e.ownerId, e.albumId);
                    e.type === f.AudioPlaylist.TYPE_RADIO && t ? this._currentPlaylist = t : (this._currentPlaylist = new f.AudioPlaylist(e),
                    e.originalPlaylistRawId && (this._currentPlaylist._originalPlaylistRawId = e.originalPlaylistRawId)),
                    this.getPlaylistQueue().setSortedQueue(e.list, e.source),
                    this._initPlayingContext(this._currentPlaylist.getContext())
                }
                this._currentPlaylist && this._currentAudio ? this.notify(L.events.UPDATE) : this._currentPlaylist = this._currentAudio = null;
                let t = 0;
                if (a.AudioUtils.isPodcast(this._currentAudio)) {
                    const e = de._podcastGetStates()
                      , i = `${this._currentAudio[a.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID]}_ ${this._currentAudio[a.AudioUtils.AUDIO_ITEM_INDEX_ID]}`;
                    t = ((e[i] || {}).position || 0) / this._currentAudio[a.AudioUtils.AUDIO_ITEM_INDEX_DURATION]
                } else
                    t = de._lsGet(de.LS_PROGRESS) || 0;
                this._currentAudio && this._impl && this._implSetUrl(this._currentAudio, !0).then((()=>{
                    t && t < 1 ? this.implTaskManager.seek(t) : this.implTaskManager.setVolume(0),
                    this.notify(L.events.CURRENT_CHANGED)
                }
                )).catch((()=>{
                    this.deleteCurrentPlaylist(),
                    this.notify(L.events.CURRENT_CHANGED)
                }
                )),
                this._updatePlaybackRate()
            }
            _implPlay() {
                const e = a.AudioUtils.audioTupleToAudioObject(this.getCurrentAudio());
                this.implTaskManager.play().then((()=>{
                    if (this._muteProgressEvents = !1,
                    this._allowPrefetchNext = !l.browser.safari,
                    e.actionHash && ((0,
                    x.connectListenQueue)(),
                    ajax.post("al_audio.php", {
                        act: "start_playback",
                        audio_id: e.id,
                        owner_id: e.owner_id,
                        hash: e.actionHash,
                        uuid: de.getDeviceId()
                    }, {
                        onFail: ()=>!0
                    })),
                    a.AudioUtils.isPodcast(e)) {
                        const t = this._podcastRestoreState();
                        this._podcastUpdateState(e, t, 0, a.AudioUtils.PodcastsLogs.ACTION_PLAY)
                    }
                }
                ))
            }
            _implSetUrl(e, t) {
                this.implTaskManager.clearTask(U.TaskName.URL),
                t || this.notify(L.events.START_LOADING);
                const i = (0,
                k.audioTupleToAudioObject)(e);
                return this._ensureHasURL(i).then((e=>{
                    if (e.url)
                        return this.implTaskManager.setUrl(e.url).catch((()=>{
                            this.implTaskManager.clearAllTasks(),
                            this.notify(L.events.FAILED),
                            this.isPlaying() && (this.pause(),
                            this.playNext(!0, !0))
                        }
                        ));
                    throw new Error
                }
                ))
            }
            toggleDurationType() {
                const e = de._lsGet(de.LS_DURATION_TYPE);
                de._lsSet(de.LS_DURATION_TYPE, !e),
                this.notify(L.events.UPDATE, this.getCurrentProgress())
            }
            getCurrentProgress() {
                return this._impl ? this._impl.getCurrentProgress() : 0
            }
            getCurrentBuffered() {
                return this._impl ? this._impl.getCurrentBuffered() : 0
            }
            _initEvents() {
                const e = window.Notifier;
                e && (e.addRecvClbk("audio_start", "audio", (()=>{
                    this.audioPlayersSwitch.pause(),
                    (this.isPlaying() || this.ads.isActive) && this.pause(),
                    delete this.pausedByVideo
                }
                )),
                e.addRecvClbk(ie.PreviewAudioPlayerNotification.start, "audio", (()=>{
                    (this.isPlaying() || this.ads.isActive) && (this.pause(),
                    this.pausedByPreview = Date.now())
                }
                )),
                e.addRecvClbk(ie.PreviewAudioPlayerNotification.stop, "audio", (()=>{
                    !this.isPlaying() && this.pausedByPreview && (Date.now() - this.pausedByPreview < 18e4 && this.play(),
                    delete this.pausedByPreview)
                }
                )),
                e.addRecvClbk(ie.PreviewAudioPlayerNotification.pause, "audio", (()=>{
                    !this.isPlaying() && this.pausedByPreview && (Date.now() - this.pausedByPreview < 18e4 && this.play(),
                    delete this.pausedByPreview)
                }
                )),
                e.addRecvClbk("video_start", "audio", (()=>{
                    (this.isPlaying() || this.ads.isActive) && (this.pause(),
                    this.pausedByVideo = Date.now())
                }
                )),
                e.addRecvClbk("video_hide", "audio", (()=>{
                    !this.isPlaying() && this.pausedByVideo && (Date.now() - this.pausedByVideo < 18e4 && this.play(),
                    delete this.pausedByVideo)
                }
                )),
                e.addRecvClbk("logged_off", "audio", (()=>{
                    cur.loggingOff = !0,
                    de.clearAllCacheKeys(),
                    this.stop()
                }
                )),
                e.addRecvClbk("stories_video_start", "audio", (()=>{
                    this.isPlaying() && (this.pause(),
                    this.pausedByStories = (0,
                    _.vkNow)())
                }
                )),
                e.addRecvClbk("stories_video_end", "audio", (()=>{
                    !this.isPlaying() && this.pausedByStories && ((0,
                    _.vkNow)() - this.pausedByStories < 18e4 && this.play(),
                    delete this.pausedByStories)
                }
                ))),
                new z.RadiostationEventsHandling
            }
            addPlaylist(e) {
                const t = this.hasPlaylist(e.getId());
                t ? (t.mergeWith(e.asObject()),
                t.getType() === f.AudioPlaylist.TYPE_RADIO && this._currentPlaylist === t && this.getPlaylistQueue().setSortedQueue(t.getAudiosList())) : this._playlists.push(e)
            }
            _cleanUpPlaylists() {
                let e = 0
                  , t = -1;
                for (let i = this._playlists.length - 1; i >= 0; i--) {
                    const s = this._playlists[i];
                    if (!s.isReference() && (e += s.getAudiosCount(),
                    e > 4e3)) {
                        t = i;
                        break
                    }
                }
                if (-1 === t)
                    return;
                t += 1;
                const i = this._playlists.slice(0, t)
                  , s = this.getCurrentPlaylist()
                  , o = [];
                for (let e = 0; e < i.length; e++) {
                    let a = i[e];
                    if (s === a && (a = !1),
                    a && !a.isReference())
                        for (let e = t; e < this._playlists.length; e++) {
                            const t = this._playlists[e];
                            t.isReference() && t.getSelf() === a && (a = !1)
                        }
                    a && o.push(e)
                }
                for (let e = 0; e < o.length; e++) {
                    const t = o[e];
                    this._playlists.splice(t, 1)
                }
                o.length && (0,
                u.debugLog)("AudioPlayer - " + o.length + " playlists removed")
            }
            hasPlaylist(e, t, i, s) {
                let o;
                if (s)
                    return this._playlists.find((e=>e.getBlockId() === s || e.getAlbumId() === s)) || !1;
                o = void 0 !== t && void 0 !== i ? `${e}_ ${t}_ ${i}` : e;
                for (let e = 0; e < this._playlists.length; e++) {
                    let t = this._playlists[e];
                    if (!t.isReference() && t.getId() === o)
                        return t
                }
                return !1
            }
            getPlaylistByBlockId(e) {
                return this.hasPlaylist(null, null, null, e) || null
            }
            getPlaylistsByType(e) {
                return this._playlists.filter((t=>t.getType() === e)) || null
            }
            getPlaylist(e, t, i, s, o="") {
                !e || t || i || ([e,t,i] = f.AudioPlaylist.splitId(e));
                const a = this.hasPlaylist(e, t, i, o);
                return a ? (a.mergeWith({
                    accessHash: s
                }),
                a) : new f.AudioPlaylist({
                    type: e,
                    ownerId: t,
                    albumId: i,
                    hasMore: e !== f.AudioPlaylist.TYPE_TEMP,
                    accessHash: s,
                    blockId: o
                })
            }
            getPlaylistQueue() {
                return this._playlistQueue
            }
            isFromNextSequence() {
                return 1 === this._seq
            }
            isFromPrevSequence() {
                return -1 === this._seq
            }
            isAutoPlayed() {
                return !!this._autoNext
            }
            hasPrevAudio() {
                return !(!this._prevAudio || a.AudioUtils.getAudioFullId(this._currentAudio) === a.AudioUtils.getAudioFullId(this._prevAudio))
            }
            hasPrevPlaylist() {
                return !!this._prevPlaylist
            }
            toggleRepeatCurrentAudio() {
                this._repeatCurrent = !this._repeatCurrent,
                this._repeatAll = !1
            }
            isRepeatCurrentAudio() {
                return !!this._repeatCurrent
            }
            toggleRepeatAll() {
                this._repeatAll = !this._repeatAll,
                this._repeatCurrent = !1
            }
            isRepeatAll() {
                return !!this._repeatAll
            }
            setNext(e, t) {
                if (vk && vk.widget && !vk.id && window.Widgets)
                    return window.Widgets.oauth(),
                    !1;
                const i = "audio_row__added_next";
                if (!(0,
                m.hasClass)(e, i)) {
                    (0,
                    m.addClass)(e, i);
                    const s = this.getCurrentPlaylist()
                      , o = this.getPlaylistQueue();
                    if (s) {
                        const e = a.AudioUtils.audioTupleToAudioObject(this.getCurrentAudio());
                        if (e && t.fullId === e.fullId)
                            return;
                        const i = o.indexOfAudio(e);
                        if (-1 === i)
                            return;
                        this.notify(L.events.PLAY_NEXT, e.fullId, t.fullId);
                        const s = this.getPlaylistQueue()
                          , l = o.indexOfAudio(t);
                        -1 !== l ? s.moveAudio(l, i + 1) : (s.addAudio((0,
                        B.serializeAudio)(t), i + 1),
                        this.getCurrentPlaylist().pushAudio((0,
                        B.serializeAudio)(t), i + 1)),
                        this.saveStateCurrentPlaylist()
                    } else {
                        const i = a.AudioUtils.getContextPlaylist(e);
                        this.play(t, i.playlist, i.context)
                    }
                    const l = window.AudioPage && window.currentAudioPage(e);
                    if (l) {
                        const e = l.getPageCurrentPlaylist();
                        e && l.onUserAction(t, e)
                    }
                }
            }
            on(e, t, i) {
                (0,
                _.isArray)(t) || (t = [t]);
                const s = (...e)=>i(...e);
                for (const i of t)
                    this.subscribers.push({
                        context: e,
                        et: i,
                        cb: s
                    });
                return ()=>{
                    this.subscribers = this.subscribers.filter((e=>e.cb !== s))
                }
            }
            off(e) {
                this.subscribers = this.subscribers.filter((t=>t.context !== e))
            }
            connectEvents() {
                this.eventBus.precheck = e=>!!this._impl && !(!this.ads.isActive && this._muteProgressEvents && (0,
                P.inArray)(e, [L.events.BUFFERED, L.events.PROGRESS])),
                this.eventBus.onAnyCallBack = (e,...t)=>this.onEvent(e, ...t),
                this.subscribe(L.events.VOLUME, (()=>de._lsSet(de.LS_VOLUME, this._userVolume))),
                this.subscribe(L.events.PLAY_REQUESTED, (()=>{
                    this.updateCurrentPlaying(!0),
                    this.saveStateCurrentPlaylist(),
                    this._saveStateCurrentAudio(),
                    de._setTabIcon("play"),
                    this._sendStatusExport()
                }
                )),
                this.subscribe(L.events.PLAY, (()=>this.updateCurrentPlaying(!0))),
                this.subscribe(L.events.PLAYLIST_CHANGED, (()=>{
                    this.saveStateCurrentPlaylist(),
                    this._saveStateCurrentAudio()
                }
                ));
                var e = this;
                this.subscribe(L.events.PROGRESS, (0,
                s._)((function*(t, i, s) {
                    const o = e.getCurrentAudio()
                      , l = (e.getPlaylistQueue(),
                    (0,
                    k.audioTupleToAudioObject)(o));
                    if (e._listenedTime = s,
                    a.AudioUtils.isPodcast(l))
                        t && s && e._podcastUpdateState(l, t, s, a.AudioUtils.PodcastsLogs.ACTION_HEARTBEAT);
                    else if (!e.ads.isActive) {
                        let t = e._impl.getCurrentProgress();
                        if (vk.widget || de._lsSet(de.LS_PROGRESS, t),
                        !vk.widget && e._allowPrefetchNext && t >= .8) {
                            const t = yield e.getNextAudio();
                            t && e._impl.isFullyLoaded() && (e._allowPrefetchNext = !1,
                            e._prefetchAudio(t))
                        }
                    }
                }
                ))),
                this.subscribe(L.events.PAUSE, (()=>{
                    this.updateCurrentPlaying(!0);
                    const e = this.getCurrentAudio()
                      , t = (0,
                    k.audioTupleToAudioObject)(e);
                    a.AudioUtils.isPodcast(t) && this._podcastUpdateState(t, this.getCurrentProgress(), this._impl.getPlayedTime(), a.AudioUtils.PodcastsLogs.ACTION_PAUSE),
                    de._setTabIcon("pause")
                }
                )),
                this.subscribe(L.events.SEEK, (()=>{
                    const e = this.getCurrentAudio()
                      , t = (0,
                    k.audioTupleToAudioObject)(e);
                    a.AudioUtils.isPodcast(t) && this._podcastUpdateState(t, this.getCurrentProgress(), this._impl.getPlayedTime(), a.AudioUtils.PodcastsLogs.ACTION_SEEK)
                }
                )),
                this.subscribe(L.events.ENDED, (()=>{
                    const e = this.getCurrentAudio()
                      , t = (0,
                    k.audioTupleToAudioObject)(e);
                    a.AudioUtils.isPodcast(t) && this._podcastUpdateState(t, this.getCurrentProgress(), this._impl.getPlayedTime(), a.AudioUtils.PodcastsLogs.ACTION_HEARTBEAT),
                    window.vk && !window.vk.widget && !window.vk.id && (0,
                    W.partConfigEnabled)("audio_unauth_preview_box") && (this.stop(),
                    K.Unauthorized.showMoreBox(null, 0, F.UnauthorizedSourceType.AUDIO))
                }
                )),
                this.subscribe(L.events.RADIOSTATION_FOLLOW, (e=>(0,
                $.updateFaveStatusAfterFollow)(e, !0))),
                this.subscribe(L.events.RADIOSTATION_UNFOLLOW, (e=>(0,
                $.updateFaveStatusAfterFollow)(e, !1)))
            }
            subscribe(e, t) {
                this.eventBus.subscribe(e, t)
            }
            unsubscribe(e, t) {
                this.eventBus.unsubscribe(e, t)
            }
            onEvent(e, t, i, s) {
                (0,
                P.inArray)(e, [L.events.PLAY, L.events.PLAY_REQUESTED, L.events.PAUSE]) && (this.subscribers = this.subscribers.filter((e=>!(e.context instanceof Element) || bodyNode.contains(e.context)))),
                (0,
                P.each)(this.subscribers || [], ((o,a)=>{
                    a.et === e && a.cb(this.getCurrentAudio(), t, i, s)
                }
                ))
            }
            notify(e, ...t) {
                this.eventBus.emit(e, ...t)
            }
            addWithReplacePlaylists(e) {
                const t = e.reduce(((e,t)=>(e[f.AudioPlaylist.getFullIdFromData(t)] = t,
                e)), {})
                  , i = {};
                this._playlists.forEach(((e,s)=>{
                    const o = e.getFullId();
                    if (t[o]) {
                        this._playlists.slice(s, 1);
                        const e = t[o];
                        new f.AudioPlaylist(e),
                        i[o] = !0
                    }
                }
                )),
                Object.keys(t).forEach((e=>{
                    i[e] || new f.AudioPlaylist(t[e])
                }
                ))
            }
            _sendPlayerErrorStats(e) {
                const t = a.AudioUtils.audioTupleToAudioObject(this.getCurrentAudio());
                if (!t)
                    return;
                const {full_id: i} = t
                  , s = (0,
                P.extend)({
                    audio: i,
                    progress: this.getCurrentProgress(),
                    buffered: this.getCurrentBuffered()
                }, e.getErrorData());
                ajax.post("al_audio.php?act=player_error_stats", s)
            }
            playLive(e, t) {
                const i = this.getPlaylist(f.AudioPlaylist.TYPE_LIVE, vk.id, m.data[0])
                  , s = this.getPlaylistQueue();
                i.mergeWith({
                    live: e,
                    hasMore: !1
                }),
                e = i.getLiveInfo(),
                ajax.post("al_audio.php", {
                    act: "a_play_audio_status",
                    audio_id: e.audioId,
                    host_id: e.hostId,
                    hash: e.hash
                }, (0,
                P.extend)(t, {
                    onDone: (e,t,o)=>{
                        i.mergeWith({
                            title: t && t.title,
                            list: [e]
                        }),
                        s.addAudio(e),
                        this.play(e, i, o)
                    }
                    ,
                    onFail: ()=>!0
                }))
            }
            _listenStatusExport() {
                window.addEventListener("storage", (e=>{
                    if (e.key === de.LS_PREFIX + de.LS_STATUS_EXPORT) {
                        const e = de._lsGet(de.LS_STATUS_EXPORT);
                        this.setStatusExportInfo(e),
                        cur.audioPage && cur.audioPage.updateStatusExportControls()
                    }
                }
                ))
            }
            _sendStatusExport() {
                const e = a.AudioUtils.audioTupleToAudioObject(this.getCurrentAudio());
                if (!e)
                    return;
                const t = this.statusSent ? this.statusSent.split(",") : [!1, 0]
                  , i = (0,
                _.vkNow)() - parseInt(t[1]);
                if (this.hasStatusExport() && !a.AudioUtils.isPodcast(e) && (e.id != t[0] || i > 3e5)) {
                    const t = this.getCurrentPlaylist()
                      , i = t ? t.playbackParams : null;
                    setTimeout(ajax.post.pbind("al_audio.php", {
                        act: "audio_status",
                        full_id: e.fullId,
                        hash: vk.statusExportHash,
                        top: i && (i.top_audio || i.top) ? 1 : 0
                    }, {
                        onFail: ()=>!0
                    }), 0),
                    this.statusSent = e.id + "," + (0,
                    _.vkNow)()
                }
            }
            saveStateCurrentPlaylist() {
                const e = this.getCurrentPlaylist()
                  , t = this.getPlaylistQueue();
                if (vk.widget || !e || !t || (0,
                J.isArticleTts)(this._currentAudio))
                    return;
                const i = this._getPreparePlayQueueForSaving(e, t);
                de._lsSet(de.LS_PL, i),
                de._lsSet(de.LS_SAVED, (0,
                _.vkNow)())
            }
            _getPreparePlayQueueForSaving(e, t) {
                const i = e.asObject();
                i.type && (i.type = f.AudioPlaylist.TYPE_TEMP);
                let s = this.getCurrentAudio()
                  , l = Math.max(0, t.indexOfAudio(s));
                const r = (0,
                o._)({}, i, {
                    list: (0,
                    P.clone)(t.list.slice(Math.max(0, l - 100), l + 300), !0),
                    source: t.source
                });
                return (0,
                P.each)(r.list, (function(e, t) {
                    (0,
                    X.isRadio)(t) || (t[a.AudioUtils.AUDIO_ITEM_INDEX_URL] = "")
                }
                )),
                JSON.stringify(r)
            }
            _saveStateCurrentAudio() {
                if (vk.widget)
                    return;
                const e = this.getCurrentAudio();
                if (!e || (0,
                J.isArticleTts)(e))
                    de._lsSet(de.LS_TRACK, null),
                    (0,
                    A.setCookie)("remixcurr_audio", null, 1);
                else {
                    const t = (0,
                    P.clone)(e);
                    (0,
                    X.isRadio)(e) || (t[a.AudioUtils.AUDIO_ITEM_INDEX_URL] = ""),
                    de._lsSet(de.LS_TRACK, t),
                    (0,
                    A.setCookie)("remixcurr_audio", `${e[a.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID]}_ ${e[a.AudioUtils.AUDIO_ITEM_INDEX_ID]}`, 1)
                }
            }
            getListenedTime() {
                return this._listenedTime
            }
            seekCurrentAudio(e, t) {
                if (this.ads.isActive)
                    return !1;
                const i = (t = t || 10) / a.AudioUtils.audioTupleToAudioObject(this.getCurrentAudio()).duration;
                let s = this.getCurrentProgress() + (e ? i : -i);
                s = Math.max(0, Math.min(1, s)),
                this.seek(s)
            }
            setVolume(e, t=!1) {
                const i = Math.min(1, Math.max(0, e));
                this._userVolume !== i && (this._userVolume = i,
                this.notify(L.events.VOLUME, i)),
                this.implTaskManager.setVolume(i, t),
                this.ads.updateVolume()
            }
            getVolume() {
                return void 0 === this._userVolume ? .8 : this._userVolume
            }
            seek(e) {
                this.implTaskManager.seek(e),
                this.notify(L.events.SEEK)
            }
            seekToTime(e, t) {
                const i = this.getCurrentAudio();
                if (!i)
                    return 0;
                let s = e / i[a.AudioUtils.AUDIO_ITEM_INDEX_DURATION];
                if (s = Math.max(0, s),
                s = Math.min(s, 1),
                this.seek(s),
                a.AudioUtils.isPodcast(i)) {
                    let e = "";
                    const o = a.AudioUtils.audioTupleToAudioObject(i);
                    t && (e = a.AudioUtils.PodcastsLogs.ACTION_TIME_MARKER,
                    this.podcastSetActionRef(o, a.AudioUtils.PodcastsLogs.ACTION_SEEK, t)),
                    this._podcastUpdateState(o, s, 0, e)
                }
                return s
            }
            _ensureHasURL(e) {
                this._currentUrlEnsure = this._currentUrlEnsure || {};
                const t = [];
                if (!e)
                    return Promise.reject();
                if (e.url)
                    return Promise.resolve(e);
                const i = this.getPlaylistQueue()
                  , s = i.indexOfAudio(e);
                return s >= 0 ? i.getAudioAt(s).then((e=>a.AudioUtils.audioTupleToAudioObject(e))) : (this._currentUrlEnsure[e.fullId] || t.push(e.fullId + "_" + e.actionHash + "_" + e.urlHash),
                (()=>{
                    let i;
                    return !t.length && this.currentEnsureUrlPromise ? i = this.currentEnsureUrlPromise : (i = new Promise(((e,i)=>{
                        this.ensureUrlReject && this.ensureUrlReject(),
                        this.ensureUrlReject = i,
                        re().then((()=>this.fetchAudioUrls(t))).then((t=>{
                            this.ensureUrlReject = null,
                            e(t)
                        }
                        )).catch((s=>{
                            switch (s) {
                            case "bad_hash":
                                this.ensureUrlReject = null,
                                this.fetchAudios(t).then((e=>this.fetchAudioUrls(e))).then(e).catch((()=>!0));
                                break;
                            case "no_audios":
                                this.ensureUrlReject = null,
                                i()
                            }
                            return !0
                        }
                        ))
                    }
                    )),
                    this.currentEnsureUrlPromise = i),
                    i.then((t=>(Array.isArray(t) && t.forEach((t=>{
                        if (e.fullId === (0,
                        j.getAudioFullId)(t)) {
                            const i = (0,
                            k.audioTupleToAudioObject)(t);
                            e.url = i.url,
                            e.ads = i.ads,
                            e.flags = i.flags,
                            e.extra = i.extra
                        }
                    }
                    )),
                    e)))
                }
                )())
            }
            fetchAudioUrls(e) {
                return new Promise(((t,i)=>{
                    ajax.post("al_audio.php?act=reload_audio", {
                        ids: e.join(",")
                    }, {
                        onDone: (e,i,s)=>{
                            this.setStatusExportInfo(i),
                            s && this._podcastSaveData(s),
                            (0,
                            P.each)(e, ((e,t)=>{
                                t = a.AudioUtils.audioTupleToAudioObject(t);
                                let i = {};
                                i[a.AudioUtils.AUDIO_ITEM_INDEX_URL] = t.url,
                                i[a.AudioUtils.AUDIO_ITEM_INDEX_ADS] = t.ads,
                                i[a.AudioUtils.AUDIO_ITEM_INDEX_FLAGS] = t.flags,
                                i[a.AudioUtils.AUDIO_ITEM_INDEX_EXTRA] = t.extra,
                                this.updateAudio(t.fullId, i),
                                this._currentAudio && (0,
                                j.getAudioFullId)(this._currentAudio) === t.fullId && (this._currentAudio[a.AudioUtils.AUDIO_ITEM_INDEX_URL] = t.url,
                                this._currentAudio[a.AudioUtils.AUDIO_ITEM_INDEX_ADS] = t.ads,
                                this._currentAudio[a.AudioUtils.AUDIO_ITEM_INDEX_FLAGS] = t.flags,
                                this._currentAudio[a.AudioUtils.AUDIO_ITEM_INDEX_EXTRA] = t.extra),
                                delete this._currentUrlEnsure[t.fullId]
                            }
                            )),
                            t(e)
                        }
                        ,
                        onFail: e=>(i(e),
                        !0)
                    })
                }
                ))
            }
            fetchAudios(e) {
                return new Promise(((t,i)=>{
                    ajax.post("al_audio.php?act=reload_audios", {
                        audio_ids: e.join(",")
                    }, {
                        onDone: e=>{
                            const s = []
                              , o = this.getCurrentPlaylist().getAudiosList();
                            if (!Array.isArray(e))
                                return void i();
                            const a = e.reduce(((e,t)=>(e[(0,
                            j.getAudioFullId)(t)] = t,
                            e)), {});
                            for (let e = 0; e < o.length; e++) {
                                const t = (0,
                                j.getAudioFullId)(o[e]);
                                if (a[t]) {
                                    o[e] = a[t];
                                    const i = (0,
                                    k.audioTupleToAudioObject)(a[t]);
                                    s.push(`${i.fullId}_ ${i.actionHash}_ ${i.urlHash}`)
                                }
                            }
                            t(s)
                        }
                    })
                }
                ))
            }
            toggleAudio(e, t) {
                if (vk && vk.widget && window.Widgets && !vk.widgetPodcast && !vk.id && !(0,
                W.partConfigEnabled)("audio_unauth_preview"))
                    return window.Widgets.oauth(),
                    !1;
                if ((0,
                m.domClosest)("_audio_row__tt", t.target))
                    return (0,
                    p.cancelEvent)(t);
                const i = (0,
                m.domClosest)("_audio_row", e)
                  , s = a.AudioUtils.getAudioFromEl(i, !0);
                if (window.getSelection && window.getSelection().rangeCount) {
                    const e = window.getSelection().getRangeAt(0);
                    if (e) {
                        const {commonAncestorContainer: t} = e;
                        if (t && (0,
                        m.domClosest)("_audio_row", t) === i && e.startOffset !== e.endOffset)
                            return !1
                    }
                }
                if (t && (0,
                m.hasClass)(t.target, "mem_link"))
                    return nav.go((0,
                    m.attr)(t.target, "href"), t, {
                        navigateToUploader: !0
                    }),
                    (0,
                    p.cancelEvent)(t);
                if ((0,
                m.hasClass)(t.target, "_audio_row__title_inner")) {
                    if (a.AudioUtils.isPodcast(s))
                        return (0,
                        n.showPodcast)(i, s.fullId),
                        (0,
                        p.cancelEvent)(t);
                    if (s.lyrics && !s.isInAttach && !(0,
                    W.partConfigEnabled)("audio_use_web_new_version_lyrics"))
                        return a.AudioUtils.toggleAudioLyrics(i, s),
                        (0,
                        p.cancelEvent)(t);
                    if (s.hasTrackPage && !s.isClaimed)
                        return;
                    (0,
                    p.cancelEvent)(t)
                }
                if ((0,
                m.hasClass)(t.target.parentNode, "audio_row__performers")) {
                    if ((0,
                    p.checkEvent)(t) || vk.widget)
                        return !0;
                    if (!(0,
                    m.gpeByClass)("_ape_audio_item", t.target)) {
                        const e = (0,
                        m.domData)(t.target, "performer");
                        if (e)
                            return a.AudioUtils.audioSearchPerformer(t.target, e, t),
                            (0,
                            p.cancelEvent)(t)
                    }
                    return !0
                }
                let o = cur.cancelClick || t && ((0,
                m.hasClass)(t.target, "audio_lyrics") || (0,
                m.domClosest)("_audio_duration_wrap", t.target) || (0,
                m.domClosest)("_audio_inline_player", t.target) || (0,
                m.domClosest)("audio_performer", t.target));
                const l = (0,
                m.hasClass)(t.target, "slider") || (0,
                m.domClosest)("slider", t.target)
                  , r = cur._sliderMouseUpNowEl && (cur._sliderMouseUpNowEl === (0,
                m.geByClass1)("audio_inline_player_progress", i) || cur._sliderMouseUpNowEl === (0,
                m.geByClass1)("audio_inline_player_volume", i));
                if ((l || r) && (o = !0),
                delete cur.cancelClick,
                delete cur._sliderMouseUpNowEl,
                o)
                    return !0;
                if (a.AudioUtils.isClaimedAudio(s) || s.isReplaceable) {
                    const e = a.AudioUtils.getAudioExtra(s).claim;
                    if (e)
                        return void ((0,
                        m.hasClass)(i, "no_actions") || s.isInEditBox || window.showAudioClaimWarning(s, e, a.AudioUtils.replaceWithOriginal.bind(a.AudioUtils, i, s)))
                }
                if (this.podcastSetActionRef(s, s.isPlaying ? a.AudioUtils.PodcastsLogs.ACTION_PAUSE : a.AudioUtils.PodcastsLogs.ACTION_PLAY, "", i),
                s.isPlaying) {
                    var d, u;
                    if (this.pause(),
                    null == (d = i) ? void 0 : d.closest("#search_auto_rows"))
                        (0,
                        se.logEvent)({
                            action: se.SearchClickActionMap.PAUSE,
                            track_code: null == (u = s) ? void 0 : u.trackCode,
                            type: se.EventItemType.MUSIC_AUDIO
                        })
                } else {
                    var _;
                    const t = a.AudioUtils.getContextPlaylist(i)
                      , o = this.getPlaylistQueue();
                    var c;
                    if (null == (_ = i) ? void 0 : _.closest("#search_auto_rows"))
                        (0,
                        se.logEvent)({
                            action: se.SearchClickActionMap.PLAY,
                            track_code: null == (c = s) ? void 0 : c.trackCode,
                            type: se.EventItemType.MUSIC_AUDIO
                        });
                    if (o.shuffled && window.AudioPage) {
                        const i = window.currentAudioPage(e)
                          , s = i && i.getCurrentSection();
                        (!i || !(s && "current" === s && ("placeholder_audios_wrapper" === t.context || "autoplay" === t.context))) && this.getPlaylistQueue().resetShuffle()
                    }
                    if (o.isAutoplaySupported && "autoplay" === t.context ? this.play(s.fullId, null, s.context) : (this.play(s.fullId, t.playlist, s.context || t.context),
                    cur.audioPage && cur.audioPage.onUserAction(s, t.playlist)),
                    this._specialProjectController) {
                        const e = (0,
                        q.getSpecialProjectId)(s);
                        e && this._specialProjectController.tryModal(e, s.trackCode)
                    }
                }
                a.AudioUtils.onRowOver(i, !1, !0)
            }
            playNextPlaylist(e, t, i) {
                const s = this.getPlaylist(f.AudioPlaylist.TYPE_PLAYLIST, e, t, i);
                s.loadAll((()=>{
                    const e = this.getCurrentPlaylist()
                      , t = this.getPlaylistQueue();
                    e ? (e.pushAudio(s.getAudiosList()),
                    t.addPlaylist(s)) : (t.addPlaylist(s),
                    this._currentPlaylist = new f.AudioPlaylist(s),
                    t.getAudioAt(0).then((e=>{
                        e && (this._currentAudio = e,
                        this.notify(L.events.UPDATE),
                        this.notify(L.events.PLAYLIST_CHANGED),
                        this.updateCurrentPlaying(),
                        this.isPlaying() || this.play(e.fullId, s))
                    }
                    ))),
                    boxQueue && boxQueue.hideAll(),
                    layers && layers.fullhide && layers.fullhide()
                }
                ))
            }
            setNextPlaylist(e, t, i) {
                const s = this.getPlaylist(f.AudioPlaylist.TYPE_PLAYLIST, e, t, i);
                s.loadAll((()=>{
                    var e;
                    const t = this.getCurrentPlaylist()
                      , i = this.getPlaylistQueue()
                      , o = s.getAudiosList()
                      , a = this._currentAudio ? i.indexOfAudio(this._currentAudio) : -1;
                    var l;
                    const r = this._currentAudio && null != (l = null == (e = t) ? void 0 : e.indexOfAudio(this._currentAudio)) ? l : -1;
                    i.addAudio(o, a + 1),
                    t ? t.pushAudio(o, r + 1) : (this._currentPlaylist = new f.AudioPlaylist(s),
                    i.getAudioAt(0).then((e=>{
                        if (e && (this._currentAudio = e,
                        this.notify(L.events.UPDATE),
                        this.notify(L.events.PLAYLIST_CHANGED),
                        this.updateCurrentPlaying(),
                        !this.isPlaying())) {
                            const [t,i] = e
                              , s = `${i}_ ${t}`;
                            this.play(s, this._currentPlaylist)
                        }
                    }
                    )))
                }
                ))
            }
            playPlaylist(e, t, i, s, o) {
                if (vk && vk.widget && !vk.id && window.Widgets && !(0,
                W.partConfigEnabled)("audio_unauth_preview"))
                    return window.Widgets.oauth(),
                    !1;
                this.playNextInPlaylist(e, t, i, s, {
                    shuffled: o,
                    preDoPlay: e=>{
                        o && (e.shuffled && e.resetShuffle(),
                        e.shuffle(!0, !0),
                        cur.audioPage && cur.audioPage.updateShuffleButton())
                    }
                })
            }
            playBlock(e, t, i, s, o, a="default") {
                this.playNextInPlaylist(e, t, i, s, {
                    type: o,
                    trackType: a,
                    shuffled: !1
                })
            }
            playNextInPlaylist(e, t, i, s, o={}) {
                const a = this.getCurrentPlaylist()
                  , l = this.getPlaylist(o.type || f.AudioPlaylist.TYPE_PLAYLIST, e, t, i)
                  , r = this.getPlaylistQueue();
                if (l.setContext(s),
                a && a.getId() === l.getId() && this.isPlaying() && !o.shuffled)
                    this.pause();
                else {
                    let e = !1;
                    const t = ()=>{
                        e || (r.setSortedQueue(l.getAudiosList()),
                        e = !0,
                        o.shuffled && (this._currentPlaylist = l),
                        o.preDoPlay && o.preDoPlay(r),
                        r.getFirstAudio().then((e=>{
                            if (e) {
                                if (this._specialProjectController) {
                                    const t = (0,
                                    q.getSpecialProjectId)(e);
                                    t && this._specialProjectController.tryModal(t, e.trackCode)
                                }
                                this.play(e, l, s)
                            }
                        }
                        )))
                    }
                    ;
                    if (l.getAudiosCount() && !o.shuffled && !l.isExpired())
                        return void t(l);
                    this._impl && this._impl.preparePlay && !this.ads.isActive && this._impl.preparePlay(),
                    l.load(0, t, null, o.trackType)
                }
            }
            _initPlayingContext(e) {
                this._playingContext = e
            }
            _getPlayingContext() {
                return this._playingContext || ""
            }
            _getPlayingContextSection() {
                return this._getPlayingContext().split(":")[0]
            }
            resume() {
                this.isPaused() && this.play()
            }
            play(e, t, i, o, l) {
                var r = this;
                return (0,
                s._)((function*() {
                    if (cur.loggingOff)
                        return;
                    if (!r._impl)
                        return;
                    let n;
                    r._seq = o,
                    r._autoNext = l,
                    r._prevAudio = r._currentAudio,
                    ((0,
                    _.isObject)(e) || (0,
                    _.isArray)(e)) && (n = e,
                    (e = a.AudioUtils.audioTupleToAudioObject(e)) && (e = e.fullId));
                    const d = r.getPlaylistQueue()
                      , {isAutoplaySupported: c, isAutoplayEnabled: h} = d;
                    let p = a.AudioUtils.audioTupleToAudioObject(r._currentAudio)
                      , y = r.getCurrentPlaylist();
                    !e && p && (e = p.fullId);
                    let g = !1
                      , A = e && p && e == p.fullId;
                    const P = (0,
                    s._)((function*(i) {
                        if (!A) {
                            const e = h && t && t.getNoConsecutivePlay();
                            i && t && (e ? yield d.addNoConsecutivePlaylist(t, i) : yield d.addPlaylist(t)),
                            t && !e && d.list.length < t.getAudiosCount() && d.addAudio(t.getAudiosList()),
                            t && t.getType() === f.AudioPlaylist.TYPE_SEARCH && t.indexOfAudio(i) >= t.getLocalFoundCount() && t.sendSearchStats("search_play"),
                            p && a.AudioUtils.isPodcast(p) && r.isPlaying() && r._podcastUpdateState(p, r.getCurrentProgress(), r._impl.getPlayedTime(), a.AudioUtils.PodcastsLogs.ACTION_PAUSE, {
                                needResetListen: !0
                            }),
                            r.ads.isActive || r.ads.deinit()
                        }
                        if (de._sendLCNotification(),
                        A) {
                            if (r.ads.isActive)
                                r.ads.resume();
                            else if (!r.isPlaying()) {
                                var s;
                                (null == (s = d.autoplayQueue) ? void 0 : s.source) || d.setAutoplaySourceFromPlaylist(t),
                                r.setIsPlaying(!0),
                                r.implTaskManager.clearAllTasks(),
                                r._implSetUrl(p).then((()=>{
                                    r._implPlay(),
                                    r._updatePlaybackRate(),
                                    r.implTaskManager.setVolume(r.getVolume(), !!r._impl.getCurrentProgress()),
                                    a.AudioUtils.isPodcast(i) && r._podcastUpdateState(a.AudioUtils.audioTupleToAudioObject(i), r.getCurrentProgress(), r._impl.getPlayedTime())
                                }
                                )).catch((()=>{}
                                ))
                            }
                        } else
                            e && i && (!l && p && r._impl.setUrl(O.SILENCE),
                            r._currentAudio = i,
                            r.setIsPlaying(!0),
                            r.ads.isActive ? r.ads.resume() : (r.notify(L.events.PLAY_REQUESTED, !0, parseInt(o), l),
                            r._muteProgressEvents = !0,
                            r.implTaskManager.clearAllTasks(),
                            r._impl.preparePlay && r._impl.preparePlay(),
                            r.ads.startPlay(a.AudioUtils.audioTupleToAudioObject(i), (()=>r.playAfterAd())),
                            r.notify(L.events.PROGRESS, 0)),
                            r.updateCurrentPlaying(!0),
                            p && r.scrollToCurrentPlaying(p.fullId, e))
                    }
                    ));
                    if (c && "autoplay" === i || (0,
                    _.isArray)(n) && "autoplay" === n[a.AudioUtils.AUDIO_ITEM_INDEX_CONTEXT]) {
                        const t = d.autoplayQueue.getAudioById(e);
                        if (t)
                            return r.eventBus.emit(L.AudioPlayerEventType.PLAY_TRACK_FROM_AUTOPLAY, t),
                            P(t)
                    }
                    if (t ? y && (g = A ? t.getFullId() === y.getSelf().getFullId() : t === y.getSelf() || t === y) : (t = y,
                    g = !0),
                    g || i || (0,
                    u.debugLog)("New playlist play init without context"),
                    i && (r._prevContext = r._playingContext,
                    r._initPlayingContext(i)),
                    !g) {
                        if (r._cleanUpPlaylists(),
                        r._currentPlaylist)
                            if (r._prevPlaylist = r._currentPlaylist,
                            r._prevAudio = r._currentAudio,
                            h && t.getNoConsecutivePlay()) {
                                t.getAudio(e);
                                const i = Array.isArray(n) ? n : t.getAudio(e);
                                yield d.addNoConsecutivePlaylist(t, i)
                            } else
                                yield d.setSortedQueueByPlaylist(t);
                        r._currentPlaylist = new f.AudioPlaylist(t),
                        r.notify(L.events.PLAYLIST_CHANGED)
                    }
                    if (!(d.indexOfAudio(e) >= 0)) {
                        var E;
                        let i = null == (E = t) ? void 0 : E.getAudio(e);
                        !i && n && (i = n),
                        d.addAudio(i)
                    }
                    P(yield d.getAudio(e))
                }
                ))()
            }
            playAfterAd() {
                this.notify(L.events.CURRENT_CHANGED);
                const e = this.getCurrentAudio();
                e && (this.notify(L.events.UPDATE),
                this._implSetUrl(e).then((()=>{
                    this._implPlay(),
                    this._updatePlaybackRate(),
                    vk.id ? this.implTaskManager.setVolume(this.getVolume()) : this.fadeIn(1e3 * de.UNAUTH_FADE_TIME),
                    this._triggerTNSPixel()
                }
                )).catch((()=>(this.pause(),
                !0))))
            }
            instantPlay(e, t, i) {
                const s = !l.browser.safari && t && t.shiftKey;
                this.playPlaylist(vk.id, f.AudioPlaylist.DEFAULT_PLAYLIST_ID, i, "header", s),
                (0,
                h.statlogsValueEvent)("client_header_play_button", s ? "shuffle" : "play"),
                setTimeout((()=>{
                    (0,
                    m.addClass)(e, "loading")
                }
                ), 400)
            }
            _prefetchAudio(e) {
                (e = a.AudioUtils.audioTupleToAudioObject(e)) && e.url && this._impl.prefetch(e.url)
            }
            getCurrentPlaylist() {
                return this._currentPlaylist
            }
            getPlaylists() {
                return (0,
                P.clone)(this._playlists)
            }
            pause() {
                this.ads.isActive && setTimeout((()=>this.ads.pause()), 100),
                this.implTaskManager.setVolume(0, !0),
                this.implTaskManager.pause()
            }
            stop() {
                this.setIsPlaying(!1),
                this.ads.isActive ? this.ads.stop() : this._impl.stop(),
                this.notify(L.events.STOP),
                this.switchConnection.emit("stop")
            }
            isPlaying() {
                return this._isPlaying
            }
            setIsPlaying(e) {
                this._isPlaying = e,
                this.notify(L.events.PLAYER_IS_PLAYING_CHANGED, e)
            }
            isPaused() {
                return this._isPaused
            }
            setIsPaused(e) {
                this._isPaused = e
            }
            getCurrentAudio() {
                if (this._currentAudio && !this._currentAudio[Q.EAudioTupleIndex.CONTEXT]) {
                    const e = this._getPlayingContext();
                    e && (this._currentAudio[Q.EAudioTupleIndex.CONTEXT] = e)
                }
                return this._currentAudio
            }
            getPreviousAudio() {
                return this._prevAudio
            }
            playNext(e) {
                this._playNext(1, e)
            }
            playPrev() {
                this._playNext(-1)
            }
            _playNext(e, t) {
                if (this.ads.isActive)
                    return;
                const i = this.getCurrentAudio()
                  , s = this.getCurrentPlaylist()
                  , o = this.getPlaylistQueue()
                  , l = (e,i)=>{
                    a.AudioUtils.isClaimedAudio(e) || this.play(e, s, !1, i, t)
                }
                ;
                if (i && s)
                    if (e > 0)
                        o.getNextAudio(i, {
                            ignoreClaimed: !0,
                            repeat: this.isRepeatAll()
                        }).then((e=>{
                            e ? l(e, 1) : s.isLive() ? (this._muteProgressEvents = !0,
                            s.fetchNextLiveAudio((e=>{
                                if (e) {
                                    const t = this.getPlaylistQueue();
                                    let i = t.indexOfAudio(e);
                                    i >= 0 ? t.moveAudio(i, t.length - 1) : t.addAudio(e)
                                }
                                l(e)
                            }
                            ))) : o.getFirstAudio(!0).then((t=>{
                                if (t) {
                                    if (e = t,
                                    !this.isRepeatAll()) {
                                        if (o.indexOfAudio(i) + 1 === o.length)
                                            return this.implTaskManager.seekImmediate(0),
                                            this.stop(),
                                            void (a.AudioUtils.isClaimedAudio(e) || (this._currentAudio = e,
                                            this._implSetUrl(this._currentAudio),
                                            this.updateCurrentPlaying(!0),
                                            this.notify(L.events.CURRENT_CHANGED),
                                            this.notify(L.events.UPDATE)))
                                    }
                                    l(e, 1)
                                }
                            }
                            ))
                        }
                        ));
                    else {
                        o.indexOfAudio(this._currentAudio) < 1 || this._impl.getCurrentTime() > 5 ? this.seek(0) : o.getPrevAudio(i, {
                            ignoreClaimed: !0
                        }).then((e=>{
                            e ? l(e, -1) : this.seek(0)
                        }
                        ))
                    }
            }
            getPrevAudio() {
                var e = this;
                return (0,
                s._)((function*() {
                    const t = e.getPlaylistQueue()
                      , i = e.getCurrentAudio();
                    return i ? t.getPrevAudio(i, {
                        ignoreClaimed: !0,
                        repeat: e.isRepeatAll()
                    }) : t.getLastAudio(!0)
                }
                ))()
            }
            getNextAudio() {
                var e = this;
                return (0,
                s._)((function*() {
                    const t = e.getPlaylistQueue()
                      , i = e.getCurrentAudio();
                    return i ? t.getNextAudio(i, {
                        ignoreClaimed: !0,
                        repeat: e.isRepeatAll()
                    }) : t.getFirstAudio(!0)
                }
                ))()
            }
            adsGetCurrentProgress() {
                return this.ads.getCurrentProgress()
            }
            _podcastUpdateState(e, t, i, s, o) {
                const a = de._podcastGetStates()
                  , l = Math.round(e.duration * t);
                a[e.fullId] = {
                    t: (0,
                    _.vkNow)(),
                    position: l
                },
                de._podcastSetStates(a),
                s && this._podcastSendLogs(s, e, i, l, o)
            }
            _podcastSendLogs(e, t, i, s, o) {
                if (!t || !e || !a.AudioUtils.isPodcast(t) || cur._podcastsActionId && cur._podcastsActionId[e] && this._podcastsActionLastId[e] === cur._podcastsActionId[e])
                    return;
                const l = this._podcastsActionRef[t.fullId] || {}
                  , r = l[e] || {};
                a.AudioUtils.PodcastsLogs.log(e, (0,
                P.extend)({
                    audio: t,
                    position: s,
                    listen: i
                }, r, o || {})),
                delete l[e],
                this._podcastsActionLastId[e] = cur._podcastsActionId ? cur._podcastsActionId[e] : null
            }
            podcastSetActionRef(e, t, i, s) {
                e = a.AudioUtils.audioTupleToAudioObject(e),
                t && a.AudioUtils.isPodcast(e) && (this._podcastsActionRef[e.fullId] = this._podcastsActionRef[e.fullId] || {},
                this._podcastsActionRef[e.fullId][t] = {
                    ref: i,
                    refEl: s
                },
                cur._podcastsActionId = cur._podcastsActionId || {},
                cur._podcastsActionId[t] = (0,
                _.irand)(0, 1e6))
            }
            toggleRadio(e, t) {
                const i = this.getPlaylist(f.AudioPlaylist.TYPE_RADIO, t, f.AudioPlaylist.RADIO_PLAYLIST_ID)
                  , s = i.getAudiosList().find((t=>t[Q.EAudioTupleIndex.ID] === e));
                s && (this.isPlaying() && (0,
                X.isRadio)(this._currentAudio) && s[Q.EAudioTupleIndex.ID] === this._currentAudio[Q.EAudioTupleIndex.ID] ? this.pause() : this.play(s, i))
            }
            _podcastCleanStates() {
                const e = de._podcastGetStates();
                let t = !1;
                return (0,
                P.each)(e, ((i,s)=>{
                    Date.now() - s.t > 2419200 && (delete e[i],
                    t = !0)
                }
                )),
                t && de._podcastSetStates(e),
                e
            }
            _podcastSaveData(e) {
                const t = de._podcastGetStates();
                (0,
                P.each)(e, ((e,i)=>{
                    const s = i.state;
                    if (!s)
                        return;
                    const o = +s[1];
                    (!t[e] || !t[e][1] || o && o > t[e][1]) && (t[e] = {
                        position: +s[0],
                        t: Date.now()
                    })
                }
                )),
                de._podcastSetStates(t)
            }
            _podcastRestoreState() {
                const e = a.AudioUtils.audioTupleToAudioObject(this.getCurrentAudio());
                if (!a.AudioUtils.isPodcast(e))
                    return 0;
                let t = 0;
                if (cur.podcastSeekToTime)
                    t = this.seekToTime(cur.podcastSeekToTime, cur.podcastSeekToTimeRef),
                    delete cur.podcastSeekToTime,
                    delete cur.podcastSeekToTimeRef;
                else {
                    t = ((de._podcastGetStates()[e.fullId] || {}).position || 0) / e.duration,
                    t && t < 1 && this.implTaskManager.seek(t)
                }
                return t && t < 1 ? (this.updateCurrentPlaying(),
                t) : 0
            }
            getCurrentFaveStatus() {
                return !!a.AudioUtils.isPodcast(this._currentAudio) && a.AudioUtils.getAudioExtra(this._currentAudio).fave
            }
            _updatePlaybackRate() {
                const e = a.AudioUtils.isPodcast(this._currentAudio) || a.AudioUtils.isArticleTts(this._currentAudio)
                  , t = !this.ads.isActive && e ? de.podcastGetPlaybackRate() : 1;
                this.implTaskManager.updatePlaybackRate(t)
            }
            podcastChangePlaybackRate(e) {
                const t = de._lsGet(de.LS_PODCASTS) || le;
                let i = t.rate || 1;
                e ? i -= de.PLAYBACK_RATE_STEP : i += de.PLAYBACK_RATE_STEP,
                !e && i > de.PLAYBACK_RATE_MAX ? i = 1 : e && i < 1 && (i = de.PLAYBACK_RATE_MAX),
                t.rate = i,
                de._lsSet(de.LS_PODCASTS, t),
                le = t,
                this._updatePlaybackRate()
            }
            playAudio(e) {
                let t = f.AudioPlaylist.TYPE_TEMP;
                (0,
                J.isArticleTts)(e) && (t = f.AudioPlaylist.TYPE_ARTICLE_TTS);
                const i = new f.AudioPlaylist(t);
                i.mergeWith({
                    list: [e]
                }),
                this.play(e, i)
            }
            constructor() {
                if (this.ensureUrlReject = null,
                this.playerListener = null,
                this._currentAudio = !1,
                this._isPlaying = !1,
                this._isPaused = !1,
                this._prevPlaylist = null,
                this._currentPlaylist = null,
                this._playlists = [],
                this.subscribers = [],
                this._statusExport = {},
                this._currentPlayingRows = [],
                this._podcastsActionRef = {},
                this._podcastsActionLastId = {},
                this._allowPrefetchNext = !0,
                this._specialProjectController = (0,
                W.partConfigEnabled)("audio_special_project_web") ? Z.SpecialProjectController.init(ee.showWebSpecialProjectModal) : null,
                vk.isBanned)
                    return;
                a.AudioUtils.debugLog("Player creation"),
                this.eventBus = new S.EventBus,
                this.audioPlayersSwitch = oe.AudioPlayersSwitch.ensure(),
                this.switchConnection = this.audioPlayersSwitch.connect({
                    resume: ()=>{
                        this.resume()
                    }
                    ,
                    pause: ()=>{
                        this.pause()
                    }
                    ,
                    stop: ()=>{
                        this.stop()
                    }
                }),
                this._playlistQueue = new v.PlaylistQueue(new V.FetchService,this.eventBus);
                const e = new w.WebPlayerAdapter(this);
                (0,
                W.partConfigEnabled)("audio_player_stats_web") && (this.playerListener = new ae.AudioPlayerStatsListener(e)),
                this.stats = new I.AudioStats(e),
                this.lyrics = new G.AudioLyricsProvider,
                this.ads = new b.AudioAds(this,de.getVersion()),
                this.connectEvents(),
                (0,
                x.connectListenQueue)(),
                this._restoreVolumeState(),
                this._initImpl(),
                this._initEvents(),
                this._podcastCleanStates(),
                this._listenStatusExport(),
                (0,
                W.partConfigEnabled)("audio_longtap_web") && te.AudioLongtapTooltip.ensure().getHints(),
                (0,
                E.onDomReady)((()=>{
                    const e = ()=>{
                        try {
                            this.restoreState()
                        } catch (e) {
                            de._lsRemove(de.LS_TRACK),
                            de._lsRemove(de.LS_PL)
                        }
                        a.AudioUtils.toggleAudioHQBodyClass(),
                        this.updateCurrentPlaying()
                    }
                    ;
                    window.ap ? e() : window.addEventListener(ne, e, {
                        once: !0
                    })
                }
                ));
                const t = new Y.WebMediaSessionAdapter(this);
                new H.AudioMediaSession(t).init()
            }
        }
        function ue(e, t, i) {
            let s = e.getContext("2d");
            s.clearRect(0, 0, e.width, e.height),
            s.fillStyle = i;
            for (let e = 0; e < 4; e++) {
                let i = 2 + 12 * t[e];
                s.fillRect(13 + 4 * e, 12 - i + 14, 2, i)
            }
        }
        de.UNAUTH_FADE_TIME = .8,
        de.LS_VER = "v20",
        de.LS_KEY_PREFIX = "audio",
        de.LS_PREFIX = de.LS_KEY_PREFIX + "_" + de.LS_VER + "_",
        de.LS_STATUS_EXPORT = de.LS_KEY_PREFIX + "_status_export",
        de.LS_VOLUME = "vol",
        de.LS_PL = "pl",
        de.LS_TRACK = "track",
        de.LS_SAVED = "saved",
        de.LS_PROGRESS = "progress",
        de.LS_PODCASTS = "podcasts",
        de.LS_DURATION_TYPE = "dur_type",
        de.LS_UUID = "uuid",
        de.LS_ADS_CURRENT_DELAY = "ads_current_delay_v4",
        de.LS_SHOW_HQ_LABEL = "_audio_show_hq_label",
        de.PLAYBACK_RATE_STEP = .5,
        de.PLAYBACK_RATE_MAX = l.browser.safari ? 2 : 3,
        de.tabIcons = {
            def: "/images/icons/favicons/fav_logo.ico",
            play: "/images/icons/favicons/fav_play.ico",
            pause: "/images/icons/favicons/fav_pause.ico"
        }
    }
    ,
    584468: (e,t,i)=>{
        i.d(t, {
            init: ()=>d
        });
        var s = i(480582)
          , o = i(9480)
          , a = i(321178)
          , l = i(145669)
          , r = i(192333)
          , n = i(154776);
        function d() {
            window.AudioLayer = s.default,
            window.AudioUtils = o.AudioUtils,
            window.TopAudioPlayer = a.TopAudioPlayer,
            window.AudioPlaylist = l.AudioPlaylist,
            window.AudioPlayer = r.AudioPlayer,
            window.AudioPlayerUI = n.AudioPlayerUI
        }
    }
    ,
    781475: e=>{
        e.exports = JSON.parse('{"v":"4.8.0","ip":0,"op":31,"fr":30,"w":34,"h":24,"nm":"d","assets":[],"layers":[{"ind":1,"ty":4,"nm":"0","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[6.97,11.66,0]},"a":{"a":0,"k":[-30.886,-653.921,0]},"s":{"a":0,"k":[34,34,100]}},"shapes":[{"ty":"gr","nm":"R","bm":0,"it":[{"ty":"rc","nm":"R","d":1,"s":{"a":1,"k":[{"i":{"x":[0,0],"y":[1,1]},"o":{"x":[0,0],"y":[0,0]},"t":0,"s":[18,18]},{"t":30,"s":[36,18]}]},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0,"y":0},"t":0,"s":[-9,0]},{"t":30,"s":[0,0]}]},"r":{"a":0,"k":10}},{"ty":"fl","nm":"F","bm":0,"c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"r":1},{"ty":"tr","o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[-30.886,-653.921]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"nm":"T","sk":{"a":0,"k":0},"sa":{"a":0,"k":0}}]}],"ip":0,"op":31,"st":0},{"ind":2,"ty":4,"nm":"0","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[6.97,11.66,0]},"a":{"a":0,"k":[-30.886,-653.921,0]},"s":{"a":0,"k":[34,34,100]}},"shapes":[{"ty":"gr","nm":"R","bm":0,"it":[{"ty":"rc","nm":"R","d":1,"s":{"a":1,"k":[{"i":{"x":[0,0],"y":[1,1]},"o":{"x":[0,0],"y":[0,0]},"t":0,"s":[36,18]},{"t":30,"s":[24,18]}]},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0,"y":0},"t":0,"s":[0,0]},{"t":30,"s":[39,0]}]},"r":{"a":0,"k":10}},{"ty":"fl","nm":"F","bm":0,"c":{"a":0,"k":[0,0,0,1]},"o":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":0,"s":[100]},{"t":30,"s":[50]}]},"r":1},{"ty":"tr","o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[-30.886,-653.921]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"nm":"T","sk":{"a":0,"k":0},"sa":{"a":0,"k":0}}]}],"ip":0,"op":31,"st":0},{"ind":3,"ty":4,"nm":"0","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[6.97,11.66,0]},"a":{"a":0,"k":[-30.886,-653.921,0]},"s":{"a":0,"k":[34,34,100]}},"shapes":[{"ty":"gr","nm":"R","bm":0,"it":[{"ty":"rc","nm":"R","d":1,"s":{"a":1,"k":[{"i":{"x":[0,0],"y":[1,1]},"o":{"x":[0,0],"y":[0,0]},"t":0,"s":[24,18]},{"t":30,"s":[18,18]}]},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0,"y":0},"t":0,"s":[39,0]},{"t":30,"s":[69,0]}]},"r":{"a":0,"k":10}},{"ty":"fl","nm":"F","bm":0,"c":{"a":0,"k":[0,0,0,1]},"o":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":0,"s":[50]},{"t":30,"s":[15]}]},"r":1},{"ty":"tr","o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[-30.886,-653.921]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"nm":"T","sk":{"a":0,"k":0},"sa":{"a":0,"k":0}}]}],"ip":0,"op":31,"st":0},{"ind":4,"ty":4,"nm":"0","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[6.97,11.66,0]},"a":{"a":0,"k":[-30.886,-653.921,0]},"s":{"a":0,"k":[34,34,100]}},"shapes":[{"ty":"gr","nm":"R","bm":0,"it":[{"ty":"rc","nm":"R","d":1,"s":{"a":0,"k":[18,18]},"p":{"a":0,"k":[69,0]},"r":{"a":0,"k":10}},{"ty":"fl","nm":"F","bm":0,"c":{"a":0,"k":[0,0,0,1]},"o":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":0,"s":[15]},{"t":30,"s":[0]}]},"r":1},{"ty":"tr","o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[-30.886,-653.921]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"nm":"T","sk":{"a":0,"k":0},"sa":{"a":0,"k":0}}]}],"ip":0,"op":31,"st":0}],"markers":[]}')
    }
    ,
    837971: e=>{
        e.exports = JSON.parse('{"v":"4.8.0","ip":0,"op":121,"fr":30,"w":34,"h":24,"nm":"n","assets":[],"layers":[{"ind":1,"ty":4,"nm":"l","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0],"y":[0]},"t":100,"s":[100]},{"t":110,"s":[0]}]},"r":{"a":0,"k":90},"p":{"a":0,"k":[18.539,11.699,0]},"a":{"a":0,"k":[4.527,1.49,0]},"s":{"a":0,"k":[34,34,100]}},"shapes":[{"ty":"gr","nm":"2","bm":0,"it":[{"ty":"sh","nm":"P","ind":0,"ks":{"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.501,-32.747],[4.516,44.228]],"c":false},"a":0}},{"ty":"st","nm":"S","bm":0,"lc":2,"lj":3,"o":{"a":0,"k":100},"w":{"a":0,"k":18},"c":{"a":0,"k":[0,0,0,1]}},{"ty":"tr","o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"nm":"T","sk":{"a":0,"k":0},"sa":{"a":0,"k":0}}]},{"ty":"tm","nm":"T","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":95,"s":[50]},{"t":105,"s":[0]}]},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":100,"s":[50]},{"t":110,"s":[1]}]},"o":{"a":0,"k":0},"m":2}],"ip":95,"op":111,"st":92},{"ind":2,"ty":4,"nm":"l","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0],"y":[0]},"t":100,"s":[100]},{"t":110,"s":[0]}]},"r":{"a":0,"k":90},"p":{"a":0,"k":[18.539,11.699,0]},"a":{"a":0,"k":[4.527,1.49,0]},"s":{"a":0,"k":[34,34,100]}},"shapes":[{"ty":"gr","nm":"2","bm":0,"it":[{"ty":"sh","nm":"P","ind":0,"ks":{"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.501,-32.747],[4.516,44.228]],"c":false},"a":0}},{"ty":"st","nm":"S","bm":0,"lc":2,"lj":3,"o":{"a":0,"k":100},"w":{"a":0,"k":18},"c":{"a":0,"k":[0,0,0,1]}},{"ty":"tr","o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"nm":"T","sk":{"a":0,"k":0},"sa":{"a":0,"k":0}}]},{"ty":"tm","nm":"T","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":100,"s":[50]},{"t":110,"s":[99]}]},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":95,"s":[50]},{"t":105,"s":[100]}]},"o":{"a":0,"k":0},"m":2}],"ip":95,"op":111,"st":92},{"ind":3,"ty":4,"nm":"N","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[17.653,12.216,0]},"a":{"a":0,"k":[1.921,1.634,0]},"s":{"a":0,"k":[34,34,100]}},"shapes":[{"ty":"gr","nm":"2","bm":0,"it":[{"ty":"sh","nm":"P","ind":0,"ks":{"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4.526,26.978],[4.528,-23.372]],"c":false},"a":0}},{"ty":"sh","nm":"P","ind":1,"ks":{"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[4.528,-23.372],[4.497,-19.52],[2.461,-15.732],[-0.906,-14.009],[-9.719,-14]],"c":false},"a":0}},{"ty":"st","nm":"S","bm":0,"lc":1,"lj":2,"o":{"a":0,"k":100},"w":{"a":0,"k":8},"c":{"a":0,"k":[0,0,0,1]}},{"ty":"tm","nm":"T","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":67,"s":[36]},{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":77,"s":[0]},{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":90,"s":[0]},{"t":100,"s":[36]}]},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":67,"s":[36]},{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":77,"s":[100]},{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":90,"s":[100]},{"t":100,"s":[36]}]},"o":{"a":0,"k":0},"m":2},{"ty":"tr","o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"nm":"T","sk":{"a":0,"k":0},"sa":{"a":0,"k":0}}]}],"ip":60,"op":121,"st":60},{"ind":4,"ty":4,"nm":"N","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[17.653,12.216,0]},"a":{"a":0,"k":[1.921,1.634,0]},"s":{"a":0,"k":[34,34,100]}},"shapes":[{"ty":"gr","nm":"2","bm":0,"it":[{"ty":"sh","nm":"P","ind":0,"ks":{"k":{"i":[[3.84,11.664],[-0.855,4.89],[0,0],[-10.5,0],[0,-5.375],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[-1.903,-5.78],[0.639,-3.656],[0,0],[9.376,0],[0,6.812],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-12.75,14.062],[-12.201,-2.907],[-10.875,-9.5],[1.125,-20.453],[14.438,-9.875],[9.805,0.862],[-11.867,21.133],[-7.828,22.906],[-14.437,23],[18.871,22.98]],"c":false},"a":0}},{"ty":"st","nm":"S","bm":0,"lc":1,"lj":3,"o":{"a":0,"k":100},"w":{"a":0,"k":8},"c":{"a":0,"k":[0,0,0,1]}},{"ty":"tr","o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"nm":"T","sk":{"a":0,"k":0},"sa":{"a":0,"k":0}}]},{"ty":"tm","nm":"T","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":38,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0],"y":[0]},"t":50,"s":[16]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":60,"s":[16]},{"t":70,"s":[53]}]},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":30,"s":[0]},{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":50,"s":[100]},{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":60,"s":[100]},{"t":70,"s":[53]}]},"o":{"a":0,"k":0},"m":2}],"ip":30,"op":71,"st":30},{"ind":5,"ty":4,"nm":"N","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[17.653,12.216,0]},"a":{"a":0,"k":[1.921,1.634,0]},"s":{"a":0,"k":[34,34,100]}},"shapes":[{"ty":"gr","nm":"N","bm":0,"it":[{"ty":"sh","nm":"P","ind":0,"ks":{"k":{"i":[[0,0],[-12,0],[0,0],[-10.5,0],[0,-5.375],[0,0],[0,0],[0,0],[0,-9.875],[8.172,0],[0,0]],"o":[[0,0],[12,0],[0,0],[9.376,0],[0,9.125],[0,0],[0,0],[0,0],[0,6.625],[-11.875,0],[0,0]],"v":[[-38.562,0],[-23.062,0],[-10.875,-10.875],[1.125,-20.453],[14.094,-9.875],[4.93,0.925],[-3.875,1],[4.996,0.918],[14.75,12.75],[2.25,24.25],[-12.875,13.375]],"c":false},"a":0}},{"ty":"tm","nm":"T","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":20,"s":[24]},{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":30,"s":[24]},{"t":38,"s":[97]}]},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":0,"s":[11]},{"t":20,"s":[97]}]},"o":{"a":0,"k":0},"m":1},{"ty":"st","nm":"S","bm":0,"lc":2,"lj":3,"o":{"a":0,"k":100},"w":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":0,"s":[18]},{"t":20,"s":[8]}]},"c":{"a":0,"k":[0,0,0,1]}},{"ty":"tr","o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"nm":"T","sk":{"a":0,"k":0},"sa":{"a":0,"k":0}}]},{"ty":"gr","nm":"N","bm":0,"it":[{"ty":"sh","nm":"P","ind":0,"ks":{"k":{"i":[[0,0],[-12,0],[0,0],[-10.5,0],[0,-5.375],[0,0],[0,0],[0,0],[0,-9.875],[8.172,0],[0,0]],"o":[[0,0],[12,0],[0,0],[9.376,0],[0,9.125],[0,0],[0,0],[0,0],[0,6.625],[-11.875,0],[0,0]],"v":[[-38.562,0],[-23.062,0],[-10.875,-10.875],[1.125,-20.453],[14.094,-9.875],[4.93,0.925],[-3.875,1],[4.996,0.918],[14.75,12.75],[2.25,24.25],[-12.875,13.375]],"c":false},"a":0}},{"ty":"tm","nm":"T","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":20,"s":[21]},{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":30,"s":[21]},{"t":40,"s":[100]}]},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":0,"s":[11]},{"t":20,"s":[100]}]},"o":{"a":0,"k":0},"m":1},{"ty":"st","nm":"S","bm":0,"lc":1,"lj":3,"o":{"a":0,"k":100},"w":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":0,"s":[18]},{"t":20,"s":[8]}]},"c":{"a":0,"k":[0,0,0,1]}},{"ty":"tr","o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"nm":"T","sk":{"a":0,"k":0},"sa":{"a":0,"k":0}}]}],"ip":0,"op":121,"st":0},{"ind":6,"ty":4,"nm":"0","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[6.97,11.66,0]},"a":{"a":0,"k":[-30.886,-653.921,0]},"s":{"a":0,"k":[34,34,100]}},"shapes":[{"ty":"gr","nm":"R","bm":0,"it":[{"ty":"rc","nm":"R","d":1,"s":{"a":1,"k":[{"i":{"x":[0,0],"y":[1,1]},"o":{"x":[0,0],"y":[0,0]},"t":0,"s":[24,18]},{"t":20,"s":[18,18]}]},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0,"y":0},"t":0,"s":[39,0]},{"t":20,"s":[69,0]}]},"r":{"a":0,"k":10}},{"ty":"fl","nm":"F","bm":0,"c":{"a":0,"k":[0,0,0,1]},"o":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":0,"s":[50]},{"t":20,"s":[0]}]},"r":1},{"ty":"tr","o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[-30.886,-653.921]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"nm":"T","sk":{"a":0,"k":0},"sa":{"a":0,"k":0}}]}],"ip":0,"op":121,"st":0},{"ind":7,"ty":4,"nm":"0","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[6.97,11.66,0]},"a":{"a":0,"k":[-30.886,-653.921,0]},"s":{"a":0,"k":[34,34,100]}},"shapes":[{"ty":"gr","nm":"R","bm":0,"it":[{"ty":"rc","nm":"R","d":1,"s":{"a":0,"k":[18,18]},"p":{"a":0,"k":[69,0]},"r":{"a":0,"k":10}},{"ty":"fl","nm":"F","bm":0,"c":{"a":0,"k":[0,0,0,1]},"o":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0],"y":[0]},"t":0,"s":[15]},{"t":20,"s":[0]}]},"r":1},{"ty":"tr","o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[-30.886,-653.921]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"nm":"T","sk":{"a":0,"k":0},"sa":{"a":0,"k":0}}]}],"ip":0,"op":121,"st":0}],"markers":[]}')
    }
}]);
try {
    stManager.done("dist/audioplayer.8fc7e69d7c34932b4535.js")
} catch (e) {}
