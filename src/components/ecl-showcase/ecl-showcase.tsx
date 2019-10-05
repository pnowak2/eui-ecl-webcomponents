import { Component, h } from '@stencil/core';

@Component({
  tag: 'ecl-showcase',
  styleUrl: 'ecl-showcase.css',
  shadow: false
})
export class EclShowcase {
  render() {
    return <div>
      <h1>ECL Button</h1>

      <ecl-button styleClass="ecl-u-hackaton">Default</ecl-button>

      <ecl-button type="primary">Primary</ecl-button>
      <ecl-button type="secondary">Secondary</ecl-button>
      <ecl-button type="ghost">Ghost</ecl-button>
      <ecl-button type="search">Search</ecl-button>
      <ecl-button type="call">Call</ecl-button>

      <ecl-button>
        With icon
        <ecl-icon slot="icon" icon="ui--corner-arrow" transform="rotate-90"></ecl-icon>
      </ecl-button>

      <h1>ECL Icon</h1>

      <ecl-icon icon="general--audio" size="xs"></ecl-icon>
      <ecl-icon icon="general--audio" size="s"></ecl-icon>
      <ecl-icon icon="general--audio" size="m"></ecl-icon>
      <ecl-icon icon="general--audio" size="l"></ecl-icon>
      <ecl-icon icon="general--audio" size="xl"></ecl-icon>
      <ecl-icon icon="general--audio" size="2xl"></ecl-icon>
      <ecl-icon icon="general--audio" size="fluid"></ecl-icon>

      <ecl-icon icon="general--audio"></ecl-icon>
      <ecl-icon icon="general--audio" color="primary"></ecl-icon>
      <ecl-icon icon="general--audio" color="inverted"></ecl-icon>

      <ecl-icon icon="general--audio" transform="rotate-0"></ecl-icon>
      <ecl-icon icon="general--audio" transform="rotate-90"></ecl-icon>
      <ecl-icon icon="general--audio" transform="rotate-180"></ecl-icon>
      <ecl-icon icon="general--audio" transform="rotate-270"></ecl-icon>

      <h1>Message</h1>

      <ecl-message title="Information message" typeClass="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan semper lorem, ac mollis lacus tincidunt eu.
        Duis scelerisque diam eu tempus fringilla.
      </ecl-message>

      <ecl-message title="Warning message" typeClass="warning">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan semper lorem, ac mollis lacus tincidunt eu.
        Duis scelerisque diam eu tempus fringilla.
      </ecl-message>

      <ecl-message title="Error message" typeClass="error">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan semper lorem, ac mollis lacus tincidunt eu.
        Duis scelerisque diam eu tempus fringilla.
      </ecl-message>
    </div>;
  }
}
