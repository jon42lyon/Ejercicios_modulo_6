function esPrimo(num) {
    if (num <= 1) return false; 
    if (num === 2) return true; 
    if (num % 2 === 0) return false; 

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

document.getElementById("primoForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const numero = parseInt(document.getElementById("numero").value);
    const resultado = esPrimo(numero) ? "es primo" : "no es primo";

    document.getElementById("resultado").textContent = `El número ${numero} ${resultado}.`;
});