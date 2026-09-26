import { createElement } from "lwc";
import Banner from "ui/banner";

let element; // Declare an element reference which can be shared between tests.
describe("ui-banner", () => {
	beforeEach(() => {
		element = createElement("ui-banner", {
			is: Banner,
		});
	});

	afterEach(() => {
		jest.useRealTimers();
		jest.restoreAllMocks();
		delete window.matchMedia;

		// The jsdom instance is shared across test cases in a single file so reset the DOM
		while (document.body.firstChild) {
			document.body.removeChild(document.body.firstChild);
		}
	});

	it("default properties", () => {
		document.body.appendChild(element);
		expect(element.titles).toEqual([]);
		expect(element.subtitle).toBeUndefined();
		expect(element.typeWriterEffect).toBe(true);
	});

	it("should warn in the console when `titles` is not a non-empty array", () => {
		const consoleWarnSpy = jest.spyOn(console, "warn");
		document.body.appendChild(element);
		expect(consoleWarnSpy).toHaveBeenCalled();
	});

	it("should render the first title immediately when the typewriter effect is disabled", () => {
		element.titles = ["Static heading"];
		element.typeWriterEffect = false;
		element.subtitle = "I am a subtitle";

		document.body.appendChild(element);

		const titleEl = element.shadowRoot.querySelector("h1");
		expect(titleEl.textContent).toBe("Static heading");
		expect(element.shadowRoot.querySelector("div.typewriter")).toBeNull();

		const subtitleEl = element.shadowRoot.querySelector("h2");
		expect(subtitleEl.textContent).toBe("I am a subtitle");
	});

	it("should type and delete each title in turn, keeping the prefix fixed, looping back to the first", async () => {
		jest.useFakeTimers();
		// Typing speed is jittered with Math.random(); pinning it to 0.5
		// collapses the jitter to exactly the base speed for a deterministic test.
		jest.spyOn(Math, "random").mockReturnValue(0.5);
		element.prefix = "hi, ";
		element.titles = ["ab", "c"];

		document.body.appendChild(element);
		const titleEl = element.shadowRoot.querySelector("h1");

		expect(element.shadowRoot.querySelector("div.typewriter")).toBeTruthy();

		// Advancing fake timers runs the pending setTimeout synchronously, but
		// LWC re-renders on a microtask, so each step needs a flush before
		// the DOM reflects it.
		jest.advanceTimersByTime(300); // initial pause, then types "a"
		await Promise.resolve();
		expect(titleEl.textContent).toBe("hi, a");

		jest.advanceTimersByTime(90); // types "b"
		await Promise.resolve();
		expect(titleEl.textContent).toBe("hi, ab");

		jest.advanceTimersByTime(1400); // pauses, then deletes "b" — not the prefix
		await Promise.resolve();
		expect(titleEl.textContent).toBe("hi, a");

		jest.advanceTimersByTime(45); // deletes "a", exhausting the title
		await Promise.resolve();
		expect(titleEl.textContent).toBe("hi, ");

		jest.advanceTimersByTime(300); // pauses, then types the next title
		await Promise.resolve();
		expect(titleEl.textContent).toBe("hi, c");
	});

	it("should show the first title in full, with no cursor, when the visitor prefers reduced motion", () => {
		window.matchMedia = jest.fn().mockReturnValue({ matches: true });
		element.prefix = "hello, ";
		element.titles = ["world!", "friend!"];

		document.body.appendChild(element);

		const titleEl = element.shadowRoot.querySelector("h1");
		expect(titleEl.textContent).toBe("hello, world!");
		expect(
			element.shadowRoot.querySelector("div.typewriter.static"),
		).toBeTruthy();
	});

	it("should give the heading a stable accessible name that includes the prefix", () => {
		element.prefix = "hello, ";
		element.titles = ["world!", "friend!"];
		document.body.appendChild(element);

		const titleEl = element.shadowRoot.querySelector("h1");
		expect(titleEl.getAttribute("aria-label")).toBe("hello, world!");
	});

	it("is accessible", async () => {
		element.titles = ["I am a title"];
		element.typeWriterEffect = false;
		element.subtitle = "I am a subtitle";

		document.body.appendChild(element);
		await Promise.resolve();
		await expect(element).toBeAccessible();
	});
});
