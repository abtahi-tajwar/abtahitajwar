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
        document.querySelector(".selectMenu").style.height = "50px"
        trayOpen = 0;
        let tag = e.target.attributes['tag'].value;
        if(tag === 'websites') {
            document.querySelector(".websites").style.display = "block";            
            document.querySelector(".component").style.display = "none";
            document.querySelector(".standalone").style.display = "none";

            document.querySelector(".selectMenu ul li:nth-child(1)").classList.add("selected");
            document.querySelector(".selectMenu ul li:nth-child(2)").classList.remove("selected");
            document.querySelector(".selectMenu ul li:nth-child(3)").classList.remove("selected");
        }
        else if(tag === 'components') {
            document.querySelector(".websites").style.display = "none";
            document.querySelector(".component").style.display = "block";
            document.querySelector(".standalone").style.display = "none";

            document.querySelector(".selectMenu ul li:nth-child(1)").classList.remove("selected");
            document.querySelector(".selectMenu ul li:nth-child(2)").classList.add("selected");
            document.querySelector(".selectMenu ul li:nth-child(3)").classList.remove("selected");
        }
        else if(tag === 'standalone') {
            document.querySelector(".websites").style.display = "none";
            document.querySelector(".component").style.display = "none";
            document.querySelector(".standalone").style.display = "block";

            document.querySelector(".selectMenu ul li:nth-child(1)").classList.remove("selected");
            document.querySelector(".selectMenu ul li:nth-child(2)").classList.remove("selected");
            document.querySelector(".selectMenu ul li:nth-child(3)").classList.add("selected");
            
        }
    })  
});
document.querySelector(".component_holder img:nth-child(1)").addEventListener('click', ()=> {
    document.querySelector(".component_slider").style.transform = 'translateX(0%)';
})
document.querySelector(".component_holder img:nth-child(3)").addEventListener('click', ()=> {
    document.querySelector(".component_slider").style.transform = 'translateX(-50%)';
})
function positionMovingCircle()
{
    document.querySelector(".circle_animation").style.left = parseInt(getComputedStyle(document.querySelector("main")).left) + parseInt(getComputedStyle(document.querySelector("main")).width)+"px";
    document.querySelector(".circle_animation").style.top = getComputedStyle(document.querySelector("main")).top;
}
window.addEventListener('resize', () => {
    positionMovingCircle();
    isMobile = window.matchMedia(mobile).matches;
    
})
window.addEventListener('mousemove', (e)=> {
    document.querySelector(".my_name p:nth-child(1)").style.animation = "none";
    document.querySelector(".my_name p:nth-child(1)").style.transition = "all .3s ease-out";
    document.querySelector(".my_name p:nth-child(1)").style.transform = "translateX(-"+e.clientX/70+"px)";

    document.querySelector(".my_name p:nth-child(2)").style.animation = "none";
    document.querySelector(".my_name p:nth-child(2)").style.transition = "all .3s ease-out";
    document.querySelector(".my_name p:nth-child(2)").style.transform = "translateX("+e.clientX/70+"px)";
})
positionMovingCircle();
let shown = false;

window.addEventListener( 'wheel', function( e ) {
    if(!isMobile) {
        if(detectMouseWheelDirection(e) === 'up' && shown === true) {
            changeState("on");
            shown = false;
            sidenavdisplay(false);
        }
        else if(detectMouseWheelDirection(e) === 'down' && shown === false) {
            changeState("off");
            shown = true;
            sidenavdisplay(true);
        }
    }
    
});
window.addEventListener( 'DOMMouseScroll', function( e ) {
    if(!isMobile) {
        if(detectMouseWheelDirection(e) === 'up' && shown === true) {
            changeState("on");
            shown = false;
            sidenavdisplay(false);
        }
        else if(detectMouseWheelDirection(e) === 'down' && shown === false) {
            changeState("off");
            shown = true;
            sidenavdisplay(true);
        }
    }
});
function changeState(state)
{
    if(state === "on") {
        document.querySelector("main").style.top = "67vh";
        document.querySelector("main").style.width = "66%";
        document.querySelector("main").style.top = "100";
    }
    else {
        document.querySelector("main").style.top = "8.7vh";
        document.querySelector("main").style.width = "70%";
        document.querySelector("main").style.top = "100";
    }
    
}
function sidenavdisplay(bool) {
    if(bool) {
        document.querySelector(".sidebarplaceholder").style.display = "none";
        document.querySelector(".sidebar").style.display = "block";
    }
    else {
        document.querySelector(".sidebar").style.display = "none";
        document.querySelector(".sidebarplaceholder").style.display = "block";
    }
}
function detectMouseWheelDirection( e )
{
    console.log("wheel");
    var delta = null,
        direction = false
    ;
    if ( !e ) { // if the event is not provided, we get it from the window object
        e = window.event;
    }
    if ( e.wheelDelta ) { // will work in most cases
        console.log("kdjfksdj00");
        delta = e.wheelDelta / 60;
    } else if ( e.detail ) { // fallback for Firefox
        delta = -e.detail / 2;
    } else if( e.originalEvent.wheelDelta ) {
        delta = e.originalEvent.wheelDelta / 2;
    }
    if ( delta !== null ) {
        direction = delta > 0 ? 'up' : 'down';
    }

    return direction;
}
document.querySelectorAll(".sidebar li").forEach(item => {
    item.addEventListener('click', (e)=> {
        let tag = e.target.attributes['tag'].value;
        if(tag === 'websites') {
            document.querySelector(".websites").style.display = "block";            
            document.querySelector(".component").style.display = "none";
            document.querySelector(".standalone").style.display = "none";

            document.querySelector(".selectMenu ul li:nth-child(1)").classList.add("selected");
            document.querySelector(".selectMenu ul li:nth-child(2)").classList.remove("selected");
            document.querySelector(".selectMenu ul li:nth-child(3)").classList.remove("selected");
        }
        else if(tag === 'components') {
            document.querySelector(".websites").style.display = "none";
            document.querySelector(".component").style.display = "block";
            document.querySelector(".standalone").style.display = "none";

            document.querySelector(".selectMenu ul li:nth-child(1)").classList.remove("selected");
            document.querySelector(".selectMenu ul li:nth-child(2)").classList.add("selected");
            document.querySelector(".selectMenu ul li:nth-child(3)").classList.remove("selected");
        }
        else if(tag === 'standalone') {
            document.querySelector(".websites").style.display = "none";
            document.querySelector(".component").style.display = "none";
            document.querySelector(".standalone").style.display = "block";

            document.querySelector(".selectMenu ul li:nth-child(1)").classList.remove("selected");
            document.querySelector(".selectMenu ul li:nth-child(2)").classList.remove("selected");
            document.querySelector(".selectMenu ul li:nth-child(3)").classList.add("selected");
            
        }
    })
})