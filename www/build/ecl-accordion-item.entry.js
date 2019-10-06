import { r as registerInstance, h, H as Host } from './core-9eaea7c8.js';

const EclAccordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isExpanded = false;
    }
    getClass() {
        return [
            `ecl-accordion2__item`,
            `ecl-u-d-block`,
            this.styleClass
        ].join(' ');
    }
    onItemClick() {
        this.isExpanded = !this.isExpanded;
    }
    render() {
        return (h(Host, { class: this.getClass() }, h("h3", { class: "ecl-accordion2__title" }, h("button", { onClick: this.onItemClick.bind(this), type: "button", "aria-expanded": `${this.isExpanded}`, class: "ecl-accordion2__toggle", "data-ecl-accordion2-toggle": "true", "aria-controls": "accordion-example-content" }, h("span", { class: "ecl-accordion2__toggle-flex" }, (!this.isExpanded) ? h("ecl-icon", { icon: "ui--plus", size: "m", styleClass: "ecl-accordion2__toggle-icon", "aria-hidden": !this.isExpanded }) : '', (this.isExpanded) ? h("ecl-icon", { icon: "ui--minus", size: "m", styleClass: "ecl-accordion2__toggle-icon", "aria-hidden": this.isExpanded }) : '', h("span", { class: "ecl-accordion2__toggle-title" }, this.label)))), h("div", { class: "ecl-accordion2__content", hidden: !this.isExpanded, role: "region" }, h("slot", null))));
    }
    static get style() { return ""; }
};

export { EclAccordion as ecl_accordion_item };
