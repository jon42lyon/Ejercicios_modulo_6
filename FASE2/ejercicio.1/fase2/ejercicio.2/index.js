function esMultiplo(num1, num2) {
    return num1 % num2 === 0;
}

document.getElementById("multiploForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
    const resultado = document.getElementById("resultado");

    if (numero1 <= numero2) {
        resultado.textContent = "El primer número debe ser mayor que el segundo.";
        return;
    }

    if (esMultiplo(numero1, numero2)) {
        resultado.textContent = `El número ${numero1} es múltiplo de ${numero2}.`;
    } else {
        resultado.textContent = `El número ${numero1} no es múltiplo de ${numero2}.`;
    }
});