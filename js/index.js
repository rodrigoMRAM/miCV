
const ocultar = document.querySelector(".ocultar");
const hide = document.querySelector(".hide");
const experiencia = document.querySelector(".experiencia");
const principal= document.querySelector(".principal");

ocultar.addEventListener("click", ()=>{ 
    principal.classList.add("desactivado");
    experiencia.classList.remove("desactivado");
})

hide.addEventListener("click",()=>{
    principal.classList.remove("desactivado");
    experiencia.classList.add("desactivado")
})

