var boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", cheakBoxes);

cheakBoxes();

function cheakBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
  console.log(triggerBottom);
}
