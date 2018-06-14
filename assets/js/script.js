! function (e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function (k, e) {
	var t = [],
		S = k.document,
		d = t.slice,
		m = t.concat,
		a = t.push,
		o = t.indexOf,
		i = {},
		n = i.toString,
		f = i.hasOwnProperty,
		v = {},
		s = "2.2.3",
		C = function (e, t) {
			return new C.fn.init(e, t)
		},
		r = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		l = /^-ms-/,
		c = /-([\da-z])/gi,
		u = function (e, t) {
			return t.toUpperCase()
		};

	function h(e) {
		var t = !!e && "length" in e && e.length,
			i = C.type(e);
		return "function" !== i && !C.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}
	C.fn = C.prototype = {
		jquery: s,
		constructor: C,
		selector: "",
		length: 0,
		toArray: function () {
			return d.call(this)
		},
		get: function (e) {
			return null != e ? e < 0 ? this[e + this.length] : this[e] : d.call(this)
		},
		pushStack: function (e) {
			var t = C.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function (e) {
			return C.each(this, e)
		},
		map: function (i) {
			return this.pushStack(C.map(this, function (e, t) {
				return i.call(e, t, e)
			}))
		},
		slice: function () {
			return this.pushStack(d.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (e) {
			var t = this.length,
				i = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= i && i < t ? [this[i]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor()
		},
		push: a,
		sort: t.sort,
		splice: t.splice
	}, C.extend = C.fn.extend = function () {
		var e, t, i, n, o, s, r = arguments[0] || {},
			a = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || C.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
			if (null != (e = arguments[a]))
				for (t in e) i = r[t], r !== (n = e[t]) && (c && n && (C.isPlainObject(n) || (o = C.isArray(n))) ? (o ? (o = !1, s = i && C.isArray(i) ? i : []) : s = i && C.isPlainObject(i) ? i : {}, r[t] = C.extend(c, s, n)) : void 0 !== n && (r[t] = n));
		return r
	}, C.extend({
		expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (e) {
			throw new Error(e)
		},
		noop: function () {},
		isFunction: function (e) {
			return "function" === C.type(e)
		},
		isArray: Array.isArray,
		isWindow: function (e) {
			return null != e && e === e.window
		},
		isNumeric: function (e) {
			var t = e && e.toString();
			return !C.isArray(e) && 0 <= t - parseFloat(t) + 1
		},
		isPlainObject: function (e) {
			var t;
			if ("object" !== C.type(e) || e.nodeType || C.isWindow(e)) return !1;
			if (e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
			for (t in e);
			return void 0 === t || f.call(e, t)
		},
		isEmptyObject: function (e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		type: function (e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[n.call(e)] || "object" : typeof e
		},
		globalEval: function (e) {
			var t, i = eval;
			(e = C.trim(e)) && (1 === e.indexOf("use strict") ? ((t = S.createElement("script")).text = e, S.head.appendChild(t).parentNode.removeChild(t)) : i(e))
		},
		camelCase: function (e) {
			return e.replace(l, "ms-").replace(c, u)
		},
		nodeName: function (e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function (e, t) {
			var i, n = 0;
			if (h(e))
				for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
			else
				for (n in e)
					if (!1 === t.call(e[n], n, e[n])) break;
			return e
		},
		trim: function (e) {
			return null == e ? "" : (e + "").replace(r, "")
		},
		makeArray: function (e, t) {
			var i = t || [];
			return null != e && (h(Object(e)) ? C.merge(i, "string" == typeof e ? [e] : e) : a.call(i, e)), i
		},
		inArray: function (e, t, i) {
			return null == t ? -1 : o.call(t, e, i)
		},
		merge: function (e, t) {
			for (var i = +t.length, n = 0, o = e.length; n < i; n++) e[o++] = t[n];
			return e.length = o, e
		},
		grep: function (e, t, i) {
			for (var n = [], o = 0, s = e.length, r = !i; o < s; o++)!t(e[o], o) !== r && n.push(e[o]);
			return n
		},
		map: function (e, t, i) {
			var n, o, s = 0,
				r = [];
			if (h(e))
				for (n = e.length; s < n; s++) null != (o = t(e[s], s, i)) && r.push(o);
			else
				for (s in e) null != (o = t(e[s], s, i)) && r.push(o);
			return m.apply([], r)
		},
		guid: 1,
		proxy: function (e, t) {
			var i, n, o;
			if ("string" == typeof t && (i = e[t], t = e, e = i), C.isFunction(e)) return n = d.call(arguments, 2), (o = function () {
				return e.apply(t || this, n.concat(d.call(arguments)))
			}).guid = e.guid = e.guid || C.guid++, o
		},
		now: Date.now,
		support: v
	}), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
		i["[object " + t + "]"] = t.toLowerCase()
	});
	var p = function (i) {
		var e, f, b, s, o, m, u, v, x, l, c, T, k, r, S, g, a, d, y, C = "sizzle" + 1 * new Date,
			w = i.document,
			$ = 0,
			n = 0,
			h = se(),
			p = se(),
			E = se(),
			A = function (e, t) {
				return e === t && (c = !0), 0
			},
			P = 1 << 31,
			L = {}.hasOwnProperty,
			t = [],
			O = t.pop,
			H = t.push,
			D = t.push,
			M = t.slice,
			N = function (e, t) {
				for (var i = 0, n = e.length; i < n; i++)
					if (e[i] === t) return i;
				return -1
			},
			j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			I = "[\\x20\\t\\r\\n\\f]",
			q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			z = "\\[" + I + "*(" + q + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + I + "*\\]",
			W = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
			_ = new RegExp(I + "+", "g"),
			X = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
			R = new RegExp("^" + I + "*," + I + "*"),
			F = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
			Y = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
			B = new RegExp(W),
			V = new RegExp("^" + q + "$"),
			U = {
				ID: new RegExp("^#(" + q + ")"),
				CLASS: new RegExp("^\\.(" + q + ")"),
				TAG: new RegExp("^(" + q + "|[*])"),
				ATTR: new RegExp("^" + z),
				PSEUDO: new RegExp("^" + W),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + j + ")$", "i"),
				needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
			},
			Q = /^(?:input|select|textarea|button)$/i,
			K = /^h\d$/i,
			G = /^[^{]+\{\s*\[native \w/,
			J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			Z = /[+~]/,
			ee = /'|\\/g,
			te = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
			ie = function (e, t, i) {
				var n = "0x" + t - 65536;
				return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
			},
			ne = function () {
				T()
			};
		try {
			D.apply(t = M.call(w.childNodes), w.childNodes), t[w.childNodes.length].nodeType
		} catch (e) {
			D = {
				apply: t.length ? function (e, t) {
					H.apply(e, M.call(t))
				} : function (e, t) {
					for (var i = e.length, n = 0; e[i++] = t[n++];);
					e.length = i - 1
				}
			}
		}

		function oe(e, t, i, n) {
			var o, s, r, a, l, c, d, u, h = t && t.ownerDocument,
				p = t ? t.nodeType : 9;
			if (i = i || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return i;
			if (!n && ((t ? t.ownerDocument || t : w) !== k && T(t), t = t || k, S)) {
				if (11 !== p && (c = J.exec(e)))
					if (o = c[1]) {
						if (9 === p) {
							if (!(r = t.getElementById(o))) return i;
							if (r.id === o) return i.push(r), i
						} else if (h && (r = h.getElementById(o)) && y(t, r) && r.id === o) return i.push(r), i
					} else {
						if (c[2]) return D.apply(i, t.getElementsByTagName(e)), i;
						if ((o = c[3]) && f.getElementsByClassName && t.getElementsByClassName) return D.apply(i, t.getElementsByClassName(o)), i
					}
				if (f.qsa && !E[e + " "] && (!g || !g.test(e))) {
					if (1 !== p) h = t, u = e;
					else if ("object" !== t.nodeName.toLowerCase()) {
						for ((a = t.getAttribute("id")) ? a = a.replace(ee, "\\$&") : t.setAttribute("id", a = C), s = (d = m(e)).length, l = V.test(a) ? "#" + a : "[id='" + a + "']"; s--;) d[s] = l + " " + me(d[s]);
						u = d.join(","), h = Z.test(e) && pe(t.parentNode) || t
					}
					if (u) try {
						return D.apply(i, h.querySelectorAll(u)), i
					} catch (e) {} finally {
						a === C && t.removeAttribute("id")
					}
				}
			}
			return v(e.replace(X, "$1"), t, i, n)
		}

		function se() {
			var n = [];
			return function e(t, i) {
				return n.push(t + " ") > b.cacheLength && delete e[n.shift()], e[t + " "] = i
			}
		}

		function re(e) {
			return e[C] = !0, e
		}

		function ae(e) {
			var t = k.createElement("div");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function le(e, t) {
			for (var i = e.split("|"), n = i.length; n--;) b.attrHandle[i[n]] = t
		}

		function ce(e, t) {
			var i = t && e,
				n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || P) - (~e.sourceIndex || P);
			if (n) return n;
			if (i)
				for (; i = i.nextSibling;)
					if (i === t) return -1;
			return e ? 1 : -1
		}

		function de(t) {
			return function (e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}

		function ue(i) {
			return function (e) {
				var t = e.nodeName.toLowerCase();
				return ("input" === t || "button" === t) && e.type === i
			}
		}

		function he(r) {
			return re(function (s) {
				return s = +s, re(function (e, t) {
					for (var i, n = r([], e.length, s), o = n.length; o--;) e[i = n[o]] && (e[i] = !(t[i] = e[i]))
				})
			})
		}

		function pe(e) {
			return e && void 0 !== e.getElementsByTagName && e
		}
		for (e in f = oe.support = {}, o = oe.isXML = function (e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return !!t && "HTML" !== t.nodeName
		}, T = oe.setDocument = function (e) {
			var t, i, n = e ? e.ownerDocument || e : w;
			return n !== k && 9 === n.nodeType && n.documentElement && (r = (k = n).documentElement, S = !o(k), (i = k.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ne, !1) : i.attachEvent && i.attachEvent("onunload", ne)), f.attributes = ae(function (e) {
				return e.className = "i", !e.getAttribute("className")
			}), f.getElementsByTagName = ae(function (e) {
				return e.appendChild(k.createComment("")), !e.getElementsByTagName("*").length
			}), f.getElementsByClassName = G.test(k.getElementsByClassName), f.getById = ae(function (e) {
				return r.appendChild(e).id = C, !k.getElementsByName || !k.getElementsByName(C).length
			}), f.getById ? (b.find.ID = function (e, t) {
				if (void 0 !== t.getElementById && S) {
					var i = t.getElementById(e);
					return i ? [i] : []
				}
			}, b.filter.ID = function (e) {
				var t = e.replace(te, ie);
				return function (e) {
					return e.getAttribute("id") === t
				}
			}) : (delete b.find.ID, b.filter.ID = function (e) {
				var i = e.replace(te, ie);
				return function (e) {
					var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
					return t && t.value === i
				}
			}), b.find.TAG = f.getElementsByTagName ? function (e, t) {
				return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
			} : function (e, t) {
				var i, n = [],
					o = 0,
					s = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; i = s[o++];) 1 === i.nodeType && n.push(i);
					return n
				}
				return s
			}, b.find.CLASS = f.getElementsByClassName && function (e, t) {
				if (void 0 !== t.getElementsByClassName && S) return t.getElementsByClassName(e)
			}, a = [], g = [], (f.qsa = G.test(k.querySelectorAll)) && (ae(function (e) {
				r.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + I + "*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + C + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || g.push(".#.+[+~]")
			}), ae(function (e) {
				var t = k.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + I + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
			})), (f.matchesSelector = G.test(d = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && ae(function (e) {
				f.disconnectedMatch = d.call(e, "div"), d.call(e, "[s!='']:x"), a.push("!=", W)
			}), g = g.length && new RegExp(g.join("|")), a = a.length && new RegExp(a.join("|")), t = G.test(r.compareDocumentPosition), y = t || G.test(r.contains) ? function (e, t) {
				var i = 9 === e.nodeType ? e.documentElement : e,
					n = t && t.parentNode;
				return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
			} : function (e, t) {
				if (t)
					for (; t = t.parentNode;)
						if (t === e) return !0;
				return !1
			}, A = t ? function (e, t) {
				if (e === t) return c = !0, 0;
				var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === i ? e === k || e.ownerDocument === w && y(w, e) ? -1 : t === k || t.ownerDocument === w && y(w, t) ? 1 : l ? N(l, e) - N(l, t) : 0 : 4 & i ? -1 : 1)
			} : function (e, t) {
				if (e === t) return c = !0, 0;
				var i, n = 0,
					o = e.parentNode,
					s = t.parentNode,
					r = [e],
					a = [t];
				if (!o || !s) return e === k ? -1 : t === k ? 1 : o ? -1 : s ? 1 : l ? N(l, e) - N(l, t) : 0;
				if (o === s) return ce(e, t);
				for (i = e; i = i.parentNode;) r.unshift(i);
				for (i = t; i = i.parentNode;) a.unshift(i);
				for (; r[n] === a[n];) n++;
				return n ? ce(r[n], a[n]) : r[n] === w ? -1 : a[n] === w ? 1 : 0
			}), k
		}, oe.matches = function (e, t) {
			return oe(e, null, null, t)
		}, oe.matchesSelector = function (e, t) {
			if ((e.ownerDocument || e) !== k && T(e), t = t.replace(Y, "='$1']"), f.matchesSelector && S && !E[t + " "] && (!a || !a.test(t)) && (!g || !g.test(t))) try {
				var i = d.call(e, t);
				if (i || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
			} catch (e) {}
			return 0 < oe(t, k, null, [e]).length
		}, oe.contains = function (e, t) {
			return (e.ownerDocument || e) !== k && T(e), y(e, t)
		}, oe.attr = function (e, t) {
			(e.ownerDocument || e) !== k && T(e);
			var i = b.attrHandle[t.toLowerCase()],
				n = i && L.call(b.attrHandle, t.toLowerCase()) ? i(e, t, !S) : void 0;
			return void 0 !== n ? n : f.attributes || !S ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
		}, oe.error = function (e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, oe.uniqueSort = function (e) {
			var t, i = [],
				n = 0,
				o = 0;
			if (c = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(A), c) {
				for (; t = e[o++];) t === e[o] && (n = i.push(o));
				for (; n--;) e.splice(i[n], 1)
			}
			return l = null, e
		}, s = oe.getText = function (e) {
			var t, i = "",
				n = 0,
				o = e.nodeType;
			if (o) {
				if (1 === o || 9 === o || 11 === o) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) i += s(e)
				} else if (3 === o || 4 === o) return e.nodeValue
			} else
				for (; t = e[n++];) i += s(t);
			return i
		}, (b = oe.selectors = {
			cacheLength: 50,
			createPseudo: re,
			match: U,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function (e) {
					return e[1] = e[1].replace(te, ie), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function (e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
				},
				PSEUDO: function (e) {
					var t, i = !e[6] && e[2];
					return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && B.test(i) && (t = m(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function (e) {
					var t = e.replace(te, ie).toLowerCase();
					return "*" === e ? function () {
						return !0
					} : function (e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function (e) {
					var t = h[e + " "];
					return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && h(e, function (e) {
						return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function (i, n, o) {
					return function (e) {
						var t = oe.attr(e, i);
						return null == t ? "!=" === n : !n || (t += "", "=" === n ? t === o : "!=" === n ? t !== o : "^=" === n ? o && 0 === t.indexOf(o) : "*=" === n ? o && -1 < t.indexOf(o) : "$=" === n ? o && t.slice(-o.length) === o : "~=" === n ? -1 < (" " + t.replace(_, " ") + " ").indexOf(o) : "|=" === n && (t === o || t.slice(0, o.length + 1) === o + "-"))
					}
				},
				CHILD: function (f, e, t, m, v) {
					var g = "nth" !== f.slice(0, 3),
						y = "last" !== f.slice(-4),
						w = "of-type" === e;
					return 1 === m && 0 === v ? function (e) {
						return !!e.parentNode
					} : function (e, t, i) {
						var n, o, s, r, a, l, c = g !== y ? "nextSibling" : "previousSibling",
							d = e.parentNode,
							u = w && e.nodeName.toLowerCase(),
							h = !i && !w,
							p = !1;
						if (d) {
							if (g) {
								for (; c;) {
									for (r = e; r = r[c];)
										if (w ? r.nodeName.toLowerCase() === u : 1 === r.nodeType) return !1;
									l = c = "only" === f && !l && "nextSibling"
								}
								return !0
							}
							if (l = [y ? d.firstChild : d.lastChild], y && h) {
								for (p = (a = (n = (o = (s = (r = d)[C] || (r[C] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[f] || [])[0] === $ && n[1]) && n[2], r = a && d.childNodes[a]; r = ++a && r && r[c] || (p = a = 0) || l.pop();)
									if (1 === r.nodeType && ++p && r === e) {
										o[f] = [$, a, p];
										break
									}
							} else if (h && (p = a = (n = (o = (s = (r = e)[C] || (r[C] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[f] || [])[0] === $ && n[1]), !1 === p)
								for (;
									(r = ++a && r && r[c] || (p = a = 0) || l.pop()) && ((w ? r.nodeName.toLowerCase() !== u : 1 !== r.nodeType) || !++p || (h && ((o = (s = r[C] || (r[C] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[f] = [$, p]), r !== e)););
							return (p -= v) === m || p % m == 0 && 0 <= p / m
						}
					}
				},
				PSEUDO: function (e, s) {
					var t, r = b.pseudos[e] || b.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
					return r[C] ? r(s) : 1 < r.length ? (t = [e, e, "", s], b.setFilters.hasOwnProperty(e.toLowerCase()) ? re(function (e, t) {
						for (var i, n = r(e, s), o = n.length; o--;) e[i = N(e, n[o])] = !(t[i] = n[o])
					}) : function (e) {
						return r(e, 0, t)
					}) : r
				}
			},
			pseudos: {
				not: re(function (e) {
					var n = [],
						o = [],
						a = u(e.replace(X, "$1"));
					return a[C] ? re(function (e, t, i, n) {
						for (var o, s = a(e, null, n, []), r = e.length; r--;)(o = s[r]) && (e[r] = !(t[r] = o))
					}) : function (e, t, i) {
						return n[0] = e, a(n, null, i, o), n[0] = null, !o.pop()
					}
				}),
				has: re(function (t) {
					return function (e) {
						return 0 < oe(t, e).length
					}
				}),
				contains: re(function (t) {
					return t = t.replace(te, ie),
						function (e) {
							return -1 < (e.textContent || e.innerText || s(e)).indexOf(t)
						}
				}),
				lang: re(function (i) {
					return V.test(i || "") || oe.error("unsupported lang: " + i), i = i.replace(te, ie).toLowerCase(),
						function (e) {
							var t;
							do {
								if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
							} while ((e = e.parentNode) && 1 === e.nodeType);
							return !1
						}
				}),
				target: function (e) {
					var t = i.location && i.location.hash;
					return t && t.slice(1) === e.id
				},
				root: function (e) {
					return e === r
				},
				focus: function (e) {
					return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function (e) {
					return !1 === e.disabled
				},
				disabled: function (e) {
					return !0 === e.disabled
				},
				checked: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function (e) {
					return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
				},
				empty: function (e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function (e) {
					return !b.pseudos.empty(e)
				},
				header: function (e) {
					return K.test(e.nodeName)
				},
				input: function (e) {
					return Q.test(e.nodeName)
				},
				button: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function (e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: he(function () {
					return [0]
				}),
				last: he(function (e, t) {
					return [t - 1]
				}),
				eq: he(function (e, t, i) {
					return [i < 0 ? i + t : i]
				}),
				even: he(function (e, t) {
					for (var i = 0; i < t; i += 2) e.push(i);
					return e
				}),
				odd: he(function (e, t) {
					for (var i = 1; i < t; i += 2) e.push(i);
					return e
				}),
				lt: he(function (e, t, i) {
					for (var n = i < 0 ? i + t : i; 0 <= --n;) e.push(n);
					return e
				}),
				gt: he(function (e, t, i) {
					for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
					return e
				})
			}
		}).pseudos.nth = b.pseudos.eq, {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) b.pseudos[e] = de(e);
		for (e in {
			submit: !0,
			reset: !0
		}) b.pseudos[e] = ue(e);

		function fe() {}

		function me(e) {
			for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
			return n
		}

		function ve(a, e, t) {
			var l = e.dir,
				c = t && "parentNode" === l,
				d = n++;
			return e.first ? function (e, t, i) {
				for (; e = e[l];)
					if (1 === e.nodeType || c) return a(e, t, i)
			} : function (e, t, i) {
				var n, o, s, r = [$, d];
				if (i) {
					for (; e = e[l];)
						if ((1 === e.nodeType || c) && a(e, t, i)) return !0
				} else
					for (; e = e[l];)
						if (1 === e.nodeType || c) {
							if ((n = (o = (s = e[C] || (e[C] = {}))[e.uniqueID] || (s[e.uniqueID] = {}))[l]) && n[0] === $ && n[1] === d) return r[2] = n[2];
							if ((o[l] = r)[2] = a(e, t, i)) return !0
						}
			}
		}

		function ge(o) {
			return 1 < o.length ? function (e, t, i) {
				for (var n = o.length; n--;)
					if (!o[n](e, t, i)) return !1;
				return !0
			} : o[0]
		}

		function ye(e, t, i, n, o) {
			for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)(s = e[a]) && (i && !i(s, n, o) || (r.push(s), c && t.push(a)));
			return r
		}

		function we(p, f, m, v, g, e) {
			return v && !v[C] && (v = we(v)), g && !g[C] && (g = we(g, e)), re(function (e, t, i, n) {
				var o, s, r, a = [],
					l = [],
					c = t.length,
					d = e || function (e, t, i) {
						for (var n = 0, o = t.length; n < o; n++) oe(e, t[n], i);
						return i
					}(f || "*", i.nodeType ? [i] : i, []),
					u = !p || !e && f ? d : ye(d, a, p, i, n),
					h = m ? g || (e ? p : c || v) ? [] : t : u;
				if (m && m(u, h, i, n), v)
					for (o = ye(h, l), v(o, [], i, n), s = o.length; s--;)(r = o[s]) && (h[l[s]] = !(u[l[s]] = r));
				if (e) {
					if (g || p) {
						if (g) {
							for (o = [], s = h.length; s--;)(r = h[s]) && o.push(u[s] = r);
							g(null, h = [], o, n)
						}
						for (s = h.length; s--;)(r = h[s]) && -1 < (o = g ? N(e, r) : a[s]) && (e[o] = !(t[o] = r))
					}
				} else h = ye(h === t ? h.splice(c, h.length) : h), g ? g(null, t, h, n) : D.apply(t, h)
			})
		}

		function be(e) {
			for (var o, t, i, n = e.length, s = b.relative[e[0].type], r = s || b.relative[" "], a = s ? 1 : 0, l = ve(function (e) {
				return e === o
			}, r, !0), c = ve(function (e) {
				return -1 < N(o, e)
			}, r, !0), d = [
				function (e, t, i) {
					var n = !s && (i || t !== x) || ((o = t).nodeType ? l(e, t, i) : c(e, t, i));
					return o = null, n
				}
			]; a < n; a++)
				if (t = b.relative[e[a].type]) d = [ve(ge(d), t)];
				else {
					if ((t = b.filter[e[a].type].apply(null, e[a].matches))[C]) {
						for (i = ++a; i < n && !b.relative[e[i].type]; i++);
						return we(1 < a && ge(d), 1 < a && me(e.slice(0, a - 1).concat({
							value: " " === e[a - 2].type ? "*" : ""
						})).replace(X, "$1"), t, a < i && be(e.slice(a, i)), i < n && be(e = e.slice(i)), i < n && me(e))
					}
					d.push(t)
				}
			return ge(d)
		}
		return fe.prototype = b.filters = b.pseudos, b.setFilters = new fe, m = oe.tokenize = function (e, t) {
			var i, n, o, s, r, a, l, c = p[e + " "];
			if (c) return t ? 0 : c.slice(0);
			for (r = e, a = [], l = b.preFilter; r;) {
				for (s in i && !(n = R.exec(r)) || (n && (r = r.slice(n[0].length) || r), a.push(o = [])), i = !1, (n = F.exec(r)) && (i = n.shift(), o.push({
					value: i,
					type: n[0].replace(X, " ")
				}), r = r.slice(i.length)), b.filter)!(n = U[s].exec(r)) || l[s] && !(n = l[s](n)) || (i = n.shift(), o.push({
					value: i,
					type: s,
					matches: n
				}), r = r.slice(i.length));
				if (!i) break
			}
			return t ? r.length : r ? oe.error(e) : p(e, a).slice(0)
		}, u = oe.compile = function (e, t) {
			var i, v, g, y, w, n, o = [],
				s = [],
				r = E[e + " "];
			if (!r) {
				for (t || (t = m(e)), i = t.length; i--;)(r = be(t[i]))[C] ? o.push(r) : s.push(r);
				(r = E(e, (v = s, y = 0 < (g = o).length, w = 0 < v.length, n = function (e, t, i, n, o) {
					var s, r, a, l = 0,
						c = "0",
						d = e && [],
						u = [],
						h = x,
						p = e || w && b.find.TAG("*", o),
						f = $ += null == h ? 1 : Math.random() || .1,
						m = p.length;
					for (o && (x = t === k || t || o); c !== m && null != (s = p[c]); c++) {
						if (w && s) {
							for (r = 0, t || s.ownerDocument === k || (T(s), i = !S); a = v[r++];)
								if (a(s, t || k, i)) {
									n.push(s);
									break
								}
							o && ($ = f)
						}
						y && ((s = !a && s) && l--, e && d.push(s))
					}
					if (l += c, y && c !== l) {
						for (r = 0; a = g[r++];) a(d, u, t, i);
						if (e) {
							if (0 < l)
								for (; c--;) d[c] || u[c] || (u[c] = O.call(n));
							u = ye(u)
						}
						D.apply(n, u), o && !e && 0 < u.length && 1 < l + g.length && oe.uniqueSort(n)
					}
					return o && ($ = f, x = h), d
				}, y ? re(n) : n))).selector = e
			}
			return r
		}, v = oe.select = function (e, t, i, n) {
			var o, s, r, a, l, c = "function" == typeof e && e,
				d = !n && m(e = c.selector || e);
			if (i = i || [], 1 === d.length) {
				if (2 < (s = d[0] = d[0].slice(0)).length && "ID" === (r = s[0]).type && f.getById && 9 === t.nodeType && S && b.relative[s[1].type]) {
					if (!(t = (b.find.ID(r.matches[0].replace(te, ie), t) || [])[0])) return i;
					c && (t = t.parentNode), e = e.slice(s.shift().value.length)
				}
				for (o = U.needsContext.test(e) ? 0 : s.length; o-- && (r = s[o], !b.relative[a = r.type]);)
					if ((l = b.find[a]) && (n = l(r.matches[0].replace(te, ie), Z.test(s[0].type) && pe(t.parentNode) || t))) {
						if (s.splice(o, 1), !(e = n.length && me(s))) return D.apply(i, n), i;
						break
					}
			}
			return (c || u(e, d))(n, t, !S, i, !t || Z.test(e) && pe(t.parentNode) || t), i
		}, f.sortStable = C.split("").sort(A).join("") === C, f.detectDuplicates = !!c, T(), f.sortDetached = ae(function (e) {
			return 1 & e.compareDocumentPosition(k.createElement("div"))
		}), ae(function (e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || le("type|href|height|width", function (e, t, i) {
			if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), f.attributes && ae(function (e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || le("value", function (e, t, i) {
			if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), ae(function (e) {
			return null == e.getAttribute("disabled")
		}) || le(j, function (e, t, i) {
			var n;
			if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
		}), oe
	}(k);
	C.find = p, C.expr = p.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = p.uniqueSort, C.text = p.getText, C.isXMLDoc = p.isXML, C.contains = p.contains;
	var g = function (e, t, i) {
			for (var n = [], o = void 0 !== i;
				(e = e[t]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (o && C(e).is(i)) break;
					n.push(e)
				}
			return n
		},
		y = function (e, t) {
			for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
			return i
		},
		w = C.expr.match.needsContext,
		b = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		x = /^.[^:#\[\.,]*$/;

	function T(e, i, n) {
		if (C.isFunction(i)) return C.grep(e, function (e, t) {
			return !!i.call(e, t, e) !== n
		});
		if (i.nodeType) return C.grep(e, function (e) {
			return e === i !== n
		});
		if ("string" == typeof i) {
			if (x.test(i)) return C.filter(i, e, n);
			i = C.filter(i, e)
		}
		return C.grep(e, function (e) {
			return -1 < o.call(i, e) !== n
		})
	}
	C.filter = function (e, t, i) {
		var n = t[0];
		return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? C.find.matchesSelector(n, e) ? [n] : [] : C.find.matches(e, C.grep(t, function (e) {
			return 1 === e.nodeType
		}))
	}, C.fn.extend({
		find: function (e) {
			var t, i = this.length,
				n = [],
				o = this;
			if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
				for (t = 0; t < i; t++)
					if (C.contains(o[t], this)) return !0
			}));
			for (t = 0; t < i; t++) C.find(e, o[t], n);
			return (n = this.pushStack(1 < i ? C.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
		},
		filter: function (e) {
			return this.pushStack(T(this, e || [], !1))
		},
		not: function (e) {
			return this.pushStack(T(this, e || [], !0))
		},
		is: function (e) {
			return !!T(this, "string" == typeof e && w.test(e) ? C(e) : e || [], !1).length
		}
	});
	var $, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
	(C.fn.init = function (e, t, i) {
		var n, o;
		if (!e) return this;
		if (i = i || $, "string" == typeof e) {
			if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : E.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
			if (n[1]) {
				if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), b.test(n[1]) && C.isPlainObject(t))
					for (n in t) C.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
				return this
			}
			return (o = S.getElementById(n[2])) && o.parentNode && (this.length = 1, this[0] = o), this.context = S, this.selector = e, this
		}
		return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : C.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(C) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), C.makeArray(e, this))
	}).prototype = C.fn, $ = C(S);
	var A = /^(?:parents|prev(?:Until|All))/,
		P = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function L(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}
	C.fn.extend({
		has: function (e) {
			var t = C(e, this),
				i = t.length;
			return this.filter(function () {
				for (var e = 0; e < i; e++)
					if (C.contains(this, t[e])) return !0
			})
		},
		closest: function (e, t) {
			for (var i, n = 0, o = this.length, s = [], r = w.test(e) || "string" != typeof e ? C(e, t || this.context) : 0; n < o; n++)
				for (i = this[n]; i && i !== t; i = i.parentNode)
					if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && C.find.matchesSelector(i, e))) {
						s.push(i);
						break
					}
			return this.pushStack(1 < s.length ? C.uniqueSort(s) : s)
		},
		index: function (e) {
			return e ? "string" == typeof e ? o.call(C(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (e, t) {
			return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
		},
		addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), C.each({
		parent: function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function (e) {
			return g(e, "parentNode")
		},
		parentsUntil: function (e, t, i) {
			return g(e, "parentNode", i)
		},
		next: function (e) {
			return L(e, "nextSibling")
		},
		prev: function (e) {
			return L(e, "previousSibling")
		},
		nextAll: function (e) {
			return g(e, "nextSibling")
		},
		prevAll: function (e) {
			return g(e, "previousSibling")
		},
		nextUntil: function (e, t, i) {
			return g(e, "nextSibling", i)
		},
		prevUntil: function (e, t, i) {
			return g(e, "previousSibling", i)
		},
		siblings: function (e) {
			return y((e.parentNode || {}).firstChild, e)
		},
		children: function (e) {
			return y(e.firstChild)
		},
		contents: function (e) {
			return e.contentDocument || C.merge([], e.childNodes)
		}
	}, function (n, o) {
		C.fn[n] = function (e, t) {
			var i = C.map(this, o, e);
			return "Until" !== n.slice(-5) && (t = e), t && "string" == typeof t && (i = C.filter(t, i)), 1 < this.length && (P[n] || C.uniqueSort(i), A.test(n) && i.reverse()), this.pushStack(i)
		}
	});
	var O, H = /\S+/g;

	function D() {
		S.removeEventListener("DOMContentLoaded", D), k.removeEventListener("load", D), C.ready()
	}
	C.Callbacks = function (n) {
		var e, i;
		n = "string" == typeof n ? (e = n, i = {}, C.each(e.match(H) || [], function (e, t) {
			i[t] = !0
		}), i) : C.extend({}, n);
		var o, t, s, r, a = [],
			l = [],
			c = -1,
			d = function () {
				for (r = n.once, s = o = !0; l.length; c = -1)
					for (t = l.shift(); ++c < a.length;)!1 === a[c].apply(t[0], t[1]) && n.stopOnFalse && (c = a.length, t = !1);
				n.memory || (t = !1), o = !1, r && (a = t ? [] : "")
			},
			u = {
				add: function () {
					return a && (t && !o && (c = a.length - 1, l.push(t)), function i(e) {
						C.each(e, function (e, t) {
							C.isFunction(t) ? n.unique && u.has(t) || a.push(t) : t && t.length && "string" !== C.type(t) && i(t)
						})
					}(arguments), t && !o && d()), this
				},
				remove: function () {
					return C.each(arguments, function (e, t) {
						for (var i; - 1 < (i = C.inArray(t, a, i));) a.splice(i, 1), i <= c && c--
					}), this
				},
				has: function (e) {
					return e ? -1 < C.inArray(e, a) : 0 < a.length
				},
				empty: function () {
					return a && (a = []), this
				},
				disable: function () {
					return r = l = [], a = t = "", this
				},
				disabled: function () {
					return !a
				},
				lock: function () {
					return r = l = [], t || (a = t = ""), this
				},
				locked: function () {
					return !!r
				},
				fireWith: function (e, t) {
					return r || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || d()), this
				},
				fire: function () {
					return u.fireWith(this, arguments), this
				},
				fired: function () {
					return !!s
				}
			};
		return u
	}, C.extend({
		Deferred: function (e) {
			var s = [
					["resolve", "done", C.Callbacks("once memory"), "resolved"],
					["reject", "fail", C.Callbacks("once memory"), "rejected"],
					["notify", "progress", C.Callbacks("memory")]
				],
				o = "pending",
				r = {
					state: function () {
						return o
					},
					always: function () {
						return a.done(arguments).fail(arguments), this
					},
					then: function () {
						var o = arguments;
						return C.Deferred(function (n) {
							C.each(s, function (e, t) {
								var i = C.isFunction(o[e]) && o[e];
								a[t[1]](function () {
									var e = i && i.apply(this, arguments);
									e && C.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[t[0] + "With"](this === r ? n.promise() : this, i ? [e] : arguments)
								})
							}), o = null
						}).promise()
					},
					promise: function (e) {
						return null != e ? C.extend(e, r) : r
					}
				},
				a = {};
			return r.pipe = r.then, C.each(s, function (e, t) {
				var i = t[2],
					n = t[3];
				r[t[1]] = i.add, n && i.add(function () {
					o = n
				}, s[1 ^ e][2].disable, s[2][2].lock), a[t[0]] = function () {
					return a[t[0] + "With"](this === a ? r : this, arguments), this
				}, a[t[0] + "With"] = i.fireWith
			}), r.promise(a), e && e.call(a, a), a
		},
		when: function (e) {
			var o, t, i, n = 0,
				s = d.call(arguments),
				r = s.length,
				a = 1 !== r || e && C.isFunction(e.promise) ? r : 0,
				l = 1 === a ? e : C.Deferred(),
				c = function (t, i, n) {
					return function (e) {
						i[t] = this, n[t] = 1 < arguments.length ? d.call(arguments) : e, n === o ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
					}
				};
			if (1 < r)
				for (o = new Array(r), t = new Array(r), i = new Array(r); n < r; n++) s[n] && C.isFunction(s[n].promise) ? s[n].promise().progress(c(n, t, o)).done(c(n, i, s)).fail(l.reject) : --a;
			return a || l.resolveWith(i, s), l.promise()
		}
	}), C.fn.ready = function (e) {
		return C.ready.promise().done(e), this
	}, C.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function (e) {
			e ? C.readyWait++ : C.ready(!0)
		},
		ready: function (e) {
			(!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || (O.resolveWith(S, [C]), C.fn.triggerHandler && (C(S).triggerHandler("ready"), C(S).off("ready")))
		}
	}), C.ready.promise = function (e) {
		return O || (O = C.Deferred(), "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? k.setTimeout(C.ready) : (S.addEventListener("DOMContentLoaded", D), k.addEventListener("load", D))), O.promise(e)
	}, C.ready.promise();
	var M = function (e, t, i, n, o, s, r) {
			var a = 0,
				l = e.length,
				c = null == i;
			if ("object" === C.type(i))
				for (a in o = !0, i) M(e, t, a, i[a], !0, s, r);
			else if (void 0 !== n && (o = !0, C.isFunction(n) || (r = !0), c && (r ? (t.call(e, n), t = null) : (c = t, t = function (e, t, i) {
				return c.call(C(e), i)
			})), t))
				for (; a < l; a++) t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
			return o ? e : c ? t.call(e) : l ? t(e[0], i) : s
		},
		N = function (e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		};

	function j() {
		this.expando = C.expando + j.uid++
	}
	j.uid = 1, j.prototype = {
		register: function (e, t) {
			var i = t || {};
			return e.nodeType ? e[this.expando] = i : Object.defineProperty(e, this.expando, {
				value: i,
				writable: !0,
				configurable: !0
			}), e[this.expando]
		},
		cache: function (e) {
			if (!N(e)) return {};
			var t = e[this.expando];
			return t || (t = {}, N(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function (e, t, i) {
			var n, o = this.cache(e);
			if ("string" == typeof t) o[t] = i;
			else
				for (n in t) o[n] = t[n];
			return o
		},
		get: function (e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
		},
		access: function (e, t, i) {
			var n;
			return void 0 === t || t && "string" == typeof t && void 0 === i ? void 0 !== (n = this.get(e, t)) ? n : this.get(e, C.camelCase(t)) : (this.set(e, t, i), void 0 !== i ? i : t)
		},
		remove: function (e, t) {
			var i, n, o, s = e[this.expando];
			if (void 0 !== s) {
				if (void 0 === t) this.register(e);
				else {
					C.isArray(t) ? n = t.concat(t.map(C.camelCase)) : (o = C.camelCase(t), n = t in s ? [t, o] : (n = o) in s ? [n] : n.match(H) || []), i = n.length;
					for (; i--;) delete s[n[i]]
				}(void 0 === t || C.isEmptyObject(s)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function (e) {
			var t = e[this.expando];
			return void 0 !== t && !C.isEmptyObject(t)
		}
	};
	var I = new j,
		q = new j,
		z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		W = /[A-Z]/g;

	function _(e, t, i) {
		var n;
		if (void 0 === i && 1 === e.nodeType)
			if (n = "data-" + t.replace(W, "-$&").toLowerCase(), "string" == typeof (i = e.getAttribute(n))) {
				try {
					i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : z.test(i) ? C.parseJSON(i) : i)
				} catch (e) {}
				q.set(e, t, i)
			} else i = void 0;
		return i
	}
	C.extend({
		hasData: function (e) {
			return q.hasData(e) || I.hasData(e)
		},
		data: function (e, t, i) {
			return q.access(e, t, i)
		},
		removeData: function (e, t) {
			q.remove(e, t)
		},
		_data: function (e, t, i) {
			return I.access(e, t, i)
		},
		_removeData: function (e, t) {
			I.remove(e, t)
		}
	}), C.fn.extend({
		data: function (n, e) {
			var t, i, o, s = this[0],
				r = s && s.attributes;
			if (void 0 === n) {
				if (this.length && (o = q.get(s), 1 === s.nodeType && !I.get(s, "hasDataAttrs"))) {
					for (t = r.length; t--;) r[t] && 0 === (i = r[t].name).indexOf("data-") && (i = C.camelCase(i.slice(5)), _(s, i, o[i]));
					I.set(s, "hasDataAttrs", !0)
				}
				return o
			}
			return "object" == typeof n ? this.each(function () {
				q.set(this, n)
			}) : M(this, function (t) {
				var e, i;
				if (s && void 0 === t) return void 0 !== (e = q.get(s, n) || q.get(s, n.replace(W, "-$&").toLowerCase())) ? e : (i = C.camelCase(n), void 0 !== (e = q.get(s, i)) ? e : void 0 !== (e = _(s, i, void 0)) ? e : void 0);
				i = C.camelCase(n), this.each(function () {
					var e = q.get(this, i);
					q.set(this, i, t), -1 < n.indexOf("-") && void 0 !== e && q.set(this, n, t)
				})
			}, null, e, 1 < arguments.length, null, !0)
		},
		removeData: function (e) {
			return this.each(function () {
				q.remove(this, e)
			})
		}
	}), C.extend({
		queue: function (e, t, i) {
			var n;
			if (e) return t = (t || "fx") + "queue", n = I.get(e, t), i && (!n || C.isArray(i) ? n = I.access(e, t, C.makeArray(i)) : n.push(i)), n || []
		},
		dequeue: function (e, t) {
			t = t || "fx";
			var i = C.queue(e, t),
				n = i.length,
				o = i.shift(),
				s = C._queueHooks(e, t);
			"inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete s.stop, o.call(e, function () {
				C.dequeue(e, t)
			}, s)), !n && s && s.empty.fire()
		},
		_queueHooks: function (e, t) {
			var i = t + "queueHooks";
			return I.get(e, i) || I.access(e, i, {
				empty: C.Callbacks("once memory").add(function () {
					I.remove(e, [t + "queue", i])
				})
			})
		}
	}), C.fn.extend({
		queue: function (t, i) {
			var e = 2;
			return "string" != typeof t && (i = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === i ? this : this.each(function () {
				var e = C.queue(this, t, i);
				C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
			})
		},
		dequeue: function (e) {
			return this.each(function () {
				C.dequeue(this, e)
			})
		},
		clearQueue: function (e) {
			return this.queue(e || "fx", [])
		},
		promise: function (e, t) {
			var i, n = 1,
				o = C.Deferred(),
				s = this,
				r = this.length,
				a = function () {
					--n || o.resolveWith(s, [s])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(i = I.get(s[r], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
			return a(), o.promise(t)
		}
	});
	var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		R = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
		F = ["Top", "Right", "Bottom", "Left"],
		Y = function (e, t) {
			return e = t || e, "none" === C.css(e, "display") || !C.contains(e.ownerDocument, e)
		};

	function B(e, t, i, n) {
		var o, s = 1,
			r = 20,
			a = n ? function () {
				return n.cur()
			} : function () {
				return C.css(e, t, "")
			},
			l = a(),
			c = i && i[3] || (C.cssNumber[t] ? "" : "px"),
			d = (C.cssNumber[t] || "px" !== c && +l) && R.exec(C.css(e, t));
		if (d && d[3] !== c)
			for (c = c || d[3], i = i || [], d = +l || 1; d /= s = s || ".5", C.style(e, t, d + c), s !== (s = a() / l) && 1 !== s && --r;);
		return i && (d = +d || +l || 0, o = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = o)), o
	}
	var V = /^(?:checkbox|radio)$/i,
		U = /<([\w:-]+)/,
		Q = /^$|\/(?:java|ecma)script/i,
		K = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};

	function G(e, t) {
		var i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return void 0 === t || t && C.nodeName(e, t) ? C.merge([e], i) : i
	}

	function J(e, t) {
		for (var i = 0, n = e.length; i < n; i++) I.set(e[i], "globalEval", !t || I.get(t[i], "globalEval"))
	}
	K.optgroup = K.option, K.tbody = K.tfoot = K.colgroup = K.caption = K.thead, K.th = K.td;
	var Z, ee, te = /<|&#?\w+;/;

	function ie(e, t, i, n, o) {
		for (var s, r, a, l, c, d, u = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
			if ((s = e[p]) || 0 === s)
				if ("object" === C.type(s)) C.merge(h, s.nodeType ? [s] : s);
				else if (te.test(s)) {
			for (r = r || u.appendChild(t.createElement("div")), a = (U.exec(s) || ["", ""])[1].toLowerCase(), l = K[a] || K._default, r.innerHTML = l[1] + C.htmlPrefilter(s) + l[2], d = l[0]; d--;) r = r.lastChild;
			C.merge(h, r.childNodes), (r = u.firstChild).textContent = ""
		} else h.push(t.createTextNode(s));
		for (u.textContent = "", p = 0; s = h[p++];)
			if (n && -1 < C.inArray(s, n)) o && o.push(s);
			else if (c = C.contains(s.ownerDocument, s), r = G(u.appendChild(s), "script"), c && J(r), i)
			for (d = 0; s = r[d++];) Q.test(s.type || "") && i.push(s);
		return u
	}
	Z = S.createDocumentFragment().appendChild(S.createElement("div")), (ee = S.createElement("input")).setAttribute("type", "radio"), ee.setAttribute("checked", "checked"), ee.setAttribute("name", "t"), Z.appendChild(ee), v.checkClone = Z.cloneNode(!0).cloneNode(!0).lastChild.checked, Z.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!Z.cloneNode(!0).lastChild.defaultValue;
	var ne = /^key/,
		oe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		se = /^([^.]*)(?:\.(.+)|)/;

	function re() {
		return !0
	}

	function ae() {
		return !1
	}

	function le() {
		try {
			return S.activeElement
		} catch (e) {}
	}

	function ce(e, t, i, n, o, s) {
		var r, a;
		if ("object" == typeof t) {
			for (a in "string" != typeof i && (n = n || i, i = void 0), t) ce(e, a, i, n, t[a], s);
			return e
		}
		if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = ae;
		else if (!o) return e;
		return 1 === s && (r = o, (o = function (e) {
			return C().off(e), r.apply(this, arguments)
		}).guid = r.guid || (r.guid = C.guid++)), e.each(function () {
			C.event.add(this, t, o, n, i)
		})
	}
	C.event = {
		global: {},
		add: function (t, e, i, n, o) {
			var s, r, a, l, c, d, u, h, p, f, m, v = I.get(t);
			if (v)
				for (i.handler && (i = (s = i).handler, o = s.selector), i.guid || (i.guid = C.guid++), (l = v.events) || (l = v.events = {}), (r = v.handle) || (r = v.handle = function (e) {
					return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
				}), c = (e = (e || "").match(H) || [""]).length; c--;) p = m = (a = se.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (u = C.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = C.event.special[p] || {}, d = C.extend({
					type: p,
					origType: m,
					data: n,
					handler: i,
					guid: i.guid,
					selector: o,
					needsContext: o && C.expr.match.needsContext.test(o),
					namespace: f.join(".")
				}, s), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, f, r) || t.addEventListener && t.addEventListener(p, r)), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), C.event.global[p] = !0)
		},
		remove: function (e, t, i, n, o) {
			var s, r, a, l, c, d, u, h, p, f, m, v = I.hasData(e) && I.get(e);
			if (v && (l = v.events)) {
				for (c = (t = (t || "").match(H) || [""]).length; c--;)
					if (p = m = (a = se.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
						for (u = C.event.special[p] || {}, h = l[p = (n ? u.delegateType : u.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = h.length; s--;) d = h[s], !o && m !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (h.splice(s, 1), d.selector && h.delegateCount--, u.remove && u.remove.call(e, d));
						r && !h.length && (u.teardown && !1 !== u.teardown.call(e, f, v.handle) || C.removeEvent(e, p, v.handle), delete l[p])
					} else
						for (p in l) C.event.remove(e, p + t[c], i, n, !0);
				C.isEmptyObject(l) && I.remove(e, "handle events")
			}
		},
		dispatch: function (e) {
			e = C.event.fix(e);
			var t, i, n, o, s, r, a = d.call(arguments),
				l = (I.get(this, "events") || {})[e.type] || [],
				c = C.event.special[e.type] || {};
			if ((a[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
				for (r = C.event.handlers.call(this, e, l), t = 0;
					(o = r[t++]) && !e.isPropagationStopped();)
					for (e.currentTarget = o.elem, i = 0;
						(s = o.handlers[i++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, void 0 !== (n = ((C.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, e), e.result
			}
		},
		handlers: function (e, t) {
			var i, n, o, s, r = [],
				a = t.delegateCount,
				l = e.target;
			if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
						for (n = [], i = 0; i < a; i++) void 0 === n[o = (s = t[i]).selector + " "] && (n[o] = s.needsContext ? -1 < C(o, this).index(l) : C.find(o, this, null, [l]).length), n[o] && n.push(s);
						n.length && r.push({
							elem: l,
							handlers: n
						})
					}
			return a < t.length && r.push({
				elem: this,
				handlers: t.slice(a)
			}), r
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (e, t) {
				var i, n, o, s = t.button;
				return null == e.pageX && null != t.clientX && (n = (i = e.target.ownerDocument || S).documentElement, o = i.body, e.pageX = t.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
			}
		},
		fix: function (e) {
			if (e[C.expando]) return e;
			var t, i, n, o = e.type,
				s = e,
				r = this.fixHooks[o];
			for (r || (this.fixHooks[o] = r = oe.test(o) ? this.mouseHooks : ne.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, e = new C.Event(s), t = n.length; t--;) e[i = n[t]] = s[i];
			return e.target || (e.target = S), 3 === e.target.nodeType && (e.target = e.target.parentNode), r.filter ? r.filter(e, s) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					if (this !== le() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					if (this === le() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					if ("checkbox" === this.type && this.click && C.nodeName(this, "input")) return this.click(), !1
				},
				_default: function (e) {
					return C.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, C.removeEvent = function (e, t, i) {
		e.removeEventListener && e.removeEventListener(t, i)
	}, C.Event = function (e, t) {
		if (!(this instanceof C.Event)) return new C.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? re : ae) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || C.now(), this[C.expando] = !0
	}, C.Event.prototype = {
		constructor: C.Event,
		isDefaultPrevented: ae,
		isPropagationStopped: ae,
		isImmediatePropagationStopped: ae,
		preventDefault: function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = re, e && e.preventDefault()
		},
		stopPropagation: function () {
			var e = this.originalEvent;
			this.isPropagationStopped = re, e && e.stopPropagation()
		},
		stopImmediatePropagation: function () {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = re, e && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, C.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (e, o) {
		C.event.special[e] = {
			delegateType: o,
			bindType: o,
			handle: function (e) {
				var t, i = e.relatedTarget,
					n = e.handleObj;
				return i && (i === this || C.contains(this, i)) || (e.type = n.origType, t = n.handler.apply(this, arguments), e.type = o), t
			}
		}
	}), C.fn.extend({
		on: function (e, t, i, n) {
			return ce(this, e, t, i, n)
		},
		one: function (e, t, i, n) {
			return ce(this, e, t, i, n, 1)
		},
		off: function (e, t, i) {
			var n, o;
			if (e && e.preventDefault && e.handleObj) return n = e.handleObj, C(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
			if ("object" == typeof e) {
				for (o in e) this.off(o, t, e[o]);
				return this
			}
			return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = ae), this.each(function () {
				C.event.remove(this, e, i, t)
			})
		}
	});
	var de = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		ue = /<script|<style|<link/i,
		he = /checked\s*(?:[^=]|=\s*.checked.)/i,
		pe = /^true\/(.*)/,
		fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function me(e, t) {
		return C.nodeName(e, "table") && C.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function ve(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function ge(e) {
		var t = pe.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function ye(e, t) {
		var i, n, o, s, r, a, l, c;
		if (1 === t.nodeType) {
			if (I.hasData(e) && (s = I.access(e), r = I.set(t, s), c = s.events))
				for (o in delete r.handle, r.events = {}, c)
					for (i = 0, n = c[o].length; i < n; i++) C.event.add(t, o, c[o][i]);
			q.hasData(e) && (a = q.access(e), l = C.extend({}, a), q.set(t, l))
		}
	}

	function we(i, n, o, s) {
		n = m.apply([], n);
		var e, t, r, a, l, c, d = 0,
			u = i.length,
			h = u - 1,
			p = n[0],
			f = C.isFunction(p);
		if (f || 1 < u && "string" == typeof p && !v.checkClone && he.test(p)) return i.each(function (e) {
			var t = i.eq(e);
			f && (n[0] = p.call(this, e, t.html())), we(t, n, o, s)
		});
		if (u && (t = (e = ie(n, i[0].ownerDocument, !1, i, s)).firstChild, 1 === e.childNodes.length && (e = t), t || s)) {
			for (a = (r = C.map(G(e, "script"), ve)).length; d < u; d++) l = e, d !== h && (l = C.clone(l, !0, !0), a && C.merge(r, G(l, "script"))), o.call(i[d], l, d);
			if (a)
				for (c = r[r.length - 1].ownerDocument, C.map(r, ge), d = 0; d < a; d++) l = r[d], Q.test(l.type || "") && !I.access(l, "globalEval") && C.contains(c, l) && (l.src ? C._evalUrl && C._evalUrl(l.src) : C.globalEval(l.textContent.replace(fe, "")))
		}
		return i
	}

	function be(e, t, i) {
		for (var n, o = t ? C.filter(t, e) : e, s = 0; null != (n = o[s]); s++) i || 1 !== n.nodeType || C.cleanData(G(n)), n.parentNode && (i && C.contains(n.ownerDocument, n) && J(G(n, "script")), n.parentNode.removeChild(n));
		return e
	}
	C.extend({
		htmlPrefilter: function (e) {
			return e.replace(de, "<$1></$2>")
		},
		clone: function (e, t, i) {
			var n, o, s, r, a, l, c, d = e.cloneNode(!0),
				u = C.contains(e.ownerDocument, e);
			if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
				for (r = G(d), n = 0, o = (s = G(e)).length; n < o; n++) a = s[n], l = r[n], void 0, "input" === (c = l.nodeName.toLowerCase()) && V.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
			if (t)
				if (i)
					for (s = s || G(e), r = r || G(d), n = 0, o = s.length; n < o; n++) ye(s[n], r[n]);
				else ye(e, d);
			return 0 < (r = G(d, "script")).length && J(r, !u && G(e, "script")), d
		},
		cleanData: function (e) {
			for (var t, i, n, o = C.event.special, s = 0; void 0 !== (i = e[s]); s++)
				if (N(i)) {
					if (t = i[I.expando]) {
						if (t.events)
							for (n in t.events) o[n] ? C.event.remove(i, n) : C.removeEvent(i, n, t.handle);
						i[I.expando] = void 0
					}
					i[q.expando] && (i[q.expando] = void 0)
				}
		}
	}), C.fn.extend({
		domManip: we,
		detach: function (e) {
			return be(this, e, !0)
		},
		remove: function (e) {
			return be(this, e)
		},
		text: function (e) {
			return M(this, function (e) {
				return void 0 === e ? C.text(this) : this.empty().each(function () {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function () {
			return we(this, arguments, function (e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || me(this, e).appendChild(e)
			})
		},
		prepend: function () {
			return we(this, arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = me(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function () {
			return we(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function () {
			return we(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function () {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(G(e, !1)), e.textContent = "");
			return this
		},
		clone: function (e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function () {
				return C.clone(this, e, t)
			})
		},
		html: function (e) {
			return M(this, function (e) {
				var t = this[0] || {},
					i = 0,
					n = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !ue.test(e) && !K[(U.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = C.htmlPrefilter(e);
					try {
						for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (C.cleanData(G(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function () {
			var i = [];
			return we(this, arguments, function (e) {
				var t = this.parentNode;
				C.inArray(this, i) < 0 && (C.cleanData(G(this)), t && t.replaceChild(e, this))
			}, i)
		}
	}), C.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (e, r) {
		C.fn[e] = function (e) {
			for (var t, i = [], n = C(e), o = n.length - 1, s = 0; s <= o; s++) t = s === o ? this : this.clone(!0), C(n[s])[r](t), a.apply(i, t.get());
			return this.pushStack(i)
		}
	});
	var xe, Te = {
		HTML: "block",
		BODY: "block"
	};

	function ke(e, t) {
		var i = C(t.createElement(e)).appendTo(t.body),
			n = C.css(i[0], "display");
		return i.detach(), n
	}

	function Se(e) {
		var t = S,
			i = Te[e];
		return i || ("none" !== (i = ke(e, t)) && i || ((t = (xe = (xe || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), i = ke(e, t), xe.detach()), Te[e] = i), i
	}
	var Ce = /^margin/,
		$e = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
		Ee = function (e) {
			var t = e.ownerDocument.defaultView;
			return t && t.opener || (t = k), t.getComputedStyle(e)
		},
		Ae = function (e, t, i, n) {
			var o, s, r = {};
			for (s in t) r[s] = e.style[s], e.style[s] = t[s];
			for (s in o = i.apply(e, n || []), t) e.style[s] = r[s];
			return o
		},
		Pe = S.documentElement;

	function Le(e, t, i) {
		var n, o, s, r, a = e.style;
		return "" !== (r = (i = i || Ee(e)) ? i.getPropertyValue(t) || i[t] : void 0) && void 0 !== r || C.contains(e.ownerDocument, e) || (r = C.style(e, t)), i && !v.pixelMarginRight() && $e.test(r) && Ce.test(t) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s), void 0 !== r ? r + "" : r
	}

	function Oe(e, t) {
		return {
			get: function () {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}! function () {
		var t, i, n, o, s = S.createElement("div"),
			r = S.createElement("div");

		function e() {
			r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", r.innerHTML = "", Pe.appendChild(s);
			var e = k.getComputedStyle(r);
			t = "1%" !== e.top, o = "2px" === e.marginLeft, i = "4px" === e.width, r.style.marginRight = "50%", n = "4px" === e.marginRight, Pe.removeChild(s)
		}
		r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === r.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(r), C.extend(v, {
			pixelPosition: function () {
				return e(), t
			},
			boxSizingReliable: function () {
				return null == i && e(), i
			},
			pixelMarginRight: function () {
				return null == i && e(), n
			},
			reliableMarginLeft: function () {
				return null == i && e(), o
			},
			reliableMarginRight: function () {
				var e, t = r.appendChild(S.createElement("div"));
				return t.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", r.style.width = "1px", Pe.appendChild(s), e = !parseFloat(k.getComputedStyle(t).marginRight), Pe.removeChild(s), r.removeChild(t), e
			}
		}))
	}();
	var He = /^(none|table(?!-c[ea]).+)/,
		De = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Me = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ne = ["Webkit", "O", "Moz", "ms"],
		je = S.createElement("div").style;

	function Ie(e) {
		if (e in je) return e;
		for (var t = e[0].toUpperCase() + e.slice(1), i = Ne.length; i--;)
			if ((e = Ne[i] + t) in je) return e
	}

	function qe(e, t, i) {
		var n = R.exec(t);
		return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
	}

	function ze(e, t, i, n, o) {
		for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; s < 4; s += 2) "margin" === i && (r += C.css(e, i + F[s], !0, o)), n ? ("content" === i && (r -= C.css(e, "padding" + F[s], !0, o)), "margin" !== i && (r -= C.css(e, "border" + F[s] + "Width", !0, o))) : (r += C.css(e, "padding" + F[s], !0, o), "padding" !== i && (r += C.css(e, "border" + F[s] + "Width", !0, o)));
		return r
	}

	function We(e, t, i) {
		var n = !0,
			o = "width" === t ? e.offsetWidth : e.offsetHeight,
			s = Ee(e),
			r = "border-box" === C.css(e, "boxSizing", !1, s);
		if (S.msFullscreenElement && k.top !== k && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[t])), o <= 0 || null == o) {
			if (((o = Le(e, t, s)) < 0 || null == o) && (o = e.style[t]), $e.test(o)) return o;
			n = r && (v.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
		}
		return o + ze(e, t, i || (r ? "border" : "content"), n, s) + "px"
	}

	function _e(e, t) {
		for (var i, n, o, s = [], r = 0, a = e.length; r < a; r++)(n = e[r]).style && (s[r] = I.get(n, "olddisplay"), i = n.style.display, t ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && Y(n) && (s[r] = I.access(n, "olddisplay", Se(n.nodeName)))) : (o = Y(n), "none" === i && o || I.set(n, "olddisplay", o ? i : C.css(n, "display"))));
		for (r = 0; r < a; r++)(n = e[r]).style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? s[r] || "" : "none"));
		return e
	}

	function Xe(e, t, i, n, o) {
		return new Xe.prototype.init(e, t, i, n, o)
	}
	C.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var i = Le(e, "opacity");
						return "" === i ? "1" : i
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			float: "cssFloat"
		},
		style: function (e, t, i, n) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, s, r, a = C.camelCase(t),
					l = e.style;
				if (t = C.cssProps[a] || (C.cssProps[a] = Ie(a) || a), r = C.cssHooks[t] || C.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (o = r.get(e, !1, n)) ? o : l[t];
				"string" === (s = typeof i) && (o = R.exec(i)) && o[1] && (i = B(e, t, o), s = "number"), null != i && i == i && ("number" === s && (i += o && o[3] || (C.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), r && "set" in r && void 0 === (i = r.set(e, i, n)) || (l[t] = i))
			}
		},
		css: function (e, t, i, n) {
			var o, s, r, a = C.camelCase(t);
			return t = C.cssProps[a] || (C.cssProps[a] = Ie(a) || a), (r = C.cssHooks[t] || C.cssHooks[a]) && "get" in r && (o = r.get(e, !0, i)), void 0 === o && (o = Le(e, t, n)), "normal" === o && t in Me && (o = Me[t]), "" === i || i ? (s = parseFloat(o), !0 === i || isFinite(s) ? s || 0 : o) : o
		}
	}), C.each(["height", "width"], function (e, r) {
		C.cssHooks[r] = {
			get: function (e, t, i) {
				if (t) return He.test(C.css(e, "display")) && 0 === e.offsetWidth ? Ae(e, De, function () {
					return We(e, r, i)
				}) : We(e, r, i)
			},
			set: function (e, t, i) {
				var n, o = i && Ee(e),
					s = i && ze(e, r, i, "border-box" === C.css(e, "boxSizing", !1, o), o);
				return s && (n = R.exec(t)) && "px" !== (n[3] || "px") && (e.style[r] = t, t = C.css(e, r)), qe(0, t, s)
			}
		}
	}), C.cssHooks.marginLeft = Oe(v.reliableMarginLeft, function (e, t) {
		if (t) return (parseFloat(Le(e, "marginLeft")) || e.getBoundingClientRect().left - Ae(e, {
			marginLeft: 0
		}, function () {
			return e.getBoundingClientRect().left
		})) + "px"
	}), C.cssHooks.marginRight = Oe(v.reliableMarginRight, function (e, t) {
		if (t) return Ae(e, {
			display: "inline-block"
		}, Le, [e, "marginRight"])
	}), C.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (o, s) {
		C.cssHooks[o + s] = {
			expand: function (e) {
				for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) i[o + F[t] + s] = n[t] || n[t - 2] || n[0];
				return i
			}
		}, Ce.test(o) || (C.cssHooks[o + s].set = qe)
	}), C.fn.extend({
		css: function (e, t) {
			return M(this, function (e, t, i) {
				var n, o, s = {},
					r = 0;
				if (C.isArray(t)) {
					for (n = Ee(e), o = t.length; r < o; r++) s[t[r]] = C.css(e, t[r], !1, n);
					return s
				}
				return void 0 !== i ? C.style(e, t, i) : C.css(e, t)
			}, e, t, 1 < arguments.length)
		},
		show: function () {
			return _e(this, !0)
		},
		hide: function () {
			return _e(this)
		},
		toggle: function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
				Y(this) ? C(this).show() : C(this).hide()
			})
		}
	}), ((C.Tween = Xe).prototype = {
		constructor: Xe,
		init: function (e, t, i, n, o, s) {
			this.elem = e, this.prop = i, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (C.cssNumber[i] ? "" : "px")
		},
		cur: function () {
			var e = Xe.propHooks[this.prop];
			return e && e.get ? e.get(this) : Xe.propHooks._default.get(this)
		},
		run: function (e) {
			var t, i = Xe.propHooks[this.prop];
			return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Xe.propHooks._default.set(this), this
		}
	}).init.prototype = Xe.prototype, (Xe.propHooks = {
		_default: {
			get: function (e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function (e) {
				C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}).scrollTop = Xe.propHooks.scrollLeft = {
		set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, C.easing = {
		linear: function (e) {
			return e
		},
		swing: function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, C.fx = Xe.prototype.init, C.fx.step = {};
	var Re, Fe, Ye, Be, Ve, Ue = /^(?:toggle|show|hide)$/,
		Qe = /queueHooks$/;

	function Ke() {
		return k.setTimeout(function () {
			Re = void 0
		}), Re = C.now()
	}

	function Ge(e, t) {
		var i, n = 0,
			o = {
				height: e
			};
		for (t = t ? 1 : 0; n < 4; n += 2 - t) o["margin" + (i = F[n])] = o["padding" + i] = e;
		return t && (o.opacity = o.width = e), o
	}

	function Je(e, t, i) {
		for (var n, o = (Ze.tweeners[t] || []).concat(Ze.tweeners["*"]), s = 0, r = o.length; s < r; s++)
			if (n = o[s].call(i, t, e)) return n
	}

	function Ze(s, e, t) {
		var i, r, n = 0,
			o = Ze.prefilters.length,
			a = C.Deferred().always(function () {
				delete l.elem
			}),
			l = function () {
				if (r) return !1;
				for (var e = Re || Ke(), t = Math.max(0, c.startTime + c.duration - e), i = 1 - (t / c.duration || 0), n = 0, o = c.tweens.length; n < o; n++) c.tweens[n].run(i);
				return a.notifyWith(s, [c, i, t]), i < 1 && o ? t : (a.resolveWith(s, [c]), !1)
			},
			c = a.promise({
				elem: s,
				props: C.extend({}, e),
				opts: C.extend(!0, {
					specialEasing: {},
					easing: C.easing._default
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: Re || Ke(),
				duration: t.duration,
				tweens: [],
				createTween: function (e, t) {
					var i = C.Tween(s, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
					return c.tweens.push(i), i
				},
				stop: function (e) {
					var t = 0,
						i = e ? c.tweens.length : 0;
					if (r) return this;
					for (r = !0; t < i; t++) c.tweens[t].run(1);
					return e ? (a.notifyWith(s, [c, 1, 0]), a.resolveWith(s, [c, e])) : a.rejectWith(s, [c, e]), this
				}
			}),
			d = c.props;
		for (! function (e, t) {
			var i, n, o, s, r;
			for (i in e)
				if (o = t[n = C.camelCase(i)], s = e[i], C.isArray(s) && (o = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), (r = C.cssHooks[n]) && "expand" in r)
					for (i in s = r.expand(s), delete e[n], s) i in e || (e[i] = s[i], t[i] = o);
				else t[n] = o
		}(d, c.opts.specialEasing); n < o; n++)
			if (i = Ze.prefilters[n].call(c, s, d, c.opts)) return C.isFunction(i.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = C.proxy(i.stop, i)), i;
		return C.map(d, Je, c), C.isFunction(c.opts.start) && c.opts.start.call(s, c), C.fx.timer(C.extend(l, {
			elem: s,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}
	C.Animation = C.extend(Ze, {
		tweeners: {
			"*": [
				function (e, t) {
					var i = this.createTween(e, t);
					return B(i.elem, e, R.exec(t), i), i
				}
			]
		},
		tweener: function (e, t) {
			C.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(H);
			for (var i, n = 0, o = e.length; n < o; n++) i = e[n], Ze.tweeners[i] = Ze.tweeners[i] || [], Ze.tweeners[i].unshift(t)
		},
		prefilters: [
			function (t, e, i) {
				var n, o, s, r, a, l, c, d = this,
					u = {},
					h = t.style,
					p = t.nodeType && Y(t),
					f = I.get(t, "fxshow");
				for (n in i.queue || (null == (a = C._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
					a.unqueued || l()
				}), a.unqueued++, d.always(function () {
					d.always(function () {
						a.unqueued--, C.queue(t, "fx").length || a.empty.fire()
					})
				})), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (c = C.css(t, "display")) ? I.get(t, "olddisplay") || Se(t.nodeName) : c) && "none" === C.css(t, "float") && (h.display = "inline-block")), i.overflow && (h.overflow = "hidden", d.always(function () {
					h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
				})), e)
					if (o = e[n], Ue.exec(o)) {
						if (delete e[n], s = s || "toggle" === o, o === (p ? "hide" : "show")) {
							if ("show" !== o || !f || void 0 === f[n]) continue;
							p = !0
						}
						u[n] = f && f[n] || C.style(t, n)
					} else c = void 0;
				if (C.isEmptyObject(u)) "inline" === ("none" === c ? Se(t.nodeName) : c) && (h.display = c);
				else
					for (n in f ? "hidden" in f && (p = f.hidden) : f = I.access(t, "fxshow", {}), s && (f.hidden = !p), p ? C(t).show() : d.done(function () {
						C(t).hide()
					}), d.done(function () {
						var e;
						for (e in I.remove(t, "fxshow"), u) C.style(t, e, u[e])
					}), u) r = Je(p ? f[n] : 0, n, d), n in f || (f[n] = r.start, p && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
			}
		],
		prefilter: function (e, t) {
			t ? Ze.prefilters.unshift(e) : Ze.prefilters.push(e)
		}
	}), C.speed = function (e, t, i) {
		var n = e && "object" == typeof e ? C.extend({}, e) : {
			complete: i || !i && t || C.isFunction(e) && e,
			duration: e,
			easing: i && t || t && !C.isFunction(t) && t
		};
		return n.duration = C.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in C.fx.speeds ? C.fx.speeds[n.duration] : C.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
			C.isFunction(n.old) && n.old.call(this), n.queue && C.dequeue(this, n.queue)
		}, n
	}, C.fn.extend({
		fadeTo: function (e, t, i, n) {
			return this.filter(Y).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, i, n)
		},
		animate: function (t, e, i, n) {
			var o = C.isEmptyObject(t),
				s = C.speed(e, i, n),
				r = function () {
					var e = Ze(this, C.extend({}, t), s);
					(o || I.get(this, "finish")) && e.stop(!0)
				};
			return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
		},
		stop: function (o, e, s) {
			var r = function (e) {
				var t = e.stop;
				delete e.stop, t(s)
			};
			return "string" != typeof o && (s = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function () {
				var e = !0,
					t = null != o && o + "queueHooks",
					i = C.timers,
					n = I.get(this);
				if (t) n[t] && n[t].stop && r(n[t]);
				else
					for (t in n) n[t] && n[t].stop && Qe.test(t) && r(n[t]);
				for (t = i.length; t--;) i[t].elem !== this || null != o && i[t].queue !== o || (i[t].anim.stop(s), e = !1, i.splice(t, 1));
				!e && s || C.dequeue(this, o)
			})
		},
		finish: function (r) {
			return !1 !== r && (r = r || "fx"), this.each(function () {
				var e, t = I.get(this),
					i = t[r + "queue"],
					n = t[r + "queueHooks"],
					o = C.timers,
					s = i ? i.length : 0;
				for (t.finish = !0, C.queue(this, r, []), n && n.stop && n.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === r && (o[e].anim.stop(!0), o.splice(e, 1));
				for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
				delete t.finish
			})
		}
	}), C.each(["toggle", "show", "hide"], function (e, n) {
		var o = C.fn[n];
		C.fn[n] = function (e, t, i) {
			return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(Ge(n, !0), e, t, i)
		}
	}), C.each({
		slideDown: Ge("show"),
		slideUp: Ge("hide"),
		slideToggle: Ge("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function (e, n) {
		C.fn[e] = function (e, t, i) {
			return this.animate(n, e, t, i)
		}
	}), C.timers = [], C.fx.tick = function () {
		var e, t = 0,
			i = C.timers;
		for (Re = C.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
		i.length || C.fx.stop(), Re = void 0
	}, C.fx.timer = function (e) {
		C.timers.push(e), e() ? C.fx.start() : C.timers.pop()
	}, C.fx.interval = 13, C.fx.start = function () {
		Fe || (Fe = k.setInterval(C.fx.tick, C.fx.interval))
	}, C.fx.stop = function () {
		k.clearInterval(Fe), Fe = null
	}, C.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, C.fn.delay = function (n, e) {
		return n = C.fx && C.fx.speeds[n] || n, e = e || "fx", this.queue(e, function (e, t) {
			var i = k.setTimeout(e, n);
			t.stop = function () {
				k.clearTimeout(i)
			}
		})
	}, Ye = S.createElement("input"), Be = S.createElement("select"), Ve = Be.appendChild(S.createElement("option")), Ye.type = "checkbox", v.checkOn = "" !== Ye.value, v.optSelected = Ve.selected, Be.disabled = !0, v.optDisabled = !Ve.disabled, (Ye = S.createElement("input")).value = "t", Ye.type = "radio", v.radioValue = "t" === Ye.value;
	var et, tt = C.expr.attrHandle;
	C.fn.extend({
		attr: function (e, t) {
			return M(this, C.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function (e) {
			return this.each(function () {
				C.removeAttr(this, e)
			})
		}
	}), C.extend({
		attr: function (e, t, i) {
			var n, o, s = e.nodeType;
			if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? C.prop(e, t, i) : (1 === s && C.isXMLDoc(e) || (t = t.toLowerCase(), o = C.attrHooks[t] || (C.expr.match.bool.test(t) ? et : void 0)), void 0 !== i ? null === i ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : null == (n = C.find.attr(e, t)) ? void 0 : n)
		},
		attrHooks: {
			type: {
				set: function (e, t) {
					if (!v.radioValue && "radio" === t && C.nodeName(e, "input")) {
						var i = e.value;
						return e.setAttribute("type", t), i && (e.value = i), t
					}
				}
			}
		},
		removeAttr: function (e, t) {
			var i, n, o = 0,
				s = t && t.match(H);
			if (s && 1 === e.nodeType)
				for (; i = s[o++];) n = C.propFix[i] || i, C.expr.match.bool.test(i) && (e[n] = !1), e.removeAttribute(i)
		}
	}), et = {
		set: function (e, t, i) {
			return !1 === t ? C.removeAttr(e, i) : e.setAttribute(i, i), i
		}
	}, C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
		var s = tt[t] || C.find.attr;
		tt[t] = function (e, t, i) {
			var n, o;
			return i || (o = tt[t], tt[t] = n, n = null != s(e, t, i) ? t.toLowerCase() : null, tt[t] = o), n
		}
	});
	var it = /^(?:input|select|textarea|button)$/i,
		nt = /^(?:a|area)$/i;
	C.fn.extend({
		prop: function (e, t) {
			return M(this, C.prop, e, t, 1 < arguments.length)
		},
		removeProp: function (e) {
			return this.each(function () {
				delete this[C.propFix[e] || e]
			})
		}
	}), C.extend({
		prop: function (e, t, i) {
			var n, o, s = e.nodeType;
			if (3 !== s && 8 !== s && 2 !== s) return 1 === s && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function (e) {
					var t = C.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : it.test(e.nodeName) || nt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), v.optSelected || (C.propHooks.selected = {
		get: function (e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function (e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		C.propFix[this.toLowerCase()] = this
	});
	var ot = /[\t\r\n\f]/g;

	function st(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}
	C.fn.extend({
		addClass: function (t) {
			var e, i, n, o, s, r, a, l = 0;
			if (C.isFunction(t)) return this.each(function (e) {
				C(this).addClass(t.call(this, e, st(this)))
			});
			if ("string" == typeof t && t)
				for (e = t.match(H) || []; i = this[l++];)
					if (o = st(i), n = 1 === i.nodeType && (" " + o + " ").replace(ot, " ")) {
						for (r = 0; s = e[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
						o !== (a = C.trim(n)) && i.setAttribute("class", a)
					}
			return this
		},
		removeClass: function (t) {
			var e, i, n, o, s, r, a, l = 0;
			if (C.isFunction(t)) return this.each(function (e) {
				C(this).removeClass(t.call(this, e, st(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof t && t)
				for (e = t.match(H) || []; i = this[l++];)
					if (o = st(i), n = 1 === i.nodeType && (" " + o + " ").replace(ot, " ")) {
						for (r = 0; s = e[r++];)
							for (; - 1 < n.indexOf(" " + s + " ");) n = n.replace(" " + s + " ", " ");
						o !== (a = C.trim(n)) && i.setAttribute("class", a)
					}
			return this
		},
		toggleClass: function (o, t) {
			var s = typeof o;
			return "boolean" == typeof t && "string" === s ? t ? this.addClass(o) : this.removeClass(o) : C.isFunction(o) ? this.each(function (e) {
				C(this).toggleClass(o.call(this, e, st(this), t), t)
			}) : this.each(function () {
				var e, t, i, n;
				if ("string" === s)
					for (t = 0, i = C(this), n = o.match(H) || []; e = n[t++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
				else void 0 !== o && "boolean" !== s || ((e = st(this)) && I.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : I.get(this, "__className__") || ""))
			})
		},
		hasClass: function (e) {
			var t, i, n = 0;
			for (t = " " + e + " "; i = this[n++];)
				if (1 === i.nodeType && -1 < (" " + st(i) + " ").replace(ot, " ").indexOf(t)) return !0;
			return !1
		}
	});
	var rt = /\r/g,
		at = /[\x20\t\r\n\f]+/g;
	C.fn.extend({
		val: function (i) {
			var n, e, o, t = this[0];
			return arguments.length ? (o = C.isFunction(i), this.each(function (e) {
				var t;
				1 === this.nodeType && (null == (t = o ? i.call(this, e, C(this).val()) : i) ? t = "" : "number" == typeof t ? t += "" : C.isArray(t) && (t = C.map(t, function (e) {
					return null == e ? "" : e + ""
				})), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, t, "value") || (this.value = t))
			})) : t ? (n = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(rt, "") : null == e ? "" : e : void 0
		}
	}), C.extend({
		valHooks: {
			option: {
				get: function (e) {
					var t = C.find.attr(e, "value");
					return null != t ? t : C.trim(C.text(e)).replace(at, " ")
				}
			},
			select: {
				get: function (e) {
					for (var t, i, n = e.options, o = e.selectedIndex, s = "select-one" === e.type || o < 0, r = s ? null : [], a = s ? o + 1 : n.length, l = o < 0 ? a : s ? o : 0; l < a; l++)
						if (((i = n[l]).selected || l === o) && (v.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !C.nodeName(i.parentNode, "optgroup"))) {
							if (t = C(i).val(), s) return t;
							r.push(t)
						}
					return r
				},
				set: function (e, t) {
					for (var i, n, o = e.options, s = C.makeArray(t), r = o.length; r--;)((n = o[r]).selected = -1 < C.inArray(C.valHooks.option.get(n), s)) && (i = !0);
					return i || (e.selectedIndex = -1), s
				}
			}
		}
	}), C.each(["radio", "checkbox"], function () {
		C.valHooks[this] = {
			set: function (e, t) {
				if (C.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
			}
		}, v.checkOn || (C.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var lt = /^(?:focusinfocus|focusoutblur)$/;
	C.extend(C.event, {
		trigger: function (e, t, i, n) {
			var o, s, r, a, l, c, d, u = [i || S],
				h = f.call(e, "type") ? e.type : e,
				p = f.call(e, "namespace") ? e.namespace.split(".") : [];
			if (s = r = i = i || S, 3 !== i.nodeType && 8 !== i.nodeType && !lt.test(h + C.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, (e = e[C.expando] ? e : new C.Event(h, "object" == typeof e && e)).isTrigger = n ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : C.makeArray(t, [e]), d = C.event.special[h] || {}, n || !d.trigger || !1 !== d.trigger.apply(i, t))) {
				if (!n && !d.noBubble && !C.isWindow(i)) {
					for (a = d.delegateType || h, lt.test(a + h) || (s = s.parentNode); s; s = s.parentNode) u.push(s), r = s;
					r === (i.ownerDocument || S) && u.push(r.defaultView || r.parentWindow || k)
				}
				for (o = 0;
					(s = u[o++]) && !e.isPropagationStopped();) e.type = 1 < o ? a : d.bindType || h, (c = (I.get(s, "events") || {})[e.type] && I.get(s, "handle")) && c.apply(s, t), (c = l && s[l]) && c.apply && N(s) && (e.result = c.apply(s, t), !1 === e.result && e.preventDefault());
				return e.type = h, n || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(u.pop(), t) || !N(i) || l && C.isFunction(i[h]) && !C.isWindow(i) && ((r = i[l]) && (i[l] = null), i[C.event.triggered = h](), C.event.triggered = void 0, r && (i[l] = r)), e.result
			}
		},
		simulate: function (e, t, i) {
			var n = C.extend(new C.Event, i, {
				type: e,
				isSimulated: !0
			});
			C.event.trigger(n, null, t), n.isDefaultPrevented() && i.preventDefault()
		}
	}), C.fn.extend({
		trigger: function (e, t) {
			return this.each(function () {
				C.event.trigger(e, t, this)
			})
		},
		triggerHandler: function (e, t) {
			var i = this[0];
			if (i) return C.event.trigger(e, t, i, !0)
		}
	}), C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, i) {
		C.fn[i] = function (e, t) {
			return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
		}
	}), C.fn.extend({
		hover: function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), v.focusin = "onfocusin" in k, v.focusin || C.each({
		focus: "focusin",
		blur: "focusout"
	}, function (i, n) {
		var o = function (e) {
			C.event.simulate(n, e.target, C.event.fix(e))
		};
		C.event.special[n] = {
			setup: function () {
				var e = this.ownerDocument || this,
					t = I.access(e, n);
				t || e.addEventListener(i, o, !0), I.access(e, n, (t || 0) + 1)
			},
			teardown: function () {
				var e = this.ownerDocument || this,
					t = I.access(e, n) - 1;
				t ? I.access(e, n, t) : (e.removeEventListener(i, o, !0), I.remove(e, n))
			}
		}
	});
	var ct = k.location,
		dt = C.now(),
		ut = /\?/;
	C.parseJSON = function (e) {
		return JSON.parse(e + "")
	}, C.parseXML = function (e) {
		var t;
		if (!e || "string" != typeof e) return null;
		try {
			t = (new k.DOMParser).parseFromString(e, "text/xml")
		} catch (e) {
			t = void 0
		}
		return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
	};
	var ht = /#.*$/,
		pt = /([?&])_=[^&]*/,
		ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		mt = /^(?:GET|HEAD)$/,
		vt = /^\/\//,
		gt = {},
		yt = {},
		wt = "*/".concat("*"),
		bt = S.createElement("a");

	function xt(s) {
		return function (e, t) {
			"string" != typeof e && (t = e, e = "*");
			var i, n = 0,
				o = e.toLowerCase().match(H) || [];
			if (C.isFunction(t))
				for (; i = o[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (s[i] = s[i] || []).unshift(t)) : (s[i] = s[i] || []).push(t)
		}
	}

	function Tt(t, o, s, r) {
		var a = {},
			l = t === yt;

		function c(e) {
			var n;
			return a[e] = !0, C.each(t[e] || [], function (e, t) {
				var i = t(o, s, r);
				return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (o.dataTypes.unshift(i), c(i), !1)
			}), n
		}
		return c(o.dataTypes[0]) || !a["*"] && c("*")
	}

	function kt(e, t) {
		var i, n, o = C.ajaxSettings.flatOptions || {};
		for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
		return n && C.extend(!0, e, n), e
	}
	bt.href = ct.href, C.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: ct.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ct.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": wt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": C.parseJSON,
				"text xml": C.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (e, t) {
			return t ? kt(kt(e, C.ajaxSettings), t) : kt(C.ajaxSettings, e)
		},
		ajaxPrefilter: xt(gt),
		ajaxTransport: xt(yt),
		ajax: function (e, t) {
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var d, u, h, i, p, n, f, o, m = C.ajaxSetup({}, t),
				v = m.context || m,
				g = m.context && (v.nodeType || v.jquery) ? C(v) : C.event,
				y = C.Deferred(),
				w = C.Callbacks("once memory"),
				b = m.statusCode || {},
				s = {},
				r = {},
				x = 0,
				a = "canceled",
				T = {
					readyState: 0,
					getResponseHeader: function (e) {
						var t;
						if (2 === x) {
							if (!i)
								for (i = {}; t = ft.exec(h);) i[t[1].toLowerCase()] = t[2];
							t = i[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function () {
						return 2 === x ? h : null
					},
					setRequestHeader: function (e, t) {
						var i = e.toLowerCase();
						return x || (e = r[i] = r[i] || e, s[e] = t), this
					},
					overrideMimeType: function (e) {
						return x || (m.mimeType = e), this
					},
					statusCode: function (e) {
						var t;
						if (e)
							if (x < 2)
								for (t in e) b[t] = [b[t], e[t]];
							else T.always(e[T.status]);
						return this
					},
					abort: function (e) {
						var t = e || a;
						return d && d.abort(t), l(0, t), this
					}
				};
			if (y.promise(T).complete = w.add, T.success = T.done, T.error = T.fail, m.url = ((e || m.url || ct.href) + "").replace(ht, "").replace(vt, ct.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = C.trim(m.dataType || "*").toLowerCase().match(H) || [""], null == m.crossDomain) {
				n = S.createElement("a");
				try {
					n.href = m.url, n.href = n.href, m.crossDomain = bt.protocol + "//" + bt.host != n.protocol + "//" + n.host
				} catch (e) {
					m.crossDomain = !0
				}
			}
			if (m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)), Tt(gt, m, t, T), 2 === x) return T;
			for (o in (f = C.event && m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !mt.test(m.type), u = m.url, m.hasContent || (m.data && (u = m.url += (ut.test(u) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = pt.test(u) ? u.replace(pt, "$1_=" + dt++) : u + (ut.test(u) ? "&" : "?") + "_=" + dt++)), m.ifModified && (C.lastModified[u] && T.setRequestHeader("If-Modified-Since", C.lastModified[u]), C.etag[u] && T.setRequestHeader("If-None-Match", C.etag[u])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType), T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + wt + "; q=0.01" : "") : m.accepts["*"]), m.headers) T.setRequestHeader(o, m.headers[o]);
			if (m.beforeSend && (!1 === m.beforeSend.call(v, T, m) || 2 === x)) return T.abort();
			for (o in a = "abort", {
				success: 1,
				error: 1,
				complete: 1
			}) T[o](m[o]);
			if (d = Tt(yt, m, t, T)) {
				if (T.readyState = 1, f && g.trigger("ajaxSend", [T, m]), 2 === x) return T;
				m.async && 0 < m.timeout && (p = k.setTimeout(function () {
					T.abort("timeout")
				}, m.timeout));
				try {
					x = 1, d.send(s, l)
				} catch (e) {
					if (!(x < 2)) throw e;
					l(-1, e)
				}
			} else l(-1, "No Transport");

			function l(e, t, i, n) {
				var o, s, r, a, l, c = t;
				2 !== x && (x = 2, p && k.clearTimeout(p), d = void 0, h = n || "", T.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, i && (a = function (e, t, i) {
					for (var n, o, s, r, a = e.contents, l = e.dataTypes;
						"*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
					if (n)
						for (o in a)
							if (a[o] && a[o].test(n)) {
								l.unshift(o);
								break
							}
					if (l[0] in i) s = l[0];
					else {
						for (o in i) {
							if (!l[0] || e.converters[o + " " + l[0]]) {
								s = o;
								break
							}
							r || (r = o)
						}
						s = s || r
					}
					if (s) return s !== l[0] && l.unshift(s), i[s]
				}(m, T, i)), a = function (e, t, i, n) {
					var o, s, r, a, l, c = {},
						d = e.dataTypes.slice();
					if (d[1])
						for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
					for (s = d.shift(); s;)
						if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = d.shift())
							if ("*" === s) s = l;
							else if ("*" !== l && l !== s) {
						if (!(r = c[l + " " + s] || c["* " + s]))
							for (o in c)
								if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
									!0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], d.unshift(a[1]));
									break
								}
						if (!0 !== r)
							if (r && e.throws) t = r(t);
							else try {
								t = r(t)
							} catch (e) {
								return {
									state: "parsererror",
									error: r ? e : "No conversion from " + l + " to " + s
								}
							}
					}
					return {
						state: "success",
						data: t
					}
				}(m, a, T, o), o ? (m.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (C.lastModified[u] = l), (l = T.getResponseHeader("etag")) && (C.etag[u] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, s = a.data, o = !(r = a.error))) : (r = c, !e && c || (c = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || c) + "", o ? y.resolveWith(v, [s, c, T]) : y.rejectWith(v, [T, c, r]), T.statusCode(b), b = void 0, f && g.trigger(o ? "ajaxSuccess" : "ajaxError", [T, m, o ? s : r]), w.fireWith(v, [T, c]), f && (g.trigger("ajaxComplete", [T, m]), --C.active || C.event.trigger("ajaxStop")))
			}
			return T
		},
		getJSON: function (e, t, i) {
			return C.get(e, t, i, "json")
		},
		getScript: function (e, t) {
			return C.get(e, void 0, t, "script")
		}
	}), C.each(["get", "post"], function (e, o) {
		C[o] = function (e, t, i, n) {
			return C.isFunction(t) && (n = n || i, i = t, t = void 0), C.ajax(C.extend({
				url: e,
				type: o,
				dataType: n,
				data: t,
				success: i
			}, C.isPlainObject(e) && e))
		}
	}), C._evalUrl = function (e) {
		return C.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			throws: !0
		})
	}, C.fn.extend({
		wrapAll: function (t) {
			var e;
			return C.isFunction(t) ? this.each(function (e) {
				C(this).wrapAll(t.call(this, e))
			}) : (this[0] && (e = C(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this)
		},
		wrapInner: function (i) {
			return C.isFunction(i) ? this.each(function (e) {
				C(this).wrapInner(i.call(this, e))
			}) : this.each(function () {
				var e = C(this),
					t = e.contents();
				t.length ? t.wrapAll(i) : e.append(i)
			})
		},
		wrap: function (t) {
			var i = C.isFunction(t);
			return this.each(function (e) {
				C(this).wrapAll(i ? t.call(this, e) : t)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				C.nodeName(this, "body") || C(this).replaceWith(this.childNodes)
			}).end()
		}
	}), C.expr.filters.hidden = function (e) {
		return !C.expr.filters.visible(e)
	}, C.expr.filters.visible = function (e) {
		return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
	};
	var St = /%20/g,
		Ct = /\[\]$/,
		$t = /\r?\n/g,
		Et = /^(?:submit|button|image|reset|file)$/i,
		At = /^(?:input|select|textarea|keygen)/i;

	function Pt(i, e, n, o) {
		var t;
		if (C.isArray(e)) C.each(e, function (e, t) {
			n || Ct.test(i) ? o(i, t) : Pt(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, n, o)
		});
		else if (n || "object" !== C.type(e)) o(i, e);
		else
			for (t in e) Pt(i + "[" + t + "]", e[t], n, o)
	}
	C.param = function (e, t) {
		var i, n = [],
			o = function (e, t) {
				t = C.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function () {
			o(this.name, this.value)
		});
		else
			for (i in e) Pt(i, e[i], t, o);
		return n.join("&").replace(St, "+")
	}, C.fn.extend({
		serialize: function () {
			return C.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var e = C.prop(this, "elements");
				return e ? C.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !C(this).is(":disabled") && At.test(this.nodeName) && !Et.test(e) && (this.checked || !V.test(e))
			}).map(function (e, t) {
				var i = C(this).val();
				return null == i ? null : C.isArray(i) ? C.map(i, function (e) {
					return {
						name: t.name,
						value: e.replace($t, "\r\n")
					}
				}) : {
					name: t.name,
					value: i.replace($t, "\r\n")
				}
			}).get()
		}
	}), C.ajaxSettings.xhr = function () {
		try {
			return new k.XMLHttpRequest
		} catch (e) {}
	};
	var Lt = {
			0: 200,
			1223: 204
		},
		Ot = C.ajaxSettings.xhr();
	v.cors = !!Ot && "withCredentials" in Ot, v.ajax = Ot = !!Ot, C.ajaxTransport(function (o) {
		var s, r;
		if (v.cors || Ot && !o.crossDomain) return {
			send: function (e, t) {
				var i, n = o.xhr();
				if (n.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
					for (i in o.xhrFields) n[i] = o.xhrFields[i];
				for (i in o.mimeType && n.overrideMimeType && n.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) n.setRequestHeader(i, e[i]);
				s = function (e) {
					return function () {
						s && (s = r = n.onload = n.onerror = n.onabort = n.onreadystatechange = null, "abort" === e ? n.abort() : "error" === e ? "number" != typeof n.status ? t(0, "error") : t(n.status, n.statusText) : t(Lt[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
							binary: n.response
						} : {
							text: n.responseText
						}, n.getAllResponseHeaders()))
					}
				}, n.onload = s(), r = n.onerror = s("error"), void 0 !== n.onabort ? n.onabort = r : n.onreadystatechange = function () {
					4 === n.readyState && k.setTimeout(function () {
						s && r()
					})
				}, s = s("abort");
				try {
					n.send(o.hasContent && o.data || null)
				} catch (e) {
					if (s) throw e
				}
			},
			abort: function () {
				s && s()
			}
		}
	}), C.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function (e) {
				return C.globalEval(e), e
			}
		}
	}), C.ajaxPrefilter("script", function (e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), C.ajaxTransport("script", function (i) {
		var n, o;
		if (i.crossDomain) return {
			send: function (e, t) {
				n = C("<script>").prop({
					charset: i.scriptCharset,
					src: i.url
				}).on("load error", o = function (e) {
					n.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
				}), S.head.appendChild(n[0])
			},
			abort: function () {
				o && o()
			}
		}
	});
	var Ht = [],
		Dt = /(=)\?(?=&|$)|\?\?/;
	C.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var e = Ht.pop() || C.expando + "_" + dt++;
			return this[e] = !0, e
		}
	}), C.ajaxPrefilter("json jsonp", function (e, t, i) {
		var n, o, s, r = !1 !== e.jsonp && (Dt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Dt.test(e.data) && "data");
		if (r || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(Dt, "$1" + n) : !1 !== e.jsonp && (e.url += (ut.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function () {
			return s || C.error(n + " was not called"), s[0]
		}, e.dataTypes[0] = "json", o = k[n], k[n] = function () {
			s = arguments
		}, i.always(function () {
			void 0 === o ? C(k).removeProp(n) : k[n] = o, e[n] && (e.jsonpCallback = t.jsonpCallback, Ht.push(n)), s && C.isFunction(o) && o(s[0]), s = o = void 0
		}), "script"
	}), C.parseHTML = function (e, t, i) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (i = t, t = !1), t = t || S;
		var n = b.exec(e),
			o = !i && [];
		return n ? [t.createElement(n[1])] : (n = ie([e], t, o), o && o.length && C(o).remove(), C.merge([], n.childNodes))
	};
	var Mt = C.fn.load;

	function Nt(e) {
		return C.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	C.fn.load = function (e, t, i) {
		if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
		var n, o, s, r = this,
			a = e.indexOf(" ");
		return -1 < a && (n = C.trim(e.slice(a)), e = e.slice(0, a)), C.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < r.length && C.ajax({
			url: e,
			type: o || "GET",
			dataType: "html",
			data: t
		}).done(function (e) {
			s = arguments, r.html(n ? C("<div>").append(C.parseHTML(e)).find(n) : e)
		}).always(i && function (e, t) {
			r.each(function () {
				i.apply(this, s || [e.responseText, t, e])
			})
		}), this
	}, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		C.fn[t] = function (e) {
			return this.on(t, e)
		}
	}), C.expr.filters.animated = function (t) {
		return C.grep(C.timers, function (e) {
			return t === e.elem
		}).length
	}, C.offset = {
		setOffset: function (e, t, i) {
			var n, o, s, r, a, l, c = C.css(e, "position"),
				d = C(e),
				u = {};
			"static" === c && (e.style.position = "relative"), a = d.offset(), s = C.css(e, "top"), l = C.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (s + l).indexOf("auto") ? (r = (n = d.position()).top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), C.isFunction(t) && (t = t.call(e, i, C.extend({}, a))), null != t.top && (u.top = t.top - a.top + r), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : d.css(u)
		}
	}, C.fn.extend({
		offset: function (t) {
			if (arguments.length) return void 0 === t ? this : this.each(function (e) {
				C.offset.setOffset(this, t, e)
			});
			var e, i, n = this[0],
				o = {
					top: 0,
					left: 0
				},
				s = n && n.ownerDocument;
			return s ? (e = s.documentElement, C.contains(e, n) ? (o = n.getBoundingClientRect(), i = Nt(s), {
				top: o.top + i.pageYOffset - e.clientTop,
				left: o.left + i.pageXOffset - e.clientLeft
			}) : o) : void 0
		},
		position: function () {
			if (this[0]) {
				var e, t, i = this[0],
					n = {
						top: 0,
						left: 0
					};
				return "fixed" === C.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), C.nodeName(e[0], "html") || (n = e.offset()), n.top += C.css(e[0], "borderTopWidth", !0), n.left += C.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - C.css(i, "marginTop", !0),
					left: t.left - n.left - C.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
				return e || Pe
			})
		}
	}), C.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (t, o) {
		var s = "pageYOffset" === o;
		C.fn[t] = function (e) {
			return M(this, function (e, t, i) {
				var n = Nt(e);
				if (void 0 === i) return n ? n[o] : e[t];
				n ? n.scrollTo(s ? n.pageXOffset : i, s ? i : n.pageYOffset) : e[t] = i
			}, t, e, arguments.length)
		}
	}), C.each(["top", "left"], function (e, i) {
		C.cssHooks[i] = Oe(v.pixelPosition, function (e, t) {
			if (t) return t = Le(e, i), $e.test(t) ? C(e).position()[i] + "px" : t
		})
	}), C.each({
		Height: "height",
		Width: "width"
	}, function (s, r) {
		C.each({
			padding: "inner" + s,
			content: r,
			"": "outer" + s
		}, function (n, e) {
			C.fn[e] = function (e, t) {
				var i = arguments.length && (n || "boolean" != typeof e),
					o = n || (!0 === e || !0 === t ? "margin" : "border");
				return M(this, function (e, t, i) {
					var n;
					return C.isWindow(e) ? e.document.documentElement["client" + s] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + s], n["scroll" + s], e.body["offset" + s], n["offset" + s], n["client" + s])) : void 0 === i ? C.css(e, t, o) : C.style(e, t, i, o)
				}, r, i ? e : void 0, i, null)
			}
		})
	}), C.fn.extend({
		bind: function (e, t, i) {
			return this.on(e, null, t, i)
		},
		unbind: function (e, t) {
			return this.off(e, null, t)
		},
		delegate: function (e, t, i, n) {
			return this.on(t, e, i, n)
		},
		undelegate: function (e, t, i) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
		},
		size: function () {
			return this.length
		}
	}), C.fn.andSelf = C.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return C
	});
	var jt = k.jQuery,
		It = k.$;
	return C.noConflict = function (e) {
		return k.$ === C && (k.$ = It), e && k.jQuery === C && (k.jQuery = jt), C
	}, e || (k.jQuery = k.$ = C), C
}),
function () {
	for (var e, t = function () {}, i = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], n = i.length, o = window.console = window.console || {}; n--;) o[e = i[n]] || (o[e] = t)
}(),
function (r, a, c) {
	function e(e, t) {
		for (var i in this.wrapper = "string" == typeof e ? a.querySelector(e) : e, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
			resizeScrollbars: !0,
			mouseWheelSpeed: 20,
			snapThreshold: .334,
			disablePointer: !p.hasPointer,
			disableTouch: p.hasPointer || !p.hasTouch,
			disableMouse: p.hasPointer || p.hasTouch,
			startX: 0,
			startY: 0,
			scrollY: !0,
			directionLockThreshold: 5,
			momentum: !0,
			bounce: !0,
			bounceTime: 600,
			bounceEasing: "",
			preventDefault: !0,
			preventDefaultException: {
				tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
			},
			HWCompositing: !0,
			useTransition: !0,
			useTransform: !0,
			bindToWrapper: void 0 === r.onmousedown
		}, t) this.options[i] = t[i];
		this.translateZ = this.options.HWCompositing && p.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = p.hasTransition && this.options.useTransition, this.options.useTransform = p.hasTransform && this.options.useTransform, this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? p.ease[this.options.bounceEasing] || p.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, !0 === this.options.tap && (this.options.tap = "tap"), this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.directionY = this.directionX = this.y = this.x = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
	}

	function l(e, t, i) {
		var n = a.createElement("div"),
			o = a.createElement("div");
		return !0 === i && (n.style.cssText = "position:absolute;z-index:9999", o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), o.className = "iScrollIndicator", "h" == e ? (!0 === i && (n.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", o.style.height = "100%"), n.className = "iScrollHorizontalScrollbar") : (!0 === i && (n.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", o.style.width = "100%"), n.className = "iScrollVerticalScrollbar"), n.style.cssText += ";overflow:hidden", t || (n.style.pointerEvents = "none"), n.appendChild(o), n
	}

	function d(e, t) {
		for (var i in this.wrapper = "string" == typeof t.el ? a.querySelector(t.el) : t.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = e, this.options = {
			listenX: !0,
			listenY: !0,
			interactive: !1,
			resize: !0,
			defaultScrollbars: !1,
			shrink: !1,
			fade: !1,
			speedRatioX: 0,
			speedRatioY: 0
		}, t) this.options[i] = t[i];
		if (this.sizeRatioY = this.sizeRatioX = 1, this.maxPosY = this.maxPosX = 0, this.options.interactive && (this.options.disableTouch || (p.addEvent(this.indicator, "touchstart", this), p.addEvent(r, "touchend", this)), this.options.disablePointer || (p.addEvent(this.indicator, p.prefixPointerEvent("pointerdown"), this), p.addEvent(r, p.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (p.addEvent(this.indicator, "mousedown", this), p.addEvent(r, "mouseup", this))), this.options.fade) {
			this.wrapperStyle[p.style.transform] = this.scroller.translateZ;
			var n = p.style.transitionDuration;
			if (n) {
				this.wrapperStyle[n] = p.isBadAndroid ? "0.0001ms" : "0ms";
				var o = this;
				p.isBadAndroid && h(function () {
					"0.0001ms" === o.wrapperStyle[n] && (o.wrapperStyle[n] = "0s")
				}), this.wrapperStyle.opacity = "0"
			}
		}
	}
	var h = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.oRequestAnimationFrame || r.msRequestAnimationFrame || function (e) {
			r.setTimeout(e, 1e3 / 60)
		},
		p = function () {
			function e(e) {
				return !1 !== t && ("" === t ? e : t + e.charAt(0).toUpperCase() + e.substr(1))
			}
			var n = {},
				o = a.createElement("div").style,
				t = function () {
					for (var e = ["t", "webkitT", "MozT", "msT", "OT"], t = 0, i = e.length; t < i; t++)
						if (e[t] + "ransform" in o) return e[t].substr(0, e[t].length - 1);
					return !1
				}();
			n.getTime = Date.now || function () {
				return (new Date).getTime()
			}, n.extend = function (e, t) {
				for (var i in t) e[i] = t[i]
			}, n.addEvent = function (e, t, i, n) {
				e.addEventListener(t, i, !!n)
			}, n.removeEvent = function (e, t, i, n) {
				e.removeEventListener(t, i, !!n)
			}, n.prefixPointerEvent = function (e) {
				return r.MSPointerEvent ? "MSPointer" + e.charAt(7).toUpperCase() + e.substr(8) : e
			}, n.momentum = function (e, t, i, n, o, s) {
				var r;
				return t = e - t, r = e + (i = c.abs(t) / i) * i / (2 * (s = void 0 === s ? 6e-4 : s)) * (t < 0 ? -1 : 1), s = i / s, r < n ? (r = o ? n - o / 2.5 * (i / 8) : n, s = (t = c.abs(r - e)) / i) : 0 < r && (r = o ? o / 2.5 * (i / 8) : 0, s = (t = c.abs(e) + r) / i), {
					destination: c.round(r),
					duration: s
				}
			};
			var i, s = e("transform");
			return n.extend(n, {
				hasTransform: !1 !== s,
				hasPerspective: e("perspective") in o,
				hasTouch: "ontouchstart" in r,
				hasPointer: !(!r.PointerEvent && !r.MSPointerEvent),
				hasTransition: e("transition") in o
			}), n.isBadAndroid = (i = r.navigator.appVersion, !(!/Android/.test(i) || /Chrome\/\d/.test(i) || (i = i.match(/Safari\/(\d+.\d)/)) && "object" == typeof i && 2 <= i.length && !(parseFloat(i[1]) < 535.19))), n.extend(n.style = {}, {
				transform: s,
				transitionTimingFunction: e("transitionTimingFunction"),
				transitionDuration: e("transitionDuration"),
				transitionDelay: e("transitionDelay"),
				transformOrigin: e("transformOrigin")
			}), n.hasClass = function (e, t) {
				return new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
			}, n.addClass = function (e, t) {
				if (!n.hasClass(e, t)) {
					var i = e.className.split(" ");
					i.push(t), e.className = i.join(" ")
				}
			}, n.removeClass = function (e, t) {
				n.hasClass(e, t) && (e.className = e.className.replace(new RegExp("(^|\\s)" + t + "(\\s|$)", "g"), " "))
			}, n.offset = function (e) {
				for (var t = -e.offsetLeft, i = -e.offsetTop; e = e.offsetParent;) t -= e.offsetLeft, i -= e.offsetTop;
				return {
					left: t,
					top: i
				}
			}, n.preventDefaultException = function (e, t) {
				for (var i in t)
					if (t[i].test(e[i])) return !0;
				return !1
			}, n.extend(n.eventType = {}, {
				touchstart: 1,
				touchmove: 1,
				touchend: 1,
				mousedown: 2,
				mousemove: 2,
				mouseup: 2,
				pointerdown: 3,
				pointermove: 3,
				pointerup: 3,
				MSPointerDown: 3,
				MSPointerMove: 3,
				MSPointerUp: 3
			}), n.extend(n.ease = {}, {
				quadratic: {
					style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
					fn: function (e) {
						return e * (2 - e)
					}
				},
				circular: {
					style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
					fn: function (e) {
						return c.sqrt(1 - --e * e)
					}
				},
				back: {
					style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
					fn: function (e) {
						return --e * e * (5 * e + 4) + 1
					}
				},
				bounce: {
					style: "",
					fn: function (e) {
						return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
					}
				},
				elastic: {
					style: "",
					fn: function (e) {
						return 0 === e ? 0 : 1 == e ? 1 : .4 * c.pow(2, -10 * e) * c.sin(2 * (e - .055) * c.PI / .22) + 1
					}
				}
			}), n.tap = function (e, t) {
				var i = a.createEvent("Event");
				i.initEvent(t, !0, !0), i.pageX = e.pageX, i.pageY = e.pageY, e.target.dispatchEvent(i)
			}, n.click = function (e) {
				var t, i = e.target;
				/(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) || ((t = a.createEvent(r.MouseEvent ? "MouseEvents" : "Event")).initEvent("click", !0, !0), t.view = e.view || r, t.detail = 1, t.screenX = i.screenX || 0, t.screenY = i.screenY || 0, t.clientX = i.clientX || 0, t.clientY = i.clientY || 0, t.ctrlKey = !!e.ctrlKey, t.altKey = !!e.altKey, t.shiftKey = !!e.shiftKey, t.metaKey = !!e.metaKey, t.button = 0, t.relatedTarget = null, t._constructed = !0, i.dispatchEvent(t))
			}, n
		}();
	e.prototype = {
		version: "5.2.0",
		_init: function () {
			this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
		},
		destroy: function () {
			this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy")
		},
		_transitionEnd: function (e) {
			e.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
		},
		_start: function (e) {
			if (!(1 != p.eventType[e.type] && 0 !== (e.which ? e.button : e.button < 2 ? 0 : 4 == e.button ? 1 : 2) || !this.enabled || this.initiated && p.eventType[e.type] !== this.initiated)) {
				!this.options.preventDefault || p.isBadAndroid || p.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault();
				var t = e.touches ? e.touches[0] : e;
				this.initiated = p.eventType[e.type], this.moved = !1, this.directionLocked = this.directionY = this.directionX = this.distY = this.distX = 0, this.startTime = p.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, e = this.getComputedPosition(), this._translate(c.round(e.x), c.round(e.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = t.pageX, this.pointY = t.pageY, this._execEvent("beforeScrollStart")
			}
		},
		_move: function (e) {
			if (this.enabled && p.eventType[e.type] === this.initiated) {
				this.options.preventDefault && e.preventDefault();
				var t, i = e.touches ? e.touches[0] : e,
					n = i.pageX - this.pointX,
					o = i.pageY - this.pointY,
					s = p.getTime();
				if (this.pointX = i.pageX, this.pointY = i.pageY, this.distX += n, this.distY += o, i = c.abs(this.distX), t = c.abs(this.distY), !(300 < s - this.endTime && i < 10 && t < 10)) {
					if (this.directionLocked || this.options.freeScroll || (this.directionLocked = i > t + this.options.directionLockThreshold ? "h" : t >= i + this.options.directionLockThreshold ? "v" : "n"), "h" == this.directionLocked) {
						if ("vertical" == this.options.eventPassthrough) e.preventDefault();
						else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
						o = 0
					} else if ("v" == this.directionLocked) {
						if ("horizontal" == this.options.eventPassthrough) e.preventDefault();
						else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
						n = 0
					}
					n = this.hasHorizontalScroll ? n : 0, o = this.hasVerticalScroll ? o : 0, e = this.x + n, i = this.y + o, (0 < e || e < this.maxScrollX) && (e = this.options.bounce ? this.x + n / 3 : 0 < e ? 0 : this.maxScrollX), (0 < i || i < this.maxScrollY) && (i = this.options.bounce ? this.y + o / 3 : 0 < i ? 0 : this.maxScrollY), this.directionX = 0 < n ? -1 : n < 0 ? 1 : 0, this.directionY = 0 < o ? -1 : o < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(e, i), 300 < s - this.startTime && (this.startTime = s, this.startX = this.x, this.startY = this.y)
				}
			}
		},
		_end: function (e) {
			if (this.enabled && p.eventType[e.type] === this.initiated) {
				var t, i;
				this.options.preventDefault && !p.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault(), i = p.getTime() - this.startTime;
				var n = c.round(this.x),
					o = c.round(this.y),
					s = c.abs(n - this.startX),
					r = c.abs(o - this.startY);
				t = 0;
				var a = "";
				this.initiated = this.isInTransition = 0, this.endTime = p.getTime(), this.resetPosition(this.options.bounceTime) || (this.scrollTo(n, o), this.moved ? this._events.flick && i < 200 && s < 100 && r < 100 ? this._execEvent("flick") : (this.options.momentum && i < 300 && (t = this.hasHorizontalScroll ? p.momentum(this.x, this.startX, i, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
					destination: n,
					duration: 0
				}, i = this.hasVerticalScroll ? p.momentum(this.y, this.startY, i, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
					destination: o,
					duration: 0
				}, n = t.destination, o = i.destination, t = c.max(t.duration, i.duration), this.isInTransition = 1), this.options.snap && (this.currentPage = a = this._nearestSnap(n, o), t = this.options.snapSpeed || c.max(c.max(c.min(c.abs(n - a.x), 1e3), c.min(c.abs(o - a.y), 1e3)), 300), n = a.x, o = a.y, this.directionY = this.directionX = 0, a = this.options.bounceEasing), n != this.x || o != this.y ? ((0 < n || n < this.maxScrollX || 0 < o || o < this.maxScrollY) && (a = p.ease.quadratic), this.scrollTo(n, o, t, a)) : this._execEvent("scrollEnd")) : (this.options.tap && p.tap(e, this.options.tap), this.options.click && p.click(e), this._execEvent("scrollCancel")))
			}
		},
		_resize: function () {
			var e = this;
			clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function () {
				e.refresh()
			}, this.options.resizePolling)
		},
		resetPosition: function (e) {
			var t = this.x,
				i = this.y;
			return !this.hasHorizontalScroll || 0 < this.x ? t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX), !this.hasVerticalScroll || 0 < this.y ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY), (t != this.x || i != this.y) && (this.scrollTo(t, i, e || 0, this.options.bounceEasing), !0)
		},
		disable: function () {
			this.enabled = !1
		},
		enable: function () {
			this.enabled = !0
		},
		refresh: function () {
			this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.directionY = this.directionX = this.endTime = 0, this.wrapperOffset = p.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
		},
		on: function (e, t) {
			this._events[e] || (this._events[e] = []), this._events[e].push(t)
		},
		off: function (e, t) {
			if (this._events[e]) {
				var i = this._events[e].indexOf(t); - 1 < i && this._events[e].splice(i, 1)
			}
		},
		_execEvent: function (e) {
			if (this._events[e]) {
				var t = 0,
					i = this._events[e].length;
				if (i)
					for (; t < i; t++) this._events[e][t].apply(this, [].slice.call(arguments, 1))
			}
		},
		scrollBy: function (e, t, i, n) {
			e = this.x + e, t = this.y + t, this.scrollTo(e, t, i || 0, n)
		},
		scrollTo: function (e, t, i, n) {
			n = n || p.ease.circular, this.isInTransition = this.options.useTransition && 0 < i;
			var o = this.options.useTransition && n.style;
			!i || o ? (o && (this._transitionTimingFunction(n.style), this._transitionTime(i)), this._translate(e, t)) : this._animate(e, t, i, n.fn)
		},
		scrollToElement: function (e, t, i, n, o) {
			if (e = e.nodeType ? e : this.scroller.querySelector(e)) {
				var s = p.offset(e);
				s.left -= this.wrapperOffset.left, s.top -= this.wrapperOffset.top, !0 === i && (i = c.round(e.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), !0 === n && (n = c.round(e.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), s.left -= i || 0, s.top -= n || 0, s.left = 0 < s.left ? 0 : s.left < this.maxScrollX ? this.maxScrollX : s.left, s.top = 0 < s.top ? 0 : s.top < this.maxScrollY ? this.maxScrollY : s.top, t = null == t || "auto" === t ? c.max(c.abs(this.x - s.left), c.abs(this.y - s.top)) : t, this.scrollTo(s.left, s.top, t, o)
			}
		},
		_transitionTime: function (e) {
			if (this.options.useTransition) {
				e = e || 0;
				var t = p.style.transitionDuration;
				if (t) {
					if (this.scrollerStyle[t] = e + "ms", !e && p.isBadAndroid) {
						this.scrollerStyle[t] = "0.0001ms";
						var i = this;
						h(function () {
							"0.0001ms" === i.scrollerStyle[t] && (i.scrollerStyle[t] = "0s")
						})
					}
					if (this.indicators)
						for (var n = this.indicators.length; n--;) this.indicators[n].transitionTime(e)
				}
			}
		},
		_transitionTimingFunction: function (e) {
			if (this.scrollerStyle[p.style.transitionTimingFunction] = e, this.indicators)
				for (var t = this.indicators.length; t--;) this.indicators[t].transitionTimingFunction(e)
		},
		_translate: function (e, t) {
			if (this.options.useTransform ? this.scrollerStyle[p.style.transform] = "translate(" + e + "px," + t + "px)" + this.translateZ : (e = c.round(e), t = c.round(t), this.scrollerStyle.left = e + "px", this.scrollerStyle.top = t + "px"), this.x = e, this.y = t, this.indicators)
				for (var i = this.indicators.length; i--;) this.indicators[i].updatePosition()
		},
		_initEvents: function (e) {
			e = e ? p.removeEvent : p.addEvent;
			var t = this.options.bindToWrapper ? this.wrapper : r;
			e(r, "orientationchange", this), e(r, "resize", this), this.options.click && e(this.wrapper, "click", this, !0), this.options.disableMouse || (e(this.wrapper, "mousedown", this), e(t, "mousemove", this), e(t, "mousecancel", this), e(t, "mouseup", this)), p.hasPointer && !this.options.disablePointer && (e(this.wrapper, p.prefixPointerEvent("pointerdown"), this), e(t, p.prefixPointerEvent("pointermove"), this), e(t, p.prefixPointerEvent("pointercancel"), this), e(t, p.prefixPointerEvent("pointerup"), this)), p.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(t, "touchmove", this), e(t, "touchcancel", this), e(t, "touchend", this)), e(this.scroller, "transitionend", this), e(this.scroller, "webkitTransitionEnd", this), e(this.scroller, "oTransitionEnd", this), e(this.scroller, "MSTransitionEnd", this)
		},
		getComputedPosition: function () {
			var e, t = r.getComputedStyle(this.scroller, null);
			return this.options.useTransform ? (e = +((t = t[p.style.transform].split(")")[0].split(", "))[12] || t[4]), t = +(t[13] || t[5])) : (e = +t.left.replace(/[^-\d.]/g, ""), t = +t.top.replace(/[^-\d.]/g, "")), {
				x: e,
				y: t
			}
		},
		_initIndicators: function () {
			function e(e) {
				if (s.indicators)
					for (var t = s.indicators.length; t--;) e.call(s.indicators[t])
			}
			var t, i = this.options.interactiveScrollbars,
				n = "string" != typeof this.options.scrollbars,
				o = [],
				s = this;
			for (this.indicators = [], this.options.scrollbars && (this.options.scrollY && (t = {
				el: l("v", i, this.options.scrollbars),
				interactive: i,
				defaultScrollbars: !0,
				customStyle: n,
				resize: this.options.resizeScrollbars,
				shrink: this.options.shrinkScrollbars,
				fade: this.options.fadeScrollbars,
				listenX: !1
			}, this.wrapper.appendChild(t.el), o.push(t)), this.options.scrollX && (t = {
				el: l("h", i, this.options.scrollbars),
				interactive: i,
				defaultScrollbars: !0,
				customStyle: n,
				resize: this.options.resizeScrollbars,
				shrink: this.options.shrinkScrollbars,
				fade: this.options.fadeScrollbars,
				listenY: !1
			}, this.wrapper.appendChild(t.el), o.push(t))), this.options.indicators && (o = o.concat(this.options.indicators)), i = o.length; i--;) this.indicators.push(new d(this, o[i]));
			this.options.fadeScrollbars && (this.on("scrollEnd", function () {
				e(function () {
					this.fade()
				})
			}), this.on("scrollCancel", function () {
				e(function () {
					this.fade()
				})
			}), this.on("scrollStart", function () {
				e(function () {
					this.fade(1)
				})
			}), this.on("beforeScrollStart", function () {
				e(function () {
					this.fade(1, !0)
				})
			})), this.on("refresh", function () {
				e(function () {
					this.refresh()
				})
			}), this.on("destroy", function () {
				e(function () {
					this.destroy()
				}), delete this.indicators
			})
		},
		_initWheel: function () {
			p.addEvent(this.wrapper, "wheel", this), p.addEvent(this.wrapper, "mousewheel", this), p.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function () {
				clearTimeout(this.wheelTimeout), this.wheelTimeout = null, p.removeEvent(this.wrapper, "wheel", this), p.removeEvent(this.wrapper, "mousewheel", this), p.removeEvent(this.wrapper, "DOMMouseScroll", this)
			})
		},
		_wheel: function (e) {
			if (this.enabled) {
				var t, i, n, o = this;
				if (void 0 === this.wheelTimeout && o._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function () {
					o.options.snap || o._execEvent("scrollEnd"), o.wheelTimeout = void 0
				}, 400), "deltaX" in e) 1 === e.deltaMode ? (t = -e.deltaX * this.options.mouseWheelSpeed, e = -e.deltaY * this.options.mouseWheelSpeed) : (t = -e.deltaX, e = -e.deltaY);
				else if ("wheelDeltaX" in e) t = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed, e = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
				else if ("wheelDelta" in e) t = e = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
				else {
					if (!("detail" in e)) return;
					t = e = -e.detail / 3 * this.options.mouseWheelSpeed
				}
				t *= this.options.invertWheelDirection, e *= this.options.invertWheelDirection, this.hasVerticalScroll || (t = e, e = 0), this.options.snap ? (i = this.currentPage.pageX, n = this.currentPage.pageY, 0 < t ? i-- : t < 0 && i++, 0 < e ? n-- : e < 0 && n++, this.goToPage(i, n)) : (i = this.x + c.round(this.hasHorizontalScroll ? t : 0), n = this.y + c.round(this.hasVerticalScroll ? e : 0), this.directionX = 0 < t ? -1 : t < 0 ? 1 : 0, this.directionY = 0 < e ? -1 : e < 0 ? 1 : 0, 0 < i ? i = 0 : i < this.maxScrollX && (i = this.maxScrollX), 0 < n ? n = 0 : n < this.maxScrollY && (n = this.maxScrollY), this.scrollTo(i, n, 0))
			}
		},
		_initSnap: function () {
			this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function () {
				var e, t, i, n, o, s = 0,
					r = 0,
					a = 0;
				t = this.options.snapStepX || this.wrapperWidth;
				var l = this.options.snapStepY || this.wrapperHeight;
				if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
					if (!0 === this.options.snap)
						for (i = c.round(t / 2), n = c.round(l / 2); a > -this.scrollerWidth;) {
							for (this.pages[s] = [], o = e = 0; o > -this.scrollerHeight;) this.pages[s][e] = {
								x: c.max(a, this.maxScrollX),
								y: c.max(o, this.maxScrollY),
								width: t,
								height: l,
								cx: a - i,
								cy: o - n
							}, o -= l, e++;
							a -= t, s++
						} else
							for (e = (l = this.options.snap).length, t = -1; s < e; s++)(0 === s || l[s].offsetLeft <= l[s - 1].offsetLeft) && (r = 0, t++), this.pages[r] || (this.pages[r] = []), a = c.max(-l[s].offsetLeft, this.maxScrollX), o = c.max(-l[s].offsetTop, this.maxScrollY), i = a - c.round(l[s].offsetWidth / 2), n = o - c.round(l[s].offsetHeight / 2), this.pages[r][t] = {
								x: a,
								y: o,
								width: l[s].offsetWidth,
								height: l[s].offsetHeight,
								cx: i,
								cy: n
							}, a > this.maxScrollX && r++;
					this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), 0 == this.options.snapThreshold % 1 ? this.snapThresholdY = this.snapThresholdX = this.options.snapThreshold : (this.snapThresholdX = c.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = c.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
				}
			}), this.on("flick", function () {
				var e = this.options.snapSpeed || c.max(c.max(c.min(c.abs(this.x - this.startX), 1e3), c.min(c.abs(this.y - this.startY), 1e3)), 300);
				this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, e)
			})
		},
		_nearestSnap: function (e, t) {
			if (!this.pages.length) return {
				x: 0,
				y: 0,
				pageX: 0,
				pageY: 0
			};
			var i = 0,
				n = this.pages.length,
				o = 0;
			if (c.abs(e - this.absStartX) < this.snapThresholdX && c.abs(t - this.absStartY) < this.snapThresholdY) return this.currentPage;
			for (0 < e ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX), 0 < t ? t = 0 : t < this.maxScrollY && (t = this.maxScrollY); i < n; i++)
				if (e >= this.pages[i][0].cx) {
					e = this.pages[i][0].x;
					break
				}
			for (n = this.pages[i].length; o < n; o++)
				if (t >= this.pages[0][o].cy) {
					t = this.pages[0][o].y;
					break
				}
			return i == this.currentPage.pageX && ((i += this.directionX) < 0 ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1), e = this.pages[i][0].x), o == this.currentPage.pageY && ((o += this.directionY) < 0 ? o = 0 : o >= this.pages[0].length && (o = this.pages[0].length - 1), t = this.pages[0][o].y), {
				x: e,
				y: t,
				pageX: i,
				pageY: o
			}
		},
		goToPage: function (e, t, i, n) {
			n = n || this.options.bounceEasing, e >= this.pages.length ? e = this.pages.length - 1 : e < 0 && (e = 0), t >= this.pages[e].length ? t = this.pages[e].length - 1 : t < 0 && (t = 0);
			var o = this.pages[e][t].x,
				s = this.pages[e][t].y;
			i = void 0 === i ? this.options.snapSpeed || c.max(c.max(c.min(c.abs(o - this.x), 1e3), c.min(c.abs(s - this.y), 1e3)), 300) : i, this.currentPage = {
				x: o,
				y: s,
				pageX: e,
				pageY: t
			}, this.scrollTo(o, s, i, n)
		},
		next: function (e, t) {
			var i = this.currentPage.pageX,
				n = this.currentPage.pageY;
			++i >= this.pages.length && this.hasVerticalScroll && (i = 0, n++), this.goToPage(i, n, e, t)
		},
		prev: function (e, t) {
			var i = this.currentPage.pageX,
				n = this.currentPage.pageY;
			--i < 0 && this.hasVerticalScroll && (i = 0, n--), this.goToPage(i, n, e, t)
		},
		_initKeys: function (e) {
			var t;
			if (e = {
				pageUp: 33,
				pageDown: 34,
				end: 35,
				home: 36,
				left: 37,
				up: 38,
				right: 39,
				down: 40
			}, "object" == typeof this.options.keyBindings)
				for (t in this.options.keyBindings) "string" == typeof this.options.keyBindings[t] && (this.options.keyBindings[t] = this.options.keyBindings[t].toUpperCase().charCodeAt(0));
			else this.options.keyBindings = {};
			for (t in e) this.options.keyBindings[t] = this.options.keyBindings[t] || e[t];
			p.addEvent(r, "keydown", this), this.on("destroy", function () {
				p.removeEvent(r, "keydown", this)
			})
		},
		_key: function (e) {
			if (this.enabled) {
				var t, i = this.options.snap,
					n = i ? this.currentPage.pageX : this.x,
					o = i ? this.currentPage.pageY : this.y,
					s = p.getTime(),
					r = this.keyTime || 0;
				switch (this.options.useTransition && this.isInTransition && (t = this.getComputedPosition(), this._translate(c.round(t.x), c.round(t.y)), this.isInTransition = !1), this.keyAcceleration = s - r < 200 ? c.min(this.keyAcceleration + .25, 50) : 0, e.keyCode) {
				case this.options.keyBindings.pageUp:
					this.hasHorizontalScroll && !this.hasVerticalScroll ? n += i ? 1 : this.wrapperWidth : o += i ? 1 : this.wrapperHeight;
					break;
				case this.options.keyBindings.pageDown:
					this.hasHorizontalScroll && !this.hasVerticalScroll ? n -= i ? 1 : this.wrapperWidth : o -= i ? 1 : this.wrapperHeight;
					break;
				case this.options.keyBindings.end:
					n = i ? this.pages.length - 1 : this.maxScrollX, o = i ? this.pages[0].length - 1 : this.maxScrollY;
					break;
				case this.options.keyBindings.home:
					o = n = 0;
					break;
				case this.options.keyBindings.left:
					n += i ? -1 : 5 + this.keyAcceleration >> 0;
					break;
				case this.options.keyBindings.up:
					o += i ? 1 : 5 + this.keyAcceleration >> 0;
					break;
				case this.options.keyBindings.right:
					n -= i ? -1 : 5 + this.keyAcceleration >> 0;
					break;
				case this.options.keyBindings.down:
					o -= i ? 1 : 5 + this.keyAcceleration >> 0;
					break;
				default:
					return
				}
				i ? this.goToPage(n, o) : (0 < n ? this.keyAcceleration = n = 0 : n < this.maxScrollX && (n = this.maxScrollX, this.keyAcceleration = 0), 0 < o ? this.keyAcceleration = o = 0 : o < this.maxScrollY && (o = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(n, o, 0), this.keyTime = s)
			}
		},
		_animate: function (n, o, s, r) {
			var a = this,
				l = this.x,
				c = this.y,
				d = p.getTime(),
				u = d + s;
			this.isAnimating = !0,
			function e() {
				var t, i = p.getTime();
				u <= i ? (a.isAnimating = !1, a._translate(n, o), a.resetPosition(a.options.bounceTime) || a._execEvent("scrollEnd")) : (t = r(i = (i - d) / s), i = (n - l) * t + l, t = (o - c) * t + c, a._translate(i, t), a.isAnimating && h(e))
			}()
		},
		handleEvent: function (e) {
			switch (e.type) {
			case "touchstart":
			case "pointerdown":
			case "MSPointerDown":
			case "mousedown":
				this._start(e);
				break;
			case "touchmove":
			case "pointermove":
			case "MSPointerMove":
			case "mousemove":
				this._move(e);
				break;
			case "touchend":
			case "pointerup":
			case "MSPointerUp":
			case "mouseup":
			case "touchcancel":
			case "pointercancel":
			case "MSPointerCancel":
			case "mousecancel":
				this._end(e);
				break;
			case "orientationchange":
			case "resize":
				this._resize();
				break;
			case "transitionend":
			case "webkitTransitionEnd":
			case "oTransitionEnd":
			case "MSTransitionEnd":
				this._transitionEnd(e);
				break;
			case "wheel":
			case "DOMMouseScroll":
			case "mousewheel":
				this._wheel(e);
				break;
			case "keydown":
				this._key(e);
				break;
			case "click":
				this.enabled && !e._constructed && (e.preventDefault(), e.stopPropagation())
			}
		}
	}, d.prototype = {
		handleEvent: function (e) {
			switch (e.type) {
			case "touchstart":
			case "pointerdown":
			case "MSPointerDown":
			case "mousedown":
				this._start(e);
				break;
			case "touchmove":
			case "pointermove":
			case "MSPointerMove":
			case "mousemove":
				this._move(e);
				break;
			case "touchend":
			case "pointerup":
			case "MSPointerUp":
			case "mouseup":
			case "touchcancel":
			case "pointercancel":
			case "MSPointerCancel":
			case "mousecancel":
				this._end(e)
			}
		},
		destroy: function () {
			this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (p.removeEvent(this.indicator, "touchstart", this), p.removeEvent(this.indicator, p.prefixPointerEvent("pointerdown"), this), p.removeEvent(this.indicator, "mousedown", this), p.removeEvent(r, "touchmove", this), p.removeEvent(r, p.prefixPointerEvent("pointermove"), this), p.removeEvent(r, "mousemove", this), p.removeEvent(r, "touchend", this), p.removeEvent(r, p.prefixPointerEvent("pointerup"), this), p.removeEvent(r, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
		},
		_start: function (e) {
			var t = e.touches ? e.touches[0] : e;
			e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = t.pageX, this.lastPointY = t.pageY, this.startTime = p.getTime(), this.options.disableTouch || p.addEvent(r, "touchmove", this), this.options.disablePointer || p.addEvent(r, p.prefixPointerEvent("pointermove"), this), this.options.disableMouse || p.addEvent(r, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
		},
		_move: function (e) {
			var t, i, n = e.touches ? e.touches[0] : e;
			p.getTime(), this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, t = n.pageX - this.lastPointX, this.lastPointX = n.pageX, i = n.pageY - this.lastPointY, this.lastPointY = n.pageY, this._pos(this.x + t, this.y + i), e.preventDefault(), e.stopPropagation()
		},
		_end: function (e) {
			if (this.initiated) {
				if (this.initiated = !1, e.preventDefault(), e.stopPropagation(), p.removeEvent(r, "touchmove", this), p.removeEvent(r, p.prefixPointerEvent("pointermove"), this), p.removeEvent(r, "mousemove", this), this.scroller.options.snap) {
					e = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
					var t = this.options.snapSpeed || c.max(c.max(c.min(c.abs(this.scroller.x - e.x), 1e3), c.min(c.abs(this.scroller.y - e.y), 1e3)), 300);
					this.scroller.x == e.x && this.scroller.y == e.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = e, this.scroller.scrollTo(e.x, e.y, t, this.scroller.options.bounceEasing))
				}
				this.moved && this.scroller._execEvent("scrollEnd")
			}
		},
		transitionTime: function (e) {
			e = e || 0;
			var t = p.style.transitionDuration;
			if (t && (this.indicatorStyle[t] = e + "ms", !e && p.isBadAndroid)) {
				this.indicatorStyle[t] = "0.0001ms";
				var i = this;
				h(function () {
					"0.0001ms" === i.indicatorStyle[t] && (i.indicatorStyle[t] = "0s")
				})
			}
		},
		transitionTimingFunction: function (e) {
			this.indicatorStyle[p.style.transitionTimingFunction] = e
		},
		refresh: function () {
			this.transitionTime(), this.indicatorStyle.display = this.options.listenX && !this.options.listenY ? this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.scroller.hasVerticalScroll ? "block" : "none" : this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (p.addClass(this.wrapper, "iScrollBothScrollbars"), p.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (p.removeClass(this.wrapper, "iScrollBothScrollbars"), p.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px")), this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = c.max(c.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = 8 - this.indicatorWidth, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = c.max(c.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = 8 - this.indicatorHeight, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
		},
		updatePosition: function () {
			var e = this.options.listenX && c.round(this.sizeRatioX * this.scroller.x) || 0,
				t = this.options.listenY && c.round(this.sizeRatioY * this.scroller.y) || 0;
			this.options.ignoreBoundaries || (e < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = c.max(this.indicatorWidth + e, 8), this.indicatorStyle.width = this.width + "px"), e = this.minBoundaryX) : e > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = c.max(this.indicatorWidth - (e - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", e = this.maxPosX + this.indicatorWidth - this.width) : e = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), t < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = c.max(this.indicatorHeight + 3 * t, 8), this.indicatorStyle.height = this.height + "px"), t = this.minBoundaryY) : t > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = c.max(this.indicatorHeight - 3 * (t - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", t = this.maxPosY + this.indicatorHeight - this.height) : t = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = e, this.y = t, this.scroller.options.useTransform ? this.indicatorStyle[p.style.transform] = "translate(" + e + "px," + t + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = e + "px", this.indicatorStyle.top = t + "px")
		},
		_pos: function (e, t) {
			e < 0 ? e = 0 : e > this.maxPosX && (e = this.maxPosX), t < 0 ? t = 0 : t > this.maxPosY && (t = this.maxPosY), e = this.options.listenX ? c.round(e / this.sizeRatioX) : this.scroller.x, t = this.options.listenY ? c.round(t / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(e, t)
		},
		fade: function (e, t) {
			if (!t || this.visible) {
				clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
				var i = e ? 0 : 300;
				this.wrapperStyle[p.style.transitionDuration] = (e ? 250 : 500) + "ms", this.fadeTimeout = setTimeout(function (e) {
					this.wrapperStyle.opacity = e, this.visible = +e
				}.bind(this, e ? "1" : "0"), i)
			}
		}
	}, e.utils = p, "undefined" != typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd ? define(function () {
		return e
	}) : r.IScroll = e
}(window, document, Math),
function () {
	"use strict";

	function a(o, e) {
		var t;
		if (e = e || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = e.touchBoundary || 10, this.layer = o, this.tapDelay = e.tapDelay || 200, this.tapTimeout = e.tapTimeout || 700, !a.notNeeded(o)) {
			for (var i = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], n = 0, s = i.length; n < s; n++) this[i[n]] = r(this[i[n]], this);
			l && (o.addEventListener("mouseover", this.onMouse, !0), o.addEventListener("mousedown", this.onMouse, !0), o.addEventListener("mouseup", this.onMouse, !0)), o.addEventListener("click", this.onClick, !0), o.addEventListener("touchstart", this.onTouchStart, !1), o.addEventListener("touchmove", this.onTouchMove, !1), o.addEventListener("touchend", this.onTouchEnd, !1), o.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (o.removeEventListener = function (e, t, i) {
				var n = Node.prototype.removeEventListener;
				"click" === e ? n.call(o, e, t.hijacked || t, i) : n.call(o, e, t, i)
			}, o.addEventListener = function (e, t, i) {
				var n = Node.prototype.addEventListener;
				"click" === e ? n.call(o, e, t.hijacked || (t.hijacked = function (e) {
					e.propagationStopped || t(e)
				}), i) : n.call(o, e, t, i)
			}), "function" == typeof o.onclick && (t = o.onclick, o.addEventListener("click", function (e) {
				t(e)
			}, !1), o.onclick = null)
		}

		function r(e, t) {
			return function () {
				return e.apply(t, arguments)
			}
		}
	}
	var e = 0 <= navigator.userAgent.indexOf("Windows Phone"),
		l = 0 < navigator.userAgent.indexOf("Android") && !e,
		c = /iP(ad|hone|od)/.test(navigator.userAgent) && !e,
		d = c && /OS 4_\d(_\d)?/.test(navigator.userAgent),
		u = c && /OS [6-7]_\d/.test(navigator.userAgent),
		o = 0 < navigator.userAgent.indexOf("BB10");
	a.prototype.needsClick = function (e) {
		switch (e.nodeName.toLowerCase()) {
		case "button":
		case "select":
		case "textarea":
			if (e.disabled) return !0;
			break;
		case "input":
			if (c && "file" === e.type || e.disabled) return !0;
			break;
		case "label":
		case "iframe":
		case "video":
			return !0
		}
		return /\bneedsclick\b/.test(e.className)
	}, a.prototype.needsFocus = function (e) {
		switch (e.nodeName.toLowerCase()) {
		case "textarea":
			return !0;
		case "select":
			return !l;
		case "input":
			switch (e.type) {
			case "button":
			case "checkbox":
			case "file":
			case "image":
			case "radio":
			case "submit":
				return !1
			}
			return !e.disabled && !e.readOnly;
		default:
			return /\bneedsfocus\b/.test(e.className)
		}
	}, a.prototype.sendClick = function (e, t) {
		var i, n;
		document.activeElement && document.activeElement !== e && document.activeElement.blur(), n = t.changedTouches[0], (i = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(e), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, e.dispatchEvent(i)
	}, a.prototype.determineEventType = function (e) {
		return l && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
	}, a.prototype.focus = function (e) {
		var t;
		c && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
	}, a.prototype.updateScrollParent = function (e) {
		var t, i;
		if (!(t = e.fastClickScrollParent) || !t.contains(e)) {
			i = e;
			do {
				if (i.scrollHeight > i.offsetHeight) {
					t = i, e.fastClickScrollParent = i;
					break
				}
				i = i.parentElement
			} while (i)
		}
		t && (t.fastClickLastScrollTop = t.scrollTop)
	}, a.prototype.getTargetElementFromEventTarget = function (e) {
		return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
	}, a.prototype.onTouchStart = function (e) {
		var t, i, n;
		if (1 < e.targetTouches.length) return !0;
		if (t = this.getTargetElementFromEventTarget(e.target), i = e.targetTouches[0], c) {
			if ((n = window.getSelection()).rangeCount && !n.isCollapsed) return !0;
			if (!d) {
				if (i.identifier && i.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
				this.lastTouchIdentifier = i.identifier, this.updateScrollParent(t)
			}
		}
		return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = i.pageX, this.touchStartY = i.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
	}, a.prototype.touchHasMoved = function (e) {
		var t = e.changedTouches[0],
			i = this.touchBoundary;
		return Math.abs(t.pageX - this.touchStartX) > i || Math.abs(t.pageY - this.touchStartY) > i
	}, a.prototype.onTouchMove = function (e) {
		return this.trackingClick && (this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0
	}, a.prototype.findControl = function (e) {
		return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
	}, a.prototype.onTouchEnd = function (e) {
		var t, i, n, o, s, r = this.targetElement;
		if (!this.trackingClick) return !0;
		if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0;
		if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
		if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, i = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, u && (s = e.changedTouches[0], (r = document.elementFromPoint(s.pageX - window.pageXOffset, s.pageY - window.pageYOffset) || r).fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (n = r.tagName.toLowerCase())) {
			if (t = this.findControl(r)) {
				if (this.focus(r), l) return !1;
				r = t
			}
		} else if (this.needsFocus(r)) return 100 < e.timeStamp - i || c && window.top !== window && "input" === n ? this.targetElement = null : (this.focus(r), this.sendClick(r, e), c && "select" === n || (this.targetElement = null, e.preventDefault())), !1;
		return !(!c || d || !(o = r.fastClickScrollParent) || o.fastClickLastScrollTop === o.scrollTop) || (this.needsClick(r) || (e.preventDefault(), this.sendClick(r, e)), !1)
	}, a.prototype.onTouchCancel = function () {
		this.trackingClick = !1, this.targetElement = null
	}, a.prototype.onMouse = function (e) {
		return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1))))
	}, a.prototype.onClick = function (e) {
		var t;
		return this.trackingClick ? (this.targetElement = null, !(this.trackingClick = !1)) : "submit" === e.target.type && 0 === e.detail || ((t = this.onMouse(e)) || (this.targetElement = null), t)
	}, a.prototype.destroy = function () {
		var e = this.layer;
		l && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
	}, a.notNeeded = function (e) {
		var t, i, n;
		if (void 0 === window.ontouchstart) return !0;
		if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
			if (!l) return !0;
			if (t = document.querySelector("meta[name=viewport]")) {
				if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
				if (31 < i && document.documentElement.scrollWidth <= window.outerWidth) return !0
			}
		}
		if (o && 10 <= (n = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] && 3 <= n[2] && (t = document.querySelector("meta[name=viewport]"))) {
			if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
			if (document.documentElement.scrollWidth <= window.outerWidth) return !0
		}
		return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || (!!(27 <= +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] && (t = document.querySelector("meta[name=viewport]")) && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === e.style.touchAction || "manipulation" === e.style.touchAction))
	}, a.attach = function (e, t) {
		return new a(e, t)
	}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
		return a
	}) : "undefined" != typeof module && module.exports ? (module.exports = a.attach, module.exports.FastClick = a) : window.FastClick = a
}(),
function () {
	var e, t, i;
	e = function () {
		function n(e, t) {
			var i, n;
			if (this.options = {
				target: "instafeed",
				get: "popular",
				resolution: "thumbnail",
				sortBy: "none",
				links: !0,
				mock: !1,
				useHttp: !1
			}, "object" == typeof e)
				for (i in e) n = e[i], this.options[i] = n;
			this.context = null != t ? t : this, this.unique = this._genKey()
		}
		return n.prototype.hasNext = function () {
			return "string" == typeof this.context.nextUrl && 0 < this.context.nextUrl.length
		}, n.prototype.next = function () {
			return !!this.hasNext() && this.run(this.context.nextUrl)
		}, n.prototype.run = function (e) {
			var t, i;
			if ("string" != typeof this.options.clientId && "string" != typeof this.options.accessToken) throw new Error("Missing clientId or accessToken.");
			if ("string" != typeof this.options.accessToken && "string" != typeof this.options.clientId) throw new Error("Missing clientId or accessToken.");
			return null != this.options.before && "function" == typeof this.options.before && this.options.before.call(this), "undefined" != typeof document && null !== document && ((i = document.createElement("script")).id = "instafeed-fetcher", i.src = e || this._buildUrl(), document.getElementsByTagName("head")[0].appendChild(i), t = "instafeedCache" + this.unique, window[t] = new n(this.options, this), window[t].unique = this.unique), !0
		}, n.prototype.parse = function (e) {
			var t, i, n, o, s, r, a, l, c, d, u, h, p, f, m, v, g, y, w, b, x, T, k, S, C, $, E, A;
			if ("object" != typeof e) {
				if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "Invalid JSON data"), !1;
				throw new Error("Invalid JSON response")
			}
			if (200 !== e.meta.code) {
				if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, e.meta.error_message), !1;
				throw new Error("Error from Instagram: " + e.meta.error_message)
			}
			if (0 === e.data.length) {
				if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "No images were returned from Instagram"), !1;
				throw new Error("No images were returned from Instagram")
			}
			if (null != this.options.success && "function" == typeof this.options.success && this.options.success.call(this, e), this.context.nextUrl = "", null != e.pagination && (this.context.nextUrl = e.pagination.next_url), "none" !== this.options.sortBy) switch (C = "least" === ($ = "random" === this.options.sortBy ? ["", "random"] : this.options.sortBy.split("-"))[0], $[1]) {
			case "random":
				e.data.sort(function () {
					return .5 - Math.random()
				});
				break;
			case "recent":
				e.data = this._sortBy(e.data, "created_time", C);
				break;
			case "liked":
				e.data = this._sortBy(e.data, "likes.count", C);
				break;
			case "commented":
				e.data = this._sortBy(e.data, "comments.count", C);
				break;
			default:
				throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
			}
			if ("undefined" != typeof document && null !== document && !1 === this.options.mock) {
				if (h = e.data, S = parseInt(this.options.limit, 10), null != this.options.limit && h.length > S && (h = h.slice(0, S)), r = document.createDocumentFragment(), null != this.options.filter && "function" == typeof this.options.filter && (h = this._filter(h, this.options.filter)), null != this.options.template && "string" == typeof this.options.template) {
					for (a = "", A = document.createElement("div"), l = 0, b = h.length; l < b; l++) {
						if ("object" != typeof (d = (c = h[l]).images[this.options.resolution])) throw s = "No image found for resolution: " + this.options.resolution + ".", new Error(s);
						v = d.width, m = "square", (f = d.height) < v && (m = "landscape"), v < f && (m = "portrait"), u = d.url, 0 <= window.location.protocol.indexOf("http") && !this.options.useHttp && (u = u.replace(/https?:\/\//, "//")), a += this._makeTemplate(this.options.template, {
							model: c,
							id: c.id,
							link: c.link,
							type: c.type,
							image: u,
							width: v,
							height: f,
							orientation: m,
							caption: this._getObjectProperty(c, "caption.text"),
							likes: c.likes.count,
							comments: c.comments.count,
							location: this._getObjectProperty(c, "location.name")
						})
					}
					for (A.innerHTML = a, o = [], n = 0, i = A.childNodes.length; n < i;) o.push(A.childNodes[n]), n += 1;
					for (y = 0, x = o.length; y < x; y++) k = o[y], r.appendChild(k)
				} else
					for (w = 0, T = h.length; w < T; w++) {
						if (c = h[w], p = document.createElement("img"), "object" != typeof (d = c.images[this.options.resolution])) throw s = "No image found for resolution: " + this.options.resolution + ".", new Error(s);
						u = d.url, 0 <= window.location.protocol.indexOf("http") && !this.options.useHttp && (u = u.replace(/https?:\/\//, "//")), p.src = u, !0 === this.options.links ? ((t = document.createElement("a")).href = c.link, t.appendChild(p), r.appendChild(t)) : r.appendChild(p)
					}
				if ("string" == typeof (E = this.options.target) && (E = document.getElementById(E)), null == E) throw s = 'No element with id="' + this.options.target + '" on page.', new Error(s);
				E.appendChild(r), document.getElementsByTagName("head")[0].removeChild(document.getElementById("instafeed-fetcher")), g = "instafeedCache" + this.unique, window[g] = void 0;
				try {
					delete window[g]
				} catch (e) {
					e
				}
			}
			return null != this.options.after && "function" == typeof this.options.after && this.options.after.call(this), !0
		}, n.prototype._buildUrl = function () {
			var e, t;
			switch ("https://api.instagram.com/v1", this.options.get) {
			case "popular":
				e = "media/popular";
				break;
			case "tagged":
				if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
				e = "tags/" + this.options.tagName + "/media/recent";
				break;
			case "location":
				if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
				e = "locations/" + this.options.locationId + "/media/recent";
				break;
			case "user":
				if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
				e = "users/" + this.options.userId + "/media/recent";
				break;
			default:
				throw new Error("Invalid option for get: '" + this.options.get + "'.")
			}
			return t = "https://api.instagram.com/v1/" + e, null != this.options.accessToken ? t += "?access_token=" + this.options.accessToken : t += "?client_id=" + this.options.clientId, null != this.options.limit && (t += "&count=" + this.options.limit), t += "&callback=instafeedCache" + this.unique + ".parse"
		}, n.prototype._genKey = function () {
			var e;
			return "" + (e = function () {
				return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
			})() + e() + e() + e()
		}, n.prototype._makeTemplate = function (e, t) {
			var i, n, o, s, r;
			for (n = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, i = e; n.test(i);) s = i.match(n)[1], r = null != (o = this._getObjectProperty(t, s)) ? o : "", i = i.replace(n, function () {
				return "" + r
			});
			return i
		}, n.prototype._getObjectProperty = function (e, t) {
			var i, n;
			for (n = (t = t.replace(/\[(\w+)\]/g, ".$1")).split("."); n.length;) {
				if (i = n.shift(), !(null != e && i in e)) return null;
				e = e[i]
			}
			return e
		}, n.prototype._sortBy = function (e, o, s) {
			var t;
			return t = function (e, t) {
				var i, n;
				return i = this._getObjectProperty(e, o), n = this._getObjectProperty(t, o), s ? n < i ? 1 : -1 : i < n ? 1 : -1
			}, e.sort(t.bind(this)), e
		}, n.prototype._filter = function (e, t) {
			var i, n, o, s;
			for (i = [], n = function (e) {
				if (t(e)) return i.push(e)
			}, o = 0, s = e.length; o < s; o++) n(e[o]);
			return i
		}, n
	}(), t = this, i = function () {
		return e
	}, "function" == typeof define && define.amd ? define([], i) : "object" == typeof module && module.exports ? module.exports = i() : t.Instafeed = i()
}.call(this),
function (e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
}(function (s) {
	var r = function (e, t) {
		this.$element = s(e), this.options = s.extend({}, r.DEFAULTS, this.dataOptions(), t), this.init()
	};
	r.DEFAULTS = {
		from: 0,
		to: 0,
		speed: 1e3,
		refreshInterval: 100,
		decimals: 0,
		formatter: function (e, t) {
			return e.toFixed(t.decimals)
		},
		onUpdate: null,
		onComplete: null
	}, r.prototype.init = function () {
		this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
	}, r.prototype.dataOptions = function () {
		var e = {
				from: this.$element.data("from"),
				to: this.$element.data("to"),
				speed: this.$element.data("speed"),
				refreshInterval: this.$element.data("refresh-interval"),
				decimals: this.$element.data("decimals")
			},
			t = Object.keys(e);
		for (var i in t) {
			var n = t[i];
			void 0 === e[n] && delete e[n]
		}
		return e
	}, r.prototype.update = function () {
		this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
	}, r.prototype.render = function () {
		var e = this.options.formatter.call(this.$element, this.value, this.options);
		this.$element.text(e)
	}, r.prototype.restart = function () {
		this.stop(), this.init(), this.start()
	}, r.prototype.start = function () {
		this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
	}, r.prototype.stop = function () {
		this.interval && clearInterval(this.interval)
	}, r.prototype.toggle = function () {
		this.interval ? this.stop() : this.start()
	}, s.fn.countTo = function (o) {
		return this.each(function () {
			var e = s(this),
				t = e.data("countTo"),
				i = "object" == typeof o ? o : {},
				n = "string" == typeof o ? o : "start";
			(!t || "object" == typeof o) && (t && t.stop(), e.data("countTo", t = new r(this, i))), t[n].call(t)
		})
	}
}),
function (o) {
	"use strict";
	o.fn.fitVids = function (e) {
		var i = {
			customSelector: null,
			ignore: null
		};
		if (!document.getElementById("fit-vids-style")) {
			var t = document.head || document.getElementsByTagName("head")[0],
				n = document.createElement("div");
			n.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', t.appendChild(n.childNodes[1])
		}
		return e && o.extend(i, e), this.each(function () {
			var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
			i.customSelector && e.push(i.customSelector);
			var n = ".fitvidsignore";
			i.ignore && (n = n + ", " + i.ignore);
			var t = o(this).find(e.join(","));
			(t = (t = t.not("object object")).not(n)).each(function () {
				var e = o(this);
				if (!(0 < e.parents(n).length || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
					e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9), e.attr("width", 16));
					var t = ("object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height()) / (isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10));
					if (!e.attr("name")) {
						var i = "fitvid" + o.fn.fitVids._count;
						e.attr("name", i), o.fn.fitVids._count++
					}
					e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * t + "%"), e.removeAttr("height").removeAttr("width")
				}
			})
		})
	}, o.fn.fitVids._count = 0
}(window.jQuery || window.Zepto),
function (t, i) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], function (e) {
		return i(e, t, t.document, t.Math)
	}) : "object" == typeof exports && exports ? module.exports = i(require("jquery"), t, t.document, t.Math) : i(jQuery, t, t.document, t.Math)
}("undefined" != typeof window ? window : this, function (tt, it, nt, ot, st) {
	"use strict";
	var rt = "fullpage-wrapper",
		at = "." + rt,
		e = "fp-scrollable",
		n = "." + e,
		lt = "fp-responsive",
		ct = "fp-notransition",
		dt = "fp-destroyed",
		ut = "fp-enabled",
		ht = "fp-viewing",
		pt = "active",
		ft = "." + pt,
		mt = "fp-completely",
		vt = "." + mt,
		gt = "fp-section",
		yt = "." + gt,
		wt = yt + ft,
		bt = yt + ":first",
		xt = yt + ":last",
		Tt = "fp-tableCell",
		kt = "." + Tt,
		St = "fp-auto-height",
		Ct = "fp-normal-scroll",
		$t = "fp-nav",
		Et = "#" + $t,
		At = "fp-tooltip",
		Pt = "." + At,
		Lt = "fp-show-active",
		Ot = "fp-slide",
		Ht = "." + Ot,
		Dt = Ht + ft,
		Mt = "fp-slides",
		Nt = "." + Mt,
		jt = "fp-slidesContainer",
		It = "." + jt,
		qt = "fp-table",
		zt = "fp-slidesNav",
		Wt = "." + zt,
		_t = Wt + " a",
		t = "fp-controlArrow",
		Xt = "." + t,
		Rt = "fp-prev",
		Ft = t + " " + Rt,
		Yt = Xt + ("." + Rt),
		i = "fp-next",
		Bt = t + " " + i,
		Vt = Xt + ".fp-next",
		Ut = tt(it),
		Qt = tt(nt),
		Kt = {
			scrollbars: !0,
			mouseWheel: !0,
			hideScrollbars: !1,
			fadeScrollbars: !1,
			disableMouse: !0,
			interactiveScrollbars: !0
		};
	tt.fn.fullpage = function (x) {
		function i(e, t) {
			e || ve(0), we("autoScrolling", e, t);
			var i = tt(wt);
			x.autoScrolling && !x.scrollBar ? (Te.css({
				overflow: "hidden",
				height: "100%"
			}), n(Fe.recordHistory, "internal"), Oe.css({
				"-ms-touch-action": "none",
				"touch-action": "none"
			}), i.length && ve(i.position().top)) : (Te.css({
				overflow: "visible",
				height: "initial"
			}), n(!1, "internal"), Oe.css({
				"-ms-touch-action": "",
				"touch-action": ""
			}), i.length && Te.scrollTop(i.position().top))
		}

		function n(e, t) {
			we("recordHistory", e, t)
		}

		function o(e, t) {
			we("scrollingSpeed", e, t)
		}

		function s(e, t) {
			we("fitToSection", e, t)
		}

		function t(e) {
			e ? (function () {
				var e, t = "";
				it.addEventListener ? e = "addEventListener" : (e = "attachEvent", t = "on");
				var i = "onwheel" in nt.createElement("div") ? "wheel" : nt.onmousewheel !== st ? "mousewheel" : "DOMMouseScroll";
				"DOMMouseScroll" == i ? nt[e](t + "MozMousePixelScroll", E, !1) : nt[e](t + i, E, !1)
			}(), Oe.on("mousedown", _).on("mouseup", X)) : (nt.addEventListener ? (nt.removeEventListener("mousewheel", E, !1), nt.removeEventListener("wheel", E, !1), nt.removeEventListener("MozMousePixelScroll", E, !1)) : nt.detachEvent("onmousewheel", E), Oe.off("mousedown", _).off("mouseup", X))
		}

		function r(i, e) {
			void 0 !== e ? (e = e.replace(/ /g, "").split(","), tt.each(e, function (e, t) {
				ye(i, t, "m")
			})) : i ? (t(!0), function () {
				if (Pe || Le) {
					var e = pe();
					x.autoScrolling && ke.off("touchmove " + e.move).on("touchmove " + e.move, b), tt(at).off("touchstart " + e.down).on("touchstart " + e.down, C).off("touchmove " + e.move).on("touchmove " + e.move, T)
				}
			}()) : (t(!1), function () {
				if (Pe || Le) {
					var e = pe();
					tt(at).off("touchstart " + e.down).off("touchmove " + e.move)
				}
			}())
		}

		function a(i, e) {
			void 0 !== e ? (e = e.replace(/ /g, "").split(","), tt.each(e, function (e, t) {
				ye(i, t, "k")
			})) : x.keyboardScrolling = i
		}

		function l() {
			var e = tt(wt).prev(yt);
			e.length || !x.loopTop && !x.continuousVertical || (e = tt(yt).last()), e.length && L(e, null, !0)
		}

		function c() {
			var e = tt(wt).next(yt);
			e.length || !x.loopBottom && !x.continuousVertical || (e = tt(yt).first()), e.length && L(e, null, !1)
		}

		function d(e, t) {
			o(0, "internal"), u(e, t), o(Fe.scrollingSpeed, "internal")
		}

		function u(e, t) {
			var i = re(e);
			void 0 !== t ? ae(e, t) : 0 < i.length && L(i)
		}

		function h(e) {
			A("right", e)
		}

		function p(e) {
			A("left", e)
		}

		function f(e) {
			if (!Oe.hasClass(dt)) {
				De = !0, He = Ut.height(), tt(yt).each(function () {
					var e = tt(this).find(Nt),
						t = tt(this).find(Ht);
					x.verticalCentered && tt(this).find(kt).css("height", oe(tt(this)) + "px"), tt(this).css("height", He + "px"), x.scrollOverflow && (t.length ? t.each(function () {
						ie(tt(this))
					}) : ie(tt(this))), 1 < t.length && U(e, e.find(Dt))
				});
				var t = tt(wt).index(yt);
				t && d(t + 1), De = !1, tt.isFunction(x.afterResize) && e && x.afterResize.call(Oe), tt.isFunction(x.afterReBuild) && !e && x.afterReBuild.call(Oe)
			}
		}

		function m(e) {
			var t = ke.hasClass(lt);
			e ? t || (i(!1, "internal"), s(!1, "internal"), tt(Et).hide(), ke.addClass(lt), tt.isFunction(x.afterResponsive) && x.afterResponsive.call(Oe, e)) : t && (i(Fe.autoScrolling, "internal"), s(Fe.autoScrolling, "internal"), tt(Et).show(), ke.removeClass(lt), tt.isFunction(x.afterResponsive) && x.afterResponsive.call(Oe, e))
		}

		function v() {
			tt(yt).each(function () {
				var e = tt(this).find(Ht);
				e.length ? e.each(function () {
					ie(tt(this))
				}) : ie(tt(this))
			}), g()
		}

		function g() {
			var e = tt(wt);
			e.addClass(mt), x.scrollOverflowHandler.afterRender && x.scrollOverflowHandler.afterRender(e), H(e), D(e), x.scrollOverflowHandler.afterLoad(), tt.isFunction(x.afterLoad) && x.afterLoad.call(e, e.data("anchor"), e.index(yt) + 1), tt.isFunction(x.afterRender) && x.afterRender.call(Oe)
		}

		function y() {
			var e, t, i, n, o, s;
			if (!x.autoScrolling || x.scrollBar) {
				var r = Ut.scrollTop(),
					a = (s = Be < (o = r) ? "down" : "up", Je = Be = o, s),
					l = 0,
					c = r + Ut.height() / 2,
					d = ke.height() - Ut.height() === r,
					u = nt.querySelectorAll(yt);
				if (d) l = u.length - 1;
				else if (r)
					for (var h = 0; h < u.length; ++h) {
						u[h].offsetTop <= c && (l = h)
					} else l = 0;
				if (t = a, i = tt(wt).position().top, n = i + Ut.height(), ("up" == t ? n >= Ut.scrollTop() + Ut.height() : i <= Ut.scrollTop()) && (tt(wt).hasClass(mt) || tt(wt).addClass(mt).siblings().removeClass(mt)), !(e = tt(u).eq(l)).hasClass(pt)) {
					Ye = !0;
					var p, f, m = tt(wt),
						v = m.index(yt) + 1,
						g = te(e),
						y = e.data("anchor"),
						w = e.index(yt) + 1,
						b = e.find(Dt);
					b.length && (f = b.data("anchor"), p = b.index()), Ne && (e.addClass(pt).siblings().removeClass(pt), tt.isFunction(x.onLeave) && x.onLeave.call(m, v, w, g), tt.isFunction(x.afterLoad) && x.afterLoad.call(e, y, w), N(m), H(e), D(e), ee(y, w - 1), x.anchors.length && (Ce = y), ce(p, f, y, w)), clearTimeout(_e), _e = setTimeout(function () {
						Ye = !1
					}, 100)
				}
				x.fitToSection && (clearTimeout(Xe), Xe = setTimeout(function () {
					Ne && x.fitToSection && (tt(wt).is(e) && (De = !0), L(tt(wt)), De = !1)
				}, x.fitToSectionDelay))
			}
		}

		function w(e, t) {
			if (Ie.m[e]) {
				var i = "down" === e ? "bottom" : "top",
					n = "down" === e ? c : l;
				if (0 < t.length) {
					if (!x.scrollOverflowHandler.isScrolled(i, t)) return !0;
					n()
				} else n()
			}
		}

		function b(e) {
			var t = e.originalEvent;
			!k(e.target) && x.autoScrolling && S(t) && e.preventDefault()
		}

		function T(e) {
			var t = e.originalEvent,
				i = tt(t.target).closest(yt);
			if (!k(e.target) && S(t)) {
				x.autoScrolling && e.preventDefault();
				var n = x.scrollOverflowHandler.scrollable(i),
					o = fe(t);
				Qe = o.y, Ke = o.x, i.find(Nt).length && ot.abs(Ue - Ke) > ot.abs(Ve - Qe) ? !Ae && ot.abs(Ue - Ke) > Ut.outerWidth() / 100 * x.touchSensitivity && (Ke < Ue ? Ie.m.right && h(i) : Ie.m.left && p(i)) : x.autoScrolling && Ne && ot.abs(Ve - Qe) > Ut.height() / 100 * x.touchSensitivity && (Qe < Ve ? w("down", n) : Ve < Qe && w("up", n))
			}
		}

		function k(e, t) {
			t = t || 0;
			var i = tt(e).parent();
			return !!(t < x.normalScrollElementTouchThreshold && i.is(x.normalScrollElements)) || t != x.normalScrollElementTouchThreshold && k(i, ++t)
		}

		function S(e) {
			return void 0 === e.pointerType || "mouse" != e.pointerType
		}

		function C(e) {
			var t = e.originalEvent;
			if (x.fitToSection && Te.stop(), S(t)) {
				var i = fe(t);
				Ve = i.y, Ue = i.x
			}
		}

		function $(e, t) {
			for (var i = 0, n = e.slice(ot.max(e.length - t, 1)), o = 0; o < n.length; o++) i += n[o];
			return ot.ceil(i / t)
		}

		function E(e) {
			var t = (new Date).getTime(),
				i = tt(vt).hasClass(Ct);
			if (x.autoScrolling && !Ee && !i) {
				var n = (e = e || it.event).wheelDelta || -e.deltaY || -e.detail,
					o = ot.max(-1, ot.min(1, n)),
					s = void 0 !== e.wheelDeltaX || void 0 !== e.deltaX,
					r = ot.abs(e.wheelDeltaX) < ot.abs(e.wheelDelta) || ot.abs(e.deltaX) < ot.abs(e.deltaY) || !s;
				149 < je.length && je.shift(), je.push(ot.abs(n)), x.scrollBar && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
				var a = tt(wt),
					l = x.scrollOverflowHandler.scrollable(a),
					c = t - Ge;
				if (Ge = t, 200 < c && (je = []), Ne) {
					var d = $(je, 10);
					$(je, 70) <= d && r && w(o < 0 ? "down" : "up", l)
				}
				return !1
			}
			x.fitToSection && Te.stop()
		}

		function A(e, t) {
			var i = (void 0 === t ? tt(wt) : t).find(Nt),
				n = i.find(Ht).length;
			if (!(!i.length || Ae || n < 2)) {
				var o = i.find(Dt),
					s = null;
				if (!(s = "left" === e ? o.prev(Ht) : o.next(Ht)).length) {
					if (!x.loopHorizontal) return;
					s = "left" === e ? o.siblings(":last") : o.siblings(":first")
				}
				Ae = !0, U(i, s, e)
			}
		}

		function P() {
			tt(Dt).each(function () {
				me(tt(this), "internal")
			})
		}

		function L(e, t, i) {
			if (void 0 !== e) {
				var n, o, s = {
					element: e,
					callback: t,
					isMovementUp: i,
					dtop: (l = (a = e).position(), c = l.top, d = l.top > Je, u = c - He + a.outerHeight(), h = x.bigSectionsDestination, a.outerHeight() > He ? (!d && !h || "bottom" === h) && (c = u) : (d || De && a.is(":last-child")) && (c = u), Je = c),
					yMovement: te(e),
					anchorLink: e.data("anchor"),
					sectionIndex: e.index(yt),
					activeSlide: e.find(Dt),
					activeSection: tt(wt),
					leavingSection: tt(wt).index(yt) + 1,
					localIsResizing: De
				};
				s.activeSection.is(e) && !De || x.scrollBar && Ut.scrollTop() === s.dtop && !e.hasClass(St) || (s.activeSlide.length && (n = s.activeSlide.data("anchor"), o = s.activeSlide.index()), x.autoScrolling && x.continuousVertical && void 0 !== s.isMovementUp && (!s.isMovementUp && "up" == s.yMovement || s.isMovementUp && "down" == s.yMovement) && ((r = s).isMovementUp ? tt(wt).before(r.activeSection.nextAll(yt)) : tt(wt).after(r.activeSection.prevAll(yt).get().reverse()), ve(tt(wt).position().top), P(), r.wrapAroundElements = r.activeSection, r.dtop = r.element.position().top, r.yMovement = te(r.element), s = r), (!tt.isFunction(x.onLeave) || s.localIsResizing || !1 !== x.onLeave.call(s.activeSection, s.leavingSection, s.sectionIndex + 1, s.yMovement)) && (N(s.activeSection), x.scrollOverflowHandler.beforeLeave(), e.addClass(pt).siblings().removeClass(pt), H(e), x.scrollOverflowHandler.onLeave(), Ne = !1, ce(o, n, s.anchorLink, s.sectionIndex), function (e) {
					if (x.css3 && x.autoScrolling && !x.scrollBar) {
						var t = "translate3d(0px, -" + ot.round(e.dtop) + "px, 0px)";
						se(t, !0), x.scrollingSpeed ? (clearTimeout(ze), ze = setTimeout(function () {
							O(e)
						}, x.scrollingSpeed)) : O(e)
					} else {
						var i = (n = e, o = {}, x.autoScrolling && !x.scrollBar ? (o.options = {
							top: -n.dtop
						}, o.element = at) : (o.options = {
							scrollTop: n.dtop
						}, o.element = "html, body"), o);
						tt(i.element).animate(i.options, x.scrollingSpeed, x.easing).promise().done(function () {
							x.scrollBar ? setTimeout(function () {
								O(e)
							}, 30) : O(e)
						})
					}
					var n, o
				}(s), Ce = s.anchorLink, ee(s.anchorLink, s.sectionIndex)))
			}
			var r, a, l, c, d, u, h
		}

		function O(e) {
			var t;
			(t = e).wrapAroundElements && t.wrapAroundElements.length && (t.isMovementUp ? tt(bt).before(t.wrapAroundElements) : tt(xt).after(t.wrapAroundElements), ve(tt(wt).position().top), P()), tt.isFunction(x.afterLoad) && !e.localIsResizing && x.afterLoad.call(e.element, e.anchorLink, e.sectionIndex + 1), x.scrollOverflowHandler.afterLoad(), e.localIsResizing || D(e.element), e.element.addClass(mt).siblings().removeClass(mt), Ne = !0, tt.isFunction(e.callback) && e.callback.call(this)
		}

		function H(e) {
			var t;
			x.lazyLoading && j(e).find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function () {
				(t = tt(this)).attr("src", t.data("src")), t.removeAttr("data-src"), t.is("source") && t.closest("video").get(0).load()
			})
		}

		function D(e) {
			var t = j(e);
			t.find("video, audio").each(function () {
				var e = tt(this).get(0);
				e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
			}), t.find('iframe[src*="youtube.com/embed/"]').each(function () {
				var e = tt(this).get(0);
				e.hasAttribute("data-autoplay") && M(e), e.onload = function () {
					e.hasAttribute("data-autoplay") && M(e)
				}
			})
		}

		function M(e) {
			e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
		}

		function N(e) {
			var t = j(e);
			t.find("video, audio").each(function () {
				var e = tt(this).get(0);
				e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
			}), t.find('iframe[src*="youtube.com/embed/"]').each(function () {
				var e = tt(this).get(0);
				/youtube\.com\/embed\//.test(tt(this).attr("src")) && !e.hasAttribute("data-keepplaying") && tt(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
			})
		}

		function j(e) {
			var t = e.find(Dt);
			return t.length && (e = tt(t)), e
		}

		function I() {
			var e = it.location.hash.replace("#", "").split("/"),
				t = decodeURIComponent(e[0]),
				i = decodeURIComponent(e[1]);
			t && (x.animateAnchor ? ae(t, i) : d(t, i))
		}

		function q() {
			if (!Ye && !x.lockAnchors) {
				var e = it.location.hash.replace("#", "").split("/"),
					t = decodeURIComponent(e[0]),
					i = decodeURIComponent(e[1]),
					n = void 0 === Ce,
					o = void 0 === Ce && void 0 === i && !Ae;
				t.length && (t && t !== Ce && !n || o || !Ae && $e != i) && ae(t, i)
			}
		}

		function e(e) {
			clearTimeout(Re);
			var t = tt(":focus");
			if (!t.is("textarea") && !t.is("input") && !t.is("select") && "true" !== t.attr("contentEditable") && "" !== t.attr("contentEditable") && x.keyboardScrolling && x.autoScrolling) {
				var i = e.which; - 1 < tt.inArray(i, [40, 38, 32, 33, 34]) && e.preventDefault(), Ee = e.ctrlKey, Re = setTimeout(function () {
					! function (e) {
						var t = e.shiftKey;
						if (Ne || !([37, 39].indexOf(e.which) < 0)) switch (e.which) {
						case 38:
						case 33:
							Ie.k.up && l();
							break;
						case 32:
							if (t && Ie.k.up) {
								l();
								break
							}
						case 40:
						case 34:
							Ie.k.down && c();
							break;
						case 36:
							Ie.k.up && u(1);
							break;
						case 35:
							Ie.k.down && u(tt(yt).length);
							break;
						case 37:
							Ie.k.left && p();
							break;
						case 39:
							Ie.k.right && h();
							break;
						default:
							;
						}
					}(e)
				}, 150)
			}
		}

		function z() {
			tt(this).prev().trigger("click")
		}

		function W(e) {
			Me && (Ee = e.ctrlKey)
		}

		function _(e) {
			2 == e.which && (Ze = e.pageY, Oe.on("mousemove", V))
		}

		function X(e) {
			2 == e.which && Oe.off("mousemove")
		}

		function R() {
			var e = tt(this).closest(yt);
			tt(this).hasClass(Rt) ? Ie.m.left && p(e) : Ie.m.right && h(e)
		}

		function F() {
			Ee = Me = !1
		}

		function Y(e) {
			e.preventDefault();
			var t = tt(this).parent().index();
			L(tt(yt).eq(t))
		}

		function B(e) {
			e.preventDefault();
			var t = tt(this).closest(yt).find(Nt);
			U(t, t.find(Ht).eq(tt(this).closest("li").index()))
		}

		function V(e) {
			Ne && (e.pageY < Ze && Ie.m.up ? l() : e.pageY > Ze && Ie.m.down && c()), Ze = e.pageY
		}

		function U(e, t, i) {
			var n, o, s = e.closest(yt),
				r = {
					slides: e,
					destiny: t,
					direction: i,
					destinyPos: t.position(),
					slideIndex: t.index(),
					section: s,
					sectionIndex: s.index(yt),
					anchorLink: s.data("anchor"),
					slidesNav: s.find(Wt),
					slideAnchor: ue(t),
					prevSlide: s.find(Dt),
					prevSlideIndex: s.find(Dt).index(),
					localIsResizing: De
				};
			return r.xMovement = (n = r.prevSlideIndex, o = r.slideIndex, n == o ? "none" : o < n ? "left" : "right"), r.localIsResizing || (Ne = !1), x.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && tt.isFunction(x.onSlideLeave) && !1 === x.onSlideLeave.call(r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.xMovement, r.slideIndex) ? void(Ae = !1) : (t.addClass(pt).siblings().removeClass(pt), r.localIsResizing || (N(r.prevSlide), H(t)), !x.loopHorizontal && x.controlArrows && (s.find(Yt).toggle(0 !== r.slideIndex), s.find(Vt).toggle(!t.is(":last-child"))), s.hasClass(pt) && ce(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex), void
				function (e, t, i) {
					var n = t.destinyPos;
					if (x.css3) {
						var o = "translate3d(-" + ot.round(n.left) + "px, 0px, 0px)";
						J(e.find(It)).css(ge(o)), We = setTimeout(function () {
							i && Q(t)
						}, x.scrollingSpeed, x.easing)
					} else e.animate({
						scrollLeft: ot.round(n.left)
					}, x.scrollingSpeed, x.easing, function () {
						i && Q(t)
					})
				}(e, r, !0))
		}

		function Q(e) {
			var t, i;
			t = e.slidesNav, i = e.slideIndex, t.find(ft).removeClass(pt), t.find("li").eq(i).find("a").addClass(pt), e.localIsResizing || (tt.isFunction(x.afterSlideLoad) && x.afterSlideLoad.call(e.destiny, e.anchorLink, e.sectionIndex + 1, e.slideAnchor, e.slideIndex), Ne = !0, D(e.destiny)), Ae = !1
		}

		function K() {
			if (G(), Pe) {
				var e = tt(nt.activeElement);
				if (!e.is("textarea") && !e.is("input") && !e.is("select")) {
					var t = Ut.height();
					ot.abs(t - et) > 20 * ot.max(et, t) / 100 && (f(!0), et = t)
				}
			} else clearTimeout(qe), qe = setTimeout(function () {
				f(!0)
			}, 350)
		}

		function G() {
			var e = x.responsive || x.responsiveWidth,
				t = x.responsiveHeight,
				i = e && Ut.outerWidth() < e,
				n = t && Ut.height() < t;
			e && t ? m(i || n) : e ? m(i) : t && m(n)
		}

		function J(e) {
			var t = "all " + x.scrollingSpeed + "ms " + x.easingcss3;
			return e.removeClass(ct), e.css({
				"-webkit-transition": t,
				transition: t
			})
		}

		function Z(e) {
			return e.addClass(ct)
		}

		function ee(e, t) {
			var i, n, o;
			o = e, x.menu && (tt(x.menu).find(ft).removeClass(pt), tt(x.menu).find('[data-menuanchor="' + o + '"]').addClass(pt)), i = e, n = t, x.navigation && (tt(Et).find(ft).removeClass(pt), i ? tt(Et).find('a[href="#' + i + '"]').addClass(pt) : tt(Et).find("li").eq(n).find("a").addClass(pt))
		}

		function te(e) {
			var t = tt(wt).index(yt),
				i = e.index(yt);
			return t == i ? "none" : i < t ? "up" : "down"
		}

		function ie(e) {
			if (!e.hasClass("fp-noscroll")) {
				e.css("overflow", "hidden");
				var t, i = x.scrollOverflowHandler,
					n = i.wrapContent(),
					o = e.closest(yt),
					s = i.scrollable(e);
				s.length ? t = i.scrollHeight(e) : (t = e.get(0).scrollHeight, x.verticalCentered && (t = e.find(kt).get(0).scrollHeight));
				var r = He - parseInt(o.css("padding-bottom")) - parseInt(o.css("padding-top"));
				r < t ? s.length ? i.update(e, r) : (x.verticalCentered ? e.find(kt).wrapInner(n) : e.wrapInner(n), i.create(e, r)) : i.remove(e), e.css("overflow", "")
			}
		}

		function ne(e) {
			e.hasClass(qt) || e.addClass(qt).wrapInner('<div class="' + Tt + '" style="height:' + oe(e) + 'px;" />')
		}

		function oe(e) {
			var t = He;
			if (x.paddingTop || x.paddingBottom) {
				var i = e;
				i.hasClass(gt) || (i = e.closest(yt));
				var n = parseInt(i.css("padding-top")) + parseInt(i.css("padding-bottom"));
				t = He - n
			}
			return t
		}

		function se(e, t) {
			t ? J(Oe) : Z(Oe), Oe.css(ge(e)), setTimeout(function () {
				Oe.removeClass(ct)
			}, 10)
		}

		function re(e) {
			var t = Oe.find(yt + '[data-anchor="' + e + '"]');
			return t.length || (t = tt(yt).eq(e - 1)), t
		}

		function ae(e, t) {
			var i = re(e);
			i.length && (void 0 === t && (t = 0), e === Ce || i.hasClass(pt) ? le(i, t) : L(i, function () {
				le(i, t)
			}))
		}

		function le(e, t) {
			if (void 0 !== t) {
				var i = e.find(Nt),
					n = (o = t, s = e.find(Nt), (r = s.find(Ht + '[data-anchor="' + o + '"]')).length || (r = s.find(Ht).eq(o)), r);
				n.length && U(i, n)
			}
			var o, s, r
		}

		function ce(e, t, i, n) {
			var o = "";
			x.anchors.length && !x.lockAnchors && (e ? (void 0 !== i && (o = i), void 0 === t && (t = e), de(o + "/" + ($e = t))) : (void 0 !== e && ($e = t), de(i))), he()
		}

		function de(e) {
			if (x.recordHistory) location.hash = e;
			else if (Pe || Le) it.history.replaceState(st, st, "#" + e);
			else {
				var t = it.location.href.split("#")[0];
				it.location.replace(t + "#" + e)
			}
		}

		function ue(e) {
			var t = e.data("anchor"),
				i = e.index();
			return void 0 === t && (t = i), t
		}

		function he() {
			var e = tt(wt),
				t = e.find(Dt),
				i = ue(e),
				n = ue(t),
				o = String(i);
			t.length && (o = o + "-" + n), o = o.replace("/", "-").replace("#", "");
			var s = new RegExp("\\b\\s?" + ht + "-[^\\s]+\\b", "g");
			ke[0].className = ke[0].className.replace(s, ""), ke.addClass(ht + "-" + o)
		}

		function pe() {
			return it.PointerEvent ? {
				down: "pointerdown",
				move: "pointermove"
			} : {
				down: "MSPointerDown",
				move: "MSPointerMove"
			}
		}

		function fe(e) {
			var t = [];
			return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, Le && S(e) && x.scrollBar && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
		}

		function me(e, t) {
			o(0, "internal"), void 0 !== t && (De = !0), U(e.closest(Nt), e), void 0 !== t && (De = !1), o(Fe.scrollingSpeed, "internal")
		}

		function ve(e) {
			var t = ot.round(e);
			x.css3 && x.autoScrolling && !x.scrollBar ? se("translate3d(0px, -" + t + "px, 0px)", !1) : x.autoScrolling && !x.scrollBar ? Oe.css("top", -t) : Te.scrollTop(t)
		}

		function ge(e) {
			return {
				"-webkit-transform": e,
				"-moz-transform": e,
				"-ms-transform": e,
				transform: e
			}
		}

		function ye(e, t, i) {
			switch (t) {
			case "up":
				Ie[i].up = e;
				break;
			case "down":
				Ie[i].down = e;
				break;
			case "left":
				Ie[i].left = e;
				break;
			case "right":
				Ie[i].right = e;
				break;
			case "all":
				"m" == i ? r(e) : a(e)
			}
		}

		function we(e, t, i) {
			x[e] = t, "internal" !== i && (Fe[e] = t)
		}

		function be() {
			return tt("html").hasClass(ut) ? void xe("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (x.continuousVertical && (x.loopTop || x.loopBottom) && (x.continuousVertical = !1, xe("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), x.scrollBar && x.scrollOverflow && xe("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !x.continuousVertical || !x.scrollBar && x.autoScrolling || (x.continuousVertical = !1, xe("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), tt.each(["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset"], function (e, t) {
				x[t] && xe("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + t)
			}), void tt.each(x.anchors, function (e, t) {
				var i = Qt.find("[name]").filter(function () {
						return tt(this).attr("name") && tt(this).attr("name").toLowerCase() == t.toLowerCase()
					}),
					n = Qt.find("[id]").filter(function () {
						return tt(this).attr("id") && tt(this).attr("id").toLowerCase() == t.toLowerCase()
					});
				(n.length || i.length) && (xe("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), n.length && xe("error", '"' + t + '" is is being used by another element `id` property'), i.length && xe("error", '"' + t + '" is is being used by another element `name` property'))
			}))
		}

		function xe(e, t) {
			console && console[e] && console[e]("fullPage: " + t)
		}
		if (tt("html").hasClass(ut)) be();
		else {
			var Te = tt("html, body"),
				ke = tt("body"),
				Se = tt.fn.fullpage;
			x = tt.extend({
				menu: !1,
				anchors: [],
				lockAnchors: !1,
				navigation: !1,
				navigationPosition: "right",
				navigationTooltips: [],
				showActiveTooltip: !1,
				slidesNavigation: !1,
				slidesNavPosition: "bottom",
				scrollBar: !1,
				hybrid: !1,
				css3: !0,
				scrollingSpeed: 700,
				autoScrolling: !0,
				fitToSection: !0,
				fitToSectionDelay: 1e3,
				easing: "easeInOutCubic",
				easingcss3: "ease",
				loopBottom: !1,
				loopTop: !1,
				loopHorizontal: !0,
				continuousVertical: !1,
				continuousHorizontal: !1,
				scrollHorizontally: !1,
				interlockedSlides: !1,
				dragAndMove: !1,
				offsetSections: !1,
				resetSliders: !1,
				fadingEffect: !1,
				normalScrollElements: null,
				scrollOverflow: !1,
				scrollOverflowReset: !1,
				scrollOverflowHandler: Gt,
				scrollOverflowOptions: null,
				touchSensitivity: 5,
				normalScrollElementTouchThreshold: 5,
				bigSectionsDestination: null,
				keyboardScrolling: !0,
				animateAnchor: !0,
				recordHistory: !0,
				controlArrows: !0,
				controlArrowColor: "#fff",
				verticalCentered: !0,
				sectionsColor: [],
				paddingTop: 0,
				paddingBottom: 0,
				fixedElements: null,
				responsive: 0,
				responsiveWidth: 0,
				responsiveHeight: 0,
				responsiveSlides: !1,
				sectionSelector: ".section",
				slideSelector: ".slide",
				afterLoad: null,
				onLeave: null,
				afterRender: null,
				afterResize: null,
				afterReBuild: null,
				afterSlideLoad: null,
				onSlideLeave: null,
				afterResponsive: null,
				lazyLoading: !0
			}, x);
			var Ce, $e, Ee, Ae = !1,
				Pe = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
				Le = "ontouchstart" in it || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
				Oe = tt(this),
				He = Ut.height(),
				De = !1,
				Me = !0,
				Ne = !0,
				je = [],
				Ie = {
					m: {
						up: !0,
						down: !0,
						left: !0,
						right: !0
					}
				};
			Ie.k = tt.extend(!0, {}, Ie.m);
			var qe, ze, We, _e, Xe, Re, Fe = tt.extend(!0, {}, x);
			be(), Kt.click = Le, Kt = tt.extend(Kt, x.scrollOverflowOptions), tt.extend(tt.easing, {
				easeInOutCubic: function (e, t, i, n, o) {
					return (t /= o / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
				}
			}), tt(this).length && (Se.setAutoScrolling = i, Se.setRecordHistory = n, Se.setScrollingSpeed = o, Se.setFitToSection = s, Se.setLockAnchors = function (e) {
				x.lockAnchors = e
			}, Se.setMouseWheelScrolling = t, Se.setAllowScrolling = r, Se.setKeyboardScrolling = a, Se.moveSectionUp = l, Se.moveSectionDown = c, Se.silentMoveTo = d, Se.moveTo = u, Se.moveSlideRight = h, Se.moveSlideLeft = p, Se.reBuild = f, Se.setResponsive = m, Se.destroy = function (e) {
				i(!1, "internal"), r(!1), a(!1), Oe.addClass(dt), clearTimeout(We), clearTimeout(ze), clearTimeout(qe), clearTimeout(_e), clearTimeout(Xe), Ut.off("scroll", y).off("hashchange", q).off("resize", K), Qt.off("click touchstart", Et + " a").off("mouseenter", Et + " li").off("mouseleave", Et + " li").off("click touchstart", _t).off("mouseover", x.normalScrollElements).off("mouseout", x.normalScrollElements), tt(yt).off("click touchstart", Xt), clearTimeout(We), clearTimeout(ze), e && function () {
					ve(0), Oe.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function () {
						tt(this).attr("src", tt(this).data("src")), tt(this).removeAttr("data-src")
					}), tt(Et + ", " + Wt + ", " + Xt).remove(), tt(yt).css({
						height: "",
						"background-color": "",
						padding: ""
					}), tt(Ht).css({
						width: ""
					}), Oe.css({
						height: "",
						position: "",
						"-ms-touch-action": "",
						"touch-action": ""
					}), Te.css({
						overflow: "",
						height: ""
					}), tt("html").removeClass(ut), ke.removeClass(lt), tt.each(ke.get(0).className.split(/\s+/), function (e, t) {
						0 === t.indexOf(ht) && ke.removeClass(t)
					}), tt(yt + ", " + Ht).each(function () {
						x.scrollOverflowHandler.remove(tt(this)), tt(this).removeClass(qt + " " + pt)
					}), Z(Oe), Oe.find(kt + ", " + It + ", " + Nt).each(function () {
						tt(this).replaceWith(this.childNodes)
					}), Te.scrollTop(0);
					var e = [gt, Ot, jt];
					tt.each(e, function (e, t) {
						tt("." + t).removeClass(t)
					})
				}()
			}, function () {
				var e;
				x.css3 && (x.css3 = function () {
					var e, t = nt.createElement("p"),
						i = {
							webkitTransform: "-webkit-transform",
							OTransform: "-o-transform",
							msTransform: "-ms-transform",
							MozTransform: "-moz-transform",
							transform: "transform"
						};
					for (var n in nt.body.insertBefore(t, null), i) t.style[n] !== st && (t.style[n] = "translate3d(1px,1px,1px)", e = it.getComputedStyle(t).getPropertyValue(i[n]));
					return nt.body.removeChild(t), e !== st && 0 < e.length && "none" !== e
				}()), x.scrollBar = x.scrollBar || x.hybrid, e = Oe.find(x.sectionSelector), x.anchors.length || (x.anchors = e.filter("[data-anchor]").map(function () {
					return tt(this).data("anchor").toString()
				}).get()), x.navigationTooltips.length || (x.navigationTooltips = e.filter("[data-tooltip]").map(function () {
					return tt(this).data("tooltip").toString()
				}).get()), Oe.css({
					height: "100%",
					position: "relative"
				}), Oe.addClass(rt), tt("html").addClass(ut), He = Ut.height(), Oe.removeClass(dt), Oe.find(x.sectionSelector).addClass(gt), Oe.find(x.slideSelector).addClass(Ot), tt(yt).each(function (e) {
					var t, i, n, o, s = tt(this),
						r = s.find(Ht),
						a = r.length;
					n = s, (o = e) || 0 !== tt(wt).length || n.addClass(pt), n.css("height", He + "px"), x.paddingTop && n.css("padding-top", x.paddingTop), x.paddingBottom && n.css("padding-bottom", x.paddingBottom), void 0 !== x.sectionsColor[o] && n.css("background-color", x.sectionsColor[o]), void 0 !== x.anchors[o] && n.attr("data-anchor", x.anchors[o]), t = s, i = e, void 0 !== x.anchors[i] && t.hasClass(pt) && ee(x.anchors[i], i), x.menu && x.css3 && tt(x.menu).closest(at).length && tt(x.menu).appendTo(ke), 0 < a ? function (e, t, i) {
						var n, o = 100 * i,
							s = 100 / i;
						t.wrapAll('<div class="' + jt + '" />'), t.parent().wrap('<div class="' + Mt + '" />'), e.find(It).css("width", o + "%"), 1 < i && (x.controlArrows && ((n = e).find(Nt).after('<div class="' + Ft + '"></div><div class="' + Bt + '"></div>'), "#fff" != x.controlArrowColor && (n.find(Vt).css("border-color", "transparent transparent transparent " + x.controlArrowColor), n.find(Yt).css("border-color", "transparent " + x.controlArrowColor + " transparent transparent")), x.loopHorizontal || n.find(Yt).hide()), x.slidesNavigation && function (e, t) {
							e.append('<div class="' + zt + '"><ul></ul></div>');
							var i = e.find(Wt);
							i.addClass(x.slidesNavPosition);
							for (var n = 0; n < t; n++) i.find("ul").append('<li><a href="#"><span></span></a></li>');
							i.css("margin-left", "-" + i.width() / 2 + "px"), i.find("li").first().find("a").addClass(pt)
						}(e, i)), t.each(function (e) {
							tt(this).css("width", s + "%"), x.verticalCentered && ne(tt(this))
						});
						var r = e.find(Dt);
						r.length && (0 !== tt(wt).index(yt) || 0 === tt(wt).index(yt) && 0 !== r.index()) ? me(r) : t.eq(0).addClass(pt)
					}(s, r, a) : x.verticalCentered && ne(s)
				}), x.fixedElements && x.css3 && tt(x.fixedElements).appendTo(ke), x.navigation && function () {
					ke.append('<div id="' + $t + '"><ul></ul></div>');
					var e = tt(Et);
					e.addClass(function () {
						return x.showActiveTooltip ? Lt + " " + x.navigationPosition : x.navigationPosition
					});
					for (var t = 0; t < tt(yt).length; t++) {
						var i = "";
						x.anchors.length && (i = x.anchors[t]);
						var n = '<li><a href="#' + i + '"><span></span></a>',
							o = x.navigationTooltips[t];
						void 0 !== o && "" !== o && (n += '<div class="' + At + " " + x.navigationPosition + '">' + o + "</div>"), n += "</li>", e.find("ul").append(n)
					}
					tt(Et).css("margin-top", "-" + tt(Et).height() / 2 + "px"), tt(Et).find("li").eq(tt(wt).index(yt)).find("a").addClass(pt)
				}(), Oe.find('iframe[src*="youtube.com/embed/"]').each(function () {
					var e, t, i;
					e = tt(this), t = "enablejsapi=1", i = e.attr("src"), e.attr("src", i + (/\?/.test(i) ? "&" : "?") + t)
				}), x.scrollOverflow ? ("complete" === nt.readyState && v(), Ut.on("load", v)) : g(), r(!0), i(x.autoScrolling, "internal");
				var t = tt(wt).find(Dt);
				t.length && (0 !== tt(wt).index(yt) || 0 === tt(wt).index(yt) && 0 !== t.index()) && me(t), G(), he(), "complete" === nt.readyState && I(), Ut.on("load", I)
			}(), Ut.on("scroll", y).on("hashchange", q).blur(F).resize(K), Qt.keydown(e).keyup(W).on("click touchstart", Et + " a", Y).on("click touchstart", _t, B).on("click", Pt, z), tt(yt).on("click touchstart", Xt, R), x.normalScrollElements && (Qt.on("mouseenter", x.normalScrollElements, function () {
				t(!1)
			}), Qt.on("mouseleave", x.normalScrollElements, function () {
				t(!0)
			})));
			var Ye = !1,
				Be = 0,
				Ve = 0,
				Ue = 0,
				Qe = 0,
				Ke = 0,
				Ge = (new Date).getTime(),
				Je = 0,
				Ze = 0,
				et = He
		}
	}, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function () {
		this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
	}, IScroll.prototype.wheelOff = function () {
		this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
	});
	var Gt = {
		refreshId: null,
		iScrollInstances: [],
		toggleWheel: function (t) {
			tt(wt).find(n).each(function () {
				var e = tt(this).data("iscrollInstance");
				void 0 !== e && e && (t ? e.wheelOn() : e.wheelOff())
			})
		},
		onLeave: function () {
			Gt.toggleWheel(!1)
		},
		beforeLeave: function () {
			Gt.onLeave()
		},
		afterLoad: function () {
			Gt.toggleWheel(!0)
		},
		create: function (e, t) {
			var i = e.find(n);
			i.height(t), i.each(function () {
				var e = tt(this),
					t = e.data("iscrollInstance");
				t && tt.each(Gt.iScrollInstances, function () {
					tt(this).destroy()
				}), t = new IScroll(e.get(0), Kt), Gt.iScrollInstances.push(t), t.wheelOff(), e.data("iscrollInstance", t)
			})
		},
		isScrolled: function (e, t) {
			var i = t.data("iscrollInstance");
			return !i || ("top" === e ? 0 <= i.y && !t.scrollTop() : "bottom" === e ? 0 - i.y + t.scrollTop() + 1 + t.innerHeight() >= t[0].scrollHeight : void 0)
		},
		scrollable: function (e) {
			return e.find(Nt).length ? e.find(Dt).find(n) : e.find(n)
		},
		scrollHeight: function (e) {
			return e.find(n).children().first().get(0).scrollHeight
		},
		remove: function (e) {
			var t = e.find(n);
			t.length && (t.data("iscrollInstance").destroy(), t.data("iscrollInstance", null));
			e.find(n).children().first().children().first().unwrap().unwrap()
		},
		update: function (e, t) {
			clearTimeout(Gt.refreshId), Gt.refreshId = setTimeout(function () {
				tt.each(Gt.iScrollInstances, function () {
					tt(this).get(0).refresh()
				})
			}, 150), e.find(n).css("height", t + "px").parent().css("height", t + "px")
		},
		wrapContent: function () {
			return '<div class="' + e + '"><div class="fp-scroller"></div></div>'
		}
	}
}),
function (e) {
	"function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
}(function (ae) {
	"use strict";

	function n(e, m) {
		function t(e) {
			if (!(!0 === K.data(He + "_intouch") || 0 < ae(e.target).closest(m.excludedElements, K).length)) {
				var t = e.originalEvent ? e.originalEvent : e;
				if (!t.pointerType || "mouse" != t.pointerType || 0 != m.fallbackToMouseEvents) {
					var i, n = t.touches,
						o = n ? n[0] : t;
					return G = Ce, n ? J = n.length : !1 !== m.preventDefaultEvents && e.preventDefault(), U = X = _ = null, B = 1, V = Y = F = R = W = 0, (s = {})[le] = P(le), s[ce] = P(ce), s[de] = P(de), s[ue] = P(ue), Q = s, k(), $(0, o), !n || J === m.fingers || m.fingers === ke || y() ? (ee = D(), 2 == J && ($(1, n[1]), F = Y = O(Z[0].start, Z[1].start)), (m.swipeStatus || m.pinchStatus) && (i = g(t, G))) : i = !1, !1 === i ? (g(t, G = Ae), i) : (m.hold && (re = setTimeout(ae.proxy(function () {
						K.trigger("hold", [t.target]), m.hold && (i = m.hold.call(K, t, t.target))
					}, this), m.longTapThreshold)), C(!0), null)
				}
			}
			var s
		}

		function i(e) {
			var t, i, n, o, s, r, a, l, c = e.originalEvent ? e.originalEvent : e;
			if (G !== Ee && G !== Ae && !S()) {
				var d, u = c.touches,
					h = E(u ? u[0] : c);
				if (te = D(), u && (J = u.length), m.hold && clearTimeout(re), G = $e, 2 == J && (0 == F ? ($(1, u[1]), F = Y = O(Z[0].start, Z[1].start)) : (E(u[1]), Y = O(Z[0].end, Z[1].end), Z[0].end, Z[1].end, U = B < 1 ? pe : he), B = (Y / F * 1).toFixed(2), V = Math.abs(F - Y)), J === m.fingers || m.fingers === ke || !u || y()) {
					if (_ = H(h.start, h.end), function (e, t) {
						if (!1 !== m.preventDefaultEvents)
							if (m.allowPageScroll === fe) e.preventDefault();
							else {
								var i = m.allowPageScroll === me;
								switch (t) {
								case le:
									(m.swipeLeft && i || !i && m.allowPageScroll != xe) && e.preventDefault();
									break;
								case ce:
									(m.swipeRight && i || !i && m.allowPageScroll != xe) && e.preventDefault();
									break;
								case de:
									(m.swipeUp && i || !i && m.allowPageScroll != Te) && e.preventDefault();
									break;
								case ue:
									(m.swipeDown && i || !i && m.allowPageScroll != Te) && e.preventDefault()
								}
							}
					}(e, X = H(h.last, h.end)), a = h.start, l = h.end, W = Math.round(Math.sqrt(Math.pow(l.x - a.x, 2) + Math.pow(l.y - a.y, 2))), R = L(), r = W, (s = _) != fe && (r = Math.max(r, A(s)), Q[s].distance = r), d = g(c, G), !m.triggerOnTouchEnd || m.triggerOnTouchLeave) {
						var p = !0;
						if (m.triggerOnTouchLeave) {
							var f = {
								left: (o = (n = ae(n = this)).offset()).left,
								right: o.left + n.outerWidth(),
								top: o.top,
								bottom: o.top + n.outerHeight()
							};
							t = h.end, i = f, p = t.x > i.left && t.x < i.right && t.y > i.top && t.y < i.bottom
						}!m.triggerOnTouchEnd && p ? G = v($e) : m.triggerOnTouchLeave && !p && (G = v(Ee)), G != Ae && G != Ee || g(c, G)
					}
				} else g(c, G = Ae);
				!1 === d && g(c, G = Ae)
			}
		}

		function n(e) {
			var t, i = e.originalEvent ? e.originalEvent : e,
				n = i.touches;
			if (n) {
				if (n.length && !S()) return t = i, ie = D(), ne = t.touches.length + 1, !0;
				if (n.length && S()) return !0
			}
			return S() && (J = ne), te = D(), R = L(), c() || !l() ? g(i, G = Ae) : m.triggerOnTouchEnd || !1 === m.triggerOnTouchEnd && G === $e ? (!1 !== m.preventDefaultEvents && !1 !== e.cancelable && e.preventDefault(), g(i, G = Ee)) : !m.triggerOnTouchEnd && b() ? a(i, G = Ee, ye) : G === $e && g(i, G = Ae), C(!1), null
		}

		function o() {
			Y = F = ee = te = J = 0, B = 1, k(), C(!1)
		}

		function s(e) {
			var t = e.originalEvent ? e.originalEvent : e;
			m.triggerOnTouchLeave && g(t, G = v(Ee))
		}

		function r() {
			K.unbind(N, t), K.unbind(z, o), K.unbind(j, i), K.unbind(I, n), q && K.unbind(q, s), C(!1)
		}

		function v(e) {
			var t = e,
				i = d(),
				n = l(),
				o = c();
			return !i || o ? t = Ae : !n || e != $e || m.triggerOnTouchEnd && !m.triggerOnTouchLeave ? !n && e == Ee && m.triggerOnTouchLeave && (t = Ae) : t = Ee, t
		}

		function g(e, t) {
			var i, n = e.touches;
			return (!(!h() || !p()) || p()) && (i = a(e, t, ve)), (!(!u() || !y()) || y()) && !1 !== i && (i = a(e, t, ge)), T() && x() && !1 !== i ? i = a(e, t, we) : R > m.longTapThreshold && W < Se && m.longTap && !1 !== i ? i = a(e, t, be) : !(1 !== J && Pe || !(isNaN(W) || W < m.threshold) || !b()) && !1 !== i && (i = a(e, t, ye)), t === Ae && o(), t === Ee && (n && n.length || o()), i
		}

		function a(e, t, i) {
			var n;
			if (i == ve) {
				if (K.trigger("swipeStatus", [t, _ || null, W || 0, R || 0, J, Z, X]), m.swipeStatus && !1 === (n = m.swipeStatus.call(K, e, t, _ || null, W || 0, R || 0, J, Z, X))) return !1;
				if (t == Ee && h()) {
					if (clearTimeout(se), clearTimeout(re), K.trigger("swipe", [_, W, R, J, Z, X]), m.swipe && !1 === (n = m.swipe.call(K, e, _, W, R, J, Z, X))) return !1;
					switch (_) {
					case le:
						K.trigger("swipeLeft", [_, W, R, J, Z, X]), m.swipeLeft && (n = m.swipeLeft.call(K, e, _, W, R, J, Z, X));
						break;
					case ce:
						K.trigger("swipeRight", [_, W, R, J, Z, X]), m.swipeRight && (n = m.swipeRight.call(K, e, _, W, R, J, Z, X));
						break;
					case de:
						K.trigger("swipeUp", [_, W, R, J, Z, X]), m.swipeUp && (n = m.swipeUp.call(K, e, _, W, R, J, Z, X));
						break;
					case ue:
						K.trigger("swipeDown", [_, W, R, J, Z, X]), m.swipeDown && (n = m.swipeDown.call(K, e, _, W, R, J, Z, X))
					}
				}
			}
			if (i == ge) {
				if (K.trigger("pinchStatus", [t, U || null, V || 0, R || 0, J, B, Z]), m.pinchStatus && !1 === (n = m.pinchStatus.call(K, e, t, U || null, V || 0, R || 0, J, B, Z))) return !1;
				if (t == Ee && u()) switch (U) {
				case he:
					K.trigger("pinchIn", [U || null, V || 0, R || 0, J, B, Z]), m.pinchIn && (n = m.pinchIn.call(K, e, U || null, V || 0, R || 0, J, B, Z));
					break;
				case pe:
					K.trigger("pinchOut", [U || null, V || 0, R || 0, J, B, Z]), m.pinchOut && (n = m.pinchOut.call(K, e, U || null, V || 0, R || 0, J, B, Z))
				}
			}
			return i == ye ? t !== Ae && t !== Ee || (clearTimeout(se), clearTimeout(re), x() && !T() ? (oe = D(), se = setTimeout(ae.proxy(function () {
				oe = null, K.trigger("tap", [e.target]), m.tap && (n = m.tap.call(K, e, e.target))
			}, this), m.doubleTapThreshold)) : (oe = null, K.trigger("tap", [e.target]), m.tap && (n = m.tap.call(K, e, e.target)))) : i == we ? t !== Ae && t !== Ee || (clearTimeout(se), clearTimeout(re), oe = null, K.trigger("doubletap", [e.target]), m.doubleTap && (n = m.doubleTap.call(K, e, e.target))) : i == be && (t !== Ae && t !== Ee || (clearTimeout(se), oe = null, K.trigger("longtap", [e.target]), m.longTap && (n = m.longTap.call(K, e, e.target)))), n
		}

		function l() {
			var e = !0;
			return null !== m.threshold && (e = W >= m.threshold), e
		}

		function c() {
			var e = !1;
			return null !== m.cancelThreshold && null !== _ && (e = A(_) - W >= m.cancelThreshold), e
		}

		function d() {
			return !(m.maxTimeThreshold && R >= m.maxTimeThreshold)
		}

		function u() {
			var e = f(),
				t = w(),
				i = null === m.pinchThreshold || V >= m.pinchThreshold;
			return e && t && i
		}

		function y() {
			return !!(m.pinchStatus || m.pinchIn || m.pinchOut)
		}

		function h() {
			var e = d(),
				t = l(),
				i = f(),
				n = w();
			return !c() && n && i && t && e
		}

		function p() {
			return !!(m.swipe || m.swipeStatus || m.swipeLeft || m.swipeRight || m.swipeUp || m.swipeDown)
		}

		function f() {
			return J === m.fingers || m.fingers === ke || !Pe
		}

		function w() {
			return 0 !== Z[0].end.x
		}

		function b() {
			return !!m.tap
		}

		function x() {
			return !!m.doubleTap
		}

		function T() {
			if (null == oe) return !1;
			var e = D();
			return x() && e - oe <= m.doubleTapThreshold
		}

		function k() {
			ne = ie = 0
		}

		function S() {
			var e = !1;
			ie && (D() - ie <= m.fingerReleaseThreshold && (e = !0));
			return e
		}

		function C(e) {
			K && (!0 === e ? (K.bind(j, i), K.bind(I, n), q && K.bind(q, s)) : (K.unbind(j, i, !1), K.unbind(I, n, !1), q && K.unbind(q, s, !1)), K.data(He + "_intouch", !0 === e))
		}

		function $(e, t) {
			var i = {
				start: {
					x: 0,
					y: 0
				},
				last: {
					x: 0,
					y: 0
				},
				end: {
					x: 0,
					y: 0
				}
			};
			return i.start.x = i.last.x = i.end.x = t.pageX || t.clientX, i.start.y = i.last.y = i.end.y = t.pageY || t.clientY, Z[e] = i
		}

		function E(e) {
			var t = void 0 !== e.identifier ? e.identifier : 0,
				i = Z[t] || null;
			return null === i && (i = $(t, e)), i.last.x = i.end.x, i.last.y = i.end.y, i.end.x = e.pageX || e.clientX, i.end.y = e.pageY || e.clientY, i
		}

		function A(e) {
			if (Q[e]) return Q[e].distance
		}

		function P(e) {
			return {
				direction: e,
				distance: 0
			}
		}

		function L() {
			return te - ee
		}

		function O(e, t) {
			var i = Math.abs(e.x - t.x),
				n = Math.abs(e.y - t.y);
			return Math.round(Math.sqrt(i * i + n * n))
		}

		function H(e, t) {
			if (n = t, (i = e).x == n.x && i.y == n.y) return fe;
			var i, n, o, s, r, a, l, c, d = (s = t, r = (o = e).x - s.x, a = s.y - o.y, l = Math.atan2(a, r), (c = Math.round(180 * l / Math.PI)) < 0 && (c = 360 - Math.abs(c)), c);
			return d <= 45 && 0 <= d ? le : d <= 360 && 315 <= d ? le : 135 <= d && d <= 225 ? ce : 45 < d && d < 135 ? ue : de
		}

		function D() {
			return (new Date).getTime()
		}
		m = ae.extend({}, m);
		var M = Pe || Oe || !m.fallbackToMouseEvents,
			N = M ? Oe ? Le ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
			j = M ? Oe ? Le ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
			I = M ? Oe ? Le ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
			q = M ? Oe ? "mouseleave" : null : "mouseleave",
			z = Oe ? Le ? "MSPointerCancel" : "pointercancel" : "touchcancel",
			W = 0,
			_ = null,
			X = null,
			R = 0,
			F = 0,
			Y = 0,
			B = 1,
			V = 0,
			U = 0,
			Q = null,
			K = ae(e),
			G = "start",
			J = 0,
			Z = {},
			ee = 0,
			te = 0,
			ie = 0,
			ne = 0,
			oe = 0,
			se = null,
			re = null;
		try {
			K.bind(N, t), K.bind(z, o)
		} catch (e) {
			ae.error("events not supported " + N + "," + z + " on jQuery.swipe")
		}
		this.enable = function () {
			return this.disable(), K.bind(N, t), K.bind(z, o), K
		}, this.disable = function () {
			return r(), K
		}, this.destroy = function () {
			r(), K.data(He, null), K = null
		}, this.option = function (e, t) {
			if ("object" == typeof e) m = ae.extend(m, e);
			else if (void 0 !== m[e]) {
				if (void 0 === t) return m[e];
				m[e] = t
			} else {
				if (!e) return m;
				ae.error("Option " + e + " does not exist on jQuery.swipe.options")
			}
			return null
		}
	}
	var le = "left",
		ce = "right",
		de = "up",
		ue = "down",
		he = "in",
		pe = "out",
		fe = "none",
		me = "auto",
		ve = "swipe",
		ge = "pinch",
		ye = "tap",
		we = "doubletap",
		be = "longtap",
		xe = "horizontal",
		Te = "vertical",
		ke = "all",
		Se = 10,
		Ce = "start",
		$e = "move",
		Ee = "end",
		Ae = "cancel",
		Pe = "ontouchstart" in window,
		Le = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !Pe,
		Oe = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !Pe,
		He = "TouchSwipe";
	ae.fn.swipe = function (e) {
		var t = ae(this),
			i = t.data(He);
		if (i && "string" == typeof e) {
			if (i[e]) return i[e].apply(i, Array.prototype.slice.call(arguments, 1));
			ae.error("Method " + e + " does not exist on jQuery.swipe")
		} else if (i && "object" == typeof e) i.option.apply(i, arguments);
		else if (!(i || "object" != typeof e && e)) return function (i) {
			return !i || void 0 !== i.allowPageScroll || void 0 === i.swipe && void 0 === i.swipeStatus || (i.allowPageScroll = fe), void 0 !== i.click && void 0 === i.tap && (i.tap = i.click), i || (i = {}), i = ae.extend({}, ae.fn.swipe.defaults, i), this.each(function () {
				var e = ae(this),
					t = e.data(He);
				t || (t = new n(this, i), e.data(He, t))
			})
		}.apply(this, arguments);
		return t
	}, ae.fn.swipe.version = "1.6.18", ae.fn.swipe.defaults = {
		fingers: 1,
		threshold: 75,
		cancelThreshold: null,
		pinchThreshold: 20,
		maxTimeThreshold: null,
		fingerReleaseThreshold: 250,
		longTapThreshold: 500,
		doubleTapThreshold: 200,
		swipe: null,
		swipeLeft: null,
		swipeRight: null,
		swipeUp: null,
		swipeDown: null,
		swipeStatus: null,
		pinchIn: null,
		pinchOut: null,
		pinchStatus: null,
		click: null,
		tap: null,
		doubleTap: null,
		longTap: null,
		hold: null,
		triggerOnTouchEnd: !0,
		triggerOnTouchLeave: !1,
		allowPageScroll: "auto",
		fallbackToMouseEvents: !0,
		excludedElements: ".noSwipe",
		preventDefaultEvents: !0
	}, ae.fn.swipe.phases = {
		PHASE_START: Ce,
		PHASE_MOVE: $e,
		PHASE_END: Ee,
		PHASE_CANCEL: Ae
	}, ae.fn.swipe.directions = {
		LEFT: le,
		RIGHT: ce,
		UP: de,
		DOWN: ue,
		IN: he,
		OUT: pe
	}, ae.fn.swipe.pageScroll = {
		NONE: fe,
		HORIZONTAL: xe,
		VERTICAL: Te,
		AUTO: me
	}, ae.fn.swipe.fingers = {
		ONE: 1,
		TWO: 2,
		THREE: 3,
		FOUR: 4,
		FIVE: 5,
		ALL: ke
	}
}),
function () {
	var t, i, e = [].indexOf || function (e) {
			for (var t = 0, i = this.length; t < i; t++)
				if (t in this && this[t] === e) return t;
			return -1
		},
		w = [].slice;
	t = window, i = function (l, s) {
		var t, r, a, c, i, d, u, o, h, n, p, f, m, v, g, y;
		return t = l(s), o = 0 <= e.call(s, "ontouchstart"), c = {
			horizontal: {},
			vertical: {}
		}, u = {}, d = "waypoints-context-id", p = "resize.waypoints", f = "scroll.waypoints", m = i = 1, v = "waypoints-waypoint-ids", g = "waypoint", y = "waypoints", r = function () {
			function e(e) {
				var t = this;
				this.$element = e, this.element = e[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + i++, this.oldScroll = {
					x: e.scrollLeft(),
					y: e.scrollTop()
				}, this.waypoints = {
					horizontal: {},
					vertical: {}
				}, this.element[d] = this.id, u[this.id] = this, e.bind(f, function () {
					var e;
					if (!t.didScroll && !o) return t.didScroll = !0, e = function () {
						return t.doScroll(), t.didScroll = !1
					}, s.setTimeout(e, l[y].settings.scrollThrottle)
				}), e.bind(p, function () {
					var e;
					if (!t.didResize) return t.didResize = !0, e = function () {
						return l[y]("refresh"), t.didResize = !1
					}, s.setTimeout(e, l[y].settings.resizeThrottle)
				})
			}
			return e.prototype.doScroll = function () {
				var e, n = this;
				return e = {
					horizontal: {
						newScroll: this.$element.scrollLeft(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left"
					},
					vertical: {
						newScroll: this.$element.scrollTop(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up"
					}
				}, !o || e.vertical.oldScroll && e.vertical.newScroll || l[y]("refresh"), l.each(e, function (e, o) {
					var i, t, s;
					return s = [], t = o.newScroll > o.oldScroll, i = t ? o.forward : o.backward, l.each(n.waypoints[e], function (e, t) {
						var i, n;
						return o.oldScroll < (i = t.offset) && i <= o.newScroll ? s.push(t) : o.newScroll < (n = t.offset) && n <= o.oldScroll ? s.push(t) : void 0
					}), s.sort(function (e, t) {
						return e.offset - t.offset
					}), t || s.reverse(), l.each(s, function (e, t) {
						if (t.options.continuous || e === s.length - 1) return t.trigger([i])
					})
				}), this.oldScroll = {
					x: e.horizontal.newScroll,
					y: e.vertical.newScroll
				}
			}, e.prototype.refresh = function () {
				var e, t, i, n = this;
				return i = l.isWindow(this.element), t = this.$element.offset(), this.doScroll(), e = {
					horizontal: {
						contextOffset: i ? 0 : t.left,
						contextScroll: i ? 0 : this.oldScroll.x,
						contextDimension: this.$element.width(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left",
						offsetProp: "left"
					},
					vertical: {
						contextOffset: i ? 0 : t.top,
						contextScroll: i ? 0 : this.oldScroll.y,
						contextDimension: i ? l[y]("viewportHeight") : this.$element.height(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up",
						offsetProp: "top"
					}
				}, l.each(e, function (e, a) {
					return l.each(n.waypoints[e], function (e, t) {
						var i, n, o, s, r;
						if (i = t.options.offset, o = t.offset, n = l.isWindow(t.element) ? 0 : t.$element.offset()[a.offsetProp], l.isFunction(i) ? i = i.apply(t.element) : "string" == typeof i && (i = parseFloat(i), -1 < t.options.offset.indexOf("%") && (i = Math.ceil(a.contextDimension * i / 100))), t.offset = n - a.contextOffset + a.contextScroll - i, (!t.options.onlyOnScroll || null == o) && t.enabled) return null !== o && o < (s = a.oldScroll) && s <= t.offset ? t.trigger([a.backward]) : null !== o && o > (r = a.oldScroll) && r >= t.offset ? t.trigger([a.forward]) : null === o && a.oldScroll >= t.offset ? t.trigger([a.forward]) : void 0
					})
				})
			}, e.prototype.checkEmpty = function () {
				if (l.isEmptyObject(this.waypoints.horizontal) && l.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([p, f].join(" ")), delete u[this.id]
			}, e
		}(), a = function () {
			function e(e, t, i) {
				var n, o;
				"bottom-in-view" === i.offset && (i.offset = function () {
					var e;
					return e = l[y]("viewportHeight"), l.isWindow(t.element) || (e = t.$element.height()), e - l(this).outerHeight()
				}), this.$element = e, this.element = e[0], this.axis = i.horizontal ? "horizontal" : "vertical", this.callback = i.handler, this.context = t, this.enabled = i.enabled, this.id = "waypoints" + m++, this.offset = null, this.options = i, t.waypoints[this.axis][this.id] = this, (n = null != (o = (c[this.axis][this.id] = this).element[v]) ? o : []).push(this.id), this.element[v] = n
			}
			return e.prototype.trigger = function (e) {
				if (this.enabled) return null != this.callback && this.callback.apply(this.element, e), this.options.triggerOnce ? this.destroy() : void 0
			}, e.prototype.disable = function () {
				return this.enabled = !1
			}, e.prototype.enable = function () {
				return this.context.refresh(), this.enabled = !0
			}, e.prototype.destroy = function () {
				return delete c[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
			}, e.getWaypointsByElement = function (e) {
				var t, i;
				return (i = e[v]) ? (t = l.extend({}, c.horizontal, c.vertical), l.map(i, function (e) {
					return t[e]
				})) : []
			}, e
		}(), n = {
			init: function (e, o) {
				return null == (o = l.extend({}, l.fn[g].defaults, o)).handler && (o.handler = e), this.each(function () {
					var e, t, i, n;
					return e = l(this), i = null != (n = o.context) ? n : l.fn[g].defaults.context, l.isWindow(i) || (i = e.closest(i)), i = l(i), (t = u[i[0][d]]) || (t = new r(i)), new a(e, t, o)
				}), l[y]("refresh"), this
			},
			disable: function () {
				return n._invoke.call(this, "disable")
			},
			enable: function () {
				return n._invoke.call(this, "enable")
			},
			destroy: function () {
				return n._invoke.call(this, "destroy")
			},
			prev: function (e, t) {
				return n._traverse.call(this, e, t, function (e, t, i) {
					if (0 < t) return e.push(i[t - 1])
				})
			},
			next: function (e, t) {
				return n._traverse.call(this, e, t, function (e, t, i) {
					if (t < i.length - 1) return e.push(i[t + 1])
				})
			},
			_traverse: function (t, e, i) {
				var n, o;
				return null == t && (t = "vertical"), null == e && (e = s), o = h.aggregate(e), n = [], this.each(function () {
					var e;
					return e = l.inArray(this, o[t]), i(n, e, o[t])
				}), this.pushStack(n)
			},
			_invoke: function (i) {
				return this.each(function () {
					var e;
					return e = a.getWaypointsByElement(this), l.each(e, function (e, t) {
						return t[i](), !0
					})
				}), this
			}
		}, l.fn[g] = function () {
			var e, t;
			return t = arguments[0], e = 2 <= arguments.length ? w.call(arguments, 1) : [], n[t] ? n[t].apply(this, e) : l.isFunction(t) ? n.init.apply(this, arguments) : l.isPlainObject(t) ? n.init.apply(this, [null, t]) : t ? l.error("The " + t + " method does not exist in jQuery Waypoints.") : l.error("jQuery Waypoints needs a callback function or handler option.")
		}, l.fn[g].defaults = {
			context: s,
			continuous: !0,
			enabled: !0,
			horizontal: !1,
			offset: 0,
			triggerOnce: !1
		}, h = {
			refresh: function () {
				return l.each(u, function (e, t) {
					return t.refresh()
				})
			},
			viewportHeight: function () {
				var e;
				return null != (e = s.innerHeight) ? e : t.height()
			},
			aggregate: function (e) {
				var t, n, i;
				return t = c, e && (t = null != (i = u[l(e)[0][d]]) ? i.waypoints : void 0), t ? (n = {
					horizontal: [],
					vertical: []
				}, l.each(n, function (e, i) {
					return l.each(t[e], function (e, t) {
						return i.push(t)
					}), i.sort(function (e, t) {
						return e.offset - t.offset
					}), n[e] = l.map(i, function (e) {
						return e.element
					}), n[e] = l.unique(n[e])
				}), n) : []
			},
			above: function (e) {
				return null == e && (e = s), h._filter(e, "vertical", function (e, t) {
					return t.offset <= e.oldScroll.y
				})
			},
			below: function (e) {
				return null == e && (e = s), h._filter(e, "vertical", function (e, t) {
					return t.offset > e.oldScroll.y
				})
			},
			left: function (e) {
				return null == e && (e = s), h._filter(e, "horizontal", function (e, t) {
					return t.offset <= e.oldScroll.x
				})
			},
			right: function (e) {
				return null == e && (e = s), h._filter(e, "horizontal", function (e, t) {
					return t.offset > e.oldScroll.x
				})
			},
			enable: function () {
				return h._invoke("enable")
			},
			disable: function () {
				return h._invoke("disable")
			},
			destroy: function () {
				return h._invoke("destroy")
			},
			extendFn: function (e, t) {
				return n[e] = t
			},
			_invoke: function (i) {
				var e;
				return e = l.extend({}, c.vertical, c.horizontal), l.each(e, function (e, t) {
					return t[i](), !0
				})
			},
			_filter: function (e, t, i) {
				var n, o;
				return (n = u[l(e)[0][d]]) ? (o = [], l.each(n.waypoints[t], function (e, t) {
					if (i(n, t)) return o.push(t)
				}), o.sort(function (e, t) {
					return e.offset - t.offset
				}), l.map(o, function (e) {
					return e.element
				})) : []
			}
		}, l[y] = function () {
			var e, t;
			return t = arguments[0], e = 2 <= arguments.length ? w.call(arguments, 1) : [], h[t] ? h[t].apply(null, e) : h.aggregate.call(null, t)
		}, l[y].settings = {
			resizeThrottle: 100,
			scrollThrottle: 30
		}, t.on("load.waypoints", function () {
			return l[y]("refresh")
		})
	}, "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function (e) {
		return i(e, t)
	}) : i(t.jQuery, t)
}.call(this),
function (r, s, o, a) {
	function l(e, t) {
		var i = this;
		"object" == typeof t && (delete t.refresh, delete t.render, r.extend(this, t)), this.$element = r(e), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
		var n = (this.position + "").toLowerCase().match(/\S+/g) || [];
		if (n.length < 1 && n.push("center"), 1 == n.length && n.push(n[0]), "top" != n[0] && "bottom" != n[0] && "left" != n[1] && "right" != n[1] || (n = [n[1], n[0]]), this.positionX != a && (n[0] = this.positionX.toLowerCase()), this.positionY != a && (n[1] = this.positionY.toLowerCase()), i.positionX = n[0], i.positionY = n[1], "left" != this.positionX && "right" != this.positionX && (isNaN(parseInt(this.positionX)) ? this.positionX = "center" : this.positionX = parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (isNaN(parseInt(this.positionY)) ? this.positionY = "center" : this.positionY = parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
			backgroundImage: "url(" + this.imageSrc + ")",
			backgroundSize: "cover",
			backgroundPosition: this.position
		}), this;
		if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
			backgroundImage: "url(" + this.imageSrc + ")",
			backgroundSize: "cover",
			backgroundPosition: this.position
		}), this;
		this.$mirror = r("<div />").prependTo("body");
		var o = this.$element.find(">.parallax-slider"),
			s = !1;
		0 == o.length ? this.$slider = r("<img />").prependTo(this.$mirror) : (this.$slider = o.prependTo(this.$mirror), s = !0), this.$mirror.addClass("parallax-mirror").css({
			visibility: "hidden",
			zIndex: this.zIndex,
			position: "fixed",
			top: 0,
			left: 0,
			overflow: "hidden"
		}), this.$slider.addClass("parallax-slider").one("load", function () {
			i.naturalHeight && i.naturalWidth || (i.naturalHeight = this.naturalHeight || this.height || 1, i.naturalWidth = this.naturalWidth || this.width || 1), i.aspectRatio = i.naturalWidth / i.naturalHeight, l.isSetup || l.setup(), l.sliders.push(i), l.isFresh = !1, l.requestRender()
		}), s || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || 0 < o.length) && this.$slider.trigger("load")
	}! function () {
		for (var o = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !s.requestAnimationFrame; ++t) s.requestAnimationFrame = s[e[t] + "RequestAnimationFrame"], s.cancelAnimationFrame = s[e[t] + "CancelAnimationFrame"] || s[e[t] + "CancelRequestAnimationFrame"];
		s.requestAnimationFrame || (s.requestAnimationFrame = function (e) {
			var t = (new Date).getTime(),
				i = Math.max(0, 16 - (t - o)),
				n = s.setTimeout(function () {
					e(t + i)
				}, i);
			return o = t + i, n
		}), s.cancelAnimationFrame || (s.cancelAnimationFrame = function (e) {
			clearTimeout(e)
		})
	}(), r.extend(l.prototype, {
		speed: .2,
		bleed: 0,
		zIndex: -100,
		iosFix: !0,
		androidFix: !0,
		position: "center",
		overScrollFix: !1,
		refresh: function () {
			this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
			var e = l.winHeight,
				t = l.docHeight,
				i = Math.min(this.boxOffsetTop, t - e),
				n = Math.max(this.boxOffsetTop + this.boxHeight - e, 0),
				o = this.boxHeight + (i - n) * (1 - this.speed) | 0,
				s = (this.boxOffsetTop - i) * (1 - this.speed) | 0;
			if (o * this.aspectRatio >= this.boxWidth) {
				this.imageWidth = o * this.aspectRatio | 0, this.imageHeight = o, this.offsetBaseTop = s;
				var r = this.imageWidth - this.boxWidth;
				"left" == this.positionX ? this.offsetLeft = 0 : "right" == this.positionX ? this.offsetLeft = -r : isNaN(this.positionX) ? this.offsetLeft = -r / 2 | 0 : this.offsetLeft = Math.max(this.positionX, -r)
			} else {
				this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0;
				r = this.imageHeight - o;
				"top" == this.positionY ? this.offsetBaseTop = s : "bottom" == this.positionY ? this.offsetBaseTop = s - r : isNaN(this.positionY) ? this.offsetBaseTop = s - r / 2 | 0 : this.offsetBaseTop = s + Math.max(this.positionY, -r)
			}
		},
		render: function () {
			var e = l.scrollTop,
				t = l.scrollLeft,
				i = this.overScrollFix ? l.overScroll : 0,
				n = e + l.winHeight;
			this.boxOffsetBottom > e && this.boxOffsetTop <= n ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - e, this.mirrorLeft = this.boxOffsetLeft - t, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({
				transform: "translate3d(0px, 0px, 0px)",
				visibility: this.visibility,
				top: this.mirrorTop - i,
				left: this.mirrorLeft,
				height: this.boxHeight,
				width: this.boxWidth
			}), this.$slider.css({
				transform: "translate3d(0px, 0px, 0px)",
				position: "absolute",
				top: this.offsetTop,
				left: this.offsetLeft,
				height: this.imageHeight,
				width: this.imageWidth,
				maxWidth: "none"
			})
		}
	}), r.extend(l, {
		scrollTop: 0,
		scrollLeft: 0,
		winHeight: 0,
		winWidth: 0,
		docHeight: 1 << 30,
		docWidth: 1 << 30,
		sliders: [],
		isReady: !1,
		isFresh: !1,
		isBusy: !1,
		setup: function () {
			if (!this.isReady) {
				var e = r(o),
					n = r(s),
					t = function () {
						l.winHeight = n.height(), l.winWidth = n.width(), l.docHeight = e.height(), l.docWidth = e.width()
					},
					i = function () {
						var e = n.scrollTop(),
							t = l.docHeight - l.winHeight,
							i = l.docWidth - l.winWidth;
						l.scrollTop = Math.max(0, Math.min(t, e)), l.scrollLeft = Math.max(0, Math.min(i, n.scrollLeft())), l.overScroll = Math.max(e - t, Math.min(e, 0))
					};
				n.on("resize.px.parallax load.px.parallax", function () {
					t(), l.isFresh = !1, l.requestRender()
				}).on("scroll.px.parallax load.px.parallax", function () {
					i(), l.requestRender()
				}), t(), i(), this.isReady = !0
			}
		},
		configure: function (e) {
			"object" == typeof e && (delete e.refresh, delete e.render, r.extend(this.prototype, e))
		},
		refresh: function () {
			r.each(this.sliders, function () {
				this.refresh()
			}), this.isFresh = !0
		},
		render: function () {
			this.isFresh || this.refresh(), r.each(this.sliders, function () {
				this.render()
			})
		},
		requestRender: function () {
			var e = this;
			this.isBusy || (this.isBusy = !0, s.requestAnimationFrame(function () {
				e.render(), e.isBusy = !1
			}))
		},
		destroy: function (e) {
			var t, i = r(e).data("px.parallax");
			for (i.$mirror.remove(), t = 0; t < this.sliders.length; t += 1) this.sliders[t] == i && this.sliders.splice(t, 1);
			r(e).data("px.parallax", !1), 0 === this.sliders.length && (r(s).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, l.isSetup = !1)
		}
	});
	var e = r.fn.parallax;
	r.fn.parallax = function (i) {
		return this.each(function () {
			var e = r(this),
				t = "object" == typeof i && i;
			this == s || this == o || e.is("body") ? l.configure(t) : e.data("px.parallax") ? "object" == typeof i && r.extend(e.data("px.parallax"), t) : (t = r.extend({}, e.data(), t), e.data("px.parallax", new l(this, t))), "string" == typeof i && ("destroy" == i ? l.destroy(this) : l[i]())
		})
	}, r.fn.parallax.Constructor = l, r.fn.parallax.noConflict = function () {
		return r.fn.parallax = e, this
	}, r(o).on("ready.px.parallax.data-api", function () {
		r('[data-parallax="scroll"]').parallax()
	})
}(jQuery, window, document),
function (e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e.Vimeo = e.Vimeo || {}, e.Vimeo.Player = t())
}(this, function () {
	"use strict";

	function e(e, t) {
		return e(t = {
			exports: {}
		}, t.exports), t.exports
	}

	function s(e, t, i) {
		var n = y.get(e.element) || {};
		t in n || (n[t] = []), n[t].push(i), y.set(e.element, n)
	}

	function r(e, t) {
		return (y.get(e.element) || {})[t] || []
	}

	function a(e, t, i) {
		var n = y.get(e.element) || {};
		if (!n[t]) return !0;
		if (!i) return n[t] = [], y.set(e.element, n), !0;
		var o = n[t].indexOf(i);
		return -1 !== o && n[t].splice(o, 1), y.set(e.element, n), n[t] && 0 === n[t].length
	}

	function l(e, t) {
		return 0 === e.indexOf(t.toLowerCase()) ? e : "" + t.toLowerCase() + e.substr(0, 1).toUpperCase() + e.substr(1)
	}

	function c(e) {
		return /^(https?:)?\/\/(player.)?vimeo.com(?=$|\/)/.test(e)
	}

	function d() {
		var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
			i = t.id,
			n = t.url,
			o = i || n;
		if (!o) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
		if (e = o, !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e) return "https://vimeo.com/" + o;
		if (c(o)) return o.replace("http:", "https:");
		if (i) throw new TypeError("“" + i + "” is not a valid video id.");
		throw new TypeError("“" + o + "” is not a vimeo.com url.")
	}

	function u(n) {
		var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
		return o.reduce(function (e, t) {
			var i = n.getAttribute("data-vimeo-" + t);
			return (i || "" === i) && (e[t] = "" === i ? 1 : i), e
		}, e)
	}

	function h(s) {
		var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
		return new Promise(function (t, i) {
			if (!c(s)) throw new TypeError("“" + s + "” is not a vimeo.com url.");
			var e = "https://vimeo.com/api/oembed.json?url=" + encodeURIComponent(s);
			for (var n in r) r.hasOwnProperty(n) && (e += "&" + n + "=" + encodeURIComponent(r[n]));
			var o = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
			o.open("GET", e, !0), o.onload = function () {
				if (404 !== o.status)
					if (403 !== o.status) try {
						var e = JSON.parse(o.responseText);
						t(e)
					} catch (e) {
						i(e)
					} else i(new Error("“" + s + "” is not embeddable."));
					else i(new Error("“" + s + "” was not found."))
			}, o.onerror = function () {
				var e = o.status ? " (" + o.status + ")" : "";
				i(new Error("There was an error fetching the embed code from Vimeo" + e + "."))
			}, o.send()
		})
	}

	function p(e, t) {
		var i = e.html;
		if (!t) throw new TypeError("An element must be provided");
		if (null !== t.getAttribute("data-vimeo-initialized")) return t.querySelector("iframe");
		var n = document.createElement("div");
		return n.innerHTML = i, t.appendChild(n.firstChild), t.setAttribute("data-vimeo-initialized", "true"), t.querySelector("iframe")
	}

	function f(e) {
		return "string" == typeof e && (e = JSON.parse(e)), e
	}

	function m(e, t, i) {
		if (e.element.contentWindow.postMessage) {
			var n = {
				method: t
			};
			void 0 !== i && (n.value = i);
			var o = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
			8 <= o && o < 10 && (n = JSON.stringify(n)), e.element.contentWindow.postMessage(n, e.origin)
		}
	}

	function v(i, n) {
		n = f(n);
		var e = [],
			t = void 0;
		if (n.event) {
			if ("error" === n.event) r(i, n.data.method).forEach(function (e) {
				var t = new Error(n.data.message);
				t.name = n.data.name, e.reject(t), a(i, n.data.method, e)
			});
			e = r(i, "event:" + n.event), t = n.data
		} else if (n.method) {
			var o = function (e, t) {
				var i = r(e, t);
				if (i.length < 1) return !1;
				var n = i.shift();
				return a(e, t, n), n
			}(i, n.method);
			o && (e.push(o), t = n.value)
		}
		e.forEach(function (e) {
			try {
				if ("function" == typeof e) return void e.call(i, t);
				e.resolve(t)
			} catch (e) {}
		})
	}
	var t = void 0 !== Array.prototype.indexOf,
		i = void 0 !== window.postMessage;
	if (!t || !i) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
	var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
		g = (e(function (e, t) {
			! function (e) {
				function t(e, t) {
					function i(e) {
						return this && this.constructor === i ? (this._keys = [], this._values = [], this._itp = [], this.objectOnly = t, void(e && function (e) {
							this.add ? e.forEach(this.add, this) : e.forEach(function (e) {
								this.set(e[0], e[1])
							}, this)
						}.call(this, e))) : new i(e)
					}
					return t || m(e, "size", {
						get: h
					}), (e.constructor = i).prototype = e, i
				}

				function i(e) {
					return this.has(e) && (this._keys.splice(f, 1), this._values.splice(f, 1), this._itp.forEach(function (e) {
						f < e[0] && e[0]--
					})), -1 < f
				}

				function n(e) {
					return this.has(e) ? this._values[f] : void 0
				}

				function o(e, t) {
					if (this.objectOnly && t !== Object(t)) throw new TypeError("Invalid value used as weak collection key");
					if (t != t || 0 === t)
						for (f = e.length; f-- && !v(e[f], t););
					else f = e.indexOf(t);
					return -1 < f
				}

				function s(e) {
					return o.call(this, this._values, e)
				}

				function r(e) {
					return o.call(this, this._keys, e)
				}

				function a(e, t) {
					return this.has(e) ? this._values[f] = t : this._values[this._keys.push(e) - 1] = t, this
				}

				function l(e) {
					return this.has(e) || this._values.push(e), this
				}

				function c() {
					(this._keys || 0).length = this._values.length = 0
				}

				function d() {
					return u(this._itp, this._values)
				}

				function u(i, n, o) {
					var s = [0],
						r = !1;
					return i.push(s), {
						next: function () {
							var e, t = s[0];
							return !r && t < n.length ? (e = o ? [n[t], o[t]] : n[t], s[0]++) : (r = !0, i.splice(i.indexOf(s), 1)), {
								done: r,
								value: e
							}
						}
					}
				}

				function h() {
					return this._values.length
				}

				function p(e, t) {
					for (var i = this.entries();;) {
						var n = i.next();
						if (n.done) break;
						e.call(t, n.value[1], n.value[0], this)
					}
				}
				var f, m = Object.defineProperty,
					v = function (e, t) {
						return e === t || e != e && t != t
					};
				"undefined" == typeof WeakMap && (e.WeakMap = t({
					delete: i,
					clear: c,
					get: n,
					has: r,
					set: a
				}, !0)), "undefined" != typeof Map && "function" == typeof (new Map).values && (new Map).values().next || (e.Map = t({
					delete: i,
					has: r,
					get: n,
					set: a,
					keys: function () {
						return u(this._itp, this._keys)
					},
					values: d,
					entries: function () {
						return u(this._itp, this._keys, this._values)
					},
					forEach: p,
					clear: c
				})), "undefined" != typeof Set && "function" == typeof (new Set).values && (new Set).values().next || (e.Set = t({
					has: s,
					add: l,
					delete: i,
					clear: c,
					keys: d,
					values: d,
					entries: function () {
						return u(this._itp, this._values, this._values)
					},
					forEach: p
				})), "undefined" == typeof WeakSet && (e.WeakSet = t({
					delete: i,
					add: l,
					clear: c,
					has: s
				}, !0))
			}(void 0 !== t && void 0 !== n ? n : window)
		}), e(function (e) {
			var t, i, m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
				return typeof e
			} : function (e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			};
			(i = n)[t = "Promise"] = i[t] || function () {
				function s(e, t) {
					o.add(e, t), u || (u = p(o.drain))
				}

				function r(e) {
					var t, i = void 0 === e ? "undefined" : m(e);
					return null == e || "object" != i && "function" != i || (t = e.then), "function" == typeof t && t
				}

				function a() {
					for (var e = 0; e < this.chain.length; e++) t(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
					this.chain.length = 0
				}

				function t(e, t, i) {
					var n, o;
					try {
						!1 === t ? i.reject(e.msg) : (n = !0 === t ? e.msg : t.call(void 0, e.msg)) === i.promise ? i.reject(TypeError("Promise-chain cycle")) : (o = r(n)) ? o.call(n, i.resolve, i.reject) : i.resolve(n)
					} catch (e) {
						i.reject(e)
					}
				}

				function l(e) {
					var t = this;
					t.triggered || (t.triggered = !0, t.def && (t = t.def), t.msg = e, t.state = 2, 0 < t.chain.length && s(a, t))
				}

				function c(e, i, n, o) {
					for (var t = 0; t < i.length; t++)! function (t) {
						e.resolve(i[t]).then(function (e) {
							n(t, e)
						}, o)
					}(t)
				}

				function d(e) {
					this.def = e, this.triggered = !1
				}

				function i(e) {
					this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
				}

				function e(e) {
					if ("function" != typeof e) throw TypeError("Not a function");
					if (0 !== this.__NPO__) throw TypeError("Not a promise");
					this.__NPO__ = 1;
					var n = new i(this);
					this.then = function (e, t) {
						var i = {
							success: "function" != typeof e || e,
							failure: "function" == typeof t && t
						};
						return i.promise = new this.constructor(function (e, t) {
							if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
							i.resolve = e, i.reject = t
						}), n.chain.push(i), 0 !== n.state && s(a, n), i.promise
					}, this.catch = function (e) {
						return this.then(void 0, e)
					};
					try {
						e.call(void 0, function (e) {
							(function e(i) {
								var n, o = this;
								if (!o.triggered) {
									o.triggered = !0, o.def && (o = o.def);
									try {
										(n = r(i)) ? s(function () {
											var t = new d(o);
											try {
												n.call(i, function () {
													e.apply(t, arguments)
												}, function () {
													l.apply(t, arguments)
												})
											} catch (e) {
												l.call(t, e)
											}
										}) : (o.msg = i, o.state = 1, 0 < o.chain.length && s(a, o))
									} catch (e) {
										l.call(new d(o), e)
									}
								}
							}).call(n, e)
						}, function (e) {
							l.call(n, e)
						})
					} catch (e) {
						l.call(n, e)
					}
				}
				var n, u, o, h = Object.prototype.toString,
					p = "undefined" != typeof setImmediate ? function (e) {
						return setImmediate(e)
					} : setTimeout;
				try {
					Object.defineProperty({}, "x", {}), n = function (e, t, i, n) {
						return Object.defineProperty(e, t, {
							value: i,
							writable: !0,
							configurable: !1 !== n
						})
					}
				} catch (s) {
					n = function (e, t, i) {
						return e[t] = i, e
					}
				}
				o = function () {
					function i(e, t) {
						this.fn = e, this.self = t, this.next = void 0
					}
					var n, o, s;
					return {
						add: function (e, t) {
							s = new i(e, t), o ? o.next = s : n = s, o = s, s = void 0
						},
						drain: function () {
							var e = n;
							for (n = o = u = void 0; e;) e.fn.call(e.self), e = e.next
						}
					}
				}();
				var f = n({}, "constructor", e, !1);
				return n(e.prototype = f, "__NPO__", 0, !1), n(e, "resolve", function (i) {
					return i && "object" == (void 0 === i ? "undefined" : m(i)) && 1 === i.__NPO__ ? i : new this(function (e, t) {
						if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
						e(i)
					})
				}), n(e, "reject", function (i) {
					return new this(function (e, t) {
						if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
						t(i)
					})
				}), n(e, "all", function (t) {
					var r = this;
					return "[object Array]" != h.call(t) ? r.reject(TypeError("Not an array")) : 0 === t.length ? r.resolve([]) : new r(function (i, e) {
						if ("function" != typeof i || "function" != typeof e) throw TypeError("Not a function");
						var n = t.length,
							o = Array(n),
							s = 0;
						c(r, t, function (e, t) {
							o[e] = t, ++s === n && i(o)
						}, e)
					})
				}), n(e, "race", function (t) {
					var n = this;
					return "[object Array]" != h.call(t) ? n.reject(TypeError("Not an array")) : new n(function (i, e) {
						if ("function" != typeof i || "function" != typeof e) throw TypeError("Not a function");
						c(n, t, function (e, t) {
							i(t)
						}, e)
					})
				}), e
			}(), void 0 !== e && e.exports ? e.exports = i[t] : "function" == typeof define && define.amd && define(function () {
				return i[t]
			})
		})),
		y = new WeakMap,
		o = ["id", "url", "width", "maxwidth", "height", "maxheight", "portrait", "title", "byline", "color", "autoplay", "autopause", "loop", "responsive"],
		w = function () {
			function n(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
				}
			}
			return function (e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		b = new WeakMap,
		x = new WeakMap,
		T = function () {
			function i(s) {
				var r = this,
					n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
				if (function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, i), window.jQuery && s instanceof jQuery && (1 < s.length && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), s = s[0]), "string" == typeof s && (s = document.getElementById(s)), !(s instanceof window.HTMLElement)) throw new TypeError("You must pass either a valid element or a valid id.");
				if ("IFRAME" !== s.nodeName) {
					var e = s.querySelector("iframe");
					e && (s = e)
				}
				if ("IFRAME" === s.nodeName && !c(s.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
				if (b.has(s)) return b.get(s);
				this.element = s, this.origin = "*";
				var t = new g(function (o, t) {
					var e = function (e) {
						if (c(e.origin) && r.element.contentWindow === e.source) {
							"*" === r.origin && (r.origin = e.origin);
							var t = f(e.data),
								i = "event" in t && "ready" === t.event,
								n = "method" in t && "ping" === t.method;
							return i || n ? (r.element.setAttribute("data-ready", "true"), void o()) : void v(r, t)
						}
					};
					if (window.addEventListener ? window.addEventListener("message", e, !1) : window.attachEvent && window.attachEvent("onmessage", e), "IFRAME" !== r.element.nodeName) {
						var i = u(s, n);
						h(d(i), i).then(function (e) {
							var t, i, n, o = p(e, s);
							return r.element = o, t = s, i = o, n = y.get(t), y.set(i, n), y.delete(t), e
						}).catch(function (e) {
							return t(e)
						})
					}
				});
				return x.set(this, t), b.set(this.element, this), "IFRAME" === this.element.nodeName && m(this, "ping"), this
			}
			return w(i, [{
				key: "callMethod",
				value: function (i) {
					var n = this,
						o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
					return new g(function (e, t) {
						return n.ready().then(function () {
							s(n, i, {
								resolve: e,
								reject: t
							}), m(n, i, o)
						})
					})
				}
			}, {
				key: "get",
				value: function (i) {
					var n = this;
					return new g(function (e, t) {
						return i = l(i, "get"), n.ready().then(function () {
							s(n, i, {
								resolve: e,
								reject: t
							}), m(n, i)
						})
					})
				}
			}, {
				key: "set",
				value: function (n, e) {
					var o = this;
					return g.resolve(e).then(function (i) {
						if (n = l(n, "set"), null == i) throw new TypeError("There must be a value to set.");
						return o.ready().then(function () {
							return new g(function (e, t) {
								s(o, n, {
									resolve: e,
									reject: t
								}), m(o, n, i)
							})
						})
					})
				}
			}, {
				key: "on",
				value: function (e, t) {
					if (!e) throw new TypeError("You must pass an event name.");
					if (!t) throw new TypeError("You must pass a callback function.");
					if ("function" != typeof t) throw new TypeError("The callback must be a function.");
					0 === r(this, "event:" + e).length && this.callMethod("addEventListener", e).catch(function () {}), s(this, "event:" + e, t)
				}
			}, {
				key: "off",
				value: function (e, t) {
					if (!e) throw new TypeError("You must pass an event name.");
					if (t && "function" != typeof t) throw new TypeError("The callback must be a function.");
					a(this, "event:" + e, t) && this.callMethod("removeEventListener", e).catch(function (e) {})
				}
			}, {
				key: "loadVideo",
				value: function (e) {
					return this.callMethod("loadVideo", e)
				}
			}, {
				key: "ready",
				value: function () {
					var e = x.get(this);
					return g.resolve(e)
				}
			}, {
				key: "addCuePoint",
				value: function (e) {
					var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
					return this.callMethod("addCuePoint", {
						time: e,
						data: t
					})
				}
			}, {
				key: "removeCuePoint",
				value: function (e) {
					return this.callMethod("removeCuePoint", e)
				}
			}, {
				key: "enableTextTrack",
				value: function (e, t) {
					if (!e) throw new TypeError("You must pass a language.");
					return this.callMethod("enableTextTrack", {
						language: e,
						kind: t
					})
				}
			}, {
				key: "disableTextTrack",
				value: function () {
					return this.callMethod("disableTextTrack")
				}
			}, {
				key: "pause",
				value: function () {
					return this.callMethod("pause")
				}
			}, {
				key: "play",
				value: function () {
					return this.callMethod("play")
				}
			}, {
				key: "unload",
				value: function () {
					return this.callMethod("unload")
				}
			}, {
				key: "getAutopause",
				value: function () {
					return this.get("autopause")
				}
			}, {
				key: "setAutopause",
				value: function (e) {
					return this.set("autopause", e)
				}
			}, {
				key: "getColor",
				value: function () {
					return this.get("color")
				}
			}, {
				key: "setColor",
				value: function (e) {
					return this.set("color", e)
				}
			}, {
				key: "getCuePoints",
				value: function () {
					return this.get("cuePoints")
				}
			}, {
				key: "getCurrentTime",
				value: function () {
					return this.get("currentTime")
				}
			}, {
				key: "setCurrentTime",
				value: function (e) {
					return this.set("currentTime", e)
				}
			}, {
				key: "getDuration",
				value: function () {
					return this.get("duration")
				}
			}, {
				key: "getEnded",
				value: function () {
					return this.get("ended")
				}
			}, {
				key: "getLoop",
				value: function () {
					return this.get("loop")
				}
			}, {
				key: "setLoop",
				value: function (e) {
					return this.set("loop", e)
				}
			}, {
				key: "getPaused",
				value: function () {
					return this.get("paused")
				}
			}, {
				key: "getTextTracks",
				value: function () {
					return this.get("textTracks")
				}
			}, {
				key: "getVideoEmbedCode",
				value: function () {
					return this.get("videoEmbedCode")
				}
			}, {
				key: "getVideoId",
				value: function () {
					return this.get("videoId")
				}
			}, {
				key: "getVideoTitle",
				value: function () {
					return this.get("videoTitle")
				}
			}, {
				key: "getVideoWidth",
				value: function () {
					return this.get("videoWidth")
				}
			}, {
				key: "getVideoHeight",
				value: function () {
					return this.get("videoHeight")
				}
			}, {
				key: "getVideoUrl",
				value: function () {
					return this.get("videoUrl")
				}
			}, {
				key: "getVolume",
				value: function () {
					return this.get("volume")
				}
			}, {
				key: "setVolume",
				value: function (e) {
					return this.set("volume", e)
				}
			}]), i
		}();
	return function () {
		var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document,
			t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
			i = function (e) {
				"console" in window && console.error && console.error("There was an error creating an embed: " + e)
			};
		t.forEach(function (t) {
			try {
				if (null !== t.getAttribute("data-vimeo-defer")) return;
				var e = u(t);
				h(d(e), e).then(function (e) {
					return p(e, t)
				}).catch(i)
			} catch (t) {
				i(t)
			}
		})
	}(), T
}),
function (e) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (c) {
	"use strict";
	var o, s = window.Slick || {};
	o = 0, (s = function (e, t) {
		var i, n = this;
		n.defaults = {
			accessibility: !0,
			adaptiveHeight: !1,
			appendArrows: c(e),
			appendDots: c(e),
			arrows: !0,
			asNavFor: null,
			prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
			nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
			autoplay: !1,
			autoplaySpeed: 3e3,
			centerMode: !1,
			centerPadding: "50px",
			cssEase: "ease",
			customPaging: function (e, t) {
				return c('<button type="button" data-role="none" role="button" tabindex="0" />').text(t + 1)
			},
			dots: !1,
			dotsClass: "slick-dots",
			draggable: !0,
			easing: "linear",
			edgeFriction: .35,
			fade: !1,
			focusOnSelect: !1,
			infinite: !0,
			initialSlide: 0,
			lazyLoad: "ondemand",
			mobileFirst: !1,
			pauseOnHover: !0,
			pauseOnFocus: !0,
			pauseOnDotsHover: !1,
			respondTo: "window",
			responsive: null,
			rows: 1,
			rtl: !1,
			slide: "",
			slidesPerRow: 1,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 500,
			swipe: !0,
			swipeToSlide: !1,
			touchMove: !0,
			touchThreshold: 5,
			useCSS: !0,
			useTransform: !0,
			variableWidth: !1,
			vertical: !1,
			verticalSwiping: !1,
			waitForAnimate: !0,
			zIndex: 1e3
		}, n.initials = {
			animating: !1,
			dragging: !1,
			autoPlayTimer: null,
			currentDirection: 0,
			currentLeft: null,
			currentSlide: 0,
			direction: 1,
			$dots: null,
			listWidth: null,
			listHeight: null,
			loadIndex: 0,
			$nextArrow: null,
			$prevArrow: null,
			slideCount: null,
			slideWidth: null,
			$slideTrack: null,
			$slides: null,
			sliding: !1,
			slideOffset: 0,
			swipeLeft: null,
			$list: null,
			touchObject: {},
			transformsEnabled: !1,
			unslicked: !1
		}, c.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = c(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, i = c(e).data("slick") || {}, n.options = c.extend({}, n.defaults, t, i), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = c.proxy(n.autoPlay, n), n.autoPlayClear = c.proxy(n.autoPlayClear, n), n.autoPlayIterator = c.proxy(n.autoPlayIterator, n), n.changeSlide = c.proxy(n.changeSlide, n), n.clickHandler = c.proxy(n.clickHandler, n), n.selectHandler = c.proxy(n.selectHandler, n), n.setPosition = c.proxy(n.setPosition, n), n.swipeHandler = c.proxy(n.swipeHandler, n), n.dragHandler = c.proxy(n.dragHandler, n), n.keyHandler = c.proxy(n.keyHandler, n), n.instanceUid = o++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
	}).prototype.activateADA = function () {
		this.$slideTrack.find(".slick-active").attr({
			"aria-hidden": "false"
		}).find("a, input, button, select").attr({
			tabindex: "0"
		})
	}, s.prototype.addSlide = s.prototype.slickAdd = function (e, t, i) {
		var n = this;
		if ("boolean" == typeof t) i = t, t = null;
		else if (t < 0 || t >= n.slideCount) return !1;
		n.unload(), "number" == typeof t ? 0 === t && 0 === n.$slides.length ? c(e).appendTo(n.$slideTrack) : i ? c(e).insertBefore(n.$slides.eq(t)) : c(e).insertAfter(n.$slides.eq(t)) : !0 === i ? c(e).prependTo(n.$slideTrack) : c(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function (e, t) {
			c(t).attr("data-slick-index", e)
		}), n.$slidesCache = n.$slides, n.reinit()
	}, s.prototype.animateHeight = function () {
		var e = this;
		if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
			var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
			e.$list.animate({
				height: t
			}, e.options.speed)
		}
	}, s.prototype.animateSlide = function (e, t) {
		var i = {},
			n = this;
		n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
			left: e
		}, n.options.speed, n.options.easing, t) : n.$slideTrack.animate({
			top: e
		}, n.options.speed, n.options.easing, t) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), c({
			animStart: n.currentLeft
		}).animate({
			animStart: e
		}, {
			duration: n.options.speed,
			easing: n.options.easing,
			step: function (e) {
				e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate(" + e + "px, 0px)" : i[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(i)
			},
			complete: function () {
				t && t.call()
			}
		})) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(i), t && setTimeout(function () {
			n.disableTransition(), t.call()
		}, n.options.speed))
	}, s.prototype.getNavTarget = function () {
		var e = this.options.asNavFor;
		return e && null !== e && (e = c(e).not(this.$slider)), e
	}, s.prototype.asNavFor = function (t) {
		var e = this.getNavTarget();
		null !== e && "object" == typeof e && e.each(function () {
			var e = c(this).slick("getSlick");
			e.unslicked || e.slideHandler(t, !0)
		})
	}, s.prototype.applyTransition = function (e) {
		var t = this,
			i = {};
		!1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
	}, s.prototype.autoPlay = function () {
		var e = this;
		e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
	}, s.prototype.autoPlayClear = function () {
		this.autoPlayTimer && clearInterval(this.autoPlayTimer)
	}, s.prototype.autoPlayIterator = function () {
		var e = this,
			t = e.currentSlide + e.options.slidesToScroll;
		e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
	}, s.prototype.buildArrows = function () {
		var e = this;
		!0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
			"aria-disabled": "true",
			tabindex: "-1"
		}))
	}, s.prototype.buildDots = function () {
		var e, t, i = this;
		if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
			for (i.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) t.append(c("<li />").append(i.options.customPaging.call(this, i, e)));
			i.$dots = t.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
		}
	}, s.prototype.buildOut = function () {
		var e = this;
		e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
			c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
		}), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
	}, s.prototype.buildRows = function () {
		var e, t, i, n, o, s, r, a = this;
		if (n = document.createDocumentFragment(), s = a.$slider.children(), 1 < a.options.rows) {
			for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; e < o; e++) {
				var l = document.createElement("div");
				for (t = 0; t < a.options.rows; t++) {
					var c = document.createElement("div");
					for (i = 0; i < a.options.slidesPerRow; i++) {
						var d = e * r + (t * a.options.slidesPerRow + i);
						s.get(d) && c.appendChild(s.get(d))
					}
					l.appendChild(c)
				}
				n.appendChild(l)
			}
			a.$slider.empty().append(n), a.$slider.children().children().children().css({
				width: 100 / a.options.slidesPerRow + "%",
				display: "inline-block"
			})
		}
	}, s.prototype.checkResponsive = function (e, t) {
		var i, n, o, s = this,
			r = !1,
			a = s.$slider.width(),
			l = window.innerWidth || c(window).width();
		if ("window" === s.respondTo ? o = l : "slider" === s.respondTo ? o = a : "min" === s.respondTo && (o = Math.min(l, a)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
			for (i in n = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[i] && (n = s.breakpoints[i]) : o > s.breakpoints[i] && (n = s.breakpoints[i]));
			null !== n ? null !== s.activeBreakpoint ? (n !== s.activeBreakpoint || t) && (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[n]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), r = n) : (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[n]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), r = n) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), r = n), e || !1 === r || s.$slider.trigger("breakpoint", [s, r])
		}
	}, s.prototype.changeSlide = function (e, t) {
		var i, n, o = this,
			s = c(e.currentTarget);
		switch (s.is("a") && e.preventDefault(), s.is("li") || (s = s.closest("li")), i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
		case "previous":
			n = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, t);
			break;
		case "next":
			n = 0 === i ? o.options.slidesToScroll : i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, t);
			break;
		case "index":
			var r = 0 === e.data.index ? 0 : e.data.index || s.index() * o.options.slidesToScroll;
			o.slideHandler(o.checkNavigable(r), !1, t), s.children().trigger("focus");
			break;
		default:
			return
		}
	}, s.prototype.checkNavigable = function (e) {
		var t, i;
		if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
		else
			for (var n in t) {
				if (e < t[n]) {
					e = i;
					break
				}
				i = t[n]
			}
		return e
	}, s.prototype.cleanUpEvents = function () {
		var e = this;
		e.options.dots && null !== e.$dots && c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), c(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
	}, s.prototype.cleanUpSlideEvents = function () {
		this.$list.off("mouseenter.slick", c.proxy(this.interrupt, this, !0)), this.$list.off("mouseleave.slick", c.proxy(this.interrupt, this, !1))
	}, s.prototype.cleanUpRows = function () {
		var e;
		1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
	}, s.prototype.clickHandler = function (e) {
		!1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
	}, s.prototype.destroy = function (e) {
		var t = this;
		t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
			c(this).attr("style", c(this).data("originalStyling"))
		}), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
	}, s.prototype.disableTransition = function (e) {
		var t = {};
		t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
	}, s.prototype.fadeSlide = function (e, t) {
		var i = this;
		!1 === i.cssTransitions ? (i.$slides.eq(e).css({
			zIndex: i.options.zIndex
		}), i.$slides.eq(e).animate({
			opacity: 1
		}, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
			opacity: 1,
			zIndex: i.options.zIndex
		}), t && setTimeout(function () {
			i.disableTransition(e), t.call()
		}, i.options.speed))
	}, s.prototype.fadeSlideOut = function (e) {
		!1 === this.cssTransitions ? this.$slides.eq(e).animate({
			opacity: 0,
			zIndex: this.options.zIndex - 2
		}, this.options.speed, this.options.easing) : (this.applyTransition(e), this.$slides.eq(e).css({
			opacity: 0,
			zIndex: this.options.zIndex - 2
		}))
	}, s.prototype.filterSlides = s.prototype.slickFilter = function (e) {
		null !== e && (this.$slidesCache = this.$slides, this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.filter(e).appendTo(this.$slideTrack), this.reinit())
	}, s.prototype.focusHandler = function () {
		var i = this;
		i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (e) {
			e.stopImmediatePropagation();
			var t = c(this);
			setTimeout(function () {
				i.options.pauseOnFocus && (i.focussed = t.is(":focus"), i.autoPlay())
			}, 0)
		})
	}, s.prototype.getCurrent = s.prototype.slickCurrentSlide = function () {
		return this.currentSlide
	}, s.prototype.getDotCount = function () {
		var e = this,
			t = 0,
			i = 0,
			n = 0;
		if (!0 === e.options.infinite)
			for (; t < e.slideCount;)++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
		else if (!0 === e.options.centerMode) n = e.slideCount;
		else if (e.options.asNavFor)
			for (; t < e.slideCount;)++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
		else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
		return n - 1
	}, s.prototype.getLeft = function (e) {
		var t, i, n, o = this,
			s = 0;
		return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (s = o.slideOffset = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + s, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (o.$list.width() - n.outerWidth()) / 2)), t
	}, s.prototype.getOption = s.prototype.slickGetOption = function (e) {
		return this.options[e]
	}, s.prototype.getNavigableIndexes = function () {
		var e, t = this,
			i = 0,
			n = 0,
			o = [];
		for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
		return o
	}, s.prototype.getSlick = function () {
		return this
	}, s.prototype.getSlideCount = function () {
		var i, n, o = this;
		return n = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (e, t) {
			return t.offsetLeft - n + c(t).outerWidth() / 2 > -1 * o.swipeLeft ? (i = t, !1) : void 0
		}), Math.abs(c(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
	}, s.prototype.goTo = s.prototype.slickGoTo = function (e, t) {
		this.changeSlide({
			data: {
				message: "index",
				index: parseInt(e)
			}
		}, t)
	}, s.prototype.init = function (e) {
		var t = this;
		c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
	}, s.prototype.initADA = function () {
		var t = this;
		t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
			"aria-hidden": "true",
			tabindex: "-1"
		}).find("a, input, button, select").attr({
			tabindex: "-1"
		}), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (e) {
			c(this).attr({
				role: "option",
				"aria-describedby": "slick-slide" + t.instanceUid + e
			})
		}), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function (e) {
			c(this).attr({
				role: "presentation",
				"aria-selected": "false",
				"aria-controls": "navigation" + t.instanceUid + e,
				id: "slick-slide" + t.instanceUid + e
			})
		}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
	}, s.prototype.initArrowEvents = function () {
		!0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.off("click.slick").on("click.slick", {
			message: "previous"
		}, this.changeSlide), this.$nextArrow.off("click.slick").on("click.slick", {
			message: "next"
		}, this.changeSlide))
	}, s.prototype.initDotEvents = function () {
		var e = this;
		!0 === e.options.dots && e.slideCount > e.options.slidesToShow && c("li", e.$dots).on("click.slick", {
			message: "index"
		}, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
	}, s.prototype.initSlideEvents = function () {
		this.options.pauseOnHover && (this.$list.on("mouseenter.slick", c.proxy(this.interrupt, this, !0)), this.$list.on("mouseleave.slick", c.proxy(this.interrupt, this, !1)))
	}, s.prototype.initializeEvents = function () {
		var e = this;
		e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
			action: "start"
		}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
			action: "move"
		}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
			action: "end"
		}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
			action: "end"
		}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
	}, s.prototype.initUI = function () {
		!0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.show(), this.$nextArrow.show()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.show()
	}, s.prototype.keyHandler = function (e) {
		e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === this.options.accessibility ? this.changeSlide({
			data: {
				message: !0 === this.options.rtl ? "next" : "previous"
			}
		}) : 39 === e.keyCode && !0 === this.options.accessibility && this.changeSlide({
			data: {
				message: !0 === this.options.rtl ? "previous" : "next"
			}
		}))
	}, s.prototype.lazyLoad = function () {
		function e(e) {
			c("img[data-lazy]", e).each(function () {
				var e = c(this),
					t = c(this).attr("data-lazy"),
					i = document.createElement("img");
				i.onload = function () {
					e.animate({
						opacity: 0
					}, 100, function () {
						e.attr("src", t).animate({
							opacity: 1
						}, 200, function () {
							e.removeAttr("data-lazy").removeClass("slick-loading")
						}), n.$slider.trigger("lazyLoaded", [n, e, t])
					})
				}, i.onerror = function () {
					e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
				}, i.src = t
			})
		}
		var t, i, n = this;
		!0 === n.options.centerMode ? !0 === n.options.infinite ? i = (t = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (t = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), i = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (t = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, i = Math.ceil(t + n.options.slidesToShow), !0 === n.options.fade && (0 < t && t--, i <= n.slideCount && i++)), e(n.$slider.find(".slick-slide").slice(t, i)), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
	}, s.prototype.loadSlider = function () {
		this.setPosition(), this.$slideTrack.css({
			opacity: 1
		}), this.$slider.removeClass("slick-loading"), this.initUI(), "progressive" === this.options.lazyLoad && this.progressiveLazyLoad()
	}, s.prototype.next = s.prototype.slickNext = function () {
		this.changeSlide({
			data: {
				message: "next"
			}
		})
	}, s.prototype.orientationChange = function () {
		this.checkResponsive(), this.setPosition()
	}, s.prototype.pause = s.prototype.slickPause = function () {
		this.autoPlayClear(), this.paused = !0
	}, s.prototype.play = s.prototype.slickPlay = function () {
		this.autoPlay(), this.options.autoplay = !0, this.paused = !1, this.focussed = !1, this.interrupted = !1
	}, s.prototype.postSlide = function (e) {
		var t = this;
		t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
	}, s.prototype.prev = s.prototype.slickPrev = function () {
		this.changeSlide({
			data: {
				message: "previous"
			}
		})
	}, s.prototype.preventDefault = function (e) {
		e.preventDefault()
	}, s.prototype.progressiveLazyLoad = function (e) {
		e = e || 1;
		var t, i, n, o = this,
			s = c("img[data-lazy]", o.$slider);
		s.length ? (t = s.first(), i = t.attr("data-lazy"), (n = document.createElement("img")).onload = function () {
			t.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), !0 === o.options.adaptiveHeight && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, t, i]), o.progressiveLazyLoad()
		}, n.onerror = function () {
			e < 3 ? setTimeout(function () {
				o.progressiveLazyLoad(e + 1)
			}, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, i]), o.progressiveLazyLoad())
		}, n.src = i) : o.$slider.trigger("allImagesLoaded", [o])
	}, s.prototype.refresh = function (e) {
		var t, i, n = this;
		i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), t = n.currentSlide, n.destroy(!0), c.extend(n, n.initials, {
			currentSlide: t
		}), n.init(), e || n.changeSlide({
			data: {
				message: "index",
				index: t
			}
		}, !1)
	}, s.prototype.registerBreakpoints = function () {
		var e, t, i, n = this,
			o = n.options.responsive || null;
		if ("array" === c.type(o) && o.length) {
			for (e in n.respondTo = n.options.respondTo || "window", o)
				if (i = n.breakpoints.length - 1, t = o[e].breakpoint, o.hasOwnProperty(e)) {
					for (; 0 <= i;) n.breakpoints[i] && n.breakpoints[i] === t && n.breakpoints.splice(i, 1), i--;
					n.breakpoints.push(t), n.breakpointSettings[t] = o[e].settings
				}
			n.breakpoints.sort(function (e, t) {
				return n.options.mobileFirst ? e - t : t - e
			})
		}
	}, s.prototype.reinit = function () {
		var e = this;
		e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
	}, s.prototype.resize = function () {
		var e = this;
		c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
			e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
		}, 50))
	}, s.prototype.removeSlide = s.prototype.slickRemove = function (e, t, i) {
		var n = this;
		return "boolean" == typeof e ? e = !0 === (t = e) ? 0 : n.slideCount - 1 : e = !0 === t ? --e : e, !(n.slideCount < 1 || e < 0 || e > n.slideCount - 1) && (n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
	}, s.prototype.setCSS = function (e) {
		var t, i, n = this,
			o = {};
		!0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled || (!(o = {}) === n.cssTransitions ? o[n.animType] = "translate(" + t + ", " + i + ")" : o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"), n.$slideTrack.css(o)
	}, s.prototype.setDimensions = function () {
		var e = this;
		!1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
			padding: "0px " + e.options.centerPadding
		}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
			padding: e.options.centerPadding + " 0px"
		})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
		var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
		!1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
	}, s.prototype.setFade = function () {
		var i, n = this;
		n.$slides.each(function (e, t) {
			i = n.slideWidth * e * -1, !0 === n.options.rtl ? c(t).css({
				position: "relative",
				right: i,
				top: 0,
				zIndex: n.options.zIndex - 2,
				opacity: 0
			}) : c(t).css({
				position: "relative",
				left: i,
				top: 0,
				zIndex: n.options.zIndex - 2,
				opacity: 0
			})
		}), n.$slides.eq(n.currentSlide).css({
			zIndex: n.options.zIndex - 1,
			opacity: 1
		})
	}, s.prototype.setHeight = function () {
		if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
			var e = this.$slides.eq(this.currentSlide).outerHeight(!0);
			this.$list.css("height", e)
		}
	}, s.prototype.setOption = s.prototype.slickSetOption = function () {
		var e, t, i, n, o, s = this,
			r = !1;
		if ("object" === c.type(arguments[0]) ? (i = arguments[0], r = arguments[1], o = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[0], n = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) s.options[i] = n;
		else if ("multiple" === o) c.each(i, function (e, t) {
			s.options[e] = t
		});
		else if ("responsive" === o)
			for (t in n)
				if ("array" !== c.type(s.options.responsive)) s.options.responsive = [n[t]];
				else {
					for (e = s.options.responsive.length - 1; 0 <= e;) s.options.responsive[e].breakpoint === n[t].breakpoint && s.options.responsive.splice(e, 1), e--;
					s.options.responsive.push(n[t])
				}
		r && (s.unload(), s.reinit())
	}, s.prototype.setPosition = function () {
		this.setDimensions(), this.setHeight(), !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(), this.$slider.trigger("setPosition", [this])
	}, s.prototype.setProps = function () {
		var e = this,
			t = document.body.style;
		e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
	}, s.prototype.setSlideClasses = function (e) {
		var t, i, n, o, s = this;
		i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode ? (t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (t <= e && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")) : 0 <= e && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
	}, s.prototype.setupInfinite = function () {
		var e, t, i, n = this;
		if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (t = null, n.slideCount > n.options.slidesToShow)) {
			for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - i; e -= 1) t = e - 1, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
			for (e = 0; e < i; e += 1) t = e, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
			n.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
				c(this).attr("id", "")
			})
		}
	}, s.prototype.interrupt = function (e) {
		e || this.autoPlay(), this.interrupted = e
	}, s.prototype.selectHandler = function (e) {
		var t = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
			i = parseInt(t.attr("data-slick-index"));
		return i || (i = 0), this.slideCount <= this.options.slidesToShow ? (this.setSlideClasses(i), void this.asNavFor(i)) : void this.slideHandler(i)
	}, s.prototype.slideHandler = function (e, t, i) {
		var n, o, s, r, a, l = null,
			c = this;
		return t = t || !1, !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === t && c.asNavFor(e), n = e, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll) ? void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function () {
			c.postSlide(n)
		}) : c.postSlide(n))) : !1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll) ? void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function () {
			c.postSlide(n)
		}) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && ((a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(o, function () {
			c.postSlide(o)
		})) : c.postSlide(o), void c.animateHeight()) : void(!0 !== i ? c.animateSlide(l, function () {
			c.postSlide(o)
		}) : c.postSlide(o))))
	}, s.prototype.startLoad = function () {
		var e = this;
		!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
	}, s.prototype.swipeDirection = function () {
		var e, t, i, n;
		return e = this.touchObject.startX - this.touchObject.curX, t = this.touchObject.startY - this.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === this.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === this.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
	}, s.prototype.swipeEnd = function (e) {
		var t, i, n = this;
		if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
		if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
			switch (i = n.swipeDirection()) {
			case "left":
			case "down":
				t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
				break;
			case "right":
			case "up":
				t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
			}
			"vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
		} else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
	}, s.prototype.swipeHandler = function (e) {
		var t = this;
		if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
		case "start":
			t.swipeStart(e);
			break;
		case "move":
			t.swipeMove(e);
			break;
		case "end":
			t.swipeEnd(e)
		}
	}, s.prototype.swipeMove = function (e) {
		var t, i, n, o, s, r = this;
		return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!r.dragging || s && 1 !== s.length) && (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), !0 === r.options.verticalSwiping && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), "vertical" !== (i = r.swipeDirection()) ? (void 0 !== e.originalEvent && 4 < r.touchObject.swipeLength && e.preventDefault(), o = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), n = r.touchObject.swipeLength, (r.touchObject.edgeHit = !1) === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = t + n * o : r.swipeLeft = t + n * (r.$list.height() / r.listWidth) * o, !0 === r.options.verticalSwiping && (r.swipeLeft = t + n * o), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
	}, s.prototype.swipeStart = function (e) {
		var t, i = this;
		return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? !(i.touchObject = {}) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
	}, s.prototype.unfilterSlides = s.prototype.slickUnfilter = function () {
		null !== this.$slidesCache && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.appendTo(this.$slideTrack), this.reinit())
	}, s.prototype.unload = function () {
		var e = this;
		c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
	}, s.prototype.unslick = function (e) {
		this.$slider.trigger("unslick", [this, e]), this.destroy()
	}, s.prototype.updateArrows = function () {
		var e = this;
		Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
	}, s.prototype.updateDots = function () {
		null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
	}, s.prototype.visibility = function () {
		this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
	}, c.fn.slick = function () {
		var e, t, i = arguments[0],
			n = Array.prototype.slice.call(arguments, 1),
			o = this.length;
		for (e = 0; e < o; e++)
			if ("object" == typeof i || void 0 === i ? this[e].slick = new s(this[e], i) : t = this[e].slick[i].apply(this[e].slick, n), void 0 !== t) return t;
		return this
	}
}),
function (e, i, o) {
	"use strict";
	var s = function (e, t) {
		var i = this;
		this.el = e, this.options = {}, Object.keys(n).forEach(function (e) {
			i.options[e] = n[e]
		}), Object.keys(t).forEach(function (e) {
			i.options[e] = t[e]
		}), this.isInput = "input" === this.el.tagName.toLowerCase(), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.getAttribute(this.attr) : this.el.textContent, this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, o && this.options.stringsElement instanceof o ? this.stringsElement = this.options.stringsElement[0] : this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
	};
	s.prototype = {
		constructor: s,
		init: function () {
			var t = this;
			t.timeout = setTimeout(function () {
				for (var e = 0; e < t.strings.length; ++e) t.sequence[e] = e;
				t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
			}, t.startDelay)
		},
		build: function () {
			var t = this;
			(!0 === this.showCursor && (this.cursor = i.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)), this.stringsElement) && (this.strings = [], this.stringsElement.style.display = "none", Array.prototype.slice.apply(this.stringsElement.children).forEach(function (e) {
				t.strings.push(e.innerHTML)
			}));
			this.init()
		},
		typewrite: function (s, r) {
			if (!0 !== this.stop) {
				var e = Math.round(70 * Math.random()) + this.typeSpeed,
					a = this;
				a.timeout = setTimeout(function () {
					var e = 0,
						t = s.substr(r);
					if ("^" === t.charAt(0)) {
						var i = 1;
						/^\^\d+/.test(t) && (i += (t = /\d+/.exec(t)[0]).length, e = parseInt(t)), s = s.substring(0, r) + s.substring(r + i)
					}
					if ("html" === a.contentType) {
						var n = s.substr(r).charAt(0);
						if ("<" === n || "&" === n) {
							var o = "";
							for (o = "<" === n ? ">" : ";"; s.substr(r + 1).charAt(0) !== o && (s.substr(r).charAt(0), !(++r + 1 > s.length)););
							r++, o
						}
					}
					a.timeout = setTimeout(function () {
						if (r === s.length) {
							if (a.options.onStringTyped(a.arrayPos), a.arrayPos === a.strings.length - 1 && (a.options.callback(), a.curLoop++, !1 === a.loop || a.curLoop === a.loopCount)) return;
							a.timeout = setTimeout(function () {
								a.backspace(s, r)
							}, a.backDelay)
						} else {
							0 === r && a.options.preStringTyped(a.arrayPos);
							var e = s.substr(0, r + 1);
							a.attr ? a.el.setAttribute(a.attr, e) : a.isInput ? a.el.value = e : "html" === a.contentType ? a.el.innerHTML = e : a.el.textContent = e, r++, a.typewrite(s, r)
						}
					}, e)
				}, e)
			}
		},
		backspace: function (t, i) {
			if (!0 !== this.stop) {
				var e = Math.round(70 * Math.random()) + this.backSpeed,
					n = this;
				n.timeout = setTimeout(function () {
					if ("html" === n.contentType && ">" === t.substr(i).charAt(0)) {
						for (;
							"<" !== t.substr(i - 1).charAt(0) && (t.substr(i).charAt(0), !(--i < 0)););
						i--, "<"
					}
					var e = t.substr(0, i);
					n.attr ? n.el.setAttribute(n.attr, e) : n.isInput ? n.el.value = e : "html" === n.contentType ? n.el.innerHTML = e : n.el.textContent = e, i > n.stopNum ? (i--, n.backspace(t, i)) : i <= n.stopNum && (n.arrayPos++, n.arrayPos === n.strings.length ? (n.arrayPos = 0, n.shuffle && (n.sequence = n.shuffleArray(n.sequence)), n.init()) : n.typewrite(n.strings[n.sequence[n.arrayPos]], i))
				}, e)
			}
		},
		shuffleArray: function (e) {
			var t, i, n = e.length;
			if (n)
				for (; --n;) t = e[i = Math.floor(Math.random() * (n + 1))], e[i] = e[n], e[n] = t;
			return e
		},
		reset: function () {
			clearInterval(this.timeout);
			this.el.getAttribute("id");
			this.el.textContent = "", void 0 !== this.cursor && void 0 !== this.cursor.parentNode && this.cursor.parentNode.removeChild(this.cursor), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
		}
	}, s.new = function (e, n) {
		Array.prototype.slice.apply(i.querySelectorAll(e)).forEach(function (e) {
			var t = e._typed,
				i = "object" == typeof n && n;
			t && t.reset(), e._typed = t = new s(e, i), "string" == typeof n && t[n]()
		})
	}, o && (o.fn.typed = function (n) {
		return this.each(function () {
			var e = o(this),
				t = e.data("typed"),
				i = "object" == typeof n && n;
			t && t.reset(), e.data("typed", t = new s(this, i)), "string" == typeof n && t[n]()
		})
	}), e.Typed = s;
	var n = {
		strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
		stringsElement: null,
		typeSpeed: 0,
		startDelay: 0,
		backSpeed: 0,
		shuffle: !1,
		backDelay: 500,
		loop: !1,
		loopCount: !1,
		showCursor: !0,
		cursorChar: "|",
		attr: null,
		contentType: "html",
		callback: function () {},
		preStringTyped: function () {},
		onStringTyped: function () {},
		resetCallback: function () {}
	}
}(window, document, window.jQuery),


/* wine section */
$(function () {
	var wow = $(".wow"),
		  main_class = $(".home-acv-main"),
		wow_sect1 = $(".wow-section").eq(0),
		wow_sect2 = $(".wow-section").eq(1),
		wow_sect3 = $(".wow-section").eq(2),
		wow_sect4 = $(".wow-section").eq(3),
		// wow_sect5 = $(".wow-section").eq(4),
		r = $(".home-acv-main"),
		d = $(".combos"),
		down_arrow = $(".acv-arrow"),
		h = $(".overflow-container"),
		p = $(".header-logo");

	function f() {
		// $(".hero-video").get(0).play(), $(".hero-video").get(1).play(), setTimeout(function() {
    //       r.find(".overflow-container, #play-button").addClass("animate"), $(".hero-arrow-small.main").removeClass("hidden")
    //     }, 1e3)
		wow_sect1.find(".bg").removeClass("down down-s"),
		wow_sect1.find(".content").removeClass("down down-s"),
		main_class.addClass("animate"),
		main_class.find(".overflow-container, #play-button").addClass("animate"),

		wow_sect1.find('.headline').addClass("animate"),
		// wow_sect1.find(".overflow-container").addClass("animate"),	 wow_sect1.find(".acv-line-texture").addClass("animate"),	wow_sect1.find("#play-button").addClass("animate")
		down_arrow.addClass("animate"),
		wow_sect1.find(".bottle").addClass("animate"),
		wow_sect1.find(".headline").addClass('animate'),
		wow_sect1.find(".overflow-container").addClass("animate"),
		wow_sect1.find(".content").addClass("animate"),
		wow_sect1.css({
			"z-index": "1"
		}), $(".home-acv-main").find(h).removeClass("animate"), p.addClass("animate")
	}

	function m() {
		wow_sect1.find(".bg").addClass("up"),
		wow_sect1.find(".content").addClass("down"),
		wow_sect2.find(".bg").removeClass("up"),
		wow_sect2.find(".content").removeClass("down"),
		wow_sect1.find(".content").addClass("up-s"),
		wow_sect1.find(".bg").addClass("up-s"),
		wow_sect2.find(".content").removeClass("down-s"),
		wow_sect2.find(".bg").removeClass("down-s"),
		wow_sect1.find(".bottle").removeClass("animate"),
		wow_sect2.find(".bottle").addClass("animate"),
		wow_sect1.find(".overflow-container").removeClass("animate"),
		wow_sect2.find(".overflow-container").addClass("animate"),
		wow_sect1.find(".content").removeClass("animate"), wow_sect2.find(".content").addClass("animate"),
		wow_sect2.css({
			"z-index": "1"
		})
	}

	function v() {
		// $("#wow").addClass("show"),
		//  	$(".wow").addClass("animate-up"),
		wow_sect2.find(".bg").addClass("down"), wow_sect2.find(".content").addClass("up"),
		wow_sect3.find(".bg").removeClass("down"),
		wow_sect3.find(".content").removeClass("up"),
		wow_sect2.find(".content").addClass("up-s"),
		wow_sect2.find(".bg").addClass("up-s"),
		wow_sect3.find(".content").removeClass("down-s"),
		wow_sect3.find(".bg").removeClass("down-s"),
		wow_sect2.find(".bottle").removeClass("animate"),
		wow_sect3.find(".bottle").addClass("animate"),
		wow_sect2.find(".overflow-container").removeClass("animate"),
		wow_sect3.find(".overflow-container").addClass("animate"),
		wow_sect2.find(".content").removeClass("animate"),
		wow_sect3.removeClass(""),
		wow_sect3.find(".content").addClass("animate"), wow_sect3.css({
			"z-index": "1"
		}), wow.addClass("animate-up-easing")
	}
	wow_sect1.css({
		"z-index": "4"
	});
	var e = {
		scrollingSpeed: 1200,
		onLeave: function (e, t, i) {
			/* e=index, t=nextIndex, i=direction */
			$(this), $(this).height();
			var n = t - 2;
			$(".acv-arrow-small").addClass("hide"),
			console.log(e),
			$(".wow-section").css({
				"z-index": "0"
			}),
			"down" === i && (0 === n && f(), 1 === n && m(), 2 === n && v(),
													3 === n && ($("#wow").addClass("show"),
														 				$(".wow").addClass("animate-up-easing"),
														 				wow_sect4.find(".bottle").removeClass("animate"),
																		wow_sect4.find(".overflow-container").removeClass("animate"),
																		wow_sect4.find(".content").removeClass("animate"),
																		wow_sect4.find(".content").addClass("down"),
																		d.find(".item").addClass("animate-in"),
																		d.find(h).addClass("animate")),
													4 === n && (d.find(".item").addClass("animate-out"),
													 						d.find(h).removeClass("animate"))),
				"up" === i && (-1 === n && (wow_sect1.find(".bg").addClass("down down-s"),
											 wow_sect1.find(".content").addClass("down down-s"),
											  // $(".wow").removeClass("animate"),
												$(".wow").removeClass("animate"),
												$(".home-acv-main").removeClass("animate"),
												wow_sect1.find(".bottle").removeClass("animate"),
												wow_sect1.find(".content").removeClass("animate"),
												wow_sect1.find(".overflow-container").removeClass("animate"),
													$(".acv-arrow-small").addClass("hide"),
												down_arrow.removeClass("animate"),
												 $(".home-acv-main").find(h).addClass("animate"),
												p.removeClass("animate"), wow_sect1.css({
																				"z-index": "1"
																			})),
												 0 === n && (wow_sect1.find(".bg").removeClass("up"),
												 wow_sect1.find(".content").removeClass("down"),
												  wow_sect2.find(".bg").addClass("up"),
													wow_sect2.find(".content").addClass("down"),
													wow_sect1.find(".content").removeClass("up-s"),
													wow_sect1.find(".bg").removeClass("up-s"),
													wow_sect2.find(".content").addClass("down-s"),
													wow_sect2.find(".bg").addClass("down-s"),
													wow_sect1.find(".bottle").addClass("animate"),
													wow_sect2.find(".bottle").removeClass("animate"),
													wow_sect1.find(".overflow-container").addClass("animate"),
													wow_sect2.find(".overflow-container").removeClass("animate"),
													wow_sect1.find(".content").addClass("animate"),
													wow_sect2.find(".content").removeClass("animate"),
													wow_sect1.css({
													"z-index": "1"
												})),
												 1 === n && (wow_sect2.find(".bg").removeClass("down"),

												  wow_sect2.find(".content").removeClass("up"),
													wow_sect3.find(".bg").addClass("down"),
													wow_sect3.find(".content").addClass("up"),
													wow_sect2.find(".content").removeClass("up-s"),
													wow_sect2.find(".bg").removeClass("up-s"),
													wow_sect3.find(".content").addClass("down-s"),
													wow_sect3.find(".bg").addClass("down-s"),
													wow_sect2.find(".bottle").addClass("animate"),
													wow_sect3.find(".bottle").removeClass("animate"),
													wow_sect2.find(".overflow-container").addClass("animate"),
													wow_sect3.find(".overflow-container").removeClass("animate"),
													wow_sect2.find(".content").addClass("animate"),
													wow_sect3.find(".content").removeClass("animate"),
													wow_sect2.css({
													"z-index": "1"
												}), wow.removeClass("animate-up-easing")),
												2 === n && (
													$(".wow").removeClass("animate-up"),

													wow_sect4.find(".bottle").addClass("animate"),
													wow_sect4.find(".overflow-container").addClass("animate"),
													wow_sect4.find(".content").addClass("animate"),
													wow_sect4.find(".content").removeClass("last-down"),
													d.find(".item").removeClass("animate-in"),
													d.find(h).removeClass("animate"),setTimeout(function() {
															$("#wow").removeClass("show")
															}, 999)),
												 3 === n && (
													 d.find(".item").removeClass("animate-out"),
												  d.find(h).addClass("animate")))
												// ,setTimeout(function() {		$("#wow").removeClass("show")		}, 4700)
											},
		afterRender: function (e, t) {
			$(".home-acv-main").find(h).addClass("animate");
			var i = $(".section").height();
			wow.height(i)
		},
		afterResize: function () {
			var e = $(".section").height();
			wow.height(e)
		},
		afterLoad: function (e, t) {

			// 1 == t ? ($(".acv-video").get(0).play(), $(".acv-video").get(1).play(), setTimeout(function() {
			// 	main_class.find(".overflow-container, #play-button").addClass("animate"), $(".acv-arrow-small.main").removeClass("hidden")
			// }, 1e3)),$(this).find(".acv-arrow-small").removeClass("hide"),
			$(this).find(".acv-arrow-small").removeClass("hide"),
			$(".wow-section:eq(" + (t - 2) + ")").find(".acv-arrow-small").removeClass("hide")

		}
	};
	$("#wow").length && ($("#wow").fullpage(e),
	-1 !== navigator.userAgent.indexOf("FBAV") || -1 !== navigator.userAgent.indexOf("Instagram") ? (
		$.fn.fullpage.setResponsive(!0),
		$(".acv.parallax").addClass("no-parallax"),
		$(".wow").addClass("static"),
		 $(".acv-arrow").addClass("acv-arrow-small main").removeClass("acv-arrow")) : ($(".acv-arrow-small").addClass("hide"), $(".home-acv-main, .wow").swipe({
		swipe: function (e, t, i, n, o, s) {
			"up" === t && $.fn.fullpage.moveSectionDown(), "down" === t && $.fn.fullpage.moveSectionUp()
		}
	})));
	// var t = window.location.hash;
	// $(document).ready(function() {
	// 	t && ("#acvshampoo" === t && setTimeout(function() {
	// 		$.fn.fullpage.moveTo(2)
	// 	}, 1200), "#red-wine" === t && (wow_sect1.hide(), setTimeout(function() {
	// 		$.fn.fullpage.moveTo(3)
	// 	}, 1200), setTimeout(function() {
	// 		wow_sect1.show(), f()
	// 	}, 1200)), "#rose" === t && (wow_sect1.hide(), wow_sect2.hide(), setTimeout(function() {
	// 		$.fn.fullpage.moveTo(4)
	// 	}, 1200), setTimeout(function() {
	// 		wow_sect1.show(), wow_sect2.show(), f(), m()
	// 	}, 2e3)), "#sauvignon-blanc" === t && (wow_sect1.hide(), wow_sect2.hide(), wow_sect3.hide(), setTimeout(function() {
	// 		$.fn.fullpage.moveTo(5)
	// 	}, 1200), setTimeout(function() {
	// 		wow_sect1.show(), wow_sect2.show(), wow_sect3.show(), f(), m(), v()
	// 	}, 2e3)), "#bubbles" === t && (wow_sect1.hide(), wow_sect2.hide(), wow_sect3.hide(), wow_sect4.hide(), setTimeout(function() {
	// 		$.fn.fullpage.moveTo(6)
	// 	}, 1200), setTimeout(function() {
	// 		wow_sect1.show(), wow_sect2.show(), wow_sect3.show(), wow_sect4.show(), f(), m(), v(), g()
	// 	}, 2e3)))
	// })
}),
/* End of wine section*/

$(function() {
  FastClick.attach(document.body), $(".acv.full-height, .ethos-statement, .canpaign-intro, .canpaign-score-intro, .canpaign-score-results-item, .canpaign-sweepstakes").waypoint(function(e) {
    $(this).find(".overflow-container").addClass("animate"), $(this).find(".acv-line-texture").addClass("animate"), $(this).find("#play-button").addClass("animate"), $(this).prev(".canpaign-score-results-vs").addClass("animate")
  }, {
    offset: "90%",
    triggerOnce: !0
  });
  var t = $(".acv-arrow"),
    i = $(".header-logo"),
    e = $(".acv.full-height:eq(0)"),
    n = $(".default-acv"),
    o = $(".trade-media-section");
  t.click(function() {
    var e = $(this);
    if ($("html").hasClass("fp-enabled")) $.fn.fullpage.moveSectionDown();
    else {
      var t = e.parent(".acv").height();
      $("html, body").animate({
        scrollTop: t
      }, 750), e.addClass("animate")
    }
  }), !1 === $("html").hasClass("fp-enabled") && (e.waypoint(function(e) {
    "down" === e && (i.addClass("animate"), t.addClass("animate"))
  }, {
    offset: "-70%"
  }), e.waypoint(function(e) {
    "up" === e && (i.removeClass("animate"), t.removeClass("animate"))
  }, {
    offset: "-69%"
  }), n.waypoint(function(e) {
    "down" === e && i.addClass("animate")
  }, {
    offset: "-200px"
  }), n.waypoint(function(e) {
    "up" === e && i.removeClass("animate")
  }, {
    offset: "-199px"
  }), o.waypoint(function(e) {
    thisTmSection = $(this), "down" === e && thisTmSection.find(".overflow-container").addClass("animate")
  }, {
    offset: "90%"
  })),
	 $(".acv-arrow-small").click(function() {
    $.fn.fullpage.moveSectionDown()
  });
  setInterval(function() {
    $(".landscape-popup").addClass("bg2"), setTimeout(function() {
      $(".landscape-popup").removeClass("bg2")
    }, 1500)
  }, 3e3); - 1 === navigator.userAgent.indexOf("FBAV") && -1 === navigator.userAgent.indexOf("Instagram") || ($(".contact-popup").addClass("in-app"), $(".acv.full-height .acv-arrow").addClass("acv-arrow-small main").removeClass("acv-arrow"), $(".landscape-popup").addClass("in-app"))
}),
$(function () {
	new Instafeed({
		get: "user",
		userId: "4355028863",
		// 7285912755
		limit: 25,
		resolution: "low_resolution",
		accessToken: "4355028863.bd54f22.4e963b512afc4425a23fc08f2a038829",
		template: '<a target="_blank" href="{{link}}" style="background-image: url({{image}});"></a>'
	}).run()
}),
$(function () {}),
$(window).scroll(function () {
	var e = $(this).scrollTop() / $(window).height() * 25;
	$(".parallax-standard-scroll").css({
		transform: "translate3d(0, " + e + "%, 0)"
	})
}),
$(function() {
  if ($(".video-overlay-inner").fitVids(), $('iframe[id="eg-video"]').length) {
    var e = document.querySelector('iframe[id="eg-video"]'),
      t = new Vimeo.Player(e);
    $(".acv-play").click(function() {
      t.play(), $('.video-overlay[rel="eg-video"]').addClass("open"), $(".acv-arrow").addClass("animate"), setTimeout(function() {
        $(".acv-arrow").hide()
      }, 500)
    }), $(".video-overlay-close").click(function() {
      t.unload(function() {
        $.fn.fullpage.reBuild()
      }), $(".video-overlay").removeClass("open"), $(".acv-arrow").show(), setTimeout(function() {
        $(".acv-arrow").removeClass("animate")
      }, 50)
    }), t.on("timeupdate", function(e) {
      .99 < e.percent && (t.pause(), t.unload())
    })
  }

})
