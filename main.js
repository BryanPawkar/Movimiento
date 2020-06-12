let body = document.getElementsByTagName("body")[0];
let cuadro = document.getElementById("objeto"); 
let up = document.getElementById("arriba");
let down = document.getElementById("abajo");
let left= document.getElementById("izquierda");
let right = document.getElementById("derecha");
let up1 = document.getElementById("arriba2");
let down1 = document.getElementById("abajo2");
let left1= document.getElementById("izquierda2");
let right1 = document.getElementById("derecha2");
let cuadro1 = document.getElementById("objeto2"); 
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
let c = 0; 
let d = 0; 
function suma1(){
    c += 10; 
    return c; 
}
function resta1(){
    c-= 10; 
    return c; 
}
function sumab1(){
    d += 10; 
    return d; 
}
function restab1(){
    d-= 10; 
    return d; 
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

body.addEventListener("keydown",(event)=>{
    if(event.keyCode === 87){
    cuadro1.style.transform = "translate(" + d + "px" + ", " + resta1() + "px" + ")"; 
    }else if(event.keyCode === 83){
    cuadro1.style.transform = "translate(" + d + "px" + ", " +  suma1() + "px" + ")";
    }else if(event.keyCode === 65){
    cuadro1.style.transform = "translate(" + restab1() + "px" + ", " + c + "px" + ")";
    }else if(event.keyCode === 68){
    cuadro1.style.transform = "translate(" + sumab1() + "px" + ", " + c + "px" + ")"; 
    }
})