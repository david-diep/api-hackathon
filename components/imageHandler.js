class ImageHandler{
  constructor(imageElement){
    this.imageElement = imageElement;
    this.newImage = this.newImage.bind(this);
    this.newImageError = this.newImageError.bind(this)
    this.newImageSuccess = this.newImageSuccess.bind(this)
  }
  newImage(){
    $.ajax({
      method: "GET",
      dataType: "json",
      // headers:{
      //   api_key: "CNytBS8UgzfMHNmmTQPrTwE31S88tvGC",
      //   tag: "trippy",
      //   rating: "PG"
      // },
      url: "https://api.giphy.com/v1/gifs/random?api_key=CNytBS8UgzfMHNmmTQPrTwE31S88tvGC&tag=trippy&rating=PG",
      success: this.newImageSuccess,
      error: this.newImageError
    })
  }
  newImageSuccess(data){
    //var pData = JSON.parse(data)
    console.log(data);
    this.imageElement.style.backgroundImage = "url("+data.data.image_url+")";
  }
  newImageError(error){
    console.log(error)
  }
    //this.imageElement.style.backgroundImage = "";
    //this.imageElement.style.backgroundImage = "url('https://picsum.photos/750/450')";

}
