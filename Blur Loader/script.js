const loadText = document.querySelector(".Loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 100)})px`;
}
console.log(bg);
