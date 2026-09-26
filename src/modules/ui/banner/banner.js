import { LightningElement, api } from "lwc";

const TYPING_SPEED_MS = 90;
const TYPING_JITTER_MS = 60;
const DELETING_SPEED_MS = 45;
const DELETING_JITTER_MS = 30;
const PAUSE_AFTER_TYPED_MS = 1400;
const PAUSE_AFTER_DELETED_MS = 300;

/**
 * A hero banner which displays a subtitle and an animated title for the
 * page. `prefix` is shown as-is, and the title cycles through the provided
 * `titles`, each one typed and deleted one character at a time after the
 * prefix, styled to look like a terminal being typed into.
 */
export default class Banner extends LightningElement {
	/**
	 * Static text shown before the animated title, e.g. "hello, "
	 * @type {string}
	 */
	@api
	get prefix() {
		return this._prefix;
	}
	set prefix(value) {
		this._prefix = value;
	}

	/**
	 * The phrases to cycle through after `prefix` in the animated title.
	 * @type {string[]}
	 */
	@api
	get titles() {
		if (!Array.isArray(this._titles) || this._titles.length === 0)
			console.warn(
				"ui-banner should be provided with a non-empty `titles` array, received:",
				this._titles,
			);
		return this._titles;
	}
	set titles(value) {
		this._titles = value;
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
	 * Animates the title with a typewriter effect, cycling through `titles`
	 * @type {boolean}
	 */
	@api
	get typeWriterEffect() {
		return this._typeWriterEffect;
	}
	set typeWriterEffect(value) {
		this._typeWriterEffect = value;
	}

	get headingClasses() {
		if (this.typeWriterEffect !== true) return null;
		return this.prefersReducedMotion ? "typewriter static" : "typewriter";
	}

	/**
	 * Visitors who've asked their device for reduced motion shouldn't be
	 * shown an indefinitely-looping animation.
	 */
	get prefersReducedMotion() {
		return (
			typeof window !== "undefined" &&
			typeof window.matchMedia === "function" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches
		);
	}

	displayedText = "";
	ariaLabel;

	_prefix;
	_titles = [];
	_subtitle;
	_typeWriterEffect = true;
	_phrases;
	_phraseIndex = 0;
	_charIndex = 0;
	_mode = "typing";
	_timerId;

	connectedCallback() {
		this._phrases = this.titles;
		if (!this._phrases || this._phrases.length === 0) return;

		this.ariaLabel = this._accessibleLabelFor(this._phrases[0]);

		if (this.typeWriterEffect !== true || this.prefersReducedMotion) {
			this.displayedText = this._phrases[0];
			return;
		}

		this._scheduleNext(PAUSE_AFTER_DELETED_MS);
	}

	disconnectedCallback() {
		clearTimeout(this._timerId);
	}

	_accessibleLabelFor(phrase) {
		return `${this.prefix ?? ""}${phrase}`;
	}

	_scheduleNext(delay) {
		this._timerId = setTimeout(() => this._tick(), delay);
	}

	/**
	 * A base delay with a bit of randomness either side of it, so the typing
	 * doesn't feel like a metronome.
	 */
	_jitter(baseMs, jitterMs) {
		return baseMs + (Math.random() * jitterMs - jitterMs / 2);
	}

	_tick() {
		const phrase = this._phrases[this._phraseIndex];

		if (this._mode === "typing") {
			this._charIndex += 1;
			this.displayedText = phrase.slice(0, this._charIndex);

			if (this._charIndex === phrase.length) {
				this._mode = "deleting";
				this._scheduleNext(PAUSE_AFTER_TYPED_MS);
			} else {
				this._scheduleNext(this._jitter(TYPING_SPEED_MS, TYPING_JITTER_MS));
			}
		} else {
			this._charIndex -= 1;
			this.displayedText = phrase.slice(0, this._charIndex);

			if (this._charIndex === 0) {
				this._phraseIndex = (this._phraseIndex + 1) % this._phrases.length;
				this.ariaLabel = this._accessibleLabelFor(
					this._phrases[this._phraseIndex],
				);
				this._mode = "typing";
				this._scheduleNext(PAUSE_AFTER_DELETED_MS);
			} else {
				this._scheduleNext(this._jitter(DELETING_SPEED_MS, DELETING_JITTER_MS));
			}
		}
	}
}
