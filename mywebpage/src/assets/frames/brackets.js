const checkButton = document.getElementById("checkButton");
const inputField = document.getElementById("inputField");
const symboles = document.getElementById("symbols");

function verifySymbols(str, symbolePairs) {
  let openSymbols = 0;
  let closeSymbols = 0;
  symbolePairs.forEach((element) => {
    for (var i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      if (char == element[0]) ++openSymbols;
      if (char == element[1]) ++closeSymbols;
    }
  });

  return openSymbols == closeSymbols;
}

checkButton.addEventListener("click", () => {
  const bracketPairs = symboles.value.split(",").map((pair) => pair.split(""));

  if (verifySymbols(inputField.value, bracketPairs)) {
    inputField.classList.remove("input-error");
    inputField.classList.add("input-correct");
  } else {
    inputField.classList.remove("input-correct");
    inputField.classList.add("input-error");
  }
});
