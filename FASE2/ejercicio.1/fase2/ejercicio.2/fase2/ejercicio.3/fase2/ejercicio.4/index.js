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

document.getElementById("edadForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const resultado = document.getElementById("resultado");

    const edad = calcularEdad(fechaNacimiento);
    resultado.textContent = `Tu edad es: ${edad} años.`;
});