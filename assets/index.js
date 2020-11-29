var hamburger = document.querySelector(".menu-button");
let menuopen = false;

hamburger.addEventListener("click", function(){
    if(!menuopen){
        hamburger.classList.add("menu-button-open");
        menuopen = true;
        console.log("Menu opened")
    }else{
        hamburger.classList.remove("menu-button-open");
        menuopen = false;
        console.log("Menu closed")
    }
})