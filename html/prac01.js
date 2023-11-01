document.getElementById("addNumbering").addEventListener("click", function () {
  let num1 = parseInt(prompt("첫 번째 숫자는?"));
  let num2 = parseInt(prompt("두 번째 숫자는?"));
  let sum = addNumber(num1, num2);
  alert(`두 수의 합은 ${sum} 입니다.`);
});

function addNumber(a, b) {
  return a + b;
}
