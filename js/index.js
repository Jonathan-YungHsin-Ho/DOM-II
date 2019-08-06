// Your code goes here

// Events 1 & 2: mouseenter & mouseleave
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

// Event 3: click
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener(
  'click',
  () => (logoHeading.style.fontSize = '60px'),
);

// Event 4: dblclick
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('dblclick', () => {
    img.style.transform = 'scaleX(-1)';
    img.style.zIndex = '-999';
  });
});

// Event 5: mouseover
const footerTxt = document.querySelector('.footer p');
footerTxt.addEventListener('mouseover', () => {
  footerTxt.style.fontSize = '24px';
  footerTxt.style.fontWeight = 'bold';
  footerTxt.textContent = footerTxt.textContent
    .split('')
    .sort()
    .join('');
});

// Event 6: keydown
const letsGoTxt = document.querySelector('.content-section .text-content h2');
document.addEventListener(
  'keydown',
  e => (letsGoTxt.textContent = `Let's Go to ${e.code}!`),
);

// Event 7: resize
const price = document.createElement('div');
const welcomeTxt = document.querySelector('.intro h2');
window.addEventListener(
  'resize',
  () =>
    (welcomeTxt.textContent = `Welcome To Fun Bus! Only $${window.innerWidth /
      10}0 for a ticket!`),
);

// Event 8 & 9: drag & dragend
const destHeader = document.querySelector('.content-destination h2');
destHeader.draggable = 'true';
document.addEventListener('drag', () => (destHeader.style.fontSize = '18px'));
document.addEventListener(
  'dragend',
  () => (destHeader.style.fontSize = '48px'),
);

// Event 10: wheel
window.addEventListener('wheel', event => {
  mainNav.style.borderBottom = `${Math.abs(event.deltaY)}px dashed black`;
});
