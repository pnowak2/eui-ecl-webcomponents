import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ecl-expandable',
  styleUrl: 'ecl-expandable.css',
  shadow: false
})
export class EclExpandable {
  @Prop() styleClass: string;

  getClass(): string {
    return [
      `ecl-expandable`,
      this.styleClass
    ].join(' ');
  }

  render() {
    return (
      <Host
        type="primary"
        class={this.getClass()}>
        <slot></slot>
      </Host>
    )
  }
}
