const WORDS = ["Path", "System", "Passion", "legacy"];

let count = 0;
const SWAPPER = document.querySelector(".slide");
const SWAP = () => {
  if (!document.startViewTransition) {
    SWAPPER.innerText = WORDS[(count += 1) % WORDS.length];
  } else {
    document.startViewTransition(() => {
      SWAPPER.innerText = WORDS[(count += 1) % WORDS.length];
    });
  }
};

setInterval(SWAP, 2000);
