const imageHandler = new ImageHandler(document.querySelector("div.display"));
const textHandler = new TextHandler(document.querySelector("div.display"));
const buttonsContainer = document.querySelector(".buttons-container");
const app = new App(imageHandler,textHandler,buttonsContainer);
app.start()
