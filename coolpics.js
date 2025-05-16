// Toggle mobile menu open/close
document.getElementById("menu-button").addEventListener("click", function () {
  const nav = document.getElementById("main-nav");
  nav.classList.toggle("open");
});

// Resize handler to reset menu when resizing window
function handleResize() {
  const nav = document.getElementById("main-nav");
  if (window.innerWidth > 1000) {
    nav.classList.add("open");
  } else {
    nav.classList.remove("open");
  }
}
handleResize();
window.addEventListener("resize", handleResize);

// Modal logic
const gallery = document.querySelector('.gallery');

// Function to handle image click in the gallery
gallery.addEventListener('click', function(event) {
  const clickedImage = event.target.closest('img');
  if (!clickedImage) return;

  // Get new full-size image source
  const originalSrc = clickedImage.getAttribute('src');
  const baseName = originalSrc.split('-')[0]; // 'norris'
  const fullImageSrc = baseName + '-full.jpeg'; // 'norris-full.jpeg'

  // Create and configure the dialog
  const modal = document.createElement('dialog');
  modal.innerHTML = `
    <img src="${fullImageSrc}" alt="${clickedImage.alt}">
    <button class="close-viewer">X</button>
  `;
  document.body.appendChild(modal);
  modal.showModal();

  // Close when 'X' button is clicked
  modal.querySelector('.close-viewer').addEventListener('click', () => {
    modal.close();
  });

  // Close when clicking outside the image
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });

  // Remove modal from DOM when closed
  modal.addEventListener('close', () => {
    modal.remove();
  });
});
