const abc = [
  { letra: "A", texto: "Amar es lo que siento desde el primer día que te vi." },
  { letra: "B", texto: "Besar tus labios es mi mayor deseo y mi mayor debilidad." },
  { letra: "C", texto: "Contigo cada momento se convierte en una dulce aventura." },
  { letra: "D", texto: "Deseo que nuestro amor dure por siempre, porque eres mi vida." },
  { letra: "E", texto: "Eres la razón por la que mi corazón late con tanta alegría." },
  { letra: "F", texto: "Frente a ti, encuentro mi refugio y mi felicidad." },
  { letra: "G", texto: "Girarían las estrellas antes de que deje de amarte." },
  { letra: "H", texto: "Hoy y siempre, mi corazón te pertenece por completo." },
  { letra: "I", texto: "Imposible es no amarte, porque eres mi razón de ser." },
  { letra: "J", texto: "Junto a ti, cada día es un nuevo motivo para sonreír." },
  { letra: "K", texto: "Kilómetros no separan lo que siento por ti, un amor sin fin." },
  { letra: "L", texto: "La pasión que compartimos es un fuego que nunca se apaga." },
  { letra: "M", texto: "Mi vida cobra sentido cuando estás a mi lado, mi amor." },
  { letra: "N", texto: "Nuestro amor es un tesoro que valoro más que cualquier riqueza." },
  { letra: "O", texto: "Ojos que brillan como las estrellas, eres mi luz en la oscuridad." },
  { letra: "P", texto: "Para mí, eres perfecta en todos los sentidos posibles." },
  { letra: "Q", texto: "Quiero que sepas que eres mi razón para sonreír cada día." },
  { letra: "R", texto: "Rendirme ante el amor que siento por ti, sería imposible." },
  { letra: "S", texto: "Sé que juntos superaremos cualquier obstáculo que se presente." },
  { letra: "T", texto: "Tu amor es mi refugio, donde encuentro paz y felicidad." },
  { letra: "U", texto: "Unidos somos invencibles, nuestro amor es inquebrantable." },
  { letra: "V", texto: "Verte sonreír es el regalo más hermoso que puedo recibir." },
  { letra: "W", texto: "Wildest dreams come true with you, my love (Los sueños más salvajes se hacen realidad contigo, mi amor)." },
  { letra: "X", texto: "Xilófonos no pueden tocar la melodía de mi corazón cuando estás cerca." },
  { letra: "Y", texto: "Yendo junto a ti es mi lugar favorito en todo el universo." },
  { letra: "Z", texto: "Zarpamos juntos en un mar de amor que nunca dejará de fluir." }
];

const cards = document.getElementById("cards");

for(const letter of abc) {
  cards.innerHTML += 
  `
  <div class="card">
    <div class="letter">${letter.letra}</div>
    <p class="prhase">${letter.texto}</p>
  </div>
  `
}