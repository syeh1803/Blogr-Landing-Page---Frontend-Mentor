const burger = document.querySelector("#burger");
const close = document.querySelector("#close");
const navList = document.querySelector("#nav-list");

// burger icon toggle
burger.addEventListener("click", () => {
  navList.classList.toggle("show");
  burger.style.display = "none";
  close.style.display = "block";
});

// close icon toggle
close.addEventListener("click", () => {
  navList.classList.toggle("show");
  close.style.display = "none";
  burger.style.display = "block";
});

// accordion
document.querySelectorAll("#arrow-icon").forEach((arrow) => {
  // mobile
  arrow.addEventListener("click", () => {
    arrow.classList.toggle("open");
    arrow.parentElement.nextElementSibling.classList.toggle("show");
  });

  // desktop
  arrow.addEventListener("mouseover", () => {
    arrow.classList.toggle(":hover");
    arrow.parentElement.nextElementSibling.classList.add("show");
  });
});

document.querySelectorAll("#nav-dropdown").forEach((dropdown) => {
  // desktop
  dropdown.addEventListener("mouseleave", () => {
    dropdown.classList.remove("show");
  });
});
