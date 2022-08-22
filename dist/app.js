import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { VideoComponent } from './components/page/item/video.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        this.page.addChild(image);
        const video = new VideoComponent('Video Title', 'https://youtu.be/96AbEMeR1aE');
        this.page.addChild(video);
        const note = new NoteComponent('Note title', 'Note body');
        this.page.addChild(note);
        const todo = new TodoComponent('Todo title', 'Todo item');
        this.page.addChild(todo);
    }
}
new App(document.querySelector('.document'));
