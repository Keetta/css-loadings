const squares = document.querySelectorAll('.square');

setInterval(() => {
  squares.forEach(square => {
    const before = square.querySelector('::before');
    // Alterna a classe que define a origem do transform
    square.classList.toggle('origin-bottom');
  });
}, 2000);
