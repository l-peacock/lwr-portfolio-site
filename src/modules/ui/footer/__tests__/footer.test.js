import { createElement } from "lwc";
import Footer from "ui/footer";

let element; // Declare an element reference which can be shared between tests.
describe("ui-footer", () => {
	beforeEach(() => {
		element = createElement("ui-footer", {
			is: Footer,
		});
	});

	afterEach(() => {
		// The jsdom instance is shared across test cases in a single file so reset the DOM
		while (document.body.firstChild) {
			document.body.removeChild(document.body.firstChild);
		}
	});

	it("should display the expected footer text", () => {
		const currentYear = new Date().getFullYear();
		const expectedText = `© ${currentYear} Lachlan Peacock`;
		document.body.appendChild(element);

		const footerSpanEl = element.shadowRoot.querySelector("span");
		expect(footerSpanEl.textContent).toBe(expectedText);
	});

	it("should render at least one link", () => {
		document.body.appendChild(element);
		const linkEls = element.shadowRoot.querySelectorAll("a");
		expect(linkEls.length).toBeGreaterThan(0);
	});

	it("is accessible", async () => {
		document.body.appendChild(element);
		await Promise.resolve();
		expect(element).toBeAccessible();
	});
});
