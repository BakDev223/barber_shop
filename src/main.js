let menu =  document.getElementById("menu");
let iconMenu = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" id="icon-menu" class="w-10 h-10">
<path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
</svg>`;
let closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
<path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>`;
let sideBar = document.querySelector(".side-bar");

menu.addEventListener("click",()=>{
    sideBar.classList.contains("left-[-100%]")? sideBar.classList.replace("left-[-100%]","left-0"):sideBar.classList.replace("left-0","left-[-100%]")
    if(sideBar.classList.contains("left-0")){
        menu.innerHTML = closeIcon
    }else{
        menu.innerHTML = iconMenu
    }
})


let cards = document.querySelectorAll("#services > div");
let imgWrapper = document.querySelectorAll(".wrapper");
let para = document.querySelectorAll("#services > div p");

for(let i=0;i<cards.length;i++){
    // Si la souris entre dans la zone
    cards[i].addEventListener("mouseover",()=>{
        for(j=0;j<imgWrapper.length;j++){
            if(j===i){
                imgWrapper[i].classList.add("translate-y-[-25%]")
                para[i].classList.replace("hidden","block")
            }
        }
    })
    // Si la souris quitte la zone
    cards[i].addEventListener("mouseleave",()=>{
        for(j=0;j<imgWrapper.length;j++){
            if(j===i){
                imgWrapper[i].classList.remove("translate-y-[-25%]")
                para[i].classList.replace("block","hidden")
            }
        }
    })
}

