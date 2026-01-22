const rays = document.querySelector('.glitch-rays');
const lines = document.querySelector('.glitch-lines');
const errors = document.querySelector('.glitch-errors');

const ERROR_MESSAGES = [
  'ERROR 404: REALITY NOT FOUND',
  'SYSTEM FAILURE',
  'SIGNAL LOST',
  'AUDIO DESYNC',
  'BLACK MIRROR ACTIVE',
  'MEMORY CORRUPTED',
  'NOIZE OVERLOAD',
  'DATA FRAGMENTED'
];

function spawnError() {
  const span = document.createElement('span');
  span.textContent =
    ERROR_MESSAGES[Math.floor(Math.random() * ERROR_MESSAGES.length)];

  span.style.top = Math.random() * 90 + '%';
  span.style.left = Math.random() * 80 + '%';

  span.style.transform = `
    translate(${Math.random() * 20 - 10}px, ${Math.random() * 10 - 5}px)
    skew(${Math.random() * 10 - 5}deg)
  `;

  errors.appendChild(span);

  setTimeout(() => span.remove(), 600);
}

setInterval(() => {
  // ACTIVAR
  rays.style.opacity = '0.7';
  lines.style.opacity = '0.4';
  errors.style.opacity = '1';

  rays.style.transform = `
    translateX(${Math.random() * 100 - 50}px)
    skewX(${Math.random() * 10 - 5}deg)
  `;

  // Spawn multiple error messages
  const count = Math.floor(Math.random() * 4) + 2;
  for (let i = 0; i < count; i++) {
    spawnError();
  }

  // DESACTIVAR
  setTimeout(() => {
    rays.style.opacity = '0';
    lines.style.opacity = '0';
    errors.style.opacity = '0';
  }, 350);

}, 4300);
