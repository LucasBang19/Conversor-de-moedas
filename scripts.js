const button = document.getElementById("convert-button");
const select = document.getElementById("select-currency");

const euro = 5.55;

const dolar = 5.2;

const converButton = () => {
  const input = document.getElementById("input-real").value;
  const valor = document.getElementById("valorHTML");
  const valor2 = document.getElementById("valorHTML2");

  // valor2.innerHTML = input / 5.2
  // valor.innerHTML = input;

  valor.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(input);

  if (select.value === "US$ Dólar Americano") {
    valor2.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(input / dolar);
  }

  if (select.value === "€ Euro") {
    valor2.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(input / euro);
  }
};

changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-img");

  if (select.value === "US$ Dólar Americano") {
    currencyName.innerHTML = "Dólar americano";
    currencyImg.src = "./img/estados-unidos (1) 1.svg";
  }

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./img/euro.png";
  }

  converButton();
};

button.addEventListener("click", converButton);

select.addEventListener("change", changeCurrency);
