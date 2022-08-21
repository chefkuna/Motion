import { BaseComponent } from './../../component.js';

export class VideoComponent extends BaseComponent {
  constructor(title:string, url:string) {
    super(`<section class="video">
            <div class="video__holder"><img class="video__thumbnail"></div>
            <p class="video__title"></p>
          </section>`);
  }
}