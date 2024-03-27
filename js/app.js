let contador = 0;

//REFERENCIAS AL HTML

const btnIncrementar = document.querySelector("#incrementar"),
     btnDisminuir = document.querySelector("#disminuir"),
     btnResetear = document.querySelector("#resetear");

const letreroContador = document.querySelector("p");

//FUNCIONES

const incrementar = ()=> (contador++);

const disminuir = ()=>(contador--);

const resetear = ()=>(contador=0);

//EVENTOS 

btnIncrementar.addEventListener("click", ()=>{
    incrementar();
    letreroContador.innerText = contador;
})

btnDisminuir.addEventListener("click", ()=>{
    disminuir();
    letreroContador.innerText = contador;

})

btnResetear.addEventListener("click", ()=>{
    resetear();
    letreroContador.innerText = contador;

})