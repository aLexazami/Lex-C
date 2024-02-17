var aboutlinks = document.getElementsByClassName("about-links");
var aboutcontents = document.getElementsByClassName("about-contents");

function opentab(aboutname){
    for(aboutlink of aboutlinks){
        aboutlink.classList.remove("active-link");
    }
    for(aboutcontent of aboutcontents){
        aboutcontent.classList.remove("active-about");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(aboutname).classList.add("active-about");
}
