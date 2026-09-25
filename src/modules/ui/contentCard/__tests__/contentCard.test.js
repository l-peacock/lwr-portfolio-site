import { createElement } from "lwc";
import ContentCard from "ui/contentCard";

let element; // Declare an element reference which can be shared between tests.
describe("ui-content-card", () => {
	beforeEach(() => {
		element = createElement("ui-content-card", {
			is: ContentCard,
		});
	});

	afterEach(() => {
		// The jsdom instance is shared across test cases in a single file so reset the DOM
		while (document.body.firstChild) {
			document.body.removeChild(document.body.firstChild);
		}
	});

	it("default properties", () => {
		document.body.appendChild(element);
		expect(element.type).toBe("text");
	});

	it("should render the provided title and text for a text card", () => {
		const testTitle = "Card title";
		const testText = "Card body copy";
		element.title = testTitle;
		element.text = testText;
		document.body.appendChild(element);

		const headingEl = element.shadowRoot.querySelector("h1");
		const textEl = element.shadowRoot.querySelector("span");
		expect(headingEl.textContent).toBe(testTitle);
		expect(textEl.textContent).toBe(testText);
	});

	it("should not render the text article when type is not text", () => {
		element.type = "link";
		document.body.appendChild(element);

		expect(element.shadowRoot.querySelector("article")).toBeNull();
	});

	it("is accessible", async () => {
		element.title = "Card title";
		element.text = "Card body copy";
		document.body.appendChild(element);
		await Promise.resolve();
		await expect(element).toBeAccessible();
	});
});
