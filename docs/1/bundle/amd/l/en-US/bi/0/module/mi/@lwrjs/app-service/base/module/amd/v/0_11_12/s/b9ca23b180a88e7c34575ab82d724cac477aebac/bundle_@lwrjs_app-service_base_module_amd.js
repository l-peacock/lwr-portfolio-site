LWR.define("lwr/metrics/v/0_11_12", ["exports"], function (e) {
	"use strict";
	const n = "lwr.bootstrap.",
		o = `${n}end`,
		a = `${n}error`,
		_ = `${a}.count`,
		d = `${n}duration`,
		c = "lwr.bootstrap.init",
		U = `${c}.duration`,
		r = "lwr.bootstrap.init.module",
		M = `${r}.duration`,
		i = `${r}.count`,
		t = "lwr.loader.",
		R = `${t}module.define`,
		T = `${R}.count`,
		I = `${t}moduleRegistry.dynamicLoad`,
		N = `${I}.count`,
		u = `${t}module.fetch`,
		O = `${u}.count`,
		l = `${u}.duration`,
		E = `${t}module.error`,
		D = `${E}.count`,
		s = `${t}mappings.fetch`,
		A = `${s}.count`,
		C = `${s}.duration`,
		P = `${t}mappings.error`,
		g = `${P}.count`,
		f = "lwr.router.",
		L = `${f}navigate`,
		S = `${L}.count`,
		b = `${L}.duration`,
		m = `${f}view`,
		F = `${m}.duration`,
		p = `${f}error`,
		w = `${p}.count`;
	(e.BOOTSTRAP_DURATION = d),
		(e.BOOTSTRAP_END = o),
		(e.BOOTSTRAP_ERROR = a),
		(e.BOOTSTRAP_ERROR_COUNT = _),
		(e.BOOTSTRAP_PREFIX = n),
		(e.INIT = c),
		(e.INIT_DURATION = U),
		(e.INIT_MODULE = r),
		(e.INIT_MODULE_COUNT = i),
		(e.INIT_MODULE_DURATION = M),
		(e.LOADER_PREFIX = t),
		(e.MAPPINGS_ERROR = P),
		(e.MAPPINGS_ERROR_COUNT = g),
		(e.MAPPINGS_FETCH = s),
		(e.MAPPINGS_FETCH_COUNT = A),
		(e.MAPPINGS_FETCH_DURATION = C),
		(e.MODULE_DEFINE = R),
		(e.MODULE_DEFINE_COUNT = T),
		(e.MODULE_DYNAMIC_LOAD = I),
		(e.MODULE_DYNAMIC_LOAD_COUNT = N),
		(e.MODULE_ERROR = E),
		(e.MODULE_ERROR_COUNT = D),
		(e.MODULE_FETCH = u),
		(e.MODULE_FETCH_COUNT = O),
		(e.MODULE_FETCH_DURATION = l),
		(e.ROUTER_ERROR = p),
		(e.ROUTER_ERROR_COUNT = w),
		(e.ROUTER_NAV = L),
		(e.ROUTER_NAV_COUNT = S),
		(e.ROUTER_NAV_DURATION = b),
		(e.ROUTER_PREFIX = f),
		(e.ROUTER_VIEW = m),
		(e.ROUTER_VIEW_DURATION = F),
		Object.defineProperty(e, "__esModule", { value: !0 });
}),
	LWR.define(
		"lwr/init/v/0_11_12",
		[
			"exports",
			"lwr/metrics/v/0_11_12",
			"lwr/profiler/v/0_11_12",
			"lwc/v/5_0_0",
		],
		function (e, n, o, a) {
			"use strict";
			function _(i, t, R) {
				a.hydrateComponent(i, t, R);
			}
			function d(i, t) {
				return a.createElement(i, { is: t });
			}
			function c(i) {
				return i
					.replace(/\/v\/[a-zA-Z0-9-_.]+$/, "")
					.replace("/", "-")
					.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
			}
			const U = /-([a-z])/g;
			function r(i) {
				return i.replace(U, (t) => t[1].toUpperCase());
			}
			function M(i, t = {}) {
				if (
					typeof customElements == "undefined" ||
					typeof document == "undefined"
				) {
					o.logOperationStart({ id: n.BOOTSTRAP_END });
					return;
				}
				o.logOperationStart({ id: n.INIT });
				let R = 0;
				for (const [T, I] of i) {
					const N = c(T);
					if (!document.body.querySelector(N)) {
						o.logOperationStart({
							id: n.INIT_MODULE,
							specifier: T,
							specifierIndex: ++R,
						});
						const O = d(N, I),
							l = document.querySelector("[lwr-root]");
						l ? l.appendChild(O) : document.body.appendChild(O),
							o.logOperationEnd({
								id: n.INIT_MODULE,
								specifier: T,
								specifierIndex: R,
								metadata: { renderMode: "spa" },
							});
						continue;
					}
					const u = document.querySelectorAll(N);
					for (const O of u) {
						o.logOperationStart({
							id: n.INIT_MODULE,
							specifier: T,
							specifierIndex: ++R,
						});
						const l = O.dataset.lwrPropsId;
						if (l) {
							_(O, I, t[l] || {}),
								o.logOperationEnd({
									id: n.INIT_MODULE,
									specifier: T,
									specifierIndex: R,
									metadata: { renderMode: "ssr" },
								});
							continue;
						}
						const E = d(N, I);
						for (const { name: s, value: A } of O.attributes) {
							E.setAttribute(s, A);
							const C = r(s);
							C in E && (E[C] = A);
						}
						for (; O.childNodes.length > 0; ) E.appendChild(O.childNodes[0]);
						const D = O.parentElement;
						D && D.replaceChild(E, O),
							o.logOperationEnd({
								id: n.INIT_MODULE,
								specifier: T,
								specifierIndex: R,
								metadata: { renderMode: "csr" },
							});
					}
				}
				o.logOperationEnd({ id: n.INIT }),
					o.logOperationStart({ id: n.BOOTSTRAP_END });
			}
			(e.getPropFromAttrName = r),
				(e.init = M),
				(e.toKebabCase = c),
				Object.defineProperty(e, "__esModule", { value: !0 });
		},
	),
	LWR.define("lwr/preInit/v/0_11_12", ["exports"], function (e) {
		"use strict";
		const n = globalThis.LWR;
		globalThis.LWR.define
			? (globalThis.LWR = Object.freeze({ define: globalThis.LWR.define }))
			: delete globalThis.LWR;
		function o() {
			return n;
		}
		(e.getClientBootstrapConfig = o),
			Object.defineProperty(e, "__esModule", { value: !0 });
	}),
	LWR.define(
		"@lwrjs/app-service/base/module/amd/v/0_11_12",
		["lwr/loader/v/0_11_12", "lwr/preInit/v/0_11_12", "lwr/init/v/0_11_12"],
		function (e, n, o) {
			"use strict";
			const a = n.getClientBootstrapConfig(),
				{ rootComponents: _, serverData: d } = a;
			Promise.all(
				_.map(async (c) => {
					const U = o.toKebabCase(c);
					return e
						.load(c, "@lwrjs/app-service/base/module/amd/v/0_11_12")
						.then(({ default: r }) => {
							o.init([[U, r]], d);
						});
				}),
			);
		},
	);
