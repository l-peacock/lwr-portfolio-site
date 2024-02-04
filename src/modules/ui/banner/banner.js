import { LightningElement, api } from "lwc";

export default class Banner extends LightningElement {
	/**
	 * The title to display in the banner
	 * @type {string}
	 */
	@api
	get title() {
		return this._title;
	}
	set title(value) {
		this._title = value;
	}

	/**
	 * The subtitle to display in the banner
	 * @type {string}
	 */
	@api
	get subtitle() {
		return this._subtitle;
	}
	set subtitle(value) {
		this._subtitle = value;
	}

	@api
	get showBackgroundImage() {
		return this._showBackgroundImage;
	}
	set showBackgroundImage(value) {
		this._showBackgroundImage = value;
	}

	get computedClasses() {
		return this.showBackgroundImage === true
			? `banner-wrapper background-image`
			: `banner-wrapper`;
	}

	_title;
	_subtitle;
	_showBackgroundImage = false;
}
