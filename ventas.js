const VENTAS_BASE = 5;

function calcularComision(numeroVentas, PrecioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (PrecioProducto * 0.1);
    }
    return comision;
}

// Función genérica para validar todas las reglas solicitadas debajo del input
function validarCampo(idInput, idError) {
    let valor = recuperarTexto(idInput).trim();
    let errorSpan = document.getElementById(idError);
    
    // Regla: No puede estar vacío
    if (valor === "") {
        errorSpan.textContent = "Este campo no puede estar vacío.";
        return false;
    }
    
    // Regla: Solo números
    let soloNumeros = /^[0-9]+$/;
    if (!soloNumeros.test(valor)) {
        errorSpan.textContent = "Solo se permiten números.";
        return false;
    }
    
    // Regla: Máximo 5 dígitos
    if (valor.length > 5) {
        errorSpan.textContent = "El máximo permitido son 5 dígitos.";
        return false;
    }
    
    // Si todo está correcto, limpia el mensaje de error
    errorSpan.textContent = "";
    return true;
}

function calcular (){
    // Ejecuta y evalúa las validaciones para cada campo antes de operar
    let v1 = validarCampo("txtSueldoBase", "errorSueldoBase");
    let v2 = validarCampo("txtVentas", "errorVentas");
    let v3 = validarCampo("txtPrecio", "errorPrecio");

    // Si alguno de los campos devuelve false (no pasa la regla), se frena la ejecución
    if (!v1 || !v2 || !v3) {
        return;
    }

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let PrecioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, PrecioProducto);
    
    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}