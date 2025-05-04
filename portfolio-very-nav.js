/**
 * Copyright 2025 brookeconnelly05
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import '@haxtheweb/scroll-button/scroll-button.js';

/**
 * `portfolio-very-theme`
 * 
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioVeryNav extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-nav";
  }

  constructor() {
    super();
    this.title = "";
    this.pages = [];
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-very-nav.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });

    this.addEventListener("screen-ready", (e) => {
        this.screens = [...this.screens, e.detail.screen];
      });
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    // use hash in URL
    if (parseInt(globalThis.location.hash.replace("#", "")) >= 0) {
      this.screen = parseInt(globalThis.location.hash.replace("#", ""));
    }
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      pages: {type: Array},
      description: {type: String},
      screen: { type: Number, reflect: true },
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
      scroll-button {
          position: fixed;
          right: var(--ddd-spacing-5);
          bottom: var(--ddd-spacing-5);
        }

        nav {
      position: fixed;
      top: 0;
      width: 100%;
      background-color: var(--ddd-theme-default-beaverBrown, #333);
      color: white;
      display: flex;
      justify-content: center;
      padding: 1em;
      z-index: 1000;
    }
      
    `];
  }

  

  // Lit render the HTML
  render() {
    return html`

<nav>
        <button @click=${() => this._scroll('screen-1')}>About</button>
        <button @click=${() => this._scroll('screen-2')}>Resume</button>
        <button @click=${() => this._scroll('screen-3')}>Experience </button>
        <button @click=${() => this._scroll('screen-4')}>Projects</button>
        <button @click=${() => this._scroll('screen-5')}>Contact</button>
      </nav>


    <!-- <div class="wrapper">
      <h3>${this.title}</h3>
      <ul>
        ${this.pages.map(
          (page, index) =>
            html`<li>
              <a
                href="#${page.number}"
                @click="${this.linkChange}"
                data-index="${index}"
                >${page.title}</a
              >
            </li>`
        )}
      </ul>
      <div class="wrapper">
        <slot></slot>
        <scroll-button></scroll-button>
      </div>
    </div> -->
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

  _scroll(sectionId) {
    window.dispatchEvent(new CustomEvent('nav-click', {
      detail: sectionId,
      bubbles: true,
      composed: true
    }));
}
}

globalThis.customElements.define(PortfolioVeryNav.tag, PortfolioVeryNav);