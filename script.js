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


// Scroll Revel

// Hero Section
    let heroText = document.querySelector('.hero-text');
    let heroImg = document.querySelector('.hero-img');

ScrollReveal().reveal((heroText), {
  scale: 0.85,
  delay: 300,
  reset: true,
});
ScrollReveal().reveal((heroImg), 
{
  rotate: {
      x: 20,
      z: 20
  },
  delay: 500,
  reset: true,
  origin: 'bottom'

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
  scale: 1.60,
  delay: 300,
  reset: true,
  origin: 'bottom'

});

ScrollReveal().reveal((aboutTextP), {
  scale: 0.85,
  delay: 500,
  reset: true,
  rotate: {
    x: 20,
    z: 20
},
});
ScrollReveal().reveal((aboutTextBtn), {
  scale: 0.85,
  easing: 'steps(5)',
  delay: 600,
  reset: true,
});


// Service Section 
let serviceH1 = document.querySelector('.serviceH1');
let serviceIntro = document.querySelector('.service-intro');
let serviceCol = document.querySelectorAll('.service-col');
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
});
ScrollReveal().reveal((blogIntro), {
  delay: 300,
  reset: true,
  easing: 'ease-in',
});
ScrollReveal().reveal((blogImg), {
  scale: 0.85,
  delay: 500,
  reset: true,
  rotate: {
    x: 70,
    z: 70
},
});
ScrollReveal().reveal((blogText), {
  origin: 'bottom',
  scale: 1.3,
  delay: 600,
  reset: true,
  easing: 'ease-in',
});