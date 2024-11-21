import { css } from 'lit';
// import { tokens as t } from '../index.js'; // for some reason this doesn't work anymore
// import * as t from './_button.js';

export default css`
  :host {
    display: inline-block;
    cursor: pointer;
    background-color: var(--background-color);
    color: var(--content-color);
    border-radius: var(--border-radius);
    font-family: var(--content-family);
    font-size: var(--content-size);
    line-height: var(--content-line-height);
    font-weight: var(--content-weight);
    padding: var(--padding-vertical) var(--padding-horizontal);
    transition: var(--theme-background-transition),
      var(--theme-color-transition);
  }

  :host(:hover) {
    background-color: var(--states-hover-background-color);
  }

  :host(:active) {
    background-color: var(--states-active-background-color);
  }

  :host(:focus:not([disabled])),
  :host(:focus-visible) {
    box-shadow: var(--states-focus-border-shadow-size)
      var(--states-focus-border-shadow-color);
    outline: none;
  }

  :host([variation='secondary']) {
    background-color: var(--variants-secondary-background-color);
    color: var(--variants-secondary-content-color);
  }

  :host([variation='secondary']:hover) {
    background-color: var(--states-hover-variants-secondary-background-color);
  }

  :host([variation='secondary']:active) {
    background-color: var(--states-active-variants-secondary-background-color);
  }

  :host([variation='outline']) {
    color: var(--variants-outline-content-color);
  }

  :host([variation='text']) {
    color: var(--variants-text-content-color);
  }

  :host([variation='outline']) {
    box-shadow: var(--variants-outline-border-shadow-size)
      var(--variants-outline-border-shadow-color);
    background-color: var(--variants-outline-background-color);
  }

  :host([variation='text']) {
    background-color: var(--variants-text-background-color);
  }

  :host([variation='outline']:hover) {
    background-color: var(--states-hover-variants-outline-background-color);
  }

  :host([variation='text']:hover) {
    background-color: var(--states-hover-variants-text-background-color);
  }

  :host([variation='outline']:active) {
    background-color: var(--states-active-variants-outline-background-color);
  }

  :host([variation='text']:active) {
    background-color: var(--states-active-variants-text-background-color);
  }

  :host([variation='outline']:focus) {
    box-shadow: var(--states-focus-variants-outline-border-shadow-one-size)
        var(--states-focus-variants-outline-border-shadow-one-color),
      var(--states-focus-variants-outline-border-shadow-two-size)
        var(--states-focus-variants-outline-border-shadow-two-color);
  }

  :host([variation='text']:focus) {
    box-shadow: var(--states-focus-variants-text-border-shadow-size)
      var(--states-focus-variants-text-border-shadow-color);
  }

  :host([size='small']) {
    font-size: var(--sizes-small-content-size);
    line-height: var(--sizes-small-content-line-height);
    padding: var(--sizes-small-padding-vertical) var(--sizes-small-padding-horizontal);
  }

  :host([size='large']) {
    font-size: var(--sizes-large-content-size);
    line-height: var(--sizes-large-content-line-height);
    padding: var(--sizes-large-padding-vertical) var(--sizes-large-padding-horizontal);
  }

  :host([rounded]) {
    border-radius: var(--sizes-rounded-border-radius);
  }

  :host([disabled]) {
    filter: var(--states-disabled-filter);
    pointer-events: none;
  }

  :host([disabled][variation='primary']),
  :host([disabled]:not([variation])) {
    background-color: var(--states-disabled-background-color);
  }

  ::slotted([slot='suffix']),
  ::slotted([slot='prefix']) {
    box-sizing: content-box !important;
  }

  ::slotted([slot='suffix']) {
    padding-left: var(--suffix-padding-left) !important;
  }

  ::slotted([slot='prefix']) {
    padding-right: var(--prefix-padding-right) !important;
  }

  :host([theme='dark'][variation='text']) {
    color: var(--theme-dark-variants-text-content-color);
  }

  :host([theme='dark'][variation='outline']) {
    color: var(--theme-dark-variants-outline-content-color);
  }

  :host([theme='dark'][variation='text']:hover) {
    background-color: var(--theme-dark-states-hover-variants-text-background-color);
  }
  :host([theme='dark'][variation='outline']:hover) {
    background-color: var(--theme-dark-states-hover-variants-outline-background-color);
  }

  :host([theme='dark'][variation='text']:active) {
    background-color: var(--theme-dark-states-active-variants-text-background-color);
  }
  :host([theme='dark'][variation='outline']:active) {
    background-color: var(--theme-dark-states-active-variants-outline-background-color);
  }
`;
