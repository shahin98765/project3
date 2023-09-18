let palette= document.querySelector(".palette")
let colorthem= document.querySelector(".colorthem")
let red= document.querySelector(".red")
let green= document.querySelector(".green")
let blue= document.querySelector(".blue")
let link= document.querySelector(".link")

palette.addEventListener("click", function(){
    colorthem.classList.toggle("colore")
})
red.addEventListener("click", function(){
    link.setAttribute("href", "css/red.css")
})
green.addEventListener("click", function(){
    link.setAttribute("href", "css/green.css")
})
blue.addEventListener("click", function(){
    link.setAttribute("href", "css/blue.css")
})
let counter = document.querySelectorAll(".counter")
let count = 0
let yes = Array.from(counter)
yes.map((item)=>{
let stop=setInterval(() => {
    count++
    if (count <= item.dataset.me){
        item.innerHTML=count
    }
    else{
        clearInterval(stop)
    }
}, item.dataset.speed)
})