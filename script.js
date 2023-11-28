document.addEventListener("DOMContentLoaded", function() {
    // Muestra la ventana emergente al cargar la página
    mostrarVentana();
});

function mostrarVentana() {
    var ventanaEmergente = document.getElementById("ventanaEmergente");
    ventanaEmergente.style.display = "flex";
}

function cerrarVentana() {
    var ventanaEmergente = document.getElementById("ventanaEmergente");
    ventanaEmergente.style.display = "none";
}
