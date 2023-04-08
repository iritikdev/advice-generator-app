const cardHeader = document.querySelector(".card__header");
const cardBody = document.querySelector(".card__body");

async function fetchAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const { slip } = await response.json();
  cardHeader.textContent = `Advice #${slip?.id}`;
  cardBody.textContent = `"${slip?.advice}"`;
}
