import { LightningElement, api } from "lwc";

/**
 * A hero image banner, which displays a title and a subtitle for the page
 * It provides a optional typewriter effect for the title
 */
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

	/**
	 * Animates the title with a typewriter effect
	 * @type {boolean}
	 */
	@api
	get typeWriterEffect() {
		return this._typeWriterEffect;
	}
	set typeWriterEffect(value) {
		this._typeWriterEffect = value;
	}

	get computedClasses() {
		return this.showBackgroundImage === true
			? `banner-wrapper background-image`
			: `banner-wrapper`;
	}

	get headingClasses() {
		return this.typeWriterEffect === true ? `typewriter` : null;
	}

	_title;
	_subtitle;
	_typeWriterEffect = true;
}
