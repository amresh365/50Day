let togles = document.querySelectorAll(".btn-togle");

togles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
