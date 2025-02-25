document.addEventListener("DOMContentLoaded", function () {
    const botonTema = document.getElementById("cambiarTema");
    const body = document.body;

    
    botonTema.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        
        
        if (body.classList.contains("dark-mode")) {
            botonTema.textContent = "Modo Claro";
        } else {
            botonTema.textContent = "Modo Oscuro";
        }
    });

   
    const imagenes = document.querySelectorAll("#lugares img");
    imagenes.forEach(img => {
        img.addEventListener("click", function () {
            alert("¡Recuerda tomar medidas de prevención contra el dengue!");
        });
    });
});