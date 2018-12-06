// search implementation with jquery

     var filterImages = () => {
     var filterValue, images, caption, i;
    // input value
    filterValue = document.getElementById('search').value.toUpperCase();
    // images array
    images = document.getElementsByClassName("data");
    //Loop through captions
    for(var i=0; i<images.length; i++) {
      caption = images[i].getAttribute("data-title");
      //If matched
      if (caption.toUpperCase().indexOf(filterValue) > -1) {
        images[i].style.display= '';
      } else {
        images[i].style.display= 'none';
      }
    }
  }
  
  //event listener
  search.addEventListener('keyup', filterImages);
 
//light box plugins
    

lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'showImageNumberLabel': false,
    'wrapAround': true,
    'positionFromTop': 80
  })