class App{
  constructor(imageHandler,textHandler,buttonsContainer){
    this.imageHandler = imageHandler;
    this.textHandler = textHandler;
    this.buttonsContainer = buttonsContainer;
    this.buttonRow = buttonsContainer.querySelector(".button-row");
    this.imageRow = buttonsContainer.querySelector(".image-row");
    this.textRow = buttonsContainer.querySelector(".text-row");
    this.customizeRow = buttonsContainer.querySelector(".customize-row")
    this.positionRow = buttonsContainer.querySelector(".position-row")
    this.start = this.start.bind(this);
    this.refresh = this.refresh.bind(this);
    this.setButtons = this.setButtons.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.changeText = this.changeText.bind(this);
    this.toggleTopRow = this.toggleTopRow.bind(this);
    this.customizeText = this.customizeText.bind(this);
    this.submitCustomText = this.submitCustomText.bind(this);
    this.textLocation = this.textLocation.bind(this);
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
    //set the buttons on the main row
    const refresh = document.querySelector("#refresh");
    refresh.addEventListener("click",this.refresh);
    const changeImageButton = this.buttonsContainer.querySelector("#change-image");
    changeImageButton.addEventListener("click", this.changeImage);
    const changeTextButton = this.buttonsContainer.querySelector("#change-text");
    changeTextButton.addEventListener("click",this.changeText);
    const customizeTextButton = this.buttonsContainer.querySelector("#custom-text");
    customizeTextButton.addEventListener("click",this.customizeText);
    const textLocationButton = this.buttonsContainer.querySelector("#text-location");
    //textLocationButton.addEventListener("click");
    // back buttons for all rows
    const backButton = document.createElement("button");
    backButton.className = "btn btn-success";
    const imageBack = backButton.cloneNode();
    const textBack = backButton.cloneNode();
    const customizeBack = backButton.cloneNode();
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
    const animeButton = document.createElement("button");
    const abstractButton = document.createElement("button");
    const artButton = document.createElement("button");
    const toggleButton = document.createElement("button");
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
    const adviceButton = document.createElement("button");
    const customButton = document.createElement("button");
    const positionButton =document.createElement("button");
    const customText = document.createElement("input");
    positionButton.textContent = "Change Text Position";
    positionButton.className = "btn btn-info";
    positionButton.addEventListener("click",this.textHandler.toggleBottomPosition);
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
    this.textRow.appendChild(positionButton);
    this.textRow.appendChild(customText);
    this.textRow.appendChild(customButton);
    //set the customize text row buttons
    const blackWhiteButton = document.createElement("button");
    const whiteBlackButton = document.createElement("button");
    const pureWhiteButton = document.createElement("button");
    const pureBlackButton = document.createElement("button");
    const sizeButton = document.createElement("button");
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

  changeImage(){ //replaces main row with the image row buttons
    this.toggleTopRow();
    this.imageRow.classList.remove("d-none");
  }

  changeText() { //replaces main row with the change row buttons
    this.toggleTopRow();
    this.textRow.classList.remove("d-none");
  }

  customizeText() { //replaces main row with the customize text row buttons
    this.toggleTopRow();
    this.customizeRow.classList.remove("d-none");
  }

  textLocation(){
    this.toggleTopRow();
    this.locationRow.classList.remove("d-none");
  }

  toggleTopRow(){
    //alternates between making the main buttons visible/invisible
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

  submitCustomText(){ //takes the value from the textline in change text row and uses it in the meme
    const textInput = this.buttonsContainer.querySelector("#text-input");
    this.textHandler.customText(textInput.value);
    textInput.value =""
  }


}
