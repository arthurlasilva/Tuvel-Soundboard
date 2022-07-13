//template para adicionar novos audios
//{ caminho: "audios/.mp3", legenda: "" },

let audios = [
  { caminho: "audios/pare.mp3", legenda: "PARE!" },
  { caminho: "audios/grito.mp3", legenda: "GRITO" },
  { caminho: "audios/jesus.mp3", legenda: "JEEESUSS" },
  { caminho: "audios/nao-e-o-pai.mp3", legenda: "Você não é o pai" },
  {
    caminho: "audios/que-isso-meu-filho.mp3",
    legenda: "Que isso meu filho calma",
  },
  { caminho: "audios/ratinhoo.mp3", legenda: "RATINHÔ" },
  { caminho: "audios/uepa.mp3", legenda: "UEPA" },
  { caminho: "audios/vixi-ratinho.mp3", legenda: "VIXI" },
  { caminho: "audios/xaropinho.mp3", legenda: "RAPAIIZ" },
  { caminho: "audios/ele-gosta.mp3", legenda: "ELE GOSTAA" },
  { caminho: "audios/among-us-sus.mp3", legenda: "Among Us SUS" },
  { caminho: "audios/ai-que-delicia-mickey.mp3", legenda: "AI QUE DILIÇA" },
  { caminho: "audios/cavalo.mp3", legenda: "CAVALO" },
  { caminho: "audios/faustao-errou.mp3", legenda: "ERRRROU" },
  { caminho: "audios/fbi-open-up.mp3", legenda: "FBI OPEN UP!" },
  {
    caminho: "audios/porque-nao-trabalha.mp3",
    legenda: "cadê você? porque não trabalha?",
  },
  {
    caminho: "audios/ABOBINA.mp3",
    legenda: "AAAH BOBINA",
  },
  {
    caminho: "audios/AI-MAMAE.mp3",
    legenda: "AII AII MAMÃE",
  },
  {
    caminho: "audios/AI-MAMAE2.mp3",
    legenda: "AII MAMÃE",
  },
  {
    caminho: "audios/AIAIAI.mp3",
    legenda: "AI AI AI",
  },
  {
    caminho: "audios/danca-gatinho.mp3",
    legenda: "DANÇA GATINHO, DANÇA",
  },
  {
    caminho: "audios/michael-jackson-panico.mp3",
    legenda: "WOOOAH, E HEE",
  },
  {
    caminho: "audios/olha-ele-ae.mp3",
    legenda: "OLHA ELE AE",
  },
  {
    caminho: "audios/TOME.mp3",
    legenda: "TOME!",
  },
  {
    caminho: "audios/UUUI.mp3",
    legenda: "UUUUUI",
  },
];

let botoes = document.querySelectorAll(".botao");
let legendas = document.querySelectorAll("p");

for (let i = 0; i < audios.length; i++) {
  legendas[i].textContent = audios[i].legenda;
  botoes[i].setAttribute("data-item", i);
}

let audioTag = document.querySelector("audio");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    let som = audios[botao.getAttribute("data-item")];
    audioTag.setAttribute("src", som.caminho);

    audioTag.addEventListener("loadeddata", () => {
      audioTag.play();
    });
  });
});
