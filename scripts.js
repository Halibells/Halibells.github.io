/* major contributor for this file: https://github.com/zerovolts */
function scripts() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();
    const currentDate = `${months[today.getMonth()]} ${day}, ${year}`;
    document.getElementById('current-date').innerHTML = currentDate;
}

window.addEventListener("DOMContentLoaded", () => {
    const copyrightEl = document.getElementById('copyright');
    const popoverEl = document.getElementById('copyright-popover');
    copyrightEl.addEventListener('click', () => {
        popoverEl.classList.toggle('hidden');
    });
});

const canvas = document.getElementById('marbleCanvas');
const ctx = canvas.getContext('2d');

// Adjust canvas size to match the container
function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  generateMarblePattern();
}

// Generate a marble-like pattern using sine waves
function generateMarblePattern() {
  const width = canvas.width;
  const height = canvas.height;
  const imgData = ctx.createImageData(width, height);
  const data = imgData.data;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const offset = (y * width + x) * 4;

      // Create sine wave patterns for marble effect
      const noise = Math.sin((x / 20) + Math.sin(y / 15)) * 50 + 200;

      data[offset] = noise; // Red
      data[offset + 1] = noise; // Green
      data[offset + 2] = noise; // Blue
      data[offset + 3] = 50; // Alpha (translucent)
    }
  }

  ctx.putImageData(imgData, 0, 0);
}

// Resize the canvas on window resize
window.addEventListener('resize', resizeCanvas);

// Initialize
resizeCanvas();