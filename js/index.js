
const ocultar = document.querySelector(".ocultar");
const hide = document.querySelector(".hide");
const experiencia = document.querySelector(".experiencia");
const principal= document.querySelector(".principal");
const contacto = document.querySelector(".contacto");
const hidecontacto = document.querySelector(".hidecontacto");

ocultar.addEventListener("click", ()=>{ 
    principal.classList.add("desactivado");
    experiencia.classList.remove("desactivado");
    contacto.classList.add("desactivado")
})

hide.addEventListener("click",()=>{
    principal.classList.remove("desactivado");
    contacto.classList.add("desactivado")
    experiencia.classList.add("desactivado")
})


hidecontacto.addEventListener("click",()=>{
    principal.classList.add("desactivado")
    experiencia.classList.add("desactivado")
    contacto.classList.remove("desactivado")
})
