import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../tokens/tokens.css';

export class BaseTile extends LitElement {
  static styles = css`
    div {
      --tile-border-radius: var(--simba-radii-base);
      --tile-border-color: var(--simba-colors-cool-gray-600);
      border: 1px solid var(--tile-border-color);
      border-radius: var(--tile-border-radius);
      padding: 1rem;
    }
  `;

  render() {
    return html`<div>test<slot></slot></div>`;
  }
}
