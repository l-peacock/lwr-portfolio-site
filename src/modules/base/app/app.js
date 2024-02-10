import { LightningElement } from "lwc";

import { MAIN_CONTENT } from "./mainContent";
/**
 * The base-level app. This should primarily be used to determine the layout of ui-level components.
 * Make sure you refer to semantic elements here: https://www.w3schools.com/html/html5_semantic_elements.asp
 */
export default class HelloWorldApp extends LightningElement {
	CONTENT = MAIN_CONTENT;
}
