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
  footerTxt.style.fontSize = '28px';
  footerTxt.style.fontWeight = 'bold';
  footerTxt.style.fontFamily = '"Indie Flower"';
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
const body = document.querySelector('body');
window.addEventListener('wheel', event => {
  mainNav.style.borderBottom = `${Math.abs(event.deltaY)}px dashed black`;
});

// preventDefault & stopPropagation
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(element =>
  element.addEventListener('click', event => {
    element.style.color = '#17A2B8';
    event.preventDefault();
    event.stopPropagation();
  }),
);

const navContainer = document.querySelector('.nav');
navContainer.addEventListener('click', () => {
  navContainer.style.backgroundColor = 'white';
  navContainer.style.padding = '15px 10px';
});

// GSAP
const dest1 = document.querySelector('.destination');
const dest2 = document.querySelector('.destination:nth-of-type(2)');
const dest3 = document.querySelector('.destination:last-of-type');

const nav1 = document.querySelector('.nav-link');
const nav2 = document.querySelector('.nav-link:nth-of-type(2)');
const nav3 = document.querySelector('.nav-link:nth-of-type(3)');
const nav4 = document.querySelector('.nav-link:last-of-type');

const tl = new TimelineMax();

tl.from(logoHeading, 2, {
  ease: Elastic.easeOut.config(1, 0.2),
  x: -400,
});

tl.from(nav1, 0.5, { ease: Power4.easeOut, y: -300 });
tl.from(nav2, 0.5, { ease: Power4.easeOut, y: -300 });
tl.from(nav3, 0.5, { ease: Power4.easeOut, y: -300 });
tl.from(nav4, 0.5, { ease: Power4.easeOut, y: -300 });

tl.from(dest1, 2, { ease: Elastic.easeOut.config(1, 0.3), x: -400 });
tl.from(dest3, 2, { ease: Elastic.easeOut.config(1, 0.3), x: 400 });
tl.from(dest2, 2, { ease: Elastic.easeOut.config(1, 0.3), y: 400 });
// tl.fromTo(
//   dest2,
//   2.5,
//   { rotation: -8 },
//   { rotation: 0, ease: Elastic.easeOut.config(4, 0.1) },
// );
