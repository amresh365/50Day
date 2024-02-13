const panels = document.querySelectorAll(".panel");
// console.log(panals);
panels.forEach((mypanel) => {
  mypanel.addEventListener("click", () => {
    RemoveActiveClasses();
    mypanel.classList.add("active");
  });
});

function RemoveActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
