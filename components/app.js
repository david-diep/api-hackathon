class App{
  constructor(imageHandler,textHandler){
    this.imageHander=imageHandler;
    this.textHandler=textHandler;
  }

  start(){
    this.imageHander.newImage();
    //this.textHandler.new();
  }
}
