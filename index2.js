const inputColor = document.querySelector("#inputColor");
const boton = document.querySelector("#boton");
const parrafo = document.querySelector("#textoHexa");
const cardColor = document.querySelector("#cardColor")


console.log(inputColor.value);
// creando el evento al boton 
boton.addEventListener("click", () =>{
    console.log("me diste click");
    console.log(inputColor.value);
    // para recuperar el parrafo
    parrafo.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
     
    //esto copia el texto
    navigator.clipboard
    .writeText(inputColor.value)
    .then(() => console.log("texto copiado"))
    .catch((e) => console.log(e));
});







// esto lo utilzo para probar que el codigo funcione
/*
console.log(inputColor);
console.log(boton);
console.log(parrafo);
console.log(card);
*/