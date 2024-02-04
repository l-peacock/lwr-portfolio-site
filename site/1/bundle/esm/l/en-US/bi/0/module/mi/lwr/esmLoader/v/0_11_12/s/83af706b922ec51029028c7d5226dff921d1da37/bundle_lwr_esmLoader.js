function p(o) {
	let e,
		t = o[0],
		n = 1;
	for (; n < o.length; ) {
		const i = o[n],
			s = o[n + 1];
		if (
			((n += 2), (i === "optionalAccess" || i === "optionalCall") && t == null)
		)
			return;
		i === "access" || i === "optionalAccess"
			? ((e = t), (t = s(t)))
			: (i === "call" || i === "optionalCall") &&
				((t = s((...a) => t.call(e, ...a))), (e = void 0));
	}
	return t;
}
class l {
	__init() {
		this.importURICache = new Map();
	}
	__init2() {
		this.modifiers = "";
	}
	constructor(e) {
		l.prototype.__init.call(this),
			l.prototype.__init2.call(this),
			this.normalizeMetadata(e),
			(this.mappingEndpoint = p([e, "optionalAccess", (t) => t.importMappings])
				? void 0
				: p([
						e,
						"optionalAccess",
						(t) => t.endpoints,
						"optionalAccess",
						(t) => t.uris,
						"access",
						(t) => t.mapping,
					])),
			p([
				e,
				"optionalAccess",
				(t) => t.endpoints,
				"optionalAccess",
				(t) => t.modifiers,
			]) &&
				(this.modifiers = Object.entries(e.endpoints.modifiers).reduce(
					(t, [n, i]) => (t += `${n}=${i}&`),
					"?",
				));
	}
	normalizeMetadata(e) {
		if (e && e.imports)
			for (const [t, n] of Object.entries(e.imports))
				t &&
					n &&
					(Array.isArray(n) ? n : []).forEach((s) => {
						this.importURICache.set(s, t);
					});
	}
	async fetchMappings(e) {
		const t = `${this.mappingEndpoint}${encodeURIComponent(e)}${this.modifiers}`,
			n = await globalThis.fetch(t);
		if (n.ok) {
			const i = await n.json();
			this.normalizeMetadata(i);
		}
	}
	async resolve(e) {
		let t = this.importURICache.get(e);
		return (
			!t &&
				this.mappingEndpoint &&
				(await this.fetchMappings(e), (t = this.importURICache.get(e))),
			t
		);
	}
}
class d {
	constructor(e) {
		this.importURICache = e && e.imports ? e : { imports: {} };
	}
	legacyResolve(e) {
		return this.importURICache.imports[e];
	}
}
function h(o) {
	let e,
		t = o[0],
		n = 1;
	for (; n < o.length; ) {
		const i = o[n],
			s = o[n + 1];
		if (
			((n += 2), (i === "optionalAccess" || i === "optionalCall") && t == null)
		)
			return;
		i === "access" || i === "optionalAccess"
			? ((e = t), (t = s(t)))
			: (i === "call" || i === "optionalCall") &&
				((t = s((...a) => t.call(e, ...a))), (e = void 0));
	}
	return t;
}
let u, r, c;
function f(o) {
	u = o;
	const { imports: e, index: t, importMappings: n, endpoints: i } = o;
	(r = new l({ imports: e, index: t, endpoints: i, importMappings: n })),
		(c = new d(n));
}
async function m(o, e) {
	return import(await C(o, e));
}
async function C(o, e) {
	if (o.includes("://") || o.startsWith("/")) return o;
	if (!r || !c) throw new Error("The ESM Loader was not initialized");
	if (r) {
		const i = await r.resolve(o);
		if (i) return i;
	}
	if (c) {
		const i = c.legacyResolve(o);
		if (i) return i;
	}
	const { endpoints: t } = u;
	if (
		!h([t, "optionalAccess", (i) => i.uris, "optionalAccess", (i) => i.module])
	)
		throw new Error(`Unable to resolve the URL for "${o}"`);
	let n = t.uris.module + encodeURIComponent(o);
	return (
		e && (n += `?importer=${encodeURIComponent(e)}`),
		t.modifiers &&
			(n += Object.entries(t.modifiers).reduce(
				(i, [s, a]) => (i += `${s}=${a}&`),
				e ? "&" : "?",
			)),
		n
	);
}
export { f as init, m as load };
