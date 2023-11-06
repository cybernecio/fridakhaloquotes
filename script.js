const quoteBox = document.getElementById("quote-box");
const textElement = document.getElementById("text");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const tweetQuoteButton = document.getElementById("tweet-quote");

function getNewQuote() {
  // Utiliza una API para obtener una cita aleatoria de Frida Kahlo
  // Reemplaza la siguiente URL con la API que elijas
  const apiUrl = "URL_DE_LA_API_AQUI";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const { quote, author } = data;

      // Actualiza los elementos de la página con la nueva cita y autor
      textElement.textContent = quote;
      authorElement.textContent = author;
    })
    .catch((error) => {
      console.error("Error al obtener la cita:", error);
    });
}

newQuoteButton.addEventListener("click", getNewQuote);

// Llama a getNewQuote cuando se carga la página por primera vez
document.addEventListener("DOMContentLoaded", getNewQuote);
