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
    this.clearModal = this.clearModal.bind(this);
    this.submitCustomTag = this.submitCustomTag.bind(this);
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
    //button template
    const blackButton = document.createElement("button");
    blackButton.className = "btn btn-dark";
    //modal button
    const hideButton = document.querySelector("#modal-button")
    hideButton.addEventListener("click",this.clearModal);
    hideButton.textContent ="Go Back";
    hideButton.className = "btn btn-light"
    //set the buttons on the main row
    const refresh = this.buttonsContainer.querySelector("#refresh");
    refresh.addEventListener("click",this.refresh);
    const changeImageButton = this.buttonsContainer.querySelector("#change-image");
    changeImageButton.addEventListener("click", this.changeImage);
    const changeTextButton = this.buttonsContainer.querySelector("#change-text");
    changeTextButton.addEventListener("click",this.changeText);
    const customizeTextButton = this.buttonsContainer.querySelector("#custom-text");
    customizeTextButton.addEventListener("click",this.customizeText);
    const textLocationButton = this.buttonsContainer.querySelector("#text-location");
    textLocationButton.addEventListener("click", this.textLocation);
    const saveButton = this.buttonsContainer.querySelector("#save");
    saveButton.addEventListener("click",this.imageHandler.takeScreenshot);
    // back buttons for all rows
    const backButton = document.createElement("button");
    backButton.className = "btn btn-success";
    backButton.textContent = "Go Back"
    const imageBack = backButton.cloneNode(true);
    const textBack = backButton.cloneNode(true);
    const customizeBack = backButton.cloneNode(true);
    const locationBack = backButton.cloneNode(true);
    imageBack.addEventListener("click", this.toggleTopRow);
    textBack.addEventListener("click",this.toggleTopRow);
    customizeBack.addEventListener("click",this.toggleTopRow);
    locationBack.addEventListener("click",this.toggleTopRow);
    this.imageRow.appendChild(imageBack);
    this.textRow.appendChild(textBack);
    this.customizeRow.appendChild(customizeBack);
    this.positionRow.appendChild(locationBack);
    //set the image row buttons
    const animeButton = blackButton.cloneNode();
    const abstractButton = blackButton.cloneNode();
    const artButton = blackButton.cloneNode();
    const toggleButton = document.createElement("button");
    const customTagButton = document.createElement("button");
    const customTagLine = document.createElement("input");
    customTagButton.className = "btn btn-warning";
    customTagButton.textContent = "Custom Gif"
    customTagButton.addEventListener("click",this.submitCustomTag);
    customTagLine.id="tag-input";
    customTagLine.placeholder="Type Custom Tag Here";
    toggleButton.textContent = "Toggle GIF Fit";
    toggleButton.className = "btn btn-info";
    animeButton.textContent = "Anime GIF";
    abstractButton.textContent = "Abstract GIF";
    artButton.textContent = "Art GIF";
    animeButton.addEventListener("click", this.imageHandler.newAnimeImage);
    abstractButton.addEventListener("click", this.imageHandler.newAbstractImage);
    artButton.addEventListener("click", this.imageHandler.newArtImage);
    toggleButton.addEventListener("click", this.imageHandler.toggleCoverContain);
    this.imageRow.appendChild(abstractButton);
    this.imageRow.appendChild(animeButton);
    this.imageRow.appendChild(artButton);
    this.imageRow.appendChild(customTagLine);
    this.imageRow.appendChild(customTagButton);
    this.imageRow.appendChild(toggleButton);
    // set the text row buttons
    const adviceButton = blackButton.cloneNode();
    const customButton = document.createElement("button");
    const customText = document.createElement("input");
    customText.placeholder = "Type your custom text here!";
    customText.id = "text-input";
    customText.className = "width-65";
    adviceButton.textContent = "Use Advice";
    customButton.className = "btn btn-warning";
    customButton.textContent = "Use Custom Text";
    adviceButton.addEventListener("click", this.textHandler.newAdviceText);
    customButton.addEventListener("click",this.submitCustomText);
    this.textRow.appendChild(adviceButton);
    this.textRow.appendChild(customText);
    this.textRow.appendChild(customButton);
    //set the customize text row buttons
    const blackWhiteButton = blackButton.cloneNode();
    const whiteBlackButton = blackButton.cloneNode();
    const pureWhiteButton = blackButton.cloneNode();
    const pureBlackButton = blackButton.cloneNode();
    const sizeButton = document.createElement("button");
    blackWhiteButton.textContent = "Black Interior Text";
    blackWhiteButton.addEventListener("click", this.textHandler.blackInterior);
    whiteBlackButton.textContent = "White Interior Text";
    whiteBlackButton.addEventListener("click", this.textHandler.whiteInterior);
    pureWhiteButton.textContent = "White Only Text";
    pureWhiteButton.addEventListener("click", this.textHandler.pureWhite);
    pureBlackButton.textContent = "Black Only Text";
    pureBlackButton.addEventListener("click", this.textHandler.pureBlack);
    sizeButton.textContent = "Change Size"
    sizeButton.className = "btn btn-info";
    sizeButton.addEventListener("click", this.textHandler.toggleSize);
    this.customizeRow.appendChild(blackWhiteButton);
    this.customizeRow.appendChild(whiteBlackButton);
    this.customizeRow.appendChild(pureWhiteButton);
    this.customizeRow.appendChild(pureBlackButton);
    this.customizeRow.appendChild(sizeButton);
    //set the buttons for position row
    const verticalButton = blackButton.cloneNode();
    const horizontalButton = blackButton.cloneNode();
    const resetButton = document.createElement("button");
    const textAlignButton = blackButton.cloneNode();
    horizontalButton.textContent = "Change Text Horizontal Position";
    verticalButton.textContent = "Change Text Vertical Position";
    resetButton.textContent = "Reset"
    textAlignButton.textContent = "Change Text Alignment"
    resetButton.className = "btn btn-danger"
    verticalButton.addEventListener("click",this.textHandler.toggleVerticalPosition);
    horizontalButton.addEventListener("click",this.textHandler.toggleHorizontalPosition);
    resetButton.addEventListener("click",this.textHandler.resetPosition);
    textAlignButton.addEventListener("click",this.textHandler.toggleTextAlignment);
    this.positionRow.appendChild(verticalButton);
    this.positionRow.appendChild(horizontalButton);
    this.positionRow.appendChild(textAlignButton);
    this.positionRow.appendChild(resetButton);

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
    this.positionRow.classList.remove("d-none");
  }

  toggleTopRow(){
    //alternates between making the main buttons visible/invisible
    //and making the other buttons invisible
    if(this.buttonRow.classList.contains("d-none")){
      this.buttonRow.classList.remove("d-none");

      if (!this.imageRow.classList.contains("d-none")) this.imageRow.classList.add("d-none")
      if (!this.textRow.classList.contains("d-none")) this.textRow.classList.add("d-none")
      if (!this.customizeRow.classList.contains("d-none")) this.customizeRow.classList.add("d-none")
      if (!this.positionRow.classList.contains("d-none")) this.positionRow.classList.add("d-none")
    } else{
      this.buttonRow.classList.add("d-none");
    }
  }

  submitCustomText(){ //takes the value from the textline in change text row and uses it in the meme
    const textInput = this.buttonsContainer.querySelector("#text-input");
    this.textHandler.customText(textInput.value);
    textInput.value = "";
  }

  submitCustomTag(){
    const tagInput = this.buttonsContainer.querySelector("#tag-input");
    this.imageHandler.newCustomImage(tagInput.value);
  }
  clearModal() {
    const modal = document.querySelector("#image-display");
    modal.classList.add("d-none");
    modal.removeChild(modal.lastChild);
  }

}
