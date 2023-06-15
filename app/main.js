const btn = document.querySelector(".menu__button");

btn.addEventListener("click", funcaoMenuHamburgue);

function funcaoMenuHamburgue() {
  const menuNav = document.querySelector(".menu__nav");
  menuNav.classList.toggle("menu-active");

  btn.textContent === "☰"
    ? (btn.textContent = "☓")
    : (btn.textContent = "☰");
}


// MODAL ______________________________________
// A modal em si
const modal = document.querySelector(".modal");
const abriModealBtn = document.querySelector(".open");
const fecharModalBtn = document.querySelector(".close");

/* Ao clicar no botão de Abrir Modal, executamos a função
showModal() na Modal: */

setTimeout(() =>{
  modal.showModal();
}, '3000');

abriModealBtn.addEventListener("click", () => modal.showModal());
/* Ao clicar no botão de Fechar Modal, executamos a função
close() na Modal */
fecharModalBtn.addEventListener("click", () => modal.close());
