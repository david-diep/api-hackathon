class App{
  constructor(imageHandler,textHandler,buttonsContainer){
    this.imageHandler = imageHandler;
    this.textHandler = textHandler;
    this.buttonsContainer = buttonsContainer;
    this.buttonRow = buttonsContainer.querySelector(".button-row");
    this.imageRow = buttonsContainer.querySelector(".image-row");
    this.textRow = buttonsContainer.querySelector(".text-row");
    this.customizeRow = buttonsContainer.querySelector(".customize-row")
    this.start = this.start.bind(this);
    this.refresh = this.refresh.bind(this);
    this.setButtons = this.setButtons.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.changeText = this.changeText.bind(this);
    this.toggleTopRow = this.toggleTopRow.bind(this);
    this.customizeText = this.customizeText.bind(this);
    this.submitCustomText = this.submitCustomText.bind(this);
  }

  start(){
    this.imageHandler.newArtImage();
    this.textHandler.newAdviceText();
    this.setButtons();
  }

  refresh(){
    this.imageHandler.newAbstractImage();
    this.textHandler.newAdviceText();
  }

  setButtons(){
    //set the main buttons
    var refresh = document.querySelector("#refresh");
    refresh.addEventListener("click",this.refresh);
    var changeImageButton = document.querySelector("#change-image");
    changeImageButton.addEventListener("click", this.changeImage);
    var changeTextButton = document.querySelector("#change-text");
    changeTextButton.addEventListener("click",this.changeText);
    var customizeTextButton = document.querySelector("#custom-text");
    customizeTextButton.addEventListener("click",this.customizeText);
    // back buttons
    var backButton = document.createElement("button");
    backButton.className = "btn btn-success";
    var imageBack = backButton.cloneNode();
    var textBack = backButton.cloneNode();
    var customizeBack = backButton.cloneNode();
    imageBack.textContent = "Go Back";
    textBack.textContent = "Go Back";
    customizeBack.textContent = "Go Back";
    imageBack.addEventListener("click", this.toggleTopRow);
    textBack.addEventListener("click",this.toggleTopRow);
    customizeBack.addEventListener("click",this.toggleTopRow);
    this.imageRow.appendChild(imageBack);
    this.textRow.appendChild(textBack);
    this.customizeRow.appendChild(customizeBack);
    //set the image row buttons
    //todo: set background to contain/cover
    var animeButton = document.createElement("button");
    var abstractButton = document.createElement("button");
    var artButton = document.createElement("button");
    var toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle GIF Fit";
    toggleButton.className = "btn btn-info";
    animeButton.className = "btn btn-dark";
    animeButton.textContent = "Anime GIF";
    abstractButton.className = "btn btn-dark";
    abstractButton.textContent = "Abstract GIF";
    artButton.className = "btn btn-dark";
    artButton.textContent = "Art GIF";
    animeButton.addEventListener("click", this.imageHandler.newAnimeImage);
    abstractButton.addEventListener("click", this.imageHandler.newAbstractImage);
    artButton.addEventListener("click", this.imageHandler.newArtImage);
    toggleButton.addEventListener("click", this.imageHandler.toggleCoverContain);
    this.imageRow.appendChild(abstractButton);
    this.imageRow.appendChild(animeButton);
    this.imageRow.appendChild(artButton);
    this.imageRow.appendChild(toggleButton);
    // set the text row buttons
    var adviceButton = document.createElement("button");
    var customButton = document.createElement("button");
    var customText = document.createElement("input");
    customText.placeholder = "Type your custom text here!";
    customText.id = "text-input";
    customText.className = "w-50";
    adviceButton.className = "btn btn-dark";
    adviceButton.textContent = "Use Advice";
    customButton.className = "btn btn-warning";
    customButton.textContent = "Use Custom Text";
    adviceButton.addEventListener("click", this.textHandler.newAdviceText);
    customButton.addEventListener("click",this.submitCustomText);
    this.textRow.appendChild(adviceButton);
    this.textRow.appendChild(customText);
    this.textRow.appendChild(customButton);
    //set the customize text row buttons
    var blackWhiteButton = document.createElement("button");
    var whiteBlackButton = document.createElement("button");
    var pureWhiteButton = document.createElement("button");
    var pureBlackButton = document.createElement("button");
    var sizeButton = document.createElement("button");
    blackWhiteButton.textContent = "Black Interior Text";
    blackWhiteButton.className = "btn btn-dark";
    blackWhiteButton.addEventListener("click", this.textHandler.blackInterior);
    whiteBlackButton.textContent = "White Interior Text";
    whiteBlackButton.className = "btn btn-dark";
    whiteBlackButton.addEventListener("click", this.textHandler.whiteInterior);
    pureWhiteButton.textContent = "White Only Text";
    pureWhiteButton.className = "btn btn-dark";
    pureWhiteButton.addEventListener("click", this.textHandler.pureWhite);
    pureBlackButton.textContent = "Black Only Text";
    pureBlackButton.className = "btn btn-dark";
    pureBlackButton.addEventListener("click", this.textHandler.pureBlack);
    sizeButton.textContent = "Change Size"
    sizeButton.className = "btn btn-info";
    sizeButton.addEventListener("click", this.textHandler.toggleSize);
    this.customizeRow.appendChild(blackWhiteButton);
    this.customizeRow.appendChild(whiteBlackButton);
    this.customizeRow.appendChild(pureWhiteButton);
    this.customizeRow.appendChild(pureBlackButton);
    this.customizeRow.appendChild(sizeButton);
  }

  changeImage(){
    this.toggleTopRow();
    this.imageRow.classList.remove("d-none");
  }

  changeText() {
    this.toggleTopRow();
    this.textRow.classList.remove("d-none");
  }

  customizeText(){
    this.toggleTopRow();
    this.customizeRow.classList.remove("d-none");
  }

  toggleTopRow(){
    //alternates between making the main buttons visible
    //and making the other buttons invisible
    if(this.buttonRow.classList.contains("d-none")){
      this.buttonRow.classList.remove("d-none");

      if (!this.imageRow.classList.contains("d-none")) this.imageRow.classList.add("d-none")
      if (!this.textRow.classList.contains("d-none")) this.textRow.classList.add("d-none")
      if (!this.customizeRow.classList.contains("d-none")) this.customizeRow.classList.add("d-none")

    } else{
      this.buttonRow.classList.add("d-none");
    }
  }

  submitCustomText(){
    var textInput = this.buttonsContainer.querySelector("#text-input");
    this.textHandler.customText(textInput.value);
    textInput.value =""
  }


}
