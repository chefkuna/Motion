class BaseComponent<T extends HTMLElement> {
  protected readonly element : T;
  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;

  }
}