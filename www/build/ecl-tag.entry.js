import { r as registerInstance, h, H as Host } from './core-9eaea7c8.js';

const EclTag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    getClass() {
        return [
            `ecl-tag`,
            this.styleClass
        ].join(' ');
    }
    getRemovable() {
        return (h("span", { class: "ecl-tag__icon" }, h("ecl-icon", { icon: "ui--close", styleClass: "ecl-tag__icon-close" }), h("ecl-icon", { icon: "ui--close-filled", styleClass: "ecl-tag__icon-close-filled" })));
    }
    render() {
        return (h(Host, { type: "primary", class: this.getClass() }, h("slot", null), this.isRemovable ? h(this.getRemovable, null) : ''));
    }
    static get style() { return ""; }
};

export { EclTag as ecl_tag };
