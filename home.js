window.addEventListener('scroll', (e)=> {
    document.querySelector(".hero_heading").style.opacity = (210-window.scrollY)/210;
    document.querySelector(".hero_heading img").style.transform = "translateX(-50%) scale("+(210-window.scrollY)/210+")";

    let items = document.querySelectorAll(".item");
    items.forEach(item => {
        if(window.scrollY+window.innerHeight > item.offsetTop+20 ) {
            item.style.animation = "itemsFadeIn 1s ease-out forwards";
        }
        else {
            item.style.animation = "none";
        }
    })
    
})
let trayOpen = 0;
document.querySelector(".selectMenuHeading").addEventListener('click', () => {
    if(trayOpen === 0) {
        document.querySelector(".selectMenu").style.height = "200px";
        trayOpen = 1;
    }
    else {
        document.querySelector(".selectMenu").style.height = "50px"
        trayOpen = 0;
    }
    
})