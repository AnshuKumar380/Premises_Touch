// Hamburger
const hamMenu = document.querySelector(".hamburger-menu");
const offScreenMenu = document.querySelector(".nav-links");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// Changing text in hero section
const textHolder = document.getElementById('textHolder');
const paragraphs = [
    { text: "Do you have a dream? We will share it with you and make it real", color: "blue"},
    { text: "Do you have a plan? We will develop it untill it becomes alive", color: "orange"},
    { text: "Do you desire a life? We will breathe into it to make it true", color: "grey"},
];
let currentParagraphIndex = 0;

function showNextParagraph() {
    const currentParagraph = paragraphs[currentParagraphIndex];
    textHolder.textContent = currentParagraph.text;
    textHolder.style.color = currentParagraph.color;
    textHolder.style.opacity = 1;

    // Wait for a certain duration before hiding the current paragraph
    setTimeout(function () {
        textHolder.style.opacity = 0;

        // Move to the next paragraph
        currentParagraphIndex++;

        if (currentParagraphIndex === paragraphs.length) {
            currentParagraphIndex = 0;
        }

        // Show the next paragraph after a brief delay
        setTimeout(showNextParagraph, 1000); 
    }, 3500); 
}

showNextParagraph();

/*
 * Back to top button
 */

const backTopBtn = document.querySelector(".back-top-btn");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    backTopBtn.classList.add("active");
  } else {
    backTopBtn.classList.remove("active");
  }
});


// Scroll Reveal

// Hero Section
    let heroText = document.querySelector('.hero-text');
    let heroImg = document.querySelector('.hero-img');

ScrollReveal().reveal((heroText), {
  scale: 0.85,
  delay: 300,
  reset: true,
  viewFactor: 0.3
});
ScrollReveal().reveal((heroImg), 
{
  rotate: {
      x: 7,
      z: 6
  },
  easing: 'ease-in',
  delay: 500,
  reset: true,
  viewFactor: 0.3

});

// About section
let aboutHeading = document.querySelector('.about-heading');
let aboutImg = document.querySelector('.about-img');
let aboutTextP = document.querySelector('.aboutText-p');
let aboutTextBtn = document.querySelector('.about-text-btn');
ScrollReveal().reveal((aboutHeading), {
  scale: 0.85,
  delay: 300,
  reset: true,
  easing: 'ease-in',
});

ScrollReveal().reveal((aboutImg), 
{
  scale: 0.3,
  delay: 300,
  reset: true,
  origin: 'bottom',
  viewFactor: 0.3

});

ScrollReveal().reveal((aboutTextP), {
  scale: 0.8,
  delay: 400,
  reset: true,
  rotate: {
    x: 9,
    z: 9
},
  viewFactor: 0.3
});
ScrollReveal().reveal((aboutTextBtn), {
  scale: 0.85,
  easing: 'steps(5)',
  delay: 600,
  reset: true,
  viewFactor: 0.2
});


// Service Section 
let serviceH1 = document.querySelector('.serviceH1');
let serviceIntro = document.querySelector('.service-intro');
let serviceCol = document.querySelectorAll('.service-box');
ScrollReveal().reveal((serviceH1), {
  scale: 0.85,
  delay: 300,
  reset: true,
  easing: 'ease-in',
});
ScrollReveal().reveal((serviceCol), {
  origin: 'bottom',
  scale: 0.45,
  delay: 500,
  reset: true,
  easing: 'ease-out',
  viewFactor: 0.3
});
ScrollReveal().reveal((serviceIntro), {
  delay: 400,
  reset: true,
  easing: 'ease-in',
});

// Blog Section
let blogIntro = document.querySelector('.blogIntro');
let blogHeading = document.querySelector('.blogHeading');
let blogImg = document.querySelectorAll('.blog-img');
let blogText = document.querySelectorAll('.blog-text');

ScrollReveal().reveal((blogHeading), {
  scale: 0.85,
  delay: 400,
  reset: true,
  easing: 'ease-in',
  viewFactor: 0.3
});
ScrollReveal().reveal((blogIntro), {
  delay: 300,
  reset: true,
  easing: 'ease-in',
  viewFactor: 0.3
});
ScrollReveal().reveal((blogImg), {
  scale: 0.85,
  delay: 500,
  reset: true,
  rotate: {
    x: 70,
    z: 70
},
  viewFactor: 0.3
});
ScrollReveal().reveal((blogText), {
  origin: 'bottom',
  scale: 0.95,
  delay: 600,
  reset: true,
  easing: 'ease-in',
  viewFactor: 0.3
});

// contact section
let tactIntro = document.querySelector('.tact-intro');
let tactHeader = document.querySelector('.tact-header');
let offices = document.querySelectorAll('.office-box');
let input = document.querySelectorAll('input');
let sendBtn = document.querySelectorAll('.send-btn');
let textarea = document.querySelectorAll('textarea');

ScrollReveal().reveal((tactHeader), {
  scale: 0.9,
  delay: 400,
  reset: true,
  easing: 'ease-in',
  viewFactor: 0.3
});

ScrollReveal().reveal((tactIntro), {
  delay: 300,
  reset: true,
  easing: 'ease-in',
  viewFactor: 0.3
});

ScrollReveal().reveal((offices), {
  scale: 0.9,
  easing: 'ease-in',
  delay: 500,
  reset: true,
  viewFactor: 0.4
});

ScrollReveal().reveal((input), 
{
  rotate: {
      x: 10,
      z: 9
  },
  delay: 600,
  reset: true,
  origin: 'bottom',
  viewFactor: 0.4
});
ScrollReveal().reveal((sendBtn), 
{
  rotate: {
      x: 10,
      z: 9
  },
  delay: 600,
  reset: true,
  origin: 'bottom',
  viewFactor: 0.4
});

ScrollReveal().reveal((textarea), 
{
  rotate: {
      x: 10,
      z: 9
  },
  delay: 600,
  reset: true,
  viewFactor: 0.4

});

// Footer section
let footLogo = document.querySelector('.footLogo');
let footLinks = document.querySelectorAll('.foot-links');
let footcc = document.querySelectorAll('.footcc');

ScrollReveal().reveal((footLinks), {
  scale: 0.85,
  easing: 'ease-in',
  delay: 400,
  reset: true,
  viewFactor: 0.3
});

ScrollReveal().reveal((footLogo), 
{
  rotate: {
      x: 10,
      z: 9
  },
  delay: 300,
  reset: true,
  origin: 'bottom',
  viewFactor: 0.3
});

ScrollReveal().reveal((footcc), {
  origin: 'bottom',
  scale: 0.85,
  delay: 500,
  reset: true,
  easing: 'ease-in',
  viewFactor: 0.3
});