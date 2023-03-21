function agrandarimagen() {
    var imagen = document.getElementById("foto");
    if (imagen.style.width <= "350px") {
        imagen.style.width = "450px";
        imagen.style.height = "450px";
    } else {
        imagen.style.width = "350px";
        imagen.style.height = "350px";
    }
}
document.querySelector("#boton-contacto").addEventListener("click", function() {
    document.querySelector("#contacto").scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#boton-experiencia").addEventListener("click", function() {
    document.querySelector("#experiencia").scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#boton-estudios").addEventListener("click", function() {
    document.querySelector("#estudios").scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#boton-sobremi").addEventListener("click", function() {
    document.querySelector("#sobremi").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("boton-sabermasdemi").addEventListener("click",function(){
    document.getElementById("informacion-adicional").style.display= "block"
  })
  document.getElementById("ocultar-masdemi").addEventListener("click",function(){
    document.getElementById("informacion-adicional").style.display= "none"
  })