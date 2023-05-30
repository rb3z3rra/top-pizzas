export const frases = () => {
  const frasesArray = [
    "Amor sem beijo é como pizza sem queijo.",
    "Acha que pode me chantagear com comida? Pois fique sabendo que amo pizza!",
    "Feliz e pizza têm cinco letras. Não pode ser coincidência.",
    "Pizza boa é pizza dividida com os amigos!",
    "Quanto mais pizza melhor!",
    "Pizza é sempre uma boa ideia!",
    "Dinheiro não compra felicidade, mas compra pizza que é a mesma coisa!",
    "Das coisas simples que me fazem feliz: pizza gelada no café da manhã.",
    "Você é o queijo da minha pizza.",
    "Que nunca nos falte paz, amor, felicidade e dinheiro para comprar pizza!",
    "Pizza: o círculo da vida.",
    "Sem pizza, a vida não faria sentido.",
  ];

  function randomNum() {
    return Math.floor(Math.random() * 12);
  }

  return frasesArray[randomNum()];
};
