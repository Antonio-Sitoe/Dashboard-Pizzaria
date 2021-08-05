export default function showProduts() {
  const produtos = document.querySelectorAll("li div.bigCards");
  const categorias = document.querySelectorAll(".cardArrow");

  const escopo = () => {
    const cate = "pizzas";
    mostraPrimeiro(cate);
  };
  escopo();

  function mostraPrimeiro(cate) {
    produtos.forEach((prod) => {
      prod.classList.remove("ative");
    });

    produtos.forEach((prod) => {
      if (prod.dataset.category === cate) {
        prod.classList.add("ative");
      }
    });
  }

  const classlist = (nome, e) => e.target.classList.contains(nome);

  // adicionar o evento
  categorias.forEach((btn) => btn.addEventListener("click", show));

  // evento
  function show(e) {
    const bolos = "bolos";
    const pizzas = "pizzas";
    const sobremesa = "sobremesa";
    const bebidas = "bebidas";

    if (classlist(bolos, e)) {
      mostraPrimeiro(bolos);
    } else if (classlist(pizzas, e)) {
      mostraPrimeiro(pizzas);
    } else if (classlist(sobremesa, e)) {
      mostraPrimeiro(sobremesa);
    } else if (classlist(bebidas, e)) {
      mostraPrimeiro(bebidas);
    }
  }
  return {
    produtos,
    escopo,
  };
}
