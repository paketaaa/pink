let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');


navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
    navToggle.classList.remove('nav__toggle--closed');
    navToggle.classList.add('nav__toggle--opened');
  }
  else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
    navToggle.classList.add('nav__toggle--closed');
    navToggle.classList.remove('nav__toggle--opened');
  }

  // if (navToggle.classList.contains('nav__toggle--closed')) {
  //   navToggle.classList.remove('nav__toggle-closed')
  //   navToggle.classList.add('nav__toggle--opened')
  // }

  // else {
  //   navToggle.classList.add('nav__toggle--closed')
  //   navToggle.classList.remove('nav__toggle--opened')
  // }
});
