class App{
  constructor(imageHandler,textHandler){
    this.imageHandler = imageHandler;
    this.textHandler = textHandler;
    this.bottomRow = document.querySelector(".bottom-row");
    this.start = this.start.bind(this);
    this.refresh = this.refresh.bind(this);
    this.setTopButtons = this.setTopButtons.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.changeText = this.changeText.bind(this);
    this.clearBottomRow = this.clearBottomRow.bind(this);
    this.customizeText = this.customizeText.bind(this);
  }

  start(){
    this.imageHandler.newAbstractImage();
    this.textHandler.newAdviceText();
    this.setTopButtons();
  }

  refresh(){
    this.clearBottomRow();
    this.imageHandler.newAbstractImage();
    this.textHandler.newAdviceText();
  }

  setTopButtons(){
    var refresh = document.querySelector("#refresh");
    refresh.addEventListener("click",this.refresh);
    var changeImageButton = document.querySelector("#change-image");
    changeImageButton.addEventListener("click", this.changeImage);
    var changeTextButton = document.querySelector("#change-text");
    changeTextButton.addEventListener("click",this.changeText);
  }

  changeImage(){
    this.clearBottomRow();
    var animeButton = document.createElement("button");
    var abstractButton = document.createElement("button");
    var artButton = document.createElement("button");
    animeButton.className ="btn btn-dark";
    animeButton.textContent = "Anime GIF";
    abstractButton.className ="btn btn-dark";
    abstractButton.textContent = "Abstract GIF";
    artButton.className ="btn btn-dark";
    artButton.textContent = "Art GIF";
    animeButton.addEventListener("click", this.imageHandler.newAnimeImage);
    abstractButton.addEventListener("click", this.imageHandler.newAbstractImage);
    artButton.addEventListener("click", this.imageHandler.newArtImage);
    this.bottomRow.appendChild(abstractButton);
    this.bottomRow.appendChild(animeButton);
    this.bottomRow.appendChild(artButton);
  }

  changeText() {
    this.clearBottomRow();
    var adviceButton = document.createElement("button");
    var customButton = document.createElement("button");
    adviceButton.className = "btn btn-dark";
    adviceButton.textContent = "Use Advice";
    customButton.className = "btn btn-dark";
    customButton.textContent = "Use Quote";
    adviceButton.addEventListener("click",this.textHandler.newAdviceText);
    //customButton.addEventListener("click",this.textHandler.newQuoteText);
    this.bottomRow.appendChild(adviceButton);
    this.bottomRow.appendChild(customButton);
  }

  customizeText(){
    this.clearBottomRow();
  }
  clearBottomRow(){
    while(this.bottomRow.lastChild){
      this.bottomRow.removeChild(this.bottomRow.lastChild);
    }
  }
}
