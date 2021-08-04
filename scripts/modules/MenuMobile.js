export default function MenuMobile() {
  const menu = document.querySelector(".menuHamburguer");

  const addClass = (event) => {
    event.preventDefault();
    const asidss = document.querySelector(".asidss");
    asidss.classList.toggle("ative");
  };

  menu.addEventListener("click", addClass);
  menu.addEventListener("touchstart", addClass);
}
