import { r as registerInstance, h, H as Host } from './core-9eaea7c8.js';

const EclButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = 'primary';
    }
    getClass() {
        return [
            `ecl-button`,
            `ecl-button--${this.type}`,
            this.styleClass
        ].join(' ');
    }
    render() {
        return (h(Host, { type: "primary", class: this.getClass() }, h("span", { class: "ecl-button__container" }, h("span", { class: "ecl-button__label" }, h("slot", null)), h("slot", { name: "icon" }))));
    }
    static get style() { return ""; }
};

export { EclButton as ecl_button };
