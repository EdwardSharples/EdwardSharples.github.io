
window.addEventListener("load", () => {
  // Get the nav bar element
  const navBar = document.querySelector(".nav");
  // Set the delay for the nav bar to slide down
  setTimeout(() => {
    // Set the nav bar's position to its original position
    navBar.style.transform = "translateY(0)";
  }, 2500); // Delay the slide down by 2.5 seconds
});


const art = document.getElementById('art');

window.addEventListener("load", () => {
  // Add the 'fade-in' class to the image element after 1 second
  setTimeout(function() {
    art.classList.add("fade-in");
  }, 1000);
});

const welcomeMessage = document.querySelector('.welcome-message');

window.addEventListener('load', () => {
  setTimeout(() => {
    welcomeMessage.style.opacity = 1;
  }, 1000); // Delay the animation by 1 second
});

window.addEventListener("load", () => {
  setTimeout(function() {
  document.getElementById("request-button").style.opacity = 1;
  }, 2000); // Delay the transition by 2 seconds
  });


const subtitle = document.querySelector('.subtitle');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    subtitle.style.opacity = 1;
  } else {
    subtitle.style.opacity = 0;
  }
});


const title = document.querySelector('.title'); // Select the title element

window.addEventListener('load', () => {
  title.classList.add('fade-out');
  setTimeout(function() {
    title.classList.add('fade-out');
  }, 800); // Delay the transition by 1 second
});


