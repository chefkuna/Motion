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

    const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
      iframe.src = url; // url -> videoId

    iframe.src = convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
      titleElement.textContent = title;
  }

  private convertToEmbeddedURL(url:string): string {
    
  }
}

//input
//https://youtu.be/96AbEMeR1aE
//https://www.youtube.com/watch?v=96AbEMeR1aE

//output
//"https://www.youtube.com/embed/96AbEMeR1aE" 

// <iframe 
// width="588" 
// height="255" 
// src="https://www.youtube.com/embed/96AbEMeR1aE" 
// title="청바지를 샀는데 이렇다면...?" 
// frameborder="0" 
// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
// allowfullscreen></iframe>