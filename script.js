// const sliderInput = document.querySelector('.slider__input');
// const image = document.querySelector('.slider__image');

// let debounceTimeout;

// function debounce(fn, delay) {
//   return function(...args) {
//     clearTimeout(debounceTimeout);
//     debounceTimeout = setTimeout(() => fn.apply(this, args), delay);
//   };
// }

// function updateImageSize(value) {
//   const size = 100 + (value - 50) * 3; 
//   image.style.width = `${size}px`;
// }

// const debouncedResize = debounce((e) => {
//   updateImageSize(e.target.value);
// }, 150); 

// sliderInput.addEventListener('input', debouncedResize);


//2

const box = document.getElementById('box');


function moveBox(e) {
  const x = e.clientX;
  const y = e.clientY;
  box.style.transform = `translate(${x}px, ${y}px)`;
}


const debouncedMove = _.debounce(moveBox, 100);


document.addEventListener('mousemove', debouncedMove);
