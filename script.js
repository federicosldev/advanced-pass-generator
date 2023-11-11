// Mostrar el lenght de la pass
const rangeInput = document.getElementById('inputRange');
const rangeInputValue = document.getElementById('inputRangeValue');
rangeInput.addEventListener('input', () => {
  const lenght = rangeInput.value;
  rangeInputValue.textContent = 'LENGTH: ' + lenght;
});

// Caracteres aleatorios
const generateRandomCaracters = (length, caracterSet) => {
  let result = '';

  for (let i = 0; i < length; i++) {
    result += caracterSet.charAt(
      Math.floor(Math.random() * caracterSet.length)
    );
  }
  return result;
};

// Seleccionar los caracteres que queremos mostrar
const handleCaracters = () => {
  const length = parseInt(rangeInput.value);
  let selectedCaracter = '';

  if (checkboxUpper.checked) {
    selectedCaracter += 'AQSWDEFRGTHYJUKILOÑPZXCVBNM';
  }
  if (checkboxLower.checked) {
    selectedCaracter += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (checkboxNumbers.checked) {
    selectedCaracter += '0123456789';
  }
  if (checkboxSymbols.checked) {
    selectedCaracter += '%-!¡;.,*{}$&/()[]?¿';
  }

  inputText.value = generateRandomCaracters(length, selectedCaracter);
};

const checkboxUpper = document.getElementById('uppercase');
const checkboxLower = document.getElementById('lowercase');
const checkboxNumbers = document.getElementById('numbers');
const checkboxSymbols = document.getElementById('symbols');
const inputText = document.getElementById('pass');
const generatePass = document.getElementById('generatePass');

checkboxUpper.addEventListener('change', handleCaracters);
checkboxLower.addEventListener('change', handleCaracters);
checkboxNumbers.addEventListener('change', handleCaracters);
checkboxSymbols.addEventListener('change', handleCaracters);
generatePass.addEventListener('click', handleCaracters);
