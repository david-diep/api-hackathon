class ImageHandler{
  constructor(imageElement){
    this.imageElement = imageElement;
    this.newImage = this.newImage.bind(this);
    this.newImageError = this.newImageError.bind(this)
    this.newImageSuccess = this.newImageSuccess.bind(this)
    this.newAbstractImage = this.newAbstractImage.bind(this);
    this.newArtImage = this.newArtImage.bind(this);
    this.newAnimeImage = this.newAnimeImage.bind(this);
    this.toggleCoverContain = this.toggleCoverContain.bind(this);
    this.frontURL = "https://api.giphy.com/v1/gifs/random?api_key=CNytBS8UgzfMHNmmTQPrTwE31S88tvGC";
    this.takeScreenshot = this.takeScreenshot.bind(this);
    this.newCustomImage = this.newCustomImage.bind(this);
  }

  newImage(givenURL){
    $.ajax({
      method: "GET",
      dataType: "json",
      url: givenURL,
      success: this.newImageSuccess,
      error: this.newImageError
    })
  }
  newImageSuccess(data){
    this.imageElement.style.backgroundImage = "url("+data.data.image_url+")";
  }
  newImageError(error){
    console.log(error)
  }

  newAbstractImage(){
    const url = this.frontURL + "&tag=trippy&rating=PG";
    this.newImage(url);
  }

  newArtImage(){
    const url = this.frontURL + "&tag=art&rating=PG";
    this.newImage(url);
  }

  newAnimeImage(){
    const url = this.frontURL + "&tag=anime&rating=PG";
    this.newImage(url);
  }

  newCustomImage(tag){
    const url = this.frontURL + `&tag=${tag}&rating=PG`;
    this.newImage(url);
  }

  toggleCoverContain(){
    if(this.imageElement.classList.contains("cover")){
      this.imageElement.classList.replace("cover","contain");

    } else{
      this.imageElement.classList.replace("contain", "cover");
    }
  }

  takeScreenshot(){
    const modal = document.querySelector("#image-display")
    let print = html2canvas(this.imageElement, { allowTaint:true}).then(function (canvas) {
      modal.appendChild(canvas);
    });
    modal.classList.remove("d-none")
  }
}
