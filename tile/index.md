# Tile

Tile Webcomponent.

```js script
import { html } from 'lit';
import './define.js';
```

## Usage

Import the custom element definition file.

```js
import './define';
```

Click the flip locale button to see localized default label in action as well as the validator messages, switching between Dutch and English.

```js preview-story
export const tile = () => html` <tile>This text is in a tile</tile> `;
```
