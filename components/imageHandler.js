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
    this.frontURL = "https://api.giphy.com/v1/gifs/random?api_key=CNytBS8UgzfMHNmmTQPrTwE31S88tvGC"

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
    var url = this.frontURL + "&tag=trippy&rating=PG";
    this.newImage(url);
  }

  newArtImage(){
    var url = this.frontURL + "&tag=art&rating=PG";
    this.newImage(url);
  }

  newAnimeImage(){
    var url = this.frontURL + "&tag=anime&rating=PG";
    this.newImage(url);
  }

  toggleCoverContain(){
    if(this.imageElement.classList.contains("cover")){
      this.imageElement.classList.remove("cover");
      this.imageElement.classList.add("contain");
    } else{
      this.imageElement.classList.remove("contain");
      this.imageElement.classList.add("cover");
    }
  }
}
