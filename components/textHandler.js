class TextHandler {
  constructor(textElement) {
    this.textElement = textElement;
    this.newText = this.newText.bind(this);
    this.newTextSuccess = this.newTextSuccess.bind(this);
    this.newTextError = this.newTextError.bind(this);
  }
  newText() {
    $.ajax({
      method: "GET",
      url: "https://api.adviceslip.com/advice",
      success: this.newTextSuccess,
      error: this.newTextError
    })
  }
  newTextSuccess(data) {
    console.log(data);
  }
  newTextError(error) {
    console.log(error);
  }
}
