let prevScrollPos = window.pageYOffset;
let mainNav = document.getElementById("nav-main");
let navBarToggle = document.getElementById("legendMinimizer");
let dropdownActive = false;


console.log("hi")


window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos < 1 || currentScrollPos < prevScrollPos || dropdownActive) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-58px";
  }
  prevScrollPos = currentScrollPos;
}


legendMinimizer = () => {
      mainNav.classList.toggle("active");
      navBarToggle.classList.toggle("is-active");
      dropdownActive = !dropdownActive;
}
