import { LightningElement, api } from "lwc";

import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default class Icon extends LightningElement {
	_prefix = "fa";
	_iconName = "globe";

	// globe;

	connectedCallback() {
		library.add(faGlobe);
	}

	renderedCallback() {
		let globe = icon({ prefix: this._prefix, iconName: this._iconName });
		console.log(globe);

		Array.from(globe.node).map((n) => this.template.appendChild(n));
	}
}
