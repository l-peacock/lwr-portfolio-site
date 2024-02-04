import {
	init as y,
	load as T,
} from "/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2FesmLoader%2Fv%2F0_11_12/s/83af706b922ec51029028c7d5226dff921d1da37/bundle_lwr_esmLoader.js";
import {
	logOperationStart as d,
	logOperationEnd as c,
} from "/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2Fprofiler%2Fv%2F0_11_12/s/b50665a620f8cb02eec11a477c0e7b590786282c/bundle_lwr_profiler.js";
import {
	hydrateComponent as E,
	createElement as F,
} from "/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F5_0_0/s/b005bb4c2c907fd35a0797f2b8899108a9a5b779/bundle_lwc.js";
const L = globalThis.LWR;
globalThis.LWR.define
	? (globalThis.LWR = Object.freeze({ define: globalThis.LWR.define }))
	: delete globalThis.LWR;
function R() {
	return L;
}
const v = "lwr.bootstrap.",
	_ = `${v}end`,
	h = "lwr.bootstrap.init",
	l = "lwr.bootstrap.init.module";
function x(e, t, o) {
	E(e, t, o);
}
function g(e, t) {
	return F(e, { is: t });
}
function w(e) {
	return e
		.replace(/\/v\/[a-zA-Z0-9-_.]+$/, "")
		.replace("/", "-")
		.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const A = /-([a-z])/g;
function O(e) {
	return e.replace(A, (t) => t[1].toUpperCase());
}
function S(e, t = {}) {
	if (typeof customElements == "undefined" || typeof document == "undefined") {
		d({ id: _ });
		return;
	}
	d({ id: h });
	let o = 0;
	for (const [r, p] of e) {
		const a = w(r);
		if (!document.body.querySelector(a)) {
			d({ id: l, specifier: r, specifierIndex: ++o });
			const n = g(a, p),
				i = document.querySelector("[lwr-root]");
			i ? i.appendChild(n) : document.body.appendChild(n),
				c({
					id: l,
					specifier: r,
					specifierIndex: o,
					metadata: { renderMode: "spa" },
				});
			continue;
		}
		const I = document.querySelectorAll(a);
		for (const n of I) {
			d({ id: l, specifier: r, specifierIndex: ++o });
			const i = n.dataset.lwrPropsId;
			if (i) {
				x(n, p, t[i] || {}),
					c({
						id: l,
						specifier: r,
						specifierIndex: o,
						metadata: { renderMode: "ssr" },
					});
				continue;
			}
			const s = g(a, p);
			for (const { name: f, value: u } of n.attributes) {
				s.setAttribute(f, u);
				const b = O(f);
				b in s && (s[b] = u);
			}
			for (; n.childNodes.length > 0; ) s.appendChild(n.childNodes[0]);
			const m = n.parentElement;
			m && m.replaceChild(s, n),
				c({
					id: l,
					specifier: r,
					specifierIndex: o,
					metadata: { renderMode: "csr" },
				});
		}
	}
	c({ id: h }), d({ id: _ });
}
const C = R(),
	{ imports: N, index: P, importMappings: M, endpoints: W } = C;
y({ imports: N, index: P, importMappings: M, endpoints: W });
const { rootComponents: j, serverData: U } = C;
Promise.all(
	j.map(async (e) => {
		const t = w(e);
		return T(e, "@lwrjs/app-service/base/module/esm/v/0_11_12").then(
			({ default: o }) => {
				S([[t, o]], U);
			},
		);
	}),
);
