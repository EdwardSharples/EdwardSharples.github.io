const art = document.getElementById('art');
const requestButton = document.querySelector('.request-button');

requestButton.addEventListener('click', () => {
  art.classList.toggle('open');
});

const square = document.getElementById('square');

function rotateSquare() {
  // Toggle the "rotated" class on the square element
  square.classList.toggle('rotated');
}

square.addEventListener('click', rotateSquare);