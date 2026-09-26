import { LightningElement, api } from "lwc";

/**
 * Renders a vertical list of labelled, icon-led links, e.g. for pointing
 * visitors at other places to find you.
 */
export default class LinkList extends LightningElement {
	/**
	 * The links to render.
	 * @type {{label: string, href: string, ariaLabel: string, target: string, iconName: string}[]}
	 */
	@api
	get links() {
		return this._links;
	}
	set links(value) {
		this._links = value;
	}

	_links = [];
}
