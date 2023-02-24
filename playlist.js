var rap = document.getElementsByClassName("rap");
var keyglock = document.getElementById("keyglock");
var acdc = document.getElementById("acdc");
var louisamstrong = document.getElementById("louisamstrong");
var davidguetta = document.getElementById("davidguetta");
var bobmarley = document.getElementById("bobmarley");
var keyglock1 = document.getElementById("keyglock1");
var acdc1 = document.getElementById("acdc1");
var louisamstrong1 = document.getElementById("louisamstrong1");
var davidguetta1 = document.getElementById("davidguetta1");
var bobmarley1 = document.getElementById("bobmarley1");
var playlistpreferer = document.getElementById("playlistpreferer");
let index = 0;
let indexx = 0;
let indexxx = 0;
let indexxxx = 0;
let indexxxxx = 0;
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");

document.getElementsByClassName('rap')[0].addEventListener("click", ()=>{
    if (window.getComputedStyle(keyglock1).display == "none") {
        keyglock.style.width = "1535px";
        keyglock.style.height = "50px";
        keyglock1.style.width = "1535px";
        keyglock1.style.display = "block";
    } else {
        keyglock.style.width = "0x";
        keyglock.style.height = "0px";
        keyglock1.style.width = "0px";
        keyglock1.style.display = "none";
    }}
)
document.getElementsByClassName('rap')[1].addEventListener("click", ()=>{
    if (window.getComputedStyle(acdc1).display == "none") {
        acdc.style.width = "1535px";
        acdc.style.height = "50px";
        acdc1.style.width = "1535px";
        acdc1.style.display = "block";
    } else {
        acdc.style.width = "0x";
        acdc.style.height = "0px";
        acdc1.style.width = "0px";
        acdc1.style.display = "none";
    }}
)
document.getElementsByClassName('rap')[2].addEventListener("click", ()=>{
    if (window.getComputedStyle(louisamstrong1).display == "none") {
        louisamstrong.style.width = "1535px";
        louisamstrong.style.height = "50px";
        louisamstrong1.style.width = "1535px";
        louisamstrong1.style.display = "block";
    } else {
        louisamstrong.style.width = "0x";
        louisamstrong.style.height = "0px";
        louisamstrong1.style.width = "0px";
        louisamstrong1.style.display = "none";
    }}
)
document.getElementsByClassName('rap')[3].addEventListener("click", ()=>{
    if (window.getComputedStyle(davidguetta1).display == "none") {
        davidguetta.style.width = "1535px";
        davidguetta.style.height = "50px";
        davidguetta1.style.width = "1535px";
        davidguetta1.style.display = "block";
    } else {
        davidguetta.style.width = "0x";
        davidguetta.style.height = "0px";
        davidguetta1.style.width = "0px";
        davidguetta1.style.display = "none";
    }})
document.getElementsByClassName('rap')[4].addEventListener("click", ()=>{
    if (window.getComputedStyle(bobmarley1).display == "none") {
        bobmarley.style.width = "1535px";
        bobmarley.style.height = "50px";
        bobmarley1.style.width = "1535px";
        bobmarley1.style.display = "block";
    } else {
        bobmarley.style.width = "0x";
        bobmarley.style.height = "0px";
        bobmarley1.style.width = "0px";
        bobmarley1.style.display = "none";
    }})

    keyglock1.addEventListener('click',()=>{
        index = "keyglock";
        keyglock1.innerHTML = index;
        p1.innerHTML = index;
    })
    acdc1.addEventListener('click',()=>{
        indexx = "acdc";
        acdc1.innerHTML = indexx;
        p2.innerHTML = indexx;
    })
    louisamstrong1.addEventListener('click',()=>{
        indexxx = "louis amstrong";
        louisamstrong1.innerHTML = indexxx;
        p3.innerHTML= indexxx;
    })
    davidguetta1.addEventListener('click',()=>{
        indexxxx = "david guetta";
        davidguetta1.innerHTML = indexxxx;
        p4.innerHTML= indexxxx;
    })
    bobmarley1.addEventListener('click',()=>{
        indexxxxx = "bob marley";
        bobmarley1.innerHTML= indexxxxx;
        p5.innerHTML= indexxxxx;
    })