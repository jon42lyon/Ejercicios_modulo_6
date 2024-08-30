
function sumarTresEnteros(numero1, numero2, numero3) {
    return Number(numero1) + Number(numero2) + Number(numero3);
}

window.addEventListener("load", function() {
    loadTest();
});

function loadTest() {
    QUnit.module('sumarTresEnteros', function() {
        QUnit.test("sumar 3 números positivos", function(assert) {
            assert.equal(sumarTresEnteros(1, 2, 3), 6, "Suma de 1 + 2 + 3 debe ser 6");
        });

        QUnit.test("sumar 3 números negativos", function(assert) {
            assert.equal(sumarTresEnteros(-1, -3, 0), -4, "Suma de -1 + -3 + 0 debe ser -4");
        });

        QUnit.test("sumar 3 números positivos como strings", function(assert) {
            assert.equal(sumarTresEnteros('2', '1', '3'), 6, "Suma de '2' + '1' + '3' debe ser 6");
        });

        QUnit.test("sumar 3 números negativos como strings", function(assert) {
            assert.equal(sumarTresEnteros('-1', '-3', '-5'), -9, "Suma de '-1' + '-3' + '-5' debe ser -9");
        });
    });
}