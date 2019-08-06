// Your code goes here
const mainNav = document.querySelector('.main-navigation');
mainNav.style.zIndex = '999';
mainNav.addEventListener(
  'mouseenter',
  () => (mainNav.style.backgroundColor = '#FDBF52'),
);
mainNav.addEventListener(
  'mouseleave',
  () => (mainNav.style.backgroundColor = 'white'),
);

const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener(
  'click',
  () => (logoHeading.style.fontSize = '60px'),
);

const images = document.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('dblclick', () => {
    img.style.transform = 'scaleX(-1)';
    img.style.zIndex = '-999';
  });
});

const footerTxt = document.querySelector('.footer p');
footerTxt.addEventListener('mouseover', () => {
  footerTxt.style.fontSize = '24px';
  footerTxt.style.fontWeight = 'bold';
  footerTxt.textContent = footerTxt.textContent
    .split('')
    .sort()
    .join('');
});

const letsGoTxt = document.querySelector('.content-section .text-content h2');
document.addEventListener(
  'keydown',
  e => (letsGoTxt.textContent = `${e.code}!`),
);

const price = document.createElement('div');
const welcomeTxt = document.querySelector('.intro h2');
window.addEventListener(
  'resize',
  () =>
    (welcomeTxt.textContent = `Welcome To Fun bus! Only $${window.innerWidth /
      10}0 for a ticket!`),
);

const destHeader = document.querySelector('.content-destination h2');
destHeader.draggable = 'true';
document.addEventListener('drag', () => {
  destHeader.style.fontSize = '18px';
});
