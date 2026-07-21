/*=========================================
      PROYECTO STEAM
      SCRIPT PRINCIPAL
=========================================*/


/*=========================================
        SLIDER AUTOMÁTICO
=========================================*/

const slides = document.querySelectorAll(".slide");
const puntos = document.querySelectorAll(".punto");

let indice = 0;

function mostrarSlide(n){

    slides.forEach(slide=>{
        slide.classList.remove("activo");
    });

    puntos.forEach(punto=>{
        punto.classList.remove("activo");
    });

    slides[n].classList.add("activo");
    puntos[n].classList.add("activo");

}

function siguienteSlide(){

    indice++;

    if(indice>=slides.length){

        indice=0;

    }

    mostrarSlide(indice);

}

setInterval(siguienteSlide,2000);


/*=========================================
      CLIC EN LOS INDICADORES
=========================================*/

puntos.forEach((punto,i)=>{

    punto.addEventListener("click",()=>{

        indice=i;

        mostrarSlide(indice);

    });

});


/*=========================================
        MENÚ ACTIVO
=========================================*/

const enlaces=document.querySelectorAll(".menu a");

enlaces.forEach(enlace=>{

    enlace.addEventListener("click",function(){

        enlaces.forEach(x=>x.classList.remove("activo"));

        this.classList.add("activo");

    });

});


/*=========================================
      EFECTO APARICIÓN
=========================================*/

const elementos=document.querySelectorAll(

".card,.beneficio,.semana,.objetivo,.galeria img"

);

const aparecer=new IntersectionObserver((entradas)=>{

    entradas.forEach(entrada=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

        }

    });

});

elementos.forEach(el=>{

    aparecer.observe(el);

});


/*=========================================
      BOTÓN SUBIR
=========================================*/

const boton=document.createElement("button");

boton.innerHTML="↑";

boton.id="btnSubir";

document.body.appendChild(boton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        boton.style.display="block";

    }else{

        boton.style.display="none";

    }

});

boton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================
      MENÚ RESPONSIVE
=========================================*/

const menu=document.querySelector(".menu");

const botonMenu=document.createElement("div");

botonMenu.className="menuMovil";

botonMenu.innerHTML="☰";

document.querySelector("header").prepend(botonMenu);

botonMenu.addEventListener("click",()=>{

    menu.classList.toggle("mostrarMenu");

});


/*=========================================
      EFECTO TARJETAS
=========================================*/

const tarjetas=document.querySelectorAll(".card");

tarjetas.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});


/*=========================================
      GALERÍA
=========================================*/

const imagenes=document.querySelectorAll(".galeria img");

imagenes.forEach(img=>{

    img.addEventListener("click",()=>{

        let fondo=document.createElement("div");

        fondo.style.position="fixed";
        fondo.style.left="0";
        fondo.style.top="0";
        fondo.style.width="100%";
        fondo.style.height="100%";
        fondo.style.background="rgba(0,0,0,.8)";
        fondo.style.display="flex";
        fondo.style.justifyContent="center";
        fondo.style.alignItems="center";
        fondo.style.zIndex="99999";

        let imagen=document.createElement("img");

        imagen.src=img.src;

        imagen.style.maxWidth="80%";
        imagen.style.maxHeight="80%";
        imagen.style.borderRadius="15px";
        imagen.style.boxShadow="0 0 30px white";

        fondo.appendChild(imagen);

        document.body.appendChild(fondo);

        fondo.addEventListener("click",()=>{

            fondo.remove();

        });

    });

});


/*=========================================
      FORMULARIO
=========================================*/

const formulario=document.querySelector(".contacto form");

if(formulario){

formulario.addEventListener("submit",function(e){

e.preventDefault();

alert("Gracias por contactarnos.\n\nSu mensaje fue enviado correctamente.");

formulario.reset();

});

}


/*=========================================
      ANIMACIÓN TÍTULOS
=========================================*/

const titulos=document.querySelectorAll("h1");

titulos.forEach(titulo=>{

titulo.addEventListener("mouseenter",()=>{

titulo.style.color="#ff9800";

});

titulo.addEventListener("mouseleave",()=>{

titulo.style.color="";

});

});


console.log("Proyecto STEAM cargado correctamente.");