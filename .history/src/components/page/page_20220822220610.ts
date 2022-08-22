import { BaseComponent } from './../component.js';

class PageItemComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super()
  }
}

export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page">This is PageComponent!</ul>');
  }
}