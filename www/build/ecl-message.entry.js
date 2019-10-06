import { r as registerInstance, h } from './core-9eaea7c8.js';

const EclMessage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.typeClass = 'info';
    }
    getClass() {
        return [
            `ecl-message`,
            `ecl-message--${this.typeClass}`,
            this.styleClass
        ].join(' ');
    }
    getIcon() {
        if (this.typeClass === 'info') {
            return 'notifications--information';
        }
        else if (this.typeClass === 'success') {
            return 'notifications--success';
        }
        else if (this.typeClass === 'warning') {
            return 'notifications--warning';
        }
        else if (this.typeClass === 'error') {
            return 'notifications--error';
        }
        else {
            return 'notifications--information';
        }
    }
    render() {
        return (h("div", { role: "alert", class: this.getClass() }, h("ecl-icon", { size: "l", styleClass: "ecl-message__icon", icon: this.getIcon() }), h("div", { class: "ecl-message__content" }, h("ecl-button", { styleClass: "ecl-message__close", type: "ghost" }, "Close", h("ecl-icon", { slot: "icon", icon: "ui--close", size: "s" })), h("div", { class: "ecl-message__title" }, this.title), h("p", { class: "ecl-message__description" }, h("slot", null)))));
    }
    static get style() { return ""; }
};

export { EclMessage as ecl_message };
