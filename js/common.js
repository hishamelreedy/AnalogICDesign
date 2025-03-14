(function (e, t) {
    function n(e) {
        return B.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1;
    }
    function r(e) {
        if (!mn[e]) {
            var t = D.body,
                n = B("<" + e + ">").appendTo(t),
                r = n.css("display");
            n.remove();
            if (r === "none" || r === "") {
                gn || ((gn = D.createElement("iframe")), (gn.frameBorder = gn.width = gn.height = 0)), t.appendChild(gn);
                if (!yn || !gn.createElement) (yn = (gn.contentWindow || gn.contentDocument).document), yn.write((D.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), yn.close();
                (n = yn.createElement(e)), yn.body.appendChild(n), (r = B.css(n, "display")), t.removeChild(gn);
            }
            mn[e] = r;
        }
        return mn[e];
    }
    function i(e, t) {
        var n = {};
        return (
            B.each(Sn.concat.apply([], Sn.slice(0, t)), function () {
                n[this] = e;
            }),
            n
        );
    }
    function s() {
        xn = t;
    }
    function o() {
        return setTimeout(s, 0), (xn = B.now());
    }
    function u() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    function a() {
        try {
            return new e.XMLHttpRequest();
        } catch (t) {}
    }
    function f(e, n) {
        e.dataFilter && (n = e.dataFilter(n, e.dataType));
        var r = e.dataTypes,
            i = {},
            s,
            o,
            u = r.length,
            a,
            f = r[0],
            l,
            c,
            h,
            p,
            d;
        for (s = 1; s < u; s++) {
            if (s === 1) for (o in e.converters) typeof o == "string" && (i[o.toLowerCase()] = e.converters[o]);
            (l = f), (f = r[s]);
            if (f === "*") f = l;
            else if (l !== "*" && l !== f) {
                (c = l + " " + f), (h = i[c] || i["* " + f]);
                if (!h) {
                    d = t;
                    for (p in i) {
                        a = p.split(" ");
                        if (a[0] === l || a[0] === "*") {
                            d = i[a[1] + " " + f];
                            if (d) {
                                (p = i[p]), p === !0 ? (h = d) : d === !0 && (h = p);
                                break;
                            }
                        }
                    }
                }
                !h && !d && B.error("No conversion from " + c.replace(" ", " to ")), h !== !0 && (n = h ? h(n) : d(p(n)));
            }
        }
        return n;
    }
    function l(e, n, r) {
        var i = e.contents,
            s = e.dataTypes,
            o = e.responseFields,
            u,
            a,
            f,
            l;
        for (a in o) a in r && (n[o[a]] = r[a]);
        while (s[0] === "*") s.shift(), u === t && (u = e.mimeType || n.getResponseHeader("content-type"));
        if (u)
            for (a in i)
                if (i[a] && i[a].test(u)) {
                    s.unshift(a);
                    break;
                }
        if (s[0] in r) f = s[0];
        else {
            for (a in r) {
                if (!s[0] || e.converters[a + " " + s[0]]) {
                    f = a;
                    break;
                }
                l || (l = a);
            }
            f = f || l;
        }
        if (f) return f !== s[0] && s.unshift(f), r[f];
    }
    function c(e, t, n, r) {
        if (B.isArray(t))
            B.each(t, function (t, i) {
                n || zt.test(e) ? r(e, i) : c(e + "[" + (typeof i == "object" || B.isArray(i) ? t : "") + "]", i, n, r);
            });
        else if (!n && t != null && typeof t == "object") for (var i in t) c(e + "[" + i + "]", t[i], n, r);
        else r(e, t);
    }
    function h(e, n) {
        var r,
            i,
            s = B.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && B.extend(!0, e, i);
    }
    function p(e, n, r, i, s, o) {
        (s = s || n.dataTypes[0]), (o = o || {}), (o[s] = !0);
        var u = e[s],
            a = 0,
            f = u ? u.length : 0,
            l = e === sn,
            c;
        for (; a < f && (l || !c); a++) (c = u[a](n, r, i)), typeof c == "string" && (!l || o[c] ? (c = t) : (n.dataTypes.unshift(c), (c = p(e, n, r, i, c, o))));
        return (l || !c) && !o["*"] && (c = p(e, n, r, i, "*", o)), c;
    }
    function d(e) {
        return function (t, n) {
            typeof t != "string" && ((n = t), (t = "*"));
            if (B.isFunction(n)) {
                var r = t.toLowerCase().split(en),
                    i = 0,
                    s = r.length,
                    o,
                    u,
                    a;
                for (; i < s; i++) (o = r[i]), (a = /^\+/.test(o)), a && (o = o.substr(1) || "*"), (u = e[o] = e[o] || []), u[a ? "unshift" : "push"](n);
            }
        };
    }
    function v(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight,
            i = t === "width" ? jt : Ft,
            s = 0,
            o = i.length;
        if (r > 0) {
            if (n !== "border") for (; s < o; s++) n || (r -= parseFloat(B.css(e, "padding" + i[s])) || 0), n === "margin" ? (r += parseFloat(B.css(e, n + i[s])) || 0) : (r -= parseFloat(B.css(e, "border" + i[s] + "Width")) || 0);
            return r + "px";
        }
        r = It(e, t, t);
        if (r < 0 || r == null) r = e.style[t] || 0;
        r = parseFloat(r) || 0;
        if (n) for (; s < o; s++) (r += parseFloat(B.css(e, "padding" + i[s])) || 0), n !== "padding" && (r += parseFloat(B.css(e, "border" + i[s] + "Width")) || 0), n === "margin" && (r += parseFloat(B.css(e, n + i[s])) || 0);
        return r + "px";
    }
    function m(e, t) {
        t.src ? B.ajax({ url: t.src, async: !1, dataType: "script" }) : B.globalEval((t.text || t.textContent || t.innerHTML || "").replace(kt, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t);
    }
    function g(e) {
        var t = D.createElement("div");
        return At.appendChild(t), (t.innerHTML = e.outerHTML), t.firstChild;
    }
    function y(e) {
        var t = (e.nodeName || "").toLowerCase();
        t === "input" ? b(e) : t !== "script" && typeof e.getElementsByTagName != "undefined" && B.grep(e.getElementsByTagName("input"), b);
    }
    function b(e) {
        if (e.type === "checkbox" || e.type === "radio") e.defaultChecked = e.checked;
    }
    function w(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : [];
    }
    function E(e, t) {
        var n;
        if (t.nodeType === 1) {
            t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), (n = t.nodeName.toLowerCase());
            if (n === "object") t.outerHTML = e.outerHTML;
            else if (n !== "input" || (e.type !== "checkbox" && e.type !== "radio")) {
                if (n === "option") t.selected = e.defaultSelected;
                else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue;
            } else e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value);
            t.removeAttribute(B.expando);
        }
    }
    function S(e, t) {
        if (t.nodeType === 1 && !!B.hasData(e)) {
            var n,
                r,
                i,
                s = B._data(e),
                o = B._data(t, s),
                u = s.events;
            if (u) {
                delete o.handle, (o.events = {});
                for (n in u) for (r = 0, i = u[n].length; r < i; r++) B.event.add(t, n + (u[n][r].namespace ? "." : "") + u[n][r].namespace, u[n][r], u[n][r].data);
            }
            o.data && (o.data = B.extend({}, o.data));
        }
    }
    function x(e, t) {
        return B.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function T(e) {
        var t = vt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n;
    }
    function N(e, t, n) {
        t = t || 0;
        if (B.isFunction(t))
            return B.grep(e, function (e, r) {
                var i = !!t.call(e, r, e);
                return i === n;
            });
        if (t.nodeType)
            return B.grep(e, function (e, r) {
                return (e === t) === n;
            });
        if (typeof t == "string") {
            var r = B.grep(e, function (e) {
                return e.nodeType === 1;
            });
            if (ct.test(t)) return B.filter(t, r, !n);
            t = B.filter(t, r);
        }
        return B.grep(e, function (e, r) {
            return B.inArray(e, t) >= 0 === n;
        });
    }
    function C(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11;
    }
    function k() {
        return !0;
    }
    function L() {
        return !1;
    }
    function A(e, t, n) {
        var r = t + "defer",
            i = t + "queue",
            s = t + "mark",
            o = B._data(e, r);
        o &&
            (n === "queue" || !B._data(e, i)) &&
            (n === "mark" || !B._data(e, s)) &&
            setTimeout(function () {
                !B._data(e, i) && !B._data(e, s) && (B.removeData(e, r, !0), o.fire());
            }, 0);
    }
    function O(e) {
        for (var t in e) {
            if (t === "data" && B.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1;
        }
        return !0;
    }
    function M(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(q, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : B.isNumeric(r) ? parseFloat(r) : I.test(r) ? B.parseJSON(r) : r;
                } catch (s) {}
                B.data(e, n, r);
            } else r = t;
        }
        return r;
    }
    function _(e) {
        var t = (j[e] = {}),
            n,
            r;
        e = e.split(/\s+/);
        for (n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
        return t;
    }
    var D = e.document,
        P = e.navigator,
        H = e.location,
        B = (function () {
            function n() {
                if (!r.isReady) {
                    try {
                        D.documentElement.doScroll("left");
                    } catch (e) {
                        setTimeout(n, 1);
                        return;
                    }
                    r.ready();
                }
            }
            var r = function (e, t) {
                    return new r.fn.init(e, t, o);
                },
                i = e.jQuery,
                s = e.$,
                o,
                u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                a = /\S/,
                f = /^\s+/,
                l = /\s+$/,
                c = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                h = /^[\],:{}\s]*$/,
                p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                d = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                v = /(?:^|:|,)(?:\s*\[)+/g,
                m = /(webkit)[ \/]([\w.]+)/,
                g = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                y = /(msie) ([\w.]+)/,
                b = /(mozilla)(?:.*? rv:([\w.]+))?/,
                w = /-([a-z]|[0-9])/gi,
                E = /^-ms-/,
                S = function (e, t) {
                    return (t + "").toUpperCase();
                },
                x = P.userAgent,
                T,
                N,
                C,
                k = Object.prototype.toString,
                L = Object.prototype.hasOwnProperty,
                A = Array.prototype.push,
                O = Array.prototype.slice,
                M = String.prototype.trim,
                _ = Array.prototype.indexOf,
                H = {};
            return (
                (r.fn = r.prototype = {
                    constructor: r,
                    init: function (e, n, i) {
                        var s, o, a, f;
                        if (!e) return this;
                        if (e.nodeType) return (this.context = this[0] = e), (this.length = 1), this;
                        if (e === "body" && !n && D.body) return (this.context = D), (this[0] = D.body), (this.selector = e), (this.length = 1), this;
                        if (typeof e == "string") {
                            e.charAt(0) !== "<" || e.charAt(e.length - 1) !== ">" || e.length < 3 ? (s = u.exec(e)) : (s = [null, e, null]);
                            if (s && (s[1] || !n)) {
                                if (s[1])
                                    return (
                                        (n = n instanceof r ? n[0] : n),
                                        (f = n ? n.ownerDocument || n : D),
                                        (a = c.exec(e)),
                                        a
                                            ? r.isPlainObject(n)
                                                ? ((e = [D.createElement(a[1])]), r.fn.attr.call(e, n, !0))
                                                : (e = [f.createElement(a[1])])
                                            : ((a = r.buildFragment([s[1]], [f])), (e = (a.cacheable ? r.clone(a.fragment) : a.fragment).childNodes)),
                                        r.merge(this, e)
                                    );
                                o = D.getElementById(s[2]);
                                if (o && o.parentNode) {
                                    if (o.id !== s[2]) return i.find(e);
                                    (this.length = 1), (this[0] = o);
                                }
                                return (this.context = D), (this.selector = e), this;
                            }
                            return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                        }
                        return r.isFunction(e) ? i.ready(e) : (e.selector !== t && ((this.selector = e.selector), (this.context = e.context)), r.makeArray(e, this));
                    },
                    selector: "",
                    jquery: "1.7.1",
                    length: 0,
                    size: function () {
                        return this.length;
                    },
                    toArray: function () {
                        return O.call(this, 0);
                    },
                    get: function (e) {
                        return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e];
                    },
                    pushStack: function (e, t, n) {
                        var i = this.constructor();
                        return (
                            r.isArray(e) ? A.apply(i, e) : r.merge(i, e),
                            (i.prevObject = this),
                            (i.context = this.context),
                            t === "find" ? (i.selector = this.selector + (this.selector ? " " : "") + n) : t && (i.selector = this.selector + "." + t + "(" + n + ")"),
                            i
                        );
                    },
                    each: function (e, t) {
                        return r.each(this, e, t);
                    },
                    ready: function (e) {
                        return r.bindReady(), N.add(e), this;
                    },
                    eq: function (e) {
                        return (e = +e), e === -1 ? this.slice(e) : this.slice(e, e + 1);
                    },
                    first: function () {
                        return this.eq(0);
                    },
                    last: function () {
                        return this.eq(-1);
                    },
                    slice: function () {
                        return this.pushStack(O.apply(this, arguments), "slice", O.call(arguments).join(","));
                    },
                    map: function (e) {
                        return this.pushStack(
                            r.map(this, function (t, n) {
                                return e.call(t, n, t);
                            })
                        );
                    },
                    end: function () {
                        return this.prevObject || this.constructor(null);
                    },
                    push: A,
                    sort: [].sort,
                    splice: [].splice,
                }),
                (r.fn.init.prototype = r.fn),
                (r.extend = r.fn.extend = function () {
                    var e,
                        n,
                        i,
                        s,
                        o,
                        u,
                        a = arguments[0] || {},
                        f = 1,
                        l = arguments.length,
                        c = !1;
                    typeof a == "boolean" && ((c = a), (a = arguments[1] || {}), (f = 2)), typeof a != "object" && !r.isFunction(a) && (a = {}), l === f && ((a = this), --f);
                    for (; f < l; f++)
                        if ((e = arguments[f]) != null)
                            for (n in e) {
                                (i = a[n]), (s = e[n]);
                                if (a === s) continue;
                                c && s && (r.isPlainObject(s) || (o = r.isArray(s))) ? (o ? ((o = !1), (u = i && r.isArray(i) ? i : [])) : (u = i && r.isPlainObject(i) ? i : {}), (a[n] = r.extend(c, u, s))) : s !== t && (a[n] = s);
                            }
                    return a;
                }),
                r.extend({
                    noConflict: function (t) {
                        return e.$ === r && (e.$ = s), t && e.jQuery === r && (e.jQuery = i), r;
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function (e) {
                        e ? r.readyWait++ : r.ready(!0);
                    },
                    ready: function (e) {
                        if ((e === !0 && !--r.readyWait) || (e !== !0 && !r.isReady)) {
                            if (!D.body) return setTimeout(r.ready, 1);
                            r.isReady = !0;
                            if (e !== !0 && --r.readyWait > 0) return;
                            N.fireWith(D, [r]), r.fn.trigger && r(D).trigger("ready").off("ready");
                        }
                    },
                    bindReady: function () {
                        if (!N) {
                            N = r.Callbacks("once memory");
                            if (D.readyState === "complete") return setTimeout(r.ready, 1);
                            if (D.addEventListener) D.addEventListener("DOMContentLoaded", C, !1), e.addEventListener("load", r.ready, !1);
                            else if (D.attachEvent) {
                                D.attachEvent("onreadystatechange", C), e.attachEvent("onload", r.ready);
                                var t = !1;
                                try {
                                    t = e.frameElement == null;
                                } catch (i) {}
                                D.documentElement.doScroll && t && n();
                            }
                        }
                    },
                    isFunction: function (e) {
                        return r.type(e) === "function";
                    },
                    isArray:
                        Array.isArray ||
                        function (e) {
                            return r.type(e) === "array";
                        },
                    isWindow: function (e) {
                        return e && typeof e == "object" && "setInterval" in e;
                    },
                    isNumeric: function (e) {
                        return !isNaN(parseFloat(e)) && isFinite(e);
                    },
                    type: function (e) {
                        return e == null ? String(e) : H[k.call(e)] || "object";
                    },
                    isPlainObject: function (e) {
                        if (!e || r.type(e) !== "object" || e.nodeType || r.isWindow(e)) return !1;
                        try {
                            if (e.constructor && !L.call(e, "constructor") && !L.call(e.constructor.prototype, "isPrototypeOf")) return !1;
                        } catch (n) {
                            return !1;
                        }
                        var i;
                        for (i in e);
                        return i === t || L.call(e, i);
                    },
                    isEmptyObject: function (e) {
                        for (var t in e) return !1;
                        return !0;
                    },
                    error: function (e) {
                        throw new Error(e);
                    },
                    parseJSON: function (t) {
                        if (typeof t != "string" || !t) return null;
                        t = r.trim(t);
                        if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
                        if (h.test(t.replace(p, "@").replace(d, "]").replace(v, ""))) return new Function("return " + t)();
                        r.error("Invalid JSON: " + t);
                    },
                    parseXML: function (n) {
                        var i, s;
                        try {
                            e.DOMParser ? ((s = new DOMParser()), (i = s.parseFromString(n, "text/xml"))) : ((i = new ActiveXObject("Microsoft.XMLDOM")), (i.async = "false"), i.loadXML(n));
                        } catch (o) {
                            i = t;
                        }
                        return (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) && r.error("Invalid XML: " + n), i;
                    },
                    noop: function () {},
                    globalEval: function (t) {
                        t &&
                            a.test(t) &&
                            (
                                e.execScript ||
                                function (t) {
                                    e.eval.call(e, t);
                                }
                            )(t);
                    },
                    camelCase: function (e) {
                        return e.replace(E, "ms-").replace(w, S);
                    },
                    nodeName: function (e, t) {
                        return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase();
                    },
                    each: function (e, n, i) {
                        var s,
                            o = 0,
                            u = e.length,
                            a = u === t || r.isFunction(e);
                        if (i) {
                            if (a) {
                                for (s in e) if (n.apply(e[s], i) === !1) break;
                            } else for (; o < u; ) if (n.apply(e[o++], i) === !1) break;
                        } else if (a) {
                            for (s in e) if (n.call(e[s], s, e[s]) === !1) break;
                        } else for (; o < u; ) if (n.call(e[o], o, e[o++]) === !1) break;
                        return e;
                    },
                    trim: M
                        ? function (e) {
                              return e == null ? "" : M.call(e);
                          }
                        : function (e) {
                              return e == null ? "" : (e + "").replace(f, "").replace(l, "");
                          },
                    makeArray: function (e, t) {
                        var n = t || [];
                        if (e != null) {
                            var i = r.type(e);
                            e.length == null || i === "string" || i === "function" || i === "regexp" || r.isWindow(e) ? A.call(n, e) : r.merge(n, e);
                        }
                        return n;
                    },
                    inArray: function (e, t, n) {
                        var r;
                        if (t) {
                            if (_) return _.call(t, e, n);
                            (r = t.length), (n = n ? (n < 0 ? Math.max(0, r + n) : n) : 0);
                            for (; n < r; n++) if (n in t && t[n] === e) return n;
                        }
                        return -1;
                    },
                    merge: function (e, n) {
                        var r = e.length,
                            i = 0;
                        if (typeof n.length == "number") for (var s = n.length; i < s; i++) e[r++] = n[i];
                        else while (n[i] !== t) e[r++] = n[i++];
                        return (e.length = r), e;
                    },
                    grep: function (e, t, n) {
                        var r = [],
                            i;
                        n = !!n;
                        for (var s = 0, o = e.length; s < o; s++) (i = !!t(e[s], s)), n !== i && r.push(e[s]);
                        return r;
                    },
                    map: function (e, n, i) {
                        var s,
                            o,
                            u = [],
                            a = 0,
                            f = e.length,
                            l = e instanceof r || (f !== t && typeof f == "number" && ((f > 0 && e[0] && e[f - 1]) || f === 0 || r.isArray(e)));
                        if (l) for (; a < f; a++) (s = n(e[a], a, i)), s != null && (u[u.length] = s);
                        else for (o in e) (s = n(e[o], o, i)), s != null && (u[u.length] = s);
                        return u.concat.apply([], u);
                    },
                    guid: 1,
                    proxy: function (e, n) {
                        if (typeof n == "string") {
                            var i = e[n];
                            (n = e), (e = i);
                        }
                        if (!r.isFunction(e)) return t;
                        var s = O.call(arguments, 2),
                            o = function () {
                                return e.apply(n, s.concat(O.call(arguments)));
                            };
                        return (o.guid = e.guid = e.guid || o.guid || r.guid++), o;
                    },
                    access: function (e, n, i, s, o, u) {
                        var a = e.length;
                        if (typeof n == "object") {
                            for (var f in n) r.access(e, f, n[f], s, o, i);
                            return e;
                        }
                        if (i !== t) {
                            s = !u && s && r.isFunction(i);
                            for (var l = 0; l < a; l++) o(e[l], n, s ? i.call(e[l], l, o(e[l], n)) : i, u);
                            return e;
                        }
                        return a ? o(e[0], n) : t;
                    },
                    now: function () {
                        return new Date().getTime();
                    },
                    uaMatch: function (e) {
                        e = e.toLowerCase();
                        var t = m.exec(e) || g.exec(e) || y.exec(e) || (e.indexOf("compatible") < 0 && b.exec(e)) || [];
                        return { browser: t[1] || "", version: t[2] || "0" };
                    },
                    sub: function () {
                        function e(t, n) {
                            return new e.fn.init(t, n);
                        }
                        r.extend(!0, e, this),
                            (e.superclass = this),
                            (e.fn = e.prototype = this()),
                            (e.fn.constructor = e),
                            (e.sub = this.sub),
                            (e.fn.init = function (n, i) {
                                return i && i instanceof r && !(i instanceof e) && (i = e(i)), r.fn.init.call(this, n, i, t);
                            }),
                            (e.fn.init.prototype = e.fn);
                        var t = e(D);
                        return e;
                    },
                    browser: {},
                }),
                r.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
                    H["[object " + t + "]"] = t.toLowerCase();
                }),
                (T = r.uaMatch(x)),
                T.browser && ((r.browser[T.browser] = !0), (r.browser.version = T.version)),
                r.browser.webkit && (r.browser.safari = !0),
                a.test(" ") && ((f = /^[\s\xA0]+/), (l = /[\s\xA0]+$/)),
                (o = r(D)),
                D.addEventListener
                    ? (C = function () {
                          D.removeEventListener("DOMContentLoaded", C, !1), r.ready();
                      })
                    : D.attachEvent &&
                      (C = function () {
                          D.readyState === "complete" && (D.detachEvent("onreadystatechange", C), r.ready());
                      }),
                r
            );
        })(),
        j = {};
    B.Callbacks = function (e) {
        e = e ? j[e] || _(e) : {};
        var n = [],
            r = [],
            i,
            s,
            o,
            u,
            a,
            f = function (t) {
                var r, i, s, o, u;
                for (r = 0, i = t.length; r < i; r++) (s = t[r]), (o = B.type(s)), o === "array" ? f(s) : o === "function" && (!e.unique || !c.has(s)) && n.push(s);
            },
            l = function (t, f) {
                (f = f || []), (i = !e.memory || [t, f]), (s = !0), (a = o || 0), (o = 0), (u = n.length);
                for (; n && a < u; a++)
                    if (n[a].apply(t, f) === !1 && e.stopOnFalse) {
                        i = !0;
                        break;
                    }
                (s = !1), n && (e.once ? (i === !0 ? c.disable() : (n = [])) : r && r.length && ((i = r.shift()), c.fireWith(i[0], i[1])));
            },
            c = {
                add: function () {
                    if (n) {
                        var e = n.length;
                        f(arguments), s ? (u = n.length) : i && i !== !0 && ((o = e), l(i[0], i[1]));
                    }
                    return this;
                },
                remove: function () {
                    if (n) {
                        var t = arguments,
                            r = 0,
                            i = t.length;
                        for (; r < i; r++)
                            for (var o = 0; o < n.length; o++)
                                if (t[r] === n[o]) {
                                    s && o <= u && (u--, o <= a && a--), n.splice(o--, 1);
                                    if (e.unique) break;
                                }
                    }
                    return this;
                },
                has: function (e) {
                    if (n) {
                        var t = 0,
                            r = n.length;
                        for (; t < r; t++) if (e === n[t]) return !0;
                    }
                    return !1;
                },
                empty: function () {
                    return (n = []), this;
                },
                disable: function () {
                    return (n = r = i = t), this;
                },
                disabled: function () {
                    return !n;
                },
                lock: function () {
                    return (r = t), (!i || i === !0) && c.disable(), this;
                },
                locked: function () {
                    return !r;
                },
                fireWith: function (t, n) {
                    return r && (s ? e.once || r.push([t, n]) : (!e.once || !i) && l(t, n)), this;
                },
                fire: function () {
                    return c.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!i;
                },
            };
        return c;
    };
    var F = [].slice;
    B.extend({
        Deferred: function (e) {
            var t = B.Callbacks("once memory"),
                n = B.Callbacks("once memory"),
                r = B.Callbacks("memory"),
                i = "pending",
                s = { resolve: t, reject: n, notify: r },
                o = {
                    done: t.add,
                    fail: n.add,
                    progress: r.add,
                    state: function () {
                        return i;
                    },
                    isResolved: t.fired,
                    isRejected: n.fired,
                    then: function (e, t, n) {
                        return u.done(e).fail(t).progress(n), this;
                    },
                    always: function () {
                        return u.done.apply(u, arguments).fail.apply(u, arguments), this;
                    },
                    pipe: function (e, t, n) {
                        return B.Deferred(function (r) {
                            B.each({ done: [e, "resolve"], fail: [t, "reject"], progress: [n, "notify"] }, function (e, t) {
                                var n = t[0],
                                    i = t[1],
                                    s;
                                B.isFunction(n)
                                    ? u[e](function () {
                                          (s = n.apply(this, arguments)), s && B.isFunction(s.promise) ? s.promise().then(r.resolve, r.reject, r.notify) : r[i + "With"](this === u ? r : this, [s]);
                                      })
                                    : u[e](r[i]);
                            });
                        }).promise();
                    },
                    promise: function (e) {
                        if (e == null) e = o;
                        else for (var t in o) e[t] = o[t];
                        return e;
                    },
                },
                u = o.promise({}),
                a;
            for (a in s) (u[a] = s[a].fire), (u[a + "With"] = s[a].fireWith);
            return (
                u
                    .done(
                        function () {
                            i = "resolved";
                        },
                        n.disable,
                        r.lock
                    )
                    .fail(
                        function () {
                            i = "rejected";
                        },
                        t.disable,
                        r.lock
                    ),
                e && e.call(u, u),
                u
            );
        },
        when: function (e) {
            function t(e) {
                return function (t) {
                    (o[e] = arguments.length > 1 ? F.call(arguments, 0) : t), f.notifyWith(l, o);
                };
            }
            function n(e) {
                return function (t) {
                    (r[e] = arguments.length > 1 ? F.call(arguments, 0) : t), --u || f.resolveWith(f, r);
                };
            }
            var r = F.call(arguments, 0),
                i = 0,
                s = r.length,
                o = Array(s),
                u = s,
                a = s,
                f = s <= 1 && e && B.isFunction(e.promise) ? e : B.Deferred(),
                l = f.promise();
            if (s > 1) {
                for (; i < s; i++) r[i] && r[i].promise && B.isFunction(r[i].promise) ? r[i].promise().then(n(i), f.reject, t(i)) : --u;
                u || f.resolveWith(f, r);
            } else f !== e && f.resolveWith(f, s ? [e] : []);
            return l;
        },
    }),
        (B.support = (function () {
            var t,
                n,
                r,
                i,
                s,
                o,
                u,
                a,
                f,
                l,
                c,
                h,
                p,
                d = D.createElement("div"),
                v = D.documentElement;
            d.setAttribute("className", "t"),
                (d.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>"),
                (n = d.getElementsByTagName("*")),
                (r = d.getElementsByTagName("a")[0]);
            if (!n || !n.length || !r) return {};
            (i = D.createElement("select")),
                (s = i.appendChild(D.createElement("option"))),
                (o = d.getElementsByTagName("input")[0]),
                (t = {
                    leadingWhitespace: d.firstChild.nodeType === 3,
                    tbody: !d.getElementsByTagName("tbody").length,
                    htmlSerialize: !!d.getElementsByTagName("link").length,
                    style: /top/.test(r.getAttribute("style")),
                    hrefNormalized: r.getAttribute("href") === "/a",
                    opacity: /^0.55/.test(r.style.opacity),
                    cssFloat: !!r.style.cssFloat,
                    checkOn: o.value === "on",
                    optSelected: s.selected,
                    getSetAttribute: d.className !== "t",
                    enctype: !!D.createElement("form").enctype,
                    html5Clone: D.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
                    submitBubbles: !0,
                    changeBubbles: !0,
                    focusinBubbles: !1,
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0,
                }),
                (o.checked = !0),
                (t.noCloneChecked = o.cloneNode(!0).checked),
                (i.disabled = !0),
                (t.optDisabled = !s.disabled);
            try {
                delete d.test;
            } catch (m) {
                t.deleteExpando = !1;
            }
            !d.addEventListener &&
                d.attachEvent &&
                d.fireEvent &&
                (d.attachEvent("onclick", function () {
                    t.noCloneEvent = !1;
                }),
                d.cloneNode(!0).fireEvent("onclick")),
                (o = D.createElement("input")),
                (o.value = "t"),
                o.setAttribute("type", "radio"),
                (t.radioValue = o.value === "t"),
                o.setAttribute("checked", "checked"),
                d.appendChild(o),
                (a = D.createDocumentFragment()),
                a.appendChild(d.lastChild),
                (t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked),
                (t.appendChecked = o.checked),
                a.removeChild(o),
                a.appendChild(d),
                (d.innerHTML = ""),
                e.getComputedStyle &&
                    ((u = D.createElement("div")),
                    (u.style.width = "0"),
                    (u.style.marginRight = "0"),
                    (d.style.width = "2px"),
                    d.appendChild(u),
                    (t.reliableMarginRight = (parseInt((e.getComputedStyle(u, null) || { marginRight: 0 }).marginRight, 10) || 0) === 0));
            if (d.attachEvent) for (h in { submit: 1, change: 1, focusin: 1 }) (c = "on" + h), (p = c in d), p || (d.setAttribute(c, "return;"), (p = typeof d[c] == "function")), (t[h + "Bubbles"] = p);
            return (
                a.removeChild(d),
                (a = i = s = u = d = o = null),
                B(function () {
                    var e,
                        n,
                        r,
                        i,
                        s,
                        o,
                        u,
                        a,
                        l,
                        c,
                        h,
                        v = D.getElementsByTagName("body")[0];
                    !v ||
                        ((u = 1),
                        (a = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;"),
                        (l = "visibility:hidden;border:0;"),
                        (c = "style='" + a + "border:5px solid #000;padding:0;'"),
                        (h = "<div " + c + "><div></div></div>" + "<table " + c + " cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>"),
                        (e = D.createElement("div")),
                        (e.style.cssText = l + "width:0;height:0;position:static;top:0;margin-top:" + u + "px"),
                        v.insertBefore(e, v.firstChild),
                        (d = D.createElement("div")),
                        e.appendChild(d),
                        (d.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>"),
                        (f = d.getElementsByTagName("td")),
                        (p = f[0].offsetHeight === 0),
                        (f[0].style.display = ""),
                        (f[1].style.display = "none"),
                        (t.reliableHiddenOffsets = p && f[0].offsetHeight === 0),
                        (d.innerHTML = ""),
                        (d.style.width = d.style.paddingLeft = "1px"),
                        (B.boxModel = t.boxModel = d.offsetWidth === 2),
                        typeof d.style.zoom != "undefined" &&
                            ((d.style.display = "inline"),
                            (d.style.zoom = 1),
                            (t.inlineBlockNeedsLayout = d.offsetWidth === 2),
                            (d.style.display = ""),
                            (d.innerHTML = "<div style='width:4px;'></div>"),
                            (t.shrinkWrapBlocks = d.offsetWidth !== 2)),
                        (d.style.cssText = a + l),
                        (d.innerHTML = h),
                        (n = d.firstChild),
                        (r = n.firstChild),
                        (s = n.nextSibling.firstChild.firstChild),
                        (o = { doesNotAddBorder: r.offsetTop !== 5, doesAddBorderForTableAndCells: s.offsetTop === 5 }),
                        (r.style.position = "fixed"),
                        (r.style.top = "20px"),
                        (o.fixedPosition = r.offsetTop === 20 || r.offsetTop === 15),
                        (r.style.position = r.style.top = ""),
                        (n.style.overflow = "hidden"),
                        (n.style.position = "relative"),
                        (o.subtractsBorderForOverflowNotVisible = r.offsetTop === -5),
                        (o.doesNotIncludeMarginInBodyOffset = v.offsetTop !== u),
                        v.removeChild(e),
                        (d = e = null),
                        B.extend(t, o));
                }),
                t
            );
        })());
    var I = /^(?:\{.*\}|\[.*\])$/,
        q = /([A-Z])/g;
    B.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (B.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 },
        hasData: function (e) {
            return (e = e.nodeType ? B.cache[e[B.expando]] : e[B.expando]), !!e && !O(e);
        },
        data: function (e, n, r, i) {
            if (!!B.acceptData(e)) {
                var s,
                    o,
                    u,
                    a = B.expando,
                    f = typeof n == "string",
                    l = e.nodeType,
                    c = l ? B.cache : e,
                    h = l ? e[a] : e[a] && a,
                    p = n === "events";
                if ((!h || !c[h] || (!p && !i && !c[h].data)) && f && r === t) return;
                h || (l ? (e[a] = h = ++B.uuid) : (h = a)), c[h] || ((c[h] = {}), l || (c[h].toJSON = B.noop));
                if (typeof n == "object" || typeof n == "function") i ? (c[h] = B.extend(c[h], n)) : (c[h].data = B.extend(c[h].data, n));
                return (s = o = c[h]), i || (o.data || (o.data = {}), (o = o.data)), r !== t && (o[B.camelCase(n)] = r), p && !o[n] ? s.events : (f ? ((u = o[n]), u == null && (u = o[B.camelCase(n)])) : (u = o), u);
            }
        },
        removeData: function (e, t, n) {
            if (!!B.acceptData(e)) {
                var r,
                    i,
                    s,
                    o = B.expando,
                    u = e.nodeType,
                    a = u ? B.cache : e,
                    f = u ? e[o] : o;
                if (!a[f]) return;
                if (t) {
                    r = n ? a[f] : a[f].data;
                    if (r) {
                        B.isArray(t) || (t in r ? (t = [t]) : ((t = B.camelCase(t)), t in r ? (t = [t]) : (t = t.split(" "))));
                        for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                        if (!(n ? O : B.isEmptyObject)(r)) return;
                    }
                }
                if (!n) {
                    delete a[f].data;
                    if (!O(a[f])) return;
                }
                B.support.deleteExpando || !a.setInterval ? delete a[f] : (a[f] = null), u && (B.support.deleteExpando ? delete e[o] : e.removeAttribute ? e.removeAttribute(o) : (e[o] = null));
            }
        },
        _data: function (e, t, n) {
            return B.data(e, t, n, !0);
        },
        acceptData: function (e) {
            if (e.nodeName) {
                var t = B.noData[e.nodeName.toLowerCase()];
                if (t) return t !== !0 && e.getAttribute("classid") === t;
            }
            return !0;
        },
    }),
        B.fn.extend({
            data: function (e, n) {
                var r,
                    i,
                    s,
                    o = null;
                if (typeof e == "undefined") {
                    if (this.length) {
                        o = B.data(this[0]);
                        if (this[0].nodeType === 1 && !B._data(this[0], "parsedAttrs")) {
                            i = this[0].attributes;
                            for (var u = 0, a = i.length; u < a; u++) (s = i[u].name), s.indexOf("data-") === 0 && ((s = B.camelCase(s.substring(5))), M(this[0], s, o[s]));
                            B._data(this[0], "parsedAttrs", !0);
                        }
                    }
                    return o;
                }
                return typeof e == "object"
                    ? this.each(function () {
                          B.data(this, e);
                      })
                    : ((r = e.split(".")),
                      (r[1] = r[1] ? "." + r[1] : ""),
                      n === t
                          ? ((o = this.triggerHandler("getData" + r[1] + "!", [r[0]])), o === t && this.length && ((o = B.data(this[0], e)), (o = M(this[0], e, o))), o === t && r[1] ? this.data(r[0]) : o)
                          : this.each(function () {
                                var t = B(this),
                                    i = [r[0], n];
                                t.triggerHandler("setData" + r[1] + "!", i), B.data(this, e, n), t.triggerHandler("changeData" + r[1] + "!", i);
                            }));
            },
            removeData: function (e) {
                return this.each(function () {
                    B.removeData(this, e);
                });
            },
        }),
        B.extend({
            _mark: function (e, t) {
                e && ((t = (t || "fx") + "mark"), B._data(e, t, (B._data(e, t) || 0) + 1));
            },
            _unmark: function (e, t, n) {
                e !== !0 && ((n = t), (t = e), (e = !1));
                if (t) {
                    n = n || "fx";
                    var r = n + "mark",
                        i = e ? 0 : (B._data(t, r) || 1) - 1;
                    i ? B._data(t, r, i) : (B.removeData(t, r, !0), A(t, n, "mark"));
                }
            },
            queue: function (e, t, n) {
                var r;
                if (e) return (t = (t || "fx") + "queue"), (r = B._data(e, t)), n && (!r || B.isArray(n) ? (r = B._data(e, t, B.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = B.queue(e, t),
                    r = n.shift(),
                    i = {};
                r === "inprogress" && (r = n.shift()),
                    r &&
                        (t === "fx" && n.unshift("inprogress"),
                        B._data(e, t + ".run", i),
                        r.call(
                            e,
                            function () {
                                B.dequeue(e, t);
                            },
                            i
                        )),
                    n.length || (B.removeData(e, t + "queue " + t + ".run", !0), A(e, t, "queue"));
            },
        }),
        B.fn.extend({
            queue: function (e, n) {
                return (
                    typeof e != "string" && ((n = e), (e = "fx")),
                    n === t
                        ? B.queue(this[0], e)
                        : this.each(function () {
                              var t = B.queue(this, e, n);
                              e === "fx" && t[0] !== "inprogress" && B.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    B.dequeue(this, e);
                });
            },
            delay: function (e, t) {
                return (
                    (e = B.fx ? B.fx.speeds[e] || e : e),
                    (t = t || "fx"),
                    this.queue(t, function (t, n) {
                        var r = setTimeout(t, e);
                        n.stop = function () {
                            clearTimeout(r);
                        };
                    })
                );
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, n) {
                function r() {
                    --u || i.resolveWith(s, [s]);
                }
                typeof e != "string" && ((n = e), (e = t)), (e = e || "fx");
                var i = B.Deferred(),
                    s = this,
                    o = s.length,
                    u = 1,
                    a = e + "defer",
                    f = e + "queue",
                    l = e + "mark",
                    c;
                while (o--) if ((c = B.data(s[o], a, t, !0) || ((B.data(s[o], f, t, !0) || B.data(s[o], l, t, !0)) && B.data(s[o], a, B.Callbacks("once memory"), !0)))) u++, c.add(r);
                return r(), i.promise();
            },
        });
    var R = /[\n\t\r]/g,
        U = /\s+/,
        z = /\r/g,
        W = /^(?:button|input)$/i,
        X = /^(?:button|input|object|select|textarea)$/i,
        V = /^a(?:rea)?$/i,
        $ = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        J = B.support.getSetAttribute,
        K,
        Q,
        G;
    B.fn.extend({
        attr: function (e, t) {
            return B.access(this, e, t, !0, B.attr);
        },
        removeAttr: function (e) {
            return this.each(function () {
                B.removeAttr(this, e);
            });
        },
        prop: function (e, t) {
            return B.access(this, e, t, !0, B.prop);
        },
        removeProp: function (e) {
            return (
                (e = B.propFix[e] || e),
                this.each(function () {
                    try {
                        (this[e] = t), delete this[e];
                    } catch (n) {}
                })
            );
        },
        addClass: function (e) {
            var t, n, r, i, s, o, u;
            if (B.isFunction(e))
                return this.each(function (t) {
                    B(this).addClass(e.call(this, t, this.className));
                });
            if (e && typeof e == "string") {
                t = e.split(U);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1)
                        if (!i.className && t.length === 1) i.className = e;
                        else {
                            s = " " + i.className + " ";
                            for (o = 0, u = t.length; o < u; o++) ~s.indexOf(" " + t[o] + " ") || (s += t[o] + " ");
                            i.className = B.trim(s);
                        }
                }
            }
            return this;
        },
        removeClass: function (e) {
            var n, r, i, s, o, u, a;
            if (B.isFunction(e))
                return this.each(function (t) {
                    B(this).removeClass(e.call(this, t, this.className));
                });
            if ((e && typeof e == "string") || e === t) {
                n = (e || "").split(U);
                for (r = 0, i = this.length; r < i; r++) {
                    s = this[r];
                    if (s.nodeType === 1 && s.className)
                        if (e) {
                            o = (" " + s.className + " ").replace(R, " ");
                            for (u = 0, a = n.length; u < a; u++) o = o.replace(" " + n[u] + " ", " ");
                            s.className = B.trim(o);
                        } else s.className = "";
                }
            }
            return this;
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return B.isFunction(e)
                ? this.each(function (n) {
                      B(this).toggleClass(e.call(this, n, this.className, t), t);
                  })
                : this.each(function () {
                      if (n === "string") {
                          var i,
                              s = 0,
                              o = B(this),
                              u = t,
                              a = e.split(U);
                          while ((i = a[s++])) (u = r ? u : !o.hasClass(i)), o[u ? "addClass" : "removeClass"](i);
                      } else if (n === "undefined" || n === "boolean") this.className && B._data(this, "__className__", this.className), (this.className = this.className || e === !1 ? "" : B._data(this, "__className__") || "");
                  });
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(R, " ").indexOf(t) > -1) return !0;
            return !1;
        },
        val: function (e) {
            var n,
                r,
                i,
                s = this[0];
            if (!!arguments.length)
                return (
                    (i = B.isFunction(e)),
                    this.each(function (r) {
                        var s = B(this),
                            o;
                        if (this.nodeType === 1) {
                            i ? (o = e.call(this, r, s.val())) : (o = e),
                                o == null
                                    ? (o = "")
                                    : typeof o == "number"
                                    ? (o += "")
                                    : B.isArray(o) &&
                                      (o = B.map(o, function (e) {
                                          return e == null ? "" : e + "";
                                      })),
                                (n = B.valHooks[this.nodeName.toLowerCase()] || B.valHooks[this.type]);
                            if (!n || !("set" in n) || n.set(this, o, "value") === t) this.value = o;
                        }
                    })
                );
            if (s) return (n = B.valHooks[s.nodeName.toLowerCase()] || B.valHooks[s.type]), n && "get" in n && (r = n.get(s, "value")) !== t ? r : ((r = s.value), typeof r == "string" ? r.replace(z, "") : r == null ? "" : r);
        },
    }),
        B.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text;
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i,
                            s = e.selectedIndex,
                            o = [],
                            u = e.options,
                            a = e.type === "select-one";
                        if (s < 0) return null;
                        (n = a ? s : 0), (r = a ? s + 1 : u.length);
                        for (; n < r; n++) {
                            i = u[n];
                            if (i.selected && (B.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !B.nodeName(i.parentNode, "optgroup"))) {
                                t = B(i).val();
                                if (a) return t;
                                o.push(t);
                            }
                        }
                        return a && !o.length && u.length ? B(u[s]).val() : o;
                    },
                    set: function (e, t) {
                        var n = B.makeArray(t);
                        return (
                            B(e)
                                .find("option")
                                .each(function () {
                                    this.selected = B.inArray(B(this).val(), n) >= 0;
                                }),
                            n.length || (e.selectedIndex = -1),
                            n
                        );
                    },
                },
            },
            attrFn: { val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0 },
            attr: function (e, n, r, i) {
                var s,
                    o,
                    u,
                    a = e.nodeType;
                if (!!e && a !== 3 && a !== 8 && a !== 2) {
                    if (i && n in B.attrFn) return B(e)[n](r);
                    if (typeof e.getAttribute == "undefined") return B.prop(e, n, r);
                    (u = a !== 1 || !B.isXMLDoc(e)), u && ((n = n.toLowerCase()), (o = B.attrHooks[n] || ($.test(n) ? Q : K)));
                    if (r !== t) {
                        if (r === null) {
                            B.removeAttr(e, n);
                            return;
                        }
                        return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, "" + r), r);
                    }
                    return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : ((s = e.getAttribute(n)), s === null ? t : s);
                }
            },
            removeAttr: function (e, t) {
                var n,
                    r,
                    i,
                    s,
                    o = 0;
                if (t && e.nodeType === 1) {
                    (r = t.toLowerCase().split(U)), (s = r.length);
                    for (; o < s; o++) (i = r[o]), i && ((n = B.propFix[i] || i), B.attr(e, i, ""), e.removeAttribute(J ? i : n), $.test(i) && n in e && (e[n] = !1));
                }
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (W.test(e.nodeName) && e.parentNode) B.error("type property can't be changed");
                        else if (!B.support.radioValue && t === "radio" && B.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
                value: {
                    get: function (e, t) {
                        return K && B.nodeName(e, "button") ? K.get(e, t) : t in e ? e.value : null;
                    },
                    set: function (e, t, n) {
                        if (K && B.nodeName(e, "button")) return K.set(e, t, n);
                        e.value = t;
                    },
                },
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                for: "htmlFor",
                class: "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable",
            },
            prop: function (e, n, r) {
                var i,
                    s,
                    o,
                    u = e.nodeType;
                if (!!e && u !== 3 && u !== 8 && u !== 2)
                    return (
                        (o = u !== 1 || !B.isXMLDoc(e)),
                        o && ((n = B.propFix[n] || n), (s = B.propHooks[n])),
                        r !== t ? (s && "set" in s && (i = s.set(e, r, n)) !== t ? i : (e[n] = r)) : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : X.test(e.nodeName) || (V.test(e.nodeName) && e.href) ? 0 : t;
                    },
                },
            },
        }),
        (B.attrHooks.tabindex = B.propHooks.tabIndex),
        (Q = {
            get: function (e, n) {
                var r,
                    i = B.prop(e, n);
                return i === !0 || (typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1) ? n.toLowerCase() : t;
            },
            set: function (e, t, n) {
                var r;
                return t === !1 ? B.removeAttr(e, n) : ((r = B.propFix[n] || n), r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n;
            },
        }),
        J ||
            ((G = { name: !0, id: !0 }),
            (K = B.valHooks.button = {
                get: function (e, n) {
                    var r;
                    return (r = e.getAttributeNode(n)), r && (G[n] ? r.nodeValue !== "" : r.specified) ? r.nodeValue : t;
                },
                set: function (e, t, n) {
                    var r = e.getAttributeNode(n);
                    return r || ((r = D.createAttribute(n)), e.setAttributeNode(r)), (r.nodeValue = t + "");
                },
            }),
            (B.attrHooks.tabindex.set = K.set),
            B.each(["width", "height"], function (e, t) {
                B.attrHooks[t] = B.extend(B.attrHooks[t], {
                    set: function (e, n) {
                        if (n === "") return e.setAttribute(t, "auto"), n;
                    },
                });
            }),
            (B.attrHooks.contenteditable = {
                get: K.get,
                set: function (e, t, n) {
                    t === "" && (t = "false"), K.set(e, t, n);
                },
            })),
        B.support.hrefNormalized ||
            B.each(["href", "src", "width", "height"], function (e, n) {
                B.attrHooks[n] = B.extend(B.attrHooks[n], {
                    get: function (e) {
                        var r = e.getAttribute(n, 2);
                        return r === null ? t : r;
                    },
                });
            }),
        B.support.style ||
            (B.attrHooks.style = {
                get: function (e) {
                    return e.style.cssText.toLowerCase() || t;
                },
                set: function (e, t) {
                    return (e.style.cssText = "" + t);
                },
            }),
        B.support.optSelected ||
            (B.propHooks.selected = B.extend(B.propHooks.selected, {
                get: function (e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
                },
            })),
        B.support.enctype || (B.propFix.enctype = "encoding"),
        B.support.checkOn ||
            B.each(["radio", "checkbox"], function () {
                B.valHooks[this] = {
                    get: function (e) {
                        return e.getAttribute("value") === null ? "on" : e.value;
                    },
                };
            }),
        B.each(["radio", "checkbox"], function () {
            B.valHooks[this] = B.extend(B.valHooks[this], {
                set: function (e, t) {
                    if (B.isArray(t)) return (e.checked = B.inArray(B(e).val(), t) >= 0);
                },
            });
        });
    var Y = /^(?:textarea|input|select)$/i,
        Z = /^([^\.]*)?(?:\.(.+))?$/,
        et = /\bhover(\.\S+)?\b/,
        tt = /^key/,
        nt = /^(?:mouse|contextmenu)|click/,
        rt = /^(?:focusinfocus|focusoutblur)$/,
        it = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        st = function (e) {
            var t = it.exec(e);
            return t && ((t[1] = (t[1] || "").toLowerCase()), (t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)"))), t;
        },
        ot = function (e, t) {
            var n = e.attributes || {};
            return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || (n.id || {}).value === t[2]) && (!t[3] || t[3].test((n["class"] || {}).value));
        },
        ut = function (e) {
            return B.event.special.hover ? e : e.replace(et, "mouseenter$1 mouseleave$1");
        };
    (B.event = {
        add: function (e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, v, m, g;
            if (!(e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = B._data(e)))) {
                r.handler && ((d = r), (r = d.handler)),
                    r.guid || (r.guid = B.guid++),
                    (a = o.events),
                    a || (o.events = a = {}),
                    (u = o.handle),
                    u ||
                        ((o.handle = u = function (e) {
                            return typeof B == "undefined" || (!!e && B.event.triggered === e.type) ? t : B.event.dispatch.apply(u.elem, arguments);
                        }),
                        (u.elem = e)),
                    (n = B.trim(ut(n)).split(" "));
                for (f = 0; f < n.length; f++) {
                    (l = Z.exec(n[f]) || []),
                        (c = l[1]),
                        (h = (l[2] || "").split(".").sort()),
                        (g = B.event.special[c] || {}),
                        (c = (s ? g.delegateType : g.bindType) || c),
                        (g = B.event.special[c] || {}),
                        (p = B.extend({ type: c, origType: l[1], data: i, handler: r, guid: r.guid, selector: s, quick: st(s), namespace: h.join(".") }, d)),
                        (m = a[c]);
                    if (!m) {
                        (m = a[c] = []), (m.delegateCount = 0);
                        if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u);
                    }
                    g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), (B.event.global[c] = !0);
                }
                e = null;
            }
        },
        global: {},
        remove: function (e, t, n, r, i) {
            var s = B.hasData(e) && B._data(e),
                o,
                u,
                a,
                f,
                l,
                c,
                h,
                p,
                d,
                v,
                m,
                g;
            if (!!s && !!(p = s.events)) {
                t = B.trim(ut(t || "")).split(" ");
                for (o = 0; o < t.length; o++) {
                    (u = Z.exec(t[o]) || []), (a = f = u[1]), (l = u[2]);
                    if (!a) {
                        for (a in p) B.event.remove(e, a + t[o], n, r, !0);
                        continue;
                    }
                    (d = B.event.special[a] || {}), (a = (r ? d.delegateType : d.bindType) || a), (m = p[a] || []), (c = m.length), (l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null);
                    for (h = 0; h < m.length; h++)
                        (g = m[h]),
                            (i || f === g.origType) &&
                                (!n || n.guid === g.guid) &&
                                (!l || l.test(g.namespace)) &&
                                (!r || r === g.selector || (r === "**" && g.selector)) &&
                                (m.splice(h--, 1), g.selector && m.delegateCount--, d.remove && d.remove.call(e, g));
                    m.length === 0 && c !== m.length && ((!d.teardown || d.teardown.call(e, l) === !1) && B.removeEvent(e, a, s.handle), delete p[a]);
                }
                B.isEmptyObject(p) && ((v = s.handle), v && (v.elem = null), B.removeData(e, ["events", "handle"], !0));
            }
        },
        customEvent: { getData: !0, setData: !0, changeData: !0 },
        trigger: function (n, r, i, s) {
            if (!i || (i.nodeType !== 3 && i.nodeType !== 8)) {
                var o = n.type || n,
                    u = [],
                    a,
                    f,
                    l,
                    c,
                    h,
                    p,
                    d,
                    v,
                    m,
                    g;
                if (rt.test(o + B.event.triggered)) return;
                o.indexOf("!") >= 0 && ((o = o.slice(0, -1)), (f = !0)), o.indexOf(".") >= 0 && ((u = o.split(".")), (o = u.shift()), u.sort());
                if ((!i || B.event.customEvent[o]) && !B.event.global[o]) return;
                (n = typeof n == "object" ? (n[B.expando] ? n : new B.Event(o, n)) : new B.Event(o)),
                    (n.type = o),
                    (n.isTrigger = !0),
                    (n.exclusive = f),
                    (n.namespace = u.join(".")),
                    (n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.)?") + "(\\.|$)") : null),
                    (p = o.indexOf(":") < 0 ? "on" + o : "");
                if (!i) {
                    a = B.cache;
                    for (l in a) a[l].events && a[l].events[o] && B.event.trigger(n, r, a[l].handle.elem, !0);
                    return;
                }
                (n.result = t), n.target || (n.target = i), (r = r != null ? B.makeArray(r) : []), r.unshift(n), (d = B.event.special[o] || {});
                if (d.trigger && d.trigger.apply(i, r) === !1) return;
                m = [[i, d.bindType || o]];
                if (!s && !d.noBubble && !B.isWindow(i)) {
                    (g = d.delegateType || o), (c = rt.test(g + o) ? i : i.parentNode), (h = null);
                    for (; c; c = c.parentNode) m.push([c, g]), (h = c);
                    h && h === i.ownerDocument && m.push([h.defaultView || h.parentWindow || e, g]);
                }
                for (l = 0; l < m.length && !n.isPropagationStopped(); l++)
                    (c = m[l][0]), (n.type = m[l][1]), (v = (B._data(c, "events") || {})[n.type] && B._data(c, "handle")), v && v.apply(c, r), (v = p && c[p]), v && B.acceptData(c) && v.apply(c, r) === !1 && n.preventDefault();
                return (
                    (n.type = o),
                    !s &&
                        !n.isDefaultPrevented() &&
                        (!d._default || d._default.apply(i.ownerDocument, r) === !1) &&
                        (o !== "click" || !B.nodeName(i, "a")) &&
                        B.acceptData(i) &&
                        p &&
                        i[o] &&
                        ((o !== "focus" && o !== "blur") || n.target.offsetWidth !== 0) &&
                        !B.isWindow(i) &&
                        ((h = i[p]), h && (i[p] = null), (B.event.triggered = o), i[o](), (B.event.triggered = t), h && (i[p] = h)),
                    n.result
                );
            }
        },
        dispatch: function (n) {
            n = B.event.fix(n || e.event);
            var r = (B._data(this, "events") || {})[n.type] || [],
                i = r.delegateCount,
                s = [].slice.call(arguments, 0),
                o = !n.exclusive && !n.namespace,
                u = [],
                a,
                f,
                l,
                c,
                h,
                p,
                d,
                v,
                m,
                g,
                y;
            (s[0] = n), (n.delegateTarget = this);
            if (i && !n.target.disabled && (!n.button || n.type !== "click")) {
                (c = B(this)), (c.context = this.ownerDocument || this);
                for (l = n.target; l != this; l = l.parentNode || this) {
                    (p = {}), (v = []), (c[0] = l);
                    for (a = 0; a < i; a++) (m = r[a]), (g = m.selector), p[g] === t && (p[g] = m.quick ? ot(l, m.quick) : c.is(g)), p[g] && v.push(m);
                    v.length && u.push({ elem: l, matches: v });
                }
            }
            r.length > i && u.push({ elem: this, matches: r.slice(i) });
            for (a = 0; a < u.length && !n.isPropagationStopped(); a++) {
                (d = u[a]), (n.currentTarget = d.elem);
                for (f = 0; f < d.matches.length && !n.isImmediatePropagationStopped(); f++) {
                    m = d.matches[f];
                    if (o || (!n.namespace && !m.namespace) || (n.namespace_re && n.namespace_re.test(m.namespace)))
                        (n.data = m.data), (n.handleObj = m), (h = ((B.event.special[m.origType] || {}).handle || m.handler).apply(d.elem, s)), h !== t && ((n.result = h), h === !1 && (n.preventDefault(), n.stopPropagation()));
                }
            }
            return n.result;
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e;
            },
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r,
                    i,
                    s,
                    o = n.button,
                    u = n.fromElement;
                return (
                    e.pageX == null &&
                        n.clientX != null &&
                        ((r = e.target.ownerDocument || D),
                        (i = r.documentElement),
                        (s = r.body),
                        (e.pageX = n.clientX + ((i && i.scrollLeft) || (s && s.scrollLeft) || 0) - ((i && i.clientLeft) || (s && s.clientLeft) || 0)),
                        (e.pageY = n.clientY + ((i && i.scrollTop) || (s && s.scrollTop) || 0) - ((i && i.clientTop) || (s && s.clientTop) || 0))),
                    !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u),
                    !e.which && o !== t && (e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0),
                    e
                );
            },
        },
        fix: function (e) {
            if (e[B.expando]) return e;
            var n,
                r,
                i = e,
                s = B.event.fixHooks[e.type] || {},
                o = s.props ? this.props.concat(s.props) : this.props;
            e = B.Event(i);
            for (n = o.length; n; ) (r = o[--n]), (e[r] = i[r]);
            return e.target || (e.target = i.srcElement || D), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), s.filter ? s.filter(e, i) : e;
        },
        special: {
            ready: { setup: B.bindReady },
            load: { noBubble: !0 },
            focus: { delegateType: "focusin" },
            blur: { delegateType: "focusout" },
            beforeunload: {
                setup: function (e, t, n) {
                    B.isWindow(this) && (this.onbeforeunload = n);
                },
                teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null);
                },
            },
        },
        simulate: function (e, t, n, r) {
            var i = B.extend(new B.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });
            r ? B.event.trigger(i, null, t) : B.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        },
    }),
        (B.event.handle = B.event.dispatch),
        (B.removeEvent = D.removeEventListener
            ? function (e, t, n) {
                  e.removeEventListener && e.removeEventListener(t, n, !1);
              }
            : function (e, t, n) {
                  e.detachEvent && e.detachEvent("on" + t, n);
              }),
        (B.Event = function (e, t) {
            if (!(this instanceof B.Event)) return new B.Event(e, t);
            e && e.type ? ((this.originalEvent = e), (this.type = e.type), (this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || (e.getPreventDefault && e.getPreventDefault()) ? k : L)) : (this.type = e),
                t && B.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || B.now()),
                (this[B.expando] = !0);
        }),
        (B.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = k;
                var e = this.originalEvent;
                !e || (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
            },
            stopPropagation: function () {
                this.isPropagationStopped = k;
                var e = this.originalEvent;
                !e || (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
            },
            stopImmediatePropagation: function () {
                (this.isImmediatePropagationStopped = k), this.stopPropagation();
            },
            isDefaultPrevented: L,
            isPropagationStopped: L,
            isImmediatePropagationStopped: L,
        }),
        B.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) {
            B.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n = this,
                        r = e.relatedTarget,
                        i = e.handleObj,
                        s = i.selector,
                        o;
                    if (!r || (r !== n && !B.contains(n, r))) (e.type = i.origType), (o = i.handler.apply(this, arguments)), (e.type = t);
                    return o;
                },
            };
        }),
        B.support.submitBubbles ||
            (B.event.special.submit = {
                setup: function () {
                    if (B.nodeName(this, "form")) return !1;
                    B.event.add(this, "click._submit keypress._submit", function (e) {
                        var n = e.target,
                            r = B.nodeName(n, "input") || B.nodeName(n, "button") ? n.form : t;
                        r &&
                            !r._submit_attached &&
                            (B.event.add(r, "submit._submit", function (e) {
                                this.parentNode && !e.isTrigger && B.event.simulate("submit", this.parentNode, e, !0);
                            }),
                            (r._submit_attached = !0));
                    });
                },
                teardown: function () {
                    if (B.nodeName(this, "form")) return !1;
                    B.event.remove(this, "._submit");
                },
            }),
        B.support.changeBubbles ||
            (B.event.special.change = {
                setup: function () {
                    if (Y.test(this.nodeName)) {
                        if (this.type === "checkbox" || this.type === "radio")
                            B.event.add(this, "propertychange._change", function (e) {
                                e.originalEvent.propertyName === "checked" && (this._just_changed = !0);
                            }),
                                B.event.add(this, "click._change", function (e) {
                                    this._just_changed && !e.isTrigger && ((this._just_changed = !1), B.event.simulate("change", this, e, !0));
                                });
                        return !1;
                    }
                    B.event.add(this, "beforeactivate._change", function (e) {
                        var t = e.target;
                        Y.test(t.nodeName) &&
                            !t._change_attached &&
                            (B.event.add(t, "change._change", function (e) {
                                this.parentNode && !e.isSimulated && !e.isTrigger && B.event.simulate("change", this.parentNode, e, !0);
                            }),
                            (t._change_attached = !0));
                    });
                },
                handle: function (e) {
                    var t = e.target;
                    if (this !== t || e.isSimulated || e.isTrigger || (t.type !== "radio" && t.type !== "checkbox")) return e.handleObj.handler.apply(this, arguments);
                },
                teardown: function () {
                    return B.event.remove(this, "._change"), Y.test(this.nodeName);
                },
            }),
        B.support.focusinBubbles ||
            B.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = 0,
                    r = function (e) {
                        B.event.simulate(t, e.target, B.event.fix(e), !0);
                    };
                B.event.special[t] = {
                    setup: function () {
                        n++ === 0 && D.addEventListener(e, r, !0);
                    },
                    teardown: function () {
                        --n === 0 && D.removeEventListener(e, r, !0);
                    },
                };
            }),
        B.fn.extend({
            on: function (e, n, r, i, s) {
                var o, u;
                if (typeof e == "object") {
                    typeof n != "string" && ((r = n), (n = t));
                    for (u in e) this.on(u, n, r, e[u], s);
                    return this;
                }
                r == null && i == null ? ((i = n), (r = n = t)) : i == null && (typeof n == "string" ? ((i = r), (r = t)) : ((i = r), (r = n), (n = t)));
                if (i === !1) i = L;
                else if (!i) return this;
                return (
                    s === 1 &&
                        ((o = i),
                        (i = function (e) {
                            return B().off(e), o.apply(this, arguments);
                        }),
                        (i.guid = o.guid || (o.guid = B.guid++))),
                    this.each(function () {
                        B.event.add(this, e, i, r, n);
                    })
                );
            },
            one: function (e, t, n, r) {
                return this.on.call(this, e, t, n, r, 1);
            },
            off: function (e, n, r) {
                if (e && e.preventDefault && e.handleObj) {
                    var i = e.handleObj;
                    return B(e.delegateTarget).off(i.namespace ? i.type + "." + i.namespace : i.type, i.selector, i.handler), this;
                }
                if (typeof e == "object") {
                    for (var s in e) this.off(s, n, e[s]);
                    return this;
                }
                if (n === !1 || typeof n == "function") (r = n), (n = t);
                return (
                    r === !1 && (r = L),
                    this.each(function () {
                        B.event.remove(this, e, r, n);
                    })
                );
            },
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            live: function (e, t, n) {
                return B(this.context).on(e, this.selector, t, n), this;
            },
            die: function (e, t) {
                return B(this.context).off(e, this.selector || "**", t), this;
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return arguments.length == 1 ? this.off(e, "**") : this.off(t, e, n);
            },
            trigger: function (e, t) {
                return this.each(function () {
                    B.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                if (this[0]) return B.event.trigger(e, t, this[0], !0);
            },
            toggle: function (e) {
                var t = arguments,
                    n = e.guid || B.guid++,
                    r = 0,
                    i = function (n) {
                        var i = (B._data(this, "lastToggle" + e.guid) || 0) % r;
                        return B._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1;
                    };
                i.guid = n;
                while (r < t.length) t[r++].guid = n;
                return this.click(i);
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        B.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (
            e,
            t
        ) {
            (B.fn[t] = function (e, n) {
                return n == null && ((n = e), (e = null)), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            }),
                B.attrFn && (B.attrFn[t] = !0),
                tt.test(t) && (B.event.fixHooks[t] = B.event.keyHooks),
                nt.test(t) && (B.event.fixHooks[t] = B.event.mouseHooks);
        }),
        (function () {
            function e(e, t, n, r, s, o) {
                for (var u = 0, a = r.length; u < a; u++) {
                    var f = r[u];
                    if (f) {
                        var l = !1;
                        f = f[e];
                        while (f) {
                            if (f[i] === n) {
                                l = r[f.sizset];
                                break;
                            }
                            if (f.nodeType === 1) {
                                o || ((f[i] = n), (f.sizset = u));
                                if (typeof t != "string") {
                                    if (f === t) {
                                        l = !0;
                                        break;
                                    }
                                } else if (h.filter(t, [f]).length > 0) {
                                    l = f;
                                    break;
                                }
                            }
                            f = f[e];
                        }
                        r[u] = l;
                    }
                }
            }
            function n(e, t, n, r, s, o) {
                for (var u = 0, a = r.length; u < a; u++) {
                    var f = r[u];
                    if (f) {
                        var l = !1;
                        f = f[e];
                        while (f) {
                            if (f[i] === n) {
                                l = r[f.sizset];
                                break;
                            }
                            f.nodeType === 1 && !o && ((f[i] = n), (f.sizset = u));
                            if (f.nodeName.toLowerCase() === t) {
                                l = f;
                                break;
                            }
                            f = f[e];
                        }
                        r[u] = l;
                    }
                }
            }
            var r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                i = "sizcache" + (Math.random() + "").replace(".", ""),
                s = 0,
                o = Object.prototype.toString,
                u = !1,
                a = !0,
                f = /\\/g,
                l = /\r\n/g,
                c = /\W/;
            [0, 0].sort(function () {
                return (a = !1), 0;
            });
            var h = function (e, t, n, i) {
                (n = n || []), (t = t || D);
                var s = t;
                if (t.nodeType !== 1 && t.nodeType !== 9) return [];
                if (!e || typeof e != "string") return n;
                var u,
                    a,
                    f,
                    l,
                    c,
                    p,
                    m,
                    g,
                    b = !0,
                    w = h.isXML(t),
                    E = [],
                    x = e;
                do {
                    r.exec(""), (u = r.exec(x));
                    if (u) {
                        (x = u[3]), E.push(u[1]);
                        if (u[2]) {
                            l = u[3];
                            break;
                        }
                    }
                } while (u);
                if (E.length > 1 && v.exec(e))
                    if (E.length === 2 && d.relative[E[0]]) a = S(E[0] + E[1], t, i);
                    else {
                        a = d.relative[E[0]] ? [t] : h(E.shift(), t);
                        while (E.length) (e = E.shift()), d.relative[e] && (e += E.shift()), (a = S(e, a, i));
                    }
                else {
                    !i && E.length > 1 && t.nodeType === 9 && !w && d.match.ID.test(E[0]) && !d.match.ID.test(E[E.length - 1]) && ((c = h.find(E.shift(), t, w)), (t = c.expr ? h.filter(c.expr, c.set)[0] : c.set[0]));
                    if (t) {
                        (c = i ? { expr: E.pop(), set: y(i) } : h.find(E.pop(), E.length !== 1 || (E[0] !== "~" && E[0] !== "+") || !t.parentNode ? t : t.parentNode, w)),
                            (a = c.expr ? h.filter(c.expr, c.set) : c.set),
                            E.length > 0 ? (f = y(a)) : (b = !1);
                        while (E.length) (p = E.pop()), (m = p), d.relative[p] ? (m = E.pop()) : (p = ""), m == null && (m = t), d.relative[p](f, m, w);
                    } else f = E = [];
                }
                f || (f = a), f || h.error(p || e);
                if (o.call(f) === "[object Array]")
                    if (!b) n.push.apply(n, f);
                    else if (t && t.nodeType === 1) for (g = 0; f[g] != null; g++) f[g] && (f[g] === !0 || (f[g].nodeType === 1 && h.contains(t, f[g]))) && n.push(a[g]);
                    else for (g = 0; f[g] != null; g++) f[g] && f[g].nodeType === 1 && n.push(a[g]);
                else y(f, n);
                return l && (h(l, s, n, i), h.uniqueSort(n)), n;
            };
            (h.uniqueSort = function (e) {
                if (w) {
                    (u = a), e.sort(w);
                    if (u) for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1);
                }
                return e;
            }),
                (h.matches = function (e, t) {
                    return h(e, null, null, t);
                }),
                (h.matchesSelector = function (e, t) {
                    return h(t, null, null, [e]).length > 0;
                }),
                (h.find = function (e, t, n) {
                    var r, i, s, o, u, a;
                    if (!e) return [];
                    for (i = 0, s = d.order.length; i < s; i++) {
                        u = d.order[i];
                        if ((o = d.leftMatch[u].exec(e))) {
                            (a = o[1]), o.splice(1, 1);
                            if (a.substr(a.length - 1) !== "\\") {
                                (o[1] = (o[1] || "").replace(f, "")), (r = d.find[u](o, t, n));
                                if (r != null) {
                                    e = e.replace(d.match[u], "");
                                    break;
                                }
                            }
                        }
                    }
                    return r || (r = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []), { set: r, expr: e };
                }),
                (h.filter = function (e, n, r, i) {
                    var s,
                        o,
                        u,
                        a,
                        f,
                        l,
                        c,
                        p,
                        v,
                        m = e,
                        g = [],
                        y = n,
                        b = n && n[0] && h.isXML(n[0]);
                    while (e && n.length) {
                        for (u in d.filter)
                            if ((s = d.leftMatch[u].exec(e)) != null && s[2]) {
                                (l = d.filter[u]), (c = s[1]), (o = !1), s.splice(1, 1);
                                if (c.substr(c.length - 1) === "\\") continue;
                                y === g && (g = []);
                                if (d.preFilter[u]) {
                                    s = d.preFilter[u](s, y, r, g, i, b);
                                    if (!s) o = a = !0;
                                    else if (s === !0) continue;
                                }
                                if (s) for (p = 0; (f = y[p]) != null; p++) f && ((a = l(f, s, p, y)), (v = i ^ a), r && a != null ? (v ? (o = !0) : (y[p] = !1)) : v && (g.push(f), (o = !0)));
                                if (a !== t) {
                                    r || (y = g), (e = e.replace(d.match[u], ""));
                                    if (!o) return [];
                                    break;
                                }
                            }
                        if (e === m) {
                            if (o != null) break;
                            h.error(e);
                        }
                        m = e;
                    }
                    return y;
                }),
                (h.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                });
            var p = (h.getText = function (e) {
                    var t,
                        n,
                        r = e.nodeType,
                        i = "";
                    if (r) {
                        if (r === 1 || r === 9) {
                            if (typeof e.textContent == "string") return e.textContent;
                            if (typeof e.innerText == "string") return e.innerText.replace(l, "");
                            for (e = e.firstChild; e; e = e.nextSibling) i += p(e);
                        } else if (r === 3 || r === 4) return e.nodeValue;
                    } else for (t = 0; (n = e[t]); t++) n.nodeType !== 8 && (i += p(n));
                    return i;
                }),
                d = (h.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
                    },
                    leftMatch: {},
                    attrMap: { class: "className", for: "htmlFor" },
                    attrHandle: {
                        href: function (e) {
                            return e.getAttribute("href");
                        },
                        type: function (e) {
                            return e.getAttribute("type");
                        },
                    },
                    relative: {
                        "+": function (e, t) {
                            var n = typeof t == "string",
                                r = n && !c.test(t),
                                i = n && !r;
                            r && (t = t.toLowerCase());
                            for (var s = 0, o = e.length, u; s < o; s++)
                                if ((u = e[s])) {
                                    while ((u = u.previousSibling) && u.nodeType !== 1);
                                    e[s] = i || (u && u.nodeName.toLowerCase() === t) ? u || !1 : u === t;
                                }
                            i && h.filter(t, e, !0);
                        },
                        ">": function (e, t) {
                            var n,
                                r = typeof t == "string",
                                i = 0,
                                s = e.length;
                            if (r && !c.test(t)) {
                                t = t.toLowerCase();
                                for (; i < s; i++) {
                                    n = e[i];
                                    if (n) {
                                        var o = n.parentNode;
                                        e[i] = o.nodeName.toLowerCase() === t ? o : !1;
                                    }
                                }
                            } else {
                                for (; i < s; i++) (n = e[i]), n && (e[i] = r ? n.parentNode : n.parentNode === t);
                                r && h.filter(t, e, !0);
                            }
                        },
                        "": function (t, r, i) {
                            var o,
                                u = s++,
                                a = e;
                            typeof r == "string" && !c.test(r) && ((r = r.toLowerCase()), (o = r), (a = n)), a("parentNode", r, u, t, o, i);
                        },
                        "~": function (t, r, i) {
                            var o,
                                u = s++,
                                a = e;
                            typeof r == "string" && !c.test(r) && ((r = r.toLowerCase()), (o = r), (a = n)), a("previousSibling", r, u, t, o, i);
                        },
                    },
                    find: {
                        ID: function (e, t, n) {
                            if (typeof t.getElementById != "undefined" && !n) {
                                var r = t.getElementById(e[1]);
                                return r && r.parentNode ? [r] : [];
                            }
                        },
                        NAME: function (e, t) {
                            if (typeof t.getElementsByName != "undefined") {
                                var n = [],
                                    r = t.getElementsByName(e[1]);
                                for (var i = 0, s = r.length; i < s; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
                                return n.length === 0 ? null : n;
                            }
                        },
                        TAG: function (e, t) {
                            if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(e[1]);
                        },
                    },
                    preFilter: {
                        CLASS: function (e, t, n, r, i, s) {
                            e = " " + e[1].replace(f, "") + " ";
                            if (s) return e;
                            for (var o = 0, u; (u = t[o]) != null; o++) u && (i ^ (u.className && (" " + u.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(u) : n && (t[o] = !1));
                            return !1;
                        },
                        ID: function (e) {
                            return e[1].replace(f, "");
                        },
                        TAG: function (e, t) {
                            return e[1].replace(f, "").toLowerCase();
                        },
                        CHILD: function (e) {
                            if (e[1] === "nth") {
                                e[2] || h.error(e[0]), (e[2] = e[2].replace(/^\+|\s*/g, ""));
                                var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec((e[2] === "even" && "2n") || (e[2] === "odd" && "2n+1") || (!/\D/.test(e[2]) && "0n+" + e[2]) || e[2]);
                                (e[2] = t[1] + (t[2] || 1) - 0), (e[3] = t[3] - 0);
                            } else e[2] && h.error(e[0]);
                            return (e[0] = s++), e;
                        },
                        ATTR: function (e, t, n, r, i, s) {
                            var o = (e[1] = e[1].replace(f, ""));
                            return !s && d.attrMap[o] && (e[1] = d.attrMap[o]), (e[4] = (e[4] || e[5] || "").replace(f, "")), e[2] === "~=" && (e[4] = " " + e[4] + " "), e;
                        },
                        PSEUDO: function (e, t, n, i, s) {
                            if (e[1] === "not") {
                                if (!((r.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                                    var o = h.filter(e[3], t, n, !0 ^ s);
                                    return n || i.push.apply(i, o), !1;
                                }
                                e[3] = h(e[3], null, null, t);
                            } else if (d.match.POS.test(e[0]) || d.match.CHILD.test(e[0])) return !0;
                            return e;
                        },
                        POS: function (e) {
                            return e.unshift(!0), e;
                        },
                    },
                    filters: {
                        enabled: function (e) {
                            return e.disabled === !1 && e.type !== "hidden";
                        },
                        disabled: function (e) {
                            return e.disabled === !0;
                        },
                        checked: function (e) {
                            return e.checked === !0;
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                        },
                        parent: function (e) {
                            return !!e.firstChild;
                        },
                        empty: function (e) {
                            return !e.firstChild;
                        },
                        has: function (e, t, n) {
                            return !!h(n[3], e).length;
                        },
                        header: function (e) {
                            return /h\d/i.test(e.nodeName);
                        },
                        text: function (e) {
                            var t = e.getAttribute("type"),
                                n = e.type;
                            return e.nodeName.toLowerCase() === "input" && "text" === n && (t === n || t === null);
                        },
                        radio: function (e) {
                            return e.nodeName.toLowerCase() === "input" && "radio" === e.type;
                        },
                        checkbox: function (e) {
                            return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type;
                        },
                        file: function (e) {
                            return e.nodeName.toLowerCase() === "input" && "file" === e.type;
                        },
                        password: function (e) {
                            return e.nodeName.toLowerCase() === "input" && "password" === e.type;
                        },
                        submit: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return (t === "input" || t === "button") && "submit" === e.type;
                        },
                        image: function (e) {
                            return e.nodeName.toLowerCase() === "input" && "image" === e.type;
                        },
                        reset: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return (t === "input" || t === "button") && "reset" === e.type;
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return (t === "input" && "button" === e.type) || t === "button";
                        },
                        input: function (e) {
                            return /input|select|textarea|button/i.test(e.nodeName);
                        },
                        focus: function (e) {
                            return e === e.ownerDocument.activeElement;
                        },
                    },
                    setFilters: {
                        first: function (e, t) {
                            return t === 0;
                        },
                        last: function (e, t, n, r) {
                            return t === r.length - 1;
                        },
                        even: function (e, t) {
                            return t % 2 === 0;
                        },
                        odd: function (e, t) {
                            return t % 2 === 1;
                        },
                        lt: function (e, t, n) {
                            return t < n[3] - 0;
                        },
                        gt: function (e, t, n) {
                            return t > n[3] - 0;
                        },
                        nth: function (e, t, n) {
                            return n[3] - 0 === t;
                        },
                        eq: function (e, t, n) {
                            return n[3] - 0 === t;
                        },
                    },
                    filter: {
                        PSEUDO: function (e, t, n, r) {
                            var i = t[1],
                                s = d.filters[i];
                            if (s) return s(e, n, t, r);
                            if (i === "contains") return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
                            if (i === "not") {
                                var o = t[3];
                                for (var u = 0, a = o.length; u < a; u++) if (o[u] === e) return !1;
                                return !0;
                            }
                            h.error(i);
                        },
                        CHILD: function (e, t) {
                            var n,
                                r,
                                s,
                                o,
                                u,
                                a,
                                f,
                                l = t[1],
                                c = e;
                            switch (l) {
                                case "only":
                                case "first":
                                    while ((c = c.previousSibling)) if (c.nodeType === 1) return !1;
                                    if (l === "first") return !0;
                                    c = e;
                                case "last":
                                    while ((c = c.nextSibling)) if (c.nodeType === 1) return !1;
                                    return !0;
                                case "nth":
                                    (n = t[2]), (r = t[3]);
                                    if (n === 1 && r === 0) return !0;
                                    (s = t[0]), (o = e.parentNode);
                                    if (o && (o[i] !== s || !e.nodeIndex)) {
                                        a = 0;
                                        for (c = o.firstChild; c; c = c.nextSibling) c.nodeType === 1 && (c.nodeIndex = ++a);
                                        o[i] = s;
                                    }
                                    return (f = e.nodeIndex - r), n === 0 ? f === 0 : f % n === 0 && f / n >= 0;
                            }
                        },
                        ID: function (e, t) {
                            return e.nodeType === 1 && e.getAttribute("id") === t;
                        },
                        TAG: function (e, t) {
                            return (t === "*" && e.nodeType === 1) || (!!e.nodeName && e.nodeName.toLowerCase() === t);
                        },
                        CLASS: function (e, t) {
                            return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1;
                        },
                        ATTR: function (e, t) {
                            var n = t[1],
                                r = h.attr ? h.attr(e, n) : d.attrHandle[n] ? d.attrHandle[n](e) : e[n] != null ? e[n] : e.getAttribute(n),
                                i = r + "",
                                s = t[2],
                                o = t[4];
                            return r == null
                                ? s === "!="
                                : !s && h.attr
                                ? r != null
                                : s === "="
                                ? i === o
                                : s === "*="
                                ? i.indexOf(o) >= 0
                                : s === "~="
                                ? (" " + i + " ").indexOf(o) >= 0
                                : o
                                ? s === "!="
                                    ? i !== o
                                    : s === "^="
                                    ? i.indexOf(o) === 0
                                    : s === "$="
                                    ? i.substr(i.length - o.length) === o
                                    : s === "|="
                                    ? i === o || i.substr(0, o.length + 1) === o + "-"
                                    : !1
                                : i && r !== !1;
                        },
                        POS: function (e, t, n, r) {
                            var i = t[2],
                                s = d.setFilters[i];
                            if (s) return s(e, n, t, r);
                        },
                    },
                }),
                v = d.match.POS,
                m = function (e, t) {
                    return "\\" + (t - 0 + 1);
                };
            for (var g in d.match) (d.match[g] = new RegExp(d.match[g].source + /(?![^\[]*\])(?![^\(]*\))/.source)), (d.leftMatch[g] = new RegExp(/(^(?:.|\r|\n)*?)/.source + d.match[g].source.replace(/\\(\d+)/g, m)));
            var y = function (e, t) {
                return (e = Array.prototype.slice.call(e, 0)), t ? (t.push.apply(t, e), t) : e;
            };
            try {
                Array.prototype.slice.call(D.documentElement.childNodes, 0)[0].nodeType;
            } catch (b) {
                y = function (e, t) {
                    var n = 0,
                        r = t || [];
                    if (o.call(e) === "[object Array]") Array.prototype.push.apply(r, e);
                    else if (typeof e.length == "number") for (var i = e.length; n < i; n++) r.push(e[n]);
                    else for (; e[n]; n++) r.push(e[n]);
                    return r;
                };
            }
            var w, E;
            D.documentElement.compareDocumentPosition
                ? (w = function (e, t) {
                      return e === t ? ((u = !0), 0) : !e.compareDocumentPosition || !t.compareDocumentPosition ? (e.compareDocumentPosition ? -1 : 1) : e.compareDocumentPosition(t) & 4 ? -1 : 1;
                  })
                : ((w = function (e, t) {
                      if (e === t) return (u = !0), 0;
                      if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                      var n,
                          r,
                          i = [],
                          s = [],
                          o = e.parentNode,
                          a = t.parentNode,
                          f = o;
                      if (o === a) return E(e, t);
                      if (!o) return -1;
                      if (!a) return 1;
                      while (f) i.unshift(f), (f = f.parentNode);
                      f = a;
                      while (f) s.unshift(f), (f = f.parentNode);
                      (n = i.length), (r = s.length);
                      for (var l = 0; l < n && l < r; l++) if (i[l] !== s[l]) return E(i[l], s[l]);
                      return l === n ? E(e, s[l], -1) : E(i[l], t, 1);
                  }),
                  (E = function (e, t, n) {
                      if (e === t) return n;
                      var r = e.nextSibling;
                      while (r) {
                          if (r === t) return -1;
                          r = r.nextSibling;
                      }
                      return 1;
                  })),
                (function () {
                    var e = D.createElement("div"),
                        n = "script" + new Date().getTime(),
                        r = D.documentElement;
                    (e.innerHTML = "<a name='" + n + "'/>"),
                        r.insertBefore(e, r.firstChild),
                        D.getElementById(n) &&
                            ((d.find.ID = function (e, n, r) {
                                if (typeof n.getElementById != "undefined" && !r) {
                                    var i = n.getElementById(e[1]);
                                    return i ? (i.id === e[1] || (typeof i.getAttributeNode != "undefined" && i.getAttributeNode("id").nodeValue === e[1]) ? [i] : t) : [];
                                }
                            }),
                            (d.filter.ID = function (e, t) {
                                var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
                                return e.nodeType === 1 && n && n.nodeValue === t;
                            })),
                        r.removeChild(e),
                        (r = e = null);
                })(),
                (function () {
                    var e = D.createElement("div");
                    e.appendChild(D.createComment("")),
                        e.getElementsByTagName("*").length > 0 &&
                            (d.find.TAG = function (e, t) {
                                var n = t.getElementsByTagName(e[1]);
                                if (e[1] === "*") {
                                    var r = [];
                                    for (var i = 0; n[i]; i++) n[i].nodeType === 1 && r.push(n[i]);
                                    n = r;
                                }
                                return n;
                            }),
                        (e.innerHTML = "<a href='#'></a>"),
                        e.firstChild &&
                            typeof e.firstChild.getAttribute != "undefined" &&
                            e.firstChild.getAttribute("href") !== "#" &&
                            (d.attrHandle.href = function (e) {
                                return e.getAttribute("href", 2);
                            }),
                        (e = null);
                })(),
                D.querySelectorAll &&
                    (function () {
                        var e = h,
                            t = D.createElement("div"),
                            n = "__sizzle__";
                        t.innerHTML = "<p class='TEST'></p>";
                        if (!t.querySelectorAll || t.querySelectorAll(".TEST").length !== 0) {
                            h = function (t, r, i, s) {
                                r = r || D;
                                if (!s && !h.isXML(r)) {
                                    var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                                    if (o && (r.nodeType === 1 || r.nodeType === 9)) {
                                        if (o[1]) return y(r.getElementsByTagName(t), i);
                                        if (o[2] && d.find.CLASS && r.getElementsByClassName) return y(r.getElementsByClassName(o[2]), i);
                                    }
                                    if (r.nodeType === 9) {
                                        if (t === "body" && r.body) return y([r.body], i);
                                        if (o && o[3]) {
                                            var u = r.getElementById(o[3]);
                                            if (!u || !u.parentNode) return y([], i);
                                            if (u.id === o[3]) return y([u], i);
                                        }
                                        try {
                                            return y(r.querySelectorAll(t), i);
                                        } catch (a) {}
                                    } else if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                                        var f = r,
                                            l = r.getAttribute("id"),
                                            c = l || n,
                                            p = r.parentNode,
                                            v = /^\s*[+~]/.test(t);
                                        l ? (c = c.replace(/'/g, "\\$&")) : r.setAttribute("id", c), v && p && (r = r.parentNode);
                                        try {
                                            if (!v || p) return y(r.querySelectorAll("[id='" + c + "'] " + t), i);
                                        } catch (m) {
                                        } finally {
                                            l || f.removeAttribute("id");
                                        }
                                    }
                                }
                                return e(t, r, i, s);
                            };
                            for (var r in e) h[r] = e[r];
                            t = null;
                        }
                    })(),
                (function () {
                    var e = D.documentElement,
                        t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
                    if (t) {
                        var n = !t.call(D.createElement("div"), "div"),
                            r = !1;
                        try {
                            t.call(D.documentElement, "[test!='']:sizzle");
                        } catch (i) {
                            r = !0;
                        }
                        h.matchesSelector = function (e, i) {
                            i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                            if (!h.isXML(e))
                                try {
                                    if (r || (!d.match.PSEUDO.test(i) && !/!=/.test(i))) {
                                        var s = t.call(e, i);
                                        if (s || !n || (e.document && e.document.nodeType !== 11)) return s;
                                    }
                                } catch (o) {}
                            return h(i, null, null, [e]).length > 0;
                        };
                    }
                })(),
                (function () {
                    var e = D.createElement("div");
                    e.innerHTML = "<div class='test e'></div><div class='test'></div>";
                    if (!!e.getElementsByClassName && e.getElementsByClassName("e").length !== 0) {
                        e.lastChild.className = "e";
                        if (e.getElementsByClassName("e").length === 1) return;
                        d.order.splice(1, 0, "CLASS"),
                            (d.find.CLASS = function (e, t, n) {
                                if (typeof t.getElementsByClassName != "undefined" && !n) return t.getElementsByClassName(e[1]);
                            }),
                            (e = null);
                    }
                })(),
                D.documentElement.contains
                    ? (h.contains = function (e, t) {
                          return e !== t && (e.contains ? e.contains(t) : !0);
                      })
                    : D.documentElement.compareDocumentPosition
                    ? (h.contains = function (e, t) {
                          return !!(e.compareDocumentPosition(t) & 16);
                      })
                    : (h.contains = function () {
                          return !1;
                      }),
                (h.isXML = function (e) {
                    var t = (e ? e.ownerDocument || e : 0).documentElement;
                    return t ? t.nodeName !== "HTML" : !1;
                });
            var S = function (e, t, n) {
                var r,
                    i = [],
                    s = "",
                    o = t.nodeType ? [t] : t;
                while ((r = d.match.PSEUDO.exec(e))) (s += r[0]), (e = e.replace(d.match.PSEUDO, ""));
                e = d.relative[e] ? e + "*" : e;
                for (var u = 0, a = o.length; u < a; u++) h(e, o[u], i, n);
                return h.filter(s, i);
            };
            (h.attr = B.attr), (h.selectors.attrMap = {}), (B.find = h), (B.expr = h.selectors), (B.expr[":"] = B.expr.filters), (B.unique = h.uniqueSort), (B.text = h.getText), (B.isXMLDoc = h.isXML), (B.contains = h.contains);
        })();
    var at = /Until$/,
        ft = /^(?:parents|prevUntil|prevAll)/,
        lt = /,/,
        ct = /^.[^:#\[\.,]*$/,
        ht = Array.prototype.slice,
        pt = B.expr.match.POS,
        dt = { children: !0, contents: !0, next: !0, prev: !0 };
    B.fn.extend({
        find: function (e) {
            var t = this,
                n,
                r;
            if (typeof e != "string")
                return B(e).filter(function () {
                    for (n = 0, r = t.length; n < r; n++) if (B.contains(t[n], this)) return !0;
                });
            var i = this.pushStack("", "find", e),
                s,
                o,
                u;
            for (n = 0, r = this.length; n < r; n++) {
                (s = i.length), B.find(e, this[n], i);
                if (n > 0)
                    for (o = s; o < i.length; o++)
                        for (u = 0; u < s; u++)
                            if (i[u] === i[o]) {
                                i.splice(o--, 1);
                                break;
                            }
            }
            return i;
        },
        has: function (e) {
            var t = B(e);
            return this.filter(function () {
                for (var e = 0, n = t.length; e < n; e++) if (B.contains(this, t[e])) return !0;
            });
        },
        not: function (e) {
            return this.pushStack(N(this, e, !1), "not", e);
        },
        filter: function (e) {
            return this.pushStack(N(this, e, !0), "filter", e);
        },
        is: function (e) {
            return !!e && (typeof e == "string" ? (pt.test(e) ? B(e, this.context).index(this[0]) >= 0 : B.filter(e, this).length > 0) : this.filter(e).length > 0);
        },
        closest: function (e, t) {
            var n = [],
                r,
                i,
                s = this[0];
            if (B.isArray(e)) {
                var o = 1;
                while (s && s.ownerDocument && s !== t) {
                    for (r = 0; r < e.length; r++) B(s).is(e[r]) && n.push({ selector: e[r], elem: s, level: o });
                    (s = s.parentNode), o++;
                }
                return n;
            }
            var u = pt.test(e) || typeof e != "string" ? B(e, t || this.context) : 0;
            for (r = 0, i = this.length; r < i; r++) {
                s = this[r];
                while (s) {
                    if (u ? u.index(s) > -1 : B.find.matchesSelector(s, e)) {
                        n.push(s);
                        break;
                    }
                    s = s.parentNode;
                    if (!s || !s.ownerDocument || s === t || s.nodeType === 11) break;
                }
            }
            return (n = n.length > 1 ? B.unique(n) : n), this.pushStack(n, "closest", e);
        },
        index: function (e) {
            return e ? (typeof e == "string" ? B.inArray(this[0], B(e)) : B.inArray(e.jquery ? e[0] : e, this)) : this[0] && this[0].parentNode ? this.prevAll().length : -1;
        },
        add: function (e, t) {
            var n = typeof e == "string" ? B(e, t) : B.makeArray(e && e.nodeType ? [e] : e),
                r = B.merge(this.get(), n);
            return this.pushStack(C(n[0]) || C(r[0]) ? r : B.unique(r));
        },
        andSelf: function () {
            return this.add(this.prevObject);
        },
    }),
        B.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && t.nodeType !== 11 ? t : null;
                },
                parents: function (e) {
                    return B.dir(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return B.dir(e, "parentNode", n);
                },
                next: function (e) {
                    return B.nth(e, 2, "nextSibling");
                },
                prev: function (e) {
                    return B.nth(e, 2, "previousSibling");
                },
                nextAll: function (e) {
                    return B.dir(e, "nextSibling");
                },
                prevAll: function (e) {
                    return B.dir(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return B.dir(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return B.dir(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return B.sibling(e.parentNode.firstChild, e);
                },
                children: function (e) {
                    return B.sibling(e.firstChild);
                },
                contents: function (e) {
                    return B.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : B.makeArray(e.childNodes);
                },
            },
            function (e, t) {
                B.fn[e] = function (n, r) {
                    var i = B.map(this, t, n);
                    return (
                        at.test(e) || (r = n),
                        r && typeof r == "string" && (i = B.filter(r, i)),
                        (i = this.length > 1 && !dt[e] ? B.unique(i) : i),
                        (this.length > 1 || lt.test(r)) && ft.test(e) && (i = i.reverse()),
                        this.pushStack(i, e, ht.call(arguments).join(","))
                    );
                };
            }
        ),
        B.extend({
            filter: function (e, t, n) {
                return n && (e = ":not(" + e + ")"), t.length === 1 ? (B.find.matchesSelector(t[0], e) ? [t[0]] : []) : B.find.matches(e, t);
            },
            dir: function (e, n, r) {
                var i = [],
                    s = e[n];
                while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !B(s).is(r))) s.nodeType === 1 && i.push(s), (s = s[n]);
                return i;
            },
            nth: function (e, t, n, r) {
                t = t || 1;
                var i = 0;
                for (; e; e = e[n]) if (e.nodeType === 1 && ++i === t) break;
                return e;
            },
            sibling: function (e, t) {
                var n = [];
                for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
                return n;
            },
        });
    var vt = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        mt = / jQuery\d+="(?:\d+|null)"/g,
        gt = /^\s+/,
        yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        wt = /<tbody/i,
        Et = /<|&#?\w+;/,
        St = /<(?:script|style)/i,
        xt = /<(?:script|object|embed|option|style)/i,
        Tt = new RegExp("<(?:" + vt + ")", "i"),
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ct = /\/(java|ecma)script/i,
        kt = /^\s*<!(?:\[CDATA\[|\-\-)/,
        Lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""],
        },
        At = T(D);
    (Lt.optgroup = Lt.option),
        (Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead),
        (Lt.th = Lt.td),
        B.support.htmlSerialize || (Lt._default = [1, "div<div>", "</div>"]),
        B.fn.extend({
            text: function (e) {
                return B.isFunction(e)
                    ? this.each(function (t) {
                          var n = B(this);
                          n.text(e.call(this, t, n.text()));
                      })
                    : typeof e != "object" && e !== t
                    ? this.empty().append(((this[0] && this[0].ownerDocument) || D).createTextNode(e))
                    : B.text(this);
            },
            wrapAll: function (e) {
                if (B.isFunction(e))
                    return this.each(function (t) {
                        B(this).wrapAll(e.call(this, t));
                    });
                if (this[0]) {
                    var t = B(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                var e = this;
                                while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                                return e;
                            })
                            .append(this);
                }
                return this;
            },
            wrapInner: function (e) {
                return B.isFunction(e)
                    ? this.each(function (t) {
                          B(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                          var t = B(this),
                              n = t.contents();
                          n.length ? n.wrapAll(e) : t.append(e);
                      });
            },
            wrap: function (e) {
                var t = B.isFunction(e);
                return this.each(function (n) {
                    B(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        B.nodeName(this, "body") || B(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
            append: function () {
                return this.domManip(arguments, !0, function (e) {
                    this.nodeType === 1 && this.appendChild(e);
                });
            },
            prepend: function () {
                return this.domManip(arguments, !0, function (e) {
                    this.nodeType === 1 && this.insertBefore(e, this.firstChild);
                });
            },
            before: function () {
                if (this[0] && this[0].parentNode)
                    return this.domManip(arguments, !1, function (e) {
                        this.parentNode.insertBefore(e, this);
                    });
                if (arguments.length) {
                    var e = B.clean(arguments);
                    return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments);
                }
            },
            after: function () {
                if (this[0] && this[0].parentNode)
                    return this.domManip(arguments, !1, function (e) {
                        this.parentNode.insertBefore(e, this.nextSibling);
                    });
                if (arguments.length) {
                    var e = this.pushStack(this, "after", arguments);
                    return e.push.apply(e, B.clean(arguments)), e;
                }
            },
            remove: function (e, t) {
                for (var n = 0, r; (r = this[n]) != null; n++) if (!e || B.filter(e, [r]).length) !t && r.nodeType === 1 && (B.cleanData(r.getElementsByTagName("*")), B.cleanData([r])), r.parentNode && r.parentNode.removeChild(r);
                return this;
            },
            empty: function () {
                for (var e = 0, t; (t = this[e]) != null; e++) {
                    t.nodeType === 1 && B.cleanData(t.getElementsByTagName("*"));
                    while (t.firstChild) t.removeChild(t.firstChild);
                }
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = e == null ? !1 : e),
                    (t = t == null ? e : t),
                    this.map(function () {
                        return B.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                if (e === t) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(mt, "") : null;
                if (typeof e == "string" && !St.test(e) && (B.support.leadingWhitespace || !gt.test(e)) && !Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(yt, "<$1></$2>");
                    try {
                        for (var n = 0, r = this.length; n < r; n++) this[n].nodeType === 1 && (B.cleanData(this[n].getElementsByTagName("*")), (this[n].innerHTML = e));
                    } catch (i) {
                        this.empty().append(e);
                    }
                } else
                    B.isFunction(e)
                        ? this.each(function (t) {
                              var n = B(this);
                              n.html(e.call(this, t, n.html()));
                          })
                        : this.empty().append(e);
                return this;
            },
            replaceWith: function (e) {
                return this[0] && this[0].parentNode
                    ? B.isFunction(e)
                        ? this.each(function (t) {
                              var n = B(this),
                                  r = n.html();
                              n.replaceWith(e.call(this, t, r));
                          })
                        : (typeof e != "string" && (e = B(e).detach()),
                          this.each(function () {
                              var t = this.nextSibling,
                                  n = this.parentNode;
                              B(this).remove(), t ? B(t).before(e) : B(n).append(e);
                          }))
                    : this.length
                    ? this.pushStack(B(B.isFunction(e) ? e() : e), "replaceWith", e)
                    : this;
            },
            detach: function (e) {
                return this.remove(e, !0);
            },
            domManip: function (e, n, r) {
                var i,
                    s,
                    o,
                    u,
                    a = e[0],
                    f = [];
                if (!B.support.checkClone && arguments.length === 3 && typeof a == "string" && Nt.test(a))
                    return this.each(function () {
                        B(this).domManip(e, n, r, !0);
                    });
                if (B.isFunction(a))
                    return this.each(function (i) {
                        var s = B(this);
                        (e[0] = a.call(this, i, n ? s.html() : t)), s.domManip(e, n, r);
                    });
                if (this[0]) {
                    (u = a && a.parentNode),
                        B.support.parentNode && u && u.nodeType === 11 && u.childNodes.length === this.length ? (i = { fragment: u }) : (i = B.buildFragment(e, this, f)),
                        (o = i.fragment),
                        o.childNodes.length === 1 ? (s = o = o.firstChild) : (s = o.firstChild);
                    if (s) {
                        n = n && B.nodeName(s, "tr");
                        for (var l = 0, c = this.length, h = c - 1; l < c; l++) r.call(n ? x(this[l], s) : this[l], i.cacheable || (c > 1 && l < h) ? B.clone(o, !0, !0) : o);
                    }
                    f.length && B.each(f, m);
                }
                return this;
            },
        }),
        (B.buildFragment = function (e, t, n) {
            var r,
                i,
                s,
                o,
                u = e[0];
            return (
                t && t[0] && (o = t[0].ownerDocument || t[0]),
                o.createDocumentFragment || (o = D),
                e.length === 1 &&
                    typeof u == "string" &&
                    u.length < 512 &&
                    o === D &&
                    u.charAt(0) === "<" &&
                    !xt.test(u) &&
                    (B.support.checkClone || !Nt.test(u)) &&
                    (B.support.html5Clone || !Tt.test(u)) &&
                    ((i = !0), (s = B.fragments[u]), s && s !== 1 && (r = s)),
                r || ((r = o.createDocumentFragment()), B.clean(e, o, r, n)),
                i && (B.fragments[u] = s ? r : 1),
                { fragment: r, cacheable: i }
            );
        }),
        (B.fragments = {}),
        B.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            B.fn[e] = function (n) {
                var r = [],
                    i = B(n),
                    s = this.length === 1 && this[0].parentNode;
                if (s && s.nodeType === 11 && s.childNodes.length === 1 && i.length === 1) return i[t](this[0]), this;
                for (var o = 0, u = i.length; o < u; o++) {
                    var a = (o > 0 ? this.clone(!0) : this).get();
                    B(i[o])[t](a), (r = r.concat(a));
                }
                return this.pushStack(r, e, i.selector);
            };
        }),
        B.extend({
            clone: function (e, t, n) {
                var r,
                    i,
                    s,
                    o = B.support.html5Clone || !Tt.test("<" + e.nodeName) ? e.cloneNode(!0) : g(e);
                if ((!B.support.noCloneEvent || !B.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !B.isXMLDoc(e)) {
                    E(e, o), (r = w(e)), (i = w(o));
                    for (s = 0; r[s]; ++s) i[s] && E(r[s], i[s]);
                }
                if (t) {
                    S(e, o);
                    if (n) {
                        (r = w(e)), (i = w(o));
                        for (s = 0; r[s]; ++s) S(r[s], i[s]);
                    }
                }
                return (r = i = null), o;
            },
            clean: function (e, t, n, r) {
                var i;
                (t = t || D), typeof t.createElement == "undefined" && (t = t.ownerDocument || (t[0] && t[0].ownerDocument) || D);
                var s = [],
                    o;
                for (var u = 0, a; (a = e[u]) != null; u++) {
                    typeof a == "number" && (a += "");
                    if (!a) continue;
                    if (typeof a == "string")
                        if (!Et.test(a)) a = t.createTextNode(a);
                        else {
                            a = a.replace(yt, "<$1></$2>");
                            var f = (bt.exec(a) || ["", ""])[1].toLowerCase(),
                                l = Lt[f] || Lt._default,
                                c = l[0],
                                h = t.createElement("div");
                            t === D ? At.appendChild(h) : T(t).appendChild(h), (h.innerHTML = l[1] + a + l[2]);
                            while (c--) h = h.lastChild;
                            if (!B.support.tbody) {
                                var p = wt.test(a),
                                    d = f === "table" && !p ? h.firstChild && h.firstChild.childNodes : l[1] === "<table>" && !p ? h.childNodes : [];
                                for (o = d.length - 1; o >= 0; --o) B.nodeName(d[o], "tbody") && !d[o].childNodes.length && d[o].parentNode.removeChild(d[o]);
                            }
                            !B.support.leadingWhitespace && gt.test(a) && h.insertBefore(t.createTextNode(gt.exec(a)[0]), h.firstChild), (a = h.childNodes);
                        }
                    var v;
                    if (!B.support.appendChecked)
                        if (a[0] && typeof (v = a.length) == "number") for (o = 0; o < v; o++) y(a[o]);
                        else y(a);
                    a.nodeType ? s.push(a) : (s = B.merge(s, a));
                }
                if (n) {
                    i = function (e) {
                        return !e.type || Ct.test(e.type);
                    };
                    for (u = 0; s[u]; u++)
                        if (r && B.nodeName(s[u], "script") && (!s[u].type || s[u].type.toLowerCase() === "text/javascript")) r.push(s[u].parentNode ? s[u].parentNode.removeChild(s[u]) : s[u]);
                        else {
                            if (s[u].nodeType === 1) {
                                var m = B.grep(s[u].getElementsByTagName("script"), i);
                                s.splice.apply(s, [u + 1, 0].concat(m));
                            }
                            n.appendChild(s[u]);
                        }
                }
                return s;
            },
            cleanData: function (e) {
                var t,
                    n,
                    r = B.cache,
                    i = B.event.special,
                    s = B.support.deleteExpando;
                for (var o = 0, u; (u = e[o]) != null; o++) {
                    if (u.nodeName && B.noData[u.nodeName.toLowerCase()]) continue;
                    n = u[B.expando];
                    if (n) {
                        t = r[n];
                        if (t && t.events) {
                            for (var a in t.events) i[a] ? B.event.remove(u, a) : B.removeEvent(u, a, t.handle);
                            t.handle && (t.handle.elem = null);
                        }
                        s ? delete u[B.expando] : u.removeAttribute && u.removeAttribute(B.expando), delete r[n];
                    }
                }
            },
        });
    var Ot = /alpha\([^)]*\)/i,
        Mt = /opacity=([^)]*)/,
        _t = /([A-Z]|^ms)/g,
        Dt = /^-?\d+(?:px)?$/i,
        Pt = /^-?\d/,
        Ht = /^([\-+])=([\-+.\de]+)/,
        Bt = { position: "absolute", visibility: "hidden", display: "block" },
        jt = ["Left", "Right"],
        Ft = ["Top", "Bottom"],
        It,
        qt,
        Rt;
    (B.fn.css = function (e, n) {
        return arguments.length === 2 && n === t
            ? this
            : B.access(this, e, n, !0, function (e, n, r) {
                  return r !== t ? B.style(e, n, r) : B.css(e, n);
              });
    }),
        B.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = It(e, "opacity", "opacity");
                            return n === "" ? "1" : n;
                        }
                        return e.style.opacity;
                    },
                },
            },
            cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { float: B.support.cssFloat ? "cssFloat" : "styleFloat" },
            style: function (e, n, r, i) {
                if (!!e && e.nodeType !== 3 && e.nodeType !== 8 && !!e.style) {
                    var s,
                        o,
                        u = B.camelCase(n),
                        a = e.style,
                        f = B.cssHooks[u];
                    n = B.cssProps[u] || u;
                    if (r === t) return f && "get" in f && (s = f.get(e, !1, i)) !== t ? s : a[n];
                    (o = typeof r), o === "string" && (s = Ht.exec(r)) && ((r = +(s[1] + 1) * +s[2] + parseFloat(B.css(e, n))), (o = "number"));
                    if (r == null || (o === "number" && isNaN(r))) return;
                    o === "number" && !B.cssNumber[u] && (r += "px");
                    if (!f || !("set" in f) || (r = f.set(e, r)) !== t)
                        try {
                            a[n] = r;
                        } catch (l) {}
                }
            },
            css: function (e, n, r) {
                var i, s;
                (n = B.camelCase(n)), (s = B.cssHooks[n]), (n = B.cssProps[n] || n), n === "cssFloat" && (n = "float");
                if (s && "get" in s && (i = s.get(e, !0, r)) !== t) return i;
                if (It) return It(e, n);
            },
            swap: function (e, t, n) {
                var r = {};
                for (var i in t) (r[i] = e.style[i]), (e.style[i] = t[i]);
                n.call(e);
                for (i in t) e.style[i] = r[i];
            },
        }),
        (B.curCSS = B.css),
        B.each(["height", "width"], function (e, t) {
            B.cssHooks[t] = {
                get: function (e, n, r) {
                    var i;
                    if (n)
                        return e.offsetWidth !== 0
                            ? v(e, t, r)
                            : (B.swap(e, Bt, function () {
                                  i = v(e, t, r);
                              }),
                              i);
                },
                set: function (e, t) {
                    if (!Dt.test(t)) return t;
                    t = parseFloat(t);
                    if (t >= 0) return t + "px";
                },
            };
        }),
        B.support.opacity ||
            (B.cssHooks.opacity = {
                get: function (e, t) {
                    return Mt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : "";
                },
                set: function (e, t) {
                    var n = e.style,
                        r = e.currentStyle,
                        i = B.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                        s = (r && r.filter) || n.filter || "";
                    n.zoom = 1;
                    if (t >= 1 && B.trim(s.replace(Ot, "")) === "") {
                        n.removeAttribute("filter");
                        if (r && !r.filter) return;
                    }
                    n.filter = Ot.test(s) ? s.replace(Ot, i) : s + " " + i;
                },
            }),
        B(function () {
            B.support.reliableMarginRight ||
                (B.cssHooks.marginRight = {
                    get: function (e, t) {
                        var n;
                        return (
                            B.swap(e, { display: "inline-block" }, function () {
                                t ? (n = It(e, "margin-right", "marginRight")) : (n = e.style.marginRight);
                            }),
                            n
                        );
                    },
                });
        }),
        D.defaultView &&
            D.defaultView.getComputedStyle &&
            (qt = function (e, t) {
                var n, r, i;
                return (
                    (t = t.replace(_t, "-$1").toLowerCase()),
                    (r = e.ownerDocument.defaultView) && (i = r.getComputedStyle(e, null)) && ((n = i.getPropertyValue(t)), n === "" && !B.contains(e.ownerDocument.documentElement, e) && (n = B.style(e, t))),
                    n
                );
            }),
        D.documentElement.currentStyle &&
            (Rt = function (e, t) {
                var n,
                    r,
                    i,
                    s = e.currentStyle && e.currentStyle[t],
                    o = e.style;
                return (
                    s === null && o && (i = o[t]) && (s = i),
                    !Dt.test(s) &&
                        Pt.test(s) &&
                        ((n = o.left),
                        (r = e.runtimeStyle && e.runtimeStyle.left),
                        r && (e.runtimeStyle.left = e.currentStyle.left),
                        (o.left = t === "fontSize" ? "1em" : s || 0),
                        (s = o.pixelLeft + "px"),
                        (o.left = n),
                        r && (e.runtimeStyle.left = r)),
                    s === "" ? "auto" : s
                );
            }),
        (It = qt || Rt),
        B.expr &&
            B.expr.filters &&
            ((B.expr.filters.hidden = function (e) {
                var t = e.offsetWidth,
                    n = e.offsetHeight;
                return (t === 0 && n === 0) || (!B.support.reliableHiddenOffsets && ((e.style && e.style.display) || B.css(e, "display")) === "none");
            }),
            (B.expr.filters.visible = function (e) {
                return !B.expr.filters.hidden(e);
            }));
    var Ut = /%20/g,
        zt = /\[\]$/,
        Wt = /\r?\n/g,
        Xt = /#.*$/,
        Vt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        $t = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Jt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Kt = /^(?:GET|HEAD)$/,
        Qt = /^\/\//,
        Gt = /\?/,
        Yt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Zt = /^(?:select|textarea)/i,
        en = /\s+/,
        tn = /([?&])_=[^&]*/,
        nn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        rn = B.fn.load,
        sn = {},
        on = {},
        un,
        an,
        fn = ["*/"] + ["*"];
    try {
        un = H.href;
    } catch (ln) {
        (un = D.createElement("a")), (un.href = ""), (un = un.href);
    }
    (an = nn.exec(un.toLowerCase()) || []),
        B.fn.extend({
            load: function (e, n, r) {
                if (typeof e != "string" && rn) return rn.apply(this, arguments);
                if (!this.length) return this;
                var i = e.indexOf(" ");
                if (i >= 0) {
                    var s = e.slice(i, e.length);
                    e = e.slice(0, i);
                }
                var o = "GET";
                n && (B.isFunction(n) ? ((r = n), (n = t)) : typeof n == "object" && ((n = B.param(n, B.ajaxSettings.traditional)), (o = "POST")));
                var u = this;
                return (
                    B.ajax({
                        url: e,
                        type: o,
                        dataType: "html",
                        data: n,
                        complete: function (e, t, n) {
                            (n = e.responseText),
                                e.isResolved() &&
                                    (e.done(function (e) {
                                        n = e;
                                    }),
                                    u.html(s ? B("<div>").append(n.replace(Yt, "")).find(s) : n)),
                                r && u.each(r, [n, t, e]);
                        },
                    }),
                    this
                );
            },
            serialize: function () {
                return B.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    return this.elements ? B.makeArray(this.elements) : this;
                })
                    .filter(function () {
                        return this.name && !this.disabled && (this.checked || Zt.test(this.nodeName) || $t.test(this.type));
                    })
                    .map(function (e, t) {
                        var n = B(this).val();
                        return n == null
                            ? null
                            : B.isArray(n)
                            ? B.map(n, function (e, n) {
                                  return { name: t.name, value: e.replace(Wt, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(Wt, "\r\n") };
                    })
                    .get();
            },
        }),
        B.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
            B.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        B.each(["get", "post"], function (e, n) {
            B[n] = function (e, r, i, s) {
                return B.isFunction(r) && ((s = s || i), (i = r), (r = t)), B.ajax({ type: n, url: e, data: r, success: i, dataType: s });
            };
        }),
        B.extend({
            getScript: function (e, n) {
                return B.get(e, t, n, "script");
            },
            getJSON: function (e, t, n) {
                return B.get(e, t, n, "json");
            },
            ajaxSetup: function (e, t) {
                return t ? h(e, B.ajaxSettings) : ((t = e), (e = B.ajaxSettings)), h(e, t), e;
            },
            ajaxSettings: {
                url: un,
                isLocal: Jt.test(an[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded",
                processData: !0,
                async: !0,
                accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": fn },
                contents: { xml: /xml/, html: /html/, json: /json/ },
                responseFields: { xml: "responseXML", text: "responseText" },
                converters: { "* text": e.String, "text html": !0, "text json": B.parseJSON, "text xml": B.parseXML },
                flatOptions: { context: !0, url: !0 },
            },
            ajaxPrefilter: d(sn),
            ajaxTransport: d(on),
            ajax: function (e, n) {
                function r(e, n, r, p) {
                    if (E !== 2) {
                        (E = 2), b && clearTimeout(b), (y = t), (m = p || ""), (T.readyState = e > 0 ? 4 : 0);
                        var d,
                            v,
                            g,
                            w = n,
                            x = r ? l(i, T, r) : t,
                            N,
                            C;
                        if ((e >= 200 && e < 300) || e === 304) {
                            if (i.ifModified) {
                                if ((N = T.getResponseHeader("Last-Modified"))) B.lastModified[h] = N;
                                if ((C = T.getResponseHeader("Etag"))) B.etag[h] = C;
                            }
                            if (e === 304) (w = "notmodified"), (d = !0);
                            else
                                try {
                                    (v = f(i, x)), (w = "success"), (d = !0);
                                } catch (k) {
                                    (w = "parsererror"), (g = k);
                                }
                        } else {
                            g = w;
                            if (!w || e) (w = "error"), e < 0 && (e = 0);
                        }
                        (T.status = e),
                            (T.statusText = "" + (n || w)),
                            d ? u.resolveWith(s, [v, w, T]) : u.rejectWith(s, [T, w, g]),
                            T.statusCode(c),
                            (c = t),
                            S && o.trigger("ajax" + (d ? "Success" : "Error"), [T, i, d ? v : g]),
                            a.fireWith(s, [T, w]),
                            S && (o.trigger("ajaxComplete", [T, i]), --B.active || B.event.trigger("ajaxStop"));
                    }
                }
                typeof e == "object" && ((n = e), (e = t)), (n = n || {});
                var i = B.ajaxSetup({}, n),
                    s = i.context || i,
                    o = s !== i && (s.nodeType || s instanceof B) ? B(s) : B.event,
                    u = B.Deferred(),
                    a = B.Callbacks("once memory"),
                    c = i.statusCode || {},
                    h,
                    d = {},
                    v = {},
                    m,
                    g,
                    y,
                    b,
                    w,
                    E = 0,
                    S,
                    x,
                    T = {
                        readyState: 0,
                        setRequestHeader: function (e, t) {
                            if (!E) {
                                var n = e.toLowerCase();
                                (e = v[n] = v[n] || e), (d[e] = t);
                            }
                            return this;
                        },
                        getAllResponseHeaders: function () {
                            return E === 2 ? m : null;
                        },
                        getResponseHeader: function (e) {
                            var n;
                            if (E === 2) {
                                if (!g) {
                                    g = {};
                                    while ((n = Vt.exec(m))) g[n[1].toLowerCase()] = n[2];
                                }
                                n = g[e.toLowerCase()];
                            }
                            return n === t ? null : n;
                        },
                        overrideMimeType: function (e) {
                            return E || (i.mimeType = e), this;
                        },
                        abort: function (e) {
                            return (e = e || "abort"), y && y.abort(e), r(0, e), this;
                        },
                    };
                u.promise(T),
                    (T.success = T.done),
                    (T.error = T.fail),
                    (T.complete = a.add),
                    (T.statusCode = function (e) {
                        if (e) {
                            var t;
                            if (E < 2) for (t in e) c[t] = [c[t], e[t]];
                            else (t = e[T.status]), T.then(t, t);
                        }
                        return this;
                    }),
                    (i.url = ((e || i.url) + "").replace(Xt, "").replace(Qt, an[1] + "//")),
                    (i.dataTypes = B.trim(i.dataType || "*")
                        .toLowerCase()
                        .split(en)),
                    i.crossDomain == null && ((w = nn.exec(i.url.toLowerCase())), (i.crossDomain = !(!w || (w[1] == an[1] && w[2] == an[2] && (w[3] || (w[1] === "http:" ? 80 : 443)) == (an[3] || (an[1] === "http:" ? 80 : 443)))))),
                    i.data && i.processData && typeof i.data != "string" && (i.data = B.param(i.data, i.traditional)),
                    p(sn, i, n, T);
                if (E === 2) return !1;
                (S = i.global), (i.type = i.type.toUpperCase()), (i.hasContent = !Kt.test(i.type)), S && B.active++ === 0 && B.event.trigger("ajaxStart");
                if (!i.hasContent) {
                    i.data && ((i.url += (Gt.test(i.url) ? "&" : "?") + i.data), delete i.data), (h = i.url);
                    if (i.cache === !1) {
                        var N = B.now(),
                            C = i.url.replace(tn, "$1_=" + N);
                        i.url = C + (C === i.url ? (Gt.test(i.url) ? "&" : "?") + "_=" + N : "");
                    }
                }
                ((i.data && i.hasContent && i.contentType !== !1) || n.contentType) && T.setRequestHeader("Content-Type", i.contentType),
                    i.ifModified && ((h = h || i.url), B.lastModified[h] && T.setRequestHeader("If-Modified-Since", B.lastModified[h]), B.etag[h] && T.setRequestHeader("If-None-Match", B.etag[h])),
                    T.setRequestHeader("Accept", i.dataTypes[0] && i.accepts[i.dataTypes[0]] ? i.accepts[i.dataTypes[0]] + (i.dataTypes[0] !== "*" ? ", " + fn + "; q=0.01" : "") : i.accepts["*"]);
                for (x in i.headers) T.setRequestHeader(x, i.headers[x]);
                if (!i.beforeSend || (i.beforeSend.call(s, T, i) !== !1 && E !== 2)) {
                    for (x in { success: 1, error: 1, complete: 1 }) T[x](i[x]);
                    y = p(on, i, n, T);
                    if (!y) r(-1, "No Transport");
                    else {
                        (T.readyState = 1),
                            S && o.trigger("ajaxSend", [T, i]),
                            i.async &&
                                i.timeout > 0 &&
                                (b = setTimeout(function () {
                                    T.abort("timeout");
                                }, i.timeout));
                        try {
                            (E = 1), y.send(d, r);
                        } catch (k) {
                            if (!(E < 2)) throw k;
                            r(-1, k);
                        }
                    }
                    return T;
                }
                return T.abort(), !1;
            },
            param: function (e, n) {
                var r = [],
                    i = function (e, t) {
                        (t = B.isFunction(t) ? t() : t), (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
                    };
                n === t && (n = B.ajaxSettings.traditional);
                if (B.isArray(e) || (e.jquery && !B.isPlainObject(e)))
                    B.each(e, function () {
                        i(this.name, this.value);
                    });
                else for (var s in e) c(s, e[s], n, i);
                return r.join("&").replace(Ut, "+");
            },
        }),
        B.extend({ active: 0, lastModified: {}, etag: {} });
    var cn = B.now(),
        hn = /(\=)\?(&|$)|\?\?/i;
    B.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return B.expando + "_" + cn++;
        },
    }),
        B.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i = t.contentType === "application/x-www-form-urlencoded" && typeof t.data == "string";
            if (t.dataTypes[0] === "jsonp" || (t.jsonp !== !1 && (hn.test(t.url) || (i && hn.test(t.data))))) {
                var s,
                    o = (t.jsonpCallback = B.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                    u = e[o],
                    a = t.url,
                    f = t.data,
                    l = "$1" + o + "$2";
                return (
                    t.jsonp !== !1 && ((a = a.replace(hn, l)), t.url === a && (i && (f = f.replace(hn, l)), t.data === f && (a += (/\?/.test(a) ? "&" : "?") + t.jsonp + "=" + o))),
                    (t.url = a),
                    (t.data = f),
                    (e[o] = function (e) {
                        s = [e];
                    }),
                    r.always(function () {
                        (e[o] = u), s && B.isFunction(u) && e[o](s[0]);
                    }),
                    (t.converters["script json"] = function () {
                        return s || B.error(o + " was not called"), s[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    "script"
                );
            }
        }),
        B.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /javascript|ecmascript/ },
            converters: {
                "text script": function (e) {
                    return B.globalEval(e), e;
                },
            },
        }),
        B.ajaxPrefilter("script", function (e) {
            e.cache === t && (e.cache = !1), e.crossDomain && ((e.type = "GET"), (e.global = !1));
        }),
        B.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var n,
                    r = D.head || D.getElementsByTagName("head")[0] || D.documentElement;
                return {
                    send: function (i, s) {
                        (n = D.createElement("script")),
                            (n.async = "async"),
                            e.scriptCharset && (n.charset = e.scriptCharset),
                            (n.src = e.url),
                            (n.onload = n.onreadystatechange = function (e, i) {
                                if (i || !n.readyState || /loaded|complete/.test(n.readyState)) (n.onload = n.onreadystatechange = null), r && n.parentNode && r.removeChild(n), (n = t), i || s(200, "success");
                            }),
                            r.insertBefore(n, r.firstChild);
                    },
                    abort: function () {
                        n && n.onload(0, 1);
                    },
                };
            }
        });
    var pn = e.ActiveXObject
            ? function () {
                  for (var e in vn) vn[e](0, 1);
              }
            : !1,
        dn = 0,
        vn;
    (B.ajaxSettings.xhr = e.ActiveXObject
        ? function () {
              return (!this.isLocal && a()) || u();
          }
        : a),
        (function (e) {
            B.extend(B.support, { ajax: !!e, cors: !!e && "withCredentials" in e });
        })(B.ajaxSettings.xhr()),
        B.support.ajax &&
            B.ajaxTransport(function (n) {
                if (!n.crossDomain || B.support.cors) {
                    var r;
                    return {
                        send: function (i, s) {
                            var o = n.xhr(),
                                u,
                                a;
                            n.username ? o.open(n.type, n.url, n.async, n.username, n.password) : o.open(n.type, n.url, n.async);
                            if (n.xhrFields) for (a in n.xhrFields) o[a] = n.xhrFields[a];
                            n.mimeType && o.overrideMimeType && o.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (a in i) o.setRequestHeader(a, i[a]);
                            } catch (f) {}
                            o.send((n.hasContent && n.data) || null),
                                (r = function (e, i) {
                                    var a, f, l, c, h;
                                    try {
                                        if (r && (i || o.readyState === 4)) {
                                            (r = t), u && ((o.onreadystatechange = B.noop), pn && delete vn[u]);
                                            if (i) o.readyState !== 4 && o.abort();
                                            else {
                                                (a = o.status), (l = o.getAllResponseHeaders()), (c = {}), (h = o.responseXML), h && h.documentElement && (c.xml = h), (c.text = o.responseText);
                                                try {
                                                    f = o.statusText;
                                                } catch (p) {
                                                    f = "";
                                                }
                                                !a && n.isLocal && !n.crossDomain ? (a = c.text ? 200 : 404) : a === 1223 && (a = 204);
                                            }
                                        }
                                    } catch (d) {
                                        i || s(-1, d);
                                    }
                                    c && s(a, f, c, l);
                                }),
                                !n.async || o.readyState === 4 ? r() : ((u = ++dn), pn && (vn || ((vn = {}), B(e).unload(pn)), (vn[u] = r)), (o.onreadystatechange = r));
                        },
                        abort: function () {
                            r && r(0, 1);
                        },
                    };
                }
            });
    var mn = {},
        gn,
        yn,
        bn = /^(?:toggle|show|hide)$/,
        wn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        En,
        Sn = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
        xn;
    B.fn.extend({
        show: function (e, t, n) {
            var s, o;
            if (e || e === 0) return this.animate(i("show", 3), e, t, n);
            for (var u = 0, a = this.length; u < a; u++)
                (s = this[u]), s.style && ((o = s.style.display), !B._data(s, "olddisplay") && o === "none" && (o = s.style.display = ""), o === "" && B.css(s, "display") === "none" && B._data(s, "olddisplay", r(s.nodeName)));
            for (u = 0; u < a; u++) {
                s = this[u];
                if (s.style) {
                    o = s.style.display;
                    if (o === "" || o === "none") s.style.display = B._data(s, "olddisplay") || "";
                }
            }
            return this;
        },
        hide: function (e, t, n) {
            if (e || e === 0) return this.animate(i("hide", 3), e, t, n);
            var r,
                s,
                o = 0,
                u = this.length;
            for (; o < u; o++) (r = this[o]), r.style && ((s = B.css(r, "display")), s !== "none" && !B._data(r, "olddisplay") && B._data(r, "olddisplay", s));
            for (o = 0; o < u; o++) this[o].style && (this[o].style.display = "none");
            return this;
        },
        _toggle: B.fn.toggle,
        toggle: function (e, t, n) {
            var r = typeof e == "boolean";
            return (
                B.isFunction(e) && B.isFunction(t)
                    ? this._toggle.apply(this, arguments)
                    : e == null || r
                    ? this.each(function () {
                          var t = r ? e : B(this).is(":hidden");
                          B(this)[t ? "show" : "hide"]();
                      })
                    : this.animate(i("toggle", 3), e, t, n),
                this
            );
        },
        fadeTo: function (e, t, n, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
        },
        animate: function (e, t, n, i) {
            function s() {
                o.queue === !1 && B._mark(this);
                var t = B.extend({}, o),
                    n = this.nodeType === 1,
                    i = n && B(this).is(":hidden"),
                    s,
                    u,
                    a,
                    f,
                    l,
                    c,
                    h,
                    p,
                    d;
                t.animatedProperties = {};
                for (a in e) {
                    (s = B.camelCase(a)),
                        a !== s && ((e[s] = e[a]), delete e[a]),
                        (u = e[s]),
                        B.isArray(u) ? ((t.animatedProperties[s] = u[1]), (u = e[s] = u[0])) : (t.animatedProperties[s] = (t.specialEasing && t.specialEasing[s]) || t.easing || "swing");
                    if ((u === "hide" && i) || (u === "show" && !i)) return t.complete.call(this);
                    n &&
                        (s === "height" || s === "width") &&
                        ((t.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY]),
                        B.css(this, "display") === "inline" && B.css(this, "float") === "none" && (!B.support.inlineBlockNeedsLayout || r(this.nodeName) === "inline" ? (this.style.display = "inline-block") : (this.style.zoom = 1)));
                }
                t.overflow != null && (this.style.overflow = "hidden");
                for (a in e)
                    (f = new B.fx(this, t, a)),
                        (u = e[a]),
                        bn.test(u)
                            ? ((d = B._data(this, "toggle" + a) || (u === "toggle" ? (i ? "show" : "hide") : 0)), d ? (B._data(this, "toggle" + a, d === "show" ? "hide" : "show"), f[d]()) : f[u]())
                            : ((l = wn.exec(u)),
                              (c = f.cur()),
                              l
                                  ? ((h = parseFloat(l[2])),
                                    (p = l[3] || (B.cssNumber[a] ? "" : "px")),
                                    p !== "px" && (B.style(this, a, (h || 1) + p), (c = ((h || 1) / f.cur()) * c), B.style(this, a, c + p)),
                                    l[1] && (h = (l[1] === "-=" ? -1 : 1) * h + c),
                                    f.custom(c, h, p))
                                  : f.custom(c, u, ""));
                return !0;
            }
            var o = B.speed(t, n, i);
            return B.isEmptyObject(e) ? this.each(o.complete, [!1]) : ((e = B.extend({}, e)), o.queue === !1 ? this.each(s) : this.queue(o.queue, s));
        },
        stop: function (e, n, r) {
            return (
                typeof e != "string" && ((r = n), (n = e), (e = t)),
                n && e !== !1 && this.queue(e || "fx", []),
                this.each(function () {
                    function t(e, t, n) {
                        var i = t[n];
                        B.removeData(e, n, !0), i.stop(r);
                    }
                    var n,
                        i = !1,
                        s = B.timers,
                        o = B._data(this);
                    r || B._unmark(!0, this);
                    if (e == null) for (n in o) o[n] && o[n].stop && n.indexOf(".run") === n.length - 4 && t(this, o, n);
                    else o[(n = e + ".run")] && o[n].stop && t(this, o, n);
                    for (n = s.length; n--; ) s[n].elem === this && (e == null || s[n].queue === e) && (r ? s[n](!0) : s[n].saveState(), (i = !0), s.splice(n, 1));
                    (!r || !i) && B.dequeue(this, e);
                })
            );
        },
    }),
        B.each({ slideDown: i("show", 1), slideUp: i("hide", 1), slideToggle: i("toggle", 1), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            B.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
            };
        }),
        B.extend({
            speed: function (e, t, n) {
                var r = e && typeof e == "object" ? B.extend({}, e) : { complete: n || (!n && t) || (B.isFunction(e) && e), duration: e, easing: (n && t) || (t && !B.isFunction(t) && t) };
                r.duration = B.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in B.fx.speeds ? B.fx.speeds[r.duration] : B.fx.speeds._default;
                if (r.queue == null || r.queue === !0) r.queue = "fx";
                return (
                    (r.old = r.complete),
                    (r.complete = function (e) {
                        B.isFunction(r.old) && r.old.call(this), r.queue ? B.dequeue(this, r.queue) : e !== !1 && B._unmark(this);
                    }),
                    r
                );
            },
            easing: {
                linear: function (e, t, n, r) {
                    return n + r * e;
                },
                swing: function (e, t, n, r) {
                    return (-Math.cos(e * Math.PI) / 2 + 0.5) * r + n;
                },
            },
            timers: [],
            fx: function (e, t, n) {
                (this.options = t), (this.elem = e), (this.prop = n), (t.orig = t.orig || {});
            },
        }),
        (B.fx.prototype = {
            update: function () {
                this.options.step && this.options.step.call(this.elem, this.now, this), (B.fx.step[this.prop] || B.fx.step._default)(this);
            },
            cur: function () {
                if (this.elem[this.prop] == null || (!!this.elem.style && this.elem.style[this.prop] != null)) {
                    var e,
                        t = B.css(this.elem, this.prop);
                    return isNaN((e = parseFloat(t))) ? (!t || t === "auto" ? 0 : t) : e;
                }
                return this.elem[this.prop];
            },
            custom: function (e, n, r) {
                function i(e) {
                    return s.step(e);
                }
                var s = this,
                    u = B.fx;
                (this.startTime = xn || o()),
                    (this.end = n),
                    (this.now = this.start = e),
                    (this.pos = this.state = 0),
                    (this.unit = r || this.unit || (B.cssNumber[this.prop] ? "" : "px")),
                    (i.queue = this.options.queue),
                    (i.elem = this.elem),
                    (i.saveState = function () {
                        s.options.hide && B._data(s.elem, "fxshow" + s.prop) === t && B._data(s.elem, "fxshow" + s.prop, s.start);
                    }),
                    i() && B.timers.push(i) && !En && (En = setInterval(u.tick, u.interval));
            },
            show: function () {
                var e = B._data(this.elem, "fxshow" + this.prop);
                (this.options.orig[this.prop] = e || B.style(this.elem, this.prop)),
                    (this.options.show = !0),
                    e !== t ? this.custom(this.cur(), e) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),
                    B(this.elem).show();
            },
            hide: function () {
                (this.options.orig[this.prop] = B._data(this.elem, "fxshow" + this.prop) || B.style(this.elem, this.prop)), (this.options.hide = !0), this.custom(this.cur(), 0);
            },
            step: function (e) {
                var t,
                    n,
                    r,
                    i = xn || o(),
                    s = !0,
                    u = this.elem,
                    a = this.options;
                if (e || i >= a.duration + this.startTime) {
                    (this.now = this.end), (this.pos = this.state = 1), this.update(), (a.animatedProperties[this.prop] = !0);
                    for (t in a.animatedProperties) a.animatedProperties[t] !== !0 && (s = !1);
                    if (s) {
                        a.overflow != null &&
                            !B.support.shrinkWrapBlocks &&
                            B.each(["", "X", "Y"], function (e, t) {
                                u.style["overflow" + t] = a.overflow[e];
                            }),
                            a.hide && B(u).hide();
                        if (a.hide || a.show) for (t in a.animatedProperties) B.style(u, t, a.orig[t]), B.removeData(u, "fxshow" + t, !0), B.removeData(u, "toggle" + t, !0);
                        (r = a.complete), r && ((a.complete = !1), r.call(u));
                    }
                    return !1;
                }
                return (
                    a.duration == Infinity
                        ? (this.now = i)
                        : ((n = i - this.startTime), (this.state = n / a.duration), (this.pos = B.easing[a.animatedProperties[this.prop]](this.state, n, 0, 1, a.duration)), (this.now = this.start + (this.end - this.start) * this.pos)),
                    this.update(),
                    !0
                );
            },
        }),
        B.extend(B.fx, {
            tick: function () {
                var e,
                    t = B.timers,
                    n = 0;
                for (; n < t.length; n++) (e = t[n]), !e() && t[n] === e && t.splice(n--, 1);
                t.length || B.fx.stop();
            },
            interval: 13,
            stop: function () {
                clearInterval(En), (En = null);
            },
            speeds: { slow: 600, fast: 200, _default: 400 },
            step: {
                opacity: function (e) {
                    B.style(e.elem, "opacity", e.now);
                },
                _default: function (e) {
                    e.elem.style && e.elem.style[e.prop] != null ? (e.elem.style[e.prop] = e.now + e.unit) : (e.elem[e.prop] = e.now);
                },
            },
        }),
        B.each(["width", "height"], function (e, t) {
            B.fx.step[t] = function (e) {
                B.style(e.elem, t, Math.max(0, e.now) + e.unit);
            };
        }),
        B.expr &&
            B.expr.filters &&
            (B.expr.filters.animated = function (e) {
                return B.grep(B.timers, function (t) {
                    return e === t.elem;
                }).length;
            });
    var Tn = /^t(?:able|d|h)$/i,
        Nn = /^(?:body|html)$/i;
    "getBoundingClientRect" in D.documentElement
        ? (B.fn.offset = function (e) {
              var t = this[0],
                  r;
              if (e)
                  return this.each(function (t) {
                      B.offset.setOffset(this, e, t);
                  });
              if (!t || !t.ownerDocument) return null;
              if (t === t.ownerDocument.body) return B.offset.bodyOffset(t);
              try {
                  r = t.getBoundingClientRect();
              } catch (i) {}
              var s = t.ownerDocument,
                  o = s.documentElement;
              if (!r || !B.contains(o, t)) return r ? { top: r.top, left: r.left } : { top: 0, left: 0 };
              var u = s.body,
                  a = n(s),
                  f = o.clientTop || u.clientTop || 0,
                  l = o.clientLeft || u.clientLeft || 0,
                  c = a.pageYOffset || (B.support.boxModel && o.scrollTop) || u.scrollTop,
                  h = a.pageXOffset || (B.support.boxModel && o.scrollLeft) || u.scrollLeft,
                  p = r.top + c - f,
                  d = r.left + h - l;
              return { top: p, left: d };
          })
        : (B.fn.offset = function (e) {
              var t = this[0];
              if (e)
                  return this.each(function (t) {
                      B.offset.setOffset(this, e, t);
                  });
              if (!t || !t.ownerDocument) return null;
              if (t === t.ownerDocument.body) return B.offset.bodyOffset(t);
              var n,
                  r = t.offsetParent,
                  i = t,
                  s = t.ownerDocument,
                  o = s.documentElement,
                  u = s.body,
                  a = s.defaultView,
                  f = a ? a.getComputedStyle(t, null) : t.currentStyle,
                  l = t.offsetTop,
                  c = t.offsetLeft;
              while ((t = t.parentNode) && t !== u && t !== o) {
                  if (B.support.fixedPosition && f.position === "fixed") break;
                  (n = a ? a.getComputedStyle(t, null) : t.currentStyle),
                      (l -= t.scrollTop),
                      (c -= t.scrollLeft),
                      t === r &&
                          ((l += t.offsetTop),
                          (c += t.offsetLeft),
                          B.support.doesNotAddBorder && (!B.support.doesAddBorderForTableAndCells || !Tn.test(t.nodeName)) && ((l += parseFloat(n.borderTopWidth) || 0), (c += parseFloat(n.borderLeftWidth) || 0)),
                          (i = r),
                          (r = t.offsetParent)),
                      B.support.subtractsBorderForOverflowNotVisible && n.overflow !== "visible" && ((l += parseFloat(n.borderTopWidth) || 0), (c += parseFloat(n.borderLeftWidth) || 0)),
                      (f = n);
              }
              if (f.position === "relative" || f.position === "static") (l += u.offsetTop), (c += u.offsetLeft);
              return B.support.fixedPosition && f.position === "fixed" && ((l += Math.max(o.scrollTop, u.scrollTop)), (c += Math.max(o.scrollLeft, u.scrollLeft))), { top: l, left: c };
          }),
        (B.offset = {
            bodyOffset: function (e) {
                var t = e.offsetTop,
                    n = e.offsetLeft;
                return B.support.doesNotIncludeMarginInBodyOffset && ((t += parseFloat(B.css(e, "marginTop")) || 0), (n += parseFloat(B.css(e, "marginLeft")) || 0)), { top: t, left: n };
            },
            setOffset: function (e, t, n) {
                var r = B.css(e, "position");
                r === "static" && (e.style.position = "relative");
                var i = B(e),
                    s = i.offset(),
                    o = B.css(e, "top"),
                    u = B.css(e, "left"),
                    a = (r === "absolute" || r === "fixed") && B.inArray("auto", [o, u]) > -1,
                    f = {},
                    l = {},
                    c,
                    h;
                a ? ((l = i.position()), (c = l.top), (h = l.left)) : ((c = parseFloat(o) || 0), (h = parseFloat(u) || 0)),
                    B.isFunction(t) && (t = t.call(e, n, s)),
                    t.top != null && (f.top = t.top - s.top + c),
                    t.left != null && (f.left = t.left - s.left + h),
                    "using" in t ? t.using.call(e, f) : i.css(f);
            },
        }),
        B.fn.extend({
            position: function () {
                if (!this[0]) return null;
                var e = this[0],
                    t = this.offsetParent(),
                    n = this.offset(),
                    r = Nn.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();
                return (
                    (n.top -= parseFloat(B.css(e, "marginTop")) || 0),
                    (n.left -= parseFloat(B.css(e, "marginLeft")) || 0),
                    (r.top += parseFloat(B.css(t[0], "borderTopWidth")) || 0),
                    (r.left += parseFloat(B.css(t[0], "borderLeftWidth")) || 0),
                    { top: n.top - r.top, left: n.left - r.left }
                );
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent || D.body;
                    while (e && !Nn.test(e.nodeName) && B.css(e, "position") === "static") e = e.offsetParent;
                    return e;
                });
            },
        }),
        B.each(["Left", "Top"], function (e, r) {
            var i = "scroll" + r;
            B.fn[i] = function (r) {
                var s, o;
                return r === t
                    ? ((s = this[0]), s ? ((o = n(s)), o ? ("pageXOffset" in o ? o[e ? "pageYOffset" : "pageXOffset"] : (B.support.boxModel && o.document.documentElement[i]) || o.document.body[i]) : s[i]) : null)
                    : this.each(function () {
                          (o = n(this)), o ? o.scrollTo(e ? B(o).scrollLeft() : r, e ? r : B(o).scrollTop()) : (this[i] = r);
                      });
            };
        }),
        B.each(["Height", "Width"], function (e, n) {
            var r = n.toLowerCase();
            (B.fn["inner" + n] = function () {
                var e = this[0];
                return e ? (e.style ? parseFloat(B.css(e, r, "padding")) : this[r]()) : null;
            }),
                (B.fn["outer" + n] = function (e) {
                    var t = this[0];
                    return t ? (t.style ? parseFloat(B.css(t, r, e ? "margin" : "border")) : this[r]()) : null;
                }),
                (B.fn[r] = function (e) {
                    var i = this[0];
                    if (!i) return e == null ? null : this;
                    if (B.isFunction(e))
                        return this.each(function (t) {
                            var n = B(this);
                            n[r](e.call(this, t, n[r]()));
                        });
                    if (B.isWindow(i)) {
                        var s = i.document.documentElement["client" + n],
                            o = i.document.body;
                        return (i.document.compatMode === "CSS1Compat" && s) || (o && o["client" + n]) || s;
                    }
                    if (i.nodeType === 9) return Math.max(i.documentElement["client" + n], i.body["scroll" + n], i.documentElement["scroll" + n], i.body["offset" + n], i.documentElement["offset" + n]);
                    if (e === t) {
                        var u = B.css(i, r),
                            a = parseFloat(u);
                        return B.isNumeric(a) ? a : u;
                    }
                    return this.css(r, typeof e == "string" ? e : e + "px");
                });
        }),
        (e.jQuery = e.$ = B),
        typeof define == "function" &&
            define.amd &&
            define.amd.jQuery &&
            define("jquery", [], function () {
                return B;
            });
})(window),
    !(function (e) {
        (e.fn.toc = function (t) {
            var n = this,
                r = e.extend({}, jQuery.fn.toc.defaults, t),
                i = e(r.container),
                s = e(r.selectors, i),
                o = [],
                u = r.prefix + "-active",
                a = function (t) {
                    for (var n = 0, r = arguments.length; n < r; n++) {
                        var i = arguments[n],
                            s = e(i);
                        if (s.scrollTop() > 0) return s;
                        s.scrollTop(1);
                        var o = s.scrollTop() > 0;
                        s.scrollTop(0);
                        if (o) return s;
                    }
                    return [];
                },
                f = a(r.container, "body", "html"),
                l = function (t) {
                    if (r.smoothScrolling) {
                        t.preventDefault();
                        var i = e(t.target).attr("href"),
                            s = e(i);
                        f.animate({ scrollTop: s.offset().top }, 400, "swing", function () {
                            location.hash = i;
                        });
                    }
                    e("li", n).removeClass(u), e(t.target).parent().addClass(u);
                },
                c,
                h = function (t) {
                    c && clearTimeout(c),
                        (c = setTimeout(function () {
                            var t = e(window).scrollTop();
                            for (var r = 0, i = o.length; r < i; r++)
                                if (o[r] >= t) {
                                    e("li", n).removeClass(u), e("li:eq(" + (r - 1) + ")", n).addClass(u);
                                    break;
                                }
                        }, 50));
                };
            return (
                r.highlightOnScroll && (e(window).bind("scroll", h), h()),
                this.each(function () {
                    var t = e("<ul/>");
                    s.each(function (n, i) {
                        var s = e(i);
                        o.push(s.offset().top - r.highlightOffset);
                        var u = e("<span/>").attr("id", r.anchorName(n, i, r.prefix)).insertBefore(s),
                            a = e("<a/>")
                                .text(s.text())
                                .attr("href", "#" + r.anchorName(n, i, r.prefix))
                                .bind("click", l),
                            f = e("<li/>")
                                .addClass(r.prefix + "-" + s[0].tagName.toLowerCase())
                                .append(a);
                        t.append(f);
                    });
                    var n = e(this);
                    n.html(t);
                })
            );
        }),
            (jQuery.fn.toc.defaults = {
                container: "body",
                selectors: "h1,h2,h3",
                smoothScrolling: !0,
                prefix: "toc",
                highlightOnScroll: !0,
                highlightOffset: 100,
                anchorName: function (e, t, n) {
                    return n + e;
                },
            });
    })(jQuery),
    !(function (e) {
        var t = function (t, n, r) {
                e.ajax({
                    url: "https://api.github.com/repos/" + t + "/" + n,
                    dataType: "jsonp",
                    success: function (e) {
                        if (e.data.message == "Not Found") throw new Error("Invalid user or repo");
                        r(e.data);
                    },
                });
            },
            n = function (t, n, r) {
                e.ajax({
                    url: "https://api.github.com/repos/" + t + "/" + n + "/commits",
                    dataType: "jsonp",
                    success: function (e) {
                        var t = e.data[0];
                        r(t);
                    },
                });
            },
            r = function (e, r, i) {
                var s = 0,
                    o = 2,
                    u,
                    a,
                    f = function () {
                        s == o && i(u, a);
                    };
                t(e, r, function (e) {
                    s++, (u = e), f();
                }),
                    n(e, r, function (e) {
                        s++, (a = e), f();
                    });
            },
            i = function (e) {
                if (typeof e == "string") {
                    var t = e.split("T")[0].split("-");
                    e = new Date(t[0], t[1] - 1, t[2]);
                }
                var n = new Date().getTime(),
                    r = n - e.getTime(),
                    i = r / 1e3,
                    s = Math.floor(r / 864e5);
                return s === 0 ? "today" : s > 30 ? Math.floor(s / 30) + " month(s) ago" : s + " day(s) ago";
            };
        (e.fn.hubInfo = function (t) {
            var n = e.extend({}, e.fn.hubInfo.defaults, t),
                s = this;
            return (
                r(n.user, n.repo, function (t, r) {
                    n.debug && console.log(arguments),
                        s.each(function (s, o) {
                            var u = e(n.template);
                            u.find(".repo-lang")
                                .html(t.language)
                                .end()
                                .find(".repo-watchers")
                                .html(t.watchers)
                                .attr("href", t.html_url)
                                .end()
                                .find(".repo-forks")
                                .html(t.forks)
                                .attr("href", t.html_url)
                                .end()
                                .find(".repo-name")
                                .html(t.name)
                                .attr("href", t.html_url)
                                .end()
                                .find(".repo-commit-message")
                                .html(r.commit.message)
                                .attr("href", "https://github.com/" + n.user + "/" + n.repo + "/commit/" + r.sha)
                                .end()
                                .find(".repo-commit-date span")
                                .html(i(r.commit.committer.date))
                                .end();
                            var a = e(o);
                            a.html(u), a.trigger("render");
                        });
                }),
                s
            );
        }),
            (e.fn.hubInfo.defaults = {
                user: "",
                repo: "",
                debug: !1,
                template: [
                    '<div class="github-repo">',
                    '<div class="repo-header">',
                    '<div class="repo-stats">',
                    '<span class="repo-lang"></span>',
                    '<a class="repo-watchers"></a>',
                    '<a class="repo-forks"></a>',
                    "</div>",
                    "<div>",
                    '<a class="repo-name"></a>',
                    "</div>",
                    "</div>",
                    '<div class="repo-commit">',
                    '<a class="repo-commit-message"></a>',
                    '<div class="repo-commit-date">committed <span></span></div>',
                    "</div>",
                    "</div>",
                ].join(""),
            });
    })(jQuery);
