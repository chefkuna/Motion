import { ImageComponent } from './../.history/src/components/page/item/image_20220821193235';
import { PageComponent } from './components/page/page.js';

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
  }
}

new App(document.querySelector('.document')! as HTMLElement);