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
            },
            labelWidth: {
                type: Number,
                observer: '_labelWidthObserver'
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
                width: fit-content;
                height: fit-content;
                position: relative;
                box-sizing: border-box;
                overflow: hidden;
                flex-shrink: 0;
                gap: var(--space-md);
                --has-padding: 1;
            }

            
            :host([hidden]) {
                display: none;
            }

            :host([vertical]) {
                flex-direction: column;
                --has-padding: 0;
            }

            :host(:not([vertical])) ::slotted(*:first-child) {
                --has-padding: 0;
            }

            :host([wrap]) {
                flex-wrap: wrap;
            }

            :host([scrollable]) {
                overflow: auto !important;
            }

            :host([stretch]) {
                width: 100%;
            }

            :host([vertical][stretch]) {
                height: 100%;
            }

            :host([fit]) {
                height: 100%;
                width: 100%;
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

    _labelWidthObserver(val) {
        this.style.setProperty('--label-width', val + 'px');
        this.style.setProperty('padding-left', val + 'px');
    }
}

customElements.define('pl-flex-layout', PlFlexLayout);
