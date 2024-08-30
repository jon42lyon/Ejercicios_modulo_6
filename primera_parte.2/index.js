
function sumarTresEnteros(numero1, numero2, numero3) {
    // Convierte las entradas a números antes de sumar
    return Number(numero1) + Number(numero2) + Number(numero3);
}

window.addEventListener("load", function() {
    var form1 = document.getElementById("form1");

    form1.addEventListener("submit", function(e) {
        e.preventDefault(); 

        var n1 = document.getElementById("txtNumero1").value;
        var n2 = document.getElementById("txtNumero2").value;
        var n3 = document.getElementById("txtNumero3").value;

        var resultado = sumarTresEnteros(n1, n2, n3);

        document.getElementById("outputResultado").textContent = "El resultado de la suma es: " + resultado;
    });
});