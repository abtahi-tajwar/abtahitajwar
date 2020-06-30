let mobile = 'all and (orientation: portrait) and (max-width: 1000px)';
let isMobile = window.matchMedia(mobile).matches;

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

document.querySelector(".copy_email").addEventListener('click', ()=> {
    popUp();
    setTimeout(popHide, 1000);
})
function popUp()
{
    document.querySelector(".popup").style.opacity = "1";
    document.querySelector(".popup").style.transform = "translate(0px, 0px)";
    document.querySelector(".popup").style.scale = "1";
}
function popHide()
{
    document.querySelector(".popup").style.opacity = "0";
    document.querySelector(".popup").style.transform = "translate(-100%, 100%)";
    document.querySelector(".popup").style.scale = "0.5";
}
