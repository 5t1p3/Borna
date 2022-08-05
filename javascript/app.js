const getElement = (selector) => {
  const el = document.querySelector(selector);
  if (el) return el;
  throw new Error(`Please check your classes : ${selector} does not exist`);
};

const navToggle = getElement(".nav-toggle");
const links = getElement(".nav-list");
const body = getElement("body");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
// navToggle.addEventListener("click", function () {
//   navToggle.classList.remove("nav-toggle");
// });
// body.addEventListener("click", function () {
//   links.classList.toggle("show-links");
// });
