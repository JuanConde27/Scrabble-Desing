let question = document.querySelectorAll(".question");
let btnDropdown = document.querySelectorAll(".question .more");
let answer = document.querySelectorAll(".answer");
let parrafo = document.querySelectorAll(".answer p");
const faqs = document.querySelectorAll(".item-faq");
const prevElement = null;

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    const children = faq.children[1];

    const active = document.querySelector(".show");

    if (active && active !== children) {
      active.classList.remove("show");
      active.style.height = "0";
    }

    children.classList.toggle("show");
    const paragraph = children.children[0].clientHeight;
    if (children.classList.contains("show")) {
      children.style.height = `${paragraph}px`;
    } else {
      children.style.height = `0px`;
    }
  });
});
