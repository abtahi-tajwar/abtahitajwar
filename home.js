window.addEventListener('scroll', (e)=> {
    document.querySelector(".hero_heading").style.opacity = (210-window.scrollY)/210;
    document.querySelector(".hero_heading img").style.transform = "translateX(-50%) scale("+(210-window.scrollY)/210+")";

    let items = document.querySelectorAll(".item");
    items.forEach(item => {
        if(window.scrollY+window.innerHeight > item.offsetTop ) {
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
    
});
document.querySelectorAll(".selectMenu ul li").forEach(item => {
    item.addEventListener('click', (e) => {
        let tag = e.target.attributes['tag'].value;
        if(tag === 'websites') {
            document.querySelector(".websites").style.display = "block";            
            document.querySelector(".item").style.display = "none";
            document.querySelector(".components").style.display = "none";

            document.querySelector(".selectMenu ul li:nth-child(1)").classList.add("selected");
            document.querySelector(".selectMenu ul li:nth-child(2)").classList.remove("selected");
            document.querySelector(".selectMenu ul li:nth-child(3)").classList.remove("selected");
        }
        else if(tag === 'components') {
            document.querySelector(".websites").style.display = "none";
            document.querySelector(".item").style.display = "block";
            document.querySelector(".components").style.display = "none";

            document.querySelector(".selectMenu ul li:nth-child(1)").classList.remove("selected");
            document.querySelector(".selectMenu ul li:nth-child(2)").classList.add("selected");
            document.querySelector(".selectMenu ul li:nth-child(3)").classList.remove("selected");
        }
        else if(tag === 'standalone') {
            document.querySelector(".websites").style.display = "none";
            document.querySelector(".item").style.display = "none";
            document.querySelector(".components").style.display = "block";

            document.querySelector(".selectMenu ul li:nth-child(1)").classList.remove("selected");
            document.querySelector(".selectMenu ul li:nth-child(2)").classList.remove("selected");
            document.querySelector(".selectMenu ul li:nth-child(3)").classList.add("selected");
            
        }
    })  
});