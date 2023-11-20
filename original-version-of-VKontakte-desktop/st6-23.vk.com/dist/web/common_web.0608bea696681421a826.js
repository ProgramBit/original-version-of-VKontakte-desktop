(()=>{
    "use strict";
    var e, a, t, r, d, o, n = {
        892589: (e,a,t)=>{
            var r, d, o, n = t(853708);
            (null == (d = window.vk) || null == (r = d.pe) ? void 0 : r.static_manager_dynamic_imports) && (null == (o = window.vk) ? void 0 : o.stDomain) && (t.p = window.vk.stDomain + "/dist/"),
            (0,
            n.initCommonWeb)(),
            window.stManager.done(window.jsc("web/common_web.js"))
        }
    }, c = {};
    function s(e) {
        var a = c[e];
        if (void 0 !== a)
            return a.exports;
        var t = c[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, s),
        t.loaded = !0,
        t.exports
    }
    s.m = n,
    s.amdO = {},
    e = [],
    s.O = (a,t,r,d)=>{
        if (!t) {
            var o = 1 / 0;
            for (i = 0; i < e.length; i++) {
                for (var [t,r,d] = e[i], n = !0, c = 0; c < t.length; c++)
                    (!1 & d || o >= d) && Object.keys(s.O).every((e=>s.O[e](t[c]))) ? t.splice(c--, 1) : (n = !1,
                    d < o && (o = d));
                if (n) {
                    e.splice(i--, 1);
                    var f = r();
                    void 0 !== f && (a = f)
                }
            }
            return a
        }
        d = d || 0;
        for (var i = e.length; i > 0 && e[i - 1][2] > d; i--)
            e[i] = e[i - 1];
        e[i] = [t, r, d]
    }
    ,
    s.n = e=>{
        var a = e && e.__esModule ? ()=>e.default : ()=>e;
        return s.d(a, {
            a
        }),
        a
    }
    ,
    t = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__,
    s.t = function(e, r) {
        if (1 & r && (e = this(e)),
        8 & r)
            return e;
        if ("object" == typeof e && e) {
            if (4 & r && e.__esModule)
                return e;
            if (16 & r && "function" == typeof e.then)
                return e
        }
        var d = Object.create(null);
        s.r(d);
        var o = {};
        a = a || [null, t({}), t([]), t(t)];
        for (var n = 2 & r && e; "object" == typeof n && !~a.indexOf(n); n = t(n))
            Object.getOwnPropertyNames(n).forEach((a=>o[a] = ()=>e[a]));
        return o.default = ()=>e,
        s.d(d, o),
        d
    }
    ,
    s.d = (e,a)=>{
        for (var t in a)
            s.o(a, t) && !s.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: a[t]
            })
    }
    ,
    s.f = {},
    s.e = e=>Promise.all(Object.keys(s.f).reduce(((a,t)=>(s.f[t](e, a),
    a)), [])),
    s.u = e=>25394 === e ? "AudioLongtapModal.98b6df61d646414354a3.js" : 24817 === e ? "hls.7bfefe299fa92971b99a.js" : 75980 === e ? "menu_settings.b73d1f0a03f70163e02d.js" : 96816 === e ? "web-audio-lyrics-modal.5b786d2492e85e4a335f.js" : 9375 === e ? "voice_message_player.f0c31b4a3dc08de145c9.js" : 28762 === e ? "speech.be0c329a1eff7c81577d.js" : 57468 === e ? "SilentModeForms.6cf18c53f58f775934b3.js" : 28872 === e ? "feed-client-nav-skeleton.93951c516f1e3f2a55ad.js" : 35953 === e ? "feed-client-nav-async-right-block.98e503ddcd7a638e1b63.js" : 29019 === e ? "ReportForm.32750ffa82cf4b752bef.js" : 88769 === e ? "vkcom-kit-dnd.74829bddf77c9360909d.js" : 55489 === e ? "lottie-light.511c5814b6f1077825b7.js" : 94749 === e ? "6b5a318884d3469d78bf8c2fca986e5e.async.d882d5b8d08810c43c63.js" : 93911 === e ? "pageClips.dc5af5569c71076ee604.js" : 23037 === e ? "pageMarketItem.92059f8739397ea26f0c.js" : 96e3 === e ? "bf75edf917a56d9dedade4edd137d92e.async.f3e527d667aba19a9f38.js" : 61126 === e ? "db629cf47f47b1fd2e4e77724bc72353.async.39cabaadb6a07e1f35c8.js" : 71503 === e ? "11d2d6dc4aa79835b10ff36e552fe032.async.cdae751725a6f0db4300.js" : 8 === e ? "PhotosVKCOMApp.4519ad7feca44fa967f2.js" : 68137 === e ? "1c20f60ee879bca5a33f5ac404c8fb29.async.8e7d31c798d6bcf6ea2f.js" : 18523 === e ? "pageSearch.060f98082e5ad8e369fe.js" : 57615 === e ? "pageDocs.b9dd5578941d458cf1eb.js" : 24460 === e ? "5758ec608736bd0c575db4a0746cff7d.async.2925c349a6fffe1e03fa.js" : 86363 === e ? "f4bb5f1bcc54cfc0a6fae25b97c0bf38.async.cbd7e580593699657ded.js" : 56135 === e ? "62963516ed85443dc37a5e08d49b80a7.async.c05f1c46b8002652cff1.js" : 81050 === e ? "164fffbe29997345bfb2012443bc4dd2.async.62baf7ad8012a6399785.js" : 36269 === e ? "2e31618d3921ce9f97417e3c6a2bcaa1.async.e4b25f1e4ec70639560f.js" : 34244 === e ? "pageIM.1448cb5a9e5841ca2ec1.js" : 3119 === e ? "pageFriends.e8fafaa86518aa7d198f.js" : 58649 === e ? "CommunityAppsCatalog.0099dc4fa547727c05f2.js" : 65932 === e ? "pageSettings.ca56ec56376188fc0a31.js" : 74212 === e ? e + ".3c2153e4b2773d84f0b3.js" : 89658 === e ? "video_groups_redesign.01c5860e7f52024b4a3e.js" : 34932 === e ? "MarketItemsCarousel.bf83bbdd3c23f82bb9fa.js" : 4387 === e ? "4387.5b6318261a6b6a5c4571.js" : 3225 === e ? "marusia-fc-sdk.bc5591ac33e722f9944e.js" : 9960 === e ? "videoplayer-interactive.f0da9f519b00c8f68db5.js" : 9202 === e ? "9202.86f75cbec80f1d2f1f88.js" : 79118 === e ? e + ".87b62f94f0e27cef52c4.js" : 38288 === e ? "lottie.5e4758c39f106eab733a.js" : void 0,
    s.miniCssF = e=>e + "." + {
        8: "3d0f00b0e50239ae4d6f",
        3119: "2dd57e3faf0305a61c09",
        18523: "39b7a20c3b7bde4802f0",
        23037: "ddef3d471c242225481e",
        25394: "6af57e1b0cf5a74f9a87",
        29019: "9d48306224b1e9bf8983",
        34244: "baa473d829aeebaad2c5",
        34932: "816f15edaf1f59159964",
        36269: "08b5c2c4e1a084dfc3ea",
        57468: "35be3dfa1e90e3cdd0a1",
        57615: "362dfa5b896422e9770f",
        58649: "6878ef7ff84896de2bbb",
        75980: "5bbee2c9f3e189193a73",
        89658: "4f2bfdbcab760250702a",
        93911: "daa0e8de55684657fce7"
    }[e] + ".css",
    s.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    s.hmd = e=>((e = Object.create(e)).children || (e.children = []),
    Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: ()=>{
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }),
    e),
    s.o = (e,a)=>Object.prototype.hasOwnProperty.call(e, a),
    r = {},
    s.l = (e,a,t,d)=>{
        if (r[e])
            r[e].push(a);
        else {
            var o, n;
            if (void 0 !== t)
                for (var c = document.getElementsByTagName("script"), f = 0; f < c.length; f++) {
                    var i = c[f];
                    if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == "vk:" + t) {
                        o = i;
                        break
                    }
                }
            o || (n = !0,
            (o = document.createElement("script")).charset = "utf-8",
            o.timeout = 120,
            s.nc && o.setAttribute("nonce", s.nc),
            o.setAttribute("data-webpack", "vk:" + t),
            o.src = e),
            r[e] = [a];
            var b = (a,t)=>{
                o.onerror = o.onload = null,
                clearTimeout(l);
                var d = r[e];
                if (delete r[e],
                o.parentNode && o.parentNode.removeChild(o),
                d && d.forEach((e=>e(t))),
                a)
                    return a(t)
            }
              , l = setTimeout(b.bind(null, void 0, {
                type: "timeout",
                target: o
            }), 12e4);
            o.onerror = b.bind(null, o.onerror),
            o.onload = b.bind(null, o.onload),
            n && document.head.appendChild(o)
        }
    }
    ,
    s.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.nmd = e=>(e.paths = [],
    e.children || (e.children = []),
    e),
    s.p = "/dist/",
    d = e=>new Promise(((a,t)=>{
        var r = s.miniCssF(e)
          , d = s.p + r;
        if (((e,a)=>{
            for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                var d = (n = t[r]).getAttribute("data-href") || n.getAttribute("href");
                if ("stylesheet" === n.rel && (d === e || d === a))
                    return n
            }
            var o = document.getElementsByTagName("style");
            for (r = 0; r < o.length; r++) {
                var n;
                if ((d = (n = o[r]).getAttribute("data-href")) === e || d === a)
                    return n
            }
        }
        )(r, d))
            return a();
        ((e,a,t,r)=>{
            var d = document.createElement("link");
            d.rel = "stylesheet",
            d.type = "text/css",
            d.onerror = d.onload = o=>{
                if (d.onerror = d.onload = null,
                "load" === o.type)
                    t();
                else {
                    var n = o && ("load" === o.type ? "missing" : o.type)
                      , c = o && o.target && o.target.href || a
                      , s = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                    s.code = "CSS_CHUNK_LOAD_FAILED",
                    s.type = n,
                    s.request = c,
                    d.parentNode.removeChild(d),
                    r(s)
                }
            }
            ,
            d.href = a,
            document.head.appendChild(d)
        }
        )(e, d, a, t)
    }
    )),
    o = {
        43090: 0
    },
    s.f.miniCss = (e,a)=>{
        o[e] ? a.push(o[e]) : 0 !== o[e] && {
            8: 1,
            3119: 1,
            18523: 1,
            23037: 1,
            25394: 1,
            29019: 1,
            34244: 1,
            34932: 1,
            36269: 1,
            57468: 1,
            57615: 1,
            58649: 1,
            75980: 1,
            89658: 1,
            93911: 1
        }[e] && a.push(o[e] = d(e).then((()=>{
            o[e] = 0
        }
        ), (a=>{
            throw delete o[e],
            a
        }
        )))
    }
    ,
    (()=>{
        s.b = document.baseURI || self.location.href;
        var e = {
            43090: 0
        };
        s.f.j = (a,t)=>{
            var r = s.o(e, a) ? e[a] : void 0;
            if (0 !== r)
                if (r)
                    t.push(r[2]);
                else if (8 != a) {
                    var d = new Promise(((t,d)=>r = e[a] = [t, d]));
                    t.push(r[2] = d);
                    var o = s.p + s.u(a)
                      , n = new Error;
                    s.l(o, (t=>{
                        if (s.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0),
                        r)) {
                            var d = t && ("load" === t.type ? "missing" : t.type)
                              , o = t && t.target && t.target.src;
                            n.message = "Loading chunk " + a + " failed.\n(" + d + ": " + o + ")",
                            n.name = "ChunkLoadError",
                            n.type = d,
                            n.request = o,
                            r[1](n)
                        }
                    }
                    ), "chunk-" + a, a)
                } else
                    e[a] = 0
        }
        ,
        s.O.j = a=>0 === e[a];
        var a = (a,t)=>{
            var r, d, [o,n,c] = t, f = 0;
            if (o.some((a=>0 !== e[a]))) {
                for (r in n)
                    s.o(n, r) && (s.m[r] = n[r]);
                if (c)
                    var i = c(s)
            }
            for (a && a(t); f < o.length; f++)
                d = o[f],
                s.o(e, d) && e[d] && e[d][0](),
                e[d] = 0;
            return s.O(i)
        }
          , t = self.webpackChunkvk = self.webpackChunkvk || [];
        t.forEach(a.bind(null, 0)),
        t.push = a.bind(null, t.push.bind(t))
    }
    )();
    var f = s.O(void 0, [75514, 98066, 56990, 24509, 76400, 40885, 76429, 68592], (()=>s(892589)));
    f = s.O(f)
}
)();
