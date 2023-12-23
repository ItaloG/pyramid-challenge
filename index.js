const PYRAMID_NUMBERS = 15;
const MESSAGES = {
  MISSING: "Faltam números para resolver a pirâmide!",
  WRONG_SOLVE: "Solução inválida!",
  SOLVE: "Parabêns você é incrivel!",
  INVALID_NUMBER: "Você deve user números de 1 a 15!",
  DUPLICATED_NUMBERS: "Alguém andou não olhando as regras!",
  ERROR: "Houve algun erro interno :(",
};

function updateTipNumber(number) {
  const tipNumber = document.getElementById(`tip-${number}`);
  if (tipNumber) tipNumber.remove();
}

function generateTipNumbers() {
  const numbersComponent = document.getElementById("numbers");
  for (let index = PYRAMID_NUMBERS; index >= 1; index--) {
    updateTipNumber(index);
  }
  for (let index = PYRAMID_NUMBERS; index >= 1; index--) {
    const ul = document.createElement("ul");
    ul.id = `tip-${index}`;
    ul.innerText = index;
    numbersComponent.appendChild(ul);
  }
}

function validatePyramid() {
  const inputs = document.querySelectorAll("input");
  const inputValues = [];
  for (let index = 0; index < inputs.length; index++) {
    const value = Number(inputs[index].value);
    if (!value) return "MISSING";
    if (value > 15 || value <= 0) return "INVALID_NUMBER";
    inputValues.push(value);
  }
  for (let index = 1; index <= inputValues.length; index++) {
    const hasDuplicated =
      inputValues.indexOf(index) !== inputValues.lastIndexOf(index);
    if (hasDuplicated) return "DUPLICATED_NUMBERS";
  }

  return "SUCCESS";
}

function solvePyramid() {
  const result = validatePyramid();

  const alert = document.getElementById("alert");

  switch (result) {
    case "MISSING":
      alert.innerText = MESSAGES.MISSING;
      alert.classList.remove("green-alert");
      alert.classList.add("red-alert");
      return;

    case "DUPLICATED_NUMBERS":
      alert.innerText = MESSAGES.DUPLICATED_NUMBERS;
      alert.classList.remove("green-alert");
      alert.classList.add("red-alert");
      return;

    case "INVALID_NUMBER":
      alert.innerText = MESSAGES.INVALID_NUMBER;
      alert.classList.remove("green-alert");
      alert.classList.add("red-alert");
      return;

    case "SUCCESS":
      alert.innerText = MESSAGES.SOLVE;
      alert.classList.remove("red-alert");
      alert.classList.add("green-alert");
      return;
    default:
      alert.innerText = MESSAGES.ERROR;
      alert.classList.remove("green-alert");
      alert.classList.add("red-alert");
      return;
  }
}

function fillSquare(input) {
  updateTipNumber(input.value);
  if (input.id.includes("15")) {
    const nearInput = document.getElementById("square-14");
    if (nearInput.value) {
      const nextInput = document.getElementById("square-10");
      const nextValue =
        +input.value > +nearInput.value
          ? +input.value - +nearInput.value
          : +nearInput.value - +input.value;

      nextInput.value = nextValue;
      updateTipNumber(nextValue);
      return;
    }
  }
  if (input.id.includes("14")) {
    const rightInput = document.getElementById("square-15");
    const leftInput = document.getElementById("square-13");
    if (rightInput.value) {
      const nextInput = document.getElementById("square-10");
      const nextValue =
        +input.value > +rightInput.value
          ? +input.value - +rightInput.value
          : +rightInput.value - +input.value;

      nextInput.value = nextValue;
      updateTipNumber(nextValue);
    }
    if (leftInput.value) {
      const nextInput = document.getElementById("square-9");
      const nextValue =
        +input.value > +leftInput.value
          ? +input.value - +leftInput.value
          : +leftInput.value - +input.value;

      nextInput.value = nextValue;
      updateTipNumber(nextValue);
      return;
    }
  }
  if (input.id.includes("13")) {
    const rightInput = document.getElementById("square-14");
    const leftInput = document.getElementById("square-12");
    if (rightInput.value) {
      const nextInput = document.getElementById("square-9");
      const nextValue =
        +input.value > +rightInput.value
          ? +input.value - +rightInput.value
          : +rightInput.value - +input.value;

      nextInput.value = nextValue;
      updateTipNumber(nextValue);
    }
    if (leftInput.value) {
      const nextInput = document.getElementById("square-8");
      const nextValue =
        +input.value > +leftInput.value
          ? +input.value - +leftInput.value
          : +leftInput.value - +input.value;

      nextInput.value = nextValue;
      updateTipNumber(nextValue);
      return;
    }
  }
  if (input.id.includes("12")) {
    const rightInput = document.getElementById("square-13");
    const leftInput = document.getElementById("square-11");
    if (rightInput.value) {
      const nextInput = document.getElementById("square-8");
      const nextValue =
        +input.value > +rightInput.value
          ? +input.value - +rightInput.value
          : +rightInput.value - +input.value;

      nextInput.value = nextValue;
    }
    if (leftInput.value) {
      const nextInput = document.getElementById("square-7");
      const nextValue =
        +input.value > +leftInput.value
          ? +input.value - +leftInput.value
          : +leftInput.value - +input.value;

      nextInput.value = nextValue;
      updateTipNumber(nextValue);
      return;
    }
  }
  if (input.id.includes("11")) {
    const nearInput = document.getElementById("square-12");
    if (nearInput.value) {
      const nextInput = document.getElementById("square-7");
      const nextValue =
        +input.value > +nearInput.value
          ? +input.value - +nearInput.value
          : +nearInput.value - +input.value;

      nextInput.value = nextValue;
      updateTipNumber(nextValue);
      return;
    }
  }
  if (input.id.includes("10")) {
    const nearInput = document.getElementById("square-9");
    if (nearInput.value) {
      const nextInput = document.getElementById("square-6");
      const nextValue =
        +input.value > +nearInput.value
          ? +input.value - +nearInput.value
          : +nearInput.value - +input.value;

      nextInput.value = nextValue;
      updateTipNumber(nextValue);
      return;
    }
  }
  if (input.id.includes("9")) {
    const rightInput = document.getElementById("square-10");
    const leftInput = document.getElementById("square-8");
    if (rightInput.value) {
      const nextInput = document.getElementById("square-6");
      const nextValue =
        +input.value > +rightInput.value
          ? +input.value - +rightInput.value
          : +rightInput.value - +input.value;

      nextInput.value = nextValue;
    }
    if (leftInput.value) {
      const nextInput = document.getElementById("square-5");
      const nextValue =
        +input.value > +leftInput.value
          ? +input.value - +leftInput.value
          : +leftInput.value - +input.value;

      nextInput.value = nextValue;
      updateTipNumber(nextValue);
      return;
    }
  }
  if (input.id.includes("8")) {
    const rightInput = document.getElementById("square-9");
    const leftInput = document.getElementById("square-7");
    if (rightInput.value) {
      const nextInput = document.getElementById("square-5");
      const nextValue =
        +input.value > +rightInput.value
          ? +input.value - +rightInput.value
          : +rightInput.value - +input.value;

      nextInput.value = nextValue;
    }
    if (leftInput.value) {
      const nextInput = document.getElementById("square-4");
      const nextValue =
        +input.value > +leftInput.value
          ? +input.value - +leftInput.value
          : +leftInput.value - +input.value;

      nextInput.value = nextValue;
      updateTipNumber(nextValue);
      return;
    }
  }
  if (input.id.includes("7")) {
    const nearInput = document.getElementById("square-8");
    if (nearInput.value) {
      const nextInput = document.getElementById("square-4");
      const nextValue =
        +input.value > +nearInput.value
          ? +input.value - +nearInput.value
          : +nearInput.value - +input.value;

      nextInput.value = nextValue;
      updateTipNumber(nextValue);
      return;
    }
  }
  if (input.id.includes("6")) {
    const nearInput = document.getElementById("square-5");
    if (nearInput.value) {
      const nextInput = document.getElementById("square-3");
      const nextValue =
        +input.value > +nearInput.value
          ? +input.value - +nearInput.value
          : +nearInput.value - +input.value;

      nextInput.value = nextValue;
      updateTipNumber(nextValue);
      return;
    }
  }
  if (input.id.includes("5")) {
    const rightInput = document.getElementById("square-6");
    const leftInput = document.getElementById("square-4");
    if (rightInput.value) {
      const nextInput = document.getElementById("square-3");
      const nextValue =
        +input.value > +rightInput.value
          ? +input.value - +rightInput.value
          : +rightInput.value - +input.value;

      nextInput.value = nextValue;
    }
    if (leftInput.value) {
      const nextInput = document.getElementById("square-2");
      const nextValue =
        +input.value > +leftInput.value
          ? +input.value - +leftInput.value
          : +leftInput.value - +input.value;

      nextInput.value = nextValue;
      updateTipNumber(nextValue);
      return;
    }
  }
  if (input.id.includes("4")) {
    const nearInput = document.getElementById("square-5");
    if (nearInput.value) {
      const nextInput = document.getElementById("square-2");
      const nextValue =
        +input.value > +nearInput.value
          ? +input.value - +nearInput.value
          : +nearInput.value - +input.value;

      nextInput.value = nextValue;
      updateTipNumber(nextValue);
      return;
    }
  }
  if (input.id.includes("3")) {
    const nearInput = document.getElementById("square-2");
    if (nearInput.value) {
      const nextInput = document.getElementById("square-1");
      const nextValue =
        +input.value > +nearInput.value
          ? +input.value - +nearInput.value
          : +nearInput.value - +input.value;

      nextInput.value = nextValue;
      updateTipNumber(nextValue);
      return;
    }
  }
  if (input.id.includes("2")) {
    const nearInput = document.getElementById("square-3");
    if (nearInput.value) {
      const nextInput = document.getElementById("square-1");
      const nextValue =
        +input.value > +nearInput.value
          ? +input.value - +nearInput.value
          : +nearInput.value - +input.value;

      nextInput.value = nextValue;
      updateTipNumber(nextValue);
      return;
    }
  }
  return;
}

document.getElementById("solve").addEventListener("click", solvePyramid);
document.getElementById("clear").addEventListener("click", generateTipNumbers);
document
  .querySelectorAll("input")
  .forEach((input) =>
    input.addEventListener("focusout", () => fillSquare(input))
  );

generateTipNumbers();
