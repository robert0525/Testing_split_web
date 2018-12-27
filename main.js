const top = document.querySelector(".top");
const bottom = document.querySelector(".bottom");
const container = document.querySelector(".container");

top.addEventListener("mouseenter", () => {
  container.classList.add("hover-top");
});

top.addEventListener("mouseleave", () => {
  container.classList.remove("hover-top");
});

bottom.addEventListener("mouseenter", () => {
  container.classList.add("hover-bottom");
});

bottom.addEventListener("mouseleave", () => {
  container.classList.remove("hover-bottom");
});
