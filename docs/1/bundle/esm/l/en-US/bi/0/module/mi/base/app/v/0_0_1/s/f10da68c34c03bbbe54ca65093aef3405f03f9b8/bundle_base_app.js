import {
	parseFragment as et,
	registerTemplate as at,
	freezeTemplate as rt,
	registerDecorators as dn,
	registerComponent as it,
	LightningElement as ot,
} from "/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F5_0_0/s/b005bb4c2c907fd35a0797f2b8899108a9a5b779/bundle_lwc.js";
function we(t, n, e) {
	var a = t ? "[" + t + "]" : "",
		r = t ? "[" + t + "-host]" : "";
	return (
		(n ? ":host {" : r + " {") +
		"font-family: system-ui;display: flex;flex-direction: column;min-height: 100vh;}header" +
		a +
		" {width: auto;}header" +
		a +
		" > ui-banner" +
		a +
		" {width: auto;}main" +
		a +
		" {display: flex;gap: 1rem;height: auto;flex-direction: column;width: auto;flex-grow: 1;align-items: flex-start;max-width: 1400px;align-self: center;margin: 0rem 0.5rem 0rem 0.5rem;}section" +
		a +
		" {display: flex;flex-direction: column;gap: 1.5rem;}aside" +
		a +
		" {flex-shrink: 1;min-width: 33%;display: flex;flex-direction: column;}h1" +
		a +
		" {color: #1798c1;}footer" +
		a +
		" {margin-top: auto;padding: 0.5rem 1rem 0.5rem 1rem;}@media only screen and (min-width: 769px) {main" +
		a +
		" {margin: 30px;flex-direction: row;}}"
	);
}
var vn = [we];
function xe(t, n, e) {
	var a = t ? "[" + t + "]" : "",
		r = t ? "[" + t + "-host]" : "",
		i = t ? "-" + t : "";
	return (
		(n ? ":host {" : r + " {") +
		'background-color: rgb(250, 250, 250);display: flex;flex-wrap: wrap;justify-content: space-between;align-items: center;padding: 1rem 0.5rem 1rem 0.5rem;transition: all 200ms ease-in-out;height: 20rem;background-image: url("public/assets/banner-background.webp");background-size: cover;background-position-x: left;background-position-y: center;background-clip: border-box;}h1' +
		a +
		" {font-weight: 400;font-size: 1.75rem;transition: all 200ms ease-in-out;}.typewriter" +
		a +
		" h1" +
		a +
		` {overflow: hidden;border-right: 0.1em solid orange;white-space: nowrap;text-align: left;font-family: monospace;letter-spacing: 0.2em;animation:
		typing` +
		i +
		" 4s steps(14, end), blink-caret" +
		i +
		" 0.75s step-end infinite;color: antiquewhite;}.typewriter" +
		a +
		" {background-color: rgba(0, 0, 0, 0.822);padding: 1rem;width: fit-content;}h2" +
		a +
		" {font-weight: 400;font-size: 1.5rem;font-family: monospace;background-color: rgba(255, 255, 255, 0.808);width: fit-content;padding: 0 0.5rem 0 0.5rem;}img" +
		a +
		" {max-height: 10rem;border-radius: 2rem;align-self: flex-end;}@media only screen and (min-width: 769px) {" +
		(n ? ":host {" : r + " {") +
		"padding: 2rem 4rem 2rem 4rem;background-position-y: top;height: 30rem;}h1" +
		a +
		" {font-weight: 400;font-size: 3rem;}}@media only screen and (min-width: 1600px) {" +
		(n ? ":host {" : r + " {") +
		"background-position-y: center;}}@keyframes typing" +
		i +
		" {from {width: 0;}to {width: 100%;}}@keyframes blink-caret" +
		i +
		" {from,	to {border-color: transparent;}50% {border-color: rgb(249, 96, 30);}}"
	);
}
var gn = [xe];
const Ae = et`<div class="typewriter${0}"${2}><h1${3}>hello, world!</h1></div>`,
	Se = et`<div${3}><h2${3}>Welcome to lachlanpeacock.com</h2></div>`;
function U(t, n, e, a) {
	const { st: r, h: i } = t;
	return [
		i("div", { className: n.computedClasses, key: 0 }, [
			r(Ae(), 2),
			r(Se(), 4),
		]),
	];
}
var _e = at(U);
(U.stylesheets = []),
	gn && U.stylesheets.push.apply(U.stylesheets, gn),
	(U.stylesheetToken = "lwc-3ijtgsmmfei"),
	(U.legacyStylesheetToken = "ui-banner_banner"),
	rt(U);
class pn extends ot {
	constructor(...n) {
		super(...n);
		(this._title = void 0),
			(this._subtitle = void 0),
			(this._showBackgroundImage = !1);
	}
	get title() {
		return this._title;
	}
	set title(n) {
		this._title = n;
	}
	get subtitle() {
		return this._subtitle;
	}
	set subtitle(n) {
		this._subtitle = n;
	}
	get showBackgroundImage() {
		return this._showBackgroundImage;
	}
	set showBackgroundImage(n) {
		this._showBackgroundImage = n;
	}
	get computedClasses() {
		return this.showBackgroundImage === !0
			? "banner-wrapper background-image"
			: "banner-wrapper";
	}
}
dn(pn, {
	publicProps: {
		title: { config: 3 },
		subtitle: { config: 3 },
		showBackgroundImage: { config: 3 },
	},
	fields: ["_title", "_subtitle", "_showBackgroundImage"],
});
var Ee = it(pn, { tmpl: _e, sel: "ui-banner", apiVersion: 60 });
function Pe(t, n, e) {
	var a = t ? "[" + t + "]" : "",
		r = t ? "[" + t + "-host]" : "",
		i = t ? "-" + t : "";
	return (
		(n ? ":host {" : r + " {") +
		"max-width: 800px;}h1" +
		a +
		" {font-weight: 400;border-left: solid rgba(190, 190, 190, 0.808) 4px;padding: 0.5rem 1rem 0.5rem 1rem;background-color: rgba(238, 235, 235, 0.387);transition: all 300ms ease-in-out;}h1:hover" +
		a +
		" {background-color: rgba(201, 200, 200, 0.387);cursor: default;}p" +
		a +
		" {border-left: solid rgba(190, 190, 190, 0.808) 2px;padding-left: 1rem;line-height: 2;}.emoji-wave" +
		a +
		" {animation-name: wave" +
		i +
		";animation-duration: 2.5s;animation-iteration-count: infinite;transform-origin: 70% 70%;display: inline-block;transition: all 200ms ease-out;}@keyframes wave" +
		i +
		" {0% {transform: rotate(0deg);}10% {transform: rotate(14deg);}20% {transform: rotate(-8deg);}30% {transform: rotate(14deg);}40% {transform: rotate(-4deg);}50% {transform: rotate(10deg);}60% {transform: rotate(0deg);}100% {transform: rotate(0deg);}}"
	);
}
var hn = [Pe];
const Ce = et`<h1${3}><span class="emoji-wave${0}"${2}>👋</span> I&#x27;m Lachie</h1>`,
	Oe = et`<p${3}>I&#x27;m a software developer based in Melbourne, Australia. Passionate about building beautiful, high-quality software. I have extensive experience working with Salesforce, as well as full-stack JavaScript development.</p>`,
	Ne = et`<p${3}>Besides being a dev, I love music and photography.</p>`;
function B(t, n, e, a) {
	const { st: r } = t;
	return [r(Ce(), 1), r(Oe(), 3), r(Ne(), 5)];
}
var Ie = at(B);
(B.stylesheets = []),
	hn && B.stylesheets.push.apply(B.stylesheets, hn),
	(B.stylesheetToken = "lwc-7aoo6clbjqd"),
	(B.legacyStylesheetToken = "ui-contentBlock_contentBlock"),
	rt(B);
class Te extends ot {}
var Me = it(Te, { tmpl: Ie, sel: "ui-content-block", apiVersion: 60 });
function ze(t, n, e) {
	var a = t ? "[" + t + "]" : "",
		r = t ? "[" + t + "-host]" : "";
	return (
		(n ? ":host {" : r + " {") +
		"text-align: center;width: 100%;display: flex;flex-direction: column;flex-wrap: wrap;align-items: center;justify-content: center;gap: 1rem;border-top: 2px solid rgba(0, 0, 0, 0.228);padding: 0.5rem 0 0.5rem 0;}a" +
		a +
		" {color: rgba(0, 0, 0, 0.563);margin: 0.75rem;}ui-icon" +
		a +
		" {--icon-size: 3rem;}@media only screen and (min-width: 769px) {" +
		(n ? ":host {" : r + " {") +
		"flex-direction: row;}ui-icon" +
		a +
		" {--icon-size: 2.5rem;}a" +
		a +
		" {color: rgba(0, 0, 0, 0.501);margin: 0.5rem;transition: all 200ms ease-in;}a:hover" +
		a +
		" {color: rgb(0, 0, 0);}}"
	);
}
var bn = [ze];
function $e(t, n, e) {
	var a = t ? "[" + t + "]" : "",
		r = t ? "[" + t + "-host]" : "";
	return (
		(n ? ":host {" : r + " {") +
		"--icon-size: 5rem;}svg" +
		a +
		" {height: var(--icon-size, 5rem);}"
	);
}
var yn = [$e];
const Le = [];
function W(t, n, e, a) {
	return Le;
}
var Re = at(W);
(W.stylesheets = []),
	yn && W.stylesheets.push.apply(W.stylesheets, yn),
	(W.stylesheetToken = "lwc-5rf5p0gid"),
	(W.legacyStylesheetToken = "ui-icon_icon"),
	rt(W);
function kn(t, n) {
	var e = Object.keys(t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(t);
		n &&
			(a = a.filter(function (r) {
				return Object.getOwnPropertyDescriptor(t, r).enumerable;
			})),
			e.push.apply(e, a);
	}
	return e;
}
function c(t) {
	for (var n = 1; n < arguments.length; n++) {
		var e = arguments[n] != null ? arguments[n] : {};
		n % 2
			? kn(Object(e), !0).forEach(function (a) {
					y(t, a, e[a]);
				})
			: Object.getOwnPropertyDescriptors
				? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
				: kn(Object(e)).forEach(function (a) {
						Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
					});
	}
	return t;
}
function bt(t) {
	return (
		(bt =
			typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
				? function (n) {
						return typeof n;
					}
				: function (n) {
						return n &&
							typeof Symbol == "function" &&
							n.constructor === Symbol &&
							n !== Symbol.prototype
							? "symbol"
							: typeof n;
					}),
		bt(t)
	);
}
function Fe(t, n) {
	if (!(t instanceof n))
		throw new TypeError("Cannot call a class as a function");
}
function wn(t, n) {
	for (var e = 0; e < n.length; e++) {
		var a = n[e];
		(a.enumerable = a.enumerable || !1),
			(a.configurable = !0),
			"value" in a && (a.writable = !0),
			Object.defineProperty(t, a.key, a);
	}
}
function De(t, n, e) {
	return (
		n && wn(t.prototype, n),
		e && wn(t, e),
		Object.defineProperty(t, "prototype", { writable: !1 }),
		t
	);
}
function y(t, n, e) {
	return (
		n in t
			? Object.defineProperty(t, n, {
					value: e,
					enumerable: !0,
					configurable: !0,
					writable: !0,
				})
			: (t[n] = e),
		t
	);
}
function Rt(t, n) {
	return Ye(t) || Be(t, n) || xn(t, n) || He();
}
function st(t) {
	return je(t) || Ue(t) || xn(t) || We();
}
function je(t) {
	if (Array.isArray(t)) return Ft(t);
}
function Ye(t) {
	if (Array.isArray(t)) return t;
}
function Ue(t) {
	if (
		(typeof Symbol != "undefined" && t[Symbol.iterator] != null) ||
		t["@@iterator"] != null
	)
		return Array.from(t);
}
function Be(t, n) {
	var e =
		t == null
			? null
			: (typeof Symbol != "undefined" && t[Symbol.iterator]) || t["@@iterator"];
	if (e != null) {
		var a = [],
			r = !0,
			i = !1,
			o,
			s;
		try {
			for (
				e = e.call(t);
				!(r = (o = e.next()).done) && (a.push(o.value), !(n && a.length === n));
				r = !0
			);
		} catch (f) {
			(i = !0), (s = f);
		} finally {
			try {
				!r && e.return != null && e.return();
			} finally {
				if (i) throw s;
			}
		}
		return a;
	}
}
function xn(t, n) {
	if (!!t) {
		if (typeof t == "string") return Ft(t, n);
		var e = Object.prototype.toString.call(t).slice(8, -1);
		if (
			(e === "Object" && t.constructor && (e = t.constructor.name),
			e === "Map" || e === "Set")
		)
			return Array.from(t);
		if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
			return Ft(t, n);
	}
}
function Ft(t, n) {
	(n == null || n > t.length) && (n = t.length);
	for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
	return a;
}
function We() {
	throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function He() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var An = function () {},
	Dt = {},
	Sn = {},
	_n = null,
	En = { mark: An, measure: An };
try {
	typeof window != "undefined" && (Dt = window),
		typeof document != "undefined" && (Sn = document),
		typeof MutationObserver != "undefined" && (_n = MutationObserver),
		typeof performance != "undefined" && (En = performance);
} catch (t) {}
var Ve = Dt.navigator || {},
	Pn = Ve.userAgent,
	Cn = Pn === void 0 ? "" : Pn,
	L = Dt,
	p = Sn,
	On = _n,
	yt = En;
L.document;
var I =
		!!p.documentElement &&
		!!p.head &&
		typeof p.addEventListener == "function" &&
		typeof p.createElement == "function",
	Nn = ~Cn.indexOf("MSIE") || ~Cn.indexOf("Trident/"),
	kt,
	wt,
	xt,
	At,
	St,
	T = "___FONT_AWESOME___",
	jt = 16,
	In = "fa",
	Tn = "svg-inline--fa",
	H = "data-fa-i2svg",
	Yt = "data-fa-pseudo-element",
	Ge = "data-fa-pseudo-element-pending",
	Ut = "data-prefix",
	Bt = "data-icon",
	Mn = "fontawesome-i2svg",
	Xe = "async",
	qe = ["HTML", "HEAD", "STYLE", "SCRIPT"],
	zn = (function () {
		try {
			return !0;
		} catch (t) {
			return !1;
		}
	})(),
	h = "classic",
	b = "sharp",
	Wt = [h, b];
function ft(t) {
	return new Proxy(t, {
		get: function (e, a) {
			return a in e ? e[a] : e[h];
		},
	});
}
var lt = ft(
		((kt = {}),
		y(kt, h, {
			fa: "solid",
			fas: "solid",
			"fa-solid": "solid",
			far: "regular",
			"fa-regular": "regular",
			fal: "light",
			"fa-light": "light",
			fat: "thin",
			"fa-thin": "thin",
			fad: "duotone",
			"fa-duotone": "duotone",
			fab: "brands",
			"fa-brands": "brands",
			fak: "kit",
			fakd: "kit",
			"fa-kit": "kit",
			"fa-kit-duotone": "kit",
		}),
		y(kt, b, {
			fa: "solid",
			fass: "solid",
			"fa-solid": "solid",
			fasr: "regular",
			"fa-regular": "regular",
			fasl: "light",
			"fa-light": "light",
			fast: "thin",
			"fa-thin": "thin",
		}),
		kt),
	),
	ct = ft(
		((wt = {}),
		y(wt, h, {
			solid: "fas",
			regular: "far",
			light: "fal",
			thin: "fat",
			duotone: "fad",
			brands: "fab",
			kit: "fak",
		}),
		y(wt, b, { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" }),
		wt),
	),
	ut = ft(
		((xt = {}),
		y(xt, h, {
			fab: "fa-brands",
			fad: "fa-duotone",
			fak: "fa-kit",
			fal: "fa-light",
			far: "fa-regular",
			fas: "fa-solid",
			fat: "fa-thin",
		}),
		y(xt, b, {
			fass: "fa-solid",
			fasr: "fa-regular",
			fasl: "fa-light",
			fast: "fa-thin",
		}),
		xt),
	),
	Ke = ft(
		((At = {}),
		y(At, h, {
			"fa-brands": "fab",
			"fa-duotone": "fad",
			"fa-kit": "fak",
			"fa-light": "fal",
			"fa-regular": "far",
			"fa-solid": "fas",
			"fa-thin": "fat",
		}),
		y(At, b, {
			"fa-solid": "fass",
			"fa-regular": "fasr",
			"fa-light": "fasl",
			"fa-thin": "fast",
		}),
		At),
	),
	Je = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
	$n = "fa-layers-text",
	Qe =
		/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
	Ze = ft(
		((St = {}),
		y(St, h, { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" }),
		y(St, b, { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" }),
		St),
	),
	Ln = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	ta = Ln.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
	na = [
		"class",
		"data-prefix",
		"data-icon",
		"data-fa-transform",
		"data-fa-mask",
	],
	V = {
		GROUP: "duotone-group",
		SWAP_OPACITY: "swap-opacity",
		PRIMARY: "primary",
		SECONDARY: "secondary",
	},
	mt = new Set();
Object.keys(ct[h]).map(mt.add.bind(mt)),
	Object.keys(ct[b]).map(mt.add.bind(mt));
var ea = []
		.concat(Wt, st(mt), [
			"2xs",
			"xs",
			"sm",
			"lg",
			"xl",
			"2xl",
			"beat",
			"border",
			"fade",
			"beat-fade",
			"bounce",
			"flip-both",
			"flip-horizontal",
			"flip-vertical",
			"flip",
			"fw",
			"inverse",
			"layers-counter",
			"layers-text",
			"layers",
			"li",
			"pull-left",
			"pull-right",
			"pulse",
			"rotate-180",
			"rotate-270",
			"rotate-90",
			"rotate-by",
			"shake",
			"spin-pulse",
			"spin-reverse",
			"spin",
			"stack-1x",
			"stack-2x",
			"stack",
			"ul",
			V.GROUP,
			V.SWAP_OPACITY,
			V.PRIMARY,
			V.SECONDARY,
		])
		.concat(
			Ln.map(function (t) {
				return "".concat(t, "x");
			}),
		)
		.concat(
			ta.map(function (t) {
				return "w-".concat(t);
			}),
		),
	dt = L.FontAwesomeConfig || {};
function aa(t) {
	var n = p.querySelector("script[" + t + "]");
	if (n) return n.getAttribute(t);
}
function ra(t) {
	return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
p &&
	typeof p.querySelector == "function" &&
	((Rn = [
		["data-family-prefix", "familyPrefix"],
		["data-css-prefix", "cssPrefix"],
		["data-family-default", "familyDefault"],
		["data-style-default", "styleDefault"],
		["data-replacement-class", "replacementClass"],
		["data-auto-replace-svg", "autoReplaceSvg"],
		["data-auto-add-css", "autoAddCss"],
		["data-auto-a11y", "autoA11y"],
		["data-search-pseudo-elements", "searchPseudoElements"],
		["data-observe-mutations", "observeMutations"],
		["data-mutate-approach", "mutateApproach"],
		["data-keep-original-source", "keepOriginalSource"],
		["data-measure-performance", "measurePerformance"],
		["data-show-missing-icons", "showMissingIcons"],
	]),
	Rn.forEach(function (t) {
		var n = Rt(t, 2),
			e = n[0],
			a = n[1],
			r = ra(aa(e));
		r != null && (dt[a] = r);
	}));
var Rn,
	Fn = {
		styleDefault: "solid",
		familyDefault: "classic",
		cssPrefix: In,
		replacementClass: Tn,
		autoReplaceSvg: !0,
		autoAddCss: !0,
		autoA11y: !0,
		searchPseudoElements: !1,
		observeMutations: !0,
		mutateApproach: "async",
		keepOriginalSource: !0,
		measurePerformance: !1,
		showMissingIcons: !0,
	};
dt.familyPrefix && (dt.cssPrefix = dt.familyPrefix);
var J = c(c({}, Fn), dt);
J.autoReplaceSvg || (J.observeMutations = !1);
var m = {};
Object.keys(Fn).forEach(function (t) {
	Object.defineProperty(m, t, {
		enumerable: !0,
		set: function (e) {
			(J[t] = e),
				vt.forEach(function (a) {
					return a(m);
				});
		},
		get: function () {
			return J[t];
		},
	});
}),
	Object.defineProperty(m, "familyPrefix", {
		enumerable: !0,
		set: function (n) {
			(J.cssPrefix = n),
				vt.forEach(function (e) {
					return e(m);
				});
		},
		get: function () {
			return J.cssPrefix;
		},
	}),
	(L.FontAwesomeConfig = m);
var vt = [];
function ia(t) {
	return (
		vt.push(t),
		function () {
			vt.splice(vt.indexOf(t), 1);
		}
	);
}
var R = jt,
	N = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function oa(t) {
	if (!(!t || !I)) {
		var n = p.createElement("style");
		n.setAttribute("type", "text/css"), (n.innerHTML = t);
		for (var e = p.head.childNodes, a = null, r = e.length - 1; r > -1; r--) {
			var i = e[r],
				o = (i.tagName || "").toUpperCase();
			["STYLE", "LINK"].indexOf(o) > -1 && (a = i);
		}
		return p.head.insertBefore(n, a), t;
	}
}
var sa = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function gt() {
	for (var t = 12, n = ""; t-- > 0; ) n += sa[(Math.random() * 62) | 0];
	return n;
}
function Q(t) {
	for (var n = [], e = (t || []).length >>> 0; e--; ) n[e] = t[e];
	return n;
}
function Ht(t) {
	return t.classList
		? Q(t.classList)
		: (t.getAttribute("class") || "").split(" ").filter(function (n) {
				return n;
			});
}
function Dn(t) {
	return ""
		.concat(t)
		.replace(/&/g, "&amp;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
}
function fa(t) {
	return Object.keys(t || {})
		.reduce(function (n, e) {
			return n + "".concat(e, '="').concat(Dn(t[e]), '" ');
		}, "")
		.trim();
}
function _t(t) {
	return Object.keys(t || {}).reduce(function (n, e) {
		return n + "".concat(e, ": ").concat(t[e].trim(), ";");
	}, "");
}
function Vt(t) {
	return (
		t.size !== N.size ||
		t.x !== N.x ||
		t.y !== N.y ||
		t.rotate !== N.rotate ||
		t.flipX ||
		t.flipY
	);
}
function la(t) {
	var n = t.transform,
		e = t.containerWidth,
		a = t.iconWidth,
		r = { transform: "translate(".concat(e / 2, " 256)") },
		i = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "),
		o = "scale("
			.concat((n.size / 16) * (n.flipX ? -1 : 1), ", ")
			.concat((n.size / 16) * (n.flipY ? -1 : 1), ") "),
		s = "rotate(".concat(n.rotate, " 0 0)"),
		f = { transform: "".concat(i, " ").concat(o, " ").concat(s) },
		u = { transform: "translate(".concat((a / 2) * -1, " -256)") };
	return { outer: r, inner: f, path: u };
}
function ca(t) {
	var n = t.transform,
		e = t.width,
		a = e === void 0 ? jt : e,
		r = t.height,
		i = r === void 0 ? jt : r,
		o = t.startCentered,
		s = o === void 0 ? !1 : o,
		f = "";
	return (
		s && Nn
			? (f += "translate("
					.concat(n.x / R - a / 2, "em, ")
					.concat(n.y / R - i / 2, "em) "))
			: s
				? (f += "translate(calc(-50% + "
						.concat(n.x / R, "em), calc(-50% + ")
						.concat(n.y / R, "em)) "))
				: (f += "translate(".concat(n.x / R, "em, ").concat(n.y / R, "em) ")),
		(f += "scale("
			.concat((n.size / R) * (n.flipX ? -1 : 1), ", ")
			.concat((n.size / R) * (n.flipY ? -1 : 1), ") ")),
		(f += "rotate(".concat(n.rotate, "deg) ")),
		f
	);
}
var ua = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function jn() {
	var t = In,
		n = Tn,
		e = m.cssPrefix,
		a = m.replacementClass,
		r = ua;
	if (e !== t || a !== n) {
		var i = new RegExp("\\.".concat(t, "\\-"), "g"),
			o = new RegExp("\\--".concat(t, "\\-"), "g"),
			s = new RegExp("\\.".concat(n), "g");
		r = r
			.replace(i, ".".concat(e, "-"))
			.replace(o, "--".concat(e, "-"))
			.replace(s, ".".concat(a));
	}
	return r;
}
var Yn = !1;
function Gt() {
	m.autoAddCss && !Yn && (oa(jn()), (Yn = !0));
}
var ma = {
		mixout: function () {
			return { dom: { css: jn, insertCss: Gt } };
		},
		hooks: function () {
			return {
				beforeDOMElementCreation: function () {
					Gt();
				},
				beforeI2svg: function () {
					Gt();
				},
			};
		},
	},
	M = L || {};
M[T] || (M[T] = {}),
	M[T].styles || (M[T].styles = {}),
	M[T].hooks || (M[T].hooks = {}),
	M[T].shims || (M[T].shims = []);
var P = M[T],
	Un = [],
	da = function t() {
		p.removeEventListener("DOMContentLoaded", t),
			(Et = 1),
			Un.map(function (n) {
				return n();
			});
	},
	Et = !1;
I &&
	((Et = (p.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
		p.readyState,
	)),
	Et || p.addEventListener("DOMContentLoaded", da));
function va(t) {
	!I || (Et ? setTimeout(t, 0) : Un.push(t));
}
function pt(t) {
	var n = t.tag,
		e = t.attributes,
		a = e === void 0 ? {} : e,
		r = t.children,
		i = r === void 0 ? [] : r;
	return typeof t == "string"
		? Dn(t)
		: "<"
				.concat(n, " ")
				.concat(fa(a), ">")
				.concat(i.map(pt).join(""), "</")
				.concat(n, ">");
}
function Bn(t, n, e) {
	if (t && t[n] && t[n][e]) return { prefix: n, iconName: e, icon: t[n][e] };
}
var ga = function (n, e) {
		return function (a, r, i, o) {
			return n.call(e, a, r, i, o);
		};
	},
	Xt = function (n, e, a, r) {
		var i = Object.keys(n),
			o = i.length,
			s = r !== void 0 ? ga(e, r) : e,
			f,
			u,
			l;
		for (
			a === void 0 ? ((f = 1), (l = n[i[0]])) : ((f = 0), (l = a));
			f < o;
			f++
		)
			(u = i[f]), (l = s(l, n[u], u, n));
		return l;
	};
function pa(t) {
	for (var n = [], e = 0, a = t.length; e < a; ) {
		var r = t.charCodeAt(e++);
		if (r >= 55296 && r <= 56319 && e < a) {
			var i = t.charCodeAt(e++);
			(i & 64512) == 56320
				? n.push(((r & 1023) << 10) + (i & 1023) + 65536)
				: (n.push(r), e--);
		} else n.push(r);
	}
	return n;
}
function qt(t) {
	var n = pa(t);
	return n.length === 1 ? n[0].toString(16) : null;
}
function ha(t, n) {
	var e = t.length,
		a = t.charCodeAt(n),
		r;
	return a >= 55296 &&
		a <= 56319 &&
		e > n + 1 &&
		((r = t.charCodeAt(n + 1)), r >= 56320 && r <= 57343)
		? (a - 55296) * 1024 + r - 56320 + 65536
		: a;
}
function Wn(t) {
	return Object.keys(t).reduce(function (n, e) {
		var a = t[e],
			r = !!a.icon;
		return r ? (n[a.iconName] = a.icon) : (n[e] = a), n;
	}, {});
}
function Kt(t, n) {
	var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
		a = e.skipHooks,
		r = a === void 0 ? !1 : a,
		i = Wn(n);
	typeof P.hooks.addPack == "function" && !r
		? P.hooks.addPack(t, Wn(n))
		: (P.styles[t] = c(c({}, P.styles[t] || {}), i)),
		t === "fas" && Kt("fa", n);
}
var Pt,
	Ct,
	Ot,
	Z = P.styles,
	ba = P.shims,
	ya =
		((Pt = {}),
		y(Pt, h, Object.values(ut[h])),
		y(Pt, b, Object.values(ut[b])),
		Pt),
	Jt = null,
	Hn = {},
	Vn = {},
	Gn = {},
	Xn = {},
	qn = {},
	ka =
		((Ct = {}), y(Ct, h, Object.keys(lt[h])), y(Ct, b, Object.keys(lt[b])), Ct);
function wa(t) {
	return ~ea.indexOf(t);
}
function xa(t, n) {
	var e = n.split("-"),
		a = e[0],
		r = e.slice(1).join("-");
	return a === t && r !== "" && !wa(r) ? r : null;
}
var Kn = function () {
	var n = function (i) {
		return Xt(
			Z,
			function (o, s, f) {
				return (o[f] = Xt(s, i, {})), o;
			},
			{},
		);
	};
	(Hn = n(function (r, i, o) {
		if ((i[3] && (r[i[3]] = o), i[2])) {
			var s = i[2].filter(function (f) {
				return typeof f == "number";
			});
			s.forEach(function (f) {
				r[f.toString(16)] = o;
			});
		}
		return r;
	})),
		(Vn = n(function (r, i, o) {
			if (((r[o] = o), i[2])) {
				var s = i[2].filter(function (f) {
					return typeof f == "string";
				});
				s.forEach(function (f) {
					r[f] = o;
				});
			}
			return r;
		})),
		(qn = n(function (r, i, o) {
			var s = i[2];
			return (
				(r[o] = o),
				s.forEach(function (f) {
					r[f] = o;
				}),
				r
			);
		}));
	var e = "far" in Z || m.autoFetchSvg,
		a = Xt(
			ba,
			function (r, i) {
				var o = i[0],
					s = i[1],
					f = i[2];
				return (
					s === "far" && !e && (s = "fas"),
					typeof o == "string" && (r.names[o] = { prefix: s, iconName: f }),
					typeof o == "number" &&
						(r.unicodes[o.toString(16)] = { prefix: s, iconName: f }),
					r
				);
			},
			{ names: {}, unicodes: {} },
		);
	(Gn = a.names),
		(Xn = a.unicodes),
		(Jt = Nt(m.styleDefault, { family: m.familyDefault }));
};
ia(function (t) {
	Jt = Nt(t.styleDefault, { family: m.familyDefault });
}),
	Kn();
function Qt(t, n) {
	return (Hn[t] || {})[n];
}
function Aa(t, n) {
	return (Vn[t] || {})[n];
}
function G(t, n) {
	return (qn[t] || {})[n];
}
function Jn(t) {
	return Gn[t] || { prefix: null, iconName: null };
}
function Sa(t) {
	var n = Xn[t],
		e = Qt("fas", t);
	return (
		n ||
		(e ? { prefix: "fas", iconName: e } : null) || {
			prefix: null,
			iconName: null,
		}
	);
}
function F() {
	return Jt;
}
var Zt = function () {
	return { prefix: null, iconName: null, rest: [] };
};
function Nt(t) {
	var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		e = n.family,
		a = e === void 0 ? h : e,
		r = lt[a][t],
		i = ct[a][t] || ct[a][r],
		o = t in P.styles ? t : null;
	return i || o || null;
}
var Qn =
	((Ot = {}), y(Ot, h, Object.keys(ut[h])), y(Ot, b, Object.keys(ut[b])), Ot);
function It(t) {
	var n,
		e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		a = e.skipLookups,
		r = a === void 0 ? !1 : a,
		i =
			((n = {}),
			y(n, h, "".concat(m.cssPrefix, "-").concat(h)),
			y(n, b, "".concat(m.cssPrefix, "-").concat(b)),
			n),
		o = null,
		s = h;
	(t.includes(i[h]) ||
		t.some(function (u) {
			return Qn[h].includes(u);
		})) &&
		(s = h),
		(t.includes(i[b]) ||
			t.some(function (u) {
				return Qn[b].includes(u);
			})) &&
			(s = b);
	var f = t.reduce(function (u, l) {
		var d = xa(m.cssPrefix, l);
		if (
			(Z[l]
				? ((l = ya[s].includes(l) ? Ke[s][l] : l), (o = l), (u.prefix = l))
				: ka[s].indexOf(l) > -1
					? ((o = l), (u.prefix = Nt(l, { family: s })))
					: d
						? (u.iconName = d)
						: l !== m.replacementClass &&
							l !== i[h] &&
							l !== i[b] &&
							u.rest.push(l),
			!r && u.prefix && u.iconName)
		) {
			var v = o === "fa" ? Jn(u.iconName) : {},
				g = G(u.prefix, u.iconName);
			v.prefix && (o = null),
				(u.iconName = v.iconName || g || u.iconName),
				(u.prefix = v.prefix || u.prefix),
				u.prefix === "far" &&
					!Z.far &&
					Z.fas &&
					!m.autoFetchSvg &&
					(u.prefix = "fas");
		}
		return u;
	}, Zt());
	return (
		(t.includes("fa-brands") || t.includes("fab")) && (f.prefix = "fab"),
		(t.includes("fa-duotone") || t.includes("fad")) && (f.prefix = "fad"),
		!f.prefix &&
			s === b &&
			(Z.fass || m.autoFetchSvg) &&
			((f.prefix = "fass"),
			(f.iconName = G(f.prefix, f.iconName) || f.iconName)),
		(f.prefix === "fa" || o === "fa") && (f.prefix = F() || "fas"),
		f
	);
}
var _a = (function () {
		function t() {
			Fe(this, t), (this.definitions = {});
		}
		return (
			De(t, [
				{
					key: "add",
					value: function () {
						for (
							var e = this, a = arguments.length, r = new Array(a), i = 0;
							i < a;
							i++
						)
							r[i] = arguments[i];
						var o = r.reduce(this._pullDefinitions, {});
						Object.keys(o).forEach(function (s) {
							(e.definitions[s] = c(c({}, e.definitions[s] || {}), o[s])),
								Kt(s, o[s]);
							var f = ut[h][s];
							f && Kt(f, o[s]), Kn();
						});
					},
				},
				{
					key: "reset",
					value: function () {
						this.definitions = {};
					},
				},
				{
					key: "_pullDefinitions",
					value: function (e, a) {
						var r = a.prefix && a.iconName && a.icon ? { 0: a } : a;
						return (
							Object.keys(r).map(function (i) {
								var o = r[i],
									s = o.prefix,
									f = o.iconName,
									u = o.icon,
									l = u[2];
								e[s] || (e[s] = {}),
									l.length > 0 &&
										l.forEach(function (d) {
											typeof d == "string" && (e[s][d] = u);
										}),
									(e[s][f] = u);
							}),
							e
						);
					},
				},
			]),
			t
		);
	})(),
	Zn = [],
	tt = {},
	nt = {},
	Ea = Object.keys(nt);
function Pa(t, n) {
	var e = n.mixoutsTo;
	return (
		(Zn = t),
		(tt = {}),
		Object.keys(nt).forEach(function (a) {
			Ea.indexOf(a) === -1 && delete nt[a];
		}),
		Zn.forEach(function (a) {
			var r = a.mixout ? a.mixout() : {};
			if (
				(Object.keys(r).forEach(function (o) {
					typeof r[o] == "function" && (e[o] = r[o]),
						bt(r[o]) === "object" &&
							Object.keys(r[o]).forEach(function (s) {
								e[o] || (e[o] = {}), (e[o][s] = r[o][s]);
							});
				}),
				a.hooks)
			) {
				var i = a.hooks();
				Object.keys(i).forEach(function (o) {
					tt[o] || (tt[o] = []), tt[o].push(i[o]);
				});
			}
			a.provides && a.provides(nt);
		}),
		e
	);
}
function tn(t, n) {
	for (
		var e = arguments.length, a = new Array(e > 2 ? e - 2 : 0), r = 2;
		r < e;
		r++
	)
		a[r - 2] = arguments[r];
	var i = tt[t] || [];
	return (
		i.forEach(function (o) {
			n = o.apply(null, [n].concat(a));
		}),
		n
	);
}
function X(t) {
	for (
		var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), a = 1;
		a < n;
		a++
	)
		e[a - 1] = arguments[a];
	var r = tt[t] || [];
	r.forEach(function (i) {
		i.apply(null, e);
	});
}
function z() {
	var t = arguments[0],
		n = Array.prototype.slice.call(arguments, 1);
	return nt[t] ? nt[t].apply(null, n) : void 0;
}
function nn(t) {
	t.prefix === "fa" && (t.prefix = "fas");
	var n = t.iconName,
		e = t.prefix || F();
	if (!!n)
		return (n = G(e, n) || n), Bn(te.definitions, e, n) || Bn(P.styles, e, n);
}
var te = new _a(),
	Ca = function () {
		(m.autoReplaceSvg = !1), (m.observeMutations = !1), X("noAuto");
	},
	Oa = {
		i2svg: function () {
			var n =
				arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			return I
				? (X("beforeI2svg", n), z("pseudoElements2svg", n), z("i2svg", n))
				: Promise.reject("Operation requires a DOM of some kind.");
		},
		watch: function () {
			var n =
					arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
				e = n.autoReplaceSvgRoot;
			m.autoReplaceSvg === !1 && (m.autoReplaceSvg = !0),
				(m.observeMutations = !0),
				va(function () {
					Ia({ autoReplaceSvgRoot: e }), X("watch", n);
				});
		},
	},
	Na = {
		icon: function (n) {
			if (n === null) return null;
			if (bt(n) === "object" && n.prefix && n.iconName)
				return {
					prefix: n.prefix,
					iconName: G(n.prefix, n.iconName) || n.iconName,
				};
			if (Array.isArray(n) && n.length === 2) {
				var e = n[1].indexOf("fa-") === 0 ? n[1].slice(3) : n[1],
					a = Nt(n[0]);
				return { prefix: a, iconName: G(a, e) || e };
			}
			if (
				typeof n == "string" &&
				(n.indexOf("".concat(m.cssPrefix, "-")) > -1 || n.match(Je))
			) {
				var r = It(n.split(" "), { skipLookups: !0 });
				return {
					prefix: r.prefix || F(),
					iconName: G(r.prefix, r.iconName) || r.iconName,
				};
			}
			if (typeof n == "string") {
				var i = F();
				return { prefix: i, iconName: G(i, n) || n };
			}
		},
	},
	S = {
		noAuto: Ca,
		config: m,
		dom: Oa,
		parse: Na,
		library: te,
		findIconDefinition: nn,
		toHtml: pt,
	},
	Ia = function () {
		var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			e = n.autoReplaceSvgRoot,
			a = e === void 0 ? p : e;
		(Object.keys(P.styles).length > 0 || m.autoFetchSvg) &&
			I &&
			m.autoReplaceSvg &&
			S.dom.i2svg({ node: a });
	};
function Tt(t, n) {
	return (
		Object.defineProperty(t, "abstract", { get: n }),
		Object.defineProperty(t, "html", {
			get: function () {
				return t.abstract.map(function (a) {
					return pt(a);
				});
			},
		}),
		Object.defineProperty(t, "node", {
			get: function () {
				if (!!I) {
					var a = p.createElement("div");
					return (a.innerHTML = t.html), a.children;
				}
			},
		}),
		t
	);
}
function Ta(t) {
	var n = t.children,
		e = t.main,
		a = t.mask,
		r = t.attributes,
		i = t.styles,
		o = t.transform;
	if (Vt(o) && e.found && !a.found) {
		var s = e.width,
			f = e.height,
			u = { x: s / f / 2, y: 0.5 };
		r.style = _t(
			c(
				c({}, i),
				{},
				{
					"transform-origin": ""
						.concat(u.x + o.x / 16, "em ")
						.concat(u.y + o.y / 16, "em"),
				},
			),
		);
	}
	return [{ tag: "svg", attributes: r, children: n }];
}
function Ma(t) {
	var n = t.prefix,
		e = t.iconName,
		a = t.children,
		r = t.attributes,
		i = t.symbol,
		o = i === !0 ? "".concat(n, "-").concat(m.cssPrefix, "-").concat(e) : i;
	return [
		{
			tag: "svg",
			attributes: { style: "display: none;" },
			children: [
				{ tag: "symbol", attributes: c(c({}, r), {}, { id: o }), children: a },
			],
		},
	];
}
function en(t) {
	var n = t.icons,
		e = n.main,
		a = n.mask,
		r = t.prefix,
		i = t.iconName,
		o = t.transform,
		s = t.symbol,
		f = t.title,
		u = t.maskId,
		l = t.titleId,
		d = t.extra,
		v = t.watchable,
		g = v === void 0 ? !1 : v,
		w = a.found ? a : e,
		_ = w.width,
		E = w.height,
		C = r === "fak",
		k = [m.replacementClass, i ? "".concat(m.cssPrefix, "-").concat(i) : ""]
			.filter(function ($) {
				return d.classes.indexOf($) === -1;
			})
			.filter(function ($) {
				return $ !== "" || !!$;
			})
			.concat(d.classes)
			.join(" "),
		x = {
			children: [],
			attributes: c(
				c({}, d.attributes),
				{},
				{
					"data-prefix": r,
					"data-icon": i,
					class: k,
					role: d.attributes.role || "img",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 ".concat(_, " ").concat(E),
				},
			),
		},
		O =
			C && !~d.classes.indexOf("fa-fw")
				? { width: "".concat((_ / E) * 16 * 0.0625, "em") }
				: {};
	g && (x.attributes[H] = ""),
		f &&
			(x.children.push({
				tag: "title",
				attributes: {
					id: x.attributes["aria-labelledby"] || "title-".concat(l || gt()),
				},
				children: [f],
			}),
			delete x.attributes.title);
	var A = c(
			c({}, x),
			{},
			{
				prefix: r,
				iconName: i,
				main: e,
				mask: a,
				maskId: u,
				transform: o,
				symbol: s,
				styles: c(c({}, O), d.styles),
			},
		),
		j =
			a.found && e.found
				? z("generateAbstractMask", A) || { children: [], attributes: {} }
				: z("generateAbstractIcon", A) || { children: [], attributes: {} },
		Y = j.children,
		Lt = j.attributes;
	return (A.children = Y), (A.attributes = Lt), s ? Ma(A) : Ta(A);
}
function ne(t) {
	var n = t.content,
		e = t.width,
		a = t.height,
		r = t.transform,
		i = t.title,
		o = t.extra,
		s = t.watchable,
		f = s === void 0 ? !1 : s,
		u = c(
			c(c({}, o.attributes), i ? { title: i } : {}),
			{},
			{ class: o.classes.join(" ") },
		);
	f && (u[H] = "");
	var l = c({}, o.styles);
	Vt(r) &&
		((l.transform = ca({
			transform: r,
			startCentered: !0,
			width: e,
			height: a,
		})),
		(l["-webkit-transform"] = l.transform));
	var d = _t(l);
	d.length > 0 && (u.style = d);
	var v = [];
	return (
		v.push({ tag: "span", attributes: u, children: [n] }),
		i &&
			v.push({ tag: "span", attributes: { class: "sr-only" }, children: [i] }),
		v
	);
}
function za(t) {
	var n = t.content,
		e = t.title,
		a = t.extra,
		r = c(
			c(c({}, a.attributes), e ? { title: e } : {}),
			{},
			{ class: a.classes.join(" ") },
		),
		i = _t(a.styles);
	i.length > 0 && (r.style = i);
	var o = [];
	return (
		o.push({ tag: "span", attributes: r, children: [n] }),
		e &&
			o.push({ tag: "span", attributes: { class: "sr-only" }, children: [e] }),
		o
	);
}
var an = P.styles;
function rn(t) {
	var n = t[0],
		e = t[1],
		a = t.slice(4),
		r = Rt(a, 1),
		i = r[0],
		o = null;
	return (
		Array.isArray(i)
			? (o = {
					tag: "g",
					attributes: { class: "".concat(m.cssPrefix, "-").concat(V.GROUP) },
					children: [
						{
							tag: "path",
							attributes: {
								class: "".concat(m.cssPrefix, "-").concat(V.SECONDARY),
								fill: "currentColor",
								d: i[0],
							},
						},
						{
							tag: "path",
							attributes: {
								class: "".concat(m.cssPrefix, "-").concat(V.PRIMARY),
								fill: "currentColor",
								d: i[1],
							},
						},
					],
				})
			: (o = { tag: "path", attributes: { fill: "currentColor", d: i } }),
		{ found: !0, width: n, height: e, icon: o }
	);
}
var $a = { found: !1, width: 512, height: 512 };
function La(t, n) {
	!zn &&
		!m.showMissingIcons &&
		t &&
		console.error(
			'Icon with name "'.concat(t, '" and prefix "').concat(n, '" is missing.'),
		);
}
function on(t, n) {
	var e = n;
	return (
		n === "fa" && m.styleDefault !== null && (n = F()),
		new Promise(function (a, r) {
			if ((z("missingIconAbstract"), e === "fa")) {
				var i = Jn(t) || {};
				(t = i.iconName || t), (n = i.prefix || n);
			}
			if (t && n && an[n] && an[n][t]) {
				var o = an[n][t];
				return a(rn(o));
			}
			La(t, n),
				a(
					c(
						c({}, $a),
						{},
						{
							icon:
								m.showMissingIcons && t ? z("missingIconAbstract") || {} : {},
						},
					),
				);
		})
	);
}
var ee = function () {},
	sn =
		m.measurePerformance && yt && yt.mark && yt.measure
			? yt
			: { mark: ee, measure: ee },
	ht = 'FA "6.5.1"',
	Ra = function (n) {
		return (
			sn.mark("".concat(ht, " ").concat(n, " begins")),
			function () {
				return ae(n);
			}
		);
	},
	ae = function (n) {
		sn.mark("".concat(ht, " ").concat(n, " ends")),
			sn.measure(
				"".concat(ht, " ").concat(n),
				"".concat(ht, " ").concat(n, " begins"),
				"".concat(ht, " ").concat(n, " ends"),
			);
	},
	fn = { begin: Ra, end: ae },
	Mt = function () {};
function re(t) {
	var n = t.getAttribute ? t.getAttribute(H) : null;
	return typeof n == "string";
}
function Fa(t) {
	var n = t.getAttribute ? t.getAttribute(Ut) : null,
		e = t.getAttribute ? t.getAttribute(Bt) : null;
	return n && e;
}
function Da(t) {
	return (
		t &&
		t.classList &&
		t.classList.contains &&
		t.classList.contains(m.replacementClass)
	);
}
function ja() {
	if (m.autoReplaceSvg === !0) return zt.replace;
	var t = zt[m.autoReplaceSvg];
	return t || zt.replace;
}
function Ya(t) {
	return p.createElementNS("http://www.w3.org/2000/svg", t);
}
function Ua(t) {
	return p.createElement(t);
}
function ie(t) {
	var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		e = n.ceFn,
		a = e === void 0 ? (t.tag === "svg" ? Ya : Ua) : e;
	if (typeof t == "string") return p.createTextNode(t);
	var r = a(t.tag);
	Object.keys(t.attributes || []).forEach(function (o) {
		r.setAttribute(o, t.attributes[o]);
	});
	var i = t.children || [];
	return (
		i.forEach(function (o) {
			r.appendChild(ie(o, { ceFn: a }));
		}),
		r
	);
}
function Ba(t) {
	var n = " ".concat(t.outerHTML, " ");
	return (n = "".concat(n, "Font Awesome fontawesome.com ")), n;
}
var zt = {
	replace: function (n) {
		var e = n[0];
		if (e.parentNode)
			if (
				(n[1].forEach(function (r) {
					e.parentNode.insertBefore(ie(r), e);
				}),
				e.getAttribute(H) === null && m.keepOriginalSource)
			) {
				var a = p.createComment(Ba(e));
				e.parentNode.replaceChild(a, e);
			} else e.remove();
	},
	nest: function (n) {
		var e = n[0],
			a = n[1];
		if (~Ht(e).indexOf(m.replacementClass)) return zt.replace(n);
		var r = new RegExp("".concat(m.cssPrefix, "-.*"));
		if ((delete a[0].attributes.id, a[0].attributes.class)) {
			var i = a[0].attributes.class.split(" ").reduce(
				function (s, f) {
					return (
						f === m.replacementClass || f.match(r)
							? s.toSvg.push(f)
							: s.toNode.push(f),
						s
					);
				},
				{ toNode: [], toSvg: [] },
			);
			(a[0].attributes.class = i.toSvg.join(" ")),
				i.toNode.length === 0
					? e.removeAttribute("class")
					: e.setAttribute("class", i.toNode.join(" "));
		}
		var o = a.map(function (s) {
			return pt(s);
		}).join(`
`);
		e.setAttribute(H, ""), (e.innerHTML = o);
	},
};
function oe(t) {
	t();
}
function se(t, n) {
	var e = typeof n == "function" ? n : Mt;
	if (t.length === 0) e();
	else {
		var a = oe;
		m.mutateApproach === Xe && (a = L.requestAnimationFrame || oe),
			a(function () {
				var r = ja(),
					i = fn.begin("mutate");
				t.map(r), i(), e();
			});
	}
}
var ln = !1;
function fe() {
	ln = !0;
}
function cn() {
	ln = !1;
}
var $t = null;
function le(t) {
	if (!!On && !!m.observeMutations) {
		var n = t.treeCallback,
			e = n === void 0 ? Mt : n,
			a = t.nodeCallback,
			r = a === void 0 ? Mt : a,
			i = t.pseudoElementsCallback,
			o = i === void 0 ? Mt : i,
			s = t.observeMutationsRoot,
			f = s === void 0 ? p : s;
		($t = new On(function (u) {
			if (!ln) {
				var l = F();
				Q(u).forEach(function (d) {
					if (
						(d.type === "childList" &&
							d.addedNodes.length > 0 &&
							!re(d.addedNodes[0]) &&
							(m.searchPseudoElements && o(d.target), e(d.target)),
						d.type === "attributes" &&
							d.target.parentNode &&
							m.searchPseudoElements &&
							o(d.target.parentNode),
						d.type === "attributes" &&
							re(d.target) &&
							~na.indexOf(d.attributeName))
					)
						if (d.attributeName === "class" && Fa(d.target)) {
							var v = It(Ht(d.target)),
								g = v.prefix,
								w = v.iconName;
							d.target.setAttribute(Ut, g || l),
								w && d.target.setAttribute(Bt, w);
						} else Da(d.target) && r(d.target);
				});
			}
		})),
			!!I &&
				$t.observe(f, {
					childList: !0,
					attributes: !0,
					characterData: !0,
					subtree: !0,
				});
	}
}
function Wa() {
	!$t || $t.disconnect();
}
function Ha(t) {
	var n = t.getAttribute("style"),
		e = [];
	return (
		n &&
			(e = n.split(";").reduce(function (a, r) {
				var i = r.split(":"),
					o = i[0],
					s = i.slice(1);
				return o && s.length > 0 && (a[o] = s.join(":").trim()), a;
			}, {})),
		e
	);
}
function Va(t) {
	var n = t.getAttribute("data-prefix"),
		e = t.getAttribute("data-icon"),
		a = t.innerText !== void 0 ? t.innerText.trim() : "",
		r = It(Ht(t));
	return (
		r.prefix || (r.prefix = F()),
		n && e && ((r.prefix = n), (r.iconName = e)),
		(r.iconName && r.prefix) ||
			(r.prefix &&
				a.length > 0 &&
				(r.iconName =
					Aa(r.prefix, t.innerText) || Qt(r.prefix, qt(t.innerText))),
			!r.iconName &&
				m.autoFetchSvg &&
				t.firstChild &&
				t.firstChild.nodeType === Node.TEXT_NODE &&
				(r.iconName = t.firstChild.data)),
		r
	);
}
function Ga(t) {
	var n = Q(t.attributes).reduce(function (r, i) {
			return (
				r.name !== "class" && r.name !== "style" && (r[i.name] = i.value), r
			);
		}, {}),
		e = t.getAttribute("title"),
		a = t.getAttribute("data-fa-title-id");
	return (
		m.autoA11y &&
			(e
				? (n["aria-labelledby"] = ""
						.concat(m.replacementClass, "-title-")
						.concat(a || gt()))
				: ((n["aria-hidden"] = "true"), (n.focusable = "false"))),
		n
	);
}
function Xa() {
	return {
		iconName: null,
		title: null,
		titleId: null,
		prefix: null,
		transform: N,
		symbol: !1,
		mask: { iconName: null, prefix: null, rest: [] },
		maskId: null,
		extra: { classes: [], styles: {}, attributes: {} },
	};
}
function ce(t) {
	var n =
			arguments.length > 1 && arguments[1] !== void 0
				? arguments[1]
				: { styleParser: !0 },
		e = Va(t),
		a = e.iconName,
		r = e.prefix,
		i = e.rest,
		o = Ga(t),
		s = tn("parseNodeAttributes", {}, t),
		f = n.styleParser ? Ha(t) : [];
	return c(
		{
			iconName: a,
			title: t.getAttribute("title"),
			titleId: t.getAttribute("data-fa-title-id"),
			prefix: r,
			transform: N,
			mask: { iconName: null, prefix: null, rest: [] },
			maskId: null,
			symbol: !1,
			extra: { classes: i, styles: f, attributes: o },
		},
		s,
	);
}
var qa = P.styles;
function ue(t) {
	var n = m.autoReplaceSvg === "nest" ? ce(t, { styleParser: !1 }) : ce(t);
	return ~n.extra.classes.indexOf($n)
		? z("generateLayersText", t, n)
		: z("generateSvgReplacementMutation", t, n);
}
var D = new Set();
Wt.map(function (t) {
	D.add("fa-".concat(t));
}),
	Object.keys(lt[h]).map(D.add.bind(D)),
	Object.keys(lt[b]).map(D.add.bind(D)),
	(D = st(D));
function me(t) {
	var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
	if (!I) return Promise.resolve();
	var e = p.documentElement.classList,
		a = function (d) {
			return e.add("".concat(Mn, "-").concat(d));
		},
		r = function (d) {
			return e.remove("".concat(Mn, "-").concat(d));
		},
		i = m.autoFetchSvg
			? D
			: Wt.map(function (l) {
					return "fa-".concat(l);
				}).concat(Object.keys(qa));
	i.includes("fa") || i.push("fa");
	var o = [".".concat($n, ":not([").concat(H, "])")]
		.concat(
			i.map(function (l) {
				return ".".concat(l, ":not([").concat(H, "])");
			}),
		)
		.join(", ");
	if (o.length === 0) return Promise.resolve();
	var s = [];
	try {
		s = Q(t.querySelectorAll(o));
	} catch (l) {}
	if (s.length > 0) a("pending"), r("complete");
	else return Promise.resolve();
	var f = fn.begin("onTree"),
		u = s.reduce(function (l, d) {
			try {
				var v = ue(d);
				v && l.push(v);
			} catch (g) {
				zn || (g.name === "MissingIcon" && console.error(g));
			}
			return l;
		}, []);
	return new Promise(function (l, d) {
		Promise.all(u)
			.then(function (v) {
				se(v, function () {
					a("active"),
						a("complete"),
						r("pending"),
						typeof n == "function" && n(),
						f(),
						l();
				});
			})
			.catch(function (v) {
				f(), d(v);
			});
	});
}
function Ka(t) {
	var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
	ue(t).then(function (e) {
		e && se([e], n);
	});
}
function Ja(t) {
	return function (n) {
		var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
			a = (n || {}).icon ? n : nn(n || {}),
			r = e.mask;
		return (
			r && (r = (r || {}).icon ? r : nn(r || {})),
			t(a, c(c({}, e), {}, { mask: r }))
		);
	};
}
var Qa = function (n) {
		var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
			a = e.transform,
			r = a === void 0 ? N : a,
			i = e.symbol,
			o = i === void 0 ? !1 : i,
			s = e.mask,
			f = s === void 0 ? null : s,
			u = e.maskId,
			l = u === void 0 ? null : u,
			d = e.title,
			v = d === void 0 ? null : d,
			g = e.titleId,
			w = g === void 0 ? null : g,
			_ = e.classes,
			E = _ === void 0 ? [] : _,
			C = e.attributes,
			k = C === void 0 ? {} : C,
			x = e.styles,
			O = x === void 0 ? {} : x;
		if (!!n) {
			var A = n.prefix,
				j = n.iconName,
				Y = n.icon;
			return Tt(c({ type: "icon" }, n), function () {
				return (
					X("beforeDOMElementCreation", { iconDefinition: n, params: e }),
					m.autoA11y &&
						(v
							? (k["aria-labelledby"] = ""
									.concat(m.replacementClass, "-title-")
									.concat(w || gt()))
							: ((k["aria-hidden"] = "true"), (k.focusable = "false"))),
					en({
						icons: {
							main: rn(Y),
							mask: f
								? rn(f.icon)
								: { found: !1, width: null, height: null, icon: {} },
						},
						prefix: A,
						iconName: j,
						transform: c(c({}, N), r),
						symbol: o,
						title: v,
						maskId: l,
						titleId: w,
						extra: { attributes: k, styles: O, classes: E },
					})
				);
			});
		}
	},
	Za = {
		mixout: function () {
			return { icon: Ja(Qa) };
		},
		hooks: function () {
			return {
				mutationObserverCallbacks: function (e) {
					return (e.treeCallback = me), (e.nodeCallback = Ka), e;
				},
			};
		},
		provides: function (n) {
			(n.i2svg = function (e) {
				var a = e.node,
					r = a === void 0 ? p : a,
					i = e.callback,
					o = i === void 0 ? function () {} : i;
				return me(r, o);
			}),
				(n.generateSvgReplacementMutation = function (e, a) {
					var r = a.iconName,
						i = a.title,
						o = a.titleId,
						s = a.prefix,
						f = a.transform,
						u = a.symbol,
						l = a.mask,
						d = a.maskId,
						v = a.extra;
					return new Promise(function (g, w) {
						Promise.all([
							on(r, s),
							l.iconName
								? on(l.iconName, l.prefix)
								: Promise.resolve({
										found: !1,
										width: 512,
										height: 512,
										icon: {},
									}),
						])
							.then(function (_) {
								var E = Rt(_, 2),
									C = E[0],
									k = E[1];
								g([
									e,
									en({
										icons: { main: C, mask: k },
										prefix: s,
										iconName: r,
										transform: f,
										symbol: u,
										maskId: d,
										title: i,
										titleId: o,
										extra: v,
										watchable: !0,
									}),
								]);
							})
							.catch(w);
					});
				}),
				(n.generateAbstractIcon = function (e) {
					var a = e.children,
						r = e.attributes,
						i = e.main,
						o = e.transform,
						s = e.styles,
						f = _t(s);
					f.length > 0 && (r.style = f);
					var u;
					return (
						Vt(o) &&
							(u = z("generateAbstractTransformGrouping", {
								main: i,
								transform: o,
								containerWidth: i.width,
								iconWidth: i.width,
							})),
						a.push(u || i.icon),
						{ children: a, attributes: r }
					);
				});
		},
	},
	tr = {
		mixout: function () {
			return {
				layer: function (e) {
					var a =
							arguments.length > 1 && arguments[1] !== void 0
								? arguments[1]
								: {},
						r = a.classes,
						i = r === void 0 ? [] : r;
					return Tt({ type: "layer" }, function () {
						X("beforeDOMElementCreation", { assembler: e, params: a });
						var o = [];
						return (
							e(function (s) {
								Array.isArray(s)
									? s.map(function (f) {
											o = o.concat(f.abstract);
										})
									: (o = o.concat(s.abstract));
							}),
							[
								{
									tag: "span",
									attributes: {
										class: ["".concat(m.cssPrefix, "-layers")]
											.concat(st(i))
											.join(" "),
									},
									children: o,
								},
							]
						);
					});
				},
			};
		},
	},
	nr = {
		mixout: function () {
			return {
				counter: function (e) {
					var a =
							arguments.length > 1 && arguments[1] !== void 0
								? arguments[1]
								: {},
						r = a.title,
						i = r === void 0 ? null : r,
						o = a.classes,
						s = o === void 0 ? [] : o,
						f = a.attributes,
						u = f === void 0 ? {} : f,
						l = a.styles,
						d = l === void 0 ? {} : l;
					return Tt({ type: "counter", content: e }, function () {
						return (
							X("beforeDOMElementCreation", { content: e, params: a }),
							za({
								content: e.toString(),
								title: i,
								extra: {
									attributes: u,
									styles: d,
									classes: ["".concat(m.cssPrefix, "-layers-counter")].concat(
										st(s),
									),
								},
							})
						);
					});
				},
			};
		},
	},
	er = {
		mixout: function () {
			return {
				text: function (e) {
					var a =
							arguments.length > 1 && arguments[1] !== void 0
								? arguments[1]
								: {},
						r = a.transform,
						i = r === void 0 ? N : r,
						o = a.title,
						s = o === void 0 ? null : o,
						f = a.classes,
						u = f === void 0 ? [] : f,
						l = a.attributes,
						d = l === void 0 ? {} : l,
						v = a.styles,
						g = v === void 0 ? {} : v;
					return Tt({ type: "text", content: e }, function () {
						return (
							X("beforeDOMElementCreation", { content: e, params: a }),
							ne({
								content: e,
								transform: c(c({}, N), i),
								title: s,
								extra: {
									attributes: d,
									styles: g,
									classes: ["".concat(m.cssPrefix, "-layers-text")].concat(
										st(u),
									),
								},
							})
						);
					});
				},
			};
		},
		provides: function (n) {
			n.generateLayersText = function (e, a) {
				var r = a.title,
					i = a.transform,
					o = a.extra,
					s = null,
					f = null;
				if (Nn) {
					var u = parseInt(getComputedStyle(e).fontSize, 10),
						l = e.getBoundingClientRect();
					(s = l.width / u), (f = l.height / u);
				}
				return (
					m.autoA11y && !r && (o.attributes["aria-hidden"] = "true"),
					Promise.resolve([
						e,
						ne({
							content: e.innerHTML,
							width: s,
							height: f,
							transform: i,
							title: r,
							extra: o,
							watchable: !0,
						}),
					])
				);
			};
		},
	},
	ar = new RegExp('"', "ug"),
	de = [1105920, 1112319];
function rr(t) {
	var n = t.replace(ar, ""),
		e = ha(n, 0),
		a = e >= de[0] && e <= de[1],
		r = n.length === 2 ? n[0] === n[1] : !1;
	return { value: qt(r ? n[0] : n), isSecondary: a || r };
}
function ve(t, n) {
	var e = "".concat(Ge).concat(n.replace(":", "-"));
	return new Promise(function (a, r) {
		if (t.getAttribute(e) !== null) return a();
		var i = Q(t.children),
			o = i.filter(function (Y) {
				return Y.getAttribute(Yt) === n;
			})[0],
			s = L.getComputedStyle(t, n),
			f = s.getPropertyValue("font-family").match(Qe),
			u = s.getPropertyValue("font-weight"),
			l = s.getPropertyValue("content");
		if (o && !f) return t.removeChild(o), a();
		if (f && l !== "none" && l !== "") {
			var d = s.getPropertyValue("content"),
				v = ~["Sharp"].indexOf(f[2]) ? b : h,
				g = ~[
					"Solid",
					"Regular",
					"Light",
					"Thin",
					"Duotone",
					"Brands",
					"Kit",
				].indexOf(f[2])
					? ct[v][f[2].toLowerCase()]
					: Ze[v][u],
				w = rr(d),
				_ = w.value,
				E = w.isSecondary,
				C = f[0].startsWith("FontAwesome"),
				k = Qt(g, _),
				x = k;
			if (C) {
				var O = Sa(_);
				O.iconName && O.prefix && ((k = O.iconName), (g = O.prefix));
			}
			if (
				k &&
				!E &&
				(!o || o.getAttribute(Ut) !== g || o.getAttribute(Bt) !== x)
			) {
				t.setAttribute(e, x), o && t.removeChild(o);
				var A = Xa(),
					j = A.extra;
				(j.attributes[Yt] = n),
					on(k, g)
						.then(function (Y) {
							var Lt = en(
									c(
										c({}, A),
										{},
										{
											icons: { main: Y, mask: Zt() },
											prefix: g,
											iconName: x,
											extra: j,
											watchable: !0,
										},
									),
								),
								$ = p.createElementNS("http://www.w3.org/2000/svg", "svg");
							n === "::before"
								? t.insertBefore($, t.firstChild)
								: t.appendChild($),
								($.outerHTML = Lt.map(function (ke) {
									return pt(ke);
								}).join(`
`)),
								t.removeAttribute(e),
								a();
						})
						.catch(r);
			} else a();
		} else a();
	});
}
function ir(t) {
	return Promise.all([ve(t, "::before"), ve(t, "::after")]);
}
function or(t) {
	return (
		t.parentNode !== document.head &&
		!~qe.indexOf(t.tagName.toUpperCase()) &&
		!t.getAttribute(Yt) &&
		(!t.parentNode || t.parentNode.tagName !== "svg")
	);
}
function ge(t) {
	if (!!I)
		return new Promise(function (n, e) {
			var a = Q(t.querySelectorAll("*")).filter(or).map(ir),
				r = fn.begin("searchPseudoElements");
			fe(),
				Promise.all(a)
					.then(function () {
						r(), cn(), n();
					})
					.catch(function () {
						r(), cn(), e();
					});
		});
}
var sr = {
		hooks: function () {
			return {
				mutationObserverCallbacks: function (e) {
					return (e.pseudoElementsCallback = ge), e;
				},
			};
		},
		provides: function (n) {
			n.pseudoElements2svg = function (e) {
				var a = e.node,
					r = a === void 0 ? p : a;
				m.searchPseudoElements && ge(r);
			};
		},
	},
	pe = !1,
	fr = {
		mixout: function () {
			return {
				dom: {
					unwatch: function () {
						fe(), (pe = !0);
					},
				},
			};
		},
		hooks: function () {
			return {
				bootstrap: function () {
					le(tn("mutationObserverCallbacks", {}));
				},
				noAuto: function () {
					Wa();
				},
				watch: function (e) {
					var a = e.observeMutationsRoot;
					pe
						? cn()
						: le(tn("mutationObserverCallbacks", { observeMutationsRoot: a }));
				},
			};
		},
	},
	he = function (n) {
		var e = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
		return n
			.toLowerCase()
			.split(" ")
			.reduce(function (a, r) {
				var i = r.toLowerCase().split("-"),
					o = i[0],
					s = i.slice(1).join("-");
				if (o && s === "h") return (a.flipX = !0), a;
				if (o && s === "v") return (a.flipY = !0), a;
				if (((s = parseFloat(s)), isNaN(s))) return a;
				switch (o) {
					case "grow":
						a.size = a.size + s;
						break;
					case "shrink":
						a.size = a.size - s;
						break;
					case "left":
						a.x = a.x - s;
						break;
					case "right":
						a.x = a.x + s;
						break;
					case "up":
						a.y = a.y - s;
						break;
					case "down":
						a.y = a.y + s;
						break;
					case "rotate":
						a.rotate = a.rotate + s;
						break;
				}
				return a;
			}, e);
	},
	lr = {
		mixout: function () {
			return {
				parse: {
					transform: function (e) {
						return he(e);
					},
				},
			};
		},
		hooks: function () {
			return {
				parseNodeAttributes: function (e, a) {
					var r = a.getAttribute("data-fa-transform");
					return r && (e.transform = he(r)), e;
				},
			};
		},
		provides: function (n) {
			n.generateAbstractTransformGrouping = function (e) {
				var a = e.main,
					r = e.transform,
					i = e.containerWidth,
					o = e.iconWidth,
					s = { transform: "translate(".concat(i / 2, " 256)") },
					f = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "),
					u = "scale("
						.concat((r.size / 16) * (r.flipX ? -1 : 1), ", ")
						.concat((r.size / 16) * (r.flipY ? -1 : 1), ") "),
					l = "rotate(".concat(r.rotate, " 0 0)"),
					d = { transform: "".concat(f, " ").concat(u, " ").concat(l) },
					v = { transform: "translate(".concat((o / 2) * -1, " -256)") },
					g = { outer: s, inner: d, path: v };
				return {
					tag: "g",
					attributes: c({}, g.outer),
					children: [
						{
							tag: "g",
							attributes: c({}, g.inner),
							children: [
								{
									tag: a.icon.tag,
									children: a.icon.children,
									attributes: c(c({}, a.icon.attributes), g.path),
								},
							],
						},
					],
				};
			};
		},
	},
	un = { x: 0, y: 0, width: "100%", height: "100%" };
function be(t) {
	var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
	return (
		t.attributes && (t.attributes.fill || n) && (t.attributes.fill = "black"), t
	);
}
function cr(t) {
	return t.tag === "g" ? t.children : [t];
}
var ur = {
		hooks: function () {
			return {
				parseNodeAttributes: function (e, a) {
					var r = a.getAttribute("data-fa-mask"),
						i = r
							? It(
									r.split(" ").map(function (o) {
										return o.trim();
									}),
								)
							: Zt();
					return (
						i.prefix || (i.prefix = F()),
						(e.mask = i),
						(e.maskId = a.getAttribute("data-fa-mask-id")),
						e
					);
				},
			};
		},
		provides: function (n) {
			n.generateAbstractMask = function (e) {
				var a = e.children,
					r = e.attributes,
					i = e.main,
					o = e.mask,
					s = e.maskId,
					f = e.transform,
					u = i.width,
					l = i.icon,
					d = o.width,
					v = o.icon,
					g = la({ transform: f, containerWidth: d, iconWidth: u }),
					w = { tag: "rect", attributes: c(c({}, un), {}, { fill: "white" }) },
					_ = l.children ? { children: l.children.map(be) } : {},
					E = {
						tag: "g",
						attributes: c({}, g.inner),
						children: [
							be(
								c(
									{ tag: l.tag, attributes: c(c({}, l.attributes), g.path) },
									_,
								),
							),
						],
					},
					C = { tag: "g", attributes: c({}, g.outer), children: [E] },
					k = "mask-".concat(s || gt()),
					x = "clip-".concat(s || gt()),
					O = {
						tag: "mask",
						attributes: c(
							c({}, un),
							{},
							{
								id: k,
								maskUnits: "userSpaceOnUse",
								maskContentUnits: "userSpaceOnUse",
							},
						),
						children: [w, C],
					},
					A = {
						tag: "defs",
						children: [
							{ tag: "clipPath", attributes: { id: x }, children: cr(v) },
							O,
						],
					};
				return (
					a.push(A, {
						tag: "rect",
						attributes: c(
							{
								fill: "currentColor",
								"clip-path": "url(#".concat(x, ")"),
								mask: "url(#".concat(k, ")"),
							},
							un,
						),
					}),
					{ children: a, attributes: r }
				);
			};
		},
	},
	mr = {
		provides: function (n) {
			var e = !1;
			L.matchMedia &&
				(e = L.matchMedia("(prefers-reduced-motion: reduce)").matches),
				(n.missingIconAbstract = function () {
					var a = [],
						r = { fill: "currentColor" },
						i = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
					a.push({
						tag: "path",
						attributes: c(
							c({}, r),
							{},
							{
								d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
							},
						),
					});
					var o = c(c({}, i), {}, { attributeName: "opacity" }),
						s = {
							tag: "circle",
							attributes: c(c({}, r), {}, { cx: "256", cy: "364", r: "28" }),
							children: [],
						};
					return (
						e ||
							s.children.push(
								{
									tag: "animate",
									attributes: c(
										c({}, i),
										{},
										{ attributeName: "r", values: "28;14;28;28;14;28;" },
									),
								},
								{
									tag: "animate",
									attributes: c(c({}, o), {}, { values: "1;0;1;1;0;1;" }),
								},
							),
						a.push(s),
						a.push({
							tag: "path",
							attributes: c(
								c({}, r),
								{},
								{
									opacity: "1",
									d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
								},
							),
							children: e
								? []
								: [
										{
											tag: "animate",
											attributes: c(c({}, o), {}, { values: "1;0;0;0;0;1;" }),
										},
									],
						}),
						e ||
							a.push({
								tag: "path",
								attributes: c(
									c({}, r),
									{},
									{
										opacity: "0",
										d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
									},
								),
								children: [
									{
										tag: "animate",
										attributes: c(c({}, o), {}, { values: "0;0;1;1;0;0;" }),
									},
								],
							}),
						{ tag: "g", attributes: { class: "missing" }, children: a }
					);
				});
		},
	},
	dr = {
		hooks: function () {
			return {
				parseNodeAttributes: function (e, a) {
					var r = a.getAttribute("data-fa-symbol"),
						i = r === null ? !1 : r === "" ? !0 : r;
					return (e.symbol = i), e;
				},
			};
		},
	},
	vr = [ma, Za, tr, nr, er, sr, fr, lr, ur, mr, dr];
Pa(vr, { mixoutsTo: S }),
	S.noAuto,
	S.config,
	S.library,
	S.dom,
	S.parse,
	S.findIconDefinition,
	S.toHtml;
var gr = S.icon;
S.layer, S.text, S.counter;
var pr = {
		prefix: "fab",
		iconName: "linkedin",
		icon: [
			448,
			512,
			[],
			"f08c",
			"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
		],
	},
	hr = {
		prefix: "fab",
		iconName: "salesforce",
		icon: [
			640,
			512,
			[],
			"f83b",
			"M248.89 245.64h-26.35c.69-5.16 3.32-14.12 13.64-14.12 6.75 0 11.97 3.82 12.71 14.12zm136.66-13.88c-.47 0-14.11-1.77-14.11 20s13.63 20 14.11 20c13 0 14.11-13.54 14.11-20 0-21.76-13.66-20-14.11-20zm-243.22 23.76a8.63 8.63 0 0 0-3.29 7.29c0 4.78 2.08 6.05 3.29 7.05 4.7 3.7 15.07 2.12 20.93.95v-16.94c-5.32-1.07-16.73-1.96-20.93 1.65zM640 232c0 87.58-80 154.39-165.36 136.43-18.37 33-70.73 70.75-132.2 41.63-41.16 96.05-177.89 92.18-213.81-5.17C8.91 428.78-50.19 266.52 53.36 205.61 18.61 126.18 76 32 167.67 32a124.24 124.24 0 0 1 98.56 48.7c20.7-21.4 49.4-34.81 81.15-34.81 42.34 0 79 23.52 98.8 58.57C539 63.78 640 132.69 640 232zm-519.55 31.8c0-11.76-11.69-15.17-17.87-17.17-5.27-2.11-13.41-3.51-13.41-8.94 0-9.46 17-6.66 25.17-2.12 0 0 1.17.71 1.64-.47.24-.7 2.36-6.58 2.59-7.29a1.13 1.13 0 0 0-.7-1.41c-12.33-7.63-40.7-8.51-40.7 12.7 0 12.46 11.49 15.44 17.88 17.17 4.72 1.58 13.17 3 13.17 8.7 0 4-3.53 7.06-9.17 7.06a31.76 31.76 0 0 1-19-6.35c-.47-.23-1.42-.71-1.65.71l-2.4 7.47c-.47.94.23 1.18.23 1.41 1.75 1.4 10.3 6.59 22.82 6.59 13.17 0 21.4-7.06 21.4-18.11zm32-42.58c-10.13 0-18.66 3.17-21.4 5.18a1 1 0 0 0-.24 1.41l2.59 7.06a1 1 0 0 0 1.18.7c.65 0 6.8-4 16.93-4 4 0 7.06.71 9.18 2.36 3.6 2.8 3.06 8.29 3.06 10.58-4.79-.3-19.11-3.44-29.41 3.76a16.92 16.92 0 0 0-7.34 14.54c0 5.9 1.51 10.4 6.59 14.35 12.24 8.16 36.28 2 38.1 1.41 1.58-.32 3.53-.66 3.53-1.88v-33.88c.04-4.61.32-21.64-22.78-21.64zM199 200.24a1.11 1.11 0 0 0-1.18-1.18H188a1.11 1.11 0 0 0-1.17 1.18v79a1.11 1.11 0 0 0 1.17 1.18h9.88a1.11 1.11 0 0 0 1.18-1.18zm55.75 28.93c-2.1-2.31-6.79-7.53-17.65-7.53-3.51 0-14.16.23-20.7 8.94-6.35 7.63-6.58 18.11-6.58 21.41 0 3.12.15 14.26 7.06 21.17 2.64 2.91 9.06 8.23 22.81 8.23 10.82 0 16.47-2.35 18.58-3.76.47-.24.71-.71.24-1.88l-2.35-6.83a1.26 1.26 0 0 0-1.41-.7c-2.59.94-6.35 2.82-15.29 2.82-17.42 0-16.85-14.74-16.94-16.7h37.17a1.23 1.23 0 0 0 1.17-.94c-.29 0 2.07-14.7-6.09-24.23zm36.69 52.69c13.17 0 21.41-7.06 21.41-18.11 0-11.76-11.7-15.17-17.88-17.17-4.14-1.66-13.41-3.38-13.41-8.94 0-3.76 3.29-6.35 8.47-6.35a38.11 38.11 0 0 1 16.7 4.23s1.18.71 1.65-.47c.23-.7 2.35-6.58 2.58-7.29a1.13 1.13 0 0 0-.7-1.41c-7.91-4.9-16.74-4.94-20.23-4.94-12 0-20.46 7.29-20.46 17.64 0 12.46 11.48 15.44 17.87 17.17 6.11 2 13.17 3.26 13.17 8.7 0 4-3.52 7.06-9.17 7.06a31.8 31.8 0 0 1-19-6.35 1 1 0 0 0-1.65.71l-2.35 7.52c-.47.94.23 1.18.23 1.41 1.72 1.4 10.33 6.59 22.79 6.59zM357.09 224c0-.71-.24-1.18-1.18-1.18h-11.76c0-.14.94-8.94 4.47-12.47 4.16-4.15 11.76-1.64 12-1.64 1.17.47 1.41 0 1.64-.47l2.83-7.77c.7-.94 0-1.17-.24-1.41-5.09-2-17.35-2.87-24.46 4.24-5.48 5.48-7 13.92-8 19.52h-8.47a1.28 1.28 0 0 0-1.17 1.18l-1.42 7.76c0 .7.24 1.17 1.18 1.17h8.23c-8.51 47.9-8.75 50.21-10.35 55.52-1.08 3.62-3.29 6.9-5.88 7.76-.09 0-3.88 1.68-9.64-.24 0 0-.94-.47-1.41.71-.24.71-2.59 6.82-2.83 7.53s0 1.41.47 1.41c5.11 2 13 1.77 17.88 0 6.28-2.28 9.72-7.89 11.53-12.94 2.75-7.71 2.81-9.79 11.76-59.74h12.23a1.29 1.29 0 0 0 1.18-1.18zm53.39 16c-.56-1.68-5.1-18.11-25.17-18.11-15.25 0-23 10-25.16 18.11-1 3-3.18 14 0 23.52.09.3 4.41 18.12 25.16 18.12 14.95 0 22.9-9.61 25.17-18.12 3.21-9.61 1.01-20.52 0-23.52zm45.4-16.7c-5-1.65-16.62-1.9-22.11 5.41v-4.47a1.11 1.11 0 0 0-1.18-1.17h-9.4a1.11 1.11 0 0 0-1.18 1.17v55.28a1.12 1.12 0 0 0 1.18 1.18h9.64a1.12 1.12 0 0 0 1.18-1.18v-27.77c0-2.91.05-11.37 4.46-15.05 4.9-4.9 12-3.36 13.41-3.06a1.57 1.57 0 0 0 1.41-.94 74 74 0 0 0 3.06-8 1.16 1.16 0 0 0-.47-1.41zm46.81 54.1l-2.12-7.29c-.47-1.18-1.41-.71-1.41-.71-4.23 1.82-10.15 1.89-11.29 1.89-4.64 0-17.17-1.13-17.17-19.76 0-6.23 1.85-19.76 16.47-19.76a34.85 34.85 0 0 1 11.52 1.65s.94.47 1.18-.71c.94-2.59 1.64-4.47 2.59-7.53.23-.94-.47-1.17-.71-1.17-11.59-3.87-22.34-2.53-27.76 0-1.59.74-16.23 6.49-16.23 27.52 0 2.9-.58 30.11 28.94 30.11a44.45 44.45 0 0 0 15.52-2.83 1.3 1.3 0 0 0 .47-1.42zm53.87-39.52c-.8-3-5.37-16.23-22.35-16.23-16 0-23.52 10.11-25.64 18.59a38.58 38.58 0 0 0-1.65 11.76c0 25.87 18.84 29.4 29.88 29.4 10.82 0 16.46-2.35 18.58-3.76.47-.24.71-.71.24-1.88l-2.36-6.83a1.26 1.26 0 0 0-1.41-.7c-2.59.94-6.35 2.82-15.29 2.82-17.42 0-16.85-14.74-16.93-16.7h37.16a1.25 1.25 0 0 0 1.18-.94c-.24-.01.94-7.07-1.41-15.54zm-23.29-6.35c-10.33 0-13 9-13.64 14.12H546c-.88-11.92-7.62-14.13-12.73-14.13z",
		],
	},
	br = {
		prefix: "fab",
		iconName: "github",
		icon: [
			496,
			512,
			[],
			"f09b",
			"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
		],
	};
class ye extends ot {
	constructor(...n) {
		super(...n);
		(this.iconDefinitions = { linkedin: pr, github: br, salesforce: hr }),
			(this._iconName = void 0),
			(this.iconDef = void 0);
	}
	get iconName() {
		return this._iconName;
	}
	set iconName(n) {
		(this._iconName = n), (this.iconDef = this.iconDefinitions[n]);
	}
	connectedCallback() {
		this.template.appendChild(gr(this.iconDef).node[0]);
	}
}
dn(ye, {
	publicProps: { iconName: { config: 3 } },
	fields: ["iconDefinitions", "_iconName", "iconDef"],
});
var mn = it(ye, { tmpl: Re, sel: "ui-icon", apiVersion: 60 });
const yr = { key: 0 },
	kr = { key: 1 },
	wr = {
		attrs: {
			href: "https://www.linkedin.com/in/lachlan-peacock/",
			target: "_blank",
		},
		key: 2,
	},
	xr = { props: { iconName: "linkedin" }, key: 3 },
	Ar = {
		attrs: { href: "https://github.com/l-peacock", target: "_blank" },
		key: 4,
	},
	Sr = { props: { iconName: "github" }, key: 5 },
	_r = {
		attrs: {
			href: "https://www.salesforce.com/trailblazer/lachlan-peacock",
			target: "_blank",
		},
		key: 6,
	},
	Er = { props: { iconName: "salesforce" }, key: 7 };
function q(t, n, e, a) {
	const { d: r, t: i, h: o, c: s } = t;
	return [
		o("span", yr, [i("\xA9\uFE0F " + r(n.currentYear) + " Lachlan Peacock ")]),
		o("div", kr, [
			o("a", wr, [s("ui-icon", mn, xr)]),
			o("a", Ar, [s("ui-icon", mn, Sr)]),
			o("a", _r, [s("ui-icon", mn, Er)]),
		]),
	];
}
var Pr = at(q);
(q.stylesheets = []),
	bn && q.stylesheets.push.apply(q.stylesheets, bn),
	(q.stylesheetToken = "lwc-6a2ffv9rvft"),
	(q.legacyStylesheetToken = "ui-footer_footer"),
	rt(q);
class Cr extends ot {
	get currentYear() {
		return new Date().getFullYear();
	}
}
var Or = it(Cr, { tmpl: Pr, sel: "ui-footer", apiVersion: 60 });
const Nr = { key: 0 },
	Ir = { props: { showBackgroundImage: !0 }, key: 1 },
	Tr = { key: 2 },
	Mr = { key: 3 },
	zr = { key: 4 },
	$r = { key: 5 },
	Lr = { key: 6 };
function K(t, n, e, a) {
	const { c: r, h: i } = t;
	return [
		i("header", Nr, [r("ui-banner", Ee, Ir)]),
		i("main", Tr, [i("section", Mr, [r("ui-content-block", Me, zr)])]),
		i("footer", $r, [r("ui-footer", Or, Lr)]),
	];
}
var Rr = at(K);
(K.stylesheets = []),
	vn && K.stylesheets.push.apply(K.stylesheets, vn),
	(K.stylesheetToken = "lwc-5nlemrqkqrg"),
	(K.legacyStylesheetToken = "base-app_app"),
	rt(K);
class Fr extends ot {}
var Dr = it(Fr, { tmpl: Rr, sel: "base-app", apiVersion: 60 });
export { Dr as default };
