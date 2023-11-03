let calculator = document
  .getElementById("btn1")
  .addEventListener("click", function () {
    let first = parseInt(document.getElementById("val1").value);
    let operators = document.getElementById("operators").value;
    let second = parseInt(document.getElementById("val2").value);
    let calculatedResult = result(first, operators, second);

    document.getElementById("result").value = calculatedResult;
  });

function result(first, operators, second) {
  switch (operators) {
    case "+":
      return first + second;
    case "-":
      return first - second;
    case "*":
      return first * second;
    case "/":
      return first / second;
    default:
      return "올바른 연산자를 입력하세요. (+, -, *, /)";
  }
}
