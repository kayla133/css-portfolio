
/* ==========================================
   INTERACTIVE HUE SLIDER
   ========================================== */

// Select the elements
const hueSlider = document.querySelector("#hue");
const hueValue = document.querySelector("#hue-value");
const codeHue = document.querySelector("#code-hue");

// Update the seed color
function updateHue() {
  const hue = hueSlider.value;

  // Update the CSS custom property
  document.documentElement.style.setProperty(
    "--seed",
    `oklch(0.55 0.2 ${hue})`
  );

  // Update the displayed values
  hueValue.textContent = `${hue}°`;
  codeHue.textContent = hue;
}

// Listen for slider changes
hueSlider.addEventListener("input", updateHue);

// Initialize the demo
updateHue();
