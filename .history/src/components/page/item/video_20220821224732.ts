import { BaseComponent } from './../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title:string, url:string) {
    super(`
    <section class="video">
      <div class="video__player">
        <iframe class="video__iframe"></iframe>
      </div>
      <h2 class="video__title"></h2>
    </section>`);

    const videoElement = this.element.querySelector('.video__thumbnail')! as HTMLVideoElement;
      videoElement.src = url;

    const titleElement = this.element.querySelector('.video__title')! as HTMLHeadElement;
      titleElement.textContent = title;
  }
}

// <iframe 
// width="588" 
// height="255" 
// src="https://www.youtube.com/embed/96AbEMeR1aE" 
// title="청바지를 샀는데 이렇다면...?" 
// frameborder="0" 
// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
// allowfullscreen></iframe>