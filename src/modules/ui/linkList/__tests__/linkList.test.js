import { createElement } from "lwc";
import LinkList from "ui/linkList";

let element; // Declare an element reference which can be shared between tests.
describe("ui-link-list", () => {
	beforeEach(() => {
		element = createElement("ui-link-list", {
			is: LinkList,
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
		expect(element.links.length).toBe(0);
	});

	it("should render a link for each entry provided", () => {
		element.links = [
			{
				label: "portfolio",
				href: "https://portfolio.lachlanpeacock.com",
				ariaLabel: "Lachlan's Portfolio",
				target: "_blank",
				iconName: "portfolio",
			},
			{
				label: "github",
				href: "https://github.com/l-peacock",
				ariaLabel: "Lachlan's GitHub Profile",
				target: "_blank",
				iconName: "github",
			},
		];
		document.body.appendChild(element);

		const linkEls = element.shadowRoot.querySelectorAll("a");
		expect(linkEls.length).toBe(2);
		expect(linkEls[0].href).toBe("https://portfolio.lachlanpeacock.com/");
		expect(linkEls[0].getAttribute("aria-label")).toBe("Lachlan's Portfolio");
		expect(linkEls[0].textContent).toBe("portfolio");
	});

	it("is accessible", async () => {
		element.links = [
			{
				label: "portfolio",
				href: "https://portfolio.lachlanpeacock.com",
				ariaLabel: "Lachlan's Portfolio",
				target: "_blank",
				iconName: "portfolio",
			},
		];
		document.body.appendChild(element);
		await Promise.resolve();

		await expect(element).toBeAccessible();
	});
});
