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

function goToLogin() {
    // simulate  a mouse click
    window.location.href = "pages/login.html";
}

function getTime() {
    let today = new Date();
    // let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let date = today.toLocaleString('default', { month: 'short' }) + '. ' + today.getDate() + ", " +today.getFullYear();    
    let datetime = (today.getDate() > 9) ? today.getDate() : "0" + today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear();
    document.getElementsByTagName("time")[0].innerHTML = date;
    // datetime="03-09-2014"
    document.getElementsByTagName("time")[0].setAttribute("datetime", datetime);
}

document.getElementById("input").addEventListener("change", logMeIn);
function logMeIn() {    
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
    
        if (username.toLowerCase() === "ramoun" && password.toLowerCase() === "ramoun16") {
            window.location.href = "../pages/dashboard.html";    
            alert(username + " " + password);}
        else {
            alert("Invalid username or password");
        }
}
