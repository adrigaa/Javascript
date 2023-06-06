let age;

function yourAge() {
    age = parseInt(prompt("Digite o ano em que nasceu"));
}

yourAge();

function whatsGeneration() {
    if (age >= 1946 & age <= 1964) {
        alert ("Você pertence à geração Baby Boomers!");
    } else if (age >= 1965 & age <= 1980) {
        alert ("Você pertence à geração X!");
    } else if (age >= 1981 & age <= 1996) {
        alert ("Você pertence à geração Y (Millennials)!");
    } else if (age >= 1997 & age <= 2010) {
        alert ("Você pertence à geração Z!");
    } else if (age > 2010) {
        alert ("Você pertence à geração Alfa!")
    }
}

whatsGeneration();

