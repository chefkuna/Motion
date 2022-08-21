export class ImageComponent {
  private element: HTMLElement;
  constructor(title:string, url:string) {
    
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);

  }
}