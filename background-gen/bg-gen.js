// Variables
const colorA = document.getElementById('color-a');
const colorB = document.getElementById('color-b');
const display = document.getElementById('display');
const solid = document.getElementById('bg-solid');
const linear = document.getElementById('bg-linear');
const radial = document.getElementById('bg-radial');
const linearGradient = 'linear-gradient';
const radialGradient = 'radial-gradient';

// Color Picker Controls


colorA.addEventListener('input', function() {
  display.style.background = `${linearGradient}(${colorA.value}, ${colorB.value})`;
});

colorB.addEventListener('input', function() {
  display.style.background = `linear-gradient(${colorA.value}, ${colorB.value})`;
});


// Background Type

solid.addEventListener('input', function() {
  if(true) {
    colorB.style.display = 'none';
  }
})

linear.addEventListener('input', function() {
  if(true) {
    colorB.style.display = 'inline-block';
    display.style.background = `${linearGradient}(${colorA.value}, ${colorB.value})`;
  }
})

radial.addEventListener('input', function() {
  if(true) {
    colorB.style.display = 'inline-block';
    display.style.background = `${radialGradient}(${colorA.value}, ${colorB.value})`;
  }
})