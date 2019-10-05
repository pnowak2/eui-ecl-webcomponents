import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-button',
  styleUrl: 'ecl-button.css',
  shadow: true
})
export class EclButton {

  @Prop() styleClass: string;

  render() {
    return (
      <div class="ecl-button { styleClass }">
        <slot></slot>
      </div>
    )
  }
}
