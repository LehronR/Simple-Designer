// Variables
const colorA = document.getElementById('color-a');
const colorB = document.getElementById('color-b');
const display = document.getElementById('display');
const solid = document.getElementById('bg-solid');
const linear = document.getElementById('bg-linear');
const radial = document.getElementById('bg-radial');
const linearGradient = 'linear-gradient';
const radialGradient = 'radial-gradient';
const selector = document.getElementById('grad-direction');

// Gradient direction array
const gradientDirections = ['to top', 'to left', 'to right', 'to top left', 'to bottom left', 'to top right', 'to bottom right'];

// Color Picker Controls
colorA.addEventListener('input', function() {
  if(solid.value === 'on') {
    console.log('solid');
    display.style.background = colorA.value;
  } else if(linear.value === 'on') {
    console.log('linear');
    display.style.background = `${linearGradient}(${colorA.value}, ${colorB.value})`;
  } else if(radial.value === 'on') {
    console.log('radial');
    display.style.background = `${radialGradient}(${colorA.value}, ${colorB.value})`;
  }
});

colorB.addEventListener('input', function() {
  if(solid.value === 'on') {
    console.log('solid');
    display.style.background = colorA.value;
  } else if(linear.value === 'on') {
    console.log('linear');
    display.style.background = `${linearGradient}(${colorA.value}, ${colorB.value})`;
  } else if(radial.value === 'on') {
    console.log('radial');
    display.style.background = `${radialGradient}(${colorA.value}, ${colorB.value})`;
  }
});


// Background Type
solid.value = 'off';
linear.value = 'off';
radial.value = 'off';

solid.addEventListener('click', function() {
  solid.value = 'on';
  linear.value = 'off';
  radial.value = 'off';
  colorB.style.display = 'none';
  display.style.background = `${colorA.value}`;
  console.log(`${solid.value} ${linear.value} ${radial.value}`)
})

linear.addEventListener('click', function() {
  linear.value = 'on';
  solid.value = 'off';
  radial.value = 'off';
  colorB.style.display = 'inline-block';
  display.style.background = `${linearGradient}(${colorA.value}, ${colorB.value})`;
  console.log(`${solid.value} ${linear.value} ${radial.value}`)
})

radial.addEventListener('click', function() {
    radial.value = 'on';
    linear.value = 'off';
    solid.value = 'off';
    colorB.style.display = 'inline-block';
    display.style.background = `${radialGradient}(${colorA.value}, ${colorB.value})`;
    console.log(`${solid.value} ${linear.value} ${radial.value}`)
})
console.log(`${solid.value} ${linear.value} ${radial.value}`)

// Gradient Direction Controls
selector.addEventListener('change', function() {
  if(solid.value === 'on') {
    display.style.background = colorA.value;
  } else if(linear.value === 'on' && selector.selectedIndex === 2) {
    display.style.background = `${linearGradient}(${gradientDirections[0]}, ${colorA.value}, ${colorB.value})`;
  }
})