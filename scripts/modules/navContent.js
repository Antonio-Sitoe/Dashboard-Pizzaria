export default function navContent() {
  const sections = document.querySelectorAll("section.section");
  sections[0].classList.remove("ative");

  const buttons = document.querySelectorAll(".navbar li");
  const spinner = document.querySelector(".spinner");

  const showMain = async (index) => {
    sections.forEach((item) => {
      item.classList.add("ative");
    });

    await new Promise((resolve, reject) => {
      spinner.classList.add("ative");
      setTimeout(() => {
        resolve();
      }, 700);
    });

    spinner.classList.remove("ative");
    sections[index].classList.remove("ative");
  };

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => showMain(index));
  });
}
