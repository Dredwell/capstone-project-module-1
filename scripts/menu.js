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
navElements.forEach( (navElement) => {
  navElement.addEventListener('click', () => {
    menu.style.display = 'none';
  });
});