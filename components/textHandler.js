class TextHandler {
  constructor(textElement) {
    this.textElement = textElement;
    this.memeText = this.textElement.querySelector(".meme-text")
    this.newAdviceText = this.newAdviceText.bind(this);
    this.newAdviceSuccess = this.newAdviceSuccess.bind(this);
    this.newTextError = this.newTextError.bind(this);
    this.customText = this.customText.bind(this);
    //this.newQuoteText = this.newQuoteText.bind(this);
    //this.newQuoteSuccess = this.newQuoteSuccess.bind(this);
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
    var advice = JSON.parse(data).slip.advice;
    this.memeText.textContent = advice;
  }
  newTextError(error) {
    console.log(error);
  }
  customText(string){
    this.memeText.textContent = string;
  }
  // newQuoteText(){
  //   $.ajax({
  //     method: "getQuote",
  //     url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&callback=?",
  //     success: this.newQuoteSuccess,
  //     error: this.newTextError
  //   })
  // }
  // newQuoteSuccess(data){
  //   console.log(data);
  //   console.log(JSON.parse(data));
  // }
}
