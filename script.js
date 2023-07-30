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
