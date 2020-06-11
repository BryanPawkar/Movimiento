
let cuadro = document.getElementById("objeto"); 
let up = document.getElementById("arriba");
let down = document.getElementById("abajo");
let left= document.getElementById("izquierda");
let right = document.getElementById("derecha");
let a = 0; 
let b = 0; 
function suma(){
    a += 10; 
    return a; 
}
function resta(){
    a-= 10; 
    return a; 
}
function sumab(){
    b += 10; 
    return b; 
}
function restab(){
    b-= 10; 
    return b; 
}

up.addEventListener("click",()=>{
    cuadro.style.transform = "translate(" + b + "px" + ", " + resta() + "px" + ")"; 
})
down.addEventListener("click",()=>{
    cuadro.style.transform = "translate(" + b + "px" + ", " +  suma() + "px" + ")"; 
})
left.addEventListener("click",()=>{
    cuadro.style.transform = "translate(" + restab() + "px" + ", " + a + "px" + ")"; 
})
right.addEventListener("click",()=>{

    cuadro.style.transform = "translate(" + sumab() + "px" + ", " + a + "px" + ")"; 
})
