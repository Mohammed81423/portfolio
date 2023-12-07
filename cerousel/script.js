let right=document.querySelector('.right')
let hamburger=document.querySelector('.hamburger')
 

let show=false
 hamburger.addEventListener('click',function(){
    show=!show
    if(show){
        right.setAttribute('id','bar')
    }else{
        right.setAttribute('id','')
    }
 })























const carouselItems = document.querySelectorAll('.containers-items');
let currentIndex = 0;

function showSlide(index) {
  // Hide all carousel items
  carouselItems.forEach(item => {
    item.style.display = 'none';
  });

  // Show the slide at the specified index
  carouselItems[index].style.display = 'block';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) %carouselItems.length;
  showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Set up event listeners for next and previous buttons
document.querySelector('.pre').addEventListener('click', nextSlide);
document.querySelector('.next').addEventListener('click', previousSlide);