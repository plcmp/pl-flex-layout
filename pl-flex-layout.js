import { PlElement, html, css } from "polylib";

class PlFlexLayout extends PlElement {
    static get properties() {
        return {
            vertical: {
                type: Boolean,
                reflectToAttribute: true
            },
            wrap: {
                type: Boolean,
                reflectToAttribute: true
            },
            fit: {
                type: Boolean,
                reflectToAttribute: true
            },
            stretch: {
                type: Boolean,
                reflectToAttribute: true
            },
            scrollable: {
                type: Boolean,
                reflectToAttribute: true
            },
            align: {
                type: String,
                reflectToAttribute: true,
                value: 'flex-start'
            },
            justify: {
                type: String,
                reflectToAttribute: true,
                value: 'flex-start'
            },
            hidden: {
                type: Boolean,
                reflectToAttribute: true
            }
        };
    }

    static get css() {
        return css`
            :host {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 12px;
                width: fit-content;
                height: fit-content;
                position: relative;
                box-sizing: border-box;
                overflow: hidden;
                flex-shrink: 0;
            }

            :host([hidden]) {
                display: none;
            }

            :host([vertical]) {
                flex-direction: column;
            }

            :host([wrap]) {
                flex-wrap: wrap;
            }

            :host([scrollable]) {
                overflow: auto !important;
            }

            :host([stretch]) {
                width: 100% !important;
            }

            :host([vertical][stretch]) {
                height: 100%;
            }

            :host([fit]) {
                height: 100% !important;
                width: 100% !important;
                flex-shrink: 1;
            }

            :host([justify=flex-start]) {
                justify-content: flex-start;
            }

            :host([justify=center]) {
                justify-content: center;
            }

            :host([justify=flex-end]) {
                justify-content: flex-end;
            }

            :host([justify=space-between]) {
                justify-content: space-between;
            }

            :host([align=flex-start]) {
                align-items: flex-start;
            }

            :host([align=center]) {
                align-items: center;
            }

            :host([align=flex-end]) {
                align-items: flex-end;
            }

            :host([align=baseline]) {
                align-items: baseline;
            }
       `;
    }

    static get template() { 
        return html`
            <slot></slot>
        `
    };
}

customElements.define('pl-flex-layout', PlFlexLayout);
