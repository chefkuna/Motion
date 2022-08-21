import { BaseComponent } from './../../component.js';

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title:string, body:string) {
    super(`
    <section class="todo">
      <h2 class="note__title"></h2>
      <input type="checkbox" class="todo-checkbox">
    </section>`);

    const noteTitleElement = this.element.querySelector('.note__title')! as HTMLHeadElement;
    noteTitleElement.textContent = title;

    const noteBodyElement = this.element.querySelector('.note__body')! as HTMLParagraphElement;
    noteBodyElement.textContent = body;
  }
}