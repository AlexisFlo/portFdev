const headings = document.querySelectorAll('h1, h2, h3, .pn-phrase');
const rays = document.querySelector('.glitch-rays');
const lines = document.querySelector('.glitch-lines');
const errors = document.querySelector('.glitch-errors');
const navLogo = document.querySelector('.nav span');
const brand = document.querySelector('.brand-container');
const phrase = document.querySelector('.pn-phrase'); 
const expElements = document.querySelectorAll('.exp-dot, .exp-company, .exp-tech span');
const contactElements = document.querySelectorAll('.card-icon, .card-title, .card-desc');
const canvas = document.getElementById('noise-canvas');
const ctx = canvas.getContext('2d');

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

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function generateNoise() {
  const w = canvas.width;
  const h = canvas.height;
  const idata = ctx.createImageData(w, h);
  const buffer = new Uint32Array(idata.data.buffer);
  
  for (let i = 0; i < buffer.length; i++) {
    // Generamos ruido blanco/gris con alfa completo para que se vea
    if (Math.random() < 0.1) {
        buffer[i] = 0xffffffff; // Píxel blanco
    } else if (Math.random() < 0.2) {
        buffer[i] = 0xff00ff9d; // Píxel de tu color verde neón
    } else {
        buffer[i] = 0x00000000; // Píxel transparente
    }
  }
  ctx.putImageData(idata, 0, 0);
}

function noiseLoop() {
  generateNoise();
  requestAnimationFrame(noiseLoop);
}
noiseLoop();

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
  rays.style.opacity = '0.7';
  lines.style.opacity = '0.4';
  errors.style.opacity = '1';
  canvas.classList.add('noise-active');

  if (brand) brand.classList.add('glitch-active');
  if (phrase) phrase.classList.add('glitch-active');
  if (canvas) canvas.classList.add('noise-active');
  if (navLogo) {
    navLogo.style.textShadow = "2px 0 #ff003c, -2px 0 #00ff9d";
    navLogo.style.transform = "skewX(-10deg)";
  }

  headings.forEach(h => h.classList.add('glitch-active-text'));
  expElements.forEach(el => el.classList.add('glitch-active-text'));
  contactElements.forEach(el => el.classList.add('glitch-active-text'));

  rays.style.transform = `
    translateX(${Math.random() * 100 - 50}px)
    skewX(${Math.random() * 10 - 5}deg)
  `;

  const count = Math.floor(Math.random() * 4) + 2;
  for (let i = 0; i < count; i++) {
    spawnError();
  }

  setTimeout(() => {
    canvas.classList.remove('noise-active');

    if (brand) brand.classList.remove('glitch-active');
    if (phrase) phrase.classList.remove('glitch-active');
    if (canvas) canvas.classList.remove('noise-active');
    if (navLogo) {
      navLogo.style.textShadow = "0 0 10px #00ff9d";
      navLogo.style.transform = "skewX(0deg)";
    }

    headings.forEach(h => h.classList.remove('glitch-active-text'));
    expElements.forEach(el => el.classList.remove('glitch-active-text'));
    contactElements.forEach(el => el.classList.remove('glitch-active-text'));

    rays.style.opacity = '0';
    lines.style.opacity = '0';
    errors.style.opacity = '0';

  }, 350);

}, 4300);
