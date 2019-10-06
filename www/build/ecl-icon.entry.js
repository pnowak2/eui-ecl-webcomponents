import { r as registerInstance, h } from './core-9eaea7c8.js';

const EclIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.size = 'xs';
    }
    getClass() {
        return [
            `ecl-icon`,
            `ecl-icon--${this.size}`,
            `ecl-icon--${this.color}`,
            `ecl-icon--${this.transform}`,
            this.styleClass
        ].join(' ');
    }
    render() {
        return (h("svg", { class: this.getClass() }, h("use", { xlinkHref: `assets/icons/sprites/icons.svg#${this.icon}` })));
    }
    static get style() { return ""; }
};

export { EclIcon as ecl_icon };
