function validarEmail(email) {
    const patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(email);
}

document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;
    const resultado = document.getElementById("resultado");

    if (validarEmail(email)) {
        resultado.textContent = `El correo electrónico "${email}" es válido.`;
    } else {
        resultado.textContent = `El correo electrónico "${email}" no es válido.`;
    }
});