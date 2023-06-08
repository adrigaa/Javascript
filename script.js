var number = prompt("Insira um número:");
var total = 0;

for (var i = 1; i <= number; i++) {
  total += i;
}

alert("A soma de todos os números de 1 até " + number + " é: " + total);