import './css/style.css';

type QueueItme = () => Promise<void>;

const controlBtn: string = `
<span class="control"></span>
<span class="control"></span>
<span class="control"></span>
`;

export default class TypeWriter {
   #queue: QueueItme[] = []
   #element: HTMLElement;
   #loop: boolean;
   #typingSpeed: number;
   #deletingSpeed: number;
   #editorDiv: HTMLElement

   constructor(parent: HTMLElement, { loop = false, typingSpeed = 50, deletingSpeed = 50, title = 'Type Writer', isDarkTheme = true, fontSize = 18 }) {
      // TypeWriter design 
      this.#editorDiv = document.createElement('div')
      this.#editorDiv.classList.add('code-editor', isDarkTheme ? 'dark-theme' : 'light-theme')
      this.#editorDiv.setAttribute('data-content', title)
      this.#element = document.createElement('div');
      this.#element.classList.add('white-space', isDarkTheme ? 'dark-text' : 'light-text');
      this.#element.style.fontSize = fontSize + 'px';
      this.#editorDiv.innerHTML = controlBtn;
      this.#editorDiv.append(this.#element)
      parent.append(this.#editorDiv);

      this.#loop = loop;
      this.#typingSpeed = typingSpeed;
      this.#deletingSpeed = deletingSpeed;
   }

   typeString(string: string) {
      this.#addToQueue((resolve) => {
         let i = 0;
         const interval = setInterval(() => {
            this.#element.append(string[i]);
            i++;
            if (i >= string.length) {
               clearInterval(interval);
               resolve();
            }
         }, this.#typingSpeed)
      })
      return this;
   }

   pauseFor(seconds: number) {
      this.#addToQueue((resolve) => {
         setTimeout(resolve, seconds);;
      })
      return this;
   }

   deleteChars(number: number) {
      this.#addToQueue((resolve) => {
         let i = 0;
         const interval = setInterval(() => {
            this.#element.innerText = this.#element.innerText.substring(0, this.#element.innerText.length - 1)
            i++;
            if (i >= number) {
               clearInterval(interval);
               resolve();
            }
         }, this.#deletingSpeed)
      })
      return this;
   }

   deleteAll(seconds = this.#deletingSpeed) {
      this.#addToQueue((resolve) => {
         const interval = setInterval(() => {
            this.#element.innerText = this.#element.innerText.substring(0, this.#element.innerText.length - 1)
            if (this.#element.innerText.length === 0) {
               clearInterval(interval);
               resolve();
            }
         }, seconds)
      })
      return this;
   }

   async start() {
      let cb = this.#queue.shift();
      while (cb != null) {
         await cb();
         if (this.#loop) this.#queue.push(cb);
         cb = this.#queue.shift();
      }
      return this;
   }

   #addToQueue(callback: (resolve: () => void) => void) {
      this.#queue.push(() => {
         return new Promise(callback);
      })
   }

}
