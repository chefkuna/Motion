import { BaseComponent } from './../../component.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title:string, body:string) {
    super(`
    <section class="note">
      <p class="note__title"></p>
      <p class="note__body"></p>
    </section>`);

    const noteElement = this.element.querySelector('.note__title')! as HTMLParagraphElement;
    noteElement.textContent = title;
    
  }
}