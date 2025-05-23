/*! JSMaps v3.1.3, 2018-04-19 */

! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Raphael = e() : t.Raphael = e()
}(this, function() {
    return function(t) {
        function e(i) {
            if (r[i]) return r[i].exports;
            var n = r[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return t[i].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
        }
        var r = {};
        return e.m = t, e.c = r, e.p = "", e(0)
    }([function(t, e, r) {
        var i, n;
        i = [r(1), r(3), r(4)], void 0 !== (n = function(t) {
            return t
        }.apply(e, i)) && (t.exports = n)
    }, function(t, e, r) {
        var i, n;
        i = [r(2)], void 0 !== (n = function(t) {
            function e(r) {
                if (e.is(r, "function")) return m ? r() : t.on("raphael.DOMload", r);
                if (e.is(r, G)) return e._engine.create[T](e, r.splice(0, 3 + e.is(r[0], W))).add(r);
                var i = Array.prototype.slice.call(arguments, 0);
                if (e.is(i[i.length - 1], "function")) {
                    var n = i.pop();
                    return m ? n.call(e._engine.create[T](e, i)) : t.on("raphael.DOMload", function() {
                        n.call(e._engine.create[T](e, i))
                    })
                }
                return e._engine.create[T](e, arguments)
            }

            function r(t) {
                if ("function" == typeof t || Object(t) !== t) return t;
                var e = new t.constructor;
                for (var i in t) t[B](i) && (e[i] = r(t[i]));
                return e
            }

            function i(t, e) {
                for (var r = 0, i = t.length; r < i; r++)
                    if (t[r] === e) return t.push(t.splice(r, 1)[0])
            }

            function n(t, e, r) {
                function n() {
                    var a = Array.prototype.slice.call(arguments, 0),
                        s = a.join("␀"),
                        o = n.cache = n.cache || {},
                        l = n.count = n.count || [];
                    return o[B](s) ? (i(l, s), r ? r(o[s]) : o[s]) : (l.length >= 1e3 && delete o[l.shift()], l.push(s), o[s] = t[T](e, a), r ? r(o[s]) : o[s])
                }
                return n
            }

            function a() {
                return this.hex
            }

            function s(t, e) {
                for (var r = [], i = 0, n = t.length; n - 2 * !e > i; i += 2) {
                    var a = [{
                        x: +t[i - 2],
                        y: +t[i - 1]
                    }, {
                        x: +t[i],
                        y: +t[i + 1]
                    }, {
                        x: +t[i + 2],
                        y: +t[i + 3]
                    }, {
                        x: +t[i + 4],
                        y: +t[i + 5]
                    }];
                    e ? i ? n - 4 == i ? a[3] = {
                        x: +t[0],
                        y: +t[1]
                    } : n - 2 == i && (a[2] = {
                        x: +t[0],
                        y: +t[1]
                    }, a[3] = {
                        x: +t[2],
                        y: +t[3]
                    }) : a[0] = {
                        x: +t[n - 2],
                        y: +t[n - 1]
                    } : n - 4 == i ? a[3] = a[2] : i || (a[0] = {
                        x: +t[i],
                        y: +t[i + 1]
                    }), r.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y])
                }
                return r
            }

            function o(t, e, r, i, n) {
                return t * (t * (-3 * e + 9 * r - 9 * i + 3 * n) + 6 * e - 12 * r + 6 * i) - 3 * e + 3 * r
            }

            function l(t, e, r, i, n, a, s, l, h) {
                null == h && (h = 1);
                for (var u = (h = h > 1 ? 1 : h < 0 ? 0 : h) / 2, c = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], f = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, d = 0; d < 12; d++) {
                    var g = u * c[d] + u,
                        v = o(g, t, r, n, s),
                        x = o(g, e, i, a, l),
                        y = v * v + x * x;
                    p += f[d] * I.sqrt(y)
                }
                return u * p
            }

            function h(t, e, r, i, n, a, s, o, h) {
                if (!(h < 0 || l(t, e, r, i, n, a, s, o) < h)) {
                    var u, c = .5,
                        f = 1 - c;
                    for (u = l(t, e, r, i, n, a, s, o, f); O(u - h) > .01;) c /= 2, u = l(t, e, r, i, n, a, s, o, f += (u < h ? 1 : -1) * c);
                    return f
                }
            }

            function u(t, e, r, i, n, a, s, o) {
                if (!(D(t, r) < q(n, s) || q(t, r) > D(n, s) || D(e, i) < q(a, o) || q(e, i) > D(a, o))) {
                    var l = (t * i - e * r) * (n - s) - (t - r) * (n * o - a * s),
                        h = (t * i - e * r) * (a - o) - (e - i) * (n * o - a * s),
                        u = (t - r) * (a - o) - (e - i) * (n - s);
                    if (u) {
                        var c = l / u,
                            f = h / u,
                            p = +c.toFixed(2),
                            d = +f.toFixed(2);
                        if (!(p < +q(t, r).toFixed(2) || p > +D(t, r).toFixed(2) || p < +q(n, s).toFixed(2) || p > +D(n, s).toFixed(2) || d < +q(e, i).toFixed(2) || d > +D(e, i).toFixed(2) || d < +q(a, o).toFixed(2) || d > +D(a, o).toFixed(2))) return {
                            x: c,
                            y: f
                        }
                    }
                }
            }

            function c(t, r, i) {
                var n = e.bezierBBox(t),
                    a = e.bezierBBox(r);
                if (!e.isBBoxIntersect(n, a)) return i ? 0 : [];
                for (var s = l.apply(0, t), o = l.apply(0, r), h = D(~~(s / 5), 1), c = D(~~(o / 5), 1), f = [], p = [], d = {}, g = i ? 0 : [], v = 0; v < h + 1; v++) {
                    var x = e.findDotsAtSegment.apply(e, t.concat(v / h));
                    f.push({
                        x: x.x,
                        y: x.y,
                        t: v / h
                    })
                }
                for (v = 0; v < c + 1; v++) x = e.findDotsAtSegment.apply(e, r.concat(v / c)), p.push({
                    x: x.x,
                    y: x.y,
                    t: v / c
                });
                for (v = 0; v < h; v++)
                    for (var y = 0; y < c; y++) {
                        var m = f[v],
                            b = f[v + 1],
                            _ = p[y],
                            w = p[y + 1],
                            k = O(b.x - m.x) < .001 ? "y" : "x",
                            B = O(w.x - _.x) < .001 ? "y" : "x",
                            C = u(m.x, m.y, b.x, b.y, _.x, _.y, w.x, w.y);
                        if (C) {
                            if (d[C.x.toFixed(4)] == C.y.toFixed(4)) continue;
                            d[C.x.toFixed(4)] = C.y.toFixed(4);
                            var S = m.t + O((C[k] - m[k]) / (b[k] - m[k])) * (b.t - m.t),
                                A = _.t + O((C[B] - _[B]) / (w[B] - _[B])) * (w.t - _.t);
                            S >= 0 && S <= 1.001 && A >= 0 && A <= 1.001 && (i ? g++ : g.push({
                                x: C.x,
                                y: C.y,
                                t1: q(S, 1),
                                t2: q(A, 1)
                            }))
                        }
                    }
                return g
            }

            function f(t, r, i) {
                t = e._path2curve(t), r = e._path2curve(r);
                for (var n, a, s, o, l, h, u, f, p, d, g = i ? 0 : [], v = 0, x = t.length; v < x; v++) {
                    var y = t[v];
                    if ("M" == y[0]) n = l = y[1], a = h = y[2];
                    else {
                        "C" == y[0] ? (n = (p = [n, a].concat(y.slice(1)))[6], a = p[7]) : (p = [n, a, n, a, l, h, l, h], n = l, a = h);
                        for (var m = 0, b = r.length; m < b; m++) {
                            var _ = r[m];
                            if ("M" == _[0]) s = u = _[1], o = f = _[2];
                            else {
                                "C" == _[0] ? (s = (d = [s, o].concat(_.slice(1)))[6], o = d[7]) : (d = [s, o, s, o, u, f, u, f], s = u, o = f);
                                var w = c(p, d, i);
                                if (i) g += w;
                                else {
                                    for (var k = 0, B = w.length; k < B; k++) w[k].segment1 = v, w[k].segment2 = m, w[k].bez1 = p, w[k].bez2 = d;
                                    g = g.concat(w)
                                }
                            }
                        }
                    }
                }
                return g
            }

            function p(t, e, r, i, n, a) {
                null != t ? (this.a = +t, this.b = +e, this.c = +r, this.d = +i, this.e = +n, this.f = +a) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
            }

            function d() {
                return this.x + L + this.y + L + this.width + " × " + this.height
            }

            function g(t, e, r, i, n, a) {
                function s(t) {
                    return ((u * t + h) * t + l) * t
                }

                function o(t, e) {
                    var r, i, n, a, o, c;
                    for (n = t, c = 0; c < 8; c++) {
                        if (a = s(n) - t, O(a) < e) return n;
                        if (o = (3 * u * n + 2 * h) * n + l, O(o) < 1e-6) break;
                        n -= a / o
                    }
                    if (r = 0, i = 1, (n = t) < r) return r;
                    if (n > i) return i;
                    for (; r < i;) {
                        if (a = s(n), O(a - t) < e) return n;
                        t > a ? r = n : i = n, n = (i - r) / 2 + r
                    }
                    return n
                }
                var l = 3 * e,
                    h = 3 * (i - e) - l,
                    u = 1 - l - h,
                    c = 3 * r,
                    f = 3 * (n - r) - c,
                    p = 1 - c - f;
                return function(t, e) {
                    var r = o(t, e);
                    return ((p * r + f) * r + c) * r
                }(t, 1 / (200 * a))
            }

            function v(t, e) {
                var r = [],
                    i = {};
                if (this.ms = e, this.times = 1, t) {
                    for (var n in t) t[B](n) && (i[Q(n)] = t[n], r.push(Q(n)));
                    r.sort(ht)
                }
                this.anim = i, this.top = r[r.length - 1], this.percents = r
            }

            function x(r, i, n, a, s, o) {
                n = Q(n);
                var l, h, u, c, f, d, v = r.ms,
                    x = {},
                    y = {},
                    m = {};
                if (a)
                    for (w = 0, k = ne.length; w < k; w++) {
                        var b = ne[w];
                        if (b.el.id == i.id && b.anim == r) {
                            b.percent != n ? (ne.splice(w, 1), u = 1) : h = b, i.attr(b.totalOrigin);
                            break
                        }
                    } else a = +y;
                for (var w = 0, k = r.percents.length; w < k; w++) {
                    if (r.percents[w] == n || r.percents[w] > a * r.top) {
                        n = r.percents[w], f = r.percents[w - 1] || 0, v = v / r.top * (n - f), c = r.percents[w + 1], l = r.anim[n];
                        break
                    }
                    a && i.attr(r.anim[r.percents[w]])
                }
                if (l) {
                    if (h) h.initstatus = a, h.start = new Date - h.ms * a;
                    else {
                        for (var C in l)
                            if (l[B](C) && (et[B](C) || i.paper.customAttributes[B](C))) switch (x[C] = i.attr(C), null == x[C] && (x[C] = tt[C]), y[C] = l[C], et[C]) {
                                case W:
                                    m[C] = (y[C] - x[C]) / v;
                                    break;
                                case "colour":
                                    x[C] = e.getRGB(x[C]);
                                    var S = e.getRGB(y[C]);
                                    m[C] = {
                                        r: (S.r - x[C].r) / v,
                                        g: (S.g - x[C].g) / v,
                                        b: (S.b - x[C].b) / v
                                    };
                                    break;
                                case "path":
                                    var A = zt(x[C], y[C]),
                                        T = A[1];
                                    for (x[C] = A[0], m[C] = [], w = 0, k = x[C].length; w < k; w++) {
                                        m[C][w] = [0];
                                        for (var M = 1, N = x[C][w].length; M < N; M++) m[C][w][M] = (T[w][M] - x[C][w][M]) / v
                                    }
                                    break;
                                case "transform":
                                    var L = i._,
                                        F = It(L[C], y[C]);
                                    if (F)
                                        for (x[C] = F.from, y[C] = F.to, m[C] = [], m[C].real = !0, w = 0, k = x[C].length; w < k; w++)
                                            for (m[C][w] = [x[C][w][0]], M = 1, N = x[C][w].length; M < N; M++) m[C][w][M] = (y[C][w][M] - x[C][w][M]) / v;
                                    else {
                                        var R = i.matrix || new p,
                                            j = {
                                                _: {
                                                    transform: L.transform
                                                },
                                                getBBox: function() {
                                                    return i.getBBox(1)
                                                }
                                            };
                                        x[C] = [R.a, R.b, R.c, R.d, R.e, R.f], Rt(j, y[C]), y[C] = j._.transform, m[C] = [(j.matrix.a - R.a) / v, (j.matrix.b - R.b) / v, (j.matrix.c - R.c) / v, (j.matrix.d - R.d) / v, (j.matrix.e - R.e) / v, (j.matrix.f - R.f) / v]
                                    }
                                    break;
                                case "csv":
                                    var I = z(l[C])[P](_),
                                        D = z(x[C])[P](_);
                                    if ("clip-rect" == C)
                                        for (x[C] = D, m[C] = [], w = D.length; w--;) m[C][w] = (I[w] - x[C][w]) / v;
                                    y[C] = I;
                                    break;
                                default:
                                    for (I = [][E](l[C]), D = [][E](x[C]), m[C] = [], w = i.paper.customAttributes[C].length; w--;) m[C][w] = ((I[w] || 0) - (D[w] || 0)) / v
                            }
                        var q = l.easing,
                            O = e.easing_formulas[q];
                        if (!O)
                            if ((O = z(q).match($)) && 5 == O.length) {
                                var V = O;
                                O = function(t) {
                                    return g(t, +V[1], +V[2], +V[3], +V[4], v)
                                }
                            } else O = ut;
                        if (d = l.start || r.start || +new Date, b = {
                                anim: r,
                                percent: n,
                                timestamp: d,
                                start: d + (r.del || 0),
                                status: 0,
                                initstatus: a || 0,
                                stop: !1,
                                ms: v,
                                easing: O,
                                from: x,
                                diff: m,
                                to: y,
                                el: i,
                                callback: l.callback,
                                prev: f,
                                next: c,
                                repeat: o || r.times,
                                origin: i.attr(),
                                totalOrigin: s
                            }, ne.push(b), a && !h && !u && (b.stop = !0, b.start = new Date - v * a, 1 == ne.length)) return se();
                        u && (b.start = new Date - b.ms * a), 1 == ne.length && ae(se)
                    }
                    t("raphael.anim.start." + i.id, i, r)
                }
            }

            function y(t) {
                for (var e = 0; e < ne.length; e++) ne[e].el.paper == t && ne.splice(e--, 1)
            }
            e.version = "2.2.0", e.eve = t;
            var m, b, _ = /[, ]+/,
                w = {
                    circle: 1,
                    rect: 1,
                    path: 1,
                    ellipse: 1,
                    text: 1,
                    image: 1
                },
                k = /\{(\d+)\}/g,
                B = "hasOwnProperty",
                C = {
                    doc: document,
                    win: window
                },
                S = {
                    was: Object.prototype[B].call(C.win, "Raphael"),
                    is: C.win.Raphael
                },
                A = function() {
                    this.ca = this.customAttributes = {}
                },
                T = "apply",
                E = "concat",
                M = "ontouchstart" in C.win || C.win.DocumentTouch && C.doc instanceof DocumentTouch,
                N = "",
                L = " ",
                z = String,
                P = "split",
                F = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [P](L),
                R = {
                    mousedown: "touchstart",
                    mousemove: "touchmove",
                    mouseup: "touchend"
                },
                j = z.prototype.toLowerCase,
                I = Math,
                D = I.max,
                q = I.min,
                O = I.abs,
                V = I.pow,
                Y = I.PI,
                W = "number",
                G = "array",
                H = Object.prototype.toString,
                X = (e._ISURL = /^url\(['"]?(.+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
                U = {
                    NaN: 1,
                    Infinity: 1,
                    "-Infinity": 1
                },
                $ = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
                Z = I.round,
                Q = parseFloat,
                J = parseInt,
                K = z.prototype.toUpperCase,
                tt = e._availableAttrs = {
                    "arrow-end": "none",
                    "arrow-start": "none",
                    blur: 0,
                    "clip-rect": "0 0 1e9 1e9",
                    cursor: "default",
                    cx: 0,
                    cy: 0,
                    fill: "#fff",
                    "fill-opacity": 1,
                    font: '10px "Arial"',
                    "font-family": '"Arial"',
                    "font-size": "10",
                    "font-style": "normal",
                    "font-weight": 400,
                    gradient: 0,
                    height: 0,
                    href: "http://raphaeljs.com/",
                    "letter-spacing": 0,
                    opacity: 1,
                    path: "M0,0",
                    r: 0,
                    rx: 0,
                    ry: 0,
                    src: "",
                    stroke: "#000",
                    "stroke-dasharray": "",
                    "stroke-linecap": "butt",
                    "stroke-linejoin": "butt",
                    "stroke-miterlimit": 0,
                    "stroke-opacity": 1,
                    "stroke-width": 1,
                    target: "_blank",
                    "text-anchor": "middle",
                    title: "Raphael",
                    transform: "",
                    width: 0,
                    x: 0,
                    y: 0,
                    class: ""
                },
                et = e._availableAnimAttrs = {
                    blur: W,
                    "clip-rect": "csv",
                    cx: W,
                    cy: W,
                    fill: "colour",
                    "fill-opacity": W,
                    "font-size": W,
                    height: W,
                    opacity: W,
                    path: "path",
                    r: W,
                    rx: W,
                    ry: W,
                    stroke: "colour",
                    "stroke-opacity": W,
                    "stroke-width": W,
                    transform: "transform",
                    width: W,
                    x: W,
                    y: W
                },
                rt = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
                it = {
                    hs: 1,
                    rg: 1
                },
                nt = /,?([achlmqrstvxz]),?/gi,
                at = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                st = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                ot = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
                lt = (e._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
                ht = function(t, e) {
                    return Q(t) - Q(e)
                },
                ut = function(t) {
                    return t
                },
                ct = e._rectPath = function(t, e, r, i, n) {
                    return n ? [
                        ["M", t + n, e],
                        ["l", r - 2 * n, 0],
                        ["a", n, n, 0, 0, 1, n, n],
                        ["l", 0, i - 2 * n],
                        ["a", n, n, 0, 0, 1, -n, n],
                        ["l", 2 * n - r, 0],
                        ["a", n, n, 0, 0, 1, -n, -n],
                        ["l", 0, 2 * n - i],
                        ["a", n, n, 0, 0, 1, n, -n],
                        ["z"]
                    ] : [
                        ["M", t, e],
                        ["l", r, 0],
                        ["l", 0, i],
                        ["l", -r, 0],
                        ["z"]
                    ]
                },
                ft = function(t, e, r, i) {
                    return null == i && (i = r), [
                        ["M", t, e],
                        ["m", 0, -i],
                        ["a", r, i, 0, 1, 1, 0, 2 * i],
                        ["a", r, i, 0, 1, 1, 0, -2 * i],
                        ["z"]
                    ]
                },
                pt = e._getPath = {
                    path: function(t) {
                        return t.attr("path")
                    },
                    circle: function(t) {
                        var e = t.attrs;
                        return ft(e.cx, e.cy, e.r)
                    },
                    ellipse: function(t) {
                        var e = t.attrs;
                        return ft(e.cx, e.cy, e.rx, e.ry)
                    },
                    rect: function(t) {
                        var e = t.attrs;
                        return ct(e.x, e.y, e.width, e.height, e.r)
                    },
                    image: function(t) {
                        var e = t.attrs;
                        return ct(e.x, e.y, e.width, e.height)
                    },
                    text: function(t) {
                        var e = t._getBBox();
                        return ct(e.x, e.y, e.width, e.height)
                    },
                    set: function(t) {
                        var e = t._getBBox();
                        return ct(e.x, e.y, e.width, e.height)
                    }
                },
                dt = e.mapPath = function(t, e) {
                    if (!e) return t;
                    var r, i, n, a, s, o, l;
                    for (n = 0, s = (t = zt(t)).length; n < s; n++)
                        for (a = 1, o = (l = t[n]).length; a < o; a += 2) r = e.x(l[a], l[a + 1]), i = e.y(l[a], l[a + 1]), l[a] = r, l[a + 1] = i;
                    return t
                };
            if (e._g = C, e.type = C.win.SVGAngle || C.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == e.type) {
                var gt, vt = C.doc.createElement("div");
                if (vt.innerHTML = '<v:shape adj="1"/>', gt = vt.firstChild, gt.style.behavior = "url(#default#VML)", !gt || "object" != typeof gt.adj) return e.type = N;
                vt = null
            }
            e.svg = !(e.vml = "VML" == e.type), e._Paper = A, e.fn = b = A.prototype = e.prototype, e._id = 0, e.is = function(t, e) {
                return e = j.call(e), "finite" == e ? !U[B](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || H.call(t).slice(8, -1).toLowerCase() == e
            }, e.angle = function(t, r, i, n, a, s) {
                if (null == a) {
                    var o = t - i,
                        l = r - n;
                    return o || l ? (180 + 180 * I.atan2(-l, -o) / Y + 360) % 360 : 0
                }
                return e.angle(t, r, a, s) - e.angle(i, n, a, s)
            }, e.rad = function(t) {
                return t % 360 * Y / 180
            }, e.deg = function(t) {
                return Math.round(180 * t / Y % 360 * 1e3) / 1e3
            }, e.snapTo = function(t, r, i) {
                if (i = e.is(i, "finite") ? i : 10, e.is(t, G)) {
                    for (var n = t.length; n--;)
                        if (O(t[n] - r) <= i) return t[n]
                } else {
                    var a = r % (t = +t);
                    if (a < i) return r - a;
                    if (a > t - i) return r - a + t
                }
                return r
            };
            e.createUUID = function(t, e) {
                return function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t, e).toUpperCase()
                }
            }(/[xy]/g, function(t) {
                var e = 16 * I.random() | 0;
                return ("x" == t ? e : 3 & e | 8).toString(16)
            });
            e.setWindow = function(r) {
                t("raphael.setWindow", e, C.win, r), C.win = r, C.doc = C.win.document, e._engine.initWin && e._engine.initWin(C.win)
            };
            var xt = function(t) {
                    if (e.vml) {
                        var r, i = /^\s+|\s+$/g;
                        try {
                            var a = new ActiveXObject("htmlfile");
                            a.write("<body>"), a.close(), r = a.body
                        } catch (t) {
                            r = createPopup().document.body
                        }
                        var s = r.createTextRange();
                        xt = n(function(t) {
                            try {
                                r.style.color = z(t).replace(i, N);
                                var e = s.queryCommandValue("ForeColor");
                                return "#" + ("000000" + (e = (255 & e) << 16 | 65280 & e | (16711680 & e) >>> 16).toString(16)).slice(-6)
                            } catch (t) {
                                return "none"
                            }
                        })
                    } else {
                        var o = C.doc.createElement("i");
                        o.title = "Raphaël Colour Picker", o.style.display = "none", C.doc.body.appendChild(o), xt = n(function(t) {
                            return o.style.color = t, C.doc.defaultView.getComputedStyle(o, N).getPropertyValue("color")
                        })
                    }
                    return xt(t)
                },
                yt = function() {
                    return "hsb(" + [this.h, this.s, this.b] + ")"
                },
                mt = function() {
                    return "hsl(" + [this.h, this.s, this.l] + ")"
                },
                bt = function() {
                    return this.hex
                },
                _t = function(t, r, i) {
                    if (null == r && e.is(t, "object") && "r" in t && "g" in t && "b" in t && (i = t.b, r = t.g, t = t.r), null == r && e.is(t, "string")) {
                        var n = e.getRGB(t);
                        t = n.r, r = n.g, i = n.b
                    }
                    return (t > 1 || r > 1 || i > 1) && (t /= 255, r /= 255, i /= 255), [t, r, i]
                },
                wt = function(t, r, i, n) {
                    var a = {
                        r: t *= 255,
                        g: r *= 255,
                        b: i *= 255,
                        hex: e.rgb(t, r, i),
                        toString: bt
                    };
                    return e.is(n, "finite") && (a.opacity = n), a
                };
            e.color = function(t) {
                var r;
                return e.is(t, "object") && "h" in t && "s" in t && "b" in t ? (r = e.hsb2rgb(t), t.r = r.r, t.g = r.g, t.b = r.b, t.hex = r.hex) : e.is(t, "object") && "h" in t && "s" in t && "l" in t ? (r = e.hsl2rgb(t), t.r = r.r, t.g = r.g, t.b = r.b, t.hex = r.hex) : (e.is(t, "string") && (t = e.getRGB(t)), e.is(t, "object") && "r" in t && "g" in t && "b" in t ? (r = e.rgb2hsl(t), t.h = r.h, t.s = r.s, t.l = r.l, r = e.rgb2hsb(t), t.v = r.b) : (t = {
                    hex: "none"
                }).r = t.g = t.b = t.h = t.s = t.v = t.l = -1), t.toString = bt, t
            }, e.hsb2rgb = function(t, e, r, i) {
                this.is(t, "object") && "h" in t && "s" in t && "b" in t && (r = t.b, e = t.s, i = t.o, t = t.h);
                var n, a, s, o, l;
                return t = (t *= 360) % 360 / 60, l = r * e, o = l * (1 - O(t % 2 - 1)), n = a = s = r - l, t = ~~t, n += [l, o, 0, 0, o, l][t], a += [o, l, l, o, 0, 0][t], s += [0, 0, o, l, l, o][t], wt(n, a, s, i)
            }, e.hsl2rgb = function(t, e, r, i) {
                this.is(t, "object") && "h" in t && "s" in t && "l" in t && (r = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || r > 1) && (t /= 360, e /= 100, r /= 100);
                var n, a, s, o, l;
                return t = (t *= 360) % 360 / 60, l = 2 * e * (r < .5 ? r : 1 - r), o = l * (1 - O(t % 2 - 1)), n = a = s = r - l / 2, t = ~~t, n += [l, o, 0, 0, o, l][t], a += [o, l, l, o, 0, 0][t], s += [0, 0, o, l, l, o][t], wt(n, a, s, i)
            }, e.rgb2hsb = function(t, e, r) {
                t = (r = _t(t, e, r))[0], e = r[1], r = r[2];
                var i, n, a, s;
                return a = D(t, e, r), s = a - q(t, e, r), i = 0 == s ? null : a == t ? (e - r) / s : a == e ? (r - t) / s + 2 : (t - e) / s + 4, i = (i + 360) % 6 * 60 / 360, n = 0 == s ? 0 : s / a, {
                    h: i,
                    s: n,
                    b: a,
                    toString: yt
                }
            }, e.rgb2hsl = function(t, e, r) {
                t = (r = _t(t, e, r))[0], e = r[1], r = r[2];
                var i, n, a, s, o, l;
                return s = D(t, e, r), o = q(t, e, r), l = s - o, i = 0 == l ? null : s == t ? (e - r) / l : s == e ? (r - t) / l + 2 : (t - e) / l + 4, i = (i + 360) % 6 * 60 / 360, a = (s + o) / 2, n = 0 == l ? 0 : a < .5 ? l / (2 * a) : l / (2 - 2 * a), {
                    h: i,
                    s: n,
                    l: a,
                    toString: mt
                }
            }, e._path2string = function() {
                return this.join(",").replace(nt, "$1")
            };
            e._preload = function(t, e) {
                var r = C.doc.createElement("img");
                r.style.cssText = "position:absolute;left:-9999em;top:-9999em", r.onload = function() {
                    e.call(this), this.onload = null, C.doc.body.removeChild(this)
                }, r.onerror = function() {
                    C.doc.body.removeChild(this)
                }, C.doc.body.appendChild(r), r.src = t
            };
            e.getRGB = n(function(t) {
                if (!t || (t = z(t)).indexOf("-") + 1) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: a
                };
                if ("none" == t) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    toString: a
                };
                !(it[B](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = xt(t));
                var r, i, n, s, o, l, h = t.match(X);
                return h ? (h[2] && (n = J(h[2].substring(5), 16), i = J(h[2].substring(3, 5), 16), r = J(h[2].substring(1, 3), 16)), h[3] && (n = J((o = h[3].charAt(3)) + o, 16), i = J((o = h[3].charAt(2)) + o, 16), r = J((o = h[3].charAt(1)) + o, 16)), h[4] && (l = h[4][P](rt), r = Q(l[0]), "%" == l[0].slice(-1) && (r *= 2.55), i = Q(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), n = Q(l[2]), "%" == l[2].slice(-1) && (n *= 2.55), "rgba" == h[1].toLowerCase().slice(0, 4) && (s = Q(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100)), h[5] ? (l = h[5][P](rt), r = Q(l[0]), "%" == l[0].slice(-1) && (r *= 2.55), i = Q(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), n = Q(l[2]), "%" == l[2].slice(-1) && (n *= 2.55), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (r /= 360), "hsba" == h[1].toLowerCase().slice(0, 4) && (s = Q(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100), e.hsb2rgb(r, i, n, s)) : h[6] ? (l = h[6][P](rt), r = Q(l[0]), "%" == l[0].slice(-1) && (r *= 2.55), i = Q(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), n = Q(l[2]), "%" == l[2].slice(-1) && (n *= 2.55), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (r /= 360), "hsla" == h[1].toLowerCase().slice(0, 4) && (s = Q(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100), e.hsl2rgb(r, i, n, s)) : (h = {
                    r: r,
                    g: i,
                    b: n,
                    toString: a
                }, h.hex = "#" + (16777216 | n | i << 8 | r << 16).toString(16).slice(1), e.is(s, "finite") && (h.opacity = s), h)) : {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: a
                }
            }, e), e.hsb = n(function(t, r, i) {
                return e.hsb2rgb(t, r, i).hex
            }), e.hsl = n(function(t, r, i) {
                return e.hsl2rgb(t, r, i).hex
            }), e.rgb = n(function(t, e, r) {
                function i(t) {
                    return t + .5 | 0
                }
                return "#" + (16777216 | i(r) | i(e) << 8 | i(t) << 16).toString(16).slice(1)
            }), e.getColor = function(t) {
                var e = this.getColor.start = this.getColor.start || {
                        h: 0,
                        s: 1,
                        b: t || .75
                    },
                    r = this.hsb2rgb(e.h, e.s, e.b);
                return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = {
                    h: 0,
                    s: 1,
                    b: e.b
                })), r.hex
            }, e.getColor.reset = function() {
                delete this.start
            }, e.parsePathString = function(t) {
                if (!t) return null;
                var r = kt(t);
                if (r.arr) return Ct(r.arr);
                var i = {
                        a: 7,
                        c: 6,
                        h: 1,
                        l: 2,
                        m: 2,
                        r: 4,
                        q: 4,
                        s: 4,
                        t: 2,
                        v: 1,
                        z: 0
                    },
                    n = [];
                return e.is(t, G) && e.is(t[0], G) && (n = Ct(t)), n.length || z(t).replace(at, function(t, e, r) {
                    var a = [],
                        s = e.toLowerCase();
                    if (r.replace(ot, function(t, e) {
                            e && a.push(+e)
                        }), "m" == s && a.length > 2 && (n.push([e][E](a.splice(0, 2))), s = "l", e = "m" == e ? "l" : "L"), "r" == s) n.push([e][E](a));
                    else
                        for (; a.length >= i[s] && (n.push([e][E](a.splice(0, i[s]))), i[s]););
                }), n.toString = e._path2string, r.arr = Ct(n), n
            }, e.parseTransformString = n(function(t) {
                if (!t) return null;
                var r = [];
                return e.is(t, G) && e.is(t[0], G) && (r = Ct(t)), r.length || z(t).replace(st, function(t, e, i) {
                    var n = [];
                    j.call(e);
                    i.replace(ot, function(t, e) {
                        e && n.push(+e)
                    }), r.push([e][E](n))
                }), r.toString = e._path2string, r
            });
            var kt = function(t) {
                var e = kt.ps = kt.ps || {};
                return e[t] ? e[t].sleep = 100 : e[t] = {
                    sleep: 100
                }, setTimeout(function() {
                    for (var r in e) e[B](r) && r != t && !--e[r].sleep && delete e[r]
                }), e[t]
            };
            e.findDotsAtSegment = function(t, e, r, i, n, a, s, o, l) {
                var h = 1 - l,
                    u = V(h, 3),
                    c = V(h, 2),
                    f = l * l,
                    p = f * l,
                    d = u * t + 3 * c * l * r + 3 * h * l * l * n + p * s,
                    g = u * e + 3 * c * l * i + 3 * h * l * l * a + p * o,
                    v = t + 2 * l * (r - t) + f * (n - 2 * r + t),
                    x = e + 2 * l * (i - e) + f * (a - 2 * i + e),
                    y = r + 2 * l * (n - r) + f * (s - 2 * n + r),
                    m = i + 2 * l * (a - i) + f * (o - 2 * a + i),
                    b = h * t + l * r,
                    _ = h * e + l * i,
                    w = h * n + l * s,
                    k = h * a + l * o,
                    B = 90 - 180 * I.atan2(v - y, x - m) / Y;
                return (v > y || x < m) && (B += 180), {
                    x: d,
                    y: g,
                    m: {
                        x: v,
                        y: x
                    },
                    n: {
                        x: y,
                        y: m
                    },
                    start: {
                        x: b,
                        y: _
                    },
                    end: {
                        x: w,
                        y: k
                    },
                    alpha: B
                }
            }, e.bezierBBox = function(t, r, i, n, a, s, o, l) {
                e.is(t, "array") || (t = [t, r, i, n, a, s, o, l]);
                var h = Lt.apply(null, t);
                return {
                    x: h.min.x,
                    y: h.min.y,
                    x2: h.max.x,
                    y2: h.max.y,
                    width: h.max.x - h.min.x,
                    height: h.max.y - h.min.y
                }
            }, e.isPointInsideBBox = function(t, e, r) {
                return e >= t.x && e <= t.x2 && r >= t.y && r <= t.y2
            }, e.isBBoxIntersect = function(t, r) {
                var i = e.isPointInsideBBox;
                return i(r, t.x, t.y) || i(r, t.x2, t.y) || i(r, t.x, t.y2) || i(r, t.x2, t.y2) || i(t, r.x, r.y) || i(t, r.x2, r.y) || i(t, r.x, r.y2) || i(t, r.x2, r.y2) || (t.x < r.x2 && t.x > r.x || r.x < t.x2 && r.x > t.x) && (t.y < r.y2 && t.y > r.y || r.y < t.y2 && r.y > t.y)
            }, e.pathIntersection = function(t, e) {
                return f(t, e)
            }, e.pathIntersectionNumber = function(t, e) {
                return f(t, e, 1)
            }, e.isPointInsidePath = function(t, r, i) {
                var n = e.pathBBox(t);
                return e.isPointInsideBBox(n, r, i) && f(t, [
                    ["M", r, i],
                    ["H", n.x2 + 10]
                ], 1) % 2 == 1
            }, e._removedFactory = function(e) {
                return function() {
                    t("raphael.log", null, "Raphaël: you are calling to method “" + e + "” of removed object", e)
                }
            };
            var Bt = e.pathBBox = function(t) {
                    var e = kt(t);
                    if (e.bbox) return r(e.bbox);
                    if (!t) return {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0,
                        x2: 0,
                        y2: 0
                    };
                    for (var i, n = 0, a = 0, s = [], o = [], l = 0, h = (t = zt(t)).length; l < h; l++)
                        if ("M" == (i = t[l])[0]) n = i[1], a = i[2], s.push(n), o.push(a);
                        else {
                            var u = Lt(n, a, i[1], i[2], i[3], i[4], i[5], i[6]);
                            s = s[E](u.min.x, u.max.x), o = o[E](u.min.y, u.max.y), n = i[5], a = i[6]
                        }
                    var c = q[T](0, s),
                        f = q[T](0, o),
                        p = D[T](0, s),
                        d = D[T](0, o),
                        g = p - c,
                        v = d - f,
                        x = {
                            x: c,
                            y: f,
                            x2: p,
                            y2: d,
                            width: g,
                            height: v,
                            cx: c + g / 2,
                            cy: f + v / 2
                        };
                    return e.bbox = r(x), x
                },
                Ct = function(t) {
                    var i = r(t);
                    return i.toString = e._path2string, i
                },
                St = e._pathToRelative = function(t) {
                    var r = kt(t);
                    if (r.rel) return Ct(r.rel);
                    e.is(t, G) && e.is(t && t[0], G) || (t = e.parsePathString(t));
                    var i = [],
                        n = 0,
                        a = 0,
                        s = 0,
                        o = 0,
                        l = 0;
                    "M" == t[0][0] && (s = n = t[0][1], o = a = t[0][2], l++, i.push(["M", n, a]));
                    for (var h = l, u = t.length; h < u; h++) {
                        var c = i[h] = [],
                            f = t[h];
                        if (f[0] != j.call(f[0])) switch (c[0] = j.call(f[0]), c[0]) {
                            case "a":
                                c[1] = f[1], c[2] = f[2], c[3] = f[3], c[4] = f[4], c[5] = f[5], c[6] = +(f[6] - n).toFixed(3), c[7] = +(f[7] - a).toFixed(3);
                                break;
                            case "v":
                                c[1] = +(f[1] - a).toFixed(3);
                                break;
                            case "m":
                                s = f[1], o = f[2];
                            default:
                                for (var p = 1, d = f.length; p < d; p++) c[p] = +(f[p] - (p % 2 ? n : a)).toFixed(3)
                        } else {
                            c = i[h] = [], "m" == f[0] && (s = f[1] + n, o = f[2] + a);
                            for (var g = 0, v = f.length; g < v; g++) i[h][g] = f[g]
                        }
                        var x = i[h].length;
                        switch (i[h][0]) {
                            case "z":
                                n = s, a = o;
                                break;
                            case "h":
                                n += +i[h][x - 1];
                                break;
                            case "v":
                                a += +i[h][x - 1];
                                break;
                            default:
                                n += +i[h][x - 2], a += +i[h][x - 1]
                        }
                    }
                    return i.toString = e._path2string, r.rel = Ct(i), i
                },
                At = e._pathToAbsolute = function(t) {
                    var r = kt(t);
                    if (r.abs) return Ct(r.abs);
                    if (e.is(t, G) && e.is(t && t[0], G) || (t = e.parsePathString(t)), !t || !t.length) return [
                        ["M", 0, 0]
                    ];
                    var i = [],
                        n = 0,
                        a = 0,
                        o = 0,
                        l = 0,
                        h = 0;
                    "M" == t[0][0] && (o = n = +t[0][1], l = a = +t[0][2], h++, i[0] = ["M", n, a]);
                    for (var u, c, f = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), p = h, d = t.length; p < d; p++) {
                        if (i.push(u = []), (c = t[p])[0] != K.call(c[0])) switch (u[0] = K.call(c[0]), u[0]) {
                                case "A":
                                    u[1] = c[1], u[2] = c[2], u[3] = c[3], u[4] = c[4], u[5] = c[5], u[6] = +(c[6] + n), u[7] = +(c[7] + a);
                                    break;
                                case "V":
                                    u[1] = +c[1] + a;
                                    break;
                                case "H":
                                    u[1] = +c[1] + n;
                                    break;
                                case "R":
                                    for (var g = [n, a][E](c.slice(1)), v = 2, x = g.length; v < x; v++) g[v] = +g[v] + n, g[++v] = +g[v] + a;
                                    i.pop(), i = i[E](s(g, f));
                                    break;
                                case "M":
                                    o = +c[1] + n, l = +c[2] + a;
                                default:
                                    for (v = 1, x = c.length; v < x; v++) u[v] = +c[v] + (v % 2 ? n : a)
                            } else if ("R" == c[0]) g = [n, a][E](c.slice(1)), i.pop(), i = i[E](s(g, f)), u = ["R"][E](c.slice(-2));
                            else
                                for (var y = 0, m = c.length; y < m; y++) u[y] = c[y];
                        switch (u[0]) {
                            case "Z":
                                n = o, a = l;
                                break;
                            case "H":
                                n = u[1];
                                break;
                            case "V":
                                a = u[1];
                                break;
                            case "M":
                                o = u[u.length - 2], l = u[u.length - 1];
                            default:
                                n = u[u.length - 2], a = u[u.length - 1]
                        }
                    }
                    return i.toString = e._path2string, r.abs = Ct(i), i
                },
                Tt = function(t, e, r, i) {
                    return [t, e, r, i, r, i]
                },
                Et = function(t, e, r, i, n, a) {
                    return [1 / 3 * t + 2 / 3 * r, 1 / 3 * e + 2 / 3 * i, 1 / 3 * n + 2 / 3 * r, 1 / 3 * a + 2 / 3 * i, n, a]
                },
                Mt = function(t, e, r, i, a, s, o, l, h, u) {
                    var c, f = 120 * Y / 180,
                        p = Y / 180 * (+a || 0),
                        d = [],
                        g = n(function(t, e, r) {
                            return {
                                x: t * I.cos(r) - e * I.sin(r),
                                y: t * I.sin(r) + e * I.cos(r)
                            }
                        });
                    if (u) B = u[0], C = u[1], w = u[2], k = u[3];
                    else {
                        t = (c = g(t, e, -p)).x, e = c.y, l = (c = g(l, h, -p)).x, h = c.y;
                        I.cos(Y / 180 * a), I.sin(Y / 180 * a);
                        var v = (t - l) / 2,
                            x = (e - h) / 2,
                            y = v * v / (r * r) + x * x / (i * i);
                        y > 1 && (r *= y = I.sqrt(y), i *= y);
                        var m = r * r,
                            b = i * i,
                            _ = (s == o ? -1 : 1) * I.sqrt(O((m * b - m * x * x - b * v * v) / (m * x * x + b * v * v))),
                            w = _ * r * x / i + (t + l) / 2,
                            k = _ * -i * v / r + (e + h) / 2,
                            B = I.asin(((e - k) / i).toFixed(9)),
                            C = I.asin(((h - k) / i).toFixed(9));
                        B = t < w ? Y - B : B, C = l < w ? Y - C : C, B < 0 && (B = 2 * Y + B), C < 0 && (C = 2 * Y + C), o && B > C && (B -= 2 * Y), !o && C > B && (C -= 2 * Y)
                    }
                    var S = C - B;
                    if (O(S) > f) {
                        var A = C,
                            T = l,
                            M = h;
                        C = B + f * (o && C > B ? 1 : -1), l = w + r * I.cos(C), h = k + i * I.sin(C), d = Mt(l, h, r, i, a, 0, o, T, M, [C, A, w, k])
                    }
                    S = C - B;
                    var N = I.cos(B),
                        L = I.sin(B),
                        z = I.cos(C),
                        F = I.sin(C),
                        R = I.tan(S / 4),
                        j = 4 / 3 * r * R,
                        D = 4 / 3 * i * R,
                        q = [t, e],
                        V = [t + j * L, e - D * N],
                        W = [l + j * F, h - D * z],
                        G = [l, h];
                    if (V[0] = 2 * q[0] - V[0], V[1] = 2 * q[1] - V[1], u) return [V, W, G][E](d);
                    for (var H = [], X = 0, U = (d = [V, W, G][E](d).join()[P](",")).length; X < U; X++) H[X] = X % 2 ? g(d[X - 1], d[X], p).y : g(d[X], d[X + 1], p).x;
                    return H
                },
                Nt = function(t, e, r, i, n, a, s, o, l) {
                    var h = 1 - l;
                    return {
                        x: V(h, 3) * t + 3 * V(h, 2) * l * r + 3 * h * l * l * n + V(l, 3) * s,
                        y: V(h, 3) * e + 3 * V(h, 2) * l * i + 3 * h * l * l * a + V(l, 3) * o
                    }
                },
                Lt = n(function(t, e, r, i, n, a, s, o) {
                    var l, h = n - 2 * r + t - (s - 2 * n + r),
                        u = 2 * (r - t) - 2 * (n - r),
                        c = t - r,
                        f = (-u + I.sqrt(u * u - 4 * h * c)) / 2 / h,
                        p = (-u - I.sqrt(u * u - 4 * h * c)) / 2 / h,
                        d = [e, o],
                        g = [t, s];
                    return O(f) > "1e12" && (f = .5), O(p) > "1e12" && (p = .5), f > 0 && f < 1 && (l = Nt(t, e, r, i, n, a, s, o, f), g.push(l.x), d.push(l.y)), p > 0 && p < 1 && (l = Nt(t, e, r, i, n, a, s, o, p), g.push(l.x), d.push(l.y)), h = a - 2 * i + e - (o - 2 * a + i), u = 2 * (i - e) - 2 * (a - i), c = e - i, f = (-u + I.sqrt(u * u - 4 * h * c)) / 2 / h, p = (-u - I.sqrt(u * u - 4 * h * c)) / 2 / h, O(f) > "1e12" && (f = .5), O(p) > "1e12" && (p = .5), f > 0 && f < 1 && (l = Nt(t, e, r, i, n, a, s, o, f), g.push(l.x), d.push(l.y)), p > 0 && p < 1 && (l = Nt(t, e, r, i, n, a, s, o, p), g.push(l.x), d.push(l.y)), {
                        min: {
                            x: q[T](0, g),
                            y: q[T](0, d)
                        },
                        max: {
                            x: D[T](0, g),
                            y: D[T](0, d)
                        }
                    }
                }),
                zt = e._path2curve = n(function(t, e) {
                    var r = !e && kt(t);
                    if (!e && r.curve) return Ct(r.curve);
                    for (var i = At(t), n = e && At(e), a = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null
                        }, s = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null
                        }, o = (function(t, e, r) {
                            var i, n, a = {
                                T: 1,
                                Q: 1
                            };
                            if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                            switch (!(t[0] in a) && (e.qx = e.qy = null), t[0]) {
                                case "M":
                                    e.X = t[1], e.Y = t[2];
                                    break;
                                case "A":
                                    t = ["C"][E](Mt[T](0, [e.x, e.y][E](t.slice(1))));
                                    break;
                                case "S":
                                    "C" == r || "S" == r ? (i = 2 * e.x - e.bx, n = 2 * e.y - e.by) : (i = e.x, n = e.y), t = ["C", i, n][E](t.slice(1));
                                    break;
                                case "T":
                                    "Q" == r || "T" == r ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"][E](Et(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                                    break;
                                case "Q":
                                    e.qx = t[1], e.qy = t[2], t = ["C"][E](Et(e.x, e.y, t[1], t[2], t[3], t[4]));
                                    break;
                                case "L":
                                    t = ["C"][E](Tt(e.x, e.y, t[1], t[2]));
                                    break;
                                case "H":
                                    t = ["C"][E](Tt(e.x, e.y, t[1], e.y));
                                    break;
                                case "V":
                                    t = ["C"][E](Tt(e.x, e.y, e.x, t[1]));
                                    break;
                                case "Z":
                                    t = ["C"][E](Tt(e.x, e.y, e.X, e.Y))
                            }
                            return t
                        }), l = function(t, e) {
                            if (t[e].length > 7) {
                                t[e].shift();
                                for (var r = t[e]; r.length;) u[e] = "A", n && (c[e] = "A"), t.splice(e++, 0, ["C"][E](r.splice(0, 6)));
                                t.splice(e, 1), g = D(i.length, n && n.length || 0)
                            }
                        }, h = function(t, e, r, a, s) {
                            t && e && "M" == t[s][0] && "M" != e[s][0] && (e.splice(s, 0, ["M", a.x, a.y]), r.bx = 0, r.by = 0, r.x = t[s][1], r.y = t[s][2], g = D(i.length, n && n.length || 0))
                        }, u = [], c = [], f = "", p = "", d = 0, g = D(i.length, n && n.length || 0); d < g; d++) {
                        i[d] && (f = i[d][0]), "C" != f && (u[d] = f, d && (p = u[d - 1])), i[d] = o(i[d], a, p), "A" != u[d] && "C" == f && (u[d] = "C"), l(i, d), n && (n[d] && (f = n[d][0]), "C" != f && (c[d] = f, d && (p = c[d - 1])), n[d] = o(n[d], s, p), "A" != c[d] && "C" == f && (c[d] = "C"), l(n, d)), h(i, n, a, s, d), h(n, i, s, a, d);
                        var v = i[d],
                            x = n && n[d],
                            y = v.length,
                            m = n && x.length;
                        a.x = v[y - 2], a.y = v[y - 1], a.bx = Q(v[y - 4]) || a.x, a.by = Q(v[y - 3]) || a.y, s.bx = n && (Q(x[m - 4]) || s.x), s.by = n && (Q(x[m - 3]) || s.y), s.x = n && x[m - 2], s.y = n && x[m - 1]
                    }
                    return n || (r.curve = Ct(i)), n ? [i, n] : i
                }, null, Ct),
                Pt = (e._parseDots = n(function(t) {
                    for (var r = [], i = 0, n = t.length; i < n; i++) {
                        var a = {},
                            s = t[i].match(/^([^:]*):?([\d\.]*)/);
                        if (a.color = e.getRGB(s[1]), a.color.error) return null;
                        a.opacity = a.color.opacity, a.color = a.color.hex, s[2] && (a.offset = s[2] + "%"), r.push(a)
                    }
                    for (i = 1, n = r.length - 1; i < n; i++)
                        if (!r[i].offset) {
                            for (var o = Q(r[i - 1].offset || 0), l = 0, h = i + 1; h < n; h++)
                                if (r[h].offset) {
                                    l = r[h].offset;
                                    break
                                }
                            l || (l = 100, h = n);
                            for (var u = ((l = Q(l)) - o) / (h - i + 1); i < h; i++) o += u, r[i].offset = o + "%"
                        }
                    return r
                }), e._tear = function(t, e) {
                    t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next)
                }),
                Ft = (e._tofront = function(t, e) {
                    e.top !== t && (Pt(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t)
                }, e._toback = function(t, e) {
                    e.bottom !== t && (Pt(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t)
                }, e._insertafter = function(t, e, r) {
                    Pt(t, r), e == r.top && (r.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t
                }, e._insertbefore = function(t, e, r) {
                    Pt(t, r), e == r.bottom && (r.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e
                }, e.toMatrix = function(t, e) {
                    var r = Bt(t),
                        i = {
                            _: {
                                transform: N
                            },
                            getBBox: function() {
                                return r
                            }
                        };
                    return Rt(i, e), i.matrix
                }),
                Rt = (e.transformPath = function(t, e) {
                    return dt(t, Ft(t, e))
                }, e._extractTransform = function(t, r) {
                    if (null == r) return t._.transform;
                    r = z(r).replace(/\.{3}|\u2026/g, t._.transform || N);
                    var i = e.parseTransformString(r),
                        n = 0,
                        a = 0,
                        s = 0,
                        o = 1,
                        l = 1,
                        h = t._,
                        u = new p;
                    if (h.transform = i || [], i)
                        for (var c = 0, f = i.length; c < f; c++) {
                            var d, g, v, x, y, m = i[c],
                                b = m.length,
                                _ = z(m[0]).toLowerCase(),
                                w = m[0] != _,
                                k = w ? u.invert() : 0;
                            "t" == _ && 3 == b ? w ? (d = k.x(0, 0), g = k.y(0, 0), v = k.x(m[1], m[2]), x = k.y(m[1], m[2]), u.translate(v - d, x - g)) : u.translate(m[1], m[2]) : "r" == _ ? 2 == b ? (y = y || t.getBBox(1), u.rotate(m[1], y.x + y.width / 2, y.y + y.height / 2), n += m[1]) : 4 == b && (w ? (v = k.x(m[2], m[3]), x = k.y(m[2], m[3]), u.rotate(m[1], v, x)) : u.rotate(m[1], m[2], m[3]), n += m[1]) : "s" == _ ? 2 == b || 3 == b ? (y = y || t.getBBox(1), u.scale(m[1], m[b - 1], y.x + y.width / 2, y.y + y.height / 2), o *= m[1], l *= m[b - 1]) : 5 == b && (w ? (v = k.x(m[3], m[4]), x = k.y(m[3], m[4]), u.scale(m[1], m[2], v, x)) : u.scale(m[1], m[2], m[3], m[4]), o *= m[1], l *= m[2]) : "m" == _ && 7 == b && u.add(m[1], m[2], m[3], m[4], m[5], m[6]), h.dirtyT = 1, t.matrix = u
                        }
                    t.matrix = u, h.sx = o, h.sy = l, h.deg = n, h.dx = a = u.e, h.dy = s = u.f, 1 == o && 1 == l && !n && h.bbox ? (h.bbox.x += +a, h.bbox.y += +s) : h.dirtyT = 1
                }),
                jt = function(t) {
                    var e = t[0];
                    switch (e.toLowerCase()) {
                        case "t":
                            return [e, 0, 0];
                        case "m":
                            return [e, 1, 0, 0, 1, 0, 0];
                        case "r":
                            return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                        case "s":
                            return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
                    }
                },
                It = e._equaliseTransform = function(t, r) {
                    r = z(r).replace(/\.{3}|\u2026/g, t), t = e.parseTransformString(t) || [], r = e.parseTransformString(r) || [];
                    for (var i, n, a, s, o = D(t.length, r.length), l = [], h = [], u = 0; u < o; u++) {
                        if (a = t[u] || jt(r[u]), s = r[u] || jt(a), a[0] != s[0] || "r" == a[0].toLowerCase() && (a[2] != s[2] || a[3] != s[3]) || "s" == a[0].toLowerCase() && (a[3] != s[3] || a[4] != s[4])) return;
                        for (l[u] = [], h[u] = [], i = 0, n = D(a.length, s.length); i < n; i++) i in a && (l[u][i] = a[i]), i in s && (h[u][i] = s[i])
                    }
                    return {
                        from: l,
                        to: h
                    }
                };
            e._getContainer = function(t, r, i, n) {
                    var a;
                    if (null != (a = null != n || e.is(t, "object") ? t : C.doc.getElementById(t))) return a.tagName ? null == r ? {
                        container: a,
                        width: a.style.pixelWidth || a.offsetWidth,
                        height: a.style.pixelHeight || a.offsetHeight
                    } : {
                        container: a,
                        width: r,
                        height: i
                    } : {
                        container: 1,
                        x: t,
                        y: r,
                        width: i,
                        height: n
                    }
                }, e.pathToRelative = St, e._engine = {}, e.path2curve = zt, e.matrix = function(t, e, r, i, n, a) {
                    return new p(t, e, r, i, n, a)
                },
                function(t) {
                    function r(t) {
                        return t[0] * t[0] + t[1] * t[1]
                    }

                    function i(t) {
                        var e = I.sqrt(r(t));
                        t[0] && (t[0] /= e), t[1] && (t[1] /= e)
                    }
                    t.add = function(t, e, r, i, n, a) {
                        var s, o, l, h, u = [
                                [],
                                [],
                                []
                            ],
                            c = [
                                [this.a, this.c, this.e],
                                [this.b, this.d, this.f],
                                [0, 0, 1]
                            ],
                            f = [
                                [t, r, n],
                                [e, i, a],
                                [0, 0, 1]
                            ];
                        for (t && t instanceof p && (f = [
                                [t.a, t.c, t.e],
                                [t.b, t.d, t.f],
                                [0, 0, 1]
                            ]), s = 0; s < 3; s++)
                            for (o = 0; o < 3; o++) {
                                for (h = 0, l = 0; l < 3; l++) h += c[s][l] * f[l][o];
                                u[s][o] = h
                            }
                        this.a = u[0][0], this.b = u[1][0], this.c = u[0][1], this.d = u[1][1], this.e = u[0][2], this.f = u[1][2]
                    }, t.invert = function() {
                        var t = this,
                            e = t.a * t.d - t.b * t.c;
                        return new p(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
                    }, t.clone = function() {
                        return new p(this.a, this.b, this.c, this.d, this.e, this.f)
                    }, t.translate = function(t, e) {
                        this.add(1, 0, 0, 1, t, e)
                    }, t.scale = function(t, e, r, i) {
                        null == e && (e = t), (r || i) && this.add(1, 0, 0, 1, r, i), this.add(t, 0, 0, e, 0, 0), (r || i) && this.add(1, 0, 0, 1, -r, -i)
                    }, t.rotate = function(t, r, i) {
                        t = e.rad(t), r = r || 0, i = i || 0;
                        var n = +I.cos(t).toFixed(9),
                            a = +I.sin(t).toFixed(9);
                        this.add(n, a, -a, n, r, i), this.add(1, 0, 0, 1, -r, -i)
                    }, t.x = function(t, e) {
                        return t * this.a + e * this.c + this.e
                    }, t.y = function(t, e) {
                        return t * this.b + e * this.d + this.f
                    }, t.get = function(t) {
                        return +this[z.fromCharCode(97 + t)].toFixed(4)
                    }, t.toString = function() {
                        return e.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
                    }, t.toFilter = function() {
                        return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
                    }, t.offset = function() {
                        return [this.e.toFixed(4), this.f.toFixed(4)]
                    }, t.split = function() {
                        var t = {};
                        t.dx = this.e, t.dy = this.f;
                        var n = [
                            [this.a, this.c],
                            [this.b, this.d]
                        ];
                        t.scalex = I.sqrt(r(n[0])), i(n[0]), t.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1], n[1] = [n[1][0] - n[0][0] * t.shear, n[1][1] - n[0][1] * t.shear], t.scaley = I.sqrt(r(n[1])), i(n[1]), t.shear /= t.scaley;
                        var a = -n[0][1],
                            s = n[1][1];
                        return s < 0 ? (t.rotate = e.deg(I.acos(s)), a < 0 && (t.rotate = 360 - t.rotate)) : t.rotate = e.deg(I.asin(a)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
                    }, t.toTransformString = function(t) {
                        var e = t || this[P]();
                        return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : N) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : N) + (e.rotate ? "r" + [e.rotate, 0, 0] : N)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
                    }
                }(p.prototype);
            for (var Dt = function() {
                    this.returnValue = !1
                }, qt = function() {
                    return this.originalEvent.preventDefault()
                }, Ot = function() {
                    this.cancelBubble = !0
                }, Vt = function() {
                    return this.originalEvent.stopPropagation()
                }, Yt = function(t) {
                    var e = C.doc.documentElement.scrollTop || C.doc.body.scrollTop,
                        r = C.doc.documentElement.scrollLeft || C.doc.body.scrollLeft;
                    return {
                        x: t.clientX + r,
                        y: t.clientY + e
                    }
                }, Wt = function() {
                    return C.doc.addEventListener ? function(t, e, r, i) {
                        var n = function(t) {
                            var e = Yt(t);
                            return r.call(i, t, e.x, e.y)
                        };
                        if (t.addEventListener(e, n, !1), M && R[e]) {
                            var a = function(e) {
                                for (var n = Yt(e), a = e, s = 0, o = e.targetTouches && e.targetTouches.length; s < o; s++)
                                    if (e.targetTouches[s].target == t) {
                                        (e = e.targetTouches[s]).originalEvent = a, e.preventDefault = qt, e.stopPropagation = Vt;
                                        break
                                    }
                                return r.call(i, e, n.x, n.y)
                            };
                            t.addEventListener(R[e], a, !1)
                        }
                        return function() {
                            return t.removeEventListener(e, n, !1), M && R[e] && t.removeEventListener(R[e], a, !1), !0
                        }
                    } : C.doc.attachEvent ? function(t, e, r, i) {
                        var n = function(t) {
                            t = t || C.win.event;
                            var e = C.doc.documentElement.scrollTop || C.doc.body.scrollTop,
                                n = C.doc.documentElement.scrollLeft || C.doc.body.scrollLeft,
                                a = t.clientX + n,
                                s = t.clientY + e;
                            return t.preventDefault = t.preventDefault || Dt, t.stopPropagation = t.stopPropagation || Ot, r.call(i, t, a, s)
                        };
                        return t.attachEvent("on" + e, n),
                            function() {
                                return t.detachEvent("on" + e, n), !0
                            }
                    } : void 0
                }(), Gt = [], Ht = function(e) {
                    for (var r, i = e.clientX, n = e.clientY, a = C.doc.documentElement.scrollTop || C.doc.body.scrollTop, s = C.doc.documentElement.scrollLeft || C.doc.body.scrollLeft, o = Gt.length; o--;) {
                        if (r = Gt[o], M && e.touches) {
                            for (var l, h = e.touches.length; h--;)
                                if ((l = e.touches[h]).identifier == r.el._drag.id) {
                                    i = l.clientX, n = l.clientY, (e.originalEvent ? e.originalEvent : e).preventDefault();
                                    break
                                }
                        } else e.preventDefault();
                        var u, c = r.el.node,
                            f = c.nextSibling,
                            p = c.parentNode,
                            d = c.style.display;
                        C.win.opera && p.removeChild(c), c.style.display = "none", u = r.el.paper.getElementByPoint(i, n), c.style.display = d, C.win.opera && (f ? p.insertBefore(c, f) : p.appendChild(c)), u && t("raphael.drag.over." + r.el.id, r.el, u), i += s, n += a, t("raphael.drag.move." + r.el.id, r.move_scope || r.el, i - r.el._drag.x, n - r.el._drag.y, i, n, e)
                    }
                }, Xt = function(r) {
                    e.unmousemove(Ht).unmouseup(Xt);
                    for (var i, n = Gt.length; n--;)(i = Gt[n]).el._drag = {}, t("raphael.drag.end." + i.el.id, i.end_scope || i.start_scope || i.move_scope || i.el, r);
                    Gt = []
                }, Ut = e.el = {}, $t = F.length; $t--;) ! function(t) {
                e[t] = Ut[t] = function(r, i) {
                    return e.is(r, "function") && (this.events = this.events || [], this.events.push({
                        name: t,
                        f: r,
                        unbind: Wt(this.shape || this.node || C.doc, t, r, i || this)
                    })), this
                }, e["un" + t] = Ut["un" + t] = function(r) {
                    for (var i = this.events || [], n = i.length; n--;) i[n].name != t || !e.is(r, "undefined") && i[n].f != r || (i[n].unbind(), i.splice(n, 1), !i.length && delete this.events);
                    return this
                }
            }(F[$t]);
            Ut.data = function(r, i) {
                var n = lt[this.id] = lt[this.id] || {};
                if (0 == arguments.length) return n;
                if (1 == arguments.length) {
                    if (e.is(r, "object")) {
                        for (var a in r) r[B](a) && this.data(a, r[a]);
                        return this
                    }
                    return t("raphael.data.get." + this.id, this, n[r], r), n[r]
                }
                return n[r] = i, t("raphael.data.set." + this.id, this, i, r), this
            }, Ut.removeData = function(t) {
                return null == t ? lt[this.id] = {} : lt[this.id] && delete lt[this.id][t], this
            }, Ut.getData = function() {
                return r(lt[this.id] || {})
            }, Ut.hover = function(t, e, r, i) {
                return this.mouseover(t, r).mouseout(e, i || r)
            }, Ut.unhover = function(t, e) {
                return this.unmouseover(t).unmouseout(e)
            };
            var Zt = [];
            Ut.drag = function(r, i, n, a, s, o) {
                function l(l) {
                    (l.originalEvent || l).preventDefault();
                    var h = l.clientX,
                        u = l.clientY,
                        c = C.doc.documentElement.scrollTop || C.doc.body.scrollTop,
                        f = C.doc.documentElement.scrollLeft || C.doc.body.scrollLeft;
                    if (this._drag.id = l.identifier, M && l.touches)
                        for (var p, d = l.touches.length; d--;)
                            if (p = l.touches[d], this._drag.id = p.identifier, p.identifier == this._drag.id) {
                                h = p.clientX, u = p.clientY;
                                break
                            }
                    this._drag.x = h + f, this._drag.y = u + c, !Gt.length && e.mousemove(Ht).mouseup(Xt), Gt.push({
                        el: this,
                        move_scope: a,
                        start_scope: s,
                        end_scope: o
                    }), i && t.on("raphael.drag.start." + this.id, i), r && t.on("raphael.drag.move." + this.id, r), n && t.on("raphael.drag.end." + this.id, n), t("raphael.drag.start." + this.id, s || a || this, l.clientX + f, l.clientY + c, l)
                }
                return this._drag = {}, Zt.push({
                    el: this,
                    start: l
                }), this.mousedown(l), this
            }, Ut.onDragOver = function(e) {
                e ? t.on("raphael.drag.over." + this.id, e) : t.unbind("raphael.drag.over." + this.id)
            }, Ut.undrag = function() {
                for (var r = Zt.length; r--;) Zt[r].el == this && (this.unmousedown(Zt[r].start), Zt.splice(r, 1), t.unbind("raphael.drag.*." + this.id));
                !Zt.length && e.unmousemove(Ht).unmouseup(Xt), Gt = []
            }, b.circle = function(t, r, i) {
                var n = e._engine.circle(this, t || 0, r || 0, i || 0);
                return this.__set__ && this.__set__.push(n), n
            }, b.rect = function(t, r, i, n, a) {
                var s = e._engine.rect(this, t || 0, r || 0, i || 0, n || 0, a || 0);
                return this.__set__ && this.__set__.push(s), s
            }, b.ellipse = function(t, r, i, n) {
                var a = e._engine.ellipse(this, t || 0, r || 0, i || 0, n || 0);
                return this.__set__ && this.__set__.push(a), a
            }, b.path = function(t) {
                t && !e.is(t, "string") && !e.is(t[0], G) && (t += N);
                var r = e._engine.path(e.format[T](e, arguments), this);
                return this.__set__ && this.__set__.push(r), r
            }, b.image = function(t, r, i, n, a) {
                var s = e._engine.image(this, t || "about:blank", r || 0, i || 0, n || 0, a || 0);
                return this.__set__ && this.__set__.push(s), s
            }, b.text = function(t, r, i) {
                var n = e._engine.text(this, t || 0, r || 0, z(i));
                return this.__set__ && this.__set__.push(n), n
            }, b.set = function(t) {
                !e.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
                var r = new le(t);
                return this.__set__ && this.__set__.push(r), r.paper = this, r.type = "set", r
            }, b.setStart = function(t) {
                this.__set__ = t || this.set()
            }, b.setFinish = function(t) {
                var e = this.__set__;
                return delete this.__set__, e
            }, b.getSize = function() {
                var t = this.canvas.parentNode;
                return {
                    width: t.offsetWidth,
                    height: t.offsetHeight
                }
            }, b.setSize = function(t, r) {
                return e._engine.setSize.call(this, t, r)
            }, b.setViewBox = function(t, r, i, n, a) {
                return e._engine.setViewBox.call(this, t, r, i, n, a)
            }, b.top = b.bottom = null, b.raphael = e;
            var Qt = function(t) {
                var e = t.getBoundingClientRect(),
                    r = t.ownerDocument,
                    i = r.body,
                    n = r.documentElement,
                    a = n.clientTop || i.clientTop || 0,
                    s = n.clientLeft || i.clientLeft || 0;
                return {
                    y: e.top + (C.win.pageYOffset || n.scrollTop || i.scrollTop) - a,
                    x: e.left + (C.win.pageXOffset || n.scrollLeft || i.scrollLeft) - s
                }
            };
            b.getElementByPoint = function(t, e) {
                var r = this,
                    i = r.canvas,
                    n = C.doc.elementFromPoint(t, e);
                if (C.win.opera && "svg" == n.tagName) {
                    var a = Qt(i),
                        s = i.createSVGRect();
                    s.x = t - a.x, s.y = e - a.y, s.width = s.height = 1;
                    var o = i.getIntersectionList(s, null);
                    o.length && (n = o[o.length - 1])
                }
                if (!n) return null;
                for (; n.parentNode && n != i.parentNode && !n.raphael;) n = n.parentNode;
                return n == r.canvas.parentNode && (n = i), n = n && n.raphael ? r.getById(n.raphaelid) : null
            }, b.getElementsByBBox = function(t) {
                var r = this.set();
                return this.forEach(function(i) {
                    e.isBBoxIntersect(i.getBBox(), t) && r.push(i)
                }), r
            }, b.getById = function(t) {
                for (var e = this.bottom; e;) {
                    if (e.id == t) return e;
                    e = e.next
                }
                return null
            }, b.forEach = function(t, e) {
                for (var r = this.bottom; r;) {
                    if (!1 === t.call(e, r)) return this;
                    r = r.next
                }
                return this
            }, b.getElementsByPoint = function(t, e) {
                var r = this.set();
                return this.forEach(function(i) {
                    i.isPointInside(t, e) && r.push(i)
                }), r
            }, Ut.isPointInside = function(t, r) {
                var i = this.realPath = pt[this.type](this);
                return this.attr("transform") && this.attr("transform").length && (i = e.transformPath(i, this.attr("transform"))), e.isPointInsidePath(i, t, r)
            }, Ut.getBBox = function(t) {
                if (this.removed) return {};
                var e = this._;
                return t ? (!e.dirty && e.bboxwt || (this.realPath = pt[this.type](this), e.bboxwt = Bt(this.realPath), e.bboxwt.toString = d, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && (!e.dirty && this.realPath || (e.bboxwt = 0, this.realPath = pt[this.type](this)), e.bbox = Bt(dt(this.realPath, this.matrix)), e.bbox.toString = d, e.dirty = e.dirtyT = 0), e.bbox)
            }, Ut.clone = function() {
                if (this.removed) return null;
                var t = this.paper[this.type]().attr(this.attr());
                return this.__set__ && this.__set__.push(t), t
            }, Ut.glow = function(t) {
                if ("text" == this.type) return null;
                var e = {
                        width: ((t = t || {}).width || 10) + (+this.attr("stroke-width") || 1),
                        fill: t.fill || !1,
                        opacity: null == t.opacity ? .5 : t.opacity,
                        offsetx: t.offsetx || 0,
                        offsety: t.offsety || 0,
                        color: t.color || "#000"
                    },
                    r = e.width / 2,
                    i = this.paper,
                    n = i.set(),
                    a = this.realPath || pt[this.type](this);
                a = this.matrix ? dt(a, this.matrix) : a;
                for (var s = 1; s < r + 1; s++) n.push(i.path(a).attr({
                    stroke: e.color,
                    fill: e.fill ? e.color : "none",
                    "stroke-linejoin": "round",
                    "stroke-linecap": "round",
                    "stroke-width": +(e.width / r * s).toFixed(3),
                    opacity: +(e.opacity / r).toFixed(3)
                }));
                return n.insertBefore(this).translate(e.offsetx, e.offsety)
            };
            var Jt = function(t, r, i, n, a, s, o, u, c) {
                    return null == c ? l(t, r, i, n, a, s, o, u) : e.findDotsAtSegment(t, r, i, n, a, s, o, u, h(t, r, i, n, a, s, o, u, c))
                },
                Kt = function(t, r) {
                    return function(i, n, a) {
                        for (var s, o, l, h, u, c = "", f = {}, p = 0, d = 0, g = (i = zt(i)).length; d < g; d++) {
                            if ("M" == (l = i[d])[0]) s = +l[1], o = +l[2];
                            else {
                                if (h = Jt(s, o, l[1], l[2], l[3], l[4], l[5], l[6]), p + h > n) {
                                    if (r && !f.start) {
                                        if (u = Jt(s, o, l[1], l[2], l[3], l[4], l[5], l[6], n - p), c += ["C" + u.start.x, u.start.y, u.m.x, u.m.y, u.x, u.y], a) return c;
                                        f.start = c, c = ["M" + u.x, u.y + "C" + u.n.x, u.n.y, u.end.x, u.end.y, l[5], l[6]].join(), p += h, s = +l[5], o = +l[6];
                                        continue
                                    }
                                    if (!t && !r) return u = Jt(s, o, l[1], l[2], l[3], l[4], l[5], l[6], n - p), {
                                        x: u.x,
                                        y: u.y,
                                        alpha: u.alpha
                                    }
                                }
                                p += h, s = +l[5], o = +l[6]
                            }
                            c += l.shift() + l
                        }
                        return f.end = c, (u = t ? p : r ? f : e.findDotsAtSegment(s, o, l[0], l[1], l[2], l[3], l[4], l[5], 1)).alpha && (u = {
                            x: u.x,
                            y: u.y,
                            alpha: u.alpha
                        }), u
                    }
                },
                te = Kt(1),
                ee = Kt(),
                re = Kt(0, 1);
            e.getTotalLength = te, e.getPointAtLength = ee, e.getSubpath = function(t, e, r) {
                if (this.getTotalLength(t) - r < 1e-6) return re(t, e).end;
                var i = re(t, r, 1);
                return e ? re(i, e).end : i
            }, Ut.getTotalLength = function() {
                var t = this.getPath();
                if (t) return this.node.getTotalLength ? this.node.getTotalLength() : te(t)
            }, Ut.getPointAtLength = function(t) {
                var e = this.getPath();
                if (e) return ee(e, t)
            }, Ut.getPath = function() {
                var t, r = e._getPath[this.type];
                if ("text" != this.type && "set" != this.type) return r && (t = r(this)), t
            }, Ut.getSubpath = function(t, r) {
                var i = this.getPath();
                if (i) return e.getSubpath(i, t, r)
            };
            var ie = e.easing_formulas = {
                linear: function(t) {
                    return t
                },
                "<": function(t) {
                    return V(t, 1.7)
                },
                ">": function(t) {
                    return V(t, .48)
                },
                "<>": function(t) {
                    var e = .48 - t / 1.04,
                        r = I.sqrt(.1734 + e * e),
                        i = r - e,
                        n = -r - e,
                        a = V(O(i), 1 / 3) * (i < 0 ? -1 : 1) + V(O(n), 1 / 3) * (n < 0 ? -1 : 1) + .5;
                    return 3 * (1 - a) * a * a + a * a * a
                },
                backIn: function(t) {
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                },
                backOut: function(t) {
                    var e = 1.70158;
                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                },
                elastic: function(t) {
                    return t == !!t ? t : V(2, -10 * t) * I.sin(2 * Y * (t - .075) / .3) + 1
                },
                bounce: function(t) {
                    var e = 7.5625,
                        r = 2.75;
                    return t < 1 / r ? e * t * t : t < 2 / r ? e * (t -= 1.5 / r) * t + .75 : t < 2.5 / r ? e * (t -= 2.25 / r) * t + .9375 : e * (t -= 2.625 / r) * t + .984375
                }
            };
            ie.easeIn = ie["ease-in"] = ie["<"], ie.easeOut = ie["ease-out"] = ie[">"], ie.easeInOut = ie["ease-in-out"] = ie["<>"], ie["back-in"] = ie.backIn, ie["back-out"] = ie.backOut;
            var ne = [],
                ae = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    setTimeout(t, 16)
                },
                se = function() {
                    for (var r = +new Date, i = 0; i < ne.length; i++) {
                        var n = ne[i];
                        if (!n.el.removed && !n.paused) {
                            var a, s, o = r - n.start,
                                l = n.ms,
                                h = n.easing,
                                u = n.from,
                                c = n.diff,
                                f = n.to,
                                p = (n.t, n.el),
                                d = {},
                                g = {};
                            if (n.initstatus ? (o = (n.initstatus * n.anim.top - n.prev) / (n.percent - n.prev) * l, n.status = n.initstatus, delete n.initstatus, n.stop && ne.splice(i--, 1)) : n.status = (n.prev + (n.percent - n.prev) * (o / l)) / n.anim.top, !(o < 0))
                                if (o < l) {
                                    var v = h(o / l);
                                    for (var y in u)
                                        if (u[B](y)) {
                                            switch (et[y]) {
                                                case W:
                                                    a = +u[y] + v * l * c[y];
                                                    break;
                                                case "colour":
                                                    a = "rgb(" + [oe(Z(u[y].r + v * l * c[y].r)), oe(Z(u[y].g + v * l * c[y].g)), oe(Z(u[y].b + v * l * c[y].b))].join(",") + ")";
                                                    break;
                                                case "path":
                                                    a = [];
                                                    for (var m = 0, b = u[y].length; m < b; m++) {
                                                        a[m] = [u[y][m][0]];
                                                        for (var _ = 1, w = u[y][m].length; _ < w; _++) a[m][_] = +u[y][m][_] + v * l * c[y][m][_];
                                                        a[m] = a[m].join(L)
                                                    }
                                                    a = a.join(L);
                                                    break;
                                                case "transform":
                                                    if (c[y].real)
                                                        for (a = [], m = 0, b = u[y].length; m < b; m++)
                                                            for (a[m] = [u[y][m][0]], _ = 1, w = u[y][m].length; _ < w; _++) a[m][_] = u[y][m][_] + v * l * c[y][m][_];
                                                    else {
                                                        var k = function(t) {
                                                            return +u[y][t] + v * l * c[y][t]
                                                        };
                                                        a = [
                                                            ["m", k(0), k(1), k(2), k(3), k(4), k(5)]
                                                        ]
                                                    }
                                                    break;
                                                case "csv":
                                                    if ("clip-rect" == y)
                                                        for (a = [], m = 4; m--;) a[m] = +u[y][m] + v * l * c[y][m];
                                                    break;
                                                default:
                                                    var C = [][E](u[y]);
                                                    for (a = [], m = p.paper.customAttributes[y].length; m--;) a[m] = +C[m] + v * l * c[y][m]
                                            }
                                            d[y] = a
                                        }
                                    p.attr(d),
                                        function(e, r, i) {
                                            setTimeout(function() {
                                                t("raphael.anim.frame." + e, r, i)
                                            })
                                        }(p.id, p, n.anim)
                                } else {
                                    if (function(r, i, n) {
                                            setTimeout(function() {
                                                t("raphael.anim.frame." + i.id, i, n), t("raphael.anim.finish." + i.id, i, n), e.is(r, "function") && r.call(i)
                                            })
                                        }(n.callback, p, n.anim), p.attr(f), ne.splice(i--, 1), n.repeat > 1 && !n.next) {
                                        for (s in f) f[B](s) && (g[s] = n.totalOrigin[s]);
                                        n.el.attr(g), x(n.anim, n.el, n.anim.percents[0], null, n.totalOrigin, n.repeat - 1)
                                    }
                                    n.next && !n.stop && x(n.anim, n.el, n.next, null, n.totalOrigin, n.repeat)
                                }
                        }
                    }
                    ne.length && ae(se)
                },
                oe = function(t) {
                    return t > 255 ? 255 : t < 0 ? 0 : t
                };
            Ut.animateWith = function(t, r, i, n, a, s) {
                var o = this;
                if (o.removed) return s && s.call(o), o;
                var l = i instanceof v ? i : e.animation(i, n, a, s);
                x(l, o, l.percents[0], null, o.attr());
                for (var h = 0, u = ne.length; h < u; h++)
                    if (ne[h].anim == r && ne[h].el == t) {
                        ne[u - 1].start = ne[h].start;
                        break
                    }
                return o
            }, Ut.onAnimation = function(e) {
                return e ? t.on("raphael.anim.frame." + this.id, e) : t.unbind("raphael.anim.frame." + this.id), this
            }, v.prototype.delay = function(t) {
                var e = new v(this.anim, this.ms);
                return e.times = this.times, e.del = +t || 0, e
            }, v.prototype.repeat = function(t) {
                var e = new v(this.anim, this.ms);
                return e.del = this.del, e.times = I.floor(D(t, 0)) || 1, e
            }, e.animation = function(t, r, i, n) {
                if (t instanceof v) return t;
                !e.is(i, "function") && i || (n = n || i || null, i = null), t = Object(t), r = +r || 0;
                var a, s, o = {};
                for (s in t) t[B](s) && Q(s) != s && Q(s) + "%" != s && (a = !0, o[s] = t[s]);
                if (a) return i && (o.easing = i), n && (o.callback = n), new v({
                    100: o
                }, r);
                if (n) {
                    var l = 0;
                    for (var h in t) {
                        var u = J(h);
                        t[B](h) && u > l && (l = u)
                    }!t[l += "%"].callback && (t[l].callback = n)
                }
                return new v(t, r)
            }, Ut.animate = function(t, r, i, n) {
                var a = this;
                if (a.removed) return n && n.call(a), a;
                var s = t instanceof v ? t : e.animation(t, r, i, n);
                return x(s, a, s.percents[0], null, a.attr()), a
            }, Ut.setTime = function(t, e) {
                return t && null != e && this.status(t, q(e, t.ms) / t.ms), this
            }, Ut.status = function(t, e) {
                var r, i, n = [],
                    a = 0;
                if (null != e) return x(t, this, -1, q(e, 1)), this;
                for (r = ne.length; a < r; a++)
                    if ((i = ne[a]).el.id == this.id && (!t || i.anim == t)) {
                        if (t) return i.status;
                        n.push({
                            anim: i.anim,
                            status: i.status
                        })
                    }
                return t ? 0 : n
            }, Ut.pause = function(e) {
                for (var r = 0; r < ne.length; r++) ne[r].el.id != this.id || e && ne[r].anim != e || !1 !== t("raphael.anim.pause." + this.id, this, ne[r].anim) && (ne[r].paused = !0);
                return this
            }, Ut.resume = function(e) {
                for (var r = 0; r < ne.length; r++)
                    if (ne[r].el.id == this.id && (!e || ne[r].anim == e)) {
                        var i = ne[r];
                        !1 !== t("raphael.anim.resume." + this.id, this, i.anim) && (delete i.paused, this.status(i.anim, i.status))
                    }
                return this
            }, Ut.stop = function(e) {
                for (var r = 0; r < ne.length; r++) ne[r].el.id != this.id || e && ne[r].anim != e || !1 !== t("raphael.anim.stop." + this.id, this, ne[r].anim) && ne.splice(r--, 1);
                return this
            }, t.on("raphael.remove", y), t.on("raphael.clear", y), Ut.toString = function() {
                return "Raphaël’s object"
            };
            var le = function(t) {
                    if (this.items = [], this.length = 0, this.type = "set", t)
                        for (var e = 0, r = t.length; e < r; e++) !t[e] || t[e].constructor != Ut.constructor && t[e].constructor != le || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
                },
                he = le.prototype;
            he.push = function() {
                for (var t, e, r = 0, i = arguments.length; r < i; r++) !(t = arguments[r]) || t.constructor != Ut.constructor && t.constructor != le || (this[e = this.items.length] = this.items[e] = t, this.length++);
                return this
            }, he.pop = function() {
                return this.length && delete this[this.length--], this.items.pop()
            }, he.forEach = function(t, e) {
                for (var r = 0, i = this.items.length; r < i; r++)
                    if (!1 === t.call(e, this.items[r], r)) return this;
                return this
            };
            for (var ue in Ut) Ut[B](ue) && (he[ue] = function(t) {
                return function() {
                    var e = arguments;
                    return this.forEach(function(r) {
                        r[t][T](r, e)
                    })
                }
            }(ue));
            return he.attr = function(t, r) {
                    if (t && e.is(t, G) && e.is(t[0], "object"))
                        for (var i = 0, n = t.length; i < n; i++) this.items[i].attr(t[i]);
                    else
                        for (var a = 0, s = this.items.length; a < s; a++) this.items[a].attr(t, r);
                    return this
                }, he.clear = function() {
                    for (; this.length;) this.pop()
                }, he.splice = function(t, e, r) {
                    t = t < 0 ? D(this.length + t, 0) : t, e = D(0, q(this.length - t, e));
                    var i, n = [],
                        a = [],
                        s = [];
                    for (i = 2; i < arguments.length; i++) s.push(arguments[i]);
                    for (i = 0; i < e; i++) a.push(this[t + i]);
                    for (; i < this.length - t; i++) n.push(this[t + i]);
                    var o = s.length;
                    for (i = 0; i < o + n.length; i++) this.items[t + i] = this[t + i] = i < o ? s[i] : n[i - o];
                    for (i = this.items.length = this.length -= e - o; this[i];) delete this[i++];
                    return new le(a)
                }, he.exclude = function(t) {
                    for (var e = 0, r = this.length; e < r; e++)
                        if (this[e] == t) return this.splice(e, 1), !0
                }, he.animate = function(t, r, i, n) {
                    (e.is(i, "function") || !i) && (n = i || null);
                    var a, s, o = this.items.length,
                        l = o,
                        h = this;
                    if (!o) return this;
                    n && (s = function() {
                        !--o && n.call(h)
                    }), i = e.is(i, "string") ? i : s;
                    var u = e.animation(t, r, i, s);
                    for (a = this.items[--l].animate(u); l--;) this.items[l] && !this.items[l].removed && this.items[l].animateWith(a, u, u), this.items[l] && !this.items[l].removed || o--;
                    return this
                }, he.insertAfter = function(t) {
                    for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
                    return this
                }, he.getBBox = function() {
                    for (var t = [], e = [], r = [], i = [], n = this.items.length; n--;)
                        if (!this.items[n].removed) {
                            var a = this.items[n].getBBox();
                            t.push(a.x), e.push(a.y), r.push(a.x + a.width), i.push(a.y + a.height)
                        }
                    return t = q[T](0, t), e = q[T](0, e), r = D[T](0, r), i = D[T](0, i), {
                        x: t,
                        y: e,
                        x2: r,
                        y2: i,
                        width: r - t,
                        height: i - e
                    }
                }, he.clone = function(t) {
                    t = this.paper.set();
                    for (var e = 0, r = this.items.length; e < r; e++) t.push(this.items[e].clone());
                    return t
                }, he.toString = function() {
                    return "Raphaël‘s set"
                }, he.glow = function(t) {
                    var e = this.paper.set();
                    return this.forEach(function(r, i) {
                        var n = r.glow(t);
                        null != n && n.forEach(function(t, r) {
                            e.push(t)
                        })
                    }), e
                }, he.isPointInside = function(t, e) {
                    var r = !1;
                    return this.forEach(function(i) {
                        if (i.isPointInside(t, e)) return r = !0, !1
                    }), r
                }, e.registerFont = function(t) {
                    if (!t.face) return t;
                    this.fonts = this.fonts || {};
                    var e = {
                            w: t.w,
                            face: {},
                            glyphs: {}
                        },
                        r = t.face["font-family"];
                    for (var i in t.face) t.face[B](i) && (e.face[i] = t.face[i]);
                    if (this.fonts[r] ? this.fonts[r].push(e) : this.fonts[r] = [e], !t.svg) {
                        e.face["units-per-em"] = J(t.face["units-per-em"], 10);
                        for (var n in t.glyphs)
                            if (t.glyphs[B](n)) {
                                var a = t.glyphs[n];
                                if (e.glyphs[n] = {
                                        w: a.w,
                                        k: {},
                                        d: a.d && "M" + a.d.replace(/[mlcxtrv]/g, function(t) {
                                            return {
                                                l: "L",
                                                c: "C",
                                                x: "z",
                                                t: "m",
                                                r: "l",
                                                v: "c"
                                            }[t] || "M"
                                        }) + "z"
                                    }, a.k)
                                    for (var s in a.k) a[B](s) && (e.glyphs[n].k[s] = a.k[s])
                            }
                    }
                    return t
                }, b.getFont = function(t, r, i, n) {
                    if (n = n || "normal", i = i || "normal", r = +r || {
                            normal: 400,
                            bold: 700,
                            lighter: 300,
                            bolder: 800
                        }[r] || 400, e.fonts) {
                        var a = e.fonts[t];
                        if (!a) {
                            var s = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, N) + "(\\s|$)", "i");
                            for (var o in e.fonts)
                                if (e.fonts[B](o) && s.test(o)) {
                                    a = e.fonts[o];
                                    break
                                }
                        }
                        var l;
                        if (a)
                            for (var h = 0, u = a.length; h < u && ((l = a[h]).face["font-weight"] != r || l.face["font-style"] != i && l.face["font-style"] || l.face["font-stretch"] != n); h++);
                        return l
                    }
                }, b.print = function(t, r, i, n, a, s, o, l) {
                    s = s || "middle", o = D(q(o || 0, 1), -1), l = D(q(l || 1, 3), 1);
                    var h, u = z(i)[P](N),
                        c = 0,
                        f = 0,
                        p = N;
                    if (e.is(n, "string") && (n = this.getFont(n)), n) {
                        h = (a || 16) / n.face["units-per-em"];
                        for (var d = n.face.bbox[P](_), g = +d[0], v = d[3] - d[1], x = 0, y = +d[1] + ("baseline" == s ? v + +n.face.descent : v / 2), m = 0, b = u.length; m < b; m++) {
                            if ("\n" == u[m]) c = 0, k = 0, f = 0, x += v * l;
                            else {
                                var w = f && n.glyphs[u[m - 1]] || {},
                                    k = n.glyphs[u[m]];
                                c += f ? (w.w || n.w) + (w.k && w.k[u[m]] || 0) + n.w * o : 0, f = 1
                            }
                            k && k.d && (p += e.transformPath(k.d, ["t", c * h, x * h, "s", h, h, g, y, "t", (t - g) / h, (r - y) / h]))
                        }
                    }
                    return this.path(p).attr({
                        fill: "#000",
                        stroke: "none"
                    })
                }, b.add = function(t) {
                    if (e.is(t, "array"))
                        for (var r, i = this.set(), n = 0, a = t.length; n < a; n++) r = t[n] || {}, w[B](r.type) && i.push(this[r.type]().attr(r));
                    return i
                }, e.format = function(t, r) {
                    var i = e.is(r, G) ? [0][E](r) : arguments;
                    return t && e.is(t, "string") && i.length - 1 && (t = t.replace(k, function(t, e) {
                        return null == i[++e] ? N : i[e]
                    })), t || N
                }, e.fullfill = function() {
                    var t = /\{([^\}]+)\}/g,
                        e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                        r = function(t, r, i) {
                            var n = i;
                            return r.replace(e, function(t, e, r, i, a) {
                                e = e || i, n && (e in n && (n = n[e]), "function" == typeof n && a && (n = n()))
                            }), n = (null == n || n == i ? t : n) + ""
                        };
                    return function(e, i) {
                        return String(e).replace(t, function(t, e) {
                            return r(t, e, i)
                        })
                    }
                }(), e.ninja = function() {
                    if (S.was) C.win.Raphael = S.is;
                    else {
                        window.Raphael = void 0;
                        try {
                            delete window.Raphael
                        } catch (t) {}
                    }
                    return e
                }, e.st = he, t.on("raphael.DOMload", function() {
                    m = !0
                }),
                function(t, r, i) {
                    function n() {
                        /in/.test(t.readyState) ? setTimeout(n, 9) : e.eve("raphael.DOMload")
                    }
                    null == t.readyState && t.addEventListener && (t.addEventListener("DOMContentLoaded", i = function() {
                        t.removeEventListener("DOMContentLoaded", i, !1), t.readyState = "complete"
                    }, !1), t.readyState = "loading"), n()
                }(document), e
        }.apply(e, i)) && (t.exports = n)
    }, function(t, e, r) {
        var i, n;
        ! function(r) {
            var a, s, o = "hasOwnProperty",
                l = /[\.\/]/,
                h = /\s*,\s*/,
                u = function(t, e) {
                    return t - e
                },
                c = {
                    n: {}
                },
                f = function() {
                    for (var t = 0, e = this.length; t < e; t++)
                        if (void 0 !== this[t]) return this[t]
                },
                p = function() {
                    for (var t = this.length; --t;)
                        if (void 0 !== this[t]) return this[t]
                },
                d = Object.prototype.toString,
                g = String,
                v = Array.isArray || function(t) {
                    return t instanceof Array || "[object Array]" == d.call(t)
                };
            eve = function(t, e) {
                var r, i = s,
                    n = Array.prototype.slice.call(arguments, 2),
                    o = eve.listeners(t),
                    l = 0,
                    h = [],
                    c = {},
                    d = [],
                    g = a;
                d.firstDefined = f, d.lastDefined = p, a = t, s = 0;
                for (var v = 0, x = o.length; v < x; v++) "zIndex" in o[v] && (h.push(o[v].zIndex), o[v].zIndex < 0 && (c[o[v].zIndex] = o[v]));
                for (h.sort(u); h[l] < 0;)
                    if (r = c[h[l++]], d.push(r.apply(e, n)), s) return s = i, d;
                for (v = 0; v < x; v++)
                    if ("zIndex" in (r = o[v]))
                        if (r.zIndex == h[l]) {
                            if (d.push(r.apply(e, n)), s) break;
                            do {
                                if (l++, (r = c[h[l]]) && d.push(r.apply(e, n)), s) break
                            } while (r)
                        } else c[r.zIndex] = r;
                else if (d.push(r.apply(e, n)), s) break;
                return s = i, a = g, d
            }, eve._events = c, eve.listeners = function(t) {
                var e, r, i, n, a, s, o, h, u = v(t) ? t : t.split(l),
                    f = c,
                    p = [f],
                    d = [];
                for (n = 0, a = u.length; n < a; n++) {
                    for (h = [], s = 0, o = p.length; s < o; s++)
                        for (r = [(f = p[s].n)[u[n]], f["*"]], i = 2; i--;)(e = r[i]) && (h.push(e), d = d.concat(e.f || []));
                    p = h
                }
                return d
            }, eve.separator = function(t) {
                t ? (t = "[" + (t = g(t).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]", l = new RegExp(t)) : l = /[\.\/]/
            }, eve.on = function(t, e) {
                if ("function" != typeof e) return function() {};
                for (var r = v(t) ? v(t[0]) ? t : [t] : g(t).split(h), i = 0, n = r.length; i < n; i++) ! function(t) {
                    for (var r, i = v(t) ? t : g(t).split(l), n = c, a = 0, s = i.length; a < s; a++) n = (n = n.n).hasOwnProperty(i[a]) && n[i[a]] || (n[i[a]] = {
                        n: {}
                    });
                    for (n.f = n.f || [], a = 0, s = n.f.length; a < s; a++)
                        if (n.f[a] == e) {
                            r = !0;
                            break
                        }!r && n.f.push(e)
                }(r[i]);
                return function(t) {
                    +t == +t && (e.zIndex = +t)
                }
            }, eve.f = function(t) {
                var e = [].slice.call(arguments, 1);
                return function() {
                    eve.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
                }
            }, eve.stop = function() {
                s = 1
            }, eve.nt = function(t) {
                var e = v(a) ? a.join(".") : a;
                return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
            }, eve.nts = function() {
                return v(a) ? a : a.split(l)
            }, eve.off = eve.unbind = function(t, e) {
                if (t) {
                    var r = v(t) ? v(t[0]) ? t : [t] : g(t).split(h);
                    if (r.length > 1)
                        for (var i = 0, n = r.length; i < n; i++) eve.off(r[i], e);
                    else {
                        r = v(t) ? t : g(t).split(l);
                        var a, s, u, f, p, d = [c];
                        for (i = 0, n = r.length; i < n; i++)
                            for (f = 0; f < d.length; f += u.length - 2) {
                                if (u = [f, 1], a = d[f].n, "*" != r[i]) a[r[i]] && u.push(a[r[i]]);
                                else
                                    for (s in a) a[o](s) && u.push(a[s]);
                                d.splice.apply(d, u)
                            }
                        for (i = 0, n = d.length; i < n; i++)
                            for (a = d[i]; a.n;) {
                                if (e) {
                                    if (a.f) {
                                        for (f = 0, p = a.f.length; f < p; f++)
                                            if (a.f[f] == e) {
                                                a.f.splice(f, 1);
                                                break
                                            }!a.f.length && delete a.f
                                    }
                                    for (s in a.n)
                                        if (a.n[o](s) && a.n[s].f) {
                                            var x = a.n[s].f;
                                            for (f = 0, p = x.length; f < p; f++)
                                                if (x[f] == e) {
                                                    x.splice(f, 1);
                                                    break
                                                }!x.length && delete a.n[s].f
                                        }
                                } else {
                                    delete a.f;
                                    for (s in a.n) a.n[o](s) && a.n[s].f && delete a.n[s].f
                                }
                                a = a.n
                            }
                    }
                } else eve._events = c = {
                    n: {}
                }
            }, eve.once = function(t, e) {
                var r = function() {
                    return eve.off(t, r), e.apply(this, arguments)
                };
                return eve.on(t, r)
            }, eve.version = "0.5.0", eve.toString = function() {
                return "You are running Eve 0.5.0"
            }, void 0 !== t && t.exports ? t.exports = eve : (i = [], void 0 !== (n = function() {
                return eve
            }.apply(e, i)) && (t.exports = n))
        }()
    }, function(t, e, r) {
        var i, n;
        i = [r(1)], void 0 !== (n = function(t) {
            if (!t || t.svg) {
                var e = "hasOwnProperty",
                    r = String,
                    i = parseFloat,
                    n = parseInt,
                    a = Math,
                    s = a.max,
                    o = a.abs,
                    l = a.pow,
                    h = /[, ]+/,
                    u = t.eve,
                    c = "",
                    f = " ",
                    p = "http://www.w3.org/1999/xlink",
                    d = {
                        block: "M5,0 0,2.5 5,5z",
                        classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                        diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                        open: "M6,1 1,3.5 6,6",
                        oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                    },
                    g = {};
                t.toString = function() {
                    return "Your browser supports SVG.\nYou are running Raphaël " + this.version
                };
                var v = function(i, n) {
                        if (n) {
                            "string" == typeof i && (i = v(i));
                            for (var a in n) n[e](a) && ("xlink:" == a.substring(0, 6) ? i.setAttributeNS(p, a.substring(6), r(n[a])) : i.setAttribute(a, r(n[a])))
                        } else(i = t._g.doc.createElementNS("http://www.w3.org/2000/svg", i)).style && (i.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                        return i
                    },
                    x = function(e, n) {
                        var h = "linear",
                            u = e.id + n,
                            f = .5,
                            p = .5,
                            d = e.node,
                            g = e.paper,
                            x = d.style,
                            y = t._g.doc.getElementById(u);
                        if (!y) {
                            if (n = r(n).replace(t._radial_gradient, function(t, e, r) {
                                    if (h = "radial", e && r) {
                                        f = i(e);
                                        var n = 2 * ((p = i(r)) > .5) - 1;
                                        l(f - .5, 2) + l(p - .5, 2) > .25 && (p = a.sqrt(.25 - l(f - .5, 2)) * n + .5) && .5 != p && (p = p.toFixed(5) - 1e-5 * n)
                                    }
                                    return c
                                }), n = n.split(/\s*\-\s*/), "linear" == h) {
                                var b = n.shift();
                                if (b = -i(b), isNaN(b)) return null;
                                var _ = [0, 0, a.cos(t.rad(b)), a.sin(t.rad(b))],
                                    w = 1 / (s(o(_[2]), o(_[3])) || 1);
                                _[2] *= w, _[3] *= w, _[2] < 0 && (_[0] = -_[2], _[2] = 0), _[3] < 0 && (_[1] = -_[3], _[3] = 0)
                            }
                            var k = t._parseDots(n);
                            if (!k) return null;
                            if (u = u.replace(/[\(\)\s,\xb0#]/g, "_"), e.gradient && u != e.gradient.id && (g.defs.removeChild(e.gradient), delete e.gradient), !e.gradient) {
                                y = v(h + "Gradient", {
                                    id: u
                                }), e.gradient = y, v(y, "radial" == h ? {
                                    fx: f,
                                    fy: p
                                } : {
                                    x1: _[0],
                                    y1: _[1],
                                    x2: _[2],
                                    y2: _[3],
                                    gradientTransform: e.matrix.invert()
                                }), g.defs.appendChild(y);
                                for (var B = 0, C = k.length; B < C; B++) y.appendChild(v("stop", {
                                    offset: k[B].offset ? k[B].offset : B ? "100%" : "0%",
                                    "stop-color": k[B].color || "#fff",
                                    "stop-opacity": isFinite(k[B].opacity) ? k[B].opacity : 1
                                }))
                            }
                        }
                        return v(d, {
                            fill: m(u),
                            opacity: 1,
                            "fill-opacity": 1
                        }), x.fill = c, x.opacity = 1, x.fillOpacity = 1, 1
                    },
                    y = function() {
                        var t = document.documentMode;
                        return t && (9 === t || 10 === t)
                    },
                    m = function(t) {
                        if (y()) return "url('#" + t + "')";
                        var e = document.location;
                        return "url('" + (e.protocol + "//" + e.host + e.pathname + e.search) + "#" + t + "')"
                    },
                    b = function(t) {
                        var e = t.getBBox(1);
                        v(t.pattern, {
                            patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"
                        })
                    },
                    _ = function(i, n, a) {
                        if ("path" == i.type) {
                            for (var s, o, l, h, u, f = r(n).toLowerCase().split("-"), p = i.paper, x = a ? "end" : "start", y = i.node, m = i.attrs, b = m["stroke-width"], _ = f.length, w = "classic", k = 3, B = 3, C = 5; _--;) switch (f[_]) {
                                case "block":
                                case "classic":
                                case "oval":
                                case "diamond":
                                case "open":
                                case "none":
                                    w = f[_];
                                    break;
                                case "wide":
                                    B = 5;
                                    break;
                                case "narrow":
                                    B = 2;
                                    break;
                                case "long":
                                    k = 5;
                                    break;
                                case "short":
                                    k = 2
                            }
                            if ("open" == w ? (k += 2, B += 2, C += 2, l = 1, h = a ? 4 : 1, u = {
                                    fill: "none",
                                    stroke: m.stroke
                                }) : (h = l = k / 2, u = {
                                    fill: m.stroke,
                                    stroke: "none"
                                }), i._.arrows ? a ? (i._.arrows.endPath && g[i._.arrows.endPath]--, i._.arrows.endMarker && g[i._.arrows.endMarker]--) : (i._.arrows.startPath && g[i._.arrows.startPath]--, i._.arrows.startMarker && g[i._.arrows.startMarker]--) : i._.arrows = {}, "none" != w) {
                                var S = "raphael-marker-" + w,
                                    A = "raphael-marker-" + x + w + k + B + "-obj" + i.id;
                                t._g.doc.getElementById(S) ? g[S]++ : (p.defs.appendChild(v(v("path"), {
                                    "stroke-linecap": "round",
                                    d: d[w],
                                    id: S
                                })), g[S] = 1);
                                var T, E = t._g.doc.getElementById(A);
                                E ? (g[A]++, T = E.getElementsByTagName("use")[0]) : (E = v(v("marker"), {
                                    id: A,
                                    markerHeight: B,
                                    markerWidth: k,
                                    orient: "auto",
                                    refX: h,
                                    refY: B / 2
                                }), T = v(v("use"), {
                                    "xlink:href": "#" + S,
                                    transform: (a ? "rotate(180 " + k / 2 + " " + B / 2 + ") " : c) + "scale(" + k / C + "," + B / C + ")",
                                    "stroke-width": (1 / ((k / C + B / C) / 2)).toFixed(4)
                                }), E.appendChild(T), p.defs.appendChild(E), g[A] = 1), v(T, u);
                                var M = l * ("diamond" != w && "oval" != w);
                                a ? (s = i._.arrows.startdx * b || 0, o = t.getTotalLength(m.path) - M * b) : (s = M * b, o = t.getTotalLength(m.path) - (i._.arrows.enddx * b || 0)), (u = {})["marker-" + x] = "url(#" + A + ")", (o || s) && (u.d = t.getSubpath(m.path, s, o)), v(y, u), i._.arrows[x + "Path"] = S, i._.arrows[x + "Marker"] = A, i._.arrows[x + "dx"] = M, i._.arrows[x + "Type"] = w, i._.arrows[x + "String"] = n
                            } else a ? (s = i._.arrows.startdx * b || 0, o = t.getTotalLength(m.path) - s) : (s = 0, o = t.getTotalLength(m.path) - (i._.arrows.enddx * b || 0)), i._.arrows[x + "Path"] && v(y, {
                                d: t.getSubpath(m.path, s, o)
                            }), delete i._.arrows[x + "Path"], delete i._.arrows[x + "Marker"], delete i._.arrows[x + "dx"], delete i._.arrows[x + "Type"], delete i._.arrows[x + "String"];
                            for (u in g)
                                if (g[e](u) && !g[u]) {
                                    var N = t._g.doc.getElementById(u);
                                    N && N.parentNode.removeChild(N)
                                }
                        }
                    },
                    w = {
                        "-": [3, 1],
                        ".": [1, 1],
                        "-.": [3, 1, 1, 1],
                        "-..": [3, 1, 1, 1, 1, 1],
                        ". ": [1, 3],
                        "- ": [4, 3],
                        "--": [8, 3],
                        "- .": [4, 3, 1, 3],
                        "--.": [8, 3, 1, 3],
                        "--..": [8, 3, 1, 3, 1, 3]
                    },
                    k = function(t, e, i) {
                        if (e = w[r(e).toLowerCase()]) {
                            for (var n = t.attrs["stroke-width"] || "1", a = {
                                    round: n,
                                    square: n,
                                    butt: 0
                                }[t.attrs["stroke-linecap"] || i["stroke-linecap"]] || 0, s = [], o = e.length; o--;) s[o] = e[o] * n + (o % 2 ? 1 : -1) * a;
                            v(t.node, {
                                "stroke-dasharray": s.join(",")
                            })
                        } else v(t.node, {
                            "stroke-dasharray": "none"
                        })
                    },
                    B = function(i, a) {
                        var l = i.node,
                            u = i.attrs,
                            f = l.style.visibility;
                        l.style.visibility = "hidden";
                        for (var d in a)
                            if (a[e](d)) {
                                if (!t._availableAttrs[e](d)) continue;
                                var g = a[d];
                                switch (u[d] = g, d) {
                                    case "blur":
                                        i.blur(g);
                                        break;
                                    case "title":
                                        var y = l.getElementsByTagName("title");
                                        if (y.length && (y = y[0])) y.firstChild.nodeValue = g;
                                        else {
                                            y = v("title");
                                            var m = t._g.doc.createTextNode(g);
                                            y.appendChild(m), l.appendChild(y)
                                        }
                                        break;
                                    case "href":
                                    case "target":
                                        var w = l.parentNode;
                                        if ("a" != w.tagName.toLowerCase()) {
                                            var B = v("a");
                                            w.insertBefore(B, l), B.appendChild(l), w = B
                                        }
                                        "target" == d ? w.setAttributeNS(p, "show", "blank" == g ? "new" : g) : w.setAttributeNS(p, d, g);
                                        break;
                                    case "cursor":
                                        l.style.cursor = g;
                                        break;
                                    case "transform":
                                        i.transform(g);
                                        break;
                                    case "arrow-start":
                                        _(i, g);
                                        break;
                                    case "arrow-end":
                                        _(i, g, 1);
                                        break;
                                    case "clip-rect":
                                        var S = r(g).split(h);
                                        if (4 == S.length) {
                                            i.clip && i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);
                                            var A = v("clipPath"),
                                                T = v("rect");
                                            A.id = t.createUUID(), v(T, {
                                                x: S[0],
                                                y: S[1],
                                                width: S[2],
                                                height: S[3]
                                            }), A.appendChild(T), i.paper.defs.appendChild(A), v(l, {
                                                "clip-path": "url(#" + A.id + ")"
                                            }), i.clip = T
                                        }
                                        if (!g) {
                                            var E = l.getAttribute("clip-path");
                                            if (E) {
                                                var M = t._g.doc.getElementById(E.replace(/(^url\(#|\)$)/g, c));
                                                M && M.parentNode.removeChild(M), v(l, {
                                                    "clip-path": c
                                                }), delete i.clip
                                            }
                                        }
                                        break;
                                    case "path":
                                        "path" == i.type && (v(l, {
                                            d: g ? u.path = t._pathToAbsolute(g) : "M0,0"
                                        }), i._.dirty = 1, i._.arrows && ("startString" in i._.arrows && _(i, i._.arrows.startString), "endString" in i._.arrows && _(i, i._.arrows.endString, 1)));
                                        break;
                                    case "width":
                                        if (l.setAttribute(d, g), i._.dirty = 1, !u.fx) break;
                                        d = "x", g = u.x;
                                    case "x":
                                        u.fx && (g = -u.x - (u.width || 0));
                                    case "rx":
                                        if ("rx" == d && "rect" == i.type) break;
                                    case "cx":
                                        l.setAttribute(d, g), i.pattern && b(i), i._.dirty = 1;
                                        break;
                                    case "height":
                                        if (l.setAttribute(d, g), i._.dirty = 1, !u.fy) break;
                                        d = "y", g = u.y;
                                    case "y":
                                        u.fy && (g = -u.y - (u.height || 0));
                                    case "ry":
                                        if ("ry" == d && "rect" == i.type) break;
                                    case "cy":
                                        l.setAttribute(d, g), i.pattern && b(i), i._.dirty = 1;
                                        break;
                                    case "r":
                                        "rect" == i.type ? v(l, {
                                            rx: g,
                                            ry: g
                                        }) : l.setAttribute(d, g), i._.dirty = 1;
                                        break;
                                    case "src":
                                        "image" == i.type && l.setAttributeNS(p, "href", g);
                                        break;
                                    case "stroke-width":
                                        1 == i._.sx && 1 == i._.sy || (g /= s(o(i._.sx), o(i._.sy)) || 1), l.setAttribute(d, g), u["stroke-dasharray"] && k(i, u["stroke-dasharray"], a), i._.arrows && ("startString" in i._.arrows && _(i, i._.arrows.startString), "endString" in i._.arrows && _(i, i._.arrows.endString, 1));
                                        break;
                                    case "stroke-dasharray":
                                        k(i, g, a);
                                        break;
                                    case "fill":
                                        var N = r(g).match(t._ISURL);
                                        if (N) {
                                            A = v("pattern");
                                            var L = v("image");
                                            A.id = t.createUUID(), v(A, {
                                                    x: 0,
                                                    y: 0,
                                                    patternUnits: "userSpaceOnUse",
                                                    height: 1,
                                                    width: 1
                                                }), v(L, {
                                                    x: 0,
                                                    y: 0,
                                                    "xlink:href": N[1]
                                                }), A.appendChild(L),
                                                function(e) {
                                                    t._preload(N[1], function() {
                                                        var t = this.offsetWidth,
                                                            r = this.offsetHeight;
                                                        v(e, {
                                                            width: t,
                                                            height: r
                                                        }), v(L, {
                                                            width: t,
                                                            height: r
                                                        })
                                                    })
                                                }(A), i.paper.defs.appendChild(A), v(l, {
                                                    fill: "url(#" + A.id + ")"
                                                }), i.pattern = A, i.pattern && b(i);
                                            break
                                        }
                                        var z = t.getRGB(g);
                                        if (z.error) {
                                            if (("circle" == i.type || "ellipse" == i.type || "r" != r(g).charAt()) && x(i, g)) {
                                                if ("opacity" in u || "fill-opacity" in u) {
                                                    var P = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, c));
                                                    if (P) {
                                                        var F = P.getElementsByTagName("stop");
                                                        v(F[F.length - 1], {
                                                            "stop-opacity": ("opacity" in u ? u.opacity : 1) * ("fill-opacity" in u ? u["fill-opacity"] : 1)
                                                        })
                                                    }
                                                }
                                                u.gradient = g, u.fill = "none";
                                                break
                                            }
                                        } else delete a.gradient, delete u.gradient, !t.is(u.opacity, "undefined") && t.is(a.opacity, "undefined") && v(l, {
                                            opacity: u.opacity
                                        }), !t.is(u["fill-opacity"], "undefined") && t.is(a["fill-opacity"], "undefined") && v(l, {
                                            "fill-opacity": u["fill-opacity"]
                                        });
                                        z[e]("opacity") && v(l, {
                                            "fill-opacity": z.opacity > 1 ? z.opacity / 100 : z.opacity
                                        });
                                    case "stroke":
                                        z = t.getRGB(g), l.setAttribute(d, z.hex), "stroke" == d && z[e]("opacity") && v(l, {
                                            "stroke-opacity": z.opacity > 1 ? z.opacity / 100 : z.opacity
                                        }), "stroke" == d && i._.arrows && ("startString" in i._.arrows && _(i, i._.arrows.startString), "endString" in i._.arrows && _(i, i._.arrows.endString, 1));
                                        break;
                                    case "gradient":
                                        ("circle" == i.type || "ellipse" == i.type || "r" != r(g).charAt()) && x(i, g);
                                        break;
                                    case "opacity":
                                        u.gradient && !u[e]("stroke-opacity") && v(l, {
                                            "stroke-opacity": g > 1 ? g / 100 : g
                                        });
                                    case "fill-opacity":
                                        if (u.gradient) {
                                            (P = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, c))) && (F = P.getElementsByTagName("stop"), v(F[F.length - 1], {
                                                "stop-opacity": g
                                            }));
                                            break
                                        }
                                    default:
                                        "font-size" == d && (g = n(g, 10) + "px");
                                        var R = d.replace(/(\-.)/g, function(t) {
                                            return t.substring(1).toUpperCase()
                                        });
                                        l.style[R] = g, i._.dirty = 1, l.setAttribute(d, g)
                                }
                            }
                        C(i, a), l.style.visibility = f
                    },
                    C = function(i, a) {
                        if ("text" == i.type && (a[e]("text") || a[e]("font") || a[e]("font-size") || a[e]("x") || a[e]("y"))) {
                            var s = i.attrs,
                                o = i.node,
                                l = o.firstChild ? n(t._g.doc.defaultView.getComputedStyle(o.firstChild, c).getPropertyValue("font-size"), 10) : 10;
                            if (a[e]("text")) {
                                for (s.text = a.text; o.firstChild;) o.removeChild(o.firstChild);
                                for (var h, u = r(a.text).split("\n"), f = [], p = 0, d = u.length; p < d; p++) h = v("tspan"), p && v(h, {
                                    dy: 1.2 * l,
                                    x: s.x
                                }), h.appendChild(t._g.doc.createTextNode(u[p])), o.appendChild(h), f[p] = h
                            } else
                                for (p = 0, d = (f = o.getElementsByTagName("tspan")).length; p < d; p++) p ? v(f[p], {
                                    dy: 1.2 * l,
                                    x: s.x
                                }) : v(f[0], {
                                    dy: 0
                                });
                            v(o, {
                                x: s.x,
                                y: s.y
                            }), i._.dirty = 1;
                            var g = i._getBBox(),
                                x = s.y - (g.y + g.height / 2);
                            x && t.is(x, "finite") && v(f[0], {
                                dy: x
                            })
                        }
                    },
                    S = function(t) {
                        return t.parentNode && "a" === t.parentNode.tagName.toLowerCase() ? t.parentNode : t
                    },
                    A = function(e, r) {
                        this[0] = this.node = e, e.raphael = !0, this.id = function() {
                            return ("0000" + (Math.random() * Math.pow(36, 5) << 0).toString(36)).slice(-5)
                        }(), e.raphaelid = this.id, this.matrix = t.matrix(), this.realPath = null, this.paper = r, this.attrs = this.attrs || {}, this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            deg: 0,
                            dx: 0,
                            dy: 0,
                            dirty: 1
                        }, !r.bottom && (r.bottom = this), this.prev = r.top, r.top && (r.top.next = this), r.top = this, this.next = null
                    },
                    T = t.el;
                A.prototype = T, T.constructor = A, t._engine.path = function(t, e) {
                    var r = v("path");
                    e.canvas && e.canvas.appendChild(r);
                    var i = new A(r, e);
                    return i.type = "path", B(i, {
                        fill: "none",
                        stroke: "#000",
                        path: t
                    }), i
                }, T.rotate = function(t, e, n) {
                    if (this.removed) return this;
                    if ((t = r(t).split(h)).length - 1 && (e = i(t[1]), n = i(t[2])), t = i(t[0]), null == n && (e = n), null == e || null == n) {
                        var a = this.getBBox(1);
                        e = a.x + a.width / 2, n = a.y + a.height / 2
                    }
                    return this.transform(this._.transform.concat([
                        ["r", t, e, n]
                    ])), this
                }, T.scale = function(t, e, n, a) {
                    if (this.removed) return this;
                    if ((t = r(t).split(h)).length - 1 && (e = i(t[1]), n = i(t[2]), a = i(t[3])), t = i(t[0]), null == e && (e = t), null == a && (n = a), null == n || null == a) var s = this.getBBox(1);
                    return n = null == n ? s.x + s.width / 2 : n, a = null == a ? s.y + s.height / 2 : a, this.transform(this._.transform.concat([
                        ["s", t, e, n, a]
                    ])), this
                }, T.translate = function(t, e) {
                    return this.removed ? this : ((t = r(t).split(h)).length - 1 && (e = i(t[1])), t = i(t[0]) || 0, e = +e || 0, this.transform(this._.transform.concat([
                        ["t", t, e]
                    ])), this)
                }, T.transform = function(r) {
                    var i = this._;
                    if (null == r) return i.transform;
                    if (t._extractTransform(this, r), this.clip && v(this.clip, {
                            transform: this.matrix.invert()
                        }), this.pattern && b(this), this.node && v(this.node, {
                            transform: this.matrix
                        }), 1 != i.sx || 1 != i.sy) {
                        var n = this.attrs[e]("stroke-width") ? this.attrs["stroke-width"] : 1;
                        this.attr({
                            "stroke-width": n
                        })
                    }
                    return this
                }, T.hide = function() {
                    return this.removed || (this.node.style.display = "none"), this
                }, T.show = function() {
                    return this.removed || (this.node.style.display = ""), this
                }, T.remove = function() {
                    var e = S(this.node);
                    if (!this.removed && e.parentNode) {
                        var r = this.paper;
                        r.__set__ && r.__set__.exclude(this), u.unbind("raphael.*.*." + this.id), this.gradient && r.defs.removeChild(this.gradient), t._tear(this, r), e.parentNode.removeChild(e), this.removeData();
                        for (var i in this) this[i] = "function" == typeof this[i] ? t._removedFactory(i) : null;
                        this.removed = !0
                    }
                }, T._getBBox = function() {
                    if ("none" == this.node.style.display) {
                        this.show();
                        var t = !0
                    }
                    var e, r = !1;
                    this.paper.canvas.parentElement ? e = this.paper.canvas.parentElement.style : this.paper.canvas.parentNode && (e = this.paper.canvas.parentNode.style), e && "none" == e.display && (r = !0, e.display = "");
                    var i = {};
                    try {
                        i = this.node.getBBox()
                    } catch (t) {
                        i = {
                            x: this.node.clientLeft,
                            y: this.node.clientTop,
                            width: this.node.clientWidth,
                            height: this.node.clientHeight
                        }
                    } finally {
                        i = i || {}, r && (e.display = "none")
                    }
                    return t && this.hide(), i
                }, T.attr = function(r, i) {
                    if (this.removed) return this;
                    if (null == r) {
                        var n = {};
                        for (var a in this.attrs) this.attrs[e](a) && (n[a] = this.attrs[a]);
                        return n.gradient && "none" == n.fill && (n.fill = n.gradient) && delete n.gradient, n.transform = this._.transform, n
                    }
                    if (null == i && t.is(r, "string")) {
                        if ("fill" == r && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                        if ("transform" == r) return this._.transform;
                        for (var s = r.split(h), o = {}, l = 0, c = s.length; l < c; l++)(r = s[l]) in this.attrs ? o[r] = this.attrs[r] : t.is(this.paper.customAttributes[r], "function") ? o[r] = this.paper.customAttributes[r].def : o[r] = t._availableAttrs[r];
                        return c - 1 ? o : o[s[0]]
                    }
                    if (null == i && t.is(r, "array")) {
                        for (o = {}, l = 0, c = r.length; l < c; l++) o[r[l]] = this.attr(r[l]);
                        return o
                    }
                    if (null != i) {
                        var f = {};
                        f[r] = i
                    } else null != r && t.is(r, "object") && (f = r);
                    for (var p in f) u("raphael.attr." + p + "." + this.id, this, f[p]);
                    for (p in this.paper.customAttributes)
                        if (this.paper.customAttributes[e](p) && f[e](p) && t.is(this.paper.customAttributes[p], "function")) {
                            var d = this.paper.customAttributes[p].apply(this, [].concat(f[p]));
                            this.attrs[p] = f[p];
                            for (var g in d) d[e](g) && (f[g] = d[g])
                        }
                    return B(this, f), this
                }, T.toFront = function() {
                    if (this.removed) return this;
                    var e = S(this.node);
                    e.parentNode.appendChild(e);
                    var r = this.paper;
                    return r.top != this && t._tofront(this, r), this
                }, T.toBack = function() {
                    if (this.removed) return this;
                    var e = S(this.node),
                        r = e.parentNode;
                    r.insertBefore(e, r.firstChild), t._toback(this, this.paper);
                    this.paper;
                    return this
                }, T.insertAfter = function(e) {
                    if (this.removed || !e) return this;
                    var r = S(this.node),
                        i = S(e.node || e[e.length - 1].node);
                    return i.nextSibling ? i.parentNode.insertBefore(r, i.nextSibling) : i.parentNode.appendChild(r), t._insertafter(this, e, this.paper), this
                }, T.insertBefore = function(e) {
                    if (this.removed || !e) return this;
                    var r = S(this.node),
                        i = S(e.node || e[0].node);
                    return i.parentNode.insertBefore(r, i), t._insertbefore(this, e, this.paper), this
                }, T.blur = function(e) {
                    var r = this;
                    if (0 != +e) {
                        var i = v("filter"),
                            n = v("feGaussianBlur");
                        r.attrs.blur = e, i.id = t.createUUID(), v(n, {
                            stdDeviation: +e || 1.5
                        }), i.appendChild(n), r.paper.defs.appendChild(i), r._blur = i, v(r.node, {
                            filter: "url(#" + i.id + ")"
                        })
                    } else r._blur && (r._blur.parentNode.removeChild(r._blur), delete r._blur, delete r.attrs.blur), r.node.removeAttribute("filter");
                    return r
                }, t._engine.circle = function(t, e, r, i) {
                    var n = v("circle");
                    t.canvas && t.canvas.appendChild(n);
                    var a = new A(n, t);
                    return a.attrs = {
                        cx: e,
                        cy: r,
                        r: i,
                        fill: "none",
                        stroke: "#000"
                    }, a.type = "circle", v(n, a.attrs), a
                }, t._engine.rect = function(t, e, r, i, n, a) {
                    var s = v("rect");
                    t.canvas && t.canvas.appendChild(s);
                    var o = new A(s, t);
                    return o.attrs = {
                        x: e,
                        y: r,
                        width: i,
                        height: n,
                        rx: a || 0,
                        ry: a || 0,
                        fill: "none",
                        stroke: "#000"
                    }, o.type = "rect", v(s, o.attrs), o
                }, t._engine.ellipse = function(t, e, r, i, n) {
                    var a = v("ellipse");
                    t.canvas && t.canvas.appendChild(a);
                    var s = new A(a, t);
                    return s.attrs = {
                        cx: e,
                        cy: r,
                        rx: i,
                        ry: n,
                        fill: "none",
                        stroke: "#000"
                    }, s.type = "ellipse", v(a, s.attrs), s
                }, t._engine.image = function(t, e, r, i, n, a) {
                    var s = v("image");
                    v(s, {
                        x: r,
                        y: i,
                        width: n,
                        height: a,
                        preserveAspectRatio: "none"
                    }), s.setAttributeNS(p, "href", e), t.canvas && t.canvas.appendChild(s);
                    var o = new A(s, t);
                    return o.attrs = {
                        x: r,
                        y: i,
                        width: n,
                        height: a,
                        src: e
                    }, o.type = "image", o
                }, t._engine.text = function(e, r, i, n) {
                    var a = v("text");
                    e.canvas && e.canvas.appendChild(a);
                    var s = new A(a, e);
                    return s.attrs = {
                        x: r,
                        y: i,
                        "text-anchor": "middle",
                        text: n,
                        "font-family": t._availableAttrs["font-family"],
                        "font-size": t._availableAttrs["font-size"],
                        stroke: "none",
                        fill: "#000"
                    }, s.type = "text", B(s, s.attrs), s
                }, t._engine.setSize = function(t, e) {
                    return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
                }, t._engine.create = function() {
                    var e = t._getContainer.apply(0, arguments),
                        r = e && e.container,
                        i = e.x,
                        n = e.y,
                        a = e.width,
                        s = e.height;
                    if (!r) throw new Error("SVG container not found.");
                    var o, l = v("svg"),
                        h = "overflow:hidden;";
                    return i = i || 0, n = n || 0, a = a || 512, s = s || 342, v(l, {
                        height: s,
                        version: 1.1,
                        width: a,
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }), 1 == r ? (l.style.cssText = h + "position:absolute;left:" + i + "px;top:" + n + "px", t._g.doc.body.appendChild(l), o = 1) : (l.style.cssText = h + "position:relative", r.firstChild ? r.insertBefore(l, r.firstChild) : r.appendChild(l)), r = new t._Paper, r.width = a, r.height = s, r.canvas = l, r.clear(), r._left = r._top = 0, o && (r.renderfix = function() {}), r.renderfix(), r
                }, t._engine.setViewBox = function(t, e, r, i, n) {
                    u("raphael.setViewBox", this, this._viewBox, [t, e, r, i, n]);
                    var a, o, l = this.getSize(),
                        h = s(r / l.width, i / l.height),
                        c = this.top,
                        p = n ? "xMidYMid meet" : "xMinYMin";
                    for (null == t ? (this._vbSize && (h = 1), delete this._vbSize, a = "0 0 " + this.width + f + this.height) : (this._vbSize = h, a = t + f + e + f + r + f + i), v(this.canvas, {
                            viewBox: a,
                            preserveAspectRatio: p
                        }); h && c;) o = "stroke-width" in c.attrs ? c.attrs["stroke-width"] : 1, c.attr({
                        "stroke-width": o
                    }), c._.dirty = 1, c._.dirtyT = 1, c = c.prev;
                    return this._viewBox = [t, e, r, i, !!n], this
                }, t.prototype.renderfix = function() {
                    var t, e = this.canvas,
                        r = e.style;
                    try {
                        t = e.getScreenCTM() || e.createSVGMatrix()
                    } catch (r) {
                        t = e.createSVGMatrix()
                    }
                    var i = -t.e % 1,
                        n = -t.f % 1;
                    (i || n) && (i && (this._left = (this._left + i) % 1, r.left = this._left + "px"), n && (this._top = (this._top + n) % 1, r.top = this._top + "px"))
                }, t.prototype.clear = function() {
                    t.eve("raphael.clear", this);
                    for (var e = this.canvas; e.firstChild;) e.removeChild(e.firstChild);
                    this.bottom = this.top = null, (this.desc = v("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël " + t.version)), e.appendChild(this.desc), e.appendChild(this.defs = v("defs"))
                }, t.prototype.remove = function() {
                    u("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
                    for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null
                };
                var E = t.st;
                for (var M in T) T[e](M) && !E[e](M) && (E[M] = function(t) {
                    return function() {
                        var e = arguments;
                        return this.forEach(function(r) {
                            r[t].apply(r, e)
                        })
                    }
                }(M))
            }
        }.apply(e, i)) && (t.exports = n)
    }, function(t, e, r) {
        var i, n;
        i = [r(1)], void 0 !== (n = function(t) {
            if (!t || t.vml) {
                var e = "hasOwnProperty",
                    r = String,
                    i = parseFloat,
                    n = Math,
                    a = n.round,
                    s = n.max,
                    o = n.min,
                    l = n.abs,
                    h = /[, ]+/,
                    u = t.eve,
                    c = " ",
                    f = "",
                    p = {
                        M: "m",
                        L: "l",
                        C: "c",
                        Z: "x",
                        m: "t",
                        l: "r",
                        c: "v",
                        z: "x"
                    },
                    d = /([clmz]),?([^clmz]*)/gi,
                    g = / progid:\S+Blur\([^\)]+\)/g,
                    v = /-?[^,\s-]+/g,
                    x = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",
                    y = 21600,
                    m = {
                        path: 1,
                        rect: 1,
                        image: 1
                    },
                    b = {
                        circle: 1,
                        ellipse: 1
                    },
                    _ = function(e) {
                        var i = /[ahqstv]/gi,
                            n = t._pathToAbsolute;
                        if (r(e).match(i) && (n = t._path2curve), i = /[clmz]/g, n == t._pathToAbsolute && !r(e).match(i)) {
                            var s = r(e).replace(d, function(t, e, r) {
                                var i = [],
                                    n = "m" == e.toLowerCase(),
                                    s = p[e];
                                return r.replace(v, function(t) {
                                    n && 2 == i.length && (s += i + p["m" == e ? "l" : "L"], i = []), i.push(a(t * y))
                                }), s + i
                            });
                            return s
                        }
                        var o, l, h = n(e);
                        s = [];
                        for (var u = 0, g = h.length; u < g; u++) {
                            o = h[u], "z" == (l = h[u][0].toLowerCase()) && (l = "x");
                            for (var x = 1, m = o.length; x < m; x++) l += a(o[x] * y) + (x != m - 1 ? "," : f);
                            s.push(l)
                        }
                        return s.join(c)
                    },
                    w = function(e, r, i) {
                        var n = t.matrix();
                        return n.rotate(-e, .5, .5), {
                            dx: n.x(r, i),
                            dy: n.y(r, i)
                        }
                    },
                    k = function(t, e, r, i, n, a) {
                        var s = t._,
                            o = t.matrix,
                            h = s.fillpos,
                            u = t.node,
                            f = u.style,
                            p = 1,
                            d = "",
                            g = y / e,
                            v = y / r;
                        if (f.visibility = "hidden", e && r) {
                            if (u.coordsize = l(g) + c + l(v), f.rotation = a * (e * r < 0 ? -1 : 1), a) {
                                var x = w(a, i, n);
                                i = x.dx, n = x.dy
                            }
                            if (e < 0 && (d += "x"), r < 0 && (d += " y") && (p = -1), f.flip = d, u.coordorigin = i * -g + c + n * -v, h || s.fillsize) {
                                var m = u.getElementsByTagName("fill");
                                m = m && m[0], u.removeChild(m), h && (x = w(a, o.x(h[0], h[1]), o.y(h[0], h[1])), m.position = x.dx * p + c + x.dy * p), s.fillsize && (m.size = s.fillsize[0] * l(e) + c + s.fillsize[1] * l(r)), u.appendChild(m)
                            }
                            f.visibility = "visible"
                        }
                    };
                t.toString = function() {
                    return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
                };
                var B = function(t, e, i) {
                        for (var n = r(e).toLowerCase().split("-"), a = i ? "end" : "start", s = n.length, o = "classic", l = "medium", h = "medium"; s--;) switch (n[s]) {
                            case "block":
                            case "classic":
                            case "oval":
                            case "diamond":
                            case "open":
                            case "none":
                                o = n[s];
                                break;
                            case "wide":
                            case "narrow":
                                h = n[s];
                                break;
                            case "long":
                            case "short":
                                l = n[s]
                        }
                        var u = t.node.getElementsByTagName("stroke")[0];
                        u[a + "arrow"] = o, u[a + "arrowlength"] = l, u[a + "arrowwidth"] = h
                    },
                    C = function(n, l) {
                        n.attrs = n.attrs || {};
                        var u = n.node,
                            p = n.attrs,
                            d = u.style,
                            g = m[n.type] && (l.x != p.x || l.y != p.y || l.width != p.width || l.height != p.height || l.cx != p.cx || l.cy != p.cy || l.rx != p.rx || l.ry != p.ry || l.r != p.r),
                            v = b[n.type] && (p.cx != l.cx || p.cy != l.cy || p.r != l.r || p.rx != l.rx || p.ry != l.ry),
                            x = n;
                        for (var w in l) l[e](w) && (p[w] = l[w]);
                        if (g && (p.path = t._getPath[n.type](n), n._.dirty = 1), l.href && (u.href = l.href), l.title && (u.title = l.title), l.target && (u.target = l.target), l.cursor && (d.cursor = l.cursor), "blur" in l && n.blur(l.blur), (l.path && "path" == n.type || g) && (u.path = _(~r(p.path).toLowerCase().indexOf("r") ? t._pathToAbsolute(p.path) : p.path), n._.dirty = 1, "image" == n.type && (n._.fillpos = [p.x, p.y], n._.fillsize = [p.width, p.height], k(n, 1, 1, 0, 0, 0))), "transform" in l && n.transform(l.transform), v) {
                            var C = +p.cx,
                                A = +p.cy,
                                T = +p.rx || +p.r || 0,
                                M = +p.ry || +p.r || 0;
                            u.path = t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", a((C - T) * y), a((A - M) * y), a((C + T) * y), a((A + M) * y), a(C * y)), n._.dirty = 1
                        }
                        if ("clip-rect" in l) {
                            var N = r(l["clip-rect"]).split(h);
                            if (4 == N.length) {
                                N[2] = +N[2] + +N[0], N[3] = +N[3] + +N[1];
                                var L = u.clipRect || t._g.doc.createElement("div"),
                                    z = L.style;
                                z.clip = t.format("rect({1}px {2}px {3}px {0}px)", N), u.clipRect || (z.position = "absolute", z.top = 0, z.left = 0, z.width = n.paper.width + "px", z.height = n.paper.height + "px", u.parentNode.insertBefore(L, u), L.appendChild(u), u.clipRect = L)
                            }
                            l["clip-rect"] || u.clipRect && (u.clipRect.style.clip = "auto")
                        }
                        if (n.textpath) {
                            var P = n.textpath.style;
                            l.font && (P.font = l.font), l["font-family"] && (P.fontFamily = '"' + l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, f) + '"'), l["font-size"] && (P.fontSize = l["font-size"]), l["font-weight"] && (P.fontWeight = l["font-weight"]), l["font-style"] && (P.fontStyle = l["font-style"])
                        }
                        if ("arrow-start" in l && B(x, l["arrow-start"]), "arrow-end" in l && B(x, l["arrow-end"], 1), null != l.opacity || null != l.fill || null != l.src || null != l.stroke || null != l["stroke-width"] || null != l["stroke-opacity"] || null != l["fill-opacity"] || null != l["stroke-dasharray"] || null != l["stroke-miterlimit"] || null != l["stroke-linejoin"] || null != l["stroke-linecap"]) {
                            var F = u.getElementsByTagName("fill");
                            if (!(F = F && F[0]) && (F = E("fill")), "image" == n.type && l.src && (F.src = l.src), l.fill && (F.on = !0), null != F.on && "none" != l.fill && null !== l.fill || (F.on = !1), F.on && l.fill) {
                                var R = r(l.fill).match(t._ISURL);
                                if (R) {
                                    F.parentNode == u && u.removeChild(F), F.rotate = !0, F.src = R[1], F.type = "tile";
                                    var j = n.getBBox(1);
                                    F.position = j.x + c + j.y, n._.fillpos = [j.x, j.y], t._preload(R[1], function() {
                                        n._.fillsize = [this.offsetWidth, this.offsetHeight]
                                    })
                                } else F.color = t.getRGB(l.fill).hex, F.src = f, F.type = "solid", t.getRGB(l.fill).error && (x.type in {
                                    circle: 1,
                                    ellipse: 1
                                } || "r" != r(l.fill).charAt()) && S(x, l.fill, F) && (p.fill = "none", p.gradient = l.fill, F.rotate = !1)
                            }
                            if ("fill-opacity" in l || "opacity" in l) {
                                var I = ((+p["fill-opacity"] + 1 || 2) - 1) * ((+p.opacity + 1 || 2) - 1) * ((+t.getRGB(l.fill).o + 1 || 2) - 1);
                                I = o(s(I, 0), 1), F.opacity = I, F.src && (F.color = "none")
                            }
                            u.appendChild(F);
                            var D = u.getElementsByTagName("stroke") && u.getElementsByTagName("stroke")[0],
                                q = !1;
                            !D && (q = D = E("stroke")), (l.stroke && "none" != l.stroke || l["stroke-width"] || null != l["stroke-opacity"] || l["stroke-dasharray"] || l["stroke-miterlimit"] || l["stroke-linejoin"] || l["stroke-linecap"]) && (D.on = !0), ("none" == l.stroke || null === l.stroke || null == D.on || 0 == l.stroke || 0 == l["stroke-width"]) && (D.on = !1);
                            var O = t.getRGB(l.stroke);
                            D.on && l.stroke && (D.color = O.hex), I = ((+p["stroke-opacity"] + 1 || 2) - 1) * ((+p.opacity + 1 || 2) - 1) * ((+O.o + 1 || 2) - 1);
                            var V = .75 * (i(l["stroke-width"]) || 1);
                            if (I = o(s(I, 0), 1), null == l["stroke-width"] && (V = p["stroke-width"]), l["stroke-width"] && (D.weight = V), V && V < 1 && (I *= V) && (D.weight = 1), D.opacity = I, l["stroke-linejoin"] && (D.joinstyle = l["stroke-linejoin"] || "miter"), D.miterlimit = l["stroke-miterlimit"] || 8, l["stroke-linecap"] && (D.endcap = "butt" == l["stroke-linecap"] ? "flat" : "square" == l["stroke-linecap"] ? "square" : "round"), "stroke-dasharray" in l) {
                                var Y = {
                                    "-": "shortdash",
                                    ".": "shortdot",
                                    "-.": "shortdashdot",
                                    "-..": "shortdashdotdot",
                                    ". ": "dot",
                                    "- ": "dash",
                                    "--": "longdash",
                                    "- .": "dashdot",
                                    "--.": "longdashdot",
                                    "--..": "longdashdotdot"
                                };
                                D.dashstyle = Y[e](l["stroke-dasharray"]) ? Y[l["stroke-dasharray"]] : f
                            }
                            q && u.appendChild(D)
                        }
                        if ("text" == x.type) {
                            x.paper.canvas.style.display = f;
                            var W = x.paper.span,
                                G = p.font && p.font.match(/\d+(?:\.\d*)?(?=px)/);
                            d = W.style, p.font && (d.font = p.font), p["font-family"] && (d.fontFamily = p["font-family"]), p["font-weight"] && (d.fontWeight = p["font-weight"]), p["font-style"] && (d.fontStyle = p["font-style"]), G = i(p["font-size"] || G && G[0]) || 10, d.fontSize = 100 * G + "px", x.textpath.string && (W.innerHTML = r(x.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                            var H = W.getBoundingClientRect();
                            x.W = p.w = (H.right - H.left) / 100, x.H = p.h = (H.bottom - H.top) / 100, x.X = p.x, x.Y = p.y + x.H / 2, ("x" in l || "y" in l) && (x.path.v = t.format("m{0},{1}l{2},{1}", a(p.x * y), a(p.y * y), a(p.x * y) + 1));
                            for (var X = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], U = 0, $ = X.length; U < $; U++)
                                if (X[U] in l) {
                                    x._.dirty = 1;
                                    break
                                }
                            switch (p["text-anchor"]) {
                                case "start":
                                    x.textpath.style["v-text-align"] = "left", x.bbx = x.W / 2;
                                    break;
                                case "end":
                                    x.textpath.style["v-text-align"] = "right", x.bbx = -x.W / 2;
                                    break;
                                default:
                                    x.textpath.style["v-text-align"] = "center", x.bbx = 0
                            }
                            x.textpath.style["v-text-kern"] = !0
                        }
                    },
                    S = function(e, a, s) {
                        e.attrs = e.attrs || {};
                        e.attrs;
                        var o = Math.pow,
                            l = "linear",
                            h = ".5 .5";
                        if (e.attrs.gradient = a, a = r(a).replace(t._radial_gradient, function(t, e, r) {
                                return l = "radial", e && r && (e = i(e), r = i(r), o(e - .5, 2) + o(r - .5, 2) > .25 && (r = n.sqrt(.25 - o(e - .5, 2)) * (2 * (r > .5) - 1) + .5), h = e + c + r), f
                            }), a = a.split(/\s*\-\s*/), "linear" == l) {
                            var u = a.shift();
                            if (u = -i(u), isNaN(u)) return null
                        }
                        var p = t._parseDots(a);
                        if (!p) return null;
                        if (e = e.shape || e.node, p.length) {
                            e.removeChild(s), s.on = !0, s.method = "none", s.color = p[0].color, s.color2 = p[p.length - 1].color;
                            for (var d = [], g = 0, v = p.length; g < v; g++) p[g].offset && d.push(p[g].offset + c + p[g].color);
                            s.colors = d.length ? d.join() : "0% " + s.color, "radial" == l ? (s.type = "gradientTitle", s.focus = "100%", s.focussize = "0 0", s.focusposition = h, s.angle = 0) : (s.type = "gradient", s.angle = (270 - u) % 360), e.appendChild(s)
                        }
                        return 1
                    },
                    A = function(e, r) {
                        this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = r, this.matrix = t.matrix(), this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            dx: 0,
                            dy: 0,
                            deg: 0,
                            dirty: 1,
                            dirtyT: 1
                        }, !r.bottom && (r.bottom = this), this.prev = r.top, r.top && (r.top.next = this), r.top = this, this.next = null
                    },
                    T = t.el;
                A.prototype = T, T.constructor = A, T.transform = function(e) {
                    if (null == e) return this._.transform;
                    var i, n = this.paper._viewBoxShift,
                        a = n ? "s" + [n.scale, n.scale] + "-1-1t" + [n.dx, n.dy] : f;
                    n && (i = e = r(e).replace(/\.{3}|\u2026/g, this._.transform || f)), t._extractTransform(this, a + e);
                    var s, o = this.matrix.clone(),
                        l = this.skew,
                        h = this.node,
                        u = ~r(this.attrs.fill).indexOf("-"),
                        p = !r(this.attrs.fill).indexOf("url(");
                    if (o.translate(1, 1), p || u || "image" == this.type)
                        if (l.matrix = "1 0 0 1", l.offset = "0 0", s = o.split(), u && s.noRotation || !s.isSimple) {
                            h.style.filter = o.toFilter();
                            var d = this.getBBox(),
                                g = this.getBBox(1),
                                v = d.x - g.x,
                                x = d.y - g.y;
                            h.coordorigin = v * -y + c + x * -y, k(this, 1, 1, v, x, 0)
                        } else h.style.filter = f, k(this, s.scalex, s.scaley, s.dx, s.dy, s.rotate);
                    else h.style.filter = f, l.matrix = r(o), l.offset = o.offset();
                    return null !== i && (this._.transform = i, t._extractTransform(this, i)), this
                }, T.rotate = function(t, e, n) {
                    if (this.removed) return this;
                    if (null != t) {
                        if ((t = r(t).split(h)).length - 1 && (e = i(t[1]), n = i(t[2])), t = i(t[0]), null == n && (e = n), null == e || null == n) {
                            var a = this.getBBox(1);
                            e = a.x + a.width / 2, n = a.y + a.height / 2
                        }
                        return this._.dirtyT = 1, this.transform(this._.transform.concat([
                            ["r", t, e, n]
                        ])), this
                    }
                }, T.translate = function(t, e) {
                    return this.removed ? this : ((t = r(t).split(h)).length - 1 && (e = i(t[1])), t = i(t[0]) || 0, e = +e || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += e), this.transform(this._.transform.concat([
                        ["t", t, e]
                    ])), this)
                }, T.scale = function(t, e, n, a) {
                    if (this.removed) return this;
                    if ((t = r(t).split(h)).length - 1 && (e = i(t[1]), n = i(t[2]), a = i(t[3]), isNaN(n) && (n = null), isNaN(a) && (a = null)), t = i(t[0]), null == e && (e = t), null == a && (n = a), null == n || null == a) var s = this.getBBox(1);
                    return n = null == n ? s.x + s.width / 2 : n, a = null == a ? s.y + s.height / 2 : a, this.transform(this._.transform.concat([
                        ["s", t, e, n, a]
                    ])), this._.dirtyT = 1, this
                }, T.hide = function() {
                    return !this.removed && (this.node.style.display = "none"), this
                }, T.show = function() {
                    return !this.removed && (this.node.style.display = f), this
                }, T.auxGetBBox = t.el.getBBox, T.getBBox = function() {
                    var t = this.auxGetBBox();
                    if (this.paper && this.paper._viewBoxShift) {
                        var e = {},
                            r = 1 / this.paper._viewBoxShift.scale;
                        return e.x = t.x - this.paper._viewBoxShift.dx, e.x *= r, e.y = t.y - this.paper._viewBoxShift.dy, e.y *= r, e.width = t.width * r, e.height = t.height * r, e.x2 = e.x + e.width, e.y2 = e.y + e.height, e
                    }
                    return t
                }, T._getBBox = function() {
                    return this.removed ? {} : {
                        x: this.X + (this.bbx || 0) - this.W / 2,
                        y: this.Y - this.H,
                        width: this.W,
                        height: this.H
                    }
                }, T.remove = function() {
                    if (!this.removed && this.node.parentNode) {
                        this.paper.__set__ && this.paper.__set__.exclude(this), t.eve.unbind("raphael.*.*." + this.id), t._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
                        for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
                        this.removed = !0
                    }
                }, T.attr = function(r, i) {
                    if (this.removed) return this;
                    if (null == r) {
                        var n = {};
                        for (var a in this.attrs) this.attrs[e](a) && (n[a] = this.attrs[a]);
                        return n.gradient && "none" == n.fill && (n.fill = n.gradient) && delete n.gradient, n.transform = this._.transform, n
                    }
                    if (null == i && t.is(r, "string")) {
                        if ("fill" == r && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                        for (var s = r.split(h), o = {}, l = 0, c = s.length; l < c; l++)(r = s[l]) in this.attrs ? o[r] = this.attrs[r] : t.is(this.paper.customAttributes[r], "function") ? o[r] = this.paper.customAttributes[r].def : o[r] = t._availableAttrs[r];
                        return c - 1 ? o : o[s[0]]
                    }
                    if (this.attrs && null == i && t.is(r, "array")) {
                        for (o = {}, l = 0, c = r.length; l < c; l++) o[r[l]] = this.attr(r[l]);
                        return o
                    }
                    var f;
                    null != i && ((f = {})[r] = i), null == i && t.is(r, "object") && (f = r);
                    for (var p in f) u("raphael.attr." + p + "." + this.id, this, f[p]);
                    if (f) {
                        for (p in this.paper.customAttributes)
                            if (this.paper.customAttributes[e](p) && f[e](p) && t.is(this.paper.customAttributes[p], "function")) {
                                var d = this.paper.customAttributes[p].apply(this, [].concat(f[p]));
                                this.attrs[p] = f[p];
                                for (var g in d) d[e](g) && (f[g] = d[g])
                            }
                        f.text && "text" == this.type && (this.textpath.string = f.text), C(this, f)
                    }
                    return this
                }, T.toFront = function() {
                    return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && t._tofront(this, this.paper), this
                }, T.toBack = function() {
                    return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper)), this)
                }, T.insertAfter = function(e) {
                    return this.removed ? this : (e.constructor == t.st.constructor && (e = e[e.length - 1]), e.node.nextSibling ? e.node.parentNode.insertBefore(this.node, e.node.nextSibling) : e.node.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this)
                }, T.insertBefore = function(e) {
                    return this.removed ? this : (e.constructor == t.st.constructor && (e = e[0]), e.node.parentNode.insertBefore(this.node, e.node), t._insertbefore(this, e, this.paper), this)
                }, T.blur = function(e) {
                    var r = this.node.runtimeStyle,
                        i = r.filter;
                    return i = i.replace(g, f), 0 != +e ? (this.attrs.blur = e, r.filter = i + c + " progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+e || 1.5) + ")", r.margin = t.format("-{0}px 0 0 -{0}px", a(+e || 1.5))) : (r.filter = i, r.margin = 0, delete this.attrs.blur), this
                }, t._engine.path = function(t, e) {
                    var r = E("shape");
                    r.style.cssText = x, r.coordsize = y + c + y, r.coordorigin = e.coordorigin;
                    var i = new A(r, e),
                        n = {
                            fill: "none",
                            stroke: "#000"
                        };
                    t && (n.path = t), i.type = "path", i.path = [], i.Path = f, C(i, n), e.canvas && e.canvas.appendChild(r);
                    var a = E("skew");
                    return a.on = !0, r.appendChild(a), i.skew = a, i.transform(f), i
                }, t._engine.rect = function(e, r, i, n, a, s) {
                    var o = t._rectPath(r, i, n, a, s),
                        l = e.path(o),
                        h = l.attrs;
                    return l.X = h.x = r, l.Y = h.y = i, l.W = h.width = n, l.H = h.height = a, h.r = s, h.path = o, l.type = "rect", l
                }, t._engine.ellipse = function(t, e, r, i, n) {
                    var a = t.path();
                    a.attrs;
                    return a.X = e - i, a.Y = r - n, a.W = 2 * i, a.H = 2 * n, a.type = "ellipse", C(a, {
                        cx: e,
                        cy: r,
                        rx: i,
                        ry: n
                    }), a
                }, t._engine.circle = function(t, e, r, i) {
                    var n = t.path();
                    n.attrs;
                    return n.X = e - i, n.Y = r - i, n.W = n.H = 2 * i, n.type = "circle", C(n, {
                        cx: e,
                        cy: r,
                        r: i
                    }), n
                }, t._engine.image = function(e, r, i, n, a, s) {
                    var o = t._rectPath(i, n, a, s),
                        l = e.path(o).attr({
                            stroke: "none"
                        }),
                        h = l.attrs,
                        u = l.node,
                        c = u.getElementsByTagName("fill")[0];
                    return h.src = r, l.X = h.x = i, l.Y = h.y = n, l.W = h.width = a, l.H = h.height = s, h.path = o, l.type = "image", c.parentNode == u && u.removeChild(c), c.rotate = !0, c.src = r, c.type = "tile", l._.fillpos = [i, n], l._.fillsize = [a, s], u.appendChild(c), k(l, 1, 1, 0, 0, 0), l
                }, t._engine.text = function(e, i, n, s) {
                    var o = E("shape"),
                        l = E("path"),
                        h = E("textpath");
                    i = i || 0, n = n || 0, s = s || "", l.v = t.format("m{0},{1}l{2},{1}", a(i * y), a(n * y), a(i * y) + 1), l.textpathok = !0, h.string = r(s), h.on = !0, o.style.cssText = x, o.coordsize = y + c + y, o.coordorigin = "0 0";
                    var u = new A(o, e),
                        p = {
                            fill: "#000",
                            stroke: "none",
                            font: t._availableAttrs.font,
                            text: s
                        };
                    u.shape = o, u.path = l, u.textpath = h, u.type = "text", u.attrs.text = r(s), u.attrs.x = i, u.attrs.y = n, u.attrs.w = 1, u.attrs.h = 1, C(u, p), o.appendChild(h), o.appendChild(l), e.canvas.appendChild(o);
                    var d = E("skew");
                    return d.on = !0, o.appendChild(d), u.skew = d, u.transform(f), u
                }, t._engine.setSize = function(e, r) {
                    var i = this.canvas.style;
                    return this.width = e, this.height = r, e == +e && (e += "px"), r == +r && (r += "px"), i.width = e, i.height = r, i.clip = "rect(0 " + e + " " + r + " 0)", this._viewBox && t._engine.setViewBox.apply(this, this._viewBox), this
                }, t._engine.setViewBox = function(e, r, i, n, a) {
                    t.eve("raphael.setViewBox", this, this._viewBox, [e, r, i, n, a]);
                    var s, o, l = this.getSize(),
                        h = l.width,
                        u = l.height;
                    return a && (o = h / i, i * (s = u / n) < h && (e -= (h - i * s) / 2 / s), n * o < u && (r -= (u - n * o) / 2 / o)), this._viewBox = [e, r, i, n, !!a], this._viewBoxShift = {
                        dx: -e,
                        dy: -r,
                        scale: l
                    }, this.forEach(function(t) {
                        t.transform("...")
                    }), this
                };
                var E;
                t._engine.initWin = function(t) {
                    var e = t.document;
                    e.styleSheets.length < 31 ? e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)") : e.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
                    try {
                        !e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), E = function(t) {
                            return e.createElement("<rvml:" + t + ' class="rvml">')
                        }
                    } catch (t) {
                        E = function(t) {
                            return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                        }
                    }
                }, t._engine.initWin(t._g.win), t._engine.create = function() {
                    var e = t._getContainer.apply(0, arguments),
                        r = e.container,
                        i = e.height,
                        n = e.width,
                        a = e.x,
                        s = e.y;
                    if (!r) throw new Error("VML container not found.");
                    var o = new t._Paper,
                        l = o.canvas = t._g.doc.createElement("div"),
                        h = l.style;
                    return a = a || 0, s = s || 0, n = n || 512, i = i || 342, o.width = n, o.height = i, n == +n && (n += "px"), i == +i && (i += "px"), o.coordsize = 216e5 + c + 216e5, o.coordorigin = "0 0", o.span = t._g.doc.createElement("span"), o.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", l.appendChild(o.span), h.cssText = t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", n, i), 1 == r ? (t._g.doc.body.appendChild(l), h.left = a + "px", h.top = s + "px", h.position = "absolute") : r.firstChild ? r.insertBefore(l, r.firstChild) : r.appendChild(l), o.renderfix = function() {}, o
                }, t.prototype.clear = function() {
                    t.eve("raphael.clear", this), this.canvas.innerHTML = f, this.span = t._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
                }, t.prototype.remove = function() {
                    t.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
                    for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
                    return !0
                };
                var M = t.st;
                for (var N in T) T[e](N) && !M[e](N) && (M[N] = function(t) {
                    return function() {
                        var e = arguments;
                        return this.forEach(function(r) {
                            r[t].apply(r, e)
                        })
                    }
                }(N))
            }
        }.apply(e, i)) && (t.exports = n)
    }])
});