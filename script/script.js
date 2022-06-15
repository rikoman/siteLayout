let number = 0;
document.querySelector(".slider_next").addEventListener("click", function () {
  number = number + 150;
  let slider = document.querySelector(".slider_block");
  if (number > 1050) number = 0;
  slider.style.left = -number + "px";

  console.log(number);
});
document.querySelector(".slider_prev").addEventListener("click", function () {
  number = number - 150;
  let slider = document.querySelector(".slider_block");
  if (number < 0) number = 1050;
  slider.style.left = -number + "px";
  console.log(number);
});
// Плавная прокрутка
const menuLinks = document.querySelectorAll(".head_link[data-goto]");
if (menuLinks) {
  menuLinks.forEach((menuLinks) => {
    menuLinks.addEventListener("click", onMenu);
  });
  function onMenu(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + pageYOffset;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
      console.log(e.target.className);
      document.querySelector(".head_popup").classList.remove("active");
    }
  }
}
document.querySelector(".head_popup").addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.className != "head_link") {
    document.querySelector(".head_popup").classList.remove("active");
  }
});

//
// Меню бургер
document.querySelector(".head_burger").addEventListener("click", function () {
  let a = document.querySelector(".head_popup").classList.toggle("active");
  document.querySelector(".head").classList.toggle("active");
});

window.onresize = function () {
  var a = document.documentElement.clientWidth;
  if (document.querySelector(".head_popup").clientWidth > 756) {
    document.querySelector(".head_popup").classList.remove("active");
  }
};

const tooltip = document.querySelector(".tooltip");
const continent = document.querySelectorAll(".continent");
continent.forEach(continent => {
  continent.addEventListener("mousemove", function (e) {
      alert(this.dataset.title)
    tooltip.innerText = this.dataset.title;
    tooltip.style.top = e.y + 2700 + "px";
    tooltip.style.left = e.x + 20 + "px";
  });
  continent.addEventListener("mouseenter", () => {
    tooltip.style.display = "block";
  });
  continent.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
});
