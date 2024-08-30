function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

function calcularTotal(valorCompra, fechaNacimiento, genero) {
    const IVA = 0.19;
    const valorSinIVA = valorCompra / (1 + IVA);
    let descuentoEspecial = 0;
    const edad = calcularEdad(fechaNacimiento);
    
    if (genero === "F") {
        descuentoEspecial += 3;
        if (edad > 19) {
            descuentoEspecial += 2;
        }
    } else if (genero === "M") {
        if (valorCompra > 200000) {
            descuentoEspecial += 1.5;
        }
        if (edad > 23) {
            descuentoEspecial += 3;
        }
    }

    const descuentoIVA = valorCompra * IVA;
    const valorConDescuento = valorCompra - descuentoIVA;
    const valorConDescuentoEspecial = valorConDescuento * (1 - descuentoEspecial / 100);

    return {
        montoPretendido: valorCompra.toFixed(2),
        descuentoIVA: descuentoIVA.toFixed(2),
        descuentoEspecial: (valorCompra - valorConDescuentoEspecial).toFixed(2),
        totalPagado: valorConDescuentoEspecial.toFixed(2)
    };
}

document.getElementById("compraForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const valorCompra = parseFloat(document.getElementById("valorCompra").value);
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const genero = document.getElementById("genero").value;

    const resultado = calcularTotal(valorCompra, fechaNacimiento, genero);

    document.getElementById("montoPretendido").textContent = `Monto pretendido de compra: $${resultado.montoPretendido}`;
    document.getElementById("descuentoIVA").textContent = `Descuento por IVA (19%): $${resultado.descuentoIVA}`;
    document.getElementById("descuentoEspecial").textContent = `Descuento especial: $${resultado.descuentoEspecial}`;
    document.getElementById("totalPagado").textContent = `Total a pagar: $${resultado.totalPagado}`;
});