const blocks = document.querySelector('.blocks');
const blockArr = Array.from(document.querySelectorAll('.block'));
const red = document.querySelector('.block--red');
const blue = document.querySelector('.block--blue');
const green = document.querySelector('.block--green');
const pink = document.querySelector('.block--pink');
const gray = document.querySelector('.block--gray');

blockArr.forEach(block => {
  //   block.addEventListener('click', () => {});
  block.addEventListener('mousedown', () => {
    let counter = 0;
    block.style.position = 'relative';
    const travel = setInterval(() => {
      counter += 5;
      block.style.left = `${counter}px`;
    }, 10);
  });
});
