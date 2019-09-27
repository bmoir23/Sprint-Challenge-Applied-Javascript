/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
// trying my hand at stretch 
function carouselMaker(){

  

  const carouselCont = document.querySelector('.carousel-container');
  const carouselDiv = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');

  
  img1.src = './assets/carousel/mountains.jpeg';
  img2.src = './assets/carousel/computer.jpeg';
  img3.src = './assets/carousel/trees.jpeg';
  img4.src = './assets/carousel/turntable.jpeg';


  carouselDiv.classList.add('carousel');
  button1.classList.add('right-button');
  button2.classList.add('left-button');

  carouselCont.appendChild(carouselDiv);
  carouselDiv.appendChild(img1);
  carouselDiv.appendChild(img2);
  carouselDiv.appendChild(img3);
  carouselDiv.appendChild(img4);
  carouselDiv.appendChild(button1);
  carouselDiv.appendChild(button2);

  return carouselDiv;

  //  not really sure how to apply the functionality. Im pretty sure this is the structure that is needed 

}