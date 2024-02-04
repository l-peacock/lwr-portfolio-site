import { LightningElement, api } from "lwc";

const WAVE_ANIMATION_CLASS_NAME = "emoji-wave";

export default class ContentBlock extends LightningElement {
	handleHeaderPointerOver() {
		this.refs.emojiWave.classList.add(WAVE_ANIMATION_CLASS_NAME);
	}

	handleHeaderPointerLeave() {
		this.refs.emojiWave.classList.remove(WAVE_ANIMATION_CLASS_NAME);
	}
}
