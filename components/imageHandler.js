class ImageHandler{
  constructor(imageElement){
    this.imageElement = imageElement;
    this.newImage = this.newImage.bind(this);

  }
  newImage(){
    this.imageElement.style.backgroundImage = "url('https://picsum.photos/1000/600')"
  }
}
