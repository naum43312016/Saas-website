function changeIconOnHover(element){
    element.parentElement.getElementsByClassName("regular-icon").item(0).style.display = "none";
    element.parentElement.getElementsByClassName("on-hover-icon").item(0).style.display = "inline";
}

function restoreIcon(element){
    element.parentElement.getElementsByClassName("regular-icon").item(0).style.display = "inline";
    element.parentElement.getElementsByClassName("on-hover-icon").item(0).style.display = "none";
}

function toggleSidebar(behPar){
    if(behPar==1){
        var sidebar = document.getElementById('sidebar');
        sidebar.style.cssText = 'display:none !important';
        var content = document.getElementById('site-content');
        content.className = '';
        content.setAttribute("class", "col-12");
        document.getElementById('menu-icon').style.display = 'inline';
    }else{
        var sidebar = document.getElementById('sidebar');
        if(window.innerWidth<992){
            sidebar.style.cssText = 'display:block !important'; 
        }else{
            sidebar.style.cssText = 'display:block';
        }
        var content = document.getElementById('site-content');
        content.className = '';
        content.setAttribute("class", "col-lg-9 col-xl-10 col-sm-12");
        document.getElementById('menu-icon').style.display = 'none';
    }
}

window.addEventListener('resize', function(event){
    setTimeout(function(){
        var newWidth = window.innerWidth;
        if(newWidth<800){
            if(isTouchscreen()){
                indicateGesture();
            }
        }
    },300);
});

if(isTouchscreen()){
    indicateGesture();
}
//Check if device is mobile code from stackoverflow.com
function isTouchscreen() {
    return ("ontouchstart" in window) || (navigator.maxTouchPoints > 0) ? true : false;
}

//Tell mobile or touch screen user that he can open sidebar
function indicateGesture(){
    var arrow = document.getElementById('arrow-indicate-gesture');
    arrow.style.cssText = 'display:block';
    arrow.animate({
        'left' : "500px",
        'opacity' : '0'
        },1000);
    setTimeout(function(){arrow.style.cssText = 'display:none';},1000);
}

//Menu for mobile devices part of code from stackoverflow.com
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        

function getTouches(evt) {
  return evt.touches;
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
};                                                

function handleTouchMove(evt) {
    if (!xDown) {
        return;
    }
    var xUp = evt.touches[0].clientX;                                    
    var xDiff = xDown - xUp;
    if ( Math.abs( xDiff ) >0 ) {
        if ( xDiff > 0 ) {
            toggleSidebar(1); 
        } else {
            toggleSidebar(0);
        }                       
    }
    xDown = null;
}; 