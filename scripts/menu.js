const menu = document.getElementById('menu');
const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const navElements = document.querySelectorAll('.menu a');

menuButton.addEventListener('click', () => {
  menu.style.display = 'block';
});
closeButton.addEventListener('click', () => {
  menu.style.display = 'none';
});
navElements.forEach((navElement) => {
  navElement.addEventListener('click', () => {
    menu.style.display = 'none';
  });
});

window.onresize = () => {
  if (window.screen.width > 768) {
    document.getElementById('logo-footer').src = './assets/logo-footer-white.svg';
    document.getElementById('p-footer').style.color = '#fff';
  } else {
    document.getElementById('logo-footer').src = './assets/logo-footer.svg';
    document.getElementById('p-footer').style.color = '#272a31';
  }
};

window.onload = () => {
  if (window.screen.width > 768) {
    document.getElementById('logo-footer').src = './assets/logo-footer-white.svg';
    document.getElementById('p-footer').style.color = '#fff';
  } else {
    document.getElementById('logo-footer').src = './assets/logo-footer.svg';
    document.getElementById('p-footer').style.color = '#272a31';
  }
};