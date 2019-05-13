const $form = document.getElementById("calculator");

function handleSubmit(event) {
  event.preventDefault();
  const $first = event.target.elements.first;
  const $second = event.target.elements.second;
  const $operation = event.target.elements.operations.value;
  const $output = event.target.elements.result;
  $output.innerText = returnOperation($first.value, $second.value, $operation);
}

function returnOperation(firstNumber, secondNumber, operationValue) {
  switch (operationValue) {
    case "sum":
      return parseFloat(firstNumber) + parseFloat(secondNumber);
      break;

    case "rest":
      return parseFloat(firstNumber) - parseFloat(secondNumber);
      break;

    case "multiply":
      return parseFloat(firstNumber) * parseFloat(secondNumber);
      break;

    case "divide":
      return parseFloat(firstNumber) / parseFloat(secondNumber);
      break;

    case "square":
      return Math.pow(parseFloat(firstNumber), 1 / parseFloat(secondNumber));
      break;

    case "power":
      return parseFloat(firstNumber) ** parseFloat(secondNumber);
      break;

    default:
      break;
  }
}

$form.addEventListener("submit", handleSubmit);
