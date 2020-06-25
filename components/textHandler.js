class TextHandler {
  constructor(textElement) {
    this.textElement = textElement;
    this.memeText = this.textElement.querySelector(".meme-text")
    this.textField = this.textElement.querySelector(".text-field")
    this.newAdviceText = this.newAdviceText.bind(this);
    this.newAdviceSuccess = this.newAdviceSuccess.bind(this);
    this.newTextError = this.newTextError.bind(this);
    this.customText = this.customText.bind(this);
    this.toggleSize = this.toggleSize.bind(this);
    this.pureWhite = this.pureWhite.bind(this);
    this.pureBlack = this.pureBlack.bind(this);
    this.blackInterior = this.blackInterior.bind(this);
    this.whiteInterior = this.whiteInterior.bind(this);
    this.toggleBottomPosition = this.toggleBottomPosition.bind(this);
  }
  newAdviceText() {
    $.ajax({
      method: "GET",
      url: "https://api.adviceslip.com/advice",
      success: this.newAdviceSuccess,
      error: this.newTextError
    })
  }
  newAdviceSuccess(data) {
    const advice = JSON.parse(data).slip.advice;
    this.memeText.textContent = advice;
  }
  newTextError(error) {
    console.log(error);
  }
  customText(string){
    this.memeText.textContent = string;
  }
  toggleBottomPosition(){
    if (this.textField.classList.contains("align-bottom")) {
      this.textField.classList.remove("align-bottom");
    }  else {
      this.textField.classList.add("align-bottom");
    }
  }
  toggleSize(){
    if (this.memeText.classList.contains("small")) {
      this.memeText.classList.replace("small","medium");
    } else if (this.memeText.classList.contains("medium")){
      this.memeText.classList.replace("medium", "large");
    }else {
      this.memeText.classList.replace("large", "small");
    }
  }
  pureWhite(){
    this.clearColor();
    this.memeText.classList.add("pure-white-text");
  }
  pureBlack(){
    this.clearColor();
    this.memeText.classList.add("pure-black-text");
  }
  blackInterior(){
    this.clearColor();
    this.memeText.classList.add("black-text");
  }
  whiteInterior(){
    this.clearColor();
    this.memeText.classList.add("white-text");
  }
  clearColor(){
    const colorList=["white-text","black-text","pure-black-text","pure-white-text"];
    for(let i=0;i<colorList.length;i++){
      if (this.memeText.classList.contains(colorList[i])) this.memeText.classList.remove(colorList[i]);
    }
  }
}
