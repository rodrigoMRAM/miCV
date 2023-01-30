
const ocultar = document.querySelector(".ocultar");
const hide = document.querySelector(".hide");
const experiencia = document.querySelector(".experiencia");
const principal= document.querySelector(".principal");

ocultar.addEventListener("click", ()=>{ 
    principal.classList.toggle("desactivado");
    experiencia.classList.toggle("experiencia");
})

hide.addEventListener("click",()=>{
    principal.classList.toggle("desactivado");
})

