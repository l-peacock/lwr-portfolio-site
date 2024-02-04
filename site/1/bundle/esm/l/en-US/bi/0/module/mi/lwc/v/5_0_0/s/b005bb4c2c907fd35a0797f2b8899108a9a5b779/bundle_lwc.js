function Ms(e, t) {
	if (!e) throw new Error(`Invariant Violation: ${t}`);
}
function ks(e, t) {
	if (!e) throw new Error(`Assert Violation: ${t}`);
}
function Ds(e, t) {
	if (e) throw new Error(`Assert Violation: ${t}`);
}
function _s(e) {
	throw new Error(e);
}
var $t = Object.freeze({
	__proto__: null,
	fail: _s,
	invariant: Ms,
	isFalse: Ds,
	isTrue: ks,
});
const {
		assign: q,
		create: C,
		defineProperties: oe,
		defineProperty: $,
		freeze: Ce,
		getOwnPropertyDescriptor: j,
		getOwnPropertyDescriptors: ou,
		getOwnPropertyNames: Jn,
		getPrototypeOf: Se,
		hasOwnProperty: Te,
		isFrozen: Os,
		keys: F,
		seal: Je,
		setPrototypeOf: Zn,
	} = Object,
	{ isArray: W } = Array,
	{
		concat: ru,
		copyWithin: As,
		every: Vs,
		fill: $s,
		filter: Rt,
		find: su,
		findIndex: iu,
		includes: Rs,
		indexOf: eo,
		join: Me,
		map: to,
		pop: no,
		push: T,
		reduce: au,
		reverse: Ls,
		shift: oo,
		slice: ro,
		some: cu,
		sort: Is,
		splice: Lt,
		unshift: Ze,
		forEach: et,
	} = Array.prototype;
function Ps(e, t) {
	return Vs.call(e, t);
}
const { fromCharCode: so } = String,
	{
		charCodeAt: tt,
		replace: It,
		split: Fs,
		slice: io,
		toLowerCase: ke,
	} = String.prototype;
function c(e) {
	return e === void 0;
}
function g(e) {
	return e === null;
}
function re(e) {
	return e === !0;
}
function G(e) {
	return e === !1;
}
function xs(e) {
	return typeof e == "boolean";
}
function k(e) {
	return typeof e == "function";
}
function nt(e) {
	return typeof e == "object";
}
function se(e) {
	return typeof e == "string";
}
function lu(e) {
	return typeof e == "number";
}
function A() {}
const Bs = {}.toString;
function ee(e) {
	return e && e.toString
		? W(e)
			? Me.call(to.call(e, ee), ",")
			: e.toString()
		: typeof e == "object"
			? Bs.call(e)
			: e + "";
}
function Y(e, t) {
	do {
		const n = j(e, t);
		if (!c(n)) return n;
		e = Se(e);
	} while (e !== null);
}
const Ws = 58;
function Pt(e, t) {
	switch (e) {
		case 0:
		case 1:
			return t >= 59;
		case 2:
		case 3:
		case 4:
		case 5:
			return t >= 60;
	}
}
const Hs = [
		"ariaActiveDescendant",
		"ariaAtomic",
		"ariaAutoComplete",
		"ariaBusy",
		"ariaChecked",
		"ariaColCount",
		"ariaColIndex",
		"ariaColIndexText",
		"ariaColSpan",
		"ariaControls",
		"ariaCurrent",
		"ariaDescribedBy",
		"ariaDescription",
		"ariaDetails",
		"ariaDisabled",
		"ariaErrorMessage",
		"ariaExpanded",
		"ariaFlowTo",
		"ariaHasPopup",
		"ariaHidden",
		"ariaInvalid",
		"ariaKeyShortcuts",
		"ariaLabel",
		"ariaLabelledBy",
		"ariaLevel",
		"ariaLive",
		"ariaModal",
		"ariaMultiLine",
		"ariaMultiSelectable",
		"ariaOrientation",
		"ariaOwns",
		"ariaPlaceholder",
		"ariaPosInSet",
		"ariaPressed",
		"ariaReadOnly",
		"ariaRelevant",
		"ariaRequired",
		"ariaRoleDescription",
		"ariaRowCount",
		"ariaRowIndex",
		"ariaRowIndexText",
		"ariaRowSpan",
		"ariaSelected",
		"ariaSetSize",
		"ariaSort",
		"ariaValueMax",
		"ariaValueMin",
		"ariaValueNow",
		"ariaValueText",
		"ariaBrailleLabel",
		"ariaBrailleRoleDescription",
		"role",
	],
	{ AriaAttrNameToPropNameMap: uu, AriaPropNameToAttrNameMap: ot } = (() => {
		const e = C(null),
			t = C(null);
		return (
			et.call(Hs, (n) => {
				const o = ke.call(It.call(n, /^aria/, () => "aria-"));
				(e[o] = n), (t[n] = o);
			}),
			{ AriaAttrNameToPropNameMap: e, AriaPropNameToAttrNameMap: t }
		);
	})(),
	ao = new Set([
		"aria-activedescendant",
		"aria-controls",
		"aria-describedby",
		"aria-details",
		"aria-errormessage",
		"aria-flowto",
		"aria-labelledby",
		"aria-owns",
		"for",
	]),
	K = typeof globalThis == "object" ? globalThis : window,
	Ft = "$shadowResolver$",
	Us = "$shadowStaticNode$",
	co = "$shadowToken$",
	js = "$$lwc-synthetic-mode",
	lo = "$scoped$",
	uo = "$nativeGetElementById$",
	fo = "$nativeQuerySelectorAll$",
	Gs = "http://www.w3.org/XML/1998/namespace",
	Ys = "http://www.w3.org/2000/svg",
	Ks = "http://www.w3.org/1999/xlink",
	zs = /-([a-z])/g,
	qs = new Map([
		["accessKey", "accesskey"],
		["readOnly", "readonly"],
		["tabIndex", "tabindex"],
		["bgColor", "bgcolor"],
		["colSpan", "colspan"],
		["rowSpan", "rowspan"],
		["contentEditable", "contenteditable"],
		["crossOrigin", "crossorigin"],
		["dateTime", "datetime"],
		["formAction", "formaction"],
		["isMap", "ismap"],
		["maxLength", "maxlength"],
		["minLength", "minlength"],
		["noValidate", "novalidate"],
		["useMap", "usemap"],
		["htmlFor", "for"],
	]),
	po = new Map();
function ho(e) {
	const t = ot[e];
	if (!c(t)) return t;
	const n = qs.get(e);
	if (!c(n)) return n;
	const o = po.get(e);
	if (!c(o)) return o;
	let r = "";
	for (let s = 0, i = e.length; s < i; s++) {
		const a = tt.call(e, s);
		a >= 65 && a <= 90 ? (r += "-" + so(a + 32)) : (r += so(a));
	}
	return po.set(e, r), r;
}
const mo = new Map();
function Qs(e) {
	let t = mo.get(e);
	return (
		c(t) && ((t = It.call(e, zs, (n) => n[1].toUpperCase())), mo.set(e, t)), t
	);
}
const xt = "5.0.0",
	Xs = /\/\*LWC compiler v([\d.]+)\*\/\s*}/,
	Js = {
		PLACEHOLDER_TEST_FLAG: null,
		ENABLE_FORCE_NATIVE_SHADOW_MODE_FOR_TEST: null,
		ENABLE_MIXED_SHADOW_MODE: null,
		ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE: null,
		ENABLE_WIRE_SYNC_EMIT: null,
		DISABLE_LIGHT_DOM_UNSCOPED_CSS: null,
		ENABLE_FROZEN_TEMPLATE: null,
		ENABLE_LEGACY_SCOPE_TOKENS: null,
	};
K.lwcRuntimeFlags ||
	Object.defineProperty(K, "lwcRuntimeFlags", { value: C(null) });
const go = K.lwcRuntimeFlags;
function Zs(e, t) {
	if (!xs(t)) {
		const n = `Failed to set the value "${t}" for the runtime feature flag "${e}". Runtime feature flags can only be set to a boolean value.`;
		console.error(n);
		return;
	}
	if (c(Js[e])) {
		console.info(
			`Attempt to set a value on an unknown feature flag "${e}" resulted in a NOOP.`,
		);
		return;
	}
	{
		const n = go[e];
		if (!c(n)) {
			console.error(
				`Failed to set the value "${t}" for the runtime feature flag "${e}". "${e}" has already been set with the value "${n}".`,
			);
			return;
		}
		$(go, e, { value: t });
	}
}
function ei(e, t) {}
const Bt = [];
let Wt = A,
	De = !1;
const ti = {
	attachDispatcher(e) {
		(De = !0), (Wt = e);
		for (const t of Bt)
			try {
				t();
			} catch (n) {
				console.error("Could not invoke callback", n);
			}
		Bt.length = 0;
	},
	detachDispatcher() {
		(De = !1), (Wt = A);
	},
};
function Ht(e) {
	De ? e() : Bt.push(e);
}
function _e(e, t) {
	De && Wt(e, t);
}
function ni() {
	return De;
}
function ie(e) {
	return `<${ke.call(e.tagName)}>`;
}
function oi(e) {
	const t = [];
	let n = "";
	for (; !g(e.owner); ) T.call(t, n + ie(e)), (e = e.owner), (n += "	");
	return Me.call(
		t,
		`
`,
	);
}
function ri(e) {
	const t = [];
	let n = e;
	for (; !g(n); ) T.call(t, ie(n)), (n = n.owner);
	return t.reverse().join(`
	`);
}
function Eo(e, t) {
	if (!Os(t) && c(t.wcStack)) {
		const n = ri(e);
		$(t, "wcStack", {
			get() {
				return n;
			},
		});
	}
}
const yo = new Set();
function Ut(e, t, n, o) {
	let r = `[LWC ${e}]: ${t}`;
	if (
		(c(n) ||
			(r = `${r}
${oi(n)}`),
		o)
	) {
		if (yo.has(r)) return;
		yo.add(r);
	}
	try {
		throw new Error(r);
	} catch (s) {
		console[e](s);
	}
}
function O(e, t) {
	Ut("error", e, t, !1);
}
function jt(e, t) {
	Ut("warn", e, t, !1);
}
function du(e, t) {
	Ut("warn", e, t, !0);
}
const Gt = new WeakMap();
function si(e) {
	let t = Gt.get(e);
	if (c(t)) {
		const n = C(null);
		(t = n), Gt.set(e, n);
	}
	return t;
}
let Oe = null;
function wo(e, t) {
	const n = Gt.get(e);
	if (!c(n)) {
		const o = n[t];
		if (!c(o)) for (let r = 0, s = o.length; r < s; r += 1) o[r].notify();
	}
}
function bo(e, t) {
	if (Oe === null) return;
	const n = Oe,
		o = si(e);
	let r = o[t];
	if (c(r)) (r = []), (o[t] = r);
	else if (r[0] === n) return;
	eo.call(r, n) === -1 && n.link(r);
}
class ii {
	constructor(t) {
		(this.listeners = []), (this.callback = t);
	}
	observe(t) {
		const n = Oe;
		Oe = this;
		let o;
		try {
			t();
		} catch (r) {
			o = Object(r);
		} finally {
			if (((Oe = n), o !== void 0)) throw o;
		}
	}
	reset() {
		const { listeners: t } = this,
			n = t.length;
		if (n > 0) {
			for (let o = 0; o < n; o++) {
				const r = t[o];
				if (r.length === 1) r.length = 0;
				else {
					const s = eo.call(r, this);
					Lt.call(r, s, 1);
				}
			}
			t.length = 0;
		}
	}
	notify() {
		this.callback.call(void 0, this);
	}
	link(t) {
		T.call(t, this), T.call(this.listeners, t);
	}
}
function vo(e, t) {
	wo(e.component, t);
}
function Ae(e, t) {
	bo(e.component, t);
}
function No(e) {
	return new ii(e);
}
let rt = [];
const ai = 32,
	x = Je(C(null)),
	H = Je([]);
function ci() {
	const e = rt;
	rt = [];
	for (let t = 0, n = e.length; t < n; t += 1) e[t]();
}
function Co(e) {
	rt.length === 0 && Promise.resolve().then(ci), T.call(rt, e);
}
function li() {
	function e() {
		return Math.floor((1 + Math.random()) * 65536)
			.toString(16)
			.substring(1);
	}
	return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
}
const ui = /;(?![^(]*\))/g,
	di = /:(.+)/;
function fi(e) {
	const t = {},
		n = e.split(ui);
	for (const o of n)
		if (o) {
			const [r, s] = o.split(di);
			r !== void 0 && s !== void 0 && (t[r.trim()] = s.trim());
		}
	return t;
}
function pi(e, t) {
	const n = {};
	for (const o of F(e)) o !== t && (n[o] = e[o]);
	return n;
}
function Yt(e) {
	const t = [];
	for (const n of e) W(n) ? t.push(...Yt(n)) : t.push(n);
	return t;
}
function V() {
	throw new ReferenceError();
}
function Kt(e) {
	const t = e();
	return (t == null ? void 0 : t.__esModule) ? t.default : t;
}
function zt(e) {
	return k(e) && Te.call(e, "__circular__");
}
var qt, Qt;
const hi = (qt = K.__lwc_instrument_cmp_def) !== null && qt !== void 0 ? qt : A,
	mi =
		(Qt = K.__lwc_instrument_cmp_instance) !== null && Qt !== void 0 ? Qt : A;
function So(e) {
	for (const t of F(ot)) {
		const n = ot[t];
		c(j(e, t)) &&
			$(e, t, {
				get() {
					return this.getAttribute(n);
				},
				set(o) {
					g(o) ? this.removeAttribute(n) : this.setAttribute(n, o);
				},
				configurable: !0,
				enumerable: !0,
			});
	}
}
const To = typeof HTMLElement != "undefined" ? HTMLElement : function () {},
	Mo = To.prototype,
	gi = [
		"accessKey",
		"dir",
		"draggable",
		"hidden",
		"id",
		"lang",
		"spellcheck",
		"tabIndex",
		"title",
	],
	Ve = C(null);
et.call(F(ot), (e) => {
	const t = Y(Mo, e);
	c(t) || (Ve[e] = t);
}),
	et.call(gi, (e) => {
		const t = Y(Mo, e);
		c(t) || (Ve[e] = t);
	});
function ae(e) {
	return q({ configurable: !0, enumerable: !0, writable: !0 }, e);
}
function J(e) {
	return q({ configurable: !0, enumerable: !0 }, e);
}
let $e = !1;
function fu() {
	V(), ($e = !0);
}
function pu() {
	V(), ($e = !1);
}
function ce(e, t) {
	return jt(
		`The \`${e}\` ${t} is available only on elements that use the \`lwc:dom="manual"\` directive.`,
	);
}
function hu(e, t) {
	V();
	const n = Y(e, "outerHTML"),
		o = {
			outerHTML: J({
				get() {
					return n.get.call(this);
				},
				set(r) {
					return (
						O("Invalid attempt to set outerHTML on Element."),
						n.set.call(this, r)
					);
				},
			}),
		};
	if (!t.isLight && t.isSynthetic && !t.isPortal) {
		const {
				appendChild: r,
				insertBefore: s,
				removeChild: i,
				replaceChild: a,
			} = e,
			u = Y(e, "nodeValue"),
			d = Y(e, "innerHTML"),
			l = Y(e, "textContent");
		q(o, {
			appendChild: ae({
				value(f) {
					return ce("appendChild", "method"), r.call(this, f);
				},
			}),
			insertBefore: ae({
				value(f, m) {
					return $e || ce("insertBefore", "method"), s.call(this, f, m);
				},
			}),
			removeChild: ae({
				value(f) {
					return $e || ce("removeChild", "method"), i.call(this, f);
				},
			}),
			replaceChild: ae({
				value(f, m) {
					return ce("replaceChild", "method"), a.call(this, f, m);
				},
			}),
			nodeValue: J({
				get() {
					return u.get.call(this);
				},
				set(f) {
					$e || ce("nodeValue", "property"), u.set.call(this, f);
				},
			}),
			textContent: J({
				get() {
					return l.get.call(this);
				},
				set(f) {
					ce("textContent", "property"), l.set.call(this, f);
				},
			}),
			innerHTML: J({
				get() {
					return d.get.call(this);
				},
				set(f) {
					return ce("innerHTML", "property"), d.set.call(this, f);
				},
			}),
		});
	}
	oe(e, o);
}
function Ei(e) {
	V();
	const t = e.addEventListener,
		n = Y(e, "innerHTML"),
		o = Y(e, "textContent");
	return {
		innerHTML: J({
			get() {
				return n.get.call(this);
			},
			set(r) {
				return (
					O("Invalid attempt to set innerHTML on ShadowRoot."),
					n.set.call(this, r)
				);
			},
		}),
		textContent: J({
			get() {
				return o.get.call(this);
			},
			set(r) {
				return (
					O("Invalid attempt to set textContent on ShadowRoot."),
					o.set.call(this, r)
				);
			},
		}),
		addEventListener: ae({
			value(r, s, i) {
				return (
					c(i) ||
						O(
							"The `addEventListener` method on ShadowRoot does not support any options.",
							z(this),
						),
					t.apply(this, arguments)
				);
			},
		}),
	};
}
function yi(e) {
	V();
	const t = e.addEventListener,
		n = Y(e, "innerHTML"),
		o = Y(e, "outerHTML"),
		r = Y(e, "textContent");
	return {
		innerHTML: J({
			get() {
				return n.get.call(this);
			},
			set(s) {
				return (
					O("Invalid attempt to set innerHTML on HTMLElement."),
					n.set.call(this, s)
				);
			},
		}),
		outerHTML: J({
			get() {
				return o.get.call(this);
			},
			set(s) {
				return (
					O("Invalid attempt to set outerHTML on HTMLElement."),
					o.set.call(this, s)
				);
			},
		}),
		textContent: J({
			get() {
				return r.get.call(this);
			},
			set(s) {
				return (
					O("Invalid attempt to set textContent on HTMLElement."),
					r.set.call(this, s)
				);
			},
		}),
		addEventListener: ae({
			value(s, i, a) {
				return (
					c(a) ||
						O(
							"The `addEventListener` method in `LightningElement` does not support any options.",
							z(this),
						),
					t.apply(this, arguments)
				);
			},
		}),
	};
}
function wi(e) {
	V();
	const t = e.dispatchEvent;
	return {
		dispatchEvent: ae({
			value(n) {
				const o = b(this);
				if (!g(n) && nt(n)) {
					const { type: r } = n;
					/^[a-z][a-z0-9_]*$/.test(r) ||
						O(
							`Invalid event type "${r}" dispatched in element ${ie(o)}. Event name must start with a lowercase letter and followed only lowercase letters, numbers, and underscores`,
							o,
						);
				}
				return t.apply(this, arguments);
			},
		}),
	};
}
function mu(e) {
	oe(e, Ei(e));
}
function gu(e) {
	const t = yi(e),
		n = Se(e);
	Zn(e, C(n, t));
}
function Eu(e) {
	oe(e, wi(e));
}
function Re(e, t, n) {
	const { cmpFields: o } = e;
	n !== o[t] && ((o[t] = n), vo(e, t));
}
const { isArray: st } = Array,
	{
		prototype: bi,
		getPrototypeOf: it,
		create: ko,
		defineProperty: at,
		isExtensible: ct,
		getOwnPropertyDescriptor: Do,
		getOwnPropertyNames: Xt,
		getOwnPropertySymbols: Jt,
		preventExtensions: _o,
		hasOwnProperty: Le,
	} = Object,
	{ push: Zt, concat: Oo } = Array.prototype,
	vi = {}.toString;
function yu(e) {
	return e && e.toString
		? e.toString()
		: typeof e == "object"
			? vi.call(e)
			: e + "";
}
function L(e) {
	return e === void 0;
}
function en(e) {
	return typeof e == "function";
}
const Ao = new WeakMap();
function Vo(e, t) {
	Ao.set(e, t);
}
const U = (e) => Ao.get(e) || e;
class $o {
	constructor(t, n) {
		(this.originalTarget = n), (this.membrane = t);
	}
	wrapDescriptor(t) {
		if (Le.call(t, "value")) t.value = this.wrapValue(t.value);
		else {
			const { set: n, get: o } = t;
			L(o) || (t.get = this.wrapGetter(o)),
				L(n) || (t.set = this.wrapSetter(n));
		}
		return t;
	}
	copyDescriptorIntoShadowTarget(t, n) {
		const { originalTarget: o } = this,
			r = Do(o, n);
		if (!L(r)) {
			const s = this.wrapDescriptor(r);
			at(t, n, s);
		}
	}
	lockShadowTarget(t) {
		const { originalTarget: n } = this;
		Oo.call(Xt(n), Jt(n)).forEach((s) => {
			this.copyDescriptorIntoShadowTarget(t, s);
		});
		const {
			membrane: { tagPropertyKey: r },
		} = this;
		!L(r) && !Le.call(t, r) && at(t, r, ko(null)), _o(t);
	}
	apply(t, n, o) {}
	construct(t, n, o) {}
	get(t, n) {
		const {
				originalTarget: o,
				membrane: { valueObserved: r },
			} = this,
			s = o[n];
		return r(o, n), this.wrapValue(s);
	}
	has(t, n) {
		const {
			originalTarget: o,
			membrane: { tagPropertyKey: r, valueObserved: s },
		} = this;
		return s(o, n), n in o || n === r;
	}
	ownKeys(t) {
		const {
				originalTarget: n,
				membrane: { tagPropertyKey: o },
			} = this,
			r = L(o) || Le.call(n, o) ? [] : [o];
		return Zt.apply(r, Xt(n)), Zt.apply(r, Jt(n)), r;
	}
	isExtensible(t) {
		const { originalTarget: n } = this;
		return ct(t) ? (ct(n) ? !0 : (this.lockShadowTarget(t), !1)) : !1;
	}
	getPrototypeOf(t) {
		const { originalTarget: n } = this;
		return it(n);
	}
	getOwnPropertyDescriptor(t, n) {
		const {
			originalTarget: o,
			membrane: { valueObserved: r, tagPropertyKey: s },
		} = this;
		r(o, n);
		let i = Do(o, n);
		return L(i)
			? n !== s
				? void 0
				: ((i = {
						value: void 0,
						writable: !1,
						configurable: !1,
						enumerable: !1,
					}),
					at(t, s, i),
					i)
			: (i.configurable === !1 && this.copyDescriptorIntoShadowTarget(t, n),
				this.wrapDescriptor(i));
	}
}
const tn = new WeakMap(),
	nn = new WeakMap(),
	on = new WeakMap(),
	rn = new WeakMap();
class Ni extends $o {
	wrapValue(t) {
		return this.membrane.getProxy(t);
	}
	wrapGetter(t) {
		const n = tn.get(t);
		if (!L(n)) return n;
		const o = this,
			r = function () {
				return o.wrapValue(t.call(U(this)));
			};
		return tn.set(t, r), on.set(r, t), r;
	}
	wrapSetter(t) {
		const n = nn.get(t);
		if (!L(n)) return n;
		const o = function (r) {
			t.call(U(this), U(r));
		};
		return nn.set(t, o), rn.set(o, t), o;
	}
	unwrapDescriptor(t) {
		if (Le.call(t, "value")) t.value = U(t.value);
		else {
			const { set: n, get: o } = t;
			L(o) || (t.get = this.unwrapGetter(o)),
				L(n) || (t.set = this.unwrapSetter(n));
		}
		return t;
	}
	unwrapGetter(t) {
		const n = on.get(t);
		if (!L(n)) return n;
		const o = this,
			r = function () {
				return U(t.call(o.wrapValue(this)));
			};
		return tn.set(r, t), on.set(t, r), r;
	}
	unwrapSetter(t) {
		const n = rn.get(t);
		if (!L(n)) return n;
		const o = this,
			r = function (s) {
				t.call(o.wrapValue(this), o.wrapValue(s));
			};
		return nn.set(r, t), rn.set(t, r), r;
	}
	set(t, n, o) {
		const {
			originalTarget: r,
			membrane: { valueMutated: s },
		} = this;
		return (
			r[n] !== o ? ((r[n] = o), s(r, n)) : n === "length" && st(r) && s(r, n),
			!0
		);
	}
	deleteProperty(t, n) {
		const {
			originalTarget: o,
			membrane: { valueMutated: r },
		} = this;
		return delete o[n], r(o, n), !0;
	}
	setPrototypeOf(t, n) {}
	preventExtensions(t) {
		if (ct(t)) {
			const { originalTarget: n } = this;
			if ((_o(n), ct(n))) return !1;
			this.lockShadowTarget(t);
		}
		return !0;
	}
	defineProperty(t, n, o) {
		const {
			originalTarget: r,
			membrane: { valueMutated: s, tagPropertyKey: i },
		} = this;
		return (
			(n === i && !Le.call(r, n)) ||
				(at(r, n, this.unwrapDescriptor(o)),
				o.configurable === !1 && this.copyDescriptorIntoShadowTarget(t, n),
				s(r, n)),
			!0
		);
	}
}
const Ro = new WeakMap(),
	Lo = new WeakMap();
class Ci extends $o {
	wrapValue(t) {
		return this.membrane.getReadOnlyProxy(t);
	}
	wrapGetter(t) {
		const n = Ro.get(t);
		if (!L(n)) return n;
		const o = this,
			r = function () {
				return o.wrapValue(t.call(U(this)));
			};
		return Ro.set(t, r), r;
	}
	wrapSetter(t) {
		const n = Lo.get(t);
		if (!L(n)) return n;
		const o = this,
			r = function (s) {};
		return Lo.set(t, r), r;
	}
	set(t, n, o) {
		return !1;
	}
	deleteProperty(t, n) {
		return !1;
	}
	setPrototypeOf(t, n) {}
	preventExtensions(t) {
		return !1;
	}
	defineProperty(t, n, o) {
		return !1;
	}
}
function sn(e) {
	if (st(e))
		return e.map((o) => {
			const r = U(o);
			return r !== o ? sn(r) : o;
		});
	const t = ko(it(e)),
		n = Xt(e);
	return Oo.call(n, Jt(e)).reduce((o, r) => {
		const s = e[r],
			i = U(s);
		return i !== s ? (o[r] = sn(i)) : (o[r] = s), o;
	}, t);
}
const Si = {
	header: (e) => {
		const t = U(e);
		if (!t || t === e) return null;
		const n = sn(e);
		return ["object", { object: n }];
	},
	hasBody: () => !1,
	body: () => null,
};
function Ti() {
	return typeof globalThis != "undefined"
		? globalThis
		: typeof self != "undefined"
			? self
			: typeof window != "undefined"
				? window
				: typeof global != "undefined"
					? global
					: {};
}
function wu() {
	throw new ReferenceError();
}
function Mi(e) {
	if (e === null || typeof e != "object") return !1;
	if (st(e)) return !0;
	const t = it(e);
	return t === bi || t === null || it(t) === null;
}
const ki = (e, t) => {},
	Di = (e, t) => {};
function Io(e) {
	return st(e) ? [] : {};
}
class _i {
	constructor(t = {}) {
		(this.readOnlyObjectGraph = new WeakMap()),
			(this.reactiveObjectGraph = new WeakMap());
		const {
			valueMutated: n,
			valueObserved: o,
			valueIsObservable: r,
			tagPropertyKey: s,
		} = t;
		(this.valueMutated = en(n) ? n : Di),
			(this.valueObserved = en(o) ? o : ki),
			(this.valueIsObservable = en(r) ? r : Mi),
			(this.tagPropertyKey = s);
	}
	getProxy(t) {
		const n = U(t);
		return this.valueIsObservable(n)
			? this.readOnlyObjectGraph.get(n) === t
				? t
				: this.getReactiveHandler(n)
			: n;
	}
	getReadOnlyProxy(t) {
		return (
			(t = U(t)), this.valueIsObservable(t) ? this.getReadOnlyHandler(t) : t
		);
	}
	unwrapProxy(t) {
		return U(t);
	}
	getReactiveHandler(t) {
		let n = this.reactiveObjectGraph.get(t);
		if (L(n)) {
			const o = new Ni(this, t);
			(n = new Proxy(Io(t), o)), Vo(n, t), this.reactiveObjectGraph.set(t, n);
		}
		return n;
	}
	getReadOnlyHandler(t) {
		let n = this.readOnlyObjectGraph.get(t);
		if (L(n)) {
			const o = new Ci(this, t);
			(n = new Proxy(Io(t), o)), Vo(n, t), this.readOnlyObjectGraph.set(t, n);
		}
		return n;
	}
}
const Po = Symbol.for("@@lockerLiveValue"),
	an = new _i({ valueObserved: bo, valueMutated: wo, tagPropertyKey: Po });
function Oi(e) {
	return an.unwrapProxy(e);
}
function Fo(e) {
	return an.getReadOnlyProxy(e);
}
function xo(e) {
	return an.getProxy(e);
}
function Ai(e) {
	e[Po] = void 0;
}
function Vi(e, t) {
	const { get: n, set: o, enumerable: r, configurable: s } = t;
	if (!k(n))
		throw new TypeError(
			`Detected invalid public property descriptor for HTMLElement.prototype.${e} definition. Missing the standard getter.`,
		);
	if (!k(o))
		throw new TypeError(
			`Detected invalid public property descriptor for HTMLElement.prototype.${e} definition. Missing the standard setter.`,
		);
	return {
		enumerable: r,
		configurable: s,
		get() {
			const i = b(this);
			if (!Rn(i)) return Ae(i, e), n.call(i.elm);
		},
		set(i) {
			const a = b(this);
			return Re(a, e, i), o.call(a.elm, i);
		},
	};
}
const Bo = new WeakMap(),
	R = function () {
		if (g(te)) throw new TypeError("Illegal constructor");
		mi(this, te);
		const e = te,
			{ def: t, elm: n } = e,
			{ bridge: o } = t,
			r = this;
		if ((Zn(n, o.prototype), (e.component = this), arguments.length === 1)) {
			const { callHook: s, setHook: i, getHook: a } = arguments[0];
			(e.callHook = s), (e.setHook = i), (e.getHook = a);
		}
		return (
			Ai(this),
			Fn(r, e),
			Fn(n, e),
			e.renderMode === 1 ? (e.renderRoot = $i(e)) : (e.renderRoot = n),
			this
		);
	};
function $i(e) {
	const {
			elm: t,
			mode: n,
			shadowMode: o,
			def: { ctor: r },
			renderer: { attachShadow: s },
		} = e,
		i = s(t, {
			[js]: o === 1,
			delegatesFocus: Boolean(r.delegatesFocus),
			mode: n,
		});
	return (e.shadowRoot = i), Fn(i, e), i;
}
function bu(e, t) {
	Rn(e) &&
		O(
			`this.${t} should not be called during the construction of the custom element for ${ie(e)} because the element is not yet in the DOM or has no children yet.`,
		);
}
const Wo = new Set([
	"setFormValue",
	"form",
	"setValidity",
	"willValidate",
	"validity",
	"validationMessage",
	"checkValidity",
	"reportValidity",
	"labels",
]);
function Ho(e, t) {
	if (se(e) && Wo.has(e) && !t)
		throw new DOMException(
			`Failed to execute '${e}' on 'ElementInternals': The target element is not a form-associated custom element.`,
		);
}
const Ri = new Set(["shadowRoot", "role", ...Wo]);
function Uo(e) {
	let t = !1;
	return se(e) && (t = Ri.has(e) || /^aria/.test(e)), t;
}
function Li(e, t) {
	return new Proxy(e, {
		set(o, r, s) {
			return Uo(r) ? (Ho(r, t), Reflect.set(o, r, s)) : !1;
		},
		get(o, r) {
			if (
				Te.call(Object.prototype, r) ||
				Symbol.for("Symbol.toStringTag") === r ||
				Uo(r)
			) {
				Ho(r, t);
				const s = Reflect.get(o, r);
				return k(s) ? s.bind(o) : s;
			}
		},
	});
}
R.prototype = {
	constructor: R,
	dispatchEvent(e) {
		const t = b(this),
			{
				elm: n,
				renderer: { dispatchEvent: o },
			} = t;
		return o(n, e);
	},
	addEventListener(e, t, n) {
		const o = b(this),
			{
				elm: r,
				renderer: { addEventListener: s },
			} = o,
			i = _r(o, t);
		s(r, e, i, n);
	},
	removeEventListener(e, t, n) {
		const o = b(this),
			{
				elm: r,
				renderer: { removeEventListener: s },
			} = o,
			i = _r(o, t);
		s(r, e, i, n);
	},
	hasAttribute(e) {
		const t = b(this),
			{
				elm: n,
				renderer: { getAttribute: o },
			} = t;
		return !g(o(n, e));
	},
	hasAttributeNS(e, t) {
		const n = b(this),
			{
				elm: o,
				renderer: { getAttribute: r },
			} = n;
		return !g(r(o, t, e));
	},
	removeAttribute(e) {
		const t = b(this),
			{
				elm: n,
				renderer: { removeAttribute: o },
			} = t;
		o(n, e);
	},
	removeAttributeNS(e, t) {
		const {
			elm: n,
			renderer: { removeAttribute: o },
		} = b(this);
		o(n, t, e);
	},
	getAttribute(e) {
		const t = b(this),
			{ elm: n } = t,
			{ getAttribute: o } = t.renderer;
		return o(n, e);
	},
	getAttributeNS(e, t) {
		const n = b(this),
			{ elm: o } = n,
			{ getAttribute: r } = n.renderer;
		return r(o, t, e);
	},
	setAttribute(e, t) {
		const n = b(this),
			{
				elm: o,
				renderer: { setAttribute: r },
			} = n;
		r(o, e, t);
	},
	setAttributeNS(e, t, n) {
		const o = b(this),
			{
				elm: r,
				renderer: { setAttribute: s },
			} = o;
		s(r, t, n, e);
	},
	getBoundingClientRect() {
		const e = b(this),
			{
				elm: t,
				renderer: { getBoundingClientRect: n },
			} = e;
		return n(t);
	},
	attachInternals() {
		const e = b(this),
			{
				elm: t,
				def: { formAssociated: n },
				renderer: { attachInternals: o },
			} = e;
		if (e.shadowMode === 1)
			throw new Error(
				"attachInternals API is not supported in light DOM or synthetic shadow.",
			);
		const r = o(t);
		return Li(r, Boolean(n));
	},
	get isConnected() {
		const e = b(this),
			{
				elm: t,
				renderer: { isConnected: n },
			} = e;
		return n(t);
	},
	get classList() {
		const e = b(this),
			{
				elm: t,
				renderer: { getClassList: n },
			} = e;
		return n(t);
	},
	get template() {
		return b(this).shadowRoot;
	},
	get refs() {
		const e = b(this);
		if (Et) return;
		const { refVNodes: t, cmpTemplate: n } = e;
		if (g(t)) return;
		let o = Bo.get(t);
		if (c(o)) {
			o = C(null);
			for (const r of F(t)) o[r] = t[r].elm;
			Ce(o), Bo.set(t, o);
		}
		return o;
	},
	set refs(e) {
		$(this, "refs", {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			value: e,
		});
	},
	get shadowRoot() {
		return null;
	},
	get children() {
		const e = b(this);
		return e.renderer.getChildren(e.elm);
	},
	get childNodes() {
		const e = b(this);
		return e.renderer.getChildNodes(e.elm);
	},
	get firstChild() {
		const e = b(this);
		return e.renderer.getFirstChild(e.elm);
	},
	get firstElementChild() {
		const e = b(this);
		return e.renderer.getFirstElementChild(e.elm);
	},
	get lastChild() {
		const e = b(this);
		return e.renderer.getLastChild(e.elm);
	},
	get lastElementChild() {
		const e = b(this);
		return e.renderer.getLastElementChild(e.elm);
	},
	get ownerDocument() {
		const e = b(this);
		return e.renderer.ownerDocument(e.elm);
	},
	get tagName() {
		const { elm: e, renderer: t } = b(this);
		return t.getTagName(e);
	},
	render() {
		return b(this).def.template;
	},
	toString() {
		return `[object ${b(this).def.name}]`;
	},
};
const jo = C(null),
	Ii = [
		"getElementsByClassName",
		"getElementsByTagName",
		"querySelector",
		"querySelectorAll",
	];
for (const e of Ii)
	jo[e] = {
		value(t) {
			const n = b(this),
				{ elm: o, renderer: r } = n;
			return r[e](o, t);
		},
		configurable: !0,
		enumerable: !0,
		writable: !0,
	};
oe(R.prototype, jo);
const cn = C(null);
for (const e in Ve) cn[e] = Vi(e, Ve[e]);
oe(R.prototype, cn),
	So(R.prototype),
	$(R, "CustomElementConstructor", {
		get() {
			throw new ReferenceError(
				"The current runtime does not support CustomElementConstructor.",
			);
		},
		configurable: !0,
	});
function Pi(e) {
	return {
		get() {
			const t = b(this);
			return Ae(t, e), t.cmpFields[e];
		},
		set(t) {
			const n = b(this);
			Re(n, e, t);
		},
		enumerable: !0,
		configurable: !0,
	};
}
const ln = new Map();
function Fi(e, t) {
	let n = ln.get(e);
	if (!c(n)) throw new Error("Adapter already has a context provider.");
	(n = li()), ln.set(e, n);
	const o = new WeakSet();
	return (r, s) => {
		if (o.has(r)) throw new Error(`Adapter was already installed on ${r}.`);
		o.add(r);
		const { consumerConnectedCallback: i, consumerDisconnectedCallback: a } = s;
		t(r, n, (u) => {
			const { setNewContext: d, setDisconnectedCallback: l } = u,
				f = {
					provide(E) {
						d(E);
					},
				};
			l(() => {
				c(a) || a(f);
			}),
				i(f);
		});
	};
}
function xi(e, t, n) {
	const { adapter: o } = t,
		r = ln.get(o);
	if (c(r)) return;
	const {
		elm: s,
		context: { wiredConnecting: i, wiredDisconnecting: a },
		renderer: { registerContextConsumer: u },
	} = e;
	T.call(i, () => {
		u(s, r, {
			setNewContext(d) {
				n(d);
			},
			setDisconnectedCallback(d) {
				T.call(a, d);
			},
		});
	});
}
const Bi = "$$DeprecatedWiredElementHostKey$$",
	Wi = "$$DeprecatedWiredParamsMetaKey$$",
	vu = "@wire",
	un = new Map();
function Hi(e, t) {
	return (n) => {
		Re(e, t, n);
	};
}
function Ui(e, t) {
	return (n) => {
		Z(
			e,
			e.owner,
			A,
			() => {
				t.call(e.component, n);
			},
			A,
		);
	};
}
function ji(e, t, n) {
	let o = !1;
	const r = No(() => {
			o === !1 &&
				((o = !0),
				Promise.resolve().then(() => {
					(o = !1), r.reset(), s();
				}));
		}),
		s = () => {
			let i;
			r.observe(() => (i = t(e))), n(i);
		};
	return { computeConfigAndUpdate: s, ro: r };
}
function Gi(e, t, n) {
	const { method: o, adapter: r, configCallback: s, dynamic: i } = n;
	let a;
	const u = c(o) ? Hi(e, t) : Ui(e, o),
		d = (h) => {
			u(h);
		};
	let l, f;
	$(d, Bi, { value: e.elm }),
		$(d, Wi, { value: i }),
		Z(
			e,
			e,
			A,
			() => {
				f = new r(d, { tagName: e.tagName });
			},
			A,
		);
	const m = (h) => {
			Z(
				e,
				e,
				A,
				() => {
					f.update(h, l);
				},
				A,
			);
		},
		{ computeConfigAndUpdate: E, ro: w } = ji(e.component, s, m);
	return (
		c(r.contextSchema) ||
			xi(e, n, (h) => {
				l !== h && ((l = h), e.state === 1 && E());
			}),
		{
			connector: f,
			computeConfigAndUpdate: E,
			resetConfigWatcher: () => w.reset(),
		}
	);
}
function Yi(e, t, n, o) {
	t.adapter && (t = t.adapter);
	const r = e.value,
		s = { adapter: t, method: r, configCallback: n, dynamic: o };
	un.set(e, s);
}
function Ki(e, t, n, o) {
	t.adapter && (t = t.adapter);
	const r = { adapter: t, configCallback: n, dynamic: o };
	un.set(e, r);
}
function zi(e) {
	const {
			context: t,
			def: { wire: n },
		} = e,
		o = (t.wiredConnecting = []),
		r = (t.wiredDisconnecting = []);
	for (const s in n) {
		const i = n[s],
			a = un.get(i);
		if (!c(a)) {
			const {
					connector: u,
					computeConfigAndUpdate: d,
					resetConfigWatcher: l,
				} = Gi(e, s, a),
				f = a.dynamic.length > 0;
			T.call(o, () => {
				if ((u.connect(), f)) {
					Promise.resolve().then(d);
					return;
				}
				d();
			}),
				T.call(r, () => {
					u.disconnect(), l();
				});
		}
	}
}
function qi(e) {
	const { wiredConnecting: t } = e.context;
	for (let n = 0, o = t.length; n < o; n += 1) t[n]();
}
function Qi(e) {
	const { wiredDisconnecting: t } = e.context;
	Z(
		e,
		e,
		A,
		() => {
			for (let n = 0, o = t.length; n < o; n += 1) t[n]();
		},
		A,
	);
}
function Xi() {
	throw new Error();
}
function Ji(e) {
	return {
		get() {
			const t = b(this);
			if (!Rn(t)) return Ae(t, e), t.cmpProps[e];
		},
		set(t) {
			const n = b(this);
			(n.cmpProps[e] = t), vo(n, e);
		},
		enumerable: !0,
		configurable: !0,
	};
}
function Go(e, t) {
	const { get: n, set: o, enumerable: r, configurable: s } = t;
	return (
		$t.invariant(
			k(n),
			`Invalid public accessor ${ee(e)} decorated with @api. The property is missing a getter.`,
		),
		{
			get() {
				return n.call(this);
			},
			set(i) {
				const a = b(this);
				o && o.call(this, i);
			},
			enumerable: r,
			configurable: s,
		}
	);
}
function Zi(e) {
	if (arguments.length === 1) return xo(e);
	throw new Error();
}
function ea(e) {
	return {
		get() {
			const t = b(this);
			return Ae(t, e), t.cmpFields[e];
		},
		set(t) {
			const n = b(this),
				o = xo(t);
			Re(n, e, o);
		},
		enumerable: !0,
		configurable: !0,
	};
}
function ta(e, t) {
	throw new Error();
}
function na(e) {
	return {
		get() {
			const t = b(this);
			return Ae(t, e), t.cmpFields[e];
		},
		set(t) {
			const n = b(this);
			Re(n, e, t);
		},
		enumerable: !0,
		configurable: !0,
	};
}
function lt(e) {
	return k(e.value) ? "method" : k(e.set) || k(e.get) ? "accessor" : "field";
}
function Nu(e, t, n) {
	if ((V(), !c(n))) {
		const o = lt(n),
			r = `Invalid observed ${t} field. Found a duplicate ${o} with the same name.`;
		O(r);
	}
}
function Cu(e, t, n) {
	if ((V(), !c(n))) {
		const o = lt(n);
		O(`Invalid @track ${t} field. Found a duplicate ${o} with the same name.`);
	}
}
function Su(e, t, n) {
	if ((V(), !c(n))) {
		const o = lt(n);
		O(`Invalid @wire ${t} field. Found a duplicate ${o} with the same name.`);
	}
}
function Tu(e, t, n) {
	V(),
		(c(n) || !k(n.value) || G(n.writable)) &&
			O(
				`Invalid @wire ${t} field. The field should have a valid writable descriptor.`,
			);
}
function Mu(e, t, n) {
	if ((V(), !c(n))) {
		const o = lt(n),
			r = `Invalid @api ${t} field. Found a duplicate ${o} with the same name.`;
		O(r);
	}
}
function ku(e, t, n) {
	V(),
		k(n.set)
			? k(n.get) ||
				O(
					`Missing getter for property ${t} decorated with @api in ${e}. You cannot have a setter without the corresponding getter.`,
				)
			: k(n.get) || O(`Missing @api get ${t} accessor.`);
}
function Du(e, t, n) {
	V(), (c(n) || !k(n.value) || G(n.writable)) && O(`Invalid @api ${t} method.`);
}
function oa(e, t) {
	const n = e.prototype,
		{ publicProps: o, publicMethods: r, wire: s, track: i, fields: a } = t,
		u = C(null),
		d = C(null),
		l = C(null),
		f = C(null),
		m = C(null),
		E = C(null);
	let w;
	if (!c(o))
		for (const h in o) {
			const N = o[h];
			if (((E[h] = N.config), (w = j(n, h)), N.config > 0)) {
				if (c(w)) throw new Error();
				w = Go(h, w);
			} else !c(w) && !c(w.get) ? (w = Go(h, w)) : (w = Ji(h));
			(d[h] = w), $(n, h, w);
		}
	if (
		(c(r) ||
			et.call(r, (h) => {
				if (((w = j(n, h)), c(w))) throw new Error();
				u[h] = w;
			}),
		!c(s))
	)
		for (const h in s) {
			const { adapter: N, method: v, config: S, dynamic: D = [] } = s[h];
			if (((w = j(n, h)), v === 1)) {
				if (c(w)) throw new Error();
				(l[h] = w), Yi(w, N, S, D);
			} else (w = na(h)), (f[h] = w), Ki(w, N, S, D), $(n, h, w);
		}
	if (!c(i)) for (const h in i) (w = j(n, h)), (w = ea(h)), $(n, h, w);
	if (!c(a))
		for (let h = 0, N = a.length; h < N; h++) {
			const v = a[h];
			w = j(n, v);
			const S = !c(o) && v in o,
				D = !c(i) && v in i;
			!S && !D && (m[v] = Pi(v));
		}
	return (
		ra(e, {
			apiMethods: u,
			apiFields: d,
			apiFieldsConfig: E,
			wiredMethods: l,
			wiredFields: f,
			observedFields: m,
		}),
		e
	);
}
const Yo = new Map();
function ra(e, t) {
	Yo.set(e, t);
}
const sa = {
	apiMethods: x,
	apiFields: x,
	apiFieldsConfig: x,
	wiredMethods: x,
	wiredFields: x,
	observedFields: x,
};
function ia(e) {
	const t = Yo.get(e);
	return c(t) ? sa : t;
}
let Ko = !1;
function _u(e, t) {
	const n = e.toString().match(Xs);
	if (!g(n) && !Ko) {
		const o = n[1],
			[r, s] = o.split("."),
			[i, a] = xt.split(".");
		if (r !== i || s !== a) {
			Ko = !0;
			const u = t === "component" ? `${t} ${e.name}` : t;
			O(`LWC WARNING: current engine is v${xt}, but ${u} was compiled with v${o}.
Please update your compiled code or LWC engine so that the versions match.
No further warnings will appear.`),
				_e("CompilerRuntimeVersionMismatch", {
					compilerVersion: o,
					runtimeVersion: xt,
				});
		}
	}
}
const dn = new Set();
function fn() {
	return [];
}
dn.add(fn);
function aa(e) {
	return dn.has(e);
}
function ca(e) {
	return dn.add(e), e;
}
function la(e, t, n, o) {
	return o;
}
const zo = C(null),
	qo = C(null);
function ua(e) {
	let t = zo[e];
	return (
		c(t) &&
			(t = zo[e] =
				function () {
					const n = b(this),
						{ getHook: o } = n;
					return o(n.component, e);
				}),
		t
	);
}
function da(e) {
	let t = qo[e];
	return (
		c(t) &&
			(t = qo[e] =
				function (n) {
					const o = b(this),
						{ setHook: r } = o;
					(n = Fo(n)), r(o.component, e, n);
				}),
		t
	);
}
function fa(e) {
	return function () {
		const t = b(this),
			{ callHook: n, component: o } = t,
			r = o[e];
		return n(t.component, r, ro.call(arguments));
	};
}
function pa(e, t) {
	return function (o, r, s) {
		if (r === s) return;
		const i = e[o];
		if (c(i)) {
			c(t) || t.apply(this, arguments);
			return;
		}
		this[i] = s;
	};
}
function Ou(e) {
	let t;
	return {
		get() {
			return (
				jt(
					`The property "${e}" is not publicly accessible. Add the @api annotation to the property declaration or getter/setter in the component to make it accessible.`,
				),
				t
			);
		},
		set(n) {
			jt(
				`The property "${e}" is not publicly accessible. Add the @api annotation to the property declaration or getter/setter in the component to make it accessible.`,
			),
				(t = n);
		},
		enumerable: !0,
		configurable: !0,
	};
}
function Qo(e, t, n, o, r, s) {
	const i = class extends e {},
		a = C(null),
		{ attributeChangedCallback: u } = e.prototype,
		{ observedAttributes: d = [] } = e,
		l = C(null);
	for (let f = 0, m = t.length; f < m; f += 1) {
		const E = t[f];
		(a[ho(E)] = E),
			(l[E] = { get: ua(E), set: da(E), enumerable: !0, configurable: !0 });
	}
	for (let f = 0, m = n.length; f < m; f += 1) {
		const E = n[f];
		l[E] = { value: fa(E), writable: !0, configurable: !0 };
	}
	return (
		(l.attributeChangedCallback = { value: pa(a, u) }),
		(l.attachInternals = { set() {}, get() {} }),
		(l.formAssociated = { set() {}, get() {} }),
		$(i, "observedAttributes", {
			get() {
				return [...d, ...F(a)];
			},
		}),
		oe(i.prototype, l),
		i
	);
}
const Ie = Qo(To, Jn(Ve), [], [], null, !1);
So(Ie.prototype), Ce(Ie), Je(Ie.prototype);
const ha =
	typeof WeakRef == "function" && typeof FinalizationRegistry == "function";
class ma {
	constructor() {
		this._map = new WeakMap();
	}
	_getValues(t) {
		let n = this._map.get(t);
		return c(n) && ((n = new Set()), this._map.set(t, n)), n;
	}
	get(t) {
		return this._getValues(t);
	}
	add(t, n) {
		this._getValues(t).add(n);
	}
	delete(t) {
		this._map.delete(t);
	}
}
class ga {
	constructor() {
		(this._map = new WeakMap()),
			(this._registry = new FinalizationRegistry((t) => {
				for (let n = t.length - 1; n >= 0; n--) {
					const o = t[n].deref();
					c(o) && Lt.call(t, n, 1);
				}
			}));
	}
	_getWeakRefs(t) {
		let n = this._map.get(t);
		return c(n) && ((n = []), this._map.set(t, n)), n;
	}
	get(t) {
		const n = this._getWeakRefs(t),
			o = new Set();
		for (const r of n) {
			const s = r.deref();
			c(s) || o.add(s);
		}
		return o;
	}
	add(t, n) {
		const o = this._getWeakRefs(t);
		T.call(o, new WeakRef(n)), this._registry.register(n, o);
	}
	delete(t) {
		this._map.delete(t);
	}
}
const pn = ha ? ga : ma,
	Xo = new WeakMap(),
	Jo = new WeakMap(),
	Zo = new WeakMap(),
	hn = new pn(),
	mn = new pn(),
	gn = new pn();
function Au(e) {
	const t = hn.get(e);
	for (const n of t) G(n.isDirty) && (ye(n), Bn(n));
	return hn.delete(e), !0;
}
function Vu(e) {
	const t = gn.get(e);
	for (const n of t) Pr(n);
	return gn.delete(e), !0;
}
function $u(e) {
	const t = mn.get(e);
	let n = !0;
	for (const o of t) {
		const { owner: r } = o;
		g(r) ? (n = !1) : Pr(r);
	}
	return mn.delete(e), n;
}
function Ru(e) {
	V();
	const t = new Set();
	for (; Xo.has(e) && !t.has(e); ) t.add(e), (e = Xo.get(e));
	return e;
}
function Lu(e) {
	V();
	const t = new Set();
	for (; Jo.has(e) && !t.has(e); ) t.add(e), (e = Jo.get(e));
	return e;
}
function Ea(e) {
	V();
	const t = new Set();
	for (; Zo.has(e) && !t.has(e); ) t.add(e), (e = Zo.get(e));
	return e;
}
function Iu(e) {
	V();
	const t = e.def.ctor;
	mn.add(t, e);
	const n = e.cmpTemplate;
	if (n) {
		hn.add(n, e);
		const o = n.stylesheets;
		if (!c(o))
			for (const r of Yt(o)) {
				const s = Ea(r);
				gn.add(s, e);
			}
	}
}
function ya(e, t) {
	return !1;
}
function wa(e, t) {
	return !1;
}
function ba(e, t) {
	return !1;
}
const En = new WeakMap();
function va(e) {
	let t = Se(e);
	if (g(t))
		throw new ReferenceError(
			`Invalid prototype chain for ${e.name}, you must extend LightningElement.`,
		);
	if (zt(t)) {
		const n = Kt(t);
		t = n === t ? R : n;
	}
	return t;
}
function Na(e) {
	const { shadowSupportMode: t, renderMode: n, formAssociated: o } = e,
		r = ia(e),
		{
			apiFields: s,
			apiFieldsConfig: i,
			apiMethods: a,
			wiredFields: u,
			wiredMethods: d,
			observedFields: l,
		} = r,
		f = e.prototype;
	let {
		connectedCallback: m,
		disconnectedCallback: E,
		renderedCallback: w,
		errorCallback: h,
		formAssociatedCallback: N,
		formResetCallback: v,
		formDisabledCallback: S,
		formStateRestoreCallback: D,
		render: X,
	} = f;
	const he = va(e),
		me = he !== R,
		_ = me ? le(he) : Sa,
		Mt = Qo(_.bridge, F(s), F(a), F(l), f, me),
		kt = q(C(null), _.props, s),
		Dt = q(C(null), _.propsConfig, i),
		_t = q(C(null), _.methods, a),
		Ot = q(C(null), _.wire, u, d);
	(m = m || _.connectedCallback),
		(E = E || _.disconnectedCallback),
		(w = w || _.renderedCallback),
		(h = h || _.errorCallback),
		(N = N || _.formAssociatedCallback),
		(v = v || _.formResetCallback),
		(S = S || _.formDisabledCallback),
		(D = D || _.formStateRestoreCallback),
		(X = X || _.render);
	let ve = _.shadowSupportMode;
	c(t) || (ve = t);
	let Qe = _.renderMode;
	c(n) || (Qe = n === "light" ? 0 : 1);
	let Ne = _.formAssociated;
	c(o) || (Ne = o);
	const At = _c(e) || _.template,
		Vt = e.name || _.name;
	oe(f, l);
	const Xe = {
		ctor: e,
		name: Vt,
		wire: Ot,
		props: kt,
		propsConfig: Dt,
		methods: _t,
		bridge: Mt,
		template: At,
		renderMode: Qe,
		shadowSupportMode: ve,
		formAssociated: Ne,
		connectedCallback: m,
		disconnectedCallback: E,
		errorCallback: h,
		formAssociatedCallback: N,
		formDisabledCallback: S,
		formResetCallback: v,
		formStateRestoreCallback: D,
		renderedCallback: w,
		render: X,
	};
	return hi(Xe), Xe;
}
function ut(e) {
	if (!k(e)) return !1;
	if (e.prototype instanceof R) return !0;
	let t = e;
	do {
		if (zt(t)) {
			const n = Kt(t);
			if (n === t) return !0;
			t = n;
		}
		if (t === R) return !0;
	} while (!g(t) && (t = Se(t)));
	return !1;
}
function le(e) {
	let t = En.get(e);
	if (c(t)) {
		if (zt(e)) {
			const n = Kt(e);
			return (t = le(n)), En.set(e, t), t;
		}
		if (!ut(e))
			throw new TypeError(
				`${e} is not a valid component, or does not extends LightningElement from "lwc". You probably forgot to add the extend clause on the class declaration.`,
			);
		(t = Na(e)), En.set(e, t);
	}
	return t;
}
function Ca(e) {
	return le(e).bridge;
}
const Sa = {
	ctor: R,
	name: R.name,
	props: cn,
	propsConfig: x,
	methods: x,
	renderMode: 1,
	shadowSupportMode: "reset",
	formAssociated: void 0,
	wire: x,
	bridge: Ie,
	template: fn,
	render: R.prototype.render,
};
function Ta(e) {
	const t = le(e),
		{ ctor: n, name: o, props: r, propsConfig: s, methods: i } = t,
		a = {};
	for (const d in r) a[d] = { config: s[d] || 0, type: "any", attr: ho(d) };
	const u = {};
	for (const d in i) u[d] = i[d].value;
	return { ctor: n, name: o, props: a, methods: u };
}
function Pe(e) {
	return `${e}-host`;
}
function Ma(e) {
	return On.h("style", { key: "style", attrs: { type: "text/css" } }, [
		On.t(e),
	]);
}
function ka(e, t, n) {
	const {
			elm: o,
			context: r,
			renderMode: s,
			shadowMode: i,
			renderer: { getClassList: a, removeAttribute: u, setAttribute: d },
		} = e,
		{ stylesheets: l } = t,
		f = n ? t.legacyStylesheetToken : t.stylesheetToken,
		{ stylesheets: m } = e,
		E = s === 1 && i === 1,
		{ hasScopedStyles: w } = r;
	let h, N, v, S, D, X;
	n
		? ((S = r.legacyStylesheetToken),
			(D = r.hasLegacyTokenInClass),
			(X = r.hasLegacyTokenInAttribute))
		: ((S = r.stylesheetToken),
			(D = r.hasTokenInClass),
			(X = r.hasTokenInAttribute)),
		c(S) || (D && a(o).remove(Pe(S)), X && u(o, Pe(S)));
	const he = je(l),
		me = je(m);
	(he || me) && (h = f),
		c(h) ||
			(w && (a(o).add(Pe(h)), (N = !0)), E && (d(o, Pe(h), ""), (v = !0))),
		n
			? ((r.legacyStylesheetToken = h),
				(r.hasLegacyTokenInClass = N),
				(r.hasLegacyTokenInAttribute = v))
			: ((r.stylesheetToken = h),
				(r.hasTokenInClass = N),
				(r.hasTokenInAttribute = v));
}
function yn(e, t, n) {
	const o = [];
	let r;
	for (let s = 0; s < e.length; s++) {
		let i = e[s];
		if (W(i)) T.apply(o, yn(i, t, n));
		else {
			const a = i[lo],
				u = a || (n.shadowMode === 1 && n.renderMode === 1) ? t : void 0,
				d = n.renderMode === 0 ? !a : n.shadowMode === 0;
			let l;
			n.renderMode === 1
				? (l = n.shadowMode === 0)
				: (c(r) && (r = er(n)), (l = g(r) || r.shadowMode === 0)),
				T.call(o, i(u, d, l));
		}
	}
	return o;
}
function Da(e, t) {
	const { stylesheets: n, stylesheetToken: o } = t,
		{ stylesheets: r } = e;
	let s = [];
	return je(n) && (s = yn(n, o, e)), je(r) && T.apply(s, yn(r, o, e)), s;
}
function er(e) {
	let t = e;
	for (; !g(t); ) {
		if (t.renderMode === 1) return t;
		t = t.owner;
	}
	return t;
}
function tr(e, t) {
	const { cmpTemplate: n, context: o } = e;
	return (
		(o.hasScopedStyles &&
			(t
				? n == null
					? void 0
					: n.legacyStylesheetToken
				: n == null
					? void 0
					: n.stylesheetToken)) ||
		null
	);
}
function _a(e) {
	const { template: t } = le(e.ctor),
		{ vm: n } = e,
		{ stylesheetToken: o } = t;
	return !c(o) && Tr(t, n) ? Pe(o) : null;
}
function Oa(e) {
	const t = er(e);
	return !g(t) && t.shadowMode === 1 ? null : t;
}
function Aa(e, t) {
	const {
		renderMode: n,
		shadowMode: o,
		renderer: { insertStylesheet: r },
	} = e;
	if (n === 1 && o === 1) for (let s = 0; s < t.length; s++) r(t[s]);
	else {
		if (e.hydrated) return to.call(t, Ma);
		{
			const s = Oa(e),
				i = g(s) ? void 0 : s.shadowRoot;
			for (let a = 0; a < t.length; a++) r(t[a], i);
		}
	}
	return null;
}
function Va(e) {
	const { type: t } = e;
	return t === 2 || t === 3;
}
function Fe(e, t) {
	return e.key === t.key && e.sel === t.sel;
}
function $a(e) {
	return e.type === 3;
}
function xe(e) {
	return e.type === 5;
}
function nr(e) {
	return e.type === 6;
}
const or = 58;
function Ra(e, t, n) {
	const { attrs: o, external: r } = t.data;
	if (c(o)) return;
	const s = g(e) ? x : e.data.attrs;
	if (s === o) return;
	const { elm: i } = t,
		{ setAttribute: a, removeAttribute: u, setProperty: d } = n;
	for (const l in o) {
		const f = o[l];
		if (s[l] !== f) {
			let E;
			r && (E = Qs(l)) in i
				? d(i, E, f)
				: tt.call(l, 3) === or
					? a(i, l, f, Gs)
					: tt.call(l, 5) === or
						? a(i, l, f, Ks)
						: g(f) || c(f)
							? u(i, l)
							: a(i, l, f);
		}
	}
}
function La(e, t) {
	return e === "input" && (t === "value" || t === "checked");
}
function rr(e, t, n) {
	const { props: o } = t.data;
	if (c(o)) return;
	let r;
	if (!g(e)) {
		if (((r = e.data.props), r === o)) return;
		c(r) && (r = x);
	}
	const s = g(e),
		{ elm: i, sel: a } = t,
		{ getProperty: u, setProperty: d } = n;
	for (const l in o) {
		const f = o[l];
		(s || f !== (La(a, l) ? u(i, l) : r[l]) || !(l in r)) && d(i, l, f);
	}
}
const sr = C(null);
function ir(e) {
	if (e == null) return x;
	e = se(e) ? e : e + "";
	let t = sr[e];
	if (t) return t;
	t = C(null);
	let n = 0,
		o;
	const r = e.length;
	for (o = 0; o < r; o++)
		tt.call(e, o) === ai && (o > n && (t[io.call(e, n, o)] = !0), (n = o + 1));
	return o > n && (t[io.call(e, n, o)] = !0), (sr[e] = t), t;
}
function Ia(e, t, n) {
	const {
			elm: o,
			data: { className: r },
		} = t,
		s = g(e) ? void 0 : e.data.className;
	if (s === r) return;
	const { getClassList: i } = n,
		a = i(o),
		u = ir(r),
		d = ir(s);
	let l;
	for (l in d) c(u[l]) && a.remove(l);
	for (l in u) c(d[l]) && a.add(l);
}
function Pa(e, t, n) {
	const {
		elm: o,
		data: { style: r },
	} = t;
	if ((g(e) ? void 0 : e.data.style) === r) return;
	const { setAttribute: i, removeAttribute: a } = n;
	!se(r) || r === "" ? a(o, "style") : i(o, "style", r);
}
function wn(e, t) {
	var n;
	const { elm: o } = e,
		r = (n = e.data) === null || n === void 0 ? void 0 : n.on;
	if (c(r)) return;
	const { addEventListener: s } = t;
	for (const i in r) {
		const a = r[i];
		s(o, i, a);
	}
}
function Fa(e, t) {
	const {
		elm: n,
		data: { classMap: o },
	} = e;
	if (c(o)) return;
	const { getClassList: r } = t,
		s = r(n);
	for (const i in o) s.add(i);
}
function xa(e, t) {
	const {
		elm: n,
		data: { styleDecls: o },
	} = e;
	if (c(o)) return;
	const { setCSSStyleProperty: r } = t;
	for (let s = 0; s < o.length; s++) {
		const [i, a, u] = o[s];
		r(n, i, a, u);
	}
}
function bn(e, t) {
	const { data: n } = e,
		{ ref: o } = n;
	if (c(o)) return;
	const r = t.refVNodes;
	r[o] = e;
}
function Ba(e, t, n) {
	const o = t.length;
	if (o === 1) {
		const l = t[0];
		if (l.partId === 0) {
			l.elm = e;
			return;
		}
	}
	const r = new Map();
	for (const l of t) r.set(l.partId, l);
	let s = 0;
	const { previousSibling: i, getLastChild: a } = n,
		u = [e];
	let d = -1;
	for (; u.length > 0; ) {
		const l = oo.call(u);
		d++;
		const f = r.get(d);
		if (!c(f) && ((f.elm = l), ++s === o)) return;
		let m = a(l);
		for (; !g(m); ) Ze.call(u, m), (m = i(m));
	}
}
function vn(e, t, n, o) {
	const { parts: r, owner: s } = t;
	if (!c(r)) {
		Ba(e, r, n);
		for (const i of r) o && wn(i, n), bn(i, s);
	}
}
function Nn(e, t, n, o) {
	fr(t) ? pr(e, t, n, o) : hr(e, t, n, o);
}
function ge(e, t, n, o) {
	var r, s;
	if (e !== t)
		switch (t.type) {
			case 0:
				Wa(e, t, o);
				break;
			case 1:
				Ua(e, t, o);
				break;
			case 4:
				za(e, t, o);
				break;
			case 5:
				Ya(e, t, n, o);
				break;
			case 2:
				qa(e, t, (r = t.data.renderer) !== null && r !== void 0 ? r : o);
				break;
			case 3:
				Xa(e, t, n, (s = t.data.renderer) !== null && s !== void 0 ? s : o);
				break;
		}
}
function ue(e, t, n, o) {
	var r, s;
	switch (e.type) {
		case 0:
			Ha(e, t, o, n);
			break;
		case 1:
			ja(e, t, o, n);
			break;
		case 4:
			Qa(e, t, o, n);
			break;
		case 5:
			Ga(e, t, o, n);
			break;
		case 2:
			Ka(e, t, o, (r = e.data.renderer) !== null && r !== void 0 ? r : n);
			break;
		case 3:
			ar(e, t, o, (s = e.data.renderer) !== null && s !== void 0 ? s : n);
			break;
	}
}
function Wa(e, t, n) {
	(t.elm = e.elm), t.text !== e.text && cr(t, n);
}
function Ha(e, t, n, o) {
	const { owner: r } = e,
		{ createText: s } = o,
		i = (e.elm = s(e.text));
	We(i, r, o), He(i, t, n, o);
}
function Ua(e, t, n) {
	(t.elm = e.elm), t.text !== e.text && cr(t, n);
}
function ja(e, t, n, o) {
	const { owner: r } = e,
		{ createComment: s } = o,
		i = (e.elm = s(e.text));
	We(i, r, o), He(i, t, n, o);
}
function Ga(e, t, n, o) {
	const { children: r } = e;
	Be(r, t, o, n), (e.elm = e.leading.elm);
}
function Ya(e, t, n, o) {
	const { children: r, stable: s } = t;
	s ? hr(e.children, r, n, o) : pr(e.children, r, n, o),
		(t.elm = t.leading.elm);
}
function Ka(e, t, n, o) {
	const {
			sel: r,
			owner: s,
			data: { svg: i },
		} = e,
		{ createElement: a } = o,
		u = re(i) ? Ys : void 0,
		d = (e.elm = a(r, u));
	We(d, s, o),
		lr(d, s, o),
		Ja(d, e),
		ur(d, e),
		pt(null, e, o),
		He(d, t, n, o),
		Be(e.children, d, o, null);
}
function za(e, t, n) {
	const o = (t.elm = e.elm);
	vn(o, t, n, !1);
}
function qa(e, t, n) {
	const o = (t.elm = e.elm);
	pt(e, t, n), Nn(e.children, t.children, o, n);
}
function Qa(e, t, n, o) {
	const { owner: r } = e,
		{ cloneNode: s, isSyntheticShadowDefined: i } = o,
		a = (e.elm = s(e.fragment, !0));
	We(a, r, o), ur(a, e);
	const { renderMode: u, shadowMode: d } = r;
	i && (d === 1 || u === 0) && (a[Us] = !0), He(a, t, n, o), vn(a, e, o, !0);
}
function ar(e, t, n, o) {
	const { sel: r, owner: s } = e,
		{ createCustomElement: i } = o;
	let a;
	const u = (v) => {
		a = ec(v, e, o);
	};
	let d, l, f, m, E, w;
	const h = r.toLowerCase(),
		N = i(h, u, d, l, f, m, E, w);
	(e.elm = N),
		(e.vm = a),
		We(N, s, o),
		lr(N, s, o),
		a && Tn(e, a),
		pt(null, e, o),
		He(N, t, n, o),
		a && Nt(a),
		Be(e.children, N, o, null),
		a && Fc(a);
}
function Xa(e, t, n, o) {
	if (e.ctor !== t.ctor) {
		const r = o.nextSibling(e.elm);
		dt(e, n, o, !0), ar(t, n, r, o);
	} else {
		const r = (t.elm = e.elm),
			s = (t.vm = e.vm);
		if ((pt(e, t, o), !c(s))) {
			Tn(t, s);
			const { shadowMode: i, renderMode: a } = s;
			i == 0 && a !== 0 && fr(e.children) && Mn(t.children);
		}
		Nn(e.children, t.children, r, o), c(s) || Pc(s);
	}
}
function Be(e, t, n, o, r = 0, s = e.length) {
	for (; r < s; ++r) {
		const i = e[r];
		B(i) && ue(i, t, n, o);
	}
}
function dt(e, t, n, o = !1) {
	const { type: r, elm: s, sel: i } = e;
	switch ((o && r !== 5 && Sn(s, t, n), r)) {
		case 5: {
			ft(e.children, t, n, o);
			break;
		}
		case 2: {
			const a = i === "slot" && e.owner.shadowMode === 1;
			ft(e.children, s, n, a);
			break;
		}
		case 3: {
			const { vm: a } = e;
			c(a) || xc(a);
		}
	}
}
function ft(e, t, n, o = !1, r = 0, s = e.length) {
	for (; r < s; ++r) {
		const i = e[r];
		B(i) && dt(i, t, n, o);
	}
}
function B(e) {
	return e != null;
}
function We(e, t, n) {
	const { renderRoot: o, renderMode: r, shadowMode: s } = t,
		{ isSyntheticShadowDefined: i } = n;
	i && (s === 1 || r === 0) && (e[Ft] = o[Ft]);
}
function cr(e, t) {
	const { elm: n, text: o } = e,
		{ setText: r } = t;
	r(n, o);
}
function Cn(e, t, n, o) {
	if (xe(e)) {
		const r = e.children;
		for (let s = 0; s < r.length; s += 1) {
			const i = r[s];
			g(i) || o.insert(i.elm, t, n);
		}
	} else o.insert(e.elm, t, n);
}
function He(e, t, n, o) {
	o.insert(e, t, n);
}
function Sn(e, t, n) {
	n.remove(e, t);
}
function pt(e, t, n) {
	g(e) && (wn(t, n), Fa(t, n), xa(t, n)),
		Ia(e, t, n),
		Pa(e, t, n),
		Ra(e, t, n),
		rr(e, t, n),
		bn(t, t.owner);
}
function lr(e, t, n) {
	const { getClassList: o } = n,
		r = tr(t, !1);
	g(r) || o(e).add(r);
	const { stylesheetToken: s } = t.context;
	t.shadowMode === 1 && (c(s) || (e.$shadowToken$ = s));
}
function Ja(e, t) {
	var n;
	const {
		owner: o,
		data: { context: r },
	} = t;
	o.shadowMode === 1 &&
		((n = r == null ? void 0 : r.lwc) === null || n === void 0
			? void 0
			: n.dom) === "manual" &&
		(e.$domManual$ = !0);
}
function ur(e, t) {
	var n, o;
}
function Tn(e, t) {
	const n = e.aChildren || e.children,
		{ renderMode: o, shadowMode: r } = t,
		s = Za(n);
	(e.children = s),
		(t.aChildren = s),
		(r === 1 || o === 0) &&
			(tc(t, s, e.owner), (e.aChildren = s), (e.children = H));
}
function Za(e) {
	const t = [],
		n = [];
	let o = !1;
	for (let s = e.length - 1; s > -1; s -= 1) {
		const i = e[s];
		T.call(n, i), (o = o || !!(i && xe(i)));
	}
	if (!o) return e;
	let r;
	for (; !c((r = no.call(n))); )
		if (!g(r) && xe(r)) {
			const s = r.children;
			for (let i = s.length - 2; i > 0; i -= 1) T.call(n, s[i]);
		} else T.call(t, r);
	return Mn(t), t;
}
function ec(e, t, n) {
	let o = z(e);
	if (!c(o)) return o;
	const { sel: r, mode: s, ctor: i, owner: a } = t;
	return (o = Ye(e, i, n, { mode: s, owner: a, tagName: r })), o;
}
function tc(e, t, n) {
	var o, r;
	const {
			cmpSlots: { slotAssignments: s },
		} = e,
		i = C(null);
	for (let a = 0, u = t.length; a < u; a += 1) {
		const d = t[a];
		if (g(d)) continue;
		let l = "";
		Va(d)
			? (l =
					(r =
						(o = d.data.attrs) === null || o === void 0 ? void 0 : o.slot) !==
						null && r !== void 0
						? r
						: "")
			: nr(d) && (l = d.slotName);
		const f = "" + l,
			m = (i[f] = i[f] || []);
		T.call(m, d);
	}
	if (((e.cmpSlots = { owner: n, slotAssignments: i }), G(e.isDirty))) {
		const a = F(s);
		if (a.length !== F(i).length) {
			ye(e);
			return;
		}
		for (let u = 0, d = a.length; u < d; u += 1) {
			const l = a[u];
			if (c(i[l]) || s[l].length !== i[l].length) {
				ye(e);
				return;
			}
			const f = s[l],
				m = i[l];
			for (let E = 0, w = i[l].length; E < w; E += 1)
				if (f[E] !== m[E]) {
					ye(e);
					return;
				}
		}
	}
}
const dr = new WeakSet();
function Mn(e) {
	dr.add(e);
}
function fr(e) {
	return dr.has(e);
}
function nc(e, t, n) {
	const o = {};
	for (let r = t; r <= n; ++r) {
		const s = e[r];
		if (B(s)) {
			const { key: i } = s;
			i !== void 0 && (o[i] = r);
		}
	}
	return o;
}
function pr(e, t, n, o) {
	let r = 0,
		s = 0,
		i = e.length - 1,
		a = e[0],
		u = e[i];
	const d = t.length - 1;
	let l = d,
		f = t[0],
		m = t[l],
		E,
		w,
		h,
		N,
		v = !1;
	for (; r <= i && s <= l; )
		if (!B(a)) a = e[++r];
		else if (!B(u)) u = e[--i];
		else if (!B(f)) f = t[++s];
		else if (!B(m)) m = t[--l];
		else if (Fe(a, f)) ge(a, f, n, o), (a = e[++r]), (f = t[++s]);
		else if (Fe(u, m)) ge(u, m, n, o), (u = e[--i]), (m = t[--l]);
		else if (Fe(a, m)) {
			ge(a, m, n, o);
			let S;
			xe(u) ? (S = o.nextSibling(u.trailing.elm)) : (S = o.nextSibling(u.elm)),
				Cn(a, n, S, o),
				(a = e[++r]),
				(m = t[--l]);
		} else
			Fe(u, f)
				? (ge(u, f, n, o), Cn(f, n, a.elm, o), (u = e[--i]), (f = t[++s]))
				: (E === void 0 && (E = nc(e, r, i)),
					(w = E[f.key]),
					c(w)
						? (ue(f, n, o, a.elm), (f = t[++s]))
						: ((h = e[w]),
							B(h) &&
								(h.sel !== f.sel
									? ue(f, n, o, a.elm)
									: (ge(h, f, n, o),
										v || ((v = !0), (e = [...e])),
										(e[w] = void 0),
										Cn(h, n, a.elm, o))),
							(f = t[++s])));
	if (r <= i || s <= l)
		if (r > i) {
			let S = l,
				D;
			do D = t[++S];
			while (!B(D) && S < d);
			(N = B(D) ? D.elm : null), Be(t, n, o, N, s, l + 1);
		} else ft(e, n, o, !0, r, i + 1);
}
function hr(e, t, n, o) {
	const r = e.length,
		s = t.length;
	if (r === 0) {
		Be(t, n, o, null);
		return;
	}
	if (s === 0) {
		ft(e, n, o, !0);
		return;
	}
	let i = null;
	for (let a = s - 1; a >= 0; a -= 1) {
		const u = e[a],
			d = t[a];
		d !== u &&
			(B(u)
				? B(d)
					? Fe(u, d)
						? (ge(u, d, n, o), (i = d.elm))
						: (dt(u, n, o, !0), ue(d, n, o, i), (i = d.elm))
					: dt(u, n, o, !0)
				: B(d) && (ue(d, n, o, i), (i = d.elm)));
	}
}
const oc = Symbol.iterator;
function rc(e) {
	T.call(I().velements, e);
}
function sc(e, t) {
	return { partId: e, data: t, elm: void 0 };
}
function ic(e, t) {
	return {
		type: 6,
		factory: t,
		owner: I(),
		elm: void 0,
		sel: void 0,
		key: void 0,
		slotName: e,
	};
}
function ac(e, t, n) {
	const o = I();
	return {
		type: 4,
		sel: void 0,
		key: t,
		elm: void 0,
		fragment: e,
		owner: o,
		parts: n,
	};
}
function mr(e, t, n) {
	const o = I(),
		r = Pt(5, o.apiVersion),
		s = r ? _n("") : Dn(""),
		i = r ? _n("") : Dn("");
	return {
		type: 5,
		sel: void 0,
		key: e,
		elm: void 0,
		children: [s, ...t, i],
		stable: n,
		owner: o,
		leading: s,
		trailing: i,
	};
}
function gr(e, t, n = H) {
	const o = I(),
		{ key: r } = t;
	return {
		type: 2,
		sel: e,
		data: t,
		children: n,
		elm: void 0,
		key: r,
		owner: o,
	};
}
function cc(e) {
	return e > 0 && !(re(e) || G(e)) ? 0 : e;
}
function lc(e, t, n, o) {
	if (
		!c(o) &&
		!c(o.slotAssignments) &&
		!c(o.slotAssignments[e]) &&
		o.slotAssignments[e].length !== 0
	) {
		const u = [],
			d = o.slotAssignments[e];
		for (let l = 0; l < d.length; l++) {
			const f = d[l];
			if (!g(f)) {
				const m = nr(f),
					E = !c(t.slotData);
				if (m !== E) continue;
				if (m) {
					const w = I();
					yt(o.owner);
					try {
						const { tro: h } = o.owner;
						h.observe(() => {
							T.call(u, f.factory(t.slotData, t.key));
						});
					} finally {
						yt(w);
					}
				} else T.call(u, f);
			}
		}
		n = u;
	}
	const r = I(),
		{ renderMode: s, shadowMode: i, apiVersion: a } = r;
	return s === 0
		? Pt(2, a)
			? mr(t.key, n, 0)
			: (ht(n), n)
		: (i === 1 && ht(n), gr("slot", t, n));
}
function kn(e, t, n, o = H) {
	const r = I(),
		{ key: s } = n;
	let i, a, u;
	const d = {
		type: 3,
		sel: e,
		data: n,
		children: o,
		elm: i,
		key: s,
		ctor: t,
		owner: r,
		mode: "open",
		aChildren: a,
		vm: u,
	};
	return rc(d), d;
}
function uc(e, t) {
	const n = [];
	ht(n);
	const o = I();
	if (c(e) || e === null) return n;
	const r = e[oc]();
	let s = r.next(),
		i = 0,
		{ value: a, done: u } = s,
		d,
		l;
	for (; u === !1; ) {
		(s = r.next()), (u = s.done);
		const f = t(a, i, i === 0, u === !0);
		W(f) ? T.apply(n, f) : T.call(n, f), (i += 1), (a = s.value);
	}
	return n;
}
function dc(e) {
	const t = e.length,
		n = [];
	ht(n);
	for (let o = 0; o < t; o += 1) {
		const r = e[o];
		W(r) ? T.apply(n, r) : T.call(n, r);
	}
	return n;
}
function Dn(e) {
	let t, n, o;
	return { type: 0, sel: t, text: e, elm: o, key: n, owner: I() };
}
function _n(e) {
	let t, n;
	return { type: 1, sel: t, text: e, elm: n, key: "c", owner: I() };
}
function fc(e) {
	return e == null ? "" : String(e);
}
function pc(e) {
	const t = I();
	if (g(t)) throw new Error();
	const n = t;
	return function (o) {
		Mr(n, e, n.component, o);
	};
}
function hc(e, t) {
	switch (typeof t) {
		case "number":
		case "string":
			return e + ":" + t;
		case "object":
	}
}
function mc(e) {
	const t = I();
	if (c(e) || e === "") return e;
	if (g(e)) return null;
	const { idx: n, shadowMode: o } = t;
	return o === 1 ? It.call(e, /\S+/g, (r) => `${r}-${n}`) : e;
}
function gc(e) {
	const t = I();
	if (c(e) || e === "") return e;
	if (g(e)) return null;
	const { idx: n, shadowMode: o } = t;
	return o === 1 && /^#/.test(e) ? `${e}-${n}` : e;
}
function Ec(e, t, n, o = H) {
	if (g(t) || c(t)) return null;
	if (!ut(t))
		throw new Error(
			`Invalid LWC Constructor ${ee(t)} for custom element <${e}>.`,
		);
	return kn(e, t, n, o);
}
function yc(e, t, n = H) {
	if (g(e) || c(e)) return null;
	if (!ut(e))
		throw new Error(
			`Invalid constructor ${ee(e)} is not a LightningElement constructor.`,
		);
	const o = Oc(e);
	if (c(o) || o === "")
		throw new Error(
			`Invalid LWC constructor ${ee(e)} does not have a registered name`,
		);
	return kn(o, e, t, n);
}
function ht(e) {
	return Mn(e), e;
}
let Er = () => {
	throw new Error("sanitizeHtmlContent hook must be implemented.");
};
function wc(e) {
	Er = e;
}
function bc(e) {
	return Er(e);
}
const On = Ce({
		s: lc,
		h: gr,
		c: kn,
		i: uc,
		f: dc,
		t: Dn,
		d: fc,
		b: pc,
		k: hc,
		co: _n,
		dc: yc,
		fr: mr,
		ti: cc,
		st: ac,
		gid: mc,
		fid: gc,
		shc: bc,
		ssf: ic,
		ddc: Ec,
		sp: sc,
	}),
	vc = [
		"constructor",
		"render",
		"patch",
		"connectedCallback",
		"renderedCallback",
		"disconnectedCallback",
		"errorCallback",
		"lwc-hydrate",
		"lwc-rehydrate",
	],
	yr =
		typeof performance != "undefined" &&
		typeof performance.mark == "function" &&
		typeof performance.clearMarks == "function" &&
		typeof performance.measure == "function" &&
		typeof performance.clearMeasures == "function",
	wr = yr
		? (e) => {
				performance.mark(e);
			}
		: A,
	br = yr
		? (e, t) => {
				performance.measure(e, t),
					performance.clearMarks(t),
					performance.clearMeasures(e);
			}
		: A;
function An(e) {
	return vc[e];
}
function vr(e, t) {
	return `${ie(t)} - ${An(e)}`;
}
function mt(e, t) {
	return `${vr(e, t)} - ${t.idx}`;
}
const gt = !1;
let Ee = !1,
	de = A;
const Nc = {
	enableProfiler() {
		Ee = !0;
	},
	disableProfiler() {
		Ee = !1;
	},
	attachDispatcher(e) {
		(de = e), this.enableProfiler();
	},
	detachDispatcher() {
		const e = de;
		return (de = A), this.disableProfiler(), e;
	},
};
function fe(e, t) {
	if (gt) {
		const n = mt(e, t);
		wr(n);
	}
	Ee && de(e, 0, t.tagName, t.idx, t.renderMode, t.shadowMode);
}
function pe(e, t) {
	if (gt) {
		const n = mt(e, t),
			o = vr(e, t);
		br(o, n);
	}
	Ee && de(e, 1, t.tagName, t.idx, t.renderMode, t.shadowMode);
}
function Nr(e, t) {
	if (gt) {
		const n = An(e),
			o = c(t) ? n : mt(e, t);
		wr(o);
	}
	Ee &&
		de(
			e,
			0,
			t == null ? void 0 : t.tagName,
			t == null ? void 0 : t.idx,
			t == null ? void 0 : t.renderMode,
			t == null ? void 0 : t.shadowMode,
		);
}
function Vn(e, t) {
	if (gt) {
		const n = An(e),
			o = c(t) ? n : mt(e, t);
		br(n, o);
	}
	Ee &&
		de(
			e,
			1,
			t == null ? void 0 : t.tagName,
			t == null ? void 0 : t.idx,
			t == null ? void 0 : t.renderMode,
			t == null ? void 0 : t.shadowMode,
		);
}
let Et = !1,
	Ue = null;
function I() {
	return Ue;
}
function yt(e) {
	Ue = e;
}
function Pu(e) {
	V();
	const { cmpSlots: t } = e;
	for (const n in t.slotAssignments)
		$t.isTrue(
			W(t.slotAssignments[n]),
			`Slots can only be set to an array, instead received ${ee(t.slotAssignments[n])} for slot "${n}" in ${e}.`,
		);
}
function Fu(e, t) {
	V(),
		e !== fn &&
			(t.renderMode === 0
				? e.renderMode !== "light" &&
					O(
						`Light DOM components can't render shadow DOM templates. Add an 'lwc:render-mode="light"' directive to the root template tag of ${ie(t)}.`,
					)
				: c(e.renderMode) ||
					O(
						`Shadow DOM components template can't render light DOM templates. Either remove the 'lwc:render-mode' directive from ${ie(t)} or set it to 'lwc:render-mode="shadow"`,
					));
}
function Cr(e) {
	return (t, ...n) => {
		const o = C(null);
		return function () {
			const {
					context: {
						hasScopedStyles: r,
						stylesheetToken: s,
						legacyStylesheetToken: i,
					},
					shadowMode: a,
					renderer: u,
				} = I(),
				d = !c(s),
				l = a === 1,
				f = !1;
			let m = 0;
			if ((d && r && (m |= 1), d && l && (m |= 2), f && (m |= 4), !c(o[m])))
				return o[m];
			const E = s + (f ? ` ${i}` : ""),
				w = r && d ? " " + E : "",
				h = r && d ? ` class="${E}"` : "",
				N = d && l ? " " + E : "";
			let v = "";
			for (let S = 0, D = n.length; S < D; S++)
				switch (n[S]) {
					case 0:
						v += t[S] + w;
						break;
					case 1:
						v += t[S] + h;
						break;
					case 2:
						v += t[S] + N;
						break;
					case 3:
						v += t[S] + h + N;
						break;
				}
			return (v += t[t.length - 1]), (o[m] = e(v, u)), o[m];
		};
	};
}
const Cc = Cr((e, t) => {
		const { createFragment: n } = t;
		return n(e);
	}),
	Sc = Cr((e, t) => {
		const { createFragment: n, getFirstChild: o } = t,
			r = n("<svg>" + e + "</svg>");
		return o(r);
	});
function Tc(e, t) {
	const n = Et,
		o = Ue;
	let r = [];
	return (
		Z(
			e,
			e.owner,
			() => {
				(Ue = e), fe(1, e);
			},
			() => {
				const {
					component: s,
					context: i,
					cmpSlots: a,
					cmpTemplate: u,
					tro: d,
				} = e;
				d.observe(() => {
					if (t !== u) {
						if ((g(u) || Lr(e), !aa(t)))
							throw new TypeError(
								`Invalid template returned by the render() method on ${e}. It must return an imported template (e.g.: \`import html from "./${e.def.name}.html"\`), instead, it has returned: ${ee(t)}.`,
							);
						(e.cmpTemplate = t),
							(i.tplCache = C(null)),
							(i.hasScopedStyles = Tr(t, e)),
							ka(e, t, !1);
						const f = Da(e, t);
						i.styleVNodes = f.length === 0 ? null : Aa(e, f);
					}
					(e.velements = []),
						(Et = !0),
						(r = t.call(void 0, On, s, a, i.tplCache));
					const { styleVNodes: l } = i;
					g(l) || Ze.apply(r, l);
				});
			},
			() => {
				(Et = n), (Ue = o), pe(1, e);
			},
		),
		r
	);
}
function Sr(e) {
	if (je(e)) {
		for (let t = 0; t < e.length; t++) if (re(e[t][lo])) return !0;
	}
	return !1;
}
function Tr(e, t) {
	const { stylesheets: n } = e,
		o = c(t) ? null : t.stylesheets;
	return Sr(n) || Sr(o);
}
function je(e) {
	return !c(e) && !g(e) && e.length > 0;
}
let $n = !1,
	te = null;
function Rn(e) {
	return te === e;
}
function Ge(e, t, n) {
	const { component: o, callHook: r, owner: s } = e;
	Z(
		e,
		s,
		A,
		() => {
			r(o, t, n);
		},
		A,
	);
}
function Mc(e, t) {
	const n = te;
	let o;
	fe(0, e), (te = e);
	try {
		const r = new t();
		if (te.component !== r)
			throw new TypeError(
				"Invalid component constructor, the class should extend LightningElement.",
			);
	} catch (r) {
		o = Object(r);
	} finally {
		if ((pe(0, e), (te = n), !c(o))) throw (Eo(e, o), o);
	}
}
function kc(e) {
	const {
			def: { render: t },
			callHook: n,
			component: o,
			owner: r,
		} = e,
		s = $n,
		i = I();
	let a,
		u = !1;
	return (
		Z(
			e,
			r,
			() => {
				($n = !0), yt(e);
			},
			() => {
				e.tro.observe(() => {
					(a = n(o, t)), (u = !0);
				});
			},
			() => {
				($n = s), yt(i);
			},
		),
		u ? Tc(e, a) : []
	);
}
function Mr(e, t, n, o) {
	const { callHook: r, owner: s } = e;
	Z(
		e,
		s,
		A,
		() => {
			r(n, t, [o]);
		},
		A,
	);
}
const wt = new Map();
function Dc(e, t) {
	return k(e) && wt.set(e, t), e;
}
function _c(e) {
	var t;
	return (t = wt.get(e)) === null || t === void 0 ? void 0 : t.tmpl;
}
function Oc(e) {
	var t;
	return (t = wt.get(e)) === null || t === void 0 ? void 0 : t.sel;
}
function Ac(e) {
	const t = wt.get(e),
		n = t == null ? void 0 : t.apiVersion;
	return c(n) ? Ws : n;
}
function Vc(e) {
	return No(() => {
		const { isDirty: t } = e;
		G(t) && (ye(e), Bn(e));
	});
}
function kr(e) {
	e.tro.reset();
	const t = kc(e);
	return (e.isDirty = !1), (e.isScheduled = !1), t;
}
function ye(e) {
	e.isDirty = !0;
}
const Dr = new WeakMap();
function _r(e, t) {
	if (!k(t))
		throw new TypeError("Expected an EventListener but received " + typeof t);
	let n = Dr.get(t);
	return (
		c(n) &&
			((n = function (o) {
				Mr(e, t, void 0, o);
			}),
			Dr.set(t, n)),
		n
	);
}
let $c = 0;
const Ln = new WeakMap();
function Rc(e, t, n = []) {
	return t.apply(e, n);
}
function Lc(e, t, n) {
	e[t] = n;
}
function Ic(e, t) {
	return e[t];
}
function Pc(e) {
	vt(e);
}
function In(e) {
	const t = b(e);
	Nr(7, t), t.state === 1 && Pn(e), Nt(t), vt(t), Vn(7, t);
}
function Pn(e) {
	const t = b(e);
	bt(t);
}
function Fc(e) {
	vt(e);
}
function bt(e) {
	const { state: t } = e;
	if (t !== 2) {
		const { tro: n } = e;
		n.reset(), Yc(e), $r(e), Kc(e);
	}
}
function xc(e) {
	bt(e);
}
function Bc(e) {
	let t = e;
	for (; !g(t) && t.renderMode === 0; ) t = t.owner;
	return t;
}
function Ye(e, t, n, o) {
	const { mode: r, owner: s, tagName: i, hydrated: a } = o,
		u = le(t),
		d = Ac(t),
		l = {
			elm: e,
			def: u,
			idx: $c++,
			state: 0,
			isScheduled: !1,
			isDirty: !0,
			tagName: i,
			mode: r,
			owner: s,
			refVNodes: null,
			children: H,
			aChildren: H,
			velements: H,
			cmpProps: C(null),
			cmpFields: C(null),
			cmpSlots: { slotAssignments: C(null) },
			cmpTemplate: null,
			hydrated: Boolean(a),
			renderMode: u.renderMode,
			context: {
				stylesheetToken: void 0,
				hasTokenInClass: void 0,
				hasTokenInAttribute: void 0,
				legacyStylesheetToken: void 0,
				hasLegacyTokenInClass: void 0,
				hasLegacyTokenInAttribute: void 0,
				hasScopedStyles: void 0,
				styleVNodes: null,
				tplCache: x,
				wiredConnecting: H,
				wiredDisconnecting: H,
			},
			tro: null,
			shadowMode: null,
			stylesheets: null,
			component: null,
			shadowRoot: null,
			renderRoot: null,
			callHook: Rc,
			setHook: Lc,
			getHook: Ic,
			renderer: n,
			apiVersion: d,
		};
	return (
		(l.stylesheets = Hc(l, u.ctor)),
		(l.shadowMode = Or(u, l.owner, n)),
		(l.tro = Vc(l)),
		Mc(l, u.ctor),
		xn(l) && zi(l),
		l
	);
}
function Wc(e, t) {
	let n = !0;
	const o = (r) => {
		if (W(r)) for (let s = 0; s < r.length; s++) o(r[s]);
		else k(r) || (n = !1);
	};
	return W(t) ? o(t) : (n = !1), n;
}
function Hc(e, t) {
	Uc(t);
	const { stylesheets: n } = t;
	return !c(n) && Wc(e, n) ? Yt(n) : null;
}
function Uc(e) {}
function jc(e, t) {
	const n = le(e),
		{ renderMode: o } = n,
		r = Or(n, null, t);
	return { renderMode: o, shadowMode: r };
}
function Or(e, t, n) {
	const { isSyntheticShadowDefined: o } = n;
	let r;
	if (o)
		if (e.renderMode === 0) r = 0;
		else if (
			lwcRuntimeFlags.ENABLE_MIXED_SHADOW_MODE ||
			e.shadowSupportMode === "native"
		)
			if (e.shadowSupportMode === "any" || e.shadowSupportMode === "native")
				r = 0;
			else {
				const s = Bc(t);
				!g(s) && s.shadowMode === 0 ? (r = 0) : (r = 1);
			}
		else r = 1;
	else r = 0;
	return r;
}
function xu(e) {
	if (g(e) || !nt(e) || !("renderRoot" in e))
		throw new TypeError(`${e} is not a VM.`);
}
function Fn(e, t) {
	Ln.set(e, t);
}
function b(e) {
	return Ln.get(e);
}
function z(e) {
	return Ln.get(e);
}
function vt(e) {
	if (re(e.isDirty)) {
		const t = kr(e);
		Gc(e, t);
	}
}
function Gc(e, t) {
	const { renderRoot: n, children: o, renderer: r } = e;
	Fr(e),
		(e.children = t),
		(t.length > 0 || o.length > 0) &&
			o !== t &&
			Z(
				e,
				e,
				() => {
					fe(2, e);
				},
				() => {
					Nn(o, t, n, r);
				},
				() => {
					pe(2, e);
				},
			),
		e.state === 1 && Ar(e);
}
function Ar(e) {
	const {
		def: { renderedCallback: t },
	} = e;
	c(t) || (fe(4, e), Ge(e, t), pe(4, e));
}
let we = [];
function Vr() {
	Nr(8);
	const e = we.sort((t, n) => t.idx - n.idx);
	we = [];
	for (let t = 0, n = e.length; t < n; t += 1) {
		const o = e[t];
		try {
			vt(o);
		} catch (r) {
			throw (
				(t + 1 < n &&
					(we.length === 0 && Co(Vr), Ze.apply(we, ro.call(e, t + 1))),
				Vn(8),
				r)
			);
		}
	}
	Vn(8);
}
function Nt(e) {
	const { state: t } = e;
	if (t === 1) return;
	(e.state = 1), xn(e) && qi(e);
	const { connectedCallback: n } = e.def;
	c(n) || (fe(3, e), Ge(e, n), pe(3, e)),
		ni() &&
			(e.renderer.isConnected(e.elm) ||
				_e("ConnectedCallbackWhileDisconnected", { tagName: e.tagName }));
}
function xn(e) {
	return Jn(e.def.wire).length > 0;
}
function Yc(e) {
	G(e.isDirty) && (e.isDirty = !0), (e.state = 2), xn(e) && Qi(e);
	const { disconnectedCallback: t } = e.def;
	c(t) || (fe(5, e), Ge(e, t), pe(5, e));
}
function $r(e) {
	const { velements: t } = e;
	for (let n = t.length - 1; n >= 0; n -= 1) {
		const { elm: o } = t[n];
		if (!c(o)) {
			const r = z(o);
			c(r) || bt(r);
		}
	}
}
function Kc(e) {
	const { aChildren: t } = e;
	Rr(t);
}
function Rr(e) {
	for (let t = 0, n = e.length; t < n; t += 1) {
		const o = e[t];
		if (!g(o) && !c(o.elm))
			switch (o.type) {
				case 2:
					Rr(o.children);
					break;
				case 3: {
					const r = b(o.elm);
					bt(r);
					break;
				}
			}
	}
}
function Lr(e) {
	Ir(e.children, e), (e.children = H), $r(e), (e.velements = H);
}
function Ir(e, t) {
	const {
		renderRoot: n,
		renderer: { remove: o },
	} = t;
	for (let r = 0, s = e.length; r < s; r += 1) {
		const i = e[r];
		g(i) || (xe(i) ? Ir(i.children, t) : c(i.elm) || o(i.elm, n));
	}
}
function Bn(e) {
	re(e.isScheduled) ||
		((e.isScheduled = !0), we.length === 0 && Co(Vr), T.call(we, e));
}
function zc(e) {
	let t = e;
	for (; !g(t); ) {
		if (!c(t.def.errorCallback)) return t;
		t = t.owner;
	}
}
function Z(e, t, n, o, r) {
	let s;
	n();
	try {
		o();
	} catch (i) {
		s = Object(i);
	} finally {
		if ((r(), !c(s))) {
			Eo(e, s);
			const i = g(t) ? void 0 : zc(t);
			if (c(i)) throw s;
			Lr(e), fe(6, e);
			const a = i.def.errorCallback;
			Ge(i, a, [s, s.wcStack]), pe(6, e);
		}
	}
}
function Pr(e) {
	(e.cmpTemplate = () => []), G(e.isDirty) && (ye(e), Bn(e));
}
function Ct(e, t) {
	const {
		renderMode: n,
		shadowMode: o,
		def: { formAssociated: r },
	} = e;
	if (!(c(r) || G(r))) {
		if (o === 1 && n !== 0)
			throw new Error(
				"Form associated lifecycle methods are not available in synthetic shadow. Please use native shadow or light DOM.",
			);
		Ge(e, t);
	}
}
function Bu(e) {
	const t = b(e),
		{ formAssociatedCallback: n } = t.def;
	c(n) || Ct(t, n);
}
function Wu(e) {
	const t = b(e),
		{ formDisabledCallback: n } = t.def;
	c(n) || Ct(t, n);
}
function Hu(e) {
	const t = b(e),
		{ formResetCallback: n } = t.def;
	c(n) || Ct(t, n);
}
function Uu(e) {
	const t = b(e),
		{ formStateRestoreCallback: n } = t.def;
	c(n) || Ct(t, n);
}
function Fr(e) {
	const { cmpTemplate: t } = e;
	e.refVNodes = !g(t) && t.hasRefs ? C(null) : null;
}
const qc = K[uo],
	Qc = K[fo];
delete K[uo], delete K[fo];
function Xc(e) {
	return e !== document && re(e.synthetic);
}
function xr(e, t, n) {
	let o = z(e.getRootNode().host);
	c(o) && (o = z(t.getRootNode().host)),
		!c(o) &&
			_e("CrossRootAriaInSyntheticShadow", {
				tagName: o.tagName,
				attributeName: n,
			});
}
function Jc(e) {
	return se(e) ? Rt.call(Fs.call(e, /\s+/), Boolean) : [];
}
function Br(e, t, n) {
	const o = e.getRootNode();
	if (!!Xc(o))
		if (t === "id") {
			if (!se(n) || n.length === 0) return;
			for (const r of ao) {
				const s = `[${r}~="${CSS.escape(n)}"]`,
					i = Qc.call(document, s);
				for (let a = 0; a < i.length; a++) {
					const u = i[a];
					if (u.getRootNode() !== o) {
						xr(u, e, r);
						break;
					}
				}
			}
		} else {
			const r = Jc(n);
			for (const s of r) {
				const i = qc.call(document, s);
				g(i) || (i.getRootNode() !== o && xr(e, i, t));
			}
		}
}
let Wr = !1;
function Zc() {
	if (Wr) return;
	Wr = !0;
	const { setAttribute: e } = Element.prototype;
	q(Element.prototype, {
		setAttribute(n, o) {
			e.call(this, n, o), (n === "id" || ao.has(n)) && Br(this, n, o);
		},
	});
	const t = j(Element.prototype, "id");
	if (!c(t)) {
		const { get: n, set: o } = t;
		k(n) &&
			k(o) &&
			$(Element.prototype, "id", {
				get() {
					return n.call(this);
				},
				set(r) {
					o.call(this, r), Br(this, "id", r);
				},
				enumerable: !0,
				configurable: !0,
			});
	}
}
function el() {
	return typeof CSS != "undefined" && k(CSS.escape);
}
function tl() {
	return Te.call(Element.prototype, co);
}
el() && tl() && Ht(Zc);
const nl = [
	"ariaActiveDescendant",
	"ariaControls",
	"ariaDescribedBy",
	"ariaDetails",
	"ariaErrorMessage",
	"ariaFlowTo",
	"ariaLabelledBy",
	"ariaOwns",
];
function ol() {
	return !c(j(Element.prototype, "ariaActiveDescendant"));
}
function rl(e) {
	const { host: t } = e.getRootNode(),
		n = c(t) ? void 0 : z(t);
	if (!c(n)) return n;
	let o = e;
	for (; !g((o = o.parentElement)); )
		if (o instanceof Ie) {
			const r = z(o);
			if (!c(r)) return r;
		}
}
function Hr(e, t, n, o) {
	const r = rl(e);
	let s;
	n && (s = g(o) ? "null" : typeof o),
		_e("NonStandardAriaReflection", {
			tagName: r == null ? void 0 : r.tagName,
			propertyName: t,
			isSetter: n,
			setValueType: s,
		});
}
function sl() {
	const { prototype: e } = Element;
	for (const t of nl) {
		const n = j(e, t),
			{ get: o, set: r } = n;
		$(e, t, {
			get() {
				return Hr(this, t, !1, void 0), o.call(this);
			},
			set(s) {
				return Hr(this, t, !0, s), r.call(this, s);
			},
			configurable: !0,
			enumerable: !0,
		});
	}
}
ol() && Ht(sl);
let Ke = !1;
function il(e) {
	(Ke = !1), Nt(e), Ur(e);
}
function Ur(e) {
	const t = kr(e);
	(e.children = t), Fr(e);
	const {
		renderRoot: n,
		renderer: { getFirstChild: o },
	} = e;
	St(o(n), t, n, e, !1), Ar(e);
}
function al(e, t, n) {
	var o, r;
	let s;
	switch (t.type) {
		case 0:
			s = ll(e, t, n);
			break;
		case 1:
			s = ul(e, t, n);
			break;
		case 4:
			s = dl(e, t, n);
			break;
		case 5:
			s = fl(e, t, n);
			break;
		case 2:
			s = pl(e, t, (o = t.data.renderer) !== null && o !== void 0 ? o : n);
			break;
		case 3:
			s = hl(e, t, (r = t.data.renderer) !== null && r !== void 0 ? r : n);
			break;
	}
	return n.nextSibling(s);
}
const be = "nodeValue";
function ju(e, t, n) {
	const { getProperty: o } = n,
		r = o(e, be);
	return r === t.text || (r === "\u200D" && t.text === "");
}
function cl(e) {
	return c(e)
		? (t) => !0
		: re(e)
			? (t) => !1
			: W(e) && Ps(e, se)
				? (t) => !Rs.call(e, t)
				: (t) => !0;
}
function ll(e, t, n) {
	var o;
	if (!ne(t, e, 3, n)) return ze(e, t, n);
	const { setText: r } = n;
	return r(e, (o = t.text) !== null && o !== void 0 ? o : null), (t.elm = e), e;
}
function ul(e, t, n) {
	var o;
	if (!ne(t, e, 8, n)) return ze(e, t, n);
	const { setProperty: r } = n;
	return (
		r(e, be, (o = t.text) !== null && o !== void 0 ? o : null), (t.elm = e), e
	);
}
function dl(e, t, n) {
	return !ne(t, e, 1, n) || !wl(t.fragment, e, t, n)
		? ze(e, t, n)
		: ((t.elm = e), vn(e, t, n, !0), e);
}
function fl(e, t, n) {
	const { children: o, owner: r } = t;
	return (
		St(e, o, n.getProperty(e, "parentNode"), r, !0),
		(t.elm = o[o.length - 1].elm)
	);
}
function pl(e, t, n) {
	if (!ne(t, e, 1, n) || !Gr(t, e, n)) return ze(e, t, n);
	t.elm = e;
	const { owner: o } = t,
		{ context: r } = t.data,
		s = Boolean(!c(r) && !c(r.lwc) && r.lwc.dom === "manual");
	if (s) {
		const {
				data: { props: i },
			} = t,
			{ getProperty: a } = n;
		!c(i) &&
			!c(i.innerHTML) &&
			a(e, "innerHTML") === i.innerHTML &&
			(t.data = Object.assign(Object.assign({}, t.data), {
				props: pi(i, "innerHTML"),
			}));
	}
	if ((jr(t, n), !s)) {
		const { getFirstChild: i } = n;
		St(i(e), t.children, e, o, !1);
	}
	return e;
}
function hl(e, t, n) {
	const { validationOptOut: o } = t.ctor,
		r = cl(o);
	if (!ne(t, e, 1, n) || !Gr(t, e, n, r)) return ze(e, t, n);
	const { sel: s, mode: i, ctor: a, owner: u } = t,
		{ defineCustomElement: d, getTagName: l } = n;
	d(ke.call(l(e)));
	const f = Ye(e, a, n, { mode: i, owner: u, tagName: s, hydrated: !0 });
	if (
		((t.elm = e), (t.vm = f), Tn(t, f), jr(t, n), Nt(f), f.renderMode !== 0)
	) {
		const { getFirstChild: m } = n;
		St(m(e), t.children, e, f, !1);
	}
	return Ur(f), e;
}
function St(e, t, n, o, r) {
	let s = !1,
		i = e;
	const { renderer: a } = o;
	for (let d = 0; d < t.length; d++) {
		const l = t[d];
		g(l) ||
			(i
				? (i = al(i, l, a))
				: ((Ke = !0), ue(l, n, a, i), (i = a.nextSibling(l.elm))));
	}
	if ((!Pt(5, o.apiVersion) || !r) && i) {
		Ke = !0;
		const { nextSibling: d } = a;
		do {
			const l = i;
			(i = d(i)), Sn(l, n, a);
		} while (i);
	}
}
function ze(e, t, n) {
	Ke = !0;
	const { getProperty: o } = n,
		r = o(e, "parentNode");
	return ue(t, r, n, e), Sn(e, r, n), t.elm;
}
function jr(e, t) {
	wn(e, t), rr(null, e, t), bn(e, e.owner);
}
function ne(e, t, n, o) {
	const { getProperty: r } = o;
	return r(t, "nodeType") === n;
}
function Gr(e, t, n, o = () => !0) {
	const { getProperty: r } = n;
	if (e.sel.toLowerCase() !== r(t, "tagName").toLowerCase()) return !1;
	const s = gl(e, t, n, o),
		i = o("class") ? El(e, t, n) : !0,
		a = o("style") ? yl(e, t, n) : !0;
	return s && i && a;
}
function ml(e, t) {
	return !!(String(e) === t || (g(t) && (c(e) || g(e))));
}
function gl(e, t, n, o) {
	const {
		data: { attrs: r = {} },
	} = e;
	let s = !0;
	for (const [i, a] of Object.entries(r)) {
		if (!o(i)) continue;
		const { owner: u } = e,
			{ getAttribute: d } = n,
			l = d(t, i);
		ml(a, l) || (s = !1);
	}
	return s;
}
function El(e, t, n) {
	const { data: o, owner: r } = e;
	let { className: s, classMap: i } = o;
	const { getProperty: a, getClassList: u, getAttribute: d } = n,
		l = tr(r, !1),
		f = $a(e) ? _a(e) : null;
	if (!g(l) || !g(f))
		if (c(s))
			if (!c(i))
				i = Object.assign(
					Object.assign(Object.assign({}, i), g(l) ? {} : { [l]: !0 }),
					g(f) ? {} : { [f]: !0 },
				);
			else {
				const h = [l, f],
					N = Rt.call(h, (v) => !g(v));
				N.length && (s = Me.call(N, " "));
			}
		else {
			const h = [l, s, f],
				N = Rt.call(h, (v) => !g(v));
			s = Me.call(N, " ");
		}
	let m = !0,
		E;
	const w = d(t, "class");
	if (!c(s) && String(s) !== w) (m = !1), (E = JSON.stringify(s));
	else if (c(i)) c(s) && !g(w) && ((m = !1), (E = '""'));
	else {
		const h = u(t);
		let N = "";
		for (const v in i) (N += " " + v), h.contains(v) || (m = !1);
		(E = JSON.stringify(N.trim())), h.length > F(i).length && (m = !1);
	}
	return m;
}
function yl(e, t, n) {
	const {
			data: { style: o, styleDecls: r },
		} = e,
		{ getAttribute: s } = n,
		i = s(t, "style") || "";
	let a,
		u = !0;
	if (!c(o) && o !== i) (u = !1), (a = o);
	else if (!c(r)) {
		const d = fi(i),
			l = [];
		for (let f = 0, m = r.length; f < m; f++) {
			const [E, w, h] = r[f];
			l.push(`${E}: ${w + (h ? " important!" : "")}`);
			const N = d[E];
			c(N)
				? (u = !1)
				: N.startsWith(w)
					? h && !N.endsWith("!important") && (u = !1)
					: (u = !1);
		}
		F(d).length > r.length && (u = !1), (a = Me.call(l, ";"));
	}
	return u;
}
function wl(e, t, n, o) {
	const { getProperty: r, getAttribute: s } = o;
	if (r(e, "nodeType") === 3)
		return ne(n, t, 3, o) ? r(e, be) === r(t, be) : !1;
	if (r(e, "nodeType") === 8)
		return ne(n, t, 8, o) ? r(e, be) === r(t, be) : !1;
	if (!ne(n, t, 1, o)) return !1;
	let i = !0;
	return r(e, "tagName") !== r(t, "tagName")
		? !1
		: (r(e, "getAttributeNames")
				.call(e)
				.forEach((u) => {
					s(e, u) !== s(t, u) && (i = !1);
				}),
			i);
}
let Yr = !1;
function bl(e) {
	$t.isFalse(
		Yr,
		"Hooks are already overridden, only one definition is allowed.",
	),
		(Yr = !0),
		wc(e.sanitizeHtmlContent);
}
const vl = ["slots", "stylesheetToken", "stylesheets", "renderMode"],
	Nl = ["$scoped$"],
	Cl = [
		"pop",
		"push",
		"shift",
		"unshift",
		"reverse",
		"sort",
		"fill",
		"splice",
		"copyWithin",
	];
let Wn = !1;
function Sl(e) {
	switch (e) {
		case "pop":
			return no;
		case "push":
			return T;
		case "shift":
			return oo;
		case "unshift":
			return Ze;
		case "reverse":
			return Ls;
		case "sort":
			return Is;
		case "fill":
			return $s;
		case "splice":
			return Lt;
		case "copyWithin":
			return As;
	}
}
function Kr(e, t, n) {
	_e(t, { propertyName: n });
}
function Hn(e) {
	Kr("template", "TemplateMutation", e);
}
function Tl(e) {
	Kr("stylesheet", "StylesheetMutation", e);
}
function Ml(e) {
	for (const t of Cl) {
		const n = Sl(t);
		e[t] = function () {
			return Hn("stylesheets"), n.apply(this, arguments);
		};
	}
}
function kl(e) {
	for (const t of Nl) {
		let n = e[t];
		$(e, t, {
			enumerable: !0,
			configurable: !0,
			get() {
				return n;
			},
			set(o) {
				Tl(t), (n = o);
			},
		});
	}
}
function Dl(e) {
	Un(e, (t) => {
		W(t) ? Ml(t) : kl(t);
	});
}
function Gu(e) {
	Un(e, (t) => {
		Ce(t);
	});
}
function Un(e, t) {
	t(e);
	for (let n = 0; n < e.length; n++) {
		const o = e[n];
		W(o) ? Un(o, t) : t(o);
	}
}
function _l(e) {
	c(e.stylesheets) || Dl(e.stylesheets);
	for (const n of vl) {
		let o = e[n];
		$(e, n, {
			enumerable: !0,
			configurable: !0,
			get() {
				return o;
			},
			set(r) {
				Wn || Hn(n), (o = r);
			},
		});
	}
	const t = j(e, "stylesheetTokens");
	$(e, "stylesheetTokens", {
		enumerable: !0,
		configurable: !0,
		get: t.get,
		set(n) {
			Hn("stylesheetTokens"), (Wn = !0), t.set.call(this, n), (Wn = !1);
		},
	});
}
function Ol(e) {
	$(e, "stylesheetTokens", {
		enumerable: !0,
		configurable: !0,
		get() {
			const { stylesheetToken: t } = this;
			return c(t) ? t : { hostAttribute: `${t}-host`, shadowAttribute: t };
		},
		set(t) {
			this.stylesheetToken = c(t) ? void 0 : t.shadowAttribute;
		},
	});
}
function Al(e) {
	Ol(e),
		Ht(() => {
			_l(e);
		});
}
function Vl(e) {
	let t = null;
	if (!c(e)) {
		const n = z(e);
		c(n) || (t = n.def.ctor);
	}
	return t;
}
function $l(e) {
	return Fo(e);
}
function Rl(e, t) {
	return [
		"div",
		{},
		["object", { object: e, config: { skip: !0 } }],
		[
			"div",
			{},
			["span", { style: "margin: 0 5px; color: red" }, "LWC:"],
			["object", { object: t }],
		],
	];
}
function Ll(e, t) {
	return F(t).length === 0
		? null
		: [
				"div",
				{},
				["object", { object: e, config: { skip: !0 } }],
				[
					"div",
					{},
					["span", { style: "margin: 0 5px; color: red" }, "Debug:"],
					["object", { object: t }],
				],
			];
}
const Il = {
	name: "LightningElementFormatter",
	header(e, t) {
		const n = z(e);
		return !c(n) && (c(t) || !t.skip)
			? e instanceof HTMLElement
				? Rl(e, n.component)
				: Ll(e, n.debugInfo)
			: null;
	},
	hasBody() {
		return !1;
	},
};
function Yu() {
	const e = K.devtoolsFormatters || [];
	T.call(e, Il), (K.devtoolsFormatters = e);
}
const zr =
		k(CSSStyleSheet.prototype.replaceSync) && W(document.adoptedStyleSheets),
	qr = new Map();
function Pl(e) {
	const t = document.createElement("style");
	return (t.type = "text/css"), (t.textContent = e), t;
}
function Fl(e, t) {
	const { element: n, usedElement: o } = t;
	return o ? n.cloneNode(!0) : ((t.usedElement = !0), n);
}
function xl(e) {
	const t = new CSSStyleSheet();
	return t.replaceSync(e), t;
}
function Bl(e, t, n) {
	const { adoptedStyleSheets: o } = t,
		{ stylesheet: r } = n;
	o.push(r);
}
function Qr(e, t, n) {
	const o = Fl(e, n);
	t.appendChild(o);
}
function Xr(e, t) {
	let n = qr.get(e);
	return (
		c(n) &&
			((n = {
				stylesheet: void 0,
				element: void 0,
				roots: void 0,
				global: !1,
				usedElement: !1,
			}),
			qr.set(e, n)),
		t && c(n.stylesheet)
			? (n.stylesheet = xl(e))
			: !t && c(n.element) && (n.element = Pl(e)),
		n
	);
}
function Wl(e) {
	const t = Xr(e, !1);
	t.global || ((t.global = !0), Qr(e, document.head, t));
}
function Hl(e, t) {
	const n = Xr(e, zr);
	let { roots: o } = n;
	if (c(o)) o = n.roots = new WeakSet();
	else if (o.has(t)) return;
	o.add(t), zr ? Bl(e, t, n) : Qr(e, t, n);
}
function Ul(e, t) {
	c(t) ? Wl(e) : Hl(e, t);
}
const Jr = new Map(),
	jn = new WeakSet();
let Gn = !1,
	Yn,
	Kn,
	zn,
	qn;
const Zr = new WeakMap(),
	es = new WeakMap(),
	ts = new WeakMap(),
	ns = new WeakMap(),
	jl = (e, t) => {
		const n = !c(e),
			o = !c(t);
		class r extends HTMLElement {
			constructor(i) {
				super();
				Gn
					? (Zr.set(this, Yn),
						es.set(this, Kn),
						ts.set(this, zn),
						ns.set(this, qn),
						i(this))
					: (n || o) && jn.add(this);
			}
			formAssociatedCallback() {
				const i = Zr.get(this);
				c(i) || i(this);
			}
			formResetCallback() {
				const i = ts.get(this);
				c(i) || i(this);
			}
			formDisabledCallback() {
				const i = es.get(this);
				c(i) || i(this);
			}
			formStateRestoreCallback() {
				const i = ns.get(this);
				c(i) || i(this);
			}
		}
		return (
			(r.formAssociated = !0),
			n &&
				(r.prototype.connectedCallback = function () {
					jn.has(this) || e(this);
				}),
			o &&
				(r.prototype.disconnectedCallback = function () {
					jn.has(this) || t(this);
				}),
			r
		);
	};
function os(e, t, n) {
	let o = Jr.get(e);
	if (c(o)) {
		if (!c(customElements.get(e)))
			throw new Error(
				`Unexpected tag name "${e}". This name is a registered custom element, preventing LWC to upgrade the element.`,
			);
		(o = jl(t, n)), customElements.define(e, o), Jr.set(e, o);
	}
	return o;
}
const Gl = (e, t, n, o, r, s, i, a) => {
	const u = os(e, n, o);
	(Yn = r), (Kn = s), (zn = i), (qn = a), (Gn = !0);
	try {
		return new u(t);
	} finally {
		(Gn = !1), (Yn = void 0), (Kn = void 0), (zn = void 0), (qn = void 0);
	}
};
function rs(e) {
	const t = (function (n) {
		function o(p, y) {
			if (!p) throw new Error(`Invariant Violation: ${y}`);
		}
		function r(p, y) {
			if (!p) throw new Error(`Assert Violation: ${y}`);
		}
		function s(p, y) {
			if (p) throw new Error(`Assert Violation: ${y}`);
		}
		function i(p) {
			throw new Error(p);
		}
		var a = Object.freeze({
			__proto__: null,
			fail: i,
			invariant: o,
			isFalse: s,
			isTrue: r,
		});
		function u(p) {
			return p === void 0;
		}
		function d(p) {
			return p === null;
		}
		class l extends CustomEvent {
			constructor(y, { setNewContext: M, setDisconnectedCallback: P }) {
				super(y, { bubbles: !0, composed: !0 });
				(this.setNewContext = M), (this.setDisconnectedCallback = P);
			}
		}
		function f(p, y, M) {
			Ne(p, new l(y, M));
		}
		function m(p, y, M) {
			ve(p, y, (P) => {
				P.stopImmediatePropagation();
				const { setNewContext: Ss, setDisconnectedCallback: Ts } = P;
				M({ setNewContext: Ss, setDisconnectedCallback: Ts });
			});
		}
		function E(p, y) {
			return p.cloneNode(y);
		}
		function w(p, y) {
			return u(y) ? document.createElement(p) : document.createElementNS(y, p);
		}
		function h(p) {
			return document.createTextNode(p);
		}
		function N(p) {
			return document.createComment(p);
		}
		function v(p) {
			const y = document.createElement("template");
			return (y.innerHTML = p), y.content.firstChild;
		}
		function S(p, y, M) {
			y.insertBefore(p, M);
		}
		function D(p, y) {
			y.removeChild(p);
		}
		function X(p) {
			return p.nextSibling;
		}
		function he(p) {
			return p.previousSibling;
		}
		function me(p, y) {
			return d(p.shadowRoot) ? p.attachShadow(y) : p.shadowRoot;
		}
		function _(p, y) {
			p.nodeValue = y;
		}
		function Mt(p, y) {
			return p[y];
		}
		function kt(p, y, M) {
			p[y] = M;
		}
		function Dt(p, y, M) {
			return u(M) ? p.getAttribute(y) : p.getAttributeNS(M, y);
		}
		function _t(p, y, M, P) {
			return u(P) ? p.setAttribute(y, M) : p.setAttributeNS(P, y, M);
		}
		function Ot(p, y, M) {
			u(M) ? p.removeAttribute(y) : p.removeAttributeNS(M, y);
		}
		function ve(p, y, M, P) {
			p.addEventListener(y, M, P);
		}
		function Qe(p, y, M, P) {
			p.removeEventListener(y, M, P);
		}
		function Ne(p, y) {
			return p.dispatchEvent(y);
		}
		function At(p) {
			return p.classList;
		}
		function Vt(p, y, M, P) {
			p.style.setProperty(y, M, P ? "important" : "");
		}
		function Xe(p) {
			return p.getBoundingClientRect();
		}
		function Xn(p, y) {
			return p.querySelector(y);
		}
		function ls(p, y) {
			return p.querySelectorAll(y);
		}
		function us(p, y) {
			return p.getElementsByTagName(y);
		}
		function ds(p, y) {
			return p.getElementsByClassName(y);
		}
		function fs(p) {
			return p.children;
		}
		function ps(p) {
			return p.childNodes;
		}
		function hs(p) {
			return p.firstChild;
		}
		function ms(p) {
			return p.firstElementChild;
		}
		function gs(p) {
			return p.lastChild;
		}
		function Es(p) {
			return p.lastElementChild;
		}
		function ys(p) {
			return p.isConnected;
		}
		function ws(p, y) {
			a.invariant(p instanceof HTMLElement, y);
		}
		function bs(p) {
			return p.ownerDocument;
		}
		function vs(p) {
			return p.tagName;
		}
		function Ns(p) {
			return Cs.call(p);
		}
		const Cs =
			typeof ElementInternals != "undefined"
				? HTMLElement.prototype.attachInternals
				: () => {
						throw new Error(
							"attachInternals API is not supported in this browser environment.",
						);
					};
		return (
			(n.addEventListener = ve),
			(n.assertInstanceOfHTMLElement = ws),
			(n.attachInternals = Ns),
			(n.attachShadow = me),
			(n.cloneNode = E),
			(n.createComment = N),
			(n.createElement = w),
			(n.createFragment = v),
			(n.createText = h),
			(n.dispatchEvent = Ne),
			(n.getAttribute = Dt),
			(n.getBoundingClientRect = Xe),
			(n.getChildNodes = ps),
			(n.getChildren = fs),
			(n.getClassList = At),
			(n.getElementsByClassName = ds),
			(n.getElementsByTagName = us),
			(n.getFirstChild = hs),
			(n.getFirstElementChild = ms),
			(n.getLastChild = gs),
			(n.getLastElementChild = Es),
			(n.getProperty = Mt),
			(n.getTagName = vs),
			(n.insert = S),
			(n.isConnected = ys),
			(n.nextSibling = X),
			(n.ownerDocument = bs),
			(n.previousSibling = he),
			(n.querySelector = Xn),
			(n.querySelectorAll = ls),
			(n.registerContextConsumer = f),
			(n.registerContextProvider = m),
			(n.remove = D),
			(n.removeAttribute = Ot),
			(n.removeEventListener = Qe),
			(n.setAttribute = _t),
			(n.setCSSStyleProperty = Vt),
			(n.setProperty = kt),
			(n.setText = _),
			n
		);
	})({});
	return Object.setPrototypeOf(t, e), t;
}
const Q = q(rs(null), {
	insertStylesheet: Ul,
	createCustomElement: Gl,
	defineCustomElement: os,
	isSyntheticShadowDefined: Te.call(Element.prototype, co),
});
function Yl(e, t) {
	if (e.shadowRoot) {
		const n = e.shadowRoot;
		for (; !g(n.firstChild); ) n.removeChild(n.firstChild);
	}
	if (t.renderMode === "light")
		for (; !g(e.firstChild); ) e.removeChild(e.firstChild);
}
function ss(e, t, n) {
	const o = Ye(e, t, Q, {
		mode: "open",
		owner: null,
		tagName: e.tagName.toLowerCase(),
		hydrated: !0,
	});
	for (const [r, s] of Object.entries(n)) e[r] = s;
	return o;
}
function Kl(e, t, n = {}) {
	if (!(e instanceof Element))
		throw new TypeError(
			`"hydrateComponent" expects a valid DOM element as the first parameter but instead received ${e}.`,
		);
	if (!k(t))
		throw new TypeError(
			`"hydrateComponent" expects a valid component constructor as the second parameter but instead received ${t}.`,
		);
	if (!nt(n) || g(n))
		throw new TypeError(
			`"hydrateComponent" expects an object as the third parameter but instead received ${n}.`,
		);
	if (z(e)) {
		console.warn(
			'"hydrateComponent" expects an element that is not hydrated.',
			e,
		);
		return;
	}
	try {
		const { defineCustomElement: o, getTagName: r } = Q;
		o(ke.call(r(e)));
		const s = ss(e, t, n);
		il(s);
	} catch (o) {
		console.error("Recovering from error while hydrating: ", o),
			Yl(e, t),
			ss(e, t, n),
			In(e);
	}
}
function zl(e) {
	return e.CustomElementConstructor;
}
function is(e) {
	const t = Q.getChildNodes(e);
	for (let n = t.length - 1; n >= 0; n--) Q.remove(t[n], e);
}
function ql(e) {
	var t;
	const n = Ca(e),
		{ observedAttributes: o } = n,
		{ attributeChangedCallback: r } = n.prototype;
	return (
		(t = class extends HTMLElement {
			constructor() {
				super();
				g(this.shadowRoot) || is(this.shadowRoot);
				const { shadowMode: s, renderMode: i } = jc(e, Q);
				!(i === 1 && s === 0) && this.childNodes.length > 0 && is(this),
					Ye(this, e, Q, { mode: "open", owner: null, tagName: this.tagName });
			}
			connectedCallback() {
				In(this);
			}
			disconnectedCallback() {
				Pn(this);
			}
			attributeChangedCallback(s, i, a) {
				r.call(this, s, i, a);
			}
		}),
		(t.observedAttributes = o),
		t
	);
}
const as = Node,
	Tt = new WeakMap(),
	Qn = new WeakMap();
function qe(e, t) {
	const n = t.get(e);
	return c(n) || n(e), e;
}
{
	const {
		appendChild: e,
		insertBefore: t,
		removeChild: n,
		replaceChild: o,
	} = as.prototype;
	q(as.prototype, {
		appendChild(r) {
			const s = e.call(this, r);
			return qe(s, Tt);
		},
		insertBefore(r, s) {
			const i = t.call(this, r, s);
			return qe(i, Tt);
		},
		removeChild(r) {
			const s = n.call(this, r);
			return qe(s, Qn);
		},
		replaceChild(r, s) {
			const i = o.call(this, r, s);
			return qe(i, Qn), qe(r, Tt), i;
		},
	});
}
function Ql(e, t) {
	if (!nt(t) || g(t))
		throw new TypeError(
			`"createElement" function expects an object as second parameter but received "${ee(t)}".`,
		);
	const n = t.is;
	if (!k(n))
		throw new TypeError(
			'"createElement" function expects an "is" option with a valid component constructor.',
		);
	const { createCustomElement: o } = Q,
		r = ke.call(e),
		s = (E) => {
			Ye(E, n, Q, {
				tagName: r,
				mode: t.mode !== "closed" ? "open" : "closed",
				owner: null,
			}),
				Tt.set(E, In),
				Qn.set(E, Pn);
		};
	let i, a, u, d, l, f;
	return o(r, s, i, a, u, d, l, f);
}
const Xl = Node;
function Jl(e) {
	if (G(e instanceof Xl) || e instanceof ShadowRoot) return !1;
	const t = e.getRootNode();
	return t instanceof ShadowRoot && G(Te.call(Se(t), "synthetic"))
		? !0
		: Q.isSyntheticShadowDefined && !c(e[Ft]);
}
const cs = new Map();
function Zl(e) {
	if (e === R)
		throw new TypeError(
			"Invalid Constructor. LightningElement base class can't be claimed as a custom element.",
		);
	let t = cs.get(e);
	return c(t) && ((t = ql(e)), cs.set(e, t)), t;
}
$(R, "CustomElementConstructor", {
	get() {
		return Zl(this);
	},
}),
	Ce(R),
	Je(R.prototype);
function eu(e, t, n, o) {
	e.addEventListener(t, n, o);
}
function tu(e) {
	return Fi(e, nu);
}
function nu(e, t, n) {
	eu(e, t, (o) => {
		o.stopImmediatePropagation();
		const { setNewContext: r, setDisconnectedCallback: s } = o;
		n({ setNewContext: r, setDisconnectedCallback: s });
	});
}
export {
	R as LightningElement,
	Nc as __unstable__ProfilerControl,
	ti as __unstable__ReportingControl,
	Xi as api,
	zl as buildCustomElementConstructor,
	tu as createContextProvider,
	Ql as createElement,
	Al as freezeTemplate,
	Vl as getComponentConstructor,
	Ta as getComponentDef,
	Kl as hydrateComponent,
	ut as isComponentConstructor,
	Jl as isNodeFromTemplate,
	Cc as parseFragment,
	Sc as parseSVGFragment,
	$l as readonly,
	Dc as registerComponent,
	oa as registerDecorators,
	ca as registerTemplate,
	Q as renderer,
	rs as rendererFactory,
	la as sanitizeAttribute,
	Zs as setFeatureFlag,
	ei as setFeatureFlagForTest,
	bl as setHooks,
	wa as swapComponent,
	ba as swapStyle,
	ya as swapTemplate,
	Zi as track,
	Oi as unwrap,
	ta as wire,
};
