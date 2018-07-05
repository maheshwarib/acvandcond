! function(t, e) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
		if (!t.document) throw new Error("jQuery requires a window with a document");
		return e(t)
	} : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
	var i = [],
		n = t.document,
		o = i.slice,
		s = i.concat,
		r = i.push,
		a = i.indexOf,
		l = {},
		c = l.toString,
		u = l.hasOwnProperty,
		d = {},
		h = "2.2.3",
		p = function(t, e) {
			return new p.fn.init(t, e)
		},
		f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		v = /^-ms-/,
		m = /-([\da-z])/gi,
		g = function(t, e) {
			return e.toUpperCase()
		};

	function y(t) {
		var e = !!t && "length" in t && t.length,
			i = p.type(t);
		return "function" !== i && !p.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
	}
	p.fn = p.prototype = {
		jquery: h,
		constructor: p,
		selector: "",
		length: 0,
		toArray: function() {
			return o.call(this)
		},
		get: function(t) {
			return null != t ? t < 0 ? this[t + this.length] : this[t] : o.call(this)
		},
		pushStack: function(t) {
			var e = p.merge(this.constructor(), t);
			return e.prevObject = this, e.context = this.context, e
		},
		each: function(t) {
			return p.each(this, t)
		},
		map: function(t) {
			return this.pushStack(p.map(this, function(e, i) {
				return t.call(e, i, e)
			}))
		},
		slice: function() {
			return this.pushStack(o.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(t) {
			var e = this.length,
				i = +t + (t < 0 ? e : 0);
			return this.pushStack(0 <= i && i < e ? [this[i]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: r,
		sort: i.sort,
		splice: i.splice
	}, p.extend = p.fn.extend = function() {
		var t, e, i, n, o, s, r = arguments[0] || {},
			a = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || p.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
			if (null != (t = arguments[a]))
				for (e in t) i = r[e], r !== (n = t[e]) && (c && n && (p.isPlainObject(n) || (o = p.isArray(n))) ? (o ? (o = !1, s = i && p.isArray(i) ? i : []) : s = i && p.isPlainObject(i) ? i : {}, r[e] = p.extend(c, s, n)) : void 0 !== n && (r[e] = n));
		return r
	}, p.extend({
		expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(t) {
			throw new Error(t)
		},
		noop: function() {},
		isFunction: function(t) {
			return "function" === p.type(t)
		},
		isArray: Array.isArray,
		isWindow: function(t) {
			return null != t && t === t.window
		},
		isNumeric: function(t) {
			var e = t && t.toString();
			return !p.isArray(t) && 0 <= e - parseFloat(e) + 1
		},
		isPlainObject: function(t) {
			var e;
			if ("object" !== p.type(t) || t.nodeType || p.isWindow(t)) return !1;
			if (t.constructor && !u.call(t, "constructor") && !u.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
			for (e in t);
			return void 0 === e || u.call(t, e)
		},
		isEmptyObject: function(t) {
			var e;
			for (e in t) return !1;
			return !0
		},
		type: function(t) {
			return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[c.call(t)] || "object" : typeof t
		},
		globalEval: function(t) {
			var e, i = eval;
			(t = p.trim(t)) && (1 === t.indexOf("use strict") ? ((e = n.createElement("script")).text = t, n.head.appendChild(e).parentNode.removeChild(e)) : i(t))
		},
		camelCase: function(t) {
			return t.replace(v, "ms-").replace(m, g)
		},
		nodeName: function(t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		},
		each: function(t, e) {
			var i, n = 0;
			if (y(t))
				for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
			else
				for (n in t)
					if (!1 === e.call(t[n], n, t[n])) break;
			return t
		},
		trim: function(t) {
			return null == t ? "" : (t + "").replace(f, "")
		},
		makeArray: function(t, e) {
			var i = e || [];
			return null != t && (y(Object(t)) ? p.merge(i, "string" == typeof t ? [t] : t) : r.call(i, t)), i
		},
		inArray: function(t, e, i) {
			return null == e ? -1 : a.call(e, t, i)
		},
		merge: function(t, e) {
			for (var i = +e.length, n = 0, o = t.length; n < i; n++) t[o++] = e[n];
			return t.length = o, t
		},
		grep: function(t, e, i) {
			for (var n = [], o = 0, s = t.length, r = !i; o < s; o++) !e(t[o], o) !== r && n.push(t[o]);
			return n
		},
		map: function(t, e, i) {
			var n, o, r = 0,
				a = [];
			if (y(t))
				for (n = t.length; r < n; r++) null != (o = e(t[r], r, i)) && a.push(o);
			else
				for (r in t) null != (o = e(t[r], r, i)) && a.push(o);
			return s.apply([], a)
		},
		guid: 1,
		proxy: function(t, e) {
			var i, n, s;
			if ("string" == typeof e && (i = t[e], e = t, t = i), p.isFunction(t)) return n = o.call(arguments, 2), (s = function() {
				return t.apply(e || this, n.concat(o.call(arguments)))
			}).guid = t.guid = t.guid || p.guid++, s
		},
		now: Date.now,
		support: d
	}), "function" == typeof Symbol && (p.fn[Symbol.iterator] = i[Symbol.iterator]), p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
		l["[object " + e + "]"] = e.toLowerCase()
	});
	var w = function(t) {
		var e, i, n, o, s, r, a, l, c, u, d, h, p, f, v, m, g, y, w, b = "sizzle" + 1 * new Date,
			x = t.document,
			T = 0,
			S = 0,
			k = st(),
			C = st(),
			E = st(),
			$ = function(t, e) {
				return t === e && (d = !0), 0
			},
			A = 1 << 31,
			P = {}.hasOwnProperty,
			L = [],
			O = L.pop,
			H = L.push,
			D = L.push,
			M = L.slice,
			N = function(t, e) {
				for (var i = 0, n = t.length; i < n; i++)
					if (t[i] === e) return i;
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
			Y = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
			F = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
			B = new RegExp(W),
			U = new RegExp("^" + q + "$"),
			V = {
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
			tt = /'|\\/g,
			et = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
			it = function(t, e, i) {
				var n = "0x" + e - 65536;
				return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
			},
			nt = function() {
				h()
			};
		try {
			D.apply(L = M.call(x.childNodes), x.childNodes), L[x.childNodes.length].nodeType
		} catch (e) {
			D = {
				apply: L.length ? function(t, e) {
					H.apply(t, M.call(e))
				} : function(t, e) {
					for (var i = t.length, n = 0; t[i++] = e[n++];);
					t.length = i - 1
				}
			}
		}

		function ot(t, e, n, o) {
			var s, a, c, u, d, f, g, y, T = e && e.ownerDocument,
				S = e ? e.nodeType : 9;
			if (n = n || [], "string" != typeof t || !t || 1 !== S && 9 !== S && 11 !== S) return n;
			if (!o && ((e ? e.ownerDocument || e : x) !== p && h(e), e = e || p, v)) {
				if (11 !== S && (f = J.exec(t)))
					if (s = f[1]) {
						if (9 === S) {
							if (!(c = e.getElementById(s))) return n;
							if (c.id === s) return n.push(c), n
						} else if (T && (c = T.getElementById(s)) && w(e, c) && c.id === s) return n.push(c), n
					} else {
						if (f[2]) return D.apply(n, e.getElementsByTagName(t)), n;
						if ((s = f[3]) && i.getElementsByClassName && e.getElementsByClassName) return D.apply(n, e.getElementsByClassName(s)), n
					}
				if (i.qsa && !E[t + " "] && (!m || !m.test(t))) {
					if (1 !== S) T = e, y = t;
					else if ("object" !== e.nodeName.toLowerCase()) {
						for ((u = e.getAttribute("id")) ? u = u.replace(tt, "\\$&") : e.setAttribute("id", u = b), a = (g = r(t)).length, d = U.test(u) ? "#" + u : "[id='" + u + "']"; a--;) g[a] = d + " " + vt(g[a]);
						y = g.join(","), T = Z.test(t) && pt(e.parentNode) || e
					}
					if (y) try {
						return D.apply(n, T.querySelectorAll(y)), n
					} catch (t) {} finally {
						u === b && e.removeAttribute("id")
					}
				}
			}
			return l(t.replace(X, "$1"), e, n, o)
		}

		function st() {
			var t = [];
			return function e(i, o) {
				return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = o
			}
		}

		function rt(t) {
			return t[b] = !0, t
		}

		function at(t) {
			var e = p.createElement("div");
			try {
				return !!t(e)
			} catch (t) {
				return !1
			} finally {
				e.parentNode && e.parentNode.removeChild(e), e = null
			}
		}

		function lt(t, e) {
			for (var i = t.split("|"), o = i.length; o--;) n.attrHandle[i[o]] = e
		}

		function ct(t, e) {
			var i = e && t,
				n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || A) - (~t.sourceIndex || A);
			if (n) return n;
			if (i)
				for (; i = i.nextSibling;)
					if (i === e) return -1;
			return t ? 1 : -1
		}

		function ut(t) {
			return function(e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}

		function dt(t) {
			return function(e) {
				var i = e.nodeName.toLowerCase();
				return ("input" === i || "button" === i) && e.type === t
			}
		}

		function ht(t) {
			return rt(function(e) {
				return e = +e, rt(function(i, n) {
					for (var o, s = t([], i.length, e), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
				})
			})
		}

		function pt(t) {
			return t && void 0 !== t.getElementsByTagName && t
		}
		for (e in i = ot.support = {}, s = ot.isXML = function(t) {
				var e = t && (t.ownerDocument || t).documentElement;
				return !!e && "HTML" !== e.nodeName
			}, h = ot.setDocument = function(t) {
				var e, o, r = t ? t.ownerDocument || t : x;
				return r !== p && 9 === r.nodeType && r.documentElement && (f = (p = r).documentElement, v = !s(p), (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", nt, !1) : o.attachEvent && o.attachEvent("onunload", nt)), i.attributes = at(function(t) {
					return t.className = "i", !t.getAttribute("className")
				}), i.getElementsByTagName = at(function(t) {
					return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
				}), i.getElementsByClassName = G.test(p.getElementsByClassName), i.getById = at(function(t) {
					return f.appendChild(t).id = b, !p.getElementsByName || !p.getElementsByName(b).length
				}), i.getById ? (n.find.ID = function(t, e) {
					if (void 0 !== e.getElementById && v) {
						var i = e.getElementById(t);
						return i ? [i] : []
					}
				}, n.filter.ID = function(t) {
					var e = t.replace(et, it);
					return function(t) {
						return t.getAttribute("id") === e
					}
				}) : (delete n.find.ID, n.filter.ID = function(t) {
					var e = t.replace(et, it);
					return function(t) {
						var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
						return i && i.value === e
					}
				}), n.find.TAG = i.getElementsByTagName ? function(t, e) {
					return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
				} : function(t, e) {
					var i, n = [],
						o = 0,
						s = e.getElementsByTagName(t);
					if ("*" === t) {
						for (; i = s[o++];) 1 === i.nodeType && n.push(i);
						return n
					}
					return s
				}, n.find.CLASS = i.getElementsByClassName && function(t, e) {
					if (void 0 !== e.getElementsByClassName && v) return e.getElementsByClassName(t)
				}, g = [], m = [], (i.qsa = G.test(p.querySelectorAll)) && (at(function(t) {
					f.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + I + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + I + "*(?:value|" + j + ")"), t.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
				}), at(function(t) {
					var e = p.createElement("input");
					e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + I + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
				})), (i.matchesSelector = G.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(t) {
					i.disconnectedMatch = y.call(t, "div"), y.call(t, "[s!='']:x"), g.push("!=", W)
				}), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), e = G.test(f.compareDocumentPosition), w = e || G.test(f.contains) ? function(t, e) {
					var i = 9 === t.nodeType ? t.documentElement : t,
						n = e && e.parentNode;
					return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
				} : function(t, e) {
					if (e)
						for (; e = e.parentNode;)
							if (e === t) return !0;
					return !1
				}, $ = e ? function(t, e) {
					if (t === e) return d = !0, 0;
					var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
					return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === p || t.ownerDocument === x && w(x, t) ? -1 : e === p || e.ownerDocument === x && w(x, e) ? 1 : u ? N(u, t) - N(u, e) : 0 : 4 & n ? -1 : 1)
				} : function(t, e) {
					if (t === e) return d = !0, 0;
					var i, n = 0,
						o = t.parentNode,
						s = e.parentNode,
						r = [t],
						a = [e];
					if (!o || !s) return t === p ? -1 : e === p ? 1 : o ? -1 : s ? 1 : u ? N(u, t) - N(u, e) : 0;
					if (o === s) return ct(t, e);
					for (i = t; i = i.parentNode;) r.unshift(i);
					for (i = e; i = i.parentNode;) a.unshift(i);
					for (; r[n] === a[n];) n++;
					return n ? ct(r[n], a[n]) : r[n] === x ? -1 : a[n] === x ? 1 : 0
				}), p
			}, ot.matches = function(t, e) {
				return ot(t, null, null, e)
			}, ot.matchesSelector = function(t, e) {
				if ((t.ownerDocument || t) !== p && h(t), e = e.replace(F, "='$1']"), i.matchesSelector && v && !E[e + " "] && (!g || !g.test(e)) && (!m || !m.test(e))) try {
					var n = y.call(t, e);
					if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
				} catch (t) {}
				return 0 < ot(e, p, null, [t]).length
			}, ot.contains = function(t, e) {
				return (t.ownerDocument || t) !== p && h(t), w(t, e)
			}, ot.attr = function(t, e) {
				(t.ownerDocument || t) !== p && h(t);
				var o = n.attrHandle[e.toLowerCase()],
					s = o && P.call(n.attrHandle, e.toLowerCase()) ? o(t, e, !v) : void 0;
				return void 0 !== s ? s : i.attributes || !v ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
			}, ot.error = function(t) {
				throw new Error("Syntax error, unrecognized expression: " + t)
			}, ot.uniqueSort = function(t) {
				var e, n = [],
					o = 0,
					s = 0;
				if (d = !i.detectDuplicates, u = !i.sortStable && t.slice(0), t.sort($), d) {
					for (; e = t[s++];) e === t[s] && (o = n.push(s));
					for (; o--;) t.splice(n[o], 1)
				}
				return u = null, t
			}, o = ot.getText = function(t) {
				var e, i = "",
					n = 0,
					s = t.nodeType;
				if (s) {
					if (1 === s || 9 === s || 11 === s) {
						if ("string" == typeof t.textContent) return t.textContent;
						for (t = t.firstChild; t; t = t.nextSibling) i += o(t)
					} else if (3 === s || 4 === s) return t.nodeValue
				} else
					for (; e = t[n++];) i += o(e);
				return i
			}, (n = ot.selectors = {
				cacheLength: 50,
				createPseudo: rt,
				match: V,
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
					ATTR: function(t) {
						return t[1] = t[1].replace(et, it), t[3] = (t[3] || t[4] || t[5] || "").replace(et, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
					},
					CHILD: function(t) {
						return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
					},
					PSEUDO: function(t) {
						var e, i = !t[6] && t[2];
						return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && B.test(i) && (e = r(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
					}
				},
				filter: {
					TAG: function(t) {
						var e = t.replace(et, it).toLowerCase();
						return "*" === t ? function() {
							return !0
						} : function(t) {
							return t.nodeName && t.nodeName.toLowerCase() === e
						}
					},
					CLASS: function(t) {
						var e = k[t + " "];
						return e || (e = new RegExp("(^|" + I + ")" + t + "(" + I + "|$)")) && k(t, function(t) {
							return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
						})
					},
					ATTR: function(t, e, i) {
						return function(n) {
							var o = ot.attr(n, t);
							return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && -1 < o.indexOf(i) : "$=" === e ? i && o.slice(-i.length) === i : "~=" === e ? -1 < (" " + o.replace(_, " ") + " ").indexOf(i) : "|=" === e && (o === i || o.slice(0, i.length + 1) === i + "-"))
						}
					},
					CHILD: function(t, e, i, n, o) {
						var s = "nth" !== t.slice(0, 3),
							r = "last" !== t.slice(-4),
							a = "of-type" === e;
						return 1 === n && 0 === o ? function(t) {
							return !!t.parentNode
						} : function(e, i, l) {
							var c, u, d, h, p, f, v = s !== r ? "nextSibling" : "previousSibling",
								m = e.parentNode,
								g = a && e.nodeName.toLowerCase(),
								y = !l && !a,
								w = !1;
							if (m) {
								if (s) {
									for (; v;) {
										for (h = e; h = h[v];)
											if (a ? h.nodeName.toLowerCase() === g : 1 === h.nodeType) return !1;
										f = v = "only" === t && !f && "nextSibling"
									}
									return !0
								}
								if (f = [r ? m.firstChild : m.lastChild], r && y) {
									for (w = (p = (c = (u = (d = (h = m)[b] || (h[b] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === T && c[1]) && c[2], h = p && m.childNodes[p]; h = ++p && h && h[v] || (w = p = 0) || f.pop();)
										if (1 === h.nodeType && ++w && h === e) {
											u[t] = [T, p, w];
											break
										}
								} else if (y && (w = p = (c = (u = (d = (h = e)[b] || (h[b] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === T && c[1]), !1 === w)
									for (;
										(h = ++p && h && h[v] || (w = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== g : 1 !== h.nodeType) || !++w || (y && ((u = (d = h[b] || (h[b] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] = [T, w]), h !== e)););
								return (w -= o) === n || w % n == 0 && 0 <= w / n
							}
						}
					},
					PSEUDO: function(t, e) {
						var i, o = n.pseudos[t] || n.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
						return o[b] ? o(e) : 1 < o.length ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? rt(function(t, i) {
							for (var n, s = o(t, e), r = s.length; r--;) t[n = N(t, s[r])] = !(i[n] = s[r])
						}) : function(t) {
							return o(t, 0, i)
						}) : o
					}
				},
				pseudos: {
					not: rt(function(t) {
						var e = [],
							i = [],
							n = a(t.replace(X, "$1"));
						return n[b] ? rt(function(t, e, i, o) {
							for (var s, r = n(t, null, o, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
						}) : function(t, o, s) {
							return e[0] = t, n(e, null, s, i), e[0] = null, !i.pop()
						}
					}),
					has: rt(function(t) {
						return function(e) {
							return 0 < ot(t, e).length
						}
					}),
					contains: rt(function(t) {
						return t = t.replace(et, it),
							function(e) {
								return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
							}
					}),
					lang: rt(function(t) {
						return U.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(et, it).toLowerCase(),
							function(e) {
								var i;
								do {
									if (i = v ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
					}),
					target: function(e) {
						var i = t.location && t.location.hash;
						return i && i.slice(1) === e.id
					},
					root: function(t) {
						return t === f
					},
					focus: function(t) {
						return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
					},
					enabled: function(t) {
						return !1 === t.disabled
					},
					disabled: function(t) {
						return !0 === t.disabled
					},
					checked: function(t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && !!t.checked || "option" === e && !!t.selected
					},
					selected: function(t) {
						return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
					},
					empty: function(t) {
						for (t = t.firstChild; t; t = t.nextSibling)
							if (t.nodeType < 6) return !1;
						return !0
					},
					parent: function(t) {
						return !n.pseudos.empty(t)
					},
					header: function(t) {
						return K.test(t.nodeName)
					},
					input: function(t) {
						return Q.test(t.nodeName)
					},
					button: function(t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && "button" === t.type || "button" === e
					},
					text: function(t) {
						var e;
						return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
					},
					first: ht(function() {
						return [0]
					}),
					last: ht(function(t, e) {
						return [e - 1]
					}),
					eq: ht(function(t, e, i) {
						return [i < 0 ? i + e : i]
					}),
					even: ht(function(t, e) {
						for (var i = 0; i < e; i += 2) t.push(i);
						return t
					}),
					odd: ht(function(t, e) {
						for (var i = 1; i < e; i += 2) t.push(i);
						return t
					}),
					lt: ht(function(t, e, i) {
						for (var n = i < 0 ? i + e : i; 0 <= --n;) t.push(n);
						return t
					}),
					gt: ht(function(t, e, i) {
						for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
						return t
					})
				}
			}).pseudos.nth = n.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) n.pseudos[e] = ut(e);
		for (e in {
				submit: !0,
				reset: !0
			}) n.pseudos[e] = dt(e);

		function ft() {}

		function vt(t) {
			for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
			return n
		}

		function mt(t, e, i) {
			var n = e.dir,
				o = i && "parentNode" === n,
				s = S++;
			return e.first ? function(e, i, s) {
				for (; e = e[n];)
					if (1 === e.nodeType || o) return t(e, i, s)
			} : function(e, i, r) {
				var a, l, c, u = [T, s];
				if (r) {
					for (; e = e[n];)
						if ((1 === e.nodeType || o) && t(e, i, r)) return !0
				} else
					for (; e = e[n];)
						if (1 === e.nodeType || o) {
							if ((a = (l = (c = e[b] || (e[b] = {}))[e.uniqueID] || (c[e.uniqueID] = {}))[n]) && a[0] === T && a[1] === s) return u[2] = a[2];
							if ((l[n] = u)[2] = t(e, i, r)) return !0
						}
			}
		}

		function gt(t) {
			return 1 < t.length ? function(e, i, n) {
				for (var o = t.length; o--;)
					if (!t[o](e, i, n)) return !1;
				return !0
			} : t[0]
		}

		function yt(t, e, i, n, o) {
			for (var s, r = [], a = 0, l = t.length, c = null != e; a < l; a++)(s = t[a]) && (i && !i(s, n, o) || (r.push(s), c && e.push(a)));
			return r
		}

		function wt(t, e, i, n, o, s) {
			return n && !n[b] && (n = wt(n)), o && !o[b] && (o = wt(o, s)), rt(function(s, r, a, l) {
				var c, u, d, h = [],
					p = [],
					f = r.length,
					v = s || function(t, e, i) {
						for (var n = 0, o = e.length; n < o; n++) ot(t, e[n], i);
						return i
					}(e || "*", a.nodeType ? [a] : a, []),
					m = !t || !s && e ? v : yt(v, h, t, a, l),
					g = i ? o || (s ? t : f || n) ? [] : r : m;
				if (i && i(m, g, a, l), n)
					for (c = yt(g, p), n(c, [], a, l), u = c.length; u--;)(d = c[u]) && (g[p[u]] = !(m[p[u]] = d));
				if (s) {
					if (o || t) {
						if (o) {
							for (c = [], u = g.length; u--;)(d = g[u]) && c.push(m[u] = d);
							o(null, g = [], c, l)
						}
						for (u = g.length; u--;)(d = g[u]) && -1 < (c = o ? N(s, d) : h[u]) && (s[c] = !(r[c] = d))
					}
				} else g = yt(g === r ? g.splice(f, g.length) : g), o ? o(null, r, g, l) : D.apply(r, g)
			})
		}

		function bt(t) {
			for (var e, i, o, s = t.length, r = n.relative[t[0].type], a = r || n.relative[" "], l = r ? 1 : 0, u = mt(function(t) {
					return t === e
				}, a, !0), d = mt(function(t) {
					return -1 < N(e, t)
				}, a, !0), h = [function(t, i, n) {
					var o = !r && (n || i !== c) || ((e = i).nodeType ? u(t, i, n) : d(t, i, n));
					return e = null, o
				}]; l < s; l++)
				if (i = n.relative[t[l].type]) h = [mt(gt(h), i)];
				else {
					if ((i = n.filter[t[l].type].apply(null, t[l].matches))[b]) {
						for (o = ++l; o < s && !n.relative[t[o].type]; o++);
						return wt(1 < l && gt(h), 1 < l && vt(t.slice(0, l - 1).concat({
							value: " " === t[l - 2].type ? "*" : ""
						})).replace(X, "$1"), i, l < o && bt(t.slice(l, o)), o < s && bt(t = t.slice(o)), o < s && vt(t))
					}
					h.push(i)
				}
			return gt(h)
		}
		return ft.prototype = n.filters = n.pseudos, n.setFilters = new ft, r = ot.tokenize = function(t, e) {
			var i, o, s, r, a, l, c, u = C[t + " "];
			if (u) return e ? 0 : u.slice(0);
			for (a = t, l = [], c = n.preFilter; a;) {
				for (r in i && !(o = R.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), i = !1, (o = Y.exec(a)) && (i = o.shift(), s.push({
						value: i,
						type: o[0].replace(X, " ")
					}), a = a.slice(i.length)), n.filter) !(o = V[r].exec(a)) || c[r] && !(o = c[r](o)) || (i = o.shift(), s.push({
					value: i,
					type: r,
					matches: o
				}), a = a.slice(i.length));
				if (!i) break
			}
			return e ? a.length : a ? ot.error(t) : C(t, l).slice(0)
		}, a = ot.compile = function(t, e) {
			var i, o, s, a, l, u, d = [],
				f = [],
				m = E[t + " "];
			if (!m) {
				for (e || (e = r(t)), i = e.length; i--;)(m = bt(e[i]))[b] ? d.push(m) : f.push(m);
				(m = E(t, (o = f, a = 0 < (s = d).length, l = 0 < o.length, u = function(t, e, i, r, u) {
					var d, f, m, g = 0,
						y = "0",
						w = t && [],
						b = [],
						x = c,
						S = t || l && n.find.TAG("*", u),
						k = T += null == x ? 1 : Math.random() || .1,
						C = S.length;
					for (u && (c = e === p || e || u); y !== C && null != (d = S[y]); y++) {
						if (l && d) {
							for (f = 0, e || d.ownerDocument === p || (h(d), i = !v); m = o[f++];)
								if (m(d, e || p, i)) {
									r.push(d);
									break
								}
							u && (T = k)
						}
						a && ((d = !m && d) && g--, t && w.push(d))
					}
					if (g += y, a && y !== g) {
						for (f = 0; m = s[f++];) m(w, b, e, i);
						if (t) {
							if (0 < g)
								for (; y--;) w[y] || b[y] || (b[y] = O.call(r));
							b = yt(b)
						}
						D.apply(r, b), u && !t && 0 < b.length && 1 < g + s.length && ot.uniqueSort(r)
					}
					return u && (T = k, c = x), w
				}, a ? rt(u) : u))).selector = t
			}
			return m
		}, l = ot.select = function(t, e, o, s) {
			var l, c, u, d, h, p = "function" == typeof t && t,
				f = !s && r(t = p.selector || t);
			if (o = o || [], 1 === f.length) {
				if (2 < (c = f[0] = f[0].slice(0)).length && "ID" === (u = c[0]).type && i.getById && 9 === e.nodeType && v && n.relative[c[1].type]) {
					if (!(e = (n.find.ID(u.matches[0].replace(et, it), e) || [])[0])) return o;
					p && (e = e.parentNode), t = t.slice(c.shift().value.length)
				}
				for (l = V.needsContext.test(t) ? 0 : c.length; l-- && (u = c[l], !n.relative[d = u.type]);)
					if ((h = n.find[d]) && (s = h(u.matches[0].replace(et, it), Z.test(c[0].type) && pt(e.parentNode) || e))) {
						if (c.splice(l, 1), !(t = s.length && vt(c))) return D.apply(o, s), o;
						break
					}
			}
			return (p || a(t, f))(s, e, !v, o, !e || Z.test(t) && pt(e.parentNode) || e), o
		}, i.sortStable = b.split("").sort($).join("") === b, i.detectDuplicates = !!d, h(), i.sortDetached = at(function(t) {
			return 1 & t.compareDocumentPosition(p.createElement("div"))
		}), at(function(t) {
			return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
		}) || lt("type|href|height|width", function(t, e, i) {
			if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		}), i.attributes && at(function(t) {
			return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
		}) || lt("value", function(t, e, i) {
			if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
		}), at(function(t) {
			return null == t.getAttribute("disabled")
		}) || lt(j, function(t, e, i) {
			var n;
			if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
		}), ot
	}(t);
	p.find = w, p.expr = w.selectors, p.expr[":"] = p.expr.pseudos, p.uniqueSort = p.unique = w.uniqueSort, p.text = w.getText, p.isXMLDoc = w.isXML, p.contains = w.contains;
	var b = function(t, e, i) {
			for (var n = [], o = void 0 !== i;
				(t = t[e]) && 9 !== t.nodeType;)
				if (1 === t.nodeType) {
					if (o && p(t).is(i)) break;
					n.push(t)
				}
			return n
		},
		x = function(t, e) {
			for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
			return i
		},
		T = p.expr.match.needsContext,
		S = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		k = /^.[^:#\[\.,]*$/;

	function C(t, e, i) {
		if (p.isFunction(e)) return p.grep(t, function(t, n) {
			return !!e.call(t, n, t) !== i
		});
		if (e.nodeType) return p.grep(t, function(t) {
			return t === e !== i
		});
		if ("string" == typeof e) {
			if (k.test(e)) return p.filter(e, t, i);
			e = p.filter(e, t)
		}
		return p.grep(t, function(t) {
			return -1 < a.call(e, t) !== i
		})
	}
	p.filter = function(t, e, i) {
		var n = e[0];
		return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? p.find.matchesSelector(n, t) ? [n] : [] : p.find.matches(t, p.grep(e, function(t) {
			return 1 === t.nodeType
		}))
	}, p.fn.extend({
		find: function(t) {
			var e, i = this.length,
				n = [],
				o = this;
			if ("string" != typeof t) return this.pushStack(p(t).filter(function() {
				for (e = 0; e < i; e++)
					if (p.contains(o[e], this)) return !0
			}));
			for (e = 0; e < i; e++) p.find(t, o[e], n);
			return (n = this.pushStack(1 < i ? p.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
		},
		filter: function(t) {
			return this.pushStack(C(this, t || [], !1))
		},
		not: function(t) {
			return this.pushStack(C(this, t || [], !0))
		},
		is: function(t) {
			return !!C(this, "string" == typeof t && T.test(t) ? p(t) : t || [], !1).length
		}
	});
	var E, $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
	(p.fn.init = function(t, e, i) {
		var o, s;
		if (!t) return this;
		if (i = i || E, "string" == typeof t) {
			if (!(o = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : $.exec(t)) || !o[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
			if (o[1]) {
				if (e = e instanceof p ? e[0] : e, p.merge(this, p.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : n, !0)), S.test(o[1]) && p.isPlainObject(e))
					for (o in e) p.isFunction(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
				return this
			}
			return (s = n.getElementById(o[2])) && s.parentNode && (this.length = 1, this[0] = s), this.context = n, this.selector = t, this
		}
		return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : p.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(p) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), p.makeArray(t, this))
	}).prototype = p.fn, E = p(n);
	var A = /^(?:parents|prev(?:Until|All))/,
		P = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function L(t, e) {
		for (;
			(t = t[e]) && 1 !== t.nodeType;);
		return t
	}
	p.fn.extend({
		has: function(t) {
			var e = p(t, this),
				i = e.length;
			return this.filter(function() {
				for (var t = 0; t < i; t++)
					if (p.contains(this, e[t])) return !0
			})
		},
		closest: function(t, e) {
			for (var i, n = 0, o = this.length, s = [], r = T.test(t) || "string" != typeof t ? p(t, e || this.context) : 0; n < o; n++)
				for (i = this[n]; i && i !== e; i = i.parentNode)
					if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && p.find.matchesSelector(i, t))) {
						s.push(i);
						break
					}
			return this.pushStack(1 < s.length ? p.uniqueSort(s) : s)
		},
		index: function(t) {
			return t ? "string" == typeof t ? a.call(p(t), this[0]) : a.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(t, e) {
			return this.pushStack(p.uniqueSort(p.merge(this.get(), p(t, e))))
		},
		addBack: function(t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), p.each({
		parent: function(t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function(t) {
			return b(t, "parentNode")
		},
		parentsUntil: function(t, e, i) {
			return b(t, "parentNode", i)
		},
		next: function(t) {
			return L(t, "nextSibling")
		},
		prev: function(t) {
			return L(t, "previousSibling")
		},
		nextAll: function(t) {
			return b(t, "nextSibling")
		},
		prevAll: function(t) {
			return b(t, "previousSibling")
		},
		nextUntil: function(t, e, i) {
			return b(t, "nextSibling", i)
		},
		prevUntil: function(t, e, i) {
			return b(t, "previousSibling", i)
		},
		siblings: function(t) {
			return x((t.parentNode || {}).firstChild, t)
		},
		children: function(t) {
			return x(t.firstChild)
		},
		contents: function(t) {
			return t.contentDocument || p.merge([], t.childNodes)
		}
	}, function(t, e) {
		p.fn[t] = function(i, n) {
			var o = p.map(this, e, i);
			return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = p.filter(n, o)), 1 < this.length && (P[t] || p.uniqueSort(o), A.test(t) && o.reverse()), this.pushStack(o)
		}
	});
	var O, H = /\S+/g;

	function D() {
		n.removeEventListener("DOMContentLoaded", D), t.removeEventListener("load", D), p.ready()
	}
	p.Callbacks = function(t) {
		var e, i;
		t = "string" == typeof t ? (e = t, i = {}, p.each(e.match(H) || [], function(t, e) {
			i[e] = !0
		}), i) : p.extend({}, t);
		var n, o, s, r, a = [],
			l = [],
			c = -1,
			u = function() {
				for (r = t.once, s = n = !0; l.length; c = -1)
					for (o = l.shift(); ++c < a.length;) !1 === a[c].apply(o[0], o[1]) && t.stopOnFalse && (c = a.length, o = !1);
				t.memory || (o = !1), n = !1, r && (a = o ? [] : "")
			},
			d = {
				add: function() {
					return a && (o && !n && (c = a.length - 1, l.push(o)), function e(i) {
						p.each(i, function(i, n) {
							p.isFunction(n) ? t.unique && d.has(n) || a.push(n) : n && n.length && "string" !== p.type(n) && e(n)
						})
					}(arguments), o && !n && u()), this
				},
				remove: function() {
					return p.each(arguments, function(t, e) {
						for (var i; - 1 < (i = p.inArray(e, a, i));) a.splice(i, 1), i <= c && c--
					}), this
				},
				has: function(t) {
					return t ? -1 < p.inArray(t, a) : 0 < a.length
				},
				empty: function() {
					return a && (a = []), this
				},
				disable: function() {
					return r = l = [], a = o = "", this
				},
				disabled: function() {
					return !a
				},
				lock: function() {
					return r = l = [], o || (a = o = ""), this
				},
				locked: function() {
					return !!r
				},
				fireWith: function(t, e) {
					return r || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), n || u()), this
				},
				fire: function() {
					return d.fireWith(this, arguments), this
				},
				fired: function() {
					return !!s
				}
			};
		return d
	}, p.extend({
		Deferred: function(t) {
			var e = [
					["resolve", "done", p.Callbacks("once memory"), "resolved"],
					["reject", "fail", p.Callbacks("once memory"), "rejected"],
					["notify", "progress", p.Callbacks("memory")]
				],
				i = "pending",
				n = {
					state: function() {
						return i
					},
					always: function() {
						return o.done(arguments).fail(arguments), this
					},
					then: function() {
						var t = arguments;
						return p.Deferred(function(i) {
							p.each(e, function(e, s) {
								var r = p.isFunction(t[e]) && t[e];
								o[s[1]](function() {
									var t = r && r.apply(this, arguments);
									t && p.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[s[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
								})
							}), t = null
						}).promise()
					},
					promise: function(t) {
						return null != t ? p.extend(t, n) : n
					}
				},
				o = {};
			return n.pipe = n.then, p.each(e, function(t, s) {
				var r = s[2],
					a = s[3];
				n[s[1]] = r.add, a && r.add(function() {
					i = a
				}, e[1 ^ t][2].disable, e[2][2].lock), o[s[0]] = function() {
					return o[s[0] + "With"](this === o ? n : this, arguments), this
				}, o[s[0] + "With"] = r.fireWith
			}), n.promise(o), t && t.call(o, o), o
		},
		when: function(t) {
			var e, i, n, s = 0,
				r = o.call(arguments),
				a = r.length,
				l = 1 !== a || t && p.isFunction(t.promise) ? a : 0,
				c = 1 === l ? t : p.Deferred(),
				u = function(t, i, n) {
					return function(s) {
						i[t] = this, n[t] = 1 < arguments.length ? o.call(arguments) : s, n === e ? c.notifyWith(i, n) : --l || c.resolveWith(i, n)
					}
				};
			if (1 < a)
				for (e = new Array(a), i = new Array(a), n = new Array(a); s < a; s++) r[s] && p.isFunction(r[s].promise) ? r[s].promise().progress(u(s, i, e)).done(u(s, n, r)).fail(c.reject) : --l;
			return l || c.resolveWith(n, r), c.promise()
		}
	}), p.fn.ready = function(t) {
		return p.ready.promise().done(t), this
	}, p.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(t) {
			t ? p.readyWait++ : p.ready(!0)
		},
		ready: function(t) {
			(!0 === t ? --p.readyWait : p.isReady) || (p.isReady = !0) !== t && 0 < --p.readyWait || (O.resolveWith(n, [p]), p.fn.triggerHandler && (p(n).triggerHandler("ready"), p(n).off("ready")))
		}
	}), p.ready.promise = function(e) {
		return O || (O = p.Deferred(), "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? t.setTimeout(p.ready) : (n.addEventListener("DOMContentLoaded", D), t.addEventListener("load", D))), O.promise(e)
	}, p.ready.promise();
	var M = function(t, e, i, n, o, s, r) {
			var a = 0,
				l = t.length,
				c = null == i;
			if ("object" === p.type(i))
				for (a in o = !0, i) M(t, e, a, i[a], !0, s, r);
			else if (void 0 !== n && (o = !0, p.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
					return c.call(p(t), i)
				})), e))
				for (; a < l; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
			return o ? t : c ? e.call(t) : l ? e(t[0], i) : s
		},
		N = function(t) {
			return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
		};

	function j() {
		this.expando = p.expando + j.uid++
	}
	j.uid = 1, j.prototype = {
		register: function(t, e) {
			var i = e || {};
			return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
				value: i,
				writable: !0,
				configurable: !0
			}), t[this.expando]
		},
		cache: function(t) {
			if (!N(t)) return {};
			var e = t[this.expando];
			return e || (e = {}, N(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
				value: e,
				configurable: !0
			}))), e
		},
		set: function(t, e, i) {
			var n, o = this.cache(t);
			if ("string" == typeof e) o[e] = i;
			else
				for (n in e) o[n] = e[n];
			return o
		},
		get: function(t, e) {
			return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
		},
		access: function(t, e, i) {
			var n;
			return void 0 === e || e && "string" == typeof e && void 0 === i ? void 0 !== (n = this.get(t, e)) ? n : this.get(t, p.camelCase(e)) : (this.set(t, e, i), void 0 !== i ? i : e)
		},
		remove: function(t, e) {
			var i, n, o, s = t[this.expando];
			if (void 0 !== s) {
				if (void 0 === e) this.register(t);
				else {
					p.isArray(e) ? n = e.concat(e.map(p.camelCase)) : (o = p.camelCase(e), n = e in s ? [e, o] : (n = o) in s ? [n] : n.match(H) || []), i = n.length;
					for (; i--;) delete s[n[i]]
				}(void 0 === e || p.isEmptyObject(s)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
			}
		},
		hasData: function(t) {
			var e = t[this.expando];
			return void 0 !== e && !p.isEmptyObject(e)
		}
	};
	var I = new j,
		q = new j,
		z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		W = /[A-Z]/g;

	function _(t, e, i) {
		var n;
		if (void 0 === i && 1 === t.nodeType)
			if (n = "data-" + e.replace(W, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
				try {
					i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : z.test(i) ? p.parseJSON(i) : i)
				} catch (t) {}
				q.set(t, e, i)
			} else i = void 0;
		return i
	}
	p.extend({
		hasData: function(t) {
			return q.hasData(t) || I.hasData(t)
		},
		data: function(t, e, i) {
			return q.access(t, e, i)
		},
		removeData: function(t, e) {
			q.remove(t, e)
		},
		_data: function(t, e, i) {
			return I.access(t, e, i)
		},
		_removeData: function(t, e) {
			I.remove(t, e)
		}
	}), p.fn.extend({
		data: function(t, e) {
			var i, n, o, s = this[0],
				r = s && s.attributes;
			if (void 0 === t) {
				if (this.length && (o = q.get(s), 1 === s.nodeType && !I.get(s, "hasDataAttrs"))) {
					for (i = r.length; i--;) r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = p.camelCase(n.slice(5)), _(s, n, o[n]));
					I.set(s, "hasDataAttrs", !0)
				}
				return o
			}
			return "object" == typeof t ? this.each(function() {
				q.set(this, t)
			}) : M(this, function(e) {
				var i, n;
				if (s && void 0 === e) return void 0 !== (i = q.get(s, t) || q.get(s, t.replace(W, "-$&").toLowerCase())) ? i : (n = p.camelCase(t), void 0 !== (i = q.get(s, n)) ? i : void 0 !== (i = _(s, n, void 0)) ? i : void 0);
				n = p.camelCase(t), this.each(function() {
					var i = q.get(this, n);
					q.set(this, n, e), -1 < t.indexOf("-") && void 0 !== i && q.set(this, t, e)
				})
			}, null, e, 1 < arguments.length, null, !0)
		},
		removeData: function(t) {
			return this.each(function() {
				q.remove(this, t)
			})
		}
	}), p.extend({
		queue: function(t, e, i) {
			var n;
			if (t) return e = (e || "fx") + "queue", n = I.get(t, e), i && (!n || p.isArray(i) ? n = I.access(t, e, p.makeArray(i)) : n.push(i)), n || []
		},
		dequeue: function(t, e) {
			e = e || "fx";
			var i = p.queue(t, e),
				n = i.length,
				o = i.shift(),
				s = p._queueHooks(t, e);
			"inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete s.stop, o.call(t, function() {
				p.dequeue(t, e)
			}, s)), !n && s && s.empty.fire()
		},
		_queueHooks: function(t, e) {
			var i = e + "queueHooks";
			return I.get(t, i) || I.access(t, i, {
				empty: p.Callbacks("once memory").add(function() {
					I.remove(t, [e + "queue", i])
				})
			})
		}
	}), p.fn.extend({
		queue: function(t, e) {
			var i = 2;
			return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? p.queue(this[0], t) : void 0 === e ? this : this.each(function() {
				var i = p.queue(this, t, e);
				p._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && p.dequeue(this, t)
			})
		},
		dequeue: function(t) {
			return this.each(function() {
				p.dequeue(this, t)
			})
		},
		clearQueue: function(t) {
			return this.queue(t || "fx", [])
		},
		promise: function(t, e) {
			var i, n = 1,
				o = p.Deferred(),
				s = this,
				r = this.length,
				a = function() {
					--n || o.resolveWith(s, [s])
				};
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(i = I.get(s[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
			return a(), o.promise(e)
		}
	});
	var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		R = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
		Y = ["Top", "Right", "Bottom", "Left"],
		F = function(t, e) {
			return t = e || t, "none" === p.css(t, "display") || !p.contains(t.ownerDocument, t)
		};

	function B(t, e, i, n) {
		var o, s = 1,
			r = 20,
			a = n ? function() {
				return n.cur()
			} : function() {
				return p.css(t, e, "")
			},
			l = a(),
			c = i && i[3] || (p.cssNumber[e] ? "" : "px"),
			u = (p.cssNumber[e] || "px" !== c && +l) && R.exec(p.css(t, e));
		if (u && u[3] !== c)
			for (c = c || u[3], i = i || [], u = +l || 1; u /= s = s || ".5", p.style(t, e, u + c), s !== (s = a() / l) && 1 !== s && --r;);
		return i && (u = +u || +l || 0, o = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = o)), o
	}
	var U = /^(?:checkbox|radio)$/i,
		V = /<([\w:-]+)/,
		Q = /^$|\/(?:java|ecma)script/i,
		K = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};

	function G(t, e) {
		var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
		return void 0 === e || e && p.nodeName(t, e) ? p.merge([t], i) : i
	}

	function J(t, e) {
		for (var i = 0, n = t.length; i < n; i++) I.set(t[i], "globalEval", !e || I.get(e[i], "globalEval"))
	}
	K.optgroup = K.option, K.tbody = K.tfoot = K.colgroup = K.caption = K.thead, K.th = K.td;
	var Z, tt, et = /<|&#?\w+;/;

	function it(t, e, i, n, o) {
		for (var s, r, a, l, c, u, d = e.createDocumentFragment(), h = [], f = 0, v = t.length; f < v; f++)
			if ((s = t[f]) || 0 === s)
				if ("object" === p.type(s)) p.merge(h, s.nodeType ? [s] : s);
				else if (et.test(s)) {
			for (r = r || d.appendChild(e.createElement("div")), a = (V.exec(s) || ["", ""])[1].toLowerCase(), l = K[a] || K._default, r.innerHTML = l[1] + p.htmlPrefilter(s) + l[2], u = l[0]; u--;) r = r.lastChild;
			p.merge(h, r.childNodes), (r = d.firstChild).textContent = ""
		} else h.push(e.createTextNode(s));
		for (d.textContent = "", f = 0; s = h[f++];)
			if (n && -1 < p.inArray(s, n)) o && o.push(s);
			else if (c = p.contains(s.ownerDocument, s), r = G(d.appendChild(s), "script"), c && J(r), i)
			for (u = 0; s = r[u++];) Q.test(s.type || "") && i.push(s);
		return d
	}
	Z = n.createDocumentFragment().appendChild(n.createElement("div")), (tt = n.createElement("input")).setAttribute("type", "radio"), tt.setAttribute("checked", "checked"), tt.setAttribute("name", "t"), Z.appendChild(tt), d.checkClone = Z.cloneNode(!0).cloneNode(!0).lastChild.checked, Z.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!Z.cloneNode(!0).lastChild.defaultValue;
	var nt = /^key/,
		ot = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		st = /^([^.]*)(?:\.(.+)|)/;

	function rt() {
		return !0
	}

	function at() {
		return !1
	}

	function lt() {
		try {
			return n.activeElement
		} catch (t) {}
	}

	function ct(t, e, i, n, o, s) {
		var r, a;
		if ("object" == typeof e) {
			for (a in "string" != typeof i && (n = n || i, i = void 0), e) ct(t, a, i, n, e[a], s);
			return t
		}
		if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = at;
		else if (!o) return t;
		return 1 === s && (r = o, (o = function(t) {
			return p().off(t), r.apply(this, arguments)
		}).guid = r.guid || (r.guid = p.guid++)), t.each(function() {
			p.event.add(this, e, o, n, i)
		})
	}
	p.event = {
		global: {},
		add: function(t, e, i, n, o) {
			var s, r, a, l, c, u, d, h, f, v, m, g = I.get(t);
			if (g)
				for (i.handler && (i = (s = i).handler, o = s.selector), i.guid || (i.guid = p.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(e) {
						return void 0 !== p && p.event.triggered !== e.type ? p.event.dispatch.apply(t, arguments) : void 0
					}), c = (e = (e || "").match(H) || [""]).length; c--;) f = m = (a = st.exec(e[c]) || [])[1], v = (a[2] || "").split(".").sort(), f && (d = p.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = p.event.special[f] || {}, u = p.extend({
					type: f,
					origType: m,
					data: n,
					handler: i,
					guid: i.guid,
					selector: o,
					needsContext: o && p.expr.match.needsContext.test(o),
					namespace: v.join(".")
				}, s), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, n, v, r) || t.addEventListener && t.addEventListener(f, r)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), p.event.global[f] = !0)
		},
		remove: function(t, e, i, n, o) {
			var s, r, a, l, c, u, d, h, f, v, m, g = I.hasData(t) && I.get(t);
			if (g && (l = g.events)) {
				for (c = (e = (e || "").match(H) || [""]).length; c--;)
					if (f = m = (a = st.exec(e[c]) || [])[1], v = (a[2] || "").split(".").sort(), f) {
						for (d = p.event.special[f] || {}, h = l[f = (n ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = h.length; s--;) u = h[s], !o && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(s, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
						r && !h.length && (d.teardown && !1 !== d.teardown.call(t, v, g.handle) || p.removeEvent(t, f, g.handle), delete l[f])
					} else
						for (f in l) p.event.remove(t, f + e[c], i, n, !0);
				p.isEmptyObject(l) && I.remove(t, "handle events")
			}
		},
		dispatch: function(t) {
			t = p.event.fix(t);
			var e, i, n, s, r, a, l = o.call(arguments),
				c = (I.get(this, "events") || {})[t.type] || [],
				u = p.event.special[t.type] || {};
			if ((l[0] = t).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
				for (a = p.event.handlers.call(this, t, c), e = 0;
					(s = a[e++]) && !t.isPropagationStopped();)
					for (t.currentTarget = s.elem, i = 0;
						(r = s.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(r.namespace) || (t.handleObj = r, t.data = r.data, void 0 !== (n = ((p.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, l)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, t), t.result
			}
		},
		handlers: function(t, e) {
			var i, n, o, s, r = [],
				a = e.delegateCount,
				l = t.target;
			if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
						for (n = [], i = 0; i < a; i++) void 0 === n[o = (s = e[i]).selector + " "] && (n[o] = s.needsContext ? -1 < p(o, this).index(l) : p.find(o, this, null, [l]).length), n[o] && n.push(s);
						n.length && r.push({
							elem: l,
							handlers: n
						})
					}
			return a < e.length && r.push({
				elem: this,
				handlers: e.slice(a)
			}), r
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(t, e) {
				return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(t, e) {
				var i, o, s, r = e.button;
				return null == t.pageX && null != e.clientX && (o = (i = t.target.ownerDocument || n).documentElement, s = i.body, t.pageX = e.clientX + (o && o.scrollLeft || s && s.scrollLeft || 0) - (o && o.clientLeft || s && s.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || s && s.scrollTop || 0) - (o && o.clientTop || s && s.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
			}
		},
		fix: function(t) {
			if (t[p.expando]) return t;
			var e, i, o, s = t.type,
				r = t,
				a = this.fixHooks[s];
			for (a || (this.fixHooks[s] = a = ot.test(s) ? this.mouseHooks : nt.test(s) ? this.keyHooks : {}), o = a.props ? this.props.concat(a.props) : this.props, t = new p.Event(r), e = o.length; e--;) t[i = o[e]] = r[i];
			return t.target || (t.target = n), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, r) : t
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== lt() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === lt() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if ("checkbox" === this.type && this.click && p.nodeName(this, "input")) return this.click(), !1
				},
				_default: function(t) {
					return p.nodeName(t.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(t) {
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		}
	}, p.removeEvent = function(t, e, i) {
		t.removeEventListener && t.removeEventListener(e, i)
	}, p.Event = function(t, e) {
		if (!(this instanceof p.Event)) return new p.Event(t, e);
		t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? rt : at) : this.type = t, e && p.extend(this, e), this.timeStamp = t && t.timeStamp || p.now(), this[p.expando] = !0
	}, p.Event.prototype = {
		constructor: p.Event,
		isDefaultPrevented: at,
		isPropagationStopped: at,
		isImmediatePropagationStopped: at,
		preventDefault: function() {
			var t = this.originalEvent;
			this.isDefaultPrevented = rt, t && t.preventDefault()
		},
		stopPropagation: function() {
			var t = this.originalEvent;
			this.isPropagationStopped = rt, t && t.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = rt, t && t.stopImmediatePropagation(), this.stopPropagation()
		}
	}, p.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(t, e) {
		p.event.special[t] = {
			delegateType: e,
			bindType: e,
			handle: function(t) {
				var i, n = t.relatedTarget,
					o = t.handleObj;
				return n && (n === this || p.contains(this, n)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
			}
		}
	}), p.fn.extend({
		on: function(t, e, i, n) {
			return ct(this, t, e, i, n)
		},
		one: function(t, e, i, n) {
			return ct(this, t, e, i, n, 1)
		},
		off: function(t, e, i) {
			var n, o;
			if (t && t.preventDefault && t.handleObj) return n = t.handleObj, p(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
			if ("object" == typeof t) {
				for (o in t) this.off(o, e, t[o]);
				return this
			}
			return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = at), this.each(function() {
				p.event.remove(this, t, i, e)
			})
		}
	});
	var ut = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		dt = /<script|<style|<link/i,
		ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
		pt = /^true\/(.*)/,
		ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function vt(t, e) {
		return p.nodeName(t, "table") && p.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
	}

	function mt(t) {
		return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
	}

	function gt(t) {
		var e = pt.exec(t.type);
		return e ? t.type = e[1] : t.removeAttribute("type"), t
	}

	function yt(t, e) {
		var i, n, o, s, r, a, l, c;
		if (1 === e.nodeType) {
			if (I.hasData(t) && (s = I.access(t), r = I.set(e, s), c = s.events))
				for (o in delete r.handle, r.events = {}, c)
					for (i = 0, n = c[o].length; i < n; i++) p.event.add(e, o, c[o][i]);
			q.hasData(t) && (a = q.access(t), l = p.extend({}, a), q.set(e, l))
		}
	}

	function wt(t, e, i, n) {
		e = s.apply([], e);
		var o, r, a, l, c, u, h = 0,
			f = t.length,
			v = f - 1,
			m = e[0],
			g = p.isFunction(m);
		if (g || 1 < f && "string" == typeof m && !d.checkClone && ht.test(m)) return t.each(function(o) {
			var s = t.eq(o);
			g && (e[0] = m.call(this, o, s.html())), wt(s, e, i, n)
		});
		if (f && (r = (o = it(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === o.childNodes.length && (o = r), r || n)) {
			for (l = (a = p.map(G(o, "script"), mt)).length; h < f; h++) c = o, h !== v && (c = p.clone(c, !0, !0), l && p.merge(a, G(c, "script"))), i.call(t[h], c, h);
			if (l)
				for (u = a[a.length - 1].ownerDocument, p.map(a, gt), h = 0; h < l; h++) c = a[h], Q.test(c.type || "") && !I.access(c, "globalEval") && p.contains(u, c) && (c.src ? p._evalUrl && p._evalUrl(c.src) : p.globalEval(c.textContent.replace(ft, "")))
		}
		return t
	}

	function bt(t, e, i) {
		for (var n, o = e ? p.filter(e, t) : t, s = 0; null != (n = o[s]); s++) i || 1 !== n.nodeType || p.cleanData(G(n)), n.parentNode && (i && p.contains(n.ownerDocument, n) && J(G(n, "script")), n.parentNode.removeChild(n));
		return t
	}
	p.extend({
		htmlPrefilter: function(t) {
			return t.replace(ut, "<$1></$2>")
		},
		clone: function(t, e, i) {
			var n, o, s, r, a, l, c, u = t.cloneNode(!0),
				h = p.contains(t.ownerDocument, t);
			if (!(d.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || p.isXMLDoc(t)))
				for (r = G(u), n = 0, o = (s = G(t)).length; n < o; n++) a = s[n], l = r[n], "input" === (c = l.nodeName.toLowerCase()) && U.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
			if (e)
				if (i)
					for (s = s || G(t), r = r || G(u), n = 0, o = s.length; n < o; n++) yt(s[n], r[n]);
				else yt(t, u);
			return 0 < (r = G(u, "script")).length && J(r, !h && G(t, "script")), u
		},
		cleanData: function(t) {
			for (var e, i, n, o = p.event.special, s = 0; void 0 !== (i = t[s]); s++)
				if (N(i)) {
					if (e = i[I.expando]) {
						if (e.events)
							for (n in e.events) o[n] ? p.event.remove(i, n) : p.removeEvent(i, n, e.handle);
						i[I.expando] = void 0
					}
					i[q.expando] && (i[q.expando] = void 0)
				}
		}
	}), p.fn.extend({
		domManip: wt,
		detach: function(t) {
			return bt(this, t, !0)
		},
		remove: function(t) {
			return bt(this, t)
		},
		text: function(t) {
			return M(this, function(t) {
				return void 0 === t ? p.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
				})
			}, null, t, arguments.length)
		},
		append: function() {
			return wt(this, arguments, function(t) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || vt(this, t).appendChild(t)
			})
		},
		prepend: function() {
			return wt(this, arguments, function(t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = vt(this, t);
					e.insertBefore(t, e.firstChild)
				}
			})
		},
		before: function() {
			return wt(this, arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function() {
			return wt(this, arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		empty: function() {
			for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (p.cleanData(G(t, !1)), t.textContent = "");
			return this
		},
		clone: function(t, e) {
			return t = null != t && t, e = null == e ? t : e, this.map(function() {
				return p.clone(this, t, e)
			})
		},
		html: function(t) {
			return M(this, function(t) {
				var e = this[0] || {},
					i = 0,
					n = this.length;
				if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
				if ("string" == typeof t && !dt.test(t) && !K[(V.exec(t) || ["", ""])[1].toLowerCase()]) {
					t = p.htmlPrefilter(t);
					try {
						for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (p.cleanData(G(e, !1)), e.innerHTML = t);
						e = 0
					} catch (t) {}
				}
				e && this.empty().append(t)
			}, null, t, arguments.length)
		},
		replaceWith: function() {
			var t = [];
			return wt(this, arguments, function(e) {
				var i = this.parentNode;
				p.inArray(this, t) < 0 && (p.cleanData(G(this)), i && i.replaceChild(e, this))
			}, t)
		}
	}), p.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(t, e) {
		p.fn[t] = function(t) {
			for (var i, n = [], o = p(t), s = o.length - 1, a = 0; a <= s; a++) i = a === s ? this : this.clone(!0), p(o[a])[e](i), r.apply(n, i.get());
			return this.pushStack(n)
		}
	});
	var xt, Tt = {
		HTML: "block",
		BODY: "block"
	};

	function St(t, e) {
		var i = p(e.createElement(t)).appendTo(e.body),
			n = p.css(i[0], "display");
		return i.detach(), n
	}

	function kt(t) {
		var e = n,
			i = Tt[t];
		return i || ("none" !== (i = St(t, e)) && i || ((e = (xt = (xt || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), i = St(t, e), xt.detach()), Tt[t] = i), i
	}
	var Ct = /^margin/,
		Et = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
		$t = function(e) {
			var i = e.ownerDocument.defaultView;
			return i && i.opener || (i = t), i.getComputedStyle(e)
		},
		At = function(t, e, i, n) {
			var o, s, r = {};
			for (s in e) r[s] = t.style[s], t.style[s] = e[s];
			for (s in o = i.apply(t, n || []), e) t.style[s] = r[s];
			return o
		},
		Pt = n.documentElement;

	function Lt(t, e, i) {
		var n, o, s, r, a = t.style;
		return "" !== (r = (i = i || $t(t)) ? i.getPropertyValue(e) || i[e] : void 0) && void 0 !== r || p.contains(t.ownerDocument, t) || (r = p.style(t, e)), i && !d.pixelMarginRight() && Et.test(r) && Ct.test(e) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s), void 0 !== r ? r + "" : r
	}

	function Ot(t, e) {
		return {
			get: function() {
				if (!t()) return (this.get = e).apply(this, arguments);
				delete this.get
			}
		}
	}! function() {
		var e, i, o, s, r = n.createElement("div"),
			a = n.createElement("div");

		function l() {
			a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Pt.appendChild(r);
			var n = t.getComputedStyle(a);
			e = "1%" !== n.top, s = "2px" === n.marginLeft, i = "4px" === n.width, a.style.marginRight = "50%", o = "4px" === n.marginRight, Pt.removeChild(r)
		}
		a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(a), p.extend(d, {
			pixelPosition: function() {
				return l(), e
			},
			boxSizingReliable: function() {
				return null == i && l(), i
			},
			pixelMarginRight: function() {
				return null == i && l(), o
			},
			reliableMarginLeft: function() {
				return null == i && l(), s
			},
			reliableMarginRight: function() {
				var e, i = a.appendChild(n.createElement("div"));
				return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", Pt.appendChild(r), e = !parseFloat(t.getComputedStyle(i).marginRight), Pt.removeChild(r), a.removeChild(i), e
			}
		}))
	}();
	var Ht = /^(none|table(?!-c[ea]).+)/,
		Dt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Mt = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Nt = ["Webkit", "O", "Moz", "ms"],
		jt = n.createElement("div").style;

	function It(t) {
		if (t in jt) return t;
		for (var e = t[0].toUpperCase() + t.slice(1), i = Nt.length; i--;)
			if ((t = Nt[i] + e) in jt) return t
	}

	function qt(t, e, i) {
		var n = R.exec(e);
		return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
	}

	function zt(t, e, i, n, o) {
		for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; s < 4; s += 2) "margin" === i && (r += p.css(t, i + Y[s], !0, o)), n ? ("content" === i && (r -= p.css(t, "padding" + Y[s], !0, o)), "margin" !== i && (r -= p.css(t, "border" + Y[s] + "Width", !0, o))) : (r += p.css(t, "padding" + Y[s], !0, o), "padding" !== i && (r += p.css(t, "border" + Y[s] + "Width", !0, o)));
		return r
	}

	function Wt(e, i, o) {
		var s = !0,
			r = "width" === i ? e.offsetWidth : e.offsetHeight,
			a = $t(e),
			l = "border-box" === p.css(e, "boxSizing", !1, a);
		if (n.msFullscreenElement && t.top !== t && e.getClientRects().length && (r = Math.round(100 * e.getBoundingClientRect()[i])), r <= 0 || null == r) {
			if (((r = Lt(e, i, a)) < 0 || null == r) && (r = e.style[i]), Et.test(r)) return r;
			s = l && (d.boxSizingReliable() || r === e.style[i]), r = parseFloat(r) || 0
		}
		return r + zt(e, i, o || (l ? "border" : "content"), s, a) + "px"
	}

	function _t(t, e) {
		for (var i, n, o, s = [], r = 0, a = t.length; r < a; r++)(n = t[r]).style && (s[r] = I.get(n, "olddisplay"), i = n.style.display, e ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && F(n) && (s[r] = I.access(n, "olddisplay", kt(n.nodeName)))) : (o = F(n), "none" === i && o || I.set(n, "olddisplay", o ? i : p.css(n, "display"))));
		for (r = 0; r < a; r++)(n = t[r]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[r] || "" : "none"));
		return t
	}

	function Xt(t, e, i, n, o) {
		return new Xt.prototype.init(t, e, i, n, o)
	}
	p.extend({
		cssHooks: {
			opacity: {
				get: function(t, e) {
					if (e) {
						var i = Lt(t, "opacity");
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
		style: function(t, e, i, n) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var o, s, r, a = p.camelCase(e),
					l = t.style;
				if (e = p.cssProps[a] || (p.cssProps[a] = It(a) || a), r = p.cssHooks[e] || p.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (o = r.get(t, !1, n)) ? o : l[e];
				"string" == (s = typeof i) && (o = R.exec(i)) && o[1] && (i = B(t, e, o), s = "number"), null != i && i == i && ("number" === s && (i += o && o[3] || (p.cssNumber[a] ? "" : "px")), d.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l[e] = i))
			}
		},
		css: function(t, e, i, n) {
			var o, s, r, a = p.camelCase(e);
			return e = p.cssProps[a] || (p.cssProps[a] = It(a) || a), (r = p.cssHooks[e] || p.cssHooks[a]) && "get" in r && (o = r.get(t, !0, i)), void 0 === o && (o = Lt(t, e, n)), "normal" === o && e in Mt && (o = Mt[e]), "" === i || i ? (s = parseFloat(o), !0 === i || isFinite(s) ? s || 0 : o) : o
		}
	}), p.each(["height", "width"], function(t, e) {
		p.cssHooks[e] = {
			get: function(t, i, n) {
				if (i) return Ht.test(p.css(t, "display")) && 0 === t.offsetWidth ? At(t, Dt, function() {
					return Wt(t, e, n)
				}) : Wt(t, e, n)
			},
			set: function(t, i, n) {
				var o, s = n && $t(t),
					r = n && zt(t, e, n, "border-box" === p.css(t, "boxSizing", !1, s), s);
				return r && (o = R.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i, i = p.css(t, e)), qt(0, i, r)
			}
		}
	}), p.cssHooks.marginLeft = Ot(d.reliableMarginLeft, function(t, e) {
		if (e) return (parseFloat(Lt(t, "marginLeft")) || t.getBoundingClientRect().left - At(t, {
			marginLeft: 0
		}, function() {
			return t.getBoundingClientRect().left
		})) + "px"
	}), p.cssHooks.marginRight = Ot(d.reliableMarginRight, function(t, e) {
		if (e) return At(t, {
			display: "inline-block"
		}, Lt, [t, "marginRight"])
	}), p.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(t, e) {
		p.cssHooks[t + e] = {
			expand: function(i) {
				for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[t + Y[n] + e] = s[n] || s[n - 2] || s[0];
				return o
			}
		}, Ct.test(t) || (p.cssHooks[t + e].set = qt)
	}), p.fn.extend({
		css: function(t, e) {
			return M(this, function(t, e, i) {
				var n, o, s = {},
					r = 0;
				if (p.isArray(e)) {
					for (n = $t(t), o = e.length; r < o; r++) s[e[r]] = p.css(t, e[r], !1, n);
					return s
				}
				return void 0 !== i ? p.style(t, e, i) : p.css(t, e)
			}, t, e, 1 < arguments.length)
		},
		show: function() {
			return _t(this, !0)
		},
		hide: function() {
			return _t(this)
		},
		toggle: function(t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
				F(this) ? p(this).show() : p(this).hide()
			})
		}
	}), ((p.Tween = Xt).prototype = {
		constructor: Xt,
		init: function(t, e, i, n, o, s) {
			this.elem = t, this.prop = i, this.easing = o || p.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (p.cssNumber[i] ? "" : "px")
		},
		cur: function() {
			var t = Xt.propHooks[this.prop];
			return t && t.get ? t.get(this) : Xt.propHooks._default.get(this)
		},
		run: function(t) {
			var e, i = Xt.propHooks[this.prop];
			return this.options.duration ? this.pos = e = p.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Xt.propHooks._default.set(this), this
		}
	}).init.prototype = Xt.prototype, (Xt.propHooks = {
		_default: {
			get: function(t) {
				var e;
				return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = p.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
			},
			set: function(t) {
				p.fx.step[t.prop] ? p.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[p.cssProps[t.prop]] && !p.cssHooks[t.prop] ? t.elem[t.prop] = t.now : p.style(t.elem, t.prop, t.now + t.unit)
			}
		}
	}).scrollTop = Xt.propHooks.scrollLeft = {
		set: function(t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, p.easing = {
		linear: function(t) {
			return t
		},
		swing: function(t) {
			return .5 - Math.cos(t * Math.PI) / 2
		},
		_default: "swing"
	}, p.fx = Xt.prototype.init, p.fx.step = {};
	var Rt, Yt, Ft, Bt, Ut, Vt = /^(?:toggle|show|hide)$/,
		Qt = /queueHooks$/;

	function Kt() {
		return t.setTimeout(function() {
			Rt = void 0
		}), Rt = p.now()
	}

	function Gt(t, e) {
		var i, n = 0,
			o = {
				height: t
			};
		for (e = e ? 1 : 0; n < 4; n += 2 - e) o["margin" + (i = Y[n])] = o["padding" + i] = t;
		return e && (o.opacity = o.width = t), o
	}

	function Jt(t, e, i) {
		for (var n, o = (Zt.tweeners[e] || []).concat(Zt.tweeners["*"]), s = 0, r = o.length; s < r; s++)
			if (n = o[s].call(i, e, t)) return n
	}

	function Zt(t, e, i) {
		var n, o, s = 0,
			r = Zt.prefilters.length,
			a = p.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (o) return !1;
				for (var e = Rt || Kt(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), s = 0, r = c.tweens.length; s < r; s++) c.tweens[s].run(n);
				return a.notifyWith(t, [c, n, i]), n < 1 && r ? i : (a.resolveWith(t, [c]), !1)
			},
			c = a.promise({
				elem: t,
				props: p.extend({}, e),
				opts: p.extend(!0, {
					specialEasing: {},
					easing: p.easing._default
				}, i),
				originalProperties: e,
				originalOptions: i,
				startTime: Rt || Kt(),
				duration: i.duration,
				tweens: [],
				createTween: function(e, i) {
					var n = p.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
					return c.tweens.push(n), n
				},
				stop: function(e) {
					var i = 0,
						n = e ? c.tweens.length : 0;
					if (o) return this;
					for (o = !0; i < n; i++) c.tweens[i].run(1);
					return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
				}
			}),
			u = c.props;
		for (function(t, e) {
				var i, n, o, s, r;
				for (i in t)
					if (o = e[n = p.camelCase(i)], s = t[i], p.isArray(s) && (o = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (r = p.cssHooks[n]) && "expand" in r)
						for (i in s = r.expand(s), delete t[n], s) i in t || (t[i] = s[i], e[i] = o);
					else e[n] = o
			}(u, c.opts.specialEasing); s < r; s++)
			if (n = Zt.prefilters[s].call(c, t, u, c.opts)) return p.isFunction(n.stop) && (p._queueHooks(c.elem, c.opts.queue).stop = p.proxy(n.stop, n)), n;
		return p.map(u, Jt, c), p.isFunction(c.opts.start) && c.opts.start.call(t, c), p.fx.timer(p.extend(l, {
			elem: t,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}
	p.Animation = p.extend(Zt, {
		tweeners: {
			"*": [function(t, e) {
				var i = this.createTween(t, e);
				return B(i.elem, t, R.exec(e), i), i
			}]
		},
		tweener: function(t, e) {
			p.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(H);
			for (var i, n = 0, o = t.length; n < o; n++) i = t[n], Zt.tweeners[i] = Zt.tweeners[i] || [], Zt.tweeners[i].unshift(e)
		},
		prefilters: [function(t, e, i) {
			var n, o, s, r, a, l, c, u = this,
				d = {},
				h = t.style,
				f = t.nodeType && F(t),
				v = I.get(t, "fxshow");
			for (n in i.queue || (null == (a = p._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
					a.unqueued || l()
				}), a.unqueued++, u.always(function() {
					u.always(function() {
						a.unqueued--, p.queue(t, "fx").length || a.empty.fire()
					})
				})), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (c = p.css(t, "display")) ? I.get(t, "olddisplay") || kt(t.nodeName) : c) && "none" === p.css(t, "float") && (h.display = "inline-block")), i.overflow && (h.overflow = "hidden", u.always(function() {
					h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
				})), e)
				if (o = e[n], Vt.exec(o)) {
					if (delete e[n], s = s || "toggle" === o, o === (f ? "hide" : "show")) {
						if ("show" !== o || !v || void 0 === v[n]) continue;
						f = !0
					}
					d[n] = v && v[n] || p.style(t, n)
				} else c = void 0;
			if (p.isEmptyObject(d)) "inline" === ("none" === c ? kt(t.nodeName) : c) && (h.display = c);
			else
				for (n in v ? "hidden" in v && (f = v.hidden) : v = I.access(t, "fxshow", {}), s && (v.hidden = !f), f ? p(t).show() : u.done(function() {
						p(t).hide()
					}), u.done(function() {
						var e;
						for (e in I.remove(t, "fxshow"), d) p.style(t, e, d[e])
					}), d) r = Jt(f ? v[n] : 0, n, u), n in v || (v[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
		}],
		prefilter: function(t, e) {
			e ? Zt.prefilters.unshift(t) : Zt.prefilters.push(t)
		}
	}), p.speed = function(t, e, i) {
		var n = t && "object" == typeof t ? p.extend({}, t) : {
			complete: i || !i && e || p.isFunction(t) && t,
			duration: t,
			easing: i && e || e && !p.isFunction(e) && e
		};
		return n.duration = p.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in p.fx.speeds ? p.fx.speeds[n.duration] : p.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
			p.isFunction(n.old) && n.old.call(this), n.queue && p.dequeue(this, n.queue)
		}, n
	}, p.fn.extend({
		fadeTo: function(t, e, i, n) {
			return this.filter(F).css("opacity", 0).show().end().animate({
				opacity: e
			}, t, i, n)
		},
		animate: function(t, e, i, n) {
			var o = p.isEmptyObject(t),
				s = p.speed(e, i, n),
				r = function() {
					var e = Zt(this, p.extend({}, t), s);
					(o || I.get(this, "finish")) && e.stop(!0)
				};
			return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
		},
		stop: function(t, e, i) {
			var n = function(t) {
				var e = t.stop;
				delete t.stop, e(i)
			};
			return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
				var e = !0,
					o = null != t && t + "queueHooks",
					s = p.timers,
					r = I.get(this);
				if (o) r[o] && r[o].stop && n(r[o]);
				else
					for (o in r) r[o] && r[o].stop && Qt.test(o) && n(r[o]);
				for (o = s.length; o--;) s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(i), e = !1, s.splice(o, 1));
				!e && i || p.dequeue(this, t)
			})
		},
		finish: function(t) {
			return !1 !== t && (t = t || "fx"), this.each(function() {
				var e, i = I.get(this),
					n = i[t + "queue"],
					o = i[t + "queueHooks"],
					s = p.timers,
					r = n ? n.length : 0;
				for (i.finish = !0, p.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
				for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
				delete i.finish
			})
		}
	}), p.each(["toggle", "show", "hide"], function(t, e) {
		var i = p.fn[e];
		p.fn[e] = function(t, n, o) {
			return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(Gt(e, !0), t, n, o)
		}
	}), p.each({
		slideDown: Gt("show"),
		slideUp: Gt("hide"),
		slideToggle: Gt("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(t, e) {
		p.fn[t] = function(t, i, n) {
			return this.animate(e, t, i, n)
		}
	}), p.timers = [], p.fx.tick = function() {
		var t, e = 0,
			i = p.timers;
		for (Rt = p.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
		i.length || p.fx.stop(), Rt = void 0
	}, p.fx.timer = function(t) {
		p.timers.push(t), t() ? p.fx.start() : p.timers.pop()
	}, p.fx.interval = 13, p.fx.start = function() {
		Yt || (Yt = t.setInterval(p.fx.tick, p.fx.interval))
	}, p.fx.stop = function() {
		t.clearInterval(Yt), Yt = null
	}, p.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, p.fn.delay = function(e, i) {
		return e = p.fx && p.fx.speeds[e] || e, i = i || "fx", this.queue(i, function(i, n) {
			var o = t.setTimeout(i, e);
			n.stop = function() {
				t.clearTimeout(o)
			}
		})
	}, Ft = n.createElement("input"), Ut = (Bt = n.createElement("select")).appendChild(n.createElement("option")), Ft.type = "checkbox", d.checkOn = "" !== Ft.value, d.optSelected = Ut.selected, Bt.disabled = !0, d.optDisabled = !Ut.disabled, (Ft = n.createElement("input")).value = "t", Ft.type = "radio", d.radioValue = "t" === Ft.value;
	var te, ee = p.expr.attrHandle;
	p.fn.extend({
		attr: function(t, e) {
			return M(this, p.attr, t, e, 1 < arguments.length)
		},
		removeAttr: function(t) {
			return this.each(function() {
				p.removeAttr(this, t)
			})
		}
	}), p.extend({
		attr: function(t, e, i) {
			var n, o, s = t.nodeType;
			if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? p.prop(t, e, i) : (1 === s && p.isXMLDoc(t) || (e = e.toLowerCase(), o = p.attrHooks[e] || (p.expr.match.bool.test(e) ? te : void 0)), void 0 !== i ? null === i ? void p.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : null == (n = p.find.attr(t, e)) ? void 0 : n)
		},
		attrHooks: {
			type: {
				set: function(t, e) {
					if (!d.radioValue && "radio" === e && p.nodeName(t, "input")) {
						var i = t.value;
						return t.setAttribute("type", e), i && (t.value = i), e
					}
				}
			}
		},
		removeAttr: function(t, e) {
			var i, n, o = 0,
				s = e && e.match(H);
			if (s && 1 === t.nodeType)
				for (; i = s[o++];) n = p.propFix[i] || i, p.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
		}
	}), te = {
		set: function(t, e, i) {
			return !1 === e ? p.removeAttr(t, i) : t.setAttribute(i, i), i
		}
	}, p.each(p.expr.match.bool.source.match(/\w+/g), function(t, e) {
		var i = ee[e] || p.find.attr;
		ee[e] = function(t, e, n) {
			var o, s;
			return n || (s = ee[e], ee[e] = o, o = null != i(t, e, n) ? e.toLowerCase() : null, ee[e] = s), o
		}
	});
	var ie = /^(?:input|select|textarea|button)$/i,
		ne = /^(?:a|area)$/i;
	p.fn.extend({
		prop: function(t, e) {
			return M(this, p.prop, t, e, 1 < arguments.length)
		},
		removeProp: function(t) {
			return this.each(function() {
				delete this[p.propFix[t] || t]
			})
		}
	}), p.extend({
		prop: function(t, e, i) {
			var n, o, s = t.nodeType;
			if (3 !== s && 8 !== s && 2 !== s) return 1 === s && p.isXMLDoc(t) || (e = p.propFix[e] || e, o = p.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
		},
		propHooks: {
			tabIndex: {
				get: function(t) {
					var e = p.find.attr(t, "tabindex");
					return e ? parseInt(e, 10) : ie.test(t.nodeName) || ne.test(t.nodeName) && t.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), d.optSelected || (p.propHooks.selected = {
		get: function(t) {
			var e = t.parentNode;
			return e && e.parentNode && e.parentNode.selectedIndex, null
		},
		set: function(t) {
			var e = t.parentNode;
			e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
		}
	}), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		p.propFix[this.toLowerCase()] = this
	});
	var oe = /[\t\r\n\f]/g;

	function se(t) {
		return t.getAttribute && t.getAttribute("class") || ""
	}
	p.fn.extend({
		addClass: function(t) {
			var e, i, n, o, s, r, a, l = 0;
			if (p.isFunction(t)) return this.each(function(e) {
				p(this).addClass(t.call(this, e, se(this)))
			});
			if ("string" == typeof t && t)
				for (e = t.match(H) || []; i = this[l++];)
					if (o = se(i), n = 1 === i.nodeType && (" " + o + " ").replace(oe, " ")) {
						for (r = 0; s = e[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
						o !== (a = p.trim(n)) && i.setAttribute("class", a)
					}
			return this
		},
		removeClass: function(t) {
			var e, i, n, o, s, r, a, l = 0;
			if (p.isFunction(t)) return this.each(function(e) {
				p(this).removeClass(t.call(this, e, se(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof t && t)
				for (e = t.match(H) || []; i = this[l++];)
					if (o = se(i), n = 1 === i.nodeType && (" " + o + " ").replace(oe, " ")) {
						for (r = 0; s = e[r++];)
							for (; - 1 < n.indexOf(" " + s + " ");) n = n.replace(" " + s + " ", " ");
						o !== (a = p.trim(n)) && i.setAttribute("class", a)
					}
			return this
		},
		toggleClass: function(t, e) {
			var i = typeof t;
			return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : p.isFunction(t) ? this.each(function(i) {
				p(this).toggleClass(t.call(this, i, se(this), e), e)
			}) : this.each(function() {
				var e, n, o, s;
				if ("string" === i)
					for (n = 0, o = p(this), s = t.match(H) || []; e = s[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
				else void 0 !== t && "boolean" !== i || ((e = se(this)) && I.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : I.get(this, "__className__") || ""))
			})
		},
		hasClass: function(t) {
			var e, i, n = 0;
			for (e = " " + t + " "; i = this[n++];)
				if (1 === i.nodeType && -1 < (" " + se(i) + " ").replace(oe, " ").indexOf(e)) return !0;
			return !1
		}
	});
	var re = /\r/g,
		ae = /[\x20\t\r\n\f]+/g;
	p.fn.extend({
		val: function(t) {
			var e, i, n, o = this[0];
			return arguments.length ? (n = p.isFunction(t), this.each(function(i) {
				var o;
				1 === this.nodeType && (null == (o = n ? t.call(this, i, p(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : p.isArray(o) && (o = p.map(o, function(t) {
					return null == t ? "" : t + ""
				})), (e = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
			})) : o ? (e = p.valHooks[o.type] || p.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : "string" == typeof(i = o.value) ? i.replace(re, "") : null == i ? "" : i : void 0
		}
	}), p.extend({
		valHooks: {
			option: {
				get: function(t) {
					var e = p.find.attr(t, "value");
					return null != e ? e : p.trim(p.text(t)).replace(ae, " ")
				}
			},
			select: {
				get: function(t) {
					for (var e, i, n = t.options, o = t.selectedIndex, s = "select-one" === t.type || o < 0, r = s ? null : [], a = s ? o + 1 : n.length, l = o < 0 ? a : s ? o : 0; l < a; l++)
						if (((i = n[l]).selected || l === o) && (d.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !p.nodeName(i.parentNode, "optgroup"))) {
							if (e = p(i).val(), s) return e;
							r.push(e)
						}
					return r
				},
				set: function(t, e) {
					for (var i, n, o = t.options, s = p.makeArray(e), r = o.length; r--;)((n = o[r]).selected = -1 < p.inArray(p.valHooks.option.get(n), s)) && (i = !0);
					return i || (t.selectedIndex = -1), s
				}
			}
		}
	}), p.each(["radio", "checkbox"], function() {
		p.valHooks[this] = {
			set: function(t, e) {
				if (p.isArray(e)) return t.checked = -1 < p.inArray(p(t).val(), e)
			}
		}, d.checkOn || (p.valHooks[this].get = function(t) {
			return null === t.getAttribute("value") ? "on" : t.value
		})
	});
	var le = /^(?:focusinfocus|focusoutblur)$/;
	p.extend(p.event, {
		trigger: function(e, i, o, s) {
			var r, a, l, c, d, h, f, v = [o || n],
				m = u.call(e, "type") ? e.type : e,
				g = u.call(e, "namespace") ? e.namespace.split(".") : [];
			if (a = l = o = o || n, 3 !== o.nodeType && 8 !== o.nodeType && !le.test(m + p.event.triggered) && (-1 < m.indexOf(".") && (m = (g = m.split(".")).shift(), g.sort()), d = m.indexOf(":") < 0 && "on" + m, (e = e[p.expando] ? e : new p.Event(m, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = o), i = null == i ? [e] : p.makeArray(i, [e]), f = p.event.special[m] || {}, s || !f.trigger || !1 !== f.trigger.apply(o, i))) {
				if (!s && !f.noBubble && !p.isWindow(o)) {
					for (c = f.delegateType || m, le.test(c + m) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
					l === (o.ownerDocument || n) && v.push(l.defaultView || l.parentWindow || t)
				}
				for (r = 0;
					(a = v[r++]) && !e.isPropagationStopped();) e.type = 1 < r ? c : f.bindType || m, (h = (I.get(a, "events") || {})[e.type] && I.get(a, "handle")) && h.apply(a, i), (h = d && a[d]) && h.apply && N(a) && (e.result = h.apply(a, i), !1 === e.result && e.preventDefault());
				return e.type = m, s || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), i) || !N(o) || d && p.isFunction(o[m]) && !p.isWindow(o) && ((l = o[d]) && (o[d] = null), o[p.event.triggered = m](), p.event.triggered = void 0, l && (o[d] = l)), e.result
			}
		},
		simulate: function(t, e, i) {
			var n = p.extend(new p.Event, i, {
				type: t,
				isSimulated: !0
			});
			p.event.trigger(n, null, e), n.isDefaultPrevented() && i.preventDefault()
		}
	}), p.fn.extend({
		trigger: function(t, e) {
			return this.each(function() {
				p.event.trigger(t, e, this)
			})
		},
		triggerHandler: function(t, e) {
			var i = this[0];
			if (i) return p.event.trigger(t, e, i, !0)
		}
	}), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
		p.fn[e] = function(t, i) {
			return 0 < arguments.length ? this.on(e, null, t, i) : this.trigger(e)
		}
	}), p.fn.extend({
		hover: function(t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		}
	}), d.focusin = "onfocusin" in t, d.focusin || p.each({
		focus: "focusin",
		blur: "focusout"
	}, function(t, e) {
		var i = function(t) {
			p.event.simulate(e, t.target, p.event.fix(t))
		};
		p.event.special[e] = {
			setup: function() {
				var n = this.ownerDocument || this,
					o = I.access(n, e);
				o || n.addEventListener(t, i, !0), I.access(n, e, (o || 0) + 1)
			},
			teardown: function() {
				var n = this.ownerDocument || this,
					o = I.access(n, e) - 1;
				o ? I.access(n, e, o) : (n.removeEventListener(t, i, !0), I.remove(n, e))
			}
		}
	});
	var ce = t.location,
		ue = p.now(),
		de = /\?/;
	p.parseJSON = function(t) {
		return JSON.parse(t + "")
	}, p.parseXML = function(e) {
		var i;
		if (!e || "string" != typeof e) return null;
		try {
			i = (new t.DOMParser).parseFromString(e, "text/xml")
		} catch (e) {
			i = void 0
		}
		return i && !i.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + e), i
	};
	var he = /#.*$/,
		pe = /([?&])_=[^&]*/,
		fe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		ve = /^(?:GET|HEAD)$/,
		me = /^\/\//,
		ge = {},
		ye = {},
		we = "*/".concat("*"),
		be = n.createElement("a");

	function xe(t) {
		return function(e, i) {
			"string" != typeof e && (i = e, e = "*");
			var n, o = 0,
				s = e.toLowerCase().match(H) || [];
			if (p.isFunction(i))
				for (; n = s[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
		}
	}

	function Te(t, e, i, n) {
		var o = {},
			s = t === ye;

		function r(a) {
			var l;
			return o[a] = !0, p.each(t[a] || [], function(t, a) {
				var c = a(e, i, n);
				return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
			}), l
		}
		return r(e.dataTypes[0]) || !o["*"] && r("*")
	}

	function Se(t, e) {
		var i, n, o = p.ajaxSettings.flatOptions || {};
		for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
		return n && p.extend(!0, t, n), t
	}
	be.href = ce.href, p.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: ce.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ce.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": we,
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
				"text json": p.parseJSON,
				"text xml": p.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(t, e) {
			return e ? Se(Se(t, p.ajaxSettings), e) : Se(p.ajaxSettings, t)
		},
		ajaxPrefilter: xe(ge),
		ajaxTransport: xe(ye),
		ajax: function(e, i) {
			"object" == typeof e && (i = e, e = void 0), i = i || {};
			var o, s, r, a, l, c, u, d, h = p.ajaxSetup({}, i),
				f = h.context || h,
				v = h.context && (f.nodeType || f.jquery) ? p(f) : p.event,
				m = p.Deferred(),
				g = p.Callbacks("once memory"),
				y = h.statusCode || {},
				w = {},
				b = {},
				x = 0,
				T = "canceled",
				S = {
					readyState: 0,
					getResponseHeader: function(t) {
						var e;
						if (2 === x) {
							if (!a)
								for (a = {}; e = fe.exec(r);) a[e[1].toLowerCase()] = e[2];
							e = a[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function() {
						return 2 === x ? r : null
					},
					setRequestHeader: function(t, e) {
						var i = t.toLowerCase();
						return x || (t = b[i] = b[i] || t, w[t] = e), this
					},
					overrideMimeType: function(t) {
						return x || (h.mimeType = t), this
					},
					statusCode: function(t) {
						var e;
						if (t)
							if (x < 2)
								for (e in t) y[e] = [y[e], t[e]];
							else S.always(t[S.status]);
						return this
					},
					abort: function(t) {
						var e = t || T;
						return o && o.abort(e), k(0, e), this
					}
				};
			if (m.promise(S).complete = g.add, S.success = S.done, S.error = S.fail, h.url = ((e || h.url || ce.href) + "").replace(he, "").replace(me, ce.protocol + "//"), h.type = i.method || i.type || h.method || h.type, h.dataTypes = p.trim(h.dataType || "*").toLowerCase().match(H) || [""], null == h.crossDomain) {
				c = n.createElement("a");
				try {
					c.href = h.url, c.href = c.href, h.crossDomain = be.protocol + "//" + be.host != c.protocol + "//" + c.host
				} catch (e) {
					h.crossDomain = !0
				}
			}
			if (h.data && h.processData && "string" != typeof h.data && (h.data = p.param(h.data, h.traditional)), Te(ge, h, i, S), 2 === x) return S;
			for (d in (u = p.event && h.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !ve.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (de.test(s) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = pe.test(s) ? s.replace(pe, "$1_=" + ue++) : s + (de.test(s) ? "&" : "?") + "_=" + ue++)), h.ifModified && (p.lastModified[s] && S.setRequestHeader("If-Modified-Since", p.lastModified[s]), p.etag[s] && S.setRequestHeader("If-None-Match", p.etag[s])), (h.data && h.hasContent && !1 !== h.contentType || i.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + we + "; q=0.01" : "") : h.accepts["*"]), h.headers) S.setRequestHeader(d, h.headers[d]);
			if (h.beforeSend && (!1 === h.beforeSend.call(f, S, h) || 2 === x)) return S.abort();
			for (d in T = "abort", {
					success: 1,
					error: 1,
					complete: 1
				}) S[d](h[d]);
			if (o = Te(ye, h, i, S)) {
				if (S.readyState = 1, u && v.trigger("ajaxSend", [S, h]), 2 === x) return S;
				h.async && 0 < h.timeout && (l = t.setTimeout(function() {
					S.abort("timeout")
				}, h.timeout));
				try {
					x = 1, o.send(w, k)
				} catch (e) {
					if (!(x < 2)) throw e;
					k(-1, e)
				}
			} else k(-1, "No Transport");

			function k(e, i, n, a) {
				var c, d, w, b, T, k = i;
				2 !== x && (x = 2, l && t.clearTimeout(l), o = void 0, r = a || "", S.readyState = 0 < e ? 4 : 0, c = 200 <= e && e < 300 || 304 === e, n && (b = function(t, e, i) {
					for (var n, o, s, r, a = t.contents, l = t.dataTypes;
						"*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
					if (n)
						for (o in a)
							if (a[o] && a[o].test(n)) {
								l.unshift(o);
								break
							}
					if (l[0] in i) s = l[0];
					else {
						for (o in i) {
							if (!l[0] || t.converters[o + " " + l[0]]) {
								s = o;
								break
							}
							r || (r = o)
						}
						s = s || r
					}
					if (s) return s !== l[0] && l.unshift(s), i[s]
				}(h, S, n)), b = function(t, e, i, n) {
					var o, s, r, a, l, c = {},
						u = t.dataTypes.slice();
					if (u[1])
						for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
					for (s = u.shift(); s;)
						if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift())
							if ("*" === s) s = l;
							else if ("*" !== l && l !== s) {
						if (!(r = c[l + " " + s] || c["* " + s]))
							for (o in c)
								if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
									!0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], u.unshift(a[1]));
									break
								}
						if (!0 !== r)
							if (r && t.throws) e = r(e);
							else try {
								e = r(e)
							} catch (t) {
								return {
									state: "parsererror",
									error: r ? t : "No conversion from " + l + " to " + s
								}
							}
					}
					return {
						state: "success",
						data: e
					}
				}(h, b, S, c), c ? (h.ifModified && ((T = S.getResponseHeader("Last-Modified")) && (p.lastModified[s] = T), (T = S.getResponseHeader("etag")) && (p.etag[s] = T)), 204 === e || "HEAD" === h.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state, d = b.data, c = !(w = b.error))) : (w = k, !e && k || (k = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (i || k) + "", c ? m.resolveWith(f, [d, k, S]) : m.rejectWith(f, [S, k, w]), S.statusCode(y), y = void 0, u && v.trigger(c ? "ajaxSuccess" : "ajaxError", [S, h, c ? d : w]), g.fireWith(f, [S, k]), u && (v.trigger("ajaxComplete", [S, h]), --p.active || p.event.trigger("ajaxStop")))
			}
			return S
		},
		getJSON: function(t, e, i) {
			return p.get(t, e, i, "json")
		},
		getScript: function(t, e) {
			return p.get(t, void 0, e, "script")
		}
	}), p.each(["get", "post"], function(t, e) {
		p[e] = function(t, i, n, o) {
			return p.isFunction(i) && (o = o || n, n = i, i = void 0), p.ajax(p.extend({
				url: t,
				type: e,
				dataType: o,
				data: i,
				success: n
			}, p.isPlainObject(t) && t))
		}
	}), p._evalUrl = function(t) {
		return p.ajax({
			url: t,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			throws: !0
		})
	}, p.fn.extend({
		wrapAll: function(t) {
			var e;
			return p.isFunction(t) ? this.each(function(e) {
				p(this).wrapAll(t.call(this, e))
			}) : (this[0] && (e = p(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
				for (var t = this; t.firstElementChild;) t = t.firstElementChild;
				return t
			}).append(this)), this)
		},
		wrapInner: function(t) {
			return p.isFunction(t) ? this.each(function(e) {
				p(this).wrapInner(t.call(this, e))
			}) : this.each(function() {
				var e = p(this),
					i = e.contents();
				i.length ? i.wrapAll(t) : e.append(t)
			})
		},
		wrap: function(t) {
			var e = p.isFunction(t);
			return this.each(function(i) {
				p(this).wrapAll(e ? t.call(this, i) : t)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
			}).end()
		}
	}), p.expr.filters.hidden = function(t) {
		return !p.expr.filters.visible(t)
	}, p.expr.filters.visible = function(t) {
		return 0 < t.offsetWidth || 0 < t.offsetHeight || 0 < t.getClientRects().length
	};
	var ke = /%20/g,
		Ce = /\[\]$/,
		Ee = /\r?\n/g,
		$e = /^(?:submit|button|image|reset|file)$/i,
		Ae = /^(?:input|select|textarea|keygen)/i;

	function Pe(t, e, i, n) {
		var o;
		if (p.isArray(e)) p.each(e, function(e, o) {
			i || Ce.test(t) ? n(t, o) : Pe(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
		});
		else if (i || "object" !== p.type(e)) n(t, e);
		else
			for (o in e) Pe(t + "[" + o + "]", e[o], i, n)
	}
	p.param = function(t, e) {
		var i, n = [],
			o = function(t, e) {
				e = p.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
			};
		if (void 0 === e && (e = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(t) || t.jquery && !p.isPlainObject(t)) p.each(t, function() {
			o(this.name, this.value)
		});
		else
			for (i in t) Pe(i, t[i], e, o);
		return n.join("&").replace(ke, "+")
	}, p.fn.extend({
		serialize: function() {
			return p.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var t = p.prop(this, "elements");
				return t ? p.makeArray(t) : this
			}).filter(function() {
				var t = this.type;
				return this.name && !p(this).is(":disabled") && Ae.test(this.nodeName) && !$e.test(t) && (this.checked || !U.test(t))
			}).map(function(t, e) {
				var i = p(this).val();
				return null == i ? null : p.isArray(i) ? p.map(i, function(t) {
					return {
						name: e.name,
						value: t.replace(Ee, "\r\n")
					}
				}) : {
					name: e.name,
					value: i.replace(Ee, "\r\n")
				}
			}).get()
		}
	}), p.ajaxSettings.xhr = function() {
		try {
			return new t.XMLHttpRequest
		} catch (t) {}
	};
	var Le = {
			0: 200,
			1223: 204
		},
		Oe = p.ajaxSettings.xhr();
	d.cors = !!Oe && "withCredentials" in Oe, d.ajax = Oe = !!Oe, p.ajaxTransport(function(e) {
		var i, n;
		if (d.cors || Oe && !e.crossDomain) return {
			send: function(o, s) {
				var r, a = e.xhr();
				if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
					for (r in e.xhrFields) a[r] = e.xhrFields[r];
				for (r in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(r, o[r]);
				i = function(t) {
					return function() {
						i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Le[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
							binary: a.response
						} : {
							text: a.responseText
						}, a.getAllResponseHeaders()))
					}
				}, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
					4 === a.readyState && t.setTimeout(function() {
						i && n()
					})
				}, i = i("abort");
				try {
					a.send(e.hasContent && e.data || null)
				} catch (o) {
					if (i) throw o
				}
			},
			abort: function() {
				i && i()
			}
		}
	}), p.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(t) {
				return p.globalEval(t), t
			}
		}
	}), p.ajaxPrefilter("script", function(t) {
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
	}), p.ajaxTransport("script", function(t) {
		var e, i;
		if (t.crossDomain) return {
			send: function(o, s) {
				e = p("<script>").prop({
					charset: t.scriptCharset,
					src: t.url
				}).on("load error", i = function(t) {
					e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type)
				}), n.head.appendChild(e[0])
			},
			abort: function() {
				i && i()
			}
		}
	});
	var He = [],
		De = /(=)\?(?=&|$)|\?\?/;
	p.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var t = He.pop() || p.expando + "_" + ue++;
			return this[t] = !0, t
		}
	}), p.ajaxPrefilter("json jsonp", function(e, i, n) {
		var o, s, r, a = !1 !== e.jsonp && (De.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && De.test(e.data) && "data");
		if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = p.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(De, "$1" + o) : !1 !== e.jsonp && (e.url += (de.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
			return r || p.error(o + " was not called"), r[0]
		}, e.dataTypes[0] = "json", s = t[o], t[o] = function() {
			r = arguments
		}, n.always(function() {
			void 0 === s ? p(t).removeProp(o) : t[o] = s, e[o] && (e.jsonpCallback = i.jsonpCallback, He.push(o)), r && p.isFunction(s) && s(r[0]), r = s = void 0
		}), "script"
	}), p.parseHTML = function(t, e, i) {
		if (!t || "string" != typeof t) return null;
		"boolean" == typeof e && (i = e, e = !1), e = e || n;
		var o = S.exec(t),
			s = !i && [];
		return o ? [e.createElement(o[1])] : (o = it([t], e, s), s && s.length && p(s).remove(), p.merge([], o.childNodes))
	};
	var Me = p.fn.load;

	function Ne(t) {
		return p.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
	}
	p.fn.load = function(t, e, i) {
		if ("string" != typeof t && Me) return Me.apply(this, arguments);
		var n, o, s, r = this,
			a = t.indexOf(" ");
		return -1 < a && (n = p.trim(t.slice(a)), t = t.slice(0, a)), p.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), 0 < r.length && p.ajax({
			url: t,
			type: o || "GET",
			dataType: "html",
			data: e
		}).done(function(t) {
			s = arguments, r.html(n ? p("<div>").append(p.parseHTML(t)).find(n) : t)
		}).always(i && function(t, e) {
			r.each(function() {
				i.apply(this, s || [t.responseText, e, t])
			})
		}), this
	}, p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
		p.fn[e] = function(t) {
			return this.on(e, t)
		}
	}), p.expr.filters.animated = function(t) {
		return p.grep(p.timers, function(e) {
			return t === e.elem
		}).length
	}, p.offset = {
		setOffset: function(t, e, i) {
			var n, o, s, r, a, l, c = p.css(t, "position"),
				u = p(t),
				d = {};
			"static" === c && (t.style.position = "relative"), a = u.offset(), s = p.css(t, "top"), l = p.css(t, "left"), ("absolute" === c || "fixed" === c) && -1 < (s + l).indexOf("auto") ? (r = (n = u.position()).top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), p.isFunction(e) && (e = e.call(t, i, p.extend({}, a))), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : u.css(d)
		}
	}, p.fn.extend({
		offset: function(t) {
			if (arguments.length) return void 0 === t ? this : this.each(function(e) {
				p.offset.setOffset(this, t, e)
			});
			var e, i, n = this[0],
				o = {
					top: 0,
					left: 0
				},
				s = n && n.ownerDocument;
			return s ? (e = s.documentElement, p.contains(e, n) ? (o = n.getBoundingClientRect(), i = Ne(s), {
				top: o.top + i.pageYOffset - e.clientTop,
				left: o.left + i.pageXOffset - e.clientLeft
			}) : o) : void 0
		},
		position: function() {
			if (this[0]) {
				var t, e, i = this[0],
					n = {
						top: 0,
						left: 0
					};
				return "fixed" === p.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), p.nodeName(t[0], "html") || (n = t.offset()), n.top += p.css(t[0], "borderTopWidth", !0), n.left += p.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - n.top - p.css(i, "marginTop", !0),
					left: e.left - n.left - p.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var t = this.offsetParent; t && "static" === p.css(t, "position");) t = t.offsetParent;
				return t || Pt
			})
		}
	}), p.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, e) {
		var i = "pageYOffset" === e;
		p.fn[t] = function(n) {
			return M(this, function(t, n, o) {
				var s = Ne(t);
				if (void 0 === o) return s ? s[e] : t[n];
				s ? s.scrollTo(i ? s.pageXOffset : o, i ? o : s.pageYOffset) : t[n] = o
			}, t, n, arguments.length)
		}
	}), p.each(["top", "left"], function(t, e) {
		p.cssHooks[e] = Ot(d.pixelPosition, function(t, i) {
			if (i) return i = Lt(t, e), Et.test(i) ? p(t).position()[e] + "px" : i
		})
	}), p.each({
		Height: "height",
		Width: "width"
	}, function(t, e) {
		p.each({
			padding: "inner" + t,
			content: e,
			"": "outer" + t
		}, function(i, n) {
			p.fn[n] = function(n, o) {
				var s = arguments.length && (i || "boolean" != typeof n),
					r = i || (!0 === n || !0 === o ? "margin" : "border");
				return M(this, function(e, i, n) {
					var o;
					return p.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? p.css(e, i, r) : p.style(e, i, n, r)
				}, e, s ? n : void 0, s, null)
			}
		})
	}), p.fn.extend({
		bind: function(t, e, i) {
			return this.on(t, null, e, i)
		},
		unbind: function(t, e) {
			return this.off(t, null, e)
		},
		delegate: function(t, e, i, n) {
			return this.on(e, t, i, n)
		},
		undelegate: function(t, e, i) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
		},
		size: function() {
			return this.length
		}
	}), p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return p
	});
	var je = t.jQuery,
		Ie = t.$;
	return p.noConflict = function(e) {
		return t.$ === p && (t.$ = Ie), e && t.jQuery === p && (t.jQuery = je), p
	}, e || (t.jQuery = t.$ = p), p
}),
function() {
	for (var t, e = function() {}, i = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], n = i.length, o = window.console = window.console || {}; n--;) o[t = i[n]] || (o[t] = e)
}(),
function(t, e, i) {
	function n(i, n) {
		for (var o in this.wrapper = "string" == typeof i ? e.querySelector(i) : i, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
				resizeScrollbars: !0,
				mouseWheelSpeed: 20,
				snapThreshold: .334,
				disablePointer: !a.hasPointer,
				disableTouch: a.hasPointer || !a.hasTouch,
				disableMouse: a.hasPointer || a.hasTouch,
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
				bindToWrapper: void 0 === t.onmousedown
			}, n) this.options[o] = n[o];
		this.translateZ = this.options.HWCompositing && a.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = a.hasTransition && this.options.useTransition, this.options.useTransform = a.hasTransform && this.options.useTransform, this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? a.ease[this.options.bounceEasing] || a.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, !0 === this.options.tap && (this.options.tap = "tap"), this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.directionY = this.directionX = this.y = this.x = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
	}

	function o(t, i, n) {
		var o = e.createElement("div"),
			s = e.createElement("div");
		return !0 === n && (o.style.cssText = "position:absolute;z-index:9999", s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), s.className = "iScrollIndicator", "h" == t ? (!0 === n && (o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", s.style.height = "100%"), o.className = "iScrollHorizontalScrollbar") : (!0 === n && (o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", s.style.width = "100%"), o.className = "iScrollVerticalScrollbar"), o.style.cssText += ";overflow:hidden", i || (o.style.pointerEvents = "none"), o.appendChild(s), o
	}

	function s(i, n) {
		for (var o in this.wrapper = "string" == typeof n.el ? e.querySelector(n.el) : n.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = i, this.options = {
				listenX: !0,
				listenY: !0,
				interactive: !1,
				resize: !0,
				defaultScrollbars: !1,
				shrink: !1,
				fade: !1,
				speedRatioX: 0,
				speedRatioY: 0
			}, n) this.options[o] = n[o];
		if (this.sizeRatioY = this.sizeRatioX = 1, this.maxPosY = this.maxPosX = 0, this.options.interactive && (this.options.disableTouch || (a.addEvent(this.indicator, "touchstart", this), a.addEvent(t, "touchend", this)), this.options.disablePointer || (a.addEvent(this.indicator, a.prefixPointerEvent("pointerdown"), this), a.addEvent(t, a.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (a.addEvent(this.indicator, "mousedown", this), a.addEvent(t, "mouseup", this))), this.options.fade) {
			this.wrapperStyle[a.style.transform] = this.scroller.translateZ;
			var s = a.style.transitionDuration;
			if (s) {
				this.wrapperStyle[s] = a.isBadAndroid ? "0.0001ms" : "0ms";
				var l = this;
				a.isBadAndroid && r(function() {
					"0.0001ms" === l.wrapperStyle[s] && (l.wrapperStyle[s] = "0s")
				}), this.wrapperStyle.opacity = "0"
			}
		}
	}
	var r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
			t.setTimeout(e, 1e3 / 60)
		},
		a = function() {
			function n(t) {
				return !1 !== r && ("" === r ? t : r + t.charAt(0).toUpperCase() + t.substr(1))
			}
			var o = {},
				s = e.createElement("div").style,
				r = function() {
					for (var t = ["t", "webkitT", "MozT", "msT", "OT"], e = 0, i = t.length; e < i; e++)
						if (t[e] + "ransform" in s) return t[e].substr(0, t[e].length - 1);
					return !1
				}();
			o.getTime = Date.now || function() {
				return (new Date).getTime()
			}, o.extend = function(t, e) {
				for (var i in e) t[i] = e[i]
			}, o.addEvent = function(t, e, i, n) {
				t.addEventListener(e, i, !!n)
			}, o.removeEvent = function(t, e, i, n) {
				t.removeEventListener(e, i, !!n)
			}, o.prefixPointerEvent = function(e) {
				return t.MSPointerEvent ? "MSPointer" + e.charAt(7).toUpperCase() + e.substr(8) : e
			}, o.momentum = function(t, e, n, o, s, r) {
				var a;
				return e = t - e, a = t + (n = i.abs(e) / n) * n / (2 * (r = void 0 === r ? 6e-4 : r)) * (e < 0 ? -1 : 1), r = n / r, a < o ? (a = s ? o - s / 2.5 * (n / 8) : o, r = (e = i.abs(a - t)) / n) : 0 < a && (a = s ? s / 2.5 * (n / 8) : 0, r = (e = i.abs(t) + a) / n), {
					destination: i.round(a),
					duration: r
				}
			};
			var a, l = n("transform");
			return o.extend(o, {
				hasTransform: !1 !== l,
				hasPerspective: n("perspective") in s,
				hasTouch: "ontouchstart" in t,
				hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
				hasTransition: n("transition") in s
			}), o.isBadAndroid = (a = t.navigator.appVersion, !(!/Android/.test(a) || /Chrome\/\d/.test(a) || (a = a.match(/Safari\/(\d+.\d)/)) && "object" == typeof a && 2 <= a.length && !(parseFloat(a[1]) < 535.19))), o.extend(o.style = {}, {
				transform: l,
				transitionTimingFunction: n("transitionTimingFunction"),
				transitionDuration: n("transitionDuration"),
				transitionDelay: n("transitionDelay"),
				transformOrigin: n("transformOrigin")
			}), o.hasClass = function(t, e) {
				return new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
			}, o.addClass = function(t, e) {
				if (!o.hasClass(t, e)) {
					var i = t.className.split(" ");
					i.push(e), t.className = i.join(" ")
				}
			}, o.removeClass = function(t, e) {
				o.hasClass(t, e) && (t.className = t.className.replace(new RegExp("(^|\\s)" + e + "(\\s|$)", "g"), " "))
			}, o.offset = function(t) {
				for (var e = -t.offsetLeft, i = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft, i -= t.offsetTop;
				return {
					left: e,
					top: i
				}
			}, o.preventDefaultException = function(t, e) {
				for (var i in e)
					if (e[i].test(t[i])) return !0;
				return !1
			}, o.extend(o.eventType = {}, {
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
			}), o.extend(o.ease = {}, {
				quadratic: {
					style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
					fn: function(t) {
						return t * (2 - t)
					}
				},
				circular: {
					style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
					fn: function(t) {
						return i.sqrt(1 - --t * t)
					}
				},
				back: {
					style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
					fn: function(t) {
						return --t * t * (5 * t + 4) + 1
					}
				},
				bounce: {
					style: "",
					fn: function(t) {
						return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
					}
				},
				elastic: {
					style: "",
					fn: function(t) {
						return 0 === t ? 0 : 1 == t ? 1 : .4 * i.pow(2, -10 * t) * i.sin(2 * (t - .055) * i.PI / .22) + 1
					}
				}
			}), o.tap = function(t, i) {
				var n = e.createEvent("Event");
				n.initEvent(i, !0, !0), n.pageX = t.pageX, n.pageY = t.pageY, t.target.dispatchEvent(n)
			}, o.click = function(i) {
				var n, o = i.target;
				/(SELECT|INPUT|TEXTAREA)/i.test(o.tagName) || ((n = e.createEvent(t.MouseEvent ? "MouseEvents" : "Event")).initEvent("click", !0, !0), n.view = i.view || t, n.detail = 1, n.screenX = o.screenX || 0, n.screenY = o.screenY || 0, n.clientX = o.clientX || 0, n.clientY = o.clientY || 0, n.ctrlKey = !!i.ctrlKey, n.altKey = !!i.altKey, n.shiftKey = !!i.shiftKey, n.metaKey = !!i.metaKey, n.button = 0, n.relatedTarget = null, n._constructed = !0, o.dispatchEvent(n))
			}, o
		}();
	n.prototype = {
		version: "5.2.0",
		_init: function() {
			this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
		},
		destroy: function() {
			this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy")
		},
		_transitionEnd: function(t) {
			t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
		},
		_start: function(t) {
			if (!(1 != a.eventType[t.type] && 0 !== (t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2) || !this.enabled || this.initiated && a.eventType[t.type] !== this.initiated)) {
				!this.options.preventDefault || a.isBadAndroid || a.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
				var e = t.touches ? t.touches[0] : t;
				this.initiated = a.eventType[t.type], this.moved = !1, this.directionLocked = this.directionY = this.directionX = this.distY = this.distX = 0, this.startTime = a.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, t = this.getComputedPosition(), this._translate(i.round(t.x), i.round(t.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = e.pageX, this.pointY = e.pageY, this._execEvent("beforeScrollStart")
			}
		},
		_move: function(t) {
			if (this.enabled && a.eventType[t.type] === this.initiated) {
				this.options.preventDefault && t.preventDefault();
				var e, n = t.touches ? t.touches[0] : t,
					o = n.pageX - this.pointX,
					s = n.pageY - this.pointY,
					r = a.getTime();
				if (this.pointX = n.pageX, this.pointY = n.pageY, this.distX += o, this.distY += s, n = i.abs(this.distX), e = i.abs(this.distY), !(300 < r - this.endTime && n < 10 && e < 10)) {
					if (this.directionLocked || this.options.freeScroll || (this.directionLocked = n > e + this.options.directionLockThreshold ? "h" : e >= n + this.options.directionLockThreshold ? "v" : "n"), "h" == this.directionLocked) {
						if ("vertical" == this.options.eventPassthrough) t.preventDefault();
						else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
						s = 0
					} else if ("v" == this.directionLocked) {
						if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
						else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
						o = 0
					}
					o = this.hasHorizontalScroll ? o : 0, s = this.hasVerticalScroll ? s : 0, t = this.x + o, n = this.y + s, (0 < t || t < this.maxScrollX) && (t = this.options.bounce ? this.x + o / 3 : 0 < t ? 0 : this.maxScrollX), (0 < n || n < this.maxScrollY) && (n = this.options.bounce ? this.y + s / 3 : 0 < n ? 0 : this.maxScrollY), this.directionX = 0 < o ? -1 : o < 0 ? 1 : 0, this.directionY = 0 < s ? -1 : s < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(t, n), 300 < r - this.startTime && (this.startTime = r, this.startX = this.x, this.startY = this.y)
				}
			}
		},
		_end: function(t) {
			if (this.enabled && a.eventType[t.type] === this.initiated) {
				var e, n;
				this.options.preventDefault && !a.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault(), n = a.getTime() - this.startTime;
				var o = i.round(this.x),
					s = i.round(this.y),
					r = i.abs(o - this.startX),
					l = i.abs(s - this.startY);
				e = 0;
				var c = "";
				this.initiated = this.isInTransition = 0, this.endTime = a.getTime(), this.resetPosition(this.options.bounceTime) || (this.scrollTo(o, s), this.moved ? this._events.flick && n < 200 && r < 100 && l < 100 ? this._execEvent("flick") : (this.options.momentum && n < 300 && (e = this.hasHorizontalScroll ? a.momentum(this.x, this.startX, n, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
					destination: o,
					duration: 0
				}, n = this.hasVerticalScroll ? a.momentum(this.y, this.startY, n, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
					destination: s,
					duration: 0
				}, o = e.destination, s = n.destination, e = i.max(e.duration, n.duration), this.isInTransition = 1), this.options.snap && (this.currentPage = c = this._nearestSnap(o, s), e = this.options.snapSpeed || i.max(i.max(i.min(i.abs(o - c.x), 1e3), i.min(i.abs(s - c.y), 1e3)), 300), o = c.x, s = c.y, this.directionY = this.directionX = 0, c = this.options.bounceEasing), o != this.x || s != this.y ? ((0 < o || o < this.maxScrollX || 0 < s || s < this.maxScrollY) && (c = a.ease.quadratic), this.scrollTo(o, s, e, c)) : this._execEvent("scrollEnd")) : (this.options.tap && a.tap(t, this.options.tap), this.options.click && a.click(t), this._execEvent("scrollCancel")))
			}
		},
		_resize: function() {
			var t = this;
			clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
				t.refresh()
			}, this.options.resizePolling)
		},
		resetPosition: function(t) {
			var e = this.x,
				i = this.y;
			return !this.hasHorizontalScroll || 0 < this.x ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX), !this.hasVerticalScroll || 0 < this.y ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY), (e != this.x || i != this.y) && (this.scrollTo(e, i, t || 0, this.options.bounceEasing), !0)
		},
		disable: function() {
			this.enabled = !1
		},
		enable: function() {
			this.enabled = !0
		},
		refresh: function() {
			this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.directionY = this.directionX = this.endTime = 0, this.wrapperOffset = a.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
		},
		on: function(t, e) {
			this._events[t] || (this._events[t] = []), this._events[t].push(e)
		},
		off: function(t, e) {
			if (this._events[t]) {
				var i = this._events[t].indexOf(e); - 1 < i && this._events[t].splice(i, 1)
			}
		},
		_execEvent: function(t) {
			if (this._events[t]) {
				var e = 0,
					i = this._events[t].length;
				if (i)
					for (; e < i; e++) this._events[t][e].apply(this, [].slice.call(arguments, 1))
			}
		},
		scrollBy: function(t, e, i, n) {
			t = this.x + t, e = this.y + e, this.scrollTo(t, e, i || 0, n)
		},
		scrollTo: function(t, e, i, n) {
			n = n || a.ease.circular, this.isInTransition = this.options.useTransition && 0 < i;
			var o = this.options.useTransition && n.style;
			!i || o ? (o && (this._transitionTimingFunction(n.style), this._transitionTime(i)), this._translate(t, e)) : this._animate(t, e, i, n.fn)
		},
		scrollToElement: function(t, e, n, o, s) {
			if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
				var r = a.offset(t);
				r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, !0 === n && (n = i.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), !0 === o && (o = i.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= n || 0, r.top -= o || 0, r.left = 0 < r.left ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = 0 < r.top ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top, e = null == e || "auto" === e ? i.max(i.abs(this.x - r.left), i.abs(this.y - r.top)) : e, this.scrollTo(r.left, r.top, e, s)
			}
		},
		_transitionTime: function(t) {
			if (this.options.useTransition) {
				t = t || 0;
				var e = a.style.transitionDuration;
				if (e) {
					if (this.scrollerStyle[e] = t + "ms", !t && a.isBadAndroid) {
						this.scrollerStyle[e] = "0.0001ms";
						var i = this;
						r(function() {
							"0.0001ms" === i.scrollerStyle[e] && (i.scrollerStyle[e] = "0s")
						})
					}
					if (this.indicators)
						for (var n = this.indicators.length; n--;) this.indicators[n].transitionTime(t)
				}
			}
		},
		_transitionTimingFunction: function(t) {
			if (this.scrollerStyle[a.style.transitionTimingFunction] = t, this.indicators)
				for (var e = this.indicators.length; e--;) this.indicators[e].transitionTimingFunction(t)
		},
		_translate: function(t, e) {
			if (this.options.useTransform ? this.scrollerStyle[a.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = i.round(t), e = i.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e, this.indicators)
				for (var n = this.indicators.length; n--;) this.indicators[n].updatePosition()
		},
		_initEvents: function(e) {
			e = e ? a.removeEvent : a.addEvent;
			var i = this.options.bindToWrapper ? this.wrapper : t;
			e(t, "orientationchange", this), e(t, "resize", this), this.options.click && e(this.wrapper, "click", this, !0), this.options.disableMouse || (e(this.wrapper, "mousedown", this), e(i, "mousemove", this), e(i, "mousecancel", this), e(i, "mouseup", this)), a.hasPointer && !this.options.disablePointer && (e(this.wrapper, a.prefixPointerEvent("pointerdown"), this), e(i, a.prefixPointerEvent("pointermove"), this), e(i, a.prefixPointerEvent("pointercancel"), this), e(i, a.prefixPointerEvent("pointerup"), this)), a.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(i, "touchmove", this), e(i, "touchcancel", this), e(i, "touchend", this)), e(this.scroller, "transitionend", this), e(this.scroller, "webkitTransitionEnd", this), e(this.scroller, "oTransitionEnd", this), e(this.scroller, "MSTransitionEnd", this)
		},
		getComputedPosition: function() {
			var e, i = t.getComputedStyle(this.scroller, null);
			return this.options.useTransform ? (e = +((i = i[a.style.transform].split(")")[0].split(", "))[12] || i[4]), i = +(i[13] || i[5])) : (e = +i.left.replace(/[^-\d.]/g, ""), i = +i.top.replace(/[^-\d.]/g, "")), {
				x: e,
				y: i
			}
		},
		_initIndicators: function() {
			function t(t) {
				if (a.indicators)
					for (var e = a.indicators.length; e--;) t.call(a.indicators[e])
			}
			var e, i = this.options.interactiveScrollbars,
				n = "string" != typeof this.options.scrollbars,
				r = [],
				a = this;
			for (this.indicators = [], this.options.scrollbars && (this.options.scrollY && (e = {
					el: o("v", i, this.options.scrollbars),
					interactive: i,
					defaultScrollbars: !0,
					customStyle: n,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenX: !1
				}, this.wrapper.appendChild(e.el), r.push(e)), this.options.scrollX && (e = {
					el: o("h", i, this.options.scrollbars),
					interactive: i,
					defaultScrollbars: !0,
					customStyle: n,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenY: !1
				}, this.wrapper.appendChild(e.el), r.push(e))), this.options.indicators && (r = r.concat(this.options.indicators)), i = r.length; i--;) this.indicators.push(new s(this, r[i]));
			this.options.fadeScrollbars && (this.on("scrollEnd", function() {
				t(function() {
					this.fade()
				})
			}), this.on("scrollCancel", function() {
				t(function() {
					this.fade()
				})
			}), this.on("scrollStart", function() {
				t(function() {
					this.fade(1)
				})
			}), this.on("beforeScrollStart", function() {
				t(function() {
					this.fade(1, !0)
				})
			})), this.on("refresh", function() {
				t(function() {
					this.refresh()
				})
			}), this.on("destroy", function() {
				t(function() {
					this.destroy()
				}), delete this.indicators
			})
		},
		_initWheel: function() {
			a.addEvent(this.wrapper, "wheel", this), a.addEvent(this.wrapper, "mousewheel", this), a.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
				clearTimeout(this.wheelTimeout), this.wheelTimeout = null, a.removeEvent(this.wrapper, "wheel", this), a.removeEvent(this.wrapper, "mousewheel", this), a.removeEvent(this.wrapper, "DOMMouseScroll", this)
			})
		},
		_wheel: function(t) {
			if (this.enabled) {
				var e, n, o, s = this;
				if (void 0 === this.wheelTimeout && s._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
						s.options.snap || s._execEvent("scrollEnd"), s.wheelTimeout = void 0
					}, 400), "deltaX" in t) 1 === t.deltaMode ? (e = -t.deltaX * this.options.mouseWheelSpeed, t = -t.deltaY * this.options.mouseWheelSpeed) : (e = -t.deltaX, t = -t.deltaY);
				else if ("wheelDeltaX" in t) e = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, t = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
				else if ("wheelDelta" in t) e = t = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
				else {
					if (!("detail" in t)) return;
					e = t = -t.detail / 3 * this.options.mouseWheelSpeed
				}
				e *= this.options.invertWheelDirection, t *= this.options.invertWheelDirection, this.hasVerticalScroll || (e = t, t = 0), this.options.snap ? (n = this.currentPage.pageX, o = this.currentPage.pageY, 0 < e ? n-- : e < 0 && n++, 0 < t ? o-- : t < 0 && o++, this.goToPage(n, o)) : (n = this.x + i.round(this.hasHorizontalScroll ? e : 0), o = this.y + i.round(this.hasVerticalScroll ? t : 0), this.directionX = 0 < e ? -1 : e < 0 ? 1 : 0, this.directionY = 0 < t ? -1 : t < 0 ? 1 : 0, 0 < n ? n = 0 : n < this.maxScrollX && (n = this.maxScrollX), 0 < o ? o = 0 : o < this.maxScrollY && (o = this.maxScrollY), this.scrollTo(n, o, 0))
			}
		},
		_initSnap: function() {
			this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
				var t, e, n, o, s, r = 0,
					a = 0,
					l = 0;
				e = this.options.snapStepX || this.wrapperWidth;
				var c = this.options.snapStepY || this.wrapperHeight;
				if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
					if (!0 === this.options.snap)
						for (n = i.round(e / 2), o = i.round(c / 2); l > -this.scrollerWidth;) {
							for (this.pages[r] = [], s = t = 0; s > -this.scrollerHeight;) this.pages[r][t] = {
								x: i.max(l, this.maxScrollX),
								y: i.max(s, this.maxScrollY),
								width: e,
								height: c,
								cx: l - n,
								cy: s - o
							}, s -= c, t++;
							l -= e, r++
						} else
							for (t = (c = this.options.snap).length, e = -1; r < t; r++)(0 === r || c[r].offsetLeft <= c[r - 1].offsetLeft) && (a = 0, e++), this.pages[a] || (this.pages[a] = []), l = i.max(-c[r].offsetLeft, this.maxScrollX), s = i.max(-c[r].offsetTop, this.maxScrollY), n = l - i.round(c[r].offsetWidth / 2), o = s - i.round(c[r].offsetHeight / 2), this.pages[a][e] = {
								x: l,
								y: s,
								width: c[r].offsetWidth,
								height: c[r].offsetHeight,
								cx: n,
								cy: o
							}, l > this.maxScrollX && a++;
					this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), 0 == this.options.snapThreshold % 1 ? this.snapThresholdY = this.snapThresholdX = this.options.snapThreshold : (this.snapThresholdX = i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
				}
			}), this.on("flick", function() {
				var t = this.options.snapSpeed || i.max(i.max(i.min(i.abs(this.x - this.startX), 1e3), i.min(i.abs(this.y - this.startY), 1e3)), 300);
				this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
			})
		},
		_nearestSnap: function(t, e) {
			if (!this.pages.length) return {
				x: 0,
				y: 0,
				pageX: 0,
				pageY: 0
			};
			var n = 0,
				o = this.pages.length,
				s = 0;
			if (i.abs(t - this.absStartX) < this.snapThresholdX && i.abs(e - this.absStartY) < this.snapThresholdY) return this.currentPage;
			for (0 < t ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), 0 < e ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY); n < o; n++)
				if (t >= this.pages[n][0].cx) {
					t = this.pages[n][0].x;
					break
				}
			for (o = this.pages[n].length; s < o; s++)
				if (e >= this.pages[0][s].cy) {
					e = this.pages[0][s].y;
					break
				}
			return n == this.currentPage.pageX && ((n += this.directionX) < 0 ? n = 0 : n >= this.pages.length && (n = this.pages.length - 1), t = this.pages[n][0].x), s == this.currentPage.pageY && ((s += this.directionY) < 0 ? s = 0 : s >= this.pages[0].length && (s = this.pages[0].length - 1), e = this.pages[0][s].y), {
				x: t,
				y: e,
				pageX: n,
				pageY: s
			}
		},
		goToPage: function(t, e, n, o) {
			o = o || this.options.bounceEasing, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), e >= this.pages[t].length ? e = this.pages[t].length - 1 : e < 0 && (e = 0);
			var s = this.pages[t][e].x,
				r = this.pages[t][e].y;
			n = void 0 === n ? this.options.snapSpeed || i.max(i.max(i.min(i.abs(s - this.x), 1e3), i.min(i.abs(r - this.y), 1e3)), 300) : n, this.currentPage = {
				x: s,
				y: r,
				pageX: t,
				pageY: e
			}, this.scrollTo(s, r, n, o)
		},
		next: function(t, e) {
			var i = this.currentPage.pageX,
				n = this.currentPage.pageY;
			++i >= this.pages.length && this.hasVerticalScroll && (i = 0, n++), this.goToPage(i, n, t, e)
		},
		prev: function(t, e) {
			var i = this.currentPage.pageX,
				n = this.currentPage.pageY;
			--i < 0 && this.hasVerticalScroll && (i = 0, n--), this.goToPage(i, n, t, e)
		},
		_initKeys: function(e) {
			var i;
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
				for (i in this.options.keyBindings) "string" == typeof this.options.keyBindings[i] && (this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0));
			else this.options.keyBindings = {};
			for (i in e) this.options.keyBindings[i] = this.options.keyBindings[i] || e[i];
			a.addEvent(t, "keydown", this), this.on("destroy", function() {
				a.removeEvent(t, "keydown", this)
			})
		},
		_key: function(t) {
			if (this.enabled) {
				var e, n = this.options.snap,
					o = n ? this.currentPage.pageX : this.x,
					s = n ? this.currentPage.pageY : this.y,
					r = a.getTime(),
					l = this.keyTime || 0;
				switch (this.options.useTransition && this.isInTransition && (e = this.getComputedPosition(), this._translate(i.round(e.x), i.round(e.y)), this.isInTransition = !1), this.keyAcceleration = r - l < 200 ? i.min(this.keyAcceleration + .25, 50) : 0, t.keyCode) {
					case this.options.keyBindings.pageUp:
						this.hasHorizontalScroll && !this.hasVerticalScroll ? o += n ? 1 : this.wrapperWidth : s += n ? 1 : this.wrapperHeight;
						break;
					case this.options.keyBindings.pageDown:
						this.hasHorizontalScroll && !this.hasVerticalScroll ? o -= n ? 1 : this.wrapperWidth : s -= n ? 1 : this.wrapperHeight;
						break;
					case this.options.keyBindings.end:
						o = n ? this.pages.length - 1 : this.maxScrollX, s = n ? this.pages[0].length - 1 : this.maxScrollY;
						break;
					case this.options.keyBindings.home:
						s = o = 0;
						break;
					case this.options.keyBindings.left:
						o += n ? -1 : 5 + this.keyAcceleration >> 0;
						break;
					case this.options.keyBindings.up:
						s += n ? 1 : 5 + this.keyAcceleration >> 0;
						break;
					case this.options.keyBindings.right:
						o -= n ? -1 : 5 + this.keyAcceleration >> 0;
						break;
					case this.options.keyBindings.down:
						s -= n ? 1 : 5 + this.keyAcceleration >> 0;
						break;
					default:
						return
				}
				n ? this.goToPage(o, s) : (0 < o ? this.keyAcceleration = o = 0 : o < this.maxScrollX && (o = this.maxScrollX, this.keyAcceleration = 0), 0 < s ? this.keyAcceleration = s = 0 : s < this.maxScrollY && (s = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(o, s, 0), this.keyTime = r)
			}
		},
		_animate: function(t, e, i, n) {
			var o = this,
				s = this.x,
				l = this.y,
				c = a.getTime(),
				u = c + i;
			this.isAnimating = !0,
				function d() {
					var h, p = a.getTime();
					u <= p ? (o.isAnimating = !1, o._translate(t, e), o.resetPosition(o.options.bounceTime) || o._execEvent("scrollEnd")) : (h = n(p = (p - c) / i), p = (t - s) * h + s, h = (e - l) * h + l, o._translate(p, h), o.isAnimating && r(d))
				}()
		},
		handleEvent: function(t) {
			switch (t.type) {
				case "touchstart":
				case "pointerdown":
				case "MSPointerDown":
				case "mousedown":
					this._start(t);
					break;
				case "touchmove":
				case "pointermove":
				case "MSPointerMove":
				case "mousemove":
					this._move(t);
					break;
				case "touchend":
				case "pointerup":
				case "MSPointerUp":
				case "mouseup":
				case "touchcancel":
				case "pointercancel":
				case "MSPointerCancel":
				case "mousecancel":
					this._end(t);
					break;
				case "orientationchange":
				case "resize":
					this._resize();
					break;
				case "transitionend":
				case "webkitTransitionEnd":
				case "oTransitionEnd":
				case "MSTransitionEnd":
					this._transitionEnd(t);
					break;
				case "wheel":
				case "DOMMouseScroll":
				case "mousewheel":
					this._wheel(t);
					break;
				case "keydown":
					this._key(t);
					break;
				case "click":
					this.enabled && !t._constructed && (t.preventDefault(), t.stopPropagation())
			}
		}
	}, s.prototype = {
		handleEvent: function(t) {
			switch (t.type) {
				case "touchstart":
				case "pointerdown":
				case "MSPointerDown":
				case "mousedown":
					this._start(t);
					break;
				case "touchmove":
				case "pointermove":
				case "MSPointerMove":
				case "mousemove":
					this._move(t);
					break;
				case "touchend":
				case "pointerup":
				case "MSPointerUp":
				case "mouseup":
				case "touchcancel":
				case "pointercancel":
				case "MSPointerCancel":
				case "mousecancel":
					this._end(t)
			}
		},
		destroy: function() {
			this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (a.removeEvent(this.indicator, "touchstart", this), a.removeEvent(this.indicator, a.prefixPointerEvent("pointerdown"), this), a.removeEvent(this.indicator, "mousedown", this), a.removeEvent(t, "touchmove", this), a.removeEvent(t, a.prefixPointerEvent("pointermove"), this), a.removeEvent(t, "mousemove", this), a.removeEvent(t, "touchend", this), a.removeEvent(t, a.prefixPointerEvent("pointerup"), this), a.removeEvent(t, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
		},
		_start: function(e) {
			var i = e.touches ? e.touches[0] : e;
			e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = i.pageX, this.lastPointY = i.pageY, this.startTime = a.getTime(), this.options.disableTouch || a.addEvent(t, "touchmove", this), this.options.disablePointer || a.addEvent(t, a.prefixPointerEvent("pointermove"), this), this.options.disableMouse || a.addEvent(t, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
		},
		_move: function(t) {
			var e, i, n = t.touches ? t.touches[0] : t;
			a.getTime(), this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, e = n.pageX - this.lastPointX, this.lastPointX = n.pageX, i = n.pageY - this.lastPointY, this.lastPointY = n.pageY, this._pos(this.x + e, this.y + i), t.preventDefault(), t.stopPropagation()
		},
		_end: function(e) {
			if (this.initiated) {
				if (this.initiated = !1, e.preventDefault(), e.stopPropagation(), a.removeEvent(t, "touchmove", this), a.removeEvent(t, a.prefixPointerEvent("pointermove"), this), a.removeEvent(t, "mousemove", this), this.scroller.options.snap) {
					e = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
					var n = this.options.snapSpeed || i.max(i.max(i.min(i.abs(this.scroller.x - e.x), 1e3), i.min(i.abs(this.scroller.y - e.y), 1e3)), 300);
					this.scroller.x == e.x && this.scroller.y == e.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = e, this.scroller.scrollTo(e.x, e.y, n, this.scroller.options.bounceEasing))
				}
				this.moved && this.scroller._execEvent("scrollEnd")
			}
		},
		transitionTime: function(t) {
			t = t || 0;
			var e = a.style.transitionDuration;
			if (e && (this.indicatorStyle[e] = t + "ms", !t && a.isBadAndroid)) {
				this.indicatorStyle[e] = "0.0001ms";
				var i = this;
				r(function() {
					"0.0001ms" === i.indicatorStyle[e] && (i.indicatorStyle[e] = "0s")
				})
			}
		},
		transitionTimingFunction: function(t) {
			this.indicatorStyle[a.style.transitionTimingFunction] = t
		},
		refresh: function() {
			this.transitionTime(), this.indicatorStyle.display = this.options.listenX && !this.options.listenY ? this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.scroller.hasVerticalScroll ? "block" : "none" : this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (a.addClass(this.wrapper, "iScrollBothScrollbars"), a.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (a.removeClass(this.wrapper, "iScrollBothScrollbars"), a.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px")), this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = i.max(i.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = 8 - this.indicatorWidth, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = i.max(i.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = 8 - this.indicatorHeight, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
		},
		updatePosition: function() {
			var t = this.options.listenX && i.round(this.sizeRatioX * this.scroller.x) || 0,
				e = this.options.listenY && i.round(this.sizeRatioY * this.scroller.y) || 0;
			this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = i.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = i.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), e < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = i.max(this.indicatorHeight + 3 * e, 8), this.indicatorStyle.height = this.height + "px"), e = this.minBoundaryY) : e > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = i.max(this.indicatorHeight - 3 * (e - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", e = this.maxPosY + this.indicatorHeight - this.height) : e = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = t, this.y = e, this.scroller.options.useTransform ? this.indicatorStyle[a.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = e + "px")
		},
		_pos: function(t, e) {
			t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX), e < 0 ? e = 0 : e > this.maxPosY && (e = this.maxPosY), t = this.options.listenX ? i.round(t / this.sizeRatioX) : this.scroller.x, e = this.options.listenY ? i.round(e / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, e)
		},
		fade: function(t, e) {
			if (!e || this.visible) {
				clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
				var i = t ? 0 : 300;
				this.wrapperStyle[a.style.transitionDuration] = (t ? 250 : 500) + "ms", this.fadeTimeout = setTimeout(function(t) {
					this.wrapperStyle.opacity = t, this.visible = +t
				}.bind(this, t ? "1" : "0"), i)
			}
		}
	}, n.utils = a, "undefined" != typeof module && module.exports ? module.exports = n : "function" == typeof define && define.amd ? define(function() {
		return n
	}) : t.IScroll = n
}(window, document, Math),
function() {
	"use strict";

	function t(e, n) {
		var o;
		if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = e, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !t.notNeeded(e)) {
			for (var s = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], r = 0, a = s.length; r < a; r++) this[s[r]] = l(this[s[r]], this);
			i && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, i, n) {
				var o = Node.prototype.removeEventListener;
				"click" === t ? o.call(e, t, i.hijacked || i, n) : o.call(e, t, i, n)
			}, e.addEventListener = function(t, i, n) {
				var o = Node.prototype.addEventListener;
				"click" === t ? o.call(e, t, i.hijacked || (i.hijacked = function(t) {
					t.propagationStopped || i(t)
				}), n) : o.call(e, t, i, n)
			}), "function" == typeof e.onclick && (o = e.onclick, e.addEventListener("click", function(t) {
				o(t)
			}, !1), e.onclick = null)
		}

		function l(t, e) {
			return function() {
				return t.apply(e, arguments)
			}
		}
	}
	var e = 0 <= navigator.userAgent.indexOf("Windows Phone"),
		i = 0 < navigator.userAgent.indexOf("Android") && !e,
		n = /iP(ad|hone|od)/.test(navigator.userAgent) && !e,
		o = n && /OS 4_\d(_\d)?/.test(navigator.userAgent),
		s = n && /OS [6-7]_\d/.test(navigator.userAgent),
		r = 0 < navigator.userAgent.indexOf("BB10");
	t.prototype.needsClick = function(t) {
		switch (t.nodeName.toLowerCase()) {
			case "button":
			case "select":
			case "textarea":
				if (t.disabled) return !0;
				break;
			case "input":
				if (n && "file" === t.type || t.disabled) return !0;
				break;
			case "label":
			case "iframe":
			case "video":
				return !0
		}
		return /\bneedsclick\b/.test(t.className)
	}, t.prototype.needsFocus = function(t) {
		switch (t.nodeName.toLowerCase()) {
			case "textarea":
				return !0;
			case "select":
				return !i;
			case "input":
				switch (t.type) {
					case "button":
					case "checkbox":
					case "file":
					case "image":
					case "radio":
					case "submit":
						return !1
				}
				return !t.disabled && !t.readOnly;
			default:
				return /\bneedsfocus\b/.test(t.className)
		}
	}, t.prototype.sendClick = function(t, e) {
		var i, n;
		document.activeElement && document.activeElement !== t && document.activeElement.blur(), n = e.changedTouches[0], (i = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, t.dispatchEvent(i)
	}, t.prototype.determineEventType = function(t) {
		return i && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
	}, t.prototype.focus = function(t) {
		var e;
		n && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
	}, t.prototype.updateScrollParent = function(t) {
		var e, i;
		if (!(e = t.fastClickScrollParent) || !e.contains(t)) {
			i = t;
			do {
				if (i.scrollHeight > i.offsetHeight) {
					e = i, t.fastClickScrollParent = i;
					break
				}
				i = i.parentElement
			} while (i)
		}
		e && (e.fastClickLastScrollTop = e.scrollTop)
	}, t.prototype.getTargetElementFromEventTarget = function(t) {
		return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
	}, t.prototype.onTouchStart = function(t) {
		var e, i, s;
		if (1 < t.targetTouches.length) return !0;
		if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], n) {
			if ((s = window.getSelection()).rangeCount && !s.isCollapsed) return !0;
			if (!o) {
				if (i.identifier && i.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
				this.lastTouchIdentifier = i.identifier, this.updateScrollParent(e)
			}
		}
		return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = i.pageX, this.touchStartY = i.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
	}, t.prototype.touchHasMoved = function(t) {
		var e = t.changedTouches[0],
			i = this.touchBoundary;
		return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i
	}, t.prototype.onTouchMove = function(t) {
		return this.trackingClick && (this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0
	}, t.prototype.findControl = function(t) {
		return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
	}, t.prototype.onTouchEnd = function(t) {
		var e, r, a, l, c, u = this.targetElement;
		if (!this.trackingClick) return !0;
		if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0;
		if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
		if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, r = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, s && (c = t.changedTouches[0], (u = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || u).fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (a = u.tagName.toLowerCase())) {
			if (e = this.findControl(u)) {
				if (this.focus(u), i) return !1;
				u = e
			}
		} else if (this.needsFocus(u)) return 100 < t.timeStamp - r || n && window.top !== window && "input" === a ? this.targetElement = null : (this.focus(u), this.sendClick(u, t), n && "select" === a || (this.targetElement = null, t.preventDefault())), !1;
		return !(!n || o || !(l = u.fastClickScrollParent) || l.fastClickLastScrollTop === l.scrollTop) || (this.needsClick(u) || (t.preventDefault(), this.sendClick(u, t)), !1)
	}, t.prototype.onTouchCancel = function() {
		this.trackingClick = !1, this.targetElement = null
	}, t.prototype.onMouse = function(t) {
		return !(this.targetElement && !t.forwardedTouchEvent && t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) && (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), 1))
	}, t.prototype.onClick = function(t) {
		var e;
		return this.trackingClick ? (this.targetElement = null, !(this.trackingClick = !1)) : "submit" === t.target.type && 0 === t.detail || ((e = this.onMouse(t)) || (this.targetElement = null), e)
	}, t.prototype.destroy = function() {
		var t = this.layer;
		i && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
	}, t.notNeeded = function(t) {
		var e, n, o;
		if (void 0 === window.ontouchstart) return !0;
		if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
			if (!i) return !0;
			if (e = document.querySelector("meta[name=viewport]")) {
				if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
				if (31 < n && document.documentElement.scrollWidth <= window.outerWidth) return !0
			}
		}
		if (r && 10 <= (o = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] && 3 <= o[2] && (e = document.querySelector("meta[name=viewport]"))) {
			if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
			if (document.documentElement.scrollWidth <= window.outerWidth) return !0
		}
		return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || !!(27 <= +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] && (e = document.querySelector("meta[name=viewport]")) && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || "none" === t.style.touchAction || "manipulation" === t.style.touchAction
	}, t.attach = function(e, i) {
		return new t(e, i)
	}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
		return t
	}) : "undefined" != typeof module && module.exports ? (module.exports = t.attach, module.exports.FastClick = t) : window.FastClick = t
}(),
function() {
	var t, e;
	t = function() {
		function t(t, e) {
			var i, n;
			if (this.options = {
					target: "instafeed",
					get: "popular",
					resolution: "thumbnail",
					sortBy: "none",
					links: !0,
					mock: !1,
					useHttp: !1
				}, "object" == typeof t)
				for (i in t) n = t[i], this.options[i] = n;
			this.context = null != e ? e : this, this.unique = this._genKey()
		}
		return t.prototype.hasNext = function() {
			return "string" == typeof this.context.nextUrl && 0 < this.context.nextUrl.length
		}, t.prototype.next = function() {
			return !!this.hasNext() && this.run(this.context.nextUrl)
		}, t.prototype.run = function(e) {
			var i, n;
			if ("string" != typeof this.options.clientId && "string" != typeof this.options.accessToken) throw new Error("Missing clientId or accessToken.");
			if ("string" != typeof this.options.accessToken && "string" != typeof this.options.clientId) throw new Error("Missing clientId or accessToken.");
			return null != this.options.before && "function" == typeof this.options.before && this.options.before.call(this), "undefined" != typeof document && null !== document && ((n = document.createElement("script")).id = "instafeed-fetcher", n.src = e || this._buildUrl(), document.getElementsByTagName("head")[0].appendChild(n), i = "instafeedCache" + this.unique, window[i] = new t(this.options, this), window[i].unique = this.unique), !0
		}, t.prototype.parse = function(t) {
			var e, i, n, o, s, r, a, l, c, u, d, h, p, f, v, m, g, y, w, b, x, T, S, k, C, E, $, A;
			if ("object" != typeof t) {
				if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "Invalid JSON data"), !1;
				throw new Error("Invalid JSON response")
			}
			if (200 !== t.meta.code) {
				if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, t.meta.error_message), !1;
				throw new Error("Error from Instagram: " + t.meta.error_message)
			}
			if (0 === t.data.length) {
				if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "No images were returned from Instagram"), !1;
				throw new Error("No images were returned from Instagram")
			}
			if (null != this.options.success && "function" == typeof this.options.success && this.options.success.call(this, t), this.context.nextUrl = "", null != t.pagination && (this.context.nextUrl = t.pagination.next_url), "none" !== this.options.sortBy) switch (C = "least" === (E = "random" === this.options.sortBy ? ["", "random"] : this.options.sortBy.split("-"))[0], E[1]) {
				case "random":
					t.data.sort(function() {
						return .5 - Math.random()
					});
					break;
				case "recent":
					t.data = this._sortBy(t.data, "created_time", C);
					break;
				case "liked":
					t.data = this._sortBy(t.data, "likes.count", C);
					break;
				case "commented":
					t.data = this._sortBy(t.data, "comments.count", C);
					break;
				default:
					throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
			}
			if ("undefined" != typeof document && null !== document && !1 === this.options.mock) {
				if (h = t.data, k = parseInt(this.options.limit, 10), null != this.options.limit && h.length > k && (h = h.slice(0, k)), r = document.createDocumentFragment(), null != this.options.filter && "function" == typeof this.options.filter && (h = this._filter(h, this.options.filter)), null != this.options.template && "string" == typeof this.options.template) {
					for (a = "", A = document.createElement("div"), l = 0, b = h.length; l < b; l++) {
						if ("object" != typeof(u = (c = h[l]).images[this.options.resolution])) throw s = "No image found for resolution: " + this.options.resolution + ".", new Error(s);
						m = u.width, v = "square", (f = u.height) < m && (v = "landscape"), m < f && (v = "portrait"), d = u.url, 0 <= window.location.protocol.indexOf("http") && !this.options.useHttp && (d = d.replace(/https?:\/\//, "//")), a += this._makeTemplate(this.options.template, {
							model: c,
							id: c.id,
							link: c.link,
							type: c.type,
							image: d,
							width: m,
							height: f,
							orientation: v,
							caption: this._getObjectProperty(c, "caption.text"),
							likes: c.likes.count,
							comments: c.comments.count,
							location: this._getObjectProperty(c, "location.name")
						})
					}
					for (A.innerHTML = a, o = [], n = 0, i = A.childNodes.length; n < i;) o.push(A.childNodes[n]), n += 1;
					for (y = 0, x = o.length; y < x; y++) S = o[y], r.appendChild(S)
				} else
					for (w = 0, T = h.length; w < T; w++) {
						if (c = h[w], p = document.createElement("img"), "object" != typeof(u = c.images[this.options.resolution])) throw s = "No image found for resolution: " + this.options.resolution + ".", new Error(s);
						d = u.url, 0 <= window.location.protocol.indexOf("http") && !this.options.useHttp && (d = d.replace(/https?:\/\//, "//")), p.src = d, !0 === this.options.links ? ((e = document.createElement("a")).href = c.link, e.appendChild(p), r.appendChild(e)) : r.appendChild(p)
					}
				if ("string" == typeof($ = this.options.target) && ($ = document.getElementById($)), null == $) throw s = 'No element with id="' + this.options.target + '" on page.', new Error(s);
				$.appendChild(r), document.getElementsByTagName("head")[0].removeChild(document.getElementById("instafeed-fetcher")), g = "instafeedCache" + this.unique, window[g] = void 0;
				try {
					delete window[g]
				} catch (t) {}
			}
			return null != this.options.after && "function" == typeof this.options.after && this.options.after.call(this), !0
		}, t.prototype._buildUrl = function() {
			var t, e;
			switch (this.options.get) {
				case "popular":
					t = "media/popular";
					break;
				case "tagged":
					if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
					t = "tags/" + this.options.tagName + "/media/recent";
					break;
				case "location":
					if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
					t = "locations/" + this.options.locationId + "/media/recent";
					break;
				case "user":
					if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
					t = "users/" + this.options.userId + "/media/recent";
					break;
				default:
					throw new Error("Invalid option for get: '" + this.options.get + "'.")
			}
			return e = "https://api.instagram.com/v1/" + t, null != this.options.accessToken ? e += "?access_token=" + this.options.accessToken : e += "?client_id=" + this.options.clientId, null != this.options.limit && (e += "&count=" + this.options.limit), e + "&callback=instafeedCache" + this.unique + ".parse"
		}, t.prototype._genKey = function() {
			var t;
			return "" + (t = function() {
				return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
			})() + t() + t() + t()
		}, t.prototype._makeTemplate = function(t, e) {
			var i, n, o, s, r;
			for (n = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, i = t; n.test(i);) s = i.match(n)[1], r = null != (o = this._getObjectProperty(e, s)) ? o : "", i = i.replace(n, function() {
				return "" + r
			});
			return i
		}, t.prototype._getObjectProperty = function(t, e) {
			var i, n;
			for (n = (e = e.replace(/\[(\w+)\]/g, ".$1")).split("."); n.length;) {
				if (i = n.shift(), !(null != t && i in t)) return null;
				t = t[i]
			}
			return t
		}, t.prototype._sortBy = function(t, e, i) {
			var n;
			return n = function(t, n) {
				var o, s;
				return o = this._getObjectProperty(t, e), s = this._getObjectProperty(n, e), i ? s < o ? 1 : -1 : o < s ? 1 : -1
			}, t.sort(n.bind(this)), t
		}, t.prototype._filter = function(t, e) {
			var i, n, o, s;
			for (i = [], n = function(t) {
					if (e(t)) return i.push(t)
				}, o = 0, s = t.length; o < s; o++) n(t[o]);
			return i
		}, t
	}(), e = function() {
		return t
	}, "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : this.Instafeed = e()
}.call(this),
	function(t) {
		"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
	}(function(t) {
		var e = function(i, n) {
			this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, this.dataOptions(), n), this.init()
		};
		e.DEFAULTS = {
			from: 0,
			to: 0,
			speed: 1e3,
			refreshInterval: 100,
			decimals: 0,
			formatter: function(t, e) {
				return t.toFixed(e.decimals)
			},
			onUpdate: null,
			onComplete: null
		}, e.prototype.init = function() {
			this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
		}, e.prototype.dataOptions = function() {
			var t = {
					from: this.$element.data("from"),
					to: this.$element.data("to"),
					speed: this.$element.data("speed"),
					refreshInterval: this.$element.data("refresh-interval"),
					decimals: this.$element.data("decimals")
				},
				e = Object.keys(t);
			for (var i in e) {
				var n = e[i];
				void 0 === t[n] && delete t[n]
			}
			return t
		}, e.prototype.update = function() {
			this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
		}, e.prototype.render = function() {
			var t = this.options.formatter.call(this.$element, this.value, this.options);
			this.$element.text(t)
		}, e.prototype.restart = function() {
			this.stop(), this.init(), this.start()
		}, e.prototype.start = function() {
			this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
		}, e.prototype.stop = function() {
			this.interval && clearInterval(this.interval)
		}, e.prototype.toggle = function() {
			this.interval ? this.stop() : this.start()
		}, t.fn.countTo = function(i) {
			return this.each(function() {
				var n = t(this),
					o = n.data("countTo"),
					s = "object" == typeof i ? i : {},
					r = "string" == typeof i ? i : "start";
				(!o || "object" == typeof i) && (o && o.stop(), n.data("countTo", o = new e(this, s))), o[r].call(o)
			})
		}
	}),
	function(t, e) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], function(i) {
			return e(i, t, t.document, t.Math)
		}) : "object" == typeof exports && exports ? module.exports = e(require("jquery"), t, t.document, t.Math) : e(jQuery, t, t.document, t.Math)
	}("undefined" != typeof window ? window : this, function(t, e, i, n, o) {
		"use strict";
		var s = "fullpage-wrapper",
			r = "." + s,
			a = "fp-scrollable",
			l = "." + a,
			c = "fp-responsive",
			u = "fp-notransition",
			d = "fp-destroyed",
			h = "fp-enabled",
			p = "fp-viewing",
			f = "active",
			v = "." + f,
			m = "fp-completely",
			g = "." + m,
			y = "fp-section",
			w = "." + y,
			b = w + v,
			x = w + ":first",
			T = w + ":last",
			S = "fp-tableCell",
			k = "." + S,
			C = "fp-auto-height",
			E = "fp-normal-scroll",
			$ = "#fp-nav",
			A = "fp-tooltip",
			P = "fp-slide",
			L = "." + P,
			O = L + v,
			H = "fp-slides",
			D = "." + H,
			M = "fp-slidesContainer",
			N = "." + M,
			j = "fp-table",
			I = "fp-slidesNav",
			q = "." + I,
			z = q + " a",
			W = "fp-controlArrow",
			_ = "." + W,
			X = "fp-prev",
			R = W + " " + X,
			Y = _ + "." + X,
			F = _ + ".fp-next",
			B = t(e),
			U = t(i),
			V = {
				scrollbars: !0,
				mouseWheel: !0,
				hideScrollbars: !1,
				fadeScrollbars: !1,
				disableMouse: !0,
				interactiveScrollbars: !0
			};
		t.fn.fullpage = function(a) {
			function l(e, i) {
				e || ie(0), se("autoScrolling", e, i);
				var n = t(b);
				a.autoScrolling && !a.scrollBar ? (le.css({
					overflow: "hidden",
					height: "100%"
				}), W(Le.recordHistory, "internal"), ge.css({
					"-ms-touch-action": "none",
					"touch-action": "none"
				}), n.length && ie(n.position().top)) : (le.css({
					overflow: "visible",
					height: "initial"
				}), W(!1, "internal"), ge.css({
					"-ms-touch-action": "",
					"touch-action": ""
				}), n.length && le.scrollTop(n.position().top))
			}

			function W(t, e) {
				se("recordHistory", t, e)
			}

			function K(t, e) {
				se("scrollingSpeed", t, e)
			}

			function G(t, e) {
				se("fitToSection", t, e)
			}

			function J(t) {
				t ? (function() {
					var t, n = "";
					e.addEventListener ? t = "addEventListener" : (t = "attachEvent", n = "on");
					var s = "onwheel" in i.createElement("div") ? "wheel" : i.onmousewheel !== o ? "mousewheel" : "DOMMouseScroll";
					"DOMMouseScroll" == s ? i[t](n + "MozMousePixelScroll", wt, !1) : i[t](n + s, wt, !1)
				}(), ge.on("mousedown", Ot).on("mouseup", Ht)) : (i.addEventListener ? (i.removeEventListener("mousewheel", wt, !1), i.removeEventListener("wheel", wt, !1), i.removeEventListener("MozMousePixelScroll", wt, !1)) : i.detachEvent("onmousewheel", wt), ge.off("mousedown", Ot).off("mouseup", Ht))
			}

			function Z(e, i) {
				void 0 !== i ? (i = i.replace(/ /g, "").split(","), t.each(i, function(t, i) {
					oe(e, i, "m")
				})) : e ? (J(!0), function() {
					if (ve || me) {
						var e = Zt();
						a.autoScrolling && ce.off("touchmove " + e.move).on("touchmove " + e.move, pt), t(r).off("touchstart " + e.down).on("touchstart " + e.down, gt).off("touchmove " + e.move).on("touchmove " + e.move, ft)
					}
				}()) : (J(!1), function() {
					if (ve || me) {
						var e = Zt();
						t(r).off("touchstart " + e.down).off("touchmove " + e.move)
					}
				}())
			}

			function tt(e, i) {
				void 0 !== i ? (i = i.replace(/ /g, "").split(","), t.each(i, function(t, i) {
					oe(e, i, "k")
				})) : a.keyboardScrolling = e
			}

			function et() {
				var e = t(b).prev(w);
				e.length || !a.loopTop && !a.continuousVertical || (e = t(w).last()), e.length && Tt(e, null, !0)
			}

			function it() {
				var e = t(b).next(w);
				e.length || !a.loopBottom && !a.continuousVertical || (e = t(w).first()), e.length && Tt(e, null, !1)
			}

			function nt(t, e) {
				K(0, "internal"), ot(t, e), K(Le.scrollingSpeed, "internal")
			}

			function ot(t, e) {
				var i = Bt(t);
				void 0 !== e ? Ut(t, e) : 0 < i.length && Tt(i)
			}

			function st(t) {
				bt("right", t)
			}

			function rt(t) {
				bt("left", t)
			}

			function at(e) {
				if (!ge.hasClass(d)) {
					we = !0, ye = B.height(), t(w).each(function() {
						var e = t(this).find(D),
							i = t(this).find(L);
						a.verticalCentered && t(this).find(k).css("height", Yt(t(this)) + "px"), t(this).css("height", ye + "px"), a.scrollOverflow && (i.length ? i.each(function() {
							Xt(t(this))
						}) : Xt(t(this))), 1 < i.length && Mt(e, e.find(O))
					});
					var i = t(b).index(w);
					i && nt(i + 1), we = !1, t.isFunction(a.afterResize) && e && a.afterResize.call(ge), t.isFunction(a.afterReBuild) && !e && a.afterReBuild.call(ge)
				}
			}

			function lt(e) {
				var i = ce.hasClass(c);
				e ? i || (l(!1, "internal"), G(!1, "internal"), t($).hide(), ce.addClass(c), t.isFunction(a.afterResponsive) && a.afterResponsive.call(ge, e)) : i && (l(Le.autoScrolling, "internal"), G(Le.autoScrolling, "internal"), t($).show(), ce.removeClass(c), t.isFunction(a.afterResponsive) && a.afterResponsive.call(ge, e))
			}

			function ct() {
				t(w).each(function() {
					var e = t(this).find(L);
					e.length ? e.each(function() {
						Xt(t(this))
					}) : Xt(t(this))
				}), ut()
			}

			function ut() {
				var e = t(b);
				e.addClass(m), a.scrollOverflowHandler.afterRender && a.scrollOverflowHandler.afterRender(e), kt(e), Ct(e), a.scrollOverflowHandler.afterLoad(), t.isFunction(a.afterLoad) && a.afterLoad.call(e, e.data("anchor"), e.index(w) + 1), t.isFunction(a.afterRender) && a.afterRender.call(ge)
			}

			function dt() {
				var e, n, o, s, r, l;
				if (!a.autoScrolling || a.scrollBar) {
					var c = B.scrollTop(),
						u = (l = He < (r = c) ? "down" : "up", qe = He = r, l),
						d = 0,
						h = c + B.height() / 2,
						p = ce.height() - B.height() === c,
						v = i.querySelectorAll(w);
					if (p) d = v.length - 1;
					else if (c)
						for (var g = 0; g < v.length; ++g) v[g].offsetTop <= h && (d = g);
					else d = 0;
					if (n = u, s = (o = t(b).position().top) + B.height(), ("up" == n ? s >= B.scrollTop() + B.height() : o <= B.scrollTop()) && (t(b).hasClass(m) || t(b).addClass(m).siblings().removeClass(m)), !(e = t(v).eq(d)).hasClass(f)) {
						Oe = !0;
						var y, x, T = t(b),
							S = T.index(w) + 1,
							k = _t(e),
							C = e.data("anchor"),
							E = e.index(w) + 1,
							$ = e.find(O);
						$.length && (x = $.data("anchor"), y = $.index()), xe && (e.addClass(f).siblings().removeClass(f), t.isFunction(a.onLeave) && a.onLeave.call(T, S, E, k), t.isFunction(a.afterLoad) && a.afterLoad.call(e, C, E), $t(T), kt(e), Ct(e), Wt(C, E - 1), a.anchors.length && (de = C), Qt(y, x, C, E)), clearTimeout($e), $e = setTimeout(function() {
							Oe = !1
						}, 100)
					}
					a.fitToSection && (clearTimeout(Ae), Ae = setTimeout(function() {
						xe && a.fitToSection && (t(b).is(e) && (we = !0), Tt(t(b)), we = !1)
					}, a.fitToSectionDelay))
				}
			}

			function ht(t, e) {
				if (Se.m[t]) {
					var i = "down" === t ? "bottom" : "top",
						n = "down" === t ? it : et;
					if (0 < e.length) {
						if (!a.scrollOverflowHandler.isScrolled(i, e)) return !0;
						n()
					} else n()
				}
			}

			function pt(t) {
				var e = t.originalEvent;
				!vt(t.target) && a.autoScrolling && mt(e) && t.preventDefault()
			}

			function ft(e) {
				var i = e.originalEvent,
					o = t(i.target).closest(w);
				if (!vt(e.target) && mt(i)) {
					a.autoScrolling && e.preventDefault();
					var s = a.scrollOverflowHandler.scrollable(o),
						r = te(i);
					Ne = r.y, je = r.x, o.find(D).length && n.abs(Me - je) > n.abs(De - Ne) ? !fe && n.abs(Me - je) > B.outerWidth() / 100 * a.touchSensitivity && (je < Me ? Se.m.right && st(o) : Se.m.left && rt(o)) : a.autoScrolling && xe && n.abs(De - Ne) > B.height() / 100 * a.touchSensitivity && (Ne < De ? ht("down", s) : De < Ne && ht("up", s))
				}
			}

			function vt(e, i) {
				i = i || 0;
				var n = t(e).parent();
				return !!(i < a.normalScrollElementTouchThreshold && n.is(a.normalScrollElements)) || i != a.normalScrollElementTouchThreshold && vt(n, ++i)
			}

			function mt(t) {
				return void 0 === t.pointerType || "mouse" != t.pointerType
			}

			function gt(t) {
				var e = t.originalEvent;
				if (a.fitToSection && le.stop(), mt(e)) {
					var i = te(e);
					De = i.y, Me = i.x
				}
			}

			function yt(t, e) {
				for (var i = 0, o = t.slice(n.max(t.length - e, 1)), s = 0; s < o.length; s++) i += o[s];
				return n.ceil(i / e)
			}

			function wt(i) {
				var o = (new Date).getTime(),
					s = t(g).hasClass(E);
				if (a.autoScrolling && !pe && !s) {
					var r = (i = i || e.event).wheelDelta || -i.deltaY || -i.detail,
						l = n.max(-1, n.min(1, r)),
						c = void 0 !== i.wheelDeltaX || void 0 !== i.deltaX,
						u = n.abs(i.wheelDeltaX) < n.abs(i.wheelDelta) || n.abs(i.deltaX) < n.abs(i.deltaY) || !c;
					149 < Te.length && Te.shift(), Te.push(n.abs(r)), a.scrollBar && (i.preventDefault ? i.preventDefault() : i.returnValue = !1);
					var d = t(b),
						h = a.scrollOverflowHandler.scrollable(d),
						p = o - Ie;
					if (Ie = o, 200 < p && (Te = []), xe) {
						var f = yt(Te, 10);
						yt(Te, 70) <= f && u && ht(l < 0 ? "down" : "up", h)
					}
					return !1
				}
				a.fitToSection && le.stop()
			}

			function bt(e, i) {
				var n = (void 0 === i ? t(b) : i).find(D),
					o = n.find(L).length;
				if (!(!n.length || fe || o < 2)) {
					var s = n.find(O),
						r = null;
					if (!(r = "left" === e ? s.prev(L) : s.next(L)).length) {
						if (!a.loopHorizontal) return;
						r = "left" === e ? s.siblings(":last") : s.siblings(":first")
					}
					fe = !0, Mt(n, r, e)
				}
			}

			function xt() {
				t(O).each(function() {
					ee(t(this), "internal")
				})
			}

			function Tt(e, i, o) {
				if (void 0 !== e) {
					var s, l, c = {
						element: e,
						callback: i,
						isMovementUp: o,
						dtop: (h = (d = e).position(), p = h.top, v = h.top > qe, m = p - ye + d.outerHeight(), g = a.bigSectionsDestination, d.outerHeight() > ye ? (!v && !g || "bottom" === g) && (p = m) : (v || we && d.is(":last-child")) && (p = m), qe = p),
						yMovement: _t(e),
						anchorLink: e.data("anchor"),
						sectionIndex: e.index(w),
						activeSlide: e.find(O),
						activeSection: t(b),
						leavingSection: t(b).index(w) + 1,
						localIsResizing: we
					};
					c.activeSection.is(e) && !we || a.scrollBar && B.scrollTop() === c.dtop && !e.hasClass(C) || (c.activeSlide.length && (s = c.activeSlide.data("anchor"), l = c.activeSlide.index()), a.autoScrolling && a.continuousVertical && void 0 !== c.isMovementUp && (!c.isMovementUp && "up" == c.yMovement || c.isMovementUp && "down" == c.yMovement) && ((u = c).isMovementUp ? t(b).before(u.activeSection.nextAll(w)) : t(b).after(u.activeSection.prevAll(w).get().reverse()), ie(t(b).position().top), xt(), u.wrapAroundElements = u.activeSection, u.dtop = u.element.position().top, u.yMovement = _t(u.element), c = u), (!t.isFunction(a.onLeave) || c.localIsResizing || !1 !== a.onLeave.call(c.activeSection, c.leavingSection, c.sectionIndex + 1, c.yMovement)) && ($t(c.activeSection), a.scrollOverflowHandler.beforeLeave(), e.addClass(f).siblings().removeClass(f), kt(e), a.scrollOverflowHandler.onLeave(), xe = !1, Qt(l, s, c.anchorLink, c.sectionIndex), function(e) {
						if (a.css3 && a.autoScrolling && !a.scrollBar) {
							Ft("translate3d(0px, -" + n.round(e.dtop) + "px, 0px)", !0), a.scrollingSpeed ? (clearTimeout(Ce), Ce = setTimeout(function() {
								St(e)
							}, a.scrollingSpeed)) : St(e)
						} else {
							var i = (o = e, s = {}, a.autoScrolling && !a.scrollBar ? (s.options = {
								top: -o.dtop
							}, s.element = r) : (s.options = {
								scrollTop: o.dtop
							}, s.element = "html, body"), s);
							t(i.element).animate(i.options, a.scrollingSpeed, a.easing).promise().done(function() {
								a.scrollBar ? setTimeout(function() {
									St(e)
								}, 30) : St(e)
							})
						}
						var o, s
					}(c), de = c.anchorLink, Wt(c.anchorLink, c.sectionIndex)))
				}
				var u, d, h, p, v, m, g
			}

			function St(e) {
				var i;
				(i = e).wrapAroundElements && i.wrapAroundElements.length && (i.isMovementUp ? t(x).before(i.wrapAroundElements) : t(T).after(i.wrapAroundElements), ie(t(b).position().top), xt()), t.isFunction(a.afterLoad) && !e.localIsResizing && a.afterLoad.call(e.element, e.anchorLink, e.sectionIndex + 1), a.scrollOverflowHandler.afterLoad(), e.localIsResizing || Ct(e.element), e.element.addClass(m).siblings().removeClass(m), xe = !0, t.isFunction(e.callback) && e.callback.call(this)
			}

			function kt(e) {
				var i;
				a.lazyLoading && At(e).find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
					(i = t(this)).attr("src", i.data("src")), i.removeAttr("data-src"), i.is("source") && i.closest("video").get(0).load()
				})
			}

			function Ct(e) {
				var i = At(e);
				i.find("video, audio").each(function() {
					var e = t(this).get(0);
					e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
				}), i.find('iframe[src*="youtube.com/embed/"]').each(function() {
					var e = t(this).get(0);
					e.hasAttribute("data-autoplay") && Et(e), e.onload = function() {
						e.hasAttribute("data-autoplay") && Et(e)
					}
				})
			}

			function Et(t) {
				t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
			}

			function $t(e) {
				var i = At(e);
				i.find("video, audio").each(function() {
					var e = t(this).get(0);
					e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
				}), i.find('iframe[src*="youtube.com/embed/"]').each(function() {
					var e = t(this).get(0);
					/youtube\.com\/embed\//.test(t(this).attr("src")) && !e.hasAttribute("data-keepplaying") && t(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
				})
			}

			function At(e) {
				var i = e.find(O);
				return i.length && (e = t(i)), e
			}

			function Pt() {
				var t = e.location.hash.replace("#", "").split("/"),
					i = decodeURIComponent(t[0]),
					n = decodeURIComponent(t[1]);
				i && (a.animateAnchor ? Ut(i, n) : nt(i, n))
			}

			function Lt() {
				if (!Oe && !a.lockAnchors) {
					var t = e.location.hash.replace("#", "").split("/"),
						i = decodeURIComponent(t[0]),
						n = decodeURIComponent(t[1]),
						o = void 0 === de,
						s = void 0 === de && void 0 === n && !fe;
					i.length && (i && i !== de && !o || s || !fe && he != n) && Ut(i, n)
				}
			}

			function Ot(t) {
				2 == t.which && (ze = t.pageY, ge.on("mousemove", Dt))
			}

			function Ht(t) {
				2 == t.which && ge.off("mousemove")
			}

			function Dt(t) {
				xe && (t.pageY < ze && Se.m.up ? et() : t.pageY > ze && Se.m.down && it()), ze = t.pageY
			}

			function Mt(e, i, o) {
				var s, r, l = e.closest(w),
					c = {
						slides: e,
						destiny: i,
						direction: o,
						destinyPos: i.position(),
						slideIndex: i.index(),
						section: l,
						sectionIndex: l.index(w),
						anchorLink: l.data("anchor"),
						slidesNav: l.find(q),
						slideAnchor: Gt(i),
						prevSlide: l.find(O),
						prevSlideIndex: l.find(O).index(),
						localIsResizing: we
					};
				return c.xMovement = (s = c.prevSlideIndex) == (r = c.slideIndex) ? "none" : r < s ? "left" : "right", c.localIsResizing || (xe = !1), a.onSlideLeave && !c.localIsResizing && "none" !== c.xMovement && t.isFunction(a.onSlideLeave) && !1 === a.onSlideLeave.call(c.prevSlide, c.anchorLink, c.sectionIndex + 1, c.prevSlideIndex, c.xMovement, c.slideIndex) ? void(fe = !1) : (i.addClass(f).siblings().removeClass(f), c.localIsResizing || ($t(c.prevSlide), kt(i)), !a.loopHorizontal && a.controlArrows && (l.find(Y).toggle(0 !== c.slideIndex), l.find(F).toggle(!i.is(":last-child"))), l.hasClass(f) && Qt(c.slideIndex, c.slideAnchor, c.anchorLink, c.sectionIndex), void
					function(t, e, i) {
						var o = e.destinyPos;
						if (a.css3) {
							var s = "translate3d(-" + n.round(o.left) + "px, 0px, 0px)";
							qt(t.find(N)).css(ne(s)), Ee = setTimeout(function() {
								Nt(e)
							}, a.scrollingSpeed, a.easing)
						} else t.animate({
							scrollLeft: n.round(o.left)
						}, a.scrollingSpeed, a.easing, function() {
							Nt(e)
						})
					}(e, c))
			}

			function Nt(e) {
				var i, n;
				i = e.slidesNav, n = e.slideIndex, i.find(v).removeClass(f), i.find("li").eq(n).find("a").addClass(f), e.localIsResizing || (t.isFunction(a.afterSlideLoad) && a.afterSlideLoad.call(e.destiny, e.anchorLink, e.sectionIndex + 1, e.slideAnchor, e.slideIndex), xe = !0, Ct(e.destiny)), fe = !1
			}

			function jt() {
				if (It(), ve) {
					var e = t(i.activeElement);
					if (!e.is("textarea") && !e.is("input") && !e.is("select")) {
						var o = B.height();
						n.abs(o - We) > 20 * n.max(We, o) / 100 && (at(!0), We = o)
					}
				} else clearTimeout(ke), ke = setTimeout(function() {
					at(!0)
				}, 350)
			}

			function It() {
				var t = a.responsive || a.responsiveWidth,
					e = a.responsiveHeight,
					i = t && B.outerWidth() < t,
					n = e && B.height() < e;
				t && e ? lt(i || n) : t ? lt(i) : e && lt(n)
			}

			function qt(t) {
				var e = "all " + a.scrollingSpeed + "ms " + a.easingcss3;
				return t.removeClass(u), t.css({
					"-webkit-transition": e,
					transition: e
				})
			}

			function zt(t) {
				return t.addClass(u)
			}

			function Wt(e, i) {
				var n, o, s;
				s = e, a.menu && (t(a.menu).find(v).removeClass(f), t(a.menu).find('[data-menuanchor="' + s + '"]').addClass(f)), n = e, o = i, a.navigation && (t($).find(v).removeClass(f), n ? t($).find('a[href="#' + n + '"]').addClass(f) : t($).find("li").eq(o).find("a").addClass(f))
			}

			function _t(e) {
				var i = t(b).index(w),
					n = e.index(w);
				return i == n ? "none" : n < i ? "up" : "down"
			}

			function Xt(t) {
				if (!t.hasClass("fp-noscroll")) {
					t.css("overflow", "hidden");
					var e, i = a.scrollOverflowHandler,
						n = i.wrapContent(),
						o = t.closest(w),
						s = i.scrollable(t);
					s.length ? e = i.scrollHeight(t) : (e = t.get(0).scrollHeight, a.verticalCentered && (e = t.find(k).get(0).scrollHeight));
					var r = ye - parseInt(o.css("padding-bottom")) - parseInt(o.css("padding-top"));
					r < e ? s.length ? i.update(t, r) : (a.verticalCentered ? t.find(k).wrapInner(n) : t.wrapInner(n), i.create(t, r)) : i.remove(t), t.css("overflow", "")
				}
			}

			function Rt(t) {
				t.hasClass(j) || t.addClass(j).wrapInner('<div class="' + S + '" style="height:' + Yt(t) + 'px;" />')
			}

			function Yt(t) {
				var e = ye;
				if (a.paddingTop || a.paddingBottom) {
					var i = t;
					i.hasClass(y) || (i = t.closest(w));
					var n = parseInt(i.css("padding-top")) + parseInt(i.css("padding-bottom"));
					e = ye - n
				}
				return e
			}

			function Ft(t, e) {
				e ? qt(ge) : zt(ge), ge.css(ne(t)), setTimeout(function() {
					ge.removeClass(u)
				}, 10)
			}

			function Bt(e) {
				var i = ge.find(w + '[data-anchor="' + e + '"]');
				return i.length || (i = t(w).eq(e - 1)), i
			}

			function Ut(t, e) {
				var i = Bt(t);
				i.length && (void 0 === e && (e = 0), t === de || i.hasClass(f) ? Vt(i, e) : Tt(i, function() {
					Vt(i, e)
				}))
			}

			function Vt(t, e) {
				if (void 0 !== e) {
					var i = t.find(D),
						n = (o = e, (r = (s = t.find(D)).find(L + '[data-anchor="' + o + '"]')).length || (r = s.find(L).eq(o)), r);
					n.length && Mt(i, n)
				}
				var o, s, r
			}

			function Qt(t, e, i, n) {
				var o = "";
				a.anchors.length && !a.lockAnchors && (t ? (void 0 !== i && (o = i), void 0 === e && (e = t), Kt(o + "/" + (he = e))) : (void 0 !== t && (he = e), Kt(i))), Jt()
			}

			function Kt(t) {
				if (a.recordHistory) location.hash = t;
				else if (ve || me) e.history.replaceState(o, o, "#" + t);
				else {
					var i = e.location.href.split("#")[0];
					e.location.replace(i + "#" + t)
				}
			}

			function Gt(t) {
				var e = t.data("anchor"),
					i = t.index();
				return void 0 === e && (e = i), e
			}

			function Jt() {
				var e = t(b),
					i = e.find(O),
					n = Gt(e),
					o = Gt(i),
					s = String(n);
				i.length && (s = s + "-" + o), s = s.replace("/", "-").replace("#", "");
				var r = new RegExp("\\b\\s?" + p + "-[^\\s]+\\b", "g");
				ce[0].className = ce[0].className.replace(r, ""), ce.addClass(p + "-" + s)
			}

			function Zt() {
				return e.PointerEvent ? {
					down: "pointerdown",
					move: "pointermove"
				} : {
					down: "MSPointerDown",
					move: "MSPointerMove"
				}
			}

			function te(t) {
				var e = [];
				return e.y = void 0 !== t.pageY && (t.pageY || t.pageX) ? t.pageY : t.touches[0].pageY, e.x = void 0 !== t.pageX && (t.pageY || t.pageX) ? t.pageX : t.touches[0].pageX, me && mt(t) && a.scrollBar && (e.y = t.touches[0].pageY, e.x = t.touches[0].pageX), e
			}

			function ee(t, e) {
				K(0, "internal"), void 0 !== e && (we = !0), Mt(t.closest(D), t), void 0 !== e && (we = !1), K(Le.scrollingSpeed, "internal")
			}

			function ie(t) {
				var e = n.round(t);
				a.css3 && a.autoScrolling && !a.scrollBar ? Ft("translate3d(0px, -" + e + "px, 0px)", !1) : a.autoScrolling && !a.scrollBar ? ge.css("top", -e) : le.scrollTop(e)
			}

			function ne(t) {
				return {
					"-webkit-transform": t,
					"-moz-transform": t,
					"-ms-transform": t,
					transform: t
				}
			}

			function oe(t, e, i) {
				switch (e) {
					case "up":
						Se[i].up = t;
						break;
					case "down":
						Se[i].down = t;
						break;
					case "left":
						Se[i].left = t;
						break;
					case "right":
						Se[i].right = t;
						break;
					case "all":
						"m" == i ? Z(t) : tt(t)
				}
			}

			function se(t, e, i) {
				a[t] = e, "internal" !== i && (Le[t] = e)
			}

			function re() {
				return t("html").hasClass(h) ? void ae("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (a.continuousVertical && (a.loopTop || a.loopBottom) && (a.continuousVertical = !1, ae("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), a.scrollBar && a.scrollOverflow && ae("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !a.continuousVertical || !a.scrollBar && a.autoScrolling || (a.continuousVertical = !1, ae("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), t.each(["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset"], function(t, e) {
					a[e] && ae("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + e)
				}), void t.each(a.anchors, function(e, i) {
					var n = U.find("[name]").filter(function() {
							return t(this).attr("name") && t(this).attr("name").toLowerCase() == i.toLowerCase()
						}),
						o = U.find("[id]").filter(function() {
							return t(this).attr("id") && t(this).attr("id").toLowerCase() == i.toLowerCase()
						});
					(o.length || n.length) && (ae("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), o.length && ae("error", '"' + i + '" is is being used by another element `id` property'), n.length && ae("error", '"' + i + '" is is being used by another element `name` property'))
				}))
			}

			function ae(t, e) {
				console && console[t] && console[t]("fullPage: " + e)
			}
			if (t("html").hasClass(h)) re();
			else {
				var le = t("html, body"),
					ce = t("body"),
					ue = t.fn.fullpage;
				a = t.extend({
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
					scrollOverflowHandler: Q,
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
				}, a);
				var de, he, pe, fe = !1,
					ve = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
					me = "ontouchstart" in e || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
					ge = t(this),
					ye = B.height(),
					we = !1,
					be = !0,
					xe = !0,
					Te = [],
					Se = {
						m: {
							up: !0,
							down: !0,
							left: !0,
							right: !0
						}
					};
				Se.k = t.extend(!0, {}, Se.m);
				var ke, Ce, Ee, $e, Ae, Pe, Le = t.extend(!0, {}, a);
				re(), V.click = me, V = t.extend(V, a.scrollOverflowOptions), t.extend(t.easing, {
					easeInOutCubic: function(t, e, i, n, o) {
						return (e /= o / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
					}
				}), t(this).length && (ue.setAutoScrolling = l, ue.setRecordHistory = W, ue.setScrollingSpeed = K, ue.setFitToSection = G, ue.setLockAnchors = function(t) {
					a.lockAnchors = t
				}, ue.setMouseWheelScrolling = J, ue.setAllowScrolling = Z, ue.setKeyboardScrolling = tt, ue.moveSectionUp = et, ue.moveSectionDown = it, ue.silentMoveTo = nt, ue.moveTo = ot, ue.moveSlideRight = st, ue.moveSlideLeft = rt, ue.reBuild = at, ue.setResponsive = lt, ue.destroy = function(e) {
					l(!1, "internal"), Z(!1), tt(!1), ge.addClass(d), clearTimeout(Ee), clearTimeout(Ce), clearTimeout(ke), clearTimeout($e), clearTimeout(Ae), B.off("scroll", dt).off("hashchange", Lt).off("resize", jt), U.off("click touchstart", $ + " a").off("mouseenter", $ + " li").off("mouseleave", $ + " li").off("click touchstart", z).off("mouseover", a.normalScrollElements).off("mouseout", a.normalScrollElements), t(w).off("click touchstart", _), clearTimeout(Ee), clearTimeout(Ce), e && function() {
						ie(0), ge.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
							t(this).attr("src", t(this).data("src")), t(this).removeAttr("data-src")
						}), t($ + ", " + q + ", " + _).remove(), t(w).css({
							height: "",
							"background-color": "",
							padding: ""
						}), t(L).css({
							width: ""
						}), ge.css({
							height: "",
							position: "",
							"-ms-touch-action": "",
							"touch-action": ""
						}), le.css({
							overflow: "",
							height: ""
						}), t("html").removeClass(h), ce.removeClass(c), t.each(ce.get(0).className.split(/\s+/), function(t, e) {
							0 === e.indexOf(p) && ce.removeClass(e)
						}), t(w + ", " + L).each(function() {
							a.scrollOverflowHandler.remove(t(this)), t(this).removeClass(j + " " + f)
						}), zt(ge), ge.find(k + ", " + N + ", " + D).each(function() {
							t(this).replaceWith(this.childNodes)
						}), le.scrollTop(0);
						var e = [y, P, M];
						t.each(e, function(e, i) {
							t("." + i).removeClass(i)
						})
					}()
				}, function() {
					var n;
					a.css3 && (a.css3 = function() {
						var t, n = i.createElement("p"),
							s = {
								webkitTransform: "-webkit-transform",
								OTransform: "-o-transform",
								msTransform: "-ms-transform",
								MozTransform: "-moz-transform",
								transform: "transform"
							};
						for (var r in i.body.insertBefore(n, null), s) n.style[r] !== o && (n.style[r] = "translate3d(1px,1px,1px)", t = e.getComputedStyle(n).getPropertyValue(s[r]));
						return i.body.removeChild(n), t !== o && 0 < t.length && "none" !== t
					}()), a.scrollBar = a.scrollBar || a.hybrid, n = ge.find(a.sectionSelector), a.anchors.length || (a.anchors = n.filter("[data-anchor]").map(function() {
						return t(this).data("anchor").toString()
					}).get()), a.navigationTooltips.length || (a.navigationTooltips = n.filter("[data-tooltip]").map(function() {
						return t(this).data("tooltip").toString()
					}).get()), ge.css({
						height: "100%",
						position: "relative"
					}), ge.addClass(s), t("html").addClass(h), ye = B.height(), ge.removeClass(d), ge.find(a.sectionSelector).addClass(y), ge.find(a.slideSelector).addClass(P), t(w).each(function(e) {
						var i, n, o, s, l = t(this),
							c = l.find(L),
							u = c.length;
						o = l, (s = e) || 0 !== t(b).length || o.addClass(f), o.css("height", ye + "px"), a.paddingTop && o.css("padding-top", a.paddingTop), a.paddingBottom && o.css("padding-bottom", a.paddingBottom), void 0 !== a.sectionsColor[s] && o.css("background-color", a.sectionsColor[s]), void 0 !== a.anchors[s] && o.attr("data-anchor", a.anchors[s]), i = l, n = e, void 0 !== a.anchors[n] && i.hasClass(f) && Wt(a.anchors[n], n), a.menu && a.css3 && t(a.menu).closest(r).length && t(a.menu).appendTo(ce), 0 < u ? function(e, i, n) {
							var o, s = 100 * n,
								r = 100 / n;
							i.wrapAll('<div class="' + M + '" />'), i.parent().wrap('<div class="' + H + '" />'), e.find(N).css("width", s + "%"), 1 < n && (a.controlArrows && ((o = e).find(D).after('<div class="' + R + '"></div><div class="fp-controlArrow fp-next"></div>'), "#fff" != a.controlArrowColor && (o.find(F).css("border-color", "transparent transparent transparent " + a.controlArrowColor), o.find(Y).css("border-color", "transparent " + a.controlArrowColor + " transparent transparent")), a.loopHorizontal || o.find(Y).hide()), a.slidesNavigation && function(t, e) {
								t.append('<div class="' + I + '"><ul></ul></div>');
								var i = t.find(q);
								i.addClass(a.slidesNavPosition);
								for (var n = 0; n < e; n++) i.find("ul").append('<li><a href="#"><span></span></a></li>');
								i.css("margin-left", "-" + i.width() / 2 + "px"), i.find("li").first().find("a").addClass(f)
							}(e, n)), i.each(function(e) {
								t(this).css("width", r + "%"), a.verticalCentered && Rt(t(this))
							});
							var l = e.find(O);
							l.length && (0 !== t(b).index(w) || 0 === t(b).index(w) && 0 !== l.index()) ? ee(l) : i.eq(0).addClass(f)
						}(l, c, u) : a.verticalCentered && Rt(l)
					}), a.fixedElements && a.css3 && t(a.fixedElements).appendTo(ce), a.navigation && function() {
						ce.append('<div id="fp-nav"><ul></ul></div>');
						var e = t($);
						e.addClass(function() {
							return a.showActiveTooltip ? "fp-show-active " + a.navigationPosition : a.navigationPosition
						});
						for (var i = 0; i < t(w).length; i++) {
							var n = "";
							a.anchors.length && (n = a.anchors[i]);
							var o = '<li><a href="#' + n + '"><span></span></a>',
								s = a.navigationTooltips[i];
							void 0 !== s && "" !== s && (o += '<div class="' + A + " " + a.navigationPosition + '">' + s + "</div>"), o += "</li>", e.find("ul").append(o)
						}
						t($).css("margin-top", "-" + t($).height() / 2 + "px"), t($).find("li").eq(t(b).index(w)).find("a").addClass(f)
					}(), ge.find('iframe[src*="youtube.com/embed/"]').each(function() {
						var e, i, n;
						i = "enablejsapi=1", n = (e = t(this)).attr("src"), e.attr("src", n + (/\?/.test(n) ? "&" : "?") + i)
					}), a.scrollOverflow ? ("complete" === i.readyState && ct(), B.on("load", ct)) : ut(), Z(!0), l(a.autoScrolling, "internal");
					var c = t(b).find(O);
					c.length && (0 !== t(b).index(w) || 0 === t(b).index(w) && 0 !== c.index()) && ee(c), It(), Jt(), "complete" === i.readyState && Pt(), B.on("load", Pt)
				}(), B.on("scroll", dt).on("hashchange", Lt).blur(function() {
					pe = be = !1
				}).resize(jt), U.keydown(function(e) {
					clearTimeout(Pe);
					var i = t(":focus");
					if (!i.is("textarea") && !i.is("input") && !i.is("select") && "true" !== i.attr("contentEditable") && "" !== i.attr("contentEditable") && a.keyboardScrolling && a.autoScrolling) {
						var n = e.which; - 1 < t.inArray(n, [40, 38, 32, 33, 34]) && e.preventDefault(), pe = e.ctrlKey, Pe = setTimeout(function() {
							! function(e) {
								var i = e.shiftKey;
								if (xe || !([37, 39].indexOf(e.which) < 0)) switch (e.which) {
									case 38:
									case 33:
										Se.k.up && et();
										break;
									case 32:
										if (i && Se.k.up) {
											et();
											break
										}
									case 40:
									case 34:
										Se.k.down && it();
										break;
									case 36:
										Se.k.up && ot(1);
										break;
									case 35:
										Se.k.down && ot(t(w).length);
										break;
									case 37:
										Se.k.left && rt();
										break;
									case 39:
										Se.k.right && st()
								}
							}(e)
						}, 150)
					}
				}).keyup(function(t) {
					be && (pe = t.ctrlKey)
				}).on("click touchstart", $ + " a", function(e) {
					e.preventDefault();
					var i = t(this).parent().index();
					Tt(t(w).eq(i))
				}).on("click touchstart", z, function(e) {
					e.preventDefault();
					var i = t(this).closest(w).find(D);
					Mt(i, i.find(L).eq(t(this).closest("li").index()))
				}).on("click", ".fp-tooltip", function() {
					t(this).prev().trigger("click")
				}), t(w).on("click touchstart", _, function() {
					var e = t(this).closest(w);
					t(this).hasClass(X) ? Se.m.left && rt(e) : Se.m.right && st(e)
				}), a.normalScrollElements && (U.on("mouseenter", a.normalScrollElements, function() {
					J(!1)
				}), U.on("mouseleave", a.normalScrollElements, function() {
					J(!0)
				})));
				var Oe = !1,
					He = 0,
					De = 0,
					Me = 0,
					Ne = 0,
					je = 0,
					Ie = (new Date).getTime(),
					qe = 0,
					ze = 0,
					We = ye
			}
		}, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function() {
			this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
		}, IScroll.prototype.wheelOff = function() {
			this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
		});
		var Q = {
			refreshId: null,
			iScrollInstances: [],
			toggleWheel: function(e) {
				t(b).find(l).each(function() {
					var i = t(this).data("iscrollInstance");
					void 0 !== i && i && (e ? i.wheelOn() : i.wheelOff())
				})
			},
			onLeave: function() {
				Q.toggleWheel(!1)
			},
			beforeLeave: function() {
				Q.onLeave()
			},
			afterLoad: function() {
				Q.toggleWheel(!0)
			},
			create: function(e, i) {
				var n = e.find(l);
				n.height(i), n.each(function() {
					var e = t(this),
						i = e.data("iscrollInstance");
					i && t.each(Q.iScrollInstances, function() {
						t(this).destroy()
					}), i = new IScroll(e.get(0), V), Q.iScrollInstances.push(i), i.wheelOff(), e.data("iscrollInstance", i)
				})
			},
			isScrolled: function(t, e) {
				var i = e.data("iscrollInstance");
				return !i || ("top" === t ? 0 <= i.y && !e.scrollTop() : "bottom" === t ? 0 - i.y + e.scrollTop() + 1 + e.innerHeight() >= e[0].scrollHeight : void 0)
			},
			scrollable: function(t) {
				return t.find(D).length ? t.find(O).find(l) : t.find(l)
			},
			scrollHeight: function(t) {
				return t.find(l).children().first().get(0).scrollHeight
			},
			remove: function(t) {
				var e = t.find(l);
				e.length && (e.data("iscrollInstance").destroy(), e.data("iscrollInstance", null)), t.find(l).children().first().children().first().unwrap().unwrap()
			},
			update: function(e, i) {
				clearTimeout(Q.refreshId), Q.refreshId = setTimeout(function() {
					t.each(Q.iScrollInstances, function() {
						t(this).get(0).refresh()
					})
				}, 150), e.find(l).css("height", i + "px").parent().css("height", i + "px")
			},
			wrapContent: function() {
				return '<div class="' + a + '"><div class="fp-scroller"></div></div>'
			}
		}
	}),
	function(t) {
		"function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
	}(function(t) {
		"use strict";
		var e = "left",
			i = "right",
			n = "up",
			o = "down",
			s = "in",
			r = "out",
			a = "none",
			l = "auto",
			c = "swipe",
			u = "pinch",
			d = "tap",
			h = "doubletap",
			p = "longtap",
			f = "horizontal",
			v = "vertical",
			m = "all",
			g = 10,
			y = "start",
			w = "move",
			b = "end",
			x = "cancel",
			T = "ontouchstart" in window,
			S = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !T,
			k = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !T,
			C = "TouchSwipe";
		t.fn.swipe = function(E) {
			var $ = t(this),
				A = $.data(C);
			if (A && "string" == typeof E) {
				if (A[E]) return A[E].apply(A, Array.prototype.slice.call(arguments, 1));
				t.error("Method " + E + " does not exist on jQuery.swipe")
			} else if (A && "object" == typeof E) A.option.apply(A, arguments);
			else if (!(A || "object" != typeof E && E)) return function(E) {
				return !E || void 0 !== E.allowPageScroll || void 0 === E.swipe && void 0 === E.swipeStatus || (E.allowPageScroll = a), void 0 !== E.click && void 0 === E.tap && (E.tap = E.click), E || (E = {}), E = t.extend({}, t.fn.swipe.defaults, E), this.each(function() {
					var $ = t(this),
						A = $.data(C);
					A || (A = new function(E, $) {
						function A(s) {
							if (!(!0 === Tt.data(C + "_intouch") || 0 < t(s.target).closest($.excludedElements, Tt).length)) {
								var r = s.originalEvent ? s.originalEvent : s;
								if (!r.pointerType || "mouse" != r.pointerType || 0 != $.fallbackToMouseEvents) {
									var a, l = r.touches,
										c = l ? l[0] : r;
									return St = y, l ? kt = l.length : !1 !== $.preventDefaultEvents && s.preventDefault(), bt = ft = pt = null, yt = 1, wt = gt = mt = vt = ht = 0, (u = {})[e] = et(e), u[i] = et(i), u[n] = et(n), u[o] = et(o), xt = u, Q(), J(0, c), !l || kt === $.fingers || $.fingers === m || _() ? (Et = st(), 2 == kt && (J(1, l[1]), mt = gt = nt(Ct[0].start, Ct[1].start)), ($.swipeStatus || $.pinchStatus) && (a = N(r, St))) : a = !1, !1 === a ? (N(r, St = x), a) : ($.hold && (Ht = setTimeout(t.proxy(function() {
										Tt.trigger("hold", [r.target]), $.hold && (a = $.hold.call(Tt, r, r.target))
									}, this), $.longTapThreshold)), G(!0), null)
								}
							}
							var u
						}

						function P(c) {
							var u, d, h, p, g, y, T, S, k = c.originalEvent ? c.originalEvent : c;
							if (St !== b && St !== x && !K()) {
								var C, E = k.touches,
									A = Z(E ? E[0] : k);
								if ($t = st(), E && (kt = E.length), $.hold && clearTimeout(Ht), St = w, 2 == kt && (0 == mt ? (J(1, E[1]), mt = gt = nt(Ct[0].start, Ct[1].start)) : (Z(E[1]), gt = nt(Ct[0].end, Ct[1].end), Ct[0].end, Ct[1].end, bt = yt < 1 ? r : s), yt = (gt / mt * 1).toFixed(2), wt = Math.abs(mt - gt)), kt === $.fingers || $.fingers === m || !E || _()) {
									if (pt = ot(A.start, A.end), function(t, s) {
											if (!1 !== $.preventDefaultEvents)
												if ($.allowPageScroll === a) t.preventDefault();
												else {
													var r = $.allowPageScroll === l;
													switch (s) {
														case e:
															($.swipeLeft && r || !r && $.allowPageScroll != f) && t.preventDefault();
															break;
														case i:
															($.swipeRight && r || !r && $.allowPageScroll != f) && t.preventDefault();
															break;
														case n:
															($.swipeUp && r || !r && $.allowPageScroll != v) && t.preventDefault();
															break;
														case o:
															($.swipeDown && r || !r && $.allowPageScroll != v) && t.preventDefault()
													}
												}
										}(c, ft = ot(A.last, A.end)), T = A.start, S = A.end, ht = Math.round(Math.sqrt(Math.pow(S.x - T.x, 2) + Math.pow(S.y - T.y, 2))), vt = it(), y = ht, (g = pt) != a && (y = Math.max(y, tt(g)), xt[g].distance = y), C = N(k, St), !$.triggerOnTouchEnd || $.triggerOnTouchLeave) {
										var P = !0;
										$.triggerOnTouchLeave && (d = {
											left: (p = (h = t(h = this)).offset()).left,
											right: p.left + h.outerWidth(),
											top: p.top,
											bottom: p.top + h.outerHeight()
										}, P = (u = A.end).x > d.left && u.x < d.right && u.y > d.top && u.y < d.bottom), !$.triggerOnTouchEnd && P ? St = M(w) : $.triggerOnTouchLeave && !P && (St = M(b)), St != x && St != b || N(k, St)
									}
								} else N(k, St = x);
								!1 === C && N(k, St = x)
							}
						}

						function L(t) {
							var e, i = t.originalEvent ? t.originalEvent : t,
								n = i.touches;
							if (n) {
								if (n.length && !K()) return e = i, At = st(), Pt = e.touches.length + 1, !0;
								if (n.length && K()) return !0
							}
							return K() && (kt = Pt), $t = st(), vt = it(), q() || !I() ? N(i, St = x) : $.triggerOnTouchEnd || !1 === $.triggerOnTouchEnd && St === w ? (!1 !== $.preventDefaultEvents && !1 !== t.cancelable && t.preventDefault(), N(i, St = b)) : !$.triggerOnTouchEnd && B() ? j(i, St = b, d) : St === w && N(i, St = x), G(!1), null
						}

						function O() {
							gt = mt = Et = $t = kt = 0, yt = 1, Q(), G(!1)
						}

						function H(t) {
							var e = t.originalEvent ? t.originalEvent : t;
							$.triggerOnTouchLeave && N(e, St = M(b))
						}

						function D() {
							Tt.unbind(at, A), Tt.unbind(dt, O), Tt.unbind(lt, P), Tt.unbind(ct, L), ut && Tt.unbind(ut, H), G(!1)
						}

						function M(t) {
							var e = t,
								i = z(),
								n = I(),
								o = q();
							return !i || o ? e = x : !n || t != w || $.triggerOnTouchEnd && !$.triggerOnTouchLeave ? !n && t == b && $.triggerOnTouchLeave && (e = x) : e = b, e
						}

						function N(t, e) {
							var i, n = t.touches;
							return (!(!X() || !R()) || R()) && (i = j(t, e, c)), (!(!W() || !_()) || _()) && !1 !== i && (i = j(t, e, u)), V() && U() && !1 !== i ? i = j(t, e, h) : vt > $.longTapThreshold && ht < g && $.longTap && !1 !== i ? i = j(t, e, p) : !(1 !== kt && T || !(isNaN(ht) || ht < $.threshold) || !B()) && !1 !== i && (i = j(t, e, d)), e === x && O(), e === b && (n && n.length || O()), i
						}

						function j(a, l, f) {
							var v;
							if (f == c) {
								if (Tt.trigger("swipeStatus", [l, pt || null, ht || 0, vt || 0, kt, Ct, ft]), $.swipeStatus && !1 === (v = $.swipeStatus.call(Tt, a, l, pt || null, ht || 0, vt || 0, kt, Ct, ft))) return !1;
								if (l == b && X()) {
									if (clearTimeout(Ot), clearTimeout(Ht), Tt.trigger("swipe", [pt, ht, vt, kt, Ct, ft]), $.swipe && !1 === (v = $.swipe.call(Tt, a, pt, ht, vt, kt, Ct, ft))) return !1;
									switch (pt) {
										case e:
											Tt.trigger("swipeLeft", [pt, ht, vt, kt, Ct, ft]), $.swipeLeft && (v = $.swipeLeft.call(Tt, a, pt, ht, vt, kt, Ct, ft));
											break;
										case i:
											Tt.trigger("swipeRight", [pt, ht, vt, kt, Ct, ft]), $.swipeRight && (v = $.swipeRight.call(Tt, a, pt, ht, vt, kt, Ct, ft));
											break;
										case n:
											Tt.trigger("swipeUp", [pt, ht, vt, kt, Ct, ft]), $.swipeUp && (v = $.swipeUp.call(Tt, a, pt, ht, vt, kt, Ct, ft));
											break;
										case o:
											Tt.trigger("swipeDown", [pt, ht, vt, kt, Ct, ft]), $.swipeDown && (v = $.swipeDown.call(Tt, a, pt, ht, vt, kt, Ct, ft))
									}
								}
							}
							if (f == u) {
								if (Tt.trigger("pinchStatus", [l, bt || null, wt || 0, vt || 0, kt, yt, Ct]), $.pinchStatus && !1 === (v = $.pinchStatus.call(Tt, a, l, bt || null, wt || 0, vt || 0, kt, yt, Ct))) return !1;
								if (l == b && W()) switch (bt) {
									case s:
										Tt.trigger("pinchIn", [bt || null, wt || 0, vt || 0, kt, yt, Ct]), $.pinchIn && (v = $.pinchIn.call(Tt, a, bt || null, wt || 0, vt || 0, kt, yt, Ct));
										break;
									case r:
										Tt.trigger("pinchOut", [bt || null, wt || 0, vt || 0, kt, yt, Ct]), $.pinchOut && (v = $.pinchOut.call(Tt, a, bt || null, wt || 0, vt || 0, kt, yt, Ct))
								}
							}
							return f == d ? l !== x && l !== b || (clearTimeout(Ot), clearTimeout(Ht), U() && !V() ? (Lt = st(), Ot = setTimeout(t.proxy(function() {
								Lt = null, Tt.trigger("tap", [a.target]), $.tap && (v = $.tap.call(Tt, a, a.target))
							}, this), $.doubleTapThreshold)) : (Lt = null, Tt.trigger("tap", [a.target]), $.tap && (v = $.tap.call(Tt, a, a.target)))) : f == h ? l !== x && l !== b || (clearTimeout(Ot), clearTimeout(Ht), Lt = null, Tt.trigger("doubletap", [a.target]), $.doubleTap && (v = $.doubleTap.call(Tt, a, a.target))) : f == p && (l !== x && l !== b || (clearTimeout(Ot), Lt = null, Tt.trigger("longtap", [a.target]), $.longTap && (v = $.longTap.call(Tt, a, a.target)))), v
						}

						function I() {
							var t = !0;
							return null !== $.threshold && (t = ht >= $.threshold), t
						}

						function q() {
							var t = !1;
							return null !== $.cancelThreshold && null !== pt && (t = tt(pt) - ht >= $.cancelThreshold), t
						}

						function z() {
							return !($.maxTimeThreshold && vt >= $.maxTimeThreshold)
						}

						function W() {
							var t = Y(),
								e = F(),
								i = null === $.pinchThreshold || wt >= $.pinchThreshold;
							return t && e && i
						}

						function _() {
							return !!($.pinchStatus || $.pinchIn || $.pinchOut)
						}

						function X() {
							var t = z(),
								e = I(),
								i = Y(),
								n = F();
							return !q() && n && i && e && t
						}

						function R() {
							return !!($.swipe || $.swipeStatus || $.swipeLeft || $.swipeRight || $.swipeUp || $.swipeDown)
						}

						function Y() {
							return kt === $.fingers || $.fingers === m || !T
						}

						function F() {
							return 0 !== Ct[0].end.x
						}

						function B() {
							return !!$.tap
						}

						function U() {
							return !!$.doubleTap
						}

						function V() {
							if (null == Lt) return !1;
							var t = st();
							return U() && t - Lt <= $.doubleTapThreshold
						}

						function Q() {
							Pt = At = 0
						}

						function K() {
							var t = !1;
							return At && st() - At <= $.fingerReleaseThreshold && (t = !0), t
						}

						function G(t) {
							Tt && (!0 === t ? (Tt.bind(lt, P), Tt.bind(ct, L), ut && Tt.bind(ut, H)) : (Tt.unbind(lt, P, !1), Tt.unbind(ct, L, !1), ut && Tt.unbind(ut, H, !1)), Tt.data(C + "_intouch", !0 === t))
						}

						function J(t, e) {
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
							return i.start.x = i.last.x = i.end.x = e.pageX || e.clientX, i.start.y = i.last.y = i.end.y = e.pageY || e.clientY, Ct[t] = i
						}

						function Z(t) {
							var e = void 0 !== t.identifier ? t.identifier : 0,
								i = Ct[e] || null;
							return null === i && (i = J(e, t)), i.last.x = i.end.x, i.last.y = i.end.y, i.end.x = t.pageX || t.clientX, i.end.y = t.pageY || t.clientY, i
						}

						function tt(t) {
							if (xt[t]) return xt[t].distance
						}

						function et(t) {
							return {
								direction: t,
								distance: 0
							}
						}

						function it() {
							return $t - Et
						}

						function nt(t, e) {
							var i = Math.abs(t.x - e.x),
								n = Math.abs(t.y - e.y);
							return Math.round(Math.sqrt(i * i + n * n))
						}

						function ot(t, s) {
							if (l = s, (r = t).x == l.x && r.y == l.y) return a;
							var r, l, c, u, d, h, p, f, v = (u = s, d = (c = t).x - u.x, h = u.y - c.y, p = Math.atan2(h, d), (f = Math.round(180 * p / Math.PI)) < 0 && (f = 360 - Math.abs(f)), f);
							return v <= 45 && 0 <= v ? e : v <= 360 && 315 <= v ? e : 135 <= v && v <= 225 ? i : 45 < v && v < 135 ? o : n
						}

						function st() {
							return (new Date).getTime()
						}
						$ = t.extend({}, $);
						var rt = T || k || !$.fallbackToMouseEvents,
							at = rt ? k ? S ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
							lt = rt ? k ? S ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
							ct = rt ? k ? S ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
							ut = rt ? k ? "mouseleave" : null : "mouseleave",
							dt = k ? S ? "MSPointerCancel" : "pointercancel" : "touchcancel",
							ht = 0,
							pt = null,
							ft = null,
							vt = 0,
							mt = 0,
							gt = 0,
							yt = 1,
							wt = 0,
							bt = 0,
							xt = null,
							Tt = t(E),
							St = "start",
							kt = 0,
							Ct = {},
							Et = 0,
							$t = 0,
							At = 0,
							Pt = 0,
							Lt = 0,
							Ot = null,
							Ht = null;
						try {
							Tt.bind(at, A), Tt.bind(dt, O)
						} catch (E) {
							t.error("events not supported " + at + "," + dt + " on jQuery.swipe")
						}
						this.enable = function() {
							return this.disable(), Tt.bind(at, A), Tt.bind(dt, O), Tt
						}, this.disable = function() {
							return D(), Tt
						}, this.destroy = function() {
							D(), Tt.data(C, null), Tt = null
						}, this.option = function(e, i) {
							if ("object" == typeof e) $ = t.extend($, e);
							else if (void 0 !== $[e]) {
								if (void 0 === i) return $[e];
								$[e] = i
							} else {
								if (!e) return $;
								t.error("Option " + e + " does not exist on jQuery.swipe.options")
							}
							return null
						}
					}(this, E), $.data(C, A))
				})
			}.apply(this, arguments);
			return $
		}, t.fn.swipe.version = "1.6.18", t.fn.swipe.defaults = {
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
		}, t.fn.swipe.phases = {
			PHASE_START: y,
			PHASE_MOVE: w,
			PHASE_END: b,
			PHASE_CANCEL: x
		}, t.fn.swipe.directions = {
			LEFT: e,
			RIGHT: i,
			UP: n,
			DOWN: o,
			IN: s,
			OUT: r
		}, t.fn.swipe.pageScroll = {
			NONE: a,
			HORIZONTAL: f,
			VERTICAL: v,
			AUTO: l
		}, t.fn.swipe.fingers = {
			ONE: 1,
			TWO: 2,
			THREE: 3,
			FOUR: 4,
			FIVE: 5,
			ALL: m
		}
	}),
	function() {
		var t, e, i = [].indexOf || function(t) {
				for (var e = 0, i = this.length; e < i; e++)
					if (e in this && this[e] === t) return e;
				return -1
			},
			n = [].slice;
		t = window, e = function(t, e) {
			var o, s, r, a, l, c, u, d, h, p, f, v, m, g, y, w;
			return o = t(e), d = 0 <= i.call(e, "ontouchstart"), a = {
				horizontal: {},
				vertical: {}
			}, u = {}, c = "waypoints-context-id", f = "resize.waypoints", v = "scroll.waypoints", m = l = 1, g = "waypoints-waypoint-ids", y = "waypoint", w = "waypoints", s = function() {
				function i(i) {
					var n = this;
					this.$element = i, this.element = i[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
						x: i.scrollLeft(),
						y: i.scrollTop()
					}, this.waypoints = {
						horizontal: {},
						vertical: {}
					}, this.element[c] = this.id, u[this.id] = this, i.bind(v, function() {
						var i;
						if (!n.didScroll && !d) return n.didScroll = !0, i = function() {
							return n.doScroll(), n.didScroll = !1
						}, e.setTimeout(i, t[w].settings.scrollThrottle)
					}), i.bind(f, function() {
						var i;
						if (!n.didResize) return n.didResize = !0, i = function() {
							return t[w]("refresh"), n.didResize = !1
						}, e.setTimeout(i, t[w].settings.resizeThrottle)
					})
				}
				return i.prototype.doScroll = function() {
					var e, i = this;
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
					}, !d || e.vertical.oldScroll && e.vertical.newScroll || t[w]("refresh"), t.each(e, function(e, n) {
						var o, s, r;
						return r = [], s = n.newScroll > n.oldScroll, o = s ? n.forward : n.backward, t.each(i.waypoints[e], function(t, e) {
							var i, o;
							return n.oldScroll < (i = e.offset) && i <= n.newScroll ? r.push(e) : n.newScroll < (o = e.offset) && o <= n.oldScroll ? r.push(e) : void 0
						}), r.sort(function(t, e) {
							return t.offset - e.offset
						}), s || r.reverse(), t.each(r, function(t, e) {
							if (e.options.continuous || t === r.length - 1) return e.trigger([o])
						})
					}), this.oldScroll = {
						x: e.horizontal.newScroll,
						y: e.vertical.newScroll
					}
				}, i.prototype.refresh = function() {
					var e, i, n, o = this;
					return n = t.isWindow(this.element), i = this.$element.offset(), this.doScroll(), e = {
						horizontal: {
							contextOffset: n ? 0 : i.left,
							contextScroll: n ? 0 : this.oldScroll.x,
							contextDimension: this.$element.width(),
							oldScroll: this.oldScroll.x,
							forward: "right",
							backward: "left",
							offsetProp: "left"
						},
						vertical: {
							contextOffset: n ? 0 : i.top,
							contextScroll: n ? 0 : this.oldScroll.y,
							contextDimension: n ? t[w]("viewportHeight") : this.$element.height(),
							oldScroll: this.oldScroll.y,
							forward: "down",
							backward: "up",
							offsetProp: "top"
						}
					}, t.each(e, function(e, i) {
						return t.each(o.waypoints[e], function(e, n) {
							var o, s, r, a, l;
							if (o = n.options.offset, r = n.offset, s = t.isWindow(n.element) ? 0 : n.$element.offset()[i.offsetProp], t.isFunction(o) ? o = o.apply(n.element) : "string" == typeof o && (o = parseFloat(o), -1 < n.options.offset.indexOf("%") && (o = Math.ceil(i.contextDimension * o / 100))), n.offset = s - i.contextOffset + i.contextScroll - o, (!n.options.onlyOnScroll || null == r) && n.enabled) return null !== r && r < (a = i.oldScroll) && a <= n.offset ? n.trigger([i.backward]) : null !== r && r > (l = i.oldScroll) && l >= n.offset ? n.trigger([i.forward]) : null === r && i.oldScroll >= n.offset ? n.trigger([i.forward]) : void 0
						})
					})
				}, i.prototype.checkEmpty = function() {
					if (t.isEmptyObject(this.waypoints.horizontal) && t.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([f, v].join(" ")), delete u[this.id]
				}, i
			}(), r = function() {
				function e(e, i, n) {
					var o, s;
					"bottom-in-view" === n.offset && (n.offset = function() {
						var e;
						return e = t[w]("viewportHeight"), t.isWindow(i.element) || (e = i.$element.height()), e - t(this).outerHeight()
					}), this.$element = e, this.element = e[0], this.axis = n.horizontal ? "horizontal" : "vertical", this.callback = n.handler, this.context = i, this.enabled = n.enabled, this.id = "waypoints" + m++, this.offset = null, this.options = n, i.waypoints[this.axis][this.id] = this, (o = null != (s = (a[this.axis][this.id] = this).element[g]) ? s : []).push(this.id), this.element[g] = o
				}
				return e.prototype.trigger = function(t) {
					if (this.enabled) return null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0
				}, e.prototype.disable = function() {
					return this.enabled = !1
				}, e.prototype.enable = function() {
					return this.context.refresh(), this.enabled = !0
				}, e.prototype.destroy = function() {
					return delete a[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
				}, e.getWaypointsByElement = function(e) {
					var i, n;
					return (n = e[g]) ? (i = t.extend({}, a.horizontal, a.vertical), t.map(n, function(t) {
						return i[t]
					})) : []
				}, e
			}(), p = {
				init: function(e, i) {
					return null == (i = t.extend({}, t.fn[y].defaults, i)).handler && (i.handler = e), this.each(function() {
						var e, n, o, a;
						return e = t(this), o = null != (a = i.context) ? a : t.fn[y].defaults.context, t.isWindow(o) || (o = e.closest(o)), o = t(o), (n = u[o[0][c]]) || (n = new s(o)), new r(e, n, i)
					}), t[w]("refresh"), this
				},
				disable: function() {
					return p._invoke.call(this, "disable")
				},
				enable: function() {
					return p._invoke.call(this, "enable")
				},
				destroy: function() {
					return p._invoke.call(this, "destroy")
				},
				prev: function(t, e) {
					return p._traverse.call(this, t, e, function(t, e, i) {
						if (0 < e) return t.push(i[e - 1])
					})
				},
				next: function(t, e) {
					return p._traverse.call(this, t, e, function(t, e, i) {
						if (e < i.length - 1) return t.push(i[e + 1])
					})
				},
				_traverse: function(i, n, o) {
					var s, r;
					return null == i && (i = "vertical"), null == n && (n = e), r = h.aggregate(n), s = [], this.each(function() {
						var e;
						return e = t.inArray(this, r[i]), o(s, e, r[i])
					}), this.pushStack(s)
				},
				_invoke: function(e) {
					return this.each(function() {
						var i;
						return i = r.getWaypointsByElement(this), t.each(i, function(t, i) {
							return i[e](), !0
						})
					}), this
				}
			}, t.fn[y] = function() {
				var e, i;
				return i = arguments[0], e = 2 <= arguments.length ? n.call(arguments, 1) : [], p[i] ? p[i].apply(this, e) : t.isFunction(i) ? p.init.apply(this, arguments) : t.isPlainObject(i) ? p.init.apply(this, [null, i]) : i ? t.error("The " + i + " method does not exist in jQuery Waypoints.") : t.error("jQuery Waypoints needs a callback function or handler option.")
			}, t.fn[y].defaults = {
				context: e,
				continuous: !0,
				enabled: !0,
				horizontal: !1,
				offset: 0,
				triggerOnce: !1
			}, h = {
				refresh: function() {
					return t.each(u, function(t, e) {
						return e.refresh()
					})
				},
				viewportHeight: function() {
					var t;
					return null != (t = e.innerHeight) ? t : o.height()
				},
				aggregate: function(e) {
					var i, n, o;
					return i = a, e && (i = null != (o = u[t(e)[0][c]]) ? o.waypoints : void 0), i ? (n = {
						horizontal: [],
						vertical: []
					}, t.each(n, function(e, o) {
						return t.each(i[e], function(t, e) {
							return o.push(e)
						}), o.sort(function(t, e) {
							return t.offset - e.offset
						}), n[e] = t.map(o, function(t) {
							return t.element
						}), n[e] = t.unique(n[e])
					}), n) : []
				},
				above: function(t) {
					return null == t && (t = e), h._filter(t, "vertical", function(t, e) {
						return e.offset <= t.oldScroll.y
					})
				},
				below: function(t) {
					return null == t && (t = e), h._filter(t, "vertical", function(t, e) {
						return e.offset > t.oldScroll.y
					})
				},
				left: function(t) {
					return null == t && (t = e), h._filter(t, "horizontal", function(t, e) {
						return e.offset <= t.oldScroll.x
					})
				},
				right: function(t) {
					return null == t && (t = e), h._filter(t, "horizontal", function(t, e) {
						return e.offset > t.oldScroll.x
					})
				},
				enable: function() {
					return h._invoke("enable")
				},
				disable: function() {
					return h._invoke("disable")
				},
				destroy: function() {
					return h._invoke("destroy")
				},
				extendFn: function(t, e) {
					return p[t] = e
				},
				_invoke: function(e) {
					var i;
					return i = t.extend({}, a.vertical, a.horizontal), t.each(i, function(t, i) {
						return i[e](), !0
					})
				},
				_filter: function(e, i, n) {
					var o, s;
					return (o = u[t(e)[0][c]]) ? (s = [], t.each(o.waypoints[i], function(t, e) {
						if (n(o, e)) return s.push(e)
					}), s.sort(function(t, e) {
						return t.offset - e.offset
					}), t.map(s, function(t) {
						return t.element
					})) : []
				}
			}, t[w] = function() {
				var t, e;
				return e = arguments[0], t = 2 <= arguments.length ? n.call(arguments, 1) : [], h[e] ? h[e].apply(null, t) : h.aggregate.call(null, e)
			}, t[w].settings = {
				resizeThrottle: 100,
				scrollThrottle: 30
			}, o.on("load.waypoints", function() {
				return t[w]("refresh")
			})
		}, "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(i) {
			return e(i, t)
		}) : e(t.jQuery, t)
	}.call(this),
	function(t, e, i, n) {
		function o(e, i) {
			var s = this;
			"object" == typeof i && (delete i.refresh, delete i.render, t.extend(this, i)), this.$element = t(e), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
			var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
			if (r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), "top" != r[0] && "bottom" != r[0] && "left" != r[1] && "right" != r[1] || (r = [r[1], r[0]]), this.positionX != n && (r[0] = this.positionX.toLowerCase()), this.positionY != n && (r[1] = this.positionY.toLowerCase()), s.positionX = r[0], s.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (isNaN(parseInt(this.positionX)) ? this.positionX = "center" : this.positionX = parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (isNaN(parseInt(this.positionY)) ? this.positionY = "center" : this.positionY = parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
				backgroundImage: "url(" + this.imageSrc + ")",
				backgroundSize: "cover",
				backgroundPosition: this.position
			}), this;
			if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
				backgroundImage: "url(" + this.imageSrc + ")",
				backgroundSize: "cover",
				backgroundPosition: this.position
			}), this;
			this.$mirror = t("<div />").prependTo("body");
			var a = this.$element.find(">.parallax-slider"),
				l = !1;
			0 == a.length ? this.$slider = t("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), l = !0), this.$mirror.addClass("parallax-mirror").css({
				visibility: "hidden",
				zIndex: this.zIndex,
				position: "fixed",
				top: 0,
				left: 0,
				overflow: "hidden"
			}), this.$slider.addClass("parallax-slider").one("load", function() {
				s.naturalHeight && s.naturalWidth || (s.naturalHeight = this.naturalHeight || this.height || 1, s.naturalWidth = this.naturalWidth || this.width || 1), s.aspectRatio = s.naturalWidth / s.naturalHeight, o.isSetup || o.setup(), o.sliders.push(s), o.isFresh = !1, o.requestRender()
			}), l || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || 0 < a.length) && this.$slider.trigger("load")
		}! function() {
			for (var t = 0, i = ["ms", "moz", "webkit", "o"], n = 0; n < i.length && !e.requestAnimationFrame; ++n) e.requestAnimationFrame = e[i[n] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[i[n] + "CancelAnimationFrame"] || e[i[n] + "CancelRequestAnimationFrame"];
			e.requestAnimationFrame || (e.requestAnimationFrame = function(i) {
				var n = (new Date).getTime(),
					o = Math.max(0, 16 - (n - t)),
					s = e.setTimeout(function() {
						i(n + o)
					}, o);
				return t = n + o, s
			}), e.cancelAnimationFrame || (e.cancelAnimationFrame = function(t) {
				clearTimeout(t)
			})
		}(), t.extend(o.prototype, {
			speed: .2,
			bleed: 0,
			zIndex: -100,
			iosFix: !0,
			androidFix: !0,
			position: "center",
			overScrollFix: !1,
			refresh: function() {
				this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
				var t = o.winHeight,
					e = o.docHeight,
					i = Math.min(this.boxOffsetTop, e - t),
					n = Math.max(this.boxOffsetTop + this.boxHeight - t, 0),
					s = this.boxHeight + (i - n) * (1 - this.speed) | 0,
					r = (this.boxOffsetTop - i) * (1 - this.speed) | 0;
				if (s * this.aspectRatio >= this.boxWidth) {
					this.imageWidth = s * this.aspectRatio | 0, this.imageHeight = s, this.offsetBaseTop = r;
					var a = this.imageWidth - this.boxWidth;
					"left" == this.positionX ? this.offsetLeft = 0 : "right" == this.positionX ? this.offsetLeft = -a : isNaN(this.positionX) ? this.offsetLeft = -a / 2 | 0 : this.offsetLeft = Math.max(this.positionX, -a)
				} else this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0, a = this.imageHeight - s, "top" == this.positionY ? this.offsetBaseTop = r : "bottom" == this.positionY ? this.offsetBaseTop = r - a : isNaN(this.positionY) ? this.offsetBaseTop = r - a / 2 | 0 : this.offsetBaseTop = r + Math.max(this.positionY, -a)
			},
			render: function() {
				var t = o.scrollTop,
					e = o.scrollLeft,
					i = this.overScrollFix ? o.overScroll : 0,
					n = t + o.winHeight;
				this.boxOffsetBottom > t && this.boxOffsetTop <= n ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - e, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({
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
		}), t.extend(o, {
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
			setup: function() {
				if (!this.isReady) {
					var n = t(i),
						s = t(e),
						r = function() {
							o.winHeight = s.height(), o.winWidth = s.width(), o.docHeight = n.height(), o.docWidth = n.width()
						},
						a = function() {
							var t = s.scrollTop(),
								e = o.docHeight - o.winHeight,
								i = o.docWidth - o.winWidth;
							o.scrollTop = Math.max(0, Math.min(e, t)), o.scrollLeft = Math.max(0, Math.min(i, s.scrollLeft())), o.overScroll = Math.max(t - e, Math.min(t, 0))
						};
					s.on("resize.px.parallax load.px.parallax", function() {
						r(), o.isFresh = !1, o.requestRender()
					}).on("scroll.px.parallax load.px.parallax", function() {
						a(), o.requestRender()
					}), r(), a(), this.isReady = !0
				}
			},
			configure: function(e) {
				"object" == typeof e && (delete e.refresh, delete e.render, t.extend(this.prototype, e))
			},
			refresh: function() {
				t.each(this.sliders, function() {
					this.refresh()
				}), this.isFresh = !0
			},
			render: function() {
				this.isFresh || this.refresh(), t.each(this.sliders, function() {
					this.render()
				})
			},
			requestRender: function() {
				var t = this;
				this.isBusy || (this.isBusy = !0, e.requestAnimationFrame(function() {
					t.render(), t.isBusy = !1
				}))
			},
			destroy: function(i) {
				var n, s = t(i).data("px.parallax");
				for (s.$mirror.remove(), n = 0; n < this.sliders.length; n += 1) this.sliders[n] == s && this.sliders.splice(n, 1);
				t(i).data("px.parallax", !1), 0 === this.sliders.length && (t(e).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, o.isSetup = !1)
			}
		});
		var s = t.fn.parallax;
		t.fn.parallax = function(n) {
			return this.each(function() {
				var s = t(this),
					r = "object" == typeof n && n;
				this == e || this == i || s.is("body") ? o.configure(r) : s.data("px.parallax") ? "object" == typeof n && t.extend(s.data("px.parallax"), r) : (r = t.extend({}, s.data(), r), s.data("px.parallax", new o(this, r))), "string" == typeof n && ("destroy" == n ? o.destroy(this) : o[n]())
			})
		}, t.fn.parallax.Constructor = o, t.fn.parallax.noConflict = function() {
			return t.fn.parallax = s, this
		}, t(i).on("ready.px.parallax.data-api", function() {
			t('[data-parallax="scroll"]').parallax()
		})
	}(jQuery, window, document),
	function(t, e) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t.Vimeo = t.Vimeo || {}, t.Vimeo.Player = e())
	}(this, function() {
		"use strict";

		function t(t, e) {
			return t(e = {
				exports: {}
			}, e.exports), e.exports
		}

		function e(t, e, i) {
			var n = m.get(t.element) || {};
			e in n || (n[e] = []), n[e].push(i), m.set(t.element, n)
		}

		function i(t, e) {
			return (m.get(t.element) || {})[e] || []
		}

		function n(t, e, i) {
			var n = m.get(t.element) || {};
			if (!n[e]) return !0;
			if (!i) return n[e] = [], m.set(t.element, n), !0;
			var o = n[e].indexOf(i);
			return -1 !== o && n[e].splice(o, 1), m.set(t.element, n), n[e] && 0 === n[e].length
		}

		function o(t, e) {
			return 0 === t.indexOf(e.toLowerCase()) ? t : "" + e.toLowerCase() + t.substr(0, 1).toUpperCase() + t.substr(1)
		}

		function s(t) {
			return /^(https?:)?\/\/(player.)?vimeo.com(?=$|\/)/.test(t)
		}

		function r() {
			var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
				i = e.id,
				n = e.url,
				o = i || n;
			if (!o) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
			if (t = o, !isNaN(parseFloat(t)) && isFinite(t) && Math.floor(t) == t) return "https://vimeo.com/" + o;
			if (s(o)) return o.replace("http:", "https:");
			if (i) throw new TypeError("“" + i + "” is not a valid video id.");
			throw new TypeError("“" + o + "” is not a vimeo.com url.")
		}

		function a(t) {
			var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
			return g.reduce(function(e, i) {
				var n = t.getAttribute("data-vimeo-" + i);
				return (n || "" === n) && (e[i] = "" === n ? 1 : n), e
			}, e)
		}

		function l(t) {
			var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
			return new Promise(function(i, n) {
				if (!s(t)) throw new TypeError("“" + t + "” is not a vimeo.com url.");
				var o = "https://vimeo.com/api/oembed.json?url=" + encodeURIComponent(t);
				for (var r in e) e.hasOwnProperty(r) && (o += "&" + r + "=" + encodeURIComponent(e[r]));
				var a = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
				a.open("GET", o, !0), a.onload = function() {
					if (404 !== a.status)
						if (403 !== a.status) try {
							var e = JSON.parse(a.responseText);
							i(e)
						} catch (e) {
							n(e)
						} else n(new Error("“" + t + "” is not embeddable."));
						else n(new Error("“" + t + "” was not found."))
				}, a.onerror = function() {
					var t = a.status ? " (" + a.status + ")" : "";
					n(new Error("There was an error fetching the embed code from Vimeo" + t + "."))
				}, a.send()
			})
		}

		function c(t, e) {
			var i = t.html;
			if (!e) throw new TypeError("An element must be provided");
			if (null !== e.getAttribute("data-vimeo-initialized")) return e.querySelector("iframe");
			var n = document.createElement("div");
			return n.innerHTML = i, e.appendChild(n.firstChild), e.setAttribute("data-vimeo-initialized", "true"), e.querySelector("iframe")
		}

		function u(t) {
			return "string" == typeof t && (t = JSON.parse(t)), t
		}

		function d(t, e, i) {
			if (t.element.contentWindow.postMessage) {
				var n = {
					method: e
				};
				void 0 !== i && (n.value = i);
				var o = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
				8 <= o && o < 10 && (n = JSON.stringify(n)), t.element.contentWindow.postMessage(n, t.origin)
			}
		}
		var h = void 0 !== Array.prototype.indexOf,
			p = void 0 !== window.postMessage;
		if (!h || !p) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
		var f = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			v = (t(function(t, e) {
				! function(t) {
					function e(t, e) {
						function i(t) {
							return this && this.constructor === i ? (this._keys = [], this._values = [], this._itp = [], this.objectOnly = e, void(t && function(t) {
								this.add ? t.forEach(this.add, this) : t.forEach(function(t) {
									this.set(t[0], t[1])
								}, this)
							}.call(this, t))) : new i(t)
						}
						return e || v(t, "size", {
							get: h
						}), (t.constructor = i).prototype = t, i
					}

					function i(t) {
						return this.has(t) && (this._keys.splice(f, 1), this._values.splice(f, 1), this._itp.forEach(function(t) {
							f < t[0] && t[0]--
						})), -1 < f
					}

					function n(t) {
						return this.has(t) ? this._values[f] : void 0
					}

					function o(t, e) {
						if (this.objectOnly && e !== Object(e)) throw new TypeError("Invalid value used as weak collection key");
						if (e != e || 0 === e)
							for (f = t.length; f-- && !m(t[f], e););
						else f = t.indexOf(e);
						return -1 < f
					}

					function s(t) {
						return o.call(this, this._values, t)
					}

					function r(t) {
						return o.call(this, this._keys, t)
					}

					function a(t, e) {
						return this.has(t) ? this._values[f] = e : this._values[this._keys.push(t) - 1] = e, this
					}

					function l(t) {
						return this.has(t) || this._values.push(t), this
					}

					function c() {
						(this._keys || 0).length = this._values.length = 0
					}

					function u() {
						return d(this._itp, this._values)
					}

					function d(t, e, i) {
						var n = [0],
							o = !1;
						return t.push(n), {
							next: function() {
								var s, r = n[0];
								return !o && r < e.length ? (s = i ? [e[r], i[r]] : e[r], n[0]++) : (o = !0, t.splice(t.indexOf(n), 1)), {
									done: o,
									value: s
								}
							}
						}
					}

					function h() {
						return this._values.length
					}

					function p(t, e) {
						for (var i = this.entries();;) {
							var n = i.next();
							if (n.done) break;
							t.call(e, n.value[1], n.value[0], this)
						}
					}
					var f, v = Object.defineProperty,
						m = function(t, e) {
							return t === e || t != t && e != e
						};
					"undefined" == typeof WeakMap && (t.WeakMap = e({
						delete: i,
						clear: c,
						get: n,
						has: r,
						set: a
					}, !0)), "undefined" != typeof Map && "function" == typeof(new Map).values && (new Map).values().next || (t.Map = e({
						delete: i,
						has: r,
						get: n,
						set: a,
						keys: function() {
							return d(this._itp, this._keys)
						},
						values: u,
						entries: function() {
							return d(this._itp, this._keys, this._values)
						},
						forEach: p,
						clear: c
					})), "undefined" != typeof Set && "function" == typeof(new Set).values && (new Set).values().next || (t.Set = e({
						has: s,
						add: l,
						delete: i,
						clear: c,
						keys: u,
						values: u,
						entries: function() {
							return d(this._itp, this._values, this._values)
						},
						forEach: p
					})), "undefined" == typeof WeakSet && (t.WeakSet = e({
						delete: i,
						add: l,
						clear: c,
						has: s
					}, !0))
				}(void 0 !== e && void 0 !== f ? f : window)
			}), t(function(t) {
				var e, i, n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				};
				(i = f)[e = "Promise"] = i[e] || function() {
					function t(t, e) {
						d.add(t, e), u || (u = p(d.drain))
					}

					function e(t) {
						var e, i = void 0 === t ? "undefined" : n(t);
						return null == t || "object" != i && "function" != i || (e = t.then), "function" == typeof e && e
					}

					function i() {
						for (var t = 0; t < this.chain.length; t++) o(this, 1 === this.state ? this.chain[t].success : this.chain[t].failure, this.chain[t]);
						this.chain.length = 0
					}

					function o(t, i, n) {
						var o, s;
						try {
							!1 === i ? n.reject(t.msg) : (o = !0 === i ? t.msg : i.call(void 0, t.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (s = e(o)) ? s.call(o, n.resolve, n.reject) : n.resolve(o)
						} catch (t) {
							n.reject(t)
						}
					}

					function s(e) {
						var n = this;
						n.triggered || (n.triggered = !0, n.def && (n = n.def), n.msg = e, n.state = 2, 0 < n.chain.length && t(i, n))
					}

					function r(t, e, i, n) {
						for (var o = 0; o < e.length; o++) ! function(o) {
							t.resolve(e[o]).then(function(t) {
								i(o, t)
							}, n)
						}(o)
					}

					function a(t) {
						this.def = t, this.triggered = !1
					}

					function l(n) {
						if ("function" != typeof n) throw TypeError("Not a function");
						if (0 !== this.__NPO__) throw TypeError("Not a promise");
						this.__NPO__ = 1;
						var o = new function(t) {
							this.promise = t, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
						}(this);
						this.then = function(e, n) {
							var s = {
								success: "function" != typeof e || e,
								failure: "function" == typeof n && n
							};
							return s.promise = new this.constructor(function(t, e) {
								if ("function" != typeof t || "function" != typeof e) throw TypeError("Not a function");
								s.resolve = t, s.reject = e
							}), o.chain.push(s), 0 !== o.state && t(i, o), s.promise
						}, this.catch = function(t) {
							return this.then(void 0, t)
						};
						try {
							n.call(void 0, function(n) {
								(function n(o) {
									var r, l = this;
									if (!l.triggered) {
										l.triggered = !0, l.def && (l = l.def);
										try {
											(r = e(o)) ? t(function() {
												var t = new a(l);
												try {
													r.call(o, function() {
														n.apply(t, arguments)
													}, function() {
														s.apply(t, arguments)
													})
												} catch (e) {
													s.call(t, e)
												}
											}): (l.msg = o, l.state = 1, 0 < l.chain.length && t(i, l))
										} catch (n) {
											s.call(new a(l), n)
										}
									}
								}).call(o, n)
							}, function(t) {
								s.call(o, t)
							})
						} catch (n) {
							s.call(o, n)
						}
					}
					var c, u, d, h = Object.prototype.toString,
						p = "undefined" != typeof setImmediate ? function(t) {
							return setImmediate(t)
						} : setTimeout;
					try {
						Object.defineProperty({}, "x", {}), c = function(t, e, i, n) {
							return Object.defineProperty(t, e, {
								value: i,
								writable: !0,
								configurable: !1 !== n
							})
						}
					} catch (t) {
						c = function(t, e, i) {
							return t[e] = i, t
						}
					}
					d = function() {
						var t, e, i;
						return {
							add: function(n, o) {
								i = new function(t, e) {
									this.fn = t, this.self = e, this.next = void 0
								}(n, o), e ? e.next = i : t = i, e = i, i = void 0
							},
							drain: function() {
								var i = t;
								for (t = e = u = void 0; i;) i.fn.call(i.self), i = i.next
							}
						}
					}();
					var f = c({}, "constructor", l, !1);
					return c(l.prototype = f, "__NPO__", 0, !1), c(l, "resolve", function(t) {
						return t && "object" == (void 0 === t ? "undefined" : n(t)) && 1 === t.__NPO__ ? t : new this(function(e, i) {
							if ("function" != typeof e || "function" != typeof i) throw TypeError("Not a function");
							e(t)
						})
					}), c(l, "reject", function(t) {
						return new this(function(e, i) {
							if ("function" != typeof e || "function" != typeof i) throw TypeError("Not a function");
							i(t)
						})
					}), c(l, "all", function(t) {
						var e = this;
						return "[object Array]" != h.call(t) ? e.reject(TypeError("Not an array")) : 0 === t.length ? e.resolve([]) : new e(function(i, n) {
							if ("function" != typeof i || "function" != typeof n) throw TypeError("Not a function");
							var o = t.length,
								s = Array(o),
								a = 0;
							r(e, t, function(t, e) {
								s[t] = e, ++a === o && i(s)
							}, n)
						})
					}), c(l, "race", function(t) {
						var e = this;
						return "[object Array]" != h.call(t) ? e.reject(TypeError("Not an array")) : new e(function(i, n) {
							if ("function" != typeof i || "function" != typeof n) throw TypeError("Not a function");
							r(e, t, function(t, e) {
								i(e)
							}, n)
						})
					}), l
				}(), void 0 !== t && t.exports ? t.exports = i[e] : "function" == typeof define && define.amd && define(function() {
					return i[e]
				})
			})),
			m = new WeakMap,
			g = ["id", "url", "width", "maxwidth", "height", "maxheight", "portrait", "title", "byline", "color", "autoplay", "autopause", "loop", "responsive"],
			y = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var n = e[i];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
					}
				}
				return function(e, i, n) {
					return i && t(e.prototype, i), n && t(e, n), e
				}
			}(),
			w = new WeakMap,
			b = new WeakMap,
			x = function() {
				function t(e) {
					var o = this,
						h = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
					if (function(e, i) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this), window.jQuery && e instanceof jQuery && (1 < e.length && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), e = e[0]), "string" == typeof e && (e = document.getElementById(e)), !(e instanceof window.HTMLElement)) throw new TypeError("You must pass either a valid element or a valid id.");
					if ("IFRAME" !== e.nodeName) {
						var p = e.querySelector("iframe");
						p && (e = p)
					}
					if ("IFRAME" === e.nodeName && !s(e.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
					if (w.has(e)) return w.get(e);
					this.element = e, this.origin = "*";
					var f = new v(function(t, d) {
						var p = function(e) {
							if (s(e.origin) && o.element.contentWindow === e.source) {
								"*" === o.origin && (o.origin = e.origin);
								var r = u(e.data),
									a = "event" in r && "ready" === r.event,
									l = "method" in r && "ping" === r.method;
								return a || l ? (o.element.setAttribute("data-ready", "true"), void t()) : void
								function(t, e) {
									var o = [],
										s = void 0;
									if ((e = u(e)).event) "error" === e.event && i(t, e.data.method).forEach(function(i) {
										var o = new Error(e.data.message);
										o.name = e.data.name, i.reject(o), n(t, e.data.method, i)
									}), o = i(t, "event:" + e.event), s = e.data;
									else if (e.method) {
										var r = function(t, e) {
											var o = i(t, e);
											if (o.length < 1) return !1;
											var s = o.shift();
											return n(t, e, s), s
										}(t, e.method);
										r && (o.push(r), s = e.value)
									}
									o.forEach(function(e) {
										try {
											if ("function" == typeof e) return void e.call(t, s);
											e.resolve(s)
										} catch (e) {}
									})
								}(o, r)
							}
						};
						if (window.addEventListener ? window.addEventListener("message", p, !1) : window.attachEvent && window.attachEvent("onmessage", p), "IFRAME" !== o.element.nodeName) {
							var f = a(e, h);
							l(r(f), f).then(function(t) {
								var i, n, s, r = c(t, e);
								return o.element = r, i = e, n = r, s = m.get(i), m.set(n, s), m.delete(i), t
							}).catch(function(t) {
								return d(t)
							})
						}
					});
					return b.set(this, f), w.set(this.element, this), "IFRAME" === this.element.nodeName && d(this, "ping"), this
				}
				return y(t, [{
					key: "callMethod",
					value: function(t) {
						var i = this,
							n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
						return new v(function(o, s) {
							return i.ready().then(function() {
								e(i, t, {
									resolve: o,
									reject: s
								}), d(i, t, n)
							})
						})
					}
				}, {
					key: "get",
					value: function(t) {
						var i = this;
						return new v(function(n, s) {
							return t = o(t, "get"), i.ready().then(function() {
								e(i, t, {
									resolve: n,
									reject: s
								}), d(i, t)
							})
						})
					}
				}, {
					key: "set",
					value: function(t, i) {
						var n = this;
						return v.resolve(i).then(function(i) {
							if (t = o(t, "set"), null == i) throw new TypeError("There must be a value to set.");
							return n.ready().then(function() {
								return new v(function(o, s) {
									e(n, t, {
										resolve: o,
										reject: s
									}), d(n, t, i)
								})
							})
						})
					}
				}, {
					key: "on",
					value: function(t, n) {
						if (!t) throw new TypeError("You must pass an event name.");
						if (!n) throw new TypeError("You must pass a callback function.");
						if ("function" != typeof n) throw new TypeError("The callback must be a function.");
						0 === i(this, "event:" + t).length && this.callMethod("addEventListener", t).catch(function() {}), e(this, "event:" + t, n)
					}
				}, {
					key: "off",
					value: function(t, e) {
						if (!t) throw new TypeError("You must pass an event name.");
						if (e && "function" != typeof e) throw new TypeError("The callback must be a function.");
						n(this, "event:" + t, e) && this.callMethod("removeEventListener", t).catch(function(t) {})
					}
				}, {
					key: "loadVideo",
					value: function(t) {
						return this.callMethod("loadVideo", t)
					}
				}, {
					key: "ready",
					value: function() {
						var t = b.get(this);
						return v.resolve(t)
					}
				}, {
					key: "addCuePoint",
					value: function(t) {
						var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
						return this.callMethod("addCuePoint", {
							time: t,
							data: e
						})
					}
				}, {
					key: "removeCuePoint",
					value: function(t) {
						return this.callMethod("removeCuePoint", t)
					}
				}, {
					key: "enableTextTrack",
					value: function(t, e) {
						if (!t) throw new TypeError("You must pass a language.");
						return this.callMethod("enableTextTrack", {
							language: t,
							kind: e
						})
					}
				}, {
					key: "disableTextTrack",
					value: function() {
						return this.callMethod("disableTextTrack")
					}
				}, {
					key: "pause",
					value: function() {
						return this.callMethod("pause")
					}
				}, {
					key: "play",
					value: function() {
						return this.callMethod("play")
					}
				}, {
					key: "unload",
					value: function() {
						return this.callMethod("unload")
					}
				}, {
					key: "getAutopause",
					value: function() {
						return this.get("autopause")
					}
				}, {
					key: "setAutopause",
					value: function(t) {
						return this.set("autopause", t)
					}
				}, {
					key: "getColor",
					value: function() {
						return this.get("color")
					}
				}, {
					key: "setColor",
					value: function(t) {
						return this.set("color", t)
					}
				}, {
					key: "getCuePoints",
					value: function() {
						return this.get("cuePoints")
					}
				}, {
					key: "getCurrentTime",
					value: function() {
						return this.get("currentTime")
					}
				}, {
					key: "setCurrentTime",
					value: function(t) {
						return this.set("currentTime", t)
					}
				}, {
					key: "getDuration",
					value: function() {
						return this.get("duration")
					}
				}, {
					key: "getEnded",
					value: function() {
						return this.get("ended")
					}
				}, {
					key: "getLoop",
					value: function() {
						return this.get("loop")
					}
				}, {
					key: "setLoop",
					value: function(t) {
						return this.set("loop", t)
					}
				}, {
					key: "getPaused",
					value: function() {
						return this.get("paused")
					}
				}, {
					key: "getTextTracks",
					value: function() {
						return this.get("textTracks")
					}
				}, {
					key: "getVideoEmbedCode",
					value: function() {
						return this.get("videoEmbedCode")
					}
				}, {
					key: "getVideoId",
					value: function() {
						return this.get("videoId")
					}
				}, {
					key: "getVideoTitle",
					value: function() {
						return this.get("videoTitle")
					}
				}, {
					key: "getVideoWidth",
					value: function() {
						return this.get("videoWidth")
					}
				}, {
					key: "getVideoHeight",
					value: function() {
						return this.get("videoHeight")
					}
				}, {
					key: "getVideoUrl",
					value: function() {
						return this.get("videoUrl")
					}
				}, {
					key: "getVolume",
					value: function() {
						return this.get("volume")
					}
				}, {
					key: "setVolume",
					value: function(t) {
						return this.set("volume", t)
					}
				}]), t
			}();
		return function() {
			var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document,
				e = function(t) {
					"console" in window && console.error && console.error("There was an error creating an embed: " + t)
				};
			[].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")).forEach(function(t) {
				try {
					if (null !== t.getAttribute("data-vimeo-defer")) return;
					var i = a(t);
					l(r(i), i).then(function(e) {
						return c(e, t)
					}).catch(e)
				} catch (t) {
					e(t)
				}
			})
		}(), x
	}),
	function(t) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(function(t) {
		"use strict";
		var e, i = window.Slick;
		e = 0, (i = function(i, n) {
			var o, s = this;
			s.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: t(i),
				appendDots: t(i),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function(e, i) {
					return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
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
			}, s.initials = {
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
			}, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = t(i).data("slick") || {}, s.options = t.extend({}, s.defaults, n, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.instanceUid = e++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
		}).prototype.activateADA = function() {
			this.$slideTrack.find(".slick-active").attr({
				"aria-hidden": "false"
			}).find("a, input, button, select").attr({
				tabindex: "0"
			})
		}, i.prototype.addSlide = i.prototype.slickAdd = function(e, i, n) {
			var o = this;
			if ("boolean" == typeof i) n = i, i = null;
			else if (i < 0 || i >= o.slideCount) return !1;
			o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : !0 === n ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(e, i) {
				t(i).attr("data-slick-index", e)
			}), o.$slidesCache = o.$slides, o.reinit()
		}, i.prototype.animateHeight = function() {
			var t = this;
			if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
				var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
				t.$list.animate({
					height: e
				}, t.options.speed)
			}
		}, i.prototype.animateSlide = function(e, i) {
			var n = {},
				o = this;
			o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
				left: e
			}, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
				top: e
			}, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), t({
				animStart: o.currentLeft
			}).animate({
				animStart: e
			}, {
				duration: o.options.speed,
				easing: o.options.easing,
				step: function(t) {
					t = Math.ceil(t), !1 === o.options.vertical ? n[o.animType] = "translate(" + t + "px, 0px)" : n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n)
				},
				complete: function() {
					i && i.call()
				}
			})) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
				o.disableTransition(), i.call()
			}, o.options.speed))
		}, i.prototype.getNavTarget = function() {
			var e = this.options.asNavFor;
			return e && null !== e && (e = t(e).not(this.$slider)), e
		}, i.prototype.asNavFor = function(e) {
			var i = this.getNavTarget();
			null !== i && "object" == typeof i && i.each(function() {
				var i = t(this).slick("getSlick");
				i.unslicked || i.slideHandler(e, !0)
			})
		}, i.prototype.applyTransition = function(t) {
			var e = this,
				i = {};
			!1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
		}, i.prototype.autoPlay = function() {
			var t = this;
			t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
		}, i.prototype.autoPlayClear = function() {
			this.autoPlayTimer && clearInterval(this.autoPlayTimer)
		}, i.prototype.autoPlayIterator = function() {
			var t = this,
				e = t.currentSlide + t.options.slidesToScroll;
			t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
		}, i.prototype.buildArrows = function() {
			var e = this;
			!0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
				"aria-disabled": "true",
				tabindex: "-1"
			}))
		}, i.prototype.buildDots = function() {
			var e, i, n = this;
			if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
				for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
				n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
			}
		}, i.prototype.buildOut = function() {
			var e = this;
			e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
				t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
			}), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
		}, i.prototype.buildRows = function() {
			var t, e, i, n, o, s, r, a = this;
			if (n = document.createDocumentFragment(), s = a.$slider.children(), 1 < a.options.rows) {
				for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), t = 0; t < o; t++) {
					var l = document.createElement("div");
					for (e = 0; e < a.options.rows; e++) {
						var c = document.createElement("div");
						for (i = 0; i < a.options.slidesPerRow; i++) {
							var u = t * r + (e * a.options.slidesPerRow + i);
							s.get(u) && c.appendChild(s.get(u))
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
		}, i.prototype.checkResponsive = function(e, i) {
			var n, o, s, r = this,
				a = !1,
				l = r.$slider.width(),
				c = window.innerWidth || t(window).width();
			if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
				for (n in o = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
				null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = o), e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
			}
		}, i.prototype.changeSlide = function(e, i) {
			var n, o, s = this,
				r = t(e.currentTarget);
			switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), n = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
				case "previous":
					o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
					break;
				case "next":
					o = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
					break;
				case "index":
					var a = 0 === e.data.index ? 0 : e.data.index || r.index() * s.options.slidesToScroll;
					s.slideHandler(s.checkNavigable(a), !1, i), r.children().trigger("focus");
					break;
				default:
					return
			}
		}, i.prototype.checkNavigable = function(t) {
			var e, i;
			if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
			else
				for (var n in e) {
					if (t < e[n]) {
						t = i;
						break
					}
					i = e[n]
				}
			return t
		}, i.prototype.cleanUpEvents = function() {
			var e = this;
			e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
		}, i.prototype.cleanUpSlideEvents = function() {
			this.$list.off("mouseenter.slick", t.proxy(this.interrupt, this, !0)), this.$list.off("mouseleave.slick", t.proxy(this.interrupt, this, !1))
		}, i.prototype.cleanUpRows = function() {
			var t;
			1 < this.options.rows && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(t))
		}, i.prototype.clickHandler = function(t) {
			!1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
		}, i.prototype.destroy = function(e) {
			var i = this;
			i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
				t(this).attr("style", t(this).data("originalStyling"))
			}), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
		}, i.prototype.disableTransition = function(t) {
			var e = {};
			e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
		}, i.prototype.fadeSlide = function(t, e) {
			var i = this;
			!1 === i.cssTransitions ? (i.$slides.eq(t).css({
				zIndex: i.options.zIndex
			}), i.$slides.eq(t).animate({
				opacity: 1
			}, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
				opacity: 1,
				zIndex: i.options.zIndex
			}), e && setTimeout(function() {
				i.disableTransition(t), e.call()
			}, i.options.speed))
		}, i.prototype.fadeSlideOut = function(t) {
			!1 === this.cssTransitions ? this.$slides.eq(t).animate({
				opacity: 0,
				zIndex: this.options.zIndex - 2
			}, this.options.speed, this.options.easing) : (this.applyTransition(t), this.$slides.eq(t).css({
				opacity: 0,
				zIndex: this.options.zIndex - 2
			}))
		}, i.prototype.filterSlides = i.prototype.slickFilter = function(t) {
			null !== t && (this.$slidesCache = this.$slides, this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.filter(t).appendTo(this.$slideTrack), this.reinit())
		}, i.prototype.focusHandler = function() {
			var e = this;
			e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
				i.stopImmediatePropagation();
				var n = t(this);
				setTimeout(function() {
					e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
				}, 0)
			})
		}, i.prototype.getCurrent = i.prototype.slickCurrentSlide = function() {
			return this.currentSlide
		}, i.prototype.getDotCount = function() {
			var t = this,
				e = 0,
				i = 0,
				n = 0;
			if (!0 === t.options.infinite)
				for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
			else if (!0 === t.options.centerMode) n = t.slideCount;
			else if (t.options.asNavFor)
				for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
			else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
			return n - 1
		}, i.prototype.getLeft = function(t) {
			var e, i, n, o = this,
				s = 0;
			return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (s = o.slideOffset = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + s, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
		}, i.prototype.getOption = i.prototype.slickGetOption = function(t) {
			return this.options[t]
		}, i.prototype.getNavigableIndexes = function() {
			var t, e = this,
				i = 0,
				n = 0,
				o = [];
			for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
			return o
		}, i.prototype.getSlick = function() {
			return this
		}, i.prototype.getSlideCount = function() {
			var e, i, n = this;
			return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(o, s) {
				return s.offsetLeft - i + t(s).outerWidth() / 2 > -1 * n.swipeLeft ? (e = s, !1) : void 0
			}), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
		}, i.prototype.goTo = i.prototype.slickGoTo = function(t, e) {
			this.changeSlide({
				data: {
					message: "index",
					index: parseInt(t)
				}
			}, e)
		}, i.prototype.init = function(e) {
			var i = this;
			t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
		}, i.prototype.initADA = function() {
			var e = this;
			e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
				"aria-hidden": "true",
				tabindex: "-1"
			}).find("a, input, button, select").attr({
				tabindex: "-1"
			}), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
				t(this).attr({
					role: "option",
					"aria-describedby": "slick-slide" + e.instanceUid + i
				})
			}), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
				t(this).attr({
					role: "presentation",
					"aria-selected": "false",
					"aria-controls": "navigation" + e.instanceUid + i,
					id: "slick-slide" + e.instanceUid + i
				})
			}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
		}, i.prototype.initArrowEvents = function() {
			!0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.off("click.slick").on("click.slick", {
				message: "previous"
			}, this.changeSlide), this.$nextArrow.off("click.slick").on("click.slick", {
				message: "next"
			}, this.changeSlide))
		}, i.prototype.initDotEvents = function() {
			var e = this;
			!0 === e.options.dots && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
				message: "index"
			}, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
		}, i.prototype.initSlideEvents = function() {
			this.options.pauseOnHover && (this.$list.on("mouseenter.slick", t.proxy(this.interrupt, this, !0)), this.$list.on("mouseleave.slick", t.proxy(this.interrupt, this, !1)))
		}, i.prototype.initializeEvents = function() {
			var e = this;
			e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
				action: "start"
			}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
				action: "move"
			}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
				action: "end"
			}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
				action: "end"
			}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
		}, i.prototype.initUI = function() {
			!0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.show(), this.$nextArrow.show()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.show()
		}, i.prototype.keyHandler = function(t) {
			t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === this.options.accessibility ? this.changeSlide({
				data: {
					message: !0 === this.options.rtl ? "next" : "previous"
				}
			}) : 39 === t.keyCode && !0 === this.options.accessibility && this.changeSlide({
				data: {
					message: !0 === this.options.rtl ? "previous" : "next"
				}
			}))
		}, i.prototype.lazyLoad = function() {
			function e(e) {
				t("img[data-lazy]", e).each(function() {
					var e = t(this),
						i = t(this).attr("data-lazy"),
						n = document.createElement("img");
					n.onload = function() {
						e.animate({
							opacity: 0
						}, 100, function() {
							e.attr("src", i).animate({
								opacity: 1
							}, 200, function() {
								e.removeAttr("data-lazy").removeClass("slick-loading")
							}), o.$slider.trigger("lazyLoaded", [o, e, i])
						})
					}, n.onerror = function() {
						e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, i])
					}, n.src = i
				})
			}
			var i, n, o = this;
			!0 === o.options.centerMode ? !0 === o.options.infinite ? n = (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), n = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, n = Math.ceil(i + o.options.slidesToShow), !0 === o.options.fade && (0 < i && i--, n <= o.slideCount && n++)), e(o.$slider.find(".slick-slide").slice(i, n)), o.slideCount <= o.options.slidesToShow ? e(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? e(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && e(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
		}, i.prototype.loadSlider = function() {
			this.setPosition(), this.$slideTrack.css({
				opacity: 1
			}), this.$slider.removeClass("slick-loading"), this.initUI(), "progressive" === this.options.lazyLoad && this.progressiveLazyLoad()
		}, i.prototype.next = i.prototype.slickNext = function() {
			this.changeSlide({
				data: {
					message: "next"
				}
			})
		}, i.prototype.orientationChange = function() {
			this.checkResponsive(), this.setPosition()
		}, i.prototype.pause = i.prototype.slickPause = function() {
			this.autoPlayClear(), this.paused = !0
		}, i.prototype.play = i.prototype.slickPlay = function() {
			this.autoPlay(), this.options.autoplay = !0, this.paused = !1, this.focussed = !1, this.interrupted = !1
		}, i.prototype.postSlide = function(t) {
			var e = this;
			e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && e.initADA())
		}, i.prototype.prev = i.prototype.slickPrev = function() {
			this.changeSlide({
				data: {
					message: "previous"
				}
			})
		}, i.prototype.preventDefault = function(t) {
			t.preventDefault()
		}, i.prototype.progressiveLazyLoad = function(e) {
			e = e || 1;
			var i, n, o, s = this,
				r = t("img[data-lazy]", s.$slider);
			r.length ? (i = r.first(), n = i.attr("data-lazy"), (o = document.createElement("img")).onload = function() {
				i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, i, n]), s.progressiveLazyLoad()
			}, o.onerror = function() {
				e < 3 ? setTimeout(function() {
					s.progressiveLazyLoad(e + 1)
				}, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, i, n]), s.progressiveLazyLoad())
			}, o.src = n) : s.$slider.trigger("allImagesLoaded", [s])
		}, i.prototype.refresh = function(e) {
			var i, n, o = this;
			n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {
				currentSlide: i
			}), o.init(), e || o.changeSlide({
				data: {
					message: "index",
					index: i
				}
			}, !1)
		}, i.prototype.registerBreakpoints = function() {
			var e, i, n, o = this,
				s = o.options.responsive || null;
			if ("array" === t.type(s) && s.length) {
				for (e in o.respondTo = o.options.respondTo || "window", s)
					if (n = o.breakpoints.length - 1, i = s[e].breakpoint, s.hasOwnProperty(e)) {
						for (; 0 <= n;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
						o.breakpoints.push(i), o.breakpointSettings[i] = s[e].settings
					}
				o.breakpoints.sort(function(t, e) {
					return o.options.mobileFirst ? t - e : e - t
				})
			}
		}, i.prototype.reinit = function() {
			var e = this;
			e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
		}, i.prototype.resize = function() {
			var e = this;
			t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
				e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
			}, 50))
		}, i.prototype.removeSlide = i.prototype.slickRemove = function(t, e, i) {
			var n = this;
			return t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t, !(n.slideCount < 1 || t < 0 || t > n.slideCount - 1) && (n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
		}, i.prototype.setCSS = function(t) {
			var e, i, n = this,
				o = {};
			!0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, !1 === n.transformsEnabled || (!(o = {}) === n.cssTransitions ? o[n.animType] = "translate(" + e + ", " + i + ")" : o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)"), n.$slideTrack.css(o)
		}, i.prototype.setDimensions = function() {
			var t = this;
			!1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
				padding: "0px " + t.options.centerPadding
			}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
				padding: t.options.centerPadding + " 0px"
			})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
			var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
			!1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
		}, i.prototype.setFade = function() {
			var e, i = this;
			i.$slides.each(function(n, o) {
				e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(o).css({
					position: "relative",
					right: e,
					top: 0,
					zIndex: i.options.zIndex - 2,
					opacity: 0
				}) : t(o).css({
					position: "relative",
					left: e,
					top: 0,
					zIndex: i.options.zIndex - 2,
					opacity: 0
				})
			}), i.$slides.eq(i.currentSlide).css({
				zIndex: i.options.zIndex - 1,
				opacity: 1
			})
		}, i.prototype.setHeight = function() {
			if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
				var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
				this.$list.css("height", t)
			}
		}, i.prototype.setOption = i.prototype.slickSetOption = function() {
			var e, i, n, o, s, r = this,
				a = !1;
			if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], s = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[n] = o;
			else if ("multiple" === s) t.each(n, function(t, e) {
				r.options[t] = e
			});
			else if ("responsive" === s)
				for (i in o)
					if ("array" !== t.type(r.options.responsive)) r.options.responsive = [o[i]];
					else {
						for (e = r.options.responsive.length - 1; 0 <= e;) r.options.responsive[e].breakpoint === o[i].breakpoint && r.options.responsive.splice(e, 1), e--;
						r.options.responsive.push(o[i])
					}
			a && (r.unload(), r.reinit())
		}, i.prototype.setPosition = function() {
			this.setDimensions(), this.setHeight(), !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(), this.$slider.trigger("setPosition", [this])
		}, i.prototype.setProps = function() {
			var t = this,
				e = document.body.style;
			t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
		}, i.prototype.setSlideClasses = function(t) {
			var e, i, n, o, s = this;
			i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode ? (e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e <= t && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : 0 <= t && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
		}, i.prototype.setupInfinite = function() {
			var e, i, n, o = this;
			if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
				for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
				for (e = 0; e < n; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
				o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
					t(this).attr("id", "")
				})
			}
		}, i.prototype.interrupt = function(t) {
			t || this.autoPlay(), this.interrupted = t
		}, i.prototype.selectHandler = function(e) {
			var i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
				n = parseInt(i.attr("data-slick-index"));
			return n || (n = 0), this.slideCount <= this.options.slidesToShow ? (this.setSlideClasses(n), void this.asNavFor(n)) : void this.slideHandler(n)
		}, i.prototype.slideHandler = function(t, e, i) {
			var n, o, s, r, a, l = null,
				c = this;
			return e = e || !1, !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === e && c.asNavFor(t), n = t, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll) ? void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
				c.postSlide(n)
			}) : c.postSlide(n))) : !1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll) ? void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
				c.postSlide(n)
			}) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(o, function() {
				c.postSlide(o)
			})) : c.postSlide(o), void c.animateHeight()) : void(!0 !== i ? c.animateSlide(l, function() {
				c.postSlide(o)
			}) : c.postSlide(o))))
		}, i.prototype.startLoad = function() {
			var t = this;
			!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
		}, i.prototype.swipeDirection = function() {
			var t, e, i, n;
			return t = this.touchObject.startX - this.touchObject.curX, e = this.touchObject.startY - this.touchObject.curY, i = Math.atan2(e, t), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === this.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === this.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
		}, i.prototype.swipeEnd = function(t) {
			var e, i, n = this;
			if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
			if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
				switch (i = n.swipeDirection()) {
					case "left":
					case "down":
						e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
						break;
					case "right":
					case "up":
						e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
				}
				"vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
			} else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
		}, i.prototype.swipeHandler = function(t) {
			var e = this;
			if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
				case "start":
					e.swipeStart(t);
					break;
				case "move":
					e.swipeMove(t);
					break;
				case "end":
					e.swipeEnd(t)
			}
		}, i.prototype.swipeMove = function(t) {
			var e, i, n, o, s, r = this;
			return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!r.dragging || s && 1 !== s.length) && (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), !0 === r.options.verticalSwiping && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), "vertical" !== (i = r.swipeDirection()) ? (void 0 !== t.originalEvent && 4 < r.touchObject.swipeLength && t.preventDefault(), o = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), n = r.touchObject.swipeLength, (r.touchObject.edgeHit = !1) === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = e + n * o : r.swipeLeft = e + n * (r.$list.height() / r.listWidth) * o, !0 === r.options.verticalSwiping && (r.swipeLeft = e + n * o), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
		}, i.prototype.swipeStart = function(t) {
			var e, i = this;
			return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? !(i.touchObject = {}) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
		}, i.prototype.unfilterSlides = i.prototype.slickUnfilter = function() {
			null !== this.$slidesCache && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.appendTo(this.$slideTrack), this.reinit())
		}, i.prototype.unload = function() {
			var e = this;
			t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
		}, i.prototype.unslick = function(t) {
			this.$slider.trigger("unslick", [this, t]), this.destroy()
		}, i.prototype.updateArrows = function() {
			var t = this;
			Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
		}, i.prototype.updateDots = function() {
			null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
		}, i.prototype.visibility = function() {
			this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
		}, t.fn.slick = function() {
			var t, e, n = arguments[0],
				o = Array.prototype.slice.call(arguments, 1),
				s = this.length;
			for (t = 0; t < s; t++)
				if ("object" == typeof n || void 0 === n ? this[t].slick = new i(this[t], n) : e = this[t].slick[n].apply(this[t].slick, o), void 0 !== e) return e;
			return this
		}
	}),
	function(t, e, i) {
		"use strict";
		var n = function(t, e) {
			var n = this;
			this.el = t, this.options = {}, Object.keys(o).forEach(function(t) {
				n.options[t] = o[t]
			}), Object.keys(e).forEach(function(t) {
				n.options[t] = e[t]
			}), this.isInput = "input" === this.el.tagName.toLowerCase(), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.getAttribute(this.attr) : this.el.textContent, this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, i && this.options.stringsElement instanceof i ? this.stringsElement = this.options.stringsElement[0] : this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
		};
		n.prototype = {
			constructor: n,
			init: function() {
				var t = this;
				t.timeout = setTimeout(function() {
					for (var e = 0; e < t.strings.length; ++e) t.sequence[e] = e;
					t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
				}, t.startDelay)
			},
			build: function() {
				var t = this;
				!0 === this.showCursor && (this.cursor = e.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)), this.stringsElement && (this.strings = [], this.stringsElement.style.display = "none", Array.prototype.slice.apply(this.stringsElement.children).forEach(function(e) {
					t.strings.push(e.innerHTML)
				})), this.init()
			},
			typewrite: function(t, e) {
				if (!0 !== this.stop) {
					var i = Math.round(70 * Math.random()) + this.typeSpeed,
						n = this;
					n.timeout = setTimeout(function() {
						var i = 0,
							o = t.substr(e);
						if ("^" === o.charAt(0)) {
							var s = 1;
							/^\^\d+/.test(o) && (s += (o = /\d+/.exec(o)[0]).length, i = parseInt(o)), t = t.substring(0, e) + t.substring(e + s)
						}
						if ("html" === n.contentType) {
							var r = t.substr(e).charAt(0);
							if ("<" === r || "&" === r) {
								var a;
								for (a = "<" === r ? ">" : ";"; t.substr(e + 1).charAt(0) !== a && (t.substr(e).charAt(0), !(++e + 1 > t.length)););
								e++
							}
						}
						n.timeout = setTimeout(function() {
							if (e === t.length) {
								if (n.options.onStringTyped(n.arrayPos), n.arrayPos === n.strings.length - 1 && (n.options.callback(), n.curLoop++, !1 === n.loop || n.curLoop === n.loopCount)) return;
								n.timeout = setTimeout(function() {
									n.backspace(t, e)
								}, n.backDelay)
							} else {
								0 === e && n.options.preStringTyped(n.arrayPos);
								var i = t.substr(0, e + 1);
								n.attr ? n.el.setAttribute(n.attr, i) : n.isInput ? n.el.value = i : "html" === n.contentType ? n.el.innerHTML = i : n.el.textContent = i, e++, n.typewrite(t, e)
							}
						}, i)
					}, i)
				}
			},
			backspace: function(t, e) {
				if (!0 !== this.stop) {
					var i = Math.round(70 * Math.random()) + this.backSpeed,
						n = this;
					n.timeout = setTimeout(function() {
						if ("html" === n.contentType && ">" === t.substr(e).charAt(0)) {
							for (;
								"<" !== t.substr(e - 1).charAt(0) && (t.substr(e).charAt(0), !(--e < 0)););
							e--
						}
						var i = t.substr(0, e);
						n.attr ? n.el.setAttribute(n.attr, i) : n.isInput ? n.el.value = i : "html" === n.contentType ? n.el.innerHTML = i : n.el.textContent = i, e > n.stopNum ? (e--, n.backspace(t, e)) : e <= n.stopNum && (n.arrayPos++, n.arrayPos === n.strings.length ? (n.arrayPos = 0, n.shuffle && (n.sequence = n.shuffleArray(n.sequence)), n.init()) : n.typewrite(n.strings[n.sequence[n.arrayPos]], e))
					}, i)
				}
			},
			shuffleArray: function(t) {
				var e, i, n = t.length;
				if (n)
					for (; --n;) e = t[i = Math.floor(Math.random() * (n + 1))], t[i] = t[n], t[n] = e;
				return t
			},
			reset: function() {
				clearInterval(this.timeout), this.el.getAttribute("id"), this.el.textContent = "", void 0 !== this.cursor && void 0 !== this.cursor.parentNode && this.cursor.parentNode.removeChild(this.cursor), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
			}
		}, n.new = function(t, i) {
			Array.prototype.slice.apply(e.querySelectorAll(t)).forEach(function(t) {
				var e = t._typed,
					o = "object" == typeof i && i;
				e && e.reset(), t._typed = e = new n(t, o), "string" == typeof i && e[i]()
			})
		}, i && (i.fn.typed = function(t) {
			return this.each(function() {
				var e = i(this),
					o = e.data("typed"),
					s = "object" == typeof t && t;
				o && o.reset(), e.data("typed", o = new n(this, s)), "string" == typeof t && o[t]()
			})
		}), t.Typed = n;
		var o = {
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
			callback: function() {},
			preStringTyped: function() {},
			onStringTyped: function() {},
			resetCallback: function() {}
		}
	}(window, document, window.jQuery), $(function() {
		var t = $(".wow"),
			e = $(".home-acv-main"),
			i = $(".wow-section").eq(0),
			n = $(".wow-section").eq(1),
			o = $(".wow-section").eq(2),
			s = ($(".home-acv-main")),
			r = $(".acv-arrow"),
			a = $(".overflow-container"),
			l = $(".header-logo");
		i.css({
			"z-index": "4"
		});
		var c = {
			scrollingSpeed: 1100,
			onLeave: function(c, u, d) {
				$(this), $(this).height();
				var h = u - 2;
				$(".acv-arrow-small").addClass("hide"),$(".wow-section").css({
					"z-index": "0"
				}), "down" === d && (0 === h && (i.find(".bg").removeClass("down down-s"), i.find(".content").removeClass("down down-s"), e.addClass("animate"), e.find(".overflow-container, #play-button").addClass("animate"), $(".acv-video").get(0).pause(), $(".acv-video").get(1).pause(), i.find(".headline").addClass("animate"), r.addClass("animate"), i.find(".bottle").addClass("animate"), i.find(".headline").addClass("animate"), i.find(".overflow-container").addClass("animate"), i.find(".content").addClass("animate"), $(".acv-arrow-small").css({
					display: "block"
				}),i.css({
					"z-index": "1"
				}), $(".home-acv-main").find(a).removeClass("animate"), l.addClass("animate")),
				1 === h && (i.find(".bg").addClass("up"), i.find(".content").addClass("down"), n.find(".bg").removeClass("up"),
				 n.find(".content").removeClass("down"), i.find(".content").addClass("up-s"), i.find(".bg").addClass("up-s"),
				  n.find(".content").removeClass("down-s"), n.find(".bg").removeClass("down-s"), i.find(".bottle").removeClass("animate"), n.find(".bottle").addClass("animate"), i.find(".overflow-container").removeClass("animate"), n.find(".overflow-container").addClass("animate"), i.find(".content").removeClass("animate"), n.find(".content").addClass("animate"),
				$(".acv-arrow-small").css({
					"display": "block"
				}), n.css({
					"z-index": "1"
				})), 2 === h && (n.find(".bg").addClass("down"), n.find(".content").addClass("up"), o.find(".bg").removeClass("down"), o.find(".content").removeClass("up"), n.find(".content").addClass("up-s"), n.find(".bg").addClass("up-s"), o.find(".content").removeClass("down-s"), o.find(".bg").removeClass("down-s"), n.find(".bottle").removeClass("animate"), o.find(".bottle").addClass("animate"), n.find(".overflow-container").removeClass("animate"), o.find(".overflow-container").addClass("animate"), n.find(".content").removeClass("animate"), o.find(".content").addClass("animate"), o.css({
					"z-index": "1"
				}), t.addClass("animate-up-easing")), 3 === h && ($("#wow").addClass("show"), $(".wow").addClass("animate-up"), o.find(".overflow-container").removeClass("animate"), o.find(".content").removeClass("animate"), o.find(".content").addClass("last-down"), o.find(".bg").addClass("last-down"), s.find(".item").addClass("animate-in"), s.find(a).addClass("animate")), 4 === h && (o.find(".overflow-container").removeClass("animate"), s.find(".item").addClass("animate-out"), s.find(a).removeClass("animate"))), "up" === d && (-1 === h && (i.find(".bg").addClass("down down-s"), i.find(".content").addClass("down down-s"), $(".wow").removeClass("animate"), $(".home-acv-main").removeClass("animate"), i.find(".bottle").removeClass("animate"), i.find(".content").removeClass("animate"), i.find(".overflow-container").removeClass("animate"), $(".acv-arrow-small").addClass("hide"), r.removeClass("animate"), $(".home-acv-main").find(a).addClass("animate"), l.removeClass("animate"), $(".acv-arrow-small").css({
					"display": "none"
				}), i.css({
					"z-index": "1"
				})), 0 === h && (i.find(".bg").removeClass("up"), i.find(".content").removeClass("down"), n.find(".bg").addClass("up"), n.find(".content").addClass("down"), i.find(".content").removeClass("up-s"), i.find(".bg").removeClass("up-s"), n.find(".content").addClass("down-s"), n.find(".bg").addClass("down-s"), i.find(".bottle").addClass("animate"), n.find(".bottle").removeClass("animate"), i.find(".overflow-container").addClass("animate"), n.find(".overflow-container").removeClass("animate"), i.find(".content").addClass("animate"), n.find(".content").removeClass("animate"), $(".acv-arrow-small").css({
					"display": "block"
				}), i.css({
					"z-index": "1"
				})), 1 === h && (n.find(".bg").removeClass("down"), n.find(".content").removeClass("up"), o.find(".bg").addClass("down"), o.find(".content").addClass("up"), n.find(".content").removeClass("up-s"), n.find(".bg").removeClass("up-s"), o.find(".content").addClass("down-s"), o.find(".bg").addClass("down-s"), n.find(".bottle").addClass("animate"), o.find(".bottle").removeClass("animate"), n.find(".overflow-container").addClass("animate"), o.find(".overflow-container").removeClass("animate"), n.find(".content").addClass("animate"), o.find(".content").removeClass("animate"), $(".acv-arrow-small").css({
					"display": "block"
				}),n.css({
					"z-index": "1"
				}), t.removeClass("animate-up-easing")), 2 === h && ($(".wow").removeClass("animate-up"), o.find(".bg").addClass("animate"), o.find(".overflow-container").addClass("animate"), o.find(".content").addClass("animate"), o.find(".content").removeClass("last-down"), s.find(a).removeClass("animate"), setTimeout(function() {
					$("#wow").removeClass("show")
				}, 999)), 3 === h && (s.find(".item").removeClass("animate-out"), s.find(a).addClass("animate")))
			},
			afterRender: function(e, i) {
				$(".home-acv-main").find(a).addClass("animate");
				var n = $(".section").height();
				t.height(n)
			},
			afterResize: function() {
				var e = $(".section").height();
				t.height(e)
			},
			afterLoad: function(t, e) {
				1 == e ? ($(".acv-video").get(0).play(), $(".acv-video").get(1).play()) : ($(".acv-video").get(0).pause(), $(".acv-video").get(1).pause()),
				$(".wow-section:eq(" + (e - 2) + ")").find(".acv-arrow-small").removeClass("hide")
			}
		};
		$("#wow").length && ($("#wow").fullpage(c),
		-1 !== navigator.userAgent.indexOf("FBAV") || -1 !== navigator.userAgent.indexOf("Instagram") ? ($.fn.fullpage.setResponsive(!0),
		 $(".acv.parallax").addClass("no-parallax"),
		 $(".wow").addClass("static"),
		$(".acv-arrow").addClass("acv-arrow-small main").removeClass("acv-arrow")) : ($(".acv-arrow-small").addClass("hide"), $(".home-acv-main, .wow").swipe({
			swipe: function(t, e, i, n, o, s) {
				"up" === e && $.fn.fullpage.moveSectionDown(), "down" === e && $.fn.fullpage.moveSectionUp()
			}
		})))
	}), $(function() {
		FastClick.attach(document.body), $(".acv.full-height").waypoint(function(t) {
			$(this).find(".overflow-container").addClass("animate"), $(this).find(".acv-line-texture").addClass("animate"), $(this).find("#play-button").addClass("animate"), $(this).prev(".canpaign-score-results-vs").addClass("animate")
		}, {
			offset: "90%",
			triggerOnce: !0
		});
		var t = $(".acv-arrow"),
			e = $(".header-logo"),
			i = $(".acv.full-height:eq(0)"),
			n = $(".default-acv"),
			o = $(".trade-media-section");
		t.click(function() {
			var t = $(this);
			if ($("html").hasClass("fp-enabled")) $.fn.fullpage.moveSectionDown();
			else {
				var e = t.parent(".acv").height();
				$("html, body").animate({
					scrollTop: e
				}, 750), t.addClass("animate")
			}
		}), !1 === $("html").hasClass("fp-enabled") && (i.waypoint(function(i) {
			"down" === i && (e.addClass("animate"), t.addClass("animate"))
		}, {
			offset: "-70%"
		}), i.waypoint(function(i) {
			"up" === i && (e.removeClass("animate"), t.removeClass("animate"))
		}, {
			offset: "-69%"
		}), n.waypoint(function(t) {
			"down" === t && e.addClass("animate")
		}, {
			offset: "-200px"
		}), n.waypoint(function(t) {
			"up" === t && e.removeClass("animate")
		}, {
			offset: "-199px"
		}), o.waypoint(function(t) {
			thisTmSection = $(this), "down" === t && thisTmSection.find(".overflow-container").addClass("animate")
		}, {
			offset: "90%"
		})), $(".acv-arrow-small").click(function() {
			$.fn.fullpage.moveSectionDown()
		}), setInterval(function() {
			$(".landscape-popup").addClass("bg2"), setTimeout(function() {
				$(".landscape-popup").removeClass("bg2")
			}, 1500)
		}, 3e3), -1 === navigator.userAgent.indexOf("FBAV") && -1 === navigator.userAgent.indexOf("Instagram") || ($(".contact-popup").addClass("in-app"), $(".acv.full-height .acv-arrow").addClass("acv-arrow-small main").removeClass("acv-arrow"), $(".landscape-popup").addClass("in-app"))
	}), $(window).scroll(function() {
		var t = $(this).scrollTop() / $(window).height() * 25;
		$(".parallax-standard-scroll").css({
			transform: "translate3d(0, " + t + "%, 0)"
		})
	}), $((jQuery, void($.fn.grtyoutube = function(t) {
		return this.each(function() {
			var e = $(this).attr("youtubeid"),
				i = $.extend({
					videoID: e,
					autoPlay: !0,
					theme: "dark"
				}, t);
			!0 === i.autoPlay ? i.autoPlay = 1 : !1 === i.autoPlay && (i.autoPlay = 0), "dark" === i.theme ? i.theme = "grtyoutube-dark-theme" : "light" === i.theme && (i.theme = "grtyoutube-light-theme"), e && $(this).on("click", function() {
				$(".youtube-thumbnail").append('<div class="grtyoutube-popup ' + i.theme + '"><div class="grtyoutube-popup-content"><span class="grtyoutube-popup-close"></span><iframe class="grtyoutube-iframe" src="https://www.youtube.com/embed/' + i.videoID + "?rel=0&showinfo=0&wmode=transparent&autoplay=" + i.autoPlay + '&iv_load_policy=3" allowfullscreen frameborder="0"></iframe></div></div>')
			}), $(this).on("click", function(t) {
				t.preventDefault(), $(".grtyoutube-popup-close, .grtyoutube-popup").click(function() {
					$(".grtyoutube-popup").remove()
				})
			}), $(document).keyup(function(t) {
				27 == t.keyCode && $(".grtyoutube-popup").remove()
			})
		})
	})));
