var s = (function (t) {
	return (t[(t.Start = 0)] = "Start"), (t[(t.End = 1)] = "End"), t;
})(s || {});
let a;
function g(t) {
	a = t;
}
const o = globalThis.performance,
	f =
		typeof o != "undefined" &&
		typeof o.mark == "function" &&
		typeof o.clearMarks == "function" &&
		typeof o.measure == "function" &&
		typeof o.clearMeasures == "function";
function l(t, n) {
	return n ? `${t}-${n}` : t;
}
function m(t, n, r) {
	const e = l(t, n);
	return n && r ? `${e}_${r}` : e;
}
function k(t, n) {
	const r = t || n ? { ...n } : null;
	return r && t && (r.specifier = t), r;
}
function M({ id: t, specifier: n, specifierIndex: r, metadata: e }) {
	if (a) {
		a({ id: t, phase: s.Start, specifier: n, metadata: e });
		return;
	}
	if (f) {
		const u = m(t, n, r),
			c = k(n, e);
		o.mark(u, { detail: c });
	}
}
function N({ id: t, specifier: n, specifierIndex: r, metadata: e }) {
	if (a) a({ id: t, phase: s.End, specifier: n, metadata: e });
	else if (f) {
		const u = m(t, n, r),
			c = l(t, n),
			p = k(n, e);
		o.measure(c, { start: u, detail: p }), o.clearMarks(u), o.clearMeasures(c);
	}
}
export { g as attachDispatcher, N as logOperationEnd, M as logOperationStart };
