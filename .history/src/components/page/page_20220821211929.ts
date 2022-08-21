import { BaseComponent } from './../component.js';

export class PageComponent extends BaseComponent {
  constructor() {
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'page');
    this.element.textContent = 'This is PageComponent';
  }
}