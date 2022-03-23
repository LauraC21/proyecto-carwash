const formulario = document.querySelector('#formulario')
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const rut = document.querySelector('#rut')
const digitoVerificador = document.querySelector('#digito-verificador')
const direccion = document.querySelector('#direccion')
const comuna = document.querySelector('#comuna')
const vehiculo = document.querySelector('#vehiculo')
const marca = document.querySelector('#marca')
const modelo = document.querySelector('#modelo')
const ano = document.querySelector('#ano')
const revision = document.querySelector('#revision')

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    const tarifas = document.querySelector('#tarifas')

    if (nombre.value && apellido.value && rut.value && digitoVerificador.value && direccion.value && comuna.value
        && vehiculo.value && marca.value && modelo.value && ano.value && revision.value) {
        nombre.value = ""
        apellido.value = ""
        rut.value = ""
        digitoVerificador.value = ""
        direccion.value = ""
        comuna.value = ""
        vehiculo.value = ""
        marca.value = ""
        modelo.value = ""
        ano.value = ""
        revision.value = ""
    } else {
        alert("Faltan datos por llenar")
    }

    if(tarifas.value === "tarifa1") {
        alert("El total a pagar es $8.330 (IVA: $1.330)")
    } else {
        alert("El total a pagar es $17.850 (IVA: $2.850)")
    }
})