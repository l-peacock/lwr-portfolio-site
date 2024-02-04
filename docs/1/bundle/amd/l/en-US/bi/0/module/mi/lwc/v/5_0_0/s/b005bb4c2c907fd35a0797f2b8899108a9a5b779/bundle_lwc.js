LWR.define("lwc/v/5_0_0", ["exports"], function (S) {
	"use strict";
	function us(e, t) {
		if (!e) throw new Error(`Invariant Violation: ${t}`);
	}
	function ds(e, t) {
		if (!e) throw new Error(`Assert Violation: ${t}`);
	}
	function fs(e, t) {
		if (e) throw new Error(`Assert Violation: ${t}`);
	}
	function ps(e) {
		throw new Error(e);
	}
	var kt = Object.freeze({
		__proto__: null,
		fail: ps,
		invariant: us,
		isFalse: fs,
		isTrue: ds,
	});
	const {
			assign: Q,
			create: C,
			defineProperties: re,
			defineProperty: R,
			freeze: Ne,
			getOwnPropertyDescriptor: G,
			getOwnPropertyDescriptors: ru,
			getOwnPropertyNames: Jn,
			getPrototypeOf: Ce,
			hasOwnProperty: Se,
			isFrozen: hs,
			keys: F,
			seal: Xe,
			setPrototypeOf: Zn,
		} = Object,
		{ isArray: H } = Array,
		{
			concat: su,
			copyWithin: ms,
			every: gs,
			fill: Es,
			filter: Dt,
			find: iu,
			findIndex: au,
			includes: ys,
			indexOf: eo,
			join: Te,
			map: to,
			pop: no,
			push: M,
			reduce: cu,
			reverse: ws,
			shift: oo,
			slice: ro,
			some: lu,
			sort: bs,
			splice: _t,
			unshift: Je,
			forEach: Ze,
		} = Array.prototype;
	function vs(e, t) {
		return gs.call(e, t);
	}
	const { fromCharCode: so } = String,
		{
			charCodeAt: et,
			replace: Ot,
			split: Ns,
			slice: io,
			toLowerCase: Me,
		} = String.prototype;
	function c(e) {
		return e === void 0;
	}
	function g(e) {
		return e === null;
	}
	function se(e) {
		return e === !0;
	}
	function Y(e) {
		return e === !1;
	}
	function Cs(e) {
		return typeof e == "boolean";
	}
	function D(e) {
		return typeof e == "function";
	}
	function tt(e) {
		return typeof e == "object";
	}
	function ie(e) {
		return typeof e == "string";
	}
	function uu(e) {
		return typeof e == "number";
	}
	function V() {}
	const Ss = {}.toString;
	function te(e) {
		return e && e.toString
			? H(e)
				? Te.call(to.call(e, te), ",")
				: e.toString()
			: typeof e == "object"
				? Ss.call(e)
				: e + "";
	}
	function K(e, t) {
		do {
			const n = G(e, t);
			if (!c(n)) return n;
			e = Ce(e);
		} while (e !== null);
	}
	const Ts = 58;
	function At(e, t) {
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
	const Ms = [
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
		{ AriaAttrNameToPropNameMap: du, AriaPropNameToAttrNameMap: nt } = (() => {
			const e = C(null),
				t = C(null);
			return (
				Ze.call(Ms, (n) => {
					const o = Me.call(Ot.call(n, /^aria/, () => "aria-"));
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
		z = typeof globalThis == "object" ? globalThis : window,
		Vt = "$shadowResolver$",
		ks = "$shadowStaticNode$",
		co = "$shadowToken$",
		Ds = "$$lwc-synthetic-mode",
		lo = "$scoped$",
		uo = "$nativeGetElementById$",
		fo = "$nativeQuerySelectorAll$",
		_s = "http://www.w3.org/XML/1998/namespace",
		Os = "http://www.w3.org/2000/svg",
		As = "http://www.w3.org/1999/xlink",
		Vs = /-([a-z])/g,
		$s = new Map([
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
		const t = nt[e];
		if (!c(t)) return t;
		const n = $s.get(e);
		if (!c(n)) return n;
		const o = po.get(e);
		if (!c(o)) return o;
		let r = "";
		for (let s = 0, i = e.length; s < i; s++) {
			const a = et.call(e, s);
			a >= 65 && a <= 90 ? (r += "-" + so(a + 32)) : (r += so(a));
		}
		return po.set(e, r), r;
	}
	const mo = new Map();
	function Rs(e) {
		let t = mo.get(e);
		return (
			c(t) && ((t = Ot.call(e, Vs, (n) => n[1].toUpperCase())), mo.set(e, t)), t
		);
	}
	const $t = "5.0.0",
		Ls = /\/\*LWC compiler v([\d.]+)\*\/\s*}/,
		Is = {
			PLACEHOLDER_TEST_FLAG: null,
			ENABLE_FORCE_NATIVE_SHADOW_MODE_FOR_TEST: null,
			ENABLE_MIXED_SHADOW_MODE: null,
			ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE: null,
			ENABLE_WIRE_SYNC_EMIT: null,
			DISABLE_LIGHT_DOM_UNSCOPED_CSS: null,
			ENABLE_FROZEN_TEMPLATE: null,
			ENABLE_LEGACY_SCOPE_TOKENS: null,
		};
	z.lwcRuntimeFlags ||
		Object.defineProperty(z, "lwcRuntimeFlags", { value: C(null) });
	const go = z.lwcRuntimeFlags;
	function Ps(e, t) {
		if (!Cs(t)) {
			const n = `Failed to set the value "${t}" for the runtime feature flag "${e}". Runtime feature flags can only be set to a boolean value.`;
			console.error(n);
			return;
		}
		if (c(Is[e])) {
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
			R(go, e, { value: t });
		}
	}
	function Fs(e, t) {}
	const Rt = [];
	let Lt = V,
		ke = !1;
	const Bs = {
		attachDispatcher(e) {
			(ke = !0), (Lt = e);
			for (const t of Rt)
				try {
					t();
				} catch (n) {
					console.error("Could not invoke callback", n);
				}
			Rt.length = 0;
		},
		detachDispatcher() {
			(ke = !1), (Lt = V);
		},
	};
	function It(e) {
		ke ? e() : Rt.push(e);
	}
	function De(e, t) {
		ke && Lt(e, t);
	}
	function Ws() {
		return ke;
	}
	function ae(e) {
		return `<${Me.call(e.tagName)}>`;
	}
	function xs(e) {
		const t = [];
		let n = "";
		for (; !g(e.owner); ) M.call(t, n + ae(e)), (e = e.owner), (n += "	");
		return Te.call(
			t,
			`
`,
		);
	}
	function Hs(e) {
		const t = [];
		let n = e;
		for (; !g(n); ) M.call(t, ae(n)), (n = n.owner);
		return t.reverse().join(`
	`);
	}
	function Eo(e, t) {
		if (!hs(t) && c(t.wcStack)) {
			const n = Hs(e);
			R(t, "wcStack", {
				get() {
					return n;
				},
			});
		}
	}
	const yo = new Set();
	function Pt(e, t, n, o) {
		let r = `[LWC ${e}]: ${t}`;
		if (
			(c(n) ||
				(r = `${r}
${xs(n)}`),
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
	function _(e, t) {
		Pt("error", e, t, !1);
	}
	function Ft(e, t) {
		Pt("warn", e, t, !1);
	}
	function fu(e, t) {
		Pt("warn", e, t, !0);
	}
	const Bt = new WeakMap();
	function Us(e) {
		let t = Bt.get(e);
		if (c(t)) {
			const n = C(null);
			(t = n), Bt.set(e, n);
		}
		return t;
	}
	let _e = null;
	function wo(e, t) {
		const n = Bt.get(e);
		if (!c(n)) {
			const o = n[t];
			if (!c(o)) for (let r = 0, s = o.length; r < s; r += 1) o[r].notify();
		}
	}
	function bo(e, t) {
		if (_e === null) return;
		const n = _e,
			o = Us(e);
		let r = o[t];
		if (c(r)) (r = []), (o[t] = r);
		else if (r[0] === n) return;
		eo.call(r, n) === -1 && n.link(r);
	}
	class js {
		constructor(t) {
			(this.listeners = []), (this.callback = t);
		}
		observe(t) {
			const n = _e;
			_e = this;
			let o;
			try {
				t();
			} catch (r) {
				o = Object(r);
			} finally {
				if (((_e = n), o !== void 0)) throw o;
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
						_t.call(r, s, 1);
					}
				}
				t.length = 0;
			}
		}
		notify() {
			this.callback.call(void 0, this);
		}
		link(t) {
			M.call(t, this), M.call(this.listeners, t);
		}
	}
	function vo(e, t) {
		wo(e.component, t);
	}
	function Oe(e, t) {
		bo(e.component, t);
	}
	function No(e) {
		return new js(e);
	}
	let ot = [];
	const Gs = 32,
		B = Xe(C(null)),
		U = Xe([]);
	function Ys() {
		const e = ot;
		ot = [];
		for (let t = 0, n = e.length; t < n; t += 1) e[t]();
	}
	function Co(e) {
		ot.length === 0 && Promise.resolve().then(Ys), M.call(ot, e);
	}
	function Ks() {
		function e() {
			return Math.floor((1 + Math.random()) * 65536)
				.toString(16)
				.substring(1);
		}
		return (
			e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
		);
	}
	const zs = /;(?![^(]*\))/g,
		qs = /:(.+)/;
	function Qs(e) {
		const t = {},
			n = e.split(zs);
		for (const o of n)
			if (o) {
				const [r, s] = o.split(qs);
				r !== void 0 && s !== void 0 && (t[r.trim()] = s.trim());
			}
		return t;
	}
	function Xs(e, t) {
		const n = {};
		for (const o of F(e)) o !== t && (n[o] = e[o]);
		return n;
	}
	function Wt(e) {
		const t = [];
		for (const n of e) H(n) ? t.push(...Wt(n)) : t.push(n);
		return t;
	}
	function $() {
		throw new ReferenceError();
	}
	function xt(e) {
		const t = e();
		return (t == null ? void 0 : t.__esModule) ? t.default : t;
	}
	function Ht(e) {
		return D(e) && Se.call(e, "__circular__");
	}
	var Ut, jt;
	const Js =
			(Ut = z.__lwc_instrument_cmp_def) !== null && Ut !== void 0 ? Ut : V,
		Zs =
			(jt = z.__lwc_instrument_cmp_instance) !== null && jt !== void 0 ? jt : V;
	function So(e) {
		for (const t of F(nt)) {
			const n = nt[t];
			c(G(e, t)) &&
				R(e, t, {
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
		ei = [
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
		Ae = C(null);
	Ze.call(F(nt), (e) => {
		const t = K(Mo, e);
		c(t) || (Ae[e] = t);
	}),
		Ze.call(ei, (e) => {
			const t = K(Mo, e);
			c(t) || (Ae[e] = t);
		});
	function ce(e) {
		return Q({ configurable: !0, enumerable: !0, writable: !0 }, e);
	}
	function J(e) {
		return Q({ configurable: !0, enumerable: !0 }, e);
	}
	let Ve = !1;
	function pu() {
		$(), (Ve = !0);
	}
	function hu() {
		$(), (Ve = !1);
	}
	function le(e, t) {
		return Ft(
			`The \`${e}\` ${t} is available only on elements that use the \`lwc:dom="manual"\` directive.`,
		);
	}
	function mu(e, t) {
		$();
		const n = K(e, "outerHTML"),
			o = {
				outerHTML: J({
					get() {
						return n.get.call(this);
					},
					set(r) {
						return (
							_("Invalid attempt to set outerHTML on Element."),
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
				u = K(e, "nodeValue"),
				d = K(e, "innerHTML"),
				l = K(e, "textContent");
			Q(o, {
				appendChild: ce({
					value(f) {
						return le("appendChild", "method"), r.call(this, f);
					},
				}),
				insertBefore: ce({
					value(f, m) {
						return Ve || le("insertBefore", "method"), s.call(this, f, m);
					},
				}),
				removeChild: ce({
					value(f) {
						return Ve || le("removeChild", "method"), i.call(this, f);
					},
				}),
				replaceChild: ce({
					value(f, m) {
						return le("replaceChild", "method"), a.call(this, f, m);
					},
				}),
				nodeValue: J({
					get() {
						return u.get.call(this);
					},
					set(f) {
						Ve || le("nodeValue", "property"), u.set.call(this, f);
					},
				}),
				textContent: J({
					get() {
						return l.get.call(this);
					},
					set(f) {
						le("textContent", "property"), l.set.call(this, f);
					},
				}),
				innerHTML: J({
					get() {
						return d.get.call(this);
					},
					set(f) {
						return le("innerHTML", "property"), d.set.call(this, f);
					},
				}),
			});
		}
		re(e, o);
	}
	function ti(e) {
		$();
		const t = e.addEventListener,
			n = K(e, "innerHTML"),
			o = K(e, "textContent");
		return {
			innerHTML: J({
				get() {
					return n.get.call(this);
				},
				set(r) {
					return (
						_("Invalid attempt to set innerHTML on ShadowRoot."),
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
						_("Invalid attempt to set textContent on ShadowRoot."),
						o.set.call(this, r)
					);
				},
			}),
			addEventListener: ce({
				value(r, s, i) {
					return (
						c(i) ||
							_(
								"The `addEventListener` method on ShadowRoot does not support any options.",
								q(this),
							),
						t.apply(this, arguments)
					);
				},
			}),
		};
	}
	function ni(e) {
		$();
		const t = e.addEventListener,
			n = K(e, "innerHTML"),
			o = K(e, "outerHTML"),
			r = K(e, "textContent");
		return {
			innerHTML: J({
				get() {
					return n.get.call(this);
				},
				set(s) {
					return (
						_("Invalid attempt to set innerHTML on HTMLElement."),
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
						_("Invalid attempt to set outerHTML on HTMLElement."),
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
						_("Invalid attempt to set textContent on HTMLElement."),
						r.set.call(this, s)
					);
				},
			}),
			addEventListener: ce({
				value(s, i, a) {
					return (
						c(a) ||
							_(
								"The `addEventListener` method in `LightningElement` does not support any options.",
								q(this),
							),
						t.apply(this, arguments)
					);
				},
			}),
		};
	}
	function oi(e) {
		$();
		const t = e.dispatchEvent;
		return {
			dispatchEvent: ce({
				value(n) {
					const o = b(this);
					if (!g(n) && tt(n)) {
						const { type: r } = n;
						/^[a-z][a-z0-9_]*$/.test(r) ||
							_(
								`Invalid event type "${r}" dispatched in element ${ae(o)}. Event name must start with a lowercase letter and followed only lowercase letters, numbers, and underscores`,
								o,
							);
					}
					return t.apply(this, arguments);
				},
			}),
		};
	}
	function gu(e) {
		re(e, ti(e));
	}
	function Eu(e) {
		const t = ni(e),
			n = Ce(e);
		Zn(e, C(n, t));
	}
	function yu(e) {
		re(e, oi(e));
	}
	function $e(e, t, n) {
		const { cmpFields: o } = e;
		n !== o[t] && ((o[t] = n), vo(e, t));
	}
	const { isArray: rt } = Array,
		{
			prototype: ri,
			getPrototypeOf: st,
			create: ko,
			defineProperty: it,
			isExtensible: at,
			getOwnPropertyDescriptor: Do,
			getOwnPropertyNames: Gt,
			getOwnPropertySymbols: Yt,
			preventExtensions: _o,
			hasOwnProperty: Re,
		} = Object,
		{ push: Kt, concat: Oo } = Array.prototype,
		si = {}.toString;
	function wu(e) {
		return e && e.toString
			? e.toString()
			: typeof e == "object"
				? si.call(e)
				: e + "";
	}
	function I(e) {
		return e === void 0;
	}
	function zt(e) {
		return typeof e == "function";
	}
	const Ao = new WeakMap();
	function Vo(e, t) {
		Ao.set(e, t);
	}
	const j = (e) => Ao.get(e) || e;
	class $o {
		constructor(t, n) {
			(this.originalTarget = n), (this.membrane = t);
		}
		wrapDescriptor(t) {
			if (Re.call(t, "value")) t.value = this.wrapValue(t.value);
			else {
				const { set: n, get: o } = t;
				I(o) || (t.get = this.wrapGetter(o)),
					I(n) || (t.set = this.wrapSetter(n));
			}
			return t;
		}
		copyDescriptorIntoShadowTarget(t, n) {
			const { originalTarget: o } = this,
				r = Do(o, n);
			if (!I(r)) {
				const s = this.wrapDescriptor(r);
				it(t, n, s);
			}
		}
		lockShadowTarget(t) {
			const { originalTarget: n } = this;
			Oo.call(Gt(n), Yt(n)).forEach((s) => {
				this.copyDescriptorIntoShadowTarget(t, s);
			});
			const {
				membrane: { tagPropertyKey: r },
			} = this;
			!I(r) && !Re.call(t, r) && it(t, r, ko(null)), _o(t);
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
				r = I(o) || Re.call(n, o) ? [] : [o];
			return Kt.apply(r, Gt(n)), Kt.apply(r, Yt(n)), r;
		}
		isExtensible(t) {
			const { originalTarget: n } = this;
			return at(t) ? (at(n) ? !0 : (this.lockShadowTarget(t), !1)) : !1;
		}
		getPrototypeOf(t) {
			const { originalTarget: n } = this;
			return st(n);
		}
		getOwnPropertyDescriptor(t, n) {
			const {
				originalTarget: o,
				membrane: { valueObserved: r, tagPropertyKey: s },
			} = this;
			r(o, n);
			let i = Do(o, n);
			return I(i)
				? n !== s
					? void 0
					: ((i = {
							value: void 0,
							writable: !1,
							configurable: !1,
							enumerable: !1,
						}),
						it(t, s, i),
						i)
				: (i.configurable === !1 && this.copyDescriptorIntoShadowTarget(t, n),
					this.wrapDescriptor(i));
		}
	}
	const qt = new WeakMap(),
		Qt = new WeakMap(),
		Xt = new WeakMap(),
		Jt = new WeakMap();
	class ii extends $o {
		wrapValue(t) {
			return this.membrane.getProxy(t);
		}
		wrapGetter(t) {
			const n = qt.get(t);
			if (!I(n)) return n;
			const o = this,
				r = function () {
					return o.wrapValue(t.call(j(this)));
				};
			return qt.set(t, r), Xt.set(r, t), r;
		}
		wrapSetter(t) {
			const n = Qt.get(t);
			if (!I(n)) return n;
			const o = function (r) {
				t.call(j(this), j(r));
			};
			return Qt.set(t, o), Jt.set(o, t), o;
		}
		unwrapDescriptor(t) {
			if (Re.call(t, "value")) t.value = j(t.value);
			else {
				const { set: n, get: o } = t;
				I(o) || (t.get = this.unwrapGetter(o)),
					I(n) || (t.set = this.unwrapSetter(n));
			}
			return t;
		}
		unwrapGetter(t) {
			const n = Xt.get(t);
			if (!I(n)) return n;
			const o = this,
				r = function () {
					return j(t.call(o.wrapValue(this)));
				};
			return qt.set(r, t), Xt.set(t, r), r;
		}
		unwrapSetter(t) {
			const n = Jt.get(t);
			if (!I(n)) return n;
			const o = this,
				r = function (s) {
					t.call(o.wrapValue(this), o.wrapValue(s));
				};
			return Qt.set(r, t), Jt.set(t, r), r;
		}
		set(t, n, o) {
			const {
				originalTarget: r,
				membrane: { valueMutated: s },
			} = this;
			return (
				r[n] !== o ? ((r[n] = o), s(r, n)) : n === "length" && rt(r) && s(r, n),
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
			if (at(t)) {
				const { originalTarget: n } = this;
				if ((_o(n), at(n))) return !1;
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
				(n === i && !Re.call(r, n)) ||
					(it(r, n, this.unwrapDescriptor(o)),
					o.configurable === !1 && this.copyDescriptorIntoShadowTarget(t, n),
					s(r, n)),
				!0
			);
		}
	}
	const Ro = new WeakMap(),
		Lo = new WeakMap();
	class ai extends $o {
		wrapValue(t) {
			return this.membrane.getReadOnlyProxy(t);
		}
		wrapGetter(t) {
			const n = Ro.get(t);
			if (!I(n)) return n;
			const o = this,
				r = function () {
					return o.wrapValue(t.call(j(this)));
				};
			return Ro.set(t, r), r;
		}
		wrapSetter(t) {
			const n = Lo.get(t);
			if (!I(n)) return n;
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
	function Zt(e) {
		if (rt(e))
			return e.map((o) => {
				const r = j(o);
				return r !== o ? Zt(r) : o;
			});
		const t = ko(st(e)),
			n = Gt(e);
		return Oo.call(n, Yt(e)).reduce((o, r) => {
			const s = e[r],
				i = j(s);
			return i !== s ? (o[r] = Zt(i)) : (o[r] = s), o;
		}, t);
	}
	const ci = {
		header: (e) => {
			const t = j(e);
			if (!t || t === e) return null;
			const n = Zt(e);
			return ["object", { object: n }];
		},
		hasBody: () => !1,
		body: () => null,
	};
	function li() {
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
	function bu() {
		throw new ReferenceError();
	}
	function ui(e) {
		if (e === null || typeof e != "object") return !1;
		if (rt(e)) return !0;
		const t = st(e);
		return t === ri || t === null || st(t) === null;
	}
	const di = (e, t) => {},
		fi = (e, t) => {};
	function Io(e) {
		return rt(e) ? [] : {};
	}
	class pi {
		constructor(t = {}) {
			(this.readOnlyObjectGraph = new WeakMap()),
				(this.reactiveObjectGraph = new WeakMap());
			const {
				valueMutated: n,
				valueObserved: o,
				valueIsObservable: r,
				tagPropertyKey: s,
			} = t;
			(this.valueMutated = zt(n) ? n : fi),
				(this.valueObserved = zt(o) ? o : di),
				(this.valueIsObservable = zt(r) ? r : ui),
				(this.tagPropertyKey = s);
		}
		getProxy(t) {
			const n = j(t);
			return this.valueIsObservable(n)
				? this.readOnlyObjectGraph.get(n) === t
					? t
					: this.getReactiveHandler(n)
				: n;
		}
		getReadOnlyProxy(t) {
			return (
				(t = j(t)), this.valueIsObservable(t) ? this.getReadOnlyHandler(t) : t
			);
		}
		unwrapProxy(t) {
			return j(t);
		}
		getReactiveHandler(t) {
			let n = this.reactiveObjectGraph.get(t);
			if (I(n)) {
				const o = new ii(this, t);
				(n = new Proxy(Io(t), o)), Vo(n, t), this.reactiveObjectGraph.set(t, n);
			}
			return n;
		}
		getReadOnlyHandler(t) {
			let n = this.readOnlyObjectGraph.get(t);
			if (I(n)) {
				const o = new ai(this, t);
				(n = new Proxy(Io(t), o)), Vo(n, t), this.readOnlyObjectGraph.set(t, n);
			}
			return n;
		}
	}
	const Po = Symbol.for("@@lockerLiveValue"),
		en = new pi({ valueObserved: bo, valueMutated: wo, tagPropertyKey: Po });
	function hi(e) {
		return en.unwrapProxy(e);
	}
	function Fo(e) {
		return en.getReadOnlyProxy(e);
	}
	function Bo(e) {
		return en.getProxy(e);
	}
	function mi(e) {
		e[Po] = void 0;
	}
	function gi(e, t) {
		const { get: n, set: o, enumerable: r, configurable: s } = t;
		if (!D(n))
			throw new TypeError(
				`Detected invalid public property descriptor for HTMLElement.prototype.${e} definition. Missing the standard getter.`,
			);
		if (!D(o))
			throw new TypeError(
				`Detected invalid public property descriptor for HTMLElement.prototype.${e} definition. Missing the standard setter.`,
			);
		return {
			enumerable: r,
			configurable: s,
			get() {
				const i = b(this);
				if (!Dn(i)) return Oe(i, e), n.call(i.elm);
			},
			set(i) {
				const a = b(this);
				return $e(a, e, i), o.call(a.elm, i);
			},
		};
	}
	const Wo = new WeakMap(),
		L = function () {
			if (g(ne)) throw new TypeError("Illegal constructor");
			Zs(this, ne);
			const e = ne,
				{ def: t, elm: n } = e,
				{ bridge: o } = t,
				r = this;
			if ((Zn(n, o.prototype), (e.component = this), arguments.length === 1)) {
				const { callHook: s, setHook: i, getHook: a } = arguments[0];
				(e.callHook = s), (e.setHook = i), (e.getHook = a);
			}
			return (
				mi(this),
				Vn(r, e),
				Vn(n, e),
				e.renderMode === 1 ? (e.renderRoot = Ei(e)) : (e.renderRoot = n),
				this
			);
		};
	function Ei(e) {
		const {
				elm: t,
				mode: n,
				shadowMode: o,
				def: { ctor: r },
				renderer: { attachShadow: s },
			} = e,
			i = s(t, {
				[Ds]: o === 1,
				delegatesFocus: Boolean(r.delegatesFocus),
				mode: n,
			});
		return (e.shadowRoot = i), Vn(i, e), i;
	}
	function vu(e, t) {
		Dn(e) &&
			_(
				`this.${t} should not be called during the construction of the custom element for ${ae(e)} because the element is not yet in the DOM or has no children yet.`,
			);
	}
	const xo = new Set([
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
		if (ie(e) && xo.has(e) && !t)
			throw new DOMException(
				`Failed to execute '${e}' on 'ElementInternals': The target element is not a form-associated custom element.`,
			);
	}
	const yi = new Set(["shadowRoot", "role", ...xo]);
	function Uo(e) {
		let t = !1;
		return ie(e) && (t = yi.has(e) || /^aria/.test(e)), t;
	}
	function wi(e, t) {
		return new Proxy(e, {
			set(o, r, s) {
				return Uo(r) ? (Ho(r, t), Reflect.set(o, r, s)) : !1;
			},
			get(o, r) {
				if (
					Se.call(Object.prototype, r) ||
					Symbol.for("Symbol.toStringTag") === r ||
					Uo(r)
				) {
					Ho(r, t);
					const s = Reflect.get(o, r);
					return D(s) ? s.bind(o) : s;
				}
			},
		});
	}
	L.prototype = {
		constructor: L,
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
			return wi(r, Boolean(n));
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
			if (gt) return;
			const { refVNodes: t, cmpTemplate: n } = e;
			if (g(t)) return;
			let o = Wo.get(t);
			if (c(o)) {
				o = C(null);
				for (const r of F(t)) o[r] = t[r].elm;
				Ne(o), Wo.set(t, o);
			}
			return o;
		},
		set refs(e) {
			R(this, "refs", {
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
		bi = [
			"getElementsByClassName",
			"getElementsByTagName",
			"querySelector",
			"querySelectorAll",
		];
	for (const e of bi)
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
	re(L.prototype, jo);
	const tn = C(null);
	for (const e in Ae) tn[e] = gi(e, Ae[e]);
	re(L.prototype, tn),
		So(L.prototype),
		R(L, "CustomElementConstructor", {
			get() {
				throw new ReferenceError(
					"The current runtime does not support CustomElementConstructor.",
				);
			},
			configurable: !0,
		});
	function vi(e) {
		return {
			get() {
				const t = b(this);
				return Oe(t, e), t.cmpFields[e];
			},
			set(t) {
				const n = b(this);
				$e(n, e, t);
			},
			enumerable: !0,
			configurable: !0,
		};
	}
	const nn = new Map();
	function Ni(e, t) {
		let n = nn.get(e);
		if (!c(n)) throw new Error("Adapter already has a context provider.");
		(n = Ks()), nn.set(e, n);
		const o = new WeakSet();
		return (r, s) => {
			if (o.has(r)) throw new Error(`Adapter was already installed on ${r}.`);
			o.add(r);
			const { consumerConnectedCallback: i, consumerDisconnectedCallback: a } =
				s;
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
	function Ci(e, t, n) {
		const { adapter: o } = t,
			r = nn.get(o);
		if (c(r)) return;
		const {
			elm: s,
			context: { wiredConnecting: i, wiredDisconnecting: a },
			renderer: { registerContextConsumer: u },
		} = e;
		M.call(i, () => {
			u(s, r, {
				setNewContext(d) {
					n(d);
				},
				setDisconnectedCallback(d) {
					M.call(a, d);
				},
			});
		});
	}
	const Si = "$$DeprecatedWiredElementHostKey$$",
		Ti = "$$DeprecatedWiredParamsMetaKey$$",
		Nu = "@wire",
		on = new Map();
	function Mi(e, t) {
		return (n) => {
			$e(e, t, n);
		};
	}
	function ki(e, t) {
		return (n) => {
			Z(
				e,
				e.owner,
				V,
				() => {
					t.call(e.component, n);
				},
				V,
			);
		};
	}
	function Di(e, t, n) {
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
	function _i(e, t, n) {
		const { method: o, adapter: r, configCallback: s, dynamic: i } = n;
		let a;
		const u = c(o) ? Mi(e, t) : ki(e, o),
			d = (h) => {
				u(h);
			};
		let l, f;
		R(d, Si, { value: e.elm }),
			R(d, Ti, { value: i }),
			Z(
				e,
				e,
				V,
				() => {
					f = new r(d, { tagName: e.tagName });
				},
				V,
			);
		const m = (h) => {
				Z(
					e,
					e,
					V,
					() => {
						f.update(h, l);
					},
					V,
				);
			},
			{ computeConfigAndUpdate: E, ro: w } = Di(e.component, s, m);
		return (
			c(r.contextSchema) ||
				Ci(e, n, (h) => {
					l !== h && ((l = h), e.state === 1 && E());
				}),
			{
				connector: f,
				computeConfigAndUpdate: E,
				resetConfigWatcher: () => w.reset(),
			}
		);
	}
	function Oi(e, t, n, o) {
		t.adapter && (t = t.adapter);
		const r = e.value,
			s = { adapter: t, method: r, configCallback: n, dynamic: o };
		on.set(e, s);
	}
	function Ai(e, t, n, o) {
		t.adapter && (t = t.adapter);
		const r = { adapter: t, configCallback: n, dynamic: o };
		on.set(e, r);
	}
	function Vi(e) {
		const {
				context: t,
				def: { wire: n },
			} = e,
			o = (t.wiredConnecting = []),
			r = (t.wiredDisconnecting = []);
		for (const s in n) {
			const i = n[s],
				a = on.get(i);
			if (!c(a)) {
				const {
						connector: u,
						computeConfigAndUpdate: d,
						resetConfigWatcher: l,
					} = _i(e, s, a),
					f = a.dynamic.length > 0;
				M.call(o, () => {
					if ((u.connect(), f)) {
						Promise.resolve().then(d);
						return;
					}
					d();
				}),
					M.call(r, () => {
						u.disconnect(), l();
					});
			}
		}
	}
	function $i(e) {
		const { wiredConnecting: t } = e.context;
		for (let n = 0, o = t.length; n < o; n += 1) t[n]();
	}
	function Ri(e) {
		const { wiredDisconnecting: t } = e.context;
		Z(
			e,
			e,
			V,
			() => {
				for (let n = 0, o = t.length; n < o; n += 1) t[n]();
			},
			V,
		);
	}
	function Li() {
		throw new Error();
	}
	function Ii(e) {
		return {
			get() {
				const t = b(this);
				if (!Dn(t)) return Oe(t, e), t.cmpProps[e];
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
			kt.invariant(
				D(n),
				`Invalid public accessor ${te(e)} decorated with @api. The property is missing a getter.`,
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
	function Pi(e) {
		if (arguments.length === 1) return Bo(e);
		throw new Error();
	}
	function Fi(e) {
		return {
			get() {
				const t = b(this);
				return Oe(t, e), t.cmpFields[e];
			},
			set(t) {
				const n = b(this),
					o = Bo(t);
				$e(n, e, o);
			},
			enumerable: !0,
			configurable: !0,
		};
	}
	function Bi(e, t) {
		throw new Error();
	}
	function Wi(e) {
		return {
			get() {
				const t = b(this);
				return Oe(t, e), t.cmpFields[e];
			},
			set(t) {
				const n = b(this);
				$e(n, e, t);
			},
			enumerable: !0,
			configurable: !0,
		};
	}
	function ct(e) {
		return D(e.value) ? "method" : D(e.set) || D(e.get) ? "accessor" : "field";
	}
	function Cu(e, t, n) {
		if (($(), !c(n))) {
			const o = ct(n),
				r = `Invalid observed ${t} field. Found a duplicate ${o} with the same name.`;
			_(r);
		}
	}
	function Su(e, t, n) {
		if (($(), !c(n))) {
			const o = ct(n);
			_(
				`Invalid @track ${t} field. Found a duplicate ${o} with the same name.`,
			);
		}
	}
	function Tu(e, t, n) {
		if (($(), !c(n))) {
			const o = ct(n);
			_(`Invalid @wire ${t} field. Found a duplicate ${o} with the same name.`);
		}
	}
	function Mu(e, t, n) {
		$(),
			(c(n) || !D(n.value) || Y(n.writable)) &&
				_(
					`Invalid @wire ${t} field. The field should have a valid writable descriptor.`,
				);
	}
	function ku(e, t, n) {
		if (($(), !c(n))) {
			const o = ct(n),
				r = `Invalid @api ${t} field. Found a duplicate ${o} with the same name.`;
			_(r);
		}
	}
	function Du(e, t, n) {
		$(),
			D(n.set)
				? D(n.get) ||
					_(
						`Missing getter for property ${t} decorated with @api in ${e}. You cannot have a setter without the corresponding getter.`,
					)
				: D(n.get) || _(`Missing @api get ${t} accessor.`);
	}
	function _u(e, t, n) {
		$(),
			(c(n) || !D(n.value) || Y(n.writable)) && _(`Invalid @api ${t} method.`);
	}
	function xi(e, t) {
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
				if (((E[h] = N.config), (w = G(n, h)), N.config > 0)) {
					if (c(w)) throw new Error();
					w = Go(h, w);
				} else !c(w) && !c(w.get) ? (w = Go(h, w)) : (w = Ii(h));
				(d[h] = w), R(n, h, w);
			}
		if (
			(c(r) ||
				Ze.call(r, (h) => {
					if (((w = G(n, h)), c(w))) throw new Error();
					u[h] = w;
				}),
			!c(s))
		)
			for (const h in s) {
				const { adapter: N, method: v, config: T, dynamic: O = [] } = s[h];
				if (((w = G(n, h)), v === 1)) {
					if (c(w)) throw new Error();
					(l[h] = w), Oi(w, N, T, O);
				} else (w = Wi(h)), (f[h] = w), Ai(w, N, T, O), R(n, h, w);
			}
		if (!c(i)) for (const h in i) (w = G(n, h)), (w = Fi(h)), R(n, h, w);
		if (!c(a))
			for (let h = 0, N = a.length; h < N; h++) {
				const v = a[h];
				w = G(n, v);
				const T = !c(o) && v in o,
					O = !c(i) && v in i;
				!T && !O && (m[v] = vi(v));
			}
		return (
			Hi(e, {
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
	function Hi(e, t) {
		Yo.set(e, t);
	}
	const Ui = {
		apiMethods: B,
		apiFields: B,
		apiFieldsConfig: B,
		wiredMethods: B,
		wiredFields: B,
		observedFields: B,
	};
	function ji(e) {
		const t = Yo.get(e);
		return c(t) ? Ui : t;
	}
	let Ko = !1;
	function Ou(e, t) {
		const n = e.toString().match(Ls);
		if (!g(n) && !Ko) {
			const o = n[1],
				[r, s] = o.split("."),
				[i, a] = $t.split(".");
			if (r !== i || s !== a) {
				Ko = !0;
				const u = t === "component" ? `${t} ${e.name}` : t;
				_(`LWC WARNING: current engine is v${$t}, but ${u} was compiled with v${o}.
Please update your compiled code or LWC engine so that the versions match.
No further warnings will appear.`),
					De("CompilerRuntimeVersionMismatch", {
						compilerVersion: o,
						runtimeVersion: $t,
					});
			}
		}
	}
	const rn = new Set();
	function sn() {
		return [];
	}
	rn.add(sn);
	function Gi(e) {
		return rn.has(e);
	}
	function Yi(e) {
		return rn.add(e), e;
	}
	function Ki(e, t, n, o) {
		return o;
	}
	const zo = C(null),
		qo = C(null);
	function zi(e) {
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
	function qi(e) {
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
	function Qi(e) {
		return function () {
			const t = b(this),
				{ callHook: n, component: o } = t,
				r = o[e];
			return n(t.component, r, ro.call(arguments));
		};
	}
	function Xi(e, t) {
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
	function Au(e) {
		let t;
		return {
			get() {
				return (
					Ft(
						`The property "${e}" is not publicly accessible. Add the @api annotation to the property declaration or getter/setter in the component to make it accessible.`,
					),
					t
				);
			},
			set(n) {
				Ft(
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
				(l[E] = { get: zi(E), set: qi(E), enumerable: !0, configurable: !0 });
		}
		for (let f = 0, m = n.length; f < m; f += 1) {
			const E = n[f];
			l[E] = { value: Qi(E), writable: !0, configurable: !0 };
		}
		return (
			(l.attributeChangedCallback = { value: Xi(a, u) }),
			(l.attachInternals = { set() {}, get() {} }),
			(l.formAssociated = { set() {}, get() {} }),
			R(i, "observedAttributes", {
				get() {
					return [...d, ...F(a)];
				},
			}),
			re(i.prototype, l),
			i
		);
	}
	const Le = Qo(To, Jn(Ae), [], [], null, !1);
	So(Le.prototype), Ne(Le), Xe(Le.prototype);
	const Ji =
		typeof WeakRef == "function" && typeof FinalizationRegistry == "function";
	class Zi {
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
	class ea {
		constructor() {
			(this._map = new WeakMap()),
				(this._registry = new FinalizationRegistry((t) => {
					for (let n = t.length - 1; n >= 0; n--) {
						const o = t[n].deref();
						c(o) && _t.call(t, n, 1);
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
			M.call(o, new WeakRef(n)), this._registry.register(n, o);
		}
		delete(t) {
			this._map.delete(t);
		}
	}
	const an = Ji ? ea : Zi,
		Xo = new WeakMap(),
		Jo = new WeakMap(),
		Zo = new WeakMap(),
		cn = new an(),
		ln = new an(),
		un = new an();
	function Vu(e) {
		const t = cn.get(e);
		for (const n of t) Y(n.isDirty) && (Ee(n), Rn(n));
		return cn.delete(e), !0;
	}
	function $u(e) {
		const t = un.get(e);
		for (const n of t) Pr(n);
		return un.delete(e), !0;
	}
	function Ru(e) {
		const t = ln.get(e);
		let n = !0;
		for (const o of t) {
			const { owner: r } = o;
			g(r) ? (n = !1) : Pr(r);
		}
		return ln.delete(e), n;
	}
	function Lu(e) {
		$();
		const t = new Set();
		for (; Xo.has(e) && !t.has(e); ) t.add(e), (e = Xo.get(e));
		return e;
	}
	function Iu(e) {
		$();
		const t = new Set();
		for (; Jo.has(e) && !t.has(e); ) t.add(e), (e = Jo.get(e));
		return e;
	}
	function ta(e) {
		$();
		const t = new Set();
		for (; Zo.has(e) && !t.has(e); ) t.add(e), (e = Zo.get(e));
		return e;
	}
	function Pu(e) {
		$();
		const t = e.def.ctor;
		ln.add(t, e);
		const n = e.cmpTemplate;
		if (n) {
			cn.add(n, e);
			const o = n.stylesheets;
			if (!c(o))
				for (const r of Wt(o)) {
					const s = ta(r);
					un.add(s, e);
				}
		}
	}
	function na(e, t) {
		return !1;
	}
	function oa(e, t) {
		return !1;
	}
	function ra(e, t) {
		return !1;
	}
	const dn = new WeakMap();
	function sa(e) {
		let t = Ce(e);
		if (g(t))
			throw new ReferenceError(
				`Invalid prototype chain for ${e.name}, you must extend LightningElement.`,
			);
		if (Ht(t)) {
			const n = xt(t);
			t = n === t ? L : n;
		}
		return t;
	}
	function ia(e) {
		const { shadowSupportMode: t, renderMode: n, formAssociated: o } = e,
			r = ji(e),
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
			formDisabledCallback: T,
			formStateRestoreCallback: O,
			render: ee,
		} = f;
		const be = sa(e),
			ve = be !== L,
			A = ve ? ue(be) : ca,
			Gn = Qo(A.bridge, F(s), F(a), F(l), f, ve),
			Yn = Q(C(null), A.props, s),
			Kn = Q(C(null), A.propsConfig, i),
			zn = Q(C(null), A.methods, a),
			qn = Q(C(null), A.wire, u, d);
		(m = m || A.connectedCallback),
			(E = E || A.disconnectedCallback),
			(w = w || A.renderedCallback),
			(h = h || A.errorCallback),
			(N = N || A.formAssociatedCallback),
			(v = v || A.formResetCallback),
			(T = T || A.formDisabledCallback),
			(O = O || A.formStateRestoreCallback),
			(ee = ee || A.render);
		let qe = A.shadowSupportMode;
		c(t) || (qe = t);
		let Tt = A.renderMode;
		c(n) || (Tt = n === "light" ? 0 : 1);
		let Qe = A.formAssociated;
		c(o) || (Qe = o);
		const Qn = pc(e) || A.template,
			Xn = e.name || A.name;
		re(f, l);
		const Mt = {
			ctor: e,
			name: Xn,
			wire: qn,
			props: Yn,
			propsConfig: Kn,
			methods: zn,
			bridge: Gn,
			template: Qn,
			renderMode: Tt,
			shadowSupportMode: qe,
			formAssociated: Qe,
			connectedCallback: m,
			disconnectedCallback: E,
			errorCallback: h,
			formAssociatedCallback: N,
			formDisabledCallback: T,
			formResetCallback: v,
			formStateRestoreCallback: O,
			renderedCallback: w,
			render: ee,
		};
		return Js(Mt), Mt;
	}
	function lt(e) {
		if (!D(e)) return !1;
		if (e.prototype instanceof L) return !0;
		let t = e;
		do {
			if (Ht(t)) {
				const n = xt(t);
				if (n === t) return !0;
				t = n;
			}
			if (t === L) return !0;
		} while (!g(t) && (t = Ce(t)));
		return !1;
	}
	function ue(e) {
		let t = dn.get(e);
		if (c(t)) {
			if (Ht(e)) {
				const n = xt(e);
				return (t = ue(n)), dn.set(e, t), t;
			}
			if (!lt(e))
				throw new TypeError(
					`${e} is not a valid component, or does not extends LightningElement from "lwc". You probably forgot to add the extend clause on the class declaration.`,
				);
			(t = ia(e)), dn.set(e, t);
		}
		return t;
	}
	function aa(e) {
		return ue(e).bridge;
	}
	const ca = {
		ctor: L,
		name: L.name,
		props: tn,
		propsConfig: B,
		methods: B,
		renderMode: 1,
		shadowSupportMode: "reset",
		formAssociated: void 0,
		wire: B,
		bridge: Le,
		template: sn,
		render: L.prototype.render,
	};
	function la(e) {
		const t = ue(e),
			{ ctor: n, name: o, props: r, propsConfig: s, methods: i } = t,
			a = {};
		for (const d in r) a[d] = { config: s[d] || 0, type: "any", attr: ho(d) };
		const u = {};
		for (const d in i) u[d] = i[d].value;
		return { ctor: n, name: o, props: a, methods: u };
	}
	function Ie(e) {
		return `${e}-host`;
	}
	function ua(e) {
		return Sn.h("style", { key: "style", attrs: { type: "text/css" } }, [
			Sn.t(e),
		]);
	}
	function da(e, t, n) {
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
		let h, N, v, T, O, ee;
		n
			? ((T = r.legacyStylesheetToken),
				(O = r.hasLegacyTokenInClass),
				(ee = r.hasLegacyTokenInAttribute))
			: ((T = r.stylesheetToken),
				(O = r.hasTokenInClass),
				(ee = r.hasTokenInAttribute)),
			c(T) || (O && a(o).remove(Ie(T)), ee && u(o, Ie(T)));
		const be = Ue(l),
			ve = Ue(m);
		(be || ve) && (h = f),
			c(h) ||
				(w && (a(o).add(Ie(h)), (N = !0)), E && (d(o, Ie(h), ""), (v = !0))),
			n
				? ((r.legacyStylesheetToken = h),
					(r.hasLegacyTokenInClass = N),
					(r.hasLegacyTokenInAttribute = v))
				: ((r.stylesheetToken = h),
					(r.hasTokenInClass = N),
					(r.hasTokenInAttribute = v));
	}
	function fn(e, t, n) {
		const o = [];
		let r;
		for (let s = 0; s < e.length; s++) {
			let i = e[s];
			if (H(i)) M.apply(o, fn(i, t, n));
			else {
				const a = i[lo],
					u = a || (n.shadowMode === 1 && n.renderMode === 1) ? t : void 0,
					d = n.renderMode === 0 ? !a : n.shadowMode === 0;
				let l;
				n.renderMode === 1
					? (l = n.shadowMode === 0)
					: (c(r) && (r = er(n)), (l = g(r) || r.shadowMode === 0)),
					M.call(o, i(u, d, l));
			}
		}
		return o;
	}
	function fa(e, t) {
		const { stylesheets: n, stylesheetToken: o } = t,
			{ stylesheets: r } = e;
		let s = [];
		return Ue(n) && (s = fn(n, o, e)), Ue(r) && M.apply(s, fn(r, o, e)), s;
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
	function pa(e) {
		const { template: t } = ue(e.ctor),
			{ vm: n } = e,
			{ stylesheetToken: o } = t;
		return !c(o) && Tr(t, n) ? Ie(o) : null;
	}
	function ha(e) {
		const t = er(e);
		return !g(t) && t.shadowMode === 1 ? null : t;
	}
	function ma(e, t) {
		const {
			renderMode: n,
			shadowMode: o,
			renderer: { insertStylesheet: r },
		} = e;
		if (n === 1 && o === 1) for (let s = 0; s < t.length; s++) r(t[s]);
		else {
			if (e.hydrated) return to.call(t, ua);
			{
				const s = ha(e),
					i = g(s) ? void 0 : s.shadowRoot;
				for (let a = 0; a < t.length; a++) r(t[a], i);
			}
		}
		return null;
	}
	function ga(e) {
		const { type: t } = e;
		return t === 2 || t === 3;
	}
	function Pe(e, t) {
		return e.key === t.key && e.sel === t.sel;
	}
	function Ea(e) {
		return e.type === 3;
	}
	function Fe(e) {
		return e.type === 5;
	}
	function nr(e) {
		return e.type === 6;
	}
	const or = 58;
	function ya(e, t, n) {
		const { attrs: o, external: r } = t.data;
		if (c(o)) return;
		const s = g(e) ? B : e.data.attrs;
		if (s === o) return;
		const { elm: i } = t,
			{ setAttribute: a, removeAttribute: u, setProperty: d } = n;
		for (const l in o) {
			const f = o[l];
			if (s[l] !== f) {
				let E;
				r && (E = Rs(l)) in i
					? d(i, E, f)
					: et.call(l, 3) === or
						? a(i, l, f, _s)
						: et.call(l, 5) === or
							? a(i, l, f, As)
							: g(f) || c(f)
								? u(i, l)
								: a(i, l, f);
			}
		}
	}
	function wa(e, t) {
		return e === "input" && (t === "value" || t === "checked");
	}
	function rr(e, t, n) {
		const { props: o } = t.data;
		if (c(o)) return;
		let r;
		if (!g(e)) {
			if (((r = e.data.props), r === o)) return;
			c(r) && (r = B);
		}
		const s = g(e),
			{ elm: i, sel: a } = t,
			{ getProperty: u, setProperty: d } = n;
		for (const l in o) {
			const f = o[l];
			(s || f !== (wa(a, l) ? u(i, l) : r[l]) || !(l in r)) && d(i, l, f);
		}
	}
	const sr = C(null);
	function ir(e) {
		if (e == null) return B;
		e = ie(e) ? e : e + "";
		let t = sr[e];
		if (t) return t;
		t = C(null);
		let n = 0,
			o;
		const r = e.length;
		for (o = 0; o < r; o++)
			et.call(e, o) === Gs &&
				(o > n && (t[io.call(e, n, o)] = !0), (n = o + 1));
		return o > n && (t[io.call(e, n, o)] = !0), (sr[e] = t), t;
	}
	function ba(e, t, n) {
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
	function va(e, t, n) {
		const {
			elm: o,
			data: { style: r },
		} = t;
		if ((g(e) ? void 0 : e.data.style) === r) return;
		const { setAttribute: i, removeAttribute: a } = n;
		!ie(r) || r === "" ? a(o, "style") : i(o, "style", r);
	}
	function pn(e, t) {
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
	function Na(e, t) {
		const {
			elm: n,
			data: { classMap: o },
		} = e;
		if (c(o)) return;
		const { getClassList: r } = t,
			s = r(n);
		for (const i in o) s.add(i);
	}
	function Ca(e, t) {
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
	function hn(e, t) {
		const { data: n } = e,
			{ ref: o } = n;
		if (c(o)) return;
		const r = t.refVNodes;
		r[o] = e;
	}
	function Sa(e, t, n) {
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
			for (; !g(m); ) Je.call(u, m), (m = i(m));
		}
	}
	function mn(e, t, n, o) {
		const { parts: r, owner: s } = t;
		if (!c(r)) {
			Sa(e, r, n);
			for (const i of r) o && pn(i, n), hn(i, s);
		}
	}
	function gn(e, t, n, o) {
		fr(t) ? pr(e, t, n, o) : hr(e, t, n, o);
	}
	function me(e, t, n, o) {
		var r, s;
		if (e !== t)
			switch (t.type) {
				case 0:
					Ta(e, t, o);
					break;
				case 1:
					ka(e, t, o);
					break;
				case 4:
					Va(e, t, o);
					break;
				case 5:
					Oa(e, t, n, o);
					break;
				case 2:
					$a(e, t, (r = t.data.renderer) !== null && r !== void 0 ? r : o);
					break;
				case 3:
					La(e, t, n, (s = t.data.renderer) !== null && s !== void 0 ? s : o);
					break;
			}
	}
	function de(e, t, n, o) {
		var r, s;
		switch (e.type) {
			case 0:
				Ma(e, t, o, n);
				break;
			case 1:
				Da(e, t, o, n);
				break;
			case 4:
				Ra(e, t, o, n);
				break;
			case 5:
				_a(e, t, o, n);
				break;
			case 2:
				Aa(e, t, o, (r = e.data.renderer) !== null && r !== void 0 ? r : n);
				break;
			case 3:
				ar(e, t, o, (s = e.data.renderer) !== null && s !== void 0 ? s : n);
				break;
		}
	}
	function Ta(e, t, n) {
		(t.elm = e.elm), t.text !== e.text && cr(t, n);
	}
	function Ma(e, t, n, o) {
		const { owner: r } = e,
			{ createText: s } = o,
			i = (e.elm = s(e.text));
		We(i, r, o), xe(i, t, n, o);
	}
	function ka(e, t, n) {
		(t.elm = e.elm), t.text !== e.text && cr(t, n);
	}
	function Da(e, t, n, o) {
		const { owner: r } = e,
			{ createComment: s } = o,
			i = (e.elm = s(e.text));
		We(i, r, o), xe(i, t, n, o);
	}
	function _a(e, t, n, o) {
		const { children: r } = e;
		Be(r, t, o, n), (e.elm = e.leading.elm);
	}
	function Oa(e, t, n, o) {
		const { children: r, stable: s } = t;
		s ? hr(e.children, r, n, o) : pr(e.children, r, n, o),
			(t.elm = t.leading.elm);
	}
	function Aa(e, t, n, o) {
		const {
				sel: r,
				owner: s,
				data: { svg: i },
			} = e,
			{ createElement: a } = o,
			u = se(i) ? Os : void 0,
			d = (e.elm = a(r, u));
		We(d, s, o),
			lr(d, s, o),
			Ia(d, e),
			ur(d, e),
			ft(null, e, o),
			xe(d, t, n, o),
			Be(e.children, d, o, null);
	}
	function Va(e, t, n) {
		const o = (t.elm = e.elm);
		mn(o, t, n, !1);
	}
	function $a(e, t, n) {
		const o = (t.elm = e.elm);
		ft(e, t, n), gn(e.children, t.children, o, n);
	}
	function Ra(e, t, n, o) {
		const { owner: r } = e,
			{ cloneNode: s, isSyntheticShadowDefined: i } = o,
			a = (e.elm = s(e.fragment, !0));
		We(a, r, o), ur(a, e);
		const { renderMode: u, shadowMode: d } = r;
		i && (d === 1 || u === 0) && (a[ks] = !0), xe(a, t, n, o), mn(a, e, o, !0);
	}
	function ar(e, t, n, o) {
		const { sel: r, owner: s } = e,
			{ createCustomElement: i } = o;
		let a;
		const u = (v) => {
			a = Fa(v, e, o);
		};
		let d, l, f, m, E, w;
		const h = r.toLowerCase(),
			N = i(h, u, d, l, f, m, E, w);
		(e.elm = N),
			(e.vm = a),
			We(N, s, o),
			lr(N, s, o),
			a && wn(e, a),
			ft(null, e, o),
			xe(N, t, n, o),
			a && vt(a),
			Be(e.children, N, o, null),
			a && Nc(a);
	}
	function La(e, t, n, o) {
		if (e.ctor !== t.ctor) {
			const r = o.nextSibling(e.elm);
			ut(e, n, o, !0), ar(t, n, r, o);
		} else {
			const r = (t.elm = e.elm),
				s = (t.vm = e.vm);
			if ((ft(e, t, o), !c(s))) {
				wn(t, s);
				const { shadowMode: i, renderMode: a } = s;
				i == 0 && a !== 0 && fr(e.children) && bn(t.children);
			}
			gn(e.children, t.children, r, o), c(s) || vc(s);
		}
	}
	function Be(e, t, n, o, r = 0, s = e.length) {
		for (; r < s; ++r) {
			const i = e[r];
			W(i) && de(i, t, n, o);
		}
	}
	function ut(e, t, n, o = !1) {
		const { type: r, elm: s, sel: i } = e;
		switch ((o && r !== 5 && yn(s, t, n), r)) {
			case 5: {
				dt(e.children, t, n, o);
				break;
			}
			case 2: {
				const a = i === "slot" && e.owner.shadowMode === 1;
				dt(e.children, s, n, a);
				break;
			}
			case 3: {
				const { vm: a } = e;
				c(a) || Cc(a);
			}
		}
	}
	function dt(e, t, n, o = !1, r = 0, s = e.length) {
		for (; r < s; ++r) {
			const i = e[r];
			W(i) && ut(i, t, n, o);
		}
	}
	function W(e) {
		return e != null;
	}
	function We(e, t, n) {
		const { renderRoot: o, renderMode: r, shadowMode: s } = t,
			{ isSyntheticShadowDefined: i } = n;
		i && (s === 1 || r === 0) && (e[Vt] = o[Vt]);
	}
	function cr(e, t) {
		const { elm: n, text: o } = e,
			{ setText: r } = t;
		r(n, o);
	}
	function En(e, t, n, o) {
		if (Fe(e)) {
			const r = e.children;
			for (let s = 0; s < r.length; s += 1) {
				const i = r[s];
				g(i) || o.insert(i.elm, t, n);
			}
		} else o.insert(e.elm, t, n);
	}
	function xe(e, t, n, o) {
		o.insert(e, t, n);
	}
	function yn(e, t, n) {
		n.remove(e, t);
	}
	function ft(e, t, n) {
		g(e) && (pn(t, n), Na(t, n), Ca(t, n)),
			ba(e, t, n),
			va(e, t, n),
			ya(e, t, n),
			rr(e, t, n),
			hn(t, t.owner);
	}
	function lr(e, t, n) {
		const { getClassList: o } = n,
			r = tr(t, !1);
		g(r) || o(e).add(r);
		const { stylesheetToken: s } = t.context;
		t.shadowMode === 1 && (c(s) || (e.$shadowToken$ = s));
	}
	function Ia(e, t) {
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
	function wn(e, t) {
		const n = e.aChildren || e.children,
			{ renderMode: o, shadowMode: r } = t,
			s = Pa(n);
		(e.children = s),
			(t.aChildren = s),
			(r === 1 || o === 0) &&
				(Ba(t, s, e.owner), (e.aChildren = s), (e.children = U));
	}
	function Pa(e) {
		const t = [],
			n = [];
		let o = !1;
		for (let s = e.length - 1; s > -1; s -= 1) {
			const i = e[s];
			M.call(n, i), (o = o || !!(i && Fe(i)));
		}
		if (!o) return e;
		let r;
		for (; !c((r = no.call(n))); )
			if (!g(r) && Fe(r)) {
				const s = r.children;
				for (let i = s.length - 2; i > 0; i -= 1) M.call(n, s[i]);
			} else M.call(t, r);
		return bn(t), t;
	}
	function Fa(e, t, n) {
		let o = q(e);
		if (!c(o)) return o;
		const { sel: r, mode: s, ctor: i, owner: a } = t;
		return (o = Ge(e, i, n, { mode: s, owner: a, tagName: r })), o;
	}
	function Ba(e, t, n) {
		var o, r;
		const {
				cmpSlots: { slotAssignments: s },
			} = e,
			i = C(null);
		for (let a = 0, u = t.length; a < u; a += 1) {
			const d = t[a];
			if (g(d)) continue;
			let l = "";
			ga(d)
				? (l =
						(r =
							(o = d.data.attrs) === null || o === void 0 ? void 0 : o.slot) !==
							null && r !== void 0
							? r
							: "")
				: nr(d) && (l = d.slotName);
			const f = "" + l,
				m = (i[f] = i[f] || []);
			M.call(m, d);
		}
		if (((e.cmpSlots = { owner: n, slotAssignments: i }), Y(e.isDirty))) {
			const a = F(s);
			if (a.length !== F(i).length) {
				Ee(e);
				return;
			}
			for (let u = 0, d = a.length; u < d; u += 1) {
				const l = a[u];
				if (c(i[l]) || s[l].length !== i[l].length) {
					Ee(e);
					return;
				}
				const f = s[l],
					m = i[l];
				for (let E = 0, w = i[l].length; E < w; E += 1)
					if (f[E] !== m[E]) {
						Ee(e);
						return;
					}
			}
		}
	}
	const dr = new WeakSet();
	function bn(e) {
		dr.add(e);
	}
	function fr(e) {
		return dr.has(e);
	}
	function Wa(e, t, n) {
		const o = {};
		for (let r = t; r <= n; ++r) {
			const s = e[r];
			if (W(s)) {
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
			if (!W(a)) a = e[++r];
			else if (!W(u)) u = e[--i];
			else if (!W(f)) f = t[++s];
			else if (!W(m)) m = t[--l];
			else if (Pe(a, f)) me(a, f, n, o), (a = e[++r]), (f = t[++s]);
			else if (Pe(u, m)) me(u, m, n, o), (u = e[--i]), (m = t[--l]);
			else if (Pe(a, m)) {
				me(a, m, n, o);
				let T;
				Fe(u)
					? (T = o.nextSibling(u.trailing.elm))
					: (T = o.nextSibling(u.elm)),
					En(a, n, T, o),
					(a = e[++r]),
					(m = t[--l]);
			} else
				Pe(u, f)
					? (me(u, f, n, o), En(f, n, a.elm, o), (u = e[--i]), (f = t[++s]))
					: (E === void 0 && (E = Wa(e, r, i)),
						(w = E[f.key]),
						c(w)
							? (de(f, n, o, a.elm), (f = t[++s]))
							: ((h = e[w]),
								W(h) &&
									(h.sel !== f.sel
										? de(f, n, o, a.elm)
										: (me(h, f, n, o),
											v || ((v = !0), (e = [...e])),
											(e[w] = void 0),
											En(h, n, a.elm, o))),
								(f = t[++s])));
		if (r <= i || s <= l)
			if (r > i) {
				let T = l,
					O;
				do O = t[++T];
				while (!W(O) && T < d);
				(N = W(O) ? O.elm : null), Be(t, n, o, N, s, l + 1);
			} else dt(e, n, o, !0, r, i + 1);
	}
	function hr(e, t, n, o) {
		const r = e.length,
			s = t.length;
		if (r === 0) {
			Be(t, n, o, null);
			return;
		}
		if (s === 0) {
			dt(e, n, o, !0);
			return;
		}
		let i = null;
		for (let a = s - 1; a >= 0; a -= 1) {
			const u = e[a],
				d = t[a];
			d !== u &&
				(W(u)
					? W(d)
						? Pe(u, d)
							? (me(u, d, n, o), (i = d.elm))
							: (ut(u, n, o, !0), de(d, n, o, i), (i = d.elm))
						: ut(u, n, o, !0)
					: W(d) && (de(d, n, o, i), (i = d.elm)));
		}
	}
	const xa = Symbol.iterator;
	function Ha(e) {
		M.call(P().velements, e);
	}
	function Ua(e, t) {
		return { partId: e, data: t, elm: void 0 };
	}
	function ja(e, t) {
		return {
			type: 6,
			factory: t,
			owner: P(),
			elm: void 0,
			sel: void 0,
			key: void 0,
			slotName: e,
		};
	}
	function Ga(e, t, n) {
		const o = P();
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
		const o = P(),
			r = At(5, o.apiVersion),
			s = r ? Cn("") : Nn(""),
			i = r ? Cn("") : Nn("");
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
	function gr(e, t, n = U) {
		const o = P(),
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
	function Ya(e) {
		return e > 0 && !(se(e) || Y(e)) ? 0 : e;
	}
	function Ka(e, t, n, o) {
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
						const w = P();
						Et(o.owner);
						try {
							const { tro: h } = o.owner;
							h.observe(() => {
								M.call(u, f.factory(t.slotData, t.key));
							});
						} finally {
							Et(w);
						}
					} else M.call(u, f);
				}
			}
			n = u;
		}
		const r = P(),
			{ renderMode: s, shadowMode: i, apiVersion: a } = r;
		return s === 0
			? At(2, a)
				? mr(t.key, n, 0)
				: (pt(n), n)
			: (i === 1 && pt(n), gr("slot", t, n));
	}
	function vn(e, t, n, o = U) {
		const r = P(),
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
		return Ha(d), d;
	}
	function za(e, t) {
		const n = [];
		pt(n);
		const o = P();
		if (c(e) || e === null) return n;
		const r = e[xa]();
		let s = r.next(),
			i = 0,
			{ value: a, done: u } = s,
			d,
			l;
		for (; u === !1; ) {
			(s = r.next()), (u = s.done);
			const f = t(a, i, i === 0, u === !0);
			H(f) ? M.apply(n, f) : M.call(n, f), (i += 1), (a = s.value);
		}
		return n;
	}
	function qa(e) {
		const t = e.length,
			n = [];
		pt(n);
		for (let o = 0; o < t; o += 1) {
			const r = e[o];
			H(r) ? M.apply(n, r) : M.call(n, r);
		}
		return n;
	}
	function Nn(e) {
		let t, n, o;
		return { type: 0, sel: t, text: e, elm: o, key: n, owner: P() };
	}
	function Cn(e) {
		let t, n;
		return { type: 1, sel: t, text: e, elm: n, key: "c", owner: P() };
	}
	function Qa(e) {
		return e == null ? "" : String(e);
	}
	function Xa(e) {
		const t = P();
		if (g(t)) throw new Error();
		const n = t;
		return function (o) {
			Mr(n, e, n.component, o);
		};
	}
	function Ja(e, t) {
		switch (typeof t) {
			case "number":
			case "string":
				return e + ":" + t;
			case "object":
		}
	}
	function Za(e) {
		const t = P();
		if (c(e) || e === "") return e;
		if (g(e)) return null;
		const { idx: n, shadowMode: o } = t;
		return o === 1 ? Ot.call(e, /\S+/g, (r) => `${r}-${n}`) : e;
	}
	function ec(e) {
		const t = P();
		if (c(e) || e === "") return e;
		if (g(e)) return null;
		const { idx: n, shadowMode: o } = t;
		return o === 1 && /^#/.test(e) ? `${e}-${n}` : e;
	}
	function tc(e, t, n, o = U) {
		if (g(t) || c(t)) return null;
		if (!lt(t))
			throw new Error(
				`Invalid LWC Constructor ${te(t)} for custom element <${e}>.`,
			);
		return vn(e, t, n, o);
	}
	function nc(e, t, n = U) {
		if (g(e) || c(e)) return null;
		if (!lt(e))
			throw new Error(
				`Invalid constructor ${te(e)} is not a LightningElement constructor.`,
			);
		const o = hc(e);
		if (c(o) || o === "")
			throw new Error(
				`Invalid LWC constructor ${te(e)} does not have a registered name`,
			);
		return vn(o, e, t, n);
	}
	function pt(e) {
		return bn(e), e;
	}
	let Er = () => {
		throw new Error("sanitizeHtmlContent hook must be implemented.");
	};
	function oc(e) {
		Er = e;
	}
	function rc(e) {
		return Er(e);
	}
	const Sn = Ne({
			s: Ka,
			h: gr,
			c: vn,
			i: za,
			f: qa,
			t: Nn,
			d: Qa,
			b: Xa,
			k: Ja,
			co: Cn,
			dc: nc,
			fr: mr,
			ti: Ya,
			st: Ga,
			gid: Za,
			fid: ec,
			shc: rc,
			ssf: ja,
			ddc: tc,
			sp: Ua,
		}),
		sc = [
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
			: V,
		br = yr
			? (e, t) => {
					performance.measure(e, t),
						performance.clearMarks(t),
						performance.clearMeasures(e);
				}
			: V;
	function Tn(e) {
		return sc[e];
	}
	function vr(e, t) {
		return `${ae(t)} - ${Tn(e)}`;
	}
	function ht(e, t) {
		return `${vr(e, t)} - ${t.idx}`;
	}
	const mt = !1;
	let ge = !1,
		fe = V;
	const ic = {
		enableProfiler() {
			ge = !0;
		},
		disableProfiler() {
			ge = !1;
		},
		attachDispatcher(e) {
			(fe = e), this.enableProfiler();
		},
		detachDispatcher() {
			const e = fe;
			return (fe = V), this.disableProfiler(), e;
		},
	};
	function pe(e, t) {
		if (mt) {
			const n = ht(e, t);
			wr(n);
		}
		ge && fe(e, 0, t.tagName, t.idx, t.renderMode, t.shadowMode);
	}
	function he(e, t) {
		if (mt) {
			const n = ht(e, t),
				o = vr(e, t);
			br(o, n);
		}
		ge && fe(e, 1, t.tagName, t.idx, t.renderMode, t.shadowMode);
	}
	function Nr(e, t) {
		if (mt) {
			const n = Tn(e),
				o = c(t) ? n : ht(e, t);
			wr(o);
		}
		ge &&
			fe(
				e,
				0,
				t == null ? void 0 : t.tagName,
				t == null ? void 0 : t.idx,
				t == null ? void 0 : t.renderMode,
				t == null ? void 0 : t.shadowMode,
			);
	}
	function Mn(e, t) {
		if (mt) {
			const n = Tn(e),
				o = c(t) ? n : ht(e, t);
			br(n, o);
		}
		ge &&
			fe(
				e,
				1,
				t == null ? void 0 : t.tagName,
				t == null ? void 0 : t.idx,
				t == null ? void 0 : t.renderMode,
				t == null ? void 0 : t.shadowMode,
			);
	}
	let gt = !1,
		He = null;
	function P() {
		return He;
	}
	function Et(e) {
		He = e;
	}
	function Fu(e) {
		$();
		const { cmpSlots: t } = e;
		for (const n in t.slotAssignments)
			kt.isTrue(
				H(t.slotAssignments[n]),
				`Slots can only be set to an array, instead received ${te(t.slotAssignments[n])} for slot "${n}" in ${e}.`,
			);
	}
	function Bu(e, t) {
		$(),
			e !== sn &&
				(t.renderMode === 0
					? e.renderMode !== "light" &&
						_(
							`Light DOM components can't render shadow DOM templates. Add an 'lwc:render-mode="light"' directive to the root template tag of ${ae(t)}.`,
						)
					: c(e.renderMode) ||
						_(
							`Shadow DOM components template can't render light DOM templates. Either remove the 'lwc:render-mode' directive from ${ae(t)} or set it to 'lwc:render-mode="shadow"`,
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
					} = P(),
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
				for (let T = 0, O = n.length; T < O; T++)
					switch (n[T]) {
						case 0:
							v += t[T] + w;
							break;
						case 1:
							v += t[T] + h;
							break;
						case 2:
							v += t[T] + N;
							break;
						case 3:
							v += t[T] + h + N;
							break;
					}
				return (v += t[t.length - 1]), (o[m] = e(v, u)), o[m];
			};
		};
	}
	const ac = Cr((e, t) => {
			const { createFragment: n } = t;
			return n(e);
		}),
		cc = Cr((e, t) => {
			const { createFragment: n, getFirstChild: o } = t,
				r = n("<svg>" + e + "</svg>");
			return o(r);
		});
	function lc(e, t) {
		const n = gt,
			o = He;
		let r = [];
		return (
			Z(
				e,
				e.owner,
				() => {
					(He = e), pe(1, e);
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
							if ((g(u) || Lr(e), !Gi(t)))
								throw new TypeError(
									`Invalid template returned by the render() method on ${e}. It must return an imported template (e.g.: \`import html from "./${e.def.name}.html"\`), instead, it has returned: ${te(t)}.`,
								);
							(e.cmpTemplate = t),
								(i.tplCache = C(null)),
								(i.hasScopedStyles = Tr(t, e)),
								da(e, t, !1);
							const f = fa(e, t);
							i.styleVNodes = f.length === 0 ? null : ma(e, f);
						}
						(e.velements = []),
							(gt = !0),
							(r = t.call(void 0, Sn, s, a, i.tplCache));
						const { styleVNodes: l } = i;
						g(l) || Je.apply(r, l);
					});
				},
				() => {
					(gt = n), (He = o), he(1, e);
				},
			),
			r
		);
	}
	function Sr(e) {
		if (Ue(e)) {
			for (let t = 0; t < e.length; t++) if (se(e[t][lo])) return !0;
		}
		return !1;
	}
	function Tr(e, t) {
		const { stylesheets: n } = e,
			o = c(t) ? null : t.stylesheets;
		return Sr(n) || Sr(o);
	}
	function Ue(e) {
		return !c(e) && !g(e) && e.length > 0;
	}
	let kn = !1,
		ne = null;
	function Dn(e) {
		return ne === e;
	}
	function je(e, t, n) {
		const { component: o, callHook: r, owner: s } = e;
		Z(
			e,
			s,
			V,
			() => {
				r(o, t, n);
			},
			V,
		);
	}
	function uc(e, t) {
		const n = ne;
		let o;
		pe(0, e), (ne = e);
		try {
			const r = new t();
			if (ne.component !== r)
				throw new TypeError(
					"Invalid component constructor, the class should extend LightningElement.",
				);
		} catch (r) {
			o = Object(r);
		} finally {
			if ((he(0, e), (ne = n), !c(o))) throw (Eo(e, o), o);
		}
	}
	function dc(e) {
		const {
				def: { render: t },
				callHook: n,
				component: o,
				owner: r,
			} = e,
			s = kn,
			i = P();
		let a,
			u = !1;
		return (
			Z(
				e,
				r,
				() => {
					(kn = !0), Et(e);
				},
				() => {
					e.tro.observe(() => {
						(a = n(o, t)), (u = !0);
					});
				},
				() => {
					(kn = s), Et(i);
				},
			),
			u ? lc(e, a) : []
		);
	}
	function Mr(e, t, n, o) {
		const { callHook: r, owner: s } = e;
		Z(
			e,
			s,
			V,
			() => {
				r(n, t, [o]);
			},
			V,
		);
	}
	const yt = new Map();
	function fc(e, t) {
		return D(e) && yt.set(e, t), e;
	}
	function pc(e) {
		var t;
		return (t = yt.get(e)) === null || t === void 0 ? void 0 : t.tmpl;
	}
	function hc(e) {
		var t;
		return (t = yt.get(e)) === null || t === void 0 ? void 0 : t.sel;
	}
	function mc(e) {
		const t = yt.get(e),
			n = t == null ? void 0 : t.apiVersion;
		return c(n) ? Ts : n;
	}
	function gc(e) {
		return No(() => {
			const { isDirty: t } = e;
			Y(t) && (Ee(e), Rn(e));
		});
	}
	function kr(e) {
		e.tro.reset();
		const t = dc(e);
		return (e.isDirty = !1), (e.isScheduled = !1), t;
	}
	function Ee(e) {
		e.isDirty = !0;
	}
	const Dr = new WeakMap();
	function _r(e, t) {
		if (!D(t))
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
	let Ec = 0;
	const _n = new WeakMap();
	function yc(e, t, n = []) {
		return t.apply(e, n);
	}
	function wc(e, t, n) {
		e[t] = n;
	}
	function bc(e, t) {
		return e[t];
	}
	function vc(e) {
		bt(e);
	}
	function On(e) {
		const t = b(e);
		Nr(7, t), t.state === 1 && An(e), vt(t), bt(t), Mn(7, t);
	}
	function An(e) {
		const t = b(e);
		wt(t);
	}
	function Nc(e) {
		bt(e);
	}
	function wt(e) {
		const { state: t } = e;
		if (t !== 2) {
			const { tro: n } = e;
			n.reset(), Oc(e), $r(e), Ac(e);
		}
	}
	function Cc(e) {
		wt(e);
	}
	function Sc(e) {
		let t = e;
		for (; !g(t) && t.renderMode === 0; ) t = t.owner;
		return t;
	}
	function Ge(e, t, n, o) {
		const { mode: r, owner: s, tagName: i, hydrated: a } = o,
			u = ue(t),
			d = mc(t),
			l = {
				elm: e,
				def: u,
				idx: Ec++,
				state: 0,
				isScheduled: !1,
				isDirty: !0,
				tagName: i,
				mode: r,
				owner: s,
				refVNodes: null,
				children: U,
				aChildren: U,
				velements: U,
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
					tplCache: B,
					wiredConnecting: U,
					wiredDisconnecting: U,
				},
				tro: null,
				shadowMode: null,
				stylesheets: null,
				component: null,
				shadowRoot: null,
				renderRoot: null,
				callHook: yc,
				setHook: wc,
				getHook: bc,
				renderer: n,
				apiVersion: d,
			};
		return (
			(l.stylesheets = Mc(l, u.ctor)),
			(l.shadowMode = Or(u, l.owner, n)),
			(l.tro = gc(l)),
			uc(l, u.ctor),
			$n(l) && Vi(l),
			l
		);
	}
	function Tc(e, t) {
		let n = !0;
		const o = (r) => {
			if (H(r)) for (let s = 0; s < r.length; s++) o(r[s]);
			else D(r) || (n = !1);
		};
		return H(t) ? o(t) : (n = !1), n;
	}
	function Mc(e, t) {
		kc(t);
		const { stylesheets: n } = t;
		return !c(n) && Tc(e, n) ? Wt(n) : null;
	}
	function kc(e) {}
	function Dc(e, t) {
		const n = ue(e),
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
					const s = Sc(t);
					!g(s) && s.shadowMode === 0 ? (r = 0) : (r = 1);
				}
			else r = 1;
		else r = 0;
		return r;
	}
	function Wu(e) {
		if (g(e) || !tt(e) || !("renderRoot" in e))
			throw new TypeError(`${e} is not a VM.`);
	}
	function Vn(e, t) {
		_n.set(e, t);
	}
	function b(e) {
		return _n.get(e);
	}
	function q(e) {
		return _n.get(e);
	}
	function bt(e) {
		if (se(e.isDirty)) {
			const t = kr(e);
			_c(e, t);
		}
	}
	function _c(e, t) {
		const { renderRoot: n, children: o, renderer: r } = e;
		Fr(e),
			(e.children = t),
			(t.length > 0 || o.length > 0) &&
				o !== t &&
				Z(
					e,
					e,
					() => {
						pe(2, e);
					},
					() => {
						gn(o, t, n, r);
					},
					() => {
						he(2, e);
					},
				),
			e.state === 1 && Ar(e);
	}
	function Ar(e) {
		const {
			def: { renderedCallback: t },
		} = e;
		c(t) || (pe(4, e), je(e, t), he(4, e));
	}
	let ye = [];
	function Vr() {
		Nr(8);
		const e = ye.sort((t, n) => t.idx - n.idx);
		ye = [];
		for (let t = 0, n = e.length; t < n; t += 1) {
			const o = e[t];
			try {
				bt(o);
			} catch (r) {
				throw (
					(t + 1 < n &&
						(ye.length === 0 && Co(Vr), Je.apply(ye, ro.call(e, t + 1))),
					Mn(8),
					r)
				);
			}
		}
		Mn(8);
	}
	function vt(e) {
		const { state: t } = e;
		if (t === 1) return;
		(e.state = 1), $n(e) && $i(e);
		const { connectedCallback: n } = e.def;
		c(n) || (pe(3, e), je(e, n), he(3, e)),
			Ws() &&
				(e.renderer.isConnected(e.elm) ||
					De("ConnectedCallbackWhileDisconnected", { tagName: e.tagName }));
	}
	function $n(e) {
		return Jn(e.def.wire).length > 0;
	}
	function Oc(e) {
		Y(e.isDirty) && (e.isDirty = !0), (e.state = 2), $n(e) && Ri(e);
		const { disconnectedCallback: t } = e.def;
		c(t) || (pe(5, e), je(e, t), he(5, e));
	}
	function $r(e) {
		const { velements: t } = e;
		for (let n = t.length - 1; n >= 0; n -= 1) {
			const { elm: o } = t[n];
			if (!c(o)) {
				const r = q(o);
				c(r) || wt(r);
			}
		}
	}
	function Ac(e) {
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
						wt(r);
						break;
					}
				}
		}
	}
	function Lr(e) {
		Ir(e.children, e), (e.children = U), $r(e), (e.velements = U);
	}
	function Ir(e, t) {
		const {
			renderRoot: n,
			renderer: { remove: o },
		} = t;
		for (let r = 0, s = e.length; r < s; r += 1) {
			const i = e[r];
			g(i) || (Fe(i) ? Ir(i.children, t) : c(i.elm) || o(i.elm, n));
		}
	}
	function Rn(e) {
		se(e.isScheduled) ||
			((e.isScheduled = !0), ye.length === 0 && Co(Vr), M.call(ye, e));
	}
	function Vc(e) {
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
				const i = g(t) ? void 0 : Vc(t);
				if (c(i)) throw s;
				Lr(e), pe(6, e);
				const a = i.def.errorCallback;
				je(i, a, [s, s.wcStack]), he(6, e);
			}
		}
	}
	function Pr(e) {
		(e.cmpTemplate = () => []), Y(e.isDirty) && (Ee(e), Rn(e));
	}
	function Nt(e, t) {
		const {
			renderMode: n,
			shadowMode: o,
			def: { formAssociated: r },
		} = e;
		if (!(c(r) || Y(r))) {
			if (o === 1 && n !== 0)
				throw new Error(
					"Form associated lifecycle methods are not available in synthetic shadow. Please use native shadow or light DOM.",
				);
			je(e, t);
		}
	}
	function xu(e) {
		const t = b(e),
			{ formAssociatedCallback: n } = t.def;
		c(n) || Nt(t, n);
	}
	function Hu(e) {
		const t = b(e),
			{ formDisabledCallback: n } = t.def;
		c(n) || Nt(t, n);
	}
	function Uu(e) {
		const t = b(e),
			{ formResetCallback: n } = t.def;
		c(n) || Nt(t, n);
	}
	function ju(e) {
		const t = b(e),
			{ formStateRestoreCallback: n } = t.def;
		c(n) || Nt(t, n);
	}
	function Fr(e) {
		const { cmpTemplate: t } = e;
		e.refVNodes = !g(t) && t.hasRefs ? C(null) : null;
	}
	const $c = z[uo],
		Rc = z[fo];
	delete z[uo], delete z[fo];
	function Lc(e) {
		return e !== document && se(e.synthetic);
	}
	function Br(e, t, n) {
		let o = q(e.getRootNode().host);
		c(o) && (o = q(t.getRootNode().host)),
			!c(o) &&
				De("CrossRootAriaInSyntheticShadow", {
					tagName: o.tagName,
					attributeName: n,
				});
	}
	function Ic(e) {
		return ie(e) ? Dt.call(Ns.call(e, /\s+/), Boolean) : [];
	}
	function Wr(e, t, n) {
		const o = e.getRootNode();
		if (!!Lc(o))
			if (t === "id") {
				if (!ie(n) || n.length === 0) return;
				for (const r of ao) {
					const s = `[${r}~="${CSS.escape(n)}"]`,
						i = Rc.call(document, s);
					for (let a = 0; a < i.length; a++) {
						const u = i[a];
						if (u.getRootNode() !== o) {
							Br(u, e, r);
							break;
						}
					}
				}
			} else {
				const r = Ic(n);
				for (const s of r) {
					const i = $c.call(document, s);
					g(i) || (i.getRootNode() !== o && Br(e, i, t));
				}
			}
	}
	let xr = !1;
	function Pc() {
		if (xr) return;
		xr = !0;
		const { setAttribute: e } = Element.prototype;
		Q(Element.prototype, {
			setAttribute(n, o) {
				e.call(this, n, o), (n === "id" || ao.has(n)) && Wr(this, n, o);
			},
		});
		const t = G(Element.prototype, "id");
		if (!c(t)) {
			const { get: n, set: o } = t;
			D(n) &&
				D(o) &&
				R(Element.prototype, "id", {
					get() {
						return n.call(this);
					},
					set(r) {
						o.call(this, r), Wr(this, "id", r);
					},
					enumerable: !0,
					configurable: !0,
				});
		}
	}
	function Fc() {
		return typeof CSS != "undefined" && D(CSS.escape);
	}
	function Bc() {
		return Se.call(Element.prototype, co);
	}
	Fc() && Bc() && It(Pc);
	const Wc = [
		"ariaActiveDescendant",
		"ariaControls",
		"ariaDescribedBy",
		"ariaDetails",
		"ariaErrorMessage",
		"ariaFlowTo",
		"ariaLabelledBy",
		"ariaOwns",
	];
	function xc() {
		return !c(G(Element.prototype, "ariaActiveDescendant"));
	}
	function Hc(e) {
		const { host: t } = e.getRootNode(),
			n = c(t) ? void 0 : q(t);
		if (!c(n)) return n;
		let o = e;
		for (; !g((o = o.parentElement)); )
			if (o instanceof Le) {
				const r = q(o);
				if (!c(r)) return r;
			}
	}
	function Hr(e, t, n, o) {
		const r = Hc(e);
		let s;
		n && (s = g(o) ? "null" : typeof o),
			De("NonStandardAriaReflection", {
				tagName: r == null ? void 0 : r.tagName,
				propertyName: t,
				isSetter: n,
				setValueType: s,
			});
	}
	function Uc() {
		const { prototype: e } = Element;
		for (const t of Wc) {
			const n = G(e, t),
				{ get: o, set: r } = n;
			R(e, t, {
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
	xc() && It(Uc);
	let Ye = !1;
	function jc(e) {
		(Ye = !1), vt(e), Ur(e);
	}
	function Ur(e) {
		const t = kr(e);
		(e.children = t), Fr(e);
		const {
			renderRoot: n,
			renderer: { getFirstChild: o },
		} = e;
		Ct(o(n), t, n, e, !1), Ar(e);
	}
	function Gc(e, t, n) {
		var o, r;
		let s;
		switch (t.type) {
			case 0:
				s = Kc(e, t, n);
				break;
			case 1:
				s = zc(e, t, n);
				break;
			case 4:
				s = qc(e, t, n);
				break;
			case 5:
				s = Qc(e, t, n);
				break;
			case 2:
				s = Xc(e, t, (o = t.data.renderer) !== null && o !== void 0 ? o : n);
				break;
			case 3:
				s = Jc(e, t, (r = t.data.renderer) !== null && r !== void 0 ? r : n);
				break;
		}
		return n.nextSibling(s);
	}
	const we = "nodeValue";
	function Gu(e, t, n) {
		const { getProperty: o } = n,
			r = o(e, we);
		return r === t.text || (r === "\u200D" && t.text === "");
	}
	function Yc(e) {
		return c(e)
			? (t) => !0
			: se(e)
				? (t) => !1
				: H(e) && vs(e, ie)
					? (t) => !ys.call(e, t)
					: (t) => !0;
	}
	function Kc(e, t, n) {
		var o;
		if (!oe(t, e, 3, n)) return Ke(e, t, n);
		const { setText: r } = n;
		return (
			r(e, (o = t.text) !== null && o !== void 0 ? o : null), (t.elm = e), e
		);
	}
	function zc(e, t, n) {
		var o;
		if (!oe(t, e, 8, n)) return Ke(e, t, n);
		const { setProperty: r } = n;
		return (
			r(e, we, (o = t.text) !== null && o !== void 0 ? o : null), (t.elm = e), e
		);
	}
	function qc(e, t, n) {
		return !oe(t, e, 1, n) || !ol(t.fragment, e, t, n)
			? Ke(e, t, n)
			: ((t.elm = e), mn(e, t, n, !0), e);
	}
	function Qc(e, t, n) {
		const { children: o, owner: r } = t;
		return (
			Ct(e, o, n.getProperty(e, "parentNode"), r, !0),
			(t.elm = o[o.length - 1].elm)
		);
	}
	function Xc(e, t, n) {
		if (!oe(t, e, 1, n) || !Gr(t, e, n)) return Ke(e, t, n);
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
					props: Xs(i, "innerHTML"),
				}));
		}
		if ((jr(t, n), !s)) {
			const { getFirstChild: i } = n;
			Ct(i(e), t.children, e, o, !1);
		}
		return e;
	}
	function Jc(e, t, n) {
		const { validationOptOut: o } = t.ctor,
			r = Yc(o);
		if (!oe(t, e, 1, n) || !Gr(t, e, n, r)) return Ke(e, t, n);
		const { sel: s, mode: i, ctor: a, owner: u } = t,
			{ defineCustomElement: d, getTagName: l } = n;
		d(Me.call(l(e)));
		const f = Ge(e, a, n, { mode: i, owner: u, tagName: s, hydrated: !0 });
		if (
			((t.elm = e), (t.vm = f), wn(t, f), jr(t, n), vt(f), f.renderMode !== 0)
		) {
			const { getFirstChild: m } = n;
			Ct(m(e), t.children, e, f, !1);
		}
		return Ur(f), e;
	}
	function Ct(e, t, n, o, r) {
		let s = !1,
			i = e;
		const { renderer: a } = o;
		for (let d = 0; d < t.length; d++) {
			const l = t[d];
			g(l) ||
				(i
					? (i = Gc(i, l, a))
					: ((Ye = !0), de(l, n, a, i), (i = a.nextSibling(l.elm))));
		}
		if ((!At(5, o.apiVersion) || !r) && i) {
			Ye = !0;
			const { nextSibling: d } = a;
			do {
				const l = i;
				(i = d(i)), yn(l, n, a);
			} while (i);
		}
	}
	function Ke(e, t, n) {
		Ye = !0;
		const { getProperty: o } = n,
			r = o(e, "parentNode");
		return de(t, r, n, e), yn(e, r, n), t.elm;
	}
	function jr(e, t) {
		pn(e, t), rr(null, e, t), hn(e, e.owner);
	}
	function oe(e, t, n, o) {
		const { getProperty: r } = o;
		return r(t, "nodeType") === n;
	}
	function Gr(e, t, n, o = () => !0) {
		const { getProperty: r } = n;
		if (e.sel.toLowerCase() !== r(t, "tagName").toLowerCase()) return !1;
		const s = el(e, t, n, o),
			i = o("class") ? tl(e, t, n) : !0,
			a = o("style") ? nl(e, t, n) : !0;
		return s && i && a;
	}
	function Zc(e, t) {
		return !!(String(e) === t || (g(t) && (c(e) || g(e))));
	}
	function el(e, t, n, o) {
		const {
			data: { attrs: r = {} },
		} = e;
		let s = !0;
		for (const [i, a] of Object.entries(r)) {
			if (!o(i)) continue;
			const { owner: u } = e,
				{ getAttribute: d } = n,
				l = d(t, i);
			Zc(a, l) || (s = !1);
		}
		return s;
	}
	function tl(e, t, n) {
		const { data: o, owner: r } = e;
		let { className: s, classMap: i } = o;
		const { getProperty: a, getClassList: u, getAttribute: d } = n,
			l = tr(r, !1),
			f = Ea(e) ? pa(e) : null;
		if (!g(l) || !g(f))
			if (c(s))
				if (!c(i))
					i = Object.assign(
						Object.assign(Object.assign({}, i), g(l) ? {} : { [l]: !0 }),
						g(f) ? {} : { [f]: !0 },
					);
				else {
					const h = [l, f],
						N = Dt.call(h, (v) => !g(v));
					N.length && (s = Te.call(N, " "));
				}
			else {
				const h = [l, s, f],
					N = Dt.call(h, (v) => !g(v));
				s = Te.call(N, " ");
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
	function nl(e, t, n) {
		const {
				data: { style: o, styleDecls: r },
			} = e,
			{ getAttribute: s } = n,
			i = s(t, "style") || "";
		let a,
			u = !0;
		if (!c(o) && o !== i) (u = !1), (a = o);
		else if (!c(r)) {
			const d = Qs(i),
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
			F(d).length > r.length && (u = !1), (a = Te.call(l, ";"));
		}
		return u;
	}
	function ol(e, t, n, o) {
		const { getProperty: r, getAttribute: s } = o;
		if (r(e, "nodeType") === 3)
			return oe(n, t, 3, o) ? r(e, we) === r(t, we) : !1;
		if (r(e, "nodeType") === 8)
			return oe(n, t, 8, o) ? r(e, we) === r(t, we) : !1;
		if (!oe(n, t, 1, o)) return !1;
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
	function rl(e) {
		kt.isFalse(
			Yr,
			"Hooks are already overridden, only one definition is allowed.",
		),
			(Yr = !0),
			oc(e.sanitizeHtmlContent);
	}
	const sl = ["slots", "stylesheetToken", "stylesheets", "renderMode"],
		il = ["$scoped$"],
		al = [
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
	let Ln = !1;
	function cl(e) {
		switch (e) {
			case "pop":
				return no;
			case "push":
				return M;
			case "shift":
				return oo;
			case "unshift":
				return Je;
			case "reverse":
				return ws;
			case "sort":
				return bs;
			case "fill":
				return Es;
			case "splice":
				return _t;
			case "copyWithin":
				return ms;
		}
	}
	function Kr(e, t, n) {
		De(t, { propertyName: n });
	}
	function In(e) {
		Kr("template", "TemplateMutation", e);
	}
	function ll(e) {
		Kr("stylesheet", "StylesheetMutation", e);
	}
	function ul(e) {
		for (const t of al) {
			const n = cl(t);
			e[t] = function () {
				return In("stylesheets"), n.apply(this, arguments);
			};
		}
	}
	function dl(e) {
		for (const t of il) {
			let n = e[t];
			R(e, t, {
				enumerable: !0,
				configurable: !0,
				get() {
					return n;
				},
				set(o) {
					ll(t), (n = o);
				},
			});
		}
	}
	function fl(e) {
		Pn(e, (t) => {
			H(t) ? ul(t) : dl(t);
		});
	}
	function Yu(e) {
		Pn(e, (t) => {
			Ne(t);
		});
	}
	function Pn(e, t) {
		t(e);
		for (let n = 0; n < e.length; n++) {
			const o = e[n];
			H(o) ? Pn(o, t) : t(o);
		}
	}
	function pl(e) {
		c(e.stylesheets) || fl(e.stylesheets);
		for (const n of sl) {
			let o = e[n];
			R(e, n, {
				enumerable: !0,
				configurable: !0,
				get() {
					return o;
				},
				set(r) {
					Ln || In(n), (o = r);
				},
			});
		}
		const t = G(e, "stylesheetTokens");
		R(e, "stylesheetTokens", {
			enumerable: !0,
			configurable: !0,
			get: t.get,
			set(n) {
				In("stylesheetTokens"), (Ln = !0), t.set.call(this, n), (Ln = !1);
			},
		});
	}
	function hl(e) {
		R(e, "stylesheetTokens", {
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
	function ml(e) {
		hl(e),
			It(() => {
				pl(e);
			});
	}
	function gl(e) {
		let t = null;
		if (!c(e)) {
			const n = q(e);
			c(n) || (t = n.def.ctor);
		}
		return t;
	}
	function El(e) {
		return Fo(e);
	}
	function yl(e, t) {
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
	function wl(e, t) {
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
	const bl = {
		name: "LightningElementFormatter",
		header(e, t) {
			const n = q(e);
			return !c(n) && (c(t) || !t.skip)
				? e instanceof HTMLElement
					? yl(e, n.component)
					: wl(e, n.debugInfo)
				: null;
		},
		hasBody() {
			return !1;
		},
	};
	function Ku() {
		const e = z.devtoolsFormatters || [];
		M.call(e, bl), (z.devtoolsFormatters = e);
	}
	const zr =
			D(CSSStyleSheet.prototype.replaceSync) && H(document.adoptedStyleSheets),
		qr = new Map();
	function vl(e) {
		const t = document.createElement("style");
		return (t.type = "text/css"), (t.textContent = e), t;
	}
	function Nl(e, t) {
		const { element: n, usedElement: o } = t;
		return o ? n.cloneNode(!0) : ((t.usedElement = !0), n);
	}
	function Cl(e) {
		const t = new CSSStyleSheet();
		return t.replaceSync(e), t;
	}
	function Sl(e, t, n) {
		const { adoptedStyleSheets: o } = t,
			{ stylesheet: r } = n;
		o.push(r);
	}
	function Qr(e, t, n) {
		const o = Nl(e, n);
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
				? (n.stylesheet = Cl(e))
				: !t && c(n.element) && (n.element = vl(e)),
			n
		);
	}
	function Tl(e) {
		const t = Xr(e, !1);
		t.global || ((t.global = !0), Qr(e, document.head, t));
	}
	function Ml(e, t) {
		const n = Xr(e, zr);
		let { roots: o } = n;
		if (c(o)) o = n.roots = new WeakSet();
		else if (o.has(t)) return;
		o.add(t), zr ? Sl(e, t, n) : Qr(e, t, n);
	}
	function kl(e, t) {
		c(t) ? Tl(e) : Ml(e, t);
	}
	const Jr = new Map(),
		Fn = new WeakSet();
	let Bn = !1,
		Wn,
		xn,
		Hn,
		Un;
	const Zr = new WeakMap(),
		es = new WeakMap(),
		ts = new WeakMap(),
		ns = new WeakMap(),
		Dl = (e, t) => {
			const n = !c(e),
				o = !c(t);
			class r extends HTMLElement {
				constructor(i) {
					super();
					Bn
						? (Zr.set(this, Wn),
							es.set(this, xn),
							ts.set(this, Hn),
							ns.set(this, Un),
							i(this))
						: (n || o) && Fn.add(this);
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
						Fn.has(this) || e(this);
					}),
				o &&
					(r.prototype.disconnectedCallback = function () {
						Fn.has(this) || t(this);
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
			(o = Dl(t, n)), customElements.define(e, o), Jr.set(e, o);
		}
		return o;
	}
	const _l = (e, t, n, o, r, s, i, a) => {
		const u = os(e, n, o);
		(Wn = r), (xn = s), (Hn = i), (Un = a), (Bn = !0);
		try {
			return new u(t);
		} finally {
			(Bn = !1), (Wn = void 0), (xn = void 0), (Hn = void 0), (Un = void 0);
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
				constructor(y, { setNewContext: k, setDisconnectedCallback: x }) {
					super(y, { bubbles: !0, composed: !0 });
					(this.setNewContext = k), (this.setDisconnectedCallback = x);
				}
			}
			function f(p, y, k) {
				Qe(p, new l(y, k));
			}
			function m(p, y, k) {
				qe(p, y, (x) => {
					x.stopImmediatePropagation();
					const { setNewContext: nu, setDisconnectedCallback: ou } = x;
					k({ setNewContext: nu, setDisconnectedCallback: ou });
				});
			}
			function E(p, y) {
				return p.cloneNode(y);
			}
			function w(p, y) {
				return u(y)
					? document.createElement(p)
					: document.createElementNS(y, p);
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
			function T(p, y, k) {
				y.insertBefore(p, k);
			}
			function O(p, y) {
				y.removeChild(p);
			}
			function ee(p) {
				return p.nextSibling;
			}
			function be(p) {
				return p.previousSibling;
			}
			function ve(p, y) {
				return d(p.shadowRoot) ? p.attachShadow(y) : p.shadowRoot;
			}
			function A(p, y) {
				p.nodeValue = y;
			}
			function Gn(p, y) {
				return p[y];
			}
			function Yn(p, y, k) {
				p[y] = k;
			}
			function Kn(p, y, k) {
				return u(k) ? p.getAttribute(y) : p.getAttributeNS(k, y);
			}
			function zn(p, y, k, x) {
				return u(x) ? p.setAttribute(y, k) : p.setAttributeNS(x, y, k);
			}
			function qn(p, y, k) {
				u(k) ? p.removeAttribute(y) : p.removeAttributeNS(k, y);
			}
			function qe(p, y, k, x) {
				p.addEventListener(y, k, x);
			}
			function Tt(p, y, k, x) {
				p.removeEventListener(y, k, x);
			}
			function Qe(p, y) {
				return p.dispatchEvent(y);
			}
			function Qn(p) {
				return p.classList;
			}
			function Xn(p, y, k, x) {
				p.style.setProperty(y, k, x ? "important" : "");
			}
			function Mt(p) {
				return p.getBoundingClientRect();
			}
			function ls(p, y) {
				return p.querySelector(y);
			}
			function xl(p, y) {
				return p.querySelectorAll(y);
			}
			function Hl(p, y) {
				return p.getElementsByTagName(y);
			}
			function Ul(p, y) {
				return p.getElementsByClassName(y);
			}
			function jl(p) {
				return p.children;
			}
			function Gl(p) {
				return p.childNodes;
			}
			function Yl(p) {
				return p.firstChild;
			}
			function Kl(p) {
				return p.firstElementChild;
			}
			function zl(p) {
				return p.lastChild;
			}
			function ql(p) {
				return p.lastElementChild;
			}
			function Ql(p) {
				return p.isConnected;
			}
			function Xl(p, y) {
				a.invariant(p instanceof HTMLElement, y);
			}
			function Jl(p) {
				return p.ownerDocument;
			}
			function Zl(p) {
				return p.tagName;
			}
			function eu(p) {
				return tu.call(p);
			}
			const tu =
				typeof ElementInternals != "undefined"
					? HTMLElement.prototype.attachInternals
					: () => {
							throw new Error(
								"attachInternals API is not supported in this browser environment.",
							);
						};
			return (
				(n.addEventListener = qe),
				(n.assertInstanceOfHTMLElement = Xl),
				(n.attachInternals = eu),
				(n.attachShadow = ve),
				(n.cloneNode = E),
				(n.createComment = N),
				(n.createElement = w),
				(n.createFragment = v),
				(n.createText = h),
				(n.dispatchEvent = Qe),
				(n.getAttribute = Kn),
				(n.getBoundingClientRect = Mt),
				(n.getChildNodes = Gl),
				(n.getChildren = jl),
				(n.getClassList = Qn),
				(n.getElementsByClassName = Ul),
				(n.getElementsByTagName = Hl),
				(n.getFirstChild = Yl),
				(n.getFirstElementChild = Kl),
				(n.getLastChild = zl),
				(n.getLastElementChild = ql),
				(n.getProperty = Gn),
				(n.getTagName = Zl),
				(n.insert = T),
				(n.isConnected = Ql),
				(n.nextSibling = ee),
				(n.ownerDocument = Jl),
				(n.previousSibling = be),
				(n.querySelector = ls),
				(n.querySelectorAll = xl),
				(n.registerContextConsumer = f),
				(n.registerContextProvider = m),
				(n.remove = O),
				(n.removeAttribute = qn),
				(n.removeEventListener = Tt),
				(n.setAttribute = zn),
				(n.setCSSStyleProperty = Xn),
				(n.setProperty = Yn),
				(n.setText = A),
				n
			);
		})({});
		return Object.setPrototypeOf(t, e), t;
	}
	const X = Q(rs(null), {
		insertStylesheet: kl,
		createCustomElement: _l,
		defineCustomElement: os,
		isSyntheticShadowDefined: Se.call(Element.prototype, co),
	});
	function Ol(e, t) {
		if (e.shadowRoot) {
			const n = e.shadowRoot;
			for (; !g(n.firstChild); ) n.removeChild(n.firstChild);
		}
		if (t.renderMode === "light")
			for (; !g(e.firstChild); ) e.removeChild(e.firstChild);
	}
	function ss(e, t, n) {
		const o = Ge(e, t, X, {
			mode: "open",
			owner: null,
			tagName: e.tagName.toLowerCase(),
			hydrated: !0,
		});
		for (const [r, s] of Object.entries(n)) e[r] = s;
		return o;
	}
	function Al(e, t, n = {}) {
		if (!(e instanceof Element))
			throw new TypeError(
				`"hydrateComponent" expects a valid DOM element as the first parameter but instead received ${e}.`,
			);
		if (!D(t))
			throw new TypeError(
				`"hydrateComponent" expects a valid component constructor as the second parameter but instead received ${t}.`,
			);
		if (!tt(n) || g(n))
			throw new TypeError(
				`"hydrateComponent" expects an object as the third parameter but instead received ${n}.`,
			);
		if (q(e)) {
			console.warn(
				'"hydrateComponent" expects an element that is not hydrated.',
				e,
			);
			return;
		}
		try {
			const { defineCustomElement: o, getTagName: r } = X;
			o(Me.call(r(e)));
			const s = ss(e, t, n);
			jc(s);
		} catch (o) {
			console.error("Recovering from error while hydrating: ", o),
				Ol(e, t),
				ss(e, t, n),
				On(e);
		}
	}
	function Vl(e) {
		return e.CustomElementConstructor;
	}
	function is(e) {
		const t = X.getChildNodes(e);
		for (let n = t.length - 1; n >= 0; n--) X.remove(t[n], e);
	}
	function $l(e) {
		var t;
		const n = aa(e),
			{ observedAttributes: o } = n,
			{ attributeChangedCallback: r } = n.prototype;
		return (
			(t = class extends HTMLElement {
				constructor() {
					super();
					g(this.shadowRoot) || is(this.shadowRoot);
					const { shadowMode: s, renderMode: i } = Dc(e, X);
					!(i === 1 && s === 0) && this.childNodes.length > 0 && is(this),
						Ge(this, e, X, {
							mode: "open",
							owner: null,
							tagName: this.tagName,
						});
				}
				connectedCallback() {
					On(this);
				}
				disconnectedCallback() {
					An(this);
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
		St = new WeakMap(),
		jn = new WeakMap();
	function ze(e, t) {
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
		Q(as.prototype, {
			appendChild(r) {
				const s = e.call(this, r);
				return ze(s, St);
			},
			insertBefore(r, s) {
				const i = t.call(this, r, s);
				return ze(i, St);
			},
			removeChild(r) {
				const s = n.call(this, r);
				return ze(s, jn);
			},
			replaceChild(r, s) {
				const i = o.call(this, r, s);
				return ze(i, jn), ze(r, St), i;
			},
		});
	}
	function Rl(e, t) {
		if (!tt(t) || g(t))
			throw new TypeError(
				`"createElement" function expects an object as second parameter but received "${te(t)}".`,
			);
		const n = t.is;
		if (!D(n))
			throw new TypeError(
				'"createElement" function expects an "is" option with a valid component constructor.',
			);
		const { createCustomElement: o } = X,
			r = Me.call(e),
			s = (E) => {
				Ge(E, n, X, {
					tagName: r,
					mode: t.mode !== "closed" ? "open" : "closed",
					owner: null,
				}),
					St.set(E, On),
					jn.set(E, An);
			};
		let i, a, u, d, l, f;
		return o(r, s, i, a, u, d, l, f);
	}
	const Ll = Node;
	function Il(e) {
		if (Y(e instanceof Ll) || e instanceof ShadowRoot) return !1;
		const t = e.getRootNode();
		return t instanceof ShadowRoot && Y(Se.call(Ce(t), "synthetic"))
			? !0
			: X.isSyntheticShadowDefined && !c(e[Vt]);
	}
	const cs = new Map();
	function Pl(e) {
		if (e === L)
			throw new TypeError(
				"Invalid Constructor. LightningElement base class can't be claimed as a custom element.",
			);
		let t = cs.get(e);
		return c(t) && ((t = $l(e)), cs.set(e, t)), t;
	}
	R(L, "CustomElementConstructor", {
		get() {
			return Pl(this);
		},
	}),
		Ne(L),
		Xe(L.prototype);
	function Fl(e, t, n, o) {
		e.addEventListener(t, n, o);
	}
	function Bl(e) {
		return Ni(e, Wl);
	}
	function Wl(e, t, n) {
		Fl(e, t, (o) => {
			o.stopImmediatePropagation();
			const { setNewContext: r, setDisconnectedCallback: s } = o;
			n({ setNewContext: r, setDisconnectedCallback: s });
		});
	}
	(S.LightningElement = L),
		(S.__unstable__ProfilerControl = ic),
		(S.__unstable__ReportingControl = Bs),
		(S.api = Li),
		(S.buildCustomElementConstructor = Vl),
		(S.createContextProvider = Bl),
		(S.createElement = Rl),
		(S.freezeTemplate = ml),
		(S.getComponentConstructor = gl),
		(S.getComponentDef = la),
		(S.hydrateComponent = Al),
		(S.isComponentConstructor = lt),
		(S.isNodeFromTemplate = Il),
		(S.parseFragment = ac),
		(S.parseSVGFragment = cc),
		(S.readonly = El),
		(S.registerComponent = fc),
		(S.registerDecorators = xi),
		(S.registerTemplate = Yi),
		(S.renderer = X),
		(S.rendererFactory = rs),
		(S.sanitizeAttribute = Ki),
		(S.setFeatureFlag = Ps),
		(S.setFeatureFlagForTest = Fs),
		(S.setHooks = rl),
		(S.swapComponent = oa),
		(S.swapStyle = ra),
		(S.swapTemplate = na),
		(S.track = Pi),
		(S.unwrap = hi),
		(S.wire = Bi),
		Object.defineProperty(S, "__esModule", { value: !0 });
});