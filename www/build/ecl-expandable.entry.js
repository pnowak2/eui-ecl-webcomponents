import { r as registerInstance, h, H as Host } from './core-9eaea7c8.js';

const EclExpandable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    getClass() {
        return [
            `ecl-expandable`,
            this.styleClass
        ].join(' ');
    }
    onExpanded() {
        this.isExpanded = !this.isExpanded;
    }
    render() {
        return (h(Host, { type: "primary", class: this.getClass() }, h("ecl-button", { onClick: this.onExpanded.bind(this), type: "secondary", "aria-expanded": `${this.isExpanded}`, styleClass: "ecl-expandable__toggle" }, (!this.isExpanded) ? 'Expand' : 'Collapse', h("ecl-icon", { slot: "icon", icon: "ui--corner-arrow", size: "fluid", transform: "rotate-180", class: "ecl-button__icon" })), h("div", { class: "ecl-expandable__content", id: "expandable-example-content", hidden: !this.isExpanded }, h("slot", null))));
    }
    static get style() { return ""; }
};

export { EclExpandable as ecl_expandable };
