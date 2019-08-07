const blockArr = Array.from(document.querySelectorAll('.block'));

blockArr.forEach(block => {
  let counter = 0;
  const order = setInterval(() => {
    counter += 1;
    block.addEventListener('click', () => (block.style.order = -1 * counter));
  }, 10);

  block.addEventListener('mousedown', event => {
    if (event.clientY < 175) {
      let moveRight = 0;
      block.style.position = 'relative';
      const travel = setInterval(() => {
        moveRight += 5;
        block.style.left = `${moveRight}px`;
      }, 10);
    }
  });
  console.log(blockArr);
});

// blockArr.forEach(block => {
//   const action = TweenMax.to(block, 3, { x: 1000, paused: true });
//   block.addEventListener('mousedown', () => action.play());
//   window.addEventListener('mouseup', () => action.reverse());
// });
