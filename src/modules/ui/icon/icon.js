import { LightningElement, api } from "lwc";

import { icon } from "@fortawesome/fontawesome-svg-core";
import {
	faLinkedin as linkedin,
	faGithub as github,
	faSalesforce as salesforce,
} from "@fortawesome/free-brands-svg-icons";

export default class Icon extends LightningElement {
	iconDefinitions = {
		linkedin,
		github,
		salesforce,
	};

	@api
	get iconName() {
		return this._iconName;
	}
	set iconName(value) {
		this._iconName = value;
		this.iconDef = this.iconDefinitions[value];
	}

	_iconName;
	iconDef;

	connectedCallback() {
		this.template.appendChild(icon(this.iconDef).node[0]);
	}
}
