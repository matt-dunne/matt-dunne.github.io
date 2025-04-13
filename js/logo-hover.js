document.addEventListener("DOMContentLoaded", function() {
  const logoOverlay = document.getElementById("logo-overlay");
  const overlayImg = logoOverlay.querySelector("img");
  const overlayText = logoOverlay.querySelector(".overlay-text");
  const logos = document.querySelectorAll("#skills .logo-col img");
  const headers = document.querySelectorAll("#skills .skillBox h3");

  logos.forEach(logo => {
    logo.addEventListener("mouseenter", function() {
      // Fade out all logo images and the headers
      logos.forEach(l => l.style.opacity = "0");
      headers.forEach(h => h.style.opacity = "0");

      // Update the overlay image source
      overlayImg.src = this.src;

      // Retrieve the associated text from the hidden text block and update the overlay
      const logoContainer = this.closest('.logo-col');
      if (logoContainer) {
        const logoTextElem = logoContainer.querySelector('.logo-text');
        if (logoTextElem) {
          overlayText.innerHTML = logoTextElem.innerHTML;
        }
      }
      // Display the overlay
      logoOverlay.style.opacity = "1";
    });

    logo.addEventListener("mouseleave", function() {
      // Restore visibility of the logos and the headers when the cursor leaves the logo
      logos.forEach(l => l.style.opacity = "1");
      headers.forEach(h => h.style.opacity = "1");
      // Hide the overlay
      logoOverlay.style.opacity = "0";
    });
  });
});