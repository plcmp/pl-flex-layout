import { PlElement, html, css } from "polylib";

class PlFlexLayout extends PlElement {
    static properties = {
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

    static  css = css`
        :host {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            width: fit-content;
            height: fit-content;
            position: relative;
            box-sizing: border-box;
            flex-shrink: 0;
            gap: var(--space-md);
            min-width: 0;
            max-width: 100%;
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
            width: 100%;
            flex-shrink: 1;
            max-width: 100%;
        }

        :host([fit]) {
            height: 100%;
            width: 100%;
            flex: 1;
            max-width: 100%;
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

    static template = html`
        <slot></slot>
    `

_labelWidthObserver(val) {
    this.style.setProperty('--label-width', val + 'px');
    this.querySelectorAll('*').forEach((el) => {
        if (el.hasProp && el.hasProp('orientation') && !el.orientation) {
            el.orientation = 'horizontal';
        }
    });
}
}

customElements.define('pl-flex-layout', PlFlexLayout);
