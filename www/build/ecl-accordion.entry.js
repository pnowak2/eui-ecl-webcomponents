import { r as registerInstance, h, H as Host } from './core-9eaea7c8.js';

const EclAccordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    getClass() {
        return [
            `ecl-accordion2`,
            `ecl-u-d-block`,
            this.styleClass
        ].join(' ');
    }
    render() {
        return (h(Host, { class: this.getClass() }, h("slot", null)));
    }
    static get style() { return ""; }
};

export { EclAccordion as ecl_accordion };
