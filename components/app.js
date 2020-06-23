class App{
  constructor(imageHandler,textHandler){
    this.imageHandler=imageHandler;
    this.textHandler=textHandler;
    this.start = this.start.bind(this);
    this.setButtons = this.setButtons.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.changeText = this.changeText.bind(this);
  }

  start(){
    this.imageHandler.newImage();
    this.textHandler.newText();
    this.setButtons();
  }

  setButtons(){
    var refresh = document.querySelector("#refresh");
    refresh.addEventListener("click",this.start);
    var changeImageButton = document.querySelector("#change-image");
    changeImageButton.addEventListener("click", this.changeImage);
    var changeTextButton = document.querySelector("#change-text");
    changeTextButton.addEventListener("click",this.changeText);
  }

  changeImage(){
    this.imageHandler.newImage();
  }

  changeText() {
    this.textHandler.newText();
  }
}
