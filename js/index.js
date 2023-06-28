document.querySelector(".navbutton").addEventListener("click", function setNavListHeight() {
    if(document.querySelector(".nav-items").style.maxHeight==="0px"){
        document.querySelector(".nav-items").style.maxHeight = "100vh";
        document.querySelector(".navbutton").style.boxShadow = "0 0 5px 5px lightgrey";
    }
    else{
        document.querySelector(".nav-items").style.maxHeight = "0";
        document.querySelector(".navbutton").style.boxShadow = "none"
    }
});

window.addEventListener('resize', function reportWindowSize() {
    if(window.innerWidth> 885) {
        document.querySelector(".nav-items").style.maxHeight = "100vh";
    }
    
  });

  window.addEventListener('load', function reportWindowSize() {
    if(window.innerWidth> 885) {
        document.querySelector(".nav-items").style.maxHeight = "100vh";
    }
    
  });



