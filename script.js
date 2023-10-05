let svg1 = document.getElementById("svg1");
let div1 = document.getElementById("div1");
let para1 = document.getElementById("para1");
let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
svg1.addEventListener("click",function(){
    para1.classList.toggle("d-none");
    s1.classList.toggle("d-none");
    s2.classList.toggle("d-none");
});

let svg2 = document.getElementById("svg2");
let div2 = document.getElementById("div2");
let para2 = document.getElementById("para2");
let s3 = document.getElementById("s3");
let s4 = document.getElementById("s4");
svg2.addEventListener("click",function(){
    para2.classList.toggle("d-none");
    s3.classList.toggle("d-none");
    s4.classList.toggle("d-none");
});


let svg3 = document.getElementById("svg3");
let div3 = document.getElementById("div3");
let para3 = document.getElementById("para3");
let s5 = document.getElementById("s5");
let s6 = document.getElementById("s6");
svg3.addEventListener("click",function(){
    para3.classList.toggle("d-none");
    s5.classList.toggle("d-none");
    s6.classList.toggle("d-none");
});