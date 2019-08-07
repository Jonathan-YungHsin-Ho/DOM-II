// const blocks = document.querySelector('.blocks');
const blockArr = Array.from(document.querySelectorAll('.block'));
// const red = document.querySelector('.block--red');
// const blue = document.querySelector('.block--blue');
// const green = document.querySelector('.block--green');
// const pink = document.querySelector('.block--pink');
// const gray = document.querySelector('.block--gray');

blockArr.forEach((block, index) => {
  let counter = 0;
  const order = setInterval(() => {
    counter += 1;
    block.addEventListener('click', () => (block.style.order = -1 * counter));
  }, 10);

  //   block.addEventListener('mousemove', event => console.log(event));

  block.addEventListener('mousedown', event => {
    if (event.clientY < 165) {
      let moveRight = 0;
      block.style.position = 'relative';
      const travel = setInterval(() => {
        moveRight += 5;
        block.style.left = `${moveRight}px`;
      }, 10);
    }
  });
});
