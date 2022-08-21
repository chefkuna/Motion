import { BaseComponent } from './../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title:string, url:string) {
    super(`<section class="video">
            <div class="video__holder">
              <video class="video__thumbnail">

              </video>
            </div>
            <h2 class="video__title"></h2>
          </section>`);

    const videoElement = this.element.querySelector('.video__thumbnail')! as HTMLVideoElement;
      videoElement.src = url;

    const titleElement = this.element.querySelector('.video__title')! as HTMLHeadElement;
      titleElement.textContent = title;
  }
}