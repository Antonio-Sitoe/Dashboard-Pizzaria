import showProduts from "./showProduts.js";

export default function searchBar() {
  const content = document.querySelector(".searchs");

  const prods = document.querySelector(".produts ul");

  const viewAll = document.querySelector(".titlecat.all");

  let i = 0;
  const produtos = showProduts().produtos;

  viewAll.addEventListener("click", show);
  viewAll.addEventListener("touchstart", show);

  function show() {
    const text = viewAll.querySelector("div span");
    if (i === 0) {
      content.classList.add("close");
      produtos.forEach((item) => item.classList.add("ative"));
      text.innerText = "See one";
      prods.classList.add("ative");
      i = 1;
    } else if (i === 1) {
      content.classList.remove("close");
      produtos.forEach((item) => {
        item.classList.remove("ative");
        showProduts().escopo();
        text.innerText = "View All";
        prods.classList.remove("ative");
      });
      i = 0;
    }
  }
}
