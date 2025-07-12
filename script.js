
const canvas = document.getElementById('scratch-canvas');
const ctx = canvas.getContext('2d');
const prizeText = document.getElementById('prize-text');
let isDrawing = false;

function drawCover() {
  ctx.fillStyle = '#C0C0C0';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'destination-out';
}

function scratch(e) {
  if (!isDrawing) return;
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  ctx.beginPath();
  ctx.arc(x, y, 15, 0, Math.PI * 2);
  ctx.fill();
}

canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mousemove', scratch);

// Touch support for mobile
canvas.addEventListener('touchstart', () => isDrawing = true);
canvas.addEventListener('touchend', () => isDrawing = false);
canvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;
  ctx.beginPath();
  ctx.arc(x, y, 15, 0, Math.PI * 2);
  ctx.fill();
});

function checkScratchArea() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let scratched = 0;
  for (let i = 0; i < imageData.data.length; i += 4) {
    if (imageData.data[i + 3] < 128) scratched++;
  }
  const total = canvas.width * canvas.height;
  if (scratched > total * 0.4) {
    prizeText.classList.remove('hidden');
  }
}

canvas.addEventListener('mouseup', checkScratchArea);
canvas.addEventListener('touchend', checkScratchArea);

drawCover();
