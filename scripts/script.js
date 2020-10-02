function openMenu () {  
    let ul              = document.getElementById("the-ul");
    // let container       = document.getElementsByTagName("nav")[0];
    // let navBefore = window.getComputedStyle(
    //     document.querySelector('nav'), ':before'
    // );
    // let navBeforeDisplay = navBefore.getPropertyValue('display');

    if (ul.style.display === "none") {
        ul.style.setProperty("display", "flex");
    } else {
        ul.style.setProperty("display", "none");
    }

    // if (navBeforeDisplay === "none") {
    //     document.querySelector('nav').pseudoStyle("before","display","block");        
    // } else {
    //     document.querySelector('nav').pseudoStyle("before","display","none");        
    // }

    window.onresize = function() {
        if (window.innerWidth >= 650) {
          ul.style.display = 'flex';
        } else {
          ul.style.display = 'none';
        }
    }
    
}