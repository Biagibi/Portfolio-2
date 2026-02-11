const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  const percent = circle.getAttribute('data-percent');
  const img = circle.getAttribute('data-img'); // pega o caminho da imagem
  const span = circle.querySelector('span');

  // Aplica a imagem no span
  span.style.setProperty('--img-url', `url('${img}')`);

  // Preenche o círculo de acordo com a porcentagem
  circle.style.background = `conic-gradient(#355654 ${percent}%, #1a2527 ${percent}%)`;

  // Efeito de animação ao passar o mouse
  circle.addEventListener('mouseenter', () => {
    let current = 0;
    const interval = setInterval(() => {
      if (current >= percent) {
        clearInterval(interval);
      } else {
        current++;
        circle.style.background = `conic-gradient(#355654 ${current}%, #1a2527 ${current}%)`;
      }
    }, 15);
  });
});


c6cccc