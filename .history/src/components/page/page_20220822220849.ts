import { BaseComponent, Component } from './../component.js';

class PageItemComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`
    <li class="page-item">
      <section class="page-item__body"></section>
      <div class="page-item__controls">
        <button class="close">&times;</button>
      </div>
    </li>`);
  }
  addChild(child: Component)
}

export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page">This is PageComponent!</ul>');
  }
}