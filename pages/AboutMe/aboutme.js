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
    copyEmail();
    popUp();
    setTimeout(popHide, 1000);
})
document.querySelector(".my_subtitle span").addEventListener('mouseover', (e)=> {
    console.log("mouse over");
    let popup = document.querySelector(".my_skills");
    popup.style.display = "block";
    popup.style.right = window.innerWidth-e.clientX+"px";
    popup.style.top = e.clientY+"px";
})

document.querySelector(".my_subtitle span").addEventListener('mouseout', ()=> {
    document.querySelector(".my_skills").style.display = "none";
})
function copyEmail()
{
    document.querySelector(".email input").select();
    document.execCommand('copy');
    document.querySelector(".email input").blur();
}
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
