/**
 * Copyright 2025 brookeconnelly05
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-very-theme`
 * 
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioVeryBar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-bar";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-very-bar.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
    
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      .header a {
          padding: var(--ddd-spacing-3);
          display: inline-block;
          margin: var(--ddd-spacing-3);
          background-color: var(--ddd-theme-default-limestoneGray);
          color: var(--ddd-theme-default-white);
          text-decoration: none;
        }

      .header {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--ddd-theme-default-wonderPurple);
          position: fixed;
          top: var(--ddd-spacing-35);
          left: var(--ddd-spacing-0);
          height: 100px;
          right: var(--ddd-spacing-0);
          z-index: 1;
        }
      
    `];
  }

  

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper"> 
    <div class="header">
    <a href="#1">About Me</a>
    <a href="#2">Resume</a>
    <a href="#3">Experience </a>
    <a href="#4">Projects</a>
    <a href="#5">Contact</a>
    </div>
    <slot></slot>
    </div>
`
;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioVeryBar.tag, PortfolioVeryBar);