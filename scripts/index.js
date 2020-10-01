const thumbsUp = String.fromCodePoint(0x1F44D);

console.log(
  `

Looking for how this website was built?

My name is %c Matt Grove%c,

I'm a frontend developer based in Manchester, UK.

Take a look below for more of my portfolio:

https://mattgrove.dev ` + thumbsUp + `



  `, 'color:#ff5f2e', 'color:#323232');
let prevScrollPos = window.pageYOffset;
let mainNav = document.getElementById('nav-main');
let navBarToggle = document.getElementById('legendMinimizer');
let dropdownActive = false;

window.onscroll = () => {
  if (dropdownActive) {
    dropdownActive = false;
    mainNav.classList.toggle('active');
    navBarToggle.classList.toggle('is-active');
  }

  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos < 1 || currentScrollPos < prevScrollPos || dropdownActive) {
    document.getElementById('navbar').style.top = '0';
  } else {
    document.getElementById('navbar').style.top = '-58px';
  }

  prevScrollPos = currentScrollPos;
};

legendMinimizer = () => {
  mainNav.classList.toggle('active');
  navBarToggle.classList.toggle('is-active');
  dropdownActive = !dropdownActive;
};

sendEmail = () => {
  const link = 'mailto:sam.morfitt@hotmail.co.uk'
               + '?subject='
               + encodeURIComponent('Website Query - '
               + document.getElementById('email-name').value + ' - '
               + encodeURIComponent(document.getElementById('email-number').value))
               + '&body='
               + encodeURIComponent(document.getElementById('email-body').value);
  window.location.href = link;
};

yearCalculator = (() => {
  const start = new Date('2013-01-01');
  const today = new Date();

  const years = new Date(today - start).getFullYear() - 1970;
  document.getElementById('subtitle-year').innerHTML = 'Sheffield based with over ' +
  years + ' years in the industry';
  return 7;
})();
