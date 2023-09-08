const WORDS = ["Path", "System", "Passion", "legacy"];

let count = 0;
const SWAPPER = document.querySelector(".slide");

const SWAP = () => {
  SWAPPER.innerText = WORDS[(count += 1) % WORDS.length];
};

// Initially hide the SWAPPER element
SWAPPER.style.display = "none";

// Function to start the word animation
function startWordAnimation() {
  // Show the SWAPPER element
  SWAPPER.style.display = "block";

  // Start the word animation
  setInterval(SWAP, 2000);
}

// Loader
window.addEventListener("load", loader);

function loader() {
  const TLLOAD = gsap.timeline({
    default: {
      ease: "power2",
    },
  });

  TLLOAD.to(".images-container", { height: 400, duration: 1.3, delay: 0.4 })
    .to(".bloc-txt", { height: "auto", duration: 0.6 }, "-=0.8")
    .to(".bloc-txt h2", { y: 0 }, "-=0.6")
    .to(".f2", { y: 0, duration: 0.6 }, "-=0.6")
    .to(".flip-img1", { display: "none", duration: 0 })
    .to(".f2", { y: "-100%" })
    .to(".load-container", { autoAlpha: 0, duration: 0.8, delay: 0.7 })
    .add(() => {
      document.querySelector(".container").play();
    }, "-=0.8")
    .add(() => {
      document.querySelector(".load-container").style.display = "none";

      // Start the word animation after the loader is complete
      startWordAnimation();
    });
}
