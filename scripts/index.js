let prevScrollPos = window.pageYOffset;
let mainNav = document.getElementById("nav-main");
let navBarToggle = document.getElementById("legendMinimizer");
let dropdownActive = false;


window.onscroll = () => {
  if (dropdownActive) {
    dropdownActive = false
    mainNav.classList.toggle("active");
    navBarToggle.classList.toggle("is-active");
  }
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
