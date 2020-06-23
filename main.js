const imageHandler = new ImageHandler(document.querySelector("div.display"));
const textHandler = new TextHandler(document.querySelector("h2.meme-text"));
const app = new App(imageHandler,textHandler);
app.start()
